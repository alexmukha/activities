

$("#run-search").on("click", function(event){
// $("form").submit(function(event){
event.preventDefault();   
console.log("clicked"); 
    // $("#article-section").append("results");
    var monthDay = "0101";
var params = {};
params["api-key"]= "rtv8CmipUMdk5CMdDmwqdtJ6qYmvITrp";
params.q = $("#search-term").val().trim();
var yearStart = $("#start-year").val().trim();
var yearEnd = $("#end-year").val().trim();
params.begin_date= yearStart+monthDay;
params.end_date= yearEnd+monthDay;
params.limit = $("#article-count").val();
var paramsStr = $.param(params);

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"+ paramsStr;
console.log(paramsStr);

$.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        var results = response.response.docs;
        for (var i= 0; i < results.length; i++) {
            // console.log(results[i].pub_date);
            // console.log(results[i].byline.original);
            // console.log(results[i].headline.main);
            // console.log(results[i].web_url);
            // console.log(results[i].snippet);
            $("#article-section").append("<b>Posted:</b> "+results[i].pub_date+"<br>");
            // $("#article-section").append("<b>Written:</b> "+results[i].byline.original+"<br>");
            $("#article-section").append("<b>Written by:</b> "+results[i].byline.person[0].firstname+" "+results[i].byline.person[0].lastname+"<br>");
            $("#article-section").append("<b>Title:</b>"+results[i].headline.main+"<br>");
            $("#article-section").append(results[i].snippet+"<br>");
            $("#article-section").append("<a href='"+results[i].web_url+"'><b>Read more...</b></a><br><p>&nbsp;</p>");
            
    }

    })


})