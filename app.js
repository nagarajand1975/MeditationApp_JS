let video = document.querySelector('video');
let audio = document.querySelector('audio');
let TimeDisplay= document.querySelector('.Time_Display h1');
let buttonContainer=document.querySelectorAll('.button-container button');
let playbutton=document.querySelector('#playbtn');
let stopbutton = document.querySelector('#stopbtn');
let settingsbutton = document.querySelector("#settingsbtn");
let meditationmode = document.querySelector(".meditationmode");

let clouds = document.querySelector(".meditationmode .clouds");
let beach = document.querySelector(".meditationmode .beach");
let lovers = document.querySelector(".meditationmode .lovers");
let  rain= document.querySelector(".meditationmode .rain");

let inoutflag=0;
let counter=0;
let duration=300;
stopbutton.style.display='none';

clouds.addEventListener('click', function () {

    video.src='./videos/clouds.mp4'
    audio.src='./audios/cloud.mp3'
    meditationmode.style.right = -150;
    stopbutton.style.display = 'none';
    playbutton.style.display = 'block';
    inoutflag = 0;
})

lovers.addEventListener('click', function () {

    video.src = './videos/lovers.webm'
    audio.src = './audios/lovers.mp3'
    meditationmode.style.right = -150;
    stopbutton.style.display = 'none';
    playbutton.style.display = 'block';
    inoutflag = 0;
})

rain.addEventListener('click', function () {

    video.src = './videos/rain.webm'
    audio.src = './audios/rain.mp3'
    meditationmode.style.right = -150;
    stopbutton.style.display = 'none';
    playbutton.style.display = 'block';
    inoutflag = 0;
})


beach.addEventListener('click', function () {

    video.src = './videos/beach.mp4'
    audio.src = './audios/beach.mp3'
    meditationmode.style.right = -150;
    stopbutton.style.display = 'none';
    playbutton.style.display = 'block';
    inoutflag = 0;
})


settingsbutton.addEventListener('click', function () {
    if (inoutflag==0)
    {
         meditationmode.style.right=0;
         console.log('in');
         inoutflag=1;
    }
         else
         {
        meditationmode.style.right = -150;
        console.log("out");
        inoutflag=0;
         }

    console.log(meditationmode.style.right)
})

playbutton.addEventListener('click',function(){
    stopbutton.style.display='block';
    playbutton.style.display='none';
    audio.play();
    video.play();
})

stopbutton.addEventListener('click', function () {
    stopbutton.style.display = 'none';
    playbutton.style.display = 'block';
    audio.pause();
    video.pause();
})

buttonContainer.forEach(function (button){

    button.addEventListener('click',function(){
       // audio.play();
        console.log('clicked');
        duration=this.getAttribute('data-time');
        let seconds = Math.floor(duration % 60);
        let minutes = Math.floor(duration / 60);
        TimeDisplay.textContent = minutes + ':' + seconds;
        audio.currentTime=0;
    })

})

audio.ontimeupdate=function(){

    currenttime=audio.currentTime;

    let elapsed = duration - currenttime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    //counter = video.currentTime;
    TimeDisplay.textContent= minutes + ':' + seconds;
    //console.log(audio.currentTime);

    
}