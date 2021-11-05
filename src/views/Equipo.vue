<template>
  <div>
    <NavBar />
    <div class="card text-center section-teams" id="team">
      <div class="card-header section-title">Sección Equipo</div>
      <div class="card-group body-team">
        <div class="card mx-2">
          <div class="team-member-image">
            <img
              src="@/assets/images/photoNana.jpg"
              alt="Avatar"
              class="avatar"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Diana Carolina Reyes Mantilla</h5>
            <p class="card-text">
              Especialista en Gerencia Estratégica y profesional Administración
              y Negocios Internacionales.
            </p>
          </div>
        </div>
        <div class="card mx-2">
          <div class="team-member-image">
            <img
              src="@/assets/images/natacha.jpg"
              alt="Avatar"
              class="avatar"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Natacha Libreros</h5>
            <p class="card-text">
              Economista Y técnico en contabilidad y finanzas.
            </p>
          </div>
        </div>
        <div class="card mx-2">
          <div class="team-member-image">
            <img src="@/assets/images/irma.jpg" alt="Avatar" class="avatar" />
          </div>
          <div class="card-body">
            <h5 class="card-title">Irma Zoraida Cardenas</h5>
            <p class="card-text">
              Administradora de empresas especializadas en proyectos.
            </p>
          </div>
        </div>
        <div class="card mx-2">
          <div class="team-member-image">
            <img
              src="@/assets/images/photoCamila.jpg"
              alt="Avatar"
              class="avatar"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Camila Acosta Nieto</h5>
            <p class="card-text">Estudiante de Estadística.</p>
          </div>
        </div>
      </div>
      <div class="back">
        <router-link to="portafolioServicios" class="btn btn-action"
          >Regresar
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.section-teams {
  padding: 1rem;
}

.section-title {
  align-self: center;
  width: 100%;
  margin-bottom: 1rem;
}

.body-team {
  display: flex;
  place-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem 2rem;
}

.card-title {
  font-weight: bold;
}
</style>
