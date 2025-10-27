/* 標準款&觸控款的桌上型水質檢測設備  表格TAB*/

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabs01Props {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const AnimatedTabs01 = ({
  tabs,
  defaultTab,
  className,
}: AnimatedTabs01Props) => {
  if (!tabs || !tabs.length) return null;

  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  return (
    <div className={cn("w-full max-w-[1280px] mx-auto flex flex-col gap-y-1", className)}>
      <div className="grid grid-cols-2 gap-4 bg-[#818BC4] p-2 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-6 py-4 text-xl font-bold rounded-lg text-white outline-none transition-colors hover:bg-[#6C78B4]"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab-01"
                className="absolute inset-0 bg-[#58629D] shadow-lg !rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10 text-white">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-4 bg-[#818BC4] shadow-lg rounded-xl border border-gray-300 min-h-60 h-full">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
                transition={{
                  duration: 0.5,
                  ease: "circInOut",
                  type: "spring",
                }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs01 };
