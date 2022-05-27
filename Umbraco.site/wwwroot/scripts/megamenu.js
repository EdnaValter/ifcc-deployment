const megaMenuBtn = document.querySelector("#toggle-mega-menu")
const megaMenu = document.querySelector("#mega-menu")
let megaMenuIsOpen = false;

document.body.addEventListener("click", (e) => {
    // Open mega menu on button click
    if (e.target == megaMenuBtn) {
        megaMenu.classList.toggle("d-none")
        megaMenuIsOpen = !megaMenuIsOpen;
    }

    // Close mega menu on click outside
    if (megaMenuIsOpen) {
        // If click inside mega menu, return
        if (e.target == megaMenu) return;
        // If click mega menu child, return
        if (megaMenu.contains(e.target)) return;
        // Don't override first button click action
        if (e.target == megaMenuBtn) return;

        megaMenu.classList.toggle("d-none")
        megaMenuIsOpen = !megaMenuIsOpen;
    }
})