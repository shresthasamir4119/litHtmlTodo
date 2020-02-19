import {html, render} from 'lit-html';

class TodoAdd extends HTMLElement {
	static get observedAttributes(){
		return ['check'];
	}

	constructor(){
		super();
		this.attachShadow({mode:'open'});
	}
	connectedCallback(){
		this.update();
	}

	
	attributeChangedCallback(name,oldVal,newVal){
		//clearing the field
		if(this.shadowRoot.getElementById('field')){
			this.shadowRoot.getElementById('field').value='';
		}
	}

	update(){
		render(this.template(),this.shadowRoot,{eventContext:this});
	}

	template(){
		return html`
			<style>
				.input{
					width:98%;
					font-size: 2em;
					text-align : center;
					margin:0;
					padding:0;
				}
			</style>
			<input class = "input" @keypress=${this.input} placeholder = "Enter a todo here" id="field"></input>
			`;
		
	}

}

customElements.define('todo-add',TodoAdd);