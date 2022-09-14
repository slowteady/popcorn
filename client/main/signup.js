/* 회원가입 페이지 */
// import * as common from "./login.js";
// 회원가입 모달 창
const createSignUpModal = () => {
    let array = [];
    let signUpTemplate = `
        <div class="signUpBox" id="signUpBox">
            <div class="wrapBox">
                <form action="" method="post">
                    <div class="inputBox">
                        <div class="label" id="idLabel">Email</div>
                            <input id="email" type="text" placeholder="Email">
                        <div class="label" id="emailLabel">Phone</div>
                            <input id="phone" type="text" placeholder="Phone">
                        <div class="label" id="emailLabel">Username</div>
                            <input id="username" type="text" placeholder="Username">
                    </div>
                    <input class="signup_btn" type="submit" value="Sign Up">
                    <div class="btnBox">
                        <span class="backBtn" id="backBtn"></span>
                    </div>
                </form>    
            </div>      
        </div>
    `;
    document.body.innerHTML = signUpTemplate;

    // 회원가입
    const tc = document.querySelector('.tc');
    const loginBox = document.querySelector('.loginBox');
    tc.innerText = 'Sign-Up';
    tc.addEventListener('click', () => {
        loginBox.classList.add('hidden');
        createSignUpModal();
        const backBtn = document.getElementById('backBtn');
        backBtn.innerText = 'Back';
        backBtn.addEventListener('click', () => {
            common.createloginDOM();
        });
    });
}

// export default createSignUpModal();