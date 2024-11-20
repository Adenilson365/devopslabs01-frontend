// Importa os produtos e a função de renderização
import ProductManager from "./modules/ProductManager.js";
import config from "./config/apiConfig.js";

console.log("Base URL:", config.baseUrl);
console.log("Fetching from:", `${config.baseUrl}/teste`);

const productManager = new ProductManager(
  `${config.baseUrl}/teste`,
  "product-list"
);

// Função para carregar e renderizar produtos
async function loadAndRenderProducts() {
  await productManager.loadAndRenderProducts();
}

// Evento para carregar produtos quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  // Carregar produtos quando o botão for clicado
  const loadButton = document.getElementById("load-products-btn");
  if (loadButton) {
    loadButton.addEventListener("click", loadAndRenderProducts);
  }

  console.log("Base URL:", config.baseUrl);
  console.log("Fetching from:", `${config.baseUrl}/teste`);
});