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
  },

  hoverOnPerfumeryCategoryLink: function(){
    return this
      .waitForElementVisible('@perfumeryCategoryLink', this.api.globals.tinyWait)
      .moveToElement('@perfumeryCategoryLink', 10, 10);
  },
  clickSaleSubCategoryInPerfumeryCategory: function(){
    return this
      .waitForElementVisible('@saleSubCategoryLink', this.api.globals.tinyWait)
      .click('@saleSubCategoryLink');
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
    },
    perfumeryCategoryLink: {
      selector: '.header__listlink.js-link-item[href="/category/parfums"]'
    },
    saleSubCategoryLink: {
      selector: '.header__listlink.js-link-item[href="/markdowned/1/arrival_desc/20/category=433863"]'
    }
  }

};