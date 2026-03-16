<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";

const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
const router = useRouter();
</script>

<template>
  <v-app>
    <v-app-bar color="primary" flat>
      <v-app-bar-title>My Food Business</v-app-bar-title>

      <v-spacer />

      <v-btn @click="router.push('/')">Home</v-btn>
      <v-btn @click="router.push('/member')">Members Area</v-btn>
      <v-btn>Shop</v-btn>
      <v-btn>About</v-btn>
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

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped></style>
