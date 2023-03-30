import { SyntheticEvent, useEffect, useState } from 'react';
import AlertError from './AlertError';
import AlertSucess from './AlertSucess';

export default function EmailForm() {
    const [submitted, setSubmitted] = useState(3);
    const [data, setData] = useState({
        from: "", to: "", subject: "", html: ""
    });

    function handleChange(e: React.FormEvent<HTMLFormElement>) {
        const target = e.target as HTMLButtonElement;
        setData({ ...data, [target.id]: target.value });
    }

    function cleanFormFields() {
        let form = document.getElementById("form-contato") as HTMLFormElement;
        if (form != null) {
            form.reset();
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        setData({ ...data, [target.id]: target.value });       

        fetch("http://localhost:3000/api/send-email", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
        })
        .then((res) => {
            if (res.status === 200) {
                setSubmitted(1);
                cleanFormFields();
            }
        })
        .catch((e) => {
            console.log(e);
            setSubmitted(0);
        });
    }

    return (
        <form id="form-contato" className="space-y-8" onSubmit={handleSubmit} onChange={handleChange}>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                <input type="email" id="from" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="nome@provedor.com" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Assunto</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Assunto" required />
            </div>
            <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Mensagem</label>
                <textarea id="html" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Mensagem..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-white hover:text-black hover:outline-dashed hover:outline-black focus:ring-4 focus:outline-none focus:ring-gray-300">Enviar</button>

            {
                (submitted == 1)
            ?
                <AlertSucess message={'Mensagem Sucesso'} /> 
            : 
                (submitted == 0) 
                    ?
                        <AlertError message={'Mensagem de erro'} />
                    :
                        <></>
            }
        </form>

    );
}