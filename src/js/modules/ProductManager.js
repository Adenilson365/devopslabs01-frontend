class ProductManager {
    constructor(apiEndpoint, targetElementId) {
      this.apiEndpoint = apiEndpoint;
      this.targetElementId = targetElementId;
    }
  
    // Método para buscar produtos da API
    async fetchProducts() {
      try {
        const response = await fetch(this.apiEndpoint);
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.statusText}`);
        }
        const products = await response.json();
        return products;
      } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
      }
    }
  
    // Método para renderizar produtos
    renderProducts(productArray) {
      const productList = document.getElementById(this.targetElementId);
  
      if (!productList) {
        console.error(`Element with ID "${this.targetElementId}" not found.`);
        return;
      }
      console.log(productArray);
      productList.innerHTML = ""; // Limpa os itens existentes
  
      productArray.forEach(product => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <strong>${product.name}</strong>
          <p> ${product.price.toFixed(2)}</p>
        `;
        productList.appendChild(listItem);
      });
    }
  
    // Método principal para carregar e renderizar produtos
    async loadAndRenderProducts() {
      const products = await this.fetchProducts();
      this.renderProducts(products);
      console.log(products);
    }
  }
  
  // Exporta a classe para uso em outros arquivos
  export default ProductManager;
  