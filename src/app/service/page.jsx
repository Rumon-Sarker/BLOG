import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Service from '@/components/Service';
import Subscribe from '@/components/Subscribe';




export default async function Home() {

    return (
        <main>
            <Header />
            <Service />
            <Subscribe />
            <Contact />
            <Footer />
        </main>
    );
}
