import { p, N as cl, P as Dt, a3 as p2, i as Gh, F, bz as U$1, h as ht, g as Ay, e as Ly, r as Ey, s as Fy, d as $y, a as My, R as Nh, bA as Td, y as By } from "./SynchronicGraphPage-BCUlTIfr.js";
import { d } from "./chunk-QN33PNHL-Ct_6jMm2-DeYaAPW9.js";
import { t } from "./chunk-4BX2VUAB-XzHDrrtP-DjJOP13s.js";
import { G as Gk } from "./treemap-KMMF4GRG-Cs6X1cMg-BnKAMrwN.js";
import { n as nn } from "./defaultLocale-D7EN2tov-bX63LFCa.js";
import { h } from "./ordinal-B6-f3MAq-CMRnLSJI.js";
import "./QPage-Kpbzl6Fe.js";
import "./index-DfKBCAsA.js";
import "./QBtnToggle-CYZJXjN1.js";
import "./QBtnGroup-D--j0QkB.js";
import "./QToolbar-4-PFUiMq.js";
import "./export-file-lpTZqdHO.js";
import "./min-x5JjnDaq-BM0vDUCO.js";
import "./_baseUniq-DbLykLaa-C4mmozic.js";
import "./init-DjUOC4st-BkHeCwco.js";
function Le(t3) {
  var a = 0, l = t3.children, n = l && l.length;
  if (!n) a = 1;
  else for (; --n >= 0; ) a += l[n].value;
  t3.value = a;
}
function $e() {
  return this.eachAfter(Le);
}
function Ae(t3, a) {
  let l = -1;
  for (const n of this)
    t3.call(a, n, ++l, this);
  return this;
}
function Fe(t3, a) {
  for (var l = this, n = [l], o, s, d2 = -1; l = n.pop(); )
    if (t3.call(a, l, ++d2, this), o = l.children)
      for (s = o.length - 1; s >= 0; --s)
        n.push(o[s]);
  return this;
}
function ke(t3, a) {
  for (var l = this, n = [l], o = [], s, d2, h2, g = -1; l = n.pop(); )
    if (o.push(l), s = l.children)
      for (d2 = 0, h2 = s.length; d2 < h2; ++d2)
        n.push(s[d2]);
  for (; l = o.pop(); )
    t3.call(a, l, ++g, this);
  return this;
}
function Ne(t3, a) {
  let l = -1;
  for (const n of this)
    if (t3.call(a, n, ++l, this))
      return n;
}
function Me(t3) {
  return this.eachAfter(function(a) {
    for (var l = +t3(a.data) || 0, n = a.children, o = n && n.length; --o >= 0; ) l += n[o].value;
    a.value = l;
  });
}
function _e(t3) {
  return this.eachBefore(function(a) {
    a.children && a.children.sort(t3);
  });
}
function ze(t3) {
  for (var a = this, l = Ve(a, t3), n = [a]; a !== l; )
    a = a.parent, n.push(a);
  for (var o = n.length; t3 !== l; )
    n.splice(o, 0, t3), t3 = t3.parent;
  return n;
}
function Ve(t3, a) {
  if (t3 === a) return t3;
  var l = t3.ancestors(), n = a.ancestors(), o = null;
  for (t3 = l.pop(), a = n.pop(); t3 === a; )
    o = t3, t3 = l.pop(), a = n.pop();
  return o;
}
function De() {
  for (var t3 = this, a = [t3]; t3 = t3.parent; )
    a.push(t3);
  return a;
}
function Pe() {
  return Array.from(this);
}
function Be() {
  var t3 = [];
  return this.eachBefore(function(a) {
    a.children || t3.push(a);
  }), t3;
}
function Ee() {
  var t3 = this, a = [];
  return t3.each(function(l) {
    l !== t3 && a.push({ source: l.parent, target: l });
  }), a;
}
function* Re() {
  var t3 = this, a, l = [t3], n, o, s;
  do
    for (a = l.reverse(), l = []; t3 = a.pop(); )
      if (yield t3, n = t3.children)
        for (o = 0, s = n.length; o < s; ++o)
          l.push(n[o]);
  while (l.length);
}
function Q(t3, a) {
  t3 instanceof Map ? (t3 = [void 0, t3], a === void 0 && (a = Ie)) : a === void 0 && (a = He);
  for (var l = new U(t3), n, o = [l], s, d2, h2, g; n = o.pop(); )
    if ((d2 = a(n.data)) && (g = (d2 = Array.from(d2)).length))
      for (n.children = d2, h2 = g - 1; h2 >= 0; --h2)
        o.push(s = d2[h2] = new U(d2[h2])), s.parent = n, s.depth = n.depth + 1;
  return l.eachBefore(qe);
}
function We() {
  return Q(this).eachBefore(Oe);
}
function He(t3) {
  return t3.children;
}
function Ie(t3) {
  return Array.isArray(t3) ? t3[1] : null;
}
function Oe(t3) {
  t3.data.value !== void 0 && (t3.value = t3.data.value), t3.data = t3.data.data;
}
function qe(t3) {
  var a = 0;
  do
    t3.height = a;
  while ((t3 = t3.parent) && t3.height < ++a);
}
function U(t3) {
  this.data = t3, this.depth = this.height = 0, this.parent = null;
}
U.prototype = Q.prototype = {
  constructor: U,
  count: $e,
  each: Ae,
  eachAfter: ke,
  eachBefore: Fe,
  find: Ne,
  sum: Me,
  sort: _e,
  path: ze,
  ancestors: De,
  descendants: Pe,
  leaves: Be,
  links: Ee,
  copy: We,
  [Symbol.iterator]: Re
};
function Ge(t3) {
  if (typeof t3 != "function") throw new Error();
  return t3;
}
function q() {
  return 0;
}
function G(t3) {
  return function() {
    return t3;
  };
}
function Xe(t3) {
  t3.x0 = Math.round(t3.x0), t3.y0 = Math.round(t3.y0), t3.x1 = Math.round(t3.x1), t3.y1 = Math.round(t3.y1);
}
function je(t3, a, l, n, o) {
  for (var s = t3.children, d2, h2 = -1, g = s.length, c = t3.value && (n - a) / t3.value; ++h2 < g; )
    d2 = s[h2], d2.y0 = l, d2.y1 = o, d2.x0 = a, d2.x1 = a += d2.value * c;
}
function Ye(t3, a, l, n, o) {
  for (var s = t3.children, d2, h2 = -1, g = s.length, c = t3.value && (o - l) / t3.value; ++h2 < g; )
    d2 = s[h2], d2.x0 = a, d2.x1 = n, d2.y0 = l, d2.y1 = l += d2.value * c;
}
var Ue = (1 + Math.sqrt(5)) / 2;
function Ze(t3, a, l, n, o, s) {
  for (var d2 = [], h2 = a.children, g, c, u = 0, b = 0, r = h2.length, x, S, v = a.value, p3, m, N, k, V, R, M; u < r; ) {
    x = o - l, S = s - n;
    do
      p3 = h2[b++].value;
    while (!p3 && b < r);
    for (m = N = p3, R = Math.max(S / x, x / S) / (v * t3), M = p3 * p3 * R, V = Math.max(N / M, M / m); b < r; ++b) {
      if (p3 += c = h2[b].value, c < m && (m = c), c > N && (N = c), M = p3 * p3 * R, k = Math.max(N / M, M / m), k > V) {
        p3 -= c;
        break;
      }
      V = k;
    }
    d2.push(g = { value: p3, dice: x < S, children: h2.slice(u, b) }), g.dice ? je(g, l, n, o, v ? n += S * p3 / v : s) : Ye(g, l, n, v ? l += x * p3 / v : o, s), v -= p3, u = b;
  }
  return d2;
}
const Je = (function t2(a) {
  function l(n, o, s, d2, h2) {
    Ze(a, n, o, s, d2, h2);
  }
  return l.ratio = function(n) {
    return t2((n = +n) > 1 ? n : 1);
  }, l;
})(Ue);
function Ke() {
  var t3 = Je, a = false, l = 1, n = 1, o = [0], s = q, d2 = q, h2 = q, g = q, c = q;
  function u(r) {
    return r.x0 = r.y0 = 0, r.x1 = l, r.y1 = n, r.eachBefore(b), o = [0], a && r.eachBefore(Xe), r;
  }
  function b(r) {
    var x = o[r.depth], S = r.x0 + x, v = r.y0 + x, p3 = r.x1 - x, m = r.y1 - x;
    p3 < S && (S = p3 = (S + p3) / 2), m < v && (v = m = (v + m) / 2), r.x0 = S, r.y0 = v, r.x1 = p3, r.y1 = m, r.children && (x = o[r.depth + 1] = s(r) / 2, S += c(r) - x, v += d2(r) - x, p3 -= h2(r) - x, m -= g(r) - x, p3 < S && (S = p3 = (S + p3) / 2), m < v && (v = m = (v + m) / 2), t3(r, S, v, p3, m));
  }
  return u.round = function(r) {
    return arguments.length ? (a = !!r, u) : a;
  }, u.size = function(r) {
    return arguments.length ? (l = +r[0], n = +r[1], u) : [l, n];
  }, u.tile = function(r) {
    return arguments.length ? (t3 = Ge(r), u) : t3;
  }, u.padding = function(r) {
    return arguments.length ? u.paddingInner(r).paddingOuter(r) : u.paddingInner();
  }, u.paddingInner = function(r) {
    return arguments.length ? (s = typeof r == "function" ? r : G(+r), u) : s;
  }, u.paddingOuter = function(r) {
    return arguments.length ? u.paddingTop(r).paddingRight(r).paddingBottom(r).paddingLeft(r) : u.paddingTop();
  }, u.paddingTop = function(r) {
    return arguments.length ? (d2 = typeof r == "function" ? r : G(+r), u) : d2;
  }, u.paddingRight = function(r) {
    return arguments.length ? (h2 = typeof r == "function" ? r : G(+r), u) : h2;
  }, u.paddingBottom = function(r) {
    return arguments.length ? (g = typeof r == "function" ? r : G(+r), u) : g;
  }, u.paddingLeft = function(r) {
    return arguments.length ? (c = typeof r == "function" ? r : G(+r), u) : c;
  }, u;
}
var E, ne = (E = class {
  constructor() {
    this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = Ay, this.getAccTitle = Ly, this.setDiagramTitle = Ey, this.getDiagramTitle = Fy, this.getAccDescription = $y, this.setAccDescription = My;
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    const a = Nh, l = Dt();
    return cl({
      ...a.treemap,
      ...l.treemap ?? {}
    });
  }
  addNode(a, l) {
    this.nodes.push(a), this.levels.set(a, l), l === 0 && (this.outerNodes.push(a), this.root ??= a);
  }
  getRoot() {
    return { name: "", children: this.outerNodes };
  }
  addClass(a, l) {
    const n = this.classes.get(a) ?? { id: a, styles: [], textStyles: [] }, o = l.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    o && o.forEach((s) => {
      Td(s) && (n?.textStyles ? n.textStyles.push(s) : n.textStyles = [s]), n?.styles ? n.styles.push(s) : n.styles = [s];
    }), this.classes.set(a, n);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(a) {
    return this.classes.get(a)?.styles ?? [];
  }
  clear() {
    By(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
  }
}, p(E, "TreeMapDB"), E);
function le(t3) {
  if (!t3.length)
    return [];
  const a = [], l = [];
  return t3.forEach((n) => {
    const o = {
      name: n.name,
      children: n.type === "Leaf" ? void 0 : []
    };
    for (o.classSelector = n?.classSelector, n?.cssCompiledStyles && (o.cssCompiledStyles = [n.cssCompiledStyles]), n.type === "Leaf" && n.value !== void 0 && (o.value = n.value); l.length > 0 && l[l.length - 1].level >= n.level; )
      l.pop();
    if (l.length === 0)
      a.push(o);
    else {
      const s = l[l.length - 1].node;
      s.children ? s.children.push(o) : s.children = [o];
    }
    n.type !== "Leaf" && l.push({ node: o, level: n.level });
  }), a;
}
p(le, "buildHierarchy");
var Qe = /* @__PURE__ */ p((t$1, a) => {
  t(t$1, a);
  const l = [];
  for (const s of t$1.TreemapRows ?? [])
    s.$type === "ClassDefStatement" && a.addClass(s.className ?? "", s.styleText ?? "");
  for (const s of t$1.TreemapRows ?? []) {
    const d2 = s.item;
    if (!d2)
      continue;
    const h2 = s.indent ? parseInt(s.indent) : 0, g = et(d2), c = d2.classSelector ? a.getStylesForClass(d2.classSelector) : [], u = c.length > 0 ? c.join(";") : void 0, b = {
      level: h2,
      name: g,
      type: d2.$type,
      value: d2.value,
      classSelector: d2.classSelector,
      cssCompiledStyles: u
    };
    l.push(b);
  }
  const n = le(l), o = /* @__PURE__ */ p((s, d2) => {
    for (const h2 of s)
      a.addNode(h2, d2), h2.children && h2.children.length > 0 && o(h2.children, d2 + 1);
  }, "addNodesRecursively");
  o(n, 0);
}, "populate"), et = /* @__PURE__ */ p((t3) => t3.name ? String(t3.name) : "", "getItemName"), re = {
  // @ts-expect-error - TreeMapDB is not assignable to DiagramDB
  parser: { yy: void 0 },
  parse: /* @__PURE__ */ p(async (t3) => {
    try {
      const l = await Gk("treemap", t3);
      F.debug("Treemap AST:", l);
      const n = re.parser?.yy;
      if (!(n instanceof ne))
        throw new Error(
          "parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues."
        );
      Qe(l, n);
    } catch (a) {
      throw F.error("Error parsing treemap:", a), a;
    }
  }, "parse")
}, tt = 10, B = 10, X = 25, at = /* @__PURE__ */ p((t3, a, l, n) => {
  const o = n.db, s = o.getConfig(), d$1 = s.padding ?? tt, h$1 = o.getDiagramTitle(), g = o.getRoot(), { themeVariables: c } = Dt();
  if (!g)
    return;
  const u = h$1 ? 30 : 0, b = p2(a), r = s.nodeWidth ? s.nodeWidth * B : 960, x = s.nodeHeight ? s.nodeHeight * B : 500, S = r, v = x + u;
  b.attr("viewBox", `0 0 ${S} ${v}`), Gh(b, v, S, s.useMaxWidth);
  let p$1;
  try {
    const e = s.valueFormat || ",";
    if (e === "$0,0")
      p$1 = /* @__PURE__ */ p((i) => "$" + nn(",")(i), "valueFormat");
    else if (e.startsWith("$") && e.includes(",")) {
      const i = /\.\d+/.exec(e), f = i ? i[0] : "";
      p$1 = /* @__PURE__ */ p((C) => "$" + nn("," + f)(C), "valueFormat");
    } else if (e.startsWith("$")) {
      const i = e.substring(1);
      p$1 = /* @__PURE__ */ p((f) => "$" + nn(i || "")(f), "valueFormat");
    } else
      p$1 = nn(e);
  } catch (e) {
    F.error("Error creating format function:", e), p$1 = nn(",");
  }
  const m = h().range([
    "transparent",
    c.cScale0,
    c.cScale1,
    c.cScale2,
    c.cScale3,
    c.cScale4,
    c.cScale5,
    c.cScale6,
    c.cScale7,
    c.cScale8,
    c.cScale9,
    c.cScale10,
    c.cScale11
  ]), N = h().range([
    "transparent",
    c.cScalePeer0,
    c.cScalePeer1,
    c.cScalePeer2,
    c.cScalePeer3,
    c.cScalePeer4,
    c.cScalePeer5,
    c.cScalePeer6,
    c.cScalePeer7,
    c.cScalePeer8,
    c.cScalePeer9,
    c.cScalePeer10,
    c.cScalePeer11
  ]), k = h().range([
    c.cScaleLabel0,
    c.cScaleLabel1,
    c.cScaleLabel2,
    c.cScaleLabel3,
    c.cScaleLabel4,
    c.cScaleLabel5,
    c.cScaleLabel6,
    c.cScaleLabel7,
    c.cScaleLabel8,
    c.cScaleLabel9,
    c.cScaleLabel10,
    c.cScaleLabel11
  ]);
  h$1 && b.append("text").attr("x", S / 2).attr("y", u / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(h$1);
  const V = b.append("g").attr("transform", `translate(0, ${u})`).attr("class", "treemapContainer"), R = Q(g).sum((e) => e.value ?? 0).sort((e, i) => (i.value ?? 0) - (e.value ?? 0)), ee = Ke().size([r, x]).paddingTop(
    (e) => e.children && e.children.length > 0 ? X + B : 0
  ).paddingInner(d$1).paddingLeft((e) => e.children && e.children.length > 0 ? B : 0).paddingRight((e) => e.children && e.children.length > 0 ? B : 0).paddingBottom((e) => e.children && e.children.length > 0 ? B : 0).round(true)(R), se = ee.descendants().filter((e) => e.children && e.children.length > 0), W = V.selectAll(".treemapSection").data(se).enter().append("g").attr("class", "treemapSection").attr("transform", (e) => `translate(${e.x0},${e.y0})`);
  W.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", X).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", 0.6).attr("stroke-width", 0.6).attr("style", (e) => e.depth === 0 ? "display: none;" : ""), W.append("clipPath").attr("id", (e, i) => `clip-section-${a}-${i}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 12)).attr("height", X), W.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", (e, i) => `treemapSection section${i}`).attr("fill", (e) => m(e.data.name)).attr("fill-opacity", 0.6).attr("stroke", (e) => N(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", 0.4).attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const i = U$1({ cssCompiledStyles: e.data.cssCompiledStyles });
    return i.nodeStyles + ";" + i.borderStyles.join(";");
  }), W.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", X / 2).attr("dominant-baseline", "middle").text((e) => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const i = "dominant-baseline: middle; font-size: 12px; fill:" + k(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", f = U$1({ cssCompiledStyles: e.data.cssCompiledStyles });
    return i + f.labelStyles.replace("color:", "fill:");
  }).each(function(e) {
    if (e.depth === 0)
      return;
    const i = ht(this), f = e.data.name;
    i.text(f);
    const C = e.x1 - e.x0, L = 6;
    let $;
    s.showValues !== false && e.value ? $ = C - 10 - 30 - 10 - L : $ = C - L - 6;
    const A = Math.max(15, $), y = i.node();
    if (y.getComputedTextLength() > A) {
      let T = f;
      for (; T.length > 0; ) {
        if (T = f.substring(0, T.length - 1), T.length === 0) {
          i.text("..."), y.getComputedTextLength() > A && i.text("");
          break;
        }
        if (i.text(T + "..."), y.getComputedTextLength() <= A)
          break;
      }
    }
  }), s.showValues !== false && W.append("text").attr("class", "treemapSectionValue").attr("x", (e) => e.x1 - e.x0 - 10).attr("y", X / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e) => e.value ? p$1(e.value) : "").attr("font-style", "italic").attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const i = "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + k(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", f = U$1({ cssCompiledStyles: e.data.cssCompiledStyles });
    return i + f.labelStyles.replace("color:", "fill:");
  });
  const ie = ee.leaves(), j = V.selectAll(".treemapLeafGroup").data(ie).enter().append("g").attr("class", (e, i) => `treemapNode treemapLeafGroup leaf${i}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e) => `translate(${e.x0},${e.y0})`);
  j.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e) => e.parent ? m(e.parent.data.name) : m(e.data.name)).attr("style", (e) => U$1({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", 0.3).attr("stroke", (e) => e.parent ? m(e.parent.data.name) : m(e.data.name)).attr("stroke-width", 3), j.append("clipPath").attr("id", (e, i) => `clip-${a}-${i}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e) => Math.max(0, e.y1 - e.y0 - 4)), j.append("text").attr("class", "treemapLabel").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", (e) => (e.y1 - e.y0) / 2).attr("style", (e) => {
    const i = "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + k(e.data.name) + ";", f = U$1({ cssCompiledStyles: e.data.cssCompiledStyles });
    return i + f.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (e, i) => `url(#clip-${a}-${i})`).text((e) => e.data.name).each(function(e) {
    const i = ht(this), f = e.x1 - e.x0, C = e.y1 - e.y0, L = i.node(), $ = 4, D = f - 2 * $, A = C - 2 * $;
    if (D < 10 || A < 10) {
      i.style("display", "none");
      return;
    }
    let y = parseInt(i.style("font-size"), 10);
    const _ = 8, F2 = 28, T = 0.6, z = 6, H = 2;
    for (; L.getComputedTextLength() > D && y > _; )
      y--, i.style("font-size", `${y}px`);
    let I = Math.max(
      z,
      Math.min(F2, Math.round(y * T))
    ), Z = y + H + I;
    for (; Z > A && y > _ && (y--, I = Math.max(
      z,
      Math.min(F2, Math.round(y * T))
    ), !(I < z && y === _)); )
      i.style("font-size", `${y}px`), Z = y + H + I;
    i.style("font-size", `${y}px`), (L.getComputedTextLength() > D || y < _ || A < y) && i.style("display", "none");
  }), s.showValues !== false && j.append("text").attr("class", "treemapValue").attr("x", (i) => (i.x1 - i.x0) / 2).attr("y", function(i) {
    return (i.y1 - i.y0) / 2;
  }).attr("style", (i) => {
    const f = "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + k(i.data.name) + ";", C = U$1({ cssCompiledStyles: i.data.cssCompiledStyles });
    return f + C.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (i, f) => `url(#clip-${a}-${f})`).text((i) => i.value ? p$1(i.value) : "").each(function(i) {
    const f = ht(this), C = this.parentNode;
    if (!C) {
      f.style("display", "none");
      return;
    }
    const L = ht(C).select(".treemapLabel");
    if (L.empty() || L.style("display") === "none") {
      f.style("display", "none");
      return;
    }
    const $ = parseFloat(L.style("font-size")), D = 28, A = 0.6, y = 6, _ = 2, F2 = Math.max(
      y,
      Math.min(D, Math.round($ * A))
    );
    f.style("font-size", `${F2}px`);
    const z = (i.y1 - i.y0) / 2 + $ / 2 + _;
    f.attr("y", z);
    const H = i.x1 - i.x0, ce = i.y1 - i.y0 - 4, de = H - 8;
    f.node().getComputedTextLength() > de || z + F2 > ce || F2 < y ? f.style("display", "none") : f.style("display", null);
  });
  const oe = s.diagramPadding ?? 8;
  d(b, oe, "flowchart", s?.useMaxWidth || false);
}, "draw"), nt = /* @__PURE__ */ p(function(t3, a) {
  return a.db.getClasses();
}, "getClasses"), lt = { draw: at, getClasses: nt }, rt = {
  sectionStrokeColor: "black",
  sectionStrokeWidth: "1",
  sectionFillColor: "#efefef",
  leafStrokeColor: "black",
  leafStrokeWidth: "1",
  leafFillColor: "#efefef",
  labelColor: "black",
  labelFontSize: "12px",
  valueFontSize: "10px",
  valueColor: "black",
  titleColor: "black",
  titleFontSize: "14px"
}, st = /* @__PURE__ */ p(({
  treemap: t3
} = {}) => {
  const a = cl(rt, t3);
  return `
  .treemapNode.section {
    stroke: ${a.sectionStrokeColor};
    stroke-width: ${a.sectionStrokeWidth};
    fill: ${a.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${a.leafStrokeColor};
    stroke-width: ${a.leafStrokeWidth};
    fill: ${a.leafFillColor};
  }
  .treemapLabel {
    fill: ${a.labelColor};
    font-size: ${a.labelFontSize};
  }
  .treemapValue {
    fill: ${a.valueColor};
    font-size: ${a.valueFontSize};
  }
  .treemapTitle {
    fill: ${a.titleColor};
    font-size: ${a.titleFontSize};
  }
  `;
}, "getStyles"), it = st, gt = {
  parser: re,
  get db() {
    return new ne();
  },
  renderer: lt,
  styles: it
};
export {
  gt as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1QU002S0hYSy1CYlN3dkV6Ui0tdC1qdHZrTC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1tZXJtYWlkLXN0cmluZy9kaXN0L2RpYWdyYW0tUFNNNktIWEstQmJTd3ZFelIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyB3LCBEIGFzIHRlLCBFIGFzIGFlLCBIIGFzIGhlLCBlIGFzIHVlLCBsIGFzIEssIGI5IGFzIFAsIGQgYXMgWSwgYiBhcyBwZSwgYSBhcyBmZSwgcCBhcyBnZSwgcSBhcyBtZSwgZyBhcyB5ZSwgcyBhcyBTZSwgRiBhcyB2ZSwgYmEgYXMgeGUsIHkgYXMgYmUgfSBmcm9tIFwiLi9lbnRyeS1CMlZYLWt4YS5qc1wiO1xuaW1wb3J0IHsgcyBhcyB3ZSB9IGZyb20gXCIuL2NodW5rLVFOMzNQTkhMLUN0XzZqTW0yLmpzXCI7XG5pbXBvcnQgeyBwIGFzIENlIH0gZnJvbSBcIi4vY2h1bmstNEJYMlZVQUItWHpIRHJydFAuanNcIjtcbmltcG9ydCB7IHAgYXMgVGUgfSBmcm9tIFwiLi9tZXJtYWlkLXBhcnNlci5jb3JlLU5FbXVxUG8zLmpzXCI7XG5pbXBvcnQgeyBiIGFzIE8gfSBmcm9tIFwiLi9kZWZhdWx0TG9jYWxlLUQ3RU4ydG92LmpzXCI7XG5pbXBvcnQgeyBvIGFzIEogfSBmcm9tIFwiLi9vcmRpbmFsLUI2LWYzTUFxLmpzXCI7XG5mdW5jdGlvbiBMZSh0KSB7XG4gIHZhciBhID0gMCwgbCA9IHQuY2hpbGRyZW4sIG4gPSBsICYmIGwubGVuZ3RoO1xuICBpZiAoIW4pIGEgPSAxO1xuICBlbHNlIGZvciAoOyAtLW4gPj0gMDsgKSBhICs9IGxbbl0udmFsdWU7XG4gIHQudmFsdWUgPSBhO1xufVxuZnVuY3Rpb24gJGUoKSB7XG4gIHJldHVybiB0aGlzLmVhY2hBZnRlcihMZSk7XG59XG5mdW5jdGlvbiBBZSh0LCBhKSB7XG4gIGxldCBsID0gLTE7XG4gIGZvciAoY29uc3QgbiBvZiB0aGlzKVxuICAgIHQuY2FsbChhLCBuLCArK2wsIHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIEZlKHQsIGEpIHtcbiAgZm9yICh2YXIgbCA9IHRoaXMsIG4gPSBbbF0sIG8sIHMsIGQgPSAtMTsgbCA9IG4ucG9wKCk7IClcbiAgICBpZiAodC5jYWxsKGEsIGwsICsrZCwgdGhpcyksIG8gPSBsLmNoaWxkcmVuKVxuICAgICAgZm9yIChzID0gby5sZW5ndGggLSAxOyBzID49IDA7IC0tcylcbiAgICAgICAgbi5wdXNoKG9bc10pO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGtlKHQsIGEpIHtcbiAgZm9yICh2YXIgbCA9IHRoaXMsIG4gPSBbbF0sIG8gPSBbXSwgcywgZCwgaCwgZyA9IC0xOyBsID0gbi5wb3AoKTsgKVxuICAgIGlmIChvLnB1c2gobCksIHMgPSBsLmNoaWxkcmVuKVxuICAgICAgZm9yIChkID0gMCwgaCA9IHMubGVuZ3RoOyBkIDwgaDsgKytkKVxuICAgICAgICBuLnB1c2goc1tkXSk7XG4gIGZvciAoOyBsID0gby5wb3AoKTsgKVxuICAgIHQuY2FsbChhLCBsLCArK2csIHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIE5lKHQsIGEpIHtcbiAgbGV0IGwgPSAtMTtcbiAgZm9yIChjb25zdCBuIG9mIHRoaXMpXG4gICAgaWYgKHQuY2FsbChhLCBuLCArK2wsIHRoaXMpKVxuICAgICAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBNZSh0KSB7XG4gIHJldHVybiB0aGlzLmVhY2hBZnRlcihmdW5jdGlvbihhKSB7XG4gICAgZm9yICh2YXIgbCA9ICt0KGEuZGF0YSkgfHwgMCwgbiA9IGEuY2hpbGRyZW4sIG8gPSBuICYmIG4ubGVuZ3RoOyAtLW8gPj0gMDsgKSBsICs9IG5bb10udmFsdWU7XG4gICAgYS52YWx1ZSA9IGw7XG4gIH0pO1xufVxuZnVuY3Rpb24gX2UodCkge1xuICByZXR1cm4gdGhpcy5lYWNoQmVmb3JlKGZ1bmN0aW9uKGEpIHtcbiAgICBhLmNoaWxkcmVuICYmIGEuY2hpbGRyZW4uc29ydCh0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiB6ZSh0KSB7XG4gIGZvciAodmFyIGEgPSB0aGlzLCBsID0gVmUoYSwgdCksIG4gPSBbYV07IGEgIT09IGw7IClcbiAgICBhID0gYS5wYXJlbnQsIG4ucHVzaChhKTtcbiAgZm9yICh2YXIgbyA9IG4ubGVuZ3RoOyB0ICE9PSBsOyApXG4gICAgbi5zcGxpY2UobywgMCwgdCksIHQgPSB0LnBhcmVudDtcbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBWZSh0LCBhKSB7XG4gIGlmICh0ID09PSBhKSByZXR1cm4gdDtcbiAgdmFyIGwgPSB0LmFuY2VzdG9ycygpLCBuID0gYS5hbmNlc3RvcnMoKSwgbyA9IG51bGw7XG4gIGZvciAodCA9IGwucG9wKCksIGEgPSBuLnBvcCgpOyB0ID09PSBhOyApXG4gICAgbyA9IHQsIHQgPSBsLnBvcCgpLCBhID0gbi5wb3AoKTtcbiAgcmV0dXJuIG87XG59XG5mdW5jdGlvbiBEZSgpIHtcbiAgZm9yICh2YXIgdCA9IHRoaXMsIGEgPSBbdF07IHQgPSB0LnBhcmVudDsgKVxuICAgIGEucHVzaCh0KTtcbiAgcmV0dXJuIGE7XG59XG5mdW5jdGlvbiBQZSgpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG59XG5mdW5jdGlvbiBCZSgpIHtcbiAgdmFyIHQgPSBbXTtcbiAgcmV0dXJuIHRoaXMuZWFjaEJlZm9yZShmdW5jdGlvbihhKSB7XG4gICAgYS5jaGlsZHJlbiB8fCB0LnB1c2goYSk7XG4gIH0pLCB0O1xufVxuZnVuY3Rpb24gRWUoKSB7XG4gIHZhciB0ID0gdGhpcywgYSA9IFtdO1xuICByZXR1cm4gdC5lYWNoKGZ1bmN0aW9uKGwpIHtcbiAgICBsICE9PSB0ICYmIGEucHVzaCh7IHNvdXJjZTogbC5wYXJlbnQsIHRhcmdldDogbCB9KTtcbiAgfSksIGE7XG59XG5mdW5jdGlvbiogUmUoKSB7XG4gIHZhciB0ID0gdGhpcywgYSwgbCA9IFt0XSwgbiwgbywgcztcbiAgZG9cbiAgICBmb3IgKGEgPSBsLnJldmVyc2UoKSwgbCA9IFtdOyB0ID0gYS5wb3AoKTsgKVxuICAgICAgaWYgKHlpZWxkIHQsIG4gPSB0LmNoaWxkcmVuKVxuICAgICAgICBmb3IgKG8gPSAwLCBzID0gbi5sZW5ndGg7IG8gPCBzOyArK28pXG4gICAgICAgICAgbC5wdXNoKG5bb10pO1xuICB3aGlsZSAobC5sZW5ndGgpO1xufVxuZnVuY3Rpb24gUSh0LCBhKSB7XG4gIHQgaW5zdGFuY2VvZiBNYXAgPyAodCA9IFt2b2lkIDAsIHRdLCBhID09PSB2b2lkIDAgJiYgKGEgPSBJZSkpIDogYSA9PT0gdm9pZCAwICYmIChhID0gSGUpO1xuICBmb3IgKHZhciBsID0gbmV3IFUodCksIG4sIG8gPSBbbF0sIHMsIGQsIGgsIGc7IG4gPSBvLnBvcCgpOyApXG4gICAgaWYgKChkID0gYShuLmRhdGEpKSAmJiAoZyA9IChkID0gQXJyYXkuZnJvbShkKSkubGVuZ3RoKSlcbiAgICAgIGZvciAobi5jaGlsZHJlbiA9IGQsIGggPSBnIC0gMTsgaCA+PSAwOyAtLWgpXG4gICAgICAgIG8ucHVzaChzID0gZFtoXSA9IG5ldyBVKGRbaF0pKSwgcy5wYXJlbnQgPSBuLCBzLmRlcHRoID0gbi5kZXB0aCArIDE7XG4gIHJldHVybiBsLmVhY2hCZWZvcmUocWUpO1xufVxuZnVuY3Rpb24gV2UoKSB7XG4gIHJldHVybiBRKHRoaXMpLmVhY2hCZWZvcmUoT2UpO1xufVxuZnVuY3Rpb24gSGUodCkge1xuICByZXR1cm4gdC5jaGlsZHJlbjtcbn1cbmZ1bmN0aW9uIEllKHQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodCkgPyB0WzFdIDogbnVsbDtcbn1cbmZ1bmN0aW9uIE9lKHQpIHtcbiAgdC5kYXRhLnZhbHVlICE9PSB2b2lkIDAgJiYgKHQudmFsdWUgPSB0LmRhdGEudmFsdWUpLCB0LmRhdGEgPSB0LmRhdGEuZGF0YTtcbn1cbmZ1bmN0aW9uIHFlKHQpIHtcbiAgdmFyIGEgPSAwO1xuICBkb1xuICAgIHQuaGVpZ2h0ID0gYTtcbiAgd2hpbGUgKCh0ID0gdC5wYXJlbnQpICYmIHQuaGVpZ2h0IDwgKythKTtcbn1cbmZ1bmN0aW9uIFUodCkge1xuICB0aGlzLmRhdGEgPSB0LCB0aGlzLmRlcHRoID0gdGhpcy5oZWlnaHQgPSAwLCB0aGlzLnBhcmVudCA9IG51bGw7XG59XG5VLnByb3RvdHlwZSA9IFEucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVSxcbiAgY291bnQ6ICRlLFxuICBlYWNoOiBBZSxcbiAgZWFjaEFmdGVyOiBrZSxcbiAgZWFjaEJlZm9yZTogRmUsXG4gIGZpbmQ6IE5lLFxuICBzdW06IE1lLFxuICBzb3J0OiBfZSxcbiAgcGF0aDogemUsXG4gIGFuY2VzdG9yczogRGUsXG4gIGRlc2NlbmRhbnRzOiBQZSxcbiAgbGVhdmVzOiBCZSxcbiAgbGlua3M6IEVlLFxuICBjb3B5OiBXZSxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IFJlXG59O1xuZnVuY3Rpb24gR2UodCkge1xuICBpZiAodHlwZW9mIHQgIT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBxKCkge1xuICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIEcodCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH07XG59XG5mdW5jdGlvbiBYZSh0KSB7XG4gIHQueDAgPSBNYXRoLnJvdW5kKHQueDApLCB0LnkwID0gTWF0aC5yb3VuZCh0LnkwKSwgdC54MSA9IE1hdGgucm91bmQodC54MSksIHQueTEgPSBNYXRoLnJvdW5kKHQueTEpO1xufVxuZnVuY3Rpb24gamUodCwgYSwgbCwgbiwgbykge1xuICBmb3IgKHZhciBzID0gdC5jaGlsZHJlbiwgZCwgaCA9IC0xLCBnID0gcy5sZW5ndGgsIGMgPSB0LnZhbHVlICYmIChuIC0gYSkgLyB0LnZhbHVlOyArK2ggPCBnOyApXG4gICAgZCA9IHNbaF0sIGQueTAgPSBsLCBkLnkxID0gbywgZC54MCA9IGEsIGQueDEgPSBhICs9IGQudmFsdWUgKiBjO1xufVxuZnVuY3Rpb24gWWUodCwgYSwgbCwgbiwgbykge1xuICBmb3IgKHZhciBzID0gdC5jaGlsZHJlbiwgZCwgaCA9IC0xLCBnID0gcy5sZW5ndGgsIGMgPSB0LnZhbHVlICYmIChvIC0gbCkgLyB0LnZhbHVlOyArK2ggPCBnOyApXG4gICAgZCA9IHNbaF0sIGQueDAgPSBhLCBkLngxID0gbiwgZC55MCA9IGwsIGQueTEgPSBsICs9IGQudmFsdWUgKiBjO1xufVxudmFyIFVlID0gKDEgKyBNYXRoLnNxcnQoNSkpIC8gMjtcbmZ1bmN0aW9uIFplKHQsIGEsIGwsIG4sIG8sIHMpIHtcbiAgZm9yICh2YXIgZCA9IFtdLCBoID0gYS5jaGlsZHJlbiwgZywgYywgdSA9IDAsIGIgPSAwLCByID0gaC5sZW5ndGgsIHgsIFMsIHYgPSBhLnZhbHVlLCBwLCBtLCBOLCBrLCBWLCBSLCBNOyB1IDwgcjsgKSB7XG4gICAgeCA9IG8gLSBsLCBTID0gcyAtIG47XG4gICAgZG9cbiAgICAgIHAgPSBoW2IrK10udmFsdWU7XG4gICAgd2hpbGUgKCFwICYmIGIgPCByKTtcbiAgICBmb3IgKG0gPSBOID0gcCwgUiA9IE1hdGgubWF4KFMgLyB4LCB4IC8gUykgLyAodiAqIHQpLCBNID0gcCAqIHAgKiBSLCBWID0gTWF0aC5tYXgoTiAvIE0sIE0gLyBtKTsgYiA8IHI7ICsrYikge1xuICAgICAgaWYgKHAgKz0gYyA9IGhbYl0udmFsdWUsIGMgPCBtICYmIChtID0gYyksIGMgPiBOICYmIChOID0gYyksIE0gPSBwICogcCAqIFIsIGsgPSBNYXRoLm1heChOIC8gTSwgTSAvIG0pLCBrID4gVikge1xuICAgICAgICBwIC09IGM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgViA9IGs7XG4gICAgfVxuICAgIGQucHVzaChnID0geyB2YWx1ZTogcCwgZGljZTogeCA8IFMsIGNoaWxkcmVuOiBoLnNsaWNlKHUsIGIpIH0pLCBnLmRpY2UgPyBqZShnLCBsLCBuLCBvLCB2ID8gbiArPSBTICogcCAvIHYgOiBzKSA6IFllKGcsIGwsIG4sIHYgPyBsICs9IHggKiBwIC8gdiA6IG8sIHMpLCB2IC09IHAsIHUgPSBiO1xuICB9XG4gIHJldHVybiBkO1xufVxuY29uc3QgSmUgPSAoZnVuY3Rpb24gdChhKSB7XG4gIGZ1bmN0aW9uIGwobiwgbywgcywgZCwgaCkge1xuICAgIFplKGEsIG4sIG8sIHMsIGQsIGgpO1xuICB9XG4gIHJldHVybiBsLnJhdGlvID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiB0KChuID0gK24pID4gMSA/IG4gOiAxKTtcbiAgfSwgbDtcbn0pKFVlKTtcbmZ1bmN0aW9uIEtlKCkge1xuICB2YXIgdCA9IEplLCBhID0gITEsIGwgPSAxLCBuID0gMSwgbyA9IFswXSwgcyA9IHEsIGQgPSBxLCBoID0gcSwgZyA9IHEsIGMgPSBxO1xuICBmdW5jdGlvbiB1KHIpIHtcbiAgICByZXR1cm4gci54MCA9IHIueTAgPSAwLCByLngxID0gbCwgci55MSA9IG4sIHIuZWFjaEJlZm9yZShiKSwgbyA9IFswXSwgYSAmJiByLmVhY2hCZWZvcmUoWGUpLCByO1xuICB9XG4gIGZ1bmN0aW9uIGIocikge1xuICAgIHZhciB4ID0gb1tyLmRlcHRoXSwgUyA9IHIueDAgKyB4LCB2ID0gci55MCArIHgsIHAgPSByLngxIC0geCwgbSA9IHIueTEgLSB4O1xuICAgIHAgPCBTICYmIChTID0gcCA9IChTICsgcCkgLyAyKSwgbSA8IHYgJiYgKHYgPSBtID0gKHYgKyBtKSAvIDIpLCByLngwID0gUywgci55MCA9IHYsIHIueDEgPSBwLCByLnkxID0gbSwgci5jaGlsZHJlbiAmJiAoeCA9IG9bci5kZXB0aCArIDFdID0gcyhyKSAvIDIsIFMgKz0gYyhyKSAtIHgsIHYgKz0gZChyKSAtIHgsIHAgLT0gaChyKSAtIHgsIG0gLT0gZyhyKSAtIHgsIHAgPCBTICYmIChTID0gcCA9IChTICsgcCkgLyAyKSwgbSA8IHYgJiYgKHYgPSBtID0gKHYgKyBtKSAvIDIpLCB0KHIsIFMsIHYsIHAsIG0pKTtcbiAgfVxuICByZXR1cm4gdS5yb3VuZCA9IGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhID0gISFyLCB1KSA6IGE7XG4gIH0sIHUuc2l6ZSA9IGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChsID0gK3JbMF0sIG4gPSArclsxXSwgdSkgOiBbbCwgbl07XG4gIH0sIHUudGlsZSA9IGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0ID0gR2UociksIHUpIDogdDtcbiAgfSwgdS5wYWRkaW5nID0gZnVuY3Rpb24ocikge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdS5wYWRkaW5nSW5uZXIocikucGFkZGluZ091dGVyKHIpIDogdS5wYWRkaW5nSW5uZXIoKTtcbiAgfSwgdS5wYWRkaW5nSW5uZXIgPSBmdW5jdGlvbihyKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocyA9IHR5cGVvZiByID09IFwiZnVuY3Rpb25cIiA/IHIgOiBHKCtyKSwgdSkgOiBzO1xuICB9LCB1LnBhZGRpbmdPdXRlciA9IGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHUucGFkZGluZ1RvcChyKS5wYWRkaW5nUmlnaHQocikucGFkZGluZ0JvdHRvbShyKS5wYWRkaW5nTGVmdChyKSA6IHUucGFkZGluZ1RvcCgpO1xuICB9LCB1LnBhZGRpbmdUb3AgPSBmdW5jdGlvbihyKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZCA9IHR5cGVvZiByID09IFwiZnVuY3Rpb25cIiA/IHIgOiBHKCtyKSwgdSkgOiBkO1xuICB9LCB1LnBhZGRpbmdSaWdodCA9IGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChoID0gdHlwZW9mIHIgPT0gXCJmdW5jdGlvblwiID8gciA6IEcoK3IpLCB1KSA6IGg7XG4gIH0sIHUucGFkZGluZ0JvdHRvbSA9IGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChnID0gdHlwZW9mIHIgPT0gXCJmdW5jdGlvblwiID8gciA6IEcoK3IpLCB1KSA6IGc7XG4gIH0sIHUucGFkZGluZ0xlZnQgPSBmdW5jdGlvbihyKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYyA9IHR5cGVvZiByID09IFwiZnVuY3Rpb25cIiA/IHIgOiBHKCtyKSwgdSkgOiBjO1xuICB9LCB1O1xufVxudmFyIEUsIG5lID0gKEUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubm9kZXMgPSBbXSwgdGhpcy5sZXZlbHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB0aGlzLm91dGVyTm9kZXMgPSBbXSwgdGhpcy5jbGFzc2VzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgdGhpcy5zZXRBY2NUaXRsZSA9IHBlLCB0aGlzLmdldEFjY1RpdGxlID0gZmUsIHRoaXMuc2V0RGlhZ3JhbVRpdGxlID0gZ2UsIHRoaXMuZ2V0RGlhZ3JhbVRpdGxlID0gbWUsIHRoaXMuZ2V0QWNjRGVzY3JpcHRpb24gPSB5ZSwgdGhpcy5zZXRBY2NEZXNjcmlwdGlvbiA9IFNlO1xuICB9XG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG4gIGdldENvbmZpZygpIHtcbiAgICBjb25zdCBhID0gdmUsIGwgPSBhZSgpO1xuICAgIHJldHVybiB0ZSh7XG4gICAgICAuLi5hLnRyZWVtYXAsXG4gICAgICAuLi5sLnRyZWVtYXAgPz8ge31cbiAgICB9KTtcbiAgfVxuICBhZGROb2RlKGEsIGwpIHtcbiAgICB0aGlzLm5vZGVzLnB1c2goYSksIHRoaXMubGV2ZWxzLnNldChhLCBsKSwgbCA9PT0gMCAmJiAodGhpcy5vdXRlck5vZGVzLnB1c2goYSksIHRoaXMucm9vdCA/Pz0gYSk7XG4gIH1cbiAgZ2V0Um9vdCgpIHtcbiAgICByZXR1cm4geyBuYW1lOiBcIlwiLCBjaGlsZHJlbjogdGhpcy5vdXRlck5vZGVzIH07XG4gIH1cbiAgYWRkQ2xhc3MoYSwgbCkge1xuICAgIGNvbnN0IG4gPSB0aGlzLmNsYXNzZXMuZ2V0KGEpID8/IHsgaWQ6IGEsIHN0eWxlczogW10sIHRleHRTdHlsZXM6IFtdIH0sIG8gPSBsLnJlcGxhY2UoL1xcXFwsL2csIFwiwqfCp8KnXCIpLnJlcGxhY2UoLywvZywgXCI7XCIpLnJlcGxhY2UoL8KnwqfCpy9nLCBcIixcIikuc3BsaXQoXCI7XCIpO1xuICAgIG8gJiYgby5mb3JFYWNoKChzKSA9PiB7XG4gICAgICB4ZShzKSAmJiAobj8udGV4dFN0eWxlcyA/IG4udGV4dFN0eWxlcy5wdXNoKHMpIDogbi50ZXh0U3R5bGVzID0gW3NdKSwgbj8uc3R5bGVzID8gbi5zdHlsZXMucHVzaChzKSA6IG4uc3R5bGVzID0gW3NdO1xuICAgIH0pLCB0aGlzLmNsYXNzZXMuc2V0KGEsIG4pO1xuICB9XG4gIGdldENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NlcztcbiAgfVxuICBnZXRTdHlsZXNGb3JDbGFzcyhhKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3Nlcy5nZXQoYSk/LnN0eWxlcyA/PyBbXTtcbiAgfVxuICBjbGVhcigpIHtcbiAgICBiZSgpLCB0aGlzLm5vZGVzID0gW10sIHRoaXMubGV2ZWxzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgdGhpcy5vdXRlck5vZGVzID0gW10sIHRoaXMuY2xhc3NlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIHRoaXMucm9vdCA9IHZvaWQgMDtcbiAgfVxufSwgdyhFLCBcIlRyZWVNYXBEQlwiKSwgRSk7XG5mdW5jdGlvbiBsZSh0KSB7XG4gIGlmICghdC5sZW5ndGgpXG4gICAgcmV0dXJuIFtdO1xuICBjb25zdCBhID0gW10sIGwgPSBbXTtcbiAgcmV0dXJuIHQuZm9yRWFjaCgobikgPT4ge1xuICAgIGNvbnN0IG8gPSB7XG4gICAgICBuYW1lOiBuLm5hbWUsXG4gICAgICBjaGlsZHJlbjogbi50eXBlID09PSBcIkxlYWZcIiA/IHZvaWQgMCA6IFtdXG4gICAgfTtcbiAgICBmb3IgKG8uY2xhc3NTZWxlY3RvciA9IG4/LmNsYXNzU2VsZWN0b3IsIG4/LmNzc0NvbXBpbGVkU3R5bGVzICYmIChvLmNzc0NvbXBpbGVkU3R5bGVzID0gW24uY3NzQ29tcGlsZWRTdHlsZXNdKSwgbi50eXBlID09PSBcIkxlYWZcIiAmJiBuLnZhbHVlICE9PSB2b2lkIDAgJiYgKG8udmFsdWUgPSBuLnZhbHVlKTsgbC5sZW5ndGggPiAwICYmIGxbbC5sZW5ndGggLSAxXS5sZXZlbCA+PSBuLmxldmVsOyApXG4gICAgICBsLnBvcCgpO1xuICAgIGlmIChsLmxlbmd0aCA9PT0gMClcbiAgICAgIGEucHVzaChvKTtcbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IHMgPSBsW2wubGVuZ3RoIC0gMV0ubm9kZTtcbiAgICAgIHMuY2hpbGRyZW4gPyBzLmNoaWxkcmVuLnB1c2gobykgOiBzLmNoaWxkcmVuID0gW29dO1xuICAgIH1cbiAgICBuLnR5cGUgIT09IFwiTGVhZlwiICYmIGwucHVzaCh7IG5vZGU6IG8sIGxldmVsOiBuLmxldmVsIH0pO1xuICB9KSwgYTtcbn1cbncobGUsIFwiYnVpbGRIaWVyYXJjaHlcIik7XG52YXIgUWUgPSAvKiBAX19QVVJFX18gKi8gdygodCwgYSkgPT4ge1xuICBDZSh0LCBhKTtcbiAgY29uc3QgbCA9IFtdO1xuICBmb3IgKGNvbnN0IHMgb2YgdC5UcmVlbWFwUm93cyA/PyBbXSlcbiAgICBzLiR0eXBlID09PSBcIkNsYXNzRGVmU3RhdGVtZW50XCIgJiYgYS5hZGRDbGFzcyhzLmNsYXNzTmFtZSA/PyBcIlwiLCBzLnN0eWxlVGV4dCA/PyBcIlwiKTtcbiAgZm9yIChjb25zdCBzIG9mIHQuVHJlZW1hcFJvd3MgPz8gW10pIHtcbiAgICBjb25zdCBkID0gcy5pdGVtO1xuICAgIGlmICghZClcbiAgICAgIGNvbnRpbnVlO1xuICAgIGNvbnN0IGggPSBzLmluZGVudCA/IHBhcnNlSW50KHMuaW5kZW50KSA6IDAsIGcgPSBldChkKSwgYyA9IGQuY2xhc3NTZWxlY3RvciA/IGEuZ2V0U3R5bGVzRm9yQ2xhc3MoZC5jbGFzc1NlbGVjdG9yKSA6IFtdLCB1ID0gYy5sZW5ndGggPiAwID8gYy5qb2luKFwiO1wiKSA6IHZvaWQgMCwgYiA9IHtcbiAgICAgIGxldmVsOiBoLFxuICAgICAgbmFtZTogZyxcbiAgICAgIHR5cGU6IGQuJHR5cGUsXG4gICAgICB2YWx1ZTogZC52YWx1ZSxcbiAgICAgIGNsYXNzU2VsZWN0b3I6IGQuY2xhc3NTZWxlY3RvcixcbiAgICAgIGNzc0NvbXBpbGVkU3R5bGVzOiB1XG4gICAgfTtcbiAgICBsLnB1c2goYik7XG4gIH1cbiAgY29uc3QgbiA9IGxlKGwpLCBvID0gLyogQF9fUFVSRV9fICovIHcoKHMsIGQpID0+IHtcbiAgICBmb3IgKGNvbnN0IGggb2YgcylcbiAgICAgIGEuYWRkTm9kZShoLCBkKSwgaC5jaGlsZHJlbiAmJiBoLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgbyhoLmNoaWxkcmVuLCBkICsgMSk7XG4gIH0sIFwiYWRkTm9kZXNSZWN1cnNpdmVseVwiKTtcbiAgbyhuLCAwKTtcbn0sIFwicG9wdWxhdGVcIiksIGV0ID0gLyogQF9fUFVSRV9fICovIHcoKHQpID0+IHQubmFtZSA/IFN0cmluZyh0Lm5hbWUpIDogXCJcIiwgXCJnZXRJdGVtTmFtZVwiKSwgcmUgPSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUcmVlTWFwREIgaXMgbm90IGFzc2lnbmFibGUgdG8gRGlhZ3JhbURCXG4gIHBhcnNlcjogeyB5eTogdm9pZCAwIH0sXG4gIHBhcnNlOiAvKiBAX19QVVJFX18gKi8gdyhhc3luYyAodCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsID0gYXdhaXQgVGUoXCJ0cmVlbWFwXCIsIHQpO1xuICAgICAgSy5kZWJ1ZyhcIlRyZWVtYXAgQVNUOlwiLCBsKTtcbiAgICAgIGNvbnN0IG4gPSByZS5wYXJzZXI/Lnl5O1xuICAgICAgaWYgKCEobiBpbnN0YW5jZW9mIG5lKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwicGFyc2VyLnBhcnNlcj8ueXkgd2FzIG5vdCBhIFRyZWVtYXBEQi4gVGhpcyBpcyBkdWUgdG8gYSBidWcgd2l0aGluIE1lcm1haWQsIHBsZWFzZSByZXBvcnQgdGhpcyBpc3N1ZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbWVybWFpZC1qcy9tZXJtYWlkL2lzc3Vlcy5cIlxuICAgICAgICApO1xuICAgICAgUWUobCwgbik7XG4gICAgfSBjYXRjaCAoYSkge1xuICAgICAgdGhyb3cgSy5lcnJvcihcIkVycm9yIHBhcnNpbmcgdHJlZW1hcDpcIiwgYSksIGE7XG4gICAgfVxuICB9LCBcInBhcnNlXCIpXG59LCB0dCA9IDEwLCBCID0gMTAsIFggPSAyNSwgYXQgPSAvKiBAX19QVVJFX18gKi8gdygodCwgYSwgbCwgbikgPT4ge1xuICBjb25zdCBvID0gbi5kYiwgcyA9IG8uZ2V0Q29uZmlnKCksIGQgPSBzLnBhZGRpbmcgPz8gdHQsIGggPSBvLmdldERpYWdyYW1UaXRsZSgpLCBnID0gby5nZXRSb290KCksIHsgdGhlbWVWYXJpYWJsZXM6IGMgfSA9IGFlKCk7XG4gIGlmICghZylcbiAgICByZXR1cm47XG4gIGNvbnN0IHUgPSBoID8gMzAgOiAwLCBiID0gaGUoYSksIHIgPSBzLm5vZGVXaWR0aCA/IHMubm9kZVdpZHRoICogQiA6IDk2MCwgeCA9IHMubm9kZUhlaWdodCA/IHMubm9kZUhlaWdodCAqIEIgOiA1MDAsIFMgPSByLCB2ID0geCArIHU7XG4gIGIuYXR0cihcInZpZXdCb3hcIiwgYDAgMCAke1N9ICR7dn1gKSwgdWUoYiwgdiwgUywgcy51c2VNYXhXaWR0aCk7XG4gIGxldCBwO1xuICB0cnkge1xuICAgIGNvbnN0IGUgPSBzLnZhbHVlRm9ybWF0IHx8IFwiLFwiO1xuICAgIGlmIChlID09PSBcIiQwLDBcIilcbiAgICAgIHAgPSAvKiBAX19QVVJFX18gKi8gdygoaSkgPT4gXCIkXCIgKyBPKFwiLFwiKShpKSwgXCJ2YWx1ZUZvcm1hdFwiKTtcbiAgICBlbHNlIGlmIChlLnN0YXJ0c1dpdGgoXCIkXCIpICYmIGUuaW5jbHVkZXMoXCIsXCIpKSB7XG4gICAgICBjb25zdCBpID0gL1xcLlxcZCsvLmV4ZWMoZSksIGYgPSBpID8gaVswXSA6IFwiXCI7XG4gICAgICBwID0gLyogQF9fUFVSRV9fICovIHcoKEMpID0+IFwiJFwiICsgTyhcIixcIiArIGYpKEMpLCBcInZhbHVlRm9ybWF0XCIpO1xuICAgIH0gZWxzZSBpZiAoZS5zdGFydHNXaXRoKFwiJFwiKSkge1xuICAgICAgY29uc3QgaSA9IGUuc3Vic3RyaW5nKDEpO1xuICAgICAgcCA9IC8qIEBfX1BVUkVfXyAqLyB3KChmKSA9PiBcIiRcIiArIE8oaSB8fCBcIlwiKShmKSwgXCJ2YWx1ZUZvcm1hdFwiKTtcbiAgICB9IGVsc2VcbiAgICAgIHAgPSBPKGUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgSy5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGZvcm1hdCBmdW5jdGlvbjpcIiwgZSksIHAgPSBPKFwiLFwiKTtcbiAgfVxuICBjb25zdCBtID0gSigpLnJhbmdlKFtcbiAgICBcInRyYW5zcGFyZW50XCIsXG4gICAgYy5jU2NhbGUwLFxuICAgIGMuY1NjYWxlMSxcbiAgICBjLmNTY2FsZTIsXG4gICAgYy5jU2NhbGUzLFxuICAgIGMuY1NjYWxlNCxcbiAgICBjLmNTY2FsZTUsXG4gICAgYy5jU2NhbGU2LFxuICAgIGMuY1NjYWxlNyxcbiAgICBjLmNTY2FsZTgsXG4gICAgYy5jU2NhbGU5LFxuICAgIGMuY1NjYWxlMTAsXG4gICAgYy5jU2NhbGUxMVxuICBdKSwgTiA9IEooKS5yYW5nZShbXG4gICAgXCJ0cmFuc3BhcmVudFwiLFxuICAgIGMuY1NjYWxlUGVlcjAsXG4gICAgYy5jU2NhbGVQZWVyMSxcbiAgICBjLmNTY2FsZVBlZXIyLFxuICAgIGMuY1NjYWxlUGVlcjMsXG4gICAgYy5jU2NhbGVQZWVyNCxcbiAgICBjLmNTY2FsZVBlZXI1LFxuICAgIGMuY1NjYWxlUGVlcjYsXG4gICAgYy5jU2NhbGVQZWVyNyxcbiAgICBjLmNTY2FsZVBlZXI4LFxuICAgIGMuY1NjYWxlUGVlcjksXG4gICAgYy5jU2NhbGVQZWVyMTAsXG4gICAgYy5jU2NhbGVQZWVyMTFcbiAgXSksIGsgPSBKKCkucmFuZ2UoW1xuICAgIGMuY1NjYWxlTGFiZWwwLFxuICAgIGMuY1NjYWxlTGFiZWwxLFxuICAgIGMuY1NjYWxlTGFiZWwyLFxuICAgIGMuY1NjYWxlTGFiZWwzLFxuICAgIGMuY1NjYWxlTGFiZWw0LFxuICAgIGMuY1NjYWxlTGFiZWw1LFxuICAgIGMuY1NjYWxlTGFiZWw2LFxuICAgIGMuY1NjYWxlTGFiZWw3LFxuICAgIGMuY1NjYWxlTGFiZWw4LFxuICAgIGMuY1NjYWxlTGFiZWw5LFxuICAgIGMuY1NjYWxlTGFiZWwxMCxcbiAgICBjLmNTY2FsZUxhYmVsMTFcbiAgXSk7XG4gIGggJiYgYi5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIFMgLyAyKS5hdHRyKFwieVwiLCB1IC8gMikuYXR0cihcImNsYXNzXCIsIFwidHJlZW1hcFRpdGxlXCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIikudGV4dChoKTtcbiAgY29uc3QgViA9IGIuYXBwZW5kKFwiZ1wiKS5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHt1fSlgKS5hdHRyKFwiY2xhc3NcIiwgXCJ0cmVlbWFwQ29udGFpbmVyXCIpLCBSID0gUShnKS5zdW0oKGUpID0+IGUudmFsdWUgPz8gMCkuc29ydCgoZSwgaSkgPT4gKGkudmFsdWUgPz8gMCkgLSAoZS52YWx1ZSA/PyAwKSksIGVlID0gS2UoKS5zaXplKFtyLCB4XSkucGFkZGluZ1RvcChcbiAgICAoZSkgPT4gZS5jaGlsZHJlbiAmJiBlLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyBYICsgQiA6IDBcbiAgKS5wYWRkaW5nSW5uZXIoZCkucGFkZGluZ0xlZnQoKGUpID0+IGUuY2hpbGRyZW4gJiYgZS5jaGlsZHJlbi5sZW5ndGggPiAwID8gQiA6IDApLnBhZGRpbmdSaWdodCgoZSkgPT4gZS5jaGlsZHJlbiAmJiBlLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyBCIDogMCkucGFkZGluZ0JvdHRvbSgoZSkgPT4gZS5jaGlsZHJlbiAmJiBlLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyBCIDogMCkucm91bmQoITApKFIpLCBzZSA9IGVlLmRlc2NlbmRhbnRzKCkuZmlsdGVyKChlKSA9PiBlLmNoaWxkcmVuICYmIGUuY2hpbGRyZW4ubGVuZ3RoID4gMCksIFcgPSBWLnNlbGVjdEFsbChcIi50cmVlbWFwU2VjdGlvblwiKS5kYXRhKHNlKS5lbnRlcigpLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidHJlZW1hcFNlY3Rpb25cIikuYXR0cihcInRyYW5zZm9ybVwiLCAoZSkgPT4gYHRyYW5zbGF0ZSgke2UueDB9LCR7ZS55MH0pYCk7XG4gIFcuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwid2lkdGhcIiwgKGUpID0+IGUueDEgLSBlLngwKS5hdHRyKFwiaGVpZ2h0XCIsIFgpLmF0dHIoXCJjbGFzc1wiLCBcInRyZWVtYXBTZWN0aW9uSGVhZGVyXCIpLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKS5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuNikuYXR0cihcInN0cm9rZS13aWR0aFwiLCAwLjYpLmF0dHIoXCJzdHlsZVwiLCAoZSkgPT4gZS5kZXB0aCA9PT0gMCA/IFwiZGlzcGxheTogbm9uZTtcIiA6IFwiXCIpLCBXLmFwcGVuZChcImNsaXBQYXRoXCIpLmF0dHIoXCJpZFwiLCAoZSwgaSkgPT4gYGNsaXAtc2VjdGlvbi0ke2F9LSR7aX1gKS5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ3aWR0aFwiLCAoZSkgPT4gTWF0aC5tYXgoMCwgZS54MSAtIGUueDAgLSAxMikpLmF0dHIoXCJoZWlnaHRcIiwgWCksIFcuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwid2lkdGhcIiwgKGUpID0+IGUueDEgLSBlLngwKS5hdHRyKFwiaGVpZ2h0XCIsIChlKSA9PiBlLnkxIC0gZS55MCkuYXR0cihcImNsYXNzXCIsIChlLCBpKSA9PiBgdHJlZW1hcFNlY3Rpb24gc2VjdGlvbiR7aX1gKS5hdHRyKFwiZmlsbFwiLCAoZSkgPT4gbShlLmRhdGEubmFtZSkpLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC42KS5hdHRyKFwic3Ryb2tlXCIsIChlKSA9PiBOKGUuZGF0YS5uYW1lKSkuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKS5hdHRyKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC40KS5hdHRyKFwic3R5bGVcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5kZXB0aCA9PT0gMClcbiAgICAgIHJldHVybiBcImRpc3BsYXk6IG5vbmU7XCI7XG4gICAgY29uc3QgaSA9IFAoeyBjc3NDb21waWxlZFN0eWxlczogZS5kYXRhLmNzc0NvbXBpbGVkU3R5bGVzIH0pO1xuICAgIHJldHVybiBpLm5vZGVTdHlsZXMgKyBcIjtcIiArIGkuYm9yZGVyU3R5bGVzLmpvaW4oXCI7XCIpO1xuICB9KSwgVy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJjbGFzc1wiLCBcInRyZWVtYXBTZWN0aW9uTGFiZWxcIikuYXR0cihcInhcIiwgNikuYXR0cihcInlcIiwgWCAvIDIpLmF0dHIoXCJkb21pbmFudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS50ZXh0KChlKSA9PiBlLmRlcHRoID09PSAwID8gXCJcIiA6IGUuZGF0YS5uYW1lKS5hdHRyKFwiZm9udC13ZWlnaHRcIiwgXCJib2xkXCIpLmF0dHIoXCJzdHlsZVwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmRlcHRoID09PSAwKVxuICAgICAgcmV0dXJuIFwiZGlzcGxheTogbm9uZTtcIjtcbiAgICBjb25zdCBpID0gXCJkb21pbmFudC1iYXNlbGluZTogbWlkZGxlOyBmb250LXNpemU6IDEycHg7IGZpbGw6XCIgKyBrKGUuZGF0YS5uYW1lKSArIFwiOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcIiwgZiA9IFAoeyBjc3NDb21waWxlZFN0eWxlczogZS5kYXRhLmNzc0NvbXBpbGVkU3R5bGVzIH0pO1xuICAgIHJldHVybiBpICsgZi5sYWJlbFN0eWxlcy5yZXBsYWNlKFwiY29sb3I6XCIsIFwiZmlsbDpcIik7XG4gIH0pLmVhY2goZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLmRlcHRoID09PSAwKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGkgPSBZKHRoaXMpLCBmID0gZS5kYXRhLm5hbWU7XG4gICAgaS50ZXh0KGYpO1xuICAgIGNvbnN0IEMgPSBlLngxIC0gZS54MCwgTCA9IDY7XG4gICAgbGV0ICQ7XG4gICAgcy5zaG93VmFsdWVzICE9PSAhMSAmJiBlLnZhbHVlID8gJCA9IEMgLSAxMCAtIDMwIC0gMTAgLSBMIDogJCA9IEMgLSBMIC0gNjtcbiAgICBjb25zdCBBID0gTWF0aC5tYXgoMTUsICQpLCB5ID0gaS5ub2RlKCk7XG4gICAgaWYgKHkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkgPiBBKSB7XG4gICAgICBsZXQgVCA9IGY7XG4gICAgICBmb3IgKDsgVC5sZW5ndGggPiAwOyApIHtcbiAgICAgICAgaWYgKFQgPSBmLnN1YnN0cmluZygwLCBULmxlbmd0aCAtIDEpLCBULmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGkudGV4dChcIi4uLlwiKSwgeS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSA+IEEgJiYgaS50ZXh0KFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpLnRleHQoVCArIFwiLi4uXCIpLCB5LmdldENvbXB1dGVkVGV4dExlbmd0aCgpIDw9IEEpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KSwgcy5zaG93VmFsdWVzICE9PSAhMSAmJiBXLmFwcGVuZChcInRleHRcIikuYXR0cihcImNsYXNzXCIsIFwidHJlZW1hcFNlY3Rpb25WYWx1ZVwiKS5hdHRyKFwieFwiLCAoZSkgPT4gZS54MSAtIGUueDAgLSAxMCkuYXR0cihcInlcIiwgWCAvIDIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIikudGV4dCgoZSkgPT4gZS52YWx1ZSA/IHAoZS52YWx1ZSkgOiBcIlwiKS5hdHRyKFwiZm9udC1zdHlsZVwiLCBcIml0YWxpY1wiKS5hdHRyKFwic3R5bGVcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5kZXB0aCA9PT0gMClcbiAgICAgIHJldHVybiBcImRpc3BsYXk6IG5vbmU7XCI7XG4gICAgY29uc3QgaSA9IFwidGV4dC1hbmNob3I6IGVuZDsgZG9taW5hbnQtYmFzZWxpbmU6IG1pZGRsZTsgZm9udC1zaXplOiAxMHB4OyBmaWxsOlwiICsgayhlLmRhdGEubmFtZSkgKyBcIjsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XCIsIGYgPSBQKHsgY3NzQ29tcGlsZWRTdHlsZXM6IGUuZGF0YS5jc3NDb21waWxlZFN0eWxlcyB9KTtcbiAgICByZXR1cm4gaSArIGYubGFiZWxTdHlsZXMucmVwbGFjZShcImNvbG9yOlwiLCBcImZpbGw6XCIpO1xuICB9KTtcbiAgY29uc3QgaWUgPSBlZS5sZWF2ZXMoKSwgaiA9IFYuc2VsZWN0QWxsKFwiLnRyZWVtYXBMZWFmR3JvdXBcIikuZGF0YShpZSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCAoZSwgaSkgPT4gYHRyZWVtYXBOb2RlIHRyZWVtYXBMZWFmR3JvdXAgbGVhZiR7aX0ke2UuZGF0YS5jbGFzc1NlbGVjdG9yID8gYCAke2UuZGF0YS5jbGFzc1NlbGVjdG9yfWAgOiBcIlwifXhgKS5hdHRyKFwidHJhbnNmb3JtXCIsIChlKSA9PiBgdHJhbnNsYXRlKCR7ZS54MH0sJHtlLnkwfSlgKTtcbiAgai5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ3aWR0aFwiLCAoZSkgPT4gZS54MSAtIGUueDApLmF0dHIoXCJoZWlnaHRcIiwgKGUpID0+IGUueTEgLSBlLnkwKS5hdHRyKFwiY2xhc3NcIiwgXCJ0cmVlbWFwTGVhZlwiKS5hdHRyKFwiZmlsbFwiLCAoZSkgPT4gZS5wYXJlbnQgPyBtKGUucGFyZW50LmRhdGEubmFtZSkgOiBtKGUuZGF0YS5uYW1lKSkuYXR0cihcInN0eWxlXCIsIChlKSA9PiBQKHsgY3NzQ29tcGlsZWRTdHlsZXM6IGUuZGF0YS5jc3NDb21waWxlZFN0eWxlcyB9KS5ub2RlU3R5bGVzKS5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuMykuYXR0cihcInN0cm9rZVwiLCAoZSkgPT4gZS5wYXJlbnQgPyBtKGUucGFyZW50LmRhdGEubmFtZSkgOiBtKGUuZGF0YS5uYW1lKSkuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKSwgai5hcHBlbmQoXCJjbGlwUGF0aFwiKS5hdHRyKFwiaWRcIiwgKGUsIGkpID0+IGBjbGlwLSR7YX0tJHtpfWApLmFwcGVuZChcInJlY3RcIikuYXR0cihcIndpZHRoXCIsIChlKSA9PiBNYXRoLm1heCgwLCBlLngxIC0gZS54MCAtIDQpKS5hdHRyKFwiaGVpZ2h0XCIsIChlKSA9PiBNYXRoLm1heCgwLCBlLnkxIC0gZS55MCAtIDQpKSwgai5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJjbGFzc1wiLCBcInRyZWVtYXBMYWJlbFwiKS5hdHRyKFwieFwiLCAoZSkgPT4gKGUueDEgLSBlLngwKSAvIDIpLmF0dHIoXCJ5XCIsIChlKSA9PiAoZS55MSAtIGUueTApIC8gMikuYXR0cihcInN0eWxlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgaSA9IFwidGV4dC1hbmNob3I6IG1pZGRsZTsgZG9taW5hbnQtYmFzZWxpbmU6IG1pZGRsZTsgZm9udC1zaXplOiAzOHB4O2ZpbGw6XCIgKyBrKGUuZGF0YS5uYW1lKSArIFwiO1wiLCBmID0gUCh7IGNzc0NvbXBpbGVkU3R5bGVzOiBlLmRhdGEuY3NzQ29tcGlsZWRTdHlsZXMgfSk7XG4gICAgcmV0dXJuIGkgKyBmLmxhYmVsU3R5bGVzLnJlcGxhY2UoXCJjb2xvcjpcIiwgXCJmaWxsOlwiKTtcbiAgfSkuYXR0cihcImNsaXAtcGF0aFwiLCAoZSwgaSkgPT4gYHVybCgjY2xpcC0ke2F9LSR7aX0pYCkudGV4dCgoZSkgPT4gZS5kYXRhLm5hbWUpLmVhY2goZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGkgPSBZKHRoaXMpLCBmID0gZS54MSAtIGUueDAsIEMgPSBlLnkxIC0gZS55MCwgTCA9IGkubm9kZSgpLCAkID0gNCwgRCA9IGYgLSAyICogJCwgQSA9IEMgLSAyICogJDtcbiAgICBpZiAoRCA8IDEwIHx8IEEgPCAxMCkge1xuICAgICAgaS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgeSA9IHBhcnNlSW50KGkuc3R5bGUoXCJmb250LXNpemVcIiksIDEwKTtcbiAgICBjb25zdCBfID0gOCwgRiA9IDI4LCBUID0gMC42LCB6ID0gNiwgSCA9IDI7XG4gICAgZm9yICg7IEwuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkgPiBEICYmIHkgPiBfOyApXG4gICAgICB5LS0sIGkuc3R5bGUoXCJmb250LXNpemVcIiwgYCR7eX1weGApO1xuICAgIGxldCBJID0gTWF0aC5tYXgoXG4gICAgICB6LFxuICAgICAgTWF0aC5taW4oRiwgTWF0aC5yb3VuZCh5ICogVCkpXG4gICAgKSwgWiA9IHkgKyBIICsgSTtcbiAgICBmb3IgKDsgWiA+IEEgJiYgeSA+IF8gJiYgKHktLSwgSSA9IE1hdGgubWF4KFxuICAgICAgeixcbiAgICAgIE1hdGgubWluKEYsIE1hdGgucm91bmQoeSAqIFQpKVxuICAgICksICEoSSA8IHogJiYgeSA9PT0gXykpOyApXG4gICAgICBpLnN0eWxlKFwiZm9udC1zaXplXCIsIGAke3l9cHhgKSwgWiA9IHkgKyBIICsgSTtcbiAgICBpLnN0eWxlKFwiZm9udC1zaXplXCIsIGAke3l9cHhgKSwgKEwuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkgPiBEIHx8IHkgPCBfIHx8IEEgPCB5KSAmJiBpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIH0pLCBzLnNob3dWYWx1ZXMgIT09ICExICYmIGouYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0cmVlbWFwVmFsdWVcIikuYXR0cihcInhcIiwgKGkpID0+IChpLngxIC0gaS54MCkgLyAyKS5hdHRyKFwieVwiLCBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIChpLnkxIC0gaS55MCkgLyAyO1xuICB9KS5hdHRyKFwic3R5bGVcIiwgKGkpID0+IHtcbiAgICBjb25zdCBmID0gXCJ0ZXh0LWFuY2hvcjogbWlkZGxlOyBkb21pbmFudC1iYXNlbGluZTogaGFuZ2luZzsgZm9udC1zaXplOiAyOHB4O2ZpbGw6XCIgKyBrKGkuZGF0YS5uYW1lKSArIFwiO1wiLCBDID0gUCh7IGNzc0NvbXBpbGVkU3R5bGVzOiBpLmRhdGEuY3NzQ29tcGlsZWRTdHlsZXMgfSk7XG4gICAgcmV0dXJuIGYgKyBDLmxhYmVsU3R5bGVzLnJlcGxhY2UoXCJjb2xvcjpcIiwgXCJmaWxsOlwiKTtcbiAgfSkuYXR0cihcImNsaXAtcGF0aFwiLCAoaSwgZikgPT4gYHVybCgjY2xpcC0ke2F9LSR7Zn0pYCkudGV4dCgoaSkgPT4gaS52YWx1ZSA/IHAoaS52YWx1ZSkgOiBcIlwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICBjb25zdCBmID0gWSh0aGlzKSwgQyA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICBpZiAoIUMpIHtcbiAgICAgIGYuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgTCA9IFkoQykuc2VsZWN0KFwiLnRyZWVtYXBMYWJlbFwiKTtcbiAgICBpZiAoTC5lbXB0eSgpIHx8IEwuc3R5bGUoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgZi5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCAkID0gcGFyc2VGbG9hdChMLnN0eWxlKFwiZm9udC1zaXplXCIpKSwgRCA9IDI4LCBBID0gMC42LCB5ID0gNiwgXyA9IDIsIEYgPSBNYXRoLm1heChcbiAgICAgIHksXG4gICAgICBNYXRoLm1pbihELCBNYXRoLnJvdW5kKCQgKiBBKSlcbiAgICApO1xuICAgIGYuc3R5bGUoXCJmb250LXNpemVcIiwgYCR7Rn1weGApO1xuICAgIGNvbnN0IHogPSAoaS55MSAtIGkueTApIC8gMiArICQgLyAyICsgXztcbiAgICBmLmF0dHIoXCJ5XCIsIHopO1xuICAgIGNvbnN0IEggPSBpLngxIC0gaS54MCwgY2UgPSBpLnkxIC0gaS55MCAtIDQsIGRlID0gSCAtIDg7XG4gICAgZi5ub2RlKCkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkgPiBkZSB8fCB6ICsgRiA+IGNlIHx8IEYgPCB5ID8gZi5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpIDogZi5zdHlsZShcImRpc3BsYXlcIiwgbnVsbCk7XG4gIH0pO1xuICBjb25zdCBvZSA9IHMuZGlhZ3JhbVBhZGRpbmcgPz8gODtcbiAgd2UoYiwgb2UsIFwiZmxvd2NoYXJ0XCIsIHM/LnVzZU1heFdpZHRoIHx8ICExKTtcbn0sIFwiZHJhd1wiKSwgbnQgPSAvKiBAX19QVVJFX18gKi8gdyhmdW5jdGlvbih0LCBhKSB7XG4gIHJldHVybiBhLmRiLmdldENsYXNzZXMoKTtcbn0sIFwiZ2V0Q2xhc3Nlc1wiKSwgbHQgPSB7IGRyYXc6IGF0LCBnZXRDbGFzc2VzOiBudCB9LCBydCA9IHtcbiAgc2VjdGlvblN0cm9rZUNvbG9yOiBcImJsYWNrXCIsXG4gIHNlY3Rpb25TdHJva2VXaWR0aDogXCIxXCIsXG4gIHNlY3Rpb25GaWxsQ29sb3I6IFwiI2VmZWZlZlwiLFxuICBsZWFmU3Ryb2tlQ29sb3I6IFwiYmxhY2tcIixcbiAgbGVhZlN0cm9rZVdpZHRoOiBcIjFcIixcbiAgbGVhZkZpbGxDb2xvcjogXCIjZWZlZmVmXCIsXG4gIGxhYmVsQ29sb3I6IFwiYmxhY2tcIixcbiAgbGFiZWxGb250U2l6ZTogXCIxMnB4XCIsXG4gIHZhbHVlRm9udFNpemU6IFwiMTBweFwiLFxuICB2YWx1ZUNvbG9yOiBcImJsYWNrXCIsXG4gIHRpdGxlQ29sb3I6IFwiYmxhY2tcIixcbiAgdGl0bGVGb250U2l6ZTogXCIxNHB4XCJcbn0sIHN0ID0gLyogQF9fUFVSRV9fICovIHcoKHtcbiAgdHJlZW1hcDogdFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IGEgPSB0ZShydCwgdCk7XG4gIHJldHVybiBgXG4gIC50cmVlbWFwTm9kZS5zZWN0aW9uIHtcbiAgICBzdHJva2U6ICR7YS5zZWN0aW9uU3Ryb2tlQ29sb3J9O1xuICAgIHN0cm9rZS13aWR0aDogJHthLnNlY3Rpb25TdHJva2VXaWR0aH07XG4gICAgZmlsbDogJHthLnNlY3Rpb25GaWxsQ29sb3J9O1xuICB9XG4gIC50cmVlbWFwTm9kZS5sZWFmIHtcbiAgICBzdHJva2U6ICR7YS5sZWFmU3Ryb2tlQ29sb3J9O1xuICAgIHN0cm9rZS13aWR0aDogJHthLmxlYWZTdHJva2VXaWR0aH07XG4gICAgZmlsbDogJHthLmxlYWZGaWxsQ29sb3J9O1xuICB9XG4gIC50cmVlbWFwTGFiZWwge1xuICAgIGZpbGw6ICR7YS5sYWJlbENvbG9yfTtcbiAgICBmb250LXNpemU6ICR7YS5sYWJlbEZvbnRTaXplfTtcbiAgfVxuICAudHJlZW1hcFZhbHVlIHtcbiAgICBmaWxsOiAke2EudmFsdWVDb2xvcn07XG4gICAgZm9udC1zaXplOiAke2EudmFsdWVGb250U2l6ZX07XG4gIH1cbiAgLnRyZWVtYXBUaXRsZSB7XG4gICAgZmlsbDogJHthLnRpdGxlQ29sb3J9O1xuICAgIGZvbnQtc2l6ZTogJHthLnRpdGxlRm9udFNpemV9O1xuICB9XG4gIGA7XG59LCBcImdldFN0eWxlc1wiKSwgaXQgPSBzdCwgZ3QgPSB7XG4gIHBhcnNlcjogcmUsXG4gIGdldCBkYigpIHtcbiAgICByZXR1cm4gbmV3IG5lKCk7XG4gIH0sXG4gIHJlbmRlcmVyOiBsdCxcbiAgc3R5bGVzOiBpdFxufTtcbmV4cG9ydCB7XG4gIGd0IGFzIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsidCIsImQiLCJoIiwicCIsInBlIiwiZmUiLCJnZSIsIm1lIiwieWUiLCJTZSIsInZlIiwiYWUiLCJ0ZSIsInhlIiwiYmUiLCJ3IiwiQ2UiLCJUZSIsIksiLCJoZSIsInVlIiwiTyIsIkoiLCJQIiwiWSIsIkYiLCJ3ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsU0FBUyxHQUFHQSxJQUFHO0FBQ2IsTUFBSSxJQUFJLEdBQUcsSUFBSUEsR0FBRSxVQUFVLElBQUksS0FBSyxFQUFFO0FBQ3RDLE1BQUksQ0FBQyxFQUFHLEtBQUk7QUFBQSxNQUNQLFFBQU8sRUFBRSxLQUFLLElBQUssTUFBSyxFQUFFLENBQUMsRUFBRTtBQUNsQyxFQUFBQSxHQUFFLFFBQVE7QUFDWjtBQUNBLFNBQVMsS0FBSztBQUNaLFNBQU8sS0FBSyxVQUFVLEVBQUU7QUFDMUI7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixNQUFJLElBQUk7QUFDUixhQUFXLEtBQUs7QUFDZCxJQUFBQSxHQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJO0FBQ3hCLFNBQU87QUFDVDtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHO0FBQ2hCLFdBQVMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHQyxLQUFJLElBQUksSUFBSSxFQUFFLElBQUc7QUFDakQsUUFBSUQsR0FBRSxLQUFLLEdBQUcsR0FBRyxFQUFFQyxJQUFHLElBQUksR0FBRyxJQUFJLEVBQUU7QUFDakMsV0FBSyxJQUFJLEVBQUUsU0FBUyxHQUFHLEtBQUssR0FBRyxFQUFFO0FBQy9CLFVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNqQixTQUFPO0FBQ1Q7QUFDQSxTQUFTLEdBQUdELElBQUcsR0FBRztBQUNoQixXQUFTLElBQUksTUFBTSxJ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
