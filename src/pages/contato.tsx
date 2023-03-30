import Format from "../app/components/format";
import EmailForm from "@/app/components/EmailForm";
import { useContext, useState } from 'react';

export default function Contato() {

    return (
        <Format>
            <div>
                <h1 className="font-bold text-center text-5xl py-5">Contato</h1>
                <hr className="h-px my-8 bg-gray-200 border-0" />
            </div>
            <section className="bg-white">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-2xl">
                        Entre em contato conosco!
                    </p>
                    <EmailForm />
                </div>
            </section>
        </Format>
    );
}