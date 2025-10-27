import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Tab3Content() {
  return (
    <div className="w-full space-y-8">
      <div className="text-center">
        <Badge variant="outline" className="mb-4">
          第三個標籤
        </Badge>
        <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          每個 Tab 都是獨立的 .tsx 文件
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          這樣的架構讓你可以輕鬆管理複雜的內容
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            優點
          </h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ 程式碼組織清晰</li>
            <li>✅ 易於維護和更新</li>
            <li>✅ 可重用性高</li>
            <li>✅ 支援 lazy loading</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            使用場景
          </h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>📊 複雜的數據展示</li>
            <li>📝 多步驟表單</li>
            <li>🎨 不同風格的內容區塊</li>
            <li>🔧 整合第三方組件</li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-gray-800 dark:text-gray-200 text-center">
          💡 提示：你可以在每個 Tab 內容組件中使用 hooks、API 調用、動畫等任何 React 功能
        </p>
      </div>
    </div>
  );
}
