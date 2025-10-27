"use client";

import React from "react";
import { GradientText } from "@/components/ui/gradient-text";

// 定義產品資料介面
interface Product {
  name: string;
  model: string;
  modelSub?: string; // 型號小字說明（如：極譜式電極）
  partNumber: string;
  imageUrl: string;
  productUrl: string;
  specs: {
    phMv: boolean;      // pH/mV.℃
    orp: boolean;       // mV(ORP).℃
    cond: boolean;      // Cond/TDS/Sal./Res.℃
    do: boolean;        // DO.℃
  };
}

interface ProductSpecsTableProps {
  title: string;
  subtitle: string;
  description: string;
  extraDescription?: string | React.ReactNode;  // 額外的描述文字或自訂組件（選用）
  products: Product[];
  gradientColors?: string[];  // 標題漸層顏色
  primaryColor?: string;      // 主要顏色（表格左側、型號連結）
}

const ProductSpecsTable: React.FC<ProductSpecsTableProps> = ({
  title,
  subtitle,
  description,
  extraDescription,
  products,
  gradientColors = ["#925E9B", "#A979B2", "#BD98C4", "#A979B2", "#925E9B"],
  primaryColor = "#A979B2",
}) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto py-12">
      {/* 標題區塊 */}
      <div className="flex flex-col items-center justify-center mt-12 mb-16">
        <h3 className="font-bold" style={{ fontSize: '2.5rem' }}>
          <GradientText
            colors={gradientColors}
            animationSpeed={4}
            showBorder={true}
            className="px-6 py-3 cursor-default"
          >
            {title}
          </GradientText>
        </h3>
        <h3 className="text-3xl font-bold mt-8 text-gray-700">
          {subtitle}
        </h3>
        <p className="text-xl mt-4 text-gray-600">
          {description}
        </p>
        {extraDescription && (
          <div className="mt-6">
            {typeof extraDescription === 'string' ? (
              <p className="text-lg text-gray-700 animate__animated animate__bounce animate__infinite animate__slow">
                {extraDescription}
              </p>
            ) : (
              extraDescription
            )}
          </div>
        )}
      </div>

      {/* 表格 */}
      <div className="p-4 shadow-lg rounded-xl border border-gray-300" style={{ backgroundColor: primaryColor }}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <tbody>
              {/* 產品圖 */}
              <tr className="border-b">
                <td className="p-4 font-semibold" style={{ backgroundColor: primaryColor, color: '#2E3458' }}>產品圖</td>
                {products.map((product, index) => (
                  <td key={index} className="p-4 text-center">
                    <a href={product.productUrl} className="block">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-24 h-24 object-cover mx-auto rounded hover:scale-105 transition-transform duration-200"
                      />
                    </a>
                  </td>
                ))}
              </tr>

              {/* 型號 */}
              <tr className="border-b">
                <td className="p-4 font-semibold" style={{ backgroundColor: primaryColor, color: '#2E3458' }}>型號</td>
                {products.map((product, index) => (
                  <td key={index} className="p-4 text-center">
                    {product.modelSub ? (
                      <div className="flex flex-col items-center gap-1">
                        <a
                          href={product.productUrl}
                          className="hover:underline font-semibold transition-colors duration-200"
                          style={{ color: primaryColor }}
                        >
                          {product.model}
                        </a>
                        <span className="text-xs text-gray-600">{product.modelSub}</span>
                      </div>
                    ) : (
                      <a
                        href={product.productUrl}
                        className="hover:underline font-semibold transition-colors duration-200"
                        style={{ color: primaryColor }}
                      >
                        {product.model}
                      </a>
                    )}
                  </td>
                ))}
              </tr>

              {/* 貨號 */}
              <tr className="border-b">
                <td className="p-4 font-semibold" style={{ backgroundColor: primaryColor, color: '#2E3458' }}>貨號</td>
                {products.map((product, index) => (
                  <td key={index} className="p-4 text-center text-gray-900 font-semibold">
                    {product.partNumber}
                  </td>
                ))}
              </tr>

              {/* 量測參數 pH/mV.℃ */}
              <tr className="border-b">
                <td className="p-4 font-semibold" style={{ backgroundColor: primaryColor, color: '#2E3458' }}>量測參數<br />pH/mV.℃</td>
                {products.map((product, index) => (
                  <td key={index} className="p-4 text-center">
                    {product.specs.phMv ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={primaryColor} className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                      </svg>
                    )}
                  </td>
                ))}
              </tr>

              {/* 量測參數 mV(ORP).℃ */}
              <tr className="border-b">
                <td className="p-4 font-semibold" style={{ backgroundColor: primaryColor, color: '#2E3458' }}>量測參數<br />mV(ORP).℃</td>
                {products.map((product, index) => (
                  <td key={index} className="p-4 text-center">
                    {product.specs.orp ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={primaryColor} className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                      </svg>
                    )}
                  </td>
                ))}
              </tr>

              {/* 量測參數 Cond/TDS/Sal./Res.℃ */}
              <tr className="border-b">
                <td className="p-4 font-semibold" style={{ backgroundColor: primaryColor, color: '#2E3458' }}>量測參數<br />Cond/TDS/Sal./Res.℃</td>
                {products.map((product, index) => (
                  <td key={index} className="p-4 text-center">
                    {product.specs.cond ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={primaryColor} className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                      </svg>
                    )}
                  </td>
                ))}
              </tr>

              {/* 量測參數 DO.℃ */}
              <tr className="border-b">
                <td className="p-4 font-semibold" style={{ backgroundColor: primaryColor, color: '#2E3458' }}>量測參數<br />DO.℃</td>
                {products.map((product, index) => (
                  <td key={index} className="p-4 text-center">
                    {product.specs.do ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={primaryColor} className="bi bi-check-circle-fill mx-auto" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c2c3c4" className="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                      </svg>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecsTable;
export type { Product, ProductSpecsTableProps };
