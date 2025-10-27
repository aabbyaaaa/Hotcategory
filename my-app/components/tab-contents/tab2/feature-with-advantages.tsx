import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function FeatureWithAdvantages() {
  return (
    <div className="w-full pt-20 lg:py-20">
      <div className="container mx-auto">
        <div className="flex gap-4 py-0 lg:py-0 flex-col items-start">

          <div className="flex gap-2 flex-col py-20">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-gray-800 dark:text-gray-200">
              Key Features !
            </h2>

          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#A979B2' }}>防護等級 IP57</p>
                  <p className="text-muted-foreground text-base">
                    防水耐用，應付戶外檢測
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#A979B2' }}>3.5&quot;TFT 彩色螢幕</p>
                  <p className="text-muted-foreground text-base">
                    畫面清晰易讀
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#A979B2' }}>全新 UI 介面</p>
                  <p className="text-muted-foreground text-base">
                    操作直觀簡單
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#A979B2' }}>智慧化功能</p>
                  <p className="text-muted-foreground text-base">
                    自動定時數據記錄、參數設定與鎖定功能
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#A979B2' }}>資料儲存充足</p>
                  <p className="text-muted-foreground text-base">
                    高達 3000 筆
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#A979B2' }}>電池供電</p>
                  <p className="text-muted-foreground text-base">
                    可充電鋰電池 / USB 供電
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureWithAdvantages };
