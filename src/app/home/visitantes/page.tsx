"use client";

import PageLayout from "@/components/pageLayout"
import React, { useState } from 'react';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export default function SosPage() {
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [sucess, setSucess] = useState(false);
  
  const handleTelefoneChange = (e: { target: { value: string; }; }) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    let formattedTelefone = '';

    console.log(rawValue);

    if (rawValue.length >= 2) {
      formattedTelefone = `(${rawValue.substring(0, 2)})`;

      if (rawValue.length > 2) {
        formattedTelefone += ` ${rawValue.substring(2, 7)}`;

        if (rawValue.length > 7) {
          formattedTelefone += `-${rawValue.substring(7, 11)}`;
        }
      }
    } else {
      formattedTelefone = rawValue;
    }

    setTelefone(formattedTelefone);
  };

  const handleNomeChange = (e: { target: { value: string; }; }) => {
    setNome(e.target.value);
  }

  async function sendVisitantes() {
    const params = {
      "telefone": telefone,
      "nome": nome,
    };
    
    await fetch( apiUrl + '/visitantes', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if(response.ok) {
        setSucess(true);
        setTimeout(() => {
          setSucess(false);
          setNome('');
          setTelefone('');
        }
        , 5000);
      } else {
        if(response.status == 400) {
          response.body?.getReader().read().then(({ value }) => setErrorMessage(new TextDecoder("utf-8").decode(value)));
        }
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <>
    <PageLayout>
      <div className="w-2/3">
          <h1 className='font-display text-3xl'>
          Visitantes
          </h1>
      </div>
      <div>
        { errorMessage ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Ocorreu um erro</strong>
              <span className="block sm:inline">{errorMessage}</span>
            </div>
          ) : <></>
        }
        { sucess ? (
            <div className="bg-accent-green border mt-6 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Enviado!</strong>
              <span className="block sm:inline">Aguente firme, em breve alguém da nossa equipe entrará em contato com você !</span>
            </div>
          ) : <></>
        }
      </div>
      <div className="mt-8">
        <p>Se é a sua primeira vez, primeiramente seja bem-vindo ! Nós oramos e intercedemos por sua vida, e sabemos que você não está aqui por acaso!</p>
        <p>Gostaríamos te conhecer um pouco mais, preencha as informações abaixo para que a gente consiga te conhecer um pouco mais</p>          
        <form className={`font-sans`} action={sendVisitantes}>
            <div className="mb-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Qual seu nome ?</label>
                <input
                  type="text"
                  id="name"
                  name="nome"
                  value={nome}
                  onChange={handleNomeChange} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium">Qual seu telefone ?</label>
                <input
                  type="text"
                  id="last_name"
                  name="telefone"
                  value={telefone}
                  onChange={handleTelefoneChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="(41) 90000-0000"
                  required
                />
              </div>
            </div>
          <button type="submit" className="text-white bg-dark-purple font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
        </form>
      </div>
    </PageLayout>

    </>
  )
}
  