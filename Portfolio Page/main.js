var typed= new Typed(".text", {
    strings:["Frontend Developer", "Web Developer", "Video Editor"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


var splide = new Splide( '.splide' );
    var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );
    
    splide.on( 'mounted move', function () {
      var end  = splide.Components.Controller.getEnd() + 1;
      var rate = Math.min( ( splide.index + 1 ) / end, 1 );
      bar.style.width = String( 100 * rate ) + '%';
    } );
    
    splide.mount();

function downloadCV(){
  window.open("https://drive.google.com/file/d/1XzK7JFjjnNtzC03IyzSQO0i08iwlYnM5/view?usp=sharing");
}