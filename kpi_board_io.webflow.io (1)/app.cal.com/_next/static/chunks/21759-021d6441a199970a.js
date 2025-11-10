"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [21759],
  {
    3298: (e, t, n) => {
      n.d(t, { default: () => u, l: () => c });
      var r = n(54568),
        a = n(96006),
        s = n(7620),
        i = n(43328),
        l = n(18511),
        o = n(37934);
      let d = (e) => {
          let { children: t, as: n = "", ...d } = e,
            c = (0, a.useSession)(),
            { t: u } = (0, i.Y)(),
            h = n || s.Fragment,
            m = c.data ? c.data.hasValidLicense : null;
          return (
            (0, s.useEffect)(() => {}, []),
            (0, r.jsx)(h, {
              ...d,
              children:
                null === m || m
                  ? t
                  : (0, r.jsx)(o.Y, {
                      Icon: "triangle-alert",
                      headline: u("enterprise_license"),
                      buttonRaw: (0, r.jsx)(l.$, {
                        color: "secondary",
                        href: "https://go.cal.com/get-license",
                        children: u("contact_sales"),
                      }),
                      description: u("enterprise_license_sales"),
                    }),
            })
          );
        },
        c = (e) => (t) =>
          (0, r.jsx)("div", {
            children: (0, r.jsx)(d, { children: (0, r.jsx)(e, { ...t }) }),
          }),
        u = d;
    },
    8949: (e, t, n) => {
      n.d(t, { A: () => i, I: () => s });
      var r = n(54568),
        a = n(50441);
      function s(e) {
        let { name: t, size: n = 16, className: s, ...i } = e;
        return (0, r.jsx)("svg", {
          height: n,
          width: n,
          className: (0, a.A)("fill-transparent", s),
          ...i,
          "aria-hidden": !0,
          children: (0, r.jsx)("use", { href: "#".concat(t) }),
        });
      }
      let i = s;
    },
    13330: (e, t, n) => {
      n.d(t, { AppRouterI18nContext: () => s, AppRouterI18nProvider: () => i });
      var r = n(54568),
        a = n(7620);
      let s = (0, a.createContext)(null);
      function i(e) {
        let { children: t, translations: n, locale: i, ns: l } = e,
          o = (0, a.useMemo)(
            () => ({ translations: n, locale: i, ns: l }),
            [i, l]
          );
        return (0, r.jsx)(s.Provider, { value: o, children: t });
      }
    },
    18511: (e, t, n) => {
      n.d(t, { $: () => h, V: () => u });
      var r = n(54568),
        a = n(58793),
        s = n(19664),
        i = n.n(s),
        l = n(7620),
        o = n(50441),
        d = n(8949),
        c = n(72221);
      let u = (0, a.F)(
          "group whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-[10px] transition disabled:cursor-not-allowed gap-1",
          {
            variants: {
              variant: {
                button: "",
                icon: "flex justify-center",
                fab: "min-w-14 min-h-14 md:min-w-min md:min-h-min rounded-full justify-center md:rounded-[10px] radix-state-open:rotate-45 md:radix-state-open:rotate-0 radix-state-open:shadown-none radix-state-open:ring-0",
              },
              color: {
                primary: [
                  "bg-brand-default",
                  "text-brand",
                  "enabled:hover:bg-brand-emphasis",
                  "focus-visible:outline-none",
                  "focus-visible:ring-0",
                  "focus-visible:shadow-button-solid-brand-focused",
                  "border border-brand-default",
                  "disabled:opacity-30",
                  "shadow-button-solid-brand-default",
                  "enabled:active:shadow-button-solid-brand-active",
                  "enabled:hover:shadow-button-solid-brand-hover",
                  "transition-shadow",
                  "transition-transform",
                  "duration-100",
                ],
                secondary: [
                  "bg-default",
                  "text-default",
                  "border",
                  "border-default",
                  "enabled:hover:bg-muted",
                  "enabled:hover:text-emphasis",
                  "disabled:opacity-30",
                  "focus-visible:bg-subtle",
                  "focus-visible:outline-none",
                  "focus-visible:ring-0",
                  "focus-visible:shadow-outline-gray-focused",
                  "shadow-outline-gray-rested",
                  "enabled:hover:shadow-outline-gray-hover",
                  "enabled:active:shadow-outline-gray-active",
                  "transition-shadow",
                  "duration-200",
                ],
                minimal: [
                  "text-subtle",
                  "border border-transparent",
                  "enabled:hover:bg-subtle",
                  "enabled:hover:text-emphasis",
                  "enabled:hover:border-subtle hover:border",
                  "disabled:opacity-30",
                  "focus-visible:bg-subtle",
                  "focus-visible:outline-none",
                  "focus-visible:ring-0",
                  "focus-visible:border-subtle",
                  "focus-visible:shadow-button-outline-gray-focused",
                  "enabled:active:shadow-outline-gray-active",
                  "transition-shadow",
                  "duration-200",
                ],
                destructive: [
                  "border",
                  "border-default",
                  "text-error",
                  "dark:hover:text-red-100",
                  "hover:border-semantic-error",
                  "hover:bg-error",
                  "focus-visible:text-red-700",
                  "focus-visible:bg-error",
                  "focus-visible:outline-none",
                  "focus-visible:ring-0",
                  "focus-visible:shadow-button-outline-red-focused",
                  "disabled:bg-red-100",
                  "disabled:border-red-200",
                  "disabled:text-red-700",
                  "disabled:hover:border-red-200",
                  "disabled:opacity-30",
                  "shadow-outline-red-rested",
                  "enabled:hover:shadow-outline-red-hover",
                  "enabled:active:shadow-outline-red-active",
                  "transition-shadow",
                  "duration-200",
                ],
              },
              size: {
                xs: "h-6 p-2 leading-none text-xs rounded-md",
                sm: "h-7 px-2 py-1.5 leading-none text-sm",
                base: "px-2.5 py-2 text-sm leading-none",
                lg: "px-3 py-2.5 ",
              },
              loading: { true: "cursor-wait" },
            },
            compoundVariants: [
              { loading: !0, color: "primary", className: "opacity-30" },
              {
                loading: !0,
                color: "secondary",
                className: "bg-subtle text-emphasis/80",
              },
              {
                loading: !0,
                color: "minimal",
                className: "bg-subtle text-emphasis/30",
              },
              {
                loading: !0,
                color: "destructive",
                className:
                  "text-red-700/30 dark:text-red-700/30 hover:text-red-700/30  border border-default text-emphasis",
              },
              {
                variant: "icon",
                size: "base",
                className:
                  "min-h-[36px] min-w-[36px] !p-2 hover:border-default",
              },
              {
                variant: "icon",
                size: "xs",
                className: "h-5 w-5 !p-1 rounded-md",
              },
              {
                variant: "icon",
                size: "sm",
                className: "h-6 w-6 !p-1 rounded-md",
              },
              { variant: "icon", size: "lg", className: "h-10 w-10 !p-1" },
              { variant: "fab", size: "base", className: "md:px-4 md:py-2.5" },
            ],
            defaultVariants: {
              variant: "button",
              color: "primary",
              size: "base",
            },
          }
        ),
        h = (0, l.forwardRef)(function (e, t) {
          let {
              loading: n = !1,
              color: a = "primary",
              size: s,
              variant: c = "button",
              type: h = "button",
              tooltipSide: b = "top",
              tooltipOffset: x = 4,
              tooltipClassName: p,
              StartIcon: v,
              CustomStartIcon: f,
              EndIcon: g,
              shallow: w,
              ...j
            } = e,
            y = e.disabled || n,
            C = void 0 !== e.href,
            N = l.createElement(
              C ? "a" : "button",
              {
                ...j,
                disabled: y,
                type: C ? void 0 : h,
                ref: t,
                className: (0, o.A)(
                  u({ color: a, size: s, loading: n, variant: c }),
                  e.className
                ),
                onClick: y
                  ? (e) => {
                      e.preventDefault();
                    }
                  : e.onClick,
              },
              (0, r.jsxs)(r.Fragment, {
                children: [
                  f ||
                    (v &&
                      (0, r.jsx)(r.Fragment, {
                        children:
                          "fab" === c
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(d.I, {
                                    name: v,
                                    className:
                                      "hidden h-4 w-4 stroke-[1.5px]  md:inline-flex",
                                  }),
                                  (0, r.jsx)(d.I, {
                                    name: "plus",
                                    "data-testid": "plus",
                                    className: "inline h-6 w-6 md:hidden",
                                  }),
                                ],
                              })
                            : (0, r.jsx)(d.I, {
                                "data-name": "start-icon",
                                name: v,
                                className: (0, o.A)(
                                  n ? "invisible" : "visible",
                                  "button-icon group-active:translate-y-[0.5px]",
                                  "icon" === c && "h-4 w-4",
                                  "button" === c && "h-4 w-4 stroke-[1.5px] "
                                ),
                              }),
                      })),
                  (0, r.jsx)("div", {
                    className: (0, o.A)(
                      "contents",
                      n ? "invisible" : "visible",
                      "fab" === c ? "hidden md:contents" : "",
                      "group-active:translate-y-[0.5px]"
                    ),
                    children: e.children,
                  }),
                  n &&
                    (0, r.jsx)("div", {
                      className:
                        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform",
                      children: (0, r.jsxs)("svg", {
                        className: (0, o.A)(
                          "mx-4 h-5 w-5 animate-spin",
                          "primary" === a ? "text-inverted" : "text-emphasis"
                        ),
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                          (0, r.jsx)("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4",
                          }),
                          (0, r.jsx)("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                          }),
                        ],
                      }),
                    }),
                  g &&
                    (0, r.jsx)(r.Fragment, {
                      children:
                        "fab" === c
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(d.I, {
                                  name: g,
                                  className:
                                    "-mr-1 me-2 ms-2 hidden h-5 w-5 md:inline",
                                }),
                                (0, r.jsx)(d.I, {
                                  name: "plus",
                                  "data-testid": "plus",
                                  className: "inline h-6 w-6 md:hidden",
                                }),
                              ],
                            })
                          : (0, r.jsx)(d.I, {
                              name: g,
                              className: (0, o.A)(
                                n ? "invisible" : "visible",
                                "group-active:translate-y-[0.5px]",
                                "icon" === c && "h-4 w-4",
                                "button" === c && "h-4 w-4 stroke-[1.5px] "
                              ),
                            }),
                    }),
                ],
              })
            );
          return e.href
            ? (0, r.jsx)(i(), {
                "data-testid": "link-component",
                passHref: !0,
                href: e.href,
                shallow: w && w,
                legacyBehavior: !0,
                children: N,
              })
            : (0, r.jsx)(m, {
                "data-testid": "wrapper",
                tooltip: e.tooltip,
                tooltipSide: b,
                tooltipOffset: x,
                tooltipClassName: p,
                children: N,
              });
        }),
        m = (e) => {
          let {
            children: t,
            tooltip: n,
            tooltipSide: a,
            tooltipOffset: s,
            tooltipClassName: i,
          } = e;
          return n
            ? (0, r.jsx)(c.Tooltip, {
                "data-testid": "tooltip",
                className: i,
                content: n,
                side: a,
                sideOffset: s,
                children: t,
              })
            : (0, r.jsx)(r.Fragment, { children: t });
        };
      h.displayName = "Button";
    },
    21759: (e, t, n) => {
      n.d(t, { default: () => L });
      var r = n(54568),
        a = n(27541),
        s = n(23792);
      n(62117);
      var i = n(3298),
        l = n(91640),
        o = n.n(l),
        d = n(39145),
        c = n(96006),
        u = n(45318),
        h = n(56641),
        m = n(80375),
        b = n(96442),
        x = n(7620);
      let p = n(40459).env.NEXT_PUBLIC_POSTHOG_KEY
        ? (0, b.default)(
            () => Promise.all([n.e(803), n.e(43924)]).then(n.bind(n, 43924)),
            { loadableGenerated: { webpack: () => [43924] } }
          )
        : x.Fragment;
      var v = n(95870);
      let f = n(40459).env.NEXT_PUBLIC_HELPSCOUT_KEY
          ? (0, b.default)(
              () =>
                Promise.all([n.e(80042), n.e(75266)]).then(n.bind(n, 75266)),
              { loadableGenerated: { webpack: () => [75266] } }
            )
          : x.Fragment,
        g = (0, b.default)(
          () =>
            Promise.all([
              n.e(83631),
              n.e(69885),
              n.e(76911),
              n.e(68304),
              n.e(37193),
              n.e(24372),
            ]).then(n.bind(n, 24372)),
          { loadableGenerated: { webpack: () => [24372] }, ssr: !1 }
        );
      var w = n(67603),
        j = n(40701),
        y = n(54781);
      let C = ["/auth/setup"];
      var N = n(30996),
        k = n(27601);
      let P = (e) => {
        let t = (0, a.useSearchParams)(),
          n = t ? window.getEmbedNamespace() : null,
          s = "string" == typeof n,
          { key: i, ...l } = (function (e) {
            var t;
            let {
                props: n,
                isEmbedMode: r,
                embedNamespace: a,
                pathname: s,
                searchParams: i,
              } = e,
              l = n.isBookingPage
                ? "bookingConfigured"
                : !1 === n.isThemeSupported
                ? "none"
                : "appConfigured",
              o = null != (t = null == i ? void 0 : i.get("theme")) ? t : "",
              d = N.z.enum(["light", "dark", "system", "auto"]).safeParse(o),
              c = o.length > 0 && !d.success,
              u = "none" === l || c ? "light" : void 0;
            if (u)
              return {
                key: "forcedThemeKey",
                storageKey: "forcedThemeKey",
                forcedTheme: u,
                attribute: "class",
                nonce: n.nonce,
                enableColorScheme: !1,
                enableSystem: "none" !== l,
              };
            let h = "bookingConfigured" === l,
              m = s
                ? (function (e) {
                    let { pathname: t } = e;
                    if ("/" === t) return "/";
                    let n = t.split("/").slice(1),
                      r = "team" === n[0],
                      a = "forms" === n[0],
                      s = "d" === n[0],
                      i = n[0].toLowerCase().split(/\+|%2B/).length > 1;
                    return a || s ? n[1] : i ? n[0] : r ? n[1] : n[0];
                  })({ pathname: s })
                : null;
            (h || r) &&
              !m &&
              console.error(
                "`themeBasis` is nullish. This should not happen.",
                { pathname: s }
              );
            let b = m ? ":".concat(m) : "",
              x = r && o && o !== k.Hw.auto ? ":".concat(o) : "",
              p = r
                ? "embed-theme-".concat(a).concat(b).concat(x)
                : "appConfigured" === l
                ? "app-theme"
                : h
                ? "booking-theme".concat(b)
                : void 0;
            return {
              storageKey: p,
              nonce: n.nonce,
              enableColorScheme: !1,
              enableSystem: "none" !== l,
              key: p,
              attribute: "class",
            };
          })({
            props: e,
            isEmbedMode: s,
            embedNamespace: n,
            pathname: (0, a.usePathname)(),
            searchParams: t,
          });
        return (0, r.jsxs)(
          h.N,
          {
            ...l,
            children: [
              !s &&
                (0, r.jsx)(o(), {
                  id: "437a69cba65ccf50",
                  children: ".dark{color-scheme:dark}",
                }),
              e.children,
            ],
          },
          i
        );
      };
      function A(e) {
        let { children: t } = e,
          n = (0, j.D)();
        return (0, r.jsx)(w.C, { value: n, children: t });
      }
      function I(e) {
        let { children: t } = e,
          n = (function () {
            var e;
            let t = (0, c.useSession)();
            return null == t || null == (e = t.data) ? void 0 : e.user.org;
          })();
        return (0, r.jsx)(v.L, { value: { orgBrand: n }, children: t });
      }
      let S = (e) => {
          let t = (0, y.A)(),
            n = (function () {
              let e = (0, a.usePathname)();
              return !C.some((t) => (null == e ? void 0 : e.startsWith(t)));
            })(),
            s = (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(u.EventCollectionProvider, {
                options: { apiPath: "/api/collect-events" },
                children: (0, r.jsx)(d.Bc, {
                  children: (0, r.jsx)(P, {
                    nonce: e.nonce,
                    isThemeSupported: n,
                    isBookingPage: e.isBookingPage || t,
                    children: (0, r.jsx)(m.N, {
                      children: (0, r.jsx)(A, {
                        children:
                          e.isBookingPage || t
                            ? (0, r.jsx)(I, { children: e.children })
                            : (0, r.jsx)(g, {
                                children: (0, r.jsx)(I, {
                                  children: e.children,
                                }),
                              }),
                      }),
                    }),
                  }),
                }),
              }),
            });
          return e.isBookingPage || t
            ? s
            : (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(f, {
                  children: (0, r.jsx)(p, { children: s }),
                }),
              });
        },
        L = function (e) {
          let t = (0, a.usePathname)(),
            n = "200";
          "/404" === t
            ? (n = "404")
            : "/500" === t
            ? (n = "500")
            : "/403" === t && (n = "403");
          let l = e.nonce ? "" : void 0,
            o = { ...e, nonce: l };
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(S, {
              ...o,
              children: (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(s.default, {
                    nonce: l,
                    id: "page-status",
                    dangerouslySetInnerHTML: {
                      __html: "window.CalComPageStatus = '".concat(n, "'"),
                    },
                  }),
                  e.requiresLicense
                    ? (0, r.jsx)(i.default, { children: e.children })
                    : (0, r.jsx)(r.Fragment, { children: e.children }),
                ],
              }),
            }),
          });
        };
    },
    26682: (e, t, n) => {
      n.d(t, { O: () => a });
      var r = n(27541);
      let a = () => {
        var e, t;
        let n =
            null != (e = (0, r.useSearchParams)()) ? e : new URLSearchParams(),
          a = null != (t = (0, r.useParams)()) ? t : {},
          s = new URLSearchParams(n.toString());
        return (
          Object.getOwnPropertyNames(a).forEach((e) => {
            s.delete(e);
            let t = a[e] || "";
            ("string" == typeof t ? t.split("/") : t).forEach((t) => {
              s.append(e, t);
            });
          }),
          new r.ReadonlyURLSearchParams(s)
        );
      };
    },
    27601: (e, t, n) => {
      n.d(t, { Hw: () => i, Oh: () => a, ZU: () => s });
      var r = n(66339);
      let a = r.qS,
        s = "".concat(r.YW, "/embed/preview.html");
      var i = (function (e) {
        return (e.auto = "auto"), (e.light = "light"), (e.dark = "dark"), e;
      })({});
    },
    37934: (e, t, n) => {
      n.d(t, { Y: () => l });
      var r = n(54568);
      n(7620);
      var a = n(50441),
        s = n(18511),
        i = n(8949);
      function l(e) {
        let {
          Icon: t,
          customIcon: n,
          avatar: l,
          headline: o,
          description: d,
          buttonText: c,
          buttonOnClick: u,
          buttonRaw: h,
          border: m = !0,
          dashedBorder: b = !0,
          className: x,
          iconClassName: p,
          iconWrapperClassName: v,
          limitWidth: f = !0,
        } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            "data-testid": "empty-screen",
            className: (0, a.A)(
              "flex w-full select-none flex-col items-center justify-center rounded-lg p-7 lg:p-20",
              m && "border-subtle border",
              b && "border-dashed",
              x
            ),
            children: [
              l
                ? (0, r.jsx)("div", {
                    className:
                      "flex h-[72px] w-[72px] items-center justify-center rounded-full",
                    children: l,
                  })
                : null,
              t
                ? (0, r.jsx)("div", {
                    className: (0, a.A)(
                      "bg-emphasis flex h-[72px] w-[72px] items-center justify-center rounded-full ",
                      v
                    ),
                    children: (0, r.jsx)(i.A, {
                      name: t,
                      className: (0, a.A)(
                        "text-default inline-block h-10 w-10 stroke-[1.3px]",
                        p
                      ),
                    }),
                  })
                : null,
              n ? (0, r.jsx)(r.Fragment, { children: n }) : null,
              (0, r.jsxs)("div", {
                className: "flex ".concat(
                  f ? "max-w-[420px]" : "",
                  "  flex-col items-center"
                ),
                children: [
                  (0, r.jsx)("h2", {
                    className: (0, a.A)(
                      "text-semibold font-cal text-emphasis text-center text-xl normal-nums",
                      t && "mt-6",
                      !d && "mb-8"
                    ),
                    children: o,
                  }),
                  d &&
                    (0, r.jsx)("div", {
                      className:
                        "text-default mb-8 mt-3 text-center text-sm font-normal leading-6",
                      children: d,
                    }),
                  u &&
                    c &&
                    (0, r.jsx)(s.$, { onClick: (e) => u(e), children: c }),
                  h,
                ],
              }),
            ],
          }),
        });
      }
    },
    43328: (e, t, n) => {
      n.d(t, { Y: () => u });
      var r = n(94791),
        a = n(7620),
        s = n(52167),
        i = n(80618),
        l = n(13330),
        o = n(94355);
      let d = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "common",
            t = (0, i.useAtomsContext)(),
            { i18n: n, t: r } = (0, s.Bd)(e),
            a = Object.keys(n).length > 0;
          return (null == t ? void 0 : t.clientId)
            ? { i18n: t.i18n, t: t.t, isLocaleReady: !0 }
            : { i18n: n, t: r, isLocaleReady: a };
        },
        c = new Map(),
        u = () => {
          let e = (0, a.useContext)(l.AppRouterI18nContext),
            t = (0, a.useContext)(o.CustomI18nContext),
            n = d();
          if (e) {
            let { translations: n, locale: a, ns: s } = null != t ? t : e,
              i = "".concat(a, "-").concat(s);
            if (!c.has(i)) {
              let e = (0, r.Q_)();
              e.init({ lng: a, resources: { [a]: { [s]: n } } }),
                c.set(i, { t: e.getFixedT(a, s), isLocaleReady: !0, i18n: e });
            }
            return c.get(i);
          }
          return (
            console.warn(
              "useLocale hook is being used outside of App Router - hence this hook will use a global, client-side i18n which can cause a small flicker"
            ),
            { t: n.t, isLocaleReady: n.isLocaleReady, i18n: n.i18n }
          );
        };
    },
    50441: (e, t, n) => {
      n.d(t, { A: () => a });
      var r = n(18842);
      function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.Q)(t.filter(Boolean).join(" "));
      }
    },
    54781: (e, t, n) => {
      n.d(t, { A: () => s });
      var r = n(27541),
        a = n(26682);
      function s() {
        let e = (0, r.usePathname)(),
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
          n = [
            "/upcoming",
            "/unconfirmed",
            "/recurring",
            "/cancelled",
            "/past",
          ].some((t) => (null == e ? void 0 : e.endsWith(t))),
          s = (0, a.O)(),
          i = !!(null == s ? void 0 : s.get("user")),
          l = !!(
            (null == s ? void 0 : s.get("user")) &&
            (null == s ? void 0 : s.get("type"))
          );
        return (t && !n) || i || l;
      }
    },
    72221: (e, t, n) => {
      n.d(t, { A: () => l, Tooltip: () => i });
      var r = n(54568),
        a = n(39145);
      n(7620);
      var s = n(50441);
      function i(e) {
        let {
            children: t,
            content: n,
            open: i,
            defaultOpen: l,
            onOpenChange: o,
            delayDuration: d,
            side: c = "top",
            ...u
          } = e,
          h = (0, r.jsx)(a.UC, {
            ...u,
            className: (0, s.A)(
              "calcom-tooltip",
              "top" === c && "-mt-7",
              "left" === c && "mr-2",
              "right" === c && "ml-2",
              "bg-inverted text-inverted relative z-50 rounded-md px-2 py-1 text-xs font-semibold shadow-lg",
              u.className && "".concat(u.className)
            ),
            side: c,
            align: "center",
            children: n,
          });
        return (0, r.jsxs)(a.bL, {
          delayDuration: d || 50,
          open: i,
          defaultOpen: l,
          onOpenChange: o,
          children: [
            (0, r.jsx)(a.l9, { asChild: !0, children: t }),
            (0, r.jsx)(a.ZL, { children: h }),
          ],
        });
      }
      let l = i;
    },
    80618: (e, t, n) => {
      n.d(t, { useAtomsContext: () => s });
      var r = n(7620);
      let a = (0, r.createContext)({
          clientId: "",
          accessToken: "",
          organizationId: 0,
          options: { refreshUrl: "", apiUrl: "" },
          error: "",
          getClient: () => {},
          isEmbed: !1,
        }),
        s = () => (0, r.useContext)(a);
    },
    94355: (e, t, n) => {
      n.r(t),
        n.d(t, { CustomI18nContext: () => s, CustomI18nProvider: () => i });
      var r = n(54568),
        a = n(7620);
      let s = (0, a.createContext)(null);
      function i(e) {
        let { children: t, translations: n, locale: i, ns: l } = e,
          o = (0, a.useMemo)(
            () => ({ translations: n, locale: i, ns: l }),
            [i, l]
          );
        return (0, r.jsx)(s.Provider, { value: o, children: t });
      }
    },
    95870: (e, t, n) => {
      n.d(t, { L: () => i, X: () => s });
      var r = n(7620);
      let a = (0, r.createContext)(null);
      function s() {
        let e = (0, r.useContext)(a);
        if (!e)
          throw Error(
            "Error: useOrgBranding was used outside of OrgBrandingProvider."
          );
        return e.orgBrand;
      }
      function i(e) {
        return (0, r.createElement)(a.Provider, { value: e.value }, e.children);
      }
    },
  },
]);
//# sourceMappingURL=21759-021d6441a199970a.js.map
