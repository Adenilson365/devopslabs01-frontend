class ProductManager {
    constructor(apiEndpoint, baseImageUrl) {
      this.apiEndpoint = apiEndpoint;
      this.baseImageUrl = baseImageUrl;
    }
  
    // Método para buscar produtos da API
    async fetchProducts() {
      console.log(this.apiEndpoint);
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
  
    renderCardProduto(produto) {
      const { baseImageUrl } = this;
      console.log(produto);
      const estrelasHtml = "&#9733;".repeat(produto.stars) + "&#9734;".repeat(5 - produto.stars);
      return `
          <div class="card">
              <div class="top-info">
                  <div class="top-label">TOP OFERTA</div>
                  <div class="stars">${estrelasHtml} (${produto.num_reviews})</div>
              </div>
              <img src="${baseImageUrl+produto.imagem_id}" alt="${produto.name}">
              <div class="info">
                  <div class="nome">${produto.name}</div>
                  <div class="preco">R$ ${parseFloat(produto.price).toFixed(2)}</div>
                  <div class="parcelamento">ou até 10x de R$ ${(parseFloat(produto.price) / 10).toFixed(2)}</div>
                  <a href="#" class="btn-comprar">COMPRAR</a>
              </div>
          </div>
      `;
  }
  
    // Método principal para carregar e renderizar produtos
    async loadAndRenderProducts() {
      const products = await this.fetchProducts();
      console.log(products);
      products.forEach(produto => {
        const categoriaContainer = document.getElementById(produto.category);
        if (categoriaContainer) {
            categoriaContainer.innerHTML += this.renderCardProduto(produto);
        }
    });
    }
  }

  
  // Exporta a classe para uso em outros arquivos
  export default ProductManager;
  