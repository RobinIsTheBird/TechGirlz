window.onload = function () {
    $('.give-order').on('click', function (ev) {
        var order = $('input.order').prop('value');
        var binElements = $('.bin');
        var bowlElement = $('.bowl');
        var binMatch = binElements.is('[title="' + order + '"]');
        if (binMatch) {
            bowlElement.attr('title', order);
            bowlElement.removeClass('hidden');
        }
    });
};
