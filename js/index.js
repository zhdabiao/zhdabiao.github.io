window.onscroll = function () {
  var zhidingb = document.documentElement.scrollTop || document.body.scrollTop;
  var zhidingx = document.getElementById('zhidingan');

  if (zhidingb >= 500) {
    zhidingx.style.display = 'block'
  } else {
    zhidingx.style.display = 'none'
  }
}

function zdtop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  }
  );
}

// 获取id为jzsc的div元素
var div = document.getElementById('jzsc');

// 计算本站安全运行时长的函数
function getRunningTime() {
  var now = new Date();
  var startDate = new Date('2022-01-01'); // 假设站点开始运行的日期为2022年1月1日

  var diff = now - startDate; // 相差的毫秒数

  var days = Math.floor(diff / (1000 * 60 * 60 * 24)); // 计算天数
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 计算小时数
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // 计算分钟数
  var seconds = Math.floor((diff % (1000 * 60)) / 1000); // 计算秒数

  // 将结果赋值给div的innerText属性
  div.innerText = "本站已安全运行" + days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
}

// 每秒更新一次运行时长
setInterval(getRunningTime, 1000);

// 初始显示一次
getRunningTime();

function guanbi() {
  // 获取需要关闭的div元素
  var xfxkpgb = document.getElementById('xfxkp');
  xfxkpgb.style.display = 'none'
}

function guanbiskm() {
  var skmqkgb = document.getElementById('skmqk');
  skmqkgb.style.display = 'none'
}

function skmkq() {
  var skmkqb = document.getElementById('skmqk');
  skmkqb.style.display = 'block';
}

// 选项卡
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}