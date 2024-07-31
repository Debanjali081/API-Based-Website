document.addEventListener('DOMContentLoaded', () => {
    const product_grid = document.querySelector("#product_grid");
  
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(products => {
        let productCards = ''; // Create an empty string to store the HTML
  
        products.forEach(data => {
          const productCard = `
            <div class="card">
              <img src="${data.image}" alt="${data.title}">
              <p>${data.title}</p>
              <p>Price: $${data.price}</p>
              <button>Add To Cart</button>
            </div>`;
  
          productCards += productCard; // Add each card to the string
        });
  
        product_grid.innerHTML = productCards; // Finally, set the innerHTML
      })
      .catch(error => console.error('Error fetching products:', error));
  });
  

