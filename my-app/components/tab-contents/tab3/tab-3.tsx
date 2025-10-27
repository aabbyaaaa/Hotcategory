import HeroSection03 from "@/components/tab-contents/tab3/hero-section-03";
import { FeatureWithAdvantages } from "@/components/tab-contents/tab3/feature-with-advantages";
import ProductSpecsTable, { type Product } from "@/components/tab-contents/tab2/product-specs-table";
import { BluetoothFeatureCard } from "@/components/tab-contents/tab3/bluetooth-feature-card";

export function Tab3Content() {
  // 一般型筆型產品資料（4 款）
  const regularProducts: Product[] = [
    {
      name: "DPH1",
      model: "DPH1",
      partNumber: "AWE-4090010004",
      imageUrl: "/pocket (1).png",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010100",
      specs: { phMv: true, orp: true, cond: false, do: false }
    },
    {
      name: "DORP1",
      model: "DORP1",
      partNumber: "AWE-4090010005",
      imageUrl: "/pocket (2).png",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010100",
      specs: { phMv: false, orp: true, cond: false, do: false }
    },
    {
      name: "DEC1",
      model: "DEC1",
      partNumber: "AWE-4090010006",
      imageUrl: "/pocket (3).png",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010100",
      specs: { phMv: false, orp: false, cond: true, do: false }
    },
    {
      name: "DPC1",
      model: "DPC1",
      partNumber: "AWE-4090010007",
      imageUrl: "/pocket (4).png",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010100",
      specs: { phMv: true, orp: true, cond: true, do: false }
    }
  ];

  // 藍芽型筆型產品資料（4 款）
  const bluetoothProducts: Product[] = [
    {
      name: "DPH1+",
      model: "DPH1+",
      partNumber: "AWE-4090010000",
      imageUrl: "/pocket (1).png",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010100",
      specs: { phMv: true, orp: true, cond: true, do: false }
    },
    {
      name: "DORP1+",
      model: "DORP1+",
      partNumber: "AWE-4090010001",
      imageUrl: "/pocket (2).png",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010100",
      specs: { phMv: false, orp: true, cond: false, do: false }
    },
    {
      name: "DEC1+",
      model: "DEC1+",
      partNumber: "AWE-4090010002",
      imageUrl: "/pocket (3).png",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010100",
      specs: { phMv: false, orp: false, cond: true, do: false }
    },
    {
      name: "DPC1+",
      model: "DPC1+",
      partNumber: "AWE-4090010003",
      imageUrl: "/pocket (4).png",
      productUrl: "https://dgs.com.tw/product/headCode/AWE-4090010100",
      specs: { phMv: true, orp: true, cond: true, do: false }
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection03 />

      {/* 功能特點 */}
      <FeatureWithAdvantages />

      {/* 一般型產品表格 */}
      <ProductSpecsTable
        title="一般型"
        subtitle="筆型　水質檢測設備"
        description="穩定可靠，檢測隨時可得"
        products={regularProducts}
        gradientColors={["#B8A948", "#D2C85E", "#E6E07E", "#D2C85E", "#B8A948"]}
        primaryColor="#D2C85E"
      />

      {/* 藍芽型產品表格 */}
      <ProductSpecsTable
        title="藍芽型"
        subtitle="筆型　水質檢測設備"
        description="智慧連線，數據盡在掌握"
        extraDescription={<BluetoothFeatureCard />}
        products={bluetoothProducts}
        gradientColors={["#B8A948", "#D2C85E", "#E6E07E", "#D2C85E", "#B8A948"]}
        primaryColor="#D2C85E"
      />
    </div>
  );
}
