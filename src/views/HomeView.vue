<template>
  <div class="home">
    <div>
      <b-img
        src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/cambia-tu-celular-online-tienda-claro-desktop.jpg"
        fluid-grow
        alt="Fluid-grow image"
      ></b-img>
    </div>
    <HelloWorld msg="Planes Flexibles" />
    <div>
      <ComponentTres msg="Qué dicen de nosotros" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ComponentTres from "@/components/ComponentTres.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    ComponentTres,
  },
};
</script>
