/*! jQuery v1.8.3 jquery.com | jquery.org/license */
"use strict";

(function (e, t) {
  function _(e) {
    var t = M[e] = {};return (v.each(e.split(y), function (e, n) {
      t[n] = !0;
    }), t);
  }function H(e, n, r) {
    if (r === t && e.nodeType === 1) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();r = e.getAttribute(i);if (typeof r == "string") {
        try {
          r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r;
        } catch (s) {}v.data(e, n, r);
      } else r = t;
    }return r;
  }function B(e) {
    var t;for (t in e) {
      if (t === "data" && v.isEmptyObject(e[t])) continue;if (t !== "toJSON") return !1;
    }return !0;
  }function et() {
    return !1;
  }function tt() {
    return !0;
  }function ut(e) {
    return !e || !e.parentNode || e.parentNode.nodeType === 11;
  }function at(e, t) {
    do e = e[t]; while (e && e.nodeType !== 1);return e;
  }function ft(e, t, n) {
    t = t || 0;if (v.isFunction(t)) return v.grep(e, function (e, r) {
      var i = !!t.call(e, r, e);return i === n;
    });if (t.nodeType) return v.grep(e, function (e, r) {
      return e === t === n;
    });if (typeof t == "string") {
      var r = v.grep(e, function (e) {
        return e.nodeType === 1;
      });if (it.test(t)) return v.filter(t, r, !n);t = v.filter(t, r);
    }return v.grep(e, function (e, r) {
      return v.inArray(e, t) >= 0 === n;
    });
  }function lt(e) {
    var t = ct.split("|"),
        n = e.createDocumentFragment();if (n.createElement) while (t.length) n.createElement(t.pop());return n;
  }function Lt(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
  }function At(e, t) {
    if (t.nodeType !== 1 || !v.hasData(e)) return;var n,
        r,
        i,
        s = v._data(e),
        o = v._data(t, s),
        u = s.events;if (u) {
      delete o.handle, o.events = {};for (n in u) for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r]);
    }o.data && (o.data = v.extend({}, o.data));
  }function Ot(e, t) {
    var n;if (t.nodeType !== 1) return;t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando);
  }function Mt(e) {
    return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : [];
  }function _t(e) {
    Et.test(e.type) && (e.defaultChecked = e.checked);
  }function Qt(e, t) {
    if (t in e) return t;var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = Jt.length;while (i--) {
      t = Jt[i] + n;if (t in e) return t;
    }return r;
  }function Gt(e, t) {
    return (e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e));
  }function Yt(e, t) {
    var n,
        r,
        i = [],
        s = 0,
        o = e.length;for (; s < o; s++) {
      n = e[s];if (!n.style) continue;i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r));
    }for (s = 0; s < o; s++) {
      n = e[s];if (!n.style) continue;if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none";
    }return e;
  }function Zt(e, t, n) {
    var r = Rt.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }function en(e, t, n, r) {
    var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
        s = 0;for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));return s;
  }function tn(e, t, n) {
    var r = t === "width" ? e.offsetWidth : e.offsetHeight,
        i = !0,
        s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";if (r <= 0 || r == null) {
      r = Dt(e, t);if (r < 0 || r == null) r = e.style[t];if (Ut.test(r)) return r;i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0;
    }return r + en(e, t, n || (s ? "border" : "content"), i) + "px";
  }function nn(e) {
    if (Wt[e]) return Wt[e];var t = v("<" + e + ">").appendTo(i.body),
        n = t.css("display");t.remove();if (n === "none" || n === "") {
      Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 }));if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt);
    }return (Wt[e] = n, n);
  }function fn(e, t, n, r) {
    var i;if (v.isArray(t)) v.each(t, function (t, i) {
      n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r);
    });else if (!n && v.type(t) === "object") for (i in t) fn(e + "[" + i + "]", t[i], n, r);else r(e, t);
  }function Cn(e) {
    return function (t, n) {
      typeof t != "string" && (n = t, t = "*");var r,
          i,
          s,
          o = t.toLowerCase().split(y),
          u = 0,
          a = o.length;if (v.isFunction(n)) for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n);
    };
  }function kn(e, n, r, i, s, o) {
    s = s || n.dataTypes[0], o = o || {}, o[s] = !0;var u,
        a = e[s],
        f = 0,
        l = a ? a.length : 0,
        c = e === Sn;for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));return ((c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u);
  }function Ln(e, n) {
    var r,
        i,
        s = v.ajaxSettings.flatOptions || {};for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);i && v.extend(!0, e, i);
  }function An(e, n, r) {
    var i,
        s,
        o,
        u,
        a = e.contents,
        f = e.dataTypes,
        l = e.responseFields;for (s in l) s in r && (n[l[s]] = r[s]);while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));if (i) for (s in a) if (a[s] && a[s].test(i)) {
      f.unshift(s);break;
    }if (f[0] in r) o = f[0];else {
      for (s in r) {
        if (!f[0] || e.converters[s + " " + f[0]]) {
          o = s;break;
        }u || (u = s);
      }o = o || u;
    }if (o) return (o !== f[0] && f.unshift(o), r[o]);
  }function On(e, t) {
    var n,
        r,
        i,
        s,
        o = e.dataTypes.slice(),
        u = o[0],
        a = {},
        f = 0;e.dataFilter && (t = e.dataFilter(t, e.dataType));if (o[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];for (; i = o[++f];) if (i !== "*") {
      if (u !== "*" && u !== i) {
        n = a[u + " " + i] || a["* " + i];if (!n) for (r in a) {
          s = r.split(" ");if (s[1] === i) {
            n = a[u + " " + s[0]] || a["* " + s[0]];if (n) {
              n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));break;
            }
          }
        }if (n !== !0) if (n && e["throws"]) t = n(t);else try {
          t = n(t);
        } catch (l) {
          return { state: "parsererror", error: n ? l : "No conversion from " + u + " to " + i };
        }
      }u = i;
    }return { state: "success", data: t };
  }function Fn() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }function In() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }function $n() {
    return (setTimeout(function () {
      qn = t;
    }, 0), qn = v.now());
  }function Jn(e, t) {
    v.each(t, function (t, n) {
      var r = (Vn[t] || []).concat(Vn["*"]),
          i = 0,
          s = r.length;for (; i < s; i++) if (r[i].call(e, t, n)) return;
    });
  }function Kn(e, t, n) {
    var r,
        i = 0,
        s = 0,
        o = Xn.length,
        u = v.Deferred().always(function () {
      delete a.elem;
    }),
        a = function a() {
      var t = qn || $n(),
          n = Math.max(0, f.startTime + f.duration - t),
          r = n / f.duration || 0,
          i = 1 - r,
          s = 0,
          o = f.tweens.length;for (; s < o; s++) f.tweens[s].run(i);return (u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1));
    },
        f = u.promise({ elem: e, props: v.extend({}, t), opts: v.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: qn || $n(), duration: n.duration, tweens: [], createTween: function createTween(t, n, r) {
        var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);return (f.tweens.push(i), i);
      }, stop: function stop(t) {
        var n = 0,
            r = t ? f.tweens.length : 0;for (; n < r; n++) f.tweens[n].run(1);return (t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this);
      } }),
        l = f.props;Qn(l, f.opts.specialEasing);for (; i < o; i++) {
      r = Xn[i].call(f, e, l, f.opts);if (r) return r;
    }return (Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, { anim: f, queue: f.opts.queue, elem: e })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always));
  }function Qn(e, t) {
    var n, r, i, s, o;for (n in e) {
      r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];if (o && "expand" in o) {
        s = o.expand(s), delete e[r];for (n in s) n in e || (e[n] = s[n], t[n] = i);
      } else t[r] = i;
    }
  }function Gn(e, t, n) {
    var r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h = this,
        p = e.style,
        d = {},
        m = [],
        g = e.nodeType && Gt(e);n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
      l.unqueued || c();
    }), l.unqueued++, h.always(function () {
      h.always(function () {
        l.unqueued--, v.queue(e, "fx").length || l.empty.fire();
      });
    })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));for (r in t) {
      s = t[r];if (Un.exec(s)) {
        delete t[r], a = a || s === "toggle";if (s === (g ? "hide" : "show")) continue;m.push(r);
      }
    }o = m.length;if (o) {
      u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function () {
        v(e).hide();
      }), h.done(function () {
        var t;v.removeData(e, "fxshow", !0);for (t in d) v.style(e, t, d[t]);
      });for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0));
    }
  }function Yn(e, t, n, r, i) {
    return new Yn.prototype.init(e, t, n, r, i);
  }function Zn(e, t) {
    var n,
        r = { height: e },
        i = 0;t = t ? 1 : 0;for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;return (t && (r.opacity = r.width = e), r);
  }function tr(e) {
    return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
  }var n,
      r,
      i = e.document,
      s = e.location,
      o = e.navigator,
      u = e.jQuery,
      a = e.$,
      f = Array.prototype.push,
      l = Array.prototype.slice,
      c = Array.prototype.indexOf,
      h = Object.prototype.toString,
      p = Object.prototype.hasOwnProperty,
      d = String.prototype.trim,
      v = function v(e, t) {
    return new v.fn.init(e, t, n);
  },
      m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
      g = /\S/,
      y = /\s+/,
      b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      S = /^[\],:{}\s]*$/,
      x = /(?:^|:|,)(?:\s*\[)+/g,
      T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
      C = /^-ms-/,
      k = /-([\da-z])/gi,
      L = function L(e, t) {
    return (t + "").toUpperCase();
  },
      A = function A() {
    i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready());
  },
      O = {};v.fn = v.prototype = { constructor: v, init: function init(e, n, r) {
      var s, o, u, a;if (!e) return this;if (e.nodeType) return (this.context = this[0] = e, this.length = 1, this);if (typeof e == "string") {
        e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);if (s && (s[1] || !n)) {
          if (s[1]) return (n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e));o = i.getElementById(s[2]);if (o && o.parentNode) {
            if (o.id !== s[2]) return r.find(e);this.length = 1, this[0] = o;
          }return (this.context = i, this.selector = e, this);
        }return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
      }return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this));
    }, selector: "", jquery: "1.8.3", length: 0, size: function size() {
      return this.length;
    }, toArray: function toArray() {
      return l.call(this);
    }, get: function get(e) {
      return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
    }, pushStack: function pushStack(e, t, n) {
      var r = v.merge(this.constructor(), e);return (r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r);
    }, each: function each(e, t) {
      return v.each(this, e, t);
    }, ready: function ready(e) {
      return (v.ready.promise().done(e), this);
    }, eq: function eq(e) {
      return (e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, slice: function slice() {
      return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","));
    }, map: function map(e) {
      return this.pushStack(v.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: f, sort: [].sort, splice: [].splice }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () {
    var e,
        n,
        r,
        i,
        s,
        o,
        u = arguments[0] || {},
        a = 1,
        f = arguments.length,
        l = !1;typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);for (; a < f; a++) if ((e = arguments[a]) != null) for (n in e) {
      r = u[n], i = e[n];if (u === i) continue;l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i);
    }return u;
  }, v.extend({ noConflict: function noConflict(t) {
      return (e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v);
    }, isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
      e ? v.readyWait++ : v.ready(!0);
    }, ready: function ready(e) {
      if (e === !0 ? --v.readyWait : v.isReady) return;if (!i.body) return setTimeout(v.ready, 1);v.isReady = !0;if (e !== !0 && --v.readyWait > 0) return;r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready");
    }, isFunction: function isFunction(e) {
      return v.type(e) === "function";
    }, isArray: Array.isArray || function (e) {
      return v.type(e) === "array";
    }, isWindow: function isWindow(e) {
      return e != null && e == e.window;
    }, isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }, type: function type(e) {
      return e == null ? String(e) : O[h.call(e)] || "object";
    }, isPlainObject: function isPlainObject(e) {
      if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;try {
        if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }var r;for (r in e);return r === t || p.call(e, r);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) return !1;return !0;
    }, error: function error(e) {
      throw new Error(e);
    }, parseHTML: function parseHTML(e, t, n) {
      var r;return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)));
    }, parseJSON: function parseJSON(t) {
      if (!t || typeof t != "string") return null;t = v.trim(t);if (e.JSON && e.JSON.parse) return e.JSON.parse(t);if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return new Function("return " + t)();v.error("Invalid JSON: " + t);
    }, parseXML: function parseXML(n) {
      var r, i;if (!n || typeof n != "string") return null;try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
      } catch (s) {
        r = t;
      }return ((!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r);
    }, noop: function noop() {}, globalEval: function globalEval(t) {
      t && g.test(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    }, camelCase: function camelCase(e) {
      return e.replace(C, "ms-").replace(k, L);
    }, nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function each(e, n, r) {
      var i,
          s = 0,
          o = e.length,
          u = o === t || v.isFunction(e);if (r) {
        if (u) {
          for (i in e) if (n.apply(e[i], r) === !1) break;
        } else for (; s < o;) if (n.apply(e[s++], r) === !1) break;
      } else if (u) {
        for (i in e) if (n.call(e[i], i, e[i]) === !1) break;
      } else for (; s < o;) if (n.call(e[s], s, e[s++]) === !1) break;return e;
    }, trim: d && !d.call("﻿ ") ? function (e) {
      return e == null ? "" : d.call(e);
    } : function (e) {
      return e == null ? "" : (e + "").replace(b, "");
    }, makeArray: function makeArray(e, t) {
      var n,
          r = t || [];return (e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r);
    }, inArray: function inArray(e, t, n) {
      var r;if (t) {
        if (c) return c.call(t, e, n);r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;for (; n < r; n++) if (n in t && t[n] === e) return n;
      }return -1;
    }, merge: function merge(e, n) {
      var r = n.length,
          i = e.length,
          s = 0;if (typeof r == "number") for (; s < r; s++) e[i++] = n[s];else while (n[s] !== t) e[i++] = n[s++];return (e.length = i, e);
    }, grep: function grep(e, t, n) {
      var r,
          i = [],
          s = 0,
          o = e.length;n = !!n;for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);return i;
    }, map: function map(e, n, r) {
      var i,
          s,
          o = [],
          u = 0,
          a = e.length,
          f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));if (f) for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);else for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);return o.concat.apply([], o);
    }, guid: 1, proxy: function proxy(e, n) {
      var r, i, s;return (typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function () {
        return e.apply(n, i.concat(l.call(arguments)));
      }, s.guid = e.guid = e.guid || v.guid++, s) : t);
    }, access: function access(e, n, r, i, s, o, u) {
      var a,
          f = r == null,
          l = 0,
          c = e.length;if (r && typeof r == "object") {
        for (l in r) v.access(e, n, l, r[l], 1, o, i);s = 1;
      } else if (i !== t) {
        a = u === t && v.isFunction(i), f && (a ? (a = n, n = function (e, t, n) {
          return a.call(v(e), n);
        }) : (n.call(e, i), n = null));if (n) for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);s = 1;
      }return s ? e : f ? n.call(e) : c ? n(e[0], r) : o;
    }, now: function now() {
      return new Date().getTime();
    } }), v.ready.promise = function (t) {
    if (!r) {
      r = v.Deferred();if (i.readyState === "complete") setTimeout(v.ready, 1);else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);else {
        i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);var n = !1;try {
          n = e.frameElement == null && i.documentElement;
        } catch (s) {}n && n.doScroll && (function o() {
          if (!v.isReady) {
            try {
              n.doScroll("left");
            } catch (e) {
              return setTimeout(o, 50);
            }v.ready();
          }
        })();
      }
    }return r.promise(t);
  }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
    O["[object " + t + "]"] = t.toLowerCase();
  }), n = v(i);var M = {};v.Callbacks = function (e) {
    e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);var n,
        r,
        i,
        s,
        o,
        u,
        a = [],
        f = !e.once && [],
        l = function l(t) {
      n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;for (; a && u < o; u++) if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
        n = !1;break;
      }i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable());
    },
        c = { add: function add() {
        if (a) {
          var t = a.length;(function r(t) {
            v.each(t, function (t, n) {
              var i = v.type(n);i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n);
            });
          })(arguments), i ? o = a.length : n && (s = t, l(n));
        }return this;
      }, remove: function remove() {
        return (a && v.each(arguments, function (e, t) {
          var n;while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--);
        }), this);
      }, has: function has(e) {
        return v.inArray(e, a) > -1;
      }, empty: function empty() {
        return (a = [], this);
      }, disable: function disable() {
        return (a = f = n = t, this);
      }, disabled: function disabled() {
        return !a;
      }, lock: function lock() {
        return (f = t, n || c.disable(), this);
      }, locked: function locked() {
        return !f;
      }, fireWith: function fireWith(e, t) {
        return (t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this);
      }, fire: function fire() {
        return (c.fireWith(this, arguments), this);
      }, fired: function fired() {
        return !!r;
      } };return c;
  }, v.extend({ Deferred: function Deferred(e) {
      var t = [["resolve", "done", v.Callbacks("once memory"), "resolved"], ["reject", "fail", v.Callbacks("once memory"), "rejected"], ["notify", "progress", v.Callbacks("memory")]],
          n = "pending",
          r = { state: function state() {
          return n;
        }, always: function always() {
          return (i.done(arguments).fail(arguments), this);
        }, then: function then() {
          var e = arguments;return v.Deferred(function (n) {
            v.each(t, function (t, r) {
              var s = r[0],
                  o = e[t];i[r[1]](v.isFunction(o) ? function () {
                var e = o.apply(this, arguments);e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e]);
              } : n[s]);
            }), e = null;
          }).promise();
        }, promise: function promise(e) {
          return e != null ? v.extend(e, r) : r;
        } },
          i = {};return (r.pipe = r.then, v.each(t, function (e, s) {
        var o = s[2],
            u = s[3];r[s[1]] = o.add, u && o.add(function () {
          n = u;
        }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith;
      }), r.promise(i), e && e.call(i, i), i);
    }, when: function when(e) {
      var t = 0,
          n = l.call(arguments),
          r = n.length,
          i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
          s = i === 1 ? e : v.Deferred(),
          o = function o(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n);
        };
      },
          u,
          a,
          f;if (r > 1) {
        u = new Array(r), a = new Array(r), f = new Array(r);for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
      }return (i || s.resolveWith(f, n), s.promise());
    } }), v.support = (function () {
    var t,
        n,
        r,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p = i.createElement("div");p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];if (!n || !r || !n.length) return {};s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = { leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: r.getAttribute("href") === "/a", opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: u.value === "on", optSelected: o.selected, getSetAttribute: p.className !== "t", enctype: !!i.createElement("form").enctype, html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", boxModel: i.compatMode === "CSS1Compat", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;try {
      delete p.test;
    } catch (d) {
      t.deleteExpando = !1;
    }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function () {
      t.noCloneEvent = !1;
    }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);if (p.attachEvent) for (l in { submit: !0, change: !0, focusin: !0 }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;return (v(function () {
      var n,
          r,
          s,
          o,
          u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
          a = i.getElementsByTagName("body")[0];if (!a) return;n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || { width: "4px" }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null;
    }), a.removeChild(p), n = r = s = o = u = a = p = null, t);
  })();var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      P = /([A-Z])/g;v.extend({ cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function hasData(e) {
      return (e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e));
    }, data: function data(e, n, r, i) {
      if (!v.acceptData(e)) return;var s,
          o,
          u = v.expando,
          a = typeof n == "string",
          f = e.nodeType,
          l = f ? v.cache : e,
          c = f ? e[u] : e[u] && u;if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);return (s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o);
    }, removeData: function removeData(e, t, n) {
      if (!v.acceptData(e)) return;var r,
          i,
          s,
          o = e.nodeType,
          u = o ? v.cache : e,
          a = o ? e[v.expando] : v.expando;if (!u[a]) return;if (t) {
        r = n ? u[a] : u[a].data;if (r) {
          v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));for (i = 0, s = t.length; i < s; i++) delete r[t[i]];if (!(n ? B : v.isEmptyObject)(r)) return;
        }
      }if (!n) {
        delete u[a].data;if (!B(u[a])) return;
      }o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null;
    }, _data: function _data(e, t, n) {
      return v.data(e, t, n, !0);
    }, acceptData: function acceptData(e) {
      var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];return !t || t !== !0 && e.getAttribute("classid") === t;
    } }), v.fn.extend({ data: function data(e, n) {
      var r,
          i,
          s,
          o,
          u,
          a = this[0],
          f = 0,
          l = null;if (e === t) {
        if (this.length) {
          l = v.data(a);if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
            s = a.attributes;for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));v._data(a, "parsedAttrs", !0);
          }
        }return l;
      }return typeof e == "object" ? this.each(function () {
        v.data(this, e);
      }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function (n) {
        if (n === t) return (l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l);r[1] = n, this.each(function () {
          var t = v(this);t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r);
        });
      }, null, n, arguments.length > 1, null, !1));
    }, removeData: function removeData(e) {
      return this.each(function () {
        v.removeData(this, e);
      });
    } }), v.extend({ queue: function queue(e, t, n) {
      var r;if (e) return (t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []);
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = v.queue(e, t),
          r = n.length,
          i = n.shift(),
          s = v._queueHooks(e, t),
          o = function o() {
        v.dequeue(e, t);
      };i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return v._data(e, n) || v._data(e, n, { empty: v.Callbacks("once memory").add(function () {
          v.removeData(e, t + "queue", !0), v.removeData(e, n, !0);
        }) });
    } }), v.fn.extend({ queue: function queue(e, n) {
      var r = 2;return (typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = v.queue(this, e, n);v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e);
      }));
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        v.dequeue(this, e);
      });
    }, delay: function delay(e, t) {
      return (e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);n.stop = function () {
          clearTimeout(r);
        };
      }));
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, n) {
      var r,
          i = 1,
          s = v.Deferred(),
          o = this,
          u = this.length,
          a = function a() {
        --i || s.resolveWith(o, [o]);
      };typeof e != "string" && (n = e, e = t), e = e || "fx";while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));return (a(), s.promise(n));
    } });var j,
      F,
      I,
      q = /[\t\r\n]/g,
      R = /\r/g,
      U = /^(?:button|input)$/i,
      z = /^(?:button|input|object|select|textarea)$/i,
      W = /^a(?:rea|)$/i,
      X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      V = v.support.getSetAttribute;v.fn.extend({ attr: function attr(e, t) {
      return v.access(this, v.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        v.removeAttr(this, e);
      });
    }, prop: function prop(e, t) {
      return v.access(this, v.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return (e = v.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      }));
    }, addClass: function addClass(e) {
      var t, n, r, i, s, o, u;if (v.isFunction(e)) return this.each(function (t) {
        v(this).addClass(e.call(this, t, this.className));
      });if (e && typeof e == "string") {
        t = e.split(y);for (n = 0, r = this.length; n < r; n++) {
          i = this[n];if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;else {
            s = " " + i.className + " ";for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");i.className = v.trim(s);
          }
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var n, r, i, s, o, u, a;if (v.isFunction(e)) return this.each(function (t) {
        v(this).removeClass(e.call(this, t, this.className));
      });if (e && typeof e == "string" || e === t) {
        n = (e || "").split(y);for (u = 0, a = this.length; u < a; u++) {
          i = this[u];if (i.nodeType === 1 && i.className) {
            r = (" " + i.className + " ").replace(q, " ");for (s = 0, o = n.length; s < o; s++) while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");i.className = e ? v.trim(r) : "";
          }
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e,
          r = typeof t == "boolean";return v.isFunction(e) ? this.each(function (n) {
        v(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if (n === "string") {
          var i,
              s = 0,
              o = v(this),
              u = t,
              a = e.split(y);while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i);
        } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || "";
      });
    }, hasClass: function hasClass(e) {
      var t = " " + e + " ",
          n = 0,
          r = this.length;for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;return !1;
    }, val: function val(e) {
      var n,
          r,
          i,
          s = this[0];if (!arguments.length) {
        if (s) return (n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r));return;
      }return (i = v.isFunction(e), this.each(function (r) {
        var s,
            o = v(this);if (this.nodeType !== 1) return;i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {
          return e == null ? "" : e + "";
        })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s;
      }));
    } }), v.extend({ valHooks: { option: { get: function get(e) {
          var t = e.attributes.value;return !t || t.specified ? e.value : e.text;
        } }, select: { get: function get(e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              s = e.type === "select-one" || i < 0,
              o = s ? null : [],
              u = s ? i + 1 : r.length,
              a = i < 0 ? u : s ? i : 0;for (; a < u; a++) {
            n = r[a];if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
              t = v(n).val();if (s) return t;o.push(t);
            }
          }return o;
        }, set: function set(e, t) {
          var n = v.makeArray(t);return (v(e).find("option").each(function () {
            this.selected = v.inArray(v(this).val(), n) >= 0;
          }), n.length || (e.selectedIndex = -1), n);
        } } }, attrFn: {}, attr: function attr(e, n, r, i) {
      var s,
          o,
          u,
          a = e.nodeType;if (!e || a === 3 || a === 8 || a === 2) return;if (i && v.isFunction(v.fn[n])) return v(e)[n](r);if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));if (r !== t) {
        if (r === null) {
          v.removeAttr(e, n);return;
        }return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r);
      }return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s);
    }, removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i,
          s,
          o = 0;if (t && e.nodeType === 1) {
        r = t.split(y);for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1));
      }
    }, attrHooks: { type: { set: function set(e, t) {
          if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
            var n = e.value;return (e.setAttribute("type", t), n && (e.value = n), t);
          }
        } }, value: { get: function get(e, t) {
          return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null;
        }, set: function set(e, t, n) {
          if (j && v.nodeName(e, "button")) return j.set(e, t, n);e.value = t;
        } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function prop(e, n, r) {
      var i,
          s,
          o,
          u = e.nodeType;if (!e || u === 3 || u === 8 || u === 2) return;return (o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]);
    }, propHooks: { tabIndex: { get: function get(e) {
          var n = e.getAttributeNode("tabindex");return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t;
        } } } }), F = { get: function get(e, n) {
      var r,
          i = v.prop(e, n);return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t;
    }, set: function set(e, t, n) {
      var r;return (t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n);
    } }, V || (I = { name: !0, id: !0, coords: !0 }, j = v.valHooks.button = { get: function get(e, n) {
      var r;return (r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t);
    }, set: function set(e, t, n) {
      var r = e.getAttributeNode(n);return (r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + "");
    } }, v.each(["width", "height"], function (e, t) {
    v.attrHooks[t] = v.extend(v.attrHooks[t], { set: function set(e, n) {
        if (n === "") return (e.setAttribute(t, "auto"), n);
      } });
  }), v.attrHooks.contenteditable = { get: j.get, set: function set(e, t, n) {
      t === "" && (t = "false"), j.set(e, t, n);
    } }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function (e, n) {
    v.attrHooks[n] = v.extend(v.attrHooks[n], { get: function get(e) {
        var r = e.getAttribute(n, 2);return r === null ? t : r;
      } });
  }), v.support.style || (v.attrHooks.style = { get: function get(e) {
      return e.style.cssText.toLowerCase() || t;
    }, set: function set(e, t) {
      return e.style.cssText = t + "";
    } }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, { get: function get(e) {
      var t = e.parentNode;return (t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null);
    } })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () {
    v.valHooks[this] = { get: function get(e) {
        return e.getAttribute("value") === null ? "on" : e.value;
      } };
  }), v.each(["radio", "checkbox"], function () {
    v.valHooks[this] = v.extend(v.valHooks[this], { set: function set(e, t) {
        if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0;
      } });
  });var $ = /^(?:textarea|input|select)$/i,
      J = /^([^\.]*|)(?:\.(.+)|)$/,
      K = /(?:^|\s)hover(\.\S+|)\b/,
      Q = /^key/,
      G = /^(?:mouse|contextmenu)|click/,
      Y = /^(?:focusinfocus|focusoutblur)$/,
      Z = function Z(e) {
    return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1");
  };v.event = { add: function add(e, n, r, i, s) {
      var o, u, a, f, l, c, h, p, d, m, g;if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
        return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments);
      }, u.elem = e), n = v.trim(Z(n)).split(" ");for (f = 0; f < n.length; f++) {
        l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({ type: c, origType: l[1], data: i, handler: r, guid: r.guid, selector: s, needsContext: s && v.expr.match.needsContext.test(s), namespace: h.join(".") }, d), m = a[c];if (!m) {
          m = a[c] = [], m.delegateCount = 0;if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u);
        }g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0;
      }e = null;
    }, global: {}, remove: function remove(e, t, n, r, i) {
      var s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          m,
          g = v.hasData(e) && v._data(e);if (!g || !(h = g.events)) return;t = v.trim(Z(t || "")).split(" ");for (s = 0; s < t.length; s++) {
        o = J.exec(t[s]) || [], u = a = o[1], f = o[2];if (!u) {
          for (u in h) v.event.remove(e, u + t[s], n, r, !0);continue;
        }p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u]);
      }v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0));
    }, customEvent: { getData: !0, setData: !0, changeData: !0 }, trigger: function trigger(n, r, s, o) {
      if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
        var u,
            a,
            f,
            l,
            c,
            h,
            p,
            d,
            m,
            g,
            y = n.type || n,
            b = [];if (Y.test(y + v.event.triggered)) return;y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";if (!s) {
          u = v.cache;for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);return;
        }n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};if (p.trigger && p.trigger.apply(s, r) === !1) return;m = [[s, p.bindType || y]];if (!o && !p.noBubble && !v.isWindow(s)) {
          g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g]);
        }for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();return (n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result);
      }return;
    }, dispatch: function dispatch(n) {
      n = v.event.fix(n || e.event);var r,
          i,
          s,
          o,
          u,
          a,
          f,
          c,
          h,
          p,
          d = (v._data(this, "events") || {})[n.type] || [],
          m = d.delegateCount,
          g = l.call(arguments),
          y = !n.exclusive && !n.namespace,
          b = v.event.special[n.type] || {},
          w = [];g[0] = n, n.delegateTarget = this;if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;if (m && (!n.button || n.type !== "click")) for (s = n.target; s != this; s = s.parentNode || this) if (s.disabled !== !0 || n.type !== "click") {
        u = {}, f = [];for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);f.length && w.push({ elem: s, matches: f });
      }d.length > m && w.push({ elem: this, matches: d.slice(m) });for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
        a = w[r], n.currentTarget = a.elem;for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
          c = a.matches[i];if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()));
        }
      }return (b.postDispatch && b.postDispatch.call(this, n), n.result);
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
        return (e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e);
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, n) {
        var r,
            s,
            o,
            u = n.button,
            a = n.fromElement;return (e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e);
      } }, fix: function fix(e) {
      if (e[v.expando]) return e;var t,
          n,
          r = e,
          s = v.event.fixHooks[e.type] || {},
          o = s.props ? this.props.concat(s.props) : this.props;e = v.Event(r);for (t = o.length; t;) n = o[--t], e[n] = r[n];return (e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e);
    }, special: { load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function setup(e, t, n) {
          v.isWindow(this) && (this.onbeforeunload = n);
        }, teardown: function teardown(e, t) {
          this.onbeforeunload === t && (this.onbeforeunload = null);
        } } }, simulate: function simulate(e, t, n, r) {
      var i = v.extend(new v.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    } }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on" + t;e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n));
  }, v.Event = function (e, t) {
    if (!(this instanceof v.Event)) return new v.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0;
  }, v.Event.prototype = { preventDefault: function preventDefault() {
      this.isDefaultPrevented = tt;var e = this.originalEvent;if (!e) return;e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }, stopPropagation: function stopPropagation() {
      this.isPropagationStopped = tt;var e = this.originalEvent;if (!e) return;e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0;
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = tt, this.stopPropagation();
    }, isDefaultPrevented: et, isPropagationStopped: et, isImmediatePropagationStopped: et }, v.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
    v.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            s = e.handleObj,
            o = s.selector;if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;return n;
      } };
  }), v.support.submitBubbles || (v.event.special.submit = { setup: function setup() {
      if (v.nodeName(this, "form")) return !1;v.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target,
            r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0;
        }), v._data(r, "_submit_attached", !0));
      });
    }, postDispatch: function postDispatch(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0));
    }, teardown: function teardown() {
      if (v.nodeName(this, "form")) return !1;v.event.remove(this, "._submit");
    } }), v.support.changeBubbles || (v.event.special.change = { setup: function setup() {
      if ($.test(this.nodeName)) {
        if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function (e) {
          e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
        }), v.event.add(this, "click._change", function (e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0);
        });return !1;
      }v.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;$.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function (e) {
          this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0);
        }), v._data(t, "_change_attached", !0));
      });
    }, handle: function handle(e) {
      var t = e.target;if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments);
    }, teardown: function teardown() {
      return (v.event.remove(this, "._change"), !$.test(this.nodeName));
    } }), v.support.focusinBubbles || v.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = 0,
        r = function r(e) {
      v.event.simulate(t, e.target, v.event.fix(e), !0);
    };v.event.special[t] = { setup: function setup() {
        n++ === 0 && i.addEventListener(e, r, !0);
      }, teardown: function teardown() {
        --n === 0 && i.removeEventListener(e, r, !0);
      } };
  }), v.fn.extend({ on: function on(e, n, r, i, s) {
      var o, u;if (typeof e == "object") {
        typeof n != "string" && (r = r || n, n = t);for (u in e) this.on(u, n, r, e[u], s);return this;
      }r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));if (i === !1) i = et;else if (!i) return this;return (s === 1 && (o = i, i = function (e) {
        return (v().off(e), o.apply(this, arguments));
      }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function () {
        v.event.add(this, e, i, r, n);
      }));
    }, one: function one(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    }, off: function off(e, n, r) {
      var i, s;if (e && e.preventDefault && e.handleObj) return (i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this);if (typeof e == "object") {
        for (s in e) this.off(s, n, e[s]);return this;
      }if (n === !1 || typeof n == "function") r = n, n = t;return (r === !1 && (r = et), this.each(function () {
        v.event.remove(this, e, r, n);
      }));
    }, bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, live: function live(e, t, n) {
      return (v(this.context).on(e, this.selector, t, n), this);
    }, die: function die(e, t) {
      return (v(this.context).off(e, this.selector || "**", t), this);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
    }, trigger: function trigger(e, t) {
      return this.each(function () {
        v.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      if (this[0]) return v.event.trigger(e, t, this[0], !0);
    }, toggle: function toggle(e) {
      var t = arguments,
          n = e.guid || v.guid++,
          r = 0,
          i = function i(n) {
        var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;return (v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1);
      };i.guid = n;while (r < t.length) t[r++].guid = n;return this.click(i);
    }, hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    v.fn[t] = function (e, n) {
      return (n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t));
    }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks);
  }), (function (e, t) {
    function nt(e, t, n, r) {
      n = n || [], t = t || g;var i,
          s,
          a,
          f,
          l = t.nodeType;if (!e || typeof e != "string") return n;if (l !== 1 && l !== 9) return [];a = o(t);if (!a && !r) if (i = R.exec(e)) if (f = i[1]) {
        if (l === 9) {
          s = t.getElementById(f);if (!s || !s.parentNode) return n;if (s.id === f) return (n.push(s), n);
        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return (n.push(s), n);
      } else {
        if (i[2]) return (S.apply(n, x.call(t.getElementsByTagName(e), 0)), n);if ((f = i[3]) && Z && t.getElementsByClassName) return (S.apply(n, x.call(t.getElementsByClassName(f), 0)), n);
      }return vt(e.replace(j, "$1"), t, n, r, a);
    }function rt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return n === "input" && t.type === e;
      };
    }function it(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return (n === "input" || n === "button") && t.type === e;
      };
    }function st(e) {
      return N(function (t) {
        return (t = +t, N(function (n, r) {
          var i,
              s = e([], n.length, t),
              o = s.length;while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]));
        }));
      });
    }function ot(e, t, n) {
      if (e === t) return n;var r = e.nextSibling;while (r) {
        if (r === t) return -1;r = r.nextSibling;
      }return 1;
    }function ut(e, t) {
      var n,
          r,
          s,
          o,
          u,
          a,
          f,
          l = L[d][e + " "];if (l) return t ? 0 : l.slice(0);u = e, a = [], f = i.preFilter;while (u) {
        if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);n = !1;if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");for (o in i.filter) (r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);if (!n) break;
      }return t ? u.length : u ? nt.error(e) : L(e, a).slice(0);
    }function at(e, t, r) {
      var i = t.dir,
          s = r && t.dir === "parentNode",
          o = w++;return t.first ? function (t, n, r) {
        while (t = t[i]) if (s || t.nodeType === 1) return e(t, n, r);
      } : function (t, r, u) {
        if (!u) {
          var a,
              f = b + " " + o + " ",
              l = f + n;while (t = t[i]) if (s || t.nodeType === 1) {
            if ((a = t[d]) === l) return t.sizset;if (typeof a == "string" && a.indexOf(f) === 0) {
              if (t.sizset) return t;
            } else {
              t[d] = l;if (e(t, r, u)) return (t.sizset = !0, t);t.sizset = !1;
            }
          }
        } else while (t = t[i]) if (s || t.nodeType === 1) if (e(t, r, u)) return t;
      };
    }function ft(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) if (!e[i](t, n, r)) return !1;return !0;
      } : e[0];
    }function lt(e, t, n, r, i) {
      var s,
          o = [],
          u = 0,
          a = e.length,
          f = t != null;for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);return o;
    }function ct(e, t, n, r, i, s) {
      return (r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function (s, o, u, a) {
        var f,
            l,
            c,
            h = [],
            p = [],
            d = o.length,
            v = s || dt(t || "*", u.nodeType ? [u] : u, []),
            m = e && (s || !t) ? lt(v, h, e, u, a) : v,
            g = n ? i || (s ? e : d || r) ? [] : o : m;n && n(m, g, u, a);if (r) {
          f = lt(g, p), r(f, [], u, a), l = f.length;while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c);
        }if (s) {
          if (i || e) {
            if (i) {
              f = [], l = g.length;while (l--) (c = g[l]) && f.push(m[l] = c);i(null, g = [], f, a);
            }l = g.length;while (l--) (c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c));
          }
        } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g);
      }));
    }function ht(e) {
      var t,
          n,
          r,
          s = e.length,
          o = i.relative[e[0].type],
          u = o || i.relative[" "],
          a = o ? 1 : 0,
          f = at(function (e) {
        return e === t;
      }, u, !0),
          l = at(function (e) {
        return T.call(t, e) > -1;
      }, u, !0),
          h = [function (e, n, r) {
        return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r));
      }];for (; a < s; a++) if (n = i.relative[e[a].type]) h = [at(ft(h), n)];else {
        n = i.filter[e[a].type].apply(null, e[a].matches);if (n[d]) {
          r = ++a;for (; r < s; r++) if (i.relative[e[r].type]) break;return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""));
        }h.push(n);
      }return ft(h);
    }function pt(e, t) {
      var r = t.length > 0,
          s = e.length > 0,
          o = function o(u, a, f, l, h) {
        var p,
            d,
            v,
            m = [],
            y = 0,
            w = "0",
            x = u && [],
            T = h != null,
            N = c,
            C = u || s && i.find.TAG("*", h && a.parentNode || a),
            k = b += N == null ? 1 : Math.E;T && (c = a !== g && a, n = o.el);for (; (p = C[w]) != null; w++) {
          if (s && p) {
            for (d = 0; v = e[d]; d++) if (v(p, a, f)) {
              l.push(p);break;
            }T && (b = k, n = ++o.el);
          }r && ((p = !v && p) && y--, u && x.push(p));
        }y += w;if (r && w !== y) {
          for (d = 0; v = t[d]; d++) v(x, m, a, f);if (u) {
            if (y > 0) while (w--) !x[w] && !m[w] && (m[w] = E.call(l));m = lt(m);
          }S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l);
        }return (T && (b = k, c = N), x);
      };return (o.el = 0, r ? N(o) : o);
    }function dt(e, t, n) {
      var r = 0,
          i = t.length;for (; r < i; r++) nt(e, t[r], n);return n;
    }function vt(e, t, n, r, s) {
      var o,
          u,
          f,
          l,
          c,
          h = ut(e),
          p = h.length;if (!r && h.length === 1) {
        u = h[0] = h[0].slice(0);if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
          t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];if (!t) return n;e = e.slice(u.shift().length);
        }for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
          f = u[o];if (i.relative[l = f.type]) break;if (c = i.find[l]) if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
            u.splice(o, 1), e = r.length && u.join("");if (!e) return (S.apply(n, x.call(r, 0)), n);break;
          }
        }
      }return (a(e, h)(r, t, s, n, z.test(e)), n);
    }function mt() {}var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h = !0,
        p = "undefined",
        d = ("sizcache" + Math.random()).replace(".", ""),
        m = String,
        g = e.document,
        y = g.documentElement,
        b = 0,
        w = 0,
        E = [].pop,
        S = [].push,
        x = [].slice,
        T = [].indexOf || function (e) {
      var t = 0,
          n = this.length;for (; t < n; t++) if (this[t] === e) return t;return -1;
    },
        N = function N(e, t) {
      return (e[d] = t == null || t, e);
    },
        C = function C() {
      var e = {},
          t = [];return N(function (n, r) {
        return (t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r);
      }, e);
    },
        k = C(),
        L = C(),
        A = C(),
        O = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        _ = M.replace("w", "w#"),
        D = "([*^$|!~]?=)",
        P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
        H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
        B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
        j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
        F = new RegExp("^" + O + "*," + O + "*"),
        I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
        q = new RegExp(H),
        R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        U = /^:not/,
        z = /[\x20\t\r\n\f]*[+~]/,
        W = /:not\($/,
        X = /h\d/i,
        V = /input|select|textarea|button/i,
        $ = /\\(?!\\)/g,
        J = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + H), POS: new RegExp(B, "i"), CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"), needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i") },
        K = function K(e) {
      var t = g.createElement("div");try {
        return e(t);
      } catch (n) {
        return !1;
      } finally {
        t = null;
      }
    },
        Q = K(function (e) {
      return (e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length);
    }),
        G = K(function (e) {
      return (e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#");
    }),
        Y = K(function (e) {
      e.innerHTML = "<select></select>";var t = typeof e.lastChild.getAttribute("multiple");return t !== "boolean" && t !== "string";
    }),
        Z = K(function (e) {
      return (e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2));
    }),
        et = K(function (e) {
      e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;return (r = !g.getElementById(d), y.removeChild(e), t);
    });try {
      x.call(y.childNodes, 0)[0].nodeType;
    } catch (tt) {
      x = function (e) {
        var t,
            n = [];for (; t = this[e]; e++) n.push(t);return n;
      };
    }nt.matches = function (e, t) {
      return nt(e, null, null, t);
    }, nt.matchesSelector = function (e, t) {
      return nt(t, null, null, [e]).length > 0;
    }, s = nt.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;if (i) {
        if (i === 1 || i === 9 || i === 11) {
          if (typeof e.textContent == "string") return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
        } else if (i === 3 || i === 4) return e.nodeValue;
      } else for (; t = e[r]; r++) n += s(t);return n;
    }, o = nt.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return t ? t.nodeName !== "HTML" : !1;
    }, u = nt.contains = y.contains ? function (e, t) {
      var n = e.nodeType === 9 ? e.documentElement : e,
          r = t && t.parentNode;return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r));
    } : y.compareDocumentPosition ? function (e, t) {
      return t && !!(e.compareDocumentPosition(t) & 16);
    } : function (e, t) {
      while (t = t.parentNode) if (t === e) return !0;return !1;
    }, nt.attr = function (e, t) {
      var n,
          r = o(e);return (r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null));
    }, i = nt.selectors = { cacheLength: 50, createPseudo: N, match: J, attrHandle: G ? {} : { href: function href(e) {
          return e.getAttribute("href", 2);
        }, type: function type(e) {
          return e.getAttribute("type");
        } }, find: { ID: r ? function (e, t, n) {
          if (typeof t.getElementById !== p && !n) {
            var r = t.getElementById(e);return r && r.parentNode ? [r] : [];
          }
        } : function (e, n, r) {
          if (typeof n.getElementById !== p && !r) {
            var i = n.getElementById(e);return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : [];
          }
        }, TAG: Q ? function (e, t) {
          if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e);
        } : function (e, t) {
          var n = t.getElementsByTagName(e);if (e === "*") {
            var r,
                i = [],
                s = 0;for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);return i;
          }return n;
        }, NAME: et && function (e, t) {
          if (typeof t.getElementsByName !== p) return t.getElementsByName(name);
        }, CLASS: Z && function (e, t, n) {
          if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e);
        } }, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return (e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4));
        }, CHILD: function CHILD(e) {
          return (e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e);
        }, PSEUDO: function PSEUDO(e) {
          var t, n;if (J.CHILD.test(e[0])) return null;if (e[3]) e[2] = e[3];else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;return e.slice(0, 3);
        } }, filter: { ID: r ? function (e) {
          return (e = e.replace($, ""), function (t) {
            return t.getAttribute("id") === e;
          });
        } : function (e) {
          return (e = e.replace($, ""), function (t) {
            var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");return n && n.value === e;
          });
        }, TAG: function TAG(e) {
          return e === "*" ? function () {
            return !0;
          } : (e = e.replace($, "").toLowerCase(), function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          });
        }, CLASS: function CLASS(e) {
          var t = k[d][e + " "];return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function (e) {
            return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r, i) {
            var s = nt.attr(r, e);return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(e, t, n, r) {
          return e === "nth" ? function (e) {
            var t,
                i,
                s = e.parentNode;if (n === 1 && r === 0) return !0;if (s) {
              i = 0;for (t = s.firstChild; t; t = t.nextSibling) if (t.nodeType === 1) {
                i++;if (e === t) break;
              }
            }return (i -= r, i === n || i % n === 0 && i / n >= 0);
          } : function (t) {
            var n = t;switch (e) {case "only":case "first":
                while (n = n.previousSibling) if (n.nodeType === 1) return !1;if (e === "first") return !0;n = t;case "last":
                while (n = n.nextSibling) if (n.nodeType === 1) return !1;return !0;}
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function (e, n) {
            var i,
                s = r(e, t),
                o = s.length;while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o]);
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        } }, pseudos: { not: N(function (e) {
          var t = [],
              n = [],
              r = a(e.replace(j, "$1"));return r[d] ? N(function (e, t, n, i) {
            var s,
                o = r(e, null, i, []),
                u = e.length;while (u--) if (s = o[u]) e[u] = !(t[u] = s);
          }) : function (e, i, s) {
            return (t[0] = e, r(t, null, s, n), !n.pop());
          };
        }), has: N(function (e) {
          return function (t) {
            return nt(e, t).length > 0;
          };
        }), contains: N(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1;
          };
        }), enabled: function enabled(e) {
          return e.disabled === !1;
        }, disabled: function disabled(e) {
          return e.disabled === !0;
        }, checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return t === "input" && !!e.checked || t === "option" && !!e.selected;
        }, selected: function selected(e) {
          return (e.parentNode && e.parentNode.selectedIndex, e.selected === !0);
        }, parent: function parent(e) {
          return !i.pseudos.empty(e);
        }, empty: function empty(e) {
          var t;e = e.firstChild;while (e) {
            if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;e = e.nextSibling;
          }return !0;
        }, header: function header(e) {
          return X.test(e.nodeName);
        }, text: function text(e) {
          var t, n;return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t);
        }, radio: rt("radio"), checkbox: rt("checkbox"), file: rt("file"), password: rt("password"), image: rt("image"), submit: it("submit"), reset: it("reset"), button: function button(e) {
          var t = e.nodeName.toLowerCase();return t === "input" && e.type === "button" || t === "button";
        }, input: function input(e) {
          return V.test(e.nodeName);
        }, focus: function focus(e) {
          var t = e.ownerDocument;return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, active: function active(e) {
          return e === e.ownerDocument.activeElement;
        }, first: st(function () {
          return [0];
        }), last: st(function (e, t) {
          return [t - 1];
        }), eq: st(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: st(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);return e;
        }), odd: st(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);return e;
        }), lt: st(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);return e;
        }), gt: st(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);return e;
        }) } }, f = y.compareDocumentPosition ? function (e, t) {
      return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1;
    } : function (e, t) {
      if (e === t) return (l = !0, 0);if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;var n,
          r,
          i = [],
          s = [],
          o = e.parentNode,
          u = t.parentNode,
          a = o;if (o === u) return ot(e, t);if (!o) return -1;if (!u) return 1;while (a) i.unshift(a), a = a.parentNode;a = u;while (a) s.unshift(a), a = a.parentNode;n = i.length, r = s.length;for (var f = 0; f < n && f < r; f++) if (i[f] !== s[f]) return ot(i[f], s[f]);return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1);
    }, [0, 0].sort(f), h = !l, nt.uniqueSort = function (e) {
      var t,
          n = [],
          r = 1,
          i = 0;l = h, e.sort(f);if (l) {
        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));while (i--) e.splice(n[i], 1);
      }return e;
    }, nt.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, a = nt.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          s = A[d][e + " "];if (!s) {
        t || (t = ut(e)), n = t.length;while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);s = A(e, pt(i, r));
      }return s;
    }, g.querySelectorAll && (function () {
      var e,
          t = vt,
          n = /'|\\/g,
          r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
          i = [":focus"],
          s = [":active"],
          u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;K(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked");
      }), K(function (e) {
        e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled");
      }), i = new RegExp(i.join("|")), vt = function (e, r, s, o, u) {
        if (!o && !u && !i.test(e)) {
          var a,
              f,
              l = !0,
              c = d,
              h = r,
              p = r.nodeType === 9 && e;if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
            a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;while (f--) a[f] = c + a[f].join("");h = z.test(e) && r.parentNode || r, p = a.join(",");
          }if (p) try {
            return (S.apply(s, x.call(h.querySelectorAll(p), 0)), s);
          } catch (v) {} finally {
            l || r.removeAttribute("id");
          }
        }return t(e, r, s, o, u);
      }, u && (K(function (t) {
        e = u.call(t, "div");try {
          u.call(t, "[test!='']:sizzle"), s.push("!=", H);
        } catch (n) {}
      }), s = new RegExp(s.join("|")), nt.matchesSelector = function (t, n) {
        n = n.replace(r, "='$1']");if (!o(t) && !s.test(n) && !i.test(n)) try {
          var a = u.call(t, n);if (a || e || t.document && t.document.nodeType !== 11) return a;
        } catch (f) {}return nt(n, null, null, [t]).length > 0;
      });
    })(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt(), nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains;
  })(e);var nt = /Until$/,
      rt = /^(?:parents|prev(?:Until|All))/,
      it = /^.[^:#\[\.,]*$/,
      st = v.expr.match.needsContext,
      ot = { children: !0, contents: !0, next: !0, prev: !0 };v.fn.extend({ find: function find(e) {
      var t,
          n,
          r,
          i,
          s,
          o,
          u = this;if (typeof e != "string") return v(e).filter(function () {
        for (t = 0, n = u.length; t < n; t++) if (v.contains(u[t], this)) return !0;
      });o = this.pushStack("", "find", e);for (t = 0, n = this.length; t < n; t++) {
        r = o.length, v.find(e, this[t], o);if (t > 0) for (i = r; i < o.length; i++) for (s = 0; s < r; s++) if (o[s] === o[i]) {
          o.splice(i--, 1);break;
        }
      }return o;
    }, has: function has(e) {
      var t,
          n = v(e, this),
          r = n.length;return this.filter(function () {
        for (t = 0; t < r; t++) if (v.contains(this, n[t])) return !0;
      });
    }, not: function not(e) {
      return this.pushStack(ft(this, e, !1), "not", e);
    }, filter: function filter(e) {
      return this.pushStack(ft(this, e, !0), "filter", e);
    }, is: function is(e) {
      return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0);
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          s = [],
          o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;for (; r < i; r++) {
        n = this[r];while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
          if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
            s.push(n);break;
          }n = n.parentNode;
        }
      }return (s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e));
    }, index: function index(e) {
      return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
    }, add: function add(e, t) {
      var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
          r = v.merge(this.get(), n);return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r));
    }, addBack: function addBack(e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
    } }), v.fn.andSelf = v.fn.addBack, v.each({ parent: function parent(e) {
      var t = e.parentNode;return t && t.nodeType !== 11 ? t : null;
    }, parents: function parents(e) {
      return v.dir(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return v.dir(e, "parentNode", n);
    }, next: function next(e) {
      return at(e, "nextSibling");
    }, prev: function prev(e) {
      return at(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return v.dir(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return v.dir(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return v.dir(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return v.dir(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return v.sibling((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return v.sibling(e.firstChild);
    }, contents: function contents(e) {
      return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes);
    } }, function (e, t) {
    v.fn[e] = function (n, r) {
      var i = v.map(this, t, n);return (nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(",")));
    };
  }), v.extend({ filter: function filter(e, t, n) {
      return (n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t));
    }, dir: function dir(e, n, r) {
      var i = [],
          s = e[n];while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];return i;
    }, sibling: function sibling(e, t) {
      var n = [];for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);return n;
    } });var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      ht = / jQuery\d+="(?:null|\d+)"/g,
      pt = /^\s+/,
      dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      vt = /<([\w:]+)/,
      mt = /<tbody/i,
      gt = /<|&#?\w+;/,
      yt = /<(?:script|style|link)/i,
      bt = /<(?:script|object|embed|option|style)/i,
      wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
      Et = /^(?:checkbox|radio)$/,
      St = /checked\s*(?:[^=]|=\s*.checked.)/i,
      xt = /\/(java|ecma)script/i,
      Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
      Nt = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
      Ct = lt(i),
      kt = Ct.appendChild(i.createElement("div"));Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({ text: function text(e) {
      return v.access(this, function (e) {
        return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e));
      }, null, e, arguments.length);
    }, wrapAll: function wrapAll(e) {
      if (v.isFunction(e)) return this.each(function (t) {
        v(this).wrapAll(e.call(this, t));
      });if (this[0]) {
        var t = v(e, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;return e;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(e) {
      return v.isFunction(e) ? this.each(function (t) {
        v(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = v(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = v.isFunction(e);return this.each(function (n) {
        v(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        v.nodeName(this, "body") || v(this).replaceWith(this.childNodes);
      }).end();
    }, append: function append() {
      return this.domManip(arguments, !0, function (e) {
        (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e);
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, !0, function (e) {
        (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild);
      });
    }, before: function before() {
      if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
        this.parentNode.insertBefore(e, this);
      });if (arguments.length) {
        var e = v.clean(arguments);return this.pushStack(v.merge(e, this), "before", this.selector);
      }
    }, after: function after() {
      if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
        this.parentNode.insertBefore(e, this.nextSibling);
      });if (arguments.length) {
        var e = v.clean(arguments);return this.pushStack(v.merge(this, e), "after", this.selector);
      }
    }, remove: function remove(e, t) {
      var n,
          r = 0;for (; (n = this[r]) != null; r++) if (!e || v.filter(e, [n]).length) !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);return this;
    }, empty: function empty() {
      var e,
          t = 0;for (; (e = this[t]) != null; t++) {
        e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));while (e.firstChild) e.removeChild(e.firstChild);
      }return this;
    }, clone: function clone(e, t) {
      return (e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
        return v.clone(this, e, t);
      }));
    }, html: function html(e) {
      return v.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(dt, "<$1></$2>");try {
            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);n = 0;
          } catch (s) {}
        }n && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith(e) {
      return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function (t) {
        var n = v(this),
            r = n.html();n.replaceWith(e.call(this, t, r));
      }) : (typeof e != "string" && (e = v(e).detach()), this.each(function () {
        var t = this.nextSibling,
            n = this.parentNode;v(this).remove(), t ? v(t).before(e) : v(n).append(e);
      }));
    }, detach: function detach(e) {
      return this.remove(e, !0);
    }, domManip: function domManip(e, n, r) {
      e = [].concat.apply([], e);var i,
          s,
          o,
          u,
          a = 0,
          f = e[0],
          l = [],
          c = this.length;if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function () {
        v(this).domManip(e, n, r);
      });if (v.isFunction(f)) return this.each(function (i) {
        var s = v(this);e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r);
      });if (this[0]) {
        i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);if (s) {
          n = n && v.nodeName(s, "tr");for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0));
        }o = s = null, l.length && v.each(l, function (e, t) {
          t.src ? v.ajax ? v.ajax({ url: t.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t);
        });
      }return this;
    } }), v.buildFragment = function (e, n, r) {
    var s,
        o,
        u,
        a = e[0];return (n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), { fragment: s, cacheable: o });
  }, v.fragments = {}, v.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    v.fn[e] = function (n) {
      var r,
          i = 0,
          s = [],
          o = v(n),
          u = o.length,
          a = this.length === 1 && this[0].parentNode;if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return (o[t](this[0]), this);for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);return this.pushStack(s, e, o.selector);
    };
  }), v.extend({ clone: function clone(e, t, n) {
      var r, i, s, o;v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
        Ot(e, o), r = Mt(e), i = Mt(o);for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s]);
      }if (t) {
        At(e, o);if (n) {
          r = Mt(e), i = Mt(o);for (s = 0; r[s]; ++s) At(r[s], i[s]);
        }
      }return (r = i = null, o);
    }, clean: function clean(e, t, n, r) {
      var s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          m,
          g,
          y = t === i && Ct,
          b = [];if (!t || typeof t.createDocumentFragment == "undefined") t = i;for (s = 0; (u = e[s]) != null; s++) {
        typeof u == "number" && (u += "");if (!u) continue;if (typeof u == "string") if (!gt.test(u)) u = t.createTextNode(u);else {
          y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];while (l--) c = c.lastChild;if (!v.support.tbody) {
            h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
          }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c);
        }u.nodeType ? b.push(u) : v.merge(b, u);
      }c && (u = c = y = null);if (!v.support.appendChecked) for (s = 0; (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);if (n) {
        m = function (e) {
          if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e);
        };for (s = 0; (u = b[s]) != null; s++) if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length);
      }return b;
    }, cleanData: function cleanData(e, t) {
      var n,
          r,
          i,
          s,
          o = 0,
          u = v.expando,
          a = v.cache,
          f = v.support.deleteExpando,
          l = v.event.special;for (; (i = e[o]) != null; o++) if (t || v.acceptData(i)) {
        r = i[u], n = r && a[r];if (n) {
          if (n.events) for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r));
        }
      }
    } }), (function () {
    var e, t;v.uaMatch = function (e) {
      e = e.toLowerCase();var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];return { browser: t[1] || "", version: t[2] || "0" };
    }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function () {
      function e(t, n) {
        return new e.fn.init(t, n);
      }v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, i) {
        return (i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t));
      }, e.fn.init.prototype = e.fn;var t = e(i);return e;
    };
  })();var Dt,
      Pt,
      Ht,
      Bt = /alpha\([^)]*\)/i,
      jt = /opacity=([^)]*)/,
      Ft = /^(top|right|bottom|left)$/,
      It = /^(none|table(?!-c[ea]).+)/,
      qt = /^margin/,
      Rt = new RegExp("^(" + m + ")(.*)$", "i"),
      Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
      zt = new RegExp("^([-+])=(" + m + ")", "i"),
      Wt = { BODY: "block" },
      Xt = { position: "absolute", visibility: "hidden", display: "block" },
      Vt = { letterSpacing: 0, fontWeight: 400 },
      $t = ["Top", "Right", "Bottom", "Left"],
      Jt = ["Webkit", "O", "Moz", "ms"],
      Kt = v.fn.toggle;v.fn.extend({ css: function css(e, n) {
      return v.access(this, function (e, n, r) {
        return r !== t ? v.style(e, n, r) : v.css(e, n);
      }, e, n, arguments.length > 1);
    }, show: function show() {
      return Yt(this, !0);
    }, hide: function hide() {
      return Yt(this);
    }, toggle: function toggle(e, t) {
      var n = typeof e == "boolean";return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function () {
        (n ? e : Gt(this)) ? v(this).show() : v(this).hide();
      });
    } }), v.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Dt(e, "opacity");return n === "" ? "1" : n;
          }
        } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": v.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(e, n, r, i) {
      if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;var s,
          o,
          u,
          a = v.camelCase(n),
          f = e.style;n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");if (r == null || o === "number" && isNaN(r)) return;o === "number" && !v.cssNumber[a] && (r += "px");if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
        f[n] = r;
      } catch (l) {}
    }, css: function css(e, n, r, i) {
      var s,
          o,
          u,
          a = v.camelCase(n);return (n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s);
    }, swap: function swap(e, t, n) {
      var r,
          i,
          s = {};for (i in t) s[i] = e.style[i], e.style[i] = t[i];r = n.call(e);for (i in t) e.style[i] = s[i];return r;
    } }), e.getComputedStyle ? Dt = function (t, n) {
    var r,
        i,
        s,
        o,
        u = e.getComputedStyle(t, null),
        a = t.style;return (u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r);
  } : i.documentElement.currentStyle && (Dt = function (e, t) {
    var n,
        r,
        i = e.currentStyle && e.currentStyle[t],
        s = e.style;return (i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i);
  }), v.each(["height", "width"], function (e, t) {
    v.cssHooks[t] = { get: function get(e, n, r) {
        if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function () {
          return tn(e, t, r);
        }) : tn(e, t, r);
      }, set: function set(e, n, r) {
        return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0);
      } };
  }), v.support.opacity || (v.cssHooks.opacity = { get: function get(e, t) {
      return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    }, set: function set(e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
          s = r && r.filter || n.filter || "";n.zoom = 1;if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
        n.removeAttribute("filter");if (r && !r.filter) return;
      }n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i;
    } }), v(function () {
    v.support.reliableMarginRight || (v.cssHooks.marginRight = { get: function get(e, t) {
        return v.swap(e, { display: "inline-block" }, function () {
          if (t) return Dt(e, "marginRight");
        });
      } }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) {
      v.cssHooks[t] = { get: function get(e, n) {
          if (n) {
            var r = Dt(e, t);return Ut.test(r) ? v(e).position()[t] + "px" : r;
          }
        } };
    });
  }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) {
    return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none";
  }, v.expr.filters.visible = function (e) {
    return !v.expr.filters.hidden(e);
  }), v.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    v.cssHooks[e + t] = { expand: function expand(n) {
        var r,
            i = typeof n == "string" ? n.split(" ") : [n],
            s = {};for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];return s;
      } }, qt.test(e) || (v.cssHooks[e + t].set = Zt);
  });var rn = /%20/g,
      sn = /\[\]$/,
      on = /\r?\n/g,
      un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      an = /^(?:select|textarea)/i;v.fn.extend({ serialize: function serialize() {
      return v.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        return this.elements ? v.makeArray(this.elements) : this;
      }).filter(function () {
        return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type));
      }).map(function (e, t) {
        var n = v(this).val();return n == null ? null : v.isArray(n) ? v.map(n, function (e, n) {
          return { name: t.name, value: e.replace(on, "\r\n") };
        }) : { name: t.name, value: n.replace(on, "\r\n") };
      }).get();
    } }), v.param = function (e, n) {
    var r,
        i = [],
        s = function s(e, t) {
      t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
      s(this.name, this.value);
    });else for (r in e) fn(r, e[r], n, s);return i.join("&").replace(rn, "+");
  };var ln,
      cn,
      hn = /#.*$/,
      pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
      dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
      vn = /^(?:GET|HEAD)$/,
      mn = /^\/\//,
      gn = /\?/,
      yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      bn = /([?&])_=[^&]*/,
      wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      En = v.fn.load,
      Sn = {},
      xn = {},
      Tn = ["*/"] + ["*"];try {
    cn = s.href;
  } catch (Nn) {
    cn = i.createElement("a"), cn.href = "", cn = cn.href;
  }ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function (e, n, r) {
    if (typeof e != "string" && En) return En.apply(this, arguments);if (!this.length) return this;var i,
        s,
        o,
        u = this,
        a = e.indexOf(" ");return (a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({ url: e, type: s, dataType: "html", data: n, complete: function complete(e, t) {
        r && u.each(r, o || [e.responseText, t, e]);
      } }).done(function (e) {
      o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e);
    }), this);
  }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
    v.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), v.each(["get", "post"], function (e, n) {
    v[n] = function (e, r, i, s) {
      return (v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({ type: n, url: e, data: r, success: i, dataType: s }));
    };
  }), v.extend({ getScript: function getScript(e, n) {
      return v.get(e, t, n, "script");
    }, getJSON: function getJSON(e, t, n) {
      return v.get(e, t, n, "json");
    }, ajaxSetup: function ajaxSetup(e, t) {
      return (t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e);
    }, ajaxSettings: { url: cn, isLocal: dn.test(ln[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": Tn }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": v.parseJSON, "text xml": v.parseXML }, flatOptions: { context: !0, url: !0 } }, ajaxPrefilter: Cn(Sn), ajaxTransport: Cn(xn), ajax: function ajax(e, n) {
      function T(e, n, s, a) {
        var l,
            y,
            b,
            w,
            S,
            T = n;if (E === 2) return;E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);else {
          b = T;if (!T || e) T = "error", e < 0 && (e = 0);
        }x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"));
      }typeof e == "object" && (n = e, e = t), n = n || {};var r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c = v.ajaxSetup({}, n),
          h = c.context || c,
          p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
          d = v.Deferred(),
          m = v.Callbacks("once memory"),
          g = c.statusCode || {},
          b = {},
          w = {},
          E = 0,
          S = "canceled",
          x = { readyState: 0, setRequestHeader: function setRequestHeader(e, t) {
          if (!E) {
            var n = e.toLowerCase();e = w[n] = w[n] || e, b[e] = t;
          }return this;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return E === 2 ? i : null;
        }, getResponseHeader: function getResponseHeader(e) {
          var n;if (E === 2) {
            if (!s) {
              s = {};while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2];
            }n = s[e.toLowerCase()];
          }return n === t ? null : n;
        }, overrideMimeType: function overrideMimeType(e) {
          return (E || (c.mimeType = e), this);
        }, abort: function abort(e) {
          return (e = e || S, o && o.abort(e), T(0, e), this);
        } };d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
        if (e) {
          var t;if (E < 2) for (t in e) g[t] = [g[t], e[t]];else t = e[x.status], x.always(t);
        }return this;
      }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);if (E === 2) return x;f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");if (!c.hasContent) {
        c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;if (c.cache === !1) {
          var N = v.now(),
              C = c.url.replace(bn, "$1_=" + N);c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "");
        }
      }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);for (l in c.headers) x.setRequestHeader(l, c.headers[l]);if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
        S = "abort";for (l in { success: 1, error: 1, complete: 1 }) x[l](c[l]);o = kn(xn, c, n, x);if (!o) T(-1, "No Transport");else {
          x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
            x.abort("timeout");
          }, c.timeout));try {
            E = 1, o.send(b, T);
          } catch (k) {
            if (!(E < 2)) throw k;T(-1, k);
          }
        }return x;
      }return x.abort();
    }, active: 0, lastModified: {}, etag: {} });var Mn = [],
      _n = /\?/,
      Dn = /(=)\?(?=&|$)|\?\?/,
      Pn = v.now();v.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Mn.pop() || v.expando + "_" + Pn++;return (this[e] = !0, e);
    } }), v.ajaxPrefilter("json jsonp", function (n, r, i) {
    var s,
        o,
        u,
        a = n.data,
        f = n.url,
        l = n.jsonp !== !1,
        c = l && Dn.test(f),
        h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);if (n.dataTypes[0] === "jsonp" || c || h) return (s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
      return (u || v.error(s + " was not called"), u[0]);
    }, n.dataTypes[0] = "json", e[s] = function () {
      u = arguments;
    }, i.always(function () {
      e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t;
    }), "script");
  }), v.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function textScript(e) {
        return (v.globalEval(e), e);
      } } }), v.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), v.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
          r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;return { send: function send(s, o) {
          n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
            if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success");
          }, r.insertBefore(n, r.firstChild);
        }, abort: function abort() {
          n && n.onload(0, 1);
        } };
    }
  });var Hn,
      Bn = e.ActiveXObject ? function () {
    for (var e in Hn) Hn[e](0, 1);
  } : !1,
      jn = 0;v.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && Fn() || In();
  } : Fn, (function (e) {
    v.extend(v.support, { ajax: !!e, cors: !!e && "withCredentials" in e });
  })(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function (n) {
    if (!n.crossDomain || v.support.cors) {
      var r;return { send: function send(i, s) {
          var o,
              u,
              a = n.xhr();n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");try {
            for (u in i) a.setRequestHeader(u, i[u]);
          } catch (f) {}a.send(n.hasContent && n.data || null), r = function (e, i) {
            var u, f, l, c, h;try {
              if (r && (i || a.readyState === 4)) {
                r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);if (i) a.readyState !== 4 && a.abort();else {
                  u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);try {
                    c.text = a.responseText;
                  } catch (p) {}try {
                    f = a.statusText;
                  } catch (p) {
                    f = "";
                  }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204);
                }
              }
            } catch (d) {
              i || s(-1, d);
            }c && s(u, f, c, l);
          }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r();
        }, abort: function abort() {
          r && r(0, 1);
        } };
    }
  });var qn,
      Rn,
      Un = /^(?:toggle|show|hide)$/,
      zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
      Wn = /queueHooks$/,
      Xn = [Gn],
      Vn = { "*": [function (e, t) {
      var n,
          r,
          i = this.createTween(e, t),
          s = zn.exec(t),
          o = i.cur(),
          u = +o || 0,
          a = 1,
          f = 20;if (s) {
        n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");if (r !== "px" && u) {
          u = v.css(i.elem, e, !0) || n || 1;do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f);
        }i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n;
      }return i;
    }] };v.Animation = v.extend(Kn, { tweener: function tweener(e, t) {
      v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");var n,
          r = 0,
          i = e.length;for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t);
    }, prefilter: function prefilter(e, t) {
      t ? Xn.unshift(e) : Xn.push(e);
    } }), v.Tween = Yn, Yn.prototype = { constructor: Yn, init: function init(e, t, n, r, i, s) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = Yn.propHooks[this.prop];return e && e.get ? e.get(this) : Yn.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = Yn.propHooks[this.prop];return (this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this);
    } }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = { _default: { get: function get(e) {
        var t;return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop];
      }, set: function set(e) {
        v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      } } }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, v.each(["toggle", "show", "hide"], function (e, t) {
    var n = v.fn[t];v.fn[t] = function (r, i, s) {
      return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s);
    };
  }), v.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(Gt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = v.isEmptyObject(e),
          s = v.speed(t, n, r),
          o = function o() {
        var t = Kn(this, v.extend({}, e), s);i && t.stop(!0);
      };return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o);
    }, stop: function stop(e, n, r) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(r);
      };return (typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            n = e != null && e + "queueHooks",
            s = v.timers,
            o = v._data(this);if (n) o[n] && o[n].stop && i(o[n]);else for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));(t || !r) && v.dequeue(this, e);
      }));
    } }), v.each({ slideDown: Zn("show"), slideUp: Zn("hide"), slideToggle: Zn("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    v.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), v.speed = function (e, t, n) {
    var r = e && typeof e == "object" ? v.extend({}, e) : { complete: n || !n && t || v.isFunction(e) && e, duration: e, easing: n && t || t && !v.isFunction(t) && t };r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;if (r.queue == null || r.queue === !0) r.queue = "fx";return (r.old = r.complete, r.complete = function () {
      v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue);
    }, r);
  }, v.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    } }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function () {
    var e,
        n = v.timers,
        r = 0;qn = v.now();for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);n.length || v.fx.stop(), qn = t;
  }, v.fx.timer = function (e) {
    e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval));
  }, v.fx.interval = 13, v.fx.stop = function () {
    clearInterval(Rn), Rn = null;
  }, v.fx.speeds = { slow: 600, fast: 200, _default: 400 }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) {
    return v.grep(v.timers, function (t) {
      return e === t.elem;
    }).length;
  });var er = /^(?:body|html)$/i;v.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      v.offset.setOffset(this, e, t);
    });var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f = { top: 0, left: 0 },
        l = this[0],
        c = l && l.ownerDocument;if (!c) return;return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, { top: f.top + u - s, left: f.left + a - o }) : f);
  }, v.offset = { bodyOffset: function bodyOffset(e) {
      var t = e.offsetTop,
          n = e.offsetLeft;return (v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), { top: t, left: n });
    }, setOffset: function setOffset(e, t, n) {
      var r = v.css(e, "position");r === "static" && (e.style.position = "relative");var i = v(e),
          s = i.offset(),
          o = v.css(e, "top"),
          u = v.css(e, "left"),
          a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
          f = {},
          l = {},
          c,
          h;a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f);
    } }, v.fn.extend({ position: function position() {
      if (!this[0]) return;var e = this[0],
          t = this.offsetParent(),
          n = this.offset(),
          r = er.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();return (n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, { top: n.top - r.top, left: n.left - r.left });
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent || i.body;while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;return e || i.body;
      });
    } }), v.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) {
    var r = /Y/.test(n);v.fn[e] = function (i) {
      return v.access(this, function (e, i, s) {
        var o = tr(e);if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s;
      }, e, i, arguments.length, null);
    };
  }), v.each({ Height: "height", Width: "width" }, function (e, n) {
    v.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) {
      v.fn[i] = function (i, s) {
        var o = arguments.length && (r || typeof i != "boolean"),
            u = r || (i === !0 || s === !0 ? "margin" : "border");return v.access(this, function (n, r, i) {
          var s;return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u);
        }, n, o ? i : t, o, null);
      };
    });
  }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
    return v;
  });
})(window);

