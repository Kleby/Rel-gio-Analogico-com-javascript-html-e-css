document.addEventListener('DOMContentLoaded', () => {
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    let date = new Date();
    
    setInterval(()=>{
        // playAudio()
        date.setSeconds(date.getSeconds() + 1);
        seconds.style.rotate = (date.getSeconds() * (360 / 60)) + "deg"
        minutes.style.rotate = (date.getMinutes() * (360 / 60)) + "deg";
        hours.style.rotate = ((date.getHours() * 360 / 12) ) + "deg";
        date = new Date();
    }, 1000);

    // function playAudio(){
    //     const audio = document.getElementById('audio');
    //     audio.src = './src/assets/sounds/clock.mp3';
    //     audio.play();
    // }

})