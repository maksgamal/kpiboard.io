"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [62117],
  {
    62117: (e, t, n) => {
      n.d(t, {
        IR: () => A,
        Pn: () => v,
        Ah: () => b,
        lz: () => y,
        cm: () => g,
        Dr: () => L,
        V4: () => w,
        I6: () => S,
        hA: () => C,
      });
      var r,
        a = n(7620),
        o = n(93180);
      function i(e) {
        return setTimeout(e, 50);
      }
      function l() {
        return "slotsDone" === window._embedBookerState;
      }
      function s(e) {
        let { embedStore: t } = e;
        return (
          !!t.providedCorrectHeightToParent &&
          (!(
            window._embedBookerState &&
            new URL(document.URL).searchParams.get("cal.embed.pageType")
          ) ||
            l())
        );
      }
      let d = async (e) => {
        let t = new URL(document.URL),
          n = null,
          r = t.searchParams.get("cal.queuedFormResponseId");
        if (!r) return null;
        if ("00000000-0000-0000-0000-000000000000" === r) return 0;
        let { form: a, ...o } = e,
          i = await fetch("/api/routing-forms/queued-response", {
            method: "POST",
            body: JSON.stringify({ queuedFormResponseId: r, params: o }),
          });
        if (!i.ok) return null;
        let l = (await i.json()).data.formResponseId;
        return l && (n = l), n;
      };
      var c = (function (e) {
        return (
          (e[(e.NOT_INITIALIZED = 0)] = "NOT_INITIALIZED"),
          (e[(e.INITIALIZED = 1)] = "INITIALIZED"),
          e
        );
      })({});
      let u = {
        connectVersion: 0,
        renderState: null,
        router: {
          ensureQueryParamsInUrl(e) {
            let { toBeThereParams: t, toRemoveParams: n } = e,
              r = !1,
              { hasChanged: a } = (function e() {
                if (r) return { hasChanged: !1 };
                let a = new URL(document.URL),
                  o = !1;
                for (let [e, n] of Object.entries(t))
                  (o = !(function (e) {
                    let { param: t, value: n, container: r } = e,
                      a = (function (e) {
                        let t = {};
                        if (null === e) return t;
                        for (let [n, r] of e)
                          if (t.hasOwnProperty(n)) {
                            let e = t[n];
                            Array.isArray(e) || (e = [e]),
                              e.push(r),
                              (t[n] = e);
                          } else t[n] = r;
                        return t;
                      })(r.entries());
                    if (!r.has(t)) return !1;
                    let o = a[t],
                      i = Array.isArray(n) ? n : [n];
                    return (
                      i.length === o.length && i.every((e) => o.includes(e))
                    );
                  })({ param: e, value: n, container: a.searchParams })) &&
                    (function (e) {
                      let { key: t, value: n, url: r } = e;
                      r.searchParams.delete(t),
                        (Array.isArray(n) ? n : [n]).forEach((e) => {
                          r.searchParams.append(t, e);
                        });
                    })({ key: e, value: n, url: a });
                return (
                  (function (e) {
                    let { keys: t, url: n } = e;
                    for (let e of t) n.searchParams.delete(e);
                  })({ keys: n, url: a }),
                  (o = o || n.length > 0) &&
                    window.history.replaceState({}, "", a.toString()),
                  i(e),
                  { hasChanged: o }
                );
              })();
            return {
              stopEnsuringQueryParamsInUrl: () => {
                r = !0;
              },
              hasChanged: a,
            };
          },
        },
        state: 0,
        styles: {},
        nonStyles: {},
        namespace: null,
        embedType: void 0,
        reactStylesStateSetters: {},
        reactNonStylesStateSetters: {},
        providedCorrectHeightToParent: !1,
        windowLoadEventFired: !1,
        setTheme: void 0,
        theme: void 0,
        uiConfig: void 0,
        setUiConfig: [],
      };
      var m = n(80635);
      let f = ["__iframeReady", "__dimensionChanged", "__connectInitiated"];
      {
        (window.CalEmbed = (null == (r = window) ? void 0 : r.CalEmbed) || {}),
          (window.CalEmbed.embedStore = u);
        let e = navigator.userAgent.toLowerCase();
        e.includes("safari") &&
          !e.includes("chrome") &&
          h("Safari Detected: Using setTimeout instead of rAF");
      }
      function h() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        {
          let e = E(),
            n = new URL(document.URL).searchParams,
            r = (window.CalEmbed.__logQueue = window.CalEmbed.__logQueue || []);
          t.push({ ns: e, url: document.URL }),
            t.unshift("CAL:"),
            r.push(t),
            n.get("debug") && console.log("Child:", ...t);
        }
      }
      let p = (e) =>
          e.styles
            ? ((u.reactStylesStateSetters[e.elementName] = e.setState),
              e.setState(u.styles || {}),
              () => {
                delete u.reactStylesStateSetters[e.elementName];
              })
            : ((u.reactNonStylesStateSetters[e.elementName] = e.setState),
              e.setState(u.nonStyles || {}),
              () => {
                delete u.reactNonStylesStateSetters[e.elementName];
              }),
        g = () => {
          let e = (0, m.O)(),
            [t, n] = (0, a.useState)(
              u.theme || (null == e ? void 0 : e.get("theme"))
            );
          return (
            ((e) => {
              var t, n;
              let r = new URL(document.URL),
                o = null != (t = null == r ? void 0 : r.pathname) ? t : "",
                i =
                  null != (n = null == r ? void 0 : r.searchParams) ? n : null,
                l = (0, a.useRef)("".concat(o, "?").concat(i));
              (0, a.useEffect)(() => {
                let t = "".concat(o, "?").concat(i);
                l.current !== t && ((l.current = t), e(t));
              }, [o, i, e]);
            })(
              (0, a.useCallback)(() => {
                null === o.i ||
                  void 0 === o.i ||
                  o.i.fire("__routeChanged", {});
              }, [])
            ),
            (u.setTheme = n),
            t
          );
        },
        w = () => {
          let [e, t] = (0, a.useState)(u.uiConfig || {});
          return (
            u.setUiConfig.push(t),
            (0, a.useEffect)(() => () => {
              let e = u.setUiConfig.findIndex((e) => e === t);
              u.setUiConfig.splice(e, 1);
            }),
            e
          );
        },
        y = (e) => {
          let [, t] = (0, a.useState)({});
          return (
            (0, a.useEffect)(
              () => p({ elementName: e, setState: t, styles: !0 }),
              []
            ),
            (u.styles || {})[e] || {}
          );
        },
        b = (e) => {
          let [, t] = (0, a.useState)({});
          return (
            (0, a.useEffect)(
              () => p({ elementName: e, setState: t, styles: !1 }),
              []
            ),
            (u.nonStyles || {})[e] || {}
          );
        },
        S = () => {
          let e = !1;
          return "transparent" === y("body").background && (e = !0), e;
        },
        v = () => b("branding") || {};
      function E() {
        var e, t, n;
        if (null != u.namespace) return u.namespace;
        {
          let r =
            null !=
            (n =
              null == (t = window) || null == (e = t.getEmbedNamespace)
                ? void 0
                : e.call(t))
              ? n
              : null;
          return (u.namespace = r), r;
        }
      }
      let C = (e) => {
          let [t, n] = (0, a.useState)(e);
          return (
            (0, a.useEffect)(() => {
              var e, t;
              let r = null != E();
              parent === window ||
                r ||
                h(
                  "Looks like you have iframed cal.com but not using Embed Snippet. Directly using an iframe isn't recommended."
                ),
                n(
                  (null == (t = window) || null == (e = t.isEmbed)
                    ? void 0
                    : e.call(t)) || !1
                );
            }, []),
            t
          );
        },
        L = () => {
          let [e, t] = (0, a.useState)(null);
          return (
            (0, a.useEffect)(() => {
              t(
                u.embedType
                  ? u.embedType
                  : (u.embedType = new URL(document.URL).searchParams.get(
                      "embedType"
                    ))
              );
            }, []),
            e
          );
        };
      function P() {
        "visible" !== document.body.style.visibility &&
          (document.body.style.visibility = "visible"),
          "1" !== document.body.style.opacity &&
            (document.body.style.opacity = "1"),
          i(() => {
            P();
          });
      }
      async function T(e) {
        let {
            newlyRecordedResponseId: t,
            toBeThereParams: n,
            toRemoveParams: r,
          } = e,
          { stopEnsuringQueryParamsInUrl: a } = u.router.ensureQueryParamsInUrl(
            {
              toBeThereParams: {
                ...n,
                "cal.routingFormResponseId": t.toString(),
              },
              toRemoveParams: r,
            }
          );
        a();
      }
      async function I() {
        return new Promise((e) => {
          !(function t() {
            if ("completed" !== u.renderState) return void i(t);
            e();
          })();
        });
      }
      let R = {
        ui: function (e) {
          h("Method: ui called", e);
          let t = e.styles;
          t &&
            console.warn(
              "Cal.com Embed: `styles` prop is deprecated. Use `cssVarsPerTheme` instead to achieve the same effect. Here is a list of CSS variables that are supported. https://github.com/calcom/cal.com/blob/main/packages/config/tailwind-preset.js#L19"
            ),
            (null == t || null == (r = t.body) ? void 0 : r.background) &&
              (document.body.style.background = t.body.background),
            e.theme && ((u.theme = e.theme), u.setTheme && u.setTheme(e.theme)),
            (e = { ...u.uiConfig, ...e }).cssVarsPerTheme &&
              window.CalEmbed.applyCssVars(e.cssVarsPerTheme),
            e.colorScheme && U(e.colorScheme),
            u.setUiConfig &&
              ((u.uiConfig = n = e), u.setUiConfig.forEach((e) => e(n)));
          var n,
            r,
            a = t || {};
          for (let [, e] of ((u.styles = a),
          Object.entries(u.reactStylesStateSetters)))
            e((e) => ({ ...e, ...a }));
          var o = t || {};
          for (let [, e] of ((u.nonStyles = o),
          Object.entries(u.reactStylesStateSetters)))
            e((e) => ({ ...e, ...o }));
        },
        parentKnowsIframeReady: (e) => {
          h("Method: `parentKnowsIframeReady` called"),
            i(function e() {
              if (!s({ embedStore: u })) return void i(e);
              P(),
                h("renderState is 'completed'"),
                (u.renderState = "completed"),
                null === o.i || void 0 === o.i || o.i.fire("linkReady", {});
            });
        },
        connect: async function (e) {
          let { config: t, params: n } = e;
          null === o.i || void 0 === o.i || o.i.fire("__connectInitiated", {}),
            h("Method: connect, requested with params", {
              config: t,
              params: n,
            });
          let {
            iframeAttrs: r,
            "cal.embed.noSlotsFetchOnConnect": a,
            ...i
          } = t;
          (u.providedCorrectHeightToParent = !1),
            "true" !== a &&
              (h(
                "Method: connect, noSlotsFetchOnConnect is false. Requesting slots re-fetch"
              ),
              (u.connectVersion = u.connectVersion + 1));
          let l = u.connectVersion,
            s = { ...n, ...i, "cal.embed.connectVersion": l.toString() },
            c = ["preload", "prerender", "cal.skipSlotsFetch"];
          await I(),
            h("Method: connect, renderState is completed. Connecting"),
            await N({ toBeThereParams: s, toRemoveParams: c });
          let m = await d(n);
          "number" == typeof m &&
            (await T({
              newlyRecordedResponseId: m,
              toBeThereParams: s,
              toRemoveParams: c,
            }));
        },
      };
      function U(e) {
        e && (document.documentElement.style.colorScheme = e);
      }
      async function N(e) {
        let { toBeThereParams: t, toRemoveParams: n } = e,
          { hasChanged: r, stopEnsuringQueryParamsInUrl: a } =
            u.router.ensureQueryParamsInUrl({
              toBeThereParams: t,
              toRemoveParams: n,
            }),
          d = 0;
        return (
          l() && r && (d = 2),
          await new Promise((e) => {
            i(function t() {
              if (!s({ embedStore: u }) || d > 0) {
                d--, i(t);
                return;
              }
              a(),
                null === o.i ||
                  void 0 === o.i ||
                  o.i.fire("__connectCompleted", {}),
                null === o.i || void 0 === o.i || o.i.fire("linkReady", {}),
                e();
            });
          }),
          { stopEnsuringQueryParamsInUrl: a }
        );
      }
      let _ = () =>
        "true" === new URL(document.URL).searchParams.get("prerender");
      function A(e) {
        let { bookerState: t, slotsQuery: n } = e;
        window._embedBookerState = (function (e) {
          let { bookerState: t, slotsQuery: n } = e;
          return "loading" === t
            ? "initializing"
            : n.isLoading
            ? "slotsLoading"
            : n.isPending || n.isSuccess
            ? "slotsDone"
            : n.isError
            ? "slotsLoadingError"
            : "slotsPending";
        })({ bookerState: t, slotsQuery: n });
      }
      !(function () {
        var e, t, n, r, a, l;
        h("Embed SDK loaded", {
          isEmbed:
            (null == (t = window) || null == (e = t.isEmbed)
              ? void 0
              : e.call(t)) || !1,
        });
        let s = new URL(document.URL);
        u.theme =
          null == (r = window) || null == (n = r.getEmbedTheme)
            ? void 0
            : n.call(r);
        let d = s.searchParams.get("ui.autoscroll");
        if (
          ((u.uiConfig = {
            colorScheme: s.searchParams.get("ui.color-scheme"),
            layout: s.searchParams.get("layout"),
            disableAutoScroll: "false" === d,
          }),
          U(u.uiConfig.colorScheme),
          top === window)
        ) {
          P(),
            "transparent" === document.body.style.background &&
              (document.body.style.background = ""),
            h("Embed SDK Skipped as we are in top");
          return;
        }
        let m = "true" !== s.searchParams.get("cal.skipSlotsFetch");
        h("Slots will ".concat(m ? "" : "NOT ", "be fetched")),
          window.addEventListener("message", (e) => {
            let t = e.data;
            if (!t) return;
            let n = t.method;
            if ("CAL" === t.originator && "string" == typeof n) {
              var r;
              null == (r = R[n]) || r.call(R, t.arg);
            }
          }),
          document.addEventListener("click", (e) => {
            if (!e.target || !(e.target instanceof Node)) return;
            let t =
              document.getElementsByClassName("main")[0] ||
              document.getElementsByTagName("main")[0] ||
              document.documentElement;
            e.target.contains(t) &&
              (null === o.i || void 0 === o.i || o.i.fire("__closeIframe", {}));
          }),
          null === o.i ||
            void 0 === o.i ||
            o.i.on("*", (e) => {
              if (_() && !f.includes(e.detail.type)) return;
              let t = e.detail;
              h(t), parent.postMessage({ originator: "CAL", ...t }, "*");
            }),
          "true" !== s.searchParams.get("preload") &&
          (null == (l = window) || null == (a = l.isEmbed) ? void 0 : a.call(l))
            ? (function () {
                if (
                  (null === o.i ||
                    void 0 === o.i ||
                    o.i.fire("__iframeReady", { isPrerendering: _() }),
                  (u.renderState = "inProgress"),
                  u.state !== c.NOT_INITIALIZED)
                )
                  return h("Embed Iframe already initialized");
                (u.state = c.INITIALIZED), h("Initializing embed-iframe");
                let e = window.CalComPageStatus;
                e && "200" != e
                  ? null === o.i ||
                    void 0 === o.i ||
                    o.i.fire("linkFailed", {
                      code: e,
                      msg: "Problem loading the link",
                      data: { url: document.URL },
                    })
                  : (function (e) {
                      let { embedStore: t } = e,
                        n = null,
                        r = null,
                        a = !0,
                        l = !1;
                      i(function e() {
                        if ("complete" !== document.readyState)
                          return void i(e);
                        if (!l)
                          return void setTimeout(() => {
                            (l = !0), e();
                          }, 100);
                        t.windowLoadEventFired ||
                          null === o.i ||
                          void 0 === o.i ||
                          o.i.fire("__windowLoadComplete", {}),
                          (t.windowLoadEventFired = !0);
                        let s =
                            document.getElementsByClassName("main")[0] ||
                            document.getElementsByTagName("main")[0] ||
                            document.documentElement,
                          d = document.documentElement.scrollHeight,
                          c = document.documentElement.scrollWidth;
                        if (!(s instanceof HTMLElement))
                          throw Error("Main element should be an HTMLElement");
                        let u = getComputedStyle(s),
                          m = Math.ceil(
                            parseFloat(u.height) +
                              parseFloat(u.marginTop) +
                              parseFloat(u.marginBottom)
                          ),
                          f = Math.ceil(
                            parseFloat(u.width) +
                              parseFloat(u.marginLeft) +
                              parseFloat(u.marginRight)
                          ),
                          h = a ? d : m,
                          p = a ? c : f;
                        if (!h || !p) return void i(e);
                        (n === h &&
                          r === p &&
                          t.providedCorrectHeightToParent) ||
                          ((n = h),
                          (r = p),
                          null === o.i ||
                            void 0 === o.i ||
                            o.i.fire("__dimensionChanged", {
                              iframeHeight: h,
                              iframeWidth: p,
                              isFirstTime: a,
                            })),
                          a || (t.providedCorrectHeightToParent = !0),
                          (a = !1),
                          i(e);
                      });
                    })({ embedStore: u });
              })()
            : h(
                "Preloaded scenario - Skipping initialization and setup as only assets need to be loaded"
              );
      })();
    },
    80635: (e, t, n) => {
      n.d(t, { O: () => a });
      var r = n(27541);
      let a = () => {
        var e, t;
        let n =
            null != (e = (0, r.useSearchParams)()) ? e : new URLSearchParams(),
          a = null != (t = (0, r.useParams)()) ? t : {},
          o = new URLSearchParams(n.toString());
        return (
          Object.getOwnPropertyNames(a).forEach((e) => {
            o.delete(e);
            let t = a[e],
              n = "string" == typeof t ? t.split("/") : t;
            null == n ||
              n.forEach((t) => {
                o.append(e, t);
              });
          }),
          new r.ReadonlyURLSearchParams(o)
        );
      };
    },
    93180: (e, t, n) => {
      function r(e, t) {
        let n = new window.CustomEvent(e, { detail: t });
        window.dispatchEvent(n);
      }
      n.d(t, { i: () => o });
      class a {
        static parseAction(e) {
          if (!e) return null;
          let [t, n, r] = e.split(":");
          return "CAL" !== t ? null : { ns: n, type: r };
        }
        getFullActionName(e) {
          return this.namespace
            ? "CAL:".concat(this.namespace, ":").concat(e)
            : "CAL::".concat(e);
        }
        fire(e, t) {
          let n = this.getFullActionName(e),
            a = { type: e, namespace: this.namespace, fullType: n, data: t };
          r(n, a), r(this.getFullActionName("*"), a);
        }
        on(e, t) {
          let n = this.getFullActionName(e);
          window.addEventListener(n, t);
        }
        off(e, t) {
          let n = this.getFullActionName(e);
          window.removeEventListener(n, t);
        }
        constructor(e) {
          (e = e || ""), (this.namespace = e);
        }
      }
      let o = null;
      !(function () {
        if (window.isEmbed) return;
        let e = new URL(document.URL),
          t = e.searchParams.get("embed"),
          n = e.pathname.endsWith("/embed"),
          r =
            "string" == typeof t
              ? t
              : window.name.includes("cal-embed=")
              ? window.name.replace(/cal-embed=(.*)/, "$1").trim()
              : n
              ? ""
              : null;
        (window.isEmbed = () => "string" == typeof r),
          (window.getEmbedTheme = () =>
            window.CalEmbed.embedStore.theme
              ? window.CalEmbed.embedStore.theme
              : new URL(document.URL).searchParams.get("theme")),
          (window.getEmbedNamespace = () => r),
          (window.CalEmbed = window.CalEmbed || {}),
          (window.CalEmbed.applyCssVars = (e) => {
            let t = [];
            if (e)
              for (let [n, r] of Object.entries(e)) {
                for (let [e, a] of (t.push(".".concat(n, " {")),
                Object.entries(r)))
                  t.push("--".concat(e, ": ").concat(a, " !important;"));
                t.push("}");
              }
            let n = document.head.querySelector("#embed-css-vars");
            if (n) {
              console.warn("Existing embed CSS Vars are being reset"),
                (n.innerText = t.join("\n"));
              return;
            }
            let r = document.createElement("style");
            (r.id = "embed-css-vars"),
              (r.innerText = t.join("\n")),
              document.head.appendChild(r);
          });
      })(),
        (o = new a(window.getEmbedNamespace()));
    },
  },
]);
//# sourceMappingURL=62117-e908c0af8e7760fe.js.map
