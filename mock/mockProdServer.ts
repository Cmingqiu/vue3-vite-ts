import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import mockRoutes from './mock-routes'

export function setupProdMockServer() {
  createProdMockServer([...mockRoutes])
}
