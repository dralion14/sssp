(function(e, undefined) {
    var t, n, r = typeof undefined, i = e.location, o = e.document, s = o.documentElement, a = e.jQuery, u = e.$, l = {}, c = [], p = "2.0.3", f = c.concat, h = c.push, d = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, x = function(e, n) {
        return new x.fn.init(e,n,t)
    }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^-ms-/, N = /-([\da-z])/gi, E = function(e, t) {
        return t.toUpperCase()
    }, S = function() {
        o.removeEventListener("DOMContentLoaded", S, !1),
        e.removeEventListener("load", S, !1),
        x.ready()
    };
    x.fn = x.prototype = {
        jquery: p,
        constructor: x,
        init: function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e),
                !r || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof x ? t[0] : t,
                    x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)),
                    C.test(r[1]) && x.isPlainObject(t))
                        for (r in t)
                            x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                ;return i = o.getElementById(r[2]),
                i && i.parentNode && (this.length = 1,
                this[0] = i),
                this.context = o,
                this.selector = e,
                this
            }
            ;return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector,
            this.context = e.context),
            x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    },
    x.fn.init.prototype = x.fn,
    x.extend = x.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[1] || {},
        a = 2),
        "object" == typeof s || x.isFunction(s) || (s = {}),
        u === a && (s = this,
        --a); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    r = e[t],
                    s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1,
                    o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {},
                    s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u),
            t && e.jQuery === x && (e.jQuery = a),
            x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0,
            e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]),
            x.fn.trigger && x(o).trigger("ready").off("ready")))
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            if ("object" !== x.type(e) || e.nodeType || x.isWindow(e))
                return !1;
            try {
                if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            ;return !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || o;
            var r = C.exec(e)
              , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i),
            i && x(i).remove(),
            x.merge([], r.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function(e) {
            var t, n;
            if (!e || "string" != typeof e)
                return null;
            try {
                n = new DOMParser(),
                t = n.parseFromString(e, "text/xml")
            } catch (r) {
                t = undefined
            }
            ;return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e),
            t
        },
        noop: function() {},
        globalEval: function(e) {
            var t, n = eval;
            e = x.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"),
            t.text = e,
            o.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(k, "ms-").replace(N, E)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, s = j(e);
            if (n) {
                if (s) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
            } else if (s) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : v.call(e)
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : g.call(t, e, n)
        },
        merge: function(e, t) {
            var n = t.length
              , r = e.length
              , i = 0;
            if ("number" == typeof n) {
                for (; n > i; i++)
                    e[r++] = t[i]
            } else
                while (t[i] !== undefined)
                    e[r++] = t[i++];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, s = e.length;
            for (n = !!n; s > o; o++)
                r = !!t(e[o], o),
                n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, s = j(e), a = [];
            if (s) {
                for (; o > i; i++)
                    r = t(e[i], i, n),
                    null != r && (a[a.length] = r)
            } else
                for (i in e)
                    r = t(e[i], i, n),
                    null != r && (a[a.length] = r);
            return f.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
            x.isFunction(e) ? (r = d.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(d.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || x.guid++,
            i) : undefined
        },
        access: function(e, t, n, r, i, o, s) {
            var a = 0
              , u = e.length
              , l = null == n;
            if ("object" === x.type(n)) {
                i = !0;
                for (a in n)
                    x.access(e, t, a, n[a], !0, o, s)
            } else if (r !== undefined && (i = !0,
            x.isFunction(r) || (s = !0),
            l && (s ? (t.call(e, r),
            t = null) : (l = t,
            t = function(e, t, n) {
                return l.call(x(e), n)
            }
            )),
            t))
                for (; u > a; a++)
                    t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        now: Date.now,
        swap: function(e, t, n, r) {
            var i, o, s = {};
            for (o in t)
                s[o] = e.style[o],
                e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = s[o];
            return i
        }
    }),
    x.ready.promise = function(t) {
        return n || (n = x.Deferred(),
        "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1),
        e.addEventListener("load", S, !1))),
        n.promise(t)
    }
    ,
    x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    })
    function j(e) {
        var t = e.length
          , n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    ;t = x(o),
    function(e, undefined) {
        var t, n, r, i, o, s, a, u, l, c, p, f, h, d, g, m, y, v = "sizzle" + -new Date(), b = e.document, w = 0, T = 0, C = st(), k = st(), N = st(), E = !1, S = function(e, t) {
            return e === t ? (E = !0,
            0) : 0
        }, j = typeof undefined, D = 1 << 31, A = {}.hasOwnProperty, L = [], q = L.pop, H = L.push, O = L.push, F = L.slice, P = L.indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", $ = W.replace("w", "w#"), B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]", I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = RegExp("^" + M + "*," + M + "*"), X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = RegExp(M + "*[+~]"), Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"), V = RegExp(I), G = RegExp("^" + $ + "$"), J = {
            ID: RegExp("^#(" + W + ")"),
            CLASS: RegExp("^\\.(" + W + ")"),
            TAG: RegExp("^(" + W.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + B),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: RegExp("^(?:" + R + ")$", "i"),
            needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /^(?:input|select|textarea|button)$/i, et = /^h\d$/i, tt = /'|\\/g, nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), rt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            O.apply(L = F.call(b.childNodes), b.childNodes),
            L[b.childNodes.length].nodeType
        } catch (it) {
            O = {
                apply: L.length ? function(e, t) {
                    H.apply(e, F.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function ot(e, t, r, i) {
            var o, s, a, u, l, f, g, m, x, w;
            if ((t ? t.ownerDocument || t : b) !== p && c(t),
            t = t || p,
            r = r || [],
            !e || "string" != typeof e)
                return r;
            if (1 !== (u = t.nodeType) && 9 !== u)
                return [];
            if (h && !i) {
                if (o = K.exec(e))
                    if (a = o[1]) {
                        if (9 === u) {
                            if (s = t.getElementById(a),
                            !s || !s.parentNode)
                                return r;
                            if (s.id === a)
                                return r.push(s),
                                r
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a)
                            return r.push(s),
                            r
                    } else {
                        if (o[2])
                            return O.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return O.apply(r, t.getElementsByClassName(a)),
                            r
                    }
                ;if (n.qsa && (!d || !d.test(e))) {
                    if (m = g = v,
                    x = t,
                    w = 9 === u && e,
                    1 === u && "object" !== t.nodeName.toLowerCase()) {
                        f = gt(e),
                        (g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        l = f.length;
                        while (l--)
                            f[l] = m + mt(f[l]);
                        x = U.test(e) && t.parentNode || t,
                        w = f.join(",")
                    }
                    ;if (w)
                        try {
                            return O.apply(r, x.querySelectorAll(w)),
                            r
                        } catch (T) {} finally {
                            g || t.removeAttribute("id")
                        }
                }
            }
            ;return kt(e.replace(z, "$1"), t, r, i)
        }
        function st() {
            var e = []
            function t(n, r) {
                return e.push(n += " ") > i.cacheLength && delete t[e.shift()],
                t[n] = r
            }
            ;return t
        }
        function at(e) {
            return e[v] = !0,
            e
        }
        function ut(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function lt(e, t) {
            var n = e.split("|")
              , r = e.length;
            while (r--)
                i.attrHandle[n[r]] = t
        }
        function ct(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return at(function(t) {
                return t = +t,
                at(function(n, r) {
                    var i, o = e([], n.length, t), s = o.length;
                    while (s--)
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        ;s = ot.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        n = ot.support = {},
        c = ot.setDocument = function(e) {
            var t = e ? e.ownerDocument || e : b
              , r = t.defaultView;
            return t !== p && 9 === t.nodeType && t.documentElement ? (p = t,
            f = t.documentElement,
            h = !s(t),
            r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function() {
                c()
            }),
            n.attributes = ut(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ut(function(e) {
                return e.appendChild(t.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            n.getById = ut(function(e) {
                return f.appendChild(e).id = v,
                !t.getElementsByName || !t.getElementsByName(v).length
            }),
            n.getById ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            i.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete i.find.ID,
            i.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                ;return o
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined
            }
            ,
            g = [],
            d = [],
            (n.qsa = Q.test(t.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll(":checked").length || d.push(":checked")
            }),
            ut(function(e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"),
                e.appendChild(n).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                d.push(",.*:")
            })),
            (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function(e) {
                n.disconnectedMatch = m.call(e, "div"),
                m.call(e, "[s!='']:x"),
                g.push("!=", I)
            }),
            d = d.length && RegExp(d.join("|")),
            g = g.length && RegExp(g.join("|")),
            y = Q.test(f.contains) || f.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            S = f.compareDocumentPosition ? function(e, r) {
                if (e === r)
                    return E = !0,
                    0;
                var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
                return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
            : function(e, n) {
                var r, i = 0, o = e.parentNode, s = n.parentNode, a = [e], u = [n];
                if (e === n)
                    return E = !0,
                    0;
                if (!o || !s)
                    return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
                if (o === s)
                    return ct(e, n);
                r = e;
                while (r = r.parentNode)
                    a.unshift(r);
                r = n;
                while (r = r.parentNode)
                    u.unshift(r);
                while (a[i] === u[i])
                    i++;
                return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0
            }
            ,
            t) : p
        }
        ,
        ot.matches = function(e, t) {
            return ot(e, null, null, t)
        }
        ,
        ot.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && c(e),
            t = t.replace(Y, "='$1']"),
            !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            ;return ot(t, p, null, [e]).length > 0
        }
        ,
        ot.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && c(e),
            y(e, t)
        }
        ,
        ot.attr = function(e, t) {
            (e.ownerDocument || e) !== p && c(e);
            var r = i.attrHandle[t.toLowerCase()]
              , o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
            return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o
        }
        ,
        ot.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ot.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (E = !n.detectDuplicates,
            l = !n.sortStable && e.slice(0),
            e.sort(S),
            E) {
                while (t = e[o++])
                    t === e[o] && (i = r.push(o));
                while (i--)
                    e.splice(r[i], 1)
            }
            ;return e
        }
        ,
        o = ot.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r]; r++)
                    n += o(t);
            return n
        }
        ,
        i = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: J,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(nt, rt),
                    e[3] = (e[4] || e[5] || "").replace(nt, rt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = C[e + " "];
                    return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ot.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, p, f, h, d, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, y = a && t.nodeName.toLowerCase(), x = !u && !a;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    d = g = "only" === e && !d && "nextSibling"
                                }
                                ;return !0
                            }
                            ;if (d = [s ? m.firstChild : m.lastChild],
                            s && x) {
                                c = m[v] || (m[v] = {}),
                                l = c[e] || [],
                                h = l[0] === w && l[1],
                                f = l[0] === w && l[2],
                                p = h && m.childNodes[h];
                                while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [w, h, f];
                                        break
                                    }
                            } else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w) {
                                f = l[1]
                            } else
                                while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
                                    if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [w, f]),
                                    p === t))
                                        break;
                            return f -= i,
                            f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                        var i, o = r(e, t), s = o.length;
                        while (s--)
                            i = P.call(e, o[s]),
                            e[i] = !(n[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: at(function(e) {
                    var t = []
                      , n = []
                      , r = a(e.replace(z, "$1"));
                    return r[v] ? at(function(e, t, n, i) {
                        var o, s = r(e, null, i, []), a = e.length;
                        while (a--)
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: at(function(e) {
                    return function(t) {
                        return ot(e, t).length > 0
                    }
                }),
                contains: at(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }),
                lang: at(function(e) {
                    return G.test(e || "") || ot.error("unsupported lang: " + e),
                    e = e.replace(nt, rt).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === f
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return et.test(e.nodeName)
                },
                input: function(e) {
                    return Z.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r; )
                        e.push(r);
                    return e
                })
            }
        },
        i.pseudos.nth = i.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = pt(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = ft(t)
        function dt() {}
        ;dt.prototype = i.filters = i.pseudos,
        i.setFilters = new dt()
        function gt(e, t) {
            var n, r, o, s, a, u, l, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            a = e,
            u = [],
            l = i.preFilter;
            while (a) {
                (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a),
                u.push(o = [])),
                n = !1,
                (r = X.exec(a)) && (n = r.shift(),
                o.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }),
                a = a.slice(n.length));
                for (s in i.filter)
                    !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(),
                    o.push({
                        value: n,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            ;return t ? a.length : a ? ot.error(e) : k(e, u).slice(0)
        }
        function mt(e) {
            var t = 0
              , n = e.length
              , r = "";
            for (; n > t; t++)
                r += e[t].value;
            return r
        }
        function yt(e, t, n) {
            var i = t.dir
              , o = n && "parentNode" === i
              , s = T++;
            return t.first ? function(t, n, r) {
                while (t = t[i])
                    if (1 === t.nodeType || o)
                        return e(t, n, r)
            }
            : function(t, n, a) {
                var u, l, c, p = w + " " + s;
                if (a) {
                    while (t = t[i])
                        if ((1 === t.nodeType || o) && e(t, n, a))
                            return !0
                } else
                    while (t = t[i])
                        if (1 === t.nodeType || o)
                            if (c = t[v] || (t[v] = {}),
                            (l = c[i]) && l[0] === p) {
                                if ((u = l[1]) === !0 || u === r)
                                    return u === !0
                            } else if (l = c[i] = [p],
                            l[1] = e(t, n, a) || r,
                            l[1] === !0)
                                return !0
            }
        }
        function vt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function xt(e, t, n, r, i) {
            var o, s = [], a = 0, u = e.length, l = null != t;
            for (; u > a; a++)
                (o = e[a]) && (!n || n(o, r, i)) && (s.push(o),
                l && t.push(a));
            return s
        }
        function bt(e, t, n, r, i, o) {
            return r && !r[v] && (r = bt(r)),
            i && !i[v] && (i = bt(i, o)),
            at(function(o, s, a, u) {
                var l, c, p, f = [], h = [], d = s.length, g = o || Ct(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : xt(g, f, e, a, u), y = n ? i || (o ? e : d || r) ? [] : s : m;
                if (n && n(m, y, a, u),
                r) {
                    l = xt(y, h),
                    r(l, [], a, u),
                    c = l.length;
                    while (c--)
                        (p = l[c]) && (y[h[c]] = !(m[h[c]] = p))
                }
                ;if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = y.length;
                            while (c--)
                                (p = y[c]) && l.push(m[c] = p);
                            i(null, y = [], l, u)
                        }
                        ;c = y.length;
                        while (c--)
                            (p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p))
                    }
                } else
                    y = xt(y === s ? y.splice(d, y.length) : y),
                    i ? i(null, s, y, u) : O.apply(s, y)
            })
        }
        function wt(e) {
            var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = yt(function(e) {
                return e === t
            }, a, !0), p = yt(function(e) {
                return P.call(t, e) > -1
            }, a, !0), f = [function(e, n, r) {
                return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }
            ];
            for (; o > l; l++)
                if (n = i.relative[e[l].type]) {
                    f = [yt(vt(f), n)]
                } else {
                    if (n = i.filter[e[l].type].apply(null, e[l].matches),
                    n[v]) {
                        for (r = ++l; o > r; r++)
                            if (i.relative[e[r].type])
                                break;
                        return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e))
                    }
                    ;f.push(n)
                }
            ;return vt(f)
        }
        function Tt(e, t) {
            var n = 0
              , o = t.length > 0
              , s = e.length > 0
              , a = function(a, l, c, f, h) {
                var d, g, m, y = [], v = 0, x = "0", b = a && [], T = null != h, C = u, k = a || s && i.find.TAG("*", h && l.parentNode || l), N = w += null == C ? 1 : Math.random() || .1;
                for (T && (u = l !== p && l,
                r = n); null != (d = k[x]); x++) {
                    if (s && d) {
                        g = 0;
                        while (m = e[g++])
                            if (m(d, l, c)) {
                                f.push(d);
                                break
                            }
                        ;T && (w = N,
                        r = ++n)
                    }
                    ;o && ((d = !m && d) && v--,
                    a && b.push(d))
                }
                ;if (v += x,
                o && x !== v) {
                    g = 0;
                    while (m = t[g++])
                        m(b, y, l, c);
                    if (a) {
                        if (v > 0)
                            while (x--)
                                b[x] || y[x] || (y[x] = q.call(f));
                        y = xt(y)
                    }
                    ;O.apply(f, y),
                    T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f)
                }
                ;return T && (w = N,
                u = C),
                b
            };
            return o ? at(a) : a
        }
        ;a = ot.compile = function(e, t) {
            var n, r = [], i = [], o = N[e + " "];
            if (!o) {
                t || (t = gt(e)),
                n = t.length;
                while (n--)
                    o = wt(t[n]),
                    o[v] ? r.push(o) : i.push(o);
                o = N(e, Tt(i, r))
            }
            ;return o
        }
        function Ct(e, t, n) {
            var r = 0
              , i = t.length;
            for (; i > r; r++)
                ot(e, t[r], n);
            return n
        }
        function kt(e, t, r, o) {
            var s, u, l, c, p, f = gt(e);
            if (!o && 1 === f.length) {
                if (u = f[0] = f[0].slice(0),
                u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
                    if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0],
                    !t)
                        return r;
                    e = e.slice(u.shift().value.length)
                }
                ;s = J.needsContext.test(e) ? 0 : u.length;
                while (s--) {
                    if (l = u[s],
                    i.relative[c = l.type])
                        break;
                    if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
                        if (u.splice(s, 1),
                        e = o.length && mt(u),
                        !e)
                            return O.apply(r, o),
                            r;
                        break
                    }
                }
            }
            ;return a(e, f)(o, t, !h, r, U.test(e)),
            r
        }
        ;n.sortStable = v.split("").sort(S).join("") === v,
        n.detectDuplicates = E,
        c(),
        n.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }),
        ut(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function(e, t, n) {
            return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ut(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || lt("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue
        }),
        ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || lt(R, function(e, t, n) {
            var r;
            return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }),
        x.find = ot,
        x.expr = ot.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.unique = ot.uniqueSort,
        x.text = ot.getText,
        x.isXMLDoc = ot.isXML,
        x.contains = ot.contains
    }(e);
    var D = {}
    function A(e) {
        var t = D[e] = {};
        return x.each(e.match(w) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    ;x.Callbacks = function(e) {
        e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);
        var t, n, r, i, o, s, a = [], u = !e.once && [], l = function(p) {
            for (t = e.memory && p,
            n = !0,
            s = i || 0,
            i = 0,
            o = a.length,
            r = !0; a && o > s; s++)
                if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
            ;r = !1,
            a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable())
        }, c = {
            add: function() {
                if (a) {
                    var n = a.length;
                    (function s(t) {
                        x.each(t, function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n)
                        })
                    })(arguments),
                    r ? o = a.length : t && (i = n,
                    l(t))
                }
                ;return this
            },
            remove: function() {
                return a && x.each(arguments, function(e, t) {
                    var n;
                    while ((n = x.inArray(t, a, n)) > -1)
                        a.splice(n, 1),
                        r && (o >= n && o--,
                        s >= n && s--)
                }),
                this
            },
            has: function(e) {
                return e ? x.inArray(e, a) > -1 : !(!a || !a.length)
            },
            empty: function() {
                return a = [],
                o = 0,
                this
            },
            disable: function() {
                return a = u = t = undefined,
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return u = undefined,
                t || c.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, t) {
                return !a || n && !u || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                r ? u.push(t) : l(t)),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return c
    }
    ,
    x.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t, function(t, o) {
                            var s = o[0]
                              , a = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            x.each(t, function(e, o) {
                var s = o[2]
                  , a = o[3];
                r[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = s.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), s = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? d.call(arguments) : r,
                    n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }, a, u, l;
            if (r > 1)
                for (a = Array(r),
                u = Array(r),
                l = Array(r); r > t; t++)
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
            return i || o.resolveWith(l, n),
            o.promise()
        }
    }),
    x.support = function(t) {
        var n = o.createElement("input")
          , r = o.createDocumentFragment()
          , i = o.createElement("div")
          , s = o.createElement("select")
          , a = s.appendChild(o.createElement("option"));
        return n.type ? (n.type = "checkbox",
        t.checkOn = "" !== n.value,
        t.optSelected = a.selected,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        t.pixelPosition = !1,
        n.checked = !0,
        t.noCloneChecked = n.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !a.disabled,
        n = o.createElement("input"),
        n.value = "t",
        n.type = "radio",
        t.radioValue = "t" === n.value,
        n.setAttribute("checked", "t"),
        n.setAttribute("name", "t"),
        r.appendChild(n),
        t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.focusinBubbles = "onfocusin"in e,
        i.style.backgroundClip = "content-box",
        i.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === i.style.backgroundClip,
        x(function() {
            var n, r, s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", a = o.getElementsByTagName("body")[0];
            a && (n = o.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            a.appendChild(n).appendChild(i),
            i.innerHTML = "",
            i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",
            x.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === i.offsetWidth
            }),
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width,
            r = i.appendChild(o.createElement("div")),
            r.style.cssText = i.style.cssText = s,
            r.style.marginRight = r.style.width = "0",
            i.style.width = "1px",
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
            a.removeChild(n))
        }),
        t) : t
    }({});
    var L, q, H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g
    function F() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = x.expando + Math.random()
    }
    ;F.uid = 1,
    F.accepts = function(e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
    }
    ,
    F.prototype = {
        key: function(e) {
            if (!F.accepts(e))
                return 0;
            var t = {}
              , n = e[this.expando];
            if (!n) {
                n = F.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n,
                    x.extend(e, t)
                }
            }
            ;return this.cache[n] || (this.cache[n] = {}),
            n
        },
        set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t) {
                o[t] = n
            } else if (x.isEmptyObject(o)) {
                x.extend(this.cache[i], t)
            } else
                for (r in t)
                    o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return t === undefined ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t),
            r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n),
            n !== undefined ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (t === undefined) {
                this.cache[o] = {}
            } else {
                x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t),
                t in s ? r = [t, i] : (r = i,
                r = r in s ? [r] : r.match(w) || [])),
                n = r.length;
                while (n--)
                    delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !x.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    },
    L = new F(),
    q = new F(),
    x.extend({
        acceptData: F.accepts,
        hasData: function(e) {
            return L.hasData(e) || q.hasData(e)
        },
        data: function(e, t, n) {
            return L.access(e, t, n)
        },
        removeData: function(e, t) {
            L.remove(e, t)
        },
        _data: function(e, t, n) {
            return q.access(e, t, n)
        },
        _removeData: function(e, t) {
            q.remove(e, t)
        }
    }),
    x.fn.extend({
        data: function(e, t) {
            var n, r, i = this[0], o = 0, s = null;
            if (e === undefined) {
                if (this.length && (s = L.get(i),
                1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
                    for (n = i.attributes; n.length > o; o++)
                        r = n[o].name,
                        0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)),
                        P(i, r, s[r]));
                    q.set(i, "hasDataAttrs", !0)
                }
                ;return s
            }
            ;return "object" == typeof e ? this.each(function() {
                L.set(this, e)
            }) : x.access(this, function(t) {
                var n, r = x.camelCase(e);
                if (i && t === undefined) {
                    if (n = L.get(i, e),
                    n !== undefined)
                        return n;
                    if (n = L.get(i, r),
                    n !== undefined)
                        return n;
                    if (n = P(i, r, undefined),
                    n !== undefined)
                        return n
                } else
                    this.each(function() {
                        var n = L.get(this, r);
                        L.set(this, r, t),
                        -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                L.remove(this, e)
            })
        }
    })
    function P(e, t, n) {
        var r;
        if (n === undefined && 1 === e.nodeType)
            if (r = "data-" + t.replace(O, "-$1").toLowerCase(),
            n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n
                } catch (i) {}
                ;L.set(e, t, n)
            } else
                n = undefined;
        return n
    }
    ;x.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue",
            r = q.get(e, t),
            n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)),
            r || []) : undefined
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = x._queueHooks(e, t)
              , s = function() {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return q.get(e, n) || q.access(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = undefined),
            e = e || "fx";
            while (s--)
                n = q.get(o[s], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var R, M, W = /[\t\r\n\f]/g, $ = /\r/g, B = /^(?:input|select|textarea|button)$/i;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e]
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, s = 0, a = this.length, u = "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).addClass(e.call(this, t, this.className))
                });
            if (u)
                for (t = (e || "").match(w) || []; a > s; s++)
                    if (n = this[s],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
                        o = 0;
                        while (i = t[o++])
                            0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            ;return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).removeClass(e.call(this, t, this.className))
                });
            if (u)
                for (t = (e || "").match(w) || []; a > s; s++)
                    if (n = this[s],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            ;return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, i = 0, o = x(this), s = e.match(w) || [];
                    while (t = s[i++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    (n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = x.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && t.set(this, i, "value") !== undefined || (this.value = i))
                    });
                if (i)
                    return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()],
                    t && "get"in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value,
                    "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
            }
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0;
                    for (; a > u; u++)
                        if (n = r[u],
                        !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    ;return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), s = i.length;
                    while (s--)
                        r = i[s],
                        (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(),
                i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)),
                n === undefined ? i && "get"in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t),
                null == o ? undefined : o) : null !== n ? i && "set"in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""),
                n) : (x.removeAttr(e, t),
                undefined))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(w);
            if (o && 1 === e.nodeType)
                while (n = o[i++])
                    r = x.propFix[n] || n,
                    x.expr.match.bool.test(n) && (e[r] = !1),
                    e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s || !x.isXMLDoc(e),
                o && (t = x.propFix[t] || t,
                i = x.propHooks[t]),
                n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }),
    M = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = x.expr.attrHandle[t] || x.find.attr;
        x.expr.attrHandle[t] = function(e, t, r) {
            var i = x.expr.attrHandle[t]
              , o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
            return x.expr.attrHandle[t] = i,
            o
        }
    }),
    x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined
            }
        },
        x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var I = /^key/
      , z = /^(?:mouse|contextmenu)|click/
      , _ = /^(?:focusinfocus|focusoutblur)$/
      , X = /^([^.]*)(?:\.(.+)|)$/
    function U() {
        return !0
    }
    function Y() {
        return !1
    }
    function V() {
        try {
            return o.activeElement
        } catch (e) {}
    }
    ;x.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, a, u, l, c, p, f, h, d, g, m, y = q.get(e);
            if (y) {
                n.handler && (s = n,
                n = s.handler,
                o = s.selector),
                n.guid || (n.guid = x.guid++),
                (l = y.events) || (l = y.events = {}),
                (a = y.handle) || (a = y.handle = function(e) {
                    return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments)
                }
                ,
                a.elem = e),
                t = (t || "").match(w) || [""],
                c = t.length;
                while (c--)
                    u = X.exec(t[c]) || [],
                    d = m = u[1],
                    g = (u[2] || "").split(".").sort(),
                    d && (f = x.event.special[d] || {},
                    d = (o ? f.delegateType : f.bindType) || d,
                    f = x.event.special[d] || {},
                    p = x.extend({
                        type: d,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && x.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, s),
                    (h = l[d]) || (h = l[d] = [],
                    h.delegateCount = 0,
                    f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)),
                    f.add && (f.add.call(e, p),
                    p.handler.guid || (p.handler.guid = n.guid)),
                    o ? h.splice(h.delegateCount++, 0, p) : h.push(p),
                    x.event.global[d] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, p, f, h, d, g, m = q.hasData(e) && q.get(e);
            if (m && (u = m.events)) {
                t = (t || "").match(w) || [""],
                l = t.length;
                while (l--)
                    if (a = X.exec(t[l]) || [],
                    h = g = a[1],
                    d = (a[2] || "").split(".").sort(),
                    h) {
                        p = x.event.special[h] || {},
                        h = (r ? p.delegateType : p.bindType) || h,
                        f = u[h] || [],
                        a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = f.length;
                        while (o--)
                            c = f[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1),
                            c.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, c));
                        s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle),
                        delete u[h])
                    } else
                        for (h in u)
                            x.event.remove(e, h + t[l], n, r, !0);
                x.isEmptyObject(u) && (delete m.handle,
                q.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var s, a, u, l, c, p, f, h = [r || o], d = y.call(t, "type") ? t.type : t, g = y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = r = r || o,
            3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."),
            d = g.shift(),
            g.sort()),
            c = 0 > d.indexOf(":") && "on" + d,
            t = t[x.expando] ? t : new x.Event(d,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = g.join("."),
            t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = undefined,
            t.target || (t.target = r),
            n = null == n ? [t] : x.makeArray(n, [t]),
            f = x.event.special[d] || {},
            i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !x.isWindow(r)) {
                    for (l = f.delegateType || d,
                    _.test(l + d) || (a = a.parentNode); a; a = a.parentNode)
                        h.push(a),
                        u = a;
                    u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e)
                }
                ;s = 0;
                while ((a = h[s++]) && !t.isPropagationStopped())
                    t.type = s > 1 ? l : f.bindType || d,
                    p = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"),
                    p && p.apply(a, n),
                    p = c && a[c],
                    p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c],
                u && (r[c] = null),
                x.event.triggered = d,
                r[d](),
                x.event.triggered = undefined,
                u && (r[c] = u)),
                t.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var t, n, r, i, o, s = [], a = d.call(arguments), u = (q.get(this, "events") || {})[e.type] || [], l = x.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u),
                t = 0;
                while ((i = s[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped())
                        (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o,
                        e.data = o.data,
                        r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                        r !== undefined && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()))
                }
                ;return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [],
                        n = 0; a > n; n++)
                            o = t[n],
                            i = o.selector + " ",
                            r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            ;return t.length > a && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o,
                r = n.documentElement,
                i = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[x.expando])
                return e;
            var t, n, r, i = e.type, s = e, a = this.fixHooks[i];
            a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new x.Event(s),
            t = r.length;
            while (t--)
                n = r[t],
                e[n] = s[n];
            return e.target || (e.target = o),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            a.filter ? a.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== V() && this.focus ? (this.focus(),
                    !1) : undefined
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === V() && this.blur ? (this.blur(),
                    !1) : undefined
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(),
                    !1) : undefined
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    ,
    x.Event = function(e, t) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e,
        t && x.extend(this, t),
        this.timeStamp = e && e.timeStamp || x.now(),
        this[x.expando] = !0,
        undefined) : new x.Event(e,t)
    }
    ,
    x.Event.prototype = {
        isDefaultPrevented: Y,
        isPropagationStopped: Y,
        isImmediatePropagationStopped: Y,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = U,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = U,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = U,
            this.stopPropagation()
        }
    },
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && o.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }),
    x.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = undefined);
                for (s in e)
                    this.on(s, t, n, e[s], i);
                return this
            }
            ;if (null == n && null == r ? (r = t,
            n = t = undefined) : null == r && ("string" == typeof t ? (r = n,
            n = undefined) : (r = n,
            n = t,
            t = undefined)),
            r === !1) {
                r = Y
            } else if (!r)
                return this;
            return 1 === i && (o = r,
            r = function(e) {
                return x().off(e),
                o.apply(this, arguments)
            }
            ,
            r.guid = o.guid || (o.guid = x.guid++)),
            this.each(function() {
                x.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            ;return (t === !1 || "function" == typeof t) && (n = t,
            t = undefined),
            n === !1 && (n = Y),
            this.each(function() {
                x.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? x.event.trigger(e, t, n, !0) : undefined
        }
    });
    var G = /^.[^:#\[\.,]*$/
      , J = /^(?:parents|prev(?:Until|All))/
      , Q = x.expr.match.needsContext
      , K = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (x.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        has: function(e) {
            var t = x(e, this)
              , n = t.length;
            return this.filter(function() {
                var e = 0;
                for (; n > e; e++)
                    if (x.contains(this, t[e]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(et(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(et(this, e || [], !1))
        },
        is: function(e) {
            return !!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            ;return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e)
              , r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    })
    function Z(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    ;x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return Z(e, "nextSibling")
        },
        prev: function(e) {
            return Z(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = x.filter(r, i)),
            this.length > 1 && (K[e] || x.unique(i),
            J.test(e) && i.reverse()),
            this.pushStack(i)
        }
    }),
    x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, t, n) {
            var r = []
              , i = n !== undefined;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && x(e).is(n))
                        break;
                    r.push(e)
                }
            ;return r
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    })
    function et(e, t, n) {
        if (x.isFunction(t))
            return x.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return x.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (G.test(t))
                return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        ;return x.grep(e, function(e) {
            return g.call(t, e) >= 0 !== n
        })
    }
    ;var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , nt = /<([\w:]+)/
      , rt = /<|&#?\w+;/
      , it = /<(?:script|style|link)/i
      , ot = /^(?:checkbox|radio)$/i
      , st = /checked\s*(?:[^=]|=\s*.checked.)/i
      , at = /^$|\/(?:java|ecma)script/i
      , ut = /^true\/(.*)/
      , lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ct = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ct.optgroup = ct.option,
    ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead,
    ct.th = ct.td,
    x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || x.cleanData(mt(n)),
                n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++)
                1 === e.nodeType && (x.cleanData(mt(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (e === undefined && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(tt, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (x.cleanData(mt(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                ;t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            })
              , t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++]
                  , i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling),
                x(this).remove(),
                i.insertBefore(n, r))
            }, !0),
            t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = f.apply([], e);
            var r, i, o, s, a, u, l = 0, c = this.length, p = this, h = c - 1, d = e[0], g = x.isFunction(d);
            if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d))
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = d.call(this, r, i.html())),
                    i.domManip(e, t, n)
                });
            if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this),
            i = r.firstChild,
            1 === r.childNodes.length && (r = i),
            i)) {
                for (o = x.map(mt(r, "script"), ft),
                s = o.length; c > l; l++)
                    a = r,
                    l !== h && (a = x.clone(a, !0, !0),
                    s && x.merge(o, mt(a, "script"))),
                    t.call(this[l], a, l);
                if (s)
                    for (u = o[o.length - 1].ownerDocument,
                    x.map(o, ht),
                    l = 0; s > l; l++)
                        a = o[l],
                        at.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, "")))
            }
            ;return this
        }
    }),
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = [], i = x(e), o = i.length - 1, s = 0;
            for (; o >= s; s++)
                n = s === o ? this : this.clone(!0),
                x(i[s])[t](n),
                h.apply(r, n.get());
            return this.pushStack(r)
        }
    }),
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = x.contains(e.ownerDocument, e);
            if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = mt(a),
                o = mt(e),
                r = 0,
                i = o.length; i > r; r++)
                    yt(o[r], s[r]);
            if (t)
                if (n) {
                    for (o = o || mt(e),
                    s = s || mt(a),
                    r = 0,
                    i = o.length; i > r; r++)
                        gt(o[r], s[r])
                } else
                    gt(e, a);
            return s = mt(a, "script"),
            s.length > 0 && dt(s, !u && mt(e, "script")),
            a
        },
        buildFragment: function(e, t, n, r) {
            var i, o, s, a, u, l, c = 0, p = e.length, f = t.createDocumentFragment(), h = [];
            for (; p > c; c++)
                if (i = e[c],
                i || 0 === i)
                    if ("object" === x.type(i)) {
                        x.merge(h, i.nodeType ? [i] : i)
                    } else if (rt.test(i)) {
                        o = o || f.appendChild(t.createElement("div")),
                        s = (nt.exec(i) || ["", ""])[1].toLowerCase(),
                        a = ct[s] || ct._default,
                        o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2],
                        l = a[0];
                        while (l--)
                            o = o.lastChild;
                        x.merge(h, o.childNodes),
                        o = f.firstChild,
                        o.textContent = ""
                    } else
                        h.push(t.createTextNode(i));
            f.textContent = "",
            c = 0;
            while (i = h[c++])
                if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i),
                o = mt(f.appendChild(i), "script"),
                u && dt(o),
                n)) {
                    l = 0;
                    while (i = o[l++])
                        at.test(i.type || "") && n.push(i)
                }
            ;return f
        },
        cleanData: function(e) {
            var t, n, r, i, o, s, a = x.event.special, u = 0;
            for (; (n = e[u]) !== undefined; u++) {
                if (F.accepts(n) && (o = n[q.expando],
                o && (t = q.cache[o]))) {
                    if (r = Object.keys(t.events || {}),
                    r.length)
                        for (s = 0; (i = r[s]) !== undefined; s++)
                            a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                    q.cache[o] && delete q.cache[o]
                }
                ;delete L.cache[n[L.expando]]
            }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    })
    function pt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function ft(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function ht(e) {
        var t = ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function dt(e, t) {
        var n = e.length
          , r = 0;
        for (; n > r; r++)
            q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"))
    }
    function gt(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (q.hasData(e) && (o = q.access(e),
            s = q.set(t, o),
            l = o.events)) {
                delete s.handle,
                s.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; r > n; n++)
                        x.event.add(t, i, l[i][n])
            }
            ;L.hasData(e) && (a = L.access(e),
            u = x.extend({}, a),
            L.set(t, u))
        }
    }
    function mt(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n
    }
    function yt(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    ;x.fn.extend({
        wrapAll: function(e) {
            var t;
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var vt, xt, bt = /^(none|table(?!-c[ea]).+)/, wt = /^margin/, Tt = RegExp("^(" + b + ")(.*)$", "i"), Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"), kt = RegExp("^([+-])=(" + b + ")", "i"), Nt = {
        BODY: "block"
    }, Et = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, St = {
        letterSpacing: 0,
        fontWeight: 400
    }, jt = ["Top", "Right", "Bottom", "Left"], Dt = ["Webkit", "O", "Moz", "ms"]
    function At(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = Dt.length;
        while (i--)
            if (t = Dt[i] + n,
            t in e)
                return t;
        return r
    }
    function Lt(e, t) {
        return e = t || e,
        "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function qt(t) {
        return e.getComputedStyle(t, null)
    }
    function Ht(e, t) {
        var n, r, i, o = [], s = 0, a = e.length;
        for (; a > s; s++)
            r = e[s],
            r.style && (o[s] = q.get(r, "olddisplay"),
            n = r.style.display,
            t ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Lt(r) && (o[s] = q.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r),
            (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (s = 0; a > s; s++)
            r = e[s],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    ;x.fn.extend({
        css: function(e, t) {
            return x.access(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (x.isArray(t)) {
                    for (r = qt(e),
                    i = t.length; i > s; s++)
                        o[t[s]] = x.css(e, t[s], !1, r);
                    return o
                }
                ;return n !== undefined ? x.style(e, t, n) : x.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Ht(this, !0)
        },
        hide: function() {
            return Ht(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Lt(this) ? x(this).show() : x(this).hide()
            })
        }
    }),
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = vt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = x.camelCase(t), u = e.style;
                return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)),
                s = x.cssHooks[t] || x.cssHooks[a],
                n === undefined ? s && "get"in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n,
                "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)),
                o = "number"),
                null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"),
                x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                s && "set"in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)),
                undefined)
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = x.camelCase(t);
            return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)),
            s = x.cssHooks[t] || x.cssHooks[a],
            s && "get"in s && (i = s.get(e, !0, n)),
            i === undefined && (i = vt(e, t, r)),
            "normal" === i && t in St && (i = St[t]),
            "" === n || n ? (o = parseFloat(i),
            n === !0 || x.isNumeric(o) ? o || 0 : i) : i
        }
    }),
    vt = function(e, t, n) {
        var r, i, o, s = n || qt(e), a = s ? s.getPropertyValue(t) || s[t] : undefined, u = e.style;
        return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)),
        Ct.test(a) && wt.test(t) && (r = u.width,
        i = u.minWidth,
        o = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = a,
        a = s.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = o)),
        a
    }
    function Ot(e, t, n) {
        var r = Tt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function Ft(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0
          , s = 0;
        for (; 4 > o; o += 2)
            "margin" === n && (s += x.css(e, n + jt[o], !0, i)),
            r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)),
            "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i),
            "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i)));
        return s
    }
    function Pt(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = qt(e)
          , s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = vt(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            Ct.test(i))
                return i;
            r = s && (x.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        ;return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }
    function Rt(e) {
        var t = o
          , n = Nt[e];
        return n || (n = Mt(e, t),
        "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
        t = (xt[0].contentWindow || xt[0].contentDocument).document,
        t.write("<!doctype html><html><body>"),
        t.close(),
        n = Mt(e, t),
        xt.detach()),
        Nt[e] = n),
        n
    }
    function Mt(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body)
          , r = x.css(n[0], "display");
        return n.remove(),
        r
    }
    ;x.each(["height", "width"], function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function() {
                    return Pt(e, t, r)
                }) : Pt(e, t, r) : undefined
            },
            set: function(e, n, r) {
                var i = r && qt(e);
                return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, t) {
                return t ? x.swap(e, {
                    display: "inline-block"
                }, vt, [e, "marginRight"]) : undefined
            }
        }),
        !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, t) {
            x.cssHooks[t] = {
                get: function(e, n) {
                    return n ? (n = vt(e, t),
                    Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined
                }
            }
        })
    }),
    x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight
    }
    ,
    x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }
    ),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0
                  , i = {}
                  , o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++)
                    i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        wt.test(e) || (x.cssHooks[e + t].set = Ot)
    });
    var Wt = /%20/g
      , $t = /\[\]$/
      , Bt = /\r?\n/g
      , It = /^(?:submit|button|image|reset|file)$/i
      , zt = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Bt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Bt, "\r\n")
                }
            }).get()
        }
    }),
    x.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional),
        x.isArray(e) || e.jquery && !x.isPlainObject(e)) {
            x.each(e, function() {
                i(this.name, this.value)
            })
        } else
            for (n in e)
                _t(n, e[n], t, i);
        return r.join("&").replace(Wt, "+")
    }
    function _t(e, t, n, r) {
        var i;
        if (x.isArray(t)) {
            x.each(t, function(t, i) {
                n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            })
        } else if (n || "object" !== x.type(t)) {
            r(e, t)
        } else
            for (i in t)
                _t(e + "[" + i + "]", t[i], n, r)
    }
    ;x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Xt, Ut, Yt = x.now(), Vt = /\?/, Gt = /#.*$/, Jt = /([?&])_=[^&]*/, Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nn = x.fn.load, rn = {}, on = {}, sn = "*/".concat("*");
    try {
        Ut = i.href
    } catch (an) {
        Ut = o.createElement("a"),
        Ut.href = "",
        Ut = Ut.href
    }
    ;Xt = tn.exec(Ut.toLowerCase()) || []
    function un(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(w) || [];
            if (x.isFunction(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function ln(e, t, n, r) {
        var i = {}
          , o = e === on
        function s(a) {
            var u;
            return i[a] = !0,
            x.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l),
                s(l),
                !1)
            }),
            u
        }
        ;return s(t.dataTypes[0]) || !i["*"] && s("*")
    }
    function cn(e, t) {
        var n, r, i = x.ajaxSettings.flatOptions || {};
        for (n in t)
            t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && x.extend(!0, e, r),
        e
    }
    ;x.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn)
            return nn.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = e.slice(a),
        e = e.slice(0, a)),
        x.isFunction(t) ? (n = t,
        t = undefined) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && x.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ut,
            type: "GET",
            isLocal: Kt.test(Xt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e)
        },
        ajaxPrefilter: un(rn),
        ajaxTransport: un(on),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = undefined),
            t = t || {};
            var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t), p = c.context || c, f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event, h = x.Deferred(), d = x.Callbacks("once memory"), g = c.statusCode || {}, m = {}, y = {}, v = 0, b = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === v) {
                        if (!o) {
                            o = {};
                            while (t = Qt.exec(i))
                                o[t[1].toLowerCase()] = t[2]
                        }
                        ;t = o[e.toLowerCase()]
                    }
                    ;return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? i : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return v || (e = y[n] = y[n] || e,
                    m[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return v || (c.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > v) {
                            for (t in e)
                                g[t] = [g[t], e[t]]
                        } else
                            T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return n && n.abort(t),
                    k(0, t),
                    this
                }
            };
            if (h.promise(T).complete = d.add,
            T.success = T.done,
            T.error = T.fail,
            c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"),
            c.type = t.method || t.type || c.method || c.type,
            c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""],
            null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()),
            c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))),
            c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)),
            ln(rn, c, t, T),
            2 === v)
                return T;
            u = c.global,
            u && 0 === x.active++ && x.event.trigger("ajaxStart"),
            c.type = c.type.toUpperCase(),
            c.hasContent = !Zt.test(c.type),
            r = c.url,
            c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data,
            delete c.data),
            c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)),
            c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]),
            x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])),
            (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType),
            T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers)
                T.setRequestHeader(l, c.headers[l]);
            if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v))
                return T.abort();
            b = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[l](c[l]);
            if (n = ln(on, c, t, T)) {
                T.readyState = 1,
                u && f.trigger("ajaxSend", [T, c]),
                c.async && c.timeout > 0 && (s = setTimeout(function() {
                    T.abort("timeout")
                }, c.timeout));
                try {
                    v = 1,
                    n.send(m, k)
                } catch (C) {
                    if (!(2 > v))
                        throw C;
                    k(-1, C)
                }
            } else
                k(-1, "No Transport")
            function k(e, t, o, a) {
                var l, m, y, b, w, C = t;
                2 !== v && (v = 2,
                s && clearTimeout(s),
                n = undefined,
                i = a || "",
                T.readyState = e > 0 ? 4 : 0,
                l = e >= 200 && 300 > e || 304 === e,
                o && (b = pn(c, T, o)),
                b = fn(c, b, T, l),
                l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"),
                w && (x.lastModified[r] = w),
                w = T.getResponseHeader("etag"),
                w && (x.etag[r] = w)),
                204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state,
                m = b.data,
                y = b.error,
                l = !y)) : (y = C,
                (e || !C) && (C = "error",
                0 > e && (e = 0))),
                T.status = e,
                T.statusText = (t || C) + "",
                l ? h.resolveWith(p, [m, C, T]) : h.rejectWith(p, [T, C, y]),
                T.statusCode(g),
                g = undefined,
                u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]),
                d.fireWith(p, [T, C]),
                u && (f.trigger("ajaxComplete", [T, c]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            ;return T
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, undefined, t, "script")
        }
    }),
    x.each(["get", "post"], function(e, t) {
        x[t] = function(e, n, r, i) {
            return x.isFunction(n) && (i = i || r,
            r = n,
            n = undefined),
            x.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    })
    function pn(e, t, n) {
        var r, i, o, s, a = e.contents, u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        ;if (u[0]in n) {
            o = u[0]
        } else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                ;s || (s = i)
            }
            ;o = o || s
        }
        ;return o ? (o !== u[0] && u.unshift(o),
        n[o]) : undefined
    }
    function fn(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                l[s.toLowerCase()] = e.converters[s];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o) {
                    o = u
                } else if ("*" !== u && u !== o) {
                    if (s = l[u + " " + o] || l["* " + o],
                    !s)
                        for (i in l)
                            if (a = i.split(" "),
                            a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    ;if (s !== !0)
                        if (s && e["throws"]) {
                            t = s(t)
                        } else
                            try {
                                t = s(t)
                            } catch (p) {
                                return {
                                    state: "parsererror",
                                    error: s ? p : "No conversion from " + u + " to " + o
                                }
                            }
                }
        ;return {
            state: "success",
            data: t
        }
    }
    ;x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = x("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    o.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var hn = []
      , dn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = hn.pop() || x.expando + "_" + Yt++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return s || x.error(i + " was not called"),
            s[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[i],
        e[i] = function() {
            s = arguments
        }
        ,
        r.always(function() {
            e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            hn.push(i)),
            s && x.isFunction(o) && o(s[0]),
            s = o = undefined
        }),
        "script") : undefined
    }),
    x.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest()
        } catch (e) {}
    }
    ;
    var gn = x.ajaxSettings.xhr()
      , mn = {
        0: 200,
        1223: 204
    }
      , yn = 0
      , vn = {};
    e.ActiveXObject && x(e).on("unload", function() {
        for (var e in vn)
            vn[e]();
        vn = undefined
    }),
    x.support.cors = !!gn && "withCredentials"in gn,
    x.support.ajax = gn = !!gn,
    x.ajaxTransport(function(e) {
        var t;
        return x.support.cors || gn && !e.crossDomain ? {
            send: function(n, r) {
                var i, o, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
                    for (i in e.xhrFields)
                        s[i] = e.xhrFields[i];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n)
                    s.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete vn[o],
                        t = s.onload = s.onerror = null,
                        "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : undefined, s.getAllResponseHeaders()))
                    }
                }
                ,
                s.onload = t(),
                s.onerror = t("error"),
                t = vn[o = yn++] = t("abort"),
                s.send(e.hasContent && e.data || null)
            },
            abort: function() {
                t && t()
            }
        } : undefined
    });
    var xn, bn, wn = /^(?:toggle|show|hide)$/, Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"), Cn = /queueHooks$/, kn = [An], Nn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = Tn.exec(t)
              , o = i && i[3] || (x.cssNumber[e] ? "" : "px")
              , s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e))
              , a = 1
              , u = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                i = i || [],
                s = +r || 1;
                do {
                    a = a || ".5",
                    s /= a,
                    x.style(n.elem, e, s + o)
                } while (a !== (a = n.cur() / r) && 1 !== a && --u)
            }
            ;return i && (s = n.start = +s || +r || 0,
            n.unit = o,
            n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    }
    function En() {
        return setTimeout(function() {
            xn = undefined
        }),
        xn = x.now()
    }
    function Sn(e, t, n) {
        var r, i = (Nn[t] || []).concat(Nn["*"]), o = 0, s = i.length;
        for (; s > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function jn(e, t, n) {
        var r, i, o = 0, s = kn.length, a = x.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            var t = xn || En()
              , n = Math.max(0, l.startTime + l.duration - t)
              , r = n / l.duration || 0
              , o = 1 - r
              , s = 0
              , u = l.tweens.length;
            for (; u > s; s++)
                l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]),
            1 > o && u ? n : (a.resolveWith(e, [l]),
            !1)
        }, l = a.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: xn || En(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (Dn(c, l.opts.specialEasing); s > o; o++)
            if (r = kn[o].call(l, e, c, l.opts))
                return r;
        return x.map(c, Sn, l),
        x.isFunction(l.opts.start) && l.opts.start.call(e, l),
        x.fx.timer(x.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function Dn(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = x.camelCase(n),
            i = t[r],
            o = e[n],
            x.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            s = x.cssHooks[r],
            s && "expand"in s) {
                o = s.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    ;x.Animation = x.extend(jn, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++)
                n = e[r],
                Nn[n] = Nn[n] || [],
                Nn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? kn.unshift(e) : kn.push(e)
        }
    })
    function An(e, t, n) {
        var r, i, o, s, a, u, l = this, c = {}, p = e.style, f = e.nodeType && Lt(e), h = q.get(e, "fxshow");
        n.queue || (a = x._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        u = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || u()
        }
        ),
        a.unqueued++,
        l.always(function() {
            l.always(function() {
                a.unqueued--,
                x.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        l.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            wn.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (f ? "hide" : "show")) {
                    if ("show" !== i || !h || h[r] === undefined)
                        continue;
                    f = !0
                }
                ;c[r] = h && h[r] || x.style(e, r)
            }
        ;if (!x.isEmptyObject(c)) {
            h ? "hidden"in h && (f = h.hidden) : h = q.access(e, "fxshow", {}),
            o && (h.hidden = !f),
            f ? x(e).show() : l.done(function() {
                x(e).hide()
            }),
            l.done(function() {
                var t;
                q.remove(e, "fxshow");
                for (t in c)
                    x.style(e, t, c[t])
            });
            for (r in c)
                s = Sn(f ? h[r] : 0, r, l),
                r in h || (h[r] = s.start,
                f && (s.end = s.start,
                s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function Ln(e, t, n, r, i) {
        return new Ln.prototype.init(e,t,n,r,i)
    }
    ;x.Tween = Ln,
    Ln.prototype = {
        constructor: Ln,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ln.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ln.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ln.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ln.propHooks._default.set(this),
            this
        }
    },
    Ln.prototype.init.prototype = Ln.prototype,
    Ln.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i)
        }
    }),
    x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Lt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e)
              , o = x.speed(t, n, r)
              , s = function() {
                var t = jn(this, x.extend({}, e), o);
                (i || q.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = undefined),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = x.timers
                  , s = q.get(this);
                if (i) {
                    s[i] && s[i].stop && r(s[i])
                } else
                    for (i in s)
                        s[i] && s[i].stop && Cn.test(i) && r(s[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                (t || !n) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = q.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                x.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; s > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    })
    function qn(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = jt[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    ;x.each({
        slideDown: qn("show"),
        slideUp: qn("hide"),
        slideToggle: qn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            x.isFunction(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    x.timers = [],
    x.fx = Ln.prototype.init,
    x.fx.tick = function() {
        var e, t = x.timers, n = 0;
        for (xn = x.now(); t.length > n; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || x.fx.stop(),
        xn = undefined
    }
    ,
    x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        bn || (bn = setInterval(x.fx.tick, x.fx.interval))
    }
    ,
    x.fx.stop = function() {
        clearInterval(bn),
        bn = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fx.step = {},
    x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }
    ),
    x.fn.offset = function(e) {
        if (arguments.length)
            return e === undefined ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            });
        var t, n, i = this[0], o = {
            top: 0,
            left: 0
        }, s = i && i.ownerDocument;
        if (s)
            return t = s.documentElement,
            x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()),
            n = Hn(s),
            {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o
    }
    ,
    x.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = x.css(e, "position"), p = x(e), f = {};
            "static" === c && (e.style.position = "relative"),
            a = p.offset(),
            o = x.css(e, "top"),
            u = x.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
            l ? (r = p.position(),
            s = r.top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            x.isFunction(t) && (t = t.call(e, n, a)),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, f) : p.css(f)
        }
    },
    x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                x.nodeName(e[0], "html") || (r = e.offset()),
                r.top += x.css(e[0], "borderTopWidth", !0),
                r.left += x.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - x.css(n, "marginTop", !0),
                    left: t.left - r.left - x.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))
                    e = e.offsetParent;
                return e || s
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        x.fn[t] = function(i) {
            return x.access(this, function(t, i, o) {
                var s = Hn(t);
                return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o,
                undefined)
            }, t, i, arguments.length, null)
        }
    })
    function Hn(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    ;x.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            x.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , s = n || (r === !0 || i === !0 ? "margin" : "border");
                return x.access(this, function(t, n, r) {
                    var i;
                    return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s)
                }, t, o ? r : undefined, o, null)
            }
        })
    }),
    x.fn.size = function() {
        return this.length
    }
    ,
    x.fn.andSelf = x.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }),
    "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = x)
})(window);
var MD5 = function(string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits))
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4)
            return ( lResult ^ 0x80000000 ^ lX8 ^ lY8) ;
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return ( lResult ^ 0xC0000000 ^ lX8 ^ lY8)
            } else
                return ( lResult ^ 0x40000000 ^ lX8 ^ lY8)
        } else
            return ( lResult ^ lX8 ^ lY8)
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z)
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z))
    }
    function H(x, y, z) {
        return ( x ^ y ^ z)
    }
    function I(x, y, z) {
        return ( y ^ (x | (~z)))
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b)
    }
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b)
    }
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b)
    }
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b)
    }
    function ConvertToWordArray(string) {
        var lWordCount, lMessageLength = string.length, lNumberOfWords_temp1 = lMessageLength + 8, lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64, lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16, lWordArray = Array(lNumberOfWords - 1), lBytePosition = 0, lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++
        }
        ;lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray
    }
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2)
        }
        ;return WordToHexValue
    }
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c)
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128)
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128)
            }
        }
        ;return utftext
    }
    ;var x = Array(), k, AA, BB, CC, DD, a, b, c, d, S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20, S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD)
    }
    ;var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase()
}
function _ajax_request(url, data, callback, type, method) {
    if (jQuery.isFunction(data)) {
        callback = data;
        data = {}
    }
    ;return jQuery.ajax({
        type: method,
        url: url,
        data: data,
        success: callback,
        dataType: type
    })
}
;jQuery.extend({
    put: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'PUT')
    },
    delete_: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'DELETE')
    }
});
toHHMMSS = function(sec) {
    var sec_num = parseInt(sec, 10)
      , hours = Math.floor(sec_num / 3600)
      , minutes = Math.floor((sec_num - (hours * 3600)) / 60)
      , seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;
    var time = hours + ':' + minutes + ':' + seconds;
    return time
}
;
var wsSingleFile = function() {
    this.name = false;
    this.isDir = false;
    this.size = false;
    this.atime = false;
    this.mtime = false;
    this.ctime = false;
    this.setFile = function(file) {
        this.name = file.name;
        this.size = file.size;
        this.isDir = file.isDir;
        this.atime = file.atime;
        this.mtime = file.mtime;
        this.ctime = file.ctime
    }
    ;
    this.getFilename = function() {
        return this.name
    }
    ;
    this.getFileExtension = function() {
        return this.name.split(".").pop()
    }
    ;
    this.getFileSize = function() {
        return this.size
    }
    ;
    this.getFullPath = function() {
        return wsFileSystem.storagePath + this.name
    }
    ;
    this.isReadOnly = function() {
        return this.readOnly
    }
}
  , wsFileSystem = {
    storagePath: '/mtd_down/common/',
    filePrefix: 'wsFile_',
    failedPrefix: 'wsDlFailed_',
    downloadPrefix: 'wsDownload_',
    widgetPostfix: '_unzipped/',
    widgetIndex: 'index.html',
    plugin: false,
    pluginNetwork: false,
    pluginNNavi: false,
    fileSystemObj: false,
    oldSystemObj: false,
    downloader: false,
    pluginObjectTV: false,
    timezoneOffset: 0,
    minFreeSpace: 104857600,
    init: function() {
        this.plugin = document.getElementById('pluginFilesystem');
        this.plugin.Open('FileSystem', '0001', 'FileSystem');
        this.pluginNetwork = document.getElementById('pluginNetwork');
        this.pluginNetwork.Open('Network', '0001', 'Network');
        this.pluginNNavi = document.getElementById('pluginNNavi');
        this.pluginNNavi.Open('NNavi', '0007', 'NNavi');
        this.pluginObjectTV = document.getElementById('pluginObjectTV');
        this.pluginObjectTV.Open('TV', '0003', 'TV');
        this.timezoneOffset = wsFileSystem.pluginObjectTV.Execute("GetTimeZone_Offset");
        this.fileSystemObj = new FileSystem();
        this.oldSystemObj = document.getElementById('FilesystemPlugin');
        this.downloader = document.getElementById('pluginDL');
        this.downloader.OnEvent = wsFileSystem.download.onEvent;
        this.downloader.Open("Download", "8.000", "");
        window.setTimeout(function() {
            wsFileSystem.clearFailedDownloads()
        }, 500);
        window.setTimeout("wsFileSystem.download.__download()", 1e3);
        this.pluginNNavi.Execute("SetBannerState", 8);
        return true
    },
    getFilename: function(path) {
        return path.split("/").pop()
    },
    getFileSize: function(filePath) {
        return this.plugin.Execute('GetFileSize', filePath)
    },
    getFilesFromLocalStorage: function() {
        var result = this.fileSystemObj.readDir(wsFileSystem.storagePath);
        if (result) {
            var fileList = [];
            for (var i = 0; i < result.length; i++) {
                if (result[i].isDir || (!result[i].name.match(/^wsFile\_.*/) && !result[i].name.match(/^.*\.mov/) && !result[i].name.match(/^.*\.jpg/) && !result[i].name.match(/^.*\.png/) && !result[i].name.match(/^.*\.mp4/)) || result[i].name.match(/^.*\.dat/))
                    continue;
                if (result[i].name.match(/^wsDownload\_.*/))
                    continue;
                var file = new wsSingleFile();
                file.setFile(result[i]);
                fileList.push(file)
            }
            ;if (fileList.length > 0)
                return fileList;
            return false
        }
        ;return false
    },
    getAllFilesFromDirectory: function(directory) {
        var result = this.fileSystemObj.readDir(directory);
        if (result) {
            var fileList = [];
            for (var i = 0; i < result.length; i++) {
                var file = new wsSingleFile();
                file.setFile(result[i]);
                fileList.push(file)
            }
            ;if (fileList.length > 0)
                return fileList;
            return false
        }
        ;return false
    },
    checkIfFileExists: function(src) {
        var result = this.plugin.Execute('IsExistedPath', wsFileSystem.getLocalFileName(src));
        if (result == 1)
            return true;
        return false
    },
    checkFileExists: function(fileName) {
        var result = this.plugin.Execute('IsExistedPath', fileName);
        if (result == 1)
            return true;
        return false
    },
    readFile: function(file) {
        var fileObj = this.fileSystemObj.openCommonFile(wsFileSystem.filePrefix + file, 'r');
        if (fileObj != null) {
            var result = fileObj.readAll()
        } else
            result = null;
        this.fileSystemObj.closeCommonFile(fileObj);
        return result
    },
    writeFile: function(file, data) {
        var fileObj = this.fileSystemObj.openCommonFile(wsFileSystem.filePrefix + file, 'w');
        if (fileObj == null) {
            log('An error occurred.', 'Could not write file: ' + wsFileSystem.filePrefix + file);
            return false
        }
        ;fileObj.writeAll(data);
        this.fileSystemObj.closeCommonFile(fileObj);
        return true
    },
    appendToFile: function(file, data) {
        var fileObj = this.fileSystemObj.openCommonFile(wsFileSystem.filePrefix + file, 'a');
        fileObj.writeAll(data);
        this.fileSystemObj.closeCommonFile(fileObj);
        return true
    },
    deleteTextFile: function(file) {
        var result = this.fileSystemObj.deleteCommonFile(wsFileSystem.filePrefix + file);
        log("Delete file", "wsFileSytem.js -> deleteTextFile: Result: " + result);
        this.fileSystemObj.closeCommonFile(result);
        return true
    },
    deleteFile: function(filename) {
        var movFile = filename.replace(' ', '_');
        if (movFile != filename)
            log("", "File " + filename + " with spaces in filename found.");
        var result = this.oldSystemObj.Delete(wsFileSystem.storagePath + filename);
        log("Delete file " + filename, "wsFileSytem.js -> deleteFile: " + wsFileSystem.storagePath + filename + ' Result: ' + result);
        return result
    },
    clearFailedDownloads: function() {
        var filesList = this.fileSystemObj.readDir(wsFileSystem.storagePath);
        if (filesList) {
            var clearedCount = 0;
            for (var i = 0; i < filesList.length; i++) {
                var fileName = filesList[i]['name'];
                if (fileName != '0') {
                    fileName = fileName.replace(' ', '\\ ');
                    if (fileName.indexOf('wsDownload') > -1 || fileName.indexOf('.tmp') > -1) {
                        this.fileSystemObj.deleteCommonFile(fileName);
                        log('', 'Deleting failed file : ' + fileName);
                        clearedCount++
                    }
                }
            }
            ;if (clearedCount > 0)
                log('Total failed files cleared : ' + clearedCount, 'Total failed files cleared : ' + clearedCount)
        }
    },
    checkForUnusedFiles: function() {
        var FileList = this.getFilesFromLocalStorage();
        if (FileList.length > 0) {
            log("Check for unused files", "Check for unused files. Full file list: " + JSON.stringify(FileList));
            $.each(FileList, function(index, el) {
                var ext = el.getFileExtension();
                if (ext == 'jpg' || ext == 'png' || ext == 'mp4' || ext == 'mov')
                    if (!wsPlaylist.isFileInPlaylist(el.getFilename()))
                        wsFileSystem.deleteFile(el.name)
            })
        } else
            log('No file found.', 'wsFileSystem.checkForUnusedFiles: No file found.')
    },
    getTempFileName: function(src) {
        return wsFileSystem.storagePath + wsFileSystem.downloadPrefix + wsFileSystem.getFilename(src)
    },
    getLocalFileName: function(src) {
        return wsFileSystem.storagePath + wsFileSystem.filePrefix + wsFileSystem.getFilename(src)
    },
    getFailedFileName: function(src) {
        return wsFileSystem.storagePath + wsFileSystem.failedPrefix + wsFileSystem.getFilename(src) + '.dat'
    },
    getUsedSpace: function() {
        var size = parseInt(this.plugin.Execute('GetUsedSize'));
        if (size < 0)
            size = -size;
        return size
    },
    getUsedSize: function() {
        return this.parseSize(this.getUsedSpace())
    },
    getFreeSpace: function() {
        var size = parseInt(this.plugin.Execute('GetFreeSize'));
        if (size < 0)
            size = -size;
        return size
    },
    getFreeSize: function() {
        return this.parseSize(this.getFreeSpace())
    },
    getTotalSpace: function() {
        var size = parseInt(this.plugin.Execute('GetTotalSize'));
        if (size < 0)
            size = -size;
        return size
    },
    getTotalSize: function() {
        return this.parseSize(this.getTotalSpace())
    },
    parseSize: function(byte) {
        byte = parseInt(byte);
        if (byte < 0)
            byte = -byte;
        var extension = 'B';
        if (byte > 1024) {
            byte = byte / 1024;
            extension = 'KB'
        }
        ;if (byte > 1024) {
            byte = byte / 1024;
            extension = 'MB'
        }
        ;if (byte > 1024) {
            byte = byte / 1024;
            extension = 'GB'
        }
        ;if (extension != 'B')
            byte = Math.round(byte * 100) / 100;
        return byte + ' ' + extension
    },
    download: {
        isDownlaod: false,
        filesToDownload: [],
        file: function(src) {
            if (src == undefined || src == 'undefined')
                return false;
            this.filesToDownload.push(src)
        },
        __download: function() {
            if (!this.isDownlaod && this.filesToDownload.length < 1) {
                window.setTimeout("wsFileSystem.download.__download()", 6e3);
                return false
            }
            ;log('Elements in download queue: ' + this.filesToDownload.length, "wsFileSystem.__download: Elements in download queue: " + this.filesToDownload.length);
            var src = this.filesToDownload[0];
            if (wsFileSystem.checkIfFileExists(src)) {
                log("Download aborted. File exists.", "wsFileSystem.__download: Download aborted. File exists: " + src);
                wsFileSystem.download.filesToDownload.shift();
                return this.__download()
            }
            ;wsFileSystem.download.downloadIfHasSpace(src)
        },
        onEvent: function(event, param) {
            switch (event) {
            case 0:
                var src = wsFileSystem.download.filesToDownload[0]
                  , paramSet = param.split('?')
                  , eventMessage = paramSet[0]
                  , eventStatus = paramSet[1];
                if (eventMessage == '1000') {
                    if (eventStatus == '1') {
                        wsFileSystem.download.isDownlaod = 0;
                        log("Download completed. [" + src + "]", 'onEvent: Download complete (' + param + '): ' + src);
                        wsFileSystem.download.compareFileSizeOfLocalAndServer(src)
                    } else {
                        log("Download failed.", "Download failed. [" + src + "] onEvent: Download finished with errors (" + param + '): ' + src);
                        var tempFileName = wsFileSystem.downloadPrefix + wsFileSystem.getFilename(src);
                        if (wsFileSystem.checkFileExists(wsFileSystem.storagePath + tempFileName)) {
                            wsFileSystem.fileSystemObj.deleteCommonFile(tempFileName)
                        } else if (wsFileSystem.checkFileExists(wsFileSystem.storagePath + tempFileName + '.tmp'))
                            wsFileSystem.fileSystemObj.deleteCommonFile(tempFileName + '.tmp')
                    }
                    ;wsFileSystem.download.filesToDownload.shift();
                    window.setTimeout('wsFileSystem.download.__download()', 1e3)
                } else if (eventMessage == '1001') {
                    log('Download status: ' + eventStatus + ' %', 'Download status: ' + eventStatus + ' %')
                } else if (eventMessage == '1002') {
                    log('Download speed: ' + eventStatus + ' bytes/sec', 'Download speed: ' + eventStatus + ' bytes/sec')
                } else {
                    log("Unhandled download event.", "Unhandled download event: " + event + ' / ' + param);
                    wsFileSystem.download.filesToDownload.shift();
                    window.setTimeout('wsFileSystem.download.__download()', 1e3)
                }
                ;break;
            default:
                log("Download event.", "Download event: " + event + ' / ' + param);
                break
            }
        },
        moveTempFile: function(src) {
            var tmpFile = wsFileSystem.getTempFileName(src)
              , targetFile = wsFileSystem.getLocalFileName(src);
            log("Move downloaded file.", 'Move file from ' + tmpFile + ' to ' + targetFile);
            wsFileSystem.oldSystemObj.Move(tmpFile, targetFile)
        },
        compareFileSizeOfLocalAndServer: function(src) {
            if (src == null || src == undefined)
                return false;
            $.ajax({
                type: "GET",
                async: true,
                url: wsPlaylist.AppUrl + 'content-length.php?url=' + encodeURI(src),
                success: function(message, text, response) {
                    var serverSize = parseInt(message)
                      , localSize = wsFileSystem.getFileSize(wsFileSystem.getTempFileName(src));
                    log("compare file size.", "[compareFileSizeOfLocalAndServer] server: " + serverSize + " local: " + localSize);
                    if (serverSize == localSize) {
                        wsFileSystem.download.moveTempFile(src)
                    } else if (wsFileSystem.checkFileExists(wsFileSystem.getFailedFileName(src))) {
                        log("Downloaded file and file on Server have different sizes. Download aborted.", "File on server and local file " + src + " have different sizes. Download will NOT be restarted. ")
                    } else {
                        wsFileSystem.download.file(src);
                        wsFileSystem.writeFile(wsFileSystem.getFailedFileName(src), 'failed');
                        log("Downloaded file and file on Server have different sizes. Download restarted.", "File on server and local file " + src + " have different sizes. Download will be restarted. ")
                    }
                },
                error: function() {
                    log('', 'compareFileSizeOfLocalAndServer.ajax.error called. Any other event?');
                    return 0
                }
            })
        },
        downloadIfHasSpace: function(src) {
            if (src == null || src == undefined)
                return false;
            $.ajax({
                type: 'HEAD',
                url: src,
                async: false,
                complete: function(resp, textStatus) {
                    if (resp.statusText != 'OK' || resp.status != '200') {
                        log('File not found on server.', 'File ' + src + ' not found on server. downloadIfHasSpace -> status (' + resp.statusText + '/' + resp.status + ') != OK/200. Jump to next.');
                        wsFileSystem.download.filesToDownload.shift();
                        return window.setTimeout("wsFileSystem.download.__download()", 1e3)
                    }
                    ;var serverSize = resp.getResponseHeader('Content-Length');
                    if (isNaN(parseInt(serverSize))) {
                        log('File not found on server.', 'File ' + src + ' not found on server. downloadIfHasSpace -> parseInt(serverSize) is NaN. Jump to next.');
                        return wsFileSystem.download.downloadIfHasSpaceRetry(src)
                    }
                    ;var localFreeSpace = wsFileSystem.getFreeSpace();
                    log('Check available space', 'Check available space: file size:' + wsFileSystem.parseSize(serverSize) + ' vs available space: ' + wsFileSystem.parseSize(localFreeSpace));
                    localFreeSpace -= wsFileSystem.minFreeSpace;
                    log('Free space: ' + wsFileSystem.parseSize(localFreeSpace), 'Local free space without buffer: ' + wsFileSystem.parseSize(localFreeSpace));
                    if (localFreeSpace <= serverSize) {
                        wsCaching.freeCacheForFilesize(serverSize, localFreeSpace);
                        localFreeSpace = wsFileSystem.getFreeSpace();
                        localFreeSpace -= wsFileSystem.minFreeSpace;
                        log('Free space: ' + wsFileSystem.parseSize(localFreeSpace), 'Local free space without buffer after : ' + wsFileSystem.parseSize(localFreeSpace))
                    }
                    ;if (localFreeSpace > serverSize) {
                        var tmpTarget = wsFileSystem.getTempFileName(src);
                        log("Starting download (" + wsFileSystem.parseSize(serverSize) + ")...", "Start downloading file " + src + ' into ' + tmpTarget + ' with size: ' + wsFileSystem.parseSize(serverSize));
                        this.isDownlaod = 1;
                        var result = wsFileSystem.downloader.Execute('StartDownFile', src, tmpTarget);
                        if (result == -1) {
                            log("File download failed.", "Download of file " + src + " failed.");
                            var tempFileName = wsFileSystem.downloadPrefix + wsFileSystem.getFilename(src);
                            if (wsFileSystem.checkFileExists(wsFileSystem.storagePath + tempFileName)) {
                                wsFileSystem.fileSystemObj.deleteCommonFile(tempFileName)
                            } else if (wsFileSystem.checkFileExists(wsFileSystem.storagePath + tempFileName + '.tmp'))
                                wsFileSystem.fileSystemObj.deleteCommonFile(tempFileName + '.tmp');
                            wsFileSystem.download.filesToDownload.shift();
                            wsFileSystem.download.file(src);
                            return window.setTimeout("wsFileSystem.download.__download()", 1e3 * 60 * 2)
                        }
                    } else {
                        wsFileSystem.download.filesToDownload.shift();
                        log("Could not download file. File to large for free disc space.", "File (" + src + ") is to large (" + wsFileSystem.parseSize(serverSize) + ") for local disc (" + wsFileSystem.parseSize(localFreeSpace) + "). Download aborted.");
                        return window.setTimeout("wsFileSystem.download.__download()", 1e3 * 60 * 2)
                    }
                },
                error: function() {
                    return 0
                }
            })
        },
        downloadIfHasSpaceRetry: function(src) {
            if (src == null || src == undefined)
                return false;
            $.ajax({
                type: "GET",
                async: false,
                url: wsPlaylist.AppUrl + 'content-length.php?url=' + encodeURI(src),
                success: function(message, text, response) {
                    if (response.statusText != 'OK') {
                        log('File not found on server.', 'File ' + src + ' not found on server. downloadIfHasSpace -> status (' + response.statusText + '/' + response.status + ') != OK/200. Jump to next.');
                        wsFileSystem.download.filesToDownload.shift();
                        return window.setTimeout("wsFileSystem.download.__download()", 1e3)
                    }
                    ;var serverSize = parseInt(message);
                    if (isNaN(parseInt(serverSize))) {
                        log('File not found on server.', 'File ' + src + ' not found on server. downloadIfHasSpace -> parseInt(serverSize) is NaN. Jump to next.');
                        wsFileSystem.download.filesToDownload.shift();
                        return window.setTimeout("wsFileSystem.download.__download()", 1e3)
                    }
                    ;var localFreeSpace = wsFileSystem.getFreeSpace();
                    log('Check available space', 'Check available space: file size:' + wsFileSystem.parseSize(serverSize) + ' vs available space: ' + wsFileSystem.parseSize(localFreeSpace));
                    localFreeSpace -= wsFileSystem.minFreeSpace;
                    log('Free space: ' + wsFileSystem.parseSize(localFreeSpace), 'Local free space without buffer: ' + wsFileSystem.parseSize(localFreeSpace));
                    if (localFreeSpace <= serverSize) {
                        wsCaching.freeCacheForFilesize(serverSize, localFreeSpace);
                        localFreeSpace = wsFileSystem.getFreeSpace();
                        localFreeSpace -= wsFileSystem.minFreeSpace;
                        log('Free space: ' + wsFileSystem.parseSize(localFreeSpace), 'Local free space without buffer after : ' + wsFileSystem.parseSize(localFreeSpace))
                    }
                    ;if (localFreeSpace > serverSize) {
                        var tmpTarget = wsFileSystem.getTempFileName(src);
                        log("Starting download (" + wsFileSystem.parseSize(serverSize) + ")...", "Start downloading file " + src + ' into ' + tmpTarget + ' with size: ' + wsFileSystem.parseSize(serverSize));
                        this.isDownlaod = 1;
                        var result = wsFileSystem.downloader.Execute('StartDownFile', src, tmpTarget);
                        if (result == -1) {
                            log("File download failed.", "Download of file " + src + " failed.");
                            var tempFileName = wsFileSystem.downloadPrefix + wsFileSystem.getFilename(src);
                            if (wsFileSystem.checkFileExists(wsFileSystem.storagePath + tempFileName)) {
                                wsFileSystem.fileSystemObj.deleteCommonFile(tempFileName)
                            } else if (wsFileSystem.checkFileExists(wsFileSystem.storagePath + tempFileName + '.tmp'))
                                wsFileSystem.fileSystemObj.deleteCommonFile(tempFileName + '.tmp');
                            wsFileSystem.download.filesToDownload.shift();
                            wsFileSystem.download.file(src);
                            return window.setTimeout("wsFileSystem.download.__download()", 1e3 * 60 * 2)
                        }
                    } else {
                        wsFileSystem.download.filesToDownload.shift();
                        log("Could not download file. File to large for free disc space.", "File (" + src + ") is to large (" + wsFileSystem.parseSize(serverSize) + ") for local disc (" + wsFileSystem.parseSize(localFreeSpace) + "). Download aborted.");
                        return window.setTimeout("wsFileSystem.download.__download()", 1e3 * 60 * 2)
                    }
                },
                error: function() {
                    return 0
                }
            })
        }
    },
    getFirmwareVersion: function() {
        return wsFileSystem.pluginNNavi.Execute("GetFirmware")
    },
    network: {
        getMacAddress: function() {
            return wsFileSystem.pluginNetwork.Execute("GetMAC", "1")
        },
        getActiveType: function() {
            var cType = wsFileSystem.pluginNetwork.Execute("GetActiveType")
              , networkType = 'unknown';
            if (cType == 1)
                networkType = 'wired';
            if (cType == 0)
                networkType = 'wireless';
            if (cType == -1)
                networkType = 'no active connection';
            return networkType
        },
        getDUID: function() {
            var PlayerIdFile = 'PlayerId.dat';
            if (wsFileSystem.checkIfFileExists(PlayerIdFile)) {
                var playerID = wsFileSystem.readFile(PlayerIdFile);
                playerID = $.trim(playerID);
                if (playerID.length > 0)
                    return playerID
            }
            ;var mac = this.getMacAddress()
              , fwv = wsFileSystem.pluginNNavi.Execute("GetFirmware")
              , rec = wsFileSystem.pluginNNavi.Execute("GetRemoconType")
              , strip = MD5(fwv + rec)
              , duid = strip.substr(0, 8) + '-' + strip.substr(9, 4) + '-' + strip.substr(14, 4) + '-' + strip.substr(19, 4) + '-' + mac;
            wsFileSystem.writeFile(PlayerIdFile, duid);
            return duid
        },
        getModel: function() {
            return 'SMART-TV-' + wsFileSystem.pluginNNavi.Execute("GetFirmware")
        },
        getModelVersion: function() {
            return wsFileSystem.pluginNNavi.Execute("GetFirmware")
        },
        currentCheck: false,
        onlineStatus: {
            check: function() {
                if (wsFileSystem.network.currentCheck == true)
                    return false;
                wsFileSystem.network.currentCheck = true;
                var heartBeatUrl = wsPlaylist.TimeServerUrl + "?original=" + (new Date()).getTime() + '&player_id=' + wsFileSystem.network.getDUID() + '&version=' + wsPlaylist.TvAppVersion + '&heartbeat=1';
                $.ajax({
                    type: 'GET',
                    url: heartBeatUrl,
                    async: false,
                    success: function(resp, status, xhr) {
                        if (typeof resp == 'string')
                            resp = JSON.parse(resp);
                        if (resp.deviceCommand == 'RESTART') {
                            log('Restart...', 'Restart message received.');
                            wsDeviceSystem.device.setReboot();
                            return true
                        }
                        ;if (resp.deviceCommand == 'RESET') {
                            log('Reset...', 'Reset message received.');
                            wsDeviceSystem.device.setReboot();
                            return true
                        }
                        ;if (resp.deviceCommand == 'REFACTOR') {
                            log('Rebuild...', 'Cleanup and reset...');
                            wsFileSystem.checkForUnusedFiles();
                            wsFileSystem.deleteFile('wsFile_apx_playlist.dat');
                            wsFileSystem.deleteFile('wsFile_lastModified');
                            wsFileSystem.deleteFile('wsFile_lastPlaylistXML');
                            wsDeviceSystem.device.setReboot();
                            return true
                        }
                        ;if (resp.deviceCommand == 'CLEAR_CACHE') {
                            log('Clear cache...', 'CLEAR_CACHE command received. Delete all local files...');
                            wsFileSystem.deleteAllLocalFiles();
                            wsFileSystem.deleteFile('wsFile_apx_playlist.dat');
                            wsFileSystem.deleteFile('wsFile_lastModified');
                            wsFileSystem.deleteFile('wsFile_lastPlaylistXML');
                            wsDeviceSystem.device.setReboot();
                            return true
                        }
                        ;if (resp.serverAppVersion.match(/^[0-9]+\.[0-9]+\.[0-9]+$/i))
                            if (wsPlaylist.TvAppVersion != resp.serverAppVersion) {
                                log('New Version ' + resp.serverAppVersion + ' found. Old version: ' + wsPlaylist.TvAppVersion + ' Restart on playlist end.', 'New Version ' + resp.serverAppVersion + ' found. Old version: ' + wsPlaylist.TvAppVersion + ' Restart on Playlist end.');
                                wsPlaylist.restartRequired = true
                            }
                        ;if (resp.inputSource != wsDeviceSystem.source.currentSource.name)
                            wsDeviceSystem.source.switchToSource(SOURCES[resp.inputSource]);
                        if (xhr.status == 200) {
                            wsFileSystem.network.onlineStatus.setOnlineStatus()
                        } else
                            wsFileSystem.network.onlineStatus.setOfflineStatus();
                        wsFileSystem.network.currentCheck = false
                    },
                    error: function() {
                        wsFileSystem.network.onlineStatus.setOfflineStatus();
                        wsFileSystem.network.currentCheck = false
                    }
                }, "json")
            },
            setOnlineStatus: function() {
                if (Wondersign.isOffline) {
                    Wondersign.isOffline = false;
                    $('#onlineStatus').removeClass('offline');
                    $('#onlineStatus').text('Online');
                    log("TV is online.", "[onlineStatus] OK. Wondersign is online.");
                    if (wsPlaylist.playerStatus == 0)
                        window.setTimeout('wsPlaylist.controls.play()', 6e4)
                }
            },
            setOfflineStatus: function() {
                if (!Wondersign.isOffline) {
                    Wondersign.isOffline = true;
                    $('#onlineStatus').addClass('offline');
                    $('#onlineStatus').text('Offline');
                    log("TV is offline.", "[onlineStatus] ERROR. Wondersign is offline.")
                }
            }
        }
    },
    log: {
        played: function() {
            if (Wondersign.isOffline)
                return false;
            var plLogItem = new wsPlaylogItem();
            plLogItem.reportPlaylog();
            return true
        }
    },
    showFiles: function() {
        var path = wsFileSystem.storagePath + ''
          , FileList = wsFileSystem.getAllFilesFromDirectory(path);
        log('Content of path ' + path, 'Content of path ' + path);
        if (FileList.length > 0) {
            $.each(FileList, function(index, el) {
                if (el.isDir) {
                    log('{' + el.name + '}', '{' + el.name + '}')
                } else
                    log('[' + el.name + ']', '[' + el.name + ']')
            })
        } else
            log('Sorry, but there are no files in this folder: ' + path, 'Folder ' + path + ' is empty.')
    },
    getFileList: function(path) {
        var FileList = wsFileSystem.getAllFilesFromDirectory(path)
          , out = ''
          , size = ''
          , displayPath = path.replace(wsFileSystem.storagePath, '');
        if (FileList.length > 0) {
            $.each(FileList, function(index, el) {
                if (el.isDir) {
                    if (el.name != '.' && el.name != '..') {
                        out += '[d|' + displayPath + '|' + el.name + '|0]' + "\n";
                        out += wsFileSystem.getFileList(path + el.name + '/')
                    }
                } else {
                    size = wsFileSystem.getFileSize(path + el.name);
                    out += '[f|' + displayPath + '|' + el.name + '|' + size + ']' + "\n"
                }
            })
        } else
            out += "{error}\nSorry, but there are no files in this folder: " + path,
            'Folder ' + path + ' is empty.';
        return out
    },
    deleteAllLocalFiles: function() {
        var FileList = wsFileSystem.getFilesFromLocalStorage();
        if (FileList.length > 0) {
            $.each(FileList, function(index, el) {
                wsFileSystem.deleteFile(el.name)
            });
            var logStr = JSON.stringify(FileList);
            log("Delete all local files.", 'Delete all local files: ' + JSON.stringify(FileList))
        } else
            log('Sorry, but there are no files in this folder.', 'deleteAllLocalFiles: no file found.')
    },
    unzipFile: function(file) {
        var source = wsFileSystem.getLocalFileName(file)
          , target = wsFileSystem.getLocalFileName(file) + wsFileSystem.widgetPostfix;
        log('Unzip file.', 'Extract file ' + source + ' into ' + target);
        wsFileSystem.oldSystemObj.Unzip(source, target)
    },
    checkOfflineVersion: function() {
        var source = wsPlaylist.AppUrl + '2013/index.php?download=1'
          , location = wsFileSystem.storagePath + 'HospitalityBrowser/offline.html';
        log('Download offline version.', 'Download of ' + source + ' into ' + location + ' ...');
        var result = wsFileSystem.downloader.Execute('StartDownFile', source, location)
          , source = wsPlaylist.AppUrl + 'Images/load.gif'
          , location = wsFileSystem.storagePath + 'load.gif';
        log('Download offline images.', 'Download of ' + source + ' into ' + location + ' ...');
        var result = wsFileSystem.downloader.Execute('StartDownFile', source, location)
    },
    destroy: function() {
        this.plugin.Close();
        this.downloader.Close();
        this.pluginNetwork.Close();
        this.pluginNNavi.Close()
    }
};
wsFileSystem.debugFillDeviceStorage = function() {
    var localFreeSpace = wsFileSystem.getFreeSpace()
      , fileData = wsFileSystem.debugGenerateRandomString(1e4, 'aA')
      , StringUtilities = {
        repeat: function(str, times) {
            return (new Array(times + 1)).join(str)
        }
    };
    fileData = StringUtilities.repeat(fileData, 1500);
    var fileName = wsFileSystem.debugGetRandomFileName()
      , sourceFile = fileName
      , path = '';
    if (wsFileSystem.storagePath.indexOf('HospitalityBrowser') > -1) {
        path = 'HospitalityBrowser/';
        var fileObj = wsFileSystem.fileSystemObj.openCommonFile('HospitalityBrowser/' + fileName, 'w')
    } else
        var fileObj = wsFileSystem.fileSystemObj.openCommonFile(fileName, 'w');
    fileObj.writeAll(fileData);
    wsFileSystem.fileSystemObj.closeCommonFile(fileObj);
    var fileSize = wsFileSystem.getFileSize('/mtd_down/common/' + path + fileName)
      , file = {
        filename: fileName,
        filesize: fileSize,
        inPlaylist: 0
    };
    wsDataStorage.insert(file);
    log('', 'Save generated file ' + wsFileSystem.storagePath + sourceFile + ' with size ' + wsFileSystem.parseSize(file.filesize));
    wsFileSystem.debugCopyFile(sourceFile, fileSize)
}
;
wsFileSystem.debugCopyFile = function(sourceFile, fileSize) {
    clearTimeout(wsFileSystem.debugCopyTimeout);
    var localFreeSpace = wsFileSystem.getFreeSpace();
    if (localFreeSpace > 31457280) {
        var fileName = wsFileSystem.debugGetRandomFileName()
          , file = {
            filename: fileName,
            filesize: fileSize,
            inPlaylist: 0
        };
        wsFileSystem.oldSystemObj.Copy(wsFileSystem.storagePath + sourceFile, wsFileSystem.storagePath + fileName);
        wsDataStorage.insert(file);
        log('', 'Copying file ' + wsFileSystem.storagePath + sourceFile + ' to ' + wsFileSystem.storagePath + fileName);
        wsFileSystem.debugCopyTimeout = setTimeout(function() {
            wsFileSystem.debugCopyFile(sourceFile, fileSize)
        }, 1e3)
    } else
        log('Current free space ' + wsFileSystem.parseSize(localFreeSpace), 'Current free space ' + wsFileSystem.parseSize(localFreeSpace))
}
;
wsFileSystem.debugGetRandomFileName = function() {
    var randomNum = parseInt(Math.random() * 1e14)
      , fileName = wsFileSystem.filePrefix + randomNum + '.jpg';
    if (wsFileSystem.checkFileExists(wsFileSystem.storagePath + fileName)) {
        randomNum = parseInt(Math.random() * 1e7);
        fileName = wsFileSystem.filePrefix + randomNum + '.jpg';
        while (wsFileSystem.checkFileExists(wsFileSystem.storagePath + fileName)) {
            randomNum = parseInt(Math.random() * 1e7);
            fileName = wsFileSystem.filePrefix + randomNum + '.jpg'
        }
    }
    ;return fileName
}
;
wsFileSystem.debugGenerateRandomString = function(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1)
        mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1)
        mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1)
        mask += '0123456789';
    if (chars.indexOf('!') > -1)
        mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i)
        result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result
}
;
var wsSinglePlaylistItem = function() {
    this.src = false;
    this.filename = false;
    this.type = false;
    this.logContentId = false;
    this.duration = 10;
    this.setSource = function(src) {
        this.filename = wsFileSystem.getFilename(src);
        this.src = src
    }
    ;
    this.getSource = function() {
        return this.src
    }
    ;
    this.getFilename = function() {
        return this.filename
    }
    ;
    this.getFilepath = function() {
        return wsFileSystem.storagePath + wsFileSystem.filePrefix + this.filename
    }
    ;
    this.setType = function(type) {
        this.type = type
    }
    ;
    this.getType = function() {
        return this.type
    }
    ;
    this.setDuration = function(duration) {
        this.duration = duration
    }
    ;
    this.getDuration = function() {
        return this.duration
    }
    ;
    this.setLogContentId = function(logContentId) {
        this.logContentId = logContentId
    }
    ;
    this.getLogContentId = function() {
        return this.logContentId
    }
}
  , wsPlaylogItem = function() {
    this.logContentId = false;
    this.startTime = false;
    this.endTime = false;
    this.playLogFile = 'playLog.dat';
    this.setElement = function(logContentId) {
        this.logContentId = logContentId;
        this.startTime = wsDeviceSystem.device.getLogfileFormattedTime()
    }
    ;
    this.stop = function() {
        this.endTime = wsDeviceSystem.device.getLogfileFormattedTime();
        this.logItemToPlayedFile()
    }
    ;
    this.getLogString = function() {
        return this.logContentId + ';' + this.startTime + ';' + this.endTime
    }
    ;
    this.logItemToPlayedFile = function() {
        log('', 'logItemToPlayedFile: ' + this.getLogString());
        wsFileSystem.appendToFile(this.playLogFile, this.getLogString() + '|')
    }
    ;
    this.reportPlaylog = function() {
        if (Wondersign.isOffline) {
            log('Reporting aborted. App is offline.', 'Reporting aborted. App is offline.');
            return false
        }
        ;var logContent = wsFileSystem.readFile(this.playLogFile);
        if (logContent == null)
            return false;
        if (logContent.length < 1)
            return false;
        wsFileSystem.writeFile(this.playLogFile, '');
        var logItems = logContent.split('|');
        wsXmlGenerator.init();
        var logLenght = 0;
        for (var i = 0; i < logItems.length; i++) {
            var logItem = logItems[i].split(';');
            if (logItem.length == 3) {
                wsXmlGenerator.addItem(logItem[0], logItem[1], logItem[2]);
                logLenght++
            } else
                log('', 'Error: LogItem length is ' + logItem.length + ' Item: ' + logItems[i])
        }
        ;$.put(wsPlaylist.ReportingUrl, wsXmlGenerator.getReporting(), function() {
            log('Playlog reported ' + logLenght + ' items', 'Playlog reported ' + logLenght + ' items to: ' + wsPlaylist.ReportingUrl)
        })
    }
}
  , SOURCES = [];
