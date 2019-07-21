'use strinc';
{
  function getData(){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','moon.xml');
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState === 4){
        if(xmlhttp.status === 200 ){

          const xmlData = xmlhttp.responseXML.documentElement;
          console.log(xmlData);

          const output = document.getElementById('output');
          const nodes= xmlData.getElementsByTagName('moon_age');

          for(let i=0;i < nodes.length ; i++){
            output.innerHTML = output.innerHTML + nodes[i].tagName +
              ':' + nodes[i].textContent;
          }


        }// status
      }//xmlhttp.readyState
    }// function() {

  }//getData()

  const btn  = document.getElementById('btn');
  btn.addEventListener('click',()=>{
    console.log('moon 3');
    getData();
  });

} // end
