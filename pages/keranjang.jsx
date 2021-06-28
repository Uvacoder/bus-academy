import { useState } from 'react';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';
import ClassCard from '@/components/ClassCard';

export default function Keranjang() {
  const router = useRouter();

  const methods = useForm();
  const { handleSubmit } = methods;
  function onSubmit(data) {
    console.log(data);
    router.push('/checkout');
  }

  const [cart, setCart] = useState([
    { id: 1, isLive: false },
    { id: 2, isLive: true },
    { id: 3, isLive: false },
  ]);

  function removeCart(id) {
    setCart((prev) => prev.filter((kelas) => kelas.id !== id));
  }

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Keranjang Pembelian</h1>
            <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3'>
              {cart.map((kelas) => (
                <ClassCard
                  cart
                  key={kelas.id}
                  detail={kelas}
                  isLive={kelas.isLive}
                  onRemove={removeCart}
                  showPrice
                />
              ))}
            </div>
            <h3 className='mt-8 font-semibold'>Rincian Pembelian</h3>
            <div className='mt-2 space-y-2'>
              <div className='flex justify-between'>
                <span className='inline-block min-w-[80%]'>
                  Kelas – Manage your way with great public speaking
                </span>{' '}
                <span className='ml-auto'>Rp 50.000</span>
              </div>
              <div className='flex justify-between'>
                <span className='inline-block min-w-[80%]'>
                  Kelas – Menulis essay untuk beasiswa
                </span>{' '}
                <span className='ml-auto'>Rp 50.000</span>
              </div>
              <div className='flex justify-between'>
                <span className='inline-block min-w-[80%]'>Kupon ACAD12</span>{' '}
                <span className='ml-auto'>- Rp 10.000</span>
              </div>
              <hr className='mt-2' />
              <div className='flex justify-end'>
                <span className='inline-block min-w-[80%] text-right'>
                  Total
                </span>{' '}
                <span className='ml-auto'>Rp 110.000</span>
              </div>
            </div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex items-end gap-2 mt-4 ml-auto'
              >
                <Input label='Kode Kupon' id='coupon' type='text' />
                <button className='inline-flex items-center h-10 gap-1 px-3 py-2 mb-1 ml-auto text-sm font-medium text-white rounded-md hover:bg-sky-400 bg-sky-500'>
                  <p>Checkout Sekarang</p>
                </button>
              </form>
            </FormProvider>
            <h2 className='mt-12'>Kelas yang ramai dibeli</h2>
            <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-3'>
              <ClassCard addToCart showPrice />
              <ClassCard addToCart showPrice />
              <ClassCard addToCart showPrice />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
