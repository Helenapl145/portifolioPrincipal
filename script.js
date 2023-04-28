const navegationPrimary = document.querySelector(".primary-navigation");
const linkSection = document.getElementById("primary-navegation")
const navBtn = document.querySelector(".moblieNav")
const btnTop = document.getElementById("btnTop")


navBtn.addEventListener("click", alterMenu)
linkSection.addEventListener("click", changeSection)
window.addEventListener("scroll", hideBtnTop)


function alterMenu()  {
    const visibility = navegationPrimary.getAttribute("data-visible");

    if(visibility === "false"){

        navegationPrimary.setAttribute('data-visible', true)
        navBtn.setAttribute('aria-expanded', true)

    }else if(visibility === "true"){

        navegationPrimary.setAttribute('data-visible', false)
        navBtn.setAttribute('aria-expanded', false)
    }

}

function changeSection() {
    navegationPrimary.setAttribute('data-visible', false)
    navBtn.setAttribute('aria-expanded', false)
}

function hideBtnTop() {
    if(window.scrollY > 1400){
        btnTop.style.display = "flex"
    }
    else{
        btnTop.style.display = "none"
    }
}

