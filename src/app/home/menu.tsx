import Link from "next/link"
import { useState } from "react"

import areas from "@/data/areas.json";
import Carousel from "@/components/caroussel";

const areasWeCare = areas;
const bkg_conheca = areasWeCare[Math.floor(Math.random() * areasWeCare.length)];

export default function MenuHome() {
    const [openConhecao, setOpenConheca] = useState(false);
    const [openEventos, setOpenEventos] = useState(false);
    const [eventos, setEventos] = useState([]);

    return (
        <>
            <Carousel slides={areasWeCare} open={openConhecao} onClose={() => setOpenConheca(false)}/>
            <Carousel slides={eventos} open={openEventos} onClose={() => setOpenEventos(false)}/>
            <div className='mt-8 grid grid-cols-3 gap-5'>
                <Link href='/home/visitantes' className="bg-dark-purple  col-span-3 h-24 relative">
                    <div className='absolute bottom-2 right-5 flex flex-row justify-center items-center'>
                        <svg width="45" height="37" viewBox="0 0 45 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.5185 13.0069L41.8889 23.5693M41.8889 23.5693L31.5185 34.1317M41.8889 23.5693H13.3704C10.62 23.5693 7.98226 22.4565 6.03744 20.4756C4.09262 18.4948 3.00003 15.8082 3.00003 13.0069C3.00003 10.2055 4.09262 7.51895 6.03744 5.53812C7.98226 3.55728 10.62 2.44446 13.3704 2.44446H15.963" stroke="#FFFFFB" strokeWidth="4.89712" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h3 className='font-sans font-semibold text-2xl ml-4 text-white'>Visitantes</h3>
                    </div>
                </Link>

                <div className={` col-span-2 relative ${eventos.length > 0 ? "row-span-3 h-80" : "row-span-6 h-100"}` } onClick={() => setOpenConheca(true)}>
                    <div className="absolute top-0 bg-white-purple h-full  z-50"></div>
                    <img src={bkg_conheca.src} className='absolute top-0 h-full w-full  opacity-80' />
                    <h3 className='absolute bottom-2 right-5 font-sans text-2xl z-20'>Conheça</h3>
                </div>
                <div className='bg-accent-green  h-20 flex justify-center items-center'>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_212_134)">
                        <path d="M19.3657 43.0883C18.5012 42.8263 18.0885 42.259 18.08 41.321C18.0688 40.0658 18.7646 39.4219 20.1296 39.4246C21.0135 39.4269 21.3025 39.4998 21.3025 39.723C21.3025 39.8749 21.182 39.896 20.3536 39.8897C19.5047 39.8835 19.3701 39.9084 19.0758 40.1281C18.2989 40.7082 18.376 41.979 19.2194 42.4978C19.534 42.6912 19.6792 42.711 20.4395 42.6638C21.2191 42.6153 21.3025 42.6278 21.3025 42.7921C21.3025 42.8922 21.2327 43.0007 21.1474 43.0333C20.829 43.1549 19.7004 43.1897 19.3657 43.0883V43.0883ZM23.31 43.0074C23.2791 42.9575 23.4563 42.4867 23.704 41.9611C23.9516 41.4355 24.319 40.646 24.5204 40.2068C24.8371 39.516 24.9182 39.4126 25.1206 39.4412C25.3096 39.4679 25.4453 39.6802 25.8266 40.546C26.0862 41.1356 26.4209 41.8833 26.5703 42.2077C26.8925 42.9072 26.9092 43.098 26.6482 43.098C26.5187 43.098 26.3816 42.9441 26.2355 42.6349L26.0167 42.1717L25.083 42.2011L24.1492 42.2305L23.9312 42.6615C23.727 43.0653 23.4439 43.223 23.31 43.0075L23.31 43.0074ZM25.7991 41.6929C25.7803 41.65 25.6307 41.2825 25.4666 40.8763C25.3025 40.4701 25.1406 40.1377 25.1067 40.1377C25.0419 40.1377 24.561 41.1472 24.4379 41.5413C24.3681 41.7647 24.3861 41.771 25.0998 41.771C25.5032 41.771 25.8179 41.7359 25.7991 41.6929V41.6929ZM28.9963 41.2606V39.4232H29.8203C30.8702 39.4232 31.31 39.5956 31.5169 40.0884C31.6122 40.3153 31.6461 40.5853 31.6061 40.7978C31.5414 41.1407 31.23 41.5668 31.044 41.5668C30.8612 41.5668 30.9434 41.7792 31.3649 42.3969C31.5957 42.735 31.7594 43.0366 31.7287 43.0671C31.573 43.222 31.1541 42.9248 30.7539 42.3753C30.3187 41.7778 30.294 41.7613 29.882 41.7912L29.4579 41.8221L29.4274 42.4601C29.4009 43.0144 29.3705 43.0981 29.1965 43.0981C29.0053 43.0981 28.9963 43.015 28.9963 41.2607L28.9963 41.2606ZM30.8803 41.1511C31.0869 40.9894 31.1505 40.8489 31.1505 40.5547C31.1505 40.2249 31.1029 40.1446 30.8172 39.9928C30.5931 39.8738 30.3155 39.8267 29.9708 39.8492L29.4579 39.8825L29.4278 40.6226L29.3976 41.3627H30.0037C30.4617 41.3627 30.676 41.3109 30.8802 41.1511H30.8803ZM33.841 41.2861L33.869 39.4742H35.0986C36.1881 39.4742 36.3322 39.4946 36.3628 39.6529C36.3937 39.8126 36.2962 39.8317 35.4409 39.8331C34.9149 39.8338 34.424 39.8728 34.35 39.9195C34.261 39.9757 34.2263 40.1736 34.2474 40.5049L34.2793 41.0054L35.2016 41.0565C35.9656 41.0988 36.1295 41.1375 36.1572 41.2822C36.1866 41.4354 36.0727 41.4606 35.235 41.4864L34.2793 41.5158L34.2474 42.0163C34.2264 42.3476 34.261 42.5455 34.35 42.6016C34.424 42.6483 34.9115 42.6872 35.4334 42.6881C36.3134 42.6897 36.3823 42.7044 36.3823 42.8938C36.3823 43.0871 36.3139 43.098 35.0976 43.098H33.813L33.841 41.2861ZM13.3624 40.3689C13.3286 40.3354 13.301 36.0443 13.301 30.8332V21.3585L15.6348 19.8162L17.9686 18.2739L17.9949 25.6841C18.0134 30.8836 18.0542 33.0944 18.1315 33.0944C18.1921 33.0944 18.8497 32.7427 19.5927 32.3128C20.3356 31.883 21.1051 31.4411 21.3026 31.3309C21.7112 31.1028 24.0512 29.7578 24.4654 29.5129C24.6159 29.4239 25.0161 29.1994 25.3546 29.014C25.6932 28.8287 26.281 28.4948 26.6609 28.272L27.3517 27.867L27.9432 28.1996C28.2685 28.3825 28.6762 28.6114 28.849 28.7083C29.0219 28.8051 29.7836 29.2405 30.5417 29.6757C32.4112 30.7492 33.1008 31.1426 34.1255 31.7201C34.6051 31.9904 35.3206 32.403 35.7156 32.637C36.1105 32.8709 36.6641 33.1896 36.9456 33.3452C37.2272 33.5009 38.2197 34.0675 39.1512 34.6044C40.0827 35.1414 40.9717 35.6447 41.1269 35.723L41.409 35.8654V38.0976C41.409 39.3253 41.3704 40.3536 41.3232 40.3826C41.2378 40.435 40.6873 40.1335 36.6901 37.8443C35.5335 37.1818 34.4457 36.5597 34.2728 36.4617C34.1 36.3638 33.3614 35.9398 32.6315 35.5196C31.9016 35.0994 31.0737 34.6341 30.7916 34.4855C30.2796 34.2159 30.0971 34.1092 29.6123 33.7961C29.471 33.7048 28.9283 33.3948 28.4063 33.1071C27.4819 32.5976 27.1197 32.4868 27.0015 32.6771C26.9698 32.7283 26.6092 32.9571 26.2005 33.1855C25.7917 33.4139 25.2264 33.7324 24.9443 33.8934C23.6639 34.624 19.6466 36.9274 19.0457 37.2754C18.679 37.4879 17.7816 38.0006 17.0515 38.4148C16.3215 38.8291 15.5136 39.293 15.2563 39.4458C13.9919 40.1965 13.4531 40.4592 13.3624 40.3689H13.3624ZM39.7163 31.3735C38.9828 30.9911 37.7245 30.3261 36.92 29.8958C36.1155 29.4654 35.4153 29.1133 35.3641 29.1133C35.3129 29.1133 35.2556 29.0788 35.2368 29.0368C35.218 28.9947 34.9718 28.8462 34.6897 28.7068C34.4076 28.5674 33.8767 28.2874 33.51 28.0846C33.1432 27.8817 32.2892 27.4267 31.6122 27.0735C30.9351 26.7202 30.035 26.2468 29.6118 26.0214C29.1886 25.796 28.5654 25.4725 28.2269 25.3023C27.8884 25.1322 27.4845 24.9064 27.3293 24.8005L27.0472 24.608V22.4713C27.0472 21.0383 27.0829 20.3346 27.1556 20.3346C27.2558 20.3346 30.0264 21.7276 33.6126 23.581C35.5221 24.5679 36.452 25.0302 36.5274 25.0302C36.5604 25.0302 36.5875 23.2387 36.5875 21.049V17.0678L31.8943 14.7457C29.313 13.4685 27.1672 12.3776 27.1257 12.3215C27.0843 12.2654 27.0496 11.2892 27.0488 10.1523C27.0472 8.48311 27.0739 8.08527 27.1858 8.08527C27.2621 8.08527 28.2892 8.54846 29.4683 9.1146C32.9913 10.8061 35.047 11.7871 37.1517 12.781C37.7159 13.0474 38.7249 13.5269 39.3939 13.8465C40.0629 14.166 40.7207 14.4693 40.8557 14.5204L41.1011 14.6132V23.3434C41.1011 28.145 41.0896 32.0725 41.0755 32.0712C41.0613 32.0697 40.4497 31.756 39.7162 31.3736L39.7163 31.3735Z" fill="#FFFFFB"/>
                        </g>
                        <circle cx="27.5" cy="27.5" r="25.5" stroke="#FFFFFB" strokeWidth="2.35714"/>
                        <circle cx="27.5" cy="27.5" r="25.5" stroke="#FFFFFB" strokeWidth="2.35714"/>
                        <defs>
                        <clipPath id="clip0_212_134">
                        <rect width="28.108" height="35.0625" fill="white" transform="translate(13.301 8.08527)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={`bg-white-purple  flex flex-col justify-between items-center h-auto ${eventos.length > 0 ? "row-span-3" : "row-span-5 h-100"}`}>
                    <div className='mt-8 flex flex-col justify-between items-center h-2/3'>
                        <div className='flex flex-col justify-between items-center' onClick={()=> window.open("https://www.instagram.com/wecaremvmnt/", "_blank")}>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36 3H14C7.92487 3 3 7.92487 3 14V36C3 42.0751 7.92487 47 14 47H36C42.0751 47 47 42.0751 47 36V14C47 7.92487 42.0751 3 36 3Z" stroke="#161B33" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M37.1 12.9H37.122M33.8 23.614C34.0715 25.445 33.7588 27.3149 32.9063 28.9578C32.0538 30.6008 30.7049 31.9331 29.0516 32.7653C27.3982 33.5975 25.5246 33.8871 23.6971 33.5931C21.8697 33.299 20.1815 32.4362 18.8726 31.1274C17.5638 29.8185 16.701 28.1303 16.4069 26.3029C16.1129 24.4754 16.4025 22.6018 17.2347 20.9484C18.0669 19.2951 19.3992 17.9462 21.0422 17.0937C22.6851 16.2412 24.555 15.9285 26.386 16.2C28.2536 16.477 29.9827 17.3472 31.3177 18.6823C32.6528 20.0173 33.523 21.7464 33.8 23.614Z" stroke="#161B33" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <div className={`${eventos.length > 0 ? "" : "mt-5"}`} onClick={()=> window.open("https://www.youtube.com/@WeCareMovement", "_blank")}>
                            <svg width="55" height="39" viewBox="0 0 55 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 27.5L36.2725 19.25L22 11V27.5ZM53.79 5.9675C54.1475 7.26 54.395 8.9925 54.56 11.1925C54.7525 13.3925 54.835 15.29 54.835 16.94L55 19.25C55 25.2725 54.56 29.7 53.79 32.5325C53.1025 35.0075 51.5075 36.6025 49.0325 37.29C47.74 37.6475 45.375 37.895 41.745 38.06C38.17 38.2525 34.8975 38.335 31.8725 38.335L27.5 38.5C15.9775 38.5 8.8 38.06 5.9675 37.29C3.4925 36.6025 1.8975 35.0075 1.21 32.5325C0.8525 31.24 0.605 29.5075 0.44 27.3075C0.2475 25.1075 0.165 23.21 0.165 21.56L0 19.25C0 13.2275 0.44 8.8 1.21 5.9675C1.8975 3.4925 3.4925 1.8975 5.9675 1.21C7.26 0.8525 9.625 0.605 13.255 0.44C16.83 0.2475 20.1025 0.165 23.1275 0.165L27.5 0C39.0225 0 46.2 0.44 49.0325 1.21C51.5075 1.8975 53.1025 3.4925 53.79 5.9675Z" fill="#161B33"/>
                            </svg>
                        </div>

                        <div className={`${eventos.length > 0 ? "" : "mt-5"}`} onClick={()=> window.open("https://wecaremovement.com.br/", "_blank")}>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 0C16.5326 0 10.8097 2.37053 6.5901 6.5901C2.37053 10.8097 0 16.5326 0 22.5C0 28.4674 2.37053 34.1903 6.5901 38.4099C10.8097 42.6295 16.5326 45 22.5 45C28.4674 45 34.1903 42.6295 38.4099 38.4099C42.6295 34.1903 45 28.4674 45 22.5C45 16.5326 42.6295 10.8097 38.4099 6.5901C34.1903 2.37053 28.4674 0 22.5 0ZM2.775 24.2H9.05C9.15 26.475 9.4675 28.735 10 30.95H4.6C3.59301 28.8272 2.9749 26.541 2.775 24.2ZM24.2 10.7V2.975C26.6092 3.89056 28.5889 5.67406 29.75 7.975C30.2625 8.8425 30.715 9.745 31.1 10.675L24.2 10.7ZM32.25 14.075C32.83 16.2825 33.175 18.545 33.275 20.825H24.2V14.075H32.25ZM20.8 2.975V10.7H13.9C14.2857 9.76924 14.7368 8.86698 15.25 8C16.4062 5.68963 18.3865 3.89665 20.8 2.975ZM20.8 14.075V20.825H11.75C11.85 18.545 12.195 16.2825 12.775 14.075H20.8ZM9.05 20.8H2.775C2.9749 18.459 3.59301 16.1728 4.6 14.05H10C9.46648 16.2641 9.14833 18.5246 9.05 20.8ZM11.75 24.2H20.8V30.95H12.775C12.1951 28.7427 11.8515 26.48 11.75 24.2ZM20.825 34.2V41.925C18.4158 41.0094 16.4361 39.2259 15.275 36.925C14.7618 36.058 14.3107 35.1558 13.925 34.225L20.825 34.2ZM24.2 41.925V34.325H31.1C30.7143 35.2558 30.2632 36.158 29.75 37.025C28.5889 39.3259 26.6092 41.1094 24.2 42.025V41.925ZM24.2 30.825V24.075H33.25C33.1485 26.355 32.8049 28.6177 32.225 30.825H24.2ZM35.975 24.075H42.25C42.0501 26.416 41.432 28.7022 40.425 30.825H35C35.525 28.65 35.8425 26.4325 35.95 24.2L35.975 24.075ZM35.975 20.7C35.8605 18.4658 35.534 16.2475 35 14.075H40.4C41.4075 16.2 42.025 18.485 42.225 20.825L35.975 20.7ZM38.475 10.7H34C33.1903 8.42575 32.0167 6.29806 30.525 4.4C33.636 5.79645 36.3382 7.96513 38.375 10.7H38.475ZM14.475 4.4C12.9833 6.29806 11.8097 8.42575 11 10.7H6.625C8.6618 7.96513 11.364 5.79645 14.475 4.4ZM6.6 34.4H11C11.8097 36.6743 12.9833 38.8019 14.475 40.7C11.3554 39.2825 8.65237 37.0874 6.625 34.325L6.6 34.4ZM30.5 40.7C31.9917 38.8019 33.1653 36.6743 33.975 34.4H38.375C36.3257 37.0982 33.6246 39.2316 30.525 40.6L30.5 40.7Z" fill="#161B33"/>
                            </svg>
                        </div>
                    </div>                    
                    <h3 className={`mb-5 font-sans text-2xl ${eventos.length > 0 ? "" : "mt-5"}`}>Links</h3>
                </div>
                
                {
                    eventos.length > 0 ? (
                        <div className='bg-white-purple  h-24 col-span-2 relative' onClick={() => setOpenEventos(true)}>
                            <h3 className='absolute bottom-2 right-5 font-sans text-2xl'>Eventos</h3>
                        </div>
                    ) : (<div className='h-24 col-span-2'></div>)
                }
            </div>
        </>
    )
}