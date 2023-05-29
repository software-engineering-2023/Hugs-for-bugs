function redirect() {
    var email = document.getElementById("em").value;
    var pass = document.getElementById("pas").value;
  
    if (email === "admin" && pass === "1") {
      window.location.href = "basic admin.html";
    } else if (email === "banker" && pass === "1") {
      window.location.href = "basic banker.html";
    } else if (email === "client" && pass === "1") {
      window.location.href = "basic client.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  