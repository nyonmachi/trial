'use strict';
{
  const c_arr =[
    'ぼくはお気楽忍者',
    '・・誰かが困ってる？',
    'あ、脚が勝手に・・',
    'ついつい、全速力☆',
    '刀まで出てきて',
    'ジャーンプ！！',
    '手裏剣くらえ～',
    'や～！！！',
    '無事、着地',
    'あれ？？',
  ];
  const $wrap = $('#sinobiwrap');

  for(let i = 0 ;i < c_arr.length; i++){
    const $sinobi = $('<div class="sinobi"></div＞>');
    const $img = $('<img src="img/' + i.toString().padStart(2,'0') + '.png">');
    const $p = $('<p>' + c_arr[i] +'</p>');

    $sinobi.append($img);
    $sinobi.append($p);
    $sinobi.appendTo($wrap);
    if(i!==0){
      $sinobi.css('display','none');
    }
  }

  let count = 0;
  let timerId;
  function para(){
    if(count > c_arr.length){
      clearTimeout(timerId);
      return;
    }
    count++;
    $wrap.find('.sinobi').eq(count).show('fade','easeinout');
    timerId = setTimeout(para,1500);

  }

  // para();

  $('#ninja').animate({
    opacity:0.5,
  },{
    progress:function(){
      // $('#ninja').attr('src','laboimg/00.png');
    },
    duration:1000
  });

  $({i:0}).animate(
    {i:10},{
      progress:function(){
          $('#ninja').attr('src','laboimg/09.png');
      },
      duration:2000
    });






}
