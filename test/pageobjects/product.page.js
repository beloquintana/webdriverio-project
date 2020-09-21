class ProductPage {
    
    getProductSelector (optionNumber) {
        return $('//*[@id="center_column"]/ul/li['+ optionNumber +']/div/div')
    }

    takeProduct (optionNumber) {
        this.getProductSelector(optionNumber).click();
    }
}

module.exports = new ProductPage();