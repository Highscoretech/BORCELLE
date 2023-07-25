<script>
    import Crash from "./crash.svelte";
    import Recent from "./recent.svelte";

</script>

<div class="game-main">
    <div class="game-view">
        <Recent />
        <Crash />
    </div>
    <div id="crash-control" class="game-control">
        <div class="game-control-switch baiiass">
            <button class="is-active">
                <div class="label">Manual</div>
            </button>
            <button class="">
                <div class="label">Advanced</div>
            </button>
        </div>
    </div>
</div>
<style>
    .game-main{
        min-height: auto;
        display: flex;
        flex-direction: column;
        flex: 1 1 0%;
        overflow: hidden;

        position: relative;
        border-radius: 1.25rem;
        background-color: rgb(23, 24, 27);
    }
    .game-view{
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
    }
    #crash-control .game-control-switch{
        display: flex;
        flex: 0 0 auto;
    }
 
    .game-control .game-control-switch{
        width: 3rem;
        flex-direction: column;
        position: relative;
    }
    #crash-control {
        order: 2;
        min-height: 230px;
        margin-top: 1px;
    }
    .game-control{
        display: flex;
    }
    .baiiass{
        display: flex;
        opacity: 1;
    }
    .game-control-switch > button.is-active {
        border-right: 2px solid rgb(67, 179, 9);    
        background-image: linear-gradient(to left, rgba(91, 174, 28, 0.176), rgba(0, 0, 0, 0) 50%);
    }
    .game-control-switch > button {
        position: relative;
    }   
</style>