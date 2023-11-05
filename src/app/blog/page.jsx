import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Subscribe from '@/components/Subscribe';

export default function page() {

    return (

        <div>
            {/* ============Headers Section =============== */}
            <Header></Header>

            <Blog />

            <Contact></Contact>

            <Subscribe></Subscribe>

            {/* =============Footer section=============== */}
            <Footer></Footer>
        </div>
    );
};

