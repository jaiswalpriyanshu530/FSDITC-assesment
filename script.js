        const pricePerUnit = 29.99; // Price of the product
        const quantityInput = document.getElementById('quantity-input');
        const totalPriceElement = document.getElementById('total-price');
        const buyNowButton = document.getElementById('buy-now-button');

        // Function to update the total price based on quantity
        function updateTotalPrice() {
            const quantity = parseInt(quantityInput.value);
            const totalPrice = (quantity * pricePerUnit).toFixed(2); // Calculate total price
            totalPriceElement.textContent = Total Price: $${totalPrice}; // Update total price display
        }

        // Event listener for quantity input change
        quantityInput.addEventListener('input', updateTotalPrice);

        // Event listener for Buy Now button click
        buyNowButton.addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value);
            const totalPrice = (quantity * pricePerUnit).toFixed(2