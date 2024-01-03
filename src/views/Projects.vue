<script lang="ts">
import { ref, computed } from "vue"
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

    const myProjects = computed(() => {
      const person = "Code Crusader"
      return projects.value.filter((project) => project["person"] === person)
    })

    return { projects, myProjects }
  }
}
</script>

<template>
  <div class="projects bg-grey-lighten-3">
    <h1 class="subheading text-grey">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels v-for="project in myProjects" :key="project.title">
        <v-expansion-panel>
          <v-expansion-panel-title>{{ project.title }}</v-expansion-panel-title>
          <v-expansion-panel-text>{{ project.content }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<style scoped>
.projects {
  height: 100%;
}
</style>
