## Introduce  

rate plugin with star

## Quick to start

install:     
`npm install --save yu-rate `    
import:  
`import rate from 'yu-rate' `

## Example

>You can use `npm run dev` to check the example file in node package

    1.render with text
    document.getElementById('target-dom').innerText = rate({type:'show-sim', num:3})
    
    2.show star of rate
    rate({
            type:'show',
            num:1,
            all:5,
            color:'#2dbbed',
            target:document.querySelector('.example')
        });
        
    3.build the rate for click
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
        
    4.auto render with class 'rate-auto' and 'data-*',can it be clicked depends on attribute 'disabled'
    <div class="rate-auto" data-all="6" data-num="1" disabled="disabled"></div>
    <div class="rate-auto" data-all="6" data-num="2""></div>
        
## JSDoc

 * @param {object[]} option
 * @param {string} [option[].type] - type of rate,accept 'show-sim'(show rate with text,in this case other param should only be 'num') 'show'(show rate only,in this case other param shouldn't have 'callback') 'rate'(rate with click)
 * @param {string} [option[].all = 5] - all score
 * @param {number} [option[].num = 5] -  show how many score
 * @param {object} [option[].target] - target dom to render
 * @param {string} [option[].color] - set the color of star
 * @param {callback} [option[].callback] - the callback will be called when you chick the star of rate

## Links

##### github  
see https://github.com/watanabeyu0709/yu-rate
##### npm  
see https://www.npmjs.com/package/yu-rate
