import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Here we import fontawesome features so we can use them
// through the whole application
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart)

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
