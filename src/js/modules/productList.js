// Define o array de produtos
const products = [
    { id: 1, name: "Product A", price: 19.99 },
    { id: 2, name: "Product B", price: 29.99 },
    { id: 3, name: "Product C", price: 39.99 },
    { id: 4, name: "Product D", price: 49.99 }
  ];
  
  // Função para renderizar produtos
  function renderProducts(productArray, targetElementId) {
    const productList = document.getElementById(targetElementId);
  
    if (!productList) {
      console.error(`Element with ID "${targetElementId}" not found.`);
      return;
    }
  
    productArray.forEach(product => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${product.name}</strong>
        <p>Price: $${product.price.toFixed(2)}</p>
      `;
      productList.appendChild(listItem);
    });
  }
  
  // Exporta os produtos e a função de renderização
  export { products, renderProducts };
  