
document.querySelector('#additional-info-yes').addEventListener('click', function(e){
   var el =  document.querySelector('#form-block-2');
    el.classList.add('display');
        setTimeout(() => {
            el.classList.add('visible');
        }, 1);
});

document.querySelector('#additional-info-no').addEventListener('click', function(e){
    var el =  document.querySelector('#form-block-2');
    el.classList.remove('visible');
        setTimeout(() => {
            el.classList.remove('display');
        }, 500);
});
  
document.querySelector('#additional-info-yes-2').addEventListener('click', function(e){
    var el =  document.querySelector('#form-block-3');
     el.classList.add('display');
         setTimeout(() => {
             el.classList.add('visible');
         }, 1);
 });
 
 document.querySelector('#additional-info-no-2').addEventListener('click', function(e){
     var el =  document.querySelector('#form-block-3');
     el.classList.remove('visible');
         setTimeout(() => {
             el.classList.remove('display');
         }, 500);
 });

 document.querySelector('#additional-info-yes-3').addEventListener('click', function(e){
    var el =  document.querySelector('#form-block-4');
     el.classList.add('display');
         setTimeout(() => {
             el.classList.add('visible');
         }, 1);
 });
 
 document.querySelector('#additional-info-no-3').addEventListener('click', function(e){
     var el =  document.querySelector('#form-block-4');
     el.classList.remove('visible');
         setTimeout(() => {
             el.classList.remove('display');
         }, 500);
 });