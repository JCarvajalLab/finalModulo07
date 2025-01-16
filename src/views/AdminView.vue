<template>
<NavbarComponent/>
<div>
    <ListDetailComponent/>
</div>

<FooterComponent/>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import ListDetailComponent from '../components/ListDetailComponent.vue';

export default {
    name: 'HomeView',

    components: {
        FooterComponent,
        NavbarComponent,
        ListDetailComponent
    },
};
</script>
