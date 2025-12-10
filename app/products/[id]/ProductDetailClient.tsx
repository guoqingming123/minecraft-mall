'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  rating: number
  reviewCount: number
  images: string[]
  description: string
  size: string[]
  category: string
  stock: number
  specifications: { name: string; value: string }[]
}
// 客户端组件属性接口
interface ProductDetailClientProps {
  product: Product
  reviews: Review[]
}

// 评价接口
interface Review {
  id: number
  username: string
  rating: number
  date: string
  content: string
  helpful: number
}

// 客户端组件
const ProductDetailClient = ({ product, reviews }: ProductDetailClientProps) => {
  // 在客户端使用的状态
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(product.size[0])

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    // 模拟添加到购物车
    alert(`已将 ${quantity} 件 ${product.name} (${selectedSize}) 添加到购物车`)
  }

  const handleBuyNow = () => {
    // 模拟立即购买
    alert(`正在购买 ${quantity} 件 ${product.name} (${selectedSize})`)
  }

  return (
    <>
      {/* 商品图片和信息 */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* 左侧图片区域 */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
            <div className="relative aspect-square overflow-hidden rounded">
              <Image
                src={`/images/${product.images[selectedImage].split('/').pop()}`}
                alt={`${product.name} - 图片 ${selectedImage + 1}`}
                width={800}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded cursor-pointer border-2 transition-colors ${
                  selectedImage === index ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-gray-300'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={`/images/${image.split('/').pop()}`}
                  alt={`缩略图 ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 右侧商品信息 */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            {/* 商品名称和评分 */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : index < product.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({product.reviewCount} 条评价)</span>
            </div>

            {/* 价格信息 */}
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-3xl font-bold text-red-500">¥{product.price}</span>
                <span className="text-xl text-gray-400 line-through">¥{product.originalPrice}</span>
              </div>
              <div className="text-sm text-green-500">
                优惠: ¥{product.originalPrice - product.price} ({Math.round((1 - product.price / product.originalPrice) * 100)}% OFF)
              </div>
            </div>

            {/* 商品描述 */}
            <div className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </div>

            {/* 尺寸选择 */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">选择尺寸</h3>
              <div className="flex flex-wrap gap-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedSize === size
                        ? 'bg-primary text-white border-primary'
                        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 数量选择 */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-2">数量</h3>
              <div className="flex items-center gap-2">
                <button
                  className={`w-10 h-10 flex items-center justify-center rounded border ${
                    quantity <= 1
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <div className="w-16 text-center text-sm font-medium">{quantity}</div>
                <button
                  className={`w-10 h-10 flex items-center justify-center rounded border ${
                    quantity >= product.stock
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
                <span className="text-sm text-gray-500 ml-2">库存: {product.stock} 件</span>
              </div>
            </div>

            {/* 购买按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                加入购物车
              </button>
              <button
                className="flex-1 py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                onClick={handleBuyNow}
              >
                立即购买
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 详情标签页 */}
      <div className="mt-12">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button className="py-4 px-6 text-sm font-medium text-primary border-b-2 border-primary">
                商品详情
              </button>
              <button className="py-4 px-6 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300">
                规格参数
              </button>
              <button className="py-4 px-6 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300">
                用户评价
              </button>
            </nav>
          </div>
          <div className="p-6">
            {/* 商品详情内容 */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">商品详情</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>{product.description}</p>
                  <p className="mt-4">
                    这款产品是乐高我的世界系列的经典之作，采用高质量材料制作，设计精美，
                    是收藏和玩耍的理想选择。适合6岁以上儿童，能够锻炼孩子的动手能力和创造力。
                  </p>
                </div>
              </div>

              {/* 规格参数 */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">规格参数</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">{spec.name}</span>
                      <span className="text-gray-800 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 用户评价 */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">用户评价</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-800">{review.username}</span>
                          <div className="ml-3 flex">
                            {[...Array(5)].map((_, index) => (
                              <svg
                                key={index}
                                className={`w-4 h-4 ${
                                  index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600 mb-2">{review.content}</p>
                      <button className="text-sm text-gray-500 hover:text-primary flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        有用 {review.helpful}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 相关推荐 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">相关推荐</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="aspect-square p-4 flex items-center justify-center bg-gray-50">

                <img
                  src={`/images/史蒂夫和苦力怕.png`}
                  alt="推荐商品"
                  className="max-w-full max-h-full object-contain"
                />

              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-12">
                  乐高我的世界系列经典角色套装
                </h3>
                <div className="flex items-center mt-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-baseline">
                  <span className="text-lg font-bold text-red-500">¥99</span>
                  <span className="ml-2 text-sm text-gray-400 line-through">¥129</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductDetailClient
