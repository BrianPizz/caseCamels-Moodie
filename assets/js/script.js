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
var dinnerSectionEl = $('#dinner-section');
//function variables
var era;
var language;
var cuisine = "";
var genre = "";

// API Links:
// https://yummly2.p.rapidapi.com/tags/list
// https://ott-details.p.rapidapi.com/advancedsearch?min_imdb=8&max_imdb=10&type=movie&page=1

// API variables
// start/end year variables
var era1 = "start_year=1970&end_year=1990";
var era2 = "start_year=1991&end_year=2010";
var era3 = "start_year=2011&end_year=2023";

//starts search will hide start screen and get genre prompt
function startSearch() {
    startPageEl.addClass('hidden');
    genrePageEl.removeClass('hidden');
};

// when a genre button is clicked that genre is assigned to the genre variable. Then the next prompt is shown.
$('.genreBtn').on('click', function () {
    genre = $(this).attr('id');
    console.log(genre);
    genrePageEl.addClass('hidden');
    yearPageEl.removeClass('hidden');
});

// when an era button is clicked that era value is assigned to the era variable. Then the next prompt is shown
$('.eraBtn').on('click', function () {
    if ($(this).attr('id') === 'era-1') {
        era = era1;
    } else if ($(this).attr('id') === 'era-2') {
        era = era2;
    } else if ($(this).attr('id') === 'era-3') {
        era = era3;
    }
    console.log(era);
    yearPageEl.addClass('hidden');
    languagePageEl.removeClass('hidden');
});

// when a language button is clicked that language is assigned to the language variable. Then the API fetch is called.
$('.langBtn').on('click', function () {
    language = $(this).attr('id');
    console.log(language);
    languagePageEl.addClass('hidden');
    resultPageEl.removeClass('hidden');

    //movie API search
    searchMovie();
})
//API is called with base url + assigned variables
function searchMovie() {
    var movieUrl = 'https://ott-details.p.rapidapi.com/advancedsearch?' + era + '&min_imdb=8&max_imdb=10&genre=' + genre + '&language=' + language + '&type=movie&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '570b2ba17b7msh26f24f9b4da9e51p14fefejsn35d44e5304df',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };
    fetch(movieUrl, options)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            // if no movies are found, exit function
            if (data.results.length === 0) {
                resultPageEl.append($('<p>').addClass('is-size-4 has-text-centered').text("Sorry, no movies found!"))
                return
            }
            //random movie is selected
            var randomMovie = data.results[Math.floor(Math.random() * data.results.length)]
            //only print movie that has an image
            if (randomMovie.imageurl.length > 0) {
                printMovieResults(randomMovie);
            } else {
                var randomMovie = data.results[Math.floor(Math.random() * data.results.length)]
            }
        })
}
// movie results are displayed
function printMovieResults(movie) {
    //a result card is created
    var movieResultCard = $('<div>').addClass('.card mx-3');
    // an image section is created and added to card
    var cardImageSection = $('<div>').addClass('card-image');
    movieResultCard.append(cardImageSection);
    var cardImageContainer = $('<figure>').addClass('image is-4by3');
    cardImageSection.append(cardImageContainer);
    // the movie image is added to the image section
    var movieImage = $('<img>');
    movieImage.attr('src', movie.imageurl[0]);
    cardImageContainer.append(movieImage);
    // card content is added to the card
    movieSectionEl.append(movieResultCard);
    var movieContent = $('<div>').addClass('card-content');
    // movie title is added to card content
    var movietitle = $('<div>').addClass('is-size-4').text(movie.title);
    movieContent.append(movietitle);
    // movie release date is added to card content
    var movieDate = $('<h3>').addClass('is-size-4').text(movie.released);
    movieContent.append(movieDate)
    // movie release date is added to card content
    var movieDescription = $('<p>').addClass('mb-3 is-italic').text(movie.synopsis);
    movieContent.append(movieDescription);
    movieSectionEl.append(movieContent);
    // movie title is added to local 
    localStorage.setItem("movie", movie.title);
    // meal API call
    getDinner();
}

