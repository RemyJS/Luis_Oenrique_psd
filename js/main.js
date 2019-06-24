//ceo carousel
function shift_c(){
  let cb = document.getElementsByName('ceo__b');
  for(let i = 0; i < cb.length; i++){
    if(cb[i].checked)thinkers.style.left = cb[i].dataset.pos;
  }
}