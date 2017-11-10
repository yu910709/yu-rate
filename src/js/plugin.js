/**
 * @description 评分插件
 * @param {object[]} option
 * @param {string} [option[].type] - show 显示用 rate 评分用
 * @param {string} [option[].all] - 分数总数 默认5
 * @param {number} [option[].num] - 分数 显示的时候的分数 评分的时候的默认分数 默认5
 * @param {object} [option[].target] - 目标DOM
 * @param {string} [option[].color] - 自定义color
 * @param {callback} [option[].callback] - 回调函数
 */
import '../css/plugin.scss';


/**
 * @description 参数合理性判断
 * @param {array} config 已有参数
 * @param {array} option 用户参数
 * @returns {boolean}
 */
const isConfig = (config,option) => {
    let allowParams = new Set(config);
    let userParams = new Set();
    for (let i in option) {
        userParams.add(i)
    }
    let difference = new Set([...userParams].filter(x => !allowParams.has(x)));//计算用户的参数和允许参数的差集
    if(difference.size>0){//有未定的参数键值对
        console.warn(`'${Array.from(difference)}' are not allowed , param 'option' can only accept these configuration : '${Array.from(allowParams)}' -- yu-rate`)
    }
};
/**
 * @description 自动标注星级
 */
const autoRate = (option) =>{
    let rateNode = document.querySelectorAll(".rate-auto");
    for(let i = 0;i<rateNode.length;i++){
        let config = {};
        let type = (rateNode[i].getAttribute('disabled')==='disabled')?'show':'rate';
        let all = (rateNode[i].dataset.all)?Number(rateNode[i].dataset.all):5;
        let num = (rateNode[i].dataset.num)?Number(rateNode[i].dataset.num):rateNode[i].dataset.all;
        let color = (rateNode[i].dataset.color)?Number(rateNode[i].dataset.color):'orangered';
        let callback = function () {}
        if(option){
            isConfig(['num','all','color','callback'],option);
            all = (option.all)?option.all:all;
            num = (option.num||(option.num===0))?option.num:num;
            color = (option.color)?option.color:color;
            callback = (option.callback)?option.callback:callback;
        }
        YuRate({
            type,
            num,
            all,
            target:rateNode[i],
            callback,
        })
    }
};
const YuRate = (option) =>{
    if(option){
        switch (option.type){
            case "show-sim":
                isConfig(['type','num'],option);
                return "★★★★★☆☆☆☆☆".slice(5 - option.num, 10 - option.num);
            case "show":
                //参数合理性判断
                isConfig(['type','all','num','target','color'],option);
                //设定默认值
                option.all = (option.all)?option.all:5;
                option.num = (option.num||(option.num===0))?option.num:option.all;
                option.color = (option.color)?option.color:'orangered';
                //创建DOM
                let showNode = document.createElement('ul');
                showNode.classList.add('yu-rate');
                showNode.setAttribute("data-rate",option.num);
                showNode.setAttribute("style",`color:${option.color}`);
                for (let i = 0;i<option.num;i++){
                    showNode.innerHTML+= `<li><i class="iconfont icon-star-f"></i></li>`;
                }
                for (let i = option.num;i<option.all;i++){
                    showNode.innerHTML+= `<li><i class="iconfont icon-star"></i></li>`;
                }
                option.target.appendChild(showNode);
                break;
            case "rate":
                //参数合理性判断
                isConfig(['type','all','num','target','color','callback'],option);
                //设定默认值
                option.all = (option.all)?option.all:5;
                option.num = (option.num||(option.num===0))?option.num:option.all;
                option.color = (option.color)?option.color:'orangered';
                //创建DOM
                let rateNode = document.createElement('ul');
                rateNode.classList.add('yu-rate');
                rateNode.setAttribute("data-rate",option.num);
                rateNode.setAttribute("style",`color:${option.color}`);
                for (let i = 0;i<option.num;i++){
                    rateNode.innerHTML+= `<li data-id="${i}"><i class="iconfont icon-star-f"></i></li>`;
                }
                for (let i = option.num;i<option.all;i++){
                    rateNode.innerHTML+= `<li data-id="${i}"><i class="iconfont icon-star"></i></li>`;
                }
                option.target.appendChild(rateNode);
                let list = option.target.querySelectorAll("ul.yu-rate li");
                for(let i = 0;i<list.length;i++){
                    list[i].onclick = function(){
                        option.num = Number(this.dataset.id*1+1);
                        option.target.innerHTML='';
                        YuRate(option);//重新渲染rate;
                        if(option.callback){
                            option.callback();
                        }
                    }
                }
                break;
            default:
                autoRate(option)
        }
    }else{
        autoRate(option);
    }
};

export default YuRate;
