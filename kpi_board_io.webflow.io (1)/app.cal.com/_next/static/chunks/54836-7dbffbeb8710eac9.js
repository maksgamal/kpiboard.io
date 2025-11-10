"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [54836],
  {
    5922: (e, a, t) => {
      t.d(a, { X: () => A });
      var l = t(54568),
        n = t(7620),
        r = t(56418),
        d = t(14530),
        E = t(40615),
        i = t(43328),
        o = t(18511),
        s = t(20843),
        _ = t(99216),
        c = t(81701),
        u = t(8949);
      let A = (e) => {
        let {
            isOpenDialog: a,
            setIsOpenDialog: t,
            email: A,
            isUserSessionRequiredToVerify: R = !0,
            verifyCodeWithSessionNotRequired: m,
            verifyCodeWithSessionRequired: I,
            resetErrors: b,
            setIsPending: O,
            isPending: P,
            error: p,
          } = e,
          { t: N } = (0, i.Y)(),
          [T, D] = (0, n.useState)(""),
          [f, S] = (0, n.useState)(!1),
          C = (0, d.Mu)((e) => e.setVerificationCode),
          h = (0, r.A)({
            acceptedCharacters: /^[0-9]$/,
            length: 6,
            value: T,
            onChange: (0, n.useCallback)((e) => {
              b(), D(e);
            }, []),
          }),
          L = (0, n.useCallback)(() => {
            b(), O(!0), R ? I(T, A) : m(T, A), C(T), S(!0);
          }, [b, O, R, I, T, A, m, C]);
        (0, n.useEffect)(() => {
          !f && !p && !P && /^\d{6}$/.test(T.trim()) && L();
        }, [p, P, T, f]),
          (0, n.useEffect)(() => D(""), [a]);
        let g = "h-12 w-12 !text-xl text-center";
        return (0, l.jsx)(E.l, {
          open: a,
          onOpenChange: () => {
            D(""), b();
          },
          children: (0, l.jsx)(s.Cf, {
            className: "sm:max-w-md",
            children: (0, l.jsx)("div", {
              className: "flex flex-row",
              children: (0, l.jsxs)("div", {
                className: "w-full",
                children: [
                  (0, l.jsx)(s.c7, {
                    title: N("verify_your_email"),
                    subtitle: N("enter_digit_code", { email: A }),
                  }),
                  (0, l.jsx)(c.J, { htmlFor: "code", children: N("code") }),
                  (0, l.jsxs)("div", {
                    className: "flex flex-row justify-between",
                    children: [
                      (0, l.jsx)(_.pd, {
                        className: g,
                        name: "2fa1",
                        inputMode: "decimal",
                        ...h[0],
                        autoFocus: !0,
                        autoComplete: "one-time-code",
                      }),
                      (0, l.jsx)(_.pd, {
                        className: g,
                        name: "2fa2",
                        inputMode: "decimal",
                        ...h[1],
                      }),
                      (0, l.jsx)(_.pd, {
                        className: g,
                        name: "2fa3",
                        inputMode: "decimal",
                        ...h[2],
                      }),
                      (0, l.jsx)(_.pd, {
                        className: g,
                        name: "2fa4",
                        inputMode: "decimal",
                        ...h[3],
                      }),
                      (0, l.jsx)(_.pd, {
                        className: g,
                        name: "2fa5",
                        inputMode: "decimal",
                        ...h[4],
                      }),
                      (0, l.jsx)(_.pd, {
                        className: g,
                        name: "2fa6",
                        inputMode: "decimal",
                        ...h[5],
                      }),
                    ],
                  }),
                  p &&
                    (0, l.jsxs)("div", {
                      className:
                        "mt-2 flex items-center gap-x-2 text-sm text-red-700",
                      children: [
                        (0, l.jsx)("div", {
                          children: (0, l.jsx)(u.A, {
                            name: "info",
                            className: "h-3 w-3",
                          }),
                        }),
                        (0, l.jsx)("p", { children: p }),
                      ],
                    }),
                  (0, l.jsxs)(s.Es, {
                    noSticky: !0,
                    children: [
                      (0, l.jsx)(s.HM, { onClick: () => t(!1) }),
                      (0, l.jsx)(o.$, {
                        type: "submit",
                        onClick: L,
                        loading: P,
                        children: N("submit"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    6638: (e) => {
      e.exports = JSON.parse(
        '{"version":1.2,"locale":{"source":"en","targets":["ar","az","bg","bn","ca","cs","da","de","el","es","es-419","eu","et","fi","fr","he","hu","it","ja","km","ko","nl","no","pl","pt-BR","pt","ro","ru","sk-SK","sr","sv","tr","uk","vi","zh-CN","zh-TW"]},"buckets":{"json":{"include":["apps/web/public/static/locales/[locale]/common.json"]}},"$schema":"https://lingo.dev/schema/i18n.json"}'
      );
    },
    10193: (e, a, t) => {
      t.d(a, { Y: () => r });
      var l = t(87836),
        n = t(93066);
      function r(e) {
        if (!e) return "";
        let a = n.md.render(e),
          t = l.A.sanitize(a)
            .replace(
              /<ul>/g,
              "<ul style='list-style-type: disc; list-style-position: inside; margin-left: 12px; margin-bottom: 4px'>"
            )
            .replace(
              /<ol>/g,
              "<ol style='list-style-type: decimal; list-style-position: inside; margin-left: 12px; margin-bottom: 4px'>"
            )
            .replace(
              /<a\s+href=/g,
              "<a target='_blank' class='text-blue-500 hover:text-blue-600' href="
            );
        return t.replace(
          /<li>([^<]+|<strong>.*?<\/strong>)<\/li>\s*<li>\s*<ul([^>]*)>([\s\S]*?)<\/ul>\s*<\/li>/g,
          "<li>$1<ul$2>$3</ul></li>"
        );
      }
    },
    13681: (e, a, t) => {
      var l = Object.create
          ? function (e, a, t, l) {
              void 0 === l && (l = t);
              var n = Object.getOwnPropertyDescriptor(a, t);
              (!n ||
                ("get" in n ? !a.__esModule : n.writable || n.configurable)) &&
                (n = {
                  enumerable: !0,
                  get: function () {
                    return a[t];
                  },
                }),
                Object.defineProperty(e, l, n);
            }
          : function (e, a, t, l) {
              void 0 === l && (l = t), (e[l] = a[t]);
            },
        n = function (e, a) {
          for (var t in e)
            "default" === t ||
              Object.prototype.hasOwnProperty.call(a, t) ||
              l(a, e, t);
        };
      Object.defineProperty(a, "__esModule", { value: !0 }),
        n(t(44425), a),
        n(t(72085), a),
        n(t(71455), a);
    },
    13784: (e, a, t) => {
      t.d(a, { k: () => s });
      var l = t(54568),
        n = t(7620),
        r = t(56488),
        d = t(27736),
        E = t(13681),
        i = t(62549);
      let o = (e) =>
        e.map((e) => {
          let { city: a, timezone: t } = e;
          return { label: a, timezone: t };
        });
      function s(e) {
        let { isLoading: a, data: t } = (() => {
            let { isLoading: e, data: a } = (0, d.I)({
              queryKey: ["city-timezones"],
              queryFn: () =>
                null === i.A || void 0 === i.A
                  ? void 0
                  : i.A.get("/timezones").then((e) => {
                      if (e.data.status === E.SUCCESS_STATUS)
                        return e.data.data;
                      throw Error(e.data.error.message);
                    }),
            });
            return { isLoading: e, data: a };
          })(),
          s = (0, n.useMemo)(() => {
            if (e.timeZones) {
              let a;
              return o(
                ((a = e.timeZones),
                (null != t ? t : []).filter((e) => a.includes(e.timezone)))
              );
            }
            return t && !a ? o(t) : [];
          }, [t, e.timeZones, a]);
        return (0, l.jsx)(r.z, {
          ...e,
          data: s,
          isPending: a,
          isWebTimezoneSelect: !1,
        });
      }
    },
    42225: (e, a, t) => {
      t.d(a, { d: () => n });
      var l = t(7620);
      function n(e, a) {
        let [t, n] = (0, l.useState)(e);
        return (
          (0, l.useEffect)(() => {
            let t = setTimeout(() => {
              n(e);
            }, a);
            return () => {
              clearTimeout(t);
            };
          }, [e, a]),
          t
        );
      }
    },
    44425: (e, a) => {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.PERMISSIONS_GROUPED_MAP =
          a.PERMISSION_MAP =
          a.PERMISSIONS =
          a.PROFILE_WRITE =
          a.PROFILE_READ =
          a.APPS_WRITE =
          a.APPS_READ =
          a.SCHEDULE_WRITE =
          a.SCHEDULE_READ =
          a.BOOKING_WRITE =
          a.BOOKING_READ =
          a.EVENT_TYPE_WRITE =
          a.EVENT_TYPE_READ =
            void 0),
        (a.EVENT_TYPE_READ = 1),
        (a.EVENT_TYPE_WRITE = 2),
        (a.BOOKING_READ = 4),
        (a.BOOKING_WRITE = 8),
        (a.SCHEDULE_READ = 16),
        (a.SCHEDULE_WRITE = 32),
        (a.APPS_READ = 64),
        (a.APPS_WRITE = 128),
        (a.PROFILE_READ = 256),
        (a.PROFILE_WRITE = 512),
        (a.PERMISSIONS = [
          a.EVENT_TYPE_READ,
          a.EVENT_TYPE_WRITE,
          a.BOOKING_READ,
          a.BOOKING_WRITE,
          a.SCHEDULE_READ,
          a.SCHEDULE_WRITE,
          a.APPS_READ,
          a.APPS_WRITE,
          a.PROFILE_READ,
          a.PROFILE_WRITE,
        ]),
        (a.PERMISSION_MAP = {
          EVENT_TYPE_READ: a.EVENT_TYPE_READ,
          EVENT_TYPE_WRITE: a.EVENT_TYPE_WRITE,
          BOOKING_READ: a.BOOKING_READ,
          BOOKING_WRITE: a.BOOKING_WRITE,
          SCHEDULE_READ: a.SCHEDULE_READ,
          SCHEDULE_WRITE: a.SCHEDULE_WRITE,
          APPS_READ: a.APPS_READ,
          APPS_WRITE: a.APPS_WRITE,
          PROFILE_READ: a.PROFILE_READ,
          PROFILE_WRITE: a.PROFILE_WRITE,
        }),
        (a.PERMISSIONS_GROUPED_MAP = {
          EVENT_TYPE: {
            read: a.EVENT_TYPE_READ,
            write: a.EVENT_TYPE_WRITE,
            key: "eventType",
            label: "Event Type",
          },
          BOOKING: {
            read: a.BOOKING_READ,
            write: a.BOOKING_WRITE,
            key: "booking",
            label: "Booking",
          },
          SCHEDULE: {
            read: a.SCHEDULE_READ,
            write: a.SCHEDULE_WRITE,
            key: "schedule",
            label: "Schedule",
          },
          APPS: {
            read: a.APPS_READ,
            write: a.APPS_WRITE,
            key: "apps",
            label: "Apps",
          },
          PROFILE: {
            read: a.PROFILE_READ,
            write: a.PROFILE_WRITE,
            key: "profile",
            label: "Profile",
          },
        });
    },
    45715: (e, a, t) => {
      t.d(a, { Br: () => d, CW: () => E, PJ: () => r, jq: () => n });
      var l = t(96442);
      let n = {
          exchange2013calendar: (0, l.default)(
            () => t.e(7691).then(t.bind(t, 7691)),
            { loadableGenerated: { webpack: () => [7691] } }
          ),
          exchange2016calendar: (0, l.default)(
            () => t.e(24822).then(t.bind(t, 24822)),
            { loadableGenerated: { webpack: () => [24822] } }
          ),
          office365video: (0, l.default)(
            () =>
              Promise.all([t.e(76911), t.e(39214), t.e(64268)]).then(
                t.bind(t, 64268)
              ),
            { loadableGenerated: { webpack: () => [64268] } }
          ),
          vital: (0, l.default)(() => t.e(10782).then(t.bind(t, 88401)), {
            loadableGenerated: { webpack: () => [88401] },
          }),
        },
        r = {
          "general-app-settings": (0, l.default)(
            () => Promise.all([t.e(83631), t.e(91181)]).then(t.bind(t, 91181)),
            { loadableGenerated: { webpack: () => [91181] } }
          ),
          weather_in_your_calendar: (0, l.default)(
            () => Promise.all([t.e(83631), t.e(49100)]).then(t.bind(t, 26719)),
            { loadableGenerated: { webpack: () => [26719] } }
          ),
          zapier: (0, l.default)(() => t.e(11071).then(t.bind(t, 11071)), {
            loadableGenerated: { webpack: () => [11071] },
          }),
        },
        d = {
          alby: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(30996),
                t.e(87208),
                t.e(61449),
                t.e(84790),
                t.e(13409),
                t.e(55130),
              ]).then(t.bind(t, 55130)),
            { loadableGenerated: { webpack: () => [55130] } }
          ),
          basecamp3: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(87208),
                t.e(61449),
                t.e(84790),
                t.e(13409),
                t.e(88027),
              ]).then(t.bind(t, 88027)),
            { loadableGenerated: { webpack: () => [88027] } }
          ),
          btcpayserver: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(30996),
                t.e(87208),
                t.e(61449),
                t.e(84790),
                t.e(13409),
                t.e(52998),
              ]).then(t.bind(t, 52998)),
            { loadableGenerated: { webpack: () => [52998] } }
          ),
          closecom: (0, l.default)(
            () =>
              Promise.all([
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(97639),
              ]).then(t.bind(t, 97639)),
            { loadableGenerated: { webpack: () => [97639] } }
          ),
          fathom: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(63635),
              ]).then(t.bind(t, 63635)),
            { loadableGenerated: { webpack: () => [63635] } }
          ),
          ga4: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(92346),
              ]).then(t.bind(t, 92346)),
            { loadableGenerated: { webpack: () => [92346] } }
          ),
          giphy: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(76911),
                t.e(39214),
                t.e(84790),
                t.e(13409),
                t.e(73519),
                t.e(54481),
              ]).then(t.bind(t, 54481)),
            { loadableGenerated: { webpack: () => [54481] } }
          ),
          gtm: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(90028),
              ]).then(t.bind(t, 90028)),
            { loadableGenerated: { webpack: () => [90028] } }
          ),
          hitpay: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(87208),
                t.e(61449),
                t.e(84790),
                t.e(13409),
                t.e(81851),
              ]).then(t.bind(t, 81851)),
            { loadableGenerated: { webpack: () => [81851] } }
          ),
          hubspot: (0, l.default)(
            () =>
              Promise.all([
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(57193),
              ]).then(t.bind(t, 57193)),
            { loadableGenerated: { webpack: () => [57193] } }
          ),
          insihts: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(64546),
              ]).then(t.bind(t, 64546)),
            { loadableGenerated: { webpack: () => [64546] } }
          ),
          matomo: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(37941),
              ]).then(t.bind(t, 37941)),
            { loadableGenerated: { webpack: () => [37941] } }
          ),
          metapixel: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(50509),
              ]).then(t.bind(t, 50509)),
            { loadableGenerated: { webpack: () => [50509] } }
          ),
          "mock-payment-app": (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(30996),
                t.e(87208),
                t.e(61449),
                t.e(84790),
                t.e(13409),
                t.e(16351),
                t.e(47757),
              ]).then(t.bind(t, 47757)),
            { loadableGenerated: { webpack: () => [47757] } }
          ),
          paypal: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(30996),
                t.e(87208),
                t.e(61449),
                t.e(84790),
                t.e(13409),
                t.e(16351),
                t.e(41401),
              ]).then(t.bind(t, 41401)),
            { loadableGenerated: { webpack: () => [41401] } }
          ),
          "pipedrive-crm": (0, l.default)(
            () =>
              Promise.all([
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(38959),
              ]).then(t.bind(t, 38959)),
            { loadableGenerated: { webpack: () => [38959] } }
          ),
          plausible: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(11009),
              ]).then(t.bind(t, 11009)),
            { loadableGenerated: { webpack: () => [11009] } }
          ),
          posthog: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(52578),
              ]).then(t.bind(t, 52578)),
            { loadableGenerated: { webpack: () => [52578] } }
          ),
          qr_code: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(17023),
              ]).then(t.bind(t, 17023)),
            { loadableGenerated: { webpack: () => [17023] } }
          ),
          salesforce: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(87208),
                t.e(61449),
                t.e(84790),
                t.e(13409),
                t.e(74961),
              ]).then(t.bind(t, 74961)),
            { loadableGenerated: { webpack: () => [74961] } }
          ),
          stripepayment: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(30996),
                t.e(87208),
                t.e(61449),
                t.e(60996),
                t.e(84790),
                t.e(60993),
                t.e(15599),
                t.e(25236),
                t.e(13409),
                t.e(83026),
                t.e(12871),
              ]).then(t.bind(t, 12871)),
            { loadableGenerated: { webpack: () => [12871] } }
          ),
          "booking-pages-tag": (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(12549),
              ]).then(t.bind(t, 12549)),
            { loadableGenerated: { webpack: () => [12549] } }
          ),
          "event-type-app-card": (0, l.default)(
            () =>
              Promise.all([
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(86896),
              ]).then(t.bind(t, 86896)),
            { loadableGenerated: { webpack: () => [86896] } }
          ),
          twipla: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(68885),
              ]).then(t.bind(t, 68885)),
            { loadableGenerated: { webpack: () => [68885] } }
          ),
          umami: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(5417),
              ]).then(t.bind(t, 5417)),
            { loadableGenerated: { webpack: () => [5417] } }
          ),
          "zoho-bigin": (0, l.default)(
            () =>
              Promise.all([
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(73956),
              ]).then(t.bind(t, 73956)),
            { loadableGenerated: { webpack: () => [73956] } }
          ),
          zohocrm: (0, l.default)(
            () =>
              Promise.all([
                t.e(98691),
                t.e(96006),
                t.e(84790),
                t.e(13409),
                t.e(67972),
              ]).then(t.bind(t, 67972)),
            { loadableGenerated: { webpack: () => [67972] } }
          ),
        },
        E = {
          alby: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(30996),
                t.e(87208),
                t.e(61449),
                t.e(46225),
              ]).then(t.bind(t, 46225)),
            { loadableGenerated: { webpack: () => [46225] } }
          ),
          basecamp3: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(87208),
                t.e(61449),
                t.e(70512),
              ]).then(t.bind(t, 70512)),
            { loadableGenerated: { webpack: () => [70512] } }
          ),
          btcpayserver: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(30996),
                t.e(87208),
                t.e(61449),
                t.e(60565),
              ]).then(t.bind(t, 60565)),
            { loadableGenerated: { webpack: () => [60565] } }
          ),
          fathom: (0, l.default)(
            () => Promise.all([t.e(83631), t.e(30856)]).then(t.bind(t, 30856)),
            { loadableGenerated: { webpack: () => [30856] } }
          ),
          ga4: (0, l.default)(
            () => Promise.all([t.e(83631), t.e(77821)]).then(t.bind(t, 77821)),
            { loadableGenerated: { webpack: () => [77821] } }
          ),
          giphy: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(76911),
                t.e(39214),
                t.e(73519),
                t.e(83160),
              ]).then(t.bind(t, 73519)),
            { loadableGenerated: { webpack: () => [73519] } }
          ),
          gtm: (0, l.default)(
            () => Promise.all([t.e(83631), t.e(45823)]).then(t.bind(t, 45823)),
            { loadableGenerated: { webpack: () => [45823] } }
          ),
          hitpay: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(87208),
                t.e(61449),
                t.e(96811),
              ]).then(t.bind(t, 96811)),
            { loadableGenerated: { webpack: () => [96811] } }
          ),
          metapixel: (0, l.default)(
            () => Promise.all([t.e(83631), t.e(21426)]).then(t.bind(t, 21426)),
            { loadableGenerated: { webpack: () => [21426] } }
          ),
          paypal: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(30996),
                t.e(87208),
                t.e(61449),
                t.e(16351),
                t.e(35854),
              ]).then(t.bind(t, 35854)),
            { loadableGenerated: { webpack: () => [35854] } }
          ),
          plausible: (0, l.default)(
            () => Promise.all([t.e(83631), t.e(2102)]).then(t.bind(t, 2102)),
            { loadableGenerated: { webpack: () => [2102] } }
          ),
          qr_code: (0, l.default)(
            () => Promise.all([t.e(83631), t.e(99348)]).then(t.bind(t, 99348)),
            { loadableGenerated: { webpack: () => [99348] } }
          ),
          stripepayment: (0, l.default)(
            () =>
              Promise.all([
                t.e(83631),
                t.e(30996),
                t.e(87208),
                t.e(61449),
                t.e(60996),
                t.e(60993),
                t.e(15599),
                t.e(25236),
                t.e(83026),
              ]).then(t.bind(t, 1142)),
            { loadableGenerated: { webpack: () => [1142] } }
          ),
        };
    },
    60924: (e, a, t) => {
      t.d(a, { A: () => r });
      var l = t(52978);
      let n = (e) => !!e;
      function r(e, a) {
        return e
          .map((e) => {
            let t = (0, l.ku)(e.type),
              n = (0, l.XH)(e);
            if ("string" != typeof n || !t) return null;
            let r = t.type;
            return {
              label: e.customLabel || (0, l.CF)(e, t, a) || n,
              value: r,
              inputPlaceholder: a(
                (null == t ? void 0 : t.attendeeInputPlaceholder) || ""
              ),
            };
          })
          .filter(n);
      }
    },
    62549: (e, a, t) => {
      t.d(a, { A: () => E });
      var l = t(84594),
        n = t.n(l),
        r = t(13681);
      let d = (function () {
          let e = n().create({ timeout: 1e4, headers: {} }),
            a = "";
          return {
            instance: e,
            get: e.get,
            post: e.post,
            put: e.put,
            patch: e.patch,
            delete: e.delete,
            responseInterceptor: e.interceptors.response,
            setRefreshUrl: (e) => {
              a = e;
            },
            getRefreshUrl: () => a,
            setUrl: (a) => {
              e.defaults.baseURL = a;
            },
            getUrl: () => e.defaults.baseURL,
            setAuthorizationHeader: (a) => {
              e.defaults.headers.common.Authorization = "Bearer ".concat(a);
            },
            getAuthorizationHeader: () => {
              var a, t, l;
              return null !=
                (l =
                  null == (t = e.defaults.headers.common) ||
                  null == (a = t.Authorization)
                    ? void 0
                    : a.toString())
                ? l
                : "";
            },
            setClientIdHeader: (a) => {
              e.defaults.headers.common[r.X_CAL_CLIENT_ID] = a;
            },
            getClientIdHeader: () => {
              var a, t, l;
              return null !=
                (l =
                  null == (t = e.defaults.headers.common) ||
                  null == (a = t[r.X_CAL_CLIENT_ID])
                    ? void 0
                    : a.toString())
                ? l
                : "";
            },
            setPlatformEmbedHeader: (a) => {
              e.defaults.headers.common[r.X_CAL_PLATFORM_EMBED] = a.toString();
            },
            getPlatformEmbedHeader: () => {
              var a, t, l;
              return null !=
                (l =
                  null == (t = e.defaults.headers.common) ||
                  null == (a = t[r.X_CAL_PLATFORM_EMBED])
                    ? void 0
                    : a.toString())
                ? l
                : "";
            },
            setVersionHeader: (a) => {
              e.defaults.headers.common[r.CAL_API_VERSION_HEADER] = a;
            },
            getVersionHeader: () => {
              var a, t, l;
              return null !=
                (l =
                  null == (t = e.defaults.headers.common) ||
                  null == (a = t[r.X_CAL_CLIENT_ID])
                    ? void 0
                    : a.toString())
                ? l
                : "";
            },
            refreshTokens: async (e) => {
              let a = await fetch("".concat(e), {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: d.getAuthorizationHeader(),
                  },
                }),
                t = await a.json();
              return t.accessToken
                ? (d.setAuthorizationHeader(t.accessToken), t.accessToken)
                : "";
            },
          };
        })(),
        E = d;
    },
    71455: (e, a) => {
      var t;
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.APPS_TYPE_ID_MAPPING =
          a.CONFERENCING_APPS =
          a.CAL_VIDEO_TYPE =
          a.CAL_VIDEO =
          a.OFFICE_365_VIDEO_TYPE =
          a.OFFICE_365_VIDEO =
          a.ZOOM_TYPE =
          a.ZOOM =
          a.GOOGLE_MEET_ID =
          a.GOOGLE_MEET_TYPE =
          a.GOOGLE_MEET =
          a.CREDENTIAL_CALENDARS =
          a.CALENDARS =
          a.APPLE_CALENDAR_ID =
          a.ICS_CALENDAR_TYPE =
          a.APPLE_CALENDAR_TYPE =
          a.ICS_CALENDAR_ID =
          a.ICS_CALENDAR =
          a.APPLE_CALENDAR =
          a.OFFICE_365_CALENDAR =
          a.GOOGLE_CALENDAR =
          a.OFFICE_365_CALENDAR_ID =
          a.OFFICE_365_CALENDAR_TYPE =
          a.GOOGLE_CALENDAR_ID =
          a.GOOGLE_CALENDAR_TYPE =
            void 0),
        (a.GOOGLE_CALENDAR_TYPE = "google_calendar"),
        (a.GOOGLE_CALENDAR_ID = "google-calendar"),
        (a.OFFICE_365_CALENDAR_TYPE = "office365_calendar"),
        (a.OFFICE_365_CALENDAR_ID = "office365-calendar"),
        (a.GOOGLE_CALENDAR = "google"),
        (a.OFFICE_365_CALENDAR = "office365"),
        (a.APPLE_CALENDAR = "apple"),
        (a.ICS_CALENDAR = "ics-feed"),
        (a.ICS_CALENDAR_ID = "ics-feed"),
        (a.APPLE_CALENDAR_TYPE = "apple_calendar"),
        (a.ICS_CALENDAR_TYPE = "ics-feed_calendar"),
        (a.APPLE_CALENDAR_ID = "apple-calendar"),
        (a.CALENDARS = [
          a.GOOGLE_CALENDAR,
          a.OFFICE_365_CALENDAR,
          a.APPLE_CALENDAR,
        ]),
        (a.CREDENTIAL_CALENDARS = [a.APPLE_CALENDAR]),
        (a.GOOGLE_MEET = "google-meet"),
        (a.GOOGLE_MEET_TYPE = "google_video"),
        (a.GOOGLE_MEET_ID = "google-meet"),
        (a.ZOOM = "zoom"),
        (a.ZOOM_TYPE = "zoom_video"),
        (a.OFFICE_365_VIDEO = "msteams"),
        (a.OFFICE_365_VIDEO_TYPE = "office365_video"),
        (a.CAL_VIDEO = "daily-video"),
        (a.CAL_VIDEO_TYPE = "daily_video"),
        (a.CONFERENCING_APPS = [a.GOOGLE_MEET, a.ZOOM, a.OFFICE_365_VIDEO]),
        ((t = {})[a.GOOGLE_CALENDAR_TYPE] = a.GOOGLE_CALENDAR_ID),
        (t[a.OFFICE_365_CALENDAR_TYPE] = a.OFFICE_365_CALENDAR_ID),
        (t[a.APPLE_CALENDAR_TYPE] = a.APPLE_CALENDAR_ID),
        (t[a.ICS_CALENDAR_TYPE] = a.ICS_CALENDAR_ID),
        (t[a.GOOGLE_MEET_TYPE] = a.GOOGLE_MEET_ID),
        (a.APPS_TYPE_ID_MAPPING = t);
    },
    72085: (e, a) => {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.MAX_SEATS_PER_TIME_SLOT =
          a.CAL_API_VERSION_HEADER =
          a.API_VERSIONS =
          a.VERSION_2024_09_04 =
          a.VERSION_2024_08_13 =
          a.VERSION_2024_04_15 =
          a.VERSION_2024_06_11 =
          a.VERSION_2024_06_14 =
          a.HTTP_CODE_TOKEN_EXPIRED =
          a.X_CAL_PLATFORM_EMBED =
          a.X_CAL_CLIENT_ID =
          a.X_CAL_SECRET_KEY =
          a.API_ERROR_CODES =
          a.DUPLICATE_RESOURCE =
          a.RESOURCE_NOT_FOUND =
          a.INVALID_API_KEY =
          a.MISSING_PARAMETER =
          a.INVALID_PARAMETER =
          a.INTERNAL_SERVER_ERROR =
          a.CONFLICT =
          a.INVALID_ACCESS_TOKEN =
          a.ACCESS_TOKEN_EXPIRED =
          a.UNPROCESSABLE_ENTITY =
          a.METHOD_NOT_ALLOWED =
          a.NOT_FOUND =
          a.FORBIDDEN =
          a.UNAUTHORIZED =
          a.BAD_REQUEST =
          a.REDIRECT_STATUS =
          a.ERROR_STATUS =
          a.SUCCESS_STATUS =
          a.V2_ENDPOINTS =
          a.BASE_URL =
            void 0),
        (a.BASE_URL = "http://localhost:5555"),
        (a.V2_ENDPOINTS = {
          me: "me",
          availability: "schedules",
          eventTypes: "event-types",
          bookings: "bookings",
        }),
        (a.SUCCESS_STATUS = "success"),
        (a.ERROR_STATUS = "error"),
        (a.REDIRECT_STATUS = "redirect"),
        (a.BAD_REQUEST = "BAD_REQUEST"),
        (a.UNAUTHORIZED = "UNAUTHORIZED"),
        (a.FORBIDDEN = "FORBIDDEN"),
        (a.NOT_FOUND = "NOT_FOUND"),
        (a.METHOD_NOT_ALLOWED = "METHOD_NOT_ALLOWED"),
        (a.UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY"),
        (a.ACCESS_TOKEN_EXPIRED = "ACCESS_TOKEN_IS_EXPIRED"),
        (a.INVALID_ACCESS_TOKEN = "Invalid Access Token."),
        (a.CONFLICT = "CONFLICT"),
        (a.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR"),
        (a.INVALID_PARAMETER = "INVALID_PARAMETER"),
        (a.MISSING_PARAMETER = "MISSING_PARAMETER"),
        (a.INVALID_API_KEY = "INVALID_API_KEY"),
        (a.RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND"),
        (a.DUPLICATE_RESOURCE = "DUPLICATE_RESOURCE"),
        (a.API_ERROR_CODES = [
          a.BAD_REQUEST,
          a.UNAUTHORIZED,
          a.FORBIDDEN,
          a.NOT_FOUND,
          a.METHOD_NOT_ALLOWED,
          a.UNPROCESSABLE_ENTITY,
          a.INTERNAL_SERVER_ERROR,
          a.INVALID_PARAMETER,
          a.MISSING_PARAMETER,
          a.INVALID_API_KEY,
          a.RESOURCE_NOT_FOUND,
          a.DUPLICATE_RESOURCE,
        ]),
        (a.X_CAL_SECRET_KEY = "x-cal-secret-key"),
        (a.X_CAL_CLIENT_ID = "x-cal-client-id"),
        (a.X_CAL_PLATFORM_EMBED = "x-cal-platform-embed"),
        (a.HTTP_CODE_TOKEN_EXPIRED = 498),
        (a.VERSION_2024_06_14 = "2024-06-14"),
        (a.VERSION_2024_06_11 = "2024-06-11"),
        (a.VERSION_2024_04_15 = "2024-04-15"),
        (a.VERSION_2024_08_13 = "2024-08-13"),
        (a.VERSION_2024_09_04 = "2024-09-04"),
        (a.API_VERSIONS = [
          a.VERSION_2024_06_14,
          a.VERSION_2024_06_11,
          a.VERSION_2024_04_15,
          a.VERSION_2024_08_13,
          a.VERSION_2024_09_04,
        ]),
        (a.CAL_API_VERSION_HEADER = "cal-api-version"),
        (a.MAX_SEATS_PER_TIME_SLOT = 1e3);
    },
    74138: (e, a, t) => {
      t.d(a, { p: () => r });
      var l = t(54568),
        n = t(97071);
      let r = (e) =>
        (0, l.jsx)("div", {
          className: e.wrapperClassName,
          children: (0, l.jsx)(n.o, { ...e }),
        });
    },
    78813: (e, a, t) => {
      t.d(a, { A: () => E });
      var l = t(81562),
        n = t(27541),
        r = t(66339);
      function d(e, a) {
        if (a) return void window.open(e, "_blank");
        window.location.href = e;
      }
      let E = function (e, a) {
          let t = (0, n.usePathname)(),
            E = "".concat(r.YW).concat(t);
          return (0, l.n)({
            ...a,
            mutationFn: async (t) => {
              var l, n, r;
              let o,
                s = t && t.teamId ? t.teamId : void 0,
                _ = t && t.defaultInstall ? t.defaultInstall : void 0,
                c = (null == a ? void 0 : a.returnTo)
                  ? a.returnTo
                  : t && t.returnTo
                  ? t.returnTo
                  : void 0;
              if (
                ((null == (o = "" === t ? e : t.type)
                  ? void 0
                  : o.endsWith("_other_calendar")) &&
                  (o = o.split("_other_calendar")[0]),
                (null == a ? void 0 : a.installGoogleVideo) &&
                  "google_calendar" !== o)
              )
                throw Error("Could not install Google Meet");
              let u = i({
                  stateStr: JSON.stringify({
                    onErrorReturnTo: E,
                    fromApp: !0,
                    ...(s && { teamId: s }),
                    ...("google_calendar" === o && {
                      installGoogleVideo:
                        null == a ? void 0 : a.installGoogleVideo,
                    }),
                    ...(c && { returnTo: c }),
                    ...(_ && { defaultInstall: _ }),
                  }),
                  teamId: s,
                  returnTo: c,
                }),
                A = await fetch(
                  "/api/integrations/".concat(o, "/add").concat(u)
                );
              if (!A.ok)
                throw Error((await A.json()).message || "Something went wrong");
              let R = await A.json();
              return !/https?:\/\//.test(null == R ? void 0 : R.url) ||
                (null == R || null == (l = R.url)
                  ? void 0
                  : l.startsWith(window.location.origin))
                ? R.url
                  ? (d(R.url, R.newTab),
                    {
                      setupPending:
                        (null == R || null == (n = R.url)
                          ? void 0
                          : n.endsWith("/setup")) ||
                        (null == R || null == (r = R.url)
                          ? void 0
                          : r.includes("/apps/installation/event-types")),
                      message: R.message,
                    })
                  : c
                  ? (d(c, !1), { setupPending: !0, message: R.message })
                  : { setupPending: !1, message: R.message }
                : (d(R.url, R.newTab),
                  { setupPending: !R.newTab, message: R.message });
            },
          });
        },
        i = (e) => {
          let { stateStr: a, teamId: t, returnTo: l } = e,
            n = new URL("https://example.com");
          return (
            n.searchParams.append("state", a),
            void 0 !== t && n.searchParams.append("teamId", t.toString()),
            l && n.searchParams.append("returnTo", l),
            n.search
          );
        };
    },
    88595: (e, a, t) => {
      t.d(a, {
        B8: () => s,
        Zq: () => A,
        ao: () => u,
        ck: () => _,
        u9: () => c,
      });
      var l = t(54568),
        n = t(19664),
        r = t.n(n),
        d = t(7620),
        E = t(43328),
        i = t(50441),
        o = t(27357);
      function s(e) {
        return (0, l.jsx)("ul", {
          "data-testid": "list",
          ...e,
          className: (0, i.A)(
            "mx-0 rounded-sm sm:overflow-hidden ",
            e.roundContainer &&
              "[&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md ",
            !e.noBorderTreatment &&
              "border-subtle divide-subtle divide-y rounded-md border border-l border-r ",
            e.className
          ),
          children: e.children,
        });
      }
      function _(e) {
        let { href: a, expanded: t, rounded: n = !0, ...E } = e,
          o = a ? "a" : "li",
          s = (0, d.createElement)(
            o,
            {
              ...E,
              className: (0, i.A)(
                "items-center bg-default min-w-0 flex-1 flex border-neutral-200 p-4 sm:mx-0 md:border md:p-4 xl:mt-0 border-subtle",
                t ? "my-2 border" : "border -mb-px last:mb-0",
                n ? "rounded-md" : "rounded-none",
                e.className,
                (e.onClick || a) && "hover:bg-muted"
              ),
              "data-testid": "list-item",
            },
            e.children
          );
        return a
          ? (0, l.jsx)(r(), {
              passHref: !0,
              href: a,
              legacyBehavior: !0,
              children: s,
            })
          : s;
      }
      function c(e) {
        let {
            href: a,
            heading: t = "",
            children: n,
            disabled: d = !1,
            readOnly: s = !1,
            actions: _ = (0, l.jsx)("div", {}),
            className: c = "",
          } = e,
          { t: u } = (0, E.Y)(),
          A = e.subHeading;
        return (
          A || (A = ""),
          (0, l.jsxs)("li", {
            "data-testid": "list-link-item",
            className: (0, i.A)(
              "group flex w-full items-center justify-between p-5 pb-4",
              c,
              d ? "hover:bg-muted" : ""
            ),
            children: [
              (0, l.jsxs)(r(), {
                passHref: !0,
                href: a,
                className: (0, i.A)(
                  "text-default flex-grow truncate text-sm",
                  d ? "pointer-events-none cursor-not-allowed opacity-30" : ""
                ),
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, l.jsx)("h1", {
                        className: "text-sm font-semibold leading-none",
                        children: t,
                      }),
                      s &&
                        (0, l.jsx)(o.E, {
                          "data-testid": "badge",
                          variant: "gray",
                          className: "ml-2",
                          children: u("readonly"),
                        }),
                    ],
                  }),
                  (0, l.jsxs)("h2", {
                    className:
                      "min-h-4 mt-2 text-sm font-normal leading-none text-neutral-600",
                    children: [A.substring(0, 100), A.length > 100 && "..."],
                  }),
                  (0, l.jsx)("div", { className: "mt-2", children: n }),
                ],
              }),
              _,
            ],
          })
        );
      }
      function u(e) {
        let { component: a = "span", ...t } = e;
        return (0, d.createElement)(
          a,
          {
            ...t,
            className: (0, i.A)(
              "text-sm font-medium text-emphasis truncate",
              e.className
            ),
            "data-testid": "list-item-title",
          },
          e.children
        );
      }
      function A(e) {
        let { component: a = "span", ...t } = e;
        return (0, d.createElement)(
          a,
          {
            ...t,
            className: (0, i.A)(
              "text-sm text-subtle truncate prose",
              e.className
            ),
            "data-testid": "list-item-text",
          },
          e.children
        );
      }
    },
    97071: (e, a, t) => {
      t.d(a, { o: () => d });
      var l = t(54568),
        n = t(78813),
        r = t(45715);
      let d = (e) => {
        var a;
        let t = (0, n.A)(null, e.options),
          d = (function (e, a) {
            let t = a[e];
            if (t) return e;
            let l = e.substring(0, e.lastIndexOf("_"));
            if ((t = a[l])) return l;
            let n =
              e.substring(0, e.lastIndexOf("_")) +
              e.substring(e.lastIndexOf("_") + 1);
            if ((t = a[n])) return n;
            let r = e.replace(/_/g, "");
            return (t = a[r]) ? r : e;
          })(e.type, r.jq),
          E = r.jq[d];
        return E
          ? (0, l.jsx)(E, {
              render: e.render,
              onChanged: e.onChanged,
              disableInstall: e.disableInstall,
            })
          : (0, l.jsx)(l.Fragment, {
              children: e.render({
                useDefaultComponent: !0,
                disabled: e.disableInstall,
                onClick: () => {
                  t.mutate({ type: e.type });
                },
                loading: null == (a = t.data) ? void 0 : a.setupPending,
              }),
            });
      };
    },
  },
]);
//# sourceMappingURL=54836-7dbffbeb8710eac9.js.map
