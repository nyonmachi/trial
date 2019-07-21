'use strict';
{

  let ch = 0;
  let currentAngle = 30;
  const maxAngle = 60;

  function draw_nyon(){
    const canvas = document.querySelector('#nyon');
    if(typeof canvas.getContext === 'undefined'){
      return;
    }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // console.log(canvas.style.height);
// ctx.clearRect(0, 0, canvas.width, canvas.height);

    //尾っぽ
    ctx.beginPath();
    // const g = ctx.createLinearGradient(50,210,250,250);
    const g = ctx.createRadialGradient(
      150,230,80,
      150,230,100
    );

    g.addColorStop(0,'#fff');
    g.addColorStop(0.8,'#000');
    ctx.fillStyle = g;
    // ctx.ellipse(150,230,100,20,45/180*Math.PI,0,2*Math.PI);
    ctx.ellipse(150,230,100,20,currentAngle/180*Math.PI  ,0,2*Math.PI);
    if(currentAngle <= 35){
      ch = 0.2;
    }else if(currentAngle >= 50){
      ch = -0.2;
    }
    currentAngle = currentAngle + ch;

    ctx.stroke();
    ctx.fill();


    ctx.fillStyle ='white';
    //お身体
    ctx.beginPath();
    ctx.moveTo(200,90);
    // ctx.lineTo(100,320);
    ctx.arcTo(100,320,300,320,30);
    ctx.arcTo(300,320,200,90,30);
    // ctx.lineTo(300,320);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //あんよ
    ctx.strokeStyle ="red";
    ctx.beginPath();
    ctx.lineCap ='round';
    let lp = 210;
    ctx.moveTo(lp,320);
    ctx.lineTo(lp,310);
    ctx.moveTo(lp+5,320);
    ctx.lineTo(lp+5,310);

    ctx.moveTo(lp+20,320);
    ctx.lineTo(lp+20,310);
    ctx.moveTo(lp+25,320);
    ctx.lineTo(lp+25,310);
    ctx.moveTo(lp+30,320);
    ctx.lineTo(lp+30,310);

    lp = 190;
    ctx.moveTo(lp,320);
    ctx.lineTo(lp,310);
    ctx.moveTo(lp-5,320);
    ctx.lineTo(lp-5,310);

    ctx.moveTo(lp-20,320);
    ctx.lineTo(lp-20,310);
    ctx.moveTo(lp-25,320);
    ctx.lineTo(lp-25,310);
    ctx.moveTo(lp-30,320);
    ctx.lineTo(lp-30,310);
    ctx.stroke();

    //おひげ
    ctx.strokeStyle ="black";
    ctx.beginPath();
    ctx.ellipse(200,110,80,50,0,45/180*Math.PI,45/180*3*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(200,105,80,50,0,45/180*Math.PI,45/180*3*Math.PI);
    // ctx.arc(200,140,30,0,Math.PI);
    ctx.stroke();

    //お顔
    ctx.beginPath();
    ctx.moveTo(200,170);
    ctx.lineTo(150,93);
    ctx.lineTo(150,90);

    ctx.lineTo(160,70);
    ctx.lineTo(200,90);
    ctx.lineTo(240,70);

    ctx.lineTo(250,90);
    ctx.lineTo(250,93);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    //お鼻
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(200,168,3,0,2*Math.PI);
    ctx.fill();

    //お目々
    ctx.beginPath();
    ctx.arc(185,115,6,0,Math.PI,true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215,115,6,0,Math.PI,true);
    ctx.stroke();


    //お耳
    ctx.fillStyle ='rgba(255,0,0,.7)';
    ctx.beginPath();
    ctx.moveTo(158,90);
    ctx.lineTo(160,75);
    ctx.lineTo(185,90);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(215,90);
    ctx.lineTo(240,75);
    ctx.lineTo(242,90);
    ctx.closePath();
    ctx.fill();

    setTimeout(draw_nyon,10);
  }


  const main = document.getElementById('main');
  main.addEventListener('click',()=>{
    draw_flowers();
    console.log('にょんちゃん！');
  });

  const xy_array =[
    [-30,-30],[70,60],[350,50],[380,100],[10,280],[50,350],[350,370],
  ];
  let timerId;
  let flowerCount = 0;

  function draw_flowers(){
    if(flowerCount === xy_array.length){
      clearTimeout(timerId);
      return;
    }

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let x = xy_array[flowerCount][0];
    let y = xy_array[flowerCount][1];
    let xr = 40;

    const g = ctx.createRadialGradient(
      x,y,10,
      x,y,xr
    );
    g.addColorStop(0,'yellow');
    g.addColorStop(0.5,'#ffa3ff');
    g.addColorStop(1,'red');

    ctx.fillStyle=g;

    for(let i = 0 ; i<4 ; i++){
      //　花びら作成
      ctx.beginPath();
      ctx.ellipse(x,y,xr,10,45*i/180 * Math.PI,0,2*Math.PI);
      ctx.stroke();
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(x,y,10,0 ,2*Math.PI);
    ctx.stroke();
    ctx.fill();

    flowerCount++;
    timerId = setTimeout(draw_flowers,100);
  }

  function init(){
    const canvas = document.querySelectorAll('canvas');
    if(typeof canvas[0].getContext === 'undefined'){
      return;
    }
    const CANVAS_WIDTH = 400;
    const CANVAS_HEIGHT = 400;
    const dpr = window.devicePixelRatio || 1;

    canvas.forEach((canvas)=>{
      const ctx = canvas.getContext('2d');

      canvas.width = CANVAS_WIDTH * dpr;
      canvas.height = CANVAS_HEIGHT * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = CANVAS_WIDTH + 'px';
      canvas.style.height = CANVAS_HEIGHT + 'px';

    });

  }


  init();
  draw_nyon();

  draw_flowers();

}
