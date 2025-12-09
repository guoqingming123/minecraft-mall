import Link from 'next/link'

// 模拟订单数据
const orders = [
  {
    id: 10001,
    date: '2024-01-15',
    status: '已完成',
    total: 257,
    items: [
      { name: '乐高我的世界 史蒂夫和苦力怕', quantity: 2, price: 99 },
      { name: '乐高我的世界 钻石剑', quantity: 1, price: 59 }
    ]
  },
  {
    id: 10002,
    date: '2024-01-10',
    status: '已发货',
    total: 199,
    items: [
      { name: '乐高我的世界 凋灵', quantity: 1, price: 199 }
    ]
  },
  {
    id: 10003,
    date: '2024-01-05',
    status: '待付款',
    total: 299,
    items: [
      { name: '乐高我的世界 末地传送门', quantity: 1, price: 299 }
    ]
  }
]

const OrdersPage = () => {
  // 获取订单状态对应的样式
  const getStatusClass = (status: string) => {
    switch (status) {
      case '已完成':
        return 'bg-green-100 text-green-800'
      case '已发货':
        return 'bg-blue-100 text-blue-800'
      case '待付款':
        return 'bg-yellow-100 text-yellow-800'
      case '待发货':
        return 'bg-purple-100 text-purple-800'
      case '已取消':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">历史订单</h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <span className="text-gray-500 text-xl mb-4 block">暂无订单</span>
          <Link href="/products" className="btn btn-primary">
            去购物
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* 订单头部 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-50 border-b border-gray-200">
                <div className="mb-2 md:mb-0">
                  <span className="font-medium">订单编号：{order.id}</span>
                  <span className="ml-4 text-gray-500">下单时间：{order.date}</span>
                </div>
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              {/* 订单商品 */}
              <div className="p-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mr-3">
                        <span className="text-sm">商品</span>
                      </div>
                      <div>
                        <span className="block">{item.name}</span>
                        <span className="text-sm text-gray-500">x{item.quantity}</span>
                      </div>
                    </div>
                    <span>¥{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* 订单底部 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-t border-gray-200">
                <div className="mb-3 md:mb-0">
                  <span className="text-gray-600">共 {order.items.length} 件商品</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <span className="text-gray-600">订单总价：</span>
                    <span className="font-bold text-xl text-red-500">¥{order.total}</span>
                  </div>
                  <div className="flex space-x-2">
                    {order.status === '待付款' && (
                      <>
                        <button className="btn btn-primary text-sm">立即付款</button>
                        <button className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm">取消订单</button>
                      </>
                    )}
                    {order.status === '已发货' && (
                      <button className="btn btn-primary text-sm">确认收货</button>
                    )}
                    {order.status === '已完成' && (
                      <button className="btn btn-primary text-sm">查看详情</button>
                    )}
                    <button className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm">查看物流</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrdersPage