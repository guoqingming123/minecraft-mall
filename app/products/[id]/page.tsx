import Link from 'next/link'
import ProductDetailClient from './ProductDetailClient'

// 模拟商品数据
const allProducts = [
  {
    id: 1,
    name: '乐高我的世界 史蒂夫和苦力怕',
    price: 99,
    originalPrice: 129,
    rating: 4.8,
    reviewCount: 123,
    images: [
      '/images/史蒂夫和苦力怕.png',
      '/images/史蒂夫和苦力怕.png',
      '/images/史蒂夫和苦力怕.png'
    ],
    description: '这款乐高我的世界套装包含史蒂夫和苦力怕两个经典角色，适合6岁以上儿童玩耍。套装包含多种配件，可以搭建出丰富的场景。',
    size: ['标准尺寸'],
    category: 'figures',
    stock: 100,
    specifications: [
      { name: '品牌', value: '乐高' },
      { name: '系列', value: '我的世界' },
      { name: '适用年龄', value: '6岁以上' },
      { name: '颗粒数量', value: '120块' },
      { name: '包装尺寸', value: '25 x 18 x 5 cm' },
      { name: '重量', value: '0.3 kg' }
    ]
  },
  {
    id: 2,
    name: '乐高我的世界 末地传送门',
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 234,
    images: [
      '/images/末地传送门.png',
      '/images/末地传送门.png',
      '/images/末地传送门.png'
    ],
    description: '这款乐高我的世界末地传送门套装，让你体验前往末地的冒险之旅。包含多种独特配件和场景元素。',
    size: ['标准尺寸'],
    category: 'sets',
    stock: 80,
    specifications: [
      { name: '品牌', value: '乐高' },
      { name: '系列', value: '我的世界' },
      { name: '适用年龄', value: '8岁以上' },
      { name: '颗粒数量', value: '450块' },
      { name: '包装尺寸', value: '32 x 24 x 7 cm' },
      { name: '重量', value: '1.2 kg' }
    ]
  },
  {
    id: 3,
    name: '乐高我的世界 村庄',
    price: 499,
    originalPrice: 599,
    rating: 4.7,
    reviewCount: 345,
    images: [
      '/images/村庄.png',
      '/images/村庄.png',
      '/images/村庄.png'
    ],
    description: '这款乐高我的世界村庄套装包含完整的村庄场景，多个角色和建筑，让你建造属于自己的我的世界村庄。',
    size: ['标准尺寸'],
    category: 'buildings',
    stock: 50,
    specifications: [
      { name: '品牌', value: '乐高' },
      { name: '系列', value: '我的世界' },
      { name: '适用年龄', value: '10岁以上' },
      { name: '颗粒数量', value: '800块' },
      { name: '包装尺寸', value: '38 x 28 x 8 cm' },
      { name: '重量', value: '2.5 kg' }
    ]
  },
  {
    id: 4,
    name: '乐高我的世界 钻石剑',
    price: 59,
    originalPrice: 79,
    rating: 4.6,
    reviewCount: 156,
    images: [
      '/images/钻石剑.png',
      '/images/钻石剑.png',
      '/images/钻石剑.png'
    ],
    description: '这款乐高我的世界钻石剑玩具，是游戏中最强大的武器之一，适合作为收藏品或角色扮演道具。',
    size: ['标准尺寸'],
    category: 'accessories',
    stock: 200,
    specifications: [
      { name: '品牌', value: '乐高' },
      { name: '系列', value: '我的世界' },
      { name: '适用年龄', value: '6岁以上' },
      { name: '长度', value: '35 cm' },
      { name: '材质', value: '塑料' },
      { name: '重量', value: '0.2 kg' }
    ]
  },
  {
    id: 5,
    name: '乐高我的世界 凋灵',
    price: 199,
    originalPrice: 249,
    rating: 4.8,
    reviewCount: 189,
    images: [
      '/images/下界凋灵.png',
      '/images/下界凋灵.png',
      '/images/下界凋灵.png'
    ],
    description: '这款乐高我的世界凋灵套装，包含游戏中强大的凋灵boss，多个灵魂沙和凋零骷髅头。',
    size: ['标准尺寸'],
    category: 'figures',
    stock: 70,
    specifications: [
      { name: '品牌', value: '乐高' },
      { name: '系列', value: '我的世界' },
      { name: '适用年龄', value: '8岁以上' },
      { name: '颗粒数量', value: '320块' },
      { name: '包装尺寸', value: '28 x 22 x 6 cm' },
      { name: '重量', value: '0.8 kg' }
    ]
  },
  {
    id: 6,
    name: '乐高我的世界 下界堡垒',
    price: 399,
    originalPrice: 499,
    rating: 4.7,
    reviewCount: 256,
    images: [
      '/images/下界堡垒.png',
      '/images/下界堡垒.png',
      '/images/下界堡垒.png'
    ],
    description: '这款乐高我的世界下界堡垒套装，还原了游戏中危险的下界堡垒场景，包含多个独特元素。',
    size: ['标准尺寸'],
    category: 'buildings',
    stock: 60,
    specifications: [
      { name: '品牌', value: '乐高' },
      { name: '系列', value: '我的世界' },
      { name: '适用年龄', value: '10岁以上' },
      { name: '颗粒数量', value: '650块' },
      { name: '包装尺寸', value: '35 x 26 x 7 cm' },
      { name: '重量', value: '1.8 kg' }
    ]
  },
  {
    id: 7,
    name: '乐高我的世界 红石矿井',
    price: 249,
    originalPrice: 299,
    rating: 4.6,
    reviewCount: 198,
    images: [
      '/images/红石矿井.png',
      '/images/红石矿井.png',
      '/images/红石矿井.png'
    ],
    description: '这款乐高我的世界红石矿井套装，让你体验挖矿的乐趣，包含多种矿石和红石元素。',
    size: ['标准尺寸'],
    category: 'sets',
    stock: 90,
    specifications: [
      { name: '品牌', value: '乐高' },
      { name: '系列', value: '我的世界' },
      { name: '适用年龄', value: '8岁以上' },
      { name: '颗粒数量', value: '400块' },
      { name: '包装尺寸', value: '30 x 24 x 6 cm' },
      { name: '重量', value: '1.0 kg' }
    ]
  },
  {
    id: 8,
    name: '乐高我的世界 盾牌',
    price: 49,
    originalPrice: 69,
    rating: 4.5,
    reviewCount: 145,
    images: [
      '/images/盾牌.png',
      '/images/盾牌.png',
      '/images/盾牌.png'
    ],
    description: '这款乐高我的世界盾牌玩具，可以搭配其他角色使用，是角色扮演的理想道具。',
    size: ['标准尺寸'],
    category: 'accessories',
    stock: 150,
    specifications: [
      { name: '品牌', value: '乐高' },
      { name: '系列', value: '我的世界' },
      { name: '适用年龄', value: '6岁以上' },
      { name: '尺寸', value: '25 x 25 cm' },
      { name: '材质', value: '塑料' },
      { name: '重量', value: '0.15 kg' }
    ]
  }
]

