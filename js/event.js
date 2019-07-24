'use strict';
// {
  const btn = document.getElementById('btn');
  // let url = "https://api.atnd.org/events/?keyword_or=石川県&format=jsonp&callback=atnd";
  // let url = "https://mgpn2.sakura.ne.jp/api/moon/position.cgi?json&y=2000&m=5&d=5&h=12&lat=35.6581&lon=139.7414&callback=atnd";
  let url = "https://api.nasa.gov/planetary/apod?api_key=IZCnICchInHDihmuFOosXFBBX96BUYqqtn3S3SPU";

  function atnd(data){
    console.log(data);
    // for(let i=0; i<data.events.length; i++){
      // console.log(data.events[i].event.event_id);
    // }
  }

  btn.addEventListener('click',()=>{
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  });

// }
