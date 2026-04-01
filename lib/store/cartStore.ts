import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string; // Cart item ID (can be just productId for our simplified case)
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  dosage: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item: CartItem) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.productId === item.productId);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            };
          }
          return { items: [...state.items, item] };
        });
      },
      removeItem: (id: string) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
      },
      updateQuantity: (id: string, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
