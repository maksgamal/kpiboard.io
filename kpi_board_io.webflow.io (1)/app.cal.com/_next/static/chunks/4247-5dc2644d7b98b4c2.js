"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4247],
  {
    2324: (t, e, r) => {
      r.d(e, { TM: () => v, $z: () => g, Uo: () => m });
      let n = (t) => /^\-?\d*\.?\d+$/.test(t);
      var i = r(30254),
        s = r(49989),
        a = r(23109),
        o = r(66566),
        l = r(35310),
        u = r(10951),
        h = r(8637),
        c = r(64569);
      let p = [...h.T, u.y, o.f],
        d = (t) => p.find((0, c.w)(t));
      var f = r(57705);
      function m(t, e) {
        let r = (0, f.K)(t, e),
          {
            transitionEnd: n = {},
            transition: i = {},
            ...o
          } = r ? t.makeTargetAnimatable(r, !1) : {};
        for (let e in (o = { ...o, ...n })) {
          let r = (0, s.K)(o[e]);
          t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, (0, a.O)(r));
        }
      }
      function v(t, e, r) {
        var s, u;
        let h = Object.keys(e).filter((e) => !t.hasValue(e)),
          c = h.length;
        if (c)
          for (let p = 0; p < c; p++) {
            let c = h[p],
              f = e[c],
              m = null;
            Array.isArray(f) && (m = f[0]),
              null === m &&
                (m =
                  null != (u = null != (s = r[c]) ? s : t.readValue(c))
                    ? u
                    : e[c]),
              null != m &&
                ("string" == typeof m && (n(m) || (0, i.$)(m))
                  ? (m = parseFloat(m))
                  : !d(m) && o.f.test(f) && (m = (0, l.J)(c, f)),
                t.addValue(c, (0, a.O)(m, { owner: t })),
                void 0 === r[c] && (r[c] = m),
                null !== m && t.setBaseTarget(c, m));
          }
      }
      function g(t, e, r) {
        let n = {};
        for (let i in t) {
          let t = (function (t, e) {
            if (e) return (e[t] || e.default || e).from;
          })(i, e);
          if (void 0 !== t) n[i] = t;
          else {
            let t = r.getValue(i);
            t && (n[i] = t.get());
          }
        }
        return n;
      }
    },
    3449: (t, e, r) => {
      r.d(e, { f: () => s });
      var n = r(11655),
        i = r(24268);
      function s(t, e) {
        let r = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          let a = (0, i.q)(0, e, s);
          t.push((0, n.j)(r, 1, a));
        }
      }
    },
    4939: (t, e, r) => {
      r.d(e, { D: () => a });
      var n = r(10951),
        i = r(10010);
      let s = {
          ...r(10222).W,
          color: n.y,
          backgroundColor: n.y,
          outlineColor: n.y,
          fill: n.y,
          stroke: n.y,
          borderColor: n.y,
          borderTopColor: n.y,
          borderRightColor: n.y,
          borderBottomColor: n.y,
          borderLeftColor: n.y,
          filter: i.p,
          WebkitFilter: i.p,
        },
        a = (t) => s[t];
    },
    4977: (t, e, r) => {
      r.d(e, { B: () => l });
      var n = r(7112),
        i = r(54336),
        s = r(14052),
        a = r(25244);
      let o = { ...i.ai, transform: (t) => Math.round((0, n.q)(0, 255, t)) },
        l = {
          test: (0, a.$)("rgb", "red"),
          parse: (0, a.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            o.transform(t) +
            ", " +
            o.transform(e) +
            ", " +
            o.transform(r) +
            ", " +
            (0, s.aj)(i.X4.transform(n)) +
            ")",
        };
    },
    8637: (t, e, r) => {
      r.d(e, { T: () => a, n: () => o });
      var n = r(54336),
        i = r(48201),
        s = r(64569);
      let a = [
          n.ai,
          i.px,
          i.KN,
          i.uj,
          i.vw,
          i.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        o = (t) => a.find((0, s.w)(t));
    },
    10010: (t, e, r) => {
      r.d(e, { p: () => l });
      var n = r(66566),
        i = r(14052);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function a(t) {
        let [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = r.match(i.SY) || [];
        if (!n) return t;
        let a = r.replace(n, ""),
          o = +!!s.has(e);
        return n !== r && (o *= 100), e + "(" + o + a + ")";
      }
      let o = /([a-z-]*)\(.*?\)/g,
        l = {
          ...n.f,
          getAnimatableNone: (t) => {
            let e = t.match(o);
            return e ? e.map(a).join(" ") : t;
          },
        };
    },
    10951: (t, e, r) => {
      r.d(e, { y: () => o });
      var n = r(14052),
        i = r(94412),
        s = r(46949),
        a = r(4977);
      let o = {
        test: (t) => a.B.test(t) || i.u.test(t) || s.V.test(t),
        parse: (t) =>
          a.B.test(t)
            ? a.B.parse(t)
            : s.V.test(t)
            ? s.V.parse(t)
            : i.u.parse(t),
        transform: (t) =>
          (0, n.Kg)(t)
            ? t
            : t.hasOwnProperty("red")
            ? a.B.transform(t)
            : s.V.transform(t),
      };
    },
    11655: (t, e, r) => {
      r.d(e, { j: () => n });
      let n = (t, e, r) => -r * t + r * e + t;
    },
    14731: (t, e, r) => {
      r.d(e, { L: () => a, m: () => s });
      var n = r(42250),
        i = r(59925);
      function s(t, e) {
        return (0, n.FY)((0, n.bS)(t.getBoundingClientRect(), e));
      }
      function a(t, e, r) {
        let n = s(t, r),
          { scroll: a } = e;
        return a && ((0, i.Ql)(n.x, a.offset.x), (0, i.Ql)(n.y, a.offset.y)), n;
      }
    },
    14769: (t, e, r) => {
      r.d(e, { U: () => s });
      var n = r(46898),
        i = r(53830);
      function s() {
        if (((i.r.current = !0), n.B))
          if (window.matchMedia) {
            let t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => (i.O.current = t.matches);
            t.addListener(e), e();
          } else i.O.current = !1;
      }
    },
    16732: (t, e, r) => {
      r.d(e, { po: () => s, tn: () => o, yT: () => a });
      var n = r(97617),
        i = r(54344);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, i.G)(s),
        o = (0, n.V)(a);
    },
    19607: (t, e, r) => {
      r.d(e, { h: () => s });
      var n = r(68408),
        i = r(38660);
      function s(t, e, r, s) {
        return (0, n.k)(t, e, (0, i.F)(r), s);
      }
    },
    23109: (t, e, r) => {
      r.d(e, { O: () => l });
      var n = r(49507),
        i = r(61736),
        s = r(64844),
        a = r(78081);
      class o {
        constructor(t, e = {}) {
          (this.version = "10.12.8"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: r, timestamp: s } = n.u;
              this.lastUpdated !== s &&
                ((this.timeDelta = r),
                (this.lastUpdated = s),
                i.Gt.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              i.Gt.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = !isNaN(parseFloat(this.current))),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new s.v());
          let r = this.events[t].add(e);
          return "change" === t
            ? () => {
                r(),
                  i.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, r) {
          this.set(e), (this.prev = t), (this.timeDelta = r);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, a.f)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function l(t, e) {
        return new o(t, e);
      }
    },
    24016: (t, e, r) => {
      r.d(e, { $: () => u });
      var n = r(61736),
        i = r(84576);
      let s = "data-" + (0, r(96096).I)("framerAppearId");
      var a = r(40878),
        o = r(44887),
        l = r(2324);
      function u(t, e, { delay: r = 0, transitionOverride: h, type: c } = {}) {
        let {
            transition: p = t.getDefaultTransition(),
            transitionEnd: d,
            ...f
          } = t.makeTargetAnimatable(e),
          m = t.getValue("willChange");
        h && (p = h);
        let v = [],
          g = c && t.animationState && t.animationState.getState()[c];
        for (let e in f) {
          let l = t.getValue(e),
            u = f[e];
          if (
            !l ||
            void 0 === u ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, r) {
                let n = t.hasOwnProperty(r) && !0 !== e[r];
                return (e[r] = !1), n;
              })(g, e))
          )
            continue;
          let h = { delay: r, elapsed: 0, ...p };
          if (window.HandoffAppearAnimations && !l.hasAnimated) {
            let r = t.getProps()[s];
            r && (h.elapsed = window.HandoffAppearAnimations(r, e, l, n.Gt));
          }
          l.start(
            (0, a.f)(
              e,
              l,
              u,
              t.shouldReduceMotion && i.f.has(e) ? { type: !1 } : h
            )
          );
          let c = l.animation;
          (0, o.k)(m) && (m.add(e), c.then(() => m.remove(e))), v.push(c);
        }
        return (
          d &&
            Promise.all(v).then(() => {
              d && (0, l.Uo)(t, d);
            }),
          v
        );
      }
    },
    24268: (t, e, r) => {
      r.d(e, { q: () => n });
      let n = (t, e, r) => {
        let n = e - t;
        return 0 === n ? 1 : (r - t) / n;
      };
    },
    25244: (t, e, r) => {
      r.d(e, { $: () => i, q: () => s });
      var n = r(14052);
      let i = (t, e) => (r) =>
          !!(
            ((0, n.Kg)(r) && n.Fl.test(r) && r.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(r, e))
          ),
        s = (t, e, r) => (i) => {
          if (!(0, n.Kg)(i)) return i;
          let [s, a, o, l] = i.match(n.SY);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(a),
            [r]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    30254: (t, e, r) => {
      r.d(e, { $: () => n });
      let n = (t) => /^0[^.\s]+$/.test(t);
    },
    33680: (t, e, r) => {
      r.d(e, { X: () => n });
      class n {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    35310: (t, e, r) => {
      r.d(e, { J: () => a });
      var n = r(66566),
        i = r(10010),
        s = r(4939);
      function a(t, e) {
        let r = (0, s.D)(t);
        return (
          r !== i.p && (r = n.f),
          r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        );
      }
    },
    35541: (t, e, r) => {
      r.d(e, { o: () => c });
      var n = r(68781),
        i = r(71806),
        s = r(84484),
        a = r(7112);
      function o(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let l = ["duration", "bounce"],
        u = ["stiffness", "damping", "mass"];
      function h(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function c({ keyframes: t, restDelta: e, restSpeed: r, ...c }) {
        let p,
          d = t[0],
          f = t[t.length - 1],
          m = { done: !1, value: d },
          {
            stiffness: v,
            damping: g,
            mass: y,
            velocity: b,
            duration: V,
            isResolvedFromDuration: w,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!h(t, u) && h(t, l)) {
              let r = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: r = 0,
                mass: i = 1,
              }) {
                let l, u;
                (0, s.$)(
                  t <= (0, n.f)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let h = 1 - e;
                (h = (0, a.q)(0.05, 1, h)),
                  (t = (0, a.q)(0.01, 10, (0, n.X)(t))),
                  h < 1
                    ? ((l = (e) => {
                        let n = e * h,
                          i = n * t;
                        return 0.001 - ((n - r) / o(e, h)) * Math.exp(-i);
                      }),
                      (u = (e) => {
                        let n = e * h * t,
                          i = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          s = Math.exp(-n),
                          a = o(Math.pow(e, 2), h);
                        return (
                          ((n * r + r - i) * s * (-l(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((l = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - r) * t + 1)),
                      (u = (e) => t * t * (r - e) * Math.exp(-e * t)));
                let c = (function (t, e, r) {
                  let n = r;
                  for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                  return n;
                })(l, u, 5 / t);
                if (((t = (0, n.f)(t)), isNaN(c)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(c, 2) * i;
                  return {
                    stiffness: e,
                    damping: 2 * h * Math.sqrt(i * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...r,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(c),
          A = b ? -(0, n.X)(b) : 0,
          x = g / (2 * Math.sqrt(v * y)),
          P = f - d,
          S = (0, n.X)(Math.sqrt(v / y)),
          C = 5 > Math.abs(P);
        if ((r || (r = C ? 0.01 : 2), e || (e = C ? 0.005 : 0.5), x < 1)) {
          let t = o(S, x);
          p = (e) =>
            f -
            Math.exp(-x * S * e) *
              (((A + x * S * P) / t) * Math.sin(t * e) + P * Math.cos(t * e));
        } else if (1 === x)
          p = (t) => f - Math.exp(-S * t) * (P + (A + S * P) * t);
        else {
          let t = S * Math.sqrt(x * x - 1);
          p = (e) => {
            let r = Math.exp(-x * S * e),
              n = Math.min(t * e, 300);
            return (
              f -
              (r * ((A + x * S * P) * Math.sinh(n) + t * P * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (w && V) || null,
          next: (t) => {
            let n = p(t);
            if (w) m.done = t >= V;
            else {
              let s = A;
              0 !== t && (s = x < 1 ? (0, i.Y)(p, t, n) : 0);
              let a = Math.abs(f - n) <= e;
              m.done = Math.abs(s) <= r && a;
            }
            return (m.value = m.done ? f : n), m;
          },
        };
      }
    },
    35610: (t, e, r) => {
      r.d(e, { M: () => n });
      let n = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
    },
    38660: (t, e, r) => {
      r.d(e, { F: () => s, e: () => i });
      var n = r(35610);
      function i(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let s = (t) => (e) => (0, n.M)(e) && t(e, i(e));
    },
    39603: (t, e, r) => {
      r.d(e, { l: () => d });
      var n = r(70309),
        i = r(82700),
        s = r(53164),
        a = r(96096),
        o = r(48887),
        l = r(84576),
        u = r(24255),
        h = r(4939),
        c = r(78912),
        p = r(23185);
      class d extends i.b {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (l.f.has(e)) {
            let t = (0, h.D)(e);
            return (t && t.default) || 0;
          }
          return (e = o.e.has(e) ? e : (0, a.I)(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return (0, c.ge)();
        }
        scrapeMotionValuesFromProps(t, e) {
          return (0, n.x)(t, e);
        }
        build(t, e, r, n) {
          (0, s.B)(t, e, r, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, r, n) {
          (0, u.d)(t, e, r, n);
        }
        mount(t) {
          (this.isSVGTag = (0, p.n)(t.tagName)), super.mount(t);
        }
      }
    },
    40587: (t, e, r) => {
      r.d(e, { M: () => p });
      var n = r(53025),
        i = r(5906),
        s = r(84576),
        a = r(75588),
        o = r(5570),
        l = r(4939),
        u = r(14731),
        h = r(82700),
        c = r(56516);
      class p extends h.b {
        readValueFromInstance(t, e) {
          if (s.f.has(e)) {
            let t = (0, l.D)(e);
            return (t && t.default) || 0;
          }
          {
            let r = window.getComputedStyle(t),
              n = ((0, i.j4)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.m)(t, e);
        }
        build(t, e, r, i) {
          (0, n.O)(t, e, r, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return (0, a.x)(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, c.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, r, n) {
          (0, o.e)(t, e, r, n);
        }
      }
    },
    40794: (t, e, r) => {
      function n({
        when: t,
        delay: e,
        delayChildren: r,
        staggerChildren: n,
        staggerDirection: i,
        repeat: s,
        repeatType: a,
        repeatDelay: o,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function i(t, e) {
        return t[e] || t.default || t;
      }
      r.d(e, { D: () => n, r: () => i });
    },
    40878: (t, e, r) => {
      r.d(e, { f: () => td });
      var n = r(84484),
        i = r(68781);
      let s = { current: !1 };
      var a = r(61736);
      let o = (t) => Array.isArray(t) && "number" == typeof t[0],
        l = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
        u = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: l([0, 0.65, 0.55, 1]),
          circOut: l([0.55, 0, 1, 0.45]),
          backIn: l([0.31, 0.01, 0.66, -0.59]),
          backOut: l([0.33, 1.53, 0.69, 0.99]),
        },
        h = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        c = {},
        p = {};
      for (let t in h) p[t] = () => (void 0 === c[t] && (c[t] = h[t]()), c[t]);
      var d = r(90879);
      let f = (0, d.A)(0.42, 0, 1, 1),
        m = (0, d.A)(0, 0, 0.58, 1),
        v = (0, d.A)(0.42, 0, 0.58, 1);
      var g = r(99541),
        y = r(72841),
        b = r(16732),
        V = r(97617),
        w = r(54344);
      let A = (0, d.A)(0.33, 1.53, 0.69, 0.99),
        x = (0, w.G)(A),
        P = (0, V.V)(x),
        S = {
          linear: y.l,
          easeIn: f,
          easeInOut: v,
          easeOut: m,
          circIn: b.po,
          circInOut: b.tn,
          circOut: b.yT,
          backIn: x,
          backInOut: P,
          backOut: A,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * x(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        C = (t) => {
          if (Array.isArray(t)) {
            (0, n.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, r, i, s] = t;
            return (0, d.A)(e, r, i, s);
          }
          return "string" == typeof t
            ? ((0, n.V)(void 0 !== S[t], `Invalid easing type '${t}'`), S[t])
            : t;
        };
      var M = r(10951),
        k = r(7112),
        F = r(11655);
      function T(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? t + (e - t) * 6 * r
          : r < 0.5
          ? e
          : r < 2 / 3
          ? t + (e - t) * (2 / 3 - r) * 6
          : t;
      }
      var E = r(94412),
        O = r(4977),
        I = r(46949);
      let N = (t, e, r) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, r * (e * e - n) + n));
        },
        j = [E.u, O.B, I.V];
      function $(t) {
        let e = j.find((e) => e.test(t));
        (0, n.V)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = e.parse(t);
        return (
          e === I.V &&
            (r = (function ({ hue: t, saturation: e, lightness: r, alpha: n }) {
              (t /= 360), (r /= 100);
              let i = 0,
                s = 0,
                a = 0;
              if ((e /= 100)) {
                let n = r < 0.5 ? r * (1 + e) : r + e - r * e,
                  o = 2 * r - n;
                (i = T(o, n, t + 1 / 3)),
                  (s = T(o, n, t)),
                  (a = T(o, n, t - 1 / 3));
              } else i = s = a = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * s),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let D = (t, e) => {
        let r = $(t),
          n = $(e),
          i = { ...r };
        return (t) => (
          (i.red = N(r.red, n.red, t)),
          (i.green = N(r.green, n.green, t)),
          (i.blue = N(r.blue, n.blue, t)),
          (i.alpha = (0, F.j)(r.alpha, n.alpha, t)),
          O.B.transform(i)
        );
      };
      var B = r(47217),
        L = r(66566);
      let q = (t, e) => (r) => `${r > 0 ? e : t}`;
      function G(t, e) {
        return "number" == typeof t
          ? (r) => (0, F.j)(t, e, r)
          : M.y.test(t)
          ? D(t, e)
          : t.startsWith("var(")
          ? q(t, e)
          : R(t, e);
      }
      let U = (t, e) => {
          let r = [...t],
            n = r.length,
            i = t.map((t, r) => G(t, e[r]));
          return (t) => {
            for (let e = 0; e < n; e++) r[e] = i[e](t);
            return r;
          };
        },
        K = (t, e) => {
          let r = { ...t, ...e },
            n = {};
          for (let i in r)
            void 0 !== t[i] && void 0 !== e[i] && (n[i] = G(t[i], e[i]));
          return (t) => {
            for (let e in n) r[e] = n[e](t);
            return r;
          };
        },
        R = (t, e) => {
          let r = L.f.createTransformer(e),
            i = (0, L.V)(t),
            s = (0, L.V)(e);
          return i.numVars === s.numVars &&
            i.numColors === s.numColors &&
            i.numNumbers >= s.numNumbers
            ? (0, B.F)(U(i.values, s.values), r)
            : ((0, n.$)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              q(t, e));
        };
      var X = r(24268);
      let W = (t, e) => (r) => (0, F.j)(t, e, r);
      function z(t, e, { clamp: r = !0, ease: i, mixer: s } = {}) {
        let a = t.length;
        if (
          ((0, n.V)(
            a === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === a)
        )
          return () => e[0];
        t[0] > t[a - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let o = (function (t, e, r) {
            let n = [],
              i =
                r ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return M.y.test(t) ? D : R;
                  else if (Array.isArray(t)) return U;
                  else if ("object" == typeof t) return K;
                  return W;
                })(t[0]),
              s = t.length - 1;
            for (let r = 0; r < s; r++) {
              let s = i(t[r], t[r + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[r] || y.l : e;
                s = (0, B.F)(t, s);
              }
              n.push(s);
            }
            return n;
          })(e, i, s),
          l = o.length,
          u = (e) => {
            let r = 0;
            if (l > 1) for (; r < t.length - 2 && !(e < t[r + 1]); r++);
            let n = (0, X.q)(t[r], t[r + 1], e);
            return o[r](n);
          };
        return r ? (e) => u((0, k.q)(t[0], t[a - 1], e)) : u;
      }
      var Y = r(95075);
      function H({
        duration: t = 300,
        keyframes: e,
        times: r,
        ease: n = "easeInOut",
      }) {
        var i;
        let s = (0, g.h)(n) ? n.map(C) : C(n),
          a = { done: !1, value: e[0] },
          o = z(
            ((i = r && r.length === e.length ? r : (0, Y.Z)(e)),
            i.map((e) => e * t)),
            e,
            {
              ease: Array.isArray(s)
                ? s
                : e.map(() => s || v).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((a.value = o(e)), (a.done = e >= t), a),
        };
      }
      var _ = r(35541),
        J = r(71806);
      function Q({
        keyframes: t,
        velocity: e = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c,
          p,
          d = t[0],
          f = { done: !1, value: d },
          m = r * e,
          v = d + m,
          g = void 0 === a ? v : a(v);
        g !== v && (m = g - d);
        let y = (t) => -m * Math.exp(-t / n),
          b = (t) => g + y(t),
          V = (t) => {
            let e = y(t),
              r = b(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? g : r);
          },
          w = (t) => {
            let e;
            if (
              ((e = f.value),
              (void 0 !== o && e < o) || (void 0 !== l && e > l))
            ) {
              var r;
              (c = t),
                (p = (0, _.o)({
                  keyframes: [
                    f.value,
                    ((r = f.value),
                    void 0 === o
                      ? l
                      : void 0 === l || Math.abs(o - r) < Math.abs(l - r)
                      ? o
                      : l),
                  ],
                  velocity: (0, J.Y)(b, t, f.value),
                  damping: i,
                  stiffness: s,
                  restDelta: u,
                  restSpeed: h,
                }));
            }
          };
        return (
          w(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (p || void 0 !== c || ((e = !0), V(t), w(t)),
              void 0 !== c && t > c)
                ? p.next(t - c)
                : (e || V(t), f);
            },
          }
        );
      }
      var Z = r(49507);
      let tt = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => a.Gt.update(e, !0),
          stop: () => (0, a.WG)(e),
          now: () => (Z.u.isProcessing ? Z.u.timestamp : performance.now()),
        };
      };
      var te = r(50719);
      let tr = { decay: Q, inertia: Q, tween: H, keyframes: H, spring: _.o };
      function tn({
        autoplay: t = !0,
        delay: e = 0,
        driver: r = tt,
        keyframes: n,
        type: s = "keyframes",
        repeat: a = 0,
        repeatDelay: o = 0,
        repeatType: l = "loop",
        onPlay: u,
        onStop: h,
        onComplete: c,
        onUpdate: p,
        ...d
      }) {
        let f,
          m,
          v,
          g,
          y,
          b = 1,
          V = !1,
          w = () => {
            f && f(),
              (m = new Promise((t) => {
                f = t;
              }));
          };
        w();
        let A = tr[s] || H;
        A !== H &&
          "number" != typeof n[0] &&
          ((g = z([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let x = A({ ...d, keyframes: n });
        "mirror" === l &&
          (y = A({
            ...d,
            keyframes: [...n].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let P = "idle",
          S = null,
          C = null,
          M = null;
        null === x.calculatedDuration &&
          a &&
          (x.calculatedDuration = (0, te.t)(x));
        let { calculatedDuration: F } = x,
          T = 1 / 0,
          E = 1 / 0;
        null !== F && (E = (T = F + o) * (a + 1) - o);
        let O = 0,
          I = (t) => {
            if (null === C) return;
            b > 0 && (C = Math.min(C, t));
            let r = (O = null !== S ? S : (t - C) * b) - e,
              i = r < 0;
            (O = Math.max(r, 0)), "finished" === P && null === S && (O = E);
            let s = O,
              u = x;
            if (a) {
              let t = O / T,
                e = Math.floor(t),
                r = t % 1;
              !r && t >= 1 && (r = 1), 1 === r && e--;
              let n = !!((e = Math.min(e, a + 1)) % 2);
              n &&
                ("reverse" === l
                  ? ((r = 1 - r), o && (r -= o / T))
                  : "mirror" === l && (u = y));
              let i = (0, k.q)(0, 1, r);
              O > E && (i = "reverse" === l && n ? 1 : 0), (s = i * T);
            }
            let h = i ? { done: !1, value: n[0] } : u.next(s);
            g && (h.value = g(h.value));
            let { done: c } = h;
            i || null === F || (c = O >= E);
            let d =
              null === S &&
              ("finished" === P || ("running" === P && c) || (b < 0 && O <= 0));
            return p && p(h.value), d && $(), h;
          },
          N = () => {
            v && v.stop(), (v = void 0);
          },
          j = () => {
            (P = "idle"), N(), w(), (C = M = null);
          },
          $ = () => {
            (P = "finished"), c && c(), N(), w();
          },
          D = () => {
            if (V) return;
            v || (v = r(I));
            let t = v.now();
            u && u(),
              null !== S ? (C = t - S) : (C && "finished" !== P) || (C = t),
              (M = C),
              (S = null),
              (P = "running"),
              v.start();
          };
        t && D();
        let B = {
          then: (t, e) => m.then(t, e),
          get time() {
            return (0, i.X)(O);
          },
          set time(newTime) {
            (O = newTime = (0, i.f)(newTime)),
              null === S && v && 0 !== b
                ? (C = v.now() - newTime / b)
                : (S = newTime);
          },
          get duration() {
            let t =
              null === x.calculatedDuration
                ? (0, te.t)(x)
                : x.calculatedDuration;
            return (0, i.X)(t);
          },
          get speed() {
            return b;
          },
          set speed(newSpeed) {
            if (newSpeed === b || !v) return;
            (b = newSpeed), (B.time = (0, i.X)(O));
          },
          get state() {
            return P;
          },
          play: D,
          pause: () => {
            (P = "paused"), (S = O);
          },
          stop: () => {
            (V = !0), "idle" !== P && ((P = "idle"), h && h(), j());
          },
          cancel: () => {
            null !== M && I(M), j();
          },
          complete: () => {
            P = "finished";
          },
          sample: (t) => ((C = 0), I(t)),
        };
        return B;
      }
      let ti = new Set([
        "opacity",
        "clipPath",
        "filter",
        "transform",
        "backgroundColor",
      ]);
      var ts = r(84576);
      let ta = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        to = { type: "keyframes", duration: 0.8 },
        tl = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tu = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (L.f.test(e) || "0" === e) &&
              !e.startsWith("url("))
          );
      var th = r(35310),
        tc = r(30254),
        tp = r(40794);
      let td =
        (t, e, r, h = {}) =>
        (c) => {
          let d = (0, tp.r)(h, t) || {},
            f = d.delay || h.delay || 0,
            { elapsed: m = 0 } = h;
          m -= (0, i.f)(f);
          let v = (function (t, e, r, n) {
              let i,
                s,
                a = tu(e, r);
              i = Array.isArray(r) ? [...r] : [null, r];
              let o = void 0 !== n.from ? n.from : t.get(),
                l = [];
              for (let t = 0; t < i.length; t++) {
                var u;
                (null === i[t] && (i[t] = 0 === t ? o : i[t - 1]),
                "number" == typeof (u = i[t])
                  ? 0 === u
                  : null !== u
                  ? "none" === u || "0" === u || (0, tc.$)(u)
                  : void 0)
                  ? l.push(t)
                  : "string" == typeof i[t] && (s = i[t]);
              }
              if (a && l.length && s)
                for (let t = 0; t < l.length; t++) i[l[t]] = (0, th.J)(e, s);
              return i;
            })(e, t, r, d),
            g = v[0],
            b = v[v.length - 1],
            V = tu(t, g),
            w = tu(t, b);
          (0, n.$)(
            V === w,
            `You are trying to animate ${t} from "${g}" to "${b}". ${g} is not an animatable value - to enable this animation set ${g} to a value animatable to ${b} via the \`style\` property.`
          );
          let A = {
            keyframes: v,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...d,
            delay: -m,
            onUpdate: (t) => {
              e.set(t), d.onUpdate && d.onUpdate(t);
            },
            onComplete: () => {
              c(), d.onComplete && d.onComplete();
            },
          };
          if (
            ((0, tp.D)(d) ||
              (A = {
                ...A,
                ...((t, { keyframes: e }) =>
                  e.length > 2
                    ? to
                    : ts.f.has(t)
                    ? t.startsWith("scale")
                      ? {
                          type: "spring",
                          stiffness: 550,
                          damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                          restSpeed: 10,
                        }
                      : ta
                    : tl)(t, A),
              }),
            A.duration && (A.duration = (0, i.f)(A.duration)),
            A.repeatDelay && (A.repeatDelay = (0, i.f)(A.repeatDelay)),
            !V || !w || s.current || !1 === d.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: r,
              onComplete: n,
            }) {
              let i = () => (
                r && r(t[t.length - 1]),
                n && n(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: y.l,
                  pause: y.l,
                  stop: y.l,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: y.l,
                  complete: y.l,
                }
              );
              return e
                ? tn({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: i,
                  })
                : i();
            })(A);
          if (
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let r = (function (t, e, { onUpdate: r, onComplete: n, ...s }) {
              let h, c;
              if (
                !(
                  p.waapi() &&
                  ti.has(e) &&
                  !s.repeatDelay &&
                  "mirror" !== s.repeatType &&
                  0 !== s.damping &&
                  "inertia" !== s.type
                )
              )
                return !1;
              let d = !1,
                f = () => {
                  c = new Promise((t) => {
                    h = t;
                  });
                };
              f();
              let { keyframes: m, duration: v = 300, ease: g, times: y } = s;
              if (
                "spring" === s.type ||
                "backgroundColor" === e ||
                !(function t(e) {
                  return !!(
                    !e ||
                    ("string" == typeof e && u[e]) ||
                    o(e) ||
                    (Array.isArray(e) && e.every(t))
                  );
                })(s.ease)
              ) {
                let t = tn({ ...s, repeat: 0, delay: 0 }),
                  e = { done: !1, value: m[0] },
                  r = [],
                  n = 0;
                for (; !e.done && n < 2e4; )
                  (e = t.sample(n)), r.push(e.value), (n += 10);
                (y = void 0), (m = r), (v = n - 10), (g = "linear");
              }
              let b = (function (
                  t,
                  e,
                  r,
                  {
                    delay: n = 0,
                    duration: i,
                    repeat: s = 0,
                    repeatType: a = "loop",
                    ease: h,
                    times: c,
                  } = {}
                ) {
                  let p = { [e]: r };
                  c && (p.offset = c);
                  let d = (function t(e) {
                    if (e)
                      return o(e) ? l(e) : Array.isArray(e) ? e.map(t) : u[e];
                  })(h);
                  return (
                    Array.isArray(d) && (p.easing = d),
                    t.animate(p, {
                      delay: n,
                      duration: i,
                      easing: Array.isArray(d) ? "linear" : d,
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === a ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, m, {
                  ...s,
                  duration: v,
                  ease: g,
                  times: y,
                }),
                V = () => b.cancel(),
                w = () => {
                  a.Gt.update(V), h(), f();
                };
              return (
                (b.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: r = "loop" }) {
                      let n =
                        e && "loop" !== r && e % 2 == 1 ? 0 : t.length - 1;
                      return t[n];
                    })(m, s)
                  ),
                    n && n(),
                    w();
                }),
                {
                  then: (t, e) => c.then(t, e),
                  get time() {
                    return (0, i.X)(b.currentTime || 0);
                  },
                  set time(newTime) {
                    b.currentTime = (0, i.f)(newTime);
                  },
                  get speed() {
                    return b.playbackRate;
                  },
                  set speed(newSpeed) {
                    b.playbackRate = newSpeed;
                  },
                  get duration() {
                    return (0, i.X)(v);
                  },
                  play: () => {
                    d || (b.play(), (0, a.WG)(V));
                  },
                  pause: () => b.pause(),
                  stop: () => {
                    if (((d = !0), "idle" === b.playState)) return;
                    let { currentTime: e } = b;
                    if (e) {
                      let r = tn({ ...s, autoplay: !1 });
                      t.setWithVelocity(
                        r.sample(e - 10).value,
                        r.sample(e).value,
                        10
                      );
                    }
                    w();
                  },
                  complete: () => b.finish(),
                  cancel: w,
                }
              );
            })(e, t, A);
            if (r) return r;
          }
          return tn(A);
        };
    },
    42250: (t, e, r) => {
      function n({ top: t, left: e, right: r, bottom: n }) {
        return { x: { min: e, max: r }, y: { min: t, max: n } };
      }
      function i({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let r = e({ x: t.left, y: t.top }),
          n = e({ x: t.right, y: t.bottom });
        return { top: r.y, left: r.x, bottom: n.y, right: n.x };
      }
      r.d(e, { FY: () => n, bS: () => s, pA: () => i });
    },
    44887: (t, e, r) => {
      r.d(e, { k: () => i });
      var n = r(56516);
      function i(t) {
        return !!((0, n.S)(t) && t.add);
      }
    },
    46336: (t, e, r) => {
      r.d(e, { n: () => x });
      var n = r(19607),
        i = r(47217),
        s = r(47392),
        a = r(33680),
        o = r(61736);
      function l(t, e) {
        let r = "onHover" + (e ? "Start" : "End");
        return (0, n.h)(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (n, i) => {
            if ("touch" === n.type || (0, s.D3)()) return;
            let a = t.getProps();
            t.animationState &&
              a.whileHover &&
              t.animationState.setActive("whileHover", e),
              a[r] && o.Gt.update(() => a[r](n, i));
          },
          { passive: !t.getProps()[r] }
        );
      }
      class u extends a.X {
        mount() {
          this.unmount = (0, i.F)(l(this.node, !0), l(this.node, !1));
        }
        unmount() {}
      }
      var h = r(68408);
      class c extends a.X {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, i.F)(
            (0, h.k)(this.node.current, "focus", () => this.onFocus()),
            (0, h.k)(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      var p = r(38660);
      let d = (t, e) => !!e && (t === e || d(t, e.parentElement));
      var f = r(72841);
      function m(t, e) {
        if (!e) return;
        let r = new PointerEvent("pointer" + t);
        e(r, (0, p.e)(r));
      }
      class v extends a.X {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = f.l),
            (this.removeEndListeners = f.l),
            (this.removeAccessibleListeners = f.l),
            (this.startPointerPress = (t, e) => {
              if ((this.removeEndListeners(), this.isPressing)) return;
              let r = this.node.getProps(),
                s = (t, e) => {
                  if (!this.checkPressEnd()) return;
                  let { onTap: r, onTapCancel: n } = this.node.getProps();
                  o.Gt.update(() => {
                    d(this.node.current, t.target)
                      ? r && r(t, e)
                      : n && n(t, e);
                  });
                },
                a = (0, n.h)(window, "pointerup", s, {
                  passive: !(r.onTap || r.onPointerUp),
                }),
                l = (0, n.h)(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(r.onTapCancel || r.onPointerCancel) }
                );
              (this.removeEndListeners = (0, i.F)(a, l)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = (t) => {
                  if ("Enter" !== t.key || this.isPressing) return;
                  let e = (t) => {
                    "Enter" === t.key &&
                      this.checkPressEnd() &&
                      m("up", (t, e) => {
                        let { onTap: r } = this.node.getProps();
                        r && o.Gt.update(() => r(t, e));
                      });
                  };
                  this.removeEndListeners(),
                    (this.removeEndListeners = (0, h.k)(
                      this.node.current,
                      "keyup",
                      e
                    )),
                    m("down", (t, e) => {
                      this.startPress(t, e);
                    });
                },
                e = (0, h.k)(this.node.current, "keydown", t),
                r = () => {
                  this.isPressing &&
                    m("cancel", (t, e) => this.cancelPress(t, e));
                },
                n = (0, h.k)(this.node.current, "blur", r);
              this.removeAccessibleListeners = (0, i.F)(e, n);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: r, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            r && o.Gt.update(() => r(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !(0, s.D3)()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: r } = this.node.getProps();
          r && o.Gt.update(() => r(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = (0, n.h)(
              this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            r = (0, h.k)(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, i.F)(e, r);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let g = new WeakMap(),
        y = new WeakMap(),
        b = (t) => {
          let e = g.get(t.target);
          e && e(t);
        },
        V = (t) => {
          t.forEach(b);
        },
        w = { some: 0, all: 1 };
      class A extends a.X {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: r, amount: n = "some", once: i } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof n ? n : w[n],
            },
            a = (t) => {
              let { isIntersecting: e } = t;
              if (
                this.isInView === e ||
                ((this.isInView = e), i && !e && this.hasEnteredView)
              )
                return;
              e && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive("whileInView", e);
              let { onViewportEnter: r, onViewportLeave: n } =
                  this.node.getProps(),
                s = e ? r : n;
              s && s(t);
            };
          var o = this.node.current;
          let l = (function ({ root: t, ...e }) {
            let r = t || document;
            y.has(r) || y.set(r, {});
            let n = y.get(r),
              i = JSON.stringify(e);
            return (
              n[i] || (n[i] = new IntersectionObserver(V, { root: t, ...e })),
              n[i]
            );
          })(s);
          return (
            g.set(o, a),
            l.observe(o),
            () => {
              g.delete(o), l.unobserve(o);
            }
          );
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (r) => t[r] !== e[r];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let x = {
        inView: { Feature: A },
        tap: { Feature: v },
        focus: { Feature: c },
        hover: { Feature: u },
      };
    },
    46949: (t, e, r) => {
      r.d(e, { V: () => o });
      var n = r(54336),
        i = r(48201),
        s = r(14052),
        a = r(25244);
      let o = {
        test: (0, a.$)("hsl", "hue"),
        parse: (0, a.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: r, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          i.KN.transform((0, s.aj)(e)) +
          ", " +
          i.KN.transform((0, s.aj)(r)) +
          ", " +
          (0, s.aj)(n.X4.transform(a)) +
          ")",
      };
    },
    47217: (t, e, r) => {
      r.d(e, { F: () => i });
      let n = (t, e) => (r) => e(t(r)),
        i = (...t) => t.reduce(n);
    },
    47392: (t, e, r) => {
      function n(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      r.d(e, { D3: () => o, nQ: () => a });
      let i = n("dragHorizontal"),
        s = n("dragVertical");
      function a(t) {
        let e = !1;
        if ("y" === t) e = s();
        else if ("x" === t) e = i();
        else {
          let t = i(),
            r = s();
          t && r
            ? (e = () => {
                t(), r();
              })
            : (t && t(), r && r());
        }
        return e;
      }
      function o() {
        let t = a(!0);
        return !t || (t(), !1);
      }
    },
    50719: (t, e, r) => {
      r.d(e, { Y: () => n, t: () => i });
      let n = 2e4;
      function i(t) {
        let e = 0,
          r = t.next(e);
        for (; !r.done && e < n; ) (e += 50), (r = t.next(e));
        return e >= n ? 1 / 0 : e;
      }
    },
    53830: (t, e, r) => {
      r.d(e, { O: () => n, r: () => i });
      let n = { current: null },
        i = { current: !1 };
    },
    54344: (t, e, r) => {
      r.d(e, { G: () => n });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    57705: (t, e, r) => {
      r.d(e, { K: () => i });
      var n = r(76405);
      function i(t, e, r) {
        let i = t.getProps();
        return (0, n.a)(
          i,
          e,
          void 0 !== r ? r : i.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, r) => (e[r] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, r) => (e[r] = t.getVelocity())), e;
          })(t)
        );
      }
    },
    57936: (t, e, r) => {
      r.d(e, { W: () => b });
      var n = r(94594),
        i = r(3440);
      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        let r = e.length;
        if (r !== t.length) return !1;
        for (let n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var a = r(96163),
        o = r(57705),
        l = r(19114),
        u = r(24016);
      function h(t, e, r = {}) {
        let n = (0, o.K)(t, e, r.custom),
          { transition: i = t.getDefaultTransition() || {} } = n || {};
        r.transitionOverride && (i = r.transitionOverride);
        let s = n
            ? () => Promise.all((0, u.$)(t, n, r))
            : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = i;
                  return (function (t, e, r = 0, n = 0, i = 1, s) {
                    let a = [],
                      o = (t.variantChildren.size - 1) * n,
                      l = 1 === i ? (t = 0) => t * n : (t = 0) => o - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(c)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            a.push(
                              h(t, e, { ...s, delay: r + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(t, e, s + n, a, o, r);
                }
              : () => Promise.resolve(),
          { when: l } = i;
        if (!l) return Promise.all([s(), a(r.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
          return t().then(() => e());
        }
      }
      function c(t, e) {
        return t.sortNodePosition(e);
      }
      let p = [...l.U].reverse(),
        d = l.U.length;
      function f(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var m = r(33680);
      class v extends m.X {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: r }) =>
                        (function (t, e, r = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => h(t, e, r)));
                          else if ("string" == typeof e) n = h(t, e, r);
                          else {
                            let i =
                              "function" == typeof e
                                ? (0, o.K)(t, e, r.custom)
                                : e;
                            n = Promise.all((0, u.$)(t, i, r));
                          }
                          return n.then(() => t.notify("AnimationComplete", e));
                        })(t, e, r)
                      )
                    ),
                  r = {
                    animate: f(!0),
                    whileInView: f(),
                    whileHover: f(),
                    whileTap: f(),
                    whileDrag: f(),
                    whileFocus: f(),
                    exit: f(),
                  },
                  l = !0,
                  c = (e, r) => {
                    let n = (0, o.K)(t, r);
                    if (n) {
                      let { transition: t, transitionEnd: r, ...i } = n;
                      e = { ...e, ...i, ...r };
                    }
                    return e;
                  };
                function m(o, u) {
                  let h = t.getProps(),
                    f = t.getVariantContext(!0) || {},
                    m = [],
                    v = new Set(),
                    g = {},
                    y = 1 / 0;
                  for (let e = 0; e < d; e++) {
                    var b, V;
                    let d = p[e],
                      w = r[d],
                      A = void 0 !== h[d] ? h[d] : f[d],
                      x = (0, a.w)(A),
                      P = d === u ? w.isActive : null;
                    !1 === P && (y = e);
                    let S = A === f[d] && A !== h[d] && x;
                    if (
                      (S && l && t.manuallyAnimateOnMount && (S = !1),
                      (w.protectedKeys = { ...g }),
                      (!w.isActive && null === P) ||
                        (!A && !w.prevProp) ||
                        (0, n.N)(A) ||
                        "boolean" == typeof A)
                    )
                      continue;
                    let C =
                        ((b = w.prevProp),
                        "string" == typeof (V = A)
                          ? V !== b
                          : !!Array.isArray(V) && !s(V, b)),
                      M =
                        C || (d === u && w.isActive && !S && x) || (e > y && x),
                      k = Array.isArray(A) ? A : [A],
                      F = k.reduce(c, {});
                    !1 === P && (F = {});
                    let { prevResolvedValues: T = {} } = w,
                      E = { ...T, ...F },
                      O = (t) => {
                        (M = !0), v.delete(t), (w.needsAnimating[t] = !0);
                      };
                    for (let t in E) {
                      let e = F[t],
                        r = T[t];
                      g.hasOwnProperty(t) ||
                        (e !== r
                          ? (0, i.p)(e) && (0, i.p)(r)
                            ? !s(e, r) || C
                              ? O(t)
                              : (w.protectedKeys[t] = !0)
                            : void 0 !== e
                            ? O(t)
                            : v.add(t)
                          : void 0 !== e && v.has(t)
                          ? O(t)
                          : (w.protectedKeys[t] = !0));
                    }
                    (w.prevProp = A),
                      (w.prevResolvedValues = F),
                      w.isActive && (g = { ...g, ...F }),
                      l && t.blockInitialAnimation && (M = !1),
                      M &&
                        !S &&
                        m.push(
                          ...k.map((t) => ({
                            animation: t,
                            options: { type: d, ...o },
                          }))
                        );
                  }
                  if (v.size) {
                    let e = {};
                    v.forEach((r) => {
                      let n = t.getBaseTarget(r);
                      void 0 !== n && (e[r] = n);
                    }),
                      m.push({ animation: e });
                  }
                  let w = !!m.length;
                  return (
                    l &&
                      !1 === h.initial &&
                      !t.manuallyAnimateOnMount &&
                      (w = !1),
                    (l = !1),
                    w ? e(m) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: m,
                  setActive: function (e, n, i) {
                    var s;
                    if (r[e].isActive === n) return Promise.resolve();
                    null == (s = t.variantChildren) ||
                      s.forEach((t) => {
                        var r;
                        return null == (r = t.animationState)
                          ? void 0
                          : r.setActive(e, n);
                      }),
                      (r[e].isActive = n);
                    let a = m(i, e);
                    for (let t in r) r[t].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (r) {
                    e = r(t);
                  },
                  getState: () => r,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(),
            (0, n.N)(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let g = 0;
      class y extends m.X {
        constructor() {
          super(...arguments), (this.id = g++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: t,
              onExitComplete: e,
              custom: r,
            } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let i = this.node.animationState.setActive("exit", !t, {
            custom: null != r ? r : this.node.getProps().custom,
          });
          e && !t && i.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let b = { animation: { Feature: v }, exit: { Feature: y } };
    },
    59925: (t, e, r) => {
      r.d(e, {
        OU: () => u,
        Ql: () => c,
        Ww: () => m,
        hq: () => s,
        o4: () => l,
      });
      var n = r(11655),
        i = r(67152);
      function s(t, e, r) {
        return r + e * (t - r);
      }
      function a(t, e, r, n, i) {
        return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e;
      }
      function o(t, e = 0, r = 1, n, i) {
        (t.min = a(t.min, e, r, n, i)), (t.max = a(t.max, e, r, n, i));
      }
      function l(t, { x: e, y: r }) {
        o(t.x, e.translate, e.scale, e.originPoint),
          o(t.y, r.translate, r.scale, r.originPoint);
      }
      function u(t, e, r, n = !1) {
        let s,
          a,
          o = r.length;
        if (o) {
          e.x = e.y = 1;
          for (let u = 0; u < o; u++) {
            a = (s = r[u]).projectionDelta;
            let o = s.instance;
            (!o || !o.style || "contents" !== o.style.display) &&
              (n &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                m(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              a && ((e.x *= a.x.scale), (e.y *= a.y.scale), l(t, a)),
              n && (0, i.HD)(s.latestValues) && m(t, s.latestValues));
          }
          (e.x = h(e.x)), (e.y = h(e.y));
        }
      }
      function h(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function c(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function p(t, e, [r, i, s]) {
        let a = void 0 !== e[s] ? e[s] : 0.5,
          l = (0, n.j)(t.min, t.max, a);
        o(t, e[r], e[i], l, e.scale);
      }
      let d = ["x", "scaleX", "originX"],
        f = ["y", "scaleY", "originY"];
      function m(t, e) {
        p(t.x, e, d), p(t.y, e, f);
      }
    },
    64569: (t, e, r) => {
      r.d(e, { w: () => n });
      let n = (t) => (e) => e.test(t);
    },
    64844: (t, e, r) => {
      r.d(e, { v: () => i });
      var n = r(87946);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.Kq)(this.subscriptions, t),
            () => (0, n.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, r) {
          let n = this.subscriptions.length;
          if (n)
            if (1 === n) this.subscriptions[0](t, e, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(t, e, r);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    66566: (t, e, r) => {
      r.d(e, { V: () => p, f: () => v });
      var n = r(5906),
        i = r(72841),
        s = r(10951),
        a = r(54336),
        o = r(14052);
      let l = { regex: n.z2, countKey: "Vars", token: "${v}", parse: i.l },
        u = {
          regex: o.ne,
          countKey: "Colors",
          token: "${c}",
          parse: s.y.parse,
        },
        h = {
          regex: o.SY,
          countKey: "Numbers",
          token: "${n}",
          parse: a.ai.parse,
        };
      function c(t, { regex: e, countKey: r, token: n, parse: i }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + r] = s.length),
          (t.tokenised = t.tokenised.replace(e, n)),
          t.values.push(...s.map(i)));
      }
      function p(t) {
        let e = t.toString(),
          r = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return r.value.includes("var(--") && c(r, l), c(r, u), c(r, h), r;
      }
      function d(t) {
        return p(t).values;
      }
      function f(t) {
        let { values: e, numColors: r, numVars: n, tokenised: i } = p(t),
          a = e.length;
        return (t) => {
          let e = i;
          for (let i = 0; i < a; i++)
            e =
              i < n
                ? e.replace(l.token, t[i])
                : i < n + r
                ? e.replace(u.token, s.y.transform(t[i]))
                : e.replace(h.token, (0, o.aj)(t[i]));
          return e;
        };
      }
      let m = (t) => ("number" == typeof t ? 0 : t),
        v = {
          test: function (t) {
            var e, r;
            return (
              isNaN(t) &&
              (0, o.Kg)(t) &&
              ((null == (e = t.match(o.SY)) ? void 0 : e.length) || 0) +
                ((null == (r = t.match(o.ne)) ? void 0 : r.length) || 0) >
                0
            );
          },
          parse: d,
          createTransformer: f,
          getAnimatableNone: function (t) {
            let e = d(t);
            return f(t)(e.map(m));
          },
        };
    },
    67152: (t, e, r) => {
      function n(t) {
        return void 0 === t || 1 === t;
      }
      function i({ scale: t, scaleX: e, scaleY: r }) {
        return !n(t) || !n(e) || !n(r);
      }
      function s(t) {
        return i(t) || a(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function a(t) {
        var e, r;
        return ((e = t.x) && "0%" !== e) || ((r = t.y) && "0%" !== r);
      }
      r.d(e, { HD: () => s, vF: () => a, vk: () => i });
    },
    68408: (t, e, r) => {
      r.d(e, { k: () => n });
      function n(t, e, r, i = { passive: !0 }) {
        return t.addEventListener(e, r, i), () => t.removeEventListener(e, r);
      }
    },
    68781: (t, e, r) => {
      r.d(e, { X: () => i, f: () => n });
      let n = (t) => 1e3 * t,
        i = (t) => t / 1e3;
    },
    71806: (t, e, r) => {
      r.d(e, { Y: () => i });
      var n = r(78081);
      function i(t, e, r) {
        let i = Math.max(e - 5, 0);
        return (0, n.f)(r - t(i), e - i);
      }
    },
    78081: (t, e, r) => {
      r.d(e, { f: () => n });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    78912: (t, e, r) => {
      r.d(e, { ge: () => a, xU: () => i });
      let n = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i = () => ({ x: n(), y: n() }),
        s = () => ({ min: 0, max: 0 }),
        a = () => ({ x: s(), y: s() });
    },
    82700: (t, e, r) => {
      r.d(e, { b: () => U });
      var n = r(2324),
        i = r(84484),
        s = r(5906);
      let a = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function o(t, e, r = 1) {
        (0, i.V)(
          r <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, l] = (function (t) {
          let e = a.exec(t);
          if (!e) return [,];
          let [, r, n] = e;
          return [r, n];
        })(t);
        if (!n) return;
        let u = window.getComputedStyle(e).getPropertyValue(n);
        return u ? u.trim() : (0, s.pG)(l) ? o(l, e, r + 1) : l;
      }
      var l = r(3440),
        u = r(84576),
        h = r(8637),
        c = r(46898),
        p = r(54336),
        d = r(48201);
      let f = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        m = (t) => f.has(t),
        v = (t) => t === p.ai || t === d.px,
        g = (t, e) => parseFloat(t.split(", ")[e]),
        y =
          (t, e) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/);
            if (i) return g(i[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/);
              return e ? g(e[1], t) : 0;
            }
          },
        b = new Set(["x", "y", "z"]),
        V = u.U.filter((t) => !b.has(t)),
        w = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: y(4, 13),
          y: y(5, 14),
        };
      var A = r(61736),
        x = r(78912),
        P = r(29097),
        S = r(14769),
        C = r(53830),
        M = r(64844),
        k = r(23109),
        F = r(44887),
        T = r(56516),
        E = r(67527),
        O = r(96163),
        I = r(76405),
        N = r(34004),
        j = r(19114),
        $ = r(84709);
      let D = Object.keys(N.B),
        B = D.length,
        L = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        q = j._.length;
      class G {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: r,
            reducedMotionConfig: n,
            visualState: i,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => A.Gt.render(this.render, !1, !0));
          let { latestValues: a, renderState: o } = i;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = o),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.isControllingVariants = (0, E.e)(e)),
            (this.isVariantNode = (0, E.O)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== a[t] &&
              (0, T.S)(e) &&
              (e.set(a[t], !1), (0, F.k)(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            $.C.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            C.r.current || (0, S.U)(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || C.O.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in ($.C.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, A.WG)(this.notifyUpdate),
          (0, A.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let r = u.f.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && A.Gt.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), i();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, r, n, i) {
          let s, a;
          for (let t = 0; t < B; t++) {
            let r = D[t],
              {
                isEnabled: n,
                Feature: i,
                ProjectionNode: o,
                MeasureLayout: l,
              } = N.B[r];
            o && (s = o),
              n(e) &&
                (!this.features[r] && i && (this.features[r] = new i(this)),
                l && (a = l));
          }
          if (!this.projection && s) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: r,
              drag: n,
              dragConstraints: a,
              layoutScroll: o,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: r,
              alwaysMeasureLayout: !!n || (a && (0, P.X)(a)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: i,
              layoutScroll: o,
              layoutRoot: l,
            });
          }
          return a;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted
              ? e.update(this.props, this.prevProps)
              : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, x.ge)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < L.length; e++) {
            let r = L[e];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = t["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (t, e, r) {
            let { willChange: n } = e;
            for (let i in e) {
              let s = e[i],
                a = r[i];
              if ((0, T.S)(s)) t.addValue(i, s), (0, F.k)(n) && n.add(i);
              else if ((0, T.S)(a))
                t.addValue(i, (0, k.O)(s, { owner: t })),
                  (0, F.k)(n) && n.remove(i);
              else if (a !== s)
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, (0, k.O)(void 0 !== e ? e : s, { owner: t }));
                }
            }
            for (let n in r) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < q; t++) {
            let r = j._[t],
              n = this.props[r];
            ((0, O.w)(n) || !1 === n) && (e[r] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let r = this.values.get(t);
          return (
            void 0 === r &&
              void 0 !== e &&
              ((r = (0, k.O)(e, { owner: this })), this.addValue(t, r)),
            r
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: r } = this.props,
            n =
              "string" == typeof r || "object" == typeof r
                ? null == (e = (0, I.a)(this.props, r))
                  ? void 0
                  : e[t]
                : void 0;
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || (0, T.S)(i)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new M.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class U extends G {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: r }) {
          delete e[t], delete r[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...r },
          { transformValues: a },
          u
        ) {
          let p = (0, n.$z)(r, t || {}, this);
          if ((a && (e && (e = a(e)), r && (r = a(r)), p && (p = a(p))), u)) {
            (0, n.TM)(this, r, p);
            let t = ((t, e, r, n) => {
              var a, u, p, f;
              let g = (function (t, { ...e }, r) {
                let n = t.current;
                if (!(n instanceof Element))
                  return { target: e, transitionEnd: r };
                for (let i in (r && (r = { ...r }),
                t.values.forEach((t) => {
                  let e = t.get();
                  if (!(0, s.pG)(e)) return;
                  let r = o(e, n);
                  r && t.set(r);
                }),
                e)) {
                  let t = e[i];
                  if (!(0, s.pG)(t)) continue;
                  let a = o(t, n);
                  a &&
                    ((e[i] = a), r || (r = {}), void 0 === r[i] && (r[i] = t));
                }
                return { target: e, transitionEnd: r };
              })(t, e, n);
              return (
                (e = g.target),
                (a = t),
                (u = e),
                (p = r),
                (f = n = g.transitionEnd),
                Object.keys(u).some(m)
                  ? ((t, e, r = {}, n = {}) => {
                      (e = { ...e }), (n = { ...n });
                      let s = Object.keys(e).filter(m),
                        a = [],
                        o = !1,
                        u = [];
                      if (
                        (s.forEach((s) => {
                          let c,
                            p = t.getValue(s);
                          if (!t.hasValue(s)) return;
                          let f = r[s],
                            m = (0, h.n)(f),
                            g = e[s];
                          if ((0, l.p)(g)) {
                            let t = g.length,
                              e = +(null === g[0]);
                            (f = g[e]), (m = (0, h.n)(f));
                            for (let r = e; r < t && null !== g[r]; r++)
                              c
                                ? (0, i.V)(
                                    (0, h.n)(g[r]) === c,
                                    "All keyframes must be of the same type"
                                  )
                                : ((c = (0, h.n)(g[r])),
                                  (0, i.V)(
                                    c === m || (v(m) && v(c)),
                                    "Keyframes must be of the same dimension as the current value"
                                  ));
                          } else c = (0, h.n)(g);
                          if (m !== c)
                            if (v(m) && v(c)) {
                              let t = p.get();
                              "string" == typeof t && p.set(parseFloat(t)),
                                "string" == typeof g
                                  ? (e[s] = parseFloat(g))
                                  : Array.isArray(g) &&
                                    c === d.px &&
                                    (e[s] = g.map(parseFloat));
                            } else
                              (null == m ? void 0 : m.transform) &&
                              (null == c ? void 0 : c.transform) &&
                              (0 === f || 0 === g)
                                ? 0 === f
                                  ? p.set(c.transform(f))
                                  : (e[s] = m.transform(g))
                                : (o ||
                                    ((a = (function (t) {
                                      let e = [];
                                      return (
                                        V.forEach((r) => {
                                          let n = t.getValue(r);
                                          void 0 !== n &&
                                            (e.push([r, n.get()]),
                                            n.set(+!!r.startsWith("scale")));
                                        }),
                                        e.length && t.render(),
                                        e
                                      );
                                    })(t)),
                                    (o = !0)),
                                  u.push(s),
                                  (n[s] = void 0 !== n[s] ? n[s] : e[s]),
                                  p.jump(g));
                        }),
                        !u.length)
                      )
                        return { target: e, transitionEnd: n };
                      {
                        let r =
                            u.indexOf("height") >= 0
                              ? window.pageYOffset
                              : null,
                          i = ((t, e, r) => {
                            let n = e.measureViewportBox(),
                              i = getComputedStyle(e.current),
                              { display: s } = i,
                              a = {};
                            "none" === s &&
                              e.setStaticValue("display", t.display || "block"),
                              r.forEach((t) => {
                                a[t] = w[t](n, i);
                              }),
                              e.render();
                            let o = e.measureViewportBox();
                            return (
                              r.forEach((r) => {
                                let n = e.getValue(r);
                                n && n.jump(a[r]), (t[r] = w[r](o, i));
                              }),
                              t
                            );
                          })(e, t, u);
                        return (
                          a.length &&
                            a.forEach(([e, r]) => {
                              t.getValue(e).set(r);
                            }),
                          t.render(),
                          c.B && null !== r && window.scrollTo({ top: r }),
                          { target: i, transitionEnd: n }
                        );
                      }
                    })(a, u, p, f)
                  : { target: u, transitionEnd: f }
              );
            })(this, r, p, e);
            (e = t.transitionEnd), (r = t.target);
          }
          return { transition: t, transitionEnd: e, ...r };
        }
      }
    },
    84709: (t, e, r) => {
      r.d(e, { C: () => n });
      let n = new WeakMap();
    },
    87761: (t, e, r) => {
      r.d(e, { J: () => a });
      var n = r(40587),
        i = r(39603),
        s = r(88428);
      let a = (t, e) =>
        (0, s.Q)(t)
          ? new i.l(e, { enableHardwareAcceleration: !1 })
          : new n.M(e, { enableHardwareAcceleration: !0 });
    },
    87946: (t, e, r) => {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i(t, e) {
        let r = t.indexOf(e);
        r > -1 && t.splice(r, 1);
      }
      r.d(e, { Ai: () => i, Kq: () => n });
    },
    90879: (t, e, r) => {
      r.d(e, { A: () => s });
      var n = r(72841);
      let i = (t, e, r) =>
        (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function s(t, e, r, s) {
        return t === e && r === s
          ? n.l
          : (n) =>
              0 === n || 1 === n
                ? n
                : i(
                    (function (t, e, r, n, s) {
                      let a,
                        o,
                        l = 0;
                      do
                        (a = i((o = e + (r - e) / 2), n, s) - t) > 0
                          ? (r = o)
                          : (e = o);
                      while (Math.abs(a) > 1e-7 && ++l < 12);
                      return o;
                    })(n, 0, 1, t, r),
                    e,
                    s
                  );
      }
    },
    94412: (t, e, r) => {
      r.d(e, { u: () => i });
      var n = r(4977);
      let i = {
        test: (0, r(25244).$)("#"),
        parse: function (t) {
          let e = "",
            r = "",
            n = "",
            i = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (r = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (i = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (r = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (i = t.substring(4, 5)),
                (e += e),
                (r += r),
                (n += n),
                (i += i)),
            {
              red: parseInt(e, 16),
              green: parseInt(r, 16),
              blue: parseInt(n, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: n.B.transform,
      };
    },
    95075: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = r(3449);
      function i(t) {
        let e = [0];
        return (0, n.f)(e, t.length - 1), e;
      }
    },
    97617: (t, e, r) => {
      r.d(e, { V: () => n });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    99541: (t, e, r) => {
      r.d(e, { h: () => n });
      let n = (t) => Array.isArray(t) && "number" != typeof t[0];
    },
  },
]);
//# sourceMappingURL=4247-5dc2644d7b98b4c2.js.map
