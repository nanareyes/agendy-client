<template>
  <div>
    <NavBar />
    <div class="servicios">
      <div class="card h-100 pb-2 text-center">
        <div class="card-header section-title">
          Bienvenido al portafolio de servicios
        </div>
        <div class="card-body section-body h-100">
          <div class="row row-cols-1 row-cols-md-5 g-4">
            <div
              v-for="servicio in servicios"
              :key="servicio.id"
              class="card pb-3 pt-3"
            >
              <img
                class="card-img-top pb-2 foto"
                :src="getPictureServicio(servicio.imagen)"
              />
              <div>
                <h1 class="card-title">{{ servicio.nombre }}</h1>
                <h3 class="card-title">{{ servicio.precio }}</h3>
                <div class="card-text">
                  <p>{{ servicio.descripcion }}</p>
                </div>
              </div>
              <div id="icono">
                <i
                  class="las la-cart-arrow-down estilo-icono"
                  @click="agregarAlCarrito(servicio)"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="total">
          <h1>TOTAL</h1>
          <h2 id="total_carrito">${{ total_carrito }}</h2>
        </div>
        <div>
          <router-link
            to="/portafolioServicios"
            class="btn btn-action"
            tabindex="-1"
            role="button"
            aria-disabled="true"
            >Volver</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
import Servicio from "@/components/Servicio.vue";
export default {
  components: { Servicio, NavBar },
  data() {
    return {
      servicios: [],
      carrito: [],
      total_carrito: 0,
    };
  },
  created() {
    this.cargarServicios();
  },
  methods: {
    getPictureServicio(nombre_archivo) {
      /* Función para cargar imágenes dinámicamente */
      var images = require.context("@/assets/images/", false, /\.jpg$|\.png$/);
      return images("./" + nombre_archivo);
    },
    agregarAlCarrito(servicio) {
      this.carrito.push(servicio);
      console.log(this.carrito);
      this.total_carrito = this.total_carrito + servicio.precio;
      this.$swal.fire(
        "Servicio agregado",
        "Se ha agregado " + servicio.nombre + " al carrito de compras",
        "success"
      );
    },
    cargarServicios() {
      axios
        .get("https://agendy-api.herokuapp.com/api/servicios")
        //promesa
        .then((response) => {
          let status_peticion = response.status;
          console.log(status_peticion);
          this.servicios = response.data;
        });
    },
  },
};
</script>

<style scoped>
.estilo-icono {
  font-size: 40px;
  border-style: outset;
  background-color: #d7b1e6;
  border-radius: 5px;
}
.total {
  background-color: #faf4eb;
}
.card-title {
  font-size: 1.5rem;
}
.foto {
  place-self: center;
  width: 100%;
  min-width: 180px;
}
</style>