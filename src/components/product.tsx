"use client";

import { useState } from 'react';
import Reserva from '@/models/reserva';

export default function Product({product, onReservar, onCancelar}: { product: any, onReservar: (reserva:Reserva) => void, onCancelar: (id:number) => void }) {
    const tamanhos_disponiveis = ["P", "M", "G", "GG"];
    const [quantidade, setQuantidade] = useState(1);
    const [tipo, setTipo] = useState("Masculino");
    const [tamanho, setTamanho] = useState("P");
    const [reservado, setReservado] = useState(false);

    function reservar() {
        setReservado(true);
        const reserva = new Reserva(product.id, tamanho, quantidade, tipo, product.nome, product.preco);
        onReservar(reserva);
    }

    function cancelar() {
        setReservado(false);
        onCancelar(product.id);
    }
    return (
        <>
            <div className="mt-8 w-full flex flex-row">
                {
                    product.img ? (
                        <div className="ml-[-10px] w-2/5">
                            <img className="rounded-xl h-full object-cover object-center" src={product.img} alt="" />
                        </div>
                    ) : <></>
                }
                <div className={`flex flex-col justify-between ${product.img ? "ml-5 min-h-60 max-h-72 w-3/5" : "ml-[-10px] min-h-50 w-3/5"}`}>
                    <div>
                        <p className="text-xl font-sans">{product.nome}</p>
                        <p className="text-xl font-sans mt-1">R${product.preco}</p>
                        {
                            product.categoria === "roupa" ?
                            (
                                <div>
                                    <div className="flex flex-row gap-2 mt-2">
                                        <button
                                            className={`rounded-lg text-sm px-2 py-1 flex items-center justify-center ${tipo === "Masculino" ? "bg-dark-purple text-white" : "border-4 border-dark-purple text-black"}`}
                                            onClick={() => {setTipo("Masculino")}}
                                        >
                                            Masculino
                                        </button>
                                        <button
                                            className={`rounded-lg text-sm px-2 py-1 flex items-center justify-center ${tipo === "Feminino" ? "bg-dark-purple text-white" : "border-4 border-dark-purple text-black"}`}
                                            onClick={() => {setTipo("Feminino")}}
                                        >
                                            Feminino
                                        </button>
                                    </div>
                                    <div className="flex flex-row gap-2 mt-2">
                                        {
                                            tamanhos_disponiveis.map((tamanho_disponivel) => {
                                                return (
                                                    <button
                                                        key={tamanho_disponivel}
                                                        className={`rounded-lg text-sm px-2 py-1 flex items-center justify-center ${tamanho === tamanho_disponivel ? "border-dark-purple border-4 bg-dark-purple text-white" : "border-4  border-dark-purple text-black"}`}
                                                        onClick={() => {setTamanho(tamanho_disponivel)}}
                                                    >
                                                        {tamanho_disponivel}
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                            :
                            <></>
                        }
                    </div>
                    <div>
                        <div className="mt-2 h-10 w-28 flex flex-col">
                            <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                                <button
                                    className="border-4 border-dark-purple hover:border-gray-400 transition-all h-full w-20 rounded-l-lg cursor-pointer"
                                    onClick={() => {setQuantidade(quantidade > 1 ? quantidade - 1 : 1)}}
                                >
                                    <span className="m-auto text-lg text-black font-thin">−</span>
                                </button>
                                <input type="number" className="border-t-4 border-b-4 border-dark-purple text-center w-full font-semibold text-md text-black focus:text-gray-400  md:text-basecursor-default flex items-center" value={quantidade}></input>
                                <button
                                    className="border-4 border-dark-purple hover:border-gray-400 transition-all h-full w-20 rounded-r-lg cursor-pointer"
                                    onClick={() => {setQuantidade(quantidade + 1)}}
                                >
                                    <span className="m-auto text-lg text-black font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="mt-4">
                            {
                                reservado ?
                                <button
                                    className="h-8 bg-dark-purple hover:opacity-75 rounded-lg text-white flex flex-rol items-center justify-center w-4/5"
                                    onClick={cancelar}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    <span className="ml-4">Retirar</span>
                                </button>
                                :
                                <button
                                    className="h-8 bg-dark-purple hover:opacity-75 rounded-lg text-white flex flex-rol items-center justify-center w-4/5"
                                    onClick={reservar}
                                >
                                    <span className="text-2xl text-white font-thin">+</span>
                                    <span className="ml-4">Reservar</span>
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}