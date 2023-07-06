$(document).ready(function () {
    $(".product_slider").slick({
      dots: false,
      autoplay: false,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      speed: 1000,
      swipe: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
});

//   socket year
// let socketYear = document.getElementById("socket_year")
// let PresentYear = (year) =>{
//   let date = new Date()
//   let PreYear = date.getFullYear()
//   year.innerText = PreYear
// }
// PresentYear(socketYear)

(() => {

  // select element
  const selectElement = {
    clsDefualtBtn: document.getElementById("cls__defualt_btn"),
    clsCurrency: document.getElementById("cls__currency"),
    clsCurrencyList: document.getElementById("cls__curency_list"),
    currencyValue: document.getElementById("currency__value"),
    // profile
    clsProfileBtn: document.getElementById("cls__profile_btn"),
    clsProfileDrop: document.getElementById("cls__profle_dropdown")
  }

  // select element destructure
  let {clsDefualtBtn, clsCurrency, clsCurrencyList, currencyValue, clsProfileDrop, clsProfileBtn} = selectElement

  // show dropdown

  function dropdownShow(show){
    show.classList.toggle("active")
  }
  
  clsProfileBtn.addEventListener("click", function(){
    dropdownShow(clsProfileDrop);
    clsCurrency.classList.remove("active");
  });

  clsDefualtBtn.addEventListener("click", function(){
    dropdownShow(clsCurrency);
    clsProfileDrop.classList.remove("active");
  });

  // Event listener for clicking on the window
  window.addEventListener("click", function (event) {
    if (
      event.target === clsCurrency ||
      clsCurrency.contains(event.target) ||
      event.target === clsCurrencyList ||
      clsCurrencyList.contains(event.target) ||
      event.target === currencyValue
    ) {
      return;
    }
    clsCurrency.classList.remove("active");
  });

  function removeActiveClass(event,a,b) {
    const target = event.target;
    if (
      !target.closest(`#${a}`) &&
      !target.closest(`#${b}`)
    ) {
      clsProfileDrop.classList.remove("active");
    }
  }

  window.addEventListener("click", function(event){
    removeActiveClass(event, "cls__profle_dropdown" , "cls__profile_btn")
  });

  // currecncy list
  let currencyChild = clsCurrencyList.children
  ;[...currencyChild].forEach((item) =>{
    item.addEventListener("click", (event) => {
      currencyValue.innerText = event.target.textContent
      clsCurrency.classList.remove("active")
    })
  })
  
})()


  
