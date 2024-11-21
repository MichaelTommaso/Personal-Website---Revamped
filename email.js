var form = document.getElementById('form-email')
const formSent = document.getElementById('form-sent')
const resetForm = document.querySelector('.reset-form-button')
    
    async function handleSubmit(event) {
      event.preventDefault();
      
      var status = document.getElementById("submit");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          form.reset()
          emailSent()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.value = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.value = "Sorry! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.value = "Sorry! There was a problem submitting your form"
      });
    }

    function emailSent() {
      form.setAttribute('class', 'form-email-sent')
      formSent.setAttribute('class', 'form-active')
    }

    form.addEventListener("submit", handleSubmit)

    resetForm.addEventListener('click', () => {
      form.setAttribute('class', 'contact-form')
      formSent.setAttribute('class', 'form-hidden')
    })