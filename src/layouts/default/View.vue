<template>
  <v-main :class="getClass()">
    <router-view />
  </v-main>
</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()

function getClass () {
  return theme.global.current.value.dark ? 'bg-grey-darken-4' : 'bg-white'
}
</script>
