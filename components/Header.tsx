import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <div className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center mr-2">
            <span className="text-2xl font-bold">MC</span>
          </div>
          <span className="text-xl font-bold">我的世界乐高商城</span>
        </Link>

        {/* 搜索框 */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索商品..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              🔍
            </button>
          </div>
        </div>

        {/* 用户操作 */}
        <div className="flex space-x-4">
          <Link href="/login" className="flex items-center hover:text-secondary transition-colors">
            <span className="mr-1">👤</span>
            <span className="hidden md:inline">登录/注册</span>
          </Link>
          <Link href="/cart" className="flex items-center hover:text-secondary transition-colors">
            <span className="mr-1">🛒</span>
            <span className="hidden md:inline">购物车</span>
            <span className="ml-1 bg-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">
              0
            </span>
          </Link>
          <Link href="/orders" className="flex items-center hover:text-secondary transition-colors">
            <span className="mr-1">📋</span>
            <span className="hidden md:inline">订单</span>
          </Link>
        </div>
      </div>

      {/* 导航菜单 */}
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto py-2 space-x-6 text-sm">
            <li>
              <Link href="/" className="hover:text-secondary transition-colors whitespace-nowrap">首页</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-secondary transition-colors whitespace-nowrap">全部商品</Link>
            </li>
            <li>
              <Link href="/products?category=figures" className="hover:text-secondary transition-colors whitespace-nowrap">人仔系列</Link>
            </li>
            <li>
              <Link href="/products?category=sets" className="hover:text-secondary transition-colors whitespace-nowrap">套装系列</Link>
            </li>
            <li>
              <Link href="/products?category=buildings" className="hover:text-secondary transition-colors whitespace-nowrap">建筑系列</Link>
            </li>
            <li>
              <Link href="/products?category=accessories" className="hover:text-secondary transition-colors whitespace-nowrap">配件系列</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary transition-colors whitespace-nowrap">关于我们</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary transition-colors whitespace-nowrap">联系我们</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header