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

function init() {
  console.dir("Init Start");
  startRandom();
}

init();
