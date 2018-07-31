$(document).ready(function () {
    var APIKey = "aac6abfabc9c7c8f834b19f753f7e64d";
    var Units = "imperial";
    var lat;
    var long;

// Index HTML
$("#searchButton").on("click", function (event) {
    // Avoid Reloading The Page
    event.preventDefault();
    $("#sitesBody").html("")
    $("#restBody").html("")
    $("#barsBody").html("")
    var city = $("#search").val();
    console.log(city);

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + '&appid=' + APIKey + "&units=" + Units;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // First
        $("#dayTitle1").text(moment(response.list[3].dt_txt).format("dddd"));
        var icon = response.list[3].weather["0"].icon;
        $("#weatherCard1").html("<img id='weatherIcon1' src=assets/images/icons/" + icon + ".png >");
        $("#temp1").html(parseInt(response.list[3].main.temp) + " &deg;F");

        // Second
        $("#dayTitle2").text(moment(response.list[11].dt_txt).format("dddd"));
        var icon = response.list[11].weather["0"].icon;
        $("#weatherCard2").html("<img id='weatherIcon2' src=assets/images/icons/" + icon + ".png >");
        $("#temp2").html(parseInt(response.list[11].main.temp) + " &deg;F");

        // Third
        $("#dayTitle3").text(moment(response.list[19].dt_txt).format("dddd"));
        var icon = response.list[19].weather["0"].icon;
        $("#weatherCard3").html("<img id='weatherIcon3' src=assets/images/icons/" + icon + ".png >");
        $("#temp3").html(parseInt(response.list[19].main.temp) + " &deg;F");
        
         // Fourth
        $("#dayTitle4").text(moment(response.list[27].dt_txt).format("dddd"));
        var icon = response.list[27].weather["0"].icon;
        $("#weatherCard4").html("<img id='weatherIcon4' src=assets/images/icons/" + icon + ".png >");
        $("#temp4").html(parseInt(response.list[27].main.temp) + " &deg;F");

        // Second
        $("#dayTitle5").text(moment(response.list[31].dt_txt).format("dddd"));
        var icon = response.list[31].weather["0"].icon;
        $("#weatherCard5").html("<img id='weatherIcon5' src=assets/images/icons/" + icon + ".png >");
        $("#temp5").html(parseInt(response.list[31].main.temp) + " &deg;F");

        lat = response.city.coord.lat;
        long = response.city.coord.lon;
        console.log(lat);
        console.log(long);
        check();
        $("#loadingScreen").hide();
        // window.location = "./home.html"
        map()
    }, function(error) {
        console.log("no");
    });

    function check() {
        console.log(lat);
        console.log(long);
        initMap(lat, long);
    }
        var ApiKey = "r3Hc8BnsUFDpVkNXlAdnQHhSY3WZWfGx";
        // var city = $(".form-control").val();
        console.log(city);
        function map() {
        var QueryUrl2 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=20&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|999333&outFormat=json&key=" + ApiKey;
        $.ajax({
            url: QueryUrl2,
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i <= 10; i++) {
                // response.searchResults[i]
                $("#sitesBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
            }
        })
        var QueryUrl1 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=5&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=" + ApiKey;
        $.ajax({
            url: QueryUrl1,
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i <= 10; i++) {
                // response.searchResults[i]
                $("#restBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
            }
        })
        var QueryUrl3 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=5&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581301&outFormat=json&key=" + ApiKey;
        $.ajax({
            url: QueryUrl3,
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i <= 10; i++) {
                // response.searchResults[i]
                $("#barsBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
            }
        })
    }});


    $("#searchButtonHome").on("click", function (event) {
        // Avoid Reloading The Page
        event.preventDefault();
        $("#sitesBody").html("")
        $("#restBody").html("")
        $("#barsBody").html("")
        var city = $("#searchFormHome").val();
        console.log(city);

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + '&appid=' + APIKey + "&units=" + Units;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // First
            $("#dayTitle1").text(moment(response.list[3].dt_txt).format("dddd"));
            var icon = response.list[3].weather["0"].icon;
            $("#weatherCard1").html("<img id='weatherIcon1' src=assets/images/icons/" + icon + ".png >");
            $("#temp1").html(parseInt(response.list[3].main.temp) + " &deg;F");

            // Second
            $("#dayTitle2").text(moment(response.list[11].dt_txt).format("dddd"));
            var icon = response.list[11].weather["0"].icon;
            $("#weatherCard2").html("<img id='weatherIcon2' src=assets/images/icons/" + icon + ".png >");
            $("#temp2").html(parseInt(response.list[11].main.temp) + " &deg;F");

            // Third
            $("#dayTitle3").text(moment(response.list[19].dt_txt).format("dddd"));
            var icon = response.list[19].weather["0"].icon;
            $("#weatherCard3").html("<img id='weatherIcon3' src=assets/images/icons/" + icon + ".png >");
            $("#temp3").html(parseInt(response.list[19].main.temp) + " &deg;F");
            
             // Fourth
            $("#dayTitle4").text(moment(response.list[27].dt_txt).format("dddd"));
            var icon = response.list[27].weather["0"].icon;
            $("#weatherCard4").html("<img id='weatherIcon4' src=assets/images/icons/" + icon + ".png >");
            $("#temp4").html(parseInt(response.list[27].main.temp) + " &deg;F");
 
            // Second
            $("#dayTitle5").text(moment(response.list[31].dt_txt).format("dddd"));
            var icon = response.list[31].weather["0"].icon;
            $("#weatherCard5").html("<img id='weatherIcon5' src=assets/images/icons/" + icon + ".png >");
            $("#temp5").html(parseInt(response.list[31].main.temp) + " &deg;F");
 
            lat = response.city.coord.lat;
            long = response.city.coord.lon;
            console.log(lat);
            console.log(long);
            check();
            $("#loadingScreen").hide();
            // window.location = "./home.html"
            map()
        }, function(error) {
            console.log("no");
        });

        function check() {
            console.log(lat);
            console.log(long);
            initMap(lat, long);
        }
            var ApiKey = "r3Hc8BnsUFDpVkNXlAdnQHhSY3WZWfGx";
            // var city = $(".form-control").val();
            console.log(city);
            function map() {
            var QueryUrl2 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=20&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|999333&outFormat=json&key=" + ApiKey;
            $.ajax({
                url: QueryUrl2,
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                for (var i = 0; i <= 10; i++) {
                    // response.searchResults[i]
                    $("#sitesBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
                }
            })
            var QueryUrl1 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=5&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=" + ApiKey;
            $.ajax({
                url: QueryUrl1,
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                for (var i = 0; i <= 10; i++) {
                    // response.searchResults[i]
                    $("#restBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
                }
            })
            var QueryUrl3 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=5&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581301&outFormat=json&key=" + ApiKey;
            $.ajax({
                url: QueryUrl3,
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                for (var i = 0; i <= 10; i++) {
                    // response.searchResults[i]
                    $("#barsBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
                }
            })
        }});
        // Map
        function initMap() {  
            $("#mainContent").show();    
            // The location of Uluru
            var uluru = { lat: lat, lng: long};
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), { zoom: 8, center: uluru });
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({ position: uluru, map: map });
        }
    });
     // Document Ready
