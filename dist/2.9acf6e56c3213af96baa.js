(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        78: function(e, t, n) {
            e.exports = n.p + 'no_image_found.png';
        },
        79: function(e, t, n) {
            'use strict';
            n.r(t);
            n(76), n(77), n(75);
            var r = n(78),
                o = n.n(r),
                a = window.navigator.userAgent.toLowerCase(),
                s = /trident/gi.test(a) || /msie/gi.test(a);
            function c(e, t) {
                var n,
                    r,
                    a,
                    c = document.getElementById('main-container');
                if ('news' === e) {
                    var i = (function(e) {
                        return e.map(function(e) {
                            return {
                                title: e.title || '',
                                description: e.description || '',
                                urlToImage: e.urlToImage || o.a,
                                url: e.url || '',
                            };
                        });
                    })(t);
                    c.appendChild(
                        ((r = i),
                        (a = document.createElement('div')).setAttribute(
                            'class',
                            'news-list-container'
                        ),
                        r.map(function(e) {
                            var t, n;
                            a.appendChild(
                                ((t = e),
                                (n = document.createElement(
                                    'div'
                                )).setAttribute('class', 'news-item-container'),
                                s && n.classList.add('ie-is-pain'),
                                (n.innerHTML = '<img class="news-image" src="'
                                    .concat(t.urlToImage, '" alt="')
                                    .concat(
                                        t.title,
                                        '">\n        <h4 class="news-title">'
                                    )
                                    .concat(
                                        t.title,
                                        '</h4>\n        <p class="news-description">'
                                    )
                                    .concat(
                                        t.description,
                                        '</p>\n        <a class="news-link" href="'
                                    )
                                    .concat(t.url, '">read more ...</a>')),
                                n)
                            );
                        }),
                        a)
                    );
                } else
                    c.appendChild(
                        (((n = document.createElement('div')).innerHTML =
                            '<h2 class="error-message">Sorry, something went wrong;( Maybe choose another news portal</h2>'),
                        n)
                    );
            }
            function i() {
                var e = document.getElementById('main-container');
                e.hasChildNodes &&
                    e.childNodes.forEach(function(e) {
                        return e.parentNode.removeChild(e);
                    });
            }
            function u(e, t, n, r, o, a, s) {
                try {
                    var c = e[a](s),
                        i = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(i) : Promise.resolve(i).then(r, o);
            }
            function p() {
                return l.apply(this, arguments);
            }
            function l() {
                var e;
                return (
                    (e = regeneratorRuntime.mark(function e() {
                        var t,
                            n,
                            r,
                            o = arguments;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (t =
                                                    o.length > 0 &&
                                                    void 0 !== o[0]
                                                        ? o[0]
                                                        : 'google-news'),
                                                (e.prev = 1),
                                                (e.next = 4),
                                                fetch(
                                                    'https://newsapi.org/v1/articles?source='.concat(
                                                        t,
                                                        '&apiKey=8d9cd797251f4fc4a24f983a029f67cc'
                                                    )
                                                )
                                            );
                                        case 4:
                                            if (200 === (n = e.sent).status) {
                                                e.next = 7;
                                                break;
                                            }
                                            throw new Error(
                                                'Error : '
                                                    .concat(
                                                        n.statusText,
                                                        ', status: '
                                                    )
                                                    .concat(n.status)
                                            );
                                        case 7:
                                            return (e.next = 9), n.json();
                                        case 9:
                                            if (
                                                'error' !==
                                                    (r = e.sent).status ||
                                                r.articles
                                            ) {
                                                e.next = 12;
                                                break;
                                            }
                                            throw new Error(
                                                'Error : '.concat(r.message)
                                            );
                                        case 12:
                                            i(),
                                                c('news', r.articles),
                                                (e.next = 21);
                                            break;
                                        case 16:
                                            (e.prev = 16),
                                                (e.t0 = e.catch(1)),
                                                i(),
                                                c('error'),
                                                console.log(e.t0.message);
                                        case 21:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            this,
                            [[1, 16]]
                        );
                    })),
                    (l = function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var a = e.apply(t, n);
                            function s(e) {
                                u(a, r, o, s, c, 'next', e);
                            }
                            function c(e) {
                                u(a, r, o, s, c, 'throw', e);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            n.d(t, 'getNews', function() {
                return p;
            }),
                'function' != typeof NodeList.prototype.forEach &&
                    'function' == typeof Array.prototype.forEach &&
                    (NodeList.prototype.forEach = Array.prototype.forEach);
        },
    },
]);
