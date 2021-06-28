import Image from 'next/image';
import { HiOutlineCalendar, HiOutlinePlus, HiOutlineX } from 'react-icons/hi';

import SampleAvatar from '@/public/images/sample-avatar.png';

import CustomLink from '@/components/CustomLink';
import { classNames } from '@/lib/helper';

export default function ClassCard({
  cart,
  addToCart,
  isLive,
  access,
  showPrice,
  showReviewButton,
  onRemove,
  detail,
}) {
  return (
    <div className='relative flex flex-col items-start p-4 space-y-2 border rounded-md border-sky-500'>
      <Image src='/images/sample.jpg' width={709} height={383} />
      <div className='flex items-center justify-between w-full gap-4'>
        <span
          className={classNames(
            'inline-block px-4 py-1 text-sm font-semibold rounded-full',
            isLive ? 'bg-green-200' : 'bg-sky-200'
          )}
        >
          {isLive ? 'Live' : 'Non Live'}
        </span>
        {isLive && (
          <span className='inline-flex items-center text-sm font-medium'>
            <HiOutlineCalendar className='inline-block mr-2 text-sky-600' />7
            Juli 2021, 14:00 – 18:00 WIB
          </span>
        )}
      </div>
      <div>
        <h4 className='text-base'>
          Manage your way with great public speaking!
        </h4>
        <p className='text-sm text-gray-500'>
          Public speaking adalah hal yang cukup signifikan dalam kehidupan
          kerja, maka ayo tingkatkan!
        </p>
      </div>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-1'>
          <figure className='flex items-center w-8'>
            <Image src={SampleAvatar} className='block' alt='avatar' />
          </figure>
          <p className='text-sm text-gray-500'>Jack Frost</p>
        </div>
        {access ? (
          <CustomLink href={`/kelas/${isLive ? 'live' : 'non-live'}`}>
            Akses Kelas
          </CustomLink>
        ) : showPrice ? (
          <p className='text-lg font-bold'>Rp 50.000</p>
        ) : showReviewButton ? (
          <CustomLink href='/review'>Beri Ulasan</CustomLink>
        ) : null}
      </div>
      {addToCart && (
        <button className='inline-flex items-center gap-1 px-3 py-2 ml-auto text-sm font-medium text-white rounded-md hover:bg-sky-400 bg-sky-500'>
          <HiOutlinePlus className='text-lg' />
          <p>Tambah Ke Keranjang</p>
        </button>
      )}
      {cart && (
        <button
          onClick={detail.id ? () => onRemove(detail.id) : null}
          className='absolute p-1 text-white bg-red-500 rounded-full -top-4 -right-2'
        >
          <HiOutlineX className='text-lg' />
        </button>
      )}
    </div>
  );
}
