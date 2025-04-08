window.addEventListener('load', async function (event) {

    let responseCategory = await this.fetch('http://127.0.0.1:8000/en/api/categories/')
    let responseCategoryData = await responseCategory.json()
    let categoryList = this.document.getElementById('category-list')
    for (data of responseCategoryData) {
        categoryList.innerHTML += `
            <option value="${data.id}">${data.title}</option>
        `
    }

    let responseTags = await this.fetch('http://127.0.0.1:8000/en/api/tags/')
    let responseTagsData = await responseTags.json()
    let tagList = this.document.getElementById('tags-list')
    for (data of responseTagsData) {
        tagList.innerHTML += `
            <option value="${data.id}">${data.title}</option>
        `
    }
})

let creationForm = document.getElementById('submission-form')
let token = localStorage.getItem('token')
creationForm.addEventListener('submit', async function (event) {
    event.preventDefault()
    let formData = new FormData(creationForm)
    let response = await fetch('http://127.0.0.1:8000/en/api/products/', {
        method: 'POST',
        headers: {
            'Authorization' : `Bearer ${token}`
        },
        body: formData
    })
})