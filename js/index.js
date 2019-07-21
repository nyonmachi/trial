'use strict';
{
  function draw(){
    const canvas = document.querySelector('canvas');
    if(typeof canvas.getContext === 'undefined'){
      return;
    }
    console.log(canvas.getContext('2d'));
    const ctx = canvas.getContext('2d');
    //x y width height
    const rg = ctx.createRadialGradient(
      canvas.width/2  , canvas.height/2 ,50,
      canvas.width/2, canvas.height/2,100
    );

    rg.addColorStop(0,'pink');
    rg.addColorStop(0.3,'#3b0');
    rg.addColorStop(1,'#0bb');

    ctx.fillStyle = rg;
    ctx.fillRect(0,0, canvas.width, canvas.height);

    const g = ctx.createLinearGradient(0,0 ,canvas.width,0);
    let n = 50;
    let c = 333;
    g.addColorStop(0,'pink');
    g.addColorStop(0.5,'yellow');
    g.addColorStop(1,'#0d9');

    ctx.fillStyle = g;
    ctx.fillRect(0,canvas.height/10*9, canvas.width,canvas.height/10);



    ctx.strokeStyle='#' + c;
    ctx.fillStyle='pink';
    ctx.lineWidth = '10';
    ctx.lineJoin = 'bevel';

    ctx.shadowOffsetX =4;
    ctx.shadowOffsetY =4;
    ctx.shadowBlur =4;
    ctx.shadowColor ='rgba(255,0,0,' + n/100*2 +')';

    ctx.fillRect(n,50,50,50);
    ctx.strokeRect(50,50,50,50);

   // ctx.createLinearGradient(x0, y0, x1, y1);

   ctx.beginPath();
   ctx.moveTo(100,100);
   ctx.lineTo(100,150);
   ctx.lineTo(150,150);
   ctx.closePath();
   ctx.fillStyle ='green';
   ctx.fill();


 }

 const canvas = document.querySelector('canvas');

 console.log(canvas.getContext('2d'));
 const ctxs = canvas.getContext('2d');
 let i = 0;
 let timerId;

 function moveImg(){
   if(i===6){
     clearTimeout(timerId);
     return;
   }
   ctxs.fillStyle='pink';
   ctxs.fillRect(50*i,10*i,50,50);
   i++;
   timerId = setTimeout(moveImg,100);
 }

  draw();

}
