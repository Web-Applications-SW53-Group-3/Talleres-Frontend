<script setup>
import HelloWorld from './components/Welcome.vue'
import Button from "@/components/Button.vue";
import TopEmployers from "@/components/TopEmployers.vue";
import TopWorkers from "@/components/TopWorkers.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <body>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/lp-man.png" width="454" height="904"/>
    <div class="wrapper">
      <HelloWorld msg="ChambeaPe" />
      <Button />
    </div>
  </header>
  <main>
    <div class="top-employers">
      <TopEmployers/>
    </div>
    <br>
    <div class="top-workers">
      <TopWorkers/>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
  </body>

</template>

<style scoped>

body{
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

footer{
  display: flex;
  width: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
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

