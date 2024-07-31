const section = document.querySelector('section');
const inputBtn = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const totalDisplay = document.querySelector('.totalValue');
let allProducts = [];
let totalSum = 0;
let j =0;


searchBtn.addEventListener('click', () => {
    let value = inputBtn.value.trim().toLowerCase();
    filterProducts(value);
});

inputBtn.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        let value = inputBtn.value.trim().toLowerCase();
        filterProducts(value);
    }
});


function renderContent(product) {
    const box = document.createElement('div');
    box.classList.add('box', 'active');

    const images = document.createElement('div');
    images.classList.add('images');
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = '';
    img.classList.add('image');
    images.appendChild(img);

    const content = document.createElement('div');
    content.classList.add('content');
    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = product.title;
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = product.description;
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${product.price}`;
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(price);

    box.appendChild(images);
    box.appendChild(content);

    section.appendChild(box);

    totalSum += product.price;
}

function filterProducts(search) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    totalSum = 0;

    allProducts
        .filter(product => {
            const titleMatch = product.title.toLowerCase().includes(search);
            const priceMatch = !isNaN(parseFloat(search)) && product.price.toString().includes(search);
            return titleMatch || priceMatch;
        })
        .forEach(product => {
            renderContent(product);
            console.log(totalSum);
            totalSum += product.price;
        });
    
        totalSum/=2;
    updateTotal();
}



function updateTotal() {
    totalDisplay.textContent = `$${totalSum.toFixed(2)}`;
}

function typeWriter(){
   let speed =100; 
   let text = 'Search for any Product you want!'; 
   if (j < text.length) {
       inputBtn.placeholder += text[j];
        j++;
        setTimeout(typeWriter, speed);
  }
}   
setInterval(typeWriter,5000)


fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(products => {
        console.log(products);
        allProducts = products;
        products.forEach(product => {
            renderContent(product);
      });
     updateTotal();
    })
    .catch(error => console.error('Error fetching products:', error));





    