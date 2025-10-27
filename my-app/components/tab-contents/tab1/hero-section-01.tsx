'use client';

import React from 'react';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  // Close on ESC & click outside (mobile overlay)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <section className="bg-[url('/bbblurry.svg')] w-full bg-no-repeat bg-cover bg-center text-sm flex flex-col items-center justify-center py-20">
        <div className="flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full w-max px-4 py-2 mb-8">
          <span className="text-gray-800">智慧實驗室水質方案，精準穩定每一次測量</span>
          <button className="flex items-center gap-1 font-medium">

          </button>
        </div>

        <h5 className="text-4xl md:text-7xl font-medium max-w-[850px] text-center" style={{ color: '#58629D' }}>
          桌上型水質檢測設備
        </h5>

        <h5 className="text-3xl md:text-5xl font-medium max-w-[850px] text-center mt-4" style={{ color: '#58629D' }}>
          BENCHTOP ANALYZER
        </h5>

        <p className="text-sm md:text-base max-w-2xl text-center mt-6 text-gray-700">

        </p>
      </section>
  );
}
