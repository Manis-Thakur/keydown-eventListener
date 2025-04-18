
const box1 = document.getElementById('box1');
const myH1 = document.getElementById('myh1');
let move = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
    if (event.key.startsWith("Arrow")) {

        switch (event.key) {
            case "ArrowUp":
                y -= move;
                break;
            case "ArrowDown":
                y += move;
                break;
            case "ArrowRight":
                x += move;
                break;
            case "ArrowLeft":
                x -= move;
                break;
        }

        box1.style.top = `${y}px`;
        box1.style.left = `${x}px`;
    }
})