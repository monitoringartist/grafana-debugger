<template>
  <v-app>
    <v-app-bar flat scroll-behavior="hide" scroll-threshold="10">
      <v-app-bar-title>
        <router-link to="/" class="text-decoration-none logo" >
          <v-icon icon="mdi-bug" size="x-large"></v-icon>
          Grafana Debugger
        </router-link>
      </v-app-bar-title>
      <v-btn @click="toggleTheme"><v-icon>mdi-theme-light-dark</v-icon></v-btn>
    </v-app-bar>
    <default-view />
    <v-footer absolute class="text-center">
      <v-card
        tile
        flat
        width="100%"
        class="d-flex align-center justify-center"
        style="font-size: 0.75rem;"
      >
        <v-row justify="center">
          <v-col cols="3"></v-col>
          <v-spacer></v-spacer>
          <v-col>
            <div class="text-no-wrap">
              <a class="footer text-decoration-none" href="https://monitoringartist.com" _target="_blank">Crafted with <v-icon icon="mdi-cards-heart" color="red"></v-icon> by Monitoring Artist</a>
            </div>
          </v-col>
          <v-col> 
          </v-col>
          <v-col> 
            |
          </v-col>
          <v-col> 
            <div class="text-no-wrap">
              <a class="footer text-decoration-none" target="_blank" href="https://github.com/monitoringartist/grafana-debugger"><v-icon icon="mdi-github"></v-icon> GitHub repository</a>
            </div>
          </v-col>
          <v-col> 
            | 
          </v-col>
          <v-col> 
            <div class="text-no-wrap">
              <a class="footer text-decoration-none" target="_blank" href="todo"><v-icon icon="mdi-scale-balance"></v-icon> Legal</a>
            </div>
          </v-col>
          <v-col> 
            | 
          </v-col>
          <v-col> 
            <div class="text-no-wrap">
              <router-link class="footer text-decoration-none" to="/grot"><v-icon icon="mdi-chat"></v-icon> Grot</router-link>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="3"></v-col>
        </v-row>
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
  localStorage.setItem('theme', theme.global.name.value)
}
</script>

<style>
.v-theme--dark .logo, .v-theme--dark .footer {
  color: white;
}
.v-theme--light .logo, .v-theme--light .footer {
  color: #404040;
}
</style>
