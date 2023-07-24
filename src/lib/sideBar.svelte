<script>
    import { goto } from "$app/navigation"
    import {onMount} from "svelte";
    import Original from "./original.svelte";


    let showOriginals = false

    const openOriginal =((e)=>{
        if(e === 1){
            showOriginals = true
        }else{
            showOriginals = false
        }
    })

    let home = ''
    let originals = ""
    let lottery = ''
    let affiliate = ''
    let vip = ''
    let probably  = ''
    let recent = ''
    let favourite = ''

    let currentPath;
    onMount(() => {
        currentPath = window.location.pathname;
        if(currentPath === '/' ){
            home = true
        }else if(currentPath === '/crash' || currentPath === '/classic-dice' || currentPath === '/hili' || currentPath === '/diamonds' || currentPath === '/mines' || currentPath === '/plinko' || currentPath === '/tower'){
            originals = true
        }
        else if(currentPath === '/lottery' ){
            lottery = true
        }else if(currentPath === '/affiliate'){
            affiliate = true
        }else if(currentPath === '/vip-games'){
            vip = true
        }else if(currentPath === '/probably'){
            probably  = true
        }else if(currentPath === '/favourite'){
            favourite = true
        }else if(currentPath === '/recent-play'){
            recent = true
        }
    });



    const handleRoutes = (e)=>{
        if(e ===  1){
            currentPath = '/'
            goto("/")
            home = true
            originals = ""
            lottery = ''
            affiliate = ''
            vip = ''
            probably  = ''
            recent = ''
            favourite = ''
        }else if(e.detail === 2){
            home = ''
            originals = true
            lottery = ''
            affiliate = ''
            vip = ''
            probably  = ''
            recent = ''
            favourite = ''
        }else if(e === 3){
            goto('/lottery')
            currentPath = '/lottery'
            home = ''
            originals = ''
            lottery = true
            affiliate = ''
            vip = ''
            probably  = ''
            recent = ''
            favourite = ''
        } else if(e === 4){
            goto("affiliate")
            currentPath = '/affiliate'
            home = ''
            originals = ''
            lottery = ''
            affiliate = true
            vip = ''
            probably  = ''
            recent = ''
            favourite = ''
        }
        else if(e === 5){
            goto("vip-games")
            currentPath = '/vip-games'
            home = ''
            originals = ''
            lottery = ''
            affiliate = ''
            vip = true
            probably  = ''
            recent = ''
            favourite = ''
        }else if(e === 6){
            goto("probably")
            currentPath = '/probably'
            home = ''
            originals = ''
            lottery = ''
            affiliate = ''
            vip = ''
            probably  = true
            recent = ''
            favourite = ''
        }else if(e === 7){
            goto("favourite")
            currentPath = '/favourite'
            home = ''
            originals = ''
            lottery = ''
            affiliate = ''
            vip = ''
            probably  = ''
            favourite = true
            recent = ''
        }else if(e === 8){
            goto("recent-play")
            currentPath = '/recent-play'
            home = ''
            originals = ''
            lottery = ''
            affiliate = ''
            vip = ''
            probably  = ''
            recent = true
            favourite = ''
        }
    }



</script>


