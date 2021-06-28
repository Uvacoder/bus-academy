import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';
import CustomLink from '@/components/CustomLink';
import { HiStar } from 'react-icons/hi';

export default function Kelas() {
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
                  <ClassCard addToCart isLive />
                </div>
              </aside>
              <main>
                <h3 className='font-semibold'>Deskripsi</h3>
                <p className='leading-7'>
                  Kelas ini adalah kelas yang membicarakan tentang public
                  speaking. Simulation TOEFL & IELTS Test adalah program
                  kolaborasi dari Campuspedia dengan Lingo Talk berupa simulasi
                  tes TOEFL & IELTS serentak yang ditujukan bagi calon peserta
                  dalam hal ini adalah pelajar, mahasiswa dan juga fresh
                  graduate yang ingin mengukur kemampuan bahasa inggris-nya,
                  dimana harapannya para calon peserta dapat mengetahui tingkat
                  kemampuan bahasa inggris mereka baik untuk keperluan studi
                  lanjutan atau melamar pekerjaan sehingga setelah mengikuti tes
                  ini, peserta tertarik untuk meningkatkan kemampuan bahasa
                  inggris mereka terutama untuk kategori TOEFL & IELTS melalui
                  kelas-kelas yang terdapat di Campuspedia dan Lingotalk.
                </p>
                <h3 className='mt-4 font-semibold'>Ulasan</h3>
                <div className='flex flex-col py-2'>
                  <span className='flex items-center gap-2 text-lg font-medium text-sky-500'>
                    <HiStar className='text-xl text-sky-500' /> 5/5
                  </span>
                  <p className='text-lg font-semibold'>Bambang Hartoyo</p>
                  <p>Sumpah bagus banget ini coursenya! Recommended parah</p>
                </div>
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
