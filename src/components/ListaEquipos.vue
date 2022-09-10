<template>
  <div class="container">
    <div class="row">
      <div
        v-for="equipo in ListaEquipos.data"
        :key="equipo.id"
        class="card col-sm-12 m-3"
        style="width: 18rem"
      >
        <p>ee</p>
        <img
          :src="equipo.imagen"
          class="card-img-top"
          height="150px"
          :alt="equipo.nombre"
        />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nombre :{{ equipo.nombre }}</li>
          <li>{{ equipo.caracteristicas[0] }}</li>
          <li>{{ equipo.caracteristicas[1] }}</li>
          <li>{{ equipo.caracteristicas[2] }}</li>
          <li>{{ equipo.caracteristicas[3] }}</li>
          <li>{{ equipo.caracteristicas[4] }}</li>
          <li>
            <section>
              <p>Antes</p>
              <p>{{ equipo.precio_normal }}</p>
            </section>
            <section>
              <p>Ahora</p>
              <p>{{ equipo.precio_promo }}</p>
            </section>
          </li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link"
            ><button
              data-bs-toggle="modal"
              class="btn btn-primary"
              :data-bs-target="'#' + equipo.id"
            >
              Agregar
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaEquipos",
  props: {
    dataid: {
      type: String,
      default: "",
    },
    ListaEquipos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
