# 静石 · 纪念碑产品展示

纯 HTML、CSS、JavaScript 响应式站点，包含产品列表、分类筛选与产品图文详情，无需安装依赖或构建。

## 文件

- `index.html`：页面入口。
- `styles.css`：响应式样式。
- `app.js`：产品数据、分类筛选与详情路由。
- `assets/`：三张 AI 生成的产品展示图。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署流程。

## 部署

将本目录的内容放到 GitHub 仓库根目录，默认分支使用 `main`。在仓库 Settings → Pages 中，将 Source 设置为 GitHub Actions，推送代码后运行部署流程。

本包不含先前 Sites 站点的身份与部署配置。

## 更新内容

在 `app.js` 的 `products` 数组中修改产品名称、图片、材质、尺寸和说明。在 `index.html` 与 `app.js` 中替换示例品牌及咨询电话号码。

产品数据、服务介绍、联系电话和图片均为展示示例，正式运营前请替换为实际内容。
