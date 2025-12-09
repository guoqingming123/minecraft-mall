"use client"
import { useState } from 'react'
import Link from 'next/link'

// 模拟配送方式
const shippingMethods = [
  { id: 1, name: '标准配送', price: 0, estimatedTime: '1-3天' },
  { id: 2, name: '加急配送', price: 15, estimatedTime: '24小时内' },
  { id: 3, name: '同城闪送', price: 25, estimatedTime: '2小时内' }
]

// 模拟支付方式
const paymentMethods = [
  { id: 1, name: '支付宝', icon: '💰' },
  { id: 2, name: '微信支付', icon: '💬' },
  { id: 3, name: '银行卡支付', icon: '💳' }
]

// 模拟购物车商品
const cartItems = [
  {
    id: 1,
    name: '乐高我的世界 史蒂夫和苦力怕',
    price: 99,
    quantity: 2
  },
  {
    id: 2,
    name: '乐高我的世界 钻石剑',
    price: 59,
    quantity: 1
  }
]

const CheckoutPage = () => {
  const [selectedShipping, setSelectedShipping] = useState(1)
  const [selectedPayment, setSelectedPayment] = useState(1)
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    province: '',
    city: '',
    district: '',
    detail: ''
  })

  // 计算商品总价
  const productTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // 获取选中的配送方式
  const getSelectedShipping = () => {
    return shippingMethods.find(method => method.id === selectedShipping) || shippingMethods[0]
  }

  // 计算订单总价
  const orderTotal = productTotal + getSelectedShipping().price

  // 处理地址输入变化
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAddress(prev => ({ ...prev, [name]: value }))
  }

  // 处理提交订单
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加订单提交逻辑
    console.log('提交订单', { address, selectedShipping, selectedPayment })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">下单结算</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧：收货地址和配送方式 */}
        <div className="lg:col-span-2 space-y-8">
          {/* 收货地址 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">收货地址</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  收货人姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={address.name}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="请输入收货人姓名"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  手机号码
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={address.phone}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="请输入手机号码"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                  省份
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={address.province}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="请输入省份"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  城市
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="请输入城市"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                  区县
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={address.district}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="请输入区县"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="detail" className="block text-sm font-medium text-gray-700 mb-1">
                详细地址
              </label>
              <input
                type="text"
                id="detail"
                name="detail"
                value={address.detail}
                onChange={handleAddressChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="请输入详细地址"
                required
              />
            </div>
          </div>

          {/* 配送方式 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">配送方式</h2>
            
            <div className="space-y-3">
              {shippingMethods.map(method => (
                <div
                  key={method.id}
                  className={`flex items-center justify-between p-4 border rounded-md cursor-pointer ${selectedShipping === method.id ? 'border-secondary bg-green-50' : 'border-gray-300 hover:border-secondary'}`}
                  onClick={() => setSelectedShipping(method.id)}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id={`shipping-${method.id}`}
                      name="shipping"
                      value={method.id}
                      checked={selectedShipping === method.id}
                      onChange={() => setSelectedShipping(method.id)}
                      className="mr-3"
                    />
                    <label htmlFor={`shipping-${method.id}`} className="font-medium">{method.name}</label>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">{method.price > 0 ? `¥${method.price}` : '免运费'}</div>
                    <div className="text-xs text-gray-500">预计 {method.estimatedTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 支付方式 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">支付方式</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map(method => (
                <div
                  key={method.id}
                  className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer ${selectedPayment === method.id ? 'border-secondary bg-green-50' : 'border-gray-300 hover:border-secondary'}`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <input
                    type="radio"
                    id={`payment-${method.id}`}
                    name="payment"
                    value={method.id}
                    checked={selectedPayment === method.id}
                    onChange={() => setSelectedPayment(method.id)}
                    className="mb-2"
                  />
                  <span className="text-2xl mb-2">{method.icon}</span>
                  <label htmlFor={`payment-${method.id}`}>{method.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：订单摘要 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">订单摘要</h2>
          
          {/* 商品列表 */}
          <div className="mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <span className="mr-2">{item.name}</span>
                  <span className="text-gray-500 text-sm">x{item.quantity}</span>
                </div>
                <span>¥{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {/* 费用明细 */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">商品总价</span>
              <span>¥{productTotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">配送费用</span>
              <span>{getSelectedShipping().price > 0 ? `¥${getSelectedShipping().price}` : '免运费'}</span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">订单总价</span>
                <span className="text-xl font-bold text-red-500">¥{orderTotal}</span>
              </div>
            </div>
          </div>

          {/* 提交订单按钮 */}
          <button
            type="submit"
            className="w-full btn btn-primary text-lg py-3"
          >
            提交订单
          </button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutPage