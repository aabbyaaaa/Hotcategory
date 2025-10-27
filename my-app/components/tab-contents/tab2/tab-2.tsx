import HeroSection02 from "@/components/tab-contents/tab2/hero-section-02";
import { FeatureWithAdvantages } from "@/components/tab-contents/tab2/feature-with-advantages";
import ProductSpecsTable, { type Product } from "@/components/tab-contents/tab2/product-specs-table";
import ProductMiniCard from "@/components/tab-contents/tab2/product-mini-card";

export function Tab2Content() {
  // 單參數產品資料
  const singleParamProducts: Product[] = [
    {
      name: "DPH10",
      model: "DPH10",
      partNumber: "AWE-4090010100",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: true, orp: true, cond: false, do: false }
    },
    {
      name: "DORP10",
      model: "DORP10",
      partNumber: "AWE-4090010101",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: false, orp: true, cond: false, do: false }
    },
    {
      name: "DEC10",
      model: "DEC10",
      partNumber: "AWE-4090010102",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: false, orp: false, cond: true, do: false }
    },
    {
      name: "DDO10",
      model: "DDO10",
      modelSub: "極譜式電極",
      partNumber: "AWE-4090010103",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: false, orp: false, cond: false, do: true }
    },
    {
      name: "DDOPRO10",
      model: "DDOPRO10",
      modelSub: "光學式電極",
      partNumber: "AWE-4090010104",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: false, orp: false, cond: false, do: true }
    }
  ];

  // 多參數產品資料
  const multiParamProducts: Product[] = [
    {
      name: "DPC10",
      model: "DPC10",
      partNumber: "AWE-4090010105",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: true, orp: true, cond: true, do: false }
    },
    {
      name: "DPD10",
      model: "DPD10",
      partNumber: "AWE-4090010106",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: true, orp: true, cond: false, do: true }
    },
    {
      name: "DCD10",
      model: "DCD10",
      partNumber: "AWE-4090010107",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: false, orp: false, cond: true, do: true }
    },
    {
      name: "DPO10",
      model: "DPO10",
      partNumber: "AWE-4090010108",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: true, orp: true, cond: false, do: false }
    },
    {
      name: "DPCD10",
      model: "DPCD10",
      partNumber: "AWE-4090010109",
      imageUrl: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010000",
      specs: { phMv: true, orp: true, cond: true, do: true }
    }
  ];

  return (
    <div className="w-full">
      <HeroSection02 />
      <FeatureWithAdvantages />

      {/* 單參數產品表格 */}
      <ProductSpecsTable
        title="單參數"
        subtitle="掌上型水質檢測設備"
        description="專業檢測，精準穩定更可靠"
        products={singleParamProducts}
      />

      {/* 多參數產品表格 */}
      <ProductSpecsTable
        title="多參數"
        subtitle="掌上型水質檢測設備"
        description="多合一分析，滿足全方位水質需求"
        products={multiParamProducts}
      />

      {/* 產品迷你卡片 */}
      <div className="w-full py-12 flex justify-center items-center">
        <ProductMiniCard
          imageUrl="Portable pHCondDO meter02 - card.png"
          text="掌上型"
          link="https://dgs.com.tw/product/headCode/AWE-4090010000"
        />
      </div>
    </div>
  );
}
