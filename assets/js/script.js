//document variables
var startPageEl = $('#starter-page');
var startBtnEl = $('#start');
var genrePageEl = $('#genre-page');
var yearPageEl = $('#year-page');
var era1BtnEl = $('#era-1');
var era2BtnEl = $('#era-2');
var era3BtnEl = $('#era-3');
var languagePageEl = $('#language-page');
var resultPageEl = $('#results-page');
var movieSectionEl = $('#movie-section');
var dinnerSectionEl = $('#recipe-link');

//function variables
var genre;
var era;
var language;
var cuisine = "";
var genre = "";

// API Links:
// https://yummly2.p.rapidapi.com/tags/list
// https://ott-details.p.rapidapi.com/advancedsearch?min_imdb=8&max_imdb=10&type=movie&page=1

// API SEARCH PARAMETERS
// start year
// end yearmin_imdb
// max_imdb
// genre
// language
// type
// sort
// page

// API variables
// start/end year variables
var era1 = "start_year=1970&end_year=1990";
var era2 = "start_year=1991&end_year=2010";
var era3 = "start_year=2011&end_year=2023";

var baseUrl = "https:/theapi.com/search?";


//starts search will hide start screen and get genre prompt
function startSearch() {
    startPageEl.addClass('hidden');
    genrePageEl.removeClass('hidden');
};

// when a genre button is clicked that genre is assigned to the genre variable. Then the next prompt is shown.
$('.genreBtn').on('click', function(){
    genre = $(this).attr('id');
    console.log(genre);
    genrePageEl.addClass('hidden');
    yearPageEl.removeClass('hidden');
});

// when an era button is clicked that era value is assigned to the era variable. Then the next prompt is shown
$('.eraBtn').on('click', function(){
    if ($(this).attr('id') === 'era-1'){
        era = era1;
    } else if ($(this).attr('id') ==='era-2'){
        era = era2;
    } else if ($(this).attr('id') ==='era-3'){
        era = era3;
    }
    console.log(era);
    yearPageEl.addClass('hidden');
    languagePageEl.removeClass('hidden');
});

$('.langBtn').on('click', function(){
    language = $(this).attr('id');
    console.log(language);
    languagePageEl.addClass('hidden');
    resultPageEl.removeClass('hidden');

    //movie API search
    searchMovie();
})

function searchMovie(){
    var movieUrl = 'https://ott-details.p.rapidapi.com/advancedsearch?' + era + '&min_imdb=8&max_imdb=10&genre=' + genre + '&language=' + language + '&type=movie&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8ebca9f28cmsh2d3b9f9a6282943p1d53a7jsnf53b2b807ce4',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    }; 
    fetch(movieUrl, options)
    .then(function (respose)) {
        if (Response.ok) {
            return Response.json();
        }
    }




}

function printMovieResults(movie){
    //add movie api call data to document



    getDinner();
}

function getDinner(){
// add API fetch for dinner


}

function printDinner(dinner){
//add dinner api data to document


}

// Event Listeners
startBtnEl.on('click', startSearch)

// intial load
function initLoad(){
    resultPageEl.addClass('hidden')
}
initLoad();