//storing elements 
const decbtn = document.getElementById("dec");
const incbtn = document.getElementById("inc");
const rstbtn = document.getElementById("reset");
const dspval = document.getElementById("displayValue");


//for decrement button
decbtn.addEventListener("click",() =>{
    const value = Number(dspval.innerText);

    if(value>0){
        displayValue.innerText = value - 1;
    }
    else{
        alert("Negative Values not allowed");
    }
} );

//for increment button
incbtn.addEventListener("click", () => {
    const value = Number(dspval.innerText);
    displayValue.innerText = value + 1;
});

//for reset button
rstbtn.addEventListener("click", () => {
    dspval.innerText = 0; 
});
