import { an as Uw, ao as tl, ap as Jw, aq as yr, ar as I_, as as rr, at as rl, au as D_, av as z_, aw as ei, ax as Tw, ay as oa, az as $w, aA as R_, aB as O_, aC as Hc, aD as Qi, aE as na, aF as Mw, aG as Y_, aH as wh, aI as Pd, aJ as $d } from "./SynchronicGraphPage-D8s-0-s1.js";
import { M as M$1, q as qr, Z as Zr, Y as Yr, X as Xr, H as Hr, a as q$1, b as bn, y as yn, c as Zn, B as Bn, d as qn, r as rn } from "./_baseUniq-DbLykLaa-DOrTuLNC.js";
function me(t, e) {
  return t && $w(e, M$1(e), t);
}
function je(t, e) {
  return t && $w(e, Pd(e), t);
}
function Te(t, e) {
  return $w(t, Zn(t), e);
}
var Oe = Object.getOwnPropertySymbols, W = Oe ? function(t) {
  for (var e = []; t; )
    rn(e, Zn(t)), t = $d(t);
  return e;
} : Bn;
function Ee(t, e) {
  return $w(t, W(t), e);
}
function Ae(t) {
  return qn(t, Pd, W);
}
var Ce = Object.prototype, Le = Ce.hasOwnProperty;
function we(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && Le.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
function Ne(t, e) {
  var r = e ? O_(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var Pe = /\w*$/;
function Fe(t) {
  var e = new t.constructor(t.source, Pe.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var I = na ? na.prototype : void 0, D = I ? I.valueOf : void 0;
function Se(t) {
  return D ? Object(D.call(t)) : {};
}
var $e = "[object Boolean]", ve = "[object Date]", Ie = "[object Map]", De = "[object Number]", Me = "[object RegExp]", Ue = "[object Set]", Ge = "[object String]", xe = "[object Symbol]", Be = "[object ArrayBuffer]", Re = "[object DataView]", Ve = "[object Float32Array]", Ke = "[object Float64Array]", Ye = "[object Int8Array]", We = "[object Int16Array]", qe = "[object Int32Array]", He = "[object Uint8Array]", Qe = "[object Uint8ClampedArray]", Xe = "[object Uint16Array]", Ze = "[object Uint32Array]";
function Je(t, e, r) {
  var s = t.constructor;
  switch (e) {
    case Be:
      return O_(t);
    case $e:
    case ve:
      return new s(+t);
    case Re:
      return Ne(t, r);
    case Ve:
    case Ke:
    case Ye:
    case We:
    case qe:
    case He:
    case Qe:
    case Xe:
    case Ze:
      return R_(t, r);
    case Ie:
      return new s();
    case De:
    case Ge:
      return new s(t);
    case Me:
      return Fe(t);
    case Ue:
      return new s();
    case xe:
      return Se(t);
  }
}
var ze = "[object Map]";
function ke(t) {
  return Qi(t) && rr(t) == ze;
}
var M = Hc && Hc.isMap, et = M ? Tw(M) : ke, tt = "[object Set]";
function rt(t) {
  return Qi(t) && rr(t) == tt;
}
var U = Hc && Hc.isSet, st = U ? Tw(U) : rt, nt = 1, it = 2, at = 4, q = "[object Arguments]", ot = "[object Array]", ut = "[object Boolean]", ht = "[object Date]", dt = "[object Error]", H = "[object Function]", ct = "[object GeneratorFunction]", ft = "[object Map]", gt = "[object Number]", Q = "[object Object]", lt = "[object RegExp]", bt = "[object Set]", _t = "[object String]", pt = "[object Symbol]", yt = "[object WeakMap]", mt = "[object ArrayBuffer]", jt = "[object DataView]", Tt = "[object Float32Array]", Ot = "[object Float64Array]", Et = "[object Int8Array]", At = "[object Int16Array]", Ct = "[object Int32Array]", Lt = "[object Uint8Array]", wt = "[object Uint8ClampedArray]", Nt = "[object Uint16Array]", Pt = "[object Uint32Array]", o = {};
o[q] = o[ot] = o[mt] = o[jt] = o[ut] = o[ht] = o[Tt] = o[Ot] = o[Et] = o[At] = o[Ct] = o[ft] = o[gt] = o[Q] = o[lt] = o[bt] = o[_t] = o[pt] = o[Lt] = o[wt] = o[Nt] = o[Pt] = true;
o[dt] = o[H] = o[yt] = false;
function O(t, e, r, s, n, a) {
  var i, u = e & nt, h = e & it, Z = e & at;
  if (i !== void 0)
    return i;
  if (!yr(t))
    return t;
  var w = oa(t);
  if (w) {
    if (i = we(t), !u)
      return I_(t, i);
  } else {
    var b = rr(t), N = b == H || b == ct;
    if (rl(t))
      return D_(t, u);
    if (b == Q || b == q || N && !n) {
      if (i = h || N ? {} : z_(t), !u)
        return h ? Ee(t, je(i, t)) : Te(t, me(i, t));
    } else {
      if (!o[b])
        return n ? t : {};
      i = Je(t, b, u);
    }
  }
  a || (a = new ei());
  var P = a.get(t);
  if (P)
    return P;
  a.set(t, i), st(t) ? t.forEach(function(c) {
    i.add(O(c, e, r, c, t, a));
  }) : et(t) && t.forEach(function(c, f) {
    i.set(f, O(c, e, r, f, t, a));
  });
  var J = Z ? h ? Ae : q$1 : h ? Pd : M$1, F = w ? void 0 : J(t);
  return bn(F || t, function(c, f) {
    F && (f = c, c = t[f]), Mw(i, f, O(c, e, r, f, t, a));
  }), i;
}
function Ft(t, e) {
  return yn(e, function(r) {
    return t[r];
  });
}
function E(t) {
  return t == null ? [] : Ft(t, M$1(t));
}
function _(t) {
  return t === void 0;
}
var St = Jw(function(t) {
  return Xr(Hr(t, 1, Y_, true));
}), $t = "\0", l = "\0", G = "";
class X {
  constructor(e = {}) {
    this._isDirected = Object.prototype.hasOwnProperty.call(e, "directed") ? e.directed : true, this._isMultigraph = Object.prototype.hasOwnProperty.call(e, "multigraph") ? e.multigraph : false, this._isCompound = Object.prototype.hasOwnProperty.call(e, "compound") ? e.compound : false, this._label = void 0, this._defaultNodeLabelFn = Uw(void 0), this._defaultEdgeLabelFn = Uw(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[l] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  /* === Graph functions ========= */
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(e) {
    return this._label = e, this;
  }
  graph() {
    return this._label;
  }
  /* === Node functions ========== */
  setDefaultNodeLabel(e) {
    return tl(e) || (e = Uw(e)), this._defaultNodeLabelFn = e, this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return M$1(this._nodes);
  }
  sources() {
    var e = this;
    return qr(this.nodes(), function(r) {
      return wh(e._in[r]);
    });
  }
  sinks() {
    var e = this;
    return qr(this.nodes(), function(r) {
      return wh(e._out[r]);
    });
  }
  setNodes(e, r) {
    var s = arguments, n = this;
    return Zr(e, function(a) {
      s.length > 1 ? n.setNode(a, r) : n.setNode(a);
    }), this;
  }
  setNode(e, r) {
    return Object.prototype.hasOwnProperty.call(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = r), this) : (this._nodes[e] = arguments.length > 1 ? r : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = l, this._children[e] = {}, this._children[l][e] = true), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
  }
  node(e) {
    return this._nodes[e];
  }
  hasNode(e) {
    return Object.prototype.hasOwnProperty.call(this._nodes, e);
  }
  removeNode(e) {
    if (Object.prototype.hasOwnProperty.call(this._nodes, e)) {
      var r = (s) => this.removeEdge(this._edgeObjs[s]);
      delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], Zr(this.children(e), (s) => {
        this.setParent(s);
      }), delete this._children[e]), Zr(M$1(this._in[e]), r), delete this._in[e], delete this._preds[e], Zr(M$1(this._out[e]), r), delete this._out[e], delete this._sucs[e], --this._nodeCount;
    }
    return this;
  }
  setParent(e, r) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (_(r))
      r = l;
    else {
      r += "";
      for (var s = r; !_(s); s = this.parent(s))
        if (s === e)
          throw new Error("Setting " + r + " as parent of " + e + " would create a cycle");
      this.setNode(r);
    }
    return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = r, this._children[r][e] = true, this;
  }
  _removeFromParentsChildList(e) {
    delete this._children[this._parent[e]][e];
  }
  parent(e) {
    if (this._isCompound) {
      var r = this._parent[e];
      if (r !== l)
        return r;
    }
  }
  children(e) {
    if (_(e) && (e = l), this._isCompound) {
      var r = this._children[e];
      if (r)
        return M$1(r);
    } else {
      if (e === l)
        return this.nodes();
      if (this.hasNode(e))
        return [];
    }
  }
  predecessors(e) {
    var r = this._preds[e];
    if (r)
      return M$1(r);
  }
  successors(e) {
    var r = this._sucs[e];
    if (r)
      return M$1(r);
  }
  neighbors(e) {
    var r = this.predecessors(e);
    if (r)
      return St(r, this.successors(e));
  }
  isLeaf(e) {
    var r;
    return this.isDirected() ? r = this.successors(e) : r = this.neighbors(e), r.length === 0;
  }
  filterNodes(e) {
    var r = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    r.setGraph(this.graph());
    var s = this;
    Zr(this._nodes, function(i, u) {
      e(u) && r.setNode(u, i);
    }), Zr(this._edgeObjs, function(i) {
      r.hasNode(i.v) && r.hasNode(i.w) && r.setEdge(i, s.edge(i));
    });
    var n = {};
    function a(i) {
      var u = s.parent(i);
      return u === void 0 || r.hasNode(u) ? (n[i] = u, u) : u in n ? n[u] : a(u);
    }
    return this._isCompound && Zr(r.nodes(), function(i) {
      r.setParent(i, a(i));
    }), r;
  }
  /* === Edge functions ========== */
  setDefaultEdgeLabel(e) {
    return tl(e) || (e = Uw(e)), this._defaultEdgeLabelFn = e, this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return E(this._edgeObjs);
  }
  setPath(e, r) {
    var s = this, n = arguments;
    return Yr(e, function(a, i) {
      return n.length > 1 ? s.setEdge(a, i, r) : s.setEdge(a, i), i;
    }), this;
  }
  /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */
  setEdge() {
    var e, r, s, n, a = false, i = arguments[0];
    typeof i == "object" && i !== null && "v" in i ? (e = i.v, r = i.w, s = i.name, arguments.length === 2 && (n = arguments[1], a = true)) : (e = i, r = arguments[1], s = arguments[3], arguments.length > 2 && (n = arguments[2], a = true)), e = "" + e, r = "" + r, _(s) || (s = "" + s);
    var u = p(this._isDirected, e, r, s);
    if (Object.prototype.hasOwnProperty.call(this._edgeLabels, u))
      return a && (this._edgeLabels[u] = n), this;
    if (!_(s) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(e), this.setNode(r), this._edgeLabels[u] = a ? n : this._defaultEdgeLabelFn(e, r, s);
    var h = vt(this._isDirected, e, r, s);
    return e = h.v, r = h.w, Object.freeze(h), this._edgeObjs[u] = h, x(this._preds[r], e), x(this._sucs[e], r), this._in[r][u] = h, this._out[e][u] = h, this._edgeCount++, this;
  }
  edge(e, r, s) {
    var n = arguments.length === 1 ? A(this._isDirected, arguments[0]) : p(this._isDirected, e, r, s);
    return this._edgeLabels[n];
  }
  hasEdge(e, r, s) {
    var n = arguments.length === 1 ? A(this._isDirected, arguments[0]) : p(this._isDirected, e, r, s);
    return Object.prototype.hasOwnProperty.call(this._edgeLabels, n);
  }
  removeEdge(e, r, s) {
    var n = arguments.length === 1 ? A(this._isDirected, arguments[0]) : p(this._isDirected, e, r, s), a = this._edgeObjs[n];
    return a && (e = a.v, r = a.w, delete this._edgeLabels[n], delete this._edgeObjs[n], B(this._preds[r], e), B(this._sucs[e], r), delete this._in[r][n], delete this._out[e][n], this._edgeCount--), this;
  }
  inEdges(e, r) {
    var s = this._in[e];
    if (s) {
      var n = E(s);
      return r ? qr(n, function(a) {
        return a.v === r;
      }) : n;
    }
  }
  outEdges(e, r) {
    var s = this._out[e];
    if (s) {
      var n = E(s);
      return r ? qr(n, function(a) {
        return a.w === r;
      }) : n;
    }
  }
  nodeEdges(e, r) {
    var s = this.inEdges(e, r);
    if (s)
      return s.concat(this.outEdges(e, r));
  }
}
X.prototype._nodeCount = 0;
X.prototype._edgeCount = 0;
function x(t, e) {
  t[e] ? t[e]++ : t[e] = 1;
}
function B(t, e) {
  --t[e] || delete t[e];
}
function p(t, e, r, s) {
  var n = "" + e, a = "" + r;
  if (!t && n > a) {
    var i = n;
    n = a, a = i;
  }
  return n + G + a + G + (_(s) ? $t : s);
}
function vt(t, e, r, s) {
  var n = "" + e, a = "" + r;
  if (!t && n > a) {
    var i = n;
    n = a, a = i;
  }
  var u = { v: n, w: a };
  return s && (u.name = s), u;
}
function A(t, e) {
  return p(t, e.v, e.w, e.name);
}
export {
  E,
  O,
  X,
  _
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGgtQ1ZWTFRyaG4tc2h2UVFSNmouanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbWVybWFpZC1zdHJpbmcvZGlzdC9ncmFwaC1DVlZMVHJobi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhUCBhcyBULCBhUSBhcyBDLCBhUiBhcyB6LCBhUyBhcyBSLCBhVCBhcyBTLCBhVSBhcyBrLCBhViBhcyBWLCBhVyBhcyBMLCBhWCBhcyBLLCBhWSBhcyBqLCBhWiBhcyBlZSwgYV8gYXMgdGUsIGEkIGFzIHJlLCBiMCBhcyBzZSwgYjEgYXMgbmUsIGIyIGFzIGllLCBiMyBhcyBhZSwgYUUgYXMgb2UsIGI0IGFzIHVlLCBiNSBhcyBoZSwgYjYgYXMgeSwgYjcgYXMgJCwgYjggYXMgdiB9IGZyb20gXCIuL2VudHJ5LUIyVlgta3hhLmpzXCI7XG5pbXBvcnQgeyBrIGFzIGQsIGcgYXMgWSwgcyBhcyBkZSwgZSBhcyBjZSwgZiBhcyBmZSwgaCBhcyBnZSwgaiBhcyBsZSwgYyBhcyBiZSwgbCBhcyBfZSwgYiBhcyBwZSwgbSwgbiBhcyBnLCByIGFzIHllIH0gZnJvbSBcIi4vX2Jhc2VVbmlxLURiTHlrTGFhLmpzXCI7XG5mdW5jdGlvbiBtZSh0LCBlKSB7XG4gIHJldHVybiB0ICYmIFQoZSwgZChlKSwgdCk7XG59XG5mdW5jdGlvbiBqZSh0LCBlKSB7XG4gIHJldHVybiB0ICYmIFQoZSwgQyhlKSwgdCk7XG59XG5mdW5jdGlvbiBUZSh0LCBlKSB7XG4gIHJldHVybiBUKHQsIFkodCksIGUpO1xufVxudmFyIE9lID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scywgVyA9IE9lID8gZnVuY3Rpb24odCkge1xuICBmb3IgKHZhciBlID0gW107IHQ7IClcbiAgICBjZShlLCBZKHQpKSwgdCA9IHoodCk7XG4gIHJldHVybiBlO1xufSA6IGRlO1xuZnVuY3Rpb24gRWUodCwgZSkge1xuICByZXR1cm4gVCh0LCBXKHQpLCBlKTtcbn1cbmZ1bmN0aW9uIEFlKHQpIHtcbiAgcmV0dXJuIGZlKHQsIEMsIFcpO1xufVxudmFyIENlID0gT2JqZWN0LnByb3RvdHlwZSwgTGUgPSBDZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIHdlKHQpIHtcbiAgdmFyIGUgPSB0Lmxlbmd0aCwgciA9IG5ldyB0LmNvbnN0cnVjdG9yKGUpO1xuICByZXR1cm4gZSAmJiB0eXBlb2YgdFswXSA9PSBcInN0cmluZ1wiICYmIExlLmNhbGwodCwgXCJpbmRleFwiKSAmJiAoci5pbmRleCA9IHQuaW5kZXgsIHIuaW5wdXQgPSB0LmlucHV0KSwgcjtcbn1cbmZ1bmN0aW9uIE5lKHQsIGUpIHtcbiAgdmFyIHIgPSBlID8gUih0LmJ1ZmZlcikgOiB0LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0LmNvbnN0cnVjdG9yKHIsIHQuYnl0ZU9mZnNldCwgdC5ieXRlTGVuZ3RoKTtcbn1cbnZhciBQZSA9IC9cXHcqJC87XG5mdW5jdGlvbiBGZSh0KSB7XG4gIHZhciBlID0gbmV3IHQuY29uc3RydWN0b3IodC5zb3VyY2UsIFBlLmV4ZWModCkpO1xuICByZXR1cm4gZS5sYXN0SW5kZXggPSB0Lmxhc3RJbmRleCwgZTtcbn1cbnZhciBJID0gUyA/IFMucHJvdG90eXBlIDogdm9pZCAwLCBEID0gSSA/IEkudmFsdWVPZiA6IHZvaWQgMDtcbmZ1bmN0aW9uIFNlKHQpIHtcbiAgcmV0dXJuIEQgPyBPYmplY3QoRC5jYWxsKHQpKSA6IHt9O1xufVxudmFyICRlID0gXCJbb2JqZWN0IEJvb2xlYW5dXCIsIHZlID0gXCJbb2JqZWN0IERhdGVdXCIsIEllID0gXCJbb2JqZWN0IE1hcF1cIiwgRGUgPSBcIltvYmplY3QgTnVtYmVyXVwiLCBNZSA9IFwiW29iamVjdCBSZWdFeHBdXCIsIFVlID0gXCJbb2JqZWN0IFNldF1cIiwgR2UgPSBcIltvYmplY3QgU3RyaW5nXVwiLCB4ZSA9IFwiW29iamVjdCBTeW1ib2xdXCIsIEJlID0gXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiLCBSZSA9IFwiW29iamVjdCBEYXRhVmlld11cIiwgVmUgPSBcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiLCBLZSA9IFwiW29iamVjdCBGbG9hdDY0QXJyYXldXCIsIFllID0gXCJbb2JqZWN0IEludDhBcnJheV1cIiwgV2UgPSBcIltvYmplY3QgSW50MTZBcnJheV1cIiwgcWUgPSBcIltvYmplY3QgSW50MzJBcnJheV1cIiwgSGUgPSBcIltvYmplY3QgVWludDhBcnJheV1cIiwgUWUgPSBcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCIsIFhlID0gXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiLCBaZSA9IFwiW29iamVjdCBVaW50MzJBcnJheV1cIjtcbmZ1bmN0aW9uIEplKHQsIGUsIHIpIHtcbiAgdmFyIHMgPSB0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIEJlOlxuICAgICAgcmV0dXJuIFIodCk7XG4gICAgY2FzZSAkZTpcbiAgICBjYXNlIHZlOlxuICAgICAgcmV0dXJuIG5ldyBzKCt0KTtcbiAgICBjYXNlIFJlOlxuICAgICAgcmV0dXJuIE5lKHQsIHIpO1xuICAgIGNhc2UgVmU6XG4gICAgY2FzZSBLZTpcbiAgICBjYXNlIFllOlxuICAgIGNhc2UgV2U6XG4gICAgY2FzZSBxZTpcbiAgICBjYXNlIEhlOlxuICAgIGNhc2UgUWU6XG4gICAgY2FzZSBYZTpcbiAgICBjYXNlIFplOlxuICAgICAgcmV0dXJuIGsodCwgcik7XG4gICAgY2FzZSBJZTpcbiAgICAgIHJldHVybiBuZXcgcygpO1xuICAgIGNhc2UgRGU6XG4gICAgY2FzZSBHZTpcbiAgICAgIHJldHVybiBuZXcgcyh0KTtcbiAgICBjYXNlIE1lOlxuICAgICAgcmV0dXJuIEZlKHQpO1xuICAgIGNhc2UgVWU6XG4gICAgICByZXR1cm4gbmV3IHMoKTtcbiAgICBjYXNlIHhlOlxuICAgICAgcmV0dXJuIFNlKHQpO1xuICB9XG59XG52YXIgemUgPSBcIltvYmplY3QgTWFwXVwiO1xuZnVuY3Rpb24ga2UodCkge1xuICByZXR1cm4gVih0KSAmJiBMKHQpID09IHplO1xufVxudmFyIE0gPSBqICYmIGouaXNNYXAsIGV0ID0gTSA/IEsoTSkgOiBrZSwgdHQgPSBcIltvYmplY3QgU2V0XVwiO1xuZnVuY3Rpb24gcnQodCkge1xuICByZXR1cm4gVih0KSAmJiBMKHQpID09IHR0O1xufVxudmFyIFUgPSBqICYmIGouaXNTZXQsIHN0ID0gVSA/IEsoVSkgOiBydCwgbnQgPSAxLCBpdCA9IDIsIGF0ID0gNCwgcSA9IFwiW29iamVjdCBBcmd1bWVudHNdXCIsIG90ID0gXCJbb2JqZWN0IEFycmF5XVwiLCB1dCA9IFwiW29iamVjdCBCb29sZWFuXVwiLCBodCA9IFwiW29iamVjdCBEYXRlXVwiLCBkdCA9IFwiW29iamVjdCBFcnJvcl1cIiwgSCA9IFwiW29iamVjdCBGdW5jdGlvbl1cIiwgY3QgPSBcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsIGZ0ID0gXCJbb2JqZWN0IE1hcF1cIiwgZ3QgPSBcIltvYmplY3QgTnVtYmVyXVwiLCBRID0gXCJbb2JqZWN0IE9iamVjdF1cIiwgbHQgPSBcIltvYmplY3QgUmVnRXhwXVwiLCBidCA9IFwiW29iamVjdCBTZXRdXCIsIF90ID0gXCJbb2JqZWN0IFN0cmluZ11cIiwgcHQgPSBcIltvYmplY3QgU3ltYm9sXVwiLCB5dCA9IFwiW29iamVjdCBXZWFrTWFwXVwiLCBtdCA9IFwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIiwganQgPSBcIltvYmplY3QgRGF0YVZpZXddXCIsIFR0ID0gXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIiwgT3QgPSBcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiLCBFdCA9IFwiW29iamVjdCBJbnQ4QXJyYXldXCIsIEF0ID0gXCJbb2JqZWN0IEludDE2QXJyYXldXCIsIEN0ID0gXCJbb2JqZWN0IEludDMyQXJyYXldXCIsIEx0ID0gXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCIsIHd0ID0gXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiLCBOdCA9IFwiW29iamVjdCBVaW50MTZBcnJheV1cIiwgUHQgPSBcIltvYmplY3QgVWludDMyQXJyYXldXCIsIG8gPSB7fTtcbm9bcV0gPSBvW290XSA9IG9bbXRdID0gb1tqdF0gPSBvW3V0XSA9IG9baHRdID0gb1tUdF0gPSBvW090XSA9IG9bRXRdID0gb1tBdF0gPSBvW0N0XSA9IG9bZnRdID0gb1tndF0gPSBvW1FdID0gb1tsdF0gPSBvW2J0XSA9IG9bX3RdID0gb1twdF0gPSBvW0x0XSA9IG9bd3RdID0gb1tOdF0gPSBvW1B0XSA9ICEwO1xub1tkdF0gPSBvW0hdID0gb1t5dF0gPSAhMTtcbmZ1bmN0aW9uIE8odCwgZSwgciwgcywgbiwgYSkge1xuICB2YXIgaSwgdSA9IGUgJiBudCwgaCA9IGUgJiBpdCwgWiA9IGUgJiBhdDtcbiAgaWYgKGkgIT09IHZvaWQgMClcbiAgICByZXR1cm4gaTtcbiAgaWYgKCFlZSh0KSlcbiAgICByZXR1cm4gdDtcbiAgdmFyIHcgPSBvZSh0KTtcbiAgaWYgKHcpIHtcbiAgICBpZiAoaSA9IHdlKHQpLCAhdSlcbiAgICAgIHJldHVybiB0ZSh0LCBpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYiA9IEwodCksIE4gPSBiID09IEggfHwgYiA9PSBjdDtcbiAgICBpZiAocmUodCkpXG4gICAgICByZXR1cm4gc2UodCwgdSk7XG4gICAgaWYgKGIgPT0gUSB8fCBiID09IHEgfHwgTiAmJiAhbikge1xuICAgICAgaWYgKGkgPSBoIHx8IE4gPyB7fSA6IG5lKHQpLCAhdSlcbiAgICAgICAgcmV0dXJuIGggPyBFZSh0LCBqZShpLCB0KSkgOiBUZSh0LCBtZShpLCB0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghb1tiXSlcbiAgICAgICAgcmV0dXJuIG4gPyB0IDoge307XG4gICAgICBpID0gSmUodCwgYiwgdSk7XG4gICAgfVxuICB9XG4gIGEgfHwgKGEgPSBuZXcgaWUoKSk7XG4gIHZhciBQID0gYS5nZXQodCk7XG4gIGlmIChQKVxuICAgIHJldHVybiBQO1xuICBhLnNldCh0LCBpKSwgc3QodCkgPyB0LmZvckVhY2goZnVuY3Rpb24oYykge1xuICAgIGkuYWRkKE8oYywgZSwgciwgYywgdCwgYSkpO1xuICB9KSA6IGV0KHQpICYmIHQuZm9yRWFjaChmdW5jdGlvbihjLCBmKSB7XG4gICAgaS5zZXQoZiwgTyhjLCBlLCByLCBmLCB0LCBhKSk7XG4gIH0pO1xuICB2YXIgSiA9IFogPyBoID8gQWUgOiBnZSA6IGggPyBDIDogZCwgRiA9IHcgPyB2b2lkIDAgOiBKKHQpO1xuICByZXR1cm4gbGUoRiB8fCB0LCBmdW5jdGlvbihjLCBmKSB7XG4gICAgRiAmJiAoZiA9IGMsIGMgPSB0W2ZdKSwgYWUoaSwgZiwgTyhjLCBlLCByLCBmLCB0LCBhKSk7XG4gIH0pLCBpO1xufVxuZnVuY3Rpb24gRnQodCwgZSkge1xuICByZXR1cm4gYmUoZSwgZnVuY3Rpb24ocikge1xuICAgIHJldHVybiB0W3JdO1xuICB9KTtcbn1cbmZ1bmN0aW9uIEUodCkge1xuICByZXR1cm4gdCA9PSBudWxsID8gW10gOiBGdCh0LCBkKHQpKTtcbn1cbmZ1bmN0aW9uIF8odCkge1xuICByZXR1cm4gdCA9PT0gdm9pZCAwO1xufVxudmFyIFN0ID0gdWUoZnVuY3Rpb24odCkge1xuICByZXR1cm4gX2UocGUodCwgMSwgaGUsICEwKSk7XG59KSwgJHQgPSBcIlxcMFwiLCBsID0gXCJcXDBcIiwgRyA9IFwiXHUwMDAxXCI7XG5jbGFzcyBYIHtcbiAgY29uc3RydWN0b3IoZSA9IHt9KSB7XG4gICAgdGhpcy5faXNEaXJlY3RlZCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCBcImRpcmVjdGVkXCIpID8gZS5kaXJlY3RlZCA6ICEwLCB0aGlzLl9pc011bHRpZ3JhcGggPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgXCJtdWx0aWdyYXBoXCIpID8gZS5tdWx0aWdyYXBoIDogITEsIHRoaXMuX2lzQ29tcG91bmQgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgXCJjb21wb3VuZFwiKSA/IGUuY29tcG91bmQgOiAhMSwgdGhpcy5fbGFiZWwgPSB2b2lkIDAsIHRoaXMuX2RlZmF1bHROb2RlTGFiZWxGbiA9IHkodm9pZCAwKSwgdGhpcy5fZGVmYXVsdEVkZ2VMYWJlbEZuID0geSh2b2lkIDApLCB0aGlzLl9ub2RlcyA9IHt9LCB0aGlzLl9pc0NvbXBvdW5kICYmICh0aGlzLl9wYXJlbnQgPSB7fSwgdGhpcy5fY2hpbGRyZW4gPSB7fSwgdGhpcy5fY2hpbGRyZW5bbF0gPSB7fSksIHRoaXMuX2luID0ge30sIHRoaXMuX3ByZWRzID0ge30sIHRoaXMuX291dCA9IHt9LCB0aGlzLl9zdWNzID0ge30sIHRoaXMuX2VkZ2VPYmpzID0ge30sIHRoaXMuX2VkZ2VMYWJlbHMgPSB7fTtcbiAgfVxuICAvKiA9PT0gR3JhcGggZnVuY3Rpb25zID09PT09PT09PSAqL1xuICBpc0RpcmVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0RpcmVjdGVkO1xuICB9XG4gIGlzTXVsdGlncmFwaCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNNdWx0aWdyYXBoO1xuICB9XG4gIGlzQ29tcG91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQ29tcG91bmQ7XG4gIH1cbiAgc2V0R3JhcGgoZSkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbCA9IGUsIHRoaXM7XG4gIH1cbiAgZ3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG4gIC8qID09PSBOb2RlIGZ1bmN0aW9ucyA9PT09PT09PT09ICovXG4gIHNldERlZmF1bHROb2RlTGFiZWwoZSkge1xuICAgIHJldHVybiAkKGUpIHx8IChlID0geShlKSksIHRoaXMuX2RlZmF1bHROb2RlTGFiZWxGbiA9IGUsIHRoaXM7XG4gIH1cbiAgbm9kZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlQ291bnQ7XG4gIH1cbiAgbm9kZXMoKSB7XG4gICAgcmV0dXJuIGQodGhpcy5fbm9kZXMpO1xuICB9XG4gIHNvdXJjZXMoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHJldHVybiBtKHRoaXMubm9kZXMoKSwgZnVuY3Rpb24ocikge1xuICAgICAgcmV0dXJuIHYoZS5faW5bcl0pO1xuICAgIH0pO1xuICB9XG4gIHNpbmtzKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICByZXR1cm4gbSh0aGlzLm5vZGVzKCksIGZ1bmN0aW9uKHIpIHtcbiAgICAgIHJldHVybiB2KGUuX291dFtyXSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0Tm9kZXMoZSwgcikge1xuICAgIHZhciBzID0gYXJndW1lbnRzLCBuID0gdGhpcztcbiAgICByZXR1cm4gZyhlLCBmdW5jdGlvbihhKSB7XG4gICAgICBzLmxlbmd0aCA+IDEgPyBuLnNldE5vZGUoYSwgcikgOiBuLnNldE5vZGUoYSk7XG4gICAgfSksIHRoaXM7XG4gIH1cbiAgc2V0Tm9kZShlLCByKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLl9ub2RlcywgZSkgPyAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgKHRoaXMuX25vZGVzW2VdID0gciksIHRoaXMpIDogKHRoaXMuX25vZGVzW2VdID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyByIDogdGhpcy5fZGVmYXVsdE5vZGVMYWJlbEZuKGUpLCB0aGlzLl9pc0NvbXBvdW5kICYmICh0aGlzLl9wYXJlbnRbZV0gPSBsLCB0aGlzLl9jaGlsZHJlbltlXSA9IHt9LCB0aGlzLl9jaGlsZHJlbltsXVtlXSA9ICEwKSwgdGhpcy5faW5bZV0gPSB7fSwgdGhpcy5fcHJlZHNbZV0gPSB7fSwgdGhpcy5fb3V0W2VdID0ge30sIHRoaXMuX3N1Y3NbZV0gPSB7fSwgKyt0aGlzLl9ub2RlQ291bnQsIHRoaXMpO1xuICB9XG4gIG5vZGUoZSkge1xuICAgIHJldHVybiB0aGlzLl9ub2Rlc1tlXTtcbiAgfVxuICBoYXNOb2RlKGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX25vZGVzLCBlKTtcbiAgfVxuICByZW1vdmVOb2RlKGUpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX25vZGVzLCBlKSkge1xuICAgICAgdmFyIHIgPSAocykgPT4gdGhpcy5yZW1vdmVFZGdlKHRoaXMuX2VkZ2VPYmpzW3NdKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ub2Rlc1tlXSwgdGhpcy5faXNDb21wb3VuZCAmJiAodGhpcy5fcmVtb3ZlRnJvbVBhcmVudHNDaGlsZExpc3QoZSksIGRlbGV0ZSB0aGlzLl9wYXJlbnRbZV0sIGcodGhpcy5jaGlsZHJlbihlKSwgKHMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRQYXJlbnQocyk7XG4gICAgICB9KSwgZGVsZXRlIHRoaXMuX2NoaWxkcmVuW2VdKSwgZyhkKHRoaXMuX2luW2VdKSwgciksIGRlbGV0ZSB0aGlzLl9pbltlXSwgZGVsZXRlIHRoaXMuX3ByZWRzW2VdLCBnKGQodGhpcy5fb3V0W2VdKSwgciksIGRlbGV0ZSB0aGlzLl9vdXRbZV0sIGRlbGV0ZSB0aGlzLl9zdWNzW2VdLCAtLXRoaXMuX25vZGVDb3VudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UGFyZW50KGUsIHIpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ29tcG91bmQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0IHBhcmVudCBpbiBhIG5vbi1jb21wb3VuZCBncmFwaFwiKTtcbiAgICBpZiAoXyhyKSlcbiAgICAgIHIgPSBsO1xuICAgIGVsc2Uge1xuICAgICAgciArPSBcIlwiO1xuICAgICAgZm9yICh2YXIgcyA9IHI7ICFfKHMpOyBzID0gdGhpcy5wYXJlbnQocykpXG4gICAgICAgIGlmIChzID09PSBlKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNldHRpbmcgXCIgKyByICsgXCIgYXMgcGFyZW50IG9mIFwiICsgZSArIFwiIHdvdWxkIGNyZWF0ZSBhIGN5Y2xlXCIpO1xuICAgICAgdGhpcy5zZXROb2RlKHIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZXROb2RlKGUpLCB0aGlzLl9yZW1vdmVGcm9tUGFyZW50c0NoaWxkTGlzdChlKSwgdGhpcy5fcGFyZW50W2VdID0gciwgdGhpcy5fY2hpbGRyZW5bcl1bZV0gPSAhMCwgdGhpcztcbiAgfVxuICBfcmVtb3ZlRnJvbVBhcmVudHNDaGlsZExpc3QoZSkge1xuICAgIGRlbGV0ZSB0aGlzLl9jaGlsZHJlblt0aGlzLl9wYXJlbnRbZV1dW2VdO1xuICB9XG4gIHBhcmVudChlKSB7XG4gICAgaWYgKHRoaXMuX2lzQ29tcG91bmQpIHtcbiAgICAgIHZhciByID0gdGhpcy5fcGFyZW50W2VdO1xuICAgICAgaWYgKHIgIT09IGwpXG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICBjaGlsZHJlbihlKSB7XG4gICAgaWYgKF8oZSkgJiYgKGUgPSBsKSwgdGhpcy5faXNDb21wb3VuZCkge1xuICAgICAgdmFyIHIgPSB0aGlzLl9jaGlsZHJlbltlXTtcbiAgICAgIGlmIChyKVxuICAgICAgICByZXR1cm4gZChyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUgPT09IGwpXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzKCk7XG4gICAgICBpZiAodGhpcy5oYXNOb2RlKGUpKVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG4gIHByZWRlY2Vzc29ycyhlKSB7XG4gICAgdmFyIHIgPSB0aGlzLl9wcmVkc1tlXTtcbiAgICBpZiAocilcbiAgICAgIHJldHVybiBkKHIpO1xuICB9XG4gIHN1Y2Nlc3NvcnMoZSkge1xuICAgIHZhciByID0gdGhpcy5fc3Vjc1tlXTtcbiAgICBpZiAocilcbiAgICAgIHJldHVybiBkKHIpO1xuICB9XG4gIG5laWdoYm9ycyhlKSB7XG4gICAgdmFyIHIgPSB0aGlzLnByZWRlY2Vzc29ycyhlKTtcbiAgICBpZiAocilcbiAgICAgIHJldHVybiBTdChyLCB0aGlzLnN1Y2Nlc3NvcnMoZSkpO1xuICB9XG4gIGlzTGVhZihlKSB7XG4gICAgdmFyIHI7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXJlY3RlZCgpID8gciA9IHRoaXMuc3VjY2Vzc29ycyhlKSA6IHIgPSB0aGlzLm5laWdoYm9ycyhlKSwgci5sZW5ndGggPT09IDA7XG4gIH1cbiAgZmlsdGVyTm9kZXMoZSkge1xuICAgIHZhciByID0gbmV3IHRoaXMuY29uc3RydWN0b3Ioe1xuICAgICAgZGlyZWN0ZWQ6IHRoaXMuX2lzRGlyZWN0ZWQsXG4gICAgICBtdWx0aWdyYXBoOiB0aGlzLl9pc011bHRpZ3JhcGgsXG4gICAgICBjb21wb3VuZDogdGhpcy5faXNDb21wb3VuZFxuICAgIH0pO1xuICAgIHIuc2V0R3JhcGgodGhpcy5ncmFwaCgpKTtcbiAgICB2YXIgcyA9IHRoaXM7XG4gICAgZyh0aGlzLl9ub2RlcywgZnVuY3Rpb24oaSwgdSkge1xuICAgICAgZSh1KSAmJiByLnNldE5vZGUodSwgaSk7XG4gICAgfSksIGcodGhpcy5fZWRnZU9ianMsIGZ1bmN0aW9uKGkpIHtcbiAgICAgIHIuaGFzTm9kZShpLnYpICYmIHIuaGFzTm9kZShpLncpICYmIHIuc2V0RWRnZShpLCBzLmVkZ2UoaSkpO1xuICAgIH0pO1xuICAgIHZhciBuID0ge307XG4gICAgZnVuY3Rpb24gYShpKSB7XG4gICAgICB2YXIgdSA9IHMucGFyZW50KGkpO1xuICAgICAgcmV0dXJuIHUgPT09IHZvaWQgMCB8fCByLmhhc05vZGUodSkgPyAobltpXSA9IHUsIHUpIDogdSBpbiBuID8gblt1XSA6IGEodSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pc0NvbXBvdW5kICYmIGcoci5ub2RlcygpLCBmdW5jdGlvbihpKSB7XG4gICAgICByLnNldFBhcmVudChpLCBhKGkpKTtcbiAgICB9KSwgcjtcbiAgfVxuICAvKiA9PT0gRWRnZSBmdW5jdGlvbnMgPT09PT09PT09PSAqL1xuICBzZXREZWZhdWx0RWRnZUxhYmVsKGUpIHtcbiAgICByZXR1cm4gJChlKSB8fCAoZSA9IHkoZSkpLCB0aGlzLl9kZWZhdWx0RWRnZUxhYmVsRm4gPSBlLCB0aGlzO1xuICB9XG4gIGVkZ2VDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWRnZUNvdW50O1xuICB9XG4gIGVkZ2VzKCkge1xuICAgIHJldHVybiBFKHRoaXMuX2VkZ2VPYmpzKTtcbiAgfVxuICBzZXRQYXRoKGUsIHIpIHtcbiAgICB2YXIgcyA9IHRoaXMsIG4gPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIHllKGUsIGZ1bmN0aW9uKGEsIGkpIHtcbiAgICAgIHJldHVybiBuLmxlbmd0aCA+IDEgPyBzLnNldEVkZ2UoYSwgaSwgcikgOiBzLnNldEVkZ2UoYSwgaSksIGk7XG4gICAgfSksIHRoaXM7XG4gIH1cbiAgLypcbiAgICogc2V0RWRnZSh2LCB3LCBbdmFsdWUsIFtuYW1lXV0pXG4gICAqIHNldEVkZ2UoeyB2LCB3LCBbbmFtZV0gfSwgW3ZhbHVlXSlcbiAgICovXG4gIHNldEVkZ2UoKSB7XG4gICAgdmFyIGUsIHIsIHMsIG4sIGEgPSAhMSwgaSA9IGFyZ3VtZW50c1swXTtcbiAgICB0eXBlb2YgaSA9PSBcIm9iamVjdFwiICYmIGkgIT09IG51bGwgJiYgXCJ2XCIgaW4gaSA/IChlID0gaS52LCByID0gaS53LCBzID0gaS5uYW1lLCBhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIChuID0gYXJndW1lbnRzWzFdLCBhID0gITApKSA6IChlID0gaSwgciA9IGFyZ3VtZW50c1sxXSwgcyA9IGFyZ3VtZW50c1szXSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgKG4gPSBhcmd1bWVudHNbMl0sIGEgPSAhMCkpLCBlID0gXCJcIiArIGUsIHIgPSBcIlwiICsgciwgXyhzKSB8fCAocyA9IFwiXCIgKyBzKTtcbiAgICB2YXIgdSA9IHAodGhpcy5faXNEaXJlY3RlZCwgZSwgciwgcyk7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLl9lZGdlTGFiZWxzLCB1KSlcbiAgICAgIHJldHVybiBhICYmICh0aGlzLl9lZGdlTGFiZWxzW3VdID0gbiksIHRoaXM7XG4gICAgaWYgKCFfKHMpICYmICF0aGlzLl9pc011bHRpZ3JhcGgpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0IGEgbmFtZWQgZWRnZSB3aGVuIGlzTXVsdGlncmFwaCA9IGZhbHNlXCIpO1xuICAgIHRoaXMuc2V0Tm9kZShlKSwgdGhpcy5zZXROb2RlKHIpLCB0aGlzLl9lZGdlTGFiZWxzW3VdID0gYSA/IG4gOiB0aGlzLl9kZWZhdWx0RWRnZUxhYmVsRm4oZSwgciwgcyk7XG4gICAgdmFyIGggPSB2dCh0aGlzLl9pc0RpcmVjdGVkLCBlLCByLCBzKTtcbiAgICByZXR1cm4gZSA9IGgudiwgciA9IGgudywgT2JqZWN0LmZyZWV6ZShoKSwgdGhpcy5fZWRnZU9ianNbdV0gPSBoLCB4KHRoaXMuX3ByZWRzW3JdLCBlKSwgeCh0aGlzLl9zdWNzW2VdLCByKSwgdGhpcy5faW5bcl1bdV0gPSBoLCB0aGlzLl9vdXRbZV1bdV0gPSBoLCB0aGlzLl9lZGdlQ291bnQrKywgdGhpcztcbiAgfVxuICBlZGdlKGUsIHIsIHMpIHtcbiAgICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBBKHRoaXMuX2lzRGlyZWN0ZWQsIGFyZ3VtZW50c1swXSkgOiBwKHRoaXMuX2lzRGlyZWN0ZWQsIGUsIHIsIHMpO1xuICAgIHJldHVybiB0aGlzLl9lZGdlTGFiZWxzW25dO1xuICB9XG4gIGhhc0VkZ2UoZSwgciwgcykge1xuICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IEEodGhpcy5faXNEaXJlY3RlZCwgYXJndW1lbnRzWzBdKSA6IHAodGhpcy5faXNEaXJlY3RlZCwgZSwgciwgcyk7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLl9lZGdlTGFiZWxzLCBuKTtcbiAgfVxuICByZW1vdmVFZGdlKGUsIHIsIHMpIHtcbiAgICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBBKHRoaXMuX2lzRGlyZWN0ZWQsIGFyZ3VtZW50c1swXSkgOiBwKHRoaXMuX2lzRGlyZWN0ZWQsIGUsIHIsIHMpLCBhID0gdGhpcy5fZWRnZU9ianNbbl07XG4gICAgcmV0dXJuIGEgJiYgKGUgPSBhLnYsIHIgPSBhLncsIGRlbGV0ZSB0aGlzLl9lZGdlTGFiZWxzW25dLCBkZWxldGUgdGhpcy5fZWRnZU9ianNbbl0sIEIodGhpcy5fcHJlZHNbcl0sIGUpLCBCKHRoaXMuX3N1Y3NbZV0sIHIpLCBkZWxldGUgdGhpcy5faW5bcl1bbl0sIGRlbGV0ZSB0aGlzLl9vdXRbZV1bbl0sIHRoaXMuX2VkZ2VDb3VudC0tKSwgdGhpcztcbiAgfVxuICBpbkVkZ2VzKGUsIHIpIHtcbiAgICB2YXIgcyA9IHRoaXMuX2luW2VdO1xuICAgIGlmIChzKSB7XG4gICAgICB2YXIgbiA9IEUocyk7XG4gICAgICByZXR1cm4gciA/IG0obiwgZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gYS52ID09PSByO1xuICAgICAgfSkgOiBuO1xuICAgIH1cbiAgfVxuICBvdXRFZGdlcyhlLCByKSB7XG4gICAgdmFyIHMgPSB0aGlzLl9vdXRbZV07XG4gICAgaWYgKHMpIHtcbiAgICAgIHZhciBuID0gRShzKTtcbiAgICAgIHJldHVybiByID8gbShuLCBmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiBhLncgPT09IHI7XG4gICAgICB9KSA6IG47XG4gICAgfVxuICB9XG4gIG5vZGVFZGdlcyhlLCByKSB7XG4gICAgdmFyIHMgPSB0aGlzLmluRWRnZXMoZSwgcik7XG4gICAgaWYgKHMpXG4gICAgICByZXR1cm4gcy5jb25jYXQodGhpcy5vdXRFZGdlcyhlLCByKSk7XG4gIH1cbn1cblgucHJvdG90eXBlLl9ub2RlQ291bnQgPSAwO1xuWC5wcm90b3R5cGUuX2VkZ2VDb3VudCA9IDA7XG5mdW5jdGlvbiB4KHQsIGUpIHtcbiAgdFtlXSA/IHRbZV0rKyA6IHRbZV0gPSAxO1xufVxuZnVuY3Rpb24gQih0LCBlKSB7XG4gIC0tdFtlXSB8fCBkZWxldGUgdFtlXTtcbn1cbmZ1bmN0aW9uIHAodCwgZSwgciwgcykge1xuICB2YXIgbiA9IFwiXCIgKyBlLCBhID0gXCJcIiArIHI7XG4gIGlmICghdCAmJiBuID4gYSkge1xuICAgIHZhciBpID0gbjtcbiAgICBuID0gYSwgYSA9IGk7XG4gIH1cbiAgcmV0dXJuIG4gKyBHICsgYSArIEcgKyAoXyhzKSA/ICR0IDogcyk7XG59XG5mdW5jdGlvbiB2dCh0LCBlLCByLCBzKSB7XG4gIHZhciBuID0gXCJcIiArIGUsIGEgPSBcIlwiICsgcjtcbiAgaWYgKCF0ICYmIG4gPiBhKSB7XG4gICAgdmFyIGkgPSBuO1xuICAgIG4gPSBhLCBhID0gaTtcbiAgfVxuICB2YXIgdSA9IHsgdjogbiwgdzogYSB9O1xuICByZXR1cm4gcyAmJiAodS5uYW1lID0gcyksIHU7XG59XG5mdW5jdGlvbiBBKHQsIGUpIHtcbiAgcmV0dXJuIHAodCwgZS52LCBlLncsIGUubmFtZSk7XG59XG5leHBvcnQge1xuICBYIGFzIEcsXG4gIE8gYXMgYixcbiAgXyBhcyBpLFxuICBFIGFzIHZcbn07XG4iXSwibmFtZXMiOlsiVCIsImQiLCJDIiwiWSIsImNlIiwieiIsImRlIiwiZmUiLCJSIiwiUyIsImsiLCJWIiwiTCIsImoiLCJLIiwiZWUiLCJvZSIsInRlIiwicmUiLCJzZSIsIm5lIiwiaWUiLCJnZSIsImxlIiwiYWUiLCJiZSIsInVlIiwiX2UiLCJwZSIsImhlIiwieSIsIiQiLCJtIiwidiIsImciLCJ5ZSJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTLEdBQUcsR0FBRyxHQUFHO0FBQ2hCLFNBQU8sS0FBS0EsR0FBRSxHQUFHQyxJQUFFLENBQUMsR0FBRyxDQUFDO0FBQzFCO0FBQ0EsU0FBUyxHQUFHLEdBQUcsR0FBRztBQUNoQixTQUFPLEtBQUtELEdBQUUsR0FBR0UsR0FBRSxDQUFDLEdBQUcsQ0FBQztBQUMxQjtBQUNBLFNBQVMsR0FBRyxHQUFHLEdBQUc7QUFDaEIsU0FBT0Ys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
