document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...
    
    const form = document.getElementById('userForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        
        // Handle the form data
        console.log('Name:', name);
        console.log('Password:', password);
        console.log('Email:', email);
        
        // You can add code here to send the data to your server
    });
    
    // ...existing code...
});
