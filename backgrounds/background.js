// background.js

// 画像のリスト
const images = [
  "image/background_1.png",
  "image/background_3.png",
  "image/background_4.png"
  "image/background_5.png"
];

// 時間ごとに切り替え（例：10秒ごと）
let index = 0;
function changeBackground() {
  document.body.style.backgroundImage = `url(${images[index]})`;
  document.body.style.backgroundAttachment = "fixed";  // スクロールしても固定
  document.body.style.backgroundSize = "cover";        // 画面いっぱいに表示
  index = (index + 1) % images.length;
}

// ページ読み込み時に開始
setInterval(changeBackground, 10000); // 10秒ごと
changeBackground();
