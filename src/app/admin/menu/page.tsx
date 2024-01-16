import { Poppins, Raleway } from 'next/font/google'

const poppins = Poppins({ weight: ["600"], subsets: ['latin'], variable: '--font-poppins', display: 'swap' })
const raleway = Raleway({ weight: ["800"], subsets: ['latin'], variable: '--font-raleway', display: 'swap' })

export default function SosPage() {
    return (
      <>
      <div className="container px-10 pt-8">
        <div className="w-2/3">
            <h1 className='font-display text-3xl'>
            Menu
            </h1>
        </div>
        <div className="mt-8">
            <button className="mb-4 text-white bg-dark-purple font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Pedidos S.O.S
            </button>
            <button className="mb-4 text-white bg-dark-purple font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Lista visitantes
            </button>
            <button className="mb-4 text-white bg-dark-purple font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Reservas Store
            </button>
            <button className="mb-4 text-white bg-dark-purple font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Produtos Store
            </button>
            <button className="mb-4 text-white bg-dark-purple font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Eventos
            </button>
        </div>
      </div>
      </>
    )
  }
  