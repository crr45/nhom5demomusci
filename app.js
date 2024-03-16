

const songs = [
    {
        id: 1,
        songName: `Vuelo De Mexico <br> 
        <div class="subtile">Anónimo.mp3 </div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Head Will Roll <br> 
        <div class="subtile">SCXLETTE </div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: `Chìm Sâu <br> 
        <div class="subtile">MCK </div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `Muộn Rồi Mà Sao Còn <br> 
        <div class="subtile">Sơn Tùng MTP </div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Hit Me Up <br> 
        <div class="subtile">Binz </div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Drunk and Nasty x Skeletons  <br> 
        <div class="subtile">Pi’erre Bourne / Playboi Carti </div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `White Night <br> 
        <div class="subtile">Honkai Star Rail </div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songName: `Simp Gái 808 <br> 
        <div class="subtile">LowG </div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songName: `TUCA DONKA + HAKARI DANCE  <br> 
        <div class="subtile">GANGSTER CITY </div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songName: `Orange Sector <br> 
        <div class="subtile">Farben </div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songName: `WTF 2 <br> 
        <div class="subtile">Ugovhb </div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `Bling-Bang-Bang-Born <br> 
        <div class="subtile">Creepy Nuts </div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songName: `Daddy's Home <br> 
        <div class="subtile">Usher </div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `"Nice Fighto Boy" × Mexican Funk <br> 
        <div class="subtile">PHONK DOMAIN </div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songName: `Spider-Man "Am I Dreaming" <br> 
        <div class="subtile">Metro Boomin x A$AP Rocky x Roisee </div>`,
        poster: "img/15.jpg"
    },

]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
})


//tim kiem nhac va go ten tim kiem nhac
let timkiem = document.getElementsByClassName('timkiem')[0];

songs.forEach(element =>{
    const {id, songName, poster}= element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>`;
        timkiem.appendChild(card);
});


let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = timkiem.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_va = as.textContent || as.innerHTML;

        if (text_va.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        }else{
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            timkiem.style.display = "none";
        }else{
            timkiem.style.display = "";
        }
    }
})

// phần chạy nhạc, tạm dừng nhạc
const music = new Audio('audio/chimSau.mp3')
// music.play();
let play_Mus = document.getElementById('play_Mus');
let wave = document.getElementById('wave');

play_Mus.addEventListener('click', ()=>{
if (music.paused || music.currentTime <= 0) {
   music.play();
   wave.classList.add('active1');
   play_Mus.classList.remove('bi-play-fill');
   play_Mus.classList.add('bi-pause-fill');
}
else{
   music.pause();
   wave.classList.remove('active1');
   play_Mus.classList.add('bi-play-fill');
   play_Mus.classList.remove('bi-pause-fill');
}
});

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllback = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)'
    })
}




// chỉnh sửa thành tên nhạc và ảnh
let index = 0;
let poster_master_play = document.getElementById ('poster_master_play');
let title = document.getElementById ('title');
Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((e)=>{
e.addEventListener('click', (el)=>{
    let index = el.target.id;
    // console.log(index);
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =  `img/${index}.jpg`;
    music.play();
    play_Mus.classList.remove('bi-play-fill');
    play_Mus.classList.add('bi-pause-fill');

let songTile = songs.filter((els)=>{
return els.id == index;
});
songTile.forEach(elss =>{
    let {songName} = elss;
    title.innerHTML = songName;

});

makeAllback();
Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";

makeAllplay ();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');


});
})
//time chạy của nhạc
let currentStart = document.getElementById('currentStart');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;//hiển thị time theo 1,1s
    let music_durr = music.duration;
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    // console.log(min1);
if(sec1 < 10){
sec1 = `0${sec1}`;
}
    currentStart.innerText = `${min1}:${sec1}`;
//chay đoạn nhạc

let baR = parseInt((music_curr/music_durr)*100);
seek.value = baR;
let seekbar = seek.value;
bar2.style.width = `${seekbar}%`;
dot.style.left = `${seekbar}%`
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
index = Array.from(document.getElementsByClassName('songItem')).length;
console.log(index)
back.addEventListener('click', () => {
    index -= 1;
    if(index < 1){
       index = Array.from(document.getElementsByClassName('songItem')).length;
       
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =  `img/${index}.jpg`;
    music.play();
    play_Mus.classList.remove('bi-play-fill');
    play_Mus.classList.add('bi-pause-fill');

let songTile = songs.filter((els)=>{
return els.id == index;
});
songTile.forEach(elss =>{
    let {songName} = elss;
    title.innerHTML = songName;

});

music.addEventListener('ended', ()=>{
    index++;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =  `img/${index}.jpg`;
    music.play();
    play_Mus.classList.remove('bi-play-fill');
    play_Mus.classList.add('bi-pause-fill');
    let songTile = songs.filter((els) =>{
    return els.id == index;
    });

});

makeAllback();
Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
makeAllplay ();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})


next.addEventListener('click', ()=>{
    index ++;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =  `img/${index}.jpg`;
    music.play();
    play_Mus.classList.remove('bi-play-fill');
    play_Mus.classList.add('bi-pause-fill');

let songTile = songs.filter((els)=>{
return els.id == index;
});
songTile.forEach(elss =>{
    let {songName} = elss;
    title.innerHTML = songName;

});

makeAllback();
Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
makeAllplay ();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

