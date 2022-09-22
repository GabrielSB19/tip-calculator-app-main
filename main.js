"use strict";

let bill = document.querySelector(".inputs-section__bill-input")

let people = document.querySelector(".inputs-section__people-input")

let tipResult = document.querySelector(".results__tip-value")
let tipPerson = document.querySelector(".results__total-value")

let buttons = document.querySelectorAll(".btns__button")

buttons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        let tipValue = parseInt(e.target.innerText.slice(0,-1));

        let billValue = parseInt(bill.value);
        let peopleValue = parseInt(people.value); 

        let tipAmount = (billValue * tipValue / 100) / peopleValue;
        tipResult.innerText = tipAmount

        let tipTotal = ((billValue * tipValue/100)+billValue)/peopleValue;
        tipPerson.innerText = tipTotal
        
    })
})

let reset = document.querySelector(".result-section__reset");
reset.addEventListener('click', ()=>{
    bill.value = 0;
    people.value = 0;
    tipResult.innerText=0;
    tipPerson.innerText=0;
})


