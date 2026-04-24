'use client';

import { useCartStore } from '@/lib/store/cartStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';
import { useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal, clearCart } = useCartStore();
  const subtotal = getSubtotal();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setIsCheckingOut(true);
    
    try {
      // Simulate checking out and passing an order to the backend
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: 'Test Customer',
          customerEmail: 'test@example.com',
          customerAddress: '123 Fake Street, CA 90210',
          items: items.map(i => ({
            productId: i.productId,
            quantity: i.quantity,
            price: i.price,
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Checkout failed');
      }

      toast.success('Order placed successfully!');
      clearCart();
    } catch (error) {
      console.error(error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Your Cart is Empty</h1>
        <p className="text-slate-500 mb-8 max-w-md">Looks like you haven't added any products to your cart yet.</p>
        <Link href="/shop">
          <Button className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4 flex items-center flex-col sm:flex-row gap-4">
                  <div className="relative w-full sm:w-24 h-24 bg-slate-100 rounded-md shrink-0 flex items-center justify-center">
                    <Image src={item.image} alt={item.name} layout="fill" objectFit="contain" className="p-2 mix-blend-multiply" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.dosage} Vial</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="text-right w-full sm:w-24 font-bold text-lg">
                    €{(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white" disabled={isCheckingOut} onClick={handleCheckout}>
                  {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