// 为静态导出提供所有可能的产品ID
export async function generateStaticParams() {
  return allProducts.map(product => ({
    id: product.id.toString(),
  }))
}

// 获取产品数据的服务器端函数
async function getProduct(id: string) {
  return allProducts.find(p => p.id === parseInt(id)) || allProducts[0]
}

// 模拟用户评价
const reviews = [
  {
    id: 1,
    username: '小明',
    rating: 5,
    date: '2024-01-15',
    content: '商品质量很好，孩子非常喜欢，物流也很快。',
    helpful: 15
  },
  {
    id: 2,
    username: '小红',
    rating: 4,
    date: '2024-01-10',
    content: '东西不错，就是价格有点贵。',
    helpful: 8
  },
  {
    id: 3,
    username: '小刚',
    rating: 5,
    date: '2024-01-05',
    content: '乐高的质量没话说，孩子玩了很久都没坏。',
    helpful: 12
  }
]

// 页面组件
const ProductDetailPage = async (props: { params: { id: string } }) => {
  // 在服务器端获取产品数据
  const product = await getProduct(props.params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 面包屑导航 */}
      <div className="flex items-center text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-secondary">首页</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-secondary">商品列表</Link>
        <span className="mx-2">/</span>
        <span className="text-primary">{product.name}</span>
      </div>

      {/* 客户端组件处理交互逻辑 */}
      <ProductDetailClient product={product} reviews={reviews} />
    </div>
  )
}

export default ProductDetailPage