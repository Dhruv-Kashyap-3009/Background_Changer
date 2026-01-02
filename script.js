function decideColor(){
    let color = "#";
    let shades = "0123456789ABCDEF";
    for(let i=0;i<6;i++){
        color += shades[Math.floor(Math.random()*16)];
    }
    return color;
}

let set = null;
function StartChangingBackground(){
    if(set == null){
        set = setInterval(()=>{
        document.body.style.backgroundColor = decideColor();
    }, 250)
    }
}

document.querySelector('#start').addEventListener('click', function(e){
    StartChangingBackground();
})

document.querySelector('#stop').addEventListener('click', function(e){
    clearInterval(set);
    set = null;
})
