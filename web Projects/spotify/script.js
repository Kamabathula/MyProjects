console.log("Welcome to Spotify");

//instialize variables
let songIndex = 0;
let audioElement = new Audio('1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName : "Hate me", filePath : "songs/1.mp3.mp3", coverPath:"covers/1.jsp"},
    {songName : "Rolex ", filePath : "songs/1.mp3", coverPath:"covers/1.jsp"},
    {songName : "Hope", filePath : "songs/1.mp3", coverPath:"covers/1.jsp"} ,
    {songName : "SAD", filePath : "songs/1.mp3" , coverPath:"covers/1.jsp"}
]

//Handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        }
    
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
} )