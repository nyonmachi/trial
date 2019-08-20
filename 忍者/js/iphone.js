'use strict';
{
  const btn1 = document.getElementById('btn1');

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
}
