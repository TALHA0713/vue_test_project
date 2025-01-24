<template>
  <div class="contact-us">
    <div class="form-container">
      <h1 class="title">Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div class="input-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="input-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="input-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
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
      // Handle form submission logic here
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

.contact-us {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #a8c0ff, #3f2b96); /* Gradient background */
}

.form-container {
  background: white;
  padding: 20px; /* Adjusted padding */
  border-radius: 8px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.title {
  font-size: 2rem; /* Adjusted title font size */
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px; /* Reduced margin between input fields */
  text-align: left;
}

.input-group label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
  font-weight: 500;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 12px; /* Reduced padding for inputs */
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

textarea {
  resize: vertical;
  min-height: 120px; /* Reduced minimum height */
}

button {
  width: 100%;
  padding: 12px; /* Reduced padding for button */
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

button:focus {
  outline: none;
}

@media (max-width: 600px) {
  .form-container {
    padding: 20px; /* Adjusted padding for smaller screens */
  }
  .title {
    font-size: 1.8rem;
  }
}
</style>
