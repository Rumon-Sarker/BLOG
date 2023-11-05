"use client";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Toaster } from "react-hot-toast";
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utitity/FormHelper";


const page = () => {
    const router = useRouter();
    let
        nameRef,
        emailRef,
        passwordRef = useRef();

    const handelSubmit = async (e) => {
        e.preventDefault();


        let name = nameRef.value;
        let email = emailRef.value;
        let password = passwordRef.value;

        if (IsEmpty(email)) {
            ErrorToast("Email Required!");
        } else if (IsEmail(email)) {
            ErrorToast("Email address is not valid!");
        } else if (IsEmpty(password)) {
            ErrorToast("Password Required!");
        } else if (IsEmpty(name)) {
            ErrorToast("Name Required!");
        } else {
            let res = await axios.post("api/users/registhions", {
                email,
                password,
                name,

            });
            if (res.data.status === "Success") {
                SuccessToast("Registration Success!");
                router.replace("/login");
            } else {
                ErrorToast("Something Went Wrong");
            }
        }
    };
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <section className="bg-gray-500 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6">
                        <h1 className="text-4xl font-bold leading-tight tracking-tight  ">
                            Sign <span className="text-orange-500">Up</span>
                        </h1>
                    </div>
                    <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                            <form onSubmit={handelSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Type Your Name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                         focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        ref={(input) => (nameRef = input)}

                                    />
                                </div>
                                <div>

                                    <input

                                        type="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="Enter Your Email"
                                        ref={(input) => (emailRef = input)}

                                    />
                                </div>
                                <div>
                                    <input

                                        type="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        ref={(input) => (passwordRef = input)}
                                    />
                                </div>

                                <button type='submit' className="w-full bg-slate-400 text-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>

                            </form>
                            <div className="text-sm font-light text-gray-500">
                                Already have an account? <Link href={'/login'} className="font-medium text-orange-600 hover:underline ">Login here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;