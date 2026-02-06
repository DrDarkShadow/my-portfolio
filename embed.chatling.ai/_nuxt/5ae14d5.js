(window.webpackJsonp = window.webpackJsonp || []).push([
    [30, 10, 13], {
        384: function(t, e, n) {
            "use strict";
            (function(t) {
                var i = n(12),
                    o = n(426),
                    r = n(11),
                    l = n(387),
                    a = n(396),
                    s = (n(52), n(148), n(16), n(29), n(376), n(230), n(72), n(51), n(32), n(231), n(30), n(388), n(233), n(26), n(411), n(40), n(389), n(39), n(53), n(421)),
                    u = n(375);
                e.a = {
                    props: {
                        previewTitleBarHeight: {
                            type: Number,
                            default: 0
                        },
                        placed_on: {
                            type: String,
                            default: "public_embed"
                        },
                        external_gid: {
                            type: String,
                            default: null
                        },
                        internal_gid: {
                            type: String,
                            default: null
                        },
                        forced_chat_open: {
                            type: Boolean,
                            default: !1
                        },
                        force_attention_grabber_to_open: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    emits: ["chatbotLoaded", "chatbotLoadingError"],
                    components: {
                        ChatbotInterface: s.default
                    },
                    data: function() {
                        return {
                            customRateLimitErrorMessage: null,
                            csatSurveyDisplayToggler: !1,
                            hasIp: !1,
                            fetchVisitorIpMessageCSRFToken: null,
                            allowSpeechToTextInput: !1,
                            maxActiveInputAudioRecordingDurationSeconds: 120,
                            displayType: "floating",
                            page_url: null,
                            page_title: null,
                            device_type: null,
                            browser: null,
                            os: null,
                            variablesReceivedOnInit: null,
                            is_mobile_viewport: !1,
                            aiStreamRequests: [],
                            scrollToBottomTimeout: null,
                            chatbotInitialized: !1,
                            displayStartNewChatButton: !1,
                            chatEndedAt: null,
                            chatStatusId: null,
                            startChatAxiosRequest: null,
                            setupChatbotAxiosRequest: null,
                            continueChatAxiosRequest: null,
                            refreshChatAxiosRequest: null,
                            endChatAxiosRequest: null,
                            startChatbotThinkingTimeout: null,
                            startChatbotThinkingTimeoutDuration: 500,
                            focusInputFieldFlag: !1,
                            clearUserInputFieldFlag: !1,
                            stream: !0,
                            scroll_to_bottom: !1,
                            loading: {
                                chatbot: !0,
                                newChat: !1,
                                refreshChat: !1,
                                endChat: !1
                            },
                            error: {
                                chat: null,
                                load: null,
                                newChat: null,
                                endChat: null
                            },
                            chat_error_timeout: null,
                            chatbot_loaded: !1,
                            chatbot_thinking: !1,
                            disable_user_input: !1,
                            interface_language: "en",
                            interfaceLanguageOverride: null,
                            translated_texts: [],
                            settings: null,
                            appearance: null,
                            texts: null,
                            bot_icon: {
                                url: null
                            },
                            chat_icon: {
                                url: null,
                                type: null
                            },
                            header_icon: {
                                enabled: !1,
                                url: null,
                                roundness: null
                            },
                            satisfaction_survey: null,
                            allow_download_transcript: !1,
                            predefined_queries: [],
                            chat_id: null,
                            customer_uuid: null,
                            user_locale: null,
                            is_returning_user: !1,
                            conversation: [],
                            active_input: null,
                            activeInputMessageId: null,
                            flow: {
                                components: [],
                                current_component_index: null,
                                output_delay: 1e3
                            },
                            scrollIntervals: {},
                            AI_STREAMING_INTERVAL_ID: "ai_streaming",
                            isUserScrolling: !1,
                            isStartingNewChat: !1,
                            keepUserAtBottomOfChat: !0
                        }
                    },
                    beforeDestroy: function() {
                        var t = this;
                        window.removeEventListener("message", this.onMessageEvent), this.cancelSetupChatbotRequest(), this.cancelContinueChatRequest(), this.cancelStartChatRequest(), this.cancelRefreshChatRequest(), this.cancelEndChatRequest(), this.endAllAiKbStreaming(), this.scrollIntervals && Object.values(this.scrollIntervals).forEach((function(e) {
                            t.stopContinuousScrolling(e)
                        }))
                    },
                    mounted: function() {
                        window.addEventListener("message", this.onMessageEvent), window.parent.postMessage({
                            event_id: "chtl_loaded",
                            data: {}
                        }, "*")
                    },
                    watch: {
                        activeInputMessageId: {
                            handler: function(t, e) {},
                            immediate: !0
                        },
                        external_gid: {
                            handler: function(t, e) {
                                null != t && t != e && (this.isPublicChat || (this.chatbotInitialized = !0), this.loadChatbot(!0))
                            },
                            immediate: !0
                        }
                    },
                    methods: {
                        setCookie: function(t, e, n) {
                            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Strict",
                                o = "";
                            if (n) {
                                var r = new Date;
                                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), o = ";expires=" + r.toUTCString()
                            }
                            var l = null;
                            try {
                                null != (l = window.location.hostname) && 0 != l.length || (l = location.hostname)
                            } catch (t) {}
                            null != l && l.length > 0 && (document.cookie = t + "=" + (e || "") + o + ";path=/;domain=." + l + ";SameSite=" + i)
                        },
                        getCustomerUUIDCookieName: function() {
                            var t = null;
                            return this.isBuilderPreview ? t = "chtl_cuid_preview_" + this.external_gid : this.isSharingPage && (t = "chtl_cuid_sharing_" + this.external_gid), t
                        },
                        saveCustomerUUIDToCookie: function(t) {
                            if (this.isBuilderPreview || this.isSharingPage) {
                                var e = btoa(t);
                                this.setCookie(this.getCustomerUUIDCookieName(), e, 365)
                            }
                        },
                        getCustomerUUIDFromCookie: function() {
                            try {
                                var t = this.getCustomerUUIDCookieName();
                                if (null == t) return null;
                                var e = this.getCookie(t);
                                return null == e ? null : atob(e)
                            } catch (t) {
                                return null
                            }
                        },
                        getCookie: function(t) {
                            if (null == t || 0 == t.length) return null;
                            if (0 == (t = t.trim()).length) return null;
                            for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i++) {
                                for (var o = n[i];
                                    " " === o.charAt(0);) o = o.substring(1);
                                if (0 === o.indexOf(e)) return o.substring(e.length, o.length)
                            }
                            return null
                        },
                        userScrollingChanged: function(t) {
                            this.isUserScrolling = t, this.isUserNearBottomOfChat() ? this.keepUserAtBottomOfChat = !0 : this.keepUserAtBottomOfChat = !1
                        },
                        getChatInterfaceRef: function() {
                            var t = this.$refs.chat_interface_component;
                            if (null == t) return null;
                            var e = t.$refs.chat_interface;
                            return null == e ? null : e
                        },
                        onMessageEvent: function(t) {
                            var e = this;
                            try {
                                var n, i;
                                if (null == t) return;
                                if (null == (null == t ? void 0 : t.data)) return;
                                if (null == (null == t || null === (n = t.data) || void 0 === n ? void 0 : n.event_id)) return;
                                var o = null == t || null === (i = t.data) || void 0 === i ? void 0 : i.event_id;
                                if ("is_mobile" === o) e.is_mobile_viewport = !0;
                                else if ("chtl_chatbot_init" == o) {
                                    var r, l, a, s, u, c, d, h, p, v, g, f, m = null == t || null === (r = t.data) || void 0 === r ? void 0 : r.lcg,
                                        _ = null == t || null === (l = t.data) || void 0 === l ? void 0 : l.cuid,
                                        b = null == t || null === (a = t.data) || void 0 === a ? void 0 : a.display_type,
                                        C = null == t || null === (s = t.data) || void 0 === s ? void 0 : s.locale,
                                        y = null == t || null === (u = t.data) || void 0 === u ? void 0 : u.ru,
                                        S = null == t || null === (c = t.data) || void 0 === c ? void 0 : c.page_url,
                                        x = null == t || null === (d = t.data) || void 0 === d ? void 0 : d.page_title,
                                        w = null == t || null === (h = t.data) || void 0 === h ? void 0 : h.device_type,
                                        k = null == t || null === (p = t.data) || void 0 === p ? void 0 : p.browser,
                                        T = null == t || null === (v = t.data) || void 0 === v ? void 0 : v.os,
                                        I = null == t || null === (g = t.data) || void 0 === g ? void 0 : g.variables,
                                        M = null == t || null === (f = t.data) || void 0 === f ? void 0 : f.language;
                                    null != m && m.length > 0 && (e.chat_id = m), null != _ && _.length > 0 && (e.customer_uuid = _), null != b && b.length > 0 && (e.displayType = b), null != C && C.length > 0 && (e.user_locale = C), null != y && (e.is_returning_user = y), null != S && S.length > 0 && (e.page_url = S), null != x && x.length > 0 && (e.page_title = x), null != w && w.length > 0 && (e.device_type = w), null != k && k.length > 0 && (e.browser = k), null != T && T.length > 0 && (e.os = T), null != I && (e.variablesReceivedOnInit = I), null != M && M.length > 0 && (e.interfaceLanguageOverride = M), e.chatbotInitialized = !0, e.loadChatbot(!0)
                                } else if ("chtl_chat_widget_opened" == o) null == this.chat_id || 0 == this.chat_id.length ? this.startNewChat() : this.scrollToBottomWithDelay(!1, 150);
                                else if ("chtl_gvia_fetched" == o) {
                                    var E, A, R, B, F = null == t || null === (E = t.data) || void 0 === E || null === (A = E.data) || void 0 === A ? void 0 : A.t,
                                        D = null == t || null === (R = t.data) || void 0 === R || null === (B = R.data) || void 0 === B ? void 0 : B.c;
                                    if (null == D || 0 == D.length) return;
                                    if (F != this.fetchVisitorIpMessageCSRFToken) return;
                                    try {
                                        var L = atob(D);
                                        null != L && L.length > 0 && (this.hasIp || this.saveVisitorIpForChat(L))
                                    } catch (t) {}
                                }
                            } catch (t) {}
                        },
                        clearUserInputField: function() {
                            this.clearUserInputFieldFlag = !this.clearUserInputFieldFlag
                        },
                        focusUserInputField: function() {
                            this.focusInputFieldFlag = !this.focusInputFieldFlag
                        },
                        hasValidDynamicProperties: function(t) {
                            return null != t && ("value" in t && "type" in t)
                        },
                        isValidComponent: function(t) {
                            var e = null == t ? void 0 : t.type;
                            if (null == e) return !1;
                            if (e == u.d.AI.RESPONSE) {
                                var n = null == t ? void 0 : t.data;
                                if (null == n) return !1;
                                var i = null == n ? void 0 : n.response_source;
                                if (null != u.a)
                                    if (i === u.a.KB)
                                        if (null == n ? void 0 : n.stream) return !0
                            }
                            return this.$chatMessageBlockHasData(t, u.d, u.a)
                        },
                        buttonBlockClicked: function(t) {},
                        showChatError: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3;
                            this.error.chat = t, null != this.chat_error_timeout && clearTimeout(this.chat_error_timeout), this.chat_error_timeout = setTimeout((function() {
                                e.error.chat = null
                            }), n)
                        },
                        clearChatError: function() {
                            this.error.chat = null, null != this.chat_error_timeout && clearTimeout(this.chat_error_timeout)
                        },
                        displayChatbotThinkingWithDelay: function() {
                            var t = this;
                            clearTimeout(this.startChatbotThinkingTimeout), this.startChatbotThinkingTimeout = setTimeout((function() {
                                t.chatbot_thinking = !0
                            }), this.startChatbotThinkingTimeoutDuration)
                        },
                        clearChatbotThinkingDelay: function() {
                            clearTimeout(this.startChatbotThinkingTimeout)
                        },
                        cancelEndChatRequest: function() {
                            try {
                                null != this.endChatAxiosRequest && this.endChatAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        cancelRefreshChatRequest: function() {
                            try {
                                null != this.refreshChatAxiosRequest && this.refreshChatAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        cancelStartChatRequest: function() {
                            try {
                                null != this.startChatAxiosRequest && this.startChatAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        cancelSetupChatbotRequest: function() {
                            try {
                                null != this.setupChatbotAxiosRequest && this.setupChatbotAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        cancelContinueChatRequest: function() {
                            try {
                                null != this.continueChatAxiosRequest && this.continueChatAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        refreshChat: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n, i, o, r, l, a, s, u, c;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (null != t.chat_id && 0 != t.chat_id.length) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!t.loading.refreshChat) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (null != t.external_gid && 0 != t.external_gid.length) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            if (t.error.refreshChat = null, t.loading.refreshChat = !0, n = {
                                                    cgid: t.chat_id,
                                                    egid: t.external_gid,
                                                    cuid: t.customer_uuid
                                                }, t.refreshChatAxiosRequest = t.$axios.CancelToken.source(), null != (i = t.apiEndpointPath)) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 13:
                                            return e.prev = 13, t.loading.chatbot = !0, e.next = 17, t.$axios.post("".concat(i, "/chat/refresh"), n, {
                                                cancelToken: t.refreshChatAxiosRequest.token
                                            });
                                        case 17:
                                            if (s = e.sent, t.refreshChatAxiosRequest = null, t.loading.refreshChat = !1, null != s) {
                                                e.next = 23;
                                                break
                                            }
                                            return t.showChatError("Error refreshing chat (Code: 2295)"), e.abrupt("return");
                                        case 23:
                                            if (null != (u = null !== (o = s.data) && void 0 !== o ? o : null)) {
                                                e.next = 27;
                                                break
                                            }
                                            return t.showChatError("Error refreshing chat (Code: 2296)"), e.abrupt("return");
                                        case 27:
                                            if (0 != u.success) {
                                                e.next = 30;
                                                break
                                            }
                                            return t.showChatError(u.data), e.abrupt("return");
                                        case 30:
                                            u = null === (r = u) || void 0 === r ? void 0 : r.data, c = null === (l = u) || void 0 === l ? void 0 : l.messages, t.chatEndedAt = null === (a = u) || void 0 === a ? void 0 : a.ended_at, t.loadChatFromMessages(c), e.next = 44;
                                            break;
                                        case 36:
                                            return e.prev = 36, e.t0 = e.catch(13), t.refreshChatAxiosRequest = null, t.loading.refreshChat = !1, t.showChatError("Error refreshing chat (Code: 2297)"), e.abrupt("return");
                                        case 44:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [13, 36]
                                ])
                            })))()
                        },
                        displayCSATSurvey: function() {
                            this.csatSurveyDisplayToggler = !this.csatSurveyDisplayToggler
                        },
                        endChat: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n, i, o, r, l, a, s, u, c;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (null != t.chat_id && 0 != t.chat_id.length) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!t.loading.endChat) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (null != t.external_gid && 0 != t.external_gid.length) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            if (t.loading.endChat = !0, e.prev = 7, l = {
                                                    cgid: t.chat_id,
                                                    egid: t.external_gid,
                                                    cuid: t.customer_uuid
                                                }, t.endChatAxiosRequest = t.$axios.CancelToken.source(), null != (a = t.apiEndpointPath)) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 13:
                                            return e.next = 15, t.$axios.post("".concat(a, "/chat/end"), l, {
                                                cancelToken: t.endChatAxiosRequest.token
                                            });
                                        case 15:
                                            if (s = e.sent, t.endChatAxiosRequest = null, t.loading.endChat = !1, null != s) {
                                                e.next = 21;
                                                break
                                            }
                                            return t.showChatError("Error refreshing chat (Code: 2299)"), e.abrupt("return");
                                        case 21:
                                            if (null != (u = null !== (n = s.data) && void 0 !== n ? n : null)) {
                                                e.next = 25;
                                                break
                                            }
                                            return t.showChatError("Error refreshing chat (Code: 2300)"), e.abrupt("return");
                                        case 25:
                                            if (0 != u.success) {
                                                e.next = 28;
                                                break
                                            }
                                            return t.showChatError(u.data), e.abrupt("return");
                                        case 28:
                                            u = null === (i = u) || void 0 === i ? void 0 : i.data, t.chatEndedAt = null === (o = u) || void 0 === o ? void 0 : o.ended_at, c = null === (r = u) || void 0 === r ? void 0 : r.messages, null == t.conversation && (t.conversation = []), null != c && c.length > 0 && (t.conversation = t.conversation.concat(c)), t.displayCSATSurvey(), t.displayStartNewChatButtonIfChatEnded(), e.next = 45;
                                            break;
                                        case 37:
                                            return e.prev = 37, e.t0 = e.catch(7), t.endChatAxiosRequest = null, t.loading.endChat = !1, t.showChatError("Error ending chat (Code: 2301)"), e.abrupt("return");
                                        case 45:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [7, 37]
                                ])
                            })))()
                        },
                        loadChatFromMessages: function(t) {
                            if (null != t)
                                if (0 == t.length) this.conversation = [];
                                else {
                                    this.conversation = t;
                                    var e = t[t.length - 1],
                                        n = null == e ? void 0 : e.component;
                                    null != n && (null == n ? void 0 : n.category) == u.c.INPUT && 1 != (null == n ? void 0 : n.submitted) && (this.conversation.pop(), this.setUpNewFlow([n])), this.scrollToBottomWithDelay(), this.displayStartNewChatButtonIfChatEnded()
                                }
                        },
                        loadChatbot: function(t) {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var i, o, r, l, a, s, u, c, d, h, p, v, g, f, m, _, b, C, y, S, x, w, k, T, I, M, E, A, R, B, F;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if ((e.isBuilderPreview || e.isSharingPage) && (null != e.customer_uuid && 0 != e.customer_uuid.length || (e.customer_uuid = e.getCustomerUUIDFromCookie()), null != e.user_locale && 0 != e.user_locale.length || (e.user_locale = window.navigator.language)), t || !e.loading.chatbot) {
                                                n.next = 3;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 3:
                                            if (e.chatbotInitialized) {
                                                n.next = 5;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 5:
                                            if (null != e.external_gid && 0 != e.external_gid.length) {
                                                n.next = 7;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 7:
                                            if (e.error.load = null, i = {
                                                    cgid: e.chat_id,
                                                    egid: e.external_gid,
                                                    cuid: e.customer_uuid,
                                                    ulc: e.user_locale,
                                                    ru: e.is_returning_user,
                                                    page_url: e.page_url,
                                                    page_title: e.page_title,
                                                    device_type: e.device_type,
                                                    browser: e.browser,
                                                    os: e.os,
                                                    ol: e.interfaceLanguageOverride
                                                }, e.setupChatbotAxiosRequest = e.$axios.CancelToken.source(), null != (o = e.apiEndpointPath)) {
                                                n.next = 13;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 13:
                                            return n.prev = 13, e.loading.chatbot = !0, n.next = 17, e.$axios.post("".concat(o), i, {
                                                cancelToken: e.setupChatbotAxiosRequest.token
                                            });
                                        case 17:
                                            if (d = n.sent, e.setupChatbotAxiosRequest = null, e.loading.chatbot = !1, null != d) {
                                                n.next = 26;
                                                break
                                            }
                                            return "An error occurred (Code: 2045)", e.$emit("chatbotLoadingError", "An error occurred (Code: 2045)"), e.chatbot_loaded = !1, e.chatbotLoaded(), n.abrupt("return");
                                        case 26:
                                            if (null != (h = null !== (r = d.data) && void 0 !== r ? r : null)) {
                                                n.next = 33;
                                                break
                                            }
                                            return "An error occurred (Code: 2046)", e.$emit("chatbotLoadingError", "An error occurred (Code: 2046)"), e.chatbot_loaded = !1, e.chatbotLoaded(), n.abrupt("return");
                                        case 33:
                                            if (0 != h.success) {
                                                n.next = 45;
                                                break
                                            }
                                            return v = h.data, g = null === (p = h) || void 0 === p ? void 0 : p.code, f = null, null != v && v.length > 0 ? (f = v, e.$emit("chatbotLoadingError", f)) : null != g && 4001 === g && (f = "Chatbot not found. (CODE: 4005)", e.$emit("chatbotLoadingError", f)), null == f && (f = "An error occurred (Code: 4006)"), e.error.load = f, e.$emit("chatbotLoadingError", f), e.chatbot_loaded = !1, e.chatbotLoaded(), n.abrupt("return");
                                        case 45:
                                            h = null === (l = h) || void 0 === l ? void 0 : l.data, m = null === (a = h) || void 0 === a ? void 0 : a.chatbot, _ = null === (s = h) || void 0 === s ? void 0 : s.chat, null != (null === (u = h) || void 0 === u ? void 0 : u.cuid) && (null === (c = h) || void 0 === c ? void 0 : c.cuid.length) > 0 && (null != e.customer_uuid && 0 != e.customer_uuid.length || (e.saveCustomerUUIDToCookie(null === (b = h) || void 0 === b ? void 0 : b.cuid), e.customer_uuid = null === (C = h) || void 0 === C ? void 0 : C.cuid)), null != m ? (e.translated_texts = null === (y = h) || void 0 === y ? void 0 : y.texts, e.appearance = null == m ? void 0 : m.appearance, e.settings = null == m ? void 0 : m.settings, e.texts = null == m ? void 0 : m.texts, I = null == m ? void 0 : m.predefined_queries, null != (M = null == m ? void 0 : m.interface_language) && M.length > 0 && (e.interface_language = M), null != I && I.length > 0 ? e.predefined_queries = I : e.predefined_queries = [], e.bot_icon = null == m ? void 0 : m.bot_icon, e.chat_icon.url = null == m || null === (S = m.chat_icon) || void 0 === S ? void 0 : S.url, e.chat_icon.type = null == m || null === (x = m.chat_icon) || void 0 === x ? void 0 : x.type, e.header_icon.url = null == m || null === (w = m.header_icon) || void 0 === w ? void 0 : w.url, e.header_icon.enabled = null == m || null === (k = m.header_icon) || void 0 === k ? void 0 : k.enabled, e.header_icon.roundness = null == m || null === (T = m.header_icon) || void 0 === T ? void 0 : T.roundness, e.chatbot_loaded = !0, e.satisfaction_survey = null == m ? void 0 : m.satisfaction_survey, e.allow_download_transcript = null == m ? void 0 : m.allow_user_download_transcript, E = null == m ? void 0 : m.mrd, A = null == m ? void 0 : m.allow_stt, null != E && E > 0 && (e.maxActiveInputAudioRecordingDurationSeconds = E), null != A && (e.allowSpeechToTextInput = A), null != _ ? (R = null == _ ? void 0 : _.messages, B = null == _ ? void 0 : _.id, e.hasIp = null == _ ? void 0 : _.hia, null != B && B.length > 0 && null != R && R.length > 0 ? (e.chat_id = B, e.chatEndedAt = null == _ ? void 0 : _.ended_at, e.loadChatFromMessages(R), e.isPublicChat && !e.hasIp && e.fetchVisitorIp()) : (e.chat_id = null, e.startNewChat())) : e.startNewChat(), e.chatbotLoaded()) : (F = "An error occurred (Code: 4007)", e.error.load = F, e.$emit("chatbotLoadingError", F), e.chatbot_loaded = !1, e.chatbotLoaded()), n.next = 62;
                                            break;
                                        case 52:
                                            return n.prev = 52, n.t0 = n.catch(13), e.setupChatbotAxiosRequest = null, e.loading.chatbot = !1, e.$emit("chatbotLoadingError", "An error occurred (Code: 2047)"), e.chatbot_loaded = !1, e.chatbotLoaded(), n.abrupt("return");
                                        case 62:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [13, 52]
                                ])
                            })))()
                        },
                        chatbotLoaded: function() {
                            this.$emit("chatbotLoaded", this.chatbot_loaded), window.parent.postMessage({
                                event_id: "chtl_chatbot_loaded",
                                data: {}
                            }, "*")
                        },
                        fetchVisitorIp: function() {
                            this.fetchVisitorIpMessageCSRFToken = this.$generateUUID(), window.parent.postMessage({
                                event_id: "chtl_gvia",
                                data: {
                                    t: this.fetchVisitorIpMessageCSRFToken
                                }
                            }, "*")
                        },
                        saveVisitorIpForChat: function(e) {
                            var n = this;
                            return Object(r.a)(regeneratorRuntime.mark((function i() {
                                var o, r, l, a, s;
                                return regeneratorRuntime.wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            if (null != e) {
                                                i.next = 4;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 4:
                                            if (null != n.chat_id) {
                                                i.next = 6;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 6:
                                            return o = t.from(e).toString("base64"), r = {
                                                cgid: n.chat_id,
                                                egid: n.external_gid,
                                                eia: o
                                            }, i.prev = 8, i.next = 11, n.$axios.post("".concat(n.apiEndpointPath, "/chat/siac"), r);
                                        case 11:
                                            if (null != (a = i.sent)) {
                                                i.next = 15;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 15:
                                            if (null != (s = null !== (l = a.data) && void 0 !== l ? l : null)) {
                                                i.next = 19;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 19:
                                            if (0 != s.success) {
                                                i.next = 22;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 22:
                                            n.hasIp = !0, i.next = 28;
                                            break;
                                        case 25:
                                            i.prev = 25, i.t0 = i.catch(8);
                                        case 28:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i, null, [
                                    [8, 25]
                                ])
                            })))()
                        },
                        startNewChat: function() {
                            this.loading.newChat || (this.endAllAiKbStreaming(), this.loading.newChat = !1, this.loading.refreshChat = !1, this.loading.endChat = !1, this.chat_id = null, this.conversation = [], this.active_input = null, this.activeInputMessageId = null, this.flow.components = [], this.flow.current_component_index = null, this.disable_user_input = !1, this.chatbot_thinking = !1, this.clearChatError(), this.error.newChat = null, this.error.chat = null, this.clearChatbotThinkingDelay(), this.startChatbotThinkingTimeout = null, this.cancelContinueChatRequest(), this.cancelStartChatRequest(), this.cancelRefreshChatRequest(), this.cancelEndChatRequest(), this.error.refreshChat = null, this.chatEndedAt = null, this.chatStatusId = null, this.displayStartNewChatButton = !1, this.createChat())
                        },
                        createChat: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n, i, o, r, l, a, s, u, c, d, h, p, v;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.loading.newChat = !0, t.error.newChat = null, n = {
                                                    egid: t.external_gid,
                                                    cuid: t.customer_uuid,
                                                    ulc: t.user_locale,
                                                    page_url: t.page_url,
                                                    page_title: t.page_title,
                                                    device_type: t.device_type,
                                                    browser: t.browser,
                                                    os: t.os,
                                                    vroi: t.variablesReceivedOnInit
                                                }, t.startChatAxiosRequest = t.$axios.CancelToken.source(), t.hasIp = !1, null != (i = t.apiEndpointPath)) {
                                                e.next = 10;
                                                break
                                            }
                                            return t.error.newChat = "An error occurred (Code: 2291)", t.loading.newChat = !1, e.abrupt("return");
                                        case 10:
                                            return e.prev = 10, e.next = 13, t.$axios.post("".concat(i, "/chat/new"), n, {
                                                cancelToken: t.startChatAxiosRequest.token
                                            });
                                        case 13:
                                            if (s = e.sent, t.startChatAxiosRequest = null, t.loading.newChat = !1, null != s) {
                                                e.next = 19;
                                                break
                                            }
                                            return t.error.newChat = "An error occurred (Code: 2292)", e.abrupt("return");
                                        case 19:
                                            if (null != (u = null !== (o = s.data) && void 0 !== o ? o : null)) {
                                                e.next = 23;
                                                break
                                            }
                                            return t.error.newChat = "An error occurred (Code: 2293)", e.abrupt("return");
                                        case 23:
                                            if (0 != u.success) {
                                                e.next = 27;
                                                break
                                            }
                                            return c = u.data, t.error.newChat = c, e.abrupt("return");
                                        case 27:
                                            u = null === (r = u) || void 0 === r ? void 0 : r.data, d = null === (l = u) || void 0 === l ? void 0 : l.flow, null != (h = null === (a = u) || void 0 === a ? void 0 : a.chat) && (t.chat_id = null == h ? void 0 : h.id, t.chatEndedAt = null == h ? void 0 : h.chat_ended_at, window.parent.postMessage({
                                                event_id: "chtl_chat_created_w2",
                                                data: {
                                                    chat_id: t.chat_id
                                                }
                                            }, "*"), t.isPublicChat && t.fetchVisitorIp()), null != d && (p = null == d ? void 0 : d.components, null !== (v = null == d ? void 0 : d.output_delay) && (t.flow.output_delay = v), t.isStartingNewChat = !0, t.setUpNewFlow(p)), e.next = 42;
                                            break;
                                        case 34:
                                            return e.prev = 34, e.t0 = e.catch(10), t.startChatAxiosRequest = null, t.loading.newChat = !1, t.error.newChat = "An error occurred (Code: 2294)", e.abrupt("return");
                                        case 42:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [10, 34]
                                ])
                            })))()
                        },
                        userInputSubmitted: function(t) {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var i, r, l, a, s, c, d, h, p, v, g, f, m, _, b, C, y, S, x, w, k, T, I, M, E, A, R, B, F, D, L, N, P, q, O, U;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!e.chatEnded) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            if (e.clearChatError(), !e.chatbot_thinking) {
                                                n.next = 5;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 5:
                                            if (e.scrollToBottomWithDelay(!1), null != (i = null == t ? void 0 : t.block_id) && 0 != i.length) {
                                                n.next = 10;
                                                break
                                            }
                                            return e.showChatError("An error occurred (CODE: 2261)"), n.abrupt("return");
                                        case 10:
                                            if (null != (r = e.flow.components.find((function(t) {
                                                    return t.id == i
                                                })))) {
                                                n.next = 14;
                                                break
                                            }
                                            return e.showChatError("An error occurred (CODE: 2263)"), n.abrupt("return");
                                        case 14:
                                            if (null != e.flow) {
                                                n.next = 18;
                                                break
                                            }
                                            return e.showChatError("An error occurred (CODE: 2258)"), n.abrupt("return");
                                        case 18:
                                            if (l = null == t ? void 0 : t.message, a = null == t ? void 0 : t.message_id, s = {
                                                    message: l
                                                }, r.type == u.d.INPUTS.BUTTONS ? s.item_id = null == t ? void 0 : t.item_id : r.type == u.d.INPUTS.FORM ? s.field_values = null == t ? void 0 : t.values : r.type == u.d.CALCOM.BOOK && null != (c = null == t ? void 0 : t.data) && (s.booking = null == c ? void 0 : c.booking), d = null == r ? void 0 : r.cmgid, h = {
                                                    egid: e.external_gid,
                                                    cmgid: d,
                                                    cgid: e.chat_id,
                                                    data: s,
                                                    cuid: e.customer_uuid,
                                                    type: "input"
                                                }, p = null, r.type == u.d.INPUTS.FORM || r.type == u.d.CALCOM.BOOK ? e.updateSubmittedValueForMessage(a, !0) : ((p = e.getConversationItemSchema("user")).id = e.$generateUUID(), p.component = {
                                                    id: null == r ? void 0 : r.id,
                                                    type: null == r ? void 0 : r.type,
                                                    category: null == r ? void 0 : r.category,
                                                    data: null == r ? void 0 : r.data
                                                }, null != l && (null != (v = l) && (v = v.toString()), null != v && v.length > 0 && (p.text = v)), (null == r ? void 0 : r.type) == u.d.INPUTS.BUTTONS && (g = null == t ? void 0 : t.message_id, f = null == t ? void 0 : t.item_id, null != g && g.length > 0 && null != f && f.length > 0 && null != (_ = null == r || null === (m = r.data) || void 0 === m ? void 0 : m.options) && _.length > 0 && null != (b = _.find((function(t) {
                                                    return t.id == f
                                                }))) && (p.text = null == b ? void 0 : b.label, null != (C = e.conversation.find((function(t) {
                                                    return t.id == g
                                                }))) && (C.component.selected_item_id = null == b ? void 0 : b.id, (y = e.conversation.findIndex((function(t) {
                                                    return t.id == g
                                                }))) > -1 && (e.conversation[y] = C)))), e.conversation.push(p)), e.continueChatAxiosRequest = e.$axios.CancelToken.source(), n.prev = 27, null != (I = e.apiEndpointPath)) {
                                                n.next = 32;
                                                break
                                            }
                                            return e.showChatError("An error occurred (Code: 2292)"), n.abrupt("return");
                                        case 32:
                                            return e.disable_user_input = !0, e.active_input = null, e.activeInputMessageId = null, e.chatbot_thinking = !1, e.displayChatbotThinkingWithDelay(), n.next = 39, e.$axios.post("".concat(I, "/chat"), h, {
                                                cancelToken: e.continueChatAxiosRequest.token
                                            });
                                        case 39:
                                            if (M = n.sent, e.continueChatAxiosRequest = null, e.clearChatbotThinkingDelay(), e.disable_user_input = !1, null != M) {
                                                n.next = 49;
                                                break
                                            }
                                            return "An error occurred (Code: 2259)", e.showChatError("An error occurred (Code: 2259)"), null != p && e.removeMessageFromConversation(null === (E = p) || void 0 === E ? void 0 : E.id), e.redisplayCurrentFlowComponent(!1), n.abrupt("return");
                                        case 49:
                                            if (null != (A = null !== (S = M.data) && void 0 !== S ? S : null)) {
                                                n.next = 56;
                                                break
                                            }
                                            return "An error occurred (Code: 2260)", e.showChatError("An error occurred (Code: 2260)"), null != p && e.removeMessageFromConversation(null === (R = p) || void 0 === R ? void 0 : R.id), e.redisplayCurrentFlowComponent(!1), n.abrupt("return");
                                        case 56:
                                            if (0 != A.success) {
                                                n.next = 62;
                                                break
                                            }
                                            return null == (D = null === (B = A) || void 0 === B ? void 0 : B.data) || 0 == D.length ? Object(o.a)("error") : e.showChatError(D), null != p && e.removeMessageFromConversation(null === (F = p) || void 0 === F ? void 0 : F.id), e.redisplayCurrentFlowComponent(!1), n.abrupt("return");
                                        case 62:
                                            A = null === (x = A) || void 0 === x ? void 0 : x.data, e.clearUserInputField(), L = null === (w = A) || void 0 === w ? void 0 : w.flow, N = null === (k = A) || void 0 === k ? void 0 : k.chat_ended_at, P = e.chatEndedAt, e.chatEndedAt = N, null == P && null != N && e.displayCSATSurvey(), e.chatStatusId = null === (T = A) || void 0 === T ? void 0 : T.chat_status_id, null != L ? (q = null == L ? void 0 : L.components, e.setUpNewFlow(q)) : (e.chatbot_thinking = !1, e.disable_user_input = !1), n.next = 88;
                                            break;
                                        case 73:
                                            if (n.prev = 73, n.t0 = n.catch(27), e.continueChatAxiosRequest = null, e.clearChatbotThinkingDelay(), e.disable_user_input = !1, null != p && e.removeMessageFromConversation(null === (O = p) || void 0 === O ? void 0 : O.id), e.redisplayCurrentFlowComponent(!1), !("response" in n.t0) || null == n.t0.response || !("status" in n.t0.response) || 429 != n.t0.response.status) {
                                                n.next = 86;
                                                break
                                            }
                                            return U = e.translated_texts.rate_limit_error, e.showChatError(U), n.abrupt("return");
                                        case 86:
                                            return e.showChatError("An unexpected error occurred. Please try again. (CODE: 2262)"), n.abrupt("return");
                                        case 88:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [27, 73]
                                ])
                            })))()
                        },
                        updateSubmittedValueForMessage: function(t, e) {
                            if (null == t || 0 == t.length) return !1;
                            var n = this.conversation.find((function(e) {
                                return e.id == t
                            }));
                            if (null == n) return !1;
                            n.component.submitted = e;
                            var i = this.conversation.findIndex((function(e) {
                                return e.id == t
                            }));
                            return i > -1 && (this.conversation[i] = n, !0)
                        },
                        setUpNewFlow: function(t) {
                            if (null == t || 0 == t.length) return this.chatbot_thinking = !1, void(this.disable_user_input = !1);
                            this.flow.components = t, this.flow.current_component_index = 0, this.processNextFlow()
                        },
                        redisplayCurrentFlowComponent: function(t) {
                            if (null != this.flow) {
                                var e = this.flow.current_component_index;
                                if (!(null === e || e < 0)) {
                                    var n = this.flow.components[e];
                                    if (null == n || ((null == n ? void 0 : n.type) != u.d.INPUTS.BUTTONS || 0 != t) && (null == n ? void 0 : n.type) != u.d.INPUTS.FORM) this.processNextFlow();
                                    else
                                        for (var i = this.conversation.length - 1; i >= 0; i--) {
                                            var o, r = this.conversation[i];
                                            if ((null == r || null === (o = r.component) || void 0 === o ? void 0 : o.id) == (null == n ? void 0 : n.id)) {
                                                var l, a, s;
                                                (null == r || null === (l = r.component) || void 0 === l ? void 0 : l.type) == u.d.INPUTS.BUTTONS ? null != (null == r ? void 0 : r.component) && (r.component.selected_item_id = null) : (null == r || null === (a = r.component) || void 0 === a ? void 0 : a.type) != u.d.INPUTS.FORM && (null == r || null === (s = r.component) || void 0 === s ? void 0 : s.type) != u.d.CALCOM.BOOK || null != (null == r ? void 0 : r.component) && (r.component.submitted = !1), this.conversation[i] = r;
                                                break
                                            }
                                        }
                                }
                            }
                        },
                        goToPreviousFlowComponent: function() {
                            if (null != this.flow) {
                                var t = this.flow.current_component_index;
                                null === t || t < 0 || 0 != t && (this.flow.current_component_index = t - 1, this.processNextFlow())
                            }
                        },
                        aiResponseRated: function(t) {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var i, o, r, l, a, s, u, c, d, h;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (i = null == t ? void 0 : t.message, o = null == t ? void 0 : t.rating, null != i && null != (null == i ? void 0 : i.id)) {
                                                n.next = 5;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 5:
                                            if (null != o) {
                                                n.next = 8;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 8:
                                            return r = null == i ? void 0 : i.id, (l = e.conversation.findIndex((function(t) {
                                                return t.id == r
                                            }))) > -1 && null != (a = e.conversation[l]) && null != (s = null == a ? void 0 : a.component) && "rating_value" in s && (s.rating_value = o, a.component = s, e.conversation[l] = a), u = {
                                                rating: o,
                                                message_id: null == i ? void 0 : i.id,
                                                chat_gid: e.chat_id
                                            }, n.prev = 12, n.next = 15, e.$axios.post("public/chat/v2/rate/airesp", u);
                                        case 15:
                                            if (null != (d = n.sent)) {
                                                n.next = 19;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 19:
                                            if (null != (h = null !== (c = d.data) && void 0 !== c ? c : null)) {
                                                n.next = 23;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 23:
                                            if (0 != h.success) {
                                                n.next = 26;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 26:
                                            n.next = 33;
                                            break;
                                        case 28:
                                            return n.prev = 28, n.t0 = n.catch(12), n.abrupt("return");
                                        case 33:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [12, 28]
                                ])
                            })))()
                        },
                        removeMessageFromConversation: function(t) {
                            var e = this.conversation.findIndex((function(e) {
                                return e.id == t
                            }));
                            e > -1 && this.conversation.splice(e, 1)
                        },
                        isUserNearBottomOfChat: function() {
                            try {
                                var t = this.getChatInterfaceRef();
                                if (!t) return !1;
                                return t.scrollHeight - t.scrollTop - t.clientHeight <= 150
                            } catch (t) {
                                return !1
                            }
                        },
                        scrollToBottom: function() {
                            this.isUserScrolling || (this.scroll_to_bottom = !this.scroll_to_bottom)
                        },
                        scrollToBottomWithDelay: function() {
                            var t = this,
                                e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                            this.isStartingNewChat || this.isUserScrolling || e && !this.keepUserAtBottomOfChat || (0 != n ? (null != this.scrollToBottomTimeout && clearTimeout(this.scrollToBottomTimeout), this.scrollToBottomTimeout = setTimeout((function() {
                                t.scrollToBottom()
                            }), n)) : this.scrollToBottom())
                        },
                        getConversationItemSchema: function(t) {
                            return "bot" == t ? {
                                id: null,
                                role_id: u.e.BOT,
                                component: {
                                    id: null,
                                    type: null,
                                    category: null,
                                    data: null
                                },
                                text: null,
                                timestamp: Math.floor(Date.now() / 1e3)
                            } : "user" == t ? {
                                id: null,
                                role_id: u.e.USER,
                                timestamp: Math.floor(Date.now() / 1e3),
                                component: null
                            } : "system" == t ? {
                                id: null,
                                role_id: u.e.SYSTEM,
                                component: {
                                    id: null,
                                    type: null,
                                    category: null,
                                    data: null,
                                    text: null
                                },
                                text: null,
                                timestamp: Math.floor(Date.now() / 1e3)
                            } : void 0
                        },
                        goToNextComponent: function() {
                            this.chatbot_thinking = !1, this.disable_user_input = !1, this.flow.current_component_index++, this.scrollToBottomWithDelay(), this.processNextFlow()
                        },
                        processNextFlow: function() {
                            var t, e, n, i, o, r = this;
                            if (null == (null === (t = this.flow) || void 0 === t ? void 0 : t.components) || 0 == this.flow.components.length) return this.chatbot_thinking = !1, void(this.disable_user_input = !1);
                            if (null === this.flow.current_component_index) return this.chatbot_thinking = !1, void(this.disable_user_input = !1);
                            if (this.flow.current_component_index > this.flow.components.length - 1) return this.chatbot_thinking = !1, this.disable_user_input = !1, void(this.isStartingNewChat = !1);
                            var l = null;
                            try {
                                l = this.flow.components[this.flow.current_component_index]
                            } catch (t) {}
                            if (null == l) return this.chatbot_thinking = !1, void(this.disable_user_input = !1);
                            if (this.isValidComponent(l)) {
                                var a = null === (e = l) || void 0 === e ? void 0 : e.category,
                                    s = null === (n = l) || void 0 === n ? void 0 : n.type;
                                this.active_input = null, this.activeInputMessageId = null;
                                var c = null === (i = l) || void 0 === i ? void 0 : i.type,
                                    d = null === (o = l) || void 0 === o ? void 0 : o.cmgid,
                                    h = null;
                                if (null != d && d.length > 0 && (h = d), a == u.c.OUTPUT || a == u.c.AI || a == u.c.ERROR || a == u.c.LOGIC || a == u.c.SYSTEM || a == u.c.CALCOM) {
                                    var p, v, g, f = null;
                                    (f = a == u.c.ERROR || a == u.c.LOGIC || a == u.c.SYSTEM ? this.getConversationItemSchema("system") : this.getConversationItemSchema("bot")).id = h, f.component = {
                                        id: null === (p = l) || void 0 === p ? void 0 : p.id,
                                        type: s,
                                        category: a,
                                        data: null === (v = l) || void 0 === v ? void 0 : v.data,
                                        text: null === (g = l) || void 0 === g ? void 0 : g.text
                                    };
                                    var m = this.flow.output_delay,
                                        _ = !1;
                                    if (s == u.d.AI.RESPONSE) {
                                        var b, C, y = this.getAiResponseSourceFromBlock(l);
                                        if (y == u.a.KB)(null === (b = l) || void 0 === b || null === (C = b.data) || void 0 === C ? void 0 : C.stream) && (_ = !0), f.component.rating_value = null;
                                        else y == u.a.MODEL && (f.component.rating_value = null)
                                    }
                                    if (_) this.chatbot_thinking = !0, this.disable_user_input = !0, this.isStartingNewChat = !1, this.streamAiKbResponse(f);
                                    else if (s == u.d.CALCOM.BOOK) {
                                        var S;
                                        f.component.submitted = null === (S = l) || void 0 === S ? void 0 : S.submitted, this.chatbot_thinking = !0, this.disable_user_input = !0, setTimeout((function() {
                                            r.conversation.push(f), r.displayStartNewChatButtonIfChatEnded(), r.chatbot_thinking = !1
                                        }), m)
                                    } else this.chatbot_thinking = !0, this.disable_user_input = !0, setTimeout((function() {
                                        r.conversation.push(f), r.displayStartNewChatButtonIfChatEnded(), r.goToNextComponent()
                                    }), m)
                                } else if (a == u.c.INPUT) {
                                    if (this.isStartingNewChat = !1, this.disable_user_input = !1, this.chatbot_thinking = !1, c == u.d.INPUTS.BUTTONS || c == u.d.INPUTS.FORM) {
                                        var x, w, k, T = this.getConversationItemSchema("bot");
                                        if (T.id = h, T.component = {
                                                id: null === (x = l) || void 0 === x ? void 0 : x.id,
                                                type: s,
                                                category: a,
                                                data: null === (w = l) || void 0 === w ? void 0 : w.data,
                                                text: null === (k = l) || void 0 === k ? void 0 : k.text
                                            }, c == u.d.INPUTS.BUTTONS) T.component.selected_item_id = null;
                                        else if (c == u.d.INPUTS.FORM) {
                                            var I, M;
                                            T.component.submitted = null === (I = l) || void 0 === I ? void 0 : I.submitted, T.component.required = null === (M = l) || void 0 === M ? void 0 : M.required
                                        }
                                        this.conversation.push(T), this.scrollToBottomWithDelay(), this.activeInputMessageId = h
                                    } else this.active_input = l, this.activeInputMessageId = h, this.clearUserInputField(), this.focusUserInputField();
                                    this.displayStartNewChatButtonIfChatEnded()
                                } else this.goToNextComponent(), this.displayStartNewChatButtonIfChatEnded()
                            } else {
                                this.goToNextComponent()
                            }
                        },
                        setTextForMessage: function(t, e) {
                            var n = this.conversation.findIndex((function(e) {
                                return e.id == t
                            }));
                            if (n > -1) {
                                var i = this.conversation[n];
                                if (null == i) return;
                                var o = null == i ? void 0 : i.component;
                                if (null == o) return;
                                o.text = e, i.component = o, this.conversation[n] = i
                            }
                        },
                        setStreamStatusForAiKbMessage: function(t, e) {
                            if (null != e) {
                                var n = this.conversation.findIndex((function(e) {
                                    return e.id == t
                                }));
                                if (n > -1) {
                                    var i = this.conversation[n];
                                    if (null == i) return;
                                    var o = null == i ? void 0 : i.component;
                                    if (null == o) return;
                                    var r = null == o ? void 0 : o.data;
                                    if (null == r) return;
                                    r.stream_status = e, o.data = r, i.component = o, this.conversation[n] = i
                                }
                            }
                        },
                        streamAiKbResponse: function(t) {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var i, o, r, l, a, s, c;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            n.prev = 0, null, o = null == t ? void 0 : t.id, null == t ? void 0 : t.component, i = {
                                                egid: e.external_gid,
                                                message_id: o,
                                                chat_id: e.chat_id
                                            }, r = e.$config.NODE_API_URL, l = "".concat(r, "/chat/v2"), e.isBuilderPreview && (l = "".concat(r, "/preview/chat/v2")), (a = new XMLHttpRequest).open("POST", l), a.setRequestHeader("Content-Type", "application/json"), a.responseType = "text", "", null, s = !1, c = "===END_STREAM===", e.aiStreamRequests[o] = a, a.addEventListener("readystatechange", (function() {
                                                if (a.readyState === a.HEADERS_RECEIVED) a.getResponseHeader("Content-Length"), a.getResponseHeader("Content-Type");
                                                else if (a.readyState === a.LOADING) {
                                                    s || (e.aiKbStreamingStarted(t), s = !0);
                                                    var n = a.responseText;
                                                    if (null != n && n.length > 0) {
                                                        var i = null;
                                                        try {
                                                            var r = n.split(c);
                                                            null == r || 0 == r.length || (i = r[0])
                                                        } catch (t) {
                                                            return
                                                        }
                                                        if (null == i && 0 == i.length) return;
                                                        e.setTextForMessage(o, i)
                                                    }
                                                } else if (a.readyState === a.DONE) {
                                                    var l, d;
                                                    e.aiKbStreamingCompleted(t);
                                                    var h = u.b.COMPLETED,
                                                        p = e.conversation.findIndex((function(t) {
                                                            return t.id == o
                                                        })),
                                                        v = null;
                                                    if (p > -1) {
                                                        var g;
                                                        if (null == (v = e.conversation[p])) return;
                                                        var f = null === (g = v) || void 0 === g ? void 0 : g.component;
                                                        if (null == f) return;
                                                        var m = null == f ? void 0 : f.data;
                                                        if (null == m) return;
                                                        m.stream_status = h, f.data = m, v.component = f, e.conversation[p] = v
                                                    }
                                                    var _ = null == a ? void 0 : a.responseText;
                                                    if (null == _ || 0 == _.length) return;
                                                    try {
                                                        var b = _.split(c)
                                                    } catch (t) {
                                                        return
                                                    }
                                                    if (null == b || b.length < 2) return;
                                                    var C = b[1],
                                                        y = null;
                                                    try {
                                                        y = JSON.parse(C)
                                                    } catch (t) {
                                                        return
                                                    }
                                                    if (null == y) return;
                                                    var S = null === (l = y) || void 0 === l ? void 0 : l.search_result,
                                                        x = null === (d = y) || void 0 === d ? void 0 : d.sources;
                                                    if (null != v) {
                                                        var w, k = null === (w = v) || void 0 === w ? void 0 : w.component;
                                                        if (null == k) return;
                                                        var T = null == k ? void 0 : k.data;
                                                        if (null == T) return;
                                                        null != x && x.length > 0 && (T.sources = x), k.data = T, v.component = k, e.conversation[p] = v
                                                    }
                                                    if (null == S) return;
                                                    var I = null == S ? void 0 : S.success;
                                                    if (null === I) return;
                                                    if (!1 === I) {
                                                        var M = null == S ? void 0 : S.data;
                                                        return void(null == M || 0 == M.length ? e.showChatError("An error occurred (CODE: 2302)") : e.showChatError(M))
                                                    }
                                                    return
                                                }
                                            })), a.send(JSON.stringify(i)), n.next = 25;
                                            break;
                                        case 21:
                                            return n.prev = 21, n.t0 = n.catch(0), n.abrupt("return");
                                        case 25:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 21]
                                ])
                            })))()
                        },
                        endAllAiKbStreaming: function() {
                            if (null != this.aiStreamRequests && 0 != this.aiStreamRequests.length) {
                                try {
                                    for (var t in this.aiStreamRequests) {
                                        var e = this.aiStreamRequests[t];
                                        if (null != e) try {
                                            e.abort()
                                        } catch (t) {}
                                    }
                                } catch (t) {}
                                this.aiStreamRequests = []
                            }
                        },
                        aiKbStreamingStarted: function(t) {
                            this.chatbot_thinking = !1, this.disable_user_input = !0, this.conversation.push(t), this.scrollToBottomWithDelay(!0), this.startContinuousScrolling(this.AI_STREAMING_INTERVAL_ID)
                        },
                        aiKbStreamingCompleted: function(t) {
                            var e = null;
                            this.stopContinuousScrolling(this.AI_STREAMING_INTERVAL_ID), null != t && (e = null == t ? void 0 : t.id);
                            try {
                                null != e && e in this.aiStreamRequests && delete this.aiStreamRequests[e]
                            } catch (t) {}
                            this.displayStartNewChatButtonIfChatEnded(), this.goToNextComponent()
                        },
                        startContinuousScrolling: function(t) {
                            var e = this;
                            this.scrollIntervals = this.scrollIntervals || {}, null != t && (t in this.scrollIntervals && null != this.scrollIntervals[t] || (this.scrollIntervals[t] = setInterval((function() {
                                e.scrollToBottomWithDelay(!0, 0)
                            }), 100)))
                        },
                        stopContinuousScrolling: function(t) {
                            var e;
                            null != t && null !== (e = this.scrollIntervals) && void 0 !== e && e[t] && (clearInterval(this.scrollIntervals[t]), delete this.scrollIntervals[t])
                        },
                        readChunks: function(t) {
                            return Object(i.a)({}, Symbol.asyncIterator, (function() {
                                return Object(a.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Object(l.a)(t.read());
                                            case 2:
                                                n = e.sent;
                                            case 3:
                                                if (n.done) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.next = 6, n.value;
                                            case 6:
                                                return e.next = 8, Object(l.a)(t.read());
                                            case 8:
                                                n = e.sent, e.next = 3;
                                                break;
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            }))
                        },
                        getRandomString: function(t) {
                            for (var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "", i = t; i > 0; --i) n += e[Math.floor(62 * Math.random())];
                            return n
                        },
                        getAiResponseSourceFromBlock: function(t) {
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.data;
                            return null == e ? null : null == e ? void 0 : e.response_source
                        },
                        displayStartNewChatButtonIfChatEnded: function() {
                            this.chatEnded && (null == this.flow.components || 0 == this.flow.components.length || this.flow.current_component_index === this.flow.components.length - 1) && (this.displayStartNewChatButton = !0)
                        }
                    },
                    computed: {
                        apiEndpointPath: function() {
                            var t = null;
                            return this.isBuilderPreview ? t = this.$config.CHATBOT_V2_PREVIEW_CHAT_ENDPOINT_PATH : (this.isPublicChat || this.isSharingPage) && (t = this.$config.CHATBOT_V2_PUBLIC_CHAT_ENDPOINT_PATH), t
                        },
                        isPublicChat: function() {
                            return "public_embed" == this.placed_on
                        },
                        isBuilderPreview: function() {
                            return "builder-preview" == this.placed_on
                        },
                        isSharingPage: function() {
                            return "sharing" == this.placed_on
                        },
                        chatEnded: function() {
                            return null != this.chatEndedAt && this.chatEndedAt > 0
                        },
                        filteredConversation: function() {
                            if (null == this.conversation || 0 == this.conversation.length) return [];
                            for (var t = [], e = 0; e < this.conversation.length; e++) {
                                var n = this.conversation[e];
                                if (null != n) {
                                    var i = null == n ? void 0 : n.component;
                                    if (null != i)
                                        if ((null == i ? void 0 : i.type) == u.d.INPUTS.BUTTONS) {
                                            var o = null == i ? void 0 : i.selected_item_id;
                                            if (null != o && o.length > 0) continue;
                                            if (1 == (null == i ? void 0 : i.submitted)) continue
                                        }
                                    t.push(n)
                                }
                            }
                            return t
                        },
                        messagesToShowAiAvatar: function() {
                            var t = [],
                                e = null;
                            if (null != this.filteredConversation && this.filteredConversation.length > 0)
                                for (var n = this.filteredConversation.length - 1; n >= 0; n--) {
                                    var i = this.filteredConversation[n];
                                    (null == i ? void 0 : i.role_id) == u.e.BOT ? null == e && (e = i, t.push(i.id)) : e = null
                                }
                            return t
                        },
                        messagesToShowAgentAvatar: function() {
                            var t = [],
                                e = null;
                            if (null != this.filteredConversation && this.filteredConversation.length > 0)
                                for (var n = this.filteredConversation.length - 1; n >= 0; n--) {
                                    var i = this.filteredConversation[n];
                                    if ((null == i ? void 0 : i.role_id) == u.e.AGENT) {
                                        var o, r = null == i || null === (o = i.user) || void 0 === o ? void 0 : o.id;
                                        null != e && e == r || (t.push(i.id), e = r)
                                    } else e = null
                                }
                            return t
                        }
                    }
                }
            }).call(this, n(419).Buffer)
        },
        385: function(t, e, n) {
            var i = n(416);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, n(115).default)("045dab27", i, !0, {
                sourceMap: !1
            })
        },
        386: function(t, e, n) {
            var i = n(418);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, n(115).default)("6265ec58", i, !0, {
                sourceMap: !1
            })
        },
        407: function(t, e, n) {
            "use strict";
            n.r(e);
            n(38);
            var i = n(12),
                o = n(21),
                r = (n(148), n(230), n(70), n(26), n(54), n(45), n(16), n(29), n(232), n(51), {
                    props: {
                        hoveringMessageSettings: {
                            default: null
                        },
                        hoveringMessagesVisible: {
                            default: !1
                        },
                        interface_language: {
                            type: String,
                            default: "en"
                        },
                        t: {
                            type: Object,
                            default: null
                        },
                        integration_type: {
                            type: String,
                            default: "custom"
                        },
                        predefined_queries: {
                            type: Array
                        },
                        chat_icon_design_type: {
                            type: Number | String
                        },
                        settings: {
                            type: Object
                        },
                        appearance: {
                            type: Object
                        },
                        texts: {
                            type: Object
                        },
                        chat_icon_url: {
                            type: String
                        },
                        bot_icon_url: {
                            type: String
                        },
                        external_gid: {
                            type: String,
                            default: null
                        },
                        internal_gid: {
                            type: String,
                            default: null
                        },
                        placed_on: {
                            type: String,
                            default: "website"
                        },
                        conversation: {
                            type: Array
                        },
                        forced_chat_open: {
                            type: Boolean,
                            default: !1
                        },
                        chatbot_thinking: {
                            type: Boolean,
                            default: !1
                        },
                        chatbot_streaming: {
                            type: Boolean,
                            default: !1
                        },
                        chat_error: {
                            type: String,
                            default: null
                        },
                        scroll_to_bottom: {
                            type: Boolean,
                            default: !1
                        },
                        show_powered_by: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            is_mobile_viewport: !1,
                            user_message: null,
                            is_chat_open: this.forced_chat_open,
                            show_test: !0,
                            current_chat_header_type: 1,
                            show_ellipsis_dropdown: !1,
                            customer_info_collector: {
                                collected: !1,
                                error: null
                            },
                            customer: {
                                uuid: null,
                                name: null,
                                email: null,
                                phone: null,
                                company: null,
                                job_title: null,
                                address: null,
                                city: null,
                                state: null,
                                zip: null,
                                country: null,
                                website: null
                            },
                            current_chat_page: null,
                            errors: {
                                customer: {
                                    name: null,
                                    email: null,
                                    phone: null,
                                    company: null,
                                    job_title: null,
                                    address: null,
                                    city: null,
                                    state: null,
                                    zip: null,
                                    country: null,
                                    website: null
                                }
                            }
                        }
                    },
                    emits: ["submitUserMessage", "clearChat"],
                    mounted: function() {
                        try {
                            var t = this.$md.renderer.rules.link_open || function(t, e, n, i, o) {
                                return o.renderToken(t, e, n)
                            };
                            this.$md.renderer.rules.link_open = function(e, n, i, o, r) {
                                var l = e[n].attrIndex("target");
                                return l < 0 ? e[n].attrPush(["target", "_blank"]) : e[n].attrs[l][1] = "_blank", t(e, n, i, o, r)
                            }
                        } catch (t) {}
                        var e = this;
                        window.addEventListener("message", (function(t) {
                            var n, i = null == t || null === (n = t.data) || void 0 === n ? void 0 : n.event_id;
                            try {
                                if ("chtl_cust_load" === i) {
                                    var o, r = null == t || null === (o = t.data) || void 0 === o ? void 0 : o.cust;
                                    if (null != r) try {
                                        e.customer.uuid = null == r ? void 0 : r.uuid, e.customer.name = null == r ? void 0 : r.name, e.customer.email = null == r ? void 0 : r.email, e.customer.phone = null == r ? void 0 : r.phone, e.customer.company = null == r ? void 0 : r.company, e.customer.job_title = null == r ? void 0 : r.job_title, e.customer.address = null == r ? void 0 : r.address, e.customer.city = null == r ? void 0 : r.city, e.customer.state = null == r ? void 0 : r.state, e.customer.zip = null == r ? void 0 : r.zip, e.customer.country = null == r ? void 0 : r.country, e.customer.website = null == r ? void 0 : r.website, e.isCustomerInformationSet() && (e.customer_info_collector.collected = !0)
                                    } catch (t) {}
                                } else if ("is_mobile" === i) {
                                    var l;
                                    null == t || null === (l = t.data) || void 0 === l || l.window_width;
                                    e.is_mobile_viewport = !0
                                }
                            } catch (t) {}
                        })), window.parent.postMessage({
                            event_id: "chtl_loaded",
                            data: {}
                        }, "*"), this.isCustomerInformationSet() && (this.customer_info_collector.collected = !0)
                    },
                    watch: {
                        forced_chat_open: function(t, e) {
                            null != t && (this.is_chat_open = t)
                        },
                        scroll_to_bottom: function(t, e) {
                            this.scrollChatToBottom()
                        }
                    },
                    methods: {
                        messageHasSources: function(t) {
                            try {
                                var e = this.getMessageSources(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        shouldShowMessageSources: function(t) {
                            try {
                                if (0 == this.messageHasSources(t)) return !1;
                                var e = this.getMessageSources(t);
                                if (null == e || 0 == e.length) return !1;
                                for (var n = 0; n < e.length; n++) {
                                    var i = e[n];
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
                        getMessageSources: function(t) {
                            try {
                                if (null == t) return [];
                                var e = null == t ? void 0 : t.sources;
                                if (null == e || 0 == e.length) return [];
                                for (var n = [], i = [], o = [], r = 0; r < e.length; r++) {
                                    var l = e[r];
                                    if (null != l) {
                                        var a = null == l ? void 0 : l.url,
                                            s = null == l ? void 0 : l.filename;
                                        if (null != a && a.length > 0 && null == s) {
                                            if (0 == (a = a.trim()).length) continue;
                                            if (i.includes(a)) continue;
                                            i.push(a);
                                            var u = null == l ? void 0 : l.title;
                                            null != u && 0 == (u = u.trim()).length && (u = null);
                                            var c = a.replace(/(^\w+:|^)\/\//, "");
                                            c = c.replace("www.", ""), n.push({
                                                type: "webpage",
                                                title: u,
                                                url: a,
                                                shortened_url: c
                                            })
                                        } else if (null != a && null != s) {
                                            if (0 == (a = a.trim()).length && 0 == s.length) continue;
                                            if (i.includes(a)) continue;
                                            if (o.includes(s)) continue;
                                            i.push(a), o.push(a);
                                            var d = a.replace(/(^\w+:|^)\/\//, "");
                                            d = d.replace("www.", ""), n.push({
                                                type: "document_url",
                                                filename: s,
                                                url: a,
                                                shortened_url: d
                                            })
                                        } else {
                                            if (!(null != s && s.length > 0)) continue;
                                            if (s = s.trim(), o.includes(s)) continue;
                                            o.push(s), n.push({
                                                type: "document",
                                                filename: s
                                            })
                                        }
                                    }
                                }
                                return n.length > 6 && (n = n.slice(0, 3)), n
                            } catch (t) {
                                return []
                            }
                        },
                        validateEmail: function(t) {
                            return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t)
                        },
                        getMaxCharactersMessageForLeadForm: function(t) {
                            var e = this.t.lead_form.errors.max_characters;
                            return e = e.replace("1234567", t)
                        },
                        startChatClicked: function() {
                            var t = 75,
                                e = 320,
                                n = 500,
                                i = 20,
                                o = 100,
                                r = 50,
                                l = !1,
                                a = this.customerDetailsToCollect;
                            this.errors.customer.name = null, this.errors.customer.email = null, this.errors.customer.phone = null, this.errors.customer.company = null, this.errors.customer.job_title = null, this.errors.customer.website = null, 1 == a.name.enabled && (!a.name.required || null != this.customer.name && 0 != this.customer.name.trim().length ? null != this.customer.name && this.customer.name.length > t && (this.errors.customer.name = this.getMaxCharactersMessageForLeadForm(t), l = !0) : (this.errors.customer.name = this.t.global.required, l = !0)), 1 == a.email.enabled && (!a.email.required || null != this.customer.email && 0 != this.customer.email.trim().length ? null != this.customer.email && this.customer.email.length > e ? (this.errors.customer.email = this.getMaxCharactersMessageForLeadForm(e), l = !0) : this.validateEmail(this.customer.email) || (this.errors.customer.email = this.t.lead_form.errors.invalid_email, l = !0) : (this.errors.customer.email = this.t.global.required, l = !0)), 1 == a.phone.enabled && (!a.phone.required || null != this.customer.phone && 0 != this.customer.phone.trim().length ? null != this.customer.phone && this.customer.phone.length > i && (this.errors.customer.phone = this.getMaxCharactersMessageForLeadForm(i), l = !0) : (this.errors.customer.phone = this.t.global.required, l = !0)), 1 == a.company.enabled && (!a.company.required || null != this.customer.company && 0 != this.customer.company.trim().length ? null != this.customer.company && this.customer.company.length > o && (this.errors.customer.company = this.getMaxCharactersMessageForLeadForm(o), l = !0) : (this.errors.customer.company = this.t.global.required, l = !0)), 1 == a.job_title.enabled && (!a.job_title.required || null != this.customer.job_title && 0 != this.customer.job_title.trim().length ? null != this.customer.job_title && this.customer.job_title.length > r && (this.errors.customer.job_title = this.getMaxCharactersMessageForLeadForm(r), l = !0) : (this.errors.customer.job_title = this.t.global.required, l = !0)), 1 == a.website.enabled && (!a.website.required || null != this.customer.website && 0 != this.customer.website.trim().length ? null != this.customer.website && this.customer.website.length > n && (this.errors.customer.website = this.getMaxCharactersMessageForLeadForm(n), l = !0) : (this.errors.customer.website = this.t.global.required, l = !0)), l ? this.customer_info_collector.error = this.t.lead_form.errors.submit : (this.customer_info_collector.error = null, this.customer_info_collector.collected = !0, window.parent.postMessage({
                                event_id: "chtl_customer_info_collected",
                                data: {
                                    customer: this.customer
                                }
                            }, "*"))
                        },
                        ratingSelected: function(t, e) {
                            1 !== e && -1 !== e || 1 !== (null == t ? void 0 : t.rating_value) && -1 !== (null == t ? void 0 : t.rating_value) && (null == t ? void 0 : t.rating_value) !== e && (t.rating_value = e, this.$emit("ratingSelected", {
                                message: t,
                                rating: e
                            }))
                        },
                        predefinedQuerySelect: function(t) {
                            this.submitMessage(t.query, "predefined_query")
                        },
                        submitUserMessage: function() {
                            var t = null == this ? void 0 : this.user_message;
                            this.submitMessage(t, "input") && (this.user_message = null)
                        },
                        submitMessage: function(t) {
                            return null != t && 0 != t.length && (!this.chatbot_thinking && !this.chatbot_streaming && (0 != (t = t.trim()).length && (this.$emit("submitUserMessage", {
                                message: t,
                                customer: this.customer
                            }), !0)))
                        },
                        parseMessageAsHTML: function(t) {
                            if (null == t) return "";
                            var e = null == t ? void 0 : t.text;
                            if (null == e) return "";
                            var n = this.$md.render(e);
                            try {
                                var i = this.addTargetAttrToHtmlLinks(n, "_blank");
                                null != i && i.length > 0 && (n = i)
                            } catch (t) {}
                            return n
                        },
                        addTargetAttrToHtmlLinks: function(t, e) {
                            var n = document.createElement("div");
                            return n.innerHTML = t, n.querySelectorAll("a").forEach((function(t) {
                                t.setAttribute("target", e)
                            })), n.innerHTML
                        },
                        scrollToLastMessage: function() {
                            var t = this.$refs.chat_last_message;
                            if (null != t) try {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (t) {}
                        },
                        scrollChatToBottom: function() {
                            var t = this.$refs.hidden_element;
                            if (t) try {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (t) {}
                        },
                        scrollChatToThinkingBubble: function() {
                            var t = this.$refs.chatbot_thinking_bubble;
                            if (t) try {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (t) {}
                        },
                        closeHoveringMessages: function() {
                            this.$emit("closeHoveringMessages")
                        },
                        clearChat: function() {
                            this.show_ellipsis_dropdown = !1, this.$emit("clearChat")
                        },
                        closeChat: function() {
                            this.show_ellipsis_dropdown = !1, "chatbot-testing" != this.placed_on && "sharing" != this.placed_on && ("public_embed" == this.placed_on ? window.parent.postMessage("chtl_chat_minimized", "*") : this.is_chat_open = !1, this.closeHoveringMessages())
                        },
                        chatIconClicked: function() {
                            this.closeHoveringMessages(), this.is_chat_open = !this.is_chat_open
                        },
                        chatBubbleWrapperCSS: function(t) {
                            var e = {
                                display: "flex",
                                "align-items": "flex-start",
                                "margin-bottom": "15px"
                            };
                            return "user" == t && (e["justify-content"] = "flex-end"), e
                        },
                        chatAvatarImgCSS: function(t) {
                            var e, n, i, o, r, l, a = {
                                    "flex-shrink": "0"
                                },
                                s = 35,
                                u = !0,
                                c = 10;
                            if (null != (null === (e = this.appearance) || void 0 === e || null === (n = e.avatar_icon) || void 0 === n ? void 0 : n.full_rounded) && (u = this.appearance.avatar_icon.full_rounded), null != (null === (i = this.appearance) || void 0 === i || null === (o = i.avatar_icon) || void 0 === o ? void 0 : o.size) && (s = this.appearance.avatar_icon.size), null != (null === (r = this.appearance) || void 0 === r || null === (l = r.avatar_icon) || void 0 === l ? void 0 : l.border_radius) && (c = this.appearance.avatar_icon.border_radius), a.width = "".concat(s, "px"), a.height = "".concat(s, "px"), a["border-radius"] = u ? "100%" : "".concat(c, "px"), "bot" == t) {
                                var d = this.botIconURL;
                                a["margin-right"] = "10px", a["background-image"] = "url(".concat(d, ")"), a["background-size"] = "cover", a["background-repeat"] = "no-repeat", a["background-position"] = "center"
                            }
                            return a
                        },
                        chatBubbleCSS: function(t) {
                            var e = {
                                display: "inline-block",
                                "overflow-wrap": "anywhere",
                                padding: "15px",
                                "border-radius": "20px",
                                "font-size": "13.5px",
                                transition: "width ease-in-out 0.2s"
                            };
                            return "user" == t ? (e["border-top-right-radius"] = "5px", e["background-color"] = this.primaryColor, e.color = this.foregroundColor) : (e["border-top-left-radius"] = "5px", e["background-color"] = this.assistantBGColor, e.color = this.assistantTextColor), "rtl" == this.languageDirection && (e.direction = "rtl"), e
                        },
                        isCustomerInformationSet: function() {
                            if (1 == this.customer_info_collector.collected) return !0;
                            var t = this.customer;
                            if (null == t) return !1;
                            for (var e = 0, n = Object.entries(t); e < n.length; e++) {
                                var i = Object(o.a)(n[e], 2),
                                    r = i[0],
                                    l = i[1];
                                if ("uuid" != r) try {
                                    if (null != l && l.trim().length > 0) return !0
                                } catch (t) {}
                            }
                            return !1
                        }
                    },
                    computed: {
                        poweredByText: function() {
                            var t = this.t.powered_by;
                            return null == t || 0 == t.length ? "Powered by Chatling" : t = t.replace("XYZ", "Chatling")
                        },
                        thinkingIconCSS: function() {
                            var t = {
                                position: "absolute"
                            };
                            return "rtl" == this.languageDirection ? t.left = "25px" : t.right = "25px", t
                        },
                        sendIconCSS: function() {
                            var t = {
                                position: "absolute"
                            };
                            return "rtl" == this.languageDirection ? (t.left = "15px", t.rotate = "180deg") : t.right = "15px", t
                        },
                        languageDirection: function() {
                            if (null == this.interface_language || 0 == this.interface_language.length) return "ltr";
                            return ["ar", "az", "he", "fa", "ur"].includes(this.interface_language) ? "rtl" : "ltr"
                        },
                        messageInputPlaceholder: function() {
                            var t, e = "Write a message...";
                            if (null == this.texts) return e;
                            var n = null === (t = this.texts) || void 0 === t ? void 0 : t.message_input_placeholder;
                            return null == n ? e : n == e || "Enter a message..." == n ? this.t.input_placeholder : n
                        },
                        showPrechatForm: function() {
                            return "chatbot-testing" != this.placed_on && (!(!this.collectCustomerDetailsEnabled || 1 != this.customerDetailCollectionType) && !this.customer_info_collector.collected)
                        },
                        collectCustomerDetailsEnabled: function() {
                            var t, e, n = null === (t = this.settings) || void 0 === t || null === (e = t.form) || void 0 === e ? void 0 : e.enabled;
                            return 1 == n && n
                        },
                        customerDetailsToCollect: function() {
                            var t, e;
                            return null === (t = this.settings) || void 0 === t || null === (e = t.form) || void 0 === e ? void 0 : e.fields
                        },
                        customerDetailCollectionType: function() {
                            var t, e;
                            return null === (t = this.settings) || void 0 === t || null === (e = t.form) || void 0 === e ? void 0 : e.type
                        },
                        customDetailsEntered: function() {
                            return !1
                        },
                        showRating: function() {
                            var t;
                            return !0 === (null === (t = this.settings) || void 0 === t ? void 0 : t.rate_each_chatbot_response)
                        },
                        hidePoweredByBranding: function() {
                            if ("chatbot-testing" == this.placed_on) return !0;
                            if (null == this.settings) return !1;
                            var t = this.settings.hide_branding;
                            return null != t && t
                        },
                        showCloseButton: function() {
                            return "chatbot-testing" != this.placed_on && "sharing" != this.placed_on
                        },
                        showChatIcon: function() {
                            return "wix" == this.integration_type || "chatbot-testing" != this.placed_on && "public_embed" != this.placed_on && "sharing" != this.placed_on
                        },
                        canShowAttentionGrabber: function() {
                            return "editor" == this.placed_on && (!this.is_chat_open && (!!this.attentionGrabberEnabled && (!!this.hoveringMessagesVisible && (null != this.customAttentionGrabberTexts && 0 != this.customAttentionGrabberTexts.length && 0 != this.customAttentionGrabberTexts[0].length))))
                        },
                        attentionGrabberEnabled: function() {
                            var t, e, n, i;
                            return (null === (t = this.settings) || void 0 === t || null === (e = t.attention_grabber) || void 0 === e ? void 0 : e.desktop.enabled) || (null === (n = this.settings) || void 0 === n || null === (i = n.attention_grabber) || void 0 === i ? void 0 : i.mobile.enabled)
                        },
                        customAttentionGrabberTexts: function() {
                            var t, e = [];
                            return null == this.texts || null == (null === (t = this.texts) || void 0 === t ? void 0 : t.attention_grabber_hovering_messages) || 0 == this.texts.attention_grabber_hovering_messages.length ? e : this.texts.attention_grabber_hovering_messages
                        },
                        attentionGrabberTexts: function() {
                            return this.customAttentionGrabberTexts
                        },
                        attentionGrabberTextWrapperCSS: function() {
                            return {
                                position: "absolute",
                                right: "0px",
                                bottom: this.chatIconSize + 15 + "px",
                                width: "300px"
                            }
                        },
                        attentionGrabberTextCSS: function() {
                            var t = {
                                position: "relative",
                                padding: "15px",
                                "padding-right": "25px",
                                "border-radius": "5px",
                                "font-size": "14px"
                            };
                            return t["background-color"] = this.primaryColor, t.color = this.foregroundColor, t
                        },
                        attentionGrabberTextCaretCSS: function() {
                            return {
                                position: "absolute",
                                right: "25px",
                                bottom: "-5px",
                                width: "10px",
                                height: "10px",
                                transform: "rotate(45deg)",
                                "background-color": this.primaryColor
                            }
                        },
                        botIconURL: function() {
                            return this.bot_icon_url
                        },
                        chatIconDesignID: function() {
                            var t;
                            return null === (t = this.chat_icon) || void 0 === t ? void 0 : t.type
                        },
                        showSources: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var n = null == e ? void 0 : e.enabled;
                                return null !== n && (0 != n && ((0 != this.showSourcePageTitle || 0 != this.showSourcePageURL || 0 != this.showSourceDocumentFilename || 0 != this.showSourceDocumentURL) && n))
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourcePageTitle: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var n = null == e ? void 0 : e.fields;
                                if (null == n) return !1;
                                var i = null == n ? void 0 : n.page_title;
                                return null !== i && i
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourcePageURL: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var n = null == e ? void 0 : e.fields;
                                if (null == n) return !1;
                                var i = null == n ? void 0 : n.page_url;
                                return null !== i && i
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourceDocumentFilename: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var n = null == e ? void 0 : e.fields;
                                if (null == n) return !1;
                                var i = null == n ? void 0 : n.document_filename;
                                return null !== i && i
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourceDocumentURL: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var n = null == e ? void 0 : e.fields;
                                if (null == n) return !1;
                                var i = null == n ? void 0 : n.document_url;
                                return null !== i && i
                            } catch (t) {
                                return !1
                            }
                        },
                        sourcesWrapperCSS: function() {
                            return {
                                "margin-top": "10px",
                                "font-size": "0.95em"
                            }
                        },
                        sourceWrapperCSS: function() {},
                        sourceTitleCSS: function() {
                            var t = Object(i.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "500"
                            }, "color", "#000");
                            return this.showSourcePageURL && (t["margin-bottom"] = "5px", t["padding-bottom"] = "5px", t["border-bottom"] = "1px solid #dee1e5"), t
                        },
                        sourceDocumentFilenameCSS: function() {
                            var t = Object(i.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "500"
                            }, "color", "#000");
                            return this.showSourceDocumentURL && (t["margin-bottom"] = "5px", t["padding-bottom"] = "5px", t["border-bottom"] = "1px solid #dee1e5"), t
                        },
                        sourceDocumentFilenameOnlyCSS: function() {
                            return Object(i.a)({
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
                                "margin-bottom": "2px",
                                direction: this.languageDirection
                            }
                        },
                        maxSources: function() {
                            var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                            if (null == e) return 1;
                            var n = null == e ? void 0 : e.max;
                            return null == n ? 1 : n
                        },
                        helpfulRatingContainerCSS: function() {
                            return {
                                "margin-top": "15px",
                                "padding-top": "15px",
                                "border-top": "1px solid #dee1e5",
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
                        inputLabelCSS: function() {
                            return {
                                "font-weight": "600",
                                "margin-bottom": "5px"
                            }
                        },
                        inputWrapperCSS: function() {
                            return {
                                margin: "10px 0",
                                "font-size": "0.95em",
                                display: "block",
                                background: "#FFFFFF"
                            }
                        },
                        inputBoxWrapperCSS: function() {
                            return {
                                padding: "7px 10px",
                                background: "transparent",
                                "border-radius": "5px",
                                display: "flex",
                                "align-items": "center",
                                border: "1px solid #ebebeb"
                            }
                        },
                        inputBoxCSS: function() {
                            var t = {
                                width: "100%",
                                background: "transparent !important",
                                outline: "none !important",
                                border: "none !important",
                                "background-image": "none !important",
                                "background-color": "transparent !important",
                                "-webkit-box-shadow": "none !important",
                                "-moz-box-shadow": "none !important",
                                "box-shadow": "none !important",
                                "-webkit-appearance": "none !important",
                                appearance: "none !important",
                                resize: "none",
                                "outline-style": "none !important"
                            };
                            return this.languageDirection, this.is_mobile_viewport ? t["font-size"] = "16px" : t["font-size"] = "14px", t
                        },
                        bottomSection: function() {
                            return {
                                "padding-top": "10px"
                            }
                        },
                        messageInputWrapperCSS: function() {
                            return {
                                position: "relative",
                                display: "flex",
                                "align-items": "center",
                                "border-top": "1px solid #f3f4f6"
                            }
                        },
                        messageInputCSS: function() {
                            var t = {
                                padding: "15px 35px 15px 15px",
                                width: "100%",
                                background: "transparent !important",
                                outline: "none !important",
                                border: "none !important",
                                "background-image": "none !important",
                                "background-color": "transparent !important",
                                "-webkit-box-shadow": "none !important",
                                "-moz-box-shadow": "none !important",
                                "box-shadow": "none !important",
                                "-webkit-appearance": "none !important",
                                appearance: "none !important",
                                resize: "none",
                                "outline-style": "none !important"
                            };
                            return this.is_mobile_viewport ? t["font-size"] = "16px" : t["font-size"] = "14px", "rtl" == this.languageDirection && (t.direction = "rtl", t.padding = "15px 15px 15px 35px"), t
                        },
                        parsed_conversation: function() {
                            var t = this.conversation;
                            return null != t && null != t || (t = []), t
                        },
                        chatIconSize: function() {
                            var t, e, n = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e ? void 0 : e.size;
                            return null == n && (n = 55), n
                        },
                        hoveringMessageCloseButtonWrapperCSS: function() {
                            var t, e, n, i, o, r, l = "rgb(255 255 255)",
                                a = "#e7ebf0";
                            null != this.hoveringMessageSettings && (null != (null === (t = this.hoveringMessageSettings) || void 0 === t ? void 0 : t.background_color) && (l = null === (e = this.hoveringMessageSettings) || void 0 === e ? void 0 : e.background_color), null != (null === (n = this.hoveringMessageSettings) || void 0 === n || null === (i = n.border) || void 0 === i ? void 0 : i.color) && (a = null === (o = this.hoveringMessageSettings) || void 0 === o || null === (r = o.border) || void 0 === r ? void 0 : r.color));
                            return {
                                position: "absolute",
                                top: "-25px",
                                right: "0",
                                zIndex: "1",
                                background: "".concat(l),
                                borderRadius: "999px",
                                border: "1px solid ".concat(a),
                                padding: "5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        },
                        hoveringMessageCloseButtonSvgCSS: function() {
                            return {
                                width: "8px"
                            }
                        },
                        hoveringMessageCloseButtonSvgPathCSS: function() {
                            var t, e, n, i, o = "#aeaeae";
                            null != this.hoveringMessageSettings && (null != (null === (t = this.hoveringMessageSettings) || void 0 === t || null === (e = t.font) || void 0 === e ? void 0 : e.color) && (o = null === (n = this.hoveringMessageSettings) || void 0 === n || null === (i = n.font) || void 0 === i ? void 0 : i.color));
                            return {
                                stroke: "".concat(o),
                                strokeWidth: "3px"
                            }
                        },
                        hoveringMessageWrapperCSS: function() {
                            var t, e = "rgb(255 255 255)",
                                n = "rgb(0 0 0)",
                                i = 5,
                                o = 15,
                                r = 1,
                                l = "#e6e9ee";
                            if (null != this.hoveringMessageSettings) {
                                var a, s, u, c, d, h, p, v, g, f, m, _, b, C, y, S, x, w, k, T, I, M, E, A;
                                if (null != (null === (a = this.hoveringMessageSettings) || void 0 === a ? void 0 : a.background_color) && (e = null === (s = this.hoveringMessageSettings) || void 0 === s ? void 0 : s.background_color), null != (null === (u = this.hoveringMessageSettings) || void 0 === u ? void 0 : u.font)) null != (null === (d = this.hoveringMessageSettings) || void 0 === d || null === (h = d.font) || void 0 === h ? void 0 : h.color) && (n = null === (p = this.hoveringMessageSettings) || void 0 === p || null === (v = p.font) || void 0 === v ? void 0 : v.color), null != (null === (g = this.hoveringMessageSettings) || void 0 === g || null === (f = g.font) || void 0 === f ? void 0 : f.size) && (o = null === (m = this.hoveringMessageSettings) || void 0 === m || null === (_ = m.font) || void 0 === _ ? void 0 : _.size);
                                if (null != (null === (c = this.hoveringMessageSettings) || void 0 === c ? void 0 : c.border)) null != (null === (b = this.hoveringMessageSettings) || void 0 === b || null === (C = b.border) || void 0 === C ? void 0 : C.color) && (l = null === (y = this.hoveringMessageSettings) || void 0 === y || null === (S = y.border) || void 0 === S ? void 0 : S.color), null != (null === (x = this.hoveringMessageSettings) || void 0 === x || null === (w = x.border) || void 0 === w ? void 0 : w.size) && (r = null === (k = this.hoveringMessageSettings) || void 0 === k || null === (T = k.border) || void 0 === T ? void 0 : T.size), null != (null === (I = this.hoveringMessageSettings) || void 0 === I || null === (M = I.border) || void 0 === M ? void 0 : M.roundness) && (i = null === (E = this.hoveringMessageSettings) || void 0 === E || null === (A = E.border) || void 0 === A ? void 0 : A.roundness)
                            }
                            var R, B, F = {
                                position: "relative",
                                padding: "10px 15px",
                                borderRadius: "".concat(i, "px"),
                                fontSize: "".concat(o, "px"),
                                backgroundColor: e,
                                color: n,
                                border: "".concat(r, "px solid ").concat(l),
                                marginBottom: "7px"
                            };
                            null != (null === (t = this.hoveringMessageSettings) || void 0 === t ? void 0 : t.shadow) && (1 == (null === (R = this.hoveringMessageSettings) || void 0 === R || null === (B = R.shadow) || void 0 === B ? void 0 : B.enabled) && (F["box-shadow"] = "-2px 0px 10px rgba(0,0,0,.05)", F["-moz-box-shadow"] = "-2px 0px 10px rgba(0,0,0,.05)", F["-webkit-box-shadow"] = "-2px 0px 10px rgba(0,0,0,.05)"));
                            return F
                        },
                        chatContainerCSS: function() {
                            var t = this.appearance.alignment.offset.x,
                                e = this.appearance.alignment.offset.y,
                                n = {};
                            return "chatbot-testing" == this.placed_on || "sharing" == this.placed_on || (n = "public_embed" == this.placed_on ? {
                                position: "absolute",
                                "z-index": 1,
                                right: "0",
                                bottom: "0",
                                width: "100%",
                                height: "100%"
                            } : {
                                position: "fixed",
                                "z-index": 1,
                                bottom: "".concat(e, "px"),
                                right: "".concat(t, "px"),
                                top: "20px"
                            }), n["--chtl-primary-color"] = this.primaryColor, n["--chtl-text-color"] = this.foregroundColor, n
                        },
                        chatWrapperCSS: function() {
                            return "chatbot-testing" == this.placed_on || "sharing" == this.placed_on ? {
                                height: "100%",
                                width: "100%",
                                "max-width": "1200px"
                            } : {
                                height: "100%"
                            }
                        },
                        customChatButtonWrapperCSS: function() {
                            var t, e, n, i, o = {
                                height: "".concat(this.chatIconSize, "px"),
                                width: "".concat(this.chatIconSize, "px"),
                                cursor: "pointer",
                                "z-index": "1"
                            };
                            null != this.chat_icon_url && (o["background-image"] = "url(".concat(this.chat_icon_url, ")"), o["background-size"] = "cover", o["background-repeat"] = "no-repeat", o["background-position"] = "center");
                            var r = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e ? void 0 : e.full_rounded,
                                l = null === (n = this.appearance) || void 0 === n || null === (i = n.chat_icon) || void 0 === i ? void 0 : i.border_radius;
                            return o["border-radius"] = 1 == r || null == l ? "100%" : "".concat(l, "px"), o
                        },
                        defaultChatButtonWrapperCSS: function() {
                            var t, e, n, i, o = {
                                    height: "".concat(this.chatIconSize, "px"),
                                    width: "".concat(this.chatIconSize, "px"),
                                    display: "flex",
                                    "justify-content": "center",
                                    "align-items": "center",
                                    cursor: "pointer",
                                    "z-index": "1"
                                },
                                r = this.primaryColor;
                            o["background-color"] = r;
                            var l = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e ? void 0 : e.full_rounded,
                                a = null === (n = this.appearance) || void 0 === n || null === (i = n.chat_icon) || void 0 === i ? void 0 : i.border_radius;
                            return o["border-radius"] = 1 == l || null == a ? "100%" : "".concat(a, "px"), o
                        },
                        defaultChatButtonIconCSS: function() {
                            var t = {
                                transition: "width ease-in-out 0.05s"
                            };
                            return this.is_chat_open ? (t.width = "0", t.height = "0", t.opacity = "0") : (t.opacity = "1", t.width = "".concat(this.chatIconSize / 2, "px"), t.height = "".concat(this.chatIconSize / 2, "px")), t
                        },
                        closeChatButtonIconCSS: function() {
                            var t = {
                                transition: "width ease-in-out 0.05s"
                            };
                            return this.is_chat_open ? (t.opacity = "1", t.width = "".concat(.33 * this.chatIconSize, "px"), t.height = "".concat(.33 * this.chatIconSize, "px")) : (t.opacity = "0", t.width = "0", t.height = "0"), t
                        },
                        chatButtonContainerCSS: function() {
                            var t = {
                                    display: "flex",
                                    "align-items": "center",
                                    position: "absolute",
                                    bottom: "0",
                                    right: "0"
                                },
                                e = this.appearance.alignment.position;
                            return t["justify-content"] = "bl" == e || "tl" == e ? "left" : "right", t
                        },
                        chatUIContainerCSS: function() {
                            var t = {
                                width: "100%",
                                background: "#FFF",
                                transition: "width ease-in-out 0.2s, opacity ease-in 0.1s",
                                "border-radius": "15px",
                                overflow: "hidden"
                            };
                            if ("chatbot-testing" == this.placed_on) t.width = "100%", t["border-radius"] = "0", t.height = "90vh";
                            else if (t.position = "absolute", "public_embed" == this.placed_on) t.bottom = "0px", t.right = "0px", t.height = "100%", t.width = "100%", t["border-radius"] = "0";
                            else if ("sharing" == this.placed_on) t.bottom = "0px", t.right = "0px", t.height = "100%", t.width = "100%", t["border-radius"] = "0";
                            else {
                                var e, n;
                                t["margin-bottom"] = "20px", t.height = "min(600px, 100% - 100px)", t["min-height"] = "80px", t["max-height"] = "700px", t.bottom = "".concat(this.chatIconSize, "px"), t.right = "0px";
                                var i = null === (e = this.appearance) || void 0 === e || null === (n = e.chat_interface) || void 0 === n ? void 0 : n.desktop_max_width;
                                null == i && (i = 400), t.width = "".concat(i, "px")
                            }
                            return this.is_chat_open ? t.opacity = 1 : t.opacity = 0, "public_embed" != this.placed_on && "chatbot-testing" != this.placed_on && (t["box-shadow"] = "0px 5px 10px 0 rgba(0,0,0,0.01), 0 7px 12px 0 rgba(0,0,0,.1)"), t
                        },
                        startChatCSS: function() {
                            return {
                                display: "block",
                                padding: "10px",
                                "text-align": "center",
                                "background-color": this.primaryColor,
                                "border-radius": "5px",
                                color: this.foregroundColor,
                                "font-weight": "600",
                                cursor: "pointer"
                            }
                        },
                        chatUIHeaderCSS: function() {
                            var t = {
                                    display: "flex",
                                    "justify-content": "space-between",
                                    padding: "15px",
                                    "align-items": "center"
                                },
                                e = this.primaryColor;
                            return t["background-color"] = e, 2 == this.current_chat_header_type && (t["align-items"] = "normal", t.padding = "30px 15px"), t
                        },
                        prechatHeaderCSS: function() {
                            var t = {
                                    display: "flex",
                                    "justify-content": "space-between",
                                    padding: "15px",
                                    "align-items": "center"
                                },
                                e = this.primaryColor;
                            return t["background-color"] = e, t
                        },
                        chatHeaderTitleCSS_type1: function() {
                            return {
                                color: this.foregroundColor,
                                "font-weight": "600",
                                "font-size": "16px",
                                "white-space": "nowrap",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "padding-right": "10px"
                            }
                        },
                        chatHeaderTitleCSS_type2: function() {
                            return {
                                color: this.foregroundColor,
                                "font-weight": "700",
                                "font-size": "25px",
                                "margin-bottom": "5px"
                            }
                        },
                        chatHeaderSubtitleCSS_type2: function() {
                            var t, e, n = null;
                            return null != (null === (t = this.appearance) || void 0 === t || null === (e = t.colors) || void 0 === e ? void 0 : e.foreground) && (n = this.$getColorString(this.appearance.colors.foreground, 80)), null == n && (n = this.foregroundColor), {
                                color: n,
                                "font-weight": "400",
                                "font-size": "16px"
                            }
                        },
                        primaryColor: function() {
                            var t, e, n = "#000000FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) ? n : null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.primary) ? this.$getColorString(n) : this.$getColorString(this.appearance.colors.primary)
                        },
                        foregroundColor: function() {
                            var t, e, n, i = "#FFFFFFFF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) ? i : null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.foreground) ? this.$getColorString(i) : this.$getColorString(null === (n = this.appearance.colors) || void 0 === n ? void 0 : n.foreground)
                        },
                        chatIconColor: function() {
                            return this.foregroundColor
                        },
                        assistantBGColor: function() {
                            var t, e, n = "#f1f5f9FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.assistant_chat_bubble_background) || 0 == this.appearance.colors.assistant_chat_bubble_background.length ? n : this.appearance.colors.assistant_chat_bubble_background
                        },
                        assistantTextColor: function() {
                            var t, e, n, i, o = "#000000FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.assistant_chat_bubble_text) || 0 == (null === (n = this.appearance.colors) || void 0 === n ? void 0 : n.assistant_chat_bubble_text.length) ? o : null === (i = this.appearance.colors) || void 0 === i ? void 0 : i.assistant_chat_bubble_text
                        },
                        welcomeTexts: function() {
                            var t, e = [];
                            return null == this.texts || null == (null === (t = this.texts) || void 0 === t ? void 0 : t.welcome_text) || 0 == this.texts.welcome_text.length ? e : this.texts.welcome_text
                        },
                        predefinedQueryCSS: function() {
                            var t;
                            return t = {
                                "font-size": "12px",
                                padding: "5px",
                                "border-radius": "5px",
                                border: "1px solid ".concat(this.primaryColor),
                                display: "inline-block"
                            }, Object(i.a)(t, "padding", "5px 10px"), Object(i.a)(t, "background", "transparent"), Object(i.a)(t, "color", this.primaryColor), Object(i.a)(t, "cursor", "pointer"), Object(i.a)(t, "margin", "4px 4px 0 0"), t
                        }
                    }
                }),
                l = n(90),
                a = Object(l.a)(r, (function() {
                    var t, e, n, i, o, r, l, a, s, u, c, d, h, p, v, g, f, m, _, b, C, y, S, x, w, k, T, I, M = this,
                        E = M._self._c;
                    return E("div", [E("div", {
                        style: M.chatContainerCSS
                    }, [E("div", {
                        style: M.chatWrapperCSS
                    }, [E("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [E("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: M.is_chat_open,
                            expression: "is_chat_open"
                        }],
                        style: M.chatUIContainerCSS
                    }, [E("div", {
                        staticStyle: {
                            display: "flex",
                            height: "100%",
                            width: "100%",
                            flex: "1 1 0%"
                        }
                    }, [M.showPrechatForm ? E("div", {
                        staticStyle: {
                            "flex-direction": "column",
                            display: "flex",
                            flex: "1 1 0%",
                            "min-height": "0px",
                            width: "100%"
                        }
                    }, [E("div", {
                        style: M.prechatHeaderCSS
                    }, [E("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == M.current_chat_header_type,
                            expression: "current_chat_header_type == 1"
                        }],
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [E("div", {
                        style: M.chatHeaderTitleCSS_type1
                    }, [M._v(M._s(null === (t = M.texts) || void 0 === t || null === (e = t.chat_header) || void 0 === e ? void 0 : e.title))])]), M._v(" "), E("div", {
                        staticClass: "tpicns",
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            gap: "10px"
                        }
                    }, [M.showCloseButton ? E("div", {
                        on: {
                            click: function(t) {
                                return M.closeChat()
                            }
                        }
                    }, [E("svg", {
                        attrs: {
                            width: "11",
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [E("path", {
                        attrs: {
                            d: "M41.1666 495.834L496.167 40.8335",
                            stroke: M.foregroundColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), M._v(" "), E("path", {
                        attrs: {
                            d: "M496.167 495.834L41.1666 40.8335",
                            stroke: M.foregroundColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]) : M._e()])]), M._v(" "), E("div", {
                        style: {
                            padding: "15px",
                            "overflow-y": "scroll",
                            direction: M.languageDirection
                        }
                    }, [E("div", {
                        staticClass: "chtl-reset",
                        staticStyle: {
                            color: "#393939"
                        },
                        domProps: {
                            innerHTML: M._s(null === (n = M.settings) || void 0 === n || null === (i = n.form) || void 0 === i ? void 0 : i.message)
                        }
                    }), M._v(" "), E("div", {
                        staticStyle: {
                            margin: "0",
                            "margin-top": "-5px"
                        }
                    }), M._v(" "), E("div", {
                        staticStyle: {
                            margin: "0",
                            "margin-top": "-5px"
                        }
                    }), M._v(" "), null != M.customerDetailsToCollect && null !== (o = M.customerDetailsToCollect) && void 0 !== o && null !== (r = o.name) && void 0 !== r && r.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS,
                        attrs: {
                            direction: ""
                        }
                    }, [M._v(M._s(M.t.lead_form.name))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.name,
                            expression: "customer.name"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.name
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "name", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.name && M.errors.customer.name.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.name))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (l = M.customerDetailsToCollect) && void 0 !== l && null !== (a = l.email) && void 0 !== a && a.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.email))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.email,
                            expression: "customer.email"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "email"
                        },
                        domProps: {
                            value: M.customer.email
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "email", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.email && M.errors.customer.email.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.email))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (s = M.customerDetailsToCollect) && void 0 !== s && null !== (u = s.company) && void 0 !== u && u.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.company_name))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.company,
                            expression: "customer.company"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.company
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "company", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.company && M.errors.customer.company.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.company))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (c = M.customerDetailsToCollect) && void 0 !== c && null !== (d = c.website) && void 0 !== d && d.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.website_url))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.website,
                            expression: "customer.website"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.website
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "website", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.website && M.errors.customer.website.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.website))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (h = M.customerDetailsToCollect) && void 0 !== h && null !== (p = h.job_title) && void 0 !== p && p.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.job_title))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.job_title,
                            expression: "customer.job_title"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.job_title
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "job_title", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.job_title && M.errors.customer.job_title.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.job_title))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (v = M.customerDetailsToCollect) && void 0 !== v && null !== (g = v.phone) && void 0 !== g && g.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.phone_number))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.phone,
                            expression: "customer.phone"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.phone
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "phone", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.phone && M.errors.customer.phone.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.phone))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (f = M.customerDetailsToCollect) && void 0 !== f && null !== (m = f.address) && void 0 !== m && m.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.address))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.address,
                            expression: "customer.address"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.address
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "address", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.address && M.errors.customer.address.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.address))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (_ = M.customerDetailsToCollect) && void 0 !== _ && null !== (b = _.city) && void 0 !== b && b.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.city))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.city,
                            expression: "customer.city"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.city
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "city", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.city && M.errors.customer.city.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.city))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (C = M.customerDetailsToCollect) && void 0 !== C && null !== (y = C.state) && void 0 !== y && y.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.state))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.state,
                            expression: "customer.state"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.state
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "state", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.state && M.errors.customer.state.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.state))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (S = M.customerDetailsToCollect) && void 0 !== S && null !== (x = S.zip) && void 0 !== x && x.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.zip))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.zip,
                            expression: "customer.zip"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.zip
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "zip", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.zip && M.errors.customer.zip.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.zip))]) : M._e()]) : M._e(), M._v(" "), null != M.customerDetailsToCollect && null !== (w = M.customerDetailsToCollect) && void 0 !== w && null !== (k = w.country) && void 0 !== k && k.enabled ? E("div", {
                        style: M.inputWrapperCSS
                    }, [E("div", {
                        style: M.inputLabelCSS
                    }, [M._v(M._s(M.t.lead_form.country))]), M._v(" "), E("div", {
                        style: M.inputBoxWrapperCSS
                    }, [E("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.customer.country,
                            expression: "customer.country"
                        }],
                        style: M.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: M.customer.country
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || M.$set(M.customer, "country", t.target.value)
                            }
                        }
                    })]), M._v(" "), null != M.errors.customer.country && M.errors.customer.country.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.errors.customer.country))]) : M._e()]) : M._e(), M._v(" "), E("div", {
                        staticStyle: {
                            "margin-top": "20px"
                        },
                        style: M.startChatCSS,
                        on: {
                            click: M.startChatClicked
                        }
                    }, [M._v(M._s(M.t.lead_form.submit_btn))]), M._v(" "), null != M.customer_info_collector.error && M.customer_info_collector.error.length > 0 ? E("div", {
                        staticStyle: {
                            "margin-top": "10px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [M._v(M._s(M.customer_info_collector.error))]) : M._e()])]) : E("div", {
                        staticStyle: {
                            "flex-direction": "column",
                            display: "flex",
                            flex: "1 1 0%",
                            "min-height": "0px",
                            width: "100%"
                        }
                    }, [E("div", {
                        style: M.chatUIHeaderCSS
                    }, [E("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == M.current_chat_header_type,
                            expression: "current_chat_header_type == 1"
                        }],
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [E("div", {
                        style: M.chatHeaderTitleCSS_type1
                    }, [M._v(M._s(null === (T = M.texts) || void 0 === T || null === (I = T.chat_header) || void 0 === I ? void 0 : I.title))])]), M._v(" "), E("div", {
                        staticClass: "tpicns",
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            gap: "10px"
                        }
                    }, [E("div", {
                        staticClass: "ellipsis-dropdown",
                        style: {
                            direction: M.languageDirection
                        },
                        attrs: {
                            tabindex: "0"
                        }
                    }, [E("div", {
                        staticClass: "dropdown-btn",
                        staticStyle: {
                            display: "block"
                        },
                        on: {
                            click: function() {
                                M.show_ellipsis_dropdown = !M.show_ellipsis_dropdown
                            }
                        }
                    }, [E("svg", {
                        attrs: {
                            width: "11",
                            height: "11",
                            viewBox: "0 0 187 654",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [E("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0.333303 560.667C0.333301 612.235 42.0986 654 93.6666 654C145.235 654 187 612.235 187 560.667C187 509.099 145.235 467.333 93.6666 467.333C42.0986 467.333 0.333306 509.099 0.333303 560.667ZM0.333324 93.9998C0.333321 145.568 42.0987 187.333 93.6667 187.333C145.235 187.333 187 145.568 187 93.9998C187 42.4318 145.235 0.666502 93.6667 0.6665C42.0987 0.666498 0.333326 42.4318 0.333324 93.9998ZM0.333313 327.333C0.333311 378.901 42.0986 420.667 93.6666 420.667C145.235 420.667 187 378.901 187 327.333C187 275.765 145.235 234 93.6667 234C42.0987 234 0.333316 275.765 0.333313 327.333Z",
                            fill: M.foregroundColor
                        }
                    })])]), M._v(" "), M.show_ellipsis_dropdown ? E("ul", {
                        staticClass: "dropdown-content"
                    }, [E("li", {
                        on: {
                            click: function(t) {
                                return M.clearChat()
                            }
                        }
                    }, [M._v(M._s(M.t.global.clear_chat))]), M._v(" "), "public_embed" == this.placed_on ? E("li", {
                        on: {
                            click: function(t) {
                                return M.closeChat()
                            }
                        }
                    }, [M._v(M._s(M.t.global.minimize))]) : M._e()]) : M._e()]), M._v(" "), M.showCloseButton ? E("div", {
                        on: {
                            click: function(t) {
                                return M.closeChat()
                            }
                        }
                    }, [E("svg", {
                        attrs: {
                            width: "11",
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [E("path", {
                        attrs: {
                            d: "M41.1666 495.834L496.167 40.8335",
                            stroke: M.foregroundColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), M._v(" "), E("path", {
                        attrs: {
                            d: "M496.167 495.834L41.1666 40.8335",
                            stroke: M.foregroundColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]) : M._e()])]), M._v(" "), E("div", {
                        ref: "chat_interface",
                        staticStyle: {
                            height: "100%",
                            padding: "15px",
                            "overflow-y": "scroll"
                        }
                    }, [M._l(M.welcomeTexts, (function(t, e) {
                        return E("div", [null != t && t.length > 0 ? E("div", {
                            style: M.chatBubbleWrapperCSS("bot")
                        }, [E("div", {
                            style: M.chatAvatarImgCSS("bot")
                        }), M._v(" "), E("div", [E("div", {
                            staticClass: "chtl-reset bot",
                            style: M.chatBubbleCSS("bot"),
                            domProps: {
                                innerHTML: M._s(t)
                            }
                        }), M._v(" "), e == M.welcomeTexts.length - 1 ? E("div", {
                            staticClass: "mt-1"
                        }, [null != M.predefined_queries && M.predefined_queries.length > 0 ? E("div", {
                            staticStyle: {
                                "padding-bottom": "5px"
                            }
                        }, M._l(M.predefined_queries, (function(t) {
                            return null != (null == t ? void 0 : t.label) && (null == t ? void 0 : t.label.length) > 0 ? E("div", {
                                style: M.predefinedQueryCSS,
                                on: {
                                    click: function(e) {
                                        return M.predefinedQuerySelect(t)
                                    }
                                }
                            }, [M._v(M._s(t.label))]) : M._e()
                        })), 0) : M._e()]) : M._e()])]) : M._e()])
                    })), M._v(" "), M._l(M.parsed_conversation, (function(t, e) {
                        return E("div", {
                            key: t.id
                        }, [null != t.text && t.text.length > 0 ? E("div", [E("div", ["bot" == t.role ? E("div", {
                            style: M.chatBubbleWrapperCSS(t.role)
                        }, [E("div", {
                            style: M.chatAvatarImgCSS(t.role)
                        }), M._v(" "), E("div", [E("div", {
                            style: M.chatBubbleCSS(t.role)
                        }, [E("div", {
                            staticClass: "chtl-reset bot",
                            domProps: {
                                innerHTML: M._s(M.parseMessageAsHTML(t))
                            }
                        }), M._v(" "), M.showSources && M.shouldShowMessageSources(t) ? E("div", {
                            style: M.sourcesWrapperCSS
                        }, [M.getMessageSources(t).length <= 1 ? E("div", {
                            style: M.sourceLabelCSS
                        }, [M._v(M._s(M.t.chat_bubble.source) + ":")]) : E("div", {
                            style: M.sourceLabelCSS
                        }, [M._v(M._s(M.t.chat_bubble.sources) + ":")]), M._v(" "), E("div", {
                            style: {
                                direction: M.languageDirection
                            }
                        }, M._l(M.getMessageSources(t), (function(t) {
                            return E("div", {
                                staticStyle: {
                                    display: "inline-block",
                                    "user-select": "none"
                                }
                            }, ["webpage" == t.type && (M.showSourcePageTitle || M.showSourcePageURL) ? E("a", {
                                staticClass: "chtl-source",
                                style: M.sourceWrapperCSS,
                                attrs: {
                                    target: "_blank",
                                    href: t.url
                                }
                            }, [M.showSourcePageTitle && null != t.title && t.title.length > 0 ? E("div", {
                                style: M.sourceTitleCSS
                            }, [M._v(M._s(t.title))]) : M._e(), M._v(" "), M.showSourcePageURL ? E("div", {
                                style: M.sourceURLCSS
                            }, [M._v(M._s(t.shortened_url))]) : M._e()]) : "document_url" == t.type && (M.showSourceDocumentFilename || M.showSourceDocumentURL) ? E("a", {
                                staticClass: "chtl-source",
                                style: M.sourceWrapperCSS,
                                attrs: {
                                    target: "_blank",
                                    href: t.url
                                }
                            }, [M.showSourceDocumentFilename && null != t.filename && t.filename.length > 0 ? E("div", {
                                style: M.sourceDocumentFilenameCSS
                            }, [M._v(M._s(t.filename))]) : M._e(), M._v(" "), M.showSourceDocumentURL ? E("div", {
                                style: M.sourceURLCSS
                            }, [M._v(M._s(t.shortened_url))]) : M._e()]) : "document" == t.type && M.showSourceDocumentFilename ? E("div", {
                                staticClass: "chtl-source chtl-source--w-lg",
                                style: M.sourceWrapperCSS,
                                attrs: {
                                    target: "_blank",
                                    href: t.url
                                }
                            }, [M.showSourceDocumentFilename && null != t.filename && t.filename.length > 0 ? E("div", {
                                style: M.sourceDocumentFilenameOnlyCSS
                            }, [M._v(M._s(t.filename))]) : M._e()]) : M._e()])
                        })), 0)]) : M._e(), M._v(" "), M.showRating && !0 !== (null == t ? void 0 : t.streaming) ? E("div", {
                            style: M.helpfulRatingContainerCSS
                        }, [E("div", {
                            style: M.helpfulRatingTextCSS
                        }, [M._v(M._s(M.t.chat_bubble.rating_message))]), M._v(" "), E("div", {
                            staticStyle: {
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "start"
                            }
                        }, [E("span", {
                            staticClass: "response-helpful-rating",
                            class: {
                                active: 1 === (null == t ? void 0 : t.rating_value), disabled: null !== (null == t ? void 0 : t.rating_value) && 1 !== (null == t ? void 0 : t.rating_value)
                            },
                            on: {
                                click: function(e) {
                                    return M.ratingSelected(t, 1)
                                }
                            }
                        }, [M._v(M._s(M.t.chat_bubble.rating_yes))]), M._v(" "), E("span", {
                            staticClass: "response-helpful-rating",
                            class: {
                                active: -1 === (null == t ? void 0 : t.rating_value), disabled: null !== (null == t ? void 0 : t.rating_value) && -1 !== (null == t ? void 0 : t.rating_value)
                            },
                            style: {
                                "margin-left": "ltr" == M.languageDirection ? "10px" : 0,
                                "margin-right": "rtl" == M.languageDirection ? "10px" : 0
                            },
                            on: {
                                click: function(e) {
                                    return M.ratingSelected(t, -1)
                                }
                            }
                        }, [M._v(M._s(M.t.chat_bubble.rating_no))])])]) : M._e()])])]) : "user" == t.role ? E("div", {
                            style: M.chatBubbleWrapperCSS(t.role)
                        }, [E("div", {
                            staticClass: "chtl-reset",
                            style: M.chatBubbleCSS(t.role),
                            domProps: {
                                innerHTML: M._s(M.parseMessageAsHTML(t))
                            }
                        })]) : M._e()])]) : M._e()])
                    })), M._v(" "), E("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: M.chatbot_thinking,
                            expression: "chatbot_thinking"
                        }],
                        staticClass: "ch1fkl",
                        style: M.chatBubbleWrapperCSS("bot")
                    }, [E("div", {
                        style: M.chatAvatarImgCSS("bot")
                    }), M._v(" "), E("div", {
                        style: M.chatBubbleCSS("bot_thinking")
                    }, [E("div", {
                        staticClass: "ticontainer"
                    }, [E("div", {
                        staticClass: "tiblock"
                    }, [E("div", {
                        staticClass: "tidot"
                    }), M._v(" "), E("div", {
                        staticClass: "tidot"
                    }), M._v(" "), E("div", {
                        staticClass: "tidot"
                    })])])])]), M._v(" "), E("div", {
                        ref: "chatbot_thinking_bubble"
                    }), M._v(" "), E("div", {
                        ref: "hidden_element",
                        staticStyle: {
                            height: "30px",
                            width: "0"
                        }
                    })], 2), M._v(" "), E("div", {
                        style: M.bottomSection
                    }, [E("div", {
                        style: M.messageInputWrapperCSS
                    }, [E("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: M.user_message,
                            expression: "user_message"
                        }],
                        staticClass: "chtl-message-input",
                        style: M.messageInputCSS,
                        attrs: {
                            "aria-label": M.messageInputPlaceholder,
                            rows: "1",
                            type: "text",
                            placeholder: M.messageInputPlaceholder
                        },
                        domProps: {
                            value: M.user_message
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && M._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : M.submitUserMessage.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || (M.user_message = t.target.value)
                            }
                        }
                    }), M._v(" "), E("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: M.chatbot_thinking || M.chatbot_streaming,
                            expression: "chatbot_thinking || chatbot_streaming"
                        }],
                        staticClass: "spnqlr",
                        style: M.thinkingIconCSS
                    }, [E("span", {
                        staticClass: "loader"
                    })]), M._v(" "), E("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !M.chatbot_thinking && !M.chatbot_streaming,
                            expression: "!chatbot_thinking && !chatbot_streaming"
                        }],
                        style: M.sendIconCSS
                    }, [E("svg", {
                        staticStyle: {
                            display: "block",
                            cursor: "pointer"
                        },
                        attrs: {
                            width: "15",
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        on: {
                            click: M.submitUserMessage
                        }
                    }, [E("path", {
                        attrs: {
                            fill: M.primaryColor,
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M6.67993 117.84C-22.5334 44.7987 54.0133 -25.64 124.377 9.54267L488.911 191.809C551.973 223.34 551.973 313.331 488.911 344.863L124.377 527.129C54.0133 562.317 -22.5294 491.879 6.67993 418.832L57.5439 291.676H200.891C213.776 291.676 224.224 281.228 224.224 268.343C224.224 255.457 213.776 245.009 200.891 245.009H57.5439L6.67993 117.84Z"
                        }
                    })])])]), M._v(" "), E("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null != M.chat_error && M.chat_error.length > 0,
                            expression: "chat_error != null && chat_error.length > 0"
                        }],
                        staticStyle: {
                            padding: "0 15px",
                            "margin-top": "5px",
                            "margin-bottom": "5px",
                            color: "red",
                            "font-weight": "400",
                            "font-size": "12px"
                        }
                    }, [M._v(M._s(M.chat_error))]), M._v(" "), 1 != M.hidePoweredByBranding ? E("div", {
                        staticStyle: {
                            padding: "0 15px",
                            "margin-top": "5px",
                            "margin-bottom": "5px",
                            "text-align": "center",
                            "font-size": "0.8em",
                            color: "#7d7d7d"
                        }
                    }, [M._v("\n                      Powered by "), E("a", {
                        staticStyle: {
                            color: "#7d7d7d !important",
                            "text-decoration": "underline !important",
                            display: "inline-block !important"
                        },
                        attrs: {
                            href: "https://chatling.ai?utm_source=poweredby",
                            target: "_blank"
                        }
                    }, [M._v("Chatling")])]) : M._e()])])])])]), M._v(" "), M.canShowAttentionGrabber ? E("div", {
                        style: M.attentionGrabberTextWrapperCSS
                    }, [E("div", {
                        style: M.hoveringMessageCloseButtonWrapperCSS,
                        on: {
                            click: M.closeHoveringMessages
                        }
                    }, [E("svg", {
                        style: M.hoveringMessageCloseButtonSvgCSS,
                        attrs: {
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [E("path", {
                        style: M.hoveringMessageCloseButtonSvgPathCSS,
                        attrs: {
                            d: "M2 14L14 2M2 2L14 14",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), M._v(" "), E("div", {
                        style: {
                            cursor: "pointer",
                            direction: M.languageDirection
                        },
                        on: {
                            click: M.chatIconClicked
                        }
                    }, M._l(M.attentionGrabberTexts, (function(t) {
                        return null != t && "" != t ? E("div", {
                            style: M.hoveringMessageWrapperCSS
                        }, [E("span", {
                            staticClass: "chtl-reset",
                            domProps: {
                                innerHTML: M._s(t)
                            }
                        })]) : M._e()
                    })), 0)]) : M._e(), M._v(" "), M.showChatIcon ? E("div", [M.is_chat_open || 1 != M.chat_icon_design_type && 3 != M.chat_icon_design_type || null == M.chat_icon_url ? M.is_chat_open ? M.is_chat_open ? E("div", {
                        style: M.chatButtonContainerCSS
                    }, [E("div", {
                        style: M.defaultChatButtonWrapperCSS,
                        on: {
                            click: M.chatIconClicked
                        }
                    }, [E("svg", {
                        style: M.closeChatButtonIconCSS,
                        attrs: {
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [E("path", {
                        attrs: {
                            d: "M41.1666 495.834L496.167 40.8335",
                            stroke: M.chatIconColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), M._v(" "), E("path", {
                        attrs: {
                            d: "M496.167 495.834L41.1666 40.8335",
                            stroke: M.chatIconColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])])]) : M._e() : E("div", {
                        style: M.chatButtonContainerCSS
                    }, [E("div", {
                        style: M.defaultChatButtonWrapperCSS,
                        on: {
                            click: M.chatIconClicked
                        }
                    }, [E("svg", {
                        style: M.defaultChatButtonIconCSS,
                        attrs: {
                            viewBox: "0 0 820 760",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [E("path", {
                        attrs: {
                            d: "M400 0C179.44 0 9.84565e-05 161.493 9.84565e-05 360C9.84565e-05 429.4 21.9601 496.613 63.5734 554.72C55.6934 641.88 34.5734 706.587 3.90677 737.24C-0.146568 741.293 -1.1599 747.493 1.4001 752.613C3.6801 757.187 8.33343 760 13.3334 760C13.9468 760 14.5734 759.96 15.2001 759.867C20.6001 759.107 146.04 741.04 236.76 688.693C288.293 709.48 343.173 720 400 720C620.56 720 800 558.507 800 360C800 161.493 620.56 0 400 0Z",
                            fill: M.chatIconColor
                        }
                    })])])]) : E("div", {
                        style: M.chatButtonContainerCSS
                    }, [E("div", {
                        style: M.customChatButtonWrapperCSS,
                        on: {
                            click: M.chatIconClicked
                        }
                    })])]) : M._e()], 1)])])
                }), [], !1, null, null, null);
            e.default = a.exports
        },
        411: function(t, e, n) {
            "use strict";
            var i = n(92),
                o = n(9),
                r = n(3),
                l = n(119),
                a = n(15),
                s = n(47),
                u = n(151),
                c = n(24),
                d = n(150),
                h = n(153),
                p = n(73),
                v = n(13),
                g = n(55),
                f = n(117),
                m = n(120),
                _ = n(118),
                b = n(152),
                C = n(4),
                y = b.UNSUPPORTED_Y,
                S = 4294967295,
                x = Math.min,
                w = [].push,
                k = r(/./.exec),
                T = r(w),
                I = r("".slice),
                M = !C((function() {
                    var t = /(?:)/,
                        e = t.exec;
                    t.exec = function() {
                        return e.apply(this, arguments)
                    };
                    var n = "ab".split(t);
                    return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
                }));
            l("split", (function(t, e, n) {
                var r;
                return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, n) {
                    var r = v(c(this)),
                        l = void 0 === n ? S : n >>> 0;
                    if (0 === l) return [];
                    if (void 0 === t) return [r];
                    if (!u(t)) return o(e, r, t, l);
                    for (var a, s, d, h = [], p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), g = 0, m = new RegExp(t.source, p + "g");
                        (a = o(_, m, r)) && !((s = m.lastIndex) > g && (T(h, I(r, g, a.index)), a.length > 1 && a.index < r.length && i(w, h, f(a, 1)), d = a[0].length, g = s, h.length >= l));) m.lastIndex === a.index && m.lastIndex++;
                    return g === r.length ? !d && k(m, "") || T(h, "") : T(h, I(r, g)), h.length > l ? f(h, 0, l) : h
                } : "0".split(void 0, 0).length ? function(t, n) {
                    return void 0 === t && 0 === n ? [] : o(e, this, t, n)
                } : e, [function(e, n) {
                    var i = c(this),
                        l = s(e) ? void 0 : g(e, t);
                    return l ? o(l, e, i, n) : o(r, v(i), e, n)
                }, function(t, i) {
                    var o = a(this),
                        l = v(t),
                        s = n(r, o, l, i, r !== e);
                    if (s.done) return s.value;
                    var u = d(o, RegExp),
                        c = o.unicode,
                        g = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (y ? "g" : "y"),
                        f = new u(y ? "^(?:" + o.source + ")" : o, g),
                        _ = void 0 === i ? S : i >>> 0;
                    if (0 === _) return [];
                    if (0 === l.length) return null === m(f, l) ? [l] : [];
                    for (var b = 0, C = 0, w = []; C < l.length;) {
                        f.lastIndex = y ? 0 : C;
                        var k, M = m(f, y ? I(l, C) : l);
                        if (null === M || (k = x(p(f.lastIndex + (y ? C : 0)), l.length)) === b) C = h(l, C, c);
                        else {
                            if (T(w, I(l, b, C)), w.length === _) return w;
                            for (var E = 1; E <= M.length - 1; E++)
                                if (T(w, M[E]), w.length === _) return w;
                            C = b = k
                        }
                    }
                    return T(w, I(l, b)), w
                }]
            }), !M, y)
        },
        415: function(t, e, n) {
            "use strict";
            n(385)
        },
        416: function(t, e, n) {
            var i = n(114)((function(t) {
                return t[1]
            }));
            i.push([t.i, ".quick-replies-container[data-v-42aa2515]::-webkit-scrollbar{display:none}input[data-v-42aa2515]::-webkit-inner-spin-button,input[data-v-42aa2515]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-42aa2515]{-moz-appearance:textfield}", ""]), i.locals = {}, t.exports = i
        },
        417: function(t, e, n) {
            "use strict";
            n(386)
        },
        418: function(t, e, n) {
            var i = n(114)((function(t) {
                return t[1]
            }));
            i.push([t.i, '.chtl-chat-footer-disc-text{color:var(--chtl-footer-text-color);text-align:left}.chtl-chat-footer-disc-text a,.chtl-chat-footer-disc-text div,.chtl-chat-footer-disc-text h1,.chtl-chat-footer-disc-text h2,.chtl-chat-footer-disc-text h3,.chtl-chat-footer-disc-text h4,.chtl-chat-footer-disc-text h5,.chtl-chat-footer-disc-text h6,.chtl-chat-footer-disc-text li,.chtl-chat-footer-disc-text ol,.chtl-chat-footer-disc-text p,.chtl-chat-footer-disc-text span,.chtl-chat-footer-disc-text ul{color:var(--chtl-footer-text-color)!important;font-size:1em}.chtl-chat-footer-disc-text a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.chtl-chat-ended-message{align-items:center;color:#90949c;display:flex;font-size:.85em;justify-content:center;margin-top:20px;text-align:center;white-space:nowrap}.chtl-chat-ended-message:after,.chtl-chat-ended-message:before{background-color:#d1d5db;content:"";display:block;height:1px;width:100%}.chtl-chat-ended-message:before{margin-right:10px}.chtl-chat-ended-message:after{margin-left:10px}.chtl-qkreply-btn:focus-visible,.chtl-qkreply-btn:hover,.chtl-skip-btn:focus-visible,.chtl-skip-btn:hover{background:var(--chtl-primary-color)!important;border-color:var(--chtl-primary-color)!important;color:var(--chtl-text-color)!important}.chtl-message-input{overflow-y:auto}.chtl-datepicker-input .mx-input-wrapper{padding:15px 45px 15px 15px}.chtl-datepicker-input .mx-input{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;background-color:transparent!important;background-image:none!important;background:transparent;border:none!important;box-shadow:none!important;height:auto!important;outline:none!important;outline-style:none!important;padding:0;resize:none}.chtl-datepicker-input .mx-icon-calendar{display:none}.chtl-datepicker-input .mx-icon-clear{right:45px}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}.slide-up-enter-active,.slide-up-leave-active{transition:transform .15s}.slide-up-enter,.slide-up-leave-to{transform:translateY(100%)}.chtl-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;cursor:pointer;font:inherit;margin:0;padding:0}.chtl-icon-btn:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:2px}.chtl-chat-header-action-btn.chtl-icon-btn:focus-visible{outline-color:var(--chtl-text-color)}.chtl-a11y-chat-launcher,.chtl-a11y-reset-btn,.chtl-download-format-btn,.chtl-dropdown-item,.chtl-link-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font:inherit;line-height:inherit;margin:0;padding:0;text-align:inherit}.chtl-dropdown-item{align-items:center;cursor:pointer;display:flex;gap:10px;padding:8px 10px;width:100%}.chtl-dropdown-item:focus-visible{border-radius:8px;outline:2px solid var(--chtl-primary-color);outline-offset:2px}.chtl-link-btn{color:#6b7280;cursor:pointer;font-size:.9em;font-weight:500}.chtl-link-btn:focus-visible{border-radius:6px;outline:2px solid var(--chtl-primary-color);outline-offset:2px}.chtl-download-format-btn{align-items:center;background-color:#f3f4f6;border-radius:8px;cursor:pointer;display:flex;gap:10px;padding:12px;width:100%}.chtl-download-format-btn:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:2px}.chtl-a11y-chat-launcher:focus-visible{outline:2px solid var(--chtl-primary-contrast-color);outline-offset:3px}.chtl-a11y-reset-btn:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:2px}.chtl-sources-toggle{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;cursor:pointer;display:flex;font:inherit;margin:0;padding:0}.chtl-sources-toggle:focus-visible{border-radius:4px;outline:2px solid var(--chtl-primary-color);outline-offset:2px}.chtl-msg-action{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;cursor:pointer;font:inherit;margin:0;padding:0}.chtl-msg-action:focus-visible{border-radius:4px;outline:2px solid var(--chtl-primary-color);outline-offset:2px}button.chtl-block-button-item{cursor:pointer;font:inherit}button.chtl-block-button-item:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:2px}.chtl-form-multiple-choice-item:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:2px}.chtl-carousel-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;font:inherit;margin:0;padding:0}.chtl-carousel-btn:focus-visible{border-radius:50%;outline:2px solid var(--chtl-primary-color);outline-offset:2px}.chtl-quick-reply-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;font:inherit}.chtl-quick-reply-btn:focus-visible{outline:none}button.chtl-btn-primary:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:3px}', ""]), i.locals = {}, t.exports = i
        },
        421: function(t, e, n) {
            "use strict";
            n.r(e);
            n(16), n(30);
            var i = n(12),
                o = n(21),
                r = n(11),
                l = (n(52), n(148), n(231), n(72), n(70), n(71), n(46), n(29), n(26), n(149), n(230), n(32), n(54), n(236), n(232), n(51), n(382), n(433)),
                a = n(375),
                s = n(390),
                u = n(391),
                c = n(430),
                d = (n(427), n(392)),
                h = n(393),
                p = n(394),
                v = n(395),
                g = {
                    props: {
                        hoveringMessagesVisible: {
                            default: !1
                        },
                        hoveringMessageSettings: {
                            default: null
                        },
                        csatSurveyDisplayToggler: {
                            default: !1
                        },
                        satisfaction_survey: {
                            default: null
                        },
                        allowDownloadTranscript: {
                            default: !1
                        },
                        allowSpeechToTextInput: {
                            type: Boolean,
                            required: !0
                        },
                        maxActiveInputAudioRecordingDurationSeconds: {
                            type: Number,
                            required: !0
                        },
                        apiEndpointPath: {
                            type: String,
                            required: !0
                        },
                        chat_id: {
                            required: !0
                        },
                        customer_uuid: {
                            default: null
                        },
                        activeInputMessageId: {
                            type: String,
                            default: null
                        },
                        displayType: {
                            type: String,
                            required: !0
                        },
                        endingChat: {
                            type: Boolean,
                            default: !1
                        },
                        newChatError: {
                            type: String,
                            default: null
                        },
                        startingNewChat: {
                            type: Boolean,
                            default: !1
                        },
                        refreshingChat: {
                            type: Boolean,
                            default: !1
                        },
                        chatEndedAt: {
                            type: Number,
                            default: null
                        },
                        chatEnded: {
                            type: Boolean,
                            default: !1
                        },
                        displayStartNewChatButton: {
                            type: Boolean,
                            default: !1
                        },
                        focusInputFieldFlag: {
                            type: Boolean,
                            default: !1
                        },
                        clearUserInputFieldFlag: {
                            type: Boolean,
                            default: !1
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
                        active_input: {
                            type: Object,
                            default: null
                        },
                        previewTitleBarHeight: {
                            type: Number,
                            default: 0
                        },
                        interface_language: {
                            type: String,
                            default: "en"
                        },
                        translation: {
                            type: Object,
                            default: null
                        },
                        integration_type: {
                            type: String,
                            default: "custom"
                        },
                        predefined_queries: {
                            type: Array
                        },
                        chat_icon_design_type: {
                            type: Number | String
                        },
                        settings: {
                            type: Object
                        },
                        appearance: {
                            type: Object
                        },
                        texts: {
                            type: Object
                        },
                        chat_icon_url: {
                            type: String
                        },
                        bot_icon_url: {
                            type: String
                        },
                        external_gid: {
                            type: String,
                            default: null
                        },
                        internal_gid: {
                            type: String,
                            default: null
                        },
                        placed_on: {
                            type: String,
                            default: "website"
                        },
                        conversation: {
                            type: Array
                        },
                        forced_chat_open: {
                            type: Boolean,
                            default: !1
                        },
                        force_attention_grabber_to_open: {
                            type: Boolean,
                            default: !1
                        },
                        chatbot_thinking: {
                            type: Boolean,
                            default: !1
                        },
                        disable_user_input: {
                            type: Boolean,
                            default: !1
                        },
                        chat_error: {
                            type: String,
                            default: null
                        },
                        scroll_to_bottom: {
                            type: Boolean,
                            default: !1
                        },
                        show_powered_by: {
                            type: Boolean,
                            default: !0
                        },
                        is_mobile_viewport: {
                            type: Boolean,
                            default: !1
                        },
                        header_icon_url: {
                            type: String,
                            default: null
                        },
                        header_icon_roundness: {
                            type: String,
                            default: "100%"
                        },
                        display_header_icon: {
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            showDownloadOptionsModal: !1,
                            downloadFormats: [{
                                id: "txt",
                                label: "Text File (.txt)"
                            }],
                            csatRatingVisible: !1,
                            csatFullSurveyVisible: !1,
                            submittingCsatSurvey: !1,
                            csatSurvey: {
                                prepared: !1,
                                error: null,
                                enabled: !1,
                                components: {}
                            },
                            csatNumeric5Ratings: [{
                                label: "1",
                                value: 1
                            }, {
                                label: "2",
                                value: 2
                            }, {
                                label: "3",
                                value: 3
                            }, {
                                label: "4",
                                value: 4
                            }, {
                                label: "5",
                                value: 5
                            }],
                            csatEmoji5Ratings: [{
                                label: "😠",
                                value: 1
                            }, {
                                label: "😒",
                                value: 2
                            }, {
                                label: "😐",
                                value: 3
                            }, {
                                label: "😊",
                                value: 4
                            }, {
                                label: "😍",
                                value: 5
                            }],
                            showEndChatConfirmation: !1,
                            bottomSectionErrorTimeout: null,
                            is_transcribing_active_input_audio: !1,
                            transcriptionAxiosRequest: null,
                            show_audio_recorder: !1,
                            set_active_input_audio_recorder_styles: !1,
                            make_active_input_audio_recorder_full_width: !1,
                            hide_active_input: !1,
                            success_notification_message: null,
                            success_notification_message_timeout: null,
                            error_input: null,
                            error_input_opacity: 1,
                            error_input_visibility_timeout: null,
                            user_input_value: null,
                            user_message: null,
                            is_chat_open: this.forced_chat_open,
                            show_test: !0,
                            current_chat_header_type: 1,
                            show_ellipsis_dropdown: !1,
                            customer_info_collector: {
                                collected: !1,
                                error: null
                            },
                            customer: {
                                uuid: null,
                                name: null,
                                email: null,
                                phone: null,
                                company: null,
                                job_title: null,
                                address: null,
                                city: null,
                                state: null,
                                zip: null,
                                country: null,
                                website: null
                            },
                            current_chat_page: null,
                            errors: {
                                customer: {
                                    name: null,
                                    email: null,
                                    phone: null,
                                    company: null,
                                    job_title: null,
                                    address: null,
                                    city: null,
                                    state: null,
                                    zip: null,
                                    country: null,
                                    website: null
                                }
                            },
                            scrollTimeout: null,
                            inputTextareaRows: 1
                        }
                    },
                    emits: ["startNewChat", "userInputSubmitted", "aiResponseRated"],
                    components: {
                        ChatbotMessage: l.default,
                        DatePicker: c.a,
                        AudioRecorder: s.default,
                        ActionButton: u.default,
                        CsatRating: d.default,
                        CsatSingleOption: h.default,
                        CsatMultiOptions: p.default,
                        CsatTextField: v.default
                    },
                    mounted: function() {
                        var t, e, n, i, o, r, l, a, s, u, c, d, h, p, v, g, f, m, _, b, C, y, S, x, w, k, T, I, M, E, A, R, B, F, D, L, N, P, q, O, U, z, j = this;
                        try {
                            var $ = this.$refs.chat_interface;
                            $ && $.addEventListener("scroll", this.handleScroll)
                        } catch (t) {}(document.addEventListener("click", this.onDocumentClickForEllipsis, !0), document.addEventListener("keydown", this.onDocumentKeydownForEllipsis, !0), this.$nextTick((function() {
                            try {
                                j.is_chat_open && j.focusPreferredControl()
                            } catch (t) {}
                        })), null != this.satisfaction_survey) && (this.csatSurvey.enabled = this.satisfaction_survey.enabled, this.isBuilderPreviewEmbed && (this.csatSurvey.enabled = !1), this.csatSurvey.components = {
                            rating: {
                                required: !0,
                                enabled: !0,
                                rating_type_id: null === (t = this.satisfaction_survey) || void 0 === t || null === (e = t.rating) || void 0 === e ? void 0 : e.type,
                                texts: {
                                    label: null === (n = this.satisfaction_survey) || void 0 === n || null === (i = n.rating) || void 0 === i || null === (o = i.texts) || void 0 === o ? void 0 : o.label,
                                    scale_label: null === (r = this.satisfaction_survey) || void 0 === r || null === (l = r.rating) || void 0 === l || null === (a = l.texts) || void 0 === a ? void 0 : a.scale_label
                                },
                                value: null
                            },
                            resolved: {
                                required: null === (s = this.satisfaction_survey) || void 0 === s || null === (u = s.resolved) || void 0 === u ? void 0 : u.required,
                                enabled: null === (c = this.satisfaction_survey) || void 0 === c || null === (d = c.resolved) || void 0 === d ? void 0 : d.enabled,
                                texts: {
                                    label: null === (h = this.satisfaction_survey) || void 0 === h || null === (p = h.resolved) || void 0 === p || null === (v = p.texts) || void 0 === v ? void 0 : v.label
                                },
                                options: null === (g = this.satisfaction_survey) || void 0 === g || null === (f = g.resolved) || void 0 === f ? void 0 : f.options,
                                value: null
                            },
                            follow_up_question: {
                                required: null === (m = this.satisfaction_survey) || void 0 === m || null === (_ = m.follow_up) || void 0 === _ ? void 0 : _.required,
                                enabled: null === (b = this.satisfaction_survey) || void 0 === b || null === (C = b.follow_up) || void 0 === C ? void 0 : C.enabled,
                                values: [],
                                texts: {
                                    positive: {
                                        label: null === (y = this.satisfaction_survey) || void 0 === y || null === (S = y.follow_up) || void 0 === S || null === (x = S.texts) || void 0 === x || null === (w = x.positive) || void 0 === w ? void 0 : w.label
                                    },
                                    negative: {
                                        label: null === (k = this.satisfaction_survey) || void 0 === k || null === (T = k.follow_up) || void 0 === T || null === (I = T.texts) || void 0 === I || null === (M = I.negative) || void 0 === M ? void 0 : M.label
                                    }
                                },
                                options: {
                                    positive: null === (E = this.satisfaction_survey) || void 0 === E || null === (A = E.follow_up) || void 0 === A || null === (R = A.options) || void 0 === R ? void 0 : R.positive,
                                    negative: null === (B = this.satisfaction_survey) || void 0 === B || null === (F = B.follow_up) || void 0 === F || null === (D = F.options) || void 0 === D ? void 0 : D.negative
                                }
                            },
                            feedback: {
                                required: null === (L = this.satisfaction_survey) || void 0 === L || null === (N = L.feedback) || void 0 === N ? void 0 : N.required,
                                enabled: null === (P = this.satisfaction_survey) || void 0 === P || null === (q = P.feedback) || void 0 === q ? void 0 : q.enabled,
                                texts: {
                                    label: null === (O = this.satisfaction_survey) || void 0 === O || null === (U = O.feedback) || void 0 === U || null === (z = U.texts) || void 0 === z ? void 0 : z.label
                                },
                                value: null,
                                placeholder: null
                            }
                        });
                        this.csatSurvey.prepared = !0, window.addEventListener("message", this.onMessageEvent), window.addEventListener("scroll", (function() {})), this.isCustomerInformationSet() && (this.customer_info_collector.collected = !0)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("message", this.onMessageEvent), document.removeEventListener("click", this.onDocumentClickForEllipsis, !0), document.removeEventListener("keydown", this.onDocumentKeydownForEllipsis, !0), this.removeScrollListener()
                    },
                    watch: {
                        csatSurveyDisplayToggler: function(t, e) {
                            this.startCsatSurvey()
                        },
                        showEndChatConfirmation: function(t, e) {
                            var n = this;
                            !0 === t && this.$nextTick((function() {
                                try {
                                    var t, e, i = n.$refs.end_chat_modal,
                                        o = null == i || null === (t = i.querySelector) || void 0 === t ? void 0 : t.call(i, 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                                    null == o || null === (e = o.focus) || void 0 === e || e.call(o)
                                } catch (t) {}
                            }))
                        },
                        csatRatingVisible: function(t, e) {
                            var n = this;
                            !0 === t && this.$nextTick((function() {
                                try {
                                    var t, e, i = n.$refs.csat_rating_modal,
                                        o = null == i || null === (t = i.querySelector) || void 0 === t ? void 0 : t.call(i, 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                                    null == o || null === (e = o.focus) || void 0 === e || e.call(o)
                                } catch (t) {}
                            }))
                        },
                        csatFullSurveyVisible: function(t, e) {
                            var n = this;
                            !0 === t && this.$nextTick((function() {
                                try {
                                    var t, e, i = n.$refs.csat_full_modal,
                                        o = null == i || null === (t = i.querySelector) || void 0 === t ? void 0 : t.call(i, 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                                    null == o || null === (e = o.focus) || void 0 === e || e.call(o)
                                } catch (t) {}
                            }))
                        },
                        is_chat_open: function(t, e) {
                            var n = this;
                            !0 === t ? this.$nextTick((function() {
                                try {
                                    n.focusPreferredControl()
                                } catch (t) {}
                            })) : !1 === t && this.$nextTick((function() {
                                try {
                                    var t, e;
                                    null === (t = n.$refs.launcher_button) || void 0 === t || null === (e = t.focus) || void 0 === e || e.call(t)
                                } catch (t) {}
                            }))
                        },
                        hideAudioRecorderForActiveInputFlag: function(t, e) {
                            this.hideAudioRecorderForActiveInput()
                        },
                        startingNewChat: function(t, e) {
                            1 == t && this.hideNotification("success")
                        },
                        newChatError: function(t, e) {},
                        clearUserInputFieldFlag: function(t, e) {
                            this.clearUserInputField()
                        },
                        focusInputFieldFlag: function(t, e) {
                            var n = this;
                            this.$nextTick((function() {
                                try {
                                    n.$refs.user_input_field.focus()
                                } catch (t) {}
                            }))
                        },
                        forced_chat_open: function(t, e) {
                            null != t && (this.is_chat_open = t)
                        },
                        scroll_to_bottom: function(t, e) {
                            this.scrollChatToBottom()
                        }
                    },
                    methods: {
                        toggleEllipsisDropdown: function() {
                            this.show_ellipsis_dropdown = !this.show_ellipsis_dropdown
                        },
                        onDocumentClickForEllipsis: function(t) {
                            var e = this.$refs.ellipsis_dropdown;
                            e && (e.contains(t.target) || (this.show_ellipsis_dropdown = !1))
                        },
                        onDocumentKeydownForEllipsis: function(t) {
                            var e = this;
                            "Escape" === t.key && this.show_ellipsis_dropdown && (this.show_ellipsis_dropdown = !1, this.$nextTick((function() {
                                var t, n;
                                null === (t = e.$refs.ellipsis_button) || void 0 === t || null === (n = t.focus) || void 0 === n || n.call(t)
                            })))
                        },
                        focusPreferredControl: function() {
                            try {
                                this.$refs.user_input_field && this.$refs.user_input_field.focus()
                            } catch (t) {}
                        },
                        downloadTranscriptClicked: function() {
                            this.allowDownloadTranscript && this.downloadTranscript("txt")
                        },
                        closeDownloadOptions: function() {
                            this.showDownloadOptionsModal = !1
                        },
                        downloadTranscript: function(t) {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var i, o, r, l, a, s, u, c, d;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (e.allowDownloadTranscript) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            if (null != t && 0 != t.length) {
                                                n.next = 4;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 4:
                                            if (null != e.downloadFormats.find((function(e) {
                                                    return e.id == t
                                                }))) {
                                                n.next = 7;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 7:
                                            if (i = {
                                                    cgid: e.chat_id,
                                                    egid: e.external_gid,
                                                    cuid: e.customer_uuid,
                                                    format: t
                                                }, null != (o = e.apiEndpointPath)) {
                                                n.next = 11;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 11:
                                            return n.prev = 11, e.showNotification("success", e.translation.preparing_transcript), e.show_ellipsis_dropdown = !1, e.closeDownloadOptions(), n.next = 17, e.$axios.post("".concat(o, "/chat/transcript"), i);
                                        case 17:
                                            if (null != (s = n.sent)) {
                                                n.next = 20;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 20:
                                            if (null != (u = null !== (r = s.data) && void 0 !== r ? r : null)) {
                                                n.next = 23;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 23:
                                            if (0 != u.success) {
                                                n.next = 25;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 25:
                                            if (null != (u = null === (l = u) || void 0 === l ? void 0 : l.data)) {
                                                n.next = 28;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 28:
                                            null != (c = null === (a = u) || void 0 === a ? void 0 : a.download_url) && c.length > 0 && e.$downloadFromUrl(c, null === (d = u) || void 0 === d ? void 0 : d.filename, t), n.next = 35;
                                            break;
                                        case 32:
                                            n.prev = 32, n.t0 = n.catch(11);
                                        case 35:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [11, 32]
                                ])
                            })))()
                        },
                        handleEnterKeyPressedForInput: function(t, e) {
                            t.shiftKey || (t.preventDefault(), "text" == e && this.submitInput(!1))
                        },
                        handleScroll: function() {
                            var t = this;
                            this.$emit("userScrolling"), this.scrollTimeout && clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout((function() {
                                t.$emit("userScrollingStopped")
                            }), 150)
                        },
                        removeScrollListener: function() {
                            var t = this.$refs.chat_interface;
                            t && t.removeEventListener("scroll", this.handleScroll), this.scrollTimeout && clearTimeout(this.scrollTimeout)
                        },
                        csatFeedbackInputChanged: function(t) {
                            this.csatSurvey.components.feedback.value = t
                        },
                        resetCSATSurvey: function() {
                            this.csatSurvey.components.rating.value = null, this.csatSurvey.components.resolved.value = null, this.csatSurvey.components.follow_up_question.values = [], this.csatSurvey.components.feedback.value = null
                        },
                        submitCSATSurvey: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n, i, o, r, l, a;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.isCSATRequiredFieldsFilled) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!t.submittingCsatSurvey) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (n = t.$getMaxCharacters().chatbot.csat.feedback, !(null != t.csatSurvey.components.feedback.value && t.csatSurvey.components.feedback.value.length > n)) {
                                                e.next = 8;
                                                break
                                            }
                                            return t.csatSurvey.error = "Feedback must not exceed ".concat(n, " characters."), e.abrupt("return");
                                        case 8:
                                            if (t.submittingCsatSurvey = !0, t.csatSurvey.error = null, i = {
                                                    cgid: t.chat_id,
                                                    egid: t.external_gid,
                                                    csat: {
                                                        rating: {
                                                            type: t.csatSurvey.components.rating.rating_type_id,
                                                            value: t.csatSurvey.components.rating.value,
                                                            reasons: t.csatSurvey.components.follow_up_question.values
                                                        },
                                                        resolved: {
                                                            value: t.csatSurvey.components.resolved.value
                                                        },
                                                        feedback: {
                                                            value: t.csatSurvey.components.feedback.value
                                                        }
                                                    }
                                                }, null != (o = t.apiEndpointPath)) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 15:
                                            return e.prev = 15, e.next = 18, t.$axios.post("".concat(o, "/chat/csat"), i);
                                        case 18:
                                            if (l = e.sent, t.submittingCsatSurvey = !1, null != l) {
                                                e.next = 23;
                                                break
                                            }
                                            return t.csatSurvey.error = "An error occurred (CODE: 2488)", e.abrupt("return");
                                        case 23:
                                            if (null != (a = null !== (r = l.data) && void 0 !== r ? r : null)) {
                                                e.next = 27;
                                                break
                                            }
                                            return t.csatSurvey.error = "An error occurred (CODE: 2489)", e.abrupt("return");
                                        case 27:
                                            if (0 != a.success) {
                                                e.next = 30;
                                                break
                                            }
                                            return t.csatSurvey.error = a.data, e.abrupt("return");
                                        case 30:
                                            t.closeCSATSurvey(), e.next = 38;
                                            break;
                                        case 33:
                                            e.prev = 33, e.t0 = e.catch(15), t.submittingCsatSurvey = !1, t.csatSurvey.error = "An error occurred (CODE: 2490)";
                                        case 38:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [15, 33]
                                ])
                            })))()
                        },
                        selectCSATRating: function(t, e) {
                            var n = this.csatSurvey.components.rating.value;
                            null != n && n != t && (1 != this.csatSurvey.components.rating.rating_type_id && 2 != this.csatSurvey.components.rating.rating_type_id || (t >= 4 && n < 4 || t < 4 && n >= 4) && (this.csatSurvey.components.follow_up_question.values = [])), this.csatSurvey.components.rating.value = t, e && (this.closeCSATRatingSurvey(), this.showFullCSATSurvey())
                        },
                        csatResolvedOptionClicked: function(t) {
                            this.csatSurvey.components.resolved.value = t
                        },
                        csatFollowUpQuestionOptionClicked: function(t) {
                            null == this.csatSurvey.components.follow_up_question.values && (this.csatSurvey.components.follow_up_question.values = []), this.csatSurvey.components.follow_up_question.values.includes(t) ? this.csatSurvey.components.follow_up_question.values = this.csatSurvey.components.follow_up_question.values.filter((function(e) {
                                return e != t
                            })) : this.csatSurvey.components.follow_up_question.values.push(t)
                        },
                        showFullCSATSurvey: function() {
                            this.csatFullSurveyVisible = !0
                        },
                        closeCSATRatingSurvey: function() {
                            this.csatRatingVisible = !1
                        },
                        closeCSATSurvey: function() {
                            this.csatFullSurveyVisible = !1, this.csatRatingVisible = !1, this.resetCSATSurvey()
                        },
                        skipCSATRating: function() {
                            this.closeCSATSurvey()
                        },
                        confirmEndChat: function() {
                            this.showEndChatConfirmation = !1, this.endChat()
                        },
                        startCsatSurvey: function() {
                            null != this.csatSurvey && 0 != this.csatSurvey.enabled && (0 == this.csatSurvey.components.feedback.enabled && 0 == this.csatSurvey.components.resolved.enabled && 0 == this.csatSurvey.components.follow_up_question.enabled ? this.showFullCSATSurvey() : this.csatRatingVisible = !0)
                        },
                        cancelEndChat: function() {
                            this.showEndChatConfirmation = !1
                        },
                        transcibeAudioForActiveInput: function(t, e, n) {
                            var i = this;
                            return Object(r.a)(regeneratorRuntime.mark((function r() {
                                var l, a, s, u, c, d, h, p, v, g, f, m;
                                return regeneratorRuntime.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (l = new FormData, a = "audio.webm", !e) {
                                                r.next = 28;
                                                break
                                            }
                                            if (s = e.split(";")[0].split("/"), u = Object(o.a)(s, 2), u[0], !(c = u[1])) {
                                                r.next = 28;
                                                break
                                            }
                                            r.t0 = c, r.next = "mp4" === r.t0 ? 11 : "webm" === r.t0 ? 13 : "wav" === r.t0 ? 15 : "ogg" === r.t0 ? 17 : "mp3" === r.t0 ? 19 : "aac" === r.t0 ? 21 : "flac" === r.t0 ? 23 : "m4a" === r.t0 ? 25 : 27;
                                            break;
                                        case 11:
                                            return a = "audio.mp4", r.abrupt("break", 28);
                                        case 13:
                                            return a = "audio.webm", r.abrupt("break", 28);
                                        case 15:
                                            return a = "audio.wav", r.abrupt("break", 28);
                                        case 17:
                                            return a = "audio.ogg", r.abrupt("break", 28);
                                        case 19:
                                            return a = "audio.mp3", r.abrupt("break", 28);
                                        case 21:
                                            return a = "audio.aac", r.abrupt("break", 28);
                                        case 23:
                                            return a = "audio.flac", r.abrupt("break", 28);
                                        case 25:
                                            return a = "audio.m4a", r.abrupt("break", 28);
                                        case 27:
                                            a = "audio.".concat(c);
                                        case 28:
                                            if (l.append("audio", t, a), l.append("cgid", i.chat_id), l.append("egid", i.external_gid), l.append("cuid", i.customer_uuid), l.append("mime", e), l.append("duration", n), null != (d = i.apiEndpointPath)) {
                                                r.next = 39;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 39:
                                            return r.prev = 39, i.transcriptionAxiosRequest = i.$axios.CancelToken.source(), i.is_transcribing_active_input_audio = !0, r.next = 45, i.$axios.post("".concat(d, "/chat/tau"), l, {
                                                headers: {
                                                    "Content-Type": "multipart/form-data"
                                                },
                                                cancelToken: i.transcriptionAxiosRequest.token
                                            });
                                        case 45:
                                            if (v = r.sent, i.transcriptionAxiosRequest = null, i.hideAudioRecorderForActiveInput(), i.is_transcribing_active_input_audio = !1, null != v) {
                                                r.next = 52;
                                                break
                                            }
                                            return i.$emit("showChatError", "Error processing audio (Code: 2454)"), r.abrupt("return");
                                        case 52:
                                            if (null != (g = null !== (h = v.data) && void 0 !== h ? h : null)) {
                                                r.next = 56;
                                                break
                                            }
                                            return i.$emit("showChatError", "Error processing audio (Code: 2455)"), r.abrupt("return");
                                        case 56:
                                            if (0 != g.success) {
                                                r.next = 59;
                                                break
                                            }
                                            return i.$emit("showChatError", g.data), r.abrupt("return");
                                        case 59:
                                            null != (g = null === (p = g) || void 0 === p ? void 0 : p.data) && null != (m = null === (f = g) || void 0 === f ? void 0 : f.text) && (i.user_input_value = m), r.next = 73;
                                            break;
                                        case 64:
                                            if (r.prev = 64, r.t1 = r.catch(39), i.is_transcribing_active_input_audio = !1, i.transcriptionAxiosRequest = null, i.hideAudioRecorderForActiveInput(), !i.$axios.isCancel(r.t1)) {
                                                r.next = 71;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 71:
                                            i.$emit("showChatError", "Error processing audio (Code: 2456)");
                                        case 73:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [39, 64]
                                ])
                            })))()
                        },
                        hideAudioRecorderForActiveInput: function() {
                            this.show_audio_recorder = !1, this.hide_active_input = !1
                        },
                        showAudioRecorderForActiveInput: function() {
                            this.show_audio_recorder = !0, this.hide_active_input = !1
                        },
                        audioRecordingErrorForActiveInput: function(t) {
                            this.hideAudioRecorderForActiveInput(), this.$emit("showChatError", t)
                        },
                        microphonePermissionDeniedForActiveInput: function() {
                            this.hideAudioRecorderForActiveInput(), this.$emit("showChatError", "You have denied microphone access. Enable it in your browser's settings and try again.")
                        },
                        microphonePermissionGrantedForActiveInput: function() {
                            this.set_active_input_audio_recorder_styles = !0, this.hide_active_input = !0
                        },
                        audioRecordingClickedForActiveInput: function() {
                            this.showAudioRecorderForActiveInput()
                        },
                        audioRecordingCancelledForActiveInput: function() {
                            this.hideAudioRecorderForActiveInput(), this.is_transcribing_active_input_audio = !1;
                            try {
                                null != this.transcriptionAxiosRequest && (this.transcriptionAxiosRequest.cancel(), this.transcriptionAxiosRequest = null)
                            } catch (t) {}
                        },
                        audioRecordingCompletedForActiveInput: function(t) {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var i, o, r;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (e.allowAudioRecordingForActiveInput) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            if (null != (i = null == t ? void 0 : t.blob)) {
                                                n.next = 5;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 5:
                                            o = null == t ? void 0 : t.duration, r = null == t ? void 0 : t.mimeType, e.transcibeAudioForActiveInput(i, r, o);
                                        case 8:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        hideActiveInputAudioRecorder: function() {
                            this.show_audio_recorder = !1, this.set_active_input_audio_recorder_styles = !1
                        },
                        inputSubmittedFromMessage: function(t) {
                            var e = null == t ? void 0 : t.message_id,
                                n = null == t ? void 0 : t.message;
                            if (null != n) {
                                var i = null == n ? void 0 : n.component;
                                if (null != i) {
                                    var o = null == i ? void 0 : i.id;
                                    this.$emit("userInputSubmitted", {
                                        block_id: o,
                                        message_id: e,
                                        message: null,
                                        data: t
                                    })
                                }
                            }
                        },
                        onMessageEvent: function(t) {
                            try {
                                var e, n;
                                if (null == t) return;
                                if (null == (null == t ? void 0 : t.data)) return;
                                if (null == (null == t || null === (e = t.data) || void 0 === e ? void 0 : e.event_id)) return;
                                "chtl_chat_widget_closed" === (null == t || null === (n = t.data) || void 0 === n ? void 0 : n.event_id) && (this.pauseAllAudioBlocks(), this.pauseAllVideoBlocks())
                            } catch (t) {}
                        },
                        pauseAllVideoBlocks: function() {
                            try {
                                this.$refs.chat_interface.querySelectorAll("video").forEach((function(t) {
                                    t.pause()
                                }))
                            } catch (t) {}
                        },
                        pauseAllAudioBlocks: function() {
                            try {
                                this.$refs.chat_interface.querySelectorAll("audio").forEach((function(t) {
                                    t.pause()
                                }))
                            } catch (t) {}
                        },
                        quickReplyClicked: function(t) {
                            null != t && (this.user_input_value = null == t ? void 0 : t.content, this.submitInput(!1))
                        },
                        hideNotification: function(t) {
                            "success" == t && (this.success_notification_message = null, clearTimeout(this.success_notification_timeout))
                        },
                        showNotification: function(t, e) {
                            var n = this;
                            null != e && 0 != e.length && "success" == t && (clearTimeout(this.success_notification_timeout), this.success_notification_message = e, this.success_notification_timeout = setTimeout((function() {
                                n.success_notification_message = null
                            }), 5e3))
                        },
                        inputFormSubmitted: function(t) {
                            var e = null == t ? void 0 : t.values,
                                n = null == t ? void 0 : t.message;
                            if (null != e && null != n) {
                                var i = null == n ? void 0 : n.component;
                                if (null != i) {
                                    var o = null == i ? void 0 : i.id;
                                    null != o && this.$emit("userInputSubmitted", {
                                        values: e,
                                        block_id: o,
                                        message_id: null == n ? void 0 : n.id,
                                        message: null
                                    })
                                }
                            }
                        },
                        refreshChatClicked: function() {
                            this.show_ellipsis_dropdown = !1, this.hideNotification("success"), this.$emit("refreshChat")
                        },
                        endChatClicked: function() {
                            this.isCSATSurveyVisible || this.showEndChatConfirmation || this.chatEnded || (this.show_ellipsis_dropdown = !1, this.showEndChatConfirmation = !0)
                        },
                        endChat: function() {
                            this.$emit("endChat")
                        },
                        startNewChatClickedInEllipsisMenu: function() {
                            this.startNewChatClicked()
                        },
                        startNewChatClicked: function() {
                            this.show_ellipsis_dropdown = !1, this.hideInputError(), this.$emit("startNewChat")
                        },
                        clearUserInputField: function() {
                            this.user_input_value = null, this.inputTextareaRows = 1
                        },
                        dateTimeValueChanged: function(t) {
                            var e = this.dateTimeMaxValue,
                                n = this.dateTimeMinValue;
                            this.hideInputError(), this.user_input_value = null, null != e && t > e ? this.error_input = "Must be less than ".concat(e) : null != n && t < n && (this.error_input = "Must be greater than ".concat(n)), this.user_input_value = t
                        },
                        hideInputError: function() {
                            this.error_input_opacity = 0, this.error_input = null
                        },
                        onTextareaInput: function() {
                            this.hideInputError(), this.autoResizeTextarea()
                        },
                        autoResizeTextarea: function() {
                            var t = this.$refs.user_input_field;
                            if (t) {
                                var e = (t.value.match(/\n/g) || []).length;
                                this.inputTextareaRows = Math.min(e + 1, 8)
                            }
                        },
                        showInputError: function(t) {
                            null != t && 0 != t.length && (this.error_input = t, this.error_input_opacity = 1, null != this.error_input_visibility_timeout && clearTimeout(this.error_input_visibility_timeout))
                        },
                        submitInput: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.activeInputType == this.blockTypes.INPUTS.TEXT ? this.submitTextInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.NUMBER ? this.submitNumberInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.EMAIL ? this.submitEmailInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.URL ? this.submitUrlInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.PHONE ? this.submitPhoneInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.DATETIME && this.submitDateTimeInput(t, e)
                        },
                        skipInputClicked: function() {
                            this.submitInput(!0)
                        },
                        submitDateTimeInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = !1;
                                if (null == (e = this.user_input_value) && (n = !0), n && this.isInputRequired) return;
                                if (n && !this.isInputRequired) e = null;
                                else if (!n) {
                                    var i = this.dateTimeMaxValue,
                                        o = this.dateTimeMinValue;
                                    if (null != i && e > i) return void(this.error_input = "Must be less than ".concat(i));
                                    if (null != o && e < o) return void(this.error_input = "Must be greater than ".concat(o))
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        submitPhoneInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = !1;
                                if (null != (e = this.user_input_value) && (e = e.trim()), null != e && 0 != e.trim().length || (n = !0), n && this.isInputRequired) return;
                                if (n && !this.isInputRequired) e = null;
                                else if (!n) {
                                    var i = this.$getMaxCharacters().chatbot_user.input.phone;
                                    if (e.length > i) return void(this.error_input = "Phone number cannot exceed " + i + " characters");
                                    if (!/^[+()\-0-9 ]+$/.test(e)) return void(this.error_input = "Enter a valid phone number");
                                    if (e.length < 4) return void(this.error_input = "Enter a valid phone number")
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        submitUrlInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = !1;
                                if (null != (e = this.user_input_value) && (e = e.trim()), null != e && 0 != e.trim().length || (n = !0), n && this.isInputRequired) return;
                                if (n && !this.isInputRequired) e = null;
                                else if (!n) {
                                    if (!this.$isValidURL(e)) return void(this.error_input = "Enter a valid URL (starting with http:// or https://)");
                                    var i = this.$getMaxCharacters().chatbot_user.input.url;
                                    if (e.length > i) return void(this.error_input = "URL cannot exceed " + i + " characters")
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        submitEmailInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = !1;
                                if (null != (e = this.user_input_value) && (e = e.trim()), null != e && 0 != e.length || (n = !0), n && this.isInputRequired) return;
                                if (n && !this.isInputRequired) e = null;
                                else if (!n) {
                                    var i;
                                    if (!this.$isValidEmail(e)) return void(this.error_input = "Enter a valid email address");
                                    var o = this.$getMaxCharacters().chatbot_user.input.email;
                                    if (e.length > o) return void(this.error_input = "Email cannot exceed " + o + " characters");
                                    var r = null === (i = this.active_input) || void 0 === i ? void 0 : i.data;
                                    if (null != r) {
                                        var l = null == r ? void 0 : r.disallowed_domains;
                                        if (null != l && l.length > 0) {
                                            var a = e.split("@")[1];
                                            if (null != a && a.length > 0 && (a = a.toLowerCase()), l.includes(a)) return void(this.error_input = "This email domain is not allowed")
                                        }
                                    }
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        submitNumberInput: function(t) {
                            if (this.activeInputType == this.blockTypes.INPUTS.NUMBER) {
                                this.hideInputError();
                                var e = null;
                                if (!t) {
                                    e = this.user_input_value;
                                    var n = this.numberInputMin,
                                        i = this.numberInputMax,
                                        o = this.numberInputDataType,
                                        r = !1;
                                    if (null == e && (this.user_input_value = null, r = !0), r && this.isInputRequired) return;
                                    if (r && !this.isInputRequired) e = null;
                                    else if (!r) {
                                        if (null != n && (n = parseFloat(n), isNaN(n) && (n = null)), null != i && (i = parseFloat(i), isNaN(i) && (i = null)), (e = (e = e.toString()).trim()).length > 1 && (e = e.replace(/^0+/, "")), 0 == e.length) return;
                                        if (isNaN(e)) return void(this.error_input = "Enter a valid number");
                                        if ("integer" == o) {
                                            var l = parseInt(e);
                                            if (!Number.isInteger(l)) return void(this.error_input = "Input must be an integer")
                                        }
                                        var a = parseFloat(e);
                                        if (null != n && a < n) return void(this.error_input = "Input must be ".concat(n, " or greater"));
                                        if (null != i && a > i) return void(this.error_input = "Input must not be greater than ".concat(i));
                                        if ("integer" == o) {
                                            if (a % 1 != 0) return void(this.error_input = "Input must be an integer");
                                            e = parseInt(e)
                                        } else e = parseFloat(e)
                                    }
                                }
                                this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                    message: e,
                                    block_id: this.inputBlockId
                                })
                            }
                        },
                        numberInputChanged: function(t) {
                            return this.hideInputError(), 69 !== t.keyCode
                        },
                        buttonBlockClicked: function(t) {
                            var e = null == t ? void 0 : t.button,
                                n = null == t ? void 0 : t.message;
                            if (null != e && null != n) {
                                var i = null == n ? void 0 : n.component;
                                if (null != i) {
                                    var o = null == i ? void 0 : i.id;
                                    if (null != o) {
                                        var r = null == e ? void 0 : e.label;
                                        this.$emit("userInputSubmitted", {
                                            item_id: null == e ? void 0 : e.id,
                                            message: r,
                                            block_id: o,
                                            message_id: null == n ? void 0 : n.id
                                        })
                                    }
                                }
                            }
                        },
                        submitTextInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = this.inputBlockData,
                                    i = !1;
                                if (null != (e = this.user_input_value) && (e = e.trim()), null != e && 0 != e.trim().length || (i = !0), i && this.isInputRequired) return;
                                if (i && !this.isInputRequired) e = null;
                                else if (!i && null != n) {
                                    var o = null == n ? void 0 : n.min_length;
                                    null == n || n.max_length;
                                    if (null !== o && e.length < o) return void(this.error_input = "Must be at least ".concat(o, " ") + (1 == o ? "character" : "characters"))
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        predefinedQuerySelected: function(t) {
                            this.submitMessage(t.query, "predefined_query")
                        },
                        scrollToLastMessage: function() {
                            var t = this.$refs.chat_last_message;
                            if (null != t) try {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (t) {}
                        },
                        scrollChatToBottom: function() {
                            if (this.isInlinePageDisplayType) return !1;
                            var t = this.$refs.hidden_element;
                            if (t) try {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (t) {}
                        },
                        scrollChatToThinkingBubble: function() {
                            var t = this.$refs.chatbot_thinking_bubble;
                            if (t) try {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (t) {}
                        },
                        closeHoveringMessages: function() {
                            this.$emit("closeHoveringMessages")
                        },
                        minimizeChat: function() {
                            this.showMinimizeButton && (this.show_ellipsis_dropdown = !1, this.isPublicEmbed ? window.parent.postMessage("chtl_chat_minimized", "*") : this.is_chat_open = !1, this.pauseAllAudioBlocks(), this.pauseAllVideoBlocks(), this.closeHoveringMessages())
                        },
                        chatIconClicked: function() {
                            this.closeHoveringMessages(), this.is_chat_open = !this.is_chat_open
                        },
                        isCustomerInformationSet: function() {
                            if (1 == this.customer_info_collector.collected) return !0;
                            var t = this.customer;
                            if (null == t) return !1;
                            for (var e = 0, n = Object.entries(t); e < n.length; e++) {
                                var i = Object(o.a)(n[e], 2),
                                    r = i[0],
                                    l = i[1];
                                if ("uuid" != r) try {
                                    if (null != l && l.trim().length > 0) return !0
                                } catch (t) {}
                            }
                            return !1
                        },
                        showScrollbar: function(t) {
                            var e = t.currentTarget.querySelector(".quick-replies-container"),
                                n = t.currentTarget.querySelector(".quick-replies-scroll-track"),
                                i = n.firstElementChild;
                            if (e && e.scrollWidth > e.clientWidth) {
                                n.style.opacity = "1";
                                var o = e.clientWidth / e.scrollWidth * 100;
                                i.style.width = "".concat(o, "%");
                                var r = e.scrollLeft / (e.scrollWidth - e.clientWidth);
                                i.style.left = "".concat(r * (100 - o), "%"), e.addEventListener("scroll", this.updateScrollThumb), i.addEventListener("mousedown", this.startDragging)
                            }
                        },
                        hideScrollbar: function(t) {
                            var e = t.currentTarget.querySelector(".quick-replies-scroll-track"),
                                n = null == e ? void 0 : e.firstElementChild;
                            e && (e.style.opacity = "0");
                            var i = t.currentTarget.querySelector(".quick-replies-container");
                            i && i.removeEventListener("scroll", this.updateScrollThumb), n && n.removeEventListener("mousedown", this.startDragging)
                        },
                        startDragging: function(t) {
                            t.preventDefault();
                            var e = t.target,
                                n = e.parentElement,
                                i = n.nextElementSibling,
                                o = t.clientX,
                                r = e.offsetLeft,
                                l = n.clientWidth,
                                a = e.offsetWidth,
                                s = function(t) {
                                    var e = t.clientX - o,
                                        n = Math.max(0, Math.min(r + e, l - a)) / (l - a);
                                    i.scrollLeft = n * (i.scrollWidth - i.clientWidth)
                                };
                            document.addEventListener("mousemove", s), document.addEventListener("mouseup", (function t() {
                                document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", t)
                            }))
                        },
                        updateScrollThumb: function(t) {
                            var e = t.currentTarget,
                                n = e.previousElementSibling.firstElementChild,
                                i = e.clientWidth / e.scrollWidth * 100,
                                o = e.scrollLeft / (e.scrollWidth - e.clientWidth);
                            n.style.left = "".concat(o * (100 - i), "%")
                        }
                    },
                    computed: {
                        showQuickReplies: function() {
                            return !this.chatEnded && (this.isInputActive && null != this.inputQuickReplies && this.inputQuickReplies.length > 0)
                        },
                        footerTextColor: function() {
                            return "#6A7382"
                        },
                        footerIconColor: function() {
                            return "#848b97"
                        },
                        footerPoweredByBrandingTextCSS: function() {
                            return {
                                color: "var(--chtl-footer-text-color) !important",
                                whiteSpace: "nowrap",
                                textDecoration: "none"
                            }
                        },
                        footerWrapperCSS: function() {
                            var t, e = (t = {
                                display: "block !important",
                                padding: "8px 15px",
                                marginTop: "5px",
                                textAlign: "center",
                                fontSize: "0.8em",
                                color: "var(--chtl-footer-text-color)"
                            }, Object(i.a)(t, "display", "flex !important"), Object(i.a)(t, "alignItems", "center"), Object(i.a)(t, "gap", "5px"), Object(i.a)(t, "backgroundColor", "#F9FAFC !important"), t);
                            return this.footerHasMultipleElements ? e.justifyContent = "space-between" : e.justifyContent = "center", e
                        },
                        footerHasMultipleElements: function() {
                            return !!(this.showPoweredByBranding && null != this.footerHTML && this.footerHTML.length > 0)
                        },
                        footerHTML: function() {
                            var t, e, n, i;
                            return null == this.texts || null == (null === (t = this.texts) || void 0 === t ? void 0 : t.chat_footer) || 0 == (null === (e = this.texts) || void 0 === e ? void 0 : e.chat_footer.length) || 0 == (null === (n = this.texts) || void 0 === n ? void 0 : n.chat_footer.trim().length) ? null : null === (i = this.texts) || void 0 === i ? void 0 : i.chat_footer.trim()
                        },
                        hoveringMessageCloseButtonWrapperCSS: function() {
                            var t, e, n, i, o, r, l = "rgb(255 255 255)",
                                a = "#e7ebf0";
                            null != this.hoveringMessageSettings && (null != (null === (t = this.hoveringMessageSettings) || void 0 === t ? void 0 : t.background_color) && (l = null === (e = this.hoveringMessageSettings) || void 0 === e ? void 0 : e.background_color), null != (null === (n = this.hoveringMessageSettings) || void 0 === n || null === (i = n.border) || void 0 === i ? void 0 : i.color) && (a = null === (o = this.hoveringMessageSettings) || void 0 === o || null === (r = o.border) || void 0 === r ? void 0 : r.color));
                            return {
                                position: "absolute",
                                top: "-25px",
                                right: "0",
                                zIndex: "1",
                                background: "".concat(l),
                                borderRadius: "999px",
                                border: "1px solid ".concat(a),
                                padding: "5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        },
                        hoveringMessageCloseButtonSvgCSS: function() {
                            return {
                                width: "8px"
                            }
                        },
                        hoveringMessageCloseButtonSvgPathCSS: function() {
                            var t, e, n, i, o = "#aeaeae";
                            null != this.hoveringMessageSettings && (null != (null === (t = this.hoveringMessageSettings) || void 0 === t || null === (e = t.font) || void 0 === e ? void 0 : e.color) && (o = null === (n = this.hoveringMessageSettings) || void 0 === n || null === (i = n.font) || void 0 === i ? void 0 : i.color));
                            return {
                                stroke: "".concat(o),
                                strokeWidth: "3px"
                            }
                        },
                        hoveringMessageWrapperCSS: function() {
                            var t, e = "rgb(255 255 255)",
                                n = "rgb(0 0 0)",
                                i = 5,
                                o = 15,
                                r = 1,
                                l = "#e6e9ee";
                            if (null != this.hoveringMessageSettings) {
                                var a, s, u, c, d, h, p, v, g, f, m, _, b, C, y, S, x, w, k, T, I, M, E, A;
                                if (null != (null === (a = this.hoveringMessageSettings) || void 0 === a ? void 0 : a.background_color) && (e = null === (s = this.hoveringMessageSettings) || void 0 === s ? void 0 : s.background_color), null != (null === (u = this.hoveringMessageSettings) || void 0 === u ? void 0 : u.font)) null != (null === (d = this.hoveringMessageSettings) || void 0 === d || null === (h = d.font) || void 0 === h ? void 0 : h.color) && (n = null === (p = this.hoveringMessageSettings) || void 0 === p || null === (v = p.font) || void 0 === v ? void 0 : v.color), null != (null === (g = this.hoveringMessageSettings) || void 0 === g || null === (f = g.font) || void 0 === f ? void 0 : f.size) && (o = null === (m = this.hoveringMessageSettings) || void 0 === m || null === (_ = m.font) || void 0 === _ ? void 0 : _.size);
                                if (null != (null === (c = this.hoveringMessageSettings) || void 0 === c ? void 0 : c.border)) null != (null === (b = this.hoveringMessageSettings) || void 0 === b || null === (C = b.border) || void 0 === C ? void 0 : C.color) && (l = null === (y = this.hoveringMessageSettings) || void 0 === y || null === (S = y.border) || void 0 === S ? void 0 : S.color), null != (null === (x = this.hoveringMessageSettings) || void 0 === x || null === (w = x.border) || void 0 === w ? void 0 : w.size) && (r = null === (k = this.hoveringMessageSettings) || void 0 === k || null === (T = k.border) || void 0 === T ? void 0 : T.size), null != (null === (I = this.hoveringMessageSettings) || void 0 === I || null === (M = I.border) || void 0 === M ? void 0 : M.roundness) && (i = null === (E = this.hoveringMessageSettings) || void 0 === E || null === (A = E.border) || void 0 === A ? void 0 : A.roundness)
                            }
                            var R, B, F = {
                                position: "relative",
                                padding: "10px 15px",
                                borderRadius: "".concat(i, "px"),
                                fontSize: "".concat(o, "px"),
                                backgroundColor: e,
                                color: n,
                                border: "".concat(r, "px solid ").concat(l),
                                marginBottom: "7px"
                            };
                            null != (null === (t = this.hoveringMessageSettings) || void 0 === t ? void 0 : t.shadow) && (1 == (null === (R = this.hoveringMessageSettings) || void 0 === R || null === (B = R.shadow) || void 0 === B ? void 0 : B.enabled) && (F["box-shadow"] = "-2px 0px 10px rgba(0,0,0,.05)", F["-moz-box-shadow"] = "-2px 0px 10px rgba(0,0,0,.05)", F["-webkit-box-shadow"] = "-2px 0px 10px rgba(0,0,0,.05)"));
                            return F
                        },
                        csatSurveySubmitButtonDisabled: function() {
                            return !this.isCSATRequiredFieldsFilled
                        },
                        isCSATRequiredFieldsFilled: function() {
                            return (1 != this.csatSurvey.components.rating.enabled || 1 != this.csatSurvey.components.rating.required || null != this.csatSurvey.components.rating.value) && ((1 != this.csatSurvey.components.feedback.enabled || 1 != this.csatSurvey.components.feedback.required || null != this.csatSurvey.components.feedback.value && 0 != this.csatSurvey.components.feedback.value.trim().length) && ((1 != this.csatSurvey.components.follow_up_question.enabled || 1 != this.csatSurvey.components.follow_up_question.required || null != this.csatSurvey.components.follow_up_question.values && 0 != this.csatSurvey.components.follow_up_question.values.length) && (1 != this.csatSurvey.components.resolved.enabled || 1 != this.csatSurvey.components.resolved.required || null != this.csatSurvey.components.resolved.value)))
                        },
                        csatRatingCategory: function() {
                            return null != this.csatSurvey.components.rating.value && this.csatSurvey.components.rating.value > 3 ? "positive" : "negative"
                        },
                        csatFollowUpQuestionLabel: function() {
                            var t, e, n, i;
                            return null != (null === (t = this.csatSurvey.components) || void 0 === t || null === (e = t.follow_up_question) || void 0 === e ? void 0 : e.texts) && this.csatRatingCategory in (null === (n = this.csatSurvey.components.follow_up_question) || void 0 === n ? void 0 : n.texts) ? null === (i = this.csatSurvey.components.follow_up_question.texts[this.csatRatingCategory]) || void 0 === i ? void 0 : i.label : null
                        },
                        csatFollowUpQuestionOptions: function() {
                            var t, e, n;
                            return null != (null === (t = this.csatSurvey.components) || void 0 === t || null === (e = t.follow_up_question) || void 0 === e ? void 0 : e.options) && this.csatRatingCategory in (null === (n = this.csatSurvey.components.follow_up_question) || void 0 === n ? void 0 : n.options) ? this.csatSurvey.components.follow_up_question.options[this.csatRatingCategory] : []
                        },
                        isCSATSurveyVisible: function() {
                            return 1 == this.csatRatingVisible || 1 == this.csatFullSurveyVisible
                        },
                        blackOverlayCSS: function() {
                            return {
                                position: "absolute",
                                top: "0",
                                left: "0",
                                right: "0",
                                bottom: "0",
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                zIndex: "999"
                            }
                        },
                        bottomModalCSS: function() {
                            return {
                                position: "absolute",
                                bottom: "0",
                                left: "0",
                                right: "0",
                                backgroundColor: "white",
                                boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
                                padding: "20px",
                                zIndex: "1000",
                                borderRadius: "20px 20px 0 0",
                                maxHeight: "calc(100% - 65px)",
                                overflowY: "auto"
                            }
                        },
                        bottomModalActionButtonsCSS: function() {
                            return {
                                marginTop: "25px",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                width: "100%",
                                gap: "5px"
                            }
                        },
                        bottomModalContentCSS: function() {
                            return {
                                display: "flex",
                                flexDirection: "column"
                            }
                        },
                        bottomModalContentMaxWidthSMCSS: function() {
                            return {
                                maxWidth: "350px",
                                margin: "0 auto"
                            }
                        },
                        activeInputVoiceInputMaxDurationSeconds: function() {
                            var t;
                            if (0 == this.isInputActive) return null;
                            var e = this.maxActiveInputAudioRecordingDurationSeconds;
                            if (null == this.activeInputData) return e;
                            var n = this.activeInputData;
                            if (null == n) return e;
                            if (null == (null == n ? void 0 : n.voice_input)) return e;
                            var i = null == n || null === (t = n.voice_input) || void 0 === t ? void 0 : t.max_duration;
                            return null === i || i < 1 ? e : i
                        },
                        audioRecorderWrapperCSS: function() {
                            var t = {};
                            return this.set_active_input_audio_recorder_styles && (t.height = "51px", t.display = "flex", t.alignItems = "center", t.justifyContent = "center"), this.make_active_input_audio_recorder_full_width && (t.width = "100%"), t
                        },
                        allowAudioRecordingForActiveInput: function() {
                            var t;
                            if (0 == this.allowSpeechToTextInput) return !1;
                            if (this.activeInputType != this.blockTypes.INPUTS.TEXT) return !1;
                            if (null == this.activeInputData) return !1;
                            var e = null === (t = this.activeInputData) || void 0 === t ? void 0 : t.voice_input;
                            return null != e && 1 == (null == e ? void 0 : e.enabled)
                        },
                        audioRecorderForActiveInputVisible: function() {
                            return 1 == this.allowAudioRecordingForActiveInput && 1 == this.show_audio_recorder
                        },
                        inputQuickReplies: function() {
                            var t;
                            if (0 == this.isInputActive) return null;
                            if (null == this.active_input) return null;
                            var e = null === (t = this.active_input) || void 0 === t ? void 0 : t.data;
                            if (null == e) return null;
                            var n = null == e ? void 0 : e.quick_replies;
                            return null == n ? null : n
                        },
                        activeInputData: function() {
                            var t;
                            return null == this.active_input ? null : null === (t = this.active_input) || void 0 === t ? void 0 : t.data
                        },
                        bottomBarFloatingCSS: function() {
                            var t;
                            return t = {
                                position: "absolute",
                                bottom: "100%",
                                left: "0",
                                width: "100%",
                                zIndex: "2",
                                padding: "0 15px 10px",
                                display: "flex",
                                justifyContent: "flex-start",
                                flexDirection: "column",
                                gap: "10px"
                            }, Object(i.a)(t, "width", "100%"), Object(i.a)(t, "boxSizing", "border-box"), t
                        },
                        isFloatingDisplayType: function() {
                            return "floating" == this.displayType
                        },
                        isFullScreenDisplayType: function() {
                            return "fullscreen" == this.displayType
                        },
                        isInlinePageDisplayType: function() {
                            return "page_inline" == this.displayType
                        },
                        showSuccessNotification: function() {
                            return null != this.success_notification_message && this.success_notification_message.length > 0
                        },
                        notificationWrapperCSS: function() {
                            var t = {
                                "box-sizing": "border-box",
                                height: "0",
                                opacity: "0",
                                width: "0",
                                display: "none"
                            };
                            return this.showSuccessNotification && (t.display = "block", t.height = "auto", t.opacity = "1", t.width = "100%"), t
                        },
                        isPublicEmbed: function() {
                            return "public_embed" == this.placed_on
                        },
                        isSharingEmbed: function() {
                            return "sharing" == this.placed_on
                        },
                        isBuilderPreviewEmbed: function() {
                            return "builder-preview" == this.placed_on || "chatbot-testing" == this.placed_on
                        },
                        isAppearanceEditor: function() {
                            return "editor" == this.placed_on
                        },
                        chatEndedMessageWrapperCSS: function() {
                            return {
                                height: "1px",
                                background: "#d6d6d6",
                                position: "relative",
                                marginTop: "20px"
                            }
                        },
                        chatEndedMessageTextCSS: function() {
                            return {
                                fontSize: "0.85em",
                                color: "#8a8f99",
                                textAlign: "center",
                                position: "absolute",
                                background: "white",
                                top: "-9px",
                                padding: "0 10px",
                                left: "50%",
                                transform: "translateX(-50%)"
                            }
                        },
                        inputBlockId: function() {
                            var t;
                            return null == this.active_input ? null : null === (t = this.active_input) || void 0 === t ? void 0 : t.id
                        },
                        numberInputMin: function() {
                            var t;
                            if (this.activeInputType != this.blockTypes.INPUTS.NUMBER) return null;
                            if (null == this.active_input) return null;
                            var e = null === (t = this.active_input) || void 0 === t ? void 0 : t.data;
                            return null == e || null === (null == e ? void 0 : e.min) || void 0 === (null == e ? void 0 : e.min) ? null : e.min
                        },
                        numberInputMax: function() {
                            var t;
                            if (this.activeInputType != this.blockTypes.INPUTS.NUMBER) return null;
                            if (null == this.active_input) return null;
                            var e = null === (t = this.active_input) || void 0 === t ? void 0 : t.data;
                            return null == e || null === (null == e ? void 0 : e.max) || void 0 === (null == e ? void 0 : e.max) ? null : e.max
                        },
                        numberInputDataType: function() {
                            var t;
                            if (this.activeInputType != this.blockTypes.INPUTS.NUMBER) return null;
                            if (null == this.active_input) return null;
                            var e = null === (t = this.active_input) || void 0 === t ? void 0 : t.data;
                            return null == e || null === (null == e ? void 0 : e.data_type) || void 0 === (null == e ? void 0 : e.data_type) ? null : e.data_type
                        },
                        activeInputType: function() {
                            return null == this.active_input ? null : this.active_input.type
                        },
                        isInputRequired: function() {
                            var t, e = !0;
                            if (null == this.activeInputType) return e;
                            var n = null === (t = this.active_input) || void 0 === t ? void 0 : t.required;
                            return null == n ? e : n
                        },
                        isInputActive: function() {
                            return null != this.active_input
                        },
                        isDateTimeInput: function() {
                            var t;
                            return null != this.active_input && (null === (t = this.active_input) || void 0 === t ? void 0 : t.type) == this.blockTypes.INPUTS.DATETIME
                        },
                        dateTimeType: function() {
                            var t = "datetime";
                            if (!this.isDateTimeInput) return null;
                            var e = this.inputBlockData;
                            if (null == e) return t;
                            var n = null == e ? void 0 : e.format;
                            return null == n ? t : n
                        },
                        dateTimeFormatString: function() {
                            var t = "YYYY-MM-DD HH:mm",
                                e = this.dateTimeType;
                            return null == e || ("date" == e ? t = "YYYY-MM-DD" : "time" == e && (t = "HH:mm")), t
                        },
                        dateTimeMaxValue: function() {
                            var t = this.inputBlockData;
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.max;
                            if (null == e) return null;
                            var n = null == e ? void 0 : e.type;
                            if (null == n || "none" == n) return null;
                            if ("custom" == n) return null == e ? void 0 : e.value;
                            if ("current" == n) {
                                var i = this.dateTimeType;
                                if (null == i) return null;
                                var o = new Date,
                                    r = o.getFullYear(),
                                    l = (o.getMonth() + 1).toString().padStart(2, "0"),
                                    a = o.getDate().toString().padStart(2, "0"),
                                    s = o.getHours().toString().padStart(2, "0"),
                                    u = o.getMinutes().toString().padStart(2, "0");
                                if ("datetime" == i) return "".concat(r, "-").concat(l, "-").concat(a, " ").concat(s, ":").concat(u);
                                if ("date" == i) return "".concat(r, "-").concat(l, "-").concat(a);
                                if ("time" == i) return "".concat(s, ":").concat(u)
                            }
                            return null
                        },
                        dateTimeMinValue: function() {
                            var t = this.inputBlockData;
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.min;
                            if (null == e) return null;
                            var n = null == e ? void 0 : e.type;
                            if (null == n || "none" == n) return null;
                            if ("custom" == n) return null == e ? void 0 : e.value;
                            if ("current" == n) {
                                var i = this.dateTimeType;
                                if (null == i) return null;
                                var o = new Date,
                                    r = o.getFullYear(),
                                    l = (o.getMonth() + 1).toString().padStart(2, "0"),
                                    a = o.getDate().toString().padStart(2, "0"),
                                    s = o.getHours().toString().padStart(2, "0"),
                                    u = o.getMinutes().toString().padStart(2, "0");
                                if ("datetime" == i) return "".concat(r, "-").concat(l, "-").concat(a, " ").concat(s, ":").concat(u);
                                if ("date" == i) return "".concat(r, "-").concat(l, "-").concat(a);
                                if ("time" == i) return "".concat(s, ":").concat(u)
                            }
                            return null
                        },
                        blockTypes: function() {
                            return a.d
                        },
                        inputBlockData: function() {
                            var t;
                            return null == this.active_input ? null : null === (t = this.active_input) || void 0 === t ? void 0 : t.data
                        },
                        poweredByText: function() {
                            var t = this.translation.powered_by;
                            return null == t || 0 == t.length ? "Powered by Chatling" : t = t.replace("XYZ", "Chatling")
                        },
                        thinkingIconCSS: function() {
                            var t = {
                                position: "absolute"
                            };
                            return "rtl" == this.languageDirection ? t.left = "25px" : t.right = "25px", t
                        },
                        sendButtonCSSNew: function() {
                            var t = {
                                position: "absolute",
                                bottom: "12px",
                                background: "black",
                                "border-radius": "999px",
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                width: "30px",
                                height: "30px"
                            };
                            return "rtl" == this.languageDirection ? t.left = "15px" : t.right = "15px", 1 == this.disable_user_input ? (t.cursor = "auto", t.background = "#e5e7eb") : (t.cursor = "pointer", t.background = this.primaryColor), t
                        },
                        sendButtonArrowCSS: function() {
                            var t = {
                                display: "block",
                                height: "17px",
                                width: "17px",
                                "stroke-width": "2.2px"
                            };
                            return 1 == this.disable_user_input ? t.stroke = "#9ca3af" : t.stroke = this.foregroundColor, t
                        },
                        sendIconCSS: function() {
                            var t = {
                                position: "absolute"
                            };
                            return "rtl" == this.languageDirection ? (t.left = "15px", t.rotate = "180deg") : t.right = "15px", t
                        },
                        microphoneButtonCSS: function() {
                            var t = {
                                position: "absolute",
                                bottom: "15px"
                            };
                            return "rtl" == this.languageDirection ? t.left = "50px" : t.right = "50px", 1 == this.disable_user_input ? t.cursor = "auto" : t.cursor = "pointer", t
                        },
                        microphoneButtonIconCSS: function() {
                            var t = {
                                width: "18px",
                                height: "18px",
                                display: "block",
                                "stroke-width": "1.75px"
                            };
                            return 1 == this.disable_user_input ? t.stroke = "#9ca3af" : t.stroke = "#6b7280", t
                        },
                        languageDirection: function() {
                            if (null == this.interface_language || 0 == this.interface_language.length) return "ltr";
                            return ["ar", "az", "he", "fa", "ur"].includes(this.interface_language) ? "rtl" : "ltr"
                        },
                        messageInputPlaceholder: function() {
                            var t, e = "Enter  a message...";
                            if (null == this.texts) return e;
                            var n = null === (t = this.texts) || void 0 === t ? void 0 : t.message_input_placeholder;
                            return null == n ? e : n == e || "Enter a message..." == n ? this.translation.input_placeholder : n
                        },
                        inputPlaceholder: function() {
                            var t = this.translation.global["type here..."];
                            return this.activeInputType == this.blockTypes.INPUTS.EMAIL ? t = this.translation.global["enter email address"] : this.activeInputType == this.blockTypes.INPUTS.NUMBER ? t = this.translation.global["enter number"] : this.activeInputType == this.blockTypes.INPUTS.PHONE ? t = this.translation.global["enter phone number"] : this.activeInputType == this.blockTypes.INPUTS.DATETIME && (t = "date" == this.dateTimeType ? this.translation.global["choose date"] : "time" == this.dateTimeType ? this.translation.global["choose time"] : "datetime" == this.dateTimeType ? this.translation.global["choose date and time"] : this.translation.global["choose date/time"]), t
                        },
                        collectCustomerDetailsEnabled: function() {
                            var t, e, n = null === (t = this.settings) || void 0 === t || null === (e = t.form) || void 0 === e ? void 0 : e.enabled;
                            return 1 == n && n
                        },
                        customerDetailsToCollect: function() {
                            var t, e;
                            return null === (t = this.settings) || void 0 === t || null === (e = t.form) || void 0 === e ? void 0 : e.fields_list
                        },
                        customerDetailCollectionType: function() {
                            var t, e;
                            return null === (t = this.settings) || void 0 === t || null === (e = t.form) || void 0 === e ? void 0 : e.type
                        },
                        customDetailsEntered: function() {
                            return !1
                        },
                        hidePoweredByBranding: function() {
                            if (this.isBuilderPreviewEmbed) return !0;
                            if (null == this.settings) return !1;
                            var t = this.settings.hide_branding;
                            return null != t && t
                        },
                        showMinimizeButton: function() {
                            return !this.isSharingEmbed && !this.isBuilderPreviewEmbed && !!this.isFloatingDisplayType
                        },
                        showCloseButton: function() {
                            return !this.chatEnded && (!this.isSharingEmbed && !this.isBuilderPreviewEmbed && !!this.isFloatingDisplayType)
                        },
                        showChatIcon: function() {
                            return "wix" == this.integration_type || !(this.isPublicEmbed || this.isSharingEmbed || this.isBuilderPreviewEmbed)
                        },
                        canShowAttentionGrabber: function() {
                            return 0 != this.isAppearanceEditor && (!this.is_chat_open && (!!this.attentionGrabberEnabled && (!!this.hoveringMessagesVisible && (null != this.customAttentionGrabberTexts && 0 != this.customAttentionGrabberTexts.length && 0 != this.customAttentionGrabberTexts[0].length))))
                        },
                        attentionGrabberEnabled: function() {
                            var t, e, n, i;
                            return (null === (t = this.settings) || void 0 === t || null === (e = t.attention_grabber) || void 0 === e ? void 0 : e.desktop.enabled) || (null === (n = this.settings) || void 0 === n || null === (i = n.attention_grabber) || void 0 === i ? void 0 : i.mobile.enabled)
                        },
                        customAttentionGrabberTexts: function() {
                            var t, e = [];
                            return null == this.texts || null == (null === (t = this.texts) || void 0 === t ? void 0 : t.attention_grabber_hovering_messages) || 0 == this.texts.attention_grabber_hovering_messages.length ? e : this.texts.attention_grabber_hovering_messages
                        },
                        attentionGrabberTexts: function() {
                            return this.customAttentionGrabberTexts
                        },
                        attentionGrabberTextWrapperCSS: function() {
                            return {
                                position: "absolute",
                                right: "0px",
                                bottom: this.chatIconSize + 15 + "px",
                                width: "300px"
                            }
                        },
                        attentionGrabberTextCSS: function() {
                            var t = {
                                position: "relative",
                                padding: "15px",
                                "padding-right": "25px",
                                "border-radius": "5px",
                                "font-size": "14px"
                            };
                            return t["background-color"] = this.primaryColor, t.color = this.foregroundColor, t
                        },
                        attentionGrabberTextCaretCSS: function() {
                            return {
                                position: "absolute",
                                right: "25px",
                                bottom: "-5px",
                                width: "10px",
                                height: "10px",
                                transform: "rotate(45deg)",
                                "background-color": this.primaryColor
                            }
                        },
                        maxSources: function() {
                            var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                            if (null == e) return 1;
                            var n = null == e ? void 0 : e.max;
                            try {
                                n = parseInt(n)
                            } catch (t) {
                                n = 1
                            }
                            return null == n ? 1 : n
                        },
                        inputLabelCSS: function() {
                            return {
                                "font-weight": "600",
                                "margin-bottom": "5px"
                            }
                        },
                        inputWrapperCSS: function() {
                            return {
                                margin: "10px 0",
                                "font-size": "0.95em",
                                display: "block",
                                background: "#FFFFFF"
                            }
                        },
                        bottomSectionCSS: function() {
                            var t = {
                                position: "relative"
                            };
                            return this.displayStartNewChatButton && (t["border-top"] = "1px solid #f3f4f6", t.background = "#f9fafb"), t
                        },
                        showBottomSectionError: function() {
                            return null != this.chat_error && this.chat_error.length > 0 || null != this.error_input && this.error_input.length > 0
                        },
                        bottomSectionErrorContainerCSS: function() {
                            return {
                                "flex-direction": "column",
                                gap: "5px",
                                "justify-content": "flex-start",
                                display: this.showBottomSectionError ? "flex" : "none"
                            }
                        },
                        bottomSectionErrorCSS: function() {
                            return {
                                background: "#ef4444",
                                color: "#fff",
                                padding: "5px 15px",
                                "font-size": "0.8em",
                                "font-weight": "500",
                                "border-radius": "5px",
                                "text-align": "left"
                            }
                        },
                        skipButtonCSS: function() {
                            var t = "all 0.3s ease";
                            return {
                                padding: "5px 10px",
                                borderRadius: "999px",
                                cursor: "pointer",
                                backgroundColor: "#f3f4f6",
                                color: "#6b7280",
                                fontSize: "0.85em",
                                whiteSpace: "nowrap",
                                transition: t,
                                "-webkit-transition": t,
                                "-moz-transition": t,
                                "-o-transition": t
                            }
                        },
                        quickReplyBtnCSS: function() {
                            var t = "all 0.3s ease",
                                e = this.primaryColor;
                            return {
                                padding: "5px 10px",
                                "font-size": "0.85em",
                                background: "white",
                                "border-radius": "999px",
                                color: e,
                                border: "1px solid ".concat(e),
                                cursor: "pointer",
                                transition: t,
                                "-webkit-transition": t,
                                "-moz-transition": t,
                                "-o-transition": t,
                                "white-space": "nowrap",
                                flex: "0 1 auto"
                            }
                        },
                        messageInputWrapperCSS: function() {
                            return {
                                position: "relative",
                                display: "flex",
                                "align-items": "center",
                                "border-top": "1px solid #f3f4f6"
                            }
                        },
                        buttonInputCSS: function() {
                            return {
                                padding: "15px",
                                display: "flex",
                                "justify-content": "right"
                            }
                        },
                        paddingNormalCSS: function() {
                            return {
                                padding: "15px 15px"
                            }
                        },
                        messageInputCSS: function() {
                            var t = {
                                width: "100%",
                                background: "transparent",
                                outline: "none !important",
                                border: "none !important",
                                "background-image": "none !important",
                                "background-color": "transparent !important",
                                "-webkit-box-shadow": "none !important",
                                "-moz-box-shadow": "none !important",
                                "box-shadow": "none !important",
                                "-webkit-appearance": "none !important",
                                appearance: "none !important",
                                resize: "none",
                                "outline-style": "none !important"
                            };
                            return this.disable_user_input && (t["background-color"] = "#f3f4f6", t.cursor = "auto", t.color = "#9ca3af", t.opacity = "0.5"), this.is_mobile_viewport ? t["font-size"] = "16px" : t["font-size"] = "14px", "rtl" == this.languageDirection ? (t.direction = "rtl", 1 == this.allowAudioRecordingForActiveInput ? t.padding = "15px 15px 15px 85px" : t.padding = "15px 15px 15px 50px") : 1 == this.allowAudioRecordingForActiveInput ? t.padding = "15px 85px 15px 15px" : t.padding = "15px 50px 15px 15px", t
                        },
                        parsed_conversation: function() {
                            var t = this.conversation;
                            return null != t && null != t || (t = []), t
                        },
                        chatIconSize: function() {
                            var t, e, n = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e ? void 0 : e.size;
                            return null == n && (n = 55), n
                        },
                        chatContainerCSS: function() {
                            var t = this.appearance.alignment.offset.x,
                                e = this.appearance.alignment.offset.y,
                                n = {};
                            return this.isSharingEmbed || this.isBuilderPreviewEmbed || (this.isPublicEmbed ? n = {
                                position: "absolute",
                                "z-index": 1,
                                right: "0",
                                bottom: "0",
                                width: "100%",
                                height: "100%"
                            } : (this.isAppearanceEditor && (e = 20, t = 20), n = {
                                position: "fixed",
                                "z-index": 1,
                                bottom: "".concat(e, "px"),
                                right: "".concat(t, "px"),
                                top: "20px"
                            })), n["--chtl-primary-color"] = this.primaryColor, n["--chtl-text-color"] = this.foregroundColor, n
                        },
                        chatWrapperCSS: function() {
                            return this.isSharingEmbed ? {
                                height: "100%",
                                width: "100%",
                                "max-width": "1200px"
                            } : this.isBuilderPreviewEmbed ? {
                                height: "100%",
                                width: "100%"
                            } : {
                                height: "100%"
                            }
                        },
                        headerIconCSS: function() {
                            if (0 == this.display_header_icon || null == this.header_icon_url || 0 == this.header_icon_url.length) return {};
                            var t = {
                                width: "32px",
                                height: "32px"
                            };
                            return null != this.header_icon_url && this.header_icon_url.length > 0 && (t["background-image"] = "url(".concat(this.header_icon_url, ")"), t["background-size"] = "cover", t["background-repeat"] = "no-repeat", t["background-position"] = "center"), t["border-radius"] = this.header_icon_roundness, t
                        },
                        customChatButtonWrapperCSS: function() {
                            var t, e, n, i, o = {
                                height: "".concat(this.chatIconSize, "px"),
                                width: "".concat(this.chatIconSize, "px"),
                                cursor: "pointer",
                                "z-index": "1"
                            };
                            null != this.chat_icon_url && (o["background-image"] = "url(".concat(this.chat_icon_url, ")"), o["background-size"] = "cover", o["background-repeat"] = "no-repeat", o["background-position"] = "center");
                            var r = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e ? void 0 : e.full_rounded,
                                l = null === (n = this.appearance) || void 0 === n || null === (i = n.chat_icon) || void 0 === i ? void 0 : i.border_radius;
                            return o["border-radius"] = 1 == r || null == l ? "100%" : "".concat(l, "px"), o
                        },
                        defaultChatButtonWrapperCSS: function() {
                            var t, e, n, i, o = {
                                    height: "".concat(this.chatIconSize, "px"),
                                    width: "".concat(this.chatIconSize, "px"),
                                    display: "flex",
                                    "justify-content": "center",
                                    "align-items": "center",
                                    cursor: "pointer",
                                    "z-index": "1"
                                },
                                r = this.primaryColor;
                            o["background-color"] = r;
                            var l = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e ? void 0 : e.full_rounded,
                                a = null === (n = this.appearance) || void 0 === n || null === (i = n.chat_icon) || void 0 === i ? void 0 : i.border_radius;
                            return o["border-radius"] = 1 == l || null == a ? "100%" : "".concat(a, "px"), o
                        },
                        defaultChatButtonIconCSS: function() {
                            var t = {
                                transition: "width ease-in-out 0.05s"
                            };
                            return this.is_chat_open ? (t.width = "0", t.height = "0", t.opacity = "0") : (t.opacity = "1", t.width = "".concat(this.chatIconSize / 2, "px"), t.height = "".concat(this.chatIconSize / 2, "px")), t
                        },
                        closeChatButtonIconCSS: function() {
                            var t = {
                                transition: "width ease-in-out 0.05s"
                            };
                            return this.is_chat_open ? (t.opacity = "1", t.width = "".concat(.33 * this.chatIconSize, "px"), t.height = "".concat(.33 * this.chatIconSize, "px")) : (t.opacity = "0", t.width = "0", t.height = "0"), t
                        },
                        chatButtonContainerCSS: function() {
                            var t = {
                                    display: "flex",
                                    "align-items": "center",
                                    position: "absolute",
                                    bottom: "0",
                                    right: "0"
                                },
                                e = this.appearance.alignment.position;
                            return t["justify-content"] = "bl" == e || "tl" == e ? "left" : "right", t
                        },
                        chatUIContainerCSS: function() {
                            var t = {
                                width: "100%",
                                background: "#FFF",
                                transition: "width ease-in-out 0.2s, opacity ease-in 0.1s",
                                "border-radius": "15px",
                                overflow: "hidden"
                            };
                            if (this.isBuilderPreviewEmbed) t.width = "100%", t["border-radius"] = "0", t.position = "absolute", t.height = "calc(100% - ".concat(this.previewTitleBarHeight, "px)"), t.left = "0px", t.top = "".concat(this.previewTitleBarHeight, "px");
                            else if (t.position = "absolute", this.isPublicEmbed) t.bottom = "0px", t.right = "0px", t.height = "100%", t.width = "100%", t["border-radius"] = "0";
                            else if (this.isSharingEmbed) t.bottom = "0px", t.right = "0px", t.height = "100%", t.width = "100%", t["border-radius"] = "0";
                            else {
                                var e, n;
                                t["margin-bottom"] = "20px", t.height = "min(600px, 100% - 100px)", t["min-height"] = "80px", t["max-height"] = "700px", t.bottom = "".concat(this.chatIconSize, "px"), t.right = "0px";
                                var i = null === (e = this.appearance) || void 0 === e || null === (n = e.chat_interface) || void 0 === n ? void 0 : n.desktop_max_width;
                                null == i && (i = 400), t.width = "".concat(i, "px")
                            }
                            return this.is_chat_open ? t.opacity = 1 : t.opacity = 0, this.isPublicEmbed || this.isBuilderPreviewEmbed || (t["box-shadow"] = "0px 5px 10px 0 rgba(0,0,0,0.01), 0 7px 12px 0 rgba(0,0,0,.1)"), t
                        },
                        startChatCSS: function() {
                            return {
                                display: "block",
                                padding: "10px",
                                "text-align": "center",
                                "background-color": this.primaryColor,
                                "border-radius": "5px",
                                color: this.foregroundColor,
                                "font-weight": "600",
                                cursor: "pointer"
                            }
                        },
                        primaryButtonCSS: function() {
                            var t = "all 0.3s ease";
                            return {
                                display: "block",
                                padding: "10px",
                                "text-align": "center",
                                "background-color": this.primaryColor,
                                "border-radius": "5px",
                                color: this.foregroundColor,
                                "font-weight": "500",
                                cursor: "pointer",
                                transition: t,
                                "-webkit-transition": t,
                                "-moz-transition": t,
                                "-o-transition": t
                            }
                        },
                        chatUIHeaderCSS: function() {
                            var t = {
                                    display: "flex",
                                    "justify-content": "space-between",
                                    padding: "15px",
                                    "align-items": "center"
                                },
                                e = this.primaryColor;
                            return t["background-color"] = e, 2 == this.current_chat_header_type && (t["align-items"] = "normal", t.padding = "30px 15px"), t
                        },
                        prechatHeaderCSS: function() {
                            var t = {
                                    display: "flex",
                                    "justify-content": "space-between",
                                    padding: "15px",
                                    "align-items": "center"
                                },
                                e = this.primaryColor;
                            return t["background-color"] = e, t
                        },
                        chatHeaderTitleCSS_type1: function() {
                            return {
                                color: this.foregroundColor,
                                "font-weight": "600",
                                "font-size": "16px",
                                "white-space": "nowrap",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "padding-right": "10px"
                            }
                        },
                        chatHeaderTitleCSS_type2: function() {
                            return {
                                color: this.foregroundColor,
                                "font-weight": "700",
                                "font-size": "25px",
                                "margin-bottom": "5px"
                            }
                        },
                        chatHeaderSubtitleCSS_type2: function() {
                            var t = null;
                            return null != this.foregroundColor && (t = this.$getColorString(this.foregroundColor, 80)), null == t && (t = this.foregroundColor), {
                                color: t,
                                "font-weight": "400",
                                "font-size": "16px"
                            }
                        },
                        primaryColor: function() {
                            var t, e, n = "#000000FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) ? n : null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.primary) ? this.$getColorString(n) : this.$getColorString(this.appearance.colors.primary)
                        },
                        primaryColorDark: function() {
                            return this.primaryColor
                        },
                        primaryContrastColor: function() {
                            if (null == this.primaryColor) return null;
                            var t = this.$getContrastingColor(this.primaryColor);
                            return null == t ? this.foregroundColor : t
                        },
                        foregroundColor: function() {
                            var t, e, n, i = "#FFFFFFFF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) ? i : null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.foreground) ? this.$getColorString(i) : this.$getColorString(null === (n = this.appearance.colors) || void 0 === n ? void 0 : n.foreground)
                        },
                        assistantBGColor: function() {
                            var t, e, n = "#f1f5f9FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.assistant_chat_bubble_background) || 0 == this.appearance.colors.assistant_chat_bubble_background.length ? n : this.appearance.colors.assistant_chat_bubble_background
                        },
                        assistantTextColor: function() {
                            var t, e, n, i, o = "#000000FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.assistant_chat_bubble_text) || 0 == (null === (n = this.appearance.colors) || void 0 === n ? void 0 : n.assistant_chat_bubble_text.length) ? o : null === (i = this.appearance.colors) || void 0 === i ? void 0 : i.assistant_chat_bubble_text
                        },
                        welcomeTexts: function() {
                            var t, e = [];
                            return null == this.texts || null == (null === (t = this.texts) || void 0 === t ? void 0 : t.welcome_text) || 0 == this.texts.welcome_text.length ? e : this.texts.welcome_text
                        }
                    }
                },
                f = g,
                m = (n(415), n(417), n(90)),
                _ = Object(m.a)(f, (function() {
                    var t, e, n, i, o, r, l, a, s, u, c, d, h, p, v, g, f, m, _, b, C, y, S, x, w, k, T, I, M, E, A, R = this,
                        B = R._self._c;
                    return B("div", [B("div", {
                        style: [R.chatContainerCSS, {
                            "--chtl-primary-color": R.primaryColor,
                            "--chtl-primary-color-dark": R.primaryColorDark,
                            "--chtl-primary-contrast-color": R.primaryContrastColor,
                            "--chtl-text-color": R.foregroundColor,
                            "--chtl-footer-text-color": R.footerTextColor
                        }]
                    }, [B("div", {
                        style: R.chatWrapperCSS
                    }, [B("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: R.is_chat_open,
                            expression: "is_chat_open"
                        }],
                        style: R.chatUIContainerCSS,
                        attrs: {
                            id: "chtl-chat-panel",
                            dir: R.languageDirection,
                            role: "dialog",
                            "aria-modal": "false",
                            "aria-label": (null === (t = R.texts) || void 0 === t || null === (e = t.chat_header) || void 0 === e ? void 0 : e.title) || (null === (n = R.translation) || void 0 === n || null === (i = n.global) || void 0 === i ? void 0 : i.chat) || "Chat"
                        }
                    }, [B("div", {
                        staticStyle: {
                            display: "flex",
                            height: "100%",
                            width: "100%",
                            flex: "1 1 0%"
                        }
                    }, [B("div", [B("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [R.showEndChatConfirmation || R.isCSATSurveyVisible ? B("div", {
                        style: R.blackOverlayCSS
                    }) : R._e()]), R._v(" "), B("transition", {
                        attrs: {
                            name: "slide-up"
                        }
                    }, [R.showEndChatConfirmation ? B("div", {
                        ref: "end_chat_modal",
                        style: R.bottomModalCSS
                    }, [B("div", {
                        style: [R.bottomModalContentCSS, R.bottomModalContentMaxWidthSMCSS]
                    }, [B("div", {
                        staticStyle: {
                            "font-weight": "500",
                            "font-size": "1.2em",
                            "text-align": "center",
                            width: "100%"
                        }
                    }, [R._v(R._s(R.translation.csat.end_chat_confirmation_title))]), R._v(" "), B("div", {
                        staticStyle: {
                            "text-align": "center",
                            width: "100%",
                            "margin-top": "5px",
                            color: "#6b7280"
                        }
                    }, [R._v(R._s(R.translation.csat.end_chat_confirmation_message))]), R._v(" "), B("div", {
                        style: R.bottomModalActionButtonsCSS
                    }, [B("ActionButton", {
                        attrs: {
                            text: R.translation.csat.end_chat_confirmation_button,
                            design: "danger"
                        },
                        on: {
                            clicked: R.confirmEndChat
                        }
                    }), R._v(" "), B("ActionButton", {
                        attrs: {
                            text: R.translation.csat.cancel_end_chat_confirmation_button,
                            design: "gray"
                        },
                        on: {
                            clicked: R.cancelEndChat
                        }
                    })], 1)])]) : R._e()]), R._v(" "), R.csatSurvey.prepared && R.csatSurvey.enabled ? B("div", [B("transition", {
                        attrs: {
                            name: "slide-up"
                        }
                    }, [R.csatRatingVisible ? B("div", {
                        ref: "csat_rating_modal",
                        style: R.bottomModalCSS
                    }, [B("div", {
                        style: [R.bottomModalContentCSS, R.bottomModalContentMaxWidthSMCSS]
                    }, [B("CsatRating", {
                        attrs: {
                            label: R.csatSurvey.components.rating.texts.label,
                            ratingTypeId: R.csatSurvey.components.rating.rating_type_id,
                            ratingValue: R.csatSurvey.components.rating.value,
                            required: R.csatSurvey.components.rating.required,
                            labelTerrible: R.csatSurvey.components.rating.texts.scale_label.terrible,
                            labelExcellent: R.csatSurvey.components.rating.texts.scale_label.excellent,
                            numeric5Ratings: R.csatNumeric5Ratings,
                            emoji5Ratings: R.csatEmoji5Ratings
                        },
                        on: {
                            selectedRating: function(t) {
                                return R.selectCSATRating(t, !0)
                            }
                        }
                    })], 1), R._v(" "), B("div", {
                        style: [R.bottomModalContentMaxWidthSMCSS, R.bottomModalActionButtonsCSS]
                    }, [B("div", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "center",
                            width: "100%"
                        }
                    }, [B("button", {
                        staticClass: "chtl-link-btn",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: R.skipCSATRating
                        }
                    }, [R._v(R._s(R.translation.csat.rating_skip_button))])])])]) : R._e()]), R._v(" "), B("transition", {
                        attrs: {
                            name: "slide-up"
                        }
                    }, [R.csatFullSurveyVisible ? B("div", {
                        ref: "csat_full_modal",
                        style: R.bottomModalCSS
                    }, [B("div", {
                        staticStyle: {
                            display: "flex",
                            "flex-direction": "column",
                            width: "100%",
                            gap: "15px",
                            "justify-content": "center"
                        }
                    }, [B("div", {
                        style: [R.bottomModalContentCSS, R.bottomModalContentMaxWidthSMCSS]
                    }, [B("CsatRating", {
                        attrs: {
                            label: R.csatSurvey.components.rating.texts.label,
                            ratingTypeId: R.csatSurvey.components.rating.rating_type_id,
                            ratingValue: R.csatSurvey.components.rating.value,
                            required: R.csatSurvey.components.rating.required,
                            labelTerrible: R.csatSurvey.components.rating.texts.scale_label.terrible,
                            labelExcellent: R.csatSurvey.components.rating.texts.scale_label.excellent,
                            numeric5Ratings: R.csatNumeric5Ratings,
                            emoji5Ratings: R.csatEmoji5Ratings
                        },
                        on: {
                            selectedRating: function(t) {
                                return R.selectCSATRating(t, !1)
                            }
                        }
                    }), R._v(" "), R.csatSurvey.components.follow_up_question.enabled && null != R.csatFollowUpQuestionOptions && R.csatFollowUpQuestionOptions.length > 0 ? B("CsatMultiOptions", {
                        attrs: {
                            required: R.csatSurvey.components.follow_up_question.required,
                            label: R.csatFollowUpQuestionLabel,
                            options: R.csatFollowUpQuestionOptions,
                            currentValues: R.csatSurvey.components.follow_up_question.values
                        },
                        on: {
                            selectedOption: function(t) {
                                return R.csatFollowUpQuestionOptionClicked(t)
                            }
                        }
                    }) : R._e(), R._v(" "), R.csatSurvey.components.resolved.enabled ? B("CsatSingleOption", {
                        attrs: {
                            label: null === (o = R.csatSurvey.components.resolved) || void 0 === o || null === (r = o.texts) || void 0 === r ? void 0 : r.label,
                            options: null === (l = R.csatSurvey.components.resolved) || void 0 === l ? void 0 : l.options,
                            currentValue: null === (a = R.csatSurvey.components.resolved) || void 0 === a ? void 0 : a.value,
                            required: null === (s = R.csatSurvey.components.resolved) || void 0 === s ? void 0 : s.required
                        },
                        on: {
                            selectedOption: function(t) {
                                return R.csatResolvedOptionClicked(t)
                            }
                        }
                    }) : R._e(), R._v(" "), R.csatSurvey.components.feedback.enabled ? B("CsatTextField", {
                        attrs: {
                            required: R.csatSurvey.components.feedback.required,
                            label: R.csatSurvey.components.feedback.texts.label,
                            placeholder: R.csatSurvey.components.feedback.placeholder,
                            currentValue: R.csatSurvey.components.feedback.value
                        },
                        on: {
                            inputChanged: function(t) {
                                return R.csatFeedbackInputChanged(t)
                            }
                        }
                    }) : R._e()], 1), R._v(" "), null != R.csatSurvey.error && R.csatSurvey.error.length > 0 ? B("div", {
                        staticClass: "chtl-error",
                        staticStyle: {
                            "text-align": "center",
                            "font-weight": "500"
                        }
                    }, [R._v(R._s(R.csatSurvey.error))]) : R._e(), R._v(" "), B("div", {
                        staticStyle: {
                            width: "100%"
                        },
                        style: [R.bottomModalContentMaxWidthSMCSS]
                    }, [B("ActionButton", {
                        attrs: {
                            text: R.translation.global.submit,
                            isLoading: R.submittingCsatSurvey,
                            disabled: R.csatSurveySubmitButtonDisabled
                        },
                        on: {
                            clicked: R.submitCSATSurvey
                        }
                    }), R._v(" "), B("div", {
                        staticStyle: {
                            color: "#6b7280",
                            "margin-top": "20px",
                            "font-weight": "500",
                            "font-size": "1em",
                            "text-align": "center",
                            width: "100%"
                        }
                    }, [B("button", {
                        staticClass: "chtl-link-btn",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: R.skipCSATRating
                        }
                    }, [R._v(R._s(R.translation.csat.close_button))])])], 1)])]) : R._e()])], 1) : R._e()], 1), R._v(" "), B("div", {
                        staticStyle: {
                            "flex-direction": "column",
                            display: "flex",
                            flex: "1 1 0%",
                            "min-height": "0px",
                            width: "100%"
                        }
                    }, [this.isBuilderPreviewEmbed ? R._e() : B("div", {
                        style: R.chatUIHeaderCSS
                    }, [B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == R.current_chat_header_type,
                            expression: "current_chat_header_type == 1"
                        }],
                        staticStyle: {
                            overflow: "hidden",
                            display: "flex",
                            "align-items": "center",
                            gap: "10px"
                        }
                    }, [1 == R.display_header_icon && null != R.header_icon_url && R.header_icon_url.length > 0 ? B("div", {
                        style: R.headerIconCSS
                    }) : R._e(), R._v(" "), B("div", {
                        style: R.chatHeaderTitleCSS_type1
                    }, [R._v(R._s(null === (u = R.texts) || void 0 === u || null === (c = u.chat_header) || void 0 === c ? void 0 : c.title))])]), R._v(" "), B("div", {
                        staticClass: "tpicns",
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            gap: "5px"
                        }
                    }, [B("div", {
                        ref: "ellipsis_dropdown",
                        staticClass: "ellipsis-dropdown",
                        style: {
                            direction: R.languageDirection
                        }
                    }, [B("button", {
                        ref: "ellipsis_button",
                        staticClass: "dropdown-btn chtl-chat-header-action-btn chtl-icon-btn",
                        attrs: {
                            type: "button",
                            "aria-label": (null === (d = R.translation) || void 0 === d || null === (h = d.global) || void 0 === h ? void 0 : h.menu) || "Menu",
                            "aria-haspopup": "menu",
                            "aria-expanded": R.show_ellipsis_dropdown ? "true" : "false",
                            "aria-controls": "chtl-ellipsis-menu"
                        },
                        on: {
                            click: R.toggleEllipsisDropdown
                        }
                    }, [B("svg", {
                        staticStyle: {
                            display: "block"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "17",
                            height: "17",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [B("circle", {
                        attrs: {
                            cx: "12",
                            cy: "12",
                            r: "1"
                        }
                    }), B("circle", {
                        attrs: {
                            cx: "19",
                            cy: "12",
                            r: "1"
                        }
                    }), B("circle", {
                        attrs: {
                            cx: "5",
                            cy: "12",
                            r: "1"
                        }
                    })])]), R._v(" "), R.show_ellipsis_dropdown ? B("ul", {
                        staticClass: "dropdown-content",
                        attrs: {
                            id: "chtl-ellipsis-menu",
                            role: "menu",
                            "aria-label": (null === (p = R.translation) || void 0 === p || null === (v = p.global) || void 0 === v ? void 0 : v.menu) || "Menu"
                        }
                    }, [this.isPublicEmbed || this.isSharingEmbed ? B("li", {
                        attrs: {
                            role: "none"
                        }
                    }, [B("button", {
                        staticClass: "chtl-dropdown-item",
                        attrs: {
                            type: "button",
                            role: "menuitem"
                        },
                        on: {
                            click: R.startNewChatClickedInEllipsisMenu
                        }
                    }, [B("span", [B("svg", {
                        staticStyle: {
                            display: "block"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "14",
                            height: "14",
                            color: "#4a5565",
                            fill: "none"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M12.5 2.01175C12.3344 2.00395 12.1677 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 11.3765 21.9942 11.1875 21.9827 11",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), R._v(" "), B("path", {
                        attrs: {
                            d: "M15 5.5H22M18.5 2L18.5 9",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), R._v(" "), B("path", {
                        attrs: {
                            d: "M11.9955 12H12.0045M15.991 12H16M8 12H8.00897",
                            stroke: "currentColor",
                            "stroke-width": "2.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), R._v(" "), B("span", [R._v("\n                                " + R._s(R.translation.global["new chat"]) + "\n                              ")])])]) : R._e(), R._v(" "), this.isPublicEmbed || this.isSharingEmbed ? B("li", {
                        attrs: {
                            role: "none"
                        }
                    }, [B("button", {
                        staticClass: "chtl-dropdown-item",
                        attrs: {
                            type: "button",
                            role: "menuitem"
                        },
                        on: {
                            click: R.refreshChatClicked
                        }
                    }, [B("span", [B("svg", {
                        staticStyle: {
                            display: "block"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "14",
                            height: "14",
                            color: "#4a5565",
                            fill: "none"
                        }
                    }, [B("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M11.75 2.95455C6.8924 2.95455 2.95455 6.8924 2.95455 11.75C2.95455 16.6076 6.8924 20.5455 11.75 20.5455C16.6076 20.5455 20.5455 16.6076 20.5455 11.75C20.5455 11.2103 20.983 10.7727 21.5227 10.7727C22.0625 10.7727 22.5 11.2103 22.5 11.75C22.5 17.6871 17.6871 22.5 11.75 22.5C5.81294 22.5 1 17.6871 1 11.75C1 5.81294 5.81294 1 11.75 1C14.3494 1 16.7334 1.92319 18.5916 3.45792V1.97727C18.5916 1.43754 19.0292 1 19.5689 1C20.1086 1 20.5462 1.43754 20.5462 1.97727V5.88636C20.5462 6.30688 20.2772 6.68025 19.8783 6.81337C19.4794 6.9465 19.0401 6.80952 18.7875 6.47329C17.1812 4.33477 14.6269 2.95455 11.75 2.95455Z",
                            fill: "currentColor"
                        }
                    })])]), R._v(" "), B("span", [R._v("\n                                " + R._s(R.translation.global.refresh) + "\n                              ")])])]) : R._e(), R._v(" "), (this.isPublicEmbed || this.isSharingEmbed) && this.allowDownloadTranscript ? B("li", {
                        attrs: {
                            role: "none"
                        }
                    }, [B("button", {
                        staticClass: "chtl-dropdown-item",
                        attrs: {
                            type: "button",
                            role: "menuitem"
                        },
                        on: {
                            click: R.downloadTranscriptClicked
                        }
                    }, [B("span", [B("svg", {
                        staticStyle: {
                            display: "block"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "14",
                            height: "14",
                            color: "#4a5565",
                            fill: "none"
                        }
                    }, [B("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M12 3.24992C12.5523 3.24992 13 3.69764 13 4.24992V10.7499H14.5C14.9045 10.7499 15.2691 10.9936 15.4239 11.3672C15.5787 11.7409 15.4931 12.171 15.2071 12.457L12.7071 14.957C12.3166 15.3476 11.6834 15.3476 11.2929 14.957L8.79292 12.457C8.50692 12.171 8.42137 11.7409 8.57615 11.3672C8.73093 10.9936 9.09557 10.7499 9.50003 10.7499H11V4.24992C11 3.69764 11.4477 3.24992 12 3.24992Z",
                            fill: "currentColor"
                        }
                    }), R._v(" "), B("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M3.83576 15.7637C4.38053 15.6729 4.89575 16.0409 4.98655 16.5857L5.20802 17.9145C5.28838 18.3967 5.70557 18.7501 6.19441 18.7501H17.8059C18.2947 18.7501 18.7119 18.3967 18.7923 17.9145L19.0138 16.5857C19.1046 16.0409 19.6198 15.6729 20.1646 15.7637C20.7093 15.8545 21.0773 16.3697 20.9865 16.9145L20.7651 18.2433C20.524 19.6898 19.2724 20.7501 17.8059 20.7501H6.19441C4.72789 20.7501 3.47632 19.6898 3.23523 18.2433L3.01376 16.9145C2.92297 16.3697 3.29099 15.8545 3.83576 15.7637Z",
                            fill: "currentColor"
                        }
                    })])]), R._v(" "), B("span", [R._v("\n                                " + R._s(R.translation.download_transcript) + "\n                              ")])])]) : R._e(), R._v(" "), (this.isPublicEmbed || this.isSharingEmbed) && 0 == this.chatEnded ? B("li", {
                        attrs: {
                            role: "none"
                        }
                    }, [B("button", {
                        staticClass: "chtl-dropdown-item",
                        attrs: {
                            type: "button",
                            role: "menuitem"
                        },
                        on: {
                            click: R.endChatClicked
                        }
                    }, [B("span", [B("svg", {
                        staticStyle: {
                            display: "block"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "14",
                            height: "14",
                            color: "#4a5565",
                            fill: "none"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M15 2L18.5 5.5M18.5 5.5L22 9M18.5 5.5L22 2M18.5 5.5L15 9",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), R._v(" "), B("path", {
                        attrs: {
                            d: "M6.09881 19.5C4.7987 19.3721 3.82475 18.9816 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H11.5M6.5 18C6.29454 19.0019 5.37769 21.1665 6.31569 21.8651C6.806 22.2218 7.58729 21.8408 9.14987 21.0789C10.2465 20.5441 11.3562 19.9309 12.5546 19.655C12.9931 19.5551 13.4395 19.5125 14 19.5C17.7712 19.5 19.6569 19.5 20.8284 18.3284C21.947 17.2098 21.9976 15.4403 21.9999 12",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round"
                        }
                    })])]), R._v(" "), B("span", [R._v("\n                                " + R._s(R.translation.global["end chat"]) + "\n                              ")])])]) : R._e()]) : R._e()]), R._v(" "), R.showMinimizeButton ? B("button", {
                        staticClass: "chtl-chat-header-action-btn chtl-icon-btn",
                        attrs: {
                            type: "button",
                            "aria-label": (null === (g = R.translation) || void 0 === g || null === (f = g.global) || void 0 === f ? void 0 : f.minimize) || "Minimize chat"
                        },
                        on: {
                            click: function(t) {
                                return R.minimizeChat()
                            }
                        }
                    }, [B("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M18 6 6 18"
                        }
                    }), B("path", {
                        attrs: {
                            d: "m6 6 12 12"
                        }
                    })])]) : R._e()])]), R._v(" "), R.showDownloadOptionsModal ? B("div", {
                        style: R.blackOverlayCSS
                    }) : R._e(), R._v(" "), B("transition", {
                        attrs: {
                            name: "slide-up"
                        }
                    }, [R.showDownloadOptionsModal ? B("div", {
                        style: R.bottomModalCSS
                    }, [B("div", {
                        style: [R.bottomModalContentCSS, R.bottomModalContentMaxWidthSMCSS]
                    }, [B("div", {
                        staticStyle: {
                            "font-weight": "500",
                            "font-size": "1.2em",
                            "text-align": "center",
                            width: "100%"
                        }
                    }, [R._v("Download Transcript")]), R._v(" "), B("div", {
                        staticStyle: {
                            "text-align": "center",
                            width: "100%",
                            "margin-top": "5px",
                            color: "#6b7280"
                        }
                    }, [R._v("Select file format")]), R._v(" "), B("div", {
                        staticStyle: {
                            display: "flex",
                            "flex-direction": "column",
                            gap: "10px",
                            "margin-top": "15px"
                        }
                    }, R._l(R.downloadFormats, (function(t) {
                        return B("button", {
                            key: t.id,
                            staticClass: "chtl-download-format-btn",
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return R.downloadTranscript(t.id)
                                }
                            }
                        }, [B("span", [B("svg", {
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: R.primaryColor,
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            }
                        }, [B("path", {
                            attrs: {
                                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                            }
                        }), R._v(" "), B("polyline", {
                            attrs: {
                                points: "14 2 14 8 20 8"
                            }
                        })])]), R._v(" "), B("span", {
                            staticStyle: {
                                "font-weight": "500"
                            }
                        }, [R._v(R._s(t.label))])])
                    })), 0), R._v(" "), B("div", {
                        style: R.bottomModalActionButtonsCSS
                    }, [B("ActionButton", {
                        attrs: {
                            text: R.translation.global.cancel,
                            design: "gray"
                        },
                        on: {
                            clicked: R.closeDownloadOptions
                        }
                    })], 1)])]) : R._e()]), R._v(" "), B("div", {
                        staticStyle: {
                            position: "relative",
                            "flex-direction": "column",
                            display: "flex",
                            flex: "1 1 0%",
                            "min-height": "0px",
                            width: "100%"
                        }
                    }, [R.endingChat ? B("div", [B("div", {
                        staticClass: "chtl-chat-loader-full"
                    }, [B("span", {
                        staticClass: "chtl-chat-loader-icon"
                    })])]) : R._e(), R._v(" "), B("div", {
                        ref: "chat_interface",
                        staticStyle: {
                            height: "100%",
                            padding: "15px",
                            "overflow-y": "auto",
                            "overflow-x": "hidden"
                        },
                        attrs: {
                            role: "log",
                            "aria-live": "polite",
                            "aria-relevant": "additions text",
                            tabindex: "-1"
                        }
                    }, [null != R.newChatError && R.newChatError.length > 0 ? B("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [B("div", {
                        staticClass: "chtl-chat-error-inline"
                    }, [B("div"), R._v(" "), B("div", {
                        staticClass: "chtl-chat-error-inline-icon"
                    }, [B("svg", {
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
                    }, [B("circle", {
                        attrs: {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }
                    }), B("line", {
                        attrs: {
                            x1: "12",
                            x2: "12",
                            y1: "8",
                            y2: "12"
                        }
                    }), B("line", {
                        attrs: {
                            x1: "12",
                            x2: "12.01",
                            y1: "16",
                            y2: "16"
                        }
                    })])]), R._v(" "), B("div", [B("div", {
                        staticClass: "chtl-chat-error-inline-title"
                    }, [R._v("Error")]), R._v(" "), B("div", {
                        staticClass: "chtl-chat-error-inline-message"
                    }, [R._v(R._s(R.newChatError))])])])]) : R.startingNewChat || R.refreshingChat ? B("div", {
                        staticClass: "chtl-chat-loader"
                    }, [B("span", {
                        staticClass: "chtl-chat-loader-icon"
                    })]) : B("div", [R._l(R.parsed_conversation, (function(t, e) {
                        var n, i, o;
                        return B("div", {
                            key: t.id
                        }, [null != t.component && (null === (n = t.component) || void 0 === n ? void 0 : n.type) == (null === (i = R.blockTypes) || void 0 === i || null === (o = i.LOG) || void 0 === o ? void 0 : o.END) ? B("div", {
                            staticClass: "chtl-chat-ended-message"
                        }, [R._v("\n                            " + R._s(R.translation.global["the chat has ended"]) + "\n                          ")]) : B("ChatbotMessage", {
                            attrs: {
                                message: t,
                                messageType: "normal",
                                maxSources: R.maxSources,
                                languageDirection: R.languageDirection,
                                botIconUrl: R.bot_icon_url,
                                primaryColor: R.primaryColor,
                                foregroundColor: R.foregroundColor,
                                assistantTextColor: R.assistantTextColor,
                                assistantBGColor: R.assistantBGColor,
                                appearance: R.appearance,
                                settings: R.settings,
                                messagesToShowAiAvatar: R.messagesToShowAiAvatar,
                                messagesToShowAgentAvatar: R.messagesToShowAgentAvatar,
                                isMobileViewport: R.is_mobile_viewport,
                                activeInputMessageId: R.activeInputMessageId,
                                translation: R.translation
                            },
                            on: {
                                showNotification: R.showNotification,
                                aiResponseRated: function(t) {
                                    R.$emit("aiResponseRated", t)
                                },
                                buttonBlockClicked: R.buttonBlockClicked,
                                inputFormSubmitted: R.inputFormSubmitted,
                                inputSubmittedFromMessage: R.inputSubmittedFromMessage
                            }
                        })], 1)
                    })), R._v(" "), B("div", [B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: R.chatbot_thinking,
                            expression: "chatbot_thinking"
                        }]
                    }, [B("ChatbotMessage", {
                        attrs: {
                            message: null,
                            messageType: "bot_thinking",
                            primaryColor: R.primaryColor,
                            foregroundColor: R.foregroundColor,
                            assistantTextColor: R.assistantTextColor,
                            assistantBGColor: R.assistantBGColor,
                            appearance: R.appearance,
                            settings: R.settings,
                            botIconUrl: R.bot_icon_url,
                            translation: R.translation,
                            isMobileViewport: R.is_mobile_viewport
                        }
                    })], 1), R._v(" "), B("div", {
                        ref: "chatbot_thinking_bubble"
                    }), R._v(" "), B("div", {
                        ref: "hidden_element",
                        staticStyle: {
                            height: "30px",
                            width: "0"
                        }
                    })])], 2)]), R._v(" "), R.startingNewChat || R.refreshingChat || null != R.newChatError && 0 != R.newChatError.length ? R._e() : B("div", {
                        style: R.bottomSectionCSS
                    }, [B("div", {
                        style: R.bottomBarFloatingCSS
                    }, [B("div", {
                        style: R.notificationWrapperCSS
                    }, [B("div", {
                        staticClass: "chtl-notification chtl-notification--success"
                    }, [R._v(R._s(R.success_notification_message))])]), R._v(" "), R.showBottomSectionError ? B("div", {
                        style: R.bottomSectionErrorContainerCSS
                    }, [B("div", {
                        staticStyle: {
                            display: "flex"
                        }
                    }, [null != R.chat_error && R.chat_error.length > 0 ? B("div", {
                        staticClass: "chtl-notification chtl-notification--error"
                    }, [R._v(R._s(R.chat_error))]) : R._e(), R._v(" "), null != R.error_input && R.error_input.length > 0 ? B("div", {
                        staticClass: "chtl-notification chtl-notification--error"
                    }, [R._v(R._s(R.error_input))]) : R._e()])]) : R._e(), R._v(" "), R.showQuickReplies ? B("div", {
                        staticStyle: {
                            position: "relative"
                        },
                        on: {
                            mouseover: R.showScrollbar,
                            mouseleave: R.hideScrollbar
                        }
                    }, [B("div", {
                        staticClass: "quick-replies-scroll-track",
                        staticStyle: {
                            position: "absolute",
                            left: "0",
                            right: "0",
                            height: "6px",
                            bottom: "-8px",
                            opacity: "0",
                            transition: "opacity 0.2s"
                        }
                    }, [B("div", {
                        staticClass: "quick-replies-scroll-thumb",
                        staticStyle: {
                            position: "absolute",
                            height: "100%",
                            background: "rgba(0,0,0,0.2)",
                            "border-radius": "3px"
                        }
                    })]), R._v(" "), 0 == R.displayStartNewChatButton ? B("div", {
                        staticClass: "quick-replies-container",
                        staticStyle: {
                            display: "flex",
                            gap: "5px",
                            "align-items": "flex-end",
                            "justify-content": "flex-start",
                            "overflow-x": "auto",
                            "scrollbar-width": "none",
                            "-ms-overflow-style": "none"
                        }
                    }, [R.isInputActive && !R.isInputRequired ? B("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "left"
                        }
                    }, [B("button", {
                        staticClass: "chtl-skip-btn chtl-quick-reply-btn",
                        style: R.skipButtonCSS,
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: R.skipInputClicked
                        }
                    }, [R._v("Skip")])]) : R._e(), R._v(" "), R._l(R.inputQuickReplies, (function(t) {
                        return R.showQuickReplies ? B("button", {
                            key: null == t ? void 0 : t.id,
                            staticClass: "chtl-skip-btn chtl-quick-reply-btn",
                            style: R.quickReplyBtnCSS,
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return R.quickReplyClicked(t)
                                }
                            }
                        }, [null != (null == t ? void 0 : t.label) && t.label.length > 0 ? B("span", [R._v(R._s(t.label))]) : null != (null == t ? void 0 : t.content) && t.content.length > 9 ? B("span", [R._v(R._s(t.content))]) : R._e()]) : R._e()
                    }))], 2) : R._e()]) : R._e()]), R._v(" "), R.displayStartNewChatButton ? B("div", {
                        style: R.paddingNormalCSS
                    }, [B("ActionButton", {
                        attrs: {
                            text: R.translation.global["start new chat"]
                        },
                        on: {
                            clicked: R.startNewChatClicked
                        }
                    })], 1) : B("div", [R.isInputActive && R.activeInputType == R.blockTypes.INPUTS.TEXT || R.activeInputType == R.blockTypes.INPUTS.NUMBER || R.activeInputType == R.blockTypes.INPUTS.EMAIL || R.activeInputType == R.blockTypes.INPUTS.URL || R.activeInputType == R.blockTypes.INPUTS.PHONE || R.activeInputType == R.blockTypes.INPUTS.DATETIME ? B("div", {
                        style: R.messageInputWrapperCSS
                    }, [R.allowAudioRecordingForActiveInput && R.audioRecorderForActiveInputVisible ? B("div", {
                        style: R.audioRecorderWrapperCSS
                    }, [B("AudioRecorder", {
                        attrs: {
                            processingAudio: R.is_transcribing_active_input_audio,
                            maxRecordingDurationSeconds: R.activeInputVoiceInputMaxDurationSeconds
                        },
                        on: {
                            recordingCancelled: R.audioRecordingCancelledForActiveInput,
                            recordingCompleted: R.audioRecordingCompletedForActiveInput,
                            microphonePermissionDenied: R.microphonePermissionDeniedForActiveInput,
                            microphonePermissionGranted: R.microphonePermissionGrantedForActiveInput,
                            error: R.audioRecordingErrorForActiveInput
                        }
                    })], 1) : R._e(), R._v(" "), R.hide_active_input || R.activeInputType != R.blockTypes.INPUTS.TEXT ? R._e() : B("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: R.user_input_value,
                            expression: "user_input_value"
                        }],
                        ref: "user_input_field",
                        staticClass: "chtl-message-input",
                        style: R.messageInputCSS,
                        attrs: {
                            "aria-label": R.inputPlaceholder,
                            rows: R.inputTextareaRows,
                            type: "text",
                            placeholder: R.inputPlaceholder,
                            disabled: R.disable_user_input
                        },
                        domProps: {
                            value: R.user_input_value
                        },
                        on: {
                            input: [function(t) {
                                t.target.composing || (R.user_input_value = t.target.value)
                            }, R.onTextareaInput],
                            keydown: function(t) {
                                return !t.type.indexOf("key") && R._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : R.handleEnterKeyPressedForInput(t, "text")
                            }
                        }
                    }), R._v(" "), R.hide_active_input || R.activeInputType != R.blockTypes.INPUTS.NUMBER ? R._e() : B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: R.user_input_value,
                            expression: "user_input_value"
                        }],
                        ref: "user_input_field",
                        staticClass: "chtl-message-input",
                        style: R.messageInputCSS,
                        attrs: {
                            "aria-label": R.inputPlaceholder,
                            type: "number",
                            placeholder: R.inputPlaceholder,
                            min: R.numberInputMin,
                            max: R.numberInputMax,
                            disabled: R.disable_user_input,
                            onkeydown: "return event.keyCode !== 69"
                        },
                        domProps: {
                            value: R.user_input_value
                        },
                        on: {
                            keydown: function(t) {
                                return !t.type.indexOf("key") && R._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : R.submitInput(!1)
                            },
                            input: [function(t) {
                                t.target.composing || (R.user_input_value = t.target.value)
                            }, R.numberInputChanged]
                        }
                    }), R._v(" "), R.hide_active_input || R.activeInputType != R.blockTypes.INPUTS.EMAIL && R.activeInputType != R.blockTypes.INPUTS.URL && R.activeInputType != R.blockTypes.INPUTS.PHONE ? R._e() : B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: R.user_input_value,
                            expression: "user_input_value"
                        }],
                        ref: "user_input_field",
                        staticClass: "chtl-message-input",
                        style: R.messageInputCSS,
                        attrs: {
                            "aria-label": R.inputPlaceholder,
                            type: "email",
                            placeholder: R.inputPlaceholder,
                            disabled: R.disable_user_input
                        },
                        domProps: {
                            value: R.user_input_value
                        },
                        on: {
                            keydown: function(t) {
                                return !t.type.indexOf("key") && R._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : R.submitInput(!1)
                            },
                            input: [function(t) {
                                t.target.composing || (R.user_input_value = t.target.value)
                            }, function() {
                                R.hideInputError()
                            }]
                        }
                    }), R._v(" "), R.hide_active_input || R.activeInputType != R.blockTypes.INPUTS.DATETIME ? R._e() : B("date-picker", {
                        staticClass: "chtl-datepicker-input",
                        staticStyle: {
                            width: "100%"
                        },
                        style: {
                            direction: R.languageDirection
                        },
                        attrs: {
                            value: R.user_input_value,
                            type: R.dateTimeType,
                            valueType: "format",
                            format: R.dateTimeFormatString,
                            placeholder: R.inputPlaceholder
                        },
                        on: {
                            input: R.dateTimeValueChanged
                        }
                    }), R._v(" "), R.hide_active_input || R.chatbot_thinking ? R._e() : B("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center"
                        }
                    }, [R.allowAudioRecordingForActiveInput ? B("button", {
                        staticClass: "chtl-icon-btn",
                        style: R.microphoneButtonCSS,
                        attrs: {
                            type: "button",
                            disabled: R.disable_user_input,
                            "aria-disabled": R.disable_user_input ? "true" : "false",
                            "aria-label": (null === (m = R.translation) || void 0 === m || null === (_ = m.global) || void 0 === _ ? void 0 : _["voice input"]) || "Voice input"
                        },
                        on: {
                            click: R.audioRecordingClickedForActiveInput
                        }
                    }, [B("svg", {
                        style: R.microphoneButtonIconCSS,
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
                        }
                    }), B("path", {
                        attrs: {
                            d: "M19 10v2a7 7 0 0 1-14 0v-2"
                        }
                    }), B("line", {
                        attrs: {
                            x1: "12",
                            x2: "12",
                            y1: "19",
                            y2: "22"
                        }
                    })])]) : R._e(), R._v(" "), B("button", {
                        staticClass: "chtl-icon-btn",
                        style: R.sendButtonCSSNew,
                        attrs: {
                            type: "button",
                            disabled: R.disable_user_input,
                            "aria-label": (null === (b = R.translation) || void 0 === b || null === (C = b.global) || void 0 === C ? void 0 : C["send message"]) || "Send message"
                        },
                        on: {
                            click: function(t) {
                                return R.submitInput(!1)
                            }
                        }
                    }, [B("svg", {
                        style: R.sendButtonArrowCSS,
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "m5 12 7-7 7 7"
                        }
                    }), B("path", {
                        attrs: {
                            d: "M12 19V5"
                        }
                    })])])])], 1) : B("div")]), R._v(" "), 0 == R.isBuilderPreviewEmbed && (1 != R.hidePoweredByBranding || null != R.footerHTML && R.footerHTML.length > 0) ? B("div", {
                        style: R.footerWrapperCSS
                    }, [1 != R.hidePoweredByBranding ? B("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            gap: "5px"
                        }
                    }, [B("svg", {
                        staticStyle: {
                            display: "block"
                        },
                        attrs: {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 162 174",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        style: {
                            fill: R.footerIconColor,
                            "stroke-width": "4px",
                            stroke: R.footerIconColor
                        },
                        attrs: {
                            d: "M148.943 87.0247C154.51 79.5679 158.463 72.0857 160.129 64.9254C162.155 56.9291 161.147 49.6259 157.743 43.766C152.283 34.2248 140.733 29.1771 124.652 29.1771C121.91 29.1771 118.894 29.474 115.638 29.7947C115.415 29.8166 115.192 29.8387 114.967 29.8607C106.941 11.712 94.8787 0.5 81 0.5C67.1222 0.5 55.06 11.7106 47.0347 29.8586C43.8257 29.5135 40.5896 29.1783 37.3482 29.1783C21.2624 29.1771 9.723 34.2278 3.93153 43.7565L3.93144 43.7565L3.92647 43.7651C0.521636 49.6252 -0.48622 56.9289 1.53994 64.9259C3.20523 72.0885 7.16089 79.5733 12.731 87.0325C7.16202 94.4917 3.20638 101.976 1.53996 109.139C-0.486228 117.136 0.521623 124.44 3.92647 130.3L3.92639 130.3L3.93153 130.308C9.72736 139.844 21.2748 144.529 37.3482 144.529C40.0904 144.529 43.1055 144.232 46.3619 143.911C46.5854 143.889 46.8101 143.867 47.036 143.845C55.0587 161.637 67.1189 173.207 81 173.207C94.8779 173.207 106.94 161.997 114.965 143.849C118.174 144.194 121.41 144.529 124.652 144.529C140.726 144.529 152.608 139.486 158.071 130.304L158.074 130.3C161.479 124.439 162.487 117.133 160.459 109.134L160.459 109.134L160.456 109.123C158.465 101.984 154.84 94.5021 148.943 87.0247ZM151.547 47.8551L151.548 47.8566C153.8 51.6634 154.464 56.8945 152.831 62.5182L152.826 62.5343L152.823 62.5508C151.545 68.3885 148.397 74.2579 143.941 80.4972C138.388 74.2267 131.881 67.9673 124.118 62.3758C122.817 53.3586 120.887 44.9967 118.023 37.6229C120.391 37.3484 122.509 37.3479 124.653 37.3479C138.26 37.3479 147.686 41.2787 151.547 47.8551ZM62.2435 56.2861L62.2436 56.2862L62.253 56.2808C68.4983 52.7446 74.7456 49.9077 81.0005 47.4216C87.2419 49.9092 93.4868 53.091 99.7577 56.2862C106.007 59.8249 111.599 63.3592 116.86 67.2384C117.83 73.5965 118.156 80.3087 118.156 87.0325C118.156 93.7574 117.83 100.469 116.86 106.827C111.596 110.708 106.001 114.244 99.7482 117.784C93.5029 121.32 87.2556 124.157 81.0007 126.643C74.7593 124.156 68.5143 120.974 62.2434 117.779C55.9943 114.24 50.4024 110.706 45.1413 106.827C44.1712 100.468 43.8452 93.7562 43.8452 87.0325C43.8452 80.3075 44.1712 73.5965 45.1413 67.2384C50.4171 63.3473 56.3329 59.4652 62.2435 56.2861ZM51.9908 135.222C49.8911 129.967 48.3395 124.108 47.0811 117.915C50.8038 120.496 54.7781 122.798 58.731 125.089L58.7575 125.104L58.7644 125.108L58.7713 125.112C62.3875 127.057 66.2763 129.002 69.9479 130.684C63.8515 132.61 57.7805 134.214 51.9908 135.222ZM110.01 38.8427C112.11 44.0981 113.662 49.9567 114.92 56.1501C111.197 53.5694 107.223 51.2664 103.27 48.9758L103.244 48.9607L103.237 48.9567L103.23 48.9529C99.6137 47.0079 95.7248 45.0625 92.0532 43.3807C98.1496 41.4548 104.221 39.8514 110.01 38.8427ZM10.455 126.21L10.4542 126.209C8.20163 122.402 7.53756 117.171 9.17072 111.547L9.17541 111.531L9.179 111.515C10.4563 105.677 13.6051 99.8077 18.0612 93.5684C23.6136 99.8389 30.1205 106.098 37.8839 111.69C39.1851 120.707 41.1143 129.069 43.9792 136.443C41.6103 136.717 39.4931 136.718 37.3488 136.718C23.7422 136.718 14.3158 132.787 10.455 126.21ZM124.453 111.68C132.205 105.76 138.712 99.8305 144.274 93.5669C148.729 99.8063 151.879 105.675 153.156 111.514L153.158 111.52C154.464 117.143 153.808 122.029 151.547 126.209C147.346 132.797 137.906 136.716 124.653 136.716C122.518 136.716 120.42 136.716 118.329 136.448C120.9 129.087 123.144 120.723 124.453 111.68ZM115.261 117.864C113.974 124.054 112.157 129.93 110.324 135.219C104.554 134.212 98.5071 132.616 92.4333 130.699C96.3151 129.008 99.9463 127.024 103.572 124.75C107.585 122.755 111.31 120.458 115.261 117.864ZM23.0041 87.045C27.0011 82.4584 31.56 78.1619 36.4292 73.8723C36.127 78.1314 35.8486 82.4304 35.8486 87.0325C35.8486 91.6507 36.1291 95.9656 36.4326 100.241C31.2737 95.9404 26.7138 91.6375 23.0041 87.045ZM58.4293 49.3154C54.4166 51.3097 50.6912 53.607 46.7397 56.201C48.0276 50.0112 49.8439 44.135 51.6768 38.8462C57.4468 39.8526 63.4941 41.4489 69.5679 43.3662C65.6861 45.0571 62.0549 47.0411 58.4293 49.3154ZM138.997 87.02C135 91.6066 130.441 95.903 125.572 100.193C125.874 95.9336 126.153 91.6346 126.153 87.0325C126.153 82.4143 125.872 78.0994 125.569 73.8244C130.727 78.1246 135.287 82.4274 138.997 87.02ZM81.0006 8.66896C90.8824 8.66896 99.9699 17.142 106.594 31.0861C98.1565 32.5517 89.722 35.3415 81.0098 38.4624C72.2721 34.9943 63.5361 32.537 55.4061 31.0894C62.0299 17.1433 71.118 8.66896 81.0006 8.66896ZM8.84295 62.8914C7.53743 56.9103 8.19694 52.0277 10.455 47.8551C14.6555 41.2672 24.0955 37.3473 37.3488 37.3473C39.4842 37.3473 41.5817 37.3481 43.6724 37.6161C41.1017 44.9766 38.8582 53.341 37.5491 62.3835C29.7982 68.3025 23.2927 74.2305 17.7318 80.4925C13.6053 74.5894 10.4439 68.3952 8.84295 62.8914ZM81.0006 165.396C71.1187 165.396 62.0313 156.923 55.4077 142.979C63.8447 141.513 72.2792 138.724 80.9914 135.603C89.7291 139.071 98.465 141.528 106.595 142.976C99.9713 156.922 90.8832 165.396 81.0006 165.396Z",
                            fill: "black",
                            stroke: "black"
                        }
                    })]), R._v(" "), B("a", {
                        style: R.footerPoweredByBrandingTextCSS,
                        attrs: {
                            href: "https://chatling.ai?utm_source=poweredby",
                            target: "_blank"
                        }
                    }, [R._v("Powered by Chatling")])]) : R._e(), R._v(" "), 1 != R.hidePoweredByBranding && null != R.footerHTML && R.footerHTML.length > 0 ? B("div", [B("svg", {
                        staticStyle: {
                            rotate: "90deg",
                            display: "block"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            color: "#D1D5DB",
                            fill: "none"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M2.5 12L21.5002 12",
                            stroke: "currentColor",
                            "stroke-width": "1",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]) : R._e(), R._v(" "), null != R.footerHTML && R.footerHTML.length > 0 ? B("div", {
                        staticClass: "chtl-chat-footer-disc-text",
                        domProps: {
                            innerHTML: R._s(R.footerHTML)
                        }
                    }) : R._e()]) : R._e()])])], 1)])])]), R._v(" "), R.canShowAttentionGrabber ? B("div", {
                        style: R.attentionGrabberTextWrapperCSS
                    }, [B("button", {
                        staticClass: "chtl-a11y-reset-btn",
                        style: R.hoveringMessageCloseButtonWrapperCSS,
                        attrs: {
                            type: "button",
                            "aria-label": (null === (y = R.translation) || void 0 === y || null === (S = y.global) || void 0 === S ? void 0 : S["close message"]) || "Close message"
                        },
                        on: {
                            click: R.closeHoveringMessages
                        }
                    }, [B("svg", {
                        style: R.hoveringMessageCloseButtonSvgCSS,
                        attrs: {
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        style: R.hoveringMessageCloseButtonSvgPathCSS,
                        attrs: {
                            d: "M2 14L14 2M2 2L14 14",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), R._v(" "), B("button", {
                        staticClass: "chtl-a11y-reset-btn",
                        style: {
                            cursor: "pointer",
                            direction: R.languageDirection
                        },
                        attrs: {
                            type: "button",
                            "aria-label": (null === (x = R.translation) || void 0 === x || null === (w = x.global) || void 0 === w ? void 0 : w["open chat"]) || "Open chat"
                        },
                        on: {
                            click: R.chatIconClicked
                        }
                    }, R._l(R.attentionGrabberTexts, (function(t) {
                        return null != t && "" != t ? B("div", {
                            style: R.hoveringMessageWrapperCSS
                        }, [B("span", {
                            staticClass: "chtl-reset",
                            domProps: {
                                innerHTML: R._s(t)
                            }
                        })]) : R._e()
                    })), 0)]) : R._e(), R._v(" "), R.showChatIcon ? B("div", [R.is_chat_open || 1 != R.chat_icon_design_type && 3 != R.chat_icon_design_type || null == R.chat_icon_url ? R.is_chat_open ? R.is_chat_open ? B("div", {
                        style: R.chatButtonContainerCSS
                    }, [B("button", {
                        ref: "launcher_button",
                        staticClass: "chtl-a11y-chat-launcher",
                        style: R.defaultChatButtonWrapperCSS,
                        attrs: {
                            type: "button",
                            "aria-label": (null === (E = R.translation) || void 0 === E || null === (A = E.global) || void 0 === A ? void 0 : A["close chat"]) || "Close chat",
                            "aria-expanded": R.is_chat_open ? "true" : "false",
                            "aria-controls": "chtl-chat-panel"
                        },
                        on: {
                            click: R.chatIconClicked
                        }
                    }, [B("svg", {
                        style: R.closeChatButtonIconCSS,
                        attrs: {
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M41.1666 495.834L496.167 40.8335",
                            stroke: R.foregroundColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), R._v(" "), B("path", {
                        attrs: {
                            d: "M496.167 495.834L41.1666 40.8335",
                            stroke: R.foregroundColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])])]) : R._e() : B("div", {
                        style: R.chatButtonContainerCSS
                    }, [B("button", {
                        ref: "launcher_button",
                        staticClass: "chtl-a11y-chat-launcher",
                        style: R.defaultChatButtonWrapperCSS,
                        attrs: {
                            type: "button",
                            "aria-label": (null === (I = R.translation) || void 0 === I || null === (M = I.global) || void 0 === M ? void 0 : M["open chat"]) || "Open chat",
                            "aria-expanded": R.is_chat_open ? "true" : "false",
                            "aria-controls": "chtl-chat-panel"
                        },
                        on: {
                            click: R.chatIconClicked
                        }
                    }, [B("svg", {
                        style: R.defaultChatButtonIconCSS,
                        attrs: {
                            viewBox: "0 0 820 760",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M400 0C179.44 0 9.84565e-05 161.493 9.84565e-05 360C9.84565e-05 429.4 21.9601 496.613 63.5734 554.72C55.6934 641.88 34.5734 706.587 3.90677 737.24C-0.146568 741.293 -1.1599 747.493 1.4001 752.613C3.6801 757.187 8.33343 760 13.3334 760C13.9468 760 14.5734 759.96 15.2001 759.867C20.6001 759.107 146.04 741.04 236.76 688.693C288.293 709.48 343.173 720 400 720C620.56 720 800 558.507 800 360C800 161.493 620.56 0 400 0Z",
                            fill: R.foregroundColor
                        }
                    })])])]) : B("div", {
                        style: R.chatButtonContainerCSS
                    }, [B("button", {
                        ref: "launcher_button",
                        staticClass: "chtl-a11y-chat-launcher",
                        style: R.customChatButtonWrapperCSS,
                        attrs: {
                            type: "button",
                            "aria-label": (null === (k = R.translation) || void 0 === k || null === (T = k.global) || void 0 === T ? void 0 : T["open chat"]) || "Open chat",
                            "aria-expanded": R.is_chat_open ? "true" : "false",
                            "aria-controls": "chtl-chat-panel"
                        },
                        on: {
                            click: R.chatIconClicked
                        }
                    })])]) : R._e()], 1)])])
                }), [], !1, null, "42aa2515", null);
            e.default = _.exports
        },
        426: function(t, e, n) {
            "use strict";

            function i(t) {
                throw new TypeError('"' + t + '" is read-only')
            }
            n.d(e, "a", (function() {
                return i
            }))
        },
        436: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n(384).a,
                o = n(90),
                r = Object(o.a)(i, (function() {
                    var t, e, n, i, o, r, l = this,
                        a = l._self._c;
                    return a("div", [l.chatbot_loaded ? a("ChatbotInterface", {
                        ref: "chat_interface_component",
                        attrs: {
                            apiEndpointPath: l.apiEndpointPath,
                            chatEnded: l.chatEnded,
                            chatEndedAt: l.chatEndedAt,
                            displayStartNewChatButton: l.displayStartNewChatButton,
                            startingNewChat: l.loading.newChat,
                            newChatError: l.error.newChat,
                            refreshingChat: l.loading.refreshChat,
                            endingChat: l.loading.endChat,
                            appearance: l.appearance,
                            predefined_queries: l.predefined_queries,
                            settings: l.settings,
                            interface_language: l.interface_language,
                            texts: l.texts,
                            satisfaction_survey: l.satisfaction_survey,
                            allowDownloadTranscript: l.allow_download_transcript,
                            header_icon_url: null === (t = l.header_icon) || void 0 === t ? void 0 : t.url,
                            header_icon_roundness: null === (e = l.header_icon) || void 0 === e ? void 0 : e.roundness,
                            display_header_icon: 1 == (null === (n = l.header_icon) || void 0 === n ? void 0 : n.enabled),
                            chat_icon_url: null === (i = l.chat_icon) || void 0 === i ? void 0 : i.url,
                            chat_icon_design_type: null === (o = l.chat_icon) || void 0 === o ? void 0 : o.type,
                            bot_icon_url: null === (r = l.bot_icon) || void 0 === r ? void 0 : r.url,
                            external_gid: l.external_gid,
                            conversation: l.filteredConversation,
                            forced_chat_open: l.forced_chat_open,
                            placed_on: l.placed_on,
                            chat_error: l.error.chat,
                            chatbot_thinking: l.chatbot_thinking,
                            disable_user_input: l.disable_user_input,
                            scroll_to_bottom: l.scroll_to_bottom,
                            translation: l.translated_texts,
                            previewTitleBarHeight: l.previewTitleBarHeight,
                            active_input: l.active_input,
                            activeInputMessageId: l.activeInputMessageId,
                            messagesToShowAiAvatar: l.messagesToShowAiAvatar,
                            messagesToShowAgentAvatar: l.messagesToShowAgentAvatar,
                            clearUserInputFieldFlag: l.clearUserInputFieldFlag,
                            focusInputFieldFlag: l.focusInputFieldFlag,
                            is_mobile_viewport: l.is_mobile_viewport,
                            displayType: l.displayType,
                            chat_id: l.chat_id,
                            customer_uuid: l.customer_uuid,
                            maxActiveInputAudioRecordingDurationSeconds: l.maxActiveInputAudioRecordingDurationSeconds,
                            allowSpeechToTextInput: l.allowSpeechToTextInput,
                            csatSurveyDisplayToggler: l.csatSurveyDisplayToggler
                        },
                        on: {
                            userScrolling: function(t) {
                                return l.userScrollingChanged(!0)
                            },
                            userScrollingStopped: function(t) {
                                return l.userScrollingChanged(!1)
                            },
                            showChatError: l.showChatError,
                            aiResponseRated: l.aiResponseRated,
                            userInputSubmitted: l.userInputSubmitted,
                            buttonBlockClicked: l.buttonBlockClicked,
                            startNewChat: l.startNewChat,
                            refreshChat: l.refreshChat,
                            endChat: l.endChat
                        }
                    }) : l._e()], 1)
                }), [], !1, null, null, null);
            e.default = r.exports
        },
        465: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = {
                    components: {
                        Chatbot: n(436).default
                    },
                    head: function() {
                        return {
                            title: "Chatbot"
                        }
                    },
                    data: function() {
                        return {
                            show_chatbot: !1,
                            force_chat_open: !0,
                            chatbot_loaded: !1,
                            chatbot_loading: !0,
                            chatbot_error: null,
                            chatbot_external_gid: null
                        }
                    },
                    mounted: function() {
                        this.setupChatbot()
                    },
                    methods: {
                        setupChatbot: function() {
                            this.chatbot_error = null, this.chatbot_external_gid = this.chatbotID, this.show_chatbot = !0
                        },
                        reloadChatbot: function() {
                            this.chatbot_error = null, this.chatbot_loaded = !1, this.chatbot_loading = !0, this.chatbot_external_gid = null, this.chatbot_external_gid = this.chatbotID, this.show_chatbot = !0
                        }
                    },
                    computed: {
                        chatbotID: function() {
                            try {
                                return this.$route.params.id
                            } catch (t) {
                                return null
                            }
                        }
                    }
                },
                o = n(90),
                r = Object(o.a)(i, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t.show_chatbot ? e("div", [e("Chatbot", {
                        attrs: {
                            placed_on: "public_embed",
                            forced_chat_open: t.force_chat_open,
                            external_gid: t.chatbot_external_gid
                        },
                        on: {
                            chatbotLoaded: function(e) {
                                t.chatbot_loading = !1, t.chatbot_loaded = e
                            },
                            chatbotLoadingError: function(e) {
                                t.chatbot_error = e
                            }
                        }
                    })], 1) : t._e()])
                }), [], !1, null, null, null);
            e.default = r.exports;
            installComponents(r, {
                Chatbot: n(407).default
            })
        }
    }
]);