function startRandom() {
  console.log("start random");

  const randomValue = Math.random() * 3 + 1;
  const exeValue = Math.floor(randomValue);
  const backgroundFileName = exeValue + ".png";
  console.log(backgroundFileName);
}

function init() {
  console.log("Init Start");
  startRandom();
}

init();
/**
 * 표기법 : camel 표기법 ㅣㅣ case 표기법 ㅣㅣ낙타표기법
 * 소문자로 시작, 띄어쓰기 시 띄어쓰기x 다음글자 대문자
 * 단 class시 대문자 시작
 * 순자x특수문자_만 가능
 *
 * get background name => getBackkgroundName
 */

// startRandom 이라는 이름의 함수 생성,파라미터 아무것도 선언 안함
// 화면실행되면 init함수 시작, init함수에서 startRandom호출
//startRandom함수안에 startRandom이라는문자열을 콘솔에 출력하도록 코드 작성
