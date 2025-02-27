document.addEventListener("DOMContentLoaded", () => {
    const donationForm = document.getElementById("donationForm");
    const paymentButtons = document.querySelectorAll(".payment-options button");

    paymentButtons.forEach(button => {
        button.addEventListener("click", e => {
            e.preventDefault();

            if (validateDonationForm()) {
                alert("Gracias por tu donación!");
                donationForm.submit();
            }
        });
    });

    const validateDonationForm = () => {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const amount = document.getElementById("amount").value.trim();
        const donationType = document.getElementById("donationType").value;

        if (!firstName || !lastName || !amount || isNaN(amount) || amount < 1 || !donationType) {
            alert("Por favor, completa todos los campos correctamente.");
            return false;
        }
        return true;
    }

    const adoptionForms = document.querySelectorAll(".adoption-section form");

    adoptionForms.forEach(form => {
        form.addEventListener("submit", e => {
            e.preventDefault();

            if (validateAdoptionForm(form)) {
                alert("Gracias por querer adoptar a " + form.closest(".card").querySelector("h3").textContent + "!");
                form.submit();
            }
        });
    });

    const validateAdoptionForm = form => {
        const inputs = form.querySelectorAll("input");
        for (let input of inputs) {
            if (!input.value.trim()) {
                alert("Por favor, completa todos los campos correctamente.");
                return false;
            }
        }
        return true;
    }
});