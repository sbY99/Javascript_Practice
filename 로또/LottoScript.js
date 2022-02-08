//0이상 1미만 실수이므로 *45+1해주고
//정수형으로 변환해줌
//var num = Math.random()* 45 +1;

var lotto = [];

/*
for(var i = 0; i<6;i++){
  var num = Math.random()* 45 +1;
  var ball = parseInt(num);
  //값이 있으면 인덱스 반환, 없으면 -1
  if(lotto.indexOf(ball)==-1){
    lotto.push(ball);
  }
  else{
    i--;
  }
}
*/

//배열의 길이 반환
while(lotto.length != 6){
  var num = Math.random()*45 + 1;
  var ball = parseInt(num);
  if(lotto.indexOf(ball) == -1){
    lotto.push(ball);
  }
}
//이렇게 하면 1, 11, 2, 22, 3, 33 순으로 정렬됨
//맨 앞의 숫자를 기준으로 하기 때문에
//따라서 익명함수 사용해야함  단, python은 .sort하면 끝
lotto.sort((a,b)=>a-b);
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");
