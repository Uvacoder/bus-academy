import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';
import CustomLink from '@/components/CustomLink';
import { HiStar } from 'react-icons/hi';
import useClassStore from '@/store/useClassStore';
import { useRouter } from 'next/router';

export default function Kelas() {
  const router = useRouter();
  const { id } = router.query;

  //#region  //*=========== Get Class By Id ===========
  const classes = useClassStore((state) => state.classes);
  const currentClass = classes.find((c) => c.id === id);
  //#endregion  //*======== Get Class By Id ===========

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Detail Kelas</h1>
            <article className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12 mt-16'>
              <aside>
                <div className='flex flex-col gap-4'>
                  {currentClass !== undefined && (
                    <ClassCard
                      key={currentClass.id}
                      data={currentClass}
                      isLive={currentClass.isLive}
                      id={currentClass.id}
                      showPrice
                      addToCart
                    />
                  )}
                </div>
              </aside>
              <main>
                <h3 className='font-semibold'>Deskripsi</h3>
                <p className='leading-7'>
                  {currentClass?.description ?? 'Description'}
                </p>
                <h3 className='mt-4 font-semibold'>Ulasan</h3>
                {currentClass?.reviews.length > 0 &&
                  currentClass?.reviews.map((r) => (
                    <div className='flex flex-col py-2'>
                      <span className='flex items-center gap-2 text-lg font-medium text-sky-500'>
                        <HiStar className='text-xl text-sky-500' />{' '}
                        {r.rating_kelas}/5
                      </span>
                      <p className='text-lg font-semibold'>{r.name}</p>
                      <p>{r.ulasan}</p>
                    </div>
                  ))}
                <div className='flex flex-col py-2'>
                  <span className='flex items-center gap-2 text-lg font-medium text-sky-500'>
                    <HiStar className='text-xl text-sky-500' /> 4.5/5
                  </span>
                  <p className='text-lg font-semibold'>Herlambang</p>
                  <p>Waw keren sekali</p>
                </div>
                <div className='flex flex-col py-2'>
                  <span className='flex items-center gap-2 text-lg font-medium text-sky-500'>
                    <HiStar className='text-xl text-sky-500' /> 4.67/5
                  </span>
                  <p className='text-lg font-semibold'>Theodorus Clarence</p>
                  <p>A Really great course!</p>
                </div>
              </main>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
