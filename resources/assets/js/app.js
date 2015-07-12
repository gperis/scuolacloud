(function ($) {
    $.validator.setDefaults({
        focusInvalid: false,
        ignore: "",

        errorPlacement: function (label, element) {
            $('<span class="error"></span>').insertAfter(element).append(label)
            var parent = $(element).parent('.input-with-icon');
            parent.switchClass('success-control', 'error-control');
        },

        highlight: function (element) {
            var parent = $(element).parent('.input-with-icon');
            parent.switchClass('success-control', 'error-control');
        },

        success: function (label, element) {
            var parent = $(element).parent('.input-with-icon');
            parent.switchClass('error-control', 'success-control');
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $(document).ready(function () {
        $('.validation').validate();

        $(".select2-wrapper").select2({
            language: 'it',
            minimumResultsForSearch: -1
        });

        $(".select2-wrapper-clear").select2({
            language: 'it',
            minimumResultsForSearch: -1,
            allowClear: true
        });

        $('.clockpicker').clockpicker({
            donetext: 'Fatto',
            autoclose: true
        });

        $(".input-location").select2({
            ajax: {
                url: "/search/location",
                dataType: 'json',
                quietMillis: 1000,
                data: function (term) {
                    return {q: term};
                },
                results: function (data, page) {
                    return { results: data };
                },
                cache: true
            },
            initSelection: function(element, callback) {
                var id = $(element).val();

                if (id !== "") {
                    $.ajax("/search/location/" + id, {
                        dataType: "json"
                    }).done(function(data) { callback(data); });
                }
            },
            id: function(bond) { return bond.woeid; },
            minimumInputLength: 2,
            formatResult: repoFormatResult,
            formatSelection: repoFormatSelection
        });
    });

    $.each($('.day-container [type="checkbox"]'), function() {
        if ($(this).attr('checked')) toggleDaySelector($(this));
    });

    $('.day-container [type="checkbox"]').on('click', function() {
        toggleDaySelector($(this));
    });

    $('ul li.start.open').each(function() {
        $('ul.sub-menu', this).css({'overflow': 'hidden', 'display': 'block'});
        $('span.arrow', this).addClass('open');
    });
})(jQuery);

function toggleDaySelector(element) {
    var parent = element.parentsUntil('.days-selector');

    $('.hidden-elements', parent).toggleClass('hide');
}

function repoFormatResult(repo) {
    var markup = '<div>' +
        '<div class="pull-left m-r-5 flag flag-' + repo.country.toLowerCase() + '"></div>' +
        '<div class="pull-left">' + repo.name + ', ' + repo.country + '</div><div class="clearfix"></div></div>';

    return markup;
}

function repoFormatSelection(repo) {
    return repo.name;
}

function groupSelector() {
    var pGroup = $('#primary_group').val();
    console.log(pGroup);

    $('input[id^="secondary_group_"]').removeAttr('disabled');
    $('input[id="secondary_group_' + pGroup + '"]').prop('checked', false).attr('disabled', true);
}