<template>
  <div class="container">
    <label class="name"> {{ $t('ContactMessage')}} {{name}} </label>
    <label>{{content}}</label>
        <tutorial />
  </div>
</template>

<script>
import Tutorial from "@/components/ContactForm.vue";

export default {
  components: {Tutorial},
  props:{
    name : String,
    content: String,
    tutorials: Array
  },
  name: "contactus"
}
</script>

<style scoped>

</style>