
<div class="footer-general">
    <div class="footer-general-contaner">
        <div class="footer-logo">
            <div class="logo">
                <img src='https://static.nanogames.io/assets/logo.cebcfe09.png' alt="footer1" />
            </div>
            <div class="footer-text1">
                <h4>
                    BORCELLE is built by gamblers for gamblers.
                     With our unique community and a huge selection of games like Crash, HashDice,
                      Plinko, Slots, and many more. Your greatest casino adventure is waiting for you!
                </h4>
              </div>
        </div>
    
        <div class="footer-contacts-text">
            <div class="footer-text2">
              <div class="footer-text-content">
                  <a href="/">HELP CENTER</a>
              </div>
              <div class="footer-text-content">
                  <a href="/">TERMS OF SERVICE</a>
              </div>
              <div class="footer-text-content">
                  <a href="/">USER AGREEMENT</a>
              </div>
              <div class="footer-text-content">
                  <a href="/">APP</a>
              </div>
            </div>
        </div>
    
          <div class="footer-contacts">
            <div class="footer-help">
              <h4>CONTACT US</h4>
              <h4>
                Help: <a href="/">help.BORCELLO.io</a>
              </h4>
            </div>
          </div>
    </div>


<div class="footer-last">
        <div class="footer-last-row">
          <h4>1BTC=$24,388.77</h4>
        </div>
        <div class="footer-last-row2">
          <div class="copyright">
            <h4>©2023 BORCELLE.IO ALL RIGHTS RESERVED</h4>
          </div>
            <div class="footer-top-arrow"  onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}>
                <svg fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path xmlns="http://www.w3.org/2000/svg" d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="rgba(153,164,176,.8)"></path>
                </svg>
                <span>Top</span>
            </div>
          </div>
    </div>
</div>

<style>
.footer-general {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgb(28, 30, 34);
}
.footer-general-contaner{
    display: flex;
    width: 100%;
    padding: 20px 0;
    margin: 0;
}

.footer-logo {
  width: 100%;
}
.footer-logo .logo{
    padding: 1px 25px;
}
.footer-text-content a{
    color: var(--text-color);
}

.footer-text-content a:hover{
    color: var(--primary-color);
}

.footer-logo img {
  width: 120px;
}

.footer-contacts {
  display: flex;
  width: 100%;
}

.footer-contacts-text {
  width: 100%;
}

.footer-text1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-text1 h4 {
  font-weight: 600;
  color: #757585;
  font-size: 12px;
  line-height: 25px;
  padding-left: 25px;
  padding-top: 25px;
  letter-spacing: 1px;
}

.footer-text2 {
  color: #ffffff;
  padding: 60px;
  font-weight: 600;
  line-height: 30px;
  font-size: 12px;
  letter-spacing: 1px;
}

.footer-help {
  font-weight: 600;
  padding: 50px;
  line-height: 45px;
  font-size: 20px;
}

.footer-help h4 {
  color: #757585;
  font-size: 12px;
}

.footer-help h4 a {
  color: var(--primary-color);
  font-size: 12px;
}

.footer-last-row h4 {
  color: #605f70;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  color: #757585;
  font-size: 12px;
}

.footer-last-row2 h4 {
  color: #9593a0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: lighter;
  font-size: 12px;
}

.footer-last {
  display: flex;
  border-top: 1px solid #9593a01f;;
  padding-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 10px;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  padding-right: 18px;
}

.footer-last-row2 {
  display: flex;
  align-items: center;
}


.footer-top-arrow {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(53, 60, 66, 0.4);
    color: rgb(153, 164, 176);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 14px;
    line-height: normal;
    cursor: pointer;
    font-size: 11px;
}

 .footer-top-arrow svg {
    transform: rotate(270deg);

}

  </style>