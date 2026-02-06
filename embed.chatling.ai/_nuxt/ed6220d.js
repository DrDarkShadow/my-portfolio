(window.webpackJsonp = window.webpackJsonp || []).push([
    [4, 14, 18, 19, 20, 21], {
        377: function(e, t, i) {
            var a = i(398);
            a.__esModule && (a = a.default), "string" == typeof a && (a = [
                [e.i, a, ""]
            ]), a.locals && (e.exports = a.locals);
            (0, i(115).default)("7c6253c5", a, !0, {
                sourceMap: !1
            })
        },
        378: function(e, t, i) {
            var a = i(400);
            a.__esModule && (a = a.default), "string" == typeof a && (a = [
                [e.i, a, ""]
            ]), a.locals && (e.exports = a.locals);
            (0, i(115).default)("67323bf8", a, !0, {
                sourceMap: !1
            })
        },
        379: function(e, t, i) {
            var a = i(402);
            a.__esModule && (a = a.default), "string" == typeof a && (a = [
                [e.i, a, ""]
            ]), a.locals && (e.exports = a.locals);
            (0, i(115).default)("17c0b4a4", a, !0, {
                sourceMap: !1
            })
        },
        380: function(e, t, i) {
            var a = i(404);
            a.__esModule && (a = a.default), "string" == typeof a && (a = [
                [e.i, a, ""]
            ]), a.locals && (e.exports = a.locals);
            (0, i(115).default)("10a4972a", a, !0, {
                sourceMap: !1
            })
        },
        381: function(e, t, i) {
            var a = i(406);
            a.__esModule && (a = a.default), "string" == typeof a && (a = [
                [e.i, a, ""]
            ]), a.locals && (e.exports = a.locals);
            (0, i(115).default)("396a7184", a, !0, {
                sourceMap: !1
            })
        },
        390: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(11),
                r = i(12),
                n = (i(52), i(148), i(51), i(382), i(16), i(32), i(72), i(29), i(409), {
                    name: "AudioRecorder",
                    data: function() {
                        var e;
                        return e = {
                            mediaRecorder: null,
                            audioChunks: [],
                            startTime: 0,
                            elapsedTime: 0
                        }, Object(r.a)(e, "startTime", 0), Object(r.a)(e, "endTime", 0), Object(r.a)(e, "timerInterval", null), Object(r.a)(e, "audioContext", null), Object(r.a)(e, "audioBuffer", []), Object(r.a)(e, "drawingWidth", 0), Object(r.a)(e, "currentX", 0), Object(r.a)(e, "permissionGranted", !1), Object(r.a)(e, "recordingTimeout", null), Object(r.a)(e, "waveformAmplitude", 4), e
                    },
                    props: {
                        processingAudio: {
                            type: Boolean,
                            default: !1
                        },
                        waveformColor: {
                            type: String,
                            default: "#007bff"
                        },
                        baselineColor: {
                            type: String,
                            default: "#d1d5db"
                        },
                        maxAmplitude: {
                            type: Number,
                            default: 25
                        },
                        noiseThreshold: {
                            type: Number,
                            default: .01
                        },
                        bufferSize: {
                            type: Number,
                            default: 1024
                        },
                        maxRecordingDurationSeconds: {
                            type: Number,
                            required: !0
                        }
                    },
                    mounted: function() {
                        navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && (this.waveformAmplitude = 9), window.addEventListener("resize", this.updateDrawingWidth), this.initializeVisualizer(), this.updateDrawingWidth(), navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? this.requestMicrophonePermission() : this.$emit("error", "Recording not supported on this browser")
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("resize", this.updateDrawingWidth), this.stopRecording().then((function() {})).catch((function(e) {}))
                    },
                    computed: {
                        formattedTime: function() {
                            var e = Math.floor(this.elapsedTime / 60),
                                t = Math.floor(this.elapsedTime % 60);
                            return "".concat(e.toString().padStart(2, "0"), ":").concat(t.toString().padStart(2, "0"))
                        }
                    },
                    methods: {
                        updateDrawingWidth: function() {
                            if (this.$refs.recorderBox && this.$refs.visualizer) {
                                var e = this.$refs.recorderBox.clientWidth - 120;
                                this.drawingWidth = e, this.$refs.visualizer.width = e, this.$refs.visualizer.height = 35, this.canvasCtx && this.drawWaveform()
                            }
                        },
                        initializeVisualizer: function() {
                            this.canvasCtx = this.$refs.visualizer.getContext("2d"), this.updateDrawingWidth(), this.drawWaveform()
                        },
                        requestMicrophonePermission: function() {
                            var e = this;
                            return Object(a.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, navigator.mediaDevices.getUserMedia({
                                                audio: !0
                                            });
                                        case 3:
                                            e.permissionGranted = !0, e.$emit("microphonePermissionGranted"), e.startRecording(), e.updateDrawingWidth(), t.next = 13;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t.catch(0), e.$emit("microphonePermissionDenied");
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 9]
                                ])
                            })))()
                        },
                        startRecording: function() {
                            var e = this;
                            return Object(a.a)(regeneratorRuntime.mark((function t() {
                                var i, a, r, n;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, i = null, t.prev = 2, t.next = 5, navigator.mediaDevices.getUserMedia({
                                                audio: !0
                                            });
                                        case 5:
                                            i = t.sent, t.next = 14;
                                            break;
                                        case 8:
                                            return t.prev = 8, t.t0 = t.catch(2), e.$emit("microphonePermissionDenied"), e.permissionGranted = !1, t.abrupt("return");
                                        case 14:
                                            e.permissionGranted = !0, e.$emit("microphonePermissionGranted"), a = e.getSupportedMimeType(), e.mediaRecorder = new MediaRecorder(i, {
                                                mimeType: a
                                            }), e.mediaRecorder.addEventListener("dataavailable", (function(t) {
                                                t.data.size > 0 && e.audioChunks.push(t.data)
                                            })), e.mediaRecorder.addEventListener("stop", (function() {})), e.mediaRecorder.start(1e3), e.startTime = Date.now(), e.updateElapsedTime(), e.audioContext = new(window.AudioContext || window.webkitAudioContext), r = e.audioContext.createMediaStreamSource(i), n = e.audioContext.createScriptProcessor(e.bufferSize, 1, 1), r.connect(n), n.connect(e.audioContext.destination), n.onaudioprocess = function(t) {
                                                var i = t.inputBuffer.getChannelData(0);
                                                e.processAudio(i)
                                            }, e.canvasCtx = e.$refs.visualizer.getContext("2d"), e.updateDrawingWidth(), e.drawWaveform(), e.recordingTimeout = setTimeout((function() {
                                                e.saveRecording()
                                            }), 1e3 * e.maxRecordingDurationSeconds), t.next = 40;
                                            break;
                                        case 36:
                                            t.prev = 36, t.t1 = t.catch(0), e.$emit("error", "Error accessing microphone");
                                        case 40:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 36],
                                    [2, 8]
                                ])
                            })))()
                        },
                        getSupportedMimeType: function() {
                            for (var e = 0, t = ["audio/webm", "audio/wav", "audio/ogg", "audio/mp4", "video/mp4;codecs=avc1"]; e < t.length; e++) {
                                var i = t[e];
                                if (MediaRecorder.isTypeSupported(i)) return i
                            }
                            return ""
                        },
                        processAudio: function(e) {
                            var t = e.reduce((function(e, t) {
                                    return e + Math.abs(t)
                                }), 0) / e.length,
                                i = Math.max(t, this.noiseThreshold);
                            this.audioBuffer.length < this.drawingWidth || this.audioBuffer.pop(), this.audioBuffer.unshift(i)
                        },
                        drawWaveform: function() {
                            if (this.$refs.visualizer) {
                                var e = this.canvasCtx,
                                    t = this.$refs.visualizer.width,
                                    i = this.$refs.visualizer.height;
                                e.clearRect(0, 0, t, i), e.beginPath(), e.moveTo(0, i / 2), e.lineTo(t, i / 2), e.strokeStyle = this.baselineColor, e.lineWidth = 2, e.stroke(), e.beginPath();
                                for (var a = i / 2, r = t / this.drawingWidth, n = 0; n < this.drawingWidth; n++) {
                                    var s = t - n * r,
                                        o = ((this.audioBuffer[n] || this.noiseThreshold) - this.noiseThreshold) * this.waveformAmplitude,
                                        c = Math.min(o * (i / 2), this.maxAmplitude);
                                    c > 0 && (e.moveTo(s, a - c), e.lineTo(s, a), e.moveTo(s, a), e.lineTo(s, a + c))
                                }
                                e.strokeStyle = this.waveformColor, e.lineWidth = 2, e.stroke(), requestAnimationFrame(this.drawWaveform)
                            }
                        },
                        drawWaveformWithBars: function() {
                            if (this.$refs.visualizer) {
                                var e = this.canvasCtx,
                                    t = this.$refs.visualizer.width,
                                    i = this.$refs.visualizer.height;
                                e.clearRect(0, 0, t, i);
                                var a = i / 2,
                                    r = Math.floor(t / 4);
                                e.fillStyle = this.waveformColor;
                                for (var n = 0; n < r; n++) {
                                    var s = t - 4 * n,
                                        o = ((this.audioBuffer[n] || this.noiseThreshold) - this.noiseThreshold) * this.waveformAmplitude,
                                        c = Math.min(o * i, i);
                                    e.fillRect(s, a - c / 2, 3, c)
                                }
                                requestAnimationFrame(this.drawWaveform)
                            }
                        },
                        saveRecording: function() {
                            if (clearTimeout(this.recordingTimeout), this.mediaRecorder && "inactive" !== this.mediaRecorder.state) {
                                var e = new Blob(this.audioChunks, {
                                    type: this.mediaRecorder.mimeType
                                });
                                this.endTime = Date.now();
                                var t = (this.endTime - this.startTime) / 1e3;
                                this.$emit("recordingCompleted", {
                                    blob: e,
                                    mimeType: this.mediaRecorder.mimeType,
                                    duration: t
                                }), this.stopRecording()
                            } else this.stopRecording()
                        },
                        cancelRecording: function() {
                            clearTimeout(this.recordingTimeout), this.stopRecording(), this.resetRecordingState(), this.$emit("recordingCancelled")
                        },
                        stopRecording: function() {
                            var e = this;
                            return Object(a.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (clearTimeout(e.recordingTimeout), clearInterval(e.timerInterval), e.mediaRecorder) {
                                                try {
                                                    e.mediaRecorder.stop()
                                                } catch (e) {}
                                                e.mediaRecorder.stream && e.mediaRecorder.stream.getTracks().forEach((function(e) {
                                                    e.stop(), e.enabled = !1
                                                }))
                                            }
                                            if (!e.audioContext) {
                                                t.next = 16;
                                                break
                                            }
                                            return t.prev = 6, t.next = 9, e.audioContext.close();
                                        case 9:
                                            t.next = 15;
                                            break;
                                        case 12:
                                            t.prev = 12, t.t0 = t.catch(6);
                                        case 15:
                                            e.audioContext = null;
                                        case 16:
                                            return t.prev = 16, t.next = 19, navigator.mediaDevices.getUserMedia({
                                                audio: !0
                                            });
                                        case 19:
                                            t.sent.getTracks().forEach((function(e) {
                                                e.stop()
                                            })), t.next = 26;
                                            break;
                                        case 23:
                                            t.prev = 23, t.t1 = t.catch(16);
                                        case 26:
                                            e.mediaRecorder = null, e.$nextTick((function() {
                                                window.dispatchEvent(new Event("resize"))
                                            }));
                                        case 29:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [6, 12],
                                    [16, 23]
                                ])
                            })))()
                        },
                        resetRecordingState: function() {
                            this.audioChunks = [], this.elapsedTime = 0;
                            var e = this.drawingWidth > 0 ? this.drawingWidth : this.bufferSize;
                            this.audioBuffer = new Array(e).fill(this.noiseThreshold), this.drawWaveform()
                        },
                        updateElapsedTime: function() {
                            var e = this;
                            this.timerInterval = setInterval((function() {
                                e.elapsedTime = (Date.now() - e.startTime) / 1e3
                            }), 1e3)
                        }
                    }
                }),
                s = (i(397), i(90)),
                o = Object(s.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "audio-recorder"
                    }, [t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.permissionGranted,
                            expression: "permissionGranted"
                        }],
                        ref: "recorderBox",
                        staticClass: "recorder-box"
                    }, [t("div", {
                        staticClass: "recording-container"
                    }, [t("button", {
                        staticClass: "cancel-button recorder-action-btn",
                        attrs: {
                            type: "button",
                            "aria-label": "Cancel recording"
                        },
                        on: {
                            click: e.cancelRecording
                        }
                    }, [t("svg", {
                        staticClass: "lucide lucide-x",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M18 6 6 18"
                        }
                    }), t("path", {
                        attrs: {
                            d: "m6 6 12 12"
                        }
                    })])]), e._v(" "), t("div", {
                        staticClass: "visualizer-container"
                    }, [t("canvas", {
                        ref: "visualizer",
                        staticClass: "visualizer"
                    })]), e._v(" "), t("span", {
                        staticClass: "time"
                    }, [e._v(e._s(e.formattedTime))]), e._v(" "), e.processingAudio ? t("div", {
                        staticStyle: {
                            height: "30px",
                            width: "33.5px",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center"
                        }
                    }, [t("div", {
                        staticClass: "chtl-ldr-spinner"
                    })]) : t("button", {
                        staticClass: "check-button recorder-action-btn",
                        attrs: {
                            type: "button",
                            "aria-label": "Send recording"
                        },
                        on: {
                            click: e.saveRecording
                        }
                    }, [t("svg", {
                        staticClass: "lucide lucide-check",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M20 6 9 17l-5-5"
                        }
                    })])])])])])
                }), [], !1, null, "b8df05be", null);
            t.default = o.exports
        },
        391: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = {
                    props: {
                        text: String,
                        isLoading: {
                            type: Boolean,
                            default: !1
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        design: {
                            type: String,
                            default: "primary"
                        }
                    },
                    emits: ["clicked"],
                    data: function() {
                        return {}
                    },
                    methods: {
                        clicked: function() {
                            this.disabled || this.$emit("clicked")
                        }
                    },
                    computed: {
                        showSpinner: function() {
                            return this.isLoading
                        }
                    }
                },
                r = (i(399), i(90)),
                n = Object(r.a)(a, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", [t("button", {
                        staticClass: "chtl-action-btn",
                        class: {
                            "chtl-action-btn--disabled": e.disabled || e.isLoading, "chtl-action-btn--primary": "primary" === e.design, "chtl-action-btn--danger": "danger" === e.design, "chtl-action-btn--gray": "gray" === e.design
                        },
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            gap: "10px"
                        },
                        attrs: {
                            type: "button",
                            disabled: e.disabled || e.isLoading,
                            "aria-disabled": e.disabled || e.isLoading ? "true" : "false"
                        },
                        on: {
                            click: e.clicked
                        }
                    }, [e.isLoading ? t("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center"
                        }
                    }, [t("div", {
                        staticClass: "chtl-ldr-spinner"
                    })]) : e._e(), e._v(" "), t("div", [e._v("\n            " + e._s(e.text) + "\n        ")])])])
                }), [], !1, null, "78312b56", null);
            t.default = n.exports
        },
        392: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = {
                    props: {
                        required: {
                            required: !0
                        },
                        label: {
                            type: String,
                            required: !0
                        },
                        ratingTypeId: {
                            required: !0
                        },
                        numeric5Ratings: {
                            type: Array,
                            required: !0
                        },
                        emoji5Ratings: {
                            type: Array,
                            required: !0
                        },
                        labelTerrible: {
                            type: String,
                            required: !0
                        },
                        labelExcellent: {
                            type: String,
                            required: !0
                        },
                        ratingValue: {
                            required: !0
                        }
                    },
                    data: function() {
                        return {}
                    },
                    methods: {
                        selectedRating: function(e) {
                            this.$emit("selectedRating", e)
                        }
                    }
                },
                r = (i(401), i(90)),
                n = Object(r.a)(a, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "chtl-csat-survey-item"
                    }, [t("div", {
                        staticClass: "chtl-csat-survey-item-title",
                        class: {
                            "chtl-csat-survey-item-title-required": e.required
                        }
                    }, [e._v(e._s(e.label))]), e._v(" "), t("div", {
                        staticClass: "chtl-csat-rating"
                    }, [1 == e.ratingTypeId ? t("div", {
                        staticClass: "chtl-csat-rating-scale"
                    }, e._l(e.numeric5Ratings, (function(i) {
                        return t("div", {
                            key: "numeric_5_".concat(i.value),
                            staticClass: "chtl-csat-rating-btn"
                        }, [t("button", {
                            staticClass: "chtl-csat-rating-btn-label text",
                            class: {
                                "chtl-csat-rating-btn-label-selected": i.value == e.ratingValue
                            },
                            attrs: {
                                type: "button",
                                "aria-pressed": i.value == e.ratingValue ? "true" : "false"
                            },
                            on: {
                                click: function(t) {
                                    return e.selectedRating(i.value)
                                }
                            }
                        }, [e._v(e._s(i.label))])])
                    })), 0) : 2 == e.ratingTypeId ? t("div", {
                        staticClass: "chtl-csat-rating-scale"
                    }, e._l(e.emoji5Ratings, (function(i) {
                        return t("div", {
                            key: "emoji_5_".concat(i.value),
                            staticClass: "chtl-csat-rating-btn"
                        }, [t("button", {
                            staticClass: "chtl-csat-rating-btn-label emoji grayscale",
                            class: {
                                "chtl-csat-rating-btn-label-selected": i.value == e.ratingValue
                            },
                            attrs: {
                                type: "button",
                                "aria-pressed": i.value == e.ratingValue ? "true" : "false"
                            },
                            on: {
                                click: function(t) {
                                    return e.selectedRating(i.value)
                                }
                            }
                        }, [t("span", [e._v(e._s(i.label))])])])
                    })), 0) : e._e(), e._v(" "), t("div", {
                        staticClass: "chtl-csat-rating-rating-scale-labels"
                    }, [t("div", [t("span", [e._v(e._s(e.labelTerrible))])]), e._v(" "), t("div", [t("span", [e._v(e._s(e.labelExcellent))])])])])])
                }), [], !1, null, "280de928", null);
            t.default = n.exports
        },
        393: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = {
                    props: {
                        required: {
                            required: !0
                        },
                        label: {
                            required: !0
                        },
                        options: {
                            required: !0
                        },
                        currentValue: {
                            required: !0
                        }
                    },
                    data: function() {
                        return {}
                    },
                    methods: {
                        selectedOption: function(e) {
                            this.$emit("selectedOption", e)
                        }
                    }
                },
                r = (i(403), i(90)),
                n = Object(r.a)(a, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "chtl-csat-survey-item"
                    }, [t("div", {
                        staticClass: "chtl-csat-survey-item-title",
                        class: {
                            "chtl-csat-survey-item-title-required": e.required
                        }
                    }, [e._v(e._s(e.label))]), e._v(" "), null != e.options && e.options.length > 0 ? t("div", {
                        staticClass: "chtl-csat-survey-item-multiple-choice",
                        staticStyle: {
                            margin: "15px auto 0"
                        }
                    }, e._l(e.options, (function(i) {
                        return t("button", {
                            key: i.value,
                            staticClass: "chtl-csat-survey-item-multiple-choice-option",
                            class: {
                                selected: i.value == e.currentValue
                            },
                            attrs: {
                                type: "button",
                                "aria-pressed": i.value == e.currentValue ? "true" : "false"
                            },
                            on: {
                                click: function(t) {
                                    return e.selectedOption(i.value)
                                }
                            }
                        }, [t("div", {
                            staticClass: "chtl-csat-survey-item-multiple-choice-option-label"
                        }, [e._v("\n              " + e._s(i.label) + "\n          ")])])
                    })), 0) : e._e()])
                }), [], !1, null, "656a54ef", null);
            t.default = n.exports
        },
        394: function(e, t, i) {
            "use strict";
            i.r(t);
            i(70), i(71);
            var a = {
                    props: {
                        required: {
                            required: !0
                        },
                        label: {
                            required: !0
                        },
                        options: {
                            required: !0
                        },
                        currentValues: {
                            type: Array,
                            required: !0
                        }
                    },
                    data: function() {
                        return {}
                    },
                    methods: {
                        selectedOption: function(e) {
                            this.$emit("selectedOption", e)
                        }
                    }
                },
                r = (i(405), i(90)),
                n = Object(r.a)(a, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "chtl-csat-survey-item"
                    }, [t("div", {
                        staticClass: "chtl-csat-survey-item-title",
                        class: {
                            "chtl-csat-survey-item-title-required": e.required
                        }
                    }, [e._v(e._s(e.label))]), e._v(" "), t("div", {
                        staticClass: "chtl-csat-survey-item-multiple-choice",
                        staticStyle: {
                            margin: "15px auto 0"
                        }
                    }, e._l(e.options, (function(i) {
                        return t("button", {
                            key: i.value,
                            staticClass: "chtl-csat-survey-item-multiple-choice-option",
                            class: {
                                selected: e.currentValues.includes(i.value)
                            },
                            attrs: {
                                type: "button",
                                "aria-pressed": e.currentValues.includes(i.value) ? "true" : "false"
                            },
                            on: {
                                click: function(t) {
                                    return e.selectedOption(i.value)
                                }
                            }
                        }, [t("div", {
                            staticClass: "chtl-csat-survey-item-multiple-choice-option-label"
                        }, [e._v("\n              " + e._s(i.label) + "\n          ")])])
                    })), 0)])
                }), [], !1, null, "5f0dd3e5", null);
            t.default = n.exports
        },
        395: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = {
                    props: {
                        placeholder: {
                            default: null
                        },
                        currentValue: {
                            default: ""
                        },
                        required: {
                            required: !0
                        },
                        label: {
                            required: !0
                        }
                    },
                    data: function() {
                        return {}
                    },
                    methods: {
                        inputChanged: function(e) {
                            this.$emit("inputChanged", e.target.value)
                        }
                    }
                },
                r = i(90),
                n = Object(r.a)(a, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "chtl-csat-survey-item"
                    }, [t("div", {
                        staticClass: "chtl-csat-survey-item-title",
                        class: {
                            "chtl-csat-survey-item-title-required": e.required
                        }
                    }, [e._v(e._s(e.label))]), e._v(" "), t("div", {
                        staticClass: "input-field",
                        staticStyle: {
                            margin: "15px auto 0"
                        }
                    }, [t("textarea", {
                        staticClass: "input",
                        staticStyle: {
                            resize: "none"
                        },
                        attrs: {
                            rows: "4",
                            placeholder: e.placeholder,
                            "aria-label": e.label
                        },
                        domProps: {
                            value: e.currentValue
                        },
                        on: {
                            input: function(t) {
                                return e.inputChanged(t)
                            }
                        }
                    })])])
                }), [], !1, null, null, null);
            t.default = n.exports
        },
        397: function(e, t, i) {
            "use strict";
            i(377)
        },
        398: function(e, t, i) {
            var a = i(114)((function(e) {
                return e[1]
            }));
            a.push([e.i, ".audio-recorder[data-v-b8df05be]{margin:0 auto;width:100%}.recorder-box[data-v-b8df05be]{border-radius:999px;box-sizing:border-box;padding:5px 10px;width:100%}.recording-container[data-v-b8df05be]{align-items:center;display:flex;gap:10px;justify-content:space-between}.visualizer-container[data-v-b8df05be]{flex-grow:1;height:35px;overflow:hidden}.cancel-button[data-v-b8df05be],.check-button[data-v-b8df05be]{align-items:center;border-radius:999px;cursor:pointer;display:flex;flex-shrink:0;height:30px;justify-content:center;width:30px}.cancel-button svg[data-v-b8df05be],.check-button svg[data-v-b8df05be]{stroke-width:2.2px;height:17px;width:17px}.check-button[data-v-b8df05be]{background:var(--chtl-primary-color)}.check-button svg[data-v-b8df05be]{stroke:var(--chtl-text-color)}.cancel-button[data-v-b8df05be]{background:#f3f4f6}.cancel-button svg[data-v-b8df05be]{stroke:#6b7280}.time[data-v-b8df05be]{color:#000;flex-shrink:0;font-size:13px;min-width:40px;text-align:center}.visualizer[data-v-b8df05be]{border-radius:8px;height:35px;width:100%}.recorder-action-btn[data-v-b8df05be]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;cursor:pointer;font:inherit;margin:0;padding:0}.recorder-action-btn[data-v-b8df05be]:focus{outline:none}.recorder-action-btn[data-v-b8df05be]:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:2px}.recorder-action-btn[data-v-b8df05be]:disabled{cursor:auto;opacity:.6}", ""]), a.locals = {}, e.exports = a
        },
        399: function(e, t, i) {
            "use strict";
            i(378)
        },
        400: function(e, t, i) {
            var a = i(114)((function(e) {
                return e[1]
            }));
            a.push([e.i, ".chtl-action-btn[data-v-78312b56]{border:0;border-radius:5px;cursor:pointer;display:block;font-weight:500;padding:10px;text-align:center;transition:all .3s ease;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;width:100%}.chtl-action-btn[data-v-78312b56]:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:3px}.chtl-action-btn.chtl-action-btn--primary[data-v-78312b56]{background-color:var(--chtl-primary-color);color:var(--chtl-text-color)}.chtl-action-btn.chtl-action-btn--primary[data-v-78312b56]:hover{background-color:var(--chtl-primary-color-dark)}.chtl-action-btn.chtl-action-btn--primary[data-v-78312b56]:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:3px}.chtl-action-btn.chtl-action-btn--danger[data-v-78312b56]{background-color:#dc2626;color:#fff}.chtl-action-btn.chtl-action-btn--danger[data-v-78312b56]:hover{background-color:#b91c1c}.chtl-action-btn.chtl-action-btn--danger[data-v-78312b56]:focus-visible{outline:2px solid #dc2626;outline-offset:3px}.chtl-action-btn.chtl-action-btn--gray[data-v-78312b56]{background-color:#f3f4f6;color:#333}.chtl-action-btn.chtl-action-btn--gray[data-v-78312b56]:hover{background-color:#e5e7eb}.chtl-action-btn.chtl-action-btn--gray[data-v-78312b56]:focus-visible{outline:2px solid var(--chtl-primary-color);outline-offset:3px}.chtl-action-btn.chtl-action-btn--disabled[data-v-78312b56]{background-color:#e5e7eb!important;color:#9ca3af!important;cursor:default!important;outline:none!important}", ""]), a.locals = {}, e.exports = a
        },
        401: function(e, t, i) {
            "use strict";
            i(379)
        },
        402: function(e, t, i) {
            var a = i(114)((function(e) {
                return e[1]
            }));
            a.push([e.i, ".chtl-csat-rating-btn-label[data-v-280de928]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font:inherit;padding:0}.chtl-csat-rating-btn-label[data-v-280de928]:focus-visible{border-radius:10px;outline:2px solid var(--chtl-primary-color);outline-offset:2px}", ""]), a.locals = {}, e.exports = a
        },
        403: function(e, t, i) {
            "use strict";
            i(380)
        },
        404: function(e, t, i) {
            var a = i(114)((function(e) {
                return e[1]
            }));
            a.push([e.i, ".chtl-csat-survey-item-multiple-choice-option[data-v-656a54ef]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font:inherit;text-align:inherit}.chtl-csat-survey-item-multiple-choice-option[data-v-656a54ef]:focus-visible{border-radius:10px;outline:2px solid var(--chtl-primary-color);outline-offset:2px}", ""]), a.locals = {}, e.exports = a
        },
        405: function(e, t, i) {
            "use strict";
            i(381)
        },
        406: function(e, t, i) {
            var a = i(114)((function(e) {
                return e[1]
            }));
            a.push([e.i, ".chtl-csat-survey-item-multiple-choice-option[data-v-5f0dd3e5]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font:inherit;text-align:inherit}.chtl-csat-survey-item-multiple-choice-option[data-v-5f0dd3e5]:focus-visible{border-radius:10px;outline:2px solid var(--chtl-primary-color);outline-offset:2px}", ""]), a.locals = {}, e.exports = a
        }
    }
]);