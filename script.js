
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    form.addEventListener('submit', function(event) {

        if (!form.checkValidity()) {
            event.preventDefault(); 

        } else {
            alert('Form is valid according to HTML5 attributes!');
        }
    });
})