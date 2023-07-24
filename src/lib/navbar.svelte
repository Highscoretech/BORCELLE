<div class="Navbar">
      <div class=Navbar-container>
          <div class="logo">
            <a href="/">BORCELLE</a>
          </div>
          <div class="login">
            <a href="/login">Login</a>
          </div>
            <div class="signup">
                <a href="/signup">Signup</a>
            </div>
          <div class="chat" >
            <div class="icon">
              <img src="https://www.linkpicture.com/q/play_2.png" alt="" />
            </div>
            <div class="num">
              <p>1</p>
            </div>
          </div>
        </div>
</div>

<style>
  .Navbar{
    height: 4rem;
    position: fixed;
    z-index: 101;
    left: 0px;
    top: 0px;
    right: 0px;
    background-color: rgb(36, 38, 43);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.197);
    transition: all 0.2s linear 0s;
  }
  .Navbar-container{
    padding-left: 240px;
    display: flex;
  }
  .Navbar-container .logo{
    padding: 9px 50px;
  }
  .Navbar-container .logo a{
    text-decoration: none;
    color: var(--text-color);
    font-weight: 900;
    font-size: 30px;
  }
  .Navbar-container .login{
    padding-left: 490px;
    padding-top: 16px;
  }
  .Navbar-container .login a{
    color: #43b309;
    font-weight: 800;
    font-size: 16px;
    letter-spacing: 0.09em;
  }
  .Navbar-container .signup{
    padding: 16px;
  }
  .Navbar-container .signup a{
    background: #43b309;
    font-weight: 500;
    color: #f5f6f7;
    padding: 9px 20px;
    border-radius: 30px;
    font-size: 14px;
    letter-spacing: 0.09em;
  }
  .Navbar-container .chat{
    display: flex;
    position: relative;
  }
  .Navbar-container .chat .icon{
    padding: 18px 25px;
  }
  .Navbar-container .chat .icon img{
    width: 20px;
  }
  .Navbar-container .chat .num{
    position: absolute;
    width: 1rem;
    height: 1rem;
    top:5px;
    right: 7px;
    background: #43b309;
    display: flex;
    border-radius: 50%;
    color: #f5f6f7;
    font-size: 11px;
    padding: 3px;
    justify-content: center;
    align-items: center;
  }
</style>
