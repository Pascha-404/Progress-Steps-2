const progress = document.querySelector('#progress')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentProgress = 1;

function update() {
circles.forEach((circle, idx) => {
if (idx < currentProgress){
    circle.classList.add('active')
} else {
    circle.classList.remove('active')
}
})

    if (currentProgress === circles.length) {
        nextBtn.disabled = true;
        prevBtn.disabled = false;
    } else if (currentProgress === 1) {
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
    progress.style.width = ((currentProgress - 1) / (circles.length - 1) * 100) + `%`;
}

nextBtn.addEventListener('click', () => {
    currentProgress++;
    if (currentProgress > circles.length) {
        currentProgress = circles.length
    }
    update();

})

prevBtn.addEventListener('click', () => {
    currentProgress--;
    if (currentProgress < 1) {
        currentProgress = 1;
    }
    update();
})


