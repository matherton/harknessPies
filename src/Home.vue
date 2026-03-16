<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title>Welcome to the Home Page</v-card-title>
      <v-card-text>
        <p>
          This is the home page. You can access this page without being
          authenticated.
        </p>
        <p>
          <router-link to="/member">Member Page (login required)</router-link>
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang=""></style>
