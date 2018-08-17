const commands = {
  hoverOnProduct: function () {
    return this
      .waitForElementVisible('@productArea', this.api.globals.smallWait)
      .moveToElement('@productArea', 10, 10);
  },
  clickAddToCart: function () {
    return this
      .waitForElementVisible('@addToCartButton', this.api.globals.smallWait)
      .moveToElement('@addToCartButton', 10, 10)
      .click('@addToCartButton');
  }
};

module.exports = {
  commands: [commands],
  elements: {
    addToCartButton: {
      selector: `.add-to-cart.product__addtocart[data-sku="238426"]`  //захардкоженный СКУ, не надо так
    },
    productArea: {
      selector: `(//div[@class="product__content"])[2]`, //
      locateStrategy: 'xpath'
    }
  }

};