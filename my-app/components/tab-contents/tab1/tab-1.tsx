"use client";

import { useRef } from "react";
import "./tab-1.css";
import { AnimatedTabs01 } from "@/components/tab-contents/tab1/animated-tabs-01";
import { AnimatedTabs02 } from "@/components/animated-tabs-02";
import HeroSection from "@/components/tab-contents/tab1/hero-section-01";
import { GradientText } from "@/components/ui/gradient-text";
import DownloadButton from "@/components/tab-contents/tab1/download-button";

export function Tab1Content() {
  const bodyClassName = `pricing-table-wrapper`;
  const animatedTabsRef = useRef<HTMLDivElement>(null);
  const animatedTabs02Ref = useRef<HTMLDivElement>(null);

  const handleScrollToAnimatedTabs = () => {
    animatedTabsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleScrollToAnimatedTabs02 = () => {
    animatedTabs02Ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // ==================== 產品資料配置 (在這裡自訂) ====================
  const products = [
    {
      id: "starter",
      name: "穩定可靠的標準化測量方案",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/84-3aaf88d1b105e333-w600h600.jpg",
      link: "https://dgs.com.tw/product/headCode/AWE-4090010200",
      buttonText: "標準款 Classical",
      showPopular: false,
      color: "starter"
    },
    {
      id: "essential",
      name: "智慧升級操作，數據管理更完整",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/86-1157ef538aa0431c-w600h600.jpg",
      link: "https://dgs.com.tw/product/headCode/AWE-4090010400",
      buttonText: "觸控款 Touch Screen",
      showPopular: false,
      color: "essential"
    }
  ];

  const features = [
    {
      name: "單參數",
      starter: { text: "提供電極、標準液及電極支架" },
      essential: { text: "提供電極、標準液及電極支架" }
    },
    {
      name: "多參數",
      starter: { text: "配備多種參數的電極與對應的標準溶液及電極支架，方便使用者依需求更換電極，進行不同參數的測量" },
      essential: { text: "配備多種參數的電極與對應的標準溶液及電極支架，方便使用者依需求更換電極，進行不同參數的測量" }
    },
    {
      name: "顯示螢幕",
      starter: { text: "7\" 自背光螢幕（按鍵操作）" },
      essential: { text: "7\" 觸控螢幕（圖像+文字導航，UI 更直觀）" }
    },
    {
      name: "操作體驗",
      starter: { text: "以按鍵為主，傳統型操作介面，學習成本低" },
      essential: { text: "全觸控操作，支援圖像化與文字導航，操作便利、現代化" }
    },
    {
      name: "功能",
      starter: { text: "自動校正、自動溫度補償（ATC）、讀數穩定提示、校正提示" },
      essential: { text: "自動校正、ATC、定時數據記錄、1~5 點校正（pH 模式）、操作導航、更多數據處理" }
    },
    {
      name: "數據儲存",
      starter: { text: "450 筆" },
      essential: { text: "500 筆" }
    },
    {
      name: "數據輸出",
      starter: { text: "USB 隨身碟 CSV 檔" },
      essential: { text: "USB / CSV / PC 連接（附連線軟體）" }
    },
    {
      name: "配件配置",
      starter: { text: "標配：電極支架 + 標準液" },
      essential: { text: "標配更完整：電極支架 + 磁力攪拌器 + 標準液" }
    },
    {
      name: "校正模式",
      starter: { text: "自動 / 手動校正（少數點數）" },
      essential: { text: "pH 模式支援 1~5 點校正，靈活度更高" }
    },
    {
      name: "應用場景",
      starter: { text: "基礎研究、教育實驗、單一需求檢測" },
      essential: { text: "高精度研究、品質管制、水質監測" }
    }
  ];
  // ===================================================================

  return (
    <>
    <div className={bodyClassName}>
      <HeroSection />
      <section className="table-section">
        <div className="container">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th className="plan-selector-col">
                    <div>
                      選擇您的方案
                      <div className="svg-wrapper">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 17v-4h-8v-2h8v-4l6 5-6 5z"/>
                        </svg>
                      </div>
                    </div>
                  </th>
                  {products.map((product) => (
                    <th key={product.id} className="product-col">
                      <div className={`heading ${product.color}-bg`}>{product.name}</div>
                      <div className="info">
                        {product.showPopular && (
                          <div className="popular">{product.popularText || "熱門"}</div>
                        )}
                        <a href={product.link} target="_blank" rel="noopener noreferrer" className="price-image-link">
                          <img
                            src={product.imageUrl}
                            alt={`${product.name}`}
                            className="price-image"
                          />
                        </a>
                        <button
                          className={`${product.color}-btn`}
                          onClick={product.id === 'essential' ? handleScrollToAnimatedTabs02 : handleScrollToAnimatedTabs}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                            {product.buttonText}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                              <path d="M12 8V16M12 16L9 13M12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx}>
                    <td>{feature.name}</td>
                    <td style={{ color: '#000000' }}>
                      {feature.starter.text}
                    </td>
                    <td style={{ color: '#000000' }}>
                      {feature.essential.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


    </div>


    <div ref={animatedTabsRef} className="py-12">
      <div className="flex flex-col items-center justify-center mt-12 mb-16">
        <h3 className="font-bold" style={{ fontSize: '2.5rem' }}>
          <GradientText
            colors={["#6C78B4", "#818BC4", "#AEB5D8", "#818BC4", "#6C78B4"]}
            animationSpeed={4}
            showBorder={true}
            className="px-6 py-3 cursor-default"
          >
            標準款
          </GradientText>
        </h3>
        <h3 className="text-3xl font-bold mt-8 text-gray-700">
          桌上型水質檢測設備
        </h3>
      </div>

      <AnimatedTabs01
        tabs={[
          {
            id: "single",
            label: "單參數",
            content: (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white"></td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPH100" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DPH100" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DEC100" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DEC100" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DDO100" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DDO100" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">型號</td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPH100" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DPH100
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DEC100" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DEC100
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DDO100" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DDO100
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">貨號</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010200</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010201</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010202</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">pH/mV.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">mV(ORP).℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">Cond/TDS/Sal./Res.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">DO.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ),
          },
          {
            id: "multi",
            label: "多參數",
            content: (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white"></td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPC100" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DPC100" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPD100" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DPD100" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DCD100" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DCD100" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPCD100" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DPCD100" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">型號</td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPC100" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DPC100
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPD100" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DPD100
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DCD100" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DCD100
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPCD100" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DPCD100
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">貨號</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010206</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010207</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010208</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010209</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">pH/mV.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">mV(ORP).℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">Cond/TDS/Sal./Res.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">DO.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ),
          },
        ]}
      />
    </div>

    <div ref={animatedTabs02Ref} className="py-12">
      <div className="flex flex-col items-center justify-center mt-12 mb-16">
        <h3 className="font-bold" style={{ fontSize: '2.5rem' }}>
          <GradientText
            colors={["#6C78B4", "#818BC4", "#AEB5D8", "#818BC4", "#6C78B4"]}
            animationSpeed={4}
            showBorder={true}
            className="px-6 py-3 cursor-default"
          >
            觸控款
          </GradientText>
        </h3>
        <h3 className="text-3xl font-bold mt-8 text-gray-700">
          桌上型水質檢測設備
        </h3>
      </div>

      <AnimatedTabs01
        tabs={[
          {
            id: "single",
            label: "單參數",
            content: (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white"></td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPH100T" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DPH100T" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DEC100T" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DEC100T" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DDO100T" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DDO100T" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">型號</td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPH100T" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DPH100T
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DEC100T" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DEC100T
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DDO100T" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DDO100T
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">貨號</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010203</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010204</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010205</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">pH/mV.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">mV(ORP).℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">Cond/TDS/Sal./Res.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">DO.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ),
          },
          {
            id: "multi",
            label: "多參數",
            content: (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white"></td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPC100T" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DPC100T" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPD100T" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DPD100T" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DCD100T" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DCD100T" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPCD100T" className="block">
                          <img src="https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg" alt="DPCD100T" className="w-24 h-24 object-cover mx-auto rounded" />
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">型號</td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPC100T" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DPC100T
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPD100T" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DPD100T
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DCD100T" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DCD100T
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <a href="https://example.com/products/DPCD100T" className="text-[#58629D] hover:text-[#6C78B4] hover:underline font-semibold transition-colors duration-200">
                          DPCD100T
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">貨號</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010210</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010211</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010212</td>
                      <td className="p-4 text-center text-gray-900 font-semibold">AWE-4090010213</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">pH/mV.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">mV(ORP).℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">Cond/TDS/Sal./Res.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-[#818BC4] text-white">DO.℃</td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#58629D" className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ),
          },
        ]}
      />
    </div>

    {/* 下載按鈕區域 */}
    <div className="flex justify-center items-center py-12">
      <DownloadButton />
    </div>
  </>);
}
