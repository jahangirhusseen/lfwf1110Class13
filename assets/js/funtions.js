/**
 * Age Calculator
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */

function ageCal(name,year) {
    let date = new Date();
    let age = date.getFullYear() -year;

    let ageStatus = checkAgeStatus(age);
    return `<p class = "alert alert-${ageStatus.status}"> Hi ${name}, You are ${age} Years Old and you are ${ageStatus.name} </p>`;
}


function checkAgeStatus(age) {
    if(age>0 && age<5){
        return {
            name :'Baby',
            status : 'success' 
        };
    }
    else if(age>=5 && age<13){
        return {
            name :'Child',
            status : 'secondary' 
        };
    }
    else if(age>=13 && age<18){
        return {
            name :'Teenager',
            status : 'success' 
        };
    }
    else if(age>=18 && age<33){
        return {
            name :'Young Man',
            status : 'info' 
        };
    }
    else if(age>=33 && age<50){
        return {
            name :'Middle-Aged',
            status : 'warning' 
        };
    }
    else{
        return {
            name :'Older',
            status : 'light' 
        };
    }    
}

// ------------------------------

function currencyCal(amount,currency) {
    let total = amount*currency;
    return `<p class = "alert alert-danger text-center">${amount}*${currency} = ${total} BD</p>`;
}



// ------------------------------



function mAgeCal(pname,myear) {
    let mdate = new Date();
    let mage = mdate.getFullYear() -myear;

    let marriageStatus = mAgeStatus(mage);
    return `<p class = "alert alert-${marriageStatus.status}"> Hi ${pname}, You are ${mage} Years Old and you are ${ageStatus.name} </p>`;
}

function mAgeStatus(mage) {
    if(mage <= 0 || mage <= 17){
        return {
            name :'apnar biyer boyos hoyni',
            status : 'success' 
        };
    }
    else if(mage>=18 && mage<32){
        return {
            name :'apnar biyer boyos hoyche',
            status : 'secondary' 
        };
    }
    else if(mage>=32 && mage<48){
        return {
            name :'apnar biyer boyos cole jacche',
            status : 'success' 
        };
    }
    else{
        return {
            name :'apnar biyer boyos ses',
            status : 'light' 
        };
    }    
}