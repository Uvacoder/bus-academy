import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import format from 'date-fns/format';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import TextArea from '@/components/TextArea';
import Select from '@/components/Select';
import useClassStore from '@/store/useClassStore';
import toast from 'react-hot-toast';

export default function EditKelasForm({ defaultValues }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit, watch } = methods;

  const classes = useClassStore((state) => state.classes);
  const addClass = useClassStore((state) => state.addClass);
  const putClass = useClassStore((state) => state.putClass);

  const jenis = watch('jenis');

  const router = useRouter();

  function onSubmit(data) {
    const isLive = data.jenis === 'Live';

    const newId = Math.max(...classes.map((cls) => cls.id)) + 1 + '';
    const mappedData = {
      id: newId,
      title: data.nama_kelas,
      description: data.deskripsi_kelas,
      instructor: data.nama_instruktur,
      price: data.harga_kelas,
      isLive: isLive,
      time: isLive
        ? `${format(new Date(data.tgl_live), 'd MMM yyyy')}, 14:00 – 18:00 WIB`
        : undefined,
      img: `https://unsplash.it/709/383?id=${newId}`,
      link_video: !isLive ? data.link_video : undefined,
      link_zoom: isLive ? data.link_zoom : undefined,
      link_modul: data.link_modul,
    };

    const isEdit = router.asPath.includes('edit');

    if (isEdit) {
      const editId = router.asPath.split('/')[3];
      putClass(editId, { ...mappedData, id: editId });
      toast.success('Kelas berhasil diedit');
      router.push('/admin/kelas');
      return;
    }

    addClass(mappedData);
    toast.success('Kelas berhasil ditambahkan');
    router.push('/admin/kelas');
  }

  return (
    <div className='mt-8'>
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
                router.back();
              }}
              type='button'
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
