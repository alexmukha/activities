

$("#run-search").on("click", function(){
    // $("#article-section").append("results");
var params = {};
params["api_key"]= "rtv8CmipUMdk5CMdDmwqdtJ6qYmvITrp";
params.q = $("#search-term").val().trim();
// params.begin_date= $("#start-year").val().trim();
// params.end_date= $("#end-year").val().trim();
// params.limit = $("#article-count").val();
var paramsStr = $.param(params);

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"+ paramsStr;
// console.log($("#search-term").val().trim());
//   console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        console.log(response);
        // var results = response.docs;
        // for (var i= 0; i < results.length; i++) {
        // $("#article-section").append(results);
        // }

    })
  

})