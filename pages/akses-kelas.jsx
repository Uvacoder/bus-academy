import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';
import ClassCard from '@/components/ClassCard';

export default function Keranjang() {
  const methods = useForm();
  const { handleSubmit } = methods;
  const router = useRouter();

  function onSubmit(data) {
    console.log(data);
    router.push('/checkout');
  }

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Kelas Anda</h1>
            <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3'>
              <ClassCard access />
              <ClassCard access isLive />
              <ClassCard access />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
