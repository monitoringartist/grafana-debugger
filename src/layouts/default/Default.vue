<template>
  <v-app>
    <v-app-bar flat>
      <v-app-bar-title>
        <v-icon icon="mdi-bug" size="x-large"></v-icon>
        Grafana Debugger
      </v-app-bar-title>
      <v-btn @click="toggleTheme"><v-icon>mdi-theme-light-dark</v-icon></v-btn>
    </v-app-bar>
    <default-view />
    <v-footer class="text-center">
      <v-card
        tile
        flat
        width="100%"
        class="d-flex align-center justify-center"
        style="font-size: 0.75rem;"
      >
        
          <div class="text-no-wrap ml-2 float-left">
            Maintained by:&nbsp;<a href="https://monitoringartist.com" _target="_blank">Monitoring Artist</a>
          </div>
          <div class="ml-2 float-left">
            |
          </div>
          <div class="text-no-wrap ml-2 float-left">
            Star:&nbsp;<a target="_blank" href="https://github.com/jangaraj/gv">GitHub repository</a>
          </div>
          <div class="ml-2 float-left">
            | 
          </div>
          <div class="text-no-wrap ml-2 float-left">
            Feedback:&nbsp;<a target="_blank" href="https://github.com/jangaraj/gv/issues/new">New GitHub issue</a>
          </div>
        
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    mounted() {
      const theme = localStorage.getItem("theme");
      if (theme) {
          this.$vuetify.theme.dark = theme === "dark";
      } else {
          this.$vuetify.theme.dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    },
    methods: {
      toggle_dark_mode: function() {
          this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          localStorage.setItem("theme", this.$vuetify.theme.dark.toString());
      }
    }
  }
</script>

<script setup>
import DefaultView from './View.vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  // save theme to lcocal storage
  localStorage.setItem('theme', theme.global.name.value)
}
</script>
