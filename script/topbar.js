function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.width === "250px") {
      sideMenu.style.width = "0";
    } else {
      sideMenu.style.width = "250px";
    }
  }


  const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.parentElement.classList.toggle('open');
});

function selectOption(option) {
  dropdownButton.textContent = option;
  dropdownMenu.parentElement.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.parentElement.classList.remove('open');
  }
});