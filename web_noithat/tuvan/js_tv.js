
if(window.innerWidth>=910){
$(document).ready(function(){
  $('.list-project').slick({
      slidesToShow:3,
      prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
      nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-outline"></ion-icon></button>`
  }
  );
});
}

else if(window.innerWidth>=740 && window.innerWidth<=909){
$(document).ready(function(){
  console.log('hello 2');
  $('.list-project').slick({
  
      slidesToShow:2,
      prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
      nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-outline"></ion-icon></button>`
  }
  );
});
}

else if(window.innerWidth<=739){
  console.log('hello 1');
$(document).ready(function(){
  $('.list-project').slick({
      slidesToShow:1,
      prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
      nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-outline"></ion-icon></button>`
  }
  );
});
}





    












