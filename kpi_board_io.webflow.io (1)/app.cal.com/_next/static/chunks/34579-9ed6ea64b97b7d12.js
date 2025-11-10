"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34579],
  {
    21725: (e, t, n) => {
      let r, o;
      n.d(t, { UC: () => el, ZL: () => ea, bL: () => eo, l9: () => ei });
      var i = n(36092),
        a = n(7620),
        l = n(47231),
        s = n(18107),
        d = n(54111),
        u = n(61715),
        c = n(11753),
        p = n(7469),
        f = n(7679),
        h = n(54525),
        m = n(60421),
        v = n(9111);
      let g = (null == globalThis ? void 0 : globalThis.document)
        ? a.useLayoutEffect
        : () => {};
      var w = n(2968);
      let y = "Popper",
        [b, E] = (0, s.A)(y),
        [C, x] = b(y),
        P = (0, a.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            l = x("PopperAnchor", n),
            s = (0, a.useRef)(null),
            d = (0, u.s)(t, s);
          return (
            (0, a.useEffect)(() => {
              l.onAnchorChange((null == r ? void 0 : r.current) || s.current);
            }),
            r
              ? null
              : (0, a.createElement)(m.sG.div, (0, i.A)({}, o, { ref: d }))
          );
        }),
        O = "PopperContent",
        [S, T] = b(O),
        D = (0, a.forwardRef)((e, t) => {
          var n, r, o, l, s, d, h, y;
          let {
              __scopePopper: b,
              side: E = "bottom",
              sideOffset: C = 0,
              align: P = "center",
              alignOffset: T = 0,
              arrowPadding: D = 0,
              avoidCollisions: R = !0,
              collisionBoundary: L = [],
              collisionPadding: k = 0,
              sticky: M = "partial",
              hideWhenDetached: $ = !1,
              updatePositionStrategy: N = "optimized",
              onPlaced: H,
              ...F
            } = e,
            B = x(O, b),
            [I, z] = (0, a.useState)(null),
            j = (0, u.s)(t, (e) => z(e)),
            [U, Y] = (0, a.useState)(null),
            X = (0, w.X)(U),
            G = null != (n = null == X ? void 0 : X.width) ? n : 0,
            K = null != (r = null == X ? void 0 : X.height) ? r : 0,
            q =
              "number" == typeof k
                ? k
                : { top: 0, right: 0, bottom: 0, left: 0, ...k },
            Q = Array.isArray(L) ? L : [L],
            V = Q.length > 0,
            Z = { padding: q, boundary: Q.filter(A), altBoundary: V },
            {
              refs: J,
              floatingStyles: ee,
              placement: et,
              isPositioned: en,
              middlewareData: er,
            } = (0, c.we)({
              strategy: "fixed",
              placement: E + ("center" !== P ? "-" + P : ""),
              whileElementsMounted: (...e) =>
                (0, p.ll)(...e, { animationFrame: "always" === N }),
              elements: { reference: B.anchor },
              middleware: [
                (0, f.cY)({ mainAxis: C + K, alignmentAxis: T }),
                R &&
                  (0, f.BN)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === M ? (0, f.ER)() : void 0,
                    ...Z,
                  }),
                R && (0, f.UU)({ ...Z }),
                (0, f.Ej)({
                  ...Z,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: i } = t.reference,
                      a = e.floating.style;
                    a.setProperty("--radix-popper-available-width", `${n}px`),
                      a.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      a.setProperty("--radix-popper-anchor-width", `${o}px`),
                      a.setProperty("--radix-popper-anchor-height", `${i}px`);
                  },
                }),
                U && (0, c.UE)({ element: U, padding: D }),
                _({ arrowWidth: G, arrowHeight: K }),
                $ && (0, f.jD)({ strategy: "referenceHidden", ...Z }),
              ],
            }),
            [eo, ei] = W(et),
            ea = (0, v.c)(H);
          g(() => {
            en && (null == ea || ea());
          }, [en, ea]);
          let el = null == (o = er.arrow) ? void 0 : o.x,
            es = null == (l = er.arrow) ? void 0 : l.y,
            ed = (null == (s = er.arrow) ? void 0 : s.centerOffset) !== 0,
            [eu, ec] = (0, a.useState)();
          return (
            g(() => {
              I && ec(window.getComputedStyle(I).zIndex);
            }, [I]),
            (0, a.createElement)(
              "div",
              {
                ref: J.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...ee,
                  transform: en ? ee.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: eu,
                  "--radix-popper-transform-origin": [
                    null == (d = er.transformOrigin) ? void 0 : d.x,
                    null == (h = er.transformOrigin) ? void 0 : h.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, a.createElement)(
                S,
                {
                  scope: b,
                  placedSide: eo,
                  onArrowChange: Y,
                  arrowX: el,
                  arrowY: es,
                  shouldHideArrow: ed,
                },
                (0, a.createElement)(
                  m.sG.div,
                  (0, i.A)({ "data-side": eo, "data-align": ei }, F, {
                    ref: j,
                    style: {
                      ...F.style,
                      animation: en ? void 0 : "none",
                      opacity:
                        null != (y = er.hide) && y.referenceHidden ? 0 : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        R = { top: "bottom", right: "left", bottom: "top", left: "right" },
        L = (0, a.forwardRef)(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = T("PopperArrow", n),
            l = R[o.placedSide];
          return (0,
          a.createElement)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [l]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 } }, (0, a.createElement)(h.b, (0, i.A)({}, r, { ref: t, style: { ...r.style, display: "block" } })));
        });
      function A(e) {
        return null !== e;
      }
      let _ = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, a;
          let { placement: l, rects: s, middlewareData: d } = t,
            u = (null == (n = d.arrow) ? void 0 : n.centerOffset) !== 0,
            c = u ? 0 : e.arrowWidth,
            p = u ? 0 : e.arrowHeight,
            [f, h] = W(l),
            m = { start: "0%", center: "50%", end: "100%" }[h],
            v =
              (null != (r = null == (o = d.arrow) ? void 0 : o.x) ? r : 0) +
              c / 2,
            g =
              (null != (i = null == (a = d.arrow) ? void 0 : a.y) ? i : 0) +
              p / 2,
            w = "",
            y = "";
          return (
            "bottom" === f
              ? ((w = u ? m : `${v}px`), (y = `${-p}px`))
              : "top" === f
              ? ((w = u ? m : `${v}px`), (y = `${s.floating.height + p}px`))
              : "right" === f
              ? ((w = `${-p}px`), (y = u ? m : `${g}px`))
              : "left" === f &&
                ((w = `${s.floating.width + p}px`), (y = u ? m : `${g}px`)),
            { data: { x: w, y: y } }
          );
        },
      });
      function W(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let k = (e) => {
        let { __scopePopper: t, children: n } = e,
          [r, o] = (0, a.useState)(null);
        return (0, a.createElement)(
          C,
          { scope: t, anchor: r, onAnchorChange: o },
          n
        );
      };
      var M = n(97509);
      let $ = (0, a.forwardRef)((e, t) => {
        var n;
        let {
          container: r = null == globalThis || null == (n = globalThis.document)
            ? void 0
            : n.body,
          ...o
        } = e;
        return r
          ? M.createPortal(
              (0, a.createElement)(m.sG.div, (0, i.A)({}, o, { ref: t })),
              r
            )
          : null;
      });
      var N = n(26590),
        H = n(91209);
      let F = "dismissableLayer.update",
        B = (0, a.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        I = (0, a.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: o = !1,
              onEscapeKeyDown: s,
              onPointerDownOutside: d,
              onFocusOutside: c,
              onInteractOutside: p,
              onDismiss: f,
              ...h
            } = e,
            g = (0, a.useContext)(B),
            [w, y] = (0, a.useState)(null),
            b =
              null != (n = null == w ? void 0 : w.ownerDocument)
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, E] = (0, a.useState)({}),
            C = (0, u.s)(t, (e) => y(e)),
            x = Array.from(g.layers),
            [P] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = x.indexOf(P),
            S = w ? x.indexOf(w) : -1,
            T = g.layersWithOutsidePointerEventsDisabled.size > 0,
            D = S >= O,
            R = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, v.c)(e),
                r = (0, a.useRef)(!1),
                o = (0, a.useRef)(() => {});
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function i() {
                          j("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = i),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : i();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...g.branches].some((e) => e.contains(t));
              D &&
                !n &&
                (null == d || d(e),
                null == p || p(e),
                e.defaultPrevented || null == f || f());
            }, b),
            L = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, v.c)(e),
                r = (0, a.useRef)(!1);
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      j(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              ![...g.branches].some((e) => e.contains(t)) &&
                (null == c || c(e),
                null == p || p(e),
                e.defaultPrevented || null == f || f());
            }, b);
          return (
            (0, H.U)((e) => {
              S === g.layers.size - 1 &&
                (null == s || s(e),
                !e.defaultPrevented && f && (e.preventDefault(), f()));
            }, b),
            (0, a.useEffect)(() => {
              if (w)
                return (
                  o &&
                    (0 === g.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = b.body.style.pointerEvents),
                      (b.body.style.pointerEvents = "none")),
                    g.layersWithOutsidePointerEventsDisabled.add(w)),
                  g.layers.add(w),
                  z(),
                  () => {
                    o &&
                      1 === g.layersWithOutsidePointerEventsDisabled.size &&
                      (b.body.style.pointerEvents = r);
                  }
                );
            }, [w, b, o, g]),
            (0, a.useEffect)(
              () => () => {
                w &&
                  (g.layers.delete(w),
                  g.layersWithOutsidePointerEventsDisabled.delete(w),
                  z());
              },
              [w, g]
            ),
            (0, a.useEffect)(() => {
              let e = () => E({});
              return (
                document.addEventListener(F, e),
                () => document.removeEventListener(F, e)
              );
            }, []),
            (0, a.createElement)(
              m.sG.div,
              (0, i.A)({}, h, {
                ref: C,
                style: {
                  pointerEvents: T ? (D ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: (0, l.m)(e.onFocusCapture, L.onFocusCapture),
                onBlurCapture: (0, l.m)(e.onBlurCapture, L.onBlurCapture),
                onPointerDownCapture: (0, l.m)(
                  e.onPointerDownCapture,
                  R.onPointerDownCapture
                ),
              })
            )
          );
        });
      function z() {
        let e = new CustomEvent(F);
        document.dispatchEvent(e);
      }
      function j(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, m.hO)(o, i) : o.dispatchEvent(i);
      }
      let U = "HoverCard",
        [Y, X] = (0, s.A)(U, [E]),
        G = E(),
        [K, q] = Y(U),
        Q = (0, a.forwardRef)((e, t) => {
          let { __scopeHoverCard: n, ...r } = e,
            o = q("HoverCardTrigger", n),
            s = G(n);
          return (0, a.createElement)(
            P,
            (0, i.A)({ asChild: !0 }, s),
            (0, a.createElement)(
              m.sG.a,
              (0, i.A)({ "data-state": o.open ? "open" : "closed" }, r, {
                ref: t,
                onPointerEnter: (0, l.m)(e.onPointerEnter, er(o.onOpen)),
                onPointerLeave: (0, l.m)(e.onPointerLeave, er(o.onClose)),
                onFocus: (0, l.m)(e.onFocus, o.onOpen),
                onBlur: (0, l.m)(e.onBlur, o.onClose),
                onTouchStart: (0, l.m)(e.onTouchStart, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        V = "HoverCardPortal",
        [Z, J] = Y(V, { forceMount: void 0 }),
        ee = "HoverCardContent",
        et = (0, a.forwardRef)((e, t) => {
          let n = J(ee, e.__scopeHoverCard),
            { forceMount: r = n.forceMount, ...o } = e,
            s = q(ee, e.__scopeHoverCard);
          return (0, a.createElement)(
            N.C,
            { present: r || s.open },
            (0, a.createElement)(
              en,
              (0, i.A)({ "data-state": s.open ? "open" : "closed" }, o, {
                onPointerEnter: (0, l.m)(e.onPointerEnter, er(s.onOpen)),
                onPointerLeave: (0, l.m)(e.onPointerLeave, er(s.onClose)),
                ref: t,
              })
            )
          );
        }),
        en = (0, a.forwardRef)((e, t) => {
          let {
              __scopeHoverCard: n,
              onEscapeKeyDown: r,
              onPointerDownOutside: s,
              onFocusOutside: d,
              onInteractOutside: c,
              ...p
            } = e,
            f = q(ee, n),
            h = G(n),
            m = (0, a.useRef)(null),
            v = (0, u.s)(t, m),
            [g, w] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              if (g) {
                let e = document.body;
                return (
                  (o = e.style.userSelect || e.style.webkitUserSelect),
                  (e.style.userSelect = "none"),
                  (e.style.webkitUserSelect = "none"),
                  () => {
                    (e.style.userSelect = o), (e.style.webkitUserSelect = o);
                  }
                );
              }
            }, [g]),
            (0, a.useEffect)(() => {
              if (m.current) {
                let e = () => {
                  w(!1),
                    (f.isPointerDownOnContentRef.current = !1),
                    setTimeout(() => {
                      var e;
                      (null == (e = document.getSelection())
                        ? void 0
                        : e.toString()) !== "" &&
                        (f.hasSelectionRef.current = !0);
                    });
                };
                return (
                  document.addEventListener("pointerup", e),
                  () => {
                    document.removeEventListener("pointerup", e),
                      (f.hasSelectionRef.current = !1),
                      (f.isPointerDownOnContentRef.current = !1);
                  }
                );
              }
            }, [f.isPointerDownOnContentRef, f.hasSelectionRef]),
            (0, a.useEffect)(() => {
              m.current &&
                (function (e) {
                  let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                      acceptNode: (e) =>
                        e.tabIndex >= 0
                          ? NodeFilter.FILTER_ACCEPT
                          : NodeFilter.FILTER_SKIP,
                    });
                  for (; n.nextNode(); ) t.push(n.currentNode);
                  return t;
                })(m.current).forEach((e) => e.setAttribute("tabindex", "-1"));
            }),
            (0, a.createElement)(
              I,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onInteractOutside: c,
                onEscapeKeyDown: r,
                onPointerDownOutside: s,
                onFocusOutside: (0, l.m)(d, (e) => {
                  e.preventDefault();
                }),
                onDismiss: f.onDismiss,
              },
              (0, a.createElement)(
                D,
                (0, i.A)({}, h, p, {
                  onPointerDown: (0, l.m)(p.onPointerDown, (e) => {
                    e.currentTarget.contains(e.target) && w(!0),
                      (f.hasSelectionRef.current = !1),
                      (f.isPointerDownOnContentRef.current = !0);
                  }),
                  ref: v,
                  style: {
                    ...p.style,
                    userSelect: g ? "text" : void 0,
                    WebkitUserSelect: g ? "text" : void 0,
                    "--radix-hover-card-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-hover-card-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-hover-card-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-hover-card-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-hover-card-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                })
              )
            )
          );
        });
      function er(e) {
        return (t) => ("touch" === t.pointerType ? void 0 : e());
      }
      let eo = (e) => {
          let {
              __scopeHoverCard: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: i,
              openDelay: l = 700,
              closeDelay: s = 300,
            } = e,
            u = G(t),
            c = (0, a.useRef)(0),
            p = (0, a.useRef)(0),
            f = (0, a.useRef)(!1),
            h = (0, a.useRef)(!1),
            [m = !1, v] = (0, d.i)({ prop: r, defaultProp: o, onChange: i }),
            g = (0, a.useCallback)(() => {
              clearTimeout(p.current),
                (c.current = window.setTimeout(() => v(!0), l));
            }, [l, v]),
            w = (0, a.useCallback)(() => {
              clearTimeout(c.current),
                f.current ||
                  h.current ||
                  (p.current = window.setTimeout(() => v(!1), s));
            }, [s, v]),
            y = (0, a.useCallback)(() => v(!1), [v]);
          return (
            (0, a.useEffect)(
              () => () => {
                clearTimeout(c.current), clearTimeout(p.current);
              },
              []
            ),
            (0, a.createElement)(
              K,
              {
                scope: t,
                open: m,
                onOpenChange: v,
                onOpen: g,
                onClose: w,
                onDismiss: y,
                hasSelectionRef: f,
                isPointerDownOnContentRef: h,
              },
              (0, a.createElement)(k, u, n)
            )
          );
        },
        ei = Q,
        ea = (e) => {
          let {
              __scopeHoverCard: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = q(V, t);
          return (0, a.createElement)(
            Z,
            { scope: t, forceMount: n },
            (0, a.createElement)(
              N.C,
              { present: n || i.open },
              (0, a.createElement)($, { asChild: !0, container: o }, r)
            )
          );
        },
        el = et;
    },
    96639: (e, t, n) => {
      let r, o, i;
      n.d(t, { Q: () => R });
      var a = n(7620);
      let l = new Set(),
        s = new WeakMap(),
        d = new WeakMap(),
        u = new WeakMap(),
        c = new WeakMap(),
        p = new WeakMap(),
        f = new WeakMap(),
        h = new WeakMap(),
        m = new WeakSet(),
        v = "__aa_tgt",
        g = "__aa_del";
      function w(e) {
        clearTimeout(h.get(e));
        let t = O(e),
          n = "function" == typeof t ? 500 : t.duration;
        h.set(
          e,
          setTimeout(async () => {
            let t = u.get(e);
            (!t || (await t.finished)) &&
              (s.set(e, x(e)),
              (function (e) {
                let t = c.get(e);
                null == t || t.disconnect();
                let n = s.get(e),
                  o = 0;
                n || ((n = x(e)), s.set(e, n));
                let { offsetWidth: i, offsetHeight: a } = r,
                  l = [
                    n.top - 5,
                    i - (n.left + 5 + n.width),
                    a - (n.top + 5 + n.height),
                    n.left - 5,
                  ]
                    .map((e) => `${-1 * Math.floor(e)}px`)
                    .join(" "),
                  d = new IntersectionObserver(
                    () => {
                      ++o > 1 && w(e);
                    },
                    { root: r, threshold: 1, rootMargin: l }
                  );
                d.observe(e), c.set(e, d);
              })(e));
          }, n)
        );
      }
      function y(e) {
        setTimeout(() => {
          p.set(
            e,
            setInterval(() => b(w.bind(null, e)), 2e3)
          );
        }, Math.round(2e3 * Math.random()));
      }
      function b(e) {
        "function" == typeof requestIdleCallback
          ? requestIdleCallback(() => e())
          : requestAnimationFrame(() => e());
      }
      function E(e, t) {
        t || v in e
          ? !t || v in t || Object.defineProperty(t, v, { value: e })
          : Object.defineProperty(e, v, { value: e });
      }
      function C(e) {
        return Number(e.replace(/[^0-9.\-]/g, ""));
      }
      function x(e) {
        let t = e.getBoundingClientRect();
        return {
          top: t.top + window.scrollY,
          left: t.left + window.scrollX,
          width: t.width,
          height: t.height,
        };
      }
      function P(e, t, n) {
        let r = t.width,
          o = t.height,
          i = n.width,
          a = n.height,
          l = getComputedStyle(e);
        if ("content-box" === l.getPropertyValue("box-sizing")) {
          let e =
              C(l.paddingTop) +
              C(l.paddingBottom) +
              C(l.borderTopWidth) +
              C(l.borderBottomWidth),
            t =
              C(l.paddingLeft) +
              C(l.paddingRight) +
              C(l.borderRightWidth) +
              C(l.borderLeftWidth);
          (r -= t), (i -= t), (o -= e), (a -= e);
        }
        return [r, i, o, a].map(Math.round);
      }
      function O(e) {
        return v in e && f.has(e[v])
          ? f.get(e[v])
          : { duration: 250, easing: "ease-in-out" };
      }
      function S(e) {
        if (v in e) return e[v];
      }
      function T(e) {
        let t = S(e);
        return !!t && m.has(t);
      }
      function D(e, ...t) {
        t.forEach((t) => t(e, f.has(e)));
        for (let n = 0; n < e.children.length; n++) {
          let r = e.children.item(n);
          r && t.forEach((e) => e(r, f.has(r)));
        }
      }
      function R(e) {
        let t = (0, a.useRef)(null),
          [n, r] = (0, a.useState)();
        return (
          (0, a.useEffect)(() => {
            t.current instanceof HTMLElement &&
              r(
                (function (e, t = {}) {
                  return (
                    o &&
                      i &&
                      ((window.matchMedia("(prefers-reduced-motion: reduce)")
                        .matches &&
                        "function" != typeof t &&
                        !t.disrespectUserMotionPreference) ||
                        (m.add(e),
                        "static" === getComputedStyle(e).position &&
                          Object.assign(e.style, { position: "relative" }),
                        D(e, w, y, (e) => (null == i ? void 0 : i.observe(e))),
                        "function" == typeof t
                          ? f.set(e, t)
                          : f.set(e, {
                              duration: 250,
                              easing: "ease-in-out",
                              ...t,
                            }),
                        o.observe(e, { childList: !0 }),
                        l.add(e))),
                    Object.freeze({
                      parent: e,
                      enable: () => {
                        m.add(e);
                      },
                      disable: () => {
                        m.delete(e);
                      },
                      isEnabled: () => m.has(e),
                    })
                  );
                })(t.current, e || {})
              );
          }, []),
          [
            t,
            (e) => {
              n && (e ? n.enable() : n.disable());
            },
          ]
        );
      }
      "undefined" != typeof window &&
        ((r = document.documentElement),
        (o = new MutationObserver((e) => {
          let t = (function (e) {
            return (
              !e
                .reduce(
                  (e, t) => [
                    ...e,
                    ...Array.from(t.addedNodes),
                    ...Array.from(t.removedNodes),
                  ],
                  []
                )
                .every((e) => "#comment" === e.nodeName) &&
              e.reduce((e, t) => {
                if (!1 === e) return !1;
                if (t.target instanceof Element) {
                  if ((E(t.target), !e.has(t.target))) {
                    e.add(t.target);
                    for (let n = 0; n < t.target.children.length; n++) {
                      let r = t.target.children.item(n);
                      if (r) {
                        if (g in r) return !1;
                        E(t.target, r), e.add(r);
                      }
                    }
                  }
                  if (t.removedNodes.length)
                    for (let n = 0; n < t.removedNodes.length; n++) {
                      let r = t.removedNodes[n];
                      if (g in r) return !1;
                      r instanceof Element &&
                        (e.add(r),
                        E(t.target, r),
                        d.set(r, [t.previousSibling, t.nextSibling]));
                    }
                }
                return e;
              }, new Set())
            );
          })(e);
          t &&
            t.forEach((e) =>
              (function (e) {
                var t;
                let n = r.contains(e),
                  o = s.has(e);
                n && d.has(e) && d.delete(e),
                  u.has(e) && (null == (t = u.get(e)) || t.cancel()),
                  o && n
                    ? (function (e) {
                        let t,
                          n = s.get(e),
                          r = x(e);
                        if (!T(e)) return s.set(e, r);
                        if (!n) return;
                        let o = O(e);
                        if ("function" != typeof o) {
                          let i = n.left - r.left,
                            a = n.top - r.top,
                            [l, s, d, u] = P(e, n, r),
                            c = { transform: `translate(${i}px, ${a}px)` },
                            p = { transform: "translate(0, 0)" };
                          l !== s &&
                            ((c.width = `${l}px`), (p.width = `${s}px`)),
                            d !== u &&
                              ((c.height = `${d}px`), (p.height = `${u}px`)),
                            (t = e.animate([c, p], {
                              duration: o.duration,
                              easing: o.easing,
                            }));
                        } else (t = new Animation(o(e, "remain", n, r))).play();
                        u.set(e, t),
                          s.set(e, r),
                          t.addEventListener("finish", w.bind(null, e));
                      })(e)
                    : o && !n
                    ? (function (e) {
                        var t;
                        let n;
                        if (!d.has(e) || !s.has(e)) return;
                        let [r, o] = d.get(e);
                        function i() {
                          var t;
                          e.remove(),
                            s.delete(e),
                            d.delete(e),
                            u.delete(e),
                            null == (t = c.get(e)) || t.disconnect();
                        }
                        if (
                          (Object.defineProperty(e, g, { value: !0 }),
                          o && o.parentNode && o.parentNode instanceof Element
                            ? o.parentNode.insertBefore(e, o)
                            : r && r.parentNode
                            ? r.parentNode.appendChild(e)
                            : null == (t = S(e)) || t.appendChild(e),
                          !T(e))
                        )
                          return i();
                        let [a, l, p, f] = (function (e) {
                            let t = s.get(e),
                              [n, , r] = P(e, t, x(e)),
                              o = e.parentElement;
                            for (
                              ;
                              o &&
                              ("static" === getComputedStyle(o).position ||
                                o instanceof HTMLBodyElement);

                            )
                              o = o.parentElement;
                            o || (o = document.body);
                            let i = getComputedStyle(o),
                              a = s.get(o) || x(o);
                            return [
                              Math.round(t.top - a.top) - C(i.borderTopWidth),
                              Math.round(t.left - a.left) -
                                C(i.borderLeftWidth),
                              n,
                              r,
                            ];
                          })(e),
                          h = O(e),
                          m = s.get(e);
                        Object.assign(e.style, {
                          position: "absolute",
                          top: `${a}px`,
                          left: `${l}px`,
                          width: `${p}px`,
                          height: `${f}px`,
                          margin: 0,
                          pointerEvents: "none",
                          transformOrigin: "center",
                          zIndex: 100,
                        }),
                          "function" != typeof h
                            ? (n = e.animate(
                                [
                                  { transform: "scale(1)", opacity: 1 },
                                  { transform: "scale(.98)", opacity: 0 },
                                ],
                                { duration: h.duration, easing: "ease-out" }
                              ))
                            : (n = new Animation(h(e, "remove", m))).play(),
                          u.set(e, n),
                          n.addEventListener("finish", i);
                      })(e)
                    : (function (e) {
                        let t,
                          n = x(e);
                        s.set(e, n);
                        let r = O(e);
                        T(e) &&
                          ("function" != typeof r
                            ? (t = e.animate(
                                [
                                  { transform: "scale(.98)", opacity: 0 },
                                  {
                                    transform: "scale(0.98)",
                                    opacity: 0,
                                    offset: 0.5,
                                  },
                                  { transform: "scale(1)", opacity: 1 },
                                ],
                                {
                                  duration: 1.5 * r.duration,
                                  easing: "ease-in",
                                }
                              ))
                            : (t = new Animation(r(e, "add", n))).play(),
                          u.set(e, t),
                          t.addEventListener("finish", w.bind(null, e)));
                      })(e);
              })(e)
            );
        })),
        (i = new ResizeObserver((e) => {
          e.forEach((e) => {
            e.target === r &&
              (clearTimeout(h.get(r)),
              h.set(
                r,
                setTimeout(() => {
                  l.forEach((e) => D(e, (e) => b(() => w(e))));
                }, 100)
              )),
              s.has(e.target) && w(e.target);
          });
        })).observe(r));
    },
  },
]);
//# sourceMappingURL=34579-9ed6ea64b97b7d12.js.map
