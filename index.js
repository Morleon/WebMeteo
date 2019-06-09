$(document).ready(function () {
	$('#validate').on('click', function () {
		var input = $("#inputCity").val();

		$.ajax({
			url : "http://api.openweathermap.org/data/2.5/weather?q="+input+"&units=metric&APPID=ee07e2bf337034f905cde0bdedae3db8",
			method : 'GET',
			dataType: "JSON",
			success : function(data) {
				var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

				$('#meteo').html(data.weather[0].main + "<img src='" + icon + " \'/>");
				$('#city').html(data.name);
				$('#degree').html(data.main.temp);

        $('#pression').html(data.main.pressure);
				$('#windSpeed').html(data.wind.speed);
				$('#degreeMax').html(data.main.temp_max);
				$('#degreeMin').html(data.main.temp_min);
				$('#sunrise').html(data.sys.sunrise);
				$('#sunset').html(data.sys.sunset);
			}
		});
	});
});

function displayDetail() {
	var details = document.getElementById("details");
  if (details.style.display === "none") {
      details.style.display = "block";
  } else {
      details.style.display = "none";
	}
}
