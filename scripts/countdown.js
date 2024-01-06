(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
        wedding = new Date(2024, 2, 9, 18, 30, 0); // Año, mes (0-indexado), día, hora, minuto, segundo
    //end
    
    const countDown = wedding.getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "Es hoy!!!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
  }());
  