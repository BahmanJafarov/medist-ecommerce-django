let subscribeForm = document.getElementById('subscription-form')

subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let email = document.getElementById('email').value
    fetch('http://127.0.0.1:8000/en/api/subscribe/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': subscribeForm.csrfmiddlewaretoken.value
        },
        body: JSON.stringify({ 'email': email })
    }).then(
        response => {
            if (response.ok) {
                subscribeForm.innerHTML = `<h2>Succesfully subscribed!</h2>`
            }
            else {
                alert('Error')
            }
        }
    )
})