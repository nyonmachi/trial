'use strict';
{
  const $ul = $('#img_arr>ul');
  const $wrap = $('#sinobiwrap2');
  const $choice = $('.choice');
  const $c_img = $('.c_img');
  const $movego = $('#movego');
  const $set_memory = $('#set_memory');
  const $memory = $('#memory');
  const $setImg = $('#set_img');
  const $setLocal = $('#set_logal');
  const myLocal = localStorage;
  const IMG_COUNT = 10;
  let selectNum =0;

  for(let i = 0; i<IMG_COUNT ; i++ ){
    const $li = $('<li><img src="img/' + ('0'+i).slice(-2) +'.png"></li>');
    $ul.append($li);
    $li.on('dblclick',function(){
      // $('.c_img img').attr('src','img/' + ('0'+i).slice(-2) +'.png');
      $c_img.eq(selectNum).attr('src','img/' + ('0'+i).slice(-2) +'.png');
      console.log(i);
    });
    $li.bind('touchend',function(){
      clearTimeout(timer1);
    });
    $li.bind('touchstart',function(){
        timer1 = setTimeout(function(){
          $c_img.eq(selectNum).attr('src','img/' + ('0'+i).slice(-2) +'.png');
          console.log(i);
        });
    });
  }

  $setLocal.on('click',()=>{
    myLocal.setItem('p1',)
  });

  $c_img.each(function(index){
    $(this).on('click',function(){
        console.log(index);
        $c_img.removeClass('sel');
        $(this).addClass('sel');
        selectNum = index;
    });
  });

  let img_count=0;
  let timerId;
  function move_ninja(){
    if(img_count >= $choice.length){
      img_count=0;
      clearTimeout(timerId);
      return;
    }
    console.log($choice.eq(img_count).find('input').val());
    $wrap.find('p').text($choice.eq(img_count).find('input').val() || '・・・');
    $wrap.find('img').attr('src',$choice.eq(img_count).find("img").attr("src"));
    $wrap.find('img').hide();

    $wrap.find('img').show("clip",300);
    img_count++;
    timerId = setTimeout(move_ninja,1000);
  }

  $movego.on('click',function(){
    move_ninja();
  });

  $set_memory.on('click',()=>{
    let text='';
    $choice.each(function(index){
      text = text + $(this).find('img').attr('src') + ':';
      text = text +$(this).find('input').val() + '\n';
    });

    myLocal.setItem('p1',text)
    $memory.text(text);
  });

  $setImg.on('click',()=>{
    let txt = $memory.val();
    console.log(txt.indexOf('\n'));
    let arr = txt.split(/\n/);
    // console.log(arr);
    $choice.each(function(index){

      let tmp = arr[index].split(':');
      console.log(tmp[1]);
        $(this).find('img').attr('src',tmp[0]);
        $(this).find('input').val(tmp[1]);
    })


    console.log(arr[0].indexOf(':')); //何文字目かを取得
    console.log(arr[0].substr(0,arr[0].indexOf(':')));
    console.log(arr[0].substring(arr[0].indexOf(':')+1));


    arr.forEach((item,i)=>{
      // console.log(item);
    });


  });

}
