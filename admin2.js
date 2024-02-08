// Get form elements
var loginForm = document.getElementById('loginForm');
var usernameInput = document.getElementById('username');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  var username = usernameInput.value;
  
  // Perform login validation
  if (username === 'mushrum' || 'mushroom') {
    // Successful login
    alert('Login successful!');
    // window.location.href ='http://localhost/adminlogin/index.php'
    // Add your admin page logic here or redirect to the admin page
  } else {
    // Failed login
    alert('Invalid username or password.');
  }
  
  // Clear the form inputs
  usernameInput.value = '';
 
});