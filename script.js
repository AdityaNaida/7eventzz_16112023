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



// let image_slider = document.querySelector(`.product__image__slide`);

// document.querySelector(`.scrollRight`).addEventListener(`click`,()=>{
//   image_slider.scrollLeft += 700
// })

// document.querySelector(`.scrollLeft`).addEventListener(`click`,()=>{
//     image_slider.scrollLeft -= 700
//   })

// function scrollToElement(elementId) {
//   const element = document.getElementById(elementId);
//   if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//   }
// }


//Product Page Btns
let Inclusion_Btn = document.querySelector(`#Inclusion__Btn`);
let Faqs_Btn = document.querySelector(`#Faqs__Btn`);
let Cancellation_Btn = document.querySelector(`#Cacellation__Btn`);

Faqs_Btn.addEventListener(`click`,()=>{
    document.querySelector(`.inclusion__text`).style.display = `none`
    document.querySelector(`.cancellation__policy__text`).style.display = `none`
    document.querySelector(`.faqs__text`).style.display = `block`

    Faqs_Btn.style.background = `var(--website-theme)`;
    Faqs_Btn.style.border = `none`;
    Faqs_Btn.style.color = `var(--white)`;

    Inclusion_Btn.style.background = `transparent`;
    Inclusion_Btn.style.border = `1px solid var(--black)`;
    Inclusion_Btn.style.color = `var(--black)`;

    
    Cancellation_Btn.style.background = `transparent`;
    Cancellation_Btn.style.border = `1px solid var(--black)`;
    Cancellation_Btn.style.color = `var(--black)`;
})

Cancellation_Btn.addEventListener(`click`,()=>{
    document.querySelector(`.inclusion__text`).style.display = `none`;
    document.querySelector(`.cancellation__policy__text`).style.display = `block`;
    document.querySelector(`.faqs__text`).style.display = `none`;

    Cancellation_Btn.style.background = `var(--website-theme)`;
    Cancellation_Btn.style.border = `none`;
    Cancellation_Btn.style.color = `var(--white)`;

    Inclusion_Btn.style.background = `transparent`;
    Inclusion_Btn.style.border = `1px solid var(--black)`;
    Inclusion_Btn.style.color = `var(--black)`;

    
    Faqs_Btn.style.background = `transparent`;
    Faqs_Btn.style.border = `1px solid var(--black)`;
    Faqs_Btn.style.color = `var(--black)`;
})

