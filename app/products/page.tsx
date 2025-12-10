"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

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

const ProductsPage = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/minecraft-mall' : ''
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const searchParams = useSearchParams()

  // 从URL查询参数中获取分类
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  // 筛选商品
  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory === 'all') return true
    return product.category === selectedCategory
  })

  // 排序商品
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品列表</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* 筛选栏 */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h3 className="text-lg font-bold mb-4">商品分类</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === 'all' ? 'bg-secondary text-white' : 'hover:bg-gray-100'}`}
                >
                  全部商品
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory('figures')}
                  className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === 'figures' ? 'bg-secondary text-white' : 'hover:bg-gray-100'}`}
                >
                  人仔系列
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory('sets')}
                  className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === 'sets' ? 'bg-secondary text-white' : 'hover:bg-gray-100'}`}
                >
                  套装系列
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory('buildings')}
                  className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === 'buildings' ? 'bg-secondary text-white' : 'hover:bg-gray-100'}`}
                >
                  建筑系列
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedCategory('accessories')}
                  className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === 'accessories' ? 'bg-secondary text-white' : 'hover:bg-gray-100'}`}
                >
                  配件系列
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 商品列表 */}
        <div className="md:w-3/4">
          {/* 排序 */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">共 {sortedProducts.length} 件商品</span>
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-gray-600">排序：</label>
              <select
                id="sort"
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-secondary"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">默认排序</option>
                <option value="price-asc">价格从低到高</option>
                <option value="price-desc">价格从高到低</option>
                <option value="rating">评分最高</option>
              </select>
            </div>
          </div>

          {/* 商品网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="card">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <Image
                    src={`${basePath}${product.image}`}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
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
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
