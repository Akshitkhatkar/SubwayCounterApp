//document.getElementById("count-el").innerText = 5
// let age = 23
// console.log(age)

// Convert your age to dog years
// let age = 23
// let humanToDog = 7

// let ageInDogYrs = age * humanToDog

// console.log(ageInDogYrs)
function increment() {
    let currentCount = parseInt(document.getElementById("count-el").innerText)
    // console.log(currentCount)
    currentCount+=1
    document.getElementById("count-el").innerText = currentCount
    console.log(currentCount)
}

function decrement() {
    let currentCount = parseInt(document.getElementById("count-el").innerText)
    // console.log(currentCount)
    currentCount-=1
    document.getElementById("count-el").innerText = currentCount
    console.log(currentCount)
}

function save() {
    let currentCount = parseInt(document.getElementById("count-el").innerText)
    let result = document.getElementById("result-el")
    result.textContent += currentCount + " - "
}