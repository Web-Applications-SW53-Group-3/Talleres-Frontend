<script>
export default {
  name: "Worker",
  props:{
    imgUrl: String,
    workerName: String
  }
}
</script>

<template>
  <div class="worker-profile">
    <div class="circular-img">
      <img :src="imgUrl" alt="Foto del trabajador">
    </div>
    <div class="worker-name">{{workerName}}</div>
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
.worker-name{
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

</style>