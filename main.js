let noButtonMoved = false;

// Store user name when clicking login
document.addEventListener("DOMContentLoaded", function () {
    let loginButton = document.getElementById("loginButton");
    let nameInput = document.getElementById("nameInput");

    if (loginButton && nameInput) {
        loginButton.addEventListener("click", function () {
            let userName = nameInput.value.trim(); 
            if (userName !== "") {
                localStorage.setItem("userName", userName); // Save the name
                window.location.href = "yes.html"; // Redirect to next page
            } else {
                alert("Please enter your name.");
            }
        });
    }
});

// Handle button interactions
document.getElementById('yesButton')?.addEventListener("click", () => {
    window.location.href = "yes.html"; // Redirect to yes.html
});

document.getElementById('noButton')?.addEventListener("click", (event) => {
    event.preventDefault();
    moveNoButton();
    noButtonMoved = true;
    showHeart(event.clientX, event.clientY);
});

// Function to move the "No" button randomly
function moveNoButton() {
    let noButton = document.getElementById('noButton');
    if (noButton) {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }
}

// Function to show a heart animation
function showHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}
