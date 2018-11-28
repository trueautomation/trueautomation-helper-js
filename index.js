module.exports = {
    ta: function(name, locator) {
        if (locator) {
            return locator + '__ta__' + name  + '__ta__';
        } else {
            return '__taonly__' + name + '__taonly__';
        }
    }
};
