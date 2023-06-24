document.addEventListener("DOMContentLoaded", function() {
    var gameSelection = document.getElementById("games-selection");
    var softwareSelection = document.getElementById("software-selection");
    var musicSelection = document.getElementById("music-selection");
    var homeSelection = document.getElementById("home-selection");


    if (gameSelection)
    {
      gameSelection.onmouseover = function() {
      gameSelection.style.color = "#6F936C";
      };
    }

    if (gameSelection)
    {
      gameSelection.onmouseout = function() {
      gameSelection.style.color = "white";
      };
    }

    if (softwareSelection)
    {
      softwareSelection.onmouseover = function() {
      softwareSelection.style.color = "#6C8393";
      };
    }

    if (softwareSelection)
    {
      softwareSelection.onmouseout = function() {
      softwareSelection.style.color = "white";
      };
    }

    if (musicSelection)
    {
      musicSelection.onmouseover = function() {
      musicSelection.style.color = "#906C93";
      };
    }

    if (musicSelection)
    {
      musicSelection.onmouseout = function() {
      musicSelection.style.color = "white";
      };
    }

    if (homeSelection)
    {
      homeSelection.onmouseover = function() {
      homeSelection.style.color = "#937C6C";
      };
    }

    if (homeSelection)
    {
      homeSelection.onmouseout = function() {
      homeSelection.style.color = "white";
      };
    }
  });
