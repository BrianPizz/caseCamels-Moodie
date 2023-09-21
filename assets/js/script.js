var startButton = document.getElementById("start")
var genrePage = document.getElementById("genre-page")
var starterPage = document.getElementById("starter-page")


function promptOnePage () {
    starterPage.setAttribute('class', 'hidden')
    genrePage.removeAttribute('class')
}


//addeventlistener to start button on starter page to show prompt 1
startButton.onclick = promptOnePage