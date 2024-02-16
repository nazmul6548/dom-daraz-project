let count = 1;
let totalPriceStore =0;
const cardSelect = document.querySelectorAll('.card');
// console.log(cardSelect);
for (let i = 0; i < cardSelect.length; i++) {
    const element = cardSelect[i];
    // console.log(element);

    element.addEventListener('click',() => {
        // console.log("on fire");
        const title = element.querySelector('h3').innerText;
        // console.log(title.innerText);

        const tk = element.querySelector('span').innerText.split(' ')[1];
        const tkConvertToFloat =parseFloat(tk)
        // console.log(tkConvertToFloat);

        const titleMoveto = document.getElementById("title-container");
        const makePTag = document.createElement("p");
        makePTag.innerText=count+". "+ title;
        titleMoveto.appendChild(makePTag);
        count++;
        // 
        // 
        totalPriceStore = totalPriceStore + tkConvertToFloat;
        // console.log(totalPriceStore);

        document.getElementById('totalPrice').innerText=totalPriceStore.toFixed(2);
    });

    
}
const btn = document.getElementById('apply-btn');
btn.addEventListener('click',() => {
    // console.log("clicked");

    const couponElement = document.getElementById('input-field').value;
    // console.log(couponElement.value);
    const couponUpdate = couponElement.split(' ').join('').toUpperCase();
    console.log(couponUpdate);
    if (totalPriceStore >= 200) {
        if (couponUpdate == "SELL200") {
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPriceStore * 0.2;
            // console.log(discountAmount);
            discountElement.innerText =discountAmount.toFixed(2)

            const restTotal = document.getElementById('total');
            restTotal.innerText =(totalPriceStore - discountAmount).toFixed(2);
            document.getElementById('input-field').value ='';
            
            
        }else{
            alert('invalid coupon')
            document.getElementById('input-field').value ='';
        }
        
    }else {
        alert("at least buy 200tk's products")
        document.getElementById('input-field').value ='';
    }

});

const finalShowPic = document.getElementById('make-purchase');
finalShowPic.addEventListener('click',() => {
    const buttonCard = document.getElementById('banner-card').classList;
    buttonCard.remove('hidden');
    // console.log(buttonCard);


});

const cardid = document.getElementById('card-id');
cardid.addEventListener('click',() => {
    const hhh = document.getElementById('banner-card').classList;
    hhh.add('hidden');
});