"use client";

import { useState } from "react";
import ProductMiniCard from "@/components/tab-contents/tab2/product-mini-card";

interface AdvancedTab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: React.ReactNode;
  imageUrl: string;
  imageSize?: number;
  imageLeftOffset?: number;
  imageAreaWidth?: string;
  textAreaWidth?: string;
}

interface Feature108AdvancedProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs: AdvancedTab[];
}

const Feature108Advanced = ({
  badge = "德記洋行",
  heading = "專業的產品與服務解決方案",
  description = "與我們一起打造完美的網站解決方案",
  tabs,
}: Feature108AdvancedProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <section className="py-32">
      <div className="w-full">
        {/* ProductMiniCard Tab 切換區 */}
        <style jsx>{`
          .tab-container {
            gap: 24px;
          }
          @media (min-width: 768px) {
            .tab-container {
              gap: 80px;
            }
          }
        `}</style>
        <div
          className="tab-container w-full flex flex-col items-center justify-center sm:flex-row"
        >
          {tabs.map((tab, index) => {
            // 根據 index 設定不同的顏色
            let baseColor, activeColor, textColor;

            if (index === 0) {
              // TAB 1 - 桌上型
              baseColor = '#818BC4';
              activeColor = '#58629D';
              textColor = '#FFFFFF';
            } else if (index === 1) {
              // TAB 2 - 掌上型
              baseColor = '#A979B2';
              activeColor = '#925E9B';
              textColor = '#FFFFFF';
            } else {
              // TAB 3 - 筆型
              baseColor = '#E6E07E';
              activeColor = '#faf37a';
              textColor = '#2E3458';
            }

            return (
              <ProductMiniCard
                key={tab.value}
                imageUrl={tab.imageUrl}
                text={tab.label}
                onClick={() => setActiveTab(tab.value)}
                backgroundColor={baseColor}
                textColor={textColor}
                activeBackgroundColor={activeColor}
                isActive={activeTab === tab.value}
                imageSize={tab.imageSize}
                imageLeftOffset={tab.imageLeftOffset}
                imageAreaWidth={tab.imageAreaWidth}
                textAreaWidth={tab.textAreaWidth}
              />
            );
          })}
        </div>

        {/* Tab 內容區 */}
        <div className="mx-auto mt-32" style={{ maxWidth: '1280px', width: '100%' }}>
          {tabs.map((tab) => (
            <div
              key={tab.value}
              style={{ display: activeTab === tab.value ? 'block' : 'none' }}
              className="w-full"
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature108Advanced };
