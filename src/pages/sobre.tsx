
import Format from "../app/components/format";

export default function Sobre() {

    return (
        <Format>
            <div className="flex flex-col justify-center">
                <div>
                    <h1 className="font-bold text-center text-5xl py-5">Sobre</h1>
                    <hr className="h-px my-8 bg-gray-200 border-0 " />
                </div>
                <section className="bg-white">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg ">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Somos Fruki Bebidas</h2>
                            <p className="mb-4">
                                E se a gente te contar que a gentileza sempre fez parte da nossa história? Nestes quase 100 anos de trajetória, atuando como uma das principais empresas de bebidas nos estados de SC e RS, mais do que produzir bebidas, nutrimos conexões verdadeiras. É um orgulho olhar para trás e ver quantos relacionamentos de confiança criamos. E o sabor que isso nos trouxe. Seguimos olhando para a frente e decididos a transformar o futuro. Mantendo um olhar gentil para todos que fazem parte da nossa vida e inspirando essa atitude em cada um.    
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://fruki.com.br/static/0c3c337f60696998e7a492485e3c5705/2b8d7/new1.webp" alt="empresa" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://fruki.com.br/static/baa90b460bfd460000595f85b634b458/10f17/matriz-lajeado-min.webp" alt="lajeado" />
                        </div>
                        <div className="font-light text-gray-500 sm:text-lg ">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Nossa História</h2>
                            <p className="mb-4">
                                Em 1924, quando entrou oficialmente em funcionamento a fábrica de Bebidas Kirst & Cia, em Arroio do Meio, Emílio Kirst não poderia imaginar o tamanho do legado que deixaria às gerações seguintes da família. Naquele ano, o bisavô da atual geração sob o comando da Fruki obteve conhecimento técnico para criar uma cervejaria. A pequena fábrica cervejeira produzia apenas 200 garrafas por dia.
                                Hoje, nosso parque industrial possui capacidade de 420 milhões de litros/ano com um amplo portfólio de bebidas. Já são quase 100 anos de história em que construímos relações de confiança com clientes e consumidores.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://fruki.com.br/static/34bfa12e2a81ae7b35528639e5103e35/d6f7e/img_14.webp" alt="industria" />
                                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://fruki.com.br/static/1988c3d60a13e32c2507e0c913dca4cc/e8c6f/img_6.webp" alt="caminhao" />
                        </div>
                    </div>
                </section>
            </div>
        </Format>
    );
}