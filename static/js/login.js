const createIndexDOM = () => {
  let array = [];

  let template = `
    <div class="loginBox">
        <div class="iconBox">
            <img class="icon" src="../img/popcorn_Icon.jpg" height="100px" width="100px">
        </div>
        <h3>Sign in here</h3>
        <form action="" method="post">
            <div class="inputBox">
                <input id="uname" type="text" name="Username" placeholder="Username"> 
                <input id="pass" type="password" name="Password" placeholder="Password"> 
            </div>
            <input type="submit" name="" value="Login">
        </form> 
        <a href="#">Forget Password<br></a>
        <div class="text-center">
            <p style="color: #59238F;">Sign-Up</p>
        </div>
    </div>
    `;

  document.body.innerHTML = template;
};

createIndexDOM();
