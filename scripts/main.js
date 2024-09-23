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
    })
}

// добавление картинок к блокам
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

 // секция с цифрами

clients = document.querySelector(".clients"); // 70
experience = document.querySelector(".experience"); // 10+
projects = document.querySelector(".projects"); // 90+
members = document.querySelector(".members"); // 15

const countTargetClients = 70;
const countTargetExperience = 10; // +
const countTargetProjects = 90; // +
const countTargetMembers = 15; 

let countClients = 0;
let countExperience = 0; // +
let countProjects = 0; // +
let countMembers = 0;

const intervalMembers = setInterval(() => {
    countMembers++;
    members.textContent = countMembers;
    if (countMembers === countTargetMembers) {
        clearInterval(intervalMembers);  // Остановить, когда достигнет 100
    }
}, 150);

const intervalExperience = setInterval(() => {
    countExperience++;
    experience.textContent = countExperience;
    if (countExperience === countTargetExperience) {
        clearInterval(intervalExperience);  // Остановить, когда достигнет 100
    }
}, 120);


const intervalProjects = setInterval(() => {
    countProjects++;
    projects.textContent = countProjects;
    if (countProjects === countTargetProjects) {
        clearInterval(intervalProjects);  // Остановить, когда достигнет 100
    }
}, 20);


 
const intervalClients = setInterval(() => {
    countClients++;
    clients.textContent = countClients;
    if (countClients === countTargetClients) {
        clearInterval(intervalClients);  // Остановить, когда достигнет 100
    }
}, 30);

