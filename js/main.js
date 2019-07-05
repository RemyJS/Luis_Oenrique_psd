//ceo carousel
function shift_c(){
  let cb = document.getElementsByName('ceo__b');
  for(let i = 0; i < cb.length; i++){
    if(cb[i].checked)thinkers.style.left = cb[i].dataset.pos;
  }
}

s_but.onclick = function(e){
  e.preventDefault();
  pm1.classList.remove('hidden');
  p__name1.innerText = name1.value||'user name';
  p__mail1.innerText = mail1.value||"Example1992@gmail.com";
  p__text1.innerText = hello__message.value;
  function hide (){
    // pm1.classList.remove('visible');
    pm1.classList.add('hidden');
    // p__name1.innerText = '';
    // p__mail1.innerText = '';
    // p__text1.innerText = '';
  }
  setTimeout(hide,2000);
}
close1.onclick = function(e){
  e.preventDefault();
  pm1.classList.add('hidden');
}