const play=document.getElementById('play');
const title=document.getElementById('title');
const artist=document.getElementById('artist')
const back=document.getElementById('back');
const forward=document.getElementById('forward');
const progress_div=document.getElementById("progrss_div");
const progress=document.getElementById("progress");
let fullduration=document.getElementById("duration");
const current_time=document.getElementById("current_time");
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


//progress js works
/*
  FORMULA FOR MUSIC PROGRESS
*/
audio.addEventListener("timeupdate",(e)=>{
//    console.log(e) console.log(currentTime) console.log(duration);;;
   const {currentTime,duration}=e.srcElement;
   let progrss_time=(currentTime/duration)*100;
   progress.style.width=`${progrss_time}%`;

   //music Duration update duration come in second 
   console.log(duration);
   let min_duration=Math.floor(duration/60);
   let sec_duration=Math.floor(duration%60);
   let total_du=`${min_duration}:${sec_duration}`;
   if(duration){ 
    fullduration.textContent=`${total_du}`;
   }

   //current time 
   let curr_min=Math.floor(currentTime/60);
   let curr_sec=Math.floor(currentTime%60);
    if(curr_sec<10){
        curr_sec=`0${curr_sec}`
    }
    let current_du=`${curr_min}:${curr_sec}`;
   if(currentTime){
     current_time.textContent=`${current_du}`;
   } 
   //progress on click functionality
   
})

progress_div.addEventListener("click",function(event){
    console.log(event);
    const {duration}=audio;
    let move_progress=(event.offsetX/event.srcElement.clientWidth)*duration;
    console.log(move_progress)
    audio.currentTime=move_progress;
})

//next song 
audio.addEventListener("ended",nextSong);
forward.addEventListener("click",nextSong);
back.addEventListener("click",prevSongs);

