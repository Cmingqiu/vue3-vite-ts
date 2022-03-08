import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/common'

const app = createApp(App)
app.use(ElementPlus).use(router).use(createPinia()).mount('#app')

/*热更新

export function render() {
  document.getElementById('app')!.innerHTML = 'hahaha32e333233'
}
render()

if (import.meta.hot) {
  import.meta.hot.accept(updateModule => {
    updateModule.render()
  })
}
 */
