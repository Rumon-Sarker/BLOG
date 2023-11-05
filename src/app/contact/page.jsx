import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* ============Headers Section =============== */}
            <Header></Header>

            <Contact></Contact>

            {/* =============Footer section=============== */}
            <Footer></Footer>
        </div>
    );
};

export default page;