<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('mounted');
        const drawer = document.querySelector('.drawer-overview');
        console.log(drawer, document.body.innerHTML, document.querySelector('sl-button.btn.btn-close'));
        console.log(drawer.querySelector('sl-button[data-x="hh"]'),drawer.querySelector('sl-button[type="primary"]'),
            drawer.querySelector('sl-button[disabled]'));
        const openButton = drawer.nextElementSibling;
        const closeButtonByType = drawer.querySelector('sl-button[type="primary"]');
        const closeButtonByClass = drawer.querySelector('.btn-close');

        openButton.addEventListener('click', () => drawer.show());
        closeButtonByType.addEventListener('click', () => drawer.hide());
        closeButtonByClass.addEventListener('click', () => drawer.hide());
    });
</script>

<sl-drawer label="Drawer" class="drawer-overview">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <sl-button disabled slot="footer" data-x='hh'class="btn btn-close" type="primary">Close</sl-button>
</sl-drawer>

<sl-button>Open Drawer</sl-button>

<input type="email">

<div class="tank preview card">
    <h1>preview</h1>

    <sl-button>Test btn</sl-button>
</div>
