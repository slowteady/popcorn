/* 로그인 페이지 */
// 로그인 DOM
const createloginDOM = () => {
  let array = [];

  let loginTemplate = `
    <div class="loginBox">
        <div class="iconBox">
            <img class="icon" src="../img/popcorn_Icon.jpg" height="100px" width="100px">
        </div>
        <div class="title" id="title">POPCORN!</div>
        <form action="" method="post">
            <div class="inputBox">
                <input id="uname" type="text" name="Id" placeholder="Email or Username"> 
                <input id="pass" type="password" name="Password" placeholder="Password"> 
            </div>
            <input type="submit" value="Login">
        </form> 
        <div class="pwBox">
            <span class="pw">Forget Password?</span>
        </div>
        <div class="text-center">
            <span class="tc"></span>
        </div>
    </div>
    `;

  document.body.innerHTML = loginTemplate;

    // 비밀번호 찾기
    const pw = document.querySelector('.pw');
    pw.addEventListener('click', () => {
        alert('서비스 준비중입니다');
    });
};

export default createloginDOM();



