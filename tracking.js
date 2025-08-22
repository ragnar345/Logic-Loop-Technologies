document.getElementById('trackingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const enteredTrackingNumber = document.getElementById('trackingNumber').value;
    const storedTrackingNumber = localStorage.getItem('trackingNumber');
    const shippingAddress = localStorage.getItem('shippingAddress');

    const trackingResult = document.getElementById('trackingResult');

    if (enteredTrackingNumber === storedTrackingNumber) {
        trackingResult.innerHTML = `
            <p>Tracking Number: ${storedTrackingNumber}</p>
            <p>Status: Your product is on the way!</p>
            <p>Shipping Address: ${shippingAddress}</p>
        `;
    } else {
        trackingResult.innerHTML = `<p>Invalid tracking number. Please try again.</p>`;
    }
});