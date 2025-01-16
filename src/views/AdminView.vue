<template>
<NavbarComponent />
<div class="container">
    <h1>ADMINISTRACION</h1>
    <div class="button">
    <v-btn variant="elevated" color="primary">
        Agregar Cursos
    </v-btn>
    </div>
</div>
<div>
    <ListDetailComponent />

    <QuantityComponent/>
</div>

<FooterComponent />
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import ListDetailComponent from '../components/ListDetailComponent.vue';
import QuantityComponent from '../components/QuantityComponent.vue';


export default {
    name: 'HomeView',

    components: {
        FooterComponent,
        NavbarComponent,
        ListDetailComponent,
        QuantityComponent
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh; /* Ajusta la altura para centrar verticalmente */
}
.button {
    margin-top: 40px; /* Margen superior para separar el botón del título */
}
</style>