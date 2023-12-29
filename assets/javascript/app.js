let sneakerImg = 1;

document.querySelector(".hambuger").addEventListener("click", e => {
    document.querySelector(".sidenav").style.display = "block";
})

document.querySelector(".close-icon").addEventListener("click", e => {
    document.querySelector(".sidenav").style.display = "none";
})

document.querySelector(".next").addEventListener("click", e => {
    sneakerImg = (sneakerImg + 1) === 5 ? 1 : sneakerImg + 1;
    document.querySelector(".slide-deck__img").src = `./assets/images/image-product-${sneakerImg}.jpg`
})

document.querySelector(".previous").addEventListener("click", e => {
    sneakerImg = (sneakerImg - 1) === 0 ? 4 : sneakerImg - 1;
    document.querySelector(".slide-deck__img").src = `./assets/images/image-product-${sneakerImg}.jpg`
})

