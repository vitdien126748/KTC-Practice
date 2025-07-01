
const form = document.getElementById('registrationForm');

function validateTextInput(el, errorId, minLength, message) {
  el.addEventListener('input', () => {
    if (el.value.trim() === '') {
      showError(el, errorId, 'This field is required');
    } else if (el.value.trim().length < minLength) {
      showError(el, errorId, message);
    } else clearFieldError(el, errorId);
  });
}

validateTextInput(fullName, 'fullNameError', 3, 'At least 3 characters');

email.addEventListener('input', () => {
  if (email.value.trim() === '') {
    showError(email, 'emailError', 'This field is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError(email, 'emailError', 'Invalid email format');
  } else clearFieldError(email, 'emailError');
});

password.addEventListener('input', () => {
  if (password.value.trim() === '') {
    showError(password, 'passwordError', 'This field is required');
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)) {
    showError(password, 'passwordError', 'Min 8 chars, letters & numbers');
  } else clearFieldError(password, 'passwordError');
});

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value.trim() === '') {
    showError(confirmPassword, 'confirmPasswordError', 'This field is required');
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, 'confirmPasswordError', 'Passwords do not match');
  } else clearFieldError(confirmPassword, 'confirmPasswordError');
});

phone.addEventListener('input', () => {
  if (phone.value.trim() === '') {
    showError(phone, 'phoneError', 'This field is required');
  } else if (!/^\d{10,}$/.test(phone.value)) {
    showError(phone, 'phoneError', 'Digits only, min 10 digits');
  } else clearFieldError(phone, 'phoneError');
});

document.getElementsByName('gender').forEach(input => {
  input.addEventListener('change', () => {
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      genderError.textContent = 'Please select gender';
    } else genderError.textContent = '';
  });
});

dob.addEventListener('change', () => {
  if (dob.value === '') {
    showError(dob, 'dobError', 'This field is required');
  } else {
    const age = new Date().getFullYear() - new Date(dob.value).getFullYear();
    if (age < 18) {
      showError(dob, 'dobError', 'You must be at least 18');
    } else clearFieldError(dob, 'dobError');
  }
});

country.addEventListener('change', () => {
  if (!country.value) {
    showError(country, 'countryError', 'Please select a country');
  } else clearFieldError(country, 'countryError');
});

document.querySelectorAll('input[name="hobbies"]').forEach(box => {
  box.addEventListener('change', () => {
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    hobbiesError.textContent = hobbies.length === 0 ? 'Select at least one hobby' : '';
  });
});

picture.addEventListener('change', () => {
  if (picture.files.length > 0) {
    const ext = picture.files[0].name.split('.').pop().toLowerCase();
    if (!['jpg','jpeg','png'].includes(ext)) {
      showError(picture, 'pictureError', 'Only .jpg/.jpeg/.png');
    } else clearFieldError(picture, 'pictureError');
  } else pictureError.textContent = '';
});

bio.addEventListener('input', () => {
  if (bio.value.length > 300) {
    showError(bio, 'bioError', 'Max 300 characters');
  } else clearFieldError(bio, 'bioError');
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelectorAll('input, select, textarea').forEach(el => el.dispatchEvent(new Event('input')));
  document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(el => el.dispatchEvent(new Event('change')));
  const errors = document.querySelectorAll('.error');
  const hasError = Array.from(errors).some(err => err.classList.contains('error') && err.tagName !== 'SPAN');
  if (!hasError && Array.from(errors).every(span => span.textContent === '')) {
    alert("Registration successful!");
    form.reset();
  }
});

function showError(el, errorId, msg) {
  el.classList.add('error');
  document.getElementById(errorId).textContent = msg;
}
function clearFieldError(el, errorId) {
  el.classList.remove('error');
  document.getElementById(errorId).textContent = '';
}
