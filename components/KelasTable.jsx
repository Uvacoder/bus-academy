import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  HiDotsVertical as DotsVerticalIcon,
  HiPencilAlt,
  HiDuplicate,
  HiUserAdd,
  HiTrash,
} from 'react-icons/hi';

import { classNames } from '@/lib/helper';
import UnstyledLink from './UnstyledLink';
import useClassStore from '@/store/useClassStore';
export default function KelasTable() {
  const classes = useClassStore((state) => state.classes);
  const addClass = useClassStore((state) => state.addClass);
  const removeClass = useClassStore((state) => state.removeClass);

  const projects = classes.map((cl) => ({
    id: cl.id,
    title: cl.title,
    team: cl.isLive ? 'Live' : 'Non-Live',
    instructor: cl.instructor,
    imageUrl: `https://i.pravatar.cc/150?u=${cl?.instructor ?? 'Jack Frost'}`,
    totalMembers: 1,
    lastUpdated: 'December 1, 2021',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  }));

  const duplicateProject = (id) => {
    const newId = Math.max(...projects.map((project) => project.id)) + 1;
    const newObj = {
      ...projects.find((project) => project.id === id),
      id: newId + '',
    };
    // console.log(newObj);
    addClass(newObj);
  };

  return (
    <>
      {projects.map((project) => (
        <tr key={project.id}>
          <td className='w-full px-6 py-3 text-sm font-medium text-gray-900 max-w-0 whitespace-nowrap'>
            <div className='flex items-center space-x-3 lg:pl-2'>
              <div
                className={classNames(
                  project.bgColorClass,
                  'flex-shrink-0 w-2.5 h-2.5 rounded-full'
                )}
                aria-hidden='true'
              />
              <a href='#' className='truncate hover:text-gray-600'>
                <span>
                  {project.title}{' '}
                  <span className='font-normal text-gray-500'>
                    in {project.team}
                  </span>
                </span>
              </a>
            </div>
          </td>
          <td className='px-6 py-3 text-sm font-medium text-gray-500'>
            <div className='flex items-center space-x-2'>
              <div className='flex flex-shrink-0 -space-x-1'>
                <img
                  key={`${project.instructor}${project.id}`}
                  className='w-6 h-6 rounded-full max-w-none ring-2 ring-white'
                  src={project.imageUrl}
                  alt={project.instructor}
                />
              </div>
            </div>
          </td>
          <td className='hidden px-6 py-3 text-sm text-right text-gray-500 md:table-cell whitespace-nowrap'>
            {project.lastUpdated}
          </td>
          <td className='pr-6'>
            <Menu as='div' className='relative flex items-center justify-end'>
              {({ open }) => (
                <>
                  <Menu.Button className='inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
                    <span className='sr-only'>Open options</span>
                    <DotsVerticalIcon className='w-5 h-5' aria-hidden='true' />
                  </Menu.Button>
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
                      className='absolute top-0 z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg right-7 ring-1 ring-black ring-opacity-5 focus:outline-none'
                    >
                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <UnstyledLink
                              href={`/admin/edit/${project.id}`}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'group flex items-center px-4 py-2 text-sm'
                              )}
                            >
                              <HiPencilAlt
                                className='w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500'
                                aria-hidden='true'
                              />
                              Edit
                            </UnstyledLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => duplicateProject(project.id)}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'group flex items-center px-4 py-2 text-sm w-full focus:outline-none'
                              )}
                            >
                              <HiDuplicate
                                className='w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500'
                                aria-hidden='true'
                              />
                              Duplicate
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => removeClass(project.id)}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'group flex items-center px-4 py-2 text-sm w-full focus:outline-none'
                              )}
                            >
                              <HiTrash
                                className='w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500'
                                aria-hidden='true'
                              />
                              Delete
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </td>
        </tr>
      ))}
    </>
  );
}
