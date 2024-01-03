<script lang="ts">
export default {
  setup() {
    const teams = [
      {
        name: "Code Crusader",
        role: "Software Engineer",
        avatar: "/avatar-1.jpg"
      },
      {
        name: "Creative Guru",
        role: "UI/UX Designer",
        avatar: "/avatar-2.jpg"
      },
      {
        name: "Data Diva",
        role: "Data Analyst",
        avatar: "/avatar-3.jpg"
      },
      {
        name: "Social Sorcerer",
        role: "Social Media Specialist",
        avatar: "/avatar-4.jpg"
      },
      {
        name: "Tech Titan",
        role: "IT Consultant",
        avatar: "/avatar-5.jpg"
      }
    ]

    return { teams }
  }
}
</script>

<template>
  <div class="team bg-grey-lighten-3">
    <h1 class="subheading text-grey">Team</h1>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in teams" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="bg-grey-lighten-3">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="text-grey">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon icon="mdi-message"></v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script scoped></script>
