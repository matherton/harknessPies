<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";

const { loginWithRedirect, isAuthenticated } = useAuth0();
const router = useRouter();

const featuredProducts = [
  {
    id: 1,
    name: "Steak & Ale Pie",
    description: "Tender steak slow cooked in a rich ale gravy",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400",
  },
  {
    id: 2,
    name: "Chicken & Leek Pie",
    description: "Creamy chicken and fresh leek in a buttery pastry",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
  },
  {
    id: 3,
    name: "Scottish Lamb Pie",
    description: "Slow braised Scottish lamb with root vegetables",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
  },
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <v-img
      src="https://images.unsplash.com/photo-1600628421066-f6bada8c2e7a?w=1200"
      height="500"
      cover
    >
      <div class="hero-overlay d-flex align-center justify-center fill-height">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="text-h2 font-weight-bold text-white mb-4">
                Welcome to Harkness Pies
              </h1>
              <p class="text-h6 text-white mb-8">
                Handmade Scottish pies crafted with love in the heart of
                Edinburgh
              </p>
              <v-btn
                v-if="!isAuthenticated"
                color="primary"
                size="large"
                class="mr-4"
                @click="loginWithRedirect()"
              >
                Join Our Members Club
              </v-btn>
              <v-btn
                color="white"
                size="large"
                variant="outlined"
                @click="router.push('/shop')"
              >
                Shop Now
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-img>

    <!-- Featured Products Section -->
    <v-container class="mt-8">
      <v-row>
        <v-col cols="12" class="text-center mb-4">
          <h2 class="text-h4 font-weight-bold">Featured Pies</h2>
          <p class="text-body-1 mt-2">
            A selection of our most popular handmade pies
          </p>
        </v-col>

        <v-col
          v-for="product in featuredProducts"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card height="100%">
            <v-img :src="product.image" height="200" cover />
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.description }}</v-card-subtitle>
            <v-card-text>
              <span class="text-h6">£{{ product.price.toFixed(2) }}</span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                variant="elevated"
                block
                @click="router.push('/shop')"
              >
                View in Shop
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Members CTA Section -->
      <v-row v-if="!isAuthenticated" class="mt-8 mb-8">
        <v-col cols="12">
          <v-card color="primary" class="text-center pa-8">
            <v-card-title class="text-h4 text-white mb-4">
              Join the Harkness Pies Members Club
            </v-card-title>
            <v-card-text class="text-white text-body-1 mb-4">
              Sign up today for exclusive member discounts, loyalty rewards and
              early access to our seasonal specials!
            </v-card-text>
            <v-btn color="black" size="large" @click="loginWithRedirect()">
              Sign Up Now
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.hero-overlay {
  background: url("/src/img/pastry.webp");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
}

.hero-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-overlay > * {
  position: relative;
  z-index: 2;
}
</style>
