import { useRouter } from 'next/router';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';
import ClassCard from '@/components/ClassCard';
import Pagination from '@/components/Pagination';
import FilterBox from '@/components/FilterBox';

export default function Keranjang() {
  const router = useRouter();

  const searchTerm = router.query?.search;

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center capitalize'>
              {searchTerm ? `Pencarian tentang "${searchTerm}"` : 'Cari Kelas'}
            </h1>
            <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3'>
              <ClassCard id='1' showPrice addToCart />
              <ClassCard id='2' showPrice addToCart isLive />
              <FilterBox />
              <ClassCard id='3' showPrice addToCart isLive />
              <ClassCard id='4' showPrice addToCart />
              <ClassCard id='5' showPrice addToCart isLive />
              <ClassCard id='6' showPrice addToCart isLive />
              <ClassCard id='7' showPrice addToCart />
              <ClassCard id='8' showPrice addToCart isLive />
              <ClassCard id='9' showPrice addToCart isLive />
              <ClassCard id='10' showPrice addToCart />
              <ClassCard id='11' showPrice addToCart isLive />
            </div>
            <Pagination />
          </div>
        </section>
      </main>
    </>
  );
}
