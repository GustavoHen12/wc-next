"use client";

import { useState, useEffect } from "react";
import areas from "@/data/areas.json";
import WeCareIcon from "./assets/weCareIcon";
import ScrollIcon from "./assets/scrollIcon";
import MenuHome from "./menu";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function HomePage() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [openEventos, setOpenEventos] = useState(false);
    const [eventos, setEventos] = useState([]);
    
    useEffect(() => {
        // async function getEventos() {
        //     const res = await fetch(apiUrl + '/eventos')
        //     const json = await res.json()
        //     setEventos(json);
        // }
    
        // getEventos(); 
    }, []);
    
    return (
        <>
        <ParallaxProvider>
            <div className='relative w-full' >
                <div className="absolute top-0 left-0 z-20 top-0 w-full min-h-screen">
                    <img src='arteBackground.png' alt="fundo" className='min-w-screen min-h-screen object-fill object-top overflow-hidden z-20'/>
                </div>
                <div className="fixed top-0 left-0 z-30 top-0 w-full min-h-screen">
                    <img src='noise.png' alt="fundo" className='min-w-screen min-h-screen object-fill object-top'/>
                </div>

                <div className='absolute top-0 left-0 w-full'>
                    <div className='relative'>
                        <Parallax speed={-20}>
                            <div className="w-full min-h-screen">
                                <img src='fundo.png' alt="fundo" className='w-full min-h-screen object-fill object-center'/>
                            </div>
                            <div className='absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#0D0116]'></div>
                            <div className='absolute z-10 bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#0D0116]'></div>
                        </Parallax>
                        <div className=' absolute top-10 left-1/2 transform -translate-x-1/2 w-2/3 flex flex-col justify-center items-center'>
                            <h1 className='font-display text-3xl text-center mb-6 mt-20'>
                                Bem vindo a We Care&nbsp;
                            </h1>
                            <div>
                                <WeCareIcon />
                            </div>
                        </div>
                        <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20' >
                            <ScrollIcon />
                        </div>
                    </div>
                    <div className="absolute w-full z-40 mt-20 px-10">
                        <MenuHome />
                    </div>
                </div>
            </div>
        </ParallaxProvider>
        </>
  )
}