<div class="side-bar">
    <div class="MainBar">
        <div class="MenuBar-contents">
            <button on:click={()=>handleRoutes(1)} class="nav-details">
                <div class={home ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src='https://static.nanogames.io/assets/home.e1cf89b4.png' alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>Home</h3>
                    </div>
                </div>
            </button>

            <button on:mouseenter={()=> openOriginal(1)} class="nav-details" on:mouseleave={()=> openOriginal(2)} >
                <div class="original-contents">
                    <div class={originals ? "nav-contents" : "notActive"}>
                        <div class="game-icon">
                            <img src='https://static.nanogames.io/assets/originalcasino.bb7966a7.png' alt="casino" />
                        </div>
                        <div class="game-text">
                            <h3>BC Original</h3>
                        </div>
                    </div>
                <div class="game-arrow">
                    <svg fill="none" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                        <path xmlns="http://www.w3.org/2000/svg" d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="rgba(153,164,176,.8)"></path>
                    </svg>
                </div>
            </div>
            {#if showOriginals}
              <Original on:bc={handleRoutes} />
              {/if}
            </button>

            <hr />

            <button on:click={()=>handleRoutes(3)} class="nav-details">
                <div class={lottery ? "nav-contents" : "notActive"}>
                <div class="game-icon">
                    <img src='https://static.nanogames.io/assets/lottery.bc95b607.png' alt="casino" />
                </div>
                <div class="game-text">
                    <h3>Lottery</h3>
                </div>
             </div>
            </button>


              <button on:click={()=>handleRoutes(4)} class="nav-details">
                <div class={affiliate ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src='https://static.nanogames.io/assets/affiliate.6f434c33.png' alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>Affiliate</h3>
                    </div>
                </div>
              </button>

              <button on:click={()=>handleRoutes(5)} class="nav-details">
                <div class={vip ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src="https://static.nanogames.io/assets/vipclub.3b37e72c.png" alt="casino" />
                    </div>
                    <div class="promotion">
                        <h3>VIP Club</h3>
                    </div>
                </div>
              </button>


              <button on:click={()=>handleRoutes(6)} class="nav-details">
                <div class={probably ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src=https://static.nanogames.io/assets/fairness.12d49bfb.png alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>Probably Fair</h3>
                    </div>
                </div>
              </button>

            <hr />

              <button on:click={()=>handleRoutes(7)} class="nav-details">
                <div class={favourite? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src="https://static.nanogames.io/assets/myfavorite.466f0741.png" alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>Favourite Games</h3>
                    </div>
                </div>
              </button>

              <button on:click={()=>handleRoutes(8)} class="nav-details">
                <div class={recent ? "nav-contents" : "notActive"}>
                    <div class="game-icon">
                        <img src="https://www.linkpicture.com/q/download_96.png" alt="casino" />
                    </div>
                    <div class="game-text">
                        <h3>My Recent Play</h3>
                    </div>
                </div>
              </button>

            <hr />
                <!-- <div class="language-currency">
                  <div class="container">
                     <div class="contents">
                      <p>Language & Currently</p>
                      <div class="input">
                        <div class="language-switch">
                            <p>Engligh</p>
                        </div>
                        <img  src="https://www.linkpicture.com/q/arrow.svg" alt="" />
                      </div>
                    </div> -->

                        <!-- <div class="switch-contents">
                          <div class="moon">
                            <img src={moon} alt="" />
                          </div>
                          <div class="setting">
                            <img src={setting} alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="mode">
                        <div class="mode-contents">
                          <h3>Dark mode</h3>
                          <h4>Currently</h4>
                        </div>
                      </div> -->
                    </div> 

                    <!-- <hr />
                    <div class="live_support_head">
                      <Link to="/Support">
                        <div class="live_support_piece">
                          <img src={homeHear} alt="" />
                        </div>
                        <div class="live_support_text">
                          <h3>Live Support</h3>
                        </div>
                      </Link>
                    </div>
                    <hr />
                    <div class="socials">
                      <p>Social Media</p>
                      <div class="social-contents">
                        <a href="https://www.telegram.com">
                          <img src={telegram} alt="" />
                        </a>
                        <a href="https://www.facebook.com">
                          <img src={facebook} alt="" />
                        </a>
                        <a href="https://www.instagram.com">
                          <img src={instagram} alt="" />
                        </a>
                        <a href="https://www.twitter.com">
                          <img src={twitter} alt="" />
                        </a>
                      </div>
                    </div> -->
               
         
                <!-- </div>
        
      </div> -->
    </div>
</div>


<style>
    .side-bar {
        position: fixed;
        z-index: 106;
        left: 0px;
        top: 0px;
        overflow-y: scroll;
        bottom: 0px;
        width: 240px;
        color: rgba(153, 164, 176, 0.8);
        background-color: rgba(30, 32, 36, 0.186);
        transition: all 0.2s linear 0s;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.197);
    }
    .side-bar::-webkit-scrollbar{
        display: none;
    }

.MainBar{
    width: 240px;
    height: 100%;
}

.side-bar::after .MainBar {
    overflow: hidden auto;
    width: 240px;
    height: 100%;
}
.MenuBar-contents{
    padding-top: 60px;
}
.nav-details{
    padding: 7px 0;
    width: 100%;
    background: none;
    margin: 5px 0;
    border: none;
    display: flex;
    position: relative;
}
.original-contents{
    display: flex;
    gap: 15px;
}
.nav-contents{
    transition: 0.9s ease;
    display: flex;
    width: fit-content;
    padding-right: 40px;
    border-radius: 0 30px 30px 0;
    font-weight: bold;
    background-image: linear-gradient(to right, rgba(105, 179, 1, 0.4), rgba(85, 89, 102, 0.4) 33%, rgba(85, 89, 102, 0.4));
    color: rgb(245, 246, 247);
    cursor: pointer;
}
.notActive{
    transition: 0.5s ease;
    display: flex;
    width: fit-content;
    padding-right: 40px;
    border-radius: 0 30px 30px 0;
    font-weight: 400;
    color: rgba(153,164,176,.8);
    cursor: pointer;
}
.notActive:hover, .original-contents:hover svg path{
    transition: 0.5s ease;
    color: rgb(245, 246, 247);
    width: 800;
    fill:rgb(245, 246, 247);
}
.nav-details .game-icon img{
    width: 30px;
    padding-left: 15px;
    margin-top: 2px;
}
.nav-details .game-arrow{
    font-size: 12px;
    padding: 10px;
    cursor: pointer;
}
.nav-details .game-text{
    font-size: 12px;
    margin: 7px;
}
.nav-contents .promotion, .notActive .promotion{
    color: rgb(235, 93, 15);
    padding-top: 5px;
    font-size: 1rem;
    font-weight: 900;
    font-style: italic;
}
.side-bar hr{
    border: 1px solid #ffffff09;
}

</style>
