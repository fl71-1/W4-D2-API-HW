let loginUrl = "https://66e7e6a0b17821a9d9da6efe.mockapi.io/login"; 
    
document.getElementById('form-login').addEventListener("submit", function(event) {
    event.preventDefault();  

    let username = document.getElementById("username-login").value;
    let password = document.getElementById("pass-login").value;

    fetch(loginUrl, {
        method: 'GET',  
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);  

        let user = data.find(user => user.username === username && user.password === password);

        if (user) {  

            localStorage.setItem("username", username);
            window.location.href = 'profile.html';  
        } else {
            alert("Failed: The login data is incorrect");  
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while trying to sign in.");
    });
});