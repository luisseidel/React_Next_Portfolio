import Format from '../app/components/format'

export default function Produtos() {

    return (
        <Format>
            <div className="flex flex-col justify-center">

                <div>
                    <h1 className="font-bold text-center text-5xl py-5">Produtos</h1>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>

                <section className="mb-32 text-gray-800 text-center lg:text-left flex flex-row justify-center items-center">

                    <div className="container grid lg:grid-cols-3 gap-x-6 lg:gap-x-12">
                        <div className="bg-white block rounded-lg shadow-lg mb-6 lg:mb-0" data-mdb-ripple="true"
                            data-mdb-ripple-color="light">
                            <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                <img src="https://fruki.com.br/static/724e5a7fadc809365cee654146d2ad9e/f537b/cola-2l.webp" className="w-full rounded-t-lg" />
                            </div>
                            <div className="p-6">
                                <h5 className="font-bold text-lg mb-3">Fruki Cola</h5>
                                <p className="mb-4 pb-2">
                                    Sabor diferenciado da noz de cola para o sabor mais intenso.
                                </p>
                                <a href="https://fruki.com.br/pdf/Portfolio_Digital_Fruki_Bebidas.pdf" target={'_blank'} data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Saiba Mais
                                </a>
                            </div>
                        </div>

                        <div className="bg-white block rounded-lg shadow-lg mb-6 lg:mb-0">
                            <div className="relative overflow-hidden bg-no-repeat bg-cover" data-mdb-ripple="true"
                                data-mdb-ripple-color="light">
                                <img src="https://fruki.com.br/static/8eec7a35f9da9346b82b0ab86a5739c0/f537b/fruki_pet_2l_regular_frontal.webp" className="w-full rounded-t-lg" />
                            </div>
                            <div className="p-6">
                                <h5 className="font-bold text-lg mb-3">Fruki Guaraná</h5>
                                <p className="mb-4 pb-2">
                                    O super refri feito de Guaraná, o melhor da América Latina.
                                </p>
                                <a href="https://fruki.com.br/pdf/Portfolio_Digital_Fruki_Bebidas.pdf" target={'_blank'} data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Saiba Mais
                                </a>
                            </div>
                        </div>

                        <div className="bg-white block rounded-lg shadow-lg">
                            <div className="relative overflow-hidden bg-no-repeat bg-cover" data-mdb-ripple="true"
                                data-mdb-ripple-color="light">
                                <img src="https://fruki.com.br/static/6d6655fc1f20523bd32e8633fde41eca/f537b/laranja-let-2l.webp" className="w-full rounded-t-lg" />
                            </div>
                            <div className="p-6">
                                <h5 className="font-bold text-lg mb-3">Fruki Laranja</h5>
                                <p className="mb-4 pb-2">
                                    A Laranja mais bem quista entre os consumidores. Experimente!
                                </p>
                                <a href="https://fruki.com.br/pdf/Portfolio_Digital_Fruki_Bebidas.pdf" target={'_blank'} data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Saiba Mais
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </Format>
    );
}