import { aU as Iw, aV as uT, aS as Da, ay as oa, aP as zd, aW as _o, aX as Ge, aq as yr$1, aD as Qi, aw as ei, aY as ti, aZ as Fd, aR as Id, a_ as sa, as as rr$1, at as rl, a$ as il, aE as na, aL as Ma, b0 as Pc, b1 as Ki, aT as E_ } from "./SynchronicGraphPage-D17073Na.js";
var Pn = "[object Symbol]";
function x(n) {
  return typeof n == "symbol" || Qi(n) && ti(n) == Pn;
}
function yn(n, r) {
  for (var e = -1, i = n == null ? 0 : n.length, f = Array(i); ++e < i; )
    f[e] = r(n[e], e, n);
  return f;
}
var B = na ? na.prototype : void 0, K = B ? B.toString : void 0;
function k(n) {
  if (typeof n == "string")
    return n;
  if (oa(n))
    return yn(n, k) + "";
  if (x(n))
    return K ? K.call(n) : "";
  var r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function En() {
}
function bn(n, r) {
  for (var e = -1, i = n == null ? 0 : n.length; ++e < i && r(n[e], e, n) !== false; )
    ;
  return n;
}
function cn(n, r, e, i) {
  for (var f = n.length, t = e + -1; ++t < f; )
    if (r(n[t], t, n))
      return t;
  return -1;
}
function Tn(n) {
  return n !== n;
}
function Rn(n, r, e) {
  for (var i = e - 1, f = n.length; ++i < f; )
    if (n[i] === r)
      return i;
  return -1;
}
function In(n, r, e) {
  return r === r ? Rn(n, r, e) : cn(n, Tn, e);
}
function Sn(n, r) {
  var e = n == null ? 0 : n.length;
  return !!e && In(n, r, 0) > -1;
}
function M(n) {
  return Da(n) ? Iw(n) : uT(n);
}
var Ln = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xn = /^\w*$/;
function $(n, r) {
  if (oa(n))
    return false;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || x(n) ? true : xn.test(n) || !Ln.test(n) || r != null && n in Object(r);
}
var Mn = 500;
function $n(n) {
  var r = Ki(n, function(i) {
    return e.size === Mn && e.clear(), i;
  }), e = r.cache;
  return r;
}
var Cn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dn = /\\(\\)?/g, Fn = $n(function(n) {
  var r = [];
  return n.charCodeAt(0) === 46 && r.push(""), n.replace(Cn, function(e, i, f, t) {
    r.push(f ? t.replace(Dn, "$1") : i || e);
  }), r;
});
function Gn(n) {
  return n == null ? "" : k(n);
}
function j(n, r) {
  return oa(n) ? n : $(n, r) ? [n] : Fn(Gn(n));
}
function R(n) {
  if (typeof n == "string" || x(n))
    return n;
  var r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function nn(n, r) {
  r = j(r, n);
  for (var e = 0, i = r.length; n != null && e < i; )
    n = n[R(r[e++])];
  return e && e == i ? n : void 0;
}
function mn(n, r, e) {
  var i = n == null ? void 0 : nn(n, r);
  return i === void 0 ? e : i;
}
function rn(n, r) {
  for (var e = -1, i = r.length, f = n.length; ++e < i; )
    n[f + e] = r[e];
  return n;
}
var H = na ? na.isConcatSpreadable : void 0;
function Nn(n) {
  return oa(n) || sa(n) || !!(H && n && n[H]);
}
function Hr(n, r, e, i, f) {
  var t = -1, s = n.length;
  for (e || (e = Nn), f || (f = []); ++t < s; ) {
    var u = n[t];
    e(u) ? rn(f, u) : i || (f[f.length] = u);
  }
  return f;
}
function Un(n, r, e, i) {
  var f = -1, t = n == null ? 0 : n.length;
  for (i && t && (e = n[++f]); ++f < t; )
    e = r(e, n[f], f, n);
  return e;
}
function en(n, r) {
  for (var e = -1, i = n == null ? 0 : n.length, f = 0, t = []; ++e < i; ) {
    var s = n[e];
    r(s, e, n) && (t[f++] = s);
  }
  return t;
}
function Bn() {
  return [];
}
var Kn = Object.prototype, Hn = Kn.propertyIsEnumerable, Z = Object.getOwnPropertySymbols, Zn = Z ? function(n) {
  return n == null ? [] : (n = Object(n), en(Z(n), function(r) {
    return Hn.call(n, r);
  }));
} : Bn;
function qn(n, r, e) {
  var i = r(n);
  return oa(n) ? i : rn(i, e(n));
}
function q(n) {
  return qn(n, M, Zn);
}
var Yn = "__lodash_hash_undefined__";
function Xn(n) {
  return this.__data__.set(n, Yn), this;
}
function Jn(n) {
  return this.__data__.has(n);
}
function y(n) {
  var r = -1, e = n == null ? 0 : n.length;
  for (this.__data__ = new Ge(); ++r < e; )
    this.add(n[r]);
}
y.prototype.add = y.prototype.push = Xn;
y.prototype.has = Jn;
function Qn(n, r) {
  for (var e = -1, i = n == null ? 0 : n.length; ++e < i; )
    if (r(n[e], e, n))
      return true;
  return false;
}
function tn(n, r) {
  return n.has(r);
}
var Wn = 1, zn = 2;
function fn(n, r, e, i, f, t) {
  var s = e & Wn, u = n.length, a = r.length;
  if (u != a && !(s && a > u))
    return false;
  var h = t.get(n), g = t.get(r);
  if (h && g)
    return h == r && g == n;
  var l = -1, d = true, o = e & zn ? new y() : void 0;
  for (t.set(n, r), t.set(r, n); ++l < u; ) {
    var p = n[l], _ = r[l];
    if (i)
      var w = s ? i(_, p, l, r, n, t) : i(p, _, l, n, r, t);
    if (w !== void 0) {
      if (w)
        continue;
      d = false;
      break;
    }
    if (o) {
      if (!Qn(r, function(O, v) {
        if (!tn(o, v) && (p === O || f(p, O, e, i, t)))
          return o.push(v);
      })) {
        d = false;
        break;
      }
    } else if (!(p === _ || f(p, _, e, i, t))) {
      d = false;
      break;
    }
  }
  return t.delete(n), t.delete(r), d;
}
function Vn(n) {
  var r = -1, e = Array(n.size);
  return n.forEach(function(i, f) {
    e[++r] = [f, i];
  }), e;
}
function C(n) {
  var r = -1, e = Array(n.size);
  return n.forEach(function(i) {
    e[++r] = i;
  }), e;
}
var kn = 1, jn = 2, nr = "[object Boolean]", rr = "[object Date]", er = "[object Error]", ir = "[object Map]", tr = "[object Number]", fr = "[object RegExp]", sr = "[object Set]", ur = "[object String]", ar = "[object Symbol]", lr = "[object ArrayBuffer]", gr = "[object DataView]", Y = na ? na.prototype : void 0, S = Y ? Y.valueOf : void 0;
function dr(n, r, e, i, f, t, s) {
  switch (e) {
    case gr:
      if (n.byteLength != r.byteLength || n.byteOffset != r.byteOffset)
        return false;
      n = n.buffer, r = r.buffer;
    case lr:
      return !(n.byteLength != r.byteLength || !t(new Pc(n), new Pc(r)));
    case nr:
    case rr:
    case tr:
      return Ma(+n, +r);
    case er:
      return n.name == r.name && n.message == r.message;
    case fr:
    case ur:
      return n == r + "";
    case ir:
      var u = Vn;
    case sr:
      var a = i & kn;
      if (u || (u = C), n.size != r.size && !a)
        return false;
      var h = s.get(n);
      if (h)
        return h == r;
      i |= jn, s.set(n, r);
      var g = fn(u(n), u(r), i, f, t, s);
      return s.delete(n), g;
    case ar:
      if (S)
        return S.call(n) == S.call(r);
  }
  return false;
}
var hr = 1, pr = Object.prototype, Ar = pr.hasOwnProperty;
function _r(n, r, e, i, f, t) {
  var s = e & hr, u = q(n), a = u.length, h = q(r), g = h.length;
  if (a != g && !s)
    return false;
  for (var l = a; l--; ) {
    var d = u[l];
    if (!(s ? d in r : Ar.call(r, d)))
      return false;
  }
  var o = t.get(n), p = t.get(r);
  if (o && p)
    return o == r && p == n;
  var _ = true;
  t.set(n, r), t.set(r, n);
  for (var w = s; ++l < a; ) {
    d = u[l];
    var O = n[d], v = r[d];
    if (i)
      var G = s ? i(v, O, d, r, n, t) : i(O, v, d, n, r, t);
    if (!(G === void 0 ? O === v || f(O, v, e, i, t) : G)) {
      _ = false;
      break;
    }
    w || (w = d == "constructor");
  }
  if (_ && !w) {
    var E = n.constructor, b = r.constructor;
    E != b && "constructor" in n && "constructor" in r && !(typeof E == "function" && E instanceof E && typeof b == "function" && b instanceof b) && (_ = false);
  }
  return t.delete(n), t.delete(r), _;
}
var or = 1, X = "[object Arguments]", J = "[object Array]", c = "[object Object]", wr = Object.prototype, Q = wr.hasOwnProperty;
function Or(n, r, e, i, f, t) {
  var s = oa(n), u = oa(r), a = s ? J : rr$1(n), h = u ? J : rr$1(r);
  a = a == X ? c : a, h = h == X ? c : h;
  var g = a == c, l = h == c, d = a == h;
  if (d && rl(n)) {
    if (!rl(r))
      return false;
    s = true, g = false;
  }
  if (d && !g)
    return t || (t = new ei()), s || il(n) ? fn(n, r, e, i, f, t) : dr(n, r, a, e, i, f, t);
  if (!(e & or)) {
    var o = g && Q.call(n, "__wrapped__"), p = l && Q.call(r, "__wrapped__");
    if (o || p) {
      var _ = o ? n.value() : n, w = p ? r.value() : r;
      return t || (t = new ei()), f(_, w, e, i, t);
    }
  }
  return d ? (t || (t = new ei()), _r(n, r, e, i, f, t)) : false;
}
function D(n, r, e, i, f) {
  return n === r ? true : n == null || r == null || !Qi(n) && !Qi(r) ? n !== n && r !== r : Or(n, r, e, i, D, f);
}
var vr = 1, Pr = 2;
function yr(n, r, e, i) {
  var f = e.length, t = f;
  if (n == null)
    return !t;
  for (n = Object(n); f--; ) {
    var s = e[f];
    if (s[2] ? s[1] !== n[s[0]] : !(s[0] in n))
      return false;
  }
  for (; ++f < t; ) {
    s = e[f];
    var u = s[0], a = n[u], h = s[1];
    if (s[2]) {
      if (a === void 0 && !(u in n))
        return false;
    } else {
      var g = new ei(), l;
      if (!(l === void 0 ? D(h, a, vr | Pr, i, g) : l))
        return false;
    }
  }
  return true;
}
function sn(n) {
  return n === n && !yr$1(n);
}
function Er(n) {
  for (var r = M(n), e = r.length; e--; ) {
    var i = r[e], f = n[i];
    r[e] = [i, f, sn(f)];
  }
  return r;
}
function un(n, r) {
  return function(e) {
    return e == null ? false : e[n] === r && (r !== void 0 || n in Object(e));
  };
}
function br(n) {
  var r = Er(n);
  return r.length == 1 && r[0][2] ? un(r[0][0], r[0][1]) : function(e) {
    return e === n || yr(e, n, r);
  };
}
function cr(n, r) {
  return n != null && r in Object(n);
}
function Tr(n, r, e) {
  r = j(r, n);
  for (var i = -1, f = r.length, t = false; ++i < f; ) {
    var s = R(r[i]);
    if (!(t = n != null && e(n, s)))
      break;
    n = n[s];
  }
  return t || ++i != f ? t : (f = n == null ? 0 : n.length, !!f && Fd(f) && Id(s, f) && (oa(n) || sa(n)));
}
function Rr(n, r) {
  return n != null && Tr(n, r, cr);
}
var Ir = 1, Sr = 2;
function Lr(n, r) {
  return $(n) && sn(r) ? un(R(n), r) : function(e) {
    var i = mn(e, n);
    return i === void 0 && i === r ? Rr(e, n) : D(r, i, Ir | Sr);
  };
}
function xr(n) {
  return function(r) {
    return r?.[n];
  };
}
function Mr(n) {
  return function(r) {
    return nn(r, n);
  };
}
function $r(n) {
  return $(n) ? xr(R(n)) : Mr(n);
}
function an(n) {
  return typeof n == "function" ? n : n == null ? zd : typeof n == "object" ? oa(n) ? Lr(n[0], n[1]) : br(n) : $r(n);
}
function Cr(n, r) {
  return n && E_(n, r, M);
}
function Dr(n, r) {
  return function(e, i) {
    if (e == null)
      return e;
    if (!Da(e))
      return n(e, i);
    for (var f = e.length, t = -1, s = Object(e); ++t < f && i(s[t], t, s) !== false; )
      ;
    return e;
  };
}
var F = Dr(Cr);
function Fr(n) {
  return typeof n == "function" ? n : zd;
}
function Zr(n, r) {
  var e = oa(n) ? bn : F;
  return e(n, Fr(r));
}
function Gr(n, r) {
  var e = [];
  return F(n, function(i, f, t) {
    r(i, f, t) && e.push(i);
  }), e;
}
function qr(n, r) {
  var e = oa(n) ? en : Gr;
  return e(n, an(r));
}
function mr(n, r, e, i, f) {
  return f(n, function(t, s, u) {
    e = i ? (i = false, t) : r(e, t, s, u);
  }), e;
}
function Yr(n, r, e) {
  var i = oa(n) ? Un : mr, f = arguments.length < 3;
  return i(n, an(r), e, f, F);
}
var Nr = 1 / 0, Ur = _o && 1 / C(new _o([, -0]))[1] == Nr ? function(n) {
  return new _o(n);
} : En, Br = 200;
function Xr(n, r, e) {
  var i = -1, f = Sn, t = n.length, s = true, u = [], a = u;
  if (t >= Br) {
    var h = r ? null : Ur(n);
    if (h)
      return C(h);
    s = false, f = tn, a = new y();
  } else
    a = r ? [] : u;
  n:
    for (; ++i < t; ) {
      var g = n[i], l = r ? r(g) : g;
      if (g = g !== 0 ? g : 0, s && l === l) {
        for (var d = a.length; d--; )
          if (a[d] === l)
            continue n;
        r && a.push(l), u.push(g);
      } else f(a, l, e) || (a !== u && a.push(l), u.push(g));
    }
  return u;
}
export {
  Bn as B,
  Cr as C,
  Fr as F,
  Gn as G,
  Hr as H,
  M,
  R,
  Tr as T,
  Xr as X,
  Yr as Y,
  Zr as Z,
  q as a,
  bn as b,
  Zn as c,
  qn as d,
  an as e,
  Rr as f,
  cn as g,
  F as h,
  j,
  nn as n,
  qr as q,
  rn as r,
  x,
  yn as y
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Jhc2VVbmlxLURiTHlrTGFhLURtZ0M4bmx1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLW1lcm1haWQtc3RyaW5nL2Rpc3QvX2Jhc2VVbmlxLURiTHlrTGFhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFWIGFzIEwsIGJyIGFzIGxuLCBhRSBhcyBBLCBhVCBhcyBQLCBicyBhcyBnbiwgYnQgYXMgZG4sIGFEIGFzIFcsIGJ1IGFzIGhuLCBidiBhcyB6LCBidyBhcyBwbiwgYm0gYXMgQW4sIGJ4IGFzIG0sIGFXIGFzIE4sIGEkIGFzIFUsIGIyIGFzIFQsIGJ5IGFzIF9uLCBhWiBhcyBvbiwgYnogYXMgd24sIGJwIGFzIE9uLCBhRiBhcyBWLCBibiBhcyB2biwgYkEgYXMgSSB9IGZyb20gXCIuL2VudHJ5LUIyVlgta3hhLmpzXCI7XG52YXIgUG4gPSBcIltvYmplY3QgU3ltYm9sXVwiO1xuZnVuY3Rpb24geChuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PSBcInN5bWJvbFwiIHx8IEwobikgJiYgbG4obikgPT0gUG47XG59XG5mdW5jdGlvbiB5bihuLCByKSB7XG4gIGZvciAodmFyIGUgPSAtMSwgaSA9IG4gPT0gbnVsbCA/IDAgOiBuLmxlbmd0aCwgZiA9IEFycmF5KGkpOyArK2UgPCBpOyApXG4gICAgZltlXSA9IHIobltlXSwgZSwgbik7XG4gIHJldHVybiBmO1xufVxudmFyIEIgPSBQID8gUC5wcm90b3R5cGUgOiB2b2lkIDAsIEsgPSBCID8gQi50b1N0cmluZyA6IHZvaWQgMDtcbmZ1bmN0aW9uIGsobikge1xuICBpZiAodHlwZW9mIG4gPT0gXCJzdHJpbmdcIilcbiAgICByZXR1cm4gbjtcbiAgaWYgKEEobikpXG4gICAgcmV0dXJuIHluKG4sIGspICsgXCJcIjtcbiAgaWYgKHgobikpXG4gICAgcmV0dXJuIEsgPyBLLmNhbGwobikgOiBcIlwiO1xuICB2YXIgciA9IG4gKyBcIlwiO1xuICByZXR1cm4gciA9PSBcIjBcIiAmJiAxIC8gbiA9PSAtMSAvIDAgPyBcIi0wXCIgOiByO1xufVxuZnVuY3Rpb24gRW4oKSB7XG59XG5mdW5jdGlvbiBibihuLCByKSB7XG4gIGZvciAodmFyIGUgPSAtMSwgaSA9IG4gPT0gbnVsbCA/IDAgOiBuLmxlbmd0aDsgKytlIDwgaSAmJiByKG5bZV0sIGUsIG4pICE9PSAhMTsgKVxuICAgIDtcbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBjbihuLCByLCBlLCBpKSB7XG4gIGZvciAodmFyIGYgPSBuLmxlbmd0aCwgdCA9IGUgKyAtMTsgKyt0IDwgZjsgKVxuICAgIGlmIChyKG5bdF0sIHQsIG4pKVxuICAgICAgcmV0dXJuIHQ7XG4gIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIFRuKG4pIHtcbiAgcmV0dXJuIG4gIT09IG47XG59XG5mdW5jdGlvbiBSbihuLCByLCBlKSB7XG4gIGZvciAodmFyIGkgPSBlIC0gMSwgZiA9IG4ubGVuZ3RoOyArK2kgPCBmOyApXG4gICAgaWYgKG5baV0gPT09IHIpXG4gICAgICByZXR1cm4gaTtcbiAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gSW4obiwgciwgZSkge1xuICByZXR1cm4gciA9PT0gciA/IFJuKG4sIHIsIGUpIDogY24obiwgVG4sIGUpO1xufVxuZnVuY3Rpb24gU24obiwgcikge1xuICB2YXIgZSA9IG4gPT0gbnVsbCA/IDAgOiBuLmxlbmd0aDtcbiAgcmV0dXJuICEhZSAmJiBJbihuLCByLCAwKSA+IC0xO1xufVxuZnVuY3Rpb24gTShuKSB7XG4gIHJldHVybiBXKG4pID8gZ24obikgOiBkbihuKTtcbn1cbnZhciBMbiA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sIHhuID0gL15cXHcqJC87XG5mdW5jdGlvbiAkKG4sIHIpIHtcbiAgaWYgKEEobikpXG4gICAgcmV0dXJuICExO1xuICB2YXIgZSA9IHR5cGVvZiBuO1xuICByZXR1cm4gZSA9PSBcIm51bWJlclwiIHx8IGUgPT0gXCJzeW1ib2xcIiB8fCBlID09IFwiYm9vbGVhblwiIHx8IG4gPT0gbnVsbCB8fCB4KG4pID8gITAgOiB4bi50ZXN0KG4pIHx8ICFMbi50ZXN0KG4pIHx8IHIgIT0gbnVsbCAmJiBuIGluIE9iamVjdChyKTtcbn1cbnZhciBNbiA9IDUwMDtcbmZ1bmN0aW9uICRuKG4pIHtcbiAgdmFyIHIgPSBobihuLCBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIGUuc2l6ZSA9PT0gTW4gJiYgZS5jbGVhcigpLCBpO1xuICB9KSwgZSA9IHIuY2FjaGU7XG4gIHJldHVybiByO1xufVxudmFyIENuID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nLCBEbiA9IC9cXFxcKFxcXFwpPy9nLCBGbiA9ICRuKGZ1bmN0aW9uKG4pIHtcbiAgdmFyIHIgPSBbXTtcbiAgcmV0dXJuIG4uY2hhckNvZGVBdCgwKSA9PT0gNDYgJiYgci5wdXNoKFwiXCIpLCBuLnJlcGxhY2UoQ24sIGZ1bmN0aW9uKGUsIGksIGYsIHQpIHtcbiAgICByLnB1c2goZiA/IHQucmVwbGFjZShEbiwgXCIkMVwiKSA6IGkgfHwgZSk7XG4gIH0pLCByO1xufSk7XG5mdW5jdGlvbiBHbihuKSB7XG4gIHJldHVybiBuID09IG51bGwgPyBcIlwiIDogayhuKTtcbn1cbmZ1bmN0aW9uIGoobiwgcikge1xuICByZXR1cm4gQShuKSA/IG4gOiAkKG4sIHIpID8gW25dIDogRm4oR24obikpO1xufVxuZnVuY3Rpb24gUihuKSB7XG4gIGlmICh0eXBlb2YgbiA9PSBcInN0cmluZ1wiIHx8IHgobikpXG4gICAgcmV0dXJuIG47XG4gIHZhciByID0gbiArIFwiXCI7XG4gIHJldHVybiByID09IFwiMFwiICYmIDEgLyBuID09IC0xIC8gMCA/IFwiLTBcIiA6IHI7XG59XG5mdW5jdGlvbiBubihuLCByKSB7XG4gIHIgPSBqKHIsIG4pO1xuICBmb3IgKHZhciBlID0gMCwgaSA9IHIubGVuZ3RoOyBuICE9IG51bGwgJiYgZSA8IGk7IClcbiAgICBuID0gbltSKHJbZSsrXSldO1xuICByZXR1cm4gZSAmJiBlID09IGkgPyBuIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gbW4obiwgciwgZSkge1xuICB2YXIgaSA9IG4gPT0gbnVsbCA/IHZvaWQgMCA6IG5uKG4sIHIpO1xuICByZXR1cm4gaSA9PT0gdm9pZCAwID8gZSA6IGk7XG59XG5mdW5jdGlvbiBybihuLCByKSB7XG4gIGZvciAodmFyIGUgPSAtMSwgaSA9IHIubGVuZ3RoLCBmID0gbi5sZW5ndGg7ICsrZSA8IGk7IClcbiAgICBuW2YgKyBlXSA9IHJbZV07XG4gIHJldHVybiBuO1xufVxudmFyIEggPSBQID8gUC5pc0NvbmNhdFNwcmVhZGFibGUgOiB2b2lkIDA7XG5mdW5jdGlvbiBObihuKSB7XG4gIHJldHVybiBBKG4pIHx8IHoobikgfHwgISEoSCAmJiBuICYmIG5bSF0pO1xufVxuZnVuY3Rpb24gSHIobiwgciwgZSwgaSwgZikge1xuICB2YXIgdCA9IC0xLCBzID0gbi5sZW5ndGg7XG4gIGZvciAoZSB8fCAoZSA9IE5uKSwgZiB8fCAoZiA9IFtdKTsgKyt0IDwgczsgKSB7XG4gICAgdmFyIHUgPSBuW3RdO1xuICAgIGUodSkgPyBybihmLCB1KSA6IGkgfHwgKGZbZi5sZW5ndGhdID0gdSk7XG4gIH1cbiAgcmV0dXJuIGY7XG59XG5mdW5jdGlvbiBVbihuLCByLCBlLCBpKSB7XG4gIHZhciBmID0gLTEsIHQgPSBuID09IG51bGwgPyAwIDogbi5sZW5ndGg7XG4gIGZvciAoaSAmJiB0ICYmIChlID0gblsrK2ZdKTsgKytmIDwgdDsgKVxuICAgIGUgPSByKGUsIG5bZl0sIGYsIG4pO1xuICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIGVuKG4sIHIpIHtcbiAgZm9yICh2YXIgZSA9IC0xLCBpID0gbiA9PSBudWxsID8gMCA6IG4ubGVuZ3RoLCBmID0gMCwgdCA9IFtdOyArK2UgPCBpOyApIHtcbiAgICB2YXIgcyA9IG5bZV07XG4gICAgcihzLCBlLCBuKSAmJiAodFtmKytdID0gcyk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBCbigpIHtcbiAgcmV0dXJuIFtdO1xufVxudmFyIEtuID0gT2JqZWN0LnByb3RvdHlwZSwgSG4gPSBLbi5wcm9wZXJ0eUlzRW51bWVyYWJsZSwgWiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsIFpuID0gWiA/IGZ1bmN0aW9uKG4pIHtcbiAgcmV0dXJuIG4gPT0gbnVsbCA/IFtdIDogKG4gPSBPYmplY3QobiksIGVuKFoobiksIGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gSG4uY2FsbChuLCByKTtcbiAgfSkpO1xufSA6IEJuO1xuZnVuY3Rpb24gcW4obiwgciwgZSkge1xuICB2YXIgaSA9IHIobik7XG4gIHJldHVybiBBKG4pID8gaSA6IHJuKGksIGUobikpO1xufVxuZnVuY3Rpb24gcShuKSB7XG4gIHJldHVybiBxbihuLCBNLCBabik7XG59XG52YXIgWW4gPSBcIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIjtcbmZ1bmN0aW9uIFhuKG4pIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uc2V0KG4sIFluKSwgdGhpcztcbn1cbmZ1bmN0aW9uIEpuKG4pIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKG4pO1xufVxuZnVuY3Rpb24geShuKSB7XG4gIHZhciByID0gLTEsIGUgPSBuID09IG51bGwgPyAwIDogbi5sZW5ndGg7XG4gIGZvciAodGhpcy5fX2RhdGFfXyA9IG5ldyBwbigpOyArK3IgPCBlOyApXG4gICAgdGhpcy5hZGQobltyXSk7XG59XG55LnByb3RvdHlwZS5hZGQgPSB5LnByb3RvdHlwZS5wdXNoID0gWG47XG55LnByb3RvdHlwZS5oYXMgPSBKbjtcbmZ1bmN0aW9uIFFuKG4sIHIpIHtcbiAgZm9yICh2YXIgZSA9IC0xLCBpID0gbiA9PSBudWxsID8gMCA6IG4ubGVuZ3RoOyArK2UgPCBpOyApXG4gICAgaWYgKHIobltlXSwgZSwgbikpXG4gICAgICByZXR1cm4gITA7XG4gIHJldHVybiAhMTtcbn1cbmZ1bmN0aW9uIHRuKG4sIHIpIHtcbiAgcmV0dXJuIG4uaGFzKHIpO1xufVxudmFyIFduID0gMSwgem4gPSAyO1xuZnVuY3Rpb24gZm4obiwgciwgZSwgaSwgZiwgdCkge1xuICB2YXIgcyA9IGUgJiBXbiwgdSA9IG4ubGVuZ3RoLCBhID0gci5sZW5ndGg7XG4gIGlmICh1ICE9IGEgJiYgIShzICYmIGEgPiB1KSlcbiAgICByZXR1cm4gITE7XG4gIHZhciBoID0gdC5nZXQobiksIGcgPSB0LmdldChyKTtcbiAgaWYgKGggJiYgZylcbiAgICByZXR1cm4gaCA9PSByICYmIGcgPT0gbjtcbiAgdmFyIGwgPSAtMSwgZCA9ICEwLCBvID0gZSAmIHpuID8gbmV3IHkoKSA6IHZvaWQgMDtcbiAgZm9yICh0LnNldChuLCByKSwgdC5zZXQociwgbik7ICsrbCA8IHU7ICkge1xuICAgIHZhciBwID0gbltsXSwgXyA9IHJbbF07XG4gICAgaWYgKGkpXG4gICAgICB2YXIgdyA9IHMgPyBpKF8sIHAsIGwsIHIsIG4sIHQpIDogaShwLCBfLCBsLCBuLCByLCB0KTtcbiAgICBpZiAodyAhPT0gdm9pZCAwKSB7XG4gICAgICBpZiAodylcbiAgICAgICAgY29udGludWU7XG4gICAgICBkID0gITE7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKG8pIHtcbiAgICAgIGlmICghUW4ociwgZnVuY3Rpb24oTywgdikge1xuICAgICAgICBpZiAoIXRuKG8sIHYpICYmIChwID09PSBPIHx8IGYocCwgTywgZSwgaSwgdCkpKVxuICAgICAgICAgIHJldHVybiBvLnB1c2godik7XG4gICAgICB9KSkge1xuICAgICAgICBkID0gITE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShwID09PSBfIHx8IGYocCwgXywgZSwgaSwgdCkpKSB7XG4gICAgICBkID0gITE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHQuZGVsZXRlKG4pLCB0LmRlbGV0ZShyKSwgZDtcbn1cbmZ1bmN0aW9uIFZuKG4pIHtcbiAgdmFyIHIgPSAtMSwgZSA9IEFycmF5KG4uc2l6ZSk7XG4gIHJldHVybiBuLmZvckVhY2goZnVuY3Rpb24oaSwgZikge1xuICAgIGVbKytyXSA9IFtmLCBpXTtcbiAgfSksIGU7XG59XG5mdW5jdGlvbiBDKG4pIHtcbiAgdmFyIHIgPSAtMSwgZSA9IEFycmF5KG4uc2l6ZSk7XG4gIHJldHVybiBuLmZvckVhY2goZnVuY3Rpb24oaSkge1xuICAgIGVbKytyXSA9IGk7XG4gIH0pLCBlO1xufVxudmFyIGtuID0gMSwgam4gPSAyLCBuciA9IFwiW29iamVjdCBCb29sZWFuXVwiLCByciA9IFwiW29iamVjdCBEYXRlXVwiLCBlciA9IFwiW29iamVjdCBFcnJvcl1cIiwgaXIgPSBcIltvYmplY3QgTWFwXVwiLCB0ciA9IFwiW29iamVjdCBOdW1iZXJdXCIsIGZyID0gXCJbb2JqZWN0IFJlZ0V4cF1cIiwgc3IgPSBcIltvYmplY3QgU2V0XVwiLCB1ciA9IFwiW29iamVjdCBTdHJpbmddXCIsIGFyID0gXCJbb2JqZWN0IFN5bWJvbF1cIiwgbHIgPSBcIltvYmplY3QgQXJyYXlCdWZmZXJdXCIsIGdyID0gXCJbb2JqZWN0IERhdGFWaWV3XVwiLCBZID0gUCA/IFAucHJvdG90eXBlIDogdm9pZCAwLCBTID0gWSA/IFkudmFsdWVPZiA6IHZvaWQgMDtcbmZ1bmN0aW9uIGRyKG4sIHIsIGUsIGksIGYsIHQsIHMpIHtcbiAgc3dpdGNoIChlKSB7XG4gICAgY2FzZSBncjpcbiAgICAgIGlmIChuLmJ5dGVMZW5ndGggIT0gci5ieXRlTGVuZ3RoIHx8IG4uYnl0ZU9mZnNldCAhPSByLmJ5dGVPZmZzZXQpXG4gICAgICAgIHJldHVybiAhMTtcbiAgICAgIG4gPSBuLmJ1ZmZlciwgciA9IHIuYnVmZmVyO1xuICAgIGNhc2UgbHI6XG4gICAgICByZXR1cm4gIShuLmJ5dGVMZW5ndGggIT0gci5ieXRlTGVuZ3RoIHx8ICF0KG5ldyBtKG4pLCBuZXcgbShyKSkpO1xuICAgIGNhc2UgbnI6XG4gICAgY2FzZSBycjpcbiAgICBjYXNlIHRyOlxuICAgICAgcmV0dXJuIEFuKCtuLCArcik7XG4gICAgY2FzZSBlcjpcbiAgICAgIHJldHVybiBuLm5hbWUgPT0gci5uYW1lICYmIG4ubWVzc2FnZSA9PSByLm1lc3NhZ2U7XG4gICAgY2FzZSBmcjpcbiAgICBjYXNlIHVyOlxuICAgICAgcmV0dXJuIG4gPT0gciArIFwiXCI7XG4gICAgY2FzZSBpcjpcbiAgICAgIHZhciB1ID0gVm47XG4gICAgY2FzZSBzcjpcbiAgICAgIHZhciBhID0gaSAmIGtuO1xuICAgICAgaWYgKHUgfHwgKHUgPSBDKSwgbi5zaXplICE9IHIuc2l6ZSAmJiAhYSlcbiAgICAgICAgcmV0dXJuICExO1xuICAgICAgdmFyIGggPSBzLmdldChuKTtcbiAgICAgIGlmIChoKVxuICAgICAgICByZXR1cm4gaCA9PSByO1xuICAgICAgaSB8PSBqbiwgcy5zZXQobiwgcik7XG4gICAgICB2YXIgZyA9IGZuKHUobiksIHUociksIGksIGYsIHQsIHMpO1xuICAgICAgcmV0dXJuIHMuZGVsZXRlKG4pLCBnO1xuICAgIGNhc2UgYXI6XG4gICAgICBpZiAoUylcbiAgICAgICAgcmV0dXJuIFMuY2FsbChuKSA9PSBTLmNhbGwocik7XG4gIH1cbiAgcmV0dXJuICExO1xufVxudmFyIGhyID0gMSwgcHIgPSBPYmplY3QucHJvdG90eXBlLCBBciA9IHByLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gX3IobiwgciwgZSwgaSwgZiwgdCkge1xuICB2YXIgcyA9IGUgJiBociwgdSA9IHEobiksIGEgPSB1Lmxlbmd0aCwgaCA9IHEociksIGcgPSBoLmxlbmd0aDtcbiAgaWYgKGEgIT0gZyAmJiAhcylcbiAgICByZXR1cm4gITE7XG4gIGZvciAodmFyIGwgPSBhOyBsLS07ICkge1xuICAgIHZhciBkID0gdVtsXTtcbiAgICBpZiAoIShzID8gZCBpbiByIDogQXIuY2FsbChyLCBkKSkpXG4gICAgICByZXR1cm4gITE7XG4gIH1cbiAgdmFyIG8gPSB0LmdldChuKSwgcCA9IHQuZ2V0KHIpO1xuICBpZiAobyAmJiBwKVxuICAgIHJldHVybiBvID09IHIgJiYgcCA9PSBuO1xuICB2YXIgXyA9ICEwO1xuICB0LnNldChuLCByKSwgdC5zZXQociwgbik7XG4gIGZvciAodmFyIHcgPSBzOyArK2wgPCBhOyApIHtcbiAgICBkID0gdVtsXTtcbiAgICB2YXIgTyA9IG5bZF0sIHYgPSByW2RdO1xuICAgIGlmIChpKVxuICAgICAgdmFyIEcgPSBzID8gaSh2LCBPLCBkLCByLCBuLCB0KSA6IGkoTywgdiwgZCwgbiwgciwgdCk7XG4gICAgaWYgKCEoRyA9PT0gdm9pZCAwID8gTyA9PT0gdiB8fCBmKE8sIHYsIGUsIGksIHQpIDogRykpIHtcbiAgICAgIF8gPSAhMTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB3IHx8ICh3ID0gZCA9PSBcImNvbnN0cnVjdG9yXCIpO1xuICB9XG4gIGlmIChfICYmICF3KSB7XG4gICAgdmFyIEUgPSBuLmNvbnN0cnVjdG9yLCBiID0gci5jb25zdHJ1Y3RvcjtcbiAgICBFICE9IGIgJiYgXCJjb25zdHJ1Y3RvclwiIGluIG4gJiYgXCJjb25zdHJ1Y3RvclwiIGluIHIgJiYgISh0eXBlb2YgRSA9PSBcImZ1bmN0aW9uXCIgJiYgRSBpbnN0YW5jZW9mIEUgJiYgdHlwZW9mIGIgPT0gXCJmdW5jdGlvblwiICYmIGIgaW5zdGFuY2VvZiBiKSAmJiAoXyA9ICExKTtcbiAgfVxuICByZXR1cm4gdC5kZWxldGUobiksIHQuZGVsZXRlKHIpLCBfO1xufVxudmFyIG9yID0gMSwgWCA9IFwiW29iamVjdCBBcmd1bWVudHNdXCIsIEogPSBcIltvYmplY3QgQXJyYXldXCIsIGMgPSBcIltvYmplY3QgT2JqZWN0XVwiLCB3ciA9IE9iamVjdC5wcm90b3R5cGUsIFEgPSB3ci5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIE9yKG4sIHIsIGUsIGksIGYsIHQpIHtcbiAgdmFyIHMgPSBBKG4pLCB1ID0gQShyKSwgYSA9IHMgPyBKIDogTihuKSwgaCA9IHUgPyBKIDogTihyKTtcbiAgYSA9IGEgPT0gWCA/IGMgOiBhLCBoID0gaCA9PSBYID8gYyA6IGg7XG4gIHZhciBnID0gYSA9PSBjLCBsID0gaCA9PSBjLCBkID0gYSA9PSBoO1xuICBpZiAoZCAmJiBVKG4pKSB7XG4gICAgaWYgKCFVKHIpKVxuICAgICAgcmV0dXJuICExO1xuICAgIHMgPSAhMCwgZyA9ICExO1xuICB9XG4gIGlmIChkICYmICFnKVxuICAgIHJldHVybiB0IHx8ICh0ID0gbmV3IFQoKSksIHMgfHwgX24obikgPyBmbihuLCByLCBlLCBpLCBmLCB0KSA6IGRyKG4sIHIsIGEsIGUsIGksIGYsIHQpO1xuICBpZiAoIShlICYgb3IpKSB7XG4gICAgdmFyIG8gPSBnICYmIFEuY2FsbChuLCBcIl9fd3JhcHBlZF9fXCIpLCBwID0gbCAmJiBRLmNhbGwociwgXCJfX3dyYXBwZWRfX1wiKTtcbiAgICBpZiAobyB8fCBwKSB7XG4gICAgICB2YXIgXyA9IG8gPyBuLnZhbHVlKCkgOiBuLCB3ID0gcCA/IHIudmFsdWUoKSA6IHI7XG4gICAgICByZXR1cm4gdCB8fCAodCA9IG5ldyBUKCkpLCBmKF8sIHcsIGUsIGksIHQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZCA/ICh0IHx8ICh0ID0gbmV3IFQoKSksIF9yKG4sIHIsIGUsIGksIGYsIHQpKSA6ICExO1xufVxuZnVuY3Rpb24gRChuLCByLCBlLCBpLCBmKSB7XG4gIHJldHVybiBuID09PSByID8gITAgOiBuID09IG51bGwgfHwgciA9PSBudWxsIHx8ICFMKG4pICYmICFMKHIpID8gbiAhPT0gbiAmJiByICE9PSByIDogT3IobiwgciwgZSwgaSwgRCwgZik7XG59XG52YXIgdnIgPSAxLCBQciA9IDI7XG5mdW5jdGlvbiB5cihuLCByLCBlLCBpKSB7XG4gIHZhciBmID0gZS5sZW5ndGgsIHQgPSBmO1xuICBpZiAobiA9PSBudWxsKVxuICAgIHJldHVybiAhdDtcbiAgZm9yIChuID0gT2JqZWN0KG4pOyBmLS07ICkge1xuICAgIHZhciBzID0gZVtmXTtcbiAgICBpZiAoc1syXSA/IHNbMV0gIT09IG5bc1swXV0gOiAhKHNbMF0gaW4gbikpXG4gICAgICByZXR1cm4gITE7XG4gIH1cbiAgZm9yICg7ICsrZiA8IHQ7ICkge1xuICAgIHMgPSBlW2ZdO1xuICAgIHZhciB1ID0gc1swXSwgYSA9IG5bdV0sIGggPSBzWzFdO1xuICAgIGlmIChzWzJdKSB7XG4gICAgICBpZiAoYSA9PT0gdm9pZCAwICYmICEodSBpbiBuKSlcbiAgICAgICAgcmV0dXJuICExO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZyA9IG5ldyBUKCksIGw7XG4gICAgICBpZiAoIShsID09PSB2b2lkIDAgPyBEKGgsIGEsIHZyIHwgUHIsIGksIGcpIDogbCkpXG4gICAgICAgIHJldHVybiAhMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICEwO1xufVxuZnVuY3Rpb24gc24obikge1xuICByZXR1cm4gbiA9PT0gbiAmJiAhb24obik7XG59XG5mdW5jdGlvbiBFcihuKSB7XG4gIGZvciAodmFyIHIgPSBNKG4pLCBlID0gci5sZW5ndGg7IGUtLTsgKSB7XG4gICAgdmFyIGkgPSByW2VdLCBmID0gbltpXTtcbiAgICByW2VdID0gW2ksIGYsIHNuKGYpXTtcbiAgfVxuICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIHVuKG4sIHIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gZSA9PSBudWxsID8gITEgOiBlW25dID09PSByICYmIChyICE9PSB2b2lkIDAgfHwgbiBpbiBPYmplY3QoZSkpO1xuICB9O1xufVxuZnVuY3Rpb24gYnIobikge1xuICB2YXIgciA9IEVyKG4pO1xuICByZXR1cm4gci5sZW5ndGggPT0gMSAmJiByWzBdWzJdID8gdW4oclswXVswXSwgclswXVsxXSkgOiBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIGUgPT09IG4gfHwgeXIoZSwgbiwgcik7XG4gIH07XG59XG5mdW5jdGlvbiBjcihuLCByKSB7XG4gIHJldHVybiBuICE9IG51bGwgJiYgciBpbiBPYmplY3Qobik7XG59XG5mdW5jdGlvbiBUcihuLCByLCBlKSB7XG4gIHIgPSBqKHIsIG4pO1xuICBmb3IgKHZhciBpID0gLTEsIGYgPSByLmxlbmd0aCwgdCA9ICExOyArK2kgPCBmOyApIHtcbiAgICB2YXIgcyA9IFIocltpXSk7XG4gICAgaWYgKCEodCA9IG4gIT0gbnVsbCAmJiBlKG4sIHMpKSlcbiAgICAgIGJyZWFrO1xuICAgIG4gPSBuW3NdO1xuICB9XG4gIHJldHVybiB0IHx8ICsraSAhPSBmID8gdCA6IChmID0gbiA9PSBudWxsID8gMCA6IG4ubGVuZ3RoLCAhIWYgJiYgd24oZikgJiYgT24ocywgZikgJiYgKEEobikgfHwgeihuKSkpO1xufVxuZnVuY3Rpb24gUnIobiwgcikge1xuICByZXR1cm4gbiAhPSBudWxsICYmIFRyKG4sIHIsIGNyKTtcbn1cbnZhciBJciA9IDEsIFNyID0gMjtcbmZ1bmN0aW9uIExyKG4sIHIpIHtcbiAgcmV0dXJuICQobikgJiYgc24ocikgPyB1bihSKG4pLCByKSA6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgaSA9IG1uKGUsIG4pO1xuICAgIHJldHVybiBpID09PSB2b2lkIDAgJiYgaSA9PT0gciA/IFJyKGUsIG4pIDogRChyLCBpLCBJciB8IFNyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHhyKG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gcj8uW25dO1xuICB9O1xufVxuZnVuY3Rpb24gTXIobikge1xuICByZXR1cm4gZnVuY3Rpb24ocikge1xuICAgIHJldHVybiBubihyLCBuKTtcbiAgfTtcbn1cbmZ1bmN0aW9uICRyKG4pIHtcbiAgcmV0dXJuICQobikgPyB4cihSKG4pKSA6IE1yKG4pO1xufVxuZnVuY3Rpb24gYW4obikge1xuICByZXR1cm4gdHlwZW9mIG4gPT0gXCJmdW5jdGlvblwiID8gbiA6IG4gPT0gbnVsbCA/IFYgOiB0eXBlb2YgbiA9PSBcIm9iamVjdFwiID8gQShuKSA/IExyKG5bMF0sIG5bMV0pIDogYnIobikgOiAkcihuKTtcbn1cbmZ1bmN0aW9uIENyKG4sIHIpIHtcbiAgcmV0dXJuIG4gJiYgdm4obiwgciwgTSk7XG59XG5mdW5jdGlvbiBEcihuLCByKSB7XG4gIHJldHVybiBmdW5jdGlvbihlLCBpKSB7XG4gICAgaWYgKGUgPT0gbnVsbClcbiAgICAgIHJldHVybiBlO1xuICAgIGlmICghVyhlKSlcbiAgICAgIHJldHVybiBuKGUsIGkpO1xuICAgIGZvciAodmFyIGYgPSBlLmxlbmd0aCwgdCA9IC0xLCBzID0gT2JqZWN0KGUpOyArK3QgPCBmICYmIGkoc1t0XSwgdCwgcykgIT09ICExOyApXG4gICAgICA7XG4gICAgcmV0dXJuIGU7XG4gIH07XG59XG52YXIgRiA9IERyKENyKTtcbmZ1bmN0aW9uIEZyKG4pIHtcbiAgcmV0dXJuIHR5cGVvZiBuID09IFwiZnVuY3Rpb25cIiA/IG4gOiBWO1xufVxuZnVuY3Rpb24gWnIobiwgcikge1xuICB2YXIgZSA9IEEobikgPyBibiA6IEY7XG4gIHJldHVybiBlKG4sIEZyKHIpKTtcbn1cbmZ1bmN0aW9uIEdyKG4sIHIpIHtcbiAgdmFyIGUgPSBbXTtcbiAgcmV0dXJuIEYobiwgZnVuY3Rpb24oaSwgZiwgdCkge1xuICAgIHIoaSwgZiwgdCkgJiYgZS5wdXNoKGkpO1xuICB9KSwgZTtcbn1cbmZ1bmN0aW9uIHFyKG4sIHIpIHtcbiAgdmFyIGUgPSBBKG4pID8gZW4gOiBHcjtcbiAgcmV0dXJuIGUobiwgYW4ocikpO1xufVxuZnVuY3Rpb24gbXIobiwgciwgZSwgaSwgZikge1xuICByZXR1cm4gZihuLCBmdW5jdGlvbih0LCBzLCB1KSB7XG4gICAgZSA9IGkgPyAoaSA9ICExLCB0KSA6IHIoZSwgdCwgcywgdSk7XG4gIH0pLCBlO1xufVxuZnVuY3Rpb24gWXIobiwgciwgZSkge1xuICB2YXIgaSA9IEEobikgPyBVbiA6IG1yLCBmID0gYXJndW1lbnRzLmxlbmd0aCA8IDM7XG4gIHJldHVybiBpKG4sIGFuKHIpLCBlLCBmLCBGKTtcbn1cbnZhciBOciA9IDEgLyAwLCBVciA9IEkgJiYgMSAvIEMobmV3IEkoWywgLTBdKSlbMV0gPT0gTnIgPyBmdW5jdGlvbihuKSB7XG4gIHJldHVybiBuZXcgSShuKTtcbn0gOiBFbiwgQnIgPSAyMDA7XG5mdW5jdGlvbiBYcihuLCByLCBlKSB7XG4gIHZhciBpID0gLTEsIGYgPSBTbiwgdCA9IG4ubGVuZ3RoLCBzID0gITAsIHUgPSBbXSwgYSA9IHU7XG4gIGlmICh0ID49IEJyKSB7XG4gICAgdmFyIGggPSByID8gbnVsbCA6IFVyKG4pO1xuICAgIGlmIChoKVxuICAgICAgcmV0dXJuIEMoaCk7XG4gICAgcyA9ICExLCBmID0gdG4sIGEgPSBuZXcgeSgpO1xuICB9IGVsc2VcbiAgICBhID0gciA/IFtdIDogdTtcbiAgbjpcbiAgICBmb3IgKDsgKytpIDwgdDsgKSB7XG4gICAgICB2YXIgZyA9IG5baV0sIGwgPSByID8gcihnKSA6IGc7XG4gICAgICBpZiAoZyA9IGcgIT09IDAgPyBnIDogMCwgcyAmJiBsID09PSBsKSB7XG4gICAgICAgIGZvciAodmFyIGQgPSBhLmxlbmd0aDsgZC0tOyApXG4gICAgICAgICAgaWYgKGFbZF0gPT09IGwpXG4gICAgICAgICAgICBjb250aW51ZSBuO1xuICAgICAgICByICYmIGEucHVzaChsKSwgdS5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGYoYSwgbCwgZSkgfHwgKGEgIT09IHUgJiYgYS5wdXNoKGwpLCB1LnB1c2goZykpO1xuICAgIH1cbiAgcmV0dXJuIHU7XG59XG5leHBvcnQge1xuICBGIGFzIGEsXG4gIEhyIGFzIGIsXG4gIHluIGFzIGMsXG4gIGFuIGFzIGQsXG4gIHJuIGFzIGUsXG4gIHFuIGFzIGYsXG4gIFpuIGFzIGcsXG4gIHEgYXMgaCxcbiAgeCBhcyBpLFxuICBibiBhcyBqLFxuICBNIGFzIGssXG4gIFhyIGFzIGwsXG4gIHFyIGFzIG0sXG4gIFpyIGFzIG4sXG4gIGNuIGFzIG8sXG4gIEZyIGFzIHAsXG4gIENyIGFzIHEsXG4gIFlyIGFzIHIsXG4gIEJuIGFzIHMsXG4gIFRyIGFzIHQsXG4gIGogYXMgdSxcbiAgUiBhcyB2LFxuICBubiBhcyB3LFxuICBSciBhcyB4LFxuICBHbiBhcyB5XG59O1xuIl0sIm5hbWVzIjpbIkwiLCJsbiIsIlAiLCJBIiwiVyIsImduIiwiZG4iLCJobiIsInoiLCJwbiIsIm0iLCJBbiIsIk4iLCJVIiwiVCIsIl9uIiwib24iLCJ3biIsIk9uIiwiViIsInZuIiwiSSJdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksS0FBSztBQUNULFNBQVMsRUFBRSxHQUFHO0FBQ1osU0FBTyxPQUFPLEtBQUssWUFBWUEsR0FBRSxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxLQUFLO0FBQ2xEO0FBQ0EsU0FBUyxHQUFHLEdBQUcsR0FBRztBQUNoQixXQUFTLElBQUksSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLEVBQUUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSTtBQUNqRSxNQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNyQixTQUFPO0FBQ1Q7QUFDQSxJQUFJLElBQUlDLEtBQUlBLEdBQUUsWUFBWSxRQUFRLElBQUksSUFBSSxFQUFFLFdBQVc7QUFDdkQsU0FBUyxFQUFFLEdBQUc7QUFDWixNQUFJLE9BQU8sS0FBSztBQUNkLFdBQU87QUFDVCxNQUFJQyxHQUFFLENBQUM7QUFDTCxXQUFPLEdBQUcsR0FBRyxDQUFDLElBQUk7QUFDcEIsTUFBSSxFQUFFLENBQUM7QUFDTCxXQUFPLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtBQUN6QixNQUFJLElBQUksSUFBSTtBQUNaLFNBQU8sS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLElBQUksT0FBTztBQUM5QztBQUNBLFNBQVMsS0FBSztBQUNkO0FBQ0EsU0FBUyxHQUFHLEdBQUcsR0FBRztBQUNoQixXQUFTLElBQUksSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLEVBQUUsUUFBUSxF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QUFFLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRztBQUM1QixRQUFJLEtBQUssSUFBSSxPQUFJLEtBQUssRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDcEMsQ0FBQyxHQUFHO0FBQ047QUFDQSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxJQUFJQSxHQUFFLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxVQUFVLFNBQVM7QUFDL0MsU0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDNUI7QUFDQSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUtrQixNQUFLLElBQUksRUFBRSxJQUFJQSxHQUFFLENBQUEsRUFBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsR0FBRztBQUNwRSxTQUFPLElBQUlBLEdBQUUsQ0FBQztBQUNoQixJQUFJLElBQUksS0FBSztBQUNiLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLFFBQVEsSUFBSSxNQUFJLElBQUksQ0FBQSxHQUFJLElBQUk7QUFDdEQsTUFBSSxLQUFLLElBQUk7QUFDWCxRQUFJLElBQUksSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUN2QixRQUFJO0FBQ0YsYUFBTyxFQUFFLENBQUM7QUFDWixRQUFJLE9BQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFDO0FBQUEsRUFDM0I7QUFDRSxRQUFJLElBQUksQ0FBQSxJQUFLO0FBQ2Y7QUFDRSxXQUFPLEVBQUUsSUFBSSxLQUFLO0FBQ2hCLFVBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUk7QUFDN0IsVUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLEdBQUcsS0FBSyxNQUFNLEdBQUc7QUFDckMsaUJBQVMsSUFBSSxFQUFFLFFBQVE7QUFDckIsY0FBSSxFQUFFLENBQUMsTUFBTTtBQUNYLHFCQUFTO0FBQ2IsYUFBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFDMUIsTUFBTyxHQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sTUFBTSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7QUFBQSxJQUN0RDtBQUNGLFNBQU87QUFDVDsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
