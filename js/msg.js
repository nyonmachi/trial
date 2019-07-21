'use strict';
{
  const msg = document.getElementById('msg');
  const msgbox = document.getElementsByClassName('msgbox');

  const msg_array =[
    'ぼくからのメッセージがはいってるよ！<br>クリックしてね！',
    'あきこさん、こんにちは。<br>こちらは毎日ねずみ色の空です。',
    'まちこはシーツのお洗濯ができなくて困っているみたいです。',
    'ぼくのおうちの前に「メロンとマロン」というお店ができました。',
    'どうしてぼくがマロン好きだとわかったのだろう？とびっくりしました。',
    'でもよく見たら「メロンとロマン」でした（*^^*）',
    'メロンは青森のメロンだということです。<br>今年の夏はぼくもメロンを食べてみるかもしれません。',
    'おしまい。　<br><br>にょんちゃん',
    ' ',
  ];

  let showFlg = 1; //1:font -1 :back
  let arrayNum = 1;

  msg.addEventListener('click',()=>{
    if(arrayNum === msg_array.length){
      arrayNum = 0;
    }
    if(showFlg === 1){
      msgbox[1].innerHTML = msg_array[arrayNum++];
    }else{
      msgbox[0].innerHTML = msg_array[arrayNum++];
    }
    showFlg *= -1;
    msg.classList.toggle('back');
  });


}
