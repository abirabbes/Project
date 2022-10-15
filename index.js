const btnPlusArry=document.getElementsByClassName("plus")
//console.log(btnPlusArry);
const btnMinusArry=document.getElementsByClassName("minus")
const checkboxInputes=document.querySelectorAll(".input")
const btnDeleteArry=document.querySelectorAll(".delete")
    //console.log(btnDeleteArry);
for (var i=0; i<btnPlusArry.length; i++) {
    btnPlusArry[i].addEventListener("click",increment)
    btnMinusArry[i].addEventListener("click",calc)
    //checkboxInputes[i].addEventListener("click",totalPrice)
    btnDeleteArry[i].addEventListener("click",dl)
}
function increment(event) {
    //console.log(event); 
    const btnPlus=event.target
    //console.log(btnPlus);  
    const divElt=btnPlus.parentElement
    //console.log(divElt); 
    var quantityTag=divElt.querySelector("p")
    //console.log(quantityTag);
    var quantityValue=parseInt(quantityTag.innerHTML)
    quantityValue++
    //console.log(quantityValue);
    quantityTag.innerHTML=quantityValue
    const trElement=divElt.parentElement.parentElement
    //console.log(trElement);
    const unitePriceValue=Number(trElement.querySelector(".unitePrice").innerHTML)
    //console.log(unitePriceValue);
    const priceTag=trElement.querySelector(".price")
    //console.log(priceTag);
    var priceValue=Number(priceTag.innerHTML)
    //console.log(priceValue);
    priceValue=quantityValue*unitePriceValue
    //console.log(priceValue);
    priceTag.innerHTML=priceValue
    
}
function calc(minu) {
    //console.log(minu); 
    const btnMinus=minu.target
    //console.log(btnMinus);  
    const divElt=btnMinus.parentElement
    //console.log(divElt); 
    var quantityTag=divElt.querySelector("p")
    //console.log(quantityTag);
    var quantityValue=parseInt(quantityTag.innerHTML)
    if(quantityValue>0){
        quantityValue--
    }
    
    //console.log(quantityValue);
    quantityTag.innerHTML=quantityValue
    } 
    function totalPrice(e){
        const checkboxElement=e.target
        //console.log(checkboxElement);
        const priceValue=Number(checkboxElement.parentElement.parentElement.querySelector(".price").innerHTML)
        //console.log(priceValue);
        var totalTag=document.querySelector("#total")
        var totalValue=parseInt(totalTag.innerHTML)
        //console.log(totalValue);
        const btnPlus=checkboxElement.parentElement.parentElement.querySelector(".plus")
        //console.log(btnPlus);
        if(checkboxElement.checked==true){
            totalValue+=priceValue
            totalTag.innerHTML=totalValue
            btnPlus.setAttribute("disabled",true)
        }else{
            totalValue-=priceValue;
            totalTag.innerHTML=totalValue;
            btnPlus.removeAttribute
        }
    }
    
    function dl(e) {
        const btnDelete=e.target
        //console.log(btnDelete);
        const trElement=btnDelete.parentElement.parentElement.parentElement.parentElement
        //console.log(trElement);
         trElement.remove()
        //console.log(remove);
    }

