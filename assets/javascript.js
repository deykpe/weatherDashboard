$("#search-button").on("click", function() {
 var searchValue = $("#search-value").val(); 
 
$.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=yourkey&units=imperial",
    dataType: "json",
    success: function(data) {
        console.log(data)
    }
})    
})