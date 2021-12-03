import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';
import CustomLink from '@/components/CustomLink';
import { useRouter } from 'next/router';
import useClassStore from '@/store/useClassStore';

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
            <h1 className='text-center'>
              Kelas {currentClass?.isLive ? 'Live' : 'Non Live'}
            </h1>
            <article className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12 mt-16'>
              <aside>
                <div className='flex flex-col gap-4'>
                  {currentClass !== undefined && (
                    <ClassCard
                      key={currentClass.id}
                      data={currentClass}
                      isLive={currentClass.isLive}
                      id={currentClass.id}
                      showReviewButton
                    />
                  )}
                </div>
              </aside>
              <main>
                <h3 className='font-semibold'>Modul</h3>
                <CustomLink
                  className='mt-2'
                  href={currentClass?.link_modul ?? '#'}
                >
                  Download Modul
                </CustomLink>

                {currentClass?.link_zoom && (
                  <div>
                    <h3 className='mt-4 font-semibold'>Link Zoom Meeting</h3>
                    <p>
                      Mohon masuk ke ruangan zoom 20 menit sebelum jadwal
                      dimulai
                    </p>
                    <p>Jadwal: 7 Juli 2021, 14:00 – 18:00 WIB</p>
                    <CustomLink className='mt-2' href={currentClass.link_zoom}>
                      Zoom Meeting
                    </CustomLink>
                  </div>
                )}

                {currentClass?.link_video && (
                  <div>
                    <h3 className='mt-4 font-semibold'>Video Pembelajaran</h3>
                    <figure className='mt-2'>
                      <LiteYouTubeEmbed
                        id={currentClass.link_video}
                        poster='hqdefault'
                        noCookie={true}
                      />
                    </figure>
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
