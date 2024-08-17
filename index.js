const spoon = document.getElementById("spoon")
const olList = document.getElementById("ol-list")
const apply = document.getElementById("apply")
const coupon = document.getElementById("coupon")

const congratulations = document.getElementById("congratulations")
const headingHomeCooker = document.getElementById("heading-home cooker")
const headingSports = document.getElementById("heading sports")
const headingCook = document.getElementById("heading cook") 
const board = document.getElementById("board")
const pen = document.getElementById("pen")
const cap = document.getElementById("cap")
const jersey = document.getElementById("jersey")
const cates = document.getElementById("cates")
const normalChair = document.getElementById("normal-chair")
const chair = document.getElementById("chair")
const sofa = document.getElementById('sofa')
spoon.addEventListener("click", function(){
    const li = document.createElement("li")
    li.innerText = headingHomeCooker.innerText
    olList.appendChild(li)
})
spoon.addEventListener("click", function(){
    const li = document.createElement("li")
    li.innerText = headingSports.innerText
    olList.appendChild(li)
})
spoon.addEventListener("click", function(){
    const li = document.createElement("li")
    li.innerText = headingCook.innerText
    olList.appendChild(li)
})
board.addEventListener("click", function(){
    const li = document.createElement("li")
    li.innerText = headingHomeCooker.innerText
    olList.appendChild(li)
})
board.addEventListener("click", function(){
    const li = document.createElement("li")
    li.innerText = headingSports.innerText
    olList.appendChild(li)
})
board.addEventListener("click", function(){
    const li = document.createElement("li")
    li.innerText = headingCook.innerText
    olList.appendChild(li)
})

apply.addEventListener("click", function(){
    if(coupon.value == "SELL200"){
        apply.setAttribute("disabled" , true)
        apply.classList.add("text-red-500")
        apply.classList.remove("btn-secondary")
    }
    else{
        coupon.value = ""
    }
})
const price = document.getElementById("price")
const discount = document.getElementById("discount")
const total = document.getElementById("total")
let priceValue = parseFloat(price.innerText)
let discountValue = parseFloat(discount.innerText)
let totalValue = parseFloat(total.innertext)
const mainClick = document.getElementById("mainclick")


    