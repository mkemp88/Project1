$(document).ready(function () {
    var APIKey = "aac6abfabc9c7c8f834b19f753f7e64d";
    var Units = "imperial";
    var lat;
    var long;
    var sitesLat = [];
    var sitesLng = [];
    var restLat = [];
    var restLng = [];
    var barLat = [];
    var barLng = [];

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
            $("#dayTitle1").text(moment(response.list[0].dt_txt).format("dddd"));
            var icon = response.list[0].weather["0"].icon;
            $("#weatherCard1").html("<img id='weatherIcon1' src=assets/images/icons/" + icon + ".png >");
            $("#temp1").html(parseInt(response.list[0].main.temp) + " &deg;F");

            // Second
            $("#dayTitle2").text(moment(response.list[6].dt_txt).format("dddd"));
            var icon = response.list[6].weather["0"].icon;
            $("#weatherCard2").html("<img id='weatherIcon2' src=assets/images/icons/" + icon + ".png >");
            $("#temp2").html(parseInt(response.list[6].main.temp) + " &deg;F");

            // Third
            $("#dayTitle3").text(moment(response.list[14].dt_txt).format("dddd"));
            var icon = response.list[14].weather["0"].icon;
            $("#weatherCard3").html("<img id='weatherIcon3' src=assets/images/icons/" + icon + ".png >");
            $("#temp3").html(parseInt(response.list[14].main.temp) + " &deg;F");
            
             // Fourth
            $("#dayTitle4").text(moment(response.list[22].dt_txt).format("dddd"));
            var icon = response.list[22].weather["0"].icon;
            $("#weatherCard4").html("<img id='weatherIcon4' src=assets/images/icons/" + icon + ".png >");
            $("#temp4").html(parseInt(response.list[22].main.temp) + " &deg;F");
 
            // Fifth
            $("#dayTitle5").text(moment(response.list[30].dt_txt).format("dddd"));
            var icon = response.list[30].weather["0"].icon;
            $("#weatherCard5").html("<img id='weatherIcon5' src=assets/images/icons/" + icon + ".png >");
            $("#temp5").html(parseInt(response.list[30].main.temp) + " &deg;F");
 
            lat = response.city.coord.lat;
            long = response.city.coord.lon;
            console.log(lat);
            console.log(long);
            
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
                sitesLat = [];
                sitesLng = [];
                for (var i = 0; i <= 10; i++) {
                    // response.searchResults[i]
                    $("#sitesBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
                    var x = response.searchResults[i].fields.disp_lat;
                    var y = response.searchResults[i].fields.disp_lng;
                    sitesLat.push(x);
                    sitesLng.push(y);
                }
                console.log(sitesLat)
            })
            var QueryUrl1 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=5&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=" + ApiKey;
            $.ajax({
                url: QueryUrl1,
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                restLat = [];
                restLng = [];
                for (var i = 0; i <= 10; i++) {
                    // response.searchResults[i]
                    $("#restBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
                    var x = response.searchResults[i].fields.disp_lat;
                    var y = response.searchResults[i].fields.disp_lng;
                    restLat.push(x);
                    restLng.push(y);
                }
            })
            var QueryUrl3 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=5&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581301&outFormat=json&key=" + ApiKey;
            $.ajax({
                url: QueryUrl3,
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                barLat = [];
                barLng = [];
                for (var i = 0; i <= 10; i++) {
                    // response.searchResults[i]
                    $("#barsBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
                    var x = response.searchResults[i].fields.disp_lat;
                    var y = response.searchResults[i].fields.disp_lng;
                    barLat.push(x);
                    barLng.push(y);
                }
            })
            check();
        }});

    // Home HTML
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
            $("#dayTitle1").text(moment(response.list[0].dt_txt).format("dddd"));
            var icon = response.list[0].weather["0"].icon;
            $("#weatherCard1").html("<img id='weatherIcon1' src=assets/images/icons/" + icon + ".png >");
            $("#temp1").html(parseInt(response.list[0].main.temp) + " &deg;F");

            // Second
            $("#dayTitle2").text(moment(response.list[6].dt_txt).format("dddd"));
            var icon = response.list[6].weather["0"].icon;
            $("#weatherCard2").html("<img id='weatherIcon2' src=assets/images/icons/" + icon + ".png >");
            $("#temp2").html(parseInt(response.list[6].main.temp) + " &deg;F");

            // Third
            $("#dayTitle3").text(moment(response.list[14].dt_txt).format("dddd"));
            var icon = response.list[14].weather["0"].icon;
            $("#weatherCard3").html("<img id='weatherIcon3' src=assets/images/icons/" + icon + ".png >");
            $("#temp3").html(parseInt(response.list[14].main.temp) + " &deg;F");
            
             // Fourth
            $("#dayTitle4").text(moment(response.list[22].dt_txt).format("dddd"));
            var icon = response.list[22].weather["0"].icon;
            $("#weatherCard4").html("<img id='weatherIcon4' src=assets/images/icons/" + icon + ".png >");
            $("#temp4").html(parseInt(response.list[22].main.temp) + " &deg;F");
 
            // Fifth
            $("#dayTitle5").text(moment(response.list[30].dt_txt).format("dddd"));
            var icon = response.list[30].weather["0"].icon;
            $("#weatherCard5").html("<img id='weatherIcon5' src=assets/images/icons/" + icon + ".png >");
            $("#temp5").html(parseInt(response.list[30].main.temp) + " &deg;F");
 
            lat = response.city.coord.lat;
            long = response.city.coord.lon;
            console.log(lat);
            console.log(long);
            
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
                sitesLat = [];
                sitesLng = [];
                for (var i = 0; i <= 10; i++) {
                    // response.searchResults[i]
                    $("#sitesBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
                    var x = response.searchResults[i].fields.disp_lat;
                    var y = response.searchResults[i].fields.disp_lng;
                    sitesLat.push(x);
                    sitesLng.push(y);
                }
                console.log(sitesLat)
            })
            var QueryUrl1 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=5&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=" + ApiKey;
            $.ajax({
                url: QueryUrl1,
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                restLat = [];
                restLng = [];
                for (var i = 0; i <= 10; i++) {
                    // response.searchResults[i]
                    $("#restBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
                    var x = response.searchResults[i].fields.disp_lat;
                    var y = response.searchResults[i].fields.disp_lng;
                    restLat.push(x);
                    restLng.push(y);
                }
            })
            var QueryUrl3 = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=5&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581301&outFormat=json&key=" + ApiKey;
            $.ajax({
                url: QueryUrl3,
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                barLat = [];
                barLng = [];
                for (var i = 0; i <= 10; i++) {
                    // response.searchResults[i]
                    $("#barsBody").append("<tr><td>" + response.searchResults[i].name + "</td></tr>");
                    var x = response.searchResults[i].fields.disp_lat;
                    var y = response.searchResults[i].fields.disp_lng;
                    barLat.push(x);
                    barLng.push(y);
                }
            })
            check();
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

            $("#sites").on("click", function() {
                for (var i = 0; i <= sitesLat.length; i++) {
                    var position = {lat: sitesLat[i], lng: sitesLng[i]}
                    marker = new google.maps.Marker({ position: position, map: map });
                }
            });
            $("#restaurants").on("click", function() {
                for (var i = 0; i <= restLat.length; i++) {
                    var position = {lat: restLat[i], lng: restLng[i]}
                    marker = new google.maps.Marker({ position: position, map: map });
                }
            });
            $("#bars").on("click", function() {
                for (var i = 0; i <= barLat.length; i++) {
                    var position = {lat: barLat[i], lng: barLng[i]}
                    marker = new google.maps.Marker({ position: position, map: map });
                }
            });
        }
    }); // Document Ready
