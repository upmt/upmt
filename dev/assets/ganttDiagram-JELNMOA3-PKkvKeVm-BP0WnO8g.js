import { p, d as $y, a as My, s as Fy, r as Ey, e as Ly, g as Ay, f as ft$1, h as ht$1, i as Gh, U as d0, F, Q as Qr$1, j as AC, y as By, V as uu, o as ce, W as Vt$1, Y as Ab, Z as Ro, a0 as lu, a1 as Vi$1, a2 as hL, c as c0 } from "./SynchronicGraphPage-wl_V0g4E.js";
import { f as fn$1, u as un, e as en$1, R, C } from "./linear-Zeq4wv93-C-QAtfle.js";
import { t } from "./init-DjUOC4st-BkHeCwco.js";
import "./QPage-D7v6KNKk.js";
import "./index-iDicJdS9.js";
import "./QBtnToggle-DEhSmupe.js";
import "./QBtnGroup-B0lVKlQv.js";
import "./QToolbar-CRpQoJXQ.js";
import "./export-file-lpTZqdHO.js";
import "./defaultLocale-D7EN2tov-bX63LFCa.js";
function tr(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function er(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function nr(t2) {
  return t2;
}
var Xt = 1, ue = 2, Te = 3, Bt = 4, Ne = 1e-6;
function rr(t2) {
  return "translate(" + t2 + ",0)";
}
function ir(t2) {
  return "translate(0," + t2 + ")";
}
function sr(t2) {
  return (e) => +t2(e);
}
function ar(t2, e) {
  return e = Math.max(0, t2.bandwidth() - e * 2) / 2, t2.round() && (e = Math.round(e)), (n) => +t2(n) + e;
}
function or() {
  return !this.__axis;
}
function ln(t2, e) {
  var n = [], r = null, i = null, a = 6, c = 6, m = 3, Y = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, C2 = t2 === Xt || t2 === Bt ? -1 : 1, k = t2 === Bt || t2 === ue ? "x" : "y", L = t2 === Xt || t2 === Te ? rr : ir;
  function _(S) {
    var Z = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), A = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : nr), U = Math.max(a, 0) + m, I = e.range(), N = +I[0] + Y, W = +I[I.length - 1] + Y, q = (e.bandwidth ? ar : sr)(e.copy(), Y), j = S.selection ? S.selection() : S, p2 = j.selectAll(".domain").data([null]), g = j.selectAll(".tick").data(Z, e).order(), y = g.exit(), h = g.enter().append("g").attr("class", "tick"), D = g.select("line"), w = g.select("text");
    p2 = p2.merge(p2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), g = g.merge(h), D = D.merge(h.append("line").attr("stroke", "currentColor").attr(k + "2", C2 * a)), w = w.merge(h.append("text").attr("fill", "currentColor").attr(k, C2 * U).attr("dy", t2 === Xt ? "0em" : t2 === Te ? "0.71em" : "0.32em")), S !== j && (p2 = p2.transition(S), g = g.transition(S), D = D.transition(S), w = w.transition(S), y = y.transition(S).attr("opacity", Ne).attr("transform", function(T) {
      return isFinite(T = q(T)) ? L(T + Y) : this.getAttribute("transform");
    }), h.attr("opacity", Ne).attr("transform", function(T) {
      var v = this.parentNode.__axis;
      return L((v && isFinite(v = v(T)) ? v : q(T)) + Y);
    })), y.remove(), p2.attr("d", t2 === Bt || t2 === ue ? c ? "M" + C2 * c + "," + N + "H" + Y + "V" + W + "H" + C2 * c : "M" + Y + "," + N + "V" + W : c ? "M" + N + "," + C2 * c + "V" + Y + "H" + W + "V" + C2 * c : "M" + N + "," + Y + "H" + W), g.attr("opacity", 1).attr("transform", function(T) {
      return L(q(T) + Y);
    }), D.attr(k + "2", C2 * a), w.attr(k, C2 * U).text(A), j.filter(or).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === ue ? "start" : t2 === Bt ? "end" : "middle"), j.each(function() {
      this.__axis = q;
    });
  }
  return _.scale = function(S) {
    return arguments.length ? (e = S, _) : e;
  }, _.ticks = function() {
    return n = Array.from(arguments), _;
  }, _.tickArguments = function(S) {
    return arguments.length ? (n = S == null ? [] : Array.from(S), _) : n.slice();
  }, _.tickValues = function(S) {
    return arguments.length ? (r = S == null ? null : Array.from(S), _) : r && r.slice();
  }, _.tickFormat = function(S) {
    return arguments.length ? (i = S, _) : i;
  }, _.tickSize = function(S) {
    return arguments.length ? (a = c = +S, _) : a;
  }, _.tickSizeInner = function(S) {
    return arguments.length ? (a = +S, _) : a;
  }, _.tickSizeOuter = function(S) {
    return arguments.length ? (c = +S, _) : c;
  }, _.tickPadding = function(S) {
    return arguments.length ? (m = +S, _) : m;
  }, _.offset = function(S) {
    return arguments.length ? (Y = +S, _) : Y;
  }, _;
}
function cr(t2) {
  return ln(Xt, t2);
}
function ur(t2) {
  return ln(Te, t2);
}
const lr = Math.PI / 180, fr = 180 / Math.PI, ee = 18, fn = 0.96422, dn = 1, hn = 0.82521, mn = 4 / 29, Ft = 6 / 29, gn = 3 * Ft * Ft, dr = Ft * Ft * Ft;
function yn(t2) {
  if (t2 instanceof ft) return new ft(t2.l, t2.a, t2.b, t2.opacity);
  if (t2 instanceof ht) return kn(t2);
  t2 instanceof Vt$1 || (t2 = Ab(t2));
  var e = he(t2.r), n = he(t2.g), r = he(t2.b), i = le((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / dn), a, c;
  return e === n && n === r ? a = c = i : (a = le((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / fn), c = le((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / hn)), new ft(116 * i - 16, 500 * (a - i), 200 * (i - c), t2.opacity);
}
function hr(t2, e, n, r) {
  return arguments.length === 1 ? yn(t2) : new ft(t2, e, n, r ?? 1);
}
function ft(t2, e, n, r) {
  this.l = +t2, this.a = +e, this.b = +n, this.opacity = +r;
}
Ro(ft, hr, lu(Vi$1, {
  brighter(t2) {
    return new ft(this.l + ee * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  darker(t2) {
    return new ft(this.l - ee * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t2 = (this.l + 16) / 116, e = isNaN(this.a) ? t2 : t2 + this.a / 500, n = isNaN(this.b) ? t2 : t2 - this.b / 200;
    return e = fn * fe(e), t2 = dn * fe(t2), n = hn * fe(n), new Vt$1(
      de(3.1338561 * e - 1.6168667 * t2 - 0.4906146 * n),
      de(-0.9787684 * e + 1.9161415 * t2 + 0.033454 * n),
      de(0.0719453 * e - 0.2289914 * t2 + 1.4052427 * n),
      this.opacity
    );
  }
}));
function le(t2) {
  return t2 > dr ? Math.pow(t2, 1 / 3) : t2 / gn + mn;
}
function fe(t2) {
  return t2 > Ft ? t2 * t2 * t2 : gn * (t2 - mn);
}
function de(t2) {
  return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
}
function he(t2) {
  return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
}
function mr(t2) {
  if (t2 instanceof ht) return new ht(t2.h, t2.c, t2.l, t2.opacity);
  if (t2 instanceof ft || (t2 = yn(t2)), t2.a === 0 && t2.b === 0) return new ht(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
  var e = Math.atan2(t2.b, t2.a) * fr;
  return new ht(e < 0 ? e + 360 : e, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
}
function be(t2, e, n, r) {
  return arguments.length === 1 ? mr(t2) : new ht(t2, e, n, r ?? 1);
}
function ht(t2, e, n, r) {
  this.h = +t2, this.c = +e, this.l = +n, this.opacity = +r;
}
function kn(t2) {
  if (isNaN(t2.h)) return new ft(t2.l, 0, 0, t2.opacity);
  var e = t2.h * lr;
  return new ft(t2.l, Math.cos(e) * t2.c, Math.sin(e) * t2.c, t2.opacity);
}
Ro(ht, be, lu(Vi$1, {
  brighter(t2) {
    return new ht(this.h, this.c, this.l + ee * (t2 ?? 1), this.opacity);
  },
  darker(t2) {
    return new ht(this.h, this.c, this.l - ee * (t2 ?? 1), this.opacity);
  },
  rgb() {
    return kn(this).rgb();
  }
}));
function gr(t2) {
  return function(e, n) {
    var r = t2((e = be(e)).h, (n = be(n)).h), i = uu(e.c, n.c), a = uu(e.l, n.l), c = uu(e.opacity, n.opacity);
    return function(m) {
      return e.h = r(m), e.c = i(m), e.l = a(m), e.opacity = c(m), e + "";
    };
  };
}
const yr = gr(hL);
function kr(t2, e) {
  t2 = t2.slice();
  var n = 0, r = t2.length - 1, i = t2[n], a = t2[r], c;
  return a < i && (c = n, n = r, r = c, c = i, i = a, a = c), t2[n] = e.floor(i), t2[r] = e.ceil(a), t2;
}
const me = /* @__PURE__ */ new Date(), ge = /* @__PURE__ */ new Date();
function et(t2, e, n, r) {
  function i(a) {
    return t2(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (t2(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (t2(a = new Date(a - 1)), e(a, 1), t2(a), a), i.round = (a) => {
    const c = i(a), m = i.ceil(a);
    return a - c < m - a ? c : m;
  }, i.offset = (a, c) => (e(a = /* @__PURE__ */ new Date(+a), c == null ? 1 : Math.floor(c)), a), i.range = (a, c, m) => {
    const Y = [];
    if (a = i.ceil(a), m = m == null ? 1 : Math.floor(m), !(a < c) || !(m > 0)) return Y;
    let C2;
    do
      Y.push(C2 = /* @__PURE__ */ new Date(+a)), e(a, m), t2(a);
    while (C2 < a && a < c);
    return Y;
  }, i.filter = (a) => et((c) => {
    if (c >= c) for (; t2(c), !a(c); ) c.setTime(c - 1);
  }, (c, m) => {
    if (c >= c)
      if (m < 0) for (; ++m <= 0; )
        for (; e(c, -1), !a(c); )
          ;
      else for (; --m >= 0; )
        for (; e(c, 1), !a(c); )
          ;
  }), n && (i.count = (a, c) => (me.setTime(+a), ge.setTime(+c), t2(me), t2(ge), Math.floor(n(me, ge))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(r ? (c) => r(c) % a === 0 : (c) => i.count(0, c) % a === 0) : i)), i;
}
const Ut = et(() => {
}, (t2, e) => {
  t2.setTime(+t2 + e);
}, (t2, e) => e - t2);
Ut.every = (t2) => (t2 = Math.floor(t2), !isFinite(t2) || !(t2 > 0) ? null : t2 > 1 ? et((e) => {
  e.setTime(Math.floor(e / t2) * t2);
}, (e, n) => {
  e.setTime(+e + n * t2);
}, (e, n) => (n - e) / t2) : Ut);
Ut.range;
const mt = 1e3, ct = mt * 60, gt = ct * 60, yt = gt * 24, Ce = yt * 7, Pe = yt * 30, ye = yt * 365, vt = et((t2) => {
  t2.setTime(t2 - t2.getMilliseconds());
}, (t2, e) => {
  t2.setTime(+t2 + e * mt);
}, (t2, e) => (e - t2) / mt, (t2) => t2.getUTCSeconds());
vt.range;
const $t = et((t2) => {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * mt);
}, (t2, e) => {
  t2.setTime(+t2 + e * ct);
}, (t2, e) => (e - t2) / ct, (t2) => t2.getMinutes());
$t.range;
const pr = et((t2) => {
  t2.setUTCSeconds(0, 0);
}, (t2, e) => {
  t2.setTime(+t2 + e * ct);
}, (t2, e) => (e - t2) / ct, (t2) => t2.getUTCMinutes());
pr.range;
const Ot = et((t2) => {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * mt - t2.getMinutes() * ct);
}, (t2, e) => {
  t2.setTime(+t2 + e * gt);
}, (t2, e) => (e - t2) / gt, (t2) => t2.getHours());
Ot.range;
const vr = et((t2) => {
  t2.setUTCMinutes(0, 0, 0);
}, (t2, e) => {
  t2.setTime(+t2 + e * gt);
}, (t2, e) => (e - t2) / gt, (t2) => t2.getUTCHours());
vr.range;
const bt = et(
  (t2) => t2.setHours(0, 0, 0, 0),
  (t2, e) => t2.setDate(t2.getDate() + e),
  (t2, e) => (e - t2 - (e.getTimezoneOffset() - t2.getTimezoneOffset()) * ct) / yt,
  (t2) => t2.getDate() - 1
);
bt.range;
const Se = et((t2) => {
  t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCDate(t2.getUTCDate() + e);
}, (t2, e) => (e - t2) / yt, (t2) => t2.getUTCDate() - 1);
Se.range;
const Tr = et((t2) => {
  t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCDate(t2.getUTCDate() + e);
}, (t2, e) => (e - t2) / yt, (t2) => Math.floor(t2 / yt));
Tr.range;
function Dt(t2) {
  return et((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t2) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * ct) / Ce);
}
const Pt = Dt(0), Ht = Dt(1), pn = Dt(2), vn = Dt(3), xt = Dt(4), Tn = Dt(5), bn = Dt(6);
Pt.range;
Ht.range;
pn.range;
vn.range;
xt.range;
Tn.range;
bn.range;
function Mt(t2) {
  return et((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t2) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / Ce);
}
const xn = Mt(0), ne = Mt(1), br = Mt(2), xr = Mt(3), Et = Mt(4), wr = Mt(5), Dr = Mt(6);
xn.range;
ne.range;
br.range;
xr.range;
Et.range;
wr.range;
Dr.range;
const Nt = et((t2) => {
  t2.setDate(1), t2.setHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setMonth(t2.getMonth() + e);
}, (t2, e) => e.getMonth() - t2.getMonth() + (e.getFullYear() - t2.getFullYear()) * 12, (t2) => t2.getMonth());
Nt.range;
const Mr = et((t2) => {
  t2.setUTCDate(1), t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCMonth(t2.getUTCMonth() + e);
}, (t2, e) => e.getUTCMonth() - t2.getUTCMonth() + (e.getUTCFullYear() - t2.getUTCFullYear()) * 12, (t2) => t2.getUTCMonth());
Mr.range;
const kt = et((t2) => {
  t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setFullYear(t2.getFullYear() + e);
}, (t2, e) => e.getFullYear() - t2.getFullYear(), (t2) => t2.getFullYear());
kt.every = (t2) => !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : et((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t2) * t2), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t2);
});
kt.range;
const wt = et((t2) => {
  t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCFullYear(t2.getUTCFullYear() + e);
}, (t2, e) => e.getUTCFullYear() - t2.getUTCFullYear(), (t2) => t2.getUTCFullYear());
wt.every = (t2) => !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : et((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t2) * t2), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t2);
});
wt.range;
function Cr(t2, e, n, r, i, a) {
  const c = [
    [vt, 1, mt],
    [vt, 5, 5 * mt],
    [vt, 15, 15 * mt],
    [vt, 30, 30 * mt],
    [a, 1, ct],
    [a, 5, 5 * ct],
    [a, 15, 15 * ct],
    [a, 30, 30 * ct],
    [i, 1, gt],
    [i, 3, 3 * gt],
    [i, 6, 6 * gt],
    [i, 12, 12 * gt],
    [r, 1, yt],
    [r, 2, 2 * yt],
    [n, 1, Ce],
    [e, 1, Pe],
    [e, 3, 3 * Pe],
    [t2, 1, ye]
  ];
  function m(C2, k, L) {
    const _ = k < C2;
    _ && ([C2, k] = [k, C2]);
    const S = L && typeof L.range == "function" ? L : Y(C2, k, L), Z = S ? S.range(C2, +k + 1) : [];
    return _ ? Z.reverse() : Z;
  }
  function Y(C$1, k, L) {
    const _ = Math.abs(k - C$1) / L, S = R(([, , U]) => U).right(c, _);
    if (S === c.length) return t2.every(C(C$1 / ye, k / ye, L));
    if (S === 0) return Ut.every(Math.max(C(C$1, k, L), 1));
    const [Z, A] = c[_ / c[S - 1][2] < c[S][2] / _ ? S - 1 : S];
    return Z.every(A);
  }
  return [m, Y];
}
const [Sr, _r] = Cr(kt, Nt, Pt, bt, Ot, $t);
function ke(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
    return e.setFullYear(t2.y), e;
  }
  return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
}
function pe(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
    return e.setUTCFullYear(t2.y), e;
  }
  return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
}
function Lt(t2, e, n) {
  return { y: t2, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Fr(t2) {
  var e = t2.dateTime, n = t2.date, r = t2.time, i = t2.periods, a = t2.days, c = t2.shortDays, m = t2.months, Y = t2.shortMonths, C2 = At(i), k = Wt(i), L = At(a), _ = Wt(a), S = At(c), Z = Wt(c), A = At(m), U = Wt(m), I = At(Y), N = Wt(Y), W = {
    a: x,
    A: F2,
    b: o,
    B: X,
    c: null,
    d: Be,
    e: Be,
    f: Jr,
    g: ci,
    G: li,
    H: Gr,
    I: jr,
    j: Qr,
    L: wn,
    m: Kr,
    M: ti,
    p: s,
    q: E,
    Q: je,
    s: Qe,
    S: ei,
    u: ni,
    U: ri,
    V: ii,
    w: si,
    W: ai,
    x: null,
    X: null,
    y: oi,
    Y: ui,
    Z: fi,
    "%": Ge
  }, q = {
    a: R2,
    A: z,
    b: P,
    B: K,
    c: null,
    d: Xe,
    e: Xe,
    f: gi,
    g: Mi,
    G: Si,
    H: di,
    I: hi,
    j: mi,
    L: Mn,
    m: yi,
    M: ki,
    p: O,
    q: st,
    Q: je,
    s: Qe,
    S: pi,
    u: vi,
    U: Ti,
    V: bi,
    w: xi,
    W: wi,
    x: null,
    X: null,
    y: Di,
    Y: Ci,
    Z: _i,
    "%": Ge
  }, j = {
    a: D,
    A: w,
    b: T,
    B: v,
    c: u,
    d: qe,
    e: qe,
    f: qr,
    g: Re,
    G: ze,
    H: Ze,
    I: Ze,
    j: Pr,
    L: Rr,
    m: Nr,
    M: Vr,
    p: h,
    q: Hr,
    Q: Br,
    s: Xr,
    S: zr,
    u: Lr,
    U: Ar,
    V: Wr,
    w: Ir,
    W: $r,
    x: f,
    X: b,
    y: Re,
    Y: ze,
    Z: Or,
    "%": Zr
  };
  W.x = p2(n, W), W.X = p2(r, W), W.c = p2(e, W), q.x = p2(n, q), q.X = p2(r, q), q.c = p2(e, q);
  function p2(M, H) {
    return function(V) {
      var l = [], J = -1, $ = 0, Q = M.length, G, it, at;
      for (V instanceof Date || (V = /* @__PURE__ */ new Date(+V)); ++J < Q; )
        M.charCodeAt(J) === 37 && (l.push(M.slice($, J)), (it = Ve[G = M.charAt(++J)]) != null ? G = M.charAt(++J) : it = G === "e" ? " " : "0", (at = H[G]) && (G = at(V, it)), l.push(G), $ = J + 1);
      return l.push(M.slice($, J)), l.join("");
    };
  }
  function g(M, H) {
    return function(V) {
      var l = Lt(1900, void 0, 1), J = y(l, M, V += "", 0), $, Q;
      if (J != V.length) return null;
      if ("Q" in l) return new Date(l.Q);
      if ("s" in l) return new Date(l.s * 1e3 + ("L" in l ? l.L : 0));
      if (H && !("Z" in l) && (l.Z = 0), "p" in l && (l.H = l.H % 12 + l.p * 12), l.m === void 0 && (l.m = "q" in l ? l.q : 0), "V" in l) {
        if (l.V < 1 || l.V > 53) return null;
        "w" in l || (l.w = 1), "Z" in l ? ($ = pe(Lt(l.y, 0, 1)), Q = $.getUTCDay(), $ = Q > 4 || Q === 0 ? ne.ceil($) : ne($), $ = Se.offset($, (l.V - 1) * 7), l.y = $.getUTCFullYear(), l.m = $.getUTCMonth(), l.d = $.getUTCDate() + (l.w + 6) % 7) : ($ = ke(Lt(l.y, 0, 1)), Q = $.getDay(), $ = Q > 4 || Q === 0 ? Ht.ceil($) : Ht($), $ = bt.offset($, (l.V - 1) * 7), l.y = $.getFullYear(), l.m = $.getMonth(), l.d = $.getDate() + (l.w + 6) % 7);
      } else ("W" in l || "U" in l) && ("w" in l || (l.w = "u" in l ? l.u % 7 : "W" in l ? 1 : 0), Q = "Z" in l ? pe(Lt(l.y, 0, 1)).getUTCDay() : ke(Lt(l.y, 0, 1)).getDay(), l.m = 0, l.d = "W" in l ? (l.w + 6) % 7 + l.W * 7 - (Q + 5) % 7 : l.w + l.U * 7 - (Q + 6) % 7);
      return "Z" in l ? (l.H += l.Z / 100 | 0, l.M += l.Z % 100, pe(l)) : ke(l);
    };
  }
  function y(M, H, V, l) {
    for (var J = 0, $ = H.length, Q = V.length, G, it; J < $; ) {
      if (l >= Q) return -1;
      if (G = H.charCodeAt(J++), G === 37) {
        if (G = H.charAt(J++), it = j[G in Ve ? H.charAt(J++) : G], !it || (l = it(M, V, l)) < 0) return -1;
      } else if (G != V.charCodeAt(l++))
        return -1;
    }
    return l;
  }
  function h(M, H, V) {
    var l = C2.exec(H.slice(V));
    return l ? (M.p = k.get(l[0].toLowerCase()), V + l[0].length) : -1;
  }
  function D(M, H, V) {
    var l = S.exec(H.slice(V));
    return l ? (M.w = Z.get(l[0].toLowerCase()), V + l[0].length) : -1;
  }
  function w(M, H, V) {
    var l = L.exec(H.slice(V));
    return l ? (M.w = _.get(l[0].toLowerCase()), V + l[0].length) : -1;
  }
  function T(M, H, V) {
    var l = I.exec(H.slice(V));
    return l ? (M.m = N.get(l[0].toLowerCase()), V + l[0].length) : -1;
  }
  function v(M, H, V) {
    var l = A.exec(H.slice(V));
    return l ? (M.m = U.get(l[0].toLowerCase()), V + l[0].length) : -1;
  }
  function u(M, H, V) {
    return y(M, e, H, V);
  }
  function f(M, H, V) {
    return y(M, n, H, V);
  }
  function b(M, H, V) {
    return y(M, r, H, V);
  }
  function x(M) {
    return c[M.getDay()];
  }
  function F2(M) {
    return a[M.getDay()];
  }
  function o(M) {
    return Y[M.getMonth()];
  }
  function X(M) {
    return m[M.getMonth()];
  }
  function s(M) {
    return i[+(M.getHours() >= 12)];
  }
  function E(M) {
    return 1 + ~~(M.getMonth() / 3);
  }
  function R2(M) {
    return c[M.getUTCDay()];
  }
  function z(M) {
    return a[M.getUTCDay()];
  }
  function P(M) {
    return Y[M.getUTCMonth()];
  }
  function K(M) {
    return m[M.getUTCMonth()];
  }
  function O(M) {
    return i[+(M.getUTCHours() >= 12)];
  }
  function st(M) {
    return 1 + ~~(M.getUTCMonth() / 3);
  }
  return {
    format: function(M) {
      var H = p2(M += "", W);
      return H.toString = function() {
        return M;
      }, H;
    },
    parse: function(M) {
      var H = g(M += "", false);
      return H.toString = function() {
        return M;
      }, H;
    },
    utcFormat: function(M) {
      var H = p2(M += "", q);
      return H.toString = function() {
        return M;
      }, H;
    },
    utcParse: function(M) {
      var H = g(M += "", true);
      return H.toString = function() {
        return M;
      }, H;
    }
  };
}
var Ve = { "-": "", _: " ", 0: "0" }, nt = /^\s*\d+/, Yr = /^%/, Ur = /[\\^$*+?|[\]().{}]/g;
function B(t2, e, n) {
  var r = t2 < 0 ? "-" : "", i = (r ? -t2 : t2) + "", a = i.length;
  return r + (a < n ? new Array(n - a + 1).join(e) + i : i);
}
function Er(t2) {
  return t2.replace(Ur, "\\$&");
}
function At(t2) {
  return new RegExp("^(?:" + t2.map(Er).join("|") + ")", "i");
}
function Wt(t2) {
  return new Map(t2.map((e, n) => [e.toLowerCase(), n]));
}
function Ir(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 1));
  return r ? (t2.w = +r[0], n + r[0].length) : -1;
}
function Lr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 1));
  return r ? (t2.u = +r[0], n + r[0].length) : -1;
}
function Ar(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.U = +r[0], n + r[0].length) : -1;
}
function Wr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.V = +r[0], n + r[0].length) : -1;
}
function $r(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.W = +r[0], n + r[0].length) : -1;
}
function ze(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 4));
  return r ? (t2.y = +r[0], n + r[0].length) : -1;
}
function Re(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Or(t2, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t2.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Hr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 1));
  return r ? (t2.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Nr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.m = r[0] - 1, n + r[0].length) : -1;
}
function qe(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.d = +r[0], n + r[0].length) : -1;
}
function Pr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 3));
  return r ? (t2.m = 0, t2.d = +r[0], n + r[0].length) : -1;
}
function Ze(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.H = +r[0], n + r[0].length) : -1;
}
function Vr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.M = +r[0], n + r[0].length) : -1;
}
function zr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.S = +r[0], n + r[0].length) : -1;
}
function Rr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 3));
  return r ? (t2.L = +r[0], n + r[0].length) : -1;
}
function qr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 6));
  return r ? (t2.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Zr(t2, e, n) {
  var r = Yr.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Br(t2, e, n) {
  var r = nt.exec(e.slice(n));
  return r ? (t2.Q = +r[0], n + r[0].length) : -1;
}
function Xr(t2, e, n) {
  var r = nt.exec(e.slice(n));
  return r ? (t2.s = +r[0], n + r[0].length) : -1;
}
function Be(t2, e) {
  return B(t2.getDate(), e, 2);
}
function Gr(t2, e) {
  return B(t2.getHours(), e, 2);
}
function jr(t2, e) {
  return B(t2.getHours() % 12 || 12, e, 2);
}
function Qr(t2, e) {
  return B(1 + bt.count(kt(t2), t2), e, 3);
}
function wn(t2, e) {
  return B(t2.getMilliseconds(), e, 3);
}
function Jr(t2, e) {
  return wn(t2, e) + "000";
}
function Kr(t2, e) {
  return B(t2.getMonth() + 1, e, 2);
}
function ti(t2, e) {
  return B(t2.getMinutes(), e, 2);
}
function ei(t2, e) {
  return B(t2.getSeconds(), e, 2);
}
function ni(t2) {
  var e = t2.getDay();
  return e === 0 ? 7 : e;
}
function ri(t2, e) {
  return B(Pt.count(kt(t2) - 1, t2), e, 2);
}
function Dn(t2) {
  var e = t2.getDay();
  return e >= 4 || e === 0 ? xt(t2) : xt.ceil(t2);
}
function ii(t2, e) {
  return t2 = Dn(t2), B(xt.count(kt(t2), t2) + (kt(t2).getDay() === 4), e, 2);
}
function si(t2) {
  return t2.getDay();
}
function ai(t2, e) {
  return B(Ht.count(kt(t2) - 1, t2), e, 2);
}
function oi(t2, e) {
  return B(t2.getFullYear() % 100, e, 2);
}
function ci(t2, e) {
  return t2 = Dn(t2), B(t2.getFullYear() % 100, e, 2);
}
function ui(t2, e) {
  return B(t2.getFullYear() % 1e4, e, 4);
}
function li(t2, e) {
  var n = t2.getDay();
  return t2 = n >= 4 || n === 0 ? xt(t2) : xt.ceil(t2), B(t2.getFullYear() % 1e4, e, 4);
}
function fi(t2) {
  var e = t2.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + B(e / 60 | 0, "0", 2) + B(e % 60, "0", 2);
}
function Xe(t2, e) {
  return B(t2.getUTCDate(), e, 2);
}
function di(t2, e) {
  return B(t2.getUTCHours(), e, 2);
}
function hi(t2, e) {
  return B(t2.getUTCHours() % 12 || 12, e, 2);
}
function mi(t2, e) {
  return B(1 + Se.count(wt(t2), t2), e, 3);
}
function Mn(t2, e) {
  return B(t2.getUTCMilliseconds(), e, 3);
}
function gi(t2, e) {
  return Mn(t2, e) + "000";
}
function yi(t2, e) {
  return B(t2.getUTCMonth() + 1, e, 2);
}
function ki(t2, e) {
  return B(t2.getUTCMinutes(), e, 2);
}
function pi(t2, e) {
  return B(t2.getUTCSeconds(), e, 2);
}
function vi(t2) {
  var e = t2.getUTCDay();
  return e === 0 ? 7 : e;
}
function Ti(t2, e) {
  return B(xn.count(wt(t2) - 1, t2), e, 2);
}
function Cn(t2) {
  var e = t2.getUTCDay();
  return e >= 4 || e === 0 ? Et(t2) : Et.ceil(t2);
}
function bi(t2, e) {
  return t2 = Cn(t2), B(Et.count(wt(t2), t2) + (wt(t2).getUTCDay() === 4), e, 2);
}
function xi(t2) {
  return t2.getUTCDay();
}
function wi(t2, e) {
  return B(ne.count(wt(t2) - 1, t2), e, 2);
}
function Di(t2, e) {
  return B(t2.getUTCFullYear() % 100, e, 2);
}
function Mi(t2, e) {
  return t2 = Cn(t2), B(t2.getUTCFullYear() % 100, e, 2);
}
function Ci(t2, e) {
  return B(t2.getUTCFullYear() % 1e4, e, 4);
}
function Si(t2, e) {
  var n = t2.getUTCDay();
  return t2 = n >= 4 || n === 0 ? Et(t2) : Et.ceil(t2), B(t2.getUTCFullYear() % 1e4, e, 4);
}
function _i() {
  return "+0000";
}
function Ge() {
  return "%";
}
function je(t2) {
  return +t2;
}
function Qe(t2) {
  return Math.floor(+t2 / 1e3);
}
var St, re;
Fi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Fi(t2) {
  return St = Fr(t2), re = St.format, St.parse, St.utcFormat, St.utcParse, St;
}
function Yi(t2) {
  return new Date(t2);
}
function Ui(t2) {
  return t2 instanceof Date ? +t2 : +/* @__PURE__ */ new Date(+t2);
}
function Sn(t2, e, n, r, i, a, c, m, Y, C2) {
  var k = un(), L = k.invert, _ = k.domain, S = C2(".%L"), Z = C2(":%S"), A = C2("%I:%M"), U = C2("%I %p"), I = C2("%a %d"), N = C2("%b %d"), W = C2("%B"), q = C2("%Y");
  function j(p2) {
    return (Y(p2) < p2 ? S : m(p2) < p2 ? Z : c(p2) < p2 ? A : a(p2) < p2 ? U : r(p2) < p2 ? i(p2) < p2 ? I : N : n(p2) < p2 ? W : q)(p2);
  }
  return k.invert = function(p2) {
    return new Date(L(p2));
  }, k.domain = function(p2) {
    return arguments.length ? _(Array.from(p2, Ui)) : _().map(Yi);
  }, k.ticks = function(p2) {
    var g = _();
    return t2(g[0], g[g.length - 1], p2 ?? 10);
  }, k.tickFormat = function(p2, g) {
    return g == null ? j : C2(g);
  }, k.nice = function(p2) {
    var g = _();
    return (!p2 || typeof p2.range != "function") && (p2 = e(g[0], g[g.length - 1], p2 ?? 10)), p2 ? _(kr(g, p2)) : k;
  }, k.copy = function() {
    return en$1(k, Sn(t2, e, n, r, i, a, c, m, Y, C2));
  }, k;
}
function Ei() {
  return t.apply(Sn(Sr, _r, kt, Nt, Pt, bt, Ot, $t, vt, re).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Gt = { exports: {} }, Ii = Gt.exports, Je;
function Li() {
  return Je || (Je = 1, (function(t2, e) {
    (function(n, r) {
      t2.exports = r();
    })(Ii, (function() {
      var n = "day";
      return function(r, i, a) {
        var c = function(C2) {
          return C2.add(4 - C2.isoWeekday(), n);
        }, m = i.prototype;
        m.isoWeekYear = function() {
          return c(this).year();
        }, m.isoWeek = function(C2) {
          if (!this.$utils().u(C2)) return this.add(7 * (C2 - this.isoWeek()), n);
          var k, L, _, S, Z = c(this), A = (k = this.isoWeekYear(), L = this.$u, _ = (L ? a.utc : a)().year(k).startOf("year"), S = 4 - _.isoWeekday(), _.isoWeekday() > 4 && (S += 7), _.add(S, n));
          return Z.diff(A, "week") + 1;
        }, m.isoWeekday = function(C2) {
          return this.$utils().u(C2) ? this.day() || 7 : this.day(this.day() % 7 ? C2 : C2 - 7);
        };
        var Y = m.startOf;
        m.startOf = function(C2, k) {
          var L = this.$utils(), _ = !!L.u(k) || k;
          return L.p(C2) === "isoweek" ? _ ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : Y.bind(this)(C2, k);
        };
      };
    }));
  })(Gt)), Gt.exports;
}
var Ai = Li();
const Wi = /* @__PURE__ */ c0(Ai);
var jt = { exports: {} }, $i = jt.exports, Ke;
function Oi() {
  return Ke || (Ke = 1, (function(t2, e) {
    (function(n, r) {
      t2.exports = r();
    })($i, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, c = /\d\d?/, m = /\d*[^-_:/,()\s\d]+/, Y = {}, C2 = function(U) {
        return (U = +U) + (U > 68 ? 1900 : 2e3);
      }, k = function(U) {
        return function(I) {
          this[U] = +I;
        };
      }, L = [/[+-]\d\d:?(\d\d)?|Z/, function(U) {
        (this.zone || (this.zone = {})).offset = (function(I) {
          if (!I || I === "Z") return 0;
          var N = I.match(/([+-]|\d\d)/g), W = 60 * N[1] + (+N[2] || 0);
          return W === 0 ? 0 : N[0] === "+" ? -W : W;
        })(U);
      }], _ = function(U) {
        var I = Y[U];
        return I && (I.indexOf ? I : I.s.concat(I.f));
      }, S = function(U, I) {
        var N, W = Y.meridiem;
        if (W) {
          for (var q = 1; q <= 24; q += 1) if (U.indexOf(W(q, 0, I)) > -1) {
            N = q > 12;
            break;
          }
        } else N = U === (I ? "pm" : "PM");
        return N;
      }, Z = { A: [m, function(U) {
        this.afternoon = S(U, false);
      }], a: [m, function(U) {
        this.afternoon = S(U, true);
      }], Q: [i, function(U) {
        this.month = 3 * (U - 1) + 1;
      }], S: [i, function(U) {
        this.milliseconds = 100 * +U;
      }], SS: [a, function(U) {
        this.milliseconds = 10 * +U;
      }], SSS: [/\d{3}/, function(U) {
        this.milliseconds = +U;
      }], s: [c, k("seconds")], ss: [c, k("seconds")], m: [c, k("minutes")], mm: [c, k("minutes")], H: [c, k("hours")], h: [c, k("hours")], HH: [c, k("hours")], hh: [c, k("hours")], D: [c, k("day")], DD: [a, k("day")], Do: [m, function(U) {
        var I = Y.ordinal, N = U.match(/\d+/);
        if (this.day = N[0], I) for (var W = 1; W <= 31; W += 1) I(W).replace(/\[|\]/g, "") === U && (this.day = W);
      }], w: [c, k("week")], ww: [a, k("week")], M: [c, k("month")], MM: [a, k("month")], MMM: [m, function(U) {
        var I = _("months"), N = (_("monthsShort") || I.map((function(W) {
          return W.slice(0, 3);
        }))).indexOf(U) + 1;
        if (N < 1) throw new Error();
        this.month = N % 12 || N;
      }], MMMM: [m, function(U) {
        var I = _("months").indexOf(U) + 1;
        if (I < 1) throw new Error();
        this.month = I % 12 || I;
      }], Y: [/[+-]?\d+/, k("year")], YY: [a, function(U) {
        this.year = C2(U);
      }], YYYY: [/\d{4}/, k("year")], Z: L, ZZ: L };
      function A(U) {
        var I, N;
        I = U, N = Y && Y.formats;
        for (var W = (U = I.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(D, w, T) {
          var v = T && T.toUpperCase();
          return w || N[T] || n[T] || N[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(u, f, b) {
            return f || b.slice(1);
          }));
        }))).match(r), q = W.length, j = 0; j < q; j += 1) {
          var p2 = W[j], g = Z[p2], y = g && g[0], h = g && g[1];
          W[j] = h ? { regex: y, parser: h } : p2.replace(/^\[|\]$/g, "");
        }
        return function(D) {
          for (var w = {}, T = 0, v = 0; T < q; T += 1) {
            var u = W[T];
            if (typeof u == "string") v += u.length;
            else {
              var f = u.regex, b = u.parser, x = D.slice(v), F2 = f.exec(x)[0];
              b.call(w, F2), D = D.replace(F2, "");
            }
          }
          return (function(o) {
            var X = o.afternoon;
            if (X !== void 0) {
              var s = o.hours;
              X ? s < 12 && (o.hours += 12) : s === 12 && (o.hours = 0), delete o.afternoon;
            }
          })(w), w;
        };
      }
      return function(U, I, N) {
        N.p.customParseFormat = true, U && U.parseTwoDigitYear && (C2 = U.parseTwoDigitYear);
        var W = I.prototype, q = W.parse;
        W.parse = function(j) {
          var p2 = j.date, g = j.utc, y = j.args;
          this.$u = g;
          var h = y[1];
          if (typeof h == "string") {
            var D = y[2] === true, w = y[3] === true, T = D || w, v = y[2];
            w && (v = y[2]), Y = this.$locale(), !D && v && (Y = N.Ls[v]), this.$d = (function(x, F2, o, X) {
              try {
                if (["x", "X"].indexOf(F2) > -1) return new Date((F2 === "X" ? 1e3 : 1) * x);
                var s = A(F2)(x), E = s.year, R2 = s.month, z = s.day, P = s.hours, K = s.minutes, O = s.seconds, st = s.milliseconds, M = s.zone, H = s.week, V = /* @__PURE__ */ new Date(), l = z || (E || R2 ? 1 : V.getDate()), J = E || V.getFullYear(), $ = 0;
                E && !R2 || ($ = R2 > 0 ? R2 - 1 : V.getMonth());
                var Q, G = P || 0, it = K || 0, at = O || 0, pt = st || 0;
                return M ? new Date(Date.UTC(J, $, l, G, it, at, pt + 60 * M.offset * 1e3)) : o ? new Date(Date.UTC(J, $, l, G, it, at, pt)) : (Q = new Date(J, $, l, G, it, at, pt), H && (Q = X(Q).week(H).toDate()), Q);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(p2, h, g, N), this.init(), v && v !== true && (this.$L = this.locale(v).$L), T && p2 != this.format(h) && (this.$d = /* @__PURE__ */ new Date("")), Y = {};
          } else if (h instanceof Array) for (var u = h.length, f = 1; f <= u; f += 1) {
            y[1] = h[f - 1];
            var b = N.apply(this, y);
            if (b.isValid()) {
              this.$d = b.$d, this.$L = b.$L, this.init();
              break;
            }
            f === u && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else q.call(this, j);
        };
      };
    }));
  })(jt)), jt.exports;
}
var Hi = Oi();
const Ni = /* @__PURE__ */ c0(Hi);
var Qt = { exports: {} }, Pi = Qt.exports, tn;
function Vi() {
  return tn || (tn = 1, (function(t2, e) {
    (function(n, r) {
      t2.exports = r();
    })(Pi, (function() {
      return function(n, r) {
        var i = r.prototype, a = i.format;
        i.format = function(c) {
          var m = this, Y = this.$locale();
          if (!this.isValid()) return a.bind(this)(c);
          var C2 = this.$utils(), k = (c || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(L) {
            switch (L) {
              case "Q":
                return Math.ceil((m.$M + 1) / 3);
              case "Do":
                return Y.ordinal(m.$D);
              case "gggg":
                return m.weekYear();
              case "GGGG":
                return m.isoWeekYear();
              case "wo":
                return Y.ordinal(m.week(), "W");
              case "w":
              case "ww":
                return C2.s(m.week(), L === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return C2.s(m.isoWeek(), L === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return C2.s(String(m.$H === 0 ? 24 : m.$H), L === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(m.$d.getTime() / 1e3);
              case "x":
                return m.$d.getTime();
              case "z":
                return "[" + m.offsetName() + "]";
              case "zzz":
                return "[" + m.offsetName("long") + "]";
              default:
                return L;
            }
          }));
          return a.bind(this)(k);
        };
      };
    }));
  })(Qt)), Qt.exports;
}
var zi = Vi();
const Ri = /* @__PURE__ */ c0(zi);
var Jt = { exports: {} }, qi = Jt.exports, en;
function Zi() {
  return en || (en = 1, (function(t2, e) {
    (function(n, r) {
      t2.exports = r();
    })(qi, (function() {
      var n, r, i = 1e3, a = 6e4, c = 36e5, m = 864e5, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C2 = 31536e6, k = 2628e6, L = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, _ = { years: C2, months: k, days: m, hours: c, minutes: a, seconds: i, milliseconds: 1, weeks: 6048e5 }, S = function(p2) {
        return p2 instanceof q;
      }, Z = function(p2, g, y) {
        return new q(p2, y, g.$l);
      }, A = function(p2) {
        return r.p(p2) + "s";
      }, U = function(p2) {
        return p2 < 0;
      }, I = function(p2) {
        return U(p2) ? Math.ceil(p2) : Math.floor(p2);
      }, N = function(p2) {
        return Math.abs(p2);
      }, W = function(p2, g) {
        return p2 ? U(p2) ? { negative: true, format: "" + N(p2) + g } : { negative: false, format: "" + p2 + g } : { negative: false, format: "" };
      }, q = (function() {
        function p2(y, h, D) {
          var w = this;
          if (this.$d = {}, this.$l = D, y === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), h) return Z(y * _[A(h)], this);
          if (typeof y == "number") return this.$ms = y, this.parseFromMilliseconds(), this;
          if (typeof y == "object") return Object.keys(y).forEach((function(u) {
            w.$d[A(u)] = y[u];
          })), this.calMilliseconds(), this;
          if (typeof y == "string") {
            var T = y.match(L);
            if (T) {
              var v = T.slice(2).map((function(u) {
                return u != null ? Number(u) : 0;
              }));
              return this.$d.years = v[0], this.$d.months = v[1], this.$d.weeks = v[2], this.$d.days = v[3], this.$d.hours = v[4], this.$d.minutes = v[5], this.$d.seconds = v[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var g = p2.prototype;
        return g.calMilliseconds = function() {
          var y = this;
          this.$ms = Object.keys(this.$d).reduce((function(h, D) {
            return h + (y.$d[D] || 0) * _[D];
          }), 0);
        }, g.parseFromMilliseconds = function() {
          var y = this.$ms;
          this.$d.years = I(y / C2), y %= C2, this.$d.months = I(y / k), y %= k, this.$d.days = I(y / m), y %= m, this.$d.hours = I(y / c), y %= c, this.$d.minutes = I(y / a), y %= a, this.$d.seconds = I(y / i), y %= i, this.$d.milliseconds = y;
        }, g.toISOString = function() {
          var y = W(this.$d.years, "Y"), h = W(this.$d.months, "M"), D = +this.$d.days || 0;
          this.$d.weeks && (D += 7 * this.$d.weeks);
          var w = W(D, "D"), T = W(this.$d.hours, "H"), v = W(this.$d.minutes, "M"), u = this.$d.seconds || 0;
          this.$d.milliseconds && (u += this.$d.milliseconds / 1e3, u = Math.round(1e3 * u) / 1e3);
          var f = W(u, "S"), b = y.negative || h.negative || w.negative || T.negative || v.negative || f.negative, x = T.format || v.format || f.format ? "T" : "", F2 = (b ? "-" : "") + "P" + y.format + h.format + w.format + x + T.format + v.format + f.format;
          return F2 === "P" || F2 === "-P" ? "P0D" : F2;
        }, g.toJSON = function() {
          return this.toISOString();
        }, g.format = function(y) {
          var h = y || "YYYY-MM-DDTHH:mm:ss", D = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
          return h.replace(Y, (function(w, T) {
            return T || String(D[w]);
          }));
        }, g.as = function(y) {
          return this.$ms / _[A(y)];
        }, g.get = function(y) {
          var h = this.$ms, D = A(y);
          return D === "milliseconds" ? h %= 1e3 : h = D === "weeks" ? I(h / _[D]) : this.$d[D], h || 0;
        }, g.add = function(y, h, D) {
          var w;
          return w = h ? y * _[A(h)] : S(y) ? y.$ms : Z(y, this).$ms, Z(this.$ms + w * (D ? -1 : 1), this);
        }, g.subtract = function(y, h) {
          return this.add(y, h, true);
        }, g.locale = function(y) {
          var h = this.clone();
          return h.$l = y, h;
        }, g.clone = function() {
          return Z(this.$ms, this);
        }, g.humanize = function(y) {
          return n().add(this.$ms, "ms").locale(this.$l).fromNow(!y);
        }, g.valueOf = function() {
          return this.asMilliseconds();
        }, g.milliseconds = function() {
          return this.get("milliseconds");
        }, g.asMilliseconds = function() {
          return this.as("milliseconds");
        }, g.seconds = function() {
          return this.get("seconds");
        }, g.asSeconds = function() {
          return this.as("seconds");
        }, g.minutes = function() {
          return this.get("minutes");
        }, g.asMinutes = function() {
          return this.as("minutes");
        }, g.hours = function() {
          return this.get("hours");
        }, g.asHours = function() {
          return this.as("hours");
        }, g.days = function() {
          return this.get("days");
        }, g.asDays = function() {
          return this.as("days");
        }, g.weeks = function() {
          return this.get("weeks");
        }, g.asWeeks = function() {
          return this.as("weeks");
        }, g.months = function() {
          return this.get("months");
        }, g.asMonths = function() {
          return this.as("months");
        }, g.years = function() {
          return this.get("years");
        }, g.asYears = function() {
          return this.as("years");
        }, p2;
      })(), j = function(p2, g, y) {
        return p2.add(g.years() * y, "y").add(g.months() * y, "M").add(g.days() * y, "d").add(g.hours() * y, "h").add(g.minutes() * y, "m").add(g.seconds() * y, "s").add(g.milliseconds() * y, "ms");
      };
      return function(p2, g, y) {
        n = y, r = y().$utils(), y.duration = function(w, T) {
          var v = y.locale();
          return Z(w, { $l: v }, T);
        }, y.isDuration = S;
        var h = g.prototype.add, D = g.prototype.subtract;
        g.prototype.add = function(w, T) {
          return S(w) ? j(this, w, 1) : h.bind(this)(w, T);
        }, g.prototype.subtract = function(w, T) {
          return S(w) ? j(this, w, -1) : D.bind(this)(w, T);
        };
      };
    }));
  })(Jt)), Jt.exports;
}
var Bi = Zi();
const Xi = /* @__PURE__ */ c0(Bi);
var xe = (function() {
  var t2 = /* @__PURE__ */ p(function(v, u, f, b) {
    for (f = f || {}, b = v.length; b--; f[v[b]] = u) ;
    return f;
  }, "o"), e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 40], n = [1, 26], r = [1, 27], i = [1, 28], a = [1, 29], c = [1, 30], m = [1, 31], Y = [1, 32], C2 = [1, 33], k = [1, 34], L = [1, 9], _ = [1, 10], S = [1, 11], Z = [1, 12], A = [1, 13], U = [1, 14], I = [1, 15], N = [1, 16], W = [1, 19], q = [1, 20], j = [1, 21], p$1 = [1, 22], g = [1, 23], y = [1, 25], h = [1, 35], D = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, gantt: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NL: 10, weekday: 11, weekday_monday: 12, weekday_tuesday: 13, weekday_wednesday: 14, weekday_thursday: 15, weekday_friday: 16, weekday_saturday: 17, weekday_sunday: 18, weekend: 19, weekend_friday: 20, weekend_saturday: 21, dateFormat: 22, inclusiveEndDates: 23, topAxis: 24, axisFormat: 25, tickInterval: 26, excludes: 27, includes: 28, todayMarker: 29, title: 30, acc_title: 31, acc_title_value: 32, acc_descr: 33, acc_descr_value: 34, acc_descr_multiline_value: 35, section: 36, clickStatement: 37, taskTxt: 38, taskData: 39, click: 40, callbackname: 41, callbackargs: 42, href: 43, clickStatementDebug: 44, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "gantt", 6: "EOF", 8: "SPACE", 10: "NL", 12: "weekday_monday", 13: "weekday_tuesday", 14: "weekday_wednesday", 15: "weekday_thursday", 16: "weekday_friday", 17: "weekday_saturday", 18: "weekday_sunday", 20: "weekend_friday", 21: "weekend_saturday", 22: "dateFormat", 23: "inclusiveEndDates", 24: "topAxis", 25: "axisFormat", 26: "tickInterval", 27: "excludes", 28: "includes", 29: "todayMarker", 30: "title", 31: "acc_title", 32: "acc_title_value", 33: "acc_descr", 34: "acc_descr_value", 35: "acc_descr_multiline_value", 36: "section", 38: "taskTxt", 39: "taskData", 40: "click", 41: "callbackname", 42: "callbackargs", 43: "href" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [19, 1], [19, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [37, 2], [37, 3], [37, 3], [37, 4], [37, 3], [37, 4], [37, 2], [44, 2], [44, 3], [44, 3], [44, 4], [44, 3], [44, 4], [44, 2]],
    performAction: /* @__PURE__ */ p(function(u, f, b, x, F2, o, X) {
      var s = o.length - 1;
      switch (F2) {
        case 1:
          return o[s - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          o[s - 1].push(o[s]), this.$ = o[s - 1];
          break;
        case 4:
        case 5:
          this.$ = o[s];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          x.setWeekday("monday");
          break;
        case 9:
          x.setWeekday("tuesday");
          break;
        case 10:
          x.setWeekday("wednesday");
          break;
        case 11:
          x.setWeekday("thursday");
          break;
        case 12:
          x.setWeekday("friday");
          break;
        case 13:
          x.setWeekday("saturday");
          break;
        case 14:
          x.setWeekday("sunday");
          break;
        case 15:
          x.setWeekend("friday");
          break;
        case 16:
          x.setWeekend("saturday");
          break;
        case 17:
          x.setDateFormat(o[s].substr(11)), this.$ = o[s].substr(11);
          break;
        case 18:
          x.enableInclusiveEndDates(), this.$ = o[s].substr(18);
          break;
        case 19:
          x.TopAxis(), this.$ = o[s].substr(8);
          break;
        case 20:
          x.setAxisFormat(o[s].substr(11)), this.$ = o[s].substr(11);
          break;
        case 21:
          x.setTickInterval(o[s].substr(13)), this.$ = o[s].substr(13);
          break;
        case 22:
          x.setExcludes(o[s].substr(9)), this.$ = o[s].substr(9);
          break;
        case 23:
          x.setIncludes(o[s].substr(9)), this.$ = o[s].substr(9);
          break;
        case 24:
          x.setTodayMarker(o[s].substr(12)), this.$ = o[s].substr(12);
          break;
        case 27:
          x.setDiagramTitle(o[s].substr(6)), this.$ = o[s].substr(6);
          break;
        case 28:
          this.$ = o[s].trim(), x.setAccTitle(this.$);
          break;
        case 29:
        case 30:
          this.$ = o[s].trim(), x.setAccDescription(this.$);
          break;
        case 31:
          x.addSection(o[s].substr(8)), this.$ = o[s].substr(8);
          break;
        case 33:
          x.addTask(o[s - 1], o[s]), this.$ = "task";
          break;
        case 34:
          this.$ = o[s - 1], x.setClickEvent(o[s - 1], o[s], null);
          break;
        case 35:
          this.$ = o[s - 2], x.setClickEvent(o[s - 2], o[s - 1], o[s]);
          break;
        case 36:
          this.$ = o[s - 2], x.setClickEvent(o[s - 2], o[s - 1], null), x.setLink(o[s - 2], o[s]);
          break;
        case 37:
          this.$ = o[s - 3], x.setClickEvent(o[s - 3], o[s - 2], o[s - 1]), x.setLink(o[s - 3], o[s]);
          break;
        case 38:
          this.$ = o[s - 2], x.setClickEvent(o[s - 2], o[s], null), x.setLink(o[s - 2], o[s - 1]);
          break;
        case 39:
          this.$ = o[s - 3], x.setClickEvent(o[s - 3], o[s - 1], o[s]), x.setLink(o[s - 3], o[s - 2]);
          break;
        case 40:
          this.$ = o[s - 1], x.setLink(o[s - 1], o[s]);
          break;
        case 41:
        case 47:
          this.$ = o[s - 1] + " " + o[s];
          break;
        case 42:
        case 43:
        case 45:
          this.$ = o[s - 2] + " " + o[s - 1] + " " + o[s];
          break;
        case 44:
        case 46:
          this.$ = o[s - 3] + " " + o[s - 2] + " " + o[s - 1] + " " + o[s];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t2(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 17, 12: n, 13: r, 14: i, 15: a, 16: c, 17: m, 18: Y, 19: 18, 20: C2, 21: k, 22: L, 23: _, 24: S, 25: Z, 26: A, 27: U, 28: I, 29: N, 30: W, 31: q, 33: j, 35: p$1, 36: g, 37: 24, 38: y, 40: h }, t2(e, [2, 7], { 1: [2, 1] }), t2(e, [2, 3]), { 9: 36, 11: 17, 12: n, 13: r, 14: i, 15: a, 16: c, 17: m, 18: Y, 19: 18, 20: C2, 21: k, 22: L, 23: _, 24: S, 25: Z, 26: A, 27: U, 28: I, 29: N, 30: W, 31: q, 33: j, 35: p$1, 36: g, 37: 24, 38: y, 40: h }, t2(e, [2, 5]), t2(e, [2, 6]), t2(e, [2, 17]), t2(e, [2, 18]), t2(e, [2, 19]), t2(e, [2, 20]), t2(e, [2, 21]), t2(e, [2, 22]), t2(e, [2, 23]), t2(e, [2, 24]), t2(e, [2, 25]), t2(e, [2, 26]), t2(e, [2, 27]), { 32: [1, 37] }, { 34: [1, 38] }, t2(e, [2, 30]), t2(e, [2, 31]), t2(e, [2, 32]), { 39: [1, 39] }, t2(e, [2, 8]), t2(e, [2, 9]), t2(e, [2, 10]), t2(e, [2, 11]), t2(e, [2, 12]), t2(e, [2, 13]), t2(e, [2, 14]), t2(e, [2, 15]), t2(e, [2, 16]), { 41: [1, 40], 43: [1, 41] }, t2(e, [2, 4]), t2(e, [2, 28]), t2(e, [2, 29]), t2(e, [2, 33]), t2(e, [2, 34], { 42: [1, 42], 43: [1, 43] }), t2(e, [2, 40], { 41: [1, 44] }), t2(e, [2, 35], { 43: [1, 45] }), t2(e, [2, 36]), t2(e, [2, 38], { 42: [1, 46] }), t2(e, [2, 37]), t2(e, [2, 39])],
    defaultActions: {},
    parseError: /* @__PURE__ */ p(function(u, f) {
      if (f.recoverable)
        this.trace(u);
      else {
        var b = new Error(u);
        throw b.hash = f, b;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(u) {
      var f = this, b = [0], x = [], F2 = [null], o = [], X = this.table, s = "", E = 0, R2 = 0, z = 2, P = 1, K = o.slice.call(arguments, 1), O = Object.create(this.lexer), st = { yy: {} };
      for (var M in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, M) && (st.yy[M] = this.yy[M]);
      O.setInput(u, st.yy), st.yy.lexer = O, st.yy.parser = this, typeof O.yylloc > "u" && (O.yylloc = {});
      var H = O.yylloc;
      o.push(H);
      var V = O.options && O.options.ranges;
      typeof st.yy.parseError == "function" ? this.parseError = st.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function l(ot) {
        b.length = b.length - 2 * ot, F2.length = F2.length - ot, o.length = o.length - ot;
      }
      p(l, "popStack");
      function J() {
        var ot;
        return ot = x.pop() || O.lex() || P, typeof ot != "number" && (ot instanceof Array && (x = ot, ot = x.pop()), ot = f.symbols_[ot] || ot), ot;
      }
      p(J, "lex");
      for (var $, Q, G, it, at = {}, pt, ut, Oe, qt; ; ) {
        if (Q = b[b.length - 1], this.defaultActions[Q] ? G = this.defaultActions[Q] : (($ === null || typeof $ > "u") && ($ = J()), G = X[Q] && X[Q][$]), typeof G > "u" || !G.length || !G[0]) {
          var oe = "";
          qt = [];
          for (pt in X[Q])
            this.terminals_[pt] && pt > z && qt.push("'" + this.terminals_[pt] + "'");
          O.showPosition ? oe = "Parse error on line " + (E + 1) + `:
` + O.showPosition() + `
Expecting ` + qt.join(", ") + ", got '" + (this.terminals_[$] || $) + "'" : oe = "Parse error on line " + (E + 1) + ": Unexpected " + ($ == P ? "end of input" : "'" + (this.terminals_[$] || $) + "'"), this.parseError(oe, {
            text: O.match,
            token: this.terminals_[$] || $,
            line: O.yylineno,
            loc: H,
            expected: qt
          });
        }
        if (G[0] instanceof Array && G.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + Q + ", token: " + $);
        switch (G[0]) {
          case 1:
            b.push($), F2.push(O.yytext), o.push(O.yylloc), b.push(G[1]), $ = null, R2 = O.yyleng, s = O.yytext, E = O.yylineno, H = O.yylloc;
            break;
          case 2:
            if (ut = this.productions_[G[1]][1], at.$ = F2[F2.length - ut], at._$ = {
              first_line: o[o.length - (ut || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (ut || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, V && (at._$.range = [
              o[o.length - (ut || 1)].range[0],
              o[o.length - 1].range[1]
            ]), it = this.performAction.apply(at, [
              s,
              R2,
              E,
              st.yy,
              G[1],
              F2,
              o
            ].concat(K)), typeof it < "u")
              return it;
            ut && (b = b.slice(0, -1 * ut * 2), F2 = F2.slice(0, -1 * ut), o = o.slice(0, -1 * ut)), b.push(this.productions_[G[1]][0]), F2.push(at.$), o.push(at._$), Oe = X[b[b.length - 2]][b[b.length - 1]], b.push(Oe);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, w = /* @__PURE__ */ (function() {
    var v = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(f, b) {
        if (this.yy.parser)
          this.yy.parser.parseError(f, b);
        else
          throw new Error(f);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(u, f) {
        return this.yy = f || this.yy || {}, this._input = u, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var u = this._input[0];
        this.yytext += u, this.yyleng++, this.offset++, this.match += u, this.matched += u;
        var f = u.match(/(?:\r\n?|\n).*/g);
        return f ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), u;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(u) {
        var f = u.length, b = u.split(/(?:\r\n?|\n)/g);
        this._input = u + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - f), this.offset -= f;
        var x = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), b.length - 1 && (this.yylineno -= b.length - 1);
        var F2 = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: b ? (b.length === x.length ? this.yylloc.first_column : 0) + x[x.length - b.length].length - b[0].length : this.yylloc.first_column - f
        }, this.options.ranges && (this.yylloc.range = [F2[0], F2[0] + this.yyleng - f]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: /* @__PURE__ */ p(function() {
        return this._more = true, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: /* @__PURE__ */ p(function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: /* @__PURE__ */ p(function(u) {
        this.unput(this.match.slice(u));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var u = this.matched.substr(0, this.matched.length - this.match.length);
        return (u.length > 20 ? "..." : "") + u.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var u = this.match;
        return u.length < 20 && (u += this._input.substr(0, 20 - u.length)), (u.substr(0, 20) + (u.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var u = this.pastInput(), f = new Array(u.length + 1).join("-");
        return u + this.upcomingInput() + `
` + f + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(u, f) {
        var b, x, F2;
        if (this.options.backtrack_lexer && (F2 = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (F2.yylloc.range = this.yylloc.range.slice(0))), x = u[0].match(/(?:\r\n?|\n).*/g), x && (this.yylineno += x.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: x ? x[x.length - 1].length - x[x.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + u[0].length
        }, this.yytext += u[0], this.match += u[0], this.matches = u, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(u[0].length), this.matched += u[0], b = this.performAction.call(this, this.yy, this, f, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), b)
          return b;
        if (this._backtrack) {
          for (var o in F2)
            this[o] = F2[o];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var u, f, b, x;
        this._more || (this.yytext = "", this.match = "");
        for (var F2 = this._currentRules(), o = 0; o < F2.length; o++)
          if (b = this._input.match(this.rules[F2[o]]), b && (!f || b[0].length > f[0].length)) {
            if (f = b, x = o, this.options.backtrack_lexer) {
              if (u = this.test_match(b, F2[o]), u !== false)
                return u;
              if (this._backtrack) {
                f = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return f ? (u = this.test_match(f, F2[x]), u !== false ? u : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var f = this.next();
        return f || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(f) {
        this.conditionStack.push(f);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var f = this.conditionStack.length - 1;
        return f > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(f) {
        return f = this.conditionStack.length - 1 - Math.abs(f || 0), f >= 0 ? this.conditionStack[f] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(f) {
        this.begin(f);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(f, b, x, F2) {
        switch (x) {
          case 0:
            return this.begin("open_directive"), "open_directive";
          case 1:
            return this.begin("acc_title"), 31;
          case 2:
            return this.popState(), "acc_title_value";
          case 3:
            return this.begin("acc_descr"), 33;
          case 4:
            return this.popState(), "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 10;
          case 12:
            break;
          case 13:
            break;
          case 14:
            this.begin("href");
            break;
          case 15:
            this.popState();
            break;
          case 16:
            return 43;
          case 17:
            this.begin("callbackname");
            break;
          case 18:
            this.popState();
            break;
          case 19:
            this.popState(), this.begin("callbackargs");
            break;
          case 20:
            return 41;
          case 21:
            this.popState();
            break;
          case 22:
            return 42;
          case 23:
            this.begin("click");
            break;
          case 24:
            this.popState();
            break;
          case 25:
            return 40;
          case 26:
            return 4;
          case 27:
            return 22;
          case 28:
            return 23;
          case 29:
            return 24;
          case 30:
            return 25;
          case 31:
            return 26;
          case 32:
            return 28;
          case 33:
            return 27;
          case 34:
            return 29;
          case 35:
            return 12;
          case 36:
            return 13;
          case 37:
            return 14;
          case 38:
            return 15;
          case 39:
            return 16;
          case 40:
            return 17;
          case 41:
            return 18;
          case 42:
            return 20;
          case 43:
            return 21;
          case 44:
            return "date";
          case 45:
            return 30;
          case 46:
            return "accDescription";
          case 47:
            return 36;
          case 48:
            return 38;
          case 49:
            return 39;
          case 50:
            return ":";
          case 51:
            return 6;
          case 52:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:weekend\s+friday\b)/i, /^(?:weekend\s+saturday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^\n]+)/i, /^(?:[^:\n]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [6, 7], inclusive: false }, acc_descr: { rules: [4], inclusive: false }, acc_title: { rules: [2], inclusive: false }, callbackargs: { rules: [21, 22], inclusive: false }, callbackname: { rules: [18, 19, 20], inclusive: false }, href: { rules: [15, 16], inclusive: false }, click: { rules: [24, 25], inclusive: false }, INITIAL: { rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], inclusive: true } }
    };
    return v;
  })();
  D.lexer = w;
  function T() {
    this.yy = {};
  }
  return p(T, "Parser"), T.prototype = D, D.Parser = T, new T();
})();
xe.parser = xe;
var Gi = xe;
d0.extend(Wi);
d0.extend(Ni);
d0.extend(Ri);
var nn = { friday: 5, saturday: 6 }, lt = "", _e = "", Fe = void 0, Ye = "", Vt = [], zt = [], Ue = /* @__PURE__ */ new Map(), Ee = [], ie = [], It = "", Ie = "", _n = ["active", "done", "crit", "milestone", "vert"], Le = [], Rt = false, Ae = false, We = "sunday", se = "saturday", we = 0, ji = /* @__PURE__ */ p(function() {
  Ee = [], ie = [], It = "", Le = [], Kt = 0, Me = void 0, te = void 0, tt = [], lt = "", _e = "", Ie = "", Fe = void 0, Ye = "", Vt = [], zt = [], Rt = false, Ae = false, we = 0, Ue = /* @__PURE__ */ new Map(), By(), We = "sunday", se = "saturday";
}, "clear"), Qi = /* @__PURE__ */ p(function(t2) {
  _e = t2;
}, "setAxisFormat"), Ji = /* @__PURE__ */ p(function() {
  return _e;
}, "getAxisFormat"), Ki = /* @__PURE__ */ p(function(t2) {
  Fe = t2;
}, "setTickInterval"), ts = /* @__PURE__ */ p(function() {
  return Fe;
}, "getTickInterval"), es = /* @__PURE__ */ p(function(t2) {
  Ye = t2;
}, "setTodayMarker"), ns = /* @__PURE__ */ p(function() {
  return Ye;
}, "getTodayMarker"), rs = /* @__PURE__ */ p(function(t2) {
  lt = t2;
}, "setDateFormat"), is = /* @__PURE__ */ p(function() {
  Rt = true;
}, "enableInclusiveEndDates"), ss = /* @__PURE__ */ p(function() {
  return Rt;
}, "endDatesAreInclusive"), as = /* @__PURE__ */ p(function() {
  Ae = true;
}, "enableTopAxis"), os = /* @__PURE__ */ p(function() {
  return Ae;
}, "topAxisEnabled"), cs = /* @__PURE__ */ p(function(t2) {
  Ie = t2;
}, "setDisplayMode"), us = /* @__PURE__ */ p(function() {
  return Ie;
}, "getDisplayMode"), ls = /* @__PURE__ */ p(function() {
  return lt;
}, "getDateFormat"), fs = /* @__PURE__ */ p(function(t2) {
  Vt = t2.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), ds = /* @__PURE__ */ p(function() {
  return Vt;
}, "getIncludes"), hs = /* @__PURE__ */ p(function(t2) {
  zt = t2.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), ms = /* @__PURE__ */ p(function() {
  return zt;
}, "getExcludes"), gs = /* @__PURE__ */ p(function() {
  return Ue;
}, "getLinks"), ys = /* @__PURE__ */ p(function(t2) {
  It = t2, Ee.push(t2);
}, "addSection"), ks = /* @__PURE__ */ p(function() {
  return Ee;
}, "getSections"), ps = /* @__PURE__ */ p(function() {
  let t2 = rn();
  const e = 10;
  let n = 0;
  for (; !t2 && n < e; )
    t2 = rn(), n++;
  return ie = tt, ie;
}, "getTasks"), Fn = /* @__PURE__ */ p(function(t2, e, n, r) {
  const i = t2.format(e.trim()), a = t2.format("YYYY-MM-DD");
  return r.includes(i) || r.includes(a) ? false : n.includes("weekends") && (t2.isoWeekday() === nn[se] || t2.isoWeekday() === nn[se] + 1) || n.includes(t2.format("dddd").toLowerCase()) ? true : n.includes(i) || n.includes(a);
}, "isInvalidDate"), vs = /* @__PURE__ */ p(function(t2) {
  We = t2;
}, "setWeekday"), Ts = /* @__PURE__ */ p(function() {
  return We;
}, "getWeekday"), bs = /* @__PURE__ */ p(function(t2) {
  se = t2;
}, "setWeekend"), Yn = /* @__PURE__ */ p(function(t2, e, n, r) {
  if (!n.length || t2.manualEndTime)
    return;
  let i;
  t2.startTime instanceof Date ? i = d0(t2.startTime) : i = d0(t2.startTime, e, true), i = i.add(1, "d");
  let a;
  t2.endTime instanceof Date ? a = d0(t2.endTime) : a = d0(t2.endTime, e, true);
  const [c, m] = xs(
    i,
    a,
    e,
    n,
    r
  );
  t2.endTime = c.toDate(), t2.renderEndTime = m;
}, "checkTaskDates"), xs = /* @__PURE__ */ p(function(t2, e, n, r, i) {
  let a = false, c = null;
  for (; t2 <= e; )
    a || (c = e.toDate()), a = Fn(t2, n, r, i), a && (e = e.add(1, "d")), t2 = t2.add(1, "d");
  return [e, c];
}, "fixTaskDates"), De = /* @__PURE__ */ p(function(t2, e, n) {
  if (n = n.trim(), (/* @__PURE__ */ p((m) => {
    const Y = m.trim();
    return Y === "x" || Y === "X";
  }, "isTimestampFormat"))(e) && /^\d+$/.test(n))
    return new Date(Number(n));
  const a = /^after\s+(?<ids>[\d\w- ]+)/.exec(n);
  if (a !== null) {
    let m = null;
    for (const C2 of a.groups.ids.split(" ")) {
      let k = Ct(C2);
      k !== void 0 && (!m || k.endTime > m.endTime) && (m = k);
    }
    if (m)
      return m.endTime;
    const Y = /* @__PURE__ */ new Date();
    return Y.setHours(0, 0, 0, 0), Y;
  }
  let c = d0(n, e.trim(), true);
  if (c.isValid())
    return c.toDate();
  {
    F.debug("Invalid date:" + n), F.debug("With date format:" + e.trim());
    const m = new Date(n);
    if (m === void 0 || isNaN(m.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    m.getFullYear() < -1e4 || m.getFullYear() > 1e4)
      throw new Error("Invalid date:" + n);
    return m;
  }
}, "getStartDate"), Un = /* @__PURE__ */ p(function(t2) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t2.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, "parseDuration"), En = /* @__PURE__ */ p(function(t2, e, n, r = false) {
  n = n.trim();
  const a = /^until\s+(?<ids>[\d\w- ]+)/.exec(n);
  if (a !== null) {
    let k = null;
    for (const _ of a.groups.ids.split(" ")) {
      let S = Ct(_);
      S !== void 0 && (!k || S.startTime < k.startTime) && (k = S);
    }
    if (k)
      return k.startTime;
    const L = /* @__PURE__ */ new Date();
    return L.setHours(0, 0, 0, 0), L;
  }
  let c = d0(n, e.trim(), true);
  if (c.isValid())
    return r && (c = c.add(1, "d")), c.toDate();
  let m = d0(t2);
  const [Y, C2] = Un(n);
  if (!Number.isNaN(Y)) {
    const k = m.add(Y, C2);
    k.isValid() && (m = k);
  }
  return m.toDate();
}, "getEndDate"), Kt = 0, Yt = /* @__PURE__ */ p(function(t2) {
  return t2 === void 0 ? (Kt = Kt + 1, "task" + Kt) : t2;
}, "parseId"), ws = /* @__PURE__ */ p(function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  $e(r, i, _n);
  for (let c = 0; c < r.length; c++)
    r[c] = r[c].trim();
  let a = "";
  switch (r.length) {
    case 1:
      i.id = Yt(), i.startTime = t2.endTime, a = r[0];
      break;
    case 2:
      i.id = Yt(), i.startTime = De(void 0, lt, r[0]), a = r[1];
      break;
    case 3:
      i.id = Yt(r[0]), i.startTime = De(void 0, lt, r[1]), a = r[2];
      break;
  }
  return a && (i.endTime = En(i.startTime, lt, a, Rt), i.manualEndTime = d0(a, "YYYY-MM-DD", true).isValid(), Yn(i, lt, zt, Vt)), i;
}, "compileData"), Ds = /* @__PURE__ */ p(function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  $e(r, i, _n);
  for (let a = 0; a < r.length; a++)
    r[a] = r[a].trim();
  switch (r.length) {
    case 1:
      i.id = Yt(), i.startTime = {
        type: "prevTaskEnd",
        id: t2
      }, i.endTime = {
        data: r[0]
      };
      break;
    case 2:
      i.id = Yt(), i.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, i.endTime = {
        data: r[1]
      };
      break;
    case 3:
      i.id = Yt(r[0]), i.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, i.endTime = {
        data: r[2]
      };
      break;
  }
  return i;
}, "parseData"), Me, te, tt = [], In = {}, Ms = /* @__PURE__ */ p(function(t2, e) {
  const n = {
    section: It,
    type: It,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data: e },
    task: t2,
    classes: []
  }, r = Ds(te, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = te, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.vert = r.vert, n.order = we, we++;
  const i = tt.push(n);
  te = n.id, In[n.id] = i - 1;
}, "addTask"), Ct = /* @__PURE__ */ p(function(t2) {
  const e = In[t2];
  return tt[e];
}, "findTaskById"), Cs = /* @__PURE__ */ p(function(t2, e) {
  const n = {
    section: It,
    type: It,
    description: t2,
    task: t2,
    classes: []
  }, r = ws(Me, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.vert = r.vert, Me = n, ie.push(n);
}, "addTaskOrg"), rn = /* @__PURE__ */ p(function() {
  const t2 = /* @__PURE__ */ p(function(n) {
    const r = tt[n];
    let i = "";
    switch (tt[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const a = Ct(r.prevTaskId);
        r.startTime = a.endTime;
        break;
      }
      case "getStartDate":
        i = De(void 0, lt, tt[n].raw.startTime.startData), i && (tt[n].startTime = i);
        break;
    }
    return tt[n].startTime && (tt[n].endTime = En(
      tt[n].startTime,
      lt,
      tt[n].raw.endTime.data,
      Rt
    ), tt[n].endTime && (tt[n].processed = true, tt[n].manualEndTime = d0(
      tt[n].raw.endTime.data,
      "YYYY-MM-DD",
      true
    ).isValid(), Yn(tt[n], lt, zt, Vt))), tt[n].processed;
  }, "compileTask");
  let e = true;
  for (const [n, r] of tt.entries())
    t2(n), e = e && r.processed;
  return e;
}, "compileTasks"), Ss = /* @__PURE__ */ p(function(t2, e) {
  let n = e;
  ft$1().securityLevel !== "loose" && (n = AC.sanitizeUrl(e)), t2.split(",").forEach(function(r) {
    Ct(r) !== void 0 && (An(r, () => {
      window.open(n, "_self");
    }), Ue.set(r, n));
  }), Ln(t2, "clickable");
}, "setLink"), Ln = /* @__PURE__ */ p(function(t2, e) {
  t2.split(",").forEach(function(n) {
    let r = Ct(n);
    r !== void 0 && r.classes.push(e);
  });
}, "setClass"), _s = /* @__PURE__ */ p(function(t2, e, n) {
  if (ft$1().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let a = 0; a < r.length; a++) {
      let c = r[a].trim();
      c.startsWith('"') && c.endsWith('"') && (c = c.substr(1, c.length - 2)), r[a] = c;
    }
  }
  r.length === 0 && r.push(t2), Ct(t2) !== void 0 && An(t2, () => {
    ce.runFunc(e, ...r);
  });
}, "setClickFun"), An = /* @__PURE__ */ p(function(t2, e) {
  Le.push(
    function() {
      const n = document.querySelector(`[id="${t2}"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const n = document.querySelector(`[id="${t2}-text"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    }
  );
}, "pushFun"), Fs = /* @__PURE__ */ p(function(t2, e, n) {
  t2.split(",").forEach(function(r) {
    _s(r, e, n);
  }), Ln(t2, "clickable");
}, "setClickEvent"), Ys = /* @__PURE__ */ p(function(t2) {
  Le.forEach(function(e) {
    e(t2);
  });
}, "bindFunctions"), Us = {
  getConfig: /* @__PURE__ */ p(() => ft$1().gantt, "getConfig"),
  clear: ji,
  setDateFormat: rs,
  getDateFormat: ls,
  enableInclusiveEndDates: is,
  endDatesAreInclusive: ss,
  enableTopAxis: as,
  topAxisEnabled: os,
  setAxisFormat: Qi,
  getAxisFormat: Ji,
  setTickInterval: Ki,
  getTickInterval: ts,
  setTodayMarker: es,
  getTodayMarker: ns,
  setAccTitle: Ay,
  getAccTitle: Ly,
  setDiagramTitle: Ey,
  getDiagramTitle: Fy,
  setDisplayMode: cs,
  getDisplayMode: us,
  setAccDescription: My,
  getAccDescription: $y,
  addSection: ys,
  getSections: ks,
  getTasks: ps,
  addTask: Ms,
  findTaskById: Ct,
  addTaskOrg: Cs,
  setIncludes: fs,
  getIncludes: ds,
  setExcludes: hs,
  getExcludes: ms,
  setClickEvent: Fs,
  setLink: Ss,
  getLinks: gs,
  bindFunctions: Ys,
  parseDuration: Un,
  isInvalidDate: Fn,
  setWeekday: vs,
  getWeekday: Ts,
  setWeekend: bs
};
function $e(t2, e, n) {
  let r = true;
  for (; r; )
    r = false, n.forEach(function(i) {
      const a = "^\\s*" + i + "\\s*$", c = new RegExp(a);
      t2[0].match(c) && (e[i] = true, t2.shift(1), r = true);
    });
}
p($e, "getTaskTags");
d0.extend(Xi);
var Es = /* @__PURE__ */ p(function() {
  F.debug("Something is calling, setConf, remove the call");
}, "setConf"), sn = {
  monday: Ht,
  tuesday: pn,
  wednesday: vn,
  thursday: xt,
  friday: Tn,
  saturday: bn,
  sunday: Pt
}, Is = /* @__PURE__ */ p((t2, e) => {
  let n = [...t2].map(() => -1 / 0), r = [...t2].sort((a, c) => a.startTime - c.startTime || a.order - c.order), i = 0;
  for (const a of r)
    for (let c = 0; c < n.length; c++)
      if (a.startTime >= n[c]) {
        n[c] = a.endTime, a.order = c + e, c > i && (i = c);
        break;
      }
  return i;
}, "getMaxIntersections"), dt, ve = 1e4, Ls = /* @__PURE__ */ p(function(t2, e, n, r) {
  const i = ft$1().gantt, a = ft$1().securityLevel;
  let c;
  a === "sandbox" && (c = ht$1("#i" + e));
  const m = a === "sandbox" ? ht$1(c.nodes()[0].contentDocument.body) : ht$1("body"), Y = a === "sandbox" ? c.nodes()[0].contentDocument : document, C2 = Y.getElementById(e);
  dt = C2.parentElement.offsetWidth, dt === void 0 && (dt = 1200), i.useWidth !== void 0 && (dt = i.useWidth);
  const k = r.db.getTasks();
  let L = [];
  for (const h of k)
    L.push(h.type);
  L = y(L);
  const _ = {};
  let S = 2 * i.topPadding;
  if (r.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
    const h = {};
    for (const w of k)
      h[w.section] === void 0 ? h[w.section] = [w] : h[w.section].push(w);
    let D = 0;
    for (const w of Object.keys(h)) {
      const T = Is(h[w], D) + 1;
      D += T, S += T * (i.barHeight + i.barGap), _[w] = T;
    }
  } else {
    S += k.length * (i.barHeight + i.barGap);
    for (const h of L)
      _[h] = k.filter((D) => D.type === h).length;
  }
  C2.setAttribute("viewBox", "0 0 " + dt + " " + S);
  const Z = m.select(`[id="${e}"]`), A = Ei().domain([
    er(k, function(h) {
      return h.startTime;
    }),
    tr(k, function(h) {
      return h.endTime;
    })
  ]).rangeRound([0, dt - i.leftPadding - i.rightPadding]);
  function U(h, D) {
    const w = h.startTime, T = D.startTime;
    let v = 0;
    return w > T ? v = 1 : w < T && (v = -1), v;
  }
  p(U, "taskCompare"), k.sort(U), I(k, dt, S), Gh(Z, S, dt, i.useMaxWidth), Z.append("text").text(r.db.getDiagramTitle()).attr("x", dt / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
  function I(h, D, w) {
    const T = i.barHeight, v = T + i.barGap, u = i.topPadding, f = i.leftPadding, b = fn$1().domain([0, L.length]).range(["#00B9FA", "#F95002"]).interpolate(yr);
    W(
      v,
      u,
      f,
      D,
      w,
      h,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), j(f, u, D, w), N(h, v, u, f, T, b, D), p$1(v, u), g(f, u, D, w);
  }
  p(I, "makeGantt");
  function N(h, D, w, T, v, u, f) {
    h.sort((s, E) => s.vert === E.vert ? 0 : s.vert ? 1 : -1);
    const x = [...new Set(h.map((s) => s.order))].map((s) => h.find((E) => E.order === s));
    Z.append("g").selectAll("rect").data(x).enter().append("rect").attr("x", 0).attr("y", function(s, E) {
      return E = s.order, E * D + w - 2;
    }).attr("width", function() {
      return f - i.rightPadding / 2;
    }).attr("height", D).attr("class", function(s) {
      for (const [E, R2] of L.entries())
        if (s.type === R2)
          return "section section" + E % i.numberSectionStyles;
      return "section section0";
    }).enter();
    const F2 = Z.append("g").selectAll("rect").data(h).enter(), o = r.db.getLinks();
    if (F2.append("rect").attr("id", function(s) {
      return s.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(s) {
      return s.milestone ? A(s.startTime) + T + 0.5 * (A(s.endTime) - A(s.startTime)) - 0.5 * v : A(s.startTime) + T;
    }).attr("y", function(s, E) {
      return E = s.order, s.vert ? i.gridLineStartPadding : E * D + w;
    }).attr("width", function(s) {
      return s.milestone ? v : s.vert ? 0.08 * v : A(s.renderEndTime || s.endTime) - A(s.startTime);
    }).attr("height", function(s) {
      return s.vert ? k.length * (i.barHeight + i.barGap) + i.barHeight * 2 : v;
    }).attr("transform-origin", function(s, E) {
      return E = s.order, (A(s.startTime) + T + 0.5 * (A(s.endTime) - A(s.startTime))).toString() + "px " + (E * D + w + 0.5 * v).toString() + "px";
    }).attr("class", function(s) {
      const E = "task";
      let R2 = "";
      s.classes.length > 0 && (R2 = s.classes.join(" "));
      let z = 0;
      for (const [K, O] of L.entries())
        s.type === O && (z = K % i.numberSectionStyles);
      let P = "";
      return s.active ? s.crit ? P += " activeCrit" : P = " active" : s.done ? s.crit ? P = " doneCrit" : P = " done" : s.crit && (P += " crit"), P.length === 0 && (P = " task"), s.milestone && (P = " milestone " + P), s.vert && (P = " vert " + P), P += z, P += " " + R2, E + P;
    }), F2.append("text").attr("id", function(s) {
      return s.id + "-text";
    }).text(function(s) {
      return s.task;
    }).attr("font-size", i.fontSize).attr("x", function(s) {
      let E = A(s.startTime), R2 = A(s.renderEndTime || s.endTime);
      if (s.milestone && (E += 0.5 * (A(s.endTime) - A(s.startTime)) - 0.5 * v, R2 = E + v), s.vert)
        return A(s.startTime) + T;
      const z = this.getBBox().width;
      return z > R2 - E ? R2 + z + 1.5 * i.leftPadding > f ? E + T - 5 : R2 + T + 5 : (R2 - E) / 2 + E + T;
    }).attr("y", function(s, E) {
      return s.vert ? i.gridLineStartPadding + k.length * (i.barHeight + i.barGap) + 60 : (E = s.order, E * D + i.barHeight / 2 + (i.fontSize / 2 - 2) + w);
    }).attr("text-height", v).attr("class", function(s) {
      const E = A(s.startTime);
      let R2 = A(s.endTime);
      s.milestone && (R2 = E + v);
      const z = this.getBBox().width;
      let P = "";
      s.classes.length > 0 && (P = s.classes.join(" "));
      let K = 0;
      for (const [st, M] of L.entries())
        s.type === M && (K = st % i.numberSectionStyles);
      let O = "";
      return s.active && (s.crit ? O = "activeCritText" + K : O = "activeText" + K), s.done ? s.crit ? O = O + " doneCritText" + K : O = O + " doneText" + K : s.crit && (O = O + " critText" + K), s.milestone && (O += " milestoneText"), s.vert && (O += " vertText"), z > R2 - E ? R2 + z + 1.5 * i.leftPadding > f ? P + " taskTextOutsideLeft taskTextOutside" + K + " " + O : P + " taskTextOutsideRight taskTextOutside" + K + " " + O + " width-" + z : P + " taskText taskText" + K + " " + O + " width-" + z;
    }), ft$1().securityLevel === "sandbox") {
      let s;
      s = ht$1("#i" + e);
      const E = s.nodes()[0].contentDocument;
      F2.filter(function(R2) {
        return o.has(R2.id);
      }).each(function(R2) {
        var z = E.querySelector("#" + R2.id), P = E.querySelector("#" + R2.id + "-text");
        const K = z.parentNode;
        var O = E.createElement("a");
        O.setAttribute("xlink:href", o.get(R2.id)), O.setAttribute("target", "_top"), K.appendChild(O), O.appendChild(z), O.appendChild(P);
      });
    }
  }
  p(N, "drawRects");
  function W(h, D, w, T, v, u, f, b) {
    if (f.length === 0 && b.length === 0)
      return;
    let x, F$1;
    for (const { startTime: z, endTime: P } of u)
      (x === void 0 || z < x) && (x = z), (F$1 === void 0 || P > F$1) && (F$1 = P);
    if (!x || !F$1)
      return;
    if (d0(F$1).diff(d0(x), "year") > 5) {
      F.warn(
        "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days."
      );
      return;
    }
    const o = r.db.getDateFormat(), X = [];
    let s = null, E = d0(x);
    for (; E.valueOf() <= F$1; )
      r.db.isInvalidDate(E, o, f, b) ? s ? s.end = E : s = {
        start: E,
        end: E
      } : s && (X.push(s), s = null), E = E.add(1, "d");
    Z.append("g").selectAll("rect").data(X).enter().append("rect").attr("id", (z) => "exclude-" + z.start.format("YYYY-MM-DD")).attr("x", (z) => A(z.start.startOf("day")) + w).attr("y", i.gridLineStartPadding).attr("width", (z) => A(z.end.endOf("day")) - A(z.start.startOf("day"))).attr("height", v - D - i.gridLineStartPadding).attr("transform-origin", function(z, P) {
      return (A(z.start) + w + 0.5 * (A(z.end) - A(z.start))).toString() + "px " + (P * h + 0.5 * v).toString() + "px";
    }).attr("class", "exclude-range");
  }
  p(W, "drawExcludeDays");
  function q(h, D, w, T) {
    if (w <= 0 || h > D)
      return 1 / 0;
    const v = D - h, u = d0.duration({ [T ?? "day"]: w }).asMilliseconds();
    return u <= 0 ? 1 / 0 : Math.ceil(v / u);
  }
  p(q, "getEstimatedTickCount");
  function j(h, D, w, T) {
    const v = r.db.getDateFormat(), u = r.db.getAxisFormat();
    let f;
    u ? f = u : v === "D" ? f = "%d" : f = i.axisFormat ?? "%Y-%m-%d";
    let b = ur(A).tickSize(-T + D + i.gridLineStartPadding).tickFormat(re(f));
    const F$1 = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || i.tickInterval
    );
    if (F$1 !== null) {
      const o = parseInt(F$1[1], 10);
      if (isNaN(o) || o <= 0)
        F.warn(
          `Invalid tick interval value: "${F$1[1]}". Skipping custom tick interval.`
        );
      else {
        const X = F$1[2], s = r.db.getWeekday() || i.weekday, E = A.domain(), R2 = E[0], z = E[1], P = q(R2, z, o, X);
        if (P > ve)
          F.warn(
            `The tick interval "${o}${X}" would generate ${P} ticks, which exceeds the maximum allowed (${ve}). This may indicate an invalid date or time range. Skipping custom tick interval.`
          );
        else
          switch (X) {
            case "millisecond":
              b.ticks(Ut.every(o));
              break;
            case "second":
              b.ticks(vt.every(o));
              break;
            case "minute":
              b.ticks($t.every(o));
              break;
            case "hour":
              b.ticks(Ot.every(o));
              break;
            case "day":
              b.ticks(bt.every(o));
              break;
            case "week":
              b.ticks(sn[s].every(o));
              break;
            case "month":
              b.ticks(Nt.every(o));
              break;
          }
      }
    }
    if (Z.append("g").attr("class", "grid").attr("transform", "translate(" + h + ", " + (T - 50) + ")").call(b).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || i.topAxis) {
      let o = cr(A).tickSize(-T + D + i.gridLineStartPadding).tickFormat(re(f));
      if (F$1 !== null) {
        const X = parseInt(F$1[1], 10);
        if (isNaN(X) || X <= 0)
          F.warn(
            `Invalid tick interval value: "${F$1[1]}". Skipping custom tick interval.`
          );
        else {
          const s = F$1[2], E = r.db.getWeekday() || i.weekday, R2 = A.domain(), z = R2[0], P = R2[1];
          if (q(z, P, X, s) <= ve)
            switch (s) {
              case "millisecond":
                o.ticks(Ut.every(X));
                break;
              case "second":
                o.ticks(vt.every(X));
                break;
              case "minute":
                o.ticks($t.every(X));
                break;
              case "hour":
                o.ticks(Ot.every(X));
                break;
              case "day":
                o.ticks(bt.every(X));
                break;
              case "week":
                o.ticks(sn[E].every(X));
                break;
              case "month":
                o.ticks(Nt.every(X));
                break;
            }
        }
      }
      Z.append("g").attr("class", "grid").attr("transform", "translate(" + h + ", " + D + ")").call(o).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  p(j, "makeGrid");
  function p$1(h, D) {
    let w = 0;
    const T = Object.keys(_).map((v) => [v, _[v]]);
    Z.append("g").selectAll("text").data(T).enter().append(function(v) {
      const u = v[0].split(Qr$1.lineBreakRegex), f = -(u.length - 1) / 2, b = Y.createElementNS("http://www.w3.org/2000/svg", "text");
      b.setAttribute("dy", f + "em");
      for (const [x, F2] of u.entries()) {
        const o = Y.createElementNS("http://www.w3.org/2000/svg", "tspan");
        o.setAttribute("alignment-baseline", "central"), o.setAttribute("x", "10"), x > 0 && o.setAttribute("dy", "1em"), o.textContent = F2, b.appendChild(o);
      }
      return b;
    }).attr("x", 10).attr("y", function(v, u) {
      if (u > 0)
        for (let f = 0; f < u; f++)
          return w += T[u - 1][1], v[1] * h / 2 + w * h + D;
      else
        return v[1] * h / 2 + D;
    }).attr("font-size", i.sectionFontSize).attr("class", function(v) {
      for (const [u, f] of L.entries())
        if (v[0] === f)
          return "sectionTitle sectionTitle" + u % i.numberSectionStyles;
      return "sectionTitle";
    });
  }
  p(p$1, "vertLabels");
  function g(h, D, w, T) {
    const v = r.db.getTodayMarker();
    if (v === "off")
      return;
    const u = Z.append("g").attr("class", "today"), f = /* @__PURE__ */ new Date(), b = u.append("line");
    b.attr("x1", A(f) + h).attr("x2", A(f) + h).attr("y1", i.titleTopMargin).attr("y2", T - i.titleTopMargin).attr("class", "today"), v !== "" && b.attr("style", v.replace(/,/g, ";"));
  }
  p(g, "drawToday");
  function y(h) {
    const D = {}, w = [];
    for (let T = 0, v = h.length; T < v; ++T)
      Object.prototype.hasOwnProperty.call(D, h[T]) || (D[h[T]] = true, w.push(h[T]));
    return w;
  }
  p(y, "checkUnique");
}, "draw"), As = {
  setConf: Es,
  draw: Ls
}, Ws = /* @__PURE__ */ p((t2) => `
  .mermaid-main-font {
        font-family: ${t2.fontFamily};
  }

  .exclude-range {
    fill: ${t2.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t2.sectionBkgColor};
  }

  .section2 {
    fill: ${t2.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t2.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t2.titleColor};
  }

  .sectionTitle1 {
    fill: ${t2.titleColor};
  }

  .sectionTitle2 {
    fill: ${t2.titleColor};
  }

  .sectionTitle3 {
    fill: ${t2.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t2.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t2.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t2.fontFamily};
    fill: ${t2.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t2.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t2.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t2.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t2.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t2.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t2.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t2.taskBkgColor};
    stroke: ${t2.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t2.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t2.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t2.activeTaskBkgColor};
    stroke: ${t2.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t2.doneTaskBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t2.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t2.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.titleColor || t2.textColor};
    font-family: ${t2.fontFamily};
  }
`, "getStyles"), $s = Ws, Ps = {
  parser: Gi,
  db: Us,
  renderer: As,
  styles: $s
};
export {
  Ps as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHREaWFncmFtLUpFTE5NT0EzLVBLa3ZLZVZtLUJQMFduTzhnLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLW1lcm1haWQtc3RyaW5nL2Rpc3QvZ2FudHREaWFncmFtLUpFTE5NT0EzLVBLa3ZLZVZtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJiIGFzIGFuLCBiYyBhcyBXbiwgYmQgYXMgb24sIGJlIGFzIGNuLCBiZiBhcyB1biwgYmcgYXMgY2UsIGJoIGFzICRuLCBhRyBhcyBhZSwgXyBhcyBkLCBnIGFzIE9uLCBzIGFzIEhuLCBxIGFzIE5uLCBwIGFzIFBuLCBhIGFzIFZuLCBiIGFzIHpuLCBjIGFzIF90LCBkIGFzIFp0LCBlIGFzIFJuLCBiaSBhcyBydCwgbCBhcyBUdCwgayBhcyBxbiwgaiBhcyBabiwgeSBhcyBCbiwgdSBhcyBYbiB9IGZyb20gXCIuL2VudHJ5LUIyVlgta3hhLmpzXCI7XG5pbXBvcnQgeyBiIGFzIEduLCB0IGFzIEhlLCBjIGFzIGpuLCBhIGFzIFFuLCBsIGFzIEpuIH0gZnJvbSBcIi4vbGluZWFyLVplcTR3djkzLmpzXCI7XG5pbXBvcnQgeyBpIGFzIEtuIH0gZnJvbSBcIi4vaW5pdC1EalVPQzRzdC5qc1wiO1xuZnVuY3Rpb24gdHIodCwgZSkge1xuICBsZXQgbjtcbiAgaWYgKGUgPT09IHZvaWQgMClcbiAgICBmb3IgKGNvbnN0IHIgb2YgdClcbiAgICAgIHIgIT0gbnVsbCAmJiAobiA8IHIgfHwgbiA9PT0gdm9pZCAwICYmIHIgPj0gcikgJiYgKG4gPSByKTtcbiAgZWxzZSB7XG4gICAgbGV0IHIgPSAtMTtcbiAgICBmb3IgKGxldCBpIG9mIHQpXG4gICAgICAoaSA9IGUoaSwgKytyLCB0KSkgIT0gbnVsbCAmJiAobiA8IGkgfHwgbiA9PT0gdm9pZCAwICYmIGkgPj0gaSkgJiYgKG4gPSBpKTtcbiAgfVxuICByZXR1cm4gbjtcbn1cbmZ1bmN0aW9uIGVyKHQsIGUpIHtcbiAgbGV0IG47XG4gIGlmIChlID09PSB2b2lkIDApXG4gICAgZm9yIChjb25zdCByIG9mIHQpXG4gICAgICByICE9IG51bGwgJiYgKG4gPiByIHx8IG4gPT09IHZvaWQgMCAmJiByID49IHIpICYmIChuID0gcik7XG4gIGVsc2Uge1xuICAgIGxldCByID0gLTE7XG4gICAgZm9yIChsZXQgaSBvZiB0KVxuICAgICAgKGkgPSBlKGksICsrciwgdCkpICE9IG51bGwgJiYgKG4gPiBpIHx8IG4gPT09IHZvaWQgMCAmJiBpID49IGkpICYmIChuID0gaSk7XG4gIH1cbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBucih0KSB7XG4gIHJldHVybiB0O1xufVxudmFyIFh0ID0gMSwgdWUgPSAyLCBUZSA9IDMsIEJ0ID0gNCwgTmUgPSAxZS02O1xuZnVuY3Rpb24gcnIodCkge1xuICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0ICsgXCIsMClcIjtcbn1cbmZ1bmN0aW9uIGlyKHQpIHtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyB0ICsgXCIpXCI7XG59XG5mdW5jdGlvbiBzcih0KSB7XG4gIHJldHVybiAoZSkgPT4gK3QoZSk7XG59XG5mdW5jdGlvbiBhcih0LCBlKSB7XG4gIHJldHVybiBlID0gTWF0aC5tYXgoMCwgdC5iYW5kd2lkdGgoKSAtIGUgKiAyKSAvIDIsIHQucm91bmQoKSAmJiAoZSA9IE1hdGgucm91bmQoZSkpLCAobikgPT4gK3QobikgKyBlO1xufVxuZnVuY3Rpb24gb3IoKSB7XG4gIHJldHVybiAhdGhpcy5fX2F4aXM7XG59XG5mdW5jdGlvbiBsbih0LCBlKSB7XG4gIHZhciBuID0gW10sIHIgPSBudWxsLCBpID0gbnVsbCwgYSA9IDYsIGMgPSA2LCBtID0gMywgWSA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgPyAwIDogMC41LCBDID0gdCA9PT0gWHQgfHwgdCA9PT0gQnQgPyAtMSA6IDEsIGsgPSB0ID09PSBCdCB8fCB0ID09PSB1ZSA/IFwieFwiIDogXCJ5XCIsIEwgPSB0ID09PSBYdCB8fCB0ID09PSBUZSA/IHJyIDogaXI7XG4gIGZ1bmN0aW9uIF8oUykge1xuICAgIHZhciBaID0gciA/PyAoZS50aWNrcyA/IGUudGlja3MuYXBwbHkoZSwgbikgOiBlLmRvbWFpbigpKSwgQSA9IGkgPz8gKGUudGlja0Zvcm1hdCA/IGUudGlja0Zvcm1hdC5hcHBseShlLCBuKSA6IG5yKSwgVSA9IE1hdGgubWF4KGEsIDApICsgbSwgSSA9IGUucmFuZ2UoKSwgTiA9ICtJWzBdICsgWSwgVyA9ICtJW0kubGVuZ3RoIC0gMV0gKyBZLCBxID0gKGUuYmFuZHdpZHRoID8gYXIgOiBzcikoZS5jb3B5KCksIFkpLCBqID0gUy5zZWxlY3Rpb24gPyBTLnNlbGVjdGlvbigpIDogUywgcCA9IGouc2VsZWN0QWxsKFwiLmRvbWFpblwiKS5kYXRhKFtudWxsXSksIGcgPSBqLnNlbGVjdEFsbChcIi50aWNrXCIpLmRhdGEoWiwgZSkub3JkZXIoKSwgeSA9IGcuZXhpdCgpLCBoID0gZy5lbnRlcigpLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidGlja1wiKSwgRCA9IGcuc2VsZWN0KFwibGluZVwiKSwgdyA9IGcuc2VsZWN0KFwidGV4dFwiKTtcbiAgICBwID0gcC5tZXJnZShwLmVudGVyKCkuaW5zZXJ0KFwicGF0aFwiLCBcIi50aWNrXCIpLmF0dHIoXCJjbGFzc1wiLCBcImRvbWFpblwiKS5hdHRyKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpKSwgZyA9IGcubWVyZ2UoaCksIEQgPSBELm1lcmdlKGguYXBwZW5kKFwibGluZVwiKS5hdHRyKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpLmF0dHIoayArIFwiMlwiLCBDICogYSkpLCB3ID0gdy5tZXJnZShoLmFwcGVuZChcInRleHRcIikuYXR0cihcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIikuYXR0cihrLCBDICogVSkuYXR0cihcImR5XCIsIHQgPT09IFh0ID8gXCIwZW1cIiA6IHQgPT09IFRlID8gXCIwLjcxZW1cIiA6IFwiMC4zMmVtXCIpKSwgUyAhPT0gaiAmJiAocCA9IHAudHJhbnNpdGlvbihTKSwgZyA9IGcudHJhbnNpdGlvbihTKSwgRCA9IEQudHJhbnNpdGlvbihTKSwgdyA9IHcudHJhbnNpdGlvbihTKSwgeSA9IHkudHJhbnNpdGlvbihTKS5hdHRyKFwib3BhY2l0eVwiLCBOZSkuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihUKSB7XG4gICAgICByZXR1cm4gaXNGaW5pdGUoVCA9IHEoVCkpID8gTChUICsgWSkgOiB0aGlzLmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcbiAgICB9KSwgaC5hdHRyKFwib3BhY2l0eVwiLCBOZSkuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihUKSB7XG4gICAgICB2YXIgdiA9IHRoaXMucGFyZW50Tm9kZS5fX2F4aXM7XG4gICAgICByZXR1cm4gTCgodiAmJiBpc0Zpbml0ZSh2ID0gdihUKSkgPyB2IDogcShUKSkgKyBZKTtcbiAgICB9KSksIHkucmVtb3ZlKCksIHAuYXR0cihcImRcIiwgdCA9PT0gQnQgfHwgdCA9PT0gdWUgPyBjID8gXCJNXCIgKyBDICogYyArIFwiLFwiICsgTiArIFwiSFwiICsgWSArIFwiVlwiICsgVyArIFwiSFwiICsgQyAqIGMgOiBcIk1cIiArIFkgKyBcIixcIiArIE4gKyBcIlZcIiArIFcgOiBjID8gXCJNXCIgKyBOICsgXCIsXCIgKyBDICogYyArIFwiVlwiICsgWSArIFwiSFwiICsgVyArIFwiVlwiICsgQyAqIGMgOiBcIk1cIiArIE4gKyBcIixcIiArIFkgKyBcIkhcIiArIFcpLCBnLmF0dHIoXCJvcGFjaXR5XCIsIDEpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oVCkge1xuICAgICAgcmV0dXJuIEwocShUKSArIFkpO1xuICAgIH0pLCBELmF0dHIoayArIFwiMlwiLCBDICogYSksIHcuYXR0cihrLCBDICogVSkudGV4dChBKSwgai5maWx0ZXIob3IpLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKS5hdHRyKFwiZm9udC1zaXplXCIsIDEwKS5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCB0ID09PSB1ZSA/IFwic3RhcnRcIiA6IHQgPT09IEJ0ID8gXCJlbmRcIiA6IFwibWlkZGxlXCIpLCBqLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9fYXhpcyA9IHE7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIF8uc2NhbGUgPSBmdW5jdGlvbihTKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZSA9IFMsIF8pIDogZTtcbiAgfSwgXy50aWNrcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuID0gQXJyYXkuZnJvbShhcmd1bWVudHMpLCBfO1xuICB9LCBfLnRpY2tBcmd1bWVudHMgPSBmdW5jdGlvbihTKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobiA9IFMgPT0gbnVsbCA/IFtdIDogQXJyYXkuZnJvbShTKSwgXykgOiBuLnNsaWNlKCk7XG4gIH0sIF8udGlja1ZhbHVlcyA9IGZ1bmN0aW9uKFMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyID0gUyA9PSBudWxsID8gbnVsbCA6IEFycmF5LmZyb20oUyksIF8pIDogciAmJiByLnNsaWNlKCk7XG4gIH0sIF8udGlja0Zvcm1hdCA9IGZ1bmN0aW9uKFMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpID0gUywgXykgOiBpO1xuICB9LCBfLnRpY2tTaXplID0gZnVuY3Rpb24oUykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGEgPSBjID0gK1MsIF8pIDogYTtcbiAgfSwgXy50aWNrU2l6ZUlubmVyID0gZnVuY3Rpb24oUykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGEgPSArUywgXykgOiBhO1xuICB9LCBfLnRpY2tTaXplT3V0ZXIgPSBmdW5jdGlvbihTKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYyA9ICtTLCBfKSA6IGM7XG4gIH0sIF8udGlja1BhZGRpbmcgPSBmdW5jdGlvbihTKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobSA9ICtTLCBfKSA6IG07XG4gIH0sIF8ub2Zmc2V0ID0gZnVuY3Rpb24oUykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKFkgPSArUywgXykgOiBZO1xuICB9LCBfO1xufVxuZnVuY3Rpb24gY3IodCkge1xuICByZXR1cm4gbG4oWHQsIHQpO1xufVxuZnVuY3Rpb24gdXIodCkge1xuICByZXR1cm4gbG4oVGUsIHQpO1xufVxuY29uc3QgbHIgPSBNYXRoLlBJIC8gMTgwLCBmciA9IDE4MCAvIE1hdGguUEksIGVlID0gMTgsIGZuID0gMC45NjQyMiwgZG4gPSAxLCBobiA9IDAuODI1MjEsIG1uID0gNCAvIDI5LCBGdCA9IDYgLyAyOSwgZ24gPSAzICogRnQgKiBGdCwgZHIgPSBGdCAqIEZ0ICogRnQ7XG5mdW5jdGlvbiB5bih0KSB7XG4gIGlmICh0IGluc3RhbmNlb2YgZnQpIHJldHVybiBuZXcgZnQodC5sLCB0LmEsIHQuYiwgdC5vcGFjaXR5KTtcbiAgaWYgKHQgaW5zdGFuY2VvZiBodCkgcmV0dXJuIGtuKHQpO1xuICB0IGluc3RhbmNlb2YgYW4gfHwgKHQgPSBXbih0KSk7XG4gIHZhciBlID0gaGUodC5yKSwgbiA9IGhlKHQuZyksIHIgPSBoZSh0LmIpLCBpID0gbGUoKDAuMjIyNTA0NSAqIGUgKyAwLjcxNjg3ODYgKiBuICsgMC4wNjA2MTY5ICogcikgLyBkbiksIGEsIGM7XG4gIHJldHVybiBlID09PSBuICYmIG4gPT09IHIgPyBhID0gYyA9IGkgOiAoYSA9IGxlKCgwLjQzNjA3NDcgKiBlICsgMC4zODUwNjQ5ICogbiArIDAuMTQzMDgwNCAqIHIpIC8gZm4pLCBjID0gbGUoKDAuMDEzOTMyMiAqIGUgKyAwLjA5NzEwNDUgKiBuICsgMC43MTQxNzMzICogcikgLyBobikpLCBuZXcgZnQoMTE2ICogaSAtIDE2LCA1MDAgKiAoYSAtIGkpLCAyMDAgKiAoaSAtIGMpLCB0Lm9wYWNpdHkpO1xufVxuZnVuY3Rpb24gaHIodCwgZSwgbiwgcikge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IHluKHQpIDogbmV3IGZ0KHQsIGUsIG4sIHIgPz8gMSk7XG59XG5mdW5jdGlvbiBmdCh0LCBlLCBuLCByKSB7XG4gIHRoaXMubCA9ICt0LCB0aGlzLmEgPSArZSwgdGhpcy5iID0gK24sIHRoaXMub3BhY2l0eSA9ICtyO1xufVxub24oZnQsIGhyLCBjbih1biwge1xuICBicmlnaHRlcih0KSB7XG4gICAgcmV0dXJuIG5ldyBmdCh0aGlzLmwgKyBlZSAqICh0ID8/IDEpLCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKHQpIHtcbiAgICByZXR1cm4gbmV3IGZ0KHRoaXMubCAtIGVlICogKHQgPz8gMSksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgdmFyIHQgPSAodGhpcy5sICsgMTYpIC8gMTE2LCBlID0gaXNOYU4odGhpcy5hKSA/IHQgOiB0ICsgdGhpcy5hIC8gNTAwLCBuID0gaXNOYU4odGhpcy5iKSA/IHQgOiB0IC0gdGhpcy5iIC8gMjAwO1xuICAgIHJldHVybiBlID0gZm4gKiBmZShlKSwgdCA9IGRuICogZmUodCksIG4gPSBobiAqIGZlKG4pLCBuZXcgYW4oXG4gICAgICBkZSgzLjEzMzg1NjEgKiBlIC0gMS42MTY4NjY3ICogdCAtIDAuNDkwNjE0NiAqIG4pLFxuICAgICAgZGUoLTAuOTc4NzY4NCAqIGUgKyAxLjkxNjE0MTUgKiB0ICsgMC4wMzM0NTQgKiBuKSxcbiAgICAgIGRlKDAuMDcxOTQ1MyAqIGUgLSAwLjIyODk5MTQgKiB0ICsgMS40MDUyNDI3ICogbiksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9XG59KSk7XG5mdW5jdGlvbiBsZSh0KSB7XG4gIHJldHVybiB0ID4gZHIgPyBNYXRoLnBvdyh0LCAxIC8gMykgOiB0IC8gZ24gKyBtbjtcbn1cbmZ1bmN0aW9uIGZlKHQpIHtcbiAgcmV0dXJuIHQgPiBGdCA/IHQgKiB0ICogdCA6IGduICogKHQgLSBtbik7XG59XG5mdW5jdGlvbiBkZSh0KSB7XG4gIHJldHVybiAyNTUgKiAodCA8PSAzMTMwOGUtNyA/IDEyLjkyICogdCA6IDEuMDU1ICogTWF0aC5wb3codCwgMSAvIDIuNCkgLSAwLjA1NSk7XG59XG5mdW5jdGlvbiBoZSh0KSB7XG4gIHJldHVybiAodCAvPSAyNTUpIDw9IDAuMDQwNDUgPyB0IC8gMTIuOTIgOiBNYXRoLnBvdygodCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xufVxuZnVuY3Rpb24gbXIodCkge1xuICBpZiAodCBpbnN0YW5jZW9mIGh0KSByZXR1cm4gbmV3IGh0KHQuaCwgdC5jLCB0LmwsIHQub3BhY2l0eSk7XG4gIGlmICh0IGluc3RhbmNlb2YgZnQgfHwgKHQgPSB5bih0KSksIHQuYSA9PT0gMCAmJiB0LmIgPT09IDApIHJldHVybiBuZXcgaHQoTmFOLCAwIDwgdC5sICYmIHQubCA8IDEwMCA/IDAgOiBOYU4sIHQubCwgdC5vcGFjaXR5KTtcbiAgdmFyIGUgPSBNYXRoLmF0YW4yKHQuYiwgdC5hKSAqIGZyO1xuICByZXR1cm4gbmV3IGh0KGUgPCAwID8gZSArIDM2MCA6IGUsIE1hdGguc3FydCh0LmEgKiB0LmEgKyB0LmIgKiB0LmIpLCB0LmwsIHQub3BhY2l0eSk7XG59XG5mdW5jdGlvbiBiZSh0LCBlLCBuLCByKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gbXIodCkgOiBuZXcgaHQodCwgZSwgbiwgciA/PyAxKTtcbn1cbmZ1bmN0aW9uIGh0KHQsIGUsIG4sIHIpIHtcbiAgdGhpcy5oID0gK3QsIHRoaXMuYyA9ICtlLCB0aGlzLmwgPSArbiwgdGhpcy5vcGFjaXR5ID0gK3I7XG59XG5mdW5jdGlvbiBrbih0KSB7XG4gIGlmIChpc05hTih0LmgpKSByZXR1cm4gbmV3IGZ0KHQubCwgMCwgMCwgdC5vcGFjaXR5KTtcbiAgdmFyIGUgPSB0LmggKiBscjtcbiAgcmV0dXJuIG5ldyBmdCh0LmwsIE1hdGguY29zKGUpICogdC5jLCBNYXRoLnNpbihlKSAqIHQuYywgdC5vcGFjaXR5KTtcbn1cbm9uKGh0LCBiZSwgY24odW4sIHtcbiAgYnJpZ2h0ZXIodCkge1xuICAgIHJldHVybiBuZXcgaHQodGhpcy5oLCB0aGlzLmMsIHRoaXMubCArIGVlICogKHQgPz8gMSksIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcih0KSB7XG4gICAgcmV0dXJuIG5ldyBodCh0aGlzLmgsIHRoaXMuYywgdGhpcy5sIC0gZWUgKiAodCA/PyAxKSwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiKCkge1xuICAgIHJldHVybiBrbih0aGlzKS5yZ2IoKTtcbiAgfVxufSkpO1xuZnVuY3Rpb24gZ3IodCkge1xuICByZXR1cm4gZnVuY3Rpb24oZSwgbikge1xuICAgIHZhciByID0gdCgoZSA9IGJlKGUpKS5oLCAobiA9IGJlKG4pKS5oKSwgaSA9IGNlKGUuYywgbi5jKSwgYSA9IGNlKGUubCwgbi5sKSwgYyA9IGNlKGUub3BhY2l0eSwgbi5vcGFjaXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24obSkge1xuICAgICAgcmV0dXJuIGUuaCA9IHIobSksIGUuYyA9IGkobSksIGUubCA9IGEobSksIGUub3BhY2l0eSA9IGMobSksIGUgKyBcIlwiO1xuICAgIH07XG4gIH07XG59XG5jb25zdCB5ciA9IGdyKCRuKTtcbmZ1bmN0aW9uIGtyKHQsIGUpIHtcbiAgdCA9IHQuc2xpY2UoKTtcbiAgdmFyIG4gPSAwLCByID0gdC5sZW5ndGggLSAxLCBpID0gdFtuXSwgYSA9IHRbcl0sIGM7XG4gIHJldHVybiBhIDwgaSAmJiAoYyA9IG4sIG4gPSByLCByID0gYywgYyA9IGksIGkgPSBhLCBhID0gYyksIHRbbl0gPSBlLmZsb29yKGkpLCB0W3JdID0gZS5jZWlsKGEpLCB0O1xufVxuY29uc3QgbWUgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSwgZ2UgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbmZ1bmN0aW9uIGV0KHQsIGUsIG4sIHIpIHtcbiAgZnVuY3Rpb24gaShhKSB7XG4gICAgcmV0dXJuIHQoYSA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDAgPyAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSA6IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgrYSkpLCBhO1xuICB9XG4gIHJldHVybiBpLmZsb29yID0gKGEpID0+ICh0KGEgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoK2EpKSwgYSksIGkuY2VpbCA9IChhKSA9PiAodChhID0gbmV3IERhdGUoYSAtIDEpKSwgZShhLCAxKSwgdChhKSwgYSksIGkucm91bmQgPSAoYSkgPT4ge1xuICAgIGNvbnN0IGMgPSBpKGEpLCBtID0gaS5jZWlsKGEpO1xuICAgIHJldHVybiBhIC0gYyA8IG0gLSBhID8gYyA6IG07XG4gIH0sIGkub2Zmc2V0ID0gKGEsIGMpID0+IChlKGEgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoK2EpLCBjID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihjKSksIGEpLCBpLnJhbmdlID0gKGEsIGMsIG0pID0+IHtcbiAgICBjb25zdCBZID0gW107XG4gICAgaWYgKGEgPSBpLmNlaWwoYSksIG0gPSBtID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihtKSwgIShhIDwgYykgfHwgIShtID4gMCkpIHJldHVybiBZO1xuICAgIGxldCBDO1xuICAgIGRvXG4gICAgICBZLnB1c2goQyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgrYSkpLCBlKGEsIG0pLCB0KGEpO1xuICAgIHdoaWxlIChDIDwgYSAmJiBhIDwgYyk7XG4gICAgcmV0dXJuIFk7XG4gIH0sIGkuZmlsdGVyID0gKGEpID0+IGV0KChjKSA9PiB7XG4gICAgaWYgKGMgPj0gYykgZm9yICg7IHQoYyksICFhKGMpOyApIGMuc2V0VGltZShjIC0gMSk7XG4gIH0sIChjLCBtKSA9PiB7XG4gICAgaWYgKGMgPj0gYylcbiAgICAgIGlmIChtIDwgMCkgZm9yICg7ICsrbSA8PSAwOyApXG4gICAgICAgIGZvciAoOyBlKGMsIC0xKSwgIWEoYyk7IClcbiAgICAgICAgICA7XG4gICAgICBlbHNlIGZvciAoOyAtLW0gPj0gMDsgKVxuICAgICAgICBmb3IgKDsgZShjLCAxKSwgIWEoYyk7IClcbiAgICAgICAgICA7XG4gIH0pLCBuICYmIChpLmNvdW50ID0gKGEsIGMpID0+IChtZS5zZXRUaW1lKCthKSwgZ2Uuc2V0VGltZSgrYyksIHQobWUpLCB0KGdlKSwgTWF0aC5mbG9vcihuKG1lLCBnZSkpKSwgaS5ldmVyeSA9IChhKSA9PiAoYSA9IE1hdGguZmxvb3IoYSksICFpc0Zpbml0ZShhKSB8fCAhKGEgPiAwKSA/IG51bGwgOiBhID4gMSA/IGkuZmlsdGVyKHIgPyAoYykgPT4gcihjKSAlIGEgPT09IDAgOiAoYykgPT4gaS5jb3VudCgwLCBjKSAlIGEgPT09IDApIDogaSkpLCBpO1xufVxuY29uc3QgVXQgPSBldCgoKSA9PiB7XG59LCAodCwgZSkgPT4ge1xuICB0LnNldFRpbWUoK3QgKyBlKTtcbn0sICh0LCBlKSA9PiBlIC0gdCk7XG5VdC5ldmVyeSA9ICh0KSA9PiAodCA9IE1hdGguZmxvb3IodCksICFpc0Zpbml0ZSh0KSB8fCAhKHQgPiAwKSA/IG51bGwgOiB0ID4gMSA/IGV0KChlKSA9PiB7XG4gIGUuc2V0VGltZShNYXRoLmZsb29yKGUgLyB0KSAqIHQpO1xufSwgKGUsIG4pID0+IHtcbiAgZS5zZXRUaW1lKCtlICsgbiAqIHQpO1xufSwgKGUsIG4pID0+IChuIC0gZSkgLyB0KSA6IFV0KTtcblV0LnJhbmdlO1xuY29uc3QgbXQgPSAxZTMsIGN0ID0gbXQgKiA2MCwgZ3QgPSBjdCAqIDYwLCB5dCA9IGd0ICogMjQsIENlID0geXQgKiA3LCBQZSA9IHl0ICogMzAsIHllID0geXQgKiAzNjUsIHZ0ID0gZXQoKHQpID0+IHtcbiAgdC5zZXRUaW1lKHQgLSB0LmdldE1pbGxpc2Vjb25kcygpKTtcbn0sICh0LCBlKSA9PiB7XG4gIHQuc2V0VGltZSgrdCArIGUgKiBtdCk7XG59LCAodCwgZSkgPT4gKGUgLSB0KSAvIG10LCAodCkgPT4gdC5nZXRVVENTZWNvbmRzKCkpO1xudnQucmFuZ2U7XG5jb25zdCAkdCA9IGV0KCh0KSA9PiB7XG4gIHQuc2V0VGltZSh0IC0gdC5nZXRNaWxsaXNlY29uZHMoKSAtIHQuZ2V0U2Vjb25kcygpICogbXQpO1xufSwgKHQsIGUpID0+IHtcbiAgdC5zZXRUaW1lKCt0ICsgZSAqIGN0KTtcbn0sICh0LCBlKSA9PiAoZSAtIHQpIC8gY3QsICh0KSA9PiB0LmdldE1pbnV0ZXMoKSk7XG4kdC5yYW5nZTtcbmNvbnN0IHByID0gZXQoKHQpID0+IHtcbiAgdC5zZXRVVENTZWNvbmRzKDAsIDApO1xufSwgKHQsIGUpID0+IHtcbiAgdC5zZXRUaW1lKCt0ICsgZSAqIGN0KTtcbn0sICh0LCBlKSA9PiAoZSAtIHQpIC8gY3QsICh0KSA9PiB0LmdldFVUQ01pbnV0ZXMoKSk7XG5wci5yYW5nZTtcbmNvbnN0IE90ID0gZXQoKHQpID0+IHtcbiAgdC5zZXRUaW1lKHQgLSB0LmdldE1pbGxpc2Vjb25kcygpIC0gdC5nZXRTZWNvbmRzKCkgKiBtdCAtIHQuZ2V0TWludXRlcygpICogY3QpO1xufSwgKHQsIGUpID0+IHtcbiAgdC5zZXRUaW1lKCt0ICsgZSAqIGd0KTtcbn0sICh0LCBlKSA9PiAoZSAtIHQpIC8gZ3QsICh0KSA9PiB0LmdldEhvdXJzKCkpO1xuT3QucmFuZ2U7XG5jb25zdCB2ciA9IGV0KCh0KSA9PiB7XG4gIHQuc2V0VVRDTWludXRlcygwLCAwLCAwKTtcbn0sICh0LCBlKSA9PiB7XG4gIHQuc2V0VGltZSgrdCArIGUgKiBndCk7XG59LCAodCwgZSkgPT4gKGUgLSB0KSAvIGd0LCAodCkgPT4gdC5nZXRVVENIb3VycygpKTtcbnZyLnJhbmdlO1xuY29uc3QgYnQgPSBldChcbiAgKHQpID0+IHQuc2V0SG91cnMoMCwgMCwgMCwgMCksXG4gICh0LCBlKSA9PiB0LnNldERhdGUodC5nZXREYXRlKCkgKyBlKSxcbiAgKHQsIGUpID0+IChlIC0gdCAtIChlLmdldFRpbWV6b25lT2Zmc2V0KCkgLSB0LmdldFRpbWV6b25lT2Zmc2V0KCkpICogY3QpIC8geXQsXG4gICh0KSA9PiB0LmdldERhdGUoKSAtIDFcbik7XG5idC5yYW5nZTtcbmNvbnN0IFNlID0gZXQoKHQpID0+IHtcbiAgdC5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbn0sICh0LCBlKSA9PiB7XG4gIHQuc2V0VVRDRGF0ZSh0LmdldFVUQ0RhdGUoKSArIGUpO1xufSwgKHQsIGUpID0+IChlIC0gdCkgLyB5dCwgKHQpID0+IHQuZ2V0VVRDRGF0ZSgpIC0gMSk7XG5TZS5yYW5nZTtcbmNvbnN0IFRyID0gZXQoKHQpID0+IHtcbiAgdC5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbn0sICh0LCBlKSA9PiB7XG4gIHQuc2V0VVRDRGF0ZSh0LmdldFVUQ0RhdGUoKSArIGUpO1xufSwgKHQsIGUpID0+IChlIC0gdCkgLyB5dCwgKHQpID0+IE1hdGguZmxvb3IodCAvIHl0KSk7XG5Uci5yYW5nZTtcbmZ1bmN0aW9uIER0KHQpIHtcbiAgcmV0dXJuIGV0KChlKSA9PiB7XG4gICAgZS5zZXREYXRlKGUuZ2V0RGF0ZSgpIC0gKGUuZ2V0RGF5KCkgKyA3IC0gdCkgJSA3KSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgKGUsIG4pID0+IHtcbiAgICBlLnNldERhdGUoZS5nZXREYXRlKCkgKyBuICogNyk7XG4gIH0sIChlLCBuKSA9PiAobiAtIGUgLSAobi5nZXRUaW1lem9uZU9mZnNldCgpIC0gZS5nZXRUaW1lem9uZU9mZnNldCgpKSAqIGN0KSAvIENlKTtcbn1cbmNvbnN0IFB0ID0gRHQoMCksIEh0ID0gRHQoMSksIHBuID0gRHQoMiksIHZuID0gRHQoMyksIHh0ID0gRHQoNCksIFRuID0gRHQoNSksIGJuID0gRHQoNik7XG5QdC5yYW5nZTtcbkh0LnJhbmdlO1xucG4ucmFuZ2U7XG52bi5yYW5nZTtcbnh0LnJhbmdlO1xuVG4ucmFuZ2U7XG5ibi5yYW5nZTtcbmZ1bmN0aW9uIE10KHQpIHtcbiAgcmV0dXJuIGV0KChlKSA9PiB7XG4gICAgZS5zZXRVVENEYXRlKGUuZ2V0VVRDRGF0ZSgpIC0gKGUuZ2V0VVRDRGF5KCkgKyA3IC0gdCkgJSA3KSwgZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgKGUsIG4pID0+IHtcbiAgICBlLnNldFVUQ0RhdGUoZS5nZXRVVENEYXRlKCkgKyBuICogNyk7XG4gIH0sIChlLCBuKSA9PiAobiAtIGUpIC8gQ2UpO1xufVxuY29uc3QgeG4gPSBNdCgwKSwgbmUgPSBNdCgxKSwgYnIgPSBNdCgyKSwgeHIgPSBNdCgzKSwgRXQgPSBNdCg0KSwgd3IgPSBNdCg1KSwgRHIgPSBNdCg2KTtcbnhuLnJhbmdlO1xubmUucmFuZ2U7XG5ici5yYW5nZTtcbnhyLnJhbmdlO1xuRXQucmFuZ2U7XG53ci5yYW5nZTtcbkRyLnJhbmdlO1xuY29uc3QgTnQgPSBldCgodCkgPT4ge1xuICB0LnNldERhdGUoMSksIHQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59LCAodCwgZSkgPT4ge1xuICB0LnNldE1vbnRoKHQuZ2V0TW9udGgoKSArIGUpO1xufSwgKHQsIGUpID0+IGUuZ2V0TW9udGgoKSAtIHQuZ2V0TW9udGgoKSArIChlLmdldEZ1bGxZZWFyKCkgLSB0LmdldEZ1bGxZZWFyKCkpICogMTIsICh0KSA9PiB0LmdldE1vbnRoKCkpO1xuTnQucmFuZ2U7XG5jb25zdCBNciA9IGV0KCh0KSA9PiB7XG4gIHQuc2V0VVRDRGF0ZSgxKSwgdC5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbn0sICh0LCBlKSA9PiB7XG4gIHQuc2V0VVRDTW9udGgodC5nZXRVVENNb250aCgpICsgZSk7XG59LCAodCwgZSkgPT4gZS5nZXRVVENNb250aCgpIC0gdC5nZXRVVENNb250aCgpICsgKGUuZ2V0VVRDRnVsbFllYXIoKSAtIHQuZ2V0VVRDRnVsbFllYXIoKSkgKiAxMiwgKHQpID0+IHQuZ2V0VVRDTW9udGgoKSk7XG5Nci5yYW5nZTtcbmNvbnN0IGt0ID0gZXQoKHQpID0+IHtcbiAgdC5zZXRNb250aCgwLCAxKSwgdC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn0sICh0LCBlKSA9PiB7XG4gIHQuc2V0RnVsbFllYXIodC5nZXRGdWxsWWVhcigpICsgZSk7XG59LCAodCwgZSkgPT4gZS5nZXRGdWxsWWVhcigpIC0gdC5nZXRGdWxsWWVhcigpLCAodCkgPT4gdC5nZXRGdWxsWWVhcigpKTtcbmt0LmV2ZXJ5ID0gKHQpID0+ICFpc0Zpbml0ZSh0ID0gTWF0aC5mbG9vcih0KSkgfHwgISh0ID4gMCkgPyBudWxsIDogZXQoKGUpID0+IHtcbiAgZS5zZXRGdWxsWWVhcihNYXRoLmZsb29yKGUuZ2V0RnVsbFllYXIoKSAvIHQpICogdCksIGUuc2V0TW9udGgoMCwgMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59LCAoZSwgbikgPT4ge1xuICBlLnNldEZ1bGxZZWFyKGUuZ2V0RnVsbFllYXIoKSArIG4gKiB0KTtcbn0pO1xua3QucmFuZ2U7XG5jb25zdCB3dCA9IGV0KCh0KSA9PiB7XG4gIHQuc2V0VVRDTW9udGgoMCwgMSksIHQuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCAodCwgZSkgPT4ge1xuICB0LnNldFVUQ0Z1bGxZZWFyKHQuZ2V0VVRDRnVsbFllYXIoKSArIGUpO1xufSwgKHQsIGUpID0+IGUuZ2V0VVRDRnVsbFllYXIoKSAtIHQuZ2V0VVRDRnVsbFllYXIoKSwgKHQpID0+IHQuZ2V0VVRDRnVsbFllYXIoKSk7XG53dC5ldmVyeSA9ICh0KSA9PiAhaXNGaW5pdGUodCA9IE1hdGguZmxvb3IodCkpIHx8ICEodCA+IDApID8gbnVsbCA6IGV0KChlKSA9PiB7XG4gIGUuc2V0VVRDRnVsbFllYXIoTWF0aC5mbG9vcihlLmdldFVUQ0Z1bGxZZWFyKCkgLyB0KSAqIHQpLCBlLnNldFVUQ01vbnRoKDAsIDEpLCBlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xufSwgKGUsIG4pID0+IHtcbiAgZS5zZXRVVENGdWxsWWVhcihlLmdldFVUQ0Z1bGxZZWFyKCkgKyBuICogdCk7XG59KTtcbnd0LnJhbmdlO1xuZnVuY3Rpb24gQ3IodCwgZSwgbiwgciwgaSwgYSkge1xuICBjb25zdCBjID0gW1xuICAgIFt2dCwgMSwgbXRdLFxuICAgIFt2dCwgNSwgNSAqIG10XSxcbiAgICBbdnQsIDE1LCAxNSAqIG10XSxcbiAgICBbdnQsIDMwLCAzMCAqIG10XSxcbiAgICBbYSwgMSwgY3RdLFxuICAgIFthLCA1LCA1ICogY3RdLFxuICAgIFthLCAxNSwgMTUgKiBjdF0sXG4gICAgW2EsIDMwLCAzMCAqIGN0XSxcbiAgICBbaSwgMSwgZ3RdLFxuICAgIFtpLCAzLCAzICogZ3RdLFxuICAgIFtpLCA2LCA2ICogZ3RdLFxuICAgIFtpLCAxMiwgMTIgKiBndF0sXG4gICAgW3IsIDEsIHl0XSxcbiAgICBbciwgMiwgMiAqIHl0XSxcbiAgICBbbiwgMSwgQ2VdLFxuICAgIFtlLCAxLCBQZV0sXG4gICAgW2UsIDMsIDMgKiBQZV0sXG4gICAgW3QsIDEsIHllXVxuICBdO1xuICBmdW5jdGlvbiBtKEMsIGssIEwpIHtcbiAgICBjb25zdCBfID0gayA8IEM7XG4gICAgXyAmJiAoW0MsIGtdID0gW2ssIENdKTtcbiAgICBjb25zdCBTID0gTCAmJiB0eXBlb2YgTC5yYW5nZSA9PSBcImZ1bmN0aW9uXCIgPyBMIDogWShDLCBrLCBMKSwgWiA9IFMgPyBTLnJhbmdlKEMsICtrICsgMSkgOiBbXTtcbiAgICByZXR1cm4gXyA/IFoucmV2ZXJzZSgpIDogWjtcbiAgfVxuICBmdW5jdGlvbiBZKEMsIGssIEwpIHtcbiAgICBjb25zdCBfID0gTWF0aC5hYnMoayAtIEMpIC8gTCwgUyA9IEduKChbLCAsIFVdKSA9PiBVKS5yaWdodChjLCBfKTtcbiAgICBpZiAoUyA9PT0gYy5sZW5ndGgpIHJldHVybiB0LmV2ZXJ5KEhlKEMgLyB5ZSwgayAvIHllLCBMKSk7XG4gICAgaWYgKFMgPT09IDApIHJldHVybiBVdC5ldmVyeShNYXRoLm1heChIZShDLCBrLCBMKSwgMSkpO1xuICAgIGNvbnN0IFtaLCBBXSA9IGNbXyAvIGNbUyAtIDFdWzJdIDwgY1tTXVsyXSAvIF8gPyBTIC0gMSA6IFNdO1xuICAgIHJldHVybiBaLmV2ZXJ5KEEpO1xuICB9XG4gIHJldHVybiBbbSwgWV07XG59XG5jb25zdCBbU3IsIF9yXSA9IENyKGt0LCBOdCwgUHQsIGJ0LCBPdCwgJHQpO1xuZnVuY3Rpb24ga2UodCkge1xuICBpZiAoMCA8PSB0LnkgJiYgdC55IDwgMTAwKSB7XG4gICAgdmFyIGUgPSBuZXcgRGF0ZSgtMSwgdC5tLCB0LmQsIHQuSCwgdC5NLCB0LlMsIHQuTCk7XG4gICAgcmV0dXJuIGUuc2V0RnVsbFllYXIodC55KSwgZTtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUodC55LCB0Lm0sIHQuZCwgdC5ILCB0Lk0sIHQuUywgdC5MKTtcbn1cbmZ1bmN0aW9uIHBlKHQpIHtcbiAgaWYgKDAgPD0gdC55ICYmIHQueSA8IDEwMCkge1xuICAgIHZhciBlID0gbmV3IERhdGUoRGF0ZS5VVEMoLTEsIHQubSwgdC5kLCB0LkgsIHQuTSwgdC5TLCB0LkwpKTtcbiAgICByZXR1cm4gZS5zZXRVVENGdWxsWWVhcih0LnkpLCBlO1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh0LnksIHQubSwgdC5kLCB0LkgsIHQuTSwgdC5TLCB0LkwpKTtcbn1cbmZ1bmN0aW9uIEx0KHQsIGUsIG4pIHtcbiAgcmV0dXJuIHsgeTogdCwgbTogZSwgZDogbiwgSDogMCwgTTogMCwgUzogMCwgTDogMCB9O1xufVxuZnVuY3Rpb24gRnIodCkge1xuICB2YXIgZSA9IHQuZGF0ZVRpbWUsIG4gPSB0LmRhdGUsIHIgPSB0LnRpbWUsIGkgPSB0LnBlcmlvZHMsIGEgPSB0LmRheXMsIGMgPSB0LnNob3J0RGF5cywgbSA9IHQubW9udGhzLCBZID0gdC5zaG9ydE1vbnRocywgQyA9IEF0KGkpLCBrID0gV3QoaSksIEwgPSBBdChhKSwgXyA9IFd0KGEpLCBTID0gQXQoYyksIFogPSBXdChjKSwgQSA9IEF0KG0pLCBVID0gV3QobSksIEkgPSBBdChZKSwgTiA9IFd0KFkpLCBXID0ge1xuICAgIGE6IHgsXG4gICAgQTogRixcbiAgICBiOiBvLFxuICAgIEI6IFgsXG4gICAgYzogbnVsbCxcbiAgICBkOiBCZSxcbiAgICBlOiBCZSxcbiAgICBmOiBKcixcbiAgICBnOiBjaSxcbiAgICBHOiBsaSxcbiAgICBIOiBHcixcbiAgICBJOiBqcixcbiAgICBqOiBRcixcbiAgICBMOiB3bixcbiAgICBtOiBLcixcbiAgICBNOiB0aSxcbiAgICBwOiBzLFxuICAgIHE6IEUsXG4gICAgUTogamUsXG4gICAgczogUWUsXG4gICAgUzogZWksXG4gICAgdTogbmksXG4gICAgVTogcmksXG4gICAgVjogaWksXG4gICAgdzogc2ksXG4gICAgVzogYWksXG4gICAgeDogbnVsbCxcbiAgICBYOiBudWxsLFxuICAgIHk6IG9pLFxuICAgIFk6IHVpLFxuICAgIFo6IGZpLFxuICAgIFwiJVwiOiBHZVxuICB9LCBxID0ge1xuICAgIGE6IFIsXG4gICAgQTogeixcbiAgICBiOiBQLFxuICAgIEI6IEssXG4gICAgYzogbnVsbCxcbiAgICBkOiBYZSxcbiAgICBlOiBYZSxcbiAgICBmOiBnaSxcbiAgICBnOiBNaSxcbiAgICBHOiBTaSxcbiAgICBIOiBkaSxcbiAgICBJOiBoaSxcbiAgICBqOiBtaSxcbiAgICBMOiBNbixcbiAgICBtOiB5aSxcbiAgICBNOiBraSxcbiAgICBwOiBPLFxuICAgIHE6IHN0LFxuICAgIFE6IGplLFxuICAgIHM6IFFlLFxuICAgIFM6IHBpLFxuICAgIHU6IHZpLFxuICAgIFU6IFRpLFxuICAgIFY6IGJpLFxuICAgIHc6IHhpLFxuICAgIFc6IHdpLFxuICAgIHg6IG51bGwsXG4gICAgWDogbnVsbCxcbiAgICB5OiBEaSxcbiAgICBZOiBDaSxcbiAgICBaOiBfaSxcbiAgICBcIiVcIjogR2VcbiAgfSwgaiA9IHtcbiAgICBhOiBELFxuICAgIEE6IHcsXG4gICAgYjogVCxcbiAgICBCOiB2LFxuICAgIGM6IHUsXG4gICAgZDogcWUsXG4gICAgZTogcWUsXG4gICAgZjogcXIsXG4gICAgZzogUmUsXG4gICAgRzogemUsXG4gICAgSDogWmUsXG4gICAgSTogWmUsXG4gICAgajogUHIsXG4gICAgTDogUnIsXG4gICAgbTogTnIsXG4gICAgTTogVnIsXG4gICAgcDogaCxcbiAgICBxOiBIcixcbiAgICBROiBCcixcbiAgICBzOiBYcixcbiAgICBTOiB6cixcbiAgICB1OiBMcixcbiAgICBVOiBBcixcbiAgICBWOiBXcixcbiAgICB3OiBJcixcbiAgICBXOiAkcixcbiAgICB4OiBmLFxuICAgIFg6IGIsXG4gICAgeTogUmUsXG4gICAgWTogemUsXG4gICAgWjogT3IsXG4gICAgXCIlXCI6IFpyXG4gIH07XG4gIFcueCA9IHAobiwgVyksIFcuWCA9IHAociwgVyksIFcuYyA9IHAoZSwgVyksIHEueCA9IHAobiwgcSksIHEuWCA9IHAociwgcSksIHEuYyA9IHAoZSwgcSk7XG4gIGZ1bmN0aW9uIHAoTSwgSCkge1xuICAgIHJldHVybiBmdW5jdGlvbihWKSB7XG4gICAgICB2YXIgbCA9IFtdLCBKID0gLTEsICQgPSAwLCBRID0gTS5sZW5ndGgsIEcsIGl0LCBhdDtcbiAgICAgIGZvciAoViBpbnN0YW5jZW9mIERhdGUgfHwgKFYgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoK1YpKTsgKytKIDwgUTsgKVxuICAgICAgICBNLmNoYXJDb2RlQXQoSikgPT09IDM3ICYmIChsLnB1c2goTS5zbGljZSgkLCBKKSksIChpdCA9IFZlW0cgPSBNLmNoYXJBdCgrK0opXSkgIT0gbnVsbCA/IEcgPSBNLmNoYXJBdCgrK0opIDogaXQgPSBHID09PSBcImVcIiA/IFwiIFwiIDogXCIwXCIsIChhdCA9IEhbR10pICYmIChHID0gYXQoViwgaXQpKSwgbC5wdXNoKEcpLCAkID0gSiArIDEpO1xuICAgICAgcmV0dXJuIGwucHVzaChNLnNsaWNlKCQsIEopKSwgbC5qb2luKFwiXCIpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZyhNLCBIKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKFYpIHtcbiAgICAgIHZhciBsID0gTHQoMTkwMCwgdm9pZCAwLCAxKSwgSiA9IHkobCwgTSwgViArPSBcIlwiLCAwKSwgJCwgUTtcbiAgICAgIGlmIChKICE9IFYubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChcIlFcIiBpbiBsKSByZXR1cm4gbmV3IERhdGUobC5RKTtcbiAgICAgIGlmIChcInNcIiBpbiBsKSByZXR1cm4gbmV3IERhdGUobC5zICogMWUzICsgKFwiTFwiIGluIGwgPyBsLkwgOiAwKSk7XG4gICAgICBpZiAoSCAmJiAhKFwiWlwiIGluIGwpICYmIChsLlogPSAwKSwgXCJwXCIgaW4gbCAmJiAobC5IID0gbC5IICUgMTIgKyBsLnAgKiAxMiksIGwubSA9PT0gdm9pZCAwICYmIChsLm0gPSBcInFcIiBpbiBsID8gbC5xIDogMCksIFwiVlwiIGluIGwpIHtcbiAgICAgICAgaWYgKGwuViA8IDEgfHwgbC5WID4gNTMpIHJldHVybiBudWxsO1xuICAgICAgICBcIndcIiBpbiBsIHx8IChsLncgPSAxKSwgXCJaXCIgaW4gbCA/ICgkID0gcGUoTHQobC55LCAwLCAxKSksIFEgPSAkLmdldFVUQ0RheSgpLCAkID0gUSA+IDQgfHwgUSA9PT0gMCA/IG5lLmNlaWwoJCkgOiBuZSgkKSwgJCA9IFNlLm9mZnNldCgkLCAobC5WIC0gMSkgKiA3KSwgbC55ID0gJC5nZXRVVENGdWxsWWVhcigpLCBsLm0gPSAkLmdldFVUQ01vbnRoKCksIGwuZCA9ICQuZ2V0VVRDRGF0ZSgpICsgKGwudyArIDYpICUgNykgOiAoJCA9IGtlKEx0KGwueSwgMCwgMSkpLCBRID0gJC5nZXREYXkoKSwgJCA9IFEgPiA0IHx8IFEgPT09IDAgPyBIdC5jZWlsKCQpIDogSHQoJCksICQgPSBidC5vZmZzZXQoJCwgKGwuViAtIDEpICogNyksIGwueSA9ICQuZ2V0RnVsbFllYXIoKSwgbC5tID0gJC5nZXRNb250aCgpLCBsLmQgPSAkLmdldERhdGUoKSArIChsLncgKyA2KSAlIDcpO1xuICAgICAgfSBlbHNlIChcIldcIiBpbiBsIHx8IFwiVVwiIGluIGwpICYmIChcIndcIiBpbiBsIHx8IChsLncgPSBcInVcIiBpbiBsID8gbC51ICUgNyA6IFwiV1wiIGluIGwgPyAxIDogMCksIFEgPSBcIlpcIiBpbiBsID8gcGUoTHQobC55LCAwLCAxKSkuZ2V0VVRDRGF5KCkgOiBrZShMdChsLnksIDAsIDEpKS5nZXREYXkoKSwgbC5tID0gMCwgbC5kID0gXCJXXCIgaW4gbCA/IChsLncgKyA2KSAlIDcgKyBsLlcgKiA3IC0gKFEgKyA1KSAlIDcgOiBsLncgKyBsLlUgKiA3IC0gKFEgKyA2KSAlIDcpO1xuICAgICAgcmV0dXJuIFwiWlwiIGluIGwgPyAobC5IICs9IGwuWiAvIDEwMCB8IDAsIGwuTSArPSBsLlogJSAxMDAsIHBlKGwpKSA6IGtlKGwpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24geShNLCBILCBWLCBsKSB7XG4gICAgZm9yICh2YXIgSiA9IDAsICQgPSBILmxlbmd0aCwgUSA9IFYubGVuZ3RoLCBHLCBpdDsgSiA8ICQ7ICkge1xuICAgICAgaWYgKGwgPj0gUSkgcmV0dXJuIC0xO1xuICAgICAgaWYgKEcgPSBILmNoYXJDb2RlQXQoSisrKSwgRyA9PT0gMzcpIHtcbiAgICAgICAgaWYgKEcgPSBILmNoYXJBdChKKyspLCBpdCA9IGpbRyBpbiBWZSA/IEguY2hhckF0KEorKykgOiBHXSwgIWl0IHx8IChsID0gaXQoTSwgViwgbCkpIDwgMCkgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChHICE9IFYuY2hhckNvZGVBdChsKyspKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiBsO1xuICB9XG4gIGZ1bmN0aW9uIGgoTSwgSCwgVikge1xuICAgIHZhciBsID0gQy5leGVjKEguc2xpY2UoVikpO1xuICAgIHJldHVybiBsID8gKE0ucCA9IGsuZ2V0KGxbMF0udG9Mb3dlckNhc2UoKSksIFYgKyBsWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiBEKE0sIEgsIFYpIHtcbiAgICB2YXIgbCA9IFMuZXhlYyhILnNsaWNlKFYpKTtcbiAgICByZXR1cm4gbCA/IChNLncgPSBaLmdldChsWzBdLnRvTG93ZXJDYXNlKCkpLCBWICsgbFswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gdyhNLCBILCBWKSB7XG4gICAgdmFyIGwgPSBMLmV4ZWMoSC5zbGljZShWKSk7XG4gICAgcmV0dXJuIGwgPyAoTS53ID0gXy5nZXQobFswXS50b0xvd2VyQ2FzZSgpKSwgViArIGxbMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIFQoTSwgSCwgVikge1xuICAgIHZhciBsID0gSS5leGVjKEguc2xpY2UoVikpO1xuICAgIHJldHVybiBsID8gKE0ubSA9IE4uZ2V0KGxbMF0udG9Mb3dlckNhc2UoKSksIFYgKyBsWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiB2KE0sIEgsIFYpIHtcbiAgICB2YXIgbCA9IEEuZXhlYyhILnNsaWNlKFYpKTtcbiAgICByZXR1cm4gbCA/IChNLm0gPSBVLmdldChsWzBdLnRvTG93ZXJDYXNlKCkpLCBWICsgbFswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gdShNLCBILCBWKSB7XG4gICAgcmV0dXJuIHkoTSwgZSwgSCwgVik7XG4gIH1cbiAgZnVuY3Rpb24gZihNLCBILCBWKSB7XG4gICAgcmV0dXJuIHkoTSwgbiwgSCwgVik7XG4gIH1cbiAgZnVuY3Rpb24gYihNLCBILCBWKSB7XG4gICAgcmV0dXJuIHkoTSwgciwgSCwgVik7XG4gIH1cbiAgZnVuY3Rpb24geChNKSB7XG4gICAgcmV0dXJuIGNbTS5nZXREYXkoKV07XG4gIH1cbiAgZnVuY3Rpb24gRihNKSB7XG4gICAgcmV0dXJuIGFbTS5nZXREYXkoKV07XG4gIH1cbiAgZnVuY3Rpb24gbyhNKSB7XG4gICAgcmV0dXJuIFlbTS5nZXRNb250aCgpXTtcbiAgfVxuICBmdW5jdGlvbiBYKE0pIHtcbiAgICByZXR1cm4gbVtNLmdldE1vbnRoKCldO1xuICB9XG4gIGZ1bmN0aW9uIHMoTSkge1xuICAgIHJldHVybiBpWysoTS5nZXRIb3VycygpID49IDEyKV07XG4gIH1cbiAgZnVuY3Rpb24gRShNKSB7XG4gICAgcmV0dXJuIDEgKyB+fihNLmdldE1vbnRoKCkgLyAzKTtcbiAgfVxuICBmdW5jdGlvbiBSKE0pIHtcbiAgICByZXR1cm4gY1tNLmdldFVUQ0RheSgpXTtcbiAgfVxuICBmdW5jdGlvbiB6KE0pIHtcbiAgICByZXR1cm4gYVtNLmdldFVUQ0RheSgpXTtcbiAgfVxuICBmdW5jdGlvbiBQKE0pIHtcbiAgICByZXR1cm4gWVtNLmdldFVUQ01vbnRoKCldO1xuICB9XG4gIGZ1bmN0aW9uIEsoTSkge1xuICAgIHJldHVybiBtW00uZ2V0VVRDTW9udGgoKV07XG4gIH1cbiAgZnVuY3Rpb24gTyhNKSB7XG4gICAgcmV0dXJuIGlbKyhNLmdldFVUQ0hvdXJzKCkgPj0gMTIpXTtcbiAgfVxuICBmdW5jdGlvbiBzdChNKSB7XG4gICAgcmV0dXJuIDEgKyB+fihNLmdldFVUQ01vbnRoKCkgLyAzKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcm1hdDogZnVuY3Rpb24oTSkge1xuICAgICAgdmFyIEggPSBwKE0gKz0gXCJcIiwgVyk7XG4gICAgICByZXR1cm4gSC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTTtcbiAgICAgIH0sIEg7XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24oTSkge1xuICAgICAgdmFyIEggPSBnKE0gKz0gXCJcIiwgITEpO1xuICAgICAgcmV0dXJuIEgudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE07XG4gICAgICB9LCBIO1xuICAgIH0sXG4gICAgdXRjRm9ybWF0OiBmdW5jdGlvbihNKSB7XG4gICAgICB2YXIgSCA9IHAoTSArPSBcIlwiLCBxKTtcbiAgICAgIHJldHVybiBILnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNO1xuICAgICAgfSwgSDtcbiAgICB9LFxuICAgIHV0Y1BhcnNlOiBmdW5jdGlvbihNKSB7XG4gICAgICB2YXIgSCA9IGcoTSArPSBcIlwiLCAhMCk7XG4gICAgICByZXR1cm4gSC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTTtcbiAgICAgIH0sIEg7XG4gICAgfVxuICB9O1xufVxudmFyIFZlID0geyBcIi1cIjogXCJcIiwgXzogXCIgXCIsIDA6IFwiMFwiIH0sIG50ID0gL15cXHMqXFxkKy8sIFlyID0gL14lLywgVXIgPSAvW1xcXFxeJCorP3xbXFxdKCkue31dL2c7XG5mdW5jdGlvbiBCKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSB0IDwgMCA/IFwiLVwiIDogXCJcIiwgaSA9IChyID8gLXQgOiB0KSArIFwiXCIsIGEgPSBpLmxlbmd0aDtcbiAgcmV0dXJuIHIgKyAoYSA8IG4gPyBuZXcgQXJyYXkobiAtIGEgKyAxKS5qb2luKGUpICsgaSA6IGkpO1xufVxuZnVuY3Rpb24gRXIodCkge1xuICByZXR1cm4gdC5yZXBsYWNlKFVyLCBcIlxcXFwkJlwiKTtcbn1cbmZ1bmN0aW9uIEF0KHQpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0Lm1hcChFcikuam9pbihcInxcIikgKyBcIilcIiwgXCJpXCIpO1xufVxuZnVuY3Rpb24gV3QodCkge1xuICByZXR1cm4gbmV3IE1hcCh0Lm1hcCgoZSwgbikgPT4gW2UudG9Mb3dlckNhc2UoKSwgbl0pKTtcbn1cbmZ1bmN0aW9uIElyKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDEpKTtcbiAgcmV0dXJuIHIgPyAodC53ID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIExyKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDEpKTtcbiAgcmV0dXJuIHIgPyAodC51ID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIEFyKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDIpKTtcbiAgcmV0dXJuIHIgPyAodC5VID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIFdyKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDIpKTtcbiAgcmV0dXJuIHIgPyAodC5WID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uICRyKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDIpKTtcbiAgcmV0dXJuIHIgPyAodC5XID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIHplKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDQpKTtcbiAgcmV0dXJuIHIgPyAodC55ID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIFJlKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDIpKTtcbiAgcmV0dXJuIHIgPyAodC55ID0gK3JbMF0gKyAoK3JbMF0gPiA2OCA/IDE5MDAgOiAyZTMpLCBuICsgclswXS5sZW5ndGgpIDogLTE7XG59XG5mdW5jdGlvbiBPcih0LCBlLCBuKSB7XG4gIHZhciByID0gL14oWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/Ly5leGVjKGUuc2xpY2UobiwgbiArIDYpKTtcbiAgcmV0dXJuIHIgPyAodC5aID0gclsxXSA/IDAgOiAtKHJbMl0gKyAoclszXSB8fCBcIjAwXCIpKSwgbiArIHJbMF0ubGVuZ3RoKSA6IC0xO1xufVxuZnVuY3Rpb24gSHIodCwgZSwgbikge1xuICB2YXIgciA9IG50LmV4ZWMoZS5zbGljZShuLCBuICsgMSkpO1xuICByZXR1cm4gciA/ICh0LnEgPSByWzBdICogMyAtIDMsIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIE5yKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDIpKTtcbiAgcmV0dXJuIHIgPyAodC5tID0gclswXSAtIDEsIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIHFlKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDIpKTtcbiAgcmV0dXJuIHIgPyAodC5kID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIFByKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDMpKTtcbiAgcmV0dXJuIHIgPyAodC5tID0gMCwgdC5kID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIFplKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDIpKTtcbiAgcmV0dXJuIHIgPyAodC5IID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIFZyKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDIpKTtcbiAgcmV0dXJuIHIgPyAodC5NID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIHpyKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDIpKTtcbiAgcmV0dXJuIHIgPyAodC5TID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIFJyKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDMpKTtcbiAgcmV0dXJuIHIgPyAodC5MID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIHFyKHQsIGUsIG4pIHtcbiAgdmFyIHIgPSBudC5leGVjKGUuc2xpY2UobiwgbiArIDYpKTtcbiAgcmV0dXJuIHIgPyAodC5MID0gTWF0aC5mbG9vcihyWzBdIC8gMWUzKSwgbiArIHJbMF0ubGVuZ3RoKSA6IC0xO1xufVxuZnVuY3Rpb24gWnIodCwgZSwgbikge1xuICB2YXIgciA9IFlyLmV4ZWMoZS5zbGljZShuLCBuICsgMSkpO1xuICByZXR1cm4gciA/IG4gKyByWzBdLmxlbmd0aCA6IC0xO1xufVxuZnVuY3Rpb24gQnIodCwgZSwgbikge1xuICB2YXIgciA9IG50LmV4ZWMoZS5zbGljZShuKSk7XG4gIHJldHVybiByID8gKHQuUSA9ICtyWzBdLCBuICsgclswXS5sZW5ndGgpIDogLTE7XG59XG5mdW5jdGlvbiBYcih0LCBlLCBuKSB7XG4gIHZhciByID0gbnQuZXhlYyhlLnNsaWNlKG4pKTtcbiAgcmV0dXJuIHIgPyAodC5zID0gK3JbMF0sIG4gKyByWzBdLmxlbmd0aCkgOiAtMTtcbn1cbmZ1bmN0aW9uIEJlKHQsIGUpIHtcbiAgcmV0dXJuIEIodC5nZXREYXRlKCksIGUsIDIpO1xufVxuZnVuY3Rpb24gR3IodCwgZSkge1xuICByZXR1cm4gQih0LmdldEhvdXJzKCksIGUsIDIpO1xufVxuZnVuY3Rpb24ganIodCwgZSkge1xuICByZXR1cm4gQih0LmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgZSwgMik7XG59XG5mdW5jdGlvbiBRcih0LCBlKSB7XG4gIHJldHVybiBCKDEgKyBidC5jb3VudChrdCh0KSwgdCksIGUsIDMpO1xufVxuZnVuY3Rpb24gd24odCwgZSkge1xuICByZXR1cm4gQih0LmdldE1pbGxpc2Vjb25kcygpLCBlLCAzKTtcbn1cbmZ1bmN0aW9uIEpyKHQsIGUpIHtcbiAgcmV0dXJuIHduKHQsIGUpICsgXCIwMDBcIjtcbn1cbmZ1bmN0aW9uIEtyKHQsIGUpIHtcbiAgcmV0dXJuIEIodC5nZXRNb250aCgpICsgMSwgZSwgMik7XG59XG5mdW5jdGlvbiB0aSh0LCBlKSB7XG4gIHJldHVybiBCKHQuZ2V0TWludXRlcygpLCBlLCAyKTtcbn1cbmZ1bmN0aW9uIGVpKHQsIGUpIHtcbiAgcmV0dXJuIEIodC5nZXRTZWNvbmRzKCksIGUsIDIpO1xufVxuZnVuY3Rpb24gbmkodCkge1xuICB2YXIgZSA9IHQuZ2V0RGF5KCk7XG4gIHJldHVybiBlID09PSAwID8gNyA6IGU7XG59XG5mdW5jdGlvbiByaSh0LCBlKSB7XG4gIHJldHVybiBCKFB0LmNvdW50KGt0KHQpIC0gMSwgdCksIGUsIDIpO1xufVxuZnVuY3Rpb24gRG4odCkge1xuICB2YXIgZSA9IHQuZ2V0RGF5KCk7XG4gIHJldHVybiBlID49IDQgfHwgZSA9PT0gMCA/IHh0KHQpIDogeHQuY2VpbCh0KTtcbn1cbmZ1bmN0aW9uIGlpKHQsIGUpIHtcbiAgcmV0dXJuIHQgPSBEbih0KSwgQih4dC5jb3VudChrdCh0KSwgdCkgKyAoa3QodCkuZ2V0RGF5KCkgPT09IDQpLCBlLCAyKTtcbn1cbmZ1bmN0aW9uIHNpKHQpIHtcbiAgcmV0dXJuIHQuZ2V0RGF5KCk7XG59XG5mdW5jdGlvbiBhaSh0LCBlKSB7XG4gIHJldHVybiBCKEh0LmNvdW50KGt0KHQpIC0gMSwgdCksIGUsIDIpO1xufVxuZnVuY3Rpb24gb2kodCwgZSkge1xuICByZXR1cm4gQih0LmdldEZ1bGxZZWFyKCkgJSAxMDAsIGUsIDIpO1xufVxuZnVuY3Rpb24gY2kodCwgZSkge1xuICByZXR1cm4gdCA9IERuKHQpLCBCKHQuZ2V0RnVsbFllYXIoKSAlIDEwMCwgZSwgMik7XG59XG5mdW5jdGlvbiB1aSh0LCBlKSB7XG4gIHJldHVybiBCKHQuZ2V0RnVsbFllYXIoKSAlIDFlNCwgZSwgNCk7XG59XG5mdW5jdGlvbiBsaSh0LCBlKSB7XG4gIHZhciBuID0gdC5nZXREYXkoKTtcbiAgcmV0dXJuIHQgPSBuID49IDQgfHwgbiA9PT0gMCA/IHh0KHQpIDogeHQuY2VpbCh0KSwgQih0LmdldEZ1bGxZZWFyKCkgJSAxZTQsIGUsIDQpO1xufVxuZnVuY3Rpb24gZmkodCkge1xuICB2YXIgZSA9IHQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgcmV0dXJuIChlID4gMCA/IFwiLVwiIDogKGUgKj0gLTEsIFwiK1wiKSkgKyBCKGUgLyA2MCB8IDAsIFwiMFwiLCAyKSArIEIoZSAlIDYwLCBcIjBcIiwgMik7XG59XG5mdW5jdGlvbiBYZSh0LCBlKSB7XG4gIHJldHVybiBCKHQuZ2V0VVRDRGF0ZSgpLCBlLCAyKTtcbn1cbmZ1bmN0aW9uIGRpKHQsIGUpIHtcbiAgcmV0dXJuIEIodC5nZXRVVENIb3VycygpLCBlLCAyKTtcbn1cbmZ1bmN0aW9uIGhpKHQsIGUpIHtcbiAgcmV0dXJuIEIodC5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIGUsIDIpO1xufVxuZnVuY3Rpb24gbWkodCwgZSkge1xuICByZXR1cm4gQigxICsgU2UuY291bnQod3QodCksIHQpLCBlLCAzKTtcbn1cbmZ1bmN0aW9uIE1uKHQsIGUpIHtcbiAgcmV0dXJuIEIodC5nZXRVVENNaWxsaXNlY29uZHMoKSwgZSwgMyk7XG59XG5mdW5jdGlvbiBnaSh0LCBlKSB7XG4gIHJldHVybiBNbih0LCBlKSArIFwiMDAwXCI7XG59XG5mdW5jdGlvbiB5aSh0LCBlKSB7XG4gIHJldHVybiBCKHQuZ2V0VVRDTW9udGgoKSArIDEsIGUsIDIpO1xufVxuZnVuY3Rpb24ga2kodCwgZSkge1xuICByZXR1cm4gQih0LmdldFVUQ01pbnV0ZXMoKSwgZSwgMik7XG59XG5mdW5jdGlvbiBwaSh0LCBlKSB7XG4gIHJldHVybiBCKHQuZ2V0VVRDU2Vjb25kcygpLCBlLCAyKTtcbn1cbmZ1bmN0aW9uIHZpKHQpIHtcbiAgdmFyIGUgPSB0LmdldFVUQ0RheSgpO1xuICByZXR1cm4gZSA9PT0gMCA/IDcgOiBlO1xufVxuZnVuY3Rpb24gVGkodCwgZSkge1xuICByZXR1cm4gQih4bi5jb3VudCh3dCh0KSAtIDEsIHQpLCBlLCAyKTtcbn1cbmZ1bmN0aW9uIENuKHQpIHtcbiAgdmFyIGUgPSB0LmdldFVUQ0RheSgpO1xuICByZXR1cm4gZSA+PSA0IHx8IGUgPT09IDAgPyBFdCh0KSA6IEV0LmNlaWwodCk7XG59XG5mdW5jdGlvbiBiaSh0LCBlKSB7XG4gIHJldHVybiB0ID0gQ24odCksIEIoRXQuY291bnQod3QodCksIHQpICsgKHd0KHQpLmdldFVUQ0RheSgpID09PSA0KSwgZSwgMik7XG59XG5mdW5jdGlvbiB4aSh0KSB7XG4gIHJldHVybiB0LmdldFVUQ0RheSgpO1xufVxuZnVuY3Rpb24gd2kodCwgZSkge1xuICByZXR1cm4gQihuZS5jb3VudCh3dCh0KSAtIDEsIHQpLCBlLCAyKTtcbn1cbmZ1bmN0aW9uIERpKHQsIGUpIHtcbiAgcmV0dXJuIEIodC5nZXRVVENGdWxsWWVhcigpICUgMTAwLCBlLCAyKTtcbn1cbmZ1bmN0aW9uIE1pKHQsIGUpIHtcbiAgcmV0dXJuIHQgPSBDbih0KSwgQih0LmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDAsIGUsIDIpO1xufVxuZnVuY3Rpb24gQ2kodCwgZSkge1xuICByZXR1cm4gQih0LmdldFVUQ0Z1bGxZZWFyKCkgJSAxZTQsIGUsIDQpO1xufVxuZnVuY3Rpb24gU2kodCwgZSkge1xuICB2YXIgbiA9IHQuZ2V0VVRDRGF5KCk7XG4gIHJldHVybiB0ID0gbiA+PSA0IHx8IG4gPT09IDAgPyBFdCh0KSA6IEV0LmNlaWwodCksIEIodC5nZXRVVENGdWxsWWVhcigpICUgMWU0LCBlLCA0KTtcbn1cbmZ1bmN0aW9uIF9pKCkge1xuICByZXR1cm4gXCIrMDAwMFwiO1xufVxuZnVuY3Rpb24gR2UoKSB7XG4gIHJldHVybiBcIiVcIjtcbn1cbmZ1bmN0aW9uIGplKHQpIHtcbiAgcmV0dXJuICt0O1xufVxuZnVuY3Rpb24gUWUodCkge1xuICByZXR1cm4gTWF0aC5mbG9vcigrdCAvIDFlMyk7XG59XG52YXIgU3QsIHJlO1xuRmkoe1xuICBkYXRlVGltZTogXCIleCwgJVhcIixcbiAgZGF0ZTogXCIlLW0vJS1kLyVZXCIsXG4gIHRpbWU6IFwiJS1JOiVNOiVTICVwXCIsXG4gIHBlcmlvZHM6IFtcIkFNXCIsIFwiUE1cIl0sXG4gIGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuICBzaG9ydERheXM6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgbW9udGhzOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcbiAgc2hvcnRNb250aHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXVxufSk7XG5mdW5jdGlvbiBGaSh0KSB7XG4gIHJldHVybiBTdCA9IEZyKHQpLCByZSA9IFN0LmZvcm1hdCwgU3QucGFyc2UsIFN0LnV0Y0Zvcm1hdCwgU3QudXRjUGFyc2UsIFN0O1xufVxuZnVuY3Rpb24gWWkodCkge1xuICByZXR1cm4gbmV3IERhdGUodCk7XG59XG5mdW5jdGlvbiBVaSh0KSB7XG4gIHJldHVybiB0IGluc3RhbmNlb2YgRGF0ZSA/ICt0IDogKy8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgrdCk7XG59XG5mdW5jdGlvbiBTbih0LCBlLCBuLCByLCBpLCBhLCBjLCBtLCBZLCBDKSB7XG4gIHZhciBrID0gam4oKSwgTCA9IGsuaW52ZXJ0LCBfID0gay5kb21haW4sIFMgPSBDKFwiLiVMXCIpLCBaID0gQyhcIjolU1wiKSwgQSA9IEMoXCIlSTolTVwiKSwgVSA9IEMoXCIlSSAlcFwiKSwgSSA9IEMoXCIlYSAlZFwiKSwgTiA9IEMoXCIlYiAlZFwiKSwgVyA9IEMoXCIlQlwiKSwgcSA9IEMoXCIlWVwiKTtcbiAgZnVuY3Rpb24gaihwKSB7XG4gICAgcmV0dXJuIChZKHApIDwgcCA/IFMgOiBtKHApIDwgcCA/IFogOiBjKHApIDwgcCA/IEEgOiBhKHApIDwgcCA/IFUgOiByKHApIDwgcCA/IGkocCkgPCBwID8gSSA6IE4gOiBuKHApIDwgcCA/IFcgOiBxKShwKTtcbiAgfVxuICByZXR1cm4gay5pbnZlcnQgPSBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKEwocCkpO1xuICB9LCBrLmRvbWFpbiA9IGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF8oQXJyYXkuZnJvbShwLCBVaSkpIDogXygpLm1hcChZaSk7XG4gIH0sIGsudGlja3MgPSBmdW5jdGlvbihwKSB7XG4gICAgdmFyIGcgPSBfKCk7XG4gICAgcmV0dXJuIHQoZ1swXSwgZ1tnLmxlbmd0aCAtIDFdLCBwID8/IDEwKTtcbiAgfSwgay50aWNrRm9ybWF0ID0gZnVuY3Rpb24ocCwgZykge1xuICAgIHJldHVybiBnID09IG51bGwgPyBqIDogQyhnKTtcbiAgfSwgay5uaWNlID0gZnVuY3Rpb24ocCkge1xuICAgIHZhciBnID0gXygpO1xuICAgIHJldHVybiAoIXAgfHwgdHlwZW9mIHAucmFuZ2UgIT0gXCJmdW5jdGlvblwiKSAmJiAocCA9IGUoZ1swXSwgZ1tnLmxlbmd0aCAtIDFdLCBwID8/IDEwKSksIHAgPyBfKGtyKGcsIHApKSA6IGs7XG4gIH0sIGsuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBRbihrLCBTbih0LCBlLCBuLCByLCBpLCBhLCBjLCBtLCBZLCBDKSk7XG4gIH0sIGs7XG59XG5mdW5jdGlvbiBFaSgpIHtcbiAgcmV0dXJuIEtuLmFwcGx5KFNuKFNyLCBfciwga3QsIE50LCBQdCwgYnQsIE90LCAkdCwgdnQsIHJlKS5kb21haW4oW25ldyBEYXRlKDJlMywgMCwgMSksIG5ldyBEYXRlKDJlMywgMCwgMildKSwgYXJndW1lbnRzKTtcbn1cbnZhciBHdCA9IHsgZXhwb3J0czoge30gfSwgSWkgPSBHdC5leHBvcnRzLCBKZTtcbmZ1bmN0aW9uIExpKCkge1xuICByZXR1cm4gSmUgfHwgKEplID0gMSwgKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAoZnVuY3Rpb24obiwgcikge1xuICAgICAgdC5leHBvcnRzID0gcigpO1xuICAgIH0pKElpLCAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbiA9IFwiZGF5XCI7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ociwgaSwgYSkge1xuICAgICAgICB2YXIgYyA9IGZ1bmN0aW9uKEMpIHtcbiAgICAgICAgICByZXR1cm4gQy5hZGQoNCAtIEMuaXNvV2Vla2RheSgpLCBuKTtcbiAgICAgICAgfSwgbSA9IGkucHJvdG90eXBlO1xuICAgICAgICBtLmlzb1dlZWtZZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGModGhpcykueWVhcigpO1xuICAgICAgICB9LCBtLmlzb1dlZWsgPSBmdW5jdGlvbihDKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLiR1dGlscygpLnUoQykpIHJldHVybiB0aGlzLmFkZCg3ICogKEMgLSB0aGlzLmlzb1dlZWsoKSksIG4pO1xuICAgICAgICAgIHZhciBrLCBMLCBfLCBTLCBaID0gYyh0aGlzKSwgQSA9IChrID0gdGhpcy5pc29XZWVrWWVhcigpLCBMID0gdGhpcy4kdSwgXyA9IChMID8gYS51dGMgOiBhKSgpLnllYXIoaykuc3RhcnRPZihcInllYXJcIiksIFMgPSA0IC0gXy5pc29XZWVrZGF5KCksIF8uaXNvV2Vla2RheSgpID4gNCAmJiAoUyArPSA3KSwgXy5hZGQoUywgbikpO1xuICAgICAgICAgIHJldHVybiBaLmRpZmYoQSwgXCJ3ZWVrXCIpICsgMTtcbiAgICAgICAgfSwgbS5pc29XZWVrZGF5ID0gZnVuY3Rpb24oQykge1xuICAgICAgICAgIHJldHVybiB0aGlzLiR1dGlscygpLnUoQykgPyB0aGlzLmRheSgpIHx8IDcgOiB0aGlzLmRheSh0aGlzLmRheSgpICUgNyA/IEMgOiBDIC0gNyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBZID0gbS5zdGFydE9mO1xuICAgICAgICBtLnN0YXJ0T2YgPSBmdW5jdGlvbihDLCBrKSB7XG4gICAgICAgICAgdmFyIEwgPSB0aGlzLiR1dGlscygpLCBfID0gISFMLnUoaykgfHwgaztcbiAgICAgICAgICByZXR1cm4gTC5wKEMpID09PSBcImlzb3dlZWtcIiA/IF8gPyB0aGlzLmRhdGUodGhpcy5kYXRlKCkgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKSkuc3RhcnRPZihcImRheVwiKSA6IHRoaXMuZGF0ZSh0aGlzLmRhdGUoKSAtIDEgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKSArIDcpLmVuZE9mKFwiZGF5XCIpIDogWS5iaW5kKHRoaXMpKEMsIGspO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KSk7XG4gIH0pKEd0KSksIEd0LmV4cG9ydHM7XG59XG52YXIgQWkgPSBMaSgpO1xuY29uc3QgV2kgPSAvKiBAX19QVVJFX18gKi8gYWUoQWkpO1xudmFyIGp0ID0geyBleHBvcnRzOiB7fSB9LCAkaSA9IGp0LmV4cG9ydHMsIEtlO1xuZnVuY3Rpb24gT2koKSB7XG4gIHJldHVybiBLZSB8fCAoS2UgPSAxLCAoZnVuY3Rpb24odCwgZSkge1xuICAgIChmdW5jdGlvbihuLCByKSB7XG4gICAgICB0LmV4cG9ydHMgPSByKCk7XG4gICAgfSkoJGksIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuID0geyBMVFM6IFwiaDptbTpzcyBBXCIsIExUOiBcImg6bW0gQVwiLCBMOiBcIk1NL0REL1lZWVlcIiwgTEw6IFwiTU1NTSBELCBZWVlZXCIsIExMTDogXCJNTU1NIEQsIFlZWVkgaDptbSBBXCIsIExMTEw6IFwiZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQVwiIH0sIHIgPSAvKFxcW1teW10qXFxdKXwoWy1fOi8uLCgpXFxzXSspfChBfGF8UXxZWVlZfFlZP3x3dz98TU0/TT9NP3xEb3xERD98aGg/fEhIP3xtbT98c3M/fFN7MSwzfXx6fFpaPykvZywgaSA9IC9cXGQvLCBhID0gL1xcZFxcZC8sIGMgPSAvXFxkXFxkPy8sIG0gPSAvXFxkKlteLV86LywoKVxcc1xcZF0rLywgWSA9IHt9LCBDID0gZnVuY3Rpb24oVSkge1xuICAgICAgICByZXR1cm4gKFUgPSArVSkgKyAoVSA+IDY4ID8gMTkwMCA6IDJlMyk7XG4gICAgICB9LCBrID0gZnVuY3Rpb24oVSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oSSkge1xuICAgICAgICAgIHRoaXNbVV0gPSArSTtcbiAgICAgICAgfTtcbiAgICAgIH0sIEwgPSBbL1srLV1cXGRcXGQ6PyhcXGRcXGQpP3xaLywgZnVuY3Rpb24oVSkge1xuICAgICAgICAodGhpcy56b25lIHx8ICh0aGlzLnpvbmUgPSB7fSkpLm9mZnNldCA9IChmdW5jdGlvbihJKSB7XG4gICAgICAgICAgaWYgKCFJIHx8IEkgPT09IFwiWlwiKSByZXR1cm4gMDtcbiAgICAgICAgICB2YXIgTiA9IEkubWF0Y2goLyhbKy1dfFxcZFxcZCkvZyksIFcgPSA2MCAqIE5bMV0gKyAoK05bMl0gfHwgMCk7XG4gICAgICAgICAgcmV0dXJuIFcgPT09IDAgPyAwIDogTlswXSA9PT0gXCIrXCIgPyAtVyA6IFc7XG4gICAgICAgIH0pKFUpO1xuICAgICAgfV0sIF8gPSBmdW5jdGlvbihVKSB7XG4gICAgICAgIHZhciBJID0gWVtVXTtcbiAgICAgICAgcmV0dXJuIEkgJiYgKEkuaW5kZXhPZiA/IEkgOiBJLnMuY29uY2F0KEkuZikpO1xuICAgICAgfSwgUyA9IGZ1bmN0aW9uKFUsIEkpIHtcbiAgICAgICAgdmFyIE4sIFcgPSBZLm1lcmlkaWVtO1xuICAgICAgICBpZiAoVykge1xuICAgICAgICAgIGZvciAodmFyIHEgPSAxOyBxIDw9IDI0OyBxICs9IDEpIGlmIChVLmluZGV4T2YoVyhxLCAwLCBJKSkgPiAtMSkge1xuICAgICAgICAgICAgTiA9IHEgPiAxMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIE4gPSBVID09PSAoSSA/IFwicG1cIiA6IFwiUE1cIik7XG4gICAgICAgIHJldHVybiBOO1xuICAgICAgfSwgWiA9IHsgQTogW20sIGZ1bmN0aW9uKFUpIHtcbiAgICAgICAgdGhpcy5hZnRlcm5vb24gPSBTKFUsICExKTtcbiAgICAgIH1dLCBhOiBbbSwgZnVuY3Rpb24oVSkge1xuICAgICAgICB0aGlzLmFmdGVybm9vbiA9IFMoVSwgITApO1xuICAgICAgfV0sIFE6IFtpLCBmdW5jdGlvbihVKSB7XG4gICAgICAgIHRoaXMubW9udGggPSAzICogKFUgLSAxKSArIDE7XG4gICAgICB9XSwgUzogW2ksIGZ1bmN0aW9uKFUpIHtcbiAgICAgICAgdGhpcy5taWxsaXNlY29uZHMgPSAxMDAgKiArVTtcbiAgICAgIH1dLCBTUzogW2EsIGZ1bmN0aW9uKFUpIHtcbiAgICAgICAgdGhpcy5taWxsaXNlY29uZHMgPSAxMCAqICtVO1xuICAgICAgfV0sIFNTUzogWy9cXGR7M30vLCBmdW5jdGlvbihVKSB7XG4gICAgICAgIHRoaXMubWlsbGlzZWNvbmRzID0gK1U7XG4gICAgICB9XSwgczogW2MsIGsoXCJzZWNvbmRzXCIpXSwgc3M6IFtjLCBrKFwic2Vjb25kc1wiKV0sIG06IFtjLCBrKFwibWludXRlc1wiKV0sIG1tOiBbYywgayhcIm1pbnV0ZXNcIildLCBIOiBbYywgayhcImhvdXJzXCIpXSwgaDogW2MsIGsoXCJob3Vyc1wiKV0sIEhIOiBbYywgayhcImhvdXJzXCIpXSwgaGg6IFtjLCBrKFwiaG91cnNcIildLCBEOiBbYywgayhcImRheVwiKV0sIEREOiBbYSwgayhcImRheVwiKV0sIERvOiBbbSwgZnVuY3Rpb24oVSkge1xuICAgICAgICB2YXIgSSA9IFkub3JkaW5hbCwgTiA9IFUubWF0Y2goL1xcZCsvKTtcbiAgICAgICAgaWYgKHRoaXMuZGF5ID0gTlswXSwgSSkgZm9yICh2YXIgVyA9IDE7IFcgPD0gMzE7IFcgKz0gMSkgSShXKS5yZXBsYWNlKC9cXFt8XFxdL2csIFwiXCIpID09PSBVICYmICh0aGlzLmRheSA9IFcpO1xuICAgICAgfV0sIHc6IFtjLCBrKFwid2Vla1wiKV0sIHd3OiBbYSwgayhcIndlZWtcIildLCBNOiBbYywgayhcIm1vbnRoXCIpXSwgTU06IFthLCBrKFwibW9udGhcIildLCBNTU06IFttLCBmdW5jdGlvbihVKSB7XG4gICAgICAgIHZhciBJID0gXyhcIm1vbnRoc1wiKSwgTiA9IChfKFwibW9udGhzU2hvcnRcIikgfHwgSS5tYXAoKGZ1bmN0aW9uKFcpIHtcbiAgICAgICAgICByZXR1cm4gVy5zbGljZSgwLCAzKTtcbiAgICAgICAgfSkpKS5pbmRleE9mKFUpICsgMTtcbiAgICAgICAgaWYgKE4gPCAxKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgdGhpcy5tb250aCA9IE4gJSAxMiB8fCBOO1xuICAgICAgfV0sIE1NTU06IFttLCBmdW5jdGlvbihVKSB7XG4gICAgICAgIHZhciBJID0gXyhcIm1vbnRoc1wiKS5pbmRleE9mKFUpICsgMTtcbiAgICAgICAgaWYgKEkgPCAxKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgdGhpcy5tb250aCA9IEkgJSAxMiB8fCBJO1xuICAgICAgfV0sIFk6IFsvWystXT9cXGQrLywgayhcInllYXJcIildLCBZWTogW2EsIGZ1bmN0aW9uKFUpIHtcbiAgICAgICAgdGhpcy55ZWFyID0gQyhVKTtcbiAgICAgIH1dLCBZWVlZOiBbL1xcZHs0fS8sIGsoXCJ5ZWFyXCIpXSwgWjogTCwgWlo6IEwgfTtcbiAgICAgIGZ1bmN0aW9uIEEoVSkge1xuICAgICAgICB2YXIgSSwgTjtcbiAgICAgICAgSSA9IFUsIE4gPSBZICYmIFkuZm9ybWF0cztcbiAgICAgICAgZm9yICh2YXIgVyA9IChVID0gSS5yZXBsYWNlKC8oXFxbW15cXF1dK10pfChMVFM/fGx7MSw0fXxMezEsNH0pL2csIChmdW5jdGlvbihELCB3LCBUKSB7XG4gICAgICAgICAgdmFyIHYgPSBUICYmIFQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gdyB8fCBOW1RdIHx8IG5bVF0gfHwgTlt2XS5yZXBsYWNlKC8oXFxbW15cXF1dK10pfChNTU1NfE1NfEREfGRkZGQpL2csIChmdW5jdGlvbih1LCBmLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gZiB8fCBiLnNsaWNlKDEpO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpKS5tYXRjaChyKSwgcSA9IFcubGVuZ3RoLCBqID0gMDsgaiA8IHE7IGogKz0gMSkge1xuICAgICAgICAgIHZhciBwID0gV1tqXSwgZyA9IFpbcF0sIHkgPSBnICYmIGdbMF0sIGggPSBnICYmIGdbMV07XG4gICAgICAgICAgV1tqXSA9IGggPyB7IHJlZ2V4OiB5LCBwYXJzZXI6IGggfSA6IHAucmVwbGFjZSgvXlxcW3xcXF0kL2csIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihEKSB7XG4gICAgICAgICAgZm9yICh2YXIgdyA9IHt9LCBUID0gMCwgdiA9IDA7IFQgPCBxOyBUICs9IDEpIHtcbiAgICAgICAgICAgIHZhciB1ID0gV1tUXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdSA9PSBcInN0cmluZ1wiKSB2ICs9IHUubGVuZ3RoO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBmID0gdS5yZWdleCwgYiA9IHUucGFyc2VyLCB4ID0gRC5zbGljZSh2KSwgRiA9IGYuZXhlYyh4KVswXTtcbiAgICAgICAgICAgICAgYi5jYWxsKHcsIEYpLCBEID0gRC5yZXBsYWNlKEYsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgIHZhciBYID0gby5hZnRlcm5vb247XG4gICAgICAgICAgICBpZiAoWCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gby5ob3VycztcbiAgICAgICAgICAgICAgWCA/IHMgPCAxMiAmJiAoby5ob3VycyArPSAxMikgOiBzID09PSAxMiAmJiAoby5ob3VycyA9IDApLCBkZWxldGUgby5hZnRlcm5vb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkodyksIHc7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24oVSwgSSwgTikge1xuICAgICAgICBOLnAuY3VzdG9tUGFyc2VGb3JtYXQgPSAhMCwgVSAmJiBVLnBhcnNlVHdvRGlnaXRZZWFyICYmIChDID0gVS5wYXJzZVR3b0RpZ2l0WWVhcik7XG4gICAgICAgIHZhciBXID0gSS5wcm90b3R5cGUsIHEgPSBXLnBhcnNlO1xuICAgICAgICBXLnBhcnNlID0gZnVuY3Rpb24oaikge1xuICAgICAgICAgIHZhciBwID0gai5kYXRlLCBnID0gai51dGMsIHkgPSBqLmFyZ3M7XG4gICAgICAgICAgdGhpcy4kdSA9IGc7XG4gICAgICAgICAgdmFyIGggPSB5WzFdO1xuICAgICAgICAgIGlmICh0eXBlb2YgaCA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB2YXIgRCA9IHlbMl0gPT09ICEwLCB3ID0geVszXSA9PT0gITAsIFQgPSBEIHx8IHcsIHYgPSB5WzJdO1xuICAgICAgICAgICAgdyAmJiAodiA9IHlbMl0pLCBZID0gdGhpcy4kbG9jYWxlKCksICFEICYmIHYgJiYgKFkgPSBOLkxzW3ZdKSwgdGhpcy4kZCA9IChmdW5jdGlvbih4LCBGLCBvLCBYKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKFtcInhcIiwgXCJYXCJdLmluZGV4T2YoRikgPiAtMSkgcmV0dXJuIG5ldyBEYXRlKChGID09PSBcIlhcIiA/IDFlMyA6IDEpICogeCk7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBBKEYpKHgpLCBFID0gcy55ZWFyLCBSID0gcy5tb250aCwgeiA9IHMuZGF5LCBQID0gcy5ob3VycywgSyA9IHMubWludXRlcywgTyA9IHMuc2Vjb25kcywgc3QgPSBzLm1pbGxpc2Vjb25kcywgTSA9IHMuem9uZSwgSCA9IHMud2VlaywgViA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpLCBsID0geiB8fCAoRSB8fCBSID8gMSA6IFYuZ2V0RGF0ZSgpKSwgSiA9IEUgfHwgVi5nZXRGdWxsWWVhcigpLCAkID0gMDtcbiAgICAgICAgICAgICAgICBFICYmICFSIHx8ICgkID0gUiA+IDAgPyBSIC0gMSA6IFYuZ2V0TW9udGgoKSk7XG4gICAgICAgICAgICAgICAgdmFyIFEsIEcgPSBQIHx8IDAsIGl0ID0gSyB8fCAwLCBhdCA9IE8gfHwgMCwgcHQgPSBzdCB8fCAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBNID8gbmV3IERhdGUoRGF0ZS5VVEMoSiwgJCwgbCwgRywgaXQsIGF0LCBwdCArIDYwICogTS5vZmZzZXQgKiAxZTMpKSA6IG8gPyBuZXcgRGF0ZShEYXRlLlVUQyhKLCAkLCBsLCBHLCBpdCwgYXQsIHB0KSkgOiAoUSA9IG5ldyBEYXRlKEosICQsIGwsIEcsIGl0LCBhdCwgcHQpLCBIICYmIChRID0gWChRKS53ZWVrKEgpLnRvRGF0ZSgpKSwgUSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoXCJcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKHAsIGgsIGcsIE4pLCB0aGlzLmluaXQoKSwgdiAmJiB2ICE9PSAhMCAmJiAodGhpcy4kTCA9IHRoaXMubG9jYWxlKHYpLiRMKSwgVCAmJiBwICE9IHRoaXMuZm9ybWF0KGgpICYmICh0aGlzLiRkID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKFwiXCIpKSwgWSA9IHt9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoaCBpbnN0YW5jZW9mIEFycmF5KSBmb3IgKHZhciB1ID0gaC5sZW5ndGgsIGYgPSAxOyBmIDw9IHU7IGYgKz0gMSkge1xuICAgICAgICAgICAgeVsxXSA9IGhbZiAtIDFdO1xuICAgICAgICAgICAgdmFyIGIgPSBOLmFwcGx5KHRoaXMsIHkpO1xuICAgICAgICAgICAgaWYgKGIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgIHRoaXMuJGQgPSBiLiRkLCB0aGlzLiRMID0gYi4kTCwgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZiA9PT0gdSAmJiAodGhpcy4kZCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZShcIlwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgcS5jYWxsKHRoaXMsIGopO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KSk7XG4gIH0pKGp0KSksIGp0LmV4cG9ydHM7XG59XG52YXIgSGkgPSBPaSgpO1xuY29uc3QgTmkgPSAvKiBAX19QVVJFX18gKi8gYWUoSGkpO1xudmFyIFF0ID0geyBleHBvcnRzOiB7fSB9LCBQaSA9IFF0LmV4cG9ydHMsIHRuO1xuZnVuY3Rpb24gVmkoKSB7XG4gIHJldHVybiB0biB8fCAodG4gPSAxLCAoZnVuY3Rpb24odCwgZSkge1xuICAgIChmdW5jdGlvbihuLCByKSB7XG4gICAgICB0LmV4cG9ydHMgPSByKCk7XG4gICAgfSkoUGksIChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihuLCByKSB7XG4gICAgICAgIHZhciBpID0gci5wcm90b3R5cGUsIGEgPSBpLmZvcm1hdDtcbiAgICAgICAgaS5mb3JtYXQgPSBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgdmFyIG0gPSB0aGlzLCBZID0gdGhpcy4kbG9jYWxlKCk7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkgcmV0dXJuIGEuYmluZCh0aGlzKShjKTtcbiAgICAgICAgICB2YXIgQyA9IHRoaXMuJHV0aWxzKCksIGsgPSAoYyB8fCBcIllZWVktTU0tRERUSEg6bW06c3NaXCIpLnJlcGxhY2UoL1xcWyhbXlxcXV0rKV18UXx3b3x3d3x3fFdXfFd8enp6fHp8Z2dnZ3xHR0dHfERvfFh8eHxrezEsMn18Uy9nLCAoZnVuY3Rpb24oTCkge1xuICAgICAgICAgICAgc3dpdGNoIChMKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgobS4kTSArIDEpIC8gMyk7XG4gICAgICAgICAgICAgIGNhc2UgXCJEb1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBZLm9yZGluYWwobS4kRCk7XG4gICAgICAgICAgICAgIGNhc2UgXCJnZ2dnXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0ud2Vla1llYXIoKTtcbiAgICAgICAgICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbS5pc29XZWVrWWVhcigpO1xuICAgICAgICAgICAgICBjYXNlIFwid29cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gWS5vcmRpbmFsKG0ud2VlaygpLCBcIldcIik7XG4gICAgICAgICAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJ3d1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBDLnMobS53ZWVrKCksIEwgPT09IFwid1wiID8gMSA6IDIsIFwiMFwiKTtcbiAgICAgICAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICAgICAgY2FzZSBcIldXXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEMucyhtLmlzb1dlZWsoKSwgTCA9PT0gXCJXXCIgPyAxIDogMiwgXCIwXCIpO1xuICAgICAgICAgICAgICBjYXNlIFwia1wiOlxuICAgICAgICAgICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gQy5zKFN0cmluZyhtLiRIID09PSAwID8gMjQgOiBtLiRIKSwgTCA9PT0gXCJrXCIgPyAxIDogMiwgXCIwXCIpO1xuICAgICAgICAgICAgICBjYXNlIFwiWFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKG0uJGQuZ2V0VGltZSgpIC8gMWUzKTtcbiAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbS4kZC5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiW1wiICsgbS5vZmZzZXROYW1lKCkgKyBcIl1cIjtcbiAgICAgICAgICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIltcIiArIG0ub2Zmc2V0TmFtZShcImxvbmdcIikgKyBcIl1cIjtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgcmV0dXJuIGEuYmluZCh0aGlzKShrKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSkpO1xuICB9KShRdCkpLCBRdC5leHBvcnRzO1xufVxudmFyIHppID0gVmkoKTtcbmNvbnN0IFJpID0gLyogQF9fUFVSRV9fICovIGFlKHppKTtcbnZhciBKdCA9IHsgZXhwb3J0czoge30gfSwgcWkgPSBKdC5leHBvcnRzLCBlbjtcbmZ1bmN0aW9uIFppKCkge1xuICByZXR1cm4gZW4gfHwgKGVuID0gMSwgKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAoZnVuY3Rpb24obiwgcikge1xuICAgICAgdC5leHBvcnRzID0gcigpO1xuICAgIH0pKHFpLCAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbiwgciwgaSA9IDFlMywgYSA9IDZlNCwgYyA9IDM2ZTUsIG0gPSA4NjRlNSwgWSA9IC9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZywgQyA9IDMxNTM2ZTYsIGsgPSAyNjI4ZTYsIEwgPSAvXigtfFxcKyk/UCg/OihbLStdP1swLTksLl0qKVkpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVcpPyg/OihbLStdP1swLTksLl0qKUQpPyg/OlQoPzooWy0rXT9bMC05LC5dKilIKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilTKT8pPyQvLCBfID0geyB5ZWFyczogQywgbW9udGhzOiBrLCBkYXlzOiBtLCBob3VyczogYywgbWludXRlczogYSwgc2Vjb25kczogaSwgbWlsbGlzZWNvbmRzOiAxLCB3ZWVrczogNjA0OGU1IH0sIFMgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBwIGluc3RhbmNlb2YgcTtcbiAgICAgIH0sIFogPSBmdW5jdGlvbihwLCBnLCB5KSB7XG4gICAgICAgIHJldHVybiBuZXcgcShwLCB5LCBnLiRsKTtcbiAgICAgIH0sIEEgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiByLnAocCkgKyBcInNcIjtcbiAgICAgIH0sIFUgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBwIDwgMDtcbiAgICAgIH0sIEkgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBVKHApID8gTWF0aC5jZWlsKHApIDogTWF0aC5mbG9vcihwKTtcbiAgICAgIH0sIE4gPSBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhwKTtcbiAgICAgIH0sIFcgPSBmdW5jdGlvbihwLCBnKSB7XG4gICAgICAgIHJldHVybiBwID8gVShwKSA/IHsgbmVnYXRpdmU6ICEwLCBmb3JtYXQ6IFwiXCIgKyBOKHApICsgZyB9IDogeyBuZWdhdGl2ZTogITEsIGZvcm1hdDogXCJcIiArIHAgKyBnIH0gOiB7IG5lZ2F0aXZlOiAhMSwgZm9ybWF0OiBcIlwiIH07XG4gICAgICB9LCBxID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICBmdW5jdGlvbiBwKHksIGgsIEQpIHtcbiAgICAgICAgICB2YXIgdyA9IHRoaXM7XG4gICAgICAgICAgaWYgKHRoaXMuJGQgPSB7fSwgdGhpcy4kbCA9IEQsIHkgPT09IHZvaWQgMCAmJiAodGhpcy4kbXMgPSAwLCB0aGlzLnBhcnNlRnJvbU1pbGxpc2Vjb25kcygpKSwgaCkgcmV0dXJuIFooeSAqIF9bQShoKV0sIHRoaXMpO1xuICAgICAgICAgIGlmICh0eXBlb2YgeSA9PSBcIm51bWJlclwiKSByZXR1cm4gdGhpcy4kbXMgPSB5LCB0aGlzLnBhcnNlRnJvbU1pbGxpc2Vjb25kcygpLCB0aGlzO1xuICAgICAgICAgIGlmICh0eXBlb2YgeSA9PSBcIm9iamVjdFwiKSByZXR1cm4gT2JqZWN0LmtleXMoeSkuZm9yRWFjaCgoZnVuY3Rpb24odSkge1xuICAgICAgICAgICAgdy4kZFtBKHUpXSA9IHlbdV07XG4gICAgICAgICAgfSkpLCB0aGlzLmNhbE1pbGxpc2Vjb25kcygpLCB0aGlzO1xuICAgICAgICAgIGlmICh0eXBlb2YgeSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB2YXIgVCA9IHkubWF0Y2goTCk7XG4gICAgICAgICAgICBpZiAoVCkge1xuICAgICAgICAgICAgICB2YXIgdiA9IFQuc2xpY2UoMikubWFwKChmdW5jdGlvbih1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHUgIT0gbnVsbCA/IE51bWJlcih1KSA6IDA7XG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGQueWVhcnMgPSB2WzBdLCB0aGlzLiRkLm1vbnRocyA9IHZbMV0sIHRoaXMuJGQud2Vla3MgPSB2WzJdLCB0aGlzLiRkLmRheXMgPSB2WzNdLCB0aGlzLiRkLmhvdXJzID0gdls0XSwgdGhpcy4kZC5taW51dGVzID0gdls1XSwgdGhpcy4kZC5zZWNvbmRzID0gdls2XSwgdGhpcy5jYWxNaWxsaXNlY29uZHMoKSwgdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGcgPSBwLnByb3RvdHlwZTtcbiAgICAgICAgcmV0dXJuIGcuY2FsTWlsbGlzZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHkgPSB0aGlzO1xuICAgICAgICAgIHRoaXMuJG1zID0gT2JqZWN0LmtleXModGhpcy4kZCkucmVkdWNlKChmdW5jdGlvbihoLCBEKSB7XG4gICAgICAgICAgICByZXR1cm4gaCArICh5LiRkW0RdIHx8IDApICogX1tEXTtcbiAgICAgICAgICB9KSwgMCk7XG4gICAgICAgIH0sIGcucGFyc2VGcm9tTWlsbGlzZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHkgPSB0aGlzLiRtcztcbiAgICAgICAgICB0aGlzLiRkLnllYXJzID0gSSh5IC8gQyksIHkgJT0gQywgdGhpcy4kZC5tb250aHMgPSBJKHkgLyBrKSwgeSAlPSBrLCB0aGlzLiRkLmRheXMgPSBJKHkgLyBtKSwgeSAlPSBtLCB0aGlzLiRkLmhvdXJzID0gSSh5IC8gYyksIHkgJT0gYywgdGhpcy4kZC5taW51dGVzID0gSSh5IC8gYSksIHkgJT0gYSwgdGhpcy4kZC5zZWNvbmRzID0gSSh5IC8gaSksIHkgJT0gaSwgdGhpcy4kZC5taWxsaXNlY29uZHMgPSB5O1xuICAgICAgICB9LCBnLnRvSVNPU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHkgPSBXKHRoaXMuJGQueWVhcnMsIFwiWVwiKSwgaCA9IFcodGhpcy4kZC5tb250aHMsIFwiTVwiKSwgRCA9ICt0aGlzLiRkLmRheXMgfHwgMDtcbiAgICAgICAgICB0aGlzLiRkLndlZWtzICYmIChEICs9IDcgKiB0aGlzLiRkLndlZWtzKTtcbiAgICAgICAgICB2YXIgdyA9IFcoRCwgXCJEXCIpLCBUID0gVyh0aGlzLiRkLmhvdXJzLCBcIkhcIiksIHYgPSBXKHRoaXMuJGQubWludXRlcywgXCJNXCIpLCB1ID0gdGhpcy4kZC5zZWNvbmRzIHx8IDA7XG4gICAgICAgICAgdGhpcy4kZC5taWxsaXNlY29uZHMgJiYgKHUgKz0gdGhpcy4kZC5taWxsaXNlY29uZHMgLyAxZTMsIHUgPSBNYXRoLnJvdW5kKDFlMyAqIHUpIC8gMWUzKTtcbiAgICAgICAgICB2YXIgZiA9IFcodSwgXCJTXCIpLCBiID0geS5uZWdhdGl2ZSB8fCBoLm5lZ2F0aXZlIHx8IHcubmVnYXRpdmUgfHwgVC5uZWdhdGl2ZSB8fCB2Lm5lZ2F0aXZlIHx8IGYubmVnYXRpdmUsIHggPSBULmZvcm1hdCB8fCB2LmZvcm1hdCB8fCBmLmZvcm1hdCA/IFwiVFwiIDogXCJcIiwgRiA9IChiID8gXCItXCIgOiBcIlwiKSArIFwiUFwiICsgeS5mb3JtYXQgKyBoLmZvcm1hdCArIHcuZm9ybWF0ICsgeCArIFQuZm9ybWF0ICsgdi5mb3JtYXQgKyBmLmZvcm1hdDtcbiAgICAgICAgICByZXR1cm4gRiA9PT0gXCJQXCIgfHwgRiA9PT0gXCItUFwiID8gXCJQMERcIiA6IEY7XG4gICAgICAgIH0sIGcudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSwgZy5mb3JtYXQgPSBmdW5jdGlvbih5KSB7XG4gICAgICAgICAgdmFyIGggPSB5IHx8IFwiWVlZWS1NTS1ERFRISDptbTpzc1wiLCBEID0geyBZOiB0aGlzLiRkLnllYXJzLCBZWTogci5zKHRoaXMuJGQueWVhcnMsIDIsIFwiMFwiKSwgWVlZWTogci5zKHRoaXMuJGQueWVhcnMsIDQsIFwiMFwiKSwgTTogdGhpcy4kZC5tb250aHMsIE1NOiByLnModGhpcy4kZC5tb250aHMsIDIsIFwiMFwiKSwgRDogdGhpcy4kZC5kYXlzLCBERDogci5zKHRoaXMuJGQuZGF5cywgMiwgXCIwXCIpLCBIOiB0aGlzLiRkLmhvdXJzLCBISDogci5zKHRoaXMuJGQuaG91cnMsIDIsIFwiMFwiKSwgbTogdGhpcy4kZC5taW51dGVzLCBtbTogci5zKHRoaXMuJGQubWludXRlcywgMiwgXCIwXCIpLCBzOiB0aGlzLiRkLnNlY29uZHMsIHNzOiByLnModGhpcy4kZC5zZWNvbmRzLCAyLCBcIjBcIiksIFNTUzogci5zKHRoaXMuJGQubWlsbGlzZWNvbmRzLCAzLCBcIjBcIikgfTtcbiAgICAgICAgICByZXR1cm4gaC5yZXBsYWNlKFksIChmdW5jdGlvbih3LCBUKSB7XG4gICAgICAgICAgICByZXR1cm4gVCB8fCBTdHJpbmcoRFt3XSk7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9LCBnLmFzID0gZnVuY3Rpb24oeSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRtcyAvIF9bQSh5KV07XG4gICAgICAgIH0sIGcuZ2V0ID0gZnVuY3Rpb24oeSkge1xuICAgICAgICAgIHZhciBoID0gdGhpcy4kbXMsIEQgPSBBKHkpO1xuICAgICAgICAgIHJldHVybiBEID09PSBcIm1pbGxpc2Vjb25kc1wiID8gaCAlPSAxZTMgOiBoID0gRCA9PT0gXCJ3ZWVrc1wiID8gSShoIC8gX1tEXSkgOiB0aGlzLiRkW0RdLCBoIHx8IDA7XG4gICAgICAgIH0sIGcuYWRkID0gZnVuY3Rpb24oeSwgaCwgRCkge1xuICAgICAgICAgIHZhciB3O1xuICAgICAgICAgIHJldHVybiB3ID0gaCA/IHkgKiBfW0EoaCldIDogUyh5KSA/IHkuJG1zIDogWih5LCB0aGlzKS4kbXMsIFoodGhpcy4kbXMgKyB3ICogKEQgPyAtMSA6IDEpLCB0aGlzKTtcbiAgICAgICAgfSwgZy5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHksIGgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoeSwgaCwgITApO1xuICAgICAgICB9LCBnLmxvY2FsZSA9IGZ1bmN0aW9uKHkpIHtcbiAgICAgICAgICB2YXIgaCA9IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgICByZXR1cm4gaC4kbCA9IHksIGg7XG4gICAgICAgIH0sIGcuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gWih0aGlzLiRtcywgdGhpcyk7XG4gICAgICAgIH0sIGcuaHVtYW5pemUgPSBmdW5jdGlvbih5KSB7XG4gICAgICAgICAgcmV0dXJuIG4oKS5hZGQodGhpcy4kbXMsIFwibXNcIikubG9jYWxlKHRoaXMuJGwpLmZyb21Ob3coIXkpO1xuICAgICAgICB9LCBnLnZhbHVlT2YgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hc01pbGxpc2Vjb25kcygpO1xuICAgICAgICB9LCBnLm1pbGxpc2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldChcIm1pbGxpc2Vjb25kc1wiKTtcbiAgICAgICAgfSwgZy5hc01pbGxpc2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmFzKFwibWlsbGlzZWNvbmRzXCIpO1xuICAgICAgICB9LCBnLnNlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJzZWNvbmRzXCIpO1xuICAgICAgICB9LCBnLmFzU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmFzKFwic2Vjb25kc1wiKTtcbiAgICAgICAgfSwgZy5taW51dGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwibWludXRlc1wiKTtcbiAgICAgICAgfSwgZy5hc01pbnV0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hcyhcIm1pbnV0ZXNcIik7XG4gICAgICAgIH0sIGcuaG91cnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJob3Vyc1wiKTtcbiAgICAgICAgfSwgZy5hc0hvdXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXMoXCJob3Vyc1wiKTtcbiAgICAgICAgfSwgZy5kYXlzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwiZGF5c1wiKTtcbiAgICAgICAgfSwgZy5hc0RheXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hcyhcImRheXNcIik7XG4gICAgICAgIH0sIGcud2Vla3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJ3ZWVrc1wiKTtcbiAgICAgICAgfSwgZy5hc1dlZWtzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXMoXCJ3ZWVrc1wiKTtcbiAgICAgICAgfSwgZy5tb250aHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJtb250aHNcIik7XG4gICAgICAgIH0sIGcuYXNNb250aHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hcyhcIm1vbnRoc1wiKTtcbiAgICAgICAgfSwgZy55ZWFycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldChcInllYXJzXCIpO1xuICAgICAgICB9LCBnLmFzWWVhcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hcyhcInllYXJzXCIpO1xuICAgICAgICB9LCBwO1xuICAgICAgfSkoKSwgaiA9IGZ1bmN0aW9uKHAsIGcsIHkpIHtcbiAgICAgICAgcmV0dXJuIHAuYWRkKGcueWVhcnMoKSAqIHksIFwieVwiKS5hZGQoZy5tb250aHMoKSAqIHksIFwiTVwiKS5hZGQoZy5kYXlzKCkgKiB5LCBcImRcIikuYWRkKGcuaG91cnMoKSAqIHksIFwiaFwiKS5hZGQoZy5taW51dGVzKCkgKiB5LCBcIm1cIikuYWRkKGcuc2Vjb25kcygpICogeSwgXCJzXCIpLmFkZChnLm1pbGxpc2Vjb25kcygpICogeSwgXCJtc1wiKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocCwgZywgeSkge1xuICAgICAgICBuID0geSwgciA9IHkoKS4kdXRpbHMoKSwgeS5kdXJhdGlvbiA9IGZ1bmN0aW9uKHcsIFQpIHtcbiAgICAgICAgICB2YXIgdiA9IHkubG9jYWxlKCk7XG4gICAgICAgICAgcmV0dXJuIFoodywgeyAkbDogdiB9LCBUKTtcbiAgICAgICAgfSwgeS5pc0R1cmF0aW9uID0gUztcbiAgICAgICAgdmFyIGggPSBnLnByb3RvdHlwZS5hZGQsIEQgPSBnLnByb3RvdHlwZS5zdWJ0cmFjdDtcbiAgICAgICAgZy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odywgVCkge1xuICAgICAgICAgIHJldHVybiBTKHcpID8gaih0aGlzLCB3LCAxKSA6IGguYmluZCh0aGlzKSh3LCBUKTtcbiAgICAgICAgfSwgZy5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbih3LCBUKSB7XG4gICAgICAgICAgcmV0dXJuIFModykgPyBqKHRoaXMsIHcsIC0xKSA6IEQuYmluZCh0aGlzKSh3LCBUKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSkpO1xuICB9KShKdCkpLCBKdC5leHBvcnRzO1xufVxudmFyIEJpID0gWmkoKTtcbmNvbnN0IFhpID0gLyogQF9fUFVSRV9fICovIGFlKEJpKTtcbnZhciB4ZSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHQgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih2LCB1LCBmLCBiKSB7XG4gICAgZm9yIChmID0gZiB8fCB7fSwgYiA9IHYubGVuZ3RoOyBiLS07IGZbdltiXV0gPSB1KSA7XG4gICAgcmV0dXJuIGY7XG4gIH0sIFwib1wiKSwgZSA9IFs2LCA4LCAxMCwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMzLCAzNSwgMzYsIDM4LCA0MF0sIG4gPSBbMSwgMjZdLCByID0gWzEsIDI3XSwgaSA9IFsxLCAyOF0sIGEgPSBbMSwgMjldLCBjID0gWzEsIDMwXSwgbSA9IFsxLCAzMV0sIFkgPSBbMSwgMzJdLCBDID0gWzEsIDMzXSwgayA9IFsxLCAzNF0sIEwgPSBbMSwgOV0sIF8gPSBbMSwgMTBdLCBTID0gWzEsIDExXSwgWiA9IFsxLCAxMl0sIEEgPSBbMSwgMTNdLCBVID0gWzEsIDE0XSwgSSA9IFsxLCAxNV0sIE4gPSBbMSwgMTZdLCBXID0gWzEsIDE5XSwgcSA9IFsxLCAyMF0sIGogPSBbMSwgMjFdLCBwID0gWzEsIDIyXSwgZyA9IFsxLCAyM10sIHkgPSBbMSwgMjVdLCBoID0gWzEsIDM1XSwgRCA9IHtcbiAgICB0cmFjZTogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gICAgfSwgXCJ0cmFjZVwiKSxcbiAgICB5eToge30sXG4gICAgc3ltYm9sc186IHsgZXJyb3I6IDIsIHN0YXJ0OiAzLCBnYW50dDogNCwgZG9jdW1lbnQ6IDUsIEVPRjogNiwgbGluZTogNywgU1BBQ0U6IDgsIHN0YXRlbWVudDogOSwgTkw6IDEwLCB3ZWVrZGF5OiAxMSwgd2Vla2RheV9tb25kYXk6IDEyLCB3ZWVrZGF5X3R1ZXNkYXk6IDEzLCB3ZWVrZGF5X3dlZG5lc2RheTogMTQsIHdlZWtkYXlfdGh1cnNkYXk6IDE1LCB3ZWVrZGF5X2ZyaWRheTogMTYsIHdlZWtkYXlfc2F0dXJkYXk6IDE3LCB3ZWVrZGF5X3N1bmRheTogMTgsIHdlZWtlbmQ6IDE5LCB3ZWVrZW5kX2ZyaWRheTogMjAsIHdlZWtlbmRfc2F0dXJkYXk6IDIxLCBkYXRlRm9ybWF0OiAyMiwgaW5jbHVzaXZlRW5kRGF0ZXM6IDIzLCB0b3BBeGlzOiAyNCwgYXhpc0Zvcm1hdDogMjUsIHRpY2tJbnRlcnZhbDogMjYsIGV4Y2x1ZGVzOiAyNywgaW5jbHVkZXM6IDI4LCB0b2RheU1hcmtlcjogMjksIHRpdGxlOiAzMCwgYWNjX3RpdGxlOiAzMSwgYWNjX3RpdGxlX3ZhbHVlOiAzMiwgYWNjX2Rlc2NyOiAzMywgYWNjX2Rlc2NyX3ZhbHVlOiAzNCwgYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZTogMzUsIHNlY3Rpb246IDM2LCBjbGlja1N0YXRlbWVudDogMzcsIHRhc2tUeHQ6IDM4LCB0YXNrRGF0YTogMzksIGNsaWNrOiA0MCwgY2FsbGJhY2tuYW1lOiA0MSwgY2FsbGJhY2thcmdzOiA0MiwgaHJlZjogNDMsIGNsaWNrU3RhdGVtZW50RGVidWc6IDQ0LCAkYWNjZXB0OiAwLCAkZW5kOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDQ6IFwiZ2FudHRcIiwgNjogXCJFT0ZcIiwgODogXCJTUEFDRVwiLCAxMDogXCJOTFwiLCAxMjogXCJ3ZWVrZGF5X21vbmRheVwiLCAxMzogXCJ3ZWVrZGF5X3R1ZXNkYXlcIiwgMTQ6IFwid2Vla2RheV93ZWRuZXNkYXlcIiwgMTU6IFwid2Vla2RheV90aHVyc2RheVwiLCAxNjogXCJ3ZWVrZGF5X2ZyaWRheVwiLCAxNzogXCJ3ZWVrZGF5X3NhdHVyZGF5XCIsIDE4OiBcIndlZWtkYXlfc3VuZGF5XCIsIDIwOiBcIndlZWtlbmRfZnJpZGF5XCIsIDIxOiBcIndlZWtlbmRfc2F0dXJkYXlcIiwgMjI6IFwiZGF0ZUZvcm1hdFwiLCAyMzogXCJpbmNsdXNpdmVFbmREYXRlc1wiLCAyNDogXCJ0b3BBeGlzXCIsIDI1OiBcImF4aXNGb3JtYXRcIiwgMjY6IFwidGlja0ludGVydmFsXCIsIDI3OiBcImV4Y2x1ZGVzXCIsIDI4OiBcImluY2x1ZGVzXCIsIDI5OiBcInRvZGF5TWFya2VyXCIsIDMwOiBcInRpdGxlXCIsIDMxOiBcImFjY190aXRsZVwiLCAzMjogXCJhY2NfdGl0bGVfdmFsdWVcIiwgMzM6IFwiYWNjX2Rlc2NyXCIsIDM0OiBcImFjY19kZXNjcl92YWx1ZVwiLCAzNTogXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCIsIDM2OiBcInNlY3Rpb25cIiwgMzg6IFwidGFza1R4dFwiLCAzOTogXCJ0YXNrRGF0YVwiLCA0MDogXCJjbGlja1wiLCA0MTogXCJjYWxsYmFja25hbWVcIiwgNDI6IFwiY2FsbGJhY2thcmdzXCIsIDQzOiBcImhyZWZcIiB9LFxuICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCAzXSwgWzUsIDBdLCBbNSwgMl0sIFs3LCAyXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzExLCAxXSwgWzExLCAxXSwgWzExLCAxXSwgWzExLCAxXSwgWzExLCAxXSwgWzExLCAxXSwgWzExLCAxXSwgWzE5LCAxXSwgWzE5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAyXSwgWzksIDJdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMl0sIFszNywgMl0sIFszNywgM10sIFszNywgM10sIFszNywgNF0sIFszNywgM10sIFszNywgNF0sIFszNywgMl0sIFs0NCwgMl0sIFs0NCwgM10sIFs0NCwgM10sIFs0NCwgNF0sIFs0NCwgM10sIFs0NCwgNF0sIFs0NCwgMl1dLFxuICAgIHBlcmZvcm1BY3Rpb246IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHUsIGYsIGIsIHgsIEYsIG8sIFgpIHtcbiAgICAgIHZhciBzID0gby5sZW5ndGggLSAxO1xuICAgICAgc3dpdGNoIChGKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gb1tzIC0gMV07XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLiQgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG9bcyAtIDFdLnB1c2gob1tzXSksIHRoaXMuJCA9IG9bcyAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLiQgPSBvW3NdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLiQgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIHguc2V0V2Vla2RheShcIm1vbmRheVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIHguc2V0V2Vla2RheShcInR1ZXNkYXlcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgeC5zZXRXZWVrZGF5KFwid2VkbmVzZGF5XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIHguc2V0V2Vla2RheShcInRodXJzZGF5XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIHguc2V0V2Vla2RheShcImZyaWRheVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICB4LnNldFdlZWtkYXkoXCJzYXR1cmRheVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICB4LnNldFdlZWtkYXkoXCJzdW5kYXlcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgeC5zZXRXZWVrZW5kKFwiZnJpZGF5XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIHguc2V0V2Vla2VuZChcInNhdHVyZGF5XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIHguc2V0RGF0ZUZvcm1hdChvW3NdLnN1YnN0cigxMSkpLCB0aGlzLiQgPSBvW3NdLnN1YnN0cigxMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgeC5lbmFibGVJbmNsdXNpdmVFbmREYXRlcygpLCB0aGlzLiQgPSBvW3NdLnN1YnN0cigxOCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgeC5Ub3BBeGlzKCksIHRoaXMuJCA9IG9bc10uc3Vic3RyKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgIHguc2V0QXhpc0Zvcm1hdChvW3NdLnN1YnN0cigxMSkpLCB0aGlzLiQgPSBvW3NdLnN1YnN0cigxMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgeC5zZXRUaWNrSW50ZXJ2YWwob1tzXS5zdWJzdHIoMTMpKSwgdGhpcy4kID0gb1tzXS5zdWJzdHIoMTMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIHguc2V0RXhjbHVkZXMob1tzXS5zdWJzdHIoOSkpLCB0aGlzLiQgPSBvW3NdLnN1YnN0cig5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICB4LnNldEluY2x1ZGVzKG9bc10uc3Vic3RyKDkpKSwgdGhpcy4kID0gb1tzXS5zdWJzdHIoOSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgeC5zZXRUb2RheU1hcmtlcihvW3NdLnN1YnN0cigxMikpLCB0aGlzLiQgPSBvW3NdLnN1YnN0cigxMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgeC5zZXREaWFncmFtVGl0bGUob1tzXS5zdWJzdHIoNikpLCB0aGlzLiQgPSBvW3NdLnN1YnN0cig2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICB0aGlzLiQgPSBvW3NdLnRyaW0oKSwgeC5zZXRBY2NUaXRsZSh0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI5OlxuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgIHRoaXMuJCA9IG9bc10udHJpbSgpLCB4LnNldEFjY0Rlc2NyaXB0aW9uKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgeC5hZGRTZWN0aW9uKG9bc10uc3Vic3RyKDgpKSwgdGhpcy4kID0gb1tzXS5zdWJzdHIoOCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgeC5hZGRUYXNrKG9bcyAtIDFdLCBvW3NdKSwgdGhpcy4kID0gXCJ0YXNrXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgdGhpcy4kID0gb1tzIC0gMV0sIHguc2V0Q2xpY2tFdmVudChvW3MgLSAxXSwgb1tzXSwgbnVsbCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgdGhpcy4kID0gb1tzIC0gMl0sIHguc2V0Q2xpY2tFdmVudChvW3MgLSAyXSwgb1tzIC0gMV0sIG9bc10pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgIHRoaXMuJCA9IG9bcyAtIDJdLCB4LnNldENsaWNrRXZlbnQob1tzIC0gMl0sIG9bcyAtIDFdLCBudWxsKSwgeC5zZXRMaW5rKG9bcyAtIDJdLCBvW3NdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICB0aGlzLiQgPSBvW3MgLSAzXSwgeC5zZXRDbGlja0V2ZW50KG9bcyAtIDNdLCBvW3MgLSAyXSwgb1tzIC0gMV0pLCB4LnNldExpbmsob1tzIC0gM10sIG9bc10pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgIHRoaXMuJCA9IG9bcyAtIDJdLCB4LnNldENsaWNrRXZlbnQob1tzIC0gMl0sIG9bc10sIG51bGwpLCB4LnNldExpbmsob1tzIC0gMl0sIG9bcyAtIDFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICB0aGlzLiQgPSBvW3MgLSAzXSwgeC5zZXRDbGlja0V2ZW50KG9bcyAtIDNdLCBvW3MgLSAxXSwgb1tzXSksIHguc2V0TGluayhvW3MgLSAzXSwgb1tzIC0gMl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIHRoaXMuJCA9IG9bcyAtIDFdLCB4LnNldExpbmsob1tzIC0gMV0sIG9bc10pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQxOlxuICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgIHRoaXMuJCA9IG9bcyAtIDFdICsgXCIgXCIgKyBvW3NdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQyOlxuICAgICAgICBjYXNlIDQzOlxuICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgIHRoaXMuJCA9IG9bcyAtIDJdICsgXCIgXCIgKyBvW3MgLSAxXSArIFwiIFwiICsgb1tzXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICB0aGlzLiQgPSBvW3MgLSAzXSArIFwiIFwiICsgb1tzIC0gMl0gKyBcIiBcIiArIG9bcyAtIDFdICsgXCIgXCIgKyBvW3NdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIFwiYW5vbnltb3VzXCIpLFxuICAgIHRhYmxlOiBbeyAzOiAxLCA0OiBbMSwgMl0gfSwgeyAxOiBbM10gfSwgdChlLCBbMiwgMl0sIHsgNTogMyB9KSwgeyA2OiBbMSwgNF0sIDc6IDUsIDg6IFsxLCA2XSwgOTogNywgMTA6IFsxLCA4XSwgMTE6IDE3LCAxMjogbiwgMTM6IHIsIDE0OiBpLCAxNTogYSwgMTY6IGMsIDE3OiBtLCAxODogWSwgMTk6IDE4LCAyMDogQywgMjE6IGssIDIyOiBMLCAyMzogXywgMjQ6IFMsIDI1OiBaLCAyNjogQSwgMjc6IFUsIDI4OiBJLCAyOTogTiwgMzA6IFcsIDMxOiBxLCAzMzogaiwgMzU6IHAsIDM2OiBnLCAzNzogMjQsIDM4OiB5LCA0MDogaCB9LCB0KGUsIFsyLCA3XSwgeyAxOiBbMiwgMV0gfSksIHQoZSwgWzIsIDNdKSwgeyA5OiAzNiwgMTE6IDE3LCAxMjogbiwgMTM6IHIsIDE0OiBpLCAxNTogYSwgMTY6IGMsIDE3OiBtLCAxODogWSwgMTk6IDE4LCAyMDogQywgMjE6IGssIDIyOiBMLCAyMzogXywgMjQ6IFMsIDI1OiBaLCAyNjogQSwgMjc6IFUsIDI4OiBJLCAyOTogTiwgMzA6IFcsIDMxOiBxLCAzMzogaiwgMzU6IHAsIDM2OiBnLCAzNzogMjQsIDM4OiB5LCA0MDogaCB9LCB0KGUsIFsyLCA1XSksIHQoZSwgWzIsIDZdKSwgdChlLCBbMiwgMTddKSwgdChlLCBbMiwgMThdKSwgdChlLCBbMiwgMTldKSwgdChlLCBbMiwgMjBdKSwgdChlLCBbMiwgMjFdKSwgdChlLCBbMiwgMjJdKSwgdChlLCBbMiwgMjNdKSwgdChlLCBbMiwgMjRdKSwgdChlLCBbMiwgMjVdKSwgdChlLCBbMiwgMjZdKSwgdChlLCBbMiwgMjddKSwgeyAzMjogWzEsIDM3XSB9LCB7IDM0OiBbMSwgMzhdIH0sIHQoZSwgWzIsIDMwXSksIHQoZSwgWzIsIDMxXSksIHQoZSwgWzIsIDMyXSksIHsgMzk6IFsxLCAzOV0gfSwgdChlLCBbMiwgOF0pLCB0KGUsIFsyLCA5XSksIHQoZSwgWzIsIDEwXSksIHQoZSwgWzIsIDExXSksIHQoZSwgWzIsIDEyXSksIHQoZSwgWzIsIDEzXSksIHQoZSwgWzIsIDE0XSksIHQoZSwgWzIsIDE1XSksIHQoZSwgWzIsIDE2XSksIHsgNDE6IFsxLCA0MF0sIDQzOiBbMSwgNDFdIH0sIHQoZSwgWzIsIDRdKSwgdChlLCBbMiwgMjhdKSwgdChlLCBbMiwgMjldKSwgdChlLCBbMiwgMzNdKSwgdChlLCBbMiwgMzRdLCB7IDQyOiBbMSwgNDJdLCA0MzogWzEsIDQzXSB9KSwgdChlLCBbMiwgNDBdLCB7IDQxOiBbMSwgNDRdIH0pLCB0KGUsIFsyLCAzNV0sIHsgNDM6IFsxLCA0NV0gfSksIHQoZSwgWzIsIDM2XSksIHQoZSwgWzIsIDM4XSwgeyA0MjogWzEsIDQ2XSB9KSwgdChlLCBbMiwgMzddKSwgdChlLCBbMiwgMzldKV0sXG4gICAgZGVmYXVsdEFjdGlvbnM6IHt9LFxuICAgIHBhcnNlRXJyb3I6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHUsIGYpIHtcbiAgICAgIGlmIChmLnJlY292ZXJhYmxlKVxuICAgICAgICB0aGlzLnRyYWNlKHUpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBiID0gbmV3IEVycm9yKHUpO1xuICAgICAgICB0aHJvdyBiLmhhc2ggPSBmLCBiO1xuICAgICAgfVxuICAgIH0sIFwicGFyc2VFcnJvclwiKSxcbiAgICBwYXJzZTogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odSkge1xuICAgICAgdmFyIGYgPSB0aGlzLCBiID0gWzBdLCB4ID0gW10sIEYgPSBbbnVsbF0sIG8gPSBbXSwgWCA9IHRoaXMudGFibGUsIHMgPSBcIlwiLCBFID0gMCwgUiA9IDAsIHogPSAyLCBQID0gMSwgSyA9IG8uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBPID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKSwgc3QgPSB7IHl5OiB7fSB9O1xuICAgICAgZm9yICh2YXIgTSBpbiB0aGlzLnl5KVxuICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy55eSwgTSkgJiYgKHN0Lnl5W01dID0gdGhpcy55eVtNXSk7XG4gICAgICBPLnNldElucHV0KHUsIHN0Lnl5KSwgc3QueXkubGV4ZXIgPSBPLCBzdC55eS5wYXJzZXIgPSB0aGlzLCB0eXBlb2YgTy55eWxsb2MgPiBcInVcIiAmJiAoTy55eWxsb2MgPSB7fSk7XG4gICAgICB2YXIgSCA9IE8ueXlsbG9jO1xuICAgICAgby5wdXNoKEgpO1xuICAgICAgdmFyIFYgPSBPLm9wdGlvbnMgJiYgTy5vcHRpb25zLnJhbmdlcztcbiAgICAgIHR5cGVvZiBzdC55eS5wYXJzZUVycm9yID09IFwiZnVuY3Rpb25cIiA/IHRoaXMucGFyc2VFcnJvciA9IHN0Lnl5LnBhcnNlRXJyb3IgOiB0aGlzLnBhcnNlRXJyb3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2VFcnJvcjtcbiAgICAgIGZ1bmN0aW9uIGwob3QpIHtcbiAgICAgICAgYi5sZW5ndGggPSBiLmxlbmd0aCAtIDIgKiBvdCwgRi5sZW5ndGggPSBGLmxlbmd0aCAtIG90LCBvLmxlbmd0aCA9IG8ubGVuZ3RoIC0gb3Q7XG4gICAgICB9XG4gICAgICBkKGwsIFwicG9wU3RhY2tcIik7XG4gICAgICBmdW5jdGlvbiBKKCkge1xuICAgICAgICB2YXIgb3Q7XG4gICAgICAgIHJldHVybiBvdCA9IHgucG9wKCkgfHwgTy5sZXgoKSB8fCBQLCB0eXBlb2Ygb3QgIT0gXCJudW1iZXJcIiAmJiAob3QgaW5zdGFuY2VvZiBBcnJheSAmJiAoeCA9IG90LCBvdCA9IHgucG9wKCkpLCBvdCA9IGYuc3ltYm9sc19bb3RdIHx8IG90KSwgb3Q7XG4gICAgICB9XG4gICAgICBkKEosIFwibGV4XCIpO1xuICAgICAgZm9yICh2YXIgJCwgUSwgRywgaXQsIGF0ID0ge30sIHB0LCB1dCwgT2UsIHF0OyA7ICkge1xuICAgICAgICBpZiAoUSA9IGJbYi5sZW5ndGggLSAxXSwgdGhpcy5kZWZhdWx0QWN0aW9uc1tRXSA/IEcgPSB0aGlzLmRlZmF1bHRBY3Rpb25zW1FdIDogKCgkID09PSBudWxsIHx8IHR5cGVvZiAkID4gXCJ1XCIpICYmICgkID0gSigpKSwgRyA9IFhbUV0gJiYgWFtRXVskXSksIHR5cGVvZiBHID4gXCJ1XCIgfHwgIUcubGVuZ3RoIHx8ICFHWzBdKSB7XG4gICAgICAgICAgdmFyIG9lID0gXCJcIjtcbiAgICAgICAgICBxdCA9IFtdO1xuICAgICAgICAgIGZvciAocHQgaW4gWFtRXSlcbiAgICAgICAgICAgIHRoaXMudGVybWluYWxzX1twdF0gJiYgcHQgPiB6ICYmIHF0LnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcHRdICsgXCInXCIpO1xuICAgICAgICAgIE8uc2hvd1Bvc2l0aW9uID8gb2UgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoRSArIDEpICsgYDpcbmAgKyBPLnNob3dQb3NpdGlvbigpICsgYFxuRXhwZWN0aW5nIGAgKyBxdC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bJF0gfHwgJCkgKyBcIidcIiA6IG9lID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKEUgKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKCQgPT0gUCA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bJF0gfHwgJCkgKyBcIidcIiksIHRoaXMucGFyc2VFcnJvcihvZSwge1xuICAgICAgICAgICAgdGV4dDogTy5tYXRjaCxcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bJF0gfHwgJCxcbiAgICAgICAgICAgIGxpbmU6IE8ueXlsaW5lbm8sXG4gICAgICAgICAgICBsb2M6IEgsXG4gICAgICAgICAgICBleHBlY3RlZDogcXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoR1swXSBpbnN0YW5jZW9mIEFycmF5ICYmIEcubGVuZ3RoID4gMSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBRICsgXCIsIHRva2VuOiBcIiArICQpO1xuICAgICAgICBzd2l0Y2ggKEdbMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBiLnB1c2goJCksIEYucHVzaChPLnl5dGV4dCksIG8ucHVzaChPLnl5bGxvYyksIGIucHVzaChHWzFdKSwgJCA9IG51bGwsIFIgPSBPLnl5bGVuZywgcyA9IE8ueXl0ZXh0LCBFID0gTy55eWxpbmVubywgSCA9IE8ueXlsbG9jO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKHV0ID0gdGhpcy5wcm9kdWN0aW9uc19bR1sxXV1bMV0sIGF0LiQgPSBGW0YubGVuZ3RoIC0gdXRdLCBhdC5fJCA9IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogb1tvLmxlbmd0aCAtICh1dCB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBvW28ubGVuZ3RoIC0gMV0ubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IG9bby5sZW5ndGggLSAodXQgfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IG9bby5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfSwgViAmJiAoYXQuXyQucmFuZ2UgPSBbXG4gICAgICAgICAgICAgIG9bby5sZW5ndGggLSAodXQgfHwgMSldLnJhbmdlWzBdLFxuICAgICAgICAgICAgICBvW28ubGVuZ3RoIC0gMV0ucmFuZ2VbMV1cbiAgICAgICAgICAgIF0pLCBpdCA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseShhdCwgW1xuICAgICAgICAgICAgICBzLFxuICAgICAgICAgICAgICBSLFxuICAgICAgICAgICAgICBFLFxuICAgICAgICAgICAgICBzdC55eSxcbiAgICAgICAgICAgICAgR1sxXSxcbiAgICAgICAgICAgICAgRixcbiAgICAgICAgICAgICAgb1xuICAgICAgICAgICAgXS5jb25jYXQoSykpLCB0eXBlb2YgaXQgPCBcInVcIilcbiAgICAgICAgICAgICAgcmV0dXJuIGl0O1xuICAgICAgICAgICAgdXQgJiYgKGIgPSBiLnNsaWNlKDAsIC0xICogdXQgKiAyKSwgRiA9IEYuc2xpY2UoMCwgLTEgKiB1dCksIG8gPSBvLnNsaWNlKDAsIC0xICogdXQpKSwgYi5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW0dbMV1dWzBdKSwgRi5wdXNoKGF0LiQpLCBvLnB1c2goYXQuXyQpLCBPZSA9IFhbYltiLmxlbmd0aCAtIDJdXVtiW2IubGVuZ3RoIC0gMV1dLCBiLnB1c2goT2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gITA7XG4gICAgfSwgXCJwYXJzZVwiKVxuICB9LCB3ID0gLyogQF9fUFVSRV9fICovIChmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKGYsIGIpIHtcbiAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKVxuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3IoZiwgYik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZik7XG4gICAgICB9LCBcInBhcnNlRXJyb3JcIiksXG4gICAgICAvLyByZXNldHMgdGhlIGxleGVyLCBzZXRzIG5ldyBpbnB1dFxuICAgICAgc2V0SW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHUsIGYpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueXkgPSBmIHx8IHRoaXMueXkgfHwge30sIHRoaXMuX2lucHV0ID0gdSwgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9ICExLCB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwLCB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiLCB0aGlzLmNvbmRpdGlvblN0YWNrID0gW1wiSU5JVElBTFwiXSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gWzAsIDBdKSwgdGhpcy5vZmZzZXQgPSAwLCB0aGlzO1xuICAgICAgfSwgXCJzZXRJbnB1dFwiKSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1ID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IHUsIHRoaXMueXlsZW5nKyssIHRoaXMub2Zmc2V0KyssIHRoaXMubWF0Y2ggKz0gdSwgdGhpcy5tYXRjaGVkICs9IHU7XG4gICAgICAgIHZhciBmID0gdS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIHJldHVybiBmID8gKHRoaXMueXlsaW5lbm8rKywgdGhpcy55eWxsb2MubGFzdF9saW5lKyspIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKywgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpLCB1O1xuICAgICAgfSwgXCJpbnB1dFwiKSxcbiAgICAgIC8vIHVuc2hpZnRzIG9uZSBjaGFyIChvciBhIHN0cmluZykgaW50byB0aGUgaW5wdXRcbiAgICAgIHVucHV0OiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih1KSB7XG4gICAgICAgIHZhciBmID0gdS5sZW5ndGgsIGIgPSB1LnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdSArIHRoaXMuX2lucHV0LCB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBmKSwgdGhpcy5vZmZzZXQgLT0gZjtcbiAgICAgICAgdmFyIHggPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpLCB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKSwgYi5sZW5ndGggLSAxICYmICh0aGlzLnl5bGluZW5vIC09IGIubGVuZ3RoIC0gMSk7XG4gICAgICAgIHZhciBGID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgIHJldHVybiB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGIgPyAoYi5sZW5ndGggPT09IHgubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyB4W3gubGVuZ3RoIC0gYi5sZW5ndGhdLmxlbmd0aCAtIGJbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gZlxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFtGWzBdLCBGWzBdICsgdGhpcy55eWxlbmcgLSBmXSksIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzO1xuICAgICAgfSwgXCJ1bnB1dFwiKSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBjYWNoZXMgbWF0Y2hlZCB0ZXh0IGFuZCBhcHBlbmRzIGl0IG9uIG5leHQgYWN0aW9uXG4gICAgICBtb3JlOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vcmUgPSAhMCwgdGhpcztcbiAgICAgIH0sIFwibW9yZVwiKSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBzaWduYWxzIHRoZSBsZXhlciB0aGF0IHRoaXMgcnVsZSBmYWlscyB0byBtYXRjaCB0aGUgaW5wdXQsIHNvIHRoZSBuZXh0IG1hdGNoaW5nIHJ1bGUgKHJlZ2V4KSBzaG91bGQgYmUgdGVzdGVkIGluc3RlYWQuXG4gICAgICByZWplY3Q6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcilcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSAhMDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgYC4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxuYCArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LCBcInJlamVjdFwiKSxcbiAgICAgIC8vIHJldGFpbiBmaXJzdCBuIGNoYXJhY3RlcnMgb2YgdGhlIG1hdGNoXG4gICAgICBsZXNzOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih1KSB7XG4gICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZSh1KSk7XG4gICAgICB9LCBcImxlc3NcIiksXG4gICAgICAvLyBkaXNwbGF5cyBhbHJlYWR5IG1hdGNoZWQgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBwYXN0SW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdSA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuICh1Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgdS5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LCBcInBhc3RJbnB1dFwiKSxcbiAgICAgIC8vIGRpc3BsYXlzIHVwY29taW5nIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgdXBjb21pbmdJbnB1dDogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1ID0gdGhpcy5tYXRjaDtcbiAgICAgICAgcmV0dXJuIHUubGVuZ3RoIDwgMjAgJiYgKHUgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gdS5sZW5ndGgpKSwgKHUuc3Vic3RyKDAsIDIwKSArICh1Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LCBcInVwY29taW5nSW5wdXRcIiksXG4gICAgICAvLyBkaXNwbGF5cyB0aGUgY2hhcmFjdGVyIHBvc2l0aW9uIHdoZXJlIHRoZSBsZXhpbmcgZXJyb3Igb2NjdXJyZWQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBzaG93UG9zaXRpb246IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdSA9IHRoaXMucGFzdElucHV0KCksIGYgPSBuZXcgQXJyYXkodS5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIHUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIGBcbmAgKyBmICsgXCJeXCI7XG4gICAgICB9LCBcInNob3dQb3NpdGlvblwiKSxcbiAgICAgIC8vIHRlc3QgdGhlIGxleGVkIHRva2VuOiByZXR1cm4gRkFMU0Ugd2hlbiBub3QgYSBtYXRjaCwgb3RoZXJ3aXNlIHJldHVybiB0b2tlblxuICAgICAgdGVzdF9tYXRjaDogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odSwgZikge1xuICAgICAgICB2YXIgYiwgeCwgRjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgJiYgKEYgPSB7XG4gICAgICAgICAgeXlsaW5lbm86IHRoaXMueXlsaW5lbm8sXG4gICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLmxhc3RfbGluZSxcbiAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgIG1hdGNoZXM6IHRoaXMubWF0Y2hlcyxcbiAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgeXk6IHRoaXMueXksXG4gICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKEYueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCkpKSwgeCA9IHVbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpLCB4ICYmICh0aGlzLnl5bGluZW5vICs9IHgubGVuZ3RoKSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogeCA/IHhbeC5sZW5ndGggLSAxXS5sZW5ndGggLSB4W3gubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyB1WzBdLmxlbmd0aFxuICAgICAgICB9LCB0aGlzLnl5dGV4dCArPSB1WzBdLCB0aGlzLm1hdGNoICs9IHVbMF0sIHRoaXMubWF0Y2hlcyA9IHUsIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFt0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmddKSwgdGhpcy5fbW9yZSA9ICExLCB0aGlzLl9iYWNrdHJhY2sgPSAhMSwgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSh1WzBdLmxlbmd0aCksIHRoaXMubWF0Y2hlZCArPSB1WzBdLCBiID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgZiwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSwgdGhpcy5kb25lICYmIHRoaXMuX2lucHV0ICYmICh0aGlzLmRvbmUgPSAhMSksIGIpXG4gICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICBmb3IgKHZhciBvIGluIEYpXG4gICAgICAgICAgICB0aGlzW29dID0gRltvXTtcbiAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgICAgfSwgXCJ0ZXN0X21hdGNoXCIpLFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggaW4gaW5wdXRcbiAgICAgIG5leHQ6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKVxuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgdGhpcy5faW5wdXQgfHwgKHRoaXMuZG9uZSA9ICEwKTtcbiAgICAgICAgdmFyIHUsIGYsIGIsIHg7XG4gICAgICAgIHRoaXMuX21vcmUgfHwgKHRoaXMueXl0ZXh0ID0gXCJcIiwgdGhpcy5tYXRjaCA9IFwiXCIpO1xuICAgICAgICBmb3IgKHZhciBGID0gdGhpcy5fY3VycmVudFJ1bGVzKCksIG8gPSAwOyBvIDwgRi5sZW5ndGg7IG8rKylcbiAgICAgICAgICBpZiAoYiA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbRltvXV0pLCBiICYmICghZiB8fCBiWzBdLmxlbmd0aCA+IGZbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgaWYgKGYgPSBiLCB4ID0gbywgdGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgICAgICBpZiAodSA9IHRoaXMudGVzdF9tYXRjaChiLCBGW29dKSwgdSAhPT0gITEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICBmID0gITE7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBmID8gKHUgPSB0aGlzLnRlc3RfbWF0Y2goZiwgRlt4XSksIHUgIT09ICExID8gdSA6ICExKSA6IHRoaXMuX2lucHV0ID09PSBcIlwiID8gdGhpcy5FT0YgOiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgYC4gVW5yZWNvZ25pemVkIHRleHQuXG5gICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICB9KTtcbiAgICAgIH0sIFwibmV4dFwiKSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIHRoYXQgaGFzIGEgdG9rZW5cbiAgICAgIGxleDogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIHJldHVybiBmIHx8IHRoaXMubGV4KCk7XG4gICAgICB9LCBcImxleFwiKSxcbiAgICAgIC8vIGFjdGl2YXRlcyBhIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgKHB1c2hlcyB0aGUgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvbnRvIHRoZSBjb25kaXRpb24gc3RhY2spXG4gICAgICBiZWdpbjogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oZikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goZik7XG4gICAgICB9LCBcImJlZ2luXCIpLFxuICAgICAgLy8gcG9wIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGUgb2ZmIHRoZSBjb25kaXRpb24gc3RhY2tcbiAgICAgIHBvcFN0YXRlOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGYgPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiBmID4gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCkgOiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgfSwgXCJwb3BTdGF0ZVwiKSxcbiAgICAgIC8vIHByb2R1Y2UgdGhlIGxleGVyIHJ1bGUgc2V0IHdoaWNoIGlzIGFjdGl2ZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlXG4gICAgICBfY3VycmVudFJ1bGVzOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSA/IHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzIDogdGhpcy5jb25kaXRpb25zLklOSVRJQUwucnVsZXM7XG4gICAgICB9LCBcIl9jdXJyZW50UnVsZXNcIiksXG4gICAgICAvLyByZXR1cm4gdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlOyB3aGVuIGFuIGluZGV4IGFyZ3VtZW50IGlzIHByb3ZpZGVkIGl0IHByb2R1Y2VzIHRoZSBOLXRoIHByZXZpb3VzIGNvbmRpdGlvbiBzdGF0ZSwgaWYgYXZhaWxhYmxlXG4gICAgICB0b3BTdGF0ZTogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMSAtIE1hdGguYWJzKGYgfHwgMCksIGYgPj0gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2tbZl0gOiBcIklOSVRJQUxcIjtcbiAgICAgIH0sIFwidG9wU3RhdGVcIiksXG4gICAgICAvLyBhbGlhcyBmb3IgYmVnaW4oY29uZGl0aW9uKVxuICAgICAgcHVzaFN0YXRlOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbihmKSB7XG4gICAgICAgIHRoaXMuYmVnaW4oZik7XG4gICAgICB9LCBcInB1c2hTdGF0ZVwiKSxcbiAgICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIHN0YXRlcyBjdXJyZW50bHkgb24gdGhlIHN0YWNrXG4gICAgICBzdGF0ZVN0YWNrU2l6ZTogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aDtcbiAgICAgIH0sIFwic3RhdGVTdGFja1NpemVcIiksXG4gICAgICBvcHRpb25zOiB7IFwiY2FzZS1pbnNlbnNpdGl2ZVwiOiAhMCB9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oZiwgYiwgeCwgRikge1xuICAgICAgICBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcIm9wZW5fZGlyZWN0aXZlXCIpLCBcIm9wZW5fZGlyZWN0aXZlXCI7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVnaW4oXCJhY2NfdGl0bGVcIiksIDMxO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIFwiYWNjX3RpdGxlX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVnaW4oXCJhY2NfZGVzY3JcIiksIDMzO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIFwiYWNjX2Rlc2NyX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjcl9tdWx0aWxpbmVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICByZXR1cm4gMTA7XG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImhyZWZcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHJldHVybiA0MztcbiAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImNhbGxiYWNrbmFtZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpLCB0aGlzLmJlZ2luKFwiY2FsbGJhY2thcmdzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIHJldHVybiA0MTtcbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImNsaWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICByZXR1cm4gNDA7XG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICByZXR1cm4gMjI7XG4gICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgIHJldHVybiAyMztcbiAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgcmV0dXJuIDI0O1xuICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICByZXR1cm4gMjU7XG4gICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgIHJldHVybiAyNjtcbiAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgcmV0dXJuIDI4O1xuICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICByZXR1cm4gMjc7XG4gICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIHJldHVybiAyOTtcbiAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgcmV0dXJuIDEyO1xuICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICByZXR1cm4gMTM7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIHJldHVybiAxNDtcbiAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICByZXR1cm4gMTY7XG4gICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgIHJldHVybiAxNztcbiAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgcmV0dXJuIDE4O1xuICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICByZXR1cm4gMjA7XG4gICAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICAgIHJldHVybiAyMTtcbiAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgcmV0dXJuIFwiZGF0ZVwiO1xuICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgIHJldHVybiBcImFjY0Rlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgIHJldHVybiAzNjtcbiAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgcmV0dXJuIDM4O1xuICAgICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgICByZXR1cm4gMzk7XG4gICAgICAgICAgY2FzZSA1MDpcbiAgICAgICAgICAgIHJldHVybiBcIjpcIjtcbiAgICAgICAgICBjYXNlIDUxOlxuICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgY2FzZSA1MjpcbiAgICAgICAgICAgIHJldHVybiBcIklOVkFMSURcIjtcbiAgICAgICAgfVxuICAgICAgfSwgXCJhbm9ueW1vdXNcIiksXG4gICAgICBydWxlczogWy9eKD86JSVcXHspL2ksIC9eKD86YWNjVGl0bGVcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqXFx7XFxzKikvaSwgL14oPzpbXFx9XSkvaSwgL14oPzpbXlxcfV0qKS9pLCAvXig/OiUlKD8hXFx7KSpbXlxcbl0qKS9pLCAvXig/OlteXFx9XSUlKlteXFxuXSopL2ksIC9eKD86JSUqW15cXG5dKltcXG5dKikvaSwgL14oPzpbXFxuXSspL2ksIC9eKD86XFxzKykvaSwgL14oPzolW15cXG5dKikvaSwgL14oPzpocmVmW1xcc10rW1wiXSkvaSwgL14oPzpbXCJdKS9pLCAvXig/OlteXCJdKikvaSwgL14oPzpjYWxsW1xcc10rKS9pLCAvXig/OlxcKFtcXHNdKlxcKSkvaSwgL14oPzpcXCgpL2ksIC9eKD86W14oXSopL2ksIC9eKD86XFwpKS9pLCAvXig/OlteKV0qKS9pLCAvXig/OmNsaWNrW1xcc10rKS9pLCAvXig/OltcXHNcXG5dKS9pLCAvXig/OlteXFxzXFxuXSopL2ksIC9eKD86Z2FudHRcXGIpL2ksIC9eKD86ZGF0ZUZvcm1hdFxcc1teI1xcbjtdKykvaSwgL14oPzppbmNsdXNpdmVFbmREYXRlc1xcYikvaSwgL14oPzp0b3BBeGlzXFxiKS9pLCAvXig/OmF4aXNGb3JtYXRcXHNbXiNcXG47XSspL2ksIC9eKD86dGlja0ludGVydmFsXFxzW14jXFxuO10rKS9pLCAvXig/OmluY2x1ZGVzXFxzW14jXFxuO10rKS9pLCAvXig/OmV4Y2x1ZGVzXFxzW14jXFxuO10rKS9pLCAvXig/OnRvZGF5TWFya2VyXFxzW15cXG47XSspL2ksIC9eKD86d2Vla2RheVxccyttb25kYXlcXGIpL2ksIC9eKD86d2Vla2RheVxccyt0dWVzZGF5XFxiKS9pLCAvXig/OndlZWtkYXlcXHMrd2VkbmVzZGF5XFxiKS9pLCAvXig/OndlZWtkYXlcXHMrdGh1cnNkYXlcXGIpL2ksIC9eKD86d2Vla2RheVxccytmcmlkYXlcXGIpL2ksIC9eKD86d2Vla2RheVxccytzYXR1cmRheVxcYikvaSwgL14oPzp3ZWVrZGF5XFxzK3N1bmRheVxcYikvaSwgL14oPzp3ZWVrZW5kXFxzK2ZyaWRheVxcYikvaSwgL14oPzp3ZWVrZW5kXFxzK3NhdHVyZGF5XFxiKS9pLCAvXig/OlxcZFxcZFxcZFxcZC1cXGRcXGQtXFxkXFxkXFxiKS9pLCAvXig/OnRpdGxlXFxzW15cXG5dKykvaSwgL14oPzphY2NEZXNjcmlwdGlvblxcc1teI1xcbjtdKykvaSwgL14oPzpzZWN0aW9uXFxzW15cXG5dKykvaSwgL14oPzpbXjpcXG5dKykvaSwgL14oPzo6W14jXFxuO10rKS9pLCAvXig/OjopL2ksIC9eKD86JCkvaSwgL14oPzouKS9pXSxcbiAgICAgIGNvbmRpdGlvbnM6IHsgYWNjX2Rlc2NyX211bHRpbGluZTogeyBydWxlczogWzYsIDddLCBpbmNsdXNpdmU6ICExIH0sIGFjY19kZXNjcjogeyBydWxlczogWzRdLCBpbmNsdXNpdmU6ICExIH0sIGFjY190aXRsZTogeyBydWxlczogWzJdLCBpbmNsdXNpdmU6ICExIH0sIGNhbGxiYWNrYXJnczogeyBydWxlczogWzIxLCAyMl0sIGluY2x1c2l2ZTogITEgfSwgY2FsbGJhY2tuYW1lOiB7IHJ1bGVzOiBbMTgsIDE5LCAyMF0sIGluY2x1c2l2ZTogITEgfSwgaHJlZjogeyBydWxlczogWzE1LCAxNl0sIGluY2x1c2l2ZTogITEgfSwgY2xpY2s6IHsgcnVsZXM6IFsyNCwgMjVdLCBpbmNsdXNpdmU6ICExIH0sIElOSVRJQUw6IHsgcnVsZXM6IFswLCAxLCAzLCA1LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE3LCAyMywgMjYsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLCA1Ml0sIGluY2x1c2l2ZTogITAgfSB9XG4gICAgfTtcbiAgICByZXR1cm4gdjtcbiAgfSkoKTtcbiAgRC5sZXhlciA9IHc7XG4gIGZ1bmN0aW9uIFQoKSB7XG4gICAgdGhpcy55eSA9IHt9O1xuICB9XG4gIHJldHVybiBkKFQsIFwiUGFyc2VyXCIpLCBULnByb3RvdHlwZSA9IEQsIEQuUGFyc2VyID0gVCwgbmV3IFQoKTtcbn0pKCk7XG54ZS5wYXJzZXIgPSB4ZTtcbnZhciBHaSA9IHhlO1xucnQuZXh0ZW5kKFdpKTtcbnJ0LmV4dGVuZChOaSk7XG5ydC5leHRlbmQoUmkpO1xudmFyIG5uID0geyBmcmlkYXk6IDUsIHNhdHVyZGF5OiA2IH0sIGx0ID0gXCJcIiwgX2UgPSBcIlwiLCBGZSA9IHZvaWQgMCwgWWUgPSBcIlwiLCBWdCA9IFtdLCB6dCA9IFtdLCBVZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIEVlID0gW10sIGllID0gW10sIEl0ID0gXCJcIiwgSWUgPSBcIlwiLCBfbiA9IFtcImFjdGl2ZVwiLCBcImRvbmVcIiwgXCJjcml0XCIsIFwibWlsZXN0b25lXCIsIFwidmVydFwiXSwgTGUgPSBbXSwgUnQgPSAhMSwgQWUgPSAhMSwgV2UgPSBcInN1bmRheVwiLCBzZSA9IFwic2F0dXJkYXlcIiwgd2UgPSAwLCBqaSA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICBFZSA9IFtdLCBpZSA9IFtdLCBJdCA9IFwiXCIsIExlID0gW10sIEt0ID0gMCwgTWUgPSB2b2lkIDAsIHRlID0gdm9pZCAwLCB0dCA9IFtdLCBsdCA9IFwiXCIsIF9lID0gXCJcIiwgSWUgPSBcIlwiLCBGZSA9IHZvaWQgMCwgWWUgPSBcIlwiLCBWdCA9IFtdLCB6dCA9IFtdLCBSdCA9ICExLCBBZSA9ICExLCB3ZSA9IDAsIFVlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgQm4oKSwgV2UgPSBcInN1bmRheVwiLCBzZSA9IFwic2F0dXJkYXlcIjtcbn0sIFwiY2xlYXJcIiksIFFpID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCkge1xuICBfZSA9IHQ7XG59LCBcInNldEF4aXNGb3JtYXRcIiksIEppID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gIHJldHVybiBfZTtcbn0sIFwiZ2V0QXhpc0Zvcm1hdFwiKSwgS2kgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih0KSB7XG4gIEZlID0gdDtcbn0sIFwic2V0VGlja0ludGVydmFsXCIpLCB0cyA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gRmU7XG59LCBcImdldFRpY2tJbnRlcnZhbFwiKSwgZXMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih0KSB7XG4gIFllID0gdDtcbn0sIFwic2V0VG9kYXlNYXJrZXJcIiksIG5zID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gIHJldHVybiBZZTtcbn0sIFwiZ2V0VG9kYXlNYXJrZXJcIiksIHJzID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCkge1xuICBsdCA9IHQ7XG59LCBcInNldERhdGVGb3JtYXRcIiksIGlzID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gIFJ0ID0gITA7XG59LCBcImVuYWJsZUluY2x1c2l2ZUVuZERhdGVzXCIpLCBzcyA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gUnQ7XG59LCBcImVuZERhdGVzQXJlSW5jbHVzaXZlXCIpLCBhcyA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICBBZSA9ICEwO1xufSwgXCJlbmFibGVUb3BBeGlzXCIpLCBvcyA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gQWU7XG59LCBcInRvcEF4aXNFbmFibGVkXCIpLCBjcyA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHQpIHtcbiAgSWUgPSB0O1xufSwgXCJzZXREaXNwbGF5TW9kZVwiKSwgdXMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEllO1xufSwgXCJnZXREaXNwbGF5TW9kZVwiKSwgbHMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGx0O1xufSwgXCJnZXREYXRlRm9ybWF0XCIpLCBmcyA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHQpIHtcbiAgVnQgPSB0LnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHMsXSsvKTtcbn0sIFwic2V0SW5jbHVkZXNcIiksIGRzID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gIHJldHVybiBWdDtcbn0sIFwiZ2V0SW5jbHVkZXNcIiksIGhzID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCkge1xuICB6dCA9IHQudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xccyxdKy8pO1xufSwgXCJzZXRFeGNsdWRlc1wiKSwgbXMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHp0O1xufSwgXCJnZXRFeGNsdWRlc1wiKSwgZ3MgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFVlO1xufSwgXCJnZXRMaW5rc1wiKSwgeXMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih0KSB7XG4gIEl0ID0gdCwgRWUucHVzaCh0KTtcbn0sIFwiYWRkU2VjdGlvblwiKSwga3MgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEVlO1xufSwgXCJnZXRTZWN0aW9uc1wiKSwgcHMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgbGV0IHQgPSBybigpO1xuICBjb25zdCBlID0gMTA7XG4gIGxldCBuID0gMDtcbiAgZm9yICg7ICF0ICYmIG4gPCBlOyApXG4gICAgdCA9IHJuKCksIG4rKztcbiAgcmV0dXJuIGllID0gdHQsIGllO1xufSwgXCJnZXRUYXNrc1wiKSwgRm4gPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih0LCBlLCBuLCByKSB7XG4gIGNvbnN0IGkgPSB0LmZvcm1hdChlLnRyaW0oKSksIGEgPSB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIHJldHVybiByLmluY2x1ZGVzKGkpIHx8IHIuaW5jbHVkZXMoYSkgPyAhMSA6IG4uaW5jbHVkZXMoXCJ3ZWVrZW5kc1wiKSAmJiAodC5pc29XZWVrZGF5KCkgPT09IG5uW3NlXSB8fCB0Lmlzb1dlZWtkYXkoKSA9PT0gbm5bc2VdICsgMSkgfHwgbi5pbmNsdWRlcyh0LmZvcm1hdChcImRkZGRcIikudG9Mb3dlckNhc2UoKSkgPyAhMCA6IG4uaW5jbHVkZXMoaSkgfHwgbi5pbmNsdWRlcyhhKTtcbn0sIFwiaXNJbnZhbGlkRGF0ZVwiKSwgdnMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih0KSB7XG4gIFdlID0gdDtcbn0sIFwic2V0V2Vla2RheVwiKSwgVHMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFdlO1xufSwgXCJnZXRXZWVrZGF5XCIpLCBicyA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHQpIHtcbiAgc2UgPSB0O1xufSwgXCJzZXRXZWVrZW5kXCIpLCBZbiA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHQsIGUsIG4sIHIpIHtcbiAgaWYgKCFuLmxlbmd0aCB8fCB0Lm1hbnVhbEVuZFRpbWUpXG4gICAgcmV0dXJuO1xuICBsZXQgaTtcbiAgdC5zdGFydFRpbWUgaW5zdGFuY2VvZiBEYXRlID8gaSA9IHJ0KHQuc3RhcnRUaW1lKSA6IGkgPSBydCh0LnN0YXJ0VGltZSwgZSwgITApLCBpID0gaS5hZGQoMSwgXCJkXCIpO1xuICBsZXQgYTtcbiAgdC5lbmRUaW1lIGluc3RhbmNlb2YgRGF0ZSA/IGEgPSBydCh0LmVuZFRpbWUpIDogYSA9IHJ0KHQuZW5kVGltZSwgZSwgITApO1xuICBjb25zdCBbYywgbV0gPSB4cyhcbiAgICBpLFxuICAgIGEsXG4gICAgZSxcbiAgICBuLFxuICAgIHJcbiAgKTtcbiAgdC5lbmRUaW1lID0gYy50b0RhdGUoKSwgdC5yZW5kZXJFbmRUaW1lID0gbTtcbn0sIFwiY2hlY2tUYXNrRGF0ZXNcIiksIHhzID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCwgZSwgbiwgciwgaSkge1xuICBsZXQgYSA9ICExLCBjID0gbnVsbDtcbiAgZm9yICg7IHQgPD0gZTsgKVxuICAgIGEgfHwgKGMgPSBlLnRvRGF0ZSgpKSwgYSA9IEZuKHQsIG4sIHIsIGkpLCBhICYmIChlID0gZS5hZGQoMSwgXCJkXCIpKSwgdCA9IHQuYWRkKDEsIFwiZFwiKTtcbiAgcmV0dXJuIFtlLCBjXTtcbn0sIFwiZml4VGFza0RhdGVzXCIpLCBEZSA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgaWYgKG4gPSBuLnRyaW0oKSwgKC8qIEBfX1BVUkVfXyAqLyBkKChtKSA9PiB7XG4gICAgY29uc3QgWSA9IG0udHJpbSgpO1xuICAgIHJldHVybiBZID09PSBcInhcIiB8fCBZID09PSBcIlhcIjtcbiAgfSwgXCJpc1RpbWVzdGFtcEZvcm1hdFwiKSkoZSkgJiYgL15cXGQrJC8udGVzdChuKSlcbiAgICByZXR1cm4gbmV3IERhdGUoTnVtYmVyKG4pKTtcbiAgY29uc3QgYSA9IC9eYWZ0ZXJcXHMrKD88aWRzPltcXGRcXHctIF0rKS8uZXhlYyhuKTtcbiAgaWYgKGEgIT09IG51bGwpIHtcbiAgICBsZXQgbSA9IG51bGw7XG4gICAgZm9yIChjb25zdCBDIG9mIGEuZ3JvdXBzLmlkcy5zcGxpdChcIiBcIikpIHtcbiAgICAgIGxldCBrID0gQ3QoQyk7XG4gICAgICBrICE9PSB2b2lkIDAgJiYgKCFtIHx8IGsuZW5kVGltZSA+IG0uZW5kVGltZSkgJiYgKG0gPSBrKTtcbiAgICB9XG4gICAgaWYgKG0pXG4gICAgICByZXR1cm4gbS5lbmRUaW1lO1xuICAgIGNvbnN0IFkgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gWS5zZXRIb3VycygwLCAwLCAwLCAwKSwgWTtcbiAgfVxuICBsZXQgYyA9IHJ0KG4sIGUudHJpbSgpLCAhMCk7XG4gIGlmIChjLmlzVmFsaWQoKSlcbiAgICByZXR1cm4gYy50b0RhdGUoKTtcbiAge1xuICAgIFR0LmRlYnVnKFwiSW52YWxpZCBkYXRlOlwiICsgbiksIFR0LmRlYnVnKFwiV2l0aCBkYXRlIGZvcm1hdDpcIiArIGUudHJpbSgpKTtcbiAgICBjb25zdCBtID0gbmV3IERhdGUobik7XG4gICAgaWYgKG0gPT09IHZvaWQgMCB8fCBpc05hTihtLmdldFRpbWUoKSkgfHwgLy8gV2ViS2l0IGJyb3dzZXJzIGNhbiBtaXMtcGFyc2UgaW52YWxpZCBkYXRlcyB0byBiZSByaWRpY3Vsb3VzbHlcbiAgICAvLyBodWdlIG51bWJlcnMsIGUuZy4gbmV3IERhdGUoJzIwMjMwNCcpIGdldHMgcGFyc2VkIGFzIEphbnVhcnkgMSwgMjAyMzA0LlxuICAgIC8vIFRoaXMgY2FuIGNhdXNlIHZpcnR1YWxseSBpbmZpbml0ZSBsb29wcyB3aGlsZSByZW5kZXJpbmcsIHNvIGZvciB0aGVcbiAgICAvLyBwdXJwb3NlcyBvZiBHYW50dCBjaGFydHMgd2UnbGwganVzdCB0cmVhdCBhbnkgZGF0ZSBiZXlvbmQgMTAsMDAwIEFEL0JDIGFzXG4gICAgLy8gaW52YWxpZC5cbiAgICBtLmdldEZ1bGxZZWFyKCkgPCAtMWU0IHx8IG0uZ2V0RnVsbFllYXIoKSA+IDFlNClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZTpcIiArIG4pO1xuICAgIHJldHVybiBtO1xuICB9XG59LCBcImdldFN0YXJ0RGF0ZVwiKSwgVW4gPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih0KSB7XG4gIGNvbnN0IGUgPSAvXihcXGQrKD86XFwuXFxkKyk/KShbTWRobXN3eV18bXMpJC8uZXhlYyh0LnRyaW0oKSk7XG4gIHJldHVybiBlICE9PSBudWxsID8gW051bWJlci5wYXJzZUZsb2F0KGVbMV0pLCBlWzJdXSA6IFtOYU4sIFwibXNcIl07XG59LCBcInBhcnNlRHVyYXRpb25cIiksIEVuID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCwgZSwgbiwgciA9ICExKSB7XG4gIG4gPSBuLnRyaW0oKTtcbiAgY29uc3QgYSA9IC9edW50aWxcXHMrKD88aWRzPltcXGRcXHctIF0rKS8uZXhlYyhuKTtcbiAgaWYgKGEgIT09IG51bGwpIHtcbiAgICBsZXQgayA9IG51bGw7XG4gICAgZm9yIChjb25zdCBfIG9mIGEuZ3JvdXBzLmlkcy5zcGxpdChcIiBcIikpIHtcbiAgICAgIGxldCBTID0gQ3QoXyk7XG4gICAgICBTICE9PSB2b2lkIDAgJiYgKCFrIHx8IFMuc3RhcnRUaW1lIDwgay5zdGFydFRpbWUpICYmIChrID0gUyk7XG4gICAgfVxuICAgIGlmIChrKVxuICAgICAgcmV0dXJuIGsuc3RhcnRUaW1lO1xuICAgIGNvbnN0IEwgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gTC5zZXRIb3VycygwLCAwLCAwLCAwKSwgTDtcbiAgfVxuICBsZXQgYyA9IHJ0KG4sIGUudHJpbSgpLCAhMCk7XG4gIGlmIChjLmlzVmFsaWQoKSlcbiAgICByZXR1cm4gciAmJiAoYyA9IGMuYWRkKDEsIFwiZFwiKSksIGMudG9EYXRlKCk7XG4gIGxldCBtID0gcnQodCk7XG4gIGNvbnN0IFtZLCBDXSA9IFVuKG4pO1xuICBpZiAoIU51bWJlci5pc05hTihZKSkge1xuICAgIGNvbnN0IGsgPSBtLmFkZChZLCBDKTtcbiAgICBrLmlzVmFsaWQoKSAmJiAobSA9IGspO1xuICB9XG4gIHJldHVybiBtLnRvRGF0ZSgpO1xufSwgXCJnZXRFbmREYXRlXCIpLCBLdCA9IDAsIFl0ID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCkge1xuICByZXR1cm4gdCA9PT0gdm9pZCAwID8gKEt0ID0gS3QgKyAxLCBcInRhc2tcIiArIEt0KSA6IHQ7XG59LCBcInBhcnNlSWRcIiksIHdzID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCwgZSkge1xuICBsZXQgbjtcbiAgZS5zdWJzdHIoMCwgMSkgPT09IFwiOlwiID8gbiA9IGUuc3Vic3RyKDEsIGUubGVuZ3RoKSA6IG4gPSBlO1xuICBjb25zdCByID0gbi5zcGxpdChcIixcIiksIGkgPSB7fTtcbiAgJGUociwgaSwgX24pO1xuICBmb3IgKGxldCBjID0gMDsgYyA8IHIubGVuZ3RoOyBjKyspXG4gICAgcltjXSA9IHJbY10udHJpbSgpO1xuICBsZXQgYSA9IFwiXCI7XG4gIHN3aXRjaCAoci5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICBpLmlkID0gWXQoKSwgaS5zdGFydFRpbWUgPSB0LmVuZFRpbWUsIGEgPSByWzBdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgaS5pZCA9IFl0KCksIGkuc3RhcnRUaW1lID0gRGUodm9pZCAwLCBsdCwgclswXSksIGEgPSByWzFdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgaS5pZCA9IFl0KHJbMF0pLCBpLnN0YXJ0VGltZSA9IERlKHZvaWQgMCwgbHQsIHJbMV0pLCBhID0gclsyXTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBhICYmIChpLmVuZFRpbWUgPSBFbihpLnN0YXJ0VGltZSwgbHQsIGEsIFJ0KSwgaS5tYW51YWxFbmRUaW1lID0gcnQoYSwgXCJZWVlZLU1NLUREXCIsICEwKS5pc1ZhbGlkKCksIFluKGksIGx0LCB6dCwgVnQpKSwgaTtcbn0sIFwiY29tcGlsZURhdGFcIiksIERzID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCwgZSkge1xuICBsZXQgbjtcbiAgZS5zdWJzdHIoMCwgMSkgPT09IFwiOlwiID8gbiA9IGUuc3Vic3RyKDEsIGUubGVuZ3RoKSA6IG4gPSBlO1xuICBjb25zdCByID0gbi5zcGxpdChcIixcIiksIGkgPSB7fTtcbiAgJGUociwgaSwgX24pO1xuICBmb3IgKGxldCBhID0gMDsgYSA8IHIubGVuZ3RoOyBhKyspXG4gICAgclthXSA9IHJbYV0udHJpbSgpO1xuICBzd2l0Y2ggKHIubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgaS5pZCA9IFl0KCksIGkuc3RhcnRUaW1lID0ge1xuICAgICAgICB0eXBlOiBcInByZXZUYXNrRW5kXCIsXG4gICAgICAgIGlkOiB0XG4gICAgICB9LCBpLmVuZFRpbWUgPSB7XG4gICAgICAgIGRhdGE6IHJbMF1cbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBpLmlkID0gWXQoKSwgaS5zdGFydFRpbWUgPSB7XG4gICAgICAgIHR5cGU6IFwiZ2V0U3RhcnREYXRlXCIsXG4gICAgICAgIHN0YXJ0RGF0YTogclswXVxuICAgICAgfSwgaS5lbmRUaW1lID0ge1xuICAgICAgICBkYXRhOiByWzFdXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgaS5pZCA9IFl0KHJbMF0pLCBpLnN0YXJ0VGltZSA9IHtcbiAgICAgICAgdHlwZTogXCJnZXRTdGFydERhdGVcIixcbiAgICAgICAgc3RhcnREYXRhOiByWzFdXG4gICAgICB9LCBpLmVuZFRpbWUgPSB7XG4gICAgICAgIGRhdGE6IHJbMl1cbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gaTtcbn0sIFwicGFyc2VEYXRhXCIpLCBNZSwgdGUsIHR0ID0gW10sIEluID0ge30sIE1zID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCwgZSkge1xuICBjb25zdCBuID0ge1xuICAgIHNlY3Rpb246IEl0LFxuICAgIHR5cGU6IEl0LFxuICAgIHByb2Nlc3NlZDogITEsXG4gICAgbWFudWFsRW5kVGltZTogITEsXG4gICAgcmVuZGVyRW5kVGltZTogbnVsbCxcbiAgICByYXc6IHsgZGF0YTogZSB9LFxuICAgIHRhc2s6IHQsXG4gICAgY2xhc3NlczogW11cbiAgfSwgciA9IERzKHRlLCBlKTtcbiAgbi5yYXcuc3RhcnRUaW1lID0gci5zdGFydFRpbWUsIG4ucmF3LmVuZFRpbWUgPSByLmVuZFRpbWUsIG4uaWQgPSByLmlkLCBuLnByZXZUYXNrSWQgPSB0ZSwgbi5hY3RpdmUgPSByLmFjdGl2ZSwgbi5kb25lID0gci5kb25lLCBuLmNyaXQgPSByLmNyaXQsIG4ubWlsZXN0b25lID0gci5taWxlc3RvbmUsIG4udmVydCA9IHIudmVydCwgbi5vcmRlciA9IHdlLCB3ZSsrO1xuICBjb25zdCBpID0gdHQucHVzaChuKTtcbiAgdGUgPSBuLmlkLCBJbltuLmlkXSA9IGkgLSAxO1xufSwgXCJhZGRUYXNrXCIpLCBDdCA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHQpIHtcbiAgY29uc3QgZSA9IEluW3RdO1xuICByZXR1cm4gdHRbZV07XG59LCBcImZpbmRUYXNrQnlJZFwiKSwgQ3MgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih0LCBlKSB7XG4gIGNvbnN0IG4gPSB7XG4gICAgc2VjdGlvbjogSXQsXG4gICAgdHlwZTogSXQsXG4gICAgZGVzY3JpcHRpb246IHQsXG4gICAgdGFzazogdCxcbiAgICBjbGFzc2VzOiBbXVxuICB9LCByID0gd3MoTWUsIGUpO1xuICBuLnN0YXJ0VGltZSA9IHIuc3RhcnRUaW1lLCBuLmVuZFRpbWUgPSByLmVuZFRpbWUsIG4uaWQgPSByLmlkLCBuLmFjdGl2ZSA9IHIuYWN0aXZlLCBuLmRvbmUgPSByLmRvbmUsIG4uY3JpdCA9IHIuY3JpdCwgbi5taWxlc3RvbmUgPSByLm1pbGVzdG9uZSwgbi52ZXJ0ID0gci52ZXJ0LCBNZSA9IG4sIGllLnB1c2gobik7XG59LCBcImFkZFRhc2tPcmdcIiksIHJuID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHQgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbihuKSB7XG4gICAgY29uc3QgciA9IHR0W25dO1xuICAgIGxldCBpID0gXCJcIjtcbiAgICBzd2l0Y2ggKHR0W25dLnJhdy5zdGFydFRpbWUudHlwZSkge1xuICAgICAgY2FzZSBcInByZXZUYXNrRW5kXCI6IHtcbiAgICAgICAgY29uc3QgYSA9IEN0KHIucHJldlRhc2tJZCk7XG4gICAgICAgIHIuc3RhcnRUaW1lID0gYS5lbmRUaW1lO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJnZXRTdGFydERhdGVcIjpcbiAgICAgICAgaSA9IERlKHZvaWQgMCwgbHQsIHR0W25dLnJhdy5zdGFydFRpbWUuc3RhcnREYXRhKSwgaSAmJiAodHRbbl0uc3RhcnRUaW1lID0gaSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdHRbbl0uc3RhcnRUaW1lICYmICh0dFtuXS5lbmRUaW1lID0gRW4oXG4gICAgICB0dFtuXS5zdGFydFRpbWUsXG4gICAgICBsdCxcbiAgICAgIHR0W25dLnJhdy5lbmRUaW1lLmRhdGEsXG4gICAgICBSdFxuICAgICksIHR0W25dLmVuZFRpbWUgJiYgKHR0W25dLnByb2Nlc3NlZCA9ICEwLCB0dFtuXS5tYW51YWxFbmRUaW1lID0gcnQoXG4gICAgICB0dFtuXS5yYXcuZW5kVGltZS5kYXRhLFxuICAgICAgXCJZWVlZLU1NLUREXCIsXG4gICAgICAhMFxuICAgICkuaXNWYWxpZCgpLCBZbih0dFtuXSwgbHQsIHp0LCBWdCkpKSwgdHRbbl0ucHJvY2Vzc2VkO1xuICB9LCBcImNvbXBpbGVUYXNrXCIpO1xuICBsZXQgZSA9ICEwO1xuICBmb3IgKGNvbnN0IFtuLCByXSBvZiB0dC5lbnRyaWVzKCkpXG4gICAgdChuKSwgZSA9IGUgJiYgci5wcm9jZXNzZWQ7XG4gIHJldHVybiBlO1xufSwgXCJjb21waWxlVGFza3NcIiksIFNzID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCwgZSkge1xuICBsZXQgbiA9IGU7XG4gIF90KCkuc2VjdXJpdHlMZXZlbCAhPT0gXCJsb29zZVwiICYmIChuID0gWm4uc2FuaXRpemVVcmwoZSkpLCB0LnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICBDdChyKSAhPT0gdm9pZCAwICYmIChBbihyLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub3BlbihuLCBcIl9zZWxmXCIpO1xuICAgIH0pLCBVZS5zZXQociwgbikpO1xuICB9KSwgTG4odCwgXCJjbGlja2FibGVcIik7XG59LCBcInNldExpbmtcIiksIExuID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24odCwgZSkge1xuICB0LnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICBsZXQgciA9IEN0KG4pO1xuICAgIHIgIT09IHZvaWQgMCAmJiByLmNsYXNzZXMucHVzaChlKTtcbiAgfSk7XG59LCBcInNldENsYXNzXCIpLCBfcyA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgaWYgKF90KCkuc2VjdXJpdHlMZXZlbCAhPT0gXCJsb29zZVwiIHx8IGUgPT09IHZvaWQgMClcbiAgICByZXR1cm47XG4gIGxldCByID0gW107XG4gIGlmICh0eXBlb2YgbiA9PSBcInN0cmluZ1wiKSB7XG4gICAgciA9IG4uc3BsaXQoLywoPz0oPzooPzpbXlwiXSpcIil7Mn0pKlteXCJdKiQpLyk7XG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCByLmxlbmd0aDsgYSsrKSB7XG4gICAgICBsZXQgYyA9IHJbYV0udHJpbSgpO1xuICAgICAgYy5zdGFydHNXaXRoKCdcIicpICYmIGMuZW5kc1dpdGgoJ1wiJykgJiYgKGMgPSBjLnN1YnN0cigxLCBjLmxlbmd0aCAtIDIpKSwgclthXSA9IGM7XG4gICAgfVxuICB9XG4gIHIubGVuZ3RoID09PSAwICYmIHIucHVzaCh0KSwgQ3QodCkgIT09IHZvaWQgMCAmJiBBbih0LCAoKSA9PiB7XG4gICAgWG4ucnVuRnVuYyhlLCAuLi5yKTtcbiAgfSk7XG59LCBcInNldENsaWNrRnVuXCIpLCBBbiA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHQsIGUpIHtcbiAgTGUucHVzaChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke3R9XCJdYCk7XG4gICAgICBuICE9PSBudWxsICYmIG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBlKCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7dH0tdGV4dFwiXWApO1xuICAgICAgbiAhPT0gbnVsbCAmJiBuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICApO1xufSwgXCJwdXNoRnVuXCIpLCBGcyA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgdC5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbihyKSB7XG4gICAgX3MociwgZSwgbik7XG4gIH0pLCBMbih0LCBcImNsaWNrYWJsZVwiKTtcbn0sIFwic2V0Q2xpY2tFdmVudFwiKSwgWXMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih0KSB7XG4gIExlLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgIGUodCk7XG4gIH0pO1xufSwgXCJiaW5kRnVuY3Rpb25zXCIpLCBVcyA9IHtcbiAgZ2V0Q29uZmlnOiAvKiBAX19QVVJFX18gKi8gZCgoKSA9PiBfdCgpLmdhbnR0LCBcImdldENvbmZpZ1wiKSxcbiAgY2xlYXI6IGppLFxuICBzZXREYXRlRm9ybWF0OiBycyxcbiAgZ2V0RGF0ZUZvcm1hdDogbHMsXG4gIGVuYWJsZUluY2x1c2l2ZUVuZERhdGVzOiBpcyxcbiAgZW5kRGF0ZXNBcmVJbmNsdXNpdmU6IHNzLFxuICBlbmFibGVUb3BBeGlzOiBhcyxcbiAgdG9wQXhpc0VuYWJsZWQ6IG9zLFxuICBzZXRBeGlzRm9ybWF0OiBRaSxcbiAgZ2V0QXhpc0Zvcm1hdDogSmksXG4gIHNldFRpY2tJbnRlcnZhbDogS2ksXG4gIGdldFRpY2tJbnRlcnZhbDogdHMsXG4gIHNldFRvZGF5TWFya2VyOiBlcyxcbiAgZ2V0VG9kYXlNYXJrZXI6IG5zLFxuICBzZXRBY2NUaXRsZTogem4sXG4gIGdldEFjY1RpdGxlOiBWbixcbiAgc2V0RGlhZ3JhbVRpdGxlOiBQbixcbiAgZ2V0RGlhZ3JhbVRpdGxlOiBObixcbiAgc2V0RGlzcGxheU1vZGU6IGNzLFxuICBnZXREaXNwbGF5TW9kZTogdXMsXG4gIHNldEFjY0Rlc2NyaXB0aW9uOiBIbixcbiAgZ2V0QWNjRGVzY3JpcHRpb246IE9uLFxuICBhZGRTZWN0aW9uOiB5cyxcbiAgZ2V0U2VjdGlvbnM6IGtzLFxuICBnZXRUYXNrczogcHMsXG4gIGFkZFRhc2s6IE1zLFxuICBmaW5kVGFza0J5SWQ6IEN0LFxuICBhZGRUYXNrT3JnOiBDcyxcbiAgc2V0SW5jbHVkZXM6IGZzLFxuICBnZXRJbmNsdWRlczogZHMsXG4gIHNldEV4Y2x1ZGVzOiBocyxcbiAgZ2V0RXhjbHVkZXM6IG1zLFxuICBzZXRDbGlja0V2ZW50OiBGcyxcbiAgc2V0TGluazogU3MsXG4gIGdldExpbmtzOiBncyxcbiAgYmluZEZ1bmN0aW9uczogWXMsXG4gIHBhcnNlRHVyYXRpb246IFVuLFxuICBpc0ludmFsaWREYXRlOiBGbixcbiAgc2V0V2Vla2RheTogdnMsXG4gIGdldFdlZWtkYXk6IFRzLFxuICBzZXRXZWVrZW5kOiBic1xufTtcbmZ1bmN0aW9uICRlKHQsIGUsIG4pIHtcbiAgbGV0IHIgPSAhMDtcbiAgZm9yICg7IHI7IClcbiAgICByID0gITEsIG4uZm9yRWFjaChmdW5jdGlvbihpKSB7XG4gICAgICBjb25zdCBhID0gXCJeXFxcXHMqXCIgKyBpICsgXCJcXFxccyokXCIsIGMgPSBuZXcgUmVnRXhwKGEpO1xuICAgICAgdFswXS5tYXRjaChjKSAmJiAoZVtpXSA9ICEwLCB0LnNoaWZ0KDEpLCByID0gITApO1xuICAgIH0pO1xufVxuZCgkZSwgXCJnZXRUYXNrVGFnc1wiKTtcbnJ0LmV4dGVuZChYaSk7XG52YXIgRXMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgVHQuZGVidWcoXCJTb21ldGhpbmcgaXMgY2FsbGluZywgc2V0Q29uZiwgcmVtb3ZlIHRoZSBjYWxsXCIpO1xufSwgXCJzZXRDb25mXCIpLCBzbiA9IHtcbiAgbW9uZGF5OiBIdCxcbiAgdHVlc2RheTogcG4sXG4gIHdlZG5lc2RheTogdm4sXG4gIHRodXJzZGF5OiB4dCxcbiAgZnJpZGF5OiBUbixcbiAgc2F0dXJkYXk6IGJuLFxuICBzdW5kYXk6IFB0XG59LCBJcyA9IC8qIEBfX1BVUkVfXyAqLyBkKCh0LCBlKSA9PiB7XG4gIGxldCBuID0gWy4uLnRdLm1hcCgoKSA9PiAtMSAvIDApLCByID0gWy4uLnRdLnNvcnQoKGEsIGMpID0+IGEuc3RhcnRUaW1lIC0gYy5zdGFydFRpbWUgfHwgYS5vcmRlciAtIGMub3JkZXIpLCBpID0gMDtcbiAgZm9yIChjb25zdCBhIG9mIHIpXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBuLmxlbmd0aDsgYysrKVxuICAgICAgaWYgKGEuc3RhcnRUaW1lID49IG5bY10pIHtcbiAgICAgICAgbltjXSA9IGEuZW5kVGltZSwgYS5vcmRlciA9IGMgKyBlLCBjID4gaSAmJiAoaSA9IGMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgcmV0dXJuIGk7XG59LCBcImdldE1heEludGVyc2VjdGlvbnNcIiksIGR0LCB2ZSA9IDFlNCwgTHMgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih0LCBlLCBuLCByKSB7XG4gIGNvbnN0IGkgPSBfdCgpLmdhbnR0LCBhID0gX3QoKS5zZWN1cml0eUxldmVsO1xuICBsZXQgYztcbiAgYSA9PT0gXCJzYW5kYm94XCIgJiYgKGMgPSBadChcIiNpXCIgKyBlKSk7XG4gIGNvbnN0IG0gPSBhID09PSBcInNhbmRib3hcIiA/IFp0KGMubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBadChcImJvZHlcIiksIFkgPSBhID09PSBcInNhbmRib3hcIiA/IGMubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQgOiBkb2N1bWVudCwgQyA9IFkuZ2V0RWxlbWVudEJ5SWQoZSk7XG4gIGR0ID0gQy5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoLCBkdCA9PT0gdm9pZCAwICYmIChkdCA9IDEyMDApLCBpLnVzZVdpZHRoICE9PSB2b2lkIDAgJiYgKGR0ID0gaS51c2VXaWR0aCk7XG4gIGNvbnN0IGsgPSByLmRiLmdldFRhc2tzKCk7XG4gIGxldCBMID0gW107XG4gIGZvciAoY29uc3QgaCBvZiBrKVxuICAgIEwucHVzaChoLnR5cGUpO1xuICBMID0geShMKTtcbiAgY29uc3QgXyA9IHt9O1xuICBsZXQgUyA9IDIgKiBpLnRvcFBhZGRpbmc7XG4gIGlmIChyLmRiLmdldERpc3BsYXlNb2RlKCkgPT09IFwiY29tcGFjdFwiIHx8IGkuZGlzcGxheU1vZGUgPT09IFwiY29tcGFjdFwiKSB7XG4gICAgY29uc3QgaCA9IHt9O1xuICAgIGZvciAoY29uc3QgdyBvZiBrKVxuICAgICAgaFt3LnNlY3Rpb25dID09PSB2b2lkIDAgPyBoW3cuc2VjdGlvbl0gPSBbd10gOiBoW3cuc2VjdGlvbl0ucHVzaCh3KTtcbiAgICBsZXQgRCA9IDA7XG4gICAgZm9yIChjb25zdCB3IG9mIE9iamVjdC5rZXlzKGgpKSB7XG4gICAgICBjb25zdCBUID0gSXMoaFt3XSwgRCkgKyAxO1xuICAgICAgRCArPSBULCBTICs9IFQgKiAoaS5iYXJIZWlnaHQgKyBpLmJhckdhcCksIF9bd10gPSBUO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBTICs9IGsubGVuZ3RoICogKGkuYmFySGVpZ2h0ICsgaS5iYXJHYXApO1xuICAgIGZvciAoY29uc3QgaCBvZiBMKVxuICAgICAgX1toXSA9IGsuZmlsdGVyKChEKSA9PiBELnR5cGUgPT09IGgpLmxlbmd0aDtcbiAgfVxuICBDLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyBkdCArIFwiIFwiICsgUyk7XG4gIGNvbnN0IFogPSBtLnNlbGVjdChgW2lkPVwiJHtlfVwiXWApLCBBID0gRWkoKS5kb21haW4oW1xuICAgIGVyKGssIGZ1bmN0aW9uKGgpIHtcbiAgICAgIHJldHVybiBoLnN0YXJ0VGltZTtcbiAgICB9KSxcbiAgICB0cihrLCBmdW5jdGlvbihoKSB7XG4gICAgICByZXR1cm4gaC5lbmRUaW1lO1xuICAgIH0pXG4gIF0pLnJhbmdlUm91bmQoWzAsIGR0IC0gaS5sZWZ0UGFkZGluZyAtIGkucmlnaHRQYWRkaW5nXSk7XG4gIGZ1bmN0aW9uIFUoaCwgRCkge1xuICAgIGNvbnN0IHcgPSBoLnN0YXJ0VGltZSwgVCA9IEQuc3RhcnRUaW1lO1xuICAgIGxldCB2ID0gMDtcbiAgICByZXR1cm4gdyA+IFQgPyB2ID0gMSA6IHcgPCBUICYmICh2ID0gLTEpLCB2O1xuICB9XG4gIGQoVSwgXCJ0YXNrQ29tcGFyZVwiKSwgay5zb3J0KFUpLCBJKGssIGR0LCBTKSwgUm4oWiwgUywgZHQsIGkudXNlTWF4V2lkdGgpLCBaLmFwcGVuZChcInRleHRcIikudGV4dChyLmRiLmdldERpYWdyYW1UaXRsZSgpKS5hdHRyKFwieFwiLCBkdCAvIDIpLmF0dHIoXCJ5XCIsIGkudGl0bGVUb3BNYXJnaW4pLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlVGV4dFwiKTtcbiAgZnVuY3Rpb24gSShoLCBELCB3KSB7XG4gICAgY29uc3QgVCA9IGkuYmFySGVpZ2h0LCB2ID0gVCArIGkuYmFyR2FwLCB1ID0gaS50b3BQYWRkaW5nLCBmID0gaS5sZWZ0UGFkZGluZywgYiA9IEpuKCkuZG9tYWluKFswLCBMLmxlbmd0aF0pLnJhbmdlKFtcIiMwMEI5RkFcIiwgXCIjRjk1MDAyXCJdKS5pbnRlcnBvbGF0ZSh5cik7XG4gICAgVyhcbiAgICAgIHYsXG4gICAgICB1LFxuICAgICAgZixcbiAgICAgIEQsXG4gICAgICB3LFxuICAgICAgaCxcbiAgICAgIHIuZGIuZ2V0RXhjbHVkZXMoKSxcbiAgICAgIHIuZGIuZ2V0SW5jbHVkZXMoKVxuICAgICksIGooZiwgdSwgRCwgdyksIE4oaCwgdiwgdSwgZiwgVCwgYiwgRCksIHAodiwgdSksIGcoZiwgdSwgRCwgdyk7XG4gIH1cbiAgZChJLCBcIm1ha2VHYW50dFwiKTtcbiAgZnVuY3Rpb24gTihoLCBELCB3LCBULCB2LCB1LCBmKSB7XG4gICAgaC5zb3J0KChzLCBFKSA9PiBzLnZlcnQgPT09IEUudmVydCA/IDAgOiBzLnZlcnQgPyAxIDogLTEpO1xuICAgIGNvbnN0IHggPSBbLi4ubmV3IFNldChoLm1hcCgocykgPT4gcy5vcmRlcikpXS5tYXAoKHMpID0+IGguZmluZCgoRSkgPT4gRS5vcmRlciA9PT0gcykpO1xuICAgIFouYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEoeCkuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKHMsIEUpIHtcbiAgICAgIHJldHVybiBFID0gcy5vcmRlciwgRSAqIEQgKyB3IC0gMjtcbiAgICB9KS5hdHRyKFwid2lkdGhcIiwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZiAtIGkucmlnaHRQYWRkaW5nIC8gMjtcbiAgICB9KS5hdHRyKFwiaGVpZ2h0XCIsIEQpLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihzKSB7XG4gICAgICBmb3IgKGNvbnN0IFtFLCBSXSBvZiBMLmVudHJpZXMoKSlcbiAgICAgICAgaWYgKHMudHlwZSA9PT0gUilcbiAgICAgICAgICByZXR1cm4gXCJzZWN0aW9uIHNlY3Rpb25cIiArIEUgJSBpLm51bWJlclNlY3Rpb25TdHlsZXM7XG4gICAgICByZXR1cm4gXCJzZWN0aW9uIHNlY3Rpb24wXCI7XG4gICAgfSkuZW50ZXIoKTtcbiAgICBjb25zdCBGID0gWi5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcInJlY3RcIikuZGF0YShoKS5lbnRlcigpLCBvID0gci5kYi5nZXRMaW5rcygpO1xuICAgIGlmIChGLmFwcGVuZChcInJlY3RcIikuYXR0cihcImlkXCIsIGZ1bmN0aW9uKHMpIHtcbiAgICAgIHJldHVybiBzLmlkO1xuICAgIH0pLmF0dHIoXCJyeFwiLCAzKS5hdHRyKFwicnlcIiwgMykuYXR0cihcInhcIiwgZnVuY3Rpb24ocykge1xuICAgICAgcmV0dXJuIHMubWlsZXN0b25lID8gQShzLnN0YXJ0VGltZSkgKyBUICsgMC41ICogKEEocy5lbmRUaW1lKSAtIEEocy5zdGFydFRpbWUpKSAtIDAuNSAqIHYgOiBBKHMuc3RhcnRUaW1lKSArIFQ7XG4gICAgfSkuYXR0cihcInlcIiwgZnVuY3Rpb24ocywgRSkge1xuICAgICAgcmV0dXJuIEUgPSBzLm9yZGVyLCBzLnZlcnQgPyBpLmdyaWRMaW5lU3RhcnRQYWRkaW5nIDogRSAqIEQgKyB3O1xuICAgIH0pLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbihzKSB7XG4gICAgICByZXR1cm4gcy5taWxlc3RvbmUgPyB2IDogcy52ZXJ0ID8gMC4wOCAqIHYgOiBBKHMucmVuZGVyRW5kVGltZSB8fCBzLmVuZFRpbWUpIC0gQShzLnN0YXJ0VGltZSk7XG4gICAgfSkuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihzKSB7XG4gICAgICByZXR1cm4gcy52ZXJ0ID8gay5sZW5ndGggKiAoaS5iYXJIZWlnaHQgKyBpLmJhckdhcCkgKyBpLmJhckhlaWdodCAqIDIgOiB2O1xuICAgIH0pLmF0dHIoXCJ0cmFuc2Zvcm0tb3JpZ2luXCIsIGZ1bmN0aW9uKHMsIEUpIHtcbiAgICAgIHJldHVybiBFID0gcy5vcmRlciwgKEEocy5zdGFydFRpbWUpICsgVCArIDAuNSAqIChBKHMuZW5kVGltZSkgLSBBKHMuc3RhcnRUaW1lKSkpLnRvU3RyaW5nKCkgKyBcInB4IFwiICsgKEUgKiBEICsgdyArIDAuNSAqIHYpLnRvU3RyaW5nKCkgKyBcInB4XCI7XG4gICAgfSkuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKHMpIHtcbiAgICAgIGNvbnN0IEUgPSBcInRhc2tcIjtcbiAgICAgIGxldCBSID0gXCJcIjtcbiAgICAgIHMuY2xhc3Nlcy5sZW5ndGggPiAwICYmIChSID0gcy5jbGFzc2VzLmpvaW4oXCIgXCIpKTtcbiAgICAgIGxldCB6ID0gMDtcbiAgICAgIGZvciAoY29uc3QgW0ssIE9dIG9mIEwuZW50cmllcygpKVxuICAgICAgICBzLnR5cGUgPT09IE8gJiYgKHogPSBLICUgaS5udW1iZXJTZWN0aW9uU3R5bGVzKTtcbiAgICAgIGxldCBQID0gXCJcIjtcbiAgICAgIHJldHVybiBzLmFjdGl2ZSA/IHMuY3JpdCA/IFAgKz0gXCIgYWN0aXZlQ3JpdFwiIDogUCA9IFwiIGFjdGl2ZVwiIDogcy5kb25lID8gcy5jcml0ID8gUCA9IFwiIGRvbmVDcml0XCIgOiBQID0gXCIgZG9uZVwiIDogcy5jcml0ICYmIChQICs9IFwiIGNyaXRcIiksIFAubGVuZ3RoID09PSAwICYmIChQID0gXCIgdGFza1wiKSwgcy5taWxlc3RvbmUgJiYgKFAgPSBcIiBtaWxlc3RvbmUgXCIgKyBQKSwgcy52ZXJ0ICYmIChQID0gXCIgdmVydCBcIiArIFApLCBQICs9IHosIFAgKz0gXCIgXCIgKyBSLCBFICsgUDtcbiAgICB9KSwgRi5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJpZFwiLCBmdW5jdGlvbihzKSB7XG4gICAgICByZXR1cm4gcy5pZCArIFwiLXRleHRcIjtcbiAgICB9KS50ZXh0KGZ1bmN0aW9uKHMpIHtcbiAgICAgIHJldHVybiBzLnRhc2s7XG4gICAgfSkuYXR0cihcImZvbnQtc2l6ZVwiLCBpLmZvbnRTaXplKS5hdHRyKFwieFwiLCBmdW5jdGlvbihzKSB7XG4gICAgICBsZXQgRSA9IEEocy5zdGFydFRpbWUpLCBSID0gQShzLnJlbmRlckVuZFRpbWUgfHwgcy5lbmRUaW1lKTtcbiAgICAgIGlmIChzLm1pbGVzdG9uZSAmJiAoRSArPSAwLjUgKiAoQShzLmVuZFRpbWUpIC0gQShzLnN0YXJ0VGltZSkpIC0gMC41ICogdiwgUiA9IEUgKyB2KSwgcy52ZXJ0KVxuICAgICAgICByZXR1cm4gQShzLnN0YXJ0VGltZSkgKyBUO1xuICAgICAgY29uc3QgeiA9IHRoaXMuZ2V0QkJveCgpLndpZHRoO1xuICAgICAgcmV0dXJuIHogPiBSIC0gRSA/IFIgKyB6ICsgMS41ICogaS5sZWZ0UGFkZGluZyA+IGYgPyBFICsgVCAtIDUgOiBSICsgVCArIDUgOiAoUiAtIEUpIC8gMiArIEUgKyBUO1xuICAgIH0pLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKHMsIEUpIHtcbiAgICAgIHJldHVybiBzLnZlcnQgPyBpLmdyaWRMaW5lU3RhcnRQYWRkaW5nICsgay5sZW5ndGggKiAoaS5iYXJIZWlnaHQgKyBpLmJhckdhcCkgKyA2MCA6IChFID0gcy5vcmRlciwgRSAqIEQgKyBpLmJhckhlaWdodCAvIDIgKyAoaS5mb250U2l6ZSAvIDIgLSAyKSArIHcpO1xuICAgIH0pLmF0dHIoXCJ0ZXh0LWhlaWdodFwiLCB2KS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24ocykge1xuICAgICAgY29uc3QgRSA9IEEocy5zdGFydFRpbWUpO1xuICAgICAgbGV0IFIgPSBBKHMuZW5kVGltZSk7XG4gICAgICBzLm1pbGVzdG9uZSAmJiAoUiA9IEUgKyB2KTtcbiAgICAgIGNvbnN0IHogPSB0aGlzLmdldEJCb3goKS53aWR0aDtcbiAgICAgIGxldCBQID0gXCJcIjtcbiAgICAgIHMuY2xhc3Nlcy5sZW5ndGggPiAwICYmIChQID0gcy5jbGFzc2VzLmpvaW4oXCIgXCIpKTtcbiAgICAgIGxldCBLID0gMDtcbiAgICAgIGZvciAoY29uc3QgW3N0LCBNXSBvZiBMLmVudHJpZXMoKSlcbiAgICAgICAgcy50eXBlID09PSBNICYmIChLID0gc3QgJSBpLm51bWJlclNlY3Rpb25TdHlsZXMpO1xuICAgICAgbGV0IE8gPSBcIlwiO1xuICAgICAgcmV0dXJuIHMuYWN0aXZlICYmIChzLmNyaXQgPyBPID0gXCJhY3RpdmVDcml0VGV4dFwiICsgSyA6IE8gPSBcImFjdGl2ZVRleHRcIiArIEspLCBzLmRvbmUgPyBzLmNyaXQgPyBPID0gTyArIFwiIGRvbmVDcml0VGV4dFwiICsgSyA6IE8gPSBPICsgXCIgZG9uZVRleHRcIiArIEsgOiBzLmNyaXQgJiYgKE8gPSBPICsgXCIgY3JpdFRleHRcIiArIEspLCBzLm1pbGVzdG9uZSAmJiAoTyArPSBcIiBtaWxlc3RvbmVUZXh0XCIpLCBzLnZlcnQgJiYgKE8gKz0gXCIgdmVydFRleHRcIiksIHogPiBSIC0gRSA/IFIgKyB6ICsgMS41ICogaS5sZWZ0UGFkZGluZyA+IGYgPyBQICsgXCIgdGFza1RleHRPdXRzaWRlTGVmdCB0YXNrVGV4dE91dHNpZGVcIiArIEsgKyBcIiBcIiArIE8gOiBQICsgXCIgdGFza1RleHRPdXRzaWRlUmlnaHQgdGFza1RleHRPdXRzaWRlXCIgKyBLICsgXCIgXCIgKyBPICsgXCIgd2lkdGgtXCIgKyB6IDogUCArIFwiIHRhc2tUZXh0IHRhc2tUZXh0XCIgKyBLICsgXCIgXCIgKyBPICsgXCIgd2lkdGgtXCIgKyB6O1xuICAgIH0pLCBfdCgpLnNlY3VyaXR5TGV2ZWwgPT09IFwic2FuZGJveFwiKSB7XG4gICAgICBsZXQgcztcbiAgICAgIHMgPSBadChcIiNpXCIgKyBlKTtcbiAgICAgIGNvbnN0IEUgPSBzLm5vZGVzKClbMF0uY29udGVudERvY3VtZW50O1xuICAgICAgRi5maWx0ZXIoZnVuY3Rpb24oUikge1xuICAgICAgICByZXR1cm4gby5oYXMoUi5pZCk7XG4gICAgICB9KS5lYWNoKGZ1bmN0aW9uKFIpIHtcbiAgICAgICAgdmFyIHogPSBFLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBSLmlkKSwgUCA9IEUucXVlcnlTZWxlY3RvcihcIiNcIiArIFIuaWQgKyBcIi10ZXh0XCIpO1xuICAgICAgICBjb25zdCBLID0gei5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgTyA9IEUuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIE8uc2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiLCBvLmdldChSLmlkKSksIE8uc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX3RvcFwiKSwgSy5hcHBlbmRDaGlsZChPKSwgTy5hcHBlbmRDaGlsZCh6KSwgTy5hcHBlbmRDaGlsZChQKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBkKE4sIFwiZHJhd1JlY3RzXCIpO1xuICBmdW5jdGlvbiBXKGgsIEQsIHcsIFQsIHYsIHUsIGYsIGIpIHtcbiAgICBpZiAoZi5sZW5ndGggPT09IDAgJiYgYi5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm47XG4gICAgbGV0IHgsIEY7XG4gICAgZm9yIChjb25zdCB7IHN0YXJ0VGltZTogeiwgZW5kVGltZTogUCB9IG9mIHUpXG4gICAgICAoeCA9PT0gdm9pZCAwIHx8IHogPCB4KSAmJiAoeCA9IHopLCAoRiA9PT0gdm9pZCAwIHx8IFAgPiBGKSAmJiAoRiA9IFApO1xuICAgIGlmICgheCB8fCAhRilcbiAgICAgIHJldHVybjtcbiAgICBpZiAocnQoRikuZGlmZihydCh4KSwgXCJ5ZWFyXCIpID4gNSkge1xuICAgICAgVHQud2FybihcbiAgICAgICAgXCJUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCB0aW1lIGlzIG1vcmUgdGhhbiA1IHllYXJzLiBUaGlzIHdpbGwgY2F1c2UgcGVyZm9ybWFuY2UgaXNzdWVzLiBTa2lwcGluZyBkcmF3aW5nIGV4Y2x1ZGUgZGF5cy5cIlxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbyA9IHIuZGIuZ2V0RGF0ZUZvcm1hdCgpLCBYID0gW107XG4gICAgbGV0IHMgPSBudWxsLCBFID0gcnQoeCk7XG4gICAgZm9yICg7IEUudmFsdWVPZigpIDw9IEY7IClcbiAgICAgIHIuZGIuaXNJbnZhbGlkRGF0ZShFLCBvLCBmLCBiKSA/IHMgPyBzLmVuZCA9IEUgOiBzID0ge1xuICAgICAgICBzdGFydDogRSxcbiAgICAgICAgZW5kOiBFXG4gICAgICB9IDogcyAmJiAoWC5wdXNoKHMpLCBzID0gbnVsbCksIEUgPSBFLmFkZCgxLCBcImRcIik7XG4gICAgWi5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcInJlY3RcIikuZGF0YShYKS5lbnRlcigpLmFwcGVuZChcInJlY3RcIikuYXR0cihcImlkXCIsICh6KSA9PiBcImV4Y2x1ZGUtXCIgKyB6LnN0YXJ0LmZvcm1hdChcIllZWVktTU0tRERcIikpLmF0dHIoXCJ4XCIsICh6KSA9PiBBKHouc3RhcnQuc3RhcnRPZihcImRheVwiKSkgKyB3KS5hdHRyKFwieVwiLCBpLmdyaWRMaW5lU3RhcnRQYWRkaW5nKS5hdHRyKFwid2lkdGhcIiwgKHopID0+IEEoei5lbmQuZW5kT2YoXCJkYXlcIikpIC0gQSh6LnN0YXJ0LnN0YXJ0T2YoXCJkYXlcIikpKS5hdHRyKFwiaGVpZ2h0XCIsIHYgLSBEIC0gaS5ncmlkTGluZVN0YXJ0UGFkZGluZykuYXR0cihcInRyYW5zZm9ybS1vcmlnaW5cIiwgZnVuY3Rpb24oeiwgUCkge1xuICAgICAgcmV0dXJuIChBKHouc3RhcnQpICsgdyArIDAuNSAqIChBKHouZW5kKSAtIEEoei5zdGFydCkpKS50b1N0cmluZygpICsgXCJweCBcIiArIChQICogaCArIDAuNSAqIHYpLnRvU3RyaW5nKCkgKyBcInB4XCI7XG4gICAgfSkuYXR0cihcImNsYXNzXCIsIFwiZXhjbHVkZS1yYW5nZVwiKTtcbiAgfVxuICBkKFcsIFwiZHJhd0V4Y2x1ZGVEYXlzXCIpO1xuICBmdW5jdGlvbiBxKGgsIEQsIHcsIFQpIHtcbiAgICBpZiAodyA8PSAwIHx8IGggPiBEKVxuICAgICAgcmV0dXJuIDEgLyAwO1xuICAgIGNvbnN0IHYgPSBEIC0gaCwgdSA9IHJ0LmR1cmF0aW9uKHsgW1QgPz8gXCJkYXlcIl06IHcgfSkuYXNNaWxsaXNlY29uZHMoKTtcbiAgICByZXR1cm4gdSA8PSAwID8gMSAvIDAgOiBNYXRoLmNlaWwodiAvIHUpO1xuICB9XG4gIGQocSwgXCJnZXRFc3RpbWF0ZWRUaWNrQ291bnRcIik7XG4gIGZ1bmN0aW9uIGooaCwgRCwgdywgVCkge1xuICAgIGNvbnN0IHYgPSByLmRiLmdldERhdGVGb3JtYXQoKSwgdSA9IHIuZGIuZ2V0QXhpc0Zvcm1hdCgpO1xuICAgIGxldCBmO1xuICAgIHUgPyBmID0gdSA6IHYgPT09IFwiRFwiID8gZiA9IFwiJWRcIiA6IGYgPSBpLmF4aXNGb3JtYXQgPz8gXCIlWS0lbS0lZFwiO1xuICAgIGxldCBiID0gdXIoQSkudGlja1NpemUoLVQgKyBEICsgaS5ncmlkTGluZVN0YXJ0UGFkZGluZykudGlja0Zvcm1hdChyZShmKSk7XG4gICAgY29uc3QgRiA9IC9eKFsxLTldXFxkKikobWlsbGlzZWNvbmR8c2Vjb25kfG1pbnV0ZXxob3VyfGRheXx3ZWVrfG1vbnRoKSQvLmV4ZWMoXG4gICAgICByLmRiLmdldFRpY2tJbnRlcnZhbCgpIHx8IGkudGlja0ludGVydmFsXG4gICAgKTtcbiAgICBpZiAoRiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbyA9IHBhcnNlSW50KEZbMV0sIDEwKTtcbiAgICAgIGlmIChpc05hTihvKSB8fCBvIDw9IDApXG4gICAgICAgIFR0Lndhcm4oXG4gICAgICAgICAgYEludmFsaWQgdGljayBpbnRlcnZhbCB2YWx1ZTogXCIke0ZbMV19XCIuIFNraXBwaW5nIGN1c3RvbSB0aWNrIGludGVydmFsLmBcbiAgICAgICAgKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBYID0gRlsyXSwgcyA9IHIuZGIuZ2V0V2Vla2RheSgpIHx8IGkud2Vla2RheSwgRSA9IEEuZG9tYWluKCksIFIgPSBFWzBdLCB6ID0gRVsxXSwgUCA9IHEoUiwgeiwgbywgWCk7XG4gICAgICAgIGlmIChQID4gdmUpXG4gICAgICAgICAgVHQud2FybihcbiAgICAgICAgICAgIGBUaGUgdGljayBpbnRlcnZhbCBcIiR7b30ke1h9XCIgd291bGQgZ2VuZXJhdGUgJHtQfSB0aWNrcywgd2hpY2ggZXhjZWVkcyB0aGUgbWF4aW11bSBhbGxvd2VkICgke3ZlfSkuIFRoaXMgbWF5IGluZGljYXRlIGFuIGludmFsaWQgZGF0ZSBvciB0aW1lIHJhbmdlLiBTa2lwcGluZyBjdXN0b20gdGljayBpbnRlcnZhbC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHN3aXRjaCAoWCkge1xuICAgICAgICAgICAgY2FzZSBcIm1pbGxpc2Vjb25kXCI6XG4gICAgICAgICAgICAgIGIudGlja3MoVXQuZXZlcnkobykpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZWNvbmRcIjpcbiAgICAgICAgICAgICAgYi50aWNrcyh2dC5ldmVyeShvKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1pbnV0ZVwiOlxuICAgICAgICAgICAgICBiLnRpY2tzKCR0LmV2ZXJ5KG8pKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaG91clwiOlxuICAgICAgICAgICAgICBiLnRpY2tzKE90LmV2ZXJ5KG8pKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgICAgICAgIGIudGlja3MoYnQuZXZlcnkobykpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3ZWVrXCI6XG4gICAgICAgICAgICAgIGIudGlja3Moc25bc10uZXZlcnkobykpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICAgICAgICBiLnRpY2tzKE50LmV2ZXJ5KG8pKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoWi5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImdyaWRcIikuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGggKyBcIiwgXCIgKyAoVCAtIDUwKSArIFwiKVwiKS5jYWxsKGIpLnNlbGVjdEFsbChcInRleHRcIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5hdHRyKFwiZmlsbFwiLCBcIiMwMDBcIikuYXR0cihcInN0cm9rZVwiLCBcIm5vbmVcIikuYXR0cihcImZvbnQtc2l6ZVwiLCAxMCkuYXR0cihcImR5XCIsIFwiMWVtXCIpLCByLmRiLnRvcEF4aXNFbmFibGVkKCkgfHwgaS50b3BBeGlzKSB7XG4gICAgICBsZXQgbyA9IGNyKEEpLnRpY2tTaXplKC1UICsgRCArIGkuZ3JpZExpbmVTdGFydFBhZGRpbmcpLnRpY2tGb3JtYXQocmUoZikpO1xuICAgICAgaWYgKEYgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgWCA9IHBhcnNlSW50KEZbMV0sIDEwKTtcbiAgICAgICAgaWYgKGlzTmFOKFgpIHx8IFggPD0gMClcbiAgICAgICAgICBUdC53YXJuKFxuICAgICAgICAgICAgYEludmFsaWQgdGljayBpbnRlcnZhbCB2YWx1ZTogXCIke0ZbMV19XCIuIFNraXBwaW5nIGN1c3RvbSB0aWNrIGludGVydmFsLmBcbiAgICAgICAgICApO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzID0gRlsyXSwgRSA9IHIuZGIuZ2V0V2Vla2RheSgpIHx8IGkud2Vla2RheSwgUiA9IEEuZG9tYWluKCksIHogPSBSWzBdLCBQID0gUlsxXTtcbiAgICAgICAgICBpZiAocSh6LCBQLCBYLCBzKSA8PSB2ZSlcbiAgICAgICAgICAgIHN3aXRjaCAocykge1xuICAgICAgICAgICAgICBjYXNlIFwibWlsbGlzZWNvbmRcIjpcbiAgICAgICAgICAgICAgICBvLnRpY2tzKFV0LmV2ZXJ5KFgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInNlY29uZFwiOlxuICAgICAgICAgICAgICAgIG8udGlja3ModnQuZXZlcnkoWCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibWludXRlXCI6XG4gICAgICAgICAgICAgICAgby50aWNrcygkdC5ldmVyeShYKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJob3VyXCI6XG4gICAgICAgICAgICAgICAgby50aWNrcyhPdC5ldmVyeShYKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgICAgICAgICBvLnRpY2tzKGJ0LmV2ZXJ5KFgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIndlZWtcIjpcbiAgICAgICAgICAgICAgICBvLnRpY2tzKHNuW0VdLmV2ZXJ5KFgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgICAgICAgICAgby50aWNrcyhOdC5ldmVyeShYKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFouYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJncmlkXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBoICsgXCIsIFwiICsgRCArIFwiKVwiKS5jYWxsKG8pLnNlbGVjdEFsbChcInRleHRcIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5hdHRyKFwiZmlsbFwiLCBcIiMwMDBcIikuYXR0cihcInN0cm9rZVwiLCBcIm5vbmVcIikuYXR0cihcImZvbnQtc2l6ZVwiLCAxMCk7XG4gICAgfVxuICB9XG4gIGQoaiwgXCJtYWtlR3JpZFwiKTtcbiAgZnVuY3Rpb24gcChoLCBEKSB7XG4gICAgbGV0IHcgPSAwO1xuICAgIGNvbnN0IFQgPSBPYmplY3Qua2V5cyhfKS5tYXAoKHYpID0+IFt2LCBfW3ZdXSk7XG4gICAgWi5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcInRleHRcIikuZGF0YShUKS5lbnRlcigpLmFwcGVuZChmdW5jdGlvbih2KSB7XG4gICAgICBjb25zdCB1ID0gdlswXS5zcGxpdChxbi5saW5lQnJlYWtSZWdleCksIGYgPSAtKHUubGVuZ3RoIC0gMSkgLyAyLCBiID0gWS5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRleHRcIik7XG4gICAgICBiLnNldEF0dHJpYnV0ZShcImR5XCIsIGYgKyBcImVtXCIpO1xuICAgICAgZm9yIChjb25zdCBbeCwgRl0gb2YgdS5lbnRyaWVzKCkpIHtcbiAgICAgICAgY29uc3QgbyA9IFkuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0c3BhblwiKTtcbiAgICAgICAgby5zZXRBdHRyaWJ1dGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJjZW50cmFsXCIpLCBvLnNldEF0dHJpYnV0ZShcInhcIiwgXCIxMFwiKSwgeCA+IDAgJiYgby5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjFlbVwiKSwgby50ZXh0Q29udGVudCA9IEYsIGIuYXBwZW5kQ2hpbGQobyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYjtcbiAgICB9KS5hdHRyKFwieFwiLCAxMCkuYXR0cihcInlcIiwgZnVuY3Rpb24odiwgdSkge1xuICAgICAgaWYgKHUgPiAwKVxuICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IHU7IGYrKylcbiAgICAgICAgICByZXR1cm4gdyArPSBUW3UgLSAxXVsxXSwgdlsxXSAqIGggLyAyICsgdyAqIGggKyBEO1xuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gdlsxXSAqIGggLyAyICsgRDtcbiAgICB9KS5hdHRyKFwiZm9udC1zaXplXCIsIGkuc2VjdGlvbkZvbnRTaXplKS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24odikge1xuICAgICAgZm9yIChjb25zdCBbdSwgZl0gb2YgTC5lbnRyaWVzKCkpXG4gICAgICAgIGlmICh2WzBdID09PSBmKVxuICAgICAgICAgIHJldHVybiBcInNlY3Rpb25UaXRsZSBzZWN0aW9uVGl0bGVcIiArIHUgJSBpLm51bWJlclNlY3Rpb25TdHlsZXM7XG4gICAgICByZXR1cm4gXCJzZWN0aW9uVGl0bGVcIjtcbiAgICB9KTtcbiAgfVxuICBkKHAsIFwidmVydExhYmVsc1wiKTtcbiAgZnVuY3Rpb24gZyhoLCBELCB3LCBUKSB7XG4gICAgY29uc3QgdiA9IHIuZGIuZ2V0VG9kYXlNYXJrZXIoKTtcbiAgICBpZiAodiA9PT0gXCJvZmZcIilcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCB1ID0gWi5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRvZGF5XCIpLCBmID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCksIGIgPSB1LmFwcGVuZChcImxpbmVcIik7XG4gICAgYi5hdHRyKFwieDFcIiwgQShmKSArIGgpLmF0dHIoXCJ4MlwiLCBBKGYpICsgaCkuYXR0cihcInkxXCIsIGkudGl0bGVUb3BNYXJnaW4pLmF0dHIoXCJ5MlwiLCBUIC0gaS50aXRsZVRvcE1hcmdpbikuYXR0cihcImNsYXNzXCIsIFwidG9kYXlcIiksIHYgIT09IFwiXCIgJiYgYi5hdHRyKFwic3R5bGVcIiwgdi5yZXBsYWNlKC8sL2csIFwiO1wiKSk7XG4gIH1cbiAgZChnLCBcImRyYXdUb2RheVwiKTtcbiAgZnVuY3Rpb24geShoKSB7XG4gICAgY29uc3QgRCA9IHt9LCB3ID0gW107XG4gICAgZm9yIChsZXQgVCA9IDAsIHYgPSBoLmxlbmd0aDsgVCA8IHY7ICsrVClcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChELCBoW1RdKSB8fCAoRFtoW1RdXSA9ICEwLCB3LnB1c2goaFtUXSkpO1xuICAgIHJldHVybiB3O1xuICB9XG4gIGQoeSwgXCJjaGVja1VuaXF1ZVwiKTtcbn0sIFwiZHJhd1wiKSwgQXMgPSB7XG4gIHNldENvbmY6IEVzLFxuICBkcmF3OiBMc1xufSwgV3MgPSAvKiBAX19QVVJFX18gKi8gZCgodCkgPT4gYFxuICAubWVybWFpZC1tYWluLWZvbnQge1xuICAgICAgICBmb250LWZhbWlseTogJHt0LmZvbnRGYW1pbHl9O1xuICB9XG5cbiAgLmV4Y2x1ZGUtcmFuZ2Uge1xuICAgIGZpbGw6ICR7dC5leGNsdWRlQmtnQ29sb3J9O1xuICB9XG5cbiAgLnNlY3Rpb24ge1xuICAgIHN0cm9rZTogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjI7XG4gIH1cblxuICAuc2VjdGlvbjAge1xuICAgIGZpbGw6ICR7dC5zZWN0aW9uQmtnQ29sb3J9O1xuICB9XG5cbiAgLnNlY3Rpb24yIHtcbiAgICBmaWxsOiAke3Quc2VjdGlvbkJrZ0NvbG9yMn07XG4gIH1cblxuICAuc2VjdGlvbjEsXG4gIC5zZWN0aW9uMyB7XG4gICAgZmlsbDogJHt0LmFsdFNlY3Rpb25Ca2dDb2xvcn07XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG5cbiAgLnNlY3Rpb25UaXRsZTAge1xuICAgIGZpbGw6ICR7dC50aXRsZUNvbG9yfTtcbiAgfVxuXG4gIC5zZWN0aW9uVGl0bGUxIHtcbiAgICBmaWxsOiAke3QudGl0bGVDb2xvcn07XG4gIH1cblxuICAuc2VjdGlvblRpdGxlMiB7XG4gICAgZmlsbDogJHt0LnRpdGxlQ29sb3J9O1xuICB9XG5cbiAgLnNlY3Rpb25UaXRsZTMge1xuICAgIGZpbGw6ICR7dC50aXRsZUNvbG9yfTtcbiAgfVxuXG4gIC5zZWN0aW9uVGl0bGUge1xuICAgIHRleHQtYW5jaG9yOiBzdGFydDtcbiAgICBmb250LWZhbWlseTogJHt0LmZvbnRGYW1pbHl9O1xuICB9XG5cblxuICAvKiBHcmlkIGFuZCBheGlzICovXG5cbiAgLmdyaWQgLnRpY2sge1xuICAgIHN0cm9rZTogJHt0LmdyaWRDb2xvcn07XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcbiAgfVxuXG4gIC5ncmlkIC50aWNrIHRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAke3QuZm9udEZhbWlseX07XG4gICAgZmlsbDogJHt0LnRleHRDb2xvcn07XG4gIH1cblxuICAuZ3JpZCBwYXRoIHtcbiAgICBzdHJva2Utd2lkdGg6IDA7XG4gIH1cblxuXG4gIC8qIFRvZGF5IGxpbmUgKi9cblxuICAudG9kYXkge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAke3QudG9kYXlMaW5lQ29sb3J9O1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICB9XG5cblxuICAvKiBUYXNrIHN0eWxpbmcgKi9cblxuICAvKiBEZWZhdWx0IHRhc2sgKi9cblxuICAudGFzayB7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICB9XG5cbiAgLnRhc2tUZXh0IHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIGZvbnQtZmFtaWx5OiAke3QuZm9udEZhbWlseX07XG4gIH1cblxuICAudGFza1RleHRPdXRzaWRlUmlnaHQge1xuICAgIGZpbGw6ICR7dC50YXNrVGV4dERhcmtDb2xvcn07XG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xuICAgIGZvbnQtZmFtaWx5OiAke3QuZm9udEZhbWlseX07XG4gIH1cblxuICAudGFza1RleHRPdXRzaWRlTGVmdCB7XG4gICAgZmlsbDogJHt0LnRhc2tUZXh0RGFya0NvbG9yfTtcbiAgICB0ZXh0LWFuY2hvcjogZW5kO1xuICB9XG5cblxuICAvKiBTcGVjaWFsIGNhc2UgY2xpY2thYmxlICovXG5cbiAgLnRhc2suY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAudGFza1RleHQuY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsbDogJHt0LnRhc2tUZXh0Q2xpY2thYmxlQ29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAudGFza1RleHRPdXRzaWRlTGVmdC5jbGlja2FibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWxsOiAke3QudGFza1RleHRDbGlja2FibGVDb2xvcn0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC50YXNrVGV4dE91dHNpZGVSaWdodC5jbGlja2FibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWxsOiAke3QudGFza1RleHRDbGlja2FibGVDb2xvcn0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG5cbiAgLyogU3BlY2lmaWMgdGFzayBzZXR0aW5ncyBmb3IgdGhlIHNlY3Rpb25zKi9cblxuICAudGFza1RleHQwLFxuICAudGFza1RleHQxLFxuICAudGFza1RleHQyLFxuICAudGFza1RleHQzIHtcbiAgICBmaWxsOiAke3QudGFza1RleHRDb2xvcn07XG4gIH1cblxuICAudGFzazAsXG4gIC50YXNrMSxcbiAgLnRhc2syLFxuICAudGFzazMge1xuICAgIGZpbGw6ICR7dC50YXNrQmtnQ29sb3J9O1xuICAgIHN0cm9rZTogJHt0LnRhc2tCb3JkZXJDb2xvcn07XG4gIH1cblxuICAudGFza1RleHRPdXRzaWRlMCxcbiAgLnRhc2tUZXh0T3V0c2lkZTJcbiAge1xuICAgIGZpbGw6ICR7dC50YXNrVGV4dE91dHNpZGVDb2xvcn07XG4gIH1cblxuICAudGFza1RleHRPdXRzaWRlMSxcbiAgLnRhc2tUZXh0T3V0c2lkZTMge1xuICAgIGZpbGw6ICR7dC50YXNrVGV4dE91dHNpZGVDb2xvcn07XG4gIH1cblxuXG4gIC8qIEFjdGl2ZSB0YXNrICovXG5cbiAgLmFjdGl2ZTAsXG4gIC5hY3RpdmUxLFxuICAuYWN0aXZlMixcbiAgLmFjdGl2ZTMge1xuICAgIGZpbGw6ICR7dC5hY3RpdmVUYXNrQmtnQ29sb3J9O1xuICAgIHN0cm9rZTogJHt0LmFjdGl2ZVRhc2tCb3JkZXJDb2xvcn07XG4gIH1cblxuICAuYWN0aXZlVGV4dDAsXG4gIC5hY3RpdmVUZXh0MSxcbiAgLmFjdGl2ZVRleHQyLFxuICAuYWN0aXZlVGV4dDMge1xuICAgIGZpbGw6ICR7dC50YXNrVGV4dERhcmtDb2xvcn0gIWltcG9ydGFudDtcbiAgfVxuXG5cbiAgLyogQ29tcGxldGVkIHRhc2sgKi9cblxuICAuZG9uZTAsXG4gIC5kb25lMSxcbiAgLmRvbmUyLFxuICAuZG9uZTMge1xuICAgIHN0cm9rZTogJHt0LmRvbmVUYXNrQm9yZGVyQ29sb3J9O1xuICAgIGZpbGw6ICR7dC5kb25lVGFza0JrZ0NvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gIH1cblxuICAuZG9uZVRleHQwLFxuICAuZG9uZVRleHQxLFxuICAuZG9uZVRleHQyLFxuICAuZG9uZVRleHQzIHtcbiAgICBmaWxsOiAke3QudGFza1RleHREYXJrQ29sb3J9ICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIC8qIFRhc2tzIG9uIHRoZSBjcml0aWNhbCBsaW5lICovXG5cbiAgLmNyaXQwLFxuICAuY3JpdDEsXG4gIC5jcml0MixcbiAgLmNyaXQzIHtcbiAgICBzdHJva2U6ICR7dC5jcml0Qm9yZGVyQ29sb3J9O1xuICAgIGZpbGw6ICR7dC5jcml0QmtnQ29sb3J9O1xuICAgIHN0cm9rZS13aWR0aDogMjtcbiAgfVxuXG4gIC5hY3RpdmVDcml0MCxcbiAgLmFjdGl2ZUNyaXQxLFxuICAuYWN0aXZlQ3JpdDIsXG4gIC5hY3RpdmVDcml0MyB7XG4gICAgc3Ryb2tlOiAke3QuY3JpdEJvcmRlckNvbG9yfTtcbiAgICBmaWxsOiAke3QuYWN0aXZlVGFza0JrZ0NvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gIH1cblxuICAuZG9uZUNyaXQwLFxuICAuZG9uZUNyaXQxLFxuICAuZG9uZUNyaXQyLFxuICAuZG9uZUNyaXQzIHtcbiAgICBzdHJva2U6ICR7dC5jcml0Qm9yZGVyQ29sb3J9O1xuICAgIGZpbGw6ICR7dC5kb25lVGFza0JrZ0NvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcbiAgfVxuXG4gIC5taWxlc3RvbmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgsMC44KTtcbiAgfVxuXG4gIC5taWxlc3RvbmVUZXh0IHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgLmRvbmVDcml0VGV4dDAsXG4gIC5kb25lQ3JpdFRleHQxLFxuICAuZG9uZUNyaXRUZXh0MixcbiAgLmRvbmVDcml0VGV4dDMge1xuICAgIGZpbGw6ICR7dC50YXNrVGV4dERhcmtDb2xvcn0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC52ZXJ0IHtcbiAgICBzdHJva2U6ICR7dC52ZXJ0TGluZUNvbG9yfTtcbiAgfVxuXG4gIC52ZXJ0VGV4dCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgZmlsbDogJHt0LnZlcnRMaW5lQ29sb3J9ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWN0aXZlQ3JpdFRleHQwLFxuICAuYWN0aXZlQ3JpdFRleHQxLFxuICAuYWN0aXZlQ3JpdFRleHQyLFxuICAuYWN0aXZlQ3JpdFRleHQzIHtcbiAgICBmaWxsOiAke3QudGFza1RleHREYXJrQ29sb3J9ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGl0bGVUZXh0IHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmaWxsOiAke3QudGl0bGVDb2xvciB8fCB0LnRleHRDb2xvcn07XG4gICAgZm9udC1mYW1pbHk6ICR7dC5mb250RmFtaWx5fTtcbiAgfVxuYCwgXCJnZXRTdHlsZXNcIiksICRzID0gV3MsIFBzID0ge1xuICBwYXJzZXI6IEdpLFxuICBkYjogVXMsXG4gIHJlbmRlcmVyOiBBcyxcbiAgc3R5bGVzOiAkc1xufTtcbmV4cG9ydCB7XG4gIFBzIGFzIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsidCIsIkMiLCJwIiwiYW4iLCJXbiIsIm9uIiwiY24iLCJ1biIsImNlIiwiJG4iLCJHbiIsIkhlIiwiRiIsIlIiLCJqbiIsIlFuIiwiS24iLCJhZSIsImQiLCJydCIsIkJuIiwiVHQiLCJfdCIsIlpuIiwiWG4iLCJ6biIsIlZuIiwiUG4iLCJObiIsIkhuIiwiT24iLCJadCIsIlJuIiwiSm4iLCJxbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLFNBQVMsR0FBR0EsSUFBRyxHQUFHO0FBQ2hCLE1BQUk7QUFDSixNQUFJLE1BQU07QUFDUixlQUFXLEtBQUtBO0FBQ2QsV0FBSyxTQUFTLElBQUksS0FBSyxNQUFNLFVBQVUsS0FBSyxPQUFPLElBQUk7QUFBQSxPQUN0RDtBQUNILFFBQUksSUFBSTtBQUNSLGFBQVMsS0FBS0E7QUFDWixPQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBR0EsRUFBQyxNQUFNLFNBQVMsSUFBSSxLQUFLLE1BQU0sVUFBVSxLQUFLLE9BQU8sSUFBSTtBQUFBLEVBQzVFO0FBQ0EsU0FBTztBQUNUO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUc7QUFDaEIsTUFBSTtBQUNKLE1BQUksTUFBTTtBQUNSLGVBQVcsS0FBS0E7QUFDZCxXQUFLLFNBQVMsSUFBSSxLQUFLLE1BQU0sVUFBVSxLQUFLLE9BQU8sSUFBSTtBQUFBLE9BQ3REO0FBQ0gsUUFBSSxJQUFJO0FBQ1IsYUFBUyxLQUFLQTtBQUNaLE9BQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHQSxFQUFDLE1BQU0sU0FBUyxJQUFJLEtBQUssTUFBTSxVQUFVLEtBQUssT0FBTyxJQUFJO0FBQUEsRUFDNUU7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxTQUFTLEdBQUdBLElBQUc7QUFDYixTQUFPQTtBQUNUO0FBQ0EsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSztBQUN6QyxTQUFTLEdBQUdBLElBQUc7QUFDYixTQUFPLGVBQWVBLEtBQUk7QUFDNUI7QUFDQSxTQUFTLEdBQUdBLElBQUc7QUFDYixTQUFPLGlCQUFpQkEsS0FBSTtBQUM5QjtBQUNB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QSxHQUFFLEdBQUdBLEdBQUUsR0FBR0EsR0FBRSxHQUFHQSxHQUFFLEdBQUdBLEdBQUUsQ0FBQyxDQUFDO0FBQzdEO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixTQUFPLEVBQUUsR0FBR0EsSUFBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBQztBQUNuRDtBQUNBLFNBQVMsR0FBR0EsSUFBRztBQUNiLE1BQUksSUFBSUEsR0FBRSxVQUFVLElBQUlBLEdBQUUsTUFBTSxJQUFJQSxHQUFFLE1BQU0sSUFBSUEsR0FBRSxTQUFTLElBQUlBLEdBQUUsTUFBTSxJQUFJQSxHQUFFLFdBQVcsSUFBSUEsR0FBRSxRQUFRLElBQUlBLEdBQUUsYUFBYUMsS0FBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJO0FBQUEsSUFDek8sR0FBRztBQUFBLElBQ0gsR0FBR1c7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEtBQUs7QUFBQSxFQUNULEdBQUssSUFBSTtBQUFBLElBQ0wsR0FBR0M7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEtBQUs7QUFBQSxFQUNULEdBQUssSUFBSTtBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsS0FBSztBQUFBLEVBQ1Q7QUFDRSxJQUFFLElBQUlYLEdBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSUEsR0FBRSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUlBLEdBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSUEsR0FBRSxHQUFHLENBQUM7QUFDdkYsV0FBU0EsR0FBRSxHQUFHLEdBQUc7QUFDZixXQUFPLFNBQVMsR0FBRztBQUNqQixVQUFJLElBQUksQ0FBQSxHQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsR0FBRyxJQUFJO0FBQ2hELFdBQUssYUFBYSxTQUFTLElBQW9CLG9CQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJO0FBQ2xFLFVBQUUsV0FBVyxDQUFDLE1BQU0sT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sT0FBTyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxFQUFFLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUk7QUFDOUwsYUFBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFDQSxXQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBTyxTQUFTLEdBQUc7QUFDakIsVUFBSSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRztBQUN6RCxVQUFJLEtBQUssRUFBRSxPQUFRLFFBQU87QUFDMUIsVUFBSSxPQUFPLEVBQUcsUUFBTyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ2pDLFVBQUksT0FBTyxFQUFHLFFBQU8sSUFBSSxLQUFLLEVBQUUsSUFBSSxPQUFPLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRTtBQUM5RCxVQUFJLEtBQUssRUFBRSxPQUFPLE9BQU8sRUFBRSxJQUFJLElBQUksT0FBTyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxFQUFFLE1BQU0sV0FBVyxFQUFFLElBQUksT0FBTyxJQUFJLEVBQUUsSUFBSSxJQUFJLE9BQU8sR0FBRztBQUNsSSxZQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxHQUFJLFFBQU87QUFDaEMsZUFBTyxNQUFNLEVBQUUsSUFBSSxJQUFJLE9BQU8sS0FBSyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsVUFBUyxHQUFJLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxZQUFXLEdBQUksRUFBRSxJQUFJLEVBQUUsV0FBVSxLQUFNLEVBQUUsSUFBSSxLQUFLLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLE9BQU0sR0FBSSxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxZQUFXLEdBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFPLEtBQU0sRUFBRSxJQUFJLEtBQUs7QUFBQSxNQUNuYixNQUFPLEVBQUMsT0FBTyxLQUFLLE9BQU8sT0FBTyxPQUFPLE1BQU0sRUFBRSxJQUFJLE9BQU8sSUFBSSxFQUFFLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFTLElBQUssR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU0sR0FBSSxFQUFFLElBQUksR0FBRyxFQUFFLElBQUksT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksS0FBSztBQUNwUSxhQUFPLE9BQU8sS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO0FBQUEsSUFDMUU7QUFBQSxFQUNGO0FBQ0EsV0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDckIsYUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsSUFBSSxFQUFFLFFBQVEsR0FBRyxJQUFJLElBQUksS0FBSztBQUMxRCxVQUFJLEtBQUssRUFBRyxRQUFPO0FBQ25CLFVBQUksSUFBSSxFQUFFLFdBQVcsR0FBRyxHQUFHLE1BQU0sSUFBSTtBQUNuQyxZQUFJLElBQUksRUFBRSxPQUFPLEdBQUcsR0FBRyxLQUFLLEVBQUUsS0FBSyxLQUFLLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFHLFFBQU87QUFBQSxNQUNuRyxXQUFXLEtBQUssRUFBRSxXQUFXLEdBQUc7QUFDOUIsZUFBTztBQUFBLElBQ1g7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUNsQixRQUFJLElBQUlELEdBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCLFdBQU8sS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFlBQVcsQ0FBRSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVTtBQUFBLEVBQ2xFO0FBQ0EsV0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHO0FBQ2xCLFFBQUksSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN6QixXQUFPLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxZQUFXLENBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVU7QUFBQSxFQUNsRTtBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUNsQixRQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDekIsV0FBTyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsWUFBVyxDQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVO0FBQUEsRUFDbEU7QUFDQSxXQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUc7QUFDbEIsUUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCLFdBQU8sS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFlBQVcsQ0FBRSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVTtBQUFBLEVBQ2xFO0FBQ0EsV0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHO0FBQ2xCLFFBQUksSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN6QixXQUFPLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxZQUFXLENBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVU7QUFBQSxFQUNsRTtBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUNsQixXQUFPLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQ3JCO0FBQ0EsV0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHO0FBQ2xCLFdBQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDckI7QUFDQSxXQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUc7QUFDbEIsV0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxFQUNyQjtBQUNBLFdBQVMsRUFBRSxHQUFHO0FBQ1osV0FBTyxFQUFFLEVBQUUsUUFBUTtBQUFBLEVBQ3JCO0FBQ0EsV0FBU1csR0FBRSxHQUFHO0FBQ1osV0FBTyxFQUFFLEVBQUUsUUFBUTtBQUFBLEVBQ3JCO0FBQ0EsV0FBUyxFQUFFLEdBQUc7QUFDWixXQUFPLEVBQUUsRUFBRSxVQUFVO0FBQUEsRUFDdkI7QUFDQSxXQUFTLEVBQUUsR0FBRztBQUNaLFdBQU8sRUFBRSxFQUFFLFVBQVU7QUFBQSxFQUN2QjtBQUNBLFdBQVMsRUFBRSxHQUFHO0FBQ1osV0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFRLEtBQU0sR0FBRztBQUFBLEVBQ2hDO0FBQ0EsV0FBUyxFQUFFLEdBQUc7QUFDWixXQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUSxJQUFLO0FBQUEsRUFDL0I7QUFDQSxXQUFTQyxHQUFFLEdBQUc7QUFDWixXQUFPLEVBQUUsRUFBRSxXQUFXO0FBQUEsRUFDeEI7QUFDQSxXQUFTLEVBQUUsR0FBRztBQUNaLFdBQU8sRUFBRSxFQUFFLFdBQVc7QUFBQSxFQUN4QjtBQUNBLFdBQVMsRUFBRSxHQUFHO0FBQ1osV0FBTyxFQUFFLEVBQUUsYUFBYTtBQUFBLEVBQzFCO0FBQ0EsV0FBUyxFQUFFLEdBQUc7QUFDWixXQUFPLEVBQUUsRUFBRSxhQUFhO0FBQUEsRUFDMUI7QUFDQSxXQUFTLEVBQUUsR0FBRztBQUNaLFdBQU8sRUFBRSxFQUFFLEVBQUUsWUFBVyxLQUFNLEdBQUc7QUFBQSxFQUNuQztBQUNBLFdBQVMsR0FBRyxHQUFHO0FBQ2IsV0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVcsSUFBSztBQUFBLEVBQ2xDO0FBQ0EsU0FBTztBQUFBLElBQ0wsUUFBUSxTQUFTLEdBQUc7QUFDbEIsVUFBSSxJQUFJWCxHQUFFLEtBQUssSUFBSSxDQUFDO0FBQ3BCLGFBQU8sRUFBRSxXQUFXLFdBQVc7QUFDN0IsZUFBTztBQUFBLE1BQ1QsR0FBRztBQUFBLElBQ0w7QUFBQSxJQUNBLE9BQU8sU0FBUyxHQUFHO0FBQ2pCLFVBQUksSUFBSSxFQUFFLEtBQUssSUFBSSxLQUFFO0FBQ3JCLGFBQU8sRUFBRSxXQUFXLFdBQVc7QUFDN0IsZUFBTztBQUFBLE1BQ1QsR0FBRztBQUFBLElBQ0w7QUFBQSxJQUNBLFdBQVcsU0FBUyxHQUFHO0FBQ3JCLFVBQUksSUFBSUEsR0FBRSxLQUFLLElBQUksQ0FBQztBQUNwQixhQUFPLEVBQUUsV0FBVyxXQUFXO0FBQzdCLGVBQU87QUFBQSxNQUNULEdBQUc7QUFBQSxJQUNMO0FBQUEsSUFDQSxVQUFVLFNBQVMsR0FBRztBQUNwQixVQUFJLElBQUksRUFBRSxLQUFLLElBQUksSUFBRTtBQUNyQixhQUFPLEVBQUUsV0FBVyxXQUFXO0FBQzdCLGVBQU87QUFBQSxNQUNULEdBQUc7QUFBQSxJQUNMO0FBQUEsRUFDSjtBQUNBO0FBQ0EsSUFBSSxLQUFLLEVBQUUsS0FBSyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUcsR0FBSSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUs7QUFDdEUsU0FBUyxFQUFFRixJQUFHLEdBQUcsR0FBRztBQUNsQixNQUFJLElBQUlBLEtBQUksSUFBSSxNQUFNLElBQUksS0FBSyxJQUFJLENBQUNBLEtBQUlBLE1BQUssSUFBSSxJQUFJLEVBQUU7QUFDdkQsU0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJO0FBQ3pEO0FBQ0EsU0FBUyxHQUFHQSxJQUFHO0FBQ2IsU0FBT0EsR0FBRSxRQUFRLElBQUksTUFBTTtBQUM3QjtBQUNBLFNBQVMsR0FBR0EsSUFBRztBQUNiLFNBQU8sSUFBSSxPQUFPLFNBQVNBLEdBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLElBQUksS0FBSyxHQUFHO0FBQzNEO0FBQ0EsU0FBUyxHQUFHQSxJQUFHO0FBQ2IsU0FBTyxJQUFJLElBQUlBLEdBQUUsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUN0RDtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxTQUFPLEtBQUtBLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVTtBQUM5QztBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxTQUFPLEtBQUtBLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVTtBQUM5QztBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxTQUFPLEtBQUtBLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVTtBQUM5QztBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxTQUFPLEtBQUtBLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVTtBQUM5QztBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxTQUFPLEtBQUtBLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVTtBQUM5QztBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxTQUFPLEtBQUtBLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVTtBQUM5QztBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqQyxTQUFPLEtBQUtBLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxPQUFPLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVO0FBQzFFO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksK0JBQStCLEtBQUssRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDN0QsU0FBTyxLQUFLQSxHQUFFLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVO0FBQzVFO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFNBQU8sS0FBS0EsR0FBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVU7QUFDckQ7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRyxHQUFHO0FBQ25CLE1BQUksSUFBSSxHQUFHLEtBQUssRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakMsU0FBTyxLQUFLQSxHQUFFLElBQUksRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVU7QUFDakQ7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRyxHQUFHO0FBQ25CLE1BQUksSUFBSSxHQUFHLEtBQUssRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakMsU0FBTyxLQUFLQSxHQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVU7QUFDOUM7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRyxHQUFHO0FBQ25CLE1BQUksSUFBSSxHQUFHLEtBQUssRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakMsU0FBTyxLQUFLQSxHQUFFLElBQUksR0FBR0EsR0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVO0FBQ3ZEO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFNBQU8sS0FBS0EsR0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVO0FBQzlDO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFNBQU8sS0FBS0EsR0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVO0FBQzlDO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFNBQU8sS0FBS0EsR0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVO0FBQzlDO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFNBQU8sS0FBS0EsR0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVO0FBQzlDO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFNBQU8sS0FBS0EsR0FBRSxJQUFJLEtBQUssTUFBTSxFQUFFLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVO0FBQy9EO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFNBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVM7QUFDL0I7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRyxHQUFHO0FBQ25CLE1BQUksSUFBSSxHQUFHLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMxQixTQUFPLEtBQUtBLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVTtBQUM5QztBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFD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QUFLLFFBQU8sR0FBSSxDQUFDLEtBQUssTUFBTSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLFNBQVMsR0FBR1UsSUFBRyxHQUFHLEdBQUc7QUFDN0Ysa0JBQUk7QUFDRixvQkFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLFFBQVFBLEVBQUMsSUFBSSxHQUFJLFFBQU8sSUFBSSxNQUFNQSxPQUFNLE1BQU0sTUFBTSxLQUFLLENBQUM7QUFDekUsb0JBQUksSUFBSSxFQUFFQSxFQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFNQyxLQUFJLEVBQUUsT0FBTyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUUsT0FBTyxJQUFJLEVBQUUsU0FBUyxJQUFJLEVBQUUsU0FBUyxLQUFLLEVBQUUsY0FBYyxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsTUFBTSxJQUFvQixvQkFBSSxLQUFJLEdBQUksSUFBSSxNQUFNLEtBQUtBLEtBQUksSUFBSSxFQUFFLFFBQU8sSUFBSyxJQUFJLEtBQUssRUFBRSxZQUFXLEdBQUksSUFBSTtBQUNoUCxxQkFBSyxDQUFDQSxPQUFNLElBQUlBLEtBQUksSUFBSUEsS0FBSSxJQUFJLEVBQUU7QUFDbEMsb0JBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxLQUFLLEtBQUssR0FBRyxLQUFLLEtBQUssR0FBRyxLQUFLLE1BQU07QUFDeEQsdUJBQU8sSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTSxJQUFLO0FBQUEsY0FDMU0sUUFBUTtBQUNOLHVCQUF1Qixv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QUFHLEVBQUUsQ0FBQyxHQUFHLElBQUk7QUFDdkQ7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNEO0FBQUEsUUFDRixLQUFLO0FBQ0gsZUFBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDdEY7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMxRjtBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RGO0FBQUEsUUFDRixLQUFLO0FBQ0gsZUFBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUY7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMzQztBQUFBLFFBQ0YsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUNILGVBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQzdCO0FBQUEsUUFDRixLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQ0gsZUFBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQzlDO0FBQUEsUUFDRixLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQ0gsZUFBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUMvRDtBQUFBLE1BQ1Y7QUFBQSxJQUNJLEdBQUcsV0FBVztBQUFBLElBQ2QsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBS1osR0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSUMsSUFBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJQyxLQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksRUFBQyxHQUFJRixHQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFFLEdBQUdBLEdBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSUMsSUFBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJQyxLQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksRUFBQyxHQUFJRixHQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSUEsR0FBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBR0EsR0FBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBR0EsR0FBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBRSxHQUFHQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFFLEdBQUdBLEdB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QUssU0FBUTtBQUNiO0FBQUEsVUFDRixLQUFLO0FBQ0gsaUJBQUssU0FBUSxHQUFJLEtBQUssTUFBTSxjQUFjO0FBQzFDO0FBQUEsVUFDRixLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxpQkFBSyxTQUFRO0FBQ2I7QUFBQSxVQUNGLEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILGlCQUFLLE1BQU0sT0FBTztBQUNsQjtBQUFBLFVBQ0YsS0FBSztBQUNILGlCQUFLLFNBQVE7QUFDYjtBQUFBLFVBQ0YsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsUUFDbkI7QUFBQSxNQUNNLEdBQUcsV0FBVztBQUFBLE1BQ2QsT0FBTyxDQUFDLGNBQWMseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDBCQUEwQixjQUFjLGdCQUFnQix5QkFBeUIsd0JBQXdCLHdCQUF3QixlQUFlLGFBQWEsaUJBQWlCLHNCQUFzQixhQUFhLGVBQWUsbUJBQW1CLG1CQUFtQixZQUFZLGVBQWUsWUFBWSxlQUFlLG9CQUFvQixnQkFBZ0Isa0JBQWtCLGlCQUFpQiw4QkFBOEIsNkJBQTZCLG1CQUFtQiw4QkFBOEIsZ0NBQWdDLDRCQUE0Qiw0QkFBNEIsOEJBQThCLDRCQUE0Qiw2QkFBNkIsK0JBQStCLDhCQUE4Qiw0QkFBNEIsOEJBQThCLDRCQUE0Qiw0QkFBNEIsOEJBQThCLDhCQUE4Qix1QkFBdUIsa0NBQWtDLHlCQUF5QixpQkFBaUIsbUJBQW1CLFdBQVcsV0FBVyxTQUFTO0FBQUEsTUFDeHBDLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxNQUFFLEdBQUksV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsV0FBVyxNQUFFLEdBQUksV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsV0FBVyxNQUFFLEdBQUksY0FBYyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxjQUFjLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsV0FBVyxNQUFFLEdBQUksTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLFdBQVcsTUFBRSxHQUFJLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLFdBQVcsS0FBRSxFQUFFO0FBQUEsSUFDemhCO0FBQ0ksV0FBTztBQUFBLEVBQ1QsR0FBQztBQUNELElBQUUsUUFBUTtBQUNWLFdBQVMsSUFBSTtBQUNYLFNBQUssS0FBSyxDQUFBO0FBQUEsRUFDWjtBQUNBLFNBQU9NLEVBQUUsR0FBRyxRQUFRLEdBQUcsRUFBRSxZQUFZLEdBQUcsRUFBRSxTQUFTLEdBQUcsSUFBSSxFQUFDO0FBQzdELEdBQUM7QUFDRCxHQUFHLFNBQVM7QUFDWixJQUFJLEtBQUs7QUFDVEMsR0FBRyxPQUFPLEVBQUU7QUFDWkEsR0FBRyxPQUFPLEVBQUU7QUFDWkEsR0FBRyxPQUFPLEVBQUU7QUFDWixJQUFJLEtBQUssRUFBRSxRQUFRLEdBQUcsVUFBVSxFQUFDLEdBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUEsR0FBSSxLQUFxQixvQkFBSSxPQUFPLEtBQUssQ0FBQSxHQUFJLEtBQUssQ0FBQSxHQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsUUFBUSxRQUFRLGFBQWEsTUFBTSxHQUFHLEtBQUssQ0FBQSxHQUFJLEtBQUssT0FBSSxLQUFLLE9BQUksS0FBSyxVQUFVLEtBQUssWUFBWSxLQUFLLEdBQUcsS0FBcUJELGtCQUFFLFdBQVc7QUFDNVQsT0FBSyxDQUFBLEdBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssUUFBUSxLQUFLLFFBQVEsS0FBSyxDQUFBLEdBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxDQUFBLEdBQUksS0FBSyxPQUFJLEtBQUssT0FBSSxLQUFLLEdBQUcsS0FBcUIsb0JBQUksSUFBRyxHQUFJRSxHQUFFLEdBQUksS0FBSyxVQUFVLEtBQUs7QUFDeE8sR0FBRyxPQUFPLEdBQUcsS0FBcUJGLGtCQUFFLFNBQVNsQixJQUFHO0FBQzlDLE9BQUtBO0FBQ1AsR0FBRyxlQUFlLEdBQUcsS0FBcUJrQixrQkFBRSxXQUFXO0FBQ3JELFNBQU87QUFDVCxHQUFHLGVBQWUsR0FBRyxLQUFxQkEsa0JBQUUsU0FBU2xCLElBQUc7QUFDdEQsT0FBS0E7QUFDUCxHQUFHLGlCQUFpQixHQUFHLEtBQXFCa0Isa0JBQUUsV0FBVztBQUN2RCxTQUFPO0FBQ1QsR0FBRyxpQkFBaUIsR0FBRyxLQUFxQkEsa0JBQUUsU0FBU2xCLElBQUc7QUFDeEQsT0FBS0E7QUFDUCxHQUFHLGdCQUFnQixHQUFHLEtBQXFCa0Isa0JBQUUsV0FBVztBQUN0RCxTQUFPO0FBQ1QsR0FBRyxnQkFBZ0IsR0FBRyxLQUFxQkEsa0JBQUUsU0FBU2xCLElBQUc7QUFDdkQsT0FBS0E7QUFDUCxHQUFHLGVBQWUsR0FBRyxLQUFxQmtCLGtCQUFFLFdBQVc7QUFDckQsT0FBSztBQUNQLEdBQUcseUJBQXlCLEdBQUcsS0FBcUJBLGtCQUFFLFdBQVc7QUFDL0QsU0FBTztBQUNULEdBQUcsc0JBQXNCLEdBQUcsS0FBcUJBLGtCQUFFLFdBQVc7QUFDNUQsT0FBSztBQUNQLEdBQUcsZUFBZSxHQUFHLEtBQXFCQSxrQkFBRSxXQUFXO0FBQ3JELFNBQU87QUFDVCxHQUFHLGdCQUFnQixHQUFHLEtBQXFCQSxrQkFBRSxTQUFTbEIsSUFBRztBQUN2RCxPQUFLQTtBQUNQLEdBQUcsZ0JBQWdCLEdBQUcsS0FBcUJrQixrQkFBRSxXQUFXO0FBQ3RELFNBQU87QUFDVCxHQUFHLGdCQUFnQixHQUFHLEtBQXFCQSxrQkFBRSxXQUFXO0FBQ3RELFNBQU87QUFDVCxHQUFHLGVBQWUsR0FBRyxLQUFxQkEsa0JBQUUsU0FBU2xCLElBQUc7QUFDdEQsT0FBS0EsR0FBRSxjQUFjLE1BQU0sUUFBUTtBQUNyQyxHQUFHLGFBQWEsR0FBRyxLQUFxQmtCLGtCQUFFLFdBQVc7QUFDbkQsU0FBTztBQUNULEdBQUcsYUFBYSxHQUFHLEtBQXFCQSxrQkFBRSxTQUFTbEIsSUFBRztBQUNwRCxPQUFLQSxHQUFFLGNBQWMsTUFBTSxRQUFRO0FBQ3JDLEdBQUcsYUFBYSxHQUFHLEtBQXFCa0Isa0JBQUUsV0FBVztBQUNuRCxTQUFPO0FBQ1QsR0FBRyxhQUFhLEdBQUcsS0FBcUJBLGtCQUFFLFdBQVc7QUFDbkQsU0FBTztBQUNULEdBQUcsVUFBVSxHQUFHLEtBQXFCQSxrQkFBRSxTQUFTbEIsSUFBRztBQUNqRCxPQUFLQSxJQUFHLEdBQUcsS0FBS0EsRUFBQztBQUNuQixHQUFHLFlBQVksR0FBRyxLQUFxQmtCLGtCQUFFLFdBQVc7QUFDbEQsU0FBTztBQUNULEdBQUcsYUFBYSxHQUFHLEtBQXFCQSxrQkFBRSxXQUFXO0FBQ25ELE1BQUlsQixLQUFJLEdBQUU7QUFDVixRQUFNLElBQUk7QUFDVixNQUFJLElBQUk7QUFDUixTQUFPLENBQUNBLE1BQUssSUFBSTtBQUNmLElBQUFBLEtBQUksR0FBRSxHQUFJO0FBQ1osU0FBTyxLQUFLLElBQUk7QUFDbEIsR0FBRyxVQUFVLEdBQUcsS0FBcUJrQixrQkFBRSxTQUFTbEIsSUFBRyxHQUFHLEdBQUcsR0FBRztBQUMxRCxRQUFNLElBQUlBLEdBQUUsT0FBTyxFQUFFLE1BQU0sR0FBRyxJQUFJQSxHQUFFLE9BQU8sWUFBWTtBQUN2RCxTQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxRQUFLLEVBQUUsU0FBUyxVQUFVLE1BQU1BLEdBQUUsV0FBVSxNQUFPLEdBQUcsRUFBRSxLQUFLQSxHQUFFLFdBQVUsTUFBTyxHQUFHLEVBQUUsSUFBSSxNQUFNLEVBQUUsU0FBU0EsR0FBRSxPQUFPLE1BQU0sRUFBRSxZQUFXLENBQUUsSUFBSSxPQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUM7QUFDeE4sR0FBRyxlQUFlLEdBQUcsS0FBcUJrQixrQkFBRSxTQUFTbEIsSUFBRztBQUN0RCxPQUFLQTtBQUNQLEdBQUcsWUFBWSxHQUFHLEtBQXFCa0Isa0JBQUUsV0FBVztBQUNsRCxTQUFPO0FBQ1QsR0FBRyxZQUFZLEdBQUcsS0FBcUJBLGtCQUFFLFNBQVNsQixJQUFHO0FBQ25ELE9BQUtBO0FBQ1AsR0FBRyxZQUFZLEdBQUcsS0FBcUJrQixrQkFBRSxTQUFTbEIsSUFBRyxHQUFHLEdBQUcsR0FBRztBQUM1RCxNQUFJLENBQUMsRUFBRSxVQUFVQSxHQUFFO0FBQ2pCO0FBQ0YsTUFBSTtBQUNKLEVBQUFBLEdBQUUscUJBQXFCLE9BQU8sSUFBSW1CLEdBQUduQixHQUFFLFNBQVMsSUFBSSxJQUFJbUIsR0FBR25CLEdBQUUsV0FBVyxHQUFHLElBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSSxHQUFHLEdBQUc7QUFDaEcsTUFBSTtBQUNKLEVBQUFBLEdBQUUsbUJBQW1CLE9BQU8sSUFBSW1CLEdBQUduQixHQUFFLE9BQU8sSUFBSSxJQUFJbUIsR0FBR25CLEdBQUUsU0FBUyxHQUFHLElBQUU7QUFDdkUsUUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQ0UsRUFBQUEsR0FBRSxVQUFVLEVBQUUsT0FBTSxHQUFJQSxHQUFFLGdCQUFnQjtBQUM1QyxHQUFHLGdCQUFnQixHQUFHLEtBQXFCa0Isa0JBQUUsU0FBU2xCLElBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNuRSxNQUFJLElBQUksT0FBSSxJQUFJO0FBQ2hCLFNBQU9BLE1BQUs7QUFDVixVQUFNLElBQUksRUFBRSxXQUFXLElBQUksR0FBR0EsSUFBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLElBQUlBLEtBQUlBLEdBQUUsSUFBSSxHQUFHLEdBQUc7QUFDdkYsU0FBTyxDQUFDLEdBQUcsQ0FBQztBQUNkLEdBQUcsY0FBYyxHQUFHLEtBQXFCa0Isa0JBQUUsU0FBU2xCLElBQUcsR0FBRyxHQUFHO0FBQzNELE1BQUksSUFBSSxFQUFFLEtBQUksSUFBcUJrQixrQkFBRSxDQUFDLE1BQU07QUFDMUMsVUFBTSxJQUFJLEVBQUUsS0FBSTtBQUNoQixXQUFPLE1BQU0sT0FBTyxNQUFNO0FBQUEsRUFDNUIsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLEtBQUssUUFBUSxLQUFLLENBQUM7QUFDM0MsV0FBTyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7QUFDM0IsUUFBTSxJQUFJLDZCQUE2QixLQUFLLENBQUM7QUFDN0MsTUFBSSxNQUFNLE1BQU07QUFDZCxRQUFJLElBQUk7QUFDUixlQUFXakIsTUFBSyxFQUFFLE9BQU8sSUFBSSxNQUFNLEdBQUcsR0FBRztBQUN2QyxVQUFJLElBQUksR0FBR0EsRUFBQztBQUNaLFlBQU0sV0FBVyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsYUFBYSxJQUFJO0FBQUEsSUFDeEQ7QUFDQSxRQUFJO0FBQ0YsYUFBTyxFQUFFO0FBQ1gsVUFBTSxJQUFvQixvQkFBSSxLQUFJO0FBQ2xDLFdBQU8sRUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFBLEVBQ2pDO0FBQ0EsTUFBSSxJQUFJa0IsR0FBRyxHQUFHLEVBQUUsS0FBSSxHQUFJLElBQUU7QUFDMUIsTUFBSSxFQUFFLFFBQU87QUFDWCxXQUFPLEVBQUUsT0FBTTtBQUNqQjtBQUNFRSxNQUFHLE1BQU0sa0JBQWtCLENBQUMsR0FBR0EsRUFBRyxNQUFNLHNCQUFzQixFQUFFLE1BQU07QUFDdEUsVUFBTSxJQUFJLElBQUksS0FBSyxDQUFDO0FBQ3BCLFFBQUksTUFBTSxVQUFVLE1BQU0sRUFBRSxRQUFPLENBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS3JDLEVBQUUsWUFBVyxJQUFLLFFBQVEsRUFBRSxZQUFXLElBQUs7QUFDMUMsWUFBTSxJQUFJLE1BQU0sa0JBQWtCLENBQUM7QUFDckMsV0FBTztBQUFBLEVBQ1Q7QUFDRixHQUFHLGNBQWMsR0FBRyxLQUFxQkgsa0JBQUUsU0FBU2xCLElBQUc7QUFDckQsUUFBTSxJQUFJLGtDQUFrQyxLQUFLQSxHQUFFLEtBQUksQ0FBRTtBQUN6RCxTQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDbEUsR0FBRyxlQUFlLEdBQUcsS0FBcUJrQixrQkFBRSxTQUFTbEIsSUFBRyxHQUFHLEdBQUcsSUFBSSxPQUFJO0FBQ3BFLE1BQUksRUFBRSxLQUFJO0FBQ1YsUUFBTSxJQUFJLDZCQUE2QixLQUFLLENBQUM7QUFDN0MsTUFBSSxNQUFNLE1BQU07QUFDZCxRQUFJLElBQUk7QUFDUixlQUFXLEtBQUssRUFBRSxPQUFPLElBQUksTUFBTSxHQUFHLEdBQUc7QUFDdkMsVUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNaLFlBQU0sV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsZUFBZSxJQUFJO0FBQUEsSUFDNUQ7QUFDQSxRQUFJO0FBQ0YsYUFBTyxFQUFFO0FBQ1gsVUFBTSxJQUFvQixvQkFBSSxLQUFJO0FBQ2xDLFdBQU8sRUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFBLEVBQ2pDO0FBQ0EsTUFBSSxJQUFJbUIsR0FBRyxHQUFHLEVBQUUsS0FBSSxHQUFJLElBQUU7QUFDMUIsTUFBSSxFQUFFLFFBQU87QUFDWCxXQUFPLE1BQU0sSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLElBQUksRUFBRSxPQUFNO0FBQzNDLE1BQUksSUFBSUEsR0FBR25CLEVBQUM7QUFDWixRQUFNLENBQUMsR0FBR0MsRUFBQyxJQUFJLEdBQUcsQ0FBQztBQUNuQixNQUFJLENBQUMsT0FBTyxNQUFNLENBQUMsR0FBRztBQUNwQixVQUFNLElBQUksRUFBRSxJQUFJLEdBQUdBLEVBQUM7QUFDcEIsTUFBRSxRQUFPLE1BQU8sSUFBSTtBQUFBLEVBQ3RCO0FBQ0EsU0FBTyxFQUFFLE9BQU07QUFDakIsR0FBRyxZQUFZLEdBQUcsS0FBSyxHQUFHLEtBQXFCaUIsa0JBQUUsU0FBU2xCLElBQUc7QUFDM0QsU0FBT0EsT0FBTSxVQUFVLEtBQUssS0FBSyxHQUFHLFNBQVMsTUFBTUE7QUFDckQsR0FBRyxTQUFTLEdBQUcsS0FBcUJrQixrQkFBRSxTQUFTbEIsSUFBRyxHQUFHO0FBQ25ELE1BQUk7QUFDSixJQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sTUFBTSxJQUFJLEVBQUUsT0FBTyxHQUFHLEVBQUUsTUFBTSxJQUFJLElBQUk7QUFDekQsUUFBTSxJQUFJLEVBQUUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFBO0FBQzVCLEtBQUcsR0FBRyxHQUFHLEVBQUU7QUFDWCxXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUTtBQUM1QixNQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFJO0FBQ2xCLE1BQUksSUFBSTtBQUNSLFVBQVEsRUFBRSxRQUFNO0FBQUEsSUFDZCxLQUFLO0FBQ0gsUUFBRSxLQUFLLEdBQUUsR0FBSSxFQUFFLFlBQVlBLEdBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQztBQUM3QztBQUFBLElBQ0YsS0FBSztBQUNILFFBQUUsS0FBSyxHQUFFLEdBQUksRUFBRSxZQUFZLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDeEQ7QUFBQSxJQUNGLEtBQUs7QUFDSCxRQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsWUFBWSxHQUFHLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0FBQzVEO0FBQUEsRUFDTjtBQUNFLFNBQU8sTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLFdBQVcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLGdCQUFnQm1CLEdBQUcsR0FBRyxjQUFjLElBQUUsRUFBRSxRQUFPLEdBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLElBQUk7QUFDaEksR0FBRyxhQUFhLEdBQUcsS0FBcUJELGtCQUFFLFNBQVNsQixJQUFHLEdBQUc7QUFDdkQsTUFBSTtBQUNKLElBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxNQUFNLElBQUksRUFBRSxPQUFPLEdBQUcsRUFBRSxNQUFNLElBQUksSUFBSTtBQUN6RCxRQUFNLElBQUksRUFBRSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUE7QUFDNUIsS0FBRyxHQUFHLEdBQUcsRUFBRTtBQUNYLFdBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRO0FBQzVCLE1BQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUk7QUFDbEIsVUFBUSxFQUFFLFFBQU07QUFBQSxJQUNkLEtBQUs7QUFDSCxRQUFFLEtBQUssTUFBTSxFQUFFLFlBQVk7QUFBQSxRQUN6QixNQUFNO0FBQUEsUUFDTixJQUFJQTtBQUFBLE1BQ1osR0FBUyxFQUFFLFVBQVU7QUFBQSxRQUNiLE1BQU0sRUFBRSxDQUFDO0FBQUEsTUFDakI7QUFDTTtBQUFBLElBQ0YsS0FBSztBQUNILFFBQUUsS0FBSyxNQUFNLEVBQUUsWUFBWTtBQUFBLFFBQ3pCLE1BQU07QUFBQSxRQUNOLFdBQVcsRUFBRSxDQUFDO0FBQUEsTUFDdEIsR0FBUyxFQUFFLFVBQVU7QUFBQSxRQUNiLE1BQU0sRUFBRSxDQUFDO0FBQUEsTUFDakI7QUFDTTtBQUFBLElBQ0YsS0FBSztBQUNILFFBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxZQUFZO0FBQUEsUUFDN0IsTUFBTTtBQUFBLFFBQ04sV0FBVyxFQUFFLENBQUM7QUFBQSxNQUN0QixHQUFTLEVBQUUsVUFBVTtBQUFBLFFBQ2IsTUFBTSxFQUFFLENBQUM7QUFBQSxNQUNqQjtBQUNNO0FBQUEsRUFDTjtBQUNFLFNBQU87QUFDVCxHQUFHLFdBQVcsR0FBRyxJQUFJLElBQUksS0FBSyxDQUFBLEdBQUksS0FBSyxDQUFBLEdBQUksS0FBcUJrQixrQkFBRSxTQUFTbEIsSUFBRyxHQUFHO0FBQy9FLFFBQU0sSUFBSTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLElBQ2YsZUFBZTtBQUFBLElBQ2YsS0FBSyxFQUFFLE1BQU0sRUFBQztBQUFBLElBQ2QsTUFBTUE7QUFBQSxJQUNOLFNBQVMsQ0FBQTtBQUFBLEVBQ2IsR0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2YsSUFBRSxJQUFJLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsSUFBSTtBQUMzTSxRQUFNLElBQUksR0FBRyxLQUFLLENBQUM7QUFDbkIsT0FBSyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsSUFBSSxJQUFJO0FBQzVCLEdBQUcsU0FBUyxHQUFHLEtBQXFCa0Isa0JBQUUsU0FBU2xCLElBQUc7QUFDaEQsUUFBTSxJQUFJLEdBQUdBLEVBQUM7QUFDZCxTQUFPLEdBQUcsQ0FBQztBQUNiLEdBQUcsY0FBYyxHQUFHLEtBQXFCa0Isa0JBQUUsU0FBU2xCLElBQUcsR0FBRztBQUN4RCxRQUFNLElBQUk7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLGFBQWFBO0FBQUEsSUFDYixNQUFNQTtBQUFBLElBQ04sU0FBUyxDQUFBO0FBQUEsRUFDYixHQUFLLElBQUksR0FBRyxJQUFJLENBQUM7QUFDZixJQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sS0FBSyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ3JMLEdBQUcsWUFBWSxHQUFHLEtBQXFCa0Isa0JBQUUsV0FBVztBQUNsRCxRQUFNbEIsS0FBb0JrQixrQkFBRSxTQUFTLEdBQUc7QUFDdEMsVUFBTSxJQUFJLEdBQUcsQ0FBQztBQUNkLFFBQUksSUFBSTtBQUNSLFlBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxVQUFVLE1BQUk7QUFBQSxNQUM5QixLQUFLLGVBQWU7QUFDbEIsY0FBTSxJQUFJLEdBQUcsRUFBRSxVQUFVO0FBQ3pCLFVBQUUsWUFBWSxFQUFFO0FBQ2hCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUNILFlBQUksR0FBRyxRQUFRLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxVQUFVLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLFlBQVk7QUFDM0U7QUFBQSxJQUNSO0FBQ0ksV0FBTyxHQUFHLENBQUMsRUFBRSxjQUFjLEdBQUcsQ0FBQyxFQUFFLFVBQVU7QUFBQSxNQUN6QyxHQUFHLENBQUMsRUFBRTtBQUFBLE1BQ047QUFBQSxNQUNBLEdBQUcsQ0FBQyxFQUFFLElBQUksUUFBUTtBQUFBLE1BQ2xCO0FBQUEsSUFDTixHQUFPLEdBQUcsQ0FBQyxFQUFFLFlBQVksR0FBRyxDQUFDLEVBQUUsWUFBWSxNQUFJLEdBQUcsQ0FBQyxFQUFFLGdCQUFnQkM7QUFBQUEsTUFDL0QsR0FBRyxDQUFDLEVBQUUsSUFBSSxRQUFRO0FBQUEsTUFDbEI7QUFBQSxNQUNBO0FBQUEsSUFDTixFQUFNLFFBQU8sR0FBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUU7QUFBQSxFQUM5QyxHQUFHLGFBQWE7QUFDaEIsTUFBSSxJQUFJO0FBQ1IsYUFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBTztBQUM3QixJQUFBbkIsR0FBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsU0FBTztBQUNULEdBQUcsY0FBYyxHQUFHLEtBQXFCa0Isa0JBQUUsU0FBU2xCLElBQUcsR0FBRztBQUN4RCxNQUFJLElBQUk7QUFDUnNCLE9BQUUsRUFBRyxrQkFBa0IsWUFBWSxJQUFJQyxHQUFHLFlBQVksQ0FBQyxJQUFJdkIsR0FBRSxNQUFNLEdBQUcsRUFBRSxRQUFRLFNBQVMsR0FBRztBQUMxRixPQUFHLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBRyxNQUFNO0FBQy9CLGFBQU8sS0FBSyxHQUFHLE9BQU87QUFBQSxJQUN4QixDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztBQUFBLEVBQ2pCLENBQUMsR0FBRyxHQUFHQSxJQUFHLFdBQVc7QUFDdkIsR0FBRyxTQUFTLEdBQUcsS0FBcUJrQixrQkFBRSxTQUFTbEIsSUFBRyxHQUFHO0FBQ25ELEVBQUFBLEdBQUUsTUFBTSxHQUFHLEVBQUUsUUFBUSxTQUFTLEdBQUc7QUFDL0IsUUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNaLFVBQU0sVUFBVSxFQUFFLFFBQVEsS0FBSyxDQUFDO0FBQUEsRUFDbEMsQ0FBQztBQUNILEdBQUcsVUFBVSxHQUFHLEtBQXFCa0Isa0JBQUUsU0FBU2xCLElBQUcsR0FBRyxHQUFHO0FBQ3ZELE1BQUlzQixLQUFFLEVBQUcsa0JBQWtCLFdBQVcsTUFBTTtBQUMxQztBQUNGLE1BQUksSUFBSSxDQUFBO0FBQ1IsTUFBSSxPQUFPLEtBQUssVUFBVTtBQUN4QixRQUFJLEVBQUUsTUFBTSwrQkFBK0I7QUFDM0MsYUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxVQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSTtBQUNqQixRQUFFLFdBQVcsR0FBRyxLQUFLLEVBQUUsU0FBUyxHQUFHLE1BQU0sSUFBSSxFQUFFLE9BQU8sR0FBRyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJO0FBQUEsSUFDbEY7QUFBQSxFQUNGO0FBQ0EsSUFBRSxXQUFXLEtBQUssRUFBRSxLQUFLdEIsRUFBQyxHQUFHLEdBQUdBLEVBQUMsTUFBTSxVQUFVLEdBQUdBLElBQUcsTUFBTTtBQUMzRHdCLE9BQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQ3BCLENBQUM7QUFDSCxHQUFHLGFBQWEsR0FBRyxLQUFxQk4sa0JBQUUsU0FBU2xCLElBQUcsR0FBRztBQUN2RCxLQUFHO0FBQUEsSUFDRCxXQUFXO0FBQ1QsWUFBTSxJQUFJLFNBQVMsY0FBYyxRQUFRQSxFQUFDLElBQUk7QUFDOUMsWUFBTSxRQUFRLEVBQUUsaUJBQWlCLFNBQVMsV0FBVztBQUNuRCxVQUFDO0FBQUEsTUFDSCxDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsV0FBVztBQUNULFlBQU0sSUFBSSxTQUFTLGNBQWMsUUFBUUEsRUFBQyxTQUFTO0FBQ25ELFlBQU0sUUFBUSxFQUFFLGlCQUFpQixTQUFTLFdBQVc7QUFDbkQsVUFBQztBQUFBLE1BQ0gsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNKO0FBQ0EsR0FBRyxTQUFTLEdBQUcsS0FBcUJrQixrQkFBRSxTQUFTbEIsSUFBRyxHQUFHLEdBQUc7QUFDdEQsRUFBQUEsR0FBRSxNQUFNLEdBQUcsRUFBRSxRQUFRLFNBQVMsR0FBRztBQUMvQixPQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDWixDQUFDLEdBQUcsR0FBR0EsSUFBRyxXQUFXO0FBQ3ZCLEdBQUcsZUFBZSxHQUFHLEtBQXFCa0Isa0JBQUUsU0FBU2xCLElBQUc7QUFDdEQsS0FBRyxRQUFRLFNBQVMsR0FBRztBQUNyQixNQUFFQSxFQUFDO0FBQUEsRUFDTCxDQUFDO0FBQ0gsR0FBRyxlQUFlLEdBQUcsS0FBSztBQUFBLEVBQ3hCLFdBQTJCa0Isa0JBQUUsTUFBTUksS0FBRSxFQUFHLE9BQU8sV0FBVztBQUFBLEVBQzFELE9BQU87QUFBQSxFQUNQLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLHlCQUF5QjtBQUFBLEVBQ3pCLHNCQUFzQjtBQUFBLEVBQ3RCLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWFHO0FBQUFBLEVBQ2IsYUFBYUM7QUFBQUEsRUFDYixpQkFBaUJDO0FBQUFBLEVBQ2pCLGlCQUFpQkM7QUFBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CQztBQUFBQSxFQUNuQixtQkFBbUJDO0FBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFDZDtBQUNBLFNBQVMsR0FBRzlCLElBQUcsR0FBRyxHQUFHO0FBQ25CLE1BQUksSUFBSTtBQUNSLFNBQU87QUFDTCxRQUFJLE9BQUksRUFBRSxRQUFRLFNBQVMsR0FBRztBQUM1QixZQUFNLElBQUksVUFBVSxJQUFJLFNBQVMsSUFBSSxJQUFJLE9BQU8sQ0FBQztBQUNqRCxNQUFBQSxHQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxNQUFJQSxHQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUk7QUFBQSxJQUMvQyxDQUFDO0FBQ0w7QUFDQWtCLEVBQUUsSUFBSSxhQUFhO0FBQ25CQyxHQUFHLE9BQU8sRUFBRTtBQUNULElBQUMsS0FBcUJELGtCQUFFLFdBQVc7QUFDcENHLElBQUcsTUFBTSxnREFBZ0Q7QUFDM0QsR0FBRyxTQUFTLEdBQUcsS0FBSztBQUFBLEVBQ2xCLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFDVixHQUFHLEtBQXFCSCxrQkFBRSxDQUFDbEIsSUFBRyxNQUFNO0FBQ2xDLE1BQUksSUFBSSxDQUFDLEdBQUdBLEVBQUMsRUFBRSxJQUFJLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUdBLEVBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsS0FBSyxHQUFHLElBQUk7QUFDakgsYUFBVyxLQUFLO0FBQ2QsYUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVE7QUFDNUIsVUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDLEdBQUc7QUFDdkIsVUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUk7QUFDakQ7QUFBQSxNQUNGO0FBQ0osU0FBTztBQUNULEdBQUcscUJBQXFCLEdBQUcsSUFBSSxLQUFLLEtBQUssS0FBcUJrQixrQkFBRSxTQUFTbEIsSUFBRyxHQUFHLEdBQUcsR0FBRztBQUNuRixRQUFNLElBQUlzQixLQUFFLEVBQUcsT0FBTyxJQUFJQSxLQUFFLEVBQUc7QUFDL0IsTUFBSTtBQUNKLFFBQU0sY0FBYyxJQUFJUyxLQUFHLE9BQU8sQ0FBQztBQUNuQyxRQUFNLElBQUksTUFBTSxZQUFZQSxLQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLElBQUksSUFBSUEsS0FBRyxNQUFNLEdBQUcsSUFBSSxNQUFNLFlBQVksRUFBRSxNQUFLLEVBQUcsQ0FBQyxFQUFFLGtCQUFrQixVQUFVOUIsS0FBSSxFQUFFLGVBQWUsQ0FBQztBQUNySyxPQUFLQSxHQUFFLGNBQWMsYUFBYSxPQUFPLFdBQVcsS0FBSyxPQUFPLEVBQUUsYUFBYSxXQUFXLEtBQUssRUFBRTtBQUNqRyxRQUFNLElBQUksRUFBRSxHQUFHLFNBQVE7QUFDdkIsTUFBSSxJQUFJLENBQUE7QUFDUixhQUFXLEtBQUs7QUFDZCxNQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2YsTUFBSSxFQUFFLENBQUM7QUFDUCxRQUFNLElBQUksQ0FBQTtBQUNWLE1BQUksSUFBSSxJQUFJLEVBQUU7QUFDZCxNQUFJLEVBQUUsR0FBRyxlQUFjLE1BQU8sYUFBYSxFQUFFLGdCQUFnQixXQUFXO0FBQ3RFLFVBQU0sSUFBSSxDQUFBO0FBQ1YsZUFBVyxLQUFLO0FBQ2QsUUFBRSxFQUFFLE9BQU8sTUFBTSxTQUFTLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7QUFDcEUsUUFBSSxJQUFJO0FBQ1IsZUFBVyxLQUFLLE9BQU8sS0FBSyxDQUFDLEdBQUc7QUFDOUIsWUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJO0FBQ3hCLFdBQUssR0FBRyxLQUFLLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSTtBQUFBLElBQ3BEO0FBQUEsRUFDRixPQUFPO0FBQ0wsU0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUU7QUFDakMsZUFBVyxLQUFLO0FBQ2QsUUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFO0FBQUEsRUFDekM7QUFDQSxFQUFBQSxHQUFFLGFBQWEsV0FBVyxTQUFTLEtBQUssTUFBTSxDQUFDO0FBQy9DLFFBQU0sSUFBSSxFQUFFLE9BQU8sUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUUsRUFBRyxPQUFPO0FBQUEsSUFDakQsR0FBRyxHQUFHLFNBQVMsR0FBRztBQUNoQixhQUFPLEVBQUU7QUFBQSxJQUNYLENBQUM7QUFBQSxJQUNELEdBQUcsR0FBRyxTQUFTLEdBQUc7QUFDaEIsYUFBTyxFQUFFO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDTCxDQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsS0FBSyxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUM7QUFDdEQsV0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFVBQU0sSUFBSSxFQUFFLFdBQVcsSUFBSSxFQUFFO0FBQzdCLFFBQUksSUFBSTtBQUNSLFdBQU8sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxLQUFLO0FBQUEsRUFDNUM7QUFDQWlCLElBQUUsR0FBRyxhQUFhLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUdjLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxXQUFXLEdBQUcsRUFBRSxPQUFPLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxpQkFBaUIsRUFBRSxLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssU0FBUyxXQUFXO0FBQy9MLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUNsQixVQUFNLElBQUksRUFBRSxXQUFXLElBQUksSUFBSSxFQUFFLFFBQVEsSUFBSSxFQUFFLFlBQVksSUFBSSxFQUFFLGFBQWEsSUFBSUMsS0FBRSxFQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsU0FBUyxDQUFDLEVBQUUsWUFBWSxFQUFFO0FBQ3pKO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxFQUFFLEdBQUcsWUFBVztBQUFBLE1BQ2hCLEVBQUUsR0FBRyxZQUFXO0FBQUEsSUFDdEIsR0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRy9CLElBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDakU7QUFDQWdCLElBQUUsR0FBRyxXQUFXO0FBQ2hCLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzlCLE1BQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLElBQUksRUFBRSxPQUFPLElBQUksRUFBRTtBQUN4RCxVQUFNLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDckYsTUFBRSxPQUFPLEdBQUcsRUFBRSxVQUFVLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFLLEVBQUcsT0FBTyxNQUFNLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxLQUFLLEtBQUssU0FBUyxHQUFHLEdBQUc7QUFDbkcsYUFBTyxJQUFJLEVBQUUsT0FBTyxJQUFJLElBQUksSUFBSTtBQUFBLElBQ2xDLENBQUMsRUFBRSxLQUFLLFNBQVMsV0FBVztBQUMxQixhQUFPLElBQUksRUFBRSxlQUFlO0FBQUEsSUFDOUIsQ0FBQyxFQUFFLEtBQUssVUFBVSxDQUFDLEVBQUUsS0FBSyxTQUFTLFNBQVMsR0FBRztBQUM3QyxpQkFBVyxDQUFDLEdBQUdMLEVBQUMsS0FBSyxFQUFFLFFBQU87QUFDNUIsWUFBSSxFQUFFLFNBQVNBO0FBQ2IsaUJBQU8sb0JBQW9CLElBQUksRUFBRTtBQUNyQyxhQUFPO0FBQUEsSUFDVCxDQUFDLEVBQUUsTUFBSztBQUNSLFVBQU1ELEtBQUksRUFBRSxPQUFPLEdBQUcsRUFBRSxVQUFVLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFLLEdBQUksSUFBSSxFQUFFLEdBQUcsU0FBUTtBQUM1RSxRQUFJQSxHQUFFLE9BQU8sTUFBTSxFQUFFLEtBQUssTUFBTSxTQUFTLEdBQUc7QUFDMUMsYUFBTyxFQUFFO0FBQUEsSUFDWCxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLEtBQUssS0FBSyxTQUFTLEdBQUc7QUFDbkQsYUFBTyxFQUFFLFlBQVksRUFBRSxFQUFFLFNBQVMsSUFBSSxJQUFJLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsU0FBUyxLQUFLLE1BQU0sSUFBSSxFQUFFLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFDL0csQ0FBQyxFQUFFLEtBQUssS0FBSyxTQUFTLEdBQUcsR0FBRztBQUMxQixhQUFPLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixJQUFJLElBQUk7QUFBQSxJQUNoRSxDQUFDLEVBQUUsS0FBSyxTQUFTLFNBQVMsR0FBRztBQUMzQixhQUFPLEVBQUUsWUFBWSxJQUFJLEVBQUUsT0FBTyxPQUFPLElBQUksRUFBRSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsU0FBUztBQUFBLElBQzlGLENBQUMsRUFBRSxLQUFLLFVBQVUsU0FBUyxHQUFHO0FBQzVCLGFBQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxJQUFJO0FBQUEsSUFDMUUsQ0FBQyxFQUFFLEtBQUssb0JBQW9CLFNBQVMsR0FBRyxHQUFHO0FBQ3pDLGFBQU8sSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsSUFBSSxJQUFJLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsU0FBUyxJQUFJLFNBQVEsSUFBSyxTQUFTLElBQUksSUFBSSxJQUFJLE1BQU0sR0FBRyxTQUFRLElBQUs7QUFBQSxJQUMzSSxDQUFDLEVBQUUsS0FBSyxTQUFTLFNBQVMsR0FBRztBQUMzQixZQUFNLElBQUk7QUFDVixVQUFJQyxLQUFJO0FBQ1IsUUFBRSxRQUFRLFNBQVMsTUFBTUEsS0FBSSxFQUFFLFFBQVEsS0FBSyxHQUFHO0FBQy9DLFVBQUksSUFBSTtBQUNSLGlCQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFPO0FBQzVCLFVBQUUsU0FBUyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQzdCLFVBQUksSUFBSTtBQUNSLGFBQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxLQUFLLGdCQUFnQixJQUFJLFlBQVksRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLGNBQWMsSUFBSSxVQUFVLEVBQUUsU0FBUyxLQUFLLFVBQVUsRUFBRSxXQUFXLE1BQU0sSUFBSSxVQUFVLEVBQUUsY0FBYyxJQUFJLGdCQUFnQixJQUFJLEVBQUUsU0FBUyxJQUFJLFdBQVcsSUFBSSxLQUFLLEdBQUcsS0FBSyxNQUFNQSxJQUFHLElBQUk7QUFBQSxJQUMvUSxDQUFDLEdBQUdELEdBQUUsT0FBTyxNQUFNLEVBQUUsS0FBSyxNQUFNLFNBQVMsR0FBRztBQUMxQyxhQUFPLEVBQUUsS0FBSztBQUFBLElBQ2hCLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRztBQUNsQixhQUFPLEVBQUU7QUFBQSxJQUNYLENBQUMsRUFBRSxLQUFLLGFBQWEsRUFBRSxRQUFRLEVBQUUsS0FBSyxLQUFLLFNBQVMsR0FBRztBQUNyRCxVQUFJLElBQUksRUFBRSxFQUFFLFNBQVMsR0FBR0MsS0FBSSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsT0FBTztBQUMxRCxVQUFJLEVBQUUsY0FBYyxLQUFLLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsU0FBUyxLQUFLLE1BQU0sR0FBR0EsS0FBSSxJQUFJLElBQUksRUFBRTtBQUN0RixlQUFPLEVBQUUsRUFBRSxTQUFTLElBQUk7QUFDMUIsWUFBTSxJQUFJLEtBQUssUUFBTyxFQUFHO0FBQ3pCLGFBQU8sSUFBSUEsS0FBSSxJQUFJQSxLQUFJLElBQUksTUFBTSxFQUFFLGNBQWMsSUFBSSxJQUFJLElBQUksSUFBSUEsS0FBSSxJQUFJLEtBQUtBLEtBQUksS0FBSyxJQUFJLElBQUk7QUFBQSxJQUNqRyxDQUFDLEVBQUUsS0FBSyxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQzFCLGFBQU8sRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLE1BQU0sSUFBSSxFQUFFLE9BQU8sSUFBSSxJQUFJLEVBQUUsWUFBWSxLQUFLLEVBQUUsV0FBVyxJQUFJLEtBQUs7QUFBQSxJQUNySixDQUFDLEVBQUUsS0FBSyxlQUFlLENBQUMsRUFBRSxLQUFLLFNBQVMsU0FBUyxHQUFHO0FBQ2xELFlBQU0sSUFBSSxFQUFFLEVBQUUsU0FBUztBQUN2QixVQUFJQSxLQUFJLEVBQUUsRUFBRSxPQUFPO0FBQ25CLFFBQUUsY0FBY0EsS0FBSSxJQUFJO0FBQ3hCLFlBQU0sSUFBSSxLQUFLLFFBQU8sRUFBRztBQUN6QixVQUFJLElBQUk7QUFDUixRQUFFLFFBQVEsU0FBUyxNQUFNLElBQUksRUFBRSxRQUFRLEtBQUssR0FBRztBQUMvQyxVQUFJLElBQUk7QUFDUixpQkFBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBTztBQUM3QixVQUFFLFNBQVMsTUFBTSxJQUFJLEtBQUssRUFBRTtBQUM5QixVQUFJLElBQUk7QUFDUixhQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sSUFBSSxtQkFBbUIsSUFBSSxJQUFJLGVBQWUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLElBQUksSUFBSSxrQkFBa0IsSUFBSSxJQUFJLElBQUksY0FBYyxJQUFJLEVBQUUsU0FBUyxJQUFJLElBQUksY0FBYyxJQUFJLEVBQUUsY0FBYyxLQUFLLG1CQUFtQixFQUFFLFNBQVMsS0FBSyxjQUFjLElBQUlBLEtBQUksSUFBSUEsS0FBSSxJQUFJLE1BQU0sRUFBRSxjQUFjLElBQUksSUFBSSx5Q0FBeUMsSUFBSSxNQUFNLElBQUksSUFBSSwwQ0FBMEMsSUFBSSxNQUFNLElBQUksWUFBWSxJQUFJLElBQUksdUJBQXVCLElBQUksTUFBTSxJQUFJLFlBQVk7QUFBQSxJQUNoZixDQUFDLEdBQUdTLE9BQUssa0JBQWtCLFdBQVc7QUFDcEMsVUFBSTtBQUNKLFVBQUlTLEtBQUcsT0FBTyxDQUFDO0FBQ2YsWUFBTSxJQUFJLEVBQUUsTUFBSyxFQUFHLENBQUMsRUFBRTtBQUN2QixNQUFBbkIsR0FBRSxPQUFPLFNBQVNDLElBQUc7QUFDbkIsZUFBTyxFQUFFLElBQUlBLEdBQUUsRUFBRTtBQUFBLE1BQ25CLENBQUMsRUFBRSxLQUFLLFNBQVNBLElBQUc7QUFDbEIsWUFBSSxJQUFJLEVBQUUsY0FBYyxNQUFNQSxHQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsY0FBYyxNQUFNQSxHQUFFLEtBQUssT0FBTztBQUM3RSxjQUFNLElBQUksRUFBRTtBQUNaLFlBQUksSUFBSSxFQUFFLGNBQWMsR0FBRztBQUMzQixVQUFFLGFBQWEsY0FBYyxFQUFFLElBQUlBLEdBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxhQUFhLFVBQVUsTUFBTSxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQztBQUFBLE1BQ2xJLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNBSyxJQUFFLEdBQUcsV0FBVztBQUNoQixXQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ2pDLFFBQUksRUFBRSxXQUFXLEtBQUssRUFBRSxXQUFXO0FBQ2pDO0FBQ0YsUUFBSSxHQUFHTjtBQUNQLGVBQVcsRUFBRSxXQUFXLEdBQUcsU0FBUyxFQUFDLEtBQU07QUFDekMsT0FBQyxNQUFNLFVBQVUsSUFBSSxPQUFPLElBQUksS0FBS0EsUUFBTSxVQUFVLElBQUlBLFNBQU9BLE1BQUk7QUFDdEUsUUFBSSxDQUFDLEtBQUssQ0FBQ0E7QUFDVDtBQUNGLFFBQUlPLEdBQUdQLEdBQUMsRUFBRSxLQUFLTyxHQUFHLENBQUMsR0FBRyxNQUFNLElBQUksR0FBRztBQUNqQ0UsUUFBRztBQUFBLFFBQ0Q7QUFBQSxNQUNSO0FBQ007QUFBQSxJQUNGO0FBQ0EsVUFBTSxJQUFJLEVBQUUsR0FBRyxjQUFhLEdBQUksSUFBSSxDQUFBO0FBQ3BDLFFBQUksSUFBSSxNQUFNLElBQUlGLEdBQUcsQ0FBQztBQUN0QixXQUFPLEVBQUUsUUFBTyxLQUFNUDtBQUNwQixRQUFFLEdBQUcsY0FBYyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxJQUFJO0FBQUEsUUFDbkQsT0FBTztBQUFBLFFBQ1AsS0FBSztBQUFBLE1BQ2IsSUFBVSxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUksRUFBRSxJQUFJLEdBQUcsR0FBRztBQUNsRCxNQUFFLE9BQU8sR0FBRyxFQUFFLFVBQVUsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQUssRUFBRyxPQUFPLE1BQU0sRUFBRSxLQUFLLE1BQU0sQ0FBQyxNQUFNLGFBQWEsRUFBRSxNQUFNLE9BQU8sWUFBWSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssVUFBVSxJQUFJLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLG9CQUFvQixTQUFTLEdBQUcsR0FBRztBQUMzVyxjQUFRLEVBQUUsRUFBRSxLQUFLLElBQUksSUFBSSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEtBQUssSUFBSSxTQUFRLElBQUssU0FBUyxJQUFJLElBQUksTUFBTSxHQUFHLFNBQVEsSUFBSztBQUFBLElBQzlHLENBQUMsRUFBRSxLQUFLLFNBQVMsZUFBZTtBQUFBLEVBQ2xDO0FBQ0FNLElBQUUsR0FBRyxpQkFBaUI7QUFDdEIsV0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDckIsUUFBSSxLQUFLLEtBQUssSUFBSTtBQUNoQixhQUFPLElBQUk7QUFDYixVQUFNLElBQUksSUFBSSxHQUFHLElBQUlDLEdBQUcsU0FBUyxFQUFFLENBQUMsS0FBSyxLQUFLLEdBQUcsRUFBQyxDQUFFLEVBQUUsZUFBYztBQUNwRSxXQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztBQUFBLEVBQ3pDO0FBQ0FELElBQUUsR0FBRyx1QkFBdUI7QUFDNUIsV0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDckIsVUFBTSxJQUFJLEVBQUUsR0FBRyxjQUFhLEdBQUksSUFBSSxFQUFFLEdBQUcsY0FBYTtBQUN0RCxRQUFJO0FBQ0osUUFBSSxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksT0FBTyxJQUFJLEVBQUUsY0FBYztBQUN2RCxRQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLG9CQUFvQixFQUFFLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDeEUsVUFBTU4sTUFBSSw4REFBOEQ7QUFBQSxNQUN0RSxFQUFFLEdBQUcsZ0JBQWUsS0FBTSxFQUFFO0FBQUEsSUFDbEM7QUFDSSxRQUFJQSxRQUFNLE1BQU07QUFDZCxZQUFNLElBQUksU0FBU0EsSUFBRSxDQUFDLEdBQUcsRUFBRTtBQUMzQixVQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUs7QUFDbkJTLFVBQUc7QUFBQSxVQUNELGlDQUFpQ1QsSUFBRSxDQUFDLENBQUM7QUFBQSxRQUMvQztBQUFBLFdBQ1c7QUFDSCxjQUFNLElBQUlBLElBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLFdBQVUsS0FBTSxFQUFFLFNBQVMsSUFBSSxFQUFFLFVBQVVDLEtBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUVBLElBQUcsR0FBRyxHQUFHLENBQUM7QUFDeEcsWUFBSSxJQUFJO0FBQ05RLFlBQUc7QUFBQSxZQUNELHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyw4Q0FBOEMsRUFBRTtBQUFBLFVBQzVHO0FBQUE7QUFFVSxrQkFBUSxHQUFDO0FBQUEsWUFDUCxLQUFLO0FBQ0gsZ0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsWUFDRixLQUFLO0FBQ0gsZ0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsWUFDRixLQUFLO0FBQ0gsZ0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsWUFDRixLQUFLO0FBQ0gsZ0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsWUFDRixLQUFLO0FBQ0gsZ0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsWUFDRixLQUFLO0FBQ0gsZ0JBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QjtBQUFBLFlBQ0YsS0FBSztBQUNILGdCQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztBQUNuQjtBQUFBLFVBQ2Q7QUFBQSxNQUNNO0FBQUEsSUFDRjtBQUNBLFFBQUksRUFBRSxPQUFPLEdBQUcsRUFBRSxLQUFLLFNBQVMsTUFBTSxFQUFFLEtBQUssYUFBYSxlQUFlLElBQUksUUFBUSxJQUFJLE1BQU0sR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLFVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sRUFBRSxLQUFLLFVBQVUsTUFBTSxFQUFFLEtBQUssYUFBYSxFQUFFLEVBQUUsS0FBSyxNQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsZUFBYyxLQUFNLEVBQUUsU0FBUztBQUNwUixVQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLG9CQUFvQixFQUFFLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDeEUsVUFBSVQsUUFBTSxNQUFNO0FBQ2QsY0FBTSxJQUFJLFNBQVNBLElBQUUsQ0FBQyxHQUFHLEVBQUU7QUFDM0IsWUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLO0FBQ25CUyxZQUFHO0FBQUEsWUFDRCxpQ0FBaUNULElBQUUsQ0FBQyxDQUFDO0FBQUEsVUFDakQ7QUFBQSxhQUNhO0FBQ0gsZ0JBQU0sSUFBSUEsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsV0FBVSxLQUFNLEVBQUUsU0FBU0MsS0FBSSxFQUFFLE9BQU0sR0FBSSxJQUFJQSxHQUFFLENBQUMsR0FBRyxJQUFJQSxHQUFFLENBQUM7QUFDckYsY0FBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSztBQUNuQixvQkFBUSxHQUFDO0FBQUEsY0FDUCxLQUFLO0FBQ0gsa0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsY0FDRixLQUFLO0FBQ0gsa0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsY0FDRixLQUFLO0FBQ0gsa0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsY0FDRixLQUFLO0FBQ0gsa0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsY0FDRixLQUFLO0FBQ0gsa0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ25CO0FBQUEsY0FDRixLQUFLO0FBQ0gsa0JBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QjtBQUFBLGNBQ0YsS0FBSztBQUNILGtCQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztBQUNuQjtBQUFBLFlBQ2hCO0FBQUEsUUFDUTtBQUFBLE1BQ0Y7QUFDQSxRQUFFLE9BQU8sR0FBRyxFQUFFLEtBQUssU0FBUyxNQUFNLEVBQUUsS0FBSyxhQUFhLGVBQWUsSUFBSSxPQUFPLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLFVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sRUFBRSxLQUFLLFVBQVUsTUFBTSxFQUFFLEtBQUssYUFBYSxFQUFFO0FBQUEsSUFDcE47QUFBQSxFQUNGO0FBQ0FLLElBQUUsR0FBRyxVQUFVO0FBQ2YsV0FBU2hCLElBQUUsR0FBRyxHQUFHO0FBQ2YsUUFBSSxJQUFJO0FBQ1IsVUFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsTUFBRSxPQUFPLEdBQUcsRUFBRSxVQUFVLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFLLEVBQUcsT0FBTyxTQUFTLEdBQUc7QUFDakUsWUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU1nQyxLQUFHLGNBQWMsR0FBRyxJQUFJLEVBQUUsRUFBRSxTQUFTLEtBQUssR0FBRyxJQUFJLEVBQUUsZ0JBQWdCLDhCQUE4QixNQUFNO0FBQzVILFFBQUUsYUFBYSxNQUFNLElBQUksSUFBSTtBQUM3QixpQkFBVyxDQUFDLEdBQUd0QixFQUFDLEtBQUssRUFBRSxRQUFPLEdBQUk7QUFDaEMsY0FBTSxJQUFJLEVBQUUsZ0JBQWdCLDhCQUE4QixPQUFPO0FBQ2pFLFVBQUUsYUFBYSxzQkFBc0IsU0FBUyxHQUFHLEVBQUUsYUFBYSxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxhQUFhLE1BQU0sS0FBSyxHQUFHLEVBQUUsY0FBY0EsSUFBRyxFQUFFLFlBQVksQ0FBQztBQUFBLE1BQ3RKO0FBQ0EsYUFBTztBQUFBLElBQ1QsQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQ3hDLFVBQUksSUFBSTtBQUNOLGlCQUFTLElBQUksR0FBRyxJQUFJLEdBQUc7QUFDckIsaUJBQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQUE7QUFFbEQsZUFBTyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUk7QUFBQSxJQUMxQixDQUFDLEVBQUUsS0FBSyxhQUFhLEVBQUUsZUFBZSxFQUFFLEtBQUssU0FBUyxTQUFTLEdBQUc7QUFDaEUsaUJBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQU87QUFDNUIsWUFBSSxFQUFFLENBQUMsTUFBTTtBQUNYLGlCQUFPLDhCQUE4QixJQUFJLEVBQUU7QUFDL0MsYUFBTztBQUFBLElBQ1QsQ0FBQztBQUFBLEVBQ0g7QUFDQU0sSUFBRWhCLEtBQUcsWUFBWTtBQUNqQixXQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNyQixVQUFNLElBQUksRUFBRSxHQUFHLGVBQWM7QUFDN0IsUUFBSSxNQUFNO0FBQ1I7QUFDRixVQUFNLElBQUksRUFBRSxPQUFPLEdBQUcsRUFBRSxLQUFLLFNBQVMsT0FBTyxHQUFHLElBQW9CLG9CQUFJLEtBQUksR0FBSSxJQUFJLEVBQUUsT0FBTyxNQUFNO0FBQ25HLE1BQUUsS0FBSyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLE1BQU0sSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLFNBQVMsT0FBTyxHQUFHLE1BQU0sTUFBTSxFQUFFLEtBQUssU0FBUyxFQUFFLFFBQVEsTUFBTSxHQUFHLENBQUM7QUFBQSxFQUNwTDtBQUNBZ0IsSUFBRSxHQUFHLFdBQVc7QUFDaEIsV0FBUyxFQUFFLEdBQUc7QUFDWixVQUFNLElBQUksSUFBSSxJQUFJLENBQUE7QUFDbEIsYUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDckMsYUFBTyxVQUFVLGVBQWUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLE1BQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzdFLFdBQU87QUFBQSxFQUNUO0FBQ0FBLElBQUUsR0FBRyxhQUFhO0FBQ3BCLEdBQUcsTUFBTSxHQUFHLEtBQUs7QUFBQSxFQUNmLFNBQVM7QUFBQSxFQUNULE1BQU07QUFDUixHQUFHLEtBQXFCQSxrQkFBRSxDQUFDbEIsT0FBTTtBQUFBO0FBQUEsdUJBRVZBLEdBQUUsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSXZCQSxHQUFFLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFTakJBLEdBQUUsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSWpCQSxHQUFFLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFLbEJBLEdBQUUsa0JBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUtwQkEsR0FBRSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFJWkEsR0FBRSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFJWkEsR0FBRSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFJWkEsR0FBRSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFLTEEsR0FBRSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FPakJBLEdBQUUsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFNTkEsR0FBRSxVQUFVO0FBQUEsWUFDbkJBLEdBQUUsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVlUQSxHQUFFLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZVhBLEdBQUUsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSW5CQSxHQUFFLGlCQUFpQjtBQUFBO0FBQUEsbUJBRVpBLEdBQUUsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSW5CQSxHQUFFLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYW5CQSxHQUFFLHNCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU14QkEsR0FBRSxzQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFNeEJBLEdBQUUsc0JBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVd4QkEsR0FBRSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFPZkEsR0FBRSxZQUFZO0FBQUEsY0FDWkEsR0FBRSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTW5CQSxHQUFFLG9CQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFLdEJBLEdBQUUsb0JBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFVdEJBLEdBQUUsa0JBQWtCO0FBQUEsY0FDbEJBLEdBQUUscUJBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFPekJBLEdBQUUsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FVakJBLEdBQUUsbUJBQW1CO0FBQUEsWUFDdkJBLEdBQUUsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVFsQkEsR0FBRSxpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVVqQkEsR0FBRSxlQUFlO0FBQUEsWUFDbkJBLEdBQUUsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FRWkEsR0FBRSxlQUFlO0FBQUEsWUFDbkJBLEdBQUUsa0JBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVFsQkEsR0FBRSxlQUFlO0FBQUEsWUFDbkJBLEdBQUUsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWlCbEJBLEdBQUUsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FJakJBLEdBQUUsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU1qQkEsR0FBRSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFPZkEsR0FBRSxpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFNbkJBLEdBQUUsY0FBY0EsR0FBRSxTQUFTO0FBQUEsbUJBQ3BCQSxHQUFFLFVBQVU7QUFBQTtBQUFBLEdBRTVCLFdBQVcsR0FBRyxLQUFLLElBQUksS0FBSztBQUFBLEVBQzdCLFFBQVE7QUFBQSxFQUNSLElBQUk7QUFBQSxFQUNKLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFDVjsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
