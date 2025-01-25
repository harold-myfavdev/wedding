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