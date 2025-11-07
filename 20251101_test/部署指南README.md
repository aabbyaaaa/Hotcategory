# Next.js 靜態輸出部署指南

## 📋 部署前檢查清單

### 1. 檔案結構檢查

**✅ 必須確保以下結構：**

```
your-project/
├── index.html          ← 主頁面（必須）
├── 404.html           ← 錯誤頁面（建議）
├── 404/
│   └── index.html     ← 404 頁面的另一種形式
├── _next/             ← Next.js 靜態資源（必須與 index.html 同層）
│   ├── static/
│   │   ├── css/       ← CSS 檔案
│   │   ├── chunks/    ← JavaScript 檔案
│   │   └── media/     ← 字型、圖片等
│   └── ...
├── favicon.ico        ← 網站圖示
├── robots.txt         ← SEO 設定（選用）
└── sitemap.xml        ← 網站地圖（選用）
```

**⚠️ 重要規則：**
- `_next` 資料夾**必須**和 `index.html` 在同一層
- 不可以把 `_next` 放在子資料夾或上層資料夾

---

## 🔧 路徑設定規範

### ✅ 正確的路徑寫法（相對路徑）

```html
<!-- CSS -->
<link rel="stylesheet" href="./_next/static/css/xxxxx.css"/>

<!-- JavaScript -->
<script src="./_next/static/chunks/xxxxx.js"></script>

<!-- Favicon -->
<link rel="icon" href="./favicon.ico"/>

<!-- 圖片 -->
<img src="./images/photo.jpg" alt="照片"/>
```

### ❌ 錯誤的路徑寫法（絕對路徑）

```html
<!-- 不要用這種寫法！會導致放在子目錄時找不到檔案 -->
<link rel="stylesheet" href="/_next/static/css/xxxxx.css"/>
<script src="/favicon.ico"></script>
```

### 📌 路徑差異說明

| 路徑寫法 | 解析結果 | 放根目錄 | 放子目錄 |
|---------|---------|---------|---------|
| `/style.css` | `https://dgs.com.tw/style.css` | ✅ 可用 | ❌ 會找錯位置 |
| `./style.css` | 相對於當前 HTML 位置 | ✅ 可用 | ✅ 可用 |

**結論：永遠使用 `./` 開頭的相對路徑**

---

## 🌐 網址格式規範

### 部署到子目錄時的正確網址

假設你的專案資料夾叫做 `my-project`，部署在 `hotcategory` 子目錄下：

**伺服器檔案結構：**
```
/public_html/
└── hotcategory/
    └── my-project/
        ├── index.html
        └── _next/
```

**正確的訪問網址：**
```
✅ https://dgs.com.tw/hotcategory/my-project/
✅ https://dgs.com.tw/hotcategory/my-project/index.html
```

**錯誤的訪問網址：**
```
❌ https://dgs.com.tw/hotcategory/my-project
   （可能會導向錯誤頁面，取決於伺服器設定）
```

### 🔍 快速測試方法

上傳後，依序測試這些網址：
1. `https://your-domain.com/your-path/index.html` ← 最保險
2. `https://your-domain.com/your-path/` ← 看伺服器是否支援
3. `https://your-domain.com/your-path` ← 某些伺服器可能不支援

---

## 📁 多頁面網站注意事項

### 如果專案有多個頁面

**檔案結構範例：**
```
your-project/
├── index.html              ← 首頁
├── about.html              ← 關於頁面
├── about/
│   └── index.html          ← 或用這種方式
├── contact.html            ← 聯絡頁面
├── 404.html                ← 404 錯誤頁（必須）
├── 404/
│   └── index.html          ← 404 錯誤頁的另一種形式
└── _next/                  ← 所有頁面共用此資料夾
    └── static/
```

**頁面間的連結寫法：**
```html
<!-- 在 index.html 中連結到其他頁面 -->
<a href="./about.html">關於我們</a>
<a href="./about/">關於我們（資料夾形式）</a>
<a href="./contact.html">聯絡我們</a>

<!-- 回到首頁 -->
<a href="./index.html">回首頁</a>
<a href="./">回首頁（簡寫）</a>
```

