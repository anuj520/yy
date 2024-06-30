const music = new Audio('1.jpg');
// music.play();
const songs = [ 
{
id:1,
songName:`Ordinary Person<br>
    <div class="subtitle">anirudh ravichander</div>`,
    poster:"1.jpg",
},
{
id:2,
songName:`Ready chel<br>
<div class="subtitle">anirudh ravichander</div>`,
poster:"2.jpg",
},
{
 id:3,
songName:`Main Rahoon<br>
<div class="subtitle">Jubin Nautiyal</div>`,
poster:"3.jpg",
},
{
id:4,
songName:`hua ha aaj phali<br>
 <div class="subtitle">Arman malik</div>`,
poster:"4.jpg",
},
{
id:5,
songName:`The Spectre<br>
 <div class="subtitle">Alan Walker</div>`,
 poster:"5.jpg",
},
{
id:6,
songName:`A. Walker-Faded  <br>
 <div class="subtitle">Alan Walker</div>`,
 poster:"6.jpg",
},
{
id:7,
 songName:`Zindagi<br>
<div class="subtitle">Jubin Nautiyal</div>`,
poster:"7.jpg",
},
{
id:8,
songName:`Sing Me To Sleep<br>
<div class="subtitle">Alan Walker</div>`,
poster:"8.jpg",
},
{
id:9,
songName:`Rim Jhim Song <br>
<div class="subtitle">Jubin Nautiyal</div>`,
poster:"9.jpg",
},
{
 id:10,
songName:`Ishq Karu Song <br>
<div class="subtitle">Vishal Chandrashekhar</div>`,
poster:"10.jpg",
},
{
id:11,
songName:`A.W & Ava Max<br>
<div class="subtitle">Alan Walker/div>`,
 poster:"11.jpg",
},
{
id:12,
songName:`Alone<br> 
<div class="subtitle">Alan Walker</div>`,
poster:"12.jpg",
},
{
    id:13,
    songName:`Darkside<br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"13.jpg",
    },
    {
    id:14,
    songName:`Humnava Mera<br>
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster:"14.jpg",
    },
    {
     id:15,
    songName:`A.Walker-Mixup<br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"15.jpg",
    },
    {
    id:16,
    songName:`Hukum <br>
    <div class="subtitle">anirudh ravichander</div>`,
     poster:"16.jpg",
    },
    {
    id:17,
    songName:`Alan Walker RCB<br> 
    <div class="subtitle">Alan Walker</div>`,
    poster:"17.jpg",
    },
    {
        id:18,
       songName:`Ignite<br>
       <div class="subtitle">Alan Walker</div>`,
       poster:"18.jpg",
       },
       {
       id:19,
       songName:`Meri Aashiqui<br>
       <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"19.jpg",
       },
       {
       id:20,
       songName:`On My Way <br> 
       <div class="subtitle">Alan Walker</div>`,
       poster:"20.jpg",
       },
]

//serch data start
let serch_result = document.getElementsByClassName("serch_result")[0];
songs.forEach(element => {
    const {id,songName,poster} = element
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add("card");
   card.href = "#" + id;


    card.innerHTML = `
    <img src="${poster}" alt="">
        <div class="content">
        ${songName}
        </div>
`;
serch_result.appendChild(card);
});
let input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup",()=>{
let input_value = input.value.toUpperCase();
let items = serch_result.getElementsByTagName('a');
 

for (let index = 0; index < items.length; index++) {
   let as = items[index].getElementsByClassName("content")[0]; 
    let text_value = as.textContent || as.innerHTML;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
        items[index].style.display = "flex";

    } else {
        items[index].style.display = "none";
    }
    if (input.value == 0) {
        serch_result.style.display = "none";
    } else {
        serch_result.style.display = "";
    }

    // let content = document.getElementsByClassName("content")[0];
    // content.addEventListener("click",()=>{
    
    //   let card = document.createElement('a');
    //   card.classList.add("card");
    // let ind=   card.href = `${index}.mp3`;
    // mainMaster = music.play();
    
  
    //   if (music.paused || music.currentTime <=0) {
    //     music.play();
    //     wave.classList.add("active1");
    //     masterplay.classList.remove("bi-play-fill");
    //     masterplay.classList.add("bi-pause-fill");
    // } else {
    //     music.pause();
    //     wave.classList.remove("active1");
    //     masterplay.classList.add("bi-play-fill");
    //     masterplay.classList.remove("bi-pause-fill");
    // }
    
    // })
}
});



//serch data end

