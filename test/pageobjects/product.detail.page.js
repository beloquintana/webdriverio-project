class ProductDetailPage {
    get blueColorLink () { return $('#color_14') }
    get descriptionHeader () { return $('//*[@id="center_column"]/div/div/div[3]/h1') }
    get priceLabel () { return $('#our_price_display') }
    get sizeSelect () { return $('#group_1') }
    get quantityInput () { return $('#quantity_wanted') }
    get addToCartButton () { return $('//*[@id="add_to_cart"]/button') }

    getProductDescription () {
        return this.descriptionHeader.getText();
    }

    getProductPrice () {
        return this.priceLabel.getText();
    }

    getProductPriceMultipliedBy (number){
        return '$' + (this.getProductPrice().substring(1) * number).toFixed(2);
    }

    clickOnBlueColor () {
        this.blueColorLink.click();
    }

    selectSize (size) {
        this.sizeSelect.selectByVisibleText(size);
    }

    typeQuantity (quantity) {
        this.quantityInput.setValue(quantity);
    }

    clickOnAddToCartButton () {
        this.addToCartButton.click();
    }
}

module.exports = new ProductDetailPage();