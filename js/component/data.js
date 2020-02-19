import {html,render} from 'lit-html';

class TodoData extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({mode:open});
	}
	connectedCallback(){
		this.update();
	}
	update(){
		this.data = [
		{
			id:1,
			todo:"todo1",
			completed:false
		},
		{
			id:2,
			todo:"todo2",
			completed:false
		},
		{
			id:3,
			todo:"todo3",
			completed:false
		}
		]
	}

}