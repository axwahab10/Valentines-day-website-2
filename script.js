
const messages = [
    "Are you sure?",
    "Really sure??",
    "Pakka?",
    "Pakka Pakka?",
    "Yaar ek baar sochlo!",
    "If you say no, meko bura legega :(",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, Haan boldo please ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Function to check the reply
function checkReply() {
    let replyInput = document.getElementById("replyInput").value.trim().toLowerCase();
    let replyError = document.getElementById("replyError");

    if (replyInput === "waka waka") {
        replyError.style.display = "none"; // Hide error message
        document.querySelector(".ola-amigo").classList.add("hidden");
        document.querySelector(".double-verification").classList.remove("hidden");
    } else {
        replyError.style.display = "block"; // Show error message
        document.getElementById("replyInput").value = ""; // Clear input field
    }
}

// Function to show next section
function showHeyBeautiful() {
    document.querySelector(".double-verification").classList.add("hidden");
    document.querySelector(".container1").classList.remove("hidden");
}

// Function to check the code and redirect
function checkCode() {
    let codeInput = document.getElementById("codeInput").value.trim();
    let errorMessage = document.getElementById("error");

    if (codeInput === "4911") {
        window.location.href = "love.html"; // Redirect to love.html
    } else {
        errorMessage.style.display = "block"; // Show error message
        document.getElementById("codeInput").value = ""; // Clear input field
    }
}

// Play/Pause Music Functionality
const audio = document.getElementById('backgroundAudio');
const audioControl = document.getElementById('audioControl');

audioControl.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        audioControl.textContent = '🔇 Pause Music';
    } else {
        audio.pause();
        audioControl.textContent = '🔊 Play Music';
    }
});

// Ensure audio starts when page is clicked once
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        audioControl.textContent = '🔇 Pause Music';
    }
}, { once: true });



