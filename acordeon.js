var div_none = document.querySelectorAll('.week_schedule_xs')
 for ( var i= 1; i < div_none.length; i++){
 	div_none[i].style.display = 'none'

 }
  var Parag = document.querySelectorAll('.into_menu_xs>h3');
  	for (var i = 0; i < Parag.length; i++) {
  		Parag[i].addEventListener('click',function(e){
      //console.log('bnmvn',e.target.parentElement)
      let li = e.target.parentElement;
      div = li.querySelector('.week_schedule_xs')
    	  var div_none = document.querySelectorAll('.week_schedule_xs')
   for ( var i= 0; i < div_none.length; i++){
 	div_none[i].style.display = 'none'

 }


       div.style.display = 'block'
  });
  	}
 


 var elems, makeActive;


elems = document.querySelectorAll('.into_menu_xs');

makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');

    this.classList.add('active');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('click', makeActive);