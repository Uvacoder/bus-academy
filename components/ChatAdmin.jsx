import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  HiOutlinePaperAirplane,
  HiOutlinePhotograph,
  HiX,
} from 'react-icons/hi';
import useChatStore from '@/store/useChatStore';

export default function ChatAdmin() {
  const router = useRouter();
  const { handleSubmit, register, reset } = useForm();

  const chats = useChatStore((state) => state.chats);
  const addChat = useChatStore((state) => state.addChat);

  const onSubmit = ({ message }) => {
    addChat('Admin', message);
    reset();
  };

  return (
    <>
      <button
        onClick={() => {
          router.push('/chat');
        }}
        className='fixed flex items-center justify-center w-16 h-16 text-lg text-white rounded-full bg-sky-400 bottom-4 right-4 md:hidden'
      >
        <HiOutlinePaperAirplane />
      </button>
      <Disclosure
        as='div'
        className='fixed bottom-0 z-40 hidden w-full max-w-sm bg-white right-16 md:block'
      >
        <Disclosure.Panel className='h-[550px] border shadow flex flex-col p-4'>
          <header className='flex items-start justify-between'>
            <div>
              <h3>Live chat</h3>
              <select>
                <option>Bambang</option>
                <option>Jafar</option>
              </select>
            </div>
            <Disclosure.Button>
              <HiX />
            </Disclosure.Button>
          </header>
          <main className='flex flex-col flex-grow pr-3 overflow-y-auto'>
            <div className='py-2'>
              <p className='font-bold'>
                Bambang{' '}
                <span className='ml-2 font-normal text-gray-500'>10.05</span>
              </p>
              <span className='inline-block p-2 mt-1 rounded-tl-xl rounded-br-xl bg-sky-100'>
                Apakah??
              </span>
            </div>
            <ChatAnda message='Hai min, ini gimana ya?' />
            <div className='py-2 text-right'>
              <p className='font-bold'>
                Anda{' '}
                <span className='ml-2 font-normal text-gray-500'>10.05</span>
              </p>
              <img
                src='/images/sample.jpg'
                alt='Sample Image'
                className='object-cover ml-auto w-36 rounded-xl'
              />
            </div>
            {chats.map((c) =>
              c.name === 'Admin' ? (
                <ChatAnda key={c.message} message={c.message} />
              ) : (
                <ChatBambang key={c.message} message={c.message} />
              )
            )}
          </main>
          <footer>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex gap-2 space-between'
            >
              <button onClick={(e) => e.preventDefault()}>
                <HiOutlinePhotograph className='text-xl text-sky-600' />
              </button>
              <label htmlFor='message' className='sr-only'>
                Message
              </label>
              <input
                {...register('message')}
                type='text'
                name='message'
                id='message'
                className='w-full border-gray-300 rounded-lg'
                placeholder='Tulis pesan...'
                required
              />
              <button>
                <HiOutlinePaperAirplane className='text-xl rotate-90 text-sky-600' />
              </button>
            </form>
          </footer>
        </Disclosure.Panel>
        <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 font-bold text-white bg-sky-500'>
          <p>Live Chat Admin</p>
          <span className='flex items-center justify-center w-8 h-8 text-black bg-yellow-200 rounded-full'>
            1
          </span>
        </Disclosure.Button>
      </Disclosure>
    </>
  );
}

function ChatAnda({ message }) {
  return (
    <div className='py-2 text-right'>
      <p className='font-bold'>
        Anda <span className='ml-2 font-normal text-gray-500'>10.05</span>
      </p>
      <span className='inline-block p-2 mt-1 rounded-tl-xl rounded-br-xl bg-sky-100'>
        {message}
      </span>
    </div>
  );
}

function ChatBambang({ message }) {
  return (
    <div className='py-2'>
      <p className='font-bold'>
        Bambang <span className='ml-2 font-normal text-gray-500'>10.05</span>
      </p>
      <span className='inline-block p-2 mt-1 rounded-tl-xl rounded-br-xl bg-sky-100'>
        {message}
      </span>
    </div>
  );
}
