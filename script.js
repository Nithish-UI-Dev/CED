// Navbar
const Toggle = document.querySelector('#Primary-menu-toggle');
const Navbar = document.querySelector('#Primary-menu');
const MobileMenuAnchor = document.querySelectorAll('.Menu-Close');

Toggle.addEventListener('click', () => {
    Navbar.classList.toggle('slide');
    Navbar.classList.toggle('open');
    Toggle.classList.toggle('cross');
});

for (let i = 0; i < MobileMenuAnchor.length; i++) {
  MobileMenuAnchor[i].addEventListener("click", function () {
    Navbar.classList.remove('slide');
    Navbar.classList.remove('open');
    Toggle.classList.remove('cross');
  });
}

window.onclick = function (event) {
    if (event.target == Navbar) {
        Navbar.classList.remove('slide');
        Navbar.classList.remove('open');
        Toggle.classList.remove('cross');
    }
}