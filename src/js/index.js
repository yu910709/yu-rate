import '../css/app.scss';
import rate from './rate';

document.getElementById('example').innerHTML = (`
    <h1>示例</h1>
    <div class="example-show-sim"></div>
    <div class="example-show"></div>
    <div class="example-rate"></div>
    <div class="example-callback"></div>
    <div class="example-auto"></div>
`);

//简单展示
document.querySelector('.example-show-sim').innerHTML = (`
    <section class="box">
        <h5 class="title">显示简单的最多五星黑白文字星级</h5>
        <div data-rate="3"></div>
    </section>
    <code>
     $('.example-show-sim .box div').text( <br>
       rate({ <br>
           type:'show-sim', <br>
           num:3 <br>
       }) <br>
   )
    </code>
`);

$(document).ready(function () {
   $('.example-show-sim .box div').text(
       rate({
           type:'show-sim',
           num:3
       })
   )
});

//复杂展示
document.querySelector('.example-show').innerHTML = (`
    <section class="box">
        <h5 class="title">显示自定义星级别</h5>
        <div class="show-one"></div>
        <div class="show-two"></div>
    </section>
    <code>
    rate({ <br>
        type:'show', <br>
        num:4, <br>
        all:5, <br>
        color:'#2dbbed', <br>
        target:document.querySelector('.example-show .box div.show-one') <br>
    }); <br> <br>
    rate({ <br>
        type:'show', <br>
        target:document.querySelector('.example-show .box div.show-two') <br>
    })
    </code>
`);

$(document).ready(function () {
    rate({
        type:'show',
        num:1,
        all:5,
        color:'#2dbbed',
        target:document.querySelector('.example-show .box div.show-one')
    });
    rate({
        type:'show',
        target:document.querySelector('.example-show .box div.show-two')
    })
});

//评分
document.querySelector('.example-rate').innerHTML = (`
    <section class="box">
        <h5 class="title">点击评星</h5>
        <div class="rate-one"></div>
        <div class="rate-two"></div>
    </section>
    <code>
    rate({ <br>
        type:'rate', <br>
        num:4, <br>
        all:5, <br>
        target:document.querySelector('.example-rate .box div.rate-one') <br>
    }); <br> <br>
    rate({ <br>
        type:'rate', <br>
        num:3, <br>
        all:5, <br>
        target:document.querySelector('.example-rate .box div.rate-two') <br>
    })
    </code>
`);

$(document).ready(function () {
    rate({
        type:'rate',
        num:4,
        all:5,
        target:document.querySelector('.example-rate .box div.rate-one')
    });
    rate({
        type:'rate',
        num:3,
        all:5,
        target:document.querySelector('.example-rate .box div.rate-two')
    })
});

//回调
document.querySelector('.example-callback').innerHTML = (`
    <section class="box">
        <h5 class="title">回调</h5>
        <div></div>
    </section>
    <code>
   rate({ <br>
        type:'rate', <br>
        num:4, <br>
        target:document.querySelector('.example-callback .box div'), <br>
        callback(){ <br>
           alert(\`回调函数：您点击了$\{document.querySelector('.example-callback .yu-rate').dataset.rate}颗星\`) <br>
        }
    });
    </code>
`);

$(document).ready(function () {
    rate({
        type:'rate',
        num:4,
        target:document.querySelector('.example-callback .box div'),
        callback(){
           alert(`回调函数：您点击了${document.querySelector('.example-callback .yu-rate').dataset.rate}颗星`)
        }
    });
});

//自动展示
document.querySelector('.example-auto').innerHTML = (`
    <section class="box">
        <h5 class="title">自动根据.rate-auto添加评星,根据data-disable的值决定是否可以点击</h5>
        <div class="rate-auto" data-num="0" disabled="disabled"></div>
        <div class="rate-auto" data-num="1" disabled="disabled"></div>
        <p>bug:disable和able的div不能紧邻在一起</p>
        <div class="rate-auto" data-num="2"></div>
        <div class="rate-auto" data-num="3"></div>
    </section>
    <code>
   rate({ <br>
       all:6 <br>
   }); <br>
    </code>
`);

$(document).ready(function () {
   rate({
       all:6
   });
});
