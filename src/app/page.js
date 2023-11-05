
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Service from '@/components/Service';
import Subscribe from '@/components/Subscribe';


const page = async () => {

  return (
    <div>
      <Header></Header>

      <Hero></Hero>
      <Service />
      <Subscribe></Subscribe>
      <Blog />
      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
};

export default page;