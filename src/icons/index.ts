import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

//  加载./svg目录下所有svg文件，注意vite.config.js中插件的iconDirs路径
import 'virtual:svg-icons-register'

export default (app: App) => {
  app.component('SvgIcon', SvgIcon)
}
