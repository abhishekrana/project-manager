<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
</script>

<template>
  <v-app class="bg-grey-lighten-3">
    <v-main class="mx-4">
      <Navbar />
      <v-main>
        <RouterView></RouterView>
      </v-main>
    </v-main>
  </v-app>
</template>
