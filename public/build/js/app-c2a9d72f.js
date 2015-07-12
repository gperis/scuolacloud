/* Webarch Admin Dashboard
 /* This JS is only for DEMO Purposes - Extract the code that you need
 -----------------------------------------------------------------*/
/* Set the defaults for DataTables initialisation */
"use strict";

$.extend(true, $.fn.dataTable.defaults, {
    "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span12'p i>>",
    "sPaginationType": "bootstrap",
    "oLanguage": {
        "sLengthMenu": "_MENU_"
    }
});

/* Default class modification */
$.extend($.fn.dataTableExt.oStdClasses, {
    "sWrapper": "dataTables_wrapper form-inline"
});

/* API method to get paging information */
$.fn.dataTableExt.oApi.fnPagingInfo = function (oSettings) {
    return {
        "iStart": oSettings._iDisplayStart,
        "iEnd": oSettings.fnDisplayEnd(),
        "iLength": oSettings._iDisplayLength,
        "iTotal": oSettings.fnRecordsTotal(),
        "iFilteredTotal": oSettings.fnRecordsDisplay(),
        "iPage": oSettings._iDisplayLength === -1 ? 0 : Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
        "iTotalPages": oSettings._iDisplayLength === -1 ? 0 : Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
    };
};

/* Bootstrap style pagination control */
$.extend($.fn.dataTableExt.oPagination, {
    "bootstrap": {
        "fnInit": function fnInit(oSettings, nPaging, fnDraw) {
            var oLang = oSettings.oLanguage.oPaginate;
            var fnClickHandler = function fnClickHandler(e) {
                e.preventDefault();
                if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
                    fnDraw(oSettings);
                }
            };

            $(nPaging).addClass("pagination").append("<ul>" + "<li class=\"prev disabled\"><a href=\"#\"><i class=\"fa fa-chevron-left\"></i></a></li>" + "<li class=\"next disabled\"><a href=\"#\"><i class=\"fa fa-chevron-right\"></i></a></li>" + "</ul>");
            var els = $("a", nPaging);
            $(els[0]).bind("click.DT", { action: "previous" }, fnClickHandler);
            $(els[1]).bind("click.DT", { action: "next" }, fnClickHandler);
        },

        "fnUpdate": function fnUpdate(oSettings, fnDraw) {
            var iListLength = 5;
            var oPaging = oSettings.oInstance.fnPagingInfo();
            var an = oSettings.aanFeatures.p;
            var i,
                ien,
                j,
                sClass,
                iStart,
                iEnd,
                iHalf = Math.floor(iListLength / 2);

            if (oPaging.iTotalPages < iListLength) {
                iStart = 1;
                iEnd = oPaging.iTotalPages;
            } else if (oPaging.iPage <= iHalf) {
                iStart = 1;
                iEnd = iListLength;
            } else if (oPaging.iPage >= oPaging.iTotalPages - iHalf) {
                iStart = oPaging.iTotalPages - iListLength + 1;
                iEnd = oPaging.iTotalPages;
            } else {
                iStart = oPaging.iPage - iHalf + 1;
                iEnd = iStart + iListLength - 1;
            }

            for (i = 0, ien = an.length; i < ien; i++) {
                // Remove the middle elements
                $("li:gt(0)", an[i]).filter(":not(:last)").remove();

                // Add the new list items and their event handlers
                for (j = iStart; j <= iEnd; j++) {
                    sClass = j == oPaging.iPage + 1 ? "class=\"active\"" : "";
                    $("<li " + sClass + "><a href=\"#\">" + j + "</a></li>").insertBefore($("li:last", an[i])[0]).bind("click", function (e) {
                        e.preventDefault();
                        oSettings._iDisplayStart = (parseInt($("a", this).text(), 10) - 1) * oPaging.iLength;
                        fnDraw(oSettings);
                    });
                }

                // Add / remove disabled classes from the static elements
                if (oPaging.iPage === 0) {
                    $("li:first", an[i]).addClass("disabled");
                } else {
                    $("li:first", an[i]).removeClass("disabled");
                }

                if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
                    $("li:last", an[i]).addClass("disabled");
                } else {
                    $("li:last", an[i]).removeClass("disabled");
                }
            }
        }
    }
});

