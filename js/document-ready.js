$(document).ready(function () {
    $("#fullpage").fullpage({
        anchors: ['amounts', 'durations', 'campaigns'],
        navigation: true,
        normalScrollElements: '#freqSelect'
    });
    $("#scrollTop").on("click", function () {
        $.fn.fullpage.moveTo('amounts', 1);
    });
    var openOnEvents = $(window).width() <= 576 ? null : ['focus'];
    $("#otherAmountInput, #cardNumberInput, #cardMonthInput, #cardYearInput, #cardZipInput").keyboard({
        appendLocally: true,
        layout: 'custom',
        customLayout: {'normal': ['1 2 3', '4 5 6', '7 8 9', '{b} 0 .', '{prev} {next}', '{accept} {cancel}']},
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
        openOn: openOnEvents
    });
    $("#cardNameInput").keyboard({
        appendLocally: true,
        layout: 'custom',
        customLayout: {'normal': ['` 1 2 3 4 5 6 7 8 9 0 - = {bksp}', '{tab} q w e r t y u i o p [ ] \\', 'a s d f g h j k l ; \' {enter}', '{shift} z x c v b n m , . / {shift}', '{accept} {space} {cancel} {prev} {next}']},
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
        openOn: openOnEvents
    });
});