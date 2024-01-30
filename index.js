const images = document.querySelectorAll('.image img');

images.forEach(function (img) {
    
    img.onclick = function () { 
        document.querySelector(".pop").style.display = "block";
        document.querySelector(".pop img").src = img.getAttribute('src');
        document.querySelector(".body").style.overflow = "hidden";
    }
})

document.querySelector("span").onclick = function () {
    document.querySelector(".pop").style.display = "none";
    document.querySelector(".pop img").src ="";
    document.querySelector(".body").style.overflow = "auto";
}

const sliderLine = document.querySelector(".slider_line");
const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");

let offset = 0; 

const goNext = function () {
    offset += 350;
    if (offset >= 2100) {
        offset = 0;
        sliderLine.style.right = 0;
    } else {
        sliderLine.style.right = offset + "px"
    }
}

nextBtn.onclick = goNext;

backBtn.onclick = function () {
    offset -= 350;
    if (offset < 0) {
        offset = 1750;
        sliderLine.style.right = offset + "px";
    } else {
        sliderLine.style.right = offset + "px"
    }
}

setInterval(goNext, 10000)