"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [83290],
  {
    660: (e, t, l) => {
      l.d(t, { A: () => u, _: () => d });
      var a = l(95622),
        n = l(14530),
        i = l(47755),
        r = l(26682),
        s = l(35573),
        o = l(40516);
      let d = (e) => {
          let [t, l, i, r] = (0, n.Mu)(
              (e) => [e.username, e.eventSlug, e.isTeamEvent, e.org],
              a.x
            ),
            o = s.i.viewer.public.event.useQuery(
              {
                username: null != t ? t : "",
                eventSlug: null != l ? l : "",
                isTeamEvent: i,
                org: null != r ? r : null,
                fromRedirectOfNonOrgLink:
                  null == e ? void 0 : e.fromRedirectOfNonOrgLink,
              },
              {
                refetchOnWindowFocus: !1,
                enabled: !(null == e ? void 0 : e.disabled) && !!t && !!l,
              }
            );
          return {
            data: null == o ? void 0 : o.data,
            isSuccess: null == o ? void 0 : o.isSuccess,
            isError: null == o ? void 0 : o.isError,
            isPending: null == o ? void 0 : o.isPending,
          };
        },
        u = function () {
          let {
              prefetchNextMonth: e,
              username: t,
              eventSlug: l,
              eventId: s,
              month: d,
              duration: u,
              monthCount: c,
              dayCount: m,
              selectedDate: v,
              orgSlug: g,
              teamMemberEmail: h,
              isTeamEvent: f,
              useApiV2: p = !0,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            { timezone: b } = (0, o.v)(),
            [x, y, S, N] = (0, n.Mu)(
              (e) => [e.username, e.eventSlug, e.month, e.selectedDuration],
              a.x
            ),
            k = (0, r.O)(),
            T = null == k ? void 0 : k.get("rescheduleUid"),
            I = (0, i.r)({
              username: null != x ? x : t,
              eventSlug: null != y ? y : l,
              eventId: s,
              timezone: b,
              selectedDate: v,
              prefetchNextMonth: e,
              monthCount: c,
              dayCount: m,
              rescheduleUid: T,
              month: null != S ? S : d,
              duration: null != N ? N : u,
              isTeamEvent: f,
              orgSlug: g,
              teamMemberEmail: h,
              useApiV2: p,
            });
          return {
            data: null == I ? void 0 : I.data,
            isPending: null == I ? void 0 : I.isPending,
            isError: null == I ? void 0 : I.isError,
            isSuccess: null == I ? void 0 : I.isSuccess,
            isLoading: null == I ? void 0 : I.isLoading,
            invalidate: null == I ? void 0 : I.invalidate,
          };
        };
    },
    3593: (e, t, l) => {
      l.d(t, { z: () => a });
      let a = (0, l(74582).vt)((e) => ({
        overlayBusyDates: void 0,
        setOverlayBusyDates: (t) => {
          e({ overlayBusyDates: t });
        },
        calendarSettingsOverlayModal: !1,
        setCalendarSettingsOverlayModal: (t) => {
          e({ calendarSettingsOverlayModal: t });
        },
        continueWithProviderModal: !1,
        setContinueWithProviderModal: (t) => {
          e({ continueWithProviderModal: t });
        },
      }));
    },
    6888: (e, t, l) => {
      l.d(t, { u: () => a });
      let a = (e, t, l) => {
        var a, n;
        let i = e.metadata,
          r = (null == i ? void 0 : i.apps) && i.apps[t];
        if (r)
          return l || r.enabled
            ? {
                ...r,
                price: e.price || r.price || null,
                currency: e.currency || r.currency || null,
                TRACKING_ID: r.TRACKING_ID || r.trackingId || null,
              }
            : null;
        let s = {
          stripe: {
            enabled: !!e.price,
            price: e.price,
            currency: e.currency,
            paymentOption: "ON_BOOKING",
          },
          giphy: {
            enabled: !!(null == (a = e.metadata)
              ? void 0
              : a.giphyThankYouPage),
            thankYouPage:
              (null == (n = e.metadata) ? void 0 : n.giphyThankYouPage) || "",
          },
        }[t];
        return l || (null == s ? void 0 : s.enabled) ? s : null;
      };
    },
    7860: (e, t, l) => {
      l.d(t, { t: () => i });
      var a = l(54568),
        n = l(43328);
      let i = (e) => {
        let {
            showExact: t = !0,
            bookedSeats: l,
            totalSeats: i,
            variant: r = "whole",
          } = e,
          { t: s } = (0, n.Y)(),
          o = i - l;
        return (0, a.jsx)("span", {
          className: "truncate",
          children: t
            ? ""
                .concat(o)
                .concat("fraction" === r ? " / ".concat(i) : "", " ")
                .concat(s("seats_available", { count: o }))
            : l / i >= 0.83
            ? s("seats_nearly_full")
            : l / i >= 0.5
            ? s("seats_half_full")
            : s("seats_available", { count: o }),
        });
      };
    },
    18684: (e, t, l) => {
      l.d(t, { Y: () => I, v: () => w });
      var a = l(54568),
        n = l(21725),
        i = l(53442),
        r = l(96683),
        s = l(7620),
        o = l(68452),
        d = l(83160),
        u = l(24805),
        c = l(14530),
        m = l(61366),
        v = l(43328),
        g = l(54125),
        h = l(50441),
        f = l(18511),
        p = l(8949),
        b = l(24141),
        x = l(40516),
        y = l(89236),
        S = l(3593);
      function N(e) {
        let t = e.getHours().toString().padStart(2, "0"),
          l = e.getMinutes().toString().padStart(2, "0");
        return "".concat(t, ":").concat(l);
      }
      var k = l(7860);
      let T = (e) => {
          var t;
          let {
              slot: l,
              seatsPerTimeSlot: d,
              selectedSlots: m,
              onTimeSelect: p,
              showAvailableSeatsCount: b,
              event: T,
              customClassNames: I,
              loadingStates: O,
              renderConfirmNotVerifyEmailButtonCond: w,
              isVerificationCodeSending: j,
              skipConfirmStep: C,
              shouldRenderCaptcha: _,
              watchedCfToken: E,
              handleSlotClick: R,
              onTentativeTimeSelect: A,
              unavailableTimeSlots: B = [],
              confirmButtonDisabled: M,
              confirmStepClassNames: D,
            } = e,
            { t: L } = (0, v.Y)(),
            { data: F } = T,
            P = (0, s.useMemo)(() => {
              if (!(null == F ? void 0 : F.price)) return !1;
              let e = (0, o.C)(F);
              return (
                (null == F ? void 0 : F.price) > 0 &&
                !Number.isNaN(e.price) &&
                e.price > 0
              );
            }, [F]),
            U =
              "true" === (0, y.qn)("overlayCalendar") ||
              g.L.getItem("overlayCalendarSwitchDefault"),
            { timeFormat: H, timezone: Y } = (0, x.v)(),
            z = (0, c.Mu)((e) => e.bookingData),
            W = (0, c.Mu)((e) => e.layout),
            V = !!d,
            q = u.A.utc(l.time).tz(Y),
            G = !!(V && l.attendees && l.attendees >= d),
            Z = l.attendees && d && l.attendees / d >= 0.5,
            K = l.attendees && d && l.attendees / d >= 0.83,
            Q = (0, u.A)(),
            $ = (Q.tz(Y).utcOffset() - Q.utcOffset()) / 60,
            J = (0, c.Mu)((e) => e.selectedTimeslot),
            {
              isOverlapping: X,
              overlappingTimeEnd: ee,
              overlappingTimeStart: et,
            } = (function (e) {
              let { start: t, selectedDuration: l, offset: a } = e,
                n = (0, S.z)((e) => e.overlayBusyDates),
                i = null,
                r = null;
              return {
                isOverlapping:
                  n &&
                  n.some((e) => {
                    let n = (0, u.A)(e.start),
                      s = (0, u.A)(e.end),
                      o = (0, u.A)(t.add(a, "hours")).add(
                        null != l ? l : 0,
                        "minute"
                      ),
                      d =
                        (o.isSame(n) || o.isAfter(n)) &&
                        t.add(a, "hours") < s &&
                        o > n;
                    return (
                      (i = d ? N(n.toDate()) : null),
                      (r = d ? N(s.toDate()) : null),
                      d
                    );
                  }),
                overlappingTimeStart: i,
                overlappingTimeEnd: r,
              };
            })({
              start: q,
              selectedDuration:
                null != (t = null == F ? void 0 : F.length) ? t : 0,
              offset: $,
            }),
            el = B.includes(l.time);
          return (0, a.jsx)(i.N, {
            children: (0, a.jsxs)("div", {
              className: "flex gap-2",
              children: [
                (0, a.jsxs)(
                  f.$,
                  {
                    disabled:
                      G ||
                      !!(
                        l.bookingUid &&
                        l.bookingUid === (null == z ? void 0 : z.uid)
                      ) ||
                      (null == O ? void 0 : O.creatingBooking) ||
                      (null == O ? void 0 : O.creatingRecurringBooking) ||
                      j ||
                      (null == O ? void 0 : O.creatingInstantBooking) ||
                      (C && !!_ && !E) ||
                      el,
                    "data-testid": "time",
                    "data-disabled": G,
                    "data-time": l.time,
                    onClick: () => {
                      R && R(l, X),
                        A &&
                          A({
                            time: l.time,
                            attendees: l.attendees || 0,
                            seatsPerTimeSlot: d,
                          });
                    },
                    className: (0, h.A)(
                      "hover:border-brand-default min-h-9 mb-2 flex h-auto w-full flex-grow flex-col justify-center py-2",
                      (null == m ? void 0 : m.includes(l.time)) &&
                        "border-brand-default",
                      "".concat(I)
                    ),
                    color: "secondary",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          !V &&
                            U &&
                            (0, a.jsx)("span", {
                              className: (0, h.A)(
                                "inline-block h-2 w-2 rounded-full",
                                X ? "bg-rose-600" : "bg-emerald-400"
                              ),
                            }),
                          q.format(H),
                        ],
                      }),
                      G &&
                        (0, a.jsx)("p", {
                          className: "text-sm",
                          children: L("booking_full"),
                        }),
                      V &&
                        !G &&
                        (0, a.jsxs)("p", {
                          className: "flex items-center text-sm",
                          children: [
                            (0, a.jsx)("span", {
                              className: (0, h.A)(
                                K
                                  ? "bg-rose-600"
                                  : Z
                                  ? "bg-yellow-500"
                                  : "bg-emerald-400",
                                "mr-1 inline-block h-2 w-2 rounded-full"
                              ),
                              "aria-hidden": !0,
                            }),
                            (0, a.jsx)(k.t, {
                              showExact: !!b,
                              totalSeats: d,
                              bookedSeats: l.attendees || 0,
                            }),
                          ],
                        }),
                    ],
                  },
                  l.time
                ),
                !!l.showConfirmButton &&
                  (0, a.jsxs)(n.bL, {
                    children: [
                      (0, a.jsx)(n.l9, {
                        asChild: !0,
                        children: (0, a.jsx)(
                          r.m.div,
                          {
                            initial: { width: 0 },
                            animate: { width: "auto" },
                            exit: { width: 0 },
                            children: (0, a.jsx)(f.$, {
                              variant: "column_view" === W ? "icon" : "button",
                              StartIcon:
                                "column_view" === W ? "chevron-right" : void 0,
                              type: "button",
                              className: null == D ? void 0 : D.confirmButton,
                              onClick: () =>
                                p &&
                                p(
                                  l.time,
                                  (null == l ? void 0 : l.attendees) || 0,
                                  d,
                                  l.bookingUid
                                ),
                              "data-testid": "skip-confirm-book-button",
                              disabled:
                                el ||
                                (!!_ && !E) ||
                                (null == O ? void 0 : O.creatingBooking) ||
                                (null == O
                                  ? void 0
                                  : O.creatingRecurringBooking) ||
                                j ||
                                (null == O
                                  ? void 0
                                  : O.creatingInstantBooking) ||
                                M,
                              color: "primary",
                              loading:
                                (J === l.time &&
                                  (null == O ? void 0 : O.creatingBooking)) ||
                                (null == O
                                  ? void 0
                                  : O.creatingRecurringBooking) ||
                                j ||
                                (null == O ? void 0 : O.creatingInstantBooking),
                              children:
                                "column_view" === W
                                  ? ""
                                  : L(
                                      el
                                        ? "timeslot_unavailable_short"
                                        : w
                                        ? P
                                          ? "pay_and_book"
                                          : "confirm"
                                        : "verify_email_button"
                                    ),
                            }),
                          },
                          l.time
                        ),
                      }),
                      X &&
                        (0, a.jsx)(n.ZL, {
                          children: (0, a.jsx)(n.UC, {
                            side: "top",
                            align: "end",
                            sideOffset: 2,
                            children: (0, a.jsxs)("div", {
                              className:
                                "text-emphasis bg-inverted w-[var(--booker-timeslots-width)] rounded-md p-3",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "flex items-center gap-2",
                                  children: (0, a.jsx)("p", {
                                    children: "Busy",
                                  }),
                                }),
                                (0, a.jsxs)("p", {
                                  className: "text-muted",
                                  children: [et, " - ", ee],
                                }),
                              ],
                            }),
                          }),
                        }),
                    ],
                  }),
              ],
            }),
          });
        },
        I = (e) => {
          let {
              slots: t,
              showTimeFormatToggle: l = !0,
              className: n,
              ...i
            } = e,
            { t: r } = (0, v.Y)();
          if (t.every((e) => e.away)) return (0, a.jsx)(O, { ...t[0] });
          let s = t[0] && t[0].away,
            o = t[t.length - 1] && t[t.length - 1].away;
          return (0, a.jsx)("div", {
            className: (0, h.A)("text-default flex flex-col", n),
            children: (0, a.jsxs)("div", {
              className: "h-full pb-4",
              children: [
                !t.length &&
                  (0, a.jsxs)("div", {
                    "data-testId": "no-slots-available",
                    className:
                      "bg-subtle border-subtle flex h-full flex-col items-center rounded-md border p-6 dark:bg-transparent",
                    children: [
                      (0, a.jsx)(p.A, {
                        name: "calendar-x-2",
                        className: "text-muted mb-2 h-4 w-4",
                      }),
                      (0, a.jsx)("p", {
                        className: (0, h.A)(
                          "text-muted",
                          l ? "-mt-1 text-lg" : "text-sm"
                        ),
                        children: r("all_booked_today"),
                      }),
                    ],
                  }),
                s && !o && (0, a.jsx)(O, { ...t[0] }),
                t.map((e) =>
                  e.away ? null : (0, a.jsx)(T, { slot: e, ...i }, e.time)
                ),
                o &&
                  !s &&
                  (0, a.jsx)(O, { ...t[t.length - 1], className: "pb-0" }),
              ],
            }),
          });
        },
        O = (e) => {
          let t = (0, d.X)(),
            {
              fromUser: l,
              toUser: n,
              reason: i,
              emoji: r,
              time: s,
              className: o = "",
            } = e;
          return t
            ? (0, a.jsx)(a.Fragment, {})
            : (0, a.jsx)(m.a, {
                fromUser: l,
                toUser: n,
                date: (0, u.A)(s).format("YYYY-MM-DD"),
                reason: i,
                emoji: r,
                borderDashed: !0,
                className: o,
              });
        },
        w = () =>
          (0, a.jsx)("div", {
            className: "flex w-[20%] flex-col only:w-full",
            children: Array.from({
              length: Math.floor(6 * Math.random()) + 1,
            }).map((e, t) =>
              (0, a.jsx)(b.rr, { className: "mb-4 h-6 w-full" }, t)
            ),
          });
    },
    22339: (e, t, l) => {
      l.d(t, { R: () => a });
      let a = (e) => {
        let t = e.get("cal.routedTeamMemberIds");
        return "string" == typeof t
          ? t
              .split(",")
              .filter(Boolean)
              .map((e) => parseInt(e, 10))
          : null;
      };
    },
    34444: (e, t, l) => {
      l.d(t, {
        Hg: () => i,
        L7: () => d,
        Mb: () => r,
        RL: () => s,
        d4: () => o,
        oF: () => u,
      });
      var a = l(54125);
      let n = "timeOption.is24hClock";
      var i = (function (e) {
        return (e.TWELVE_HOUR = "h:mma"), (e.TWENTY_FOUR_HOUR = "HH:mm"), e;
      })({});
      let r = (e) => a.L.setItem(n, e.toString()),
        s = () => {
          let e = a.L.getItem(n);
          return null === e ? null : "true" === e;
        },
        o = (e) => (24 === e ? "HH:mm" : "h:mma"),
        d = () => {
          let e = s();
          return (
            !0 === e ||
            (!1 !== e &&
              (new Intl.DateTimeFormat(void 0, { hour: "numeric" })
                .format(0)
                .match(/M/i)
                ? (r(!1), !1)
                : (r(!0), !0)))
          );
        },
        u = d() ? "HH:mm" : "h:mma";
    },
    38816: (e, t, l) => {
      l.d(t, { $: () => o });
      var a = l(54568),
        n = l(43328),
        i = l(34444),
        r = l(79970),
        s = l(84e3);
      let o = (e) => {
        let { customClassName: t } = e,
          l = (0, s.x)((e) => e.timeFormat),
          o = (0, s.x)((e) => e.setTimeFormat),
          { t: d } = (0, n.Y)();
        return (0, a.jsx)(r.O, {
          customClassNames: t,
          onValueChange: (e) => {
            e && e !== l && o(e);
          },
          defaultValue: l,
          value: l,
          options: [
            { value: i.Hg.TWELVE_HOUR, label: d("12_hour_short") },
            { value: i.Hg.TWENTY_FOUR_HOUR, label: d("24_hour_short") },
          ],
        });
      };
    },
    40516: (e, t, l) => {
      l.d(t, { v: () => r });
      var a = l(95622),
        n = l(14530),
        i = l(84e3);
      let r = () => {
        let [e] = (0, n.Mu)((e) => [e.timezone], a.x),
          { timezone: t, timeFormat: l } = (0, i.x)();
        return {
          timezone: ((e) => {
            let { storeTimezone: t, bookerUserPreferredTimezone: l } = e;
            return null != t ? t : l;
          })({ storeTimezone: e, bookerUserPreferredTimezone: t }),
          timeFormat: l,
          timezoneFromBookerStore: e,
          timezoneFromTimePreferences: t,
        };
      };
    },
    47755: (e, t, l) => {
      l.d(t, { r: () => S });
      var a = l(27541),
        n = l(62117),
        i = l(93180),
        r = l(29207),
        s = l(56085),
        o = l(24805),
        d = l(22339),
        u = l(66339),
        c = l(68805),
        m = l(82017),
        v = l(53789),
        g = l(96968),
        h = l(12056);
      ({
        ...{
          isDynamic: !0,
          periodCountCalendarDays: !0,
          periodStartDate: null,
          periodEndDate: null,
          beforeEventBuffer: 0,
          afterEventBuffer: 0,
          periodType: g.YZ.UNLIMITED,
          periodDays: null,
          slotInterval: null,
          offsetStart: 0,
          locations: [{ type: c.Xz }],
          customInputs: [],
          disableGuests: !0,
          minimumBookingNotice: 120,
          schedule: null,
          timeZone: null,
          successRedirectUrl: "",
          forwardParamsSuccessRedirect: !0,
          teamId: null,
          scheduleId: null,
          availability: [],
          price: 0,
          currency: "usd",
          schedulingType: g.PI.COLLECTIVE,
          seatsPerTimeSlot: null,
          seatsShowAttendees: null,
          seatsShowAvailabilityCount: null,
          disableCancelling: !1,
          disableRescheduling: !1,
          onlyShowFirstAvailableSlot: !1,
          allowReschedulingPastBookings: !1,
          allowReschedulingCancelledBookings: !1,
          hideOrganizerEmail: !1,
          showOptimizedSlots: !1,
          id: 0,
          hideCalendarNotes: !1,
          hideCalendarEventDetails: !1,
          recurringEvent: null,
          destinationCalendar: null,
          team: null,
          lockTimeZoneToggleOnBookingPage: !1,
          lockedTimeZone: null,
          requiresConfirmation: !1,
          requiresConfirmationForFreeEmail: !1,
          requiresBookerEmailVerification: !1,
          bookingLimits: null,
          maxActiveBookingsPerBooker: null,
          maxActiveBookingPerBookerOfferReschedule: !1,
          durationLimits: null,
          hidden: !1,
          userId: 0,
          parentId: null,
          parent: null,
          owner: null,
          workflows: [],
          users: [
            {
              metadata: null,
              theme: null,
              credentials: [],
              username: "john.doe",
              timeZone: "",
              bufferTime: 0,
              availability: [],
              id: 0,
              startTime: 0,
              endTime: 0,
              allSelectedCalendars: [],
              userLevelSelectedCalendars: [],
              schedules: [],
              defaultScheduleId: null,
              locale: "en",
              email: "john.doe@example.com",
              name: "John doe",
              destinationCalendar: null,
              hideBranding: !0,
              brandColor: "#797979",
              darkBrandColor: "#efefef",
              allowDynamicBooking: !0,
              timeFormat: 12,
              travelSchedules: [],
              locked: !1,
              isPlatformManaged: !1,
            },
          ],
          hosts: [],
          subsetOfHosts: [],
          metadata: h.N8.parse({}),
          bookingFields: [],
          assignAllTeamMembers: !1,
          assignRRMembersUsingSegment: !1,
          rrSegmentQueryValue: null,
          isRRWeightsEnabled: !1,
          rescheduleWithSameRoundRobinHost: !1,
          useEventTypeDestinationCalendarEmail: !1,
          secondaryEmailId: null,
          secondaryEmail: null,
          autoTranslateDescriptionEnabled: !1,
          fieldTranslations: [],
          maxLeadThreshold: null,
          includeNoShowInRRCalculation: !1,
          useEventLevelSelectedCalendars: !1,
          rrResetInterval: null,
          rrTimestampBasis: null,
          interfaceLanguage: null,
          customReplyToEmail: null,
          restrictionScheduleId: null,
          useBookerTimezone: !1,
          profileId: null,
          profile: null,
          requiresConfirmationWillBlockSlot: !1,
          canSendCalVideoTranscriptionEmails: !1,
          instantMeetingExpiryTimeOffsetInSeconds: 0,
          instantMeetingScheduleId: null,
          instantMeetingParameters: [],
          eventTypeColor: null,
          hostGroups: [],
          bookingRequiresAuthentication: !1,
          createdAt: null,
          updatedAt: null,
        },
        metadata: m.dv.parse({ multipleDuration: [15, 30, 45, 60, 90] }),
      });
      var f = l(35573),
        p = l(27736),
        b = l(84594),
        x = l.n(b);
      let y = (e) => {
          let { eventId: t, eventSlug: l } = e;
          return { eventId: t, eventSlug: l };
        },
        S = (e) => {
          var t, l;
          let {
              month: c,
              timezone: m,
              username: g,
              eventSlug: h,
              eventId: b,
              selectedDate: S,
              prefetchNextMonth: N,
              duration: k,
              monthCount: T,
              dayCount: I,
              rescheduleUid: O,
              isTeamEvent: w,
              orgSlug: j,
              teamMemberEmail: C,
              useApiV2: _ = !1,
              enabled: E = !0,
            } = e,
            R = (0, r.JH)((e) => e.state),
            [A, B] = ((e) => {
              let t,
                l,
                {
                  month: a,
                  monthCount: n,
                  selectedDate: i,
                  dayCount: r,
                  prefetchNextMonth: s,
                } = e,
                d = (0, o.A)(),
                u = a ? (0, o.A)(a) : d,
                c = u.add(n || 1, "month");
              return (
                r && r > 0
                  ? i
                    ? ((t = (0, o.A)(i).toISOString()),
                      (l = (0, o.A)(i).add(r, "day").toISOString()))
                    : u.month() === d.month()
                    ? ((t = d.startOf("day").toISOString()),
                      (l = d.startOf("day").add(r, "day").toISOString()))
                    : ((t = u.startOf("month").toISOString()),
                      (l = u.startOf("month").add(r, "day").toISOString()))
                  : ((t = u.startOf("month").toISOString()),
                    (l = (s ? c : u).endOf("month").toISOString())),
                [t, l]
              );
            })({
              month: c,
              monthCount: T,
              dayCount: I,
              prefetchNextMonth: N,
              selectedDate: S,
            }),
            M = (0, a.useSearchParams)(),
            D = M ? (0, d.R)(new URLSearchParams(M.toString())) : null,
            L = !!M && "true" === M.get("cal.skipContactOwner"),
            F = f.i.useUtils(),
            P = null == M ? void 0 : M.get("cal.routingFormResponseId"),
            U = null == M ? void 0 : M.get("cal.queuedFormResponseId"),
            H = null == M ? void 0 : M.get("email"),
            Y = (null == M ? void 0 : M.get("cal.skipSlotsFetch")) === "true",
            z = P ? parseInt(P, 10) : void 0,
            W = (null == M ? void 0 : M.get("cal.embed.connectVersion")) || "0",
            V = {
              isTeamEvent: w,
              usernameList: ((e) => {
                let t = (e = ((e) => (Array.isArray(e) ? e : e ? [e] : []))(e))
                  .map((e) => e.replace(/( |%20|%2b)/gi, "+").split("+"))
                  .flat()
                  .filter(Boolean);
                return Array.prototype.concat(...t.map((e) => (0, v.A)(e)));
              })(null != g ? g : ""),
              ...(h
                ? { eventTypeSlug: h }
                : { eventTypeId: null != b ? b : 0 }),
              startTime: A,
              endTime: B,
              timeZone: m,
              duration: k ? "".concat(k) : void 0,
              rescheduleUid: O,
              orgSlug: j,
              teamMemberEmail: C,
              routedTeamMemberIds: D,
              skipContactOwner: L,
              ...(U
                ? { queuedFormResponseId: U }
                : { routingFormResponseId: z }),
              email: H,
              ...(W ? { embedConnectVersion: W } : {}),
              _isDryRun: !!M && (0, s.C)(M),
            },
            q = {
              trpc: { context: { skipBatch: !0 } },
              refetchOnWindowFocus: !0,
              refetchInterval: 1e3 * u.VY,
              enabled: !Y && !!g && !!c && !!m && (!!h || !!b || 0 === b) && E,
            },
            G = _ && !!w && q.enabled,
            Z = ((e) => {
              var t, l, a;
              let { enabled: n, ...i } = e;
              return (0, p.I)({
                queryKey: [
                  "get-available-slots",
                  i.startTime,
                  i.endTime,
                  i.eventTypeId,
                  i.eventTypeSlug,
                  null != (t = i.isTeamEvent) && t,
                  null != (l = i.teamId) && l,
                  i.usernameList,
                  i.routedTeamMemberIds,
                  i.skipContactOwner,
                  i.teamMemberEmail,
                  null != (a = i.embedConnectVersion) && a,
                ],
                queryFn: () =>
                  x()
                    .get("/api/v2/slots/available", { params: i })
                    .then((e) => {
                      if ("success" === e.data.status) return e.data.data;
                      throw Error(e.data.error.message);
                    }),
                enabled: n,
              });
            })({
              ...V,
              enabled: G,
              duration: V.duration ? Number(V.duration) : void 0,
              routedTeamMemberIds:
                null != (t = V.routedTeamMemberIds) ? t : void 0,
              teamMemberEmail: null != (l = V.teamMemberEmail) ? l : void 0,
              eventTypeId: null != b ? b : void 0,
            }),
            K = f.i.viewer.slots.getSchedule.useQuery(V, {
              ...q,
              enabled: q.enabled && !G,
            });
          return G && !Z.failureReason
            ? ((0, n.IR)({ bookerState: R, slotsQuery: Z }),
              Z.isSuccess &&
                b &&
                h &&
                (null === i.i ||
                  void 0 === i.i ||
                  i.i.fire(
                    "availabilityLoaded",
                    y({ eventId: b, eventSlug: h })
                  )),
              { ...Z, invalidate: () => Z.refetch() })
            : ((0, n.IR)({ bookerState: R, slotsQuery: K }),
              K.isSuccess &&
                b &&
                h &&
                (null === i.i ||
                  void 0 === i.i ||
                  i.i.fire(
                    "availabilityLoaded",
                    y({ eventId: b, eventSlug: h })
                  )),
              {
                ...K,
                invalidate: () => F.viewer.slots.getSchedule.invalidate(V),
              });
        };
    },
    56085: (e, t, l) => {
      l.d(t, { C: () => a });
      let a = (e) => "true" === e.get("cal.isBookingDryRun");
    },
    56796: (e, t, l) => {
      l.d(t, { p: () => m });
      var a = l(54568),
        n = l(95622),
        i = l(24805),
        r = l(14530),
        s = l(43328),
        o = l(29260),
        d = l(12056),
        u = l(50441),
        c = l(38816);
      let m = (e) => {
        let {
            date: t,
            showTimeFormatToggle: l = !0,
            availableMonth: m,
            customClassNames: v,
          } = e,
          { t: g, i18n: h } = (0, s.Y)(),
          [f] = (0, r.Mu)((e) => [e.layout], n.x),
          p = f === d.G5.COLUMN_VIEW,
          b = f === d.G5.MONTH_VIEW,
          x = (0, i.A)().isSame(t, "day");
        return (0, a.jsxs)("header", {
          className: (0, u.A)(
            "dark:bg-muted dark:before:bg-muted mb-3 flex w-full flex-row items-center font-medium",
            "bg-default before:bg-default",
            null == v ? void 0 : v.availableTimeSlotsHeaderContainer
          ),
          children: [
            (0, a.jsxs)("span", {
              className: (0, u.A)(
                p && "w-full text-center",
                p
                  ? "text-subtle text-xs uppercase"
                  : "text-emphasis font-semibold"
              ),
              children: [
                (0, a.jsx)("span", {
                  className: (0, u.A)(
                    x &&
                      !(null == v ? void 0 : v.availableTimeSlotsTitle) &&
                      "!text-default",
                    null == v ? void 0 : v.availableTimeSlotsTitle
                  ),
                  children: (0, o.r)(
                    h.language,
                    Number(t.format("d")),
                    "short"
                  ),
                }),
                (0, a.jsxs)("span", {
                  className: (0, u.A)(
                    p && x && "bg-brand-default text-brand ml-2",
                    "inline-flex items-center justify-center rounded-3xl px-1 pt-0.5 font-medium",
                    b
                      ? "text-default text-sm ".concat(
                          null == v ? void 0 : v.availableTimeSlotsTitle
                        )
                      : "text-xs ".concat(
                          null == v ? void 0 : v.availableTimeSlotsTitle
                        )
                  ),
                  children: [t.format("DD"), m && ", ".concat(m)],
                }),
              ],
            }),
            l &&
              (0, a.jsx)("div", {
                className: "ml-auto rtl:mr-auto",
                children: (0, a.jsx)(c.$, {
                  customClassName:
                    null == v ? void 0 : v.availableTimeSlotsTimeFormatToggle,
                }),
              }),
          ],
        });
      };
    },
    61366: (e, t, l) => {
      l.d(t, { a: () => u });
      var a = l(54568),
        n = l(27541),
        i = l(84096),
        r = l(26682),
        s = l(43328),
        o = l(50441),
        d = l(18511);
      let u = (e) => {
        let { t } = (0, s.Y)(),
          {
            fromUser: l,
            toUser: u,
            emoji: c = "\uD83C\uDFDD️",
            borderDashed: m = !0,
            date: v,
            className: g,
          } = e,
          h = (0, r.O)(),
          f = (0, n.useRouter)();
        return l && u
          ? (0, a.jsx)("div", {
              className: (0, o.A)("relative h-full pb-5", g),
              children: (0, a.jsxs)("div", {
                className: (0, o.A)(
                  "flex h-full flex-col items-center justify-start rounded-md border bg-white px-4 py-4 font-normal dark:bg-transparent",
                  m && "border-dashed"
                ),
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "bg-emphasis flex h-14 w-14 flex-col items-center justify-center rounded-full",
                    children: (0, a.jsx)("span", {
                      className: "m-auto text-center text-lg",
                      children: c,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-2 text-center",
                    children: [
                      (0, a.jsx)("p", {
                        className: "mt-2 text-base font-bold",
                        children: t("ooo_user_is_ooo", {
                          displayName: l.displayName,
                        }),
                      }),
                      (null == l ? void 0 : l.displayName) &&
                        (null == u ? void 0 : u.displayName) &&
                        (0, a.jsx)("p", {
                          className: "text-center text-sm",
                          children: (0, a.jsx)(i.A, {
                            t: t,
                            i18nKey: "ooo_slots_returning",
                            values: { displayName: u.displayName },
                            components: [
                              (0, a.jsx)(
                                "strong",
                                { children: "username" },
                                "username"
                              ),
                            ],
                          }),
                        }),
                    ],
                  }),
                  (null == u ? void 0 : u.id) &&
                    (0, a.jsx)(d.$, {
                      className: "mt-8 max-w-[90%]",
                      variant: "button",
                      color: "secondary",
                      onClick: () => {
                        let e = h.get("month"),
                          t = h.get("layout"),
                          l = h.get("date") || v;
                        f.push(
                          "/"
                            .concat(u.username, "?")
                            .concat(e ? "month=".concat(e, "&") : "", "date=")
                            .concat(l)
                            .concat(t ? "&layout=".concat(t) : "")
                        );
                      },
                      children: (0, a.jsx)("span", {
                        className:
                          "block overflow-hidden text-ellipsis whitespace-nowrap",
                        children: t("ooo_slots_book_with", {
                          displayName: u.displayName,
                        }),
                      }),
                    }),
                ],
              }),
            })
          : null;
      };
    },
    63036: (e, t, l) => {
      l.d(t, { k: () => n });
      var a = l(7620);
      let n = (e) =>
        (0, a.useMemo)(
          () =>
            ((e) => {
              if (void 0 === e) return [];
              let t = [];
              return (
                Object.keys(e).forEach((l) => {
                  e[l].some(
                    (t) =>
                      !((null == t ? void 0 : t.away) && !t.toUser) &&
                      e[l].length > 0
                  ) && t.push(l);
                }),
                t
              );
            })(e),
          [e]
        );
    },
    68452: (e, t, l) => {
      l.d(t, { C: () => i });
      var a = l(82017),
        n = l(6888);
      function i(e, t) {
        var l;
        let i = { ...e, metadata: a.dv.parse(e.metadata) },
          r = null == (l = i.metadata) ? void 0 : l.apps;
        if (!r) return { enabled: !1, price: 0, currency: "usd", appId: null };
        let s = Object.keys(r).filter((e) => {
            var t, l;
            return (
              (null == (t = r[e]) ? void 0 : t.price) &&
              (null == (l = r[e]) ? void 0 : l.enabled)
            );
          }),
          o = null;
        for (let e of s) {
          let l = (0, n.u)(i, e, t);
          l && null === o && (o = { ...l, appId: e });
        }
        return (
          o || {
            enabled: !1,
            price: 0,
            currency: "usd",
            appId: null,
            paymentOption: "ON_BOOKING",
            credentialId: void 0,
            refundPolicy: void 0,
            refundDaysCount: void 0,
            refundCountCalendarDays: void 0,
          }
        );
      }
    },
    68805: (e, t, l) => {
      l.d(t, { Xz: () => n, f3: () => a });
      let a = "integrations:google:meet",
        n = "integrations:daily";
    },
    80766: (e, t, l) => {
      l.d(t, { s: () => n, y: () => i });
      var a = l(7620);
      let n = (e, t) =>
          (0, a.useMemo)(() => (e && void 0 !== t && t[e]) || [], [e, t]),
        i = (e, t) => {
          let [l, n] = (0, a.useState)([]),
            i = (0, a.useCallback)((e) => {
              n((t) =>
                t.map((t) => {
                  let { date: l, slots: a } = t;
                  return {
                    date: l,
                    slots: a.map((t) => ({
                      ...t,
                      showConfirmButton:
                        t.time === e.time &&
                        !(null == e ? void 0 : e.showConfirmButton),
                    })),
                  };
                })
              );
            }, []);
          return (
            (0, a.useEffect)(() => {
              if (void 0 === t) return void n([]);
              n(
                e
                  .filter((e) => null !== e)
                  .map((e) => ({ slots: t["".concat(e)] || [], date: e }))
              );
            }, [JSON.stringify(e), JSON.stringify(t)]),
            { slotsPerDay: l, setSlotsPerDay: n, toggleConfirmButton: i }
          );
        };
    },
    84e3: (e, t, l) => {
      l.d(t, { x: () => o });
      var a = l(74582),
        n = l(34444),
        i = l(88310),
        r = l(54125);
      let s = "timeOption.preferredTimeZone",
        o = (0, a.vt)((e) => ({
          timeFormat: n.oF,
          setTimeFormat: (t) => {
            (0, n.Mb)(t === n.Hg.TWENTY_FOUR_HOUR), e({ timeFormat: t });
          },
          timezone: r.L.getItem(s) || i.m,
          setTimezone: (t) => {
            r.L.setItem(s, t), e({ timezone: t });
          },
        }));
    },
  },
]);
//# sourceMappingURL=83290-f23066429253ac8a.js.map
