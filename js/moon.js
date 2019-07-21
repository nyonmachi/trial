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

        }// status
      }else{
        alert('readyState wrong')
      }//xmlhttp.readyState
    }// function() {

  }//getData()

  const btn  = document.getElementById('btn');
  btn.addEventListener('click',()=>{
    console.log('moon 2');
    getData();
  });

} // end