**訪問網址：**
```
首頁：    https://dgs.com.tw/hotcategory/your-project/index.html
關於：    https://dgs.com.tw/hotcategory/your-project/about.html
或：      https://dgs.com.tw/hotcategory/your-project/about/
聯絡：    https://dgs.com.tw/hotcategory/your-project/contact.html
```

---

## 🚀 Next.js 專案輸出步驟

### Step 1: 設定 `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 啟用靜態輸出
  trailingSlash: true,  // 建議加上，避免路徑問題
  images: {
    unoptimized: true,  // 靜態輸出必須關閉圖片最佳化
  },
}

module.exports = nextConfig
```

### Step 2: 執行建置指令

```bash
npm run build
```

建置完成後會產生 `out` 資料夾

### Step 3: 檢查輸出檔案

```bash
cd out
ls -la
```

確認檔案結構：
```
out/
├── index.html
├── 404.html
├── _next/
├── favicon.ico
└── ...
```

### Step 4: 修正路徑（如果需要）

如果 HTML 檔案中出現 `href="/...` 或 `src="/...`，需要改成相對路徑：

**使用自動修正腳本：**

建立 `fix-paths.js`：

```javascript
const fs = require('fs');
const path = require('path');

// 需要處理的 HTML 檔案
const htmlFiles = [
  './index.html',
  './404.html',
  './404/index.html',
  // 如果有其他頁面，在這裡加上
];

console.log('🔧 開始修正路徑...\n');

htmlFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  檔案不存在，跳過: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let changeCount = 0;
  const originalContent = content;

  // 替換 href="/ 為 href="./
  content = content.replace(/href="\//g, () => {
    changeCount++;
    return 'href="./';
  });

  // 替換 src="/ 為 src="./
  content = content.replace(/src="\//g, () => {
    changeCount++;
    return 'src="./';
  });

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ ${filePath} - 修改了 ${changeCount} 處路徑`);
  } else {
    console.log(`⏭️  ${filePath} - 無需修改`);
  }
});

console.log('\n🎉 路徑修正完成！');
```

**執行修正：**

```bash
cd out
node fix-paths.js
```

### Step 5: 上傳到伺服器

將 `out` 資料夾內的**所有檔案**上傳到伺服器的目標目錄。

---

## 📤 上傳到伺服器

### 方法 1: FTP/SFTP（最常見）

使用 FileZilla 或其他 FTP 軟體：
1. 連接到伺服器
2. 找到目標資料夾（例如：`/public_html/hotcategory/`）
3. 建立專案資料夾（例如：`my-project`）
4. 上傳 `out` 資料夾內的**所有檔案**到 `my-project`

**⚠️ 注意：**
- 上傳的是 `out` 資料夾**內的檔案**，不是 `out` 資料夾本身
- 確保 `index.html` 和 `_next` 在同一層

### 方法 2: cPanel 檔案管理員

1. 登入 cPanel
2. 進入「檔案管理員」
3. 找到 `public_html/hotcategory/`
4. 建立新資料夾（例如：`my-project`）
5. 進入 `my-project`，上傳所有檔案
6. 解壓縮（如果是壓縮檔）

### 方法 3: Git 自動部署（進階）

如果伺服器支援 Git：
```bash
# 在本地端
cd out
git init
git add .
git commit -m "部署靜態網站"
git push origin main

# 在伺服器端
git pull origin main
```

---

## ✅ 部署後檢查

### 1. 檢查檔案結構

SSH 連線到伺服器，執行：
```bash
cd /path/to/your/project
ls -la
```

確認輸出類似：
```
-rw-r--r-- 1 user user 38407 Nov 06 15:19 index.html
-rw-r--r-- 1 user user 21901 Nov 06 15:19 404.html
drwxr-xr-x 3 user user  4096 Nov 06 15:19 _next
-rw-r--r-- 1 user user 25931 Nov 06 15:19 favicon.ico
```

### 2. 測試網址

在瀏覽器開啟：
```
https://your-domain.com/path/to/project/index.html
```

### 3. 開啟開發者工具檢查錯誤

按 `F12` 開啟開發者工具，切換到「Console」分頁：
- ✅ 沒有紅色錯誤訊息 = 正常
- ❌ 有 `404 Not Found` 錯誤 = 路徑設定有問題

