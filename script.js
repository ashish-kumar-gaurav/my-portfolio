const menuIcon = document.querySelector("#menu-icon")
const navLink = document.querySelector(".nav-links")
const toTop = document.querySelector("#to-top")

menuIcon.onclick=()=>{
    navLink.classList.toggle('active')
}


// Open / close the mobile menu
function setMenu(open) {
    navLink.classList.toggle("active", open)
    menuIcon.setAttribute("aria-expanded", open)
    menuIcon.querySelector("i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}

menuIcon.onclick = () => setMenu(!navLink.classList.contains("active"))

// Close the menu after clicking a link
navLink.querySelectorAll("a").forEach(link => {
    link.onclick = () => setMenu(false)
})

// Show the back-to-top button after scrolling
window.addEventListener("scroll", () => {
    toTop.classList.toggle("show", window.scrollY > 500)
})
toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" })

// Contact form (front end only, connect a service like Formspree to really send)
const form = document.querySelector("#contact-form")
const message = document.querySelector("#form-message")

form.addEventListener("submit", e => {
    e.preventDefault()
    message.textContent = "Thanks! I'll reply to " + form.email.value + " soon."
    form.reset()
})

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear()
