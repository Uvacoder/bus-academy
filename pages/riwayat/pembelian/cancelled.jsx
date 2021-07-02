import { useRouter } from 'next/router';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';

export default function Invoice() {
  const router = useRouter();

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Invoice Pembelian Kelas</h1>
            <p className='mt-4 text-center'>
              Status:{' '}
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-red-100 text-red-800'>
                Cancelled
              </span>
            </p>
            <article className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12 mt-16'>
              <aside>
                <div className='flex flex-col gap-4'>
                  <ClassCard />
                  <ClassCard />
                </div>
              </aside>
              <main>
                <h3 className='font-semibold'>Rincian Pembelian</h3>
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
                    <span className='ml-auto'>Rp 90.000</span>
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
