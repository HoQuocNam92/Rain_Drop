function rain () {
    let cloud = document.querySelector('.cloud');
    let rain = document.createElement('div');
    rain.classList.add('drop');
    cloud.appendChild(rain);
    let left = Math.floor(Math.random() * 310);
    let weight =  Math.random() * 5;
    let height = Math.random() * 50;
    let duration = Math.random() * 0.5;
    rain.style.left = left + 'px';
    rain.style.width = 0.5 +weight + 'px';
    rain.style.height = 0.5 + height + 'px';
    rain.style.animationDuration =1+ duration + 's';
    setTimeout(()=>{
        cloud.removeChild(rain);
    },2000)
}
setInterval(function(){
    rain();
},20)