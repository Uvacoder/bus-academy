import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';
import UnstyledLink from '@/components/UnstyledLink';
import ClassCard from '@/components/ClassCard';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import useCartStore from '@/store/CartStore';

export default function Keranjang() {
  const methods = useForm();
  const { handleSubmit } = methods;
  function onSubmit(data) {
    console.log(data);
    setCouponApplied(data.coupon);
  }

  const carts = useCartStore((state) => state.carts);
  const removeItem = useCartStore((state) => state.removeItem);

  const [couponApplied, setCouponApplied] = useState(null);

  const totalPrice = carts.length * 50 - (couponApplied ? 10 : 0);

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Keranjang Pembelian</h1>
            {carts.length === 0 ? (
              <h3>Keranjang anda kosong</h3>
            ) : (
              <>
                <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3'>
                  {carts.map((kelas) => (
                    <ClassCard
                      cart
                      key={kelas.id}
                      detail={kelas}
                      isLive={kelas.isLive}
                      onRemove={removeItem}
                      showPrice
                    />
                  ))}
                </div>
                <h3 className='mt-8 font-semibold'>Rincian Pembelian</h3>
                <div className='mt-2 space-y-2'>
                  {carts.map((item) => (
                    <div className='flex justify-between' key={item.id}>
                      <span className='inline-block min-w-[80%]'>
                        Kelas – Manage your way with great public speaking
                      </span>{' '}
                      <span className='ml-auto'>Rp 50.000</span>
                    </div>
                  ))}
                  {couponApplied && (
                    <div className='flex justify-between'>
                      <span className='inline-block min-w-[80%]'>
                        Kupon {couponApplied}
                      </span>{' '}
                      <span className='ml-auto'>- Rp 10.000</span>
                    </div>
                  )}

                  <hr className='mt-2' />
                  <div className='flex justify-end'>
                    <span className='inline-block min-w-[80%] text-right'>
                      Total
                    </span>{' '}
                    <span className='ml-auto'>Rp {totalPrice}.000</span>
                  </div>
                </div>
                <FormProvider {...methods}>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex items-end gap-2 mt-4 ml-auto'
                  >
                    <Input label='Kode Kupon' id='coupon' type='text' />
                    <button className='inline-flex items-center h-10 gap-1 px-3 py-2 mb-1 ml-auto text-sm font-medium text-white rounded-md hover:bg-sky-400 bg-sky-500'>
                      <p>Pasang Kupon</p>
                    </button>
                  </form>
                </FormProvider>
                <UnstyledLink
                  href='/checkout'
                  className='inline-flex items-center h-10 gap-1 px-3 py-2 mt-8 mb-1 ml-auto text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600'
                >
                  <HiOutlineCheckCircle />
                  <p>Checkout Sekarang</p>
                </UnstyledLink>
              </>
            )}
            <h2 className='mt-12'>Kelas yang ramai dibeli</h2>
            <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-3'>
              <ClassCard id='12' addToCart showPrice />
              <ClassCard id='13' addToCart showPrice />
              <ClassCard id='14' addToCart showPrice />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
