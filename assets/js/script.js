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
var movieCarousel = $('#slider');
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
// cuisine tags
var american = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-american";
var bbq = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-barbecue";
var asian = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-asian";
var italian = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-italian";
var mexican = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-mexican";
var french = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-french";
var southWestern = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-southwestern";
var southern = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-southern";
var indian = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-indian";
var english = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-english";
var chinese = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-chinese";
var medit = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-mediterranean";
var spanish = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-spanish";
var greek = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-greek";
var thai = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-thai";
var cajun = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-cajun)";
var irish = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-irish)";
var german = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-german)";
var morac = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-moroccan)";
var japanese = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-japanese)";
var cuban = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-cuban)";
var hawi = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-hawaiian)";
var swedish = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-swedish)";
var port = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-portuguese)";
var hungarian = "list.recipe.search_based:fq:attribute_s_mv:(cuisine\^cuisine\-hungarian)";

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
})

// Event Listeners
startBtnEl.on('click', startSearch)

//bulma carousel
bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    icons: { previous: "<span style='color:orange;font-weight:800'>&lt;</span>", next: "<span style='color:orange;font-weight:800'>&gt;</span>" }
});

// carousel is hidden
function initLoad(){
    resultPageEl.addClass('hidden')
}
initLoad();