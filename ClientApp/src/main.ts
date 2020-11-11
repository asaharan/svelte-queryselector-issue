import '@shoelace-style/shoelace/dist/shoelace/shoelace.css';
import { setAssetPath, SlButton, SlDropdown } from '@shoelace-style/shoelace';

import App from './App.svelte';

// setAssetPath(document.currentScript.src);
customElements.define('sl-button', SlButton);
customElements.define('sl-dropdown', SlDropdown);

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
