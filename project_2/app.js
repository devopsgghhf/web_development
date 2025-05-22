function bmi(){
    var wt=parseFloat(document.querySelector('#weight').value)
    var ht=parseFloat(document.querySelector('#height').value)
    var result=document.querySelector('.result')
     

    if(ht==="" || ht<0 || isNaN(ht)){
        result.innerHTML="you enter NAN";
        return
    }
     if(wt==="" || wt<0 || isNaN(wt)){
        result.innerHTML="you enter NAN";
        return
    }
    var bmi=wt/(ht*ht);
    var category="";

    if(bmi<18.5){
        category="Underweight";
    }
    else if(bmi<25){
        category="Normal";
    }
    else if(bmi<30){
        category="Obsese";
    }
    else{
        category="Overweight";
    }
    result.innerHTML="Your bmi is"+bmi.toFixed(2)+"("+category+")";
}
