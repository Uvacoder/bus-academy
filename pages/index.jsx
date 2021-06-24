import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import CustomLink from '@/components/CustomLink';

export default function Home() {
  return (
    <>
      <Seo />
      <Nav />

      <main>
        <section className=''>
          <div className='min-h-screen py-16 mt-16 layout'>
            <h1>Hello</h1>
          </div>
        </section>
      </main>
    </>
  );
}
