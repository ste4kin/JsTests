var movie1 = {
	title: "plan 9",
	genre: "cult classic",
	rating: 5,
	showtimes: ["3pm", "7pm", "11pm"]
};

var movie2 = {
	title: "forbidden planet",
	genre: "classic sci-fi",
	rating: 3,
	showtimes: ["5:00pm", "9:00pm"]
};

function getNextShowing(movie) {
	var now = new Date().getTime();
	
	for (var i = 0; i<movie.showtimes.length; i++) {
		var showtime = getTimeFromString(movie.showtimes[i]);
		if ((showtime - now) > 0) {
			return "Next showing of " + movie.title + " is " + movie.showtimes[i]);
		}
	}
	return null;
}

function getTimeFromString(timeString) {
  var theTime = new Date();
  var time = timeString.match(/(\d+) (?::(\d\d))?\s*(p?)/);
  theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
  theTime.setMinutes( parseInt(time[2]) || 0 );
  return theTime.getTime();
}

var nextShowing = getNextShowing(movie1);
alert(nextShowing);
nextShowing = getNextShowing(movie2);
alert(nextShowing);
