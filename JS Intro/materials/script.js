
window.onload = function () {
    function makeRainbow (aWord) {
        return _.map(aWord.split(''), function (aLetter) {
            return '<span>' + aLetter + '</span>';
        })
        .join('');
    }
    window.makeRainbow = makeRainbow;
};
