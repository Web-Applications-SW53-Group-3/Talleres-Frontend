<script>
import Employer from "@/components/Employer.vue";

export default {
  name: "TopEmployers",
  components: {Employer}
}
</script>

<template>
  <div class="top-employers">
    <h1>Top Empleadores</h1>
    <br>
    <h4>Explora Nuestro Top de Empleadores, Donde las Oportunidades se Unen con los Líderes del Éxito <br> Laboral en ChambeaPe,
       Creando un Futuro Profesional Brillante para Ti.</h4>
    <br>
    <div class="employers-container">
      <Employer employer-name="Valentina Vargas" img-url="https://media.discordapp.net/attachments/1145421916413366426/1147346503803883590/Valentina.png"/>
      <Employer employer-name="Alejandro Rojas" img-url="https://media.discordapp.net/attachments/1145421916413366426/1147346503522861096/Alejandro.png"/>
      <Employer employer-name="Sofía Sánchez" img-url="https://media.discordapp.net/attachments/1145421916413366426/1147346504340738169/Sofia.png"/>
    </div>
  </div>

</template>

<style scoped>
  .top-employers{
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  h1{
    color: white;
  }
  .employers-container{
    margin: 0;
    width: 70vw;
    display: flex;
    justify-content: space-around;
    color: white;
  }
</style>