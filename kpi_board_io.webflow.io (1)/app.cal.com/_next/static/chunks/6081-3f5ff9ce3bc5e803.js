"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6081, 83160],
  {
    5353: (e, t, a) => {
      a.d(t, { s: () => n });
      var l = a(94120);
      let n = async (e) => await (0, l.bE)("/api/book/event", e);
    },
    5599: (e, t, a) => {
      a.r(t), a.d(t, { default: () => o });
      var l = a(54568),
        n = a(3825),
        r = a.n(n),
        i = a(66339),
        s = a(40459);
      function o(e) {
        return !i.UR || s.env.NEXT_PUBLIC_IS_E2E
          ? null
          : (0, l.jsx)(r(), { ...e, sitekey: i.UR, theme: "auto" });
      }
    },
    9102: (e, t, a) => {
      a.d(t, { z: () => n });
      var l = a(54568);
      let n = (0, a(7620).forwardRef)(function (e, t) {
        return (0,
        l.jsxs)("svg", { ref: t, className: e.className, id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 360 360", children: [(0, l.jsx)("title", { children: "Satoshis" }), (0, l.jsx)("rect", { fill: "currentColor", x: "201.48", y: "37.16", width: "23.49", height: "40.14", transform: "translate(21.82 -52.79) rotate(14.87)" }), (0, l.jsx)("rect", { fill: "currentColor", x: "135.03", y: "287.5", width: "23.49", height: "40.14", transform: "translate(83.82 -27.36) rotate(14.87)" }), (0, l.jsx)("rect", { fill: "currentColor", x: "184.27", y: "38.29", width: "23.49", height: "167.49", transform: "translate(364.26 -36.11) rotate(104.87)" }), (0, l.jsx)("rect", { fill: "currentColor", x: "168.36", y: "98.26", width: "23.49", height: "167.49", transform: "translate(402.22 54.61) rotate(104.87)" }), (0, l.jsx)("rect", { fill: "currentColor", x: "152.89", y: "156.52", width: "23.49", height: "167.49", transform: "translate(439.1 142.78) rotate(104.87)" })] });
      });
    },
    9689: (e, t, a) => {
      a.d(t, { j: () => l });
      class l extends Error {
        static fromRequest(e, t, a) {
          return new l({
            message: t.statusText,
            url: t.url,
            method: e.method,
            statusCode: t.status,
            data: a.data,
          });
        }
        constructor(e) {
          var t, a;
          super(
            null != (t = e.message)
              ? t
              : "HTTP Error ".concat(e.statusCode, " ")
          ),
            Object.setPrototypeOf(this, l.prototype),
            (this.name = l.prototype.constructor.name),
            (this.cause = e.cause),
            (this.statusCode = e.statusCode),
            (this.url = e.url),
            (this.method = e.method),
            (this.message =
              null != (a = e.message) ? a : "HTTP Error ".concat(e.statusCode)),
            (this.data = e.data),
            e.cause instanceof Error &&
              e.cause.stack &&
              (this.stack = e.cause.stack);
        }
      }
    },
    15835: (e, t, a) => {
      a.d(t, { l: () => o });
      var l = a(54568),
        n = a(7620),
        r = a(83631),
        i = a(70533),
        s = a(81380);
      let o = (0, n.forwardRef)((e, t) => {
        let { form: a, handleSubmit: n, ...o } = e;
        return (0, l.jsx)(r.Op, {
          ...a,
          children: (0, l.jsx)("form", {
            ref: t,
            onSubmit: (e) => {
              e.preventDefault(),
                e.stopPropagation(),
                a
                  .handleSubmit(n)(e)
                  .catch((e) => {
                    (0, s.P0)("".concat((0, i.LI)(e).message), "error");
                  });
            },
            ...o,
            children: e.children,
          }),
        });
      });
    },
    16853: (e, t, a) => {
      a.d(t, { R: () => i });
      var l = a(54568),
        n = a(8949),
        r = a(9102);
      function i(e) {
        let { className: t, currency: a } = e;
        return "BTC" !== a
          ? (0, l.jsx)(n.A, { name: "credit-card", className: t })
          : (0, l.jsx)(r.z, { className: t });
      }
    },
    17293: (e, t, a) => {
      a.d(t, { U: () => n });
      let l = [
          "amie",
          "autocheckin",
          "bolna",
          "chatbase",
          "clic",
          "deel",
          "elevenlabs",
          "granola",
          "greetmate-ai",
          "lindy",
          "linear",
          "millis-ai",
          "monobot",
          "retell-ai",
          "synthflow",
          "telli",
          "vimcal",
          "wordpress",
          "zapier",
        ],
        n = (e) => l.includes(e);
    },
    19390: (e, t, a) => {
      a.d(t, { W: () => l });
      var l = (function (e) {
        return (
          (e.ACCOUNTS_STEP = "accounts"),
          (e.EVENT_TYPES_STEP = "event-types"),
          (e.CONFIGURE_STEP = "configure"),
          e
        );
      })({});
    },
    20843: (e, t, a) => {
      a.d(t, {
        Cf: () => h,
        Es: () => g,
        HM: () => p,
        c7: () => f,
        lG: () => m,
        zM: () => v,
      });
      var l = a(54568),
        n = a(39214),
        r = a(58793),
        i = a(7620),
        s = a(43328),
        o = a(50441),
        d = a(18511),
        u = a(8949);
      let c = (0, r.F)(
        "fadeIn bg-default scroll-bar fixed left-1/2 top-1/2 z-50 w-[95vw] m-auto -translate-x-1/2 -translate-y-1/2 rounded-2xl text-left shadow-xl focus-visible:outline-none sm:align-middle",
        {
          variants: {
            size: {
              xl: "px-8 pt-8 sm:max-w-[90rem]",
              lg: "px-8 pt-8 sm:max-w-[70rem]",
              md: "px-8 pt-8 sm:max-w-[48rem]",
              default: "px-8 pt-8 sm:max-w-[35rem]",
            },
          },
          defaultVariants: { size: "default" },
        }
      );
      function m(e) {
        let { children: t, ...a } = e;
        return (0, l.jsx)(n.bL, { ...a, children: t });
      }
      let h = i.forwardRef((e, t) => {
        let {
          children: a,
          title: r,
          Icon: i,
          enableOverflow: s,
          forceOverlayWhenNoModal: d,
          type: m = "creation",
          preventCloseOnOutsideClick: h,
          ...g
        } = e;
        return (0, l.jsxs)(n.ZL, {
          children: [
            d
              ? (0, l.jsx)("div", {
                  className:
                    "fadeIn fixed inset-0 z-50  bg-neutral-800 bg-opacity-70 transition-opacity",
                })
              : (0, l.jsx)(n.hJ, {
                  className:
                    "fadeIn fixed inset-0 z-50 bg-neutral-800 bg-opacity-70 transition-opacity dark:bg-opacity-80",
                }),
            (0, l.jsxs)(n.UC, {
              ...g,
              onPointerDownOutside: (e) => {
                h && e.preventDefault();
              },
              className: (0, o.A)(
                c({ size: g.size }),
                "max-h-[95vh]",
                s ? "overflow-y-auto" : "overflow-visible",
                "".concat(g.className || "")
              ),
              ref: t,
              children: [
                "creation" === m &&
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(f, { title: r, subtitle: g.description }),
                      (0, l.jsx)("div", {
                        "data-testid": "dialog-creation",
                        className: "flex flex-col",
                        children: a,
                      }),
                    ],
                  }),
                "confirmation" === m &&
                  (0, l.jsxs)("div", {
                    className: "flex",
                    children: [
                      i &&
                        (0, l.jsx)("div", {
                          className:
                            "bg-emphasis flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full",
                          children: (0, l.jsx)(u.A, {
                            name: i,
                            className: "text-emphasis h-4 w-4",
                          }),
                        }),
                      (0, l.jsxs)("div", {
                        className: "ml-4 flex-grow",
                        children: [
                          (0, l.jsx)(f, { title: r, subtitle: g.description }),
                          (0, l.jsx)("div", {
                            "data-testid": "dialog-confirmation",
                            children: a,
                          }),
                        ],
                      }),
                    ],
                  }),
                !m && a,
              ],
            }),
          ],
        });
      });
      function f(e) {
        return e.title
          ? (0, l.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, l.jsx)("h2", {
                  "data-testid": "dialog-title",
                  className:
                    "leading-20 text-semibold text-emphasis font-cal mb-1 text-xl",
                  id: "modal-title",
                  children: e.title,
                }),
                e.subtitle &&
                  (0, l.jsx)("p", {
                    className: "text-subtle text-sm",
                    "data-testid": "dialog-subtitle",
                    children: e.subtitle,
                  }),
              ],
            })
          : null;
      }
      function g(e) {
        return (0, l.jsxs)("div", {
          className: (0, o.A)(
            "bg-muted border-muted bottom-0 -mx-8 mt-10 rounded-b-2xl border",
            (null == e ? void 0 : e.noSticky) ? "" : "sticky",
            e.className
          ),
          children: [
            e.showDivider &&
              (0, l.jsx)("div", {
                "data-testid": "divider",
                className: "border-subtle border-t",
              }),
            (0, l.jsx)("div", {
              className: (0, o.A)(
                "flex justify-end space-x-2 px-8 py-4 font-sans rtl:space-x-reverse"
              ),
              children: e.children,
            }),
          ],
        });
      }
      h.displayName = "DialogContent";
      let v = i.forwardRef((e, t) => (0, l.jsx)(n.l9, { ...e, ref: t }));
      function p(e) {
        let { t } = (0, s.Y)(),
          { className: a, ...r } = e;
        return (0, l.jsx)(n.bm, {
          asChild: !0,
          ...e.dialogCloseProps,
          children: (0, l.jsx)(d.$, {
            "data-testid": e["data-testid"] || "dialog-rejection",
            color: e.color || "minimal",
            className: (0, o.A)("destructive" === e.color && "destructive", a),
            ...r,
            children: e.children ? e.children : t("close"),
          }),
        });
      }
      v.displayName = "DialogTrigger";
    },
    21513: (e, t, a) => {
      a.d(t, { A: () => s });
      var l = a(54568),
        n = a(300);
      a(7620);
      var r = a(77387),
        i = a(54135);
      function s(e) {
        let { children: t } = e;
        return (0, l.jsx)(r.ErrorBoundary, {
          fallbackRender: (e) => {
            let { error: t, resetErrorBoundary: a } = e;
            return (0, l.jsx)(i.M, {
              reset: a,
              error: t,
              message: "".concat(t),
              displayDebug: !0,
            });
          },
          onError: (e, t) => {
            console.error(e), (0, n.xQ)(e, t);
          },
          children: t,
        });
      }
    },
    24478: (e, t, a) => {
      a.d(t, { R: () => o });
      var l = a(54568),
        n = a(36515),
        r = a(43328),
        i = a(82441),
        s = a(37934);
      function o(e) {
        let { t } = (0, r.Y)(),
          a = e.orgSlug || e.teamSlug;
        return (0, l.jsx)("div", {
          className: "m-8 flex items-center justify-center",
          children: (0, l.jsx)(s.Y, {
            avatar: (0, l.jsx)(i.e, {
              alt: null != a ? a : "",
              imageSrc: (0, n.h)(e.logoUrl, a),
              size: "lg",
            }),
            headline: t("team_is_unpublished", {
              team: e.name,
              interpolation: { escapeValue: !1 },
            }),
            description: t(
              "".concat(
                e.orgSlug ? "org" : "team",
                "_is_unpublished_description"
              )
            ),
          }),
        });
      }
    },
    33784: (e, t, a) => {
      a.d(t, { c: () => r });
      var l = a(30996),
        n = a(66339);
      let r = (e) =>
        (null == e ? void 0 : e.avatarUrl)
          ? l.z.string().url().safeParse(e.avatarUrl).success
            ? e.avatarUrl
            : n.Db + e.avatarUrl
          : n.Db + n.pD;
    },
    40615: (e, t, a) => {
      a.d(t, { l: () => u });
      var l = a(54568),
        n = a(39214),
        r = a(27541),
        i = a(7620),
        s = a(83160),
        o = a(26682),
        d = a(20843);
      function u(e) {
        return (0, s.X)()
          ? (0, l.jsx)(n.lG, { ...e })
          : (0, l.jsx)(c, { ...e });
      }
      function c(e) {
        let t = (0, r.useRouter)(),
          a = (0, r.usePathname)(),
          n = new URLSearchParams((0, o.O)().toString()),
          { children: s, name: u, ...c } = e,
          [m, h] = (0, i.useState)(c.open ? "OPEN" : "CLOSED"),
          f = n.get("dialog") === u;
        if (u) {
          let l = ["dialog", ...(e.clearQueryParamsOnClose || [])];
          (c.onOpenChange = (r) => {
            e.onOpenChange && e.onOpenChange(r),
              r
                ? n.set("dialog", u)
                : (l.forEach((e) => {
                    n.delete(e);
                  }),
                  t.push("".concat(a, "?").concat(n.toString()))),
              h(r ? "OPEN" : "CLOSING");
          }),
            "CLOSED" === m && f && h("OPEN"),
            "CLOSING" !== m || f || h("CLOSED"),
            "open" in c || (c.open = "OPEN" === m);
        }
        return (0, l.jsx)(d.lG, { ...c, children: s });
      }
    },
    41557: (e, t, a) => {
      a.d(t, { A: () => l });
      let l = (e) => {
        (window.top ? window.top.location : window.location).href = e;
      };
    },
    47586: (e, t, a) => {
      a.d(t, { UI: () => u });
      var l = a(27541),
        n = a(24805),
        r = a(26559);
      function i(e, t) {
        return t.reduce(
          (e, t) => ("object" == typeof e && null !== e ? e[t] : void 0),
          e
        );
      }
      var s = a(26682),
        o = a(41557);
      function d(e) {
        let { query: t, searchParams: a, filterInternalParams: l = !1 } = e,
          n = new URLSearchParams(),
          r = new Set(["embed", "layout", "embedType", "ui.color-scheme"]),
          i = new Set(["overlayCalendar"]);
        function s(e) {
          return !!l && (r.has(e) || i.has(e));
        }
        return (
          a &&
            a.forEach((e, t) => {
              s(t) || n.append(t, e);
            }),
          Object.entries(t).forEach((e) => {
            let [t, a] = e;
            null != a && (s(t) || n.append(t, String(a)));
          }),
          n
        );
      }
      let u = () => {
        let e = (0, l.useRouter)(),
          t = (0, s.O)(),
          a = (0, r.hA)();
        return (l) => {
          var r;
          let {
            successRedirectUrl: s,
            query: u,
            booking: c,
            forwardParamsSuccessRedirect: m,
          } = l;
          if (((u = { ...u, "cal.rerouting": t.get("cal.rerouting") }), s)) {
            let e = new URL(s);
            if (!m) return void (0, o.A)(e.toString());
            let l = ((e) => {
              var t;
              let a = [
                  "title",
                  "description",
                  "startTime",
                  "endTime",
                  "location",
                  "attendees",
                  "user",
                  "responses",
                ],
                l = Object.keys(e)
                  .filter((e) => a.includes(e))
                  .reduce(
                    (t, a) =>
                      "responses" === a
                        ? (function (e, t) {
                            let a = { ...t },
                              l = i(e.responses, ["phone"]),
                              n = i(e.responses, ["name", "firstName"]),
                              r = i(e.responses, ["name", "lastName"]),
                              s = i(e.responses, ["name"]);
                            return (
                              l && (a.phone = l),
                              n && (a.attendeeFirstName = n),
                              r
                                ? (a.attendeeLastName = r)
                                : s &&
                                  "string" == typeof s &&
                                  (a.attendeeName = s),
                              a
                            );
                          })(e, t)
                        : "user" === a
                        ? (function (e, t) {
                            var a;
                            if (null == (a = e.user) ? void 0 : a.name) {
                              let a = (0, n.A)(e.startTime)
                                .tz(e.user.timeZone)
                                .format();
                              return {
                                ...t,
                                hostName: [...(t.hostName || []), e.user.name],
                                hostStartTime: a,
                              };
                            }
                            return t;
                          })(e, t)
                        : "attendees" === a
                        ? (function (e, t) {
                            var a, l;
                            if (
                              !Array.isArray(e.attendees) ||
                              0 === e.attendees.length
                            )
                              return t;
                            let r =
                                (null == (a = e.attendees[0])
                                  ? void 0
                                  : a.name) || null,
                              i =
                                (null == (l = e.attendees[0])
                                  ? void 0
                                  : l.timeZone) || "UTC",
                              s = (0, n.A)(e.startTime).tz(i).format(),
                              { hostNames: o, guestEmails: d } = e.attendees
                                .slice(1)
                                .reduce(
                                  (e, t) => (
                                    t.name
                                      ? e.hostNames.push(t.name)
                                      : t.email && e.guestEmails.push(t.email),
                                    e
                                  ),
                                  { hostNames: [], guestEmails: [] }
                                );
                            return {
                              ...t,
                              attendeeName: r,
                              attendeeStartTime: s,
                              hostName: [...(t.hostName || []), ...o],
                              guestEmails: d.length > 0 ? d : void 0,
                            };
                          })(e, t)
                        : { ...t, [a]: e[a] },
                    { uid: e.uid }
                  );
              return {
                ...Object.fromEntries(
                  Object.entries(l).map((e) => {
                    let [t, a] = e;
                    return Array.isArray(a)
                      ? [t, a.join(", ")]
                      : "object" == typeof a && null !== a
                      ? [t, void 0]
                      : [t, a];
                  })
                ),
                hostName: null == (t = l.hostName) ? void 0 : t.join(", "),
                attendeeName: l.attendeeName || void 0,
                hostStartTime: l.hostStartTime || void 0,
                attendeeStartTime: l.attendeeStartTime || void 0,
              };
            })(c);
            return (
              d({
                query: { ...u, ...l, isEmbed: a },
                searchParams: new URLSearchParams(t.toString()),
                filterInternalParams: !0,
              }).forEach((t, a) => {
                e.searchParams.append(a, t);
              }),
              void (0, o.A)(e.toString())
            );
          }
          let h = d({
            query: u,
            searchParams: new URLSearchParams(
              t
                ? {
                    "flag.coep": null != (r = t.get("flag.coep")) ? r : "false",
                  }
                : void 0
            ),
          });
          return e.push(
            "/booking/"
              .concat(c.uid)
              .concat(a ? "/embed" : "", "?")
              .concat(h.toString())
          );
        };
      };
    },
    53114: (e, t, a) => {
      a.d(t, { Z: () => i });
      var l = a(54568),
        n = a(50441),
        r = a(82441);
      let i = function (e) {
        let t = e.items.length,
          a = e.truncateAfter || 4,
          i = e.items.filter((e) => e.image).slice(0, a),
          s = t - i.length;
        return i.length
          ? (0, l.jsxs)("ul", {
              className: (0, n.A)("flex items-center", e.className),
              children: [
                i.map((t, a) =>
                  (0, l.jsx)(
                    "li",
                    {
                      className: "-mr-1 inline-block",
                      children: (0, l.jsx)(r.e, {
                        "data-testid": "avatar",
                        className: "border-subtle",
                        imageSrc: t.image,
                        title: t.title,
                        alt: t.alt || "",
                        size: e.size,
                        href: t.href,
                      }),
                    },
                    a
                  )
                ),
                s > 0 &&
                  (0, l.jsx)("li", {
                    className: (0, n.A)(
                      "bg-inverted relative -mr-1 inline-flex justify-center  overflow-hidden rounded-full",
                      "sm" === e.size ? "min-w-6 h-6" : "min-w-16 h-16"
                    ),
                    children: (0, l.jsxs)("span", {
                      className: (0, n.A)(
                        " text-inverted m-auto flex h-full w-full items-center justify-center text-center",
                        "sm" === e.size ? "text-[12px]" : "text-2xl"
                      ),
                      children: ["+", e.hideTruncatedAvatarsCount ? null : s],
                    }),
                  }),
              ],
            })
          : (0, l.jsx)(l.Fragment, {});
      };
    },
    54135: (e, t, a) => {
      a.d(t, { M: () => o });
      var l = a(54568);
      a(7620), a(62117);
      var n = a(9689),
        r = a(18511);
      let i = { displayDebug: !1 },
        s = (e) => {
          var t;
          let { error: a } = e,
            r = [
              ["error.message", null == a ? void 0 : a.message],
              ["error.name", null == a ? void 0 : a.name],
              ["error.class", a instanceof Error ? a.constructor.name : void 0],
              ["http.url", a instanceof n.j ? a.url : void 0],
              ["http.status", a instanceof n.j ? a.statusCode : void 0],
              [
                "http.cause",
                a instanceof n.j
                  ? null == (t = a.cause)
                    ? void 0
                    : t.message
                  : void 0,
              ],
              ["error.stack", a instanceof Error ? a.stack : void 0],
            ];
          return (0, l.jsx)("div", {
            className: "bg-default overflow-hidden shadow sm:rounded-lg",
            children: (0, l.jsx)("div", {
              className: "border-subtle border-t px-4 py-5 sm:p-0",
              children: (0, l.jsx)("dl", {
                className: "sm:divide-subtle sm:divide-y",
                children: r.map((e) => {
                  let [t, a] = e;
                  if (void 0 !== a)
                    return (0, l.jsxs)(
                      "div",
                      {
                        className:
                          "py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5",
                        children: [
                          (0, l.jsx)("dt", {
                            className: "text-emphasis text-sm font-bold",
                            children: t,
                          }),
                          (0, l.jsx)("dd", {
                            className:
                              "text-emphasis mt-1 text-sm sm:col-span-2 sm:mt-0",
                            children: a,
                          }),
                        ],
                      },
                      t
                    );
                }),
              }),
            }),
          });
        },
        o = (e) => {
          let {
            message: t,
            statusCode: a,
            error: n,
            displayDebug: o,
          } = { ...i, ...e };
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("div", {
                className: "bg-subtle flex h-screen",
                children: (0, l.jsxs)("div", {
                  className:
                    "rtl: bg-default m-auto rounded-md p-10 text-right ltr:text-left",
                  children: [
                    (0, l.jsx)("h1", {
                      className: "font-cal text-emphasis text-6xl",
                      children: a,
                    }),
                    (0, l.jsx)("h2", {
                      className:
                        "text-emphasis mt-6 max-w-2xl text-2xl font-medium",
                      children: "It's not you, it's us.",
                    }),
                    (0, l.jsx)("p", {
                      className: "text-default mb-6 mt-4 max-w-2xl text-sm",
                      children:
                        "Something went wrong on our end. Get in touch with our support team, and we'll get it fixed right away for you.",
                    }),
                    (0, l.jsxs)("div", {
                      className: "mb-8 flex flex-col",
                      children: [
                        (0, l.jsx)("p", {
                          className: "text-default mb-4 max-w-2xl text-sm",
                          children:
                            "Please provide the following text when contacting support to better help you:",
                        }),
                        (0, l.jsx)("pre", {
                          className:
                            "bg-emphasis text-emphasis w-full max-w-2xl whitespace-normal break-words rounded-md p-4",
                          children: t,
                        }),
                      ],
                    }),
                    (0, l.jsx)(r.$, {
                      href: "mailto:support@cal.com",
                      children: "Contact Support",
                    }),
                    (0, l.jsx)(r.$, {
                      color: "secondary",
                      className: "ml-2",
                      onClick: () => {
                        var t;
                        window.location.reload(),
                          null == (t = e.reset) || t.call(e);
                      },
                      children: "Try again",
                    }),
                  ],
                }),
              }),
              o &&
                (0, l.jsx)("div", {
                  className: "flex-wrap",
                  children: (0, l.jsx)(s, { error: n }),
                }),
            ],
          });
        };
    },
    56163: (e, t, a) => {
      a.d(t, { s: () => n });
      var l = a(50441);
      function n(e) {
        let { isEmbed: t } = e;
        return (0, l.A)(
          "flex h-full items-center justify-center",
          !t && "min-h-[calc(100dvh)]"
        );
      }
    },
    65151: (e, t, a) => {
      a.d(t, { O: () => h, u: () => c });
      var l = a(54568),
        n = a(96639),
        r = a(7620),
        i = a(43328),
        s = a(50441),
        o = a(37934),
        d = a(8949),
        u = a(73817);
      function c() {
        var e, t;
        let a = (0, r.useRef)(null),
          [l, n] = (0, r.useState)({ left: !1, right: !1 });
        return (
          (0, r.useEffect)(() => {
            let e = a.current;
            e &&
              n({
                left: !(e.scrollLeft <= 0),
                right: !(e.scrollWidth <= e.clientWidth + e.scrollLeft),
              });
          }, [
            null == (e = a.current) ? void 0 : e.scrollWidth,
            null == (t = a.current) ? void 0 : t.clientWidth,
          ]),
          {
            ref: a,
            calculateScroll: (e) => {
              let t = e.currentTarget,
                a = t.scrollWidth <= t.clientWidth + t.scrollLeft + 1;
              n({ left: t.scrollLeft > 0, right: !a });
            },
            leftVisible: l.left,
            rightVisible: l.right,
          }
        );
      }
      function m(e) {
        let {
            selectedCategory: t,
            categories: a,
            searchText: n,
            onCategoryChange: r,
          } = e,
          { t: o } = (0, i.Y)(),
          { ref: u, calculateScroll: m, leftVisible: h, rightVisible: f } = c();
        return (0, l.jsxs)("div", {
          className:
            "relative mb-4 flex flex-col justify-between lg:flex-row lg:items-center",
          children: [
            (0, l.jsx)("h2", {
              className:
                "text-emphasis hidden text-base font-semibold leading-none sm:block",
              children: n
                ? o("search")
                : o("category_apps", {
                    category:
                      (t && t[0].toUpperCase() + t.slice(1)) || o("all"),
                  }),
            }),
            h &&
              (0, l.jsxs)("button", {
                onClick: () => {
                  u.current && (u.current.scrollLeft -= 100);
                },
                className: "absolute bottom-0 flex  lg:left-1/2",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "bg-default flex h-12 w-5 items-center justify-end",
                    children: (0, l.jsx)(d.A, {
                      name: "chevron-left",
                      className: "text-subtle h-4 w-4",
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "to-default flex h-12 w-5 bg-gradient-to-l from-transparent",
                  }),
                ],
              }),
            (0, l.jsxs)("ul", {
              className:
                "no-scrollbar mt-3 flex max-w-full space-x-1 overflow-x-auto lg:mt-0 lg:max-w-[50%]",
              onScroll: (e) => m(e),
              ref: u,
              children: [
                (0, l.jsx)("li", {
                  onClick: () => {
                    r(null);
                  },
                  className: (0, s.A)(
                    null === t
                      ? "bg-emphasis text-default"
                      : "bg-muted text-emphasis",
                    "hover:bg-emphasis min-w-max rounded-md px-4 py-2.5 text-sm font-medium transition hover:cursor-pointer"
                  ),
                  children: o("all"),
                }),
                a.map((e, a) =>
                  (0, l.jsx)(
                    "li",
                    {
                      onClick: () => {
                        t === e ? r(null) : r(e);
                      },
                      className: (0, s.A)(
                        t === e
                          ? "bg-emphasis text-default"
                          : "bg-muted text-emphasis",
                        "hover:bg-emphasis rounded-md px-4 py-2.5 text-sm font-medium transition hover:cursor-pointer"
                      ),
                      children:
                        "crm" === e
                          ? e.toUpperCase()
                          : e[0].toUpperCase() + e.slice(1),
                    },
                    a
                  )
                ),
              ],
            }),
            f &&
              (0, l.jsxs)("button", {
                onClick: () => {
                  u.current && (u.current.scrollLeft += 100);
                },
                className: "absolute bottom-0 right-0 flex ",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "to-default flex h-12 w-5 bg-gradient-to-r from-transparent",
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "bg-default flex h-12 w-5 items-center justify-end",
                    children: (0, l.jsx)(d.A, {
                      name: "chevron-right",
                      className: "text-subtle h-4 w-4",
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      function h(e) {
        let { apps: t, searchText: a, categories: s, userAdminTeams: d } = e,
          { t: c } = (0, i.Y)(),
          [h, f] = (0, r.useState)(null),
          [g, v] = (0, n.Q)(),
          p = t
            .filter(
              (e) =>
                null === h ||
                (e.categories ? e.categories.includes(h) : e.category === h)
            )
            .filter((e) => !a || e.name.toLowerCase().includes(a.toLowerCase()))
            .sort(function (e, t) {
              return e.name < t.name ? -1 : +(e.name > t.name);
            });
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)(m, {
              selectedCategory: h,
              searchText: a,
              categories: s,
              onCategoryChange: (e) => {
                f(e && "string" == typeof e && s.includes(e) ? e : null);
              },
            }),
            p.length
              ? (0, l.jsxs)("div", {
                  className:
                    "grid gap-3 lg:grid-cols-4 [@media(max-width:1270px)]:grid-cols-3 [@media(max-width:500px)]:grid-cols-1 [@media(max-width:730px)]:grid-cols-1",
                  ref: g,
                  children: [
                    p.map((e) =>
                      (0, l.jsx)(
                        u.S,
                        {
                          app: e,
                          searchText: a,
                          credentials: e.credentials,
                          userAdminTeams: d,
                        },
                        e.name
                      )
                    ),
                    " ",
                  ],
                })
              : (0, l.jsx)(o.Y, {
                  Icon: "search",
                  headline: c("no_results"),
                  description: a ? (null == a ? void 0 : a.toString()) : "",
                }),
          ],
        });
      }
    },
    67403: (e, t, a) => {
      a.d(t, { w: () => aE });
      var l = a(54568),
        n = a(96006),
        r = a(27541),
        i = a(7620),
        s = a(95622),
        o = a(24805),
        d = a(26559),
        u = a(53442),
        c = a(96683),
        m = a(32405),
        h = a(60732),
        f = a(69885),
        g = a(5),
        v = a(80618);
      let p = () => {
        let e = (0, v.useAtomsContext)();
        return !!(
          (null == e ? void 0 : e.clientId) && (null == e ? void 0 : e.isEmbed)
        );
      };
      var x = a(19664),
        b = a.n(x),
        y = a(66339),
        j = a(43328);
      let w = (e) => {
        let { logoOnly: t, hasValidLicense: a } = e,
          { t: n } = (0, j.Y)(),
          r = (0, d.hA)();
        return (0, l.jsx)("div", {
          className: "p-2 text-center text-xs sm:text-right".concat(
            r ? " max-w-3xl" : ""
          ),
          children: (0, l.jsxs)(b(), {
            href: y.Ty,
            target: "_blank",
            className: "text-subtle",
            children: [
              !t &&
                (0, l.jsxs)(l.Fragment, { children: [n("powered_by"), " "] }),
              "Cal.com" !== y.C3 && a
                ? (0, l.jsx)("span", {
                    className:
                      "text-emphasis font-semibold opacity-50 hover:opacity-100",
                    children: y.C3,
                  })
                : (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("img", {
                      className: "-mt-px inline h-[10px] w-auto dark:invert",
                      src: "".concat("https://app.cal.com", "/api/logo"),
                      alt: "Cal.com Logo",
                    }),
                  }),
            ],
          }),
        });
      };
      var _ = a(62117),
        N = a(5599),
        k = a(14530),
        C = a(29207),
        E = a(79702),
        S = a(30996),
        T = a(12056),
        I = a(5818),
        A = a(64348),
        M = a(93961);
      let O = () => S.z.string().refine((e) => e.trim().length > 0);
      S.z
        .object({
          label: S.z.string(),
          value: T.Gt,
          isTextType: S.z.boolean().default(!1).optional(),
          systemOnly: S.z.boolean().default(!1).optional(),
          needsOptions: S.z.boolean().default(!1).optional(),
          supportsLengthCheck: S.z
            .object({ maxLength: S.z.number() })
            .optional(),
          supportsPricing: S.z.boolean().default(!1).optional(),
          optionsSupportPricing: S.z.boolean().default(!1).optional(),
          propsType: S.z.enum([
            "text",
            "textList",
            "select",
            "multiselect",
            "boolean",
            "objectiveWithInput",
            "variants",
          ]),
          variantsConfig: S.z
            .object({
              defaultVariant: S.z.string(),
              toggleLabel: S.z.string().optional(),
              variants: S.z.record(
                S.z.object({
                  label: S.z.string(),
                  fieldsMap: S.z.record(
                    S.z.object({
                      defaultLabel: S.z.string().optional(),
                      defaultPlaceholder: S.z.string().optional(),
                      canChangeRequirability: S.z
                        .boolean()
                        .default(!0)
                        .optional(),
                    })
                  ),
                })
              ),
              defaultValue: T.Ym.optional(),
            })
            .optional(),
        })
        .refine((e) => {
          if (!e.variantsConfig) return;
          let t = e.variantsConfig;
          if (!t.variants[t.defaultVariant])
            throw Error(
              "defaultVariant: ".concat(t.defaultVariant, " is not in variants")
            );
          return !0;
        }),
        S.z.array(T.cz);
      let D = {
          name: {
            preprocess: (e) => {
              var t;
              let a,
                { response: l, field: n } = e,
                r = I.C[n.type],
                i =
                  n.variant ||
                  (null == r || null == (t = r.variantsConfig)
                    ? void 0
                    : t.defaultVariant);
              if (!i)
                throw Error(
                  "`variant` must be there for the field with `variantsConfig`"
                );
              return (
                (a =
                  "firstAndLastName" !== i && "fullName" !== i
                    ? "fullName"
                    : i),
                (0, A.V)(a, l)
              );
            },
            superRefine: (e) => {
              var t;
              let {
                  field: a,
                  response: l,
                  isPartialSchema: n,
                  ctx: r,
                  m: i,
                } = e,
                s = S.z.string(),
                o = I.C[a.type],
                d =
                  a.variant ||
                  (null == o || null == (t = o.variantsConfig)
                    ? void 0
                    : t.defaultVariant);
              if (!d)
                throw Error(
                  "`variant` must be there for the field with `variantsConfig`"
                );
              let u = (0, M.z)(a);
              if (!u)
                throw Error("variantsConfig must be there for `name` field");
              let c = u.variants[d].fields,
                m = ["text"];
              if (1 === c.length) {
                let e = c[0];
                if (m.includes(e.type)) {
                  (e.required && !n ? O() : s).safeParse(l).success ||
                    r.addIssue({
                      code: S.z.ZodIssueCode.custom,
                      message: i("Invalid string"),
                    });
                  return;
                }
                throw Error(
                  "Unsupported field.type with variants: ".concat(e.type)
                );
              }
              c.forEach((e) => {
                let t = e.required && !n ? O() : s;
                if (!m.includes(e.type))
                  throw Error(
                    "Unsupported field.type with variants: ".concat(e.type)
                  );
                if (
                  e.required &&
                  (n ||
                    l[e.name] ||
                    r.addIssue({
                      code: S.z.ZodIssueCode.custom,
                      message: i("error_required_field"),
                    }),
                  !t.safeParse(l[e.name]).success)
                )
                  return void r.addIssue({
                    code: S.z.ZodIssueCode.custom,
                    message: i("Invalid string"),
                  });
              });
            },
          },
          textarea: {
            preprocess: (e) => {
              let { response: t } = e;
              return t.trim();
            },
            superRefine: (e) => {
              var t, a, l;
              let { field: n, response: r, ctx: i, m: s } = e,
                o = I.C[n.type],
                d = null != r ? r : "",
                u =
                  null != (a = n.maxLength)
                    ? a
                    : null == (t = o.supportsLengthCheck)
                    ? void 0
                    : t.maxLength,
                c = null != (l = n.minLength) ? l : 0;
              if (!u) throw Error("maxLength must be there for textarea field");
              let m = d.length > u,
                h = d.length < c;
              return m
                ? void i.addIssue({
                    code: S.z.ZodIssueCode.custom,
                    message: s("Max. ".concat(u, " characters allowed")),
                  })
                : h
                ? void i.addIssue({
                    code: S.z.ZodIssueCode.custom,
                    message: s("Min. ".concat(c, " characters required")),
                  })
                : void 0;
            },
          },
          url: {
            preprocess: (e) => {
              let { response: t } = e;
              return t.trim();
            },
            superRefine: (e) => {
              let { response: t, ctx: a, m: l } = e,
                n = null != t ? t : "",
                r = S.z.string().url();
              if (n.match(/^https?:\/[^\/]/))
                return void a.addIssue({
                  code: S.z.ZodIssueCode.custom,
                  message: l("url_validation_error"),
                });
              if (!r.safeParse(n).success) {
                if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(n)) {
                  let e = "https://".concat(n);
                  if (r.safeParse(e).success) return;
                }
                a.addIssue({
                  code: S.z.ZodIssueCode.custom,
                  message: l("url_validation_error"),
                });
              }
            },
          },
        },
        R = S.z.union([
          S.z.string(),
          S.z.boolean(),
          S.z.string().array(),
          S.z.object({ optionValue: S.z.string(), value: S.z.string() }),
          S.z.record(S.z.string()),
        ]),
        L = S.Ay.record(R),
        P = (e) => (e ? e.replace(/^ +/, "+") : "");
      function U(e) {
        let {
            schema: t,
            bookingFields: a,
            isPartialSchema: l,
            view: n,
            checkOptional: r = !1,
          } = e,
          i = S.Ay.preprocess(
            (e) => {
              let t = S.Ay.record(S.Ay.any()).nullable().parse(e) || {},
                r = {};
              return a
                ? (a.forEach((e) => {
                    let a = t[e.name];
                    if (void 0 === a) return;
                    let i = e.views;
                    if (!("ALL_VIEWS" === n || !i || i.find((e) => e.id === n)))
                      return;
                    let s = D[e.type];
                    if (s) {
                      r[e.name] = s.preprocess({
                        response: a,
                        isPartialSchema: l,
                        field: e,
                      });
                      return;
                    }
                    if ("boolean" === e.type)
                      r[e.name] = "true" === a || !0 === a;
                    else if (
                      "multiemail" === e.type ||
                      "checkbox" === e.type ||
                      "multiselect" === e.type
                    )
                      r[e.name] = a instanceof Array ? a : [a];
                    else if ("radioInput" === e.type && "string" == typeof a) {
                      let t = { optionValue: "", value: "" };
                      try {
                        t = JSON.parse(a);
                      } catch (e) {}
                      let l = e.optionsInputs,
                        n = null == l ? void 0 : l[t.value];
                      n &&
                        "phone" === n.type &&
                        (t.optionValue = P(t.optionValue)),
                        (r[e.name] = t);
                    } else
                      "phone" === e.type ? (r[e.name] = P(a)) : (r[e.name] = a);
                  }),
                  { ...t, ...r })
                : t;
            },
            t.superRefine(async (e, t) => {
              if (!a) return;
              let i = a.find((e) => "attendeePhoneNumber" === e.name),
                s = null == i ? void 0 : i.hidden,
                o = a.find((e) => "email" === e.name);
              for (let i of ((null == o ? void 0 : o.hidden) &&
                !s &&
                (e.email = ""),
              a)) {
                var d, u, c, m;
                let a = e[i.name],
                  s = S.Ay.string(),
                  o = l ? S.Ay.string() : S.Ay.string().refine(T.tu),
                  h = l
                    ? S.Ay.string()
                    : S.Ay.string().refine(async (e) => (0, E.g)(e)),
                  f = (e) => "{".concat(i.name, "}").concat(e),
                  g = i.views,
                  v = "ALL_VIEWS" === n || !g || g.find((e) => e.id === n),
                  p = i.hidden,
                  x =
                    null != (u = null == (d = i.options) ? void 0 : d.length)
                      ? u
                      : 0;
                i.hideWhenJustOneOption && (p = p || x <= 1);
                let b = !1;
                if (
                  (!p && v && (b = r || !!i.required),
                  (l || !b) && void 0 === a)
                )
                  continue;
                if (b && !l && !a)
                  return void t.addIssue({
                    code: S.Ay.ZodIssueCode.custom,
                    message: f("error_required_field"),
                  });
                if ("email" === i.type) {
                  if (!i.hidden && (r || i.required)) {
                    o.safeParse(a).success ||
                      t.addIssue({
                        code: S.Ay.ZodIssueCode.custom,
                        message: f("email_validation_error"),
                      }),
                      (
                        (null == (c = i.excludeEmails)
                          ? void 0
                          : c.split(",").map((e) => e.trim())) || []
                      ).find((e) => a.includes(e)) &&
                        t.addIssue({
                          code: S.Ay.ZodIssueCode.custom,
                          message: f(
                            "exclude_emails_match_found_error_message"
                          ),
                        });
                    let e =
                        (null == (m = i.requireEmails)
                          ? void 0
                          : m
                              .split(",")
                              .map((e) => e.trim())
                              .filter(Boolean)) || [],
                      l = e.find((e) => a.includes(e));
                    e.length > 0 &&
                      !l &&
                      t.addIssue({
                        code: S.Ay.ZodIssueCode.custom,
                        message: f(
                          "require_emails_no_match_found_error_message"
                        ),
                      });
                  }
                  continue;
                }
                let y = D[i.type];
                if (y) {
                  y.superRefine({
                    response: a,
                    ctx: t,
                    m: f,
                    field: i,
                    isPartialSchema: l,
                  });
                  continue;
                }
                if ("multiemail" === i.type) {
                  let l = o.array().safeParse(a);
                  if (b && (!a || 0 === a.length)) {
                    t.addIssue({
                      code: S.Ay.ZodIssueCode.custom,
                      message: f("error_required_field"),
                    });
                    continue;
                  }
                  if (!l.success) {
                    if ("guests" === i.name && a.every((e) => "" === e)) {
                      e[i.name] = [];
                      continue;
                    }
                    t.addIssue({
                      code: S.Ay.ZodIssueCode.custom,
                      message: f("email_validation_error"),
                    });
                    continue;
                  }
                  let n = l.data;
                  n.sort().some((e, a) => {
                    if (e === n[a + 1])
                      return (
                        t.addIssue({
                          code: S.Ay.ZodIssueCode.custom,
                          message: f("duplicate_email"),
                        }),
                        !0
                      );
                  });
                  continue;
                }
                if ("multiselect" === i.type) {
                  if (b && (!a || 0 === a.length)) {
                    t.addIssue({
                      code: S.Ay.ZodIssueCode.custom,
                      message: f("error_required_field"),
                    });
                    continue;
                  }
                  s.array().safeParse(a).success ||
                    t.addIssue({
                      code: S.Ay.ZodIssueCode.custom,
                      message: f("Invalid array of strings"),
                    });
                  continue;
                }
                if ("checkbox" === i.type) {
                  s.array().safeParse(a).success ||
                    t.addIssue({
                      code: S.Ay.ZodIssueCode.custom,
                      message: f("Invalid array of strings"),
                    });
                  continue;
                }
                if ("phone" === i.type) {
                  let e = b || (a && "" !== a.trim());
                  i.hidden ||
                    !e ||
                    (await h.safeParseAsync(a)).success ||
                    t.addIssue({
                      code: S.Ay.ZodIssueCode.custom,
                      message: f("invalid_number"),
                    });
                  continue;
                }
                if ("boolean" === i.type) {
                  S.Ay.boolean().safeParse(a).success ||
                    t.addIssue({
                      code: S.Ay.ZodIssueCode.custom,
                      message: f("Invalid Boolean"),
                    });
                  continue;
                }
                if ("radioInput" === i.type) {
                  if (i.optionsInputs) {
                    let e = null == a ? void 0 : a.optionValue,
                      l = i.optionsInputs[null == a ? void 0 : a.value],
                      n = null == l ? void 0 : l.type;
                    if (
                      ((b || (null != a && a.value)) && r) ||
                      ((null == l ? void 0 : l.required) && !e)
                    )
                      return void t.addIssue({
                        code: S.Ay.ZodIssueCode.custom,
                        message: f("error_required_field"),
                      });
                    e &&
                      "phone" === n &&
                      !(await h.safeParseAsync(e)).success &&
                      t.addIssue({
                        code: S.Ay.ZodIssueCode.custom,
                        message: f("invalid_number"),
                      });
                  }
                  continue;
                }
                if (
                  [
                    "address",
                    "text",
                    "select",
                    "number",
                    "radio",
                    "textarea",
                  ].includes(i.type)
                ) {
                  s.safeParse(a).success ||
                    t.addIssue({
                      code: S.Ay.ZodIssueCode.custom,
                      message: f("Invalid string"),
                    });
                  continue;
                }
                t.addIssue({
                  code: S.Ay.ZodIssueCode.custom,
                  message: "Can't parse unknown booking field type: ".concat(
                    i.type
                  ),
                });
              }
            })
          );
        return l
          ? i.catch(function (e) {
              return (
                console.error(
                  "Failed to preprocess query params, prefilling will be skipped",
                  null == e ? void 0 : e.error
                ),
                {}
              );
            })
          : i;
      }
      var V = a(89236),
        F = a(63036);
      let z = (e, t) => {
          requestAnimationFrame(() => {
            if (1 === e) return void t();
            requestAnimationFrame(() => z(e - 1, t));
          });
        },
        B = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = e.getBoundingClientRect().top;
          if ((e.scrollIntoView({ behavior: "smooth" }), !t)) return;
          let l = (() => {
            let e = navigator.userAgent.toLowerCase();
            return e.includes("safari") && !e.includes("chrome");
          })();
          z(2, () => {
            let t = e.getBoundingClientRect().top;
            if (l && a === t) {
              let t = e.getBoundingClientRect().top;
              null === d.ii ||
                void 0 === d.ii ||
                d.ii.fire("__scrollByDistance", { distance: t });
            }
          });
        };
      var Y = a(26682),
        W = a(50441),
        H = a(24478),
        G = a(5922),
        q = a(18684),
        Z = a(80766),
        J = a(54125),
        $ = a(56796);
      let X = (e) => {
        let {
            extraDays: t,
            limitHeight: a,
            showAvailableSeatsCount: n,
            schedule: r,
            isLoading: s,
            customClassNames: d,
            skipConfirmStep: u,
            seatsPerTimeSlot: c,
            onSubmit: m,
            unavailableTimeSlots: h,
            confirmButtonDisabled: f,
            confirmStepClassNames: g,
            onAvailableTimeSlotSelect: v,
            ...p
          } = e,
          x = (0, k.Mu)((e) => e.selectedDate),
          b = (0, k.Mu)((e) => e.setSeatedEventData),
          j = x || (0, o.A)().format("YYYY-MM-DD"),
          [w] = (0, k.Mu)((e) => [e.layout]),
          _ = w === T.G5.COLUMN_VIEW,
          N = (0, i.useRef)(null),
          { setTentativeSelectedTimeslots: C, tentativeSelectedTimeslots: E } =
            (0, k.Mu)((e) => ({
              setTentativeSelectedTimeslots: e.setTentativeSelectedTimeslots,
              tentativeSelectedTimeslots: e.tentativeSelectedTimeslots,
            })),
          S = (e) => {
            let {
              time: t,
              attendees: a,
              seatsPerTimeSlot: l,
              bookingUid: n,
            } = e;
            C([t]);
          },
          I = null == r ? void 0 : r.data,
          A = (0, F.k)(null == I ? void 0 : I.slots).filter(
            (e) => 0 >= (0, o.A)(x).diff(e, "day")
          ),
          M = (0, i.useMemo)(
            () => (t ? (A.length > 0 ? A.slice(0, t) : []) : [j]),
            [j, t, A]
          ),
          { slotsPerDay: O, toggleConfirmButton: D } = (0, Z.y)(
            M,
            null == I ? void 0 : I.slots
          ),
          R =
            "true" === (0, V.qn)("overlayCalendar") ||
            J.L.getItem("overlayCalendarSwitchDefault"),
          L = (0, i.useCallback)(
            (e, t, a, l) => {
              y.lw && (null == r || r.invalidate()),
                C([]),
                a &&
                  b({
                    seatsPerTimeSlot: a,
                    attendees: t,
                    bookingUid: l,
                    showAvailableSeatsCount: n,
                  }),
                v(e);
              let i = !h.includes(e);
              u && i && m(e);
            },
            [m, b, u, n, h, r, C, v]
          ),
          P = (0, i.useCallback)(
            (e, t) => {
              (R && t) || u
                ? D(e)
                : L(
                    e.time,
                    (null == e ? void 0 : e.attendees) || 0,
                    c,
                    e.bookingUid
                  );
            },
            [R, L, c, u, D]
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: (0, W.A)(
                "flex",
                "".concat(null == d ? void 0 : d.availableTimeSlotsContainer)
              ),
              children: s
                ? (0, l.jsx)("div", { className: "mb-3 h-8" })
                : O.length > 0 &&
                  O.map((e) =>
                    (0, l.jsx)(
                      $.p,
                      {
                        customClassNames: {
                          availableTimeSlotsHeaderContainer:
                            null == d
                              ? void 0
                              : d.availableTimeSlotsHeaderContainer,
                          availableTimeSlotsTitle:
                            null == d ? void 0 : d.availableTimeSlotsTitle,
                          availableTimeSlotsTimeFormatToggle:
                            null == d
                              ? void 0
                              : d.availableTimeSlotsTimeFormatToggle,
                        },
                        date: (0, o.A)(e.date),
                        showTimeFormatToggle: !_,
                        availableMonth:
                          (0, o.A)(x).format("MM") !==
                          (0, o.A)(e.date).format("MM")
                            ? (0, o.A)(e.date).format("MMM")
                            : void 0,
                      },
                      e.date
                    )
                  ),
            }),
            (0, l.jsxs)("div", {
              ref: N,
              className: (0, W.A)(
                a && "scroll-bar flex-grow overflow-auto md:h-[400px]",
                !a && "flex h-full w-full flex-row gap-4",
                "".concat(null == d ? void 0 : d.availableTimeSlotsContainer)
              ),
              children: [
                s &&
                  Array.from({ length: 1 + (null != t ? t : 0) }).map((e, t) =>
                    (0, l.jsx)(q.v, {}, t)
                  ),
                !s &&
                  O.length > 0 &&
                  O.map((e) =>
                    (0, l.jsx)(
                      "div",
                      {
                        className:
                          "scroll-bar h-full w-full overflow-y-auto overflow-x-hidden",
                        children: (0, l.jsx)(q.Y, {
                          className:
                            null == d ? void 0 : d.availableTimeSlotsContainer,
                          customClassNames:
                            null == d ? void 0 : d.availableTimes,
                          showTimeFormatToggle: !_,
                          onTimeSelect: L,
                          onTentativeTimeSelect: S,
                          unavailableTimeSlots: h,
                          slots: e.slots,
                          showAvailableSeatsCount: n,
                          skipConfirmStep: u,
                          seatsPerTimeSlot: c,
                          handleSlotClick: P,
                          confirmButtonDisabled: f,
                          confirmStepClassNames: g,
                          ...p,
                        }),
                      },
                      e.date
                    )
                  ),
              ],
            }),
          ],
        });
      };
      var Q = a(68452),
        K = a(84096),
        ee = a(86622),
        et = a(50293),
        ea = a(18511),
        el = a(37934),
        en = a(15835),
        er = a(34444);
      let ei = (e) => {
          let { date: t, timeFormat: a, timeZone: l, language: n } = e,
            r = new Date(t);
          return {
            date: new Intl.DateTimeFormat(n, {
              timeZone: l,
              dateStyle: "full",
            }).format(r),
            time: new Intl.DateTimeFormat(n, {
              timeZone: l,
              timeStyle: "short",
              hour12: a === er.Hg.TWELVE_HOUR,
            })
              .format(r)
              .toLowerCase(),
          };
        },
        es = (e) => {
          let t = ((e) => {
            let {
                date: t,
                duration: a,
                timeFormat: l,
                timeZone: n,
                language: r,
              } = e,
              i = new Date(t),
              s = a ? new Date(new Date(t).setMinutes(i.getMinutes() + a)) : i;
            return {
              date: new Intl.DateTimeFormat(r, {
                timeZone: n,
                dateStyle: "full",
              }).formatRange(i, s),
              time: new Intl.DateTimeFormat(r, {
                timeZone: n,
                timeStyle: "short",
                hour12: l === er.Hg.TWELVE_HOUR,
              })
                .formatRange(i, s)
                .toLowerCase(),
            };
          })(e);
          return (0, l.jsxs)(l.Fragment, {
            children: [t.date, (0, l.jsx)("br", {}), t.time],
          });
        },
        eo = (e) => {
          let t = ei(e);
          return (0, l.jsxs)(l.Fragment, { children: [t.date, ", ", t.time] });
        };
      var ed = a(40516),
        eu = a(83631),
        ec = a(52978),
        em = a(60924),
        eh = a(36401),
        ef = a(58348),
        eg = a(18918),
        ev = a(23538);
      let ep = (e) => {
        let {
            fields: t,
            locations: a,
            rescheduleUid: n,
            isDynamicGroupBooking: r,
            bookingData: i,
            isPaidEvent: s,
            paymentCurrency: o = "USD",
          } = e,
          { t: d, i18n: u } = (0, j.Y)(),
          { watch: c, setValue: m } = (0, eu.xW)(),
          h = c("responses.location"),
          f = n ? "reschedule" : "",
          g = (0, C.JH)((e) => e.isInstantMeeting),
          v = (e, t) =>
            ""
              .concat(e, " (")
              .concat(
                Intl.NumberFormat(u.language, {
                  style: "currency",
                  currency: o,
                }).format(t),
                ")"
              );
        return (0, l.jsx)("div", {
          children: t.map((e, t) => {
            if (g && "location" === e.name) return null;
            let o =
                ("system" === e.editable ||
                  "system-but-optional" === e.editable) &&
                !!n &&
                null !== i,
              u = "user-readonly" === e.editable || o,
              c = !!e.hidden,
              p = e.views;
            if (p && !p.find((e) => e.id === f)) return null;
            if (e.name === eg.G4.Enum.rescheduleReason) {
              if (null === i) return null;
              u = !1;
            }
            if (e.name === eg.G4.Enum.smsReminderNumber) {
              if ((null == h ? void 0 : h.value) === "phone")
                return (
                  m(
                    "responses.".concat(eg.G4.Enum.smsReminderNumber),
                    null == h ? void 0 : h.optionValue
                  ),
                  null
                );
              u = !1;
            }
            if (
              (e.name === eg.G4.Enum.guests &&
                ((u = !1), (c = !!r || !!e.hidden)),
              e.name === eg.G4.Enum.notes && null !== i)
            )
              return null;
            if (
              (e.name === eg.G4.Enum.location && (u = !1),
              e.name === eg.G4.Enum.location && "radioInput" === e.type)
            ) {
              if (!e.optionsInputs)
                throw Error("radioInput must have optionsInputs");
              let t = e.optionsInputs,
                l = (0, em.A)(a, d);
              l.forEach((e) => {
                let a = t[e.value];
                a && (a.placeholder = e.inputPlaceholder);
              }),
                (e.options = l.filter((e) => !!e));
            }
            if (null == e ? void 0 : e.options) {
              let t = (0, ec.aK)(),
                a = {};
              e.options.forEach((e) => {
                e.value in a ? a[e.value]++ : (a[e.value] = 1);
              }),
                (e.options = e.options.map((e) => ({
                  ...e,
                  value:
                    t.includes(e.value) && a[e.value] > 1 ? e.label : e.value,
                })));
            }
            let x = e;
            if (s) {
              var b, y;
              (null == (b = I.C[e.type]) ? void 0 : b.supportsPricing) &&
                (x = ((e) => {
                  var t;
                  if (
                    !(null == (t = I.C[e.type]) ? void 0 : t.supportsPricing) ||
                    !e.label ||
                    !e.price
                  )
                    return e;
                  let a =
                      "string" == typeof e.price
                        ? parseFloat(e.price)
                        : e.price,
                    l = v(e.label, a);
                  return {
                    ...e,
                    label: l,
                    ...(ef.W.includes(e.type) && e.labelAsSafeHtml
                      ? { labelAsSafeHtml: (0, ev.f)(l) }
                      : { labelAsSafeHtml: void 0 }),
                  };
                })(e)),
                (null == (y = I.C[e.type])
                  ? void 0
                  : y.optionsSupportPricing) &&
                  (x = ((e) => {
                    var t;
                    return (null == (t = I.C[e.type])
                      ? void 0
                      : t.optionsSupportPricing) && e.options
                      ? {
                          ...e,
                          options: e.options.map((e) => {
                            let t = e.price;
                            return t ? { ...e, label: v(e.label, t) } : e;
                          }),
                        }
                      : e;
                  })(x));
            }
            return (0, l.jsx)(
              eh.A,
              { className: "mb-4", field: { ...x, hidden: c }, readOnly: u },
              t
            );
          }),
        });
      };
      var ex = a(24141);
      let eb = () =>
          (0, l.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, l.jsx)(ex.rr, { className: "h-7 w-32" }),
              (0, l.jsx)(ex.rr, { className: "mt-2 h-7 w-full" }),
              (0, l.jsx)(ex.rr, { className: "mt-4 h-7 w-28" }),
              (0, l.jsx)(ex.rr, { className: "mt-2 h-7 w-full" }),
              (0, l.jsxs)("div", {
                className: "mt-12 flex h-7 w-full flex-row items-center gap-4",
                children: [
                  (0, l.jsx)(ex.rr, {
                    className: "inline h-4 w-4 rounded-full",
                  }),
                  (0, l.jsx)(ex.rr, { className: "inline h-7 w-32" }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "mt-2 flex h-7 w-full flex-row items-center gap-4",
                children: [
                  (0, l.jsx)(ex.rr, {
                    className: "inline h-4 w-4 rounded-full",
                  }),
                  (0, l.jsx)(ex.rr, { className: "inline h-7 w-28" }),
                ],
              }),
              (0, l.jsx)(ex.rr, { className: "mt-8 h-7 w-32" }),
              (0, l.jsx)(ex.rr, { className: "mt-2 h-7 w-full" }),
              (0, l.jsx)(ex.rr, { className: "mt-4 h-7 w-28" }),
              (0, l.jsx)(ex.rr, { className: "mt-2 h-7 w-full" }),
              (0, l.jsxs)("div", {
                className: "mt-6 flex flex-row gap-3",
                children: [
                  (0, l.jsx)(ex.rr, { className: "ml-auto h-8 w-20" }),
                  (0, l.jsx)(ex.rr, { className: "h-8 w-20" }),
                ],
              }),
            ],
          }),
        ey = (e) => {
          let {
              onCancel: t,
              eventQuery: a,
              onSubmit: n,
              errorRef: r,
              errors: s,
              loadingStates: o,
              renderConfirmNotVerifyEmailButtonCond: d,
              bookingForm: u,
              children: c,
              extraOptions: m,
              isVerificationCodeSending: h,
              isPlatform: f = !1,
              isTimeslotUnavailable: g,
              shouldRenderCaptcha: v,
              confirmButtonDisabled: x,
              classNames: w,
              timeslot: _,
            } = e,
            N = a.data,
            C = (0, k.Mu)((e) => e.setFormValues),
            E = (0, k.Mu)((e) => e.bookingData),
            S = (0, k.Mu)((e) => e.rescheduleUid),
            T = (0, k.Mu)((e) => e.username),
            I = (0, k.Mu)((e) => e.isInstantMeeting),
            A = p(),
            { timeFormat: M, timezone: O } = (0, ed.v)(),
            [D] = (0, i.useState)(null),
            { t: R, i18n: L } = (0, j.Y)(),
            P = (0, i.useMemo)(() => {
              if (!(null == N ? void 0 : N.price)) return !1;
              let e = (0, Q.C)(N);
              return (
                (null == N ? void 0 : N.price) > 0 &&
                !Number.isNaN(e.price) &&
                e.price > 0
              );
            }, [N]),
            U = (0, i.useMemo)(() => {
              var e;
              return (
                (N && (null == (e = (0, Q.C)(N)) ? void 0 : e.currency)) ||
                "USD"
              );
            }, [N]);
          if (a.isError)
            return (0, l.jsx)(et.F, {
              severity: "warning",
              message: R("error_booking_event"),
            });
          if (a.isPending || !a.data) return (0, l.jsx)(eb, {});
          if (!_)
            return (0, l.jsx)(el.Y, {
              headline: R("timeslot_missing_title"),
              description: R("timeslot_missing_description"),
              Icon: "calendar",
              buttonText: R("timeslot_missing_cta"),
              buttonOnClick: t,
            });
          if (!N)
            return (
              console.warn("No event type found for event", m),
              (0, l.jsx)(et.F, {
                severity: "warning",
                message: R("error_booking_event"),
              })
            );
          let V = u.watch("cfToken");
          return (0, l.jsxs)("div", {
            className: "flex h-full flex-col",
            children: [
              (0, l.jsxs)(en.l, {
                className: "flex h-full flex-col",
                onChange: () => {
                  C(u.getValues());
                },
                form: u,
                handleSubmit: n,
                noValidate: !0,
                children: [
                  (0, l.jsx)(ep, {
                    isDynamicGroupBooking: !!(T && T.indexOf("+") > -1),
                    fields: N.bookingFields,
                    locations: N.locations,
                    rescheduleUid: S || void 0,
                    bookingData: E,
                    isPaidEvent: P,
                    paymentCurrency: U,
                  }),
                  s.hasFormErrors || s.hasDataErrors
                    ? (0, l.jsx)("div", {
                        "data-testid": "booking-fail",
                        children: (0, l.jsx)(et.F, {
                          ref: r,
                          className: "my-2",
                          severity: "info",
                          title: R(S ? "reschedule_fail" : "booking_fail"),
                          message: ej({
                            globalError: s.formErrors,
                            dataError: s.dataErrors,
                            t: R,
                            responseVercelIdHeader: D,
                            timeFormat: M,
                            timezone: O,
                            language: L.language,
                          }),
                        }),
                      })
                    : g
                    ? (0, l.jsx)("div", {
                        "data-testid": "slot-not-allowed-to-book",
                        children: (0, l.jsx)(et.F, {
                          severity: "info",
                          title: R("unavailable_timeslot_title"),
                          message: (0, l.jsx)(K.A, {
                            t: R,
                            i18nKey: "timeslot_unavailable_book_a_new_time",
                            components: [
                              (0, l.jsx)(
                                "button",
                                {
                                  type: "button",
                                  className: "underline",
                                  onClick: t,
                                  children: "Please select a new time",
                                },
                                "please-select-a-new-time-button"
                              ),
                            ],
                          }),
                        }),
                      })
                    : null,
                  !f &&
                    (0, l.jsx)("div", {
                      className: "text-subtle my-3 w-full text-xs",
                      children: (0, l.jsx)(K.A, {
                        t: R,
                        i18nKey: "signing_up_terms",
                        components: [
                          (0, l.jsx)(
                            b(),
                            {
                              className: "text-emphasis hover:underline",
                              href: "".concat(y.gx),
                              target: "_blank",
                              children: "Terms",
                            },
                            "terms"
                          ),
                          (0, l.jsx)(
                            b(),
                            {
                              className: "text-emphasis hover:underline",
                              href: "".concat(y.GX),
                              target: "_blank",
                              children: "Privacy Policy.",
                            },
                            "privacy"
                          ),
                        ],
                      }),
                    }),
                  A &&
                    (0, l.jsxs)("div", {
                      className: "text-subtle my-3 w-full text-xs",
                      children: [
                        R("proceeding_agreement"),
                        " ",
                        (0, l.jsx)(
                          b(),
                          {
                            className: "text-emphasis hover:underline",
                            href: "".concat(y.gx),
                            target: "_blank",
                            children: R("terms"),
                          },
                          "terms"
                        ),
                        " ",
                        R("and"),
                        " ",
                        (0, l.jsx)(
                          b(),
                          {
                            className: "text-emphasis hover:underline",
                            href: "".concat(y.GX),
                            target: "_blank",
                            children: R("privacy_policy"),
                          },
                          "privacy"
                        ),
                        ".",
                      ],
                    }),
                  (0, l.jsx)("div", {
                    className:
                      "modalsticky mt-auto flex justify-end space-x-2 rtl:space-x-reverse",
                    children: I
                      ? (0, l.jsx)(ea.$, {
                          type: "submit",
                          color: "primary",
                          loading: o.creatingInstantBooking,
                          children: R(P ? "pay_and_book" : "confirm"),
                        })
                      : (0, l.jsxs)(l.Fragment, {
                          children: [
                            !!t &&
                              (0, l.jsx)(ea.$, {
                                color: "minimal",
                                type: "button",
                                onClick: t,
                                "data-testid": "back",
                                className: null == w ? void 0 : w.backButton,
                                children: R("back"),
                              }),
                            (0, l.jsx)(ea.$, {
                              type: "submit",
                              color: "primary",
                              disabled: (!!v && !V) || g || x,
                              loading:
                                o.creatingBooking ||
                                o.creatingRecurringBooking ||
                                h,
                              className: null == w ? void 0 : w.confirmButton,
                              "data-testid":
                                S && E
                                  ? "confirm-reschedule-button"
                                  : "confirm-book-button",
                              children: R(
                                S && E
                                  ? "reschedule"
                                  : d
                                  ? P
                                    ? "pay_and_book"
                                    : "confirm"
                                  : "verify_email_button"
                              ),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
              c,
            ],
          });
        },
        ej = (e) => {
          var t;
          let {
            globalError: a,
            dataError: n,
            t: r,
            responseVercelIdHeader: i,
            timeFormat: s,
            timezone: o,
            language: d,
          } = e;
          if (a) return null == a ? void 0 : a.message;
          let u = "",
            c = 0;
          if (n.message === ee.O.BookerLimitExceededReschedule) {
            let e = ei({
              date: n.data.startTime,
              timeFormat: s,
              timeZone: o,
              language: d,
            });
            u = "".concat(e.date, " ").concat(e.time);
          }
          n.message === ee.O.BookerLimitExceeded &&
            (null == (t = n.data) ? void 0 : t.count) &&
            (c = n.data.count);
          let m =
            n.message === ee.O.BookerLimitExceeded
              ? "booker_upcoming_limit_reached"
              : n.message;
          return (null == n ? void 0 : n.message)
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  null != i ? i : "",
                  " ",
                  r(m, { date: u, count: c }),
                ],
              })
            : (0, l.jsx)(l.Fragment, { children: r("can_you_try_again") });
        };
      var ew = a(27736),
        e_ = a(13681),
        eN = a(62549),
        ek = a(83160),
        eC = a(40615),
        eE = a(27357),
        eS = a(20843),
        eT = a(65151),
        eI = a(8949);
      let eA = (e, t) => {
          if (!e) return null;
          let a = Math.floor(e / 60),
            l = "";
          (e %= 60) > 0 &&
            (l =
              1 === e
                ? t("minute_one_short", { count: 1 })
                : t("multiple_duration_timeUnit_short", {
                    count: e,
                    unit: "minute",
                  }));
          let n = "";
          return (a > 0 &&
            (n =
              1 === a
                ? t("hour_one_short", { count: 1 })
                : t("multiple_duration_timeUnit_short", {
                    count: a,
                    unit: "hour",
                  })),
          n && l)
            ? "".concat(n, " ").concat(l)
            : n || l;
        },
        eM = (e) => {
          var t, a, n;
          let { event: r } = e,
            { t: s } = (0, j.Y)(),
            o = (0, i.useRef)([]);
          (0, ek.X)();
          let [u, c, m] = (0, k.Mu)((e) => [
              e.selectedDuration,
              e.setSelectedDuration,
              e.state,
            ]),
            {
              ref: h,
              calculateScroll: f,
              leftVisible: g,
              rightVisible: v,
            } = (0, eT.u)(),
            p = "isDynamic" in r && r.isDynamic,
            x = (0, d.hA)();
          if (
            ((0, i.useEffect)(() => {
              var e;
              !u &&
                ((null == (e = r.metadata) ? void 0 : e.multipleDuration) ||
                  p) &&
                c(r.length);
            }, [
              u,
              c,
              null == (t = r.metadata) ? void 0 : t.multipleDuration,
              r.length,
              p,
            ]),
            (0, i.useEffect)(() => {
              let e = setTimeout(() => {
                if (!x && u && o.current[u]) {
                  var e;
                  null == (e = o.current[u]) ||
                    e.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "center",
                    });
                }
              }, 100);
              return () => clearTimeout(e);
            }, [u, x]),
            !(null == r || null == (a = r.metadata)
              ? void 0
              : a.multipleDuration) && !p)
          )
            return (0, l.jsx)(l.Fragment, { children: eA(r.length, s) });
          let b = (null == r || null == (n = r.metadata)
            ? void 0
            : n.multipleDuration) || [15, 30, 60, 90];
          return u
            ? (0, l.jsxs)("div", {
                className:
                  "border-default relative mr-5 flex flex-row items-center justify-between rounded-md border",
                children: [
                  g &&
                    (0, l.jsxs)("button", {
                      onClick: () => {
                        h.current && (h.current.scrollLeft -= 100);
                      },
                      className: "absolute bottom-0 left-0 flex",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "bg-default flex h-9 w-5 items-center justify-end rounded-md",
                          children: (0, l.jsx)(eI.A, {
                            name: "chevron-left",
                            className: "text-subtle h-4 w-4",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "to-default flex h-9 w-5 bg-gradient-to-l from-transparent",
                        }),
                      ],
                    }),
                  (0, l.jsx)("ul", {
                    className:
                      "bg-default no-scrollbar flex max-w-full items-center gap-0.5 overflow-x-auto rounded-md p-1",
                    onScroll: (e) => f(e),
                    ref: h,
                    children: b
                      .filter((e) => "booking" !== m || e === u)
                      .map((e, t) =>
                        (0, l.jsx)(
                          "li",
                          {
                            "data-testId": "multiple-choice-".concat(e, "mins"),
                            "data-active": u === e ? "true" : "false",
                            onClick: () => c(e),
                            ref: (t) => (o.current[e] = t),
                            className: (0, W.A)(
                              u === e ? "bg-emphasis" : "hover:text-emphasis",
                              "text-default cursor-pointer rounded-[4px] px-3 py-1.5 text-sm leading-tight transition"
                            ),
                            children: (0, l.jsx)("div", {
                              className: "w-max",
                              children: eA(e, s),
                            }),
                          },
                          t
                        )
                      ),
                  }),
                  v &&
                    (0, l.jsxs)("button", {
                      onClick: () => {
                        h.current && (h.current.scrollLeft += 100);
                      },
                      className: "absolute bottom-0 right-0 flex",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "to-default flex h-9 w-5 bg-gradient-to-r from-transparent",
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "bg-default flex h-9 w-5 items-center justify-end rounded-md",
                          children: (0, l.jsx)(eI.A, {
                            name: "chevron-right",
                            className: "text-subtle h-4 w-4",
                          }),
                        }),
                      ],
                    }),
                ],
              })
            : null;
        };
      var eO = a(660);
      let eD = (e) => {
          let { children: t, onCancel: a } = e,
            { data: n } = (0, eO._)();
          return (0, l.jsx)(eL, {
            child: t,
            eventLength: null == n ? void 0 : n.length,
            onCancel: a,
          });
        },
        eR = (e) => {
          let { children: t, onCancel: a } = e,
            { data: n } = ((e) => {
              let t = "/".concat(e_.V2_ENDPOINTS.eventTypes, "/").concat(e);
              return (0, ew.I)({
                queryKey: ["use-event-by-id", e],
                queryFn: () =>
                  null === eN.A || void 0 === eN.A
                    ? void 0
                    : eN.A.get(t).then((e) => {
                        if (e.data.status === e_.SUCCESS_STATUS)
                          return e.data.data;
                        throw Error(e.data.error.message);
                      }),
              });
            })((0, k.Mu)((e) => e.eventId));
          return (0, l.jsx)(eL, {
            child: t,
            eventLength: null == n ? void 0 : n.lengthInMinutes,
            onCancel: a,
          });
        },
        eL = (e) => {
          let { child: t, eventLength: a } = e,
            { i18n: n, t: r } = (0, j.Y)(),
            i = (0, k.Mu)((e) => e.selectedTimeslot),
            s = (0, k.Mu)((e) => e.selectedDuration),
            { timeFormat: o, timezone: d } = (0, ed.v)();
          return i
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)("h1", {
                    className: "font-cal text-emphasis text-xl leading-5",
                    children: [r("confirm_your_details"), " "],
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "my-4 flex flex-wrap gap-2 rounded-md leading-none",
                    children: [
                      (0, l.jsx)(eE.E, {
                        variant: "grayWithoutHover",
                        startIcon: "calendar",
                        size: "lg",
                        children: (0, l.jsx)(eo, {
                          date: i,
                          timeFormat: o,
                          timeZone: d,
                          language: n.language,
                        }),
                      }),
                      (s || a) &&
                        (0, l.jsx)(eE.E, {
                          variant: "grayWithoutHover",
                          startIcon: "clock",
                          size: "lg",
                          children: (0, l.jsx)("span", {
                            children: eA(s || a, r),
                          }),
                        }),
                    ],
                  }),
                  t,
                ],
              })
            : null;
        },
        eP = (e) => {
          let { visible: t, onCancel: a, children: n } = e,
            r = (0, ek.X)();
          return (0, l.jsx)(eC.l, {
            open: t,
            onOpenChange: a,
            children: (0, l.jsx)(eS.Cf, {
              type: void 0,
              enableOverflow: !0,
              className:
                "[&_.modalsticky]:border-t-subtle [&_.modalsticky]:bg-default max-h-[80vh] pb-0 [&_.modalsticky]:sticky [&_.modalsticky]:bottom-0 [&_.modalsticky]:left-0 [&_.modalsticky]:right-0 [&_.modalsticky]:-mx-8 [&_.modalsticky]:border-t [&_.modalsticky]:px-8 [&_.modalsticky]:py-4",
              children: r
                ? (0, l.jsx)(eR, { onCancel: a, children: n })
                : (0, l.jsx)(eD, { onCancel: a, children: n }),
            }),
          });
        };
      var eU = a(38524),
        eV = a(57132);
      let eF = (e) => {
          var t, a, n;
          let {
              event: r,
              slots: i = {},
              isLoading: d,
              classNames: u,
              scrollToTimeSlots: c,
              showNoAvailabilityDialog: m,
            } = e,
            { i18n: h } = (0, j.Y)(),
            [f, g, v] = (0, k.Mu)(
              (e) => [e.month, e.selectedDate, e.layout],
              s.x
            ),
            [p, x, b] = (0, k.Mu)(
              (e) => [e.setSelectedDate, e.setMonth, e.setDayCount],
              s.x
            ),
            y = (e) => {
              x(e.format("YYYY-MM")),
                p({ date: e.format("YYYY-MM-DD") }),
                b(null);
            },
            w = (0, F.k)(i),
            { moveToNextMonthOnNoAvailability: _ } = ((e) => {
              let {
                browsingDate: t,
                nonEmptyScheduleDays: a,
                onMonthChange: l,
                isLoading: n,
              } = e;
              if (n) return { moveToNextMonthOnNoAvailability: () => {} };
              let r = a.filter((e) => (0, o.A)(e).isSame(t, "month"));
              return {
                moveToNextMonthOnNoAvailability: () => {
                  (0, o.A)().startOf("month").format("YYYY-MM") !=
                    t.format("YYYY-MM") ||
                    r.length ||
                    l(t.add(1, "month"));
                },
              };
            })({
              browsingDate: f ? (0, o.A)(f) : (0, o.A)().startOf("month"),
              nonEmptyScheduleDays: w,
              onMonthChange: y,
              isLoading: null == d || d,
            });
          _();
          let N = "month_view" !== v && "mobile" !== v,
            C = {
              periodType: "UNLIMITED",
              periodStartDate: null,
              periodEndDate: null,
              periodDays: null,
              periodCountCalendarDays: !1,
              ...((null == r ? void 0 : r.data) && {
                periodType: r.data.periodType,
                periodStartDate: r.data.periodStartDate,
                periodEndDate: r.data.periodEndDate,
                periodDays: r.data.periodDays,
                periodCountCalendarDays: r.data.periodCountCalendarDays,
              }),
            };
          return (0, l.jsx)(eU.lr, {
            customClassNames: {
              datePickerTitle: null == u ? void 0 : u.datePickerTitle,
              datePickerDays: null == u ? void 0 : u.datePickerDays,
              datePickersDates: null == u ? void 0 : u.datePickerDate,
              datePickerDatesActive:
                null == u ? void 0 : u.datePickerDatesActive,
              datePickerToggle: null == u ? void 0 : u.datePickerToggle,
            },
            className: null == u ? void 0 : u.datePickerContainer,
            isLoading: d,
            onChange: (e, t) => {
              p({
                date: null === e ? e : e.format("YYYY-MM-DD"),
                omitUpdatingParams: t,
                preventMonthSwitching: !N,
              });
            },
            onMonthChange: y,
            includedDates: w,
            locale: h.language,
            browsingDate: f ? (0, o.A)(f) : void 0,
            selected: (0, o.A)(g),
            weekStart: (0, eV.as)(
              null == r ||
                null == (n = r.data) ||
                null == (a = n.subsetOfUsers) ||
                null == (t = a[0])
                ? void 0
                : t.weekStart
            ),
            slots: i,
            scrollToTimeSlots: c,
            periodData: C,
            isCompact: N,
            showNoAvailabilityDialog: m,
          });
        },
        ez = (e) => {
          let { isEmbed: t } = e,
            { t: a } = (0, j.Y)(),
            [n, r] = (0, i.useState)(!0);
          return n
            ? (0, l.jsx)("div", {
                onClick: () => r(!1),
                className: "bg-default border-subtle fixed left-1/2 ".concat(
                  t ? "top-0" : "top-4",
                  " z-50 -translate-x-1/2 transform cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm shadow-md"
                ),
                children: (0, l.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, l.jsx)("div", {
                      className: "relative",
                      children: (0, l.jsx)(eI.A, {
                        name: "info",
                        className: "h-5 w-5 text-orange-500",
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "text-emphasis font-medium",
                      "data-testid": "dry-run-msg",
                      children: a("dry_run_mode_active"),
                    }),
                  ],
                }),
              })
            : null;
        };
      var eB = a(96442),
        eY = a(13784);
      let eW = () =>
        (0, l.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, l.jsx)(ex.rr, { className: "h-6 w-6 rounded-full" }),
            (0, l.jsx)(ex.rr, { className: "mt-2 h-5 w-32" }),
            (0, l.jsx)(ex.rr, { className: "mt-2 h-8 w-48" }),
            (0, l.jsx)("div", {
              className: "mt-8",
              children: Array.from({ length: 4 }).map((e, t) =>
                (0, l.jsxs)(
                  "div",
                  {
                    className: "mb-2 flex flex-row items-center",
                    children: [
                      (0, l.jsx)(ex.rr, {
                        className: "mr-3 h-5 w-5 rounded-full",
                      }),
                      (0, l.jsx)(ex.rr, {
                        className: (0, W.A)("h-6", t > 1 ? "w-24" : "w-32"),
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
          ],
        });
      var eH = a(95627),
        eG = a(42717),
        eq = a(33784),
        eZ = a(96968),
        eJ = a(53114);
      let e$ = (e) => {
          var t, a, n, r, i, s;
          let {
              schedulingType: o,
              users: u,
              profile: c,
              entity: m,
              isPrivateLink: h,
              roundRobinHideOrgAndTeam: f,
            } = e,
            g = (0, C.JH)((e) => e.username),
            v = !!(g && g.indexOf("+") > -1),
            p = (0, d.hA)(),
            x = (0, ek.X)(),
            b = o !== eZ.PI.ROUND_ROBIN ? u : [],
            y =
              (c.name && o === eZ.PI.ROUND_ROBIN) ||
              !u.length ||
              (c.name !== u[0].name && o === eZ.PI.COLLECTIVE);
          if (o === eZ.PI.ROUND_ROBIN && f)
            return (0, l.jsx)("div", { className: "h-6" });
          let j =
            !v && (c.image || m.logoUrl) && m.teamSlug
              ? [
                  {
                    href:
                      p || x || h || m.hideProfileLink
                        ? null
                        : m.teamSlug
                        ? (0, eG.c)({
                            orgSlug: m.orgSlug,
                            teamSlug: m.teamSlug,
                          })
                        : (0, eH.g)(m.orgSlug),
                    image:
                      null != (a = null != (t = m.logoUrl) ? t : c.image)
                        ? a
                        : "",
                    alt:
                      null != (r = null != (n = m.name) ? n : c.name) ? r : "",
                    title:
                      null != (s = null != (i = m.name) ? i : c.name) ? s : "",
                  },
                ]
              : [];
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(eJ.Z, {
                size: "sm",
                className: "border-muted",
                items: [
                  ...j,
                  ...b.map((e) => {
                    var t, a, l, n;
                    return {
                      href:
                        x || h || m.hideProfileLink
                          ? null
                          : ""
                              .concat(
                                (0, eH.g)(
                                  null !=
                                    (n =
                                      null == (a = e.profile) ||
                                      null == (t = a.organization)
                                        ? void 0
                                        : t.slug)
                                    ? n
                                    : null
                                ),
                                "/"
                              )
                              .concat(
                                null == (l = e.profile) ? void 0 : l.username,
                                "?redirect=false"
                              ),
                      alt: e.name || "",
                      title: e.name || "",
                      image: (0, eq.c)(e),
                    };
                  }),
                ],
              }),
              (0, l.jsx)("p", {
                className: "text-subtle mt-2 text-sm font-semibold",
                children: y
                  ? c.name
                  : b
                      .map((e) => e.name)
                      .filter((e) => e)
                      .join(", "),
              }),
            ],
          });
        },
        eX = (e) => {
          let { children: t, as: a, className: n } = e;
          return (0, l.jsx)(a || "h1", {
            "data-testid": "event-title",
            className: (0, W.A)(
              "text-text break-words text-xl font-semibold",
              n
            ),
            children: t,
          });
        };
      var eQ = a(16853),
        eK = (function (e) {
          return (
            (e[(e.DURATION = 0)] = "DURATION"),
            (e[(e.LOCATION = 1)] = "LOCATION"),
            (e[(e.REQUIRES_CONFIRMATION = 2)] = "REQUIRES_CONFIRMATION"),
            (e[(e.OCCURENCES = 3)] = "OCCURENCES"),
            (e[(e.PRICE = 4)] = "PRICE"),
            e
          );
        })({}),
        e0 = a(90708),
        e1 = a(72221);
      let e2 = (e) => !!e;
      function e4(e) {
        let { eventLocationType: t, isTooltip: a } = e,
          n = (0, ek.X)();
        return (0, l.jsx)("img", {
          src: "".concat(n ? "https://app.cal.com" : "").concat(t.iconUrl),
          className: (0, W.A)(
            (0, e0.A)(null == t ? void 0 : t.iconUrl, a),
            "me-[10px] h-4 w-4"
          ),
          alt: "".concat(t.label, " icon"),
        });
      }
      function e5(e) {
        let { locations: t } = e,
          { t: a } = (0, j.Y)();
        return (0, l.jsxs)("div", {
          className: "my-2 me-2 flex w-full flex-col space-y-3 break-words",
          children: [
            (0, l.jsx)("p", { children: a("select_on_next_step") }),
            t.map((e, t) => {
              let n = (0, ec.ku)(e.type);
              if (!n) return null;
              let r = e.customLabel || (0, ec.CF)(e, n, a);
              return (0, l.jsxs)(
                "div",
                {
                  className: "font-sm flex flex-row items-center",
                  children: [
                    (0, l.jsx)(e4, { eventLocationType: n, isTooltip: !0 }),
                    (0, l.jsx)("p", { className: "line-clamp-1", children: r }),
                  ],
                },
                "".concat(e.type, "-").concat(t)
              );
            }),
          ],
        });
      }
      function e3(e) {
        let { locations: t } = e,
          { t: a } = (0, j.Y)(),
          n = (0, ek.X)(),
          r = t
            .map((e, t) => {
              let n = (0, ec.ku)(e.type);
              if (!n) return null;
              let r =
                (null == e ? void 0 : e.customLabel) || (0, ec.CF)(e, n, a);
              return (0, l.jsxs)(
                "div",
                {
                  className: "flex flex-row items-center text-sm font-medium",
                  children: [
                    "/link.svg" === n.iconUrl
                      ? (0, l.jsx)(eI.A, {
                          name: "link",
                          className:
                            "text-default h-4 w-4 ltr:mr-[10px] rtl:ml-[10px]",
                        })
                      : (0, l.jsx)(e4, { eventLocationType: n, isTooltip: !1 }),
                    (0, l.jsx)(e1.A, {
                      content: r,
                      children: (0, l.jsx)("p", {
                        className: "line-clamp-1",
                        children: r,
                      }),
                    }),
                  ],
                },
                "".concat(e.type, "-").concat(t)
              );
            })
            .filter(e2);
        return r.length > 1
          ? (0, l.jsxs)("div", {
              className: "flex flex-row items-center text-sm font-medium",
              children: [
                n
                  ? (0, l.jsx)(eI.A, {
                      name: "map-pin",
                      className: (0, W.A)(
                        "me-[10px] h-4 w-4 opacity-70 dark:invert"
                      ),
                    })
                  : (0, l.jsx)("img", {
                      src: "/map-pin-dark.svg",
                      className: (0, W.A)(
                        "me-[10px] h-4 w-4 opacity-70 dark:invert"
                      ),
                      alt: "map-pin",
                    }),
                (0, l.jsx)(e1.A, {
                  content: (0, l.jsx)(e5, { locations: t }),
                  children: (0, l.jsx)("p", {
                    className: "line-clamp-1",
                    children: a("location_options", {
                      locationCount: r.length,
                    }),
                  }),
                }),
              ],
            })
          : 1 === r.length
          ? (0, l.jsx)("div", {
              className:
                "text-default mr-6 flex w-full flex-col space-y-4 break-words text-sm rtl:mr-2",
              children: r,
            })
          : null;
      }
      var e6 = a(88201);
      let e8 = /^(.*)([+-])(\d{2}):(\d{2})|(Z)$/,
        e7 = (e, t) => {
          let {
              startDate: a,
              timeZone: l,
              recurringEvent: n,
              recurringCount: r,
              selectedTimeFormat: i,
              withDefaultTimeFormat: s,
            } = e,
            { count: d, ...u } = n || {},
            c = new e6.p3({
              ...u,
              count: r,
              dtstart: new Date((0, o.A)(a).valueOf()),
            }),
            m = (0, o.A)(a).utcOffset(),
            h = c
              .all()
              .map((e) =>
                o.A.utc(e).add(m - (0, o.A)(e).utcOffset(), "minute")
              );
          return [
            h.map((e) =>
              ((e, t, a, l) => {
                let n = (function (e, t, a, l) {
                  if ("string" != typeof e)
                    return (0, o.A)(e, void 0, void 0, void 0);
                  let n = e.match(e8);
                  if (null === n) return;
                  if ("Z" === n[0])
                    return (0, o.A)(e, { utc: !0, ...t }, void 0, void 0);
                  let [, r, i, s, d] = n,
                    u = 60 * parseInt(s) + parseInt(d, 10);
                  return (0, o.A)(
                    r,
                    {
                      $offset: "+" === i ? u : -u,
                      ...("string" == typeof t ? { format: t } : { ...t }),
                    },
                    a,
                    l
                  );
                })(e);
                if (!(null == n ? void 0 : n.isValid())) return "Invalid date";
                let r =
                  null == n
                    ? void 0
                    : n.format(
                        (null == l ? void 0 : l.withDefaultTimeFormat)
                          ? er.Hg.TWELVE_HOUR
                          : (null == l ? void 0 : l.selectedTimeFormat) || er.oF
                      );
                return ""
                  .concat(r, ", ")
                  .concat(
                    (0, o.A)(e)
                      .toDate()
                      .toLocaleString(t, { dateStyle: "full", timeZone: a })
                  );
              })(e.tz(l), t, l, {
                selectedTimeFormat: i,
                withDefaultTimeFormat: s,
              })
            ),
            h.map((e) => e.toDate()),
          ];
        };
      var e9 = a(30729),
        te = a(99216);
      let tt = (e) => {
        var t;
        let { event: a } = e,
          n = (null == (t = a.recurringEvent) ? void 0 : t.count) || null,
          { t: r, i18n: s } = (0, j.Y)(),
          [o, d, u, c] = (0, k.Mu)((e) => [
            e.setRecurringEventCount,
            e.recurringEventCount,
            e.setOccurenceCount,
            e.occurenceCount,
          ]),
          m = (0, k.Mu)((e) => e.selectedTimeslot),
          h = (0, k.Mu)((e) => e.state),
          { timezone: f, timeFormat: g } = (0, ed.v)(),
          [v, p] = (0, i.useState)(!1);
        if (
          ((0, i.useEffect)(() => {
            var e;
            (null == (e = a.recurringEvent) ? void 0 : e.count) &&
              (u(c || a.recurringEvent.count),
              o(d || a.recurringEvent.count),
              c && (c > a.recurringEvent.count || c < 1) && p(!0));
          }, [o, a.recurringEvent, d, u, c]),
          !a.recurringEvent)
        )
          return null;
        if ("booking" === h && d && m) {
          let [e] = e7(
            {
              startDate: m,
              timeZone: f,
              recurringEvent: a.recurringEvent,
              recurringCount: d,
              selectedTimeFormat: g,
            },
            s.language
          );
          return (0, l.jsxs)("div", {
            "data-testid": "recurring-dates",
            children: [
              e.slice(0, 5).map((e, t) => (0, l.jsx)("p", { children: e }, t)),
              e.length > 5 &&
                (0, l.jsx)(e1.A, {
                  content: e
                    .slice(5)
                    .map((e, t) => (0, l.jsx)("p", { children: e }, t)),
                  children: (0, l.jsxs)("p", {
                    className: " text-sm",
                    children: ["+ ", r("plus_more", { count: e.length - 5 })],
                  }),
                }),
            ],
          });
        }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, e9.k)({ t: r, recurringEvent: a.recurringEvent }),
            (0, l.jsx)("br", {}),
            (0, l.jsx)(te.pd, {
              className: "my-1 mr-3 inline-flex h-[26px] w-[46px] px-1 py-0",
              type: "number",
              min: "1",
              max: a.recurringEvent.count,
              defaultValue: c || a.recurringEvent.count,
              "data-testid": "occurrence-input",
              onChange: (e) => {
                let t = parseInt(e.target.value);
                u(t),
                  !/^(?=.*[0-9])\S+$/.test(e.target.value) ||
                  t < 1 ||
                  (n && t > n)
                    ? (p(!0), o(n))
                    : (p(!1), o(t));
              },
            }),
            r("occurrence", { count: d || a.recurringEvent.count }),
            v &&
              (0, l.jsx)("div", {
                className: "-ml-4 mr-4 mt-2 flex",
                children: (0, l.jsx)(et.F, {
                  severity: "warning",
                  title: r("enter_number_between_range", { maxOccurences: n }),
                }),
              }),
          ],
        });
      };
      var ta = a(95566);
      let tl = [
          eK.REQUIRES_CONFIRMATION,
          eK.DURATION,
          eK.OCCURENCES,
          eK.LOCATION,
          eK.PRICE,
        ],
        tn = (e) => {
          let {
            customIcon: t,
            icon: a,
            iconUrl: n,
            children: r,
            highlight: s,
            contentClassName: o,
            className: d,
            isDark: u,
            ...c
          } = e;
          return i.Children.count(r)
            ? (0, l.jsxs)("div", {
                className: (0, W.A)(
                  "flex items-start justify-start text-sm",
                  s ? "text-emphasis" : "text-text",
                  d
                ),
                ...c,
                children: [
                  n
                    ? (0, l.jsx)("img", {
                        src: n,
                        alt: "",
                        className: (0, W.A)(
                          "mr-2 mt-[2px] h-4 w-4 flex-shrink-0",
                          void 0 === u &&
                            "[filter:invert(0.5)_brightness(0.5)]",
                          (void 0 === u || u) &&
                            "dark:[filter:invert(0.65)_brightness(0.9)]"
                        ),
                      })
                    : (0, l.jsx)(l.Fragment, {
                        children:
                          t ||
                          (!!a &&
                            (0, l.jsx)(eI.A, {
                              name: a,
                              className:
                                "relative z-20 mr-2 mt-[2px] h-4 w-4 flex-shrink-0 rtl:ml-2",
                            })),
                      }),
                  (0, l.jsx)("div", {
                    className: (0, W.A)(
                      "relative z-10 max-w-full break-words",
                      o
                    ),
                    children: r,
                  }),
                ],
              })
            : null;
        },
        tr = (e) => {
          let { event: t, blocks: a = tl } = e,
            { t: n } = (0, j.Y)(),
            r = (0, C.JH)((e) => e.rescheduleUid),
            s = (0, C.JH)((e) => e.isInstantMeeting);
          return (0, l.jsx)(l.Fragment, {
            children: a.map((e) => {
              if ("function" == typeof e)
                return (0, l.jsx)(i.Fragment, { children: e(t) }, e.name);
              switch (e) {
                case eK.DURATION:
                  return (0, l.jsx)(
                    tn,
                    {
                      icon: "clock",
                      className: "items-center",
                      children: (0, l.jsx)(eM, { event: t }),
                    },
                    e
                  );
                case eK.LOCATION:
                  var a;
                  if (
                    !(null == t || null == (a = t.locations)
                      ? void 0
                      : a.length) ||
                    s
                  )
                    return null;
                  return (0, l.jsx)(
                    tn,
                    { children: (0, l.jsx)(e3, { locations: t.locations }) },
                    e
                  );
                case eK.REQUIRES_CONFIRMATION:
                  if (!t.requiresConfirmation) return null;
                  return (0, l.jsx)(
                    tn,
                    {
                      icon: "square-check",
                      children: n("requires_confirmation"),
                    },
                    e
                  );
                case eK.OCCURENCES:
                  if (!t.recurringEvent || r) return null;
                  return (0, l.jsx)(
                    tn,
                    {
                      icon: "refresh-ccw",
                      children: (0, l.jsx)(tt, { event: t }),
                    },
                    e
                  );
                case eK.PRICE:
                  let o = (0, Q.C)(t);
                  if (t.price <= 0 || o.price <= 0) return null;
                  return (0, l.jsx)(
                    tn,
                    {
                      customIcon: (0, l.jsx)(eQ.R, {
                        className:
                          "relative z-20 mr-2 mt-[2px] h-4 w-4 flex-shrink-0 rtl:ml-2",
                        currency: t.currency,
                      }),
                      children: (0, l.jsx)(ta.g, {
                        price: o.price,
                        currency: t.currency,
                        displayAlternateSymbol: !1,
                      }),
                    },
                    e
                  );
              }
            }),
          });
        };
      var ti = a(7860),
        ts = a(84e3),
        to = a(10193),
        td = a(88310),
        tu = a(6638),
        tc = a(16824),
        tm = a(90879),
        th = a(27186);
      let tf = {
          variants: {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 20 },
          },
          initial: "hidden",
          exit: "hidden",
          animate: "visible",
          transition: { ease: "easeInOut", delay: 0.1 },
        },
        tg = {
          variants: {
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          },
          initial: "hidden",
          exit: "hidden",
          animate: "visible",
          transition: { ease: "easeInOut", delay: 0.1 },
        },
        tv = {
          mobile: {
            default: {
              width: "100%",
              minHeight: "0px",
              gridTemplateAreas:
                '\n          "meta"\n          "header"\n          "main"\n          "timeslots"\n        ',
              gridTemplateColumns: "100%",
              gridTemplateRows: "minmax(min-content,max-content) 1fr",
            },
          },
          month_view: {
            default: {
              width:
                "calc(var(--booker-meta-width) + var(--booker-main-width))",
              minHeight: "450px",
              height: "auto",
              gridTemplateAreas:
                '\n      "meta main main"\n      "meta main main"\n      ',
              gridTemplateColumns:
                "var(--booker-meta-width) var(--booker-main-width)",
              gridTemplateRows: "1fr 0fr",
            },
            selecting_time: {
              width:
                "calc(var(--booker-meta-width) + var(--booker-main-width) + var(--booker-timeslots-width))",
              minHeight: "450px",
              height: "auto",
              gridTemplateAreas:
                '\n      "meta main timeslots"\n      "meta main timeslots"\n      ',
              gridTemplateColumns:
                "var(--booker-meta-width) 1fr var(--booker-timeslots-width)",
              gridTemplateRows: "1fr 0fr",
            },
          },
          week_view: {
            default: {
              width: "100vw",
              minHeight: "100vh",
              height: "auto",
              gridTemplateAreas:
                '\n      "meta header header"\n      "meta main main"\n      ',
              gridTemplateColumns: "var(--booker-meta-width) 1fr",
              gridTemplateRows: "70px auto",
            },
          },
          column_view: {
            default: {
              width: "100vw",
              minHeight: "100vh",
              height: "auto",
              gridTemplateAreas:
                '\n      "meta header header"\n      "meta main main"\n      ',
              gridTemplateColumns: "var(--booker-meta-width) 1fr",
              gridTemplateRows: "70px auto",
            },
          },
        },
        tp = function (e, t) {
          let a =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = (e) => (a ? "" : e);
          return [
            "[--booker-timeslots-width:240px] lg:[--booker-timeslots-width:280px]",
            e === T.G5.MONTH_VIEW && l("[--booker-meta-width:240px]"),
            e === T.G5.MONTH_VIEW &&
              "booking" === t &&
              "[--booker-main-width:420px] ".concat(
                l("lg:[--booker-meta-width:340px]")
              ),
            e === T.G5.MONTH_VIEW &&
              "booking" !== t &&
              "[--booker-main-width:480px] ".concat(
                l("lg:[--booker-meta-width:280px]")
              ),
            e !== T.G5.MONTH_VIEW &&
              "[--booker-main-width:480px] [--booker-meta-width:340px] ".concat(
                l("lg:[--booker-meta-width:424px]")
              ),
          ];
        },
        tx = {
          mobile: { desktop: 0, tablet: 0 },
          [T.G5.MONTH_VIEW]: { desktop: 0, tablet: 0 },
          [T.G5.WEEK_VIEW]: { desktop: 7, tablet: 4 },
          [T.G5.COLUMN_VIEW]: { desktop: 6, tablet: 2 },
        },
        tb = (0, eB.default)(
          () =>
            a
              .e(38836)
              .then(a.bind(a, 38836))
              .then((e) => e.TimezoneSelect),
          { loadableGenerated: { webpack: () => [38836] }, ssr: !1 }
        ),
        ty = (e, t, a) => {
          var l;
          let n = tu.locale.targets.concat([tu.locale.source]);
          return null == e ||
            null ==
              (l = e.find(
                (e) =>
                  e.field === t &&
                  n.includes(e.targetLocale) &&
                  (a === e.targetLocale || a.split("-")[0] === e.targetLocale)
              ))
            ? void 0
            : l.translatedText;
        },
        tj = (e) => {
          var t, a;
          let {
              event: n,
              isPending: r,
              isPlatform: o = !0,
              isPrivateLink: u,
              classNames: m,
              locale: h,
              timeZones: f,
              children: g,
              selectedTimeslot: v,
              roundRobinHideOrgAndTeam: p,
            } = e,
            { timeFormat: x, timezone: b } = (0, ed.v)(),
            [y] = (0, ts.x)((e) => [e.setTimezone]),
            [w] = (0, k.Mu)((e) => [e.setTimezone], s.x),
            _ = (0, k.Mu)((e) => e.selectedDuration),
            N = (0, k.Mu)((e) => e.state),
            C = (0, k.Mu)((e) => e.bookingData),
            E = (0, k.Mu)((e) => e.rescheduleUid),
            [S, T] = (0, k.Mu)(
              (e) => [e.seatedEventData, e.setSeatedEventData],
              s.x
            ),
            { i18n: I, t: A } = (0, j.Y)(),
            M = (0, d.V4)(),
            O = !!(0, d.hA)() && M.hideEventTypeDetails,
            [D] = (0, i.useMemo)(() => (o ? [eY.k] : [tb]), [o]);
          if (
            ((0, i.useEffect)(() => {
              if (null == n ? void 0 : n.lockTimeZoneToggleOnBookingPage) {
                var e;
                let t =
                  n.lockedTimeZone ||
                  (null == (e = n.schedule) ? void 0 : e.timeZone);
                t && y(t);
              }
            }, [n, y]),
            O)
          )
            return null;
          let R =
              (null == S ? void 0 : S.attendees) ||
              (null == C ? void 0 : C.attendees.length),
            L =
              (null == S ? void 0 : S.seatsPerTimeSlot) ||
              (null == n ? void 0 : n.seatsPerTimeSlot),
            P = R && L && R / L >= 0.5,
            U = R && L && R / L >= 0.83,
            V = null != h ? h : navigator.language,
            F = ty(
              null != (t = null == n ? void 0 : n.fieldTranslations) ? t : [],
              eZ.go.DESCRIPTION,
              V
            ),
            z = ty(
              null != (a = null == n ? void 0 : n.fieldTranslations) ? a : [],
              eZ.go.TITLE,
              V
            );
          return (0, l.jsxs)("div", {
            className: "".concat(
              (null == m ? void 0 : m.eventMetaContainer) || "",
              " relative z-10 p-6"
            ),
            "data-testid": "event-meta",
            children: [
              r &&
                (0, l.jsx)(c.m.div, {
                  ...tg,
                  initial: "visible",
                  layout: !0,
                  children: (0, l.jsx)(eW, {}),
                }),
              !r &&
                !!n &&
                (0, l.jsxs)(c.m.div, {
                  ...tg,
                  layout: !0,
                  transition: { ...tg.transition, delay: 0.3 },
                  children: [
                    (0, l.jsx)(e$, {
                      schedulingType: n.schedulingType,
                      users: n.subsetOfUsers,
                      profile: n.profile,
                      entity: n.entity,
                      isPrivateLink: u,
                      roundRobinHideOrgAndTeam: p,
                    }),
                    (0, l.jsx)(eX, {
                      className: "".concat(
                        null == m ? void 0 : m.eventMetaTitle,
                        " my-2"
                      ),
                      children: null != z ? z : null == n ? void 0 : n.title,
                    }),
                    (n.description || F) &&
                      (0, l.jsx)(tn, {
                        "data-testid": "event-meta-description",
                        contentClassName:
                          "mb-8 break-words max-w-full max-h-[180px] scroll-bar pr-4",
                        children: (0, l.jsx)("div", {
                          dangerouslySetInnerHTML: {
                            __html: (0, to.Y)(null != F ? F : n.description),
                          },
                        }),
                      }),
                    (0, l.jsxs)("div", {
                      className: "space-y-4 font-medium rtl:-mr-2",
                      children: [
                        E &&
                          C &&
                          (0, l.jsxs)(tn, {
                            icon: "calendar",
                            children: [
                              A("former_time"),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("span", {
                                className: "line-through",
                                "data-testid": "former_time_p",
                                children: (0, l.jsx)(es, {
                                  date: C.startTime.toString(),
                                  duration: null,
                                  timeFormat: x,
                                  timeZone: b,
                                  language: I.language,
                                }),
                              }),
                            ],
                          }),
                        v &&
                          (0, l.jsx)(tn, {
                            icon: "calendar",
                            children: (0, l.jsx)(es, {
                              date: v,
                              duration: _ || n.length,
                              timeFormat: x,
                              timeZone: b,
                              language: I.language,
                            }),
                          }),
                        (0, l.jsx)(tr, { event: n }),
                        (0, l.jsx)(tn, {
                          className:
                            "cursor-pointer [&_.current-timezone:before]:focus-within:opacity-100 [&_.current-timezone:before]:hover:opacity-100",
                          contentClassName: "relative max-w-[90%]",
                          icon: "globe",
                          children:
                            "booking" === N
                              ? (0, l.jsx)(l.Fragment, { children: b })
                              : (0, l.jsx)("span", {
                                  className:
                                    "current-timezone before:bg-subtle min-w-32 -mt-[2px] flex h-6 max-w-full items-center justify-start before:absolute before:inset-0 before:bottom-[-3px] before:left-[-30px] before:top-[-3px] before:w-[calc(100%_+_35px)] before:rounded-md before:py-3 before:opacity-0 before:transition-opacity ".concat(
                                      n.lockTimeZoneToggleOnBookingPage
                                        ? "cursor-not-allowed"
                                        : ""
                                    ),
                                  "data-testid": "event-meta-current-timezone",
                                  children: (0, l.jsx)(D, {
                                    timeZones: f,
                                    menuPosition: "absolute",
                                    timezoneSelectCustomClassname:
                                      null == m
                                        ? void 0
                                        : m.eventMetaTimezoneSelect,
                                    classNames: {
                                      control: () =>
                                        "!min-h-0 p-0 w-full border-0 bg-transparent focus-within:ring-0 shadow-none!",
                                      menu: () => "!w-64 max-w-[90vw] mb-1 ",
                                      singleValue: () => "text-text py-1",
                                      indicatorsContainer: () => "ml-auto",
                                      container: () => "max-w-full",
                                    },
                                    value: n.lockTimeZoneToggleOnBookingPage
                                      ? n.lockedTimeZone || td.m
                                      : b,
                                    onChange: (e) => {
                                      let { value: t } = e;
                                      y(t), w(t);
                                    },
                                    isDisabled:
                                      n.lockTimeZoneToggleOnBookingPage,
                                  }),
                                }),
                        }),
                        "booking" === N && L && R
                          ? (0, l.jsx)(tn, {
                              icon: "user",
                              className: "".concat(
                                U
                                  ? "text-rose-600"
                                  : P
                                  ? "text-yellow-500"
                                  : "text-bookinghighlight"
                              ),
                              children: (0, l.jsx)("div", {
                                className:
                                  "text-bookinghighlight flex items-start text-sm",
                                children: (0, l.jsx)("p", {
                                  children: (0, l.jsx)(ti.t, {
                                    showExact: !!S.showAvailableSeatsCount,
                                    totalSeats: L,
                                    bookedSeats: R || 0,
                                    variant: "fraction",
                                  }),
                                }),
                              }),
                            })
                          : null,
                      ],
                    }),
                    g &&
                      (0, l.jsx)("div", {
                        className: null == m ? void 0 : m.eventMetaChildren,
                        children: g,
                      }),
                  ],
                }),
            ],
          });
        };
      var tw = a(40459);
      function t_(e) {
        let { t } = (0, j.Y)(),
          [a, n] = (0, i.useState)(!1);
        return e.visible &&
          ("0" != tw.env.NEXT_PUBLIC_BOOKER_NUMBER_OF_DAYS_TO_LOAD ||
            0 != y.QE) &&
          tw.env.NEXT_PUBLIC_BOOKER_NUMBER_OF_DAYS_TO_LOAD &&
          (!a || e.isScheduleLoading) &&
          !e.isScheduleLoading &&
          e.dayCount
          ? (0, l.jsxs)("div", {
              className:
                "bg-default border-subtle mt-6 flex w-1/2 min-w-0 items-center justify-between rounded-[32px] border p-3 text-sm leading-none shadow-sm lg:w-1/3",
              children: [
                (0, l.jsxs)("div", {
                  className: "flex items-center gap-2 overflow-x-hidden",
                  children: [
                    (0, l.jsx)(eI.A, {
                      name: "info",
                      className: "text-default h-4 w-4",
                    }),
                    (0, l.jsx)("p", {
                      className: "w-full  leading-none",
                      children: t("having_trouble_finding_time"),
                    }),
                  ],
                }),
                (0, l.jsxs)("button", {
                  className: "inline-flex items-center gap-2 font-medium",
                  onClick: (t) => {
                    t.preventDefault(), e.onButtonClick(), n(!0);
                  },
                  children: [
                    t("show_more"),
                    " ",
                    (0, l.jsx)(eI.A, {
                      name: "arrow-right",
                      className: "h-4 w-4",
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      var tN = a(77197),
        tk = a(79970),
        tC = a(38816);
      function tE(e) {
        let {
            extraDays: t,
            isMobile: a,
            enabledLayouts: n,
            nextSlots: r,
            eventSlug: u,
            isMyLink: c,
            renderOverlay: m,
            isCalendarView: h,
          } = e,
          { t: f, i18n: g } = (0, j.Y)(),
          v = (0, d.hA)(),
          p = (0, ek.X)(),
          [x, b] = (0, k.Mu)((e) => [e.layout, e.setLayout], s.x),
          w = (0, k.Mu)((e) => e.selectedDate),
          _ = (0, k.Mu)((e) => e.setSelectedDate),
          N = (0, k.Mu)((e) => e.addToSelectedDate),
          C = void 0 !== h ? !h : x === T.G5.MONTH_VIEW,
          E = (0, o.A)(),
          S = w ? (0, o.A)(w) : E,
          I = (0, i.useMemo)(() => {
            let e = E.diff(S, "days");
            return e > 3 || e < -3;
          }, [E, S]);
        var A,
          M = null != h && h;
        let O = (0, o.A)().startOf("week").format("YYYY-MM-DD"),
          D = (0, k.Mu)((e) => e.setSelectedDate);
        (0, i.useEffect)(() => {
          p && M && D({ date: O, omitUpdatingParams: !0 });
        }, []);
        let R = (0, i.useCallback)(
          (e) => {
            x !== e && e && b(e);
          },
          [b, x]
        );
        if (a || !n) return null;
        if (C)
          return (0, l.jsxs)("div", {
            className: "flex gap-2",
            children: [
              c && !v
                ? (0, l.jsx)(e1.A, {
                    content: f("troubleshooter_tooltip"),
                    side: "bottom",
                    children: (0, l.jsx)(ea.$, {
                      color: "primary",
                      target: "_blank",
                      href: ""
                        .concat(y.YW, "/availability/troubleshoot?eventType=")
                        .concat(u),
                      children: f("need_help"),
                    }),
                  })
                : null == m
                ? void 0
                : m(),
              (0, l.jsx)(tT, {
                layout: x,
                enabledLayouts: n,
                onLayoutToggle: R,
              }),
            ],
          });
        let L = S.add(x === T.G5.COLUMN_VIEW ? t : t - 1, "days"),
          P = () => S.format("YYYY") === L.format("YYYY"),
          U = new Intl.DateTimeFormat(null != (A = g.language) ? A : "en", {
            month: "short",
          });
        return (0, l.jsxs)("div", {
          className:
            "border-default relative z-10 flex border-b px-5 py-4 ltr:border-l rtl:border-r",
          children: [
            (0, l.jsxs)("div", {
              className: "flex items-center gap-5 rtl:flex-grow",
              children: [
                (0, l.jsx)(
                  () =>
                    (0, l.jsxs)("h3", {
                      className:
                        "min-w-[150px] text-base font-semibold leading-4",
                      children: [
                        U.format(S.toDate()),
                        " ",
                        S.format("D"),
                        !P() &&
                          (0, l.jsxs)("span", {
                            className: "text-subtle",
                            children: [", ", S.format("YYYY"), " "],
                          }),
                        "-",
                        " ",
                        S.format("MMM") !== L.format("MMM") &&
                          U.format(L.toDate()),
                        " ",
                        L.format("D"),
                        ",",
                        " ",
                        (0, l.jsx)("span", {
                          className: "text-subtle",
                          children: P() ? S.format("YYYY") : L.format("YYYY"),
                        }),
                      ],
                    }),
                  {}
                ),
                (0, l.jsxs)(tN.e, {
                  children: [
                    (0, l.jsx)(ea.$, {
                      className: "group rtl:ml-1 rtl:rotate-180",
                      variant: "icon",
                      color: "minimal",
                      StartIcon: "chevron-left",
                      "aria-label": "Previous Day",
                      onClick: () => N(x === T.G5.COLUMN_VIEW ? -r : -t),
                    }),
                    (0, l.jsx)(ea.$, {
                      className: "group rtl:mr-1 rtl:rotate-180",
                      variant: "icon",
                      color: "minimal",
                      StartIcon: "chevron-right",
                      "aria-label": "Next Day",
                      onClick: () => N(x === T.G5.COLUMN_VIEW ? r : t),
                    }),
                    I &&
                      (0, l.jsx)(ea.$, {
                        className: "capitalize ltr:ml-2 rtl:mr-2",
                        color: "secondary",
                        onClick: () => {
                          _({
                            date: (h ? E.startOf("week") : E).format(
                              "YYYY-MM-DD"
                            ),
                          });
                        },
                        children: f("today"),
                      }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "ml-auto flex gap-2",
              children: [
                null == m ? void 0 : m(),
                (0, l.jsx)(tC.$, {}),
                (0, l.jsx)("div", {
                  className: "fixed top-4 ltr:right-4 rtl:left-4",
                  children: (0, l.jsx)(tT, {
                    layout: x,
                    enabledLayouts: n,
                    onLayoutToggle: R,
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "pointer-events-none opacity-0",
                  "aria-hidden": !0,
                  children: (0, l.jsx)(tT, {
                    layout: x,
                    enabledLayouts: n,
                    onLayoutToggle: R,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      let tS = (e) => {
          let { onLayoutToggle: t, layout: a, enabledLayouts: n } = e,
            r = (0, d.hA)(),
            s = (0, ek.X)(),
            { t: o } = (0, j.Y)(),
            u = (0, i.useMemo)(
              () =>
                [
                  {
                    value: T.G5.MONTH_VIEW,
                    label: (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(eI.A, {
                          name: "calendar",
                          width: "16",
                          height: "16",
                        }),
                        (0, l.jsxs)("span", {
                          className: "sr-only",
                          children: ["$", o("switch_monthly")],
                        }),
                      ],
                    }),
                    tooltip: o("switch_monthly"),
                  },
                  {
                    value: T.G5.WEEK_VIEW,
                    label: (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(eI.A, {
                          name: "grid-3x3",
                          width: "16",
                          height: "16",
                        }),
                        (0, l.jsxs)("span", {
                          className: "sr-only",
                          children: ["$", o("switch_weekly")],
                        }),
                      ],
                    }),
                    tooltip: o("switch_weekly"),
                  },
                  {
                    value: T.G5.COLUMN_VIEW,
                    label: (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(eI.A, {
                          name: "columns-3",
                          width: "16",
                          height: "16",
                        }),
                        (0, l.jsxs)("span", {
                          className: "sr-only",
                          children: ["$", o("switch_columnview")],
                        }),
                      ],
                    }),
                    tooltip: o("switch_columnview"),
                  },
                ].filter((e) => (null == n ? void 0 : n.includes(e.value))),
              [o, n]
            );
          return r || s
            ? null
            : (0, l.jsx)(tk.O, {
                onValueChange: t,
                defaultValue: a,
                options: u,
              });
        },
        tT = (e) => {
          let { enabledLayouts: t, onLayoutToggle: a, layout: n } = e;
          return t.length <= 1
            ? null
            : (0, l.jsx)(tS, {
                onLayoutToggle: a,
                layout: n,
                enabledLayouts: t,
              });
        };
      var tI = a(36515);
      function tA(e) {
        let { users: t, organization: a, disableHref: n = !1, ...r } = e,
          i = [
            {
              href: (0, d.hA)() || n ? null : (0, eH.g)(a.slug),
              image: (0, tI.h)(a.logoUrl, a.name),
              alt: a.name || void 0,
              title: a.name,
            },
          ].concat(
            t.map((e) => ({
              href: n
                ? null
                : ""
                    .concat(e.bookerUrl, "/")
                    .concat(e.username, "?redirect=false"),
              image: (0, eq.c)(e),
              alt: e.name || void 0,
              title: e.name || e.username || "",
            }))
          );
        return (0, l.jsx)(eJ.Z, { ...r, items: i });
      }
      let tM = (e) => {
        var t;
        let { onConnectNow: a, event: n, cooldownMs: r = 0 } = e,
          { t: i } = (0, j.Y)(),
          s = r > 0;
        return (0, l.jsxs)("div", {
          className:
            " bg-default border-subtle mx-2 block items-center gap-3 rounded-xl border p-[6px] text-sm shadow-sm delay-1000 sm:flex",
          children: [
            (0, l.jsxs)("div", {
              className: "flex items-center gap-3 ps-1",
              children: [
                (0, l.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, l.jsx)(tA, {
                      size: "sm",
                      className: "border-muted",
                      organization: {
                        slug: n.entity.orgSlug,
                        name: n.entity.name || "",
                        logoUrl: null != (t = n.entity.logoUrl) ? t : null,
                      },
                      users: n.subsetOfUsers.slice(0, 2),
                      disableHref: !0,
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "border-muted absolute -bottom-0.5 -right-1 h-2 w-2 rounded-full border bg-green-500",
                    }),
                  ],
                }),
                (0, l.jsx)("div", { children: i("dont_want_to_wait") }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "mt-2 flex items-center gap-3 sm:mt-0",
              children: s
                ? (0, l.jsx)(e1.A, {
                    content: i("just_connected_description"),
                    children: (0, l.jsx)("span", {
                      className: "inline-flex",
                      children: (0, l.jsx)(ea.$, {
                        disabled: s,
                        color: "primary",
                        onClick: () => {
                          a();
                        },
                        size: "sm",
                        className: "w-full justify-center rounded-lg sm:w-auto",
                        children: i("connect_now"),
                      }),
                    }),
                  })
                : (0, l.jsx)(ea.$, {
                    color: "primary",
                    onClick: () => {
                      a();
                    },
                    size: "sm",
                    className: "w-full justify-center rounded-lg sm:w-auto",
                    children: i("connect_now"),
                  }),
            }),
          ],
        });
      };
      var tO = a(96074),
        tD = a(7587),
        tR = a(3593);
      let tL = (e) => {
        var t;
        let { extraDays: a, schedule: n, isLoading: r, event: s } = e,
          d = (0, k.Mu)((e) => e.selectedDate),
          u = (0, k.Mu)((e) => e.setSelectedTimeslot),
          c = (0, k.Mu)((e) => e.selectedDuration),
          m = (0, tR.z)((e) => e.overlayBusyDates),
          h =
            "true" === (0, V.qn)("overlayCalendar") ||
            (null === J.L || void 0 === J.L
              ? void 0
              : J.L.getItem("overlayCalendarSwitchDefault")),
          { timezone: f } = (0, ed.v)(),
          g =
            c || (null == s || null == (t = s.data) ? void 0 : t.length) || 30,
          v = (0, tO.N)({ schedule: n, eventDuration: g }),
          p = d ? (0, o.A)(d).toDate() : (0, o.A)().toDate(),
          x = (0, o.A)(p)
            .add(a - 1, "day")
            .toDate();
        (0, i.useEffect)(() => {}, [h]);
        let b = (0, i.useMemo)(
          () =>
            m && h
              ? m.map((e, t) => ({
                  id: t,
                  start: (0, o.A)(e.start).toDate(),
                  end: (0, o.A)(e.end).toDate(),
                  title: "Busy",
                  options: { status: "ACCEPTED" },
                }))
              : [],
          [m, h]
        );
        return (0, l.jsx)("div", {
          className: "h-full [--calendar-dates-sticky-offset:66px]",
          children: (0, l.jsx)(tD.V, {
            isPending: r,
            availableTimeslots: v,
            startHour: 0,
            endHour: 23,
            events: b,
            startDate: p,
            endDate: x,
            onEmptyCellClick: (e) => u(e.toISOString()),
            gridCellsPerHour: 60 / g,
            hoverEventDuration: g,
            hideHeader: !0,
            timezone: f,
          }),
        });
      };
      function tP(e, t) {
        let [a, l] = (0, i.useState)(() => {
          let a = J.L.getItem(e);
          return new Set(a ? JSON.parse(a) : t);
        });
        return (
          (0, i.useEffect)(() => {
            J.L.setItem(e, JSON.stringify(Array.from(a)));
          }, [e, a]),
          {
            set: a,
            addValue: (e) => {
              l((t) => new Set(t).add(e));
            },
            removeById: (e) => {
              l((t) => {
                let a = new Set(t);
                return (
                  a.forEach((t) => {
                    t.externalId === e && a.delete(t);
                  }),
                  a
                );
              });
            },
            toggleValue: (e) => {
              let t = new Set();
              return (
                l((a) => {
                  let l = new Set(a),
                    n = !1;
                  return (
                    l.forEach((t) => {
                      t.externalId === e.externalId && ((n = !0), l.delete(t));
                    }),
                    n || l.add(e),
                    (t = l),
                    l
                  );
                }),
                t
              );
            },
            hasItem: (e) =>
              Array.from(a).some((t) => t.externalId === e.externalId),
            clearSet: () => {
              l(() => new Set()), J.L.removeItem(e);
            },
          }
        );
      }
      function tU(e) {
        let { t } = (0, j.Y)();
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(eC.l, {
            open: e.open,
            onOpenChange: e.onClose,
            children: (0, l.jsxs)(eS.Cf, {
              type: "creation",
              title: t("overlay_my_calendar"),
              description: t("overlay_my_calendar_toc"),
              children: [
                (0, l.jsx)("div", {
                  className: "flex flex-col gap-2",
                  children: (0, l.jsx)(ea.$, {
                    "data-testid": "overlay-calendar-continue-button",
                    onClick: () => {
                      e.onContinue();
                    },
                    className:
                      "gap w-full items-center justify-center font-semibold",
                    StartIcon: "calendar-search",
                    children: t("continue_with", { appName: y.C3 }),
                  }),
                }),
                (0, l.jsx)(eS.Es, { children: (0, l.jsx)(l.Fragment, {}) }),
              ],
            }),
          }),
        });
      }
      var tV = a(45168),
        tF = a(88595);
      let tz = () =>
        (0, l.jsx)(ex.ls, {
          children: (0, l.jsxs)("div", {
            className:
              "border-subtle mt-3 space-y-4 rounded-xl border px-4 py-4 ",
            children: [
              (0, l.jsx)(ex.rr, { className: "h-4 w-full" }),
              (0, l.jsx)(ex.rr, { className: "h-4 w-full" }),
              (0, l.jsx)(ex.rr, { className: "h-4 w-full" }),
              (0, l.jsx)(ex.rr, { className: "h-4 w-full" }),
            ],
          }),
        });
      function tB(e) {
        let {
            connectedCalendars: t,
            isLoading: a,
            open: n,
            onClose: r,
            onClickNoCalendar: s,
            onToggleConnectedCalendar: o,
            checkIsCalendarToggled: d,
          } = e,
          { t: u } = (0, j.Y)(),
          c = (0, ek.X)();
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(eC.l, {
            open: n,
            onOpenChange: r,
            children: (0, l.jsxs)(eS.Cf, {
              enableOverflow: !0,
              type: "creation",
              title: "Calendar Settings",
              className: "pb-4",
              description: u("view_overlay_calendar_events"),
              children: [
                (0, l.jsx)("div", {
                  className: "no-scrollbar max-h-full overflow-y-scroll ",
                  children: a
                    ? (0, l.jsx)(tz, {})
                    : (0, l.jsx)(l.Fragment, {
                        children:
                          0 === t.length
                            ? (0, l.jsx)(el.Y, {
                                Icon: "calendar",
                                headline: u("no_calendar_installed"),
                                description: u(
                                  "no_calendar_installed_description"
                                ),
                                buttonText: u("add_a_calendar"),
                                buttonOnClick: s,
                              })
                            : (0, l.jsx)(l.Fragment, {
                                children: t.map((e) =>
                                  (0, l.jsxs)(
                                    i.Fragment,
                                    {
                                      children: [
                                        e.error &&
                                          !e.calendars &&
                                          (0, l.jsx)(et.F, {
                                            severity: "error",
                                            title: e.error.message,
                                          }),
                                        (null == e ? void 0 : e.error) ===
                                          void 0 &&
                                          e.calendars &&
                                          (0, l.jsxs)(tF.ck, {
                                            className: "flex-col rounded-md",
                                            children: [
                                              (0, l.jsxs)("div", {
                                                className:
                                                  "flex w-full flex-1 items-center space-x-3 pb-4 rtl:space-x-reverse",
                                                children: [
                                                  e.integration.logo &&
                                                    (0, l.jsx)("img", {
                                                      className: (0, W.A)(
                                                        "h-10 w-10",
                                                        e.integration.logo.includes(
                                                          "-dark"
                                                        ) && "dark:invert"
                                                      ),
                                                      src: c
                                                        ? "https://app.cal.com".concat(
                                                            e.integration.logo
                                                          )
                                                        : e.integration.logo,
                                                      alt: "".concat(
                                                        e.integration.title,
                                                        " logo"
                                                      ),
                                                    }),
                                                  (0, l.jsxs)("div", {
                                                    className:
                                                      "flex-grow truncate pl-2",
                                                    children: [
                                                      (0, l.jsx)(tF.ao, {
                                                        component: "h3",
                                                        className:
                                                          "space-x-2 rtl:space-x-reverse",
                                                        children: (0, l.jsx)(
                                                          b(),
                                                          {
                                                            href: "/apps/".concat(
                                                              e.integration.slug
                                                            ),
                                                            children:
                                                              e.integration
                                                                .name ||
                                                              e.integration
                                                                .title,
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)(tF.Zq, {
                                                        component: "p",
                                                        children:
                                                          e.primary.email,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, l.jsx)("div", {
                                                className:
                                                  "border-subtle w-full border-t pt-4",
                                                children: (0, l.jsx)("ul", {
                                                  className: "space-y-4",
                                                  children: e.calendars.map(
                                                    (t, a) => {
                                                      var n;
                                                      let r =
                                                        null !=
                                                        (n = t.integrationTitle)
                                                          ? n
                                                          : "calendar-switch-".concat(
                                                              a
                                                            );
                                                      return (0, l.jsxs)(
                                                        "li",
                                                        {
                                                          className:
                                                            "flex gap-3",
                                                          children: [
                                                            (0, l.jsx)(tV.d, {
                                                              id: r,
                                                              checked: d(
                                                                t.externalId,
                                                                e.credentialId
                                                              ),
                                                              onCheckedChange:
                                                                () => {
                                                                  o(
                                                                    t.externalId,
                                                                    e.credentialId
                                                                  );
                                                                },
                                                            }),
                                                            (0, l.jsx)(
                                                              "label",
                                                              {
                                                                htmlFor: r,
                                                                children:
                                                                  t.name,
                                                              }
                                                            ),
                                                          ],
                                                        },
                                                        r
                                                      );
                                                    }
                                                  ),
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    },
                                    e.credentialId
                                  )
                                ),
                              }),
                      }),
                }),
                (0, l.jsx)("div", {
                  className: "mt-4 flex gap-2 self-end",
                  children: (0, l.jsx)(eS.HM, { children: u("done") }),
                }),
              ],
            }),
          }),
        });
      }
      function tY(e) {
        let { enabled: t, hasSession: a, onStateChange: n } = e,
          { t: r } = (0, j.Y)(),
          s = (0, tR.z)((e) => e.setContinueWithProviderModal),
          o = (0, tR.z)((e) => e.setCalendarSettingsOverlayModal),
          d = (0, k.Mu)((e) => e.layout);
        return (
          (0, i.useEffect)(() => {
            !a && t && (n(!1), s(!0));
          }, [a, t, s, n]),
          (0, l.jsxs)("div", {
            className: (0, W.A)(
              "hidden gap-2",
              "week_view" === d || "column_view" === d ? "xl:flex" : "md:flex"
            ),
            children: [
              (0, l.jsxs)("div", {
                className: "flex items-center gap-2 pr-2",
                children: [
                  (0, l.jsx)(tV.d, {
                    "data-testid": "overlay-calendar-switch",
                    checked: t,
                    id: "overlayCalendar",
                    onCheckedChange: (e) => {
                      a ? n(e) : s(e);
                    },
                  }),
                  (0, l.jsx)("label", {
                    htmlFor: "overlayCalendar",
                    className:
                      "text-emphasis text-sm font-medium leading-none hover:cursor-pointer",
                    children: r("overlay_my_calendar"),
                  }),
                ],
              }),
              a &&
                (0, l.jsx)(ea.$, {
                  size: "base",
                  "data-testid": "overlay-calendar-settings-button",
                  variant: "icon",
                  color: "secondary",
                  StartIcon: "settings",
                  onClick: () => {
                    o(!0);
                  },
                }),
            ],
          })
        );
      }
      let tW = (e) => {
          let {
              connectedCalendars: t,
              overlayBusyDates: a,
              onToggleCalendar: n,
              isOverlayCalendarEnabled: r,
              loadingConnectedCalendar: d,
              handleClickNoCalendar: u,
              handleSwitchStateChange: c,
              handleClickContinue: m,
              hasSession: h,
            } = e,
            f = (0, ek.X)(),
            {
              handleCloseContinueModal: g,
              handleCloseSettingsModal: v,
              isOpenOverlayContinueModal: p,
              isOpenOverlaySettingsModal: x,
              handleToggleConnectedCalendar: b,
              checkIsCalendarToggled: y,
            } = ((e) => {
              let {
                  connectedCalendars: t,
                  overlayBusyDates: a,
                  onToggleCalendar: l,
                } = e,
                {
                  set: n,
                  toggleValue: r,
                  hasItem: d,
                } = tP("toggledConnectedCalendars", []),
                [u, c] = (0, i.useState)(!1),
                [m, h] = (0, tR.z)(
                  (e) => [
                    e.continueWithProviderModal,
                    e.setContinueWithProviderModal,
                  ],
                  s.x
                ),
                [f, g] = (0, tR.z)(
                  (e) => [
                    e.calendarSettingsOverlayModal,
                    e.setCalendarSettingsOverlayModal,
                  ],
                  s.x
                ),
                v = (0, tR.z)((e) => e.setOverlayBusyDates),
                { timezone: p } = (0, ts.x)();
              return (
                (0, i.useEffect)(() => {
                  if (a) {
                    let e = (0, o.A)(),
                      t = (e.tz(p).utcOffset() - e.utcOffset()) / 60;
                    v(
                      a.map((e) => ({
                        ...e,
                        start: (0, o.A)(e.start).add(t, "hours").toDate(),
                        end: (0, o.A)(e.end).add(t, "hours").toDate(),
                      }))
                    );
                  }
                }, [a]),
                (0, i.useEffect)(() => {
                  t &&
                    0 === n.size &&
                    !u &&
                    (t.forEach((e) => {
                      var t;
                      null == (t = e.calendars) ||
                        t.forEach((t) => {
                          let a = {
                            credentialId: e.credentialId,
                            externalId: t.externalId,
                          };
                          t.primary && r(a);
                        });
                    }),
                    c(!0));
                }, [d, n, u]),
                {
                  isOpenOverlayContinueModal: m,
                  isOpenOverlaySettingsModal: f,
                  handleCloseContinueModal: (e) => h(e),
                  handleCloseSettingsModal: (e) => g(e),
                  handleToggleConnectedCalendar: (e, t) => {
                    let a = r({ credentialId: t, externalId: e });
                    v([]), l(a);
                  },
                  checkIsCalendarToggled: (e, t) =>
                    d({ credentialId: t, externalId: e }),
                }
              );
            })({
              connectedCalendars: t,
              overlayBusyDates: a,
              onToggleCalendar: n,
            });
          return ((0, i.useEffect)(() => {
            r && g(!1);
          }, [r, g]),
          f && (null == t ? void 0 : t.length) === 0)
            ? null
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(tY, {
                    enabled: r,
                    hasSession: h,
                    onStateChange: c,
                  }),
                  !f &&
                    (0, l.jsx)(tU, {
                      open: p && !r,
                      onClose: g,
                      onContinue: m,
                    }),
                  (0, l.jsx)(tB, {
                    connectedCalendars: t,
                    open: x,
                    onClose: v,
                    isLoading: d,
                    onToggleConnectedCalendar: b,
                    onClickNoCalendar: () => {
                      u();
                    },
                    checkIsCalendarToggled: y,
                  }),
                ],
              });
        },
        tH = (e) => ((e.returnValue = "/o"), "/o"),
        tG = (e) => {
          let {
              bookingId: t,
              onGoBack: a,
              expiryTime: n,
              instantVideoMeetingUrl: s,
              orgName: d,
            } = e,
            { t: u } = (0, j.Y)(),
            [c, m] = (0, i.useState)(v()),
            [h, f] = (0, i.useState)(!1),
            g = (0, r.useRouter)();
          function v() {
            let e = (0, o.A)();
            return Math.max((0, o.A)(n).diff(e), 0);
          }
          return (
            (0, i.useEffect)(() => {
              if (!n) return;
              let e = setInterval(() => {
                m(v()), f(n && new Date(n) < new Date());
              }, 1e3);
              return () => {
                clearInterval(e);
              };
            }, [n]),
            (0, i.useEffect)(
              () =>
                !n || h || s
                  ? void window.removeEventListener("beforeunload", tH)
                  : (window.addEventListener("beforeunload", tH),
                    () => {
                      window.removeEventListener("beforeunload", tH);
                    }),
              [n, h, s]
            ),
            (0, i.useEffect)(() => {
              s && (window.removeEventListener("beforeunload", tH), g.push(s));
            }, [s]),
            (0, l.jsx)(eC.l, {
              open: !!t && !!n,
              children: (0, l.jsx)(eS.Cf, {
                enableOverflow: !0,
                className: "py-8",
                children: (0, l.jsx)("div", {
                  children: h
                    ? (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("p", {
                            className: "font-medium",
                            children: u("please_book_a_time_sometime_later"),
                          }),
                          (0, l.jsx)(ea.$, {
                            className: "mt-4",
                            onClick: () => {
                              a();
                            },
                            color: "primary",
                            children: u("schedule_instead"),
                          }),
                        ],
                      })
                    : (0, l.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, l.jsx)("p", {
                            className: "font-medium",
                            children: u("connecting_you_to_someone", {
                              orgName: d,
                            }),
                          }),
                          (0, l.jsx)("p", {
                            className: "font-bold",
                            children: u("please_do_not_close_this_tab"),
                          }),
                          (0, l.jsx)("p", {
                            className: "mt-2 font-medium",
                            children: u("please_schedule_future_call", {
                              seconds: ((e) => {
                                let t = o.A.duration(e),
                                  a = t.seconds(),
                                  l = t.minutes();
                                return "".concat(l, "m ").concat(a, "s");
                              })(c),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "mt-4 h-[414px]",
                            children: (0, l.jsx)("iframe", {
                              className: "mx-auto h-full w-[276px] rounded-lg",
                              src: "https://cal.games/",
                            }),
                          }),
                        ],
                      }),
                }),
              }),
            })
          );
        },
        tq = {
          calendar: "[grid-area:calendar]",
          main: "[grid-area:main]",
          meta: "[grid-area:meta]",
          timeslots: "[grid-area:timeslots]",
          header: "[grid-area:header]",
        },
        tZ = (0, i.forwardRef)(function (e, t) {
          let a,
            { children: n, area: r, visible: i, className: s, ...o } = e,
            d = (0, k.Mu)((e) => e.layout);
          return ((a = "string" == typeof r ? tq[r] : tq[r[d] || r.default]),
          i || void 0 === i)
            ? (0, l.jsx)(c.m.div, {
                ref: t,
                className: (0, W.A)(a, s),
                layout: !0,
                ...o,
                children: n,
              })
            : null;
        }),
        tJ = (e) => {
          let { children: t, title: a } = e;
          return (0, l.jsx)("div", {
            className: "mx-auto w-full max-w-2xl",
            children: (0, l.jsxs)("div", {
              className:
                "border-subtle bg-default dark:bg-muted overflow-hidden rounded-lg border p-10",
              children: [
                (0, l.jsx)("h2", {
                  className: "font-cal mb-4 text-3xl",
                  children: a,
                }),
                t,
              ],
            }),
          });
        },
        t$ = () => {
          let { t: e } = (0, j.Y)();
          return (0, l.jsx)(tJ, {
            title: e("404_page_not_found"),
            children: (0, l.jsx)("p", {
              className: "max-w-[50ch]",
              children: e("booker_event_not_found"),
            }),
          });
        };
      var tX = a(40459);
      let tQ = () => {
          let e = (0, i.useRef)(
            ((e) => {
              let { percentage: t } = e;
              if (tX.env.NEXT_PUBLIC_IS_E2E || t >= 100) return !0;
              let a = ((e) => {
                var t;
                return "undefined" == typeof document
                  ? null
                  : null ==
                    (t = document.cookie
                      .split(";")
                      .find((t) => t.trim().startsWith("".concat(e, "="))))
                  ? void 0
                  : t.split("=")[1];
              })("uid");
              return !!a && parseInt(a.slice(-4), 16) % 100 < t;
            })({ percentage: y.MT })
          );
          return (
            (0, i.useEffect)(() => {
              console.log("QuickAvailabilityCheck feature enabled:", e.current);
            }, []),
            e.current
          );
        },
        tK = a(27895).l;
      var t0 = a(56085);
      let t1 = (e) =>
        !(e.length < 16) &&
        "-" === e[4] &&
        "-" === e[7] &&
        "T" === e[10] &&
        ":" === e[13];
      function t2(e, t) {
        return (
          !!e &&
          e.some((e) =>
            ((e) => {
              let { slotTimeInIso: t, slotToCheckInIso: a } = e;
              return (
                t === a ||
                (t1(t) && t1(a)
                  ? t.slice(0, 16) === a.slice(0, 16)
                  : (console.log("Invalid ISO string format detected", {
                      slotTimeInIso: t,
                      slotToCheckInIso: a,
                    }),
                    !0))
              );
            })({ slotTimeInIso: e.time, slotToCheckInIso: t })
          )
        );
      }
      var t4 = a(40459);
      let t5 = (e) => {
          var t, a, n, r, m, v, x, b, j, E, I;
          let {
              username: A,
              eventSlug: M,
              hideBranding: O = !1,
              entity: D,
              isInstantMeeting: R = !1,
              onGoBackInstantMeeting: L,
              onConnectNowInstantMeeting: P,
              onOverlayClickNoCalendar: z,
              onClickOverlayContinue: q,
              onOverlaySwitchStateChange: Z,
              sessionUsername: J,
              rescheduleUid: $,
              hasSession: Q,
              extraOptions: K,
              bookings: ee,
              verifyEmail: et,
              slots: ea,
              calendars: el,
              bookerForm: en,
              event: er,
              bookerLayout: ei,
              schedule: es,
              verifyCode: eo,
              isPlatform: ed,
              orgBannerUrl: eu,
              customClassNames: ec,
              areInstantMeetingParametersSet: em = !1,
              userLocale: eh,
              hasValidLicense: ef,
              isBookingDryRun: eg,
              renderCaptcha: ev,
              hashedLink: ep,
              confirmButtonDisabled: ex,
              timeZones: eb,
              eventMetaChildren: ej,
              roundRobinHideOrgAndTeam: ew,
              showNoAvailabilityDialog: e_,
            } = e,
            eN = (0, Y.O)(),
            ek = p(),
            [eC, eE] = (0, k.Mu)((e) => [e.state, e.setState], s.x),
            eS = (0, k.Mu)((e) => e.selectedDate),
            {
              shouldShowFormInDialog: eT,
              hasDarkBackground: eI,
              extraDays: eA,
              columnViewExtraDays: eM,
              isMobile: eO,
              layout: eD,
              hideEventTypeDetails: eR,
              isEmbed: eL,
              bookerLayouts: eU,
            } = ei,
            [eV, eB] = (0, k.Mu)(
              (e) => [e.seatedEventData, e.setSeatedEventData],
              s.x
            ),
            {
              selectedTimeslot: eY,
              setSelectedTimeslot: eW,
              allSelectedTimeslots: eH,
            } = ea,
            [eG, eq] = (0, k.Mu)((e) => [e.dayCount, e.setDayCount], s.x),
            eZ = (0, F.k)(
              null == es || null == (t = es.data) ? void 0 : t.slots
            ).filter((e) => 0 >= (0, o.A)(eS).diff(e, "day")),
            eJ =
              eZ.length < eA
                ? (eA - eZ.length + 1) * 7
                : 7 * (eZ.length === eA),
            e$ = eZ.slice(0, eA + 1);
          0 !== eZ.length &&
            (eM.current =
              Math.abs((0, o.A)(eS).diff(e$[e$.length - 2], "day")) + eJ);
          let eX = Math.abs((0, o.A)(eS).diff(e$[e$.length - 1], "day")) + eJ,
            eQ = ((e, t) => {
              var a, l;
              let n = (0, th.I)(),
                [r, s] = (0, tc.l)(),
                o =
                  null == (l = window) || null == (a = l.isEmbed)
                    ? void 0
                    : a.call(l);
              return (
                (0, i.useEffect)(() => {
                  let a = tv[e][t] || tv[e].default;
                  if (!r.current) return;
                  let l = { height: (null == a ? void 0 : a.height) || "auto" },
                    i = {
                      gridTemplateAreas:
                        null == a ? void 0 : a.gridTemplateAreas,
                      width: (null == a ? void 0 : a.width) || "auto",
                      gridTemplateColumns:
                        null == a ? void 0 : a.gridTemplateColumns,
                      gridTemplateRows: null == a ? void 0 : a.gridTemplateRows,
                      minHeight: null == a ? void 0 : a.minHeight,
                    };
                  if (n || "mobile" === e || o) {
                    let e = { ...i, ...l };
                    Object.keys(e).forEach((t) => {
                      "height" === t
                        ? (r.current.style.height =
                            "100vh" === l.height && o ? "100%" : l.height)
                        : (r.current.style[t] = e[t]);
                    });
                  } else
                    Object.keys(i).forEach((e) => {
                      r.current.style[e] = i[e];
                    }),
                      s(r.current, l, {
                        duration: 0.5,
                        ease: (0, tm.A)(0.4, 0, 0.2, 1),
                      });
                }, [s, o, r, e, n, t]),
                r
              );
            })(eD, eC),
            eK = (0, i.useRef)(null),
            e0 = tQ(),
            e1 = eO ? "div" : h.A,
            {
              bookerFormErrorRef: e2,
              key: e4,
              formEmail: e5,
              bookingForm: e3,
              errors: e6,
            } = en,
            {
              handleBookEvent: e8,
              errors: e7,
              loadingStates: e9,
              expiryTime: te,
              instantVideoMeetingUrl: tt,
              instantConnectCooldownMs: ta,
            } = ee,
            tl = e3.watch("cfToken"),
            {
              isEmailVerificationModalVisible: tn,
              setEmailVerificationModalVisible: tr,
              handleVerifyEmail: ti,
              renderConfirmNotVerifyEmailButtonCond: ts,
              isVerificationCodeSending: to,
            } = et,
            {
              overlayBusyDates: td,
              isOverlayCalendarEnabled: tu,
              connectedCalendars: tg,
              loadingConnectedCalendar: tx,
              onToggleCalendar: tb,
            } = el,
            ty = (0, i.useRef)(!1),
            tw = (0, d.V4)(),
            tN = () => {
              eO &&
                !ty.current &&
                eK.current &&
                !tw.disableAutoScroll &&
                (B(eK.current, eL), (ty.current = !0));
            },
            tk = ((e, t, a, l, n, r) => {
              let s = e.getValues(),
                [o, d] = (0, i.useState)(!1),
                u = (0, C.JH)((e) => e.rescheduleUid);
              return (
                (0, i.useEffect)(() => {
                  let e = async () => {
                      if (!n || (r && r.length > 1)) return void d(!1);
                      try {
                        let e = (function (e) {
                            let { bookingFields: t, view: a } = e;
                            return U({
                              schema: T.e8.and(S.Ay.record(S.Ay.any())),
                              bookingFields: t,
                              isPartialSchema: !1,
                              view: a,
                              checkOptional: !0,
                            });
                          })({
                            bookingFields: n,
                            view: u ? "reschedule" : "booking",
                          }),
                          t = await e.safeParseAsync(s.responses);
                        d(t.success);
                      } catch (e) {
                        d(!1);
                      }
                    },
                    i = !a && !l;
                  "selecting_time" === t && i && e();
                }, [s, n, u, t, l, a]),
                o
              );
            })(
              e3,
              eC,
              R,
              eD == T.G5.WEEK_VIEW,
              null == er || null == (a = er.data) ? void 0 : a.bookingFields,
              null == er || null == (n = er.data) ? void 0 : n.locations
            ),
            tC = !!(
              !t4.env.NEXT_PUBLIC_IS_E2E &&
              ev &&
              y.UR &&
              "1" === y.sX &&
              ("booking" === eC || ("selecting_time" === eC && tk))
            );
          (0, _.IR)({ bookerState: eC, slotsQuery: es }),
            (0, i.useEffect)(() => {
              if (er.isPending) return eE("loading");
              if (!eS) return eE("selecting_date");
              if (!eY) return eE("selecting_time");
              let e = !R && eD !== T.G5.WEEK_VIEW;
              return eY && tk && e ? eE("selecting_time") : eE("booking");
            }, [er, eS, eY, eE, tk, eD, R]);
          let tS = e0
              ? eH.filter((e) => {
                  var t;
                  return !((e) => {
                    let {
                      scheduleData: t,
                      slotToCheckInIso: a,
                      quickAvailabilityChecks: l,
                    } = e;
                    if (
                      l &&
                      l.some(
                        (e) => e.utcStartIso === a && "available" !== e.status
                      )
                    )
                      return !1;
                    if (!t) return !0;
                    let n = t1(a) ? a.split("T")[0] : null;
                    return (
                      !n ||
                      (function (e) {
                        let {
                            scheduleData: t,
                            dateInGMT: a,
                            slotToCheckInIso: l,
                          } = e,
                          n = (0, o.A)(a)
                            .subtract(1, "day")
                            .format("YYYY-MM-DD"),
                          r = (0, o.A)(a).add(1, "day").format("YYYY-MM-DD"),
                          i = t.slots[a],
                          s = t.slots[n],
                          d = t.slots[r];
                        return !!(t2(i, l) || t2(s, l) || t2(d, l));
                      })({ scheduleData: t, dateInGMT: n, slotToCheckInIso: a })
                    );
                  })({
                    scheduleData:
                      null != (t = null == es ? void 0 : es.data) ? t : null,
                    slotToCheckInIso: e,
                    quickAvailabilityChecks: ea.quickAvailabilityChecks,
                  });
                })
              : [],
            tT = (0, V.qn)("slot");
          (0, i.useEffect)(() => {
            eW(tT || null);
          }, [tT, eW]);
          let tI = (0, i.useMemo)(() => {
            var e, t, a, n;
            return "booking" === eC
              ? (0, l.jsx)(
                  ey,
                  {
                    timeslot: eY,
                    shouldRenderCaptcha: tC,
                    onCancel: () => {
                      eW(null),
                        y.lw && (null == es || es.invalidate()),
                        eV.bookingUid &&
                          eB({ ...eV, bookingUid: void 0, attendees: void 0 });
                    },
                    onSubmit: () => (ts ? e8() : ti()),
                    errorRef: e2,
                    errors: { ...e6, ...e7 },
                    isTimeslotUnavailable: !R && tS.includes(eY || ""),
                    loadingStates: e9,
                    renderConfirmNotVerifyEmailButtonCond: ts,
                    bookingForm: e3,
                    eventQuery: er,
                    extraOptions: K,
                    isVerificationCodeSending: to,
                    confirmButtonDisabled: ex,
                    classNames: {
                      confirmButton:
                        null == ec || null == (e = ec.confirmStep)
                          ? void 0
                          : e.confirmButton,
                      backButton:
                        null == ec || null == (t = ec.confirmStep)
                          ? void 0
                          : t.backButton,
                    },
                    isPlatform: ed,
                    children: (0, l.jsx)(l.Fragment, {
                      children:
                        !ed &&
                        (0, l.jsx)(tG, {
                          expiryTime: te,
                          bookingId: parseInt((0, V.qn)("bookingId") || "0"),
                          instantVideoMeetingUrl: tt,
                          onGoBack: () => {
                            L();
                          },
                          orgName:
                            null == (n = er.data) || null == (a = n.entity)
                              ? void 0
                              : a.name,
                        }),
                    }),
                  },
                  e4
                )
              : (0, l.jsx)(l.Fragment, {});
          }, [
            e2,
            tt,
            eC,
            e3,
            e7,
            er,
            te,
            K,
            e6,
            e8,
            ti,
            e4,
            e9,
            L,
            ts,
            eV,
            eB,
            eW,
            ed,
            tC,
            to,
            tS,
          ]);
          return D.considerUnpublished && !$
            ? (0, l.jsx)(H.R, { ...D })
            : er.isSuccess && !er.data
            ? (0, l.jsx)(t$, {})
            : "loading" === eC
            ? null
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  er.data && !ed
                    ? (0, l.jsx)(g.A, { eventType: er.data })
                    : (0, l.jsx)(l.Fragment, {}),
                  (eg || (0, t0.C)(eN)) && (0, l.jsx)(ez, { isEmbed: eL }),
                  (0, l.jsxs)("div", {
                    className: (0, W.A)(
                      "main",
                      "text-default flex min-h-full w-full flex-col items-center",
                      eD === T.G5.MONTH_VIEW && !eL && "my-20 ",
                      eD === T.G5.MONTH_VIEW
                        ? "overflow-visible"
                        : "overflow-clip",
                      "".concat(null == ec ? void 0 : ec.bookerWrapper)
                    ),
                    children: [
                      (0, l.jsx)("div", {
                        ref: eQ,
                        "data-testid": "booker-container",
                        className: (0, W.A)(
                          ...tp(eD, eC, eR),
                          "bg-default dark:bg-muted grid max-w-full items-start dark:[color-scheme:dark] sm:transition-[width] sm:duration-300 sm:motion-reduce:transition-none md:flex-row",
                          (eD === T.G5.MONTH_VIEW || eL) &&
                            "border-subtle rounded-md",
                          !eL && "sm:transition-[width] sm:duration-300",
                          eL &&
                            eD === T.G5.MONTH_VIEW &&
                            "border-booker sm:border-booker-width",
                          !eL &&
                            eD === T.G5.MONTH_VIEW &&
                            "border-subtle border",
                          "".concat(null == ec ? void 0 : ec.bookerContainer)
                        ),
                        children: (0, l.jsxs)(u.N, {
                          children: [
                            !R &&
                              (0, l.jsx)(tZ, {
                                area: "header",
                                className: (0, W.A)(
                                  eD === T.G5.MONTH_VIEW &&
                                    "fixed top-4 z-10 ltr:right-4 rtl:left-4",
                                  (eD === T.G5.COLUMN_VIEW ||
                                    eD === T.G5.WEEK_VIEW) &&
                                    "bg-default dark:bg-muted sticky top-0 z-10"
                                ),
                                children:
                                  ed && eD === T.G5.MONTH_VIEW
                                    ? (0, l.jsx)(l.Fragment, {})
                                    : (0, l.jsx)(tE, {
                                        isMyLink: A === J,
                                        eventSlug: M,
                                        enabledLayouts: eU.enabledLayouts,
                                        extraDays:
                                          eD === T.G5.COLUMN_VIEW
                                            ? eM.current
                                            : eA,
                                        isMobile: eO,
                                        nextSlots: eX,
                                        renderOverlay: () =>
                                          eL
                                            ? (0, l.jsx)(l.Fragment, {})
                                            : (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(tW, {
                                                  isOverlayCalendarEnabled: tu,
                                                  connectedCalendars: tg,
                                                  loadingConnectedCalendar: tx,
                                                  overlayBusyDates: td,
                                                  onToggleCalendar: tb,
                                                  hasSession: Q,
                                                  handleClickContinue: q,
                                                  handleSwitchStateChange: Z,
                                                  handleClickNoCalendar: () => {
                                                    z();
                                                  },
                                                }),
                                              }),
                                      }),
                              }),
                            (0, l.jsx)(
                              e1,
                              {
                                className: (0, W.A)(
                                  "relative z-10 flex [grid-area:meta]"
                                ),
                                children: (0, l.jsxs)(tZ, {
                                  area: "meta",
                                  className:
                                    "max-w-screen flex w-full flex-col md:w-[var(--booker-meta-width)]",
                                  children: [
                                    !eR &&
                                      eu &&
                                      (0, l.jsx)("img", {
                                        loading: "eager",
                                        className:
                                          "-mb-9 h-16 object-cover object-top ltr:rounded-tl-md rtl:rounded-tr-md sm:h-auto",
                                        alt: "org banner",
                                        src: eu,
                                      }),
                                    !eR &&
                                      (0, l.jsx)(tj, {
                                        selectedTimeslot: eY,
                                        classNames: {
                                          eventMetaContainer:
                                            null == ec ||
                                            null ==
                                              (r = ec.eventMetaCustomClassNames)
                                              ? void 0
                                              : r.eventMetaContainer,
                                          eventMetaTitle:
                                            null == ec ||
                                            null ==
                                              (m = ec.eventMetaCustomClassNames)
                                              ? void 0
                                              : m.eventMetaTitle,
                                          eventMetaTimezoneSelect:
                                            null == ec ||
                                            null ==
                                              (v = ec.eventMetaCustomClassNames)
                                              ? void 0
                                              : v.eventMetaTimezoneSelect,
                                        },
                                        event: er.data,
                                        isPending: er.isPending,
                                        isPlatform: ed,
                                        isPrivateLink: !!ep,
                                        locale: eh,
                                        timeZones: eb,
                                        roundRobinHideOrgAndTeam: ew,
                                        children: ej,
                                      }),
                                    eD !== T.G5.MONTH_VIEW &&
                                      ("mobile" !== eD || "booking" !== eC) &&
                                      (0, l.jsx)("div", {
                                        className: "mt-auto px-5 py-3",
                                        children: (0, l.jsx)(eF, {
                                          classNames:
                                            null == ec
                                              ? void 0
                                              : ec.datePickerCustomClassNames,
                                          event: er,
                                          slots:
                                            null == es || null == (x = es.data)
                                              ? void 0
                                              : x.slots,
                                          isLoading: es.isPending,
                                          scrollToTimeSlots: tN,
                                          showNoAvailabilityDialog: e_,
                                        }),
                                      }),
                                  ],
                                }),
                              },
                              "meta"
                            ),
                            (0, l.jsx)(
                              tZ,
                              {
                                area: "main",
                                className:
                                  "sticky top-0 ml-[-1px] h-full p-6 md:w-[var(--booker-main-width)] md:border-l",
                                ...tf,
                                visible: "booking" === eC && !eT,
                                children: tI,
                              },
                              "book-event-form"
                            ),
                            (0, l.jsx)(
                              tZ,
                              {
                                area: "main",
                                visible:
                                  "booking" !== eC && eD === T.G5.MONTH_VIEW,
                                ...tf,
                                initial: "visible",
                                className:
                                  "md:border-subtle ml-[-1px] h-full flex-shrink px-5 py-3 md:border-l lg:w-[var(--booker-main-width)]",
                                children: (0, l.jsx)(eF, {
                                  classNames:
                                    null == ec
                                      ? void 0
                                      : ec.datePickerCustomClassNames,
                                  event: er,
                                  slots:
                                    null == es || null == (b = es.data)
                                      ? void 0
                                      : b.slots,
                                  isLoading: es.isPending,
                                  scrollToTimeSlots: tN,
                                  showNoAvailabilityDialog: e_,
                                }),
                              },
                              "datepicker"
                            ),
                            (0, l.jsx)(
                              tZ,
                              {
                                area: "main",
                                visible: eD === T.G5.WEEK_VIEW,
                                className:
                                  "border-subtle sticky top-0 ml-[-1px] h-full md:border-l",
                                ...tf,
                                children: (0, l.jsx)(tL, {
                                  extraDays: eA,
                                  schedule: es.data,
                                  isLoading: es.isPending,
                                  event: er,
                                }),
                              },
                              "large-calendar"
                            ),
                            (0, l.jsx)(
                              tZ,
                              {
                                area: {
                                  default: "main",
                                  month_view: "timeslots",
                                },
                                visible:
                                  (eD !== T.G5.WEEK_VIEW &&
                                    "selecting_time" === eC) ||
                                  eD === T.G5.COLUMN_VIEW,
                                className: (0, W.A)(
                                  "border-subtle rtl:border-default flex h-full w-full flex-col overflow-x-auto px-5 py-3 pb-0 rtl:border-r ltr:md:border-l",
                                  eD === T.G5.MONTH_VIEW &&
                                    "h-full overflow-hidden md:w-[var(--booker-timeslots-width)]",
                                  eD !== T.G5.MONTH_VIEW && "sticky top-0"
                                ),
                                ref: eK,
                                ...tf,
                                children: (0, l.jsx)(X, {
                                  onAvailableTimeSlotSelect: (e) => {
                                    eW(e);
                                  },
                                  customClassNames:
                                    null == ec
                                      ? void 0
                                      : ec.availableTimeSlotsCustomClassNames,
                                  extraDays: eA,
                                  limitHeight: eD === T.G5.MONTH_VIEW,
                                  schedule: es,
                                  isLoading: es.isPending,
                                  seatsPerTimeSlot:
                                    null == (j = er.data)
                                      ? void 0
                                      : j.seatsPerTimeSlot,
                                  unavailableTimeSlots: tS,
                                  showAvailableSeatsCount:
                                    null == (E = er.data)
                                      ? void 0
                                      : E.seatsShowAvailabilityCount,
                                  event: er,
                                  loadingStates: e9,
                                  renderConfirmNotVerifyEmailButtonCond: ts,
                                  isVerificationCodeSending: to,
                                  onSubmit: (e) => (ts ? e8(e) : ti()),
                                  skipConfirmStep: tk,
                                  shouldRenderCaptcha: tC,
                                  watchedCfToken: tl,
                                  confirmButtonDisabled: ex,
                                  confirmStepClassNames:
                                    null == ec ? void 0 : ec.confirmStep,
                                }),
                              },
                              "timeslots"
                            ),
                          ],
                        }),
                      }),
                      (0, l.jsx)(t_, {
                        visible:
                          "booking" !== eC && eD === T.G5.MONTH_VIEW && !eO,
                        dayCount: eG,
                        isScheduleLoading: es.isLoading,
                        onButtonClick: () => {
                          eq(null);
                        },
                      }),
                      "booking" !== eC &&
                        (null == (I = er.data)
                          ? void 0
                          : I.showInstantEventConnectNowModal) &&
                        em &&
                        (0, l.jsx)("div", {
                          className: (0, W.A)(
                            "animate-fade-in-up  z-40 my-2 opacity-0",
                            eD === T.G5.MONTH_VIEW && eL ? "" : "fixed bottom-2"
                          ),
                          style: { animationDelay: "1s" },
                          children: (0, l.jsx)(tM, {
                            event: er.data,
                            cooldownMs: ta,
                            onConnectNow: () => {
                              P();
                            },
                          }),
                        }),
                      tC &&
                        (0, l.jsx)("div", {
                          className: "mb-6 mt-auto pt-6",
                          children: (0, l.jsx)(N.default, {
                            appearance: "interaction-only",
                            onVerify: (e) => {
                              e3.setValue("cfToken", e);
                            },
                          }),
                        }),
                      !O &&
                        (!ed || ek) &&
                        !tC &&
                        (0, l.jsx)(
                          c.m.span,
                          {
                            className: (0, W.A)(
                              "mb-6 mt-auto pt-6 [&_img]:h-[15px]",
                              eI ? "dark" : "",
                              eD === T.G5.MONTH_VIEW ? "block" : "hidden"
                            ),
                            children: (0, l.jsx)(w, {
                              logoOnly: !0,
                              hasValidLicense: ef,
                            }),
                          },
                          "logo"
                        ),
                    ],
                  }),
                  (0, l.jsx)(l.Fragment, {
                    children:
                      eo && e5
                        ? (0, l.jsx)(G.X, {
                            isOpenDialog: tn,
                            setIsOpenDialog: tr,
                            email: e5,
                            isUserSessionRequiredToVerify: !1,
                            verifyCodeWithSessionNotRequired:
                              eo.verifyCodeWithSessionNotRequired,
                            verifyCodeWithSessionRequired:
                              eo.verifyCodeWithSessionRequired,
                            error: eo.error,
                            resetErrors: eo.resetErrors,
                            isPending: eo.isPending,
                            setIsPending: eo.setIsPending,
                          })
                        : (0, l.jsx)(l.Fragment, {}),
                  }),
                  (0, l.jsx)(eP, {
                    onCancel: () => eW(null),
                    visible: "booking" === eC && eT,
                    children: tI,
                  }),
                  (0, l.jsx)(f.l$, { position: "bottom-right" }),
                ],
              });
        },
        t3 = (e) =>
          (0, l.jsx)(m.F, {
            strict: !0,
            features: tK,
            children: (0, l.jsx)(t5, { ...e }),
          });
      var t6 = a(31026);
      let t8 = (e) => T.zP.find((t) => t === e);
      var t7 = a(72935);
      let t9 = (e) => {
        var t;
        let { values: a, hasSession: l, stableHashExtraOptions: n } = e;
        return ""
          .concat(Object.keys(a).length, "_")
          .concat(+!!l, "_")
          .concat(null != (t = a.bookingId) ? t : 0, "_")
          .concat(n);
      };
      var ae = a(81562),
        at = a(32590),
        aa = a(73201),
        al = a(22339);
      let an = (e) => {
        let {
            values: t,
            event: a,
            date: l,
            duration: n,
            timeZone: r,
            language: i,
            rescheduleUid: s,
            rescheduledBy: d,
            username: u,
            metadata: c,
            bookingUid: m,
            seatReferenceUid: h,
            hashedLink: f,
            teamMemberEmail: g,
            crmOwnerRecordType: v,
            crmAppSlug: p,
            crmRecordId: x,
            orgSlug: b,
            routingFormSearchParams: y,
            isDryRunProp: j,
            verificationCode: w,
          } = e,
          _ = new URLSearchParams(null != y ? y : window.location.search),
          N = (0, al.R)(_),
          k = _.get("cal.routingFormResponseId"),
          C = k ? Number(k) : void 0,
          E = "true" === _.get("cal.skipContactOwner"),
          S = _.get("cal.reroutingFormResponses"),
          T = void 0 !== j ? j : (0, t0.C)(_),
          I = null == _ ? void 0 : _.get("dub_id");
        return {
          ...t,
          user: u,
          start: (0, o.A)(l).format(),
          end: (0, o.A)(l)
            .add(n || a.length, "minute")
            .format(),
          eventTypeId: a.id,
          eventTypeSlug: a.slug,
          timeZone: r,
          language: i,
          rescheduleUid: s,
          rescheduledBy: d,
          metadata: c || {},
          hasHashedBookingLink: !!f,
          bookingUid: m,
          seatReferenceUid: h,
          hashedLink: f,
          teamMemberEmail: g,
          crmOwnerRecordType: v,
          crmAppSlug: p,
          crmRecordId: x,
          orgSlug: b,
          routedTeamMemberIds: N,
          routingFormResponseId: C,
          skipContactOwner: E,
          reroutingFormResponses: S ? JSON.parse(S) : void 0,
          _isDryRun: T,
          dub_id: I,
          verificationCode: w,
        };
      };
      var ar = a(81380),
        ai = a(67787),
        as = a(5353),
        ao = a(94120);
      let ad = async (e) => await (0, ao.bE)("/api/book/instant-event", e),
        au = async (e) => await (0, ao.bE)("/api/book/recurring-event", e);
      var ac = a(35573),
        am = a(47586);
      let ah = (e) => ({
          title: e.title,
          startTime: e.startTime,
          endTime: e.endTime,
          eventTypeId: e.eventTypeId,
          status: e.status,
          paymentRequired: e.paymentRequired,
          isRecurring: e.isRecurring,
          videoCallUrl: e.videoCallUrl,
        }),
        af = (e) => ({ uid: e.uid, ...ah(e) }),
        ag = "instantBookingData",
        av = "instantBookingCooldownByEvent",
        ap = () => {
          try {
            let e = J.L.getItem(av);
            return e ? JSON.parse(e) : {};
          } catch (e) {
            return {};
          }
        },
        ax = (e) => {
          if (!e) return 0;
          let t = ap()[String(e)];
          if (!t) return 0;
          let a = t + 6e5 - Date.now();
          return a > 0 ? a : 0;
        },
        ab = (e, t) => !(isNaN(e) || isNaN(t)) && e !== t,
        ay = null;
      var aj = a(42225),
        aw = a(46026),
        a_ = a(65447),
        aN = a(18895),
        ak = a(45701);
      let aC = (e) => {
          var t, a, u, c, m, h, f, g, v, p, x, b, w, _, N, E, I, M, O, D;
          let R = (0, r.useRouter)(),
            P = (0, r.usePathname)(),
            F = (0, r.useSearchParams)(),
            z = (0, eO._)({
              disabled: !!e.eventData,
              fromRedirectOfNonOrgLink: e.entity.fromRedirectOfNonOrgLink,
            }),
            B = e.eventData
              ? { data: e.eventData, isSuccess: !0, isError: !1, isPending: !1 }
              : z,
            W = ((e) => {
              let [t, a] = (0, k.Mu)((e) => [e.layout, e.setLayout], s.x),
                l = (0, d.hA)(),
                n = (0, t6.A)("(max-width: 768px)"),
                r = (0, t6.A)("(max-width: 1024px)"),
                o = (0, d.V4)(),
                u = l ? (n ? "mobile" : t8(o.layout) || t) : t,
                c = r ? tx[u].tablet : tx[u].desktop,
                m = (0, d.Dr)(),
                h = l && "inline" !== m,
                f = (0, i.useRef)(r ? tx[u].tablet : tx[u].desktop),
                g = e || T.Bv,
                v = (l && t8(o.layout)) || g.defaultLayout;
              (0, i.useEffect)(() => {
                n && "mobile" !== u ? a("mobile") : n || "mobile" !== u || a(v);
              }, [n, a, u, v]),
                (0, i.useEffect)(() => {
                  var e;
                  let r = (0, V.qn)("layout");
                  if (
                    !n &&
                    !l &&
                    t8(r) &&
                    (null == g || null == (e = g.enabledLayouts)
                      ? void 0
                      : e.length) &&
                    r !== t
                  ) {
                    let e = g.enabledLayouts.find((e) => e === r);
                    e && a(e);
                  }
                }, [g, a, t, l, n]);
              let p = {
                  mobile: !l,
                  month_view: !1,
                  week_view: !0,
                  column_view: !0,
                }[u],
                x = !!l && o.hideEventTypeDetails;
              return {
                shouldShowFormInDialog: p,
                hasDarkBackground: h,
                extraDays: c,
                columnViewExtraDays: f,
                isMobile: n,
                isEmbed: l,
                isTablet: r,
                layout: u,
                defaultLayout: v,
                hideEventTypeDetails: x,
                bookerLayouts: g,
              };
            })(
              null == (a = B.data) || null == (t = a.profile)
                ? void 0
                : t.bookerLayouts
            ),
            H = (0, k.Mu)((e) => e.selectedDate),
            G = (null == F ? void 0 : F.get("redirected")) === "true",
            q = (null == F ? void 0 : F.get("username")) || "",
            Z = new URLSearchParams(window.location.search).get(
              "rescheduleUid"
            ),
            $ = new URLSearchParams(window.location.search).get(
              "rescheduledBy"
            ),
            X = new URLSearchParams(window.location.search).get("bookingUid"),
            Q = (0, o.A)(H).format("YYYY-MM-DD"),
            K = (null == F ? void 0 : F.get("cal.tz")) || null;
          (0, i.useEffect)(() => {
            null === d.ii ||
              void 0 === d.ii ||
              d.ii.fire("navigatedToBooker", {});
          }, []),
            (0, C.Jk)({
              ...e,
              eventId:
                null != (_ = e.entity.eventTypeId)
                  ? _
                  : null == B || null == (u = B.data)
                  ? void 0
                  : u.id,
              rescheduleUid: Z,
              rescheduledBy: $,
              bookingUid: X,
              layout: W.isMobile ? "mobile" : W.defaultLayout,
              org: e.entity.orgSlug,
              timezone: K,
            }),
            (0, k.GU)({
              ...e,
              eventId:
                null != (N = e.entity.eventTypeId)
                  ? N
                  : null == B || null == (c = B.data)
                  ? void 0
                  : c.id,
              rescheduleUid: Z,
              rescheduledBy: $,
              bookingUid: X,
              layout: W.isMobile ? "mobile" : W.defaultLayout,
              org: e.entity.orgSlug,
              timezone: K,
            });
          let [et, ea] = (0, k.Mu)((e) => [e.state, e.setState], s.x),
            [el] = (0, k.Mu)((e) => [e.dayCount, e.setDayCount], s.x),
            [en] = (0, k.Mu)((e) => [e.month, e.setMonth], s.x),
            { data: er } = (0, n.useSession)(),
            ei = (0, ak.L)(),
            es = !!er,
            eo = null == F ? void 0 : F.get("firstName"),
            ec = null == F ? void 0 : F.get("lastName"),
            em = Object.keys(ei)
              .filter((e) => e.startsWith("metadata"))
              .reduce(
                (e, t) => ({
                  ...e,
                  [t.substring(9, t.length - 1)]: null == F ? void 0 : F.get(t),
                }),
                {}
              ),
            eh = (0, i.useMemo)(() => {
              var e;
              return {
                name:
                  (null == F ? void 0 : F.get("name")) ||
                  (eo ? "".concat(eo, " ").concat(ec) : null),
                guests:
                  null !=
                  (e =
                    (null == F ? void 0 : F.getAll("guests")) ||
                    (null == F ? void 0 : F.getAll("guest")))
                    ? e
                    : [],
              };
            }, [F, eo, ec]),
            ef = ((e) => {
              let {
                  event: t,
                  sessionEmail: a,
                  sessionName: l,
                  sessionUsername: n,
                  hasSession: r,
                  extraOptions: s,
                  prefillFormParams: o,
                  clientId: d,
                } = e,
                u = (0, C.JH)((e) => e.rescheduleUid),
                c = (0, C.JH)((e) => e.bookingData),
                { t: m } = (0, j.Y)(),
                h = (0, i.useRef)(null),
                f = S.z
                  .object({
                    responses: t
                      ? (function (e) {
                          let { bookingFields: t, view: a } = e;
                          return U({
                            schema: T.e8.and(S.Ay.record(S.Ay.any())),
                            bookingFields: t,
                            isPartialSchema: !1,
                            view: a,
                          });
                        })({
                          bookingFields: t.bookingFields,
                          view: u ? "reschedule" : "booking",
                        })
                      : S.z.object({}),
                  })
                  .passthrough(),
                { values: g, key: v } = (function (e) {
                  let {
                      eventType: t,
                      rescheduleUid: a,
                      isRescheduling: l,
                      email: n,
                      name: r,
                      username: s,
                      hasSession: o,
                      extraOptions: d,
                      prefillFormParams: u,
                      clientId: c,
                    } = e,
                    m = Object.entries(d)
                      .sort((e, t) => {
                        let [a] = e,
                          [l] = t;
                        return a.localeCompare(l);
                      })
                      .map((e) => {
                        let [t, a] = e;
                        return Array.isArray(a)
                          ? "".concat(t, ":").concat(a.sort().join(","))
                          : "".concat(t, ":").concat(a);
                      })
                      .join("|"),
                    [h, f] = (0, i.useState)({ values: {}, key: "" }),
                    g = (0, C.JH)((e) => e.bookingData),
                    v = (0, C.JH)((e) => e.formValues);
                  return (
                    (0, i.useEffect)(() => {
                      !(async function () {
                        var e, i, h;
                        if (Object.keys(v).length)
                          return f({
                            values: v,
                            key: t9({
                              values: v,
                              hasSession: o,
                              stableHashExtraOptions: m,
                            }),
                          });
                        if (!(null == t ? void 0 : t.bookingFields)) return;
                        let p = ((e) => {
                            let { bookingFields: t, view: a } = e;
                            return U({
                              schema: T.e8.unwrap().partial().and(L),
                              bookingFields: t,
                              isPartialSchema: !0,
                              view: a,
                            });
                          })({
                            bookingFields: t.bookingFields,
                            view: a ? "reschedule" : "booking",
                          }),
                          x = await p.parseAsync({
                            ...d,
                            name: u.name,
                            guests: u.guests,
                          }),
                          b = {
                            email:
                              a && g && g.attendees.length > 0
                                ? null == g
                                  ? void 0
                                  : g.attendees[0].email
                                : x.email
                                ? x.email
                                : null != n
                                ? n
                                : "",
                            name:
                              a && g && g.attendees.length > 0
                                ? null == g
                                  ? void 0
                                  : g.attendees[0].name
                                : x.name
                                ? x.name
                                : null != (e = null != r ? r : s)
                                ? e
                                : "",
                          };
                        if (
                          (c && (b.email = b.email.replace("+".concat(c), "")),
                          !l)
                        ) {
                          let e = { responses: {} };
                          (e.responses = {
                            ...t.bookingFields.reduce(
                              (e, t) => ({
                                ...e,
                                [t.name]: x[t.name] || void 0,
                              }),
                              {}
                            ),
                            name: b.name,
                            email: null != (i = b.email) ? i : "",
                          }),
                            f({
                              values: e,
                              key: t9({
                                values: e,
                                hasSession: o,
                                stableHashExtraOptions: m,
                              }),
                            });
                        }
                        if (!a && !g) return;
                        let y = {
                          responses: {},
                          bookingId: null == g ? void 0 : g.id,
                        };
                        (y.responses = {
                          ...t.bookingFields.reduce(
                            (e, t) => ({
                              ...e,
                              [t.name]:
                                null == g ? void 0 : g.responses[t.name],
                            }),
                            {}
                          ),
                          name: b.name,
                          email: null != (h = b.email) ? h : "",
                        }),
                          f({
                            values: y,
                            key: t9({
                              values: y,
                              hasSession: o,
                              stableHashExtraOptions: m,
                            }),
                          });
                      })();
                    }, [
                      null == t ? void 0 : t.bookingFields,
                      v,
                      l,
                      g,
                      null == g ? void 0 : g.id,
                      a,
                      n,
                      r,
                      s,
                      u,
                      m,
                    ]),
                    h
                  );
                })({
                  eventType: t,
                  rescheduleUid: u,
                  isRescheduling: !!u && !!c,
                  email: a,
                  name: l,
                  username: n,
                  hasSession: r,
                  extraOptions: s,
                  prefillFormParams: o,
                  clientId: d,
                }),
                p = (0, eu.mN)({
                  defaultValues: g,
                  resolver: (0, t7.u)(f, {}, { mode: "async" }),
                });
              (0, i.useEffect)(() => {
                p.reset(g);
              }, [v]);
              let x = p.watch("responses.email"),
                b = p.watch("responses.name"),
                y = {
                  hasFormErrors: !!p.formState.errors.globalError,
                  formErrors: p.formState.errors.globalError,
                };
              return {
                bookingForm: p,
                bookerFormErrorRef: h,
                key: v,
                formEmail: x,
                formName: b,
                beforeVerifyEmail: () => {
                  if ((p.clearErrors(), !t))
                    return void p.setError("globalError", {
                      message: m("error_booking_event"),
                    });
                },
                formErrors: y,
                errors: y,
              };
            })({
              event: B.data,
              sessionEmail: null == er ? void 0 : er.user.email,
              sessionUsername: null == er ? void 0 : er.user.username,
              sessionName: null == er ? void 0 : er.user.name,
              hasSession: es,
              extraOptions: ei,
              prefillFormParams: eh,
            }),
            eg = ((e) => {
              let { hasSession: t } = e,
                a = (0, r.useSearchParams)(),
                l = (0, C.JH)((e) => e.selectedDate),
                { timezone: n } = (0, ts.x)(),
                o =
                  (null == a ? void 0 : a.get("overlayCalendar")) === "true" ||
                  (null === J.L || void 0 === J.L
                    ? void 0
                    : J.L.getItem("overlayCalendarSwitchDefault")) === "true",
                { set: d, clearSet: u } = tP("toggledConnectedCalendars", []),
                c = ac.i.useUtils(),
                [m] = (0, tR.z)(
                  (e) => [
                    e.calendarSettingsOverlayModal,
                    e.setCalendarSettingsOverlayModal,
                  ],
                  s.x
                ),
                { data: h, isError: f } =
                  ac.i.viewer.availability.calendarOverlay.useQuery(
                    {
                      loggedInUsersTz: n || "Europe/London",
                      dateFrom: l,
                      dateTo: l,
                      calendarsToLoad: Array.from(d).map((e) => ({
                        credentialId: e.credentialId,
                        externalId: e.externalId,
                      })),
                    },
                    { enabled: t && d.size > 0 && o }
                  );
              (0, i.useEffect)(
                function () {
                  f && u();
                },
                [f]
              );
              let { data: g, isPending: v } =
                ac.i.viewer.calendars.connectedCalendars.useQuery(void 0, {
                  enabled:
                    !!m || !!(null == a ? void 0 : a.get("overlayCalendar")),
                });
              return {
                overlayBusyDates: h,
                isOverlayCalendarEnabled: o,
                connectedCalendars:
                  (null == g ? void 0 : g.connectedCalendars) || [],
                loadingConnectedCalendar: v,
                onToggleCalendar: (e) => {
                  c.viewer.availability.calendarOverlay.reset();
                },
              };
            })({ hasSession: es }),
            ev = ((e) => {
              let {
                  email: t,
                  name: a,
                  requiresBookerEmailVerification: l,
                  onVerifyEmail: r,
                } = e,
                [s, o] = (0, i.useState)(!1),
                d = (0, C.JH)((e) => e.verifiedEmail),
                u = (0, C.JH)((e) => e.setVerifiedEmail),
                c = (0, aj.d)(t, 600),
                { data: m } = (0, n.useSession)(),
                { t: h } = (0, j.Y)(),
                f = ac.i.viewer.auth.sendVerifyEmailCode.useMutation({
                  onSuccess: () => {
                    o(!0), (0, ar.P0)(h("email_sent"), "success");
                  },
                  onError: () => {
                    (0, ar.P0)(h("email_not_sent"), "error");
                  },
                }),
                { data: g } =
                  ac.i.viewer.public.checkIfUserEmailVerificationRequired.useQuery(
                    {
                      userSessionEmail:
                        (null == m ? void 0 : m.user.email) || "",
                      email: c,
                    },
                    { enabled: !!c }
                  );
              return {
                handleVerifyEmail: () => {
                  null == r || r(),
                    f.mutate({
                      email: t,
                      username:
                        "string" == typeof a
                          ? a
                          : null == a
                          ? void 0
                          : a.firstName,
                    });
                },
                isEmailVerificationModalVisible: s,
                setEmailVerificationModalVisible: o,
                setVerifiedEmail: u,
                renderConfirmNotVerifyEmailButtonCond: !!(
                  (!l && !g) ||
                  (t && d && d === t)
                ),
                isVerificationCodeSending: f.isPending,
              };
            })({
              email: ef.formEmail,
              name: ef.formName,
              requiresBookerEmailVerification:
                null == B || null == (m = B.data)
                  ? void 0
                  : m.requiresBookerEmailVerification,
              onVerifyEmail: ef.beforeVerifyEmail,
            }),
            ep = ((e) => {
              let t = (0, k.Mu)((e) => e.selectedDuration),
                a = (0, Y.O)(),
                [l, n, r, d] = (0, k.Mu)(
                  (e) => [
                    e.selectedTimeslot,
                    e.setSelectedTimeslot,
                    e.tentativeSelectedTimeslots,
                    e.setTentativeSelectedTimeslots,
                  ],
                  s.x
                ),
                [u, c] = [
                  ay,
                  function (e) {
                    ay = e;
                  },
                ],
                m = ac.i.viewer.slots.reserveSlot.useMutation({
                  trpc: { context: { skipBatch: !0 } },
                  onSuccess: (e) => {
                    c(e.uid);
                  },
                }),
                h = ac.i.viewer.slots.removeSelectedSlotMark.useMutation({
                  trpc: { context: { skipBatch: !0 } },
                }),
                f = null == e ? void 0 : e.id,
                g = t || (null == e ? void 0 : e.length) || 0,
                v = [...r, l].filter((e) => null !== e),
                p = ((e) => {
                  var t;
                  let {
                      eventTypeId: a,
                      eventDuration: l,
                      timeslotsAsISOString: n,
                      slotReservationId: r,
                    } = e,
                    s = (0, i.useRef)([]);
                  if (!tQ()) return s.current;
                  let d = n.map((e) => {
                      let t = (0, o.A)(e);
                      return {
                        utcStartIso: t.utc().toISOString(),
                        utcEndIso: t.add(l, "minutes").utc().toISOString(),
                      };
                    }),
                    u =
                      null ==
                      (t = ac.i.viewer.slots.isAvailable.useQuery(
                        { slots: d, eventTypeId: a },
                        {
                          refetchInterval: 1e3 * y.ms,
                          refetchOnWindowFocus: !0,
                          enabled: !!(a && n.length > 0 && r),
                          staleTime: 1e3 * y.U6,
                        }
                      ).data)
                        ? void 0
                        : t.slots;
                  return u && u.length > 0 && (s.current = u), u || s.current;
                })({
                  eventTypeId: f,
                  eventDuration: g,
                  timeslotsAsISOString: Array.from(new Set(v)),
                  slotReservationId: u,
                }),
                x = null != l ? l : v.at(-1),
                b = () => {
                  f &&
                    x &&
                    g &&
                    m.mutate({
                      slotUtcStartDate: (0, o.A)(x).utc().toISOString(),
                      eventTypeId: f,
                      slotUtcEndDate: (0, o.A)(x)
                        .utc()
                        .add(g, "minutes")
                        .toISOString(),
                      _isDryRun: (0, t0.C)(a),
                    });
                };
              return (
                (0, i.useEffect)(() => {
                  b();
                  let t = setInterval(() => {
                    b();
                  }, 60 * parseInt(y.it) * 1e3 - 2e3);
                  return () => {
                    (null == e ? void 0 : e.id) && u && h.mutate({ uid: u }),
                      clearInterval(t);
                  };
                }, [null == e ? void 0 : e.id, x]),
                {
                  setSelectedTimeslot: n,
                  setTentativeSelectedTimeslots: d,
                  selectedTimeslot: l,
                  tentativeSelectedTimeslots: r,
                  slotReservationId: u,
                  allSelectedTimeslots: v,
                  quickAvailabilityChecks: p,
                }
              );
            })(
              (null == B ? void 0 : B.data)
                ? { id: B.data.id, length: B.data.length }
                : null
            ),
            ex = (0, d.hA)(),
            { prefetchNextMonth: eb, monthCount: ey } = ((e) => {
              let { date: t, month: a, bookerLayout: l, bookerState: n } = e,
                r = (0, o.A)(t).month(),
                i = (0, o.A)(t).add(1, "month").month(),
                s = (0, o.A)(t).add(l.extraDays, "day").month(),
                d = (0, o.A)(t)
                  .add(l.columnViewExtraDays.current, "day")
                  .month(),
                u = ((e, t, a, l, n, r, i) =>
                  e === T.G5.WEEK_VIEW
                    ? !!i && ab(a, l)
                    : e === T.G5.COLUMN_VIEW
                    ? ab(a, n)
                    : (e === T.G5.MONTH_VIEW || "mobile" === e) &&
                      ((e, t) => {
                        let a = (0, o.A)(e).isValid(),
                          l = (0, o.A)(t).startOf("month").add(2, "week"),
                          n = (0, o.A)().isSame((0, o.A)(t), "month");
                        return !!(0, o.A)().isAfter(l) && (!a || !!n);
                      })(t, r))(l.layout, t, r, s, d, a, l.extraDays),
                c = ((e, t, a, l, n) => {
                  let r = ((e, t) => {
                      let a = Number.isFinite(e),
                        l = Number.isFinite(t);
                      return !!a && !!l && e !== t;
                    })(a, l),
                    i = e === T.G5.WEEK_VIEW,
                    s = e === T.G5.COLUMN_VIEW;
                  if (r && (s || (!i && "selecting_time" === t && !n)))
                    return 2;
                })(l.layout, n, i, d, u);
              return { prefetchNextMonth: u, monthCount: c };
            })({ date: Q, month: en, bookerLayout: W, bookerState: et }),
            ej = (0, eO.A)({
              prefetchNextMonth: eb,
              eventId:
                null != (E = e.entity.eventTypeId)
                  ? E
                  : null == (h = B.data)
                  ? void 0
                  : h.id,
              username: e.username,
              monthCount: ey,
              dayCount: el,
              eventSlug: e.eventSlug,
              month: e.month,
              duration: e.duration,
              selectedDate: H,
              teamMemberEmail: e.teamMemberEmail,
              fromRedirectOfNonOrgLink: e.entity.fromRedirectOfNonOrgLink,
              isTeamEvent:
                null != (I = e.isTeamEvent)
                  ? I
                  : !!(null == (f = B.data) ? void 0 : f.team),
              useApiV2: e.useApiV2,
            }),
            ew = ((e) => {
              var t;
              let {
                  event: a,
                  hashedLink: l,
                  bookingForm: n,
                  metadata: u,
                  isBookingDryRun: c,
                } = e,
                m = (0, r.useRouter)(),
                h = (0, k.Mu)((e) => e.eventSlug),
                f = (0, k.Mu)((e) => e.eventId),
                g = (0, k.Mu)((e) => e.isInstantMeeting),
                [v, p] = (0, k.Mu)(
                  (e) => [e.rescheduleUid, e.setRescheduleUid],
                  s.x
                ),
                x = (0, k.Mu)((e) => e.rescheduledBy),
                [b, w] = (0, k.Mu)(
                  (e) => [e.bookingData, e.setBookingData],
                  s.x
                ),
                _ = (0, k.Mu)((e) => e.selectedTimeslot),
                { t: N } = (0, j.Y)(),
                C = (0, am.UI)(),
                E = (0, i.useRef)(null),
                [S, I] = (0, i.useState)(),
                [M, O] = (0, i.useState)(),
                D = (0, k.Mu)((e) => e.selectedDuration),
                R = !!v && !!b,
                L = parseInt(null != (t = (0, V.qn)("bookingId")) ? t : "0");
              (0, i.useEffect)(() => {
                if (!g) return;
                let e = J.L.getItem(ag);
                if (e) {
                  let t = JSON.parse(e),
                    a =
                      t.eventTypeId === f &&
                      g &&
                      new Date(t.expiryTime) > new Date()
                        ? t
                        : null;
                  a && (I(a.expiryTime), (0, V.bJ)("bookingId", a.bookingId));
                }
              }, [f, g]);
              let P = ax(f),
                U = ac.i.viewer.bookings.getInstantBookingLocation.useQuery(
                  { bookingId: L },
                  {
                    enabled: !!L,
                    refetchInterval: 2e3,
                    refetchIntervalInBackground: !0,
                  }
                );
              (0, i.useEffect)(
                function () {
                  let e = U.data;
                  if (e && e.booking)
                    try {
                      var t, a;
                      let l =
                        null ==
                        (t = T.U_.parse(
                          (null == (a = e.booking) ? void 0 : a.metadata) || {}
                        ))
                          ? void 0
                          : t.videoCallUrl;
                      l
                        ? O(l)
                        : (0, ar.P0)(
                            N("something_went_wrong_on_our_end"),
                            "error"
                          );
                    } catch (e) {
                      (0, ar.P0)(N("something_went_wrong_on_our_end"), "error");
                    }
                },
                [U.data]
              );
              let F = (0, ae.n)({
                  mutationFn: as.s,
                  onSuccess: (e) => {
                    var t,
                      l,
                      r,
                      i,
                      s,
                      u,
                      c,
                      f,
                      g,
                      v,
                      p,
                      j,
                      w,
                      N,
                      k,
                      E,
                      S,
                      T,
                      I,
                      M,
                      O,
                      L,
                      P,
                      U,
                      V,
                      F,
                      z,
                      B;
                    if (e.isDryRun) {
                      R
                        ? null === d.ii ||
                          void 0 === d.ii ||
                          d.ii.fire(
                            "dryRunRescheduleBookingSuccessfulV2",
                            ah({ ...e, isRecurring: !1 })
                          )
                        : null === d.ii ||
                          void 0 === d.ii ||
                          d.ii.fire(
                            "dryRunBookingSuccessfulV2",
                            ah({ ...e, isRecurring: !1 })
                          ),
                        m.push("/booking/dry-run-successful");
                      return;
                    }
                    if (
                      "isShortCircuitedBooking" in e &&
                      e.isShortCircuitedBooking
                    ) {
                      if (!e.uid)
                        return void console.error("Decoy booking missing uid");
                      let t = {
                        uid: e.uid,
                        title: null != (k = e.title) ? k : null,
                        startTime: e.startTime,
                        endTime: e.endTime,
                        booker:
                          null !=
                          (E = null == (N = e.attendees) ? void 0 : N[0])
                            ? E
                            : null,
                        host: null != (S = e.user) ? S : null,
                        location: null != (T = e.location) ? T : null,
                      };
                      return (
                        (0, ai.JE)(t),
                        void m.push("/booking-successful/".concat(e.uid))
                      );
                    }
                    let { uid: Y, paymentUid: W } = e,
                      H = (0, A.d)(n.getValues("responses.name")),
                      G = (
                        null == (l = a.data) || null == (t = l.subsetOfHosts)
                          ? void 0
                          : t.length
                      )
                        ? null == (r = a.data)
                          ? void 0
                          : r.subsetOfHosts.map((e) => e.user)
                        : null == (i = a.data)
                        ? void 0
                        : i.subsetOfUsers,
                      q = (null == (s = a.data) ? void 0 : s.isDynamic)
                        ? D || (null == (u = a.data) ? void 0 : u.length)
                        : D &&
                          (null == (g = a.data) ||
                          null == (f = g.metadata) ||
                          null == (c = f.multipleDuration)
                            ? void 0
                            : c.includes(D))
                        ? D
                        : null == (v = a.data)
                        ? void 0
                        : v.length;
                    if (
                      (R
                        ? (null === d.ii ||
                            void 0 === d.ii ||
                            d.ii.fire("rescheduleBookingSuccessful", {
                              booking: e,
                              eventType: a.data,
                              date:
                                (null == e || null == (I = e.startTime)
                                  ? void 0
                                  : I.toString()) || "",
                              duration: q,
                              organizer: {
                                name:
                                  (null == G || null == (M = G[0])
                                    ? void 0
                                    : M.name) || "Nameless",
                                email:
                                  (null == e ? void 0 : e.userPrimaryEmail) ||
                                  (null == (O = e.user) ? void 0 : O.email) ||
                                  "Email-less",
                                timeZone:
                                  (null == (L = e.user)
                                    ? void 0
                                    : L.timeZone) || "Europe/London",
                              },
                              confirmed: !(
                                e.status === eZ.cg.PENDING &&
                                (null == (P = a.data)
                                  ? void 0
                                  : P.requiresConfirmation)
                              ),
                            }),
                          null === d.ii ||
                            void 0 === d.ii ||
                            d.ii.fire(
                              "rescheduleBookingSuccessfulV2",
                              af({ ...e, isRecurring: !1 })
                            ))
                        : (null === d.ii ||
                            void 0 === d.ii ||
                            d.ii.fire("bookingSuccessful", {
                              booking: e,
                              eventType: a.data,
                              date:
                                (null == e || null == (U = e.startTime)
                                  ? void 0
                                  : U.toString()) || "",
                              duration: q,
                              organizer: {
                                name:
                                  (null == G || null == (V = G[0])
                                    ? void 0
                                    : V.name) || "Nameless",
                                email:
                                  (null == e ? void 0 : e.userPrimaryEmail) ||
                                  (null == (F = e.user) ? void 0 : F.email) ||
                                  "Email-less",
                                timeZone:
                                  (null == (z = e.user)
                                    ? void 0
                                    : z.timeZone) || "Europe/London",
                              },
                              confirmed: !(
                                e.status === eZ.cg.PENDING &&
                                (null == (B = a.data)
                                  ? void 0
                                  : B.requiresConfirmation)
                              ),
                            }),
                          null === d.ii ||
                            void 0 === d.ii ||
                            d.ii.fire(
                              "bookingSuccessfulV2",
                              af({ ...e, isRecurring: !1 })
                            )),
                      W)
                    )
                      return void m.push(
                        (function (e) {
                          let {
                              paymentUid: t,
                              name: a,
                              email: l,
                              date: n,
                              absolute: r = !0,
                            } = e,
                            i = "";
                          r && (i = y.CY);
                          let s = (0, at.stringify)({
                            date: n,
                            name: a,
                            email: l,
                          });
                          return ""
                            .concat(i, "/payment/")
                            .concat(t, "?")
                            .concat(s);
                        })({
                          paymentUid: W,
                          date: _,
                          name: H,
                          email: n.getValues("responses.email"),
                          absolute: !1,
                        })
                      );
                    if (!Y)
                      return void console.error(
                        "No uid returned from createBookingMutation"
                      );
                    let Z = {
                      isSuccessBookingPage: !0,
                      email: n.getValues("responses.email"),
                      eventTypeSlug: h,
                      seatReferenceUid:
                        "seatReferenceUid" in e ? e.seatReferenceUid : null,
                      formerTime:
                        R && (null == b ? void 0 : b.startTime)
                          ? (0, o.A)(b.startTime).toString()
                          : void 0,
                      rescheduledBy: x,
                    };
                    C({
                      successRedirectUrl:
                        (null == a || null == (p = a.data)
                          ? void 0
                          : p.successRedirectUrl) || "",
                      query: Z,
                      booking: e,
                      forwardParamsSuccessRedirect:
                        (null == a || null == (j = a.data)
                          ? void 0
                          : j.forwardParamsSuccessRedirect) === void 0 ||
                        (null == a || null == (w = a.data)
                          ? void 0
                          : w.forwardParamsSuccessRedirect),
                    });
                  },
                  onError: (e) => {
                    var t, a, l, n, r;
                    (null == E ? void 0 : E.current) &&
                      E.current.scrollIntoView({ behavior: "smooth" }),
                      e.message === ee.O.BookerLimitExceededReschedule &&
                        (null == (t = e.data) ? void 0 : t.rescheduleUid) &&
                        (p(null == (a = e.data) ? void 0 : a.rescheduleUid),
                        w({
                          uid: null == (l = e.data) ? void 0 : l.rescheduleUid,
                          startTime:
                            null == (n = e.data) ? void 0 : n.startTime,
                          attendees:
                            null == (r = e.data) ? void 0 : r.attendees,
                        }));
                  },
                }),
                z = (0, ae.n)({
                  mutationFn: ad,
                  onSuccess: (e) => {
                    f &&
                      (((e) => {
                        let { eventTypeId: t, expiryTime: a, bookingId: l } = e,
                          n = JSON.stringify({
                            eventTypeId: t,
                            expiryTime: a,
                            bookingId: l,
                          });
                        J.L.setItem(ag, n);
                      })({
                        eventTypeId: f,
                        expiryTime: e.expires,
                        bookingId: e.bookingId,
                      }),
                      ((e) => {
                        if (!e) return;
                        let t = ap();
                        t[String(e)] = Date.now();
                        try {
                          J.L.setItem(av, JSON.stringify(t));
                        } catch (e) {}
                      })(f)),
                      (0, V.bJ)("bookingId", e.bookingId),
                      I(e.expires);
                  },
                  onError: (e) => {
                    console.error("Error creating instant booking", e),
                      (null == E ? void 0 : E.current) &&
                        E.current.scrollIntoView({ behavior: "smooth" });
                  },
                }),
                B = (0, ae.n)({
                  mutationFn: au,
                  onSuccess: async (e) => {
                    var t, l, r;
                    let i = e[0] || {};
                    if (i.isDryRun) {
                      R
                        ? null === d.ii ||
                          void 0 === d.ii ||
                          d.ii.fire("dryRunRescheduleBookingSuccessfulV2", {
                            ...ah({ ...i, isRecurring: !0 }),
                            allBookings: e.map((e) => ({
                              startTime: e.startTime,
                              endTime: e.endTime,
                            })),
                          })
                        : null === d.ii ||
                          void 0 === d.ii ||
                          d.ii.fire("dryRunBookingSuccessfulV2", {
                            ...ah({ ...i, isRecurring: !0 }),
                            allBookings: e.map((e) => ({
                              startTime: e.startTime,
                              endTime: e.endTime,
                            })),
                          }),
                        m.push("/booking/dry-run-successful");
                      return;
                    }
                    let { uid: s } = i;
                    if (!s)
                      return void console.error(
                        "No uid returned from createRecurringBookingMutation"
                      );
                    let u = {
                      isSuccessBookingPage: !0,
                      allRemainingBookings: !0,
                      email: n.getValues("responses.email"),
                      eventTypeSlug: h,
                      formerTime:
                        R && (null == b ? void 0 : b.startTime)
                          ? (0, o.A)(b.startTime).toString()
                          : void 0,
                    };
                    R
                      ? null === d.ii ||
                        void 0 === d.ii ||
                        d.ii.fire("rescheduleBookingSuccessfulV2", {
                          ...af({ ...i, isRecurring: !0 }),
                          allBookings: e.map((e) => ({
                            startTime: e.startTime,
                            endTime: e.endTime,
                          })),
                        })
                      : null === d.ii ||
                        void 0 === d.ii ||
                        d.ii.fire("bookingSuccessfulV2", {
                          ...af({ ...i, isRecurring: !0 }),
                          allBookings: e.map((e) => ({
                            startTime: e.startTime,
                            endTime: e.endTime,
                          })),
                        }),
                      C({
                        successRedirectUrl:
                          (null == a || null == (t = a.data)
                            ? void 0
                            : t.successRedirectUrl) || "",
                        query: u,
                        booking: i,
                        forwardParamsSuccessRedirect:
                          (null == a || null == (l = a.data)
                            ? void 0
                            : l.forwardParamsSuccessRedirect) === void 0 ||
                          (null == a || null == (r = a.data)
                            ? void 0
                            : r.forwardParamsSuccessRedirect),
                      });
                  },
                }),
                Y = ((e) => {
                  let {
                      bookingForm: t,
                      event: a,
                      metadata: l,
                      hashedLink: n,
                      handleBooking: i,
                      handleInstantBooking: s,
                      handleRecBooking: d,
                      locationUrl: u,
                      routingFormSearchParams: c,
                      isBookingDryRun: m,
                    } = e,
                    h = (0, ek.X)(),
                    f = (0, k.Mu)((e) => e.setFormValues),
                    g = (0, k.Mu)((e) => e.selectedTimeslot),
                    v = (0, k.Mu)((e) => e.selectedDuration),
                    { timezone: p } = (0, ed.v)(),
                    x = (0, k.Mu)((e) => e.rescheduleUid),
                    b = (0, k.Mu)((e) => e.rescheduledBy),
                    { t: y, i18n: w } = (0, j.Y)(),
                    _ = (0, k.Mu)((e) => e.username),
                    N = (0, k.Mu)((e) => e.recurringEventCount),
                    C = (0, k.Mu)((e) => e.bookingData),
                    E = (0, k.Mu)((e) => e.seatedEventData),
                    S = (0, k.Mu)((e) => e.isInstantMeeting),
                    T = (0, k.Mu)((e) => e.org),
                    I = (0, k.Mu)((e) => e.teamMemberEmail),
                    A = (0, k.Mu)((e) => e.crmOwnerRecordType),
                    M = (0, k.Mu)((e) => e.crmAppSlug),
                    O = (0, k.Mu)((e) => e.crmRecordId),
                    D = (0, k.Mu)((e) => e.verificationCode),
                    R = (e) => {
                      let t =
                        e instanceof Error
                          ? y(e.message)
                          : y("can_you_try_again");
                      (0, ar.P0)(t, "error");
                    },
                    L = (0, r.useSearchParams)();
                  return (e) => {
                    let r = t.getValues(),
                      j = null != e ? e : g,
                      k = e && !h ? { onError: R } : void 0;
                    if (j) {
                      var P, U, V, F;
                      if (
                        (f({}), t.clearErrors(), !(null == a ? void 0 : a.data))
                      )
                        return void t.setError("globalError", {
                          message: y("error_booking_event"),
                        });
                      let e = {
                          values: r,
                          duration: a.data.isDynamic
                            ? v || a.data.length
                            : v &&
                              (null == (U = a.data.metadata) ||
                              null == (P = U.multipleDuration)
                                ? void 0
                                : P.includes(v))
                            ? v
                            : a.data.length,
                          event: a.data,
                          date: j,
                          timeZone: p,
                          language: w.language,
                          rescheduleUid: x || void 0,
                          rescheduledBy: b || void 0,
                          bookingUid:
                            (C && C.uid) ||
                            (null == E ? void 0 : E.bookingUid) ||
                            void 0,
                          username: _ || "",
                          metadata: l,
                          hashedLink: n,
                          teamMemberEmail: I,
                          crmOwnerRecordType: A,
                          crmAppSlug: M,
                          crmRecordId: O,
                          orgSlug: T || void 0,
                          routingFormSearchParams: c,
                          isDryRunProp: m,
                          verificationCode: D || void 0,
                        },
                        h = (function (e) {
                          if (!e) return;
                          let t = Object.fromEntries(
                            [
                              "utm_source",
                              "utm_medium",
                              "utm_campaign",
                              "utm_term",
                              "utm_content",
                            ].map((t) => {
                              var a;
                              return [t, null != (a = e.get(t)) ? a : void 0];
                            })
                          );
                          return Object.values(t).every((e) => void 0 === e)
                            ? void 0
                            : t;
                        })(L);
                      S
                        ? s(an(e), k)
                        : (null == (F = a.data) ||
                          null == (V = F.recurringEvent)
                            ? void 0
                            : V.freq) != null &&
                          N &&
                          !x
                        ? d(
                            ((e, t, a) => {
                              let l = (0, aa.A)(),
                                [, n] = e7(
                                  {
                                    startDate: e.date,
                                    timeZone: e.timeZone,
                                    recurringEvent: e.event.recurringEvent,
                                    recurringCount: t,
                                    withDefaultTimeFormat: !0,
                                  },
                                  e.language
                                ),
                                r = an({ ...e, bookingUid: void 0 });
                              return n.map((t) => ({
                                ...r,
                                start: (0, o.A)(t).format(),
                                end: (0, o.A)(t)
                                  .add(e.duration || e.event.length, "minute")
                                  .format(),
                                recurringEventId: l,
                                schedulingType:
                                  e.event.schedulingType || void 0,
                                recurringCount: n.length,
                                tracking: a,
                              }));
                            })(e, N, h),
                            k
                          )
                        : i({ ...an(e), locationUrl: u, tracking: h }, k),
                        f({}),
                        t.clearErrors();
                    }
                  };
                })({
                  event: a,
                  bookingForm: n,
                  hashedLink: l,
                  metadata: u,
                  handleInstantBooking: (e) => {
                    if (ax(f) > 0)
                      return void (0, ar.P0)(
                        N("please_try_again_later_or_book_another_slot"),
                        "error"
                      );
                    z.mutate(e);
                  },
                  handleRecBooking: B.mutate,
                  handleBooking: F.mutate,
                  isBookingDryRun: c,
                });
              return {
                handleBookEvent: Y,
                expiryTime: S,
                bookingForm: n,
                bookerFormErrorRef: E,
                errors: {
                  hasDataErrors: !!(F.isError || B.isError || z.isError),
                  dataErrors: F.error || B.error || z.error,
                },
                loadingStates: {
                  creatingBooking: F.isPending || F.isSuccess,
                  creatingRecurringBooking: B.isPending || B.isSuccess,
                  creatingInstantBooking: z.isPending,
                },
                instantVideoMeetingUrl: M,
                instantConnectCooldownMs: P,
              };
            })({
              event: B,
              hashedLink: e.hashedLink,
              bookingForm: ef.bookingForm,
              metadata: null != em ? em : {},
              teamMemberEmail: e.teamMemberEmail,
            }),
            e_ = ((e) => {
              let { onSuccess: t } = e,
                { t: a } = (0, j.Y)(),
                [l, n] = (0, i.useState)(!1),
                [r, s] = (0, i.useState)(""),
                [o, d] = (0, i.useState)(""),
                [u, c] = (0, i.useState)(!1),
                m = ac.i.viewer.organizations.verifyCode.useMutation({
                  onSuccess: (e) => {
                    n(!1), t(e);
                  },
                  onError: (e) => {
                    n(!1),
                      c(!1),
                      "invalid_code" === e.message &&
                        s(a("code_provided_invalid"));
                  },
                }),
                h = ac.i.viewer.auth.verifyCodeUnAuthenticated.useMutation({
                  onSuccess: (e) => {
                    n(!1), t(e);
                  },
                  onError: (e) => {
                    n(!1),
                      c(!1),
                      "invalid_code" === e.message &&
                        s(a("code_provided_invalid"));
                  },
                });
              return {
                verifyCodeWithSessionRequired: (e, t) => {
                  m.mutate({ code: e, email: t });
                },
                verifyCodeWithSessionNotRequired: (e, t) => {
                  h.mutate({ code: e, email: t });
                },
                isPending: l,
                setIsPending: n,
                error: r,
                value: o,
                hasVerified: u,
                setValue: d,
                setHasVerified: c,
                resetErrors: () => s(""),
              };
            })({
              onSuccess: () => {
                ef.formEmail &&
                  (ev.setVerifiedEmail(ef.formEmail),
                  ev.setEmailVerificationModalVisible(!1),
                  ew.handleBookEvent());
              },
            }),
            eN = (0, i.useCallback)(
              (e) => {
                var t;
                let a = new URLSearchParams(
                  Array.from(
                    null != (t = null == F ? void 0 : F.entries()) ? t : []
                  )
                );
                e
                  ? (a.set("overlayCalendar", "true"),
                    J.L.setItem("overlayCalendarSwitchDefault", "true"))
                  : (a.delete("overlayCalendar"),
                    J.L.removeItem("overlayCalendarSwitchDefault"));
                let l = a.toString();
                R.push("".concat(P).concat(l ? "?".concat(l) : ""));
              },
              [F, P, R]
            );
          ((e) => {
            let { brandColor: t, darkBrandColor: a, theme: l } = e,
              n = (0, aw.Ay)({ lightVal: t, darkVal: a });
            (0, aN.q)(n), (0, a_.A)(l);
          })({
            brandColor:
              null != (M = null == (g = B.data) ? void 0 : g.profile.brandColor)
                ? M
                : y.f_,
            darkBrandColor:
              null !=
              (O = null == (v = B.data) ? void 0 : v.profile.darkBrandColor)
                ? O
                : y.VG,
            theme: null == (p = B.data) ? void 0 : p.profile.theme,
          });
          let eC = !!(
            (null == (x = B.data) ? void 0 : x.instantMeetingParameters) &&
            F &&
            (null == (w = B.data.instantMeetingParameters) ||
            null == (b = w.every)
              ? void 0
              : b.call(w, (e) => Array.from(F.values()).includes(e)))
          );
          return (
            (0, i.useEffect)(() => {
              es && eN(!0);
            }, [es]),
            (0, l.jsx)(t3, {
              ...e,
              onGoBackInstantMeeting: () => {
                P && (window.location.href = P);
              },
              onConnectNowInstantMeeting: () => {
                let e = "".concat(P, "?isInstantMeeting=true");
                if (ex) {
                  let t = ""
                    .concat(new URL(document.URL).origin, "/")
                    .concat(e);
                  window.open(t, "_blank", "noopener,noreferrer");
                } else R.push(e);
              },
              onOverlayClickNoCalendar: () => {
                R.push("/apps/categories/calendar");
              },
              onClickOverlayContinue: () => {
                let e = new URL("".concat(y.YW, "/login"));
                e.searchParams.set("callbackUrl", window.location.pathname),
                  e.searchParams.set("overlayCalendar", "true"),
                  R.push(e.toString());
              },
              onOverlaySwitchStateChange: eN,
              sessionUsername: null == er ? void 0 : er.user.username,
              isRedirect: G,
              fromUserNameRedirected: q,
              rescheduleUid: Z,
              rescheduledBy: $,
              bookingUid: X,
              hasSession: es,
              hasValidLicense:
                null != (D = null == er ? void 0 : er.hasValidLicense) && D,
              extraOptions: ei,
              bookings: ew,
              calendars: eg,
              slots: ep,
              verifyEmail: ev,
              bookerForm: ef,
              event: B,
              bookerLayout: W,
              schedule: ej,
              verifyCode: e_,
              isPlatform: !1,
              areInstantMeetingParametersSet: eC,
              userLocale: null == er ? void 0 : er.user.locale,
              renderCaptcha: !0,
            })
          );
        },
        aE = (e) => (0, l.jsx)(k.LF, { children: (0, l.jsx)(aC, { ...e }) });
    },
    67787: (e, t, a) => {
      a.d(t, { JE: () => r, kr: () => i });
      var l = a(54125);
      function n(e) {
        return "".concat("cal.successfulBooking", ".").concat(e);
      }
      function r(e) {
        let t = { booking: e, timestamp: Date.now() },
          a = n(e.uid);
        l.L.setItem(a, JSON.stringify(t));
      }
      function i(e) {
        if (!e) return null;
        let t = n(e),
          a = l.L.getItem(t);
        if (!a) return null;
        try {
          let e = JSON.parse(a);
          if (Date.now() - e.timestamp > 3e5) return l.L.removeItem(t), null;
          return e;
        } catch (e) {
          return l.L.removeItem(t), null;
        }
      }
    },
    70533: (e, t, a) => {
      function l(e) {
        return e instanceof Error
          ? e
          : "string" == typeof e
          ? Error(e, { cause: e })
          : Error("Unhandled error of type '".concat(typeof e, "''"));
      }
      a.d(t, { LI: () => l }), a(86622);
    },
    73817: (e, t, a) => {
      a.d(t, { S: () => b });
      var l = a(54568),
        n = a(27541),
        r = a(7620),
        i = a(74138),
        s = a(17293),
        o = a(78813),
        d = a(92235),
        u = a(19390),
        c = a(91686),
        m = a(66339),
        h = a(43328),
        f = a(23538),
        g = a(50441),
        v = a(27357),
        p = a(18511),
        x = a(81380);
      function b(e) {
        var t, a;
        let { app: b, credentials: j, searchText: w, userAdminTeams: _ } = e,
          { t: N } = (0, h.Y)(),
          k = (0, n.useRouter)(),
          C = b.categories && b.categories.indexOf("calendar") > -1,
          E = (j && j.length) || 0,
          S =
            (0, d.y3)({
              appCategories: b.categories,
              concurrentMeetings: b.concurrentMeetings,
              isPaid: !!b.paid,
            }) && _
              ? _.length < E
              : E > 0,
          T = (0, o.A)(null, {
            onSuccess: (e) => {
              (null != e && e.setupPending) ||
                (0, x.P0)(N("app_successfully_installed"), "success");
            },
            onError: (e) => {
              e instanceof Error &&
                (0, x.P0)(
                  e.message || N("app_could_not_be_installed"),
                  "error"
                );
            },
          }),
          [I, A] = (0, r.useState)(void 0);
        (0, r.useEffect)(() => {
          A(w ? b.name.toLowerCase().indexOf(w.toLowerCase()) : void 0);
        }, [b.name, w]);
        let M = () => {
          if ((0, s.U)(b.slug)) {
            b.url && window.open(b.url, "_blank", "noopener,noreferrer");
            return;
          }
          (0, d.C4)(b.categories) && !b.concurrentMeetings
            ? T.mutate({
                type: b.type,
                variant: b.variant,
                slug: b.slug,
                returnTo:
                  m.YW + (0, c.c)({ slug: b.slug, step: u.W.EVENT_TYPES_STEP }),
              })
            : (0, d.y3)({
                appCategories: b.categories,
                concurrentMeetings: b.concurrentMeetings,
                isPaid: !!b.paid,
              })
            ? k.push((0, c.c)({ slug: b.slug, step: u.W.ACCOUNTS_STEP }))
            : T.mutate({ type: b.type });
        };
        return (0, l.jsxs)("div", {
          className:
            "border-subtle relative flex h-64 flex-col rounded-md border p-5",
          children: [
            (0, l.jsx)("div", {
              className: "flex",
              children: (0, l.jsx)("img", {
                src: b.logo,
                alt: "".concat(b.name, " Logo"),
                className: (0, g.A)(
                  b.logo.includes("-dark") && "dark:invert",
                  "mb-4 h-12 w-12 rounded-sm"
                ),
              }),
            }),
            (0, l.jsx)("div", {
              className: "flex items-center",
              children: (0, l.jsx)("h3", {
                className: "text-emphasis font-medium",
                children:
                  void 0 != I && w
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          b.name.substring(0, I),
                          (0, l.jsx)("span", {
                            className: "bg-yellow-300",
                            "data-testid": "highlighted-text",
                            children: b.name.substring(I, I + w.length),
                          }),
                          b.name.substring(I + w.length),
                        ],
                      })
                    : b.name,
              }),
            }),
            (0, l.jsx)("p", {
              className: "text-default mt-2 flex-grow text-sm",
              dangerouslySetInnerHTML: { __html: (0, f.f)(b.description) },
              style: {
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "3",
              },
            }),
            (0, l.jsxs)("div", {
              className: "mt-5 flex max-w-full flex-row justify-between gap-2",
              children: [
                (0, l.jsx)(p.$, {
                  color: "secondary",
                  className: "flex w-32 flex-grow justify-center",
                  href: "/apps/".concat(b.slug),
                  "data-testid": "app-store-app-card-".concat(b.slug),
                  children: N("details"),
                }),
                b.isGlobal ||
                (j && j.length > 0 && C) ||
                (j && j.length > 0 && (0, s.U)(b.slug))
                  ? !b.isGlobal &&
                    (0, l.jsx)(i.p, {
                      type: b.type,
                      teamsPlanRequired: b.teamsPlanRequired,
                      disableInstall:
                        !!b.dependencies &&
                        !(null == (t = b.dependencyData)
                          ? void 0
                          : t.some((e) => !e.installed)),
                      wrapperClassName: "[@media(max-width:260px)]:w-full",
                      render: (e) => {
                        let { useDefaultComponent: t, ...a } = e;
                        return (
                          t &&
                            (a = {
                              ...a,
                              onClick: () => {
                                M();
                              },
                              loading: T.isPending,
                            }),
                          (0, l.jsx)(y, {
                            paid: b.paid,
                            isRedirect: (0, s.U)(b.slug),
                            ...a,
                          })
                        );
                      },
                    })
                  : j &&
                    !S &&
                    (0, l.jsx)(i.p, {
                      type: b.type,
                      wrapperClassName: "[@media(max-width:260px)]:w-full",
                      disableInstall:
                        !!b.dependencies &&
                        (null == (a = b.dependencyData)
                          ? void 0
                          : a.some((e) => !e.installed)),
                      teamsPlanRequired: b.teamsPlanRequired,
                      render: (e) => {
                        let { useDefaultComponent: t, ...a } = e;
                        return (
                          t &&
                            (a = {
                              ...a,
                              disabled: !!a.disabled,
                              onClick: () => {
                                M();
                              },
                              loading: T.isPending,
                            }),
                          (0, l.jsx)(y, {
                            paid: b.paid,
                            isRedirect: (0, s.U)(b.slug),
                            ...a,
                          })
                        );
                      },
                    }),
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "max-w-44 absolute right-0 mr-4 flex flex-wrap justify-end gap-1",
              children: [
                E > 0 && !(0, s.U)(b.slug)
                  ? (0, l.jsx)(v.E, {
                      variant: "green",
                      children: N("installed", { count: E }),
                    })
                  : null,
                b.isTemplate &&
                  (0, l.jsx)("span", {
                    className:
                      "bg-error rounded-md px-2 py-1 text-sm font-normal text-red-800",
                    children: "Template",
                  }),
                (b.isDefault || (!b.isDefault && b.isGlobal)) &&
                  (0, l.jsx)("span", {
                    className:
                      "bg-subtle text-emphasis flex items-center rounded-md px-2 py-1 text-sm font-normal",
                    children: N("default"),
                  }),
              ],
            }),
          ],
        });
      }
      let y = (e) => {
        let { paid: t, isRedirect: a = !1, ...n } = e,
          { t: r } = (0, h.Y)();
        return a
          ? (0, l.jsx)(p.$, {
              color: "secondary",
              className:
                "[@media(max-width:260px)]:w-full [@media(max-width:260px)]:justify-center",
              StartIcon: "external-link",
              ...n,
              size: "base",
              children: r("visit"),
            })
          : t
          ? (0, l.jsx)(p.$, {
              color: "secondary",
              className:
                "[@media(max-width:260px)]:w-full [@media(max-width:260px)]:justify-center",
              StartIcon: "plus",
              "data-testid": "install-app-button",
              ...n,
              children: r(t.trial ? "start_paid_trial" : "subscribe"),
            })
          : (0, l.jsx)(p.$, {
              color: "secondary",
              className:
                "[@media(max-width:260px)]:w-full [@media(max-width:260px)]:justify-center",
              StartIcon: "plus",
              "data-testid": "install-app-button",
              ...n,
              size: "base",
              children: r("install"),
            });
      };
    },
    77197: (e, t, a) => {
      a.d(t, { e: () => s });
      var l = a(54568),
        n = a(7620),
        r = a(50441);
      let i = { lg: "12px", base: "8px", sm: "10px", xs: "8px" };
      function s(e) {
        var t;
        let { children: a, combined: s = !1, containerProps: o } = e,
          d = n.Children.toArray(a)[0],
          u =
            i[(null == d || null == (t = d.props) ? void 0 : t.size) || "base"];
        return (0, l.jsx)("div", {
          ...o,
          style: s ? { "--btn-group-radius": u } : void 0,
          className: (0, r.A)(
            "flex",
            s
              ? "[&>*:first-child]:rounded-l-[var(--btn-group-radius)] rtl:[&>*:first-child]:rounded-l-none rtl:[&>*:first-child]:rounded-r-[var(--btn-group-radius)] [&>*:last-child]:rounded-r-[var(--btn-group-radius)] rtl:[&>*:last-child]:rounded-l-[var(--btn-group-radius)] rtl:[&>*:last-child]:rounded-r-none [&>*:not(:first-child)]:-ml-[1px] [&>*]:rounded-none [&>*]:border hover:[&>*]:z-[1]"
              : "space-x-2 rtl:space-x-reverse",
            null == o ? void 0 : o.className
          ),
          children: a,
        });
      }
    },
    79970: (e, t, a) => {
      a.d(t, { O: () => o });
      var l = a(54568),
        n = a(62962),
        r = a(50441),
        i = a(72221);
      let s = (e) => {
          let { children: t, tooltipText: a } = e;
          return a
            ? (0, l.jsx)(i.Tooltip, {
                delayDuration: 150,
                sideOffset: 12,
                side: "bottom",
                content: a,
                children: t,
              })
            : (0, l.jsx)(l.Fragment, { children: t });
        },
        o = (e) => {
          let {
            options: t,
            onValueChange: a,
            isFullWidth: i,
            orientation: o = "horizontal",
            customClassNames: d,
            ...u
          } = e;
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)(n.bL, {
              type: "single",
              ...u,
              orientation: o,
              onValueChange: a,
              style: {
                "--toggle-group-shadow":
                  "0px 2px 3px 0px rgba(0, 0, 0, 0.03), 0px 2px 2px -1px rgba(0, 0, 0, 0.03)",
              },
              className: (0, r.A)(
                "bg-subtle border-subtle rounded-[10px] border p-0.5",
                "horizontal" === o &&
                  "inline-flex gap-0.5 rtl:flex-row-reverse",
                "vertical" === o && "flex w-fit flex-col gap-0.5",
                u.className,
                i && "w-full",
                d
              ),
              children: t.map((e) => {
                var t;
                return (0, l.jsx)(
                  s,
                  {
                    tooltipText: e.tooltip,
                    children: (0, l.jsx)(n.q7, {
                      disabled: e.disabled,
                      value: e.value,
                      "data-testid":
                        null != (t = e.dataTestId)
                          ? t
                          : "toggle-group-item-".concat(e.value),
                      className: (0, r.A)(
                        "aria-checked:bg-default aria-checked:border-subtle rounded-lg border border-transparent p-1.5 text-sm leading-none transition aria-checked:shadow-[0px_2px_3px_0px_rgba(0,0,0,0.03),0px_2px_2px_-1px_rgba(0,0,0,0.03)]",
                        e.disabled
                          ? "text-gray-400 hover:cursor-not-allowed"
                          : "text-default [&[aria-checked='false']]:hover:text-emphasis",
                        i && "w-full"
                      ),
                      children: (0, l.jsxs)("div", {
                        className: (0, r.A)(
                          "flex items-center gap-1",
                          "horizontal" === o && "justify-center",
                          "vertical" === o && "justify-start"
                        ),
                        children: [
                          e.iconLeft &&
                            (0, l.jsx)("span", {
                              className: "flex h-4 w-4 items-center",
                              children: e.iconLeft,
                            }),
                          e.label,
                        ],
                      }),
                    }),
                  },
                  e.value
                );
              }),
            }),
          });
        };
    },
    83160: (e, t, a) => {
      a.d(t, { X: () => n });
      var l = a(80618);
      let n = () => {
        let e = (0, l.useAtomsContext)();
        return !!(null == e ? void 0 : e.clientId);
      };
    },
    86622: (e, t, a) => {
      a.d(t, { O: () => l });
      var l = (function (e) {
        return (
          (e.PaymentCreationFailure = "payment_not_created_error"),
          (e.NoAvailableUsersFound = "no_available_users_found_error"),
          (e.ChargeCardFailure = "couldnt_charge_card_error"),
          (e.RequestBodyWithouEnd = "request_body_end_time_internal_error"),
          (e.AlreadySignedUpForBooking =
            "already_signed_up_for_this_booking_error"),
          (e.FixedHostsUnavailableForBooking =
            "fixed_hosts_unavailable_for_booking"),
          (e.RoundRobinHostsUnavailableForBooking =
            "round_robin_host_unavailable_for_booking"),
          (e.EventTypeNotFound = "event_type_not_found_error"),
          (e.BookingNotFound = "booking_not_found_error"),
          (e.BookingSeatsFull = "booking_seats_full_error"),
          (e.MissingPaymentCredential = "missing_payment_credential_error"),
          (e.MissingPaymentAppId = "missing_payment_app_id_error"),
          (e.NotEnoughAvailableSeats = "not_enough_available_seats_error"),
          (e.AvailabilityNotFoundInSchedule =
            "availability_not_found_in_schedule_error"),
          (e.CancelledBookingsCannotBeRescheduled =
            "cancelled_bookings_cannot_be_rescheduled"),
          (e.UnableToSubscribeToThePlatform =
            "unable_to_subscribe_to_the_platform"),
          (e.UpdatingOauthClientError = "updating_oauth_client_error"),
          (e.CreatingOauthClientError = "creating_oauth_client_error"),
          (e.BookingTimeOutOfBounds = "booking_time_out_of_bounds_error"),
          (e.BookingConflict = "booking_conflict_error"),
          (e.BookerLimitExceeded = "booker_limit_exceeded_error"),
          (e.BookerLimitExceededReschedule =
            "booker_limit_exceeded_error_reschedule"),
          (e.BookingNotAllowedByRestrictionSchedule =
            "booking_not_allowed_by_restriction_schedule_error"),
          (e.RestrictionScheduleNotFound =
            "restriction_schedule_not_found_error"),
          (e.EventTypeNoHosts = "event_type_no_hosts"),
          (e.RequestBodyInvalid = "request_body_invalid_error"),
          (e.PrivateLinkExpired = "private_link_expired"),
          (e.BookerEmailBlocked = "booker_email_blocked"),
          (e.BookerEmailRequiresLogin = "booker_email_requires_login"),
          (e.InvalidVerificationCode = "invalid_verification_code"),
          (e.UnableToValidateVerificationCode =
            "unable_to_validate_verification_code"),
          e
        );
      })({});
    },
    90708: (e, t, a) => {
      a.d(t, { A: () => l });
      function l(e, t) {
        return (null == e ? void 0 : e.includes("-dark")) ||
          !(null == e ? void 0 : e.startsWith("/app-store"))
          ? t
            ? "invert dark:invert-0"
            : "dark:invert"
          : "";
      }
    },
    91686: (e, t, a) => {
      a.d(t, { c: () => n });
      var l = a(32590);
      let n = (e) => {
        let { slug: t, step: a, teamId: n } = e,
          r = { slug: t };
        n && (r.teamId = n);
        let i = (0, l.stringify)(r);
        return "/apps/installation/".concat(a, "?").concat(i);
      };
    },
    92235: (e, t, a) => {
      a.d(t, { C4: () => r, y3: () => n });
      var l = a(65663);
      function n(e) {
        let { appCategories: t, concurrentMeetings: a, isPaid: l } = e;
        return !l && !t.some((e) => "calendar" === e || (i.includes(e) && !a));
      }
      function r(e) {
        return e.some((e) => "conferencing" === e || "video" === e);
      }
      Object.values(
        Object.keys(l.q).reduce((e, t) => {
          let a = l.q[t];
          return (
            (e[t] = a), delete e[t]["/*"], delete e[t].__createdUsingCli, e
          );
        }, {})
      );
      let i = ["messaging", "conferencing", "video"];
    },
    94120: (e, t, a) => {
      a.d(t, { bE: () => r });
      var l = a(9689);
      async function n(e, t) {
        let a = new Request(e, t),
          n = await fetch(a);
        if (!n.ok) {
          let e = await n.json();
          throw l.j.fromRequest(
            a,
            { ...n, statusText: e.message || n.statusText },
            e
          );
        }
        return await n.json();
      }
      async function r(e, t, a) {
        let l = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(t),
          ...a,
        };
        return await n(e, l);
      }
    },
    96074: (e, t, a) => {
      a.d(t, { N: () => r });
      var l = a(7620),
        n = a(24805);
      let r = (e) => {
        let { schedule: t, eventDuration: a } = e;
        return (0, l.useMemo)(() => {
          let e = {};
          if (!t || !t.slots) return e;
          for (let l in t.slots)
            e[l] = t.slots[l].map((e) => {
              let { time: t, ...l } = e;
              return {
                start: (0, n.A)(t).toDate(),
                end: (0, n.A)(t).add(a, "minutes").toDate(),
                ...l,
              };
            });
          return e;
        }, [t, a]);
      };
    },
  },
]);
//# sourceMappingURL=6081-3f5ff9ce3bc5e803.js.map
