import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from '@/lib/zustand';

const useChatStore = create(
  devtools(
    persist(
      immer((set) => ({
        chats: [],
        addChat: (name, message) =>
          set((state) => {
            state.chats.push({ name, message });
          }),
      })),
      {
        name: 'academy-chat',
      }
    ),

    'ChatStore'
  )
);

export default useChatStore;
