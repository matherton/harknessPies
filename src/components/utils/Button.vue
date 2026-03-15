<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
</script>

<template>
  <button v-if="!isAuthenticated" @click="loginWithRedirect()">Log In</button>
  <button v-if="isAuthenticated" @click="logout()">Log Out</button>
  <p v-if="isAuthenticated">Welcome {{ user?.name }}</p>
</template>
