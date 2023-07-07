[![Build Status](https://app.travis-ci.com/Cmingqiu/vue3-vite-ts.svg?branch=master)](https://app.travis-ci.com/Cmingqiu/vue3-vite-ts)

- vue3
- ts
- vite 2.x
- pinia+持久化 pinia-plugin-persist
- vue-router
- 角色权限验证 + 动态路由
- element-plus + element icon 注册
- eslint
- prettier
- git hooks 校验 commit 信息 + 自动生成 commit 规范信息
- postcss
- mock:开发环境和生产环境 mock
- axios 二次封装
- 环境变量
- pnpm
- svg + svgo 优化
- 递归菜单 + 菜单外链
- 菜单 icon 同时支持 el-icon 和自定义 svg
- 样式变量类型声明 + ts 使用样式变量 + 状态驱动的动态 css
- 支持 jsx、tsx
- nprogress 进度条
- keep-alive 缓存页面
- sass 换肤(明亮和暗黑)

TODO

- [ ] 支持 svg 图标及自动引入
- [ ] 组件自动引入 `unplugin-vue-components`
- [ ] 集成 lint-staged，提交前校验 eslint 格式
- [ ] 按钮权限

```
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
```
