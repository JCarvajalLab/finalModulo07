<template>
<NavbarComponent/>
<div>
    <ListComponent/>
</div>

<FooterComponent/>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import ListComponent from '../components/ListComponent.vue';


export default {
    name: 'HomeView',

    components: {
        FooterComponent,
        NavbarComponent,
        ListComponent
    },
};
</script>
