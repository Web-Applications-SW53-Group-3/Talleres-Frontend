<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="https://cdn.discordapp.com/attachments/1038843215094227044/1147436281475911720/DigitalDart.png" alt="Logo" />
        </div>
        <div class="footer-info">
          <p>&copy; {{ currentYear }} DigitalDart</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.footer {
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.footer-logo img {
  max-width: 100px;
  text-align: center;
}

.footer-info p {
  font-size: 14px;
  margin: 5px 0;
}
</style>