常見錯誤範例：
```
Failed to load resource: the server responded with a status of 404 (Not Found)
/_next/static/css/xxxxx.css
```
→ 表示路徑使用了 `/` 開頭的絕對路徑，需要改成 `./`

---

## 🐛 常見問題排除

### 問題 1: 網頁顯示空白或樣式跑掉

**原因：** CSS/JS 檔案載入失敗

**解決方法：**
1. 按 `F12` 開啟開發者工具
2. 查看 Console 是否有 404 錯誤
3. 檢查 HTML 中的路徑是否使用 `./` 開頭
4. 確認 `_next` 資料夾和 `index.html` 在同一層

### 問題 2: 訪問網址出現 404 錯誤頁

**原因：** 伺服器找不到檔案

**解決方法：**
1. 確認檔案已正確上傳到伺服器
2. 檢查網址是否正確（需加上 `/index.html`）
3. 檢查伺服器檔案權限（應為 644）

```bash
# 修正檔案權限
chmod 644 index.html
chmod 755 _next
```

### 問題 3: 圖片無法顯示

**原因：** 圖片路徑錯誤或檔案未上傳

**解決方法：**
1. 確認圖片路徑使用 `./` 開頭
2. 確認圖片檔案已上傳到伺服器
3. 檢查圖片檔名大小寫是否一致（Linux 伺服器區分大小寫）

### 問題 4: 字型無法載入

**原因：** 字型檔案路徑錯誤

**解決方法：**
1. 確認 `_next/static/media/` 資料夾已上傳
2. 檢查 CSS 中的字型路徑是否正確

---

## 📚 範例：完整部署流程

### 情境：部署到 `https://dgs.com.tw/hotcategory/my-new-project/`

**Step 1: 建置專案**
```bash
cd my-app
npm run build
```

**Step 2: 修正路徑（如果需要）**
```bash
cd out
node fix-paths.js
```

**Step 3: 上傳檔案**
- 使用 FTP 連接到伺服器
- 進入 `/public_html/hotcategory/`
- 建立資料夾 `my-new-project`
- 上傳 `out` 資料夾內的所有檔案

**Step 4: 驗證部署**
- 開啟 `https://dgs.com.tw/hotcategory/my-new-project/index.html`
- 按 `F12` 檢查 Console 是否有錯誤
- 測試各個頁面連結是否正常

**完成！** 🎉

---

## 🔐 安全性建議

1. **不要上傳原始碼**
   - 只上傳 `out` 資料夾的內容
   - 不要上傳 `node_modules`、`.git`、`src` 等資料夾

2. **設定正確的檔案權限**
   ```bash
   # HTML、CSS、JS 檔案
   chmod 644 *.html
   chmod 644 *.css
   chmod 644 *.js

   # 資料夾
   chmod 755 _next
   ```

3. **使用 robots.txt 控制爬蟲**
   ```txt
   # 允許所有爬蟲
   User-agent: *
   Allow: /

   # 或禁止測試網站被爬蟲索引
   User-agent: *
   Disallow: /
   ```

---

## 📝 部署檢查表（每次部署前使用）

- [ ] 執行 `npm run build` 建置專案
- [ ] 檢查 `out` 資料夾是否包含 `index.html`
- [ ] 檢查 `_next` 資料夾是否與 `index.html` 同層
- [ ] 執行 `fix-paths.js` 修正路徑（如果需要）
- [ ] 上傳所有檔案到正確的伺服器目錄
- [ ] 測試完整網址（包含 `/index.html`）
- [ ] 開啟開發者工具檢查 Console 是否有錯誤
- [ ] 測試所有頁面連結是否正常
- [ ] 測試圖片、字型是否正常載入
- [ ] 在不同裝置測試響應式設計

---

## 🎯 快速參考

**正確的路徑寫法：**
```html
href="./_next/..."
src="./images/..."
```

**正確的網址格式：**
```
https://domain.com/path/to/project/index.html
```

**檔案結構：**
```
project/
├── index.html  ← 這裡
└── _next/      ← 這裡（同層）
```

---

**建立日期：** 2025-11-06
**適用於：** Next.js 靜態輸出專案
**維護者：** 德記儀器技術研發部
