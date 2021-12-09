import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import produce from 'immer';

const useCartStore = create(
  devtools(
    persist(
      (set) => ({
        carts: [],
        addItem: (cart) => set((state) => ({ carts: [...state.carts, cart] })),
        removeItem: (id) =>
          set((state) => ({
            carts: state.carts.filter((c) => c.id !== id),
          })),
        clearCart: () => set((state) => ({ carts: [] })),
      }),
      {
        name: 'academy-cart',
      }
    ),

    'CartStore'
  )
);

export default useCartStore;
