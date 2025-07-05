// Additional security measures for image protection

// Disable right-click context menu globally
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable common keyboard shortcuts for saving images
document.addEventListener('keydown', function(e) {
  // Disable Ctrl+S (Save)
  if (e.ctrlKey && e.keyCode === 83) {
    e.preventDefault();
  }
  
  // Disable Ctrl+A (Select All)
  if (e.ctrlKey && e.keyCode === 65) {
    e.preventDefault();
  }
  
  // Disable Ctrl+U (View Source)
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
  }
  
  // Disable F12 (Developer Tools)
  if (e.keyCode === 123) {
    e.preventDefault();
  }
  
  // Disable Ctrl+Shift+I (Developer Tools)
  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
    e.preventDefault();
  }
  
  // Disable Ctrl+Shift+C (Inspect Element)
  if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
    e.preventDefault();
  }
});

// Disable text selection
document.onselectstart = function() {
  return false;
};

// Disable drag and drop
document.ondragstart = function() {
  return false;
};

// Clear clipboard when user tries to copy
document.addEventListener('copy', function(e) {
  if (e.clipboardData) {
    e.clipboardData.setData('text/plain', '');
  }
  e.preventDefault();
});

// Detect if developer tools are open
let devtools = { open: false };
setInterval(function() {
  if (window.outerHeight - window.innerHeight > 160 || window.outerWidth - window.innerWidth > 160) {
    if (!devtools.open) {
      devtools.open = true;
      console.clear();
      console.log('%cImage protection active', 'color: red; font-size: 20px; font-weight: bold;');
    }
  } else {
    devtools.open = false;
  }
}, 500);
