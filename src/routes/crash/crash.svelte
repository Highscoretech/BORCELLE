<script>
    	import { Stage, Layer, Text, Rect, Circle, Line } from "svelte-konva";
        import {onMount} from "svelte";
        let count = 200
        let width = 518
        let height = 310


    onMount(()=>{
     let countDown = setInterval(()=>{
        if(count > 0){
            count -= 3
        }else{
            clearInterval(countDown)
        }
        },100)
    })

    let stepTwo = (1.2.toFixed(2))
    let stepThree = (1.30).toFixed(2)
    let stepFour = (1.50).toFixed(2)
    let stepFive = (1.7).toFixed(2)
    let stepSix = (1.8).toFixed(2)



</script>

<div class="game-box sbuagsugwq">
    <div class="game-box-container">
        <div class="house-egde">
            <span>House Edge 1%</span>
        </div>
        <div class="chart-crash">
            <Stage config={{ width: width, height:height }}>
                <Layer>
                    <Rect config={{
                        x: width / 2 - 100,
                        y: 160,
                        width: 200,
                        height: 40,
                        fill: 'grey',
                        cornerRadius: 3,
                      }}
                    />
                    <Rect config={{
                        x: 518 / 2 - 100,
                        y: 160,
                        width: count,
                        height: 40,
                        fill: '#43b309',
                        shadowBlur: 10,
                        cornerRadius: 3,
                      }}
                    />
                    <Text config={{
                        text: '1.00x',
                        fontSize: 50,
                        fill: '#ffff',
                        shadowBlur: 10,
                        x: 200,
                        y: 80,
                        fontStyle: '700',
                        fontFamily: 'Calibri',
                    }}/>
                  
                  <Text config={{
                    text: 'Starting in',
                    fontSize: 23,
                    fill: '#ffff',
                    shadowBlur: 1,
                    x: 210,
                    y: 170,
                    fontStyle: '400',
                    fontFamily: 'Calibri',
                }}/>

    
                    <Line config={{
                      x: 20,
                      y: 0,
                      points: [0, 0, 0, height - 15],
                      tension: 0.5,
                      closed: true,
                      stroke: '#ffffff0e',
                    }}/>
                    <Line config={{
                        x: 20,
                        y: height - 15,
                        points: [0, 0, width - 30, 0],
                        tension: 0.5,
                        closed: true,
                        stroke: '#ffffff0e',
                      }}/>

                    <Rect config={{
                        x: 0,
                        y: 285,
                        width: 35,
                        height: 20,
                        fill: '#ffffff1c',
                        shadowBlur: 10,
                        cornerRadius: 3,
                    }}
                    />
                    <Text config={{
                        text: '1.00x',
                        fontSize: 12,
                        fill: '#ffff',
                        shadowBlur: 10,
                        x: 4,
                        y: 289,
                        fontStyle: '500',
                        fontFamily: 'Calibri',
                    }}/>

            <Rect config={{
                x: 0,
                y: 228,
                width: 40,
                height: 20,
                fill: '#ffffff1c',
                shadowBlur: 10,
                cornerRadius: 3,
            }}
            />
            <Text config={{
                text: (stepTwo) + "x",
                fontSize: 12,
                fill: '#ffff',
                shadowBlur: 10,
                x: 4,
                y: 232,
                fontStyle: '500',
                fontFamily: 'Calibri',
            }}/>

            <Rect config={{
                x: 0,
                y: 171,
                width: 40,
                height: 20,
                fill: '#ffffff1c',
                shadowBlur: 10,
                cornerRadius: 3,
            }}
            />
            <Text config={{
                text: stepThree + "x",
                fontSize: 12,
                fill: '#ffff',
                shadowBlur: 10,
                x: 4,
                y: 175,
                fontStyle: '500',
                fontFamily: 'Calibri',
            }}/>


<Rect config={{
    x: 0,
    y: 114,
    width: 40,
    height: 20,
    fill: '#ffffff1c',
    shadowBlur: 10,
    cornerRadius: 3,
}}
/>
<Text config={{
    text: stepFour + "x",
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 4,
    y: 118,
    fontStyle: '500',
    fontFamily: 'Calibri',
}}/>


<Rect config={{
    x: 0,
    y: 57,
    width: 40,
    height: 20,
    fill: '#ffffff1c',
    shadowBlur: 10,
    cornerRadius: 3,
}}
/>
<Text config={{
    text: stepFive + "x",
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 4,
    y: 61,
    fontStyle: '500',
    fontFamily: 'Calibri',
}}/>

<Rect config={{
    x: 0,
    y: 0,
    width: 40,
    height: 20,
    fill: '#ffffff1c',
    shadowBlur: 10,
    cornerRadius: 3,
}}
/>
        <Text config={{
            text: stepSix + "x",
            fontSize: 12,
            fill: '#ffff',
            shadowBlur: 10,
            x: 4,
            y: 4,
            fontStyle: '500',
            fontFamily: 'Calibri',
        }}/>


        <Text config={{
            text: '2s',
            fontSize: 12,
            fill: '#ffff',
            shadowBlur: 10,
            x: 100,
            y: 299,
            fontStyle: '900',
            fontFamily: 'Calibri',
        }}/>

<Text config={{
    text: '4s',
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 200,
    y: 299,
    fontStyle: '900',
    fontFamily: 'Calibri',
}}/>

<Text config={{
    text: '6s',
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 300,
    y: 299,
    fontStyle: '900',
    fontFamily: 'Calibri',
}}/>

<Text config={{
    text: '8s',
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 400,
    y: 299,
    fontStyle: '900',
    fontFamily: 'Calibri',
}}/>

<Text config={{
    text: 'Total 0s',
    fontSize: 12,
    fill: '#ffff',
    shadowBlur: 10,
    x: 470,
    y: 299,
    fontStyle: '900',
    fontFamily: 'Calibri',
}}/>

<Circle config={{
    x: 40,
    y: 288,
    radius: 8,
    fill: '#fff'
  }}
/>


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
        /* border-bottom: 1px solid #ffffff1c;
        border-left: 1px solid #ffffff09; */
    }

</style>