import { prisma } from '@/lib/prisma';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const dynamic = 'force-dynamic';

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      items: {
        include: { product: true }
      }
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Orders</h1>
      </div>

      <Card className="border-0 shadow-sm rounded-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Items</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                      No orders yet.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className="bg-white border-b hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium font-mono text-xs">{order.id}</td>
                      <td className="px-6 py-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">{order.customerName}</div>
                        <div className="text-slate-500 text-xs">{order.customerEmail}</div>
                      </td>
                      <td className="px-6 py-4 font-bold">€{order.totalAmount.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <Badge variant={order.status === 'PENDING' ? 'outline' : 'default'} className={order.status === 'PENDING' ? 'text-amber-600 border-amber-600 bg-amber-50' : 'bg-green-600'}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-xs">
                        <ul className="list-disc pl-4">
                          {order.items.map(item => (
                            <li key={item.id}>{item.quantity}x {item.product.name}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
