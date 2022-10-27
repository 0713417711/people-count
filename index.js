//document.getElementById("count-el").innerText = 5;
let saveEL = document.getElementById("save-el")
let count = 0;

document.getElementById("save-el")

function increment() {

    count += 1;
    document.getElementById("count-el").innerText = count;
}

function save() {
    let countSep = count + " - "
    document.getElementById("count-el").innerText = count;
    saveEL.innerText += countSep;
}
 
 

