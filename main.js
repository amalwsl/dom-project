var plus=document.getElementsByClassName("plus")
var counter=document.getElementsByClassName("counter")
var minus=document.getElementsByClassName("minus")
var heart=document.getElementsByClassName("heart")
var cart=document.getElementById("cart")
var card=document.getElementsByClassName("card")
var remove=document.getElementsByClassName("remove")
var totalPrice=document.getElementById("total-price")
var price=document.getElementsByClassName("price")
var IsBlack=true

// console.log(plus)
// console.log(minus)
// console.log(minus)
// console.log(cart)
// console.log(remove)
 console.log(price)
 console.log(totalPrice)

for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
        //  console.log(this.nextElementSibling)
        // this.nextElementSibling.innerHTML=Number(this.nextElementSibling.innerHTML)+1
        plus[i].nextElementSibling.innerHTML++
        cart.innerHTML++
        totalPrice.innerHTML=Number(totalPrice.innerHTML)+Number(price[i].innerHTML)
})}

for(let i=0;i<minus.length;i++){
    minus[i].addEventListener("click",function(){
        //  console.log(this.previousElementSibling)
        // if(Number(this.previousElementSibling.innerHTML)>0) this.previousElementSibling.innerHTML=Number(this.previousElementSibling.innerHTML)-1
        if(Number(minus[i].previousElementSibling.innerHTML)>0) {
            minus[i].previousElementSibling.innerHTML--
            cart.innerHTML--
            totalPrice.innerHTML=Number(totalPrice.innerHTML)-Number(price[i].innerHTML)
        }

})}

for(let i=0;i<heart.length;i++){
    heart[i].addEventListener("click",function(){
        // console.log(heart[i])
        if(heart[i].color!=='#f00') heart[i].style.fill = '#f00';

        else (heart[i].style.fill = '#fff');
})}

for(let i=0;i<heart.length;i++){
    heart[i].addEventListener("click",function(){
        // console.log(heart[i])
        if( IsBlack) {
            heart[i].style.fill = '#f00';
            IsBlack=false;
        }else{
            heart[i].style.fill = '#000'
            IsBlack=true;
        }
        
})}


for(let i=0;i<remove.length;i++){
    remove[i].addEventListener("click",function(){
        //  console.log(card[i])
        card[i].remove()
        
        
})}
