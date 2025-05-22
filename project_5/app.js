const b1=document.querySelector('#b1');
const b2=document.querySelector('#b2');
console.log("btn2");

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
b1.addEventListener('click',()=>{
    intervalId= setInterval(()=>{
        document.body.style.backgroundColor=getRandomColor();
    },1000)
})

b2.addEventListener('click',()=>{
    clearInterval(intervalId);
})
