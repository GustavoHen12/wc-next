"use client";

import React, { useState } from 'react';
import Reserva from "@/models/reserva";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Checkout({reserva, open=true, onClose} : {reserva: Reserva[], open: boolean, onClose: () => void}) {
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [sucess, setSucess] = useState(false);
  
  const handleTelefoneChange = (e: { target: { value: string; }; }) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    let formattedTelefone = '';

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
    
    await fetch(apiUrl + '/store', {
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
    <div className={` fixed inset-0 flex justify-center items-center transition-colors
      ${open ? "visible bg-black/20 z-50" : "invisible"}
    `}>
       <div
          onClick={(e) => e.stopPropagation()}
          className={`rounded-xl shadow p-6 transition-all w-auto
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
        >
          <button
            onClick={onClose}
            className="absolute z-50 top-2 right-0 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div className='bg-white rounded-lg px-5 py-6'>
            <div>
            { errorMessage ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Ocorreu um erro, por favor tente novamente</strong>
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
          <div className="">
            <p className="text-sm mb-2">Antes de finalizarmos a reserva dos produtos algumas informações importantes:</p>
            <ul className="list-inside list-disc mb-8">
                <li className="text-slate-700 text-xs">O pagamento deverá ser realizado presencialmente ao retirar o pedido.</li>
                <li className="text-slate-700 text-xs">O pedido deverá ser retirado no próximo culto de sábado</li>
                <li className="text-slate-700 text-xs">O pedido estará sujeito ao estoque dos produtos.</li>
            </ul>

            <div className="mt-2">
                <p className="text-lg mb-2">Pedido</p>
                {
                    reserva.map((item) => {
                        return (
                            <div key={item.id} className="flex flex-row justify-between items-center mb-2">
                                <p className="text-sm">{item.nome}</p>
                                <p className="text-sm">{item.quantidade} x R${item.preco}</p>
                            </div>
                        )
                    })
                }
                <p className='w-full text-right mt-4'>Total: R${new Intl.NumberFormat("en-IN").format([...reserva].reduce((total, item) => total + item.preco, 0))}</p>
            </div>

            <form className={`font-sans mt-4`} action={sendVisitantes}>
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
              <button type="submit" className="text-white bg-dark-purple font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Finalizar reserva</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
  