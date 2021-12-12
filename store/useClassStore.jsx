import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import produce from 'immer';
import { immer } from '@/lib/zustand';

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
    link_modul: '/modul.pdf',
    link_zoom: 'https://zoom.us',
    reviews: [
      {
        rating_kelas: '4',
        ulasan: 'Keren banget coursenya!',
        name: 'Clarence',
      },
    ],
  },
  {
    id: '2',
    title: 'Strike the first letter',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Jack Frost',
    price: '80.000',
    img: 'https://unsplash.it/709/383?id=2',
    link_modul: '/modul.pdf',
    link_video: 'dHAbmoFHqgA',
    reviews: [
      { rating_kelas: '4', ulasan: 'Keren banget coursenya!', name: 'Jessica' },
    ],
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
    link_modul: '/modul.pdf',
    link_zoom: 'https://zoom.us',
    reviews: [
      { rating_kelas: '4', ulasan: 'Keren banget coursenya!', name: 'Nevin' },
    ],
  },
  {
    id: '4',
    title: 'Legend of Aang, learning meditation',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Zukko',
    price: '20.000',
    img: 'https://unsplash.it/709/383?id=4',
    link_modul: '/modul.pdf',
    link_video: 'dHAbmoFHqgA',
    reviews: [
      { rating_kelas: '4', ulasan: 'Keren banget coursenya!', name: 'Fidhia' },
    ],
  },
  {
    id: '5',
    title: 'Drawing course bercocok tanam',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Dr. Seuss',
    price: '40.000',
    img: 'https://unsplash.it/709/383?id=5',
    link_modul: '/modul.pdf',
    link_video: 'dHAbmoFHqgA',
    reviews: [
      {
        rating_kelas: '4',
        ulasan: 'Keren banget coursenya!',
        name: 'Clarence',
      },
    ],
  },
  {
    id: '6',
    title: 'Menyanyi dengan baik dan benar',
    description:
      'Lorem ipsum dolor sit amet amet belalang kupu kupu siang makan nasi kalo malam minum susu',
    instructor: 'Tulus Kribo',
    price: '150.000',
    img: 'https://unsplash.it/709/383?id=6',
    link_modul: '/modul.pdf',
    link_video: 'dHAbmoFHqgA',
    reviews: [
      {
        rating_kelas: '4',
        ulasan: 'Keren banget coursenya!',
        name: 'Clarence',
      },
    ],
  },
];

const useClassStore = create(
  devtools(
    persist(
      immer((set) => ({
        classes: initialClass,
        addClass: (newClass) =>
          set((state) => {
            state.classes.push(newClass);
          }),
        putClass: (id, newClass) =>
          set((state) => {
            state.classes = state.classes.map((item) =>
              item.id === id ? { ...item, ...newClass } : item
            );
          }),
        removeClass: (id) =>
          set((state) => {
            state.classes = state.classes.filter(
              (classItem) => classItem.id !== id
            );
          }),
        insertReview: (id, review) =>
          set((state) => {
            state.classes
              .find((classItem) => classItem.id === id)
              .reviews.push(review);
          }),
      })),
      {
        name: 'academy-classes',
      }
    ),

    'ClassStore'
  )
);

export default useClassStore;
