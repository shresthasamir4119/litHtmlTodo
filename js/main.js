import {html, render} from 'lit-html';
import './component/header';
import './component/list';
import './component/todoAdd';


class MainTodo extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({mode:'open'});
		this.data = [
			{
				id:1,
				todo:"todo1oooooooo",
				completed:false
			},
			{
				id:2,
				todo:"todo2",
				completed:true
			},
			{
				id:3,
				todo:"todo3",
				completed:false
			}
		]
	}

	attributeChangedCallback(){
		console.log('here');
	}
	connectedCallback() {
    this.update();
    }
	update(){
		render(this.template(),this.shadowRoot,{eventContext:this});
	}

	template(){
		return html`<todo-header></todo-header>
		<todo-add id = "add" .input = ${this.inputhandler.bind(this)} check = ${this.data.length} .delete = ${this.delete.bind(this)} ></todo-add>
		<todo-list .data = ${this.data} .clicked = ${this.clickhandler.bind(this)} length = ${this.data.length} id="list"></todo-list>
		`;
	}	

	toggleComplete(index){
		this.data[index].completed = !this.data[index].completed;
	}

	clickhandler(index,event){
		this.toggleComplete(index);
		this.changeAttributeList();
		this.update();
	}
	
	inputhandler(e){
		if(e.keyCode==13&&e.target.value!=''){
			this.data = [...this.data,{id:this.data.length+1,todo: e.target.value, completed:false}];
			this.changeAttributeList();
			this.changeAttributeField();
			this.update();
		}
	}
	delete(index){
		console.log(index);
	}

	changeAttributeList(){
		//rendering List
		this.shadowRoot.getElementById('list').setAttribute('length',this.data.length);
	}
	changeAttributeField(){
		//rendering Field
		this.shadowRoot.getElementById('add').setAttribute('check',this.data.length);
	}
		

}

customElements.define('todo-main',MainTodo);

