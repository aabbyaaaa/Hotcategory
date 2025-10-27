"use client";

import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import AnimatedBackground from "@/components/ui/animated-background";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "防護等級 IP57",
      description: "防水耐用，應付戶外檢測",
      icon: <IconTerminal2 />,
    },
    {
      title: "3.5\"TFT 彩色螢幕",
      description: "畫面清晰易讀",
      icon: <IconEaseInOut />,
    },
    {
      title: "全新 UI 介面",
      description: "操作直觀簡單",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "智慧化功能",
      description: "自動定時數據記錄、參數設定與鎖定功能",
      icon: <IconCloud />,
    },
    {
      title: "資料儲存充足",
      description: "高達 3000 筆",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "電池供電",
      description: "可充電鋰電池 / USB 供電",
      icon: <IconHelp />,
    },
    {
      title: "充電接口",
      description: "USB / Type-C，符合歐盟新規範",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "高精度測量",
      description: "專業級精準度，滿足各種檢測需求",
      icon: <IconHeart />,
    },
  ];

  return (
    <AnimatedBackground
      defaultValue={features[0].title}
      className="rounded-lg bg-[#A979B2]/10"
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.3,
      }}
      enableHover
    >
      <div className="grid grid-cols-2 xl:grid-cols-4 relative z-10 py-10 w-full">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </AnimatedBackground>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      data-id={title}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
