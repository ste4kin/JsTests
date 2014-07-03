<!DOCTYPE HTML>
<html>
  <head> </head>
  <body>

    <script>

      var movie1 = {
        title: "plan 9",
        genre: "cult classic",
        rating: 5,
        showtimes: ["3:00 pm", "7:00 pm", "11:00 pm"],
      
        getNextShowing: function() {
            var now = new Date().getTime();
            
            for (var i = 0; i<this.showtimes.length; i++) {
                var showtime = getTimeFromString(this.showtimes[i]);
                if ((showtime - now) > 0) {
                    return "Next showing of " + this.title + " is " + this.showtimes[i];
                }
              
            }
            return null;
        }
      };
      
      function getTimeFromString(timeString) {
        var theTime = new Date();
        var time = timeString.match(/(\d+) (?::(\d\d))?\s*(p?)/);
        theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
        theTime.setMinutes( parseInt(time[2]) || 0 );
        return theTime.getTime();
      }
      
      var nextShowing = movie1.getNextShowing();
      alert(nextShowing);
      	
    </script>

  </body>
</html>
