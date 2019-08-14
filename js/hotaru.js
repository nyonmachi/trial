'use strict';
{
  const star1 = document.getElementById('star1');
  const main = document.querySelector('.hotaru');

  let timerId;
  const FlyCount = 10; //ホタルの数


  class Firefly {
    constructor(radius , top , left , count){
      this.radius = radius;
      this.top = top;
      this.left = left;
      this.count = count;
      this.timerId =0;

      this.makefly();
      this.update();
    }

    makefly(){
        console.log(this.top);
        const night = document.getElementById('night');
        const div = document.createElement('div');
        div.classList.add('star');
        div.setAttribute('data-num',this.count);
        div.style.top = this.top + 'px';
        div.style.left = this.left + 'px';
        div.style.width = this.radius + 'px';
        div.style.height = this.radius + 'px';

        night.appendChild(div);
    }

    update(){
      const div = document.querySelector(`[data-num = "${this.count}"]`);
      // const div = document.querySelector(`[data-num = "1"]`);
      if(Date.now() - now  >= 1000*2*(this.count+1)){
        clearTimeout(this.timerId);
        div.classList.add('fade');
        div.addEventListener('transitionend',()=>{
          document.getElementById('night').removeChild(div);
          if(this.count+1 === FlyCount ){
            //最後のホタル
            document.getElementById('lastmsg').classList.add('msg-fadein');
          }
        })
        console.log('fin');
        return;
      }
      // console.log(div.style.top );
      this.top = this.top + rand(-20,20)/10;
      this.left = this.left + rand(-20,20)/10;
      div.style.top = this.top++ + 'px';
      div.style.left = this.left++ + 'px';
      // this.timerId = setTimeout(update,1000);
      this.timerId = setTimeout(function(){
        this.update();
      }.bind(this),100);
    }
  }

  function rand(min,max){
    return Math.floor(Math.random()*(max-min+1))+ min;
  }



  //(radius , top , left , count)


  let i  = 0;
  const now = Date.now();
  console.log(now);
  function makeFireFly(){
    if( i >= FlyCount){
      clearTimeout(timerId);
      return;
    }

    const fly = new Firefly(rand(15,10), rand(20,50),rand(100,400),i);
    i++;
    timerId = setTimeout(makeFireFly,1000);

  }

makeFireFly();

}
