const y=(Math.floor(Math.random()*10)+1)

let guess=1;

const btn=document.querySelector('#submit');

btn.addEventListener('click',()=>{
    let x=parseInt(document.querySelector('#guessfield').value);
    let result=document.querySelector('.result');
    if(isNaN(x) || x<1 || x>10){
        result.innerHTML="You enter invalid number";
    }
    else if(x===y){
     result.innerHTML=`Congratulations you guess right number ${guess} guesses`;
    }
    else if(x<y){
        guess++
        result.innerHTML="You enter small number"
    }
    else{
        guess++
        result.innerHTML="You enter big number"
    }
})
