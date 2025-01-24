<template>
  <v-container>
    <h1 class="text-center my-5">Our Products</h1>
    <v-row justify="center" class="products">
      <v-col
        v-for="product in displayedProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        class="mb-4"
      >
        <v-card>
          <v-img
            :src="product.image"
            alt="Product Image"
            class="white--text align-end"
            height="200px"
          ></v-img>
          <v-card-title class="primary--text">{{ product.name }}</v-card-title>
          <v-card-subtitle>{{ product.description }}</v-card-subtitle>
          <v-card-text>
            <p><strong>Price:</strong> ${{ product.price }}</p>
            <p><strong>Category:</strong> {{ product.category }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" dark @click="viewDetails(product)">
              View Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="text-center">
      <!-- Conditional rendering for "Load More" and "Show Less" buttons -->
      <v-btn
        color="primary"
        dark
        v-if="displayedProducts.length < products.length"
        @click="loadMore"
        class="mb-3"
      >
        Load More
      </v-btn>
      <v-btn
        color="secondary"
        dark
        v-if="displayedProducts.length === products.length"
        @click="showLess"
        class="mb-3"
      >
        Show Less
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductsPage',
  data () {
    return {
      products: Array.from({ length: 30 }, (v, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        description: `This is the description for product ${i + 1}.`,
        price: (Math.random() * 100).toFixed(2),
        category: ['Electronics', 'Home & Garden', 'Books'][i % 3],
        image: require('@/assets/image.jpeg')
      })),
      displayedProducts: [],
      itemsPerPage: 6
    }
  },
  created () {
    this.loadMore()
  },
  methods: {
    viewDetails (product) {
      // Navigate to the Product Detail page with the product id
      this.$router.push({ name: 'ProductDetails', params: { id: product.id } })
    },
    loadMore () {
      const startIndex = this.displayedProducts.length
      const endIndex = startIndex + this.itemsPerPage
      this.displayedProducts.push(...this.products.slice(startIndex, endIndex))
    },
    showLess () {
      if (this.displayedProducts.length > this.itemsPerPage) {
        this.displayedProducts.splice(
          this.displayedProducts.length - this.itemsPerPage,
          this.itemsPerPage
        )
        this.$nextTick(() => {
          const productList = document.querySelector('.products')
          productList.scrollTo({
            top: productList.scrollHeight,
            behavior: 'smooth'
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
  justify-content: center;
  align-items: center;
}

.products {
  padding: 20px;
}

/* Center the buttons */
.v-row.text-center {
  justify-content: center;
}

.v-btn {
  margin: 10px;
}
</style>
