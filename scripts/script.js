/*
Carne - 400g por pessoa. Se for + de 6 horas 650g
Cerveja 1200ml por pessoa. Se for + de 6 horas 2000ml
Refrigerante/água 1000ml por pessoa. Se for + de 6 horas 1500ml

Crianças valem por 0,5 pessoa
*/

let adultsCount = document.getElementById("adults");
let childrenCount = document.getElementById("childrens");
let hoursCount = document.getElementById("hours");
let resultDiv = document.getElementById("results");

let totalMeatAmount = 0;
let totalBeerAmount = 0;
let totalDrinksAmount = 0;

const meatUnder6 = 400/1000; //0.4Kg
const meatAbove6 = 650/1000; //0.65Kg
const beerUnder6 = 1200; //1200ml
const beerAbove6 = 2000; //1200ml
const drinksUnder6 = 1000; //1000ml
const drinksAbove6 = 1500; //1500ml



function calculate (){

    if (hoursCount.value < 6){

        totalMeatAmount = (adultsCount.value * meatUnder6 + (childrenCount.value * meatUnder6)/2).toFixed(1); //Resultado em Kg
        totalBeerAmount = Math.round((adultsCount.value * beerUnder6)/350) //Resultado em Latas de 350ml;
        totalDrinksAmount = Math.ceil((adultsCount.value * drinksUnder6 + (childrenCount.value * drinksUnder6)/2)/2000); //Resultado em Pets de 2 Litros
    
        resultDiv.innerHTML = `<p>${totalMeatAmount} Kg de Carne</p>` + 
                              `<p>${totalBeerAmount} Latas de Cerveja</p>` +
                              `<p>${totalDrinksAmount} garrafas pet de Refri/Água de 2 Litros</p>`;
    }else{
        totalMeatAmount = (adultsCount.value * meatAbove6 + (childrenCount.value * meatAbove6)/2).toFixed(1); //Resultado em Kg
        totalBeerAmount = Math.round((adultsCount.value * beerAbove6)/350) //Resultado em Latas de 350ml;
        totalDrinksAmount = Math.ceil((adultsCount.value * drinksAbove6 + (childrenCount.value * drinksAbove6)/2)/2000); //Resultado em Pets de 2 Litros
        
        resultDiv.innerHTML = `<p>${totalMeatAmount} Kg de Carne</p>` + 
                              `<p>${totalBeerAmount} Latas de Cerveja</p>` +
                              `<p>${totalDrinksAmount} garrafas pet de Refri/Água de 2 Litros</p>`;
    }
}


function reset (){
    adultsCount.value = null;
    childrenCount.value = null;
    hoursCount.value = null;
}


