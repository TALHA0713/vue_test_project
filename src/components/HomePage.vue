<template>
  <div>
    <!-- Hero Section -->
    <section class="hero" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
      <div class="overlay">
        <div class="hero-content">
          <h1>Welcome to Our Amazing Platform</h1>
          <p>Your one-stop solution to simplify and enhance your life. Explore our features and get started today!</p>
          <button @click="scrollToFeatures">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <h2>Key Features</h2>
        <div class="feature-cards">
          <div class="feature-card">
            <img :src="require('@/assets/images.jpeg')" alt="Feature 1" />
            <h3>Feature One</h3>
            <p>Our first feature will make your tasks easier, faster, and more efficient. Try it out today!</p>
          </div>
          <div class="feature-card">
            <img :src="require('@/assets/image.jpeg')" alt="Feature 2" />
            <h3>Feature Two</h3>
            <p>With our second feature, experience seamless integration and powerful tools to boost your productivity.
            </p>
          </div>
          <div class="feature-card">
            <img :src="require('@/assets/images1.jpeg')" alt="Feature 3" />
            <h3>Feature Three</h3>
            <p>Our third feature is designed to bring you the best results, optimized for performance and user
              experience.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2>What Our Users Say</h2>
        <div class="testimonial-cards">
          <div class="testimonial-card">
            <p>"This platform has completely changed the way I work. It's easy to use and extremely effective!"</p>
            <h4>John Doe</h4>
            <p>CEO, Company XYZ</p>
          </div>
          <div class="testimonial-card">
            <p>"The features are amazing! I can’t imagine working without this tool anymore. Highly recommended!"</p>
            <h4>Jane Smith</h4>
            <p>Marketing Manager, ABC Corp</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing">
      <div class="container">
        <h2>Choose Your Plan</h2>
        <div class="pricing-cards">
          <div class="pricing-card">
            <h3>Basic Plan</h3>
            <p>$19/month</p>
            <p>Perfect for individuals who need basic features to get started.</p>
            <button>Get Started</button>
          </div>
          <div class="pricing-card">
            <h3>Pro Plan</h3>
            <p>$49/month</p>
            <p>Unlock advanced features and enhance your experience.</p>
            <button>Get Started</button>
          </div>
          <div class="pricing-card">
            <h3>Enterprise Plan</h3>
            <p>$99/month</p>
            <p>For large organizations with custom needs and support.</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta">
      <div class="cta-container">
        <h2>Ready to Get Started?</h2>
        <p>Join us today and experience the best service that will change the way you work and live.</p>
        <button @click="scrollToSignup">Sign Up Now</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      backgroundImage: require('@/assets/hi.jpg'),
      contactName: '',
      contactEmail: '',
      contactMessage: ''
    }
  },
  methods: {
    scrollToFeatures () {
      document.getElementById('features').scrollIntoView({ behavior: 'smooth' })
    },
    scrollToSignup () {
      this.$router.push('/signup') // Navigate to the signup page
    },
    submitContact () {
      console.log('Contact message submitted:', this.contactName, this.contactEmail, this.contactMessage)
      // Handle form submission logic here
    }
  }
}
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.hero button {
  padding: 15px 30px;
  background-color: #3498db;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hero button:hover {
  background-color: #2980b9;
}

/* Features Section */
.features {
  padding: 50px 0;
  background-color: #f4f7fb;
  text-align: center;
}

.features h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 40px;
}

.feature-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.feature-card {
  background-color: white;
  padding: 10px; /* Reduced padding */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 400px; /* Increased card width */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.feature-card img {
  width: 100%;
  height: 300px; /* Increased image height */
  object-fit: cover;
  border-radius: 5px;
}

.feature-card h3 {
  font-size: 1.8rem;
  margin-top: 15px;
  color: #333;
}

.feature-card p {
  font-size: 1rem;
  color: #777;
  margin-top: 10px;
}

/* Testimonials Section */
.testimonials {
  padding: 50px 0;
  background-color: #fff;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 40px;
}

.testimonial-cards {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.testimonial-card {
  background-color: #f4f7fb;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.testimonial-card p {
  font-size: 1.1rem;
  color: #555;
  font-style: italic;
}

.testimonial-card h4 {
  font-size: 1.2rem;
  margin-top: 15px;
}

.testimonial-card p:last-child {
  font-size: 1rem;
  color: #777;
}

/* Pricing Section */
.pricing {
  padding: 50px 0;
  background-color: #f4f7fb;
  text-align: center;
}

.pricing h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 40px;
}

.pricing-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.pricing-card {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.pricing-card h3 {
  font-size: 1.8rem;
  color: #333;
}

.pricing-card p {
  font-size: 1.2rem;
  color: #3498db;
}

.pricing-card button {
  padding: 12px 25px;
  background-color: #2980b9;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pricing-card button:hover {
  background-color: #21618c;
}

/* Contact Us Section */
.contact-us {
  padding: 50px 0;
  background-color: #fff;
  text-align: center;
}

.contact-us h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 40px;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  display: block;
  font-size: 1.2rem;
  color: #333;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

textarea {
  height: 150px;
}

button {
  padding: 12px 30px;
  background-color: #3498db;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.cta {
  background-color: #3498db;
  color: white;
  padding: 50px 0;
  text-align: center;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.cta button {
  padding: 15px 30px;
  background-color: #2980b9;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta button:hover {
  background-color: #21618c;
}
</style>
