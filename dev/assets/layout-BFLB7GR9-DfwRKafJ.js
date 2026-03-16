import { X, E, _ as _$1, O } from "./graph-CVVLTrhn-shvQQR6j.js";
import { H as Hr$1, Z as Zr$1, y as yn$1, n as nn, e as an, C as Cr$1, G as Gn$1, Y as Yr$1, T as Tr$1, q as qr$1, F as Fr$1, j as j$1, x as x$1, R as R$1, M as M$1, f as Rr$1, g as cn$1 } from "./_baseUniq-DbLykLaa-DOrTuLNC.js";
import { L, v, k as k$1, M, A as A$1, x as x$2 } from "./min-x5JjnDaq-Bgohq8wZ.js";
import { ap as Jw, aK as tk, aI as Pd, aL as Ma, aM as rk, aN as Qw, aO as Yw, ay as oa, aP as zd, ax as Tw, aQ as el, an as Uw, aq as yr$1, aR as Id, aF as Mw, aS as Da, aT as E_ } from "./SynchronicGraphPage-D8s-0-s1.js";
var on = /\s/;
function un(e) {
  for (var n = e.length; n-- && on.test(e.charAt(n)); )
    ;
  return n;
}
var dn = /^\s+/;
function sn(e) {
  return e && e.slice(0, un(e) + 1).replace(dn, "");
}
var re = NaN, fn = /^[-+]0x[0-9a-f]+$/i, cn = /^0b[01]+$/i, ln = /^0o[0-7]+$/i, hn = parseInt;
function vn(e) {
  if (typeof e == "number")
    return e;
  if (x$1(e))
    return re;
  if (yr$1(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = yr$1(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = sn(e);
  var r = cn.test(e);
  return r || ln.test(e) ? hn(e.slice(2), r ? 2 : 8) : fn.test(e) ? re : +e;
}
var te = 1 / 0, pn = 17976931348623157e292;
function T(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = vn(e), e === te || e === -te) {
    var n = e < 0 ? -1 : 1;
    return n * pn;
  }
  return e === e ? e : 0;
}
function wn(e) {
  var n = T(e), r = n % 1;
  return n === n ? r ? n - r : n : 0;
}
function bn(e) {
  return Qw(Yw(e, void 0, L), e + "");
}
var mn = 1, gn = 4;
function yn(e) {
  return O(e, mn | gn);
}
var Oe = Object.prototype, xn = Oe.hasOwnProperty, En = Jw(function(e, n) {
  e = Object(e);
  var r = -1, t = n.length, i = t > 2 ? n[2] : void 0;
  for (i && tk(n[0], n[1], i) && (t = 1); ++r < t; )
    for (var o = n[r], a = Pd(o), u = -1, d = a.length; ++u < d; ) {
      var s = a[u], c = e[s];
      (c === void 0 || Ma(c, Oe[s]) && !xn.call(e, s)) && (e[s] = o[s]);
    }
  return e;
});
function F(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
function kn(e) {
  return function(n, r, t) {
    var i = Object(n);
    if (!Da(n)) {
      var o = an(r);
      n = M$1(n), r = function(u) {
        return o(i[u], u, i);
      };
    }
    var a = e(n, r, t);
    return a > -1 ? i[o ? n[a] : a] : void 0;
  };
}
var On = Math.max;
function Nn(e, n, r) {
  var t = e == null ? 0 : e.length;
  if (!t)
    return -1;
  var i = r == null ? 0 : wn(r);
  return i < 0 && (i = On(t + i, 0)), cn$1(e, an(n), i);
}
var U = kn(Nn);
function Ln(e, n) {
  return e == null ? e : E_(e, Fr$1(n), Pd);
}
function Pn(e, n) {
  return e && Cr$1(e, Fr$1(n));
}
function _n(e, n) {
  return e > n;
}
var Cn = Object.prototype, In = Cn.hasOwnProperty;
function Rn(e, n) {
  return e != null && In.call(e, n);
}
function Ne(e, n) {
  return e != null && Tr$1(e, n, Rn);
}
function j(e, n) {
  var r = {};
  return n = an(n), Cr$1(e, function(t, i, o) {
    el(r, i, n(t, i, o));
  }), r;
}
function y(e) {
  return e && e.length ? A$1(e, zd, _n) : void 0;
}
function Z(e, n) {
  return e && e.length ? A$1(e, an(n), x$2) : void 0;
}
function Tn(e, n, r, t) {
  if (!yr$1(e))
    return e;
  n = j$1(n, e);
  for (var i = -1, o = n.length, a = o - 1, u = e; u != null && ++i < o; ) {
    var d = R$1(n[i]), s = r;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (i != a) {
      var c = u[d];
      s = void 0, s === void 0 && (s = yr$1(c) ? c : Id(n[i + 1]) ? [] : {});
    }
    Mw(u, d, s), u = u[d];
  }
  return e;
}
function Mn(e, n, r) {
  for (var t = -1, i = n.length, o = {}; ++t < i; ) {
    var a = n[t], u = nn(e, a);
    r(u, a) && Tn(o, j$1(a, e), u);
  }
  return o;
}
function Sn(e, n) {
  var r = e.length;
  for (e.sort(n); r--; )
    e[r] = e[r].value;
  return e;
}
function Fn(e, n) {
  if (e !== n) {
    var r = e !== void 0, t = e === null, i = e === e, o = x$1(e), a = n !== void 0, u = n === null, d = n === n, s = x$1(n);
    if (!u && !s && !o && e > n || o && a && d && !u && !s || t && a && d || !r && d || !i)
      return 1;
    if (!t && !o && !s && e < n || s && r && i && !t && !o || u && r && i || !a && i || !d)
      return -1;
  }
  return 0;
}
function An(e, n, r) {
  for (var t = -1, i = e.criteria, o = n.criteria, a = i.length, u = r.length; ++t < a; ) {
    var d = Fn(i[t], o[t]);
    if (d) {
      if (t >= u)
        return d;
      var s = r[t];
      return d * (s == "desc" ? -1 : 1);
    }
  }
  return e.index - n.index;
}
function Bn(e, n, r) {
  n.length ? n = yn$1(n, function(o) {
    return oa(o) ? function(a) {
      return nn(a, o.length === 1 ? o[0] : o);
    } : o;
  }) : n = [zd];
  var t = -1;
  n = yn$1(n, Tw(an));
  var i = v(e, function(o, a, u) {
    var d = yn$1(n, function(s) {
      return s(o);
    });
    return { criteria: d, index: ++t, value: o };
  });
  return Sn(i, function(o, a) {
    return An(o, a, r);
  });
}
function jn(e, n) {
  return Mn(e, n, function(r, t) {
    return Rr$1(e, t);
  });
}
var A = bn(function(e, n) {
  return e == null ? {} : jn(e, n);
}), Gn = Math.ceil, Vn = Math.max;
function Yn(e, n, r, t) {
  for (var i = -1, o = Vn(Gn((n - e) / (r || 1)), 0), a = Array(o); o--; )
    a[++i] = e, e += r;
  return a;
}
function $n(e) {
  return function(n, r, t) {
    return t && typeof t != "number" && tk(n, r, t) && (r = t = void 0), n = T(n), r === void 0 ? (r = n, n = 0) : r = T(r), t = t === void 0 ? n < r ? 1 : -1 : T(t), Yn(n, r, t);
  };
}
var k = $n(), R = Jw(function(e, n) {
  if (e == null)
    return [];
  var r = n.length;
  return r > 1 && tk(e, n[0], n[1]) ? n = [] : r > 2 && tk(n[0], n[1], n[2]) && (n = [n[0]]), Bn(e, Hr$1(n), []);
}), Dn = 0;
function J(e) {
  var n = ++Dn;
  return Gn$1(e) + n;
}
function qn(e, n, r) {
  for (var t = -1, i = e.length, o = n.length, a = {}; ++t < i; ) {
    var u = t < o ? n[t] : void 0;
    r(a, e[t], u);
  }
  return a;
}
function Wn(e, n) {
  return qn(e || [], n || [], Mw);
}
class Xn {
  constructor() {
    var n = {};
    n._next = n._prev = n, this._sentinel = n;
  }
  dequeue() {
    var n = this._sentinel, r = n._prev;
    if (r !== n)
      return ie(r), r;
  }
  enqueue(n) {
    var r = this._sentinel;
    n._prev && n._next && ie(n), n._next = r._next, r._next._prev = n, r._next = n, n._prev = r;
  }
  toString() {
    for (var n = [], r = this._sentinel, t = r._prev; t !== r; )
      n.push(JSON.stringify(t, zn)), t = t._prev;
    return "[" + n.join(", ") + "]";
  }
}
function ie(e) {
  e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function zn(e, n) {
  if (e !== "_next" && e !== "_prev")
    return n;
}
var Hn = Uw(1);
function Un(e, n) {
  if (e.nodeCount() <= 1)
    return [];
  var r = Jn(e, n || Hn), t = Zn(r.graph, r.buckets, r.zeroIdx);
  return L(
    M(t, function(i) {
      return e.outEdges(i.v, i.w);
    })
  );
}
function Zn(e, n, r) {
  for (var t = [], i = n[n.length - 1], o = n[0], a; e.nodeCount(); ) {
    for (; a = o.dequeue(); )
      Y(e, n, r, a);
    for (; a = i.dequeue(); )
      Y(e, n, r, a);
    if (e.nodeCount()) {
      for (var u = n.length - 2; u > 0; --u)
        if (a = n[u].dequeue(), a) {
          t = t.concat(Y(e, n, r, a, true));
          break;
        }
    }
  }
  return t;
}
function Y(e, n, r, t, i) {
  var o = i ? [] : void 0;
  return Zr$1(e.inEdges(t.v), function(a) {
    var u = e.edge(a), d = e.node(a.v);
    i && o.push({ v: a.v, w: a.w }), d.out -= u, H(n, r, d);
  }), Zr$1(e.outEdges(t.v), function(a) {
    var u = e.edge(a), d = a.w, s = e.node(d);
    s.in -= u, H(n, r, s);
  }), e.removeNode(t.v), o;
}
function Jn(e, n) {
  var r = new X(), t = 0, i = 0;
  Zr$1(e.nodes(), function(u) {
    r.setNode(u, { v: u, in: 0, out: 0 });
  }), Zr$1(e.edges(), function(u) {
    var d = r.edge(u.v, u.w) || 0, s = n(u), c = d + s;
    r.setEdge(u.v, u.w, c), i = Math.max(i, r.node(u.v).out += s), t = Math.max(t, r.node(u.w).in += s);
  });
  var o = k(i + t + 3).map(function() {
    return new Xn();
  }), a = t + 1;
  return Zr$1(r.nodes(), function(u) {
    H(o, a, r.node(u));
  }), { graph: r, buckets: o, zeroIdx: a };
}
function H(e, n, r) {
  r.out ? r.in ? e[r.out - r.in + n].enqueue(r) : e[e.length - 1].enqueue(r) : e[0].enqueue(r);
}
function Kn(e) {
  var n = e.graph().acyclicer === "greedy" ? Un(e, r(e)) : Qn(e);
  Zr$1(n, function(t) {
    var i = e.edge(t);
    e.removeEdge(t), i.forwardName = t.name, i.reversed = true, e.setEdge(t.w, t.v, i, J("rev"));
  });
  function r(t) {
    return function(i) {
      return t.edge(i).weight;
    };
  }
}
function Qn(e) {
  var n = [], r = {}, t = {};
  function i(o) {
    Object.prototype.hasOwnProperty.call(t, o) || (t[o] = true, r[o] = true, Zr$1(e.outEdges(o), function(a) {
      Object.prototype.hasOwnProperty.call(r, a.w) ? n.push(a) : i(a.w);
    }), delete r[o]);
  }
  return Zr$1(e.nodes(), i), n;
}
function er(e) {
  Zr$1(e.edges(), function(n) {
    var r = e.edge(n);
    if (r.reversed) {
      e.removeEdge(n);
      var t = r.forwardName;
      delete r.reversed, delete r.forwardName, e.setEdge(n.w, n.v, r, t);
    }
  });
}
function N(e, n, r, t) {
  var i;
  do
    i = J(t);
  while (e.hasNode(i));
  return r.dummy = n, e.setNode(i, r), i;
}
function nr(e) {
  var n = new X().setGraph(e.graph());
  return Zr$1(e.nodes(), function(r) {
    n.setNode(r, e.node(r));
  }), Zr$1(e.edges(), function(r) {
    var t = n.edge(r.v, r.w) || { weight: 0, minlen: 1 }, i = e.edge(r);
    n.setEdge(r.v, r.w, {
      weight: t.weight + i.weight,
      minlen: Math.max(t.minlen, i.minlen)
    });
  }), n;
}
function Le(e) {
  var n = new X({ multigraph: e.isMultigraph() }).setGraph(e.graph());
  return Zr$1(e.nodes(), function(r) {
    e.children(r).length || n.setNode(r, e.node(r));
  }), Zr$1(e.edges(), function(r) {
    n.setEdge(r, e.edge(r));
  }), n;
}
function ae(e, n) {
  var r = e.x, t = e.y, i = n.x - r, o = n.y - t, a = e.width / 2, u = e.height / 2;
  if (!i && !o)
    throw new Error("Not possible to find intersection inside of the rectangle");
  var d, s;
  return Math.abs(o) * a > Math.abs(i) * u ? (o < 0 && (u = -u), d = u * i / o, s = u) : (i < 0 && (a = -a), d = a, s = a * o / i), { x: r + d, y: t + s };
}
function G(e) {
  var n = M(k(Pe(e) + 1), function() {
    return [];
  });
  return Zr$1(e.nodes(), function(r) {
    var t = e.node(r), i = t.rank;
    _$1(i) || (n[i][t.order] = r);
  }), n;
}
function rr(e) {
  var n = k$1(
    M(e.nodes(), function(r) {
      return e.node(r).rank;
    })
  );
  Zr$1(e.nodes(), function(r) {
    var t = e.node(r);
    Ne(t, "rank") && (t.rank -= n);
  });
}
function tr(e) {
  var n = k$1(
    M(e.nodes(), function(o) {
      return e.node(o).rank;
    })
  ), r = [];
  Zr$1(e.nodes(), function(o) {
    var a = e.node(o).rank - n;
    r[a] || (r[a] = []), r[a].push(o);
  });
  var t = 0, i = e.graph().nodeRankFactor;
  Zr$1(r, function(o, a) {
    _$1(o) && a % i !== 0 ? --t : t && Zr$1(o, function(u) {
      e.node(u).rank += t;
    });
  });
}
function oe(e, n, r, t) {
  var i = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (i.rank = r, i.order = t), N(e, "border", i, n);
}
function Pe(e) {
  return y(
    M(e.nodes(), function(n) {
      var r = e.node(n).rank;
      if (!_$1(r))
        return r;
    })
  );
}
function ir(e, n) {
  var r = { lhs: [], rhs: [] };
  return Zr$1(e, function(t) {
    n(t) ? r.lhs.push(t) : r.rhs.push(t);
  }), r;
}
function ar(e, n) {
  return n();
}
function or(e) {
  function n(r) {
    var t = e.children(r), i = e.node(r);
    if (t.length && Zr$1(t, n), Object.prototype.hasOwnProperty.call(i, "minRank")) {
      i.borderLeft = [], i.borderRight = [];
      for (var o = i.minRank, a = i.maxRank + 1; o < a; ++o)
        ue(e, "borderLeft", "_bl", r, i, o), ue(e, "borderRight", "_br", r, i, o);
    }
  }
  Zr$1(e.children(), n);
}
function ue(e, n, r, t, i, o) {
  var a = { width: 0, height: 0, rank: o, borderType: n }, u = i[n][o - 1], d = N(e, "border", a, r);
  i[n][o] = d, e.setParent(d, t), u && e.setEdge(u, d, { weight: 1 });
}
function ur(e) {
  var n = e.graph().rankdir.toLowerCase();
  (n === "lr" || n === "rl") && _e(e);
}
function dr(e) {
  var n = e.graph().rankdir.toLowerCase();
  (n === "bt" || n === "rl") && sr(e), (n === "lr" || n === "rl") && (fr(e), _e(e));
}
function _e(e) {
  Zr$1(e.nodes(), function(n) {
    de(e.node(n));
  }), Zr$1(e.edges(), function(n) {
    de(e.edge(n));
  });
}
function de(e) {
  var n = e.width;
  e.width = e.height, e.height = n;
}
function sr(e) {
  Zr$1(e.nodes(), function(n) {
    $(e.node(n));
  }), Zr$1(e.edges(), function(n) {
    var r = e.edge(n);
    Zr$1(r.points, $), Object.prototype.hasOwnProperty.call(r, "y") && $(r);
  });
}
function $(e) {
  e.y = -e.y;
}
function fr(e) {
  Zr$1(e.nodes(), function(n) {
    D(e.node(n));
  }), Zr$1(e.edges(), function(n) {
    var r = e.edge(n);
    Zr$1(r.points, D), Object.prototype.hasOwnProperty.call(r, "x") && D(r);
  });
}
function D(e) {
  var n = e.x;
  e.x = e.y, e.y = n;
}
function cr(e) {
  e.graph().dummyChains = [], Zr$1(e.edges(), function(n) {
    lr(e, n);
  });
}
function lr(e, n) {
  var r = n.v, t = e.node(r).rank, i = n.w, o = e.node(i).rank, a = n.name, u = e.edge(n), d = u.labelRank;
  if (o !== t + 1) {
    e.removeEdge(n);
    var s = void 0, c, l;
    for (l = 0, ++t; t < o; ++l, ++t)
      u.points = [], s = {
        width: 0,
        height: 0,
        edgeLabel: u,
        edgeObj: n,
        rank: t
      }, c = N(e, "edge", s, "_d"), t === d && (s.width = u.width, s.height = u.height, s.dummy = "edge-label", s.labelpos = u.labelpos), e.setEdge(r, c, { weight: u.weight }, a), l === 0 && e.graph().dummyChains.push(c), r = c;
    e.setEdge(r, i, { weight: u.weight }, a);
  }
}
function hr(e) {
  Zr$1(e.graph().dummyChains, function(n) {
    var r = e.node(n), t = r.edgeLabel, i;
    for (e.setEdge(r.edgeObj, t); r.dummy; )
      i = e.successors(n)[0], e.removeNode(n), t.points.push({ x: r.x, y: r.y }), r.dummy === "edge-label" && (t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height), n = i, r = e.node(n);
  });
}
function K(e) {
  var n = {};
  function r(t) {
    var i = e.node(t);
    if (Object.prototype.hasOwnProperty.call(n, t))
      return i.rank;
    n[t] = true;
    var o = k$1(
      M(e.outEdges(t), function(a) {
        return r(a.w) - e.edge(a).minlen;
      })
    );
    return (o === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    o === void 0 || // return value of _.map([]) for Lodash 4
    o === null) && (o = 0), i.rank = o;
  }
  Zr$1(e.sources(), r);
}
function _(e, n) {
  return e.node(n.w).rank - e.node(n.v).rank - e.edge(n).minlen;
}
function Ce(e) {
  var n = new X({ directed: false }), r = e.nodes()[0], t = e.nodeCount();
  n.setNode(r, {});
  for (var i, o; vr(n, e) < t; )
    i = pr(n, e), o = n.hasNode(i.v) ? _(e, i) : -_(e, i), wr(n, e, o);
  return n;
}
function vr(e, n) {
  function r(t) {
    Zr$1(n.nodeEdges(t), function(i) {
      var o = i.v, a = t === o ? i.w : o;
      !e.hasNode(a) && !_(n, i) && (e.setNode(a, {}), e.setEdge(t, a, {}), r(a));
    });
  }
  return Zr$1(e.nodes(), r), e.nodeCount();
}
function pr(e, n) {
  return Z(n.edges(), function(r) {
    if (e.hasNode(r.v) !== e.hasNode(r.w))
      return _(n, r);
  });
}
function wr(e, n, r) {
  Zr$1(e.nodes(), function(t) {
    n.node(t).rank += r;
  });
}
function Ie(e, n, r) {
  oa(n) || (n = [n]);
  var t = (e.isDirected() ? e.successors : e.neighbors).bind(e), i = [], o = {};
  return Zr$1(n, function(a) {
    if (!e.hasNode(a))
      throw new Error("Graph does not have node: " + a);
    Re(e, a, r === "post", o, t, i);
  }), i;
}
function Re(e, n, r, t, i, o) {
  Object.prototype.hasOwnProperty.call(t, n) || (t[n] = true, r || o.push(n), Zr$1(i(n), function(a) {
    Re(e, a, r, t, i, o);
  }), r && o.push(n));
}
function mr(e, n) {
  return Ie(e, n, "post");
}
function gr(e, n) {
  return Ie(e, n, "pre");
}
x.initLowLimValues = ee;
x.initCutValues = Q;
x.calcCutValue = Te;
x.leaveEdge = Se;
x.enterEdge = Fe;
x.exchangeEdges = Ae;
function x(e) {
  e = nr(e), K(e);
  var n = Ce(e);
  ee(n), Q(n, e);
  for (var r, t; r = Se(n); )
    t = Fe(n, e, r), Ae(n, e, r, t);
}
function Q(e, n) {
  var r = mr(e, e.nodes());
  r = r.slice(0, r.length - 1), Zr$1(r, function(t) {
    yr(e, n, t);
  });
}
function yr(e, n, r) {
  var t = e.node(r), i = t.parent;
  e.edge(r, i).cutvalue = Te(e, n, r);
}
function Te(e, n, r) {
  var t = e.node(r), i = t.parent, o = true, a = n.edge(r, i), u = 0;
  return a || (o = false, a = n.edge(i, r)), u = a.weight, Zr$1(n.nodeEdges(r), function(d) {
    var s = d.v === r, c = s ? d.w : d.v;
    if (c !== i) {
      var l = s === o, h = n.edge(d).weight;
      if (u += l ? h : -h, Er(e, r, c)) {
        var v2 = e.edge(r, c).cutvalue;
        u += l ? -v2 : v2;
      }
    }
  }), u;
}
function ee(e, n) {
  arguments.length < 2 && (n = e.nodes()[0]), Me(e, {}, 1, n);
}
function Me(e, n, r, t, i) {
  var o = r, a = e.node(t);
  return n[t] = true, Zr$1(e.neighbors(t), function(u) {
    Object.prototype.hasOwnProperty.call(n, u) || (r = Me(e, n, r, u, t));
  }), a.low = o, a.lim = r++, i ? a.parent = i : delete a.parent, r;
}
function Se(e) {
  return U(e.edges(), function(n) {
    return e.edge(n).cutvalue < 0;
  });
}
function Fe(e, n, r) {
  var t = r.v, i = r.w;
  n.hasEdge(t, i) || (t = r.w, i = r.v);
  var o = e.node(t), a = e.node(i), u = o, d = false;
  o.lim > a.lim && (u = a, d = true);
  var s = qr$1(n.edges(), function(c) {
    return d === se(e, e.node(c.v), u) && d !== se(e, e.node(c.w), u);
  });
  return Z(s, function(c) {
    return _(n, c);
  });
}
function Ae(e, n, r, t) {
  var i = r.v, o = r.w;
  e.removeEdge(i, o), e.setEdge(t.v, t.w, {}), ee(e), Q(e, n), xr(e, n);
}
function xr(e, n) {
  var r = U(e.nodes(), function(i) {
    return !n.node(i).parent;
  }), t = gr(e, r);
  t = t.slice(1), Zr$1(t, function(i) {
    var o = e.node(i).parent, a = n.edge(i, o), u = false;
    a || (a = n.edge(o, i), u = true), n.node(i).rank = n.node(o).rank + (u ? a.minlen : -a.minlen);
  });
}
function Er(e, n, r) {
  return e.hasEdge(n, r);
}
function se(e, n, r) {
  return r.low <= n.lim && n.lim <= r.lim;
}
function kr(e) {
  switch (e.graph().ranker) {
    case "network-simplex":
      fe(e);
      break;
    case "tight-tree":
      Nr(e);
      break;
    case "longest-path":
      Or(e);
      break;
    default:
      fe(e);
  }
}
var Or = K;
function Nr(e) {
  K(e), Ce(e);
}
function fe(e) {
  x(e);
}
function Lr(e) {
  var n = N(e, "root", {}, "_root"), r = Pr(e), t = y(E(r)) - 1, i = 2 * t + 1;
  e.graph().nestingRoot = n, Zr$1(e.edges(), function(a) {
    e.edge(a).minlen *= i;
  });
  var o = _r(e) + 1;
  Zr$1(e.children(), function(a) {
    Be(e, n, i, o, t, r, a);
  }), e.graph().nodeRankFactor = i;
}
function Be(e, n, r, t, i, o, a) {
  var u = e.children(a);
  if (!u.length) {
    a !== n && e.setEdge(n, a, { weight: 0, minlen: r });
    return;
  }
  var d = oe(e, "_bt"), s = oe(e, "_bb"), c = e.node(a);
  e.setParent(d, a), c.borderTop = d, e.setParent(s, a), c.borderBottom = s, Zr$1(u, function(l) {
    Be(e, n, r, t, i, o, l);
    var h = e.node(l), v2 = h.borderTop ? h.borderTop : l, p = h.borderBottom ? h.borderBottom : l, b = h.borderTop ? t : 2 * t, L2 = v2 !== p ? 1 : i - o[a] + 1;
    e.setEdge(d, v2, {
      weight: b,
      minlen: L2,
      nestingEdge: true
    }), e.setEdge(p, s, {
      weight: b,
      minlen: L2,
      nestingEdge: true
    });
  }), e.parent(a) || e.setEdge(n, d, { weight: 0, minlen: i + o[a] });
}
function Pr(e) {
  var n = {};
  function r(t, i) {
    var o = e.children(t);
    o && o.length && Zr$1(o, function(a) {
      r(a, i + 1);
    }), n[t] = i;
  }
  return Zr$1(e.children(), function(t) {
    r(t, 1);
  }), n;
}
function _r(e) {
  return Yr$1(
    e.edges(),
    function(n, r) {
      return n + e.edge(r).weight;
    },
    0
  );
}
function Cr(e) {
  var n = e.graph();
  e.removeNode(n.nestingRoot), delete n.nestingRoot, Zr$1(e.edges(), function(r) {
    var t = e.edge(r);
    t.nestingEdge && e.removeEdge(r);
  });
}
function Ir(e, n, r) {
  var t = {}, i;
  Zr$1(r, function(o) {
    for (var a = e.parent(o), u, d; a; ) {
      if (u = e.parent(a), u ? (d = t[u], t[u] = a) : (d = i, i = a), d && d !== a) {
        n.setEdge(d, a);
        return;
      }
      a = u;
    }
  });
}
function Rr(e, n, r) {
  var t = Tr(e), i = new X({ compound: true }).setGraph({ root: t }).setDefaultNodeLabel(function(o) {
    return e.node(o);
  });
  return Zr$1(e.nodes(), function(o) {
    var a = e.node(o), u = e.parent(o);
    (a.rank === n || a.minRank <= n && n <= a.maxRank) && (i.setNode(o), i.setParent(o, u || t), Zr$1(e[r](o), function(d) {
      var s = d.v === o ? d.w : d.v, c = i.edge(s, o), l = _$1(c) ? 0 : c.weight;
      i.setEdge(s, o, { weight: e.edge(d).weight + l });
    }), Object.prototype.hasOwnProperty.call(a, "minRank") && i.setNode(o, {
      borderLeft: a.borderLeft[n],
      borderRight: a.borderRight[n]
    }));
  }), i;
}
function Tr(e) {
  for (var n; e.hasNode(n = J("_root")); ) ;
  return n;
}
function Mr(e, n) {
  for (var r = 0, t = 1; t < n.length; ++t)
    r += Sr(e, n[t - 1], n[t]);
  return r;
}
function Sr(e, n, r) {
  for (var t = Wn(
    r,
    M(r, function(s, c) {
      return c;
    })
  ), i = L(
    M(n, function(s) {
      return R(
        M(e.outEdges(s), function(c) {
          return { pos: t[c.w], weight: e.edge(c).weight };
        }),
        "pos"
      );
    })
  ), o = 1; o < r.length; ) o <<= 1;
  var a = 2 * o - 1;
  o -= 1;
  var u = M(new Array(a), function() {
    return 0;
  }), d = 0;
  return Zr$1(
    // @ts-expect-error
    i.forEach(function(s) {
      var c = s.pos + o;
      u[c] += s.weight;
      for (var l = 0; c > 0; )
        c % 2 && (l += u[c + 1]), c = c - 1 >> 1, u[c] += s.weight;
      d += s.weight * l;
    })
  ), d;
}
function Fr(e) {
  var n = {}, r = qr$1(e.nodes(), function(u) {
    return !e.children(u).length;
  }), t = y(
    M(r, function(u) {
      return e.node(u).rank;
    })
  ), i = M(k(t + 1), function() {
    return [];
  });
  function o(u) {
    if (!Ne(n, u)) {
      n[u] = true;
      var d = e.node(u);
      i[d.rank].push(u), Zr$1(e.successors(u), o);
    }
  }
  var a = R(r, function(u) {
    return e.node(u).rank;
  });
  return Zr$1(a, o), i;
}
function Ar(e, n) {
  return M(n, function(r) {
    var t = e.inEdges(r);
    if (t.length) {
      var i = Yr$1(
        t,
        function(o, a) {
          var u = e.edge(a), d = e.node(a.v);
          return {
            sum: o.sum + u.weight * d.order,
            weight: o.weight + u.weight
          };
        },
        { sum: 0, weight: 0 }
      );
      return {
        v: r,
        barycenter: i.sum / i.weight,
        weight: i.weight
      };
    } else
      return { v: r };
  });
}
function Br(e, n) {
  var r = {};
  Zr$1(e, function(i, o) {
    var a = r[i.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [i.v],
      i: o
    };
    _$1(i.barycenter) || (a.barycenter = i.barycenter, a.weight = i.weight);
  }), Zr$1(n.edges(), function(i) {
    var o = r[i.v], a = r[i.w];
    !_$1(o) && !_$1(a) && (a.indegree++, o.out.push(r[i.w]));
  });
  var t = qr$1(r, function(i) {
    return !i.indegree;
  });
  return jr(t);
}
function jr(e) {
  var n = [];
  function r(o) {
    return function(a) {
      a.merged || (_$1(a.barycenter) || _$1(o.barycenter) || a.barycenter >= o.barycenter) && Gr(o, a);
    };
  }
  function t(o) {
    return function(a) {
      a.in.push(o), --a.indegree === 0 && e.push(a);
    };
  }
  for (; e.length; ) {
    var i = e.pop();
    n.push(i), Zr$1(i.in.reverse(), r(i)), Zr$1(i.out, t(i));
  }
  return M(
    qr$1(n, function(o) {
      return !o.merged;
    }),
    function(o) {
      return A(o, ["vs", "i", "barycenter", "weight"]);
    }
  );
}
function Gr(e, n) {
  var r = 0, t = 0;
  e.weight && (r += e.barycenter * e.weight, t += e.weight), n.weight && (r += n.barycenter * n.weight, t += n.weight), e.vs = n.vs.concat(e.vs), e.barycenter = r / t, e.weight = t, e.i = Math.min(n.i, e.i), n.merged = true;
}
function Vr(e, n) {
  var r = ir(e, function(c) {
    return Object.prototype.hasOwnProperty.call(c, "barycenter");
  }), t = r.lhs, i = R(r.rhs, function(c) {
    return -c.i;
  }), o = [], a = 0, u = 0, d = 0;
  t.sort(Yr(!!n)), d = ce(o, i, d), Zr$1(t, function(c) {
    d += c.vs.length, o.push(c.vs), a += c.barycenter * c.weight, u += c.weight, d = ce(o, i, d);
  });
  var s = { vs: L(o) };
  return u && (s.barycenter = a / u, s.weight = u), s;
}
function ce(e, n, r) {
  for (var t; n.length && (t = F(n)).i <= r; )
    n.pop(), e.push(t.vs), r++;
  return r;
}
function Yr(e) {
  return function(n, r) {
    return n.barycenter < r.barycenter ? -1 : n.barycenter > r.barycenter ? 1 : e ? r.i - n.i : n.i - r.i;
  };
}
function je(e, n, r, t) {
  var i = e.children(n), o = e.node(n), a = o ? o.borderLeft : void 0, u = o ? o.borderRight : void 0, d = {};
  a && (i = qr$1(i, function(p) {
    return p !== a && p !== u;
  }));
  var s = Ar(e, i);
  Zr$1(s, function(p) {
    if (e.children(p.v).length) {
      var b = je(e, p.v, r, t);
      d[p.v] = b, Object.prototype.hasOwnProperty.call(b, "barycenter") && Dr(p, b);
    }
  });
  var c = Br(s, r);
  $r(c, d);
  var l = Vr(c, t);
  if (a && (l.vs = L([a, l.vs, u]), e.predecessors(a).length)) {
    var h = e.node(e.predecessors(a)[0]), v2 = e.node(e.predecessors(u)[0]);
    Object.prototype.hasOwnProperty.call(l, "barycenter") || (l.barycenter = 0, l.weight = 0), l.barycenter = (l.barycenter * l.weight + h.order + v2.order) / (l.weight + 2), l.weight += 2;
  }
  return l;
}
function $r(e, n) {
  Zr$1(e, function(r) {
    r.vs = L(
      r.vs.map(function(t) {
        return n[t] ? n[t].vs : t;
      })
    );
  });
}
function Dr(e, n) {
  _$1(e.barycenter) ? (e.barycenter = n.barycenter, e.weight = n.weight) : (e.barycenter = (e.barycenter * e.weight + n.barycenter * n.weight) / (e.weight + n.weight), e.weight += n.weight);
}
function qr(e) {
  var n = Pe(e), r = le(e, k(1, n + 1), "inEdges"), t = le(e, k(n - 1, -1, -1), "outEdges"), i = Fr(e);
  he(e, i);
  for (var o = Number.POSITIVE_INFINITY, a, u = 0, d = 0; d < 4; ++u, ++d) {
    Wr(u % 2 ? r : t, u % 4 >= 2), i = G(e);
    var s = Mr(e, i);
    s < o && (d = 0, a = yn(i), o = s);
  }
  he(e, a);
}
function le(e, n, r) {
  return M(n, function(t) {
    return Rr(e, t, r);
  });
}
function Wr(e, n) {
  var r = new X();
  Zr$1(e, function(t) {
    var i = t.graph().root, o = je(t, i, r, n);
    Zr$1(o.vs, function(a, u) {
      t.node(a).order = u;
    }), Ir(t, r, o.vs);
  });
}
function he(e, n) {
  Zr$1(n, function(r) {
    Zr$1(r, function(t, i) {
      e.node(t).order = i;
    });
  });
}
function Xr(e) {
  var n = Hr(e);
  Zr$1(e.graph().dummyChains, function(r) {
    for (var t = e.node(r), i = t.edgeObj, o = zr(e, n, i.v, i.w), a = o.path, u = o.lca, d = 0, s = a[d], c = true; r !== i.w; ) {
      if (t = e.node(r), c) {
        for (; (s = a[d]) !== u && e.node(s).maxRank < t.rank; )
          d++;
        s === u && (c = false);
      }
      if (!c) {
        for (; d < a.length - 1 && e.node(s = a[d + 1]).minRank <= t.rank; )
          d++;
        s = a[d];
      }
      e.setParent(r, s), r = e.successors(r)[0];
    }
  });
}
function zr(e, n, r, t) {
  var i = [], o = [], a = Math.min(n[r].low, n[t].low), u = Math.max(n[r].lim, n[t].lim), d, s;
  d = r;
  do
    d = e.parent(d), i.push(d);
  while (d && (n[d].low > a || u > n[d].lim));
  for (s = d, d = t; (d = e.parent(d)) !== s; )
    o.push(d);
  return { path: i.concat(o.reverse()), lca: s };
}
function Hr(e) {
  var n = {}, r = 0;
  function t(i) {
    var o = r;
    Zr$1(e.children(i), t), n[i] = { low: o, lim: r++ };
  }
  return Zr$1(e.children(), t), n;
}
function Ur(e, n) {
  var r = {};
  function t(i, o) {
    var a = 0, u = 0, d = i.length, s = F(o);
    return Zr$1(o, function(c, l) {
      var h = Jr(e, c), v2 = h ? e.node(h).order : d;
      (h || c === s) && (Zr$1(o.slice(u, l + 1), function(p) {
        Zr$1(e.predecessors(p), function(b) {
          var L2 = e.node(b), ne = L2.order;
          (ne < a || v2 < ne) && !(L2.dummy && e.node(p).dummy) && Ge(r, b, p);
        });
      }), u = l + 1, a = v2);
    }), o;
  }
  return Yr$1(n, t), r;
}
function Zr(e, n) {
  var r = {};
  function t(o, a, u, d, s) {
    var c;
    Zr$1(k(a, u), function(l) {
      c = o[l], e.node(c).dummy && Zr$1(e.predecessors(c), function(h) {
        var v2 = e.node(h);
        v2.dummy && (v2.order < d || v2.order > s) && Ge(r, h, c);
      });
    });
  }
  function i(o, a) {
    var u = -1, d, s = 0;
    return Zr$1(a, function(c, l) {
      if (e.node(c).dummy === "border") {
        var h = e.predecessors(c);
        h.length && (d = e.node(h[0]).order, t(a, s, l, u, d), s = l, u = d);
      }
      t(a, s, a.length, d, o.length);
    }), a;
  }
  return Yr$1(n, i), r;
}
function Jr(e, n) {
  if (e.node(n).dummy)
    return U(e.predecessors(n), function(r) {
      return e.node(r).dummy;
    });
}
function Ge(e, n, r) {
  if (n > r) {
    var t = n;
    n = r, r = t;
  }
  Object.prototype.hasOwnProperty.call(e, n) || Object.defineProperty(e, n, {
    enumerable: true,
    configurable: true,
    value: {},
    writable: true
  });
  var i = e[n];
  Object.defineProperty(i, r, {
    enumerable: true,
    configurable: true,
    value: true,
    writable: true
  });
}
function Kr(e, n, r) {
  if (n > r) {
    var t = n;
    n = r, r = t;
  }
  return !!e[n] && Object.prototype.hasOwnProperty.call(e[n], r);
}
function Qr(e, n, r, t) {
  var i = {}, o = {}, a = {};
  return Zr$1(n, function(u) {
    Zr$1(u, function(d, s) {
      i[d] = d, o[d] = d, a[d] = s;
    });
  }), Zr$1(n, function(u) {
    var d = -1;
    Zr$1(u, function(s) {
      var c = t(s);
      if (c.length) {
        c = R(c, function(b) {
          return a[b];
        });
        for (var l = (c.length - 1) / 2, h = Math.floor(l), v2 = Math.ceil(l); h <= v2; ++h) {
          var p = c[h];
          o[s] === s && d < a[p] && !Kr(r, s, p) && (o[p] = s, o[s] = i[s] = i[p], d = a[p]);
        }
      }
    });
  }), { root: i, align: o };
}
function et(e, n, r, t, i) {
  var o = {}, a = nt(e, n, r, i), u = i ? "borderLeft" : "borderRight";
  function d(l, h) {
    for (var v2 = a.nodes(), p = v2.pop(), b = {}; p; )
      b[p] ? l(p) : (b[p] = true, v2.push(p), v2 = v2.concat(h(p))), p = v2.pop();
  }
  function s(l) {
    o[l] = a.inEdges(l).reduce(function(h, v2) {
      return Math.max(h, o[v2.v] + a.edge(v2));
    }, 0);
  }
  function c(l) {
    var h = a.outEdges(l).reduce(function(p, b) {
      return Math.min(p, o[b.w] - a.edge(b));
    }, Number.POSITIVE_INFINITY), v2 = e.node(l);
    h !== Number.POSITIVE_INFINITY && v2.borderType !== u && (o[l] = Math.max(o[l], h));
  }
  return d(s, a.predecessors.bind(a)), d(c, a.successors.bind(a)), Zr$1(t, function(l) {
    o[l] = o[r[l]];
  }), o;
}
function nt(e, n, r, t) {
  var i = new X(), o = e.graph(), a = ot(o.nodesep, o.edgesep, t);
  return Zr$1(n, function(u) {
    var d;
    Zr$1(u, function(s) {
      var c = r[s];
      if (i.setNode(c), d) {
        var l = r[d], h = i.edge(l, c);
        i.setEdge(l, c, Math.max(a(e, s, d), h || 0));
      }
      d = s;
    });
  }), i;
}
function rt(e, n) {
  return Z(E(n), function(r) {
    var t = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
    return Ln(r, function(o, a) {
      var u = ut(e, a) / 2;
      t = Math.max(o + u, t), i = Math.min(o - u, i);
    }), t - i;
  });
}
function tt(e, n) {
  var r = E(n), t = k$1(r), i = y(r);
  Zr$1(["u", "d"], function(o) {
    Zr$1(["l", "r"], function(a) {
      var u = o + a, d = e[u], s;
      if (d !== n) {
        var c = E(d);
        s = a === "l" ? t - k$1(c) : i - y(c), s && (e[u] = j(d, function(l) {
          return l + s;
        }));
      }
    });
  });
}
function it(e, n) {
  return j(e.ul, function(r, t) {
    if (n)
      return e[n.toLowerCase()][t];
    var i = R(M(e, t));
    return (i[1] + i[2]) / 2;
  });
}
function at(e) {
  var n = G(e), r = rk(Ur(e, n), Zr(e, n)), t = {}, i;
  Zr$1(["u", "d"], function(a) {
    i = a === "u" ? n : E(n).reverse(), Zr$1(["l", "r"], function(u) {
      u === "r" && (i = M(i, function(l) {
        return E(l).reverse();
      }));
      var d = (a === "u" ? e.predecessors : e.successors).bind(e), s = Qr(e, i, r, d), c = et(e, i, s.root, s.align, u === "r");
      u === "r" && (c = j(c, function(l) {
        return -l;
      })), t[a + u] = c;
    });
  });
  var o = rt(e, t);
  return tt(t, o), it(t, e.graph().align);
}
function ot(e, n, r) {
  return function(t, i, o) {
    var a = t.node(i), u = t.node(o), d = 0, s;
    if (d += a.width / 2, Object.prototype.hasOwnProperty.call(a, "labelpos"))
      switch (a.labelpos.toLowerCase()) {
        case "l":
          s = -a.width / 2;
          break;
        case "r":
          s = a.width / 2;
          break;
      }
    if (s && (d += r ? s : -s), s = 0, d += (a.dummy ? n : e) / 2, d += (u.dummy ? n : e) / 2, d += u.width / 2, Object.prototype.hasOwnProperty.call(u, "labelpos"))
      switch (u.labelpos.toLowerCase()) {
        case "l":
          s = u.width / 2;
          break;
        case "r":
          s = -u.width / 2;
          break;
      }
    return s && (d += r ? s : -s), s = 0, d;
  };
}
function ut(e, n) {
  return e.node(n).width;
}
function dt(e) {
  e = Le(e), st(e), Pn(at(e), function(n, r) {
    e.node(r).x = n;
  });
}
function st(e) {
  var n = G(e), r = e.graph().ranksep, t = 0;
  Zr$1(n, function(i) {
    var o = y(
      M(i, function(a) {
        return e.node(a).height;
      })
    );
    Zr$1(i, function(a) {
      e.node(a).y = t + o / 2;
    }), t += o + r;
  });
}
function Bt(e, n) {
  var r = ar;
  r("layout", () => {
    var t = r("  buildLayoutGraph", () => yt(e));
    r("  runLayout", () => ft(t, r)), r("  updateInputGraph", () => ct(e, t));
  });
}
function ft(e, n) {
  n("    makeSpaceForEdgeLabels", () => xt(e)), n("    removeSelfEdges", () => It(e)), n("    acyclic", () => Kn(e)), n("    nestingGraph.run", () => Lr(e)), n("    rank", () => kr(Le(e))), n("    injectEdgeLabelProxies", () => Et(e)), n("    removeEmptyRanks", () => tr(e)), n("    nestingGraph.cleanup", () => Cr(e)), n("    normalizeRanks", () => rr(e)), n("    assignRankMinMax", () => kt(e)), n("    removeEdgeLabelProxies", () => Ot(e)), n("    normalize.run", () => cr(e)), n("    parentDummyChains", () => Xr(e)), n("    addBorderSegments", () => or(e)), n("    order", () => qr(e)), n("    insertSelfEdges", () => Rt(e)), n("    adjustCoordinateSystem", () => ur(e)), n("    position", () => dt(e)), n("    positionSelfEdges", () => Tt(e)), n("    removeBorderNodes", () => Ct(e)), n("    normalize.undo", () => hr(e)), n("    fixupEdgeLabelCoords", () => Pt(e)), n("    undoCoordinateSystem", () => dr(e)), n("    translateGraph", () => Nt(e)), n("    assignNodeIntersects", () => Lt(e)), n("    reversePoints", () => _t(e)), n("    acyclic.undo", () => er(e));
}
function ct(e, n) {
  Zr$1(e.nodes(), function(r) {
    var t = e.node(r), i = n.node(r);
    t && (t.x = i.x, t.y = i.y, n.children(r).length && (t.width = i.width, t.height = i.height));
  }), Zr$1(e.edges(), function(r) {
    var t = e.edge(r), i = n.edge(r);
    t.points = i.points, Object.prototype.hasOwnProperty.call(i, "x") && (t.x = i.x, t.y = i.y);
  }), e.graph().width = n.graph().width, e.graph().height = n.graph().height;
}
var lt = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], ht = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, vt = ["acyclicer", "ranker", "rankdir", "align"], pt = ["width", "height"], wt = { width: 0, height: 0 }, bt = ["minlen", "weight", "width", "height", "labeloffset"], mt = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: "r"
}, gt = ["labelpos"];
function yt(e) {
  var n = new X({ multigraph: true, compound: true }), r = W(e.graph());
  return n.setGraph(
    rk({}, ht, q(r, lt), A(r, vt))
  ), Zr$1(e.nodes(), function(t) {
    var i = W(e.node(t));
    n.setNode(t, En(q(i, pt), wt)), n.setParent(t, e.parent(t));
  }), Zr$1(e.edges(), function(t) {
    var i = W(e.edge(t));
    n.setEdge(
      t,
      rk({}, mt, q(i, bt), A(i, gt))
    );
  }), n;
}
function xt(e) {
  var n = e.graph();
  n.ranksep /= 2, Zr$1(e.edges(), function(r) {
    var t = e.edge(r);
    t.minlen *= 2, t.labelpos.toLowerCase() !== "c" && (n.rankdir === "TB" || n.rankdir === "BT" ? t.width += t.labeloffset : t.height += t.labeloffset);
  });
}
function Et(e) {
  Zr$1(e.edges(), function(n) {
    var r = e.edge(n);
    if (r.width && r.height) {
      var t = e.node(n.v), i = e.node(n.w), o = { rank: (i.rank - t.rank) / 2 + t.rank, e: n };
      N(e, "edge-proxy", o, "_ep");
    }
  });
}
function kt(e) {
  var n = 0;
  Zr$1(e.nodes(), function(r) {
    var t = e.node(r);
    t.borderTop && (t.minRank = e.node(t.borderTop).rank, t.maxRank = e.node(t.borderBottom).rank, n = y(n, t.maxRank));
  }), e.graph().maxRank = n;
}
function Ot(e) {
  Zr$1(e.nodes(), function(n) {
    var r = e.node(n);
    r.dummy === "edge-proxy" && (e.edge(r.e).labelRank = r.rank, e.removeNode(n));
  });
}
function Nt(e) {
  var n = Number.POSITIVE_INFINITY, r = 0, t = Number.POSITIVE_INFINITY, i = 0, o = e.graph(), a = o.marginx || 0, u = o.marginy || 0;
  function d(s) {
    var c = s.x, l = s.y, h = s.width, v2 = s.height;
    n = Math.min(n, c - h / 2), r = Math.max(r, c + h / 2), t = Math.min(t, l - v2 / 2), i = Math.max(i, l + v2 / 2);
  }
  Zr$1(e.nodes(), function(s) {
    d(e.node(s));
  }), Zr$1(e.edges(), function(s) {
    var c = e.edge(s);
    Object.prototype.hasOwnProperty.call(c, "x") && d(c);
  }), n -= a, t -= u, Zr$1(e.nodes(), function(s) {
    var c = e.node(s);
    c.x -= n, c.y -= t;
  }), Zr$1(e.edges(), function(s) {
    var c = e.edge(s);
    Zr$1(c.points, function(l) {
      l.x -= n, l.y -= t;
    }), Object.prototype.hasOwnProperty.call(c, "x") && (c.x -= n), Object.prototype.hasOwnProperty.call(c, "y") && (c.y -= t);
  }), o.width = r - n + a, o.height = i - t + u;
}
function Lt(e) {
  Zr$1(e.edges(), function(n) {
    var r = e.edge(n), t = e.node(n.v), i = e.node(n.w), o, a;
    r.points ? (o = r.points[0], a = r.points[r.points.length - 1]) : (r.points = [], o = i, a = t), r.points.unshift(ae(t, o)), r.points.push(ae(i, a));
  });
}
function Pt(e) {
  Zr$1(e.edges(), function(n) {
    var r = e.edge(n);
    if (Object.prototype.hasOwnProperty.call(r, "x"))
      switch ((r.labelpos === "l" || r.labelpos === "r") && (r.width -= r.labeloffset), r.labelpos) {
        case "l":
          r.x -= r.width / 2 + r.labeloffset;
          break;
        case "r":
          r.x += r.width / 2 + r.labeloffset;
          break;
      }
  });
}
function _t(e) {
  Zr$1(e.edges(), function(n) {
    var r = e.edge(n);
    r.reversed && r.points.reverse();
  });
}
function Ct(e) {
  Zr$1(e.nodes(), function(n) {
    if (e.children(n).length) {
      var r = e.node(n), t = e.node(r.borderTop), i = e.node(r.borderBottom), o = e.node(F(r.borderLeft)), a = e.node(F(r.borderRight));
      r.width = Math.abs(a.x - o.x), r.height = Math.abs(i.y - t.y), r.x = o.x + r.width / 2, r.y = t.y + r.height / 2;
    }
  }), Zr$1(e.nodes(), function(n) {
    e.node(n).dummy === "border" && e.removeNode(n);
  });
}
function It(e) {
  Zr$1(e.edges(), function(n) {
    if (n.v === n.w) {
      var r = e.node(n.v);
      r.selfEdges || (r.selfEdges = []), r.selfEdges.push({ e: n, label: e.edge(n) }), e.removeEdge(n);
    }
  });
}
function Rt(e) {
  var n = G(e);
  Zr$1(n, function(r) {
    var t = 0;
    Zr$1(r, function(i, o) {
      var a = e.node(i);
      a.order = o + t, Zr$1(a.selfEdges, function(u) {
        N(
          e,
          "selfedge",
          {
            width: u.label.width,
            height: u.label.height,
            rank: a.rank,
            order: o + ++t,
            e: u.e,
            label: u.label
          },
          "_se"
        );
      }), delete a.selfEdges;
    });
  });
}
function Tt(e) {
  Zr$1(e.nodes(), function(n) {
    var r = e.node(n);
    if (r.dummy === "selfedge") {
      var t = e.node(r.e.v), i = t.x + t.width / 2, o = t.y, a = r.x - i, u = t.height / 2;
      e.setEdge(r.e, r.label), e.removeNode(n), r.label.points = [
        { x: i + 2 * a / 3, y: o - u },
        { x: i + 5 * a / 6, y: o - u },
        { x: i + a, y: o },
        { x: i + 5 * a / 6, y: o + u },
        { x: i + 2 * a / 3, y: o + u }
      ], r.label.x = r.x, r.label.y = r.y;
    }
  });
}
function q(e, n) {
  return j(A(e, n), Number);
}
function W(e) {
  var n = {};
  return Zr$1(e, function(r, t) {
    n[t.toLowerCase()] = r;
  }), n;
}
export {
  Bt as B
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LUJGTEI3R1I5LURmd1JLYWZKLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLW1lcm1haWQtc3RyaW5nL2Rpc3QvbGF5b3V0LUJGTEI3R1I5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGIgYXMgVmUsIEcgYXMgZywgaSBhcyBtLCB2IGFzIEUgfSBmcm9tIFwiLi9ncmFwaC1DVlZMVHJobi5qc1wiO1xuaW1wb3J0IHsgaSBhcyBYLCBkIGFzIEMsIGsgYXMgWWUsIG8gYXMgJGUsIHAgYXMgdmUsIHEgYXMgcGUsIHQgYXMgRGUsIHUgYXMgd2UsIHYgYXMgcWUsIHcgYXMgYmUsIGMgYXMgViwgeCBhcyBXZSwgYiBhcyBYZSwgeSBhcyB6ZSwgbiBhcyBmLCBtIGFzIEksIHIgYXMgQiB9IGZyb20gXCIuL19iYXNlVW5pcS1EYkx5a0xhYS5qc1wiO1xuaW1wb3J0IHsgZiBhcyBPLCBiIGFzIG1lLCBhIGFzIEhlLCBjIGFzIFVlLCBtIGFzIHcsIGQgYXMgUCB9IGZyb20gXCIuL21pbi14NUpqbkRhcS5qc1wiO1xuaW1wb3J0IHsgYVogYXMgTSwgYmogYXMgWmUsIGJrIGFzIEplLCBiNCBhcyBnZSwgYmwgYXMgUywgYVEgYXMgeWUsIGJtIGFzIEtlLCBhRCBhcyBRZSwgYm4gYXMgZW4sIGJvIGFzIG5uLCBhRiBhcyB4ZSwgYnAgYXMgcm4sIGIzIGFzIEVlLCBhRSBhcyBrZSwgYVggYXMgdG4sIGI2IGFzIGFuLCBicSBhcyB6IH0gZnJvbSBcIi4vZW50cnktQjJWWC1reGEuanNcIjtcbnZhciBvbiA9IC9cXHMvO1xuZnVuY3Rpb24gdW4oZSkge1xuICBmb3IgKHZhciBuID0gZS5sZW5ndGg7IG4tLSAmJiBvbi50ZXN0KGUuY2hhckF0KG4pKTsgKVxuICAgIDtcbiAgcmV0dXJuIG47XG59XG52YXIgZG4gPSAvXlxccysvO1xuZnVuY3Rpb24gc24oZSkge1xuICByZXR1cm4gZSAmJiBlLnNsaWNlKDAsIHVuKGUpICsgMSkucmVwbGFjZShkbiwgXCJcIik7XG59XG52YXIgcmUgPSBOYU4sIGZuID0gL15bLStdMHhbMC05YS1mXSskL2ksIGNuID0gL14wYlswMV0rJC9pLCBsbiA9IC9eMG9bMC03XSskL2ksIGhuID0gcGFyc2VJbnQ7XG5mdW5jdGlvbiB2bihlKSB7XG4gIGlmICh0eXBlb2YgZSA9PSBcIm51bWJlclwiKVxuICAgIHJldHVybiBlO1xuICBpZiAoWChlKSlcbiAgICByZXR1cm4gcmU7XG4gIGlmIChNKGUpKSB7XG4gICAgdmFyIG4gPSB0eXBlb2YgZS52YWx1ZU9mID09IFwiZnVuY3Rpb25cIiA/IGUudmFsdWVPZigpIDogZTtcbiAgICBlID0gTShuKSA/IG4gKyBcIlwiIDogbjtcbiAgfVxuICBpZiAodHlwZW9mIGUgIT0gXCJzdHJpbmdcIilcbiAgICByZXR1cm4gZSA9PT0gMCA/IGUgOiArZTtcbiAgZSA9IHNuKGUpO1xuICB2YXIgciA9IGNuLnRlc3QoZSk7XG4gIHJldHVybiByIHx8IGxuLnRlc3QoZSkgPyBobihlLnNsaWNlKDIpLCByID8gMiA6IDgpIDogZm4udGVzdChlKSA/IHJlIDogK2U7XG59XG52YXIgdGUgPSAxIC8gMCwgcG4gPSAxNzk3NjkzMTM0ODYyMzE1N2UyOTI7XG5mdW5jdGlvbiBUKGUpIHtcbiAgaWYgKCFlKVxuICAgIHJldHVybiBlID09PSAwID8gZSA6IDA7XG4gIGlmIChlID0gdm4oZSksIGUgPT09IHRlIHx8IGUgPT09IC10ZSkge1xuICAgIHZhciBuID0gZSA8IDAgPyAtMSA6IDE7XG4gICAgcmV0dXJuIG4gKiBwbjtcbiAgfVxuICByZXR1cm4gZSA9PT0gZSA/IGUgOiAwO1xufVxuZnVuY3Rpb24gd24oZSkge1xuICB2YXIgbiA9IFQoZSksIHIgPSBuICUgMTtcbiAgcmV0dXJuIG4gPT09IG4gPyByID8gbiAtIHIgOiBuIDogMDtcbn1cbmZ1bmN0aW9uIGJuKGUpIHtcbiAgcmV0dXJuIFplKEplKGUsIHZvaWQgMCwgTyksIGUgKyBcIlwiKTtcbn1cbnZhciBtbiA9IDEsIGduID0gNDtcbmZ1bmN0aW9uIHluKGUpIHtcbiAgcmV0dXJuIFZlKGUsIG1uIHwgZ24pO1xufVxudmFyIE9lID0gT2JqZWN0LnByb3RvdHlwZSwgeG4gPSBPZS5oYXNPd25Qcm9wZXJ0eSwgRW4gPSBnZShmdW5jdGlvbihlLCBuKSB7XG4gIGUgPSBPYmplY3QoZSk7XG4gIHZhciByID0gLTEsIHQgPSBuLmxlbmd0aCwgaSA9IHQgPiAyID8gblsyXSA6IHZvaWQgMDtcbiAgZm9yIChpICYmIFMoblswXSwgblsxXSwgaSkgJiYgKHQgPSAxKTsgKytyIDwgdDsgKVxuICAgIGZvciAodmFyIG8gPSBuW3JdLCBhID0geWUobyksIHUgPSAtMSwgZCA9IGEubGVuZ3RoOyArK3UgPCBkOyApIHtcbiAgICAgIHZhciBzID0gYVt1XSwgYyA9IGVbc107XG4gICAgICAoYyA9PT0gdm9pZCAwIHx8IEtlKGMsIE9lW3NdKSAmJiAheG4uY2FsbChlLCBzKSkgJiYgKGVbc10gPSBvW3NdKTtcbiAgICB9XG4gIHJldHVybiBlO1xufSk7XG5mdW5jdGlvbiBGKGUpIHtcbiAgdmFyIG4gPSBlID09IG51bGwgPyAwIDogZS5sZW5ndGg7XG4gIHJldHVybiBuID8gZVtuIC0gMV0gOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBrbihlKSB7XG4gIHJldHVybiBmdW5jdGlvbihuLCByLCB0KSB7XG4gICAgdmFyIGkgPSBPYmplY3Qobik7XG4gICAgaWYgKCFRZShuKSkge1xuICAgICAgdmFyIG8gPSBDKHIpO1xuICAgICAgbiA9IFllKG4pLCByID0gZnVuY3Rpb24odSkge1xuICAgICAgICByZXR1cm4gbyhpW3VdLCB1LCBpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHZhciBhID0gZShuLCByLCB0KTtcbiAgICByZXR1cm4gYSA+IC0xID8gaVtvID8gblthXSA6IGFdIDogdm9pZCAwO1xuICB9O1xufVxudmFyIE9uID0gTWF0aC5tYXg7XG5mdW5jdGlvbiBObihlLCBuLCByKSB7XG4gIHZhciB0ID0gZSA9PSBudWxsID8gMCA6IGUubGVuZ3RoO1xuICBpZiAoIXQpXG4gICAgcmV0dXJuIC0xO1xuICB2YXIgaSA9IHIgPT0gbnVsbCA/IDAgOiB3bihyKTtcbiAgcmV0dXJuIGkgPCAwICYmIChpID0gT24odCArIGksIDApKSwgJGUoZSwgQyhuKSwgaSk7XG59XG52YXIgVSA9IGtuKE5uKTtcbmZ1bmN0aW9uIExuKGUsIG4pIHtcbiAgcmV0dXJuIGUgPT0gbnVsbCA/IGUgOiBlbihlLCB2ZShuKSwgeWUpO1xufVxuZnVuY3Rpb24gUG4oZSwgbikge1xuICByZXR1cm4gZSAmJiBwZShlLCB2ZShuKSk7XG59XG5mdW5jdGlvbiBfbihlLCBuKSB7XG4gIHJldHVybiBlID4gbjtcbn1cbnZhciBDbiA9IE9iamVjdC5wcm90b3R5cGUsIEluID0gQ24uaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBSbihlLCBuKSB7XG4gIHJldHVybiBlICE9IG51bGwgJiYgSW4uY2FsbChlLCBuKTtcbn1cbmZ1bmN0aW9uIE5lKGUsIG4pIHtcbiAgcmV0dXJuIGUgIT0gbnVsbCAmJiBEZShlLCBuLCBSbik7XG59XG5mdW5jdGlvbiBqKGUsIG4pIHtcbiAgdmFyIHIgPSB7fTtcbiAgcmV0dXJuIG4gPSBDKG4pLCBwZShlLCBmdW5jdGlvbih0LCBpLCBvKSB7XG4gICAgbm4ociwgaSwgbih0LCBpLCBvKSk7XG4gIH0pLCByO1xufVxuZnVuY3Rpb24geShlKSB7XG4gIHJldHVybiBlICYmIGUubGVuZ3RoID8gbWUoZSwgeGUsIF9uKSA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIFooZSwgbikge1xuICByZXR1cm4gZSAmJiBlLmxlbmd0aCA/IG1lKGUsIEMobiksIEhlKSA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIFRuKGUsIG4sIHIsIHQpIHtcbiAgaWYgKCFNKGUpKVxuICAgIHJldHVybiBlO1xuICBuID0gd2UobiwgZSk7XG4gIGZvciAodmFyIGkgPSAtMSwgbyA9IG4ubGVuZ3RoLCBhID0gbyAtIDEsIHUgPSBlOyB1ICE9IG51bGwgJiYgKytpIDwgbzsgKSB7XG4gICAgdmFyIGQgPSBxZShuW2ldKSwgcyA9IHI7XG4gICAgaWYgKGQgPT09IFwiX19wcm90b19fXCIgfHwgZCA9PT0gXCJjb25zdHJ1Y3RvclwiIHx8IGQgPT09IFwicHJvdG90eXBlXCIpXG4gICAgICByZXR1cm4gZTtcbiAgICBpZiAoaSAhPSBhKSB7XG4gICAgICB2YXIgYyA9IHVbZF07XG4gICAgICBzID0gdm9pZCAwLCBzID09PSB2b2lkIDAgJiYgKHMgPSBNKGMpID8gYyA6IHJuKG5baSArIDFdKSA/IFtdIDoge30pO1xuICAgIH1cbiAgICBFZSh1LCBkLCBzKSwgdSA9IHVbZF07XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBNbihlLCBuLCByKSB7XG4gIGZvciAodmFyIHQgPSAtMSwgaSA9IG4ubGVuZ3RoLCBvID0ge307ICsrdCA8IGk7ICkge1xuICAgIHZhciBhID0gblt0XSwgdSA9IGJlKGUsIGEpO1xuICAgIHIodSwgYSkgJiYgVG4obywgd2UoYSwgZSksIHUpO1xuICB9XG4gIHJldHVybiBvO1xufVxuZnVuY3Rpb24gU24oZSwgbikge1xuICB2YXIgciA9IGUubGVuZ3RoO1xuICBmb3IgKGUuc29ydChuKTsgci0tOyApXG4gICAgZVtyXSA9IGVbcl0udmFsdWU7XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gRm4oZSwgbikge1xuICBpZiAoZSAhPT0gbikge1xuICAgIHZhciByID0gZSAhPT0gdm9pZCAwLCB0ID0gZSA9PT0gbnVsbCwgaSA9IGUgPT09IGUsIG8gPSBYKGUpLCBhID0gbiAhPT0gdm9pZCAwLCB1ID0gbiA9PT0gbnVsbCwgZCA9IG4gPT09IG4sIHMgPSBYKG4pO1xuICAgIGlmICghdSAmJiAhcyAmJiAhbyAmJiBlID4gbiB8fCBvICYmIGEgJiYgZCAmJiAhdSAmJiAhcyB8fCB0ICYmIGEgJiYgZCB8fCAhciAmJiBkIHx8ICFpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKCF0ICYmICFvICYmICFzICYmIGUgPCBuIHx8IHMgJiYgciAmJiBpICYmICF0ICYmICFvIHx8IHUgJiYgciAmJiBpIHx8ICFhICYmIGkgfHwgIWQpXG4gICAgICByZXR1cm4gLTE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5mdW5jdGlvbiBBbihlLCBuLCByKSB7XG4gIGZvciAodmFyIHQgPSAtMSwgaSA9IGUuY3JpdGVyaWEsIG8gPSBuLmNyaXRlcmlhLCBhID0gaS5sZW5ndGgsIHUgPSByLmxlbmd0aDsgKyt0IDwgYTsgKSB7XG4gICAgdmFyIGQgPSBGbihpW3RdLCBvW3RdKTtcbiAgICBpZiAoZCkge1xuICAgICAgaWYgKHQgPj0gdSlcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB2YXIgcyA9IHJbdF07XG4gICAgICByZXR1cm4gZCAqIChzID09IFwiZGVzY1wiID8gLTEgOiAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGUuaW5kZXggLSBuLmluZGV4O1xufVxuZnVuY3Rpb24gQm4oZSwgbiwgcikge1xuICBuLmxlbmd0aCA/IG4gPSBWKG4sIGZ1bmN0aW9uKG8pIHtcbiAgICByZXR1cm4ga2UobykgPyBmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gYmUoYSwgby5sZW5ndGggPT09IDEgPyBvWzBdIDogbyk7XG4gICAgfSA6IG87XG4gIH0pIDogbiA9IFt4ZV07XG4gIHZhciB0ID0gLTE7XG4gIG4gPSBWKG4sIHRuKEMpKTtcbiAgdmFyIGkgPSBVZShlLCBmdW5jdGlvbihvLCBhLCB1KSB7XG4gICAgdmFyIGQgPSBWKG4sIGZ1bmN0aW9uKHMpIHtcbiAgICAgIHJldHVybiBzKG8pO1xuICAgIH0pO1xuICAgIHJldHVybiB7IGNyaXRlcmlhOiBkLCBpbmRleDogKyt0LCB2YWx1ZTogbyB9O1xuICB9KTtcbiAgcmV0dXJuIFNuKGksIGZ1bmN0aW9uKG8sIGEpIHtcbiAgICByZXR1cm4gQW4obywgYSwgcik7XG4gIH0pO1xufVxuZnVuY3Rpb24gam4oZSwgbikge1xuICByZXR1cm4gTW4oZSwgbiwgZnVuY3Rpb24ociwgdCkge1xuICAgIHJldHVybiBXZShlLCB0KTtcbiAgfSk7XG59XG52YXIgQSA9IGJuKGZ1bmN0aW9uKGUsIG4pIHtcbiAgcmV0dXJuIGUgPT0gbnVsbCA/IHt9IDogam4oZSwgbik7XG59KSwgR24gPSBNYXRoLmNlaWwsIFZuID0gTWF0aC5tYXg7XG5mdW5jdGlvbiBZbihlLCBuLCByLCB0KSB7XG4gIGZvciAodmFyIGkgPSAtMSwgbyA9IFZuKEduKChuIC0gZSkgLyAociB8fCAxKSksIDApLCBhID0gQXJyYXkobyk7IG8tLTsgKVxuICAgIGFbKytpXSA9IGUsIGUgKz0gcjtcbiAgcmV0dXJuIGE7XG59XG5mdW5jdGlvbiAkbihlKSB7XG4gIHJldHVybiBmdW5jdGlvbihuLCByLCB0KSB7XG4gICAgcmV0dXJuIHQgJiYgdHlwZW9mIHQgIT0gXCJudW1iZXJcIiAmJiBTKG4sIHIsIHQpICYmIChyID0gdCA9IHZvaWQgMCksIG4gPSBUKG4pLCByID09PSB2b2lkIDAgPyAociA9IG4sIG4gPSAwKSA6IHIgPSBUKHIpLCB0ID0gdCA9PT0gdm9pZCAwID8gbiA8IHIgPyAxIDogLTEgOiBUKHQpLCBZbihuLCByLCB0KTtcbiAgfTtcbn1cbnZhciBrID0gJG4oKSwgUiA9IGdlKGZ1bmN0aW9uKGUsIG4pIHtcbiAgaWYgKGUgPT0gbnVsbClcbiAgICByZXR1cm4gW107XG4gIHZhciByID0gbi5sZW5ndGg7XG4gIHJldHVybiByID4gMSAmJiBTKGUsIG5bMF0sIG5bMV0pID8gbiA9IFtdIDogciA+IDIgJiYgUyhuWzBdLCBuWzFdLCBuWzJdKSAmJiAobiA9IFtuWzBdXSksIEJuKGUsIFhlKG4pLCBbXSk7XG59KSwgRG4gPSAwO1xuZnVuY3Rpb24gSihlKSB7XG4gIHZhciBuID0gKytEbjtcbiAgcmV0dXJuIHplKGUpICsgbjtcbn1cbmZ1bmN0aW9uIHFuKGUsIG4sIHIpIHtcbiAgZm9yICh2YXIgdCA9IC0xLCBpID0gZS5sZW5ndGgsIG8gPSBuLmxlbmd0aCwgYSA9IHt9OyArK3QgPCBpOyApIHtcbiAgICB2YXIgdSA9IHQgPCBvID8gblt0XSA6IHZvaWQgMDtcbiAgICByKGEsIGVbdF0sIHUpO1xuICB9XG4gIHJldHVybiBhO1xufVxuZnVuY3Rpb24gV24oZSwgbikge1xuICByZXR1cm4gcW4oZSB8fCBbXSwgbiB8fCBbXSwgRWUpO1xufVxuY2xhc3MgWG4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgbiA9IHt9O1xuICAgIG4uX25leHQgPSBuLl9wcmV2ID0gbiwgdGhpcy5fc2VudGluZWwgPSBuO1xuICB9XG4gIGRlcXVldWUoKSB7XG4gICAgdmFyIG4gPSB0aGlzLl9zZW50aW5lbCwgciA9IG4uX3ByZXY7XG4gICAgaWYgKHIgIT09IG4pXG4gICAgICByZXR1cm4gaWUociksIHI7XG4gIH1cbiAgZW5xdWV1ZShuKSB7XG4gICAgdmFyIHIgPSB0aGlzLl9zZW50aW5lbDtcbiAgICBuLl9wcmV2ICYmIG4uX25leHQgJiYgaWUobiksIG4uX25leHQgPSByLl9uZXh0LCByLl9uZXh0Ll9wcmV2ID0gbiwgci5fbmV4dCA9IG4sIG4uX3ByZXYgPSByO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIGZvciAodmFyIG4gPSBbXSwgciA9IHRoaXMuX3NlbnRpbmVsLCB0ID0gci5fcHJldjsgdCAhPT0gcjsgKVxuICAgICAgbi5wdXNoKEpTT04uc3RyaW5naWZ5KHQsIHpuKSksIHQgPSB0Ll9wcmV2O1xuICAgIHJldHVybiBcIltcIiArIG4uam9pbihcIiwgXCIpICsgXCJdXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIGllKGUpIHtcbiAgZS5fcHJldi5fbmV4dCA9IGUuX25leHQsIGUuX25leHQuX3ByZXYgPSBlLl9wcmV2LCBkZWxldGUgZS5fbmV4dCwgZGVsZXRlIGUuX3ByZXY7XG59XG5mdW5jdGlvbiB6bihlLCBuKSB7XG4gIGlmIChlICE9PSBcIl9uZXh0XCIgJiYgZSAhPT0gXCJfcHJldlwiKVxuICAgIHJldHVybiBuO1xufVxudmFyIEhuID0gYW4oMSk7XG5mdW5jdGlvbiBVbihlLCBuKSB7XG4gIGlmIChlLm5vZGVDb3VudCgpIDw9IDEpXG4gICAgcmV0dXJuIFtdO1xuICB2YXIgciA9IEpuKGUsIG4gfHwgSG4pLCB0ID0gWm4oci5ncmFwaCwgci5idWNrZXRzLCByLnplcm9JZHgpO1xuICByZXR1cm4gTyhcbiAgICB3KHQsIGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBlLm91dEVkZ2VzKGkudiwgaS53KTtcbiAgICB9KVxuICApO1xufVxuZnVuY3Rpb24gWm4oZSwgbiwgcikge1xuICBmb3IgKHZhciB0ID0gW10sIGkgPSBuW24ubGVuZ3RoIC0gMV0sIG8gPSBuWzBdLCBhOyBlLm5vZGVDb3VudCgpOyApIHtcbiAgICBmb3IgKDsgYSA9IG8uZGVxdWV1ZSgpOyApXG4gICAgICBZKGUsIG4sIHIsIGEpO1xuICAgIGZvciAoOyBhID0gaS5kZXF1ZXVlKCk7IClcbiAgICAgIFkoZSwgbiwgciwgYSk7XG4gICAgaWYgKGUubm9kZUNvdW50KCkpIHtcbiAgICAgIGZvciAodmFyIHUgPSBuLmxlbmd0aCAtIDI7IHUgPiAwOyAtLXUpXG4gICAgICAgIGlmIChhID0gblt1XS5kZXF1ZXVlKCksIGEpIHtcbiAgICAgICAgICB0ID0gdC5jb25jYXQoWShlLCBuLCByLCBhLCAhMCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gWShlLCBuLCByLCB0LCBpKSB7XG4gIHZhciBvID0gaSA/IFtdIDogdm9pZCAwO1xuICByZXR1cm4gZihlLmluRWRnZXModC52KSwgZnVuY3Rpb24oYSkge1xuICAgIHZhciB1ID0gZS5lZGdlKGEpLCBkID0gZS5ub2RlKGEudik7XG4gICAgaSAmJiBvLnB1c2goeyB2OiBhLnYsIHc6IGEudyB9KSwgZC5vdXQgLT0gdSwgSChuLCByLCBkKTtcbiAgfSksIGYoZS5vdXRFZGdlcyh0LnYpLCBmdW5jdGlvbihhKSB7XG4gICAgdmFyIHUgPSBlLmVkZ2UoYSksIGQgPSBhLncsIHMgPSBlLm5vZGUoZCk7XG4gICAgcy5pbiAtPSB1LCBIKG4sIHIsIHMpO1xuICB9KSwgZS5yZW1vdmVOb2RlKHQudiksIG87XG59XG5mdW5jdGlvbiBKbihlLCBuKSB7XG4gIHZhciByID0gbmV3IGcoKSwgdCA9IDAsIGkgPSAwO1xuICBmKGUubm9kZXMoKSwgZnVuY3Rpb24odSkge1xuICAgIHIuc2V0Tm9kZSh1LCB7IHY6IHUsIGluOiAwLCBvdXQ6IDAgfSk7XG4gIH0pLCBmKGUuZWRnZXMoKSwgZnVuY3Rpb24odSkge1xuICAgIHZhciBkID0gci5lZGdlKHUudiwgdS53KSB8fCAwLCBzID0gbih1KSwgYyA9IGQgKyBzO1xuICAgIHIuc2V0RWRnZSh1LnYsIHUudywgYyksIGkgPSBNYXRoLm1heChpLCByLm5vZGUodS52KS5vdXQgKz0gcyksIHQgPSBNYXRoLm1heCh0LCByLm5vZGUodS53KS5pbiArPSBzKTtcbiAgfSk7XG4gIHZhciBvID0gayhpICsgdCArIDMpLm1hcChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFhuKCk7XG4gIH0pLCBhID0gdCArIDE7XG4gIHJldHVybiBmKHIubm9kZXMoKSwgZnVuY3Rpb24odSkge1xuICAgIEgobywgYSwgci5ub2RlKHUpKTtcbiAgfSksIHsgZ3JhcGg6IHIsIGJ1Y2tldHM6IG8sIHplcm9JZHg6IGEgfTtcbn1cbmZ1bmN0aW9uIEgoZSwgbiwgcikge1xuICByLm91dCA/IHIuaW4gPyBlW3Iub3V0IC0gci5pbiArIG5dLmVucXVldWUocikgOiBlW2UubGVuZ3RoIC0gMV0uZW5xdWV1ZShyKSA6IGVbMF0uZW5xdWV1ZShyKTtcbn1cbmZ1bmN0aW9uIEtuKGUpIHtcbiAgdmFyIG4gPSBlLmdyYXBoKCkuYWN5Y2xpY2VyID09PSBcImdyZWVkeVwiID8gVW4oZSwgcihlKSkgOiBRbihlKTtcbiAgZihuLCBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBlLmVkZ2UodCk7XG4gICAgZS5yZW1vdmVFZGdlKHQpLCBpLmZvcndhcmROYW1lID0gdC5uYW1lLCBpLnJldmVyc2VkID0gITAsIGUuc2V0RWRnZSh0LncsIHQudiwgaSwgSihcInJldlwiKSk7XG4gIH0pO1xuICBmdW5jdGlvbiByKHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIHQuZWRnZShpKS53ZWlnaHQ7XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gUW4oZSkge1xuICB2YXIgbiA9IFtdLCByID0ge30sIHQgPSB7fTtcbiAgZnVuY3Rpb24gaShvKSB7XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIG8pIHx8ICh0W29dID0gITAsIHJbb10gPSAhMCwgZihlLm91dEVkZ2VzKG8pLCBmdW5jdGlvbihhKSB7XG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwociwgYS53KSA/IG4ucHVzaChhKSA6IGkoYS53KTtcbiAgICB9KSwgZGVsZXRlIHJbb10pO1xuICB9XG4gIHJldHVybiBmKGUubm9kZXMoKSwgaSksIG47XG59XG5mdW5jdGlvbiBlcihlKSB7XG4gIGYoZS5lZGdlcygpLCBmdW5jdGlvbihuKSB7XG4gICAgdmFyIHIgPSBlLmVkZ2Uobik7XG4gICAgaWYgKHIucmV2ZXJzZWQpIHtcbiAgICAgIGUucmVtb3ZlRWRnZShuKTtcbiAgICAgIHZhciB0ID0gci5mb3J3YXJkTmFtZTtcbiAgICAgIGRlbGV0ZSByLnJldmVyc2VkLCBkZWxldGUgci5mb3J3YXJkTmFtZSwgZS5zZXRFZGdlKG4udywgbi52LCByLCB0KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gTihlLCBuLCByLCB0KSB7XG4gIHZhciBpO1xuICBkb1xuICAgIGkgPSBKKHQpO1xuICB3aGlsZSAoZS5oYXNOb2RlKGkpKTtcbiAgcmV0dXJuIHIuZHVtbXkgPSBuLCBlLnNldE5vZGUoaSwgciksIGk7XG59XG5mdW5jdGlvbiBucihlKSB7XG4gIHZhciBuID0gbmV3IGcoKS5zZXRHcmFwaChlLmdyYXBoKCkpO1xuICByZXR1cm4gZihlLm5vZGVzKCksIGZ1bmN0aW9uKHIpIHtcbiAgICBuLnNldE5vZGUociwgZS5ub2RlKHIpKTtcbiAgfSksIGYoZS5lZGdlcygpLCBmdW5jdGlvbihyKSB7XG4gICAgdmFyIHQgPSBuLmVkZ2Uoci52LCByLncpIHx8IHsgd2VpZ2h0OiAwLCBtaW5sZW46IDEgfSwgaSA9IGUuZWRnZShyKTtcbiAgICBuLnNldEVkZ2Uoci52LCByLncsIHtcbiAgICAgIHdlaWdodDogdC53ZWlnaHQgKyBpLndlaWdodCxcbiAgICAgIG1pbmxlbjogTWF0aC5tYXgodC5taW5sZW4sIGkubWlubGVuKVxuICAgIH0pO1xuICB9KSwgbjtcbn1cbmZ1bmN0aW9uIExlKGUpIHtcbiAgdmFyIG4gPSBuZXcgZyh7IG11bHRpZ3JhcGg6IGUuaXNNdWx0aWdyYXBoKCkgfSkuc2V0R3JhcGgoZS5ncmFwaCgpKTtcbiAgcmV0dXJuIGYoZS5ub2RlcygpLCBmdW5jdGlvbihyKSB7XG4gICAgZS5jaGlsZHJlbihyKS5sZW5ndGggfHwgbi5zZXROb2RlKHIsIGUubm9kZShyKSk7XG4gIH0pLCBmKGUuZWRnZXMoKSwgZnVuY3Rpb24ocikge1xuICAgIG4uc2V0RWRnZShyLCBlLmVkZ2UocikpO1xuICB9KSwgbjtcbn1cbmZ1bmN0aW9uIGFlKGUsIG4pIHtcbiAgdmFyIHIgPSBlLngsIHQgPSBlLnksIGkgPSBuLnggLSByLCBvID0gbi55IC0gdCwgYSA9IGUud2lkdGggLyAyLCB1ID0gZS5oZWlnaHQgLyAyO1xuICBpZiAoIWkgJiYgIW8pXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IHBvc3NpYmxlIHRvIGZpbmQgaW50ZXJzZWN0aW9uIGluc2lkZSBvZiB0aGUgcmVjdGFuZ2xlXCIpO1xuICB2YXIgZCwgcztcbiAgcmV0dXJuIE1hdGguYWJzKG8pICogYSA+IE1hdGguYWJzKGkpICogdSA/IChvIDwgMCAmJiAodSA9IC11KSwgZCA9IHUgKiBpIC8gbywgcyA9IHUpIDogKGkgPCAwICYmIChhID0gLWEpLCBkID0gYSwgcyA9IGEgKiBvIC8gaSksIHsgeDogciArIGQsIHk6IHQgKyBzIH07XG59XG5mdW5jdGlvbiBHKGUpIHtcbiAgdmFyIG4gPSB3KGsoUGUoZSkgKyAxKSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9KTtcbiAgcmV0dXJuIGYoZS5ub2RlcygpLCBmdW5jdGlvbihyKSB7XG4gICAgdmFyIHQgPSBlLm5vZGUociksIGkgPSB0LnJhbms7XG4gICAgbShpKSB8fCAobltpXVt0Lm9yZGVyXSA9IHIpO1xuICB9KSwgbjtcbn1cbmZ1bmN0aW9uIHJyKGUpIHtcbiAgdmFyIG4gPSBQKFxuICAgIHcoZS5ub2RlcygpLCBmdW5jdGlvbihyKSB7XG4gICAgICByZXR1cm4gZS5ub2RlKHIpLnJhbms7XG4gICAgfSlcbiAgKTtcbiAgZihlLm5vZGVzKCksIGZ1bmN0aW9uKHIpIHtcbiAgICB2YXIgdCA9IGUubm9kZShyKTtcbiAgICBOZSh0LCBcInJhbmtcIikgJiYgKHQucmFuayAtPSBuKTtcbiAgfSk7XG59XG5mdW5jdGlvbiB0cihlKSB7XG4gIHZhciBuID0gUChcbiAgICB3KGUubm9kZXMoKSwgZnVuY3Rpb24obykge1xuICAgICAgcmV0dXJuIGUubm9kZShvKS5yYW5rO1xuICAgIH0pXG4gICksIHIgPSBbXTtcbiAgZihlLm5vZGVzKCksIGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgYSA9IGUubm9kZShvKS5yYW5rIC0gbjtcbiAgICByW2FdIHx8IChyW2FdID0gW10pLCByW2FdLnB1c2gobyk7XG4gIH0pO1xuICB2YXIgdCA9IDAsIGkgPSBlLmdyYXBoKCkubm9kZVJhbmtGYWN0b3I7XG4gIGYociwgZnVuY3Rpb24obywgYSkge1xuICAgIG0obykgJiYgYSAlIGkgIT09IDAgPyAtLXQgOiB0ICYmIGYobywgZnVuY3Rpb24odSkge1xuICAgICAgZS5ub2RlKHUpLnJhbmsgKz0gdDtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvZShlLCBuLCByLCB0KSB7XG4gIHZhciBpID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9O1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+PSA0ICYmIChpLnJhbmsgPSByLCBpLm9yZGVyID0gdCksIE4oZSwgXCJib3JkZXJcIiwgaSwgbik7XG59XG5mdW5jdGlvbiBQZShlKSB7XG4gIHJldHVybiB5KFxuICAgIHcoZS5ub2RlcygpLCBmdW5jdGlvbihuKSB7XG4gICAgICB2YXIgciA9IGUubm9kZShuKS5yYW5rO1xuICAgICAgaWYgKCFtKHIpKVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9KVxuICApO1xufVxuZnVuY3Rpb24gaXIoZSwgbikge1xuICB2YXIgciA9IHsgbGhzOiBbXSwgcmhzOiBbXSB9O1xuICByZXR1cm4gZihlLCBmdW5jdGlvbih0KSB7XG4gICAgbih0KSA/IHIubGhzLnB1c2godCkgOiByLnJocy5wdXNoKHQpO1xuICB9KSwgcjtcbn1cbmZ1bmN0aW9uIGFyKGUsIG4pIHtcbiAgcmV0dXJuIG4oKTtcbn1cbmZ1bmN0aW9uIG9yKGUpIHtcbiAgZnVuY3Rpb24gbihyKSB7XG4gICAgdmFyIHQgPSBlLmNoaWxkcmVuKHIpLCBpID0gZS5ub2RlKHIpO1xuICAgIGlmICh0Lmxlbmd0aCAmJiBmKHQsIG4pLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSwgXCJtaW5SYW5rXCIpKSB7XG4gICAgICBpLmJvcmRlckxlZnQgPSBbXSwgaS5ib3JkZXJSaWdodCA9IFtdO1xuICAgICAgZm9yICh2YXIgbyA9IGkubWluUmFuaywgYSA9IGkubWF4UmFuayArIDE7IG8gPCBhOyArK28pXG4gICAgICAgIHVlKGUsIFwiYm9yZGVyTGVmdFwiLCBcIl9ibFwiLCByLCBpLCBvKSwgdWUoZSwgXCJib3JkZXJSaWdodFwiLCBcIl9iclwiLCByLCBpLCBvKTtcbiAgICB9XG4gIH1cbiAgZihlLmNoaWxkcmVuKCksIG4pO1xufVxuZnVuY3Rpb24gdWUoZSwgbiwgciwgdCwgaSwgbykge1xuICB2YXIgYSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCwgcmFuazogbywgYm9yZGVyVHlwZTogbiB9LCB1ID0gaVtuXVtvIC0gMV0sIGQgPSBOKGUsIFwiYm9yZGVyXCIsIGEsIHIpO1xuICBpW25dW29dID0gZCwgZS5zZXRQYXJlbnQoZCwgdCksIHUgJiYgZS5zZXRFZGdlKHUsIGQsIHsgd2VpZ2h0OiAxIH0pO1xufVxuZnVuY3Rpb24gdXIoZSkge1xuICB2YXIgbiA9IGUuZ3JhcGgoKS5yYW5rZGlyLnRvTG93ZXJDYXNlKCk7XG4gIChuID09PSBcImxyXCIgfHwgbiA9PT0gXCJybFwiKSAmJiBfZShlKTtcbn1cbmZ1bmN0aW9uIGRyKGUpIHtcbiAgdmFyIG4gPSBlLmdyYXBoKCkucmFua2Rpci50b0xvd2VyQ2FzZSgpO1xuICAobiA9PT0gXCJidFwiIHx8IG4gPT09IFwicmxcIikgJiYgc3IoZSksIChuID09PSBcImxyXCIgfHwgbiA9PT0gXCJybFwiKSAmJiAoZnIoZSksIF9lKGUpKTtcbn1cbmZ1bmN0aW9uIF9lKGUpIHtcbiAgZihlLm5vZGVzKCksIGZ1bmN0aW9uKG4pIHtcbiAgICBkZShlLm5vZGUobikpO1xuICB9KSwgZihlLmVkZ2VzKCksIGZ1bmN0aW9uKG4pIHtcbiAgICBkZShlLmVkZ2UobikpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGRlKGUpIHtcbiAgdmFyIG4gPSBlLndpZHRoO1xuICBlLndpZHRoID0gZS5oZWlnaHQsIGUuaGVpZ2h0ID0gbjtcbn1cbmZ1bmN0aW9uIHNyKGUpIHtcbiAgZihlLm5vZGVzKCksIGZ1bmN0aW9uKG4pIHtcbiAgICAkKGUubm9kZShuKSk7XG4gIH0pLCBmKGUuZWRnZXMoKSwgZnVuY3Rpb24obikge1xuICAgIHZhciByID0gZS5lZGdlKG4pO1xuICAgIGYoci5wb2ludHMsICQpLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwociwgXCJ5XCIpICYmICQocik7XG4gIH0pO1xufVxuZnVuY3Rpb24gJChlKSB7XG4gIGUueSA9IC1lLnk7XG59XG5mdW5jdGlvbiBmcihlKSB7XG4gIGYoZS5ub2RlcygpLCBmdW5jdGlvbihuKSB7XG4gICAgRChlLm5vZGUobikpO1xuICB9KSwgZihlLmVkZ2VzKCksIGZ1bmN0aW9uKG4pIHtcbiAgICB2YXIgciA9IGUuZWRnZShuKTtcbiAgICBmKHIucG9pbnRzLCBEKSwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsIFwieFwiKSAmJiBEKHIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIEQoZSkge1xuICB2YXIgbiA9IGUueDtcbiAgZS54ID0gZS55LCBlLnkgPSBuO1xufVxuZnVuY3Rpb24gY3IoZSkge1xuICBlLmdyYXBoKCkuZHVtbXlDaGFpbnMgPSBbXSwgZihlLmVkZ2VzKCksIGZ1bmN0aW9uKG4pIHtcbiAgICBscihlLCBuKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBscihlLCBuKSB7XG4gIHZhciByID0gbi52LCB0ID0gZS5ub2RlKHIpLnJhbmssIGkgPSBuLncsIG8gPSBlLm5vZGUoaSkucmFuaywgYSA9IG4ubmFtZSwgdSA9IGUuZWRnZShuKSwgZCA9IHUubGFiZWxSYW5rO1xuICBpZiAobyAhPT0gdCArIDEpIHtcbiAgICBlLnJlbW92ZUVkZ2Uobik7XG4gICAgdmFyIHMgPSB2b2lkIDAsIGMsIGw7XG4gICAgZm9yIChsID0gMCwgKyt0OyB0IDwgbzsgKytsLCArK3QpXG4gICAgICB1LnBvaW50cyA9IFtdLCBzID0ge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBlZGdlTGFiZWw6IHUsXG4gICAgICAgIGVkZ2VPYmo6IG4sXG4gICAgICAgIHJhbms6IHRcbiAgICAgIH0sIGMgPSBOKGUsIFwiZWRnZVwiLCBzLCBcIl9kXCIpLCB0ID09PSBkICYmIChzLndpZHRoID0gdS53aWR0aCwgcy5oZWlnaHQgPSB1LmhlaWdodCwgcy5kdW1teSA9IFwiZWRnZS1sYWJlbFwiLCBzLmxhYmVscG9zID0gdS5sYWJlbHBvcyksIGUuc2V0RWRnZShyLCBjLCB7IHdlaWdodDogdS53ZWlnaHQgfSwgYSksIGwgPT09IDAgJiYgZS5ncmFwaCgpLmR1bW15Q2hhaW5zLnB1c2goYyksIHIgPSBjO1xuICAgIGUuc2V0RWRnZShyLCBpLCB7IHdlaWdodDogdS53ZWlnaHQgfSwgYSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGhyKGUpIHtcbiAgZihlLmdyYXBoKCkuZHVtbXlDaGFpbnMsIGZ1bmN0aW9uKG4pIHtcbiAgICB2YXIgciA9IGUubm9kZShuKSwgdCA9IHIuZWRnZUxhYmVsLCBpO1xuICAgIGZvciAoZS5zZXRFZGdlKHIuZWRnZU9iaiwgdCk7IHIuZHVtbXk7IClcbiAgICAgIGkgPSBlLnN1Y2Nlc3NvcnMobilbMF0sIGUucmVtb3ZlTm9kZShuKSwgdC5wb2ludHMucHVzaCh7IHg6IHIueCwgeTogci55IH0pLCByLmR1bW15ID09PSBcImVkZ2UtbGFiZWxcIiAmJiAodC54ID0gci54LCB0LnkgPSByLnksIHQud2lkdGggPSByLndpZHRoLCB0LmhlaWdodCA9IHIuaGVpZ2h0KSwgbiA9IGksIHIgPSBlLm5vZGUobik7XG4gIH0pO1xufVxuZnVuY3Rpb24gSyhlKSB7XG4gIHZhciBuID0ge307XG4gIGZ1bmN0aW9uIHIodCkge1xuICAgIHZhciBpID0gZS5ub2RlKHQpO1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobiwgdCkpXG4gICAgICByZXR1cm4gaS5yYW5rO1xuICAgIG5bdF0gPSAhMDtcbiAgICB2YXIgbyA9IFAoXG4gICAgICB3KGUub3V0RWRnZXModCksIGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIHIoYS53KSAtIGUuZWRnZShhKS5taW5sZW47XG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIChvID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgfHwgLy8gcmV0dXJuIHZhbHVlIG9mIF8ubWFwKFtdKSBmb3IgTG9kYXNoIDNcbiAgICBvID09PSB2b2lkIDAgfHwgLy8gcmV0dXJuIHZhbHVlIG9mIF8ubWFwKFtdKSBmb3IgTG9kYXNoIDRcbiAgICBvID09PSBudWxsKSAmJiAobyA9IDApLCBpLnJhbmsgPSBvO1xuICB9XG4gIGYoZS5zb3VyY2VzKCksIHIpO1xufVxuZnVuY3Rpb24gXyhlLCBuKSB7XG4gIHJldHVybiBlLm5vZGUobi53KS5yYW5rIC0gZS5ub2RlKG4udikucmFuayAtIGUuZWRnZShuKS5taW5sZW47XG59XG5mdW5jdGlvbiBDZShlKSB7XG4gIHZhciBuID0gbmV3IGcoeyBkaXJlY3RlZDogITEgfSksIHIgPSBlLm5vZGVzKClbMF0sIHQgPSBlLm5vZGVDb3VudCgpO1xuICBuLnNldE5vZGUociwge30pO1xuICBmb3IgKHZhciBpLCBvOyB2cihuLCBlKSA8IHQ7IClcbiAgICBpID0gcHIobiwgZSksIG8gPSBuLmhhc05vZGUoaS52KSA/IF8oZSwgaSkgOiAtXyhlLCBpKSwgd3IobiwgZSwgbyk7XG4gIHJldHVybiBuO1xufVxuZnVuY3Rpb24gdnIoZSwgbikge1xuICBmdW5jdGlvbiByKHQpIHtcbiAgICBmKG4ubm9kZUVkZ2VzKHQpLCBmdW5jdGlvbihpKSB7XG4gICAgICB2YXIgbyA9IGkudiwgYSA9IHQgPT09IG8gPyBpLncgOiBvO1xuICAgICAgIWUuaGFzTm9kZShhKSAmJiAhXyhuLCBpKSAmJiAoZS5zZXROb2RlKGEsIHt9KSwgZS5zZXRFZGdlKHQsIGEsIHt9KSwgcihhKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGYoZS5ub2RlcygpLCByKSwgZS5ub2RlQ291bnQoKTtcbn1cbmZ1bmN0aW9uIHByKGUsIG4pIHtcbiAgcmV0dXJuIFoobi5lZGdlcygpLCBmdW5jdGlvbihyKSB7XG4gICAgaWYgKGUuaGFzTm9kZShyLnYpICE9PSBlLmhhc05vZGUoci53KSlcbiAgICAgIHJldHVybiBfKG4sIHIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHdyKGUsIG4sIHIpIHtcbiAgZihlLm5vZGVzKCksIGZ1bmN0aW9uKHQpIHtcbiAgICBuLm5vZGUodCkucmFuayArPSByO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGJyKCkge1xufVxuYnIucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5mdW5jdGlvbiBJZShlLCBuLCByKSB7XG4gIGtlKG4pIHx8IChuID0gW25dKTtcbiAgdmFyIHQgPSAoZS5pc0RpcmVjdGVkKCkgPyBlLnN1Y2Nlc3NvcnMgOiBlLm5laWdoYm9ycykuYmluZChlKSwgaSA9IFtdLCBvID0ge307XG4gIHJldHVybiBmKG4sIGZ1bmN0aW9uKGEpIHtcbiAgICBpZiAoIWUuaGFzTm9kZShhKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyYXBoIGRvZXMgbm90IGhhdmUgbm9kZTogXCIgKyBhKTtcbiAgICBSZShlLCBhLCByID09PSBcInBvc3RcIiwgbywgdCwgaSk7XG4gIH0pLCBpO1xufVxuZnVuY3Rpb24gUmUoZSwgbiwgciwgdCwgaSwgbykge1xuICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCwgbikgfHwgKHRbbl0gPSAhMCwgciB8fCBvLnB1c2gobiksIGYoaShuKSwgZnVuY3Rpb24oYSkge1xuICAgIFJlKGUsIGEsIHIsIHQsIGksIG8pO1xuICB9KSwgciAmJiBvLnB1c2gobikpO1xufVxuZnVuY3Rpb24gbXIoZSwgbikge1xuICByZXR1cm4gSWUoZSwgbiwgXCJwb3N0XCIpO1xufVxuZnVuY3Rpb24gZ3IoZSwgbikge1xuICByZXR1cm4gSWUoZSwgbiwgXCJwcmVcIik7XG59XG54LmluaXRMb3dMaW1WYWx1ZXMgPSBlZTtcbnguaW5pdEN1dFZhbHVlcyA9IFE7XG54LmNhbGNDdXRWYWx1ZSA9IFRlO1xueC5sZWF2ZUVkZ2UgPSBTZTtcbnguZW50ZXJFZGdlID0gRmU7XG54LmV4Y2hhbmdlRWRnZXMgPSBBZTtcbmZ1bmN0aW9uIHgoZSkge1xuICBlID0gbnIoZSksIEsoZSk7XG4gIHZhciBuID0gQ2UoZSk7XG4gIGVlKG4pLCBRKG4sIGUpO1xuICBmb3IgKHZhciByLCB0OyByID0gU2Uobik7IClcbiAgICB0ID0gRmUobiwgZSwgciksIEFlKG4sIGUsIHIsIHQpO1xufVxuZnVuY3Rpb24gUShlLCBuKSB7XG4gIHZhciByID0gbXIoZSwgZS5ub2RlcygpKTtcbiAgciA9IHIuc2xpY2UoMCwgci5sZW5ndGggLSAxKSwgZihyLCBmdW5jdGlvbih0KSB7XG4gICAgeXIoZSwgbiwgdCk7XG4gIH0pO1xufVxuZnVuY3Rpb24geXIoZSwgbiwgcikge1xuICB2YXIgdCA9IGUubm9kZShyKSwgaSA9IHQucGFyZW50O1xuICBlLmVkZ2UociwgaSkuY3V0dmFsdWUgPSBUZShlLCBuLCByKTtcbn1cbmZ1bmN0aW9uIFRlKGUsIG4sIHIpIHtcbiAgdmFyIHQgPSBlLm5vZGUociksIGkgPSB0LnBhcmVudCwgbyA9ICEwLCBhID0gbi5lZGdlKHIsIGkpLCB1ID0gMDtcbiAgcmV0dXJuIGEgfHwgKG8gPSAhMSwgYSA9IG4uZWRnZShpLCByKSksIHUgPSBhLndlaWdodCwgZihuLm5vZGVFZGdlcyhyKSwgZnVuY3Rpb24oZCkge1xuICAgIHZhciBzID0gZC52ID09PSByLCBjID0gcyA/IGQudyA6IGQudjtcbiAgICBpZiAoYyAhPT0gaSkge1xuICAgICAgdmFyIGwgPSBzID09PSBvLCBoID0gbi5lZGdlKGQpLndlaWdodDtcbiAgICAgIGlmICh1ICs9IGwgPyBoIDogLWgsIEVyKGUsIHIsIGMpKSB7XG4gICAgICAgIHZhciB2ID0gZS5lZGdlKHIsIGMpLmN1dHZhbHVlO1xuICAgICAgICB1ICs9IGwgPyAtdiA6IHY7XG4gICAgICB9XG4gICAgfVxuICB9KSwgdTtcbn1cbmZ1bmN0aW9uIGVlKGUsIG4pIHtcbiAgYXJndW1lbnRzLmxlbmd0aCA8IDIgJiYgKG4gPSBlLm5vZGVzKClbMF0pLCBNZShlLCB7fSwgMSwgbik7XG59XG5mdW5jdGlvbiBNZShlLCBuLCByLCB0LCBpKSB7XG4gIHZhciBvID0gciwgYSA9IGUubm9kZSh0KTtcbiAgcmV0dXJuIG5bdF0gPSAhMCwgZihlLm5laWdoYm9ycyh0KSwgZnVuY3Rpb24odSkge1xuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLCB1KSB8fCAociA9IE1lKGUsIG4sIHIsIHUsIHQpKTtcbiAgfSksIGEubG93ID0gbywgYS5saW0gPSByKyssIGkgPyBhLnBhcmVudCA9IGkgOiBkZWxldGUgYS5wYXJlbnQsIHI7XG59XG5mdW5jdGlvbiBTZShlKSB7XG4gIHJldHVybiBVKGUuZWRnZXMoKSwgZnVuY3Rpb24obikge1xuICAgIHJldHVybiBlLmVkZ2UobikuY3V0dmFsdWUgPCAwO1xuICB9KTtcbn1cbmZ1bmN0aW9uIEZlKGUsIG4sIHIpIHtcbiAgdmFyIHQgPSByLnYsIGkgPSByLnc7XG4gIG4uaGFzRWRnZSh0LCBpKSB8fCAodCA9IHIudywgaSA9IHIudik7XG4gIHZhciBvID0gZS5ub2RlKHQpLCBhID0gZS5ub2RlKGkpLCB1ID0gbywgZCA9ICExO1xuICBvLmxpbSA+IGEubGltICYmICh1ID0gYSwgZCA9ICEwKTtcbiAgdmFyIHMgPSBJKG4uZWRnZXMoKSwgZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBkID09PSBzZShlLCBlLm5vZGUoYy52KSwgdSkgJiYgZCAhPT0gc2UoZSwgZS5ub2RlKGMudyksIHUpO1xuICB9KTtcbiAgcmV0dXJuIFoocywgZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBfKG4sIGMpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIEFlKGUsIG4sIHIsIHQpIHtcbiAgdmFyIGkgPSByLnYsIG8gPSByLnc7XG4gIGUucmVtb3ZlRWRnZShpLCBvKSwgZS5zZXRFZGdlKHQudiwgdC53LCB7fSksIGVlKGUpLCBRKGUsIG4pLCB4cihlLCBuKTtcbn1cbmZ1bmN0aW9uIHhyKGUsIG4pIHtcbiAgdmFyIHIgPSBVKGUubm9kZXMoKSwgZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiAhbi5ub2RlKGkpLnBhcmVudDtcbiAgfSksIHQgPSBncihlLCByKTtcbiAgdCA9IHQuc2xpY2UoMSksIGYodCwgZnVuY3Rpb24oaSkge1xuICAgIHZhciBvID0gZS5ub2RlKGkpLnBhcmVudCwgYSA9IG4uZWRnZShpLCBvKSwgdSA9ICExO1xuICAgIGEgfHwgKGEgPSBuLmVkZ2UobywgaSksIHUgPSAhMCksIG4ubm9kZShpKS5yYW5rID0gbi5ub2RlKG8pLnJhbmsgKyAodSA/IGEubWlubGVuIDogLWEubWlubGVuKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBFcihlLCBuLCByKSB7XG4gIHJldHVybiBlLmhhc0VkZ2Uobiwgcik7XG59XG5mdW5jdGlvbiBzZShlLCBuLCByKSB7XG4gIHJldHVybiByLmxvdyA8PSBuLmxpbSAmJiBuLmxpbSA8PSByLmxpbTtcbn1cbmZ1bmN0aW9uIGtyKGUpIHtcbiAgc3dpdGNoIChlLmdyYXBoKCkucmFua2VyKSB7XG4gICAgY2FzZSBcIm5ldHdvcmstc2ltcGxleFwiOlxuICAgICAgZmUoZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGlnaHQtdHJlZVwiOlxuICAgICAgTnIoZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibG9uZ2VzdC1wYXRoXCI6XG4gICAgICBPcihlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmZShlKTtcbiAgfVxufVxudmFyIE9yID0gSztcbmZ1bmN0aW9uIE5yKGUpIHtcbiAgSyhlKSwgQ2UoZSk7XG59XG5mdW5jdGlvbiBmZShlKSB7XG4gIHgoZSk7XG59XG5mdW5jdGlvbiBMcihlKSB7XG4gIHZhciBuID0gTihlLCBcInJvb3RcIiwge30sIFwiX3Jvb3RcIiksIHIgPSBQcihlKSwgdCA9IHkoRShyKSkgLSAxLCBpID0gMiAqIHQgKyAxO1xuICBlLmdyYXBoKCkubmVzdGluZ1Jvb3QgPSBuLCBmKGUuZWRnZXMoKSwgZnVuY3Rpb24oYSkge1xuICAgIGUuZWRnZShhKS5taW5sZW4gKj0gaTtcbiAgfSk7XG4gIHZhciBvID0gX3IoZSkgKyAxO1xuICBmKGUuY2hpbGRyZW4oKSwgZnVuY3Rpb24oYSkge1xuICAgIEJlKGUsIG4sIGksIG8sIHQsIHIsIGEpO1xuICB9KSwgZS5ncmFwaCgpLm5vZGVSYW5rRmFjdG9yID0gaTtcbn1cbmZ1bmN0aW9uIEJlKGUsIG4sIHIsIHQsIGksIG8sIGEpIHtcbiAgdmFyIHUgPSBlLmNoaWxkcmVuKGEpO1xuICBpZiAoIXUubGVuZ3RoKSB7XG4gICAgYSAhPT0gbiAmJiBlLnNldEVkZ2UobiwgYSwgeyB3ZWlnaHQ6IDAsIG1pbmxlbjogciB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGQgPSBvZShlLCBcIl9idFwiKSwgcyA9IG9lKGUsIFwiX2JiXCIpLCBjID0gZS5ub2RlKGEpO1xuICBlLnNldFBhcmVudChkLCBhKSwgYy5ib3JkZXJUb3AgPSBkLCBlLnNldFBhcmVudChzLCBhKSwgYy5ib3JkZXJCb3R0b20gPSBzLCBmKHUsIGZ1bmN0aW9uKGwpIHtcbiAgICBCZShlLCBuLCByLCB0LCBpLCBvLCBsKTtcbiAgICB2YXIgaCA9IGUubm9kZShsKSwgdiA9IGguYm9yZGVyVG9wID8gaC5ib3JkZXJUb3AgOiBsLCBwID0gaC5ib3JkZXJCb3R0b20gPyBoLmJvcmRlckJvdHRvbSA6IGwsIGIgPSBoLmJvcmRlclRvcCA/IHQgOiAyICogdCwgTCA9IHYgIT09IHAgPyAxIDogaSAtIG9bYV0gKyAxO1xuICAgIGUuc2V0RWRnZShkLCB2LCB7XG4gICAgICB3ZWlnaHQ6IGIsXG4gICAgICBtaW5sZW46IEwsXG4gICAgICBuZXN0aW5nRWRnZTogITBcbiAgICB9KSwgZS5zZXRFZGdlKHAsIHMsIHtcbiAgICAgIHdlaWdodDogYixcbiAgICAgIG1pbmxlbjogTCxcbiAgICAgIG5lc3RpbmdFZGdlOiAhMFxuICAgIH0pO1xuICB9KSwgZS5wYXJlbnQoYSkgfHwgZS5zZXRFZGdlKG4sIGQsIHsgd2VpZ2h0OiAwLCBtaW5sZW46IGkgKyBvW2FdIH0pO1xufVxuZnVuY3Rpb24gUHIoZSkge1xuICB2YXIgbiA9IHt9O1xuICBmdW5jdGlvbiByKHQsIGkpIHtcbiAgICB2YXIgbyA9IGUuY2hpbGRyZW4odCk7XG4gICAgbyAmJiBvLmxlbmd0aCAmJiBmKG8sIGZ1bmN0aW9uKGEpIHtcbiAgICAgIHIoYSwgaSArIDEpO1xuICAgIH0pLCBuW3RdID0gaTtcbiAgfVxuICByZXR1cm4gZihlLmNoaWxkcmVuKCksIGZ1bmN0aW9uKHQpIHtcbiAgICByKHQsIDEpO1xuICB9KSwgbjtcbn1cbmZ1bmN0aW9uIF9yKGUpIHtcbiAgcmV0dXJuIEIoXG4gICAgZS5lZGdlcygpLFxuICAgIGZ1bmN0aW9uKG4sIHIpIHtcbiAgICAgIHJldHVybiBuICsgZS5lZGdlKHIpLndlaWdodDtcbiAgICB9LFxuICAgIDBcbiAgKTtcbn1cbmZ1bmN0aW9uIENyKGUpIHtcbiAgdmFyIG4gPSBlLmdyYXBoKCk7XG4gIGUucmVtb3ZlTm9kZShuLm5lc3RpbmdSb290KSwgZGVsZXRlIG4ubmVzdGluZ1Jvb3QsIGYoZS5lZGdlcygpLCBmdW5jdGlvbihyKSB7XG4gICAgdmFyIHQgPSBlLmVkZ2Uocik7XG4gICAgdC5uZXN0aW5nRWRnZSAmJiBlLnJlbW92ZUVkZ2Uocik7XG4gIH0pO1xufVxuZnVuY3Rpb24gSXIoZSwgbiwgcikge1xuICB2YXIgdCA9IHt9LCBpO1xuICBmKHIsIGZ1bmN0aW9uKG8pIHtcbiAgICBmb3IgKHZhciBhID0gZS5wYXJlbnQobyksIHUsIGQ7IGE7ICkge1xuICAgICAgaWYgKHUgPSBlLnBhcmVudChhKSwgdSA/IChkID0gdFt1XSwgdFt1XSA9IGEpIDogKGQgPSBpLCBpID0gYSksIGQgJiYgZCAhPT0gYSkge1xuICAgICAgICBuLnNldEVkZ2UoZCwgYSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGEgPSB1O1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBScihlLCBuLCByKSB7XG4gIHZhciB0ID0gVHIoZSksIGkgPSBuZXcgZyh7IGNvbXBvdW5kOiAhMCB9KS5zZXRHcmFwaCh7IHJvb3Q6IHQgfSkuc2V0RGVmYXVsdE5vZGVMYWJlbChmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIGUubm9kZShvKTtcbiAgfSk7XG4gIHJldHVybiBmKGUubm9kZXMoKSwgZnVuY3Rpb24obykge1xuICAgIHZhciBhID0gZS5ub2RlKG8pLCB1ID0gZS5wYXJlbnQobyk7XG4gICAgKGEucmFuayA9PT0gbiB8fCBhLm1pblJhbmsgPD0gbiAmJiBuIDw9IGEubWF4UmFuaykgJiYgKGkuc2V0Tm9kZShvKSwgaS5zZXRQYXJlbnQobywgdSB8fCB0KSwgZihlW3JdKG8pLCBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgcyA9IGQudiA9PT0gbyA/IGQudyA6IGQudiwgYyA9IGkuZWRnZShzLCBvKSwgbCA9IG0oYykgPyAwIDogYy53ZWlnaHQ7XG4gICAgICBpLnNldEVkZ2UocywgbywgeyB3ZWlnaHQ6IGUuZWRnZShkKS53ZWlnaHQgKyBsIH0pO1xuICAgIH0pLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgXCJtaW5SYW5rXCIpICYmIGkuc2V0Tm9kZShvLCB7XG4gICAgICBib3JkZXJMZWZ0OiBhLmJvcmRlckxlZnRbbl0sXG4gICAgICBib3JkZXJSaWdodDogYS5ib3JkZXJSaWdodFtuXVxuICAgIH0pKTtcbiAgfSksIGk7XG59XG5mdW5jdGlvbiBUcihlKSB7XG4gIGZvciAodmFyIG47IGUuaGFzTm9kZShuID0gSihcIl9yb290XCIpKTsgKSA7XG4gIHJldHVybiBuO1xufVxuZnVuY3Rpb24gTXIoZSwgbikge1xuICBmb3IgKHZhciByID0gMCwgdCA9IDE7IHQgPCBuLmxlbmd0aDsgKyt0KVxuICAgIHIgKz0gU3IoZSwgblt0IC0gMV0sIG5bdF0pO1xuICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIFNyKGUsIG4sIHIpIHtcbiAgZm9yICh2YXIgdCA9IFduKFxuICAgIHIsXG4gICAgdyhyLCBmdW5jdGlvbihzLCBjKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9KVxuICApLCBpID0gTyhcbiAgICB3KG4sIGZ1bmN0aW9uKHMpIHtcbiAgICAgIHJldHVybiBSKFxuICAgICAgICB3KGUub3V0RWRnZXMocyksIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICByZXR1cm4geyBwb3M6IHRbYy53XSwgd2VpZ2h0OiBlLmVkZ2UoYykud2VpZ2h0IH07XG4gICAgICAgIH0pLFxuICAgICAgICBcInBvc1wiXG4gICAgICApO1xuICAgIH0pXG4gICksIG8gPSAxOyBvIDwgci5sZW5ndGg7ICkgbyA8PD0gMTtcbiAgdmFyIGEgPSAyICogbyAtIDE7XG4gIG8gLT0gMTtcbiAgdmFyIHUgPSB3KG5ldyBBcnJheShhKSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0pLCBkID0gMDtcbiAgcmV0dXJuIGYoXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGkuZm9yRWFjaChmdW5jdGlvbihzKSB7XG4gICAgICB2YXIgYyA9IHMucG9zICsgbztcbiAgICAgIHVbY10gKz0gcy53ZWlnaHQ7XG4gICAgICBmb3IgKHZhciBsID0gMDsgYyA+IDA7IClcbiAgICAgICAgYyAlIDIgJiYgKGwgKz0gdVtjICsgMV0pLCBjID0gYyAtIDEgPj4gMSwgdVtjXSArPSBzLndlaWdodDtcbiAgICAgIGQgKz0gcy53ZWlnaHQgKiBsO1xuICAgIH0pXG4gICksIGQ7XG59XG5mdW5jdGlvbiBGcihlKSB7XG4gIHZhciBuID0ge30sIHIgPSBJKGUubm9kZXMoKSwgZnVuY3Rpb24odSkge1xuICAgIHJldHVybiAhZS5jaGlsZHJlbih1KS5sZW5ndGg7XG4gIH0pLCB0ID0geShcbiAgICB3KHIsIGZ1bmN0aW9uKHUpIHtcbiAgICAgIHJldHVybiBlLm5vZGUodSkucmFuaztcbiAgICB9KVxuICApLCBpID0gdyhrKHQgKyAxKSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9KTtcbiAgZnVuY3Rpb24gbyh1KSB7XG4gICAgaWYgKCFOZShuLCB1KSkge1xuICAgICAgblt1XSA9ICEwO1xuICAgICAgdmFyIGQgPSBlLm5vZGUodSk7XG4gICAgICBpW2QucmFua10ucHVzaCh1KSwgZihlLnN1Y2Nlc3NvcnModSksIG8pO1xuICAgIH1cbiAgfVxuICB2YXIgYSA9IFIociwgZnVuY3Rpb24odSkge1xuICAgIHJldHVybiBlLm5vZGUodSkucmFuaztcbiAgfSk7XG4gIHJldHVybiBmKGEsIG8pLCBpO1xufVxuZnVuY3Rpb24gQXIoZSwgbikge1xuICByZXR1cm4gdyhuLCBmdW5jdGlvbihyKSB7XG4gICAgdmFyIHQgPSBlLmluRWRnZXMocik7XG4gICAgaWYgKHQubGVuZ3RoKSB7XG4gICAgICB2YXIgaSA9IEIoXG4gICAgICAgIHQsXG4gICAgICAgIGZ1bmN0aW9uKG8sIGEpIHtcbiAgICAgICAgICB2YXIgdSA9IGUuZWRnZShhKSwgZCA9IGUubm9kZShhLnYpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdW06IG8uc3VtICsgdS53ZWlnaHQgKiBkLm9yZGVyLFxuICAgICAgICAgICAgd2VpZ2h0OiBvLndlaWdodCArIHUud2VpZ2h0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBzdW06IDAsIHdlaWdodDogMCB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdjogcixcbiAgICAgICAgYmFyeWNlbnRlcjogaS5zdW0gLyBpLndlaWdodCxcbiAgICAgICAgd2VpZ2h0OiBpLndlaWdodFxuICAgICAgfTtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybiB7IHY6IHIgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBCcihlLCBuKSB7XG4gIHZhciByID0ge307XG4gIGYoZSwgZnVuY3Rpb24oaSwgbykge1xuICAgIHZhciBhID0gcltpLnZdID0ge1xuICAgICAgaW5kZWdyZWU6IDAsXG4gICAgICBpbjogW10sXG4gICAgICBvdXQ6IFtdLFxuICAgICAgdnM6IFtpLnZdLFxuICAgICAgaTogb1xuICAgIH07XG4gICAgbShpLmJhcnljZW50ZXIpIHx8IChhLmJhcnljZW50ZXIgPSBpLmJhcnljZW50ZXIsIGEud2VpZ2h0ID0gaS53ZWlnaHQpO1xuICB9KSwgZihuLmVkZ2VzKCksIGZ1bmN0aW9uKGkpIHtcbiAgICB2YXIgbyA9IHJbaS52XSwgYSA9IHJbaS53XTtcbiAgICAhbShvKSAmJiAhbShhKSAmJiAoYS5pbmRlZ3JlZSsrLCBvLm91dC5wdXNoKHJbaS53XSkpO1xuICB9KTtcbiAgdmFyIHQgPSBJKHIsIGZ1bmN0aW9uKGkpIHtcbiAgICByZXR1cm4gIWkuaW5kZWdyZWU7XG4gIH0pO1xuICByZXR1cm4ganIodCk7XG59XG5mdW5jdGlvbiBqcihlKSB7XG4gIHZhciBuID0gW107XG4gIGZ1bmN0aW9uIHIobykge1xuICAgIHJldHVybiBmdW5jdGlvbihhKSB7XG4gICAgICBhLm1lcmdlZCB8fCAobShhLmJhcnljZW50ZXIpIHx8IG0oby5iYXJ5Y2VudGVyKSB8fCBhLmJhcnljZW50ZXIgPj0gby5iYXJ5Y2VudGVyKSAmJiBHcihvLCBhKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHQobykge1xuICAgIHJldHVybiBmdW5jdGlvbihhKSB7XG4gICAgICBhLmluLnB1c2gobyksIC0tYS5pbmRlZ3JlZSA9PT0gMCAmJiBlLnB1c2goYSk7XG4gICAgfTtcbiAgfVxuICBmb3IgKDsgZS5sZW5ndGg7ICkge1xuICAgIHZhciBpID0gZS5wb3AoKTtcbiAgICBuLnB1c2goaSksIGYoaS5pbi5yZXZlcnNlKCksIHIoaSkpLCBmKGkub3V0LCB0KGkpKTtcbiAgfVxuICByZXR1cm4gdyhcbiAgICBJKG4sIGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiAhby5tZXJnZWQ7XG4gICAgfSksXG4gICAgZnVuY3Rpb24obykge1xuICAgICAgcmV0dXJuIEEobywgW1widnNcIiwgXCJpXCIsIFwiYmFyeWNlbnRlclwiLCBcIndlaWdodFwiXSk7XG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gR3IoZSwgbikge1xuICB2YXIgciA9IDAsIHQgPSAwO1xuICBlLndlaWdodCAmJiAociArPSBlLmJhcnljZW50ZXIgKiBlLndlaWdodCwgdCArPSBlLndlaWdodCksIG4ud2VpZ2h0ICYmIChyICs9IG4uYmFyeWNlbnRlciAqIG4ud2VpZ2h0LCB0ICs9IG4ud2VpZ2h0KSwgZS52cyA9IG4udnMuY29uY2F0KGUudnMpLCBlLmJhcnljZW50ZXIgPSByIC8gdCwgZS53ZWlnaHQgPSB0LCBlLmkgPSBNYXRoLm1pbihuLmksIGUuaSksIG4ubWVyZ2VkID0gITA7XG59XG5mdW5jdGlvbiBWcihlLCBuKSB7XG4gIHZhciByID0gaXIoZSwgZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYywgXCJiYXJ5Y2VudGVyXCIpO1xuICB9KSwgdCA9IHIubGhzLCBpID0gUihyLnJocywgZnVuY3Rpb24oYykge1xuICAgIHJldHVybiAtYy5pO1xuICB9KSwgbyA9IFtdLCBhID0gMCwgdSA9IDAsIGQgPSAwO1xuICB0LnNvcnQoWXIoISFuKSksIGQgPSBjZShvLCBpLCBkKSwgZih0LCBmdW5jdGlvbihjKSB7XG4gICAgZCArPSBjLnZzLmxlbmd0aCwgby5wdXNoKGMudnMpLCBhICs9IGMuYmFyeWNlbnRlciAqIGMud2VpZ2h0LCB1ICs9IGMud2VpZ2h0LCBkID0gY2UobywgaSwgZCk7XG4gIH0pO1xuICB2YXIgcyA9IHsgdnM6IE8obykgfTtcbiAgcmV0dXJuIHUgJiYgKHMuYmFyeWNlbnRlciA9IGEgLyB1LCBzLndlaWdodCA9IHUpLCBzO1xufVxuZnVuY3Rpb24gY2UoZSwgbiwgcikge1xuICBmb3IgKHZhciB0OyBuLmxlbmd0aCAmJiAodCA9IEYobikpLmkgPD0gcjsgKVxuICAgIG4ucG9wKCksIGUucHVzaCh0LnZzKSwgcisrO1xuICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIFlyKGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG4sIHIpIHtcbiAgICByZXR1cm4gbi5iYXJ5Y2VudGVyIDwgci5iYXJ5Y2VudGVyID8gLTEgOiBuLmJhcnljZW50ZXIgPiByLmJhcnljZW50ZXIgPyAxIDogZSA/IHIuaSAtIG4uaSA6IG4uaSAtIHIuaTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGplKGUsIG4sIHIsIHQpIHtcbiAgdmFyIGkgPSBlLmNoaWxkcmVuKG4pLCBvID0gZS5ub2RlKG4pLCBhID0gbyA/IG8uYm9yZGVyTGVmdCA6IHZvaWQgMCwgdSA9IG8gPyBvLmJvcmRlclJpZ2h0IDogdm9pZCAwLCBkID0ge307XG4gIGEgJiYgKGkgPSBJKGksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gcCAhPT0gYSAmJiBwICE9PSB1O1xuICB9KSk7XG4gIHZhciBzID0gQXIoZSwgaSk7XG4gIGYocywgZnVuY3Rpb24ocCkge1xuICAgIGlmIChlLmNoaWxkcmVuKHAudikubGVuZ3RoKSB7XG4gICAgICB2YXIgYiA9IGplKGUsIHAudiwgciwgdCk7XG4gICAgICBkW3Audl0gPSBiLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgXCJiYXJ5Y2VudGVyXCIpICYmIERyKHAsIGIpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBjID0gQnIocywgcik7XG4gICRyKGMsIGQpO1xuICB2YXIgbCA9IFZyKGMsIHQpO1xuICBpZiAoYSAmJiAobC52cyA9IE8oW2EsIGwudnMsIHVdKSwgZS5wcmVkZWNlc3NvcnMoYSkubGVuZ3RoKSkge1xuICAgIHZhciBoID0gZS5ub2RlKGUucHJlZGVjZXNzb3JzKGEpWzBdKSwgdiA9IGUubm9kZShlLnByZWRlY2Vzc29ycyh1KVswXSk7XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGwsIFwiYmFyeWNlbnRlclwiKSB8fCAobC5iYXJ5Y2VudGVyID0gMCwgbC53ZWlnaHQgPSAwKSwgbC5iYXJ5Y2VudGVyID0gKGwuYmFyeWNlbnRlciAqIGwud2VpZ2h0ICsgaC5vcmRlciArIHYub3JkZXIpIC8gKGwud2VpZ2h0ICsgMiksIGwud2VpZ2h0ICs9IDI7XG4gIH1cbiAgcmV0dXJuIGw7XG59XG5mdW5jdGlvbiAkcihlLCBuKSB7XG4gIGYoZSwgZnVuY3Rpb24ocikge1xuICAgIHIudnMgPSBPKFxuICAgICAgci52cy5tYXAoZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gblt0XSA/IG5bdF0udnMgOiB0O1xuICAgICAgfSlcbiAgICApO1xuICB9KTtcbn1cbmZ1bmN0aW9uIERyKGUsIG4pIHtcbiAgbShlLmJhcnljZW50ZXIpID8gKGUuYmFyeWNlbnRlciA9IG4uYmFyeWNlbnRlciwgZS53ZWlnaHQgPSBuLndlaWdodCkgOiAoZS5iYXJ5Y2VudGVyID0gKGUuYmFyeWNlbnRlciAqIGUud2VpZ2h0ICsgbi5iYXJ5Y2VudGVyICogbi53ZWlnaHQpIC8gKGUud2VpZ2h0ICsgbi53ZWlnaHQpLCBlLndlaWdodCArPSBuLndlaWdodCk7XG59XG5mdW5jdGlvbiBxcihlKSB7XG4gIHZhciBuID0gUGUoZSksIHIgPSBsZShlLCBrKDEsIG4gKyAxKSwgXCJpbkVkZ2VzXCIpLCB0ID0gbGUoZSwgayhuIC0gMSwgLTEsIC0xKSwgXCJvdXRFZGdlc1wiKSwgaSA9IEZyKGUpO1xuICBoZShlLCBpKTtcbiAgZm9yICh2YXIgbyA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgYSwgdSA9IDAsIGQgPSAwOyBkIDwgNDsgKyt1LCArK2QpIHtcbiAgICBXcih1ICUgMiA/IHIgOiB0LCB1ICUgNCA+PSAyKSwgaSA9IEcoZSk7XG4gICAgdmFyIHMgPSBNcihlLCBpKTtcbiAgICBzIDwgbyAmJiAoZCA9IDAsIGEgPSB5bihpKSwgbyA9IHMpO1xuICB9XG4gIGhlKGUsIGEpO1xufVxuZnVuY3Rpb24gbGUoZSwgbiwgcikge1xuICByZXR1cm4gdyhuLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIFJyKGUsIHQsIHIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIFdyKGUsIG4pIHtcbiAgdmFyIHIgPSBuZXcgZygpO1xuICBmKGUsIGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IHQuZ3JhcGgoKS5yb290LCBvID0gamUodCwgaSwgciwgbik7XG4gICAgZihvLnZzLCBmdW5jdGlvbihhLCB1KSB7XG4gICAgICB0Lm5vZGUoYSkub3JkZXIgPSB1O1xuICAgIH0pLCBJcih0LCByLCBvLnZzKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBoZShlLCBuKSB7XG4gIGYobiwgZnVuY3Rpb24ocikge1xuICAgIGYociwgZnVuY3Rpb24odCwgaSkge1xuICAgICAgZS5ub2RlKHQpLm9yZGVyID0gaTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBYcihlKSB7XG4gIHZhciBuID0gSHIoZSk7XG4gIGYoZS5ncmFwaCgpLmR1bW15Q2hhaW5zLCBmdW5jdGlvbihyKSB7XG4gICAgZm9yICh2YXIgdCA9IGUubm9kZShyKSwgaSA9IHQuZWRnZU9iaiwgbyA9IHpyKGUsIG4sIGkudiwgaS53KSwgYSA9IG8ucGF0aCwgdSA9IG8ubGNhLCBkID0gMCwgcyA9IGFbZF0sIGMgPSAhMDsgciAhPT0gaS53OyApIHtcbiAgICAgIGlmICh0ID0gZS5ub2RlKHIpLCBjKSB7XG4gICAgICAgIGZvciAoOyAocyA9IGFbZF0pICE9PSB1ICYmIGUubm9kZShzKS5tYXhSYW5rIDwgdC5yYW5rOyApXG4gICAgICAgICAgZCsrO1xuICAgICAgICBzID09PSB1ICYmIChjID0gITEpO1xuICAgICAgfVxuICAgICAgaWYgKCFjKSB7XG4gICAgICAgIGZvciAoOyBkIDwgYS5sZW5ndGggLSAxICYmIGUubm9kZShzID0gYVtkICsgMV0pLm1pblJhbmsgPD0gdC5yYW5rOyApXG4gICAgICAgICAgZCsrO1xuICAgICAgICBzID0gYVtkXTtcbiAgICAgIH1cbiAgICAgIGUuc2V0UGFyZW50KHIsIHMpLCByID0gZS5zdWNjZXNzb3JzKHIpWzBdO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiB6cihlLCBuLCByLCB0KSB7XG4gIHZhciBpID0gW10sIG8gPSBbXSwgYSA9IE1hdGgubWluKG5bcl0ubG93LCBuW3RdLmxvdyksIHUgPSBNYXRoLm1heChuW3JdLmxpbSwgblt0XS5saW0pLCBkLCBzO1xuICBkID0gcjtcbiAgZG9cbiAgICBkID0gZS5wYXJlbnQoZCksIGkucHVzaChkKTtcbiAgd2hpbGUgKGQgJiYgKG5bZF0ubG93ID4gYSB8fCB1ID4gbltkXS5saW0pKTtcbiAgZm9yIChzID0gZCwgZCA9IHQ7IChkID0gZS5wYXJlbnQoZCkpICE9PSBzOyApXG4gICAgby5wdXNoKGQpO1xuICByZXR1cm4geyBwYXRoOiBpLmNvbmNhdChvLnJldmVyc2UoKSksIGxjYTogcyB9O1xufVxuZnVuY3Rpb24gSHIoZSkge1xuICB2YXIgbiA9IHt9LCByID0gMDtcbiAgZnVuY3Rpb24gdChpKSB7XG4gICAgdmFyIG8gPSByO1xuICAgIGYoZS5jaGlsZHJlbihpKSwgdCksIG5baV0gPSB7IGxvdzogbywgbGltOiByKysgfTtcbiAgfVxuICByZXR1cm4gZihlLmNoaWxkcmVuKCksIHQpLCBuO1xufVxuZnVuY3Rpb24gVXIoZSwgbikge1xuICB2YXIgciA9IHt9O1xuICBmdW5jdGlvbiB0KGksIG8pIHtcbiAgICB2YXIgYSA9IDAsIHUgPSAwLCBkID0gaS5sZW5ndGgsIHMgPSBGKG8pO1xuICAgIHJldHVybiBmKG8sIGZ1bmN0aW9uKGMsIGwpIHtcbiAgICAgIHZhciBoID0gSnIoZSwgYyksIHYgPSBoID8gZS5ub2RlKGgpLm9yZGVyIDogZDtcbiAgICAgIChoIHx8IGMgPT09IHMpICYmIChmKG8uc2xpY2UodSwgbCArIDEpLCBmdW5jdGlvbihwKSB7XG4gICAgICAgIGYoZS5wcmVkZWNlc3NvcnMocCksIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICB2YXIgTCA9IGUubm9kZShiKSwgbmUgPSBMLm9yZGVyO1xuICAgICAgICAgIChuZSA8IGEgfHwgdiA8IG5lKSAmJiAhKEwuZHVtbXkgJiYgZS5ub2RlKHApLmR1bW15KSAmJiBHZShyLCBiLCBwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSwgdSA9IGwgKyAxLCBhID0gdik7XG4gICAgfSksIG87XG4gIH1cbiAgcmV0dXJuIEIobiwgdCksIHI7XG59XG5mdW5jdGlvbiBacihlLCBuKSB7XG4gIHZhciByID0ge307XG4gIGZ1bmN0aW9uIHQobywgYSwgdSwgZCwgcykge1xuICAgIHZhciBjO1xuICAgIGYoayhhLCB1KSwgZnVuY3Rpb24obCkge1xuICAgICAgYyA9IG9bbF0sIGUubm9kZShjKS5kdW1teSAmJiBmKGUucHJlZGVjZXNzb3JzKGMpLCBmdW5jdGlvbihoKSB7XG4gICAgICAgIHZhciB2ID0gZS5ub2RlKGgpO1xuICAgICAgICB2LmR1bW15ICYmICh2Lm9yZGVyIDwgZCB8fCB2Lm9yZGVyID4gcykgJiYgR2UociwgaCwgYyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBpKG8sIGEpIHtcbiAgICB2YXIgdSA9IC0xLCBkLCBzID0gMDtcbiAgICByZXR1cm4gZihhLCBmdW5jdGlvbihjLCBsKSB7XG4gICAgICBpZiAoZS5ub2RlKGMpLmR1bW15ID09PSBcImJvcmRlclwiKSB7XG4gICAgICAgIHZhciBoID0gZS5wcmVkZWNlc3NvcnMoYyk7XG4gICAgICAgIGgubGVuZ3RoICYmIChkID0gZS5ub2RlKGhbMF0pLm9yZGVyLCB0KGEsIHMsIGwsIHUsIGQpLCBzID0gbCwgdSA9IGQpO1xuICAgICAgfVxuICAgICAgdChhLCBzLCBhLmxlbmd0aCwgZCwgby5sZW5ndGgpO1xuICAgIH0pLCBhO1xuICB9XG4gIHJldHVybiBCKG4sIGkpLCByO1xufVxuZnVuY3Rpb24gSnIoZSwgbikge1xuICBpZiAoZS5ub2RlKG4pLmR1bW15KVxuICAgIHJldHVybiBVKGUucHJlZGVjZXNzb3JzKG4pLCBmdW5jdGlvbihyKSB7XG4gICAgICByZXR1cm4gZS5ub2RlKHIpLmR1bW15O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gR2UoZSwgbiwgcikge1xuICBpZiAobiA+IHIpIHtcbiAgICB2YXIgdCA9IG47XG4gICAgbiA9IHIsIHIgPSB0O1xuICB9XG4gIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCBuKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgbiwge1xuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgdmFsdWU6IHt9LFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KTtcbiAgdmFyIGkgPSBlW25dO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaSwgciwge1xuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgdmFsdWU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KTtcbn1cbmZ1bmN0aW9uIEtyKGUsIG4sIHIpIHtcbiAgaWYgKG4gPiByKSB7XG4gICAgdmFyIHQgPSBuO1xuICAgIG4gPSByLCByID0gdDtcbiAgfVxuICByZXR1cm4gISFlW25dICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlW25dLCByKTtcbn1cbmZ1bmN0aW9uIFFyKGUsIG4sIHIsIHQpIHtcbiAgdmFyIGkgPSB7fSwgbyA9IHt9LCBhID0ge307XG4gIHJldHVybiBmKG4sIGZ1bmN0aW9uKHUpIHtcbiAgICBmKHUsIGZ1bmN0aW9uKGQsIHMpIHtcbiAgICAgIGlbZF0gPSBkLCBvW2RdID0gZCwgYVtkXSA9IHM7XG4gICAgfSk7XG4gIH0pLCBmKG4sIGZ1bmN0aW9uKHUpIHtcbiAgICB2YXIgZCA9IC0xO1xuICAgIGYodSwgZnVuY3Rpb24ocykge1xuICAgICAgdmFyIGMgPSB0KHMpO1xuICAgICAgaWYgKGMubGVuZ3RoKSB7XG4gICAgICAgIGMgPSBSKGMsIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICByZXR1cm4gYVtiXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAodmFyIGwgPSAoYy5sZW5ndGggLSAxKSAvIDIsIGggPSBNYXRoLmZsb29yKGwpLCB2ID0gTWF0aC5jZWlsKGwpOyBoIDw9IHY7ICsraCkge1xuICAgICAgICAgIHZhciBwID0gY1toXTtcbiAgICAgICAgICBvW3NdID09PSBzICYmIGQgPCBhW3BdICYmICFLcihyLCBzLCBwKSAmJiAob1twXSA9IHMsIG9bc10gPSBpW3NdID0gaVtwXSwgZCA9IGFbcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pLCB7IHJvb3Q6IGksIGFsaWduOiBvIH07XG59XG5mdW5jdGlvbiBldChlLCBuLCByLCB0LCBpKSB7XG4gIHZhciBvID0ge30sIGEgPSBudChlLCBuLCByLCBpKSwgdSA9IGkgPyBcImJvcmRlckxlZnRcIiA6IFwiYm9yZGVyUmlnaHRcIjtcbiAgZnVuY3Rpb24gZChsLCBoKSB7XG4gICAgZm9yICh2YXIgdiA9IGEubm9kZXMoKSwgcCA9IHYucG9wKCksIGIgPSB7fTsgcDsgKVxuICAgICAgYltwXSA/IGwocCkgOiAoYltwXSA9ICEwLCB2LnB1c2gocCksIHYgPSB2LmNvbmNhdChoKHApKSksIHAgPSB2LnBvcCgpO1xuICB9XG4gIGZ1bmN0aW9uIHMobCkge1xuICAgIG9bbF0gPSBhLmluRWRnZXMobCkucmVkdWNlKGZ1bmN0aW9uKGgsIHYpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChoLCBvW3Yudl0gKyBhLmVkZ2UodikpO1xuICAgIH0sIDApO1xuICB9XG4gIGZ1bmN0aW9uIGMobCkge1xuICAgIHZhciBoID0gYS5vdXRFZGdlcyhsKS5yZWR1Y2UoZnVuY3Rpb24ocCwgYikge1xuICAgICAgcmV0dXJuIE1hdGgubWluKHAsIG9bYi53XSAtIGEuZWRnZShiKSk7XG4gICAgfSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSwgdiA9IGUubm9kZShsKTtcbiAgICBoICE9PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgJiYgdi5ib3JkZXJUeXBlICE9PSB1ICYmIChvW2xdID0gTWF0aC5tYXgob1tsXSwgaCkpO1xuICB9XG4gIHJldHVybiBkKHMsIGEucHJlZGVjZXNzb3JzLmJpbmQoYSkpLCBkKGMsIGEuc3VjY2Vzc29ycy5iaW5kKGEpKSwgZih0LCBmdW5jdGlvbihsKSB7XG4gICAgb1tsXSA9IG9bcltsXV07XG4gIH0pLCBvO1xufVxuZnVuY3Rpb24gbnQoZSwgbiwgciwgdCkge1xuICB2YXIgaSA9IG5ldyBnKCksIG8gPSBlLmdyYXBoKCksIGEgPSBvdChvLm5vZGVzZXAsIG8uZWRnZXNlcCwgdCk7XG4gIHJldHVybiBmKG4sIGZ1bmN0aW9uKHUpIHtcbiAgICB2YXIgZDtcbiAgICBmKHUsIGZ1bmN0aW9uKHMpIHtcbiAgICAgIHZhciBjID0gcltzXTtcbiAgICAgIGlmIChpLnNldE5vZGUoYyksIGQpIHtcbiAgICAgICAgdmFyIGwgPSByW2RdLCBoID0gaS5lZGdlKGwsIGMpO1xuICAgICAgICBpLnNldEVkZ2UobCwgYywgTWF0aC5tYXgoYShlLCBzLCBkKSwgaCB8fCAwKSk7XG4gICAgICB9XG4gICAgICBkID0gcztcbiAgICB9KTtcbiAgfSksIGk7XG59XG5mdW5jdGlvbiBydChlLCBuKSB7XG4gIHJldHVybiBaKEUobiksIGZ1bmN0aW9uKHIpIHtcbiAgICB2YXIgdCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSwgaSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICByZXR1cm4gTG4ociwgZnVuY3Rpb24obywgYSkge1xuICAgICAgdmFyIHUgPSB1dChlLCBhKSAvIDI7XG4gICAgICB0ID0gTWF0aC5tYXgobyArIHUsIHQpLCBpID0gTWF0aC5taW4obyAtIHUsIGkpO1xuICAgIH0pLCB0IC0gaTtcbiAgfSk7XG59XG5mdW5jdGlvbiB0dChlLCBuKSB7XG4gIHZhciByID0gRShuKSwgdCA9IFAociksIGkgPSB5KHIpO1xuICBmKFtcInVcIiwgXCJkXCJdLCBmdW5jdGlvbihvKSB7XG4gICAgZihbXCJsXCIsIFwiclwiXSwgZnVuY3Rpb24oYSkge1xuICAgICAgdmFyIHUgPSBvICsgYSwgZCA9IGVbdV0sIHM7XG4gICAgICBpZiAoZCAhPT0gbikge1xuICAgICAgICB2YXIgYyA9IEUoZCk7XG4gICAgICAgIHMgPSBhID09PSBcImxcIiA/IHQgLSBQKGMpIDogaSAtIHkoYyksIHMgJiYgKGVbdV0gPSBqKGQsIGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICByZXR1cm4gbCArIHM7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBpdChlLCBuKSB7XG4gIHJldHVybiBqKGUudWwsIGZ1bmN0aW9uKHIsIHQpIHtcbiAgICBpZiAobilcbiAgICAgIHJldHVybiBlW24udG9Mb3dlckNhc2UoKV1bdF07XG4gICAgdmFyIGkgPSBSKHcoZSwgdCkpO1xuICAgIHJldHVybiAoaVsxXSArIGlbMl0pIC8gMjtcbiAgfSk7XG59XG5mdW5jdGlvbiBhdChlKSB7XG4gIHZhciBuID0gRyhlKSwgciA9IHooVXIoZSwgbiksIFpyKGUsIG4pKSwgdCA9IHt9LCBpO1xuICBmKFtcInVcIiwgXCJkXCJdLCBmdW5jdGlvbihhKSB7XG4gICAgaSA9IGEgPT09IFwidVwiID8gbiA6IEUobikucmV2ZXJzZSgpLCBmKFtcImxcIiwgXCJyXCJdLCBmdW5jdGlvbih1KSB7XG4gICAgICB1ID09PSBcInJcIiAmJiAoaSA9IHcoaSwgZnVuY3Rpb24obCkge1xuICAgICAgICByZXR1cm4gRShsKS5yZXZlcnNlKCk7XG4gICAgICB9KSk7XG4gICAgICB2YXIgZCA9IChhID09PSBcInVcIiA/IGUucHJlZGVjZXNzb3JzIDogZS5zdWNjZXNzb3JzKS5iaW5kKGUpLCBzID0gUXIoZSwgaSwgciwgZCksIGMgPSBldChlLCBpLCBzLnJvb3QsIHMuYWxpZ24sIHUgPT09IFwiclwiKTtcbiAgICAgIHUgPT09IFwiclwiICYmIChjID0gaihjLCBmdW5jdGlvbihsKSB7XG4gICAgICAgIHJldHVybiAtbDtcbiAgICAgIH0pKSwgdFthICsgdV0gPSBjO1xuICAgIH0pO1xuICB9KTtcbiAgdmFyIG8gPSBydChlLCB0KTtcbiAgcmV0dXJuIHR0KHQsIG8pLCBpdCh0LCBlLmdyYXBoKCkuYWxpZ24pO1xufVxuZnVuY3Rpb24gb3QoZSwgbiwgcikge1xuICByZXR1cm4gZnVuY3Rpb24odCwgaSwgbykge1xuICAgIHZhciBhID0gdC5ub2RlKGkpLCB1ID0gdC5ub2RlKG8pLCBkID0gMCwgcztcbiAgICBpZiAoZCArPSBhLndpZHRoIC8gMiwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIFwibGFiZWxwb3NcIikpXG4gICAgICBzd2l0Y2ggKGEubGFiZWxwb3MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwibFwiOlxuICAgICAgICAgIHMgPSAtYS53aWR0aCAvIDI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyXCI6XG4gICAgICAgICAgcyA9IGEud2lkdGggLyAyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGlmIChzICYmIChkICs9IHIgPyBzIDogLXMpLCBzID0gMCwgZCArPSAoYS5kdW1teSA/IG4gOiBlKSAvIDIsIGQgKz0gKHUuZHVtbXkgPyBuIDogZSkgLyAyLCBkICs9IHUud2lkdGggLyAyLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodSwgXCJsYWJlbHBvc1wiKSlcbiAgICAgIHN3aXRjaCAodS5sYWJlbHBvcy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJsXCI6XG4gICAgICAgICAgcyA9IHUud2lkdGggLyAyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiclwiOlxuICAgICAgICAgIHMgPSAtdS53aWR0aCAvIDI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgcmV0dXJuIHMgJiYgKGQgKz0gciA/IHMgOiAtcyksIHMgPSAwLCBkO1xuICB9O1xufVxuZnVuY3Rpb24gdXQoZSwgbikge1xuICByZXR1cm4gZS5ub2RlKG4pLndpZHRoO1xufVxuZnVuY3Rpb24gZHQoZSkge1xuICBlID0gTGUoZSksIHN0KGUpLCBQbihhdChlKSwgZnVuY3Rpb24obiwgcikge1xuICAgIGUubm9kZShyKS54ID0gbjtcbiAgfSk7XG59XG5mdW5jdGlvbiBzdChlKSB7XG4gIHZhciBuID0gRyhlKSwgciA9IGUuZ3JhcGgoKS5yYW5rc2VwLCB0ID0gMDtcbiAgZihuLCBmdW5jdGlvbihpKSB7XG4gICAgdmFyIG8gPSB5KFxuICAgICAgdyhpLCBmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiBlLm5vZGUoYSkuaGVpZ2h0O1xuICAgICAgfSlcbiAgICApO1xuICAgIGYoaSwgZnVuY3Rpb24oYSkge1xuICAgICAgZS5ub2RlKGEpLnkgPSB0ICsgbyAvIDI7XG4gICAgfSksIHQgKz0gbyArIHI7XG4gIH0pO1xufVxuZnVuY3Rpb24gQnQoZSwgbikge1xuICB2YXIgciA9IGFyO1xuICByKFwibGF5b3V0XCIsICgpID0+IHtcbiAgICB2YXIgdCA9IHIoXCIgIGJ1aWxkTGF5b3V0R3JhcGhcIiwgKCkgPT4geXQoZSkpO1xuICAgIHIoXCIgIHJ1bkxheW91dFwiLCAoKSA9PiBmdCh0LCByKSksIHIoXCIgIHVwZGF0ZUlucHV0R3JhcGhcIiwgKCkgPT4gY3QoZSwgdCkpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZ0KGUsIG4pIHtcbiAgbihcIiAgICBtYWtlU3BhY2VGb3JFZGdlTGFiZWxzXCIsICgpID0+IHh0KGUpKSwgbihcIiAgICByZW1vdmVTZWxmRWRnZXNcIiwgKCkgPT4gSXQoZSkpLCBuKFwiICAgIGFjeWNsaWNcIiwgKCkgPT4gS24oZSkpLCBuKFwiICAgIG5lc3RpbmdHcmFwaC5ydW5cIiwgKCkgPT4gTHIoZSkpLCBuKFwiICAgIHJhbmtcIiwgKCkgPT4ga3IoTGUoZSkpKSwgbihcIiAgICBpbmplY3RFZGdlTGFiZWxQcm94aWVzXCIsICgpID0+IEV0KGUpKSwgbihcIiAgICByZW1vdmVFbXB0eVJhbmtzXCIsICgpID0+IHRyKGUpKSwgbihcIiAgICBuZXN0aW5nR3JhcGguY2xlYW51cFwiLCAoKSA9PiBDcihlKSksIG4oXCIgICAgbm9ybWFsaXplUmFua3NcIiwgKCkgPT4gcnIoZSkpLCBuKFwiICAgIGFzc2lnblJhbmtNaW5NYXhcIiwgKCkgPT4ga3QoZSkpLCBuKFwiICAgIHJlbW92ZUVkZ2VMYWJlbFByb3hpZXNcIiwgKCkgPT4gT3QoZSkpLCBuKFwiICAgIG5vcm1hbGl6ZS5ydW5cIiwgKCkgPT4gY3IoZSkpLCBuKFwiICAgIHBhcmVudER1bW15Q2hhaW5zXCIsICgpID0+IFhyKGUpKSwgbihcIiAgICBhZGRCb3JkZXJTZWdtZW50c1wiLCAoKSA9PiBvcihlKSksIG4oXCIgICAgb3JkZXJcIiwgKCkgPT4gcXIoZSkpLCBuKFwiICAgIGluc2VydFNlbGZFZGdlc1wiLCAoKSA9PiBSdChlKSksIG4oXCIgICAgYWRqdXN0Q29vcmRpbmF0ZVN5c3RlbVwiLCAoKSA9PiB1cihlKSksIG4oXCIgICAgcG9zaXRpb25cIiwgKCkgPT4gZHQoZSkpLCBuKFwiICAgIHBvc2l0aW9uU2VsZkVkZ2VzXCIsICgpID0+IFR0KGUpKSwgbihcIiAgICByZW1vdmVCb3JkZXJOb2Rlc1wiLCAoKSA9PiBDdChlKSksIG4oXCIgICAgbm9ybWFsaXplLnVuZG9cIiwgKCkgPT4gaHIoZSkpLCBuKFwiICAgIGZpeHVwRWRnZUxhYmVsQ29vcmRzXCIsICgpID0+IFB0KGUpKSwgbihcIiAgICB1bmRvQ29vcmRpbmF0ZVN5c3RlbVwiLCAoKSA9PiBkcihlKSksIG4oXCIgICAgdHJhbnNsYXRlR3JhcGhcIiwgKCkgPT4gTnQoZSkpLCBuKFwiICAgIGFzc2lnbk5vZGVJbnRlcnNlY3RzXCIsICgpID0+IEx0KGUpKSwgbihcIiAgICByZXZlcnNlUG9pbnRzXCIsICgpID0+IF90KGUpKSwgbihcIiAgICBhY3ljbGljLnVuZG9cIiwgKCkgPT4gZXIoZSkpO1xufVxuZnVuY3Rpb24gY3QoZSwgbikge1xuICBmKGUubm9kZXMoKSwgZnVuY3Rpb24ocikge1xuICAgIHZhciB0ID0gZS5ub2RlKHIpLCBpID0gbi5ub2RlKHIpO1xuICAgIHQgJiYgKHQueCA9IGkueCwgdC55ID0gaS55LCBuLmNoaWxkcmVuKHIpLmxlbmd0aCAmJiAodC53aWR0aCA9IGkud2lkdGgsIHQuaGVpZ2h0ID0gaS5oZWlnaHQpKTtcbiAgfSksIGYoZS5lZGdlcygpLCBmdW5jdGlvbihyKSB7XG4gICAgdmFyIHQgPSBlLmVkZ2UociksIGkgPSBuLmVkZ2Uocik7XG4gICAgdC5wb2ludHMgPSBpLnBvaW50cywgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGksIFwieFwiKSAmJiAodC54ID0gaS54LCB0LnkgPSBpLnkpO1xuICB9KSwgZS5ncmFwaCgpLndpZHRoID0gbi5ncmFwaCgpLndpZHRoLCBlLmdyYXBoKCkuaGVpZ2h0ID0gbi5ncmFwaCgpLmhlaWdodDtcbn1cbnZhciBsdCA9IFtcIm5vZGVzZXBcIiwgXCJlZGdlc2VwXCIsIFwicmFua3NlcFwiLCBcIm1hcmdpbnhcIiwgXCJtYXJnaW55XCJdLCBodCA9IHsgcmFua3NlcDogNTAsIGVkZ2VzZXA6IDIwLCBub2Rlc2VwOiA1MCwgcmFua2RpcjogXCJ0YlwiIH0sIHZ0ID0gW1wiYWN5Y2xpY2VyXCIsIFwicmFua2VyXCIsIFwicmFua2RpclwiLCBcImFsaWduXCJdLCBwdCA9IFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdLCB3dCA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LCBidCA9IFtcIm1pbmxlblwiLCBcIndlaWdodFwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwibGFiZWxvZmZzZXRcIl0sIG10ID0ge1xuICBtaW5sZW46IDEsXG4gIHdlaWdodDogMSxcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMCxcbiAgbGFiZWxvZmZzZXQ6IDEwLFxuICBsYWJlbHBvczogXCJyXCJcbn0sIGd0ID0gW1wibGFiZWxwb3NcIl07XG5mdW5jdGlvbiB5dChlKSB7XG4gIHZhciBuID0gbmV3IGcoeyBtdWx0aWdyYXBoOiAhMCwgY29tcG91bmQ6ICEwIH0pLCByID0gVyhlLmdyYXBoKCkpO1xuICByZXR1cm4gbi5zZXRHcmFwaChcbiAgICB6KHt9LCBodCwgcShyLCBsdCksIEEociwgdnQpKVxuICApLCBmKGUubm9kZXMoKSwgZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gVyhlLm5vZGUodCkpO1xuICAgIG4uc2V0Tm9kZSh0LCBFbihxKGksIHB0KSwgd3QpKSwgbi5zZXRQYXJlbnQodCwgZS5wYXJlbnQodCkpO1xuICB9KSwgZihlLmVkZ2VzKCksIGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IFcoZS5lZGdlKHQpKTtcbiAgICBuLnNldEVkZ2UoXG4gICAgICB0LFxuICAgICAgeih7fSwgbXQsIHEoaSwgYnQpLCBBKGksIGd0KSlcbiAgICApO1xuICB9KSwgbjtcbn1cbmZ1bmN0aW9uIHh0KGUpIHtcbiAgdmFyIG4gPSBlLmdyYXBoKCk7XG4gIG4ucmFua3NlcCAvPSAyLCBmKGUuZWRnZXMoKSwgZnVuY3Rpb24ocikge1xuICAgIHZhciB0ID0gZS5lZGdlKHIpO1xuICAgIHQubWlubGVuICo9IDIsIHQubGFiZWxwb3MudG9Mb3dlckNhc2UoKSAhPT0gXCJjXCIgJiYgKG4ucmFua2RpciA9PT0gXCJUQlwiIHx8IG4ucmFua2RpciA9PT0gXCJCVFwiID8gdC53aWR0aCArPSB0LmxhYmVsb2Zmc2V0IDogdC5oZWlnaHQgKz0gdC5sYWJlbG9mZnNldCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gRXQoZSkge1xuICBmKGUuZWRnZXMoKSwgZnVuY3Rpb24obikge1xuICAgIHZhciByID0gZS5lZGdlKG4pO1xuICAgIGlmIChyLndpZHRoICYmIHIuaGVpZ2h0KSB7XG4gICAgICB2YXIgdCA9IGUubm9kZShuLnYpLCBpID0gZS5ub2RlKG4udyksIG8gPSB7IHJhbms6IChpLnJhbmsgLSB0LnJhbmspIC8gMiArIHQucmFuaywgZTogbiB9O1xuICAgICAgTihlLCBcImVkZ2UtcHJveHlcIiwgbywgXCJfZXBcIik7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGt0KGUpIHtcbiAgdmFyIG4gPSAwO1xuICBmKGUubm9kZXMoKSwgZnVuY3Rpb24ocikge1xuICAgIHZhciB0ID0gZS5ub2RlKHIpO1xuICAgIHQuYm9yZGVyVG9wICYmICh0Lm1pblJhbmsgPSBlLm5vZGUodC5ib3JkZXJUb3ApLnJhbmssIHQubWF4UmFuayA9IGUubm9kZSh0LmJvcmRlckJvdHRvbSkucmFuaywgbiA9IHkobiwgdC5tYXhSYW5rKSk7XG4gIH0pLCBlLmdyYXBoKCkubWF4UmFuayA9IG47XG59XG5mdW5jdGlvbiBPdChlKSB7XG4gIGYoZS5ub2RlcygpLCBmdW5jdGlvbihuKSB7XG4gICAgdmFyIHIgPSBlLm5vZGUobik7XG4gICAgci5kdW1teSA9PT0gXCJlZGdlLXByb3h5XCIgJiYgKGUuZWRnZShyLmUpLmxhYmVsUmFuayA9IHIucmFuaywgZS5yZW1vdmVOb2RlKG4pKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBOdChlKSB7XG4gIHZhciBuID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCByID0gMCwgdCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgaSA9IDAsIG8gPSBlLmdyYXBoKCksIGEgPSBvLm1hcmdpbnggfHwgMCwgdSA9IG8ubWFyZ2lueSB8fCAwO1xuICBmdW5jdGlvbiBkKHMpIHtcbiAgICB2YXIgYyA9IHMueCwgbCA9IHMueSwgaCA9IHMud2lkdGgsIHYgPSBzLmhlaWdodDtcbiAgICBuID0gTWF0aC5taW4obiwgYyAtIGggLyAyKSwgciA9IE1hdGgubWF4KHIsIGMgKyBoIC8gMiksIHQgPSBNYXRoLm1pbih0LCBsIC0gdiAvIDIpLCBpID0gTWF0aC5tYXgoaSwgbCArIHYgLyAyKTtcbiAgfVxuICBmKGUubm9kZXMoKSwgZnVuY3Rpb24ocykge1xuICAgIGQoZS5ub2RlKHMpKTtcbiAgfSksIGYoZS5lZGdlcygpLCBmdW5jdGlvbihzKSB7XG4gICAgdmFyIGMgPSBlLmVkZ2Uocyk7XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsIFwieFwiKSAmJiBkKGMpO1xuICB9KSwgbiAtPSBhLCB0IC09IHUsIGYoZS5ub2RlcygpLCBmdW5jdGlvbihzKSB7XG4gICAgdmFyIGMgPSBlLm5vZGUocyk7XG4gICAgYy54IC09IG4sIGMueSAtPSB0O1xuICB9KSwgZihlLmVkZ2VzKCksIGZ1bmN0aW9uKHMpIHtcbiAgICB2YXIgYyA9IGUuZWRnZShzKTtcbiAgICBmKGMucG9pbnRzLCBmdW5jdGlvbihsKSB7XG4gICAgICBsLnggLT0gbiwgbC55IC09IHQ7XG4gICAgfSksIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLCBcInhcIikgJiYgKGMueCAtPSBuKSwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsIFwieVwiKSAmJiAoYy55IC09IHQpO1xuICB9KSwgby53aWR0aCA9IHIgLSBuICsgYSwgby5oZWlnaHQgPSBpIC0gdCArIHU7XG59XG5mdW5jdGlvbiBMdChlKSB7XG4gIGYoZS5lZGdlcygpLCBmdW5jdGlvbihuKSB7XG4gICAgdmFyIHIgPSBlLmVkZ2UobiksIHQgPSBlLm5vZGUobi52KSwgaSA9IGUubm9kZShuLncpLCBvLCBhO1xuICAgIHIucG9pbnRzID8gKG8gPSByLnBvaW50c1swXSwgYSA9IHIucG9pbnRzW3IucG9pbnRzLmxlbmd0aCAtIDFdKSA6IChyLnBvaW50cyA9IFtdLCBvID0gaSwgYSA9IHQpLCByLnBvaW50cy51bnNoaWZ0KGFlKHQsIG8pKSwgci5wb2ludHMucHVzaChhZShpLCBhKSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gUHQoZSkge1xuICBmKGUuZWRnZXMoKSwgZnVuY3Rpb24obikge1xuICAgIHZhciByID0gZS5lZGdlKG4pO1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwociwgXCJ4XCIpKVxuICAgICAgc3dpdGNoICgoci5sYWJlbHBvcyA9PT0gXCJsXCIgfHwgci5sYWJlbHBvcyA9PT0gXCJyXCIpICYmIChyLndpZHRoIC09IHIubGFiZWxvZmZzZXQpLCByLmxhYmVscG9zKSB7XG4gICAgICAgIGNhc2UgXCJsXCI6XG4gICAgICAgICAgci54IC09IHIud2lkdGggLyAyICsgci5sYWJlbG9mZnNldDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJcIjpcbiAgICAgICAgICByLnggKz0gci53aWR0aCAvIDIgKyByLmxhYmVsb2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIF90KGUpIHtcbiAgZihlLmVkZ2VzKCksIGZ1bmN0aW9uKG4pIHtcbiAgICB2YXIgciA9IGUuZWRnZShuKTtcbiAgICByLnJldmVyc2VkICYmIHIucG9pbnRzLnJldmVyc2UoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBDdChlKSB7XG4gIGYoZS5ub2RlcygpLCBmdW5jdGlvbihuKSB7XG4gICAgaWYgKGUuY2hpbGRyZW4obikubGVuZ3RoKSB7XG4gICAgICB2YXIgciA9IGUubm9kZShuKSwgdCA9IGUubm9kZShyLmJvcmRlclRvcCksIGkgPSBlLm5vZGUoci5ib3JkZXJCb3R0b20pLCBvID0gZS5ub2RlKEYoci5ib3JkZXJMZWZ0KSksIGEgPSBlLm5vZGUoRihyLmJvcmRlclJpZ2h0KSk7XG4gICAgICByLndpZHRoID0gTWF0aC5hYnMoYS54IC0gby54KSwgci5oZWlnaHQgPSBNYXRoLmFicyhpLnkgLSB0LnkpLCByLnggPSBvLnggKyByLndpZHRoIC8gMiwgci55ID0gdC55ICsgci5oZWlnaHQgLyAyO1xuICAgIH1cbiAgfSksIGYoZS5ub2RlcygpLCBmdW5jdGlvbihuKSB7XG4gICAgZS5ub2RlKG4pLmR1bW15ID09PSBcImJvcmRlclwiICYmIGUucmVtb3ZlTm9kZShuKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBJdChlKSB7XG4gIGYoZS5lZGdlcygpLCBmdW5jdGlvbihuKSB7XG4gICAgaWYgKG4udiA9PT0gbi53KSB7XG4gICAgICB2YXIgciA9IGUubm9kZShuLnYpO1xuICAgICAgci5zZWxmRWRnZXMgfHwgKHIuc2VsZkVkZ2VzID0gW10pLCByLnNlbGZFZGdlcy5wdXNoKHsgZTogbiwgbGFiZWw6IGUuZWRnZShuKSB9KSwgZS5yZW1vdmVFZGdlKG4pO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBSdChlKSB7XG4gIHZhciBuID0gRyhlKTtcbiAgZihuLCBmdW5jdGlvbihyKSB7XG4gICAgdmFyIHQgPSAwO1xuICAgIGYociwgZnVuY3Rpb24oaSwgbykge1xuICAgICAgdmFyIGEgPSBlLm5vZGUoaSk7XG4gICAgICBhLm9yZGVyID0gbyArIHQsIGYoYS5zZWxmRWRnZXMsIGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgTihcbiAgICAgICAgICBlLFxuICAgICAgICAgIFwic2VsZmVkZ2VcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogdS5sYWJlbC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdS5sYWJlbC5oZWlnaHQsXG4gICAgICAgICAgICByYW5rOiBhLnJhbmssXG4gICAgICAgICAgICBvcmRlcjogbyArICsrdCxcbiAgICAgICAgICAgIGU6IHUuZSxcbiAgICAgICAgICAgIGxhYmVsOiB1LmxhYmVsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIl9zZVwiXG4gICAgICAgICk7XG4gICAgICB9KSwgZGVsZXRlIGEuc2VsZkVkZ2VzO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIFR0KGUpIHtcbiAgZihlLm5vZGVzKCksIGZ1bmN0aW9uKG4pIHtcbiAgICB2YXIgciA9IGUubm9kZShuKTtcbiAgICBpZiAoci5kdW1teSA9PT0gXCJzZWxmZWRnZVwiKSB7XG4gICAgICB2YXIgdCA9IGUubm9kZShyLmUudiksIGkgPSB0LnggKyB0LndpZHRoIC8gMiwgbyA9IHQueSwgYSA9IHIueCAtIGksIHUgPSB0LmhlaWdodCAvIDI7XG4gICAgICBlLnNldEVkZ2Uoci5lLCByLmxhYmVsKSwgZS5yZW1vdmVOb2RlKG4pLCByLmxhYmVsLnBvaW50cyA9IFtcbiAgICAgICAgeyB4OiBpICsgMiAqIGEgLyAzLCB5OiBvIC0gdSB9LFxuICAgICAgICB7IHg6IGkgKyA1ICogYSAvIDYsIHk6IG8gLSB1IH0sXG4gICAgICAgIHsgeDogaSArIGEsIHk6IG8gfSxcbiAgICAgICAgeyB4OiBpICsgNSAqIGEgLyA2LCB5OiBvICsgdSB9LFxuICAgICAgICB7IHg6IGkgKyAyICogYSAvIDMsIHk6IG8gKyB1IH1cbiAgICAgIF0sIHIubGFiZWwueCA9IHIueCwgci5sYWJlbC55ID0gci55O1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBxKGUsIG4pIHtcbiAgcmV0dXJuIGooQShlLCBuKSwgTnVtYmVyKTtcbn1cbmZ1bmN0aW9uIFcoZSkge1xuICB2YXIgbiA9IHt9O1xuICByZXR1cm4gZihlLCBmdW5jdGlvbihyLCB0KSB7XG4gICAgblt0LnRvTG93ZXJDYXNlKCldID0gcjtcbiAgfSksIG47XG59XG5leHBvcnQge1xuICBCdCBhcyBsXG59O1xuIl0sIm5hbWVzIjpbIlgiLCJNIiwiWmUiLCJKZSIsIk8iLCJWZSIsImdlIiwiUyIsInllIiwiS2UiLCJRZSIsIkMiLCJZZSIsIiRlIiwiZW4iLCJ2ZSIsInBlIiwiRGUiLCJubiIsIm1lIiwieGUiLCJIZSIsIndlIiwicWUiLCJybiIsIkVlIiwiYmUiLCJWIiwia2UiLCJ0biIsIlVlIiwiV2UiLCJYZSIsInplIiwiYW4iLCJ3IiwiZiIsImciLCJtIiwiUCIsInYiLCJJIiwiTCIsIkIiLCJ6Il0sIm1hcHBpbmdzIjoiOzs7O0FBSUEsSUFBSSxLQUFLO0FBQ1QsU0FBUyxHQUFHLEdBQUc7QUFDYixXQUFTLElBQUksRUFBRSxRQUFRLE9BQU8sR0FBRyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0M7QUFDRixTQUFPO0FBQ1Q7QUFDQSxJQUFJLEtBQUs7QUFDVCxTQUFTLEdBQUcsR0FBRztBQUNiLFNBQU8sS0FBSyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxJQUFJLEVBQUU7QUFDbEQ7QUFDQSxJQUFJLEtBQUssS0FBSyxLQUFLLHNCQUFzQixLQUFLLGNBQWMsS0FBSyxlQUFlLEtBQUs7QUFDckYsU0FBUyxHQUFHLEdBQUc7QUFDYixNQUFJLE9BQU8sS0FBSztBQUNkLFdBQU87QUFDVCxNQUFJQSxJQUFFLENBQUM7QUFDTCxXQUFPO0FBQ1QsTUFBSUMsS0FBRSxDQUFDLEdBQUc7QUFDUixRQUFJLElBQUksT0FBTyxFQUFFLFdBQVcsYUFBYSxFQUFFLFFBQU8sSUFBSztBQUN2RCxRQUFJQSxLQUFFLENBQUMsSUFBSSxJQUFJLEtBQUs7QUFBQSxFQUN0QjtBQUNBLE1BQUksT0FBTyxLQUFLO0FBQ2QsV0FBTyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ3hCLE1BQUksR0FBRyxDQUFD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
