document.getElementById('paymentMethod').addEventListener('change', function () {
    const mobileMoneySection = document.getElementById('mobileMoneySection');
    if (this.value === 'mobileMoney') {
        mobileMoneySection.style.display = 'block';
    } else {
        mobileMoneySection.style.display = 'none';
    }
});

document.getElementById('checkoutForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const amount = 1000; // Replace with the actual amount

    if (paymentMethod === 'mobileMoney') {
        try {
            const response = await fetch('/api/send-payment-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mobileNumber, amount }),
            });

            const result = await response.json();
            if (response.ok) {
                alert(`A payment notification has been sent to ${mobileNumber}. Please confirm the payment on your mobile device.`);
            } else {
                alert(`Failed to send payment request: ${result.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while processing your payment. Please try again.');
        }
    } else {
        // Simulate other payment methods
        alert(`Processing payment via ${paymentMethod}...`);

        // Generate a tracking number
        const trackingNumber = Math.floor(Math.random() * 1000000);

        // Display tracking information
        const trackingResult = document.getElementById('trackingResult');
        const trackingDetails = document.getElementById('trackingDetails');

        trackingDetails.innerHTML = `
            <p>Tracking Number: <strong>${trackingNumber}</strong></p>
            <p>Status: Your product is on the way!</p>
            <p>Shipping Address: ${address}</p>
        `;

        // Show tracking result
        trackingResult.style.display = 'block';

        // Optionally, store tracking details in localStorage
        localStorage.setItem('trackingNumber', trackingNumber);
        localStorage.setItem('shippingAddress', address);

        // Hide the checkout form
        document.getElementById('checkoutForm').style.display = 'none';
    }
});

document.getElementById('stripeCheckoutButton').addEventListener('click', function () {
    // Replace with your own Stripe publishable key
    var stripe = Stripe('pk_test_51N...YOUR_KEY_HERE...');

    // For demo: use a pre-created test session or create one via your backend
    fetch('/create-checkout-session', { method: 'POST' })
      .then(res => res.json())
      .then(session => stripe.redirectToCheckout({ sessionId: session.id }));
});