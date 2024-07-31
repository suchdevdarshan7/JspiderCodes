let tableBody = document.querySelector('#tbody')
console.log(tableBody)
function renderContent(elements){
    

    const html = 
          ` <tr>
                <td>${elements.id}</td>
                <td>${elements.title}</td>
                <td>${elements.description}</td>
                <td>${elements.images.map(element => {
                    let img1 = document.createElement('img');
                    img1.src = element;
                    return img1.outerHTML;
                }).join('')}</td>
                <td>${elements.price}</td>
        </tr>
        `
    tableBody.innerHTML+= html;
       
}
async function fetchApi(){
    let data = await fetch("https://dummyjson.com/products");
    let value = await data.json();
    console.log(value.products)
    let products = value.products;
    products.map((element)=>{
        renderContent(element);
    })
    console.log(value)

}
fetchApi()