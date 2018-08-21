const commands = {
  checkIfNumberOfProductsIs20: function () {
    return this
      .waitForElementVisible('@nameOfFoundProducts', this.api.globals.smallWait)
      .api.elements('xpath', '//span[@class="product__link-desc"]', function (result) {
        this.assert.equal(result.value.length, 20);
      })
  },

  checkIfPaginationIsPresent: function () {
    return this
      .api.useCss()
      .moveToElement('.pagination', 10, 10)
      .waitForElementVisible('.pagination', this.api.globals.smallWait);
  },

  checkIfAllProductsHaveImages: function () {
    return this
      .waitForElementVisible('@productImage', this.api.globals.smallWait)
      .api.perform(function() {
        this.api.elements('xpath', '//span[@class="product__link-desc"]', function (result) {
          for (let i = 1; i <= result.value.length; i++) {
            this
              .useXpath()
              .waitForElementVisible(`(//img[@class="product__image"])[${i}]`, this.globals.smallWait)
              .moveToElement(`(//img[@class="product__image"])[${i}]`,10,10)
              .assert.attributeContains(`(//img[@class="product__image"])[${i}]`, 'src', '/upload/products/');
          }
        });
      })
  },

};

module.exports = {
  commands: [commands],
  elements: {
    nameOfFoundProducts: {
      selector: '//span[@class="product__link-desc"]',
      locateStrategy: 'xpath'
    },
    paginationBlock: {
      selector: '.pagination',
      locateStrategy: 'css'
    },
    productImage: {
      selector: '//img[@class="product__image"]',
      locateStrategy: 'xpath'
    }
  }

};



