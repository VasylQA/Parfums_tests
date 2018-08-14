const commands = {
  enterSearchRequest: function (searchRequest) {
    return this
      .waitForElementVisible('@searchField', this.api.globals.smallWait)
      .clearValue('@searchField')
      .setValue('@searchField', searchRequest);
  },

  clickSubmitSearchButton: function(){
    return this
      .waitForElementVisible('@submitSearchButton', this.api.globals.tinyWait)
      .click('@submitSearchButton');
  }

};

module.exports = {
  url: 'https://parfums.ua/',
  commands: [commands],
  elements: {
    searchField: {
      selector: '.js-search-text.header__input'
    },
    submitSearchButton: {
      selector: '.header__search--button.js-search-button'
    }
  }

};