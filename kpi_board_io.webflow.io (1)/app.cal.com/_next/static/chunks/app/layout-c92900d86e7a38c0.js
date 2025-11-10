(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    6113: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_f367f3",
        variable: "__variable_f367f3",
      };
    },
    8949: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i, I: () => a });
      var n = r(54568),
        s = r(50441);
      function a(e) {
        let { name: t, size: r = 16, className: a, ...i } = e;
        return (0, n.jsx)("svg", {
          height: r,
          width: r,
          className: (0, s.A)("fill-transparent", a),
          ...i,
          "aria-hidden": !0,
          children: (0, n.jsx)("use", { href: "#".concat(t) }),
        });
      }
      let i = a;
    },
    13330: (e, t, r) => {
      "use strict";
      r.d(t, { AppRouterI18nContext: () => a, AppRouterI18nProvider: () => i });
      var n = r(54568),
        s = r(7620);
      let a = (0, s.createContext)(null);
      function i(e) {
        let { children: t, translations: r, locale: i, ns: o } = e,
          c = (0, s.useMemo)(
            () => ({ translations: r, locale: i, ns: o }),
            [i, o]
          );
        return (0, n.jsx)(a.Provider, { value: c, children: t });
      }
    },
    26682: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => s });
      var n = r(27541);
      let s = () => {
        var e, t;
        let r =
            null != (e = (0, n.useSearchParams)()) ? e : new URLSearchParams(),
          s = null != (t = (0, n.useParams)()) ? t : {},
          a = new URLSearchParams(r.toString());
        return (
          Object.getOwnPropertyNames(s).forEach((e) => {
            a.delete(e);
            let t = s[e] || "";
            ("string" == typeof t ? t.split("/") : t).forEach((t) => {
              a.append(e, t);
            });
          }),
          new n.ReadonlyURLSearchParams(a)
        );
      };
    },
    27541: (e, t, r) => {
      "use strict";
      var n = r(43041);
      r.o(n, "ReadonlyURLSearchParams") &&
        r.d(t, {
          ReadonlyURLSearchParams: function () {
            return n.ReadonlyURLSearchParams;
          },
        }),
        r.o(n, "useParams") &&
          r.d(t, {
            useParams: function () {
              return n.useParams;
            },
          }),
        r.o(n, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    30458: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 13330)),
        Promise.resolve().then(r.bind(r, 90300)),
        Promise.resolve().then(r.t.bind(r, 45165, 23)),
        Promise.resolve().then(r.t.bind(r, 6113, 23)),
        Promise.resolve().then(r.t.bind(r, 86694, 23)),
        Promise.resolve().then(r.t.bind(r, 81437, 23)),
        Promise.resolve().then(r.bind(r, 1843));
    },
    35573: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => c });
      var n = r(76231),
        s = r(28902),
        a = r(83179),
        i = r(61027);
      let o = (e) => (t) => {
          let r,
            n = t.op.path.split("."),
            s = "";
          return (
            2 == n.length
              ? ((r = n[0]), (s = n[1]))
              : ((r = n[1]), (s = n.splice(2, n.length - 2).join("."))),
            e[r]({ ...t, op: { ...t.op, path: s } })
          );
        },
        c = (0, a.R)({
          config() {
            let e = "/api/trpc";
            return {
              links: [
                (0, s.$H)({
                  enabled: (e) =>
                    "down" === e.direction && e.result instanceof Error,
                }),
                (0, s.hf)({
                  condition: (e) => !!e.context.skipBatch,
                  true: (t) =>
                    o(
                      Object.fromEntries(
                        i.Hr.map((r) => [
                          r,
                          (0, s.Lb)({ url: "".concat(e, "/").concat(r) })(t),
                        ])
                      )
                    ),
                  false: (t) =>
                    o(
                      Object.fromEntries(
                        i.Hr.map((r) => [
                          r,
                          (0, s.fu)({ url: "".concat(e, "/").concat(r) })(t),
                        ])
                      )
                    ),
                }),
              ],
              queryClientConfig: {
                defaultOptions: {
                  queries: {
                    staleTime: 1e3,
                    retry(e, t) {
                      var r;
                      let n =
                        null == t || null == (r = t.data) ? void 0 : r.code;
                      return (
                        "BAD_REQUEST" !== n &&
                        "FORBIDDEN" !== n &&
                        "UNAUTHORIZED" !== n &&
                        e < 3
                      );
                    },
                  },
                },
              },
              transformer: n.Ay,
            };
          },
          ssr: !1,
        });
    },
    50441: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var n = r(18842);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, n.Q)(t.filter(Boolean).join(" "));
      }
    },
    54781: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var n = r(27541),
        s = r(26682);
      function a() {
        let e = (0, n.usePathname)(),
          t = [
            "/booking",
            "/cancel",
            "/reschedule",
            "/instant-meeting",
            "/team",
            "/d",
            "/apps/routing-forms/routing-link",
            "/forms/",
          ].some((t) => (null == e ? void 0 : e.startsWith(t))),
          r = [
            "/upcoming",
            "/unconfirmed",
            "/recurring",
            "/cancelled",
            "/past",
          ].some((t) => (null == e ? void 0 : e.endsWith(t))),
          a = (0, s.O)(),
          i = !!(null == a ? void 0 : a.get("user")),
          o = !!(
            (null == a ? void 0 : a.get("user")) &&
            (null == a ? void 0 : a.get("type"))
          );
        return (t && !r) || i || o;
      }
    },
    61027: (e, t, r) => {
      "use strict";
      r.d(t, { Hr: () => n }), r(6542);
      let n = [
        "loggedInViewerRouter",
        "admin",
        "apiKeys",
        "appRoutingForms",
        "apps",
        "auth",
        "availability",
        "appBasecamp3",
        "bookings",
        "calendars",
        "calVideo",
        "credentials",
        "deploymentSetup",
        "dsync",
        "eventTypes",
        "eventTypesHeavy",
        "features",
        "i18n",
        "insights",
        "me",
        "ooo",
        "payments",
        "public",
        "timezones",
        "saml",
        "slots",
        "teams",
        "organizations",
        "travelSchedules",
        "users",
        "viewer",
        "webhook",
        "workflows",
        "googleWorkspace",
        "oAuth",
        "attributes",
        "delegationCredential",
        "routingForms",
        "credits",
        "filterSegments",
        "aiVoiceAgent",
        "phoneNumber",
        "pbac",
      ];
    },
    61478: (e, t) => {
      var r;
      !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function s() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var a = typeof r;
              if ("string" === a || "number" === a) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var i = s.apply(null, r);
                  i && e.push(i);
                }
              } else if ("object" === a)
                if (r.toString === Object.prototype.toString)
                  for (var o in r) n.call(r, o) && r[o] && e.push(o);
                else e.push(r.toString());
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((s.default = s), (e.exports = s))
          : void 0 ===
              (r = function () {
                return s;
              }.apply(t, [])) || (e.exports = r);
      })();
    },
    63248: (e, t, r) => {
      "use strict";
      r.d(t, { HN: () => n.HN, pY: () => l });
      var n = r(28902),
        s = r(33827),
        a = r(7620),
        i = r(79751),
        o = r(35240),
        c = r(64991);
      function l(e) {
        var t;
        return (
          (t = (0, c.r)(e)),
          (0, s.U6)((e) =>
            "useContext" === e || "useUtils" === e
              ? () => {
                  let e = t.useUtils();
                  return a.useMemo(() => (0, o.np)(e), [e]);
                }
              : t.hasOwnProperty(e)
              ? t[e]
              : (0, i.w)(e, t)
          )
        );
      }
      r(76702), r(10995);
    },
    81380: (e, t, r) => {
      "use strict";
      r.d(t, { P0: () => d });
      var n = r(54568),
        s = r(61478),
        a = r.n(s),
        i = r(69885),
        o = r(8949);
      let c = (e) => {
          let { message: t, onClose: r, toastId: s } = e;
          return (0, n.jsxs)("button", {
            className: a()(
              "data-testid-toast-success bg-default dark:bg-inverted text-emphasis dark:text-inverted shadow-elevation-low border-subtle mb-2 flex h-auto items-center justify-between space-x-2 rounded-lg border px-3 py-2.5 text-sm font-semibold rtl:space-x-reverse md:max-w-sm"
            ),
            onClick: () => r(s),
            children: [
              (0, n.jsx)("span", {
                children: (0, n.jsx)(o.A, {
                  name: "check",
                  className: "size-4",
                }),
              }),
              (0, n.jsx)("div", {
                className: "flex items-center",
                children: (0, n.jsx)("p", {
                  "data-testid": "toast-success",
                  className: "m-0 w-full text-left",
                  children: t,
                }),
              }),
              (0, n.jsx)("span", {
                children: (0, n.jsx)(o.A, {
                  name: "x",
                  className: "size-4 hover:cursor-pointer",
                }),
              }),
            ],
          });
        },
        l = (e) => {
          let { message: t, onClose: r, toastId: s } = e;
          return (0, n.jsxs)("button", {
            className: a()(
              "animate-fade-in-up bg-semantic-error-subtle text-semantic-error shadow-elevation-low border-semantic-error-subtle mb-2 flex h-auto items-center justify-between space-x-2 rounded-md border px-3 py-2.5 text-sm font-semibold rtl:space-x-reverse md:max-w-sm"
            ),
            onClick: () => r(s),
            children: [
              (0, n.jsx)("span", {
                children: (0, n.jsx)(o.A, {
                  name: "info",
                  className: "text-semantic-error  size-4",
                }),
              }),
              (0, n.jsx)("div", {
                className: "flex items-center",
                children: (0, n.jsx)("p", {
                  "data-testid": "toast-error",
                  className: "m-0 w-full text-left",
                  children: t,
                }),
              }),
              (0, n.jsx)("span", {
                children: (0, n.jsx)(o.A, {
                  name: "x",
                  className: "text-semantic-error size-4 hover:cursor-pointer",
                }),
              }),
            ],
          });
        },
        u = (e) => {
          let { message: t, onClose: r, toastId: s } = e;
          return (0, n.jsxs)("button", {
            className: a()(
              "animate-fade-in-up bg-semantic-attention-subtle text-semantic-attention shadow-elevation-low border-semantic-attention-subtle mb-2 flex h-auto items-center justify-between space-x-2 rounded-md border px-3 py-2.5 text-sm font-semibold rtl:space-x-reverse md:max-w-sm"
            ),
            onClick: () => r(s),
            children: [
              (0, n.jsx)("span", {
                children: (0, n.jsx)(o.A, {
                  name: "info",
                  className: "text-semantic-attention size-4",
                }),
              }),
              (0, n.jsx)("div", {
                className: "flex items-center",
                children: (0, n.jsx)("p", {
                  "data-testid": "toast-warning",
                  className: "m-0 w-full text-left",
                  children: t,
                }),
              }),
              (0, n.jsx)("span", {
                children: (0, n.jsx)(o.A, {
                  name: "x",
                  className:
                    "text-semantic-attention size-4 hover:cursor-pointer",
                }),
              }),
            ],
          });
        };
      function d(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 6e3,
          s = "number" == typeof r ? { duration: r } : r;
        s.duration || (s.duration = 6e3),
          s.position || (s.position = "bottom-center");
        let a = (e) => {
          i.oR.dismiss(e);
        };
        return i.oR.custom(
          {
            success: (t) =>
              (0, n.jsx)(c, { message: e, onClose: a, toastId: t }),
            error: (t) => (0, n.jsx)(l, { message: e, onClose: a, toastId: t }),
            warning: (t) =>
              (0, n.jsx)(u, { message: e, onClose: a, toastId: t }),
          }[t] ||
            ((t) => (0, n.jsx)(c, { message: e, onClose: a, toastId: t })),
          s
        );
      }
    },
    81437: () => {},
    86694: (e) => {
      e.exports = {
        style: { fontFamily: "'calFont', 'calFont Fallback'", fontWeight: 600 },
        className: "__className_a90182",
        variable: "__variable_a90182",
      };
    },
    90300: (e, t, r) => {
      "use strict";
      r.d(t, { Providers: () => y });
      var n = r(54568),
        s = r(4869),
        a = r(35433),
        i = r(28902);
      let o = new a.E({
          defaultOptions: {
            queries: {
              staleTime: 1e3,
              retry(e, t) {
                if (t instanceof i.HN && t.data) {
                  let { code: e } = t.data;
                  if (
                    "BAD_REQUEST" === e ||
                    "FORBIDDEN" === e ||
                    "UNAUTHORIZED" === e
                  )
                    return !1;
                }
                return e < 3;
              },
            },
          },
        }),
        c = (0, r(63248).pY)({});
      var l = r(76231),
        u = r(61027);
      let d = (e) => (t) => {
          let r,
            n = t.op.path.split("."),
            s = "";
          return (
            2 == n.length
              ? ((r = n[0]), (s = n[1]))
              : ((r = n[1]), (s = n.splice(2, n.length - 2).join("."))),
            e[r]({ ...t, op: { ...t.op, path: s } })
          );
        },
        m = "/api/trpc",
        f = c.createClient({
          links: [
            (0, i.$H)({
              enabled: (e) =>
                "down" === e.direction && e.result instanceof Error,
            }),
            (0, i.hf)({
              condition: (e) => !!e.context.skipBatch,
              true: (e) =>
                d(
                  Object.fromEntries(
                    u.Hr.map((t) => [
                      t,
                      (0, i.Lb)({ url: "".concat(m, "/").concat(t) })(e),
                    ])
                  )
                ),
              false: (e) =>
                d(
                  Object.fromEntries(
                    u.Hr.map((t) => [
                      t,
                      (0, i.fu)({ url: "".concat(m, "/").concat(t) })(e),
                    ])
                  )
                ),
            }),
          ],
          transformer: l.Ay,
        }),
        p = (e) => {
          let { children: t } = e;
          return (0, n.jsx)(c.Provider, {
            client: f,
            queryClient: o,
            children: (0, n.jsx)(s.Ht, { client: o, children: t }),
          });
        };
      var h = r(96006);
      function v(e) {
        let { children: t, name: r } = e;
        return (
          "undefined" != typeof window &&
            window.document &&
            window.document.createElement &&
            ((window.REACT_INLINESVG_CACHE_NAME = r),
            (window.REACT_INLINESVG_PERSISTENT_CACHE = !0)),
          t
        );
      }
      var b = r(94848),
        x = r(7620);
      function g() {
        let e = (0, x.useRef)(null),
          t = (0, x.useRef)(null),
          r = (0, x.useRef)(null),
          n = async () => {
            try {
              if (
                ((e.current && "closed" !== e.current.state) ||
                  (e.current = new (window.AudioContext ||
                    window.webkitAudioContext)()),
                "suspended" === e.current.state && (await e.current.resume()),
                !r.current)
              ) {
                let t = await fetch("/ring.mp3"),
                  n = await t.arrayBuffer();
                r.current = await e.current.decodeAudioData(n);
              }
              return !0;
            } catch (e) {
              return console.error("Failed to initialize audio system:", e), !1;
            }
          },
          s = async () => {
            try {
              if (
                ((!e.current || "closed" === e.current.state) &&
                  !(await n())) ||
                !e.current
              )
                return;
              "suspended" === e.current.state && (await e.current.resume()),
                t.current &&
                  (t.current.stop(),
                  t.current.disconnect(),
                  (t.current = null));
              let s = e.current.createBufferSource();
              (s.buffer = r.current),
                s.connect(e.current.destination),
                (t.current = s),
                (s.loop = !0),
                s.start(0),
                setTimeout(() => {
                  t.current === s &&
                    (s.stop(), s.disconnect(), (t.current = null));
                }, 7e3);
            } catch (t) {
              console.error("Error playing sound:", t),
                (e.current = null),
                (r.current = null);
            }
          },
          a = () => {
            t.current &&
              (t.current.stop(), t.current.disconnect(), (t.current = null));
          };
        return (
          (0, x.useEffect)(
            () => () => {
              a(),
                e.current && "closed" !== e.current.state && e.current.close(),
                (e.current = null),
                (r.current = null);
            },
            []
          ),
          (0, x.useEffect)(() => {
            if (!("serviceWorker" in navigator))
              return void console.warn("ServiceWorker not available");
            let e = async (e) => {
              "PLAY_NOTIFICATION_SOUND" === e.data.type &&
                (r.current || (await n()), await s()),
                "STOP_NOTIFICATION_SOUND" === e.data.type && a();
            };
            return (
              navigator.serviceWorker.addEventListener("message", e),
              () => navigator.serviceWorker.removeEventListener("message", e)
            );
          }, []),
          (0, x.useEffect)(() => {
            let e = async () => {
              r.current || (await n()),
                document.removeEventListener("click", e),
                document.removeEventListener("touchstart", e);
            };
            return (
              document.addEventListener("click", e),
              document.addEventListener("touchstart", e),
              () => {
                document.removeEventListener("click", e),
                  document.removeEventListener("touchstart", e);
              }
            );
          }, []),
          null
        );
      }
      var w = r(54781);
      function y(e) {
        let { isEmbed: t, children: r, nonce: s } = e,
          a = (0, w.A)();
        return (0, n.jsx)(h.SessionProvider, {
          children: (0, n.jsxs)(p, {
            children: [
              !t && !a && (0, n.jsx)(g, {}),
              (0, n.jsx)(v, { children: (0, n.jsx)(b.Y, { children: r }) }),
            ],
          }),
        });
      }
    },
    94848: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => c, y: () => l });
      var n = r(54568),
        s = r(7620),
        a = r(35573),
        i = r(81380);
      let o = (0, s.createContext)(null);
      function c(e) {
        let { children: t } = e,
          [r, c] = (0, s.useState)(() =>
            "Notification" in window ? Notification.permission : "denied"
          ),
          [l, d] = (0, s.useState)(null),
          [m, f] = (0, s.useState)(!1),
          [p, h] = (0, s.useState)(!1),
          { mutate: v } =
            a.i.viewer.loggedInViewerRouter.addNotificationsSubscription.useMutation(),
          { mutate: b } =
            a.i.viewer.loggedInViewerRouter.removeNotificationsSubscription.useMutation();
        (0, s.useEffect)(() => {
          "serviceWorker" in navigator &&
            navigator.serviceWorker
              .register("/service-worker.js")
              .then(async (e) => {
                "pushManager" in e &&
                  (d(e.pushManager),
                  h(!!(await e.pushManager.getSubscription())));
              })
              .catch((e) => {
                console.error("Service Worker registration failed:", e);
              });
        }, []);
        let x = (0, s.useMemo)(
          () => ({
            permission: r,
            isLoading: m,
            isSubscribed: p,
            subscribe: async () => {
              try {
                f(!0);
                let e = await Notification.requestPermission();
                if ((c(e), "granted" === e && l)) {
                  let e = await l.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: u(
                      "BDmAry-HZ2ad1AV9HES7cUHQ4bsv09Ls0yJ_ko-YUz7BNDM2s7dUQwKstRfEX91HbmmeNRBvE7DOedlAFt8aKnU"
                    ),
                  });
                  v({ subscription: JSON.stringify(e) }),
                    h(!0),
                    (0, i.P0)("Notifications enabled successfully", "success");
                }
              } catch (e) {
                console.error("Failed to subscribe:", e),
                  e instanceof DOMException &&
                  "InvalidAccessError" === e.name &&
                  e.message.includes("applicationServerKey")
                    ? (0, i.P0)(
                        "Please enable Google services for push messaging and try again",
                        "error"
                      )
                    : (0, i.P0)("Failed to enable notifications", "error");
              } finally {
                f(!1);
              }
            },
            unsubscribe: async () => {
              if (l)
                try {
                  f(!0);
                  let e = await l.getSubscription();
                  if (e) {
                    let t = JSON.stringify(e);
                    await e.unsubscribe(),
                      b({ subscription: t }),
                      h(!1),
                      (0, i.P0)(
                        "Notifications disabled successfully",
                        "success"
                      );
                  }
                } catch (e) {
                  console.error("Failed to unsubscribe:", e),
                    (0, i.P0)("Failed to disable notifications", "error");
                } finally {
                  f(!1);
                }
            },
          }),
          [r, m, p, l, v, b]
        );
        return (0, n.jsx)(o.Provider, { value: x, children: t });
      }
      function l() {
        let e = (0, s.useContext)(o);
        if (!e) throw Error("useWebPush must be used within a WebPushProvider");
        return e;
      }
      let u = (e) => {
        let t = "=".repeat((4 - (e.length % 4)) % 4),
          r = (e + t).replace(/\-/g, "+").replace(/_/g, "/"),
          n = window.atob(r),
          s = new Uint8Array(n.length);
        for (let e = 0; e < n.length; ++e) s[e] = n.charCodeAt(e);
        return s;
      };
    },
  },
  (e) => {
    e.O(
      0,
      [
        84704, 61502, 18842, 98691, 96006, 69885, 75573, 1843, 587, 48598,
        77358,
      ],
      () => e((e.s = 30458))
    ),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=layout-c92900d86e7a38c0.js.map
