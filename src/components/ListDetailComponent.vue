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
            <v-icon small color="red" @click="abrirDialogoEliminar(item)">
                mdi-delete
            </v-icon>
        </template>
    </v-data-table>

    <!-- Diálogo de edición -->
    <v-dialog v-model="dialogEditar" max-width="600">
        <EditComponent v-if="dialogEditar" :curso="cursoSeleccionado" @guardar-curso="actualizarCurso" @close-dialog="dialogEditar = false" />
    </v-dialog>

    <!-- Diálogo de confirmación para eliminar un curso -->
    <v-dialog v-model="dialogoEliminar" max-width="400">
        <v-card>
            <v-card-title class="headline">¿Está seguro que desea eliminar este curso?</v-card-title>
            <v-card-text>
                Esta acción no se puede deshacer.
            </v-card-text>
            <v-card-actions>
                <v-btn color="red darken-1" text @click="confirmarEliminacion">Continuar</v-btn>
                <v-btn color="grey" text @click="dialogoEliminar = false">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-container>
</template>

<script>
import {
    mapState
} from 'vuex'; // Importa mapState para acceder al store
import EditComponent from './EditComponent.vue'; // Importa el componente de edición

export default {
    components: {
        EditComponent
    },
    computed: {
        ...mapState(['cursos']), // Mapea el estado 'cursos' del store
    },
    data() {
        return {
            dialogEditar: false, // Controla la visibilidad del diálogo de edición
            dialogoEliminar: false, // Controla la visibilidad del diálogo de eliminación
            cursoSeleccionado: null, // Almacena el curso seleccionado para editar
            cursoAEliminar: null, // Almacena el curso seleccionado para eliminar
            headers: [
                { title: 'Curso', key: 'nombre' },
                { title: 'Cupos', key: 'cupos' },
                { title: 'Inscritos', key: 'inscritos' },
                { title: 'Duración', key: 'duracion' },
                { title: 'Costo', key: 'costo' },
                { title: 'Terminados', key: 'completado' },
                { title: 'Fecha de Registro', key: 'fecha_registro' },
                { title: 'Acciones', key: 'actions', sortable: false }, // Columna de accione
            ],
        };
    },
    methods: {
        // Método para abrir el diálogo de edición
        editarCurso(item) {
            this.cursoSeleccionado = {
                ...item
            }; // Copia los datos del curso seleccionado
            this.dialogEditar = true; // Abre el diálogo
        },

        // Método para abrir el diálogo de eliminación
        abrirDialogoEliminar(item) {
            this.cursoAEliminar = item; // Almacena el curso que se va a eliminar
            this.dialogoEliminar = true;
        },

        // Método para confirmar la eliminación de un curso
        confirmarEliminacion() {
            this.$store.dispatch('eliminarCursoStore', this.cursoAEliminar.id); // Llama a la acción para eliminar el curso
            this.dialogoEliminar = false;
            this.cursoAEliminar = null; // Reinicia la variable del curso a eliminar
        },

        // Método para actualizar un curso
        actualizarCurso(cursoActualizado) {
            this.$store.commit('actualizarCursoStore', cursoActualizado); // Actualiza el curso en el store
            this.dialogEditar = false;
        },

    },
};
</script>

<style scoped>
/* Estilos personalizados si los necesitas */
</style>
