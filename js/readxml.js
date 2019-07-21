'use strict';
{

//https://www.ipentec.com/document/javascript-xml-parsing
function getData() {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var elem = document.getElementById("output");

        elem.innerHTML += "----- getElementsByTagName -----<br/>";
        var docelem = xmlhttp.responseXML.documentElement;
        var nodes = docelem.getElementsByTagName("name");
        for (let i = 0; i < nodes.length; i++) {
          elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
        }

        var nodes = docelem.getElementsByTagName("height");
        for (let i = 0; i < nodes.length; i++) {
          elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
        }

        var nodes = docelem.getElementsByTagName("weight");
        for (let i = 0; i < nodes.length; i++) {
          elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
        }
        elem.innerHTML += "----------<br/>";
      } else {
        alert("status = " + xmlhttp.status);
      }
    }
  }
  xmlhttp.open("GET", "sample.xml");
  xmlhttp.send();
}

  const btn = document.getElementById('btn');
  btn.addEventListener('click',()=>{
    console.log('on2');
    getData();
  });

}
