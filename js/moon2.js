'use strict';
{
  const btn = document.getElementById('btn');

  function getData(){
    const output = document.getElementById('output');
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open('GET','moon2.xml');
    xmlhttp.open('GET','https://mgpn2.sakura.ne.jp/api/moon/position.cgi?y=2019&m=7&d=24&h=12&lat=35.6581&lon=139.7414');
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
      console.log('change');
      if(xmlhttp.readyState === 4){
        if(xmlhttp.status === 200){
          const rep = xmlhttp.responseXML.documentElement;
          console.log(rep);
          const nodes = rep.getElementsByTagName('age');
          for(let i = 0;i <nodes.length; i++){
            output.innerHTML = nodes[i].tagName + ':' + nodes[i].textContent;
          }

        }else{
          console.log('失敗して終了しました');
        } //status === 200
      }
    }
  }

  btn.addEventListener('click',()=>{
    getData();
  });

}
