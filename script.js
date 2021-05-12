function myFunction() {
    var navbar = document.getElementById("iconnav");
    if (navbar.className === "navbar-menu") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar-menu";
    }
  }