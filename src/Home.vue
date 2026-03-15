<template>
  <div>
    <h1>Home</h1>
    <p>
      This is the home page. You can access this page without being
      authenticated.
    </p>
    <p>
      <router-link to="/member">Member Page (login required)</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang=""></style>
