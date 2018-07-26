var ApiKey = "r3Hc8BnsUFDpVkNXlAdnQHhSY3WZWfGx";
$(".Submit").on("click", function (event) {
    $("#restaurant").html("");
    event.preventDefault();
    var city = $(".Area").val();
    console.log(city);
    var QueryUrl = "https://www.mapquestapi.com/search/v2/radius?origin=" + city + "&radius=5&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=" + ApiKey;
    $.ajax({
        url: QueryUrl,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i <= 10; i++) {
            // response.searchResults[i]
            var searchResults = $("<div>");
            searchResults.text(response.searchResults[i].name);
            $("#restaurant").append(searchResults);
        }
    })
});