Inclusion_Btn.addEventListener(`click`,()=>{
    document.querySelector(`.inclusion__text`).style.display = `block`;
    document.querySelector(`.cancellation__policy__text`).style.display = `none`;
    document.querySelector(`.faqs__text`).style.display = `none`;

    Inclusion_Btn.style.background = `var(--website-theme)`;
    Inclusion_Btn.style.border = `none`;
    Inclusion_Btn.style.color = `var(--white)`;

    Cancellation_Btn.style.background = `transparent`;
    Cancellation_Btn.style.border = `1px solid var(--black)`;
    Cancellation_Btn.style.color = `var(--black)`;

    
    Faqs_Btn.style.background = `transparent`;
    Faqs_Btn.style.border = `1px solid var(--black)`;
    Faqs_Btn.style.color = `var(--black)`;
})


  //Calender
  const bookNowButton = document.getElementById("bookNowButton");
  const bookNowButton2 = document.getElementById("bookNowButton2");
  const calendarContainer = document.getElementById("calendar-container");
  const calendarBody = document.getElementById("calendarBody");
  const timeSlots = document.getElementById("timeSlots");
  const currentMonthLabel = document.getElementById("currentMonthLabel");
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  bookNowButton.addEventListener("click", () => {
    generateCalendar(currentYear, currentMonth);
    calendarContainer.style.display = "block";
  });
  bookNowButton2.addEventListener("click", () => {
    generateCalendar(currentYear, currentMonth);
    calendarContainer.style.display = "block";
  });
   function closeCalender(){
    calendarContainer.style.display = `none`;
   
   }

   function closeTimeSlot(){
    timeSlots.style.display = `none`;
   }


  function generateCalendar(year, month) {
    calendarBody.innerHTML = "";
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");
        const day = i * 7 + j - firstDay + 1;

        if (day > 0 && day <= daysInMonth) {
          cell.textContent = day;
          cell.classList.add("selectable-date");
        }

        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
    }

    addDateClickListeners();
    currentMonthLabel.textContent = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
    }).format(new Date(year, month, 1));
  }

  function addDateClickListeners() {
    const dateCells = document.querySelectorAll(".selectable-date");

    dateCells.forEach((cell,i) => {
      cell.addEventListener("click", () => {
        var selectedDate = new Date(
          currentYear,
          currentMonth,
          parseInt(cell.textContent)
        );
        console.log(selectedDate);
        cell.style.background= `var(--website-theme)`;
        cell.style.color= `var(--white)`;

        const next_time_slot = document.querySelector(`#next_time_slot`);
        next_time_slot.addEventListener(`click`,()=>{
          document.querySelector(`#timeSlots h3`).innerHTML = `Available Time Slots for ${selectedDate.toDateString()}`
          timeSlots.style.display = `flex`;
          document.querySelectorAll(`#timeSlots > button`).forEach((elem)=>{
            elem.style.background = `var(--white)`;
            elem.style.color = `var(--black)`;
          })
          calendarContainer.style.display = "none";

        });



      });
    });

   
  }
  function previousCalender(){
    calendarContainer.style.display = `block`;
    const dateCells = document.querySelectorAll(".selectable-date");
    dateCells.forEach((cell, i)=>{
      cell.style.background = `var(--white)`;
      cell.style.color = `var(--black)`;
    })
    timeSlots.style.display = `none`;
  }

  function bookTimeSlot(timeSlot) {
    // alert(`You have booked a slot for ${timeSlot}`);
    document.querySelector(`#add__on`).style.display = `block`;
    // document.querySelector(`.price__details`).innerHTML = `Booking for ${timeSlot}`;
    let base_price = document.querySelector(`.price`).innerHTML ;
    document.querySelector(`.base__item__price`).innerHTML = base_price;
    document.querySelector(`.total__price`).innerHTML = base_price;
    document.querySelector(`.phone`).style.display = `none`;
  }

  const prevMonthBtn = document.getElementById("prevMonthBtn");
  const nextMonthBtn = document.getElementById("nextMonthBtn");

  prevMonthBtn.addEventListener("click", () => {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    generateCalendar(currentYear, currentMonth);
  });

  nextMonthBtn.addEventListener("click", () => {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    generateCalendar(currentYear, currentMonth);
  });

  let time_slot__buttons = document.querySelectorAll(`#timeSlots > button`)
  time_slot__buttons.forEach((elem, i)=>{
   elem.addEventListener(`click`,()=>{
    elem.style.background = `var(--website-theme)`
    elem.style.color = `var(--white)`
   })
  })



  //Add on buttons filter
  document.querySelector(`#all_add_ons`).addEventListener(`click`,()=>{
    filterProducts2("add__on__products")
  })
  document.querySelector(`#rose_pastle`).addEventListener(`click`,()=>{
    filterProducts2("rose")
  })
  document.querySelector(`#add_cake`).addEventListener(`click`,()=>{
    filterProducts2("cake")
  })
  document.querySelector(`#rose_bouquets`).addEventListener(`click`,()=>{
    filterProducts2("bouquet")
  })
  document.querySelector(`#foil_ballons`).addEventListener(`click`,()=>{
    filterProducts2("foli_balloon")
  })
  document.querySelector(`#kids_theme_balloon`).addEventListener(`click`,()=>{
    filterProducts2("kids_teme_balloon")
  })
  document.querySelector(`#extra__balloon`).addEventListener(`click`,()=>{
    filterProducts2("extra_balloon")
  })
  document.querySelector(`#occasion_foils`).addEventListener(`click`,()=>{
    filterProducts2("occasion_foils")
  })
  document.querySelector(`#more_add`).addEventListener(`click`,()=>{
    filterProducts2("more__add")
  })
 

  function filterProducts2(category) {
    // Get all product elements
    var products = document.getElementsByClassName("add__on__products");
  
    // Loop through all products and hide/show based on the selected category
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      if (product.classList.contains(category)) {
        product.style.display = "flex"; // Show the product
      } else {
        product.style.display = "none"; // Hide the product
      }
    }
  }
  
  //Add on increament and decreament of the products
  const increamentBtn = document.querySelectorAll(`.increase_qunatity`);
  const decreamentBtn = document.querySelectorAll(`.decrease_qunatity`);
  const quantityElement = document.querySelectorAll(`.qunatity`);

  //default quantity
  let quantity = 0 ;

  //update the quantity
  function updatequantity(){
  quantityElement.forEach((elem)=>{
    elem.textContent = quantity
  })
  }

  //Event listners for decrease qunatity
  decreamentBtn.forEach(elem =>{
    elem.addEventListener(`click`,()=>{
      if(quantity > 0){
        quantity--;
        updatequantity();
      }
    })
  })

//Eventx listners for increase quantity
increamentBtn.forEach(elem =>{
  elem.addEventListener(`click`,()=>{
    quantity++;
    updatequantity();
  })
})

//intialize for quantity display 
updatequantity()

//cart add coupen





