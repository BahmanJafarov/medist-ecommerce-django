let loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit', async function (event) {
    event.preventDefault()
    let postData = {
        'email' : loginForm.email.value,
        'password' : loginForm.password.value
    }

    let response = await fetch('http://127.0.0.1:8000/en/auth/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
    
    let responseData = await response.json()
    if (response) {
        localStorage.setItem('token', responseData.access)
    }
})