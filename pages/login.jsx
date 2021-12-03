import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Image from 'next/image';
import toast from 'react-hot-toast';

import logo from '@/public/images/logo.png';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Input from '@/components/Input';

export default function Example() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const router = useRouter();

  function onSubmit(data) {
    const _users = localStorage.getItem('usersDB');
    if (!_users) {
      return toast.error(
        'Akun belum terdaftar, silahkan register terlebih dahulu'
      );
    }
    const users = JSON.parse(_users);
    const foundUser = users.find((u) => u.email === data.email);
    if (!foundUser) {
      return toast.error(
        'Akun belum terdaftar, silahkan register terlebih dahulu'
      );
    }

    // Check passowrd
    if (foundUser.password !== data.password) {
      return toast.error('Password salah');
    }

    toast.success('Login berhasil');
    localStorage.setItem('academy-profile', JSON.stringify(foundUser));
    router.push('/');
  }
  return (
    <>
      <Seo />
      <Nav />

      <div className='flex min-h-screen bg-white'>
        <div className='flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='w-full max-w-sm mx-auto lg:w-96'>
            <div>
              <Image className='w-20' src={logo} />
              <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                Masuk ke akun anda
              </h2>
            </div>
            <div className='mt-8'>
              <div className='mt-6'>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div>
                      <div className='mt-1'>
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
                    </div>
                    <div className='space-y-1'>
                      <div className='mt-1'>
                        <Input
                          label='Password'
                          id='password'
                          type='password'
                          validation={{
                            required: 'Password tidak boleh kosong',
                            minLength: {
                              value: 8,
                              message: 'Password harus lebih dari 8 karakter',
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-500 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                      >
                        Masuk
                      </button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex-1 hidden w-0 lg:block'>
          <img
            className='absolute inset-0 object-cover w-full h-full'
            src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
            alt=''
          />
        </div>
      </div>
    </>
  );
}
