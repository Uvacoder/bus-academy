import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';
import useClassStore from '@/store/useClassStore';
import { getFromLocalStorage } from '@/lib/helper';

export default function Keranjang() {
  const classes = useClassStore((state) => state.classes);

  const _access = getFromLocalStorage('academy-access');
  const access = JSON.parse(_access);

  const items = access?.map((i) => classes.find((c) => c.id == i));
  console.log(
    '🚀 ~ file: akses-kelas.jsx ~ line 12 ~ Keranjang ~ items',
    items
  );

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Kelas Anda</h1>
            <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3'>
              {items?.map((cl) => (
                <ClassCard
                  key={cl.id}
                  data={cl}
                  isLive={cl.isLive}
                  id={cl.id}
                  access
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