Array.from(document.getElementsByClassName('songitem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})
let masterplay = document.getElementById("masterplay");
let wave = document.getElementById("wave");

masterplay.addEventListener('click',()=>{
if (music.paused || music.currentTime <=0) {
    music.play();
    wave.classList.add("active1");
    masterplay.classList.remove("bi-play-fill");
    masterplay.classList.add("bi-pause-fill");
} else {
    music.pause();
    wave.classList.remove("active1");
    masterplay.classList.add("bi-play-fill");
    masterplay.classList.remove("bi-pause-fill");
}
});

const makeALLPlay = ()=>{
Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
    el.classList.add("bi-play-circle-fill");
   el.classList.remove("bi-pause-circle-fill");
    })
}    

const makeALLbaground = ()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
    el.style.background = 'rgb(105,105,105,0)';
    })
}

index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let downlod_music = document.getElementById("downlod_music");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener("click",(el)=>{
        index = el.target.id;
        console.log(index);
        music.src = `${index}.mp3`;
        poster_master_play.src = `${index}.jpg`
        music.play();
        masterplay.classList.remove("bi-play-fill");
        masterplay.classList.add("bi-pause-fill");
    downlod_music.href = `${index}.mp3`
        let songTitles = songs.filter((els)=>{
        return els.id == index;
        });
      songTitles.forEach(elss =>{
        let  {songName} = elss;
       title.innerHTML = songName
       downlod_music.setAttribute('download',songName);
      });
      makeALLbaground();
      Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105,105,170.1)"
      makeALLPlay();
      el.target.classList.remove("bi-play-circle-fill");
      el.target.classList.add("bi-pause-circle-fill");
      wave.classList.add("active1");
    })
})
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
music.addEventListener("timeupdate",()=>{
let music_curr = music.currentTime;
let music_durr = music.duration;

let min1 = Math.floor(music_durr/60);
let sec1 = Math.floor(music_durr %60);

if (sec1 < 10) {
    sec1 = `0${sec1}`;
}
currentEnd.innerText = `${min1}.${sec1}`;

let min2 = Math.floor(music_curr/60);
let sec2 = Math.floor(music_curr %60);

if (sec2 < 10) {
    sec2 = `0${sec2}`;
}
currentStart.innerText = `${min2}.${sec2}`;

let progressbar = parseInt((music_curr / music_durr) * 100);
seek.value = progressbar;
let seekbar = seek.value;
bar2.style.width = `${seekbar}%`;
dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener('change',()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-off-fill");
    }
    if (vol.value > 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
    }
    if (vol.value > 50) {
        vol_icon.classList.add("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a /100;
});
let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click",()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `${index}.mp3`;
    poster_master_play.src = `${index}.jpg`
    music.play();
    masterplay.classList.remove("bi-play-fill");
    masterplay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els)=>{
    return els.id == index;
    });
  songTitles.forEach(elss =>{
    let  {songName} = elss;
   title.innerHTML =  songName
  });
  makeALLbaground();
  Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105,105,170.1)"
  makeALLPlay();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");    

})
next.addEventListener("click",()=>{
    index++;
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
    }
    music.src = `${index}.mp3`;
    poster_master_play.src = `${index}.jpg`
    music.play();
    masterplay.classList.remove("bi-play-fill");
    masterplay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els)=>{
    return els.id == index;
    });
  songTitles.forEach(elss =>{
    let  {songName} = elss;
   title.innerHTML = songName
  });
  makeALLbaground();
  Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105,105,170.1)"
  makeALLPlay();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1"); 
})

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_left.addEventListener("click",()=>{
pop_song.scrollLeft -=330;
});
pop_song_right.addEventListener("click",()=>{
    pop_song.scrollLeft +=330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_left.addEventListener("click",()=>{
item.scrollLeft -=330;
});
pop_art_right.addEventListener("click",()=>{
    item.scrollLeft +=330;
});

let shuffe = document.getElementsByClassName("shuffe")[0];
shuffe.addEventListener("click",()=>{
    let a = shuffe.innerHTML;
    switch (a) {
        case "next":
            shuffe.classList.add('bi-arrow-repeat');
            shuffe.classList.remove('bi-music-note-beamed');
            shuffe.classList.remove('bi-shuffle');
            shuffe.innerHTML = "repeat"
            break;
    
        case "repeat":
        shuffe.classList.remove('bi-arrow-repeat');
        shuffe.classList.remove('bi-music-note-beamed');
        shuffe.classList.add('bi-shuffle');
        shuffe.innerHTML = "random"
        break;
        case "random":
            shuffe.classList.remove('bi-arrow-repeat');
            shuffe.classList.add('bi-music-note-beamed');
            shuffe.classList.remove('bi-shuffle');
            shuffe.innerHTML = "next";
            break;
    }
});


const next_music = ()=>{
    if (index == songs.length) {
        index = 1;
    }else{
        index++;
    }
    
        music.src = `${index}.mp3`;
        poster_master_play.src = `${index}.jpg`
        music.play();
        masterplay.classList.remove("bi-play-fill");
        masterplay.classList.add("bi-pause-fill");
    
        let songTitles = songs.filter((els)=>{
        return els.id == index;
        });
      songTitles.forEach(elss =>{
        let  {songName} = elss;
       title.innerHTML =  songName
      });
      makeALLbaground();
      Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105,105,170.1)"
      makeALLPlay();
      el.target.classList.remove("bi-play-circle-fill");
      el.target.classList.add("bi-pause-circle-fill");
      wave.classList.add("active1");    
}
    
    const repeat_music = ()=>{
       index;  
            music.src = `${index}.mp3`;
            poster_master_play.src = `${index}.jpg`
            music.play();
            masterplay.classList.remove("bi-play-fill");
            masterplay.classList.add("bi-pause-fill");
        
            let songTitles = songs.filter((els)=>{
            return els.id == index;
            });
          songTitles.forEach(elss =>{
            let  {songName} = elss;
           title.innerHTML =  songName
          });
          makeALLbaground();
          Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105,105,170.1)"
          makeALLPlay();
          el.target.classList.remove("bi-play-circle-fill");
          el.target.classList.add("bi-pause-circle-fill");
          wave.classList.add("active1");    
    }
    const random_music = ()=>{
    if (index == songs.length) {
        index = 1;
    }else{
        index = Math.floor((Math.random() * index.length)+ 1);
    }
    
        music.src = `${index}.mp3`;
        poster_master_play.src = `${index}.jpg`
        music.play();
        masterplay.classList.remove("bi-play-fill");
        masterplay.classList.add("bi-pause-fill");
    
        let songTitles = songs.filter((els)=>{
        return els.id == index;
        });
      songTitles.forEach(elss =>{
        let  {songName} = elss;
       title.innerHTML =  songName
      });
      makeALLbaground();
      Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105,105,170.1)"
      makeALLPlay();
      el.target.classList.remove("bi-play-circle-fill");
      el.target.classList.add("bi-pause-circle-fill");
      wave.classList.add("active1");    
}
music.addEventListener("ended",()=>{
    let b = shuffe.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music();
            break;
            case "next":
              next_music();
                break;
      case "random":
      random_music();
      break;
    }
});


 let menu = document.getElementsByTagName("div")[0];
 let btn = document.getElementById("btn");
 let btn2 = document.getElementById("btn2");

 btn.addEventListener("click",()=>{
    menu.style.display = "flex"
    menu.style.transform = "translateZ(100%)"
    btn.style.display = "none"
     btn2.style.display = "flex"
 });
 btn2.addEventListener("click",()=>{
    menu.style.display = "none"
     menu.style.transform = "translateZ(100%)"
     btn2.style.display = "none"
         btn.style.display = "flex"
 });
 let keyup = document.querySelector("#keyup");
 let keydown = document.querySelector("#keydown");
