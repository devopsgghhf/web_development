const birthdt=document.querySelector('#itdate');
const calc=document.querySelector('#calc');
const ageshow=document.querySelector('#ageshow');

function calculateage(){
    const birthvalue=birthdt.value;
    if(birthvalue===""){
        alert("Enter a date");
    } else{
    const age=getage(birthvalue);
    ageshow.innerText=`${age}`;
    }
}

function getage(birthvalue){
    const currentdate=new Date();
    const birthdate=new Date(birthvalue);
    let age=currentdate.getFullYear()-birthdate.getFullYear();
    const month=currentdate.getMonth()-birthdate.getMonth();
    const date=currentdate.getDate()-birthdate.getDate();

    if(month<0 || month===0 && currentdate.getDate()<birthdate.getDate()){
        age--;
    }
    return age;
}

calc.addEventListener('click',calculateage);