<template>
<v-card>
    <v-card-title>Editar Curso</v-card-title>
    <v-card-text>
        <!-- Formulario para editar un curso -->
        <v-text-field label="Nombre del Curso" v-model="cursoLocal.nombre" required></v-text-field>
        <v-text-field label="Costo" v-model="cursoLocal.costo" type="number" required></v-text-field>
        <v-text-field label="Duración" v-model="cursoLocal.duracion" required></v-text-field>
        <v-text-field label="Cupos" v-model="cursoLocal.cupos" type="number" required></v-text-field>
        <v-text-field label="Inscritos" v-model="cursoLocal.inscritos" type="number" required></v-text-field>
        <v-text-field label="Fecha de Registro" v-model="cursoLocal.fecha_registro" required></v-text-field>
        <v-text-field label="URL de la Imagen" v-model="cursoLocal.img" required></v-text-field>
        <v-textarea label="Descripción" v-model="cursoLocal.descripcion" required></v-textarea>
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
                ...this.curso // Copia local de la prop con todos los campos
            }
        };
    },
    methods: {
        // Método para guardar los cambios del curso
        guardarCurso() {
            // Validar que todos los campos estén llenos
            if (!this.cursoLocal.nombre || !this.cursoLocal.costo || !this.cursoLocal.duracion ||
                !this.cursoLocal.cupos || !this.cursoLocal.inscritos || !this.cursoLocal.fecha_registro ||
                !this.cursoLocal.img || !this.cursoLocal.descripcion) {
                alert('Por favor, complete todos los campos del formulario.');
                return;
            }

            // Validar que no haya más inscritos que cupos
            if (this.cursoLocal.inscritos > this.cursoLocal.cupos) {
                alert('No se pueden tener más inscritos que cupos disponibles.');
                return;
            }

            // Emitir el curso actualizado al componente padre
            this.$emit('guardar-curso', this.cursoLocal);
        }
    }
};
</script>

<style scoped>
/* Estilos para el componente EditComponent */
</style>
