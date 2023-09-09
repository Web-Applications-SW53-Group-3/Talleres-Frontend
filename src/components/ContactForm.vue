<template>

  <div class="form-data">

    <label for="name">{{ $t('Name')}}:</label>
    <input-text id="name" :placeholder="$t('PlaceName')" />
    <br>

    <label for="email">{{ $t('Email')}}:</label>
    <input-text type="email" id="name" :placeholder="$t('PlaceEmail')" />

    <br>

    <label for="phone">{{ $t('PhoneNumber')}}:</label>
    <input-text type="email" id="name" :placeholder="$t('PlacePhoneNumber')" />

    <br>

    <label for="message">{{ $t('Message')}}:</label>

    <text-area> HOla</text-area>
    <br>
    <pv-button class="submit" >{{ $t('Send')}}</pv-button>

    <br>

  </div>
  </template>

<script>
export default {
  props: {
    title: String
  },
  name: "tutorial"
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

.form-data{
  display: flex;
  flex-direction: column;
}

</style>