

function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  initMap();
      //</script>
      //<!--Load the API from the specified URL
      //* The async attribute allows the browser to render the page while the API loads
      //* The key parameter will contain your own API key (which is not needed for this tutorial)
      //* The callback parameter executes the initMap() function
      //-->