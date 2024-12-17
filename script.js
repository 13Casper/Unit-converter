const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function metersToFeet(unit){
    return (unit * 3.28084).toFixed(2)
}

function feetToMeters(unit){
    return (unit * 0.3048).toFixed(2)
}

function litersToGalloons(unit){
    return (unit * 0.264172).toFixed(2)
}

function galloonsToLiters(unit){
    return (unit * 3.78541).toFixed(2)
}

function kgsToPounds(unit){
    return (unit * 2.20462).toFixed(2)
}

function poundsToKgs(unit){
    return (unit * 0.453592).toFixed(2)
}

convertBtn.addEventListener("click", function(){

    let unitValue = inputEl.value
    if(unitValue){
    lengthEl.innerHTML = `${unitValue} meters = ${metersToFeet(unitValue)} feet | ${unitValue} feet = ${feetToMeters(unitValue)} meters`

    volumeEl.innerHTML = `${unitValue} liters = ${litersToGalloons(unitValue)} galloons | ${unitValue} galloons = ${galloonsToLiters(unitValue)} liters`

    massEl.innerHTML = `${unitValue} kilos = ${kgsToPounds(unitValue)} pounds | ${unitValue} pounds = ${poundsToKgs(unitValue)} kilos`
    }
})