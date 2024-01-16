import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import { Poppins, Raleway } from 'next/font/google'

const poppins = Poppins({ weight: ["600"], subsets: ['latin'], variable: '--font-poppins', display: 'swap' })
const raleway = Raleway({ weight: ["800"], subsets: ['latin'], variable: '--font-raleway', display: 'swap' })

export const metadata: Metadata = {
  title: 'WeCare App',
  description: 'WeCare App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${raleway.variable} font-sans`}>
        <main className="min-h-screen flex flex-col p-0 m-0 mb-10">
          {children}
        </main>
      </body>
    </html>
  )
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} ${raleway.className} font-sans`}>
//         <main className="min-h-screen flex flex-col p-0 m-0 mb-10">
//           <div className="container px-10 pt-8">
//           {children}
//           </div>
//           <Navbar />
//         </main>
//       </body>
//     </html>
//   )
// }
