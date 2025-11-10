document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registerForm');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('🎉 Thank you for registering! We will contact you soon.');
      form.reset();
    });
  }
});
