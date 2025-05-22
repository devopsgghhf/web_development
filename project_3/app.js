const vsk=document.querySelector('#clk');

setInterval(()=>{
    let date=new Date();
    vsk.innerHTML=date.toLocaleTimeString();
},1000)