// плавный скролл

gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: ".scroll-trigger-ready__worm-wrap",
      start: "top 90%",
      end: "bottom 30%",
    },
});

// переключение слайдеров

const infoBlocks = {
    frontend: 'frontend_slide',
    backend: 'backend_slide',
    devops: 'devops_slide',
    systemAnalyst: 'systemAnalyst_slide',
    projectManager: 'projectManager_slide',
};

blocks = document.querySelectorAll(".block");
jobsSlider = document.querySelectorAll(".result__info");

blocks.forEach(block => {
    block.addEventListener('click', (event) => {
        id = event.currentTarget.id; // frontend
        getSlider(infoBlocks[id]);
        getImageSlider(event.currentTarget.querySelector('img'));
    });
});
// переключение слайдеров
function getSlider(job) 
{

    jobsSlider.forEach((jobSlide) => {
        if (jobSlide.id === job) {
            jobSlide.classList.remove("non_visible");
            jobSlide.classList.add("active");
        } else {
            jobSlide.classList.add("non_visible");
            jobSlide.classList.remove("active");

        }
        console.log(jobSlide);
    })
}

// добавление картинок
function getImageSlider(slider)
{
    blocks.forEach((block) => {
        block.querySelector('img').classList.remove('active_img');
    })

    slider.classList.add('active_img');
}

// кнопка download portfolio

buttonsDownloads = document.querySelectorAll(".btn_section__button");

// якорь на contact

const buttonContact = document.querySelector(".contact_btn");

buttonContact.addEventListener('click', () => {
    document.getElementById('hireUs').scrollIntoView({
        behavior: 'smooth' // Плавный скролл
    });
})
