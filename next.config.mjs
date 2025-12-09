/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出，支持GitHub Pages部署
  output: 'export',
  // 项目部署在GitHub Pages的子目录中（https://guoqingming123.github.io/minecraft-mall/），
  // 只在生产环境设置basePath，开发环境保持默认路径
  basePath: process.env.NODE_ENV === 'production' ? '/minecraft-mall' : '',
  // 确保图片路径正确
  images: {
    unoptimized: true,
  },
}

export default nextConfig