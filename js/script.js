const tips = document.querySelectorAll(".tip");
const customTip = document.getElementById("custom-tip-amount");
const billAmt = document.getElementById("bill-amount");
const numPeeps = document.getElementById("nbr-people");
const reset = document.getElementById("reset-button");
const tipAmountPP = document.getElementById("tip-amount");
const totalPP = document.getElementById("total");
let getTipAmt = 0;
//let tipAmtPP = 0;
//let totalAmtPP = 0;

// add event listener to all tips
for (let i=0; i<tips.length; i++) {
    tips[i].addEventListener('click', getTipPercent);
}

// add event listener for custom tip
customTip.addEventListener('focusout', getCustomTipPercent);

// add event listener to num peeps
numPeeps.addEventListener('focusout', calcStuff);

// add event listener to reset button
reset.addEventListener('click', resetAllTheThings);


function getCustomTipPercent(e) {
   
    // first get rid of any old clicks
    for (let y=0; y<tips.length; y++) {
        tips[y].classList.remove('selected');
    }

    getTipAmt = customTip.value;

    alert(getTipAmt);
   
}

function getTipPercent(e) {
    // first get rid of any old clicks
    for (let x=0; x<tips.length; x++) {
        tips[x].classList.remove('selected');
    }
   
    // also get rid of any custom tip that was entered
    customTip.value = "";
   

    // now make the clicked tip green
    document.getElementById(e.target.id).classList.add('selected');

    getTipAmt = e.target.id;

   

}

function calcStuff(e) {
    // first make sure we have all values
    if (getTipAmt > 0 && billAmt.value > 0 && numPeeps.value > 0) {
        // we do! now we can caclulate tip amount per person
        tipAmountPP.innerHTML = "$" + ((billAmt.value * getTipAmt / 100) / numPeeps.value).toFixed(2);
       
        // then calculate total sum per person
        totalPP.innerHTML = "$" + ((billAmt.value / numPeeps.value) + ((billAmt.value * getTipAmt / 100) / numPeeps.value)).toFixed(2);
    }

    

    

    // activate the reset button so we can do all of this fun again!
}

function resetAllTheThings() {
    billAmt.value = "";

    // first get rid of any old clicks
    for (let x=0; x<tips.length; x++) {
        tips[x].classList.remove('selected');
    }
   
    // also get rid of any custom tip that was entered
    customTip.value = "";

    numPeeps.value = "";

    tipAmountPP.value = "$0.00";

    totalPP.value = "0.00";

}
