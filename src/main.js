/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

import { VueCookies } from 'vue-cookies'
app.use(VueCookies)

import VueGtag from 'vue-gtag'
import router from './router'
app.use(
    VueGtag, 
    {
        config: { id: 'G-KY34G7DB1G' },
        appName: 'Grafana Debugger',
        pageTrackerScreenviewEnabled: true,
    },
    router
)

app.mount('#app')
app.config.globalProperties.window = window
