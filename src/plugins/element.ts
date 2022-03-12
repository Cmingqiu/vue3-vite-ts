import { App } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElIcon,
  // 全局api
  ElMessage,
  ElNotification,
  ElMessageBox
} from 'element-plus'

export type Size = 'default' | 'medium' | 'small' | 'mini'

export default (app: App) => {
  // 国际化
  // app.use(ElementPlus, { locale: zhCn })
  const components = [
    ElButton,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElIcon
  ]

  components.forEach((component) => {
    app.use(component)
  })

  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notify = ElNotification
  app.config.globalProperties.$messageBox = ElMessageBox
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$prompt = ElMessageBox.prompt

  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
    // zIndex: 2000 弹框zIndex默认值：2000
  }
}
