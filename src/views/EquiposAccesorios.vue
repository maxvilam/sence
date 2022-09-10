<template>
  <div>
    <h2>Equipos & accesorios</h2>
    <ListaEquipos :ListaEquipos="equipos" />
  </div>
</template>

<script>
import ListaEquipos from "@/components/ListaEquipos.vue";
import { mapState } from "vuex";

export default {
  name: "EquiposAccesorios",
  components: {
    ListaEquipos,
  },
  computed: {
    ...mapState(["equipos"]),
  },
};
</script>

<style></style>
