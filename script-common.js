let menuBtn = document.querySelector(`.menu-btn`);

menuBtn.addEventListener(`click`, () => {
document.querySelector(`.navigation-links`).style.transform = `translateX(0%)`;
});

let closeMenuBtn =  document.querySelector(`.bi-x-lg`);
closeMenuBtn.addEventListener(`click`,()=>{
document.querySelector(`.navigation-links`).style.transform = `translateX(-100%)`;
})


//All cities pop up
let current_location__btn = document.querySelector(`.location`);
let current_location__mobile__btn = document.querySelector(`.current-location`);
let current_location__close_btn = document.querySelector(`.bi-x-circle-fill`);
let cities_search = document.querySelector(`.search_city_close_box > input`);
let close_city_search_bar = document.querySelector(`.search_city_close_box > span`);

current_location__btn.addEventListener(`click`,()=>{
    document.querySelector(`.location__popup`).style.display = `flex`;
  })
  current_location__mobile__btn.addEventListener(`click`,()=>{
    document.querySelector(`.location__popup`).style.display = `flex`;
  })
  current_location__close_btn.addEventListener(`click`,()=>{
    document.querySelector(`.location__popup`).style.display = `none`;
  })
  cities_search.addEventListener(`click`,()=>{
    document.querySelector(`.top__cities__box`).style.display = `none`;
    document.querySelector(`.lds-roller`).style.display = `block`
    setTimeout(() => {
    document.querySelector(`.lds-roller`).style.display = `none`;
    }, 2000);
    setTimeout(() => {
    document.querySelector(`.all__cities__list`).style.display = `block`
    }, 2050);
    close_city_search_bar.style.display = `block`;
  })

  close_city_search_bar.addEventListener(`click`,()=>{
    document.querySelector(`.all__cities__list`).style.display = `none`;
    close_city_search_bar.style.display = `none`;
    document.querySelector(`.lds-roller`).style.display = `block`
    setTimeout(() => {
      document.querySelector(`.lds-roller`).style.display = `none`;
      }, 2000);
      setTimeout(() => {
    document.querySelector(`.top__cities__box`).style.display = `block`;
      }, 2050);
  })