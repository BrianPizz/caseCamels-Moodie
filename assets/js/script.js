var startButton = document.getElementById("start")
var genrePage = document.getElementById("genre-page")
var starterPage = document.getElementById("starter-page")


function promptOnePage () {
    starterPage.setAttribute('class', 'hidden')
    genrePage.removeAttribute('class')
}


//addeventlistener to start button on starter page to show prompt 1
startButton.onclick = promptOnePage

//bulma carousel
bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    icons: { previous: "<span style='color:orange;font-weight:800'>&lt;</span>", next: "<span style='color:orange;font-weight:800'>&gt;</span>"}
  });
