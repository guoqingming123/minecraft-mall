import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-lg font-bold mb-4">关于我们</h3>
            <p className="text-gray-400 mb-4">
              专注于乐高积木"我的世界"主题元素玩具的电商网站，为玩家提供优质的商品和服务。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">首页</Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">全部商品</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">关于我们</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">联系我们</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">服务条款</Link>
              </li>
            </ul>
          </div>

          {/* 帮助中心 */}
          <div>
            <h3 className="text-lg font-bold mb-4">帮助中心</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">常见问题</Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">配送信息</Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">退换货政策</Link>
              </li>
              <li>
                <Link href="/payment" className="text-gray-400 hover:text-white transition-colors">支付方式</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">隐私政策</Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-bold mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <span className="mr-2">📧</span>
                <a href="mailto:contact@minecraftlego.com" className="hover:text-white transition-colors">
                  contact@minecraftlego.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">📞</span>
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">📍</span>
                <span>广东省深圳市元宝幸福之家9527号</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2024 我的世界乐高商城. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer