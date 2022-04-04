let text = document.querySelector('.text')
let style = document.querySelector('.style')
let textstring =`/*一个动态页面，
javascript为您呈现,请您敬请欣赏
画一个太极图吧
这是相关的css代码*/
* {
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  *::after {
    box-sizing: border-box;
  }
  
  *::before {
    box-sizing: border-box;
  }
.text{
    word-break:break-all;
}
.taiji{
    width:200px;
    height:200px;
    position:fixed;
    top:50px;
    right:50px;
  }
  .taiji{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
  }
  .taiji::before{
    position:absolute;
    content:'';
    display:block;
    top:0;
    width:100px;
    height:100px;
    right:50%;
    transform:translateX(50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 100%);
    border-radius:50%;
  }
  .taiji::after{
    position:absolute;
    content:'';
    display:block;
    bottom:0;
    width:100px;
    height:100px;
    right:50%;
    transform:translateX(50%);
   background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%);
    border-radius:50%
  }
/*现在已经有了太极
在电脑上浏览是没问题的，
接下来我们照顾一下手机用户*/
@media(max-width:500px){
    .text{
        height:50vh;
        overflow:auto;
    }
    .wrapper{
        height:50vh;
    }
    .taiji{
        position:relative;
        top:0;
        right:0;
    }
}
`
let i = 0;
let string2 = '';
let show = () =>{
    setTimeout(()=>{
        if(i < textstring.length){
            if(textstring[i] === '\n'){
                string2 += '<br>';
            }else if(textstring[i] === ' '){
                string2 += '&nbsp';
            }else{
                string2 += textstring[i]
            }
            text.innerHTML = string2;
            style.innerHTML = textstring.substring(0,i);
            window.scrollTo(0,999999)
            text.scrollTo(0,999999)
            i = i+1;
            show()
        }else{
            return
        }
    },10)
}
show()