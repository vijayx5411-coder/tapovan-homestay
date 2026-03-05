// Smooth Scroll

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})

})



// Hero Image Slider

let images=[
"room1.jpg",
"room2.jpg",
"room3.jpg",
"room4.jpg",
"room5.jpg"
]

let i=0

function slider(){

i++

if(i>=images.length){
i=0
}

document.querySelector(".hero").style.backgroundImage="url("+images[i]+")"

}

setInterval(slider,4000)



// Scroll Animation

window.addEventListener("scroll",()=>{

document.querySelectorAll(".room").forEach(card=>{

let position=card.getBoundingClientRect().top

let screen=window.innerHeight

if(position<screen-100){

card.style.opacity="1"
card.style.transform="translateY(0)"

}

})

})