<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Footer from "./Footer.vue";

const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
const router = useRouter();
const drawer = ref(false);

const returnTo =
  window.location.hostname === "localhost"
    ? window.location.origin
    : `${window.location.origin}/harknessPies`;
</script>

<template>
  <v-app>
    <v-app-bar color="primary" flat>
      <!-- Hamburger button - only shows on mobile -->
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer" />

      <v-app-bar-title
        ><v-btn @click="router.push('/')">Harkness Pies</v-btn>
      </v-app-bar-title>

      <v-spacer />

      <!-- Desktop navigation - hidden on mobile -->
      <div class="d-none d-md-flex align-center">
        <v-btn @click="router.push('/shop')">Shop</v-btn>
        <v-btn @click="router.push('/about')">About</v-btn>
        <v-btn>Contact</v-btn>
        <v-btn @click="router.push('/member')">Members Area</v-btn>
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
          @click="logout({ logoutParams: { returnTo } })"
          variant="outlined"
          class="ml-2"
        >
          Log Out
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Mobile drawer -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          title="Home"
          @click="
            router.push('/');
            drawer = false;
          "
        />
        <v-list-item
          title="Shop"
          @click="
            router.push('/shop');
            drawer = false;
          "
        />
        <v-list-item
          title="About"
          @click="
            router.push('/about');
            drawer = false;
          "
        />
        <v-list-item title="Contact" @click="drawer = false" />
        <v-list-item
          title="Members Area"
          @click="
            router.push('/member');
            drawer = false;
          "
        />
        <v-divider class="my-2" />
        <v-list-item
          v-if="!isAuthenticated"
          title="Log In"
          @click="
            loginWithRedirect();
            drawer = false;
          "
        />
        <v-list-item
          v-if="isAuthenticated"
          title="Log Out"
          @click="
            logout({ logoutParams: { returnTo } });
            drawer = false;
          "
        />
      </v-list>
    </v-navigation-drawer>

    <v-main style="min-height: 90vh">
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>
