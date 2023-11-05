import React from 'react';

const Hero = () => {
    return (
        <div className="hero h-[700px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://marketing-queen.com/wp-content/uploads/2020/03/Hero-Image-Responsiveness_166089026.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Our Bloging Site</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;