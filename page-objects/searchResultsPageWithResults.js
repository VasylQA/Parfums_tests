const commands = {
  checkIfProductNameCotainsSearchRequest: function (searchRequest) {
    return this
      .waitForElementVisible('@namesOfFoundProducts', this.api.globals.smallWait)
       {
      }
  }

};

module.exports = {
  url: 'https://parfums.ua/',
  commands: [commands],
  elements: {
    nameOfFoundProducts: {
      selector: '//span[@class="product__link-desc"]'
    }
  }

};



