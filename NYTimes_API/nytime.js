

$("#run-search").on("click", function(event){
// $("form").submit(function(event){
event.preventDefault();   
console.log("clicked"); 
    // $("#article-section").append("results");
var params = {};
params["api-key"]= "rtv8CmipUMdk5CMdDmwqdtJ6qYmvITrp";
params.q = $("#search-term").val().trim();
// params.begin_date= $("#start-year").val().trim();
// params.end_date= $("#end-year").val().trim();
params.limit = $("#article-count").val();
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
        console.log(response.response);
        // console.log(response.response.docs);
        var results = response.response.docs;
        for (var i= 0; i < results.length; i++) {
            console.log(response.response.docs[i].headline.main);

            $("#article-section").append("<p><b>Posted: </b> "+results[i].pub_date+"<br>");
            $("#article-section").append("<b>Written by:</b> "+results[i].byline.original+"<br>");
            $("#article-section").append("<b>Title: </b><a href='"+results[i].web_url+"'> "+results[i].headline.main+"</a><br>");
            $("#article-section").append(results[i].snippet+"<br></p>");
       
    }

    })


})