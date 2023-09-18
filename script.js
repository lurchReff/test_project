const btH = 50 ;
const btW = 150 ;

const btn = document.getElementById('n') 
const btnY = document.getElementById('y')



const mxw = window.innerWidth - btW ;
const mxh = window.innerHeight - btH ;

btn.addEventListener('mouseover' , () => {
    btn.style.left = Math.floor(Math.random() * (mxw+1)) + 'px'
    btn.style.top = Math.floor(Math.random() * (mxh+1)) + 'px'
 
})
btn.addEventListener('click' , () => {
    btn.style.left = Math.floor(Math.random() * (mxw+1)) + 'px'
    btn.style.top = Math.floor(Math.random() * (mxh+1)) + 'px'
})

btnY.addEventListener('click' , () => {
    alert("We Knew it from the very beginning , You are Gay")
})