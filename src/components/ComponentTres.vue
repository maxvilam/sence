<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-card-group>
      <b-card
        img-src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 10rem"
        class="mb-2 border-0"
      >
        <b-card-text> "Son bacanes Esta compañia te apaña caleta" </b-card-text>
        <b-card-text class="nombre" align="right">José Pedreros</b-card-text>
      </b-card>
      <b-card
        img-src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 10rem"
        class="border-0"
      >
        <b-card-text>
          "Aca si te contestan el teléfono cuando los llamas "
        </b-card-text>
        <b-card-text class="nombre" align="right">Miguel Cáceres</b-card-text>
      </b-card>
      <b-card
        img-src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 10rem"
        class="border-0"
      >
        <b-card-text> "Lo mejor es la señal" </b-card-text>
        <b-card-text class="nombre" align="right">Soledad Gómez</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "ComponentTres",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nombre {
  font-style: italic;
  font-size: x-small;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
