import Image from 'next/image';
import { HiOutlineX } from 'react-icons/hi';

export default function ClassCard() {
  return (
    <div className='relative p-4 space-y-2 border rounded-md border-sky-500'>
      <Image src='/images/sample.jpg' width={709} height={383} />
      <span className='inline-block px-4 py-1 text-sm font-semibold rounded-full bg-sky-200'>
        Non Live
      </span>
      <div>
        <h4 className='text-base'>
          Manage your way with great public speaking!
        </h4>
        <p className='text-sm text-gray-500'>
          Public speaking adalah hal yang cukup signifikan dalam kehidupan
          kerja, maka ayo tingkatkan!
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>Jack Frost</p>
        <p className='text-lg font-bold'>Rp 50.000</p>
      </div>
      <button className='absolute p-1 text-white bg-red-500 rounded-full -top-4 -right-2'>
        <HiOutlineX className='text-lg' />
      </button>
    </div>
  );
}
