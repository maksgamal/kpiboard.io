(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [77358],
  {
    15007: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { onRouterTransitionStart: () => v });
      var o,
        r,
        s,
        i,
        l = t(68060),
        a = t(66604),
        d = t(20270),
        u = t(40459);
      function v(e, n) {
        a.Nc(e, n);
      }
      l.Ts({
        dsn: "https://7fa2ea46dede9404597bde582525baca@o574544.ingest.us.sentry.io/4509594045513728",
        sampleRate:
          parseFloat(null != (s = u.env.SENTRY_SAMPLE_RATE) ? s : "1.0") || 1,
        tracesSampleRate:
          parseFloat(
            null != (i = u.env.SENTRY_TRACES_SAMPLE_RATE) ? i : "0.0"
          ) || 0,
        debug: !!u.env.SENTRY_DEBUG,
        beforeSend(e) {
          var n, t;
          return (
            null == (t = e.exception) || null == (n = t.values)
              ? void 0
              : n.some((e) => {
                  var n, t;
                  return (
                    (null == (n = e.value)
                      ? void 0
                      : n.includes(
                          "Non-Error promise rejection captured with"
                        )) ||
                    (null == (t = e.value)
                      ? void 0
                      : t.includes("Object Not Found Matching Id"))
                  );
                })
          )
            ? null
            : ((e.tags = { ...e.tags, errorSource: "client" }), e);
        },
      }),
        "function" ==
          typeof (null == (o = window.crypto) ? void 0 : o.getRandomValues) &&
          "function" ==
            typeof (null == (r = window.crypto) ? void 0 : r.randomUUID) &&
          (0, d.H)({ protect: [{ path: "/api/book/event", method: "POST" }] });
    },
    84639: (e, n, t) => {
      Promise.resolve().then(t.t.bind(t, 41012, 23)),
        Promise.resolve().then(t.t.bind(t, 10540, 23)),
        Promise.resolve().then(t.t.bind(t, 5293, 23)),
        Promise.resolve().then(t.t.bind(t, 85341, 23)),
        Promise.resolve().then(t.t.bind(t, 94777, 23)),
        Promise.resolve().then(t.t.bind(t, 90025, 23)),
        Promise.resolve().then(t.t.bind(t, 15104, 23)),
        Promise.resolve().then(t.bind(t, 36505));
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [587, 48598], () => (n(77449), n(84639))), (_N_E = e.O());
  },
]);
//# sourceMappingURL=main-app-d1c1eaab61a60e73.js.map
