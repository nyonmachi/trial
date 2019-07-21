'use strinc';
{
  function getData(){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','moon.xml');
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState === 4){
        if(xmlhttp.status === 200 ){



        }// status
      }else{
        alert('readyState wrong')
      }//xmlhttp.readyState
    }// function() {

  }//getData()

  const btn  = document.getElementById('btn');
  btn.addEventListener('click',()=>{
    console.log('moon 1');
    getData();
  });

} // end
