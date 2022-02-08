
//현재 시점에 대한 date 객체
var now = new Date();

//사귄 날 기점으로 date 객체
var start = new Date('2017-10-30');

//1970년을 기준으로 해당 객체까지 흐른 밀리초를 반환하는데,
//이렇게 작성하면 두 시간의 밀리초 차이가 구해짐
var timeDiff = now.getTime() - start.getTime();

//밀리초 *1000 = 1초, 1초 * 60 * 60 * 24 + 1 = 사귄날
//Math.floor : 소수점 버리고 정수로 변환
var day = Math.floor(timeDiff /(1000*60*60*24) +1);

//id가 love인 태그 안에 있는 text를 변환
$('#love').text(day+'일째');

var valentine = new Date('2023-02-14');
var timeDiff2 = valentine.getTime() - now.getTime();
var day2 = Math.floor(timeDiff2 / (1000*60*60*24)+1);

$('#valentine').text(day2+'일 남음');

//1999일의 미리세컨드와 더함
var ms = start.getTime() + 1999*1000*60*60*24;

//사귄날로부터 2000일째 되는 날의 밀리세컨드에 대한 객체 생성
var thousand = new Date(ms);

//월은 -1이 된 상태로 나오므로 1 더함
var thousandDate = thousand.getFullYear()+'.'+(thousand.getMonth()+1)+'.'+(thousand.getDate())
$('#thousand-date').text(thousandDate)

var timeDiff3 = thousand.getTime()-now.getTime();
var day3 = Math.floor(timeDiff3/(1000*60*60*24)+1);

$('#thousand').text(day3+'일 남음');
