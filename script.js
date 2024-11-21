const primaryNav = document.querySelector('.primary-nav')
const navToggle = document.querySelector('.mobile-nav-toggle')
const menuButtons = Array.from(document.querySelectorAll('.nav-li'))
const reveals = document.querySelectorAll('.reveal')
const revealsSideways = document.querySelectorAll('.reveal-sideways')
const menuButton = document.getElementById('icon-menu-button')
const wrapper = document.getElementById('wrapper')
const projectScroll1 = Array.from(document.getElementById('project-scroll-1').children)
let projectsList1 = []
const projectScroll2 = Array.from(document.getElementById('project-scroll-2').children)
let projectsList2 = []

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
        menuButton.setAttribute('class', 'fa-solid fa-xmark fa-3x')
    } else if (visibility === 'true') { 
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
        menuButton.setAttribute('class', 'fa-solid fa-bars fa-3x')
    }
})

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
        menuButton.setAttribute('class', 'fa-solid fa-bars fa-3x')
    })
})

wrapper.addEventListener('scroll', () => {
    for(let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight
        let revealtop = reveals[i].getBoundingClientRect().top
        let revealpoint = 150

        if (revealtop < windowheight - revealpoint) { 
            reveals[i].classList.add('active')
        } else { 
            reveals[i].classList.remove('active')
        }
    }
})

wrapper.addEventListener('scroll', () => {
    for(let i = 0; i < revealsSideways.length; i++) {
        let windowheight = window.innerHeight
        let revealtop = revealsSideways[i].getBoundingClientRect().top
        let revealpoint = 150

        if (revealtop < windowheight - revealpoint) { 
            revealsSideways[i].classList.add('active')
        } else { 
            revealsSideways[i].classList.remove('active')
        }
    }
})

projectScroll1.forEach(object => {
    if (object.tagName == "A") {
        projectsList1.push(object)
    }
    
    if (object.id == "arrow-right") {
        object.addEventListener("click", () => {
            let x = projectsList1.shift()
            projectsList1.push(x)

            console.log(projectsList1)
            for (let i = 0; i < projectsList1.length; i++) {
                projectsList1[i].setAttribute('class', 'scroll-image pos-' + i)
            }
        })
    }

    if (object.id == "arrow-left") {
        object.addEventListener("click", () => {
            let x = projectsList1.pop()
            projectsList1.unshift(x)

            console.log(projectsList1)
            for (let i = 0; i < projectsList1.length; i++) {
                projectsList1[i].setAttribute('class', 'scroll-image pos-' + i)
            }
        })
    }
})

projectScroll2.forEach(object => {
    if (object.tagName == "A") {
        projectsList2.push(object)
    }
    
    if (object.id == "arrow-right") {
        object.addEventListener("click", () => {
            let x = projectsList2.shift()
            projectsList2.push(x)

            console.log(projectsList2)
            for (let i = 0; i < projectsList2.length; i++) {
                projectsList2[i].setAttribute('class', 'scroll-image pos-' + i)
            }
        })
    }

    if (object.id == "arrow-left") {
        object.addEventListener("click", () => {
            let x = projectsList2.pop()
            projectsList2.unshift(x)

            console.log(projectsList2)
            for (let i = 0; i < projectsList2.length; i++) {
                projectsList2[i].setAttribute('class', 'scroll-image pos-' + i)
            }
        })
    }
})