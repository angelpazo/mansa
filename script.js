const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');

    loginButton.onclick = () => {
        window.location.href = 'inicio.html'; // Redirige a inicio.html
    };

    registerButton.onclick = () => {
        window.location.href = 'inicio.html'; // Redirige a inicio.html
    };
});