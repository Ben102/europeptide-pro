import { prisma } from '@/lib/prisma';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Products</h1>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Plus className="w-4 h-4 mr-2" /> Add Product
        </Button>
      </div>

      <Card className="border-0 shadow-sm rounded-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                <tr>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Dosage</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Purity</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                      No products found.
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product.id} className="bg-white border-b hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                        <div className="relative w-10 h-10 bg-slate-100 rounded">
                           <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" className="mix-blend-multiply" />
                        </div>
                        {product.name}
                      </td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4">{product.dosage}</td>
                      <td className="px-6 py-4">€{product.price.toFixed(2)}</td>
                      <td className="px-6 py-4">{product.purity}</td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">Edit</Button>
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
