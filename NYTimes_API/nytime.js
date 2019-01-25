

$("#run-search").on("click", function(event){
// $("form").submit(function(event){
event.preventDefault();   
console.log("clicked"); 
    // $("#article-section").append("results");
var params = {};
// params["api-key"]= "b9f91d369ff59547cd47b931d8cbc56b";
// params["api-key"]= "0pGzGJA8JjzemGwdCdQzV1bghEzLU0gM";
params["api-key"]= "rtv8CmipUMdk5CMdDmwqdtJ6qYmvITrp";
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
//   if (pass)
//   return true;
//   else
//   return false;

})