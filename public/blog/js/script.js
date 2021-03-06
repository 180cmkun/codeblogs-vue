jQuery(function(){
  var eMenuBtn = $("#trigger-overlay");
  var eCloseBtn = $(".overlay-close");
  var eMenuModal = $("#menuModal");
  var eMenus = eMenuModal.find("a");
  var searchvisible = 0;

  var openClassName = "open";
  eMenuBtn.click(toggle);
  eCloseBtn.click(toggle);
  for (var i = 0; i < eMenus.length; i++) {
    $(eMenus[i]).click(toggle);
  }

  function toggle() {
    if (eMenuModal.hasClass(openClassName)) {
      eMenuModal.removeClass(openClassName);
    } else {
      eMenuModal.addClass(openClassName);
    }
  }

  $("#search-menu").click(function (e) {
    //This stops the page scrolling to the top on a # link.
    e.preventDefault();

    var val = $("#search-icon");
    if (val.hasClass("ion-ios-search-strong")) {
      val.addClass("ion-ios-close-empty");
      val.removeClass("ion-ios-search-strong");
    } else {
      val.removeClass("ion-ios-close-empty");
      val.addClass("ion-ios-search-strong");
    }

    if (searchvisible === 0) {
      //Search is currently hidden. Slide down and show it.
      $("#search-form").slideDown(200);
      $("#s").focus(); //Set focus on the search input field.
      searchvisible = 1; //Set search visible flag to visible.
    } else {
      //Search is currently showing. Slide it back up and hide it.
      $("#search-form").slideUp(200);
      searchvisible = 0;
    }
  });
});