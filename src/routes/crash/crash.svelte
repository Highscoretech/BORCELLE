<div class="game-box sbuagsugwq">
    <div class="game-box-container">
        <div class="house-egde">
            <span>House Edge 1%</span>
        </div>
        <canvas style="background-color: grey;" width="968" height="388"></canvas>
    </div>
</div>

<style>
       .game-box{
        position: relative;
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
        padding: 0px 1.875rem 1.875rem;
    }
    .sbuagsugwq{
        position: relative;
    }
    .game-box-container{
        position: relative;
        margin-top: 1.875rem;
        margin-bottom: 1.25rem;
    }
    .game-box-container > canvas{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        transition: opacity 0.5s ease 0s;
    }
    .game-box-container::after{
        content: "";
        display: block;
        padding-top: 40%;
    }
    .house-egde{
        position: absolute;
        z-index: 2;
        right: 1.5rem;
        bottom: -2.25rem;
        font-weight: 500;
        min-width: 5.75rem;
        padding: 0px 1.125rem;
        border-radius: 1.125rem;
        height: 2.25rem;
        font-size: 12px;
        line-height: 2.25rem;
        color: rgba(153, 164, 176, 0.6);
        background-color: rgba(49, 52, 60, 0.4);
    }
</style>