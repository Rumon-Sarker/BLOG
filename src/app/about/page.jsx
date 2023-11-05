import About from '@/components/About';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* ============Headers Section =============== */}
            <Header></Header>

            <About></About>

            {/* =============Footer section=============== */}
            <Footer></Footer>
        </div>
    );
};

export default page;