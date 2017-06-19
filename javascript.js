
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


const fade = (function(){
  var icon, text;
    $('.list-group-item').hover(() => {
      icon = $(event.target).find('.list-group-item-icon')
      text = $(event.target).find('.about')
      text.fadeIn(400)
      icon.fadeOut(300)
    }, ()=>{
      text.fadeOut(300)
      icon.fadeIn(400)
      icon = '';
      text = '';
    })
})();

$('.project-img').hover(function(){
  // debugger;
  let id = event.target.id
  $('.project-ul #' + id).toggle(100)
}, function(){
  let id = event.target.id
  $('.project-ul #' + id).toggle(100)
})




