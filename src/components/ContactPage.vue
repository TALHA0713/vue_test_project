<template>
    <div class="contact-page">
      <h1>Contact Us</h1>
      <contact-us />
    </div>
 </template>

<script>
import ContactUs from './ContactUs.vue'

export default {
  name: 'ContactPage',
  components: {
    ContactUs
  }
}
</script>

  <style scoped>
  .contact-page {
    padding: 20px;
  }
  </style>
