<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-4">Shop</h1>
      </v-col>

      <v-col
        v-for="product in products"
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
              :href="product.stripeLink"
              target="_blank"
              block
            >
              Buy Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stripeLink: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Artisan Sourdough Loaf",
    description: "Freshly baked sourdough bread made with organic flour",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
    stripeLink: "https://buy.stripe.com/your-payment-link-here",
  },
  {
    id: 2,
    name: "Homemade Granola",
    description: "Crunchy oat granola with honey and mixed nuts",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?w=400",
    stripeLink: "https://buy.stripe.com/your-payment-link-here",
  },
  {
    id: 3,
    name: "Seasonal Jam Selection",
    description: "Three jars of homemade seasonal fruit jams",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1563252722-6434563a985d?w=400",
    stripeLink: "https://buy.stripe.com/your-payment-link-here",
  },
  {
    id: 4,
    name: "Fresh Pasta Bundle",
    description: "Hand rolled fresh pasta, serves four",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400",
    stripeLink: "https://buy.stripe.com/your-payment-link-here",
  },
  {
    id: 5,
    name: "Herb Infused Olive Oil",
    description: "Cold pressed olive oil with fresh garden herbs",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
    stripeLink: "https://buy.stripe.com/your-payment-link-here",
  },
  {
    id: 6,
    name: "Luxury Brownie Box",
    description: "Six rich chocolate brownies, gift boxed",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=400",
    stripeLink: "https://buy.stripe.com/your-payment-link-here",
  },
];
</script>
