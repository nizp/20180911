(function(){

    /*
        2个参数，获取
            第一个参数:元素
            第二个参数:
                字符串 -> 获取
                对象 -> 批量设置

        let int = 20;

        width,height,paddingTop,marginTop,fontSize

    */
    let mytools = (function(){
        function css() { //arguments  [0]元素  [2]获取的样式
            let ele = document.querySelectorAll(arguments[0]);
            let toS = Object.prototype.toString;
            /*
                整数|小数
                下面的正则是匹配，设置的值是不是数字 + 单位的(px,rem,em,%,pt) 
            */
            let dw = /^-?((\d+)|((\d+)?\.\d+))(px|rem|em|%|pt)$/;  //0.5px
            let yd = /^width|height|fontSize|marginTop|paddingTop|left|top$/;//..
            if(arguments.length === 2){
                //批量设置
                if(toS.call(arguments[1]) === '[object Object]'){
                    //批量设置
                    /*
                        循环每一个元素，批量设置

                        先看有没有带单位，有带单位直接设置

                        没有单位，是不是约定好的，是就带px，否直接设置

                        是不是数字 + 单位的(px,rem,em,%,pt) 

                    */
                    for(let i=0;i<ele.length;i++){
                        for(let attr in arguments[1]){
                            if(dw.test(arguments[1][attr])){
                                ele[i].style[attr] = arguments[1][attr];
                            }else{
                                /*
                                    看看是不是约定好的样式（因为约定好的是要带px单位的）

                                    否则直接设置
                                */
                                
                                if(yd.test(attr)){
                                    ele[i].style[attr] = arguments[1][attr] + 'px';
                                }else{
                                    ele[i].style[attr] = arguments[1][attr];
                                }
                            }
                        }
                    }
                }else if(toS.call(arguments[1]) === '[object String]'){
                    //获取
                    return parseFloat(getComputedStyle(ele[0])[arguments[1]]);
                }
            }else if(arguments.length === 3){
                //三个参数，就是设置
                for(let i=0;i<ele.length;i++){
                    if(dw.test(arguments[2])){
                        ele[i].style[arguments[1]] = arguments[2];
                    }else{
                        if(yd.test(arguments[1])){
                            ele[i].style[arguments[1]] = arguments[2] + 'px';
                        }else{
                            ele[i].style[arguments[1]] = arguments[2];
                        }
                    }
                }
            }
        }
        return {
            css
        }
    })();

    window.mytools = mytools;

})();