console.log("connected");

const allBtn = document.getElementsByClassName('seatBtn') 
let count = 0;
const seatPrice = 550;
const new15 = 'NEW15'
const couple20 = 'Couple 20'


const apply = document.getElementById("apply")
const grandTotal = document.getElementById('grandPrice')
const totalPrice = document.getElementById("totalPrice")

if(count !==4){
    apply.setAttribute("disabled", '')
} 

for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count = count + 1
        
        if(count==4 ){
            apply.removeAttribute("disabled", '');
            for(const b of allBtn){  
                    b.setAttribute('disabled', '')
               
            }
        }
        btn.classList.add("selected")
        
        
        const seatCount = document.getElementById('seatCount')
        seatCount.innerText = count
        document.getElementById('seatLeft').innerText = (40 - count)
        
        const seatNumber = btn.textContent;
        const ticketContainer = document.getElementById("ticket-container")
        
        const div = document.createElement("div")
        const p1 = document.createElement("p")
        p1.innerText = seatNumber
        const p2 = document.createElement("p")
        p2.innerText = 'Economoy'
        const p3 = document.createElement("p")
        p3.innerText = seatPrice
        
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        div.classList.add("flex")
        div.classList.add('justify-between')
        ticketContainer.appendChild(div)

       
        totalPrice.innerText = count * seatPrice;
        grandTotal.innerText = count * seatPrice

        
    })
}

const input = document.querySelector("input")
const applyCoupon = document.getElementById('applyCoupon')

apply.addEventListener("click", function(){
    const coupon = input.value
    if(coupon === new15 ){
        const Total = (seatPrice * count)
        const  gtotal = Total - (Total * 0.15)
        grandTotal.innerText = gtotal; 

        const grandDiv = document.getElementById("grandDiv");
        const p = document.createElement('p')
        p.innerText = (Total - gtotal )+ ' '+ 'Profit'
        grandDiv.appendChild(p)
        applyCoupon.classList.add('hide')
    } else if(coupon === couple20){
        Total = (seatPrice * count)
        gtotal = Total - (Total * 0.20)
        grandTotal.innerText = gtotal; 

        const grandDiv = document.getElementById("grandDiv");
        const p = document.createElement('p')
        p.innerText = (Total - gtotal )+ ' '+ 'Profit'
        grandDiv.appendChild(p)
        applyCoupon.classList.add('hide')
    }
    
})
