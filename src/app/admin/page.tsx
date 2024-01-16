import { Poppins, Raleway } from 'next/font/google'

const poppins = Poppins({ weight: ["600"], subsets: ['latin'], variable: '--font-poppins', display: 'swap' })
const raleway = Raleway({ weight: ["800"], subsets: ['latin'], variable: '--font-raleway', display: 'swap' })


export default function SosPage() {
    return (
      <>
      <div className="container px-10 pt-8">
        <div className="w-2/3">
            <h1 className='font-display text-3xl'>
            Login
            </h1>
        </div>
        <div className="mt-8">
          <form>
              <div className="mb-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Login</label>
                  <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
              </div>
              <div className="mb-6">
                <div>
                  <label htmlFor="last_name" className="block mb-2 text-sm font-medium">Senha</label>
                  <input type="password" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>
              </div>
            <button type="submit" className="text-white bg-dark-purple font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
          </form>
        </div>
      </div>
      </>
    )
  }
  