/*! jQuery UI - v1.10.1 - 2013-02-28
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function (e, t) {
  function i(t, n) {
    var r,
        i,
        o,
        u = t.nodeName.toLowerCase();return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t);
  }function s(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
      return e.css(this, "visibility") === "hidden";
    }).length;
  }var n = 0,
      r = /^ui-id-\d+$/;e.ui = e.ui || {};if (e.ui.version) return;e.extend(e.ui, { version: "1.10.1", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ _focus: e.fn.focus, focus: function focus(t, n) {
      return typeof t == "number" ? this.each(function () {
        var r = this;setTimeout(function () {
          e(r).focus(), n && n.call(r);
        }, t);
      }) : this._focus.apply(this, arguments);
    }, scrollParent: function scrollParent() {
      var t;return (e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () {
        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
      }).eq(0) : t = this.parents().filter(function () {
        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
      }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t);
    }, zIndex: function zIndex(n) {
      if (n !== t) return this.css("zIndex", n);if (this.length) {
        var r = e(this[0]),
            i,
            s;while (r.length && r[0] !== document) {
          i = r.css("position");if (i === "absolute" || i === "relative" || i === "fixed") {
            s = parseInt(r.css("zIndex"), 10);if (!isNaN(s) && s !== 0) return s;
          }r = r.parent();
        }
      }return 0;
    }, uniqueId: function uniqueId() {
      return this.each(function () {
        this.id || (this.id = "ui-id-" + ++n);
      });
    }, removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        r.test(this.id) && e(this).removeAttr("id");
      });
    } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (n) {
        return !!e.data(n, t);
      };
    }) : function (t, n, r) {
      return !!e.data(t, r[3]);
    }, focusable: function focusable(t) {
      return i(t, !isNaN(e.attr(t, "tabindex")));
    }, tabbable: function tabbable(t) {
      var n = e.attr(t, "tabindex"),
          r = isNaN(n);return (r || n >= 0) && i(t, !r);
    } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, r) {
    function u(t, n, r, s) {
      return (e.each(i, function () {
        n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
      }), n);
    }var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
        s = r.toLowerCase(),
        o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };e.fn["inner" + r] = function (n) {
      return n === t ? o["inner" + r].call(this) : this.each(function () {
        e(this).css(s, u(this, n) + "px");
      });
    }, e.fn["outer" + r] = function (t, n) {
      return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function () {
        e(this).css(s, u(this, t, !0, n) + "px");
      });
    };
  }), e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = (function (t) {
    return function (n) {
      return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this);
    };
  })(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({ disableSelection: function disableSelection() {
      return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
        e.preventDefault();
      });
    }, enableSelection: function enableSelection() {
      return this.unbind(".ui-disableSelection");
    } }), e.extend(e.ui, { plugin: { add: function add(t, n, r) {
        var i,
            s = e.ui[t].prototype;for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]]);
      }, call: function call(e, t, n) {
        var r,
            i = e.plugins[t];if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n);
      } }, hasScroll: function hasScroll(t, n) {
      if (e(t).css("overflow") === "hidden") return !1;var r = n && n === "left" ? "scrollLeft" : "scrollTop",
          i = !1;return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i);
    } });
})(jQuery);(function (e, t) {
  var n = 0,
      r = Array.prototype.slice,
      i = e.cleanData;e.cleanData = function (t) {
    for (var n = 0, r; (r = t[n]) != null; n++) try {
      e(r).triggerHandler("remove");
    } catch (s) {}i(t);
  }, e.widget = function (t, n, r) {
    var i,
        s,
        o,
        u,
        a = {},
        f = t.split(".")[0];t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function (t) {
      return !!e.data(t, i);
    }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function (e, t) {
      if (!this._createWidget) return new o(e, t);arguments.length && this._createWidget(e, t);
    }, e.extend(o, s, { version: r.version, _proto: e.extend({}, r), _childConstructors: [] }), u = new n(), u.options = e.widget.extend({}, u.options), e.each(r, function (t, r) {
      if (!e.isFunction(r)) {
        a[t] = r;return;
      }a[t] = (function () {
        var e = function e() {
          return n.prototype[t].apply(this, arguments);
        },
            i = function i(e) {
          return n.prototype[t].apply(this, e);
        };return function () {
          var t = this._super,
              n = this._superApply,
              s;return (this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s);
        };
      })();
    }), o.prototype = e.widget.extend(u, { widgetEventPrefix: s ? u.widgetEventPrefix : t }, a, { constructor: o, namespace: f, widgetName: t, widgetFullName: i }), s ? (e.each(s._childConstructors, function (t, n) {
      var r = n.prototype;e.widget(r.namespace + "." + r.widgetName, o, n._proto);
    }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o);
  }, e.widget.extend = function (n) {
    var i = r.call(arguments, 1),
        s = 0,
        o = i.length,
        u,
        a;for (; s < o; s++) for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);return n;
  }, e.widget.bridge = function (n, i) {
    var s = i.prototype.widgetFullName || n;e.fn[n] = function (o) {
      var u = typeof o == "string",
          a = r.call(arguments, 1),
          f = this;return (o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function () {
        var r,
            i = e.data(this, s);if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");r = i[o].apply(i, a);if (r !== i && r !== t) return (f = r && r.jquery ? f.pushStack(r.get()) : r, !1);
      }) : this.each(function () {
        var t = e.data(this, s);t ? t.option(o || {})._init() : e.data(this, s, new i(o, this));
      }), f);
    };
  }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function _createWidget(t, r) {
      r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, { remove: function remove(e) {
          e.target === r && this.destroy();
        } }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
    }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function destroy() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
    }, _destroy: e.noop, widget: function widget() {
      return this.element;
    }, option: function option(n, r) {
      var i = n,
          s,
          o,
          u;if (arguments.length === 0) return e.widget.extend({}, this.options);if (typeof n == "string") {
        i = {}, s = n.split("."), n = s.shift();if (s.length) {
          o = i[n] = e.widget.extend({}, this.options[n]);for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];n = s.pop();if (r === t) return o[n] === t ? null : o[n];o[n] = r;
        } else {
          if (r === t) return this.options[n] === t ? null : this.options[n];i[n] = r;
        }
      }return (this._setOptions(i), this);
    }, _setOptions: function _setOptions(e) {
      var t;for (t in e) this._setOption(t, e[t]);return this;
    }, _setOption: function _setOption(e, t) {
      return (this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this);
    }, enable: function enable() {
      return this._setOption("disabled", !1);
    }, disable: function disable() {
      return this._setOption("disabled", !0);
    }, _on: function _on(t, n, r) {
      var i,
          s = this;typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function (r, o) {
        function u() {
          if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;return (typeof o == "string" ? s[o] : o).apply(s, arguments);
        }typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);var a = r.match(/^(\w+)\s*(.*)$/),
            f = a[1] + s.eventNamespace,
            l = a[2];l ? i.delegate(l, f, u) : n.bind(f, u);
      });
    }, _off: function _off(e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t);
    }, _delay: function _delay(e, t) {
      function n() {
        return (typeof e == "string" ? r[e] : e).apply(r, arguments);
      }var r = this;return setTimeout(n, t || 0);
    }, _hoverable: function _hoverable(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function mouseenter(t) {
          e(t.currentTarget).addClass("ui-state-hover");
        }, mouseleave: function mouseleave(t) {
          e(t.currentTarget).removeClass("ui-state-hover");
        } });
    }, _focusable: function _focusable(t) {
      this.focusable = this.focusable.add(t), this._on(t, { focusin: function focusin(t) {
          e(t.currentTarget).addClass("ui-state-focus");
        }, focusout: function focusout(t) {
          e(t.currentTarget).removeClass("ui-state-focus");
        } });
    }, _trigger: function _trigger(t, n, r) {
      var i,
          s,
          o = this.options[t];r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;if (s) for (i in s) i in n || (n[i] = s[i]);return (this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented()));
    } }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, n) {
    e.Widget.prototype["_" + t] = function (r, i, s) {
      typeof i == "string" && (i = { effect: i });var o,
          u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;i = i || {}, typeof i == "number" && (i = { duration: i }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function (n) {
        e(this)[t](), s && s.call(r[0]), n();
      });
    };
  });
})(jQuery);(function (e, t) {
  var n = !1;e(document).mouseup(function () {
    n = !1;
  }), e.widget("ui.mouse", { version: "1.10.1", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function _mouseInit() {
      var t = this;this.element.bind("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e);
      }).bind("click." + this.widgetName, function (n) {
        if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1);
      }), this.started = !1;
    }, _mouseDestroy: function _mouseDestroy() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    }, _mouseDown: function _mouseDown(t) {
      if (n) return;this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;var r = this,
          i = t.which === 1,
          s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;if (!i || s || !this._mouseCapture(t)) return !0;this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
        r.mouseDelayMet = !0;
      }, this.options.delay));if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
        this._mouseStarted = this._mouseStart(t) !== !1;if (!this._mouseStarted) return (t.preventDefault(), !0);
      }return (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
        return r._mouseMove(e);
      }, this._mouseUpDelegate = function (e) {
        return r._mouseUp(e);
      }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0);
    }, _mouseMove: function _mouseMove(t) {
      return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
    }, _mouseUp: function _mouseUp(t) {
      return (e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1);
    }, _mouseDistanceMet: function _mouseDistanceMet(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
    }, _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    }, _mouseStart: function _mouseStart() {}, _mouseDrag: function _mouseDrag() {}, _mouseStop: function _mouseStop() {}, _mouseCapture: function _mouseCapture() {
      return !0;
    } });
})(jQuery);(function (e, t) {
  function h(e, t, n) {
    return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)];
  }function p(t, n) {
    return parseInt(e.css(t, n), 10) || 0;
  }function d(t) {
    var n = t[0];return n.nodeType === 9 ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : e.isWindow(n) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : n.preventDefault ? { width: 0, height: 0, offset: { top: n.pageY, left: n.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() };
  }e.ui = e.ui || {};var n,
      r = Math.max,
      i = Math.abs,
      s = Math.round,
      o = /left|center|right/,
      u = /top|center|bottom/,
      a = /[\+\-]\d+(\.[\d]+)?%?/,
      f = /^\w+/,
      l = /%$/,
      c = e.fn.position;e.position = { scrollbarWidth: function scrollbarWidth() {
      if (n !== t) return n;var r,
          i,
          s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
          o = s.children()[0];return (e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i);
    }, getScrollInfo: function getScrollInfo(t) {
      var n = t.isWindow ? "" : t.element.css("overflow-x"),
          r = t.isWindow ? "" : t.element.css("overflow-y"),
          i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
          s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;return { width: i ? e.position.scrollbarWidth() : 0, height: s ? e.position.scrollbarWidth() : 0 };
    }, getWithinInfo: function getWithinInfo(t) {
      var n = e(t || window),
          r = e.isWindow(n[0]);return { element: n, isWindow: r, offset: n.offset() || { left: 0, top: 0 }, scrollLeft: n.scrollLeft(), scrollTop: n.scrollTop(), width: r ? n.width() : n.outerWidth(), height: r ? n.height() : n.outerHeight() };
    } }, e.fn.position = function (t) {
    if (!t || !t.of) return c.apply(this, arguments);t = e.extend({}, t);var n,
        l,
        v,
        m,
        g,
        y,
        b = e(t.of),
        w = e.position.getWithinInfo(t.within),
        E = e.position.getScrollInfo(w),
        S = (t.collision || "flip").split(" "),
        x = {};return (y = d(b), b[0].preventDefault && (t.at = "left top"), l = y.width, v = y.height, m = y.offset, g = e.extend({}, m), e.each(["my", "at"], function () {
      var e = (t[this] || "").split(" "),
          n,
          r;e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), x[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]];
    }), S.length === 1 && (S[1] = S[0]), t.at[0] === "right" ? g.left += l : t.at[0] === "center" && (g.left += l / 2), t.at[1] === "bottom" ? g.top += v : t.at[1] === "center" && (g.top += v / 2), n = h(x.at, l, v), g.left += n[0], g.top += n[1], this.each(function () {
      var o,
          u,
          a = e(this),
          f = a.outerWidth(),
          c = a.outerHeight(),
          d = p(this, "marginLeft"),
          y = p(this, "marginTop"),
          T = f + d + p(this, "marginRight") + E.width,
          N = c + y + p(this, "marginBottom") + E.height,
          C = e.extend({}, g),
          k = h(x.my, a.outerWidth(), a.outerHeight());t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2), t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = { marginLeft: d, marginTop: y }, e.each(["left", "top"], function (r, i) {
        e.ui.position[S[r]] && e.ui.position[S[r]][i](C, { targetWidth: l, targetHeight: v, elemWidth: f, elemHeight: c, collisionPosition: o, collisionWidth: T, collisionHeight: N, offset: [n[0] + k[0], n[1] + k[1]], my: t.my, at: t.at, within: w, elem: a });
      }), t.using && (u = function (e) {
        var n = m.left - C.left,
            s = n + l - f,
            o = m.top - C.top,
            u = o + v - c,
            h = { target: { element: b, left: m.left, top: m.top, width: l, height: v }, element: { element: a, left: C.left, top: C.top, width: f, height: c }, horizontal: s < 0 ? "left" : n > 0 ? "right" : "center", vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle" };l < f && i(n + s) < l && (h.horizontal = "center"), v < c && i(o + u) < v && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h);
      }), a.offset(e.extend(C, { using: u }));
    }));
  }, e.ui.position = { fit: { left: function left(e, t) {
        var n = t.within,
            i = n.isWindow ? n.scrollLeft : n.offset.left,
            s = n.width,
            o = e.left - t.collisionPosition.marginLeft,
            u = i - o,
            a = o + t.collisionWidth - s - i,
            f;t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left);
      }, top: function top(e, t) {
        var n = t.within,
            i = n.isWindow ? n.scrollTop : n.offset.top,
            s = t.within.height,
            o = e.top - t.collisionPosition.marginTop,
            u = i - o,
            a = o + t.collisionHeight - s - i,
            f;t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top);
      } }, flip: { left: function left(e, t) {
        var n = t.within,
            r = n.offset.left + n.scrollLeft,
            s = n.width,
            o = n.isWindow ? n.scrollLeft : n.offset.left,
            u = e.left - t.collisionPosition.marginLeft,
            a = u - o,
            f = u + t.collisionWidth - s - o,
            l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
            c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
            h = -2 * t.offset[0],
            p,
            d;if (a < 0) {
          p = e.left + l + c + h + t.collisionWidth - s - r;if (p < 0 || p < i(a)) e.left += l + c + h;
        } else if (f > 0) {
          d = e.left - t.collisionPosition.marginLeft + l + c + h - o;if (d > 0 || i(d) < f) e.left += l + c + h;
        }
      }, top: function top(e, t) {
        var n = t.within,
            r = n.offset.top + n.scrollTop,
            s = n.height,
            o = n.isWindow ? n.scrollTop : n.offset.top,
            u = e.top - t.collisionPosition.marginTop,
            a = u - o,
            f = u + t.collisionHeight - s - o,
            l = t.my[1] === "top",
            c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
            h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
            p = -2 * t.offset[1],
            d,
            v;a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p));
      } }, flipfit: { left: function left() {
        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
      }, top: function top() {
        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
      } } }, (function () {
    var t,
        n,
        r,
        i,
        s,
        o = document.getElementsByTagName("body")[0],
        u = document.createElement("div");t = document.createElement(o ? "div" : "body"), r = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, o && e.extend(r, { position: "absolute", left: "-1000px", top: "-1000px" });for (s in r) t.style[s] = r[s];t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t);
  })();
})(jQuery);(function (e, t) {
  e.widget("ui.draggable", e.ui.mouse, { version: "1.10.1", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function _create() {
      this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit();
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy();
    }, _mouseCapture: function _mouseCapture(t) {
      var n = this.options;return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function () {
        e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1000 }).css(e(this).offset()).appendTo("body");
      }), !0) : !1);
    }, _mouseStart: function _mouseStart(t) {
      var n = this.options;return (this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0));
    }, _mouseDrag: function _mouseDrag(t, n) {
      this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");if (!n) {
        var r = this._uiHash();if (this._trigger("drag", t, r) === !1) return (this._mouseUp({}), !1);this.position = r.position;
      }if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";return (e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1);
    }, _mouseStop: function _mouseStop(t) {
      var n,
          r = this,
          i = !1,
          s = !1;e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), n = this.element[0];while (n && (n = n.parentNode)) n === document && (i = !0);return !i && this.options.helper === "original" ? !1 : (this.options.revert === "invalid" && !s || this.options.revert === "valid" && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        r._trigger("stop", t) !== !1 && r._clear();
      }) : this._trigger("stop", t) !== !1 && this._clear(), !1);
    }, _mouseUp: function _mouseUp(t) {
      return (e("div.ui-draggable-iframeFix").each(function () {
        this.parentNode.removeChild(this);
      }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t));
    }, cancel: function cancel() {
      return (this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this);
    }, _getHandle: function _getHandle(t) {
      var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;return (e(this.options.handle, this.element).find("*").addBack().each(function () {
        this === t.target && (n = !0);
      }), n);
    }, _createHelper: function _createHelper(t) {
      var n = this.options,
          r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;return (r.parents("body").length || r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo), r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r);
    }, _adjustOffsetFromHelper: function _adjustOffsetFromHelper(t) {
      typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    }, _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();var t = this.offsetParent.offset();this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = { top: 0, left: 0 };return { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function _getRelativeOffset() {
      if (this.cssPosition === "relative") {
        var e = this.element.position();return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
      }return { top: 0, left: 0 };
    }, _cacheMargins: function _cacheMargins() {
      this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 };
    }, _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function _setContainment() {
      var t,
          n,
          r,
          i = this.options;i.containment === "parent" && (i.containment = this.helper[0].parentNode);if (i.containment === "document" || i.containment === "window") this.containment = [i.containment === "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment === "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment === "document" ? 0 : e(window).scrollLeft()) + e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? 0 : e(window).scrollTop()) + (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];if (!/^(document|window|parent)$/.test(i.containment) && i.containment.constructor !== Array) {
        n = e(i.containment), r = n[0];if (!r) return;t = e(r).css("overflow") !== "hidden", this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n;
      } else i.containment.constructor === Array && (this.containment = i.containment);
    }, _convertPositionTo: function _convertPositionTo(t, n) {
      n || (n = this.position);var r = t === "absolute" ? 1 : -1,
          i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          s = /(html|body)/i.test(i[0].tagName);return { top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r, left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r };
    }, _generatePosition: function _generatePosition(t) {
      var n,
          r,
          i,
          s,
          o = this.options,
          u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          a = /(html|body)/i.test(u[0].tagName),
          f = t.pageX,
          l = t.pageY;return (this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(), n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (f = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (l = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (f = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (l = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, f = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()), left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft()) });
    }, _clear: function _clear() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1;
    }, _trigger: function _trigger(t, n, r) {
      return (r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r));
    }, plugins: {}, _uiHash: function _uiHash() {
      return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
    } }), e.ui.plugin.add("draggable", "connectToSortable", { start: function start(t, n) {
      var r = e(this).data("ui-draggable"),
          i = r.options,
          s = e.extend({}, n, { item: r.element });r.sortables = [], e(i.connectToSortable).each(function () {
        var n = e.data(this, "ui-sortable");n && !n.options.disabled && (r.sortables.push({ instance: n, shouldRevert: n.options.revert }), n.refreshPositions(), n._trigger("activate", t, s));
      });
    }, stop: function stop(t, n) {
      var r = e(this).data("ui-draggable"),
          i = e.extend({}, n, { item: r.element });e.each(r.sortables, function () {
        this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({ top: "auto", left: "auto" })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i));
      });
    }, drag: function drag(t, n) {
      var r = e(this).data("ui-draggable"),
          i = this;e.each(r.sortables, function () {
        var s = !1,
            o = this;this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function () {
          return (this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s);
        })), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
          return n.helper[0];
        }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1);
      });
    } }), e.ui.plugin.add("draggable", "cursor", { start: function start() {
      var t = e("body"),
          n = e(this).data("ui-draggable").options;t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor);
    }, stop: function stop() {
      var t = e(this).data("ui-draggable").options;t._cursor && e("body").css("cursor", t._cursor);
    } }), e.ui.plugin.add("draggable", "opacity", { start: function start(t, n) {
      var r = e(n.helper),
          i = e(this).data("ui-draggable").options;r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity);
    }, stop: function stop(t, n) {
      var r = e(this).data("ui-draggable").options;r._opacity && e(n.helper).css("opacity", r._opacity);
    } }), e.ui.plugin.add("draggable", "scroll", { start: function start() {
      var t = e(this).data("ui-draggable");t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset());
    }, drag: function drag(t) {
      var n = e(this).data("ui-draggable"),
          r = n.options,
          i = !1;if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
        if (!r.axis || r.axis !== "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);if (!r.axis || r.axis !== "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed);
      } else {
        if (!r.axis || r.axis !== "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));if (!r.axis || r.axis !== "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed));
      }i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t);
    } }), e.ui.plugin.add("draggable", "snap", { start: function start() {
      var t = e(this).data("ui-draggable"),
          n = t.options;t.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
        var n = e(this),
            r = n.offset();this !== t.element[0] && t.snapElements.push({ item: this, width: n.outerWidth(), height: n.outerHeight(), top: r.top, left: r.left });
      });
    }, drag: function drag(t, n) {
      var r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p = e(this).data("ui-draggable"),
          d = p.options,
          v = d.snapTolerance,
          m = n.offset.left,
          g = m + p.helperProportions.width,
          y = n.offset.top,
          b = y + p.helperProportions.height;for (c = p.snapElements.length - 1; c >= 0; c--) {
        u = p.snapElements[c].left, a = u + p.snapElements[c].width, f = p.snapElements[c].top, l = f + p.snapElements[c].height;if (!(u - v < m && m < a + v && f - v < y && y < l + v || u - v < m && m < a + v && f - v < b && b < l + v || u - v < g && g < a + v && f - v < y && y < l + v || u - v < g && g < a + v && f - v < b && b < l + v)) {
          p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), { snapItem: p.snapElements[c].item })), p.snapElements[c].snapping = !1;continue;
        }d.snapMode !== "inner" && (r = Math.abs(f - b) <= v, i = Math.abs(l - y) <= v, s = Math.abs(u - g) <= v, o = Math.abs(a - m) <= v, r && (n.position.top = p._convertPositionTo("relative", { top: f - p.helperProportions.height, left: 0 }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", { top: l, left: 0 }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", { top: 0, left: u - p.helperProportions.width }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", { top: 0, left: a }).left - p.margins.left)), h = r || i || s || o, d.snapMode !== "outer" && (r = Math.abs(f - y) <= v, i = Math.abs(l - b) <= v, s = Math.abs(u - m) <= v, o = Math.abs(a - g) <= v, r && (n.position.top = p._convertPositionTo("relative", { top: f, left: 0 }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", { top: l - p.helperProportions.height, left: 0 }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", { top: 0, left: u }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", { top: 0, left: a - p.helperProportions.width }).left - p.margins.left)), !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), { snapItem: p.snapElements[c].item })), p.snapElements[c].snapping = r || i || s || o || h;
      }
    } }), e.ui.plugin.add("draggable", "stack", { start: function start() {
      var t,
          n = this.data("ui-draggable").options,
          r = e.makeArray(e(n.stack)).sort(function (t, n) {
        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0);
      });if (!r.length) return;t = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function (n) {
        e(this).css("zIndex", t + n);
      }), this.css("zIndex", t + r.length);
    } }), e.ui.plugin.add("draggable", "zIndex", { start: function start(t, n) {
      var r = e(n.helper),
          i = e(this).data("ui-draggable").options;r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex);
    }, stop: function stop(t, n) {
      var r = e(this).data("ui-draggable").options;r._zIndex && e(n.helper).css("zIndex", r._zIndex);
    } });
})(jQuery);(function (e, t) {
  function n(e, t, n) {
    return e > t && e < t + n;
  }e.widget("ui.droppable", { version: "1.10.1", widgetEventPrefix: "drop", options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function _create() {
      var t = this.options,
          n = t.accept;this.isover = !1, this.isout = !0, this.accept = e.isFunction(n) ? n : function (e) {
        return e.is(n);
      }, this.proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable");
    }, _destroy: function _destroy() {
      var t = 0,
          n = e.ui.ddmanager.droppables[this.options.scope];for (; t < n.length; t++) n[t] === this && n.splice(t, 1);this.element.removeClass("ui-droppable ui-droppable-disabled");
    }, _setOption: function _setOption(t, n) {
      t === "accept" && (this.accept = e.isFunction(n) ? n : function (e) {
        return e.is(n);
      }), e.Widget.prototype._setOption.apply(this, arguments);
    }, _activate: function _activate(t) {
      var n = e.ui.ddmanager.current;this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n));
    }, _deactivate: function _deactivate(t) {
      var n = e.ui.ddmanager.current;this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n));
    }, _over: function _over(t) {
      var n = e.ui.ddmanager.current;if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)));
    }, _out: function _out(t) {
      var n = e.ui.ddmanager.current;if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)));
    }, _drop: function _drop(t, n) {
      var r = n || e.ui.ddmanager.current,
          i = !1;return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
        var t = e.data(this, "ui-droppable");if (t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, { offset: t.element.offset() }), t.options.tolerance)) return (i = !0, !1);
      }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1);
    }, ui: function ui(e) {
      return { draggable: e.currentItem || e.element, helper: e.helper, position: e.position, offset: e.positionAbs };
    } }), e.ui.intersect = function (e, t, r) {
    if (!t.offset) return !1;var i,
        s,
        o = (e.positionAbs || e.position.absolute).left,
        u = o + e.helperProportions.width,
        a = (e.positionAbs || e.position.absolute).top,
        f = a + e.helperProportions.height,
        l = t.offset.left,
        c = l + t.proportions.width,
        h = t.offset.top,
        p = h + t.proportions.height;switch (r) {case "fit":
        return l <= o && u <= c && h <= a && f <= p;case "intersect":
        return l < o + e.helperProportions.width / 2 && u - e.helperProportions.width / 2 < c && h < a + e.helperProportions.height / 2 && f - e.helperProportions.height / 2 < p;case "pointer":
        return (i = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, s = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, n(s, h, t.proportions.height) && n(i, l, t.proportions.width));case "touch":
        return (a >= h && a <= p || f >= h && f <= p || a < h && f > p) && (o >= l && o <= c || u >= l && u <= c || o < l && u > c);default:
        return !1;}
  }, e.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function prepareOffsets(t, n) {
      var r,
          i,
          s = e.ui.ddmanager.droppables[t.options.scope] || [],
          o = n ? n.type : null,
          u = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();e: for (r = 0; r < s.length; r++) {
        if (s[r].options.disabled || t && !s[r].accept.call(s[r].element[0], t.currentItem || t.element)) continue;for (i = 0; i < u.length; i++) if (u[i] === s[r].element[0]) {
          s[r].proportions.height = 0;continue e;
        }s[r].visible = s[r].element.css("display") !== "none";if (!s[r].visible) continue;o === "mousedown" && s[r]._activate.call(s[r], n), s[r].offset = s[r].element.offset(), s[r].proportions = { width: s[r].element[0].offsetWidth, height: s[r].element[0].offsetHeight };
      }
    }, drop: function drop(t, n) {
      var r = !1;return (e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
        if (!this.options) return;!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n));
      }), r);
    }, dragStart: function dragStart(t, n) {
      t.element.parentsUntil("body").bind("scroll.droppable", function () {
        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n);
      });
    }, drag: function drag(t, n) {
      t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
        if (this.options.disabled || this.greedyChild || !this.visible) return;var r,
            i,
            s,
            o = e.ui.intersect(t, this, this.options.tolerance),
            u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;if (!u) return;this.options.greedy && (i = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function () {
          return e.data(this, "ui-droppable").options.scope === i;
        }), s.length && (r = e.data(s[0], "ui-droppable"), r.greedyChild = u === "isover")), r && u === "isover" && (r.isover = !1, r.isout = !0, r._out.call(r, n)), this[u] = !0, this[u === "isout" ? "isover" : "isout"] = !1, this[u === "isover" ? "_over" : "_out"].call(this, n), r && u === "isout" && (r.isout = !1, r.isover = !0, r._over.call(r, n));
      });
    }, dragStop: function dragStop(t, n) {
      t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n);
    } };
})(jQuery);(function (e, t) {
  function n(e) {
    return parseInt(e, 10) || 0;
  }function r(e) {
    return !isNaN(parseInt(e, 10));
  }e.widget("ui.resizable", e.ui.mouse, { version: "1.10.1", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _create: function _create() {
      var t,
          n,
          r,
          i,
          s,
          o = this,
          u = this.options;this.element.addClass("ui-resizable"), e.extend(this, { _aspectRatio: !!u.aspectRatio, aspectRatio: u.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: u.helper || u.ghost || u.animate ? u.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = u.handles || (e(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se");if (this.handles.constructor === String) {
        this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {};for (n = 0; n < t.length; n++) r = e.trim(t[n]), s = "ui-resizable-" + r, i = e("<div class='ui-resizable-handle " + s + "'></div>"), i.css({ zIndex: u.zIndex }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
      }this._renderAxis = function (t) {
        var n, r, i, s;t = t || this.element;for (n in this.handles) {
          this.handles[n].constructor === String && (this.handles[n] = e(this.handles[n], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = e(this.handles[n], this.element), s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), i = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize());if (!e(this.handles[n]).length) continue;
        }
      }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
        o.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = i && i[1] ? i[1] : "se");
      }), u.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
        if (u.disabled) return;e(this).removeClass("ui-resizable-autohide"), o._handles.show();
      }).mouseleave(function () {
        if (u.disabled) return;o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide());
      })), this._mouseInit();
    }, _destroy: function _destroy() {
      this._mouseDestroy();var t,
          n = function n(t) {
        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
      };return (this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this);
    }, _mouseCapture: function _mouseCapture(t) {
      var n,
          r,
          i = !1;for (n in this.handles) {
        r = e(this.handles[n])[0];if (r === t.target || e.contains(r, t.target)) i = !0;
      }return !this.options.disabled && i;
    }, _mouseStart: function _mouseStart(t) {
      var r,
          i,
          s,
          o = this.options,
          u = this.element.position(),
          a = this.element;return (this.resizing = !0, /absolute/.test(a.css("position")) ? a.css({ position: "absolute", top: a.css("top"), left: a.css("left") }) : a.is(".ui-draggable") && a.css({ position: "absolute", top: u.top, left: u.left }), this._renderProxy(), r = n(this.helper.css("left")), i = n(this.helper.css("top")), o.containment && (r += e(o.containment).scrollLeft() || 0, i += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: r, top: i }, this.size = this._helper ? { width: a.outerWidth(), height: a.outerHeight() } : { width: a.width(), height: a.height() }, this.originalSize = this._helper ? { width: a.outerWidth(), height: a.outerHeight() } : { width: a.width(), height: a.height() }, this.originalPosition = { left: r, top: i }, this.sizeDiff = { width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height() }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = typeof o.aspectRatio == "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", s === "auto" ? this.axis + "-resize" : s), a.addClass("ui-resizable-resizing"), this._propagate("start", t), !0);
    }, _mouseDrag: function _mouseDrag(t) {
      var n,
          r = this.helper,
          i = {},
          s = this.originalMousePosition,
          o = this.axis,
          u = this.position.top,
          a = this.position.left,
          f = this.size.width,
          l = this.size.height,
          c = t.pageX - s.left || 0,
          h = t.pageY - s.top || 0,
          p = this._change[o];if (!p) return !1;n = p.apply(this, [t, c, h]), this._updateVirtualBoundaries(t.shiftKey);if (this._aspectRatio || t.shiftKey) n = this._updateRatio(n, t);return (n = this._respectSize(n, t), this._updateCache(n), this._propagate("resize", t), this.position.top !== u && (i.top = this.position.top + "px"), this.position.left !== a && (i.left = this.position.left + "px"), this.size.width !== f && (i.width = this.size.width + "px"), this.size.height !== l && (i.height = this.size.height + "px"), r.css(i), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(i) || this._trigger("resize", t, this.ui()), !1);
    }, _mouseStop: function _mouseStop(t) {
      this.resizing = !1;var n,
          r,
          i,
          s,
          o,
          u,
          a,
          f = this.options,
          l = this;return (this._helper && (n = this._proportionallyResizeElements, r = n.length && /textarea/i.test(n[0].nodeName), i = r && e.ui.hasScroll(n[0], "left") ? 0 : l.sizeDiff.height, s = r ? 0 : l.sizeDiff.width, o = { width: l.helper.width() - s, height: l.helper.height() - i }, u = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null, a = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null, f.animate || this.element.css(e.extend(o, { top: a, left: u })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !f.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1);
    }, _updateVirtualBoundaries: function _updateVirtualBoundaries(e) {
      var t,
          n,
          i,
          s,
          o,
          u = this.options;o = { minWidth: r(u.minWidth) ? u.minWidth : 0, maxWidth: r(u.maxWidth) ? u.maxWidth : Infinity, minHeight: r(u.minHeight) ? u.minHeight : 0, maxHeight: r(u.maxHeight) ? u.maxHeight : Infinity };if (this._aspectRatio || e) t = o.minHeight * this.aspectRatio, i = o.minWidth / this.aspectRatio, n = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), i > o.minHeight && (o.minHeight = i), n < o.maxWidth && (o.maxWidth = n), s < o.maxHeight && (o.maxHeight = s);this._vBoundaries = o;
    }, _updateCache: function _updateCache(e) {
      this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width);
    }, _updateRatio: function _updateRatio(e) {
      var t = this.position,
          n = this.size,
          i = this.axis;return (r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), i === "sw" && (e.left = t.left + (n.width - e.width), e.top = null), i === "nw" && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e);
    }, _respectSize: function _respectSize(e) {
      var t = this._vBoundaries,
          n = this.axis,
          i = r(e.width) && t.maxWidth && t.maxWidth < e.width,
          s = r(e.height) && t.maxHeight && t.maxHeight < e.height,
          o = r(e.width) && t.minWidth && t.minWidth > e.width,
          u = r(e.height) && t.minHeight && t.minHeight > e.height,
          a = this.originalPosition.left + this.originalSize.width,
          f = this.position.top + this.size.height,
          l = /sw|nw|w/.test(n),
          c = /nw|ne|n/.test(n);return (o && (e.width = t.minWidth), u && (e.height = t.minHeight), i && (e.width = t.maxWidth), s && (e.height = t.maxHeight), o && l && (e.left = a - t.minWidth), i && l && (e.left = a - t.maxWidth), u && c && (e.top = f - t.minHeight), s && c && (e.top = f - t.maxHeight), !e.width && !e.height && !e.left && e.top ? e.top = null : !e.width && !e.height && !e.top && e.left && (e.left = null), e);
    }, _proportionallyResize: function _proportionallyResize() {
      if (!this._proportionallyResizeElements.length) return;var e,
          t,
          n,
          r,
          i,
          s = this.helper || this.element;for (e = 0; e < this._proportionallyResizeElements.length; e++) {
        i = this._proportionallyResizeElements[e];if (!this.borderDif) {
          this.borderDif = [], n = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")], r = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];for (t = 0; t < n.length; t++) this.borderDif[t] = (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0);
        }i.css({ height: s.height() - this.borderDif[0] - this.borderDif[2] || 0, width: s.width() - this.borderDif[1] - this.borderDif[3] || 0 });
      }
    }, _renderProxy: function _renderProxy() {
      var t = this.element,
          n = this.options;this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++n.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    }, _change: { e: function e(_e, t) {
        return { width: this.originalSize.width + t };
      }, w: function w(e, t) {
        var n = this.originalSize,
            r = this.originalPosition;return { left: r.left + t, width: n.width - t };
      }, n: function n(e, t, _n2) {
        var r = this.originalSize,
            i = this.originalPosition;return { top: i.top + _n2, height: r.height - _n2 };
      }, s: function s(e, t, n) {
        return { height: this.originalSize.height + n };
      }, se: function se(t, n, r) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]));
      }, sw: function sw(t, n, r) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]));
      }, ne: function ne(t, n, r) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]));
      }, nw: function nw(t, n, r) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]));
      } }, _propagate: function _propagate(t, n) {
      e.ui.plugin.call(this, t, [n, this.ui()]), t !== "resize" && this._trigger(t, n, this.ui());
    }, plugins: {}, ui: function ui() {
      return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
    } }), e.ui.plugin.add("resizable", "animate", { stop: function stop(t) {
      var n = e(this).data("ui-resizable"),
          r = n.options,
          i = n._proportionallyResizeElements,
          s = i.length && /textarea/i.test(i[0].nodeName),
          o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
          u = s ? 0 : n.sizeDiff.width,
          a = { width: n.size.width - u, height: n.size.height - o },
          f = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
          l = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;n.element.animate(e.extend(a, l && f ? { top: l, left: f } : {}), { duration: r.animateDuration, easing: r.animateEasing, step: function step() {
          var r = { width: parseInt(n.element.css("width"), 10), height: parseInt(n.element.css("height"), 10), top: parseInt(n.element.css("top"), 10), left: parseInt(n.element.css("left"), 10) };i && i.length && e(i[0]).css({ width: r.width, height: r.height }), n._updateCache(r), n._propagate("resize", t);
        } });
    } }), e.ui.plugin.add("resizable", "containment", { start: function start() {
      var t,
          r,
          i,
          s,
          o,
          u,
          a,
          f = e(this).data("ui-resizable"),
          l = f.options,
          c = f.element,
          h = l.containment,
          p = h instanceof e ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;if (!p) return;f.containerElement = e(p), /document/.test(h) || h === document ? (f.containerOffset = { left: 0, top: 0 }, f.containerPosition = { left: 0, top: 0 }, f.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight }) : (t = e(p), r = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, i) {
        r[e] = n(t.css("padding" + i));
      }), f.containerOffset = t.offset(), f.containerPosition = t.position(), f.containerSize = { height: t.innerHeight() - r[3], width: t.innerWidth() - r[1] }, i = f.containerOffset, s = f.containerSize.height, o = f.containerSize.width, u = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, a = e.ui.hasScroll(p) ? p.scrollHeight : s, f.parentData = { element: p, left: i.left, top: i.top, width: u, height: a });
    }, resize: function resize(t) {
      var n,
          r,
          i,
          s,
          o = e(this).data("ui-resizable"),
          u = o.options,
          a = o.containerOffset,
          f = o.position,
          l = o._aspectRatio || t.shiftKey,
          c = { top: 0, left: 0 },
          h = o.containerElement;h[0] !== document && /static/.test(h.css("position")) && (c = a), f.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio), o.position.left = u.helper ? a.left : 0), f.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? a.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, n = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), r = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - a.top) + o.sizeDiff.height), i = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), i && s && (n -= o.parentData.left), n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n, l && (o.size.height = o.size.width / o.aspectRatio)), r + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - r, l && (o.size.width = o.size.height * o.aspectRatio));
    }, stop: function stop() {
      var t = e(this).data("ui-resizable"),
          n = t.options,
          r = t.containerOffset,
          i = t.containerPosition,
          s = t.containerElement,
          o = e(t.helper),
          u = o.offset(),
          a = o.outerWidth() - t.sizeDiff.width,
          f = o.outerHeight() - t.sizeDiff.height;t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({ left: u.left - i.left - r.left, width: a, height: f }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({ left: u.left - i.left - r.left, width: a, height: f });
    } }), e.ui.plugin.add("resizable", "alsoResize", { start: function start() {
      var t = e(this).data("ui-resizable"),
          n = t.options,
          r = function r(t) {
        e(t).each(function () {
          var t = e(this);t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) });
        });
      };typeof n.alsoResize == "object" && !n.alsoResize.parentNode ? n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], r(n.alsoResize)) : e.each(n.alsoResize, function (e) {
        r(e);
      }) : r(n.alsoResize);
    }, resize: function resize(t, n) {
      var r = e(this).data("ui-resizable"),
          i = r.options,
          s = r.originalSize,
          o = r.originalPosition,
          u = { height: r.size.height - s.height || 0, width: r.size.width - s.width || 0, top: r.position.top - o.top || 0, left: r.position.left - o.left || 0 },
          a = function a(t, r) {
        e(t).each(function () {
          var t = e(this),
              i = e(this).data("ui-resizable-alsoresize"),
              s = {},
              o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];e.each(o, function (e, t) {
            var n = (i[t] || 0) + (u[t] || 0);n && n >= 0 && (s[t] = n || null);
          }), t.css(s);
        });
      };typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function (e, t) {
        a(e, t);
      }) : a(i.alsoResize);
    }, stop: function stop() {
      e(this).removeData("resizable-alsoresize");
    } }), e.ui.plugin.add("resizable", "ghost", { start: function start() {
      var t = e(this).data("ui-resizable"),
          n = t.options,
          r = t.size;t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: 0.25, display: "block", position: "relative", height: r.height, width: r.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass(typeof n.ghost == "string" ? n.ghost : ""), t.ghost.appendTo(t.helper);
    }, resize: function resize() {
      var t = e(this).data("ui-resizable");t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width });
    }, stop: function stop() {
      var t = e(this).data("ui-resizable");t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
    } }), e.ui.plugin.add("resizable", "grid", { resize: function resize() {
      var t = e(this).data("ui-resizable"),
          n = t.options,
          r = t.size,
          i = t.originalSize,
          s = t.originalPosition,
          o = t.axis,
          u = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid,
          a = u[0] || 1,
          f = u[1] || 1,
          l = Math.round((r.width - i.width) / a) * a,
          c = Math.round((r.height - i.height) / f) * f,
          h = i.width + l,
          p = i.height + c,
          d = n.maxWidth && n.maxWidth < h,
          v = n.maxHeight && n.maxHeight < p,
          m = n.minWidth && n.minWidth > h,
          g = n.minHeight && n.minHeight > p;n.grid = u, m && (h += a), g && (p += f), d && (h -= a), v && (p -= f), /^(se|s|e)$/.test(o) ? (t.size.width = h, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.top = s.top - c) : /^(sw)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.left = s.left - l) : (t.size.width = h, t.size.height = p, t.position.top = s.top - c, t.position.left = s.left - l);
    } });
})(jQuery);(function (e, t) {
  e.widget("ui.selectable", e.ui.mouse, { version: "1.10.1", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function _create() {
      var t,
          n = this;this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
        t = e(n.options.filter, n.element[0]), t.addClass("ui-selectee"), t.each(function () {
          var t = e(this),
              n = t.offset();e.data(this, "selectable-item", { element: this, $element: t, left: n.left, top: n.top, right: n.left + t.outerWidth(), bottom: n.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting") });
        });
      }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>");
    }, _destroy: function _destroy() {
      this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy();
    }, _mouseStart: function _mouseStart(t) {
      var n = this,
          r = this.options;this.opos = [t.pageX, t.pageY];if (this.options.disabled) return;this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var r = e.data(this, "selectable-item");r.startselected = !0, !t.metaKey && !t.ctrlKey && (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, { unselecting: r.element }));
      }), e(t.target).parents().addBack().each(function () {
        var r,
            i = e.data(this, "selectable-item");if (i) return (r = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"), i.$element.removeClass(r ? "ui-unselecting" : "ui-selected").addClass(r ? "ui-selecting" : "ui-unselecting"), i.unselecting = !r, i.selecting = r, i.selected = r, r ? n._trigger("selecting", t, { selecting: i.element }) : n._trigger("unselecting", t, { unselecting: i.element }), !1);
      });
    }, _mouseDrag: function _mouseDrag(t) {
      this.dragged = !0;if (this.options.disabled) return;var n,
          r = this,
          i = this.options,
          s = this.opos[0],
          o = this.opos[1],
          u = t.pageX,
          a = t.pageY;return (s > u && (n = u, u = s, s = n), o > a && (n = a, a = o, o = n), this.helper.css({ left: s, top: o, width: u - s, height: a - o }), this.selectees.each(function () {
        var n = e.data(this, "selectable-item"),
            f = !1;if (!n || n.element === r.element[0]) return;i.tolerance === "touch" ? f = !(n.left > u || n.right < s || n.top > a || n.bottom < o) : i.tolerance === "fit" && (f = n.left > s && n.right < u && n.top > o && n.bottom < a), f ? (n.selected && (n.$element.removeClass("ui-selected"), n.selected = !1), n.unselecting && (n.$element.removeClass("ui-unselecting"), n.unselecting = !1), n.selecting || (n.$element.addClass("ui-selecting"), n.selecting = !0, r._trigger("selecting", t, { selecting: n.element }))) : (n.selecting && ((t.metaKey || t.ctrlKey) && n.startselected ? (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.$element.addClass("ui-selected"), n.selected = !0) : (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.startselected && (n.$element.addClass("ui-unselecting"), n.unselecting = !0), r._trigger("unselecting", t, { unselecting: n.element }))), n.selected && !t.metaKey && !t.ctrlKey && !n.startselected && (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, r._trigger("unselecting", t, { unselecting: n.element })));
      }), !1);
    }, _mouseStop: function _mouseStop(t) {
      var n = this;return (this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
        var r = e.data(this, "selectable-item");r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, { unselected: r.element });
      }), e(".ui-selecting", this.element[0]).each(function () {
        var r = e.data(this, "selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, { selected: r.element });
      }), this._trigger("stop", t), this.helper.remove(), !1);
    } });
})(jQuery);(function (e, t) {
  function n(e, t, n) {
    return e > t && e < t + n;
  }e.widget("ui.sortable", e.ui.mouse, { version: "1.10.1", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1000, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _create: function _create() {
      var e = this.options;this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");return this;
    }, _setOption: function _setOption(t, n) {
      t === "disabled" ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !!n)) : e.Widget.prototype._setOption.apply(this, arguments);
    }, _mouseCapture: function _mouseCapture(t, n) {
      var r = null,
          i = !1,
          s = this;if (this.reverting) return !1;if (this.options.disabled || this.options.type === "static") return !1;this._refreshItems(t), e(t.target).parents().each(function () {
        if (e.data(this, s.widgetName + "-item") === s) return (r = e(this), !1);
      }), e.data(t.target, s.widgetName + "-item") === s && (r = e(t.target));if (!r) return !1;if (this.options.handle && !n) {
        e(this.options.handle, r).find("*").addBack().each(function () {
          this === t.target && (i = !0);
        });if (!i) return !1;
      }return (this.currentItem = r, this._removeCurrentsFromItems(), !0);
    }, _mouseStart: function _mouseStart(t, n, r) {
      var i,
          s = this.options;this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();if (!r) for (i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("activate", t, this._uiHash(this));return (e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0);
    }, _mouseDrag: function _mouseDrag(t) {
      var n,
          r,
          i,
          s,
          o = this.options,
          u = !1;this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? u = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (u = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? u = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (u = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), u !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute");if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";for (n = this.items.length - 1; n >= 0; n--) {
        r = this.items[n], i = r.item[0], s = this._intersectsWithPointer(r);if (!s) continue;if (r.instance !== this.currentContainer) continue;if (i !== this.currentItem[0] && this.placeholder[s === 1 ? "next" : "prev"]()[0] !== i && !e.contains(this.placeholder[0], i) && (this.options.type === "semi-dynamic" ? !e.contains(this.element[0], i) : !0)) {
          this.direction = s === 1 ? "down" : "up";if (this.options.tolerance !== "pointer" && !this._intersectsWithSides(r)) break;this._rearrange(t, r), this._trigger("change", t, this._uiHash());break;
        }
      }return (this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1);
    }, _mouseStop: function _mouseStop(t, n) {
      if (!t) return;e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);if (this.options.revert) {
        var r = this,
            i = this.placeholder.offset();this.reverting = !0, e(this.helper).animate({ left: i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft), top: i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop) }, parseInt(this.options.revert, 10) || 500, function () {
          r._clear(t);
        });
      } else this._clear(t, n);return !1;
    }, cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp({ target: null }), this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0);
      }return (this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this);
    }, serialize: function serialize(t) {
      var n = this._getItemsAsjQuery(t && t.connected),
          r = [];return (t = t || {}, e(n).each(function () {
        var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]));
      }), !r.length && t.key && r.push(t.key + "="), r.join("&"));
    }, toArray: function toArray(t) {
      var n = this._getItemsAsjQuery(t && t.connected),
          r = [];return (t = t || {}, n.each(function () {
        r.push(e(t.item || this).attr(t.attribute || "id") || "");
      }), r);
    }, _intersectsWith: function _intersectsWith(e) {
      var t = this.positionAbs.left,
          n = t + this.helperProportions.width,
          r = this.positionAbs.top,
          i = r + this.helperProportions.height,
          s = e.left,
          o = s + e.width,
          u = e.top,
          a = u + e.height,
          f = this.offset.click.top,
          l = this.offset.click.left,
          c = r + f > u && r + f < a && t + l > s && t + l < o;return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a;
    }, _intersectsWithPointer: function _intersectsWithPointer(e) {
      var t = this.options.axis === "x" || n(this.positionAbs.top + this.offset.click.top, e.top, e.height),
          r = this.options.axis === "y" || n(this.positionAbs.left + this.offset.click.left, e.left, e.width),
          i = t && r,
          s = this._getDragVerticalDirection(),
          o = this._getDragHorizontalDirection();return i ? this.floating ? o && o === "right" || s === "down" ? 2 : 1 : s && (s === "down" ? 2 : 1) : !1;
    }, _intersectsWithSides: function _intersectsWithSides(e) {
      var t = n(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
          r = n(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
          i = this._getDragVerticalDirection(),
          s = this._getDragHorizontalDirection();return this.floating && s ? s === "right" && r || s === "left" && !r : i && (i === "down" && t || i === "up" && !t);
    }, _getDragVerticalDirection: function _getDragVerticalDirection() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;return e !== 0 && (e > 0 ? "down" : "up");
    }, _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;return e !== 0 && (e > 0 ? "right" : "left");
    }, refresh: function refresh(e) {
      return (this._refreshItems(e), this.refreshPositions(), this);
    }, _connectWith: function _connectWith() {
      var e = this.options;return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith;
    }, _getItemsAsjQuery: function _getItemsAsjQuery(t) {
      var n,
          r,
          i,
          s,
          o = [],
          u = [],
          a = this._connectWith();if (a && t) for (n = a.length - 1; n >= 0; n--) {
        i = e(a[n]);for (r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && u.push([e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
      }u.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);for (n = u.length - 1; n >= 0; n--) u[n][0].each(function () {
        o.push(this);
      });return e(o);
    }, _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");this.items = e.grep(this.items, function (e) {
        for (var n = 0; n < t.length; n++) if (t[n] === e.item[0]) return !1;return !0;
      });
    }, _refreshItems: function _refreshItems(t) {
      this.items = [], this.containers = [this];var n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l = this.items,
          c = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]],
          h = this._connectWith();if (h && this.ready) for (n = h.length - 1; n >= 0; n--) {
        i = e(h[n]);for (r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && (c.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, { item: this.currentItem }) : e(s.options.items, s.element), s]), this.containers.push(s));
      }for (n = c.length - 1; n >= 0; n--) {
        o = c[n][1], u = c[n][0];for (r = 0, f = u.length; r < f; r++) a = e(u[r]), a.data(this.widgetName + "-item", o), l.push({ item: a, instance: o, width: 0, height: 0, left: 0, top: 0 });
      }
    }, refreshPositions: function refreshPositions(t) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());var n, r, i, s;for (n = this.items.length - 1; n >= 0; n--) {
        r = this.items[n];if (r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) continue;i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item, t || (r.width = i.outerWidth(), r.height = i.outerHeight()), s = i.offset(), r.left = s.left, r.top = s.top;
      }if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(), this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();return this;
    }, _createPlaceholder: function _createPlaceholder(t) {
      t = t || this;var n,
          r = t.options;if (!r.placeholder || r.placeholder.constructor === String) n = r.placeholder, r.placeholder = { element: function element() {
          var r = e(document.createElement(t.currentItem[0].nodeName)).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return (n || (r.style.visibility = "hidden"), r);
        }, update: function update(e, i) {
          if (n && !r.forcePlaceholderSize) return;i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10));
        } };t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), r.placeholder.update(t, t.placeholder);
    }, _contactContainers: function _contactContainers(t) {
      var n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c = null,
          h = null;for (n = this.containers.length - 1; n >= 0; n--) {
        if (e.contains(this.currentItem[0], this.containers[n].element[0])) continue;if (this._intersectsWith(this.containers[n].containerCache)) {
          if (c && e.contains(this.containers[n].element[0], c.element[0])) continue;c = this.containers[n], h = n;
        } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)), this.containers[n].containerCache.over = 0);
      }if (!c) return;if (this.containers.length === 1) this.containers[h]._trigger("over", t, this._uiHash(this)), this.containers[h].containerCache.over = 1;else {
        i = 10000, s = null, o = this.containers[h].floating ? "left" : "top", u = this.containers[h].floating ? "width" : "height", a = this.positionAbs[o] + this.offset.click[o];for (r = this.items.length - 1; r >= 0; r--) {
          if (!e.contains(this.containers[h].element[0], this.items[r].item[0])) continue;if (this.items[r].item[0] === this.currentItem[0]) continue;f = this.items[r].item.offset()[o], l = !1, Math.abs(f - a) > Math.abs(f + this.items[r][u] - a) && (l = !0, f += this.items[r][u]), Math.abs(f - a) < i && (i = Math.abs(f - a), s = this.items[r], this.direction = l ? "up" : "down");
        }if (!s && !this.options.dropOnEmpty) return;this.currentContainer = this.containers[h], s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[h].element, !0), this._trigger("change", t, this._uiHash()), this.containers[h]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[h]._trigger("over", t, this._uiHash(this)), this.containers[h].containerCache.over = 1;
      }
    }, _createHelper: function _createHelper(t) {
      var n = this.options,
          r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper === "clone" ? this.currentItem.clone() : this.currentItem;return (r.parents("body").length || e(n.appendTo !== "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!r[0].style.width || n.forceHelperSize) && r.width(this.currentItem.width()), (!r[0].style.height || n.forceHelperSize) && r.height(this.currentItem.height()), r);
    }, _adjustOffsetFromHelper: function _adjustOffsetFromHelper(t) {
      typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    }, _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();var t = this.offsetParent.offset();this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = { top: 0, left: 0 };return { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function _getRelativeOffset() {
      if (this.cssPosition === "relative") {
        var e = this.currentItem.position();return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
      }return { top: 0, left: 0 };
    }, _cacheMargins: function _cacheMargins() {
      this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
    }, _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function _setContainment() {
      var t,
          n,
          r,
          i = this.options;i.containment === "parent" && (i.containment = this.helper[0].parentNode);if (i.containment === "document" || i.containment === "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];/^(document|window|parent)$/.test(i.containment) || (t = e(i.containment)[0], n = e(i.containment).offset(), r = e(t).css("overflow") !== "hidden", this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    }, _convertPositionTo: function _convertPositionTo(t, n) {
      n || (n = this.position);var r = t === "absolute" ? 1 : -1,
          i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          s = /(html|body)/i.test(i[0].tagName);return { top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r, left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r };
    }, _generatePosition: function _generatePosition(t) {
      var n,
          r,
          i = this.options,
          s = t.pageX,
          o = t.pageY,
          u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          a = /(html|body)/i.test(u[0].tagName);return (this.cssPosition === "relative" && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n, r = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0], s = this.containment ? r - this.offset.click.left >= this.containment[0] && r - this.offset.click.left <= this.containment[2] ? r : r - this.offset.click.left >= this.containment[0] ? r - i.grid[0] : r + i.grid[0] : r)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()), left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft()) });
    }, _rearrange: function _rearrange(e, t, n, r) {
      n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;var i = this.counter;this._delay(function () {
        i === this.counter && this.refreshPositions(!r);
      });
    }, _clear: function _clear(t, n) {
      this.reverting = !1;var r,
          i = [];!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;if (this.helper[0] === this.currentItem[0]) {
        for (r in this._storedCSS) if (this._storedCSS[r] === "auto" || this._storedCSS[r] === "static") this._storedCSS[r] = "";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();this.fromOutside && !n && i.push(function (e) {
        this._trigger("receive", e, this._uiHash(this.fromOutside));
      }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !n && i.push(function (e) {
        this._trigger("update", e, this._uiHash());
      }), this !== this.currentContainer && (n || (i.push(function (e) {
        this._trigger("remove", e, this._uiHash());
      }), i.push((function (e) {
        return function (t) {
          e._trigger("receive", t, this._uiHash(this));
        };
      }).call(this, this.currentContainer)), i.push((function (e) {
        return function (t) {
          e._trigger("update", t, this._uiHash(this));
        };
      }).call(this, this.currentContainer))));for (r = this.containers.length - 1; r >= 0; r--) n || i.push((function (e) {
        return function (t) {
          e._trigger("deactivate", t, this._uiHash(this));
        };
      }).call(this, this.containers[r])), this.containers[r].containerCache.over && (i.push((function (e) {
        return function (t) {
          e._trigger("out", t, this._uiHash(this));
        };
      }).call(this, this.containers[r])), this.containers[r].containerCache.over = 0);this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1;if (this.cancelHelperRemoval) {
        if (!n) {
          this._trigger("beforeStop", t, this._uiHash());for (r = 0; r < i.length; r++) i[r].call(this, t);this._trigger("stop", t, this._uiHash());
        }return (this.fromOutside = !1, !1);
      }n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null;if (!n) {
        for (r = 0; r < i.length; r++) i[r].call(this, t);this._trigger("stop", t, this._uiHash());
      }return (this.fromOutside = !1, !0);
    }, _trigger: function _trigger() {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    }, _uiHash: function _uiHash(t) {
      var n = t || this;return { helper: n.helper, placeholder: n.placeholder || e([]), position: n.position, originalPosition: n.originalPosition, offset: n.positionAbs, item: n.currentItem, sender: t ? t.element : null };
    } });
})(jQuery);(function (e, t) {
  var n = 0,
      r = {},
      i = {};r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "hide", i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show", e.widget("ui.accordion", { version: "1.10.1", options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, _create: function _create() {
      var t = this.options;this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), !t.collapsible && (t.active === !1 || t.active == null) && (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh();
    }, _getCreateEventData: function _getCreateEventData() {
      return { header: this.active, panel: this.active.length ? this.active.next() : e(), content: this.active.length ? this.active.next() : e() };
    }, _createIcons: function _createIcons() {
      var t = this.options.icons;t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"));
    }, _destroyIcons: function _destroyIcons() {
      this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
    }, _destroy: function _destroy() {
      var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
        /^ui-accordion/.test(this.id) && this.removeAttribute("id");
      }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
        /^ui-accordion/.test(this.id) && this.removeAttribute("id");
      }), this.options.heightStyle !== "content" && e.css("height", "");
    }, _setOption: function _setOption(e, t) {
      if (e === "active") {
        this._activate(t);return;
      }e === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), e === "collapsible" && !t && this.options.active === !1 && this._activate(0), e === "icons" && (this._destroyIcons(), t && this._createIcons()), e === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t);
    }, _keydown: function _keydown(t) {
      if (t.altKey || t.ctrlKey) return;var n = e.ui.keyCode,
          r = this.headers.length,
          i = this.headers.index(t.target),
          s = !1;switch (t.keyCode) {case n.RIGHT:case n.DOWN:
          s = this.headers[(i + 1) % r];break;case n.LEFT:case n.UP:
          s = this.headers[(i - 1 + r) % r];break;case n.SPACE:case n.ENTER:
          this._eventHandler(t);break;case n.HOME:
          s = this.headers[0];break;case n.END:
          s = this.headers[r - 1];}s && (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), t.preventDefault());
    }, _panelKeyDown: function _panelKeyDown(t) {
      t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus();
    }, refresh: function refresh() {
      var t = this.options;this._processPanels();if (t.active === !1 && t.collapsible === !0 || !this.headers.length) t.active = !1, this.active = e();t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    }, _processPanels: function _processPanels() {
      this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
    }, _refresh: function _refresh() {
      var t,
          r = this.options,
          i = r.heightStyle,
          s = this.element.parent(),
          o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n);this.active = this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (t) {
        var n = e(this),
            r = n.attr("id"),
            i = n.next(),
            s = i.attr("id");r || (r = o + "-header-" + t, n.attr("id", r)), s || (s = o + "-panel-" + t, i.attr("id", s)), n.attr("aria-controls", s), i.attr("aria-labelledby", r);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", tabIndex: -1 }).next().attr({ "aria-expanded": "false", "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", tabIndex: 0 }).next().attr({ "aria-expanded": "true", "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(r.event), i === "fill" ? (t = s.height(), this.element.siblings(":visible").each(function () {
        var n = e(this),
            r = n.css("position");if (r === "absolute" || r === "fixed") return;t -= n.outerHeight(!0);
      }), this.headers.each(function () {
        t -= e(this).outerHeight(!0);
      }), this.headers.next().each(function () {
        e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()));
      }).css("overflow", "auto")) : i === "auto" && (t = 0, this.headers.next().each(function () {
        t = Math.max(t, e(this).css("height", "").height());
      }).height(t));
    }, _activate: function _activate(t) {
      var n = this._findActive(t)[0];if (n === this.active[0]) return;n = n || this.active[0], this._eventHandler({ target: n, currentTarget: n, preventDefault: e.noop });
    }, _findActive: function _findActive(t) {
      return typeof t == "number" ? this.headers.eq(t) : e();
    }, _setupEvents: function _setupEvents(t) {
      var n = { keydown: "_keydown" };t && e.each(t.split(" "), function (e, t) {
        n[t] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, n), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers);
    }, _eventHandler: function _eventHandler(t) {
      var n = this.options,
          r = this.active,
          i = e(t.currentTarget),
          s = i[0] === r[0],
          o = s && n.collapsible,
          u = o ? e() : i.next(),
          a = r.next(),
          f = { oldHeader: r, oldPanel: a, newHeader: o ? e() : i, newPanel: u };t.preventDefault();if (s && !n.collapsible || this._trigger("beforeActivate", t, f) === !1) return;n.active = o ? !1 : this.headers.index(i), this.active = s ? e() : i, this._toggle(f), r.removeClass("ui-accordion-header-active ui-state-active"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), i.next().addClass("ui-accordion-content-active"));
    }, _toggle: function _toggle(t) {
      var n = t.newPanel,
          r = this.prevShow.length ? this.prevShow : t.oldPanel;this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = r, this.options.animate ? this._animate(n, r, t) : (r.hide(), n.show(), this._toggleComplete(t)), r.attr({ "aria-expanded": "false", "aria-hidden": "true" }), r.prev().attr("aria-selected", "false"), n.length && r.length ? r.prev().attr("tabIndex", -1) : n.length && this.headers.filter(function () {
        return e(this).attr("tabIndex") === 0;
      }).attr("tabIndex", -1), n.attr({ "aria-expanded": "true", "aria-hidden": "false" }).prev().attr({ "aria-selected": "true", tabIndex: 0 });
    }, _animate: function _animate(e, t, n) {
      var s,
          o,
          u,
          a = this,
          f = 0,
          l = e.length && (!t.length || e.index() < t.index()),
          c = this.options.animate || {},
          h = l && c.down || c,
          p = function p() {
        a._toggleComplete(n);
      };typeof h == "number" && (u = h), typeof h == "string" && (o = h), o = o || h.easing || c.easing, u = u || h.duration || c.duration;if (!t.length) return e.animate(i, u, o, p);if (!e.length) return t.animate(r, u, o, p);s = e.show().outerHeight(), t.animate(r, { duration: u, easing: o, step: function step(e, t) {
          t.now = Math.round(e);
        } }), e.hide().animate(i, { duration: u, easing: o, complete: p, step: function step(e, n) {
          n.now = Math.round(e), n.prop !== "height" ? f += n.now : a.options.heightStyle !== "content" && (n.now = Math.round(s - t.outerHeight() - f), f = 0);
        } });
    }, _toggleComplete: function _toggleComplete(e) {
      var t = e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e);
    } });
})(jQuery);(function (e, t) {
  var n = 0;e.widget("ui.autocomplete", { version: "1.10.1", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, pending: 0, _create: function _create() {
      var t,
          n,
          r,
          i = this.element[0].nodeName.toLowerCase(),
          s = i === "textarea",
          o = i === "input";this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, { keydown: function keydown(i) {
          if (this.element.prop("readOnly")) {
            t = !0, r = !0, n = !0;return;
          }t = !1, r = !1, n = !1;var s = e.ui.keyCode;switch (i.keyCode) {case s.PAGE_UP:
              t = !0, this._move("previousPage", i);break;case s.PAGE_DOWN:
              t = !0, this._move("nextPage", i);break;case s.UP:
              t = !0, this._keyEvent("previous", i);break;case s.DOWN:
              t = !0, this._keyEvent("next", i);break;case s.ENTER:case s.NUMPAD_ENTER:
              this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));break;case s.TAB:
              this.menu.active && this.menu.select(i);break;case s.ESCAPE:
              this.menu.element.is(":visible") && (this._value(this.term), this.close(i), i.preventDefault());break;default:
              n = !0, this._searchTimeout(i);}
        }, keypress: function keypress(r) {
          if (t) {
            t = !1, r.preventDefault();return;
          }if (n) return;var i = e.ui.keyCode;switch (r.keyCode) {case i.PAGE_UP:
              this._move("previousPage", r);break;case i.PAGE_DOWN:
              this._move("nextPage", r);break;case i.UP:
              this._keyEvent("previous", r);break;case i.DOWN:
              this._keyEvent("next", r);}
        }, input: function input(e) {
          if (r) {
            r = !1, e.preventDefault();return;
          }this._searchTimeout(e);
        }, focus: function focus() {
          this.selectedItem = null, this.previous = this._value();
        }, blur: function blur(e) {
          if (this.cancelBlur) {
            delete this.cancelBlur;return;
          }clearTimeout(this.searching), this.close(e), this._change(e);
        } }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ input: e(), role: null }).hide().data("ui-menu"), this._on(this.menu.element, { mousedown: function mousedown(t) {
          t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur;
          });var n = this.menu.element[0];e(t.target).closest(".ui-menu-item").length || this._delay(function () {
            var t = this;this.document.one("mousedown", function (r) {
              r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close();
            });
          });
        }, menufocus: function menufocus(t, n) {
          if (this.isNewMenu) {
            this.isNewMenu = !1;if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
              this.menu.blur(), this.document.one("mousemove", function () {
                e(t.target).trigger(t.originalEvent);
              });return;
            }
          }var r = n.item.data("ui-autocomplete-item");!1 !== this._trigger("focus", t, { item: r }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value);
        }, menuselect: function menuselect(e, t) {
          var n = t.item.data("ui-autocomplete-item"),
              r = this.previous;this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function () {
            this.previous = r, this.selectedItem = n;
          })), !1 !== this._trigger("select", e, { item: n }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n;
        } }), this.liveRegion = e("<span>", { role: "status", "aria-live": "polite" }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), this._on(this.window, { beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        } });
    }, _destroy: function _destroy() {
      clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    }, _setOption: function _setOption(e, t) {
      this._super(e, t), e === "source" && this._initSource(), e === "appendTo" && this.menu.element.appendTo(this._appendTo()), e === "disabled" && t && this.xhr && this.xhr.abort();
    }, _appendTo: function _appendTo() {
      var t = this.options.appendTo;return (t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t);
    }, _initSource: function _initSource() {
      var t,
          n,
          r = this;e.isArray(this.options.source) ? (t = this.options.source, this.source = function (n, r) {
        r(e.ui.autocomplete.filter(t, n.term));
      }) : typeof this.options.source == "string" ? (n = this.options.source, this.source = function (t, i) {
        r.xhr && r.xhr.abort(), r.xhr = e.ajax({ url: n, data: t, dataType: "json", success: function success(e) {
            i(e);
          }, error: function error() {
            i([]);
          } });
      }) : this.source = this.options.source;
    }, _searchTimeout: function _searchTimeout(e) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        this.term !== this._value() && (this.selectedItem = null, this.search(null, e));
      }, this.options.delay);
    }, search: function search(e, t) {
      e = e != null ? e : this._value(), this.term = this._value();if (e.length < this.options.minLength) return this.close(t);if (this._trigger("search", t) === !1) return;return this._search(e);
    }, _search: function _search(e) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: e }, this._response());
    }, _response: function _response() {
      var e = this,
          t = ++n;return function (r) {
        t === n && e.__response(r), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading");
      };
    }, __response: function __response(e) {
      e && (e = this._normalize(e)), this._trigger("response", null, { content: e }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close();
    }, close: function close(e) {
      this.cancelSearch = !0, this._close(e);
    }, _close: function _close(e) {
      this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e));
    }, _change: function _change(e) {
      this.previous !== this._value() && this._trigger("change", e, { item: this.selectedItem });
    }, _normalize: function _normalize(t) {
      return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
        return typeof t == "string" ? { label: t, value: t } : e.extend({ label: t.label || t.value, value: t.value || t.label }, t);
      });
    }, _suggest: function _suggest(t) {
      var n = this.menu.element.empty();this._renderMenu(n, t), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next();
    }, _resizeMenu: function _resizeMenu() {
      var e = this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
    }, _renderMenu: function _renderMenu(t, n) {
      var r = this;e.each(n, function (e, n) {
        r._renderItemData(t, n);
      });
    }, _renderItemData: function _renderItemData(e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t);
    }, _renderItem: function _renderItem(t, n) {
      return e("<li>").append(e("<a>").text(n.label)).appendTo(t);
    }, _move: function _move(e, t) {
      if (!this.menu.element.is(":visible")) {
        this.search(null, t);return;
      }if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
        this._value(this.term), this.menu.blur();return;
      }this.menu[e](t);
    }, widget: function widget() {
      return this.menu.element;
    }, _value: function _value() {
      return this.valueMethod.apply(this.element, arguments);
    }, _keyEvent: function _keyEvent(e, t) {
      if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault();
    } }), e.extend(e.ui.autocomplete, { escapeRegex: function escapeRegex(e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }, filter: function filter(t, n) {
      var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");return e.grep(t, function (e) {
        return r.test(e.label || e.value || e);
      });
    } }), e.widget("ui.autocomplete", e.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function results(e) {
          return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        } } }, __response: function __response(e) {
      var t;this._superApply(arguments);if (this.options.disabled || this.cancelSearch) return;e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults, this.liveRegion.text(t);
    } });
})(jQuery);(function (e, t) {
  var n,
      r,
      i,
      s,
      o = "ui-button ui-widget ui-state-default ui-corner-all",
      u = "ui-state-hover ui-state-active ",
      a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      f = function f() {
    var t = e(this).find(":ui-button");setTimeout(function () {
      t.button("refresh");
    }, 1);
  },
      l = function l(t) {
    var n = t.name,
        r = t.form,
        i = e([]);return (n && (n = n.replace(/'/g, "\\'"), r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function () {
      return !this.form;
    })), i);
  };e.widget("ui.button", { version: "1.10.1", defaultElement: "<button>", options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } }, _create: function _create() {
      this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");var t = this,
          u = this.options,
          a = this.type === "checkbox" || this.type === "radio",
          c = a ? "" : "ui-state-active",
          h = "ui-state-focus";u.label === null && (u.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
        if (u.disabled) return;this === n && e(this).addClass("ui-state-active");
      }).bind("mouseleave" + this.eventNamespace, function () {
        if (u.disabled) return;e(this).removeClass(c);
      }).bind("click" + this.eventNamespace, function (e) {
        u.disabled && (e.preventDefault(), e.stopImmediatePropagation());
      }), this.element.bind("focus" + this.eventNamespace, function () {
        t.buttonElement.addClass(h);
      }).bind("blur" + this.eventNamespace, function () {
        t.buttonElement.removeClass(h);
      }), a && (this.element.bind("change" + this.eventNamespace, function () {
        if (s) return;t.refresh();
      }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (e) {
        if (u.disabled) return;s = !1, r = e.pageX, i = e.pageY;
      }).bind("mouseup" + this.eventNamespace, function (e) {
        if (u.disabled) return;if (r !== e.pageX || i !== e.pageY) s = !0;
      })), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        if (u.disabled || s) return !1;
      }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        if (u.disabled || s) return !1;e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");var n = t.element[0];l(n).not(n).map(function () {
          return e(this).button("widget")[0];
        }).removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
        if (u.disabled) return !1;e(this).addClass("ui-state-active"), n = this, t.document.one("mouseup", function () {
          n = null;
        });
      }).bind("mouseup" + this.eventNamespace, function () {
        if (u.disabled) return !1;e(this).removeClass("ui-state-active");
      }).bind("keydown" + this.eventNamespace, function (t) {
        if (u.disabled) return !1;(t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active");
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
        e(this).removeClass("ui-state-active");
      }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
        t.keyCode === e.ui.keyCode.SPACE && e(this).click();
      })), this._setOption("disabled", u.disabled), this._resetButton();
    }, _determineButtonType: function _determineButtonType() {
      var e, t, n;this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element;
    }, widget: function widget() {
      return this.buttonElement;
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title");
    }, _setOption: function _setOption(e, t) {
      this._super(e, t);if (e === "disabled") {
        t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);return;
      }this._resetButton();
    }, refresh: function refresh() {
      var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? l(this.element[0]).each(function () {
        e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
    }, _resetButton: function _resetButton() {
      if (this.type === "input") {
        this.options.label && this.element.val(this.options.label);return;
      }var t = this.buttonElement.removeClass(a),
          n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
          r = this.options.icons,
          i = r.primary && r.secondary,
          s = [];r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "));
    } }), e.widget("ui.buttonset", { version: "1.10.1", options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" }, _create: function _create() {
      this.element.addClass("ui-buttonset");
    }, _init: function _init() {
      this.refresh();
    }, _setOption: function _setOption(e, t) {
      e === "disabled" && this.buttons.button("option", e, t), this._super(e, t);
    }, refresh: function refresh() {
      var t = this.element.css("direction") === "rtl";this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
        return e(this).button("widget")[0];
      }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end();
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
        return e(this).button("widget")[0];
      }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
    } });
})(jQuery);(function (e, t) {
  function s() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.dpDiv = o(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }function o(t) {
    var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(n, "mouseout", function () {
      e(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover");
    }).delegate(n, "mouseover", function () {
      e.datepicker._isDisabledDatepicker(i.inline ? t.parent()[0] : i.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"));
    });
  }function u(t, n) {
    e.extend(t, n);for (var r in n) n[r] == null && (t[r] = n[r]);return t;
  }e.extend(e.ui, { datepicker: { version: "1.10.1" } });var n = "datepicker",
      r = new Date().getTime(),
      i;e.extend(s.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function _widgetDatepicker() {
      return this.dpDiv;
    }, setDefaults: function setDefaults(e) {
      return (u(this._defaults, e || {}), this);
    }, _attachDatepicker: function _attachDatepicker(t, n) {
      var r, i, s;r = t.nodeName.toLowerCase(), i = r === "div" || r === "span", t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), r === "input" ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s);
    }, _newInst: function _newInst(t, n) {
      var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");return { id: r, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: n, dpDiv: n ? o(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv };
    }, _connectDatepicker: function _connectDatepicker(t, r) {
      var i = e(t);r.append = e([]), r.trigger = e([]);if (i.hasClass(this.markerClassName)) return;this._attachments(i, r), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), e.data(t, n, r), r.settings.disabled && this._disableDatepicker(t);
    }, _attachments: function _attachments(t, n) {
      var r,
          i,
          s,
          o = this._get(n, "appendText"),
          u = this._get(n, "isRTL");n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), (r === "focus" || r === "both") && t.focus(this._showDatepicker);if (r === "button" || r === "both") i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: s, alt: i, title: i }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({ src: s, alt: i, title: i }) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function () {
        return (e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1);
      });
    }, _autoSize: function _autoSize(e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t,
            n,
            r,
            i,
            s = new Date(2009, 11, 20),
            o = this._get(e, "dateFormat");o.match(/[DM]/) && (t = function (e) {
          n = 0, r = 0;for (i = 0; i < e.length; i++) e[i].length > n && (n = e[i].length, r = i);return r;
        }, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length);
      }
    }, _inlineDatepicker: function _inlineDatepicker(t, r) {
      var i = e(t);if (i.hasClass(this.markerClassName)) return;i.addClass(this.markerClassName).append(r.dpDiv), e.data(t, n, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block");
    }, _dialogDatepicker: function _dialogDatepicker(t, r, i, s, o) {
      var a,
          f,
          l,
          c,
          h,
          p = this._dialogInst;return (p || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], n, p)), u(p.settings, s || {}), r = r && r.constructor === Date ? this._formatDate(p, r) : r, this._dialogInput.val(r), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (f = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [f / 2 - 100 + c, l / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], n, p), this);
    }, _destroyDatepicker: function _destroyDatepicker(t) {
      var r,
          i = e(t),
          s = e.data(t, n);if (!i.hasClass(this.markerClassName)) return;r = t.nodeName.toLowerCase(), e.removeData(t, n), r === "input" ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && i.removeClass(this.markerClassName).empty();
    }, _enableDatepicker: function _enableDatepicker(t) {
      var r,
          i,
          s = e(t),
          o = e.data(t, n);if (!s.hasClass(this.markerClassName)) return;r = t.nodeName.toLowerCase();if (r === "input") t.disabled = !1, o.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({ opacity: "1.0", cursor: "" });else if (r === "div" || r === "span") i = s.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      });
    }, _disableDatepicker: function _disableDatepicker(t) {
      var r,
          i,
          s = e(t),
          o = e.data(t, n);if (!s.hasClass(this.markerClassName)) return;r = t.nodeName.toLowerCase();if (r === "input") t.disabled = !0, o.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({ opacity: "0.5", cursor: "default" });else if (r === "div" || r === "span") i = s.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      }), this._disabledInputs[this._disabledInputs.length] = t;
    }, _isDisabledDatepicker: function _isDisabledDatepicker(e) {
      if (!e) return !1;for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] === e) return !0;return !1;
    }, _getInst: function _getInst(t) {
      try {
        return e.data(t, n);
      } catch (r) {
        throw "Missing instance data for this datepicker";
      }
    }, _optionDatepicker: function _optionDatepicker(n, r, i) {
      var s,
          o,
          a,
          f,
          l = this._getInst(n);if (arguments.length === 2 && typeof r == "string") return r === "defaults" ? e.extend({}, e.datepicker._defaults) : l ? r === "all" ? e.extend({}, l.settings) : this._get(l, r) : null;s = r || {}, typeof r == "string" && (s = {}, s[r] = i), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(n, !0), a = this._getMinMaxDate(l, "min"), f = this._getMinMaxDate(l, "max"), u(l.settings, s), a !== null && s.dateFormat !== t && s.minDate === t && (l.settings.minDate = this._formatDate(l, a)), f !== null && s.dateFormat !== t && s.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)), "disabled" in s && (s.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l));
    }, _changeDatepicker: function _changeDatepicker(e, t, n) {
      this._optionDatepicker(e, t, n);
    }, _refreshDatepicker: function _refreshDatepicker(e) {
      var t = this._getInst(e);t && this._updateDatepicker(t);
    }, _setDateDatepicker: function _setDateDatepicker(e, t) {
      var n = this._getInst(e);n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n));
    }, _getDateDatepicker: function _getDateDatepicker(e, t) {
      var n = this._getInst(e);return (n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null);
    }, _doKeyDown: function _doKeyDown(t) {
      var n,
          r,
          i,
          s = e.datepicker._getInst(t.target),
          o = !0,
          u = s.dpDiv.is(".ui-datepicker-rtl");s._keyEvent = !0;if (e.datepicker._datepickerShowing) switch (t.keyCode) {case 9:
          e.datepicker._hideDatepicker(), o = !1;break;case 13:
          return (i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1);case 27:
          e.datepicker._hideDatepicker();break;case 33:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");break;case 34:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");break;case 35:
          (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;break;case 36:
          (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;break;case 37:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");break;case 38:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;break;case 39:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");break;case 40:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;break;default:
          o = !1;} else t.keyCode === 36 && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;o && (t.preventDefault(), t.stopPropagation());
    }, _doKeyPress: function _doKeyPress(t) {
      var n,
          r,
          i = e.datepicker._getInst(t.target);if (e.datepicker._get(i, "constrainInput")) return (n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1);
    }, _doKeyUp: function _doKeyUp(t) {
      var n,
          r = e.datepicker._getInst(t.target);if (r.input.val() !== r.lastVal) try {
        n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r));
      } catch (i) {}return !0;
    }, _showDatepicker: function _showDatepicker(t) {
      t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = e("input", t.parentNode)[0]);if (e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t) return;var n, r, i, s, o, a, f;n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(n, "beforeShow"), i = r ? r.apply(t, [t, n]) : {};if (i === !1) return;u(n.settings, i), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), s = !1, e(t).parents().each(function () {
        return (s |= e(this).css("position") === "fixed", !s);
      }), o = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(n), o = e.datepicker._checkOffset(n, o, s), n.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute", display: "none", left: o.left + "px", top: o.top + "px" }), n.inline || (a = e.datepicker._get(n, "showAnim"), f = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f) : n.dpDiv[a || "show"](a ? f : null), n.input.is(":visible") && !n.input.is(":disabled") && n.input.focus(), e.datepicker._curInst = n);
    }, _updateDatepicker: function _updateDatepicker(t) {
      this.maxRows = 4, i = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();var n,
          r = this._getNumberOfMonths(t),
          s = r[1],
          o = 17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] !== document.activeElement && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function () {
        n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null;
      }, 0));
    }, _getBorders: function _getBorders(e) {
      var t = function t(e) {
        return ({ thin: 1, medium: 2, thick: 3 })[e] || e;
      };return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))];
    }, _checkOffset: function _checkOffset(t, n, r) {
      var i = t.dpDiv.outerWidth(),
          s = t.dpDiv.outerHeight(),
          o = t.input ? t.input.outerWidth() : 0,
          u = t.input ? t.input.outerHeight() : 0,
          a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
          f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());return (n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n);
    }, _findPos: function _findPos(t) {
      var n,
          r = this._getInst(t),
          i = this._get(r, "isRTL");while (t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))) t = t[i ? "previousSibling" : "nextSibling"];return (n = e(t).offset(), [n.left, n.top]);
    }, _hideDatepicker: function _hideDatepicker(t) {
      var r,
          i,
          s,
          o,
          u = this._curInst;if (!u || t && u !== e.data(t, n)) return;this._datepickerShowing && (r = this._get(u, "showAnim"), i = this._get(u, "duration"), s = function () {
        e.datepicker._tidyDialog(u);
      }, e.effects && (e.effects.effect[r] || e.effects[r]) ? u.dpDiv.hide(r, e.datepicker._get(u, "showOptions"), i, s) : u.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? i : null, s), r || s(), this._datepickerShowing = !1, o = this._get(u, "onClose"), o && o.apply(u.input ? u.input[0] : null, [u.input ? u.input.val() : "", u]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1);
    }, _tidyDialog: function _tidyDialog(e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    }, _checkExternalClick: function _checkExternalClick(t) {
      if (!e.datepicker._curInst) return;var n = e(t.target),
          r = e.datepicker._getInst(n[0]);(n[0].id !== e.datepicker._mainDivId && n.parents("#" + e.datepicker._mainDivId).length === 0 && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker();
    }, _adjustDate: function _adjustDate(t, n, r) {
      var i = e(t),
          s = this._getInst(i[0]);if (this._isDisabledDatepicker(i[0])) return;this._adjustInstDate(s, n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s);
    }, _gotoToday: function _gotoToday(t) {
      var n,
          r = e(t),
          i = this._getInst(r[0]);this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date(), i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r);
    }, _selectMonthYear: function _selectMonthYear(t, n, r) {
      var i = e(t),
          s = this._getInst(i[0]);s["selected" + (r === "M" ? "Month" : "Year")] = s["draw" + (r === "M" ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i);
    }, _selectDay: function _selectDay(t, n, r, i) {
      var s,
          o = e(t);if (e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0])) return;s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear));
    }, _clearDate: function _clearDate(t) {
      var n = e(t);this._selectDate(n, "");
    }, _selectDate: function _selectDate(t, n) {
      var r,
          i = e(t),
          s = this._getInst(i[0]);n = n != null ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], typeof s.input[0] != "object" && s.input.focus(), this._lastInput = null);
    }, _updateAlternate: function _updateAlternate(t) {
      var n,
          r,
          i,
          s = this._get(t, "altField");s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function () {
        e(this).val(i);
      }));
    }, noWeekends: function noWeekends(e) {
      var t = e.getDay();return [t > 0 && t < 6, ""];
    }, iso8601Week: function iso8601Week(e) {
      var t,
          n = new Date(e.getTime());return (n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 86400000) / 7) + 1);
    }, parseDate: function parseDate(t, n, r) {
      if (t == null || n == null) throw "Invalid arguments";n = typeof n == "object" ? n.toString() : n + "";if (n === "") return null;var i,
          s,
          o,
          u = 0,
          a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          f = typeof a != "string" ? a : new Date().getFullYear() % 100 + parseInt(a, 10),
          l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
          c = (r ? r.dayNames : null) || this._defaults.dayNames,
          h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
          p = (r ? r.monthNames : null) || this._defaults.monthNames,
          d = -1,
          v = -1,
          m = -1,
          g = -1,
          y = !1,
          b,
          w = function w(e) {
        var n = i + 1 < t.length && t.charAt(i + 1) === e;return (n && i++, n);
      },
          E = function E(e) {
        var t = w(e),
            r = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2,
            i = new RegExp("^\\d{1," + r + "}"),
            s = n.substring(u).match(i);if (!s) throw "Missing number at position " + u;return (u += s[0].length, parseInt(s[0], 10));
      },
          S = function S(t, r, i) {
        var s = -1,
            o = e.map(w(t) ? i : r, function (e, t) {
          return [[t, e]];
        }).sort(function (e, t) {
          return -(e[1].length - t[1].length);
        });e.each(o, function (e, t) {
          var r = t[1];if (n.substr(u, r.length).toLowerCase() === r.toLowerCase()) return (s = t[0], u += r.length, !1);
        });if (s !== -1) return s + 1;throw "Unknown name at position " + u;
      },
          x = function x() {
        if (n.charAt(u) !== t.charAt(i)) throw "Unexpected literal at position " + u;u++;
      };for (i = 0; i < t.length; i++) if (y) t.charAt(i) === "'" && !w("'") ? y = !1 : x();else switch (t.charAt(i)) {case "d":
          m = E("d");break;case "D":
          S("D", l, c);break;case "o":
          g = E("o");break;case "m":
          v = E("m");break;case "M":
          v = S("M", h, p);break;case "y":
          d = E("y");break;case "@":
          b = new Date(E("@")), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();break;case "!":
          b = new Date((E("!") - this._ticksTo1970) / 10000), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();break;case "'":
          w("'") ? x() : y = !0;break;default:
          x();}if (u < n.length) {
        o = n.substr(u);if (!/^\s+/.test(o)) throw "Extra/unparsed characters found in date: " + o;
      }d === -1 ? d = new Date().getFullYear() : d < 100 && (d += new Date().getFullYear() - new Date().getFullYear() % 100 + (d <= f ? 0 : -100));if (g > -1) {
        v = 1, m = g;do {
          s = this._getDaysInMonth(d, v - 1);if (m <= s) break;v++, m -= s;
        } while (!0);
      }b = this._daylightSavingAdjust(new Date(d, v - 1, m));if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) throw "Invalid date";return b;
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 10000000, formatDate: function formatDate(e, t, n) {
      if (!t) return "";var r,
          i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
          s = (n ? n.dayNames : null) || this._defaults.dayNames,
          o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
          u = (n ? n.monthNames : null) || this._defaults.monthNames,
          a = function a(t) {
        var n = r + 1 < e.length && e.charAt(r + 1) === t;return (n && r++, n);
      },
          f = function f(e, t, n) {
        var r = "" + t;if (a(e)) while (r.length < n) r = "0" + r;return r;
      },
          l = function l(e, t, n, r) {
        return a(e) ? r[t] : n[t];
      },
          c = "",
          h = !1;if (t) for (r = 0; r < e.length; r++) if (h) e.charAt(r) === "'" && !a("'") ? h = !1 : c += e.charAt(r);else switch (e.charAt(r)) {case "d":
          c += f("d", t.getDate(), 2);break;case "D":
          c += l("D", t.getDay(), i, s);break;case "o":
          c += f("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 86400000), 3);break;case "m":
          c += f("m", t.getMonth() + 1, 2);break;case "M":
          c += l("M", t.getMonth(), o, u);break;case "y":
          c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;break;case "@":
          c += t.getTime();break;case "!":
          c += t.getTime() * 10000 + this._ticksTo1970;break;case "'":
          a("'") ? c += "'" : h = !0;break;default:
          c += e.charAt(r);}return c;
    }, _possibleChars: function _possibleChars(e) {
      var t,
          n = "",
          r = !1,
          i = function i(n) {
        var r = t + 1 < e.length && e.charAt(t + 1) === n;return (r && t++, r);
      };for (t = 0; t < e.length; t++) if (r) e.charAt(t) === "'" && !i("'") ? r = !1 : n += e.charAt(t);else switch (e.charAt(t)) {case "d":case "m":case "y":case "@":
          n += "0123456789";break;case "D":case "M":
          return null;case "'":
          i("'") ? n += "'" : r = !0;break;default:
          n += e.charAt(t);}return n;
    }, _get: function _get(e, n) {
      return e.settings[n] !== t ? e.settings[n] : this._defaults[n];
    }, _setDateFromField: function _setDateFromField(e, t) {
      if (e.input.val() === e.lastVal) return;var n = this._get(e, "dateFormat"),
          r = e.lastVal = e.input ? e.input.val() : null,
          i = this._getDefaultDate(e),
          s = i,
          o = this._getFormatConfig(e);try {
        s = this.parseDate(n, r, o) || i;
      } catch (u) {
        r = t ? "" : r;
      }e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e);
    }, _getDefaultDate: function _getDefaultDate(e) {
      return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date()));
    }, _determineDate: function _determineDate(t, n, r) {
      var i = function i(e) {
        var t = new Date();return (t.setDate(t.getDate() + e), t);
      },
          s = function s(n) {
        try {
          return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t));
        } catch (r) {}var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date(),
            s = i.getFullYear(),
            o = i.getMonth(),
            u = i.getDate(),
            a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
            f = a.exec(n);while (f) {
          switch (f[2] || "d") {case "d":case "D":
              u += parseInt(f[1], 10);break;case "w":case "W":
              u += parseInt(f[1], 10) * 7;break;case "m":case "M":
              o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));break;case "y":case "Y":
              s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));}f = a.exec(n);
        }return new Date(s, o, u);
      },
          o = n == null || n === "" ? r : typeof n == "string" ? s(n) : typeof n == "number" ? isNaN(n) ? r : i(n) : new Date(n.getTime());return (o = o && o.toString() === "Invalid Date" ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o));
    }, _daylightSavingAdjust: function _daylightSavingAdjust(e) {
      return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
    }, _setDate: function _setDate(e, t, n) {
      var r = !t,
          i = e.selectedMonth,
          s = e.selectedYear,
          o = this._restrictMinMax(e, this._determineDate(e, t, new Date()));e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e));
    }, _getDate: function _getDate(e) {
      var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));return t;
    }, _attachHandlers: function _attachHandlers(t) {
      var n = this._get(t, "stepMonths"),
          i = "#" + t.id.replace(/\\\\/g, "\\");t.dpDiv.find("[data-handler]").map(function () {
        var t = { prev: function prev() {
            window["DP_jQuery_" + r].datepicker._adjustDate(i, -n, "M");
          }, next: function next() {
            window["DP_jQuery_" + r].datepicker._adjustDate(i, +n, "M");
          }, hide: function hide() {
            window["DP_jQuery_" + r].datepicker._hideDatepicker();
          }, today: function today() {
            window["DP_jQuery_" + r].datepicker._gotoToday(i);
          }, selectDay: function selectDay() {
            return (window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1);
          }, selectMonth: function selectMonth() {
            return (window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"), !1);
          }, selectYear: function selectYear() {
            return (window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"), !1);
          } };e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
      });
    }, _generateHTML: function _generateHTML(e) {
      var t,
          n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m,
          g,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N,
          C,
          k,
          L,
          A,
          O,
          M,
          _,
          D,
          P,
          H,
          B,
          j,
          F,
          I,
          q = new Date(),
          R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
          U = this._get(e, "isRTL"),
          z = this._get(e, "showButtonPanel"),
          W = this._get(e, "hideIfNoPrevNext"),
          X = this._get(e, "navigationAsDateFormat"),
          V = this._getNumberOfMonths(e),
          $ = this._get(e, "showCurrentAtPos"),
          J = this._get(e, "stepMonths"),
          K = V[0] !== 1 || V[1] !== 1,
          Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
          G = this._getMinMaxDate(e, "min"),
          Y = this._getMinMaxDate(e, "max"),
          Z = e.drawMonth - $,
          et = e.drawYear;Z < 0 && (Z += 12, et--);if (Y) {
        t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && t < G ? G : t;while (this._daylightSavingAdjust(new Date(et, Z, 1)) > t) Z--, Z < 0 && (Z = 11, et--);
      }e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", E;for (S = 0; S < V[0]; S++) {
        x = "", this.maxRows = 4;for (T = 0; T < V[1]; T++) {
          N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "";if (K) {
            k += "<div class='ui-datepicker-group";if (V[1] > 1) switch (T) {case 0:
                k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");break;case V[1] - 1:
                k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");break;default:
                k += " ui-datepicker-group-middle", C = "";}k += "'>";
          }k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && S === 0 ? U ? s : r : "") + (/all|right/.test(C) && S === 0 ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";for (E = 0; E < 7; E++) A = (E + l) % 7, L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M));for (H = 0; H < D; H++) {
            k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "";for (E = 0; E < 7; E++) j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && P < G || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!F || g) && j[2] ? " title='" + j[2].replace(/'/g, "&#39;") + "'" : "") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);k += B + "</tr>";
          }Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k;
        }w += x;
      }return (w += f, e._keyEvent = !1, w);
    }, _generateMonthYearHeader: function _generateMonthYearHeader(e, t, n, r, i, s, o, u) {
      var a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m = this._get(e, "changeMonth"),
          g = this._get(e, "changeYear"),
          y = this._get(e, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          w = "";if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";else {
        a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for (l = 0; l < 12; l++) (!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");w += "</select>";
      }y || (b += w + (s || !m || !g ? "&#xa0;" : ""));if (!e.yearshtml) {
        e.yearshtml = "";if (s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";else {
          c = this._get(e, "yearRange").split(":"), h = new Date().getFullYear(), p = function (e) {
            var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);return isNaN(t) ? h : t;
          }, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for (; d <= v; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null;
        }
      }return (b += this._get(e, "yearSuffix"), y && (b += (s || !m || !g ? "&#xa0;" : "") + w), b += "</div>", b);
    }, _adjustInstDate: function _adjustInstDate(e, t, n) {
      var r = e.drawYear + (n === "Y" ? t : 0),
          i = e.drawMonth + (n === "M" ? t : 0),
          s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n === "D" ? t : 0),
          o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n === "M" || n === "Y") && this._notifyChange(e);
    }, _restrictMinMax: function _restrictMinMax(e, t) {
      var n = this._getMinMaxDate(e, "min"),
          r = this._getMinMaxDate(e, "max"),
          i = n && t < n ? n : t;return r && i > r ? r : i;
    }, _notifyChange: function _notifyChange(e) {
      var t = this._get(e, "onChangeMonthYear");t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]);
    }, _getNumberOfMonths: function _getNumberOfMonths(e) {
      var t = this._get(e, "numberOfMonths");return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t;
    }, _getMinMaxDate: function _getMinMaxDate(e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null);
    }, _getDaysInMonth: function _getDaysInMonth(e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
    }, _getFirstDayOfMonth: function _getFirstDayOfMonth(e, t) {
      return new Date(e, t, 1).getDay();
    }, _canAdjustMonth: function _canAdjustMonth(e, t, n, r) {
      var i = this._getNumberOfMonths(e),
          s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));return (t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s));
    }, _isInRange: function _isInRange(e, t) {
      var n,
          r,
          i = this._getMinMaxDate(e, "min"),
          s = this._getMinMaxDate(e, "max"),
          o = null,
          u = null,
          a = this._get(e, "yearRange");return (a && (n = a.split(":"), r = new Date().getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u));
    }, _getFormatConfig: function _getFormatConfig(e) {
      var t = this._get(e, "shortYearCutoff");return (t = typeof t != "string" ? t : new Date().getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") });
    }, _formatDate: function _formatDate(e, t, n, r) {
      t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e));
    } }), e.fn.datepicker = function (t) {
    if (!this.length) return this;e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), e("#" + e.datepicker._mainDivId).length === 0 && e("body").append(e.datepicker.dpDiv);var n = Array.prototype.slice.call(arguments, 1);return typeof t != "string" || t !== "isDisabled" && t !== "getDate" && t !== "widget" ? t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function () {
      typeof t == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t);
    }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n));
  }, e.datepicker = new s(), e.datepicker.initialized = !1, e.datepicker.uuid = new Date().getTime(), e.datepicker.version = "1.10.1", window["DP_jQuery_" + r] = e;
})(jQuery);(function (e, t) {
  var n = { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
      r = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 };e.widget("ui.dialog", { version: "1.10.1", options: { appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function using(t) {
          var n = e(this).css(t).offset().top;n < 0 && e(this).css("top", t.top - n);
        } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, _create: function _create() {
      this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1;
    }, _init: function _init() {
      this.options.autoOpen && this.open();
    }, _appendTo: function _appendTo() {
      var t = this.options.appendTo;return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0);
    }, _destroy: function _destroy() {
      var e,
          t = this.originalPosition;this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element);
    }, widget: function widget() {
      return this.uiDialog;
    }, disable: e.noop, enable: e.noop, close: function close(t) {
      var n = this;if (!this._isOpen || this._trigger("beforeClose", t) === !1) return;this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || e(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
        n._trigger("close", t);
      });
    }, isOpen: function isOpen() {
      return this._isOpen;
    }, moveToTop: function moveToTop() {
      this._moveToTop();
    }, _moveToTop: function _moveToTop(e, t) {
      var n = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return (n && !t && this._trigger("focus", e), n);
    }, open: function open() {
      var t = this;if (this._isOpen) {
        this._moveToTop() && this._focusTabbable();return;
      }this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
        t._focusTabbable(), t._trigger("focus");
      }), this._trigger("open");
    }, _focusTabbable: function _focusTabbable() {
      var e = this.element.find("[autofocus]");e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus();
    }, _keepFocus: function _keepFocus(t) {
      function n() {
        var t = this.document[0].activeElement,
            n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);n || this._focusTabbable();
      }t.preventDefault(), n.call(this), this._delay(n);
    }, _createWrapper: function _createWrapper() {
      this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._on(this.uiDialog, { keydown: function keydown(t) {
          if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) {
            t.preventDefault(), this.close(t);return;
          }if (t.keyCode !== e.ui.keyCode.TAB) return;var n = this.uiDialog.find(":tabbable"),
              r = n.filter(":first"),
              i = n.filter(":last");t.target !== i[0] && t.target !== this.uiDialog[0] || !!t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (i.focus(1), t.preventDefault()) : (r.focus(1), t.preventDefault());
        }, mousedown: function mousedown(e) {
          this._moveToTop(e) && this._focusTabbable();
        } }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
    }, _createTitlebar: function _createTitlebar() {
      var t;this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, { mousedown: function mousedown(t) {
          e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus();
        } }), this.uiDialogTitlebarClose = e("<button></button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, { click: function click(e) {
          e.preventDefault(), this.close(e);
        } }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
    }, _title: function _title(e) {
      this.options.title || e.html("&#160;"), e.text(this.options.title);
    }, _createButtonPane: function _createButtonPane() {
      this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons();
    }, _createButtons: function _createButtons() {
      var t = this,
          n = this.options.buttons;this.uiDialogButtonPane.remove(), this.uiButtonSet.empty();if (e.isEmptyObject(n) || e.isArray(n) && !n.length) {
        this.uiDialog.removeClass("ui-dialog-buttons");return;
      }e.each(n, function (n, r) {
        var i, s;r = e.isFunction(r) ? { click: r, text: n } : r, r = e.extend({ type: "button" }, r), i = r.click, r.click = function () {
          i.apply(t.element[0], arguments);
        }, s = { icons: r.icons, text: r.showText }, delete r.icons, delete r.showText, e("<button></button>", r).button(s).appendTo(t.uiButtonSet);
      }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog);
    }, _makeDraggable: function _makeDraggable() {
      function r(e) {
        return { position: e.position, offset: e.offset };
      }var t = this,
          n = this.options;this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function start(n, i) {
          e(this).addClass("ui-dialog-dragging"), t._blockFrames(), t._trigger("dragStart", n, r(i));
        }, drag: function drag(e, n) {
          t._trigger("drag", e, r(n));
        }, stop: function stop(i, s) {
          n.position = [s.position.left - t.document.scrollLeft(), s.position.top - t.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), t._unblockFrames(), t._trigger("dragStop", i, r(s));
        } });
    }, _makeResizable: function _makeResizable() {
      function o(e) {
        return { originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size };
      }var t = this,
          n = this.options,
          r = n.resizable,
          i = this.uiDialog.css("position"),
          s = typeof r == "string" ? r : "n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: n.maxWidth, maxHeight: n.maxHeight, minWidth: n.minWidth, minHeight: this._minHeight(), handles: s, start: function start(n, r) {
          e(this).addClass("ui-dialog-resizing"), t._blockFrames(), t._trigger("resizeStart", n, o(r));
        }, resize: function resize(e, n) {
          t._trigger("resize", e, o(n));
        }, stop: function stop(r, i) {
          n.height = e(this).height(), n.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), t._unblockFrames(), t._trigger("resizeStop", r, o(i));
        } }).css("position", i);
    }, _minHeight: function _minHeight() {
      var e = this.options;return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height);
    }, _position: function _position() {
      var e = this.uiDialog.is(":visible");e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide();
    }, _setOptions: function _setOptions(t) {
      var i = this,
          s = !1,
          o = {};e.each(t, function (e, t) {
        i._setOption(e, t), e in n && (s = !0), e in r && (o[e] = t);
      }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o);
    }, _setOption: function _setOption(e, t) {
      var n,
          r,
          i = this.uiDialog;e === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t);if (e === "disabled") return;this._super(e, t), e === "appendTo" && this.uiDialog.appendTo(this._appendTo()), e === "buttons" && this._createButtons(), e === "closeText" && this.uiDialogTitlebarClose.button({ label: "" + t }), e === "draggable" && (n = i.is(":data(ui-draggable)"), n && !t && i.draggable("destroy"), !n && t && this._makeDraggable()), e === "position" && this._position(), e === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), !r && t !== !1 && this._makeResizable()), e === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
    }, _size: function _size() {
      var e,
          t,
          n,
          r = this.options;this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), r.minWidth > r.width && (r.width = r.minWidth), e = this.uiDialog.css({ height: "auto", width: r.width }).outerHeight(), t = Math.max(0, r.minHeight - e), n = typeof r.maxHeight == "number" ? Math.max(0, r.maxHeight - e) : "none", r.height === "auto" ? this.element.css({ minHeight: t, maxHeight: n, height: "auto" }) : this.element.height(Math.max(0, r.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    }, _blockFrames: function _blockFrames() {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var t = e(this);return e("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0];
      });
    }, _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _createOverlay: function _createOverlay() {
      if (!this.options.modal) return;e.ui.dialog.overlayInstances || this._delay(function () {
        e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (t) {
          !e(t.target).closest(".ui-dialog").length && !e(t.target).closest(".ui-datepicker").length && (t.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable());
        });
      }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, { mousedown: "_keepFocus" }), e.ui.dialog.overlayInstances++;
    }, _destroyOverlay: function _destroyOverlay() {
      if (!this.options.modal) return;this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null);
    } }), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, { _position: function _position() {
      var t = this.options.position,
          n = [],
          r = [0, 0],
          i;if (t) {
        if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function (e, t) {
          +n[e] === n[e] && (r[e] = n[e], n[e] = t);
        }), t = { my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]), at: n.join(" ") };t = e.extend({}, e.ui.dialog.prototype.options.position, t);
      } else t = e.ui.dialog.prototype.options.position;i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide();
    } });
})(jQuery);(function (e, t) {
  e.widget("ui.menu", { version: "1.10.1", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-carat-1-e" }, menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function _create() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }).bind("click" + this.eventNamespace, e.proxy(function (e) {
        this.options.disabled && e.preventDefault();
      }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({ "mousedown .ui-menu-item > a": function mousedownUiMenuItemA(e) {
          e.preventDefault();
        }, "click .ui-state-disabled > a": function clickUiStateDisabledA(e) {
          e.preventDefault();
        }, "click .ui-menu-item:has(a)": function clickUiMenuItemHasA(t) {
          var n = e(t.target).closest(".ui-menu-item");!this.mouseHandled && n.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(t), n.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)));
        }, "mouseenter .ui-menu-item": function mouseenterUiMenuItem(t) {
          var n = e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n);
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function focus(e, t) {
          var n = this.active || this.element.children(".ui-menu-item").eq(0);t || this.focus(e, n);
        }, blur: function blur(t) {
          this._delay(function () {
            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
          });
        }, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function click(t) {
          e(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1;
        } });
    }, _destroy: function _destroy() {
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
        var t = e(this);t.data("ui-menu-submenu-carat") && t.remove();
      }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
    }, _keydown: function _keydown(t) {
      function a(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }var n,
          r,
          i,
          s,
          o,
          u = !0;switch (t.keyCode) {case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);break;case e.ui.keyCode.HOME:
          this._move("first", "first", t);break;case e.ui.keyCode.END:
          this._move("last", "last", t);break;case e.ui.keyCode.UP:
          this.previous(t);break;case e.ui.keyCode.DOWN:
          this.next(t);break;case e.ui.keyCode.LEFT:
          this.collapse(t);break;case e.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:
          this._activate(t);break;case e.ui.keyCode.ESCAPE:
          this.collapse(t);break;default:
          u = !1, r = this.previousFilter || "", i = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), i === r ? s = !0 : i = r + i, o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
            return o.test(e(this).children("a").text());
          }), n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (i = String.fromCharCode(t.keyCode), o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
            return o.test(e(this).children("a").text());
          })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = i, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1000)) : delete this.previousFilter) : delete this.previousFilter;}u && t.preventDefault();
    }, _activate: function _activate(e) {
      this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e));
    }, refresh: function refresh() {
      var t,
          n = this.options.icons.submenu,
          r = this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () {
        var t = e(this),
            r = t.prev("a"),
            i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);r.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", r.attr("id"));
      }), t = r.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({ tabIndex: -1, role: this._itemRole() }), t.children(":not(.ui-menu-item)").each(function () {
        var t = e(this);/[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider");
      }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
    }, _itemRole: function _itemRole() {
      return ({ menu: "menuitem", listbox: "option" })[this.options.role];
    }, _setOption: function _setOption(e, t) {
      e === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(e, t);
    }, focus: function focus(e, t) {
      var n, r;this.blur(e, e && e.type === "focus"), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && e.type === "keydown" ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), n = t.children(".ui-menu"), n.length && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, { item: t });
    }, _scrollIntoView: function _scrollIntoView(t) {
      var n, r, i, s, o, u;this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.height(), i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u));
    }, blur: function blur(e, t) {
      t || clearTimeout(this.timer);if (!this.active) return;this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, { item: this.active });
    }, _startOpening: function _startOpening(e) {
      clearTimeout(this.timer);if (e.attr("aria-hidden") !== "true") return;this.timer = this._delay(function () {
        this._close(), this._open(e);
      }, this.delay);
    }, _open: function _open(t) {
      var n = e.extend({ of: this.active }, this.options.position);clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n);
    }, collapseAll: function collapseAll(t, n) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r;
      }, this.delay);
    }, _close: function _close(e) {
      e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active");
    }, collapse: function collapse(e) {
      var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);t && t.length && (this._close(), this.focus(e, t));
    }, expand: function expand(e) {
      var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();t && t.length && (this._open(t.parent()), this._delay(function () {
        this.focus(e, t);
      }));
    }, next: function next(e) {
      this._move("next", "first", e);
    }, previous: function previous(e) {
      this._move("prev", "last", e);
    }, isFirstItem: function isFirstItem() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    }, isLastItem: function isLastItem() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    }, _move: function _move(e, t, n) {
      var r;this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));if (!r || !r.length || !this.active) r = this.activeMenu.children(".ui-menu-item")[t]();this.focus(n, r);
    }, nextPage: function nextPage(t) {
      var n, r, i;if (!this.active) {
        this.next(t);return;
      }if (this.isLastItem()) return;this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return (n = e(this), n.offset().top - r - i < 0);
      }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]());
    }, previousPage: function previousPage(t) {
      var n, r, i;if (!this.active) {
        this.next(t);return;
      }if (this.isFirstItem()) return;this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return (n = e(this), n.offset().top - r + i > 0);
      }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first());
    }, _hasScroll: function _hasScroll() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    }, select: function select(t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");var n = { item: this.active };this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n);
    } });
})(jQuery);(function (e, t) {
  e.widget("ui.progressbar", { version: "1.10.1", options: { max: 100, value: 0, change: null, complete: null }, min: 0, _create: function _create() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue();
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove();
    }, value: function value(e) {
      if (e === t) return this.options.value;this.options.value = this._constrainedValue(e), this._refreshValue();
    }, _constrainedValue: function _constrainedValue(e) {
      return (e === t && (e = this.options.value), this.indeterminate = e === !1, typeof e != "number" && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e)));
    }, _setOptions: function _setOptions(e) {
      var t = e.value;delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue();
    }, _setOption: function _setOption(e, t) {
      e === "max" && (t = Math.max(this.min, t)), this._super(e, t);
    }, _percentage: function _percentage() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, _refreshValue: function _refreshValue() {
      var t = this.options.value,
          n = this._percentage();this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(n.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete");
    } });
})(jQuery);(function (e, t) {
  var n = 5;e.widget("ui.slider", e.ui.mouse, { version: "1.10.1", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, _create: function _create() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
    }, _refresh: function _refresh() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    }, _createHandles: function _createHandles() {
      var t,
          n,
          r = this.options,
          i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
          s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
          o = [];n = r.values && r.values.length || 1, i.length > n && (i.slice(n).remove(), i = i.slice(0, n));for (t = i.length; t < n; t++) o.push(s);this.handles = i.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
        e(this).data("ui-slider-handle-index", t);
      });
    }, _createRange: function _createRange() {
      var t = this.options,
          n = "";t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), !this.range || !this.range.length ? (this.range = e("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all") : this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }), this.range.addClass(n + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : this.range = e([]);
    }, _setupEvents: function _setupEvents() {
      var e = this.handles.add(this.range).filter("a");this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e);
    }, _destroy: function _destroy() {
      this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
    }, _mouseCapture: function _mouseCapture(t) {
      var n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l = this,
          c = this.options;return c.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), n = { x: t.pageX, y: t.pageY }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
        var n = Math.abs(r - l.values(t));if (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min)) i = n, s = e(this), o = t;
      }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = f ? { left: 0, top: 0 } : { left: t.pageX - a.left - s.width() / 2, top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0));
    }, _mouseStart: function _mouseStart() {
      return !0;
    }, _mouseDrag: function _mouseDrag(e) {
      var t = { x: e.pageX, y: e.pageY },
          n = this._normValueFromMouse(t);return (this._slide(e, this._handleIndex, n), !1);
    }, _mouseStop: function _mouseStop(e) {
      return (this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1);
    }, _detectOrientation: function _detectOrientation() {
      this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal";
    }, _normValueFromMouse: function _normValueFromMouse(e) {
      var t, n, r, i, s;return (this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s));
    }, _start: function _start(e, t) {
      var n = { handle: this.handles[t], value: this.value() };return (this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n));
    }, _slide: function _slide(e, t, n) {
      var r, i, s;this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, { handle: this.handles[t], value: n, values: i }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, { handle: this.handles[t], value: n }), s !== !1 && this.value(n));
    }, _stop: function _stop(e, t) {
      var n = { handle: this.handles[t], value: this.value() };this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n);
    }, _change: function _change(e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var n = { handle: this.handles[t], value: this.value() };this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n);
      }
    }, value: function value(e) {
      if (arguments.length) {
        this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);return;
      }return this._value();
    }, values: function values(t, n) {
      var r, i, s;if (arguments.length > 1) {
        this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);return;
      }if (!arguments.length) return this._values();if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();r = this.options.values, i = arguments[0];for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);this._refreshValue();
    }, _setOption: function _setOption(t, n) {
      var r,
          i = 0;t === "range" && this.options.range === !0 && (n === "min" ? (this.options.value = this._values(0), this.options.values = null) : n === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);switch (t) {case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();break;case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;break;case "values":
          this._animateOff = !0, this._refreshValue();for (r = 0; r < i; r += 1) this._change(null, r);this._animateOff = !1;break;case "min":case "max":
          this._animateOff = !0, this._refreshValue(), this._animateOff = !1;break;case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;}
    }, _value: function _value() {
      var e = this.options.value;return (e = this._trimAlignValue(e), e);
    }, _values: function _values(e) {
      var t, n, r;if (arguments.length) return (t = this.options.values[e], t = this._trimAlignValue(t), t);if (this.options.values && this.options.values.length) {
        n = this.options.values.slice();for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);return n;
      }return [];
    }, _trimAlignValue: function _trimAlignValue(e) {
      if (e <= this._valueMin()) return this._valueMin();if (e >= this._valueMax()) return this._valueMax();var t = this.options.step > 0 ? this.options.step : 1,
          n = (e - this._valueMin()) % t,
          r = e - n;return (Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5)));
    }, _valueMin: function _valueMin() {
      return this.options.min;
    }, _valueMax: function _valueMax() {
      return this.options.max;
    }, _refreshValue: function _refreshValue() {
      var t,
          n,
          r,
          i,
          s,
          o = this.options.range,
          u = this.options,
          a = this,
          f = this._animateOff ? !1 : u.animate,
          l = {};this.options.values && this.options.values.length ? this.handles.each(function (r) {
        n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({ left: n + "%" }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({ width: n - t + "%" }, { queue: !1, duration: u.animate })) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({ bottom: n + "%" }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({ height: n - t + "%" }, { queue: !1, duration: u.animate }))), t = n;
      }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({ width: n + "%" }, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({ width: 100 - n + "%" }, { queue: !1, duration: u.animate }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({ height: n + "%" }, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({ height: 100 - n + "%" }, { queue: !1, duration: u.animate }));
    }, _handleEvents: { keydown: function keydown(t) {
        var r,
            i,
            s,
            o,
            u = e(t.target).data("ui-slider-handle-index");switch (t.keyCode) {case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:
            t.preventDefault();if (!this._keySliding) {
              this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);if (r === !1) return;
            }}o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();switch (t.keyCode) {case e.ui.keyCode.HOME:
            s = this._valueMin();break;case e.ui.keyCode.END:
            s = this._valueMax();break;case e.ui.keyCode.PAGE_UP:
            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);break;case e.ui.keyCode.PAGE_DOWN:
            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:
            if (i === this._valueMax()) return;s = this._trimAlignValue(i + o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:
            if (i === this._valueMin()) return;s = this._trimAlignValue(i - o);}this._slide(t, u, s);
      }, click: function click(e) {
        e.preventDefault();
      }, keyup: function keyup(t) {
        var n = e(t.target).data("ui-slider-handle-index");this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"));
      } } });
})(jQuery);(function (e) {
  function t(e) {
    return function () {
      var t = this.element.val();e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change");
    };
  }e.widget("ui.spinner", { version: "1.10.1", defaultElement: "<input>", widgetEventPrefix: "spin", options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function _create() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        } });
    }, _getCreateOptions: function _getCreateOptions() {
      var t = {},
          n = this.element;return (e.each(["min", "max", "step"], function (e, r) {
        var i = n.attr(r);i !== undefined && i.length && (t[r] = i);
      }), t);
    }, _events: { keydown: function keydown(e) {
        this._start(e) && this._keydown(e) && e.preventDefault();
      }, keyup: "_stop", focus: function focus() {
        this.previous = this.element.val();
      }, blur: function blur(e) {
        if (this.cancelBlur) {
          delete this.cancelBlur;return;
        }this._refresh(), this.previous !== this.element.val() && this._trigger("change", e);
      }, mousewheel: function mousewheel(e, t) {
        if (!t) return;if (!this.spinning && !this._start(e)) return !1;this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
          this.spinning && this._stop(e);
        }, 100), e.preventDefault();
      }, "mousedown .ui-spinner-button": function mousedownUiSpinnerButton(t) {
        function r() {
          var e = this.element[0] === this.document[0].activeElement;e || (this.element.focus(), this.previous = n, this._delay(function () {
            this.previous = n;
          }));
        }var n;n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function () {
          delete this.cancelBlur, r.call(this);
        });if (this._start(t) === !1) return;this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
      }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function mouseenterUiSpinnerButton(t) {
        if (!e(t.currentTarget).hasClass("ui-state-active")) return;if (this._start(t) === !1) return !1;this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
      }, "mouseleave .ui-spinner-button": "_stop" }, _draw: function _draw() {
      var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(e.height() * 0.5) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable();
    }, _keydown: function _keydown(t) {
      var n = this.options,
          r = e.ui.keyCode;switch (t.keyCode) {case r.UP:
          return (this._repeat(null, 1, t), !0);case r.DOWN:
          return (this._repeat(null, -1, t), !0);case r.PAGE_UP:
          return (this._repeat(null, n.page, t), !0);case r.PAGE_DOWN:
          return (this._repeat(null, -n.page, t), !0);}return !1;
    }, _uiSpinnerHtml: function _uiSpinnerHtml() {
      return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
    }, _buttonHtml: function _buttonHtml() {
      return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>";
    }, _start: function _start(e) {
      return !this.spinning && this._trigger("start", e) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0);
    }, _repeat: function _repeat(e, t, n) {
      e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
        this._repeat(40, t, n);
      }, e), this._spin(t * this.options.step, n);
    }, _spin: function _spin(e, t) {
      var n = this.value() || 0;this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter));if (!this.spinning || this._trigger("spin", t, { value: n }) !== !1) this._value(n), this.counter++;
    }, _increment: function _increment(t) {
      var n = this.options.incremental;return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 50000 - t * t / 500 + 17 * t / 200 + 1) : 1;
    }, _precision: function _precision() {
      var e = this._precisionOf(this.options.step);return (this.options.min !== null && (e = Math.max(e, this._precisionOf(this.options.min))), e);
    }, _precisionOf: function _precisionOf(e) {
      var t = e.toString(),
          n = t.indexOf(".");return n === -1 ? 0 : t.length - n - 1;
    }, _adjustValue: function _adjustValue(e) {
      var t,
          n,
          r = this.options;return (t = r.min !== null ? r.min : 0, n = e - t, n = Math.round(n / r.step) * r.step, e = t + n, e = parseFloat(e.toFixed(this._precision())), r.max !== null && e > r.max ? r.max : r.min !== null && e < r.min ? r.min : e);
    }, _stop: function _stop(e) {
      if (!this.spinning) return;clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e);
    }, _setOption: function _setOption(e, t) {
      if (e === "culture" || e === "numberFormat") {
        var n = this._parse(this.element.val());this.options[e] = t, this.element.val(this._format(n));return;
      }(e === "max" || e === "min" || e === "step") && typeof t == "string" && (t = this._parse(t)), e === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), e === "disabled" && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")));
    }, _setOptions: t(function (e) {
      this._super(e), this._value(this.element.val());
    }), _parse: function _parse(e) {
      return (typeof e == "string" && e !== "" && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), e === "" || isNaN(e) ? null : e);
    }, _format: function _format(e) {
      return e === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e;
    }, _refresh: function _refresh() {
      this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) });
    }, _value: function _value(e, t) {
      var n;e !== "" && (n = this._parse(e), n !== null && (t || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh();
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    }, stepUp: t(function (e) {
      this._stepUp(e);
    }), _stepUp: function _stepUp(e) {
      this._start() && (this._spin((e || 1) * this.options.step), this._stop());
    }, stepDown: t(function (e) {
      this._stepDown(e);
    }), _stepDown: function _stepDown(e) {
      this._start() && (this._spin((e || 1) * -this.options.step), this._stop());
    }, pageUp: t(function (e) {
      this._stepUp((e || 1) * this.options.page);
    }), pageDown: t(function (e) {
      this._stepDown((e || 1) * this.options.page);
    }), value: function value(e) {
      if (!arguments.length) return this._parse(this.element.val());t(this._value).call(this, e);
    }, widget: function widget() {
      return this.uiSpinner;
    } });
})(jQuery);(function (e, t) {
  function i() {
    return ++n;
  }function s(e) {
    return e.hash.length > 1 && decodeURIComponent(e.href.replace(r, "")) === decodeURIComponent(location.href.replace(r, ""));
  }var n = 0,
      r = /#.*$/;e.widget("ui.tabs", { version: "1.10.1", delay: 300, options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _create: function _create() {
      var t = this,
          n = this.options;this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (t) {
        e(this).is(".ui-state-disabled") && t.preventDefault();
      }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
        e(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this._processTabs(), n.active = this._initialActive(), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
        return t.tabs.index(e);
      }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(n.active) : this.active = e(), this._refresh(), this.active.length && this.load(n.active);
    }, _initialActive: function _initialActive() {
      var t = this.options.active,
          n = this.options.collapsible,
          r = location.hash.substring(1);if (t === null) {
        r && this.tabs.each(function (n, i) {
          if (e(i).attr("aria-controls") === r) return (t = n, !1);
        }), t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active")));if (t === null || t === -1) t = this.tabs.length ? 0 : !1;
      }return (t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = n ? !1 : 0)), !n && t === !1 && this.anchors.length && (t = 0), t);
    }, _getCreateEventData: function _getCreateEventData() {
      return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e() };
    }, _tabKeydown: function _tabKeydown(t) {
      var n = e(this.document[0].activeElement).closest("li"),
          r = this.tabs.index(n),
          i = !0;if (this._handlePageNav(t)) return;switch (t.keyCode) {case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:
          r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:
          i = !1, r--;break;case e.ui.keyCode.END:
          r = this.anchors.length - 1;break;case e.ui.keyCode.HOME:
          r = 0;break;case e.ui.keyCode.SPACE:
          t.preventDefault(), clearTimeout(this.activating), this._activate(r);return;case e.ui.keyCode.ENTER:
          t.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r);return;default:
          return;}t.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, i), t.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function () {
        this.option("active", r);
      }, this.delay));
    }, _panelKeydown: function _panelKeydown(t) {
      if (this._handlePageNav(t)) return;t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus());
    }, _handlePageNav: function _handlePageNav(t) {
      if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP) return (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0);if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN) return (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0);
    }, _findNextTab: function _findNextTab(t, n) {
      function i() {
        return (t > r && (t = 0), t < 0 && (t = r), t);
      }var r = this.tabs.length - 1;while (e.inArray(i(), this.options.disabled) !== -1) t = n ? t + 1 : t - 1;return t;
    }, _focusNextTab: function _focusNextTab(e, t) {
      return (e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e);
    }, _setOption: function _setOption(e, t) {
      if (e === "active") {
        this._activate(t);return;
      }if (e === "disabled") {
        this._setupDisabled(t);return;
      }this._super(e, t), e === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), !t && this.options.active === !1 && this._activate(0)), e === "event" && this._setupEvents(t), e === "heightStyle" && this._setupHeightStyle(t);
    }, _tabId: function _tabId(e) {
      return e.attr("aria-controls") || "ui-tabs-" + i();
    }, _sanitizeSelector: function _sanitizeSelector(e) {
      return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    }, refresh: function refresh() {
      var t = this.options,
          n = this.tablist.children(":has(a[href])");t.disabled = e.map(n.filter(".ui-state-disabled"), function (e) {
        return n.index(e);
      }), this._processTabs(), t.active === !1 || !this.anchors.length ? (t.active = !1, this.active = e()) : this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active), this._refresh();
    }, _refresh: function _refresh() {
      this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-expanded": "false", "aria-hidden": "true" }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-expanded": "true", "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0);
    }, _processTabs: function _processTabs() {
      var t = this;this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 }), this.anchors = this.tabs.map(function () {
        return e("a", this)[0];
      }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }), this.panels = e(), this.anchors.each(function (n, r) {
        var i,
            o,
            u,
            a = e(r).uniqueId().attr("id"),
            f = e(r).closest("li"),
            l = f.attr("aria-controls");s(r) ? (i = r.hash, o = t.element.find(t._sanitizeSelector(i))) : (u = t._tabId(f), i = "#" + u, o = t.element.find(i), o.length || (o = t._createPanel(u), o.insertAfter(t.panels[n - 1] || t.tablist)), o.attr("aria-live", "polite")), o.length && (t.panels = t.panels.add(o)), l && f.data("ui-tabs-aria-controls", l), f.attr({ "aria-controls": i.substring(1), "aria-labelledby": a }), o.attr("aria-labelledby", a);
      }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
    }, _getList: function _getList() {
      return this.element.find("ol,ul").eq(0);
    }, _createPanel: function _createPanel(t) {
      return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
    }, _setupDisabled: function _setupDisabled(t) {
      e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);for (var n = 0, r; r = this.tabs[n]; n++) t === !0 || e.inArray(n, t) !== -1 ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled = t;
    }, _setupEvents: function _setupEvents(t) {
      var n = { click: function click(e) {
          e.preventDefault();
        } };t && e.each(t.split(" "), function (e, t) {
        n[t] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, n), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs);
    }, _setupHeightStyle: function _setupHeightStyle(t) {
      var n,
          r = this.element.parent();t === "fill" ? (n = r.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
        var t = e(this),
            r = t.css("position");if (r === "absolute" || r === "fixed") return;n -= t.outerHeight(!0);
      }), this.element.children().not(this.panels).each(function () {
        n -= e(this).outerHeight(!0);
      }), this.panels.each(function () {
        e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()));
      }).css("overflow", "auto")) : t === "auto" && (n = 0, this.panels.each(function () {
        n = Math.max(n, e(this).height("").height());
      }).height(n));
    }, _eventHandler: function _eventHandler(t) {
      var n = this.options,
          r = this.active,
          i = e(t.currentTarget),
          s = i.closest("li"),
          o = s[0] === r[0],
          u = o && n.collapsible,
          a = u ? e() : this._getPanelForTab(s),
          f = r.length ? this._getPanelForTab(r) : e(),
          l = { oldTab: r, oldPanel: f, newTab: u ? e() : s, newPanel: a };t.preventDefault();if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1) return;n.active = u ? !1 : this.tabs.index(s), this.active = o ? e() : s, this.xhr && this.xhr.abort(), !f.length && !a.length && e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l);
    }, _toggle: function _toggle(t, n) {
      function o() {
        r.running = !1, r._trigger("activate", t, n);
      }function u() {
        n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), i.length && r.options.show ? r._show(i, r.options.show, o) : (i.show(), o());
      }var r = this,
          i = n.newPanel,
          s = n.oldPanel;this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function () {
        n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u();
      }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), u()), s.attr({ "aria-expanded": "false", "aria-hidden": "true" }), n.oldTab.attr("aria-selected", "false"), i.length && s.length ? n.oldTab.attr("tabIndex", -1) : i.length && this.tabs.filter(function () {
        return e(this).attr("tabIndex") === 0;
      }).attr("tabIndex", -1), i.attr({ "aria-expanded": "true", "aria-hidden": "false" }), n.newTab.attr({ "aria-selected": "true", tabIndex: 0 });
    }, _activate: function _activate(t) {
      var n,
          r = this._findActive(t);if (r[0] === this.active[0]) return;r.length || (r = this.active), n = r.find(".ui-tabs-anchor")[0], this._eventHandler({ target: n, currentTarget: n, preventDefault: e.noop });
    }, _findActive: function _findActive(t) {
      return t === !1 ? e() : this.tabs.eq(t);
    }, _getIndex: function _getIndex(e) {
      return (typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e);
    }, _destroy: function _destroy() {
      this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
        e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
      }), this.tabs.each(function () {
        var t = e(this),
            n = t.data("ui-tabs-aria-controls");n ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls");
      }), this.panels.show(), this.options.heightStyle !== "content" && this.panels.css("height", "");
    }, enable: function enable(n) {
      var r = this.options.disabled;if (r === !1) return;n === t ? r = !1 : (n = this._getIndex(n), e.isArray(r) ? r = e.map(r, function (e) {
        return e !== n ? e : null;
      }) : r = e.map(this.tabs, function (e, t) {
        return t !== n ? t : null;
      })), this._setupDisabled(r);
    }, disable: function disable(n) {
      var r = this.options.disabled;if (r === !0) return;if (n === t) r = !0;else {
        n = this._getIndex(n);if (e.inArray(n, r) !== -1) return;e.isArray(r) ? r = e.merge([n], r).sort() : r = [n];
      }this._setupDisabled(r);
    }, load: function load(t, n) {
      t = this._getIndex(t);var r = this,
          i = this.tabs.eq(t),
          o = i.find(".ui-tabs-anchor"),
          u = this._getPanelForTab(i),
          a = { tab: i, panel: u };if (s(o[0])) return;this.xhr = e.ajax(this._ajaxSettings(o, n, a)), this.xhr && this.xhr.statusText !== "canceled" && (i.addClass("ui-tabs-loading"), u.attr("aria-busy", "true"), this.xhr.success(function (e) {
        setTimeout(function () {
          u.html(e), r._trigger("load", n, a);
        }, 1);
      }).complete(function (e, t) {
        setTimeout(function () {
          t === "abort" && r.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), u.removeAttr("aria-busy"), e === r.xhr && delete r.xhr;
        }, 1);
      }));
    }, _ajaxSettings: function _ajaxSettings(t, n, r) {
      var i = this;return { url: t.attr("href"), beforeSend: function beforeSend(t, s) {
          return i._trigger("beforeLoad", n, e.extend({ jqXHR: t, ajaxSettings: s }, r));
        } };
    }, _getPanelForTab: function _getPanelForTab(t) {
      var n = e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#" + n));
    } });
})(jQuery);(function (e) {
  function n(t, n) {
    var r = (t.attr("aria-describedby") || "").split(/\s+/);r.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")));
  }function r(t) {
    var n = t.data("ui-tooltip-id"),
        r = (t.attr("aria-describedby") || "").split(/\s+/),
        i = e.inArray(n, r);i !== -1 && r.splice(i, 1), t.removeData("ui-tooltip-id"), r = e.trim(r.join(" ")), r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby");
  }var t = 0;e.widget("ui.tooltip", { version: "1.10.1", options: { content: function content() {
        var t = e(this).attr("title") || "";return e("<a>").text(t).html();
      }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null }, _create: function _create() {
      this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable();
    }, _setOption: function _setOption(t, n) {
      var r = this;if (t === "disabled") {
        this[n ? "_disable" : "_enable"](), this.options[t] = n;return;
      }this._super(t, n), t === "content" && e.each(this.tooltips, function (e, t) {
        r._updateContent(t);
      });
    }, _disable: function _disable() {
      var t = this;e.each(this.tooltips, function (n, r) {
        var i = e.Event("blur");i.target = i.currentTarget = r[0], t.close(i, !0);
      }), this.element.find(this.options.items).addBack().each(function () {
        var t = e(this);t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "");
      });
    }, _enable: function _enable() {
      this.element.find(this.options.items).addBack().each(function () {
        var t = e(this);t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"));
      });
    }, open: function open(t) {
      var n = this,
          r = e(t ? t.target : this.element).closest(this.options.items);if (!r.length || r.data("ui-tooltip-id")) return;r.attr("title") && r.data("ui-tooltip-title", r.attr("title")), r.data("ui-tooltip-open", !0), t && t.type === "mouseover" && r.parents().each(function () {
        var t = e(this),
            r;t.data("ui-tooltip-open") && (r = e.Event("blur"), r.target = r.currentTarget = this, n.close(r, !0)), t.attr("title") && (t.uniqueId(), n.parents[this.id] = { element: this, title: t.attr("title") }, t.attr("title", ""));
      }), this._updateContent(r, t);
    }, _updateContent: function _updateContent(e, t) {
      var n,
          r = this.options.content,
          i = this,
          s = t ? t.type : null;if (typeof r == "string") return this._open(t, e, r);n = r.call(e[0], function (n) {
        if (!e.data("ui-tooltip-open")) return;i._delay(function () {
          t && (t.type = s), this._open(t, e, n);
        });
      }), n && this._open(t, e, n);
    }, _open: function _open(t, r, i) {
      function f(e) {
        a.of = e;if (s.is(":hidden")) return;s.position(a);
      }var s,
          o,
          u,
          a = e.extend({}, this.options.position);if (!i) return;s = this._find(r);if (s.length) {
        s.find(".ui-tooltip-content").html(i);return;
      }r.is("[title]") && (t && t.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title")), s = this._tooltip(r), n(r, s.attr("id")), s.find(".ui-tooltip-content").html(i), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: f }), f(t)) : s.position(e.extend({ of: r }, this.options.position)), s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (u = this.delayedShow = setInterval(function () {
        s.is(":visible") && (f(a.of), clearInterval(u));
      }, e.fx.interval)), this._trigger("open", t, { tooltip: s }), o = { keyup: function keyup(t) {
          if (t.keyCode === e.ui.keyCode.ESCAPE) {
            var n = e.Event(t);n.currentTarget = r[0], this.close(n, !0);
          }
        }, remove: function remove() {
          this._removeTooltip(s);
        } };if (!t || t.type === "mouseover") o.mouseleave = "close";if (!t || t.type === "focusin") o.focusout = "close";this._on(!0, r, o);
    }, close: function close(t) {
      var n = this,
          i = e(t ? t.currentTarget : this.element),
          s = this._find(i);if (this.closing) return;clearInterval(this.delayedShow), i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title")), r(i), s.stop(!0), this._hide(s, this.options.hide, function () {
        n._removeTooltip(e(this));
      }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && e.each(this.parents, function (t, r) {
        e(r.element).attr("title", r.title), delete n.parents[t];
      }), this.closing = !0, this._trigger("close", t, { tooltip: s }), this.closing = !1;
    }, _tooltip: function _tooltip(n) {
      var r = "ui-tooltip-" + t++,
          i = e("<div>").attr({ id: r, role: "tooltip" }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));return (e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[r] = n, i);
    }, _find: function _find(t) {
      var n = t.data("ui-tooltip-id");return n ? e("#" + n) : e();
    }, _removeTooltip: function _removeTooltip(e) {
      e.remove(), delete this.tooltips[e.attr("id")];
    }, _destroy: function _destroy() {
      var t = this;e.each(this.tooltips, function (n, r) {
        var i = e.Event("blur");i.target = i.currentTarget = r[0], t.close(i, !0), e("#" + n).remove(), r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"));
      });
    } });
})(jQuery);jQuery.effects || (function (e, t) {
  var n = "ui-effects-";e.effects = { effect: {} }, (function (e, t) {
    function h(e, t, n) {
      var r = u[t.type] || {};return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~ ~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e);
    }function p(t) {
      var n = s(),
          r = n._rgba = [];return (t = t.toLowerCase(), c(i, function (e, i) {
        var s,
            u = i.re.exec(t),
            a = u && i.parse(u),
            f = i.space || "rgba";if (a) return (s = n[f](a), n[o[f].cache] = s[o[f].cache], r = n._rgba = s._rgba, !1);
      }), r.length ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent), n) : l[t]);
    }function d(e, t, n) {
      return (n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e);
    }var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        i = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function parse(e) {
        return [e[1], e[2], e[3], e[4]];
      } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function parse(e) {
        return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]];
      } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function parse(e) {
        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)];
      } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function parse(e) {
        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)];
      } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function parse(e) {
        return [e[1], e[2] / 100, e[3] / 100, e[4]];
      } }],
        s = e.Color = function (t, n, r, i) {
      return new e.Color.fn.parse(t, n, r, i);
    },
        o = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
        u = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
        a = s.support = {},
        f = e("<p>")[0],
        l,
        c = e.each;f.style.cssText = "background-color:rgba(1,1,1,.5)", a.rgba = f.style.backgroundColor.indexOf("rgba") > -1, c(o, function (e, t) {
      t.cache = "_" + e, t.props.alpha = { idx: 3, type: "percent", def: 1 };
    }), s.fn = e.extend(s.prototype, { parse: function parse(n, r, i, u) {
        if (n === t) return (this._rgba = [null, null, null, null], this);if (n.jquery || n.nodeType) n = e(n).css(r), r = t;var a = this,
            f = e.type(n),
            d = this._rgba = [];r !== t && (n = [n, r, i, u], f = "array");if (f === "string") return this.parse(p(n) || l._default);if (f === "array") return (c(o.rgba.props, function (e, t) {
          d[t.idx] = h(n[t.idx], t);
        }), this);if (f === "object") return (n instanceof s ? c(o, function (e, t) {
          n[t.cache] && (a[t.cache] = n[t.cache].slice());
        }) : c(o, function (t, r) {
          var i = r.cache;c(r.props, function (e, t) {
            if (!a[i] && r.to) {
              if (e === "alpha" || n[e] == null) return;a[i] = r.to(a._rgba);
            }a[i][t.idx] = h(n[e], t, !0);
          }), a[i] && e.inArray(null, a[i].slice(0, 3)) < 0 && (a[i][3] = 1, r.from && (a._rgba = r.from(a[i])));
        }), this);
      }, is: function is(e) {
        var t = s(e),
            n = !0,
            r = this;return (c(o, function (e, i) {
          var s,
              o = t[i.cache];return (o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], c(i.props, function (e, t) {
            if (o[t.idx] != null) return (n = o[t.idx] === s[t.idx], n);
          })), n);
        }), n);
      }, _space: function _space() {
        var e = [],
            t = this;return (c(o, function (n, r) {
          t[r.cache] && e.push(n);
        }), e.pop());
      }, transition: function transition(e, t) {
        var n = s(e),
            r = n._space(),
            i = o[r],
            a = this.alpha() === 0 ? s("transparent") : this,
            f = a[i.cache] || i.to(a._rgba),
            l = f.slice();return (n = n[i.cache], c(i.props, function (e, r) {
          var i = r.idx,
              s = f[i],
              o = n[i],
              a = u[r.type] || {};if (o === null) return;s === null ? l[i] = o : (a.mod && (o - s > a.mod / 2 ? s += a.mod : s - o > a.mod / 2 && (s -= a.mod)), l[i] = h((o - s) * t + s, r));
        }), this[r](l));
      }, blend: function blend(t) {
        if (this._rgba[3] === 1) return this;var n = this._rgba.slice(),
            r = n.pop(),
            i = s(t)._rgba;return s(e.map(n, function (e, t) {
          return (1 - r) * i[t] + r * e;
        }));
      }, toRgbaString: function toRgbaString() {
        var t = "rgba(",
            n = e.map(this._rgba, function (e, t) {
          return e == null ? t > 2 ? 1 : 0 : e;
        });return (n[3] === 1 && (n.pop(), t = "rgb("), t + n.join() + ")");
      }, toHslaString: function toHslaString() {
        var t = "hsla(",
            n = e.map(this.hsla(), function (e, t) {
          return (e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e);
        });return (n[3] === 1 && (n.pop(), t = "hsl("), t + n.join() + ")");
      }, toHexString: function toHexString(t) {
        var n = this._rgba.slice(),
            r = n.pop();return (t && n.push(~ ~(r * 255)), "#" + e.map(n, function (e) {
          return (e = (e || 0).toString(16), e.length === 1 ? "0" + e : e);
        }).join(""));
      }, toString: function toString() {
        return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
      } }), s.fn.parse.prototype = s.fn, o.hsla.to = function (e) {
      if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];var t = e[0] / 255,
          n = e[1] / 255,
          r = e[2] / 255,
          i = e[3],
          s = Math.max(t, n, r),
          o = Math.min(t, n, r),
          u = s - o,
          a = s + o,
          f = a * 0.5,
          l,
          c;return (o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, u === 0 ? c = 0 : f <= 0.5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]);
    }, o.hsla.from = function (e) {
      if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];var t = e[0] / 360,
          n = e[1],
          r = e[2],
          i = e[3],
          s = r <= 0.5 ? r * (1 + n) : r + n - r * n,
          o = 2 * r - s;return [Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i];
    }, c(o, function (n, i) {
      var o = i.props,
          u = i.cache,
          a = i.to,
          f = i.from;s.fn[n] = function (n) {
        a && !this[u] && (this[u] = a(this._rgba));if (n === t) return this[u].slice();var r,
            i = e.type(n),
            l = i === "array" || i === "object" ? n : arguments,
            p = this[u].slice();return (c(o, function (e, t) {
          var n = l[i === "object" ? e : t.idx];n == null && (n = p[t.idx]), p[t.idx] = h(n, t);
        }), f ? (r = s(f(p)), r[u] = p, r) : s(p));
      }, c(o, function (t, i) {
        if (s.fn[t]) return;s.fn[t] = function (s) {
          var o = e.type(s),
              u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : n,
              a = this[u](),
              f = a[i.idx],
              l;return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = e.type(s)), s == null && i.empty ? this : (o === "string" && (l = r.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[i.idx] = s, this[u](a)));
        };
      });
    }), s.hook = function (t) {
      var n = t.split(" ");c(n, function (t, n) {
        e.cssHooks[n] = { set: function set(t, r) {
            var i,
                o,
                u = "";if (r !== "transparent" && (e.type(r) !== "string" || (i = p(r)))) {
              r = s(i || r);if (!a.rgba && r._rgba[3] !== 1) {
                o = n === "backgroundColor" ? t.parentNode : t;while ((u === "" || u === "transparent") && o && o.style) try {
                  u = e.css(o, "backgroundColor"), o = o.parentNode;
                } catch (f) {}r = r.blend(u && u !== "transparent" ? u : "_default");
              }r = r.toRgbaString();
            }try {
              t.style[n] = r;
            } catch (f) {}
          } }, e.fx.step[n] = function (t) {
          t.colorInit || (t.start = s(t.elem, n), t.end = s(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos));
        };
      });
    }, s.hook(n), e.cssHooks.borderColor = { expand: function expand(e) {
        var t = {};return (c(["Top", "Right", "Bottom", "Left"], function (n, r) {
          t["border" + r + "Color"] = e;
        }), t);
      } }, l = e.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" };
  })(jQuery), (function () {
    function i(t) {
      var n,
          r,
          i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
          s = {};if (i && i.length && i[0] && i[i[0]]) {
        r = i.length;while (r--) n = i[r], typeof i[n] == "string" && (s[e.camelCase(n)] = i[n]);
      } else for (n in i) typeof i[n] == "string" && (s[n] = i[n]);return s;
    }function s(t, n) {
      var i = {},
          s,
          o;for (s in n) o = n[s], t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);return i;
    }var n = ["add", "remove", "toggle"],
        r = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, n) {
      e.fx.step[n] = function (e) {
        if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) jQuery.style(e.elem, n, e.end), e.setAttr = !0;
      };
    }), e.fn.addBack || (e.fn.addBack = function (e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
    }), e.effects.animateClass = function (t, r, o, u) {
      var a = e.speed(r, o, u);return this.queue(function () {
        var r = e(this),
            o = r.attr("class") || "",
            u,
            f = a.children ? r.find("*").addBack() : r;f = f.map(function () {
          var t = e(this);return { el: t, start: i(this) };
        }), u = function () {
          e.each(n, function (e, n) {
            t[n] && r[n + "Class"](t[n]);
          });
        }, u(), f = f.map(function () {
          return (this.end = i(this.el[0]), this.diff = s(this.start, this.end), this);
        }), r.attr("class", o), f = f.map(function () {
          var t = this,
              n = e.Deferred(),
              r = e.extend({}, a, { queue: !1, complete: function complete() {
              n.resolve(t);
            } });return (this.el.animate(this.diff, r), n.promise());
        }), e.when.apply(e, f.get()).done(function () {
          u(), e.each(arguments, function () {
            var t = this.el;e.each(this.diff, function (e) {
              t.css(e, "");
            });
          }), a.complete.call(r[0]);
        });
      });
    }, e.fn.extend({ _addClass: e.fn.addClass, addClass: function addClass(t, n, r, i) {
        return n ? e.effects.animateClass.call(this, { add: t }, n, r, i) : this._addClass(t);
      }, _removeClass: e.fn.removeClass, removeClass: function removeClass(t, n, r, i) {
        return arguments.length > 1 ? e.effects.animateClass.call(this, { remove: t }, n, r, i) : this._removeClass.apply(this, arguments);
      }, _toggleClass: e.fn.toggleClass, toggleClass: function toggleClass(n, r, i, s, o) {
        return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? { add: n } : { remove: n }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, { toggle: n }, r, i, s);
      }, switchClass: function switchClass(t, n, r, i, s) {
        return e.effects.animateClass.call(this, { add: n, remove: t }, r, i, s);
      } });
  })(), (function () {
    function r(t, n, r, i) {
      e.isPlainObject(t) && (n = t, t = t.effect), t = { effect: t }, n == null && (n = {}), e.isFunction(n) && (i = n, r = null, n = {});if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};return (e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t);
    }function i(t) {
      return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t];
    }e.extend(e.effects, { version: "1.10.1", save: function save(e, t) {
        for (var r = 0; r < t.length; r++) t[r] !== null && e.data(n + t[r], e[0].style[t[r]]);
      }, restore: function restore(e, r) {
        var i, s;for (s = 0; s < r.length; s++) r[s] !== null && (i = e.data(n + r[s]), i === t && (i = ""), e.css(r[s], i));
      }, setMode: function setMode(e, t) {
        return (t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t);
      }, getBaseline: function getBaseline(e, t) {
        var n, r;switch (e[0]) {case "top":
            n = 0;break;case "middle":
            n = 0.5;break;case "bottom":
            n = 1;break;default:
            n = e[0] / t.height;}switch (e[1]) {case "left":
            r = 0;break;case "center":
            r = 0.5;break;case "right":
            r = 1;break;default:
            r = e[1] / t.width;}return { x: r, y: n };
      }, createWrapper: function createWrapper(t) {
        if (t.parent().is(".ui-effects-wrapper")) return t.parent();var n = { width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float") },
            r = e("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
            i = { width: t.width(), height: t.height() },
            s = document.activeElement;try {
          s.id;
        } catch (o) {
          s = document.body;
        }return (t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), t.css("position") === "static" ? (r.css({ position: "relative" }), t.css({ position: "relative" })) : (e.extend(n, { position: t.css("position"), zIndex: t.css("z-index") }), e.each(["top", "left", "bottom", "right"], function (e, r) {
          n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto");
        }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(i), r.css(n).show());
      }, removeWrapper: function removeWrapper(t) {
        var n = document.activeElement;return (t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t);
      }, setTransition: function setTransition(t, n, r, i) {
        return (i = i || {}, e.each(n, function (e, n) {
          var s = t.cssUnit(n);s[0] > 0 && (i[n] = s[0] * r + s[1]);
        }), i);
      } }), e.fn.extend({ effect: function effect() {
        function o(n) {
          function u() {
            e.isFunction(i) && i.call(r[0]), e.isFunction(n) && n();
          }var r = e(this),
              i = t.complete,
              o = t.mode;(r.is(":hidden") ? o === "hide" : o === "show") ? u() : s.call(r[0], t, u);
        }var t = r.apply(this, arguments),
            n = t.mode,
            i = t.queue,
            s = e.effects.effect[t.effect];return e.fx.off || !s ? n ? this[n](t.duration, t.complete) : this.each(function () {
          t.complete && t.complete.call(this);
        }) : i === !1 ? this.each(o) : this.queue(i || "fx", o);
      }, _show: e.fn.show, show: function show(e) {
        if (i(e)) return this._show.apply(this, arguments);var t = r.apply(this, arguments);return (t.mode = "show", this.effect.call(this, t));
      }, _hide: e.fn.hide, hide: function hide(e) {
        if (i(e)) return this._hide.apply(this, arguments);var t = r.apply(this, arguments);return (t.mode = "hide", this.effect.call(this, t));
      }, __toggle: e.fn.toggle, toggle: function toggle(t) {
        if (i(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);var n = r.apply(this, arguments);return (n.mode = "toggle", this.effect.call(this, n));
      }, cssUnit: function cssUnit(t) {
        var n = this.css(t),
            r = [];return (e.each(["em", "px", "%", "pt"], function (e, t) {
          n.indexOf(t) > 0 && (r = [parseFloat(n), t]);
        }), r);
      } });
  })(), (function () {
    var t = {};e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
      t[n] = function (t) {
        return Math.pow(t, e + 2);
      };
    }), e.extend(t, { Sine: function Sine(e) {
        return 1 - Math.cos(e * Math.PI / 2);
      }, Circ: function Circ(e) {
        return 1 - Math.sqrt(1 - e * e);
      }, Elastic: function Elastic(e) {
        return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15);
      }, Back: function Back(e) {
        return e * e * (3 * e - 2);
      }, Bounce: function Bounce(e) {
        var t,
            n = 4;while (e < ((t = Math.pow(2, --n)) - 1) / 11);return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2);
      } }), e.each(t, function (t, n) {
      e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function (e) {
        return 1 - n(1 - e);
      }, e.easing["easeInOut" + t] = function (e) {
        return e < 0.5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2;
      };
    });
  })();
})(jQuery);(function (e, t) {
  var n = /up|down|vertical/,
      r = /up|left|vertical|horizontal/;e.effects.effect.blind = function (t, i) {
    var s = e(this),
        o = ["position", "top", "bottom", "left", "right", "height", "width"],
        u = e.effects.setMode(s, t.mode || "hide"),
        a = t.direction || "up",
        f = n.test(a),
        l = f ? "height" : "width",
        c = f ? "top" : "left",
        h = r.test(a),
        p = {},
        d = u === "show",
        v,
        m,
        g;s.parent().is(".ui-effects-wrapper") ? e.effects.save(s.parent(), o) : e.effects.save(s, o), s.show(), v = e.effects.createWrapper(s).css({ overflow: "hidden" }), m = v[l](), g = parseFloat(v.css(c)) || 0, p[l] = d ? m : 0, h || (s.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({ position: "absolute" }), p[c] = d ? g : m + g), d && (v.css(l, 0), h || v.css(c, g + m)), v.animate(p, { duration: t.duration, easing: t.easing, queue: !1, complete: function complete() {
        u === "hide" && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), i();
      } });
  };
})(jQuery);(function (e, t) {
  e.effects.effect.bounce = function (t, n) {
    var r = e(this),
        i = ["position", "top", "bottom", "left", "right", "height", "width"],
        s = e.effects.setMode(r, t.mode || "effect"),
        o = s === "hide",
        u = s === "show",
        a = t.direction || "up",
        f = t.distance,
        l = t.times || 5,
        c = l * 2 + (u || o ? 1 : 0),
        h = t.duration / c,
        p = t.easing,
        d = a === "up" || a === "down" ? "top" : "left",
        v = a === "up" || a === "left",
        m,
        g,
        y,
        b = r.queue(),
        w = b.length;(u || o) && i.push("opacity"), e.effects.save(r, i), r.show(), e.effects.createWrapper(r), f || (f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3), u && (y = { opacity: 1 }, y[d] = 0, r.css("opacity", 0).css(d, v ? -f * 2 : f * 2).animate(y, h, p)), o && (f /= Math.pow(2, l - 1)), y = {}, y[d] = 0;for (m = 0; m < l; m++) g = {}, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p).animate(y, h, p), f = o ? f * 2 : f / 2;o && (g = { opacity: 0 }, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p)), r.queue(function () {
      o && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
    }), w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1))), r.dequeue();
  };
})(jQuery);(function (e, t) {
  e.effects.effect.clip = function (t, n) {
    var r = e(this),
        i = ["position", "top", "bottom", "left", "right", "height", "width"],
        s = e.effects.setMode(r, t.mode || "hide"),
        o = s === "show",
        u = t.direction || "vertical",
        a = u === "vertical",
        f = a ? "height" : "width",
        l = a ? "top" : "left",
        c = {},
        h,
        p,
        d;e.effects.save(r, i), r.show(), h = e.effects.createWrapper(r).css({ overflow: "hidden" }), p = r[0].tagName === "IMG" ? h : r, d = p[f](), o && (p.css(f, 0), p.css(l, d / 2)), c[f] = o ? d : 0, c[l] = o ? 0 : d / 2, p.animate(c, { queue: !1, duration: t.duration, easing: t.easing, complete: function complete() {
        o || r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
      } });
  };
})(jQuery);(function (e, t) {
  e.effects.effect.drop = function (t, n) {
    var r = e(this),
        i = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
        s = e.effects.setMode(r, t.mode || "hide"),
        o = s === "show",
        u = t.direction || "left",
        a = u === "up" || u === "down" ? "top" : "left",
        f = u === "up" || u === "left" ? "pos" : "neg",
        l = { opacity: o ? 1 : 0 },
        c;e.effects.save(r, i), r.show(), e.effects.createWrapper(r), c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2, o && r.css("opacity", 0).css(a, f === "pos" ? -c : c), l[a] = (o ? f === "pos" ? "+=" : "-=" : f === "pos" ? "-=" : "+=") + c, r.animate(l, { queue: !1, duration: t.duration, easing: t.easing, complete: function complete() {
        s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
      } });
  };
})(jQuery);(function (e, t) {
  e.effects.effect.explode = function (t, n) {
    function y() {
      c.push(this), c.length === r * i && b();
    }function b() {
      s.css({ visibility: "visible" }), e(c).remove(), u || s.hide(), n();
    }var r = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
        i = r,
        s = e(this),
        o = e.effects.setMode(s, t.mode || "hide"),
        u = o === "show",
        a = s.show().css("visibility", "hidden").offset(),
        f = Math.ceil(s.outerWidth() / i),
        l = Math.ceil(s.outerHeight() / r),
        c = [],
        h,
        p,
        d,
        v,
        m,
        g;for (h = 0; h < r; h++) {
      v = a.top + h * l, g = h - (r - 1) / 2;for (p = 0; p < i; p++) d = a.left + p * f, m = p - (i - 1) / 2, s.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -p * f, top: -h * l }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: f, height: l, left: d + (u ? m * f : 0), top: v + (u ? g * l : 0), opacity: u ? 0 : 1 }).animate({ left: d + (u ? 0 : m * f), top: v + (u ? 0 : g * l), opacity: u ? 1 : 0 }, t.duration || 500, t.easing, y);
    }
  };
})(jQuery);(function (e, t) {
  e.effects.effect.fade = function (t, n) {
    var r = e(this),
        i = e.effects.setMode(r, t.mode || "toggle");r.animate({ opacity: i }, { queue: !1, duration: t.duration, easing: t.easing, complete: n });
  };
})(jQuery);(function (e, t) {
  e.effects.effect.fold = function (t, n) {
    var r = e(this),
        i = ["position", "top", "bottom", "left", "right", "height", "width"],
        s = e.effects.setMode(r, t.mode || "hide"),
        o = s === "show",
        u = s === "hide",
        a = t.size || 15,
        f = /([0-9]+)%/.exec(a),
        l = !!t.horizFirst,
        c = o !== l,
        h = c ? ["width", "height"] : ["height", "width"],
        p = t.duration / 2,
        d,
        v,
        m = {},
        g = {};e.effects.save(r, i), r.show(), d = e.effects.createWrapper(r).css({ overflow: "hidden" }), v = c ? [d.width(), d.height()] : [d.height(), d.width()], f && (a = parseInt(f[1], 10) / 100 * v[u ? 0 : 1]), o && d.css(l ? { height: 0, width: a } : { height: a, width: 0 }), m[h[0]] = o ? v[0] : a, g[h[1]] = o ? v[1] : 0, d.animate(m, p, t.easing).animate(g, p, t.easing, function () {
      u && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
    });
  };
})(jQuery);(function (e, t) {
  e.effects.effect.highlight = function (t, n) {
    var r = e(this),
        i = ["backgroundImage", "backgroundColor", "opacity"],
        s = e.effects.setMode(r, t.mode || "show"),
        o = { backgroundColor: r.css("backgroundColor") };s === "hide" && (o.opacity = 0), e.effects.save(r, i), r.show().css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(o, { queue: !1, duration: t.duration, easing: t.easing, complete: function complete() {
        s === "hide" && r.hide(), e.effects.restore(r, i), n();
      } });
  };
})(jQuery);(function (e, t) {
  e.effects.effect.pulsate = function (t, n) {
    var r = e(this),
        i = e.effects.setMode(r, t.mode || "show"),
        s = i === "show",
        o = i === "hide",
        u = s || i === "hide",
        a = (t.times || 5) * 2 + (u ? 1 : 0),
        f = t.duration / a,
        l = 0,
        c = r.queue(),
        h = c.length,
        p;if (s || !r.is(":visible")) r.css("opacity", 0).show(), l = 1;for (p = 1; p < a; p++) r.animate({ opacity: l }, f, t.easing), l = 1 - l;r.animate({ opacity: l }, f, t.easing), r.queue(function () {
      o && r.hide(), n();
    }), h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))), r.dequeue();
  };
})(jQuery);(function (e, t) {
  e.effects.effect.puff = function (t, n) {
    var r = e(this),
        i = e.effects.setMode(r, t.mode || "hide"),
        s = i === "hide",
        o = parseInt(t.percent, 10) || 150,
        u = o / 100,
        a = { height: r.height(), width: r.width(), outerHeight: r.outerHeight(), outerWidth: r.outerWidth() };e.extend(t, { effect: "scale", queue: !1, fade: !0, mode: i, complete: n, percent: s ? o : 100, from: s ? a : { height: a.height * u, width: a.width * u, outerHeight: a.outerHeight * u, outerWidth: a.outerWidth * u } }), r.effect(t);
  }, e.effects.effect.scale = function (t, n) {
    var r = e(this),
        i = e.extend(!0, {}, t),
        s = e.effects.setMode(r, t.mode || "effect"),
        o = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100),
        u = t.direction || "both",
        a = t.origin,
        f = { height: r.height(), width: r.width(), outerHeight: r.outerHeight(), outerWidth: r.outerWidth() },
        l = { y: u !== "horizontal" ? o / 100 : 1, x: u !== "vertical" ? o / 100 : 1 };i.effect = "size", i.queue = !1, i.complete = n, s !== "effect" && (i.origin = a || ["middle", "center"], i.restore = !0), i.from = t.from || (s === "show" ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : f), i.to = { height: f.height * l.y, width: f.width * l.x, outerHeight: f.outerHeight * l.y, outerWidth: f.outerWidth * l.x }, i.fade && (s === "show" && (i.from.opacity = 0, i.to.opacity = 1), s === "hide" && (i.from.opacity = 1, i.to.opacity = 0)), r.effect(i);
  }, e.effects.effect.size = function (t, n) {
    var r,
        i,
        s,
        o = e(this),
        u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
        a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
        f = ["width", "height", "overflow"],
        l = ["fontSize"],
        c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        p = e.effects.setMode(o, t.mode || "effect"),
        d = t.restore || p !== "effect",
        v = t.scale || "both",
        m = t.origin || ["middle", "center"],
        g = o.css("position"),
        y = d ? u : a,
        b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };p === "show" && o.show(), r = { height: o.height(), width: o.width(), outerHeight: o.outerHeight(), outerWidth: o.outerWidth() }, t.mode === "toggle" && p === "show" ? (o.from = t.to || b, o.to = t.from || r) : (o.from = t.from || (p === "show" ? b : r), o.to = t.to || (p === "hide" ? b : r)), s = { from: { y: o.from.height / r.height, x: o.from.width / r.width }, to: { y: o.to.height / r.height, x: o.to.width / r.width } };if (v === "box" || v === "both") s.from.y !== s.to.y && (y = y.concat(c), o.from = e.effects.setTransition(o, c, s.from.y, o.from), o.to = e.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(h), o.from = e.effects.setTransition(o, h, s.from.x, o.from), o.to = e.effects.setTransition(o, h, s.to.x, o.to));(v === "content" || v === "both") && s.from.y !== s.to.y && (y = y.concat(l).concat(f), o.from = e.effects.setTransition(o, l, s.from.y, o.from), o.to = e.effects.setTransition(o, l, s.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (i = e.effects.getBaseline(m, r), o.from.top = (r.outerHeight - o.outerHeight()) * i.y, o.from.left = (r.outerWidth - o.outerWidth()) * i.x, o.to.top = (r.outerHeight - o.to.outerHeight) * i.y, o.to.left = (r.outerWidth - o.to.outerWidth) * i.x), o.css(o.from);if (v === "content" || v === "both") c = c.concat(["marginTop", "marginBottom"]).concat(l), h = h.concat(["marginLeft", "marginRight"]), f = u.concat(c).concat(h), o.find("*[width]").each(function () {
      var n = e(this),
          r = { height: n.height(), width: n.width(), outerHeight: n.outerHeight(), outerWidth: n.outerWidth() };d && e.effects.save(n, f), n.from = { height: r.height * s.from.y, width: r.width * s.from.x, outerHeight: r.outerHeight * s.from.y, outerWidth: r.outerWidth * s.from.x }, n.to = { height: r.height * s.to.y, width: r.width * s.to.x, outerHeight: r.height * s.to.y, outerWidth: r.width * s.to.x }, s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from), n.to = e.effects.setTransition(n, c, s.to.y, n.to)), s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from), n.to = e.effects.setTransition(n, h, s.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function () {
        d && e.effects.restore(n, f);
      });
    });o.animate(o.to, { queue: !1, duration: t.duration, easing: t.easing, complete: function complete() {
        o.to.opacity === 0 && o.css("opacity", o.from.opacity), p === "hide" && o.hide(), e.effects.restore(o, y), d || (g === "static" ? o.css({ position: "relative", top: o.to.top, left: o.to.left }) : e.each(["top", "left"], function (e, t) {
          o.css(t, function (t, n) {
            var r = parseInt(n, 10),
                i = e ? o.to.left : o.to.top;return n === "auto" ? i + "px" : r + i + "px";
          });
        })), e.effects.removeWrapper(o), n();
      } });
  };
})(jQuery);(function (e, t) {
  e.effects.effect.shake = function (t, n) {
    var r = e(this),
        i = ["position", "top", "bottom", "left", "right", "height", "width"],
        s = e.effects.setMode(r, t.mode || "effect"),
        o = t.direction || "left",
        u = t.distance || 20,
        a = t.times || 3,
        f = a * 2 + 1,
        l = Math.round(t.duration / f),
        c = o === "up" || o === "down" ? "top" : "left",
        h = o === "up" || o === "left",
        p = {},
        d = {},
        v = {},
        m,
        g = r.queue(),
        y = g.length;e.effects.save(r, i), r.show(), e.effects.createWrapper(r), p[c] = (h ? "-=" : "+=") + u, d[c] = (h ? "+=" : "-=") + u * 2, v[c] = (h ? "-=" : "+=") + u * 2, r.animate(p, l, t.easing);for (m = 1; m < a; m++) r.animate(d, l, t.easing).animate(v, l, t.easing);r.animate(d, l, t.easing).animate(p, l / 2, t.easing).queue(function () {
      s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
    }), y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1))), r.dequeue();
  };
})(jQuery);(function (e, t) {
  e.effects.effect.slide = function (t, n) {
    var r = e(this),
        i = ["position", "top", "bottom", "left", "right", "width", "height"],
        s = e.effects.setMode(r, t.mode || "show"),
        o = s === "show",
        u = t.direction || "left",
        a = u === "up" || u === "down" ? "top" : "left",
        f = u === "up" || u === "left",
        l,
        c = {};e.effects.save(r, i), r.show(), l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(r).css({ overflow: "hidden" }), o && r.css(a, f ? isNaN(l) ? "-" + l : -l : l), c[a] = (o ? f ? "+=" : "-=" : f ? "-=" : "+=") + l, r.animate(c, { queue: !1, duration: t.duration, easing: t.easing, complete: function complete() {
        s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
      } });
  };
})(jQuery);(function (e, t) {
  e.effects.effect.transfer = function (t, n) {
    var r = e(this),
        i = e(t.to),
        s = i.css("position") === "fixed",
        o = e("body"),
        u = s ? o.scrollTop() : 0,
        a = s ? o.scrollLeft() : 0,
        f = i.offset(),
        l = { top: f.top - u, left: f.left - a, height: i.innerHeight(), width: i.innerWidth() },
        c = r.offset(),
        h = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({ top: c.top - u, left: c.left - a, height: r.innerHeight(), width: r.innerWidth(), position: s ? "fixed" : "absolute" }).animate(l, t.duration, t.easing, function () {
      h.remove(), n();
    });
  };
})(jQuery);

(function ($) {
  $.fn.editable = function (target, options) {
    if ("disable" == target) {
      $(this).data("disabled.editable", true);return;
    }
    if ("enable" == target) {
      $(this).data("disabled.editable", false);return;
    }
    if ("destroy" == target) {
      $(this).unbind($(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable");return;
    }
    var settings = $.extend({}, $.fn.editable.defaults, { target: target }, options);var plugin = $.editable.types[settings.type].plugin || function () {};var submit = $.editable.types[settings.type].submit || function () {};var buttons = $.editable.types[settings.type].buttons || $.editable.types["defaults"].buttons;var content = $.editable.types[settings.type].content || $.editable.types["defaults"].content;var element = $.editable.types[settings.type].element || $.editable.types["defaults"].element;var reset = $.editable.types[settings.type].reset || $.editable.types["defaults"].reset;var callback = settings.callback || function () {};var onedit = settings.onedit || function () {};var onsubmit = settings.onsubmit || function () {};var onreset = settings.onreset || function () {};var onerror = settings.onerror || reset;if (settings.tooltip) {
      $(this).attr("title", settings.tooltip);
    }
    settings.autowidth = "auto" == settings.width;settings.autoheight = "auto" == settings.height;return this.each(function () {
      var self = this;var savedwidth = $(self).width();var savedheight = $(self).height();$(this).data("event.editable", settings.event);if (!$.trim($(this).html())) {
        $(this).html(settings.placeholder);
      }
      $(this).bind(settings.event, function (e) {
        if (true === $(this).data("disabled.editable")) {
          return;
        }
        if (self.editing) {
          return;
        }
        if (false === onedit.apply(this, [settings, self])) {
          return;
        }
        e.preventDefault();e.stopPropagation();if (settings.tooltip) {
          $(self).removeAttr("title");
        }
        if (0 == $(self).width()) {
          settings.width = savedwidth;settings.height = savedheight;
        } else {
          if (settings.width != "none") {
            settings.width = settings.autowidth ? $(self).width() : settings.width;
          }
          if (settings.height != "none") {
            settings.height = settings.autoheight ? $(self).height() : settings.height;
          }
        }
        if ($(this).html().toLowerCase().replace(/(;|")/g, "") == settings.placeholder.toLowerCase().replace(/(;|")/g, "")) {
          $(this).html("");
        }
        self.editing = true;self.revert = $(self).html();$(self).html("");var form = $("<form />");if (settings.cssclass) {
          if ("inherit" == settings.cssclass) {
            form.attr("class", $(self).attr("class"));
          } else {
            form.attr("class", settings.cssclass);
          }
        }
        if (settings.style) {
          if ("inherit" == settings.style) {
            form.attr("style", $(self).attr("style"));form.css("display", $(self).css("display"));
          } else {
            form.attr("style", settings.style);
          }
        }
        var input = element.apply(form, [settings, self]);var input_content;if (settings.loadurl) {
          var t = setTimeout(function () {
            input.disabled = true;content.apply(form, [settings.loadtext, settings, self]);
          }, 100);var loaddata = {};loaddata[settings.id] = self.id;if ($.isFunction(settings.loaddata)) {
            $.extend(loaddata, settings.loaddata.apply(self, [self.revert, settings]));
          } else {
            $.extend(loaddata, settings.loaddata);
          }
          $.ajax({ type: settings.loadtype, url: settings.loadurl, data: loaddata, async: false, success: function success(result) {
              window.clearTimeout(t);input_content = result;input.disabled = false;
            } });
        } else if (settings.data) {
          input_content = settings.data;if ($.isFunction(settings.data)) {
            input_content = settings.data.apply(self, [self.revert, settings]);
          }
        } else {
          input_content = self.revert;
        }
        content.apply(form, [input_content, settings, self]);input.attr("name", settings.name);buttons.apply(form, [settings, self]);$(self).append(form);plugin.apply(form, [settings, self]);$(":input:visible:enabled:first", form).focus();if (settings.select) {
          input.select();
        }
        input.keydown(function (e) {
          if (e.keyCode == 27) {
            e.preventDefault();reset.apply(form, [settings, self]);
          }
        });var t;if ("cancel" == settings.onblur) {
          input.blur(function (e) {
            t = setTimeout(function () {
              reset.apply(form, [settings, self]);
            }, 500);
          });
        } else if ("submit" == settings.onblur) {
          input.blur(function (e) {
            t = setTimeout(function () {
              form.submit();
            }, 200);
          });
        } else if ($.isFunction(settings.onblur)) {
          input.blur(function (e) {
            settings.onblur.apply(self, [input.val(), settings]);
          });
        } else {
          input.blur(function (e) {});
        }
        form.submit(function (e) {
          if (t) {
            clearTimeout(t);
          }
          e.preventDefault();if (false !== onsubmit.apply(form, [settings, self])) {
            if (false !== submit.apply(form, [settings, self])) {
              if ($.isFunction(settings.target)) {
                var str = settings.target.apply(self, [input.val(), settings]);$(self).html(str);self.editing = false;callback.apply(self, [self.innerHTML, settings]);if (!$.trim($(self).html())) {
                  $(self).html(settings.placeholder);
                }
              } else {
                var submitdata = {};submitdata[settings.name] = input.val();submitdata[settings.id] = self.id;if ($.isFunction(settings.submitdata)) {
                  $.extend(submitdata, settings.submitdata.apply(self, [self.revert, settings]));
                } else {
                  $.extend(submitdata, settings.submitdata);
                }
                if ("PUT" == settings.method) {
                  submitdata["_method"] = "put";
                }
                $(self).html(settings.indicator);var ajaxoptions = { type: "POST", data: submitdata, dataType: "html", url: settings.target, success: function success(result, status) {
                    if (ajaxoptions.dataType == "html") {
                      $(self).html(result);
                    }
                    self.editing = false;callback.apply(self, [result, settings]);if (!$.trim($(self).html())) {
                      $(self).html(settings.placeholder);
                    }
                  }, error: function error(xhr, status, _error) {
                    onerror.apply(form, [settings, self, xhr]);
                  } };$.extend(ajaxoptions, settings.ajaxoptions);$.ajax(ajaxoptions);
              }
            }
          }
          $(self).attr("title", settings.tooltip);return false;
        });
      });this.reset = function (form) {
        if (this.editing) {
          if (false !== onreset.apply(form, [settings, self])) {
            $(self).html(self.revert);self.editing = false;if (!$.trim($(self).html())) {
              $(self).html(settings.placeholder);
            }
            if (settings.tooltip) {
              $(self).attr("title", settings.tooltip);
            }
          }
        }
      };
    });
  };$.editable = { types: { defaults: { element: function element(settings, original) {
          var input = $("<input type=\"hidden\"></input>");$(this).append(input);return input;
        }, content: function content(string, settings, original) {
          $(":input:first", this).val(string);
        }, reset: function reset(settings, original) {
          original.reset(this);
        }, buttons: function buttons(settings, original) {
          var form = this;if (settings.submit) {
            if (settings.submit.match(/>$/)) {
              var submit = $(settings.submit).click(function () {
                if (submit.attr("type") != "submit") {
                  form.submit();
                }
              });
            } else {
              var submit = $("<button type=\"submit\" />");submit.html(settings.submit);
            }
            $(this).append(submit);
          }
          if (settings.cancel) {
            if (settings.cancel.match(/>$/)) {
              var cancel = $(settings.cancel);
            } else {
              var cancel = $("<button type=\"cancel\" />");cancel.html(settings.cancel);
            }
            $(this).append(cancel);$(cancel).click(function (event) {
              if ($.isFunction($.editable.types[settings.type].reset)) {
                var reset = $.editable.types[settings.type].reset;
              } else {
                var reset = $.editable.types["defaults"].reset;
              }
              reset.apply(form, [settings, original]);return false;
            });
          }
        } }, text: { element: function element(settings, original) {
          var input = $("<input />");if (settings.width != "none") {
            input.width(settings.width);
          }
          if (settings.height != "none") {
            input.height(settings.height);
          }
          input.attr("autocomplete", "off");$(this).append(input);return input;
        } }, textarea: { element: function element(settings, original) {
          var textarea = $("<textarea />");if (settings.rows) {
            textarea.attr("rows", settings.rows);
          } else if (settings.height != "none") {
            textarea.height(settings.height);
          }
          if (settings.cols) {
            textarea.attr("cols", settings.cols);
          } else if (settings.width != "none") {
            textarea.width(settings.width);
          }
          $(this).append(textarea);return textarea;
        } }, select: { element: function element(settings, original) {
          var select = $("<select />");$(this).append(select);return select;
        }, content: function content(data, settings, original) {
          if (String == data.constructor) {
            eval("var json = " + data);
          } else {
            var json = data;
          }
          for (var key in json) {
            if (!json.hasOwnProperty(key)) {
              continue;
            }
            if ("selected" == key) {
              continue;
            }
            var option = $("<option />").val(key).append(json[key]);$("select", this).append(option);
          }
          $("select", this).children().each(function () {
            if ($(this).val() == json["selected"] || $(this).text() == $.trim(original.revert)) {
              $(this).attr("selected", "selected");
            }
          });
        } } }, addInputType: function addInputType(name, input) {
      $.editable.types[name] = input;
    } };$.fn.editable.defaults = { name: "value", id: "id", type: "text", width: "auto", height: "auto", event: "click.editable", onblur: "cancel", loadtype: "GET", loadtext: "Loading...", placeholder: "Click to edit", loaddata: {}, submitdata: {}, ajaxoptions: {} };
})(jQuery);
!(function (t) {
  var e = 0,
      i = null;t.fn.resetBreakpoints = function () {
    t(window).unbind("resize"), i && clearInterval(i), e = 0;
  }, t.fn.setBreakpoints = function (n) {
    var a = jQuery.extend({ distinct: !0, breakpoints: new Array(320, 480, 768, 1024) }, n);i = setInterval(function () {
      var i = t(window).width(),
          n = !1;for (var s in a.breakpoints.sort(function (t, e) {
        return e - t;
      })) {
        if (!n && i >= a.breakpoints[s] && e < a.breakpoints[s]) {
          if (a.distinct) {
            for (var o in a.breakpoints.sort(function (t, e) {
              return e - t;
            })) t("body").hasClass("breakpoint-" + a.breakpoints[o]) && (t("body").removeClass("breakpoint-" + a.breakpoints[o]), t(window).trigger("exitBreakpoint" + a.breakpoints[o]));n = !0;
          }t("body").addClass("breakpoint-" + a.breakpoints[s]), t(window).trigger("enterBreakpoint" + a.breakpoints[s]);
        }i < a.breakpoints[s] && e >= a.breakpoints[s] && (t("body").removeClass("breakpoint-" + a.breakpoints[s]), t(window).trigger("exitBreakpoint" + a.breakpoints[s])), a.distinct && i >= a.breakpoints[s] && i < a.breakpoints[s - 1] && e > i && e > 0 && !t("body").hasClass("breakpoint-" + a.breakpoints[s]) && (t("body").addClass("breakpoint-" + a.breakpoints[s]), t(window).trigger("enterBreakpoint" + a.breakpoints[s]));
      }e != i && (e = i);
    }, 250);
  };
})(jQuery);
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function ($) {
  $.fn.unveil = function (threshold, callback) {
    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = retina ? "data-src-retina" : "data-src",
        images = this,
        loaded;this.one("unveil", function () {
      var source = this.getAttribute(attrib);source = source || this.getAttribute("data-src");if (source) {
        this.setAttribute("src", source);if (typeof callback === "function") callback.call(this);
      }
    });function unveil() {
      var inview = images.filter(function () {
        var $e = $(this),
            wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();return eb >= wt - th && et <= wb + th;
      });loaded = inview.trigger("unveil");images = images.not(loaded);
    }$w.scroll(unveil);$w.resize(unveil);unveil();return this;
  };
})(window.jQuery || window.Zepto);

!(function () {
  "use strict";function e(e) {
    function t(t, i) {
      var a,
          m,
          g = t == window,
          v = i && void 0 !== i.message ? i.message : void 0;if ((i = e.extend({}, e.blockUI.defaults, i || {}), !i.ignoreIfBlocked || !e(t).data("blockUI.isBlocked"))) {
        if ((i.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, i.overlayCSS || {}), a = e.extend({}, e.blockUI.defaults.css, i.css || {}), i.onOverlayClick && (i.overlayCSS.cursor = "pointer"), m = e.extend({}, e.blockUI.defaults.themedCSS, i.themedCSS || {}), v = void 0 === v ? i.message : v, g && f && n(window, { fadeOut: 0 }), v && "string" != typeof v && (v.parentNode || v.jquery))) {
          var C = v.jquery ? v[0] : v,
              T = {};e(t).data("blockUI.history", T), T.el = C, T.parent = C.parentNode, T.display = C.style.display, T.position = C.style.position, T.parent && T.parent.removeChild(C);
        }e(t).data("blockUI.onUnblock", i.onUnblock);var E,
            y,
            b,
            D,
            I = i.baseZ;E = u || i.forceIframe ? e("<iframe class=\"blockUI\" style=\"z-index:" + I++ + ";display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0\" src=\"" + i.iframeSrc + "\"></iframe>") : e("<div class=\"blockUI\" style=\"display:none\"></div>"), y = i.theme ? e("<div class=\"blockUI blockOverlay ui-widget-overlay\" style=\"z-index:" + I++ + ";display:none\"></div>") : e("<div class=\"blockUI blockOverlay\" style=\"z-index:" + I++ + ";display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0\"></div>"), i.theme && g ? (D = "<div class=\"blockUI " + i.blockMsgClass + " blockPage ui-dialog ui-widget ui-corner-all\" style=\"z-index:" + (I + 10) + ";display:none;position:fixed\">", i.title && (D += "<div class=\"ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle\">" + (i.title || " ") + "</div>"), D += "<div class=\"ui-widget-content ui-dialog-content\"></div>", D += "</div>") : i.theme ? (D = "<div class=\"blockUI " + i.blockMsgClass + " blockElement ui-dialog ui-widget ui-corner-all\" style=\"z-index:" + (I + 10) + ";display:none;position:absolute\">", i.title && (D += "<div class=\"ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle\">" + (i.title || " ") + "</div>"), D += "<div class=\"ui-widget-content ui-dialog-content\"></div>", D += "</div>") : D = g ? "<div class=\"blockUI " + i.blockMsgClass + " blockPage\" style=\"z-index:" + (I + 10) + ";display:none;position:fixed\"></div>" : "<div class=\"blockUI " + i.blockMsgClass + " blockElement\" style=\"z-index:" + (I + 10) + ";display:none;position:absolute\"></div>", b = e(D), v && (i.theme ? (b.css(m), b.addClass("ui-widget-content")) : b.css(a)), i.theme || y.css(i.overlayCSS), y.css("position", g ? "fixed" : "absolute"), (u || i.forceIframe) && E.css("opacity", 0);var O = [E, y, b],
            R = g ? e("body") : e(t);e.each(O, function () {
          this.appendTo(R);
        }), i.theme && i.draggable && e.fn.draggable && b.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" });var w = h && (!e.support.boxModel || e("object,embed", g ? null : t).length > 0);if (d || w) {
          if ((g && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (d || !e.support.boxModel) && !g)) var _ = l(t, "borderTopWidth"),
              S = l(t, "borderLeftWidth"),
              k = _ ? "(0 - " + _ + ")" : 0,
              x = S ? "(0 - " + S + ")" : 0;e.each(O, function (e, t) {
            var n = t[0].style;if ((n.position = "absolute", 2 > e)) g ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ") + \"px\"") : n.setExpression("height", "this.parentNode.offsetHeight + \"px\""), g ? n.setExpression("width", "jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + \"px\"") : n.setExpression("width", "this.parentNode.offsetWidth + \"px\""), x && n.setExpression("left", x), k && n.setExpression("top", k);else if (i.centerY) g && n.setExpression("top", "(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + \"px\""), n.marginTop = 0;else if (!i.centerY && g) {
              var o = i.css && i.css.top ? parseInt(i.css.top, 10) : 0,
                  a = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + o + ") + \"px\"";n.setExpression("top", a);
            }
          });
        }if ((v && (i.theme ? b.find(".ui-widget-content").append(v) : b.append(v), (v.jquery || v.nodeType) && e(v).show()), (u || i.forceIframe) && i.showOverlay && E.show(), i.fadeIn)) {
          var K = i.onBlock ? i.onBlock : c,
              N = i.showOverlay && !v ? K : c,
              A = v ? K : c;i.showOverlay && y._fadeIn(i.fadeIn, N), v && b._fadeIn(i.fadeIn, A);
        } else i.showOverlay && y.show(), v && b.show(), i.onBlock && i.onBlock();if ((o(1, t, i), g ? (f = b[0], p = e(i.focusableElements, f), i.focusInput && setTimeout(r, 20)) : s(b[0], i.centerX, i.centerY), i.timeout)) {
          var L = setTimeout(function () {
            g ? e.unblockUI(i) : e(t).unblock(i);
          }, i.timeout);e(t).data("blockUI.timeout", L);
        }
      }
    }function n(t, n) {
      var a,
          r = t == window,
          s = e(t),
          l = s.data("blockUI.history"),
          c = s.data("blockUI.timeout");c && (clearTimeout(c), s.removeData("blockUI.timeout")), n = e.extend({}, e.blockUI.defaults, n || {}), o(0, t, n), null === n.onUnblock && (n.onUnblock = s.data("blockUI.onUnblock"), s.removeData("blockUI.onUnblock"));var u;u = r ? e("body").children().filter(".blockUI").add("body > .blockUI") : s.find(">.blockUI"), n.cursorReset && (u.length > 1 && (u[1].style.cursor = n.cursorReset), u.length > 2 && (u[2].style.cursor = n.cursorReset)), r && (f = p = null), n.fadeOut ? (a = u.length, u.stop().fadeOut(n.fadeOut, function () {
        0 === --a && i(u, l, n, t);
      })) : i(u, l, n, t);
    }function i(t, n, i, o) {
      var a = e(o);if (!a.data("blockUI.isBlocked")) {
        t.each(function () {
          this.parentNode && this.parentNode.removeChild(this);
        }), n && n.el && (n.el.style.display = n.display, n.el.style.position = n.position, n.parent && n.parent.appendChild(n.el), a.removeData("blockUI.history")), a.data("blockUI.static") && a.css("position", "static"), "function" == typeof i.onUnblock && i.onUnblock(o, i);var r = e(document.body),
            s = r.width(),
            l = r[0].style.width;r.width(s - 1).width(s), r[0].style.width = l;
      }
    }function o(t, n, i) {
      var o = n == window,
          r = e(n);if ((t || (!o || f) && (o || r.data("blockUI.isBlocked"))) && (r.data("blockUI.isBlocked", t), o && i.bindEvents && (!t || i.showOverlay))) {
        var s = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t ? e(document).bind(s, i, a) : e(document).unbind(s, a);
      }
    }function a(t) {
      if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && f && t.data.constrainTabKey) {
        var n = p,
            i = !t.shiftKey && t.target === n[n.length - 1],
            o = t.shiftKey && t.target === n[0];if (i || o) return (setTimeout(function () {
          r(o);
        }, 10), !1);
      }var a = t.data,
          s = e(t.target);return (s.hasClass("blockOverlay") && a.onOverlayClick && a.onOverlayClick(), s.parents("div." + a.blockMsgClass).length > 0 ? !0 : 0 === s.parents().children().filter("div.blockUI").length);
    }function r(e) {
      if (p) {
        var t = p[e === !0 ? p.length - 1 : 0];t && t.focus();
      }
    }function s(e, t, n) {
      var i = e.parentNode,
          o = e.style,
          a = (i.offsetWidth - e.offsetWidth) / 2 - l(i, "borderLeftWidth"),
          r = (i.offsetHeight - e.offsetHeight) / 2 - l(i, "borderTopWidth");t && (o.left = a > 0 ? a + "px" : "0"), n && (o.top = r > 0 ? r + "px" : "0");
    }function l(t, n) {
      return parseInt(e.css(t, n), 10) || 0;
    }e.fn._fadeIn = e.fn.fadeIn;var c = e.noop || function () {},
        u = /MSIE/.test(navigator.userAgent),
        d = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent);document.documentMode || 0;var h = e.isFunction(document.createElement("div").style.setExpression);e.blockUI = function (e) {
      t(window, e);
    }, e.unblockUI = function (e) {
      n(window, e);
    }, e.growlUI = function (t, n, i, o) {
      var a = e("<div class=\"growlUI\"></div>");t && a.append("<h1>" + t + "</h1>"), n && a.append("<h2>" + n + "</h2>"), void 0 === i && (i = 3000);var r = function r(t) {
        t = t || {}, e.blockUI({ message: a, fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700, fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1000, timeout: "undefined" != typeof t.timeout ? t.timeout : i, centerY: !1, showOverlay: !1, onUnblock: o, css: e.blockUI.defaults.growlCSS });
      };r(), a.css("opacity"), a.mouseover(function () {
        r({ fadeIn: 0, timeout: 30000 });var t = e(".blockMsg");t.stop(), t.fadeTo(300, 1);
      }).mouseout(function () {
        e(".blockMsg").fadeOut(1000);
      });
    }, e.fn.block = function (n) {
      if (this[0] === window) return (e.blockUI(n), this);var i = e.extend({}, e.blockUI.defaults, n || {});return (this.each(function () {
        var t = e(this);i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({ fadeOut: 0 });
      }), this.each(function () {
        "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, n);
      }));
    }, e.fn.unblock = function (t) {
      return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
        n(this, t);
      });
    }, e.blockUI.version = 2.65, e.blockUI.defaults = { message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" }, themedCSS: { width: "30%", top: "40%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: 0.6, cursor: "wait" }, cursorReset: "default", growlCSS: { width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: 0.6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1000, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 };var f = null,
        p = [];
  }"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery);
})();
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2014, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.4
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
(function (e, t, n) {
  "use strict";function h() {
    if (o.webkit) {
      return { height: 0, width: 0 };
    }if (!o.data.outer) {
      var t = { border: "none", "box-sizing": "content-box", height: "200px", margin: "0", padding: "0", width: "200px" };o.data.inner = e("<div>").css(e.extend({}, t));o.data.outer = e("<div>").css(e.extend({ left: "-1000px", overflow: "scroll", position: "absolute", top: "-1000px" }, t)).append(o.data.inner).appendTo("body");
    }o.data.outer.scrollLeft(1000).scrollTop(1000);return { height: Math.ceil(o.data.outer.offset().top - o.data.inner.offset().top || 0), width: Math.ceil(o.data.outer.offset().left - o.data.inner.offset().left || 0) };
  }function p(n, r) {
    e(t).on({ "blur.scrollbar": function blurScrollbar() {
        e(t).add("body").off(".scrollbar");n && n();
      }, "dragstart.scrollbar": function dragstartScrollbar(e) {
        e.preventDefault();return false;
      }, "mouseup.scrollbar": function mouseupScrollbar() {
        e(t).add("body").off(".scrollbar");n && n();
      } });e("body").on({ "selectstart.scrollbar": function selectstartScrollbar(e) {
        e.preventDefault();return false;
      } });r && r.preventDefault();return false;
  }function d(e) {
    var t = e.originalEvent;if (t.axis && t.axis === t.HORIZONTAL_AXIS) return false;if (t.wheelDeltaX) return false;return true;
  }var r = false;var i = 1,
      s = "px";var o = { data: {}, mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(n.navigator.userAgent), scroll: null, scrolls: [], webkit: n.WebKitPoint ? true : false, log: r ? function (t, r) {
      var i = t;if (r && typeof t != "string") {
        i = [];e.each(t, function (e, t) {
          i.push("\"" + e + "\": " + t);
        });i = i.join(", ");
      }if (n.console && n.console.log) {
        n.console.log(i);
      } else {
        alert(i);
      }
    } : function () {} };var u = { autoScrollSize: true, autoUpdate: true, debug: false, disableBodyScroll: false, duration: 200, ignoreMobile: true, scrollStep: 30, showArrows: false, stepScrolling: true, type: "simple", scrollx: null, scrolly: null, onDestroy: null, onInit: null, onScroll: null, onUpdate: null };var a = function a(t, r) {
    if (!o.scroll) {
      o.log("Init jQuery Scrollbar v0.2.4");o.scroll = h();_c();e(n).resize(function () {
        var e = false;if (o.scroll && (o.scroll.height || o.scroll.width)) {
          var t = h();if (t.height != o.scroll.height || t.width != o.scroll.width) {
            o.scroll = t;e = true;
          }
        }_c(e);
      });
    }this.container = t;this.options = e.extend({}, u, n.jQueryScrollbarOptions || {});this.scrollTo = null;this.scrollx = {};this.scrolly = {};this.init(r);
  };a.prototype = { destroy: function destroy() {
      if (!this.wrapper) {
        return;
      }var n = this.container.scrollLeft();var r = this.container.scrollTop();this.container.insertBefore(this.wrapper).css({ height: "", margin: "" }).removeClass("scroll-content").removeClass("scroll-scrollx_visible").removeClass("scroll-scrolly_visible").off(".scrollbar").scrollLeft(n).scrollTop(r);this.scrollx.scrollbar.removeClass("scroll-scrollx_visible").find("div").andSelf().off(".scrollbar");this.scrolly.scrollbar.removeClass("scroll-scrolly_visible").find("div").andSelf().off(".scrollbar");this.wrapper.remove();e(t).add("body").off(".scrollbar");if (e.isFunction(this.options.onDestroy)) this.options.onDestroy.apply(this, [this.container]);
    }, getScrollbar: function getScrollbar(t) {
      var n = this.options["scroll" + t];var r = { advanced: "<div class=\"scroll-element_corner\"></div>" + "<div class=\"scroll-arrow scroll-arrow_less\"></div>" + "<div class=\"scroll-arrow scroll-arrow_more\"></div>" + "<div class=\"scroll-element_outer\">" + "    <div class=\"scroll-element_size\"></div>" + "    <div class=\"scroll-element_inner-wrapper\">" + "        <div class=\"scroll-element_inner scroll-element_track\">" + "            <div class=\"scroll-element_inner-bottom\"></div>" + "        </div>" + "    </div>" + "    <div class=\"scroll-bar\">" + "        <div class=\"scroll-bar_body\">" + "            <div class=\"scroll-bar_body-inner\"></div>" + "        </div>" + "        <div class=\"scroll-bar_bottom\"></div>" + "        <div class=\"scroll-bar_center\"></div>" + "    </div>" + "</div>", simple: "<div class=\"scroll-element_outer\">" + "    <div class=\"scroll-element_size\"></div>" + "    <div class=\"scroll-element_track\"></div>" + "    <div class=\"scroll-bar\"></div>" + "</div>" };var i = r[this.options.type] ? this.options.type : "advanced";if (n) {
        if (typeof n == "string") {
          n = e(n).appendTo(this.wrapper);
        } else {
          n = e(n);
        }
      } else {
        n = e("<div>").addClass("scroll-element").html(r[i]).appendTo(this.wrapper);
      }if (this.options.showArrows) {
        n.addClass("scroll-element_arrows_visible");
      }return n.addClass("scroll-" + t);
    }, init: function init(n) {
      var r = this;var u = this.container;var a = this.containerWrapper || u;var f = e.extend(this.options, n || {});var l = { x: this.scrollx, y: this.scrolly };var c = this.wrapper;var h = { scrollLeft: u.scrollLeft(), scrollTop: u.scrollTop() };if (o.mobile && f.ignoreMobile) {
        return false;
      }if (!c) {
        this.wrapper = c = e("<div>").addClass("scroll-wrapper").addClass(u.attr("class")).css("position", u.css("position") == "absolute" ? "absolute" : "relative").insertBefore(u).append(u);if (u.is("textarea")) {
          this.containerWrapper = a = e("<div>").insertBefore(u).append(u);c.addClass("scroll-textarea");
        }a.addClass("scroll-content").css({ height: "", "margin-bottom": o.scroll.height * -1 + s, "margin-right": o.scroll.width * -1 + s });u.on("scroll.scrollbar", function (t) {
          if (e.isFunction(f.onScroll)) {
            f.onScroll.call(r, { maxScroll: l.y.maxScrollOffset, scroll: u.scrollTop(), size: l.y.size, visible: l.y.visible }, { maxScroll: l.x.maxScrollOffset, scroll: u.scrollLeft(), size: l.x.size, visible: l.x.visible });
          }l.x.isVisible && l.x.scroller.css("left", u.scrollLeft() * l.x.kx + s);l.y.isVisible && l.y.scroller.css("top", u.scrollTop() * l.y.kx + s);
        });c.on("scroll", function () {
          c.scrollTop(0).scrollLeft(0);
        });if (f.disableBodyScroll) {
          var v = function v(e) {
            d(e) ? l.y.isVisible && l.y.mousewheel(e) : l.x.isVisible && l.x.mousewheel(e);
          };c.on({ "MozMousePixelScroll.scrollbar": v, "mousewheel.scrollbar": v });if (o.mobile) {
            c.on("touchstart.scrollbar", function (n) {
              var r = n.originalEvent.touches && n.originalEvent.touches[0] || n;var i = { pageX: r.pageX, pageY: r.pageY };var s = { left: u.scrollLeft(), top: u.scrollTop() };e(t).on({ "touchmove.scrollbar": function touchmoveScrollbar(e) {
                  var t = e.originalEvent.targetTouches && e.originalEvent.targetTouches[0] || e;u.scrollLeft(s.left + i.pageX - t.pageX);u.scrollTop(s.top + i.pageY - t.pageY);e.preventDefault();
                }, "touchend.scrollbar": function touchendScrollbar() {
                  e(t).off(".scrollbar");
                } });
            });
          }
        }if (e.isFunction(f.onInit)) f.onInit.apply(this, [u]);
      } else {
        a.css({ height: "", "margin-bottom": o.scroll.height * -1 + s, "margin-right": o.scroll.width * -1 + s });
      }e.each(l, function (n, s) {
        var o = null;var a = 1;var c = n == "x" ? "scrollLeft" : "scrollTop";var h = f.scrollStep;var v = function v() {
          var e = u[c]();u[c](e + h);if (a == 1 && e + h >= m) e = u[c]();if (a == -1 && e + h <= m) e = u[c]();if (u[c]() == e && o) {
            o();
          }
        };var m = 0;if (!s.scrollbar) {
          s.scrollbar = r.getScrollbar(n);s.scroller = s.scrollbar.find(".scroll-bar");s.mousewheel = function (e) {
            if (!s.isVisible || n == "x" && d(e)) {
              return true;
            }if (n == "y" && !d(e)) {
              l.x.mousewheel(e);return true;
            }var t = e.originalEvent.wheelDelta * -1 || e.originalEvent.detail;var i = s.size - s.visible - s.offset;if (!(m <= 0 && t < 0 || m >= i && t > 0)) {
              m = m + t;if (m < 0) m = 0;if (m > i) m = i;r.scrollTo = r.scrollTo || {};r.scrollTo[c] = m;setTimeout(function () {
                if (r.scrollTo) {
                  u.stop().animate(r.scrollTo, 240, "linear", function () {
                    m = u[c]();
                  });r.scrollTo = null;
                }
              }, 1);
            }e.preventDefault();return false;
          };s.scrollbar.on({ "MozMousePixelScroll.scrollbar": s.mousewheel, "mousewheel.scrollbar": s.mousewheel, "mouseenter.scrollbar": function mouseenterScrollbar() {
              m = u[c]();
            } });s.scrollbar.find(".scroll-arrow, .scroll-element_track").on("mousedown.scrollbar", function (t) {
            if (t.which != i) return true;a = 1;var l = { eventOffset: t[n == "x" ? "pageX" : "pageY"], maxScrollValue: s.size - s.visible - s.offset, scrollbarOffset: s.scroller.offset()[n == "x" ? "left" : "top"], scrollbarSize: s.scroller[n == "x" ? "outerWidth" : "outerHeight"]() };var d = 0,
                g = 0;if (e(this).hasClass("scroll-arrow")) {
              a = e(this).hasClass("scroll-arrow_more") ? 1 : -1;h = f.scrollStep * a;m = a > 0 ? l.maxScrollValue : 0;
            } else {
              a = l.eventOffset > l.scrollbarOffset + l.scrollbarSize ? 1 : l.eventOffset < l.scrollbarOffset ? -1 : 0;h = Math.round(s.visible * 0.75) * a;m = l.eventOffset - l.scrollbarOffset - (f.stepScrolling ? a == 1 ? l.scrollbarSize : 0 : Math.round(l.scrollbarSize / 2));m = u[c]() + m / s.kx;
            }r.scrollTo = r.scrollTo || {};r.scrollTo[c] = f.stepScrolling ? u[c]() + h : m;if (f.stepScrolling) {
              o = function () {
                m = u[c]();clearInterval(g);clearTimeout(d);d = 0;g = 0;
              };d = setTimeout(function () {
                g = setInterval(v, 40);
              }, f.duration + 100);
            }setTimeout(function () {
              if (r.scrollTo) {
                u.animate(r.scrollTo, f.duration);r.scrollTo = null;
              }
            }, 1);return p(o, t);
          });s.scroller.on("mousedown.scrollbar", function (r) {
            if (r.which != i) return true;var o = r[n == "x" ? "pageX" : "pageY"];var a = u[c]();s.scrollbar.addClass("scroll-draggable");e(t).on("mousemove.scrollbar", function (e) {
              var t = parseInt((e[n == "x" ? "pageX" : "pageY"] - o) / s.kx, 10);u[c](a + t);
            });return p(function () {
              s.scrollbar.removeClass("scroll-draggable");m = u[c]();
            }, r);
          });
        }
      });e.each(l, function (e, t) {
        var n = "scroll-scroll" + e + "_visible";var r = e == "x" ? l.y : l.x;t.scrollbar.removeClass(n);r.scrollbar.removeClass(n);a.removeClass(n);
      });e.each(l, function (t, n) {
        e.extend(n, t == "x" ? { offset: parseInt(u.css("left"), 10) || 0, size: u.prop("scrollWidth"), visible: c.width() } : { offset: parseInt(u.css("top"), 10) || 0, size: u.prop("scrollHeight"), visible: c.height() });
      });var m = function m(t, n) {
        var r = "scroll-scroll" + t + "_visible";var i = t == "x" ? l.y : l.x;var f = parseInt(u.css(t == "x" ? "left" : "top"), 10) || 0;var h = n.size;var p = n.visible + f;n.isVisible = h - p > 1;if (n.isVisible) {
          n.scrollbar.addClass(r);i.scrollbar.addClass(r);a.addClass(r);
        } else {
          n.scrollbar.removeClass(r);i.scrollbar.removeClass(r);a.removeClass(r);
        }if (t == "y" && (n.isVisible || n.size < n.visible)) {
          a.css("height", p + o.scroll.height + s);
        }if (l.x.size != u.prop("scrollWidth") || l.y.size != u.prop("scrollHeight") || l.x.visible != c.width() || l.y.visible != c.height() || l.x.offset != (parseInt(u.css("left"), 10) || 0) || l.y.offset != (parseInt(u.css("top"), 10) || 0)) {
          e.each(l, function (t, n) {
            e.extend(n, t == "x" ? { offset: parseInt(u.css("left"), 10) || 0, size: u.prop("scrollWidth"), visible: c.width() } : { offset: parseInt(u.css("top"), 10) || 0, size: u.prop("scrollHeight"), visible: c.height() });
          });m(t == "x" ? "y" : "x", i);
        }
      };e.each(l, m);if (e.isFunction(f.onUpdate)) f.onUpdate.apply(this, [u]);e.each(l, function (e, t) {
        var n = e == "x" ? "left" : "top";var r = e == "x" ? "outerWidth" : "outerHeight";var i = e == "x" ? "width" : "height";var o = parseInt(u.css(n), 10) || 0;var a = t.size;var l = t.visible + o;var c = t.scrollbar.find(".scroll-element_size");c = c[r]() + (parseInt(c.css(n), 10) || 0);if (f.autoScrollSize) {
          t.scrollbarSize = parseInt(c * l / a, 10);t.scroller.css(i, t.scrollbarSize + s);
        }t.scrollbarSize = t.scroller[r]();t.kx = (c - t.scrollbarSize) / (a - l) || 1;t.maxScrollOffset = a - l;
      });u.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll");
    } };e.fn.scrollbar = function (t, n) {
    var r = this;if (t === "get") r = null;this.each(function () {
      var i = e(this);if (i.hasClass("scroll-wrapper") || i.get(0).nodeName == "body") {
        return true;
      }var s = i.data("scrollbar");if (s) {
        if (t === "get") {
          r = s;return false;
        }var u = typeof t == "string" && s[t] ? t : "init";s[u].apply(s, e.isArray(n) ? n : []);if (t === "destroy") {
          i.removeData("scrollbar");while (e.inArray(s, o.scrolls) >= 0) o.scrolls.splice(e.inArray(s, o.scrolls), 1);
        }
      } else {
        if (typeof t != "string") {
          s = new a(i, t);i.data("scrollbar", s);o.scrolls.push(s);
        }
      }return true;
    });return r;
  };e.fn.scrollbar.options = u;if (n.angular) {
    (function (e) {
      var t = e.module("jQueryScrollbar", []);t.directive("jqueryScrollbar", function () {
        return { link: function link(e, t) {
            t.scrollbar(e.options).on("$destroy", function () {
              t.scrollbar("destroy");
            });
          }, restring: "AC", scope: { options: "=jqueryScrollbar" } };
      });
    })(n.angular);
  }var f = 0,
      l = 0;var _c = function c(e) {
    var t, n, i, s, u, a, h;for (t = 0; t < o.scrolls.length; t++) {
      s = o.scrolls[t];n = s.container;i = s.options;u = s.wrapper;a = s.scrollx;h = s.scrolly;if (e || i.autoUpdate && u && u.is(":visible") && (n.prop("scrollWidth") != a.size || n.prop("scrollHeight") != h.size || u.width() != a.visible || u.height() != h.visible)) {
        s.init();if (r) {
          o.log({ scrollHeight: n.prop("scrollHeight") + ":" + s.scrolly.size, scrollWidth: n.prop("scrollWidth") + ":" + s.scrollx.size, visibleHeight: u.height() + ":" + s.scrolly.visible, visibleWidth: u.width() + ":" + s.scrollx.visible }, true);l++;
        }
      }
    }if (r && l > 10) {
      o.log("Scroll updates exceed 10");_c = function () {};
    } else {
      clearTimeout(f);f = setTimeout(_c, 300);
    }
  };
})(jQuery, document, window);
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function (t) {
  t.extend(t.fn, { validate: function validate(e) {
      if (!this.length) return (e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0);var i = t.data(this[0], "validator");return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
        i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0);
      }), this.submit(function (e) {
        function s() {
          var s;return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0;
        }return (i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1));
      })), i);
    }, valid: function valid() {
      if (t(this[0]).is("form")) return this.validate().form();var e = !0,
          i = t(this[0].form).validate();return (this.each(function () {
        e = e && i.element(this);
      }), e);
    }, removeAttrs: function removeAttrs(e) {
      var i = {},
          s = this;return (t.each(e.split(/\s/), function (t, e) {
        i[e] = s.attr(e), s.removeAttr(e);
      }), i);
    }, rules: function rules(e, i) {
      var s = this[0];if (e) {
        var r = t.data(s.form, "validator").settings,
            n = r.rules,
            a = t.validator.staticRules(s);switch (e) {case "add":
            t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));break;case "remove":
            if (!i) return (delete n[s.name], a);var u = {};return (t.each(i.split(/\s/), function (t, e) {
              u[e] = a[e], delete a[e];
            }), u);}
      }var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);if (o.required) {
        var l = o.required;delete o.required, o = t.extend({ required: l }, o);
      }return o;
    } }), t.extend(t.expr[":"], { blank: function blank(e) {
      return !t.trim("" + t(e).val());
    }, filled: function filled(e) {
      return !!t.trim("" + t(e).val());
    }, unchecked: function unchecked(e) {
      return !t(e).prop("checked");
    } }), t.validator = function (e, i) {
    this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init();
  }, t.validator.format = function (e, i) {
    return 1 === arguments.length ? function () {
      var i = t.makeArray(arguments);return (i.unshift(e), t.validator.format.apply(this, i));
    } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
      e = e.replace(RegExp("\\{" + t + "\\}", "g"), function () {
        return i;
      });
    }), e);
  }, t.extend(t.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: t([]), errorLabelContainer: t([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(t) {
        this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide());
      }, onfocusout: function onfocusout(t) {
        this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t);
      }, onkeyup: function onkeyup(t, e) {
        (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t);
      }, onclick: function onclick(t) {
        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
      }, highlight: function highlight(e, i, s) {
        "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s);
      }, unhighlight: function unhighlight(e, i, s) {
        "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s);
      } }, setDefaults: function setDefaults(e) {
      t.extend(t.validator.defaults, e);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: t.validator.format("Please enter no more than {0} characters."), minlength: t.validator.format("Please enter at least {0} characters."), rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."), range: t.validator.format("Please enter a value between {0} and {1}."), max: t.validator.format("Please enter a value less than or equal to {0}."), min: t.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function e(e) {
          var i = t.data(this[0].form, "validator"),
              s = "on" + e.type.replace(/^validate/, "");i.settings[s] && i.settings[s].call(i, this[0], e);
        }this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var i = this.groups = {};t.each(this.settings.groups, function (e, s) {
          "string" == typeof s && (s = s.split(/\s/)), t.each(s, function (t, s) {
            i[s] = e;
          });
        });var s = this.settings.rules;t.each(s, function (e, i) {
          s[e] = t.validator.normalizeRule(i);
        }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
      }, form: function form() {
        return (this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid());
      }, checkForm: function checkForm() {
        this.prepareForm();for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);return this.valid();
      }, element: function element(e) {
        e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);var i = this.check(e) !== !1;return (i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i);
      }, showErrors: function showErrors(e) {
        if (e) {
          t.extend(this.errorMap, e), this.errorList = [];for (var i in e) this.errorList.push({ message: e[i], element: this.findByName(i)[0] });this.successList = t.grep(this.successList, function (t) {
            return !(t.name in e);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(t) {
        var e = 0;for (var i in t) e++;return e;
      }, hideErrors: function hideErrors() {
        this.addWrapper(this.toHide).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      }, findLastActive: function findLastActive() {
        var e = this.lastActive;return e && 1 === t.grep(this.errorList, function (t) {
          return t.element.name === e.name;
        }).length && e;
      }, elements: function elements() {
        var e = this,
            i = {};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
          return (!this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0));
        });
      }, clean: function clean(e) {
        return t(e)[0];
      }, errors: function errors() {
        var e = this.settings.errorClass.replace(" ", ".");return t(this.settings.errorElement + "." + e, this.errorContext);
      }, reset: function reset() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(t) {
        this.reset(), this.toHide = this.errorsFor(t);
      }, elementValue: function elementValue(e) {
        var i = t(e).attr("type"),
            s = t(e).val();return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s;
      }, check: function check(e) {
        e = this.validationTargetFor(this.clean(e));var i,
            s = t(e).rules(),
            r = !1,
            n = this.elementValue(e);for (var a in s) {
          var u = { method: a, parameters: s[a] };try {
            if ((i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i)) {
              r = !0;continue;
            }if ((r = !1, "pending" === i)) return (this.toHide = this.toHide.not(this.errorsFor(e)), void 0);if (!i) return (this.formatAndAdd(e, u), !1);
          } catch (o) {
            throw (this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o);
          }
        }return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0);
      }, customDataMessage: function customDataMessage(e, i) {
        return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase());
      }, customMessage: function customMessage(t, e) {
        var i = this.settings.messages[t];return i && (i.constructor === String ? i : i[e]);
      }, findDefined: function findDefined() {
        for (var t = 0; arguments.length > t; t++) if (void 0 !== arguments[t]) return arguments[t];return void 0;
      }, defaultMessage: function defaultMessage(e, i) {
        return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>");
      }, formatAndAdd: function formatAndAdd(e, i) {
        var s = this.defaultMessage(e, i.method),
            r = /\$?\{(\d+)\}/g;"function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({ message: s, element: e }), this.errorMap[e.name] = s, this.submitted[e.name] = s;
      }, addWrapper: function addWrapper(t) {
        return (this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t);
      }, defaultShowErrors: function defaultShowErrors() {
        var t, e;for (t = 0; this.errorList[t]; t++) {
          var i = this.errorList[t];this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
        }if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return t(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(e, i) {
        var s = this.errorsFor(e);s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s);
      }, errorsFor: function errorsFor(e) {
        var i = this.idOrName(e);return this.errors().filter(function () {
          return t(this).attr("for") === i;
        });
      }, idOrName: function idOrName(t) {
        return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
      }, validationTargetFor: function validationTargetFor(t) {
        return (this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t);
      }, checkable: function checkable(t) {
        return /radio|checkbox/i.test(t.type);
      }, findByName: function findByName(e) {
        return t(this.currentForm).find("[name='" + e + "']");
      }, getLength: function getLength(e, i) {
        switch (i.nodeName.toLowerCase()) {case "select":
            return t("option:selected", i).length;case "input":
            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;}return e.length;
      }, depend: function depend(t, e) {
        return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0;
      }, dependTypes: { "boolean": function boolean(t) {
          return t;
        }, string: function string(e, i) {
          return !!t(e, i.form).length;
        }, "function": function _function(t, e) {
          return t(e);
        } }, optional: function optional(e) {
        var i = this.elementValue(e);return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch";
      }, startRequest: function startRequest(t) {
        this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0);
      }, stopRequest: function stopRequest(e, i) {
        this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(e) {
        return t.data(e, "previousValue") || t.data(e, "previousValue", { old: null, valid: !0, message: this.defaultMessage(e, "remote") });
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(e, i) {
      e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e);
    }, classRules: function classRules(e) {
      var i = {},
          s = t(e).attr("class");return (s && t.each(s.split(" "), function () {
        this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]);
      }), i);
    }, attributeRules: function attributeRules(e) {
      var i = {},
          s = t(e),
          r = s[0].getAttribute("type");for (var n in t.validator.methods) {
        var a;"required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0);
      }return (i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i);
    }, dataRules: function dataRules(e) {
      var i,
          s,
          r = {},
          n = t(e);for (i in t.validator.methods) s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);return r;
    }, staticRules: function staticRules(e) {
      var i = {},
          s = t.data(e.form, "validator");return (s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i);
    }, normalizeRules: function normalizeRules(e, i) {
      return (t.each(e, function (s, r) {
        if (r === !1) return (delete e[s], void 0);if (r.param || r.depends) {
          var n = !0;switch (typeof r.depends) {case "string":
              n = !!t(r.depends, i.form).length;break;case "function":
              n = r.depends.call(i, i);}n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s];
        }
      }), t.each(e, function (s, r) {
        e[s] = t.isFunction(r) ? r(i) : r;
      }), t.each(["minlength", "maxlength"], function () {
        e[this] && (e[this] = Number(e[this]));
      }), t.each(["rangelength", "range"], function () {
        var i;e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]));
      }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e);
    }, normalizeRule: function normalizeRule(e) {
      if ("string" == typeof e) {
        var i = {};t.each(e.split(/\s/), function () {
          i[this] = !0;
        }), e = i;
      }return e;
    }, addMethod: function addMethod(e, i, s) {
      t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e));
    }, methods: { required: function required(e, i, s) {
        if (!this.depend(s, i)) return "dependency-mismatch";if ("select" === i.nodeName.toLowerCase()) {
          var r = t(i).val();return r && r.length > 0;
        }return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0;
      }, email: function email(t, e) {
        return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t);
      }, url: function url(t, e) {
        return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t);
      }, date: function date(t, e) {
        return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t));
      }, dateISO: function dateISO(t, e) {
        return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
      }, number: function number(t, e) {
        return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
      }, digits: function digits(t, e) {
        return this.optional(e) || /^\d+$/.test(t);
      }, creditcard: function creditcard(t, e) {
        if (this.optional(e)) return "dependency-mismatch";if (/[^0-9 \-]+/.test(t)) return !1;var i = 0,
            s = 0,
            r = !1;t = t.replace(/\D/g, "");for (var n = t.length - 1; n >= 0; n--) {
          var a = t.charAt(n);s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r;
        }return 0 === i % 10;
      }, minlength: function minlength(e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);return this.optional(i) || r >= s;
      }, maxlength: function maxlength(e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);return this.optional(i) || s >= r;
      }, rangelength: function rangelength(e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);return this.optional(i) || r >= s[0] && s[1] >= r;
      }, min: function min(t, e, i) {
        return this.optional(e) || t >= i;
      }, max: function max(t, e, i) {
        return this.optional(e) || i >= t;
      }, range: function range(t, e, i) {
        return this.optional(e) || t >= i[0] && i[1] >= t;
      }, equalTo: function equalTo(e, i, s) {
        var r = t(s);return (this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          t(i).valid();
        }), e === r.val());
      }, remote: function remote(e, i, s) {
        if (this.optional(i)) return "dependency-mismatch";var r = this.previousValue(i);if ((this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && { url: s } || s, r.old === e)) return r.valid;r.old = e;var n = this;this.startRequest(i);var a = {};return (a[i.name] = e, t.ajax(t.extend(!0, { url: s, mode: "abort", port: "validate" + i.name, dataType: "json", data: a, success: function success(s) {
            n.settings.messages[i.name].remote = r.originalMessage;var a = s === !0 || "true" === s;if (a) {
              var u = n.formSubmitted;n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors();
            } else {
              var o = {},
                  l = s || n.defaultMessage(i, "remote");o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o);
            }r.valid = a, n.stopRequest(i, a);
          } }, s)), "pending");
      } } }), t.format = t.validator.format;
})(jQuery), (function (t) {
  var e = {};if (t.ajaxPrefilter) t.ajaxPrefilter(function (t, i, s) {
    var r = t.port;"abort" === t.mode && (e[r] && e[r].abort(), e[r] = s);
  });else {
    var i = t.ajax;t.ajax = function (s) {
      var r = ("mode" in s ? s : t.ajaxSettings).mode,
          n = ("port" in s ? s : t.ajaxSettings).port;return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments);
    };
  }
})(jQuery), (function (t) {
  t.extend(t.fn, { validateDelegate: function validateDelegate(e, i, s) {
      return this.bind(i, function (i) {
        var r = t(i.target);return r.is(e) ? s.apply(r, arguments) : void 0;
      });
    } });
})(jQuery);
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: IT (Italian; Italiano)
 */