/*
 * TableTools Bootstrap compatibility
 * Required TableTools 2.1+
 */

// Set the classes that TableTools uses to something suitable for Bootstrap
$.extend(true, $.fn.DataTable.TableTools.classes, {
    "container": "DTTT ",
    "buttons": {
        "normal": "btn btn-white",
        "disabled": "disabled"
    },
    "collection": {
        "container": "DTTT_dropdown dropdown-menu",
        "buttons": {
            "normal": "",
            "disabled": "disabled"
        }
    },
    "print": {
        "info": "DTTT_print_info modal"
    },
    "select": {
        "row": "active"
    }
});

// Have the collection use a bootstrap compatible dropdown
$.extend(true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
    "collection": {
        "container": "ul",
        "button": "li",
        "liner": "a"
    }
});

var dTable;

/* Table initialisation */
$(document).ready(function () {
    var responsiveHelper = undefined;
    var breakpointDefinition = {
        tablet: 1024,
        phone: 480
    };
    var tableElement = $(".dataTable");

    dTable = tableElement.dataTable({
        "sDom": "<'row'<'col-md-6'l ><'col-md-6'f>r>t<'row'<'col-md-12'p i>>",
        "sPaginationType": "bootstrap",
        "aoColumnDefs": [],
        "aaSorting": [],
        "oLanguage": {
            "sEmptyTable": "Nessun dato presente nella tabella",
            "sInfo": "Vista da _START_ a _END_ di _TOTAL_ elementi",
            "sInfoEmpty": "Vista da 0 a 0 di 0 elementi",
            "sInfoFiltered": "(filtrati da _MAX_ elementi totali)",
            "sInfoPostFix": "",
            "sInfoThousands": ",",
            "sLengthMenu": "_MENU_",
            "sLoadingRecords": "Caricamento...",
            "sProcessing": "Elaborazione...",
            "sSearch": "Cerca:",
            "sZeroRecords": "La ricerca non ha portato alcun risultato.",
            "oPaginate": {
                "sFirst": "Inizio",
                "sPrevious": "Precedente",
                "sNext": "Successivo",
                "sLast": "Fine"
            },
            "oAria": {
                "sSortAscending": ": Attiva per ordinare la colonna in ordine crescente",
                "sSortDescending": ": Attiva per ordinare la colonna in ordine decrescente"
            }
        },
        bAutoWidth: false,
        fnPreDrawCallback: function fnPreDrawCallback() {
            // Initialize the responsive datatables helper once.
            if (!responsiveHelper) {
                responsiveHelper = new ResponsiveDatatablesHelper(tableElement, breakpointDefinition);
            }
        },
        fnRowCallback: function fnRowCallback(nRow) {
            responsiveHelper.createExpandIcon(nRow);
        },
        fnDrawCallback: function fnDrawCallback(oSettings) {
            responsiveHelper.respond();
        }
    });

    $(".dataTables_wrapper .dataTables_length select").addClass("select2-wrapper span12");
    $(".select2-wrapper").select2({ minimumResultsForSearch: -1 });
});

var color_green = "#27cebc";
var color_blue = "#00acec";
var color_yellow = "#FDD01C";
var color_red = "#f35958";
var color_grey = "#dce0e8";
var color_black = "#1b1e24";
var color_purple = "#6d5eac";
var color_primary = "#6d5eac";
var color_success = "#4eb2f5";
var color_danger = "#f35958";
var color_warning = "#f7cf5e";
var color_info = "#3b4751";

