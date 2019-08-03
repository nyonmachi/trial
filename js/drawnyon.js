'use strict';

  const canvas = document.getElementById('canvas');
  const replay = document.getElementById('replay');
  const rabbit = document.getElementById('rabbit');
  const proposal = document.getElementById('proposal');
  const paletto = document.getElementById('paletto');
  const btns = document.getElementById('btns');
  const reset = document.getElementById('reset');
  const download = document.getElementById('download');


  const img = new Image();

  let flg = true;
  let ctx;
  let isDrawing = false;
  let moveflg = false;
  let msg_arr =[
    'あきこさん、こんにちは',
    '『はなさか』にょんちゃんです (^_^)/',
    'あきこさんのところにはうさぎがいるの？',
    'ぼくはうさぎを見たことないよ。。',
    'ねえ、ぼくのとこにうさぎを連れてきて♪ *^^*',
    'うさぎ、楽しみにしてるね！！',
  ];

  function init(){
    if(typeof canvas.getContext === 'undefined'){
      flg = false;
      return;
    }
    ctx = canvas.getContext('2d');
  }//init

  replay.addEventListener('click',()=>{
    counter=1;
    nyon_draw_timer();
  });

  rabbit.addEventListener('click',()=>{
    proposal.classList.add('hide');
    btns.classList.remove('hide');
    paletto.classList.remove('hide');

  });

  download.addEventListener('click',()=>{
    console.log(canvas.toDataURL());
  });

  function draw () {
    if(!flg){return;}
    const rect = canvas.getBoundingClientRect();

    canvas.addEventListener('mousedown',(e)=>{
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      isDrawing = true;
      ctx.beginPath();
      ctx.moveTo(x,y);
    });

    canvas.addEventListener('mousemove',(e)=>{
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if(isDrawing){
        ctx.lineTo(x,y);
        ctx.stroke();
      }
    });

    canvas.addEventListener('mouseup',(e)=>{
      if(isDrawing){
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isDrawing = false;
        ctx.lineTo(x,y);
        ctx.stroke();
      }
    });

  } //draw();

  function rand(min,max){
    return Math.floor(Math.random()*(max-min)+1)+min;
  }



  let MX = 230;
  let MY = 400;
  let angle = 0;
  let c = 0.05;
  let moveCount = 0;
  let ma_arr = [[250,350,50,1]];
  let msgCount=0;

  function nyon_draw_soon(){
    if(moveflg === false){
      console.log('nyon stop');
      clearTimeout(timerId);
      return;
    }

    ctx.clearRect(0,0,canvas.width,canvas.height);
    const backarea = new BackArea();

    //お花作成
    ma_arr.forEach((item)=>{
      img.src= 'img/ma'+ item[3] + '.png';
      ctx.drawImage(img,item[0],item[1],item[2],item[2]);
    });

    //メッセージ作成
    ctx.textAlign = 'right';
    ctx.font = "22px 'ＭＳ ゴシック'";
    ctx.fillText(msg_arr[msgCount],480,50);

    ctx.save();

    ctx.translate(MX,MY);
    angle = angle + c;
    ctx.rotate(angle/180*Math.PI);


    if(Math.abs(angle) > 2){
      //お花配列作成
      ma_arr.push([rand(200,500),rand(300,480),rand(30,60),rand(1,6)]);
      c*=-1;
      moveCount++;
      if(moveCount%3===0 && msgCount < (msg_arr.length-1)){msgCount++;}
    }

    for(let i = 0; i < nyon.length ;i++){
      draw_for(i,MX,MY);
    } //for

    ctx.stroke();
    ctx.restore();

    if(moveCount>20){
      console.log('nyon stop');
      clearTimeout(timerId);
      return;
    }

    timerId = setTimeout(nyon_draw_soon,10);
  }// nyon_draw_soon()


  let timerId;
  let counter=1;
  function nyon_draw_timer(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const backarea = new BackArea();

    return;

    let i;
    for(i = 0; i<10*counter && i < nyon.length ;i++){
      draw_for(i,0,0);
    } //for

    ctx.stroke();
    counter++;

    if(i>=nyon.length) {
      clearTimeout(timerId);
      moveflg = true;
      // nyon_draw_soon();
      return;
    }
    timerId = setTimeout(nyon_draw_timer,20);
  } //nyon_draw_timer()

  function draw_for(i,MX,MY) {

    if(nyon[i][0] === -2){
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = nyon[i][1];

    }else if(nyon[i][0] === -1){
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = nyon[i][1];

    }else if(
      ( Math.abs(nyon[i][0]-nyon[i-1][0]) >2 && Math.abs(nyon[i][1]-nyon[i-1][1])>2 )){
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(nyon[i][0]-MX,nyon[i][1]-MY);
    }else if (nyon[i][0] > 0){
      ctx.lineTo(nyon[i][0]-MX,nyon[i][1]-MY);
    }

  }



  const BackArea = function(){

    ctx.save();

    ctx.fillStyle= 'rgba(0,128,0,0.6)';
    ctx.fillRect(0,250,500,250);
    ctx.shadowColor='rgb(0,128,0)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.fillStyle= 'white';
    ctx.beginPath();
    ctx.arc(230,155,310,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    // ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = 'rgba(0,128,0,0.6)';
      // ctx.moveTo(0,500;
      // ctx.lineTo(0,400);
  };

  init();
  // const ball = new BackArea();
  // draw();
  nyon_draw_timer();
