import Link from 'next/link';
import { Package, ShoppingBag, LayoutDashboard, Settings } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white min-h-screen hidden md:block border-r border-slate-800">
        <div className="p-6">
          <h2 className="text-2xl font-bold tracking-tighter text-primary">Admin<span className="text-white">Panel</span></h2>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            <li>
              <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                <LayoutDashboard className="w-5 h-5 text-slate-400" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/products" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                <Package className="w-5 h-5 text-slate-400" />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/orders" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                <ShoppingBag className="w-5 h-5 text-slate-400" />
                <span>Orders</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b border-slate-200 h-16 flex items-center px-6 justify-between">
          <div className="font-medium text-slate-600">Admin Area</div>
          <Link href="/">
            <span className="text-sm text-primary hover:underline">Back to Main Website</span>
          </Link>
        </header>
        <div className="flex-1 overflow-auto p-6 lg:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
