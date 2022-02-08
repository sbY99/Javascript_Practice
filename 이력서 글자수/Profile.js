function counter(){
  //ID에 해당하는 값을 가져옴
  //input,form (사용자에게 입력받는) 형태이므로 .value사용
  var content = document.getElementById('jasoseol').value;
  if(content.length > 200){
    //0이상 200미만 글자를 자름
    content = content.substring(0,200);
    //자른 값을 다시 대입해줌
    document.getElementById('jasoseol').value = content;
  }
  //count를 ID로 가지는 값에 접근하여 해당 값을 원하는 형태로 변환함
  //HTML 값을 바꿈, .innerHTML도 가능
  document.getElementById('count').textContent = '(' + content.length + '/200)';
}
counter();
