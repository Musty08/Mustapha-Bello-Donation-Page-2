document.addEventListener("DOMContentLoaded", function() {
    const donationForm = document.getElementById("donationForm");
    const amountInput = document.getElementById("amount");
    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const amount = amountInput.value.trim();
        if (amount !== "") {
            // Here, you can add the logic to process the donation
            console.log("Thank you for your donation of $" + amount);
            amountInput.value = ""; // Clear the input field after donation
        }
    });
});