<script lang="ts">
import { ref } from "vue"
import Popup from "@/components/Popup.vue"

export default {
  components: { Popup },
  setup() {
    const drawer = ref(false)
    const snackbar = ref(false)
    const items = [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-folder", text: "My Projects", route: "/projects" },
      { icon: "mdi-account-multiple", text: "Team", route: "/team" }
    ]
    return { drawer, items, snackbar }
  }
}
</script>
<template>
  <nav>
    <v-snackbar v-model="snackbar" timeout="5000" top color="green">
      <span>Successfully added a new project.</span>
      <v-btn variant="text" color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-toolbar app>
      <v-app-bar-nav-icon class="text-grey" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase text-grey">
        <span class="font-weight-light"> Project Manager </span>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->

      <!-- dropdown menu -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">
            <v-icon icon="mdi-chevron-down"></v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" router :to="item.route">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn color="grey">
        <span>Sign Out</span>
        <v-icon icon="mdi-exit-to-app"></v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app class="bg-primary" v-model="drawer">
      <v-row>
        <v-col class="text-center">
          <v-avatar size="100">
            <img src="/avatar-1.jpg" />
          </v-avatar>
          <p class="text-white subheading mt-1">Code Crusader</p>
        </v-col>
      </v-row>
      <v-col class="mt-4 mb-3 text-center">
        <Popup @projectAdded="snackbar = true" />
      </v-col>

      <v-list :lines="false" density="compact" nav>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" router :to="item.route">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title>{{ item.text }} </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
