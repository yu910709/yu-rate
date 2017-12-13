## Introduce
rate plugin with star

## Quick to start
Using npm:
```shell
$ npm install --save yu-rate
$ import rate from 'yu-rate'
```

## Example
You can use `npm run dev` to check the example file in node package
1.render with text
```js
   document.getElementById('target-dom').innerText = rate({type:'show-sim', num:3})
```
2.show star of rate
```js
    rate({
            type:'show',
            num:1,
            all:5,
            color:'#2dbbed',
            target:document.querySelector('.example')
        });
```
3.build the rate for click
```js
    rate({
            type:'rate',
            num:3,
            all:5,
            color:'yellow',
            target:document.querySelector('.example'),
            callback(){
                console.log('you clicked the rate')
            }
        })
```
4.auto render with class 'rate-auto' and 'data-*',can it be clicked depends on attribute 'disabled'
```html
    <div class="rate-auto" data-all="6" data-num="1" disabled="disabled"></div>
    <div class="rate-auto" data-all="6" data-num="2""></div>
```




## JSDoc
```jsdoc
 * @param {object[]} option
 * @param {string} [option[].type] - type of rate,accept 'show-sim'(show rate with text,in this case other param should only be 'num') 'show'(show rate only,in this case other param shouldn't have 'callback') 'rate'(rate with click)
 * @param {string} [option[].all = 5] - all score
 * @param {number} [option[].num = 5] -  show how many score
 * @param {object} [option[].target] - target dom to render
 * @param {string} [option[].color] - set the color of star
 * @param {callback} [option[].callback] - the callback will be called when you chick the star of rate
```

## Links
[![github](http://p0kpwl4c8.bkt.clouddn.com/icon/github_c.png!icon_sm "https://github.com/watanabeyu0709/yu-rate")](https://github.com/watanabeyu0709/yu-rate)
[![npm](http://p0kpwl4c8.bkt.clouddn.com/icon/npm_c.png!icon_sm "https://www.npmjs.com/package/yu-rate")](https://www.npmjs.com/package/yu-rate)
