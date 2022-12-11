const gridLayout = document.querySelector(".grid_layout")
const menuIcon = document.querySelector(".menu_icon")



menuIcon.addEventListener("click", () => {
    gridLayout.classList.toggle("sidebar_active")
    menuIcon.classList.toggle("menu_icon_close")
})