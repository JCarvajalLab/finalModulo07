<template>
<v-card>
    <v-card-title>Agregar Curso</v-card-title>
    <v-card-text>
        <!-- Formulario para agregar un curso -->
        <v-text-field label="Nombre del Curso" v-model="nombre" required></v-text-field>
        <v-text-field label="Costo" v-model="costo" type="number" required></v-text-field>
        <v-text-field label="Duración" v-model="duracion" required></v-text-field>
        <v-text-field label="Cupos" v-model="cupos" type="number" required></v-text-field>
        <v-text-field label="Inscritos" v-model="inscritos" type="number" required></v-text-field>
        <v-text-field label="Fecha de Registro" type="date" v-model="fecha_registro" required></v-text-field>
        <v-text-field label="URL de la Imagen" v-model="img" required></v-text-field> <!-- Nuevo campo para la imagen -->
        <v-textarea label="Descripción" v-model="descripcion" required></v-textarea>
        <v-checkbox label="Completado" v-model="completado"></v-checkbox>
    </v-card-text>
    <v-card-actions>
        <v-btn color="primary" @click="guardarCurso">Guardar</v-btn>
        <v-btn color="error" @click="cerrarDialogo">Cerrar</v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    data() {
        return {
            nombre: '',
            costo: 0,
            duracion: '',
            cupos: 0,
            inscritos: 0,
            fecha_registro: '',
            img: '', // Nueva propiedad para la URL de la imagen
            descripcion: '',
            completado: false
        };
    },
    methods: {
        guardarCurso() {
            // Validar que todos los campos estén llenos
            if (!this.nombre || !this.costo || !this.duracion || !this.cupos || !this.inscritos || !this.fecha_registro || !this.img || !this.descripcion) {
                alert('Por favor, complete todos los campos del formulario.');
                return;
            }

            // Validar que no haya más inscritos que cupos
            if (this.inscritos > this.cupos) {
                alert('No se pueden tener más inscritos que cupos disponibles.');
                return;
            }

            // Crear un objeto con los datos del curso
            const nuevoCurso = {
                id: this.generarId(), // Generar un ID único
                img: this.img || "https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png", // Usar la URL ingresada o una por defecto
                nombre: this.nombre,
                costo: this.costo,
                duracion: this.duracion,
                cupos: this.cupos,
                inscritos: this.inscritos,
                completado: this.completado,
                fecha_registro: this.fecha_registro,
                descripcion: this.descripcion
            };

            // Emitir el nuevo curso al componente padre
            this.$emit('guardar-curso', nuevoCurso);

            // Cerrar el diálogo
            this.$emit('close-dialog');
        },
        cerrarDialogo() {
            this.$emit('close-dialog'); // Cierra el diálogo
        },
        generarId() {
            // Generar un ID único (puedes usar una librería como uuid o simplemente un timestamp)
            return Date.now();
        }
    }
};
</script>

<style scoped>
/* Est ilos para el componente AddComponent */
</style>