let image__banners = document.querySelector('.main__banner .image__banners');
let dots = document.querySelectorAll('.main__banner .dots .dot');
let items = document.querySelectorAll('.main__banner .image__banners .image__banner--item');
let prev = document.getElementById('pre');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

pre.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => { next.click() }, 3000)

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    image__banners.style.left = -checkLeft + 'px';
    let lastActiveDot = document.querySelector('.main__banner .dots div.dot--active');
    lastActiveDot.classList.remove('dot--active');
    dots[active].classList.add('dot--active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 3000);

}

dots.forEach((div, key) => {
    div.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})

