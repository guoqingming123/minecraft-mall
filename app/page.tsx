"use client"
import Link from 'next/link'
import Image from 'next/image'

// 模拟商品数据
const newProducts = [
  {
    id: 1,
    name: '乐高我的世界 史蒂夫和苦力怕',
    price: 99,
    image: '/images/史蒂夫和苦力怕.png',
    category: 'figures'
  },
  {
    id: 2,
    name: '乐高我的世界 末地传送门',
    price: 299,
    image: '/images/末地传送门.png',
    category: 'sets'
  },
  {
    id: 3,
    name: '乐高我的世界 村庄',
    price: 499,
    image: '/images/村庄.png',
    category: 'buildings'
  },
  {
    id: 4,
    name: '乐高我的世界 钻石剑',
    price: 59,
    image: '/images/钻石剑.png',
    category: 'accessories'
  }
]

const hotProducts = [
  {
    id: 5,
    name: '乐高我的世界 凋灵',
    price: 199,
    image: '/images/下界凋灵.png',
    category: 'figures'
  },
  {
    id: 6,
    name: '乐高我的世界 下界堡垒',
    price: 399,
    image: '/images/下界堡垒.png',
    category: 'buildings'
  },
  {
    id: 7,
    name: '乐高我的世界 红石矿井',
    price: 249,
    image: '/images/红石矿井.png',
    category: 'sets'
  },
  {
    id: 8,
    name: '乐高我的世界 盾牌',
    price: 49,
    image: '/images/盾牌.png',
    category: 'accessories'
  }
]

const Home = () => {

  return (
    <div>
      {/* 轮播图 */}
      <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden">
            <Image
              src="/images/我的世界.jpeg"
              alt="我的世界乐高商城"
              width={1200}
              height={400}
              className="object-cover w-full h-full"
            />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">欢迎来到我的世界乐高商城</h1>
            <p className="text-xl mb-6">探索精彩的乐高我的世界主题玩具</p>
            <Link href="/products" className="btn btn-primary">
              立即购物
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* 新品推荐 */}
        <section className="mb-16">
          <h2 className="section-title">新品推荐</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="card">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2 truncate">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-red-500 font-bold">¥{product.price}</span>
                    <button className="text-secondary hover:text-green-700">
                      🛒 加入购物车
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 热销商品 */}
        <section>
          <h2 className="section-title">热销商品</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="card">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2 truncate">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-red-500 font-bold">¥{product.price}</span>
                    <button className="text-secondary hover:text-green-700">
                      🛒 加入购物车
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
