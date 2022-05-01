import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import mockRoutes from './mock-routes'
import mockApi from './api'

export function setupProdMockServer() {
  createProdMockServer([...mockApi, ...mockRoutes])
}
