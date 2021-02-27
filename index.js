'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnShowModal=document.querySelectorAll('.show-modal');
const btnCloseModal=document.querySelector('.close-modal');



for(let i=0;i<Number(btnShowModal.length);i++)
{
    btnShowModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');


    });

}
btnCloseModal.addEventListener('click',function close()
{
     modal.classList.add('hidden');
     overlay.classList.add('hidden');
});
document.addEventListener('keydown',function(e){
    if(e.key=='Escape')
    {
        if(!modal.classList.contains('hidden'))
        {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');  
        }
    }
});
