import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import ClassCard from '@/components/ClassCard';
import { HiOutlinePlus } from 'react-icons/hi';
import { FormProvider, useForm } from 'react-hook-form';
import TextArea from '@/components/TextArea';
import Input from '@/components/Input';
import { useRouter } from 'next/router';
import useClassStore from '@/store/useClassStore';

export default function Kelas() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const router = useRouter();
  const { id } = router.query;

  //#region  //*=========== Get Class By Id ===========
  const classes = useClassStore((state) => state.classes);
  const insertReview = useClassStore((state) => state.insertReview);
  const currentClass = classes.find((c) => c.id === id);
  //#endregion  //*======== Get Class By Id ===========

  const onSubmit = (data) => {
    const _profile = localStorage.getItem('academy-profile');
    const profile = _profile ? JSON.parse(_profile) : null;

    const ulasan = {
      ...data,
      name: profile?.nama_lengkap ?? 'Anonim',
    };

    insertReview(id, ulasan);

    router.replace(`/kelas/${id}`);
  };

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Ulasan Kelas</h1>
            <article className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12 mt-16'>
              <aside>
                <div className='flex flex-col gap-4'>
                  {currentClass !== undefined && (
                    <ClassCard
                      key={currentClass.id}
                      data={currentClass}
                      isLive={currentClass.isLive}
                      id={currentClass.id}
                    />
                  )}
                </div>
              </aside>
              <main>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div>
                      <Input
                        label='Rating kelas (1-5)'
                        id='rating_kelas'
                        type='number'
                        step='0.1'
                        validation={{
                          required: 'Rating kelas tidak boleh kosong',
                          min: {
                            value: 0,
                            message: 'Rating minimal 0',
                          },
                          max: {
                            value: 5,
                            message: 'Rating maksimal 5',
                          },
                        }}
                      />
                    </div>
                    <div className=''>
                      <TextArea
                        label='Ulasan'
                        id='ulasan'
                        type='text'
                        validation={{
                          required: 'Ulasan tidak boleh kosong',
                        }}
                      />
                    </div>
                    <button
                      type='submit'
                      className='inline-flex items-center gap-1 px-3 py-2 mt-4 text-sm font-medium text-white rounded-md hover:bg-sky-400 bg-sky-500'
                    >
                      <HiOutlinePlus className='text-lg' />
                      <p>Tambah Ulasan</p>
                    </button>
                  </form>
                </FormProvider>
              </main>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
