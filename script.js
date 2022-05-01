const block = document.getElementById('block');
const hole = document.getElementById('hole');
const character = document.getElementById("character");

hole.addEventListener('animationiteration', function() {
    const random = -((Math.random()*300)+150);
    hole.style.top = random +"px";
});
setInterval(function(){
    const characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top = (characterTop + 3) + "px";
}, 10);