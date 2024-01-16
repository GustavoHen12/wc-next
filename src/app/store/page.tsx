"use client";

import { useState } from "react"
import PageLayout from "@/components/pageLayout"
import Product from "@/components/product"
import Reserva from "@/models/reserva"
import Checkout from "@/components/checkout"

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const products = [
  {
    "id": 1,
    "nome": "Camiseta Jesus is King",
    "preco": 79.90,
    "categoria": "roupa",
    "img": "https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 2,
    "nome": "Shoulder Bag",
    "preco": 59.90,
    "categoria": "acessorio",
    "img": "https://res.cloudinary.com/dhydj6hqf/image/upload/v1704845516/samples/look-up.jpg"
  },
  {
    "id": 3,
    "nome": "Moleskine",
    "preco": 59.90,
    "categoria": "acessorio",
  }
];

export default function StorePage() {
    const [reservas, setReservas] = useState([] as Reserva[]);
    const [openCheckout, setOpenCheckout] = useState(false);

    function reservar(reserva:Reserva) {
        setReservas([...reservas, reserva]);
    }
    
    function cancelarReserva(id:number) {
        setReservas(reservas.filter((reserva) => reserva.id !== id));
    }

    return (
      <>
        <Checkout reserva={reservas} open={openCheckout} onClose={() => {setOpenCheckout(false)}}/>
        <PageLayout>
          <div className="w-2/3">
              <h1 className='font-display text-3xl'>
              Store
              </h1>
          </div>
          <div className="flex flex-col mb-20">
            {
              products.map((product) => {
                return (
                  <Product key={product.id} product={product} onReservar={reservar} onCancelar={cancelarReserva}/>
                )
              })
            }
          </div>
          <div className="fixed bottom-[6rem] left-0 z-40 w-full">
            <div className="flex flex-row justify-center items-center">
              <div className="relative">
                <div className="bg-dark-purple rounded-3xl p-2 absolute top-[-15px] end-[-10px]">
                  <p className="text-white">{reservas.length}</p>
                </div>
                <button className="rounded-xl bg-accent-green w-80 h-12" onClick={() => {setOpenCheckout(true)}}>
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </PageLayout>
      </>
    )
  }
  