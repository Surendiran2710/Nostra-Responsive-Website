//offer bar
var offer=document.getElementById("offer")

document.getElementById("offer-close").addEventListener("click", function(){
    offer.style.display="none"
})



//Selecting Sidenavbar, menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})


//background image

currentSlideID = 1
sliderElement = document.getElementById('slider')

totalSlides = sliderElement.childElementCount;

function next() {
    if (currentSlideID < totalSlides) {
        currentSlideID++
        showSlide()
    }
 

}

function prev() {
    if (currentSlideID > 1) {
        currentSlideID--
        showSlide()
    }
}

function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index]
        if (currentSlideID === index + 1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }
}




//Like

var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
    
            e.target.src="./image/redheart.png"
        }
        else{
            e.target.src="./image/blackheart.png"
        }
    })
})


