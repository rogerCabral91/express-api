const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
};

const products = {};

function saveProduct(product) {
  if (!product.id) product.id = sequence.id;
  products[product.id] = product;
  return product;
}

module.exports = { saveProduct };
