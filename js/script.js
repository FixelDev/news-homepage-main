const toggle = document.querySelector(".navbar-toggle");

toggle.addEventListener("click", () =>
{
    toggle.classList.toggle("active");

    const sideNavigation = document.querySelector(".side-navigation");
    sideNavigation.classList.toggle("active");
})