<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <link rel="stylesheet" href="./global.css" />
    <link rel="stylesheet" href="./login.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comic Sans MS:wght@400&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Copse:wght@400&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Delius Unicase:wght@700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dhyana:wght@700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=David Libre:wght@400&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Droid Sans:wght@400&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inria Sans:wght@700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM Sans:wght@700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin Sans:wght@700&display=swap"/>
  </head>
  <body>
    <div class="login">
      <div class="video2"></div>
      <div class="header-footer2">
        <div class="footer">
          <div class="social-media"></div>
          <div class="logosgoogle-maps-parent">
            <img
              class="logosgoogle-maps-icon"
              alt=""
              src="./public/logosgooglemaps.svg"
              id="logosgoogleMapsIcon"
            />

            <img
              class="logosfacebook-icon"
              alt=""
              src="./public/logosfacebook.svg"
              id="logosfacebookIcon"
            />

            <img
              class="skill-iconsinstagram"
              alt=""
              src="./public/skilliconsinstagram.svg"
              id="skillIconsinstagram"
            />

            <img
              class="pajamastwitter-icon"
              alt=""
              src="./public/pajamastwitter.svg"
              id="pajamastwitterIcon"
            />
          </div>
        </div>
        <div class="header4">
          <div class="header5"></div>
          <img class="logo-icon2" alt="" src="./public/logo@2x.png" />
        </div>
      </div>
      <div class="rectangle-parent11">
        <div class="instance-child"></div>
        <div class="instance-item"></div>
        <div class="rectangle-parent12">
          <div class="group-child28"></div>
          <b class="registration">Registration</b>
        </div>
        <div class="rectangle-parent13">
          <div class="group-child29"></div>
          <b class="login1">Login</b>
        </div>
        <div class="rectangle-parent14">
          <div class="group-child30"></div>
          <b class="user-name">User Name</b>
        </div>
        <div class="rectangle-parent15">
          <div class="group-child31"></div>
          <b class="user-name">Password</b>
        </div>
        <div class="group-parent2">
          <div class="rectangle-parent16">
            <div class="group-child32"></div>
            <b class="reset">Reset</b>
          </div>
          <div class="rectangle-parent17" id="groupContainer1">
            <div class="group-child32"></div>
            <b class="login2">Login</b>
          </div>
        </div>
      </div>
    </div>

    <script>
      var logosgoogleMapsIcon = document.getElementById("logosgoogleMapsIcon");
      if (logosgoogleMapsIcon) {
        logosgoogleMapsIcon.addEventListener("click", function () {
          window.open(
            "https://www.bing.com/maps?q=kaldan+samudhra+palace+location&FORM=HDRSC7&cp=12.646105%7E80.202444&lvl=14.5"
          );
        });
      }
      
      var logosfacebookIcon = document.getElementById("logosfacebookIcon");
      if (logosfacebookIcon) {
        logosfacebookIcon.addEventListener("click", function () {
          window.open("https://www.facebook.com/kaldansamudhra/");
        });
      }
      
      var skillIconsinstagram = document.getElementById("skillIconsinstagram");
      if (skillIconsinstagram) {
        skillIconsinstagram.addEventListener("click", function () {
          window.open("https://www.instagram.com/kaldanhotels/?__coig_restricted=1");
        });
      }
      
      var pajamastwitterIcon = document.getElementById("pajamastwitterIcon");
      if (pajamastwitterIcon) {
        pajamastwitterIcon.addEventListener("click", function () {
          window.open("https://in.linkedin.com/company/kaldan-samudhra-palace");
        });
      }
      
      var groupContainer1 = document.getElementById("groupContainer1");
      if (groupContainer1) {
        groupContainer1.addEventListener("click", function (e) {
          window.location.href = "./home.html";
        });
      }
      </script>
  </body>
</html>
