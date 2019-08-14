$(function(){
  let ani_name;
  let select_item;
  const $div_quiz =  $('div#quiz');
  const $gonext =$('#gonext');
  const $fin = $('#fin');
  const $animal_div = $('.animal div');
  const img_arr = [
    [0,'きつね','キツネ'],
    [1,'りす','リス'],
    [2,'しか','シカ'],
    [3,'ねこ','ネコ'],
    [4,'うさぎ','ウサギ'],
    [5,'にんじゃ','時間旅行中の忍者'],
    [6,'ぺんぎん','迷子のペンギン'],
    [7,'うま','逃亡中の馬'],
    [8,'くま','夢遊病のクマ'],
    [9,'となかい','休暇中のトナカイ'],
  ];
  let okflg = 0;
  let ngflg = 0;
  let arr_max = 5;

  $animal_div
    .on('mouseover',function(){
      if($(this).data('ok') !== undefined){
        return;
      }

      $(this).find('span').stop(true).animate({
        opacity:0.9
      },100);

    })
    .on('mouseout',function(){
      if($(this).data('ok') !== undefined){
        return;
      }
      $(this).find('strong').stop(true).animate({
        right:'-200px',
        opacity:0.1
      },100);

      $(this).find('span').stop(true).animate({
        opacity:1
      },100);

    })
    .on('click',function(){
      if($(this).data('ok') !== undefined){
        return;
      }

      $div_quiz.find('input').val('');
      // $div_quiz.css('display','block');
      $div_quiz.show('clip',500);
      console.log($(this).find('img').attr('data-name'));
      ani_name =$(this).find('img').attr('data-name');
      select_item = $(this);

    });

  $('#cancel')
    .on('click',()=>{
      $div_quiz.css('display','none');
    });

  $('#go')
    .on('click',function(){
      const input_name = $('#ani_name').val();
      let nameTag;

      if(input_name ===''){
        console.log('空です');
      //あたったときの処理
      }else if( input_name === ani_name ){
        nameTag = '正解！' + select_item.find('strong').text() + 'です。';
        select_item.find('strong').text(nameTag).stop(true).animate({
          right:0,
          opacity:1
        },1000)

        select_item.find('span').stop(true).animate({
          opacity:0
        },1000);

        select_item.find('img').stop(true).animate({
          opacity:0.8
        },1000);

        select_item.data('ok',1);
        $div_quiz.css('display','none');

        okflg++;
        if(okflg + ngflg === 5){
          console.log('次のステージへ');
          console.log(img_arr.length);
          if(img_arr.length){
            $gonext.show('blind',500);
          }else{
            $fin.show('blind',500);
          }
        }

        //外れたときの処理
      }else{
        // alert('間違っています。。。');
        nameTag = select_item.find('strong').text() + '、でした。。';

        select_item.find('strong').text(nameTag).stop(true).animate({
          right:0,
          opacity:1
        },1000)

        select_item.find('span').stop(true).animate({
          opacity:0
        },1000);

        select_item.find('img').attr('src','img/obake.png').css({
          width:'100px',
          height:'100px'
        });

        select_item.find('img').stop(true).animate({
          width:'150px',
          height:'150px',
          opacity:0.8
        },1000);

        $div_quiz.css('display','none');
        select_item.data('ok',0);
        ngflg++;

      }

    });

    $gonext.find('#canceln').on('click',function(){
      $gonext.css('display','none');
      console.log($(this));
    });
    $gonext.find('#gon').on('click',function(){
      $gonext.css('display','none');
      init();
      console.log($(this));
    });

    $fin.find('#closebtn').on('click',function(){
      $fin.css('display','none');
    });

    function init(){
      $animal_div.each(function(index,item){
        const img_num = Math.floor(Math.random()*arr_max);
        // console.log(img_num);
        const img = img_arr.splice(img_num,1)[0];
        arr_max--;
        $(item).find('img').attr('src','img/ani'+ (('0')+ img[0]).slice(-2) + '.png');
        $(item).find('img').attr('data-name',img[1]);
        $(item).find('strong').text(img[2]).css({
          right:'-200px',
          opacity:0.1
        });
        $(item).find('span').css('opacity',1);
        $(item).removeData('ok');

        okflg = 0;
        ngflg = 0;

      });
    }

    init();


});
