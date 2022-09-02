const createIndexDOM = () => {
  let array = [];

  let template = `
    <div class="loginBox">
        <div class="iconBox">
            <img class="icon" src="../img/popcorn_Icon.jpg" height="100px" width="100px">
        </div>
        <div class="title" id="title"></div>
        <form action="" method="post">
            <div class="inputBox">
                <input id="uname" type="text" name="Username" placeholder="Username"> 
                <input id="pass" type="password" name="Password" placeholder="Password"> 
            </div>
            <input type="submit" name="" value="Login">
        </form> 
        <div class="pwBox">
            <span class="pw"></span>
        </div>
        <div class="text-center">
            <span class="tc"></span>
        </div>
    </div>
    `;

  document.body.innerHTML = template;
};

const textSet = () => {
    const span = document.createElement('span');

    const title = document.getElementById('title');
    title.innerText = 'POPCORN!';

    const pw = document.querySelector('.pw');
    pw.innerText = 'Forget Password?';

    const tc = document.querySelector('.tc');
    tc.innerText = 'Sign-Up';
}

createIndexDOM();
textSet();