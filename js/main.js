/* Set Dynamic Wedding Date */
// Get the current date
const currentDate = new Date();

// Add 30 days to the current date
currentDate.setDate(currentDate.getDate() + 30);

// Define options for date formatting
const options = {
  weekday: 'long',   // Full name of the weekday
  day: '2-digit',    // Day of the month as two digits
  month: 'long',     // Full name of the month
  year: 'numeric',   // Four-digit year
};

// Format the date
const weddingDate = currentDate.toLocaleDateString(undefined, options);
const currentYear = currentDate.getFullYear();
document.querySelector('span.year').innerHTML += `-${currentYear}`;

/* RSVP Modal */

const rsvpModal = document.querySelector('.rsvp-form.modal');
const heroCTA = document.querySelector('.hero_cta');

heroCTA.addEventListener('click', (e) => { 
  console.log(e.target);
  console.log(rsvpModal)  
  rsvpModal.style.display =  'block';
})

// Close modal (when clicking outside the modal)
document.addEventListener('click', (event) => {
  if (!rsvpModal.contains(event.target) && event.target !== heroCTA) {
    rsvpModal.style.display = 'none'; // Hide the modal
    console.log(event.target)
  }
  if (rsvpModal.contains(event.target)){
    console.log(event.target)
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    rsvpModal.style.display = 'none';
  }
});
