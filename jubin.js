const music = new Audio('21.mp3');
// music.play();
const songs = [ 
{
id:1,
songName:`Chitthi<br>
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster:"21.jpg",
},
{
id:2,
songName:`On My Way <br>
<div class="subtitle">Alan Walker</div>`,
poster:"22.jpg",
},
{
 id:3,
songName:`Main Rahoon Sada Yuhi Tera Yaar Banke<br>
<div class="subtitle">Jubin Nautiyal</div>`,
poster:"3.jpg",
},
{
id:4,
songName:`hua ha aaj phali ba<br>
 <div class="subtitle">Arman malik</div>`,
poster:"24.jpg",
},
{
id:5,
songName:`The Spectre<br>
 <div class="subtitle">Alan Walker</div>`,
 poster:"25.jpg",
},
{
id:6,
songName:`Alan Walker-Faded<br>
 <div class="subtitle">Alan Walker</div>`,
 poster:"26.jpg",
},
{
id:7,
 songName:`Zindagi<br>
<div class="subtitle">Jubin Nautiyal</div>`,
poster:"7.jpg",
},
{
id:8,
songName:`On My Way <br>
<div class="subtitle">Alan Walker</div>`,
poster:"28.jpg",
},
{
id:9,
songName:`Rim Jhim Song <br>
<div class="subtitle">Jubin Nautiyal</div>`,
poster:"9.jpg",
},
{
 id:10,
songName:`Ishq Karu Song Hindi<br>
<div class="subtitle">Vishal Chandrashekhar</div>`,
poster:"30.jpg",
},
{
id:11,
songName:`Alan Walker & Ava Max<<br>
<div class="subtitle">Alan Walker/div>`,
 poster:"31.jpg",
},
{
id:12,
songName:`Alone<br> 
<div class="subtitle">Alan Walker</div>`,
poster:"32.jpg",
},
{
    id:13,
    songName:`Darkside<br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"33.jpg",
    },
    {
    id:14,
    songName:`Humnava Mera<br>
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster:"14.jpg",
    },
    {
     id:15,
    songName:`Alan Walker-Mixup<br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"35.jpg",
    },
    {
        id:16,
       songName:`Alan Walker-Mixup<br>
       <div class="subtitle">Alan Walker</div>`,
       poster:"36.jpg",
       },
]

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
})


// let btn12 = document.getElementById("btn12");

// const display = (event)=>{
//     console.log( event.width);
//     $0 = document.getElementsByClassName("menu_side").style = `${event.width}`;
// }

// btn12.addEventListener("click",display)
