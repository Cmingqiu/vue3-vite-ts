import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/common'
import initSvgIcon from '@/icons' //注册svg全局组件
import initElement from '@/plugins/element' //初始化element-plus
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.use(router).use(store).use(initElement).use(initSvgIcon).mount('#app')

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
