const check_btn = document.querySelector('#agecheck');
const name = document.querySelector('#name');
const year = document.querySelector('#year');
const result = document.querySelector('#result');


check_btn.addEventListener('click', () => {

    if(name.value == '' || year.value == ''){
        result.innerHTML = `<p class="alert alert-danger">All fields are required <p/>`;   
    }else{
        result.innerHTML = ageCal(name.value, year.value);
    }
});








const currencyBd =document.querySelector('#currencyBd');
const amount =document.querySelector('#amount');
const currency =document.querySelector('#currency');
const tAmount =document.querySelector('#tAmount');


currencyBd.addEventListener('click', () => {
    if(amount.value == '' || currency.value == ''){
        tAmount.innerHTML = `<p class="alert alert-danger">All fields are required <p/>`;   
    }else{
        tAmount.innerHTML = currencyCal(amount.value, currency.value);
    }
});





const mcheck_btn = document.querySelector('#magecheck');
const pname = document.querySelector('#pname');
const myear = document.querySelector('#myear');
const mASresult = document.querySelector('#mASresult');


mcheck_btn.addEventListener('click', () => {

    if(pname.value == '' || myear.value == ''){
        mASresult.innerHTML = `<p class="alert alert-danger">All fields are required <p/>`;   
    }else{
        mASresult.innerHTML = mAgeCal(pname.value, myear.value);
    }
});




let abc =50;
console.log(abc);

debugger;
console.log(200);


// let mage = Number(prompt('Enter The Number : '));


// if(mage <= 0 || mage <= 17){
//     console.log('apnar biyer boyos hoyni');
// }
// else if(mage>=18 && mage<32){
//     console.log(`apnar biyer boyos hoyche`);
// }else if(mage>=32 && mage<48){
//     console.log(`apnar biyer boyos cole jacche`);
// }
// else{
//     console.log(`apnar biyer boyos ses`);
// }
