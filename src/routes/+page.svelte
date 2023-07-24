<script>

    // import function to register Swiper custom elements
    import { register } from 'swiper/element/bundle';
    // register Swiper custom elements
register();

    

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

    <div class="in-house-games">
        <div class="in-house-games-container">
            <div class="head">
                <h3>BC <span>IN-HOUSE</span> <br> GAMES </h3>
            </div>
            .
        </div>
    </div>

</div>

<style>
    .app{
        position: relative;
        width: 100%;
        display: block;
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