import { p, r as Ey, s as Fy, a as My, d as $y, g as Ay, e as Ly, f as ft$1, z as cL, h as ht$1, bk as ky, y as By, Q as Qr } from "./SynchronicGraphPage-DxVkn-Wr.js";
import { h } from "./ordinal-B6-f3MAq-CMRnLSJI.js";
import "./QPage-DqT9wM0J.js";
import "./index-BO5Be59b.js";
import "./QBtnToggle-rDgfktvc.js";
import "./QBtnGroup-DaK3XEVt.js";
import "./QToolbar-CyhqXLd-.js";
import "./export-file-lpTZqdHO.js";
import "./init-DjUOC4st-BkHeCwco.js";
function Nt(t) {
  for (var e = t.length / 6 | 0, i = new Array(e), a = 0; a < e; ) i[a] = "#" + t.slice(a * 6, ++a * 6);
  return i;
}
const It = Nt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ct(t, e) {
  let i;
  if (e === void 0)
    for (const a of t)
      a != null && (i < a || i === void 0 && a >= a) && (i = a);
  else {
    let a = -1;
    for (let h2 of t)
      (h2 = e(h2, ++a, t)) != null && (i < h2 || i === void 0 && h2 >= h2) && (i = h2);
  }
  return i;
}
function pt(t, e) {
  let i;
  if (e === void 0)
    for (const a of t)
      a != null && (i > a || i === void 0 && a >= a) && (i = a);
  else {
    let a = -1;
    for (let h2 of t)
      (h2 = e(h2, ++a, t)) != null && (i > h2 || i === void 0 && h2 >= h2) && (i = h2);
  }
  return i;
}
function nt(t, e) {
  let i = 0;
  if (e === void 0)
    for (let a of t)
      (a = +a) && (i += a);
  else {
    let a = -1;
    for (let h2 of t)
      (h2 = +e(h2, ++a, t)) && (i += h2);
  }
  return i;
}
function Pt(t) {
  return t.target.depth;
}
function Ct(t) {
  return t.depth;
}
function Ot(t, e) {
  return e - 1 - t.height;
}
function mt(t, e) {
  return t.sourceLinks.length ? t.depth : e - 1;
}
function zt(t) {
  return t.targetLinks.length ? t.depth : t.sourceLinks.length ? pt(t.sourceLinks, Pt) - 1 : 0;
}
function X(t) {
  return function() {
    return t;
  };
}
function ut(t, e) {
  return Q(t.source, e.source) || t.index - e.index;
}
function ht(t, e) {
  return Q(t.target, e.target) || t.index - e.index;
}
function Q(t, e) {
  return t.y0 - e.y0;
}
function it(t) {
  return t.value;
}
function Dt(t) {
  return t.index;
}
function $t(t) {
  return t.nodes;
}
function jt(t) {
  return t.links;
}
function ft(t, e) {
  const i = t.get(e);
  if (!i) throw new Error("missing: " + e);
  return i;
}
function yt({ nodes: t }) {
  for (const e of t) {
    let i = e.y0, a = i;
    for (const h2 of e.sourceLinks)
      h2.y0 = i + h2.width / 2, i += h2.width;
    for (const h2 of e.targetLinks)
      h2.y1 = a + h2.width / 2, a += h2.width;
  }
}
function Bt() {
  let t = 0, e = 0, i = 1, a = 1, h2 = 24, b = 8, p2, k = Dt, s = mt, o, l, _ = $t, x = jt, y = 6;
  function v() {
    const n = { nodes: _.apply(null, arguments), links: x.apply(null, arguments) };
    return M(n), T(n), N(n), C(n), S(n), yt(n), n;
  }
  v.update = function(n) {
    return yt(n), n;
  }, v.nodeId = function(n) {
    return arguments.length ? (k = typeof n == "function" ? n : X(n), v) : k;
  }, v.nodeAlign = function(n) {
    return arguments.length ? (s = typeof n == "function" ? n : X(n), v) : s;
  }, v.nodeSort = function(n) {
    return arguments.length ? (o = n, v) : o;
  }, v.nodeWidth = function(n) {
    return arguments.length ? (h2 = +n, v) : h2;
  }, v.nodePadding = function(n) {
    return arguments.length ? (b = p2 = +n, v) : b;
  }, v.nodes = function(n) {
    return arguments.length ? (_ = typeof n == "function" ? n : X(n), v) : _;
  }, v.links = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : X(n), v) : x;
  }, v.linkSort = function(n) {
    return arguments.length ? (l = n, v) : l;
  }, v.size = function(n) {
    return arguments.length ? (t = e = 0, i = +n[0], a = +n[1], v) : [i - t, a - e];
  }, v.extent = function(n) {
    return arguments.length ? (t = +n[0][0], i = +n[1][0], e = +n[0][1], a = +n[1][1], v) : [[t, e], [i, a]];
  }, v.iterations = function(n) {
    return arguments.length ? (y = +n, v) : y;
  };
  function M({ nodes: n, links: f }) {
    for (const [c, r] of n.entries())
      r.index = c, r.sourceLinks = [], r.targetLinks = [];
    const u = new Map(n.map((c, r) => [k(c, r, n), c]));
    for (const [c, r] of f.entries()) {
      r.index = c;
      let { source: m, target: w } = r;
      typeof m != "object" && (m = r.source = ft(u, m)), typeof w != "object" && (w = r.target = ft(u, w)), m.sourceLinks.push(r), w.targetLinks.push(r);
    }
    if (l != null)
      for (const { sourceLinks: c, targetLinks: r } of n)
        c.sort(l), r.sort(l);
  }
  function T({ nodes: n }) {
    for (const f of n)
      f.value = f.fixedValue === void 0 ? Math.max(nt(f.sourceLinks, it), nt(f.targetLinks, it)) : f.fixedValue;
  }
  function N({ nodes: n }) {
    const f = n.length;
    let u = new Set(n), c = /* @__PURE__ */ new Set(), r = 0;
    for (; u.size; ) {
      for (const m of u) {
        m.depth = r;
        for (const { target: w } of m.sourceLinks)
          c.add(w);
      }
      if (++r > f) throw new Error("circular link");
      u = c, c = /* @__PURE__ */ new Set();
    }
  }
  function C({ nodes: n }) {
    const f = n.length;
    let u = new Set(n), c = /* @__PURE__ */ new Set(), r = 0;
    for (; u.size; ) {
      for (const m of u) {
        m.height = r;
        for (const { source: w } of m.targetLinks)
          c.add(w);
      }
      if (++r > f) throw new Error("circular link");
      u = c, c = /* @__PURE__ */ new Set();
    }
  }
  function D({ nodes: n }) {
    const f = ct(n, (r) => r.depth) + 1, u = (i - t - h2) / (f - 1), c = new Array(f);
    for (const r of n) {
      const m = Math.max(0, Math.min(f - 1, Math.floor(s.call(null, r, f))));
      r.layer = m, r.x0 = t + m * u, r.x1 = r.x0 + h2, c[m] ? c[m].push(r) : c[m] = [r];
    }
    if (o) for (const r of c)
      r.sort(o);
    return c;
  }
  function R(n) {
    const f = pt(n, (u) => (a - e - (u.length - 1) * p2) / nt(u, it));
    for (const u of n) {
      let c = e;
      for (const r of u) {
        r.y0 = c, r.y1 = c + r.value * f, c = r.y1 + p2;
        for (const m of r.sourceLinks)
          m.width = m.value * f;
      }
      c = (a - c + p2) / (u.length + 1);
      for (let r = 0; r < u.length; ++r) {
        const m = u[r];
        m.y0 += c * (r + 1), m.y1 += c * (r + 1);
      }
      A(u);
    }
  }
  function S(n) {
    const f = D(n);
    p2 = Math.min(b, (a - e) / (ct(f, (u) => u.length) - 1)), R(f);
    for (let u = 0; u < y; ++u) {
      const c = Math.pow(0.99, u), r = Math.max(1 - c, (u + 1) / y);
      B(f, c, r), P(f, c, r);
    }
  }
  function P(n, f, u) {
    for (let c = 1, r = n.length; c < r; ++c) {
      const m = n[c];
      for (const w of m) {
        let L = 0, V = 0;
        for (const { source: Y, value: et } of w.targetLinks) {
          let q = et * (w.layer - Y.layer);
          L += $(Y, w) * q, V += q;
        }
        if (!(V > 0)) continue;
        let G = (L / V - w.y0) * f;
        w.y0 += G, w.y1 += G, E(w);
      }
      o === void 0 && m.sort(Q), O(m, u);
    }
  }
  function B(n, f, u) {
    for (let c = n.length, r = c - 2; r >= 0; --r) {
      const m = n[r];
      for (const w of m) {
        let L = 0, V = 0;
        for (const { target: Y, value: et } of w.sourceLinks) {
          let q = et * (Y.layer - w.layer);
          L += I(w, Y) * q, V += q;
        }
        if (!(V > 0)) continue;
        let G = (L / V - w.y0) * f;
        w.y0 += G, w.y1 += G, E(w);
      }
      o === void 0 && m.sort(Q), O(m, u);
    }
  }
  function O(n, f) {
    const u = n.length >> 1, c = n[u];
    d(n, c.y0 - p2, u - 1, f), z(n, c.y1 + p2, u + 1, f), d(n, a, n.length - 1, f), z(n, e, 0, f);
  }
  function z(n, f, u, c) {
    for (; u < n.length; ++u) {
      const r = n[u], m = (f - r.y0) * c;
      m > 1e-6 && (r.y0 += m, r.y1 += m), f = r.y1 + p2;
    }
  }
  function d(n, f, u, c) {
    for (; u >= 0; --u) {
      const r = n[u], m = (r.y1 - f) * c;
      m > 1e-6 && (r.y0 -= m, r.y1 -= m), f = r.y0 - p2;
    }
  }
  function E({ sourceLinks: n, targetLinks: f }) {
    if (l === void 0) {
      for (const { source: { sourceLinks: u } } of f)
        u.sort(ht);
      for (const { target: { targetLinks: u } } of n)
        u.sort(ut);
    }
  }
  function A(n) {
    if (l === void 0)
      for (const { sourceLinks: f, targetLinks: u } of n)
        f.sort(ht), u.sort(ut);
  }
  function $(n, f) {
    let u = n.y0 - (n.sourceLinks.length - 1) * p2 / 2;
    for (const { target: c, width: r } of n.sourceLinks) {
      if (c === f) break;
      u += r + p2;
    }
    for (const { source: c, width: r } of f.targetLinks) {
      if (c === n) break;
      u -= r;
    }
    return u;
  }
  function I(n, f) {
    let u = f.y0 - (f.targetLinks.length - 1) * p2 / 2;
    for (const { source: c, width: r } of f.targetLinks) {
      if (c === n) break;
      u += r + p2;
    }
    for (const { target: c, width: r } of n.sourceLinks) {
      if (c === f) break;
      u -= r;
    }
    return u;
  }
  return v;
}
var st = Math.PI, rt = 2 * st, F = 1e-6, Rt = rt - F;
function ot() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function kt() {
  return new ot();
}
ot.prototype = kt.prototype = {
  constructor: ot,
  moveTo: function(t, e) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(t, e) {
    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
  },
  quadraticCurveTo: function(t, e, i, a) {
    this._ += "Q" + +t + "," + +e + "," + (this._x1 = +i) + "," + (this._y1 = +a);
  },
  bezierCurveTo: function(t, e, i, a, h2, b) {
    this._ += "C" + +t + "," + +e + "," + +i + "," + +a + "," + (this._x1 = +h2) + "," + (this._y1 = +b);
  },
  arcTo: function(t, e, i, a, h2) {
    t = +t, e = +e, i = +i, a = +a, h2 = +h2;
    var b = this._x1, p2 = this._y1, k = i - t, s = a - e, o = b - t, l = p2 - e, _ = o * o + l * l;
    if (h2 < 0) throw new Error("negative radius: " + h2);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
    else if (_ > F) if (!(Math.abs(l * k - s * o) > F) || !h2)
      this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
    else {
      var x = i - b, y = a - p2, v = k * k + s * s, M = x * x + y * y, T = Math.sqrt(v), N = Math.sqrt(_), C = h2 * Math.tan((st - Math.acos((v + _ - M) / (2 * T * N))) / 2), D = C / N, R = C / T;
      Math.abs(D - 1) > F && (this._ += "L" + (t + D * o) + "," + (e + D * l)), this._ += "A" + h2 + "," + h2 + ",0,0," + +(l * x > o * y) + "," + (this._x1 = t + R * k) + "," + (this._y1 = e + R * s);
    }
  },
  arc: function(t, e, i, a, h2, b) {
    t = +t, e = +e, i = +i, b = !!b;
    var p2 = i * Math.cos(a), k = i * Math.sin(a), s = t + p2, o = e + k, l = 1 ^ b, _ = b ? a - h2 : h2 - a;
    if (i < 0) throw new Error("negative radius: " + i);
    this._x1 === null ? this._ += "M" + s + "," + o : (Math.abs(this._x1 - s) > F || Math.abs(this._y1 - o) > F) && (this._ += "L" + s + "," + o), i && (_ < 0 && (_ = _ % rt + rt), _ > Rt ? this._ += "A" + i + "," + i + ",0,1," + l + "," + (t - p2) + "," + (e - k) + "A" + i + "," + i + ",0,1," + l + "," + (this._x1 = s) + "," + (this._y1 = o) : _ > F && (this._ += "A" + i + "," + i + ",0," + +(_ >= st) + "," + l + "," + (this._x1 = t + i * Math.cos(h2)) + "," + (this._y1 = e + i * Math.sin(h2))));
  },
  rect: function(t, e, i, a) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +i + "v" + +a + "h" + -i + "Z";
  },
  toString: function() {
    return this._;
  }
};
function dt(t) {
  return function() {
    return t;
  };
}
function Vt(t) {
  return t[0];
}
function Ft(t) {
  return t[1];
}
var Wt = Array.prototype.slice;
function Ut(t) {
  return t.source;
}
function Gt(t) {
  return t.target;
}
function Yt(t) {
  var e = Ut, i = Gt, a = Vt, h2 = Ft, b = null;
  function p2() {
    var k, s = Wt.call(arguments), o = e.apply(this, s), l = i.apply(this, s);
    if (b || (b = k = kt()), t(b, +a.apply(this, (s[0] = o, s)), +h2.apply(this, s), +a.apply(this, (s[0] = l, s)), +h2.apply(this, s)), k) return b = null, k + "" || null;
  }
  return p2.source = function(k) {
    return arguments.length ? (e = k, p2) : e;
  }, p2.target = function(k) {
    return arguments.length ? (i = k, p2) : i;
  }, p2.x = function(k) {
    return arguments.length ? (a = typeof k == "function" ? k : dt(+k), p2) : a;
  }, p2.y = function(k) {
    return arguments.length ? (h2 = typeof k == "function" ? k : dt(+k), p2) : h2;
  }, p2.context = function(k) {
    return arguments.length ? (b = k ?? null, p2) : b;
  }, p2;
}
function qt(t, e, i, a, h2) {
  t.moveTo(e, i), t.bezierCurveTo(e = (e + a) / 2, i, e, h2, a, h2);
}
function Ht() {
  return Yt(qt);
}
function Xt(t) {
  return [t.source.x1, t.y0];
}
function Qt(t) {
  return [t.target.x0, t.y1];
}
function Kt() {
  return Ht().source(Xt).target(Qt);
}
var at = (function() {
  var t = /* @__PURE__ */ p(function(k, s, o, l) {
    for (o = o || {}, l = k.length; l--; o[k[l]] = s) ;
    return o;
  }, "o"), e = [1, 9], i = [1, 10], a = [1, 5, 10, 12], h2 = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, SANKEY: 4, NEWLINE: 5, csv: 6, opt_eof: 7, record: 8, csv_tail: 9, EOF: 10, "field[source]": 11, COMMA: 12, "field[target]": 13, "field[value]": 14, field: 15, escaped: 16, non_escaped: 17, DQUOTE: 18, ESCAPED_TEXT: 19, NON_ESCAPED_TEXT: 20, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SANKEY", 5: "NEWLINE", 10: "EOF", 11: "field[source]", 12: "COMMA", 13: "field[target]", 14: "field[value]", 18: "DQUOTE", 19: "ESCAPED_TEXT", 20: "NON_ESCAPED_TEXT" },
    productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]],
    performAction: /* @__PURE__ */ p(function(s, o, l, _, x, y, v) {
      var M = y.length - 1;
      switch (x) {
        case 7:
          const T = _.findOrCreateNode(y[M - 4].trim().replaceAll('""', '"')), N = _.findOrCreateNode(y[M - 2].trim().replaceAll('""', '"')), C = parseFloat(y[M].trim());
          _.addLink(T, N, C);
          break;
        case 8:
        case 9:
        case 11:
          this.$ = y[M];
          break;
        case 10:
          this.$ = y[M - 1];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, { 5: [1, 3] }, { 6: 4, 8: 5, 15: 6, 16: 7, 17: 8, 18: e, 20: i }, { 1: [2, 6], 7: 11, 10: [1, 12] }, t(i, [2, 4], { 9: 13, 5: [1, 14] }), { 12: [1, 15] }, t(a, [2, 8]), t(a, [2, 9]), { 19: [1, 16] }, t(a, [2, 11]), { 1: [2, 1] }, { 1: [2, 5] }, t(i, [2, 2]), { 6: 17, 8: 5, 15: 6, 16: 7, 17: 8, 18: e, 20: i }, { 15: 18, 16: 7, 17: 8, 18: e, 20: i }, { 18: [1, 19] }, t(i, [2, 3]), { 12: [1, 20] }, t(a, [2, 10]), { 15: 21, 16: 7, 17: 8, 18: e, 20: i }, t([1, 5, 10], [2, 7])],
    defaultActions: { 11: [2, 1], 12: [2, 5] },
    parseError: /* @__PURE__ */ p(function(s, o) {
      if (o.recoverable)
        this.trace(s);
      else {
        var l = new Error(s);
        throw l.hash = o, l;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(s) {
      var o = this, l = [0], _ = [], x = [null], y = [], v = this.table, M = "", T = 0, N = 0, C = 2, D = 1, R = y.slice.call(arguments, 1), S = Object.create(this.lexer), P = { yy: {} };
      for (var B in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, B) && (P.yy[B] = this.yy[B]);
      S.setInput(s, P.yy), P.yy.lexer = S, P.yy.parser = this, typeof S.yylloc > "u" && (S.yylloc = {});
      var O = S.yylloc;
      y.push(O);
      var z = S.options && S.options.ranges;
      typeof P.yy.parseError == "function" ? this.parseError = P.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function d(L) {
        l.length = l.length - 2 * L, x.length = x.length - L, y.length = y.length - L;
      }
      p(d, "popStack");
      function E() {
        var L;
        return L = _.pop() || S.lex() || D, typeof L != "number" && (L instanceof Array && (_ = L, L = _.pop()), L = o.symbols_[L] || L), L;
      }
      p(E, "lex");
      for (var A, $, I, n, f = {}, u, c, r, m; ; ) {
        if ($ = l[l.length - 1], this.defaultActions[$] ? I = this.defaultActions[$] : ((A === null || typeof A > "u") && (A = E()), I = v[$] && v[$][A]), typeof I > "u" || !I.length || !I[0]) {
          var w = "";
          m = [];
          for (u in v[$])
            this.terminals_[u] && u > C && m.push("'" + this.terminals_[u] + "'");
          S.showPosition ? w = "Parse error on line " + (T + 1) + `:
` + S.showPosition() + `
Expecting ` + m.join(", ") + ", got '" + (this.terminals_[A] || A) + "'" : w = "Parse error on line " + (T + 1) + ": Unexpected " + (A == D ? "end of input" : "'" + (this.terminals_[A] || A) + "'"), this.parseError(w, {
            text: S.match,
            token: this.terminals_[A] || A,
            line: S.yylineno,
            loc: O,
            expected: m
          });
        }
        if (I[0] instanceof Array && I.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + $ + ", token: " + A);
        switch (I[0]) {
          case 1:
            l.push(A), x.push(S.yytext), y.push(S.yylloc), l.push(I[1]), A = null, N = S.yyleng, M = S.yytext, T = S.yylineno, O = S.yylloc;
            break;
          case 2:
            if (c = this.productions_[I[1]][1], f.$ = x[x.length - c], f._$ = {
              first_line: y[y.length - (c || 1)].first_line,
              last_line: y[y.length - 1].last_line,
              first_column: y[y.length - (c || 1)].first_column,
              last_column: y[y.length - 1].last_column
            }, z && (f._$.range = [
              y[y.length - (c || 1)].range[0],
              y[y.length - 1].range[1]
            ]), n = this.performAction.apply(f, [
              M,
              N,
              T,
              P.yy,
              I[1],
              x,
              y
            ].concat(R)), typeof n < "u")
              return n;
            c && (l = l.slice(0, -1 * c * 2), x = x.slice(0, -1 * c), y = y.slice(0, -1 * c)), l.push(this.productions_[I[1]][0]), x.push(f.$), y.push(f._$), r = v[l[l.length - 2]][l[l.length - 1]], l.push(r);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, b = /* @__PURE__ */ (function() {
    var k = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(o, l) {
        if (this.yy.parser)
          this.yy.parser.parseError(o, l);
        else
          throw new Error(o);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(s, o) {
        return this.yy = o || this.yy || {}, this._input = s, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var s = this._input[0];
        this.yytext += s, this.yyleng++, this.offset++, this.match += s, this.matched += s;
        var o = s.match(/(?:\r\n?|\n).*/g);
        return o ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), s;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(s) {
        var o = s.length, l = s.split(/(?:\r\n?|\n)/g);
        this._input = s + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - o), this.offset -= o;
        var _ = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), l.length - 1 && (this.yylineno -= l.length - 1);
        var x = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: l ? (l.length === _.length ? this.yylloc.first_column : 0) + _[_.length - l.length].length - l[0].length : this.yylloc.first_column - o
        }, this.options.ranges && (this.yylloc.range = [x[0], x[0] + this.yyleng - o]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(s) {
        this.unput(this.match.slice(s));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var s = this.matched.substr(0, this.matched.length - this.match.length);
        return (s.length > 20 ? "..." : "") + s.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var s = this.match;
        return s.length < 20 && (s += this._input.substr(0, 20 - s.length)), (s.substr(0, 20) + (s.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var s = this.pastInput(), o = new Array(s.length + 1).join("-");
        return s + this.upcomingInput() + `
` + o + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(s, o) {
        var l, _, x;
        if (this.options.backtrack_lexer && (x = {
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
        }, this.options.ranges && (x.yylloc.range = this.yylloc.range.slice(0))), _ = s[0].match(/(?:\r\n?|\n).*/g), _ && (this.yylineno += _.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: _ ? _[_.length - 1].length - _[_.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + s[0].length
        }, this.yytext += s[0], this.match += s[0], this.matches = s, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(s[0].length), this.matched += s[0], l = this.performAction.call(this, this.yy, this, o, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), l)
          return l;
        if (this._backtrack) {
          for (var y in x)
            this[y] = x[y];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var s, o, l, _;
        this._more || (this.yytext = "", this.match = "");
        for (var x = this._currentRules(), y = 0; y < x.length; y++)
          if (l = this._input.match(this.rules[x[y]]), l && (!o || l[0].length > o[0].length)) {
            if (o = l, _ = y, this.options.backtrack_lexer) {
              if (s = this.test_match(l, x[y]), s !== false)
                return s;
              if (this._backtrack) {
                o = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return o ? (s = this.test_match(o, x[_]), s !== false ? s : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var o = this.next();
        return o || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(o) {
        this.conditionStack.push(o);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var o = this.conditionStack.length - 1;
        return o > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(o) {
        return o = this.conditionStack.length - 1 - Math.abs(o || 0), o >= 0 ? this.conditionStack[o] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(o) {
        this.begin(o);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(o, l, _, x) {
        switch (_) {
          case 0:
            return this.pushState("csv"), 4;
          case 1:
            return this.pushState("csv"), 4;
          case 2:
            return 10;
          case 3:
            return 5;
          case 4:
            return 12;
          case 5:
            return this.pushState("escaped_text"), 18;
          case 6:
            return 20;
          case 7:
            return this.popState("escaped_text"), 18;
          case 8:
            return 19;
        }
      }, "anonymous"),
      rules: [/^(?:sankey-beta\b)/i, /^(?:sankey\b)/i, /^(?:$)/i, /^(?:((\u000D\u000A)|(\u000A)))/i, /^(?:(\u002C))/i, /^(?:(\u0022))/i, /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i, /^(?:(\u0022)(?!(\u0022)))/i, /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],
      conditions: { csv: { rules: [2, 3, 4, 5, 6, 7, 8], inclusive: false }, escaped_text: { rules: [7, 8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8], inclusive: true } }
    };
    return k;
  })();
  h2.lexer = b;
  function p$1() {
    this.yy = {};
  }
  return p(p$1, "Parser"), p$1.prototype = h2, h2.Parser = p$1, new p$1();
})();
at.parser = at;
var K = at, J = [], tt = [], Z = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ p(() => {
  J = [], tt = [], Z = /* @__PURE__ */ new Map(), By();
}, "clear"), W, Jt = (W = class {
  constructor(e, i, a = 0) {
    this.source = e, this.target = i, this.value = a;
  }
}, p(W, "SankeyLink"), W), te = /* @__PURE__ */ p((t, e, i) => {
  J.push(new Jt(t, e, i));
}, "addLink"), U, ee = (U = class {
  constructor(e) {
    this.ID = e;
  }
}, p(U, "SankeyNode"), U), ne = /* @__PURE__ */ p((t) => {
  t = Qr.sanitizeText(t, ft$1());
  let e = Z.get(t);
  return e === void 0 && (e = new ee(t), Z.set(t, e), tt.push(e)), e;
}, "findOrCreateNode"), ie = /* @__PURE__ */ p(() => tt, "getNodes"), se = /* @__PURE__ */ p(() => J, "getLinks"), re = /* @__PURE__ */ p(() => ({
  nodes: tt.map((t) => ({ id: t.ID })),
  links: J.map((t) => ({
    source: t.source.ID,
    target: t.target.ID,
    value: t.value
  }))
}), "getGraph"), oe = {
  nodesMap: Z,
  getConfig: /* @__PURE__ */ p(() => ft$1().sankey, "getConfig"),
  getNodes: ie,
  getLinks: se,
  getGraph: re,
  addLink: te,
  findOrCreateNode: ne,
  getAccTitle: Ly,
  setAccTitle: Ay,
  getAccDescription: $y,
  setAccDescription: My,
  getDiagramTitle: Fy,
  setDiagramTitle: Ey,
  clear: Zt
}, j, gt = (j = class {
  static next(e) {
    return new j(e + ++j.count);
  }
  constructor(e) {
    this.id = e, this.href = `#${e}`;
  }
  toString() {
    return "url(" + this.href + ")";
  }
}, p(j, "Uid"), j.count = 0, j), ae = {
  left: Ct,
  right: Ot,
  center: zt,
  justify: mt
}, le = /* @__PURE__ */ p(function(t, e, i, a) {
  const { securityLevel: h$1, sankey: b } = ft$1(), p$1 = cL.sankey;
  let k;
  h$1 === "sandbox" && (k = ht$1("#i" + e));
  const s = h$1 === "sandbox" ? ht$1(k.nodes()[0].contentDocument.body) : ht$1("body"), o = h$1 === "sandbox" ? s.select(`[id="${e}"]`) : ht$1(`[id="${e}"]`), l = b?.width ?? p$1.width, _ = b?.height ?? p$1.width, x = b?.useMaxWidth ?? p$1.useMaxWidth, y = b?.nodeAlignment ?? p$1.nodeAlignment, v = b?.prefix ?? p$1.prefix, M = b?.suffix ?? p$1.suffix, T = b?.showValues ?? p$1.showValues, N = a.db.getGraph(), C = ae[y];
  Bt().nodeId((d) => d.id).nodeWidth(10).nodePadding(10 + (T ? 15 : 0)).nodeAlign(C).extent([
    [0, 0],
    [l, _]
  ])(N);
  const S = h(It);
  o.append("g").attr("class", "nodes").selectAll(".node").data(N.nodes).join("g").attr("class", "node").attr("id", (d) => (d.uid = gt.next("node-")).id).attr("transform", function(d) {
    return "translate(" + d.x0 + "," + d.y0 + ")";
  }).attr("x", (d) => d.x0).attr("y", (d) => d.y0).append("rect").attr("height", (d) => d.y1 - d.y0).attr("width", (d) => d.x1 - d.x0).attr("fill", (d) => S(d.id));
  const P = /* @__PURE__ */ p(({ id: d, value: E }) => T ? `${d}
${v}${Math.round(E * 100) / 100}${M}` : d, "getText");
  o.append("g").attr("class", "node-labels").attr("font-size", 14).selectAll("text").data(N.nodes).join("text").attr("x", (d) => d.x0 < l / 2 ? d.x1 + 6 : d.x0 - 6).attr("y", (d) => (d.y1 + d.y0) / 2).attr("dy", `${T ? "0" : "0.35"}em`).attr("text-anchor", (d) => d.x0 < l / 2 ? "start" : "end").text(P);
  const B = o.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", 0.5).selectAll(".link").data(N.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply"), O = b?.linkColor ?? "gradient";
  if (O === "gradient") {
    const d = B.append("linearGradient").attr("id", (E) => (E.uid = gt.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (E) => E.source.x1).attr("x2", (E) => E.target.x0);
    d.append("stop").attr("offset", "0%").attr("stop-color", (E) => S(E.source.id)), d.append("stop").attr("offset", "100%").attr("stop-color", (E) => S(E.target.id));
  }
  let z;
  switch (O) {
    case "gradient":
      z = /* @__PURE__ */ p((d) => d.uid, "coloring");
      break;
    case "source":
      z = /* @__PURE__ */ p((d) => S(d.source.id), "coloring");
      break;
    case "target":
      z = /* @__PURE__ */ p((d) => S(d.target.id), "coloring");
      break;
    default:
      z = O;
  }
  B.append("path").attr("d", Kt()).attr("stroke", z).attr("stroke-width", (d) => Math.max(1, d.width)), ky(void 0, o, 0, x);
}, "draw"), ce = {
  draw: le
}, ue = /* @__PURE__ */ p((t) => t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, `
`).trim(), "prepareTextForParsing"), he = /* @__PURE__ */ p((t) => `.label {
      font-family: ${t.fontFamily};
    }`, "getStyles"), fe = he, ye = K.parse.bind(K);
K.parse = (t) => ye(ue(t));
var pe = {
  styles: fe,
  parser: K,
  db: oe,
  renderer: ce
};
export {
  pe as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fua2V5RGlhZ3JhbS1UWkVIRFpVTi1DYnN2emlPVy1DeHlhY2dXMi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1tZXJtYWlkLXN0cmluZy9kaXN0L3NhbmtleURpYWdyYW0tVFpFSERaVU4tQ2JzdnppT1cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyBnLCBwIGFzIF90LCBxIGFzIHh0LCBzIGFzIHZ0LCBnIGFzIGJ0LCBiIGFzIHd0LCBhIGFzIFN0LCBjIGFzIGx0LCB6IGFzIEx0LCBkIGFzIEgsIFYgYXMgRXQsIHkgYXMgQXQsIGsgYXMgVHQgfSBmcm9tIFwiLi9lbnRyeS1CMlZYLWt4YS5qc1wiO1xuaW1wb3J0IHsgbyBhcyBNdCB9IGZyb20gXCIuL29yZGluYWwtQjYtZjNNQXEuanNcIjtcbmZ1bmN0aW9uIE50KHQpIHtcbiAgZm9yICh2YXIgZSA9IHQubGVuZ3RoIC8gNiB8IDAsIGkgPSBuZXcgQXJyYXkoZSksIGEgPSAwOyBhIDwgZTsgKSBpW2FdID0gXCIjXCIgKyB0LnNsaWNlKGEgKiA2LCArK2EgKiA2KTtcbiAgcmV0dXJuIGk7XG59XG5jb25zdCBJdCA9IE50KFwiNGU3OWE3ZjI4ZTJjZTE1NzU5NzZiN2IyNTlhMTRmZWRjOTQ5YWY3YWExZmY5ZGE3OWM3NTVmYmFiMGFiXCIpO1xuZnVuY3Rpb24gY3QodCwgZSkge1xuICBsZXQgaTtcbiAgaWYgKGUgPT09IHZvaWQgMClcbiAgICBmb3IgKGNvbnN0IGEgb2YgdClcbiAgICAgIGEgIT0gbnVsbCAmJiAoaSA8IGEgfHwgaSA9PT0gdm9pZCAwICYmIGEgPj0gYSkgJiYgKGkgPSBhKTtcbiAgZWxzZSB7XG4gICAgbGV0IGEgPSAtMTtcbiAgICBmb3IgKGxldCBoIG9mIHQpXG4gICAgICAoaCA9IGUoaCwgKythLCB0KSkgIT0gbnVsbCAmJiAoaSA8IGggfHwgaSA9PT0gdm9pZCAwICYmIGggPj0gaCkgJiYgKGkgPSBoKTtcbiAgfVxuICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIHB0KHQsIGUpIHtcbiAgbGV0IGk7XG4gIGlmIChlID09PSB2b2lkIDApXG4gICAgZm9yIChjb25zdCBhIG9mIHQpXG4gICAgICBhICE9IG51bGwgJiYgKGkgPiBhIHx8IGkgPT09IHZvaWQgMCAmJiBhID49IGEpICYmIChpID0gYSk7XG4gIGVsc2Uge1xuICAgIGxldCBhID0gLTE7XG4gICAgZm9yIChsZXQgaCBvZiB0KVxuICAgICAgKGggPSBlKGgsICsrYSwgdCkpICE9IG51bGwgJiYgKGkgPiBoIHx8IGkgPT09IHZvaWQgMCAmJiBoID49IGgpICYmIChpID0gaCk7XG4gIH1cbiAgcmV0dXJuIGk7XG59XG5mdW5jdGlvbiBudCh0LCBlKSB7XG4gIGxldCBpID0gMDtcbiAgaWYgKGUgPT09IHZvaWQgMClcbiAgICBmb3IgKGxldCBhIG9mIHQpXG4gICAgICAoYSA9ICthKSAmJiAoaSArPSBhKTtcbiAgZWxzZSB7XG4gICAgbGV0IGEgPSAtMTtcbiAgICBmb3IgKGxldCBoIG9mIHQpXG4gICAgICAoaCA9ICtlKGgsICsrYSwgdCkpICYmIChpICs9IGgpO1xuICB9XG4gIHJldHVybiBpO1xufVxuZnVuY3Rpb24gUHQodCkge1xuICByZXR1cm4gdC50YXJnZXQuZGVwdGg7XG59XG5mdW5jdGlvbiBDdCh0KSB7XG4gIHJldHVybiB0LmRlcHRoO1xufVxuZnVuY3Rpb24gT3QodCwgZSkge1xuICByZXR1cm4gZSAtIDEgLSB0LmhlaWdodDtcbn1cbmZ1bmN0aW9uIG10KHQsIGUpIHtcbiAgcmV0dXJuIHQuc291cmNlTGlua3MubGVuZ3RoID8gdC5kZXB0aCA6IGUgLSAxO1xufVxuZnVuY3Rpb24genQodCkge1xuICByZXR1cm4gdC50YXJnZXRMaW5rcy5sZW5ndGggPyB0LmRlcHRoIDogdC5zb3VyY2VMaW5rcy5sZW5ndGggPyBwdCh0LnNvdXJjZUxpbmtzLCBQdCkgLSAxIDogMDtcbn1cbmZ1bmN0aW9uIFgodCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH07XG59XG5mdW5jdGlvbiB1dCh0LCBlKSB7XG4gIHJldHVybiBRKHQuc291cmNlLCBlLnNvdXJjZSkgfHwgdC5pbmRleCAtIGUuaW5kZXg7XG59XG5mdW5jdGlvbiBodCh0LCBlKSB7XG4gIHJldHVybiBRKHQudGFyZ2V0LCBlLnRhcmdldCkgfHwgdC5pbmRleCAtIGUuaW5kZXg7XG59XG5mdW5jdGlvbiBRKHQsIGUpIHtcbiAgcmV0dXJuIHQueTAgLSBlLnkwO1xufVxuZnVuY3Rpb24gaXQodCkge1xuICByZXR1cm4gdC52YWx1ZTtcbn1cbmZ1bmN0aW9uIER0KHQpIHtcbiAgcmV0dXJuIHQuaW5kZXg7XG59XG5mdW5jdGlvbiAkdCh0KSB7XG4gIHJldHVybiB0Lm5vZGVzO1xufVxuZnVuY3Rpb24ganQodCkge1xuICByZXR1cm4gdC5saW5rcztcbn1cbmZ1bmN0aW9uIGZ0KHQsIGUpIHtcbiAgY29uc3QgaSA9IHQuZ2V0KGUpO1xuICBpZiAoIWkpIHRocm93IG5ldyBFcnJvcihcIm1pc3Npbmc6IFwiICsgZSk7XG4gIHJldHVybiBpO1xufVxuZnVuY3Rpb24geXQoeyBub2RlczogdCB9KSB7XG4gIGZvciAoY29uc3QgZSBvZiB0KSB7XG4gICAgbGV0IGkgPSBlLnkwLCBhID0gaTtcbiAgICBmb3IgKGNvbnN0IGggb2YgZS5zb3VyY2VMaW5rcylcbiAgICAgIGgueTAgPSBpICsgaC53aWR0aCAvIDIsIGkgKz0gaC53aWR0aDtcbiAgICBmb3IgKGNvbnN0IGggb2YgZS50YXJnZXRMaW5rcylcbiAgICAgIGgueTEgPSBhICsgaC53aWR0aCAvIDIsIGEgKz0gaC53aWR0aDtcbiAgfVxufVxuZnVuY3Rpb24gQnQoKSB7XG4gIGxldCB0ID0gMCwgZSA9IDAsIGkgPSAxLCBhID0gMSwgaCA9IDI0LCBiID0gOCwgcCwgayA9IER0LCBzID0gbXQsIG8sIGwsIF8gPSAkdCwgeCA9IGp0LCB5ID0gNjtcbiAgZnVuY3Rpb24gdigpIHtcbiAgICBjb25zdCBuID0geyBub2RlczogXy5hcHBseShudWxsLCBhcmd1bWVudHMpLCBsaW5rczogeC5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XG4gICAgcmV0dXJuIE0obiksIFQobiksIE4obiksIEMobiksIFMobiksIHl0KG4pLCBuO1xuICB9XG4gIHYudXBkYXRlID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiB5dChuKSwgbjtcbiAgfSwgdi5ub2RlSWQgPSBmdW5jdGlvbihuKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoayA9IHR5cGVvZiBuID09IFwiZnVuY3Rpb25cIiA/IG4gOiBYKG4pLCB2KSA6IGs7XG4gIH0sIHYubm9kZUFsaWduID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHMgPSB0eXBlb2YgbiA9PSBcImZ1bmN0aW9uXCIgPyBuIDogWChuKSwgdikgOiBzO1xuICB9LCB2Lm5vZGVTb3J0ID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG8gPSBuLCB2KSA6IG87XG4gIH0sIHYubm9kZVdpZHRoID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGggPSArbiwgdikgOiBoO1xuICB9LCB2Lm5vZGVQYWRkaW5nID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGIgPSBwID0gK24sIHYpIDogYjtcbiAgfSwgdi5ub2RlcyA9IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChfID0gdHlwZW9mIG4gPT0gXCJmdW5jdGlvblwiID8gbiA6IFgobiksIHYpIDogXztcbiAgfSwgdi5saW5rcyA9IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gdHlwZW9mIG4gPT0gXCJmdW5jdGlvblwiID8gbiA6IFgobiksIHYpIDogeDtcbiAgfSwgdi5saW5rU29ydCA9IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChsID0gbiwgdikgOiBsO1xuICB9LCB2LnNpemUgPSBmdW5jdGlvbihuKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodCA9IGUgPSAwLCBpID0gK25bMF0sIGEgPSArblsxXSwgdikgOiBbaSAtIHQsIGEgLSBlXTtcbiAgfSwgdi5leHRlbnQgPSBmdW5jdGlvbihuKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodCA9ICtuWzBdWzBdLCBpID0gK25bMV1bMF0sIGUgPSArblswXVsxXSwgYSA9ICtuWzFdWzFdLCB2KSA6IFtbdCwgZV0sIFtpLCBhXV07XG4gIH0sIHYuaXRlcmF0aW9ucyA9IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gK24sIHYpIDogeTtcbiAgfTtcbiAgZnVuY3Rpb24gTSh7IG5vZGVzOiBuLCBsaW5rczogZiB9KSB7XG4gICAgZm9yIChjb25zdCBbYywgcl0gb2Ygbi5lbnRyaWVzKCkpXG4gICAgICByLmluZGV4ID0gYywgci5zb3VyY2VMaW5rcyA9IFtdLCByLnRhcmdldExpbmtzID0gW107XG4gICAgY29uc3QgdSA9IG5ldyBNYXAobi5tYXAoKGMsIHIpID0+IFtrKGMsIHIsIG4pLCBjXSkpO1xuICAgIGZvciAoY29uc3QgW2MsIHJdIG9mIGYuZW50cmllcygpKSB7XG4gICAgICByLmluZGV4ID0gYztcbiAgICAgIGxldCB7IHNvdXJjZTogbSwgdGFyZ2V0OiB3IH0gPSByO1xuICAgICAgdHlwZW9mIG0gIT0gXCJvYmplY3RcIiAmJiAobSA9IHIuc291cmNlID0gZnQodSwgbSkpLCB0eXBlb2YgdyAhPSBcIm9iamVjdFwiICYmICh3ID0gci50YXJnZXQgPSBmdCh1LCB3KSksIG0uc291cmNlTGlua3MucHVzaChyKSwgdy50YXJnZXRMaW5rcy5wdXNoKHIpO1xuICAgIH1cbiAgICBpZiAobCAhPSBudWxsKVxuICAgICAgZm9yIChjb25zdCB7IHNvdXJjZUxpbmtzOiBjLCB0YXJnZXRMaW5rczogciB9IG9mIG4pXG4gICAgICAgIGMuc29ydChsKSwgci5zb3J0KGwpO1xuICB9XG4gIGZ1bmN0aW9uIFQoeyBub2RlczogbiB9KSB7XG4gICAgZm9yIChjb25zdCBmIG9mIG4pXG4gICAgICBmLnZhbHVlID0gZi5maXhlZFZhbHVlID09PSB2b2lkIDAgPyBNYXRoLm1heChudChmLnNvdXJjZUxpbmtzLCBpdCksIG50KGYudGFyZ2V0TGlua3MsIGl0KSkgOiBmLmZpeGVkVmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gTih7IG5vZGVzOiBuIH0pIHtcbiAgICBjb25zdCBmID0gbi5sZW5ndGg7XG4gICAgbGV0IHUgPSBuZXcgU2V0KG4pLCBjID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSwgciA9IDA7XG4gICAgZm9yICg7IHUuc2l6ZTsgKSB7XG4gICAgICBmb3IgKGNvbnN0IG0gb2YgdSkge1xuICAgICAgICBtLmRlcHRoID0gcjtcbiAgICAgICAgZm9yIChjb25zdCB7IHRhcmdldDogdyB9IG9mIG0uc291cmNlTGlua3MpXG4gICAgICAgICAgYy5hZGQodyk7XG4gICAgICB9XG4gICAgICBpZiAoKytyID4gZikgdGhyb3cgbmV3IEVycm9yKFwiY2lyY3VsYXIgbGlua1wiKTtcbiAgICAgIHUgPSBjLCBjID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gQyh7IG5vZGVzOiBuIH0pIHtcbiAgICBjb25zdCBmID0gbi5sZW5ndGg7XG4gICAgbGV0IHUgPSBuZXcgU2V0KG4pLCBjID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSwgciA9IDA7XG4gICAgZm9yICg7IHUuc2l6ZTsgKSB7XG4gICAgICBmb3IgKGNvbnN0IG0gb2YgdSkge1xuICAgICAgICBtLmhlaWdodCA9IHI7XG4gICAgICAgIGZvciAoY29uc3QgeyBzb3VyY2U6IHcgfSBvZiBtLnRhcmdldExpbmtzKVxuICAgICAgICAgIGMuYWRkKHcpO1xuICAgICAgfVxuICAgICAgaWYgKCsrciA+IGYpIHRocm93IG5ldyBFcnJvcihcImNpcmN1bGFyIGxpbmtcIik7XG4gICAgICB1ID0gYywgYyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIEQoeyBub2RlczogbiB9KSB7XG4gICAgY29uc3QgZiA9IGN0KG4sIChyKSA9PiByLmRlcHRoKSArIDEsIHUgPSAoaSAtIHQgLSBoKSAvIChmIC0gMSksIGMgPSBuZXcgQXJyYXkoZik7XG4gICAgZm9yIChjb25zdCByIG9mIG4pIHtcbiAgICAgIGNvbnN0IG0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihmIC0gMSwgTWF0aC5mbG9vcihzLmNhbGwobnVsbCwgciwgZikpKSk7XG4gICAgICByLmxheWVyID0gbSwgci54MCA9IHQgKyBtICogdSwgci54MSA9IHIueDAgKyBoLCBjW21dID8gY1ttXS5wdXNoKHIpIDogY1ttXSA9IFtyXTtcbiAgICB9XG4gICAgaWYgKG8pIGZvciAoY29uc3QgciBvZiBjKVxuICAgICAgci5zb3J0KG8pO1xuICAgIHJldHVybiBjO1xuICB9XG4gIGZ1bmN0aW9uIFIobikge1xuICAgIGNvbnN0IGYgPSBwdChuLCAodSkgPT4gKGEgLSBlIC0gKHUubGVuZ3RoIC0gMSkgKiBwKSAvIG50KHUsIGl0KSk7XG4gICAgZm9yIChjb25zdCB1IG9mIG4pIHtcbiAgICAgIGxldCBjID0gZTtcbiAgICAgIGZvciAoY29uc3QgciBvZiB1KSB7XG4gICAgICAgIHIueTAgPSBjLCByLnkxID0gYyArIHIudmFsdWUgKiBmLCBjID0gci55MSArIHA7XG4gICAgICAgIGZvciAoY29uc3QgbSBvZiByLnNvdXJjZUxpbmtzKVxuICAgICAgICAgIG0ud2lkdGggPSBtLnZhbHVlICogZjtcbiAgICAgIH1cbiAgICAgIGMgPSAoYSAtIGMgKyBwKSAvICh1Lmxlbmd0aCArIDEpO1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCB1Lmxlbmd0aDsgKytyKSB7XG4gICAgICAgIGNvbnN0IG0gPSB1W3JdO1xuICAgICAgICBtLnkwICs9IGMgKiAociArIDEpLCBtLnkxICs9IGMgKiAociArIDEpO1xuICAgICAgfVxuICAgICAgQSh1KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gUyhuKSB7XG4gICAgY29uc3QgZiA9IEQobik7XG4gICAgcCA9IE1hdGgubWluKGIsIChhIC0gZSkgLyAoY3QoZiwgKHUpID0+IHUubGVuZ3RoKSAtIDEpKSwgUihmKTtcbiAgICBmb3IgKGxldCB1ID0gMDsgdSA8IHk7ICsrdSkge1xuICAgICAgY29uc3QgYyA9IE1hdGgucG93KDAuOTksIHUpLCByID0gTWF0aC5tYXgoMSAtIGMsICh1ICsgMSkgLyB5KTtcbiAgICAgIEIoZiwgYywgciksIFAoZiwgYywgcik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIFAobiwgZiwgdSkge1xuICAgIGZvciAobGV0IGMgPSAxLCByID0gbi5sZW5ndGg7IGMgPCByOyArK2MpIHtcbiAgICAgIGNvbnN0IG0gPSBuW2NdO1xuICAgICAgZm9yIChjb25zdCB3IG9mIG0pIHtcbiAgICAgICAgbGV0IEwgPSAwLCBWID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB7IHNvdXJjZTogWSwgdmFsdWU6IGV0IH0gb2Ygdy50YXJnZXRMaW5rcykge1xuICAgICAgICAgIGxldCBxID0gZXQgKiAody5sYXllciAtIFkubGF5ZXIpO1xuICAgICAgICAgIEwgKz0gJChZLCB3KSAqIHEsIFYgKz0gcTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShWID4gMCkpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgRyA9IChMIC8gViAtIHcueTApICogZjtcbiAgICAgICAgdy55MCArPSBHLCB3LnkxICs9IEcsIEUodyk7XG4gICAgICB9XG4gICAgICBvID09PSB2b2lkIDAgJiYgbS5zb3J0KFEpLCBPKG0sIHUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBCKG4sIGYsIHUpIHtcbiAgICBmb3IgKGxldCBjID0gbi5sZW5ndGgsIHIgPSBjIC0gMjsgciA+PSAwOyAtLXIpIHtcbiAgICAgIGNvbnN0IG0gPSBuW3JdO1xuICAgICAgZm9yIChjb25zdCB3IG9mIG0pIHtcbiAgICAgICAgbGV0IEwgPSAwLCBWID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB7IHRhcmdldDogWSwgdmFsdWU6IGV0IH0gb2Ygdy5zb3VyY2VMaW5rcykge1xuICAgICAgICAgIGxldCBxID0gZXQgKiAoWS5sYXllciAtIHcubGF5ZXIpO1xuICAgICAgICAgIEwgKz0gSSh3LCBZKSAqIHEsIFYgKz0gcTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShWID4gMCkpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgRyA9IChMIC8gViAtIHcueTApICogZjtcbiAgICAgICAgdy55MCArPSBHLCB3LnkxICs9IEcsIEUodyk7XG4gICAgICB9XG4gICAgICBvID09PSB2b2lkIDAgJiYgbS5zb3J0KFEpLCBPKG0sIHUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBPKG4sIGYpIHtcbiAgICBjb25zdCB1ID0gbi5sZW5ndGggPj4gMSwgYyA9IG5bdV07XG4gICAgZChuLCBjLnkwIC0gcCwgdSAtIDEsIGYpLCB6KG4sIGMueTEgKyBwLCB1ICsgMSwgZiksIGQobiwgYSwgbi5sZW5ndGggLSAxLCBmKSwgeihuLCBlLCAwLCBmKTtcbiAgfVxuICBmdW5jdGlvbiB6KG4sIGYsIHUsIGMpIHtcbiAgICBmb3IgKDsgdSA8IG4ubGVuZ3RoOyArK3UpIHtcbiAgICAgIGNvbnN0IHIgPSBuW3VdLCBtID0gKGYgLSByLnkwKSAqIGM7XG4gICAgICBtID4gMWUtNiAmJiAoci55MCArPSBtLCByLnkxICs9IG0pLCBmID0gci55MSArIHA7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQobiwgZiwgdSwgYykge1xuICAgIGZvciAoOyB1ID49IDA7IC0tdSkge1xuICAgICAgY29uc3QgciA9IG5bdV0sIG0gPSAoci55MSAtIGYpICogYztcbiAgICAgIG0gPiAxZS02ICYmIChyLnkwIC09IG0sIHIueTEgLT0gbSksIGYgPSByLnkwIC0gcDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gRSh7IHNvdXJjZUxpbmtzOiBuLCB0YXJnZXRMaW5rczogZiB9KSB7XG4gICAgaWYgKGwgPT09IHZvaWQgMCkge1xuICAgICAgZm9yIChjb25zdCB7IHNvdXJjZTogeyBzb3VyY2VMaW5rczogdSB9IH0gb2YgZilcbiAgICAgICAgdS5zb3J0KGh0KTtcbiAgICAgIGZvciAoY29uc3QgeyB0YXJnZXQ6IHsgdGFyZ2V0TGlua3M6IHUgfSB9IG9mIG4pXG4gICAgICAgIHUuc29ydCh1dCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIEEobikge1xuICAgIGlmIChsID09PSB2b2lkIDApXG4gICAgICBmb3IgKGNvbnN0IHsgc291cmNlTGlua3M6IGYsIHRhcmdldExpbmtzOiB1IH0gb2YgbilcbiAgICAgICAgZi5zb3J0KGh0KSwgdS5zb3J0KHV0KTtcbiAgfVxuICBmdW5jdGlvbiAkKG4sIGYpIHtcbiAgICBsZXQgdSA9IG4ueTAgLSAobi5zb3VyY2VMaW5rcy5sZW5ndGggLSAxKSAqIHAgLyAyO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQ6IGMsIHdpZHRoOiByIH0gb2Ygbi5zb3VyY2VMaW5rcykge1xuICAgICAgaWYgKGMgPT09IGYpIGJyZWFrO1xuICAgICAgdSArPSByICsgcDtcbiAgICB9XG4gICAgZm9yIChjb25zdCB7IHNvdXJjZTogYywgd2lkdGg6IHIgfSBvZiBmLnRhcmdldExpbmtzKSB7XG4gICAgICBpZiAoYyA9PT0gbikgYnJlYWs7XG4gICAgICB1IC09IHI7XG4gICAgfVxuICAgIHJldHVybiB1O1xuICB9XG4gIGZ1bmN0aW9uIEkobiwgZikge1xuICAgIGxldCB1ID0gZi55MCAtIChmLnRhcmdldExpbmtzLmxlbmd0aCAtIDEpICogcCAvIDI7XG4gICAgZm9yIChjb25zdCB7IHNvdXJjZTogYywgd2lkdGg6IHIgfSBvZiBmLnRhcmdldExpbmtzKSB7XG4gICAgICBpZiAoYyA9PT0gbikgYnJlYWs7XG4gICAgICB1ICs9IHIgKyBwO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0OiBjLCB3aWR0aDogciB9IG9mIG4uc291cmNlTGlua3MpIHtcbiAgICAgIGlmIChjID09PSBmKSBicmVhaztcbiAgICAgIHUgLT0gcjtcbiAgICB9XG4gICAgcmV0dXJuIHU7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG52YXIgc3QgPSBNYXRoLlBJLCBydCA9IDIgKiBzdCwgRiA9IDFlLTYsIFJ0ID0gcnQgLSBGO1xuZnVuY3Rpb24gb3QoKSB7XG4gIHRoaXMuX3gwID0gdGhpcy5feTAgPSAvLyBzdGFydCBvZiBjdXJyZW50IHN1YnBhdGhcbiAgdGhpcy5feDEgPSB0aGlzLl95MSA9IG51bGwsIHRoaXMuXyA9IFwiXCI7XG59XG5mdW5jdGlvbiBrdCgpIHtcbiAgcmV0dXJuIG5ldyBvdCgpO1xufVxub3QucHJvdG90eXBlID0ga3QucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3Rvcjogb3QsXG4gIG1vdmVUbzogZnVuY3Rpb24odCwgZSkge1xuICAgIHRoaXMuXyArPSBcIk1cIiArICh0aGlzLl94MCA9IHRoaXMuX3gxID0gK3QpICsgXCIsXCIgKyAodGhpcy5feTAgPSB0aGlzLl95MSA9ICtlKTtcbiAgfSxcbiAgY2xvc2VQYXRoOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MSAhPT0gbnVsbCAmJiAodGhpcy5feDEgPSB0aGlzLl94MCwgdGhpcy5feTEgPSB0aGlzLl95MCwgdGhpcy5fICs9IFwiWlwiKTtcbiAgfSxcbiAgbGluZVRvOiBmdW5jdGlvbih0LCBlKSB7XG4gICAgdGhpcy5fICs9IFwiTFwiICsgKHRoaXMuX3gxID0gK3QpICsgXCIsXCIgKyAodGhpcy5feTEgPSArZSk7XG4gIH0sXG4gIHF1YWRyYXRpY0N1cnZlVG86IGZ1bmN0aW9uKHQsIGUsIGksIGEpIHtcbiAgICB0aGlzLl8gKz0gXCJRXCIgKyArdCArIFwiLFwiICsgK2UgKyBcIixcIiArICh0aGlzLl94MSA9ICtpKSArIFwiLFwiICsgKHRoaXMuX3kxID0gK2EpO1xuICB9LFxuICBiZXppZXJDdXJ2ZVRvOiBmdW5jdGlvbih0LCBlLCBpLCBhLCBoLCBiKSB7XG4gICAgdGhpcy5fICs9IFwiQ1wiICsgK3QgKyBcIixcIiArICtlICsgXCIsXCIgKyAraSArIFwiLFwiICsgK2EgKyBcIixcIiArICh0aGlzLl94MSA9ICtoKSArIFwiLFwiICsgKHRoaXMuX3kxID0gK2IpO1xuICB9LFxuICBhcmNUbzogZnVuY3Rpb24odCwgZSwgaSwgYSwgaCkge1xuICAgIHQgPSArdCwgZSA9ICtlLCBpID0gK2ksIGEgPSArYSwgaCA9ICtoO1xuICAgIHZhciBiID0gdGhpcy5feDEsIHAgPSB0aGlzLl95MSwgayA9IGkgLSB0LCBzID0gYSAtIGUsIG8gPSBiIC0gdCwgbCA9IHAgLSBlLCBfID0gbyAqIG8gKyBsICogbDtcbiAgICBpZiAoaCA8IDApIHRocm93IG5ldyBFcnJvcihcIm5lZ2F0aXZlIHJhZGl1czogXCIgKyBoKTtcbiAgICBpZiAodGhpcy5feDEgPT09IG51bGwpXG4gICAgICB0aGlzLl8gKz0gXCJNXCIgKyAodGhpcy5feDEgPSB0KSArIFwiLFwiICsgKHRoaXMuX3kxID0gZSk7XG4gICAgZWxzZSBpZiAoXyA+IEYpIGlmICghKE1hdGguYWJzKGwgKiBrIC0gcyAqIG8pID4gRikgfHwgIWgpXG4gICAgICB0aGlzLl8gKz0gXCJMXCIgKyAodGhpcy5feDEgPSB0KSArIFwiLFwiICsgKHRoaXMuX3kxID0gZSk7XG4gICAgZWxzZSB7XG4gICAgICB2YXIgeCA9IGkgLSBiLCB5ID0gYSAtIHAsIHYgPSBrICogayArIHMgKiBzLCBNID0geCAqIHggKyB5ICogeSwgVCA9IE1hdGguc3FydCh2KSwgTiA9IE1hdGguc3FydChfKSwgQyA9IGggKiBNYXRoLnRhbigoc3QgLSBNYXRoLmFjb3MoKHYgKyBfIC0gTSkgLyAoMiAqIFQgKiBOKSkpIC8gMiksIEQgPSBDIC8gTiwgUiA9IEMgLyBUO1xuICAgICAgTWF0aC5hYnMoRCAtIDEpID4gRiAmJiAodGhpcy5fICs9IFwiTFwiICsgKHQgKyBEICogbykgKyBcIixcIiArIChlICsgRCAqIGwpKSwgdGhpcy5fICs9IFwiQVwiICsgaCArIFwiLFwiICsgaCArIFwiLDAsMCxcIiArICsobCAqIHggPiBvICogeSkgKyBcIixcIiArICh0aGlzLl94MSA9IHQgKyBSICogaykgKyBcIixcIiArICh0aGlzLl95MSA9IGUgKyBSICogcyk7XG4gICAgfVxuICB9LFxuICBhcmM6IGZ1bmN0aW9uKHQsIGUsIGksIGEsIGgsIGIpIHtcbiAgICB0ID0gK3QsIGUgPSArZSwgaSA9ICtpLCBiID0gISFiO1xuICAgIHZhciBwID0gaSAqIE1hdGguY29zKGEpLCBrID0gaSAqIE1hdGguc2luKGEpLCBzID0gdCArIHAsIG8gPSBlICsgaywgbCA9IDEgXiBiLCBfID0gYiA/IGEgLSBoIDogaCAtIGE7XG4gICAgaWYgKGkgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJuZWdhdGl2ZSByYWRpdXM6IFwiICsgaSk7XG4gICAgdGhpcy5feDEgPT09IG51bGwgPyB0aGlzLl8gKz0gXCJNXCIgKyBzICsgXCIsXCIgKyBvIDogKE1hdGguYWJzKHRoaXMuX3gxIC0gcykgPiBGIHx8IE1hdGguYWJzKHRoaXMuX3kxIC0gbykgPiBGKSAmJiAodGhpcy5fICs9IFwiTFwiICsgcyArIFwiLFwiICsgbyksIGkgJiYgKF8gPCAwICYmIChfID0gXyAlIHJ0ICsgcnQpLCBfID4gUnQgPyB0aGlzLl8gKz0gXCJBXCIgKyBpICsgXCIsXCIgKyBpICsgXCIsMCwxLFwiICsgbCArIFwiLFwiICsgKHQgLSBwKSArIFwiLFwiICsgKGUgLSBrKSArIFwiQVwiICsgaSArIFwiLFwiICsgaSArIFwiLDAsMSxcIiArIGwgKyBcIixcIiArICh0aGlzLl94MSA9IHMpICsgXCIsXCIgKyAodGhpcy5feTEgPSBvKSA6IF8gPiBGICYmICh0aGlzLl8gKz0gXCJBXCIgKyBpICsgXCIsXCIgKyBpICsgXCIsMCxcIiArICsoXyA+PSBzdCkgKyBcIixcIiArIGwgKyBcIixcIiArICh0aGlzLl94MSA9IHQgKyBpICogTWF0aC5jb3MoaCkpICsgXCIsXCIgKyAodGhpcy5feTEgPSBlICsgaSAqIE1hdGguc2luKGgpKSkpO1xuICB9LFxuICByZWN0OiBmdW5jdGlvbih0LCBlLCBpLCBhKSB7XG4gICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gwID0gdGhpcy5feDEgPSArdCkgKyBcIixcIiArICh0aGlzLl95MCA9IHRoaXMuX3kxID0gK2UpICsgXCJoXCIgKyAraSArIFwidlwiICsgK2EgKyBcImhcIiArIC1pICsgXCJaXCI7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fO1xuICB9XG59O1xuZnVuY3Rpb24gZHQodCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH07XG59XG5mdW5jdGlvbiBWdCh0KSB7XG4gIHJldHVybiB0WzBdO1xufVxuZnVuY3Rpb24gRnQodCkge1xuICByZXR1cm4gdFsxXTtcbn1cbnZhciBXdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbmZ1bmN0aW9uIFV0KHQpIHtcbiAgcmV0dXJuIHQuc291cmNlO1xufVxuZnVuY3Rpb24gR3QodCkge1xuICByZXR1cm4gdC50YXJnZXQ7XG59XG5mdW5jdGlvbiBZdCh0KSB7XG4gIHZhciBlID0gVXQsIGkgPSBHdCwgYSA9IFZ0LCBoID0gRnQsIGIgPSBudWxsO1xuICBmdW5jdGlvbiBwKCkge1xuICAgIHZhciBrLCBzID0gV3QuY2FsbChhcmd1bWVudHMpLCBvID0gZS5hcHBseSh0aGlzLCBzKSwgbCA9IGkuYXBwbHkodGhpcywgcyk7XG4gICAgaWYgKGIgfHwgKGIgPSBrID0ga3QoKSksIHQoYiwgK2EuYXBwbHkodGhpcywgKHNbMF0gPSBvLCBzKSksICtoLmFwcGx5KHRoaXMsIHMpLCArYS5hcHBseSh0aGlzLCAoc1swXSA9IGwsIHMpKSwgK2guYXBwbHkodGhpcywgcykpLCBrKSByZXR1cm4gYiA9IG51bGwsIGsgKyBcIlwiIHx8IG51bGw7XG4gIH1cbiAgcmV0dXJuIHAuc291cmNlID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGUgPSBrLCBwKSA6IGU7XG4gIH0sIHAudGFyZ2V0ID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGkgPSBrLCBwKSA6IGk7XG4gIH0sIHAueCA9IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhID0gdHlwZW9mIGsgPT0gXCJmdW5jdGlvblwiID8gayA6IGR0KCtrKSwgcCkgOiBhO1xuICB9LCBwLnkgPSBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaCA9IHR5cGVvZiBrID09IFwiZnVuY3Rpb25cIiA/IGsgOiBkdCgrayksIHApIDogaDtcbiAgfSwgcC5jb250ZXh0ID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGIgPSBrID8/IG51bGwsIHApIDogYjtcbiAgfSwgcDtcbn1cbmZ1bmN0aW9uIHF0KHQsIGUsIGksIGEsIGgpIHtcbiAgdC5tb3ZlVG8oZSwgaSksIHQuYmV6aWVyQ3VydmVUbyhlID0gKGUgKyBhKSAvIDIsIGksIGUsIGgsIGEsIGgpO1xufVxuZnVuY3Rpb24gSHQoKSB7XG4gIHJldHVybiBZdChxdCk7XG59XG5mdW5jdGlvbiBYdCh0KSB7XG4gIHJldHVybiBbdC5zb3VyY2UueDEsIHQueTBdO1xufVxuZnVuY3Rpb24gUXQodCkge1xuICByZXR1cm4gW3QudGFyZ2V0LngwLCB0LnkxXTtcbn1cbmZ1bmN0aW9uIEt0KCkge1xuICByZXR1cm4gSHQoKS5zb3VyY2UoWHQpLnRhcmdldChRdCk7XG59XG52YXIgYXQgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB0ID0gLyogQF9fUFVSRV9fICovIGcoZnVuY3Rpb24oaywgcywgbywgbCkge1xuICAgIGZvciAobyA9IG8gfHwge30sIGwgPSBrLmxlbmd0aDsgbC0tOyBvW2tbbF1dID0gcykgO1xuICAgIHJldHVybiBvO1xuICB9LCBcIm9cIiksIGUgPSBbMSwgOV0sIGkgPSBbMSwgMTBdLCBhID0gWzEsIDUsIDEwLCAxMl0sIGggPSB7XG4gICAgdHJhY2U6IC8qIEBfX1BVUkVfXyAqLyBnKGZ1bmN0aW9uKCkge1xuICAgIH0sIFwidHJhY2VcIiksXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IGVycm9yOiAyLCBzdGFydDogMywgU0FOS0VZOiA0LCBORVdMSU5FOiA1LCBjc3Y6IDYsIG9wdF9lb2Y6IDcsIHJlY29yZDogOCwgY3N2X3RhaWw6IDksIEVPRjogMTAsIFwiZmllbGRbc291cmNlXVwiOiAxMSwgQ09NTUE6IDEyLCBcImZpZWxkW3RhcmdldF1cIjogMTMsIFwiZmllbGRbdmFsdWVdXCI6IDE0LCBmaWVsZDogMTUsIGVzY2FwZWQ6IDE2LCBub25fZXNjYXBlZDogMTcsIERRVU9URTogMTgsIEVTQ0FQRURfVEVYVDogMTksIE5PTl9FU0NBUEVEX1RFWFQ6IDIwLCAkYWNjZXB0OiAwLCAkZW5kOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDQ6IFwiU0FOS0VZXCIsIDU6IFwiTkVXTElORVwiLCAxMDogXCJFT0ZcIiwgMTE6IFwiZmllbGRbc291cmNlXVwiLCAxMjogXCJDT01NQVwiLCAxMzogXCJmaWVsZFt0YXJnZXRdXCIsIDE0OiBcImZpZWxkW3ZhbHVlXVwiLCAxODogXCJEUVVPVEVcIiwgMTk6IFwiRVNDQVBFRF9URVhUXCIsIDIwOiBcIk5PTl9FU0NBUEVEX1RFWFRcIiB9LFxuICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCA0XSwgWzYsIDJdLCBbOSwgMl0sIFs5LCAwXSwgWzcsIDFdLCBbNywgMF0sIFs4LCA1XSwgWzE1LCAxXSwgWzE1LCAxXSwgWzE2LCAzXSwgWzE3LCAxXV0sXG4gICAgcGVyZm9ybUFjdGlvbjogLyogQF9fUFVSRV9fICovIGcoZnVuY3Rpb24ocywgbywgbCwgXywgeCwgeSwgdikge1xuICAgICAgdmFyIE0gPSB5Lmxlbmd0aCAtIDE7XG4gICAgICBzd2l0Y2ggKHgpIHtcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGNvbnN0IFQgPSBfLmZpbmRPckNyZWF0ZU5vZGUoeVtNIC0gNF0udHJpbSgpLnJlcGxhY2VBbGwoJ1wiXCInLCAnXCInKSksIE4gPSBfLmZpbmRPckNyZWF0ZU5vZGUoeVtNIC0gMl0udHJpbSgpLnJlcGxhY2VBbGwoJ1wiXCInLCAnXCInKSksIEMgPSBwYXJzZUZsb2F0KHlbTV0udHJpbSgpKTtcbiAgICAgICAgICBfLmFkZExpbmsoVCwgTiwgQyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIHRoaXMuJCA9IHlbTV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgdGhpcy4kID0geVtNIC0gMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSwgXCJhbm9ueW1vdXNcIiksXG4gICAgdGFibGU6IFt7IDM6IDEsIDQ6IFsxLCAyXSB9LCB7IDE6IFszXSB9LCB7IDU6IFsxLCAzXSB9LCB7IDY6IDQsIDg6IDUsIDE1OiA2LCAxNjogNywgMTc6IDgsIDE4OiBlLCAyMDogaSB9LCB7IDE6IFsyLCA2XSwgNzogMTEsIDEwOiBbMSwgMTJdIH0sIHQoaSwgWzIsIDRdLCB7IDk6IDEzLCA1OiBbMSwgMTRdIH0pLCB7IDEyOiBbMSwgMTVdIH0sIHQoYSwgWzIsIDhdKSwgdChhLCBbMiwgOV0pLCB7IDE5OiBbMSwgMTZdIH0sIHQoYSwgWzIsIDExXSksIHsgMTogWzIsIDFdIH0sIHsgMTogWzIsIDVdIH0sIHQoaSwgWzIsIDJdKSwgeyA2OiAxNywgODogNSwgMTU6IDYsIDE2OiA3LCAxNzogOCwgMTg6IGUsIDIwOiBpIH0sIHsgMTU6IDE4LCAxNjogNywgMTc6IDgsIDE4OiBlLCAyMDogaSB9LCB7IDE4OiBbMSwgMTldIH0sIHQoaSwgWzIsIDNdKSwgeyAxMjogWzEsIDIwXSB9LCB0KGEsIFsyLCAxMF0pLCB7IDE1OiAyMSwgMTY6IDcsIDE3OiA4LCAxODogZSwgMjA6IGkgfSwgdChbMSwgNSwgMTBdLCBbMiwgN10pXSxcbiAgICBkZWZhdWx0QWN0aW9uczogeyAxMTogWzIsIDFdLCAxMjogWzIsIDVdIH0sXG4gICAgcGFyc2VFcnJvcjogLyogQF9fUFVSRV9fICovIGcoZnVuY3Rpb24ocywgbykge1xuICAgICAgaWYgKG8ucmVjb3ZlcmFibGUpXG4gICAgICAgIHRoaXMudHJhY2Uocyk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGwgPSBuZXcgRXJyb3Iocyk7XG4gICAgICAgIHRocm93IGwuaGFzaCA9IG8sIGw7XG4gICAgICB9XG4gICAgfSwgXCJwYXJzZUVycm9yXCIpLFxuICAgIHBhcnNlOiAvKiBAX19QVVJFX18gKi8gZyhmdW5jdGlvbihzKSB7XG4gICAgICB2YXIgbyA9IHRoaXMsIGwgPSBbMF0sIF8gPSBbXSwgeCA9IFtudWxsXSwgeSA9IFtdLCB2ID0gdGhpcy50YWJsZSwgTSA9IFwiXCIsIFQgPSAwLCBOID0gMCwgQyA9IDIsIEQgPSAxLCBSID0geS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIFMgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpLCBQID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIEIgaW4gdGhpcy55eSlcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIEIpICYmIChQLnl5W0JdID0gdGhpcy55eVtCXSk7XG4gICAgICBTLnNldElucHV0KHMsIFAueXkpLCBQLnl5LmxleGVyID0gUywgUC55eS5wYXJzZXIgPSB0aGlzLCB0eXBlb2YgUy55eWxsb2MgPiBcInVcIiAmJiAoUy55eWxsb2MgPSB7fSk7XG4gICAgICB2YXIgTyA9IFMueXlsbG9jO1xuICAgICAgeS5wdXNoKE8pO1xuICAgICAgdmFyIHogPSBTLm9wdGlvbnMgJiYgUy5vcHRpb25zLnJhbmdlcztcbiAgICAgIHR5cGVvZiBQLnl5LnBhcnNlRXJyb3IgPT0gXCJmdW5jdGlvblwiID8gdGhpcy5wYXJzZUVycm9yID0gUC55eS5wYXJzZUVycm9yIDogdGhpcy5wYXJzZUVycm9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlRXJyb3I7XG4gICAgICBmdW5jdGlvbiBkKEwpIHtcbiAgICAgICAgbC5sZW5ndGggPSBsLmxlbmd0aCAtIDIgKiBMLCB4Lmxlbmd0aCA9IHgubGVuZ3RoIC0gTCwgeS5sZW5ndGggPSB5Lmxlbmd0aCAtIEw7XG4gICAgICB9XG4gICAgICBnKGQsIFwicG9wU3RhY2tcIik7XG4gICAgICBmdW5jdGlvbiBFKCkge1xuICAgICAgICB2YXIgTDtcbiAgICAgICAgcmV0dXJuIEwgPSBfLnBvcCgpIHx8IFMubGV4KCkgfHwgRCwgdHlwZW9mIEwgIT0gXCJudW1iZXJcIiAmJiAoTCBpbnN0YW5jZW9mIEFycmF5ICYmIChfID0gTCwgTCA9IF8ucG9wKCkpLCBMID0gby5zeW1ib2xzX1tMXSB8fCBMKSwgTDtcbiAgICAgIH1cbiAgICAgIGcoRSwgXCJsZXhcIik7XG4gICAgICBmb3IgKHZhciBBLCAkLCBJLCBuLCBmID0ge30sIHUsIGMsIHIsIG07IDsgKSB7XG4gICAgICAgIGlmICgkID0gbFtsLmxlbmd0aCAtIDFdLCB0aGlzLmRlZmF1bHRBY3Rpb25zWyRdID8gSSA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbJF0gOiAoKEEgPT09IG51bGwgfHwgdHlwZW9mIEEgPiBcInVcIikgJiYgKEEgPSBFKCkpLCBJID0gdlskXSAmJiB2WyRdW0FdKSwgdHlwZW9mIEkgPiBcInVcIiB8fCAhSS5sZW5ndGggfHwgIUlbMF0pIHtcbiAgICAgICAgICB2YXIgdyA9IFwiXCI7XG4gICAgICAgICAgbSA9IFtdO1xuICAgICAgICAgIGZvciAodSBpbiB2WyRdKVxuICAgICAgICAgICAgdGhpcy50ZXJtaW5hbHNfW3VdICYmIHUgPiBDICYmIG0ucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1t1XSArIFwiJ1wiKTtcbiAgICAgICAgICBTLnNob3dQb3NpdGlvbiA/IHcgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoVCArIDEpICsgYDpcbmAgKyBTLnNob3dQb3NpdGlvbigpICsgYFxuRXhwZWN0aW5nIGAgKyBtLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tBXSB8fCBBKSArIFwiJ1wiIDogdyA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChUICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChBID09IEQgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW0FdIHx8IEEpICsgXCInXCIpLCB0aGlzLnBhcnNlRXJyb3Iodywge1xuICAgICAgICAgICAgdGV4dDogUy5tYXRjaCxcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bQV0gfHwgQSxcbiAgICAgICAgICAgIGxpbmU6IFMueXlsaW5lbm8sXG4gICAgICAgICAgICBsb2M6IE8sXG4gICAgICAgICAgICBleHBlY3RlZDogbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChJWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgSS5sZW5ndGggPiAxKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArICQgKyBcIiwgdG9rZW46IFwiICsgQSk7XG4gICAgICAgIHN3aXRjaCAoSVswXSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGwucHVzaChBKSwgeC5wdXNoKFMueXl0ZXh0KSwgeS5wdXNoKFMueXlsbG9jKSwgbC5wdXNoKElbMV0pLCBBID0gbnVsbCwgTiA9IFMueXlsZW5nLCBNID0gUy55eXRleHQsIFQgPSBTLnl5bGluZW5vLCBPID0gUy55eWxsb2M7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpZiAoYyA9IHRoaXMucHJvZHVjdGlvbnNfW0lbMV1dWzFdLCBmLiQgPSB4W3gubGVuZ3RoIC0gY10sIGYuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHlbeS5sZW5ndGggLSAoYyB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiB5W3kubGVuZ3RoIC0gMV0ubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHlbeS5sZW5ndGggLSAoYyB8fCAxKV0uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogeVt5Lmxlbmd0aCAtIDFdLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LCB6ICYmIChmLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICB5W3kubGVuZ3RoIC0gKGMgfHwgMSldLnJhbmdlWzBdLFxuICAgICAgICAgICAgICB5W3kubGVuZ3RoIC0gMV0ucmFuZ2VbMV1cbiAgICAgICAgICAgIF0pLCBuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KGYsIFtcbiAgICAgICAgICAgICAgTSxcbiAgICAgICAgICAgICAgTixcbiAgICAgICAgICAgICAgVCxcbiAgICAgICAgICAgICAgUC55eSxcbiAgICAgICAgICAgICAgSVsxXSxcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgeVxuICAgICAgICAgICAgXS5jb25jYXQoUikpLCB0eXBlb2YgbiA8IFwidVwiKVxuICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgIGMgJiYgKGwgPSBsLnNsaWNlKDAsIC0xICogYyAqIDIpLCB4ID0geC5zbGljZSgwLCAtMSAqIGMpLCB5ID0geS5zbGljZSgwLCAtMSAqIGMpKSwgbC5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW0lbMV1dWzBdKSwgeC5wdXNoKGYuJCksIHkucHVzaChmLl8kKSwgciA9IHZbbFtsLmxlbmd0aCAtIDJdXVtsW2wubGVuZ3RoIC0gMV1dLCBsLnB1c2gocik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAhMDtcbiAgICB9LCBcInBhcnNlXCIpXG4gIH0sIGIgPSAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBrID0ge1xuICAgICAgRU9GOiAxLFxuICAgICAgcGFyc2VFcnJvcjogLyogQF9fUFVSRV9fICovIGcoZnVuY3Rpb24obywgbCkge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpXG4gICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihvLCBsKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvKTtcbiAgICAgIH0sIFwicGFyc2VFcnJvclwiKSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogLyogQF9fUFVSRV9fICovIGcoZnVuY3Rpb24ocywgbykge1xuICAgICAgICByZXR1cm4gdGhpcy55eSA9IG8gfHwgdGhpcy55eSB8fCB7fSwgdGhpcy5faW5wdXQgPSBzLCB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gITEsIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDAsIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCIsIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAodGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF0pLCB0aGlzLm9mZnNldCA9IDAsIHRoaXM7XG4gICAgICB9LCBcInNldElucHV0XCIpLFxuICAgICAgLy8gY29uc3VtZXMgYW5kIHJldHVybnMgb25lIGNoYXIgZnJvbSB0aGUgaW5wdXRcbiAgICAgIGlucHV0OiAvKiBAX19QVVJFX18gKi8gZyhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHMgPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gcywgdGhpcy55eWxlbmcrKywgdGhpcy5vZmZzZXQrKywgdGhpcy5tYXRjaCArPSBzLCB0aGlzLm1hdGNoZWQgKz0gcztcbiAgICAgICAgdmFyIG8gPSBzLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgcmV0dXJuIG8gPyAodGhpcy55eWxpbmVubysrLCB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKykgOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrLCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmIHRoaXMueXlsbG9jLnJhbmdlWzFdKyssIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSksIHM7XG4gICAgICB9LCBcImlucHV0XCIpLFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBnKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgdmFyIG8gPSBzLmxlbmd0aCwgbCA9IHMuc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBzICsgdGhpcy5faW5wdXQsIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIG8pLCB0aGlzLm9mZnNldCAtPSBvO1xuICAgICAgICB2YXIgXyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSksIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpLCBsLmxlbmd0aCAtIDEgJiYgKHRoaXMueXlsaW5lbm8gLT0gbC5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIHggPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgcmV0dXJuIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbCA/IChsLmxlbmd0aCA9PT0gXy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIF9bXy5sZW5ndGggLSBsLmxlbmd0aF0ubGVuZ3RoIC0gbFswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBvXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW3hbMF0sIHhbMF0gKyB0aGlzLnl5bGVuZyAtIG9dKSwgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXM7XG4gICAgICB9LCBcInVucHV0XCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbiAgICAgIG1vcmU6IC8qIEBfX1BVUkVfXyAqLyBnKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9yZSA9ICEwLCB0aGlzO1xuICAgICAgfSwgXCJtb3JlXCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgIHJlamVjdDogLyogQF9fUFVSRV9fICovIGcoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKVxuICAgICAgICAgIHRoaXMuX2JhY2t0cmFjayA9ICEwO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXG5gICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sIFwicmVqZWN0XCIpLFxuICAgICAgLy8gcmV0YWluIGZpcnN0IG4gY2hhcmFjdGVycyBvZiB0aGUgbWF0Y2hcbiAgICAgIGxlc3M6IC8qIEBfX1BVUkVfXyAqLyBnKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKHMpKTtcbiAgICAgIH0sIFwibGVzc1wiKSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogLyogQF9fUFVSRV9fICovIGcoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHMubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBzLnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwicGFzdElucHV0XCIpLFxuICAgICAgLy8gZGlzcGxheXMgdXBjb21pbmcgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICB1cGNvbWluZ0lucHV0OiAvKiBAX19QVVJFX18gKi8gZyhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHMgPSB0aGlzLm1hdGNoO1xuICAgICAgICByZXR1cm4gcy5sZW5ndGggPCAyMCAmJiAocyArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBzLmxlbmd0aCkpLCAocy5zdWJzdHIoMCwgMjApICsgKHMubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwidXBjb21pbmdJbnB1dFwiKSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogLyogQF9fUFVSRV9fICovIGcoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzID0gdGhpcy5wYXN0SW5wdXQoKSwgbyA9IG5ldyBBcnJheShzLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICByZXR1cm4gcyArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgYFxuYCArIG8gKyBcIl5cIjtcbiAgICAgIH0sIFwic2hvd1Bvc2l0aW9uXCIpLFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiAvKiBAX19QVVJFX18gKi8gZyhmdW5jdGlvbihzLCBvKSB7XG4gICAgICAgIHZhciBsLCBfLCB4O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlciAmJiAoeCA9IHtcbiAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAoeC55eWxsb2MucmFuZ2UgPSB0aGlzLnl5bGxvYy5yYW5nZS5zbGljZSgwKSkpLCBfID0gc1swXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyksIF8gJiYgKHRoaXMueXlsaW5lbm8gKz0gXy5sZW5ndGgpLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBfID8gX1tfLmxlbmd0aCAtIDFdLmxlbmd0aCAtIF9bXy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIHNbMF0ubGVuZ3RoXG4gICAgICAgIH0sIHRoaXMueXl0ZXh0ICs9IHNbMF0sIHRoaXMubWF0Y2ggKz0gc1swXSwgdGhpcy5tYXRjaGVzID0gcywgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ10pLCB0aGlzLl9tb3JlID0gITEsIHRoaXMuX2JhY2t0cmFjayA9ICExLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKHNbMF0ubGVuZ3RoKSwgdGhpcy5tYXRjaGVkICs9IHNbMF0sIGwgPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBvLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pLCB0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQgJiYgKHRoaXMuZG9uZSA9ICExKSwgbClcbiAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIHkgaW4geClcbiAgICAgICAgICAgIHRoaXNbeV0gPSB4W3ldO1xuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9LCBcInRlc3RfbWF0Y2hcIiksXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCBpbiBpbnB1dFxuICAgICAgbmV4dDogLyogQF9fUFVSRV9fICovIGcoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB0aGlzLl9pbnB1dCB8fCAodGhpcy5kb25lID0gITApO1xuICAgICAgICB2YXIgcywgbywgbCwgXztcbiAgICAgICAgdGhpcy5fbW9yZSB8fCAodGhpcy55eXRleHQgPSBcIlwiLCB0aGlzLm1hdGNoID0gXCJcIik7XG4gICAgICAgIGZvciAodmFyIHggPSB0aGlzLl9jdXJyZW50UnVsZXMoKSwgeSA9IDA7IHkgPCB4Lmxlbmd0aDsgeSsrKVxuICAgICAgICAgIGlmIChsID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1t4W3ldXSksIGwgJiYgKCFvIHx8IGxbMF0ubGVuZ3RoID4gb1swXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBpZiAobyA9IGwsIF8gPSB5LCB0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIGlmIChzID0gdGhpcy50ZXN0X21hdGNoKGwsIHhbeV0pLCBzICE9PSAhMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIG8gPSAhMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmZsZXgpXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG8gPyAocyA9IHRoaXMudGVzdF9tYXRjaChvLCB4W19dKSwgcyAhPT0gITEgPyBzIDogITEpIDogdGhpcy5faW5wdXQgPT09IFwiXCIgPyB0aGlzLkVPRiA6IHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBVbnJlY29nbml6ZWQgdGV4dC5cbmAgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgIH0pO1xuICAgICAgfSwgXCJuZXh0XCIpLFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiAvKiBAX19QVVJFX18gKi8gZyhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIG8gfHwgdGhpcy5sZXgoKTtcbiAgICAgIH0sIFwibGV4XCIpLFxuICAgICAgLy8gYWN0aXZhdGVzIGEgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSAocHVzaGVzIHRoZSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9udG8gdGhlIGNvbmRpdGlvbiBzdGFjaylcbiAgICAgIGJlZ2luOiAvKiBAX19QVVJFX18gKi8gZyhmdW5jdGlvbihvKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChvKTtcbiAgICAgIH0sIFwiYmVnaW5cIiksXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyBnKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbyA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIG8gPiAwID8gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKSA6IHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICB9LCBcInBvcFN0YXRlXCIpLFxuICAgICAgLy8gcHJvZHVjZSB0aGUgbGV4ZXIgcnVsZSBzZXQgd2hpY2ggaXMgYWN0aXZlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGVcbiAgICAgIF9jdXJyZW50UnVsZXM6IC8qIEBfX1BVUkVfXyAqLyBnKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdID8gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXMgOiB0aGlzLmNvbmRpdGlvbnMuSU5JVElBTC5ydWxlcztcbiAgICAgIH0sIFwiX2N1cnJlbnRSdWxlc1wiKSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiAvKiBAX19QVVJFX18gKi8gZyhmdW5jdGlvbihvKSB7XG4gICAgICAgIHJldHVybiBvID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnMobyB8fCAwKSwgbyA+PSAwID8gdGhpcy5jb25kaXRpb25TdGFja1tvXSA6IFwiSU5JVElBTFwiO1xuICAgICAgfSwgXCJ0b3BTdGF0ZVwiKSxcbiAgICAgIC8vIGFsaWFzIGZvciBiZWdpbihjb25kaXRpb24pXG4gICAgICBwdXNoU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyBnKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgdGhpcy5iZWdpbihvKTtcbiAgICAgIH0sIFwicHVzaFN0YXRlXCIpLFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiAvKiBAX19QVVJFX18gKi8gZyhmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSwgXCJzdGF0ZVN0YWNrU2l6ZVwiKSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6ICEwIH0sXG4gICAgICBwZXJmb3JtQWN0aW9uOiAvKiBAX19QVVJFX18gKi8gZyhmdW5jdGlvbihvLCBsLCBfLCB4KSB7XG4gICAgICAgIHN3aXRjaCAoXykge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcImNzdlwiKSwgNDtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJjc3ZcIiksIDQ7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIDEwO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiA1O1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAxMjtcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJlc2NhcGVkX3RleHRcIiksIDE4O1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiAyMDtcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZShcImVzY2FwZWRfdGV4dFwiKSwgMTg7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgcmV0dXJuIDE5O1xuICAgICAgICB9XG4gICAgICB9LCBcImFub255bW91c1wiKSxcbiAgICAgIHJ1bGVzOiBbL14oPzpzYW5rZXktYmV0YVxcYikvaSwgL14oPzpzYW5rZXlcXGIpL2ksIC9eKD86JCkvaSwgL14oPzooKFxcdTAwMERcXHUwMDBBKXwoXFx1MDAwQSkpKS9pLCAvXig/OihcXHUwMDJDKSkvaSwgL14oPzooXFx1MDAyMikpL2ksIC9eKD86KFtcXHUwMDIwLVxcdTAwMjFcXHUwMDIzLVxcdTAwMkJcXHUwMDJELVxcdTAwN0VdKSopL2ksIC9eKD86KFxcdTAwMjIpKD8hKFxcdTAwMjIpKSkvaSwgL14oPzooKFtcXHUwMDIwLVxcdTAwMjFcXHUwMDIzLVxcdTAwMkJcXHUwMDJELVxcdTAwN0VdKXwoXFx1MDAyQyl8KFxcdTAwMEQpfChcXHUwMDBBKXwoXFx1MDAyMikoXFx1MDAyMikpKikvaV0sXG4gICAgICBjb25kaXRpb25zOiB7IGNzdjogeyBydWxlczogWzIsIDMsIDQsIDUsIDYsIDcsIDhdLCBpbmNsdXNpdmU6ICExIH0sIGVzY2FwZWRfdGV4dDogeyBydWxlczogWzcsIDhdLCBpbmNsdXNpdmU6ICExIH0sIElOSVRJQUw6IHsgcnVsZXM6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XSwgaW5jbHVzaXZlOiAhMCB9IH1cbiAgICB9O1xuICAgIHJldHVybiBrO1xuICB9KSgpO1xuICBoLmxleGVyID0gYjtcbiAgZnVuY3Rpb24gcCgpIHtcbiAgICB0aGlzLnl5ID0ge307XG4gIH1cbiAgcmV0dXJuIGcocCwgXCJQYXJzZXJcIiksIHAucHJvdG90eXBlID0gaCwgaC5QYXJzZXIgPSBwLCBuZXcgcCgpO1xufSkoKTtcbmF0LnBhcnNlciA9IGF0O1xudmFyIEsgPSBhdCwgSiA9IFtdLCB0dCA9IFtdLCBaID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgWnQgPSAvKiBAX19QVVJFX18gKi8gZygoKSA9PiB7XG4gIEogPSBbXSwgdHQgPSBbXSwgWiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIEF0KCk7XG59LCBcImNsZWFyXCIpLCBXLCBKdCA9IChXID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlLCBpLCBhID0gMCkge1xuICAgIHRoaXMuc291cmNlID0gZSwgdGhpcy50YXJnZXQgPSBpLCB0aGlzLnZhbHVlID0gYTtcbiAgfVxufSwgZyhXLCBcIlNhbmtleUxpbmtcIiksIFcpLCB0ZSA9IC8qIEBfX1BVUkVfXyAqLyBnKCh0LCBlLCBpKSA9PiB7XG4gIEoucHVzaChuZXcgSnQodCwgZSwgaSkpO1xufSwgXCJhZGRMaW5rXCIpLCBVLCBlZSA9IChVID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5JRCA9IGU7XG4gIH1cbn0sIGcoVSwgXCJTYW5rZXlOb2RlXCIpLCBVKSwgbmUgPSAvKiBAX19QVVJFX18gKi8gZygodCkgPT4ge1xuICB0ID0gVHQuc2FuaXRpemVUZXh0KHQsIGx0KCkpO1xuICBsZXQgZSA9IFouZ2V0KHQpO1xuICByZXR1cm4gZSA9PT0gdm9pZCAwICYmIChlID0gbmV3IGVlKHQpLCBaLnNldCh0LCBlKSwgdHQucHVzaChlKSksIGU7XG59LCBcImZpbmRPckNyZWF0ZU5vZGVcIiksIGllID0gLyogQF9fUFVSRV9fICovIGcoKCkgPT4gdHQsIFwiZ2V0Tm9kZXNcIiksIHNlID0gLyogQF9fUFVSRV9fICovIGcoKCkgPT4gSiwgXCJnZXRMaW5rc1wiKSwgcmUgPSAvKiBAX19QVVJFX18gKi8gZygoKSA9PiAoe1xuICBub2RlczogdHQubWFwKCh0KSA9PiAoeyBpZDogdC5JRCB9KSksXG4gIGxpbmtzOiBKLm1hcCgodCkgPT4gKHtcbiAgICBzb3VyY2U6IHQuc291cmNlLklELFxuICAgIHRhcmdldDogdC50YXJnZXQuSUQsXG4gICAgdmFsdWU6IHQudmFsdWVcbiAgfSkpXG59KSwgXCJnZXRHcmFwaFwiKSwgb2UgPSB7XG4gIG5vZGVzTWFwOiBaLFxuICBnZXRDb25maWc6IC8qIEBfX1BVUkVfXyAqLyBnKCgpID0+IGx0KCkuc2Fua2V5LCBcImdldENvbmZpZ1wiKSxcbiAgZ2V0Tm9kZXM6IGllLFxuICBnZXRMaW5rczogc2UsXG4gIGdldEdyYXBoOiByZSxcbiAgYWRkTGluazogdGUsXG4gIGZpbmRPckNyZWF0ZU5vZGU6IG5lLFxuICBnZXRBY2NUaXRsZTogU3QsXG4gIHNldEFjY1RpdGxlOiB3dCxcbiAgZ2V0QWNjRGVzY3JpcHRpb246IGJ0LFxuICBzZXRBY2NEZXNjcmlwdGlvbjogdnQsXG4gIGdldERpYWdyYW1UaXRsZTogeHQsXG4gIHNldERpYWdyYW1UaXRsZTogX3QsXG4gIGNsZWFyOiBadFxufSwgaiwgZ3QgPSAoaiA9IGNsYXNzIHtcbiAgc3RhdGljIG5leHQoZSkge1xuICAgIHJldHVybiBuZXcgaihlICsgKytqLmNvdW50KTtcbiAgfVxuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5pZCA9IGUsIHRoaXMuaHJlZiA9IGAjJHtlfWA7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIFwidXJsKFwiICsgdGhpcy5ocmVmICsgXCIpXCI7XG4gIH1cbn0sIGcoaiwgXCJVaWRcIiksIGouY291bnQgPSAwLCBqKSwgYWUgPSB7XG4gIGxlZnQ6IEN0LFxuICByaWdodDogT3QsXG4gIGNlbnRlcjogenQsXG4gIGp1c3RpZnk6IG10XG59LCBsZSA9IC8qIEBfX1BVUkVfXyAqLyBnKGZ1bmN0aW9uKHQsIGUsIGksIGEpIHtcbiAgY29uc3QgeyBzZWN1cml0eUxldmVsOiBoLCBzYW5rZXk6IGIgfSA9IGx0KCksIHAgPSBMdC5zYW5rZXk7XG4gIGxldCBrO1xuICBoID09PSBcInNhbmRib3hcIiAmJiAoayA9IEgoXCIjaVwiICsgZSkpO1xuICBjb25zdCBzID0gaCA9PT0gXCJzYW5kYm94XCIgPyBIKGsubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBIKFwiYm9keVwiKSwgbyA9IGggPT09IFwic2FuZGJveFwiID8gcy5zZWxlY3QoYFtpZD1cIiR7ZX1cIl1gKSA6IEgoYFtpZD1cIiR7ZX1cIl1gKSwgbCA9IGI/LndpZHRoID8/IHAud2lkdGgsIF8gPSBiPy5oZWlnaHQgPz8gcC53aWR0aCwgeCA9IGI/LnVzZU1heFdpZHRoID8/IHAudXNlTWF4V2lkdGgsIHkgPSBiPy5ub2RlQWxpZ25tZW50ID8/IHAubm9kZUFsaWdubWVudCwgdiA9IGI/LnByZWZpeCA/PyBwLnByZWZpeCwgTSA9IGI/LnN1ZmZpeCA/PyBwLnN1ZmZpeCwgVCA9IGI/LnNob3dWYWx1ZXMgPz8gcC5zaG93VmFsdWVzLCBOID0gYS5kYi5nZXRHcmFwaCgpLCBDID0gYWVbeV07XG4gIEJ0KCkubm9kZUlkKChkKSA9PiBkLmlkKS5ub2RlV2lkdGgoMTApLm5vZGVQYWRkaW5nKDEwICsgKFQgPyAxNSA6IDApKS5ub2RlQWxpZ24oQykuZXh0ZW50KFtcbiAgICBbMCwgMF0sXG4gICAgW2wsIF9dXG4gIF0pKE4pO1xuICBjb25zdCBTID0gTXQoSXQpO1xuICBvLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibm9kZXNcIikuc2VsZWN0QWxsKFwiLm5vZGVcIikuZGF0YShOLm5vZGVzKS5qb2luKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpLmF0dHIoXCJpZFwiLCAoZCkgPT4gKGQudWlkID0gZ3QubmV4dChcIm5vZGUtXCIpKS5pZCkuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54MCArIFwiLFwiICsgZC55MCArIFwiKVwiO1xuICB9KS5hdHRyKFwieFwiLCAoZCkgPT4gZC54MCkuYXR0cihcInlcIiwgKGQpID0+IGQueTApLmFwcGVuZChcInJlY3RcIikuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gZC55MSAtIGQueTApLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4gZC54MSAtIGQueDApLmF0dHIoXCJmaWxsXCIsIChkKSA9PiBTKGQuaWQpKTtcbiAgY29uc3QgUCA9IC8qIEBfX1BVUkVfXyAqLyBnKCh7IGlkOiBkLCB2YWx1ZTogRSB9KSA9PiBUID8gYCR7ZH1cbiR7dn0ke01hdGgucm91bmQoRSAqIDEwMCkgLyAxMDB9JHtNfWAgOiBkLCBcImdldFRleHRcIik7XG4gIG8uYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJub2RlLWxhYmVsc1wiKS5hdHRyKFwiZm9udC1zaXplXCIsIDE0KS5zZWxlY3RBbGwoXCJ0ZXh0XCIpLmRhdGEoTi5ub2Rlcykuam9pbihcInRleHRcIikuYXR0cihcInhcIiwgKGQpID0+IGQueDAgPCBsIC8gMiA/IGQueDEgKyA2IDogZC54MCAtIDYpLmF0dHIoXCJ5XCIsIChkKSA9PiAoZC55MSArIGQueTApIC8gMikuYXR0cihcImR5XCIsIGAke1QgPyBcIjBcIiA6IFwiMC4zNVwifWVtYCkuYXR0cihcInRleHQtYW5jaG9yXCIsIChkKSA9PiBkLngwIDwgbCAvIDIgPyBcInN0YXJ0XCIgOiBcImVuZFwiKS50ZXh0KFApO1xuICBjb25zdCBCID0gby5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxpbmtzXCIpLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKS5hdHRyKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC41KS5zZWxlY3RBbGwoXCIubGlua1wiKS5kYXRhKE4ubGlua3MpLmpvaW4oXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxpbmtcIikuc3R5bGUoXCJtaXgtYmxlbmQtbW9kZVwiLCBcIm11bHRpcGx5XCIpLCBPID0gYj8ubGlua0NvbG9yID8/IFwiZ3JhZGllbnRcIjtcbiAgaWYgKE8gPT09IFwiZ3JhZGllbnRcIikge1xuICAgIGNvbnN0IGQgPSBCLmFwcGVuZChcImxpbmVhckdyYWRpZW50XCIpLmF0dHIoXCJpZFwiLCAoRSkgPT4gKEUudWlkID0gZ3QubmV4dChcImxpbmVhckdyYWRpZW50LVwiKSkuaWQpLmF0dHIoXCJncmFkaWVudFVuaXRzXCIsIFwidXNlclNwYWNlT25Vc2VcIikuYXR0cihcIngxXCIsIChFKSA9PiBFLnNvdXJjZS54MSkuYXR0cihcIngyXCIsIChFKSA9PiBFLnRhcmdldC54MCk7XG4gICAgZC5hcHBlbmQoXCJzdG9wXCIpLmF0dHIoXCJvZmZzZXRcIiwgXCIwJVwiKS5hdHRyKFwic3RvcC1jb2xvclwiLCAoRSkgPT4gUyhFLnNvdXJjZS5pZCkpLCBkLmFwcGVuZChcInN0b3BcIikuYXR0cihcIm9mZnNldFwiLCBcIjEwMCVcIikuYXR0cihcInN0b3AtY29sb3JcIiwgKEUpID0+IFMoRS50YXJnZXQuaWQpKTtcbiAgfVxuICBsZXQgejtcbiAgc3dpdGNoIChPKSB7XG4gICAgY2FzZSBcImdyYWRpZW50XCI6XG4gICAgICB6ID0gLyogQF9fUFVSRV9fICovIGcoKGQpID0+IGQudWlkLCBcImNvbG9yaW5nXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNvdXJjZVwiOlxuICAgICAgeiA9IC8qIEBfX1BVUkVfXyAqLyBnKChkKSA9PiBTKGQuc291cmNlLmlkKSwgXCJjb2xvcmluZ1wiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0YXJnZXRcIjpcbiAgICAgIHogPSAvKiBAX19QVVJFX18gKi8gZygoZCkgPT4gUyhkLnRhcmdldC5pZCksIFwiY29sb3JpbmdcIik7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgeiA9IE87XG4gIH1cbiAgQi5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIEt0KCkpLmF0dHIoXCJzdHJva2VcIiwgeikuYXR0cihcInN0cm9rZS13aWR0aFwiLCAoZCkgPT4gTWF0aC5tYXgoMSwgZC53aWR0aCkpLCBFdCh2b2lkIDAsIG8sIDAsIHgpO1xufSwgXCJkcmF3XCIpLCBjZSA9IHtcbiAgZHJhdzogbGVcbn0sIHVlID0gLyogQF9fUFVSRV9fICovIGcoKHQpID0+IHQucmVwbGFjZUFsbCgvXlteXFxTXFxuXFxyXSt8W15cXFNcXG5cXHJdKyQvZywgXCJcIikucmVwbGFjZUFsbCgvKFtcXG5cXHJdKSsvZywgYFxuYCkudHJpbSgpLCBcInByZXBhcmVUZXh0Rm9yUGFyc2luZ1wiKSwgaGUgPSAvKiBAX19QVVJFX18gKi8gZygodCkgPT4gYC5sYWJlbCB7XG4gICAgICBmb250LWZhbWlseTogJHt0LmZvbnRGYW1pbHl9O1xuICAgIH1gLCBcImdldFN0eWxlc1wiKSwgZmUgPSBoZSwgeWUgPSBLLnBhcnNlLmJpbmQoSyk7XG5LLnBhcnNlID0gKHQpID0+IHllKHVlKHQpKTtcbnZhciBwZSA9IHtcbiAgc3R5bGVzOiBmZSxcbiAgcGFyc2VyOiBLLFxuICBkYjogb2UsXG4gIHJlbmRlcmVyOiBjZVxufTtcbmV4cG9ydCB7XG4gIHBlIGFzIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsiaCIsInAiLCJnIiwiQXQiLCJUdCIsImx0IiwiU3QiLCJ3dCIsImJ0IiwidnQiLCJ4dCIsIl90IiwiTHQiLCJIIiwiTXQiLCJFdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsU0FBUyxHQUFHLEdBQUc7QUFDYixXQUFTLElBQUksRUFBRSxTQUFTLElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSyxHQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsTUFBTSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUM7QUFDcEcsU0FBTztBQUNUO0FBQ0EsTUFBTSxLQUFLLEdBQUcsOERBQThEO0FBQzVFLFNBQVMsR0FBRyxHQUFHLEdBQUc7QUFDaEIsTUFBSTtBQUNKLE1BQUksTUFBTTtBQUNSLGVBQVcsS0FBSztBQUNkLFdBQUssU0FBUyxJQUFJLEtBQUssTUFBTSxVQUFVLEtBQUssT0FBTyxJQUFJO0FBQUEsT0FDdEQ7QUFDSCxRQUFJLElBQUk7QUFDUixhQUFTQSxNQUFLO0FBQ1osT0FBQ0EsS0FBSSxFQUFFQSxJQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sU0FBUyxJQUFJQSxNQUFLLE1BQU0sVUFBVUEsTUFBS0EsUUFBTyxJQUFJQTtBQUFBLEVBQzVFO0FBQ0EsU0FBTztBQUNUO0FBQ0EsU0FBUyxHQUFHLEdBQUcsR0FBRztBQUNoQixNQUFJO0FBQ0osTUFBSSxNQUFNO0FBQ1IsZUFBVyxLQUFLO0FBQ2QsV0FBSyxTQUFTLElBQUksS0FBSyxNQUFNLFVBQVUs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SSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSUQsS0FBSSxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJO0FBQzFMLFdBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLE1BQU1BLEtBQUksTUFBTUEsS0FBSSxVQUFVLEVBQUUsSUFBSSxJQUFJLElBQUksS0FBSyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUk7QUFBQSxJQUNoTTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUssU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHQSxJQUFHLEdBQUc7QUFDOUIsUUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDOUIsUUFBSUMsS0FBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJQSxJQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJRCxLQUFJQSxLQUFJO0FBQ25HLFFBQUksSUFBSSxFQUFHLE9BQU0sSUFBSSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELFNBQUssUUFBUSxPQUFPLEtBQUssS0FBSyxNQUFNLElBQUksTUFBTSxLQUFLLEtBQUssSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksT0FBTyxLQUFLLEtBQUssTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLElBQUksS0FBSyxLQUFLLElB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LEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFDLEdBQUksRUFBRSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFDLEdBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFH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
