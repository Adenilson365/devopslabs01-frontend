// Importa os produtos e a função de renderização
import ProductManager from "./modules/ProductManager.js";
import config from "./config/apiConfig.js";

const productManager = new ProductManager(
    `${config.baseUrl}/teste`,
    "product-list"
  );

  // Função para carregar e renderizar produtos
  async function loadAndRenderProducts() {
    await productManager.loadAndRenderProducts();
  }
  
  
  // Chama a função ao carregar a página
  document.addEventListener("DOMContentLoaded", loadAndRenderProducts());