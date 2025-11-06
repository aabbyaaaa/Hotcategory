const fs = require('fs');
const path = require('path');

// 需要處理的 HTML 檔案
const htmlFiles = [
  './index.html',
  './404.html',
  './404/index.html'
];

console.log('🔧 開始修正路徑...\n');

htmlFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);

  // 檢查檔案是否存在
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  檔案不存在，跳過: ${filePath}`);
    return;
  }

  // 讀取檔案內容
  let content = fs.readFileSync(fullPath, 'utf8');

  // 計算修改次數
  let changeCount = 0;

  // 替換規則：將 ="/  和 '=/  改成 ="./  和 '=./
  // 但要避免替換 http:// 或 https://
  const originalContent = content;

  // 替換 href="/ 為 href="./
  content = content.replace(/href="\//g, (match) => {
    changeCount++;
    return 'href="./';
  });

  // 替換 src="/ 為 src="./
  content = content.replace(/src="\//g, (match) => {
    changeCount++;
    return 'src="./';
  });

  // 替換 href='/ 為 href='./
  content = content.replace(/href='\//g, (match) => {
    changeCount++;
    return 'href=\'./';
  });

  // 替換 src='/ 為 src='./
  content = content.replace(/src='\//g, (match) => {
    changeCount++;
    return 'src=\'./';
  });

  // 只有在內容有變更時才寫入
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ ${filePath} - 修改了 ${changeCount} 處路徑`);
  } else {
    console.log(`⏭️  ${filePath} - 無需修改`);
  }
});

console.log('\n🎉 路徑修正完成！');
console.log('\n📌 修正說明:');
console.log('   /_next/static/... → ./_next/static/...');
console.log('   /favicon.ico      → ./favicon.ico');
console.log('\n💡 現在你的專案可以放在子目錄 hotcategory 正常運作了！');
