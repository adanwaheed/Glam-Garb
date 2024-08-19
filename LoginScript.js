async function login(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passError');

    emailError.innerText = '';
    passwordError.innerText = '';

    // Validate form inputs
    if (!email) {
        emailError.innerText = 'Email is required';
        return false;
    }
    if (!password) {
        passwordError.innerText = 'Password is required';
        return false;
    }

    // Prepare data for API request
    const userData = {
        email: email,
        password: password,
    };

    try {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const result = await response.json();

            // Set cookies
            document.cookie = `user=${JSON.stringify(result.user)}; path=/`;

            alert(result.message);
            // Navigate to the next page
            window.location.href = './home.html';
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login. Please try again.');
    }

    return false; // Prevent default form submission
}

// Ensure the login form calls the login function
document.querySelector('form').addEventListener('submit', login);
