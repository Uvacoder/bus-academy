import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import caraPembayaranImg from '@/public/images/cara-pembayaran.jpg';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';
import useCartStore from '@/store/CartStore';
import useClassStore from '@/store/useClassStore';

export default function Checkout() {
  const router = useRouter();
  const [token, setToken] = useState('dca5a278-534c-4d81-9e7f-ae01b416434e');

  const onTokenChange = (e) => {
    setToken(e.target.value);
  };

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    //change this according to your client-key
    const myMidtransClientKey = 'SB-Mid-client-ZU2vc4eDnU9T4qAV';

    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute('data-client-key', myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const carts = useCartStore((state) => state.carts);
  const removeItem = useCartStore((state) => state.removeItem);

  //#region  //*=========== Get Classes ===========
  const classes = useClassStore((state) => state.classes);
  const cartClass = carts.reduce(
    (a, cart) => [...a, classes.find((cls) => cls.id === cart.id)],
    []
  );
  //#endregion  //*======== Get Classes ===========

  const totalPrice = cartClass.reduce((a, b) => a + parseInt(b.price), 0) - 10;

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Pembelian Kelas</h1>
            <article className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12 mt-16'>
              <aside>
                <div className='flex flex-col gap-4'>
                  {cartClass.slice(0, 2).map((cl) => (
                    <ClassCard data={cl} isLive={cl.isLive} id={cl.id} />
                  ))}
                </div>
              </aside>
              <main>
                <h3 className='font-semibold'>Cara Pembayaran</h3>
                <figure className='mt-4'>
                  <Image
                    src={caraPembayaranImg}
                    alt='Cara Pembayaran'
                    placeholder='blur'
                  />
                </figure>
                <h3 className='mt-8 font-semibold'>Rincian Pembelian</h3>
                <div className='mt-2 space-y-2'>
                  {cartClass.map((item) => (
                    <div className='flex justify-between' key={item.id}>
                      <span className='inline-block min-w-[80%]'>
                        {item.title ?? 'Nama Kelas'}
                      </span>{' '}
                      <span className='ml-auto'>Rp {item.price}</span>
                    </div>
                  ))}
                  <div className='flex justify-between'>
                    <span className='inline-block min-w-[80%]'>Kupon</span>{' '}
                    <span className='ml-auto'>- Rp 10.000</span>
                  </div>
                  <hr className='mt-2' />
                  <div className='flex justify-end'>
                    <span className='inline-block min-w-[80%] text-right'>
                      Total
                    </span>{' '}
                    <span className='ml-auto'>Rp {totalPrice}.000</span>
                  </div>
                  <div className='flex justify-end gap-2 mt-4'>
                    <button
                      onClick={() => router.back()}
                      className='inline-flex items-center h-10 gap-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-50'
                    >
                      Batal
                    </button>
                    <button
                      onClick={() => window.snap.pay(token)}
                      className='inline-flex items-center h-10 gap-1 px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-sky-400 bg-sky-500'
                    >
                      Bayar Sekarang
                    </button>
                  </div>
                </div>
                <div className='mt-8'>
                  <label htmlFor='token'>
                    TOKEN (HANYA DITAMPILKAN PADA TAHAP DEVELOPMENT)
                  </label>
                  <input
                    type='text'
                    name='token'
                    value={token}
                    onChange={onTokenChange}
                  />
                </div>
              </main>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
