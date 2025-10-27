"use client";

import { Badge } from "@/components/ui/badge";
import GlareHover from "@/components/ui/glare-hover";

export default function HeroSection03() {
  return (
    <div className="w-full py-10 lg:py-0">
      <div
        className="container mx-auto"
        style={{
          backgroundImage: "url('/bbblurry_yellow.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <Badge
                variant="outline"
                className="flex items-center gap-2 rounded-full w-max px-4 py-2 mb-8 text-1xl"
                style={{
                  borderColor: '#E6E07E',
                  color: '#B8A948'
                }}
              >
                輕巧隨身，快速掌握水質數據
              </Badge>
            </div>
            <div className="flex flex-col gap-6">
              <h2
                className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-medium"
                style={{ color: '#D2C85E' }}
              >
                筆型
              </h2>
              <h2
                className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-medium"
                style={{ color: '#D2C85E' }}
              >
                水質檢測設備
              </h2>
              <p
                className="text-3xl leading-relaxed tracking-tight max-w-md text-left"
                style={{ color: '#E6E07E' }}
              >
                Pocket Testers
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center" style={{ width: '85%', margin: '0 auto' }}>
            <GlareHover
              width="100%"
              height="100%"
              background="transparent"
              borderRadius="0.375rem"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.3}
              transitionDuration={1500}
            >
              <img
                src="/pocket_all.png"
                alt="筆型水質檢測設備"
                className="w-full h-full object-contain rounded-md"
              />
            </GlareHover>
          </div>
        </div>
      </div>
    </div>
  );
}
