
document.addEventListener("DOMContentLoaded", function() {
    function handleFormSubmission(event) {
      event.preventDefault(); 
      var emailInput = document.querySelector('.footer-col input[type="text"]');
      var email = emailInput.value.trim(); 
      if (email !== '') {
        console.log("Email submitted: " + email);
        emailInput.value = '';
        alert('Thank you for subscribing!'); 
      } else {
        alert('Please enter a valid email address.'); 
      }
    }
    
    var form = document.querySelector('.footer-col form');
    form.addEventListener('submit', handleFormSubmission);
    
  });
  