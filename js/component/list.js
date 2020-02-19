import {html, render} from 'lit-html';
import {styleMap} from 'lit-html/directives/style-map.js';
import './todoAdd.js';


class TodoList extends HTMLElement{
	static get observedAttributes(){
		return ['length'];
	}
	constructor(){
		super();
		this.attachShadow({mode:'open'})
	}

	connectedCallback(){
		this.update();
	}
	attributeChangedCallback(name,oldVal,newVal){
		this.update();
	}

	update(){
		render(this.template(),this.shadowRoot,{eventContext:this});
	}

	template(){
		return html`
		<style>
			ul{
				list-style: none;
				color: #444;
				font-size: 20px;
				padding:0 0 0 10px;
			}
		</style>

		<ul>${this.data.map( (data,index) => {
			return html`<li @click = ${this.clicked.bind(this,index)} style=${styleMap(data.completed ? {textDecoration:'line-through'} : {textDecoration:'none'})}>${data.todo}</li>
			`;
		})}`;		
	}

}

customElements.define('todo-list',TodoList);