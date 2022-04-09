const left = document.querySelector('.left');
const right = document.querySelector('.right');
// const imgDiv = document.querySelector('.img-div:not(.hidden)')
const images = document.querySelectorAll('.image');
const sections = document.querySelectorAll('.section')
// console.log(imgDiv.length)

left.addEventListener('click', function(){
    change(-1);
});

right.addEventListener('click', function(){
    change(+1);
});

function change(offset) {
    var current = null;
    for(let i = 0; i < images.length; i++){
        if(images[i].classList.contains('block')) {
            current = i;
            break;
        }
    }
    
    // check valid change
    if(current + offset < 0 || current + offset >= images.length) return;
    if(current + offset < 0 || current + offset >= sections.length) return;

    images[current].classList.remove("block");
    images[current].classList.add("hidden");

    images[current+3].classList.remove("block");
    images[current+3].classList.add("hidden");

    sections[current].classList.remove("block");
    sections[current].classList.add("hidden");
    
    images[current + offset].classList.remove("hidden");
    images[current + offset].classList.add("block");

    images[current + offset + 3].classList.remove("hidden");
    images[current + offset + 3].classList.add("block");

    sections[current + offset].classList.remove("hidden");
    sections[current + offset].classList.add("block");
}

