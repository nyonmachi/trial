'use strict';
{


  function getData(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open('GET','sample.xml');
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
      if( xmlhttp.readyStates !== 4){
        console.log('readyStates !== 4');
        return;
      }else{
        if( xmlhttp.status !== 200){
          console.log('xmlhttp.status !== 200');
          return;
        }
      }
      //ここから通常時の処理
      
      console.log('readyStates OK');
      const output = document.getElementById('output');
      let innerHTML;
      const docelem = xmlhttp.responseXML.documentElement;
      const name = docelem.getElementsByTagName('name');
      for(let i=0 ; i<name.length ; i++){
        output.innerHTML =  output.innerHTML + name[i].tagName + ':' + name[i].textContent + '<br>';
      }
    }
  }

  const btn = document.getElementById('btn');
  btn.addEventListener('click',()=>{
    console.log('on');
    getData();
  });

}
