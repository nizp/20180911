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
        function css() {
            let ele = document.querySelectorAll(arguments[0]);
            let toS = Object.prototype.toString;
            let re = /^width|height|paddingTop|marginTop|fontSize$/
            if(arguments.length === 2){
                if(toS.call(arguments[1])=== '[object Object]'){
                    //批量设置
                    for(let i=0;i<ele.length;i++){ //循环一个或若干元素
                        //循环对象
                        for(let attr in arguments[1]){
                            /*
                                看看是不是约定好的样式
                                    是约定好的样式
                                        当前设置的值有没有带px，如果带了直接设置即可
                                        如果没带，就自动加上px
                            */
                            // 是约定好的样式 
                            if(re.test(attr)){
                                // 是带单位的
                                let str = '' + arguments[1][attr];
                                // console.log(str);
                                // if(str.includes('px')){
                                //     ele[i].style[attr] = arguments[1][attr];
                                // }else{
                                //     ele[i].style[attr] = arguments[1][attr] + 'px';
                                // }
                                ele[i].style[attr] = str.includes('px')?arguments[1][attr]:arguments[1][attr] + 'px';
                                
                            }else{
                                ele[i].style[attr] = arguments[1][attr];
                            }
                        }
                    }
                }else{
                    //获取
                    let val = getComputedStyle(ele[0])[arguments[1]];
                    console.log(val);
                    if(arguments[1] === 'opacity'){
                        return parseFloat(val);
                    }else{
                        return parseInt(val);
                    }
                }
            }else if(arguments.length === 3){
                //直接设置
            }


        }
        return {
            css
        }
    })();

    window.mytools = mytools;

})();