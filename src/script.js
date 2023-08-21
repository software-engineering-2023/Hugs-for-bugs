function dd() {
    var email = document.getElementById("em").value;
    var pass = document.getElementById("pas").value;
    // alert(email);
    // alert(pass);
  
    if (email === "admin" && pass === "1") {
      window.location.href = "basic admin.html";
      alert("Welcome Admin");
     
    } else if (email === "banker" && pass === "1") {
      window.location.href = "basic banker.html";
      alert("Welcome Banker");

    } else if (email === "client" && pass === "1") {
      window.location.href = "basic client.html";
      alert("Welcome Client");

    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  function ss() {

    var pass1 = document.getElementById("pas1").value;
    var pass2 = document.getElementById("pas2").value;
    if (pass1!==pass2) {
      
      alert("Password does not match");
     
    }
    else{
      alert("Signup successfully");
    }

  }