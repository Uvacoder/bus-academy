import { Fragment } from 'react';
import Image from 'next/image';
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

export default function Nav() {
  return (
    <Disclosure as='nav' className='fixed top-0 z-10 w-full shadow bg-sky-500'>
      {({ open }) => (
        <>
          <div className='mx-auto layout'>
            <div className='flex justify-between h-16'>
              <div className='flex px-2 lg:px-0'>
                <div className='flex items-center flex-shrink-0'>
                  <figure className='w-28'>
                    <Image className='w-20' src={logo} />
                  </figure>
                </div>
                <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                  <UnstyledLink
                    href='/'
                    className='inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-white'
                  >
                    Beranda
                  </UnstyledLink>
                  <UnstyledLink
                    href='/cari-kelas'
                    className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-200'
                  >
                    Cari Kelas
                  </UnstyledLink>
                  <UnstyledLink
                    href='/akses-kelas'
                    className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-200'
                  >
                    Akses Kelas
                  </UnstyledLink>
                  <UnstyledLink
                    href='/keranjang'
                    className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-200'
                  >
                    Keranjang
                  </UnstyledLink>
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
                    <input
                      id='search'
                      name='search'
                      className='block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </div>
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
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
                <button className='flex-shrink-0 p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>View notifications</span>
                  <HiOutlineBell className='w-6 h-6' aria-hidden='true' />
                </button>

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
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
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
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50'
              >
                Dashboard
              </a>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              >
                Team
              </a>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              >
                Projects
              </a>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              >
                Calendar
              </a>
            </div>
            <div className='pt-4 pb-3 border-t border-gray-200'>
              <div className='flex items-center px-4'>
                <div className='flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <HiUser className='w-6 h-6' />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium text-gray-500'>
                    tom@example.com
                  </div>
                </div>
                <button className='flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>View notifications</span>
                  <HiOutlineBell className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1'>
                <a
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                >
                  Your Profile
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                >
                  Settings
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                >
                  Sign out
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
