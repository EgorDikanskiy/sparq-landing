document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('emailModal');
    const btn = document.getElementById('openModal');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementById('emailForm');

    // Open modal when clicking the button
    btn.onclick = function() {
        modal.style.display = 'block';
    }

    // Close modal when clicking the X
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Handle form submission
    form.onsubmit = async function(e) {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;
        
        try {
            const response = await fetch('https://9000-firebase-studio-1747646529352.cluster-l6vkdperq5ebaqo3qy4ksvoqom.cloudworkstations.dev/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email
                })
            });

            if (response.ok) {
                alert('Спасибо! Мы свяжемся с вами по почте: ' + email);
                modal.style.display = 'none';
                form.reset();
            } else {
                throw new Error('Ошибка при отправке формы');
            }
        } catch (error) {
            alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
            console.error('Error:', error);
        }
    }
}); 