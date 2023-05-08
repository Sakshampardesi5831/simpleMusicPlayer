const play=document.getElementById('play');
const title=document.getElementById('title');
const artist=document.getElementById('artist')
const back=document.getElementById('back');
const forward=document.getElementById('forward');
const audio=document.querySelector("audio");
const img=document.querySelector("img");
let isPlaying=false;

const songs=[
   {
     title:"sunflower",
     movieName:"sunflower",
     artist:"intro song" 
   },
   {
     title:"shyad",
     movieName:"love aaj kal 2",
     artist:"arjit singh"
   }
]



const playMusic=()=>{
    audio.play();
    isPlaying=true;
    play.classList.replace("ri-play-fill","ri-pause-fill");
    img.classList.add("anime");
}
// for pause funcationaly
const pauseMusic=()=>{
    audio.pause();
    isPlaying=false;
    play.classList.replace("ri-pause-fill","ri-play-fill");
    img.classList.remove("anime");
};

//event fire kar rha hai aur pata lagayega ki kaam kese ho  rha hai
play.addEventListener("click",function(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
})

const loadSongs=function(songs){
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    audio.src=songs.title+".mp3";
    img.src=songs.title+".jpg";
}
let songsIndex=0;
const nextSong =()=>{
    songsIndex=(songsIndex+1)%songs.length;
    loadSongs(songs[songsIndex]);
    playMusic();
}
const prevSongs =()=>{
    songsIndex=(songsIndex+-1+songs.length)%songs.length;
    loadSongs(songs[songsIndex]);
    playMusic();
}
forward.addEventListener("click",nextSong);
back.addEventListener("click",prevSongs);

