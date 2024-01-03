<script lang="ts">
import { ref } from "vue"
export default {
  setup() {
    const projects = ref([
      {
        title: "Revise marketing strategy",
        person: "Marketing Maven",
        due: "5th Feb 2024",
        status: "ongoing",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        title: "Implement new feature",
        person: "Code Crusader",
        due: "15th Feb 2024",
        status: "complete",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        title: "Redesign product packaging",
        person: "Creative Guru",
        due: "28th Jan 2024",
        status: "overdue",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        title: "Optimize website performance",
        person: "Tech Titan",
        due: "10th Jan 2024",
        status: "complete",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ])

    const sortBy = (prop) => {
      projects.value.sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
    }

    return { projects, sortBy }
  }
}
</script>

<template>
  <div class="dashboard bg-grey-lighten-3">
    <h1 class="subheading text-grey">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip text="Sort by project name" location="top">
          <template v-slot:activator="{ props }">
            <v-btn class="text-grey" variant="text" @click="sortBy('title')" v-bind="props">
              <v-icon left small icon="mdi-folder"></v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip text="Sort by person" location="top">
          <template v-slot:activator="{ props }">
            <v-btn class="text-grey" variant="text" @click="sortBy('person')" v-bind="props">
              <v-icon left small icon="mdi-account"></v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
        </v-tooltip>
      </v-row>
      <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption text-grey">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption text-grey">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption text-grey">Due Date</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <div class="text-right">
              <v-chip :class="`${project.status} text-white caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-divider></v-divider>
        </v-row>
      </v-card>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<style scoped>
.dashboard {
  height: 100%;
}
.project.complete {
  border-left: 4px solid green;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid red;
}
.v-chip.complete {
  background: green;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: red;
}
</style>
