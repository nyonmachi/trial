'use strict';
{
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');

  btn1.addEventListener('touchstart',()=>{
    btn1.classList.add('touch');
  });
  btn1.addEventListener('touchend',()=>{
    btn1.classList.remove('touch');
  });

  btn1.addEventListener('mousedown',()=>{
    btn1.classList.add('mouse');
    console.log('mouse');
  })
  btn1.addEventListener('mouseup',()=>{
    btn1.classList.remove('mouse');
  });

  let timerId  = 0;
  btn2.addEventListener('touchstart',()=>{
      timerId = setTimeout(function(){
        btn2.classList.add('touch');
      },1500);
  });
  btn2.addEventListener('touchend',()=>{
    console.log(timerId);
    btn2.classList.remove('touch');
    clearTimeout(timerId);
  })

}
