<template>
  <div class="container">
    <label class="name" :aria-label="$t('TextPublicy')"> {{ $t('TextPublicy')}} {{name}} </label>
    <label>{{content}}</label>

    <email />
  </div>
</template>

<script>
import Email from "@/components/Email.vue";
export default {
  components: {Email},
  props:{
    name : String,
    content: String,
    emails: Array
  },
  name: "publicity"
}
</script>

<style scoped>
.container{
  margin-top: 20px;

}
</style>