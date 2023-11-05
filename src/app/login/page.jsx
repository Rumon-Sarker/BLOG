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
        emailRef,
        passwordRef = useRef();

    const handelSubmit = async (e) => {
        e.preventDefault();

        let email = emailRef.value;
        let password = passwordRef.value;

        if (IsEmpty(email)) {
            ErrorToast("Email Required!");
        } else if (IsEmail(email)) {
            ErrorToast("Email address is not valid!");
        } else if (IsEmpty(password)) {
            ErrorToast("Password Required!");
        }
        else {
            let res = await axios.post("api/users/login", {
                email,
                password,

            });
            if (res.data.status === "Success") {
                SuccessToast("Login Success!");
                router.replace("/dashboard");
            } else {
                ErrorToast("Something Went Wrong");
            }
        }
    };
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <section className="bg-gray-50 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6">
                        <h1 className="text-4xl font-bold leading-tight tracking-tight  ">
                            Log<span className="text-orange-500">In</span>
                        </h1>
                    </div>
                    <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                            <form onSubmit={handelSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input
                                        ref={(input) => (emailRef = input)}
                                        type="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="Enter Your Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input
                                        ref={(input) => (passwordRef = input)}
                                        type="password"
                                        placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    />
                                </div>

                                <button type="submit" className="w-full bg-slate-400 text-black font-bold rounded-lg text-sm px-5 py-2.5 text-center">Login</button>

                            </form>
                            <p className="text-sm font-light text-gray-500">
                                If you have no Account? <Link href={'/registration'} className="font-medium text-orange-600 hover:underline ">Sign_Up here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;