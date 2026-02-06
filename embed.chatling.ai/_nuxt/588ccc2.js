(window.webpackJsonp = window.webpackJsonp || []).push([
    [0, 16, 17, 23], {
        375: function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return l
            })), i.d(e, "e", (function() {
                return n
            })), i.d(e, "d", (function() {
                return s
            })), i.d(e, "c", (function() {
                return a
            })), i.d(e, "a", (function() {
                return c
            })), i.d(e, "f", (function() {
                return d
            }));
            i(70), i(71), i(376);
            var l = {
                    NOT_STARTED: 1,
                    STARTED: 2,
                    COMPLETED: 3
                },
                n = {
                    BOT: 1,
                    USER: 2,
                    SYSTEM: 3,
                    AGENT: 4
                },
                o = {
                    TEXT: "bot_text",
                    IMAGE: "bot_image",
                    VIDEO: "bot_video",
                    AUDIO: "bot_audio",
                    CAROUSEL: "bot_carousel",
                    URL_BUTTON: "bot_url_button"
                },
                r = {
                    BUTTONS: "input_buttons",
                    TEXT: "input_text",
                    NUMBER: "input_number",
                    EMAIL: "input_email",
                    URL: "input_url",
                    DATETIME: "input_datetime",
                    PHONE: "input_phone",
                    FORM: "input_form"
                },
                s = {
                    OUTPUTS: o,
                    INPUTS: r,
                    AI: {
                        RESPONSE: "ai_generate_response"
                    },
                    LOG: {
                        CONDITION: "logic_condition",
                        CONDITION_LANGUAGE: "logic_condition_language",
                        END: "logic_end"
                    },
                    ACTION: {
                        HTTP: "action_http",
                        SEND_EMAIL: "action_send_email",
                        SET_VARIABLE: "action_set_variable",
                        CREATE_CONTACT: "action_create_contact",
                        GET_CONTACT: "action_get_contact",
                        UPDATE_CONTACT: "action_update_contact",
                        DELETE_CONTACT: "action_delete_contact"
                    },
                    TRIGGER: {
                        RETURNING_USER: "trigger_returning_user",
                        SPECIFIC_WEBPAGE_OPENED: "trigger_specific_webpage_opened",
                        INTENT: "trigger_intent"
                    },
                    SYSTEM: {
                        DEBUG_MESSAGE: "system_debug_message",
                        CSAT_SURVEY_COMPLETED: "system_csat_survey_completed"
                    },
                    GOOGLE_SHEETS: {
                        ADD_ROW: "google_sheets_add_row",
                        UPDATE_ROW: "google_sheets_update_row",
                        CLEAR_ROW: "google_sheets_clear_row",
                        DELETE_ROW: "google_sheets_delete_row"
                    },
                    CALCOM: {
                        BOOK: "calcom_book"
                    },
                    ZENDESK: {
                        CREATE_TICKET: "zendesk_create_ticket"
                    },
                    ZOHO: {
                        CREATE_TICKET: "zoho_create_ticket",
                        UPDATE_TICKET: "zoho_update_ticket"
                    },
                    HUBSPOT: {
                        CREATE_TICKET: "hubspot_create_ticket",
                        CREATE_CONTACT: "hubspot_create_contact",
                        GET_CONTACT: "hubspot_get_contact",
                        UPDATE_CONTACT: "hubspot_update_contact",
                        CREATE_COMPANY: "hubspot_create_company",
                        UPDATE_COMPANY: "hubspot_update_company"
                    }
                },
                a = {
                    INPUT: "input",
                    OUTPUT: "output",
                    AI: "ai",
                    ERROR: "error",
                    LOGIC: "logic",
                    SYSTEM: "system",
                    ACTION: "action",
                    ZENDESK: "zendesk",
                    ZOHO: "zoho",
                    HUBSPOT: "hubspot",
                    CALCOM: "calcom",
                    TRIGGER: "trigger",
                    GOOGLE_SHEETS: "google_sheets"
                },
                u = {
                    INPUTS: {
                        TEXT: "input_text",
                        NUMBER: "input_number",
                        EMAIL: "input_email",
                        URL: "input_url",
                        BUTTONS: "input_buttons",
                        LOCATION: "input_location"
                    },
                    OUTPUTS: {
                        TEXT: "bot_text",
                        IMAGE: "bot_image",
                        AUDIO: "bot_audio",
                        CONTACT: "whatsapp_output_contact",
                        URL_BUTTON: "bot_url_button"
                    },
                    AI: {
                        RESPONSE: "ai_generate_response"
                    },
                    LOG: {
                        CONDITION: "logic_condition",
                        END: "logic_end"
                    },
                    ACTION: {
                        HTTP: "action_http",
                        SEND_EMAIL: "action_send_email",
                        SET_VARIABLE: "action_set_variable",
                        CREATE_CONTACT: "action_create_contact",
                        GET_CONTACT: "action_get_contact",
                        UPDATE_CONTACT: "action_update_contact",
                        DELETE_CONTACT: "action_delete_contact"
                    },
                    TRIGGER: {
                        INTENT: "trigger_intent"
                    },
                    GOOGLE_SHEETS: {
                        ADD_ROW: "google_sheets_add_row",
                        UPDATE_ROW: "google_sheets_update_row",
                        CLEAR_ROW: "google_sheets_clear_row",
                        DELETE_ROW: "google_sheets_delete_row"
                    },
                    ZENDESK: {
                        CREATE_TICKET: "zendesk_create_ticket"
                    },
                    ZOHO: {
                        CREATE_TICKET: "zoho_create_ticket",
                        UPDATE_TICKET: "zoho_update_ticket"
                    },
                    HUBSPOT: {
                        CREATE_TICKET: "hubspot_create_ticket",
                        CREATE_CONTACT: "hubspot_create_contact",
                        GET_CONTACT: "hubspot_get_contact",
                        UPDATE_CONTACT: "hubspot_update_contact",
                        CREATE_COMPANY: "hubspot_create_company",
                        UPDATE_COMPANY: "hubspot_update_company"
                    },
                    SYSTEM: {
                        DEBUG_MESSAGE: "system_debug_message"
                    }
                },
                c = {
                    KB: "knowledge_base",
                    MODEL: "ai_model"
                },
                d = function(t) {
                    return 2 == (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) ? t == u.SYSTEM.DEBUG_MESSAGE : t == s.SYSTEM.DEBUG_MESSAGE
                }
        },
        433: function(t, e, i) {
            "use strict";
            i.r(e);
            i(51), i(45);
            var l = i(12),
                n = (i(231), i(16), i(38), i(29), i(230), i(26), i(70), i(54), i(71), i(375)),
                o = i(452),
                r = i(453),
                s = i(430),
                a = (i(427), {
                    props: {
                        activeInputMessageId: {
                            default: null
                        },
                        messagesToShowAiAvatar: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        messagesToShowAgentAvatar: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        translation: {
                            type: Object,
                            required: !0
                        },
                        messageType: {
                            type: String,
                            required: !0
                        },
                        message: {
                            required: !0
                        },
                        languageDirection: {
                            type: String
                        },
                        maxSources: {
                            default: 0
                        },
                        botIconUrl: {
                            type: String
                        },
                        primaryColor: {
                            type: String,
                            required: !0
                        },
                        foregroundColor: {
                            type: String,
                            required: !0
                        },
                        assistantTextColor: {
                            type: String,
                            required: !0
                        },
                        assistantBGColor: {
                            type: String,
                            required: !0
                        },
                        appearance: {
                            type: Object,
                            required: !0
                        },
                        settings: {
                            type: Object
                        },
                        isMobileViewport: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            calcomInlineBookElementId: "cal-booking-inline",
                            calcomScriptId: "calcom-chtl-script",
                            aiKbSourcesVisible: !1,
                            inputFormFieldValues: {},
                            inputFormFieldErrors: {},
                            currentCarouselItemIndex: 0,
                            carouselItemWidth: 250,
                            error: {
                                inputFormSubmission: null
                            }
                        }
                    },
                    mounted: function() {
                        if (this.isInputFormBlock) {
                            if (!this.inputFormDisabled) try {
                                try {
                                    var t = this.$refs.chtl_input_form;
                                    if (null != t && t.length > 0)
                                        for (var e = 0; e < t.length; e++) {
                                            var i = t[e];
                                            if ("checkbox" != i.type) {
                                                i.focus();
                                                break
                                            }
                                        }
                                } catch (t) {}
                            } catch (t) {}
                            this.setupInputForm()
                        } else this.isCalBookingBlock && (this.isBlockSubmitted || this.setupCalEmbed())
                    },
                    components: {
                        VideoMessage: o.default,
                        CarouselMessage: r.default,
                        DatePicker: s.a
                    },
                    methods: {
                        inputFormDropdownValueChanged: function(t, e) {
                            var i;
                            if (this.error.inputFormSubmission = null, null != e) {
                                var l = e.target;
                                if (null != l) {
                                    var n = l.value;
                                    if (null != n) {
                                        var o = this.inputFormFields.find((function(e) {
                                            return e.id == t
                                        }));
                                        if (null != o) {
                                            var r = null === (i = o.properties.choices.find((function(t) {
                                                return t.id == n
                                            }))) || void 0 === i ? void 0 : i.label;
                                            this.inputFormFieldValues[t] = {
                                                id: n,
                                                value: r
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        getHTMLFromRichText: function(t) {
                            if (null == t) return null;
                            if (0 == t.length) return null;
                            try {
                                return this.$convertRichTextToHTML(t)
                            } catch (t) {
                                return null
                            }
                        },
                        cleanupCalEmbed: function() {
                            var t = document.getElementById(this.calcomScriptId);
                            t && t.remove(), window.Cal && (window.Cal.loaded = !1, window.Cal.q = [], window.Cal.ns = {})
                        },
                        emitBookingEvent: function(t) {
                            this.$emit("inputSubmittedFromMessage", {
                                message_id: this.message.id,
                                message: this.message,
                                booking: t
                            })
                        },
                        setupCalEmbed: function() {
                            var t, e, i, l = this,
                                n = {
                                    successful: !1,
                                    error: null,
                                    id: null,
                                    start_date: null,
                                    end_date: null,
                                    user: {
                                        name: null,
                                        email: null
                                    }
                                },
                                o = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == o) return n.error = "Error setting up booking (CODE: 2446)", n.successful = !1, void this.emitBookingEvent(n);
                            var r = null == o ? void 0 : o.data;
                            if (null == r) return n.error = "Error setting up booking (CODE: 2447)", n.successful = !1, void this.emitBookingEvent(n);
                            var s = this.$generateUUID(),
                                a = null == r ? void 0 : r.origin;
                            null == a && (a = "https://app.cal.com");
                            var u = null == r ? void 0 : r.permalink,
                                c = null == r ? void 0 : r.hide_event_details,
                                d = null !== (e = null == r ? void 0 : r.layout) && void 0 !== e ? e : "month",
                                h = null !== (i = null == r ? void 0 : r.theme) && void 0 !== i ? i : "auto",
                                p = null == r ? void 0 : r.prefill,
                                m = null,
                                v = null,
                                g = null,
                                f = null;
                            if (null == u) return n.error = "Error setting up booking (CODE: 2448)", n.successful = !1, void this.emitBookingEvent(n);
                            try {
                                if (!document.getElementById(this.calcomScriptId)) {
                                    var b = document.createElement("script");
                                    b.id = this.calcomScriptId, b.type = "text/javascript", b.innerHTML = '\n                            (function (C, A, L) {\n                            let p = function (a, ar) {\n                                a.q.push(ar);\n                            };\n                            let d = C.document;\n                            C.Cal = C.Cal || function () {\n                                let cal = C.Cal;\n                                let ar = arguments;\n                                if (!cal.loaded) {\n                                cal.ns = {};\n                                cal.q = cal.q || [];\n                                d.head.appendChild(d.createElement("script")).src = A;\n                                cal.loaded = true;\n                                }\n                                if (ar[0] === L) {\n                                const api = function () {\n                                    p(api, arguments);\n                                };\n                                const namespace = ar[1];\n                                api.q = api.q || [];\n                                if (typeof namespace === "string") {\n                                    cal.ns[namespace] = cal.ns[namespace] || api;\n                                    p(cal.ns[namespace], ar);\n                                    p(cal, ["initNamespace", namespace]);\n                                } else p(cal, ar);\n                                return;\n                                }\n                                p(cal, ar);\n                            };\n                            })(window, "https://app.cal.com/embed/embed.js", "init");\n                        ', document.head.appendChild(b)
                                }
                                var _ = {
                                    styles: {
                                        branding: {
                                            brandColor: "#000000"
                                        }
                                    },
                                    hideEventTypeDetails: c,
                                    layout: d,
                                    theme: h
                                };
                                "auto" != h && (_.theme = h), null != p && (m = null == p ? void 0 : p.name, v = null == p ? void 0 : p.email, g = null == p ? void 0 : p.phone, f = null == p ? void 0 : p.notes);
                                var T = {
                                    elementOrSelector: "#" + this.calcomInlineBookElementId,
                                    calLink: u,
                                    config: {}
                                };
                                null != v && v.length > 0 && (T.config.email = v), null != m && m.length > 0 && (T.config.name = m), null != g && g.length > 0 && (T.config.phone = g), null != f && f.length > 0 && (T.config.notes = f), Cal("init", s, {
                                    origin: a
                                }), Cal.ns[s]("inline", T), Cal.ns[s]("ui", _), Cal.ns[s]("on", {
                                    action: "bookingSuccessful",
                                    callback: function(t) {
                                        var e, i = t.detail,
                                            o = i.data,
                                            r = (i.type, i.namespace, null == o ? void 0 : o.date),
                                            s = null,
                                            a = null,
                                            u = null,
                                            c = null;
                                        null != (null == o ? void 0 : o.booking) && (s = o.booking.id, null != r && 0 != r.length || (r = o.booking.startTime), a = o.booking.endTime, null != (null == o || null === (e = o.booking) || void 0 === e ? void 0 : e.responses) && (c = o.booking.responses.email, u = o.booking.responses.name));
                                        n.successful = !0, n.error = null, n.id = s, n.start_date = r, n.end_date = a, n.user.name = u, n.user.email = c, l.emitBookingEvent(n)
                                    }
                                }), Cal.ns[s]("on", {
                                    action: "linkFailed",
                                    callback: function(t) {
                                        var e = t.detail,
                                            i = e.data,
                                            o = (e.type, e.namespace, null),
                                            r = null;
                                        try {
                                            o = null == i ? void 0 : i.code, r = null == i ? void 0 : i.msg
                                        } catch (t) {}
                                        n.error = "Error setting up booking. (Code: ".concat(o, ", Message: ").concat(r, ")"), n.successful = !1, l.emitBookingEvent(n)
                                    }
                                })
                            } catch (t) {
                                return n.error = "Error setting up booking (CODE: 2449)", n.successful = !1, void this.emitBookingEvent(n)
                            }
                        },
                        shouldShowFormField: function(t) {
                            if ("multiple_choice" == (null == t ? void 0 : t.type)) {
                                var e, i;
                                if (null == (null == t || null === (e = t.properties) || void 0 === e ? void 0 : e.choices) || 0 == (null == t || null === (i = t.properties) || void 0 === i ? void 0 : i.choices.length)) return !1;
                                var l = !1;
                                for (var n in null == t || null === (o = t.properties) || void 0 === o ? void 0 : o.choices) {
                                    var o, r, s, a, u;
                                    if (null != (null == t || null === (r = t.properties) || void 0 === r || null === (s = r.choices[n]) || void 0 === s ? void 0 : s.label) && (null == t || null === (a = t.properties) || void 0 === a || null === (u = a.choices[n]) || void 0 === u ? void 0 : u.label.length) > 0) {
                                        l = !0;
                                        break
                                    }
                                }
                                if (!l) return !1
                            }
                            return !0
                        },
                        dateTimeFieldValueChanged: function(t, e) {
                            var i = null == e ? void 0 : e.id;
                            null != i && (i in this.inputFormFieldErrors && (this.inputFormFieldErrors[i] = null), this.inputFormFieldValues[i] = null, null != t && (this.inputFormFieldValues[i] = t))
                        },
                        multipleChoiceItemClicked: function(t, e) {
                            if (!this.inputFormDisabled) {
                                this.error.inputFormSubmission = null;
                                var i = null == e ? void 0 : e.id;
                                if (null != i && (i in this.inputFormFieldErrors && (this.inputFormFieldErrors[i] = null), null != t)) {
                                    var l = null;
                                    if (t in this.inputFormFieldValues[i] && null != this.inputFormFieldValues[i][t]) l = null;
                                    else {
                                        var n, o = null == e || null === (n = e.properties) || void 0 === n ? void 0 : n.choices;
                                        if (null == o || 0 == o.length) return;
                                        var r = o.find((function(e) {
                                            return e.id == t
                                        }));
                                        if (null == r) return;
                                        if (null == (l = null == r ? void 0 : r.label)) return
                                    }
                                    i in this.inputFormFieldValues || this.$set(this.inputFormFieldValues, i, {}), this.$set(this.inputFormFieldValues[i], t, l)
                                }
                            }
                        },
                        getDateTimeFormatString: function(t) {
                            var e = "YYYY-MM-DD HH:mm";
                            return null == t || ("date" == t ? e = "YYYY-MM-DD" : "time" == t && (e = "HH:mm")), e
                        },
                        copyMessageClicked: function() {
                            if (this.canCopyMessage) try {
                                var t = this.$refs.text_el_to_copy;
                                if (null != t) {
                                    var e = document.createRange();
                                    e.selectNode(t), window.getSelection().removeAllRanges(), window.getSelection().addRange(e), document.execCommand("copy"), window.getSelection().removeAllRanges(), this.$emit("showNotification", "success", "Copied text")
                                }
                            } catch (t) {
                                log.error("copy error:", t)
                            }
                        },
                        setupInputForm: function() {
                            var t, e = this;
                            this.inputFormFieldValues = {};
                            var i = this.isInputFormSubmitted;
                            null != this.blockData && null != (null === (t = this.blockData) || void 0 === t ? void 0 : t.fields) && 0 != this.blockData.fields.length && this.blockData.fields.forEach((function(t) {
                                if (null != t && 0 != e.shouldShowFormField(t)) {
                                    var l = null;
                                    i && (l = null == t ? void 0 : t.value), null == l && ("multiple_choice" == (null == t ? void 0 : t.type) ? l = {} : "dropdown" == (null == t ? void 0 : t.type) && (l = {
                                        id: "none",
                                        value: null
                                    })), e.$set(e.inputFormFieldValues, t.id, l), e.$set(e.inputFormFieldErrors, t.id, null)
                                }
                            }))
                        },
                        onInputFormField: function(t) {
                            this.error.inputFormSubmission = null, t in this.inputFormFieldErrors && (this.inputFormFieldErrors[t] = null)
                        },
                        clearFieldErrors: function() {
                            for (var t in this.inputFormFieldErrors) this.inputFormFieldErrors[t] = null;
                            this.error.inputFormSubmission = null
                        },
                        submitInputForm: function() {
                            var t, e;
                            if (!this.inputFormDisabled) {
                                this.clearFieldErrors();
                                for (var i = !0, l = null === (t = this.translation) || void 0 === t || null === (e = t.form) || void 0 === e ? void 0 : e.incomplete_error, n = 0; n < this.inputFormFields.length; n++) {
                                    var o = this.inputFormFields[n];
                                    if (null != o) {
                                        var r = null == o ? void 0 : o.required,
                                            s = null == o ? void 0 : o.type,
                                            a = null == o ? void 0 : o.id;
                                        if (0 != this.shouldShowFormField(o)) {
                                            var u = null;
                                            if (!a in this.inputFormFieldValues) {
                                                this.error.inputFormSubmission = l, i = !1;
                                                break
                                            }
                                            if (u = this.inputFormFieldValues[a], 1 == r) {
                                                if (null == u || 0 == u.length) {
                                                    this.error.inputFormSubmission = l, i = !1;
                                                    break
                                                }
                                                if ("multiple_choice" == s) {
                                                    var c = !1;
                                                    for (var d in u) null != u[d] && null != u[d] && (c = !0);
                                                    if (!c) {
                                                        this.error.inputFormSubmission = l, i = !1;
                                                        break
                                                    }
                                                } else if ("checkbox" == s) {
                                                    if (null == u) {
                                                        this.error.inputFormSubmission = l, i = !1;
                                                        break
                                                    }
                                                } else if ("dropdown" == s) {
                                                    var h, p, m;
                                                    if ("none" === (null === (h = u) || void 0 === h ? void 0 : h.id) || null == (null === (p = u) || void 0 === p ? void 0 : p.id) || null == (null === (m = u) || void 0 === m ? void 0 : m.value)) {
                                                        this.error.inputFormSubmission = l, i = !1;
                                                        break
                                                    }
                                                } else if ("multiple_choice" != s && 0 == (u = u.trim()).length) {
                                                    this.error.inputFormSubmission = l, i = !1;
                                                    break
                                                }
                                            }
                                            var v = null;
                                            if ("url" == s ? v = 2048 : "email" == s ? v = 320 : "text" == s && (v = 3e3), null != v && v > 0 && null != u && u.length > v) this.inputFormFieldErrors[a] = "Must not exceed ".concat(v, " characters"), i = !1;
                                            else if (null != u && null != s) {
                                                if ("email" == s && !this.$isValidEmail(u)) {
                                                    this.inputFormFieldErrors[a] = "Invalid email address", i = !1;
                                                    continue
                                                }
                                                if ("number" == s && !this.$isValidNumber(u, "number")) {
                                                    this.inputFormFieldErrors[a] = "Invalid input", i = !1;
                                                    continue
                                                }
                                                if ("integer" == s && !this.$isValidNumber(u, "integer")) {
                                                    this.inputFormFieldErrors[a] = "Invalid input", i = !1;
                                                    continue
                                                }
                                                if ("url" == s && !this.$isValidURL(u)) {
                                                    this.inputFormFieldErrors[a] = "Invalid URL (make sure it starts with http:// or https://)", i = !1;
                                                    continue
                                                }
                                            }
                                        }
                                    }
                                }
                                if (i) {
                                    var g = this.inputFormFieldValues;
                                    for (var f in g) {
                                        var b = g[f];
                                        null != b && "string" == typeof b && (b = b.trim(), g[f] = b)
                                    }
                                    this.$emit("inputFormSubmitted", {
                                        values: this.inputFormFieldValues,
                                        message: this.message
                                    })
                                }
                            }
                        },
                        isRtlString: function(t) {
                            return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u0590-\u05FF\uFB1D-\uFB4F]/.test(t)
                        },
                        getUserMessageText: function() {
                            var t;
                            if (null == this.message) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.text;
                            if (null != e && e.length > 0) {
                                try {
                                    e = this.$escapeHtml(e)
                                } catch (t) {}
                                return {
                                    type: "text",
                                    text: e
                                }
                            }
                            return null
                        },
                        buttonItemClicked: function(t) {
                            this.$emit("buttonBlockClicked", {
                                button: t,
                                message: this.message
                            })
                        },
                        carouselControlClicked: function(t) {
                            "left" == t ? this.currentCarouselItemIndex > 0 && this.currentCarouselItemIndex-- : "right" == t && this.currentCarouselItemIndex < this.blockData.items.length - 1 && this.currentCarouselItemIndex++
                        },
                        markdownToHtml: function(t) {
                            if (null == t) return "";
                            var e = this.$md.render(t);
                            try {
                                var i = this.addTargetAttrToHtmlLinks(e, "_blank");
                                null != i && i.length > 0 && (e = i)
                            } catch (t) {}
                            return e
                        },
                        addTargetAttrToHtmlLinks: function(t, e) {
                            var i = document.createElement("div");
                            return i.innerHTML = t, i.querySelectorAll("a").forEach((function(t) {
                                t.setAttribute("target", e)
                            })), i.innerHTML
                        },
                        predefinedQuerySelected: function(t) {
                            this.$emit("predefinedQuerySelected", t)
                        },
                        ratingSelected: function(t) {
                            if (1 === t || -1 === t) {
                                var e = null;
                                if (this.isAiKbResponseBlock) e = this.aiKbResponseRatingValue;
                                else {
                                    if (!this.isAiCompletionResponseBlock) return;
                                    e = this.aiCompletionResponseRatingValue
                                }
                                1 !== e && -1 !== e && e !== t && this.$emit("aiResponseRated", {
                                    message: this.message,
                                    rating: t
                                })
                            }
                        },
                        getTextBlockHTML: function() {
                            var t, e, i = null === (t = this.blockData) || void 0 === t ? void 0 : t.richText;
                            if (null == i || 0 == i.length) return "";
                            var l = !0;
                            return 1 == (null === (e = this.blockData) || void 0 === e ? void 0 : e.render_html) && (l = !1), this.$convertRichTextToHTML(i, [], "chatbot_message", l)
                        },
                        getAiKbResponseHTML: function() {
                            return null == this.aiKbResponseText || 0 == this.aiKbResponseText.length ? "" : this.markdownToHtml(this.aiKbResponseText)
                        },
                        getAiCompletionResponseHTML: function() {
                            return null == this.aiCompletionResponseText || 0 == this.aiCompletionResponseText.length ? "" : this.markdownToHtml(this.aiCompletionResponseText)
                        }
                    },
                    computed: {
                        isCalBookingBlock: function() {
                            return this.blockType === n.d.CALCOM.BOOK
                        },
                        botMessageBubbleWrapperCSS: function() {
                            var t = {};
                            return this.isInputFormBlock && (t.width = "100%"), t
                        },
                        isTodayTimestamp: function() {
                            return null != this.timestamp && this.$isTodayTimestamp(this.timestamp)
                        },
                        showMessageTimestamp: function() {
                            return null != this.messageTimestamp && this.messageTimestamp.length > 0
                        },
                        canCopyMessage: function() {
                            return this.blockType === this.blockTypes.OUTPUTS.TEXT || this.isAiKbResponseBlock || this.isAiCompletionResponseBlock
                        },
                        timestamp: function() {
                            var t;
                            return null == this.message ? null : null === (t = this.message) || void 0 === t ? void 0 : t.timestamp
                        },
                        messageTimestamp: function() {
                            return null == this.timestamp ? null : this.isTodayTimestamp ? this.$formatTimeInConversation(this.timestamp) : this.$formatDateShortInChat(this.timestamp)
                        },
                        inputFieldGlobalCSS: function() {
                            var t = {};
                            return this.isMobileViewport && (t["font-size"] = "16px"), t
                        },
                        sourceLabelCaretIconCSS: function() {
                            var t = {
                                transition: "all 0.15s ease"
                            };
                            return this.aiKbSourcesVisible ? (t.transform = "rotate(90deg)", "rtl" == this.languageDirection ? t["margin-left"] = "6px" : t["margin-right"] = "6px") : "rtl" == this.languageDirection ? (t.transform = "rotate(180deg)", t["margin-left"] = "4px") : t["margin-right"] = "4px", t
                        },
                        inputFormFields: function() {
                            var t;
                            return null == this.blockData || null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.fields) || 0 == this.blockData.fields.length ? null : this.blockData.fields
                        },
                        AllRoleId: function() {
                            return n.e
                        },
                        isDebugMessage: function() {
                            var t = this.$store.getters["account/platformId"];
                            return Object(n.f)(this.blockType, t)
                        },
                        debugMessageText: function() {
                            var t, e, i;
                            return this.isDebugMessage && null != (null === (t = this.message) || void 0 === t ? void 0 : t.component) ? null === (e = this.message) || void 0 === e || null === (i = e.component) || void 0 === i ? void 0 : i.text : null
                        },
                        isErrorBlock: function() {
                            if (this.BlockCategory == n.c.ERROR) return !0
                        },
                        errorBlockMessage: function() {
                            var t;
                            return this.isErrorBlock ? null == this.blockData ? null : null === (t = this.blockData) || void 0 === t ? void 0 : t.message : null
                        },
                        errorBlockTitle: function() {
                            var t, e = "Error";
                            if (!this.isErrorBlock) return e;
                            if (null == this.blockData) return e;
                            var i = null === (t = this.blockData) || void 0 === t ? void 0 : t.title;
                            return null == i || 0 == i.length ? e : i
                        },
                        isErrorForAdmin: function() {
                            var t;
                            return !!this.isErrorBlock && (null != this.blockData && 2 == (null === (t = this.blockData) || void 0 === t ? void 0 : t.display_to))
                        },
                        hasData: function() {
                            var t;
                            return this.$chatMessageBlockHasData(null === (t = this.message) || void 0 === t ? void 0 : t.component, this.blockTypes, n.a)
                        },
                        showMessage: function() {
                            if (this.roleId == this.AllRoleId.USER) {
                                var t;
                                if (null == this.getUserMessageText()) return !1;
                                var e = null === (t = this.getUserMessageText()) || void 0 === t ? void 0 : t.text;
                                return null != e && 0 != e.length && 0 != (e = e.trim()).length
                            }
                            return this.roleId == this.AllRoleId.BOT ? this.blockType !== n.d.ACTION.HTTP && ((!this.isCalBookingBlock || !this.isBlockSubmitted) && this.hasData) : this.roleId != this.AllRoleId.AGENT || null != this.agentMessageText && 0 != this.agentMessageText.length
                        },
                        outputImageUrl: function() {
                            var t;
                            if (null == this.blockData) return null;
                            if (null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.url)) return null;
                            var e = this.blockData.url;
                            return null == e || 0 == e.length || 0 == (e = e.trim()).length ? null : e
                        },
                        outputAudioUrl: function() {
                            var t;
                            if (null == this.blockData) return null;
                            if (null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.url)) return null;
                            var e = this.blockData.url;
                            return null == e || 0 == e.length || 0 == (e = e.trim()).length ? null : e
                        },
                        outputAudioAutoplay: function() {
                            var t;
                            return null != this.blockData && (null != (null === (t = this.blockData) || void 0 === t ? void 0 : t.autoplay) && this.blockData.autoplay)
                        },
                        outputVideoUrl: function() {
                            var t;
                            if (null == this.blockData) return null;
                            if (null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.url)) return null;
                            var e = this.blockData.url;
                            return null == e || 0 == e.length || 0 == (e = e.trim()).length ? null : e
                        },
                        aiKbAnswerNotFound: function() {
                            var t;
                            if (!this.isAiKbResponseBlock) return !1;
                            var e = null === (t = this.blockData) || void 0 === t ? void 0 : t.answer_not_found;
                            return null != e && e
                        },
                        aiKbResponseText: function() {
                            var t;
                            if (1 != this.isAiKbResponseBlock) return null;
                            if (null == this.message) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.text
                        },
                        isAiKbResponseStreaming: function() {
                            var t;
                            if (!this.isAiKbResponseBlock) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return !1;
                            var i = null == e ? void 0 : e.data;
                            return null != i && 1 == (null == i ? void 0 : i.stream)
                        },
                        isAiKbResponseStreamingEnded: function() {
                            var t;
                            if (!this.isAiKbResponseBlock) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return !1;
                            var i = null == e ? void 0 : e.data;
                            return null != i && (null == i ? void 0 : i.stream_status) == n.b.COMPLETED
                        },
                        aiKbResponseRatingValue: function() {
                            var t;
                            if (1 != this.isAiKbResponseBlock) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return null;
                            var i = null == e ? void 0 : e.rating_value;
                            if (null == i) return null;
                            try {
                                return parseInt(i)
                            } catch (t) {
                                return null
                            }
                        },
                        isAiKbResponseBlock: function() {
                            var t;
                            if (!this.blockType === n.d.AI.RESPONSE) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return !1;
                            var i = null == e ? void 0 : e.data;
                            return null != i && (null == i ? void 0 : i.response_source) === n.a.KB
                        },
                        isAiCompletionResponseBlock: function() {
                            var t;
                            if (!this.blockType === n.d.AI.RESPONSE) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return !1;
                            var i = null == e ? void 0 : e.data;
                            return null != i && (null == i ? void 0 : i.response_source) === n.a.MODEL
                        },
                        aiCompletionResponseText: function() {
                            var t;
                            if (1 != this.isAiCompletionResponseBlock) return null;
                            if (null == this.message) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.text
                        },
                        aiCompletionResponseRatingValue: function() {
                            var t;
                            if (1 != this.isAiCompletionResponseBlock) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return null;
                            var i = null == e ? void 0 : e.rating_value;
                            if (null == i) return null;
                            try {
                                return parseInt(i)
                            } catch (t) {
                                return null
                            }
                        },
                        hasUrlData: function() {
                            var t;
                            if (null == this.blockData) return !1;
                            if (null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.url)) return !1;
                            var e = this.blockData.url;
                            return null != e && 0 != e.length
                        },
                        selectedButtonData: function() {
                            var t;
                            if (1 == this.isButtonsBlock || this.roleId == this.AllRoleId.BOT) {
                                if (null == this.message) return null;
                                var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                                if (null == e) return null;
                                if (null == (null == e ? void 0 : e.data)) return null;
                                var i = null == e ? void 0 : e.data;
                                if (null == (null == i ? void 0 : i.options) || 0 == i.options.length) return null;
                                var l = null == e ? void 0 : e.selected_item_id;
                                if (null == l || 0 == l.length) return null;
                                for (var n = null, o = 0; o < i.options.length; o++) {
                                    var r = i.options[o];
                                    if ((null == r ? void 0 : r.id) == l) {
                                        n = r;
                                        break
                                    }
                                }
                                return n
                            }
                        },
                        isCarouselBlock: function() {
                            return this.blockType === n.d.OUTPUTS.CAROUSEL
                        },
                        isButtonsBlock: function() {
                            return this.blockType === n.d.INPUTS.BUTTONS
                        },
                        isUrlButtonBlock: function() {
                            return this.blockType === n.d.OUTPUTS.URL_BUTTON
                        },
                        isInputFormBlock: function() {
                            return this.blockType === n.d.INPUTS.FORM
                        },
                        isInputFormSubmitted: function() {
                            var t;
                            if (!this.isInputFormBlock) return !1;
                            if (null == this.message) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null != e && 1 == (null == e ? void 0 : e.submitted)
                        },
                        inputFormDisabled: function() {
                            var t;
                            return !!this.isInputFormSubmitted || (null == this.activeInputMessageId || (null == this.message || this.activeInputMessageId != (null === (t = this.message) || void 0 === t ? void 0 : t.id)))
                        },
                        isBlockSubmitted: function() {
                            var t;
                            if (!this.isInputFormBlock && !this.isCalBookingBlock) return !1;
                            if (null == this.message) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null != e && 1 == (null == e ? void 0 : e.submitted)
                        },
                        isAiMessage: function() {
                            var t;
                            return null != this.message && !0 === (null === (t = this.message) || void 0 === t ? void 0 : t.is_ai_message)
                        },
                        blockData: function() {
                            var t;
                            if (null == this.message) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.data
                        },
                        blockTypes: function() {
                            return n.d
                        },
                        predefinedQueryCSS: function() {
                            var t;
                            return t = {
                                "font-size": "12px",
                                padding: "5px",
                                "border-radius": "5px",
                                display: "inline-block"
                            }, Object(l.a)(t, "padding", "5px 10px"), Object(l.a)(t, "background", "transparent"), Object(l.a)(t, "border", "1px solid ".concat(this.primaryColor)), Object(l.a)(t, "color", this.primaryColor), Object(l.a)(t, "cursor", "pointer"), Object(l.a)(t, "margin", "4px 4px 0 0"), t
                        },
                        selectedButtonItemCSS: function() {
                            var t = this.primaryColor,
                                e = this.$getContrastingColor(t);
                            null == e && (t = "#000", e = "#fff"), t = "#000", e = "#fff";
                            var i = {};
                            return null != this.selectedButtonData && (i["background-color"] = t, i.color = e, i["border-color"] = t, i["font-weight"] = "500"), i
                        },
                        buttonItemCSS: function() {
                            var t = "all 0.3s ease",
                                e = {
                                    background: "transparent",
                                    color: "#000",
                                    cursor: "pointer",
                                    "font-size": "0.95em",
                                    display: "inline-block",
                                    margin: "4px 4px 0 0",
                                    "font-weight": "400",
                                    padding: "8px 10px",
                                    border: "1px solid #e5e7eb",
                                    "background-color": "#fff",
                                    "box-shadow": "rgb(0 0 0 / 5%) 0px 2px 4px",
                                    "border-radius": "5px",
                                    transition: t,
                                    "-webkit-transition": t,
                                    "-moz-transition": t,
                                    "-o-transition": t
                                };
                            return null != this.selectedButtonData && (e["background-color"] = "#f3f4f6", e["border-color"] = "#f3f4f6", e.color = "#71717a", e["font-weight"] = "400", e.cursor = "not-allowed"), e
                        },
                        showAiKbResponseSourcesEnabled: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.enabled;
                                return null !== i && (0 != i && ((0 != this.showSourcePageTitle || 0 != this.showSourcePageURL || 0 != this.showSourceDocumentFilename || 0 != this.showSourceDocumentURL) && i))
                            } catch (t) {
                                return !1
                            }
                        },
                        hasValidAiKbResponseSources: function() {
                            try {
                                if (!this.isAiKbResponseBlock) return !1;
                                var t = this.aiKbResponseSources;
                                if (null == t || 0 == t.length) return !1;
                                for (var e = 0; e < t.length; e++) {
                                    var i = t[e];
                                    if ("webpage" != (null == i ? void 0 : i.type) || 1 != this.showSourcePageTitle && 1 != this.showSourcePageURL)
                                        if ("document_url" != (null == i ? void 0 : i.type) || 1 != this.showSourceDocumentFilename && 1 != this.showSourceDocumentURL) {
                                            if ("document" == (null == i ? void 0 : i.type) && 1 == this.showSourceDocumentFilename && null != i.filename && i.filename.trim().length > 0) return !0
                                        } else {
                                            if (null != i.filename && i.filename.trim().length > 0) return !0;
                                            if (null != i.url && i.url.trim().length > 0) return !0
                                        }
                                    else {
                                        if (null != i.title && i.title.trim().length > 0) return !0;
                                        if (null != i.url && i.url.trim().length > 0) return !0
                                    }
                                }
                                return !1
                            } catch (t) {
                                return !1
                            }
                        },
                        aiKbResponseSources: function() {
                            try {
                                var t;
                                if (null == this.blockData) return [];
                                var e = null === (t = this.blockData) || void 0 === t ? void 0 : t.sources;
                                if (null == e || 0 == e.length) return [];
                                var i = [],
                                    l = [],
                                    n = [];
                                if (0 == this.maxSources) return [];
                                for (var o = 0; o < e.length; o++) {
                                    var r = e[o];
                                    if (null != r) {
                                        var s = null == r ? void 0 : r.url,
                                            a = null == r ? void 0 : r.filename;
                                        if (null != s && s.length > 0 && null == a) {
                                            if (0 == (s = s.trim()).length) continue;
                                            if (l.includes(s)) continue;
                                            l.push(s);
                                            var u = null == r ? void 0 : r.title;
                                            null != u && 0 == (u = u.trim()).length && (u = null);
                                            var c = s.replace(/(^\w+:|^)\/\//, "");
                                            c = c.replace("www.", ""), i.push({
                                                type: "webpage",
                                                title: u,
                                                url: s,
                                                shortened_url: c
                                            })
                                        } else if (null != s && null != a) {
                                            if (0 == (s = s.trim()).length && 0 == a.length) continue;
                                            if (l.includes(s)) continue;
                                            if (n.includes(a)) continue;
                                            l.push(s), n.push(s);
                                            var d = s.replace(/(^\w+:|^)\/\//, "");
                                            d = d.replace("www.", ""), i.push({
                                                type: "document_url",
                                                filename: a,
                                                url: s,
                                                shortened_url: d
                                            })
                                        } else {
                                            if (!(null != a && a.length > 0)) continue;
                                            if (a = a.trim(), n.includes(a)) continue;
                                            n.push(a), i.push({
                                                type: "document",
                                                filename: a
                                            })
                                        }
                                    }
                                }
                                return null != i && i.length > this.maxSources && (i = i.slice(0, this.maxSources)), i
                            } catch (t) {
                                return []
                            }
                        },
                        showAiKbRating: function() {
                            var t;
                            return !!this.isAiKbResponseBlock && (0 != (null === (t = this.settings) || void 0 === t ? void 0 : t.rate_each_chatbot_response) && (!0 !== this.isAiKbResponseStreaming || 1 == this.isAiKbResponseStreaming && 1 == this.isAiKbResponseStreamingEnded))
                        },
                        roleId: function() {
                            return "welcome_text" == this.messageType || "bot_thinking" == this.messageType ? this.AllRoleId.BOT : "normal" == this.messageType ? this.message.role_id : null
                        },
                        blockType: function() {
                            var t;
                            if ("normal" != this.messageType) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.type
                        },
                        BlockCategory: function() {
                            var t;
                            if ("normal" != this.messageType) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.category
                        },
                        chatBubbleWrapperCSS: function() {
                            var t = {
                                display: "flex",
                                "align-items": "flex-end",
                                "margin-bottom": "7px"
                            };
                            return this.roleId == this.AllRoleId.BOT && this.isCarouselBlock && (t["align-items"] = "flex-start"), this.roleId == this.AllRoleId.USER && (t["justify-content"] = "flex-end", t["padding-left"] = "45px"), t.position = "relative", t
                        },
                        inlineErrorCSS: function() {
                            return {
                                background: "#fef2f2",
                                color: "#fff",
                                padding: "5px 15px",
                                "font-size": "0.9em",
                                "font-weight": "500",
                                "border-radius": "5px",
                                "text-align": "left",
                                display: "flex",
                                "align-items": "center",
                                border: "1px solid #dc2626",
                                width: "100%"
                            }
                        },
                        inlineErrorTitleCSS: function() {
                            return {
                                color: "#dc2626",
                                "font-weight": "500"
                            }
                        },
                        inlineErrorMessageCSS: function() {
                            return {
                                color: "#dc2626",
                                "font-weight": "400",
                                "margin-top": "3px"
                            }
                        },
                        chatBubbleCSS: function() {
                            var t = {
                                "box-sizing": "border-box",
                                "overflow-wrap": "anywhere",
                                padding: "10px 15px",
                                "border-radius": "10px",
                                "font-size": "13.5px",
                                transition: "width 200ms linear"
                            };
                            return this.roleId == this.AllRoleId.USER ? (t["border-bottom-right-radius"] = "2px", t["background-color"] = this.primaryColor, t.color = this.foregroundColor, t["white-space"] = "pre-wrap") : (t["border-bottom-left-radius"] = "2px", t["background-color"] = this.assistantBGColor, t.color = this.assistantTextColor), this.isInputFormBlock && (t["min-width"] = "250px", t["max-width"] = "450px", t.width = "100%"), "rtl" == this.languageDirection && (t.direction = "rtl"), "normal" == this.messageType && (this.isCarouselBlock ? (t.padding = "0px", t["border-radius"] = "0px", t["background-color"] = "transparent", t["overflow-wrap"] = "unset", t.display = "block") : (this.isButtonsBlock || this.isUrlButtonBlock) && this.roleId == this.AllRoleId.BOT && (t.padding = "0px", t["border-radius"] = "0px", t["background-color"] = "transparent", t.display = "block")), t
                        },
                        chatAvatarImgCSS: function() {
                            var t, e, i, l, n, o, r = {
                                    "flex-shrink": "0"
                                },
                                s = 35,
                                a = !0,
                                u = 10;
                            return null != (null === (t = this.appearance) || void 0 === t || null === (e = t.avatar_icon) || void 0 === e ? void 0 : e.full_rounded) && (a = this.appearance.avatar_icon.full_rounded), null != (null === (i = this.appearance) || void 0 === i || null === (l = i.avatar_icon) || void 0 === l ? void 0 : l.size) && (s = this.appearance.avatar_icon.size), null != (null === (n = this.appearance) || void 0 === n || null === (o = n.avatar_icon) || void 0 === o ? void 0 : o.border_radius) && (u = this.appearance.avatar_icon.border_radius), r.width = "".concat(s, "px"), r.height = "".concat(s, "px"), r["border-radius"] = a ? "100%" : "".concat(u, "px"), this.roleId == this.AllRoleId.BOT && (r["margin-right"] = "10px", null != this.botIconUrl && this.botIconUrl.length > 0 && (r["background-image"] = "url(".concat(this.botIconUrl, ")")), r["background-size"] = "cover", r["background-repeat"] = "no-repeat", r["background-position"] = "center"), r.visibility = "hidden", ("bot_thinking" == this.messageType || "normal" == this.messageType && this.roleId == this.AllRoleId.BOT && this.showAvatar) && (r.visibility = "visible"), r
                        },
                        showAvatar: function() {
                            var t;
                            if ("normal" == this.messageType && (null != this.message && null != (null === (t = this.message) || void 0 === t ? void 0 : t.id) && this.roleId == this.AllRoleId.BOT && null != this.messagesToShowAiAvatar && this.messagesToShowAiAvatar.includes(this.message.id))) return !0
                        },
                        showAgentAvatar: function() {
                            var t;
                            if ("normal" == this.messageType && (null != this.message && null != (null === (t = this.message) || void 0 === t ? void 0 : t.id) && this.roleId == this.AllRoleId.AGENT && null != this.messagesToShowAgentAvatar && this.messagesToShowAgentAvatar.includes(this.message.id))) return !0;
                            return !1
                        },
                        userData: function() {
                            var t, e;
                            return null == this.message || null == (null === (t = this.message) || void 0 === t ? void 0 : t.user) ? null : null === (e = this.message) || void 0 === e ? void 0 : e.user
                        },
                        userProfilePhotoUrl: function() {
                            var t, e;
                            return null == this.userData || null == (null === (t = this.userData) || void 0 === t ? void 0 : t.profile_photo) ? null : null === (e = this.userData) || void 0 === e ? void 0 : e.profile_photo
                        },
                        userName: function() {
                            var t, e, i;
                            return null == this.userData || null == (null === (t = this.userData) || void 0 === t ? void 0 : t.name) || 0 == (null === (e = this.userData) || void 0 === e ? void 0 : e.name.length) ? null : null === (i = this.userData) || void 0 === i ? void 0 : i.name
                        },
                        userInitial: function() {
                            return null == this.userName ? "" : this.userName.charAt(0).toUpperCase()
                        },
                        agentMessageText: function() {
                            var t;
                            return null == this.message ? null : null === (t = this.message) || void 0 === t ? void 0 : t.text
                        },
                        agentMessageHTML: function() {
                            if (null == this.agentMessageText) return "";
                            var t = this.$escapeHtml(this.agentMessageText),
                                e = this.$nl2br(t);
                            return e = this.$processTextForLinks(e)
                        },
                        agentAvatarCSS: function() {
                            var t, e, i, l, n, o, r = 35,
                                s = !0,
                                a = 10;
                            null != (null === (t = this.appearance) || void 0 === t || null === (e = t.avatar_icon) || void 0 === e ? void 0 : e.full_rounded) && (s = this.appearance.avatar_icon.full_rounded), null != (null === (i = this.appearance) || void 0 === i || null === (l = i.avatar_icon) || void 0 === l ? void 0 : l.size) && (r = this.appearance.avatar_icon.size), null != (null === (n = this.appearance) || void 0 === n || null === (o = n.avatar_icon) || void 0 === o ? void 0 : o.border_radius) && (a = this.appearance.avatar_icon.border_radius);
                            var u = {
                                "flex-shrink": "0",
                                width: "".concat(r, "px"),
                                height: "".concat(r, "px"),
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "background-size": "cover",
                                "background-repeat": "no-repeat",
                                "background-position": "center",
                                "margin-right": "10px"
                            };
                            return u["border-radius"] = s ? "100%" : "".concat(a, "px"), "rtl" == this.languageDirection && (u["margin-right"] = null, u["margin-left"] = "10px"), this.showAgentAvatar ? this.userProfilePhotoUrl ? u["background-image"] = "url(".concat(this.userProfilePhotoUrl, ")") : (u["background-color"] = this.primaryColor, u.color = this.foregroundColor, u["font-weight"] = "600", u["font-size"] = "".concat(Math.round(.45 * r), "px")) : u.visibility = "hidden", u
                        },
                        agentNameCSS: function() {
                            var t, e, i = 35;
                            null != (null === (t = this.appearance) || void 0 === t || null === (e = t.avatar_icon) || void 0 === e ? void 0 : e.size) && (i = this.appearance.avatar_icon.size);
                            var l = i + 10 + 2,
                                n = {
                                    "font-size": "12px",
                                    color: "#6b7280",
                                    "margin-top": "4px"
                                };
                            return "rtl" == this.languageDirection ? n["padding-right"] = "".concat(l, "px") : n["padding-left"] = "".concat(l, "px"), n
                        },
                        sourceWrapperCSS: function() {},
                        sourceTitleCSS: function() {
                            var t = Object(l.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "500"
                            }, "color", "#000");
                            return this.showSourcePageURL && (t["margin-bottom"] = "5px", t["padding-bottom"] = "5px", t["border-bottom"] = "1px solid #dee1e5"), t
                        },
                        sourceDocumentFilenameCSS: function() {
                            var t = Object(l.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "500"
                            }, "color", "#000");
                            return this.showSourceDocumentURL && (t["margin-bottom"] = "5px", t["padding-bottom"] = "5px", t["border-bottom"] = "1px solid #dee1e5"), t
                        },
                        sourceDocumentFilenameOnlyCSS: function() {
                            return Object(l.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "400"
                            }, "color", "#000")
                        },
                        sourceURLCSS: function() {
                            return {
                                color: "#4b5563",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap"
                            }
                        },
                        sourceLabelCSS: function() {
                            return {
                                color: "rgb(80 93 106)",
                                direction: this.languageDirection
                            }
                        },
                        helpfulRatingContainerCSS: function() {
                            return {
                                "margin-top": "10px",
                                "padding-top": "10px",
                                direction: this.languageDirection
                            }
                        },
                        helpfulRatingTextCSS: function() {
                            return {
                                color: "rgb(80 93 106)",
                                "font-size": "0.95em",
                                "margin-bottom": "5px"
                            }
                        },
                        showSourcePageTitle: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.fields;
                                if (null == i) return !1;
                                var l = null == i ? void 0 : i.page_title;
                                return null !== l && l
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourcePageURL: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.fields;
                                if (null == i) return !1;
                                var l = null == i ? void 0 : i.page_url;
                                return null !== l && l
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourceDocumentFilename: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.fields;
                                if (null == i) return !1;
                                var l = null == i ? void 0 : i.document_filename;
                                return null !== l && l
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourceDocumentURL: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.fields;
                                if (null == i) return !1;
                                var l = null == i ? void 0 : i.document_url;
                                return null !== l && l
                            } catch (t) {
                                return !1
                            }
                        },
                        sourcesWrapperCSS: function() {
                            return {
                                "border-top": "1px solid #dee1e5",
                                "margin-top": "12px",
                                "padding-top": "12px",
                                "font-size": "0.95em",
                                display: "flex",
                                "flex-direction": "column",
                                gap: "10px"
                            }
                        },
                        submitButtonCSS: function() {
                            var t = {
                                width: "100%",
                                "background-color": this.primaryColor,
                                color: this.foregroundColor
                            };
                            return this.inputFormDisabled && (t["background-color"] = "#d7d7d7", t.color = "#909090"), t
                        }
                    }
                }),
                u = (i(460), i(90)),
                c = Object(u.a)(a, (function() {
                    var t, e, i, l, n, o, r, s, a, u, c, d, h = this,
                        p = h._self._c;
                    return "normal" == h.messageType && h.showMessage ? p("div", [p("div", [h.roleId == h.AllRoleId.BOT ? p("div", {
                        style: h.chatBubbleWrapperCSS
                    }, [h.isCarouselBlock ? p("div", [h.currentCarouselItemIndex > 0 ? p("button", {
                        staticClass: "chtl-carousel-control chtl-carousel-btn",
                        style: [{
                            left: "0px"
                        }],
                        attrs: {
                            type: "button",
                            "aria-label": (null === (t = h.translation) || void 0 === t || null === (e = t.global) || void 0 === e ? void 0 : e.previous) || "Previous"
                        },
                        on: {
                            click: function(t) {
                                return h.carouselControlClicked("left")
                            }
                        }
                    }, [p("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "15",
                            height: "15",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#6b7280",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [p("path", {
                        attrs: {
                            d: "m12 19-7-7 7-7"
                        }
                    }), p("path", {
                        attrs: {
                            d: "M19 12H5"
                        }
                    })])]) : h._e(), h._v(" "), h.currentCarouselItemIndex < h.blockData.items.length - 1 ? p("button", {
                        staticClass: "chtl-carousel-control chtl-carousel-btn",
                        style: [{
                            right: "0px"
                        }],
                        attrs: {
                            type: "button",
                            "aria-label": (null === (i = h.translation) || void 0 === i || null === (l = i.global) || void 0 === l ? void 0 : l.next) || "Next"
                        },
                        on: {
                            click: function(t) {
                                return h.carouselControlClicked("right")
                            }
                        }
                    }, [p("svg", {
                        staticStyle: {
                            rotate: "180deg"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "15",
                            height: "15",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#6b7280",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [p("path", {
                        attrs: {
                            d: "m12 19-7-7 7-7"
                        }
                    }), p("path", {
                        attrs: {
                            d: "M19 12H5"
                        }
                    })])]) : h._e()]) : h._e(), h._v(" "), p("div", {
                        style: h.chatAvatarImgCSS
                    }), h._v(" "), p("div", {
                        staticClass: "chtl-bot-bubble-message-wrapper",
                        style: h.botMessageBubbleWrapperCSS
                    }, [p("div", {
                        style: h.chatBubbleCSS
                    }, [null != h.blockData ? p("div", [h.blockType === h.blockTypes.OUTPUTS.TEXT ? p("div", {
                        ref: "text_el_to_copy",
                        staticClass: "chtl-reset bot",
                        domProps: {
                            innerHTML: h._s(h.getTextBlockHTML())
                        }
                    }) : h.isAiKbResponseBlock && !h.aiKbAnswerNotFound && null != h.aiKbResponseText && h.aiKbResponseText.length > 0 ? p("div", {
                        ref: "text_el_to_copy",
                        staticClass: "chtl-reset bot",
                        domProps: {
                            innerHTML: h._s(h.getAiKbResponseHTML())
                        }
                    }) : h.isAiCompletionResponseBlock && null != h.aiCompletionResponseText && h.aiCompletionResponseText.length > 0 ? p("div", {
                        ref: "text_el_to_copy",
                        staticClass: "chtl-reset bot",
                        domProps: {
                            innerHTML: h._s(h.getAiCompletionResponseHTML())
                        }
                    }) : h.isCarouselBlock ? p("div", [p("CarouselMessage", {
                        attrs: {
                            data: h.blockData,
                            currentCarouselItemIndex: h.currentCarouselItemIndex,
                            carouselItemWidth: h.carouselItemWidth
                        }
                    })], 1) : h.blockType === h.blockTypes.OUTPUTS.IMAGE ? p("div", [p("div", [p("img", {
                        staticClass: "chtl-ot-image",
                        attrs: {
                            src: h.outputImageUrl
                        }
                    })])]) : h.blockType === h.blockTypes.OUTPUTS.AUDIO ? p("div", [p("div", {
                        staticClass: "chtl-ot-audio-wrapper"
                    }, [p("audio", {
                        staticClass: "chtl-ot-audio",
                        attrs: {
                            controls: "controls",
                            autobuffer: "",
                            preload: "auto",
                            autoplay: h.outputAudioAutoplay
                        }
                    }, [p("source", {
                        attrs: {
                            src: h.outputAudioUrl
                        }
                    }), h._v("Your browser does not support the audio element.")])])]) : h.blockType === h.blockTypes.OUTPUTS.VIDEO ? p("div", [p("VideoMessage", {
                        attrs: {
                            url: h.outputVideoUrl
                        }
                    })], 1) : h.isButtonsBlock ? p("div", {
                        staticStyle: {
                            display: "flex",
                            "flex-wrap": "wrap",
                            gap: "4px"
                        }
                    }, h._l(h.blockData.options, (function(t) {
                        return null != (null == t ? void 0 : t.label) && t.label.length > 0 ? p("button", {
                            staticClass: "chtl-block-button-item",
                            staticStyle: {
                                display: "flex"
                            },
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return h.buttonItemClicked(t)
                                }
                            }
                        }, [h._v(h._s(t.label))]) : h._e()
                    })), 0) : h.isUrlButtonBlock ? p("div", {
                        staticStyle: {
                            display: "flex",
                            "flex-wrap": "wrap",
                            gap: "4px"
                        }
                    }, h._l(h.blockData.options, (function(t) {
                        return null != (null == t ? void 0 : t.label) && t.label.length > 0 && null != (null == t ? void 0 : t.url) && t.url.length > 0 ? p("a", {
                            staticClass: "chtl-block-button-item",
                            staticStyle: {
                                "text-decoration": "none"
                            },
                            attrs: {
                                href: t.url,
                                target: "_blank"
                            }
                        }, [p("div", {
                            staticStyle: {
                                display: "flex",
                                "align-items": "center",
                                gap: "7px"
                            }
                        }, [p("span", [p("svg", {
                            staticClass: "chtl-block-url-button-icon",
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "13",
                                height: "13",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            }
                        }, [p("path", {
                            attrs: {
                                d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
                            }
                        }), p("path", {
                            attrs: {
                                d: "m21 3-9 9"
                            }
                        }), p("path", {
                            attrs: {
                                d: "M15 3h6v6"
                            }
                        })])]), h._v(" "), p("span", [h._v(h._s(t.label))])])]) : h._e()
                    })), 0) : h.isInputFormBlock && null != h.inputFormFields && h.inputFormFields.length > 0 ? p("div", [p("form", {
                        ref: "chtl_input_form",
                        staticClass: "chtl-input-form-bock",
                        attrs: {
                            onsubmit: "return false;"
                        }
                    }, [h._l(h.inputFormFields, (function(t, e) {
                        var i, l, n, o;
                        return h.shouldShowFormField(t) ? p("div", {
                            key: t.id,
                            style: {
                                "margin-bottom": e == h.inputFormFields.length - 1 ? "0" : "15px"
                            }
                        }, [p("div", {
                            staticClass: "input-field flx",
                            class: {
                                required: 1 == (null == t ? void 0 : t.required)
                            }
                        }, ["checkbox" != t.type ? p("label", {
                            staticClass: "weight-medium"
                        }, [h._v(h._s(t.label))]) : h._e(), h._v(" "), "date" == t.type || "datetime" == t.type || "time" == t.type ? p("date-picker", {
                            staticClass: "chtl-form-datepicker-input",
                            staticStyle: {
                                width: "100%"
                            },
                            style: {
                                direction: h.languageDirection
                            },
                            attrs: {
                                value: h.inputFormFieldValues[t.id],
                                type: t.type,
                                valueType: "format",
                                format: h.getDateTimeFormatString(t.type),
                                disabled: h.inputFormDisabled
                            },
                            on: {
                                input: function(e) {
                                    return h.dateTimeFieldValueChanged(e, t)
                                }
                            }
                        }) : "multiple_choice" == t.type ? p("div", [null != (null == t || null === (i = t.properties) || void 0 === i ? void 0 : i.choices) && t.properties.choices.length > 0 ? p("div", {
                            staticClass: "chtl-form-multiple-choice-wrapper"
                        }, h._l(t.properties.choices, (function(e) {
                            var i, l, n, o, r, s;
                            return null != e.label && e.label.length > 0 ? p("div", {
                                key: e.id,
                                staticClass: "chtl-form-multiple-choice-item",
                                class: {
                                    selected: null != (null === (i = h.inputFormFieldValues) || void 0 === i || null === (l = i[t.id]) || void 0 === l ? void 0 : l[e.id]), disabled: h.inputFormDisabled
                                },
                                attrs: {
                                    role: "checkbox",
                                    "aria-checked": null != (null === (n = h.inputFormFieldValues) || void 0 === n || null === (o = n[t.id]) || void 0 === o ? void 0 : o[e.id]) ? "true" : "false",
                                    "aria-disabled": h.inputFormDisabled ? "true" : "false",
                                    tabindex: "0"
                                },
                                on: {
                                    click: function(i) {
                                        return h.multipleChoiceItemClicked(e.id, t)
                                    },
                                    keydown: [function(i) {
                                        return !i.type.indexOf("key") && h._k(i.keyCode, "enter", 13, i.key, "Enter") ? null : h.multipleChoiceItemClicked(e.id, t)
                                    }, function(i) {
                                        return !i.type.indexOf("key") && h._k(i.keyCode, "space", 32, i.key, [" ", "Spacebar"]) ? null : (i.preventDefault(), h.multipleChoiceItemClicked(e.id, t))
                                    }]
                                }
                            }, [p("div", {
                                staticClass: "chtl-form-multiple-choice-checkbox"
                            }, [null !== (r = h.inputFormFieldValues) && void 0 !== r && null !== (s = r[t.id]) && void 0 !== s && s[e.id] ? p("svg", {
                                attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                }
                            }, [p("polyline", {
                                attrs: {
                                    points: "20 6 9 17 4 12"
                                }
                            })]) : h._e()]), h._v(" "), p("span", [h._v(h._s(e.label))])]) : h._e()
                        })), 0) : h._e()]) : "dropdown" == t.type ? p("div", [p("select", {
                            staticClass: "chtl-custom-select",
                            attrs: {
                                disabled: h.inputFormDisabled
                            },
                            domProps: {
                                value: (null === (l = h.inputFormFieldValues[t.id]) || void 0 === l ? void 0 : l.id) || "none"
                            },
                            on: {
                                change: function(e) {
                                    return h.inputFormDropdownValueChanged(t.id, e)
                                }
                            }
                        }, [p("option", {
                            attrs: {
                                value: "none",
                                disabled: "",
                                selected: ""
                            }
                        }, [h._v(h._s(null === (n = h.translation) || void 0 === n || null === (o = n.form) || void 0 === o ? void 0 : o.dropdown_choose))]), h._v(" "), h._l(t.properties.choices, (function(t) {
                            return p("option", {
                                key: t.id,
                                domProps: {
                                    value: t.id
                                }
                            }, [h._v(h._s(t.label))])
                        }))], 2)]) : "checkbox" == t.type ? p("div", {
                            staticStyle: {
                                display: "flex",
                                "align-items": "center",
                                gap: "7px"
                            }
                        }, [p("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: h.inputFormFieldValues[t.id],
                                expression: "inputFormFieldValues[field.id]"
                            }],
                            style: {
                                cursor: h.inputFormDisabled ? "auto" : "pointer"
                            },
                            attrs: {
                                type: "checkbox",
                                disabled: h.inputFormDisabled
                            },
                            domProps: {
                                checked: Array.isArray(h.inputFormFieldValues[t.id]) ? h._i(h.inputFormFieldValues[t.id], null) > -1 : h.inputFormFieldValues[t.id]
                            },
                            on: {
                                change: [function(e) {
                                    var i = h.inputFormFieldValues[t.id],
                                        l = e.target,
                                        n = !!l.checked;
                                    if (Array.isArray(i)) {
                                        var o = h._i(i, null);
                                        l.checked ? o < 0 && h.$set(h.inputFormFieldValues, t.id, i.concat([null])) : o > -1 && h.$set(h.inputFormFieldValues, t.id, i.slice(0, o).concat(i.slice(o + 1)))
                                    } else h.$set(h.inputFormFieldValues, t.id, n)
                                }, function() {
                                    h.error.inputFormSubmission = null
                                }]
                            }
                        }), h._v(" "), null != h.getHTMLFromRichText(null == t ? void 0 : t.label) ? p("div", {
                            staticClass: "chtl-reset bot chtl-m-0",
                            domProps: {
                                innerHTML: h._s(h.getHTMLFromRichText(null == t ? void 0 : t.label))
                            }
                        }) : h._e()]) : p("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: h.inputFormFieldValues[t.id],
                                expression: "inputFormFieldValues[field.id]"
                            }],
                            staticClass: "input",
                            style: h.inputFieldGlobalCSS,
                            attrs: {
                                type: "text",
                                placeholder: "",
                                disabled: h.inputFormDisabled,
                                "aria-label": t.label
                            },
                            domProps: {
                                value: h.inputFormFieldValues[t.id]
                            },
                            on: {
                                keyup: function(t) {
                                    return !t.type.indexOf("key") && h._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : h.submitInputForm.apply(null, arguments)
                                },
                                input: [function(e) {
                                    e.target.composing || h.$set(h.inputFormFieldValues, t.id, e.target.value)
                                }, function(e) {
                                    return h.onInputFormField(t.id)
                                }]
                            }
                        }), h._v(" "), t.id in h.inputFormFieldErrors && null != h.inputFormFieldErrors[t.id] && h.inputFormFieldErrors[t.id].length > 0 ? p("div", {
                            staticClass: "chtl-error"
                        }, [h._v(h._s(h.inputFormFieldErrors[t.id]))]) : h._e()], 1)]) : h._e()
                    })), h._v(" "), p("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null != h.error.inputFormSubmission && h.error.inputFormSubmission.length > 0,
                            expression: "error.inputFormSubmission != null && error.inputFormSubmission.length > 0"
                        }],
                        staticClass: "chtl-error",
                        staticStyle: {
                            "margin-top": "10px"
                        }
                    }, [h._v(h._s(h.error.inputFormSubmission))]), h._v(" "), p("div", {
                        staticClass: "chtl-input-form-bock-submit-btn-wrapper",
                        staticStyle: {
                            width: "100%"
                        }
                    }, [p("button", {
                        staticClass: "chtl-btn-primary",
                        class: {
                            disabled: h.inputFormDisabled
                        },
                        style: h.submitButtonCSS,
                        attrs: {
                            type: "button",
                            disabled: h.inputFormDisabled,
                            "aria-disabled": h.inputFormDisabled ? "true" : "false"
                        },
                        on: {
                            click: h.submitInputForm
                        }
                    }, [h._v(h._s(h.translation.global.submit))])])], 2)]) : h.isCalBookingBlock ? p("div", [p("div", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "max-height": "450px",
                            overflow: "scroll"
                        },
                        attrs: {
                            id: h.calcomInlineBookElementId
                        }
                    })]) : h._e()]) : h._e(), h._v(" "), h.isAiKbResponseBlock && (h.showAiKbResponseSourcesEnabled && h.hasValidAiKbResponseSources && !h.aiKbAnswerNotFound || h.showAiKbRating && (!0 !== h.isAiKbResponseStreaming || 1 == h.isAiKbResponseStreaming && 1 == h.isAiKbResponseStreamingEnded)) ? p("div", {
                        style: h.sourcesWrapperCSS
                    }, [h.showAiKbRating ? p("div", {
                        staticClass: "chtl-msg-actions",
                        class: {
                            mob: h.isMobileViewport
                        }
                    }, [h.canCopyMessage ? p("button", {
                        staticClass: "chtl-icon chtl-msg-action",
                        attrs: {
                            type: "button",
                            "aria-label": (null === (n = h.translation) || void 0 === n || null === (o = n.global) || void 0 === o ? void 0 : o.copy) || "Copy message"
                        },
                        on: {
                            click: h.copyMessageClicked
                        }
                    }, [p("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [p("rect", {
                        attrs: {
                            width: "14",
                            height: "14",
                            x: "8",
                            y: "8",
                            rx: "2",
                            ry: "2"
                        }
                    }), p("path", {
                        attrs: {
                            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                        }
                    })])]) : h._e(), h._v(" "), h.showAiKbRating ? p("button", {
                        staticClass: "chtl-icon chtl-msg-action",
                        class: {
                            active: -1 === h.aiKbResponseRatingValue, disabled: null !== h.aiKbResponseRatingValue && -1 !== h.aiKbResponseRatingValue
                        },
                        attrs: {
                            type: "button",
                            disabled: null !== h.aiKbResponseRatingValue && -1 !== h.aiKbResponseRatingValue,
                            "aria-disabled": null !== h.aiKbResponseRatingValue && -1 !== h.aiKbResponseRatingValue ? "true" : "false",
                            "aria-pressed": -1 === h.aiKbResponseRatingValue ? "true" : "false",
                            "aria-label": (null === (r = h.translation) || void 0 === r || null === (s = r.global) || void 0 === s ? void 0 : s["thumbs down"]) || "Thumbs down"
                        },
                        on: {
                            click: function(t) {
                                return h.ratingSelected(-1)
                            }
                        }
                    }, [p("svg", {
                        staticClass: "lucide lucide-thumbs-down",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [p("path", {
                        attrs: {
                            d: "M17 14V2"
                        }
                    }), p("path", {
                        attrs: {
                            d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"
                        }
                    })])]) : h._e(), h._v(" "), h.showAiKbRating ? p("button", {
                        staticClass: "chtl-icon chtl-msg-action",
                        class: {
                            active: 1 === h.aiKbResponseRatingValue, disabled: null !== h.aiKbResponseRatingValue && 1 !== h.aiKbResponseRatingValue
                        },
                        attrs: {
                            type: "button",
                            disabled: null !== h.aiKbResponseRatingValue && 1 !== h.aiKbResponseRatingValue,
                            "aria-disabled": null !== h.aiKbResponseRatingValue && 1 !== h.aiKbResponseRatingValue ? "true" : "false",
                            "aria-pressed": 1 === h.aiKbResponseRatingValue ? "true" : "false",
                            "aria-label": (null === (a = h.translation) || void 0 === a || null === (u = a.global) || void 0 === u ? void 0 : u["thumbs up"]) || "Thumbs up"
                        },
                        on: {
                            click: function(t) {
                                return h.ratingSelected(1)
                            }
                        }
                    }, [p("svg", {
                        staticClass: "lucide lucide-thumbs-up",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [p("path", {
                        attrs: {
                            d: "M7 10v12"
                        }
                    }), p("path", {
                        attrs: {
                            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
                        }
                    })])]) : h._e()]) : h._e(), h._v(" "), h.showAiKbResponseSourcesEnabled && h.hasValidAiKbResponseSources && !h.aiKbAnswerNotFound ? p("div", [p("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "user-select": "none"
                        }
                    }, [p("button", {
                        staticClass: "chtl-sources-toggle",
                        attrs: {
                            type: "button",
                            "aria-expanded": h.aiKbSourcesVisible ? "true" : "false",
                            "aria-controls": "chtl-sources-panel-" + h.message.id,
                            "aria-label": (null === (c = h.translation) || void 0 === c || null === (d = c.chat_bubble) || void 0 === d ? void 0 : d.sources) || "Sources"
                        },
                        on: {
                            click: function(t) {
                                h.aiKbSourcesVisible = !h.aiKbSourcesVisible
                            }
                        }
                    }, [p("svg", {
                        style: h.sourceLabelCaretIconCSS,
                        attrs: {
                            width: "4",
                            viewBox: "0 0 52 101",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [p("path", {
                        attrs: {
                            d: "M0.170898 98.7374L0.170898 2.23739C0.170898 1.03739 1.6709 0.337389 2.5709 1.23739L50.7709 49.5374C51.2709 50.0374 51.2709 50.9374 50.7709 51.5374L2.5709 99.7374C1.6709 100.637 0.170898 99.9374 0.170898 98.7374Z",
                            fill: "#8b94a6"
                        }
                    })]), h._v(" "), p("div", {
                        style: h.sourceLabelCSS
                    }, [h._v(h._s(h.translation.chat_bubble.sources))])])]), h._v(" "), p("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: h.aiKbSourcesVisible,
                            expression: "aiKbSourcesVisible"
                        }],
                        staticStyle: {
                            "margin-top": "5px"
                        },
                        style: {
                            direction: h.languageDirection
                        },
                        attrs: {
                            id: "chtl-sources-panel-" + h.message.id
                        }
                    }, h._l(h.aiKbResponseSources, (function(t) {
                        return p("div", {
                            staticStyle: {
                                display: "inline-block",
                                "user-select": "none"
                            }
                        }, ["webpage" == t.type && (h.showSourcePageTitle || h.showSourcePageURL) ? p("a", {
                            staticClass: "chtl-source",
                            style: h.sourceWrapperCSS,
                            attrs: {
                                target: "_blank",
                                href: t.url
                            }
                        }, [h.showSourcePageTitle && null != t.title && t.title.length > 0 ? p("div", {
                            style: h.sourceTitleCSS
                        }, [h._v(h._s(t.title))]) : h._e(), h._v(" "), h.showSourcePageURL ? p("div", {
                            style: h.sourceURLCSS
                        }, [h._v(h._s(t.shortened_url))]) : h._e()]) : "document_url" == t.type && 1 == h.showSourceDocumentFilename && 1 == h.showSourceDocumentURL ? p("a", {
                            staticClass: "chtl-source",
                            style: h.sourceWrapperCSS,
                            attrs: {
                                target: "_blank",
                                href: t.url
                            }
                        }, [null != t.filename && t.filename.length > 0 ? p("div", {
                            style: h.sourceDocumentFilenameCSS
                        }, [h._v(h._s(t.filename))]) : h._e(), h._v(" "), null != t.shortened_url && t.shortened_url.length > 0 ? p("div", {
                            style: h.sourceURLCSS
                        }, [h._v(h._s(t.shortened_url))]) : h._e()]) : "document_url" == t.type && 0 == h.showSourceDocumentFilename && 1 == h.showSourceDocumentURL && null != t.shortened_url && t.shortened_url.length > 0 ? p("a", {
                            staticClass: "chtl-source",
                            style: h.sourceWrapperCSS,
                            attrs: {
                                target: "_blank",
                                href: t.url
                            }
                        }, [p("div", {
                            style: h.sourceURLCSS
                        }, [h._v(h._s(t.shortened_url))])]) : ("document" == t.type || "document_url" == t.type) && 1 == h.showSourceDocumentFilename && null != t.filename && t.filename.length > 0 ? p("div", {
                            staticClass: "chtl-source",
                            style: h.sourceWrapperCSS
                        }, [p("div", {
                            style: h.sourceDocumentFilenameOnlyCSS
                        }, [h._v(h._s(t.filename))])]) : h._e()])
                    })), 0)]) : h._e()]) : h._e()])])]) : h.roleId == h.AllRoleId.AGENT ? p("div", [p("div", {
                        style: h.chatBubbleWrapperCSS
                    }, [p("div", {
                        style: h.agentAvatarCSS
                    }, [h.showAgentAvatar && !h.userProfilePhotoUrl ? p("span", {
                        staticClass: "chtl-agent-avatar-initial"
                    }, [h._v(h._s(h.userInitial))]) : h._e()]), h._v(" "), p("div", {
                        style: h.chatBubbleCSS
                    }, [null != h.agentMessageText ? p("div", [p("div", {
                        ref: "text_el_to_copy",
                        staticClass: "chtl-reset bot",
                        domProps: {
                            innerHTML: h._s(h.agentMessageHTML)
                        }
                    })]) : h._e()])]), h._v(" "), h.showAgentAvatar && h.userName ? p("div", {
                        staticClass: "chtl-agent-name",
                        style: h.agentNameCSS
                    }, [h._v(h._s(h.userName))]) : h._e()]) : h.roleId == h.AllRoleId.USER ? p("div", {
                        style: h.chatBubbleWrapperCSS
                    }, [null != h.getUserMessageText() && null != h.getUserMessageText().text ? p("div", {
                        staticClass: "chtl-reset",
                        style: h.chatBubbleCSS,
                        domProps: {
                            innerHTML: h._s(h.getUserMessageText().text)
                        }
                    }) : h._e()]) : h.roleId == h.AllRoleId.SYSTEM ? p("div", {
                        style: h.chatBubbleWrapperCSS
                    }, [h.isErrorBlock ? p("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [p("div", {
                        staticClass: "chtl-chat-error-inline"
                    }, [p("div"), h._v(" "), p("div", {
                        staticClass: "chtl-chat-error-inline-icon"
                    }, [p("svg", {
                        staticClass: "lucide lucide-alert-circle",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            stroke: "#dc2626",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [p("circle", {
                        attrs: {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }
                    }), p("line", {
                        attrs: {
                            x1: "12",
                            x2: "12",
                            y1: "8",
                            y2: "12"
                        }
                    }), p("line", {
                        attrs: {
                            x1: "12",
                            x2: "12.01",
                            y1: "16",
                            y2: "16"
                        }
                    })])]), h._v(" "), p("div", [p("div", {
                        staticClass: "chtl-chat-error-inline-title"
                    }, [h._v(h._s(h.errorBlockTitle))]), h._v(" "), p("div", {
                        staticClass: "chtl-chat-error-inline-message"
                    }, [h._v(h._s(h.errorBlockMessage))])])]), h._v(" "), h.isErrorForAdmin ? p("div", {
                        staticStyle: {
                            "margin-top": "8px",
                            color: "#6b7280",
                            "font-size": "0.85em"
                        }
                    }, [h._v("\n                    * This error is visible to you and your team only.\n                ")]) : h._e()]) : 1 == h.isDebugMessage && null != h.debugMessageText && h.debugMessageText.length > 0 ? p("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [p("div", {
                        staticStyle: {
                            color: "#6b7280",
                            "font-size": "0.85em",
                            "text-align": "center"
                        }
                    }, [h._v("\n                    " + h._s(h.debugMessageText) + "\n                ")])]) : h._e()]) : h._e()])]) : "bot_thinking" == h.messageType ? p("div", [p("div", {
                        staticClass: "ch1fkl",
                        style: h.chatBubbleWrapperCSS
                    }, [p("div", {
                        style: h.chatAvatarImgCSS
                    }), h._v(" "), p("div", {
                        style: h.chatBubbleCSS
                    }, [h._m(0)])])]) : h._e()
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "ticontainer"
                    }, [e("div", {
                        staticClass: "tiblock"
                    }, [e("div", {
                        staticClass: "tidot"
                    }), t._v(" "), e("div", {
                        staticClass: "tidot"
                    }), t._v(" "), e("div", {
                        staticClass: "tidot"
                    })])])
                }], !1, null, "69f75696", null);
            e.default = c.exports
        },
        434: function(t, e, i) {
            "use strict";
            i.r(e);
            i(39), i(53), i(148), i(230);
            var l = {
                    name: "CarouselItemMessage",
                    props: {
                        item: {
                            required: !0
                        },
                        currentCarouselItemIndex: {
                            type: Number,
                            required: !0
                        },
                        carouselItemWidth: {
                            type: Number,
                            required: !0
                        }
                    },
                    computed: {
                        buttonCSS: function() {
                            return {
                                padding: "7px",
                                "border-radius": "5px",
                                color: "#000",
                                "font-size": "0.95em",
                                cursor: "pointer",
                                "background-color": "#f9fafb",
                                "text-decoration": "none",
                                "text-align": "center",
                                "user-select": "none",
                                border: "1px solid #e5e7eb",
                                display: "block",
                                width: "100%"
                            }
                        },
                        buttonContainerCSS: function() {
                            var t = {
                                gap: "5px",
                                display: "flex",
                                "flex-direction": "column"
                            };
                            return (this.hasButtons || this.hasDescription) && (t["margin-top"] = "10px"), t
                        },
                        imageUrl: function() {
                            var t;
                            if (null == this.item) return null;
                            var e = null === (t = this.item) || void 0 === t ? void 0 : t.image_url;
                            return null == e || 0 == (e = e.trim()).length ? null : e
                        },
                        title: function() {
                            var t;
                            if (null == this.item) return null;
                            var e = null === (t = this.item) || void 0 === t ? void 0 : t.title;
                            return null == e ? null : e
                        },
                        description: function() {
                            var t;
                            if (null == this.item) return null;
                            var e = null === (t = this.item) || void 0 === t ? void 0 : t.description;
                            return null == e ? null : e
                        },
                        hasButtons: function() {
                            var t, e;
                            return null != this.item && (null != (null === (t = this.item) || void 0 === t ? void 0 : t.buttons) && 0 != (null === (e = this.item) || void 0 === e ? void 0 : e.buttons.length))
                        },
                        hasImage: function() {
                            return null != this.item && (null != this.imageUrl && 0 != this.imageUrl.length)
                        },
                        hasTitle: function() {
                            return null != this.item && null != this.title
                        },
                        hasDescription: function() {
                            return null != this.item && null != this.description
                        }
                    },
                    methods: {
                        getButtonType: function(t) {
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.content;
                            if (null == e) return null;
                            var i = null == e ? void 0 : e.type;
                            return null == i ? null : i
                        },
                        getButtonLabel: function(t) {
                            return null == t ? null : null == t ? void 0 : t.label
                        },
                        getButtonUrl: function(t) {
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.content;
                            if (null == e) return null;
                            var i = null == e ? void 0 : e.type;
                            return null == i || "url" != i ? null : null == e ? void 0 : e.value
                        }
                    }
                },
                n = i(90),
                o = Object(n.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t.hasImage ? e("div", {
                        staticStyle: {
                            width: "100%"
                        },
                        style: {
                            "border-bottom": t.hasTitle || t.hasDescription || t.hasButtons ? "1px solid #e5e7eb" : "none"
                        }
                    }, [e("img", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            src: t.imageUrl
                        }
                    })]) : t._e(), t._v(" "), t.hasTitle || t.hasDescription || t.hasButtons ? e("div", {
                        staticStyle: {
                            padding: "15px",
                            gap: "5px",
                            display: "flex",
                            "flex-direction": "column"
                        }
                    }, [t.hasTitle ? e("div", {
                        staticStyle: {
                            color: "#1f2937",
                            "font-weight": "500",
                            "user-select": "none"
                        }
                    }, [t._v(t._s(t.title))]) : t._e(), t._v(" "), t.hasDescription ? e("div", {
                        staticStyle: {
                            color: "#6b7280",
                            "font-size": "0.95em",
                            "user-select": "none"
                        }
                    }, [t._v(t._s(t.description))]) : t._e(), t._v(" "), t.hasButtons ? e("div", {
                        style: t.buttonContainerCSS
                    }, t._l(t.item.buttons, (function(i) {
                        return e("div", {
                            key: null == i ? void 0 : i.id,
                            staticStyle: {
                                width: "100%",
                                display: "flex"
                            }
                        }, ["url" == t.getButtonType(i) && null != t.getButtonUrl(i) && 0 != t.getButtonUrl(i).length ? e("a", {
                            style: t.buttonCSS,
                            attrs: {
                                href: t.getButtonUrl(i),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }
                        }, [t._v(t._s(t.getButtonLabel(i)))]) : t._e()])
                    })), 0) : t._e()]) : t._e()])
                }), [], !1, null, null, null);
            e.default = o.exports
        },
        450: function(t, e, i) {
            var l = i(461);
            l.__esModule && (l = l.default), "string" == typeof l && (l = [
                [t.i, l, ""]
            ]), l.locals && (t.exports = l.locals);
            (0, i(115).default)("95eaa72a", l, !0, {
                sourceMap: !1
            })
        },
        452: function(t, e, i) {
            "use strict";
            i.r(e);
            i(26), i(149);
            var l = {
                    name: "VideoMessage",
                    props: {
                        url: {
                            type: String,
                            required: !0
                        }
                    },
                    mounted: function() {},
                    computed: {},
                    methods: {
                        isYouTubeVideoUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getYoutubeVideoId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        isYouTubeShortsUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getYoutubeShortsId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        getYouTubeEmbedUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return null;
                                if (0 == this.isYouTubeVideoUrl(t) && 0 == this.isYouTubeShortsUrl(t)) return null;
                                if (this.isYouTubeVideoUrl(t)) {
                                    var e = this.getYoutubeVideoId(t);
                                    return null == e || 0 == e.length ? null : "https://www.youtube.com/embed/".concat(e)
                                }
                                if (this.isYouTubeShortsUrl(t)) {
                                    var i = this.getYoutubeShortsId(t);
                                    return null == i || 0 == i.length ? null : "https://www.youtube.com/embed/".concat(i)
                                }
                                return null
                            } catch (t) {
                                return null
                            }
                        },
                        getYoutubeShortsId: function(t) {
                            try {
                                if (null == t || 0 == t.length) return null;
                                var e = t.match(/shorts\/([a-zA-Z0-9_-]+)/),
                                    i = e ? e[1] : null;
                                return null == i || 0 == i.length ? null : i
                            } catch (t) {
                                return null
                            }
                        },
                        getYoutubeVideoId: function(t) {
                            try {
                                var e = t.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                                return e ? e[1] : null
                            } catch (t) {
                                return null
                            }
                        },
                        isVimeoVideoUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getVimeoVideoId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        getVimeoVideoId: function(t) {
                            try {
                                if (null == t || 0 == t.length) return null;
                                var e = t.match(/^https?:\/\/(www\.)?vimeo\.com\/(\d+)(\/|\?.*)?$/);
                                return e ? e[2] : null
                            } catch (t) {
                                return null
                            }
                        },
                        isDailymotionVideoUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getDailymotionVideoId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        getDailymotionVideoId: function(t) {
                            try {
                                if (null == t || 0 == t.length) return null;
                                var e = t.match(/dailymotion\.com\/video\/([a-zA-Z0-9]+)/);
                                return e ? e[1] : null
                            } catch (t) {
                                return null
                            }
                        },
                        isIntagramPostUrl: function(t) {
                            try {
                                return /^https?:\/\/(www\.)?instagram\.com\/(p|reel)\/[a-zA-Z0-9-_]+\/?/.test(t)
                            } catch (t) {
                                return null
                            }
                        },
                        isTikTokVideoUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getTikTokVideoId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        getTikTokVideoId: function(t) {
                            try {
                                var e = t.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);
                                return e ? e[1] : null
                            } catch (t) {
                                return null
                            }
                        }
                    }
                },
                n = i(90),
                o = Object(n.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [t.isYouTubeVideoUrl(t.url) || t.isYouTubeShortsUrl(t.url) ? e("div", [e("iframe", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "border-radius": "5px",
                            "min-height": "250px"
                        },
                        attrs: {
                            src: t.getYouTubeEmbedUrl(t.url),
                            title: "YouTube video player",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowfullscreen: "",
                            mozallowfullscreen: "",
                            webkitallowfullscreen: ""
                        }
                    })]) : t.isVimeoVideoUrl(t.url) ? e("div", [e("iframe", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "border-radius": "5px",
                            "min-height": "250px"
                        },
                        attrs: {
                            src: "https://player.vimeo.com/video/".concat(t.getVimeoVideoId(t.url), "?h=d7e7506c10&color=ffffff&title=0&byline=0&portrait=0&badge=0"),
                            frameborder: "0",
                            allow: "autoplay; fullscreen; picture-in-picture",
                            allowfullscreen: "",
                            mozallowfullscreen: "",
                            webkitallowfullscreen: ""
                        }
                    })]) : t.isTikTokVideoUrl(t.url) ? e("div", [e("blockquote", {
                        staticClass: "tiktok-embed",
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            cite: t.url,
                            "data-video-id": t.getTikTokVideoId(t.url)
                        }
                    }, [e("section")]), t._v(" "), e("script", {
                        attrs: {
                            async: "",
                            src: "https://www.tiktok.com/embed.js"
                        }
                    })]) : t.isDailymotionVideoUrl(t.url) ? e("div", [e("iframe", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "border-radius": "5px",
                            "min-height": "250px",
                            overflow: "hidden"
                        },
                        attrs: {
                            frameborder: "0",
                            type: "text/html",
                            src: "https://www.dailymotion.com/embed/video/".concat(t.getDailymotionVideoId(t.url)),
                            allowfullscreen: "",
                            mozallowfullscreen: "",
                            webkitallowfullscreen: "",
                            allow: "autoplay"
                        }
                    })]) : e("div", [e("video", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "border-radius": "5px"
                        },
                        attrs: {
                            disablePictureInPicture: "",
                            controls: ""
                        }
                    }, [e("source", {
                        attrs: {
                            src: t.url,
                            type: "video/mp4"
                        }
                    }), t._v("\n            Your browser does not support the video tag.\n        ")])])])
                }), [], !1, null, null, null);
            e.default = o.exports
        },
        453: function(t, e, i) {
            "use strict";
            i.r(e);
            i(148);
            var l = i(434),
                n = {
                    name: "CarouselMessage",
                    props: {
                        data: {
                            required: !0
                        },
                        currentCarouselItemIndex: {
                            type: Number,
                            required: !0
                        },
                        carouselItemWidth: {
                            type: Number,
                            required: !0
                        }
                    },
                    components: {
                        CarouselItemMessage: l.default
                    },
                    methods: {}
                },
                o = i(90),
                r = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "flex-start"
                        },
                        style: {
                            width: "".concat(t.data.items.length * t.carouselItemWidth, "px"),
                            transform: 0 == t.currentCarouselItemIndex ? "translateX(-".concat(t.currentCarouselItemIndex * t.carouselItemWidth, "px)") : "translateX(-".concat(t.currentCarouselItemIndex * t.carouselItemWidth + 15 * t.currentCarouselItemIndex, "px)"),
                            transition: "transform 0.3s ease-in-out"
                        }
                    }, [e("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "flex-start",
                            gap: "15px",
                            "flex-grow": "1",
                            "background-color": "white"
                        }
                    }, t._l(t.data.items, (function(i, l) {
                        return e("div", {
                            key: null == i ? void 0 : i.id,
                            staticStyle: {
                                overflow: "hidden",
                                "border-radius": "10px",
                                border: "1px solid #e5e7eb",
                                "background-color": "#fff",
                                display: "flex",
                                "flex-direction": "column",
                                "flex-shrink": "0"
                            },
                            style: {
                                width: "".concat(t.carouselItemWidth, "px")
                            }
                        }, [e("CarouselItemMessage", {
                            attrs: {
                                item: i,
                                currentCarouselItemIndex: t.currentCarouselItemIndex,
                                carouselItemWidth: t.carouselItemWidth
                            }
                        })], 1)
                    })), 0)])
                }), [], !1, null, null, null);
            e.default = r.exports
        },
        460: function(t, e, i) {
            "use strict";
            i(450)
        },
        461: function(t, e, i) {
            var l = i(114)((function(t) {
                return t[1]
            }));
            l.push([t.i, ".chtl-msg-actions[data-v-69f75696]{align-items:center;display:flex;gap:10px;height:0;justify-content:left;opacity:0;transition:opacity .3s ease,height .5s ease}.chtl-msg-actions[data-v-69f75696],.chtl-msg-actions.mob[data-v-69f75696]{height:auto;opacity:1}.chtl-msg-action[data-v-69f75696]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.chtl-bot-bubble-message-wrapper:hover .chtl-msg-actions[data-v-69f75696]{height:auto;opacity:1}.chtl-msg-actions .chtl-icon svg[data-v-69f75696]{stroke:#9ca3af;stroke-width:2.2px;cursor:pointer;display:block;height:12px;transition:stroke .2s ease;width:12px}.chtl-msg-actions .chtl-icon svg[data-v-69f75696]:hover{stroke:var(--chtl-primary-color)}.chtl-msg-actions .chtl-msg-action.chtl-icon.active svg[data-v-69f75696]{stroke:var(--chtl-primary-color);cursor:auto}.chtl-msg-actions .chtl-msg-action.chtl-icon.disabled svg[data-v-69f75696]{stroke:#d1d5db;cursor:auto}.chtl-msg-actions .chtl-seperator[data-v-69f75696]{background:#e5e7eb;display:inline-block;height:12px;margin:0;width:1px}", ""]), l.locals = {}, t.exports = l
        }
    }
]);