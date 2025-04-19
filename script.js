    
const box1 = document.getElementById('box1');
const myH1 = document.getElementById('myh1');
let move = 10;
let x = 0;
let y = 100;

document.addEventListener("keydown", (event) => {
    const boxWidth = box1.offsetWidth;
    const boxHeight = box1.offsetHeight;
    const maxX =  window.innerWidth - boxWidth;
    const maxY =window.innerHeight -  boxHeight;
    if (event.key.startsWith("Arrow")) {

        switch (event.key) {
            case "ArrowUp":
                if(y - move >= 100)
                y -= move;
                break;
            case "ArrowDown":
                if(y + move <= maxY)
                y += move;
                break;
            case "ArrowRight":
            if(y + move <= maxX)
                x += move;
                break;
            case "ArrowLeft":
                if(x-move >= 0)
                x -= move;
                break;
        }

        box1.style.top = `${y}px`;
        box1.style.left = `${x}px`;
    }
})