 //Phone plus Button Event handler
 const phonePlusButtonCheck = document.getElementById("phone-plus-button");
 phonePlusButtonCheck.addEventListener("click", function(){
    phoneTextUpdate("phone-cart-no",1);
    const phoneCart = phoneCartUpdate("phone-cart", 1219);

    const caseCart = document.getElementById("case-cart").innerText;
    const caseCartNumber = parseFloat(caseCart);
    document.getElementById("sub-total").innerText = phoneCaseUpdate(phoneCart,caseCartNumber);

    finalAmountCheck("total-amount", "sub-total");
 })
 //Case plus Button Event handler
 const casePlusButtonCheck = document.getElementById("case-plus-button");
 casePlusButtonCheck.addEventListener("click", function(){
    phoneTextUpdate("case-cart-no",1);
    const caseCart = phoneCartUpdate("case-cart", 59);
    
    const phoneCart = document.getElementById("phone-cart").innerText;
    const phoneCartNumber = parseFloat(phoneCart);
    document.getElementById("sub-total").innerText = phoneCaseUpdate(caseCart,phoneCartNumber);

    finalAmountCheck("total-amount", "sub-total");

 })
 //Phone minus Button Event handler
 const phoneMinusButtonCheck = document.getElementById("phone-minus-button");
 phoneMinusButtonCheck.addEventListener("click", function(){
    phoneTextUpdate("phone-cart-no",-1);
    const phoneCart = phoneCartUpdate("phone-cart", -1219);

    const caseCart = document.getElementById("case-cart").innerText;
    const caseCartNumber = parseFloat(caseCart);
    document.getElementById("sub-total").innerText = phoneCaseUpdate(phoneCart,caseCartNumber);

    finalAmountCheck("total-amount", "sub-total");
 })
 //Case Minus Button Event handler
 const caseMinusButtonCheck = document.getElementById("case-minus-button");
 caseMinusButtonCheck.addEventListener("click", function(){
    phoneTextUpdate("case-cart-no",-1);
    const caseCart = phoneCartUpdate("case-cart", -59);

    const phoneCart = document.getElementById("phone-cart").innerText;
    const phoneCartNumber = parseFloat(phoneCart);
    document.getElementById("sub-total").innerText = phoneCaseUpdate(caseCart,phoneCartNumber);

    finalAmountCheck("total-amount", "sub-total");
 })
 function phoneTextUpdate(id, givenNumber){
    const getNumber = document.getElementById(id).value;
    const getNumberDigit = parseFloat(getNumber);
    const totalAmount = getNumberDigit + givenNumber;
    document.getElementById(id).value = totalAmount;
    return totalAmount;
 }
 function phoneCartUpdate(id, givenNumber){
    const getNumber = document.getElementById(id).innerText;
    const getNumberDigit = parseFloat(getNumber);
    const totalAmount = getNumberDigit + givenNumber;
    document.getElementById(id).innerText = totalAmount;
    return totalAmount;
 }
 function phoneCaseUpdate(firstNumber, secondNumber){
    const totalAmount = firstNumber + secondNumber;
    return totalAmount;

 }
 function finalAmountCheck(firstId, secondId){
     document.getElementById(firstId).innerText = document.getElementById(secondId).innerText;
    
 }