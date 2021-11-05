<template>
  <div class="color-bar">
    <div v-if="logueado">
      <b-navbar toggleable="lg" type="light" variant="light" class="fs-5">
        <b-navbar-brand href="#" class="fs-3">Agendy</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/portafolioServicios">Servicios</b-nav-item>
            <b-nav-item href="/agenda">Agenda</b-nav-item>
            <b-nav-item href="/equipo">Nuestro Equipo</b-nav-item>
            <b-nav-item href="/noticias">Sección Noticias</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <!-- Using 'button-content' slot -->
              <span>
                <strong> Bienvenid@ {{ datosUsuario.nombres }}</strong>
              </span>
              <b-button
                size="sm"
                class="mx-2 my-2 my-sm-0 btn-action"
                type="button"
                @click="logOut"
                >Salir</b-button
              >
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario")) || {};
    const token = localStorage.getItem("token") || null;
    const logueado = token != null;
    console.log(logueado);

    datosUsuario.logueado = logueado;
    console.log("datos usuario en inicio", datosUsuario);
    const logOut = async () => {
      await localStorage.clear();
      location.replace("/");
      this.$router.push({ name: home });
    };
    return {
      logueado,
      datosUsuario,
      logOut,
    };
  },
};
</script>

<style scoped>
.titulos {
  font-family: verdana;
  font-size: 60px;
  color: #b02b9b;
}
#banner {
  background-color: #faf4eb;
}
.navbar {
  padding: 0.5rem 2rem;
}
</style>