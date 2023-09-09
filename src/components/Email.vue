<template>

  <div class="form-data">

    <label for="email">{{ $t('Email')}}:</label>
    <input-text type="email" v-model="email" id="name" :placeholder="$t('PlaceEmail')" />

    <br>
    <div class="conditions">
      <label for="email">{{ $t('Terms')}}:</label>
      <input type="checkbox">
    </div>
    <br>

    <pv-button class="submit" @click="Validate">{{ $t('Send')}}</pv-button>
    <br>

  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      email: ""
    }
  },
  name: "email",
  methods: {
    Validate() {
      this.ValidateEmail()
    },
    ValidateEmail() {
      let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if (!this.email.match(emailRegEx)) {
        alert(this.$t('InvalidEmail') + ": " + this.email);
      }
    }
  }
}
</script>

<style scoped>
.form-data{
  margin-top: 20px;
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.conditions{
  display: flex;
}

</style>