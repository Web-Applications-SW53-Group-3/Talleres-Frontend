<script>
export default {
  name: "Employer",
  props:{
    imgUrl: String,
    employerName: String
  }
}
</script>

<template>
  <div class="employer-profile">
    <div class="circular-img">
      <img :src="imgUrl" alt="Foto del empleador">
    </div>
    <div class="employer-name">{{employerName}}</div>
  </div>
</template>

<style scoped>
  .circular-img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
  }
  .circular-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .employer-name{
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

</style>