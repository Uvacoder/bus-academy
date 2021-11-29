import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import produce from 'immer';

const initialClass = [
  {
    id: '1',
    title: 'Manage your way with great public speaking!',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Jack Frost',
    price: '100.000',
    isLive: true,
    time: 'Juli 2022, 14:00 – 18:00 WIB',
    img: 'https://unsplash.it/709/383?id=1',
  },
  {
    id: '2',
    title: 'Strike the first letter',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Jack Frost',
    price: '80.000',
    img: 'https://unsplash.it/709/383?id=2',
  },
  {
    id: '3',
    title: 'Star Wars',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Darth Vader',
    price: '100.000',
    isLive: true,
    time: 'November 2022, 14:00 – 18:00 WIB',
    img: 'https://unsplash.it/709/383?id=3',
  },
  {
    id: '4',
    title: 'Legend of Aang, learning meditation',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Zukko',
    price: '20.000',
    img: 'https://unsplash.it/709/383?id=4',
  },
  {
    id: '5',
    title: 'Drawing course bercocok tanam',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Dr. Seuss',
    price: '40.000',
    img: 'https://unsplash.it/709/383?id=5',
  },
  {
    id: '6',
    title: 'Menyanyi dengan baik dan benar',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Tulus Kribo',
    price: '150.000',
    img: 'https://unsplash.it/709/383?id=6',
  },
];

const useClassStore = create(
  devtools(
    persist(
      (set) => ({
        classes: initialClass,
      }),
      {
        name: 'academy-classes',
      }
    ),

    'ClassStore'
  )
);

export default useClassStore;
