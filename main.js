"use strict";

let bill = document.querySelector(".inputs-section__bill-input")

let people = document.querySelector(".inputs-section__people-input")

let tipResult = document.querySelector(".results__tip-value")
let tipPerson = document.querySelector(".results__total-value")

let reset = document.querySelector(".result-section__reset");
let tipValue = 0;


let buttons = document.querySelectorAll(".btns__button")
let custom = document.querySelector(".btns__button-custom")

buttons.forEach(btn => {
    btn.addEventListener('click', (e)=>{

        removeClass('btns__button--selected');
        btn.classList.add('btns__button--selected');
        
        tipValue = parseInt(e.target.innerText.slice(0,-1));
        operations()
    })
})

custom.addEventListener("input", e =>{
    tipValue = custom.value;
    operations();
    removeClass()
})

bill.addEventListener("input", ()=>{
    if(tipValue != 0 && bill.value != 0){
        operations()
    }
})

people.addEventListener('input', ()=>{
    if(!(tipValue != 0 && people.value != 0)){
        validationPeople(parseInt(people.value))
    } else {
        operations()        
    }

    if(parseInt(people.value) != 0){
        removeValidationPeople();
    }
    
})

reset.addEventListener('click', ()=>{
    bill.value = 0;
    people.value = 0;
    tipResult.innerText=0;
    tipPerson.innerText=0;
    removeClass('btns__button--selected')
})

const removeClass = e =>{
    buttons.forEach(elem => {
        elem.classList.remove(e);
    })
}

const operations = () => {

    let billValue = parseInt(bill.value);
    let peopleValue = parseInt(people.value);
    
    if(!validationPeople(peopleValue)){
        removeValidationPeople();
        let tipAmount = ((billValue * tipValue / 100) / peopleValue).toFixed(2);
        let tipTotal = (((billValue * tipValue/100)+billValue)/peopleValue).toFixed(2);
        tipPerson.innerText = tipTotal
        tipResult.innerText = tipAmount
    }
}

let alert = document.querySelector(".alert");
const validationPeople = (val) =>{
    if(val == 0){
        people.classList.add("error");
        alert.innerText = "Can't be zero";
        people.style.border = "2px solid rgb(164, 68, 68)"
        return true
    }
}

const removeValidationPeople = ()=>{
    people.classList.remove("error");
    alert.innerText = "";
    people.style.border = "none";
}


