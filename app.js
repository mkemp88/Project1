$(document).ready(function () {
    var APIKey = "aac6abfabc9c7c8f834b19f753f7e64d";
    var Units = "imperial";
    var lat;
    var long;

    $("#submit").on("click", function (event) {
        // Avoid Reloading The Page
        event.preventDefault();

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
            $("#dayTitle5").text(moment(response.list[35].dt_txt).format("dddd"));
            var icon = response.list[35].weather["0"].icon;
            $("#weatherCard5").html("<img id='weatherIcon5' src=assets/images/icons/" + icon + ".png >");
            $("#temp5").html(parseInt(response.list[35].main.temp) + " &deg;F");
 
            lat = response.city.coord.lat;
            long = response.city.coord.lon;
            console.log(lat);
            console.log(long);
            check();

        }, function(error) {
            console.log("no");
        });

        function check() {
            console.log(lat);
            console.log(long);
            initMap(lat, long);
        }

        // Map
        function initMap() {  
            $("#mainContent").show();    
            // The location of Uluru
            var uluru = { lat: lat, lng: long};
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), { zoom: 4, center: uluru });
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({ position: uluru, map: map });
        }
    });
}); // Document Ready