$(document).ready(function () {
    calculateHeight();
    $(".remove-widget").click(function () {
        $(this).parent().parent().parent().addClass("animated fadeOut");
        $(this).parent().parent().parent().attr("id", "id_a");

        //$(this).parent().parent().parent().hide();
        setTimeout(function () {
            $("#id_a").remove();
        }, 400);
        return false;
    });

    $(".inside").children("input").blur(function () {
        $(this).parent().children(".add-on").removeClass("input-focus");
    });

    $(".inside").children("input").focus(function () {
        $(this).parent().children(".add-on").addClass("input-focus");
    });

    $(".input-group.transparent").children("input").blur(function () {
        $(this).parent().children(".input-group-addon").removeClass("input-focus");
    });

    $(".input-group.transparent").children("input").focus(function () {
        $(this).parent().children(".input-group-addon").addClass("input-focus");
    });

    $(".bootstrap-tagsinput input").blur(function () {
        $(this).parent().removeClass("input-focus");
    });

    $(".bootstrap-tagsinput input").focus(function () {
        $(this).parent().addClass("input-focus");
    });

    //**********************************BEGIN MAIN MENU********************************
    jQuery(".page-sidebar li > a").on("click", function (e) {
        if ($(this).next().hasClass("sub-menu") === false) {
            return;
        }
        var parent = $(this).parent().parent();

        parent.children("li.open").children("a").children(".arrow").removeClass("open");
        parent.children("li.open").children("a").children(".arrow").removeClass("active");
        parent.children("li.open").children(".sub-menu").slideUp(200);
        parent.children("li").removeClass("open");
        //  parent.children('li').removeClass('active');

        var sub = jQuery(this).next();
        if (sub.is(":visible")) {
            jQuery(".arrow", jQuery(this)).removeClass("open");
            jQuery(this).parent().removeClass("active");
            sub.slideUp(200, function () {
                handleSidenarAndContentHeight();
            });
        } else {
            jQuery(".arrow", jQuery(this)).addClass("open");
            jQuery(this).parent().addClass("open");
            sub.slideDown(200, function () {
                handleSidenarAndContentHeight();
            });
        }

        e.preventDefault();
    });
    //**********************************END MAIN MENU********************************

    //**** Element Background and height ********************************************

    $("[data-height-adjust=\"true\"]").each(function () {
        var h = $(this).attr("data-elem-height");
        $(this).css("min-height", h);
        $(this).css("background-image", "url(" + $(this).attr("data-background-image") + ")");
        $(this).css("background-repeat", "no-repeat");
        if ($(this).attr("data-background-image")) {}
    });

    function equalHeight(group) {
        tallest = 0;
        group.each(function () {
            thisHeight = $(this).height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);
    }

    $("[data-aspect-ratio=\"true\"]").each(function () {
        $(this).height($(this).width());
    });

    $("[data-sync-height=\"true\"]").each(function () {
        equalHeight($(this).children());
    });

    $(window).resize(function () {
        $("[data-aspect-ratio=\"true\"]").each(function () {
            $(this).height($(this).width());
        });
        $("[data-sync-height=\"true\"]").each(function () {
            equalHeight($(this).children());
        });
    });
    $("#main-menu-wrapper").scrollbar();
    // initMainMenu();
    //***********************************BEGIN Fixed Menu*****************************
    function initMainMenu() {}

    initExtendedLayoutMenuScroll();
    function initExtendedLayoutMenuScroll() {}

    $(".tip").tooltip();
    //***********************************BEGIN Horinzontal Menu*****************************
    $(".horizontal-menu .bar-inner > ul > li").on("click", function () {
        $(this).toggleClass("open").siblings().removeClass("open");
    });
    if ($("body").hasClass("horizontal-menu")) {
        $(".content").on("click", function () {
            $(".horizontal-menu .bar-inner > ul > li").removeClass("open");
        });
    }
    //***********************************END Horinzontal Menu*****************************
    //***********************************BEGIN Lazyload images*****************************
    if ($.fn.lazyload) {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    }
    //***********************************BEGIN Grids*****************************
    $(".grid .tools a.remove").on("click", function () {
        var removable = jQuery(this).parents(".grid");
        if (removable.next().hasClass("grid") || removable.prev().hasClass("grid")) {
            jQuery(this).parents(".grid").remove();
        } else {
            jQuery(this).parents(".grid").parent().remove();
        }
    });

    $(".grid .tools a.reload").on("click", function () {
        var el = jQuery(this).parents(".grid");
        blockUI(el);
        window.setTimeout(function () {
            unblockUI(el);
        }, 1000);
    });

    $(".grid .tools .collapse, .grid .tools .expand").on("click", function () {
        var el = jQuery(this).parents(".grid").children(".grid-body");
        if (jQuery(this).hasClass("collapse")) {
            jQuery(this).removeClass("collapse").addClass("expand");
            el.slideUp(200);
        } else {
            jQuery(this).removeClass("expand").addClass("collapse");
            el.slideDown(200);
        }
    });

    $(".user-info .collapse").on("click", function () {
        jQuery(this).parents(".user-info ").stop().slideToggle(400, "swing");
    });
    //***********************************END Grids*****************************
    var handleSidenarAndContentHeight = function handleSidenarAndContentHeight() {
        var content = $(".page-content");
        var sidebar = $(".page-sidebar");

        if (!content.attr("data-height")) {
            content.attr("data-height", content.height());
        }

        if (sidebar.height() > content.height()) {
            content.css("min-height", sidebar.height() + 120);
        } else {
            content.css("min-height", content.attr("data-height"));
        }
    };
    $(".panel-group").on("hidden.bs.collapse", function (e) {
        $(this).find(".panel-heading").not($(e.target)).addClass("collapsed");
    });

    $(".panel-group").on("shown.bs.collapse", function (e) {});

    //***********************************BEGIN Layout Readjust *****************************

    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [320, 480, 768, 1024]
    });
    //Break point entry
    $(window).bind("enterBreakpoint320", function () {
        $("#main-menu-toggle-wrapper").show();
        $("#portrait-chat-toggler").show();
        $("#header_inbox_bar").hide();
        $("#main-menu").removeClass("mini");
        $(".page-content").removeClass("condensed");
        rebuildSider();
    });

    $(window).bind("enterBreakpoint480", function () {
        $("#main-menu-toggle-wrapper").show();
        $(".header-seperation").show();
        $("#portrait-chat-toggler").show();
        $("#header_inbox_bar").hide();
        //Incase if condensed layout is applied
        $("#main-menu").removeClass("mini");
        $(".page-content").removeClass("condensed");
        rebuildSider();
    });

    $(window).bind("enterBreakpoint768", function () {
        $("#main-menu-toggle-wrapper").show();
        $("#portrait-chat-toggler").show();
        $("#header_inbox_bar").hide();

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("#main-menu").removeClass("mini");
            $(".page-content").removeClass("condensed");
            rebuildSider();
        }
    });

    $(window).bind("enterBreakpoint1024", function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var elem = jQuery(".page-sidebar ul");
            elem.children("li.open").children("a").children(".arrow").removeClass("open");
            elem.children("li.open").children("a").children(".arrow").removeClass("active");
            elem.children("li.open").children(".sub-menu").slideUp(200);
            elem.children("li").removeClass("open");
        }
        $(".bar").show();
        $(".bar").css("overflow", "visible");
    });

    $(window).bind("exitBreakpoint320", function () {
        $("#main-menu-toggle-wrapper").hide();
        $("#portrait-chat-toggler").hide();
        $("#header_inbox_bar").show();
        closeAndRestSider();
    });

    $(window).bind("exitBreakpoint480", function () {
        $("#main-menu-toggle-wrapper").hide();
        $("#portrait-chat-toggler").hide();
        $("#header_inbox_bar").show();
        closeAndRestSider();
    });

    $(window).bind("exitBreakpoint768", function () {
        $("#main-menu-toggle-wrapper").hide();
        $("#portrait-chat-toggler").hide();
        $("#header_inbox_bar").show();
        closeAndRestSider();
    });

    //***********************************END Layout Readjust *****************************

    //***********************************BEGIN Function calls *****************************
    function closeAndRestSider() {
        if ($("#main-menu").attr("data-inner-menu") == "1") {
            $("#main-menu").addClass("mini");
            $("#main-menu").removeClass("left");
        } else {
            $("#main-menu").removeClass("left");
        }
    }

    $("#main-menu-toggle").on("touchstart click", function (e) {
        e.preventDefault();
        toggleMainMenu();
    });
    $("#chat-menu-toggle, .chat-menu-toggle").on("touchstart click", function (e) {
        e.preventDefault();
        toggleChat();
    });

    function rebuildSider() {}

    //***********************************END Function calls *****************************

    //***********************************BEGIN Slimscroller *****************************
    $(".scroller").each(function () {
        var h = $(this).attr("data-height");
        $(this).scrollbar({
            ignoreMobile: true
        });
        if (h != null || h != "") {
            if ($(this).parent(".scroll-wrapper").length > 0) $(this).parent().css("max-height", h);else $(this).css("max-height", h);
        }
    });
    //***********************************END Slimscroller *****************************

    //***********************************BEGIN dropdow menu *****************************
    $(".dropdown-toggle").click(function () {
        $("img").trigger("unveil");
    });
    //***********************************END dropdow menu *****************************

    //***********************************BEGIN Global sparkline chart  *****************************
    if ($.fn.sparkline) {
        $(".sparklines").sparkline("html", {
            enableTagOptions: true
        });
    }
    //***********************************END Global sparkline chart  *****************************

    //***********************************BEGIN Function calls *****************************
    $("table th .checkall").on("click", function () {
        if ($(this).is(":checked")) {
            $(this).closest("table").find(":checkbox").attr("checked", true);
            $(this).closest("table").find("tr").addClass("row_selected");
            //$(this).parent().parent().parent().toggleClass('row_selected');
        } else {
            $(this).closest("table").find(":checkbox").attr("checked", false);
            $(this).closest("table").find("tr").removeClass("row_selected");
        }
    });
    //***********************************BEGIN Function calls *****************************

    //***********************************BEGIN Function calls *****************************
    $(".animate-number").each(function () {
        $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration"), 10));
    });
    $(".animate-progress-bar").each(function () {
        $(this).css("width", $(this).attr("data-percentage"));
    });
    //***********************************BEGIN Function calls *****************************

    //***********************************BEGIN Tiles Controller Options *****************************

    $(".widget-item > .controller .reload").click(function () {
        var el = $(this).parent().parent();
        blockUI(el);
        window.setTimeout(function () {
            unblockUI(el);
        }, 1000);
    });
    $(".widget-item > .controller .remove").click(function () {
        $(this).parent().parent().parent().addClass("animated fadeOut");
        $(this).parent().parent().parent().attr("id", "id_remove_temp_id");
        setTimeout(function () {
            $("#id_remove_temp_id").remove();
        }, 400);
    });

    $(".tiles .controller .reload").click(function () {
        var el = $(this).parent().parent().parent();
        blockUI(el);
        window.setTimeout(function () {
            unblockUI(el);
        }, 1000);
    });
    $(".tiles .controller .remove").click(function () {
        $(this).parent().parent().parent().parent().addClass("animated fadeOut");
        $(this).parent().parent().parent().parent().attr("id", "id_remove_temp_id");
        setTimeout(function () {
            $("#id_remove_temp_id").remove();
        }, 400);
    });
    if (!jQuery().sortable) {
        return;
    }
    $(".sortable").sortable({
        connectWith: ".sortable",
        iframeFix: false,
        items: "div.grid",
        opacity: 0.8,
        helper: "original",
        revert: true,
        forceHelperSize: true,
        placeholder: "sortable-box-placeholder round-all",
        forcePlaceholderSize: true,
        tolerance: "pointer"
    });

    $(".datepicker").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });
    //***********************************BEGIN Function calls *****************************

    //***********************************BEGIN Function calls *****************************

    $(window).resize(function () {
        calculateHeight();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scrollup").fadeIn();
        } else {
            $(".scrollup").fadeOut();
        }
    });
    //***********************************BEGIN Function calls *****************************
    $(".scrollup").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });
    $("img").unveil();
});
$(window).resize(function () {});

