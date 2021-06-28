import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  HiOutlinePaperAirplane,
  HiOutlinePhotograph,
  HiX,
} from 'react-icons/hi';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';

export default function ChatBox() {
  const router = useRouter();
  const { handleSubmit, register, reset } = useForm();

  const [messages, setMessages] = useState([]);

  const onSubmit = ({ message }) => {
    setMessages((prev) => [...prev, message]);
    reset();
  };

  return (
    <>
      <Nav />
      <Seo title='Chat' />
      <div className='flex flex-col w-full min-h-screen'>
        <div className='flex flex-col flex-grow h-full p-4 border shadow'>
          <header className='flex items-start justify-between'>
            <div>
              <h3>Live chat admin</h3>
              <p className='font-medium text-gray-500'>
                Aktif jam 8:00 - 19:00 WIB
              </p>
            </div>
          </header>
          <main className='flex flex-col flex-grow px-3 overflow-y-auto'>
            <div className='py-2'>
              <p className='font-bold'>
                Admin Maya{' '}
                <span className='ml-2 font-normal text-gray-500'>10.05</span>
              </p>
              <span className='inline-block p-2 mt-1 rounded-tl-xl rounded-br-xl bg-sky-100'>
                Halo, ada yang bisa kami bantu?
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
            {messages.map((msg) => (
              <ChatAnda key={msg} message={msg} />
            ))}
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
        </div>
        <div className='flex items-center justify-between w-full px-4 py-2 font-bold text-white bg-sky-500'>
          <p>Live Chat Admin</p>
          <span className='flex items-center justify-center w-8 h-8 text-black bg-yellow-200 rounded-full'>
            1
          </span>
        </div>
      </div>
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
