<template>
<v-container>
    <v-row>
        <!-- Card 1: Alumnos permitidos -->
        <v-col cols="12" md="12">
            <v-card class="card purple">
                <v-card-title>
                    <v-icon left>mdi-account-group</v-icon>
                    <span>Cantidad total de alumnos permitidos: {{ totalAlumnosPermitidos }}</span>
                </v-card-title>
            </v-card>
        </v-col>

        <!-- Card 2: Alumnos inscritos -->
        <v-col cols="12" md="12">
            <v-card class="card blue">
                <v-card-title>
                    <v-icon left>mdi-account-check</v-icon>
                    <span>Cantidad total de alumnos inscritos: {{ totalAlumnosInscritos }}</span>
                </v-card-title>
            </v-card>
        </v-col>

        <!-- Card 3: Cupos restantes -->
        <v-col cols="12" md="12">
            <v-card class="card red">
                <v-card-title>
                    <v-icon left>mdi-account-remove</v-icon>
                    <span>Cantidad total de cupos restantes: {{ totalCuposRestantes }}</span>
                </v-card-title>
            </v-card>
        </v-col>

        <!-- Card 4: Cursos terminados -->
        <v-col cols="12" md="12">
            <v-card class="card red">
                <v-card-title>
                    <v-icon left>mdi-cancel</v-icon>
                    <span>Cantidad total de cursos terminados: {{ totalCursosTerminados }}</span>
                </v-card-title>
            </v-card>
        </v-col>

        <!-- Card 5: Cursos activos -->
        <v-col cols="12" md="12">
            <v-card class="card green">
                <v-card-title>
                    <v-icon left>mdi-bell</v-icon>
                    <span>Cantidad total de cursos activos: {{ totalCursosActivos }}</span>
                </v-card-title>
            </v-card>
        </v-col>

        <!-- Card 6: Total de cursos -->
        <v-col cols="12" md="12">
            <v-card class="card orange">
                <v-card-title>
                    <v-icon left>mdi-bell</v-icon>
                    <span>Cantidad total de cursos: {{ totalCursos }}</span>
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'; // Importa mapGetters para acceder a los getters

export default {
    computed: {
        ...mapGetters([
            'totalAlumnosPermitidos',
            'totalAlumnosInscritos',
            'totalCuposRestantes',
            'totalCursosTerminados',
            'totalCursosActivos',
            'totalCursos'
        ]) // Accede a los getters del store
    }
}
</script>

<style scoped>
.card {
    border: 1px solid;
    border-radius: 5px;
    padding: 2px;
    margin-bottom: 1px;
    display: flex;
    align-items: center;
}

.card.purple {
    border-color: #800080;
    color: #800080;
}

.card.blue {
    border-color: #00BFFF;
    color: #00BFFF;
}

.card.red {
    border-color: #FF0000;
    color: #FF0000;
}

.card.green {
    border-color: #808000;
    color: #808000;
}

.card.orange {
    border-color: #FFA500;
    color: #FFA500;
}
</style>