function calculateHeight() {
    var contentHeight = parseInt($(".page-content").height(), 10);
}

//******************************* Bind Functions Jquery- LAYOUT OPTIONS API ***************

function blockUI(el) {
    $(el).block({
        message: "<div class=\"loading-animator\"></div>",
        css: {
            border: "none",
            padding: "2px",
            backgroundColor: "none"
        },
        overlayCSS: {
            backgroundColor: "#fff",
            opacity: 0.3,
            cursor: "wait"
        }
    });
}

// wrapper function to  un-block element(finish loading)
function unblockUI(el) {
    $(el).unblock();
}
(function ($) {
    $.validator.setDefaults({
        focusInvalid: false,
        ignore: "",

        errorPlacement: function errorPlacement(label, element) {
            $("<span class=\"error\"></span>").insertAfter(element).append(label);
            var parent = $(element).parent(".input-with-icon");
            parent.switchClass("success-control", "error-control");
        },

        highlight: function highlight(element) {
            var parent = $(element).parent(".input-with-icon");
            parent.switchClass("success-control", "error-control");
        },

        success: function success(label, element) {
            var parent = $(element).parent(".input-with-icon");
            parent.switchClass("error-control", "success-control");
        },
        submitHandler: function submitHandler(form) {
            form.submit();
        }
    });

    $(document).ready(function () {
        $(".validation").validate();

        $(".select2-wrapper").select2({
            language: "it",
            minimumResultsForSearch: -1
        });

        $(".select2-wrapper-clear").select2({
            language: "it",
            minimumResultsForSearch: -1,
            allowClear: true
        });

        $(".clockpicker").clockpicker({
            donetext: "Fatto",
            autoclose: true
        });

        $(".input-location").select2({
            ajax: {
                url: "/search/location",
                dataType: "json",
                quietMillis: 1000,
                data: function data(term) {
                    return { q: term };
                },
                results: function results(data, page) {
                    return { results: data };
                },
                cache: true
            },
            initSelection: function initSelection(element, callback) {
                var id = $(element).val();

                if (id !== "") {
                    $.ajax("/search/location/" + id, {
                        dataType: "json"
                    }).done(function (data) {
                        callback(data);
                    });
                }
            },
            id: function id(bond) {
                return bond.woeid;
            },
            minimumInputLength: 2,
            formatResult: repoFormatResult,
            formatSelection: repoFormatSelection
        });
    });

    $.each($(".day-container [type=\"checkbox\"]"), function () {
        if ($(this).attr("checked")) toggleDaySelector($(this));
    });

    $(".day-container [type=\"checkbox\"]").on("click", function () {
        toggleDaySelector($(this));
    });

    $("ul li.start.open").each(function () {
        $("ul.sub-menu", this).css({ "overflow": "hidden", "display": "block" });
        $("span.arrow", this).addClass("open");
    });
})(jQuery);

function toggleDaySelector(element) {
    var parent = element.parentsUntil(".days-selector");

    $(".hidden-elements", parent).toggleClass("hide");
}

function repoFormatResult(repo) {
    var markup = "<div>" + "<div class=\"pull-left m-r-5 flag flag-" + repo.country.toLowerCase() + "\"></div>" + "<div class=\"pull-left\">" + repo.name + ", " + repo.country + "</div><div class=\"clearfix\"></div></div>";

    return markup;
}

function repoFormatSelection(repo) {
    return repo.name;
}

function groupSelector() {
    var pGroup = $("#primary_group").val();
    console.log(pGroup);

    $("input[id^=\"secondary_group_\"]").removeAttr("disabled");
    $("input[id=\"secondary_group_" + pGroup + "\"]").prop("checked", false).attr("disabled", true);
}

// $(e.target).prev('.accordion-heading').find('.accordion-toggle').removeClass('collapsed');
//# sourceMappingURL=app.js.map