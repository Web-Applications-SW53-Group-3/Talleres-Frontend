<template>

  <div class="form-data">

    <label for="name"  :aria-label="$t('Name')">Tu nombre:</label>
    <input-text id="name" :placeholder="$t('PlaceName')" :aria-label="$t('PlaceName')"/>
    <br>

    <label for="email" :aria-label="$t('Email')">{{ $t('Email')}}:</label>
    <input-text type="email" id="email" :placeholder="$t('PlaceEmail')" :aria-label="$t('PlaceEmail')"/>

    <br>

    <label for="phone" :aria-label="$t('PhoneNumber')">{{ $t('PhoneNumber')}}:</label>
    <input-text type="email" id="phone" :placeholder="$t('PlacePhoneNumber')" :aria-label="$t('PlacePhoneNumber')" />

    <br>

    <label for="message" :aria-label="$t('Message')">Tu mensaje:</label>
    <textarea id="message" :placeholder="$t('Message')" :aria-label="$t('Message')"></textarea>
    <br>
    <pv-button class="submit" >{{ $t('Send')}}</pv-button>

    <br>

  </div>
  </template>

<script>
export default {
  props: {
    title: String
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

.form-data{
  display: flex;
  flex-direction: column;
}

</style>