import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';

export default function Keranjang() {
  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Keranjang Pembelian</h1>
            <div className='grid grid-cols-3 gap-4 mt-8'>
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
