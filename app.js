// alert("")
let clickMeBtn = document.querySelector("button");

let box = document.querySelector(".box");

let colorCode = document.querySelector(".color-code")
clickMeBtn.addEventListener("click", ()=> {
//   console.log(Math.round(Math.random()))
let red = Math.round(Math.random()*255);
let green = Math.round(Math.random()*255);
let blue = Math.round(Math.random()*255)
let rgb = `rgb(${red},${green},${blue})`
// background color set
box.style.backgroundColor = `${rgb}`
// rgb code  show as a text 
colorCode.innerText = `background-color:${rgb}`

})

  
