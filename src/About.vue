<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="mb-6">
          <v-img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
            height="300"
            cover
          />
          <v-card-title class="text-h4 mt-4">About Harkness Pies</v-card-title>
          <v-card-text>
            <p class="text-body-1 mb-4">
              Welcome to Harkness Pies! We are a small family run food business
              based in the heart of Edinburgh, passionate about creating
              delicious handmade pies using only the finest locally sourced
              ingredients.
            </p>
            <p class="text-body-1 mb-4">
              Patrick Harkness has a background in butchery and has a passion
              for high quality, high-welfare local produce. Patrick owned and
              operated a butcher’s shop in East Vancouver, British Columbia,
              before moving to Edinburgh and opening Harkness Pies in
              Stockbridge in 2022.
            </p>
            <p class="text-body-1">
              Patrick and his wife Hailey recently welcomed their son Marlo into
              the world, so now every time you shop at Harkness Pies of
              Edinburgh you are not just buying the best pies in Scotland (as
              voted by us…!) but you are also helping to supply clothing for a
              wee newborn baby, so thank you.
            </p>
          </v-card-text>
        </v-card>

        <v-row>
          <v-col cols="12" sm="4">
            <v-card class="text-center pa-4">
              <v-icon size="48" color="primary">mdi-hand-heart</v-icon>
              <v-card-title class="justify-center">Handmade</v-card-title>
              <v-card-text
                >Every pie is lovingly handmade fresh to order</v-card-text
              >
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card class="text-center pa-4">
              <v-icon size="48" color="primary">mdi-map-marker</v-icon>
              <v-card-title class="justify-center">Local</v-card-title>
              <v-card-text
                >Proudly sourcing ingredients from local Scottish
                suppliers</v-card-text
              >
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card class="text-center pa-4">
              <v-icon size="48" color="primary">mdi-leaf</v-icon>
              <v-card-title class="justify-center">Fresh</v-card-title>
              <v-card-text
                >Only the freshest ingredients make it into our
                pies</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
