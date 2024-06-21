const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = {};
  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  console.log('Form Data:', formValues);

  alert('Thank you. The form information has been received');
});