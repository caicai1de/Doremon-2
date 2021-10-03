const string_content = `
/*开始绘制哆啦A梦,
先设置一下背景。*/
#html{
    background-color: #ffffe0;
    position: relative;
    bottom: 75px;
    border: 1px solid black;
}
/*接下来是头部绘制
首先是头部轮廓和背景*/
.blue-head{
    width: 304px;
    min-height: 304px;
    background-color: #0092dc;
    border: 2px solid #333333;
    position: relative;
    top: 120px;
    left:50%;
    margin-left: -152px;
    border-radius: 50%;
    overflow: hidden;
}
/*绘制可爱的小脸*/
.face{
    width: 270px;
    height: 216px;
    background-color: white;
    border: 2px solid #333333;
    position: relative;
    top: 90px;
    left:50%;
    margin-left: -135px;
    border-radius: 50%;
}
/*绘制左右眼睛*/
.eyes{
    display: flex;
    width:96px;
    position: absolute;
    left:50%;
    margin-left: -48px;
    justify-content: space-between;
    bottom: 190px;
}
.eyes .eye-left,.eyes .eye-right{
    width:40px;
    height:50px;
    background-color: white;
    border: 2px solid #333333;
    position: relative;
    border-radius: 50%;
}
.eyes .eye-left::before, .eyes .eye-right::before{
    content: '';
    z-index: 2;
    width: 18px;
    height:26px;
    background-color: black;
    border: 2px solid #333333;
    position: absolute;
    top: 16px;
    border-radius: 50%;
}
.eyes .eye-left::before{
    left: 17px;
}
.eyes .eye-right::before{
    left: 3px;
}
/*绘制红色鼻子*/
.nose{
    width: 36px;
    height:36px;
    z-index: 2;
    background-color: #d40019;
    border: 2px solid #333333;
    position: relative;
    left:50%;
    margin-left: -18px;
    border-radius: 50%;
    top:-120px;
}
/*绘制快乐大嘴巴*/
.mouth .line{
    position: relative;
    left:50%;
    margin-left: -4px;
    top:-126px;
    width:108px;
    height:10px;
    z-index: 2;
    border: 2px solid #333333;
    border-bottom: transparent;
    border-left: transparent;
    border-right: transparent;  
    transform: rotate(90deg);
    transform-origin: 0;
}
.mouth .circle{
    position: absolute;
    left:50%;
    margin-left:-85px;
    border-radius: 50%;
    width: 170px;
    height:100px;
    border: 2px solid #333333;
    bottom: 61px;
}
.mouth .circle::before{
    content: '';
    width: 172px;
    height:75px;
    background-color: white;
    position: absolute;
    left:-2px;
    bottom:32px;
}
/*绘制左右共六根胡须*/
.moustache-right,.moustache-right::before,.moustache-right::after,
.moustache-left,.moustache-left::before,.moustache-left::after {
    width: 81px;
    height:1px;
    background-color: #333333;
    border: 1px solid #333333;
}
.moustache-right
{
    position: relative;
    left:50%;
    margin-left: 20px;
    bottom:95px;
}
.moustache-right::before,.moustache-right::after
{
   content:'';
   position: absolute;
   left:50%;
   margin-left: -40px;
   transform-origin: left; 
}
.moustache-right::before{
    bottom:10px;
    transform: rotate(-15deg);   
}
.moustache-right::after{
    bottom:-10px;
    transform: rotate(15deg);
}
.moustache-left
{
    position: absolute;
    right: 50%;
    margin-right: 20px;
    bottom:133px;
}
.moustache-left::before,.moustache-left::after
{
   content:'';
   position: absolute;
   right:50%;
   margin-right: -40px;
   transform-origin: right;
}
.moustache-left::before{
    bottom:-10px;
    transform: rotate(-15deg);
}
.moustache-left::after{
    bottom:10px;
    transform: rotate(15deg);
}
/*头部完事啦，接下来绘制剩余的身体部分。*/
/*首先确定身体轮廓。*/
.D-body{
    width: 392px;
    height: 240px;
    overflow: hidden;
    position: absolute;
    left:50%;
    margin-left: -196px;
    margin-top:87px;
}
/*绘制红色脖子*/
.neck{
    z-index: 2;
    width: 184px;
    height:16px;
    background-color: #dd011c;
    border:2px solid #333333;
    position: relative;
    left:50%;
    margin-left: -92px;
    margin-top:-1px;
    border-radius: 26%;
}
/*绘制能动的小铃铛*/
.ring{
    z-index: 3;
    width: 36px;
    height:36px;
    background-color: #f5cc07;
    border:2px solid #333333;
    position: absolute;
    left:50%;
    margin-left: -18px;
    border-radius: 50%;
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(5deg);
    }
    75%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.ring:hover{
    animation: wave 300ms infinite linear}
.top{
    z-index: 4;
    width: 38px;
    height:6px;
    background-color: #f5cc07;
    border:2px solid #333333;
    position: relative;
    left:50%;
    top:8px;
    margin-left: -19px;
    border-radius: 42%;
}
.middle{
    z-index: 4;
    width: 10px;
    height:10px;
    background-color: #444444;
    position: relative;
    left:50%;
    top:10px;
    margin-left: -5px;
    border-radius: 50%;
}
.down{
    width: 2px;
    height:8px;
    background-color: #333333;
    position: relative;
    left:50%;
    top:10px;
    margin-left: -1px;
}
/*绘制大肚子*/
.abdomen{
    width:210px;
    height:240px;
    background-color: #0092dc;
    border:2px solid #333333;
    position: relative;
    left:50%;
    margin-left: -105px;
    margin-top:-47px;
    border-radius: 42%;
}
/*绘制白肚皮*/
.subAbdomen{
    width:160px;
    height:190px;
    background-color: #fff;
    border:2px solid #333333;
    position: relative;
    left:50%;
    margin-left: -80px;
    margin-top:16px;
    border-radius: 47%;
}
/*绘制百宝袋。并添加惊喜*/
.package{
    width:120px;
    height:70px;
    background-color: #fff;
    border:2px solid #333333;
    position: absolute;
    left:50%;
    margin-left: -60px;
    margin-top:-100px;
    border-radius: 16%;
}
.Text1, .Text2{
    position: relative;
    left:9px;
    display: none;
}

.Text1{
    top:3px;
}
.Text2{
    top:13px;
}
.package:hover .Text1{ 
    display: inline;
}

.candy1,.candy2{
    position: relative;
    top: 50%;
    display: none;
    animation: wave 300ms infinite linear
}
.candy1{
    height:50px;   
    left: 16px;
    margin-top: -25px;

}
.candy2{
    height:150px;
    margin-top: -75px;
}
/*绘制两个脚丫子*/
.foot{
    z-index: 6;
    width:240px;
    height:120px;
    display: flex;
    position: absolute;
    left:50%;
    margin-left: -120px;
    justify-content: space-between;
    bottom: 10px;
}
.footLeft,.footRight
{
    height:120px;
    width:100px;
    border:2px solid #333333;
    background-color: white;
    border-radius: 45%;
}
/*绘制小短胳膊*/
.arm{
    z-index: -1;
    display: flex;
    width:320px;
    position: absolute;
    left:50%;
    margin-left: -160px;
    justify-content: space-between;
    top:14px;
}
.armLeft,.armRight{
    height:50px;
    width: 120px;
    background-color: #0092dc;
    border:2px solid #333333;
    position: relative;
    top:10px;
    border-radius: 24px;
}
.armLeft{
    transform: rotate(-35deg);
}
.armRight{
    transform: rotate(35deg);
}
/*绘制猜拳永远不会赢的手*/
.fist{
    z-index: -2;
    display: flex;
    height: 60px;
    width:358px;
    position: absolute;
    left:50%;
    margin-left: -179px;
    justify-content: space-between;
    top:51px;
}
.fistLeft,.fistRight{
    height:60px;
    width: 60px;
    background-color: white;
    border:2px solid #333333;
    position: relative;
    border-radius: 50%;
}
/*恭喜你见证了一只可爱哆啦A梦的诞生，有惊喜呦。*/
`
let n = 1
let time = 100

// dddd

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
demo.innerText = string_content.substr(0, n)
demo2.innerHTML = string_content.substr(0, n)



const player = {
    run: () => {
        n += 1
        if (n > string_content.length) {
            window.clearInterval(id)
            return
        }
        console.log(n + ':' + string_content.substr(0, n))
        demo.innerText = string_content.substr(0, n)
        demo2.innerHTML = string_content.substr(0, n)
        demo.scrollTop = demo.scrollHeight;
    },

    play: () => {
        return setInterval(player.run, time)
    },
    pause: () => {
        window.clearInterval(id)
    },
    slow: () => {
        player.pause()
        time = 300
        id = player.play()
    },
    normal: () => {
        player.pause()
        time = 100
        id = player.play()
    },
    fast: () => {
        player.pause()
        time = 0
        id = player.play()
    }
}

let id = player.play()
document.querySelector('#btnPause').onclick = () => {
    player.pause()
}
document.querySelector('#btnPlay').onclick = () => {
    id = player.play()
}
document.querySelector('#btnSlow').onclick = player.slow
document.querySelector('#btnNormal').onclick = player.normal
document.querySelector('#btnFast').onclick = player.fast
