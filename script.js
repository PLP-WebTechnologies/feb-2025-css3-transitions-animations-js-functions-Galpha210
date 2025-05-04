// Apply saved theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
    document.getElementById('themeSelect').value = savedTheme;
  };
  
  // Store theme preference in localStorage
  document.getElementById('themeSelect').addEventListener('change', function() {
    const selectedTheme = this.value;
    document.body.className = selectedTheme;
    localStorage.setItem('theme', selectedTheme);
  });
  
  // Animate button on click
  document.getElementById('animateBtn').addEventListener('click', function() {
    this.classList.add('animated');
  
    // Remove animation class after it ends so it can be re-triggered
    this.addEventListener('animationend', () => {
      this.classList.remove('animated');
    }, { once: true });
  });