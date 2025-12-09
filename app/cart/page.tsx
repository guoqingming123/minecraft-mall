"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// 模拟购物车数据
const initialCartItems = [
  {
    id: 1,
    name: '乐高我的世界 史蒂夫和苦力怕',
    price: 99,
    image: '/images/史蒂夫和苦力怕.png',
    quantity: 2,
    selected: true
  },
  {
    id: 2,
    name: '乐高我的世界 钻石剑',
    price: 59,
    image: '/images/钻石剑.png',
    quantity: 1,
    selected: true
  },
  {
    id: 3,
    name: '乐高我的世界 凋灵',
    price: 199,
    image: '/images/下界凋灵.png',
    quantity: 1,
    selected: false
  }
]

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems)

  // 计算总价
  const calculateTotal = () => {
    return cartItems
      .filter(item => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // 更新商品数量
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ))
  }

  // 删除商品
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  // 切换商品选中状态
  const toggleSelect = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ))
  }

  // 全选/取消全选
  const toggleSelectAll = () => {
    const allSelected = cartItems.every(item => item.selected)
    setCartItems(cartItems.map(item => ({ ...item, selected: !allSelected })))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">购物车</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <span className="text-gray-500 text-xl mb-4 block">购物车是空的</span>
          <Link href="/products" className="btn btn-primary">
            去购物
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 购物车商品列表 */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            {/* 表头 */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="selectAll"
                  checked={cartItems.every(item => item.selected)}
                  onChange={toggleSelectAll}
                  className="mr-2"
                />
                <label htmlFor="selectAll" className="font-medium">全选</label>
              </div>
              <div className="flex space-x-12">
                <span className="font-medium w-24 text-center">单价</span>
                <span className="font-medium w-24 text-center">数量</span>
                <span className="font-medium w-24 text-center">小计</span>
                <span className="font-medium w-12 text-center">操作</span>
              </div>
            </div>

            {/* 商品列表 */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => toggleSelect(item.id)}
                      className="mr-4"
                    />
                    <div className="w-20 h-20 bg-gray-200 flex items-center justify-center mr-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="flex space-x-12">
                    <span className="w-24 text-center">¥{item.price}</span>
                    <div className="w-24 flex items-center justify-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-12 h-8 border-t border-b border-gray-300 text-center focus:outline-none"
                      />
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <span className="w-24 text-center font-medium">¥{item.price * item.quantity}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-12 text-center text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 继续购物按钮 */}
            <div className="mt-8">
              <Link href="/products" className="btn bg-gray-200 hover:bg-gray-300 text-gray-800">
                ← 继续购物
              </Link>
            </div>
          </div>

          {/* 购物车汇总 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">购物车汇总</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">商品总数</span>
                <span>{cartItems.filter(item => item.selected).reduce((total, item) => total + item.quantity, 0)} 件</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">商品总价</span>
                <span className="font-medium">¥{calculateTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">运费</span>
                <span className="text-green-500">免运费</span>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">总计</span>
                  <span className="text-xl font-bold text-red-500">¥{calculateTotal()}</span>
                </div>
              </div>
            </div>

            {/* 结算按钮 */}
            <div className="mt-8">
              <Link href="/checkout" className="btn btn-primary w-full">
                🛍️ 去结算
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage