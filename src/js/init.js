function startRandom() {
  console.log("start random");

  const randomValue = Math.random() * 3 + 1;
  const exeValue = Math.floor(randomValue);

  const backgroundFileName = exeValue + ".jpg";
  console.log(backgroundFileName);

  const bodyTag = document.getElementById("myBody");
  console.log(bodyTag);
  bodyTag.style.backgroundImage = "url('" + backgroundFileName + "')";
  bodyTag.style.backgroundSize = "cover";
}

function getCurrentTime() {
  const date = new Date();
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  const currentDate = yy + "년" + mm + "월" + dd + "일";

  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const currentTime = hour + ":" + min + ":" + sec;

  const html_date = document.getElementById("date-js");
  const html_time = document.getElementById("time-js");
  html_date.innerText = currentDate;
  html_time.innerText = currentTime;
}

function init() {
  console.dir("Init Start");
  startRandom();
  getCurrentTime();

  setInterval(getCurrentTime, 1000);
}

init();

let dataArr = new Array();

function setTextData() {
  const data = document.getElementById("text-js");

  const inputData = data.value;

  if (inputData.length < 1) {
    return;
  }

  dataArr.push(inputData);
  data.value = "";
  sessionStorage.setItem("todoList", dataArr);
}

function keyDown() {
  if (event.keyCode === 13) {
    setTextData();
  }
}
