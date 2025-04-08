window.addEventListener('load', async function (event) {
    let response = await this.fetch('http://127.0.0.1:8000/en/api/products/')
    let responseData = await response.json()
    let product_list = this.document.getElementById('product-list')
    for (data of responseData) {
        product_list.innerHTML += `
        <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${data.cover_image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.description}</p>
                        <a href="http://127.0.0.1:8000/en/product/${data.slug}/" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `
    }
})