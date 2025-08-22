// Utility functions for cart
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Render cart items
function renderCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    let cart = getCart();
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        updateCartSummary();
        return;
    }

    cart.forEach((item, idx) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-details">
                <h3>${item.name}</h3>
                <div class="item-price">$${item.price.toFixed(2)}</div>
                <div class="item-quantity">
                    <button class="quantity-btn" data-idx="${idx}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-idx="${idx}" data-action="increase">+</button>
                </div>
            </div>
            <button class="remove-btn" data-idx="${idx}">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    // Quantity buttons
    cartItemsDiv.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.getAttribute('data-idx'));
            const action = this.getAttribute('data-action');
            let cart = getCart();
            if (action === 'increase') {
                cart[idx].quantity += 1;
            } else if (action === 'decrease' && cart[idx].quantity > 1) {
                cart[idx].quantity -= 1;
            }
            setCart(cart);
            renderCartItems();
            updateCartSummary();
        });
    });

    // Remove buttons
    cartItemsDiv.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.getAttribute('data-idx'));
            let cart = getCart();
            cart.splice(idx, 1);
            setCart(cart);
            renderCartItems();
            updateCartSummary();
        });
    });

    updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
    let cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.15;
    const total = subtotal + tax;
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Checkout button
document.addEventListener('DOMContentLoaded', function() {
    renderCartItems();
    document.getElementById('checkoutBtn').addEventListener('click', function () {
        window.location.href = 'checkout.html';
    });
});
