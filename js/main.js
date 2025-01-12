document.getElementById('rsvpForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    const responseMessage = document.getElementById('responseMessage');
    const YOUR_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwcf2wvXgQwLsG2nwm5iMW4H62nJlho1iXH1WLbWHu_2qacbIWa3cu9pKmbw_4VxA4/exec'
    try {
        const response = await fetch(YOUR_WEB_APP_URL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();

        if (result.status === 'success') {
            responseMessage.textContent = 'RSVP submitted successfully!';
            form.reset();
        } else {
            responseMessage.textContent = 'Something went wrong. Please try again.';
        }
    } catch (error) {
        console.error(error);
        responseMessage.textContent = 'Error submitting the RSVP.';
    }
});