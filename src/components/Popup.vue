<script lang="ts">
import { ref } from "vue"

export default {
  setup(props, context) {
    const title = ref("")
    const content = ref("")
    const due = ref(null)

    const form = ref(null)

    const inputRules = [(v) => (v && v.length >= 3) || "Input must be greater than 3 characters"]

    const submit = () => {
      if (form.value.validate()) {
        const project = {
          title: title.value,
          content: content.value,
          due: due.value,
          person: "Code Crusader",
          status: "ongoing"
        }
        // TODO: Send POST project request to the database
        // form.value.reset();
        context.emit("projectAdded")
      }
    }

    const formattedDate = () => {
      return due.value ? new Date(due.value).toUTCString().substring(0, 16) : ""
    }

    return { title, content, due, form, submit, formattedDate, inputRules }
  }
}
</script>

<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Add new project"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Add a new Project">
        <v-card-text>
          <v-form ref="form" class="px-3">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              required
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
              :rules="inputRules"
            ></v-textarea>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-text-field
                  :value="formattedDate()"
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                  v-bind="props"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn flat class="success mx-0 mt-3" @click="submit()">Add project</v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
