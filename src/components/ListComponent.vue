<template>
<v-container>
    <v-row>
        <v-col v-for="curso in cursos" :key="curso.id" cols="12" sm="6" md="4" lg="4"> <!-- Ajusta el tamaño de las columnas -->
            <v-card class="mx-auto" max-width="400">
                <v-img color="surface-variant" height="200" :src="curso.img" cover>
                    <v-toolbar color="transparent">
                        <v-toolbar-title class="text-h6">{{ curso.nombre }}</v-toolbar-title>
                        <template v-slot:append>
                            <v-btn icon="mdi-dots-vertical"></v-btn>
                        </template>
                    </v-toolbar>
                </v-img>

                <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">Información</div>

                    <v-timeline align="start" density="compact">
                        <!-- Primera pelotita: Costo y Duración -->
                        <v-timeline-item dot-color="primary" size="x-small">
                            <div class="mb-4">
                                <div class="font-weight-normal">
                                    <strong>Costo:</strong> ${{ curso.costo }}
                                </div>
                                <div><strong>Duración:</strong> {{ curso.duracion }}</div>
                            </div>
                        </v-timeline-item>

                        <!-- Segunda pelotita: Cupos y Completado -->
                        <v-timeline-item dot-color="secondary" size="x-small">
                            <div class="mb-4">
                                <div class="font-weight-normal">
                                    <strong>Cupos:</strong> {{ curso.cupos }}
                                </div>
                                <div>
                                    <strong>Completado:</strong> {{ curso.completado ? 'Sí' : 'No' }}
                                </div>
                            </div>
                        </v-timeline-item>

                        <!-- Tercera pelotita: Fecha de Registro -->
                        <v-timeline-item dot-color="success" size="x-small">
                            <div class="mb-4">
                                <div class="font-weight-normal">
                                    <strong>Fecha de Registro:</strong> {{ curso.fecha_registro }}
                                </div>
                            </div>
                        </v-timeline-item>

                        <!-- Cuarta pelotita: Descripción -->
                        <v-timeline-item dot-color="warning" size="x-small">
                            <div class="mb-4">
                                <div class="font-weight-normal">
                                    <strong>Descripción:</strong> {{ curso.descripcion }}
                                </div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
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
};
</script>

<style scoped>
/* Estilos personalizados si los necesitas */
</style>
