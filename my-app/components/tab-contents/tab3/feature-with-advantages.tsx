import { Check } from "lucide-react";

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

              {/* 防護等級 IP67 */}
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#D2C85E' }}>防護等級 IP67</p>
                  <p className="text-muted-foreground text-base">
                    防塵防水，適合各種現場環境
                  </p>
                </div>
              </div>

              {/* 數據鎖定功能 */}
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#D2C85E' }}>數據鎖定功能</p>
                  <p className="text-muted-foreground text-base">
                    讀值穩定時自動鎖定，確保結果可靠
                  </p>
                </div>
              </div>

              {/* 智慧化設計 */}
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#D2C85E' }}>智慧化設計</p>
                  <p className="text-muted-foreground text-base">
                    自我診斷 檢測更精準，維護更簡單
                  </p>
                </div>
              </div>

              {/* 可更換探頭設計 */}
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#D2C85E' }}>可更換探頭設計</p>
                  <p className="text-muted-foreground text-base">
                    整合 pH / 導電度 (Cond) / TDS / 電阻率 (RES) / 鹽度 (Sal)，多用途檢測
                  </p>
                </div>
              </div>

              {/* 低電壓提示 */}
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#D2C85E' }}>低電壓提示</p>
                  <p className="text-muted-foreground text-base">
                    確保及時更換電池，避免中斷
                  </p>
                </div>
              </div>

              {/* 自動關機 & 背光時間可自行設定 */}
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-medium" style={{ color: '#D2C85E' }}>自動關機 & 背光時間可自行設定</p>
                  <p className="text-muted-foreground text-base">
                    節能省電，使用更彈性
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
