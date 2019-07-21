'use strict';
{

//https://www.ipentec.com/document/javascript-xml-parsing
  function getData(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          const elem = document.getElementById("output");

      //ここから通常時の処理

      console.log('readyStates OK');
      // const output = document.getElementById('output');
      // let innerHTML;
      const docelem = xmlhttp.responseXML.documentElement;
      const name = docelem.getElementsByTagName('name');
      for(let i=0 ; i<name.length ; i++){
        elem.innerHTML =  elem.innerHTML + name[i].tagName + ':' + name[i].textContent + '<br>';
      }
    }

    xmlhttp.open('GET','sample.xml');
    xmlhttp.send();
  }
  }
}

  const btn = document.getElementById('btn');
  btn.addEventListener('click',()=>{
    console.log('on5');
    getData();
  });

}
