import Image from 'next/image';
import { useRouter } from 'next/router';

import caraPembayaranImg from '@/public/images/cara-pembayaran.jpg';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import UnstyledLink from '@/components/UnstyledLink';
import { HiCash } from 'react-icons/hi';
import { classNames, getFromLocalStorage } from '@/lib/helper';

const defaultTransactions = [
  {
    id: 1,
    name: 'Manage Public Speaking & Bercocok Tanam',
    href: '/riwayat/pembelian/success',
    amount: 'Rp 150000',
    currency: 'IDR',
    status: 'success',
    date: 'July 11, 2021',
    datetime: '2021-07-11',
  },
  {
    id: 2,
    name: 'TOEFL IBT 100%',
    href: '/riwayat/pembelian/processing',
    amount: 'Rp 110000',
    currency: 'IDR',
    status: 'processing',
    date: 'July 11, 2021',
    datetime: '2021-07-11',
  },
  {
    id: 3,
    name: 'Strive challenges with trigger',
    href: '/riwayat/pembelian/cancelled',
    amount: 'Rp 50000',
    currency: 'IDR',
    status: 'cancelled',
    date: 'July 12, 2021',
    datetime: '2021-07-12',
  },
  // More transactions...
];

const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function Riwayat() {
  const router = useRouter();

  const _invoices = getFromLocalStorage('academy-invoice');
  const invoices = JSON.parse(_invoices);
  const newInvoices = invoices.map((invoice) => ({
    id: invoice.id,
    name: invoice.name,
    href: `/riwayat/pembelian/${invoice.id}`,
    amount: `Rp ${invoice.total}`,
    currency: 'IDR',
    date: new Date(invoice.tanggal).toLocaleDateString('id-ID'),
    datetime: invoice.tanggal,
    status: invoice.status,
  }));

  const transactions = [...defaultTransactions, ...newInvoices];

  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-16 mt-16 layout'>
            <h1 className='text-center'>Riwayat Pembelian Kelas</h1>
            <table className='min-w-full mt-8 divide-y divide-gray-200'>
              <thead>
                <tr>
                  <th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50'>
                    Transaction
                  </th>
                  <th className='px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50'>
                    Amount
                  </th>
                  <th className='hidden px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50 md:block'>
                    Status
                  </th>
                  <th className='px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50'>
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className='bg-white'>
                    <td className='w-full px-6 py-4 text-sm text-gray-900 max-w-0 whitespace-nowrap'>
                      <div className='flex'>
                        <UnstyledLink
                          href={transaction.href}
                          className='inline-flex space-x-2 text-sm truncate group'
                        >
                          <HiCash
                            className='flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500'
                            aria-hidden='true'
                          />
                          <p className='text-gray-500 truncate group-hover:text-gray-900'>
                            {transaction.name}
                          </p>
                        </UnstyledLink>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap'>
                      <span className='font-medium text-gray-900'>
                        {transaction.amount}{' '}
                      </span>
                      {transaction.currency}
                    </td>
                    <td className='hidden px-6 py-4 text-sm text-gray-500 whitespace-nowrap md:block'>
                      <span
                        className={classNames(
                          statusStyles[transaction.status],
                          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                        )}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className='px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap'>
                      <time dateTime={transaction.datetime}>
                        {transaction.date}
                      </time>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
