$(document).ready(function() {
    $("#btn-menu").click(function() {
      $("#mobile-menu").slideToggle("slow")
    })

    $("#lightSlider").lightSlider({
      item: 1,
      loop: true,
      speed: 700,
      slideMove: 1,
      slideEndAnimation: true,
    }); 
})