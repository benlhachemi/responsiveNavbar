var burger = document.querySelector('.burger');
var burger1 = document.querySelector('.burger-1');
var burger2 = document.querySelector('.burger-2');
var burger3 = document.querySelector('.burger-3');
var listGroup = document.querySelector('.list-group');
var i=0;
burger.addEventListener('click',function(){
    if(i==0){
        listGroup.style.animation = 'slide 2s ease forwards';
        burger2.style.display ='none';
        burger1.style.animation = 'rotate1 1s ease forwards';
        burger3.style.animation = 'rotate2 1s ease forwards';
        i=1;
    }
    else{
        i=0;
        listGroup.style.animation = 'slide2 2s ease forwards';
        burger1.style.animation = 'rotate3 1s ease forwards';
        burger3.style.animation = 'rotate4 1s ease forwards';
        setTimeout(function(){
            burger2.style.display ='block';
        },100)
    }
});
