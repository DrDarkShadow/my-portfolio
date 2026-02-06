(function(t) {
    function e(e) {
        for (var i, r, o = e[0], l = e[1], c = e[2], u = 0, p = []; u < o.length; u++) r = o[u], Object.prototype.hasOwnProperty.call(s, r) && s[r] && p.push(s[r][0]), s[r] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
        d && d(e);
        while (p.length) p.shift()();
        return n.push.apply(n, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < n.length; e++) {
            for (var a = n[e], i = !0, o = 1; o < a.length; o++) {
                var l = a[o];
                0 !== s[l] && (i = !1)
            }
            i && (n.splice(e--, 1), t = r(r.s = a[0]))
        }
        return t
    }
    var i = {},
        s = {
            app: 0
        },
        n = [];

    function r(e) {
        if (i[e]) return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = t, r.c = i, r.d = function(t, e, a) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(a, i, function(e) {
                return t[e]
            }.bind(null, i));
        return a
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var c = 0; c < o.length; c++) e(o[c]);
    var d = l;
    n.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "0570": function(t, e, a) {
        "use strict";
        a("5df2")
    },
    "0633": function(t, e, a) {
        "use strict";
        a("3853")
    },
    "0c25": function(t, e, a) {},
    "1ad9": function(t, e, a) {},
    "200a": function(t, e, a) {
        "use strict";
        a("a185")
    },
    2094: function(t, e, a) {
        t.exports = a.p + "img/laptop.7d94b3c3.jpeg"
    },
    "282e": function(t, e, a) {
        "use strict";
        a("c429")
    },
    "2e89": function(t, e, a) {
        t.exports = a.p + "img/me1.6c8a331e.jpg"
    },
    3853: function(t, e, a) {},
    "464d": function(t, e, a) {},
    "4a50": function(t, e, a) {
        "use strict";
        a("1ad9")
    },
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("cadf"), a("551c"), a("f751"), a("097d");
        var i = a("2b0e"),
            s = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: {
                        "dark-mode": t.darkMode
                    },
                    attrs: {
                        id: "app"
                    }
                }, [e("Nav"), e("Summary"), e("About"), e("Skills"), e("Project"), e("Journey"), e("WriteMe"), e("Contact"), e("ChatBot"), e("CanvasAnimation")], 1)
            },
            n = [],
            r = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "py-3 shadow nav",
                    attrs: {
                        id: "navigation"
                    }
                }, [e("div", {
                    staticClass: "container d-flex- justify-content-between"
                }, [e("h2", {
                    staticClass: "d-inline"
                }, [t._v("Arjad's Portfolio")]), e("ul", {
                    staticClass: "d-flex mb-0"
                }, [e("li", {
                    staticClass: "p-2 scroll-to",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("summary")
                        }
                    }
                }, [t._v("Summary")]), e("li", {
                    staticClass: "p-2 scroll-to",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("about")
                        }
                    }
                }, [t._v("About")]), e("li", {
                    staticClass: "p-2 scroll-to",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("practicle_skills")
                        }
                    }
                }, [t._v("Skills")]), e("li", {
                    staticClass: "p-2 scroll-to",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("projects")
                        }
                    }
                }, [t._v("Projects")]), e("li", {
                    staticClass: "p-2 scroll-to",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("contact")
                        }
                    }
                }, [t._v("Contact")]), e("li", {
                    staticClass: "pt-2 pl-3"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.darkMode,
                        expression: "darkMode"
                    }],
                    staticClass: "checkbox",
                    attrs: {
                        type: "checkbox",
                        id: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.darkMode) ? t._i(t.darkMode, null) > -1 : t.darkMode
                    },
                    on: {
                        change: [function(e) {
                            var a = t.darkMode,
                                i = e.target,
                                s = !!i.checked;
                            if (Array.isArray(a)) {
                                var n = null,
                                    r = t._i(a, n);
                                i.checked ? r < 0 && (t.darkMode = a.concat([n])) : r > -1 && (t.darkMode = a.slice(0, r).concat(a.slice(r + 1)))
                            } else t.darkMode = s
                        }, function(e) {
                            return t.toggleDarkMode()
                        }]
                    }
                }), t._m(0)])])])])
            },
            o = [function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "checkbox-label",
                    attrs: {
                        for: "checkbox"
                    }
                }, [e("i", {
                    staticClass: "fas fa-moon"
                }), e("i", {
                    staticClass: "fas fa-sun"
                }), e("span", {
                    staticClass: "ball"
                })])
            }],
            l = (a("6b54"), {
                data: function() {
                    return {
                        darkMode: "true" === sessionStorage.getItem("darkMode")
                    }
                },
                methods: {
                    toggleDarkMode: function() {
                        sessionStorage.setItem("darkMode", this.darkMode.toString()), this.darkMode ? $("#app").addClass("dark-mode") : $("#app").removeClass("dark-mode")
                    },
                    scrollToSection: function(t) {
                        var e = document.getElementById(t);
                        e && e.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }
            }),
            c = l,
            d = (a("fa8f"), a("2877")),
            u = Object(d["a"])(c, r, o, !1, null, "192950da", null),
            p = u.exports,
            f = function() {
                var t = this,
                    e = t._self._c;
                return e("section", {
                    staticClass: "section section_1 py-5 w-100 row",
                    attrs: {
                        id: "summary"
                    }
                }, [e("div", {
                    staticClass: "section__text text-center px-3 py-5 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center flex-column",
                    attrs: {
                        "data-aos": "fade-right",
                        "data-aos-duration": "1000"
                    }
                }, [e("p", [t._v("Hey! I'm")]), e("h1", [t._v("Arjad Gohar")]), e("vue-typer", {
                    attrs: {
                        text: "FullStack Developer"
                    }
                }), e("p", {
                    staticClass: "intro-para mt-2"
                }, [t._v(" \n      I am a skilled software developer delivering high-quality solutions across diverse projects. My expertise spans front-end and back-end development, including Vue.js, React.js, Ruby on Rails and Python.\n    ")]), e("p", {
                    staticClass: "intro-para"
                }, [t._v("\n      I specialize in creating user-friendly interfaces and scalable systems to meet client needs. My passion lies in solving complex challenges with and effective solutions.\n    ")]), e("div", {
                    staticClass: "btn-container mt-3"
                }, [e("button", {
                    staticClass: "btn btn-color-2 btn-black",
                    attrs: {
                        onclick: "location.href='https://drive.google.com/file/d/1I24YNY6zHmmT7MtJzKVGk1kLrqlBnT3a/view?usp=sharing'"
                    }
                }, [t._v("\n        View Resume\n      ")]), e("button", {
                    staticClass: "btn btn-color-1",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("contact")
                        }
                    }
                }, [t._v("\n        Contact Info\n      ")])]), e("div", {
                    attrs: {
                        id: "socials-container"
                    }
                }, [e("i", {
                    staticClass: "fa-brands fa-linkedin icon",
                    on: {
                        click: function(e) {
                            return t.redirectTo("https://www.linkedin.com/in/arjad/")
                        }
                    }
                }), e("i", {
                    staticClass: "icon fa-brands fa-github",
                    on: {
                        click: function(e) {
                            return t.redirectTo("https://github.com/arjad")
                        }
                    }
                })])], 1), t._m(0)])
            },
            h = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "pic_container col-lg-6 col-sm-12 d-flex justify-content-center alig-items-center"
                }, [e("div", {
                    staticClass: "pic_container_inner"
                }, [e("div", {
                    staticClass: "green-bg"
                }), e("img", {
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        zoomtastic: "",
                        src: a("9f2c"),
                        alt: "profile pic"
                    }
                })])])
            }],
            m = a("e956"),
            g = (a("d67e"), {
                components: {
                    "vue-typer": m["VueTyper"]
                },
                methods: {
                    redirectTo: function(t) {
                        window.location.href = t
                    },
                    scrollToSection: function(t) {
                        var e = document.getElementById(t);
                        e && e.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }
            }),
            v = g,
            b = (a("e554"), Object(d["a"])(v, f, h, !1, null, "7ff201c4", null)),
            C = b.exports,
            y = function() {
                var t = this,
                    e = t._self._c;
                return e("section", {
                    staticClass: "container",
                    attrs: {
                        id: "about"
                    }
                }, [e("Heading", {
                    attrs: {
                        title: "About Me",
                        subtitle: "Want to know me"
                    }
                }), e("div", {
                    staticClass: "position-relative"
                }, [e("div", {
                    staticClass: "verticle-line position-absolute"
                }), e("div", {
                    staticClass: "mt-4 ml-5",
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000"
                    }
                }, [e("h2", {
                    staticClass: "mb-4"
                }, [e("i", {
                    staticClass: "fa-solid fa-briefcase"
                }), t._v(" Experience - " + t._s(t.calculatedExperience) + "+ year(s)")]), t._m(0), t._m(1), t._m(2), t._m(3), e("h4", {
                    staticClass: "text-green"
                }, [t._v(" Front End Developer - 2021-2022 ")]), t._m(4), t._m(5), t._m(6), e("h4", {
                    staticClass: "text-green"
                }, [t._v(" Freelancer - 2019-2021 ")]), t._m(7), t._m(8), t._m(9)])]), e("br"), t._m(10)], 1)
            },
            x = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "w-100 text-green"
                }, [e("h4", {
                    staticClass: "d-inline"
                }, [t._v(" Software Engineer - 2022-present")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("h6", [e("a", {
                    staticClass: "text-blue",
                    attrs: {
                        href: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://codingcops.com/&ved=2ahUKEwj45KjR6OGKAxWXF2IAHS9oO-MQFnoECDcQAQ&usg=AOvVaw0qDV81i0KjT34kPmA7ojBM"
                    }
                }, [t._v(" Coding Cops, Lahore. ")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("ul", [e("li", [t._v(" Developed key features and resolved bugs for web applications using React, Vue.js, and Ruby on Rails. ")]), e("li", [t._v(" Continuously enhancing skills by pursuing certifications in AWS, DevOps & python. ")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "skills mb-5"
                }, [e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("Vue JS")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("React JS")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("Ruby on Rails")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("Python ")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("AWS services")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("h6", [e("a", {
                    staticClass: "text-blue",
                    attrs: {
                        href: "https://theunitedsoftware.com/"
                    }
                }, [t._v("United Insurance, Lahore. ")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("ul", [e("li", [t._v(" Created visually appealing, user-friendly interfaces, using CSS grid and flexbox layouts for responsive design. ")]), e("li", [t._v(" Utilized react components & npm modules to develop modular, reusable UI elements for efficient front-end development. ")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "skills mb-5"
                }, [e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("HTML")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("CSS")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("SCSS")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("JavaScript")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("Bootstrap")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("Tailwind CSS")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("React JS")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("h6", [e("a", {
                    staticClass: "text-blue",
                    attrs: {
                        href: "https://www.upwork.com/freelancers/~01a73a1abd70f9f27f"
                    }
                }, [t._v("Upwork ")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("ul", [e("li", [t._v(" Developed key features and resolved bugs for web applications using React, Vue.js, and Ruby on Rails. ")]), e("li", [t._v("Continuously enhancing skills by pursuing certifications in AWS, DevOps & Python. ")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "skills mb-5"
                }, [e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("Front End Optimization")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("AWS Deployment")]), e("span", {
                    staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                }, [t._v("Backend Optimization")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "position-relative mt-5"
                }, [e("div", {
                    staticClass: "verticle-line position-absolute"
                }), e("div", {
                    staticClass: "mt-4 ml-5",
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000"
                    }
                }, [e("h2", {
                    staticClass: "mb-4"
                }, [e("i", {
                    staticClass: "fa-solid fa-user-graduate"
                }), t._v(" Education ")]), e("h4", {
                    staticClass: "text-green"
                }, [t._v(" Bachelor in Information Technology (BIT) - 2022-present ")]), e("h6", [e("a", {
                    staticClass: "text-blue",
                    attrs: {
                        href: "https://pucit.edu.pk/"
                    }
                }, [t._v(" Punjab University (PUCIT) Lahore, Pakistan. ")])]), e("p", [t._v(" Obtained comprehensive knowledge in computer science and information technology, enhancing skills in software development, and passed it with 3.06 CGPA. ")]), e("h4", {
                    staticClass: "text-green"
                }, [t._v(" Mern Stack Certification - 2022")]), e("h6", [e("a", {
                    staticClass: "text-blue",
                    attrs: {
                        href: "https://nextbridge.com/"
                    }
                }, [t._v("Next Bridge, Lahore, Pakistan.")])]), e("p", [t._v("Acquired advanced mern-stack, leveraging industry best practices to create dynamic and interactive web applications.")])])])
            }],
            _ = function() {
                var t = this,
                    e = t._self._c;
                return e("section", {
                    staticClass: "container",
                    attrs: {
                        id: "heading-comp"
                    }
                }, [e("p", {
                    staticClass: "text-center mt-5",
                    attrs: {
                        id: "skills"
                    }
                }, [t._v(t._s(t.subtitle))]), e("h1", {
                    staticClass: "title text-center mb-5"
                }, [t._v(t._s(t.title))])])
            },
            k = [],
            w = {
                data: function() {
                    return {
                        activeSection: "experience"
                    }
                },
                methods: {
                    setActiveSection: function(t) {
                        this.activeSection = t
                    }
                },
                props: {
                    title: {
                        type: String,
                        required: !0
                    },
                    subtitle: {
                        type: String,
                        required: !0
                    }
                }
            },
            S = w,
            j = (a("4a50"), Object(d["a"])(S, _, k, !1, null, "3d5e5421", null)),
            F = j.exports,
            M = {
                components: {
                    Heading: F
                },
                data: function() {
                    return {
                        activeSection: "experience",
                        startDate: "2019-01-01"
                    }
                },
                computed: {
                    calculatedExperience: function() {
                        var t = new Date(this.startDate),
                            e = new Date,
                            a = e.getFullYear() - t.getFullYear(),
                            i = e.getMonth() >= t.getMonth() && e.getDate() >= t.getDate();
                        return i ? a : a - 1
                    }
                },
                methods: {
                    setActiveSection: function(t) {
                        this.activeSection = t
                    }
                }
            },
            L = M,
            A = (a("fb3d"), Object(d["a"])(L, y, x, !1, null, "84aa5076", null)),
            O = A.exports,
            D = (a("7f7f"), function() {
                var t = this,
                    e = t._self._c;
                return e("section", {
                    attrs: {
                        id: "practicle_skills"
                    }
                }, [e("Heading", {
                    attrs: {
                        title: "Practical Skills",
                        subtitle: "Explore My"
                    }
                }), e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "d-flex justify-content-center flex-wrap"
                }, t._l(t.skills, (function(a, i) {
                    return e("article", {
                        key: i,
                        staticClass: "position-relative",
                        attrs: {
                            "data-aos": "zoom-in",
                            "data-aos-duration": t.getAosDuration(i)
                        },
                        on: {
                            mouseover: function(e) {
                                return t.toggleSkillLevel(i, !0)
                            },
                            mouseout: function(e) {
                                return t.toggleSkillLevel(i, !1)
                            }
                        }
                    }, [e("h3", [e("img", {
                        staticClass: "skill-image mr-3",
                        attrs: {
                            src: "/icons/".concat(a.imageSrc, ".png")
                        }
                    }), t._v("\n\n          " + t._s(a.name) + "\n        ")])])
                })), 0)])], 1)
            }),
            E = [],
            P = (a("8e6e"), a("ac6a"), a("456d"), a("bd86"));

        function B(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), a.push.apply(a, i)
            }
            return a
        }

        function R(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? B(Object(a), !0).forEach((function(e) {
                    Object(P["a"])(t, e, a[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : B(Object(a)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }))
            }
            return t
        }
        var T = {
                components: {
                    Heading: F
                },
                data: function() {
                    return {
                        skills: [{
                            name: "HTML",
                            imageSrc: "html"
                        }, {
                            name: "CSS",
                            imageSrc: "css"
                        }, {
                            name: "Bootstrap",
                            imageSrc: "bootstrap"
                        }, {
                            name: "SASS",
                            imageSrc: "sass"
                        }, {
                            name: "Tailwind",
                            imageSrc: "tailwind"
                        }, {
                            name: "JavaScript",
                            imageSrc: "js"
                        }, {
                            name: "React",
                            imageSrc: "react"
                        }, {
                            name: "Next",
                            imageSrc: "next"
                        }, {
                            name: "Vue",
                            imageSrc: "vue"
                        }, {
                            name: "Vite",
                            imageSrc: "vite"
                        }, {
                            name: "Rails",
                            imageSrc: "ruby"
                        }, {
                            name: "Python",
                            imageSrc: "python"
                        }, {
                            name: "AWS services",
                            imageSrc: "aws"
                        }, {
                            name: "Git",
                            imageSrc: "git"
                        }, {
                            name: "GitHub",
                            imageSrc: "github"
                        }]
                    }
                },
                methods: {
                    toggleSkillLevel: function(t) {
                        this.$set(this.skills, t, R(R({}, this.skills[t]), {}, {
                            showLevel: !this.skills[t].showLevel
                        }))
                    },
                    getAosDuration: function(t) {
                        return 400 * t
                    }
                }
            },
            H = T,
            I = (a("deda"), Object(d["a"])(H, D, E, !1, null, "c93b67f2", null)),
            z = I.exports,
            G = function() {
                var t = this,
                    e = t._self._c;
                return e("section", {
                    attrs: {
                        id: "projects"
                    }
                }, [e("Heading", {
                    attrs: {
                        title: "My Projects",
                        subtitle: "Have a look at"
                    }
                }), e("section", {
                    staticClass: "project-container container-fluid"
                }, t._l(t.projects, (function(a, i) {
                    return e("div", {
                        key: i,
                        staticClass: "card px-0"
                    }, [e("img", {
                        staticClass: "card-img-top",
                        attrs: {
                            src: a.image,
                            alt: a.title
                        }
                    }), e("div", {
                        staticClass: "card-body shadow"
                    }, [e("h5", {
                        staticClass: "card-title"
                    }, [t._v(t._s(a.title))]), e("p", {
                        staticClass: "card-text"
                    }, [t._v(t._s(a.description))]), e("div", {
                        staticClass: "mb-3"
                    }, t._l(a.technologies, (function(a, i) {
                        return e("span", {
                            key: i,
                            staticClass: "badge rounded-pill px-3 py-2 mx-2 border border-dark"
                        }, [t._v("\n              " + t._s(a) + "\n            ")])
                    })), 0), e("div", {
                        staticClass: "d-flex"
                    }, [e("a", {
                        staticClass: "btn me-2",
                        attrs: {
                            href: a.github,
                            target: "_blank"
                        }
                    }, [e("i", {
                        staticClass: "fa-brands fa-github mr-2"
                    }), t._v("GitHub\n              ")]), e("a", {
                        staticClass: "btn",
                        attrs: {
                            href: a.live,
                            target: "_blank"
                        }
                    }, [e("i", {
                        staticClass: "fa-solid fa-arrow-up-right-from-square"
                    }), t._v("  Live Demo\n              ")])])])])
                })), 0)], 1)
            },
            U = [],
            W = a("a7ab"),
            V = a.n(W),
            J = (a("7b8d"), a("6a2c"), {
                name: "MyComponent",
                components: {
                    VueSlickCarousel: V.a,
                    Heading: F
                },
                methods: {
                    viewUrl: function(t) {
                        window.location.href = t
                    }
                },
                data: function() {
                    return {
                        projects: [{
                            title: "Blood Donation Website",
                            description: "A web platform designed to connect blood donors with recipients efficiently. Users can create an account, input their blood type and location, and receive notifications when a matching recipient requires a donation. The system ensures quick and seamless communication between donors and those in need.",
                            image: "/projects/project_blood_web.png",
                            live: "https://dreamy-banoffee-b9dd62.netlify.app/",
                            github: "https://github.com/arjad/Blood-web",
                            technologies: ["React JS", "Node JS", "Mongo DB"]
                        }, {
                            title: "i Notes Extension",
                            description: "A Chrome browser extension for efficient note-taking. Users can create, save, and organize notes with time-based reminders. The extension also includes a quick copy feature, enhancing productivity. Developed with contributions from 10 developers, it offers a seamless and intuitive user experience.",
                            image: "/projects/project_inotes.png",
                            live: "https://github.com/arjad/chrome-notes",
                            github: "https://github.com/arjad/chrome-notes",
                            technologies: ["HTML", "CSS", "React JS", "Webpack"]
                        }, {
                            title: "Azoom E-Commerce Website",
                            description: "A fully functional e-commerce website developed for a U.S.-based client. The platform provides a seamless shopping experience, featuring product catalogs, secure payment integrations, and a user-friendly interface. Built with modern web technologies for optimized performance.",
                            image: "/projects/project_azoom.png",
                            live: "https://www.azoom.co.uk/",
                            github: "https://github.com/arjad/azoom-ecomers",
                            technologies: ["HTML", "CSS", "Bootstrap", "GitHub"]
                        }, {
                            title: "Version Tracker Gem",
                            description: "A Ruby gem that enables version tracking for database models in a Rails application. It automatically creates an additional column to store previous versions of a record using callback functions, ensuring data integrity and version history management.",
                            image: "/projects/project_version_tracker.png",
                            live: "https://rubygems.org/gems/arjad_version_tracker/versions/0.5.0?locale=en",
                            github: "https://github.com/arjad/arjad_version_tracker",
                            technologies: ["Ruby", "Ruby on Rails"]
                        }, {
                            title: "United Insurance Website",
                            description: "A complete redesign of the United Insurance Company’s website, built during an internship at UIC. The project involved modernizing the UI/UX, improving site responsiveness, and enhancing accessibility using HTML, CSS, and SASS for a polished and professional look.",
                            image: "/projects/project_insurance.png",
                            live: "https://mystifying-shaw-f4dc85.netlify.app/",
                            github: "https://github.com/arjad/uic-new",
                            technologies: ["React JS", "HTML", "SASS"]
                        }, {
                            title: "WeHolding Real Estate Website",
                            description: "A real estate web application that helps property owners connect with potential buyers and renters. Users can explore property listings, contact owners directly, and make inquiries through the website, streamlining the real estate process.",
                            image: "/projects/project_weHolding.png",
                            live: "https://weholdings.netlify.app/",
                            github: "https://github.com/arjad/WeHoldings",
                            technologies: ["Vue JS", "Mongo DB"]
                        }, {
                            title: "NeoReach",
                            description: "A visually dynamic website featuring animations and custom CSS effects to enhance user engagement. Designed to showcase advanced front-end development techniques with a focus on smooth transitions, responsiveness, and interactive elements.",
                            image: "/projects/project_neoreach.png",
                            live: "https://affectionate-lovelace-1649f4.netlify.app/",
                            github: "https://github.com/arjad/NeoReach",
                            technologies: ["Animations", "HTML", "SASS"]
                        }, {
                            title: "Food Menu App",
                            description: "A restaurant ordering application that allows users to browse the menu, select dishes, and place orders online. Built with a visually appealing UI, the app enhances the digital dining experience with smooth animations and a structured layout.",
                            image: "/projects/project_freshmenu.png",
                            live: "https://kaleidoscopic-cat-37f8fc.netlify.app/",
                            github: "https://github.com/arjad/food-menu",
                            technologies: ["Animations", "HTML", "SASS"]
                        }]
                    }
                }
            }),
            Z = J,
            q = (a("200a"), Object(d["a"])(Z, G, U, !1, null, "ced08a74", null)),
            N = q.exports,
            Y = function() {
                var t = this,
                    e = t._self._c;
                return e("section", [e("Heading", {
                    attrs: {
                        title: "My Journey",
                        subtitle: "A look at my work, achievements, and contributions"
                    }
                }), t._m(0)], 1)
            },
            K = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "container gallery-div"
                }, [e("div", {
                    attrs: {
                        id: "gallery"
                    }
                }, [e("div", [e("img", {
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        zoomtastic: "",
                        src: a("78de"),
                        alt: "profile pic"
                    }
                })]), e("div", [e("img", {
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        zoomtastic: "",
                        src: a("a480"),
                        alt: "profile pic"
                    }
                }), e("a", {
                    attrs: {
                        href: "#lightbox-2"
                    }
                }, [t._v("My Work Desk")])]), e("div", [e("img", {
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        zoomtastic: "",
                        src: a("9d34"),
                        alt: "profile pic"
                    }
                })]), e("div", [e("img", {
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        zoomtastic: "",
                        src: a("bfba"),
                        alt: "profile pic"
                    }
                }), e("a", {
                    attrs: {
                        href: "#lightbox-4"
                    }
                }, [t._v("Tour")])]), e("div", [e("img", {
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        zoomtastic: "",
                        src: a("2e89"),
                        alt: "profile pic"
                    }
                })]), e("div", [e("img", {
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        zoomtastic: "",
                        src: a("2094"),
                        alt: "profile pic"
                    }
                }), e("a", {
                    attrs: {
                        href: "#lightbox-4"
                    }
                }, [t._v("mac")])])])])
            }],
            Q = {
                components: {
                    VueSlickCarousel: V.a,
                    Heading: F
                },
                methods: {
                    viewUrl: function(t) {
                        window.location.href = t
                    }
                }
            },
            X = Q,
            tt = (a("0633"), Object(d["a"])(X, Y, K, !1, null, "2eea0e6d", null)),
            et = tt.exports,
            at = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("footer", {
                    staticClass: "mt-5 text-lg-start",
                    attrs: {
                        id: "contact"
                    }
                }, [e("hr", {
                    staticClass: "my-4"
                }), e("section", {
                    staticClass: "row"
                }, [t._m(0), t._m(1), e("div", {
                    staticClass: "col-md-4 col-lg-3 col-xl-3 mx-auto mt-3"
                }, [e("h6", {
                    staticClass: "text-uppercase mb-4 font-weight-bold"
                }, [t._v("Links")]), e("p", {
                    staticClass: "scroll-to",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("summary")
                        }
                    }
                }, [t._v("Summary")]), e("p", {
                    staticClass: "scroll-to",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("about")
                        }
                    }
                }, [t._v("About")]), e("p", {
                    staticClass: "scroll-to",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("practicle_skills")
                        }
                    }
                }, [t._v("Skills")]), e("p", {
                    staticClass: "scroll-to",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("projects")
                        }
                    }
                }, [t._v("Projects")])]), t._m(2)]), e("hr"), t._m(3)])])
            },
            it = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"
                }, [e("h6", {
                    staticClass: "text-uppercase mb-4 font-weight-bold"
                }, [t._v("Contact Details")]), e("p", [e("a", {
                    attrs: {
                        href: "https://www.linkedin.com/in/arjad/",
                        target: "_blank"
                    }
                }, [e("i", {
                    staticClass: "fab fa-linkedin"
                }), t._v(" LinkedIn\n              ")])]), e("p", [e("a", {
                    attrs: {
                        href: "https://github.com/arjad",
                        target: "_blank"
                    }
                }, [e("i", {
                    staticClass: "fab fa-github"
                }), t._v(" GitHub\n              ")])]), e("p", [e("a", {
                    attrs: {
                        href: "mailto:arjadgohar14@gmail.com"
                    }
                }, [e("i", {
                    staticClass: "fas fa-envelope"
                }), t._v(" arjadgohar14@gmail.com\n              ")])]), e("p", [e("i", {
                    staticClass: "fas fa-map-marker-alt"
                }), t._v(" Chauburji Park, Lahore, Pakistan\n            ")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"
                }, [e("h6", {
                    staticClass: "text-uppercase mb-4 font-weight-bold"
                }, [t._v("Services")]), e("p", [t._v("Website Development")]), e("p", [t._v("App Development")]), e("p", [t._v("Others")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "col-md-3 col-lg-2 col-xl-2 mx-auto mt-3"
                }, [e("h6", {
                    staticClass: "text-uppercase mb-4 font-weight-bold"
                }, [t._v("Follow us")]), e("a", {
                    staticClass: "btn btn-floating m-1",
                    attrs: {
                        href: "https://www.linkedin.com/in/arjad/",
                        role: "button"
                    }
                }, [e("i", {
                    staticClass: "fab fa-linkedin-in"
                })]), e("a", {
                    staticClass: "btn btn-floating m-1",
                    attrs: {
                        href: "https://github.com/arjad",
                        role: "button"
                    }
                }, [e("i", {
                    staticClass: "fab fa-github"
                })]), e("a", {
                    staticClass: "btn btn-floating m-1",
                    attrs: {
                        href: "https://medium.com/@arjadgohar14",
                        role: "button"
                    }
                }, [e("i", {
                    staticClass: "fa-solid fa-m"
                })]), e("a", {
                    staticClass: "btn btn-floating m-1",
                    attrs: {
                        href: "https://dev.to/arjad_gohar_f6d9b8938c997",
                        role: "button"
                    }
                }, [e("i", {
                    staticClass: "fa-brands fa-dev"
                })]), e("a", {
                    staticClass: "btn btn-floating m-1",
                    attrs: {
                        href: "https://dev.to/arjad_gohar_f6d9b8938c997",
                        role: "button"
                    }
                }, [e("i", {
                    staticClass: "fa-brands fa-discord"
                })]), e("a", {
                    staticClass: "btn btn-floating m-1",
                    attrs: {
                        href: "https://www.youtube.com/@ArjadsSimpleScripts",
                        role: "button"
                    }
                }, [e("i", {
                    staticClass: "fa-brands fa-youtube"
                })])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "text-center p-3"
                }, [t._v("\n      © 2025 Made with \n      "), e("a", {
                    attrs: {
                        href: "https://github.com/arjad/Portfolio"
                    }
                }, [t._v("Vue.js")])])
            }],
            st = {
                name: "FooterComponent",
                methods: {
                    scrollToSection: function(t) {
                        var e = document.getElementById(t);
                        e && e.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }
            },
            nt = st,
            rt = (a("0570"), Object(d["a"])(nt, at, it, !1, null, "fbf98f6e", null)),
            ot = rt.exports,
            lt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("Heading", {
                    attrs: {
                        title: "Write Me",
                        subtitle: "You can text me directly"
                    }
                }), e("div", {
                    staticClass: "container container-div",
                    attrs: {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000"
                    }
                }, [e("div", {
                    staticClass: "picture-container"
                }, [e("div", {
                    staticClass: "picture"
                }, [e("svg", {
                    attrs: {
                        width: "400px",
                        height: "300px",
                        viewBox: "-150 -99 1230 1022",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [e("desc", [t._v("Created with Sketch.")]), e("defs"), e("path", {
                    attrs: {
                        d: "M436.612844,783.873989 C383.646464,1018.56651 721.019595,913.998104 845.173614,771.175243 C969.327632,628.352383 1062.8876,382.230412 980.489795,310.603094 C947.305347,281.756293 855.841203,313.393833 782.453276,334.918921 C762.737736,340.701598 647.28515,389.857308 620.73246,284.637931 C613.357636,255.413983 684.801981,108.205582 678.469226,4.83555972 C674.811257,-54.8737311 640.6213,-101.236496 562.120181,-98.4819349 C432.84531,-93.9457513 336.174606,42.3294163 261.018224,135.816995 C211.526825,197.379713 160.232117,228.107983 154.506663,233.912672 C103.126466,286.003925 194.073335,-151.19202 -57.3286154,47.7276753 C-100.69372,82.0399523 -290.558853,254.241782 -187.455608,545.707939 C-168.397037,599.585276 -34.1223694,378.890577 -92.7241774,609.425338 C-151.325985,839.960099 -77.3777541,854.175414 -49.1572726,855.085459 C182.866272,862.567681 310.654632,621.150197 393.96853,604.731975 C484.706615,586.850709 437.18152,781.354203 436.612844,783.873989",
                        id: "Oval-3",
                        stroke: "none",
                        fill: "#ECF5FD",
                        "fill-rule": "evenodd"
                    }
                }), e("g", {
                    attrs: {
                        id: "Group-4",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        transform: "translate(309.607565, 246.015556)"
                    }
                }, [e("g", {
                    attrs: {
                        id: "Group",
                        transform: "translate(219.949939, 206.152341)"
                    }
                }, [e("rect", {
                    attrs: {
                        id: "Rectangle",
                        fill: "#C45C29",
                        x: "0",
                        y: "0",
                        width: "51.9438969",
                        height: "207.775588"
                    }
                }), e("polyline", {
                    attrs: {
                        id: "Path-2",
                        fill: "#9D442E",
                        points: "0.423450417 43.4042126 43.827663 0 0 5.36734073e-15 0 43.4042126"
                    }
                })]), e("g", {
                    attrs: {
                        id: "Group-2"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M209.358451,207.159511 L415.552485,207.210454 L415.801615,90.0805128 C415.801615,90.0805128 415.552485,0.352910154 330.165128,0.0604725468 L107.548569,0.352910154 C107.548569,0.352910154 28.0867597,9.32633809 26.2852539,92.0527975 L26.2852539,207.00888 C26.2852539,207.00888 -47.3581603,346.027515 53.0707655,361.443917 C153.499691,376.86032 195.838426,245.591888 207.274305,208.138509",
                        id: "Path",
                        fill: "#DD5149"
                    }
                }), e("path", {
                    attrs: {
                        d: "M208.188164,207.511499 L205.66206,82.4502236 C205.66206,82.4502236 205.679141,48.7904447 180.99674,24.9616992 C170.012526,14.3573803 151.7979,4.36510328 132.324212,1.32491429 C69.0915993,-8.54682046 40.9713602,39.9843818 40.9713602,39.9843818 C40.9713602,39.9843818 24.4633041,59.9760928 25.1832043,101.217271 L25.9031045,207.511499 L208.188164,207.511499 Z",
                        id: "Path-3",
                        fill: "#C0342B"
                    }
                }), e("path", {
                    attrs: {
                        d: "M272.705459,142.034093 L272.705459,95.0174105 L272.705459,72.1195338 C272.705459,67.7005456 276.28148,64.1182478 280.713973,64.1182478 L342.61279,64.1182478 C347.03577,64.1182478 350.621304,67.6961155 350.621304,72.1195338 L350.621304,95.0748844 C350.621304,99.4938727 347.045283,103.07617 342.61279,103.07617 L298.677407,103.07617 L298.677407,142.034093 L303.660984,142.034093 C308.080586,142.034093 311.663382,145.618113 311.663382,150.038457 L311.663382,160.001678 C311.663382,164.422366 308.072573,168.006042 303.660984,168.006042 L267.721882,168.006042 C263.30228,168.006042 259.719485,164.422022 259.719485,160.001678 L259.719485,150.038457 C259.719485,145.617769 263.310293,142.034093 267.721882,142.034093 L272.705459,142.034093 Z",
                        id: "Combined-Shape",
                        fill: "#EBBE4C"
                    }
                })]), e("g", {
                    attrs: {
                        id: "Group-3",
                        transform: "translate(75.480975, 73.046105)"
                    }
                }, [e("polygon", {
                    attrs: {
                        id: "Rectangle-5",
                        fill: "#D8D9D9",
                        points: "129.859742 0 134.289561 127.424872 -4.4298182 127.424872 1.15463195e-14 0"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-6",
                        fill: "#B9B9BC",
                        x: "25.9719485",
                        y: "22.4441536",
                        width: "64.9298712",
                        height: "34.7522379",
                        rx: "8"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-7",
                        fill: "#B9B9BC",
                        x: "25.9719485",
                        y: "69.5044757",
                        width: "64.9298712",
                        height: "11.5840793",
                        rx: "5.79203964"
                    }
                })]), e("path", {
                    attrs: {
                        d: "M147.715457,4.86974034 C147.715457,4.86974034 171.579726,10.2345093 189.234803,35.6507535 C195.86833,45.2003785 202.660924,57.2239502 205.477747,73.3753864 L211.33563,207.463746 L202.334855,207.874349 L197.938857,73.3753864 C197.938857,73.3753864 187.849736,38.6466143 179.525544,27.7498049 C170.408027,15.814492 147.715457,4.86974034 147.715457,4.86974034 Z",
                        id: "Path-5",
                        fill: "#4A4545",
                        opacity: "0.276002799"
                    }
                })]), e("g", {
                    attrs: {
                        id: "Group-5",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        transform: "translate(70.978138, 587.241235) rotate(-4.000000) translate(-70.978138, -587.241235) translate(-45.895630, 499.779829)"
                    }
                }, [e("polygon", {
                    attrs: {
                        id: "Path-4",
                        fill: "#C4C3C4",
                        points: "73.3792876 174.623857 96.101811 124.353228 233.404545 0.718245716 63.3066244 109.44151"
                    }
                }), e("polygon", {
                    attrs: {
                        id: "Path-6",
                        fill: "#ACACAE",
                        points: "113.150288 132.656947 93.3796106 125.022865 73.4033432 174.641444"
                    }
                }), e("path", {
                    attrs: {
                        d: "M233.963311,0.857657671 L157.220647,149.673724 L92.4998072,125.369429 L233.963311,0.857657671 Z M233.21569,1.03465208 L63.808804,109.852948 L0.457700449,87.8785403 L233.21569,1.03465208 Z",
                        id: "Combined-Shape",
                        fill: "#D8D8D8"
                    }
                })]), e("g", {
                    attrs: {
                        id: "Group-5-Copy",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        transform: "translate(-36.307363, 262.315812) rotate(65.000000) translate(36.307363, -262.315812) translate(-153.181132, 162.250703)"
                    }
                }, [e("polygon", {
                    attrs: {
                        id: "Path-4",
                        fill: "#C4C3C4",
                        points: "73.3792876 199.788179 96.101811 142.273258 233.404545 0.821749137 63.3066244 125.212673"
                    }
                }), e("polygon", {
                    attrs: {
                        id: "Path-6",
                        fill: "#ACACAE",
                        points: "113.150288 151.773591 93.3796106 143.039393 73.4033432 199.8083"
                    }
                }), e("path", {
                    attrs: {
                        d: "M240.857351,-0.553966448 L151.371701,168.65514 L85.6057673,146.023345 L240.857351,-0.553966448 Z M233.21569,1.18375152 L63.808804,125.683402 L0.457700449,100.542353 L233.21569,1.18375152 Z",
                        id: "Combined-Shape",
                        fill: "#D8D8D8"
                    }
                })]), e("g", {
                    attrs: {
                        id: "Group-6",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        transform: "translate(393.333857, 167.066937) rotate(-15.000000) translate(-393.333857, -167.066937) translate(325.157492, 126.442576)"
                    }
                }, [e("rect", {
                    attrs: {
                        id: "Rectangle-8",
                        fill: "#EBBE4C",
                        x: "0",
                        y: "0",
                        width: "135.839842",
                        height: "81.0119948",
                        rx: "8"
                    }
                }), e("polygon", {
                    attrs: {
                        id: "Triangle-3",
                        fill: "#E2B33B",
                        points: "8.9780459 0 126.187699 0 67.3765614 35.517421"
                    }
                })]), e("g", {
                    attrs: {
                        id: "quirks",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        transform: "translate(-159.510754, -38.864254)"
                    }
                }, [e("ellipse", {
                    attrs: {
                        id: "Oval",
                        stroke: "#EBBE4C",
                        "stroke-width": "8",
                        cx: "622.920951",
                        cy: "657.820757",
                        rx: "8.52204559",
                        ry: "8.52204559"
                    }
                }), e("ellipse", {
                    attrs: {
                        id: "Oval-Copy-3",
                        stroke: "#67EB4C",
                        "stroke-width": "8",
                        cx: "909.424008",
                        cy: "764.955045",
                        rx: "8.52204559",
                        ry: "8.52204559"
                    }
                }), e("ellipse", {
                    attrs: {
                        id: "Oval-Copy",
                        stroke: "#E358FF",
                        "stroke-width": "8",
                        cx: "65.3356829",
                        cy: "475.205495",
                        rx: "8.52204559",
                        ry: "8.52204559"
                    }
                }), e("ellipse", {
                    attrs: {
                        id: "Oval-Copy-2",
                        stroke: "#E357FF",
                        "stroke-width": "8",
                        cx: "333.171401",
                        cy: "193.572178",
                        rx: "8.52204559",
                        ry: "8.52204559"
                    }
                }), e("polygon", {
                    attrs: {
                        id: "Triangle-4",
                        stroke: "#EBBE4C",
                        "stroke-width": "8",
                        "stroke-linejoin": "round",
                        transform: "translate(223.196432, 841.653455) rotate(32.000000) translate(-223.196432, -841.653455) ",
                        points: "223.196432 831.913974 232.124289 851.392936 214.268575 851.392936"
                    }
                }), e("polygon", {
                    attrs: {
                        id: "Triangle-4-Copy",
                        stroke: "#62C5FC",
                        "stroke-width": "8",
                        "stroke-linejoin": "round",
                        transform: "translate(955.445574, 275.745990) rotate(51.000000) translate(-955.445574, -275.745990) ",
                        points: "955.445574 267.080647 963.569333 284.411333 947.321815 284.411333"
                    }
                }), e("path", {
                    attrs: {
                        d: "M21.305114,85.0175501 L21.305114,72.8507269 C21.305114,71.1647005 19.9424533,69.7996115 18.2615263,69.7996115 C16.5840195,69.7996115 15.2179386,71.1656424 15.2179386,72.8507269 L15.2179386,85.0175501 L3.0511154,85.0175501 C1.365089,85.0175501 0,86.3802107 0,88.0611378 C0,89.7386445 1.36603089,91.1047255 3.0511154,91.1047255 L15.2179386,91.1047255 L15.2179386,103.271549 C15.2179386,104.957575 16.5805992,106.322664 18.2615263,106.322664 C19.939033,106.322664 21.305114,104.956633 21.305114,103.271549 L21.305114,91.1047255 L33.4719371,91.1047255 C35.1579635,91.1047255 36.5230525,89.7420648 36.5230525,88.0611378 C36.5230525,86.383631 35.1570216,85.0175501 33.4719371,85.0175501 L21.305114,85.0175501 Z",
                        id: "Combined-Shape",
                        fill: "#62C5FC"
                    }
                }), e("path", {
                    attrs: {
                        d: "M662.487592,15.2179386 L662.487592,3.0511154 C662.487592,1.365089 661.124931,0 659.444004,0 C657.766497,0 656.400416,1.36603089 656.400416,3.0511154 L656.400416,15.2179386 L644.233593,15.2179386 C642.547567,15.2179386 641.182478,16.5805992 641.182478,18.2615263 C641.182478,19.939033 642.548509,21.305114 644.233593,21.305114 L656.400416,21.305114 L656.400416,33.4719371 C656.400416,35.1579635 657.763077,36.5230525 659.444004,36.5230525 C661.121511,36.5230525 662.487592,35.1570216 662.487592,33.4719371 L662.487592,21.305114 L674.654415,21.305114 C676.340441,21.305114 677.70553,19.9424533 677.70553,18.2615263 C677.70553,16.5840195 676.339499,15.2179386 674.654415,15.2179386 L662.487592,15.2179386 Z",
                        id: "Combined-Shape-Copy",
                        fill: "#67EB4C"
                    }
                })]), e("g", {
                    attrs: {
                        id: "messages",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        transform: "translate(-62.115947, -67.271073)"
                    }
                }, [e("g", {
                    attrs: {
                        id: "Group-7-Copy",
                        transform: "translate(96.509547, 54.875541) rotate(19.000000) translate(-96.509547, -54.875541) translate(53.899319, 11.859502)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M47.8225032,84.9233289 C46.0315469,85.1558727 44.2055358,85.2757866 42.3517053,85.2757866 C18.9615043,85.2757866 2.30944941e-12,66.1861515 2.30944941e-12,42.6378933 C2.30944941e-12,19.0896351 18.9615043,1.41845856e-12 42.3517053,1.41845856e-12 C65.7419063,1.41845856e-12 84.7034106,19.0896351 84.7034106,42.6378933 C84.7034106,43.4859105 84.6788203,44.3281455 84.6303183,45.1639151 L84.7552994,85.736566 L47.8225032,84.9233289 Z",
                        id: "Combined-Shape",
                        fill: "#EBBE4C"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10",
                        fill: "#FFFFFF",
                        x: "21.9601435",
                        y: "22.1085373",
                        width: "32.9402152",
                        height: "6.31672493",
                        rx: "3.15836247"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10-Copy",
                        fill: "#FFFFFF",
                        x: "21.9601435",
                        y: "31.5836247",
                        width: "32.9402152",
                        height: "6.31672493",
                        rx: "3.15836247"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10-Copy-2",
                        fill: "#FFFFFF",
                        x: "21.9601435",
                        y: "41.0587121",
                        width: "17.2543985",
                        height: "6.31672493",
                        rx: "3.15836247"
                    }
                })]), e("g", {
                    attrs: {
                        id: "Group-7",
                        transform: "translate(0.000000, 33.919094)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M59.2911524,107.479029 C57.5242989,107.653623 55.7323765,107.743005 53.9195591,107.743005 C24.1406089,107.743005 0,83.6239118 0,53.8715025 C0,24.1190932 24.1406089,0 53.9195591,0 C83.6985094,0 107.839118,24.1190932 107.839118,53.8715025 C107.839118,54.7826904 107.816476,55.6885947 107.771723,56.5886843 L107.750633,108.38039 L59.2911524,107.479029 Z",
                        id: "Combined-Shape",
                        fill: "#62C5FC"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10",
                        fill: "#FFFFFF",
                        x: "27.9582899",
                        y: "27.9333717",
                        width: "41.9374349",
                        height: "7.98096333",
                        rx: "3.99048167"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10-Copy",
                        fill: "#FFFFFF",
                        x: "27.9582899",
                        y: "39.9048167",
                        width: "41.9374349",
                        height: "7.98096333",
                        rx: "3.99048167"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10-Copy-2",
                        fill: "#FFFFFF",
                        x: "27.9582899",
                        y: "51.8762616",
                        width: "21.9672278",
                        height: "7.98096333",
                        rx: "3.99048167"
                    }
                })])]), e("g", {
                    attrs: {
                        id: "messages-copy",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        transform: "translate(725.970364, 555.244067) scale(-1, 1) translate(-725.970364, -555.244067) translate(650.489389, 483.821209)"
                    }
                }, [e("g", {
                    attrs: {
                        id: "Group-7-Copy",
                        transform: "translate(96.509547, 54.875541) rotate(19.000000) translate(-96.509547, -54.875541) translate(53.899319, 11.859502)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M47.8225032,84.9233289 C46.0315469,85.1558727 44.2055358,85.2757866 42.3517053,85.2757866 C18.9615043,85.2757866 2.30944941e-12,66.1861515 2.30944941e-12,42.6378933 C2.30944941e-12,19.0896351 18.9615043,1.41845856e-12 42.3517053,1.41845856e-12 C65.7419063,1.41845856e-12 84.7034106,19.0896351 84.7034106,42.6378933 C84.7034106,43.4859105 84.6788203,44.3281455 84.6303183,45.1639151 L84.7552994,85.736566 L47.8225032,84.9233289 Z",
                        id: "Combined-Shape",
                        fill: "#EBBE4C"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10",
                        fill: "#FFFFFF",
                        x: "21.9601435",
                        y: "22.1085373",
                        width: "32.9402152",
                        height: "6.31672493",
                        rx: "3.15836247"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10-Copy",
                        fill: "#FFFFFF",
                        x: "21.9601435",
                        y: "31.5836247",
                        width: "32.9402152",
                        height: "6.31672493",
                        rx: "3.15836247"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10-Copy-2",
                        fill: "#FFFFFF",
                        x: "21.9601435",
                        y: "41.0587121",
                        width: "17.2543985",
                        height: "6.31672493",
                        rx: "3.15836247"
                    }
                })]), e("g", {
                    attrs: {
                        id: "Group-7",
                        transform: "translate(0.000000, 33.919094)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M59.2911524,107.479029 C57.5242989,107.653623 55.7323765,107.743005 53.9195591,107.743005 C24.1406089,107.743005 0,83.6239118 0,53.8715025 C0,24.1190932 24.1406089,0 53.9195591,0 C83.6985094,0 107.839118,24.1190932 107.839118,53.8715025 C107.839118,54.7826904 107.816476,55.6885947 107.771723,56.5886843 L107.750633,108.38039 L59.2911524,107.479029 Z",
                        id: "Combined-Shape",
                        fill: "#62C5FC"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10",
                        fill: "#FFFFFF",
                        x: "27.9582899",
                        y: "27.9333717",
                        width: "41.9374349",
                        height: "7.98096333",
                        rx: "3.99048167"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10-Copy",
                        fill: "#FFFFFF",
                        x: "27.9582899",
                        y: "39.9048167",
                        width: "41.9374349",
                        height: "7.98096333",
                        rx: "3.99048167"
                    }
                }), e("rect", {
                    attrs: {
                        id: "Rectangle-10-Copy-2",
                        fill: "#FFFFFF",
                        x: "27.9582899",
                        y: "51.8762616",
                        width: "21.9672278",
                        height: "7.98096333",
                        rx: "3.99048167"
                    }
                })])])])])]), t._m(0)])], 1)
            },
            ct = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "contact-form-container"
                }, [e("form", {
                    staticClass: "contact-form",
                    attrs: {
                        action: "https://formspree.io/f/mjkggydl",
                        method: "POST"
                    }
                }, [e("span", {
                    staticClass: "form-header"
                }, [t._v("Email Me")]), e("label", [e("input", {
                    staticClass: "email-input",
                    attrs: {
                        type: "email",
                        name: "email",
                        placeholder: "Email"
                    }
                })]), e("label", [e("textarea", {
                    staticClass: "message",
                    attrs: {
                        name: "message",
                        cols: "30",
                        rows: "5",
                        placeholder: "Message..."
                    }
                })]), e("button", {
                    staticClass: "submit",
                    attrs: {
                        type: "submit"
                    }
                }, [t._v("Submit")])])])
            }],
            dt = {
                components: {
                    Heading: F
                }
            },
            ut = dt,
            pt = (a("ecf9"), Object(d["a"])(ut, lt, ct, !1, null, "2fc9d1aa", null)),
            ft = pt.exports,
            ht = function() {
                var t = this,
                    e = t._self._c;
                return e("div")
            },
            mt = [],
            gt = {
                name: "Chatbot",
                mounted: function() {
                    var t = document.createElement("script");
                    t.setAttribute("async", ""), t.setAttribute("data-id", "6549438642"), t.setAttribute("id", "chatling-embed-script"), t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://chatling.ai/js/embed.js"), document.head.appendChild(t)
                },
                beforeUnmount: function() {
                    var t = document.getElementById("chatling-embed-script");
                    t && t.remove(), window.chtlConfig && delete window.chtlConfig
                }
            },
            vt = gt,
            bt = Object(d["a"])(vt, ht, mt, !1, null, null, null),
            Ct = bt.exports,
            yt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("canvas", {
                    ref: "canvas"
                })])
            },
            xt = [],
            _t = (a("6c7b"), {
                data: function() {
                    return {
                        canvas: null,
                        context: null,
                        circle: [],
                        mouse: {
                            x: 0,
                            y: 0
                        },
                        radius: 5,
                        color: ["#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "#DF5A49"]
                    }
                },
                mounted: function() {
                    this.initCanvas(), this.initCircles(), this.animate()
                },
                methods: {
                    initCanvas: function() {
                        this.canvas = this.$refs.canvas, this.context = this.canvas.getContext("2d"), this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, window.addEventListener("mousemove", this.handleMouseMove)
                    },
                    handleMouseMove: function(t) {
                        this.mouse.x = t.clientX, this.mouse.y = t.clientY
                    },
                    initCircles: function() {
                        for (var t = 0; t < 10; t++) {
                            var e = Math.random() * (this.canvas.width - 1 * this.radius) + this.radius,
                                a = Math.random() * (this.canvas.height - 1 * this.radius) + this.radius;
                            this.circle.push({
                                x: e,
                                y: a,
                                radius: this.radius,
                                color: this.color[Math.floor(Math.random() * this.color.length)],
                                dx: 2 * (Math.random() - .9),
                                dy: 2 * (Math.random() - .9)
                            })
                        }
                    },
                    animate: function() {
                        this.context.fillStyle = "rgba(255, 255, 255, 0.5)", this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
                        for (var t = 0; t < this.circle.length; t++) this.updateCircle(this.circle[t]), this.renderCircle(this.circle[t]);
                        requestAnimationFrame(this.animate)
                    },
                    updateCircle: function(t) {
                        t.x += t.dx, t.y += t.dy, (t.x + t.radius > this.canvas.width || t.x - t.radius < 0) && (t.dx = -t.dx), (t.y + t.radius > this.canvas.height || t.y - t.radius < 0) && (t.dy = -t.dy), t.x + 2 * t.radius > this.mouse.x && 0 !== this.mouse.x && (t.dx -= .5), t.x < this.mouse.x - 2 * t.radius && 0 !== this.mouse.x && (t.dx += .75), t.dx > 2 && (t.dx -= .5), t.y + 2 * t.radius > this.mouse.y + 1 * t.radius && 0 !== this.mouse.y && (t.dy -= .5), t.y < this.mouse.y - 2 * t.radius && 0 !== this.mouse.y && (t.dy += .75), t.dy > 2 && (t.dy -= .5)
                    },
                    renderCircle: function(t) {
                        this.context.beginPath(), this.context.arc(t.x, t.y, t.radius, 0, 2 * Math.PI, !1), this.context.fillStyle = t.color, this.context.strokeStyle = t.color, this.context.fill(), this.context.stroke()
                    }
                },
                beforeDestroy: function() {
                    window.removeEventListener("mousemove", this.handleMouseMove)
                }
            }),
            kt = _t,
            wt = (a("ba1b"), Object(d["a"])(kt, yt, xt, !1, null, "3c79a680", null)),
            St = wt.exports,
            jt = a("f5af"),
            Ft = a.n(jt),
            Mt = {
                components: {
                    Nav: p,
                    Summary: C,
                    About: O,
                    Skills: z,
                    Project: N,
                    Journey: et,
                    Contact: ot,
                    WriteMe: ft,
                    ChatBot: Ct,
                    CanvasAnimation: St
                },
                data: function() {
                    return {
                        isScrollDown: !1,
                        darkMode: "true" === sessionStorage.getItem("darkMode")
                    }
                },
                mounted: function() {
                    Zoomtastic.mount({
                        size: "95%",
                        easing: "ease",
                        duration: 300,
                        background: "rgba(0, 0, 0, 0.9)",
                        filter: "drop-shadow(0 2px 16px rgba(0, 0, 0, 0.3))",
                        animation: "slide"
                    }), Zoomtastic.listen("[zoomtastic]", "src"), Ft.a.init()
                }
            },
            Lt = Mt,
            At = (a("282e"), Object(d["a"])(Lt, s, n, !1, null, null, null)),
            Ot = At.exports;
        a("e829"), a("15f5");
        i["a"].config.productionTip = !1, new i["a"]({
            render: function(t) {
                return t(Ot)
            }
        }).$mount("#app")
    },
    "5df2": function(t, e, a) {},
    "6dde": function(t, e, a) {},
    "707a": function(t, e, a) {},
    "78de": function(t, e, a) {
        t.exports = a.p + "img/meee.5a3e5245.jpeg"
    },
    "9d34": function(t, e, a) {
        t.exports = a.p + "img/me2.1367363f.jpg"
    },
    "9f2c": function(t, e, a) {
        t.exports = a.p + "img/me.e8894555.png"
    },
    a14b: function(t, e, a) {},
    a185: function(t, e, a) {},
    a480: function(t, e, a) {
        t.exports = a.p + "img/desk.7be518d8.jpg"
    },
    ba1b: function(t, e, a) {
        "use strict";
        a("a14b")
    },
    bfba: function(t, e, a) {
        t.exports = a.p + "img/me5.415b16c7.jpeg"
    },
    c429: function(t, e, a) {},
    deda: function(t, e, a) {
        "use strict";
        a("464d")
    },
    e554: function(t, e, a) {
        "use strict";
        a("707a")
    },
    ecf9: function(t, e, a) {
        "use strict";
        a("0c25")
    },
    f855: function(t, e, a) {},
    fa8f: function(t, e, a) {
        "use strict";
        a("f855")
    },
    fb3d: function(t, e, a) {
        "use strict";
        a("6dde")
    }
});
//# sourceMappingURL=app.72bda338.js.map