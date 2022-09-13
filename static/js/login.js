// 로그인 DOM
const createloginDOM = () => {
  let array = [];

  let loginTemplate = `
    <div class="loginBox">
        <div class="iconBox">
            <img class="icon" src="../img/popcorn_Icon.jpg" height="100px" width="100px">
        </div>
        <div class="title" id="title"></div>
        <form action="" method="post">
            <div class="inputBox">
                <input id="uname" type="text" name="Id" placeholder="Email or Username"> 
                <input id="pass" type="password" name="Password" placeholder="Password"> 
            </div>
            <input type="submit" value="Login">
        </form> 
        <div class="pwBox">
            <span class="pw"></span>
        </div>
        <div class="text-center">
            <span class="tc"></span>
        </div>
    </div>
    `;

  document.body.innerHTML = loginTemplate;
};

// 회원가입 모달 창
const createSignUpModal = () => {
    let array = [];
    let signUpTemplate = `
        <div class="signUpBox">
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
                </form>    
            </div>      
        </div>
    `;
    document.body.innerHTML = signUpTemplate;
}

// Text SetValue
const textSet = () => {
    const span = document.createElement('span');

    const title = document.getElementById('title');
    title.innerText = 'POPCORN!';

    // 비밀번호 찾기
    const pw = document.querySelector('.pw');
    pw.innerText = 'Forget Password?';
    pw.addEventListener('click', () => {
        alert('서비스 준비중입니다');
    });

    // 회원가입
    const tc = document.querySelector('.tc');
    tc.innerText = 'Sign-Up';
    tc.addEventListener('click', () => {
        const loginBox = document.querySelector('.loginBox');
        loginBox.classList.add('hidden');
        createSignUpModal();
    });
}

createloginDOM();
textSet();