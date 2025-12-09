"use client"
import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log('表单提交', formData)
    alert('感谢您的留言，我们会尽快回复您！')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">联系我们</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 联系方式 */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">联系方式</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-xl mr-4">📧</span>
                <div>
                  <h3 className="font-medium">邮箱</h3>
                  <p className="text-gray-600">contact@minecraftlego.com</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-4">📞</span>
                <div>
                  <h3 className="font-medium">电话</h3>
                  <p className="text-gray-600">400-123-4567</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-4">📍</span>
                <div>
                  <h3 className="font-medium">地址</h3>
                  <p className="text-gray-600">广东省深圳市元宝幸福之家9527号</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-4">⌚</span>
                <div>
                  <h3 className="font-medium">营业时间</h3>
                  <p className="text-gray-600">周一至周日 9:00-21:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">关注我们</h2>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                📘
              </a>
              <a href="#" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                🐦
              </a>
              <a href="#" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                📷
              </a>
              <a href="#" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                💬
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">常见问题</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary hover:underline">如何注册账号？</a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:underline">如何查询订单状态？</a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:underline">如何退换货？</a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:underline">支持哪些支付方式？</a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:underline">物流配送需要多长时间？</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 联系表单 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">在线留言</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  主题
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                >
                  <option value="">请选择主题</option>
                  <option value="product">商品咨询</option>
                  <option value="order">订单问题</option>
                  <option value="shipping">物流问题</option>
                  <option value="returns">退换货</option>
                  <option value="other">其他问题</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  留言内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                提交留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage