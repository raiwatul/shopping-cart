function updateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + "-number");
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
}
//phone handler 
document.getElementById("phone-plus").addEventListener('click', function () {
    updateCaseNumber("phone", 1219, true);

});
document.getElementById("phone-minus").addEventListener('click', function () {
    updateCaseNumber("phone", 1219, false);

});

//case handler
document.getElementById("case-plus").addEventListener('click', function () {
    updateCaseNumber("case", 59, true);

});

document.getElementById("case-minus").addEventListener("click", function () {
    updateCaseNumber("case", 59, false);

})