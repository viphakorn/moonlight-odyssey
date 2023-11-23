const animateLeftElements = document.querySelectorAll("[data-scroll-animate='left']")
const animateRightElements = document.querySelectorAll("[data-scroll-animate='right']")
const animateFadeElements = document.querySelectorAll("[data-scroll-animate='fade']")
const bottomAnimateElements = document.querySelectorAll("[data-scroll-animate='bottom']")
const topAnimateElements = document.querySelectorAll("[data-scroll-animate='top']")

const animationObserverLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "-translate-x-full")
    }
  })
})
const animationObserverRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-x-full")
    }
  })
})
const animationObserverFade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0")
    }
  })
})
const animationObserverBottom = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-full")
    }
  })
})
const animationObserverTop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "-translate-y-full")
    }
  })
})

animateLeftElements.forEach((el) => animationObserverLeft.observe(el))
animateFadeElements.forEach((el) => animationObserverFade.observe(el))
animateRightElements.forEach((el) => animationObserverRight.observe(el))
bottomAnimateElements.forEach((el) => animationObserverBottom.observe(el))
topAnimateElements.forEach((el) => animationObserverTop.observe(el))

const menuToggle = document.querySelector("#menu-toggle")
