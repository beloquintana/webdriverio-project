class HomePage {
    get dressesMenuOption () { return $('//*[@id="block_top_menu"]/ul/li[2]') }

    clickOnDressesMenuOption () {
        this.dressesMenuOption.click(); 
    }
}

module.exports = new HomePage();