<template>
    <div class="contact-us">
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>

<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm () {
      console.log('Form Submitted', this.form)
      // You can make an API call or handle the form submission logic here
    }
  }
}
</script>

  <style scoped>
  .contact-us {
    max-width: 500px;
    margin: 0 auto;
  }

  .contact-us form {
    display: flex;
    flex-direction: column;
  }

  .contact-us label {
    margin-top: 10px;
  }

  .contact-us input,
  .contact-us textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
  }

  .contact-us button {
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    border: none;
    cursor: pointer;
  }

  .contact-us button:hover {
    background-color: #34495e;
  }
  </style>
