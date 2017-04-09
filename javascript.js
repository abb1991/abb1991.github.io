
function showContact() {
  event.preventDefault();
  $('#contact').slideToggle('fast');
}


$("*").each( function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 12) {
        $this.css({ "font-size": "12px" });
    }
});

setInterval( ()=> {
  $(window).scroll( () => {
    if($(window).scrollTop() < 100){
      $('.navbar-top').removeClass('navbar-scrolled');
      $('.navbar-top').addClass('navbar');
    } else {
      $('.navbar-top').removeClass('navbar');
      $('.navbar-top').addClass('navbar-scrolled');
    }
  })
}, 300)

console.log('me')



