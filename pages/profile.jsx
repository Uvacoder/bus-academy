import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import TextArea from '@/components/TextArea';
import Select from '@/components/Select';
import { classNames, getFromLocalStorage } from '@/lib/helper';

export default function Register() {
  const parsedProfile = JSON.parse(getFromLocalStorage('academy-profile'));

  const defaultValues = {
    nama_lengkap: parsedProfile?.nama_lengkap ?? 'Clarence',
    telepon: parsedProfile?.telepon ?? '+628515123235464',
    tgl_lahir: parsedProfile?.tgl_lahir
      ? new Date(parsedProfile?.tgl_lahir)
      : new Date('2001-08-15'),
    alamat: parsedProfile?.alamat ?? 'Jl. Cemara Tunggal No. 21',
    provinsi: parsedProfile?.provinsi ?? 'DKI Jakarta',
    kabkot: parsedProfile?.kabkot ?? 'Jakarta Utara',
  };

  const methods = useForm({
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  const router = useRouter();

  function onSubmit(data) {
    console.log(data);
    // store to local storage
    localStorage.setItem('academy-profile', JSON.stringify(data));
    toast.success('Profil berhasil diperbaharui');
  }

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Edit Profil</h1>
            <div className='mt-8'>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        placeholder='+62 851 1234 4321'
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
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        router.back();
                      }}
                      className='px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md'
                    >
                      Batal
                    </button>
                    <button
                      type='submit'
                      disabled={!isDirty}
                      className={classNames(
                        'px-4 py-2 text-sm font-medium text-white rounded-md',
                        !isDirty
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-sky-500 cursor-pointer'
                      )}
                    >
                      Simpan Perubahan
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
