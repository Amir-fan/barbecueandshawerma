const fs = require('fs');

const menuPath = 'c:/Users/PC/Documents/projects/clients/bbs/src/data/menu.js';
let content = fs.readFileSync(menuPath, 'utf8');

// Arabic to Western numbers mapping
const arabicToWestern = {
  '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4',
  '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9'
};

content = content.replace(/price: "([٠-٩]+) ل\.س"/g, (match, p1) => {
  const westernNumStr = p1.split('').map(char => arabicToWestern[char] || char).join('');
  return `price: ${westernNumStr}`;
});

fs.writeFileSync(menuPath, content, 'utf8');
console.log('Done replacing prices in menu.js');
