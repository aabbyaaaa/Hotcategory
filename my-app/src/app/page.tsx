import { Header } from "@/components/header-2";
import { WavyBackground } from "../components/ui/shadcn-io/wavy-background";
import { Feature108Advanced } from "@/components/shadcnblocks-com-feature108-advanced";
import { Tab1Content } from "@/components/tab-contents/tab1/tab-1";
import { Tab2Content } from "@/components/tab-contents/tab2/tab-2";
import { Tab3Content } from "@/components/tab-contents/tab3/tab-3";
import { Component as IconTabs3D } from "@/components/3d-icon-tabs-1";
import { Zap, Layout, Pointer } from "lucide-react";
import RotatingText from "@/components/ui/rotating-text";
import { ScrollToTop } from "@/components/scroll-to-top";
import PromoButton from "@/components/promo-button";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section with WavyBackground - Full Width */}
      <WavyBackground
        containerClassName="w-full"
        className="w-full"
        colors={["#E1F6FA", "#B7E8F5", "#7ED6E6", "#47B9D7"]}
        backgroundFill="white"
        blur={10}
        waveOpacity={0.5}
        speed="slow"
      >
        <div className="max-w-[1200px] mx-auto py-20 px-4 text-center">
          {/* DLAB LOGO - 最上方 */}
          <div className="mb-12 flex justify-center">
            <img
              src="/dlab_logo.png"
              alt="DLAB Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* H1 大標：智慧水質檢測系列　實驗室到現場一次搞定 */}
          <h1 className="text-5xl font-bold text-gray-900 mb-10">
            智慧水質檢測系列　實驗室到現場一次搞定
          </h1>

          {/* RotatingText 區塊 */}
          <div className="inline-flex items-center whitespace-nowrap text-3xl font-semibold text-gray-700">
            <span>一機掌握</span>
            <RotatingText
              texts={['快速', '準確', '全面']}
              mainClassName="inline-block px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg"
            />
            <span>，專業數據即時呈現</span>
          </div>
        </div>
      </WavyBackground>

      {/* 限時優惠按鈕 */}
      <div className="flex justify-center items-center py-8 bg-zinc-50">
        <PromoButton />
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        <main className="flex w-full flex-col items-center bg-white" style={{ maxWidth: '1440px' }}>
          <div className="w-full max-w-[1200px] mx-auto">
            <Feature108Advanced
              tabs={[
                {
                  value: "tab-1",
                  icon: <Zap className="h-auto w-8 shrink-0" />,
                  label: "桌上型",
                  content: <Tab1Content />,
                  imageUrl: "/desktop_card.png",
                  imageSize: 250,
                  imageLeftOffset: -30,
                  imageAreaWidth: "40%",
                  textAreaWidth: "60%",
                },
                {
                  value: "tab-2",
                  icon: <Pointer className="h-auto w-8 shrink-0" />,
                  label: "掌上型",
                  content: <Tab2Content />,
                  imageUrl: "/Portable pHCondDO meter02 - card.png",
                },
                {
                  value: "tab-3",
                  icon: <Layout className="h-auto w-8 shrink-0" />,
                  label: "筆　型",
                  content: <Tab3Content />,
                  imageUrl: "/pen_card.png",
                },
              ]}
            />
   
          </div>
        </main>
      </div>

      {/* 回到頂部按鈕 */}
      <ScrollToTop />
    </>
  );
}
