"use strict"
//page 109 and 159 for info
const $ = selector => document.querySelector(selector);

const calculateFV = (investments,aIRate,numOfYears) => {
    let futureValue = investments
        for (let i = 1; i <= numOfYears; i++) {
            futureValue += futureValue * aIRate/100;
        }
    return futureValue.toFixed(2);
}

const getErrorMsg = lbl =>
    `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
}

const processEntries = () => {
    const investments = parseFloat($("#investments").value);
    const aIRate = parseFloat($("#aIRate").value);
    const numOfYears = parseFloat($("#numOfYears").value);

    if (isNaN(investments) || investments <= 0 ||investments > 100000) {
        alert(getErrorMsg("Total Investments"));
        focusAndSelect("#investments");
    } else if (isNaN(aIRate) || aIRate <= 0 || aIRate > 15) {
        alert(getErrorMsg("Anual Interest Rate"));
        focusAndSelect("#aIRate");
    } else if (isNaN(numOfYears) || numOfYears <= 0 ||numOfYears > 50) {
        alert(getErrorMsg("Number of Years"));
        focusAndSelect("#numOfYears");
    } else {
        $("#futureValue").value = calculateFV(investments,aIRate,numOfYears);
    }
}

document.addEventListener("DOMContentLoaded" , () => {
    $("#calculate").addEventListener(
        "click" , processEntries);
});
