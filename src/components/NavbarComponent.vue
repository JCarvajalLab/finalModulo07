<template>
<v-app-bar app class="bg-deep-purple-accent-3" :elevation="0" rounded>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
    <v-app-bar-title>
        Cursos AlfaWeb
    </v-app-bar-title>

    <template v-slot:append>
        <div class="d-none d-md-flex" style="">
            <v-btn text @click="goInicio" style="margin: 0 10px;">
                <v-icon left>mdi-home</v-icon> <!-- Icono de casa -->
                Inicio
            </v-btn>
            <v-btn text @click="goAdd" style="margin: 0 10px;">
                <v-icon left>mdi-account-cog</v-icon> <!-- Icono de tuerca -->
                Administracion
            </v-btn>
        </div>
    </template>
</v-app-bar>

<!-- Menú de navegación lateral -->
<v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
        <v-list-item @click="goInicio">
            <v-list-item-icon>
                <v-icon>mdi-home</v-icon> <!-- Icono de casa -->
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="goAdd">
            <v-list-item-icon>
                <v-icon>mdi-account-cog</v-icon> <!-- Icono de tuerca -->
            </v-list-item-icon>
            <v-list-item-title>Administracion</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
    </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            //logo: require('@/assets/preview.png'),
        };
    },
    methods: {
        goInicio() {
            this.$router.push({
                name: 'home'
            });
            this.drawer = false;
        },
        goAdd() {
            this.$router.push({
                name: 'adminView'
            });
            this.drawer = false;
        },
    }
};
</script>

<style scoped>
.logo {
    height: 40px;
    margin: 0;
}
</style>
