var starButton = document.getElementById('startButton');
var cardShow = document.getElementById('cardShow');

starButton.onclick = function () {
    // 隨機數決定抽卡的卡號
    i = Math.floor(Math.random() * 10);
    cardShow.style.backgroundImage = 'url(./img/L' + i + '.jpg)';
  

    //改變玩家資料
    Li[0].innerHTML = '已抽卡次數：' + countAready;
}
