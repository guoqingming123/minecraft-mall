"use client"
import Link from 'next/link'
import { useState } from 'react'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? '登录' : '注册'}
        </h1>

        {/* 切换登录/注册 */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-tl-md rounded-bl-md ${isLogin ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            登录
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-tr-md rounded-br-md ${!isLogin ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            注册
          </button>
        </div>

        {/* 表单 */}
        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                用户名
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="请输入用户名"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              邮箱
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="请输入邮箱"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              密码
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="请输入密码"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                确认密码
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="请确认密码"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            {isLogin ? '登录' : '注册'}
          </button>
        </form>

        {/* 第三方登录 */}
        <div className="mt-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-1/3 h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">或使用以下方式登录</span>
            <div className="w-1/3 h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <span className="text-2xl mb-2">📧</span>
              <span className="text-sm">邮箱登录</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <span className="text-2xl mb-2">💬</span>
              <span className="text-sm">微信登录</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <span className="text-2xl mb-2">💰</span>
              <span className="text-sm">支付宝登录</span>
            </button>
          </div>
        </div>

        {/* 忘记密码 */}
        {isLogin && (
          <div className="mt-6 text-center">
            <Link href="/forgot-password" className="text-secondary hover:underline">
              忘记密码？
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginPage