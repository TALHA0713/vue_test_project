<template>
    <div class="signup-page">
      <div class="form-container">
        <h1 class="title">Sign Up</h1>
        <form @submit.prevent="signup">
          <div class="input-group">
            <label for="name">Full Name:</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="input-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" v-model="phone" required />
          </div>
          <div class="input-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <div class="input-group">
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'SignupPage',
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    signup () {
      if (this.password !== this.confirmPassword) {
        alert("Passwords don't match!")
        return
      }
      console.log('Signup attempt', this.name, this.email, this.phone, this.password)
    }
  }
}
</script>

  <style scoped>
  .signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(91vh - 80px);
    background: linear-gradient(135deg, #a8c0ff, #3f2b96);
  }

  .form-container {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 450px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 30px;
  }

  .input-group {
    margin-bottom: 25px;
    text-align: left;
  }

  .input-group label {
    display: block;
    font-size: 1rem;
    color: #333;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .input-group input {
    width: 100%;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  .input-group input:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }

  button {
    width: 100%;
    padding: 14px;
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
      padding: 25px;
    }
    .title {
      font-size: 2rem;
    }
  }
  </style>
