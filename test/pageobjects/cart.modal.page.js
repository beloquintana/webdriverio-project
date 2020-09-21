class CartModalPage {
    get proceedToCheckoutButton () { return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a') }  

    waitForPageToLoad () {
        this.proceedToCheckoutButton.waitForClickable({ timeout: 4000 });
    }

    clickOnProceedToCheckoutButton () {
        this.proceedToCheckoutButton.click();
    }

}

module.exports = new CartModalPage();