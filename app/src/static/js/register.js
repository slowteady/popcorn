const email = document.querySelector('#email'),
    username = document.querySelector('#username'),
    phone = document.querySelector('#phone'),
    password = document.querySelector('#password'),
    pwConfirm = document.querySelector('#confirm');

// SignUp
const signUpBtn = document.querySelector('#signUpBtn');
signUpBtn.addEventListener('click', () => {
    const req = {
        email: email.value,
        username: username.value,
        phone: phone.value,
        password: password.value,
        pwConfirm: pwConfirm.value,
    };
});

// Back 
const backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click', () => {
    location.href = "/";
});
    