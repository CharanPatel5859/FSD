document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});