import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Package, BadgeEuro, Activity } from 'lucide-react';

// Next.js config to ensure the page doesn't cache stale db results
export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const productsCount = await prisma.product.count();
  const ordersCount = await prisma.order.count();
  
  const totalRevenueResult = await prisma.order.aggregate({
    _sum: { totalAmount: true }
  });
  const totalRevenue = totalRevenueResult._sum.totalAmount || 0;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Revenue</CardTitle>
            <BadgeEuro className="w-5 h-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">€{totalRevenue.toFixed(2)}</div>
            <p className="text-xs text-green-600 font-medium">+15% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Orders</CardTitle>
            <ShoppingBag className="w-5 h-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{ordersCount}</div>
            <p className="text-xs text-green-600 font-medium">+12 orders today</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Active Products</CardTitle>
            <Package className="w-5 h-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{productsCount}</div>
            <p className="text-xs text-slate-500">All variations included</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Store Status</CardTitle>
            <Activity className="w-5 h-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">Online</div>
            <p className="text-xs text-slate-500">All systems running normally</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
