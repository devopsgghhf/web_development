const button=document.querySelectorAll('.button');
const body=document.querySelector('body');

button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
    console.log(e.target.id);
    if(e.target.id==="blue"||e.target.id==="red"||e.target.id==="yellow"||e.target.id==="green"){
        body.style.backgroundColor=e.target.id;
    }
    
    })
})

body.addEventListener('click', (e) => {
  if (e.target === body || !e.target.closest('.button')) {
    body.style.backgroundColor = "white";
  }
});
