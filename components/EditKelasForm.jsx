import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import TextArea from '@/components/TextArea';
import Select from '@/components/Select';

export default function EditKelasForm({ defaultValues }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit, watch } = methods;

  const jenis = watch('jenis');

  const router = useRouter();

  function onSubmit(data) {
    console.log(data);
    router.push('/admin/kelas');
  }

  return (
    <div className='px-12 mt-8'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Informasi Kelas</h3>
          <p className='text-gray-500'>
            Informasi kelengkapan kelas berupa nama, harga, deskripsi
          </p>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <div>
              <Input
                label='Nama Kelas'
                id='nama_kelas'
                type='text'
                validation={{
                  required: 'Nama kelas tidak boleh kosong',
                }}
              />
            </div>
            <div>
              <Input
                label='Nama Instruktur'
                id='nama_instruktur'
                type='text'
                validation={{
                  required: 'Nama Instruktur tidak boleh kosong',
                }}
              />
            </div>
            <div>
              <Input
                label='Harga kelas'
                id='harga_kelas'
                type='text'
                placeholder='150.000'
                validation={{
                  required: 'Harga kelas tidak boleh kosong',
                }}
              />
            </div>
            <Select
              label='Jenis Kelas'
              id='jenis'
              validation={{
                required: 'Jenis Kelas tidak boleh kosong',
              }}
              option={[
                { label: 'Live', value: 'Live' },
                {
                  label: 'Non Live',
                  value: 'Non Live',
                },
              ]}
            />
            <div className='col-span-2'>
              <TextArea
                label='Deskripsi Kelas'
                id='deskripsi_kelas'
                type='text'
                validation={{
                  required: 'Deskripsi Kelas tidak boleh kosong',
                }}
              />
            </div>
            {jenis === 'Live' && (
              <div className=''>
                <DatePicker
                  label='Tanggal Live'
                  placeholder='dd/mm/yyyy'
                  id='tgl_live'
                  validation={{
                    required: 'Tanggal Live tidak boleh kosong',
                  }}
                />
              </div>
            )}
            <div>
              <label
                htmlFor='file'
                className='block text-sm font-normal text-gray-700'
              >
                File Foto
              </label>
              <input type='file' id='file' name='file' className='mt-2' />
            </div>
          </div>
          <hr className='mt-8' />

          {/* //* ====================== INFORMASI MODUL */}
          <h3 className='mt-8'>Informasi Modul</h3>
          <p className='text-gray-500'>
            Modul dapat berupa link ke modul, link video, dan informasi link
            zoom
          </p>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            {jenis === 'Live' ? (
              <div className='col-span-2'>
                <Input
                  label='Link Zoom Live'
                  id='link_zoom'
                  type='text'
                  placeholder='https://docs.google.com'
                  validation={{
                    required: 'Link zoom tidak boleh kosong',
                  }}
                />
              </div>
            ) : (
              <>
                <div className='col-span-2'>
                  <Input
                    label='Link Video'
                    id='link_video'
                    type='text'
                    placeholder='https://docs.google.com'
                    validation={{
                      required: 'Link video tidak boleh kosong',
                    }}
                  />
                </div>
              </>
            )}
            <div className='col-span-2'>
              <Input
                label='Link Modul'
                id='link_modul'
                type='text'
                placeholder='https://docs.google.com'
                validation={{
                  required: 'Link Modul tidak boleh kosong',
                }}
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
            <button className='px-4 py-2 text-sm font-medium text-white rounded-md bg-sky-500'>
              Simpan Kelas
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
