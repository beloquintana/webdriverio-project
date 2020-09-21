class CartSummaryPage {
    get descriptionOrder () { return $('//*[@class="cart_description"]/p') }  
    get totalPriceOrder () { return $('//*[@class="cart_total"]/span') } 

    getDescriptionOrderText () {
        this.descriptionOrder.getText();
    }

    getTotalPriceOrderText () {
        this.totalPriceOrder.getText();
    }

}

module.exports = new CartSummaryPage();