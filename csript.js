// Function to navigate to a category
function navigateTo(category) {
    document.getElementById('app').classList.add('hidden'); // Hide the main page
    document.getElementById(category).classList.remove('hidden'); // Show the selected category
  }
  
  // Function to go back to the home page
  function goBack() {
    const pages = document.querySelectorAll('.category-page');
    pages.forEach(page => page.classList.add('hidden')); // Hide all category pages
    document.getElementById('app').classList.remove('hidden'); // Show the main page
  }