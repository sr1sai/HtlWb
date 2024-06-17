<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <link rel="stylesheet" href="./global.css" />
    <link rel="stylesheet" href="./menu.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Comic Sans MS:wght@400&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Copse:wght@400&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Delius Unicase:wght@700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Dhyana:wght@700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=David Libre:wght@400&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Droid Sans:wght@400&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inria Sans:wght@700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=DM Sans:wght@700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Josefin Sans:wght@700&display=swap"
    />
  </head>
  <body>
    <div class="menu1">
      <div class="video1"></div>
      <div class="menu-card">
        <div class="appetizer-list-wrapper">
          <div class="appetizer-list">
            <div class="appetizer-list-child"></div>
            <div class="menu-item">
              <div class="menu-item-child"></div>
              <div class="menu-item-item"></div>
              <b class="description">Description</b>
              <b class="item-1">Item 1</b>
              <b class="price">Price</b>
            </div>
            <div class="menu-item1">
              <div class="menu-item-child"></div>
              <div class="menu-item-item"></div>
              <b class="description">Description</b>
              <b class="item-1">Item 1</b>
              <b class="price">Price</b>
            </div>
            <div class="menu-item2">
              <div class="menu-item-child"></div>
              <div class="menu-item-item"></div>
              <b class="description">Description</b>
              <b class="item-1">Item 1</b>
              <b class="price">Price</b>
            </div>
            <div class="menu-item3">
              <div class="menu-item-child"></div>
              <div class="menu-item-item"></div>
              <b class="description">Description</b>
              <b class="item-1">Item 1</b>
              <b class="price">Price</b>
            </div>
          </div>
        </div>
        <div class="menu-nav">
          <div class="menu-nav-child"></div>
          <div class="menu-tab">
            <div class="menu-tab-child"></div>
            <b class="appetizers">Appetizers</b>
          </div>
          <div class="menu-tab1">
            <div class="menu-tab-item"></div>
            <b class="main-course">Main Course</b>
          </div>
          <div class="menu-tab2">
            <div class="menu-tab-item"></div>
            <b class="desserts">Desserts</b>
          </div>
          <div class="menu-tab3">
            <div class="menu-tab-item"></div>
            <b class="drinks">Drinks</b>
          </div>
        </div>
        <img class="menu-card-child" alt="" src="./public/line-1.svg" />
      </div>
      <div class="header-footer1">
        <img class="footer-icon1" alt="" src="./public/footer.svg" />

        <div class="header2">
          <div class="header3"></div>
          <img class="logo-icon1" alt="" src="./public/logo@2x.png" />
        </div>
      </div>
      <div class="menu-nav-bar">
        <div class="menu-nav-bar-child"></div>
        <div class="nav-bar-parent4" id="groupContainer">
          <div class="nav-bar6"></div>
          <b class="special-offers1">Special Offers</b>
        </div>
        <div class="nav-bar-parent5">
          <div class="nav-bar7"></div>
          <b class="news-letter1">News Letter</b>
        </div>
        <div class="nav-bar-parent6">
          <div class="nav-bar8"></div>
          <b class="about1">About</b>
        </div>
        <div class="nav-bar-parent7" id="groupContainer3">
          <div class="nav-bar8"></div>
          <b class="about1">Log out</b>
        </div>
        <div class="nav-bar-parent8" id="groupContainer4">
          <div class="nav-bar8"></div>
          <b class="about1">Order</b>
        </div>
        <div class="nav-bar-parent9">
          <div class="nav-bar11"></div>
          <b class="about1">Menu</b>
        </div>
      </div>
      <img class="slider-icon" alt="" src="./public/slider.svg" />
    </div>

    <script>
      var groupContainer = document.getElementById("groupContainer");
      if (groupContainer) {
        groupContainer.addEventListener("click", function (e) {
          // Please sync "special_offers" to the project
        });
      }
      
      var groupContainer3 = document.getElementById("groupContainer3");
      if (groupContainer3) {
        groupContainer3.addEventListener("click", function (e) {
          // Please sync "index" to the project
        });
      }
      
      var groupContainer4 = document.getElementById("groupContainer4");
      if (groupContainer4) {
        groupContainer4.addEventListener("click", function (e) {
          // Please sync "Order" to the project
        });
      }
      </script>
  </body>
</html>
