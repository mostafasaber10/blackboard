const productButton = document.querySelectorAll('.purchase-btn')

  const pay = document.querySelector('.pay')

  const closes = document.querySelector('.closes')

  const seop = document.querySelector('.seop')


  productButton.forEach((button) =>{
     button.addEventListener("click",()=>
  {
      pay.style.display ="flex";
 }
    )

  })


  closes.addEventListener("click",()=>
   {
      pay.style.display ="none";
  }

 )









  // متغير يخزن عدد العناصر في السلة
  let cartdetails = 0;

 // مصفوفة لتخزين التفاصيل الخاصة بالعناصر في السلة
  const cartItems = [];



let pressure = document.querySelector('.sgi');
let zero = document.querySelector('.quantity');
let close = document.querySelector('.close');
let list = document.querySelector('.cart-details');
let total = document.querySelector('.total-price-details');
let purch = document.querySelector('.purchase-btn');
let popup = document.querySelector('.popup');



pressure.addEventListener("click" ,()=>
{
    openCartWindow();
}

 )

 function openCartWindow() {
         let popup = document.querySelector('.popup');
         let close = document.querySelector('.close');
         let list = document.querySelector('.cart-details');
        let totalDetailsPrice = document.querySelector('.total-price-details');
        list.innerHTML = '';
            let total = 0;
            
            cartItems.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span class="delete-item" onclick="removeItem(${index})">(X)</span>
                    <img src="${item.image}" alt="${item.name}" />
                    ${item.name} - $${item.price.toFixed(2)}
                `;
                list.appendChild(listItem);
                total += item.price;
            });


            

            
        
  // قم بتحديث المجموع في تفاصيل السلة
  totalDetailsPrice.textContent = `المجموع: $${total.toFixed(2)}`;

     // إظهار النافذة المنبثقة
    popup.style.display = 'block';

     
    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });
   
 
 
 }


 function addToCart(item) {
    cartItems.push(item);
    
    // زيادة قيمة العنصر quantity بمقدار 1
    cartdetails++;
    
    // تحديث نص عدد المنتجات في السلة
    const quantityElement = document.querySelector('.quantity');
    quantityElement.textContent = cartdetails;
}

let quantity = 0; // المتغير الذي سيخزن العدد

function increaseQuantity() {
    quantity++;
    updateQuantity();
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity--;
        updateQuantity();
    }
}

function updateQuantity() {
    const quantityElement = document.querySelector('.quantity');
    quantityElement.textContent = quantity;
}


const newItem = {
    name: 'اسم المنتج',
    price: 10.00,
    image: 'رابط الصورة' 
    
};
addToCart(newItem);

const newIte = {
    name: 'اسم المنتج',
    price: 20.00,
    image: 'رابط الصورة'
};
addToCart(newIte);


const newIt = {
    name: 'اسم المنتج',
    price: 30.00,
    image: 'رابط الصورة'
};
addToCart(newIt);


const newI= {
    name: 'اسم المنتج',
    price: 40.00,
    image: 'رابط الصورة'
};
addToCart(newI);


function removeItem(index) {
    cartItems.splice(index, 1);
    cartdetails--;
    const quantityElement = document.querySelector('.quantity');
    quantityElement.textContent = cartdetails;
    openCartWindow();
}

 // دالة لإغلاق النافذة المنبثقة
 function closeCartWindow() {
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
  }








