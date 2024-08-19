async function signUp(event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;
    const check = document.getElementById('check').checked;

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');
    const pass2Error = document.getElementById('pass2Error');
    const checkError = document.getElementById('checkError');

    // Clear previous error messages
    firstNameError.innerText = '';
    lastNameError.innerText = '';
    emailError.innerText = '';
    passError.innerText = '';
    pass2Error.innerText = '';
    checkError.innerText = '';

    // Regular expressions for validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,12}$/;

    // Validate form inputs
    if (!firstName) {
        firstNameError.innerText = 'First Name is required';
        return false;
    }
    if (!lastName) {
        lastNameError.innerText = 'Last Name is required';
        return false;
    }
    if (!email) {
        emailError.innerText = 'Email is required';
        return false;
    }
    if (!emailRegex.test(email)) {
        emailError.innerText = 'Please enter a valid email address (example@gmail.com)';
        return false;
    }
    if (!pass) {
        passError.innerText = 'Password is required';
        return false;
    }
    if (!passRegex.test(pass)) {
        passError.innerText = 'Password must be 6-12 characters long and include at least one letter, one number, and one special character';
        return false;
    }
    if (pass !== pass2) {
        pass2Error.innerText = 'Passwords do not match';
        return false;
    }
    if (!check) {
        checkError.innerText = 'You must agree to the terms and services';
        return false;
    }

    // Prepare data for API request
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: pass,
        role: 'user' // default role
    };

    try {
        const response = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
            alert(result.message);
            window.location.href = './Log-In (1).html';
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during sign-up. Please try again.');
    }

    return false;
}

// Assuming the form has an id of "signupForm"
document.getElementById('myForm').addEventListener('submit', signUp);
