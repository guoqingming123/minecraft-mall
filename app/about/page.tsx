"use client"
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">关于我们</h1>

      {/* 网站介绍 */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">我的世界乐高商城</h2>
          <p className="text-gray-600 mb-4">
            我的世界乐高商城是一家专注于乐高积木"我的世界"主题元素玩具的电商平台，致力于为广大玩家提供优质的商品和服务。
          </p>
          <p className="text-gray-600">
            我们拥有丰富的商品种类，包括人仔系列、套装系列、建筑系列、配件系列等，涵盖了"我的世界"游戏中的经典角色和场景。
            我们的目标是打造一个专业、可靠、用户友好的购物平台，让玩家能够轻松找到自己喜爱的乐高我的世界产品。
          </p>
        </div>
      </section>

      {/* 我们的优势 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">我们的优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-lg font-bold mb-2">优质商品</h3>
            <p className="text-gray-600">所有商品均为正品保障，质量可靠</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-lg font-bold mb-2">丰富种类</h3>
            <p className="text-gray-600">涵盖"我的世界"主题的各类乐高产品</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-lg font-bold mb-2">快速配送</h3>
            <p className="text-gray-600">全国范围内快速配送，支持多种物流方式</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="text-lg font-bold mb-2">优质服务</h3>
            <p className="text-gray-600">专业的客服团队，为您提供贴心服务</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-bold mb-2">优惠价格</h3>
            <p className="text-gray-600">合理的价格，定期推出优惠活动</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-bold mb-2">安全支付</h3>
            <p className="text-gray-600">支持多种安全支付方式，保障您的交易安全</p>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">我们的团队</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-secondary shadow-lg">
              <Image
                src="/images/元宝.png"
                alt="元宝"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-bold mb-1">元宝</h3>
            <p className="text-gray-500 text-sm">创始人兼CEO</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-secondary shadow-lg">
              <Image
                src="/images/元宝2.jpg"
                alt="元宝2"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-bold mb-1">元宝</h3>
            <p className="text-gray-500 text-sm">运营总监</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-secondary shadow-lg">
              <Image
                src="/images/元宝3.png"
                alt="元宝3"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-bold mb-1">元宝</h3>
            <p className="text-gray-500 text-sm">技术总监</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-secondary shadow-lg">
              <Image
                src="/images/元宝4.jpg"
                alt="元宝4"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-bold mb-1">元宝</h3>
            <p className="text-gray-500 text-sm">设计总监</p>
          </div>
        </div>
      </section>

      {/* 企业理念 */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">企业理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">使命</h3>
              <p className="text-gray-600">为乐高我的世界玩家提供优质的商品和服务，让他们能够享受更多的游戏乐趣</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">愿景</h3>
              <p className="text-gray-600">成为全球领先的乐高我的世界主题玩具电商平台</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">价值观</h3>
              <p className="text-gray-600">诚信、创新、服务、共赢</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">服务承诺</h3>
              <p className="text-gray-600">正品保障、快速配送、优质服务、售后无忧</p>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">发展历程</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">2022</div>
              <div>
                <h3 className="font-bold">公司成立</h3>
                <p className="text-gray-600">我的世界乐高商城正式成立，开始在线销售乐高我的世界产品</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">2023</div>
              <div>
                <h3 className="font-bold">业务扩张</h3>
                <p className="text-gray-600">扩大商品种类，增加了更多乐高我的世界主题产品</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">2024</div>
              <div>
                <h3 className="font-bold">品牌升级</h3>
                <p className="text-gray-600">网站全新改版，提升用户体验，优化购物流程</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage