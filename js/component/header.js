import {html, render} from 'lit-html';

class Header extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({mode:'open'});
	}
	connectedCallback() {
    this.update();
  }

	update() {
	    render(this.template(), this.shadowRoot, {eventContext: this});
	  }

	template() {
	    return html`
	    <style>
	    h1{
	       color : #eee;
	       text-align : center;
	       background : #444;
	    }
	    </style>
	    <div>
	    <h1>
	    Todo-App
	    </h1>
	    </div>
	    `;
	  }
}

customElements.define('todo-header',Header);