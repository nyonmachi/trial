'use strinc';
{
  function getData(){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','moon.xml');
    xmlhttp.send();


  }//getData()

  const btn  = document.getElementById('btn');
  btn.addEventListener('click',()=>{
    getData();
  });

} // end
