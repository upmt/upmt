import { U as Ue, B as Be, M as Me } from "./chunk-DI55MBZ5-B1JuynTu-eNDIUtJj.js";
import { p, f as ft, h as ht, F, i as Gh, Q as Qr, ab as a2, an as Ln, ak as gy, o as ce } from "./SynchronicGraphPage-BunGOKkz.js";
import { X as X$1 } from "./graph-CVVLTrhn-Co0Krn1w.js";
import { B as Bt } from "./layout-BFLB7GR9-BXSE6BR2.js";
import "./chunk-55IACEB6-9FdoBfgn-CuGIcmpB.js";
import "./chunk-QN33PNHL-Ct_6jMm2--wzNuDwJ.js";
import "./QPage-Ddo5tm66.js";
import "./index-hdaxc3sz.js";
import "./QBtnToggle-CisFTEWk.js";
import "./QBtnGroup-DbPfUCol.js";
import "./QToolbar-CdKuqyts.js";
import "./export-file-lpTZqdHO.js";
import "./_baseUniq-DbLykLaa-DywkHuwo.js";
import "./min-x5JjnDaq-X_HGHKDU.js";
var X = /* @__PURE__ */ p((e) => e.append("circle").attr("class", "start-state").attr("r", ft().state.sizeUnit).attr("cx", ft().state.padding + ft().state.sizeUnit).attr("cy", ft().state.padding + ft().state.sizeUnit), "drawStartState"), D = /* @__PURE__ */ p((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", ft().state.textHeight).attr("class", "divider").attr("x2", ft().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), Y = /* @__PURE__ */ p((e, i) => {
  const d = e.append("text").attr("x", 2 * ft().state.padding).attr("y", ft().state.textHeight + 2 * ft().state.padding).attr("font-size", ft().state.fontSize).attr("class", "state-title").text(i.id), c = d.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", ft().state.padding).attr("y", ft().state.padding).attr("width", c.width + 2 * ft().state.padding).attr("height", c.height + 2 * ft().state.padding).attr("rx", ft().state.radius), d;
}, "drawSimpleState"), I = /* @__PURE__ */ p((e, i) => {
  const d = /* @__PURE__ */ p(function(g, m, B) {
    const E = g.append("tspan").attr("x", 2 * ft().state.padding).text(m);
    B || E.attr("dy", ft().state.textHeight);
  }, "addTspan"), n = e.append("text").attr("x", 2 * ft().state.padding).attr("y", ft().state.textHeight + 1.3 * ft().state.padding).attr("font-size", ft().state.fontSize).attr("class", "state-title").text(i.descriptions[0]).node().getBBox(), l = n.height, x = e.append("text").attr("x", ft().state.padding).attr(
    "y",
    l + ft().state.padding * 0.4 + ft().state.dividerMargin + ft().state.textHeight
  ).attr("class", "state-description");
  let a = true, s = true;
  i.descriptions.forEach(function(g) {
    a || (d(x, g, s), s = false), a = false;
  });
  const w = e.append("line").attr("x1", ft().state.padding).attr("y1", ft().state.padding + l + ft().state.dividerMargin / 2).attr("y2", ft().state.padding + l + ft().state.dividerMargin / 2).attr("class", "descr-divider"), p$1 = x.node().getBBox(), o = Math.max(p$1.width, n.width);
  return w.attr("x2", o + 3 * ft().state.padding), e.insert("rect", ":first-child").attr("x", ft().state.padding).attr("y", ft().state.padding).attr("width", o + 2 * ft().state.padding).attr("height", p$1.height + l + 2 * ft().state.padding).attr("rx", ft().state.radius), e;
}, "drawDescrState"), $ = /* @__PURE__ */ p((e, i, d) => {
  const c = ft().state.padding, n = 2 * ft().state.padding, l = e.node().getBBox(), x = l.width, a = l.x, s = e.append("text").attr("x", 0).attr("y", ft().state.titleShift).attr("font-size", ft().state.fontSize).attr("class", "state-title").text(i.id), p2 = s.node().getBBox().width + n;
  let o = Math.max(p2, x);
  o === x && (o = o + n);
  let g;
  const m = e.node().getBBox();
  i.doc, g = a - c, p2 > x && (g = (x - o) / 2 + c), Math.abs(a - m.x) < c && p2 > x && (g = a - (p2 - x) / 2);
  const B = 1 - ft().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", g).attr("y", B).attr("class", d ? "alt-composit" : "composit").attr("width", o).attr(
    "height",
    m.height + ft().state.textHeight + ft().state.titleShift + 1
  ).attr("rx", "0"), s.attr("x", g + c), p2 <= x && s.attr("x", a + (o - n) / 2 - p2 / 2 + c), e.insert("rect", ":first-child").attr("x", g).attr(
    "y",
    ft().state.titleShift - ft().state.textHeight - ft().state.padding
  ).attr("width", o).attr("height", ft().state.textHeight * 3).attr("rx", ft().state.radius), e.insert("rect", ":first-child").attr("x", g).attr(
    "y",
    ft().state.titleShift - ft().state.textHeight - ft().state.padding
  ).attr("width", o).attr("height", m.height + 3 + 2 * ft().state.textHeight).attr("rx", ft().state.radius), e;
}, "addTitleAndBox"), q = /* @__PURE__ */ p((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", ft().state.sizeUnit + ft().state.miniPadding).attr(
  "cx",
  ft().state.padding + ft().state.sizeUnit + ft().state.miniPadding
).attr(
  "cy",
  ft().state.padding + ft().state.sizeUnit + ft().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", ft().state.sizeUnit).attr("cx", ft().state.padding + ft().state.sizeUnit + 2).attr("cy", ft().state.padding + ft().state.sizeUnit + 2)), "drawEndState"), Z = /* @__PURE__ */ p((e, i) => {
  let d = ft().state.forkWidth, c = ft().state.forkHeight;
  if (i.parentId) {
    let n = d;
    d = c, c = n;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", d).attr("height", c).attr("x", ft().state.padding).attr("y", ft().state.padding);
}, "drawForkJoinState"), j = /* @__PURE__ */ p((e, i, d, c) => {
  let n = 0;
  const l = c.append("text");
  l.style("text-anchor", "start"), l.attr("class", "noteText");
  let x = e.replace(/\r\n/g, "<br/>");
  x = x.replace(/\n/g, "<br/>");
  const a = x.split(Qr.lineBreakRegex);
  let s = 1.25 * ft().state.noteMargin;
  for (const w of a) {
    const p2 = w.trim();
    if (p2.length > 0) {
      const o = l.append("tspan");
      if (o.text(p2), s === 0) {
        const g = o.node().getBBox();
        s += g.height;
      }
      n += s, o.attr("x", i + ft().state.noteMargin), o.attr("y", d + n + 1.25 * ft().state.noteMargin);
    }
  }
  return { textWidth: l.node().getBBox().width, textHeight: n };
}, "_drawLongText"), K = /* @__PURE__ */ p((e, i) => {
  i.attr("class", "state-note");
  const d = i.append("rect").attr("x", 0).attr("y", ft().state.padding), c = i.append("g"), { textWidth: n, textHeight: l } = j(e, 0, 0, c);
  return d.attr("height", l + 2 * ft().state.noteMargin), d.attr("width", n + ft().state.noteMargin * 2), d;
}, "drawNote"), L = /* @__PURE__ */ p(function(e, i) {
  const d = i.id, c = {
    id: d,
    label: i.id,
    width: 0,
    height: 0
  }, n = e.append("g").attr("id", d).attr("class", "stateGroup");
  i.type === "start" && X(n), i.type === "end" && q(n), (i.type === "fork" || i.type === "join") && Z(n, i), i.type === "note" && K(i.note.text, n), i.type === "divider" && D(n), i.type === "default" && i.descriptions.length === 0 && Y(n, i), i.type === "default" && i.descriptions.length > 0 && I(n, i);
  const l = n.node().getBBox();
  return c.width = l.width + 2 * ft().state.padding, c.height = l.height + 2 * ft().state.padding, c;
}, "drawState"), R = 0, Q = /* @__PURE__ */ p(function(e, i, d) {
  const c = /* @__PURE__ */ p(function(s) {
    switch (s) {
      case Me.relationType.AGGREGATION:
        return "aggregation";
      case Me.relationType.EXTENSION:
        return "extension";
      case Me.relationType.COMPOSITION:
        return "composition";
      case Me.relationType.DEPENDENCY:
        return "dependency";
    }
  }, "getRelationType");
  i.points = i.points.filter((s) => !Number.isNaN(s.y));
  const n = i.points, l = a2().x(function(s) {
    return s.x;
  }).y(function(s) {
    return s.y;
  }).curve(Ln), x = e.append("path").attr("d", l(n)).attr("id", "edge" + R).attr("class", "transition");
  let a = "";
  if (ft().state.arrowMarkerAbsolute && (a = gy(true)), x.attr(
    "marker-end",
    "url(" + a + "#" + c(Me.relationType.DEPENDENCY) + "End)"
  ), d.title !== void 0) {
    const s = e.append("g").attr("class", "stateLabel"), { x: w, y: p2 } = ce.calcLabelPosition(i.points), o = Qr.getRows(d.title);
    let g = 0;
    const m = [];
    let B = 0, E = 0;
    for (let u = 0; u <= o.length; u++) {
      const h = s.append("text").attr("text-anchor", "middle").text(o[u]).attr("x", w).attr("y", p2 + g), y = h.node().getBBox();
      B = Math.max(B, y.width), E = Math.min(E, y.x), F.info(y.x, w, p2 + g), g === 0 && (g = h.node().getBBox().height, F.info("Title height", g, p2)), m.push(h);
    }
    let k = g * o.length;
    if (o.length > 1) {
      const u = (o.length - 1) * g * 0.5;
      m.forEach((h, y) => h.attr("y", p2 + y * g - u)), k = g * o.length;
    }
    const r = s.node().getBBox();
    s.insert("rect", ":first-child").attr("class", "box").attr("x", w - B / 2 - ft().state.padding / 2).attr("y", p2 - k / 2 - ft().state.padding / 2 - 3.5).attr("width", B + ft().state.padding).attr("height", k + ft().state.padding), F.info(r);
  }
  R++;
}, "drawEdge"), b, T = {}, V = /* @__PURE__ */ p(function() {
}, "setConf"), tt = /* @__PURE__ */ p(function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), et = /* @__PURE__ */ p(function(e, i, d, c) {
  b = ft().state;
  const n = ft().securityLevel;
  let l;
  n === "sandbox" && (l = ht("#i" + i));
  const x = n === "sandbox" ? ht(l.nodes()[0].contentDocument.body) : ht("body"), a = n === "sandbox" ? l.nodes()[0].contentDocument : document;
  F.debug("Rendering diagram " + e);
  const s = x.select(`[id='${i}']`);
  tt(s);
  const w = c.db.getRootDoc();
  A(w, s, void 0, false, x, a, c);
  const p2 = b.padding, o = s.node().getBBox(), g = o.width + p2 * 2, m = o.height + p2 * 2, B = g * 1.75;
  Gh(s, m, B, b.useMaxWidth), s.attr(
    "viewBox",
    `${o.x - b.padding}  ${o.y - b.padding} ` + g + " " + m
  );
}, "draw"), at = /* @__PURE__ */ p((e) => e ? e.length * b.fontSizeFactor : 1, "getLabelWidth"), A = /* @__PURE__ */ p((e, i, d, c, n, l, x) => {
  const a = new X$1({
    compound: true,
    multigraph: true
  });
  let s, w = true;
  for (s = 0; s < e.length; s++)
    if (e[s].stmt === "relation") {
      w = false;
      break;
    }
  d ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: w ? 1 : b.edgeLengthFactor,
    nodeSep: w ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: w ? 1 : b.edgeLengthFactor,
    nodeSep: w ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  });
  const p2 = x.db.getStates(), o = x.db.getRelations(), g = Object.keys(p2);
  for (const r of g) {
    const u = p2[r];
    d && (u.parentId = d);
    let h;
    if (u.doc) {
      let y = i.append("g").attr("id", u.id).attr("class", "stateGroup");
      h = A(u.doc, y, u.id, !c, n, l, x);
      {
        y = $(y, u, c);
        let v = y.node().getBBox();
        h.width = v.width, h.height = v.height + b.padding / 2, T[u.id] = { y: b.compositTitleSize };
      }
    } else
      h = L(i, u, a);
    if (u.note) {
      const y = {
        descriptions: [],
        id: u.id + "-note",
        note: u.note,
        type: "note"
      }, v = L(i, y, a);
      u.note.position === "left of" ? (a.setNode(h.id + "-note", v), a.setNode(h.id, h)) : (a.setNode(h.id, h), a.setNode(h.id + "-note", v)), a.setParent(h.id, h.id + "-group"), a.setParent(h.id + "-note", h.id + "-group");
    } else
      a.setNode(h.id, h);
  }
  F.debug("Count=", a.nodeCount(), a);
  let m = 0;
  o.forEach(function(r) {
    m++, F.debug("Setting edge", r), a.setEdge(
      r.id1,
      r.id2,
      {
        relation: r,
        width: at(r.title),
        height: b.labelHeight * Qr.getRows(r.title).length,
        labelpos: "c"
      },
      "id" + m
    );
  }), Bt(a), F.debug("Graph after layout", a.nodes());
  const B = i.node();
  a.nodes().forEach(function(r) {
    r !== void 0 && a.node(r) !== void 0 ? (F.warn("Node " + r + ": " + JSON.stringify(a.node(r))), n.select("#" + B.id + " #" + r).attr(
      "transform",
      "translate(" + (a.node(r).x - a.node(r).width / 2) + "," + (a.node(r).y + (T[r] ? T[r].y : 0) - a.node(r).height / 2) + " )"
    ), n.select("#" + B.id + " #" + r).attr("data-x-shift", a.node(r).x - a.node(r).width / 2), l.querySelectorAll("#" + B.id + " #" + r + " .divider").forEach((h) => {
      const y = h.parentElement;
      let v = 0, M = 0;
      y && (y.parentElement && (v = y.parentElement.getBBox().width), M = parseInt(y.getAttribute("data-x-shift"), 10), Number.isNaN(M) && (M = 0)), h.setAttribute("x1", 0 - M + 8), h.setAttribute("x2", v - M - 8);
    })) : F.debug("No Node " + r + ": " + JSON.stringify(a.node(r)));
  });
  let E = B.getBBox();
  a.edges().forEach(function(r) {
    r !== void 0 && a.edge(r) !== void 0 && (F.debug("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(a.edge(r))), Q(i, a.edge(r), a.edge(r).relation));
  }), E = B.getBBox();
  const k = {
    id: d || "root",
    label: d || "root",
    width: 0,
    height: 0
  };
  return k.width = E.width + 2 * b.padding, k.height = E.height + 2 * b.padding, F.debug("Doc rendered", k, a), k;
}, "renderDoc"), it = {
  setConf: V,
  draw: et
}, ot = {
  parser: Be,
  get db() {
    return new Me(1);
  },
  renderer: it,
  styles: Ue,
  init: /* @__PURE__ */ p((e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
  }, "init")
};
export {
  ot as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVEaWFncmFtLUZLWk00Wk9DLUM3THdQczBwLURjazFuSjJrLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLW1lcm1haWQtc3RyaW5nL2Rpc3Qvc3RhdGVEaWFncmFtLUZLWk00Wk9DLUM3THdQczBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHMgYXMgRywgYSBhcyBXLCBTIGFzIE4gfSBmcm9tIFwiLi9jaHVuay1ESTU1TUJaNS1CMUp1eW5UdS5qc1wiO1xuaW1wb3J0IHsgXyBhcyBmLCBjIGFzIHQsIGQgYXMgSCwgbCBhcyBTLCBlIGFzIFAsIGsgYXMgeiwgUiBhcyBfLCBTIGFzIFUsIE8gYXMgQywgdSBhcyBGIH0gZnJvbSBcIi4vZW50cnktQjJWWC1reGEuanNcIjtcbmltcG9ydCB7IEcgYXMgTyB9IGZyb20gXCIuL2dyYXBoLUNWVkxUcmhuLmpzXCI7XG5pbXBvcnQgeyBsIGFzIEogfSBmcm9tIFwiLi9sYXlvdXQtQkZMQjdHUjkuanNcIjtcbnZhciBYID0gLyogQF9fUFVSRV9fICovIGYoKGUpID0+IGUuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjbGFzc1wiLCBcInN0YXJ0LXN0YXRlXCIpLmF0dHIoXCJyXCIsIHQoKS5zdGF0ZS5zaXplVW5pdCkuYXR0cihcImN4XCIsIHQoKS5zdGF0ZS5wYWRkaW5nICsgdCgpLnN0YXRlLnNpemVVbml0KS5hdHRyKFwiY3lcIiwgdCgpLnN0YXRlLnBhZGRpbmcgKyB0KCkuc3RhdGUuc2l6ZVVuaXQpLCBcImRyYXdTdGFydFN0YXRlXCIpLCBEID0gLyogQF9fUFVSRV9fICovIGYoKGUpID0+IGUuYXBwZW5kKFwibGluZVwiKS5zdHlsZShcInN0cm9rZVwiLCBcImdyZXlcIikuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiM1wiKS5hdHRyKFwieDFcIiwgdCgpLnN0YXRlLnRleHRIZWlnaHQpLmF0dHIoXCJjbGFzc1wiLCBcImRpdmlkZXJcIikuYXR0cihcIngyXCIsIHQoKS5zdGF0ZS50ZXh0SGVpZ2h0ICogMikuYXR0cihcInkxXCIsIDApLmF0dHIoXCJ5MlwiLCAwKSwgXCJkcmF3RGl2aWRlclwiKSwgWSA9IC8qIEBfX1BVUkVfXyAqLyBmKChlLCBpKSA9PiB7XG4gIGNvbnN0IGQgPSBlLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMiAqIHQoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwieVwiLCB0KCkuc3RhdGUudGV4dEhlaWdodCArIDIgKiB0KCkuc3RhdGUucGFkZGluZykuYXR0cihcImZvbnQtc2l6ZVwiLCB0KCkuc3RhdGUuZm9udFNpemUpLmF0dHIoXCJjbGFzc1wiLCBcInN0YXRlLXRpdGxlXCIpLnRleHQoaS5pZCksIGMgPSBkLm5vZGUoKS5nZXRCQm94KCk7XG4gIHJldHVybiBlLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIikuYXR0cihcInhcIiwgdCgpLnN0YXRlLnBhZGRpbmcpLmF0dHIoXCJ5XCIsIHQoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwid2lkdGhcIiwgYy53aWR0aCArIDIgKiB0KCkuc3RhdGUucGFkZGluZykuYXR0cihcImhlaWdodFwiLCBjLmhlaWdodCArIDIgKiB0KCkuc3RhdGUucGFkZGluZykuYXR0cihcInJ4XCIsIHQoKS5zdGF0ZS5yYWRpdXMpLCBkO1xufSwgXCJkcmF3U2ltcGxlU3RhdGVcIiksIEkgPSAvKiBAX19QVVJFX18gKi8gZigoZSwgaSkgPT4ge1xuICBjb25zdCBkID0gLyogQF9fUFVSRV9fICovIGYoZnVuY3Rpb24oZywgbSwgQikge1xuICAgIGNvbnN0IEUgPSBnLmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ4XCIsIDIgKiB0KCkuc3RhdGUucGFkZGluZykudGV4dChtKTtcbiAgICBCIHx8IEUuYXR0cihcImR5XCIsIHQoKS5zdGF0ZS50ZXh0SGVpZ2h0KTtcbiAgfSwgXCJhZGRUc3BhblwiKSwgbiA9IGUuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAyICogdCgpLnN0YXRlLnBhZGRpbmcpLmF0dHIoXCJ5XCIsIHQoKS5zdGF0ZS50ZXh0SGVpZ2h0ICsgMS4zICogdCgpLnN0YXRlLnBhZGRpbmcpLmF0dHIoXCJmb250LXNpemVcIiwgdCgpLnN0YXRlLmZvbnRTaXplKS5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZS10aXRsZVwiKS50ZXh0KGkuZGVzY3JpcHRpb25zWzBdKS5ub2RlKCkuZ2V0QkJveCgpLCBsID0gbi5oZWlnaHQsIHggPSBlLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgdCgpLnN0YXRlLnBhZGRpbmcpLmF0dHIoXG4gICAgXCJ5XCIsXG4gICAgbCArIHQoKS5zdGF0ZS5wYWRkaW5nICogMC40ICsgdCgpLnN0YXRlLmRpdmlkZXJNYXJnaW4gKyB0KCkuc3RhdGUudGV4dEhlaWdodFxuICApLmF0dHIoXCJjbGFzc1wiLCBcInN0YXRlLWRlc2NyaXB0aW9uXCIpO1xuICBsZXQgYSA9ICEwLCBzID0gITA7XG4gIGkuZGVzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24oZykge1xuICAgIGEgfHwgKGQoeCwgZywgcyksIHMgPSAhMSksIGEgPSAhMTtcbiAgfSk7XG4gIGNvbnN0IHcgPSBlLmFwcGVuZChcImxpbmVcIikuYXR0cihcIngxXCIsIHQoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwieTFcIiwgdCgpLnN0YXRlLnBhZGRpbmcgKyBsICsgdCgpLnN0YXRlLmRpdmlkZXJNYXJnaW4gLyAyKS5hdHRyKFwieTJcIiwgdCgpLnN0YXRlLnBhZGRpbmcgKyBsICsgdCgpLnN0YXRlLmRpdmlkZXJNYXJnaW4gLyAyKS5hdHRyKFwiY2xhc3NcIiwgXCJkZXNjci1kaXZpZGVyXCIpLCBwID0geC5ub2RlKCkuZ2V0QkJveCgpLCBvID0gTWF0aC5tYXgocC53aWR0aCwgbi53aWR0aCk7XG4gIHJldHVybiB3LmF0dHIoXCJ4MlwiLCBvICsgMyAqIHQoKS5zdGF0ZS5wYWRkaW5nKSwgZS5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLmF0dHIoXCJ4XCIsIHQoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwieVwiLCB0KCkuc3RhdGUucGFkZGluZykuYXR0cihcIndpZHRoXCIsIG8gKyAyICogdCgpLnN0YXRlLnBhZGRpbmcpLmF0dHIoXCJoZWlnaHRcIiwgcC5oZWlnaHQgKyBsICsgMiAqIHQoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwicnhcIiwgdCgpLnN0YXRlLnJhZGl1cyksIGU7XG59LCBcImRyYXdEZXNjclN0YXRlXCIpLCAkID0gLyogQF9fUFVSRV9fICovIGYoKGUsIGksIGQpID0+IHtcbiAgY29uc3QgYyA9IHQoKS5zdGF0ZS5wYWRkaW5nLCBuID0gMiAqIHQoKS5zdGF0ZS5wYWRkaW5nLCBsID0gZS5ub2RlKCkuZ2V0QkJveCgpLCB4ID0gbC53aWR0aCwgYSA9IGwueCwgcyA9IGUuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCB0KCkuc3RhdGUudGl0bGVTaGlmdCkuYXR0cihcImZvbnQtc2l6ZVwiLCB0KCkuc3RhdGUuZm9udFNpemUpLmF0dHIoXCJjbGFzc1wiLCBcInN0YXRlLXRpdGxlXCIpLnRleHQoaS5pZCksIHAgPSBzLm5vZGUoKS5nZXRCQm94KCkud2lkdGggKyBuO1xuICBsZXQgbyA9IE1hdGgubWF4KHAsIHgpO1xuICBvID09PSB4ICYmIChvID0gbyArIG4pO1xuICBsZXQgZztcbiAgY29uc3QgbSA9IGUubm9kZSgpLmdldEJCb3goKTtcbiAgaS5kb2MsIGcgPSBhIC0gYywgcCA+IHggJiYgKGcgPSAoeCAtIG8pIC8gMiArIGMpLCBNYXRoLmFicyhhIC0gbS54KSA8IGMgJiYgcCA+IHggJiYgKGcgPSBhIC0gKHAgLSB4KSAvIDIpO1xuICBjb25zdCBCID0gMSAtIHQoKS5zdGF0ZS50ZXh0SGVpZ2h0O1xuICByZXR1cm4gZS5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLmF0dHIoXCJ4XCIsIGcpLmF0dHIoXCJ5XCIsIEIpLmF0dHIoXCJjbGFzc1wiLCBkID8gXCJhbHQtY29tcG9zaXRcIiA6IFwiY29tcG9zaXRcIikuYXR0cihcIndpZHRoXCIsIG8pLmF0dHIoXG4gICAgXCJoZWlnaHRcIixcbiAgICBtLmhlaWdodCArIHQoKS5zdGF0ZS50ZXh0SGVpZ2h0ICsgdCgpLnN0YXRlLnRpdGxlU2hpZnQgKyAxXG4gICkuYXR0cihcInJ4XCIsIFwiMFwiKSwgcy5hdHRyKFwieFwiLCBnICsgYyksIHAgPD0geCAmJiBzLmF0dHIoXCJ4XCIsIGEgKyAobyAtIG4pIC8gMiAtIHAgLyAyICsgYyksIGUuaW5zZXJ0KFwicmVjdFwiLCBcIjpmaXJzdC1jaGlsZFwiKS5hdHRyKFwieFwiLCBnKS5hdHRyKFxuICAgIFwieVwiLFxuICAgIHQoKS5zdGF0ZS50aXRsZVNoaWZ0IC0gdCgpLnN0YXRlLnRleHRIZWlnaHQgLSB0KCkuc3RhdGUucGFkZGluZ1xuICApLmF0dHIoXCJ3aWR0aFwiLCBvKS5hdHRyKFwiaGVpZ2h0XCIsIHQoKS5zdGF0ZS50ZXh0SGVpZ2h0ICogMykuYXR0cihcInJ4XCIsIHQoKS5zdGF0ZS5yYWRpdXMpLCBlLmluc2VydChcInJlY3RcIiwgXCI6Zmlyc3QtY2hpbGRcIikuYXR0cihcInhcIiwgZykuYXR0cihcbiAgICBcInlcIixcbiAgICB0KCkuc3RhdGUudGl0bGVTaGlmdCAtIHQoKS5zdGF0ZS50ZXh0SGVpZ2h0IC0gdCgpLnN0YXRlLnBhZGRpbmdcbiAgKS5hdHRyKFwid2lkdGhcIiwgbykuYXR0cihcImhlaWdodFwiLCBtLmhlaWdodCArIDMgKyAyICogdCgpLnN0YXRlLnRleHRIZWlnaHQpLmF0dHIoXCJyeFwiLCB0KCkuc3RhdGUucmFkaXVzKSwgZTtcbn0sIFwiYWRkVGl0bGVBbmRCb3hcIiksIHEgPSAvKiBAX19QVVJFX18gKi8gZigoZSkgPT4gKGUuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjbGFzc1wiLCBcImVuZC1zdGF0ZS1vdXRlclwiKS5hdHRyKFwiclwiLCB0KCkuc3RhdGUuc2l6ZVVuaXQgKyB0KCkuc3RhdGUubWluaVBhZGRpbmcpLmF0dHIoXG4gIFwiY3hcIixcbiAgdCgpLnN0YXRlLnBhZGRpbmcgKyB0KCkuc3RhdGUuc2l6ZVVuaXQgKyB0KCkuc3RhdGUubWluaVBhZGRpbmdcbikuYXR0cihcbiAgXCJjeVwiLFxuICB0KCkuc3RhdGUucGFkZGluZyArIHQoKS5zdGF0ZS5zaXplVW5pdCArIHQoKS5zdGF0ZS5taW5pUGFkZGluZ1xuKSwgZS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImNsYXNzXCIsIFwiZW5kLXN0YXRlLWlubmVyXCIpLmF0dHIoXCJyXCIsIHQoKS5zdGF0ZS5zaXplVW5pdCkuYXR0cihcImN4XCIsIHQoKS5zdGF0ZS5wYWRkaW5nICsgdCgpLnN0YXRlLnNpemVVbml0ICsgMikuYXR0cihcImN5XCIsIHQoKS5zdGF0ZS5wYWRkaW5nICsgdCgpLnN0YXRlLnNpemVVbml0ICsgMikpLCBcImRyYXdFbmRTdGF0ZVwiKSwgWiA9IC8qIEBfX1BVUkVfXyAqLyBmKChlLCBpKSA9PiB7XG4gIGxldCBkID0gdCgpLnN0YXRlLmZvcmtXaWR0aCwgYyA9IHQoKS5zdGF0ZS5mb3JrSGVpZ2h0O1xuICBpZiAoaS5wYXJlbnRJZCkge1xuICAgIGxldCBuID0gZDtcbiAgICBkID0gYywgYyA9IG47XG4gIH1cbiAgcmV0dXJuIGUuYXBwZW5kKFwicmVjdFwiKS5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpLnN0eWxlKFwiZmlsbFwiLCBcImJsYWNrXCIpLmF0dHIoXCJ3aWR0aFwiLCBkKS5hdHRyKFwiaGVpZ2h0XCIsIGMpLmF0dHIoXCJ4XCIsIHQoKS5zdGF0ZS5wYWRkaW5nKS5hdHRyKFwieVwiLCB0KCkuc3RhdGUucGFkZGluZyk7XG59LCBcImRyYXdGb3JrSm9pblN0YXRlXCIpLCBqID0gLyogQF9fUFVSRV9fICovIGYoKGUsIGksIGQsIGMpID0+IHtcbiAgbGV0IG4gPSAwO1xuICBjb25zdCBsID0gYy5hcHBlbmQoXCJ0ZXh0XCIpO1xuICBsLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKSwgbC5hdHRyKFwiY2xhc3NcIiwgXCJub3RlVGV4dFwiKTtcbiAgbGV0IHggPSBlLnJlcGxhY2UoL1xcclxcbi9nLCBcIjxici8+XCIpO1xuICB4ID0geC5yZXBsYWNlKC9cXG4vZywgXCI8YnIvPlwiKTtcbiAgY29uc3QgYSA9IHguc3BsaXQoei5saW5lQnJlYWtSZWdleCk7XG4gIGxldCBzID0gMS4yNSAqIHQoKS5zdGF0ZS5ub3RlTWFyZ2luO1xuICBmb3IgKGNvbnN0IHcgb2YgYSkge1xuICAgIGNvbnN0IHAgPSB3LnRyaW0oKTtcbiAgICBpZiAocC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvID0gbC5hcHBlbmQoXCJ0c3BhblwiKTtcbiAgICAgIGlmIChvLnRleHQocCksIHMgPT09IDApIHtcbiAgICAgICAgY29uc3QgZyA9IG8ubm9kZSgpLmdldEJCb3goKTtcbiAgICAgICAgcyArPSBnLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIG4gKz0gcywgby5hdHRyKFwieFwiLCBpICsgdCgpLnN0YXRlLm5vdGVNYXJnaW4pLCBvLmF0dHIoXCJ5XCIsIGQgKyBuICsgMS4yNSAqIHQoKS5zdGF0ZS5ub3RlTWFyZ2luKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdGV4dFdpZHRoOiBsLm5vZGUoKS5nZXRCQm94KCkud2lkdGgsIHRleHRIZWlnaHQ6IG4gfTtcbn0sIFwiX2RyYXdMb25nVGV4dFwiKSwgSyA9IC8qIEBfX1BVUkVfXyAqLyBmKChlLCBpKSA9PiB7XG4gIGkuYXR0cihcImNsYXNzXCIsIFwic3RhdGUtbm90ZVwiKTtcbiAgY29uc3QgZCA9IGkuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCB0KCkuc3RhdGUucGFkZGluZyksIGMgPSBpLmFwcGVuZChcImdcIiksIHsgdGV4dFdpZHRoOiBuLCB0ZXh0SGVpZ2h0OiBsIH0gPSBqKGUsIDAsIDAsIGMpO1xuICByZXR1cm4gZC5hdHRyKFwiaGVpZ2h0XCIsIGwgKyAyICogdCgpLnN0YXRlLm5vdGVNYXJnaW4pLCBkLmF0dHIoXCJ3aWR0aFwiLCBuICsgdCgpLnN0YXRlLm5vdGVNYXJnaW4gKiAyKSwgZDtcbn0sIFwiZHJhd05vdGVcIiksIEwgPSAvKiBAX19QVVJFX18gKi8gZihmdW5jdGlvbihlLCBpKSB7XG4gIGNvbnN0IGQgPSBpLmlkLCBjID0ge1xuICAgIGlkOiBkLFxuICAgIGxhYmVsOiBpLmlkLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9LCBuID0gZS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJpZFwiLCBkKS5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZUdyb3VwXCIpO1xuICBpLnR5cGUgPT09IFwic3RhcnRcIiAmJiBYKG4pLCBpLnR5cGUgPT09IFwiZW5kXCIgJiYgcShuKSwgKGkudHlwZSA9PT0gXCJmb3JrXCIgfHwgaS50eXBlID09PSBcImpvaW5cIikgJiYgWihuLCBpKSwgaS50eXBlID09PSBcIm5vdGVcIiAmJiBLKGkubm90ZS50ZXh0LCBuKSwgaS50eXBlID09PSBcImRpdmlkZXJcIiAmJiBEKG4pLCBpLnR5cGUgPT09IFwiZGVmYXVsdFwiICYmIGkuZGVzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCAmJiBZKG4sIGkpLCBpLnR5cGUgPT09IFwiZGVmYXVsdFwiICYmIGkuZGVzY3JpcHRpb25zLmxlbmd0aCA+IDAgJiYgSShuLCBpKTtcbiAgY29uc3QgbCA9IG4ubm9kZSgpLmdldEJCb3goKTtcbiAgcmV0dXJuIGMud2lkdGggPSBsLndpZHRoICsgMiAqIHQoKS5zdGF0ZS5wYWRkaW5nLCBjLmhlaWdodCA9IGwuaGVpZ2h0ICsgMiAqIHQoKS5zdGF0ZS5wYWRkaW5nLCBjO1xufSwgXCJkcmF3U3RhdGVcIiksIFIgPSAwLCBRID0gLyogQF9fUFVSRV9fICovIGYoZnVuY3Rpb24oZSwgaSwgZCkge1xuICBjb25zdCBjID0gLyogQF9fUFVSRV9fICovIGYoZnVuY3Rpb24ocykge1xuICAgIHN3aXRjaCAocykge1xuICAgICAgY2FzZSBOLnJlbGF0aW9uVHlwZS5BR0dSRUdBVElPTjpcbiAgICAgICAgcmV0dXJuIFwiYWdncmVnYXRpb25cIjtcbiAgICAgIGNhc2UgTi5yZWxhdGlvblR5cGUuRVhURU5TSU9OOlxuICAgICAgICByZXR1cm4gXCJleHRlbnNpb25cIjtcbiAgICAgIGNhc2UgTi5yZWxhdGlvblR5cGUuQ09NUE9TSVRJT046XG4gICAgICAgIHJldHVybiBcImNvbXBvc2l0aW9uXCI7XG4gICAgICBjYXNlIE4ucmVsYXRpb25UeXBlLkRFUEVOREVOQ1k6XG4gICAgICAgIHJldHVybiBcImRlcGVuZGVuY3lcIjtcbiAgICB9XG4gIH0sIFwiZ2V0UmVsYXRpb25UeXBlXCIpO1xuICBpLnBvaW50cyA9IGkucG9pbnRzLmZpbHRlcigocykgPT4gIU51bWJlci5pc05hTihzLnkpKTtcbiAgY29uc3QgbiA9IGkucG9pbnRzLCBsID0gXygpLngoZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLng7XG4gIH0pLnkoZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLnk7XG4gIH0pLmN1cnZlKFUpLCB4ID0gZS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGwobikpLmF0dHIoXCJpZFwiLCBcImVkZ2VcIiArIFIpLmF0dHIoXCJjbGFzc1wiLCBcInRyYW5zaXRpb25cIik7XG4gIGxldCBhID0gXCJcIjtcbiAgaWYgKHQoKS5zdGF0ZS5hcnJvd01hcmtlckFic29sdXRlICYmIChhID0gQyghMCkpLCB4LmF0dHIoXG4gICAgXCJtYXJrZXItZW5kXCIsXG4gICAgXCJ1cmwoXCIgKyBhICsgXCIjXCIgKyBjKE4ucmVsYXRpb25UeXBlLkRFUEVOREVOQ1kpICsgXCJFbmQpXCJcbiAgKSwgZC50aXRsZSAhPT0gdm9pZCAwKSB7XG4gICAgY29uc3QgcyA9IGUuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZUxhYmVsXCIpLCB7IHg6IHcsIHk6IHAgfSA9IEYuY2FsY0xhYmVsUG9zaXRpb24oaS5wb2ludHMpLCBvID0gei5nZXRSb3dzKGQudGl0bGUpO1xuICAgIGxldCBnID0gMDtcbiAgICBjb25zdCBtID0gW107XG4gICAgbGV0IEIgPSAwLCBFID0gMDtcbiAgICBmb3IgKGxldCB1ID0gMDsgdSA8PSBvLmxlbmd0aDsgdSsrKSB7XG4gICAgICBjb25zdCBoID0gcy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS50ZXh0KG9bdV0pLmF0dHIoXCJ4XCIsIHcpLmF0dHIoXCJ5XCIsIHAgKyBnKSwgeSA9IGgubm9kZSgpLmdldEJCb3goKTtcbiAgICAgIEIgPSBNYXRoLm1heChCLCB5LndpZHRoKSwgRSA9IE1hdGgubWluKEUsIHkueCksIFMuaW5mbyh5LngsIHcsIHAgKyBnKSwgZyA9PT0gMCAmJiAoZyA9IGgubm9kZSgpLmdldEJCb3goKS5oZWlnaHQsIFMuaW5mbyhcIlRpdGxlIGhlaWdodFwiLCBnLCBwKSksIG0ucHVzaChoKTtcbiAgICB9XG4gICAgbGV0IGsgPSBnICogby5sZW5ndGg7XG4gICAgaWYgKG8ubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgdSA9IChvLmxlbmd0aCAtIDEpICogZyAqIDAuNTtcbiAgICAgIG0uZm9yRWFjaCgoaCwgeSkgPT4gaC5hdHRyKFwieVwiLCBwICsgeSAqIGcgLSB1KSksIGsgPSBnICogby5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IHIgPSBzLm5vZGUoKS5nZXRCQm94KCk7XG4gICAgcy5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLmF0dHIoXCJjbGFzc1wiLCBcImJveFwiKS5hdHRyKFwieFwiLCB3IC0gQiAvIDIgLSB0KCkuc3RhdGUucGFkZGluZyAvIDIpLmF0dHIoXCJ5XCIsIHAgLSBrIC8gMiAtIHQoKS5zdGF0ZS5wYWRkaW5nIC8gMiAtIDMuNSkuYXR0cihcIndpZHRoXCIsIEIgKyB0KCkuc3RhdGUucGFkZGluZykuYXR0cihcImhlaWdodFwiLCBrICsgdCgpLnN0YXRlLnBhZGRpbmcpLCBTLmluZm8ocik7XG4gIH1cbiAgUisrO1xufSwgXCJkcmF3RWRnZVwiKSwgYiwgVCA9IHt9LCBWID0gLyogQF9fUFVSRV9fICovIGYoZnVuY3Rpb24oKSB7XG59LCBcInNldENvbmZcIiksIHR0ID0gLyogQF9fUFVSRV9fICovIGYoZnVuY3Rpb24oZSkge1xuICBlLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcImRlcGVuZGVuY3lFbmRcIikuYXR0cihcInJlZlhcIiwgMTkpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTksNyBMOSwxMyBMMTQsNyBMOSwxIFpcIik7XG59LCBcImluc2VydE1hcmtlcnNcIiksIGV0ID0gLyogQF9fUFVSRV9fICovIGYoZnVuY3Rpb24oZSwgaSwgZCwgYykge1xuICBiID0gdCgpLnN0YXRlO1xuICBjb25zdCBuID0gdCgpLnNlY3VyaXR5TGV2ZWw7XG4gIGxldCBsO1xuICBuID09PSBcInNhbmRib3hcIiAmJiAobCA9IEgoXCIjaVwiICsgaSkpO1xuICBjb25zdCB4ID0gbiA9PT0gXCJzYW5kYm94XCIgPyBIKGwubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBIKFwiYm9keVwiKSwgYSA9IG4gPT09IFwic2FuZGJveFwiID8gbC5ub2RlcygpWzBdLmNvbnRlbnREb2N1bWVudCA6IGRvY3VtZW50O1xuICBTLmRlYnVnKFwiUmVuZGVyaW5nIGRpYWdyYW0gXCIgKyBlKTtcbiAgY29uc3QgcyA9IHguc2VsZWN0KGBbaWQ9JyR7aX0nXWApO1xuICB0dChzKTtcbiAgY29uc3QgdyA9IGMuZGIuZ2V0Um9vdERvYygpO1xuICBBKHcsIHMsIHZvaWQgMCwgITEsIHgsIGEsIGMpO1xuICBjb25zdCBwID0gYi5wYWRkaW5nLCBvID0gcy5ub2RlKCkuZ2V0QkJveCgpLCBnID0gby53aWR0aCArIHAgKiAyLCBtID0gby5oZWlnaHQgKyBwICogMiwgQiA9IGcgKiAxLjc1O1xuICBQKHMsIG0sIEIsIGIudXNlTWF4V2lkdGgpLCBzLmF0dHIoXG4gICAgXCJ2aWV3Qm94XCIsXG4gICAgYCR7by54IC0gYi5wYWRkaW5nfSAgJHtvLnkgLSBiLnBhZGRpbmd9IGAgKyBnICsgXCIgXCIgKyBtXG4gICk7XG59LCBcImRyYXdcIiksIGF0ID0gLyogQF9fUFVSRV9fICovIGYoKGUpID0+IGUgPyBlLmxlbmd0aCAqIGIuZm9udFNpemVGYWN0b3IgOiAxLCBcImdldExhYmVsV2lkdGhcIiksIEEgPSAvKiBAX19QVVJFX18gKi8gZigoZSwgaSwgZCwgYywgbiwgbCwgeCkgPT4ge1xuICBjb25zdCBhID0gbmV3IE8oe1xuICAgIGNvbXBvdW5kOiAhMCxcbiAgICBtdWx0aWdyYXBoOiAhMFxuICB9KTtcbiAgbGV0IHMsIHcgPSAhMDtcbiAgZm9yIChzID0gMDsgcyA8IGUubGVuZ3RoOyBzKyspXG4gICAgaWYgKGVbc10uc3RtdCA9PT0gXCJyZWxhdGlvblwiKSB7XG4gICAgICB3ID0gITE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIGQgPyBhLnNldEdyYXBoKHtcbiAgICByYW5rZGlyOiBcIkxSXCIsXG4gICAgbXVsdGlncmFwaDogITAsXG4gICAgY29tcG91bmQ6ICEwLFxuICAgIC8vIGFjeWNsaWNlcjogJ2dyZWVkeScsXG4gICAgcmFua2VyOiBcInRpZ2h0LXRyZWVcIixcbiAgICByYW5rc2VwOiB3ID8gMSA6IGIuZWRnZUxlbmd0aEZhY3RvcixcbiAgICBub2RlU2VwOiB3ID8gMSA6IDUwLFxuICAgIGlzTXVsdGlHcmFwaDogITBcbiAgICAvLyByYW5rc2VwOiA1LFxuICAgIC8vIG5vZGVzZXA6IDFcbiAgfSkgOiBhLnNldEdyYXBoKHtcbiAgICByYW5rZGlyOiBcIlRCXCIsXG4gICAgbXVsdGlncmFwaDogITAsXG4gICAgY29tcG91bmQ6ICEwLFxuICAgIC8vIGlzQ29tcG91bmQ6IHRydWUsXG4gICAgLy8gYWN5Y2xpY2VyOiAnZ3JlZWR5JyxcbiAgICAvLyByYW5rZXI6ICdsb25nZXN0LXBhdGgnXG4gICAgcmFua3NlcDogdyA/IDEgOiBiLmVkZ2VMZW5ndGhGYWN0b3IsXG4gICAgbm9kZVNlcDogdyA/IDEgOiA1MCxcbiAgICByYW5rZXI6IFwidGlnaHQtdHJlZVwiLFxuICAgIC8vIHJhbmtlcjogJ25ldHdvcmstc2ltcGxleCdcbiAgICBpc011bHRpR3JhcGg6ICEwXG4gIH0pLCBhLnNldERlZmF1bHRFZGdlTGFiZWwoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9KTtcbiAgY29uc3QgcCA9IHguZGIuZ2V0U3RhdGVzKCksIG8gPSB4LmRiLmdldFJlbGF0aW9ucygpLCBnID0gT2JqZWN0LmtleXMocCk7XG4gIGZvciAoY29uc3QgciBvZiBnKSB7XG4gICAgY29uc3QgdSA9IHBbcl07XG4gICAgZCAmJiAodS5wYXJlbnRJZCA9IGQpO1xuICAgIGxldCBoO1xuICAgIGlmICh1LmRvYykge1xuICAgICAgbGV0IHkgPSBpLmFwcGVuZChcImdcIikuYXR0cihcImlkXCIsIHUuaWQpLmF0dHIoXCJjbGFzc1wiLCBcInN0YXRlR3JvdXBcIik7XG4gICAgICBoID0gQSh1LmRvYywgeSwgdS5pZCwgIWMsIG4sIGwsIHgpO1xuICAgICAge1xuICAgICAgICB5ID0gJCh5LCB1LCBjKTtcbiAgICAgICAgbGV0IHYgPSB5Lm5vZGUoKS5nZXRCQm94KCk7XG4gICAgICAgIGgud2lkdGggPSB2LndpZHRoLCBoLmhlaWdodCA9IHYuaGVpZ2h0ICsgYi5wYWRkaW5nIC8gMiwgVFt1LmlkXSA9IHsgeTogYi5jb21wb3NpdFRpdGxlU2l6ZSB9O1xuICAgICAgfVxuICAgIH0gZWxzZVxuICAgICAgaCA9IEwoaSwgdSwgYSk7XG4gICAgaWYgKHUubm90ZSkge1xuICAgICAgY29uc3QgeSA9IHtcbiAgICAgICAgZGVzY3JpcHRpb25zOiBbXSxcbiAgICAgICAgaWQ6IHUuaWQgKyBcIi1ub3RlXCIsXG4gICAgICAgIG5vdGU6IHUubm90ZSxcbiAgICAgICAgdHlwZTogXCJub3RlXCJcbiAgICAgIH0sIHYgPSBMKGksIHksIGEpO1xuICAgICAgdS5ub3RlLnBvc2l0aW9uID09PSBcImxlZnQgb2ZcIiA/IChhLnNldE5vZGUoaC5pZCArIFwiLW5vdGVcIiwgdiksIGEuc2V0Tm9kZShoLmlkLCBoKSkgOiAoYS5zZXROb2RlKGguaWQsIGgpLCBhLnNldE5vZGUoaC5pZCArIFwiLW5vdGVcIiwgdikpLCBhLnNldFBhcmVudChoLmlkLCBoLmlkICsgXCItZ3JvdXBcIiksIGEuc2V0UGFyZW50KGguaWQgKyBcIi1ub3RlXCIsIGguaWQgKyBcIi1ncm91cFwiKTtcbiAgICB9IGVsc2VcbiAgICAgIGEuc2V0Tm9kZShoLmlkLCBoKTtcbiAgfVxuICBTLmRlYnVnKFwiQ291bnQ9XCIsIGEubm9kZUNvdW50KCksIGEpO1xuICBsZXQgbSA9IDA7XG4gIG8uZm9yRWFjaChmdW5jdGlvbihyKSB7XG4gICAgbSsrLCBTLmRlYnVnKFwiU2V0dGluZyBlZGdlXCIsIHIpLCBhLnNldEVkZ2UoXG4gICAgICByLmlkMSxcbiAgICAgIHIuaWQyLFxuICAgICAge1xuICAgICAgICByZWxhdGlvbjogcixcbiAgICAgICAgd2lkdGg6IGF0KHIudGl0bGUpLFxuICAgICAgICBoZWlnaHQ6IGIubGFiZWxIZWlnaHQgKiB6LmdldFJvd3Moci50aXRsZSkubGVuZ3RoLFxuICAgICAgICBsYWJlbHBvczogXCJjXCJcbiAgICAgIH0sXG4gICAgICBcImlkXCIgKyBtXG4gICAgKTtcbiAgfSksIEooYSksIFMuZGVidWcoXCJHcmFwaCBhZnRlciBsYXlvdXRcIiwgYS5ub2RlcygpKTtcbiAgY29uc3QgQiA9IGkubm9kZSgpO1xuICBhLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihyKSB7XG4gICAgciAhPT0gdm9pZCAwICYmIGEubm9kZShyKSAhPT0gdm9pZCAwID8gKFMud2FybihcIk5vZGUgXCIgKyByICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkoYS5ub2RlKHIpKSksIG4uc2VsZWN0KFwiI1wiICsgQi5pZCArIFwiICNcIiArIHIpLmF0dHIoXG4gICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyAoYS5ub2RlKHIpLnggLSBhLm5vZGUocikud2lkdGggLyAyKSArIFwiLFwiICsgKGEubm9kZShyKS55ICsgKFRbcl0gPyBUW3JdLnkgOiAwKSAtIGEubm9kZShyKS5oZWlnaHQgLyAyKSArIFwiIClcIlxuICAgICksIG4uc2VsZWN0KFwiI1wiICsgQi5pZCArIFwiICNcIiArIHIpLmF0dHIoXCJkYXRhLXgtc2hpZnRcIiwgYS5ub2RlKHIpLnggLSBhLm5vZGUocikud2lkdGggLyAyKSwgbC5xdWVyeVNlbGVjdG9yQWxsKFwiI1wiICsgQi5pZCArIFwiICNcIiArIHIgKyBcIiAuZGl2aWRlclwiKS5mb3JFYWNoKChoKSA9PiB7XG4gICAgICBjb25zdCB5ID0gaC5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IHYgPSAwLCBNID0gMDtcbiAgICAgIHkgJiYgKHkucGFyZW50RWxlbWVudCAmJiAodiA9IHkucGFyZW50RWxlbWVudC5nZXRCQm94KCkud2lkdGgpLCBNID0gcGFyc2VJbnQoeS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXgtc2hpZnRcIiksIDEwKSwgTnVtYmVyLmlzTmFOKE0pICYmIChNID0gMCkpLCBoLnNldEF0dHJpYnV0ZShcIngxXCIsIDAgLSBNICsgOCksIGguc2V0QXR0cmlidXRlKFwieDJcIiwgdiAtIE0gLSA4KTtcbiAgICB9KSkgOiBTLmRlYnVnKFwiTm8gTm9kZSBcIiArIHIgKyBcIjogXCIgKyBKU09OLnN0cmluZ2lmeShhLm5vZGUocikpKTtcbiAgfSk7XG4gIGxldCBFID0gQi5nZXRCQm94KCk7XG4gIGEuZWRnZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICByICE9PSB2b2lkIDAgJiYgYS5lZGdlKHIpICE9PSB2b2lkIDAgJiYgKFMuZGVidWcoXCJFZGdlIFwiICsgci52ICsgXCIgLT4gXCIgKyByLncgKyBcIjogXCIgKyBKU09OLnN0cmluZ2lmeShhLmVkZ2UocikpKSwgUShpLCBhLmVkZ2UociksIGEuZWRnZShyKS5yZWxhdGlvbikpO1xuICB9KSwgRSA9IEIuZ2V0QkJveCgpO1xuICBjb25zdCBrID0ge1xuICAgIGlkOiBkIHx8IFwicm9vdFwiLFxuICAgIGxhYmVsOiBkIHx8IFwicm9vdFwiLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9O1xuICByZXR1cm4gay53aWR0aCA9IEUud2lkdGggKyAyICogYi5wYWRkaW5nLCBrLmhlaWdodCA9IEUuaGVpZ2h0ICsgMiAqIGIucGFkZGluZywgUy5kZWJ1ZyhcIkRvYyByZW5kZXJlZFwiLCBrLCBhKSwgaztcbn0sIFwicmVuZGVyRG9jXCIpLCBpdCA9IHtcbiAgc2V0Q29uZjogVixcbiAgZHJhdzogZXRcbn0sIG90ID0ge1xuICBwYXJzZXI6IFcsXG4gIGdldCBkYigpIHtcbiAgICByZXR1cm4gbmV3IE4oMSk7XG4gIH0sXG4gIHJlbmRlcmVyOiBpdCxcbiAgc3R5bGVzOiBHLFxuICBpbml0OiAvKiBAX19QVVJFX18gKi8gZigoZSkgPT4ge1xuICAgIGUuc3RhdGUgfHwgKGUuc3RhdGUgPSB7fSksIGUuc3RhdGUuYXJyb3dNYXJrZXJBYnNvbHV0ZSA9IGUuYXJyb3dNYXJrZXJBYnNvbHV0ZTtcbiAgfSwgXCJpbml0XCIpXG59O1xuZXhwb3J0IHtcbiAgb3QgYXMgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJmIiwidCIsInAiLCJ6IiwiTiIsIl8iLCJVIiwiQyIsIkYiLCJTIiwiSCIsIlAiLCJPIiwiSiIsIlciLCJHIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlHLElBQUMsSUFBb0JBLGtCQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sUUFBUSxFQUFFLEtBQUssU0FBUyxhQUFhLEVBQUUsS0FBSyxLQUFLQyxHQUFDLEVBQUcsTUFBTSxRQUFRLEVBQUUsS0FBSyxNQUFNQSxHQUFDLEVBQUcsTUFBTSxVQUFVQSxHQUFDLEVBQUcsTUFBTSxRQUFRLEVBQUUsS0FBSyxN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QUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLE1BQU0sRUFBRSxLQUFLLE9BQU8sSUFBSSxXQUFXLEVBQUUsUUFBUSxDQUFDLE1BQU07QUFDakssWUFBTSxJQUFJLEVBQUU7QUFDWixVQUFJLElBQUksR0FBRyxJQUFJO0FBQ2YsWUFBTSxFQUFFLGtCQUFrQixJQUFJLEVBQUUsY0FBYyxVQUFVLFFBQVEsSUFBSSxTQUFTLEVBQUUsYUFBYSxjQUFjLEdBQUcsRUFBRSxHQUFHLE9BQU8sTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUUsYUFBYSxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLE1BQU0sSUFBSSxJQUFJLENBQUM7QUFBQSxJQUNoTixDQUFDLEtBQUtBLEVBQUUsTUFBTSxhQUFhLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDakUsQ0FBQztBQUNELE1BQUksSUFBSSxFQUFFLFFBQU87QUFDakIsSUFBRSxNQUFLLEVBQUcsUUFBUSxTQUFTLEdBQUc7QUFDNUIsVUFBTSxVQUFVLEVBQUUsS0FBSyxDQUFDLE1BQU0sV0FBV0EsRUFBRSxNQUFNLFVBQVUsRUFBRSxJQUFJLFNBQVMsRUFBRSxJQUFJLE9BQU8sS0FBSyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBUTtBQUFBLEVBQ3ZKLENBQUMsR0FBRyxJQUFJLEVBQUUsUUFBTztBQUNqQixRQUFNLElBQUk7QUFBQSxJQUNSLElBQUksS0FBSztBQUFBLElBQ1QsT0FBTyxLQUFLO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsRUFDWjtBQUNFLFNBQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLElBQUksRUFBRSxTQUFTQSxFQUFFLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHO0FBQ2hILEdBQUcsV0FBVyxHQUFHLEtBQUs7QUFBQSxFQUNwQixTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQ1IsR0FBRyxLQUFLO0FBQUEsRUFDTixRQUFRSztBQUFBQSxFQUNSLElBQUksS0FBSztBQUNQLFdBQU8sSUFBSVYsR0FBRSxDQUFDO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFVBQVU7QUFBQSxFQUNWLFFBQVFXO0FBQUFBLEVBQ1IsTUFBc0JmLGtCQUFFLENBQUMsTUFBTTtBQUM3QixNQUFFLFVBQVUsRUFBRSxRQUFRLENBQUEsSUFBSyxFQUFFLE1BQU0sc0JBQXNCLEVBQUU7QUFBQSxFQUM3RCxHQUFHLE1BQU07QUFDWDsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
