"use client";

import { useState, useEffect } from "react";

export default function Carousel({autoSlide = false, autoSlideInterval = 3000, slides, open = true, onClose}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: { src: string }[]; // Add type annotation for slides array
  open: boolean,
  onClose: () => void;
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
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
          className="absolute z-50 top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides.map((img) => (
                <img key={img.src} className="rounded-xl" src={img.src} alt="" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>

          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`
                  transition-all w-3 h-3 bg-white rounded-full
                  ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}