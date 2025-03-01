"use client";

import Input from "@/components/input";
import Link from "next/link";
import { useCallback, useState } from "react";
import React from "react";

const Auth = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [varient, setVarient] = useState('login');

    const toggleVarient = useCallback(() => {
        setVarient((currentVarient) =>  currentVarient === 'login' ? 'register' : 'login')
    }, []);
    
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-black/50">

                <nav className="px-12 py-5">
                    <img src="/images/netflix-logo.png" className="h-12" alt="logo" />
                </nav>

                <div className="flex justify-center">
                    <div className="bg-black p-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {varient === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                    <div className="flex flex-col gap-4">
                        {varient === 'register' && (
                            <Input
                            id="username"
                            label="Username"
                            type="text"
                            value={username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
                        )}

                        <Input
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />

                        <Input
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />

                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {varient === 'login' ? 'Sign in' : 'Sign up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {varient === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                         
                                <span onClick={toggleVarient} className="text-white ml-1 hover:underline cursor-pair">{varient === 'login' ? 'Create an account' : 'Log in' }</span>
                     
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;