<script>
    	import { Stage, Layer, Text, Rect, Circle, Line } from "svelte-konva";
</script>

<div class="game-box sbuagsugwq">
    <div class="game-box-container">
        <div class="house-egde">
            <span>House Edge 1%</span>
        </div>
        <div class="chart-crash">
            <Stage config={{ width: 518, height: 308 }}>
                <Layer>
                    <Text config={{
                    text: 'Connecting...',
                    fontSize: 25,
                    fill: '#ffff',
                    x: 190,
                    y: 150,
                    }}/>
    
                    <!-- <Line config={{
                      x: 20,
                      y: 200,
                      points: [0, 0, 100, 0, 100, 100],
                      tension: 0.5,
                      closed: true,
                      stroke: 'black',
                      fillLinearGradientStartPoint: { x: -50, y: -50 },
                      fillLinearGradientEndPoint: { x: 50, y: 50 },
                      fillLinearGradientColorStops: [0, 'red', 1, 'yellow']
                    }}/> -->
                </Layer>
              </Stage>
        </div>
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
        padding-top: 0%;
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
    .chart-crash{
        width: 518px; height: 308px;
        border-bottom: 1px solid #ffffff1a;
        border-left: 1px solid #ffffff1a;
    }

</style>