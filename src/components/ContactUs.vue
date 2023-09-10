<template>
  <div class="container">
    <label class="name"> {{ $t('ContactMessage')}} {{name}} </label>
    <label>{{content}}</label>
        <ContactForm />
  </div>
</template>

<script>
import Tutorial from "@/components/ContactForm.vue";
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: {ContactForm, Tutorial},
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