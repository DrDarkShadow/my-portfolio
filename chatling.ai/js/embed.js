(() => {
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
    }
    var e = null,
        n = null,
        l = null,
        i = "chtl-chat-iframe",
        r = "chatling-embed-script",
        a = "chtl-script",
        o = "chatling-inline-bot",
        u = "chtl-inline-bot",
        c = null,
        s = null,
        d = null,
        h = null,
        f = "chtl-open-chat-icon",
        y = "chtl-close-chat-icon",
        p = "chtl-chat-icon-container",
        m = null;
    null == m && (m = "1.3.15");
    var v = null,
        g = 640,
        b = 700,
        w = 2147483647,
        x = null,
        _ = 365,
        E = !1,
        C = !1,
        I = null,
        A = 0,
        S = null,
        k = null,
        B = "floating",
        O = "fullscreen",
        T = "page_inline",
        L = "floating",
        z = null,
        N = 200,
        M = !1,
        D = [],
        j = !1,
        P = null,
        R = null,
        W = null,
        F = !0;

    function J(t) {
        try {
            if (!t) return !1;
            var e = t.key;
            return "Enter" === e || " " === e || "Spacebar" === e
        } catch (t) {
            return !1
        }
    }

    function V(t, e) {
        try {
            if (!t) return;
            e ? (t.setAttribute("tabindex", "0"), t.removeAttribute("aria-hidden")) : (t.setAttribute("tabindex", "-1"), t.setAttribute("aria-hidden", "true"))
        } catch (t) {}
    }
    var H, G = {
        LAST_PAGEVIEW: "chtl_last_pageview",
        SESSION_ID: "chtl_sid",
        LOCAL_STORAGE_SESSION_ID: "chtl_lsid"
    };

    function q() {
        return null != e && ("1" == e || "1.0" == e)
    }

    function $() {
        return null != e && ("2" == e || "2.0" == e)
    }
    window.addEventListener("message", (function(t) {
            try {
                if (t && "chtl_chat_minimized" === t.data) ut();
                else {
                    if (null == t) return;
                    if (null == t.data) return;
                    if (null == t.data.event_id) return;
                    var n = t.data.event_id,
                        i = null,
                        r = null;
                    if (null == n) return;
                    if ("chtl_new_chat" == n) null != (i = t.data.data) && function(t, e) {
                        var n = tt();
                        if (null == n) return;
                        var l = ft();
                        null == l && (l = []);
                        l = [];
                        var i = {
                            chat_gid: t,
                            customer_gid: e,
                            created_at: Date.now()
                        };
                        l.push(i);
                        var r = JSON.stringify(l),
                            a = btoa(r);
                        yt(n, a, 30)
                    }(r = i.chat_gid, null);
                    else if ("chtl_chat_created_w2" == n) null != (i = t.data.data) && (r = i.chat_id, k = r, function(t) {
                        var n = tt();
                        if (null == n) return;
                        var l = ft();
                        null == l && (l = []);
                        l = [];
                        var i = {
                            chat_gid: t,
                            chatbot_version: e,
                            created_at: Date.now()
                        };
                        l.push(i);
                        var r = JSON.stringify(l),
                            a = btoa(r);
                        yt(n, a, 30)
                    }(r));
                    else if ("chtl_customer_info_collected" == n) {
                        if (null == t.data.data) return;
                        var a = t.data.data.customer;
                        null != a && (x = a, it(a))
                    } else if ("chtl_loaded" == n) {
                        if (null != l) {
                            if (null != x && rt({
                                    event_id: "chtl_cust_load",
                                    cust: x,
                                    custgid: null
                                }), ot() && rt({
                                    event_id: "is_mobile",
                                    window_width: at()
                                }), q() && null != S && S.length > 0 && rt({
                                    event_id: "chtl_conversation_history",
                                    lcg: k,
                                    messages: S
                                }), $()) {
                                var o = pt();
                                rt({
                                    event_id: "chtl_chatbot_init",
                                    lcg: k,
                                    cuid: o,
                                    display_type: B,
                                    locale: z,
                                    ru: M,
                                    page_url: window.location.href,
                                    page_title: wt(),
                                    browser: function() {
                                        try {
                                            var t = navigator.userAgent,
                                                e = null;
                                            return t.includes("Chrome") ? e = "chrome" : t.includes("Firefox") ? e = "firefox" : t.includes("Safari") && !t.includes("Chrome") ? e = "safari" : t.includes("Edge") ? e = "edge" : t.includes("Opera") || t.includes("OPR") ? e = "opera" : (t.includes("MSIE") || t.includes("Trident/")) && (e = "ie"), e
                                        } catch (t) {
                                            return null
                                        }
                                    }(),
                                    device_type: function() {
                                        try {
                                            var t = navigator.userAgent;
                                            return /tablet|ipad|playbook|silk/i.test(t) && !/mobile/i.test(t) ? "tablet" : /Mobile|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t) ? "mobile" : /SmartTV|TV/i.test(t) ? "tv" : "desktop"
                                        } catch (t) {
                                            return null
                                        }
                                    }(),
                                    os: function() {
                                        try {
                                            var t = navigator.userAgent;
                                            return /Windows/.test(t) ? "windows" : /Mac OS X/.test(t) ? "macos" : /Linux/.test(t) ? "linux" : /iPhone|iPad|iPod/.test(t) ? "ios" : /Android/.test(t) ? "android" : /BlackBerry|BB10/.test(t) ? "blackberry" : /Windows Phone/.test(t) ? "windows-phone" : /PlayBook/.test(t) ? "playbook" : /Silk/.test(t) ? "silk" : /Kindle/.test(t) ? "kindle" : null
                                        } catch (t) {}
                                    }(),
                                    variables: R,
                                    language: bt()
                                })
                            }
                        }
                    } else if ("chtl_chat_cleared" == n) ! function() {
                        var t = tt();
                        if (null == t) return;
                        vt(t)
                    }();
                    else if ("chtl_chatbot_loaded" == n) B == O || B == T ? ct() : St();
                    else if ("chtl_gvia" == n) {
                        if (null == t.data.data) return;
                        var u = t.data.data.t;
                        if (null == u) return;
                        c = function(t) {
                                if (null != t) {
                                    var e = btoa(t);
                                    rt({
                                        event_id: "chtl_gvia_fetched",
                                        data: {
                                            t: u,
                                            c: e
                                        }
                                    })
                                }
                            },
                            function(t) {
                                fetch("https://api.ipify.org?format=json").then((function(t) {
                                    return t.json()
                                })).then((function(e) {
                                    return e && e.ip ? void t(e.ip) : void t(null)
                                })).catch((function(e) {
                                    t(null)
                                }))
                            }((function(t) {
                                null == t ? function(t) {
                                    try {
                                        fetch("https://www.cloudflare.com/cdn-cgi/trace").then((function(t) {
                                            return t.text()
                                        })).then((function(e) {
                                            var n = e.match(/ip=(.+)/);
                                            if (n && n[1]) {
                                                var l = n[1];
                                                if (null != t) return void t(l)
                                            }
                                            t(null)
                                        })).catch((function(e) {
                                            t(null)
                                        }))
                                    } catch (e) {
                                        t(null)
                                    }
                                }((function(t) {
                                    null == t || c(t)
                                })) : c(t)
                            }))
                    }
                }
            } catch (t) {}
            var c
        })),
        function() {
            var t, e = (t = localStorage.getItem(G.LAST_PAGEVIEW)) ? parseInt(t, 10) : null;
            if (!e) return !1;
            var n = Math.floor(Date.now() / 1e3);
            M = n - e >= 10800
        }(), H = Math.floor(Date.now() / 1e3), localStorage.setItem(G.LAST_PAGEVIEW, H);
    var U = null,
        K = !1,
        X = null;

    function Y(t) {
        try {
            if (null != U) return;
            U = setTimeout((function() {
                U = null,
                    function(t) {
                        try {
                            r = window.location.href, null != (e = null == r ? null : r.replace(/\?.*$/, "").replace(/#.*$/, "").replace(/\/$/, "")) && D.includes(e) ? function() {
                                    try {
                                        ut(), ht(), j = !0;
                                        try {
                                            null != s && (s.style.display = "none")
                                        } catch (t) {}
                                        try {
                                            null != h && (h.style.display = "none")
                                        } catch (t) {}
                                    } catch (t) {}
                                }() : function() {
                                    try {
                                        j && (ht(), j = !1)
                                    } catch (t) {}
                                }(),
                                function() {
                                    try {
                                        if (null == l && (l = document.getElementById(i)), null == c && (c = document.getElementById(p)), null == s && (s = document.getElementById(f)), null == d && (d = document.getElementById(y)), null != W) {
                                            var t = document.getElementById(i);
                                            if (null != t ? l = t : null != n && n.length > 0 && Et(W), B == L) {
                                                var e = document.getElementById(p);
                                                null != e ? c = e : (Z(f), Z(y), xt(W))
                                            }
                                            var r = It();
                                            null == l || null == r || document.documentElement.contains(l) || r.appendChild(l), null == c || null == r || document.documentElement.contains(c) || r.appendChild(c), null != l && B == L && _t(W)
                                        }
                                    } catch (t) {}
                                }()
                        } catch (t) {}
                        var e, r
                    }()
            }), 50)
        } catch (t) {}
    }

    function Z(t) {
        try {
            if (null == t) return;
            var e = document.getElementById(t);
            null != e && e.remove()
        } catch (t) {}
    }

    function Q() {
        return lt("chtl_cus")
    }

    function tt() {
        return lt("chtl_chats")
    }

    function et() {
        return lt("chtl_opened")
    }

    function nt() {
        return lt("chtl_hmt")
    }

    function lt(t) {
        return null == t || 0 == t.length || 0 == (t = t.trim()).length ? null : (null == n && (n = gt()), null != n ? t + "_" + n : null)
    }

    function it(t) {
        if (null != t) try {
            var e = Q();
            if (null == e) return;
            for (var n in t) null === t[n] && delete t[n];
            var l = JSON.stringify(t);
            yt(e, btoa(l), _)
        } catch (t) {}
    }

    function rt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
        try {
            null != l && l.contentWindow.postMessage(t, e)
        } catch (t) {}
    }

    function at() {
        try {
            return window.innerWidth
        } catch (t) {
            return null
        }
    }

    function ot() {
        var t = at();
        return null !== t && t < g
    }

    function ut() {
        try {
            var t = l;
            null == t && (t = document.getElementById(i)), null != t && (t.style.transform = "scale(0)", setTimeout((function() {
                t.style.zIndex = -1, t.style.display = "none"
            }), N)), rt({
                event_id: "chtl_chat_widget_closed"
            })
        } catch (t) {}
        ht();
        try {
            var e = s || document.getElementById(f),
                n = d || document.getElementById(y);
            e && e.setAttribute("aria-expanded", "false"), n && n.setAttribute("aria-expanded", "false")
        } catch (t) {}
    }

    function ct() {
        try {
            var t = l;
            null == t && (t = document.getElementById(i)), null != t && (t.style.zIndex = w, t.style.display = "block", setTimeout((function() {
                t.style.transform = "scale(1)"
            }), 10));
            var e = et();
            null != e && yt(e, !0, 30), dt("hide"), rt({
                event_id: "chtl_chat_widget_opened"
            })
        } catch (t) {}! function() {
            try {
                if (s) s.style.display = "none", V(s, !1);
                else {
                    var t = document.getElementById(f);
                    t && (t.style.display = "none", V(t, !1))
                }
                if (!ot())
                    if (d) d.style.display = "flex", V(d, !0);
                    else {
                        var e = document.getElementById(y);
                        e && (e.style.display = "flex", V(e, !0))
                    }
            } catch (t) {}
        }(), null != v && clearTimeout(v);
        try {
            var n = s || document.getElementById(f),
                r = d || document.getElementById(y);
            n && n.setAttribute("aria-expanded", "true"), r && r.setAttribute("aria-expanded", "true")
        } catch (t) {}
    }

    function st() {
        try {
            if (l) {
                if ("block" == l.style.display) return !0
            } else if (1 == document.getElementById(i).style.scale) return !0
        } catch (t) {}
        return !1
    }

    function dt(t) {
        try {
            null != h && ("hide" == t ? (h.style.display = "none", function() {
                var t = nt();
                if (null != t) {
                    var e = Math.floor(Date.now() / 1e3);
                    if (null != P) {
                        var n = P.frequency_id;
                        if (null != n && 1 != n) {
                            var l = function(t) {
                                var e = {
                                    1: 0,
                                    2: 365,
                                    3: 1,
                                    4: 7,
                                    5: 30
                                };
                                return null == t ? null : t in e ? e[t] : null
                            }(n);
                            null !== l && yt(t, e, l)
                        }
                    }
                }
            }()) : "show" == t && function() {
                var t = nt();
                if (null == t) return !1;
                var e = mt(t),
                    n = P.frequency_id;
                if (null === n) return !1;
                if (st()) return !1;
                if (1 == n) return vt(t), !0;
                var l = !1,
                    i = null,
                    r = Math.floor(Date.now() / 1e3);
                return null == e ? l = !0 : i = r - e, 2 == n && i > 31536e3 && (l = !0), 3 == n && i > 86400 && (l = !0), 4 == n && i > 604800 && (l = !0), 5 == n && i > 2592e3 && (l = !0), !!l
            }() && (h.style.display = "block"))
        } catch (t) {}
    }

    function ht() {
        try {
            if (s) s.style.display = "flex", V(s, !0);
            else {
                var t = document.getElementById(f);
                t && (t.style.display = "flex", V(t, !0))
            }
            if (d) d.style.display = "none", V(d, !1);
            else {
                var e = document.getElementById(y);
                e && (e.style.display = "none", V(e, !1))
            }
        } catch (t) {}
    }

    function ft() {
        var t = tt();
        if (null == t) return null;
        var e = mt(t),
            n = [];
        if (null == e) return n;
        try {
            var l = atob(e);
            if (null == l || 0 == l.length) return n;
            var i = JSON.parse(l);
            return null == i ? n : i
        } catch (t) {
            return n
        }
    }

    function yt(t, e, n) {
        var l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Strict",
            i = "";
        if (n) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), i = ";expires=" + r.toUTCString()
        }
        var a = null;
        try {
            null != (a = window.location.hostname) && 0 != a.length || (a = location.hostname)
        } catch (t) {}
        null != a && a.length > 0 && (document.cookie = t + "=" + (e || "") + i + ";path=/;domain=." + a + ";SameSite=" + l)
    }

    function pt() {
        var t = null;
        null == x && (x = function() {
            try {
                var t = Q();
                if (null == t) return;
                var e = mt(t);
                if (null == e) return;
                var n = atob(e);
                return JSON.parse(n)
            } catch (t) {
                return null
            }
        }());
        try {
            null != x && (t = x.uuid)
        } catch (t) {}
        return t
    }

    function mt(t) {
        if (null == t || 0 == t.length) return null;
        if (0 == (t = t.trim()).length) return null;
        for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), l = 0; l < n.length; l++) {
            for (var i = n[l];
                " " === i.charAt(0);) i = i.substring(1);
            if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
        }
        return null
    }

    function vt(t) {
        if (null != t && 0 != t.length) try {
            document.cookie = t + "=; Max-Age=-99999999;"
        } catch (t) {}
    }

    function gt() {
        var t = null;
        try {
            null != window.chtlConfig && (t = window.chtlConfig.chatbotId)
        } catch (t) {}
        if (null == t || 0 == t.length) {
            var e = document.getElementById(r);
            null == e && (e = document.getElementById(a)), null != e && (t = e.getAttribute("data-id"))
        }
        return null != t && (t = t.trim()), t
    }

    function bt() {
        var t = null;
        try {
            window && window.chtlConfig && (t = window.chtlConfig.language)
        } catch (t) {}
        return null == t && (t = null), t
    }

    function wt() {
        try {
            return document.title
        } catch (t) {
            return null
        }
    }

    function xt(t) {
        var e = t.chat_icon.url,
            n = t.position.value,
            l = t.position.x,
            r = t.position.y;
        if (null != l) try {
            l = parseInt(l)
        } catch (t) {}
        if (null != r) try {
            r = parseInt(r)
        } catch (t) {}
        var a = t.primary_color,
            o = t.chat_icon.border_radius,
            u = t.chat_icon.size,
            m = t.chat_icon.color;
        (c = document.createElement("div")).setAttribute("id", p), c.style.position = "fixed", c.style.zIndex = w, "bl" == n ? (c.style.bottom = r + "px", c.style.left = l + "px") : "tl" == n ? (c.style.top = r + "px", c.style.left = l + "px") : "tr" == n ? (c.style.top = r + "px", c.style.right = l + "px") : (c.style.bottom = r + "px", c.style.right = l + "px"), F || (c.style.display = "none"), (s = document.createElement("div")).setAttribute("id", f), s.style.justifyContent = "center", s.style.alignItems = "center", s.style.cursor = "pointer", s.style.borderRadius = o, s.setAttribute("role", "button"), s.setAttribute("tabindex", "0"), s.setAttribute("aria-label", "Open chat"), s.setAttribute("aria-controls", i), s.setAttribute("aria-expanded", "false"), s.style.border = "none", s.style.padding = "0";
        var v = document.createElement("div");
        v.style.height = u + "px", v.style.width = u + "px", v.style.cursor = "pointer", v.style.borderRadius = o;
        var g = v.cloneNode(!0);
        if (null == e) {
            s.style.backgroundColor = a, v.style.display = "flex", v.style.justifyContent = "center", v.style.alignItems = "center", v.style.backgroundColor = a;
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            b.setAttribute("style", "transition: width ease-in-out 0.05s; width: " + u / 2 + "px; height: " + u / 2 + "px;"), b.setAttribute("viewBox", "0 0 820 760"), b.setAttribute("fill", "none");
            var x = document.createElementNS("http://www.w3.org/2000/svg", "path");
            x.setAttribute("d", "M400 0C179.44 0 9.84565e-05 161.493 9.84565e-05 360C9.84565e-05 429.4 21.9601 496.613 63.5734 554.72C55.6934 641.88 34.5734 706.587 3.90677 737.24C-0.146568 741.293 -1.1599 747.493 1.4001 752.613C3.6801 757.187 8.33343 760 13.3334 760C13.9468 760 14.5734 759.96 15.2001 759.867C20.6001 759.107 146.04 741.04 236.76 688.693C288.293 709.48 343.173 720 400 720C620.56 720 800 558.507 800 360C800 161.493 620.56 0 400 0Z"), x.setAttribute("fill", m), b.appendChild(x), v.appendChild(b)
        } else v.style.backgroundImage = "url(" + e + ")", v.style.backgroundSize = "cover", v.style.backgroundRepeat = "no-repeat", v.style.backgroundPosition = "center";
        (d = s.cloneNode(!0)).setAttribute("id", y), d.setAttribute("aria-label", "Close chat"), d.setAttribute("aria-expanded", "false"), g.style.display = "flex", g.style.justifyContent = "center", g.style.alignItems = "center", g.style.backgroundColor = a;
        var _ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        _.setAttribute("style", "width: " + .6 * u + "px; height: " + .6 * u + "px; position: relative; transition: transform 0.3s ease; rotate: 90deg; padding: 0;"), _.setAttribute("viewBox", "0 0 24 24"), _.setAttribute("fill", "none");
        var E = document.createElementNS("http://www.w3.org/2000/svg", "path");
        E.setAttribute("d", "M9.00005 6L15 12L9 18"), E.setAttribute("stroke", m), E.setAttribute("stroke-width", "1.5"), E.setAttribute("stroke-miterlimit", "16"), _.appendChild(E), g.appendChild(_), d.appendChild(g), s.style.display = "flex", V(s, !0), d.style.display = "none", V(d, !1), s.appendChild(v), c.appendChild(s), c.appendChild(d), Ct(c),
            function(t) {
                try {
                    if (null == t) return;
                    var e = t.attention_grabber;
                    if (P = t.hovering_message, null == e) return;
                    if (null == P) return;
                    var n = P.font,
                        l = P.border,
                        i = P.shadow,
                        r = P.background_color || "#ffffff",
                        a = 15,
                        o = "#000000",
                        u = 1,
                        s = "#e6e9ee",
                        d = 5,
                        f = !0;
                    null != n && (null !== n.size && (a = n.size), null != n.color && (o = n.color)), null != l && (null !== l.size && (u = l.size), null != l.color && (s = l.color), null !== l.roundness && (d = l.roundness)), null != i && null !== i.enabled && (f = i.enabled);
                    var y = e.delay;
                    if (1 != (ot() ? e.mobile.enabled : e.desktop.enabled)) return;
                    var p = e.messages;
                    if (null == p || 0 == p.length) return;
                    if (0 == (p = p.filter((function(t) {
                            return null != t && (null != (t = t.trim()) && 0 != t.length)
                        }))).length) return;
                    var m = 350,
                        v = at();
                    (h = document.createElement("div")).style.position = "absolute";
                    var g = 0,
                        b = 5,
                        w = t.position.x,
                        x = t.position.y;
                    if (null != w) try {
                        w = parseInt(w)
                    } catch (t) {}
                    if (null != x) try {
                        x = parseInt(x)
                    } catch (t) {}
                    var _ = t.chat_icon.size;
                    null != x && (g = _);
                    var E = t.position.value,
                        C = g + b,
                        I = 0,
                        A = document.createElement("div");
                    A.style.position = "absolute", A.style.top = "-25px", A.style.zIndex = "1", A.style.cursor = "pointer", A.style.background = r, A.style.borderRadius = "999px", A.style.padding = "5px", A.style.border = "1px solid " + s, A.style.display = "flex", A.style.alignItems = "center", A.style.justifyContent = "center", A.setAttribute("id", "cthl-hovering-message-close-btn");
                    var S = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    S.setAttribute("style", "width: 8px; height: 8px; padding: 0;"), S.setAttribute("viewBox", "0 0 16 16"), S.setAttribute("fill", "none");
                    var k = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    k.setAttribute("d", "M2 14L14 2M2 2L14 14"), k.setAttribute("stroke", o), k.setAttribute("stroke-width", "3"), k.setAttribute("stroke-linecap", "round"), k.setAttribute("stroke-linejoin", "round"), S.appendChild(k), A.appendChild(S), "bl" == E ? (h.style.bottom = C + "px", h.style.left = I + "px", A.style.left = "0px") : "tl" == E ? (h.style.top = C + "px", h.style.left = I + "px", A.style.left = "0px") : "tr" == E ? (h.style.top = C + "px", h.style.right = I + "px", A.style.right = "0px") : (h.style.bottom = C + "px", h.style.right = I + "px", A.style.right = "0px"), h.style.display = "none", null != v && ot() ? (m > v && (m = v - 25), h.style.width = m + "px") : h.style.width = m + "px", h.appendChild(A);
                    var B = document.createElement("div");
                    B.style.display = "flex", B.style.width = "100%", B.style.flexDirection = "column", B.style.gap = "5px";
                    p.forEach((function(t) {
                        var e = document.createElement("div");
                        e.style.cursor = "pointer", e.classList.add("chtl-hovering-message-container"), e.style.padding = "10px 15px", e.style.position = "relative", e.style.borderRadius = d + "px", e.style.width = "fit-content", e.style.maxWidth = "100%", e.style.whiteSpace = "pre-wrap", e.style.wordBreak = "break-word", B.style.alignItems = "bl" == E || "tl" == E ? "flex-start" : "flex-end", e.style.backgroundColor = r, e.style.fontSize = a + "px", e.style.color = o, e.style.border = u + "px solid " + s, f && (e.style.boxShadow = "-2px 0px 10px rgba(0, 0, 0, 0.05)", e.style.mozBoxShadow = "-2px 0px 10px rgba(0, 0, 0, 0.05)"), e.innerHTML = t, e.addEventListener("click", (function() {
                            ct()
                        })), B.appendChild(e)
                    })), c.appendChild(h), h.appendChild(B), A.addEventListener("click", (function() {
                        dt("hide")
                    })), (null == y || y < 0) && (y = 0), setTimeout((function() {
                        dt("show")
                    }), 1e3 * y)
                } catch (t) {}
            }(t), v.addEventListener("click", (function() {
                ct()
            })), s.addEventListener("keydown", (function(t) {
                if (J(t)) {
                    try {
                        t.preventDefault()
                    } catch (t) {}
                    ct()
                }
            })), g.addEventListener("click", (function() {
                ut()
            })), d.addEventListener("keydown", (function(t) {
                if (J(t)) {
                    try {
                        t.preventDefault()
                    } catch (t) {}
                    ut()
                }
            }))
    }

    function _t(t) {
        if (null != t) {
            var e = t.position.value,
                n = t.position.x,
                i = t.position.y,
                r = t.chat_icon.size;
            if (null != n) try {
                n = parseInt(n)
            } catch (t) {}
            if (null != i) try {
                i = parseInt(i)
            } catch (t) {}
            var a = F ? i + r + 20 : i;
            null != i && window.innerHeight - a - 50 > b && b, "bl" == e ? (l.style.bottom = a + "px", l.style.left = n + "px", l.style.transformOrigin = "bottom left") : "tl" == e ? (l.style.top = a + "px", l.style.left = n + "px", l.style.transformOrigin = "top left") : "tr" == e ? (l.style.top = a + "px", l.style.right = n + "px", l.style.transformOrigin = "top right") : (l.style.bottom = a + "px", l.style.right = n + "px", l.style.transformOrigin = "bottom right")
        }
    }

    function Et(t) {
        var e = null,
            r = null;
        null != t && (e = t.custom_domain, r = null == t ? void 0 : t.type);
        var a = "https://embed.chatling.ai";
        if (null != e && (a = "https://" + e), (l = document.createElement("iframe")).setAttribute("allow", "microphone"), l.setAttribute("allowfullscreen", "true"), l.setAttribute("mozallowfullscreen", "true"), l.setAttribute("webkitallowfullscreen", "true"), 2 == r) l.src = a + "/ag/" + n;
        else if (q()) l.src = "https://embed.chatling.ai/widgets/" + n;
        else {
            if (!$()) return;
            l.src = a + "/w2/" + n
        }
        if (l.style.border = "none", B == O) l.style.position = "fixed", l.style.height = "100%", l.style.width = "100%", l.style.minHeight = "80px", l.style.zIndex = w, l.style.overflow = "hidden", l.style.borderRadius = "0", l.style.top = "0", l.style.left = "0";
        else if (B == T) l.style.height = "100%", l.style.width = "100%", l.style.overflow = "hidden", l.style.borderRadius = "0";
        else {
            var c = t.chat_interface.width,
                s = b;
            l.style.display = "none", l.style.position = "fixed", l.style.height = "80vh", l.style.minHeight = "80px", l.style.maxHeight = s + "px", l.style.overflow = "hidden", l.style.width = "100%", l.style.maxWidth = c + "px", l.style.borderRadius = "15px", l.style.transition = "transform " + N + "ms ease-in-out 0s", l.style.transform = "scale(0)", l.style.zIndex = "-1"
        }
        if (_t(t), l.setAttribute("id", i), l.setAttribute("class", "chtl-display-" + B), l.addEventListener("load", (function() {
                B == L && (l.style.boxShadow = "rgba(0, 0, 0, 0.01) 0px 5px 10px 0px, rgba(0, 0, 0, 0.1) 0px 7px 12px 0px")
            })), B == T) {
            var d = document.getElementById(o);
            null == d && (d = document.getElementById(u)), null != d && d.appendChild(l)
        } else Ct(l)
    }

    function Ct(t) {
        var e = It();
        e ? e.appendChild(t) : setTimeout((function() {
            var e = It();
            e && e.appendChild(t)
        }), 4e3)
    }

    function It() {
        try {
            if (null == document) return null;
            var t = document.body,
                e = document.documentElement;
            if (null == t) return e;
            try {
                var n = window.getComputedStyle(t);
                if (null != n) {
                    var l = n.transform || n.webkitTransform,
                        i = n.filter || n.webkitFilter,
                        r = n.perspective || n.webkitPerspective;
                    if (l && "none" !== l || i && "none" !== i || r && "none" !== r) return e || t
                }
            } catch (t) {}
            return t
        } catch (t) {
            return document.body || document.documentElement
        }
    }

    function At(t) {
        var e = "";
        if (null != t) {
            var n = t.hovering_message,
                l = "#000";
            null != n && null != n.font && (null != n.font.color && (l = n.font.color), null !== n.font.size && n.font.size), B == L && (e = "@media all and (max-width: 640px) {#chtl-chat-iframe.chtl-display-" + L + " {    width: 100% !important;    max-width: initial !important;    right: 0px !important;    top: 0px !important;    left: 0 !important;    bottom: 0px !important;    max-height: initial !important;    height: 100% !important;    border-radius: 0px !important;}}#" + f + ", #" + y + " {    transition: scale 0.2s ease 0s;    scale: 1;}#" + f + ":hover, #" + y + ":hover {    scale: 1.1;}"), e += ".chtl-hovering-message-container *, .chtl-hovering-message-container *::before, .chtl-hovering-message-container *::after {    font-size: inherit !important;}.chtl-hovering-message-container p, .chtl-hovering-message-container p span, .chtl-hovering-message-container p em, .chtl-hovering-message-container p u {    color: " + l + " !important;    margin: 0 !important;    font-weight: 400 !important;}";
            var i = document.createElement("style");
            i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)), document.head.appendChild(i)
        }
    }

    function St() {
        "open_once" == I && function() {
            var t = et();
            if (null == t) return !1;
            var e = mt(t);
            return 1 == e || "true" == e
        }() || (ot() ? E && (v = setTimeout((function() {
            ct()
        }), 1e3 * A)) : C && (v = setTimeout((function() {
            ct()
        }), 1e3 * A)))
    }! function() {
        if (!K) {
            K = !0;
            try {
                ["pushState", "replaceState"].forEach((function(t) {
                    try {
                        var e = history[t];
                        if ("function" != typeof e) return;
                        history[t] = function() {
                            var t = e.apply(history, arguments);
                            return Y(), t
                        }
                    } catch (t) {}
                })), window.addEventListener("popstate", (function() {
                    Y()
                })), window.addEventListener("hashchange", (function() {
                    Y()
                }))
            } catch (t) {}
        }
    }(),
    function() {
        try {
            if (null != X) return;
            if ("undefined" == typeof MutationObserver) return;
            X = new MutationObserver((function() {
                try {
                    var t = null == document.getElementById(i),
                        e = B == L && null == document.getElementById(p);
                    (t || e) && Y()
                } catch (t) {}
            }));
            var t = document.documentElement || document.body;
            null != t && X.observe(t, {
                childList: !0,
                subtree: !0
            })
        } catch (t) {}
    }(),
    function() {
        if (n = gt(), B = function() {
                var t = null,
                    e = L;
                try {
                    null != window.chtlConfig && (t = window.chtlConfig.display)
                } catch (t) {}
                if (null == t || 0 == t.length) {
                    var n = document.getElementById(r);
                    null == n && (n = document.getElementById(a)), null != n && null != (t = n.getAttribute("data-display")) && t.length > 0 && (t = t.trim())
                }(null == t || 0 == t.length || t != O && t != T && t != L) && (t = e);
                return t
            }(), F = function() {
                var t = true;
                try {
                    window && window.chtlConfig && (t = window.chtlConfig.chatIconVisible)
                } catch (t) {}
                null == t && (t = true);
                return 1 == t
            }(), R = function() {
                if (null == window || null == window.chtlConfig) return null;
                var t = window.chtlConfig.variables;
                return null == t ? null : t
            }(), !n) return;
        try {
            z = navigator.language || navigator.languages[0]
        } catch (t) {}
        try {
            var t = function() {
                try {
                    var t = ft();
                    return null == t || 0 == t.length ? null : t[t.length - 1]
                } catch (t) {
                    return null
                }
            }();
            null != t && (k = t.chat_gid)
        } catch (t) {}
        var l = pt();
        ! function() {
            var t = Q();
            if (null == t) return;
            var e = mt(t);
            if (null == e) return;
            yt(t, e, _)
        }();
        var i = {
            widget_id: n,
            lcg: k,
            cuid: l,
            display_type: B,
            locale: z,
            page_url: window.location.href
        };
        fetch("https://chatling.ai/public/embed/chatbot/setup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(i)
        }).then((function(t) {
            try {
                t.json().then((function(t) {
                    if (null != t && null != t.success && 0 != t.success) {
                        var n = t.data;
                        if (null != n) {
                            try {
                                var i = n.chat;
                                if (null != i) {
                                    var r = i.messages;
                                    null != r && r.length > 0 && (S = r)
                                }
                            } catch (t) {}
                            if (null == l) {
                                var a = n.cuid;
                                null != a && a.length > 0 && (null == x ? x = {
                                    uuid: a
                                } : x.uuid = a, it(x))
                            }
                            D = n.hide_pages, e = n.version, (q() || $()) && (W = n, q() || B == L ? (B = L, xt(n), Et(n), At(n), function(t) {
                                try {
                                    if (null == t) return;
                                    var e = t.auto_open;
                                    if (null != e) {
                                        C = e.enable_on_desktop, E = e.enable_on_mobile;
                                        var n = e.delay;
                                        I = e.behavior, (null == n || n < 0) && (n = 0), A = n, q() && St()
                                    }
                                } catch (t) {}
                            }(n)) : (B == O || B == T) && (Et(n), At(n)))
                        }
                    }
                }))
            } catch (t) {}
        })).catch((function(t) {}))
    }(), null != window && (window.Chatling = {
        setVariables: function(e, l) {
            if (!q())
                if (null != e)
                    if ("object" === t(e))
                        if (0 !== Object.keys(e).length) {
                            var i = null;
                            window && window.location && window.location.hostname && (i = window.location.hostname);
                            var r = {
                                variables: e,
                                cgid: k,
                                egid: n,
                                domain: i,
                                cuid: pt()
                            };
                            fetch("https://chatling.ai/public/embed/chatbot/v2/chat/svv", {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(r)
                            }).then((function(t) {
                                if (!t.ok) {
                                    var e = "Failed to save variables (CODE 7005)",
                                        n = t.status;
                                    return 429 == n ? e = "You're sending too many requests. Please try again later." : 500 == n ? e = "Server error." : 200 != n && (e = "Failed to save variables (CODE 7006)"), void l(!1, e)
                                }
                                try {
                                    t.json().then((function(t) {
                                        null != t ? null != t.success ? 0 != t.success ? 1 != t.success || l(!0, null) : l(!1, t.data) : l(!1, "Failed to save variables (CODE 7002)") : l(!1, "Failed to save variables (CODE 7001)")
                                    }))
                                } catch (t) {
                                    l(!1, "Failed to save variables (CODE 7003)")
                                }
                            })).catch((function(t) {
                                l(!1, "Failed to save variables (CODE 7004)")
                            }))
                        } else null != l && l(!1, "No variables provided");
            else null != l && l(!1, "Invalid variables. Must be an object with key-value pairs.");
            else null != l && l(!1, "No variables provided")
        },
        open: ct,
        minimize: ut,
        destroy: function() {
            try {
                var t = l;
                if (null == t && (t = document.getElementById(i)), null != t) {
                    t.remove();
                    var e = document.getElementById(f),
                        n = document.getElementById(y);
                    null != e && e.remove(), null != n && n.remove()
                }
            } catch (t) {}
        },
        showChatIcon: function() {
            if (null == c) return;
            c.style.display = "", F = !0, _t(W)
        },
        hideChatIcon: function() {
            if (null == c) return;
            c.style.display = "none", F = !1, _t(W)
        }
    })
})();