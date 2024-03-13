const clockBox = document.querySelector('#clockBox');
const point = document.querySelector('.point');

const bars = []

for(let i = 1 ; i <= 60 ; i++){
    const bar = document.createElement('div');
    const miniBar = document.createElement('div');
    miniBar.classList.add('mini-bar');

    bar.id = i;
    bar.classList.add('point');
    bar.style.rotate = i * 6 + "deg";
    
    if((i % 5) === 0){
        miniBar.style.height = 16 + "px";
        const time = document.createElement('span');
        time.classList.add('numbers')
        time.innerText = i / 5;
        time.style.rotate = - (i * 6) - 180 + "deg"
        miniBar.appendChild(time)
    }
    bar.appendChild(miniBar);
    clockBox.appendChild(bar);
}
