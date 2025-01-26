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
  rsvpModal.style.display =  'block';
})

// Close modal (when clicking outside the modal)
document.addEventListener('click', (event) => {
  if (!rsvpModal.contains(event.target) && event.target !== heroCTA) {
    rsvpModal.style.display = 'none'; // Hide the modal
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    rsvpModal.style.display = 'none';
  }
});

const rsvpForm = document.querySelector('#rsvp_form');
rsvpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  // Send the form data via Fetch API to your Cloudflare Worker
  fetch(form.action, {
    method: 'POST',
    body: formData    
    })
    .then(response => {
        if (response.ok) {
            // Hide the form after successful submission
            rsvpForm.style.display = 'none';
            alert("Submit successful.");
        } else {
            alert("There was an issue with the submission.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
    });
});
