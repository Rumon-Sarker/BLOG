import { PrismaClient } from "@prisma/client";

async function getData() {
    const prisma = new PrismaClient();
    let blogs = await prisma.services.findMany({
        orderBy: { id: 'desc' }
    })
    return blogs
}
const Service = async () => {

    let data = await getData()

    return (
        <div>
            <div>
                <div className="text-center mt-10">
                    <h1 className="text-3xl font-bold">Our <span className="text-orange-500">Service</span></h1>
                    <p className="my-5">Praesentium rem sequi voluptatum velit tempore dicta
                        <br />dolor sit amet ex eum consectetur,debitis quibusdam ea rem vitae rem?.</p>
                </div>

                <div className=" grid  grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-7 mt-20">

                    {
                        data?.map((items, index) => <div key={index}>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body ">
                                    <h2 className="card-title">{items?.title}</h2>
                                    <p>{items?.desc}</p>

                                </div>
                            </div>
                        </div>)
                    }


                </div>

            </div>
        </div>
    );
};

export default Service;