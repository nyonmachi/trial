'use strict';

  const cBody = document.querySelector('#calender table tbody');
  const ym = document.getElementById('ym');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const today = document.getElementById('btn');
  const savebtn = document.getElementById('savebtn');
  let basisDay = new Date();
  const title = document.getElementById('title');
  const contents = document.getElementById('contents');
  const img_arr = document.querySelectorAll('#foxes div img');

  const storage = localStorage;

  savebtn.addEventListener('click',()=>{
    const key = savebtn.getAttribute('data-date');

    // storage.setItem()

    storage.setItem(key+'title',title.value);
    storage.setItem(key+'contents',contents.value);
    console.log(contents.value);
  });

  function _jsonFlickrFeed(data) {
    //本に載っていたサンプル
          // 結果表示領域をクリア
      var photo_list = document.getElementById("photo_list");
      photo_list.innerHTML = "";

      // itemsキーで検索結果を取得
      for (let i=0;i<data.items.length;i++) {
        // 検索結果内の画像情報を取得
        var item = data.items[i];
        // img要素を生成
        var img = document.createElement("img");
        // img要素のsrcに検索結果の画像のURLを指定
        img.src = item.media.m;
        photo_list.appendChild(img);
      }
    }

    function jsonFlickrFeed(data){
      const flickr = document.getElementById('flickr');
      const dami = document.getElementById('dami');
      flickr.src = data.items[0].media.m;
      dami.classList.add('fadeout'); //効いてない
      flickr.classList.add('fadein'); //効いてない
      console.log(data.items[0].media.m);

      for(let i = 0; i <img_arr.length;i++){
        img_arr[i].src= data.items[i+1].media.m;
        // img_arr.push(data.items[i].media.m);
      }
    }

    function init(){
      const script = document.createElement('script');
      script.src="https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + encodeURIComponent('fox');
      document.body.appendChild(script);
      document.body.removeChild(script);
    }



  function make_calender(_basisDay){
    let basisDay = new Date(_basisDay);


    ym.textContent = basisDay.getFullYear() + '年' + (basisDay.getMonth()+1) + '月';
    document.getElementById('diary_date').textContent =
       basisDay.getFullYear() + '.' + (basisDay.getMonth()+1) + '.' + basisDay.getDate();

    //  今月の1日に設定
    basisDay.setDate(1);
    let youbi= basisDay.getDay();
    basisDay.setDate(1-youbi);  //最初の日曜日の日付
    let date_arr = [];
    for(let i = 0 ; i< youbi; i++){
      date_arr.push('g' + (basisDay.getDate()+i));
    }

    basisDay = new Date(_basisDay)
    basisDay.setMonth(basisDay.getMonth()+1);
    console.log(basisDay);
    basisDay.setDate(0);
    let ld = basisDay.getDate();

    for(let i = 1 ; i<= ld; i++){
      date_arr.push(i);
    }

    youbi = basisDay.getDay();
    for(let i = 1 ; i<=(6-youbi); i++){
      date_arr.push('g' + i);
    }

    basisDay = new Date(_basisDay);
    let year = basisDay.getFullYear();
    let mon = basisDay.getMonth()+1;
    //カレンダー作成
    for(let i = 0 ;i < date_arr.length/7 ; i++){
      const tr = document.createElement('tr');
      for(let n = 0; n< 7; n++){
        const td = document.createElement('td');
        const key = year + '.' +  mon + '.' + date_arr[7*i+n];

        if(n===0){
          td.classList.add('text-danger');
        }else if(n === 6){
          td.classList.add('text-primary');
        }
        if(date_arr[7*i+n][0] === 'g'){
          td.classList.add('text-black-50');
          td.textContent = date_arr[7*i+n].slice(1,3);
        }else{
          if(date_arr[7*i+n] === basisDay.getDate()){
            td.classList.add('bg-success');
            title.value = storage.getItem(key+ 'title');
            contents.value = storage.getItem(key+ 'contents');
          }
          td.textContent = date_arr[7*i+n];
          td.addEventListener('click',()=>{
            savebtn.setAttribute('data-date', key);
            title.value = storage.getItem(key+ 'title');
            contents.value = storage.getItem(key+ 'contents');

            document.getElementById('diary_date').textContent = key;
          });
        }

        tr.appendChild(td);
      }
      cBody.appendChild(tr);
    }

  }

  function moveMonth(md){
    const tr = document.querySelectorAll('#calender table tbody tr');
    for(let i =0 ; i <tr.length ; i++){
      cBody.removeChild(tr[i]);
    }
    if(md){
      basisDay.setMonth(basisDay.getMonth()+md);
    }else{
      basisDay = new Date();
    }
    make_calender(basisDay);

  }

  next.addEventListener('click',()=>{
    moveMonth(1);
  });

  prev.addEventListener('click',()=>{
    moveMonth(-1);
  });

  today.addEventListener('click',()=>{
    moveMonth(0);
  });



  init();
  make_calender(new Date());
