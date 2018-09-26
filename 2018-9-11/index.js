// console.log(1);

document.getElementById('btn1').onclick = fn;

function fn(){
    document.getElementById('box').style.display = 'none';
}
// alert(1); //阻塞代码
// fn();

document.getElementById('btn2').onclick = function(){
    document.getElementById('box').style.display = 'block';
}