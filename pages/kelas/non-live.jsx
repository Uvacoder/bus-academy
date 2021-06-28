import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';
import CustomLink from '@/components/CustomLink';

export default function Kelas() {
  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Kelas Non Live</h1>
            <article className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12 mt-16'>
              <aside>
                <div className='flex flex-col gap-4'>
                  <ClassCard showReviewButton />
                </div>
              </aside>
              <main>
                <h3 className='font-semibold'>Modul</h3>
                <CustomLink className='mt-2' href='/modul.pdf'>
                  Download Modul
                </CustomLink>

                <h3 className='mt-4 font-semibold'>Video Pembelajaran</h3>
                <figure className='mt-2'>
                  <LiteYouTubeEmbed
                    id='dHAbmoFHqgA'
                    poster='hqdefault'
                    noCookie={true}
                  />
                </figure>
              </main>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
