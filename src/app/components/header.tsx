import Link from './link';
import Image from 'next/image';

export default function header() {
    return (
        <header className="flex flex-wrap justify-around items-center bg-green-900 text-gray-100">
            <div className="container flex flex-wrap justify-around items-center pt-3 px-5">
                <Link href={'/'} >
                    <Image src="/fruki_logo.svg" alt="logo" width={191} height={26} />
                </Link>
                <nav className="pb-3">
                    <ul className="grid grid-flow-col items-center gap-10 text-md font-bold uppercase tracking-wider">
                        <li className="button border py-2 px-4 rounded-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-white hover:text-black">
                            <Link href={'/produtos'} >
                                Produtos
                            </Link>
                        </li>
                        <li className="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:underline">
                            <Link href={'/sobre'}>
                                Sobre
                            </Link>
                        </li>
                        <li className="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:underline">
                            <Link href={'/contato'}>
                                Contato
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
}