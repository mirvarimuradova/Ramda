 const menu = document.querySelector('.menu');
 const nav =document.querySelector('.nav_bar');
 let s=1;
 
 menu.addEventListener('click', ()=>{
    if(s%2==1){
        nav.style.display = 'block';
        s+=1;
    }
    else if(s%2==0){
        nav.style.display = 'none';
        s+=1;
    }
 })