$.extend($.validator.messages, {
  required: "Campo obbligatorio.",
  remote: "Controlla questo campo.",
  email: "Inserisci un indirizzo email valido.",
  url: "Inserisci un indirizzo web valido.",
  date: "Inserisci una data valida.",
  dateISO: "Inserisci una data valida (ISO).",
  number: "Inserisci un numero valido.",
  digits: "Inserisci solo numeri.",
  creditcard: "Inserisci un numero di carta di credito valido.",
  equalTo: "Il valore non corrisponde.",
  extension: "Inserisci un valore con un&apos;estensione valida.",
  maxlength: $.validator.format("Non inserire pi&ugrave; di {0} caratteri."),
  minlength: $.validator.format("Inserisci almeno {0} caratteri."),
  rangelength: $.validator.format("Inserisci un valore compreso tra {0} e {1} caratteri."),
  range: $.validator.format("Inserisci un valore compreso tra {0} e {1}."),
  max: $.validator.format("Inserisci un valore minore o uguale a {0}."),
  min: $.validator.format("Inserisci un valore maggiore o uguale a {0}."),
  nifES: "Inserisci un NIF valido.",
  nieES: "Inserisci un NIE valido.",
  cifES: "Inserisci un CIF valido."
});

/*! pace 0.4.15 */
(function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O = [].slice,
      P = ({}).hasOwnProperty,
      Q = function Q(a, b) {
    function c() {
      this.constructor = a;
    }for (var d in b) P.call(b, d) && (a[d] = b[d]);return (c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a);
  },
      R = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;return -1;
  };s = { catchupTime: 500, initialRate: 0.03, minTime: 500, ghostTime: 250, maxProgressPerFrame: 10, easeFactor: 1.25, startOnPageLoad: !0, restartOnPushState: !0, restartOnRequestAfter: 500, target: "body", elements: { checkInterval: 100, selectors: ["body"] }, eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 }, ajax: { trackMethods: ["GET"], trackWebSockets: !1 } }, z = function () {
    var a;return null != (a = "undefined" != typeof performance && null !== performance ? "function" == typeof performance.now ? performance.now() : void 0 : void 0) ? a : +new Date();
  }, B = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, r = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == B && (B = function (a) {
    return setTimeout(a, 50);
  }, r = function (a) {
    return clearTimeout(a);
  }), D = function (a) {
    var b, c;return (b = z(), c = function () {
      var d;return (d = z() - b, b = z(), a(d, function () {
        return B(c);
      }));
    }, c());
  }, C = function () {
    var a, b, c;return (c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? O.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]);
  }, t = function () {
    var a, b, c, d, e, f, g;for (b = arguments[0], d = 2 <= arguments.length ? O.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) if (c = d[f]) for (a in c) P.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? t(b[a], e) : b[a] = e);return b;
  }, o = function (a) {
    var b, c, d, e, f;for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;return c / b;
  }, v = function (a, b) {
    var c, d, e;if ((null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]"))) {
      if ((c = e.getAttribute("data-pace-" + a), !b)) return c;try {
        return JSON.parse(c);
      } catch (f) {
        return (d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0);
      }
    }
  }, null == window.Pace && (window.Pace = {}), A = Pace.options = t(s, window.paceOptions, v()), h = (function (a) {
    function b() {
      return M = b.__super__.constructor.apply(this, arguments);
    }return (Q(b, a), b);
  })(Error), b = (function () {
    function a() {
      this.progress = 0;
    }return (a.prototype.getElement = function () {
      var a;if (null == this.el) {
        if ((a = document.querySelector(A.target), !a)) throw new h();this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace("pace-done", ""), document.body.className += " pace-running", this.el.innerHTML = "<div class=\"pace-progress\">\n  <div class=\"pace-progress-inner\"></div>\n</div>\n<div class=\"pace-activity\"></div>", null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
      }return this.el;
    }, a.prototype.finish = function () {
      var a;return (a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done");
    }, a.prototype.update = function (a) {
      return (this.progress = a, this.render());
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (a) {
        h = a;
      }return this.el = void 0;
    }, a.prototype.render = function () {
      var a, b;return null == document.querySelector(A.target) ? !1 : (a = this.getElement(), a.children[0].style.width = "" + this.progress + "%", (!this.lastRenderedProgress || 0 | (this.lastRenderedProgress | 0 !== this.progress)) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? b = "99" : (b = this.progress < 10 ? "0" : "", b += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + b)), this.lastRenderedProgress = this.progress);
    }, a.prototype.done = function () {
      return this.progress >= 100;
    }, a);
  })(), g = (function () {
    function a() {
      this.bindings = {};
    }return (a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));return g;
      }
    }, a.prototype.on = function (a, b) {
      var c;return (null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b));
    }, a);
  })(), J = window.XMLHttpRequest, I = window.XDomainRequest, H = window.WebSocket, u = function (a, b) {
    var c, d, e, f;f = [];for (d in b.prototype) try {
      e = b.prototype[d], null == a[d] && "function" != typeof e ? f.push(a[d] = e) : f.push(void 0);
    } catch (g) {
      c = g;
    }return f;
  }, i = (function (a) {
    function b() {
      var a,
          c = this;b.__super__.constructor.apply(this, arguments), a = function (a) {
        var b;return (b = a.open, a.open = function (d, e) {
          var f;return (f = (null != d ? d : "GET").toUpperCase(), R.call(A.ajax.trackMethods, f) >= 0 && c.trigger("request", { type: d, url: e, request: a }), b.apply(a, arguments));
        });
      }, window.XMLHttpRequest = function (b) {
        var c;return (c = new J(b), a(c), c);
      }, u(window.XMLHttpRequest, J), null != I && (window.XDomainRequest = function () {
        var b;return (b = new I(), a(b), b);
      }, u(window.XDomainRequest, I)), null != H && A.ajax.trackWebSockets && (window.WebSocket = function (a, b) {
        var d;return (d = new H(a, b), c.trigger("request", { type: "socket", url: a, protocols: b, request: d }), d);
      }, u(window.WebSocket, H));
    }return (Q(b, a), b);
  })(g), K = null, w = function () {
    return (null == K && (K = new i()), K);
  }, A.restartOnRequestAfter !== !1 && w().on("request", function (b) {
    var c, d, e;return (e = b.type, d = b.request, Pace.running ? void 0 : (c = arguments, setTimeout(function () {
      var b, f, g, h, i, j, k;if (f = "socket" === e ? d.readyState < 2 : 0 < (i = d.readyState) && 4 > i) {
        for (Pace.restart(), j = Pace.sources, k = [], g = 0, h = j.length; h > g; g++) {
          if ((b = j[g], b instanceof a)) {
            b.watch.apply(b, c);break;
          }k.push(void 0);
        }return k;
      }
    }, A.restartOnRequestAfter)));
  }), a = (function () {
    function a() {
      var a = this;this.elements = [], w().on("request", function () {
        return a.watch.apply(a, arguments);
      });
    }return (a.prototype.watch = function (a) {
      var b, c, d;return (d = a.type, b = a.request, c = "socket" === d ? new l(b) : new m(b), this.elements.push(c));
    }, a);
  })(), m = (function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = this;if ((this.progress = 0, null != window.ProgressEvent)) for (c = null, a.addEventListener("progress", function (a) {
        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
      }), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function () {
        return h.progress = 100;
      });else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;return (0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0);
      };
    }return a;
  })(), l = (function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f = this;for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function () {
        return f.progress = 100;
      });
    }return a;
  })(), d = (function () {
    function a(a) {
      var b, c, d, f;for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b));
    }return a;
  })(), e = (function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check();
    }return (a.prototype.check = function () {
      var a = this;return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check();
      }, A.elements.checkInterval);
    }, a.prototype.done = function () {
      return this.progress = 100;
    }, a);
  })(), c = (function () {
    function a() {
      var a,
          b,
          c = this;this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return (null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0);
      };
    }return (a.prototype.states = { loading: 0, interactive: 50, complete: 100 }, a);
  })(), f = (function () {
    function a() {
      var a,
          b,
          c,
          d,
          e,
          f = this;this.progress = 0, a = 0, e = [], d = 0, c = z(), b = setInterval(function () {
        var g;return (g = z() - c - 50, c = z(), e.push(g), e.length > A.eventLag.sampleCount && e.shift(), a = o(e), ++d >= A.eventLag.minSamples && a < A.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3)));
      }, 50);
    }return a;
  })(), k = (function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = A.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = C(this.source, "progress"));
    }return (a.prototype.tick = function (a, b) {
      var c;return (null == b && (b = C(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / A.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, A.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + A.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress);
    }, a);
  })(), F = null, E = null, p = null, G = null, n = null, q = null, Pace.running = !1, x = function () {
    return A.restartOnPushState ? Pace.restart() : void 0;
  }, null != window.history.pushState && (L = window.history.pushState, window.history.pushState = function () {
    return (x(), L.apply(window.history, arguments));
  }), null != window.history.replaceState && (N = window.history.replaceState, window.history.replaceState = function () {
    return (x(), N.apply(window.history, arguments));
  }), j = { ajax: a, elements: d, document: c, eventLag: f }, (y = function () {
    var a, c, d, e, f, g, h, i, l;for (Pace.sources = F = [], h = ["ajax", "elements", "document", "eventLag"], d = 0, f = h.length; f > d; d++) c = h[d], A[c] !== !1 && F.push(new j[c](A[c]));for (l = null != (i = A.extraSources) ? i : [], e = 0, g = l.length; g > e; e++) a = l[e], F.push(new a(A));return (Pace.bar = p = new b(), E = [], G = new k());
  })(), Pace.stop = function () {
    return (Pace.running = !1, p.destroy(), q = !0, null != n && ("function" == typeof r && r(n), n = null), y());
  }, Pace.restart = function () {
    return (Pace.stop(), Pace.start());
  }, Pace.go = function () {
    return (Pace.running = !0, p.render(), q = !1, n = D(function (a, b) {
      var c, d, e, f, g, h, i, j, l, m, n, o, r, s, t, u, v, w;for (j = 100 - p.progress, d = r = 0, e = !0, h = s = 0, u = F.length; u > s; h = ++s) for (n = F[h], m = null != E[h] ? E[h] : E[h] = [], g = null != (w = n.elements) ? w : [n], i = t = 0, v = g.length; v > t; i = ++t) f = g[i], l = null != m[i] ? m[i] : m[i] = new k(f), e &= l.done, l.done || (d++, r += l.tick(a));return (c = r / d, p.update(G.tick(a, c)), o = z(), p.done() || e || q ? (p.update(100), setTimeout(function () {
        return (p.finish(), Pace.running = !1);
      }, Math.max(A.ghostTime, Math.min(A.minTime, z() - o)))) : b());
    }));
  }, Pace.start = function (a) {
    t(A, a), Pace.running = !0;try {
      p.render();
    } catch (b) {
      h = b;
    }return document.querySelector(".pace") ? Pace.go() : setTimeout(Pace.start, 50);
  }, "function" == typeof define && define.amd ? define(function () {
    return Pace;
  }) : "object" == typeof exports ? module.exports = Pace : A.startOnPageLoad && Pace.start();
}).call(undefined);
!(function (l) {
  l.fn.animateNumbers = function (e, t, n, i) {
    return this.each(function () {
      var o = l(this),
          a = parseInt(o.text().replace(/,/g, ""));t = void 0 === t ? !0 : t, l({ value: a }).animate({ value: e }, { duration: void 0 == n ? 1000 : n, easing: void 0 == i ? "swing" : i, step: function step() {
          o.text(Math.floor(this.value)), t && o.text(o.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }, complete: function complete() {
          parseInt(o.text()) !== e && (o.text(e), t && o.text(o.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")));
        } });
    });
  };
})(jQuery);
//# sourceMappingURL=core.js.map