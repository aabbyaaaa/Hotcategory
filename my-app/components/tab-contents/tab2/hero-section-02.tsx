"use client";

import { Badge } from "@/components/ui/badge";
import GlareHover from "@/components/ui/glare-hover";

function HeroSection02() {
  return (
    <div className="w-full py-10 lg:py-0">
      <div
        className="container mx-auto"
        style={{
          backgroundImage: "url('/bbblurry_pink.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <Badge variant="outline" className="flex items-center gap-2 border border-slate-700 hover:border-slate-400/70 rounded-full w-max px-4 py-2 mb-8 text-1xl px-4 py-2">戶外到現場，專業級水質檢測好幫手</Badge>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-medium" style={{ color: '#A979B2' }}>
                掌上型
              </h2>
              <h2 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-medium" style={{ color: '#A979B2' }}>
                水質檢測設備
              </h2>
              <p className="text-3xl leading-relaxed tracking-tight max-w-md text-left" style={{ color: '#925E9B' }}>
                Portable Testers
              </p>
            </div>

          </div>
          <div className="grid grid-cols-2 gap-8" style={{ width: '85%' }}>
            <GlareHover
              width="100%"
              height="100%"
              background="transparent"
              borderRadius="0.375rem"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.3}
              transitionDuration={1200}
              className="aspect-square"
            >
              <img
                src="/Portable pHCondDO meter01.png"
                alt="掌上型水質檢測設備 1"
                className="w-full h-full object-cover rounded-md"
              />
            </GlareHover>
            <GlareHover
              width="100%"
              height="100%"
              background="transparent"
              borderRadius="0.375rem"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.3}
              transitionDuration={2800}
              className="row-span-2"
            >
              <img
                src="/Portable pHCondDO meter02.png"
                alt="掌上型水質檢測設備 2"
                className="w-full h-full object-cover rounded-md"
              />
            </GlareHover>
            <GlareHover
              width="100%"
              height="100%"
              background="transparent"
              borderRadius="0.375rem"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.3}
              transitionDuration={1200}
              className="aspect-square"
            >
              <img
                src="/Portable pHCondDO meter03.png"
                alt="掌上型水質檢測設備 3"
                className="w-full h-full object-cover rounded-md"
              />
            </GlareHover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection02;
