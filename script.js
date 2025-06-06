
fetch('listings.json')
  .then(res => res.json())
  .then(data => {
    renderListings(data);
  });




function renderListings(data) {
  const container = document.getElementById('listing-container');
  const template = document.getElementById('template-card');

  if (!container || !template || data.length === 0) return;


  data.forEach(item => {
    const card = template.cloneNode(true);
    card.style.display = 'flex';
    card.setAttribute('data-id', item.id);
    card.setAttribute('data-shortlisted', 'false');

    // Fill in data
    card.querySelector('.designer-name').innerText = item.name;
    card.querySelector('.designer-desc').innerText = item.description;
    card.querySelector('.designer-projects').innerText = item.projects;
    card.querySelector('.designer-years').innerText = item.years;
    card.querySelector('.designer-price').innerText = item.price;

    const shortlistBtn = card.querySelector('.shortlist-btn');
    shortlistBtn.setAttribute('data-id', item.id);

    // Toggle shortlist functionality
    shortlistBtn.addEventListener('click', () => {
      const isShortlisted = card.dataset.shortlisted === 'true';
      if (isShortlisted) {
        card.dataset.shortlisted = 'false';
        shortlistBtn.classList.remove('active');
      } else {
        card.dataset.shortlisted = 'true';
        shortlistBtn.classList.add('active');
      }
      if (filterActive) applyFilter();
    });

    container.appendChild(card);
  });
}

// Shortlist Filter Logic
let filterActive = false;
const filterBtn = document.getElementById('shortlist-filter');

filterBtn.addEventListener('click', () => {
  filterActive = !filterActive;
  applyFilter();
});

function applyFilter() {
  document.querySelectorAll('.listing').forEach(card => {
    const isShortlisted = card.dataset.shortlisted === 'true';
    card.style.display = (filterActive && !isShortlisted) ? 'none' : 'flex';
  });
}
