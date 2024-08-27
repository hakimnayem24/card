const card1 = document.getElementById("card1")
const cardName1 = document.getElementById("card-name1")
const cardMoney1 = parseFloat(document.getElementById("card-money1").innerText).toFixed(2)
const couponCode = document.getElementById("coupon-code")
const applyButton = document.getElementById("apply-button")
const addName = document.getElementById("add-name")
const totalPrice = document.getElementById("total-price")
const discountPrice = document.getElementById("discount-price")
const intotalPrice = document.getElementById("intotal-price")
const makePurchase = document.getElementById("make-purchase")
const goHome = document.getElementById("go-home")

const card2 = document.getElementById("card2")
const cardName2 = document.getElementById("card-name2")
const cardMoney2 = parseFloat(document.getElementById("card-money2").innerText).toFixed(2)
const card3 = document.getElementById("card3")
const cardName3 = document.getElementById("card-name3")
const cardMoney3 = parseFloat(document.getElementById("card-money3").innerText).toFixed(2)
const card4 = document.getElementById("card4")
const cardName4 = document.getElementById("card-name4")
const cardMoney4 = parseFloat(document.getElementById("card-money4").innerText).toFixed(2)
const card5 = document.getElementById("card5")
const cardName5 = document.getElementById("card-name5")
const cardMoney5 = parseFloat(document.getElementById("card-money5").innerText).toFixed(2)
const card6 = document.getElementById("card6")
const cardName6 = document.getElementById("card-name6")
const cardMoney6 = parseFloat(document.getElementById("card-money6").innerText).toFixed(2)
const card7 = document.getElementById("card7")
const cardName7 = document.getElementById("card-name7")
const cardMoney7 = parseFloat(document.getElementById("card-money7").innerText).toFixed(2)
const card8 = document.getElementById("card8")
const cardName8 = document.getElementById("card-name8")
const cardMoney8 = parseFloat(document.getElementById("card-money8").innerText).toFixed(2)
const card9 = document.getElementById("card9")
const cardName9 = document.getElementById("card-name9")
const cardMoney9 = parseFloat(document.getElementById("card-money9").innerText).toFixed(2)
let i = 0 ;


// card1.addEventListener("click", function(){
//     addName.innerText = cardName1.innerText ;
//     i++ ;

//     const p = document.createElement("p")
//     p.innerText = i +"." + cardName1.innerText ;
//     addName.appendChild(p);
// })

card1.addEventListener("click", function(){
    addName.innerText = cardName1.innerText ;
    const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
    totalPrice.innerText = parseFloat(cardMoney1) + parseFloat(floatTotalPrice) ;
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        applyButton.removeAttribute("disabled")
    }
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"." + cardName1.innerText ;
    addName.appendChild(p);
})

card2.addEventListener("click", function(){
    addName.innerText = cardName2.innerText ;
    const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
    totalPrice.innerText = parseFloat(cardMoney2) + parseFloat(floatTotalPrice) ;
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        applyButton.removeAttribute("disabled")
    }
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"." + cardName2.innerText ;
    addName.appendChild(p);
})
card3.addEventListener("click", function(){
    addName.innerText = cardName3.innerText ;
    const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
    totalPrice.innerText = parseFloat(cardMoney3) + parseFloat(floatTotalPrice) ;
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        applyButton.removeAttribute("disabled")
    }
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"." + cardName3.innerText ;
    addName.appendChild(p);
})
card4.addEventListener("click", function(){
    addName.innerText = cardName4.innerText ;
    const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
    totalPrice.innerText = parseFloat(cardMoney4) + parseFloat(floatTotalPrice) ;
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        applyButton.removeAttribute("disabled")
    }
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"." + cardName4.innerText ;
    addName.appendChild(p);
})
card5.addEventListener("click", function(){
    addName.innerText = cardName5.innerText ;
    const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
    totalPrice.innerText = parseFloat(cardMoney5) + parseFloat(floatTotalPrice) ;
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        applyButton.removeAttribute("disabled")
    }
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"." + cardName5.innerText ;
    addName.appendChild(p);
})
card6.addEventListener("click", function(){
    addName.innerText = cardName6.innerText ;
    const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
    totalPrice.innerText = parseFloat(cardMoney6) + parseFloat(floatTotalPrice) ;
    
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        applyButton.removeAttribute("disabled")
    }
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"." + cardName6.innerText ;
    addName.appendChild(p);
})
card7.addEventListener("click", function(){
    addName.innerText = cardName7.innerText ;
    const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
    totalPrice.innerText = parseFloat(cardMoney7) + parseFloat(floatTotalPrice) ;
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        applyButton.removeAttribute("disabled")
    }
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"." + cardName7.innerText ;
    addName.appendChild(p);
})
card8.addEventListener("click", function(){
    addName.innerText = cardName8.innerText ;
    const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
    totalPrice.innerText = parseFloat(cardMoney8) + parseFloat(floatTotalPrice) ;
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        applyButton.removeAttribute("disabled")
    }
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"." + cardName8.innerText ;
    addName.appendChild(p);
})
card9.addEventListener("click", function(){
    addName.innerText = cardName9.innerText ;
    const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
    totalPrice.innerText = parseFloat(cardMoney9) + parseFloat(floatTotalPrice) ;
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        applyButton.removeAttribute("disabled")
    }
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"." + cardName9.innerText ;
    addName.appendChild(p);
})



applyButton.addEventListener("click", function(){
    if(couponCode.value == "SELL200"){
        const discount =  (parseInt(totalPrice.innerText) * 20) / 100 ;
        discountPrice.innerText = discount ;
        
       
        const InTotal = totalPrice.innerText - discountPrice.innerText
            intotalPrice.innerText = InTotal.toFixed(2);
    
    
        applyButton.setAttribute("disabled", true)
    
    }
    couponCode.value = "" ;
})

goHome.addEventListener("click" , function(){
    applyButton.setAttribute("disabled", true)
    addName.innerText = ""
    totalPrice.innerText = "00.00"
    discountPrice.innerText = "00.00"
    intotalPrice.innerText = "00.00"
    makePurchase.setAttribute("disabled", true)
})

