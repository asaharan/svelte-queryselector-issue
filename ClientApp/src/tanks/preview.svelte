<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const drawer = document.querySelector('.drawer-overview');
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
    <sl-button slot="footer" class="btn btn-close" type="primary">Close</sl-button>
</sl-drawer>

<sl-button>Open Drawer</sl-button>

<input type="email">

<div class="tank preview card">
    <h1>preview</h1>

    <sl-button>Test btn</sl-button>
</div>
