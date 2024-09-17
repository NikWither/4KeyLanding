const sliderContainer = document.querySelector('.swipper__container')
const slideRight = document.querySelector('.right_slide')
const slideLeft = document.querySelector('.left_slide')
const upButton = document.querySelector('.up_button')
const downButton = document.querySelector('.down_button')
const slidesLength = 4; // количество свайпов

console.log(slidesLength)


let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight  = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength -1){
            activeSlideIndex = 0
        }
    }else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

// setInterval(() => {
//     changeSlide('up');
// }, 5000); // 3 sec