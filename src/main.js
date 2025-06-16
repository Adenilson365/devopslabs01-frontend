import ProductManager from "./modules/ProductManager.js";
import config from "./config/apiConfig.js";

const productManager = new ProductManager(
  `${config.baseUrl}/products`,
  `${config.baseUrl}/get-image/`
);

document.addEventListener("DOMContentLoaded", () => {
  console.log("Carregando produtos...");
  productManager.loadAndRenderProducts();
});
