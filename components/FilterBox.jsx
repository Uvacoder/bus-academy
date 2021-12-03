import { useForm } from 'react-hook-form';
import { HiSearch } from 'react-icons/hi';
import { useRouter } from 'next/router';

const categoryFilter = [
  { id: 'live', label: 'Kelas Live' },
  { id: 'nonlive', label: 'Kelas Non Live' },
];
export default function FilterBox() {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm();
  function onSearch(data) {
    router.push(`/cari-kelas?search=${data.search}`);
    reset();
  }
  return (
    <div className='flex flex-col items-end gap-8'>
      <div className='w-full max-w-lg lg:max-w-xs'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <HiSearch className='w-5 h-5 text-gray-400' aria-hidden='true' />
          </div>
          <form onSubmit={handleSubmit(onSearch)}>
            <input
              {...register('search')}
              id='search'
              name='search'
              className='block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Search'
              type='search'
            />
          </form>
        </div>
      </div>
      {/* <div>
        <h3>Filter Kategori:</h3>
        <div className='flex flex-col items-start gap-2 mt-4'>
          {categoryFilter.map((item) => (
            <div className='flex items-center gap-2' key={item.id}>
              <input type='checkbox' id={item.id} name={item.id} />
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          ))}
          <button
            onClick={() => toast.success('Filter berhasil digunakan')}
            className='inline-flex items-center h-10 gap-1 px-3 py-2 mb-1 text-sm font-medium text-white rounded-md hover:bg-sky-400 bg-sky-500'
          >
            Filter Pilihan
          </button>
        </div>
      </div> */}
    </div>
  );
}
