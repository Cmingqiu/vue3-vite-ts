import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import { Size } from './element'

// vue实例上挂载属性类型声明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof ElMessage
    $notify: typeof ElNotification
    $messageBox: typeof ElMessageBox
    $alert: typeof ElMessageBox.alert
    $confirm: typeof ElMessageBox.confirm
    $prompt: typeof ElMessageBox.prompt
    $ELEMENT: {
      size: Size
    }
  }
}
