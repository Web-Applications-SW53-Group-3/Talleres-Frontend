<script setup>
import HelloWorld from './components/Welcome.vue'
import Button from "@/components/Button.vue";

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/lp-man.png" width="454" height="904"/>

    <div class="wrapper">
      <HelloWorld msg="ChambeaPe" />
      <Button />

    </div>
  </header>
  <main>

  </main>
</template>

<style scoped>

body{
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text);
  margin: 0;
  padding: 0;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .wrapper{
    width: 50vw;
    align-content: center;
    flex-direction: column;
  }
  .wrapper Button{
    margin-top: 35px;
  }
}
</style>
