const scriptURL = 'https://script.google.com/macros/s/AKfycbxVOO_t7yqOtkx2InoCmpyebl8AmsBYoSZgF6ZWbThRPidmjiHD93g3UOej260SOK_v/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! for contacting we will contact you soon." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})