function getDinner() {
    // cuisines are assigned relative to genre selected
    if (genre === 'biography') {
        cuisine = 'german'
    } else if (genre === 'adventure') {
        cuisine = 'moroccan'
    } else if (genre === 'horror') {
        cuisine = 'english'
    } else if (genre === 'action') {
        cuisine = 'american'
    } else if (genre === 'comedy') {
        cuisine = 'asian'
    } else if (genre === 'documentary') {
        cuisine = 'french'
    } else if (genre === 'family') {
        cuisine = 'italian'
    } else if (genre === 'history') {
        cuisine = 'chinese'
    } else if (genre === 'music') {
        cuisine = 'southern'
    } else if (genre === 'romance') {
        cuisine = 'mediterranean'
    } else if (genre === 'short') {
        cuisine = 'greek'
    } else if (genre === 'thriller') {
        cuisine = 'southwestern'
    } else if (genre === 'animation') {
        cuisine = 'japanese'
    } else if (genre === 'crime') {
        cuisine = 'mexican'
    } else if (genre === 'drama') {
        cuisine = 'thai'
    } else if (genre === 'fantasy') {
        cuisine = 'indian'
    } else if (genre === 'mystery') {
        cuisine = 'spanish'
    } else if (genre === 'sci-fi') {
        cuisine = 'cajun'
    } else if (genre === 'war') {
        cuisine = 'hawaiian'
    } else if (genre === 'sport') {
        cuisine = 'american'
    } else if (genre === 'western') {
        cuisine = 'american'
    };

    // add API fetch for dinner
    var dinnerUrl = 'https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0&tag=list.recipe.search_based%3Afq%3Aattribute_s_mv%3A(cuisine%5C%5Ecuisine%5C-' + cuisine;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70b2ba17b7msh26f24f9b4da9e51p14fefejsn35d44e5304df',
            'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
    };
    fetch(dinnerUrl, options)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            //random recipe is assigned to print function
            var randomDinner = data.feed[Math.floor(Math.random() * data.feed.length)]
            console.log(randomDinner)
            printDinner(randomDinner);
        })
}
// recipe is displayed
function printDinner(dinner) {
    //add dinner api data to document
    var mealUrl
    // target the correct recipe url
    if (dinner.seo.firebase.noindex) {
        mealUrl = dinner.display.source.sourceRecipeUrl
    } else {
        mealUrl = dinner.seo.firebase.webUrl
    }
    // a link is created and with hold the display card
    var dinnerLink = $('<a>').attr('href', mealUrl).attr('target', '_blank');
    // recipe card is created
    var dinnerCard = $('<div>').addClass('card mx-3');
    // recipe image section created and added to card
    var dinnerImgSection = $('<div>').addClass('card-image');
    dinnerCard.append(dinnerImgSection);
    var dinnerImageContainer = $('<figure>').addClass('image is-4by3');
    dinnerImgSection.append(dinnerImageContainer);
    // recipe image added to image section
    var dinnerImage = $('<img>');
    dinnerImage.attr('src', dinner.display.images[0]);
    dinnerImageContainer.append(dinnerImage);
    // recipe descriotion added to card content
    var dinnerContent = $('<div>').addClass('card-content')
    var dinnerName = $('<h2>').addClass('is-size-3').text(dinner.display.displayName);
    dinnerContent.append(dinnerName);
    // only display description if there is one
    if (dinner.content.description != null) {
        var dinnerDesc = $('<p>').text(dinner.content.description.text);
        dinnerContent.append(dinnerDesc);
    }
    // add card to document
    dinnerCard.append(dinnerContent);
    dinnerLink.append(dinnerCard);
    dinnerSectionEl.append(dinnerLink)
    // locally store recipe name
    localStorage.setItem("dinner", dinner.display.displayName);
}

// Event Listeners
startBtnEl.on('click', startSearch)
//back button refreshes page
$('#back-btn').on('click', function () {
    location.reload();
})

// intial load
function initLoad() {
    resultPageEl.addClass('hidden')
    // Retreive the saved dinner from local storage and set up `h2` to hold result content
    var result = $("#results");
    if (localStorage.getItem("dinner") === null || localStorage.getItem("movie") === null) {
        result.addClass('hidden')
        return
    }
    else {
        var results = $('<h2>').text("   " + localStorage.getItem("dinner") + " and " + localStorage.getItem("movie"));
        result.append(results);
        result.removeClass('hidden')
        $('.results').removeClass('hidden')
    }
}
initLoad();