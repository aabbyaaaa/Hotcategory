# Feature108 進階版使用說明

## 如何使用自訂組件作為 Tab 內容

### 在 page.tsx 中使用：

```tsx
import { Feature108Advanced } from "@/components/shadcnblocks-com-feature108-advanced";
import { Tab1Content } from "@/components/tab-contents/tab1-example";
import { Tab2Content } from "@/components/tab-contents/tab2-example";
import { Tab3Content } from "@/components/tab-contents/tab3-example";
import { Zap, Layout, Pointer } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        <main className="flex w-full flex-col items-center bg-white" style={{ maxWidth: '1440px' }}>
          <div className="w-full max-w-[1200px] mx-auto">
            <Hero45
              badge="德記洋行"
              heading="專業的產品與服務"
            />

            {/* 使用進階版 Feature108 */}
            <Feature108Advanced
              badge="德記洋行"
              heading="專業的產品與服務解決方案"
              description="與我們一起打造完美的網站解決方案"
              tabs={[
                {
                  value: "tab-1",
                  icon: <Zap className="h-auto w-4 shrink-0" />,
                  label: "產品特色",
                  content: <Tab1Content />, // 使用自訂組件
                },
                {
                  value: "tab-2",
                  icon: <Pointer className="h-auto w-4 shrink-0" />,
                  label: "進階功能",
                  content: <Tab2Content />, // 使用自訂組件
                },
                {
                  value: "tab-3",
                  icon: <Layout className="h-auto w-4 shrink-0" />,
                  label: "使用案例",
                  content: <Tab3Content />, // 使用自訂組件
                },
              ]}
            />

            <IconTabs3D />
          </div>
        </main>
      </div>
    </>
  );
}
```

## Tab 內容組件範例

### components/tab-contents/my-custom-tab.tsx

```tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// 可以 import 任何你需要的組件

export function MyCustomTab() {
  return (
    <div>
      {/* 這裡可以放任何內容 */}
      <h3>自訂標題</h3>
      <p>自訂內容</p>

      {/* 可以使用 hooks */}
      {/* 可以呼叫 API */}
      {/* 可以使用動畫 */}
      {/* 可以整合第三方套件 */}
    </div>
  );
}
```

## URL 參數控制 Tab（進階功能）

如果你想要 Tab 切換時改變 URL，可以這樣修改：

```tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Feature108WithURL({ tabs }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || tabs[0].value;

  const handleTabChange = (value: string) => {
    router.push(`?tab=${value}`, { scroll: false });
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      {/* ... rest of the component */}
    </Tabs>
  );
}
```

這樣 URL 就會變成：
- `/products?tab=tab-1`
- `/products?tab=tab-2`
- `/products?tab=tab-3`

用戶可以分享特定 Tab 的連結！
