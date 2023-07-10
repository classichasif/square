var header = document.getElementsByClassName("cls__main_header")[0];
var sticky = header.offsetTop;


window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


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
  
})();

(() =>{
  const slectCartMenu = {
    clsCartMenu: document.querySelector(".cls__cart_menu"),
    clsCloseBtn: document.querySelector(".cls__close_btn"),
    clsHeaderCart: document.getElementById("cls_header_cart")
  }

  let {clsCartMenu, clsHeaderCart, clsCloseBtn} = slectCartMenu

  clsHeaderCart.addEventListener("click", () =>{
    clsCartMenu.classList.add("activeCardMenu")
  })
  
  clsCloseBtn.addEventListener("click", () =>{
    clsCartMenu.classList.remove("activeCardMenu")
  })

  window.addEventListener("click", (e) => {
    let eventTarget = e.target;
    if (!eventTarget.closest(".cls__cartmenu_content") && !eventTarget.closest("#cls_header_cart")) {
      clsCartMenu.classList.remove("activeCardMenu");
    }
  });
  
})();

// incress decress function

(() =>{

  const selectItem = {
    decressBtn:document.getElementsByClassName("decress__btn"),
    incressBtn:document.getElementsByClassName("incress__btn"),
  }

  let {decressBtn, incressBtn} = selectItem

  ;[...decressBtn].forEach((decressButton, index) => {
    decressButton.addEventListener("click", () =>{
      countValue(false, index)
    })
  });

  ;[...incressBtn].forEach((incressButton, index) => {
    incressButton.addEventListener("click", () =>{
      countValue(true, index)
    })
  });


  function countValue(value, index){
    let sinleInputProduct = document.getElementsByClassName("cls__product_input")[index]
    let productValue = parseFloat(sinleInputProduct.value)
    let storeValue  = 0;

    if(value == true){
      storeValue = productValue + 1
    }

    else if(value == false && productValue > 0){
      storeValue = productValue - 1
    }
    sinleInputProduct.value = storeValue
  }

})();

(function($) {
  var $main_nav = $('#main-nav');
  var $toggle = $('.toggle');

  var defaultData = {
    maxWidth: false,
    customToggle: $toggle,
    navTitle: 'All Categories',
    levelTitles: true,
    pushContent: '#container',
    insertClose: 2,
    closeLevels: false
  };

  // add new items to original nav
  $main_nav.find('li.add').children('a').on('click', function() {
    var $this = $(this);
    var $li = $this.parent();
    var items = eval('(' + $this.attr('data-add') + ')');

    $li.before('<li class="new"><a>'+items[0]+'</a></li>');

    items.shift();

    if (!items.length) {
      $li.remove();
    }
    else {
      $this.attr('data-add', JSON.stringify(items));
    }

    Nav.update(true);
  });

  // call our plugin
  var Nav = $main_nav.hcOffcanvasNav(defaultData);

  // demo settings update

  const update = (settings) => {
    if (Nav.isOpen()) {
      Nav.on('close.once', function() {
        Nav.update(settings);
        Nav.open();
      });

      Nav.close();
    }
    else {
      Nav.update(settings);
    }
  };

  $('.actions').find('a').on('click', function(e) {
    e.preventDefault();

    var $this = $(this).addClass('active');
    var $siblings = $this.parent().siblings().children('a').removeClass('active');
    var settings = eval('(' + $this.data('demo') + ')');

    update(settings);
  });

  $('.actions').find('input').on('change', function() {
    var $this = $(this);
    var settings = eval('(' + $this.data('demo') + ')');

    if ($this.is(':checked')) {
      update(settings);
    }
    else {
      var removeData = {};
      $.each(settings, function(index, value) {
        removeData[index] = false;
      });

      update(removeData);
    }
  });
})(jQuery);

$(document).ready(function (e) {
    $(".cls__banner_wrapper").slick({
      dots: false,
      autoplay: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      speed: 1000,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".slideroffer_arrow")
    });
});

// offer
$(function (e) {
  "use strict";
  e(".cls__category_slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".slidtrending_arrow"),
      responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 766,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
          }
      }
    ]
  })
});