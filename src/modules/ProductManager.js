export default class ProductManager {
  constructor(productsUrl, imageUrlBase) {
    this.productsUrl = productsUrl;
    this.imageUrlBase = imageUrlBase;
  }

  async loadAndRenderProducts() {
    try {
      const response = await fetch(this.productsUrl);
      const products = await response.json();

      const categories = [
        "computadores",
        "notebooks",
        "perifericos",
        "hardware",
      ];

      categories.forEach((cat) => {
        const container = document.getElementById(cat);
        if (container) {
          container.innerHTML = "";
          products
            .filter((prod) => prod.category === cat)
            .forEach((prod) =>
              container.appendChild(this.createProductCard(prod))
            );
        }
      });
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    }
  }

  createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${this.imageUrlBase}${product.imagem_id}" alt="${
      product.name
    }" class="product-img" />
      <h3>${product.name}</h3>
      <p>Preço: R$ ${Number(product.price).toFixed(2)}</p>
      <p>Estoque: ${product.stock}</p>
      <p>⭐ ${product.stars} (${product.num_reviews} avaliações)</p>
    `;

    return card;
  }
}
