<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";
import Footer from "./Footer.vue";

const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
const router = useRouter();
</script>

<template>
  <v-app>
    <v-app-bar color="primary" flat>
      <v-app-bar-title>Harkness Pies</v-app-bar-title>

      <v-spacer />

      <v-btn @click="router.push('/')">Home</v-btn>
      <v-btn @click="router.push('/member')">Members Area</v-btn>
      <v-btn @click="router.push('/shop')">Shop</v-btn>
      <v-btn @click="router.push('/about')">About</v-btn>
      <v-btn>Contact</v-btn>

      <v-btn
        v-if="!isAuthenticated"
        @click="loginWithRedirect()"
        variant="outlined"
        class="ml-2"
      >
        Log In
      </v-btn>

      <v-btn
        v-if="isAuthenticated"
        @click="logout()"
        variant="outlined"
        class="ml-2"
      >
        Log Out
      </v-btn>
    </v-app-bar>

    <v-main style="min-height: 90vh">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped></style>
