// Navigation color and height change events 
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
 if(window.scrollY > nav.offsetHeight + 300 ) {
 nav.classList.add('now')
} else {
  nav.classList.remove('now')
}
}