import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

// 使用require.context 加载./svg目录下所有svg文件
// const files = import.meta.globEager('./svg/*.svg')
import 'virtual:svg-icons-register'

export default (app: App) => {
  app.component('SvgIcon', SvgIcon)
}
