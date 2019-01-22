$(document).ready(function () {
    // Full section scroll init
    $("#fullpage").fullpage({
        anchors: ['amounts', 'durations', 'campaigns'],
        navigation: true,
        normalScrollElements: '#freqSelect'
    });

    // Scroll Top
    $("#scrollTop").on("click", function () {
        $.fn.fullpage.moveTo('amounts', 1);
    });

    // Virtual Keyboard init
    var openOnEvents = $(window).width() <= 576 ? null : ['focus'];

    // Number Inputs
    var numbInputs = $("#otherAmountInput, #cardNumberInput, #cardMonthInput, #cardYearInput, #cardZipInput");

    numbInputs.keyboard({
        appendLocally: true,
        layout: 'custom',
        customLayout: {'normal': ['1 2 3', '4 5 6', '7 8 9', '{b} 0 .', '{accept}']},
        visible: function (e, keyboard, el) {
            keyboard.$el.parent().addClass("focused");
        },
        beforeClose: function (e, keyboard, el, accepted) {
            if (!$(this).val()) {
                $(this).parent().removeClass("focused");
            }
        },
        css: {
            // input & preview
            input: 'form-control input-sm',
            // keyboard container
            container: 'center-block dropdown-menu',
            // jumbotron
            // default state
            buttonDefault: 'btn btn-default',
            // hovered button
            buttonHover: 'btn-primary',
            // Action keys (e.g. Accept, Cancel, Tab, etc);
            // this replaces "actionClass" option
            buttonAction: 'active',
            // used when disabling the decimal button {dec}
            // when a decimal exists in the input area
            buttonDisabled: 'disabled'
        },
        switchInput: function (keyboard, goToNext, isAccepted) {
            keyboard.accept();
            var all = $('.ui-keyboard-input:not(.ui-keyboard-preview)'),
                indx = all.index(keyboard.$el) + (goToNext ? 1 : -1);
            if (indx > all.length - 1) {
                indx = 0;
            }
            all.eq(indx).focus();
        },
        openOn: openOnEvents,
        accepted: function(event, keyboard, el) {
            if($(el).hasClass('other-amount-input')){
                let value = $(this).val();
                let decimalNumber = Number.parseFloat(value).toFixed(2);
                if(value){
                    $(this).val(decimalNumber);
                }
            }
        }
    }).extend($.keyboard.keyaction.accept = function (base) {
        base.switchInput(true, base.options.autoAccept);
    });

    // Text Input
    $("#cardNameInput").keyboard({
        appendLocally: true,
        layout: 'custom',
        customLayout: {'normal': ['` 1 2 3 4 5 6 7 8 9 0 - = {b}', '{t} q w e r t y u i o p [ ] \\', 'a s d f g h j k l ; \' {enter}', '{s} z x c v b n m , . / {s}', '{space} {accept}']},
        visible: function (e, keyboard, el) {
            keyboard.$el.parent().addClass("focused");
        },
        beforeClose: function (e, keyboard, el, accepted) {
            if (!$(this).val()) {
                $(this).parent().removeClass("focused");
            }
        },
        css: {
            // input & preview
            input: 'form-control input-sm',
            // keyboard container
            container: 'center-block dropdown-menu',
            // jumbotron
            // default state
            buttonDefault: 'btn btn-default',
            // hovered button
            buttonHover: 'btn-primary',
            // Action keys (e.g. Accept, Cancel, Tab, etc);
            // this replaces "actionClass" option
            buttonAction: 'active',
            // used when disabling the decimal button {dec}
            // when a decimal exists in the input area
            buttonDisabled: 'disabled'
        },
        switchInput: function (keyboard, goToNext, isAccepted) {
            keyboard.accept();
            var all = $('.ui-keyboard-input:not(.ui-keyboard-preview)'),
                indx = all.index(keyboard.$el) + (goToNext ? 1 : -1);
            if (indx > all.length - 1) {
                indx = 0;
            }
            all.eq(indx).focus();
        },
        openOn: openOnEvents,
    });
});