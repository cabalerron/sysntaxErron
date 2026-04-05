// ================================
// DARK/LIGHT MODE WITH AUTO LOAD
// ================================
window.addEventListener('DOMContentLoaded', () => {
  // Check if user has a saved preference
  const darkModeSaved = localStorage.getItem('dark-mode') === 'true';

  if (darkModeSaved) {
    document.body.classList.add('dark-mode');
  } else {
    // Default to dark mode if no saved preference
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'true');
  }

  // The toggle button always stays "Settings"
});

// Toggle dark/light mode
function toggleMode() {
  document.body.classList.toggle('dark-mode');

  // Save preference
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDark);
}

// ================================
// SEARCH MODAL FUNCTIONS
// ================================
function openSearchModal() {
  document.getElementById('searchModal').style.display = 'flex';
}

function closeSearchModal() {
  document.getElementById('searchModal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
  const modal = document.getElementById('searchModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

function openGifModal(title, src, description) {
  const modal = document.getElementById('gifModal');
  document.getElementById('gifModalTitle').textContent = title;
  document.getElementById('gifModalImage').src = src;
  document.getElementById('gifModalDescription').textContent = description;

  modal.style.display = 'flex'; // display modal and center it
}

function closeGifModal() {
  document.getElementById('gifModal').style.display = 'none';
}

// click outside modal to close
window.addEventListener('click', (event) => {
  const modal = document.getElementById('gifModal');
  if(event.target === modal) closeGifModal();
});

function searchProjects() {
  const input = document.querySelector('.search-input');
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll('.gif-card');

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase(); // read the data-title
    if (title.includes(filter)) {
      card.style.display = 'flex'; // show card
    } else {
      card.style.display = 'none'; // hide card
    }
  });
}