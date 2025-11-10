(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [75786],
  {
    6073: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Nextcloud Talk","slug":"nextcloudtalk","type":"nextcloudtalk_video","logo":"icon.svg","url":"https://nextcloud.com/talk","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com","email":"help@cal.com","appData":{"location":{"type":"integrations:{SLUG}_conferencing","label":"{TITLE}","linkType":"dynamic"}},"description":"Nextcloud Talk is a fully self hosted, on-premises audio/video and chat communication service. It features web and mobile apps and is designed to offer the highest degree of security while being easy to use.","isTemplate":false,"__createdUsingCli":true}'
      );
    },
    6305: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"WhatsApp","slug":"whatsapp","type":"whatsapp_video","logo":"icon.svg","url":"https://cal.com/","variant":"messaging","categories":["messaging"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"Schedule a chat with your guests or have a WhatsApp Video call.","__createdUsingCli":true,"appData":{"location":{"type":"integrations:whatsapp_video","label":"WhatsApp","linkType":"static","organizerInputPlaceholder":"https://wa.me/send?phone=1234567890","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?wa.me\\\\/[a-zA-Z0-9]*"}},"isAuth":false}'
      );
    },
    8946: () => {},
    10084: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"Umami","slug":"umami","type":"umami_analytics","logo":"icon.svg","url":"https://cal.com/","variant":"analytics","categories":["analytics"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Umami makes it easy to collect, analyze, and understand your web data — while maintaining visitor privacy and data ownership.","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"src":"{SCRIPT_URL}","attrs":{"data-website-id":"{SITE_ID}"}}]}},"isTemplate":false,"__createdUsingCli":true,"__template":"booking-pages-tag"}'
      );
    },
    11051: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Skype","slug":"skype","type":"skype_conferencing","logo":"icon.svg","url":"https://github.com/anikdhabal/","variant":"conferencing","categories":["conferencing"],"publisher":"Anik Dhabal Babu","email":"adhabl2002@gmail.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://join.skype.com/","urlRegExp":"https://join\\\\.skype\\\\.com/[a-zA-Z0-9]*"}},"description":"Skype is for connecting with the people that matter most in your life and work. It\'s built for both one-on-one and group conversations and works wherever you are – via mobile, PC and Alexa. Skype messaging and HD voice and video calling will help you share experiences and get things done with others.","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static"}'
      );
    },
    11434: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Telegram","slug":"telegram","type":"telegram_video","logo":"icon.svg","url":"https://cal.com/","variant":"messaging","categories":["messaging"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"Schedule a chat with your guests or have a Telegram Video call.","__createdUsingCli":true,"appData":{"location":{"type":"integrations:telegram_video","label":"Telegram","linkType":"static","organizerInputPlaceholder":"https://t.me/MyUsername","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?t.me\\\\/[a-zA-Z0-9]*"}}}'
      );
    },
    16127: (e, t, a) => {
      "use strict";
      a.d(t, { y: () => n });
      let i = JSON.parse(
        '{"h_":"Cal Video is the in-house web-based video conferencing platform powered by Daily.co, which is minimalistic and lightweight, but has most of the features you need."}'
      );
      var o = a(40459);
      let n = {
        name: "Cal Video",
        description: i.h_,
        installed: !!o.env.DAILY_API_KEY,
        type: "daily_video",
        variant: "conferencing",
        url: "https://daily.co",
        categories: ["conferencing"],
        logo: "icon.svg",
        publisher: "Cal.com",
        category: "conferencing",
        slug: "daily-video",
        title: "Cal Video",
        isGlobal: !0,
        email: "help@cal.com",
        appData: {
          location: {
            linkType: "dynamic",
            type: "integrations:daily",
            label: "Cal Video",
          },
        },
        key: { apikey: o.env.DAILY_API_KEY },
        dirName: "dailyvideo",
        isOAuth: !1,
      };
    },
    17425: (e, t, a) => {
      "use strict";
      a.d(t, { y: () => i });
      let i = {
        linkType: "dynamic",
        name: "Zoom Video",
        description: JSON.parse(
          '{"h_":"Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions."}'
        ).h_,
        type: "zoom_video",
        categories: ["conferencing"],
        variant: "conferencing",
        logo: "icon.svg",
        publisher: "Cal.com",
        url: "https://zoom.us/",
        category: "conferencing",
        slug: "zoom",
        title: "Zoom Video",
        email: "help@cal.com",
        appData: {
          location: {
            default: !1,
            linkType: "dynamic",
            type: "integrations:zoom",
            label: "Zoom Video",
          },
        },
        dirName: "zoomvideo",
        isOAuth: !0,
      };
    },
    18895: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => o });
      var i = a(7620);
      let o = (e) => {
        (0, i.useEffect)(() => {
          Object.entries(e).forEach((e) => {
            let [t, a] = e;
            if (!a) return;
            if ("root" === t) {
              let e = document.documentElement;
              Object.entries(a).forEach((t) => {
                let [a, i] = t;
                e.style.setProperty("--".concat(a), i);
              });
              return;
            }
            let i = document.querySelectorAll(".".concat(t));
            Object.entries(a).forEach((e) => {
              let [t, a] = e;
              i.forEach((e) => {
                e.style.setProperty("--".concat(t), a);
              });
            });
          });
        }, [e]);
      };
    },
    20937: () => {},
    21984: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"Meta Pixel","slug":"metapixel","type":"metapixel_analytics","logo":"icon.svg","url":"https://github.com/regexyl","variant":"analytics","categories":["analytics"],"publisher":"Regina Liu","email":"info@regexyl.com","description":"Add Meta Pixel to your bookings page to measure, optimize and build audiences for your ad campaigns.","extendsFeature":"EventType","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-app-card","appData":{"tag":{"scripts":[{"content":"!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,\'script\',\'https://connect.facebook.net/en_US/fbevents.js\');fbq(\'init\',\'{TRACKING_ID}\');fbq(\'trackCustom\',\'CalcomView\');"}]}},"isOAuth":false}'
      );
    },
    23538: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => s });
      var i = a(15599),
        o = a.n(i),
        n = a(93066);
      function s(e) {
        if (!e) return "";
        let t = n.md.render(e),
          a = o()(t)
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
        return a.replace(
          /<li>([^<]+|<strong>.*?<\/strong>)<\/li>\s*<li>\s*<ul([^>]*)>([\s\S]*?)<\/ul>\s*<\/li>/g,
          "<li>$1<ul$2>$3</ul></li>"
        );
      }
      console.warn(
        "`markdownToSafeHTML` should not be imported on the client side."
      );
    },
    24141: (e, t, a) => {
      "use strict";
      a.d(t, {
        EA: () => r,
        JG: () => d,
        NH: () => s,
        er: () => c,
        ls: () => p,
        rr: () => l,
      });
      var i = a(54568);
      a(7620);
      var o = a(43328),
        n = a(50441);
      let s = (e) => {
          let { className: t } = e;
          return (0, i.jsx)("div", {
            className: (0, n.A)("bg-emphasis me-3 mt-1 rounded-full", t),
          });
        },
        r = (e) => {
          let {
              as: t,
              className: a = "",
              children: s,
              loading: r = !1,
              waitForTranslation: l = !0,
              loadingClassName: c = "",
              ...p
            } = e,
            { isLocaleReady: d } = (0, o.Y)();
          return (
            (r = (!!l && !d) || r),
            (0, i.jsx)(t, {
              className: (0, n.A)(
                r
                  ? (0, n.A)(
                      "font-size-0 bg-emphasis animate-pulse rounded-md text-transparent",
                      c
                    )
                  : "",
                a
              ),
              ...p,
              children: s,
            })
          );
        },
        l = (e) => {
          let { className: t = "", invisible: a = !1, style: o } = e;
          return (0, i.jsx)("span", {
            style: o,
            className: (0, n.A)(
              "font-size-0 bg-emphasis inline-block animate-pulse rounded-md empty:before:inline-block empty:before:content-['']",
              t,
              a ? "invisible" : ""
            ),
          });
        },
        c = (e) => {
          let { className: t } = e;
          return (0, i.jsx)(p, {
            children: (0, i.jsx)("div", {
              className: (0, n.A)("bg-emphasis rounded-md", t),
            }),
          });
        },
        p = (e) => {
          let { children: t, as: a, className: o } = e;
          return (0, i.jsx)(a || "div", {
            className: (0, n.A)("animate-pulse", o),
            children: t,
          });
        },
        d = (e) => {
          let { className: t } = e;
          return (0, i.jsx)("li", {
            className: (0, n.A)(
              "border-subtle group flex w-full items-center justify-between rounded-sm border px-[10px] py-3",
              t
            ),
            children: (0, i.jsx)("div", {
              className: "flex-grow truncate text-sm",
              children: (0, i.jsxs)("div", {
                className: "flex justify-between",
                children: [
                  (0, i.jsx)(l, { className: "h-4 w-32" }),
                  (0, i.jsx)(l, { className: "h-4 w-4" }),
                ],
              }),
            }),
          });
        };
    },
    24805: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => S });
      var i = a(16734),
        o = a.n(i),
        n = a(33346),
        s = a.n(n),
        r = a(67545),
        l = a.n(r),
        c = a(75943),
        p = a.n(c),
        d = a(88490),
        m = a.n(d),
        u = a(333),
        g = a.n(u),
        h = a(8247),
        y = a.n(h),
        f = a(86912),
        v = a.n(f),
        _ = a(10390),
        b = a.n(_),
        w = a(89497),
        k = a.n(w),
        C = a(72525),
        I = a.n(C);
      o().extend(s()),
        o().extend(function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = arguments.length > 2 ? arguments[2] : void 0,
            i = [1, 2, 3, 4, 5];
          (a.getWorkingWeekdays = function () {
            return e.workingWeekdays || i;
          }),
            (a.setWorkingWeekdays = function (t) {
              e.workingWeekdays = t;
            }),
            (a.getHolidays = function () {
              return e.holidays || [];
            }),
            (a.setHolidays = function (t) {
              e.holidays = t;
            }),
            (a.getHolidayFormat = function () {
              return e.holidayFormat;
            }),
            (a.setHolidayFormat = function (t) {
              e.holidayFormat = t;
            }),
            (a.getAdditionalWorkingDays = function () {
              return e.additionalWorkingDays || [];
            }),
            (a.setAdditionalWorkingDays = function (t) {
              e.additionalWorkingDays = t;
            }),
            (a.getAdditionalWorkingDayFormat = function () {
              return e.additionalWorkingDayFormat;
            }),
            (a.setAdditionalWorkingDayFormat = function (t) {
              e.additionalWorkingDayFormat = t;
            }),
            (t.prototype.isHoliday = function () {
              return (
                !!e.holidays &&
                !!e.holidays.includes(this.format(e.holidayFormat))
              );
            }),
            (t.prototype.isBusinessDay = function () {
              let t = e.workingWeekdays || i;
              return (
                !this.isHoliday() &&
                !!(this.isAdditionalWorkingDay() || t.includes(this.day()))
              );
            }),
            (t.prototype.isAdditionalWorkingDay = function () {
              return (
                !!e.additionalWorkingDays &&
                !!e.additionalWorkingDays.includes(
                  this.format(e.additionalWorkingDayFormat)
                )
              );
            }),
            (t.prototype.businessDaysAdd = function (e) {
              let t = e < 0 ? -1 : 1,
                a = this.clone(),
                i = Math.abs(e);
              for (; i > 0; ) (a = a.add(t, "d")).isBusinessDay() && (i -= 1);
              return a;
            }),
            (t.prototype.businessDaysSubtract = function (e) {
              let t = this.clone();
              return t.businessDaysAdd(-1 * e);
            }),
            (t.prototype.businessDiff = function (e) {
              let t = this.clone(),
                a = e.clone(),
                i = t >= a,
                o = i ? a : t,
                n = i ? t : a,
                s = 0;
              if (o.isSame(n)) return s;
              for (; o < n; )
                o.isBusinessDay() && (s += 1), (o = o.add(1, "d"));
              return i ? s : -s;
            }),
            (t.prototype.nextBusinessDay = function () {
              let e = this.clone(),
                t = 1;
              for (; t < 7 && !(e = e.add(1, "day")).isBusinessDay(); ) t += 1;
              return e;
            }),
            (t.prototype.prevBusinessDay = function () {
              let e = this.clone(),
                t = 1;
              for (; t < 7 && !(e = e.subtract(1, "day")).isBusinessDay(); )
                t += 1;
              return e;
            }),
            (t.prototype.businessDaysInMonth = function () {
              if (!this.isValid()) return [];
              let e = this.clone().startOf("month"),
                t = this.clone().endOf("month"),
                a = [],
                i = !1;
              for (; !i; )
                e.isBusinessDay() && a.push(e.clone()),
                  (e = e.add(1, "day")).isAfter(t) && (i = !0);
              return a;
            }),
            (t.prototype.lastBusinessDayOfMonth = function () {
              let e = this.businessDaysInMonth();
              return e[e.length - 1];
            }),
            (t.prototype.businessWeeksInMonth = function () {
              if (!this.isValid()) return [];
              let e = this.clone().startOf("month"),
                t = this.clone().endOf("month"),
                a = [],
                i = [],
                o = !1;
              for (; !o; )
                e.isBusinessDay() && i.push(e.clone()),
                  (5 === e.day() || e.isSame(t, "day")) &&
                    (a.push(i), (i = [])),
                  (e = e.add(1, "day")).isAfter(t) && (o = !0);
              return a;
            });
        }),
        o().extend(p()),
        o().extend(m()),
        o().extend(g()),
        o().extend(v()),
        o().extend(b()),
        o().extend(k()),
        o().extend(I()),
        o().extend(y()),
        o().extend(l());
      let S = o();
    },
    26559: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ah: () => i.Ah,
        Dr: () => i.Dr,
        I6: () => i.I6,
        Pn: () => i.Pn,
        V4: () => i.V4,
        cm: () => i.cm,
        hA: () => i.hA,
        ii: () => o.i,
        lz: () => i.lz,
      });
      var i = a(62117),
        o = a(93180);
    },
    28369: (e, t, a) => {
      "use strict";
      a.d(t, { y: () => i });
      let i = {
        name: "Huddle01",
        description: JSON.parse(
          '{"h_":"Huddle01 is a new video conferencing software native to Web3 and is comparable to a decentralized version of Zoom. It supports conversations for NFT communities, DAOs, Builders and also has features such as token gating, NFTs as avatars, Web3 Login + ENS and recording over IPFS."}'
        ).h_,
        installed: !0,
        type: "huddle01_video",
        variant: "conferencing",
        categories: ["video", "conferencing"],
        logo: "icon.svg",
        publisher: "huddle01.com",
        url: "https://huddle01.com",
        category: "conferencing",
        slug: "huddle01",
        title: "Huddle01",
        isGlobal: !1,
        email: "support@huddle01.com",
        appData: {
          location: {
            linkType: "dynamic",
            type: "integrations:huddle01_video",
            label: "Huddle01 Video",
          },
        },
        dirName: "huddle01video",
        concurrentMeetings: !0,
        isOAuth: !1,
      };
    },
    29580: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Salesroom","slug":"salesroom","type":"salesroom_conferencing","logo":"icon.svg","url":"https://salesroom.com/","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com, Inc.","email":"support@cal.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://user.sr.chat","urlRegExp":"^https:\\\\/\\\\/.+\\\\.sr\\\\.chat"}},"description":"Unlock real-time AI and take your sales game to the next level","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static"}'
      );
    },
    31026: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o });
      var i = a(7620);
      let o = (e) => {
        let [t, a] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let i = window.matchMedia(e);
            i.matches !== t && a(i.matches);
            let o = () => a(i.matches);
            return (
              window.addEventListener("resize", o),
              () => window.removeEventListener("resize", o)
            );
          }, [t, e]),
          t
        );
      };
    },
    31517: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Google Analytics","slug":"ga4","type":"ga4_analytics","logo":"icon.svg","url":"https://marketingplatform.google.com","variant":"analytics","categories":["analytics"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"src":"https://www.googletagmanager.com/gtag/js?id={TRACKING_ID}","attrs":{}},{"content":"window.dataLayer = window.dataLayer || [];\\n      function gtag(){dataLayer.push(arguments);}\\n      gtag(\'js\', new Date());\\n      gtag(\'config\', \'{TRACKING_ID}\', {\'cookie_flags\': \'SameSite=None;Secure\'});"}]}},"__createdUsingCli":true,"isOAuth":false}'
      );
    },
    33285: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Demodesk","slug":"demodesk","type":"demodesk_conferencing","logo":"icon.svg","url":"https://demodesk.com","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com, Inc.","email":"support@cal.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://demodesk.com/meet/mylink","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?demodesk.com\\\\/[a-zA-Z0-9]*"}},"description":"Run Professional Video Meetings, Coach Sales Teams in Real-Time with AI, And Schedule Meetings on Auto-Pilot. 100% GDPR Compliant, Enterprise Ready.","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static"}'
      );
    },
    34231: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Facetime","title":"Facetime","slug":"facetime","type":"facetime_video","logo":"icon.svg","url":"https://github.com/Mythie","variant":"conferencing","categories":["conferencing"],"publisher":"Lucas Smith","email":"help@cal.com","description":"Facetime makes it super simple for collaborating teams to jump on a video call.","__createdUsingCli":true,"appData":{"location":{"linkType":"static","type":"integrations:facetime_video","label":"Facetime","organizerInputPlaceholder":"https://facetime.apple.com/join... link copied from the FaceTime app","urlRegExp":"^https?:\\\\/\\\\/facetime\\\\.apple\\\\.com\\\\/join.+$"}},"isTemplate":false,"isOAuth":false}'
      );
    },
    34316: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"dialpad","slug":"dialpad","type":"dialpad_conferencing","logo":"icon.svg","url":"https://meetings.dialpad.com/","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com","email":"help@cal.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://meetings.dialpad.com/adb2002","urlRegExp":"^https:\\\\/\\\\/meetings\\\\.dialpad\\\\.com\\\\/[a-zA-Z0-9]+$"}},"description":"A new way to meet, with built-in Ai","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static"}'
      );
    },
    35385: (e, t, a) => {
      "use strict";
      a.d(t, { y: () => i });
      let i = {
        name: "Jitsi Video",
        description: JSON.parse(
          '{"h_":"Jitsi is a free open-source video conferencing software for web and mobile. Make a call, launch on your own servers, integrate into your app, and more."}'
        ).h_,
        installed: !0,
        type: "jitsi_video",
        variant: "conferencing",
        categories: ["conferencing"],
        logo: "icon.svg",
        publisher: "Cal.com",
        url: "https://jitsi.org/",
        slug: "jitsi",
        title: "Jitsi Meet",
        isGlobal: !1,
        email: "help@cal.com",
        appData: {
          location: {
            linkType: "dynamic",
            type: "integrations:jitsi",
            label: "Jitsi Video",
          },
        },
        dirName: "jitsivideo",
        concurrentMeetings: !0,
        isOAuth: !1,
      };
    },
    35716: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Plausible","slug":"plausible","type":"plausible_analytics","logo":"icon.svg","url":"https://cal.com/","variant":"analytics","categories":["analytics"],"publisher":"Cal.com, Inc.","email":"help@cal.com","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"src":"{PLAUSIBLE_URL}","attrs":{"data-domain":"{TRACKING_ID}"}}]}},"description":"Simple, privacy-friendly Google Analytics alternative.","__createdUsingCli":true,"isOAuth":false}'
      );
    },
    36515: (e, t, a) => {
      "use strict";
      function i(e, t) {
        return (
          e ||
          "https://eu.ui-avatars.com/api/?background=fff&color=f9f9f9&bold=true&background=000000&name=".concat(
            encodeURIComponent(t || "")
          )
        );
      }
      function o(e) {
        var t;
        return i(
          e.logoUrl || (null == (t = e.parent) ? void 0 : t.logoUrl),
          e.name
        );
      }
      a.d(t, { h: () => i, o: () => o });
    },
    37018: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Mirotalk","slug":"mirotalk","type":"mirotalk_video","logo":"icon.svg","url":"https://cal.com/","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com, Inc.","email":"support@cal.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://p2p.mirotalk.com/join/80085ShinyPhone","urlRegExp":"^(http|https):\\\\/\\\\/(p2p|sfu)\\\\.mirotalk\\\\.com\\\\/join\\\\/[a-zA-Z0-9._-]+$"}},"description":"Peer to peer real-time video conferences, optimized for small groups. Unlimited time, unlimited rooms each having 5-8 participants.","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static","dirName":"mirotalk","isOAuth":false}'
      );
    },
    37934: (e, t, a) => {
      "use strict";
      a.d(t, { Y: () => r });
      var i = a(54568);
      a(7620);
      var o = a(50441),
        n = a(18511),
        s = a(8949);
      function r(e) {
        let {
          Icon: t,
          customIcon: a,
          avatar: r,
          headline: l,
          description: c,
          buttonText: p,
          buttonOnClick: d,
          buttonRaw: m,
          border: u = !0,
          dashedBorder: g = !0,
          className: h,
          iconClassName: y,
          iconWrapperClassName: f,
          limitWidth: v = !0,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            "data-testid": "empty-screen",
            className: (0, o.A)(
              "flex w-full select-none flex-col items-center justify-center rounded-lg p-7 lg:p-20",
              u && "border-subtle border",
              g && "border-dashed",
              h
            ),
            children: [
              r
                ? (0, i.jsx)("div", {
                    className:
                      "flex h-[72px] w-[72px] items-center justify-center rounded-full",
                    children: r,
                  })
                : null,
              t
                ? (0, i.jsx)("div", {
                    className: (0, o.A)(
                      "bg-emphasis flex h-[72px] w-[72px] items-center justify-center rounded-full ",
                      f
                    ),
                    children: (0, i.jsx)(s.A, {
                      name: t,
                      className: (0, o.A)(
                        "text-default inline-block h-10 w-10 stroke-[1.3px]",
                        y
                      ),
                    }),
                  })
                : null,
              a ? (0, i.jsx)(i.Fragment, { children: a }) : null,
              (0, i.jsxs)("div", {
                className: "flex ".concat(
                  v ? "max-w-[420px]" : "",
                  "  flex-col items-center"
                ),
                children: [
                  (0, i.jsx)("h2", {
                    className: (0, o.A)(
                      "text-semibold font-cal text-emphasis text-center text-xl normal-nums",
                      t && "mt-6",
                      !c && "mb-8"
                    ),
                    children: l,
                  }),
                  c &&
                    (0, i.jsx)("div", {
                      className:
                        "text-default mb-8 mt-3 text-center text-sm font-normal leading-6",
                      children: c,
                    }),
                  d &&
                    p &&
                    (0, i.jsx)(n.$, { onClick: (e) => d(e), children: p }),
                  m,
                ],
              }),
            ],
          }),
        });
      }
    },
    38917: () => {},
    38994: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Sylaps","title":"Sylaps","slug":"sylapsvideo","type":"sylaps_video","logo":"icon.svg","url":"https://sylaps.com","variant":"conferencing","categories":["conferencing"],"publisher":"Sylaps Inc","email":"support@sylaps.com","description":"Free Audio and Video Conferencing, Online Collaboration, Screen Sharing on web browser, mobile and desktop.","__createdUsingCli":true,"appData":{"location":{"linkType":"dynamic","type":"integrations:sylaps_video","label":"Sylaps"}},"isOAuth":false}'
      );
    },
    42717: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => o });
      var i = a(95627);
      let o = (e, t) => {
        let { orgSlug: a, teamSlug: o } = e,
          n = (0, i.g)(a, t);
        return ((o = o || ""), a)
          ? "".concat(n, "/").concat(o)
          : "".concat(n, "/team/").concat(o);
      };
    },
    44422: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"Matomo","slug":"matomo","type":"matomo_analytics","logo":"icon.svg","url":"https://cal.com/","variant":"analytics","categories":["analytics"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Google Analytics alternative that protects your data and your customers\' privacy","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"src":"{MATOMO_URL}/matomo.js","attrs":{}},{"content":"var _paq = window._paq || [];\\n      _paq.push([\'trackPageView\']);\\n      _paq.push([\'enableLinkTracking\']);\\n      (function() {\\n        var u=\'{MATOMO_URL}/\';  \\n        _paq.push([\'setTrackerUrl\', u+\'matomo.php\']);\\n        _paq.push([\'setSiteId\', \'{SITE_ID}\']);  \\n        var d=document, g=d.createElement(\'script\'), s=d.getElementsByTagName(\'script\')[0];\\n        g.type=\'text/javascript\'; g.async=true; g.defer=true; g.src=u+\'matomo.js\'; s.parentNode.insertBefore(g,s);\\n      })();"}]}},"isTemplate":false,"__createdUsingCli":true,"__template":"booking-pages-tag"}'
      );
    },
    44469: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Discord","slug":"discord","type":"discord_video","logo":"icon.svg","url":"https://discord.com/","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com, Inc.","email":"support@cal.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://discord.gg/420gg69","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?discord\\\\.(gg|com)\\\\/[a-zA-Z0-9]+"}},"description":"Copy your server invite link and start scheduling calls in Discord! Discord is a VoIP and instant messaging social platform. Users have the ability to communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities.","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static","isOAuth":false}'
      );
    },
    46026: (e, t, a) => {
      "use strict";
      a.d(t, { Ay: () => y, I$: () => r, fk: () => l, kE: () => h });
      var i = a(26559),
        o = a(66339);
      let n = o.f_,
        s = o.VG;
      function r(e, t) {
        return e && l(e) ? e : t ? s : n;
      }
      function l(e) {
        return /^#([0-9A-Fa-f]{3}){1,2}$/.test(e);
      }
      let c = (e, t) =>
        /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(
          e.replace("##", "#")
        )
          ? e
          : t;
      function p(e) {
        let t = e.replace("##", "#"),
          a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        if (!a) throw Error("Invalid Hex colour");
        let [, i, o, n] = a;
        return { r: parseInt(i, 16), g: parseInt(o, 16), b: parseInt(n, 16) };
      }
      function d(e, t, a) {
        let i = (e) => "0".concat(e.toString(16)).slice(-2);
        return "#".concat(i(e)).concat(i(t)).concat(i(a));
      }
      function m(e, t) {
        return e
          ? (3 === (e = e.replace("#", "")).length &&
              (e = e
                .split("")
                .map(function (e) {
                  return e + e;
                })
                .join("")),
            e)
          : t
          ? s
          : n;
      }
      let u = (e) => {
        let t = { 500: "#".concat(e).replace("##", "#") },
          a = {
            50: 0.95,
            100: 0.9,
            200: 0.75,
            300: 0.6,
            400: 0.3,
            600: 0.9,
            700: 0.75,
            800: 0.6,
            900: 0.49,
          };
        return (
          [50, 100, 200, 300, 400].forEach((i) => {
            t[i] = (function (e, t) {
              let a = p("#".concat(e));
              if (!a) return "";
              let i = Math.round(a.r + (255 - a.r) * t);
              return d(
                i,
                Math.round(a.g + (255 - a.g) * t),
                Math.round(a.b + (255 - a.b) * t)
              );
            })(e, a[i]);
          }),
          [600, 700, 800, 900].forEach((i) => {
            t[i] = (function (e, t) {
              let a = p(e);
              if (!a) return "";
              let i = Math.round(a.r * t);
              return d(i, Math.round(a.g * t), Math.round(a.b * t));
            })(e, a[i]);
          }),
          t
        );
      };
      function g(e) {
        let { r: t, g: a, b: i } = p(e);
        return (0.2126 * t + 0.7152 * a + 0.0722 * i) / 255 < 0.5
          ? "#FFFFFF"
          : "#000000";
      }
      function h(e, t) {
        let a = p(e),
          i = p(t),
          o = (0.2126 * a.r + 0.7152 * a.g + 0.0722 * a.b) / 255,
          n = (0.2126 * i.r + 0.7152 * i.g + 0.0722 * i.b) / 255;
        return (Math.max(o, n) + 0.05) / (Math.min(n, o) + 0.05) >= 4.5;
      }
      let y = (e) => {
        let { lightVal: t = n, darkVal: a = s } = e;
        (t = m((t = (0, i.Pn)().brandColor || t), !1)), (a = m(a, !0));
        let o = u(c(t, n)),
          r = u(c(a, s));
        return {
          light: {
            "cal-brand": o["500"],
            "cal-brand-emphasis": o["400"],
            "cal-brand-subtle": o["200"],
            "cal-brand-text": g(o["500"]),
            "cal-brand-accent": g(o["500"]),
          },
          dark: {
            "cal-brand": r["500"],
            "cal-brand-emphasis": r["600"],
            "cal-brand-subtle": r["800"],
            "cal-brand-text": g(r["500"]),
            "cal-brand-accent": g(r["500"]),
          },
        };
      };
    },
    47999: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Signal","slug":"signal","type":"signal_video","logo":"icon.svg","url":"https://cal.com/","variant":"messaging","categories":["messaging"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"Schedule a chat with your guests or have a Signal Video call.","__createdUsingCli":true,"appData":{"location":{"type":"integrations:signal_video","label":"Signal","linkType":"static","organizerInputPlaceholder":"https://signal.me/#p/+11234567890","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?signal.me\\\\/[a-zA-Z0-9]*"}},"isOAuth":false}'
      );
    },
    49761: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"8x8","slug":"eightxeight","type":"eightxeight_video","logo":"icon.svg","url":"https://github.com/shivamklr","variant":"conferencing","categories":["conferencing"],"publisher":"Shivam Kalra","email":"shivamkalra98@gmail.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://8x8.vc/company","urlRegExp":"^(http|https)://(www\\\\.)?8x8.vc/[a-zA-Z0-9]*"}},"description":"The best video conferencing solution for businesses of any size. Fully secure, reliable, packed with features and ridiculously simple to use.\\r\\r","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static","dirName":"eightxeight","isOAuth":false}'
      );
    },
    51707: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Ping.gg","title":"Ping.gg","slug":"ping","type":"ping_video","logo":"icon.svg","url":"https://ping.gg","variant":"conferencing","categories":["conferencing"],"publisher":"Ping.gg","email":"support@ping.gg","description":"Ping.gg makes high quality video collaborations easier than ever. Think \'Zoom for streamers and creators\'. Join a call in 3 clicks, manage audio and video like a pro, and copy-paste your guests straight into OBS","__createdUsingCli":true,"appData":{"location":{"linkType":"static","type":"integrations:ping_video","label":"Ping.gg","organizerInputPlaceholder":"https://www.ping.gg/call/theo","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?ping.gg\\\\/call\\\\/[a-zA-Z0-9]*"}},"isOAuth":false}'
      );
    },
    53789: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o, Y: () => i });
      let i = (e, t) => {
          if (!e) return "";
          let a = e
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(RegExp("\\p{Diacritic}", "gu"), "")
            .replace(RegExp("[^.\\p{L}\\p{N}\\p{Zs}\\p{Emoji}]+", "gu"), "-")
            .replace(/[\s_#]+/g, "-")
            .replace(/^-+/, "")
            .replace(/\.{2,}/g, ".")
            .replace(/^\.+/, "")
            .replace(
              /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
              ""
            )
            .replace(/\s+/g, " ")
            .replace(/-+/g, "-");
          return t ? a : a.replace(/-+$/, "").replace(/\.*$/, "");
        },
        o = i;
    },
    54125: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => i, s: () => o });
      let i = {
          getItem(e) {
            try {
              return window.localStorage.getItem(e);
            } catch (e) {
              return null;
            }
          },
          setItem(e, t) {
            try {
              window.localStorage.setItem(e, t);
            } catch (e) {
              return;
            }
          },
          removeItem: (e) => {
            try {
              window.localStorage.removeItem(e);
            } catch (e) {
              return;
            }
          },
        },
        o = {
          getItem(e) {
            try {
              return window.sessionStorage.getItem(e);
            } catch (e) {
              return null;
            }
          },
          setItem(e, t) {
            try {
              window.sessionStorage.setItem(e, t);
            } catch (e) {
              return;
            }
          },
          removeItem: (e) => {
            try {
              window.sessionStorage.removeItem(e);
            } catch (e) {
              return;
            }
          },
        };
    },
    58008: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Campfire","slug":"campfire","type":"campfire_video","logo":"icon.svg","url":"https://cal.com/","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Feel connected with your remote team. Team events, new hire onboardings, coffee chats, all on Campfire. No more awkward Zoom calls.\\r\\r","__createdUsingCli":true,"appData":{"location":{"type":"integrations:campfire_video","label":"Campfire","linkType":"static","organizerInputPlaceholder":"https://party.campfire.to/your-team","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?party.campfire.to\\\\/[a-zA-Z0-9]*"}},"isOAuth":false}'
      );
    },
    65447: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r, V: () => l });
      var i = a(56641),
        o = a(7620),
        n = a(26559),
        s = a(54125);
      function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        {
          var a;
          let t = s.L.getItem("app-theme");
          e = null != (a = null != e ? e : t) ? a : "system";
        }
        let {
            resolvedTheme: r,
            setTheme: l,
            forcedTheme: c,
            theme: p,
          } = (0, i.D)(),
          d = (0, n.cm)();
        if (
          ((0, o.useEffect)(() => {
            if (t || void 0 === e) return;
            let a = d ? ("auto" === d ? "system" : d) : e;
            a && a !== p && l(a);
          }, [e, l, d]),
          t)
        )
          return { resolvedTheme: r, forcedTheme: c, activeTheme: p };
      }
      function l() {
        let e = r(null, !0);
        if (!e) throw Error("useTheme must have a return value here");
        return e;
      }
    },
    65663: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => ta });
      let i = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Alby","slug":"alby","type":"alby_payment","logo":"icon.svg","url":"https://getalby.com","variant":"payment","categories":["payment"],"publisher":"Alby","email":"support@getalby.com","description":"Your Bitcoin & Nostr companion for the web. Use Alby to charge Satoshi for your [Cal.com](https://cal.com) meetings.\\r","extendsFeature":"EventType","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-app-card","dirName":"alby","isOAuth":false}'
        ),
        o = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Amie","slug":"amie","type":"amie_other","logo":"icon.svg","url":"https://cal.com","variant":"other","categories":["calendar"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"The joyful productivity app\\r\\r","__createdUsingCli":true,"dependencies":["google-calendar"],"dirName":"amie","isOAuth":false}'
        ),
        n = {
          name: "Apple Calendar",
          description: JSON.parse(
            '{"h_":"Apple calendar runs both the macOS and iOS mobile operating systems. Offering online cloud backup of calendars using Apple’s iCloud service, it can sync with Google Calendar and Microsoft Exchange Server. Users can schedule events in their day that include time, location, duration, and extra notes."}'
          ).h_,
          installed: !0,
          type: "apple_calendar",
          title: "Apple Calendar",
          variant: "calendar",
          categories: ["calendar"],
          category: "calendar",
          logo: "icon.svg",
          publisher: "Cal.com",
          slug: "apple-calendar",
          url: "https://cal.com/",
          email: "help@cal.com",
          dirName: "applecalendar",
          isOAuth: !1,
        },
        s = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Attio","slug":"attio","type":"attio_crm","logo":"icon-dark.svg","url":"/apps/installed/crm","variant":"crm","categories":["crm"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"Attio is the AI-native CRM that builds, scales and grows your company to the next level.","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        r = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Autocheckin","slug":"autocheckin","type":"autocheckin_automation","logo":"icon.svg","url":"https://autocheckin.app","variant":"automation","categories":["automation"],"publisher":"Patrick Goeler von Ravensburg","email":"patrickvongoeler@gmail.com","description":"You simply paste a [Cal.com](https://cal.com) link of someone, select a frequency and we will take care of the scheduling for you.\\r\\r","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        l = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"BAA for HIPAA","slug":"baa-for-hipaa","type":"baa-for-hipaa_other","logo":"icon.svg","url":"https://cal.com/BAA","variant":"other","categories":["other"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"Request a signed Business Associate Agreement for your HIPAA compliance records","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app","paid":{"priceInUsd":300,"mode":"subscription"}}'
        ),
        c = JSON.parse(
          '{"name":"Basecamp3","slug":"basecamp3","type":"basecamp3_other_calendar","logo":"icon-dark.svg","url":"https://basecamp.com/","variant":"other","categories":["other"],"publisher":"Jonathan D\'mello","email":"support@cal.com","description":"Basecamp puts everything you need to get work done in one place. It’s the calm, organized way to manage projects, work with clients, and communicate company-wide.","extendsFeature":"EventType","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-app-card","dirName":"basecamp3","isOAuth":true}'
        ),
        p = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Bolna","slug":"bolna","type":"bolna_automation","logo":"icon-primary.svg","url":"https://playground.bolna.dev/auth/calcom","variant":"automation","categories":["automation"],"publisher":"Bolna","email":"founders@bolna.dev","description":"24x7 AI receptionists to answer all inbound calls","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        d = JSON.parse(
          '{"name":"BTCPayServer","slug":"btcpayserver","type":"btcpayserver_payment","logo":"icon.svg","url":"https://btcpayserver.org","variant":"payment","categories":["payment"],"publisher":"BTCPay Server Team","email":"chat.btcpayserver.org","description":"BTCPay Server is a self-hosted open source Bitcoin payment processor. Start receiving bitcoin payments for your events and bookings.","extendsFeature":"EventType","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-app-card"}'
        ),
        m = {
          name: "CalDav (Beta)",
          description: JSON.parse(
            '{"h_":"Caldav is a protocol that allows different clients/servers to access scheduling information on remote servers as well as schedule meetings with other users on the same server or other servers. It extends WebDAV specification and uses iCalendar format for the data."}'
          ).h_,
          installed: !0,
          type: "caldav_calendar",
          title: "CalDav (Beta)",
          variant: "calendar",
          category: "calendar",
          categories: ["calendar"],
          logo: "icon.svg",
          publisher: "Cal.com",
          slug: "caldav-calendar",
          url: "https://cal.com/",
          email: "help@cal.com",
          dirName: "caldavcalendar",
          isOAuth: !1,
        };
      var u = a(58008);
      let g = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Chatbase","slug":"chatbase","type":"chatbase_other","logo":"icon-dark.svg","url":"https://www.chatbase.co/guide/cal","variant":"other","categories":["other"],"publisher":"Chatbase","email":"sandra@chatbase.co","description":"Add [Cal.com](https://cal.com/) to your Chatbase AI Chatbot and accept bookings right inside chat.","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        h = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Clic","slug":"clic","type":"check_in_automation","logo":"icon.svg","url":"https://clicis.vercel.app","variant":"automation","categories":["automation"],"publisher":"Chris Pacheco","email":"chrispacheco430@gmail.com","description":"Create, List and Interact with Your Cal.com links and connections easily.\\r\\r","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        y = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Close.com","title":"Close.com","slug":"closecom","type":"closecom_crm","logo":"icon.svg","url":"https://cal.com/","variant":"crm","categories":["crm"],"publisher":"Cal.com, Inc.","extendsFeature":"EventType","email":"help@cal.com","description":"Close is the inside sales CRM of choice for startups and SMBs. Make more calls, send more emails and close more deals starting today.","__createdUsingCli":true,"isOAuth":true,"dirName":"closecom"}'
        ),
        f = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Notion Calendar","slug":"cron","type":"cron_calendar","logo":"logo.png","url":"https://github.com/miguelnietoa","variant":"calendar","categories":["calendar"],"publisher":"Miguel Nieto","email":"support@cal.com","description":"All of your commitments, now in one place.","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app","dependencies":["google-calendar"],"isOAuth":false}'
        );
      var v = a(16127);
      let _ = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Deel","slug":"deel","type":"deel_other","logo":"icon.svg","url":"https://go.cal.com/deel","variant":"other","categories":["other"],"publisher":"Deel.com","email":"support@deel.com","description":"Integrate Deel with your Calendar and get automatic updates on key employee dates like PTO, start days, public holidays, and birthdays. No manual entry. No errors. Just a calendar that\'s always in sync with your team.","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app","dirName":"deel"}'
      );
      var b = a(33285),
        w = a(34316),
        k = a(44469);
      let C = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Dub","slug":"dub","type":"dub_analytics","logo":"icon-dark.svg","url":"https://dub.co","variant":"analytics","categories":["analytics"],"publisher":"Cal.com","email":"help@cal.com","description":"Dub is the modern link attribution platform for you to create short links, track conversion analytics, and run affiliate programs.","isTemplate":false,"__createdUsingCli":true,"__template":"basic"}'
      );
      var I = a(49761),
        S = a(92438);
      let A = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"ElevenLabs","slug":"elevenlabs","type":"elevenlabs_automation","logo":"icon-dark.svg","url":"https://elevenlabs.io/docs/conversational-ai/guides/integrations/cal-com","variant":"automation","categories":["automation"],"publisher":"ElevenLabs","email":"support@elevenlabs.io","description":"Create the most realistic speech with our AI audio platform","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        T = {
          name: "Microsoft Exchange 2013 Calendar",
          description: JSON.parse(
            '{"h_":"For calendars hosted on on-premises Microsoft Exchange 2013 servers"}'
          ).h_,
          installed: !0,
          type: "exchange2013_calendar",
          title: "Microsoft Exchange 2013 Calendar",
          variant: "calendar",
          category: "calendar",
          categories: ["calendar"],
          label: "Exchange Calendar",
          logo: "icon.svg",
          publisher: "Cal.com",
          slug: "exchange2013-calendar",
          url: "https://cal.com/",
          email: "help@cal.com",
          dirName: "exchange2013calendar",
          isOAuth: !1,
        },
        x = {
          name: "Microsoft Exchange 2016 Calendar",
          description: JSON.parse(
            '{"h_":"For calendars hosted on on-premises Microsoft Exchange 2016 servers"}'
          ).h_,
          installed: !0,
          type: "exchange2016_calendar",
          title: "Microsoft Exchange 2016 Calendar",
          variant: "calendar",
          category: "calendar",
          categories: ["calendar"],
          label: "Exchange Calendar",
          logo: "icon.svg",
          publisher: "Cal.com",
          slug: "exchange2016-calendar",
          url: "https://cal.com/",
          email: "help@cal.com",
          dirName: "exchange2016calendar",
          isOAuth: !1,
        },
        O = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","title":"Microsoft Exchange","name":"Microsoft Exchange","slug":"exchange","dirName":"exchangecalendar","type":"exchange_calendar","logo":"icon.svg","url":"https://cal.com","variant":"calendar","categories":["calendar"],"publisher":"Cal.com","email":"help@cal.com","description":"Fetch Microsoft Exchange calendars and availabilities using Exchange Web Services (EWS).","__createdUsingCli":true,"isOAuth":false}'
        );
      var N = a(34231),
        D = a(95416);
      let E = {
          name: "Feishu Calendar",
          description: JSON.parse(
            '{"h_":"Feishu Calendar is a time management and scheduling service developed by Feishu. Allows users to create and edit events, with options available for type and time. Available to anyone that has a Feishu account on both mobile and web versions."}'
          ).h_,
          installed: !0,
          type: "feishu_calendar",
          title: "Feishu Calendar",
          variant: "calendar",
          categories: ["calendar"],
          logo: "icon.svg",
          publisher: "Feishu",
          slug: "feishu-calendar",
          url: "https://feishu.cn/",
          email: "alan@larksuite.com",
          dirName: "feishucalendar",
        },
        U = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"fonio.ai","slug":"fonio-ai","type":"fonio-ai_automation","logo":"icon.png","url":"https://docs.fonio.ai/Tools/Terminbuchung","variant":"automation","categories":["automation"],"publisher":"fonio GmbH","email":"info@fonio.ai","description":"Der KI-Telefonassistent auf Deutsch\\r","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        J = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Framer","slug":"framer","type":"framer_other","logo":"icon-dark.svg","url":"https://www.framer.com/updates/cal-com","variant":"other","categories":["other"],"publisher":"Framer B.V.","email":"benjamin@framer.com","description":"Add Cal.com to Framer, the design tool for websites. Design freely, publish fast, and scale with CMS, SEO, analytics, and more.","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        );
      var F = a(31517);
      let q = {
        name: "Giphy",
        description: JSON.parse(
          '{"h_":"GIPHY is your top source for the best & newest GIFs & Animated Stickers online. Find everything from funny GIFs, reaction GIFs, unique GIFs and more."}'
        ).h_,
        installed: !0,
        categories: ["other"],
        logo: "icon.svg",
        publisher: "Cal.com",
        slug: "giphy",
        title: "Giphy",
        type: "giphy_other",
        url: "https://cal.com/apps/giphy",
        variant: "other",
        extendsFeature: "EventType",
        email: "help@cal.com",
        dirName: "giphy",
        isOAuth: !1,
      };
      var P = a(72697);
      let L = JSON.parse(
        '{"h_":"Google Calendar is a time management and scheduling service developed by Google. Allows users to create and edit events, with options available for type and time. Available to anyone that has a Gmail account on both mobile and web versions."}'
      );
      var M = a(40459);
      let R = {
        name: "Google Calendar",
        description: L.h_,
        installed: !!(
          M.env.GOOGLE_API_CREDENTIALS && (0, P.h)(M.env.GOOGLE_API_CREDENTIALS)
        ),
        type: "google_calendar",
        title: "Google Calendar",
        variant: "calendar",
        category: "calendar",
        categories: ["calendar"],
        logo: "icon.svg",
        publisher: "Cal.com",
        slug: "google-calendar",
        url: "https://cal.com/",
        email: "help@cal.com",
        dirName: "googlecalendar",
        isOAuth: !0,
        delegationCredential: { workspacePlatformSlug: "google" },
      };
      var z = a(99953);
      let j = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Granola","slug":"granola","type":"granola_other","logo":"icon.svg","url":"https://go.cal.com/granola","variant":"other","categories":["other"],"publisher":"Granola inc","email":"hey@granola.so","description":"The AI notepad for people in back-to-back meetings for MacOS","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        G = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Greetmate.ai","slug":"greetmate-ai","type":"greetmate-ai_automation","logo":"icon-dark.svg","url":"https://www.greetmate.ai","variant":"automation","categories":["automation"],"publisher":"Greetmate Inc.","email":"support@greetmate.ai","description":"Connect [Cal.com](https://cal.com/) to [Greetmate.ai](https://www.greetmate.ai/) and enable appointment scheduling for your AI agents.","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        );
      var B = a(94419);
      let W = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"HitPay","slug":"hitpay","type":"hitpay_payment","logo":"icon.svg","url":"https://hitpayapp.com","variant":"payment","categories":["payment"],"publisher":"HitPay","email":"support@hit-pay.com","description":"HitPay\'s Cal.com payment integration combines powerful scheduling with seamless local payment acceptance. Our online scheduling software integration is built for customers in APAC, supporting their favorite e-wallets and banking apps.","extendsFeature":"EventType","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-app-card","dirName":"hitpay","isOAuth":true}'
      );
      var V = a(85730);
      let H = JSON.parse(
          '{"h_":"HubSpot is a cloud-based CRM designed to help align sales and marketing teams, foster sales enablement, boost ROI and optimize your inbound marketing strategy to generate more, qualified leads."}'
        ),
        Z = {
          name: "HubSpot CRM",
          installed: !!a(40459).env.HUBSPOT_CLIENT_ID,
          description: H.h_,
          type: "hubspot_crm",
          variant: "crm",
          logo: "icon.svg",
          publisher: "Cal.com",
          url: "https://hubspot.com/",
          categories: ["crm"],
          label: "HubSpot CRM",
          slug: "hubspot",
          extendsFeature: "EventType",
          title: "HubSpot CRM",
          email: "help@cal.com",
          dirName: "hubspot",
          isOAuth: !0,
        };
      var Y = a(28369);
      let K = JSON.parse(
        '{"name":"ICS Feed","title":"ICS Feed","slug":"ics-feed","dirName":"ics-feedcalendar","type":"ics-feed_calendar","logo":"icon.svg","variant":"calendar","categories":["calendar"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Import events from an ICS Feed into [Cal.com](https://cal.com).","isTemplate":false,"__createdUsingCli":true}'
      );
      var $ = a(72577);
      let Q = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Intercom","slug":"intercom","type":"intercom_automation","logo":"icon.svg","url":"https://github.com/vachmara","variant":"automation","categories":["automation"],"publisher":"Valentin Chmara","email":"valentinchmara@gmail.com","description":"Enhance your scheduling and appointment management experience with the Intercom Integration for [Cal.com](https://cal.com).","isTemplate":false,"__createdUsingCli":true,"__template":"basic","dirName":"intercom","isOAuth":true}'
      );
      var X = a(71581),
        ee = a(35385);
      let et = {
          name: "Lark Calendar",
          description: JSON.parse(
            '{"h_":"Lark Calendar is a time management and scheduling service developed by Lark. Allows users to create and edit events, with options available for type and time. Available to anyone that has a Lark account on both mobile and web versions."}'
          ).h_,
          installed: !0,
          type: "lark_calendar",
          title: "Lark Calendar",
          variant: "calendar",
          categories: ["calendar"],
          logo: "icon.svg",
          publisher: "Lark",
          slug: "lark-calendar",
          url: "https://larksuite.com/",
          email: "alan@larksuite.com",
          dirName: "larkcalendar",
          isOAuth: !0,
        },
        ea = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Lindy","slug":"lindy","type":"lindy_automation","logo":"icon-dark.svg","url":"https://www.lindy.ai/integrations/cal-com","variant":"automation","categories":["automation"],"publisher":"Lindy","email":"flo@lindy.ai","description":"Build AI agents in minutes to automate workflows, save time and grow your business","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        ei = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Linear","slug":"linear","type":"linear_other","logo":"icon.svg","url":"https://linear.app","variant":"other","categories":["other"],"publisher":"Linear","email":"support@linear.app","description":"Linear is a better way to build products. Connect your calendar to automate your status","isTemplate":false,"__createdUsingCli":true,"dependencies":["google-calendar"],"__template":"link-as-an-app"}'
        ),
        eo = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Make","slug":"make","type":"make_automation","logo":"icon.svg","url":"https://github.com/aar2dee2","variant":"automation","categories":["automation"],"publisher":"aar2dee2","email":"support@cal.com","description":"From tasks and workflows to apps and systems, build and automate anything in one powerful visual platform.","isTemplate":false,"__createdUsingCli":true,"__template":"basic","imageSrc":"icon.svg","dirName":"make","isOAuth":false}'
        );
      var en = a(44422),
        es = a(21984);
      let er = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Millis AI","slug":"millis-ai","type":"millis-ai_automation","logo":"icon.png","url":"https://docs.millis.ai/tutorials/create-voice-agent-for-appointment-scheduling","variant":"automation","categories":["automation"],"publisher":"Millis AI","email":"thach@millis.ai","description":"Build next-gen voice agents with 500ms latency\\r","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
      );
      var el = a(37018);
      let ec = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Mock Payment App","slug":"mock-payment-app","type":"mock-payment-app_payment","logo":"icon.svg","url":"https://example.com/link","variant":"payment","categories":["payment"],"publisher":"Intuita","email":"greg@intuita.io","description":"The mock payment app for tests","isTemplate":false,"__createdUsingCli":true,"__template":"basic","dirName":"mock-payment-app","extendsFeature":"EventType"}'
        ),
        ep = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Monobot CX","slug":"monobot","type":"monobot_automation","logo":"icon.svg","url":"https://monobot.ai/?ref=cal.com","variant":"automation","categories":["automation"],"publisher":"Monobot CX","email":"contact@monobot.ai","description":"Crafting your personalized AI-driven assistant is easy and fast.","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        ed = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"n8n","slug":"n8n","type":"n8n_automation","logo":"icon.svg","url":"https://cal.com/","variant":"automation","categories":["automation"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Automate without limits. The workflow automation platform that doesn\'t box you in, that you never outgrow","__createdUsingCli":true,"isOAuth":false}'
        );
      var em = a(6073);
      let eu = {
        name: "Outlook Calendar",
        description: JSON.parse(
          '{"h_":"Microsoft Office 365 is a suite of apps that helps you stay connected with others and get things done. It includes but is not limited to Microsoft Word, PowerPoint, Excel, Teams, OneNote and OneDrive. Office 365 allows you to work remotely with others on a team and collaborate in an online environment. Both web versions and desktop/mobile applications are available."}'
        ).h_,
        type: "office365_calendar",
        title: "Outlook Calendar",
        variant: "calendar",
        category: "calendar",
        categories: ["calendar"],
        logo: "icon.svg",
        publisher: "Cal.com",
        slug: "office365-calendar",
        dirName: "office365calendar",
        url: "https://cal.com/",
        email: "help@cal.com",
        isOAuth: !0,
      };
      var eg = a(94574);
      let eh = JSON.parse(
        '{"name":"Paypal","slug":"paypal","type":"paypal_payment","logo":"icon.svg","url":"https://paypal.com","variant":"payment","categories":["payment"],"publisher":"Cal.com","email":"support@cal.com","description":"Paypal payment app by [Cal.com](https://cal.com)","extendsFeature":"EventType","isTemplate":false,"__createdUsingCli":true,"imageSrc":"icon.svg","__template":"event-type-app-card","dirName":"paypal","isOAuth":true}'
      );
      var ey = a(51707);
      let ef = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Pipedream","slug":"pipedream","type":"pipedream_automation","logo":"icon.svg","url":"https://pipedream.com/apps/cal-com","variant":"automation","categories":["automation"],"publisher":"Pipedream, Inc.","email":"support@pipedream.com","description":"Connect APIs, remarkably fast. Stop writing boilerplate code, struggling with authentication and managing infrastructure. Start connecting APIs with code-level control when you need it — and no code when you don\'t","__createdUsingCli":true,"isOAuth":false}'
        ),
        ev = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Pipedrive CRM","slug":"pipedrive-crm","type":"pipedrive-crm_crm","logo":"icon.svg","url":"https://revert.dev","variant":"crm","categories":["crm"],"extendsFeature":"EventType","publisher":"Revert.dev ","email":"jatin@revert.dev","description":"Founded in 2010, Pipedrive is an easy and effective sales CRM that drives small business growth.\\r\\rToday, Pipedrive is used by revenue teams at more than 100,000 companies worldwide. Pipedrive is headquartered in New York and has offices across Europe and the US.\\r\\rThe company is backed by majority holder Vista Equity Partners, Bessemer Venture Partners, Insight Partners, Atomico, and DTCP.\\r\\rLearn more at www.pipedrive.com.","isTemplate":false,"__createdUsingCli":true,"__template":"basic","dirName":"pipedrive-crm"}'
        );
      var e_ = a(35716),
        eb = a(94873);
      let ew = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"QR Code","slug":"qr_code","type":"qr_code_other","logo":"icon.svg","url":"https://cal.com/","variant":"other","categories":["other"],"extendsFeature":"EventType","publisher":"Cal.com, Inc.","email":"support@cal.com","description":"Easily generate a QR code for your links to print, share, or embed.","__createdUsingCli":true,"isOAuth":false}'
        ),
        ek = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Raycast","slug":"raycast","type":"raycast_other","logo":"icon.svg","url":"https://github.com/eluce2","variant":"other","categories":["automation"],"publisher":"Eric Luce","email":"info@restlessmindstech.com","description":"Quickly share your [Cal.com](https://cal.com) meeting links with Raycast","__createdUsingCli":true,"isOAuth":false}'
        ),
        eC = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Retell AI","slug":"retell-ai","type":"retell-ai_automation","logo":"icon-dark.svg","url":"https://go.cal.com/retellai","variant":"automation","categories":["automation"],"publisher":"Retell AI","email":"founders@retellai.com","description":"Supercharge your Call Operations with AI \\r","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        );
      var eI = a(77290),
        eS = a(92804);
      let eA = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Routing","title":"Routing","isGlobal":true,"slug":"routing-forms","type":"routing-forms_other","logo":"icon-dark.svg","url":"https://cal.com/resources/feature/routing-forms","variant":"other","categories":["automation"],"publisher":"Cal.com, Inc.","simplePath":"/routing","email":"help@cal.com","licenseRequired":true,"teamsPlanRequired":{"upgradeUrl":"/routing"},"description":"It would allow a booker to connect with the right person or choose the right event, faster. It would work by taking inputs from the booker and using that data to route to the correct booker/event as configured by Cal user","__createdUsingCli":true,"isOAuth":false}'
        ),
        eT = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Salesforce","slug":"salesforce","type":"salesforce_crm","logo":"icon.png","url":"https://cal.com/","variant":"crm","categories":["crm"],"extendsFeature":"EventType","publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Salesforce (Sales Cloud) is a cloud-based application designed to help your salespeople sell smarter and faster by centralizing customer information, logging their interactions with your company, and automating many of the tasks salespeople do every day.","__createdUsingCli":true,"isOAuth":true}'
        );
      var ex = a(29580);
      let eO = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Sendgrid","slug":"sendgrid","type":"sendgrid_other_calendar","logo":"logo.png","url":"https://cal.com/","variant":"other_calendar","categories":["other"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"SendGrid delivers your transactional and marketing emails through the world\'s largest cloud-based email delivery platform.","__createdUsingCli":true,"isOAuth":false}'
      );
      var eN = a(77537),
        eD = a(47999),
        eE = a(82444),
        eU = a(11051);
      let eJ = JSON.parse(
        '{"h_":"A Saas company a payment processing software, and application programming interfaces for e-commerce websites and mobile applications."}'
      );
      var eF = a(40459);
      let eq = {
        name: "Stripe",
        description: eJ.h_,
        installed: !!(eF.env.STRIPE_CLIENT_ID && eF.env.STRIPE_PRIVATE_KEY),
        slug: "stripe",
        category: "payment",
        categories: ["payment"],
        logo: "icon.svg",
        publisher: "Cal.com",
        title: "Stripe",
        type: "stripe_payment",
        url: "https://cal.com/",
        docsUrl: "https://stripe.com/docs",
        variant: "payment",
        extendsFeature: "EventType",
        email: "help@cal.com",
        dirName: "stripepayment",
        isOAuth: !0,
      };
      var eP = a(38994);
      let eL = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Synthflow","slug":"synthflow","type":"synthflow_automation","logo":"icon.svg","url":"https://synthflow.ai/integrations/calcom","variant":"automation","categories":["automation"],"publisher":"Synthflow.ai","email":"albert@synthflow.ai","description":"Effortless Human-Like AI Phone Calls and Scheduling","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
      );
      var eM = a(67221),
        eR = a(11434);
      let ez = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"telli","slug":"telli","type":"telli_automation","logo":"icon-dark.svg","url":"https://www.telli.com/en/caldotcom","variant":"automation","categories":["automation"],"publisher":"telli technologies GmbH","email":"founders@telli.so","description":"telli AI agents reach your customers, make calls independently & enhance your customer experience - fully integrated into [Cal.com](https://cal.com).","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        ej = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Basic","slug":"basic","type":"basic_other","logo":"icon.svg","url":"https://example.com/link","variant":"other","categories":["other"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"It is a template for an app that can be installed and provides no other feature.","isTemplate":true,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        );
      var eG = a(88372);
      let eB = JSON.parse(
        '{"name":"EventType AppCard","slug":"event-type-app-card","type":"event-type-app-card_other","logo":"icon.svg","url":"https://example.com/link","variant":"other","categories":["other"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"A template showcasing how an app with EventType AppCard can be built e.g. Giphy, QR Code","extendsFeature":"EventType","isTemplate":true,"__createdUsingCli":true}'
      );
      var eW = a(73891);
      let eV = JSON.parse(
          '{"name":"General App Settings","slug":"general-app-settings","type":"general-app-settings_other","logo":"icon.svg","url":"https://example.com/link","variant":"other","categories":["other"],"publisher":"Cal.com Inc","email":"support@cal.com","description":"It is a template showing how an App can have settings in installed section that configures the app globally e.g. Weather in your Calendar","isTemplate":true,"__createdUsingCli":true}'
        ),
        eH = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Link as An App","slug":"link-as-an-app","type":"link-as-an-app_other","logo":"icon.svg","url":"https://example.com/link","variant":"other","categories":["other"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"It\'s a template showing how an app, that is just a link to some webpage, can be made e.g. Pipedream, Amie, Vimcal.","isTemplate":true,"__createdUsingCli":true}'
        );
      var eZ = a(72062),
        eY = a(10084);
      let eK = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Vimcal","slug":"vimcal","type":"vimcal_other","logo":"icon.svg","url":"https://cal.com/","variant":"other","categories":["calendar"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"The world\'s fastest calendar, beautifully designed for a remote world\\r","__createdUsingCli":true,"dependencies":["google-calendar"],"isOAuth":false}'
        ),
        e$ = {
          name: "Vital",
          description: JSON.parse(
            '{"h_":"Connect your health data or wearables to trigger actions on your calendar."}'
          ).h_,
          installed: !0,
          category: "automation",
          categories: ["automation"],
          logo: "icon-dark.svg",
          label: "Vital",
          publisher: "Vital",
          slug: "vital-automation",
          title: "Vital",
          type: "vital_other",
          url: "https://tryvital.io",
          variant: "other",
          email: "support@tryvital.io",
          dirName: "vital",
          isOAuth: !0,
        },
        eQ = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Weather in your Calendar","slug":"weather_in_your_calendar","type":"weather_in_your_calendar_other","logo":"icon.svg","url":"https://github.com/vejnoe","variant":"other","categories":["other"],"publisher":"Andreas Vejn\xf8 Andersen","email":"info@vejnoe.dk","description":"Get the local weather forecast with icons in your calendar\\r\\r","__createdUsingCli":true,"isOAuth":false}'
        );
      var eX = a(73076),
        e0 = a(6305),
        e1 = a(80079);
      let e2 = JSON.parse(
          '{"UU":"WipeMyCal","h_":"Wipe My Cal is a Cal.com exclusive app that redefines what it looks like to reschedule multiple meetings at the same time. Simply install the app, and select ‘Wipe’ for whatever date you need to mass reschedule. Handle emergencies, unexpected sick days and last minute events with the simple click of a button."}'
        ),
        e5 = {
          name: e2.UU,
          description: e2.h_,
          installed: !0,
          category: "automation",
          categories: ["automation"],
          logo: "icon-dark.svg",
          publisher: "Cal.com",
          slug: "wipe-my-cal",
          title: "Wipe my cal",
          type: "wipemycal_other",
          url: "https://cal.com/apps/wipe-my-cal",
          variant: "other",
          email: "help@cal.com",
          dirName: "wipemycalother",
          isOAuth: !1,
        },
        e3 = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Wordpress","slug":"wordpress","type":"wordpress_other","logo":"icon-dark.svg","url":"https://github.com/calcom/wp-plugin","variant":"other","categories":["other"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"Embedded booking pages right into your wordpress page","__createdUsingCli":true,"isAuth":false}'
        ),
        e4 = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Zapier","slug":"zapier","type":"zapier_automation","logo":"icon.svg","url":"https://zapier.com/apps/calcom/integrations","variant":"automation","categories":["automation"],"publisher":"Cal.com","email":"help@cal.com","description":"Workflow automation for everyone. Use the Cal.com Zapier app to automate your workflows when a booking is created, rescheduled, cancelled or when a meeting ends.","isTemplate":false,"__createdUsingCli":true,"__template":"link-as-an-app"}'
        ),
        e9 = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Zoho Bigin","slug":"zoho-bigin","type":"zoho-bigin_crm","logo":"zohobigin.svg","url":"https://github.com/ShaneMaglangit","variant":"crm","categories":["crm"],"extendsFeature":"EventType","publisher":"Shane Maglangit","email":"help@cal.com","description":"Bigin easily transforms your day-to-day customer processes into actionable pipelines. From qualifying leads to closing deals to managing important after-sales operations—Bigin connects your different teams to work together so that you can offer the best possible experience to your customers. Say goodbye to missing follow-ups, manual data entry, lack of team communication, and information silos.","isTemplate":false,"__createdUsingCli":true,"__template":"basic","scope":"ZohoBigin.modules.events.ALL,ZohoBigin.modules.contacts.ALL","isOAuth":true}'
        ),
        e7 = JSON.parse(
          '{"name":"Zoho Calendar","description":"Zoho Calendar is an online business calendar that makes scheduling easy for you. You can use it to stay on top of your schedule and also share calendars with your team to keep everyone on the same page.","slug":"zohocalendar","type":"zoho_calendar","title":"Zoho Calendar","variant":"calendar","category":"calendar","categories":["calendar"],"logo":"icon.svg","publisher":"Cal.com","url":"https://cal.com/","email":"help@cal.com","isAuth":true}'
        ),
        e6 = JSON.parse(
          '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"ZohoCRM","slug":"zohocrm","type":"zohocrm_crm","logo":"icon.svg","url":"https://github.com/jatinsandilya","variant":"crm","categories":["crm"],"extendsFeature":"EventType","publisher":"Jatin Sandilya","email":"help@cal.com","description":"Zoho CRM is a cloud-based application designed to help your salespeople sell smarter and faster by centralizing customer information, logging their interactions with your company, and automating many of the tasks salespeople do every day","isTemplate":false,"__createdUsingCli":true,"__template":"basic","isOAuth":true}'
        );
      var e8 = a(17425);
      let te = {
        alby: i,
        amie: o,
        applecalendar: n,
        attio: s,
        autocheckin: r,
        "baa-for-hipaa": l,
        basecamp3: c,
        bolna: p,
        btcpayserver: d,
        caldavcalendar: m,
        campfire: u,
        chatbase: g,
        clic: h,
        closecom: y,
        cron: f,
        dailyvideo: v.y,
        deel: _,
        demodesk: b,
        dialpad: w,
        discord: k,
        dub: C,
        eightxeight: I,
        "element-call": S,
        elevenlabs: A,
        exchange2013calendar: T,
        exchange2016calendar: x,
        exchangecalendar: O,
        facetime: N,
        fathom: D,
        feishucalendar: E,
        "fonio-ai": U,
        framer: J,
        ga4: F,
        giphy: q,
        googlecalendar: R,
        googlevideo: z.y,
        granola: j,
        "greetmate-ai": G,
        gtm: B,
        hitpay: W,
        "horizon-workrooms": V,
        hubspot: Z,
        huddle01video: Y.y,
        "ics-feedcalendar": K,
        insihts: $,
        intercom: Q,
        jelly: X,
        jitsivideo: ee.y,
        larkcalendar: et,
        lindy: ea,
        linear: ei,
        make: eo,
        matomo: en,
        metapixel: es,
        "millis-ai": er,
        mirotalk: el,
        "mock-payment-app": ec,
        monobot: ep,
        n8n: ed,
        nextcloudtalk: em,
        office365calendar: eu,
        office365video: eg,
        paypal: eh,
        ping: ey,
        pipedream: ef,
        "pipedrive-crm": ev,
        plausible: e_,
        posthog: eb,
        qr_code: ew,
        raycast: ek,
        "retell-ai": eC,
        riverside: eI,
        roam: eS,
        "routing-forms": eA,
        salesforce: eT,
        salesroom: ex,
        sendgrid: eO,
        shimmervideo: eN,
        signal: eD,
        sirius_video: eE,
        skype: eU,
        stripepayment: eq,
        sylapsvideo: eP,
        synthflow: eL,
        tandemvideo: eM.y,
        telegram: eR,
        telli: ez,
        basic: ej,
        "booking-pages-tag": eG,
        "event-type-app-card": eB,
        "event-type-location-video-static": eW,
        "general-app-settings": eV,
        "link-as-an-app": eH,
        twipla: eZ,
        umami: eY,
        vimcal: eK,
        vital: e$,
        weather_in_your_calendar: eQ,
        webex: eX,
        whatsapp: e0,
        whereby: e1,
        wipemycalother: e5,
        wordpress: e3,
        zapier: e4,
        "zoho-bigin": e9,
        zohocalendar: e7,
        zohocrm: e6,
        zoomvideo: e8.y,
      };
      var tt = a(97716);
      let ta = {};
      for (let [e, t] of Object.entries(te)) ta[e] = (0, tt.s)(t);
    },
    67221: (e, t, a) => {
      "use strict";
      a.d(t, { y: () => i });
      let i = {
        name: "Tandem Video",
        description: JSON.parse(
          '{"h_":"Tandem is a new virtual office space that allows teams to effortlessly connect as though they are in a physical office, online. Through co-working rooms, available statuses, live real-time video call, and chat options, you can see who’s around, talk and collaborate in one click. It works cross-platform with both desktop and mobile versions."}'
        ).h_,
        type: "tandem_video",
        title: "Tandem Video",
        variant: "conferencing",
        categories: ["conferencing"],
        slug: "tandem",
        category: "conferencing",
        logo: "icon.svg",
        publisher: "",
        url: "",
        isGlobal: !1,
        email: "help@cal.com",
        appData: {
          location: {
            linkType: "dynamic",
            type: "integrations:tandem",
            label: "Tandem Video",
          },
        },
        dirName: "tandemvideo",
        isOAuth: !0,
      };
    },
    71581: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Jelly","slug":"jelly","type":"jelly_conferencing","logo":"icon.svg","url":"https://jellyjelly.com","variant":"conferencing","categories":["conferencing"],"publisher":"Jelly","email":"support@jellyjelly.com","appData":{"location":{"type":"integrations:{SLUG}_conferencing","label":"{TITLE}","linkType":"dynamic"}},"description":"JellyPhone is a video calling tool with a stacked rolodex. You can cut short podcasts for Tik Tok and Instagram and publish in seconds. Connect with amazing people.","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static"}'
      );
    },
    72062: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"Twipla","slug":"twipla","type":"twipla_analytics","logo":"icon.svg","url":"https://cal.com/","variant":"analytics","categories":["analytics"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Twipla.com, formerly known as Visitor Analytics, is a website intelligence platform that helps you understand how visitors interact with your website.","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"content":"(function(v, i, s, a, t) {\\n  v[t] = v[t] || function() {\\n    (v[t].v = v[t].v || []).push(arguments);\\n  };\\n  if (!v._visaSettings) {\\n    v._visaSettings = {};\\n  }\\n  v._visaSettings[a] = {\\n    v: \'1.0\',\\n    s: a,\\n    a: \'1\',\\n    t: t\\n  };\\n  var b = i.getElementsByTagName(\'body\')[0];\\n  var p = i.createElement(\'script\');\\n  p.defer = 1;\\n  p.async = 1;\\n  p.src = s + \'?s=\' + a;\\n  b.appendChild(p);\\n})(window, document, \'//app-worker.visitor-analytics.io/main.js\', \'{SITE_ID}\', \'va\');"}]}},"isTemplate":false,"__createdUsingCli":true,"__template":"booking-pages-tag"}'
      );
    },
    72577: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"Insihts","slug":"insihts","type":"insihts_analytics","logo":"icon.svg","url":"https://cal.com/","variant":"analytics","categories":["analytics"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Insihts is an all-in-one platform for businesses looking to track user behavior, optimize workflows, and make data-driven decisions. Whether you are a marketer, product manager, or part of a customer success team, Insihts provides the tools you need to succeed.","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"src":"https://collector.insihts.com/script.js","attrs":{"data-website-id":"{SITE_ID}"}}]}},"isTemplate":false,"__createdUsingCli":true,"__template":"booking-pages-tag"}'
      );
    },
    72697: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => i });
      let i = (e) => {
        try {
          let t = JSON.parse(e);
          if (t && "object" == typeof t) return t;
        } catch (e) {
          console.log("Invalid JSON:", e);
        }
        return !1;
      };
    },
    73076: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Webex","title":"Webex","slug":"webex","type":"webex_video","imageSrc":"/icon.ico","logo":"/icon.ico","url":"https://github.com/aar2dee2","variant":"conferencing","categories":["conferencing"],"publisher":"aar2dee2","email":"support@cal.com","description":"Create meetings with Cisco Webex","appData":{"location":{"linkType":"dynamic","type":"integrations:webex_video","label":"Webex"}},"isTemplate":false,"__createdUsingCli":true,"__template":"basic","concurrentMeetings":true,"isAuth":true}'
      );
    },
    73891: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"EventType Location Video - Static","slug":"event-type-location-video-static","type":"event-type-location-video-static_video","logo":"icon.svg","url":"https://example.com/link","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com Inc","email":"support@cal.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://video.app/mylink","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?video.app\\\\/[a-zA-Z0-9]*"}},"description":"It is a template showing how to add a static URL EventType location e.g. Around, Whereby","isTemplate":true,"__createdUsingCli":true}'
      );
    },
    77290: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Riverside","slug":"riverside","type":"riverside_video","logo":"icon-dark.svg","url":"https://cal.com/","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Your online recording studio. The easiest way to record podcasts and videos in studio quality from anywhere. All from the browser.","__createdUsingCli":true,"appData":{"location":{"label":"Riverside Video","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?riverside.fm\\\\/studio\\\\/[a-zA-Z0-9]*","type":"integrations:riverside_video","linkType":"static"}},"isOAuth":false}'
      );
    },
    77537: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Shimmer Video","slug":"shimmervideo","type":"shimmer_video","logo":"icon.png","url":"https://shimmer.care","variant":"conferencing","categories":["conferencing"],"publisher":"Shimmer.care","email":"support@shimmer.care","description":"The #1 Expert ADHD Coach. Weekly calls and in-app support so that you can reach your full potential","isTemplate":false,"__createdUsingCli":true,"__template":"basic","appData":{"location":{"linkType":"dynamic","type":"integrations:shimmer_video","label":"Shimmer Video"}}}'
      );
    },
    80079: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Whereby","title":"Whereby","slug":"whereby","type":"whereby_video","logo":"icon-dark.svg","url":"https://cal.com/","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"Whereby makes it super simple for collaborating teams to jump on a video call.","__createdUsingCli":true,"appData":{"location":{"linkType":"static","type":"integrations:whereby_video","label":"Whereby Video","organizerInputPlaceholder":"https://www.whereby.com/cal","urlRegExp":"^(?:https?://)?(?:(?!.*-\\\\.)(?:\\\\w+(-\\\\w+)*\\\\.))*whereby\\\\.com(/[\\\\w\\\\-._~:?#\\\\[\\\\]@!$&\'()*+,;%=]+)*$"}},"isAuth":false}'
      );
    },
    82444: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Sirius Video","slug":"sirius_video","type":"sirius_video_video","logo":"icon-dark.svg","url":"https://cal.com/","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"Video meetings made for music.\\rCreate your own virtual music classroom, easily.","__createdUsingCli":true,"appData":{"location":{"type":"integrations:sirius_video_video","label":"Sirius Video","linkType":"static","organizerInputPlaceholder":"https://sirius.video/sebastian","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?sirius.video\\\\/[a-zA-Z0-9]*"}},"isOAuth":false}'
      );
    },
    85194: () => {},
    85730: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Horizon Workrooms","slug":"horizon-workrooms","type":"horizon-workrooms_conferencing","logo":"icon.svg","url":"https://forwork.meta.com/de/en/horizon-workrooms/","variant":"conferencing","categories":["conferencing"],"publisher":"Cal.com, Inc","email":"support@cal.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://workrooms.workplace.com/groupcall/LINK:uALeBBTZbdBowT","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?workrooms.workplace.com\\\\/[a-zA-Z0-9]*"}},"description":"Workrooms is an immersive virtual space, where you and your team can work better together, from anywhere","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static"}'
      );
    },
    88310: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => n, m: () => s });
      var i,
        o = a(24805);
      let n =
          (null == (i = o.A.tz.guess()) ? void 0 : i.indexOf("Europe")) !== -1,
        s = "Etc/Unknown" !== o.A.tz.guess() ? o.A.tz.guess() : "Europe/London";
    },
    88372: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"Booking Pages Tag","slug":"booking-pages-tag","type":"booking-pages-tag_analytics","logo":"icon.svg","url":"https://example.com/link","variant":"analytics","categories":["analytics"],"publisher":"Cal.com, Inc.","email":"support@cal.com","description":"It is a template demoing a Booking Pages tracking app like GA4, Fathom and Plausible.","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"src":"https://cdn.example.com/script.js","attrs":{"data-site":"{TRACKING_ID}"}}]}},"isTemplate":true,"__createdUsingCli":true}'
      );
    },
    92438: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Element Call","slug":"element-call","type":"element-call_conferencing","logo":"icon.svg","url":"https://github.com/suyash5053/","variant":"conferencing","categories":["conferencing"],"publisher":"Suyash Srivastava","email":"suyashsrivastava5053@gmail.com","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://call.element.io/","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?call.element.io/[a-zA-Z0-9]*"}},"description":"Element is an open-source communication platform that provides messaging, voice calling, and video conferencing capabilities. It is based on the Matrix protocol, which is a decentralized and federated messaging protocol designed to enable secure and interoperable communication across different platforms and services.\\"","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static","dirName":"element-call","isOAuth":false}'
      );
    },
    92804: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Roam","slug":"roam","type":"roam_conferencing","logo":"icon.png","url":"https://ro.am","variant":"conferencing","categories":["conferencing"],"publisher":"Roam HQ, Inc.","email":"support@ro.am","appData":{"location":{"type":"integrations:{SLUG}_video","label":"{TITLE}","linkType":"static","organizerInputPlaceholder":"https://ro.am/r/#/p/yHwFBQrRTMuptqKYo_wu8A/huzRiHnR-np4RGYKV-c0pQ","urlRegExp":"^http(s)?:\\\\/\\\\/(www\\\\.)?ro.am\\\\/[a-zA-Z0-9]*"}},"description":"Roam is Your Whole Company in one HQ\\r","isTemplate":false,"__createdUsingCli":true,"__template":"event-type-location-video-static"}'
      );
    },
    93066: (e, t, a) => {
      "use strict";
      a.d(t, { md: () => o });
      var i = a(60993);
      let o = new (a.n(i)())("default", { html: !0, breaks: !0, linkify: !0 });
    },
    94419: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"Google Tag Manager","slug":"gtm","type":"gtm_analytics","logo":"icon.svg","url":"https://tagmanager.google.com","variant":"analytics","categories":["analytics"],"publisher":"Black Lemon","email":"support@blacklemon.dk","description":"App to install Google Tag Manager","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"content":"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'{TRACKING_ID}\');"}],"pushEventScript":{"content":"function $pushEvent(event) {window.dataLayer.push({ event: event.name, ...event.data })}"}}},"isTemplate":false,"__createdUsingCli":true,"__template":"booking-pages-tag","isOAuth":false}'
      );
    },
    94574: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"Microsoft 365/Teams (Requires work/school account)","description":"Microsoft Teams is a business communication platform and collaborative workspace included in Microsoft 365. It offers workspace chat and video conferencing, file storage, and application integration. Both web versions and desktop/mobile applications are available. NOTE: MUST HAVE A WORK / SCHOOL ACCOUNT","type":"office365_video","variant":"conferencing","logo":"icon.svg","publisher":"Cal.com","url":"https://www.microsoft.com/en-ca/microsoft-teams/group-chat-software","verified":true,"rating":4.3,"reviews":69,"categories":["conferencing"],"slug":"msteams","title":"MS Teams (Requires work/school account)","trending":true,"email":"help@cal.com","appData":{"location":{"linkType":"dynamic","type":"integrations:office365_video","label":"MS Teams"}},"dirName":"office365video","dependencies":["office365-calendar"],"concurrentMeetings":true,"isOAuth":true}'
      );
    },
    94873: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"Posthog","slug":"posthog","type":"posthog_analytics","logo":"icon.svg","url":"https://posthog.com","variant":"analytics","categories":["analytics"],"publisher":"Cal.com, Inc.","email":"help@cal.com","description":"PostHog is the all-in-one platform for building better products - with product analytics, feature flags, session recordings, a/b testing, heatmaps, and more.","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"content":"!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(\'.\');2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement(\'script\')).type=\'text/javascript\',p.async=!0,p.src=s.api_host.replace(\'.i.posthog.com\',\'-assets.i.posthog.com\')+\'/static/array.js\',(r=t.getElementsByTagName(\'script\')[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a=\'posthog\',u.people=u.people||[],u.toString=function(t){var e=\'posthog\';return\'posthog\'!==a&&(e+=\'.\'+a),t||(e+=\' (stub)\'),e},u.people.toString=function(){return u.toString(1)+\'.people (stub)\'},o=\'capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId\'.split(\' \'),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init(\'{TRACKING_ID}\',{api_host:\'{API_HOST}\'})"}]}},"isTemplate":false,"__createdUsingCli":true,"__template":"booking-pages-tag"}'
      );
    },
    95416: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/*":"Don\'t modify slug - If required, do it using cli edit command","name":"Fathom","slug":"fathom","type":"fathom_analytics","logo":"icon.svg","url":"https://cal.com","variant":"analytics","categories":["analytics"],"publisher":"Cal.com, Inc.","email":"help@cal.com","extendsFeature":"EventType","appData":{"tag":{"scripts":[{"src":"https://cdn.usefathom.com/script.js","attrs":{"data-site":"{TRACKING_ID}"}}]}},"description":"Fathom Analytics provides simple, privacy-focused website analytics. We\'re a GDPR-compliant, Google Analytics alternative.","__createdUsingCli":true,"isOAuth":false}'
      );
    },
    97716: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => i });
      let i = (e) => {
        let t = "dirName" in e ? e.dirName : e.slug;
        if (!t) throw Error("Couldn't derive dirName for app ".concat(e.name));
        let a = { appData: null, dirName: t, __template: "", ...e };
        return (
          (a.logo = (function (e, t) {
            let a = ""
                .concat(t.isTemplate ? "templates/" : "")
                .concat(t.dirName),
              i = e;
            return (
              e.startsWith("/app-store/") ||
                /^https?/.test(e) ||
                (i = "/app-store/".concat(a, "/").concat(e)),
              i
            );
          })(a.logo, { dirName: t, isTemplate: a.isTemplate })),
          a
        );
      };
    },
    99953: (e, t, a) => {
      "use strict";
      a.d(t, { y: () => s });
      var i = a(72697);
      let o = JSON.parse(
        '{"h_":"Google Meet is Google\'s web-based video conferencing platform, designed to compete with major conferencing platforms."}'
      );
      var n = a(40459);
      let s = {
        name: "Google Meet",
        description: o.h_,
        installed: !!(
          n.env.GOOGLE_API_CREDENTIALS && (0, i.h)(n.env.GOOGLE_API_CREDENTIALS)
        ),
        slug: "google-meet",
        category: "conferencing",
        categories: ["conferencing"],
        type: "google_video",
        title: "Google Meet",
        variant: "conferencing",
        logo: "logo.webp",
        publisher: "Cal.com",
        url: "https://cal.com/",
        isGlobal: !1,
        email: "help@cal.com",
        appData: {
          location: {
            linkType: "dynamic",
            type: "integrations:google:meet",
            label: "Google Meet",
          },
        },
        dirName: "googlevideo",
        dependencies: ["google-calendar"],
        isOAuth: !1,
      };
    },
  },
]);
//# sourceMappingURL=75786-2c7c9ff636ebeac3.js.map
