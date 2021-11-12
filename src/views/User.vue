<template>
  <div>
    <b-card
      img-src="https://st4.depositphotos.com/12982378/19880/i/600/depositphotos_198800338-stock-photo-partial-view-woman-receiving-bath.jpg"
      fluid-grow
      alt="Fluid-grow image"
      img-alt="Card image"
      img-left
      class="mb-3"
    >
      <b-card-text>
        <form>
          <div class="container-registro">
            <div class="row registro1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <p class="datos-basicos">
                Ingrese aquí su información de contacto:
              </p>

              <div class="campos-formulario">
                <label>Identificación</label><br />
                <input
                  v-model="user.identification"
                  type="text"
                  id="identification"
                  name="identification"
                  placeholder="Ingrese su identificación"
                  required
                  class="formato"
                />
              </div>
              <div class="campos-formulario">
                <label>Nombres</label><br />
                <input
                  v-model="user.name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingrese su nombre"
                  required
                  class="formato"
                />
              </div>
              <div class="campos-formulario">
                <label>Apellidos</label><br />
                <input
                  v-model="user.lastName"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Ingrese sus apellidos"
                  required
                  class="formato"
                />
              </div>

              <div class="campos-formulario">
                <label>Teléfono</label><br />
                <input
                  v-model="user.phone"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Ingrese el número telefónico y/o celular"
                  required
                  class="formato"
                />
              </div>
            </div>

            <div class="row registro2 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <p class="datos-basicos">
                Ingrese aquí la información para la creación de su perfil:
              </p>
              <br />

              <div class="campos-formulario">
                <label>Correo Electrónico</label> <br />
                <input
                  v-model="user.email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese correo electrónico"
                  required
                  class="formato"
                />
              </div>

              <div class="campos-formulario">
                <label>Contraseña</label><br />
                <input
                  v-model="user.password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingrese contraseña"
                  required
                  class="formato"
                />
              </div>

              <div class="campos-formulario">
                <label>Confirme su contraseña</label><br />
                <input
                  v-model="user.password2"
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirme la contraseña"
                  required
                  class="formato"
                />
              </div>

              <div class="campos-formulario">
                Tipo de usuario
                <select v-model="user.userType">
                  <option disabled value="user.type">
                    Seleccione el tipo de usuario
                  </option>
                  <option>Cliente</option>
                  <option>Estilista</option>
                </select>
                <!-- <div>
                                <span>Seleccionado: {{ user.tipo }}</span>
                            </div> -->
              </div>
              <br />
              <div
                class="campos-formulario form-group mb-3 text-start mx-3 ps-5"
              >
                <div class="form-check ps-5">
                  <label-align-sm
                    >He leído y acepto el tratamiento de mis
                    datos</label-align-sm
                  >
                  <input
                    v-model="user.terms"
                    type="checkbox"
                    class="form-check-input is-invalid"
                    id="terms"
                    name="terms"
                    required
                  />
                  <div class="invalid-feedback">
                    Debes aceptar los términos y condiciones antes de enviar
                  </div>
                </div>
              </div>
              <div class="campos-formulario form-group">
                <input
                  @click="registrarUser()"
                  class="btn btn-primary"
                  tabindex="-1"
                  role="button"
                  value="Registrar"
                />
              </div>
            </div>
          </div>
        </form>
      </b-card-text>
    </b-card>
    <div class="back">
      <router-link
        to="/home"
        class="btn btn-action"
        tabindex="-1"
        role="button"
        aria-disabled="true"
        >Volver</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { login } from "../libs/user";

export default {
  data() {
    return {
      user: {
        identification: "",
        name: "",
        lastName: "",
        dateOfBirth: "",
        address: "",
        city: "",
        department: "",
        phone: "",
        email: "",
        password: "",
        password2: "",
        userType: "",
        terms: "",
      },
    };
  },

  methods: {
    registrarUser() {
      console.log(this.user);
      if (this.user.password === this.user.password2) {
        axios
          .post("https://agendy-api.herokuapp.com/api/new-user", this.user)
          .then((response) => {
            console.log(response);
            let status_peticion = response.status;
            console.log(status_peticion);
            if (status_peticion === 200) {
              this.$swal.fire(
                "Registro exitoso",
                "Se ha resgistrado con el usuario " + this.user.email,
                "success"
              );
              login(this);
              // this.$router.push("/portafolioServicios")
            } else {
              this.$swal.fire(
                "user NO registrado",
                "Ocurrió un error al registrarse con el correo " +
                  this.user.email,
                "error"
              );
            }
            let mensaje = response.data;
            console.log(mensaje);
          });
      } else {
        this.$swal.fire(
          "Error de contraseña",
          "Ocurrió un error al confirmar la contraseña",
          "error"
        );
      }
    },
  },
};
</script>
<style scoped>
.campos-formulario {
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 60px;
  text-align: left;
}
</style>