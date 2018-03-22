//SETUP VARIABLES
//==================================================
var authKey = "1dc8bc18c9864c3b8e93544befb678dd";

var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// URL Base
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

// Variable to Track the number of articles
var articleCounter = 0;

//FUNCTIONS
//==================================================

function runQuery(numArticles, queryURL) {

    // AJAX Function
    $.ajax({ url: queryURL, method: "GET" })
        .done(function (NYTData) {
            console.log(NYTData);
        })

}

//MAIN PROCESSES
//==================================================

$('#searchBtn').on('click', function () {
    runQuery(10, 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=1dc8bc18c9864c3b8e93544befb678dd&q=Obama')
    return false;

})

// 1. retriece user inputs and convert to variables
// 2. use these variables to run an ajax call to the NYT
// 3. break down the NYT object into useable fields
// 4. dynamically generate the content for html 

// 5. Dealing with "edge cases" -- bugs or situations that are not intuitive