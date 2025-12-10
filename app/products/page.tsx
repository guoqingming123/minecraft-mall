import { Suspense } from 'react'
import ProductsContent from '../../components/ProductsContent'

// 模拟商品数据
const allProducts = [
  {
    id: 1,
    name: '乐高我的世界 史蒂夫和苦力怕',
    price: 99,
    image: '/images/史蒂夫和苦力怕.png',
    category: 'figures',
    rating: 4.8
  },
  {
    id: 2,
    name: '乐高我的世界 末地传送门',
    price: 299,
    image: '/images/末地传送门.png',
    category: 'sets',
    rating: 4.9
  },
  {
    id: 3,
    name: '乐高我的世界 村庄',
    price: 499,
    image: '/images/村庄.png',
    category: 'buildings',
    rating: 4.7
  },
  {
    id: 4,
    name: '乐高我的世界 钻石剑',
    price: 59,
    image: '/images/钻石剑.png',
    category: 'accessories',
    rating: 4.6
  },
  {
    id: 5,
    name: '乐高我的世界 凋灵',
    price: 199,
    image: '/images/下界凋灵.png',
    category: 'figures',
    rating: 4.9
  },
  {
    id: 6,
    name: '乐高我的世界 下界堡垒',
    price: 399,
    image: '/images/下界堡垒.png',
    category: 'buildings',
    rating: 4.8
  },
  {
    id: 7,
    name: '乐高我的世界 红石矿井',
    price: 249,
    image: '/images/红石矿井.png',
    category: 'sets',
    rating: 4.7
  },
  {
    id: 8,
    name: '乐高我的世界 盾牌',
    price: 49,
    image: '/images/盾牌.png',
    category: 'accessories',
    rating: 4.5
  }
]

// 服务器组件 - 主页面
const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品列表</h1>
      
      {/* 使用Suspense包裹客户端组件 */}
      <Suspense fallback={<div className="loading">加载中...</div>}>
        <ProductsContent products={allProducts} />
      </Suspense>
    </div>
  )
}

export default ProductsPage
