"use strict";

!(function (e) {
  "use strict";if ("function" == typeof define && define.amd) define(["jquery"], function (t) {
    return e(window, document, t);
  });else {
    if ("undefined" == typeof exports) return e(window, document, jQuery);module.exports = e(window, document, require("jquery"));
  }
})(function (e, t, n) {
  "use strict";var r = function r(e, t, n) {
    var r, o, a, i, s, l, c, p;switch ((i = Math.floor(6 * e), s = 6 * e - i, l = n * (1 - t), c = n * (1 - s * t), p = n * (1 - (1 - s) * t), i % 6)) {case 0:
        r = n, o = p, a = l;break;case 1:
        r = c, o = n, a = l;break;case 2:
        r = l, o = n, a = p;break;case 3:
        r = l, o = c, a = n;break;case 4:
        r = p, o = l, a = n;break;case 5:
        r = n, o = l, a = c;}var u = Math.floor(255 * r).toString(16),
        f = Math.floor(255 * o).toString(16),
        d = Math.floor(255 * a).toString(16);return "#" + (u.length < 2 ? "0" : "") + u + (f.length < 2 ? "0" : "") + f + (d.length < 2 ? "0" : "") + d;
  },
      o = function o(e) {
    return e.replace(/[&<>"]/g, function (e) {
      var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" };return t[e] || e;
    });
  },
      a = function a(a, i, s, l, c, p, u, f, d, h, w, g, y, v, m, b, C) {
    var P = function P(e, t) {
      t && (e.getSelectedHTML() ? e.insertLink(t) : e.insertHTML("<a href=\"" + o(t) + "\">" + o(t) + "</a>")), e.closePopup().collapseSelection();
    },
        k = function k(e, t) {
      var r = T(p),
          o = n("<input type=\"text\" value=\"" + (t ? t.attr("href") : "") + "\" />").addClass("wysiwyg-input").keypress(function (n) {
        (10 == n.which || 13 == n.which) && (t ? (t.attr("href", o.val()), e.closePopup().collapseSelection()) : P(e, o.val()));
      });f && o.attr("placeholder", f);var a = r.click(function (n) {
        return (t ? (t.attr("href", o.val()), e.closePopup().collapseSelection()) : P(e, o.val()), n.stopPropagation(), n.preventDefault(), !1);
      }),
          i = n("<div/>").addClass("wysiwyg-toolbar-form").attr("unselectable", "on");return (i.append(o).append(a), i);
    },
        x = function x(t) {
      var r = function r(e, _r) {
        var a = "<img id=\"wysiwyg-insert-image\" src=\"\" alt=\"\"" + (_r ? " title=\"" + o(_r) + "\"" : "") + " />";t.insertHTML(a).closePopup().collapseSelection();var i = n("#wysiwyg-insert-image").removeAttr("id");h && i.css({ maxWidth: h[0] + "px", maxHeight: h[1] + "px" }).load(function () {
          i.css({ maxWidth: "", maxHeight: "" });var e = i.width(),
              t = i.height();(e > h[0] || t > h[1]) && (e / t > h[0] / h[1] ? (t = parseInt(t / e * h[0]), e = h[0]) : (e = parseInt(e / t * h[1]), t = h[1]), i.attr("width", e).attr("height", t));
        }), i.attr("src", e);
      },
          a = n("<div/>").addClass("wysiwyg-toolbar-form").attr("unselectable", "on"),
          i = null,
          s = n("<input type=\"file\" />").css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer" });if (!g && e.File && e.FileReader && e.FileList) {
        var l = function l(e) {
          if (e.type.match("image.*")) {
            var t = new FileReader();t.onload = function (t) {
              var n = t.target.result;r(n, e.name);
            }, t.readAsDataURL(e);
          }
        };i = s.attr("draggable", "true").change(function (e) {
          for (var t = e.target.files, n = 0; n < t.length; ++n) l(t[n]);
        }).on("dragover", function (e) {
          return (e.originalEvent.dataTransfer.dropEffect = "copy", e.stopPropagation(), e.preventDefault(), !1);
        }).on("drop", function (e) {
          for (var t = e.originalEvent.dataTransfer.files, n = 0; n < t.length; ++n) l(t[n]);return (e.stopPropagation(), e.preventDefault(), !1);
        });
      } else if (w) {
        var c = s.change(function (e) {
          w.call(this, r);
        });i = n("<form/>").append(c);
      }i && n("<div/>").addClass("wysiwyg-browse").html(u).append(i).appendTo(a);var d = T(p),
          y = n("<input type=\"text\" value=\"\" />").addClass("wysiwyg-input").keypress(function (e) {
        (10 == e.which || 13 == e.which) && r(y.val());
      });f && y.attr("placeholder", f);var v = d.click(function (e) {
        return (r(y.val()), e.stopPropagation(), e.preventDefault(), !1);
      });return (a.append(n("<div/>").append(y).append(v)), a);
    },
        L = function L(e) {
      var t = function t(_t, r) {
        _t = n.trim(_t || ""), r = n.trim(r || "");var a = !1;_t.length && !r.length ? a = _t : -1 == r.indexOf("<") && -1 == r.indexOf(">") && r.match(/^(?:https?:\/)?\/?(?:[^:\/\s]+)(?:(?:\/\w+)*\/)(?:[\w\-\.]+[^#?\s]+)(?:.*)?(?:#[\w\-]+)?$/) && (a = r), a && y && (r = y(a) || ""), !r.length && a && (r = "<video src=\"" + o(a) + "\" />"), e.insertHTML(r).closePopup().collapseSelection();
      },
          r = n("<div/>").addClass("wysiwyg-toolbar-form").attr("unselectable", "on"),
          a = n("<textarea>").addClass("wysiwyg-input wysiwyg-inputtextarea");d && a.attr("placeholder", d), n("<div/>").addClass("wysiwyg-embedcode").append(a).appendTo(r);var i = T(p),
          s = n("<input type=\"text\" value=\"\" />").addClass("wysiwyg-input").keypress(function (e) {
        (10 == e.which || 13 == e.which) && t(s.val());
      });f && s.attr("placeholder", f);var l = i.click(function (e) {
        return (t(s.val(), a.val()), e.stopPropagation(), e.preventDefault(), !1);
      });return (r.append(n("<div/>").append(s).append(l)), r);
    },
        S = function S(e, t) {
      for (var o = n("<table/>").attr("cellpadding", "0").attr("cellspacing", "0").attr("unselectable", "on"), a = 1; 15 > a; ++a) {
        for (var i = n("<tr/>"), s = 0; 25 > s; ++s) {
          var l;if (24 == s) {
            var c = Math.floor(255 / 13 * (14 - a)).toString(16),
                p = (c.length < 2 ? "0" : "") + c;l = "#" + p + p + p;
          } else {
            var u = s / 24,
                f = 8 >= a ? a / 8 : 1,
                d = a > 8 ? (16 - a) / 8 : 1;l = r(u, f, d);
          }n("<td/>").addClass("wysiwyg-toolbar-color").attr("title", l).attr("unselectable", "on").css({ backgroundColor: l }).click(function () {
            var n = this.title;return (t ? e.forecolor(n).closePopup().collapseSelection() : e.highlight(n).closePopup().collapseSelection(), !1);
          }).appendTo(i);
        }o.append(i);
      }return o;
    },
        I = function I(e, t) {
      switch (e) {case "insertimage":
          return t ? function (e) {
            t(x(K), e);
          } : null;case "insertvideo":
          return t ? function (e) {
            t(L(K), e);
          } : null;case "insertlink":
          return t ? function (e) {
            t(k(K), e);
          } : null;case "bold":
          return function () {
            K.bold();
          };case "italic":
          return function () {
            K.italic();
          };case "underline":
          return function () {
            K.underline();
          };case "strikethrough":
          return function () {
            K.strikethrough();
          };case "forecolor":
          return t ? function (e) {
            t(S(K, !0), e);
          } : null;case "highlight":
          return t ? function (e) {
            t(S(K, !1), e);
          } : null;case "alignleft":
          return function () {
            K.align("left");
          };case "aligncenter":
          return function () {
            K.align("center");
          };case "alignright":
          return function () {
            K.align("right");
          };case "alignjustify":
          return function () {
            K.align("justify");
          };case "subscript":
          return function () {
            K.subscript();
          };case "superscript":
          return function () {
            K.superscript();
          };case "indent":
          return function () {
            K.indent();
          };case "outdent":
          return function () {
            K.indent(!0);
          };case "orderedList":
          return function () {
            K.insertList(!0);
          };case "unorderedList":
          return function () {
            K.insertList();
          };case "removeformat":
          return function () {
            K.removeFormat().closePopup().collapseSelection();
          };}return null;
    },
        T = function T(e) {
      return n("<a/>").addClass("wysiwyg-toolbar-icon").attr("href", "#").attr("title", e.title).attr("unselectable", "on").append(e.image);
    },
        M = function M(e, t, r, o) {
      n.each(c, function (a, i) {
        if (i && !(t === !1 && "showstatic" in i && !i.showstatic || t === !0 && "showselection" in i && !i.showselection)) {
          var s;s = "click" in i ? function (e) {
            i.click(n(e));
          } : "popup" in i ? function (e) {
            var t = r(),
                a = i.popup(t, n(e));o(t, e, a);
          } : I(a, function (e, t) {
            var n = r();n.append(e), o(n, t), n.find("input[type=text]:first").focus();
          });var l;s ? l = T(i).click(function (e) {
            return (s(e.currentTarget), I(a) && K.getElement().focus(), e.stopPropagation(), e.preventDefault(), !1);
          }) : i.html && (l = n(i.html)), l && e.append(l);
        }
      });
    },
        D = function D(r, o, a, i) {
      for (var s = o.get(0), l = s.offsetParent, c = { left: 0, top: 0 }, p = !1, u = !1, f = r.width(), d = l; d;) {
        c.left += d.offsetLeft, c.top += d.offsetTop;var h = n(d);"fixed" == h.css("position") && (p = !0), "visible" != h.css("overflow") && (u = !0), d = d.offsetParent;
      }var w = n(l || t.body);w.append(r), a += s.offsetLeft, i += s.offsetTop, (p || u) && (a + f > w.width() - 1 && (a = w.width() - f - 1), 1 > a && (a = 1));var g = n(e).width();c.left + a + f > g - 1 && (a = g - c.left - f - 1);var y = p ? 0 : n(e).scrollLeft();c.left + a < y + 1 && (a = y - c.left + 1), r.css({ left: parseInt(a) + "px", top: parseInt(i) + "px" });
    },
        E = {},
        j = null,
        H = function H(e, t, r) {
      var o = function o(e, t, r, _o, a, i, l) {
        if (C) {
          var c = j || "";switch (t) {case 8:
              c = c.substring(0, c.length - 1);case 13:case 27:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:
              if (e) return;r = !1;break;default:
              if (!e) return;c += r;}var p = C(c, t, r, _o, a, i, l);if ("object" != typeof p || !p.length) return (s.closePopup(), j = null, p);var u = n(s.openPopup());u.hide().addClass("wysiwyg-popup wysiwyg-popuphover").empty().append(p), j = c;
        }
      },
          a = { element: e.get(0), onKeyDown: function onKeyDown(e, t, n, r, a, i) {
          if (v && v(e, t, n, r, a, i) === !1) return !1;if (t && !n && !r && a && !i) {
            var s = t.toLowerCase();if (!E[s]) return;return (E[s](), !1);
          }return o(!1, e, t, n, r, a, i);
        }, onKeyPress: function onKeyPress(e, t, n, r, a, i) {
          return m && m(e, t, n, r, a, i) === !1 ? !1 : o(!0, e, t, n, r, a, i);
        }, onKeyUp: function onKeyUp(e, t, n, r, o, a) {
          return b && b(e, t, n, r, o, a) === !1 ? !1 : void 0;
        }, onSelection: function onSelection(e, r, o, a) {
          var i = !0,
              c = null;if ((e && n.each(o, function (e, t) {
            return 0 != n(t).parents("a").length ? (c = k(s, n(t).parents("a:first")), !1) : void 0;
          }), r ? c || a || j || ("selection" != l && "top-selection" != l && "bottom-selection" != l ? i = !1 : e ? i = !1 : 1 == o.length && "IMG" == o[0].nodeName && (i = !1)) : i = !1, !i)) return void s.closePopup();var p,
              u = function u() {
            var e = p.outerWidth(),
                o = t.offset(),
                a = n(s.getElement()).offset(),
                i = r.left + parseInt(r.width / 2) - parseInt(e / 2) + a.left - o.left,
                l = r.top + r.height + a.top - o.top;D(p, t, i, l);
          };p = n(s.openPopup()), p.hasClass("wysiwyg-popuphover") && !p.data("special") == !c || (p = n(s.closePopup().openPopup())), j ? p.show() : p.hasClass("wysiwyg-popup") || (p.addClass("wysiwyg-popup wysiwyg-popuphover"), c ? p.empty().append(c).data("special", !0) : M(p, !0, function () {
            return p.empty();
          }, u)), u();
        }, onClosepopup: function onClosepopup() {
          j = null;
        }, hijackContextmenu: "selection" == l };if (r) {
        var i = n("<div/>").addClass("wysiwyg-placeholder").html(r).hide();t.prepend(i), a.onPlaceholder = function (e) {
          e ? i.show() : i.hide();
        };
      }var s = wysiwyg(a);return s;
    },
        U = n("<div/>").addClass("wysiwyg-container");i && U.addClass(i), a.wrap(U), U = a.parent(".wysiwyg-container");var F = !1;s && (F = n("<div/>").addClass("wysiwyg-wrapper").click(function () {
      K.getElement().focus();
    }), a.wrap(F), F = a.parent(".wysiwyg-wrapper"));var K = H(a, s ? F : U, s);if (K.legacy) {
      var a = n(K.getElement());a.addClass("wysiwyg-textarea"), a.is(":visible") && a.width(U.width() - (a.outerWidth() - a.width()));
    } else n(K.getElement()).addClass("wysiwyg-editor");var W = {};if ((n.each(c, function (e, t) {
      if (t && t.hotkey) {
        var n = I(e);n && (E[t.hotkey.toLowerCase()] = n, W[e] = n);
      }
    }), "selection" != l)) {
      var q = "top" == l || "top-selection" == l,
          A = n("<div/>").addClass("wysiwyg-toolbar").addClass(q ? "wysiwyg-toolbar-top" : "wysiwyg-toolbar-bottom");M(A, !1, function () {
        var e = n(K.openPopup());return (e.hasClass("wysiwyg-popup") && e.hasClass("wysiwyg-popuphover") && (e = n(K.closePopup().openPopup())), e.hasClass("wysiwyg-popup") || e.addClass("wysiwyg-popup"), e);
      }, function (e, t, r) {
        var o = n(t),
            a = e.outerWidth(),
            i = o.offset().left - U.offset().left + parseInt(o.width() / 2) - parseInt(a / 2),
            s = o.offset().top - U.offset().top;q ? s += o.outerHeight() : s -= e.outerHeight(), r && (i = r.left, s = r.top), D(e, U, i, s);
      }), q ? U.prepend(A) : U.append(A);
    }return { wysiwygeditor: K, $container: U };
  };n.fn.wysiwyg = function (e, t) {
    if (!e || "object" == typeof e) return (e = n.extend({}, e), this.each(function () {
      var t = n(this);if (!t.data("wysiwyg")) {
        var r = e.classes,
            o = e.placeholder || t.attr("placeholder"),
            i = !e.toolbar || "top" != e.toolbar && "top-selection" != e.toolbar && "bottom" != e.toolbar && "bottom-selection" != e.toolbar && "selection" != e.toolbar ? "top-selection" : e.toolbar,
            s = e.buttons,
            l = e.submit,
            c = e.selectImage,
            p = e.placeholderUrl || null,
            u = e.placeholderEmbed || null,
            f = e.maxImageSize || null,
            d = e.onImageUpload || null,
            h = e.forceImageUpload && d,
            w = e.videoFromUrl || null,
            g = e.onKeyDown || null,
            y = e.onKeyPress || null,
            v = e.onKeyUp || null,
            m = e.onAutocomplete || null,
            b = a(t, r, o, i, s, l, c, p, u, f, d, h, w, g, y, v, m);t.data("wysiwyg", b);
      }
    }));if (1 == this.length) {
      var r = this.data("wysiwyg");if (!r) return this;if ("container" == e) return r.$container;if ("shell" == e) return r.wysiwygeditor;
    }return this;
  };
});
//# sourceMappingURL=editor.js.map