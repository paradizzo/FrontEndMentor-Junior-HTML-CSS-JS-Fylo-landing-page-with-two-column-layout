const form = document.querySelector('#form');
const email = document.querySelector('#email');
const error = document.querySelector('.error-text');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const formBottom = document.querySelector('#form-bottom');
const emailBottom = document.querySelector('#email-banner');
const errorBottom = document.querySelector('.error-text-bottom');

function checkEmailValidity (email) 
{
 if (/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(form.email.value))
  {
    form.classList.add('form-valid-top');
    form.classList.remove('form-invalid-top');
    return (true);
    
  } 
    form.classList.add('form-invalid-top');
    form.classList.remove('form-valid-top');
    return (false)
}
