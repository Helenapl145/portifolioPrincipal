const imgMain = document.getElementById("imgMain")
const btnOne = document.getElementById("slide1")
const btnTwo = document.getElementById("slide2")
const btnThree = document.getElementById("slide3")

document.getElementById('slider').addEventListener('click', changeSlide)

function changeSlide(e) {
    const idImg = e.target.id

    switch (idImg){
        case 'slide1':
            imgMain.src = "/assets/projeto-1.png"
            
            btnOne.classList.add("clicado")
            btnTwo.classList.remove("clicado")
            btnThree.classList.remove("clicado")
            break

        case 'slide2':
            imgMain.src = "/assets/projeto-2.png"
           
            btnTwo.classList.add("clicado")
            btnOne.classList.remove("clicado")
            btnThree.classList.remove("clicado")
   
            break

        case 'slide3':
            imgMain.src = "/assets/projeto-3.png"
          
            btnThree.classList.add("clicado")
            btnTwo.classList.remove("clicado")
            btnOne.classList.remove("clicado")
    
            break
    }
}

function changeSize(){
    if(window.innerWidth > 500){
        imgMain.src = "/assets/projeto-1.png"
        btnOne.classList.add("clicado")
        
        btnTwo.classList.remove("clicado")
       btnThree.classList.remove("clicado")
    }
}


