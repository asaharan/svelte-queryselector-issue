import '@shoelace-style/shoelace/dist/shoelace/shoelace.css';
import { setAssetPath, SlButton, SlDrawer, SlDropdown } from '@shoelace-style/shoelace';
import App from './App.svelte';

class MyButton extends HTMLElement{
	constructor(){
		super();
		console.log('mybutton mounted')
	}
}

// setAssetPath(document.currentScript.src);
customElements.define('sl-button', MyButton);
customElements.define('sl-drawer', SlDrawer);

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
