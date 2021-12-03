import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import TextArea from '@/components/TextArea';
import Select from '@/components/Select';

export default function Register() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const router = useRouter();

  function onSubmit(data) {
    console.log(data);
    // store to local storage
    const existingUsers = localStorage.getItem('usersDB');
    const existing = existingUsers ? JSON.parse(existingUsers) : [];
    existing.push(data);
    localStorage.setItem('usersDB', JSON.stringify(existing));

    toast.success('Registrasi berhasil');
    router.push('/');
  }

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Registrasi Akun</h1>
            <div className='mt-8'>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h3>Informasi Akun</h3>
                  <p className='text-gray-500'>
                    Lengkapi data-data di bawah ini untuk bisa langsung belajar
                    bersama kami!
                  </p>
                  <div className='w-1/2 mt-4 space-y-4'>
                    <div>
                      <Input
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='you@example.com'
                        validation={{
                          required: 'Email tidak boleh kosong',
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Format email salah',
                          },
                        }}
                      />
                    </div>
                    <div className='grid-'>
                      <Input
                        label='Password'
                        id='password'
                        type='password'
                        helperText='Pastikan password kamu cukup kuat'
                        validation={{
                          required: 'Password tidak boleh kosong',
                          minLength: {
                            value: 8,
                            message: 'Password harus lebih dari 8 karakter',
                          },
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        label='Ulangi Password'
                        id='again_password'
                        type='password'
                        validation={{
                          required: 'Ulangi Password tidak boleh kosong',
                        }}
                      />
                    </div>
                  </div>
                  <hr className='mt-8' />
                  <h3 className='mt-8'>Informasi Personal</h3>
                  <p className='text-gray-500'>
                    Lengkapi data-data di bawah ini untuk bisa langsung belajar
                    bersama kami!
                  </p>
                  <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div>
                      <Input
                        label='Nama Lengkap'
                        id='nama_lengkap'
                        type='text'
                        validation={{
                          required: 'Nama Lengkap tidak boleh kosong',
                        }}
                      />
                    </div>
                    <div className='row-start-2'>
                      <Input
                        label='Nomor Telepon'
                        id='telepon'
                        type='text'
                        placeholder='+6285112344321'
                        validation={{
                          required: 'Nomor telepon tidak boleh kosong',
                          pattern: {
                            value: /^\+628[1-9][0-9]{8,11}$/,
                            message:
                              'Format salah, awali nomor telepon dengan +62',
                          },
                        }}
                      />
                    </div>
                    <div className='row-start-2'>
                      <DatePicker
                        label='Tanggal Lahir'
                        placeholder='dd/mm/yyyy'
                        id='tgl_lahir'
                        validation={{
                          required: 'Tanggal lahir tidak boleh kosong',
                        }}
                      />
                    </div>
                    <div className='col-span-2'>
                      <TextArea
                        label='Alamat'
                        id='alamat'
                        type='text'
                        validation={{
                          required: 'Alamat tidak boleh kosong',
                        }}
                      />
                    </div>
                    <div>
                      <Select
                        label='Provinsi'
                        id='provinsi'
                        validation={{
                          required: 'Provinsi tidak boleh kosong',
                        }}
                        option={[
                          { label: 'DKI Jakarta', value: 'DKI Jakarta' },
                          {
                            label: 'Sumatera Selatan',
                            value: 'Sumatera Selatan',
                          },
                          { label: 'Kepulauan Riau', value: 'Kepulauan Riau' },
                        ]}
                      />
                    </div>
                    <div>
                      <Select
                        label='Kota / Kabupaten'
                        id='kabkot'
                        validation={{
                          required: 'Kota / Kabupaten tidak boleh kosong',
                        }}
                        option={[
                          { label: 'Jakarta Utara', value: 'Jakarta Utara' },
                          {
                            label: 'Jakarta Selatan',
                            value: 'Jakarta Selatan',
                          },
                          { label: 'Jakarta Timur', value: 'Jakarta Timur' },
                          { label: 'Jakarta Pusat', value: 'Jakarta Pusat' },
                          { label: 'Jakarta Barat', value: 'Jakarta Barat' },
                          {
                            label: 'Kepulauan Seribu',
                            value: 'Kepulauan Seribu',
                          },
                        ]}
                      />
                    </div>
                  </div>
                  <div className='flex justify-end gap-2 mt-8'>
                    <button className='px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md'>
                      Batal
                    </button>
                    <button className='px-4 py-2 text-sm font-medium text-white rounded-md bg-sky-500'>
                      Daftarkan Akun
                    </button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
