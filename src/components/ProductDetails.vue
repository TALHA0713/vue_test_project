<template>
    <v-container>
      <!-- Back Button -->
      <v-btn icon @click="goBack" class="mb-4">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <!-- Product Card -->
      <v-card class="pa-4 elevation-3 rounded-lg product-card">
        <v-row>
          <!-- Product Image -->
          <v-col cols="12" md="6">
            <v-img
              :src="product.image"
              alt="Product Image"
              class="rounded-lg shadow-lg"
              height="400px"
              width="100%"
            ></v-img>
          </v-col>

          <!-- Product Details -->
          <v-col cols="12" md="6">
            <v-card-title class="text-h3 font-weight-bold text-primary">
              {{ product.name }}
            </v-card-title>
            <v-card-subtitle class="text-h5 text-secondary">
              Category: <strong>{{ product.category }}</strong>
            </v-card-subtitle>

            <v-divider class="my-3"></v-divider>

            <v-card-text class="text-h6">
              <p class="mb-4">{{ product.description }}</p>
              <p class="text-h4 font-weight-bold text-primary mb-4">
                Price: ${{ product.price }}
              </p>

              <!-- Star Rating -->
              <p><strong class="text-h5">Customer Rating:</strong>5 Stars</p>
              <v-rating
                :value="product.rating"
                readonly
                dense
                color="yellow darken-3"
                background-color="grey lighten-2"
                class="mb-4"
              ></v-rating>

              <p class="text-secondary">{{ product.reviews }} Reviews</p>
            </v-card-text>

            <!-- Action Buttons -->
            <v-btn
              color="primary"
              dark
              large
              @click="addToCart"
              class="mr-4"
              :loading="isLoading"
            >
              Add to Cart
            </v-btn>
            <v-btn color="grey darken-1" text large @click="goBack">
              Back to Products
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

      <!-- Related Products Section -->
      <v-row class="mt-5">
        <v-col cols="12">
          <v-subheader class="text-h4 font-weight-bold text-primary">Related Products</v-subheader>
        </v-col>
        <v-col v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" cols="12" md="4">
          <v-card class="elevation-2 related-product-card">
            <v-img
              :src="relatedProduct.image"
              alt="Related Product"
              height="200px"
              class="rounded-lg"
            ></v-img>
            <v-card-title class="text-h6 text-primary">{{ relatedProduct.name }}</v-card-title>
            <v-card-subtitle class="text-h6">${{ relatedProduct.price }}</v-card-subtitle>
            <v-btn color="white" text large @click="viewProduct(relatedProduct.id)">
              View Details
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      product: null,
      isLoading: false,
      relatedProducts: [
        { id: 1, name: 'Related Product 1', price: '25.99', image: require('@/assets/images1.jpeg') },
        { id: 2, name: 'Related Product 2', price: '40.00', image: require('@/assets/images1.jpeg') },
        { id: 3, name: 'Related Product 3', price: '35.50', image: require('@/assets/images1.jpeg') }
      ]
    }
  },
  created () {
    this.fetchProductDetails()
  },
  methods: {
    goBack () {
      this.$router.push({ name: 'ProductsPage' })
    },
    async fetchProductDetails () {
      const productId = this.$route.params.id

      // Simulating an API call to fetch product details by ID
      const randomFeatures = [
        'High quality',
        'Durable',
        'Limited edition',
        'Best seller'
      ]
      const randomRating = (Math.random() * 5).toFixed(1)
      const randomReviews = Math.floor(Math.random() * 500)

      this.product = {
        id: productId,
        name: `Product ${productId}`,
        description: `This is a detailed description of product ${productId}.`,
        price: (Math.random() * 100).toFixed(2),
        // eslint-disable-next-line standard/computed-property-even-spacing
        category: ['Electronics', 'Home & Garden', 'Books'][
          Math.floor(Math.random() * 3)
        ],
        image: require('@/assets/image.jpeg'),
        features: randomFeatures,
        rating: randomRating,
        reviews: randomReviews
      }
    },
    addToCart () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        alert(`Added ${this.product.name} to cart!`)
      }, 1500)
    },
    viewProduct (id) {
      this.$router.push({ name: 'ProductDetails', params: { id } })
    }
  }
}
</script>

  <style scoped>
  /* Background and Layout Styles */
  .v-container {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    background: linear-gradient(135deg, #f7f7f7, #e3e3e3);
    min-height: 100vh;
  }

  /* Card Styling */
  .product-card {
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  .v-divider {
    background-color: #ddd;
  }

  .v-btn {
    font-size: 16px;
    padding: 12px 20px;
    border-radius: 5px;
  }

  .v-btn:hover {
    transform: translateY(-2px);
    transition: 0.3s ease-in-out;
  }

  .text-primary {
    color: #3f51b5 !important;
  }

  .text-secondary {
    color: #757575 !important;
  }

  .text-h4 {
    font-size: 1.25rem;
  }

  .text-h5 {
    font-size: 1.125rem;
  }

  .text-h6 {
    font-size: 1rem;
  }

  /* Shadow Styling */
  .shadow-lg {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  .v-row .v-col {
    padding: 10px;
  }

  /* Related Product Card Styling */
  .related-product-card {
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  .related-product-card .v-img {
    transition: transform 0.3s ease;
  }

  .related-product-card .v-img:hover {
    transform: scale(1.05);
  }

  .v-card-title {
    font-size: 1.1rem;
  }

  .v-btn {
    font-size: 14px;
    padding: 10px 18px;
    border-radius: 25px;
    text-transform: uppercase;
  }

  .v-btn:hover {
    transform: translateY(-3px);
    transition: 0.3s ease-in-out;
  }

  .v-subheader {
    margin-bottom: 20px;
  }
  </style>
