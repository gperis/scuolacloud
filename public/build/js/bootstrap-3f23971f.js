"use strict";

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+(function (t) {
  "use strict";function e() {
    var t = document.createElement("bootstrap"),
        e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };return !1;
  }t.fn.emulateTransitionEnd = function (e) {
    var i = !1,
        a = this;t(this).one(t.support.transition.end, function () {
      i = !0;
    });var s = function s() {
      i || t(a).trigger(t.support.transition.end);
    };return (setTimeout(s, e), this);
  }, t(function () {
    t.support.transition = e();
  });
})(jQuery), +(function (t) {
  "use strict";var e = "[data-dismiss=\"alert\"]",
      i = function i(_i) {
    t(_i).on("click", e, this.close);
  };i.prototype.close = function (e) {
    function i() {
      n.trigger("closed.bs.alert").remove();
    }var a = t(this),
        s = a.attr("data-target");s || (s = a.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));var n = t(s);e && e.preventDefault(), n.length || (n = a.hasClass("alert") ? a : a.parent()), n.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one(t.support.transition.end, i).emulateTransitionEnd(150) : i());
  };var a = t.fn.alert;t.fn.alert = function (e) {
    return this.each(function () {
      var a = t(this),
          s = a.data("bs.alert");s || a.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(a);
    });
  }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
    return (t.fn.alert = a, this);
  }, t(document).on("click.bs.alert.data-api", e, i.prototype.close);
})(jQuery), +(function (t) {
  "use strict";var e = function e(i, a) {
    this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, a), this.isLoading = !1;
  };e.DEFAULTS = { loadingText: "loading..." }, e.prototype.setState = function (e) {
    var i = "disabled",
        a = this.$element,
        s = a.is("input") ? "val" : "html",
        n = a.data();e += "Text", n.resetText || a.data("resetText", a[s]()), a[s](n[e] || this.options[e]), setTimeout(t.proxy(function () {
      "loadingText" == e ? (this.isLoading = !0, a.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, a.removeClass(i).removeAttr(i));
    }, this), 0);
  }, e.prototype.toggle = function () {
    var t = !0,
        e = this.$element.closest("[data-toggle=\"buttons\"]");if (e.length) {
      var i = this.$element.find("input");"radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change");
    }t && this.$element.toggleClass("active");
  };var i = t.fn.button;t.fn.button = function (i) {
    return this.each(function () {
      var a = t(this),
          s = a.data("bs.button"),
          n = "object" == typeof i && i;s || a.data("bs.button", s = new e(this, n)), "toggle" == i ? s.toggle() : i && s.setState(i);
    });
  }, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
    return (t.fn.button = i, this);
  }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (e) {
    var i = t(e.target);i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle"), e.preventDefault();
  });
})(jQuery), +(function (t) {
  "use strict";var e = function e(_e, i) {
    this.$element = t(_e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this));
  };e.DEFAULTS = { interval: 5000, pause: "hover", wrap: !0 }, e.prototype.cycle = function (e) {
    return (e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this);
  }, e.prototype.getActiveIndex = function () {
    return (this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active));
  }, e.prototype.to = function (e) {
    var i = this,
        a = this.getActiveIndex();return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      i.to(e);
    }) : a == e ? this.pause().cycle() : this.slide(e > a ? "next" : "prev", t(this.$items[e]));
  }, e.prototype.pause = function (e) {
    return (e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this);
  }, e.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, e.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, e.prototype.slide = function (e, i) {
    var a = this.$element.find(".item.active"),
        s = i || a[e](),
        n = this.interval,
        o = "next" == e ? "left" : "right",
        l = "next" == e ? "first" : "last",
        r = this;if (!s.length) {
      if (!this.options.wrap) return;s = this.$element.find(".item")[l]();
    }if (s.hasClass("active")) return this.sliding = !1;var h = t.Event("slide.bs.carousel", { relatedTarget: s[0], direction: o });return (this.$element.trigger(h), h.isDefaultPrevented() ? void 0 : (this.sliding = !0, n && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
      var e = t(r.$indicators.children()[r.getActiveIndex()]);e && e.addClass("active");
    })), t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, a.addClass(o), s.addClass(o), a.one(t.support.transition.end, function () {
      s.removeClass([e, o].join(" ")).addClass("active"), a.removeClass(["active", o].join(" ")), r.sliding = !1, setTimeout(function () {
        r.$element.trigger("slid.bs.carousel");
      }, 0);
    }).emulateTransitionEnd(1000 * a.css("transition-duration").slice(0, -1))) : (a.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), n && this.cycle(), this));
  };var i = t.fn.carousel;t.fn.carousel = function (i) {
    return this.each(function () {
      var a = t(this),
          s = a.data("bs.carousel"),
          n = t.extend({}, e.DEFAULTS, a.data(), "object" == typeof i && i),
          o = "string" == typeof i ? i : n.slide;s || a.data("bs.carousel", s = new e(this, n)), "number" == typeof i ? s.to(i) : o ? s[o]() : n.interval && s.pause().cycle();
    });
  }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
    return (t.fn.carousel = i, this);
  }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
    var i,
        a = t(this),
        s = t(a.attr("data-target") || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
        n = t.extend({}, s.data(), a.data()),
        o = a.attr("data-slide-to");o && (n.interval = !1), s.carousel(n), (o = a.attr("data-slide-to")) && s.data("bs.carousel").to(o), e.preventDefault();
  }), t(window).on("load", function () {
    t("[data-ride=\"carousel\"]").each(function () {
      var e = t(this);e.carousel(e.data());
    });
  });
})(jQuery), +(function (t) {
  "use strict";var e = function e(i, a) {
    this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, a), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle();
  };e.DEFAULTS = { toggle: !0 }, e.prototype.dimension = function () {
    var t = this.$element.hasClass("width");return t ? "width" : "height";
  }, e.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e = t.Event("show.bs.collapse");if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
        var i = this.$parent && this.$parent.find("> .panel > .in");if (i && i.length) {
          var a = i.data("bs.collapse");if (a && a.transitioning) return;i.collapse("hide"), a || i.data("bs.collapse", null);
        }var s = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;var n = function n() {
          this.$element.removeClass("collapsing").addClass("collapse in")[s]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
        };if (!t.support.transition) return n.call(this);var o = t.camelCase(["scroll", s].join("-"));this.$element.one(t.support.transition.end, t.proxy(n, this)).emulateTransitionEnd(350)[s](this.$element[0][o]);
      }
    }
  }, e.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
        var i = this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;var a = function a() {
          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        };return t.support.transition ? (this.$element[i](0).one(t.support.transition.end, t.proxy(a, this)).emulateTransitionEnd(350), void 0) : a.call(this);
      }
    }
  }, e.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  };var i = t.fn.collapse;t.fn.collapse = function (i) {
    return this.each(function () {
      var a = t(this),
          s = a.data("bs.collapse"),
          n = t.extend({}, e.DEFAULTS, a.data(), "object" == typeof i && i);!s && n.toggle && "show" == i && (i = !i), s || a.data("bs.collapse", s = new e(this, n)), "string" == typeof i && s[i]();
    });
  }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
    return (t.fn.collapse = i, this);
  }, t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (e) {
    var i,
        a = t(this),
        s = a.attr("data-target") || e.preventDefault() || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
        n = t(s),
        o = n.data("bs.collapse"),
        l = o ? "toggle" : a.data(),
        r = a.attr("data-parent"),
        h = r && t(r);o && o.transitioning || (h && h.find("[data-toggle=collapse][data-parent=\"" + r + "\"]").not(a).addClass("collapsed"), a[n.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), n.collapse(l);
  });
})(jQuery), +(function (t) {
  "use strict";function e(e) {
    t(a).remove(), t(s).each(function () {
      var a = i(t(this)),
          s = { relatedTarget: this };a.hasClass("open") && (a.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || a.removeClass("open").trigger("hidden.bs.dropdown", s));
    });
  }function i(e) {
    var i = e.attr("data-target");i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));var a = i && t(i);return a && a.length ? a : e.parent();
  }var a = ".dropdown-backdrop",
      s = "[data-toggle=dropdown]",
      n = function n(e) {
    t(e).on("click.bs.dropdown", this.toggle);
  };n.prototype.toggle = function (a) {
    var s = t(this);if (!s.is(".disabled, :disabled")) {
      var n = i(s),
          o = n.hasClass("open");if ((e(), !o)) {
        "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t("<div class=\"dropdown-backdrop\"/>").insertAfter(t(this)).on("click", e);var l = { relatedTarget: this };if ((n.trigger(a = t.Event("show.bs.dropdown", l)), a.isDefaultPrevented())) return;n.toggleClass("open").trigger("shown.bs.dropdown", l), s.focus();
      }return !1;
    }
  }, n.prototype.keydown = function (e) {
    if (/(38|40|27)/.test(e.keyCode)) {
      var a = t(this);if ((e.preventDefault(), e.stopPropagation(), !a.is(".disabled, :disabled"))) {
        var n = i(a),
            o = n.hasClass("open");if (!o || o && 27 == e.keyCode) return (27 == e.which && n.find(s).focus(), a.click());var l = " li:not(.divider):visible a",
            r = n.find("[role=menu]" + l + ", [role=listbox]" + l);if (r.length) {
          var h = r.index(r.filter(":focus"));38 == e.keyCode && h > 0 && h--, 40 == e.keyCode && h < r.length - 1 && h++, ~h || (h = 0), r.eq(h).focus();
        }
      }
    }
  };var o = t.fn.dropdown;t.fn.dropdown = function (e) {
    return this.each(function () {
      var i = t(this),
          a = i.data("bs.dropdown");a || i.data("bs.dropdown", a = new n(this)), "string" == typeof e && a[e].call(i);
    });
  }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function () {
    return (t.fn.dropdown = o, this);
  }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation();
  }).on("click.bs.dropdown.data-api", s, n.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ", [role=menu], [role=listbox]", n.prototype.keydown);
})(jQuery), +(function (t) {
  "use strict";var e = function e(_e2, i) {
    this.options = i, this.$element = t(_e2), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, e.prototype.toggle = function (t) {
    return this[this.isShown ? "hide" : "show"](t);
  }, e.prototype.show = function (e) {
    var i = this,
        a = t.Event("show.bs.modal", { relatedTarget: e });this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", "[data-dismiss=\"modal\"]", t.proxy(this.hide, this)), this.backdrop(function () {
      var a = t.support.transition && i.$element.hasClass("fade");i.$element.parent().length || i.$element.appendTo(document.body), i.$element.show().scrollTop(0), a && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();var s = t.Event("shown.bs.modal", { relatedTarget: e });a ? i.$element.find(".modal-dialog").one(t.support.transition.end, function () {
        i.$element.focus().trigger(s);
      }).emulateTransitionEnd(300) : i.$element.focus().trigger(s);
    }));
  }, e.prototype.hide = function (e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
  }, e.prototype.enforceFocus = function () {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
      this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus();
    }, this));
  }, e.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
      27 == t.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
  }, e.prototype.hideModal = function () {
    var t = this;this.$element.hide(), this.backdrop(function () {
      t.removeBackdrop(), t.$element.trigger("hidden.bs.modal");
    });
  }, e.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, e.prototype.backdrop = function (e) {
    var i = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var a = t.support.transition && i;if ((this.$backdrop = t("<div class=\"modal-backdrop " + i + "\" />").appendTo(document.body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
        t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
      }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)) return;a ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e();
    } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e();
  };var i = t.fn.modal;t.fn.modal = function (i, a) {
    return this.each(function () {
      var s = t(this),
          n = s.data("bs.modal"),
          o = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i);n || s.data("bs.modal", n = new e(this, o)), "string" == typeof i ? n[i](a) : o.show && n.show(a);
    });
  }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
    return (t.fn.modal = i, this);
  }, t(document).on("click.bs.modal.data-api", "[data-toggle=\"modal\"]", function (e) {
    var i = t(this),
        a = i.attr("href"),
        s = t(i.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
        n = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(a) && a }, s.data(), i.data());i.is("a") && e.preventDefault(), s.modal(n, this).one("hide", function () {
      i.is(":visible") && i.focus();
    });
  }), t(document).on("show.bs.modal", ".modal", function () {
    t(document.body).addClass("modal-open");
  }).on("hidden.bs.modal", ".modal", function () {
    t(document.body).removeClass("modal-open");
  });
})(jQuery), +(function (t) {
  "use strict";var e = function e(t, _e3) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, _e3);
  };e.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: "<div class=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>", trigger: "hover focus", title: "", delay: 0, html: !1, container: !1 }, e.prototype.init = function (e, i, a) {
    this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(a);for (var s = this.options.trigger.split(" "), n = s.length; n--;) {
      var o = s[n];if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));else if ("manual" != o) {
        var l = "hover" == o ? "mouseenter" : "focusin",
            r = "hover" == o ? "mouseleave" : "focusout";this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, e.prototype.getDefaults = function () {
    return e.DEFAULTS;
  }, e.prototype.getOptions = function (e) {
    return (e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e);
  }, e.prototype.getDelegateOptions = function () {
    var e = {},
        i = this.getDefaults();return (this._options && t.each(this._options, function (t, a) {
      i[t] != a && (e[t] = a);
    }), e);
  }, e.prototype.enter = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);return (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? (i.timeout = setTimeout(function () {
      "in" == i.hoverState && i.show();
    }, i.options.delay.show), void 0) : i.show());
  }, e.prototype.leave = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);return (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? (i.timeout = setTimeout(function () {
      "out" == i.hoverState && i.hide();
    }, i.options.delay.hide), void 0) : i.hide());
  }, e.prototype.show = function () {
    var e = t.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      if ((this.$element.trigger(e), e.isDefaultPrevented())) return;var i = this,
          a = this.tip();this.setContent(), this.options.animation && a.addClass("fade");var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
          n = /\s?auto?\s?/i,
          o = n.test(s);o && (s = s.replace(n, "") || "top"), a.detach().css({ top: 0, left: 0, display: "block" }).addClass(s), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element);var l = this.getPosition(),
          r = a[0].offsetWidth,
          h = a[0].offsetHeight;if (o) {
        var c = this.$element.parent(),
            d = s,
            u = document.documentElement.scrollTop || document.body.scrollTop,
            p = "body" == this.options.container ? window.innerWidth : c.outerWidth(),
            f = "body" == this.options.container ? window.innerHeight : c.outerHeight(),
            m = "body" == this.options.container ? 0 : c.offset().left;s = "bottom" == s && l.top + l.height + h - u > f ? "top" : "top" == s && l.top - u - h < 0 ? "bottom" : "right" == s && l.right + r > p ? "left" : "left" == s && l.left - r < m ? "right" : s, a.removeClass(d).addClass(s);
      }var v = this.getCalculatedOffset(s, l, r, h);this.applyPlacement(v, s), this.hoverState = null;var g = function g() {
        i.$element.trigger("shown.bs." + i.type);
      };t.support.transition && this.$tip.hasClass("fade") ? a.one(t.support.transition.end, g).emulateTransitionEnd(150) : g();
    }
  }, e.prototype.applyPlacement = function (e, i) {
    var a,
        s = this.tip(),
        n = s[0].offsetWidth,
        o = s[0].offsetHeight,
        l = parseInt(s.css("margin-top"), 10),
        r = parseInt(s.css("margin-left"), 10);isNaN(l) && (l = 0), isNaN(r) && (r = 0), e.top = e.top + l, e.left = e.left + r, t.offset.setOffset(s[0], t.extend({ using: function using(t) {
        s.css({ top: Math.round(t.top), left: Math.round(t.left) });
      } }, e), 0), s.addClass("in");var h = s[0].offsetWidth,
        c = s[0].offsetHeight;if (("top" == i && c != o && (a = !0, e.top = e.top + o - c), /bottom|top/.test(i))) {
      var d = 0;e.left < 0 && (d = -2 * e.left, e.left = 0, s.offset(e), h = s[0].offsetWidth, c = s[0].offsetHeight), this.replaceArrow(d - n + h, h, "left");
    } else this.replaceArrow(c - o, c, "top");a && s.offset(e);
  }, e.prototype.replaceArrow = function (t, e, i) {
    this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "");
  }, e.prototype.setContent = function () {
    var t = this.tip(),
        e = this.getTitle();t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
  }, e.prototype.hide = function () {
    function e() {
      "in" != i.hoverState && a.detach(), i.$element.trigger("hidden.bs." + i.type);
    }var i = this,
        a = this.tip(),
        s = t.Event("hide.bs." + this.type);return (this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (a.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? a.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this));
  }, e.prototype.fixTitle = function () {
    var t = this.$element;(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
  }, e.prototype.hasContent = function () {
    return this.getTitle();
  }, e.prototype.getPosition = function () {
    var e = this.$element[0];return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : { width: e.offsetWidth, height: e.offsetHeight }, this.$element.offset());
  }, e.prototype.getCalculatedOffset = function (t, e, i, a) {
    return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - a, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - a / 2, left: e.left - i } : { top: e.top + e.height / 2 - a / 2, left: e.left + e.width };
  }, e.prototype.getTitle = function () {
    var t,
        e = this.$element,
        i = this.options;return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title);
  }, e.prototype.tip = function () {
    return this.$tip = this.$tip || t(this.options.template);
  }, e.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, e.prototype.validate = function () {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
  }, e.prototype.enable = function () {
    this.enabled = !0;
  }, e.prototype.disable = function () {
    this.enabled = !1;
  }, e.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, e.prototype.toggle = function (e) {
    var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
  }, e.prototype.destroy = function () {
    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
  };var i = t.fn.tooltip;t.fn.tooltip = function (i) {
    return this.each(function () {
      var a = t(this),
          s = a.data("bs.tooltip"),
          n = "object" == typeof i && i;(s || "destroy" != i) && (s || a.data("bs.tooltip", s = new e(this, n)), "string" == typeof i && s[i]());
    });
  }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
    return (t.fn.tooltip = i, this);
  };
})(jQuery), +(function (t) {
  "use strict";var e = function e(t, _e4) {
    this.init("popover", t, _e4);
  };if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: "<div class=\"popover\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>" }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
    return e.DEFAULTS;
  }, e.prototype.setContent = function () {
    var t = this.tip(),
        e = this.getTitle(),
        i = this.getContent();t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
  }, e.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, e.prototype.getContent = function () {
    var t = this.$element,
        e = this.options;return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
  }, e.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  }, e.prototype.tip = function () {
    return (this.$tip || (this.$tip = t(this.options.template)), this.$tip);
  };var i = t.fn.popover;t.fn.popover = function (i) {
    return this.each(function () {
      var a = t(this),
          s = a.data("bs.popover"),
          n = "object" == typeof i && i;(s || "destroy" != i) && (s || a.data("bs.popover", s = new e(this, n)), "string" == typeof i && s[i]());
    });
  }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
    return (t.fn.popover = i, this);
  };
})(jQuery), +(function (t) {
  "use strict";function e(i, a) {
    var s,
        n = t.proxy(this.process, this);this.$element = t(i).is("body") ? t(window) : t(i), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", n), this.options = t.extend({}, e.DEFAULTS, a), this.selector = (this.options.target || (s = t(i).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process();
  }e.DEFAULTS = { offset: 10 }, e.prototype.refresh = function () {
    var e = this.$element[0] == window ? "offset" : "position";this.offsets = t([]), this.targets = t([]);var i = this;this.$body.find(this.selector).map(function () {
      var a = t(this),
          s = a.data("target") || a.attr("href"),
          n = /^#./.test(s) && t(s);return n && n.length && n.is(":visible") && [[n[e]().top + (!t.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), s]] || null;
    }).sort(function (t, e) {
      return t[0] - e[0];
    }).each(function () {
      i.offsets.push(this[0]), i.targets.push(this[1]);
    });
  }, e.prototype.process = function () {
    var t,
        e = this.$scrollElement.scrollTop() + this.options.offset,
        i = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        a = i - this.$scrollElement.height(),
        s = this.offsets,
        n = this.targets,
        o = this.activeTarget;if (e >= a) return o != (t = n.last()[0]) && this.activate(t);if (o && e <= s[0]) return o != (t = n[0]) && this.activate(t);for (t = s.length; t--;) o != n[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(n[t]);
  }, e.prototype.activate = function (e) {
    this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");var i = this.selector + "[data-target=\"" + e + "\"]," + this.selector + "[href=\"" + e + "\"]",
        a = t(i).parents("li").addClass("active");a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")), a.trigger("activate.bs.scrollspy");
  };var i = t.fn.scrollspy;t.fn.scrollspy = function (i) {
    return this.each(function () {
      var a = t(this),
          s = a.data("bs.scrollspy"),
          n = "object" == typeof i && i;s || a.data("bs.scrollspy", s = new e(this, n)), "string" == typeof i && s[i]();
    });
  }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
    return (t.fn.scrollspy = i, this);
  }, t(window).on("load", function () {
    t("[data-spy=\"scroll\"]").each(function () {
      var e = t(this);e.scrollspy(e.data());
    });
  });
})(jQuery), +(function (t) {
  "use strict";var e = function e(_e5) {
    this.element = t(_e5);
  };e.prototype.show = function () {
    var e = this.element,
        i = e.closest("ul:not(.dropdown-menu)"),
        a = e.data("target");if ((a || (a = e.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active"))) {
      var s = i.find(".active:last a")[0],
          n = t.Event("show.bs.tab", { relatedTarget: s });if ((e.trigger(n), !n.isDefaultPrevented())) {
        var o = t(a);this.activate(e.parent("li"), i), this.activate(o, o.parent(), function () {
          e.trigger({ type: "shown.bs.tab", relatedTarget: s });
        });
      }
    }
  }, e.prototype.activate = function (e, i, a) {
    function s() {
      n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), a && a();
    }var n = i.find("> .active"),
        o = a && t.support.transition && n.hasClass("fade");o ? n.one(t.support.transition.end, s).emulateTransitionEnd(150) : s(), n.removeClass("in");
  };var i = t.fn.tab;t.fn.tab = function (i) {
    return this.each(function () {
      var a = t(this),
          s = a.data("bs.tab");s || a.data("bs.tab", s = new e(this)), "string" == typeof i && s[i]();
    });
  }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
    return (t.fn.tab = i, this);
  }, t(document).on("click.bs.tab.data-api", "[data-toggle=\"tab\"], [data-toggle=\"pill\"]", function (e) {
    e.preventDefault(), t(this).tab("show");
  });
})(jQuery), +(function (t) {
  "use strict";var e = function e(i, a) {
    this.options = t.extend({}, e.DEFAULTS, a), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
  };e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = { offset: 0 }, e.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t = this.$window.scrollTop(),
        i = this.$element.offset();return this.pinnedOffset = i.top - t;
  }, e.prototype.checkPositionWithEventLoop = function () {
    setTimeout(t.proxy(this.checkPosition, this), 1);
  }, e.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var i = t(document).height(),
          a = this.$window.scrollTop(),
          s = this.$element.offset(),
          n = this.options.offset,
          o = n.top,
          l = n.bottom;"top" == this.affixed && (s.top += a), "object" != typeof n && (l = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof l && (l = n.bottom(this.$element));var r = null != this.unpin && a + this.unpin <= s.top ? !1 : null != l && s.top + this.$element.height() >= i - l ? "bottom" : null != o && o >= a ? "top" : !1;if (this.affixed !== r) {
        this.unpin && this.$element.css("top", "");var h = "affix" + (r ? "-" + r : ""),
            c = t.Event(h + ".bs.affix");this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(h).trigger(t.Event(h.replace("affix", "affixed"))), "bottom" == r && this.$element.offset({ top: i - l - this.$element.height() }));
      }
    }
  };var i = t.fn.affix;t.fn.affix = function (i) {
    return this.each(function () {
      var a = t(this),
          s = a.data("bs.affix"),
          n = "object" == typeof i && i;s || a.data("bs.affix", s = new e(this, n)), "string" == typeof i && s[i]();
    });
  }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
    return (t.fn.affix = i, this);
  }, t(window).on("load", function () {
    t("[data-spy=\"affix\"]").each(function () {
      var e = t(this),
          i = e.data();i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.affix(i);
    });
  });
})(jQuery);
!(function (t) {
  "undefined" == typeof t.fn.each2 && t.extend(t.fn, { each2: function each2(e) {
      for (var i = t([0]), s = -1, a = this.length; ++s < a && (i.context = i[0] = this[s]) && e.call(i[0], s, i) !== !1;);return this;
    } });
})(jQuery), (function (t, e) {
  "use strict";function i(t) {
    var e, i, s, a;if (!t || t.length < 1) return t;for (e = "", i = 0, s = t.length; s > i; i++) a = t.charAt(i), e += J[a] || a;return e;
  }function s(t, e) {
    for (var i = 0, s = e.length; s > i; i += 1) if (n(t, e[i])) return i;return -1;
  }function a() {
    var e = t($);e.appendTo("body");var i = { width: e.width() - e[0].clientWidth, height: e.height() - e[0].clientHeight };return (e.remove(), i);
  }function n(t, i) {
    return t === i ? !0 : t === e || i === e ? !1 : null === t || null === i ? !1 : t.constructor === String ? t + "" == i + "" : i.constructor === String ? i + "" == t + "" : !1;
  }function o(e, i) {
    var s, a, n;if (null === e || e.length < 1) return [];for (s = e.split(i), a = 0, n = s.length; n > a; a += 1) s[a] = t.trim(s[a]);return s;
  }function r(t) {
    return t.outerWidth(!1) - t.width();
  }function l(i) {
    var s = "keyup-change-value";i.on("keydown", function () {
      t.data(i, s) === e && t.data(i, s, i.val());
    }), i.on("keyup", function () {
      var a = t.data(i, s);a !== e && i.val() !== a && (t.removeData(i, s), i.trigger("keyup-change"));
    });
  }function h(i) {
    i.on("mousemove", function (i) {
      var s = U;(s === e || s.x !== i.pageX || s.y !== i.pageY) && t(i.target).trigger("mousemove-filtered", i);
    });
  }function c(t, i, s) {
    s = s || e;var a;return function () {
      var e = arguments;window.clearTimeout(a), a = window.setTimeout(function () {
        i.apply(s, e);
      }, t);
    };
  }function d(t) {
    var e,
        i = !1;return function () {
      return (i === !1 && (e = t(), i = !0), e);
    };
  }function u(t, e) {
    var i = c(t, function (t) {
      e.trigger("scroll-debounced", t);
    });e.on("scroll", function (t) {
      s(t.target, e.get()) >= 0 && i(t);
    });
  }function p(t) {
    t[0] !== document.activeElement && window.setTimeout(function () {
      var e,
          i = t[0],
          s = t.val().length;t.focus(), t.is(":visible") && i === document.activeElement && (i.setSelectionRange ? i.setSelectionRange(s, s) : i.createTextRange && (e = i.createTextRange(), e.collapse(!1), e.select()));
    }, 0);
  }function f(e) {
    e = t(e)[0];var i = 0,
        s = 0;if ("selectionStart" in e) i = e.selectionStart, s = e.selectionEnd - i;else if ("selection" in document) {
      e.focus();var a = document.selection.createRange();s = document.selection.createRange().text.length, a.moveStart("character", -e.value.length), i = a.text.length - s;
    }return { offset: i, length: s };
  }function m(t) {
    t.preventDefault(), t.stopPropagation();
  }function g(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }function v(e) {
    if (!I) {
      var i = e[0].currentStyle || window.getComputedStyle(e[0], null);I = t(document.createElement("div")).css({ position: "absolute", left: "-10000px", top: "-10000px", display: "none", fontSize: i.fontSize, fontFamily: i.fontFamily, fontStyle: i.fontStyle, fontWeight: i.fontWeight, letterSpacing: i.letterSpacing, textTransform: i.textTransform, whiteSpace: "nowrap" }), I.attr("class", "select2-sizer"), t("body").append(I);
    }return (I.text(e.val()), I.width());
  }function y(e, i, s) {
    var a,
        n,
        o = [];a = e.attr("class"), a && (a = "" + a, t(a.split(" ")).each2(function () {
      0 === this.indexOf("select2-") && o.push(this);
    })), a = i.attr("class"), a && (a = "" + a, t(a.split(" ")).each2(function () {
      0 !== this.indexOf("select2-") && (n = s(this), n && o.push(this));
    })), e.attr("class", o.join(" "));
  }function b(t, e, s, a) {
    var n = i(t.toUpperCase()).indexOf(i(e.toUpperCase())),
        o = e.length;return 0 > n ? (s.push(a(t)), void 0) : (s.push(a(t.substring(0, n))), s.push("<span class='select2-match'>"), s.push(a(t.substring(n, n + o))), s.push("</span>"), s.push(a(t.substring(n + o, t.length))), void 0);
  }function S(t) {
    var e = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;", "/": "&#47;" };return String(t).replace(/[&<>"'\/\\]/g, function (t) {
      return e[t];
    });
  }function w(i) {
    var s,
        a = null,
        n = i.quietMillis || 100,
        o = i.url,
        r = this;return function (l) {
      window.clearTimeout(s), s = window.setTimeout(function () {
        var s = i.data,
            n = o,
            h = i.transport || t.fn.select2.ajaxDefaults.transport,
            c = { type: i.type || "GET", cache: i.cache || !1, jsonpCallback: i.jsonpCallback || e, dataType: i.dataType || "json" },
            d = t.extend({}, t.fn.select2.ajaxDefaults.params, c);s = s ? s.call(r, l.term, l.page, l.context) : null, n = "function" == typeof n ? n.call(r, l.term, l.page, l.context) : n, a && a.abort(), i.params && (t.isFunction(i.params) ? t.extend(d, i.params.call(r)) : t.extend(d, i.params)), t.extend(d, { url: n, dataType: i.dataType, data: s, success: function success(t) {
            var e = i.results(t, l.page);l.callback(e);
          } }), a = h.call(r, d);
      }, n);
    };
  }function k(e) {
    var i,
        s,
        a = e,
        n = function n(t) {
      return "" + t.text;
    };t.isArray(a) && (s = a, a = { results: s }), t.isFunction(a) === !1 && (s = a, a = function () {
      return s;
    });var o = a();return (o.text && (n = o.text, t.isFunction(n) || (i = o.text, n = function (t) {
      return t[i];
    })), function (e) {
      var i,
          s = e.term,
          o = { results: [] };return "" === s ? (e.callback(a()), void 0) : (i = function (a, o) {
        var r, l;if ((a = a[0], a.children)) {
          r = {};for (l in a) a.hasOwnProperty(l) && (r[l] = a[l]);r.children = [], t(a.children).each2(function (t, e) {
            i(e, r.children);
          }), (r.children.length || e.matcher(s, n(r), a)) && o.push(r);
        } else e.matcher(s, n(a), a) && o.push(a);
      }, t(a().results).each2(function (t, e) {
        i(e, o.results);
      }), e.callback(o), void 0);
    });
  }function C(i) {
    var s = t.isFunction(i);return function (a) {
      var n = a.term,
          o = { results: [] };t(s ? i() : i).each(function () {
        var t = this.text !== e,
            i = t ? this.text : this;("" === n || a.matcher(n, i)) && o.results.push(t ? this : { id: this, text: this });
      }), a.callback(o);
    };
  }function M(e, i) {
    if (t.isFunction(e)) return !0;if (!e) return !1;throw new Error(i + " must be a function or a falsy value");
  }function D(e) {
    return t.isFunction(e) ? e() : e;
  }function T(e) {
    var i = 0;return (t.each(e, function (t, e) {
      e.children ? i += T(e.children) : i++;
    }), i);
  }function x(t, i, s, a) {
    var o,
        r,
        l,
        h,
        c,
        d = t,
        u = !1;if (!a.createSearchChoice || !a.tokenSeparators || a.tokenSeparators.length < 1) return e;for (;;) {
      for (r = -1, l = 0, h = a.tokenSeparators.length; h > l && (c = a.tokenSeparators[l], r = t.indexOf(c), !(r >= 0)); l++);if (0 > r) break;if ((o = t.substring(0, r), t = t.substring(r + c.length), o.length > 0 && (o = a.createSearchChoice.call(this, o, i), o !== e && null !== o && a.id(o) !== e && null !== a.id(o)))) {
        for (u = !1, l = 0, h = i.length; h > l; l++) if (n(a.id(o), a.id(i[l]))) {
          u = !0;break;
        }u || s(o);
      }
    }return d !== t ? t : void 0;
  }function P(e, i) {
    var s = function s() {};return (s.prototype = new e(), s.prototype.constructor = s, s.prototype.parent = e.prototype, s.prototype = t.extend(s.prototype, i), s);
  }if (window.Select2 === e) {
    var A,
        E,
        F,
        L,
        O,
        I,
        j,
        N,
        U = { x: 0, y: 0 },
        A = { TAB: 9, ENTER: 13, ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SHIFT: 16, CTRL: 17, ALT: 18, PAGE_UP: 33, PAGE_DOWN: 34, HOME: 36, END: 35, BACKSPACE: 8, DELETE: 46, isArrow: function isArrow(t) {
        switch (t = t.which ? t.which : t) {case A.LEFT:case A.RIGHT:case A.UP:case A.DOWN:
            return !0;}return !1;
      }, isControl: function isControl(t) {
        var e = t.which;switch (e) {case A.SHIFT:case A.CTRL:case A.ALT:
            return !0;}return t.metaKey ? !0 : !1;
      }, isFunctionKey: function isFunctionKey(t) {
        return (t = t.which ? t.which : t, t >= 112 && 123 >= t);
      } },
        $ = "<div class='select2-measure-scrollbar'></div>",
        J = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z" };j = t(document), O = (function () {
      var t = 1;return function () {
        return t++;
      };
    })(), j.on("mousemove", function (t) {
      U.x = t.pageX, U.y = t.pageY;
    }), E = P(Object, { bind: function bind(t) {
        var e = this;return function () {
          t.apply(e, arguments);
        };
      }, init: function init(i) {
        var s,
            n,
            o,
            r,
            c = ".select2-results";this.opts = i = this.prepareOpts(i), this.id = i.id, i.element.data("select2") !== e && null !== i.element.data("select2") && i.element.data("select2").destroy(), this.container = this.createContainer(), this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + O()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = d(function () {
          return i.element.closest("body");
        }), y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", i.element.attr("style")), this.container.css(D(i.containerCss)), this.container.addClass(D(i.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", m), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(D(i.dropdownCssClass)), this.dropdown.data("select2", this), this.dropdown.on("click", m), this.results = s = this.container.find(c), this.search = n = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", m), h(this.results), this.dropdown.on("mousemove-filtered touchstart touchmove touchend", c, this.bind(this.highlightUnderEvent)), u(80, this.results), this.dropdown.on("scroll-debounced", c, this.bind(this.loadMoreIfNeeded)), t(this.container).on("change", ".select2-input", function (t) {
          t.stopPropagation();
        }), t(this.dropdown).on("change", ".select2-input", function (t) {
          t.stopPropagation();
        }), t.fn.mousewheel && s.mousewheel(function (t, e, i, a) {
          var n = s.scrollTop();a > 0 && 0 >= n - a ? (s.scrollTop(0), m(t)) : 0 > a && s.get(0).scrollHeight - s.scrollTop() + a <= s.height() && (s.scrollTop(s.get(0).scrollHeight - s.height()), m(t));
        }), l(n), n.on("keyup-change input paste", this.bind(this.updateResults)), n.on("focus", function () {
          n.addClass("select2-focused");
        }), n.on("blur", function () {
          n.removeClass("select2-focused");
        }), this.dropdown.on("mouseup", c, this.bind(function (e) {
          t(e.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(e), this.selectHighlighted(e));
        })), this.dropdown.on("click mouseup mousedown", function (t) {
          t.stopPropagation();
        }), t.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== i.maximumInputLength && this.search.attr("maxlength", i.maximumInputLength);var o = i.element.prop("disabled");o === e && (o = !1), this.enable(!o);var r = i.element.prop("readonly");r === e && (r = !1), this.readonly(r), N = N || a(), this.autofocus = i.element.prop("autofocus"), i.element.prop("autofocus", !1), this.autofocus && this.focus(), this.nextSearchTerm = e;
      }, destroy: function destroy() {
        var t = this.opts.element,
            i = t.data("select2");this.close(), this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), i !== e && (i.container.remove(), i.dropdown.remove(), t.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? t.attr({ tabindex: this.elementTabIndex }) : t.removeAttr("tabindex"), t.show());
      }, optionToData: function optionToData(t) {
        return t.is("option") ? { id: t.prop("value"), text: t.text(), element: t.get(), css: t.attr("class"), disabled: t.prop("disabled"), locked: n(t.attr("locked"), "locked") || n(t.data("locked"), !0) } : t.is("optgroup") ? { text: t.attr("label"), children: [], element: t.get(), css: t.attr("class") } : void 0;
      }, prepareOpts: function prepareOpts(i) {
        var s,
            a,
            r,
            l,
            h = this;if ((s = i.element, "select" === s.get(0).tagName.toLowerCase() && (this.select = a = i.element), a && t.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
          if (this in i) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
        }), i = t.extend({}, { populateResults: function populateResults(s, a, n) {
            var o,
                r = this.opts.id;o = function (s, a, l) {
              var c, d, u, p, f, m, g, v, y, b;for (s = i.sortResults(s, a, n), c = 0, d = s.length; d > c; c += 1) u = s[c], f = u.disabled === !0, p = !f && r(u) !== e, m = u.children && u.children.length > 0, g = t("<li></li>"), g.addClass("select2-results-dept-" + l), g.addClass("select2-result"), g.addClass(p ? "select2-result-selectable" : "select2-result-unselectable"), f && g.addClass("select2-disabled"), m && g.addClass("select2-result-with-children"), g.addClass(h.opts.formatResultCssClass(u)), v = t(document.createElement("div")), v.addClass("select2-result-label"), b = i.formatResult(u, v, n, h.opts.escapeMarkup), b !== e && v.html(b), g.append(v), m && (y = t("<ul></ul>"), y.addClass("select2-result-sub"), o(u.children, y, l + 1), g.append(y)), g.data("select2-data", u), a.append(g);
            }, o(a, s, 0);
          } }, t.fn.select2.defaults, i), "function" != typeof i.id && (r = i.id, i.id = function (t) {
          return t[r];
        }), t.isArray(i.element.data("select2Tags")))) {
          if ("tags" in i) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");i.tags = i.element.data("select2Tags");
        }if ((a ? (i.query = this.bind(function (t) {
          var i,
              a,
              n,
              o = { results: [], more: !1 },
              r = t.term;n = function (e, i) {
            var s;e.is("option") ? t.matcher(r, e.text(), e) && i.push(h.optionToData(e)) : e.is("optgroup") && (s = h.optionToData(e), e.children().each2(function (t, e) {
              n(e, s.children);
            }), s.children.length > 0 && i.push(s));
          }, i = s.children(), this.getPlaceholder() !== e && i.length > 0 && (a = this.getPlaceholderOption(), a && (i = i.not(a))), i.each2(function (t, e) {
            n(e, o.results);
          }), t.callback(o);
        }), i.id = function (t) {
          return t.id;
        }, i.formatResultCssClass = function (t) {
          return t.css;
        }) : "query" in i || ("ajax" in i ? (l = i.element.data("ajax-url"), l && l.length > 0 && (i.ajax.url = l), i.query = w.call(i.element, i.ajax)) : "data" in i ? i.query = k(i.data) : "tags" in i && (i.query = C(i.tags), i.createSearchChoice === e && (i.createSearchChoice = function (e) {
          return { id: t.trim(e), text: t.trim(e) };
        }), i.initSelection === e && (i.initSelection = function (e, s) {
          var a = [];t(o(e.val(), i.separator)).each(function () {
            var e = { id: this, text: this },
                s = i.tags;t.isFunction(s) && (s = s()), t(s).each(function () {
              return n(this.id, e.id) ? (e = this, !1) : void 0;
            }), a.push(e);
          }), s(a);
        }))), "function" != typeof i.query)) throw "query function not defined for Select2 " + i.element.attr("id");return i;
      }, monitorSource: function monitorSource() {
        var t,
            i = this.opts.element;i.on("change.select2", this.bind(function () {
          this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection();
        })), t = this.bind(function () {
          var t,
              s = i.prop("disabled");s === e && (s = !1), this.enable(!s);var t = i.prop("readonly");t === e && (t = !1), this.readonly(t), y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(D(this.opts.containerCssClass)), y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(D(this.opts.dropdownCssClass));
        }), i.on("propertychange.select2 DOMAttrModified.select2", t), this.mutationCallback === e && (this.mutationCallback = function (e) {
          e.forEach(t);
        }), "undefined" != typeof WebKitMutationObserver && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new WebKitMutationObserver(this.mutationCallback), this.propertyObserver.observe(i.get(0), { attributes: !0, subtree: !1 }));
      }, triggerSelect: function triggerSelect(e) {
        var i = t.Event("select2-selecting", { val: this.id(e), object: e });return (this.opts.element.trigger(i), !i.isDefaultPrevented());
      }, triggerChange: function triggerChange(e) {
        e = e || {}, e = t.extend({}, e, { type: "change", val: this.val() }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(e), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur();
      }, isInterfaceEnabled: function isInterfaceEnabled() {
        return this.enabledInterface === !0;
      }, enableInterface: function enableInterface() {
        var t = this._enabled && !this._readonly,
            e = !t;return t === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", e), this.close(), this.enabledInterface = t, !0);
      }, enable: function enable(t) {
        t === e && (t = !0), this._enabled !== t && (this._enabled = t, this.opts.element.prop("disabled", !t), this.enableInterface());
      }, disable: function disable() {
        this.enable(!1);
      }, readonly: function readonly(t) {
        return (t === e && (t = !1), this._readonly === t ? !1 : (this._readonly = t, this.opts.element.prop("readonly", t), this.enableInterface(), !0));
      }, opened: function opened() {
        return this.container.hasClass("select2-dropdown-open");
      }, positionDropdown: function positionDropdown() {
        var e,
            i,
            s,
            a,
            n = this.dropdown,
            o = this.container.offset(),
            r = this.container.outerHeight(!1),
            l = this.container.outerWidth(!1),
            h = n.outerHeight(!1),
            c = t(window).scrollLeft() + t(window).width(),
            d = t(window).scrollTop() + t(window).height(),
            u = o.top + r,
            p = o.left,
            f = d >= u + h,
            m = o.top - h >= this.body().scrollTop(),
            g = n.outerWidth(!1),
            v = c >= p + g,
            y = n.hasClass("select2-drop-above");this.opts.dropdownAutoWidth ? (a = t(".select2-results", n)[0], n.addClass("select2-drop-auto-width"), n.css("width", ""), g = n.outerWidth(!1) + (a.scrollHeight === a.clientHeight ? 0 : N.width), g > l ? l = g : g = l, v = c >= p + g) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body().css("position") && (e = this.body().offset(), u -= e.top, p -= e.left), y ? (i = !0, !m && f && (i = !1)) : (i = !1, !f && m && (i = !0)), v || (p = o.left + l - g), i ? (u = o.top - h, this.container.addClass("select2-drop-above"), n.addClass("select2-drop-above")) : (this.container.removeClass("select2-drop-above"), n.removeClass("select2-drop-above")), s = t.extend({ top: u, left: p, width: l }, D(this.opts.dropdownCss)), n.css(s);
      }, shouldOpen: function shouldOpen() {
        var e;return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (e = t.Event("select2-opening"), this.opts.element.trigger(e), !e.isDefaultPrevented());
      }, clearDropdownAlignmentPreference: function clearDropdownAlignmentPreference() {
        this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above");
      }, open: function open() {
        return this.shouldOpen() ? (this.opening(), !0) : !1;
      }, opening: function opening() {
        var e,
            i = this.containerId,
            s = "scroll." + i,
            a = "resize." + i,
            n = "orientationchange." + i;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), e = t("#select2-drop-mask"), 0 == e.length && (e = t(document.createElement("div")), e.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), e.hide(), e.appendTo(this.body()), e.on("mousedown touchstart click", function (e) {
          var i,
              s = t("#select2-drop");s.length > 0 && (i = s.data("select2"), i.opts.selectOnBlur && i.selectHighlighted({ noFocus: !0 }), i.close({ focus: !1 }), e.preventDefault(), e.stopPropagation());
        })), this.dropdown.prev()[0] !== e[0] && this.dropdown.before(e), t("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), e.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");var o = this;this.container.parents().add(window).each(function () {
          t(this).on(a + " " + s + " " + n, function () {
            o.positionDropdown();
          });
        });
      }, close: function close() {
        if (this.opened()) {
          var e = this.containerId,
              i = "scroll." + e,
              s = "resize." + e,
              a = "orientationchange." + e;this.container.parents().add(window).each(function () {
            t(this).off(i).off(s).off(a);
          }), this.clearDropdownAlignmentPreference(), t("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(t.Event("select2-close"));
        }
      }, externalSearch: function externalSearch(t) {
        this.open(), this.search.val(t), this.updateResults(!1);
      }, clearSearch: function clearSearch() {}, getMaximumSelectionSize: function getMaximumSelectionSize() {
        return D(this.opts.maximumSelectionSize);
      }, ensureHighlightVisible: function ensureHighlightVisible() {
        var e,
            i,
            s,
            a,
            n,
            o,
            r,
            l = this.results;if ((i = this.highlight(), !(0 > i))) {
          if (0 == i) return (l.scrollTop(0), void 0);e = this.findHighlightableChoices().find(".select2-result-label"), s = t(e[i]), a = s.offset().top + s.outerHeight(!0), i === e.length - 1 && (r = l.find("li.select2-more-results"), r.length > 0 && (a = r.offset().top + r.outerHeight(!0))), n = l.offset().top + l.outerHeight(!0), a > n && l.scrollTop(l.scrollTop() + (a - n)), o = s.offset().top - l.offset().top, 0 > o && "none" != s.css("display") && l.scrollTop(l.scrollTop() + o);
        }
      }, findHighlightableChoices: function findHighlightableChoices() {
        return this.results.find(".select2-result-selectable:not(.select2-disabled)");
      }, moveHighlight: function moveHighlight(e) {
        for (var i = this.findHighlightableChoices(), s = this.highlight(); s > -1 && s < i.length;) {
          s += e;var a = t(i[s]);if (a.hasClass("select2-result-selectable") && !a.hasClass("select2-disabled") && !a.hasClass("select2-selected")) {
            this.highlight(s);break;
          }
        }
      }, highlight: function highlight(e) {
        var i,
            a,
            n = this.findHighlightableChoices();return 0 === arguments.length ? s(n.filter(".select2-highlighted")[0], n.get()) : (e >= n.length && (e = n.length - 1), 0 > e && (e = 0), this.removeHighlight(), i = t(n[e]), i.addClass("select2-highlighted"), this.ensureHighlightVisible(), a = i.data("select2-data"), a && this.opts.element.trigger({ type: "select2-highlight", val: this.id(a), choice: a }), void 0);
      }, removeHighlight: function removeHighlight() {
        this.results.find(".select2-highlighted").removeClass("select2-highlighted");
      }, countSelectableResults: function countSelectableResults() {
        return this.findHighlightableChoices().length;
      }, highlightUnderEvent: function highlightUnderEvent(e) {
        var i = t(e.target).closest(".select2-result-selectable");if (i.length > 0 && !i.is(".select2-highlighted")) {
          var s = this.findHighlightableChoices();this.highlight(s.index(i));
        } else 0 == i.length && this.removeHighlight();
      }, loadMoreIfNeeded: function loadMoreIfNeeded() {
        var t,
            e = this.results,
            i = e.find("li.select2-more-results"),
            s = this.resultsPage + 1,
            a = this,
            n = this.search.val(),
            o = this.context;0 !== i.length && (t = i.offset().top - e.offset().top - e.height(), t <= this.opts.loadMorePadding && (i.addClass("select2-active"), this.opts.query({ element: this.opts.element, term: n, page: s, context: o, matcher: this.opts.matcher, callback: this.bind(function (t) {
            a.opened() && (a.opts.populateResults.call(this, e, t.results, { term: n, page: s, context: o }), a.postprocessResults(t, !1, !1), t.more === !0 ? (i.detach().appendTo(e).text(a.opts.formatLoadMore(s + 1)), window.setTimeout(function () {
              a.loadMoreIfNeeded();
            }, 10)) : i.remove(), a.positionDropdown(), a.resultsPage = s, a.context = t.context, this.opts.element.trigger({ type: "select2-loaded", items: t }));
          }) })));
      }, tokenize: function tokenize() {}, updateResults: function updateResults(i) {
        function s() {
          h.removeClass("select2-active"), u.positionDropdown();
        }function a(t) {
          c.html(t), s();
        }var o,
            r,
            l,
            h = this.search,
            c = this.results,
            d = this.opts,
            u = this,
            p = h.val(),
            f = t.data(this.container, "select2-last-term");if ((i === !0 || !f || !n(p, f)) && (t.data(this.container, "select2-last-term", p), i === !0 || this.showSearchInput !== !1 && this.opened())) {
          l = ++this.queryCount;var m = this.getMaximumSelectionSize();if (m >= 1 && (o = this.data(), t.isArray(o) && o.length >= m && M(d.formatSelectionTooBig, "formatSelectionTooBig"))) return (a("<li class='select2-selection-limit'>" + d.formatSelectionTooBig(m) + "</li>"), void 0);if (h.val().length < d.minimumInputLength) return (M(d.formatInputTooShort, "formatInputTooShort") ? a("<li class='select2-no-results'>" + d.formatInputTooShort(h.val(), d.minimumInputLength) + "</li>") : a(""), i && this.showSearch && this.showSearch(!0), void 0);if (d.maximumInputLength && h.val().length > d.maximumInputLength) return (M(d.formatInputTooLong, "formatInputTooLong") ? a("<li class='select2-no-results'>" + d.formatInputTooLong(h.val(), d.maximumInputLength) + "</li>") : a(""), void 0);d.formatSearching && 0 === this.findHighlightableChoices().length && a("<li class='select2-searching'>" + d.formatSearching() + "</li>"), h.addClass("select2-active"), this.removeHighlight(), r = this.tokenize(), r != e && null != r && h.val(r), this.resultsPage = 1, d.query({ element: d.element, term: h.val(), page: this.resultsPage, context: null, matcher: d.matcher, callback: this.bind(function (o) {
              var r;if (l == this.queryCount) {
                if (!this.opened()) return (this.search.removeClass("select2-active"), void 0);if ((this.context = o.context === e ? null : o.context, this.opts.createSearchChoice && "" !== h.val() && (r = this.opts.createSearchChoice.call(u, h.val(), o.results), r !== e && null !== r && u.id(r) !== e && null !== u.id(r) && 0 === t(o.results).filter(function () {
                  return n(u.id(this), u.id(r));
                }).length && o.results.unshift(r)), 0 === o.results.length && M(d.formatNoMatches, "formatNoMatches"))) return (a("<li class='select2-no-results'>" + d.formatNoMatches(h.val()) + "</li>"), void 0);c.empty(), u.opts.populateResults.call(this, c, o.results, { term: h.val(), page: this.resultsPage, context: null }), o.more === !0 && M(d.formatLoadMore, "formatLoadMore") && (c.append("<li class='select2-more-results'>" + u.opts.escapeMarkup(d.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function () {
                  u.loadMoreIfNeeded();
                }, 10)), this.postprocessResults(o, i), s(), this.opts.element.trigger({ type: "select2-loaded", items: o });
              }
            }) });
        }
      }, cancel: function cancel() {
        this.close();
      }, blur: function blur() {
        this.opts.selectOnBlur && this.selectHighlighted({ noFocus: !0 }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
      }, focusSearch: function focusSearch() {
        p(this.search);
      }, selectHighlighted: function selectHighlighted(t) {
        var e = this.highlight(),
            i = this.results.find(".select2-highlighted"),
            s = i.closest(".select2-result").data("select2-data");s ? (this.highlight(e), this.onSelect(s, t)) : t && t.noFocus && this.close();
      }, getPlaceholder: function getPlaceholder() {
        var t;return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((t = this.getPlaceholderOption()) !== e ? t.text() : e);
      }, getPlaceholderOption: function getPlaceholderOption() {
        if (this.select) {
          var t = this.select.children().first();if (this.opts.placeholderOption !== e) return "first" === this.opts.placeholderOption && t || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);if ("" === t.text() && "" === t.val()) return t;
        }
      }, initContainerWidth: function initContainerWidth() {
        function i() {
          var i, s, a, n, o;if ("off" === this.opts.width) return null;if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";if ("copy" === this.opts.width || "resolve" === this.opts.width) {
            if ((i = this.opts.element.attr("style"), i !== e)) for (s = i.split(";"), n = 0, o = s.length; o > n; n += 1) if ((a = s[n].replace(/\s/g, "").match(/[^-]width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== a && a.length >= 1)) return a[1];return "resolve" === this.opts.width ? (i = this.opts.element.css("width"), i.indexOf("%") > 0 ? i : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null;
          }return t.isFunction(this.opts.width) ? this.opts.width() : this.opts.width;
        }var s = i.call(this);null !== s && this.container.css("width", s);
      } }), F = P(E, { createContainer: function createContainer() {
        var e = t(document.createElement("div")).attr({ "class": "select2-container" }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow'><b></b></span>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
        return e;
      }, enableInterface: function enableInterface() {
        this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled());
      }, opening: function opening() {
        var i, s, a;this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.search.focus(), i = this.search.get(0), i.createTextRange ? (s = i.createTextRange(), s.collapse(!1), s.select()) : i.setSelectionRange && (a = this.search.val().length, i.setSelectionRange(a, a)), "" === this.search.val() && this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(t.Event("select2-open"));
      }, close: function close(t) {
        this.opened() && (this.parent.close.apply(this, arguments), t = t || { focus: !0 }, this.focusser.removeAttr("disabled"), t.focus && this.focusser.focus());
      }, focus: function focus() {
        this.opened() ? this.close() : (this.focusser.removeAttr("disabled"), this.focusser.focus());
      }, isFocused: function isFocused() {
        return this.container.hasClass("select2-container-active");
      }, cancel: function cancel() {
        this.parent.cancel.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus();
      }, destroy: function destroy() {
        t("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments);
      }, initContainer: function initContainer() {
        var e,
            i = this.container,
            s = this.dropdown;this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = e = i.find(".select2-choice"), this.focusser = i.find(".select2-focusser"), this.focusser.attr("id", "s2id_autogen" + O()), t("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")), this.focusser.attr("tabindex", this.elementTabIndex), this.search.on("keydown", this.bind(function (t) {
          if (this.isInterfaceEnabled()) {
            if (t.which === A.PAGE_UP || t.which === A.PAGE_DOWN) return (m(t), void 0);switch (t.which) {case A.UP:case A.DOWN:
                return (this.moveHighlight(t.which === A.UP ? -1 : 1), m(t), void 0);case A.ENTER:
                return (this.selectHighlighted(), m(t), void 0);case A.TAB:
                return (this.selectHighlighted({ noFocus: !0 }), void 0);case A.ESC:
                return (this.cancel(t), m(t), void 0);}
          }
        })), this.search.on("blur", this.bind(function () {
          document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function () {
            this.search.focus();
          }), 0);
        })), this.focusser.on("keydown", this.bind(function (t) {
          if (this.isInterfaceEnabled() && t.which !== A.TAB && !A.isControl(t) && !A.isFunctionKey(t) && t.which !== A.ESC) {
            if (this.opts.openOnEnter === !1 && t.which === A.ENTER) return (m(t), void 0);if (t.which == A.DOWN || t.which == A.UP || t.which == A.ENTER && this.opts.openOnEnter) {
              if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return;return (this.open(), m(t), void 0);
            }return t.which == A.DELETE || t.which == A.BACKSPACE ? (this.opts.allowClear && this.clear(), m(t), void 0) : void 0;
          }
        })), l(this.focusser), this.focusser.on("keyup-change input", this.bind(function (t) {
          if (this.opts.minimumResultsForSearch >= 0) {
            if ((t.stopPropagation(), this.opened())) return;this.open();
          }
        })), e.on("mousedown", "abbr", this.bind(function (t) {
          this.isInterfaceEnabled() && (this.clear(), g(t), this.close(), this.selection.focus());
        })), e.on("mousedown", this.bind(function (e) {
          this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), m(e);
        })), s.on("mousedown", this.bind(function () {
          this.search.focus();
        })), e.on("focus", this.bind(function (t) {
          m(t);
        })), this.focusser.on("focus", this.bind(function () {
          this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active");
        })).on("blur", this.bind(function () {
          this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(t.Event("select2-blur")));
        })), this.search.on("focus", this.bind(function () {
          this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active");
        })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder();
      }, clear: function clear(e) {
        var i = this.selection.data("select2-data");if (i) {
          var s = t.Event("select2-clearing");if ((this.opts.element.trigger(s), s.isDefaultPrevented())) return;var a = this.getPlaceholderOption();this.opts.element.val(a ? a.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), e !== !1 && (this.opts.element.trigger({ type: "select2-removed", val: this.id(i), choice: i }), this.triggerChange({ removed: i }));
        }
      }, initSelection: function initSelection() {
        if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();else {
          var t = this;this.opts.initSelection.call(null, this.opts.element, function (i) {
            i !== e && null !== i && (t.updateSelection(i), t.close(), t.setPlaceholder());
          });
        }
      }, isPlaceholderOptionSelected: function isPlaceholderOptionSelected() {
        var t;return this.getPlaceholder() ? (t = this.getPlaceholderOption()) !== e && t.is(":selected") || "" === this.opts.element.val() || this.opts.element.val() === e || null === this.opts.element.val() : !1;
      }, prepareOpts: function prepareOpts() {
        var e = this.parent.prepareOpts.apply(this, arguments),
            i = this;return ("select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function (t, e) {
          var s = t.find(":selected");e(i.optionToData(s));
        } : "data" in e && (e.initSelection = e.initSelection || function (i, s) {
          var a = i.val(),
              o = null;e.query({ matcher: function matcher(t, i, s) {
              var r = n(a, e.id(s));return (r && (o = s), r);
            }, callback: t.isFunction(s) ? function () {
              s(o);
            } : t.noop });
        }), e);
      }, getPlaceholder: function getPlaceholder() {
        return this.select && this.getPlaceholderOption() === e ? e : this.parent.getPlaceholder.apply(this, arguments);
      }, setPlaceholder: function setPlaceholder() {
        var t = this.getPlaceholder();if (this.isPlaceholderOptionSelected() && t !== e) {
          if (this.select && this.getPlaceholderOption() === e) return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear");
        }
      }, postprocessResults: function postprocessResults(t, e, i) {
        var s = 0,
            a = this;if ((this.findHighlightableChoices().each2(function (t, e) {
          return n(a.id(e.data("select2-data")), a.opts.element.val()) ? (s = t, !1) : void 0;
        }), i !== !1 && (e === !0 && s >= 0 ? this.highlight(s) : this.highlight(0)), e === !0)) {
          var o = this.opts.minimumResultsForSearch;o >= 0 && this.showSearch(T(t.results) >= o);
        }
      }, showSearch: function showSearch(e) {
        this.showSearchInput !== e && (this.showSearchInput = e, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !e), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !e), t(this.dropdown, this.container).toggleClass("select2-with-searchbox", e));
      }, onSelect: function onSelect(t, e) {
        if (this.triggerSelect(t)) {
          var i = this.opts.element.val(),
              s = this.data();this.opts.element.val(this.id(t)), this.updateSelection(t), this.opts.element.trigger({ type: "select2-selected", val: this.id(t), choice: t }), this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()), this.close(), e && e.noFocus || this.focusser.focus(), n(i, this.id(t)) || this.triggerChange({ added: t, removed: s });
        }
      }, updateSelection: function updateSelection(t) {
        var i,
            s,
            a = this.selection.find(".select2-chosen");this.selection.data("select2-data", t), a.empty(), null !== t && (i = this.opts.formatSelection(t, a, this.opts.escapeMarkup)), i !== e && a.append(i), s = this.opts.formatSelectionCssClass(t, a), s !== e && a.addClass(s), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== e && this.container.addClass("select2-allowclear");
      }, val: function val() {
        var t,
            i = !1,
            s = null,
            a = this,
            n = this.data();if (0 === arguments.length) return this.opts.element.val();if ((t = arguments[0], arguments.length > 1 && (i = arguments[1]), this.select)) this.select.val(t).find(":selected").each2(function (t, e) {
          return (s = a.optionToData(e), !1);
        }), this.updateSelection(s), this.setPlaceholder(), i && this.triggerChange({ added: s, removed: n });else {
          if (!t && 0 !== t) return (this.clear(i), void 0);if (this.opts.initSelection === e) throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(t), this.opts.initSelection(this.opts.element, function (t) {
            a.opts.element.val(t ? a.id(t) : ""), a.updateSelection(t), a.setPlaceholder(), i && a.triggerChange({ added: t, removed: n });
          });
        }
      }, clearSearch: function clearSearch() {
        this.search.val(""), this.focusser.val("");
      }, data: function data(t) {
        var i,
            s = !1;return 0 === arguments.length ? (i = this.selection.data("select2-data"), i == e && (i = null), i) : (arguments.length > 1 && (s = arguments[1]), t ? (i = this.data(), this.opts.element.val(t ? this.id(t) : ""), this.updateSelection(t), s && this.triggerChange({ added: t, removed: i })) : this.clear(s), void 0);
      } }), L = P(E, { createContainer: function createContainer() {
        var e = t(document.createElement("div")).attr({ "class": "select2-container select2-container-multi" }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));return e;
      }, prepareOpts: function prepareOpts() {
        var e = this.parent.prepareOpts.apply(this, arguments),
            i = this;return ("select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function (t, e) {
          var s = [];t.find(":selected").each2(function (t, e) {
            s.push(i.optionToData(e));
          }), e(s);
        } : "data" in e && (e.initSelection = e.initSelection || function (i, s) {
          var a = o(i.val(), e.separator),
              r = [];e.query({ matcher: function matcher(i, s, o) {
              var l = t.grep(a, function (t) {
                return n(t, e.id(o));
              }).length;return (l && r.push(o), l);
            }, callback: t.isFunction(s) ? function () {
              for (var t = [], i = 0; i < a.length; i++) for (var o = a[i], l = 0; l < r.length; l++) {
                var h = r[l];if (n(o, e.id(h))) {
                  t.push(h), r.splice(l, 1);break;
                }
              }s(t);
            } : t.noop });
        }), e);
      }, selectChoice: function selectChoice(t) {
        var e = this.container.find(".select2-search-choice-focus");e.length && t && t[0] == e[0] || (e.length && this.opts.element.trigger("choice-deselected", e), e.removeClass("select2-search-choice-focus"), t && t.length && (this.close(), t.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", t)));
      }, destroy: function destroy() {
        t("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments);
      }, initContainer: function initContainer() {
        var e,
            i = ".select2-choices";this.searchContainer = this.container.find(".select2-search-field"), this.selection = e = this.container.find(i);var s = this;this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function () {
          s.search[0].focus(), s.selectChoice(t(this));
        }), this.search.attr("id", "s2id_autogen" + O()), t("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function () {
          this.isInterfaceEnabled() && (this.opened() || this.open());
        })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function (t) {
          if (this.isInterfaceEnabled()) {
            ++this.keydowns;var i = e.find(".select2-search-choice-focus"),
                s = i.prev(".select2-search-choice:not(.select2-locked)"),
                a = i.next(".select2-search-choice:not(.select2-locked)"),
                n = f(this.search);if (i.length && (t.which == A.LEFT || t.which == A.RIGHT || t.which == A.BACKSPACE || t.which == A.DELETE || t.which == A.ENTER)) {
              var o = i;return (t.which == A.LEFT && s.length ? o = s : t.which == A.RIGHT ? o = a.length ? a : null : t.which === A.BACKSPACE ? (this.unselect(i.first()), this.search.width(10), o = s.length ? s : a) : t.which == A.DELETE ? (this.unselect(i.first()), this.search.width(10), o = a.length ? a : null) : t.which == A.ENTER && (o = null), this.selectChoice(o), m(t), o && o.length || this.open(), void 0);
            }if ((t.which === A.BACKSPACE && 1 == this.keydowns || t.which == A.LEFT) && 0 == n.offset && !n.length) return (this.selectChoice(e.find(".select2-search-choice:not(.select2-locked)").last()), m(t), void 0);if ((this.selectChoice(null), this.opened())) switch (t.which) {case A.UP:case A.DOWN:
                return (this.moveHighlight(t.which === A.UP ? -1 : 1), m(t), void 0);case A.ENTER:
                return (this.selectHighlighted(), m(t), void 0);case A.TAB:
                return (this.selectHighlighted({ noFocus: !0 }), this.close(), void 0);case A.ESC:
                return (this.cancel(t), m(t), void 0);}if (t.which !== A.TAB && !A.isControl(t) && !A.isFunctionKey(t) && t.which !== A.BACKSPACE && t.which !== A.ESC) {
              if (t.which === A.ENTER) {
                if (this.opts.openOnEnter === !1) return;if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return;
              }this.open(), (t.which === A.PAGE_UP || t.which === A.PAGE_DOWN) && m(t), t.which === A.ENTER && m(t);
            }
          }
        })), this.search.on("keyup", this.bind(function () {
          this.keydowns = 0, this.resizeSearch();
        })), this.search.on("blur", this.bind(function (e) {
          this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), e.stopImmediatePropagation(), this.opts.element.trigger(t.Event("select2-blur"));
        })), this.container.on("click", i, this.bind(function (e) {
          this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.open(), this.focusSearch(), e.preventDefault()));
        })), this.container.on("focus", i, this.bind(function () {
          this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder());
        })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch();
      }, enableInterface: function enableInterface() {
        this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled());
      }, initSelection: function initSelection() {
        if (("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val())) {
          var t = this;this.opts.initSelection.call(null, this.opts.element, function (i) {
            i !== e && null !== i && (t.updateSelection(i), t.close(), t.clearSearch());
          });
        }
      }, clearSearch: function clearSearch() {
        var t = this.getPlaceholder(),
            i = this.getMaxSearchWidth();t !== e && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(t).addClass("select2-default"), this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10);
      }, clearPlaceholder: function clearPlaceholder() {
        this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default");
      }, opening: function opening() {
        this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.updateResults(!0), this.search.focus(), this.opts.element.trigger(t.Event("select2-open"));
      }, close: function close() {
        this.opened() && this.parent.close.apply(this, arguments);
      }, focus: function focus() {
        this.close(), this.search.focus();
      }, isFocused: function isFocused() {
        return this.search.hasClass("select2-focused");
      }, updateSelection: function updateSelection(e) {
        var i = [],
            a = [],
            n = this;t(e).each(function () {
          s(n.id(this), i) < 0 && (i.push(n.id(this)), a.push(this));
        }), e = a, this.selection.find(".select2-search-choice").remove(), t(e).each(function () {
          n.addSelectedChoice(this);
        }), n.postprocessResults();
      }, tokenize: function tokenize() {
        var t = this.search.val();t = this.opts.tokenizer.call(this, t, this.data(), this.bind(this.onSelect), this.opts), null != t && t != e && (this.search.val(t), t.length > 0 && this.open());
      }, onSelect: function onSelect(t, e) {
        this.triggerSelect(t) && (this.addSelectedChoice(t), this.opts.element.trigger({ type: "selected", val: this.id(t), choice: t }), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(t, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({ added: t }), e && e.noFocus || this.focusSearch());
      }, cancel: function cancel() {
        this.close(), this.focusSearch();
      }, addSelectedChoice: function addSelectedChoice(i) {
        var s,
            a,
            n = !i.locked,
            o = t("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),
            r = t("<li class='select2-search-choice select2-locked'><div></div></li>"),
            l = n ? o : r,
            h = this.id(i),
            c = this.getVal();s = this.opts.formatSelection(i, l.find("div"), this.opts.escapeMarkup), s != e && l.find("div").replaceWith("<div>" + s + "</div>"), a = this.opts.formatSelectionCssClass(i, l.find("div")), a != e && l.addClass(a), n && l.find(".select2-search-choice-close").on("mousedown", m).on("click dblclick", this.bind(function (e) {
          this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function () {
            this.unselect(t(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch();
          })).dequeue(), m(e));
        })).on("focus", this.bind(function () {
          this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"));
        })), l.data("select2-data", i), l.insertBefore(this.searchContainer), c.push(h), this.setVal(c);
      }, unselect: function unselect(t) {
        var e,
            i,
            a = this.getVal();if ((t = t.closest(".select2-search-choice"), 0 === t.length)) throw "Invalid argument: " + t + ". Must be .select2-search-choice";if (e = t.data("select2-data")) {
          for (; (i = s(this.id(e), a)) >= 0;) a.splice(i, 1), this.setVal(a), this.select && this.postprocessResults();t.remove(), this.opts.element.trigger({ type: "removed", val: this.id(e), choice: e }), this.triggerChange({ removed: e });
        }
      }, postprocessResults: function postprocessResults(t, e, i) {
        var a = this.getVal(),
            n = this.results.find(".select2-result"),
            o = this.results.find(".select2-result-with-children"),
            r = this;n.each2(function (t, e) {
          var i = r.id(e.data("select2-data"));s(i, a) >= 0 && (e.addClass("select2-selected"), e.find(".select2-result-selectable").addClass("select2-selected"));
        }), o.each2(function (t, e) {
          e.is(".select2-result-selectable") || 0 !== e.find(".select2-result-selectable:not(.select2-selected)").length || e.addClass("select2-selected");
        }), -1 == this.highlight() && i !== !1 && r.highlight(0), !this.opts.createSearchChoice && !n.filter(".select2-result:not(.select2-selected)").length > 0 && (!t || t && !t.more && 0 === this.results.find(".select2-no-results").length) && M(r.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + r.opts.formatNoMatches(r.search.val()) + "</li>");
      }, getMaxSearchWidth: function getMaxSearchWidth() {
        return this.selection.width() - r(this.search);
      }, resizeSearch: function resizeSearch() {
        var t,
            e,
            i,
            s,
            a,
            n = r(this.search);t = v(this.search) + 10, e = this.search.offset().left, i = this.selection.width(), s = this.selection.offset().left, a = i - (e - s) - n, t > a && (a = i - n), 40 > a && (a = i - n), 0 >= a && (a = t), this.search.width(Math.floor(a));
      }, getVal: function getVal() {
        var t;return this.select ? (t = this.select.val(), null === t ? [] : t) : (t = this.opts.element.val(), o(t, this.opts.separator));
      }, setVal: function setVal(e) {
        var i;this.select ? this.select.val(e) : (i = [], t(e).each(function () {
          s(this, i) < 0 && i.push(this);
        }), this.opts.element.val(0 === i.length ? "" : i.join(this.opts.separator)));
      }, buildChangeDetails: function buildChangeDetails(t, e) {
        for (var e = e.slice(0), t = t.slice(0), i = 0; i < e.length; i++) for (var s = 0; s < t.length; s++) n(this.opts.id(e[i]), this.opts.id(t[s])) && (e.splice(i, 1), i--, t.splice(s, 1), s--);return { added: e, removed: t };
      }, val: function val(i, s) {
        var a,
            n = this;if (0 === arguments.length) return this.getVal();if ((a = this.data(), a.length || (a = []), !i && 0 !== i)) return (this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), s && this.triggerChange({ added: this.data(), removed: a }), void 0);if ((this.setVal(i), this.select)) this.opts.initSelection(this.select, this.bind(this.updateSelection)), s && this.triggerChange(this.buildChangeDetails(a, this.data()));else {
          if (this.opts.initSelection === e) throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element, function (e) {
            var i = t.map(e, n.id);n.setVal(i), n.updateSelection(e), n.clearSearch(), s && n.triggerChange(n.buildChangeDetails(a, this.data()));
          });
        }this.clearSearch();
      }, onSortStart: function onSortStart() {
        if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0), this.searchContainer.hide();
      }, onSortEnd: function onSortEnd() {
        var e = [],
            i = this;this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function () {
          e.push(i.opts.id(t(this).data("select2-data")));
        }), this.setVal(e), this.triggerChange();
      }, data: function data(e, i) {
        var s,
            a,
            n = this;return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function () {
          return t(this).data("select2-data");
        }).get() : (a = this.data(), e || (e = []), s = t.map(e, function (t) {
          return n.opts.id(t);
        }), this.setVal(s), this.updateSelection(e), this.clearSearch(), i && this.triggerChange(this.buildChangeDetails(a, this.data())), void 0);
      } }), t.fn.select2 = function () {
      var i,
          a,
          n,
          o,
          r,
          l = Array.prototype.slice.call(arguments, 0),
          h = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
          c = ["opened", "isFocused", "container", "dropdown"],
          d = ["val", "data"],
          u = { search: "externalSearch" };return (this.each(function () {
        if (0 === l.length || "object" == typeof l[0]) i = 0 === l.length ? {} : t.extend({}, l[0]), i.element = t(this), "select" === i.element.get(0).tagName.toLowerCase() ? r = i.element.prop("multiple") : (r = i.multiple || !1, "tags" in i && (i.multiple = r = !0)), a = r ? new L() : new F(), a.init(i);else {
          if ("string" != typeof l[0]) throw "Invalid arguments to select2 plugin: " + l;if (s(l[0], h) < 0) throw "Unknown method: " + l[0];if ((o = e, a = t(this).data("select2"), a === e)) return;if ((n = l[0], "container" === n ? o = a.container : "dropdown" === n ? o = a.dropdown : (u[n] && (n = u[n]), o = a[n].apply(a, l.slice(1))), s(l[0], c) >= 0 || s(l[0], d) && 1 == l.length)) return !1;
        }
      }), o === e ? this : o);
    }, t.fn.select2.defaults = { width: "copy", loadMorePadding: 0, closeOnSelect: !0, openOnEnter: !0, containerCss: {}, dropdownCss: {}, containerCssClass: "", dropdownCssClass: "", formatResult: function formatResult(t, e, i, s) {
        var a = [];return (b(t.text, i.term, a, s), a.join(""));
      }, formatSelection: function formatSelection(t, i, s) {
        return t ? s(t.text) : e;
      }, sortResults: function sortResults(t) {
        return t;
      }, formatResultCssClass: function formatResultCssClass() {
        return e;
      }, formatSelectionCssClass: function formatSelectionCssClass() {
        return e;
      }, formatNoMatches: function formatNoMatches() {
        return "No matches found";
      }, formatInputTooShort: function formatInputTooShort(t, e) {
        var i = e - t.length;return "Please enter " + i + " more character" + (1 == i ? "" : "s");
      }, formatInputTooLong: function formatInputTooLong(t, e) {
        var i = t.length - e;return "Please delete " + i + " character" + (1 == i ? "" : "s");
      }, formatSelectionTooBig: function formatSelectionTooBig(t) {
        return "You can only select " + t + " item" + (1 == t ? "" : "s");
      }, formatLoadMore: function formatLoadMore() {
        return "Loading more results...";
      }, formatSearching: function formatSearching() {
        return "Searching...";
      }, minimumResultsForSearch: 0, minimumInputLength: 0, maximumInputLength: null, maximumSelectionSize: 0, id: function id(t) {
        return t.id;
      }, matcher: function matcher(t, e) {
        return i("" + e).toUpperCase().indexOf(i("" + t).toUpperCase()) >= 0;
      }, separator: ",", tokenSeparators: [], tokenizer: x, escapeMarkup: S, blurOnChange: !1, selectOnBlur: !1, adaptContainerCssClass: function adaptContainerCssClass(t) {
        return t;
      }, adaptDropdownCssClass: function adaptDropdownCssClass() {
        return null;
      }, nextSearchTerm: function nextSearchTerm() {
        return e;
      } }, t.fn.select2.ajaxDefaults = { transport: t.ajax, params: { type: "GET", cache: !1, dataType: "json" } }, window.Select2 = { query: { ajax: w, local: k, tags: C }, util: { debounce: c, markMatch: b, escapeMarkup: S, stripDiacritics: i }, "class": { "abstract": E, single: F, multi: L } };
  }
})(jQuery);
!(function (t) {
  "use strict";t.extend(t.fn.select2.defaults, { formatNoMatches: function formatNoMatches() {
      return "Nessuna corrispondenza trovata";
    }, formatInputTooShort: function formatInputTooShort(t, e) {
      var i = e - t.length;return "Inserisci ancora " + i + " caratter" + (1 == i ? "e" : "i");
    }, formatInputTooLong: function formatInputTooLong(t, e) {
      var i = t.length - e;return "Inserisci " + i + " caratter" + (1 == i ? "e" : "i") + " in meno";
    }, formatSelectionTooBig: function formatSelectionTooBig(t) {
      return "Puoi selezionare solo " + t + " element" + (1 == t ? "o" : "i");
    }, formatLoadMore: function formatLoadMore() {
      return "Caricamento in corso...";
    }, formatSearching: function formatSearching() {
      return "Ricerca...";
    } });
})(jQuery);
!(function (t) {
  function e() {
    return new Date(Date.UTC.apply(Date, arguments));
  }function i(e, i) {
    var a,
        s = t(e).data(),
        n = {},
        o = new RegExp("^" + i.toLowerCase() + "([A-Z])"),
        i = new RegExp("^" + i.toLowerCase());for (var r in s) i.test(r) && (a = r.replace(o, function (t, e) {
      return e.toLowerCase();
    }), n[a] = s[r]);return n;
  }function a(e) {
    var i = {};if (d[e] || (e = e.split("-")[0], d[e])) {
      var a = d[e];return (t.each(h, function (t, e) {
        e in a && (i[e] = a[e]);
      }), i);
    }
  }var s = t(window),
      n = function n(e, i) {
    this._process_options(i), this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(c.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (t, e) {
      return parseInt(e) + 1;
    }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show();
  };n.prototype = { constructor: n, _process_options: function _process_options(e) {
      this._o = t.extend({}, this._o, e);var i = this.o = t.extend({}, this._o),
          a = i.language;switch ((d[a] || (a = a.split("-")[0], d[a] || (a = l.language)), i.language = a, i.startView)) {case 2:case "decade":
          i.startView = 2;break;case 1:case "year":
          i.startView = 1;break;default:
          i.startView = 0;}switch (i.minViewMode) {case 1:case "months":
          i.minViewMode = 1;break;case 2:case "years":
          i.minViewMode = 2;break;default:
          i.minViewMode = 0;}i.startView = Math.max(i.startView, i.minViewMode), i.weekStart %= 7, i.weekEnd = (i.weekStart + 6) % 7;var s = c.parseFormat(i.format);i.startDate !== -1 / 0 && (i.startDate = i.startDate ? i.startDate instanceof Date ? this._local_to_utc(this._zero_time(i.startDate)) : c.parseDate(i.startDate, s, i.language) : -1 / 0), 1 / 0 !== i.endDate && (i.endDate = i.endDate ? i.endDate instanceof Date ? this._local_to_utc(this._zero_time(i.endDate)) : c.parseDate(i.endDate, s, i.language) : 1 / 0), i.daysOfWeekDisabled = i.daysOfWeekDisabled || [], t.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)), i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled, function (t) {
        return parseInt(t, 10);
      });var n = String(i.orientation).toLowerCase().split(/\s+/g),
          o = i.orientation.toLowerCase();if ((n = t.grep(n, function (t) {
        return /^auto|left|right|top|bottom$/.test(t);
      }), i.orientation = { x: "auto", y: "auto" }, o && "auto" !== o)) if (1 === n.length) switch (n[0]) {case "top":case "bottom":
          i.orientation.y = n[0];break;case "left":case "right":
          i.orientation.x = n[0];} else o = t.grep(n, function (t) {
        return /^left|right$/.test(t);
      }), i.orientation.x = o[0] || "auto", o = t.grep(n, function (t) {
        return /^top|bottom$/.test(t);
      }), i.orientation.y = o[0] || "auto";else ;
    }, _events: [], _secondaryEvents: [], _applyEvents: function _applyEvents(t) {
      for (var e, i, a = 0; a < t.length; a++) e = t[a][0], i = t[a][1], e.on(i);
    }, _unapplyEvents: function _unapplyEvents(t) {
      for (var e, i, a = 0; a < t.length; a++) e = t[a][0], i = t[a][1], e.off(i);
    }, _buildEvents: function _buildEvents() {
      this.isInput ? this._events = [[this.element, { focus: t.proxy(this.show, this), keyup: t.proxy(this.update, this), keydown: t.proxy(this.keydown, this) }]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), { focus: t.proxy(this.show, this), keyup: t.proxy(this.update, this), keydown: t.proxy(this.keydown, this) }], [this.component, { click: t.proxy(this.show, this) }]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, { click: t.proxy(this.show, this) }]], this._secondaryEvents = [[this.picker, { click: t.proxy(this.click, this) }], [t(window), { resize: t.proxy(this.place, this) }], [t(document), { mousedown: t.proxy(function (t) {
          this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide();
        }, this) }]];
    }, _attachEvents: function _attachEvents() {
      this._detachEvents(), this._applyEvents(this._events);
    }, _detachEvents: function _detachEvents() {
      this._unapplyEvents(this._events);
    }, _attachSecondaryEvents: function _attachSecondaryEvents() {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    }, _detachSecondaryEvents: function _detachSecondaryEvents() {
      this._unapplyEvents(this._secondaryEvents);
    }, _trigger: function _trigger(e, i) {
      var a = i || this.date,
          s = this._utc_to_local(a);this.element.trigger({ type: e, date: s, format: t.proxy(function (t) {
          var e = t || this.o.format;return c.formatDate(a, e, this.o.language);
        }, this) });
    }, show: function show(t) {
      this.isInline || this.picker.appendTo("body"), this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), this._attachSecondaryEvents(), t && t.preventDefault(), this._trigger("show");
    }, hide: function hide() {
      this.isInline || this.picker.is(":visible") && (this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"));
    }, remove: function remove() {
      this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date;
    }, _utc_to_local: function _utc_to_local(t) {
      return new Date(t.getTime() + 60000 * t.getTimezoneOffset());
    }, _local_to_utc: function _local_to_utc(t) {
      return new Date(t.getTime() - 60000 * t.getTimezoneOffset());
    }, _zero_time: function _zero_time(t) {
      return new Date(t.getFullYear(), t.getMonth(), t.getDate());
    }, _zero_utc_time: function _zero_utc_time(t) {
      return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()));
    }, getDate: function getDate() {
      return this._utc_to_local(this.getUTCDate());
    }, getUTCDate: function getUTCDate() {
      return this.date;
    }, setDate: function setDate(t) {
      this.setUTCDate(this._local_to_utc(t));
    }, setUTCDate: function setUTCDate(t) {
      this.date = t, this.setValue();
    }, setValue: function setValue() {
      var t = this.getFormattedDate();this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change();
    }, getFormattedDate: function getFormattedDate(t) {
      return (void 0 === t && (t = this.o.format), c.formatDate(this.date, t, this.o.language));
    }, setStartDate: function setStartDate(t) {
      this._process_options({ startDate: t }), this.update(), this.updateNavArrows();
    }, setEndDate: function setEndDate(t) {
      this._process_options({ endDate: t }), this.update(), this.updateNavArrows();
    }, setDaysOfWeekDisabled: function setDaysOfWeekDisabled(t) {
      this._process_options({ daysOfWeekDisabled: t }), this.update(), this.updateNavArrows();
    }, place: function place() {
      if (!this.isInline) {
        var e = this.picker.outerWidth(),
            i = this.picker.outerHeight(),
            a = 10,
            n = s.width(),
            o = s.height(),
            r = s.scrollTop(),
            l = parseInt(this.element.parents().filter(function () {
          return "auto" != t(this).css("z-index");
        }).first().css("z-index")) + 10,
            h = this.component ? this.component.parent().offset() : this.element.offset(),
            d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
            c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
            u = h.left,
            p = h.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= e - c)) : (this.picker.addClass("datepicker-orient-left"), h.left < 0 ? u -= h.left - a : h.left + e > n && (u = n - e - a));var f,
            m,
            g = this.o.orientation.y;"auto" === g && (f = -r + h.top - i, m = r + o - (h.top + d + i), g = Math.max(f, m) === m ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + g), "top" === g ? p += d : p -= i + parseInt(this.picker.css("padding-top")), this.picker.css({ top: p, left: u, zIndex: l });
      }
    }, _allow_update: !0, update: function update() {
      if (this._allow_update) {
        var t,
            e = new Date(this.date),
            i = !1;arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (t = arguments[0], t instanceof Date && (t = this._local_to_utc(t)), i = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), delete this.element.data().date), this.date = c.parseDate(t, this.o.format, this.o.language), i ? this.setValue() : t ? e.getTime() !== this.date.getTime() && this._trigger("changeDate") : this._trigger("clearDate"), this.date < this.o.startDate ? (this.viewDate = new Date(this.o.startDate), this.date = new Date(this.o.startDate)) : this.date > this.o.endDate ? (this.viewDate = new Date(this.o.endDate), this.date = new Date(this.o.endDate)) : (this.viewDate = new Date(this.date), this.date = new Date(this.date)), this.fill();
      }
    }, fillDow: function fillDow() {
      var t = this.o.weekStart,
          e = "<tr>";if (this.o.calendarWeeks) {
        var i = "<th class=\"cw\">&nbsp;</th>";e += i, this.picker.find(".datepicker-days thead tr:first-child").prepend(i);
      }for (; t < this.o.weekStart + 7;) e += "<th class=\"dow\">" + d[this.o.language].daysMin[t++ % 7] + "</th>";e += "</tr>", this.picker.find(".datepicker-days thead").append(e);
    }, fillMonths: function fillMonths() {
      for (var t = "", e = 0; 12 > e;) t += "<span class=\"month\">" + d[this.o.language].monthsShort[e++] + "</span>";this.picker.find(".datepicker-months td").html(t);
    }, setRange: function setRange(e) {
      e && e.length ? this.range = t.map(e, function (t) {
        return t.valueOf();
      }) : delete this.range, this.fill();
    }, getClassNames: function getClassNames(e) {
      var i = [],
          a = this.viewDate.getUTCFullYear(),
          s = this.viewDate.getUTCMonth(),
          n = this.date.valueOf(),
          o = new Date();return (e.getUTCFullYear() < a || e.getUTCFullYear() == a && e.getUTCMonth() < s ? i.push("old") : (e.getUTCFullYear() > a || e.getUTCFullYear() == a && e.getUTCMonth() > s) && i.push("new"), this.o.todayHighlight && e.getUTCFullYear() == o.getFullYear() && e.getUTCMonth() == o.getMonth() && e.getUTCDate() == o.getDate() && i.push("today"), n && e.valueOf() == n && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 != t.inArray(e.valueOf(), this.range) && i.push("selected")), i);
    }, fill: function fill() {
      var i,
          a = new Date(this.viewDate),
          s = a.getUTCFullYear(),
          n = a.getUTCMonth(),
          o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
          r = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
          l = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
          h = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0;this.date && this.date.valueOf(), this.picker.find(".datepicker-days thead th.datepicker-switch").text(d[this.o.language].months[n] + " " + s), this.picker.find("tfoot th.today").text(d[this.o.language].today).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(d[this.o.language].clear).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();var u = e(s, n - 1, 28, 0, 0, 0, 0),
          p = c.getDaysInMonth(u.getUTCFullYear(), u.getUTCMonth());u.setUTCDate(p), u.setUTCDate(p - (u.getUTCDay() - this.o.weekStart + 7) % 7);var f = new Date(u);f.setUTCDate(f.getUTCDate() + 42), f = f.valueOf();for (var m, g = []; u.valueOf() < f;) {
        if (u.getUTCDay() == this.o.weekStart && (g.push("<tr>"), this.o.calendarWeeks)) {
          var v = new Date(+u + 86400000 * ((this.o.weekStart - u.getUTCDay() - 7) % 7)),
              y = new Date(+v + 86400000 * ((11 - v.getUTCDay()) % 7)),
              b = new Date(+(b = e(y.getUTCFullYear(), 0, 1)) + 86400000 * ((11 - b.getUTCDay()) % 7)),
              k = (y - b) / 86400000 / 7 + 1;g.push("<td class=\"cw\">" + k + "</td>");
        }if ((m = this.getClassNames(u), m.push("day"), this.o.beforeShowDay !== t.noop)) {
          var S = this.o.beforeShowDay(this._utc_to_local(u));void 0 === S ? S = {} : "boolean" == typeof S ? S = { enabled: S } : "string" == typeof S && (S = { classes: S }), S.enabled === !1 && m.push("disabled"), S.classes && (m = m.concat(S.classes.split(/\s+/))), S.tooltip && (i = S.tooltip);
        }m = t.unique(m), g.push("<td class=\"" + m.join(" ") + "\"" + (i ? " title=\"" + i + "\"" : "") + ">" + u.getUTCDate() + "</td>"), u.getUTCDay() == this.o.weekEnd && g.push("</tr>"), u.setUTCDate(u.getUTCDate() + 1);
      }this.picker.find(".datepicker-days tbody").empty().append(g.join(""));var w = this.date && this.date.getUTCFullYear(),
          D = this.picker.find(".datepicker-months").find("th:eq(1)").text(s).end().find("span").removeClass("active");w && w == s && D.eq(this.date.getUTCMonth()).addClass("active"), (o > s || s > l) && D.addClass("disabled"), s == o && D.slice(0, r).addClass("disabled"), s == l && D.slice(h + 1).addClass("disabled"), g = "", s = 10 * parseInt(s / 10, 10);var C = this.picker.find(".datepicker-years").find("th:eq(1)").text(s + "-" + (s + 9)).end().find("td");s -= 1;for (var M = -1; 11 > M; M++) g += "<span class=\"year" + (-1 == M ? " old" : 10 == M ? " new" : "") + (w == s ? " active" : "") + (o > s || s > l ? " disabled" : "") + "\">" + s + "</span>", s += 1;C.html(g);
    }, updateNavArrows: function updateNavArrows() {
      if (this._allow_update) {
        var t = new Date(this.viewDate),
            e = t.getUTCFullYear(),
            i = t.getUTCMonth();switch (this.viewMode) {case 0:
            this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" });break;case 1:case 2:
            this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" });}
      }
    }, click: function click(i) {
      i.preventDefault();var a = t(i.target).closest("span, td, th");if (1 == a.length) switch (a[0].nodeName.toLowerCase()) {case "th":
          switch (a[0].className) {case "datepicker-switch":
              this.showMode(1);break;case "prev":case "next":
              var s = c.modes[this.viewMode].navStep * ("prev" == a[0].className ? -1 : 1);switch (this.viewMode) {case 0:
                  this.viewDate = this.moveMonth(this.viewDate, s), this._trigger("changeMonth", this.viewDate);break;case 1:case 2:
                  this.viewDate = this.moveYear(this.viewDate, s), 1 === this.viewMode && this._trigger("changeYear", this.viewDate);}this.fill();break;case "today":
              var n = new Date();n = e(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0), this.showMode(-2);var o = "linked" == this.o.todayBtn ? null : "view";this._setDate(n, o);break;case "clear":
              var r;this.isInput ? r = this.element : this.component && (r = this.element.find("input")), r && r.val("").change(), this._trigger("changeDate"), this.update(), this.o.autoclose && this.hide();}break;case "span":
          if (!a.is(".disabled")) {
            if ((this.viewDate.setUTCDate(1), a.is(".month"))) {
              var l = 1,
                  h = a.parent().find("span").index(a),
                  d = this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(h), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(e(d, h, l, 0, 0, 0, 0));
            } else {
              var d = parseInt(a.text(), 10) || 0,
                  l = 1,
                  h = 0;this.viewDate.setUTCFullYear(d), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(e(d, h, l, 0, 0, 0, 0));
            }this.showMode(-1), this.fill();
          }break;case "td":
          if (a.is(".day") && !a.is(".disabled")) {
            var l = parseInt(a.text(), 10) || 1,
                d = this.viewDate.getUTCFullYear(),
                h = this.viewDate.getUTCMonth();a.is(".old") ? 0 === h ? (h = 11, d -= 1) : h -= 1 : a.is(".new") && (11 == h ? (h = 0, d += 1) : h += 1), this._setDate(e(d, h, l, 0, 0, 0, 0));
          }}
    }, _setDate: function _setDate(t, e) {
      e && "date" != e || (this.date = new Date(t)), e && "view" != e || (this.viewDate = new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate");var i;this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" != e || this.hide();
    }, moveMonth: function moveMonth(t, e) {
      if (!e) return t;var i,
          a,
          s = new Date(t.valueOf()),
          n = s.getUTCDate(),
          o = s.getUTCMonth(),
          r = Math.abs(e);if ((e = e > 0 ? 1 : -1, 1 == r)) a = -1 == e ? function () {
        return s.getUTCMonth() == o;
      } : function () {
        return s.getUTCMonth() != i;
      }, i = o + e, s.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);else {
        for (var l = 0; r > l; l++) s = this.moveMonth(s, e);i = s.getUTCMonth(), s.setUTCDate(n), a = function () {
          return i != s.getUTCMonth();
        };
      }for (; a();) s.setUTCDate(--n), s.setUTCMonth(i);return s;
    }, moveYear: function moveYear(t, e) {
      return this.moveMonth(t, 12 * e);
    }, dateWithinRange: function dateWithinRange(t) {
      return t >= this.o.startDate && t <= this.o.endDate;
    }, keydown: function keydown(t) {
      if (this.picker.is(":not(:visible)")) return (27 == t.keyCode && this.show(), void 0);var e,
          i,
          a,
          s = !1;switch (t.keyCode) {case 27:
          this.hide(), t.preventDefault();break;case 37:case 39:
          if (!this.o.keyboardNavigation) break;e = 37 == t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.date, e), a = this.moveYear(this.viewDate, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.date, e), a = this.moveMonth(this.viewDate, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.date), i.setUTCDate(this.date.getUTCDate() + e), a = new Date(this.viewDate), a.setUTCDate(this.viewDate.getUTCDate() + e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = a, this.setValue(), this.update(), t.preventDefault(), s = !0);break;case 38:case 40:
          if (!this.o.keyboardNavigation) break;e = 38 == t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.date, e), a = this.moveYear(this.viewDate, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.date, e), a = this.moveMonth(this.viewDate, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.date), i.setUTCDate(this.date.getUTCDate() + 7 * e), a = new Date(this.viewDate), a.setUTCDate(this.viewDate.getUTCDate() + 7 * e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = a, this.setValue(), this.update(), t.preventDefault(), s = !0);break;case 13:
          this.hide(), t.preventDefault();break;case 9:
          this.hide();}if (s) {
        this._trigger("changeDate");var n;this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change();
      }
    }, showMode: function showMode(t) {
      t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + c.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows();
    } };var o = function o(e, i) {
    this.element = t(e), this.inputs = t.map(i.inputs, function (t) {
      return t.jquery ? t[0] : t;
    }), delete i.inputs, t(this.inputs).datepicker(i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function (e) {
      return t(e).data("datepicker");
    }), this.updateDates();
  };o.prototype = { updateDates: function updateDates() {
      this.dates = t.map(this.pickers, function (t) {
        return t.date;
      }), this.updateRanges();
    }, updateRanges: function updateRanges() {
      var e = t.map(this.dates, function (t) {
        return t.valueOf();
      });t.each(this.pickers, function (t, i) {
        i.setRange(e);
      });
    }, dateUpdated: function dateUpdated(e) {
      var i = t(e.target).data("datepicker"),
          a = i.getUTCDate(),
          s = t.inArray(e.target, this.inputs),
          n = this.inputs.length;if (-1 != s) {
        if (a < this.dates[s]) for (; s >= 0 && a < this.dates[s];) this.pickers[s--].setUTCDate(a);else if (a > this.dates[s]) for (; n > s && a > this.dates[s];) this.pickers[s++].setUTCDate(a);this.updateDates();
      }
    }, remove: function remove() {
      t.map(this.pickers, function (t) {
        t.remove();
      }), delete this.element.data().datepicker;
    } };var r = t.fn.datepicker;t.fn.datepicker = function (e) {
    var s = Array.apply(null, arguments);s.shift();var r;return (this.each(function () {
      var h = t(this),
          d = h.data("datepicker"),
          c = "object" == typeof e && e;if (!d) {
        var u = i(this, "date"),
            p = t.extend({}, l, u, c),
            f = a(p.language),
            m = t.extend({}, l, f, u, c);if (h.is(".input-daterange") || m.inputs) {
          var g = { inputs: m.inputs || h.find("input").toArray() };h.data("datepicker", d = new o(this, t.extend(m, g)));
        } else h.data("datepicker", d = new n(this, m));
      }return "string" == typeof e && "function" == typeof d[e] && (r = d[e].apply(d, s), void 0 !== r) ? !1 : void 0;
    }), void 0 !== r ? r : this);
  };var l = t.fn.datepicker.defaults = { autoclose: !1, beforeShowDay: t.noop, calendarWeeks: !1, clearBtn: !1, daysOfWeekDisabled: [], endDate: 1 / 0, forceParse: !0, format: "mm/dd/yyyy", keyboardNavigation: !0, language: "en", minViewMode: 0, orientation: "auto", rtl: !1, startDate: -1 / 0, startView: 0, todayBtn: !1, todayHighlight: !1, weekStart: 0 },
      h = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];t.fn.datepicker.Constructor = n;var d = t.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear" } },
      c = { modes: [{ clsName: "days", navFnc: "Month", navStep: 1 }, { clsName: "months", navFnc: "FullYear", navStep: 1 }, { clsName: "years", navFnc: "FullYear", navStep: 10 }], isLeapYear: function isLeapYear(t) {
      return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400;
    }, getDaysInMonth: function getDaysInMonth(t, e) {
      return [31, c.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e];
    }, validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g, nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g, parseFormat: function parseFormat(t) {
      var e = t.replace(this.validParts, "\u0000").split("\u0000"),
          i = t.match(this.validParts);if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");return { separators: e, parts: i };
    }, parseDate: function parseDate(i, a, s) {
      if (i instanceof Date) return i;if (("string" == typeof a && (a = c.parseFormat(a)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i))) {
        var o,
            r,
            l = /([\-+]\d+)([dmwy])/,
            h = i.match(/([\-+]\d+)([dmwy])/g);i = new Date();for (var u = 0; u < h.length; u++) switch ((o = l.exec(h[u]), r = parseInt(o[1]), o[2])) {case "d":
            i.setUTCDate(i.getUTCDate() + r);break;case "m":
            i = n.prototype.moveMonth.call(n.prototype, i, r);break;case "w":
            i.setUTCDate(i.getUTCDate() + 7 * r);break;case "y":
            i = n.prototype.moveYear.call(n.prototype, i, r);}return e(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), 0, 0, 0);
      }var p,
          f,
          o,
          h = i && i.match(this.nonpunctuation) || [],
          i = new Date(),
          m = {},
          g = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          v = { yyyy: function yyyy(t, e) {
          return t.setUTCFullYear(e);
        }, yy: function yy(t, e) {
          return t.setUTCFullYear(2000 + e);
        }, m: function m(t, e) {
          if (isNaN(t)) return t;for (e -= 1; 0 > e;) e += 12;for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() != e;) t.setUTCDate(t.getUTCDate() - 1);return t;
        }, d: function d(t, e) {
          return t.setUTCDate(e);
        } };v.M = v.MM = v.mm = v.m, v.dd = v.d, i = e(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0);var y = a.parts.slice();if ((h.length != y.length && (y = t(y).filter(function (e, i) {
        return -1 !== t.inArray(i, g);
      }).toArray()), h.length == y.length)) {
        for (var u = 0, b = y.length; b > u; u++) {
          if ((p = parseInt(h[u], 10), o = y[u], isNaN(p))) switch (o) {case "MM":
              f = t(d[s].months).filter(function () {
                var t = this.slice(0, h[u].length),
                    e = h[u].slice(0, t.length);return t == e;
              }), p = t.inArray(f[0], d[s].months) + 1;break;case "M":
              f = t(d[s].monthsShort).filter(function () {
                var t = this.slice(0, h[u].length),
                    e = h[u].slice(0, t.length);return t == e;
              }), p = t.inArray(f[0], d[s].monthsShort) + 1;}m[o] = p;
        }for (var k, S, u = 0; u < g.length; u++) S = g[u], S in m && !isNaN(m[S]) && (k = new Date(i), v[S](k, m[S]), isNaN(k) || (i = k));
      }return i;
    }, formatDate: function formatDate(e, i, a) {
      "string" == typeof i && (i = c.parseFormat(i));var s = { d: e.getUTCDate(), D: d[a].daysShort[e.getUTCDay()], DD: d[a].days[e.getUTCDay()], m: e.getUTCMonth() + 1, M: d[a].monthsShort[e.getUTCMonth()], MM: d[a].months[e.getUTCMonth()], yy: e.getUTCFullYear().toString().substring(2), yyyy: e.getUTCFullYear() };s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m;for (var e = [], n = t.extend([], i.separators), o = 0, r = i.parts.length; r >= o; o++) n.length && e.push(n.shift()), e.push(s[i.parts[o]]);return e.join("");
    }, headTemplate: "<thead><tr><th class=\"prev\">&laquo;</th><th colspan=\"5\" class=\"datepicker-switch\"></th><th class=\"next\">&raquo;</th></tr></thead>", contTemplate: "<tbody><tr><td colspan=\"7\"></td></tr></tbody>", footTemplate: "<tfoot><tr><th colspan=\"7\" class=\"today\"></th></tr><tr><th colspan=\"7\" class=\"clear\"></th></tr></tfoot>" };c.template = "<div class=\"datepicker\"><div class=\"datepicker-days\"><table class=\" table-condensed\">" + c.headTemplate + "<tbody></tbody>" + c.footTemplate + "</table>" + "</div>" + "<div class=\"datepicker-months\">" + "<table class=\"table-condensed\">" + c.headTemplate + c.contTemplate + c.footTemplate + "</table>" + "</div>" + "<div class=\"datepicker-years\">" + "<table class=\"table-condensed\">" + c.headTemplate + c.contTemplate + c.footTemplate + "</table>" + "</div>" + "</div>", t.fn.datepicker.DPGlobal = c, t.fn.datepicker.noConflict = function () {
    return (t.fn.datepicker = r, this);
  }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", "[data-provide=\"datepicker\"]", function (e) {
    var i = t(this);i.data("datepicker") || (e.preventDefault(), i.datepicker("show"));
  }), t(function () {
    t("[data-provide=\"datepicker-inline\"]").datepicker();
  });
})(window.jQuery);
/*!
 * ClockPicker v0.0.7 (http://weareoutman.github.io/clockpicker/)
 * Copyright 2014 Wang Shenwei.
 * Licensed under MIT (https://github.com/weareoutman/clockpicker/blob/gh-pages/LICENSE)
 */
