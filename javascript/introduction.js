var introback = document.getElementById('introduction-background');
var intro = document.getElementById('introduction');

introback.addEventListener('mousemove',(event)=>{
    introback.style.backgroundPositionX = - event.offsetX/10 + "px";
    intro.style.transform = " perspective(600px) rotateY("+(event.offsetX/40-20) +"deg)";
})

introback.addEventListener('mouseout',(event)=>{
    intro.style.transform = " perspective(600px) rotateY("+0 +"deg)";
})

