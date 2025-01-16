<template>
<v-container>
    <v-data-table :headers="headers" :items="cursos" :items-per-page="5" class="elevation-1">
        <!-- Columna de Fecha de Registro -->
        <template v-slot:[`item.fecha_registro`]="{ item }">
            <v-chip color="green" variant="flat">
                {{ item.fecha_registro }}
            </v-chip>
        </template>

        <!-- Columna de Costo -->
        <template v-slot:[`item.costo`]="{ item }">
            <v-chip color="green" variant="flat">
                {{ item.costo }}
            </v-chip>
        </template>

        <!-- Columna de Terminados -->
        <template v-slot:[`item.completado`]="{ item }">
            <v-chip :color="item.completado ? 'secondary' : 'grey'" variant="flat">
                {{ item.completado ? 'SI' : 'NO' }}
            </v-chip>
        </template>

        <!-- Columna de Acciones (Editar y Eliminar) -->
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon small color="yellow" class="mr-2" @click="editarCurso(item)">
                mdi-pencil
            </v-icon>
            <v-icon small color="red" @click="eliminarCurso(item)">
                mdi-delete
            </v-icon>
        </template>
    </v-data-table>
</v-container>
</template>

<script>
import {
    mapState
} from 'vuex'; // Importa mapState para acceder al store

export default {
computed: {
        ...mapState(['cursos']), // Mapea el estado 'cursos' del store
    },
    data() {
        return {
            // Definición de las columnas de la tabla
            headers: [
                        { title: 'Curso', key: 'nombre' },
                        { title: 'Cupos', key: 'cupos' },
                        { title: 'Inscritos', key: 'inscritos' },
                        { title: 'Duración', key: 'duracion' },
                        { title: 'Costo', key: 'costo' },
                        { title: 'Terminados', key: 'completado' },
                        { title: 'Fecha de Registro', key: 'fecha_registro' },
                        { title: 'Acciones', key: 'actions', sortable: false }, // Columna de acciones
            ],
        };
    },
    methods: {
        // Métodos para los botones (aún no hacen nada)
        editarCurso(item) {
            console.log('Editar curso:', item);
        },
        eliminarCurso(item) {
            console.log('Eliminar curso:', item);
        },
    },
};
</script>

<style scoped>
/* Estilos personalizados si los necesitas */
</style>