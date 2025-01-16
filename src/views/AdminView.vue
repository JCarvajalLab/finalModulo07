<template>
<NavbarComponent />
<div class="container">
    <h1>ADMINISTRACION</h1>
    <div class="button">
        <v-btn variant="elevated" color="primary" @click="showDialog = true">
            Agregar Cursos
        </v-btn>
    </div>
</div>
<div>
    <ListDetailComponent />
    <QuantityComponent />
</div>

<FooterComponent />

<!-- Diálogo para agregar cursos -->
<v-dialog v-model="showDialog" max-width="600">
    <AddComponent @guardar-curso="agregarCurso" @close-dialog="showDialog = false" />
</v-dialog>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import ListDetailComponent from '../components/ListDetailComponent.vue';
import QuantityComponent from '../components/QuantityComponent.vue';
import AddComponent from '../components/AddComponent.vue';
import {
    mapActions
} from 'vuex'; // Importa mapActions para acceder a las acciones del store

export default {
    name: 'HomeView',

    components: {
        FooterComponent,
        NavbarComponent,
        ListDetailComponent,
        QuantityComponent,
        AddComponent
    },

    data() {
        return {
            showDialog: false // Controla la visibilidad del diálogo
        };
    },

    methods: {
        ...mapActions(['agregarCursoStore']), // Mapea la acción del store

        // Método para agregar un curso
        agregarCurso(nuevoCurso) {
            this.agregarCursoStore(nuevoCurso); // Llama a la acción del store
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    /* Ajusta la altura para centrar verticalmente */
}

.button {
    margin-top: 40px;
    /* Margen superior para separar el botón del título */
}
</style>
