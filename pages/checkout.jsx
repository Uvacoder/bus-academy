import Image from 'next/image';
import { useRouter } from 'next/router';

import caraPembayaranImg from '@/public/images/cara-pembayaran.jpg';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';

export default function Checkout() {
  const router = useRouter();

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Pembelian Kelas</h1>
            <article className='grid grid-cols-[1fr,2fr] gap-12 mt-16'>
              <aside>
                <div className='flex flex-col gap-4'>
                  <ClassCard />
                  <ClassCard />
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
                    <span className='inline-block min-w-[80%]'>
                      Kupon ACAD12
                    </span>{' '}
                    <span className='ml-auto'>- Rp 10.000</span>
                  </div>
                  <hr className='mt-2' />
                  <div className='flex justify-end'>
                    <span className='inline-block min-w-[80%] text-right'>
                      Total
                    </span>{' '}
                    <span className='ml-auto'>Rp 110.000</span>
                  </div>
                  <div className='flex justify-end gap-2 mt-4'>
                    <button
                      onClick={() => router.back()}
                      className='inline-flex items-center h-10 gap-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-50'
                    >
                      Batal
                    </button>
                    <button className='inline-flex items-center h-10 gap-1 px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-sky-400 bg-sky-500'>
                      Bayar Sekarang
                    </button>
                  </div>
                </div>
              </main>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
