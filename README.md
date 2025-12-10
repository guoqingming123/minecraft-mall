# Minecraft Mall - 我的世界商城网站

一个基于Next.js 14和Tailwind CSS构建的Minecraft主题电商网站，支持静态部署到GitHub Pages。

## ✨ 功能特性

- 🎮 **Minecraft主题设计** - 采用游戏风格的UI设计，包括方块风格的布局和像素风格的元素
- 🛍️ **完整的电商功能** 
  - 产品展示和详情页面
  - 购物车管理
  - 结账流程
  - 用户登录界面
- 📱 **响应式设计** - 支持桌面、平板和手机等多种设备
- ⚡ **高性能** - 使用Next.js静态导出，实现极速加载
- 🚀 **自动部署** - 配置了GitHub Actions自动部署到GitHub Pages

## 🛠️ 技术栈

- **前端框架**: Next.js 14
- **编程语言**: TypeScript
- **样式框架**: Tailwind CSS v4
- **状态管理**: React Context API (用于购物车管理)
- **部署**: GitHub Pages + GitHub Actions

## 📦 项目结构

```
├── app/                    # Next.js App Router
│   ├── page.tsx            # 首页
│   ├── products/           # 产品相关页面
│   │   ├── [id]/           # 产品详情页
│   │   └── page.tsx        # 产品列表页
│   ├── cart/               # 购物车页面
│   ├── checkout/           # 结账页面
│   ├── login/              # 登录页面
│   ├── about/              # 关于页面
│   └── contact/            # 联系页面
├── components/             # 可复用组件
│   ├── Header.tsx          # 头部导航组件
│   └── Footer.tsx          # 底部组件
├── public/                 # 静态资源
│   └── images/             # 图片资源
└── .github/                # GitHub配置
    └── workflows/          # GitHub Actions工作流
```

## 🚀 快速开始

### 环境要求
- 推荐使用 Node.js 20.0.0 或更高版本以获得最佳性能

- Node.js 18.0.0 或更高版本
- Yarn (推荐) 或 npm

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/guoqingming123/minecraft-mall.git
cd minecraft-mall
```

2. **安装依赖**

```bash
yarn install
# 或
npm install
```

3. **启动开发服务器**

```bash
yarn dev
# 或
npm run dev
```

4. **访问网站**

打开浏览器访问 http://localhost:3000

### 构建生产版本

```bash
yarn build
# 或
npm run build
```

构建产物将生成在 `out/` 目录中，可用于静态部署。

## 📖 页面说明

### 首页 (`/`)

- 展示热门产品
- 特色商品推荐
- 网站导航和品牌介绍

### 产品列表页 (`/products`)

- 展示所有可用产品
- 产品分类和过滤功能
- 产品卡片展示，包含图片、名称、价格等信息

### 产品详情页 (`/products/[id]`)

- 详细的产品信息
- 多张产品图片展示
- 添加到购物车功能
- 用户评价展示

### 购物车页 (`/cart`)

- 查看已添加的商品
- 修改商品数量
- 删除商品
- 计算总价

### 结账页 (`/checkout`)

- 订单信息确认
- 收货地址填写
- 支付方式选择

### 登录页 (`/login`)

- 用户登录界面
- 注册功能入口

### 关于我们 (`/about`)

- 网站介绍
- 团队信息
- 联系方式

### 联系我们 (`/contact`)

- 联系表单
- 联系方式展示

## 📱 响应式设计

网站采用移动优先的响应式设计理念，在不同屏幕尺寸下提供最佳体验：

- **桌面端** (>1024px): 多列布局，完整功能展示
- **平板端** (768px-1024px): 适当调整布局，保持核心功能
- **手机端** (<768px): 单列布局，优化触摸交互

## 🚢 部署说明

### GitHub Pages 部署

本项目已配置GitHub Actions自动部署：

1. **推送代码到GitHub**

```bash
git add .
git commit -m "添加新功能"
git push origin main
```

2. **自动部署流程**

- GitHub Actions会自动触发构建
- 构建完成后自动部署到GitHub Pages
- 部署完成后可访问 https://guoqingming123.github.io/minecraft-mall/

### 手动部署

1. **构建静态文件**

```bash
yarn build
```

2. **部署到静态网站托管服务**

将 `out/` 目录中的所有文件上传到任何静态网站托管服务，如：
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages (手动模式)

## 🎨 自定义主题

### 颜色配置

在 `tailwind.config.ts` 中可以自定义主题颜色：

```typescript
export default {
  theme: {
    extend: {
      colors: {
        minecraft: {
          green: '#5EAA51',
          dirt: '#A07550',
          stone: '#A0A0A0',
          wood: '#D2B48C',
          // 更多颜色...
        },
      },
    },
  },
}
```

### 添加新产品

在 `/app/products/page.tsx` 文件中添加新产品数据：

```typescript
const products = [
  {
    id: 9,
    name: "新产品名称",
    description: "产品描述...",
    price: 19.99,
    image: "/images/new-product.png",
    category: "工具",
    rating: 4.5,
    stock: 50,
    // 其他属性...
  },
  // 其他产品...
];
```

## 🤝 贡献指南

欢迎贡献代码！请按照以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件

## 🙏 致谢

- Minecraft游戏及其相关素材的灵感来源
- Next.js和Tailwind CSS社区提供的优秀工具
- GitHub提供的免费托管和CI/CD服务

---

⭐ 如果这个项目对您有帮助，请给它一个星标！