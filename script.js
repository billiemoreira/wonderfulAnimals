function dom(seletor) {
    this.element = function () {
        return document.querySelector(seletor);
    }
    this.ativar = function () {
        this.element().classList.add('ativar');
    }
}