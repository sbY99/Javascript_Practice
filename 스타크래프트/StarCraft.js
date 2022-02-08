// $('선택자').행위
//#: id선택, .val(): 값 선택

/*
$('#content').val()) -> id가 content인 것의 값을 가져옴
textarea와 같이 사용자에게 입력받는 것에 주로 쓰임
일반적인 텍스트는 .text()
*/

/*
function hello() {
  document.write('hello');
}
$('#click').click(hello);
*/

/*익명함수: 선언과 동시에 실행
$('#click').click(function(){document.write('hello');});
*/

var hp = 3;

$('#drone').click(function(){
  //fadeIn(): 이미지 나타나게함
  $('#spit').fadeIn();

  //animate안의 첫번째 요소에는 css문법이 반드시 들어감
  //이는 중괄호 안에 표시되어 있고, 문자열로 감싸줌
  //밑의 문법은 왼쪽 간격을 250만큼 늘린다는 뜻
  $('#spit').animate({'left': '+=250'});

  //이미지 투명화
  //안에 익명함수를 삽입하며
  //해당 기능이 끝난 이후에 함수가 실행(callback)
  $('#spit').fadeOut(function(){
    hp=hp-1;
    //안에 있는 텍스트 변경
    $('#hp').text('HP : ' + hp);
    if(hp==0){
      $('#bunker').fadeOut();
    }
  });

  //css코드를 직접적으로 변화시킴
  $('#spit').css({left: 150});

});
