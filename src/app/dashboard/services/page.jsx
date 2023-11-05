'use client'
import DashboardMain from '@/components/DashboardMain';
import { ServiceUpdateDialog } from '@/components/ServiceUpdateDialog';
import { DeleteAlertServicePost } from '@/utitity/DeleteAlert';
import { SuccessToast } from '@/utitity/FormHelper';
import { create_service__Request__API, read_all_service__Request__API } from '@/utitity/curdAllApi';
import { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
const Services = () => {

    const [service, setService] = useState([]);
    let titleRef,
        descRef = useRef();
    const submit = (e) => {
        e.preventDefault();
        let title = titleRef.value;
        let desc = descRef.value;


        create_service__Request__API({ title, desc }).then((res) => {
            if (res) {
                SuccessToast("Service add successful!");
                titleRef.value = "";
                descRef.value = "";
                read_all_service__Request__API().then((res) => {
                    setService(res.data);
                });
            }
        });
    };
    const deleteServiceControl = (id) => {
        DeleteAlertServicePost(id).then((res) => {
            if (res) {
                read_all_service__Request__API().then((res) => {
                    setService(res.data);
                });
            }
        });
    };

    useEffect(() => {
        read_all_service__Request__API().then((res) => {
            setService(res.data);
        });
    }, []);
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <DashboardMain>
                <section className="bg-gray-100 my-10 ">
                    <div className="py-8 lg:py-16 px-4 mx-auto ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Create<span className='text-orange-500'>Services</span></h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <input ref={(input) => (titleRef = input)} type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <label htmlFor="imgCdn" className="block mb-2 text-sm font-medium text-gray-900">Discriptons</label>
                                <textarea ref={(input) => (descRef = input)} type="text" id="imgCdn" className="block p-3 w-full h-[200px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required></textarea>
                            </div>

                            <button onClick={submit} type="submit" className="py-3 px-5 text-sm font-medium bg-gray-400 text-center rounded-lg w-full">Create Services</button>
                        </form>
                    </div>
                </section>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Desciption</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                service?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item?.title}</td>
                                        <td>{item?.desc}</td>
                                        <td><button onClick={() => deleteServiceControl(item?.id)} >Delete</button></td>
                                        <td><ServiceUpdateDialog id={item?.id} /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </DashboardMain>

        </div>
    );
};

export default Services;