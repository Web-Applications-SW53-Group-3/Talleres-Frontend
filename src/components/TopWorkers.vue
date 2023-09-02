<script>
import Worker from "@/components/Worker.vue";

export default {
  name: "TopWorkers",
  components: {Worker}
}
</script>

<template>
  <div class="top-workers">
    <h1>Top Trabajadores</h1>
    <br>
    <h4>"Descubre el Top de Trabajadores Eventuales, donde el talento se encuentra con las mejores oportunidades en ChambeaPe,<br> construyendo un camino hacia un futuro laboral exitoso."</h4>
    <br>
    <div class="workers-container">
      <Worker worker-name="Juan López" img-url="https://cdn.discordapp.com/attachments/1038843215094227044/1147431378217074739/images.jpeg"/>
      <Worker worker-name="Carolina García" img-url="https://cdn.discordapp.com/attachments/1038843215094227044/1147431377814433792/depositphotos_279641792-stock-photo-woman-clerk-working-in-the.jpg"/>
      <Worker worker-name="Lucas de la torre" img-url="https://cdn.discordapp.com/attachments/1038843215094227044/1147431378477137950/istockphoto-611903970-612x612.jpg"/>
    </div>
  </div>

</template>

<style scoped>
.top-workers{
  text-align: center;
  display: flex;
  flex-direction: column;
}
h1{
  color: white;
}
.workers-container{
  margin: 0;
  width: 70vw;
  display: flex;
  justify-content: space-around;
  color: white;
}
</style>