SOURCES.APP = {
    sourceValue: 43,
    name: 'APP',
    showApp: true
};
SOURCES.TV = {
    sourceValue: 0,
    name: 'TV',
    showApp: false
};
SOURCES.PC = {
    sourceValue: 27,
    name: 'PC',
    showApp: false
};
SOURCES.HDMI = {
    sourceValue: 31,
    name: 'HDMI',
    showApp: false
};
var wsDeviceSystem = {
    debugFile: 'debuglog.dat',
    pluginApi: false,
    pluginLFDSef: false,
    pluginTime: false,
    pluginWindow: false,
    msgId: 0,
    isHdmiBackSwitch: false,
    initialized: false,
    init: function() {
        this.pluginLFDSef = document.getElementById('pluginLFDSef');
        this.pluginLFDSef.Open("LFD", "1.000", "LFD");
        this.pluginLFDSef.onEvent = wsDeviceSystem.debug.onLfdEvent;
        this.pluginTime = document.getElementById('pluginTime');
        if (Wondersign.tvVersion == '2013')
            this.pluginTime.Open("Time", "1.000", "Time");
        this.pluginLFDSef.Execute('SendLFDMsg', 'A300020300');
        this.pluginWindow = document.getElementById('WindowPlugin');
        this.pluginWindow.Open('Window', '1.002', 'Window');
        this.initialized = true
    },
    device: {
        isPanelOn: true,
        manuallyTurnedOff: false,
        turnPanelOn: function() {
            this.isPanelOn = true;
            wsDeviceSystem.pluginLFDSef.Execute("SendLFDMsg", "F9000100");
            log('Panel on.', 'Turning panel on.')
        },
        turnPanelOff: function() {
            this.isPanelOn = false;
            wsDeviceSystem.pluginLFDSef.Execute("SendLFDMsg", "F9000101");
            log('Panel off.', 'Turning panel off.')
        },
        setRecoveryReboot: function() {
            var rebootTime = (Wondersign.timeSyncInterval + (1e3 * 60 * 5)) / 1e3 / 60;
            log('Set recovery reboot: +' + rebootTime + ' minutes.', 'Set recovery reboot: +' + rebootTime + ' minutes.');
            wsDeviceSystem.device.setOnOffTimerWithDelay(rebootTime, 2)
        },
        setReboot: function() {
            wsDeviceSystem.pluginLFDSef.Execute("rebootSystemCmd", 'Reboot')
        },
        setOnOffTimerWithDelay: function(offDelay, onDelay) {
            if (typeof offDelay == 'undefined')
                var offDelay = 2;
            if (typeof onDelay == 'undefined')
                var onDelay = 2;
            var currentTime = wsDeviceSystem.device.getCurrentTimeObject()
              , offHour = parseInt(currentTime.hour)
              , offMinute = parseInt(currentTime.minute) + parseInt(offDelay);
            while (offMinute > 59) {
                offMinute -= 60;
                offHour += 1;
                if (offHour > 23)
                    offHour = 0
            }
            ;var onHour = offHour
              , onMinute = offMinute + parseInt(onDelay);
            if (onMinute > 59) {
                onMinute -= 60;
                onHour += 1;
                if (onHour > 23)
                    onHour = 0
            }
            ;log('Set OnOffTimer', 'Set OnOffTimer. Off: ' + offHour + ':' + offMinute + ' On: ' + onHour + ':' + onMinute + ' - Current time: ' + wsDeviceSystem.device.getCurrentFormattedTime());
            this.setOnOffTimer(offHour, offMinute, onHour, onMinute)
        },
        clearOnOffTimer: function() {
            log('Clear On/Off Timer', 'Clear On/Off Timer');
            wsDeviceSystem.pluginLFDSef.Execute('SendLFDMsg', 'A4000F0C0000000C00000000000000002000')
        },
        setOnOffTimer: function(offHour, offMinute, onHour, onMinute) {
            offHour = parseInt(offHour);
            offMinute = parseInt(offMinute);
            if (offHour < 0 || offHour > 23)
                return false;
            if (offMinute < 1 || offMinute > 59)
                return false;
            onHour = parseInt(onHour);
            onMinute = parseInt(onMinute);
            if (onHour < 0 || onHour > 23)
                return false;
            if (onMinute < 1 || onMinute > 59)
                return false;
            if (offHour == 0) {
                var fH = wsDeviceSystem.getHexValue(12)
                  , fP = '01'
            } else if (offHour == 12) {
                var fH = wsDeviceSystem.getHexValue(12)
                  , fP = '00'
            } else if (offHour > 12) {
                offHour -= 12;
                var fH = wsDeviceSystem.getHexValue(offHour)
                  , fP = '00'
            } else {
                var fH = wsDeviceSystem.getHexValue(offHour)
                  , fP = '01'
            }
            ;var fM = wsDeviceSystem.getHexValue(offMinute);
            if (onHour == 0) {
                var nH = wsDeviceSystem.getHexValue(12)
                  , nP = '01'
            } else if (onHour == 12) {
                var nH = wsDeviceSystem.getHexValue(12)
                  , nP = '00'
            } else if (onHour > 12) {
                onHour -= 12;
                var nH = wsDeviceSystem.getHexValue(onHour)
                  , nP = '00'
            } else {
                var nH = wsDeviceSystem.getHexValue(onHour)
                  , nP = '01'
            }
            ;var nM = wsDeviceSystem.getHexValue(onMinute)
              , logStr = 'Off-Timer: ' + offHour + ':' + offMinute + ' / On-Timer: ' + onHour + ':' + onMinute;
            log(logStr, logStr);
            var lfdMessage = 'A4000F' + nH + nM + nP + '01' + fH + fM + fP + '0100000000001400';
            log('', 'SendLFDMsg: ' + lfdMessage);
            wsDeviceSystem.pluginLFDSef.Execute('SendLFDMsg', lfdMessage)
        },
        syncTime: function() {
            $.post(wsPlaylist.TimeServerUrl, "original=" + (new Date()).getTime() + '&player_id=' + wsFileSystem.network.getDUID() + '&version=' + wsPlaylist.TvAppVersion, function(response) {
                log('', 'TimeSync response: ' + JSON.stringify(response));
                var returned = (new Date()).getTime()
                  , original = +response.original
                  , receive = +response.receive
                  , transmit = +response.transmit
                  , sending = receive - original
                  , receiving = returned - transmit
                  , roundtrip = sending + receiving
                  , oneway = roundtrip / 2
                  , difference = sending - oneway;
                Wondersign.timediff = Math.round(difference);
                if (response.rescueRebootTime > 0) {
                    var newRebootTime = response.rescueRebootTime * 60 * 1e3;
                    if (Wondersign.timeSyncInterval != newRebootTime) {
                        Wondersign.timeSyncInterval = newRebootTime;
                        clearTimeout(Wondersign.timeSyncIntervalObject);
                        Wondersign.timeSyncIntervalObject = window.setInterval('wsDeviceSystem.device.syncTime()', Wondersign.timeSyncInterval)
                    }
                }
                ;wsDeviceSystem.device.setSystemTime(((new Date()).getTime() + Wondersign.timediff) / 1e3);
                log('Time after Sync: ' + wsDeviceSystem.device.getCurrentFormattedTime(), 'Time after Sync: ' + wsDeviceSystem.device.getCurrentFormattedTime());
                if (Wondersign.firstStart) {
                    wsDeviceSystem.device.clearOnOffTimer();
                    Wondersign.firstStart = false;
                    log('', 'First start. Load app.');
                    Wondersign.start()
                } else if (wsPlaylist.TvAppVersion != response.serverAppVersion) {
                    log('New App Version found. Restart required.', 'New Version ' + response.serverAppVersion + ' found. Old version: ' + wsPlaylist.TvAppVersion + ' Restart on Playlist end.');
                    wsPlaylist.restartRequired = true
                } else
                    log('Time sync done.', 'Time sync done.')
            }, "json")
        },
        setSystemTime: function(epochTime) {
            if (Wondersign.tvVersion == '2014') {
                var localTime = wsDeviceSystem.pluginTime.ConvertEpochToLocalTime(epochTime)
            } else
                var localTime = wsDeviceSystem.pluginTime.Execute('ConvertEpochToLocalTime', epochTime);
            var ts = localTime.split('/')
              , message = 'A7';
            message += wsDeviceSystem.getHexValue(wsDeviceSystem.msgId++);
            message += '07';
            var day = parseInt(ts[2], 10)
              , month = parseInt(ts[1], 10)
              , year = parseInt(ts[0], 10)
              , yearHigh = Math.floor(year / 256)
              , yearLow = year % 256
              , hour = parseInt(ts[3], 10) % 12;
            hour = (hour === 0 ? 12 : hour);
            var am = parseInt(ts[3], 10) < 12
              , minute = parseInt(ts[4], 10);
            message += wsDeviceSystem.getHexValue(day) + wsDeviceSystem.getHexValue(hour) + wsDeviceSystem.getHexValue(minute) + wsDeviceSystem.getHexValue(month) + wsDeviceSystem.getHexValue(yearHigh) + wsDeviceSystem.getHexValue(yearLow) + (am ? '01' : '00');
            log('', "SendLFDMsg: " + message);
            wsDeviceSystem.pluginLFDSef.Execute('SendLFDMsg', message)
        },
        getCurrentTime: function() {
            if (Wondersign.tvVersion == '2014') {
                var localTime = wsDeviceSystem.pluginTime.ConvertEpochToLocalTime(this.getCurrentEpochTime())
            } else
                var localTime = wsDeviceSystem.pluginTime.Execute('ConvertEpochToLocalTime', this.getCurrentEpochTime());
            if (localTime == '')
                return false;
            return localTime
        },
        getCurrentTimeObject: function() {
            var localTime = this.getCurrentTime();
            if (localTime == false)
                return {
                    year: 1970,
                    month: 1,
                    day: 1,
                    hour: 0,
                    minute: 0,
                    second: 0
                };
            var ts = localTime.split('/');
            return {
                year: parseInt(ts[0]),
                month: parseInt(ts[1]),
                day: parseInt(ts[2]),
                hour: parseInt(ts[3]),
                minute: parseInt(ts[4]),
                second: parseInt(ts[5])
            }
        },
        getOffsetString: function() {
            var offset = parseInt(wsFileSystem.timezoneOffset) / 60;
            if (offset < 0) {
                var prefix = '-'
            } else
                var prefix = '+';
            offset = Math.abs(offset);
            if (offset == Math.floor(offset)) {
                offset = prefix + pad(offset, 2) + ':00'
            } else {
                var min = offset - Math.floor(offset);
                min = min * 60;
                offset = prefix + pad(Math.floor(offset), 2) + ':' + min
            }
            ;return offset
        },
        getLogfileFormattedTime: function() {
            var localTime = this.getCurrentTime();
            if (localTime == false)
                return false;
            var ts = localTime.split('/');
            return ts[0] + '-' + ts[1] + '-' + ts[2] + 'T' + ts[3] + ':' + ts[4] + ':' + ts[5] + this.getOffsetString()
        },
        getCurrentFormattedTime: function() {
            var localTime = this.getCurrentTime();
            if (localTime == false)
                return false;
            var ts = localTime.split('/');
            return ts[0] + '-' + ts[1] + '-' + ts[2] + ' ' + ts[3] + ':' + ts[4] + ':' + ts[5]
        },
        getCurrentEpochTime: function() {
            if (Wondersign.tvVersion == '2014') {
                return wsDeviceSystem.pluginTime.GetEpochTime()
            } else
                return wsDeviceSystem.pluginTime.Execute('GetEpochTime')
        },
        getScreenshot: function() {
            if (Wondersign.tvVersion == '2014')
                ;return false
        }
    },
    source: {
        sourceOrder: [SOURCES.APP, SOURCES.PC, SOURCES.TV, SOURCES.HDMI],
        currentSource: SOURCES.APP,
        switchToSource: function(newSource) {
            if (typeof newSource == 'undefined') {
                log('An invalid source is given.', 'An invalid source is given to the Device.');
                return false
            }
            ;log('Switching to ' + newSource.name, 'Switching to ' + newSource.name);
            var curSource = this.currentSource
              , pressPlay = false;
            if (curSource.showApp && !newSource.showApp) {
                wsPlaylist.controls.stop()
            } else if (!curSource.showApp && newSource.showApp) {
                log('SwitchToSource', 'SwitchToSource !curSource.showApp && newSource.showApp');
                pressPlay = true;
                wsDeviceSystem.isHdmiBackSwitch = true
            }
            ;wsDeviceSystem.pluginWindow.Execute("SetSource", newSource.sourceValue);
            this.currentSource = newSource;
            if (pressPlay)
                wsPlaylist.controls.play()
        }
    },
    getHexValue: function(number) {
        var padding = '00'
          , result = padding + number.toString(16);
        return result.substr(-2, 2).toUpperCase()
    }
};
wsDeviceSystem.debugFile = 'debuglog.dat';
wsDeviceSystem.debug = {
    LogStr: '',
    sendProcess: false,
    statusOK: '',
    statusError: 'ERROR',
    systemInfo: {
        plugins: {
            pluginCPUSef: null,
            pluginRAMSef: null,
            pluginRBTSef: null,
            pluginUPTSef: null
        },
        initPlugins: function() {
            wsDeviceSystem.debug.systemInfo.plugins.pluginCPUSef = document.getElementById('pluginCPUobjectSef');
            wsDeviceSystem.debug.systemInfo.plugins.pluginRAMSef = document.getElementById('pluginRAMobjectSef');
            wsDeviceSystem.debug.systemInfo.plugins.pluginUPTSef = document.getElementById('pluginUPTobjectSef');
            wsDeviceSystem.debug.systemInfo.plugins.pluginCPUSef.OnEvent = CPUSef_OnEvent;
            wsDeviceSystem.debug.systemInfo.plugins.pluginRAMSef.OnEvent = RAMSef_OnEvent;
            wsDeviceSystem.debug.systemInfo.plugins.pluginUPTSef.OnEvent = UPTSef_OnEvent;
            wsDeviceSystem.debug.systemInfo.plugins.pluginCPUSef.Open("LFD", "1.000", "LFD");
            wsDeviceSystem.debug.systemInfo.plugins.pluginRAMSef.Open("LFD", "1.000", "LFD");
            wsDeviceSystem.debug.systemInfo.plugins.pluginUPTSef.Open("LFD", "1.000", "LFD")
        },
        unload: function() {
            wsDeviceSystem.debug.systemInfo.plugins.pluginCPUSef.Close();
            wsDeviceSystem.debug.systemInfo.plugins.pluginRAMSef.Close();
            wsDeviceSystem.debug.systemInfo.plugins.pluginUPTSef.Close()
        },
        getInfo: function() {
            if (!$('#infoBoxWrapper').is(':visible'))
                return true;
            if (wsDeviceSystem.debug.systemInfo.plugins.pluginCPUSef == null)
                wsDeviceSystem.debug.systemInfo.initPlugins();
            wsDeviceSystem.debug.systemInfo.plugins.pluginCPUSef.Execute("getCPUUsage", '');
            wsDeviceSystem.debug.systemInfo.plugins.pluginRAMSef.Execute("getRamUsage", '');
            wsDeviceSystem.debug.systemInfo.plugins.pluginUPTSef.Execute("getSystemUpTime", '');
            setTimeout('wsDeviceSystem.debug.systemInfo.getInfo()', 1e3)
        }
    },
    displayMessage: function(displayStr) {
        $('#messages').prepend('<p>' + displayStr + '</p>')
    },
    addMessage: function(str) {
        wsFileSystem.appendToFile(wsDeviceSystem.debugFile, '[' + wsDeviceSystem.device.getLogfileFormattedTime() + ']: ' + str + '[|]')
    },
    sendDebugReport: function() {
        if (wsDeviceSystem.debug.sendProcess || Wondersign.isOffline)
            return false;
        wsDeviceSystem.debug.sendProcess = true;
        var logContent = wsFileSystem.readFile(wsDeviceSystem.debugFile);
        if (logContent == null) {
            wsDeviceSystem.debug.sendProcess = false;
            return false
        }
        ;if (logContent.length < 1) {
            wsDeviceSystem.debug.sendProcess = false;
            return false
        }
        ;wsFileSystem.writeFile(wsDeviceSystem.debugFile, '');
        logContent += '--info--' + "\n";
        logContent += '{firmware_version:' + wsFileSystem.getFirmwareVersion() + "}\n";
        logContent += '{used_size:' + wsFileSystem.getUsedSpace() + "}\n";
        logContent += '{free_size:' + wsFileSystem.getFreeSpace() + "}\n";
        logContent += '{total_size:' + wsFileSystem.getTotalSpace() + "}\n";
        logContent += '--files--' + "\n";
        logContent += wsFileSystem.getFileList(wsFileSystem.storagePath);
        wsDeviceSystem.debug.sendProcess = false;
        $.put(wsPlaylist.LogUrl, logContent, function() {
            wsDeviceSystem.debug.displayMessage('Report sent to server.')
        })
    },
    showDeviceInformations: function() {
        if ($('#infoBoxWrapper').is(':visible')) {
            $('#infoBoxWrapper').hide();
            return true
        }
        ;$('#infoBoxWrapper').show();
        this.infoBox.addInfo('PlayerTitle', 'Name', '');
        this.infoBox.addInfo('PlayerLocation', 'Location', '');
        this.infoBox.addInfo('PlayerTimezone', 'Timezone', '');
        var tmpVal = false;
        tmpVal = (Wondersign.isOffline) ? 'Offline' : 'Online';
        this.infoBox.addInfo('OnlineStatusApp', 'Current online status', tmpVal);
        tmpVal = (Wondersign.isOffline) ? wsDeviceSystem.debug.statusError : wsDeviceSystem.debug.statusOK;
        this.infoBox.updateStatus('OnlineStatusApp', tmpVal);
        this.infoBox.addInfo('LocalAppVersion', 'App version', wsPlaylist.TvAppVersion);
        tmpVal = wsFileSystem.network.getDUID();
        this.infoBox.addInfo('PlayerId', 'Device ID', wsFileSystem.network.getDUID());
        tmpVal = (tmpVal.length == 36) ? wsDeviceSystem.debug.statusOK : wsDeviceSystem.debug.statusError;
        this.infoBox.updateStatus('PlayerId', tmpVal);
        this.infoBox.addInfo('ExternalIP', 'External IP address', '');
        tmpVal = wsFileSystem.network.getActiveType();
        this.infoBox.addInfo('NetworkType', 'Active network connection', tmpVal);
        if (tmpVal == 'wired' || tmpVal == 'wireless') {
            this.infoBox.updateStatus('NetworkType', wsDeviceSystem.debug.statusOK)
        } else
            this.infoBox.updateStatus('NetworkType', wsDeviceSystem.debug.statusError);
        this.infoBox.addInfo('MacAddress', 'MAC address', wsFileSystem.network.getMacAddress());
        this.infoBox.addInfo('TvModel', 'Model', wsFileSystem.network.getModelVersion());
        tmpVal = wsFileSystem.getFirmwareVersion();
        if (tmpVal != wsFileSystem.network.getModelVersion())
            this.infoBox.addInfo('FirmwareVersion', 'Firmware version', tmpVal);
        var fwv = wsFileSystem.pluginNNavi.Execute("GetSystemVersion", 0)
          , rec = wsFileSystem.pluginNNavi.Execute("GetSystemVersion", 1);
        this.infoBox.addInfo('LEEUMversion', 'LEEUM Platform version', fwv);
        this.infoBox.addInfo('COMPversion', 'COMP version', rec);
        this.infoBox.addInfo('SizeTotal', 'Total space', wsFileSystem.getTotalSize());
        this.infoBox.addInfo('UsedTotal', 'Used space', wsFileSystem.getUsedSize());
        this.infoBox.addInfo('FreeTotal', 'Free space', wsFileSystem.getFreeSize());
        this.infoBox.addInfo('CachedSizeUsed', 'Cached files in use', wsFileSystem.parseSize(wsCaching.getPlaylistSize()));
        this.infoBox.addInfo('CachedSizeUnused', 'Cached files unused', wsFileSystem.parseSize(wsCaching.getCachedSize()));
        this.checkUrl();
        wsDeviceSystem.debug.systemInfo.getInfo();
        $('#infoBoxWrapper').center()
    },
    checkUrl: function() {
        var heartBeatUrl = wsPlaylist.TimeServerUrl + "?original=" + (new Date()).getTime() + '&player_id=' + wsFileSystem.network.getDUID() + '&version=' + wsPlaylist.TvAppVersion + '&sysInfo=1';
        $.ajax({
            type: 'GET',
            url: heartBeatUrl,
            async: false,
            success: function(resp, status, xhr) {
                if (typeof resp == 'string')
                    resp = JSON.parse(resp);
                wsDeviceSystem.debug.infoBox.updateValue('ExternalIP', resp.remoteIp);
                wsDeviceSystem.debug.infoBox.updateValue('PlayerTitle', resp.player.title);
                wsDeviceSystem.debug.infoBox.updateValue('PlayerLocation', resp.player.location);
                wsDeviceSystem.debug.infoBox.updateValue('PlayerTimezone', resp.player.timezone);
                wsDeviceSystem.debug.infoBox.updateStatus('ExternalIP', wsDeviceSystem.debug.statusOK);
                if (resp.serverAppVersion == wsPlaylist.TvAppVersion) {
                    wsDeviceSystem.debug.infoBox.updateStatus('LocalAppVersion', wsDeviceSystem.debug.statusOK)
                } else
                    wsDeviceSystem.debug.infoBox.updateStatus('LocalAppVersion', wsDeviceSystem.debug.statusError)
            },
            error: function() {
                wsFileSystem.network.onlineStatus.setOfflineStatus();
                wsDeviceSystem.debug.infoBox.updateStatus('OnlineStatusApp', wsDeviceSystem.debug.statusError);
                wsDeviceSystem.debug.infoBox.updateValue('ExternalIP', 'Network error');
                wsDeviceSystem.debug.infoBox.updateStatus('ExternalIP', wsDeviceSystem.debug.statusError)
            }
        }, "json")
    },
    infoBox: {
        oddOrEven: false,
        addInfo: function(id, label, value) {
            var box = $('#wrapper' + id)
              , rowClass = '';
            if (box.length == 0) {
                if (this.oddOrEven) {
                    this.oddOrEven = false;
                    rowClass = 'odd'
                } else {
                    this.oddOrEven = true;
                    rowClass = 'even'
                }
                ;$('#infoBox').html($('#infoBox').html() + '<div id="wrapper' + id + '" class="wrapper ' + rowClass + '"><span class="label">' + label + '</span><span id="value' + id + '">' + value + '</span><div class="clear"></div></div>')
            } else {
                $('#wrapper' + id + ' span.label').first().text(label);
                $('#value' + id).html(value)
            }
        },
        updateStatus: function(id, statusText) {
            var status = $('#value' + id + '').addClass(statusText)
        },
        updateValue: function(id, valueText) {
            $('#value' + id + '').html(valueText)
        }
    },
    onLfdEvent: function(eventType, param1, param2) {}
}
function RAMSef_OnEvent(eventType, param1, param2) {
    wsDeviceSystem.debug.infoBox.addInfo('RAMusage', 'RAM usage', eventType + ' % ')
}
function CPUSef_OnEvent(eventType, param1, param2) {
    wsDeviceSystem.debug.infoBox.addInfo('CPUusage', 'CPU usage', eventType + ' % ')
}
function UPTSef_OnEvent(eventType, param1, param2) {
    if (eventType > 0)
        wsDeviceSystem.debug.infoBox.addInfo('UPTusage', 'Up time', toHHMMSS(eventType))
}
;var wsPlaylist = {
    playlistFile: 'apx_playlist.dat',
    volumeLevelFile: 'apx_volume.dat',
    cacheDbFile: 'fileCacheDb.dat',
    playlist: [],
    current: 0,
    currentType: false,
    playNext: false,
    playerStatus: 0,
    isVideoPlaying: false,
    playlistPlayedCount: 0,
    XMLServer: 'https://connect.wondersign.com/{player_id}/{model}/playlist.smil',
    ReportingUrl: 'https://connect.wondersign.com/report/index.php?playerId={player_id}',
    TimeServerUrl: "https://sssp.wondersign.com/2013/sync.php",
    LogUrl: "https://sssp.wondersign.com/log.php?playerId={player_id}&model={model}",
    AppUrl: "https://sssp.wondersign.com/",
    TvAppVersion: "1.13.41",
    maxVolumeValue: 30,
    restartRequired: false,
    lastPlaylistRequest: (new Date()).getTime(),
    failSafeRebootTimer: 6e5,
    failSafeRebootInterval: null,
    failSafePlayNextItemInterval: null,
    lastPlayedItemTime: 0,
    lastPlayedFileDuration: 0,
    minRequestInterval: 6e3,
    checkingForNewPlaylist: false,
    checkingForNewPlaylistTimer: 3e5,
    failSafeCheckPlaylistInterval: null,
    player: {
        image: false,
        video: false,
        audio: false,
        onEvent: function(event, param) {
            switch (event) {
            case 14:
                break;
            case 1:
                log("Error: Connection failed", "Error: Connection failed");
                wsPlaylist.isVideoPlaying = false;
                wsPlaylist.__playNextItem();
                break;
            case 2:
                log("Error: Authentication failed", "Error: Authentication failed");
                wsPlaylist.isVideoPlaying = false;
                wsPlaylist.__playNextItem();
                break;
            case 3:
                log("Error: Stream not found", "Error: Stream not found");
                wsPlaylist.isVideoPlaying = false;
                wsPlaylist.__playNextItem();
                break;
            case 4:
                log("Error: Network disconnected", "Error: Network disconnected");
                break;
            case 6:
                var error;
                switch (parseInt(param)) {
                case 1:
                    error = "Unsupported container";
                    break;
                case 2:
                    error = "Unsupported video codec";
                    break;
                case 3:
                    error = "Unsupported audio codec";
                    break;
                case 6:
                    error = "Corrupted stream";
                    break;
                default:
                    error = "Unknown"
                }
                ;log("Playback error.", "OnRenderError: " + error + ' / ' + param);
                wsPlaylist.isVideoPlaying = false;
                wsPlaylist.__playNextItem();
                break;
            case 7:
                wsPlaylist.lastPlayedFileDuration = wsPlaylist.player.video.Execute("GetDuration");
                break;
            case 8:
                if (wsPlaylist.isVideoPlaying) {
                    log("End of streaming", 'OnRenderingComplete');
                    wsPlaylist.isVideoPlaying = false;
                    wsPlaylist.__playNextItem()
                }
                ;break;
            case 9:
                break;
            case 11:
                break;
            case 12:
                break;
            case 13:
                break;
            case 19:
                log("Subtitle", "Subtitle");
                break
            }
        }
    },
    init: function() {
        clearInterval(wsPlaylist.failSafeCheckPlaylistInterval);
        wsPlaylist.failSafeCheckPlaylistInterval = null;
        wsPlaylist.failSafeCheckPlaylistInterval = setInterval(function() {
            wsPlaylist.checkForNewPlaylist()
        }, wsPlaylist.checkingForNewPlaylistTimer);
        clearInterval(wsPlaylist.failSafeRebootInterval);
        wsPlaylist.failSafeRebootInterval = null;
        wsPlaylist.failSafeRebootInterval = setInterval(function() {
            var currentTime = (new Date()).getTime()
              , diff = currentTime - wsPlaylist.lastPlaylistRequest;
            if (diff > wsPlaylist.failSafeRebootTimer && !Wondersign.isOffline)
                wsDeviceSystem.device.setReboot()
        }, 1e4);
        clearInterval(wsPlaylist.failSafePlayNextItemInterval);
        wsPlaylist.failSafePlayNextItemInterval = null;
        wsPlaylist.failSafePlayNextItemInterval = setInterval(function() {
            var currentTime = (new Date()).getTime()
              , diff = currentTime - wsPlaylist.lastPlayedItemTime;
            if ((diff > wsPlaylist.lastPlayedFileDuration + 6e4) && wsPlaylist.lastPlayedFileDuration !== 0 && wsPlaylist.lastPlayedItemTime !== 0 && wsPlaylist.playlist.length > 0)
                wsDeviceSystem.device.setReboot()
        }, 1e4);
        this.player.video = document.getElementById("pluginPlayer");
        this.player.video.OnEvent = wsPlaylist.player.onEvent;
        this.player.video.Open("Player", "1.000", 'Player');
        this.player.audio = document.getElementById("pluginAudio");
        this.player.audio.Open("Audio", "1.000", "Audio");
        if (!this.generatePlayerId())
            return false;
        wsCaching.init();
        this.setFullscreen();
        return true
    },
    controls: {
        userDefinedVolume: false,
        volButtonPressed: 0,
        play: function() {
            if (wsPlaylist.playNext && wsPlaylist.playerStatus == 1) {
                log('Play not allowed!?', 'play not allowed...');
                return false
            }
            ;wsPlaylist.playerStatus = 1;
            wsPlaylist.playNext = true;
            wsPlaylist.__playNextItem()
        },
        stop: function() {
            wsPlaylist.playNext = false;
            wsPlaylist.current = 0;
            wsPlaylist.playerStatus = 0;
            wsPlaylist.currentPlayingItem = false;
            wsPlaylist.isVideoPlaying = false;
            wsPlaylist.currentIsImage = false;
            wsPlaylist.player.video.Execute("Stop");
            $('#website').attr('src', '')
        },
        resume: function() {
            if (wsPlaylist.playerStatus != 2)
                return false;
            wsPlaylist.player.video.Execute("Resume");
            wsPlaylist.playerStatus = 1
        },
        pause: function() {
            if (wsPlaylist.playerStatus != 1)
                return false;
            wsPlaylist.player.video.Execute("Pause");
            wsPlaylist.playerStatus = 2
        },
        getVolume: function() {
            var volume = wsPlaylist.player.audio.Execute('GetVolume');
            return volume
        },
        setVolume: function(volume) {
            wsPlaylist.player.audio.Execute("SetVolume", volume);
            return true
        },
        setVolumeWithKey: function(delta) {
            wsPlaylist.player.audio.Execute('SetVolumeWithKey', delta);
            var current = this.getVolume()
              , muteState = this.getMuteState();
            log('Mute', 'setVolumeWithKey: muteState: ' + muteState);
            if (current == 0 && muteState == 0) {
                this.setMute()
            } else if (current > 0 && muteState == 1)
                this.removeMute();
            this.showVolumePanel()
        },
        getMuteState: function() {
            return wsPlaylist.player.audio.Execute('GetUserMute')
        },
        setMute: function() {
            log('SetUserMute = 1', 'SetUserMute = 1');
            wsPlaylist.player.audio.Execute('SetUserMute', 1)
        },
        removeMute: function() {
            log('SetUserMute = 0', 'SetUserMute = 0');
            wsPlaylist.player.audio.Execute('SetUserMute', 0)
        },
        showVolumePanel: function() {
            var volPercent = this.getVolume();
            $('#innerVolumeBar').width(volPercent + '%');
            $('#volumeBar').show();
            wsPlaylist.controls.volButtonPressed += 1;
            window.setTimeout("wsPlaylist.controls.hideVolumePanel()", 1e3)
        },
        hideVolumePanel: function() {
            wsPlaylist.controls.volButtonPressed -= 1;
            if (wsPlaylist.controls.volButtonPressed > 0)
                return false;
            wsPlaylist.controls.volButtonPressed = 0;
            $('#volumeBar').hide();
            return true
        }
    },
    playlistItems: {
        add: function(src, duration, type, logContentId) {
            type = type.toLowerCase();
            if (src == null || (type != 'img' && type != 'video' && type != 'url' & type != 'widget'))
                return false;
            var playlistItem = new wsSinglePlaylistItem();
            playlistItem.setSource(src);
            playlistItem.setDuration(duration);
            playlistItem.setType(type);
            playlistItem.setLogContentId(logContentId);
            wsPlaylist.playlist.push(playlistItem);
            wsFileSystem.writeFile(wsPlaylist.playlistFile, JSON.stringify(wsPlaylist.playlist));
            if (type != 'url')
                if (!wsFileSystem.checkIfFileExists(src)) {
                    log("Download file...", "Download file: " + src);
                    wsFileSystem.download.file(src, null)
                } else
                    log("", "File exists: " + src);
            return true
        },
        remove: function() {},
        clear: function() {
            wsPlaylist.playlist = []
        },
        clearLocalPlaylist: function() {
            wsPlaylist.playlistItems.clear();
            wsFileSystem.writeFile(wsPlaylist.playlistFile, JSON.stringify(wsPlaylist.playlist))
        }
    },
    showWidget: function(filename) {},
    setFullscreen: function() {
        this.setScreenSize(0, 0, 1920, 1080);
        log('Play next item.', 'Set FullHD resolution. {0,0,1920,1080}')
    },
    setHDready: function() {
        this.setScreenSize(0, 0, 1280, 720);
        log('Play next item.', 'Set HDready resolution. {0,0,1280,720}')
    },
    setScreenSize: function(posX, posY, sizeX, sizeY) {
        if (Wondersign.tvVersion == '2014') {
            this.player.video.Execute('SetDisplayArea', posX, posY, sizeX, sizeY, 1080)
        } else
            this.player.video.Execute('SetDisplayArea', posX, posY, sizeX, sizeY)
    },
    isFileInPlaylist: function(filename) {
        if (this.playlist.length < 1)
            return false;
        var isInPlaylist = false;
        $.each(this.playlist, function(index, el) {
            if (filename == wsFileSystem.filePrefix + el.getFilename()) {
                isInPlaylist = true;
                return true
            }
        });
        return isInPlaylist
    },
    currentPlayingItem: false,
    currentPlayItem: false,
    currentIsImage: false,
    __playNextItem: function() {
        if (this.currentPlayingItem) {
            this.currentPlayingItem.stop();
            this.currentPlayingItem = false
        }
        ;if (!this.playNext) {
            log('Stop playback', 'Stop playback. playNext is false');
            return false
        }
        ;if (this.playlist[this.current] == undefined) {
            $('#load').hide();
            if (wsPlaylist.restartRequired == true) {
                wsDeviceSystem.device.setReboot();
                return false
            }
            ;this.current = 0;
            if (this.playlist.length > 0) {
                window.setTimeout('wsPlaylist.__playNextItem()', 5e3)
            } else
                wsPlaylist.controls.stop();
            window.setTimeout('wsPlaylist.checkForNewPlaylist()', 100);
            return false
        }
        ;var isPlayItem = false;
        wsPlaylist.currentIsImage = false;
        if (this.playlist[this.current].getType() == 'url') {
            log('Display URL', 'ref (URL) Item should be played.');
            wsPlaylist.player.video.Execute("Stop");
            if (Wondersign.isOffline) {
                log('TV is offline', 'TV is offline. Jump to next item.');
                var duration = 1
            } else {
                log('TV is online', 'TV is online. Loading element.');
                var duration = this.playlist[this.current].getDuration() * 1e3;
                $('#website').attr('src', this.playlist[this.current].getSource());
                isPlayItem = true
            }
        } else if (this.playlist[this.current].getType() == 'widget') {
            var duration = 1;
            log('widget could not be played', 'widget could not be played. Jump to next playlist item...')
        } else if (wsFileSystem.checkIfFileExists(this.playlist[this.current].getFilename())) {
            $('#website').attr('src', '');
            wsPlaylist.player.video.Execute("Stop");
            if (this.playlist[this.current].getType() == 'img') {
                var duration = this.playlist[this.current].getDuration() * 1e3;
                wsPlaylist.currentIsImage = true;
                wsPlaylist.setFullscreen()
            } else {
                wsPlaylist.isVideoPlaying = true;
                var duration = -1;
                wsPlaylist.setFullscreen()
            }
            ;log('Play', 'Send file to player plugin: ' + this.playlist[this.current].getFilepath());
            wsCaching.updateLastPlayed(this.playlist[this.current].getFilename());
            wsPlaylist.player.video.Execute("Play", this.playlist[this.current].getFilepath());
            isPlayItem = true
        } else {
            log('File does not exist.', 'File ' + this.playlist[this.current].getFilename() + ' does not exists. Jump to next item.');
            var duration = 1
        }
        ;if (isPlayItem) {
            wsDeviceSystem.device.turnPanelOn();
            document.getElementById("anchor").focus();
            $('#load').hide();
            this.currentPlayingItem = new wsPlaylogItem();
            this.currentPlayingItem.setElement(this.playlist[this.current].getLogContentId())
        }
        ;if (this.playlist.length > this.current) {
            this.current = this.current + 1
        } else {
            this.current = 0;
            if (this.playlist.length > 0)
                wsPlaylist.playlistPlayedCount += 1
        }
        ;wsPlaylist.lastPlayedItemTime = (new Date()).getTime();
        if (duration > 0) {
            wsPlaylist.lastPlayedFileDuration = duration;
            window.setTimeout('wsPlaylist.__playNextItem()', duration)
        }
        ;return true
    },
    loadLocalPlaylist: function() {
        var volume = wsFileSystem.readFile(this.volumeLevelFile);
        if (typeof volume == "string") {
            if (!volume.match(/^[0-9]+$/i))
                volume = 0;
            log('Saved volume for offline mode: ' + volume, 'Saved volume for offline mode: ' + volume);
            wsPlaylist.controls.setVolume(parseInt(volume))
        }
        ;var playlistContent = wsFileSystem.readFile(this.playlistFile);
        if (playlistContent) {
            var playlist = jQuery.parseJSON(playlistContent);
            $.each(playlist, function(index, el) {
                wsPlaylist.playlistItems.add(el.src, el.duration, el.type, el.logContentId)
            });
            if (this.playlist.length > 0) {
                log("Local playlist loaded.", "Local playlist loaded: " + playlistContent);
                wsCaching.helper.initFileSystem();
                return true
            }
        } else
            log("No playlist found.", "No playlist found.");
        return false
    },
    checkForNewPlaylist: function() {
        if (wsPlaylist.checkingForNewPlaylist === true)
            return;
        wsPlaylist.checkingForNewPlaylist = true;
        if (Wondersign.isOffline) {
            log('App is offline.', 'App is offline. checkForNewPlaylist is turned off.');
            wsPlaylist.checkingForNewPlaylist = false;
            return false
        }
        ;var currentTime = (new Date()).getTime()
          , diff = currentTime - wsPlaylist.lastPlaylistRequest;
        if (diff < wsPlaylist.minRequestInterval) {
            log('Request interval for checkPlaylist too short', 'Request interval for checkPlaylist too short. Diff: ' + diff);
            wsPlaylist.checkingForNewPlaylist = false;
            var checkForPlaylistTimeout = (wsPlaylist.minRequestInterval - diff + 1e3);
            if (checkForPlaylistTimeout < 0)
                checkForPlaylistTimeout = 1e3;
            window.setTimeout('wsPlaylist.checkForNewPlaylist()', checkForPlaylistTimeout);
            return false
        }
        ;wsPlaylist.lastPlaylistRequest = currentTime;
        $.ajax({
            type: 'GET',
            url: wsPlaylist.XMLServer,
            async: true,
            complete: function(resp, textStatus) {
                var datum = wsFileSystem.readFile("lastModified")
                  , lastPlaylistXML = wsFileSystem.readFile("lastPlaylistXML")
                  , lastModified = resp.getResponseHeader('Last-Modified');
                if (datum != null && typeof datum !== 'undefined') {
                    datum = datum.replace(/\s/g, "");
                    if (lastModified !== null && typeof lastModified !== 'undefined')
                        lastModified = lastModified.replace(/\s/g, "")
                }
                ;if (lastPlaylistXML != null) {
                    lastPlaylistXML = lastPlaylistXML.replace(/(\r\n|\n|\r)/gm, "");
                    lastPlaylistXML = lastPlaylistXML.replace(/\s+/g, "")
                }
                ;var respText = resp.responseText;
                if (respText != null) {
                    respText = respText.replace(/(\r\n|\n|\r)/gm, "");
                    respText = respText.replace(/\s+/g, "")
                }
                ;if (datum != lastModified || lastPlaylistXML != respText && respText.length > 0) {
                    log("New playlist available", "wsPlaylist.js -> checkForNewPlaylist: Playlist-Update available!");
                    wsFileSystem.writeFile("lastModified", lastModified);
                    wsFileSystem.writeFile("lastPlaylistXML", resp.responseText);
                    wsPlaylist.parseXml(resp.responseText)
                } else {
                    log('', "wsPlaylist.js -> checkForNewPlaylist: Playlist is up to date.");
                    wsPlaylist.checkingForNewPlaylist = false;
                    if (wsPlaylist.playerStatus == 0)
                        window.setTimeout('wsPlaylist.controls.play()', 6e4)
                }
            },
            error: function() {
                log("Playlist request failed", "Playlist request failed!");
                wsPlaylist.checkingForNewPlaylist = false;
                if (wsPlaylist.playerStatus == 0)
                    window.setTimeout('wsPlaylist.controls.play()', 6e4)
            }
        })
    },
    parseXml: function(xml) {
        var xmlDoc = $.parseXML(xml)
          , $xml = $(xmlDoc)
          , $seq = $xml.find("seq");
        if ($seq.length == 3) {
            var $region = $xml.find("region");
            if ($region.length > 0) {
                var soundLevel = parseInt($region[0].getAttribute('soundLevel'))
                  , volume = parseInt((wsPlaylist.maxVolumeValue / 100) * soundLevel);
                log('Save volume level for offline mode: ' + volume, 'Save volume level for offline mode: ' + volume);
                wsFileSystem.writeFile(this.volumeLevelFile, volume);
                if (!wsPlaylist.controls.userDefinedVolume) {
                    wsPlaylist.controls.setVolume(volume);
                    log('Set playlist volume: ' + volume, 'Set playlist volume: ' + volume)
                } else
                    log('', 'Do not set playlist volume. Volume set by remote control.')
            }
            ;wsPlaylist.playlistItems.clear();
            $.each($($seq[2]).children(), function(key, value) {
                var nodeName = value.nodeName.toLowerCase();
                if (nodeName == 'img' || nodeName == 'video' || nodeName == 'ref') {
                    var src = value.getAttribute("src")
                      , duration = value.getAttribute("dur")
                      , logContentId = '';
                    if (nodeName == 'ref') {
                        var type = value.getAttribute('type');
                        if (type == 'text/html') {
                            nodeName = 'url'
                        } else if (type == 'application/widget') {
                            nodeName = false
                        } else
                            nodeName = false
                    }
                    ;$.each($(value).children('param'), function(key, child) {
                        if (child.getAttribute('name') == 'logContentId')
                            logContentId = child.getAttribute('value')
                    });
                    if (nodeName !== false)
                        wsPlaylist.playlistItems.add(src, duration, nodeName, logContentId)
                } else
                    log('', 'Node name: ' + value.nodeName)
            });
            wsCaching.helper.initFileSystem();
            wsPlaylist.checkingForNewPlaylist = false;
            wsPlaylist.controls.play();
            return true
        } else {
            wsPlaylist.controls.stop();
            wsPlaylist.playlistItems.clearLocalPlaylist();
            wsDeviceSystem.device.turnPanelOff();
            wsCaching.helper.initFileSystem();
            wsPlaylist.checkingForNewPlaylist = false;
            window.setTimeout('wsPlaylist.controls.play()', 6e4);
            return false
        }
    },
    generatePlayerId: function() {
        var duid = wsFileSystem.network.getDUID();
        if (duid.length > 0) {
            this.XMLServer = this.XMLServer.replace('{player_id}', duid);
            this.XMLServer = this.XMLServer.replace('{model}', wsFileSystem.network.getModel());
            log('', 'XMLServer: ' + this.XMLServer);
            this.ReportingUrl = this.ReportingUrl.replace('{player_id}', duid);
            this.ReportingUrl = this.ReportingUrl.replace('{model}', wsFileSystem.network.getModel());
            log('', 'ReportingUrl: ' + this.ReportingUrl);
            this.LogUrl = this.LogUrl.replace('{player_id}', duid);
            this.LogUrl = this.LogUrl.replace('{model}', wsFileSystem.network.getModel());
            log('', 'LogUrl: ' + this.LogUrl);
            return true
        }
        ;return false
    },
    destroy: function() {
        if (this.player.video) {
            this.player.video.Execute("Stop");
            this.player.video.Close()
        }
        ;if (this.player.audio)
            this.player.audio.Close()
    }
};
$.createElement = function(name) {
    return $('<' + name + ' />')
}
;
$.fn.appendNewElement = function(name) {
    this.each(function(i) {
        $(this).append('<' + name + ' />')
    });
    return this
}
;
var wsXmlGenerator = {
    $root: false,
    $contentPlayLog: false,
    init: function() {
        wsXmlGenerator.$root = $('<XMLDocument />');
        var dateStr = wsXmlGenerator.formatDateStr(new Date());
        wsXmlGenerator.$root.append($('<report xmlns="http://schemas.adfotain.org/adapi-1.0" />').append($('<date />').text(dateStr)).append($('<version />').text('1.0')).appendNewElement('player id="' + wsFileSystem.network.getDUID() + '"'));
        var $report = wsXmlGenerator.$root.find('report')
          , $player = $report.find('player');
        $player.appendNewElement('contentPlayLog displayDeviceId="display:0"');
        wsXmlGenerator.$contentPlayLog = $player.find('contentPlayLog')
    },
    addItem: function(contentId, startTime, endTime) {
        var $newContent = $.createElement('contentPlayed');
        $newContent.append($.createElement('contentId').text(contentId));
        $newContent.append($.createElement('startTime').text(startTime));
        $newContent.append($.createElement('endTime').text(endTime));
        wsXmlGenerator.$contentPlayLog.append($newContent)
    },
    formatDateStr: function(date) {
        var month = date.getMonth() + 1
          , day = date.getDate();
        month = ((month < 10) ? "0" + month : month);
        day = ((day < 10) ? "0" + day : day);
        var hour = date.getHours()
          , min = date.getMinutes()
          , sec = date.getSeconds();
        hour = ((hour < 10) ? "0" + hour : hour);
        min = ((min < 10) ? "0" + min : min);
        sec = ((sec < 10) ? "0" + sec : sec);
        var dateStr = date.getFullYear() + '-' + month + '-' + day + 'T' + hour + ':' + min + ':' + sec + '-00:00';
        return dateStr
    },
    getReporting: function() {
        return '<?xml version="1.0" encoding="UTF-8"?>' + wsXmlGenerator.$root.html()
    }
}
  , widgetAPI = new Common.API.Widget()
  , tvKey = new Common.API.TVKeyValue()
  , Wondersign = {
    debug: false,
    isOffline: false,
    timediff: false,
    firstStart: true,
    timeSyncInterval: 1e3 * 60 * 60,
    timeSyncIntervalObject: false,
    checkOnlineStatusInterval: 1e3 * 60 * 5,
    sendDebugReportInterval: 1e3 * 60 * 10,
    playlistHeartBeat: 1e3 * 60 * 1,
    reportingInterval: 1e3 * 60 * 10,
    tvVersion: '2013',
    clearLogInterval: null,
    onLoad: function() {
        wsFileSystem.init();
        wsDeviceSystem.init();
        widgetAPI.sendReadyEvent();
        wsDeviceSystem.device.turnPanelOn();
        $('#consolenWrapper').hide();
        $('#onlineStatus').removeClass('hide');
        $('#website').hide();
        $('#volumeBar').hide();
        $('iframe#website').load(function() {
            if ($('#website').attr('src') == '') {
                $('#website').hide()
            } else
                $('#website').show()
        });
        log('App Version: ' + wsPlaylist.TvAppVersion, 'App Version: ' + wsPlaylist.TvAppVersion);
        log('Timezone offset in minutes: ' + wsFileSystem.timezoneOffset, 'Timezone offset in minutes: ' + wsFileSystem.timezoneOffset);
        var firmware = wsFileSystem.getFirmwareVersion();
        log('Firmware version: ' + firmware, 'Firmware version: ' + firmware);
        if (!Wondersign.isOffline)
            window.setTimeout('wsFileSystem.checkOfflineVersion();', 1e3);
        if (wsPlaylist.init()) {
            document.getElementById("anchor").focus();
            window.setInterval('wsFileSystem.network.onlineStatus.check()', Wondersign.checkOnlineStatusInterval);
            window.setInterval('wsDeviceSystem.debug.sendDebugReport()', Wondersign.sendDebugReportInterval);
            if (Wondersign.isOffline) {
                wsFileSystem.network.onlineStatus.setOfflineStatus();
                Wondersign.start()
            } else {
                Wondersign.timeSyncIntervalObject = window.setInterval('wsDeviceSystem.device.syncTime()', Wondersign.timeSyncInterval);
                wsDeviceSystem.device.syncTime()
            }
        } else
            window.setTimeout('wsDeviceSystem.device.setReboot()', 6e4);
        clearInterval(Wondersign.clearLogInterval);
        Wondersign.clearLogInterval = null;
        Wondersign.clearLogInterval = setInterval(function() {
            $('#messages p').eq(49).nextAll().remove()
        }, 6e4)
    },
    onUnload: function() {
        var pluginAPI = new Common.API.Plugin();
        pluginAPI.setOffIdleEvent();
        wsFileSystem.destroy();
        wsPlaylist.destroy()
    },
    getNewDate: function() {
        return new Date()
    },
    start: function() {
        wsCaching.reduceFileCount();
        window.setInterval('wsFileSystem.log.played()', Wondersign.reportingInterval);
        wsPlaylist.loadLocalPlaylist();
        wsPlaylist.controls.play()
    },
    keyCodeStr: '',
    keyCodeStrAdd: function(key) {
        this.keyCodeStr = key + this.keyCodeStr;
        if (this.keyCodeStr.length > 3)
            this.keyCodeStr = this.keyCodeStr.substr(0, 3);
        log('', 'KeyCodeStr: ' + this.keyCodeStr)
    },
    checkKeyCodeStrFunction: function() {
        switch (this.keyCodeStr) {
        case '000':
            wsDeviceSystem.device.clearOnOffTimer();
            break;
        case '330':
            $('#messages').html('');
            wsFileSystem.deleteAllLocalFiles();
            wsDeviceSystem.device.setReboot();
            break;
        case '430':
            wsDeviceSystem.device.turnPanelOff();
            wsDeviceSystem.device.isPanelOn = true;
            wsDeviceSystem.device.manuallyTurnedOff = true;
            break;
        case '530':
            var logStr = 'Firmware version: ' + wsFileSystem.pluginNNavi.Execute("GetFirmware");
            log(logStr, 'Key 7 pressed: ' + logStr);
            var logStr = 'Used size: ' + wsFileSystem.getUsedSize();
            log(logStr, 'Key 7 pressed: ' + logStr);
            var logStr = 'Free size: ' + wsFileSystem.getFreeSize();
            log(logStr, 'Key 7 pressed: ' + logStr);
            var logStr = 'Total size: ' + wsFileSystem.getTotalSize();
            log(logStr, 'Key 7 pressed: ' + logStr);
            break;
        case '630':
            var currentTime = wsDeviceSystem.device.getCurrentTimeObject();
            log('currentTime ' + currentTime.hour + ':' + currentTime.minute + ':' + currentTime.second + ' - ' + currentTime.day + '.' + currentTime.month + '.' + currentTime.year + '.', '');
            break;
        case '730':
            wsDeviceSystem.device.setReboot();
            break;
        case '830':
            var logStr = 'Mac address: ' + wsFileSystem.pluginNetwork.Execute("GetMAC", "1");
            log(logStr, 'Key 9 pressed: ' + logStr);
            break;
        case '040':
            wsDeviceSystem.source.switchToSource(SOURCES.APP);
            break;
        case '340':
            wsDeviceSystem.source.switchToSource(SOURCES.HDMI);
            break;
        case '440':
            wsDeviceSystem.source.switchToSource(SOURCES.PC);
            break;
        case '540':
            wsDeviceSystem.source.switchToSource(SOURCES.TV);
            break;
        case '350':
            wsFileSystem.checkForUnusedFiles();
            break;
        case '550':
            log('getFileList', '550 pressed');
            var FileList = wsFileSystem.getFilesFromLocalStorage();
            log('', JSON.stringify(FileList));
            break;
        case '666':
            wsFileSystem.writeFile(wsPlaylist.playlistFile, '');
            location.reload(true);
            break;
        case '335':
            break;
        default:
            break
        }
        ;Wondersign.keyCodeStr = ''
    },
    keyDown: function() {
        if (wsDeviceSystem.device.manuallyTurnedOff === true) {
            wsDeviceSystem.device.isPanelOn = false;
            wsDeviceSystem.device.turnPanelOn();
            wsDeviceSystem.device.manuallyTurnedOff = false;
            return true
        }
        ;var keyCode = event.keyCode;
        switch (keyCode) {
        case 101:
            Wondersign.keyCodeStrAdd('1');
            $('#messages').html('');
            wsDeviceSystem.device.setReboot();
            break;
        case 98:
            Wondersign.keyCodeStrAdd('2');
            $('#consolenWrapper').toggle();
            break;
        case 6:
            Wondersign.keyCodeStrAdd('3');
            break;
        case 8:
            Wondersign.keyCodeStrAdd('4');
            break;
        case 9:
            Wondersign.keyCodeStrAdd('5');
            break;
        case 10:
            Wondersign.keyCodeStrAdd('6');
            break;
        case 12:
            Wondersign.keyCodeStrAdd('7');
            break;
        case 13:
            Wondersign.keyCodeStrAdd('8');
            break;
        case 14:
            Wondersign.keyCodeStrAdd('9');
            break;
        case 17:
            Wondersign.keyCodeStrAdd('0');
            break;
        case 31:
            wsDeviceSystem.debug.showDeviceInformations();
            break;
        case tvKey.KEY_RETURN:
        case tvKey.KEY_PANEL_RETURN:
            log("RETURN", 'Key RETURN pressed');
            widgetAPI.sendReturnEvent();
            break;
        case tvKey.KEY_PLAY:
            log("PLAY", 'Key PLAY pressed');
            break;
        case tvKey.KEY_STOP:
            log("STOP", 'Key STOP pressed');
            break;
        case tvKey.KEY_PAUSE:
            log("PAUSE", "Key PAUSE pressed");
            break;
        case tvKey.KEY_FF:
            log("FF", 'Key FF pressed');
            break;
        case tvKey.KEY_RW:
            log("RW", 'Key RW pressed');
            break;
        case tvKey.KEY_VOL_UP:
        case tvKey.KEY_PANEL_VOL_UP:
            wsPlaylist.controls.userDefinedVolume = true;
            wsPlaylist.controls.setVolumeWithKey(0);
            break;
        case tvKey.KEY_VOL_DOWN:
        case tvKey.KEY_PANEL_VOL_DOWN:
            wsPlaylist.controls.userDefinedVolume = true;
            wsPlaylist.controls.setVolumeWithKey(1);
            break;
        case tvKey.KEY_DOWN:
            log("DOWN", 'Key DOWN pressed');
            break;
        case tvKey.KEY_UP:
            log("UP", "Key UP pressed");
            break;
        case tvKey.KEY_ENTER:
        case tvKey.KEY_PANEL_ENTER:
            Wondersign.checkKeyCodeStrFunction();
            log("ENTER", "Key ENTER pressed");
            break;
        case tvKey.KEY_MUTE:
            log("MUTE", "Key MUTE pressed");
            wsPlaylist.controls.userDefinedVolume = true;
            if (wsPlaylist.controls.getMuteState()) {
                wsPlaylist.controls.removeMute()
            } else
                wsPlaylist.controls.setMute();
            break;
        default:
            log("Unhandled key " + keyCode, 'Unhandled Key pressed: ' + keyCode);
            break
        }
    }
}
function nl2br(str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2')
}
function pad(num, size) {
    var s = num + "";
    while (s.length < size)
        s = "0" + s;
    return s
}
function rpad(num, size) {
    var s = num + "";
    while (s.length < size)
        s += "0";
    return s
}
;var log = function(displayStr, reportStr) {
    if (window.ConsoleIO)
        console.log(reportStr);
    if (displayStr != '')
        if (Wondersign.debug == true) {
            wsDeviceSystem.debug.displayMessage(displayStr + ' / ' + reportStr)
        } else
            wsDeviceSystem.debug.displayMessage(displayStr);
    wsDeviceSystem.debug.addMessage(reportStr)
};
jQuery.fn.center = function() {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this
}
;
var TAFFY, exports, T;
(function() {
    'use strict';
    var typeList, makeTest, idx, typeKey, version, TC, idpad, cmax, API, protectJSON, each, eachin, isIndexable, returnFilter, runFilters, numcharsplit, orderByCol, run, intersection, filter, makeCid, safeForJson, isRegexp, sortArgs;
    if (!TAFFY) {
        version = '2.7';
        TC = 1;
        idpad = '000000';
        cmax = 1e3;
        API = {};
        sortArgs = function(args) {
            var v = Array.prototype.slice.call(args);
            return v.sort()
        }
        ;
        protectJSON = function(t) {
            if (TAFFY.isArray(t) || TAFFY.isObject(t)) {
                return t
            } else
                return JSON.parse(t)
        }
        ;
        intersection = function(array1, array2) {
            return filter(array1, function(item) {
                return array2.indexOf(item) >= 0
            })
        }
        ;
        filter = function(obj, iterator, context) {
            var results = [];
            if (obj == null)
                return results;
            if (Array.prototype.filter && obj.filter === Array.prototype.filter)
                return obj.filter(iterator, context);
            each(obj, function(value, index, list) {
                if (iterator.call(context, value, index, list))
                    results[results.length] = value
            });
            return results
        }
        ;
        isRegexp = function(aObj) {
            return Object.prototype.toString.call(aObj) === '[object RegExp]'
        }
        ;
        safeForJson = function(aObj) {
            var myResult = T.isArray(aObj) ? [] : T.isObject(aObj) ? {} : null;
            if (aObj === null)
                return aObj;
            for (var i in aObj)
                myResult[i] = isRegexp(aObj[i]) ? aObj[i].toString() : T.isArray(aObj[i]) || T.isObject(aObj[i]) ? safeForJson(aObj[i]) : aObj[i];
            return myResult
        }
        ;
        makeCid = function(aContext) {
            var myCid = JSON.stringify(aContext);
            if (myCid.match(/regex/) === null)
                return myCid;
            return JSON.stringify(safeForJson(aContext))
        }
        ;
        each = function(a, fun, u) {
            var r, i, x, y;
            if (a && ((T.isArray(a) && a.length === 1) || (!T.isArray(a)))) {
                fun((T.isArray(a)) ? a[0] : a, 0)
            } else
                for (r,
                i,
                x = 0,
                a = (T.isArray(a)) ? a : [a],
                y = a.length; x < y; x++) {
                    i = a[x];
                    if (!T.isUndefined(i) || (u || false)) {
                        r = fun(i, x);
                        if (r === T.EXIT)
                            break
                    }
                }
        }
        ;
        eachin = function(o, fun) {
            var x = 0, r, i;
            for (i in o)
                if (o.hasOwnProperty(i)) {
                    r = fun(o[i], i, x++);
                    if (r === T.EXIT)
                        break
                }
        }
        ;
        API.extend = function(m, f) {
            API[m] = function() {
                return f.apply(this, sortArgs(arguments))
            }
        }
        ;
        isIndexable = function(f) {
            var i;
            if (T.isString(f) && /[t][0-9]*[r][0-9]*/i.test(f))
                return true;
            if (T.isObject(f) && f.___id && f.___s)
                return true;
            if (T.isArray(f)) {
                i = true;
                each(f, function(r) {
                    if (!isIndexable(r)) {
                        i = false;
                        return TAFFY.EXIT
                    }
                });
                return i
            }
            ;return false
        }
        ;
        runFilters = function(r, filter) {
            var match = true;
            each(filter, function(mf) {
                switch (T.typeOf(mf)) {
                case 'function':
                    if (!mf.apply(r)) {
                        match = false;
                        return TAFFY.EXIT
                    }
                    ;break;
                case 'array':
                    match = (mf.length === 1) ? (runFilters(r, mf[0])) : (mf.length === 2) ? (runFilters(r, mf[0]) || runFilters(r, mf[1])) : (mf.length === 3) ? (runFilters(r, mf[0]) || runFilters(r, mf[1]) || runFilters(r, mf[2])) : (mf.length === 4) ? (runFilters(r, mf[0]) || runFilters(r, mf[1]) || runFilters(r, mf[2]) || runFilters(r, mf[3])) : false;
                    if (mf.length > 4)
                        each(mf, function(f) {
                            if (runFilters(r, f))
                                match = true
                        });
                    break
                }
            });
            return match
        }
        ;
        returnFilter = function(f) {
            var nf = [];
            if (T.isString(f) && /[t][0-9]*[r][0-9]*/i.test(f))
                f = {
                    ___id: f
                };
            if (T.isArray(f)) {
                each(f, function(r) {
                    nf.push(returnFilter(r))
                });
                f = function() {
                    var that = this
                      , match = false;
                    each(nf, function(f) {
                        if (runFilters(that, f))
                            match = true
                    });
                    return match
                }
                ;
                return f
            }
            ;if (T.isObject(f)) {
                if (T.isObject(f) && f.___id && f.___s)
                    f = {
                        ___id: f.___id
                    };
                eachin(f, function(v, i) {
                    if (!T.isObject(v))
                        v = {
                            is: v
                        };
                    eachin(v, function(mtest, s) {
                        var c = [], looper;
                        looper = (s === 'hasAll') ? function(mtest, func) {
                            func(mtest)
                        }
                        : each;
                        looper(mtest, function(mtest) {
                            var su = true, f = false, matchFunc;
                            matchFunc = function() {
                                var mvalue = this[i], eqeq = '==', bangeq = '!=', eqeqeq = '===', lt = '<', gt = '>', lteq = '<=', gteq = '>=', bangeqeq = '!==', r;
                                if (typeof mvalue === 'undefined')
                                    return false;
                                if ((s.indexOf('!') === 0) && s !== bangeq && s !== bangeqeq) {
                                    su = false;
                                    s = s.substring(1, s.length)
                                }
                                ;r = ((s === 'regex') ? (mtest.test(mvalue)) : (s === 'lt' || s === lt) ? (mvalue < mtest) : (s === 'gt' || s === gt) ? (mvalue > mtest) : (s === 'lte' || s === lteq) ? (mvalue <= mtest) : (s === 'gte' || s === gteq) ? (mvalue >= mtest) : (s === 'left') ? (mvalue.indexOf(mtest) === 0) : (s === 'leftnocase') ? (mvalue.toLowerCase().indexOf(mtest.toLowerCase()) === 0) : (s === 'right') ? (mvalue.substring((mvalue.length - mtest.length)) === mtest) : (s === 'rightnocase') ? (mvalue.toLowerCase().substring((mvalue.length - mtest.length)) === mtest.toLowerCase()) : (s === 'like') ? (mvalue.indexOf(mtest) >= 0) : (s === 'likenocase') ? (mvalue.toLowerCase().indexOf(mtest.toLowerCase()) >= 0) : (s === eqeqeq || s === 'is') ? (mvalue === mtest) : (s === eqeq) ? (mvalue == mtest) : (s === bangeqeq) ? (mvalue !== mtest) : (s === bangeq) ? (mvalue != mtest) : (s === 'isnocase') ? (mvalue.toLowerCase ? mvalue.toLowerCase() === mtest.toLowerCase() : mvalue === mtest) : (s === 'has') ? (T.has(mvalue, mtest)) : (s === 'hasall') ? (T.hasAll(mvalue, mtest)) : (s === 'contains') ? (TAFFY.isArray(mvalue) && mvalue.indexOf(mtest) > -1) : (s.indexOf('is') === -1 && !TAFFY.isNull(mvalue) && !TAFFY.isUndefined(mvalue) && !TAFFY.isObject(mtest) && !TAFFY.isArray(mtest)) ? (mtest === mvalue[s]) : (T[s] && T.isFunction(T[s]) && s.indexOf('is') === 0) ? T[s](mvalue) === mtest : (T[s] && T.isFunction(T[s])) ? T[s](mvalue, mtest) : false);
                                r = (r && !su) ? false : (!r && !su) ? true : r;
                                return r
                            }
                            ;
                            c.push(matchFunc)
                        });
                        if (c.length === 1) {
                            nf.push(c[0])
                        } else
                            nf.push(function() {
                                var that = this
                                  , match = false;
                                each(c, function(f) {
                                    if (f.apply(that))
                                        match = true
                                });
                                return match
                            })
                    })
                });
                f = function() {
                    var that = this
                      , match = true;
                    match = (nf.length === 1 && !nf[0].apply(that)) ? false : (nf.length === 2 && (!nf[0].apply(that) || !nf[1].apply(that))) ? false : (nf.length === 3 && (!nf[0].apply(that) || !nf[1].apply(that) || !nf[2].apply(that))) ? false : (nf.length === 4 && (!nf[0].apply(that) || !nf[1].apply(that) || !nf[2].apply(that) || !nf[3].apply(that))) ? false : true;
                    if (nf.length > 4)
                        each(nf, function(f) {
                            if (!runFilters(that, f))
                                match = false
                        });
                    return match
                }
                ;
                return f
            }
            ;if (T.isFunction(f))
                return f
        }
        ;
        orderByCol = function(ar, o) {
            var sortFunc = function(a, b) {
                var r = 0;
                T.each(o, function(sd) {
                    var o, col, dir, c, d;
                    o = sd.split(' ');
                    col = o[0];
                    dir = (o.length === 1) ? "logical" : o[1];
                    if (dir === 'logical') {
                        c = numcharsplit(a[col]);
                        d = numcharsplit(b[col]);
                        T.each((c.length <= d.length) ? c : d, function(x, i) {
                            if (c[i] < d[i]) {
                                r = -1;
                                return TAFFY.EXIT
                            } else if (c[i] > d[i]) {
                                r = 1;
                                return TAFFY.EXIT
                            }
                        })
                    } else if (dir === 'logicaldesc') {
                        c = numcharsplit(a[col]);
                        d = numcharsplit(b[col]);
                        T.each((c.length <= d.length) ? c : d, function(x, i) {
                            if (c[i] > d[i]) {
                                r = -1;
                                return TAFFY.EXIT
                            } else if (c[i] < d[i]) {
                                r = 1;
                                return TAFFY.EXIT
                            }
                        })
                    } else if (dir === 'asec' && a[col] < b[col]) {
                        r = -1;
                        return T.EXIT
                    } else if (dir === 'asec' && a[col] > b[col]) {
                        r = 1;
                        return T.EXIT
                    } else if (dir === 'desc' && a[col] > b[col]) {
                        r = -1;
                        return T.EXIT
                    } else if (dir === 'desc' && a[col] < b[col]) {
                        r = 1;
                        return T.EXIT
                    }
                    ;if (r === 0 && dir === 'logical' && c.length < d.length) {
                        r = -1
                    } else if (r === 0 && dir === 'logical' && c.length > d.length) {
                        r = 1
                    } else if (r === 0 && dir === 'logicaldesc' && c.length > d.length) {
                        r = -1
                    } else if (r === 0 && dir === 'logicaldesc' && c.length < d.length)
                        r = 1;
                    if (r !== 0)
                        return T.EXIT
                });
                return r
            };
            return (ar && ar.push) ? ar.sort(sortFunc) : ar
        }
        ;
        (function() {
            var cache = {}
              , cachcounter = 0;
            numcharsplit = function(thing) {
                if (cachcounter > cmax) {
                    cache = {};
                    cachcounter = 0
                }
                ;return cache['_' + thing] || (function() {
                    var nthing = String(thing), na = [], rv = '_', rt = '', x, xx, c;
                    for (x = 0,
                    xx = nthing.length; x < xx; x++) {
                        c = nthing.charCodeAt(x);
                        if ((c >= 48 && c <= 57) || c === 46) {
                            if (rt !== 'n') {
                                rt = 'n';
                                na.push(rv.toLowerCase());
                                rv = ''
                            }
                            ;rv = rv + nthing.charAt(x)
                        } else {
                            if (rt !== 's') {
                                rt = 's';
                                na.push(parseFloat(rv));
                                rv = ''
                            }
                            ;rv = rv + nthing.charAt(x)
                        }
                    }
                    ;na.push((rt === 'n') ? parseFloat(rv) : rv.toLowerCase());
                    na.shift();
                    cache['_' + thing] = na;
                    cachcounter++;
                    return na
                }())
            }
        }());
        run = function() {
            this.context({
                results: this.getDBI().query(this.context())
            })
        }
        ;
        API.extend('filter', function() {
            var nc = TAFFY.mergeObj(this.context(), {
                run: null
            })
              , nq = [];
            each(nc.q, function(v) {
                nq.push(v)
            });
            nc.q = nq;
            each(sortArgs(arguments), function(f) {
                nc.q.push(returnFilter(f));
                nc.filterRaw.push(f)
            });
            return this.getroot(nc)
        });
        API.extend('order', function(o) {
            o = o.split(',');
            var x = [], nc;
            each(o, function(r) {
                x.push(r.replace(/^\s*/, '').replace(/\s*$/, ''))
            });
            nc = TAFFY.mergeObj(this.context(), {
                sort: null
            });
            nc.order = x;
            return this.getroot(nc)
        });
        API.extend('limit', function(n) {
            var nc = TAFFY.mergeObj(this.context(), {}), limitedresults;
            nc.limit = n;
            if (nc.run && nc.sort) {
                limitedresults = [];
                each(nc.results, function(i, x) {
                    if ((x + 1) > n)
                        return TAFFY.EXIT;
                    limitedresults.push(i)
                });
                nc.results = limitedresults
            }
            ;return this.getroot(nc)
        });
        API.extend('start', function(n) {
            var nc = TAFFY.mergeObj(this.context(), {}), limitedresults;
            nc.start = n;
            if (nc.run && nc.sort && !nc.limit) {
                limitedresults = [];
                each(nc.results, function(i, x) {
                    if ((x + 1) > n)
                        limitedresults.push(i)
                });
                nc.results = limitedresults
            } else
                nc = TAFFY.mergeObj(this.context(), {
                    run: null,
                    start: n
                });
            return this.getroot(nc)
        });
        API.extend('update', function(arg0, arg1, arg2) {
            var runEvent = true, o = {}, args = sortArgs(arguments), that;
            if (TAFFY.isString(arg0) && (arguments.length === 2 || arguments.length === 3)) {
                o[arg0] = arg1;
                if (arguments.length === 3)
                    runEvent = arg2
            } else {
                o = arg0;
                if (args.length === 2)
                    runEvent = arg1
            }
            ;that = this;
            run.call(this);
            each(this.context().results, function(r) {
                var c = o;
                if (TAFFY.isFunction(c)) {
                    c = c.apply(TAFFY.mergeObj(r, {}))
                } else if (T.isFunction(c))
                    c = c(TAFFY.mergeObj(r, {}));
                if (TAFFY.isObject(c))
                    that.getDBI().update(r.___id, c, runEvent)
            });
            if (this.context().results.length)
                this.context({
                    run: null
                });
            return this
        });
        API.extend('remove', function(runEvent) {
            var that = this
              , c = 0;
            run.call(this);
            each(this.context().results, function(r) {
                that.getDBI().remove(r.___id);
                c++
            });
            if (this.context().results.length) {
                this.context({
                    run: null
                });
                that.getDBI().removeCommit(runEvent)
            }
            ;return c
        });
        API.extend('count', function() {
            run.call(this);
            return this.context().results.length
        });
        API.extend('callback', function(f, delay) {
            if (f) {
                var that = this;
                setTimeout(function() {
                    run.call(that);
                    f.call(that.getroot(that.context()))
                }, delay || 0)
            }
            ;return null
        });
        API.extend('get', function() {
            run.call(this);
            return this.context().results
        });
        API.extend('stringify', function() {
            return JSON.stringify(this.get())
        });
        API.extend('first', function() {
            run.call(this);
            return this.context().results[0] || false
        });
        API.extend('last', function() {
            run.call(this);
            return this.context().results[this.context().results.length - 1] || false
        });
        API.extend('sum', function() {
            var total = 0
              , that = this;
            run.call(that);
            each(sortArgs(arguments), function(c) {
                each(that.context().results, function(r) {
                    total = total + (r[c] || 0)
                })
            });
            return total
        });
        API.extend('min', function(c) {
            var lowest = null;
            run.call(this);
            each(this.context().results, function(r) {
                if (lowest === null || r[c] < lowest)
                    lowest = r[c]
            });
            return lowest
        });
        (function() {
            var innerJoinFunction = (function() {
                var fnCompareList, fnCombineRow, fnMain;
                fnCompareList = function(left_row, right_row, arg_list) {
                    var data_lt, data_rt, op_code, error;
                    if (arg_list.length === 2) {
                        data_lt = left_row[arg_list[0]];
                        op_code = '===';
                        data_rt = right_row[arg_list[1]]
                    } else {
                        data_lt = left_row[arg_list[0]];
                        op_code = arg_list[1];
                        data_rt = right_row[arg_list[2]]
                    }
                    ;switch (op_code) {
                    case '===':
                        return data_lt === data_rt;
                    case '!==':
                        return data_lt !== data_rt;
                    case '<':
                        return data_lt < data_rt;
                    case '>':
                        return data_lt > data_rt;
                    case '<=':
                        return data_lt <= data_rt;
                    case '>=':
                        return data_lt >= data_rt;
                    case '==':
                        return data_lt == data_rt;
                    case '!=':
                        return data_lt != data_rt;
                    default:
                        throw String(op_code) + ' is not supported'
                    }
                }
                ;
                fnCombineRow = function(left_row, right_row) {
                    var out_map = {}, i, prefix;
                    for (i in left_row)
                        if (left_row.hasOwnProperty(i))
                            out_map[i] = left_row[i];
                    for (i in right_row)
                        if (right_row.hasOwnProperty(i) && i !== '___id' && i !== '___s') {
                            prefix = !TAFFY.isUndefined(out_map[i]) ? 'right_' : '';
                            out_map[prefix + String(i)] = right_row[i]
                        }
                    ;return out_map
                }
                ;
                fnMain = function(table) {
                    var right_table, i, arg_list = sortArgs(arguments), arg_length = arg_list.length, result_list = [];
                    if (typeof table.filter !== 'function') {
                        if (table.TAFFY) {
                            right_table = table()
                        } else
                            throw 'TAFFY DB or result not supplied'
                    } else
                        right_table = table;
                    this.context({
                        results: this.getDBI().query(this.context())
                    });
                    TAFFY.each(this.context().results, function(left_row) {
                        right_table.each(function(right_row) {
                            var arg_data, is_ok = true;
                            CONDITION: for (i = 1; i < arg_length; i++) {
                                arg_data = arg_list[i];
                                if (typeof arg_data === 'function') {
                                    is_ok = arg_data(left_row, right_row)
                                } else if (typeof arg_data === 'object' && arg_data.length) {
                                    is_ok = fnCompareList(left_row, right_row, arg_data)
                                } else
                                    is_ok = false;
                                if (!is_ok)
                                    break CONDITION
                            }
                            ;if (is_ok)
                                result_list.push(fnCombineRow(left_row, right_row))
                        })
                    });
                    return TAFFY(result_list)()
                }
                ;
                return fnMain
            }());
            API.extend('join', innerJoinFunction)
        }());
        API.extend('max', function(c) {
            var highest = null;
            run.call(this);
            each(this.context().results, function(r) {
                if (highest === null || r[c] > highest)
                    highest = r[c]
            });
            return highest
        });
        API.extend('select', function() {
            var ra = []
              , args = sortArgs(arguments);
            run.call(this);
            if (arguments.length === 1) {
                each(this.context().results, function(r) {
                    ra.push(r[args[0]])
                })
            } else
                each(this.context().results, function(r) {
                    var row = [];
                    each(args, function(c) {
                        row.push(r[c])
                    });
                    ra.push(row)
                });
            return ra
        });
        API.extend('distinct', function() {
            var ra = []
              , args = sortArgs(arguments);
            run.call(this);
            if (arguments.length === 1) {
                each(this.context().results, function(r) {
                    var v = r[args[0]]
                      , dup = false;
                    each(ra, function(d) {
                        if (v === d) {
                            dup = true;
                            return TAFFY.EXIT
                        }
                    });
                    if (!dup)
                        ra.push(v)
                })
            } else
                each(this.context().results, function(r) {
                    var row = []
                      , dup = false;
                    each(args, function(c) {
                        row.push(r[c])
                    });
                    each(ra, function(d) {
                        var ldup = true;
                        each(args, function(c, i) {
                            if (row[i] !== d[i]) {
                                ldup = false;
                                return TAFFY.EXIT
                            }
                        });
                        if (ldup) {
                            dup = true;
                            return TAFFY.EXIT
                        }
                    });
                    if (!dup)
                        ra.push(row)
                });
            return ra
        });
        API.extend('supplant', function(template, returnarray) {
            var ra = [];
            run.call(this);
            each(this.context().results, function(r) {
                ra.push(template.replace(/\{([^\{\}]*)\}/g, function(a, b) {
                    var v = r[b];
                    return typeof v === 'string' || typeof v === 'number' ? v : a
                }))
            });
            return (!returnarray) ? ra.join("") : ra
        });
        API.extend('each', function(m) {
            run.call(this);
            each(this.context().results, m);
            return this
        });
        API.extend('map', function(m) {
            var ra = [];
            run.call(this);
            each(this.context().results, function(r) {
                ra.push(m(r))
            });
            return ra
        });
        T = function(d) {
            var TOb = [], ID = {}, RC = 1, settings = {
                template: false,
                onInsert: false,
                onUpdate: false,
                onRemove: false,
                onDBChange: false,
                storageName: false,
                forcePropertyCase: null,
                cacheSize: 100,
                name: ''
            }, dm = new Date(), CacheCount = 0, CacheClear = 0, Cache = {}, DBI, runIndexes, root;
            runIndexes = function(indexes) {
                var records = []
                  , UniqueEnforce = false;
                if (indexes.length === 0)
                    return TOb;
                each(indexes, function(f) {
                    if (T.isString(f) && /[t][0-9]*[r][0-9]*/i.test(f) && TOb[ID[f]]) {
                        records.push(TOb[ID[f]]);
                        UniqueEnforce = true
                    }
                    ;if (T.isObject(f) && f.___id && f.___s && TOb[ID[f.___id]]) {
                        records.push(TOb[ID[f.___id]]);
                        UniqueEnforce = true
                    }
                    ;if (T.isArray(f))
                        each(f, function(r) {
                            each(runIndexes(r), function(rr) {
                                records.push(rr)
                            })
                        })
                });
                if (UniqueEnforce && records.length > 1)
                    records = [];
                return records
            }
            ;
            DBI = {
                dm: function(nd) {
                    if (nd) {
                        dm = nd;
                        Cache = {};
                        CacheCount = 0;
                        CacheClear = 0
                    }
                    ;if (settings.onDBChange)
                        setTimeout(function() {
                            settings.onDBChange.call(TOb)
                        }, 0);
                    if (settings.storageName)
                        setTimeout(function() {
                            localStorage.setItem('taffy_' + settings.storageName, JSON.stringify(TOb))
                        });
                    return dm
                },
                insert: function(i, runEvent) {
                    var columns = []
                      , records = []
                      , input = protectJSON(i);
                    each(input, function(v, i) {
                        var nv, o;
                        if (T.isArray(v) && i === 0) {
                            each(v, function(av) {
                                columns.push((settings.forcePropertyCase === 'lower') ? av.toLowerCase() : (settings.forcePropertyCase === 'upper') ? av.toUpperCase() : av)
                            });
                            return true
                        } else if (T.isArray(v)) {
                            nv = {};
                            each(v, function(av, ai) {
                                nv[columns[ai]] = av
                            });
                            v = nv
                        } else if (T.isObject(v) && settings.forcePropertyCase) {
                            o = {};
                            eachin(v, function(av, ai) {
                                o[(settings.forcePropertyCase === 'lower') ? ai.toLowerCase() : (settings.forcePropertyCase === 'upper') ? ai.toUpperCase() : ai] = v[ai]
                            });
                            v = o
                        }
                        ;RC++;
                        v.___id = 'T' + String(idpad + TC).slice(-6) + 'R' + String(idpad + RC).slice(-6);
                        v.___s = true;
                        records.push(v.___id);
                        if (settings.template)
                            v = T.mergeObj(settings.template, v);
                        TOb.push(v);
                        ID[v.___id] = TOb.length - 1;
                        if (settings.onInsert && (runEvent || TAFFY.isUndefined(runEvent)))
                            settings.onInsert.call(v);
                        DBI.dm(new Date())
                    });
                    return root(records)
                },
                sort: function(o) {
                    TOb = orderByCol(TOb, o.split(','));
                    ID = {};
                    each(TOb, function(r, i) {
                        ID[r.___id] = i
                    });
                    DBI.dm(new Date());
                    return true
                },
                update: function(id, changes, runEvent) {
                    var nc = {}, or, nr, tc, hasChange;
                    if (settings.forcePropertyCase) {
                        eachin(changes, function(v, p) {
                            nc[(settings.forcePropertyCase === 'lower') ? p.toLowerCase() : (settings.forcePropertyCase === 'upper') ? p.toUpperCase() : p] = v
                        });
                        changes = nc
                    }
                    ;or = TOb[ID[id]];
                    nr = T.mergeObj(or, changes);
                    tc = {};
                    hasChange = false;
                    eachin(nr, function(v, i) {
                        if (TAFFY.isUndefined(or[i]) || or[i] !== v) {
                            tc[i] = v;
                            hasChange = true
                        }
                    });
                    if (hasChange) {
                        if (settings.onUpdate && (runEvent || TAFFY.isUndefined(runEvent)))
                            settings.onUpdate.call(nr, TOb[ID[id]], tc);
                        TOb[ID[id]] = nr;
                        DBI.dm(new Date())
                    }
                },
                remove: function(id) {
                    TOb[ID[id]].___s = false
                },
                removeCommit: function(runEvent) {
                    var x;
                    for (x = TOb.length - 1; x > -1; x--)
                        if (!TOb[x].___s) {
                            if (settings.onRemove && (runEvent || TAFFY.isUndefined(runEvent)))
                                settings.onRemove.call(TOb[x]);
                            ID[TOb[x].___id] = undefined;
                            TOb.splice(x, 1)
                        }
                    ;ID = {};
                    each(TOb, function(r, i) {
                        ID[r.___id] = i
                    });
                    DBI.dm(new Date())
                },
                query: function(context) {
                    var returnq, cid, results, indexed, limitq, ni;
                    if (settings.cacheSize) {
                        cid = '';
                        each(context.filterRaw, function(r) {
                            if (T.isFunction(r)) {
                                cid = 'nocache';
                                return TAFFY.EXIT
                            }
                        });
                        if (cid === '')
                            cid = makeCid(T.mergeObj(context, {
                                q: false,
                                run: false,
                                sort: false
                            }))
                    }
                    ;if (!context.results || !context.run || (context.run && DBI.dm() > context.run)) {
                        results = [];
                        if (settings.cacheSize && Cache[cid]) {
                            Cache[cid].i = CacheCount++;
                            return Cache[cid].results
                        } else if (context.q.length === 0 && context.index.length === 0) {
                            each(TOb, function(r) {
                                results.push(r)
                            });
                            returnq = results
                        } else {
                            indexed = runIndexes(context.index);
                            each(indexed, function(r) {
                                if (context.q.length === 0 || runFilters(r, context.q))
                                    results.push(r)
                            });
                            returnq = results
                        }
                    } else
                        returnq = context.results;
                    if (context.order.length > 0 && (!context.run || !context.sort))
                        returnq = orderByCol(returnq, context.order);
                    if (returnq.length && ((context.limit && context.limit < returnq.length) || context.start)) {
                        limitq = [];
                        each(returnq, function(r, i) {
                            if (!context.start || (context.start && (i + 1) >= context.start))
                                if (context.limit) {
                                    ni = (context.start) ? (i + 1) - context.start : i;
                                    if (ni < context.limit) {
                                        limitq.push(r)
                                    } else if (ni > context.limit)
                                        return TAFFY.EXIT
                                } else
                                    limitq.push(r)
                        });
                        returnq = limitq
                    }
                    ;if (settings.cacheSize && cid !== 'nocache') {
                        CacheClear++;
                        setTimeout(function() {
                            var bCounter, nc;
                            if (CacheClear >= settings.cacheSize * 2) {
                                CacheClear = 0;
                                bCounter = CacheCount - settings.cacheSize;
                                nc = {};
                                eachin(function(r, k) {
                                    if (r.i >= bCounter)
                                        nc[k] = r
                                });
                                Cache = nc
                            }
                        }, 0);
                        Cache[cid] = {
                            i: CacheCount++,
                            results: returnq
                        }
                    }
                    ;return returnq
                }
            };
            root = function() {
                var iAPI, context;
                iAPI = TAFFY.mergeObj(TAFFY.mergeObj(API, {
                    insert: undefined
                }), {
                    getDBI: function() {
                        return DBI
                    },
                    getroot: function(c) {
                        return root.call(c)
                    },
                    context: function(n) {
                        if (n)
                            context = TAFFY.mergeObj(context, n.hasOwnProperty('results') ? TAFFY.mergeObj(n, {
                                run: new Date(),
                                sort: new Date()
                            }) : n);
                        return context
                    },
                    extend: undefined
                });
                context = (this && this.q) ? this : {
                    limit: false,
                    start: false,
                    q: [],
                    filterRaw: [],
                    index: [],
                    order: [],
                    results: false,
                    run: null,
                    sort: null,
                    settings: settings
                };
                each(sortArgs(arguments), function(f) {
                    if (isIndexable(f)) {
                        context.index.push(f)
                    } else
                        context.q.push(returnFilter(f));
                    context.filterRaw.push(f)
                });
                return iAPI
            }
            ;
            TC++;
            if (d)
                DBI.insert(d);
            root.insert = DBI.insert;
            root.merge = function(i, key, runEvent) {
                var search = {}
                  , finalSearch = []
                  , obj = {};
                runEvent = runEvent || false;
                key = key || 'id';
                each(i, function(o) {
                    var existingObject;
                    search[key] = o[key];
                    finalSearch.push(o[key]);
                    existingObject = root(search).first();
                    if (existingObject) {
                        DBI.update(existingObject.___id, o, runEvent)
                    } else
                        DBI.insert(o, runEvent)
                });
                obj[key] = finalSearch;
                return root(obj)
            }
            ;
            root.TAFFY = true;
            root.sort = DBI.sort;
            root.settings = function(n) {
                if (n) {
                    settings = TAFFY.mergeObj(settings, n);
                    if (n.template)
                        root().update(n.template)
                }
                ;return settings
            }
            ;
            root.store = function(n) {
                var r = false, i;
                if (localStorage) {
                    if (n) {
                        i = localStorage.getItem('taffy_' + n);
                        if (i && i.length > 0) {
                            root.insert(i);
                            r = true
                        }
                        ;if (TOb.length > 0)
                            setTimeout(function() {
                                localStorage.setItem('taffy_' + settings.storageName, JSON.stringify(TOb))
                            })
                    }
                    ;root.settings({
                        storageName: n
                    })
                }
                ;return root
            }
            ;
            return root
        }
        ;
        TAFFY = T;
        T.each = each;
        T.eachin = eachin;
        T.extend = API.extend;
        TAFFY.EXIT = 'TAFFYEXIT';
        TAFFY.mergeObj = function(ob1, ob2) {
            var c = {};
            eachin(ob1, function(v, n) {
                c[n] = ob1[n]
            });
            eachin(ob2, function(v, n) {
                c[n] = ob2[n]
            });
            return c
        }
        ;
        TAFFY.has = function(var1, var2) {
            var re = false, n;
            if ((var1.TAFFY) ) {
                re = var1(var2);
                if (re.length > 0) {
                    return true
                } else
                    return false
            } else
                switch (T.typeOf(var1)) {
                case 'object':
                    if (T.isObject(var2)) {
                        eachin(var2, function(v, n) {
                            if (re === true && !T.isUndefined(var1[n]) && var1.hasOwnProperty(n)) {
                                re = T.has(var1[n], var2[n])
                            } else {
                                re = false;
                                return TAFFY.EXIT
                            }
                        })
                    } else if (T.isArray(var2)) {
                        each(var2, function(v, n) {
                            re = T.has(var1, var2[n]);
                            if (re)
                                return TAFFY.EXIT
                        })
                    } else if (T.isString(var2))
                        if (!TAFFY.isUndefined(var1[var2])) {
                            return true
                        } else
                            return false;
                    return re;
                case 'array':
                    if (T.isObject(var2)) {
                        each(var1, function(v, i) {
                            re = T.has(var1[i], var2);
                            if (re === true)
                                return TAFFY.EXIT
                        })
                    } else if (T.isArray(var2)) {
                        each(var2, function(v2, i2) {
                            each(var1, function(v1, i1) {
                                re = T.has(var1[i1], var2[i2]);
                                if (re === true)
                                    return TAFFY.EXIT
                            });
                            if (re === true)
                                return TAFFY.EXIT
                        })
                    } else if (T.isString(var2) || T.isNumber(var2)) {
                        re = false;
                        for (n = 0; n < var1.length; n++) {
                            re = T.has(var1[n], var2);
                            if (re)
                                return true
                        }
                    }
                    ;return re;
                case 'string':
                    if (T.isString(var2) && var2 === var1)
                        return true;
                    break;
                default:
                    if (T.typeOf(var1) === T.typeOf(var2) && var1 === var2)
                        return true;
                    break
                }
            ;return false
        }
        ;
        TAFFY.hasAll = function(var1, var2) {
            var T = TAFFY, ar;
            if (T.isArray(var2)) {
                ar = true;
                each(var2, function(v) {
                    ar = T.has(var1, v);
                    if (ar === false)
                        return TAFFY.EXIT
                });
                return ar
            } else
                return T.has(var1, var2)
        }
        ;
        TAFFY.typeOf = function(v) {
            var s = typeof v;
            if (s === 'object')
                if (v) {
                    if (typeof v.length === 'number' && !(v.propertyIsEnumerable('length')))
                        s = 'array'
                } else
                    s = 'null';
            return s
        }
        ;
        TAFFY.getObjectKeys = function(ob) {
            var kA = [];
            eachin(ob, function(n, h) {
                kA.push(h)
            });
            kA.sort();
            return kA
        }
        ;
        TAFFY.isSameArray = function(ar1, ar2) {
            return (TAFFY.isArray(ar1) && TAFFY.isArray(ar2) && ar1.join(',') === ar2.join(',')) ? true : false
        }
        ;
        TAFFY.isSameObject = function(ob1, ob2) {
            var T = TAFFY
              , rv = true;
            if (T.isObject(ob1) && T.isObject(ob2)) {
                if (T.isSameArray(T.getObjectKeys(ob1), T.getObjectKeys(ob2))) {
                    eachin(ob1, function(v, n) {
                        if (!((T.isObject(ob1[n]) && T.isObject(ob2[n]) && T.isSameObject(ob1[n], ob2[n])) || (T.isArray(ob1[n]) && T.isArray(ob2[n]) && T.isSameArray(ob1[n], ob2[n])) || (ob1[n] === ob2[n]))) {
                            rv = false;
                            return TAFFY.EXIT
                        }
                    })
                } else
                    rv = false
            } else
                rv = false;
            return rv
        }
        ;
        typeList = ['String', 'Number', 'Object', 'Array', 'Boolean', 'Null', 'Function', 'Undefined'];
        makeTest = function(thisKey) {
            return function(data) {
                return TAFFY.typeOf(data) === thisKey.toLowerCase() ? true : false
            }
        }
        ;
        for (idx = 0; idx < typeList.length; idx++) {
            typeKey = typeList[idx];
            TAFFY['is' + typeKey] = makeTest(typeKey)
        }
    }
}());
if (typeof exports === 'object')
    exports.taffy = TAFFY;