let menu_song = document.querySelector(".master_play");
let img = document.querySelector("#poster_master_play");
let icon = document.querySelector(".icon");
let A1 = document.querySelector("#A1");
let bar = document.querySelector(".bar");
let subtitle = document.getElementsByClassName("subtitle");
 
  let ki =   keyup.addEventListener("mouseover",()=>{
    keyup.style.display = "none"
    menu_song.style.margin = "-720px 0px 0px -110px";
    menu_song.style.height = "800px";  
    menu_song.style.opacity = "1"; 
    menu_song.style.transition = "all 0.3s linear";  
    img.style.height = "17rem"
    img.style.width = "17rem"
    img.style.margin = "-370px 0px 0px -20px";
    // img.style.boxShadow = "45px 343px 640px 143px"
     img.style.borderRadius = "45px"
     img.style.transition = "all 0.3s linear";  
    icon.style.margin = "508px 0px 0px -211px";
    icon.style.visibility = "visible"
     A1.style.fontSize = "17px"
     A1.style.position = "fixed";
     A1.style.left = "24px";
     back.style.fontSize = "37px"
     back.style.position = "fixed";
     back.style.left = "78px";
     back.style.opacity = "0.5";
     masterplay.style.fontSize = "37px"
     masterplay.style.position = "fixed";
     masterplay.style.left = "144px";
     masterplay.style.top = "590px";
     masterplay.style.background = "rgb(105,105,170.1)";
     next.style.fontSize = "37px"
     next.style.position = "fixed";
     next.style.left = "228px";
     next.style.opacity = "0.5";
     downlod_music.style.fontSize = "21px"
     downlod_music.style.position = "fixed";
     downlod_music.style.left = "294px";
     currentStart.style.position = "relative";
     currentStart.style.left = "-417px";
     currentStart.style.top = "153px";
    currentStart.style.visibility = "visible"
     bar.style.position = "relative";
     bar.style.left = "-665px";
     bar.style.top = "153px";
     bar.style.width = "240px";
     bar.style.visibility = "visible"
     currentEnd.style.left = "-664px";
     currentEnd.style.top = "154px";
    currentEnd.style.visibility = "visible"
     title.style.left = "-270px";
     title.style.top = "31px";
     title.style.fontSize = "20px"; 
     wave.style.top = "23px"
     keydown.style.display = "block"
     keydown.style.top = "-352px"
     keydown.style.left = "130px"
    keydown.style.fontSize = "20px"
});
keydown.addEventListener("mouseover",()=>{
    keyup.style.display = "flex"
    menu_song.style.margin = "";
    menu_song.style.height = "";  
    menu_song.style.opacity = ""; 
    menu_song.style.transition = "all 0.3s linear";  
    img.style.height = ""
    img.style.width = ""
    img.style.margin = "";
    // img.style.boxShadow = "45px 343px 640px 143px"
     img.style.borderRadius = ""
     img.style.transition = "";  
    icon.style.margin = "";
    icon.style.visibility = ""
     A1.style.fontSize = ""
     A1.style.position = "";
     A1.style.left = "";
     back.style.fontSize = ""
     back.style.position = "";
     back.style.left = "";
     back.style.opacity = "";
     masterplay.style.fontSize = ""
     masterplay.style.position = "";
     masterplay.style.left = "";
     masterplay.style.top = "";
     masterplay.style.background = "";
     next.style.fontSize = ""
     next.style.position = "";
     next.style.left = "";
     next.style.opacity = "";
     downlod_music.style.fontSize = ""
     downlod_music.style.position = "";
     downlod_music.style.left = "";
     currentStart.style.position = "";
     currentStart.style.left = "";
     currentStart.style.top = "";
    currentStart.style.visibility = ""
     bar.style.position = "";
     bar.style.left = "";
     bar.style.top = "";
     bar.style.width = "";
     bar.style.visibility = ""
     currentEnd.style.left = "";
     currentEnd.style.top = "";
    currentEnd.style.visibility = ""
     title.style.left = "";
     title.style.top = "";
     title.style.fontSize = ""; 
     wave.style.top = ""
     keydown.style.display = ""
     keydown.style.top = ""
     keydown.style.left = ""
       keydown.style.fontSize = ""
})
 next.addEventListener("click",()=>{
   menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
   menu_song.style.backgroundSize = "cover"
   menu_song.style.backgroundRepeat = "no-repeat"
 })
 back.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  });
 
  let mainMaster = document.getElementById("1");
