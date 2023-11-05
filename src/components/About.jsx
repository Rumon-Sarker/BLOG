import React from 'react';

const About = () => {
    return (
        <>
            <div className='my-20'>
                <div className='md:flex mt-16  '>
                    <div className=' md:w-1/2'>
                        <img className='' src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png" alt="" />
                    </div>
                    <div className="text-start mt-10">
                        <h1 className="text-3xl font-bold">About <span className="text-orange-500">Us</span></h1>
                        <p className='my-10'>Ipsum, dolor sit amet consectetur adipisicing elit. Odio, rerum consequatur
                            <br /> fugiat maxime iure nam numquam doloremque ex maiores fuga asperiores
                            <br />perspiciatis officia illo quod
                            quis ad eligendi illum vero!
                        </p>

                        <p>Dolor sit amet consectetur adipisicing elit. Porro asperiores accusantium a quos voluptas nulla dolore dicta <br />
                            illum nobis dignissimos molestias odit voluptates quasi sequi eum, similique non deserunt magni.
                        </p>

                        <p className='my-10'>
                            Ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad provident cupiditate veniam! Itaque aliquid illum
                            <br />at reiciendis atque ea rem aspernatur commodi vitae ipsum, velit, eaque nostrum autem asperiores.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default About;