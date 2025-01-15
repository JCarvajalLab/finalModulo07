<template>
<NavbarComponent/>
<div>
    <h1>AdminView</h1>
</div>

<FooterComponent/>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';

export default {
    name: 'HomeView',

    components: {
        FooterComponent,
        NavbarComponent
    },
};
</script>
