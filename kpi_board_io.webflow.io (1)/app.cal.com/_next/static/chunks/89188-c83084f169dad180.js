(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [89188],
  {
    169: () => {},
    3625: (e, t, r) => {
      "use strict";
      function n(e) {
        let { moduleIds: t } = e;
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(54568),
        r(97509),
        r(63042),
        r(81271);
    },
    6035: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(59113).createAsyncLocalStorage)();
    },
    10941: (e, t, r) => {
      "use strict";
      r.d(t, {
        Dn: () => o,
        M9: () => u,
        V: () => f,
        Vv: () => i,
        ex: () => m,
        zj: () => l,
      });
      var n = r(95978),
        s = r(7620);
      let i = {
        method: "throttle",
        timeMs: (function () {
          if ("undefined" == typeof window || !window.GestureEvent) return 50;
          try {
            let e = navigator.userAgent?.match(/version\/([\d\.]+) safari/i);
            return parseFloat(e[1]) >= 17 ? 120 : 320;
          } catch {
            return 320;
          }
        })(),
      };
      function o(e) {
        return null === e || (Array.isArray(e) && 0 === e.length);
      }
      function u(e, t, r) {
        if ("string" == typeof e) r.set(t, e);
        else {
          for (let n of (r.delete(t), e)) r.append(t, n);
          r.has(t) || r.set(t, "");
        }
        return r;
      }
      function l() {
        let e = new Map();
        return {
          on(t, r) {
            let n = e.get(t) || [];
            return n.push(r), e.set(t, n), () => this.off(t, r);
          },
          off(t, r) {
            let n = e.get(t);
            n &&
              e.set(
                t,
                n.filter((e) => e !== r)
              );
          },
          emit(t, r) {
            e.get(t)?.forEach((e) => e(r));
          },
        };
      }
      function a(e, t, r) {
        let n = setTimeout(function () {
          e(), r.removeEventListener("abort", s);
        }, t);
        function s() {
          clearTimeout(n), r.removeEventListener("abort", s);
        }
        r.addEventListener("abort", s);
      }
      function c() {
        let e = Promise;
        if (Promise.hasOwnProperty("withResolvers"))
          return Promise.withResolvers();
        let t = () => {},
          r = () => {};
        return {
          promise: new e((e, n) => {
            (t = e), (r = n);
          }),
          resolve: t,
          reject: r,
        };
      }
      function d() {
        return new URLSearchParams(location.search);
      }
      var h = class {
        updateMap = new Map();
        options = { history: "replace", scroll: !1, shallow: !0 };
        timeMs = i.timeMs;
        transitions = new Set();
        resolvers = null;
        controller = null;
        lastFlushedAt = 0;
        resetQueueOnNextPush = !1;
        push({ key: e, query: t, options: r }, s = i.timeMs) {
          this.resetQueueOnNextPush &&
            (this.reset(), (this.resetQueueOnNextPush = !1)),
            (0, n.Yz)("[nuqs gtq] Enqueueing %s=%s %O", e, t, r),
            this.updateMap.set(e, t),
            "push" === r.history && (this.options.history = "push"),
            r.scroll && (this.options.scroll = !0),
            !1 === r.shallow && (this.options.shallow = !1),
            r.startTransition && this.transitions.add(r.startTransition),
            (!Number.isFinite(this.timeMs) || s > this.timeMs) &&
              (this.timeMs = s);
        }
        getQueuedQuery(e) {
          return this.updateMap.get(e);
        }
        getPendingPromise({ getSearchParamsSnapshot: e = d }) {
          return this.resolvers?.promise ?? Promise.resolve(e());
        }
        flush(
          { getSearchParamsSnapshot: e = d, rateLimitFactor: t = 1, ...r },
          s
        ) {
          if (
            ((this.controller ??= new AbortController()),
            !Number.isFinite(this.timeMs))
          )
            return (
              (0, n.Yz)("[nuqs gtq] Skipping flush due to throttleMs=Infinity"),
              Promise.resolve(e())
            );
          if (this.resolvers) return this.resolvers.promise;
          this.resolvers = c();
          let i = () => {
              this.lastFlushedAt = performance.now();
              let [t, n] = this.applyPendingUpdates(
                {
                  ...r,
                  autoResetQueueOnUpdate: r.autoResetQueueOnUpdate ?? !0,
                  getSearchParamsSnapshot: e,
                },
                s
              );
              null === n
                ? (this.resolvers.resolve(t), (this.resetQueueOnNextPush = !0))
                : this.resolvers.reject(t),
                (this.resolvers = null);
            },
            o = () => {
              let e = performance.now() - this.lastFlushedAt,
                r = this.timeMs,
                s = t * Math.max(0, r - e);
              (0, n.Yz)(
                "[nuqs gtq] Scheduling flush in %f ms. Throttled at %f ms (x%f)",
                s,
                r,
                t
              ),
                0 === s ? i() : a(i, s, this.controller.signal);
            };
          return a(o, 0, this.controller.signal), this.resolvers.promise;
        }
        abort() {
          return (
            this.controller?.abort(),
            (this.controller = new AbortController()),
            this.resolvers?.resolve(new URLSearchParams()),
            (this.resolvers = null),
            this.reset()
          );
        }
        reset() {
          let e = Array.from(this.updateMap.keys());
          return (
            (0, n.Yz)(
              "[nuqs gtq] Resetting queue %s",
              JSON.stringify(Object.fromEntries(this.updateMap))
            ),
            this.updateMap.clear(),
            this.transitions.clear(),
            (this.options = { history: "replace", scroll: !1, shallow: !0 }),
            (this.timeMs = i.timeMs),
            e
          );
        }
        applyPendingUpdates(e, t) {
          let { updateUrl: r, getSearchParamsSnapshot: s } = e,
            i = s();
          if (
            ((0, n.Yz)(
              "[nuqs gtq] Applying %d pending update(s) on top of %s",
              this.updateMap.size,
              i.toString()
            ),
            0 === this.updateMap.size)
          )
            return [i, null];
          let o = Array.from(this.updateMap.entries()),
            l = { ...this.options },
            a = Array.from(this.transitions);
          for (let [t, r] of (e.autoResetQueueOnUpdate && this.reset(),
          (0, n.Yz)("[nuqs gtq] Flushing queue %O with options %O", o, l),
          o))
            null === r ? i.delete(t) : (i = u(r, t, i));
          t && (i = t(i));
          try {
            return (
              !(function (e, t) {
                let r = t;
                for (let t = e.length - 1; t >= 0; t--) {
                  let n = e[t];
                  if (!n) continue;
                  let s = r;
                  r = () => n(s);
                }
                r();
              })(a, () => {
                r(i, l);
              }),
              [i, null]
            );
          } catch (e) {
            return (
              console.error((0, n.z3)(429), o.map(([e]) => e).join(), e), [i, e]
            );
          }
        }
      };
      let f = new h();
      var p = class {
        callback;
        resolvers = c();
        controller = new AbortController();
        queuedValue = void 0;
        constructor(e) {
          this.callback = e;
        }
        abort() {
          this.controller.abort(), (this.queuedValue = void 0);
        }
        push(e, t) {
          return (
            (this.queuedValue = e),
            this.controller.abort(),
            (this.controller = new AbortController()),
            a(
              () => {
                let t = this.resolvers;
                try {
                  (0, n.Yz)("[nuqs dq] Flushing debounce queue", e);
                  let r = this.callback(e);
                  (0, n.Yz)(
                    "[nuqs dq] Reset debounce queue %O",
                    this.queuedValue
                  ),
                    (this.queuedValue = void 0),
                    (this.resolvers = c()),
                    r.then((e) => t.resolve(e)).catch((e) => t.reject(e));
                } catch (e) {
                  (this.queuedValue = void 0), t.reject(e);
                }
              },
              t,
              this.controller.signal
            ),
            this.resolvers.promise
          );
        }
      };
      let m = new (class {
        throttleQueue;
        queues = new Map();
        queuedQuerySync = l();
        constructor(e = new h()) {
          this.throttleQueue = e;
        }
        useQueuedQueries(e) {
          return (function (e, t, r) {
            let n = (0, s.useCallback)(() => {
                let t = Object.fromEntries(e.map((e) => [e, r(e)]));
                return [JSON.stringify(t), t];
              }, [e.join(","), r]),
              i = (0, s.useRef)(null);
            null === i.current && (i.current = n());
            let o = (0, s.useCallback)(
              (r) => {
                let n = e.map((e) => t(e, r));
                return () => n.forEach((e) => e());
              },
              [e.join(","), t]
            );
            return (0, s.useSyncExternalStore)(
              o,
              () => {
                let [e, t] = n();
                return i.current[0] === e
                  ? i.current[1]
                  : ((i.current = [e, t]), t);
              },
              () => i.current[1]
            );
          })(
            e,
            (e, t) => this.queuedQuerySync.on(e, t),
            (e) => this.getQueuedQuery(e)
          );
        }
        push(e, t, r) {
          if (!Number.isFinite(t))
            return Promise.resolve((r.getSearchParamsSnapshot ?? d)());
          let s = e.key;
          if (!this.queues.has(s)) {
            (0, n.Yz)("[nuqs dqc] Creating debounce queue for `%s`", s);
            let e = new p(
              (e) => (
                this.throttleQueue.push(e),
                this.throttleQueue.flush(r).finally(() => {
                  this.queues.get(e.key)?.queuedValue === void 0 &&
                    ((0, n.Yz)(
                      "[nuqs dqc] Cleaning up empty queue for `%s`",
                      e.key
                    ),
                    this.queues.delete(e.key)),
                    this.queuedQuerySync.emit(e.key);
                })
              )
            );
            this.queues.set(s, e);
          }
          (0, n.Yz)("[nuqs dqc] Enqueueing debounce update %O", e);
          let i = this.queues.get(s).push(e, t);
          return this.queuedQuerySync.emit(s), i;
        }
        abort(e) {
          let t = this.queues.get(e);
          return t
            ? ((0, n.Yz)(
                "[nuqs dqc] Aborting debounce queue %s=%s",
                e,
                t.queuedValue?.query
              ),
              this.queues.delete(e),
              t.abort(),
              this.queuedQuerySync.emit(e),
              (e) => (e.then(t.resolvers.resolve, t.resolvers.reject), e))
            : (e) => e;
        }
        abortAll() {
          for (let [e, t] of this.queues.entries())
            (0, n.Yz)(
              "[nuqs dqc] Aborting debounce queue %s=%s",
              e,
              t.queuedValue?.query
            ),
              t.abort(),
              t.resolvers.resolve(new URLSearchParams()),
              this.queuedQuerySync.emit(e);
          this.queues.clear();
        }
        getQueuedQuery(e) {
          let t = this.queues.get(e)?.queuedValue?.query;
          return void 0 !== t ? t : this.throttleQueue.getQueuedQuery(e);
        }
      })(f);
    },
    23792: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => s.a });
      var n = r(45165),
        s = r.n(n);
    },
    25575: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(84931)._(r(97007));
      function s(e, t) {
        var r;
        let s = {};
        "function" == typeof e && (s.loader = e);
        let i = { ...s, ...t };
        return (0, n.default)({
          ...i,
          modules: null == (r = i.loadableGenerated) ? void 0 : r.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    46707: (e, t, r) => {
      "use strict";
      var n = r(40459);
      r(169);
      var s = r(7620),
        i = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(s),
        o = void 0 !== n && n.env && !0,
        u = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        l = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              r = t.name,
              n = void 0 === r ? "stylesheet" : r,
              s = t.optimizeForSpeed,
              i = void 0 === s ? o : s;
            a(u(n), "`name` must be a string"),
              (this._name = n),
              (this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}"),
              a("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = i),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var l =
              "undefined" != typeof window &&
              document.querySelector('meta[property="csp-nonce"]');
            this._nonce = l ? l.getAttribute("content") : null;
          }
          var t,
            r = e.prototype;
          return (
            (r.setOptimizeForSpeed = function (e) {
              a(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                a(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (r.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (r.inject = function () {
              var e = this;
              if (
                (a(!this._injected, "sheet already injected"),
                (this._injected = !0),
                "undefined" != typeof window && this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (o ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, r) {
                  return (
                    "number" == typeof r
                      ? (e._serverSheet.cssRules[r] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    r
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (r.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (r.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (r.insertRule = function (e, t) {
              if (
                (a(u(e), "`insertRule` accepts only strings"),
                "undefined" == typeof window)
              )
                return (
                  "number" != typeof t &&
                    (t = this._serverSheet.cssRules.length),
                  this._serverSheet.insertRule(e, t),
                  this._rulesCount++
                );
              if (this._optimizeForSpeed) {
                var r = this.getSheet();
                "number" != typeof t && (t = r.cssRules.length);
                try {
                  r.insertRule(e, t);
                } catch (t) {
                  return (
                    o ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var n = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, n));
              }
              return this._rulesCount++;
            }),
            (r.replaceRule = function (e, t) {
              if (this._optimizeForSpeed || "undefined" == typeof window) {
                var r =
                  "undefined" != typeof window
                    ? this.getSheet()
                    : this._serverSheet;
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !r.cssRules[e])
                )
                  return e;
                r.deleteRule(e);
                try {
                  r.insertRule(t, e);
                } catch (n) {
                  o ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    r.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var n = this._tags[e];
                a(n, "old rule at index `" + e + "` not found"),
                  (n.textContent = t);
              }
              return e;
            }),
            (r.deleteRule = function (e) {
              if ("undefined" == typeof window)
                return void this._serverSheet.deleteRule(e);
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                a(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (r.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                "undefined" != typeof window
                  ? (this._tags.forEach(function (e) {
                      return e && e.parentNode.removeChild(e);
                    }),
                    (this._tags = []))
                  : (this._serverSheet.cssRules = []);
            }),
            (r.cssRules = function () {
              var e = this;
              return "undefined" == typeof window
                ? this._serverSheet.cssRules
                : this._tags.reduce(function (t, r) {
                    return (
                      r
                        ? (t = t.concat(
                            Array.prototype.map.call(
                              e.getSheetForTag(r).cssRules,
                              function (t) {
                                return t.cssText === e._deletedRulePlaceholder
                                  ? null
                                  : t;
                              }
                            )
                          ))
                        : t.push(null),
                      t
                    );
                  }, []);
            }),
            (r.makeStyleTag = function (e, t, r) {
              t &&
                a(
                  u(t),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var n = document.createElement("style");
              this._nonce && n.setAttribute("nonce", this._nonce),
                (n.type = "text/css"),
                n.setAttribute("data-" + e, ""),
                t && n.appendChild(document.createTextNode(t));
              var s = document.head || document.getElementsByTagName("head")[0];
              return r ? s.insertBefore(n, r) : s.appendChild(n), n;
            }),
            (t = [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            })(e.prototype, t),
            e
          );
        })();
      function a(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var c = function (e) {
          for (var t = 5381, r = e.length; r; )
            t = (33 * t) ^ e.charCodeAt(--r);
          return t >>> 0;
        },
        d = {};
      function h(e, t) {
        if (!t) return "jsx-" + e;
        var r = String(t),
          n = e + r;
        return d[n] || (d[n] = "jsx-" + c(e + "-" + r)), d[n];
      }
      function f(e, t) {
        "undefined" == typeof window &&
          (t = t.replace(/\/style/gi, "\\/style"));
        var r = e + t;
        return (
          d[r] || (d[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[r]
        );
      }
      var p = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              r = t.styleSheet,
              n = void 0 === r ? null : r,
              s = t.optimizeForSpeed,
              i = void 0 !== s && s;
            (this._sheet =
              n || new l({ name: "styled-jsx", optimizeForSpeed: i })),
              this._sheet.inject(),
              n &&
                "boolean" == typeof i &&
                (this._sheet.setOptimizeForSpeed(i),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                "undefined" == typeof window ||
                  this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {}
                  )));
              var r = this.getIdAndRules(e),
                n = r.styleId,
                s = r.rules;
              if (n in this._instancesCounts) {
                this._instancesCounts[n] += 1;
                return;
              }
              var i = s
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[n] = i), (this._instancesCounts[n] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                r = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  r in this._instancesCounts,
                  "styleId: `" + r + "` not found"
                ),
                (this._instancesCounts[r] -= 1),
                this._instancesCounts[r] < 1)
              ) {
                var n = this._fromServer && this._fromServer[r];
                n
                  ? (n.parentNode.removeChild(n), delete this._fromServer[r])
                  : (this._indices[r].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[r]),
                  delete this._instancesCounts[r];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                r = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return r[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, r;
              return (
                (t = this.cssRules()),
                void 0 === (r = e) && (r = {}),
                t.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return i.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: r.nonce ? r.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: n },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                r = e.dynamic,
                n = e.id;
              if (r) {
                var s = h(n, r);
                return {
                  styleId: s,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return f(s, e);
                      })
                    : [f(s, t)],
                };
              }
              return { styleId: h(n), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        m = s.createContext(null);
      m.displayName = "StyleSheetContext";
      var y = i.default.useInsertionEffect || i.default.useLayoutEffect,
        v = "undefined" != typeof window ? new p() : void 0;
      function g(e) {
        var t = v || s.useContext(m);
        return (
          t &&
            ("undefined" == typeof window
              ? t.add(e)
              : y(
                  function () {
                    return (
                      t.add(e),
                      function () {
                        t.remove(e);
                      }
                    );
                  },
                  [e.id, String(e.dynamic)]
                )),
          null
        );
      }
      (g.dynamic = function (e) {
        return e
          .map(function (e) {
            return h(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = g);
    },
    56452: (e, t, r) => {
      "use strict";
      function n(e) {
        let { reason: t, children: r } = e;
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(89800);
    },
    56641: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => a, N: () => c });
      var n = r(7620);
      let s = ["light", "dark"],
        i = "(prefers-color-scheme: dark)",
        o = "undefined" == typeof window,
        u = (0, n.createContext)(void 0),
        l = { setTheme: (e) => {}, themes: [] },
        a = () => {
          var e;
          return null != (e = (0, n.useContext)(u)) ? e : l;
        },
        c = (e) =>
          (0, n.useContext)(u)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(d, e),
        d = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: r = !0,
          enableColorScheme: o = !0,
          storageKey: l = "theme",
          themes: a = ["light", "dark"],
          defaultTheme: c = r ? "system" : "light",
          attribute: d = "data-theme",
          value: y,
          children: v,
          nonce: g,
        }) => {
          let [S, _] = (0, n.useState)(() => f(l, c)),
            [b, w] = (0, n.useState)(() => f(l)),
            q = y ? Object.values(y) : a,
            C = (0, n.useCallback)((e) => {
              let n = e;
              if (!n) return;
              "system" === e && r && (n = m());
              let i = y ? y[n] : n,
                u = t ? p() : null,
                l = document.documentElement;
              if (
                ("class" === d
                  ? (l.classList.remove(...q), i && l.classList.add(i))
                  : i
                  ? l.setAttribute(d, i)
                  : l.removeAttribute(d),
                o)
              ) {
                let e = s.includes(c) ? c : null,
                  t = s.includes(n) ? n : e;
                l.style.colorScheme = t;
              }
              null == u || u();
            }, []),
            j = (0, n.useCallback)(
              (e) => {
                _(e);
                try {
                  localStorage.setItem(l, e);
                } catch (e) {}
              },
              [e]
            ),
            O = (0, n.useCallback)(
              (t) => {
                w(m(t)), "system" === S && r && !e && C("system");
              },
              [S, e]
            );
          return (
            (0, n.useEffect)(() => {
              let e = window.matchMedia(i);
              return e.addListener(O), O(e), () => e.removeListener(O);
            }, [O]),
            (0, n.useEffect)(() => {
              let e = (e) => {
                e.key === l && j(e.newValue || c);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [j]),
            (0, n.useEffect)(() => {
              C(null != e ? e : S);
            }, [e, S]),
            n.createElement(
              u.Provider,
              {
                value: {
                  theme: S,
                  setTheme: j,
                  forcedTheme: e,
                  resolvedTheme: "system" === S ? b : S,
                  themes: r ? [...a, "system"] : a,
                  systemTheme: r ? b : void 0,
                },
              },
              n.createElement(h, {
                forcedTheme: e,
                disableTransitionOnChange: t,
                enableSystem: r,
                enableColorScheme: o,
                storageKey: l,
                themes: a,
                defaultTheme: c,
                attribute: d,
                value: y,
                children: v,
                attrs: q,
                nonce: g,
              }),
              v
            )
          );
        },
        h = (0, n.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: r,
            enableSystem: o,
            enableColorScheme: u,
            defaultTheme: l,
            value: a,
            attrs: c,
            nonce: d,
          }) => {
            let h = "system" === l,
              f =
                "class" === r
                  ? `var d=document.documentElement,c=d.classList;c.remove(${c
                      .map((e) => `'${e}'`)
                      .join(",")});`
                  : `var d=document.documentElement,n='${r}',s='setAttribute';`,
              p = u
                ? s.includes(l) && l
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              m = (e, t = !1, n = !0) => {
                let i = a ? a[e] : e,
                  o = t ? e + "|| ''" : `'${i}'`,
                  l = "";
                return (
                  u &&
                    n &&
                    !t &&
                    s.includes(e) &&
                    (l += `d.style.colorScheme = '${e}';`),
                  "class" === r
                    ? (l += t || i ? `c.add(${o})` : "null")
                    : i && (l += `d[s](n,${o})`),
                  l
                );
              },
              y = e
                ? `!function(){${f}${m(e)}}()`
                : o
                ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${h})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m(
                    "dark"
                  )}}else{${m("light")}}}else if(e){${
                    a ? `var x=${JSON.stringify(a)};` : ""
                  }${m(a ? "x[e]" : "e", !0)}}${
                    h ? "" : "else{" + m(l, !1, !1) + "}"
                  }${p}}catch(e){}}()`
                : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${
                    a ? `var x=${JSON.stringify(a)};` : ""
                  }${m(a ? "x[e]" : "e", !0)}}else{${m(
                    l,
                    !1,
                    !1
                  )};}${p}}catch(t){}}();`;
            return n.createElement("script", {
              nonce: d,
              dangerouslySetInnerHTML: { __html: y },
            });
          },
          () => !0
        ),
        f = (e, t) => {
          let r;
          if (!o) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        p = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        m = (e) => (
          e || (e = window.matchMedia(i)), e.matches ? "dark" : "light"
        );
    },
    58793: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => i });
      let n = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        s = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .flat(1 / 0)
            .filter(Boolean)
            .join(" ");
        },
        i = (e, t) => (r) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return s(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: o, defaultVariants: u } = t,
            l = Object.keys(o).map((e) => {
              let t = null == r ? void 0 : r[e],
                s = null == u ? void 0 : u[e];
              if (null === t) return null;
              let i = n(t) || n(s);
              return o[e][i];
            }),
            a =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return s(
            e,
            l,
            null == t || null == (i = t.compoundVariants)
              ? void 0
              : i.reduce((e, t) => {
                  let { class: r, className: n, ...s } = t;
                  return Object.entries(s).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...u, ...a }[t])
                      : { ...u, ...a }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    59113: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          bindSnapshot: function () {
            return o;
          },
          createAsyncLocalStorage: function () {
            return i;
          },
          createSnapshot: function () {
            return u;
          },
        });
      let r = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class n {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
        static bind(e) {
          return e;
        }
      }
      let s = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function i() {
        return s ? new s() : new n();
      }
      function o(e) {
        return s ? s.bind(e) : n.bind(e);
      }
      function u() {
        return s
          ? s.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    63042: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.workAsyncStorageInstance;
          },
        });
      let n = r(6035);
    },
    80375: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => f });
      var n = r(95978),
        s = r(10941);
      function i() {
        (0, n.Yz)("[nuqs] Aborting queues"),
          s.ex.abortAll(),
          s.V.abort().forEach((e) => s.ex.queuedQuerySync.emit(e));
      }
      var o = r(7620),
        u = r(27541);
      let l = 0;
      function a() {
        (l = 0), i();
      }
      function c() {
        --l <= 0 && ((l = 0), queueMicrotask(i));
      }
      function d() {
        return (
          (0, o.useEffect)(
            () => (
              !(function () {
                var e;
                if (
                  ((e = "next/app"),
                  "undefined" == typeof history ||
                    (history.nuqs?.version &&
                    "0.0.0-inject-version-here" !== history.nuqs.version
                      ? (console.error(
                          (0, n.z3)(409),
                          history.nuqs.version,
                          "0.0.0-inject-version-here",
                          e
                        ),
                        !0)
                      : !!history.nuqs?.adapters?.includes(e)))
                )
                  return;
                let t = history.replaceState,
                  r = history.pushState;
                (history.replaceState = function (e, r, n) {
                  return c(), t.call(history, e, r, n);
                }),
                  (history.pushState = function (e, t, n) {
                    return c(), r.call(history, e, t, n);
                  }),
                  (history.nuqs = history.nuqs ?? {
                    version: "0.0.0-inject-version-here",
                    adapters: [],
                  }),
                  history.nuqs.adapters.push("next/app");
              })(),
              window.addEventListener("popstate", a),
              () => window.removeEventListener("popstate", a)
            ),
            []
          ),
          null
        );
      }
      let h = (0, n.Hx)(function () {
        let e = (0, u.useRouter)(),
          t = (0, u.useSearchParams)(),
          [r, s] = (0, o.useOptimistic)(t);
        return {
          searchParams: r,
          updateUrl: (0, o.useCallback)((t, r) => {
            (0, o.startTransition)(() => {
              r.shallow || s(t);
              let i = (function (e) {
                let { origin: t, pathname: r, hash: s } = location;
                return t + r + (0, n.OB)(e) + s;
              })(t);
              (0, n.Yz)("[nuqs next/app] Updating url: %s", i);
              let o =
                "push" === r.history ? history.pushState : history.replaceState;
              (l = 3),
                o.call(history, null, "", i),
                r.scroll && window.scrollTo(0, 0),
                r.shallow || e.replace(i, { scroll: !1 });
            });
          }, []),
          rateLimitFactor: 3,
          autoResetQueueOnUpdate: !1,
        };
      });
      function f(e) {
        let { children: t, ...r } = e;
        return (0, o.createElement)(h, {
          ...r,
          children: [
            (0, o.createElement)(o.Suspense, {
              key: "nuqs-adapter-suspense-navspy",
              children: (0, o.createElement)(d),
            }),
            t,
          ],
        });
      }
    },
    91640: (e, t, r) => {
      "use strict";
      e.exports = r(46707).style;
    },
    95978: (e, t, r) => {
      "use strict";
      r.d(t, {
        Hx: () => d,
        OB: () => a,
        R8: () => o,
        TU: () => p,
        V7: () => h,
        Yz: () => i,
        uZ: () => f,
        z3: () => l,
      });
      var n = r(7620);
      let s = (function () {
        try {
          let e = "nuqs-localStorage-test";
          if ("undefined" == typeof localStorage) return !1;
          localStorage.setItem(e, e);
          let t = localStorage.getItem(e) === e;
          return (
            localStorage.removeItem(e),
            t && (localStorage.getItem("debug") || "").includes("nuqs")
          );
        } catch {
          return !1;
        }
      })();
      function i(e, ...t) {
        if (!s) return;
        let r = (function (e, ...t) {
          return e.replace(/%[sfdO]/g, (e) => {
            let r = t.shift();
            return "%O" === e && r
              ? JSON.stringify(r).replace(/"([^"]+)":/g, "$1:")
              : String(r);
          });
        })(e, ...t);
        performance.mark(r);
        try {
          console.log(e, ...t);
        } catch {
          console.log(r);
        }
      }
      function o(e, ...t) {
        s && console.warn(e, ...t);
      }
      let u = {
        303: "Multiple adapter contexts detected. This might happen in monorepos.",
        404: "nuqs requires an adapter to work with your framework.",
        409: "Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` (via the %s adapter) was about to load on top.",
        414: "Max safe URL length exceeded. Some browsers may not be able to accept this URL. Consider limiting the amount of state stored in the URL.",
        422: "Invalid options combination: `limitUrlUpdates: debounce` should be used in SSR scenarios, with `shallow: false`",
        429: "URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O",
        500: "Empty search params cache. Search params can't be accessed in Layouts.",
        501: "Search params cache already populated. Have you called `parse` twice?",
      };
      function l(e) {
        return `[nuqs] ${u[e]}
  See https://nuqs.dev/NUQS-${e}`;
      }
      function a(e) {
        if (0 === e.size) return "";
        let t = [];
        for (let [r, n] of e.entries()) {
          let e = r
            .replace(/#/g, "%23")
            .replace(/&/g, "%26")
            .replace(/\+/g, "%2B")
            .replace(/=/g, "%3D")
            .replace(/\?/g, "%3F");
          t.push(
            `${e}=${n
              .replace(/%/g, "%25")
              .replace(/\+/g, "%2B")
              .replace(/ /g, "+")
              .replace(/#/g, "%23")
              .replace(/&/g, "%26")
              .replace(/"/g, "%22")
              .replace(/'/g, "%27")
              .replace(/`/g, "%60")
              .replace(/</g, "%3C")
              .replace(/>/g, "%3E")
              .replace(/[\x00-\x1F]/g, (e) => encodeURIComponent(e))}`
          );
        }
        return "?" + t.join("&");
      }
      let c = (0, n.createContext)({
        useAdapter() {
          throw Error(l(404));
        },
      });
      function d(e) {
        return ({
          children: t,
          defaultOptions: r,
          processUrlSearchParams: s,
          ...i
        }) =>
          (0, n.createElement)(
            c.Provider,
            {
              ...i,
              value: {
                useAdapter: e,
                defaultOptions: r,
                processUrlSearchParams: s,
              },
            },
            t
          );
      }
      function h(e) {
        let t = (0, n.useContext)(c);
        if (!("useAdapter" in t)) throw Error(l(404));
        return t.useAdapter(e);
      }
      (c.displayName = "NuqsAdapterContext"),
        s &&
          "undefined" != typeof window &&
          (window.__NuqsAdapterContext &&
            window.__NuqsAdapterContext !== c &&
            console.error(l(303)),
          (window.__NuqsAdapterContext = c));
      let f = () => (0, n.useContext)(c).defaultOptions,
        p = () => (0, n.useContext)(c).processUrlSearchParams;
    },
    96442: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => s.a });
      var n = r(25575),
        s = r.n(n);
    },
    97007: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(54568),
        s = r(7620),
        i = r(56452);
      function o(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      r(3625);
      let u = {
          loader: () => Promise.resolve(o(() => null)),
          loading: null,
          ssr: !0,
        },
        l = function (e) {
          let t = { ...u, ...e },
            r = (0, s.lazy)(() => t.loader().then(o)),
            l = t.loading;
          function a(e) {
            let o = l
                ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              u = !t.ssr || !!t.loading,
              a = u ? s.Suspense : s.Fragment,
              c = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [null, (0, n.jsx)(r, { ...e })],
                  })
                : (0, n.jsx)(i.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(r, { ...e }),
                  });
            return (0, n.jsx)(a, {
              ...(u ? { fallback: o } : {}),
              children: c,
            });
          }
          return (a.displayName = "LoadableComponent"), a;
        };
    },
  },
]);
//# sourceMappingURL=89188-c83084f169dad180.js.map
