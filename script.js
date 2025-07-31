document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer Logic
    const countdownDate = new Date("October 11, 2025 19:30:00").getTime();

    const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements
        document.getElementById("dias").innerText = String(days).padStart(2, '0');
        document.getElementById("horas").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutos").innerText = String(minutes).padStart(2, '0');
        document.getElementById("segundos").innerText = String(seconds).padStart(2, '0');

        // If the countdown is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "¡El gran día ha llegado!";
            document.querySelector(".contador-titulo").innerHTML = ""; // Clear the title
        }
    }, 1000);

    // Dress Code Button Navigation (already handled by href in HTML)
    // No specific JS needed unless it was a modal or complex navigation.
});
