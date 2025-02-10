const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const nextPageUrl = 'main.html'; // Redirect page

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim(); 

    if (userInput !== "") {
        localStorage.setItem("userName", userInput); // Save user name
        resultDiv.innerHTML = `Welcome, ${userInput}! ❤️`;
        setTimeout(() => {
            window.location.href = nextPageUrl; // Redirect after 1 sec
        }, 1000);
    } else {
        resultDiv.innerHTML = 'Please enter your name!';
    }
});
