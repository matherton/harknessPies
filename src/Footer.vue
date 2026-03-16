<template>
  <v-footer color="primary" class="py-4">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="4" class="text-center">
          <p class="font-weight-bold">Harkness Pies</p>
          <p class="text-caption">
            © {{ new Date().getFullYear() }} All rights reserved.
          </p>
        </v-col>

        <v-col cols="12" sm="4" class="text-center">
          <p>30B Raeburn Place, Edinburgh, EH4 1HN</p>
        </v-col>

        <v-col cols="12" sm="4" class="text-center">
          <p>
            <a href="mailto:Duffer@harknesspies.com" class="text-white"
              >Duffer@harknesspies.com</a
            >
          </p>
          <p>
            <a href="tel:01312592632" class="text-white">0131 259 2632</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
