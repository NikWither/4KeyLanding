// переключение слайдеров

const infoBlocks = {
    frontend: 'frontend_slide',
    backend: 'backend_slide',
    devops: 'devops_slide',
    systemAnalyst: 'systemAnalyst_slide',
    projectManager: 'projectManager_slide',
};

gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: ".scroll-trigger-ready__worm-wrap",
      start: "top 90%",
      end: "bottom 30%",
    },
  });

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
// движение звезды
const star = document.querySelector(".rotating_star");

gsap.to(star, {
    rotation: 360,    // Поворачиваем на 360 градусов
    duration: 10,      // Время анимации 5 секунд
    repeat: -1,       // Повторение бесконечно
    ease: "linear"    // Равномерное вращение
});

// кнопка download portfolio

buttonsDownloads = document.querySelectorAll(".btn_section__button");

// движение круга

const share = document.querySelector(".share");

const solutions = document.querySelector("#solutions");
const tailored = document.querySelector("#tailored");
const forKeyClient = document.querySelector("#forKeyClient");

const loader = document.querySelector(".loader");
const loaderSectionCircle = document.querySelector(".loader__section");
const loaderSectionKeyboard = document.querySelector(".keyboard");

function shareMoving()
{
    // gsap.set(share, {x: -500, y: 0});

    gsap.timeline()
        .fromTo(solutions, 
            { opacity: 0 },  // Начальное состояние: текст ниже и уменьшен
            { opacity: 1, duration: 1, ease: "power1.out" }  // Конечное состояние: текст на месте и увеличивается
        )

        .add(() => {
            solutions.classList.add("non_visible");
        })
        // перемещение к первой цели
        .to(share, {duration: 1, x: -600, y: 90, scale: 1.4,  ease: "slow(0.7,0.7,false)"})
        .add(() => {
            tailored.classList.remove("non_visible");
        })
        // .to(tailored, {duration: 1, opacity: 1}) // проявление tailored
        .fromTo(tailored, 
            { opacity: 0 },  // Начальное состояние: текст ниже и уменьшен
            { opacity: 1, duration: 1, ease: "power4.out" }  // Конечное состояние: текст на месте и увеличивается
        )
        
        // Перемещение ко второй цели
        .to(tailored, {duration: 0.4, opacity: 0}) // проявление tailored
        .add(() => {
            tailored.classList.add("non_visible");
        })
        .to(share, {duration: 1, x: 10, y: 160, ease: "slow(0.7,0.7,false)", scale: 1.8,})
        
        .add(() => {
            forKeyClient.classList.remove("non_visible");
        })
        .fromTo(forKeyClient, 
            { opacity: 0 },  // Начальное состояние: текст ниже и уменьшен
            { opacity: 1, duration: 0.8, ease: "power4.out" }  // Конечное состояние: текст на месте и увеличивается
        )
        
        .to(forKeyClient, {duration: 0.2, opacity: 0})
        .to(share, {duration: 0.4, opacity: 0})
        .add(() => {
            share.remove();
        })
    
        
        // переключение на клавиатуру
        .add(() => {
            gsap.timeline()
                .to(loaderSectionCircle, {diration: 0.1, opacity: 0})
            gsap.timeline()
                .to(loader, {duration: 1.5, backgroundColor: 'rgba(73, 77, 90, 1)'})
            gsap.timeline()
                .add(() => {
                    loader.classList.add("preview");
                    loaderSectionKeyboard.classList.remove("non_visible");
                })
                .to(loaderSectionKeyboard, {duration: 1.5, opacity: 1});
        })
        .add(() => {
            keyboardsmoving();
        })

}

shareMoving();
// кнопки клавиатуры 

const keyboards = document.querySelectorAll(".keyboard__image");
const textUnderKeyboards = document.querySelector("#developmentTeam");


// подпрыгивание при наведении

function keyboardsmoving()
{
    keyboards.forEach((keyboard, index) => {
        gsap.to(keyboard, {
            y: -50,
            duration: 0.8,       // Время анимации
            ease: "power2.out",  // Плавное ускорение
            delay: index * 0.3,  // Задержка для каждого блока
            yoyo: true,          // Вернуть в исходное положение
            repeat: 1            // Повтор один раз для возврата
        })
    })
}

keyboards.forEach((step) => {
  step.addEventListener("mouseenter", () => {
    gsap.to(step, {
      y: -20,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  step.addEventListener("mouseleave", () => {
    gsap.to(step, {
      y: 0,
      duration: 0.7,
      ease: "bounce.out",
    });
  });
});

// якорь на contact

const buttonContact = document.querySelector(".contact_btn");

buttonContact.addEventListener('click', () => {
    document.getElementById('hireUs').scrollIntoView({
        behavior: 'smooth' // Плавный скролл
    });
})
