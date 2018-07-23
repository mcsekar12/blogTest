(function(){
  if (screen.width >= 1199) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".blogDetailBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"transparent"}).addClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
  }
});
}
else if(screen.width >= 768 && screen.width < 1199) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".blogDetailBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"transparent"}).addClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
  }
});
}
// else if (screen.width < 768) {
//     $(window).scroll(function() {
// if ($(this).scrollTop() > 420){  
//     $('.commonHeader').css({"background-color":"#fff","padding-top":"10px","padding-bottom":"10px"});
//     $(".selectSection").css({"position":"static","top":"0%"});
//     $(".portDetail").css({"position":"relative","top":"0"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
//   }
//   else {
//     $('.commonHeader').css({"background-color":"transparent","padding-top":"20px","padding-bottom":"20px"});
//     $(".selectSection").css({"position":"static","top":"0%"});
//     $(".portDetail").css({"position":"static","left":"0%"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//   }
// });
// }
$(window).resize(function() {
  if (screen.width >= 768) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".blogDetailBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"transparent"}).addClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
  }
});
}
else if(screen.width >= 768 && screen.width < 1199) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".blogDetailBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"transparent"}).addClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
  }
});
}
// else if (screen.width < 768) {
//     $(window).scroll(function() {
// if ($(this).scrollTop() > 420){  
//     $('.commonHeader').css({"background-color":"#fff","padding-top":"10px","padding-bottom":"10px"});
//     $(".selectSection").css({"position":"static","top":"0%"});
//     $(".portDetail").css({"position":"relative","top":"0"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
//   }
//   else {
//     $('.commonHeader').css({"background-color":"transparent","padding-top":"20px","padding-bottom":"20px"});
//     $(".selectSection").css({"position":"static","top":"0%"});
//     $(".portDetail").css({"position":"static","left":"0%"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//   }
// });
// }
});




 $(document).ready(function() {
  

//   document.getElementById('shareBtn').onclick = function() {
//   console.log('share');
//   FB.ui({
//     method: 'share',
//     display: 'popup',
//     href: "https://littlebrahma.netlify.com"+"{{site.url}}{{page.url}}",
//   }, function(response){});
// }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1988892508005210',
      xfbml      : true,
      version    : 'v2.9'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
});


 (function($){
  
  /**
   * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
   *
   * @param  {[object]} e           [Mouse event]
   * @param  {[integer]} intWidth   [Popup width defalut 500]
   * @param  {[integer]} intHeight  [Popup height defalut 400]
   * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
   */
  $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
    
    // Prevent default anchor event
    e.preventDefault();
    
    // Set values for window
    intWidth = intWidth || '500';
    intHeight = intHeight || '400';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
  }
  
  /* ================================================== */
  
  $(document).ready(function ($) {
    $('.custom_share').on("click", function(e) {
      $(this).customerPopup(e);
    });
  });
    
}(jQuery));
})();