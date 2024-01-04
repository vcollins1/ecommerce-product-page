const qCount = document.querySelector(".quantity__text");
const incDec = document.querySelectorAll(".inc-dec");
const addCart = document.querySelector(".cart-btn");
const cartCount = document.querySelector(".shopping-cart__count");
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

document.querySelector(".shopping-cart").addEventListener("click", e => {
    document.querySelector(".cart").classList.toggle("open-cart");
})

incDec.forEach(btn => {
    btn.addEventListener("click", e => {
        const count = parseInt(qCount.innerHTML);
        if (e.target.classList.contains("minus")) {
            if (count > 0)
                qCount.innerHTML =  count - 1;
        } else if (e.target.classList.contains("plus"))
            qCount.innerHTML = count + 1
    })
})

addCart.addEventListener("click", e => {
    const quantity = parseInt(qCount.innerHTML);

    if (quantity > 0) {
        const cost = (quantity * 125.00).toFixed(2);
        document.querySelector(".item__count").innerHTML = quantity;
        document.querySelector(".item__total").innerHTML = `$${cost}`;
        qCount.innerHTML = "0";
        document.querySelector(".cart__content--items").style.display = "block";
        document.querySelector(".cart__content--empty").style.display = "none";
        cartCount.innerHTML = quantity;
        cartCount.style.display = "block";
    }
})

document.querySelector(".item__delete").addEventListener("click", e => {
    document.querySelector(".cart__content--items").style.display = "none";
    document.querySelector(".cart__content--empty").style.display = "block";
    cartCount.style.display = "none";
})

