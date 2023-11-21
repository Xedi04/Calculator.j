let Tip =document.querySelector('#tip-amount');
let Total=document.querySelector('#total-per-person');
let Bill=document.querySelector('#bill-amount');
let Number1=document.querySelector('#number-of-people');
let Five=document.querySelector('#five-percent');
let Calc=document.querySelector('#calculate');

Calc.addEventListener("click",()=>{
    let Radio = parseFloat(document.querySelector('input[name="tip"]:checked').value);
    let bill = parseFloat(Bill.value);
    let number =parseFloat(Number1.value);

if(Radio && bill && number){
    let tip =(bill*Radio)/100;
    let total=(bill+tip)/number;

    Tip.innerText=tip.toFixed(2);
    Total.innerText=total.toFixed(2);
 }
  

})


