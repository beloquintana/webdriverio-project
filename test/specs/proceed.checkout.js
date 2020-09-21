const HomePage = require('../pageobjects/home.page');
const ProductPage = require('../pageobjects/product.page');
const ProductDetailPage = require('../pageobjects/product.detail.page');
const CartModalPage = require('../pageobjects/cart.modal.page');
const CartSummaryPage = require('../pageobjects/cart.summary.page');

describe('My Store', () => {
    it('should proceed checkout', () => {
        browser.url('/');

        HomePage.clickOnDressesMenuOption();
        ProductPage.takeProduct(3);

        const expectedDescription = ProductDetailPage.getProductDescription();
        const expectedPrice = ProductDetailPage.getProductPriceMultipliedBy(5);
        ProductDetailPage.clickOnBlueColor();
        ProductDetailPage.selectSize('L');
        ProductDetailPage.typeQuantity('5');
        ProductDetailPage.clickOnAddToCartButton();

        CartModalPage.waitForPageToLoad();
        CartModalPage.clickOnProceedToCheckoutButton();

        expect(CartSummaryPage.descriptionOrder).toHaveText(expectedDescription);
        expect(CartSummaryPage.totalPriceOrder).toHaveText(expectedPrice);
    });
});