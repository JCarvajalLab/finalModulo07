<template>
<v-card>
    <v-card-title>Editar Curso</v-card-title>
    <v-card-text>
        <!-- Formulario para editar un curso -->
        <v-text-field label="Nombre del Curso" v-model="cursoLocal.nombre"></v-text-field>
        <v-text-field label="Costo" v-model="cursoLocal.costo" type="number"></v-text-field>
        <v-text-field label="Duración" v-model="cursoLocal.duracion"></v-text-field>
        <v-text-field label="Cupos" v-model="cursoLocal.cupos" type="number"></v-text-field>
        <v-text-field label="Inscritos" v-model="cursoLocal.inscritos" type="number"></v-text-field>
        <v-checkbox label="Completado" v-model="cursoLocal.completado"></v-checkbox>
    </v-card-text>
    <v-card-actions>
        <v-btn color="primary" @click="guardarCurso">Guardar</v-btn>
        <v-btn @click="$emit('close-dialog')">Cancelar</v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    props: {
        curso: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            cursoLocal: {
                ...this.curso
            } // Copia local de la prop
        };
    },
    methods: {
        // Método para guardar los cambios del curso
        guardarCurso() {
            this.$emit('guardar-curso', this.cursoLocal); // Emite el evento con el curso actualizado
        }
    }
};
</script>

<style scoped>
/* Estilos para el componente EditComponent */
</style>