var wsDataStorage = {
    db: null,
    init: function(dbData) {
        this.db = TAFFY();
        this.storage.import(dbData)
    },
    insert: function(file) {
        file = this.validateFile(file);
        if (file == false)
            return false;
        this.db.insert(file);
        return true
    },
    getAll: function() {
        return this.db().get()
    },
    getCount: function() {
        return this.db().count()
    },
    getNotInPlaylist: function() {
        return this.db().order("lastPlayed asec, filesize desc").filter({
            inPlaylist: 0
        }).get()
    },
    getInPlaylist: function() {
        return this.db().order("filesize asec").filter({
            inPlaylist: 1
        }).get()
    },
    getOldestUnusedFile: function() {
        return this.db().order("lastPlayed asec, filesize desc").filter({
            inPlaylist: 0
        }).first()
    },
    getOlderLastPlayedFile: function() {
        return this.db().order("lastPlayed asec").filter({
            inPlaylist: 1
        }).first()
    },
    getFileWithFilename: function(filename) {
        return this.db().filter({
            filename: filename
        }).first()
    },
    updateLastPlayed: function(filename) {
        var file = this.getFileWithFilename(filename);
        return this.db(file).update({
            lastPlayed: jQuery.now()
        })
    },
    clearInPlaylistStatus: function() {
        var inPlaylistFiles = this.getInPlaylist();
        this.db(inPlaylistFiles).update({
            inPlaylist: 0
        })
    },
    updateInPlaylistStatus: function(file) {
        this.db(file).update({
            inPlaylist: 1
        })
    },
    removeFile: function(file) {
        return this.db(file).remove()
    },
    validateFile: function(file) {
        if (typeof file.filename == 'undefined' || file.filename == '')
            return false;
        file.tstamp = $.now();
        if (typeof file.lastPlayed == 'undefined')
            file.lastPlayed = 0;
        if (typeof file.inPlaylist == 'undefined') {
            file.inPlaylist = 0
        } else if (file.inPlaylist == true || file.inPlaylist == 1)
            file.inPlaylist = 1;
        return file
    },
    storage: {
        import: function(data) {
            if (typeof data != 'object' && typeof data != 'string')
                return false;
            if (typeof data == 'string') {
                data = $.trim(data);
                if (data == '')
                    return false;
                data = JSON.parse(data)
            }
            ;jQuery(data).each(function(i, el) {
                if (typeof el.name != 'undefined') {
                    var file = {
                        filename: el.name,
                        filesize: el.size
                    }
                } else
                    var file = el;
                wsDataStorage.insert(file)
            });
            return true
        },
        export: function() {
            return wsDataStorage.db().stringify()
        }
    }
}
  , wsCaching = {
    maxFileCount: 500,
    init: function() {
        var dbData = wsFileSystem.readFile(wsPlaylist.cacheDbFile);
        if (dbData == null || $.trim(dbData) === '[]' || $.trim(dbData) === '' || typeof dbData === 'undefined' || JSON.parse($.trim(dbData)).length === 0)
            dbData = wsFileSystem.getFilesFromLocalStorage();
        wsDataStorage.init(dbData)
    },
    getCachedSize: function() {
        var files = wsDataStorage.getNotInPlaylist();
        return this.helper.filesizeSum(files)
    },
    getPlaylistSize: function() {
        var files = wsDataStorage.getInPlaylist();
        return this.helper.filesizeSum(files)
    },
    freeCacheForFilesize: function(serverSize, localFreeSpace) {
        serverSize = parseInt(serverSize);
        if (localFreeSpace > serverSize) {
            log('Enough space for file', 'Enough space [' + localFreeSpace + '] for file [' + serverSize + ']');
            return true
        }
        ;var cachedFilesSize = this.getCachedSize();
        if ((cachedFilesSize + localFreeSpace) < serverSize) {
            log('No space for file.', 'Also if we clear the cache there is no space for the current file. CachedFileSize (' + cachedFilesSize + ') + localFreeSpace (' + localFreeSpace + ') <  ' + serverSize);
            return false
        }
        ;var freeSpaceCalculated = localFreeSpace
          , unusedFilesList = wsDataStorage.getNotInPlaylist();
        jQuery(unusedFilesList).each(function(i, file) {
            if (freeSpaceCalculated > (serverSize + wsFileSystem.minFreeSpace))
                return false;
            var filenameObj = {
                filename: file.filename
            };
            wsFileSystem.deleteFile(filenameObj.filename);
            wsDataStorage.removeFile(filenameObj);
            freeSpaceCalculated = wsFileSystem.getFreeSpace();
            log('', 'DELETE FILE: ' + JSON.stringify(file) + ' Free space now: ' + wsFileSystem.parseSize(freeSpaceCalculated))
        });
        return true
    },
    reduceFileCount: function() {
        var fileCount = wsDataStorage.getCount()
          , file = wsDataStorage.getOldestUnusedFile();
        log('DB file count: ' + fileCount, 'dbFileCount before cleanup: ' + fileCount);
        var freeSpace = wsFileSystem.getFreeSpace();
        while ((fileCount > this.maxFileCount || freeSpace < wsFileSystem.minFreeSpace) && file != false) {
            wsFileSystem.deleteFile(file.filename);
            wsDataStorage.removeFile(file);
            fileCount = wsDataStorage.getCount();
            log('', 'DELETE FILE: ' + JSON.stringify(file) + ' File count was too high and is now: ' + fileCount);
            file = wsDataStorage.getOldestUnusedFile();
            freeSpace = wsFileSystem.getFreeSpace()
        }
        ;wsCaching.save();
        log('Reduced DB file count: ' + fileCount, 'dbFileCount after cleanup: ' + fileCount)
    },
    updateLastPlayed: function(filename) {
        wsDataStorage.updateLastPlayed(filename);
        this.save()
    },
    helper: {
        filesizeSum: function(files) {
            var cacheSize = 0;
            jQuery(files).each(function(i, el) {
                cacheSize += parseInt(el.filesize)
            });
            return cacheSize
        },
        initFileSystem: function() {
            var FileList = wsFileSystem.getFilesFromLocalStorage();
            jQuery(FileList).each(function(i, el) {
                var file = wsDataStorage.getFileWithFilename(el.name);
                if (!file) {
                    var file = {
                        filename: el.name,
                        filesize: el.size
                    }
                      , res = wsDataStorage.insert(file);
                    log('File import...', 'File import [' + el.name + ']: ' + JSON.stringify(res))
                }
            });
            wsDataStorage.clearInPlaylistStatus();
            FileList = wsDataStorage.getAll();
            jQuery(FileList).each(function(i, file) {
                if (!wsFileSystem.checkFileExists(wsFileSystem.storagePath + file.filename)) {
                    log('File not found...', 'File not found:' + wsFileSystem.storagePath + file.filename + ' / remove from CachingDB');
                    wsDataStorage.removeFile(file)
                }
                ;if (wsPlaylist.isFileInPlaylist(file.filename))
                    wsDataStorage.updateInPlaylistStatus(file)
            })
        }
    },
    load: function() {},
    save: function() {
        var data = wsDataStorage.storage.export();
        wsFileSystem.writeFile(wsPlaylist.cacheDbFile, data)
    }
}
