import { createStore } from 'vuex'

export default createStore({
  state: {
    cursos: [
      {
        id: 1,
        img: "https://i.blogs.es/545cf8/es6-logo/650_1200.png",
        nombre: "JavaScript Avanzado",
        costo: 30000,
        duracion: "2 meses",
        cupos: 20,
        inscritos: 10,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion: "Curso con las nuevas actualizaciones de JavaScript.",
      },
      {
        id: 2,
        img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
        nombre: "CSS para principiantes",
        costo: 10000,
        duracion: "1 mes",
        cupos: 35,
        inscritos: 23,
        completado: false,
        fecha_registro: "05/03/2022",
        descripcion: "Aprendiendo estilos con CSS desde el nivel más básico.",
      },
      {
        id: 3,
        img: "https://img.icons8.com/?size=512&id=108784&format=png",
        nombre: "JavaScript Básico de 0 a 100",
        costo: 20000,
        duracion: "2 meses",
        cupos: 25,
        inscritos: 0,
        completado: true,
        fecha_registro: "05/03/2022",
        descripcion: "Programando para la web con JavaScript.",
      },
      {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIJI0nWPBZGxO7-Mfs-z3U0V-yVdpHgVjWw&s",
        nombre: "HTML Básico",
        costo: 10000,
        duracion: "1 mes",
        cupos: 35,
        inscritos: 0,
        completado: true,
        fecha_registro: "31/01/2022",
        descripcion:
          "Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios.",
      },
      {
        id: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        nombre: "Vue JS de 0 a 100",
        costo: 85500,
        duracion: "5 meses",
        cupos: 35,
        inscritos: 35,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion:
          "Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.",
      },
      {
        id: 6,
        img: "https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png",
        nombre: "Estilos con SASS",
        costo: 45000,
        duracion: "1 mes",
        cupos: 40,
        inscritos: 35,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion:
          "Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias.",
      },
    ],
  },
  getters: {
    // Total de alumnos permitidos (suma de cupos de todos los cursos)
    totalAlumnosPermitidos(state) {
      return state.cursos.reduce((total, curso) => total + curso.cupos, 0);
  },

  // Total de alumnos inscritos (suma de inscritos de todos los cursos)
  totalAlumnosInscritos(state) {
      return state.cursos.reduce((total, curso) => total + curso.inscritos, 0);
  },

  // Total de cupos restantes (suma de cupos restantes de todos los cursos)
  totalCuposRestantes(state) {
      return state.cursos.reduce((total, curso) => total + (curso.cupos - curso.inscritos), 0);
  },

  // Total de cursos terminados (cursos con completado)
  totalCursosTerminados(state) {
      return state.cursos.filter(curso => curso.completado === true).length;
  },

  // Total de cursos activos (cursos con completado)
  totalCursosActivos(state) {
      return state.cursos.filter(curso => curso.completado === false).length;
  },

  // Total de cursos (cantidad total de cursos)
  totalCursos(state) {
      return state.cursos.length;
  }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
