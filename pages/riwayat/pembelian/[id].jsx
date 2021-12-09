import { useRouter } from 'next/router';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';
import useClassStore from '@/store/useClassStore';
import { getFromLocalStorage } from '@/lib/helper';

export default function Invoice() {
  const router = useRouter();

  const { id } = router.query;

  const _invoices = getFromLocalStorage('academy-invoice');
  const invoices = JSON.parse(_invoices);

  const invoice = invoices.find((iv) => iv.id == id);

  //#region  //*=========== Get Class By Id ===========
  const classes = useClassStore((state) => state.classes);
  const items = invoice?.items.map((i) => classes.find((c) => c.id == i));

  const totalPrice = items?.reduce((a, b) => a + parseInt(b.price), 0) - 10;
  //#endregion  //*======== Get Class By Id ===========

  const batalkan = () => {
    invoice.status = 'cancelled';
    localStorage.setItem('academy-invoice', JSON.stringify(invoices));
    router.push('/riwayat');
  };

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
              {invoice?.status === 'success' ? (
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-green-100 text-green-800'>
                  Success
                </span>
              ) : invoice?.status === 'cancelled' ? (
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-red-100 text-red-800'>
                  Cancelled
                </span>
              ) : (
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-yellow-100 text-yellow-800'>
                  Processing
                </span>
              )}
            </p>
            <article className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12 mt-16'>
              <aside>
                <div className='flex flex-col gap-4'>
                  {items.slice(0, 2).map((cl) => (
                    <ClassCard data={cl} isLive={cl.isLive} id={cl.id} />
                  ))}
                </div>
              </aside>
              <main>
                <h3 className='font-semibold'>Rincian Pembelian</h3>
                <div className='mt-2 space-y-2'>
                  {items?.map((item) => (
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
                </div>
                {invoice?.status == 'processing' && (
                  <div className='flex justify-end gap-2 mt-8'>
                    <button
                      onClick={batalkan}
                      className='inline-flex items-center h-10 gap-1 px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-400'
                    >
                      Batalkan Pembelian
                    </button>
                  </div>
                )}
              </main>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