//   console.log(mainMaster);
 mainMaster.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster2 = document.getElementById("2");
//   console.log(mainMaster2);
 mainMaster2.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster3 = document.getElementById("3");
//   console.log(mainMaster);
 mainMaster3.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster4 = document.getElementById("4");
//   console.log(mainMaster);
 mainMaster4.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster5 = document.getElementById("5");
//   console.log(mainMaster);
 mainMaster5.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster6 = document.getElementById("6");
//   console.log(mainMaster);
 mainMaster6.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster7 = document.getElementById("7");
//   console.log(mainMaster);
 mainMaster7.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster8 = document.getElementById("8");
//   console.log(mainMaster);
 mainMaster8.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster9 = document.getElementById("9");
  //   console.log(mainMaster);
   mainMaster9.addEventListener("click",()=>{
      menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
      menu_song.style.backgroundSize = "cover"
      menu_song.style.backgroundRepeat = "no-repeat"
    })
  let mainMaster10 = document.getElementById("10");
//   console.log(mainMaster);
 mainMaster10.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster11 = document.getElementById("11");
//   console.log(mainMaster);
 mainMaster11.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster12 = document.getElementById("12");
//   console.log(mainMaster);
 mainMaster12.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster13 = document.getElementById("14");
//   console.log(mainMaster);
 mainMaster13.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster14 = document.getElementById("14");
//   console.log(mainMaster);
 mainMaster14.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster15 = document.getElementById("15");
//   console.log(mainMaster);
 mainMaster15.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster16 = document.getElementById("16");
//   console.log(mainMaster);
 mainMaster16.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster17 = document.getElementById("17");
//   console.log(mainMaster);
 mainMaster17.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster18 = document.getElementById("18");
//   console.log(mainMaster);
 mainMaster18.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster19 = document.getElementById("19");
//   console.log(mainMaster);
 mainMaster19.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  let mainMaster20 = document.getElementById("20");
//   console.log(mainMaster);
 mainMaster20.addEventListener("click",()=>{
    menu_song.style.background = `linear-gradient(rgba(22,22,22,0.8),rgba(22,22,22,99)),url(${index}.jpg)` 
    menu_song.style.backgroundSize = "cover"
    menu_song.style.backgroundRepeat = "no-repeat"
  })
  