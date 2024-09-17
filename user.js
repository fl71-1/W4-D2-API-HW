let signupUrl = "https://66e7e6a0b17821a9d9da6efe.mockapi.io/login";

        document.getElementById('form-new').addEventListener('submit', function(event) {
            event.preventDefault();  
        
            const username = document.getElementById('usernew').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('passnew').value;
        
            if (username.length < 5) {
                alert("Username must be more than 5 characters.");
                return;
            }
        
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email.");
                return;
            }
        
            if (password.length < 8) {
                alert("Password must be more than 8 characters.");
                return;
            }
            
        
            fetch(signupUrl, {
                method: 'POST',  
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,  
                    email: email,
                    password: password
                }),
            })
            .then(response => response.json())
            .then(data => {
                alert("Registration completed successfully!");
                window.location.href = 'login.html';
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while trying to register.");
            });
        });