<template>
    <div class="navbar">
      <div class="left">
        <span class="project-name">Test Project</span>
      </div>

      <div class="center">
        <router-link to="/home">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/contact-us">Contact Us</router-link>
      </div>

      <div class="right">
        <router-link to="/login" class="auth-button">Login</router-link>
        <router-link to="/signup" class="auth-button">Signup</router-link>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'Navbar'
}
</script>

  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between; /* Space between left, center, and right sections */
    align-items: center; /* Center items vertically */
    padding: 0 10rem; /* Add padding from left and right */
    background-color: #2c3e50; /* Navbar background */
    height: 80px;
  }

  .navbar .left {
    /* Left section - where "Test Project" is displayed */
    display: flex;
    align-items: center;
  }

  .navbar .center {
    display: flex;
    justify-content: center; /* Center the navbar links */
    gap: 30px; /* Space between each link */
  }

  .navbar .right {
    display: flex;
    gap: 20px;
    align-items: center; /* Vertically center the content */
  }

  .navbar a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    display: inline-block;
    border-radius: 5px;
  }

  .navbar a:hover {
    background-color: #34495e; /* Change background color on hover */
  }

  .navbar .auth-button {
    background-color: #16a085;
    border-radius: 5px;
    padding: 10px 15px;
  }

  .navbar .auth-button:hover {
    background-color: #1abc9c; /* Login/Signup hover effect */
  }

  .navbar .project-name {
    font-size: 20px;
    color: white;
    font-weight: bold;
  }
  </style>
