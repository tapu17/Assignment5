
// Product value //
function addProductEntry(productName) {
    const cartProductList = document.getElementById('cart-product-list');
    const count = cartProductList.childElementCount;
    const newElement = document.createElement('p');
    newElement.innerHTML = `${count + 1}. ${productName}`;
    cartProductList.appendChild(newElement);
};

// total price //
let totalPrice = 0;
const totalPriceElement = document.getElementById('main-total-price');

function addToTotal(price) {
    totalPrice += price;
    totalPriceElement.textContent = totalPrice.toFixed(2);
    updateCouponButtonState();
    updatePurchaseButtonState();
}

const applyCouponButton = document.getElementById('apply-btn');
function updateCouponButtonState() {
    if (totalPrice >= 200) {
        applyCouponButton.disabled = false;
    }
    else {
        applyCouponButton.disabled = true;
    }
}
const purchaseButton = document.getElementById('purchase-btn');
function updatePurchaseButtonState() {
    if (totalPrice > 0) {
        purchaseButton.disabled = false;
    }
    else {
        purchaseButton.disabled = true;
    }
}

const couponCodeInput = document.getElementById('coupon-input');
const discountAmountElement = document.getElementById('discount-amount');
const discountedPriceElement = document.getElementById('discounted-total-price');
// Discount Function //
function applyCoupon() {
    const discountPercentage = 0.2; 

    // sell200 section //

    if (couponCodeInput.value === 'SELL20') {
        const discountedPrice = totalPrice * (1 - discountPercentage);
        const discountAmount = totalPrice * discountPercentage;

        discountedPriceElement.textContent = discountedPrice.toFixed(2);
        discountAmountElement.textContent = discountAmount.toFixed(2);
    } else {
        alert('Invalid coupon code.');
    }
}

// purchase complete //
const goHomeBtn = document.getElementById('go-home-btn');
goHomeBtn.addEventListener('click', function () {
    window.location.href = 'index.html'
})