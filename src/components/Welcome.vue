<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3> Oportunidades Laborales Temporales a un Toque de Distancia</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 72px;
  position: relative;
  top: -10px;
  color: white;
}
h3{
  justify-content: center;
  color: white;
}
.greetings h1{
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
