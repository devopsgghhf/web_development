const bill=document.querySelector('#int');
const tip=document.querySelector('#tipnum');
const total=document.querySelector('#totalinfo');
const calc=document.querySelector('#calc')
function calculatetip(){
    const billvalue=parseFloat(bill.value);
    const tipvalue=parseFloat(tip.value);

    if(isNaN(billvalue) || isNaN(tipvalue) || billvalue<0 || tipvalue<0){
      alert("Enter a valid number")
      return;
    }
    const tipamount = billvalue*(tipvalue / 100);
  
    total.innerText=tipamount.toFixed(2);
}

calc.addEventListener('click',calculatetip)