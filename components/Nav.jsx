import { Fragment } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  HiSearch,
  HiOutlineBell,
  HiOutlineMenu,
  HiOutlineX,
  HiUser,
} from 'react-icons/hi';

import logo from '@/public/images/logo.png';

import { classNames } from '@/lib/helper';

import UnstyledLink from '@/components/UnstyledLink';
import useCartStore from '@/store/CartStore';

export default function Nav() {
  const { asPath, push } = useRouter();
  const { register, handleSubmit, reset } = useForm();
  function onSearch(data) {
    push(`/cari-kelas?search=${data.search}`);
    reset();
  }
  const carts = useCartStore((state) => state.carts);

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Cari Kelas', href: '/cari-kelas' },
    { label: 'Akses Kelas', href: '/akses-kelas' },
    { label: `Keranjang: ${carts.length}`, href: '/keranjang' },
  ];

  return (
    <Disclosure as='nav' className='fixed top-0 z-10 w-full shadow bg-sky-500'>
      {({ open }) => (
        <>
          <div className='mx-auto layout'>
            <div className='flex justify-between h-16'>
              <div className='flex px-2 lg:px-0'>
                <div className='flex items-center flex-shrink-0'>
                  <UnstyledLink href='/' className='w-28'>
                    <Image className='w-20' src={logo} />
                  </UnstyledLink>
                </div>
                <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                  {navItems.map(({ href, label }) => (
                    <UnstyledLink
                      key={href}
                      href={href}
                      className={classNames(
                        'inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2',
                        asPath === href
                          ? 'text-white border-white'
                          : 'text-gray-100 border-transparent hover:border-gray-300 hover:text-gray-200'
                      )}
                    >
                      {label}
                    </UnstyledLink>
                  ))}
                </div>
              </div>
              <div className='flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end'>
                <div className='w-full max-w-lg lg:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <HiSearch
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
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
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-white rounded-md hover:text-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <HiOutlineX className='block w-6 h-6' aria-hidden='true' />
                  ) : (
                    <HiOutlineMenu
                      className='block w-6 h-6'
                      aria-hidden='true'
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className='hidden lg:ml-4 lg:flex lg:items-center'>
                {/* <button className='flex-shrink-0 p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>View notifications</span>
                  <HiOutlineBell className='w-6 h-6' aria-hidden='true' />
                </button> */}

                {/* Profile dropdown */}
                <Menu as='div' className='relative flex-shrink-0 ml-4'>
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className='flex-shrink-0 p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                          <span className='sr-only'>Open user menu</span>
                          <HiUser className='w-6 h-6' />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items
                          static
                          className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <UnstyledLink
                                href='/profile'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Profil
                              </UnstyledLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <UnstyledLink
                                href='/riwayat'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Riwayat Pembelian
                              </UnstyledLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <UnstyledLink
                                href='/login'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Login
                              </UnstyledLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <UnstyledLink
                                href='/register'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Register
                              </UnstyledLink>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              {navItems.map(({ href, label }) => (
                <UnstyledLink
                  key={href}
                  href={href}
                  className={classNames(
                    'block py-2 pl-3 pr-4 text-base font-medium  border-l-4 ',
                    asPath === href
                      ? 'text-sky-700  border-sky-500 bg-sky-50'
                      : 'text-gray-100  border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  )}
                >
                  {label}
                </UnstyledLink>
              ))}
            </div>
            <div className='pt-4 pb-3 border-t border-gray-200'>
              <div className='flex items-center px-4'>
                <div className='flex-shrink-0 p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <HiUser className='w-6 h-6' />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium text-gray-50'>
                    tom@example.com
                  </div>
                </div>
                {/* <button className='flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>View notifications</span>
                  <HiOutlineBell className='w-6 h-6' aria-hidden='true' />
                </button> */}
              </div>
              <div className='mt-3 space-y-1'>
                <UnstyledLink
                  href='/profile'
                  className={classNames(
                    'block py-2 pl-3 pr-4 text-base font-medium  border-l-4 ',
                    'text-gray-100  border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  )}
                >
                  Profile
                </UnstyledLink>
                <UnstyledLink
                  href='/login'
                  className={classNames(
                    'block py-2 pl-3 pr-4 text-base font-medium  border-l-4 ',
                    'text-gray-100  border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  )}
                >
                  Login
                </UnstyledLink>
                <UnstyledLink
                  href='/register'
                  className={classNames(
                    'block py-2 pl-3 pr-4 text-base font-medium  border-l-4 ',
                    'text-gray-100  border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  )}
                >
                  Register
                </UnstyledLink>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
