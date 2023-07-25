<script>
    // import function to register Swiper custom elements
    import { register } from 'swiper/element/bundle';
    // register Swiper custom elements
register();

import Icon from 'svelte-icons-pack/Icon.svelte';
import IoDice from "svelte-icons-pack/io/IoDice";


let games = [
    {id:1, name : "Crash", icon: IoDice,  route: "crash", isAtive: false, img: "https://img2.nanogames.io/game/image/c405f953-f7ca-4da5-8309-dcba4fc44e7d.png"},
    {id:3, name : "Plinko", icon: IoDice,  route: "plinko", isAtive: false, img: "https://img2.nanogames.io/game/image/ae817f12-fa67-49b8-b33e-6cafda497488.png" },
    {id:4, name : "Tower", icon: IoDice,  route: "tower", isAtive: false, img: "https://img2.nanogames.io/game/image/7f1f471d-0768-42f1-9d92-e70ce0e10235.png" },
    {id:5, name : "HiLo", icon: IoDice,  route: "hilo", isAtive: false, img:"https://img2.nanogames.io/game/image/d64c5ee5-68c0-4d7e-bf8d-0be925f378b1.png" },
    {id:2, name : "Classic Dice", icon: IoDice,  route: "classic-dice", isAtive: false, img: "https://img2.nanogames.io/game/image/0aa80aca-75d1-4fff-b8c9-1d67f1498373.png" },
    {id:6, name : "Diamonds", icon: IoDice,  route: "diamonds", isAtive: false, img: "https://img2.nanogames.io/game/image/42026a73-a033-4a57-bb1c-7e09fd2ea30f.png" },
    {id:7, name : "Mines", icon: IoDice,  route: "mines", isAtive: false, img: "https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png" },
]


</script>
<div class="app">
<!-- <div class="slideing-image">
    <div class="slideing-image-container">
        <swiper-container class="mySwiper"  navigation="true" space-between="30"
        centered-slides="true" slides-per-view="1" autoplay-delay="4500"
           loop='true' autoplay-disable-on-interaction="false">
            <swiper-slide>
                <div class="img-slides-contain">
                    <div class="img-slides">
                        <img src="https://img2.nanogames.io/banner/40/b2/cb/164300069674127.png" alt="">
                    </div>
                    <div class="img-slides">
                        <img src="https://static.nanogames.io/assets/lottery.cb45faf6.png" alt="">
                    </div>
                    <div class="img-slides">
                        <img src="https://static.nanogames.io/assets/lottery.cb45faf6.png" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide> 
                <div class="img-slides-contain">
                    <div class="img-slides">
                        <img src="https://img2.nanogames.io/banner/40/b2/cb/164300069674127.png" alt="">
                    </div>
                    <div class="img-slides">
                        <img src="https://static.nanogames.io/assets/lottery.cb45faf6.png" alt="">
                    </div>
                    <div class="img-slides">
                        <img src="https://static.nanogames.io/assets/lottery.cb45faf6.png" alt="">
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</div> -->

<div class="bc-section">
    <div class="bc-container">
        <div class="bc-text-top">
            <div class="bc-text-top-container">
                <h4>
                    BC <span> IN-HOUSE</span> <br />
                    GAMES
                  </h4>
            </div>
        </div>
        <div class="bc-contents">
            <div class="bc-contents-images">
                {#each games as game (game.id)}
                    <a href={game.route}>
                        <div class="bc-img">
                            <img src={game.img} alt="">
                        </div>
                        <div class="hover-mask">
                            <div class="house-edge">
                                <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M6 6.74105C6 5.19747 7.67443 4.23573 9.00774 5.01349L18.0231 10.2725C19.3461 11.0442 19.3461 12.9558 18.0231 13.7276L9.00774 18.9865C7.67443 19.7643 6 18.8026 6 17.259V6.74105ZM17.0154 12L8 6.74105V17.259L17.0154 12Z" fill="#0D0D0D"></path>
                                    </svg>
                            </div>
                        </div>
                    </a>
                {/each}
            
            </div>
        </div>
    </div>
</div>

</div>

<style>
    .app{
        position: relative;
        width: 100%;
        display: block;
    }
    .bc-section{
        margin: 0 15px;
    }
    .bc-section .bc-container{
        padding: 0;
        margin: 0;
    }

    .bc-container .bc-text-top{
        width: 100%;
        display: flex;
    }
.bc-text-top-container{
    position: relative;
    background-image: linear-gradient(to right, rgb(28, 30, 34), rgb(28, 30, 34));
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 20px 0 0 0;
    display: inline-block;
    white-space: nowrap;
}
.bc-text-top-container h4{
    position: relative;
    height: 100%;
    line-height: 24px;
    left: 0px;
    z-index: 99;
    padding: 12px 2.75rem 0rem 1.25rem;
    font-size: 16px;
    color: rgb(245, 246, 247);
    font-style: italic;
    font-weight: 800;
    font-family: FuturaBold;
    top: 0px;
}
.bc-text-top-container span{
    color: rgb(231, 11, 108);
    font-style: italic;
}
.bc-contents{
    background-color: rgb(28, 30, 34);
    padding: 12px 0.75rem 1.4375rem;
    border-top-right-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
}
.bc-contents-images{
    grid-column: 1 / 3;
    position: relative;
    user-select: none;
}
.bc-contents-images a{
    width: 100%;
    padding-top: 100%;
    position: relative;
    display: block;
    border-radius: 1.25rem;
    overflow: hidden;
    transform: translateZ(0px);
}
.bc-img{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    background: rgb(49, 52, 60);
}
.hover-mask{
    position: absolute;
    transition: all 0.3s linear 0s;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 0.75rem;
    opacity: 0;
}
.house-edge{
    color: rgb(245, 246, 247);
    text-align: right;
    padding: 0.625rem 0.875rem 0px 0px;
}
    swiper-container {
      width: 1040px;
      height: 200px;
    }

    swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    swiper-slide img {
      display: block;
      width: 100px;
      height: 100%;
      object-fit: cover;
    }
</style>