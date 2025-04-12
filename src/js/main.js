// Importa os produtos e a função de renderização
import ProductManager from "./modules/ProductManager.js";
import config from "./config/apiConfig.js";
import './config/instrumentation.js'







// Inicializa o gerenciador de produtos
const productManager = new ProductManager(
  `${config.baseUrl}/products`,
  `${config.baseUrl}/get-image/`
);

// Função para carregar e renderizar produtos
async function loadAndRenderProducts() {
  await productManager.loadAndRenderProducts();
}

// Evento para carregar produtos quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  // Carregar produtos automaticamente assim que a página for carregada
  loadAndRenderProducts();

  // Carregar produtos quando o botão for clicado
  const loadButton = document.getElementById("load-products-btn");
  if (loadButton) {
    loadButton.addEventListener("click", loadAndRenderProducts);
  }
});
