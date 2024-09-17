   const username = localStorage.getItem("username");

   if (username) {
       document.getElementById("user-name").innerText = username;
       
   } else {
       alert("You must log in first");
       window.location.href = "login.html";  
   }

   document.getElementById('logout').addEventListener('click', function() {
       localStorage.removeItem("username");  
       window.location.href = "login.html"; 
   });