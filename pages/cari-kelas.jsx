import { matchSorter } from 'match-sorter';
import { useRouter } from 'next/router';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';
import ClassCard from '@/components/ClassCard';
import Pagination from '@/components/Pagination';
import FilterBox from '@/components/FilterBox';
import useClassStore from '@/store/useClassStore';

export default function Keranjang() {
  const router = useRouter();

  const searchTerm = router.query?.search;

  const classes = useClassStore((state) => state.classes);

  const sortedClass = searchTerm
    ? matchSorter(classes, searchTerm, {
        keys: ['title', 'description'],
      })
    : classes;

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
            <FilterBox />
            <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3'>
              {sortedClass.map((cl) => (
                <ClassCard
                  key={cl.id}
                  data={cl}
                  isLive={cl.isLive}
                  id={cl.id}
                  showPrice
                  addToCart
                />
              ))}
            </div>
            <Pagination />
          </div>
        </section>
      </main>
    </>
  );
}