!(function () {
  function t(t) {
    return document.createElementNS(p, t);
  }function i(t) {
    return (10 > t ? "0" : "") + t;
  }function e(t) {
    var i = ++m + "";return t ? t + i : i;
  }function s(s, r) {
    function p(t, i) {
      var e = u.offset(),
          s = /^touch/.test(t.type),
          o = e.left + b,
          n = e.top + b,
          p = (s ? t.originalEvent.touches[0] : t).pageX - o,
          h = (s ? t.originalEvent.touches[0] : t).pageY - n,
          k = Math.sqrt(p * p + h * h),
          v = !1;if (!i || !(g - y > k || k > g + y)) {
        t.preventDefault();var m = setTimeout(function () {
          c.addClass("clockpicker-moving");
        }, 200);l && u.append(x.canvas), x.setHand(p, h, !i, !0), a.off(d).on(d, function (t) {
          t.preventDefault();var i = /^touch/.test(t.type),
              e = (i ? t.originalEvent.touches[0] : t).pageX - o,
              s = (i ? t.originalEvent.touches[0] : t).pageY - n;(v || e !== p || s !== h) && (v = !0, x.setHand(e, s, !1, !0));
        }), a.off(f).on(f, function (t) {
          a.off(f), t.preventDefault();var e = /^touch/.test(t.type),
              s = (e ? t.originalEvent.changedTouches[0] : t).pageX - o,
              l = (e ? t.originalEvent.changedTouches[0] : t).pageY - n;(i || v) && s === p && l === h && x.setHand(s, l), "hours" === x.currentView ? x.toggleView("minutes", A / 2) : r.autoclose && (x.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
            x.done();
          }, A / 2)), u.prepend(j), clearTimeout(m), c.removeClass("clockpicker-moving"), a.off(d);
        });
      }
    }var h = n(V),
        u = h.find(".clockpicker-plate"),
        v = h.find(".clockpicker-hours"),
        m = h.find(".clockpicker-minutes"),
        T = h.find(".clockpicker-am-pm-block"),
        C = "INPUT" === s.prop("tagName"),
        H = C ? s : s.find("input"),
        P = s.find(".input-group-addon"),
        x = this;if ((this.id = e("cp"), this.element = s, this.options = r, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = C, this.input = H, this.addon = P, this.popover = h, this.plate = u, this.hoursView = v, this.minutesView = m, this.amPmBlock = T, this.spanHours = h.find(".clockpicker-span-hours"), this.spanMinutes = h.find(".clockpicker-span-minutes"), this.spanAmPm = h.find(".clockpicker-span-am-pm"), this.amOrPm = "PM", r.twelvehour)) {
      {
        var S = ["<div class=\"clockpicker-am-pm-block\">", "<button type=\"button\" class=\"btn btn-sm btn-default clockpicker-button clockpicker-am-button\">", "AM</button>", "<button type=\"button\" class=\"btn btn-sm btn-default clockpicker-button clockpicker-pm-button\">", "PM</button>", "</div>"].join("");n(S);
      }n("<button type=\"button\" class=\"btn btn-sm btn-default clockpicker-button am-button\">AM</button>").on("click", function () {
        x.amOrPm = "AM", n(".clockpicker-span-am-pm").empty().append("AM");
      }).appendTo(this.amPmBlock), n("<button type=\"button\" class=\"btn btn-sm btn-default clockpicker-button pm-button\">PM</button>").on("click", function () {
        x.amOrPm = "PM", n(".clockpicker-span-am-pm").empty().append("PM");
      }).appendTo(this.amPmBlock);
    }r.autoclose || n("<button type=\"button\" class=\"btn btn-sm btn-default btn-block clockpicker-button\">" + r.donetext + "</button>").click(n.proxy(this.done, this)).appendTo(h), "top" !== r.placement && "bottom" !== r.placement || "top" !== r.align && "bottom" !== r.align || (r.align = "left"), "left" !== r.placement && "right" !== r.placement || "left" !== r.align && "right" !== r.align || (r.align = "top"), h.addClass(r.placement), h.addClass("clockpicker-align-" + r.align), this.spanHours.click(n.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(n.proxy(this.toggleView, this, "minutes")), H.on("focus.clockpicker click.clockpicker", n.proxy(this.show, this)), P.on("click.clockpicker", n.proxy(this.toggle, this));var E,
        D,
        I,
        B,
        z = n("<div class=\"clockpicker-tick\"></div>");if (r.twelvehour) for (E = 1; 13 > E; E += 1) D = z.clone(), I = E / 6 * Math.PI, B = g, D.css("font-size", "120%"), D.css({ left: b + Math.sin(I) * B - y, top: b - Math.cos(I) * B - y }), D.html(0 === E ? "00" : E), v.append(D), D.on(k, p);else for (E = 0; 24 > E; E += 1) {
      D = z.clone(), I = E / 6 * Math.PI;var O = E > 0 && 13 > E;B = O ? w : g, D.css({ left: b + Math.sin(I) * B - y, top: b - Math.cos(I) * B - y }), O && D.css("font-size", "120%"), D.html(0 === E ? "00" : E), v.append(D), D.on(k, p);
    }for (E = 0; 60 > E; E += 5) D = z.clone(), I = E / 30 * Math.PI, D.css({ left: b + Math.sin(I) * g - y, top: b - Math.cos(I) * g - y }), D.css("font-size", "120%"), D.html(i(E)), m.append(D), D.on(k, p);if ((u.on(k, function (t) {
      0 === n(t.target).closest(".clockpicker-tick").length && p(t, !0);
    }), l)) {
      var j = h.find(".clockpicker-canvas"),
          L = t("svg");L.setAttribute("class", "clockpicker-svg"), L.setAttribute("width", M), L.setAttribute("height", M);var U = t("g");U.setAttribute("transform", "translate(" + b + "," + b + ")");var W = t("circle");W.setAttribute("class", "clockpicker-canvas-bearing"), W.setAttribute("cx", 0), W.setAttribute("cy", 0), W.setAttribute("r", 2);var N = t("line");N.setAttribute("x1", 0), N.setAttribute("y1", 0);var X = t("circle");X.setAttribute("class", "clockpicker-canvas-bg"), X.setAttribute("r", y);var Y = t("circle");Y.setAttribute("class", "clockpicker-canvas-fg"), Y.setAttribute("r", 3.5), U.appendChild(N), U.appendChild(X), U.appendChild(Y), U.appendChild(W), L.appendChild(U), j.append(L), this.hand = N, this.bg = X, this.fg = Y, this.bearing = W, this.g = U, this.canvas = j;
    }o(this.options.init);
  }function o(t) {
    t && "function" == typeof t && t();
  }var c,
      n = window.jQuery,
      r = n(window),
      a = n(document),
      p = "http://www.w3.org/2000/svg",
      l = "SVGAngle" in window && (function () {
    var t,
        i = document.createElement("div");return (i.innerHTML = "<svg/>", t = (i.firstChild && i.firstChild.namespaceURI) == p, i.innerHTML = "", t);
  })(),
      h = (function () {
    var t = document.createElement("div").style;return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "OTransition" in t;
  })(),
      u = ("ontouchstart" in window),
      k = "mousedown" + (u ? " touchstart" : ""),
      d = "mousemove.clockpicker" + (u ? " touchmove.clockpicker" : ""),
      f = "mouseup.clockpicker" + (u ? " touchend.clockpicker" : ""),
      v = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
      m = 0,
      b = 100,
      g = 80,
      w = 54,
      y = 13,
      M = 2 * b,
      A = h ? 350 : 1,
      V = ["<div class=\"popover clockpicker-popover\">", "<div class=\"arrow\"></div>", "<div class=\"popover-title\">", "<span class=\"clockpicker-span-hours text-primary\"></span>", " : ", "<span class=\"clockpicker-span-minutes\"></span>", "<span class=\"clockpicker-span-am-pm\"></span>", "</div>", "<div class=\"popover-content\">", "<div class=\"clockpicker-plate\">", "<div class=\"clockpicker-canvas\"></div>", "<div class=\"clockpicker-dial clockpicker-hours\"></div>", "<div class=\"clockpicker-dial clockpicker-minutes clockpicker-dial-out\"></div>", "</div>", "<span class=\"clockpicker-am-pm-block\">", "</span>", "</div>", "</div>"].join("");s.DEFAULTS = { "default": "", fromnow: 0, placement: "bottom", align: "left", donetext: "完成", autoclose: !1, twelvehour: !1, vibrate: !0 }, s.prototype.toggle = function () {
    this[this.isShown ? "hide" : "show"]();
  }, s.prototype.locate = function () {
    var t = this.element,
        i = this.popover,
        e = t.offset(),
        s = t.outerWidth(),
        o = t.outerHeight(),
        c = this.options.placement,
        n = this.options.align,
        r = {};switch ((i.show(), c)) {case "bottom":
        r.top = e.top + o;break;case "right":
        r.left = e.left + s;break;case "top":
        r.top = e.top - i.outerHeight();break;case "left":
        r.left = e.left - i.outerWidth();}switch (n) {case "left":
        r.left = e.left;break;case "right":
        r.left = e.left + s - i.outerWidth();break;case "top":
        r.top = e.top;break;case "bottom":
        r.top = e.top + o - i.outerHeight();}i.css(r);
  }, s.prototype.show = function () {
    if (!this.isShown) {
      o(this.options.beforeShow);var t = this;this.isAppended || (c = n(document.body).append(this.popover), r.on("resize.clockpicker" + this.id, function () {
        t.isShown && t.locate();
      }), this.isAppended = !0);var e = ((this.input.prop("value") || this.options["default"] || "") + "").split(":");if ("now" === e[0]) {
        var s = new Date(+new Date() + this.options.fromnow);e = [s.getHours(), s.getMinutes()];
      }this.hours = +e[0] || 0, this.minutes = +e[1] || 0, this.spanHours.html(i(this.hours)), this.spanMinutes.html(i(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, a.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (i) {
        var e = n(i.target);0 === e.closest(t.popover).length && 0 === e.closest(t.addon).length && 0 === e.closest(t.input).length && t.hide();
      }), a.on("keyup.clockpicker." + this.id, function (i) {
        27 === i.keyCode && t.hide();
      }), o(this.options.afterShow);
    }
  }, s.prototype.hide = function () {
    o(this.options.beforeHide), this.isShown = !1, a.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), a.off("keyup.clockpicker." + this.id), this.popover.hide(), o(this.options.afterHide);
  }, s.prototype.toggleView = function (t, i) {
    var e = !1;"minutes" === t && "visible" === n(this.hoursView).css("visibility") && (o(this.options.beforeHourSelect), e = !0);var s = "hours" === t,
        c = s ? this.hoursView : this.minutesView,
        r = s ? this.minutesView : this.hoursView;this.currentView = t, this.spanHours.toggleClass("text-primary", s), this.spanMinutes.toggleClass("text-primary", !s), r.addClass("clockpicker-dial-out"), c.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(i), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
      r.css("visibility", "hidden");
    }, A), e && o(this.options.afterHourSelect);
  }, s.prototype.resetClock = function (t) {
    var i = this.currentView,
        e = this[i],
        s = "hours" === i,
        o = Math.PI / (s ? 6 : 30),
        c = e * o,
        n = s && e > 0 && 13 > e ? w : g,
        r = Math.sin(c) * n,
        a = -Math.cos(c) * n,
        p = this;l && t ? (p.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
      p.canvas.removeClass("clockpicker-canvas-out"), p.setHand(r, a);
    }, t)) : this.setHand(r, a);
  }, s.prototype.setHand = function (t, e, s, o) {
    var c,
        r = Math.atan2(t, -e),
        a = "hours" === this.currentView,
        p = Math.PI / (a || s ? 6 : 30),
        h = Math.sqrt(t * t + e * e),
        u = this.options,
        k = a && (g + w) / 2 > h,
        d = k ? w : g;if ((u.twelvehour && (d = g), 0 > r && (r = 2 * Math.PI + r), c = Math.round(r / p), r = c * p, u.twelvehour ? a ? 0 === c && (c = 12) : (s && (c *= 5), 60 === c && (c = 0)) : a ? (12 === c && (c = 0), c = k ? 0 === c ? 12 : c : 0 === c ? 0 : c + 12) : (s && (c *= 5), 60 === c && (c = 0)), this[this.currentView] !== c && v && this.options.vibrate && (this.vibrateTimer || (navigator[v](10), this.vibrateTimer = setTimeout(n.proxy(function () {
      this.vibrateTimer = null;
    }, this), 100))), this[this.currentView] = c, this[a ? "spanHours" : "spanMinutes"].html(i(c)), !l)) return void this[a ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
      var t = n(this);t.toggleClass("active", c === +t.html());
    });o || !a && c % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));var f = Math.sin(r) * d,
        m = -Math.cos(r) * d;this.hand.setAttribute("x2", f), this.hand.setAttribute("y2", m), this.bg.setAttribute("cx", f), this.bg.setAttribute("cy", m), this.fg.setAttribute("cx", f), this.fg.setAttribute("cy", m);
  }, s.prototype.done = function () {
    o(this.options.beforeDone), this.hide();var t = this.input.prop("value"),
        e = i(this.hours) + ":" + i(this.minutes);this.options.twelvehour && (e += this.amOrPm), this.input.prop("value", e), e !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), o(this.options.afterDone);
  }, s.prototype.remove = function () {
    this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.addon.off("click.clockpicker"), this.isShown && this.hide(), this.isAppended && (r.off("resize.clockpicker" + this.id), this.popover.remove());
  }, n.fn.clockpicker = function (t) {
    var i = Array.prototype.slice.call(arguments, 1);return this.each(function () {
      var e = n(this),
          o = e.data("clockpicker");if (o) "function" == typeof o[t] && o[t].apply(o, i);else {
        var c = n.extend({}, s.DEFAULTS, e.data(), "object" == typeof t && t);e.data("clockpicker", new s(e, c));
      }
    });
  };
})();
//# sourceMappingURL=bootstrap.js.map