!(function(e) {
    function t(t) {
        for (
            var r, u, a = t[0], c = t[1], l = t[2], f = 0, d = [];
            f < a.length;
            f++
        )
            (u = a[f]), o[u] && d.push(o[u][0]), (o[u] = 0);
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (s && s(t); d.length; ) d.shift()();
        return i.push.apply(i, l || []), n();
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== o[c] && (r = !1);
            }
            r && (i.splice(t--, 1), (e = u((u.s = n[0]))));
        }
        return e;
    }
    var r = {},
        o = { 1: 0 },
        i = [];
    function u(t) {
        if (r[t]) return r[t].exports;
        var n = (r[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
    }
    (u.e = function(e) {
        var t = [],
            n = o[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise(function(t, r) {
                    n = o[e] = [t, r];
                });
                t.push((n[2] = r));
                var i,
                    a = document.getElementsByTagName('head')[0],
                    c = document.createElement('script');
                (c.charset = 'utf-8'),
                    (c.timeout = 120),
                    u.nc && c.setAttribute('nonce', u.nc),
                    (c.src = (function(e) {
                        return (
                            u.p + '' + ({}[e] || e) + '.012e27d2325113db2418.js'
                        );
                    })(e)),
                    (i = function(t) {
                        (c.onerror = c.onload = null), clearTimeout(l);
                        var n = o[e];
                        if (0 !== n) {
                            if (n) {
                                var r =
                                        t &&
                                        ('load' === t.type
                                            ? 'missing'
                                            : t.type),
                                    i = t && t.target && t.target.src,
                                    u = new Error(
                                        'Loading chunk ' +
                                            e +
                                            ' failed.\n(' +
                                            r +
                                            ': ' +
                                            i +
                                            ')'
                                    );
                                (u.type = r), (u.request = i), n[1](u);
                            }
                            o[e] = void 0;
                        }
                    });
                var l = setTimeout(function() {
                    i({ type: 'timeout', target: c });
                }, 12e4);
                (c.onerror = c.onload = i), a.appendChild(c);
            }
        return Promise.all(t);
    }),
        (u.m = e),
        (u.c = r),
        (u.d = function(e, t, n) {
            u.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (u.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (u.t = function(e, t) {
            if ((1 & t && (e = u(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (u.r(n),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && 'string' != typeof e)
            )
                for (var r in e)
                    u.d(
                        n,
                        r,
                        function(t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return n;
        }),
        (u.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return u.d(t, 'a', t), t;
        }),
        (u.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (u.p = './'),
        (u.oe = function(e) {
            throw (console.error(e), e);
        });
    var a = (window.webpackJsonp = window.webpackJsonp || []),
        c = a.push.bind(a);
    (a.push = t), (a = a.slice());
    for (var l = 0; l < a.length; l++) t(a[l]);
    var s = c;
    i.push([34, 0]), n();
})({
    34: function(e, t, n) {
        n(35), (e.exports = n(74));
    },
    36: function(e, t, n) {
        var r = n(37);
        'string' == typeof r && (r = [[e.i, r, '']]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(20)(r, o);
        r.locals && (e.exports = r.locals);
    },
    37: function(e, t, n) {},
    39: function(e, t, n) {
        var r = n(40);
        'string' == typeof r && (r = [[e.i, r, '']]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(20)(r, o);
        r.locals && (e.exports = r.locals);
    },
    40: function(e, t, n) {},
    74: function(e, t, n) {
        'use strict';
        n.r(t);
        n(36), n(39);
        n(41),
            document
                .getElementById('nav-list')
                .addEventListener('click', function(e) {
                    var t = e.target.getAttribute('data-source');
                    (function(e) {
                        document.querySelector('.nav-item.active') &&
                            document
                                .querySelector('.nav-item.active')
                                .classList.remove('active'),
                            e.classList.add('active');
                    })(e.target),
                        Promise.all([n.e(0), n.e(2)])
                            .then(n.bind(null, 79))
                            .then(function(e) {
                                return e.getNews(t);
                            });
                });
    },
});
