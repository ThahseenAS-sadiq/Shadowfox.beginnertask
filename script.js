const sideMenu = document.querySelector('#sideMenu');
const { navBar, navLinks } = newFunction();

const openMenu = function() {
    sideMenu.style.transform = 'translateX(-16rem)';
};

const closeMenu = function() {
    sideMenu.style.transform = 'translateX(16rem)';
};

function newFunction_1() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
            navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
        } 
        else {
            navBar.classList.remove('bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
            navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
        }
    });
} 

newFunction_1();

function newFunction() {
    const navBar = document.querySelector("nav");
    const navLinks = document.querySelector("nav ul");
    return { navBar, navLinks };
}

//<!--------------- light mode and dark mode------------------>

document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

// ...existing code...
function toggleTheme() {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark"
  );
}
// ...existing code...
