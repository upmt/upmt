import { p, q as qS, L as LL, $ as $L, B as BL, F, f as ft, G as G$1, A as AL, X as Xg, x as xS, J as Jo, M as ML, K as Kv, v as vS, b as bS } from "./SynchronicGraphPage-Cfc4t7LF.js";
import { X, _ } from "./graph-CVVLTrhn-PI-07Rvs.js";
import { B as Bt } from "./layout-BFLB7GR9-_NVI22GF.js";
import { a } from "./clone-CbSBpceO-D-CCwAB2.js";
import { M as M$1 } from "./min-x5JjnDaq-CiBB28Dg.js";
import "./QPage-T9YNTdVD.js";
import "./index-DvOn-zPj.js";
import "./QBtnToggle-CVv2wrIS.js";
import "./QBtnGroup-Cmx88UKq.js";
import "./QToolbar-SnVKHSry.js";
import "./export-file-lpTZqdHO.js";
import "./_baseUniq-DbLykLaa-CpIAyELt.js";
function h(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: ee(e),
    edges: ne(e)
  };
  return _(e.graph()) || (t.value = a(e.graph())), t;
}
function ee(e) {
  return M$1(e.nodes(), function(t) {
    var n = e.node(t), a2 = e.parent(t), r = { v: t };
    return _(n) || (r.value = n), _(a2) || (r.parent = a2), r;
  });
}
function ne(e) {
  return M$1(e.edges(), function(t) {
    var n = e.edge(t), a2 = { v: t.v, w: t.w };
    return _(t.name) || (a2.name = t.name), _(n) || (a2.value = n), a2;
  });
}
var d = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ p(() => {
  y.clear(), J.clear(), d.clear();
}, "clear"), D = /* @__PURE__ */ p((e, t) => {
  const n = y.get(t) || [];
  return F.trace("In isDescendant", t, " ", e, " = ", n.includes(e)), n.includes(e);
}, "isDescendant"), se = /* @__PURE__ */ p((e, t) => {
  const n = y.get(t) || [];
  return F.info("Descendants of ", t, " is ", n), F.info("Edge is ", e), e.v === t || e.w === t ? false : n ? n.includes(e.v) || D(e.v, t) || D(e.w, t) || n.includes(e.w) : (F.debug("Tilt, ", t, ",not in descendants"), false);
}, "edgeInCluster"), G = /* @__PURE__ */ p((e, t, n, a2) => {
  F.warn(
    "Copying children of ",
    e,
    "root",
    a2,
    "data",
    t.node(e),
    a2
  );
  const r = t.children(e) || [];
  e !== a2 && r.push(e), F.warn("Copying (nodes) clusterId", e, "nodes", r), r.forEach((o) => {
    if (t.children(o).length > 0)
      G(o, t, n, a2);
    else {
      const l = t.node(o);
      F.info("cp ", o, " to ", a2, " with parent ", e), n.setNode(o, l), a2 !== t.parent(o) && (F.warn("Setting parent", o, t.parent(o)), n.setParent(o, t.parent(o))), e !== a2 && o !== e ? (F.debug("Setting parent", o, e), n.setParent(o, e)) : (F.info("In copy ", e, "root", a2, "data", t.node(e), a2), F.debug(
        "Not Setting parent for node=",
        o,
        "cluster!==rootId",
        e !== a2,
        "node!==clusterId",
        o !== e
      ));
      const u = t.edges(o);
      F.debug("Copying Edges", u), u.forEach((c) => {
        F.info("Edge", c);
        const m = t.edge(c.v, c.w, c.name);
        F.info("Edge data", m, a2);
        try {
          se(c, a2) ? (F.info("Copying as ", c.v, c.w, m, c.name), n.setEdge(c.v, c.w, m, c.name), F.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : F.info(
            "Skipping copy of edge ",
            c.v,
            "-->",
            c.w,
            " rootId: ",
            a2,
            " clusterId:",
            e
          );
        } catch (v) {
          F.error(v);
        }
      });
    }
    F.debug("Removing node", o), t.removeNode(o);
  });
}, "copy"), R = /* @__PURE__ */ p((e, t) => {
  const n = t.children(e);
  let a2 = [...n];
  for (const r of n)
    J.set(r, e), a2 = [...a2, ...R(r, t)];
  return a2;
}, "extractDescendants"), ie = /* @__PURE__ */ p((e, t, n) => {
  const a2 = e.edges().filter((c) => c.v === t || c.w === t), r = e.edges().filter((c) => c.v === n || c.w === n), o = a2.map((c) => ({ v: c.v === t ? n : c.v, w: c.w === t ? t : c.w })), l = r.map((c) => ({ v: c.v, w: c.w }));
  return o.filter((c) => l.some((m) => c.v === m.v && c.w === m.w));
}, "findCommonEdges"), C = /* @__PURE__ */ p((e, t, n) => {
  const a2 = t.children(e);
  if (F.trace("Searching children of id ", e, a2), a2.length < 1)
    return e;
  let r;
  for (const o of a2) {
    const l = C(o, t, n), u = ie(t, n, l);
    if (l)
      if (u.length > 0)
        r = l;
      else
        return l;
  }
  return r;
}, "findNonClusterChild"), k = /* @__PURE__ */ p((e) => !d.has(e) || !d.get(e).externalConnections ? e : d.has(e) ? d.get(e).id : e, "getAnchorId"), re = /* @__PURE__ */ p((e, t) => {
  if (!e || t > 10) {
    F.debug("Opting out, no graph ");
    return;
  } else
    F.debug("Opting in, graph ");
  e.nodes().forEach(function(n) {
    e.children(n).length > 0 && (F.warn(
      "Cluster identified",
      n,
      " Replacement id in edges: ",
      C(n, e, n)
    ), y.set(n, R(n, e)), d.set(n, { id: C(n, e, n), clusterData: e.node(n) }));
  }), e.nodes().forEach(function(n) {
    const a2 = e.children(n), r = e.edges();
    a2.length > 0 ? (F.debug("Cluster identified", n, y), r.forEach((o) => {
      const l = D(o.v, n), u = D(o.w, n);
      l ^ u && (F.warn("Edge: ", o, " leaves cluster ", n), F.warn("Descendants of XXX ", n, ": ", y.get(n)), d.get(n).externalConnections = true);
    })) : F.debug("Not a cluster ", n, y);
  });
  for (let n of d.keys()) {
    const a2 = d.get(n).id, r = e.parent(a2);
    r !== n && d.has(r) && !d.get(r).externalConnections && (d.get(n).id = r);
  }
  e.edges().forEach(function(n) {
    const a2 = e.edge(n);
    F.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), F.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
    let r = n.v, o = n.w;
    if (F.warn(
      "Fix XXX",
      d,
      "ids:",
      n.v,
      n.w,
      "Translating: ",
      d.get(n.v),
      " --- ",
      d.get(n.w)
    ), d.get(n.v) || d.get(n.w)) {
      if (F.warn("Fixing and trying - removing XXX", n.v, n.w, n.name), r = k(n.v), o = k(n.w), e.removeEdge(n.v, n.w, n.name), r !== n.v) {
        const l = e.parent(r);
        d.get(l).externalConnections = true, a2.fromCluster = n.v;
      }
      if (o !== n.w) {
        const l = e.parent(o);
        d.get(l).externalConnections = true, a2.toCluster = n.w;
      }
      F.warn("Fix Replacing with XXX", r, o, n.name), e.setEdge(r, o, a2, n.name);
    }
  }), F.warn("Adjusted Graph", h(e)), T(e, 0), F.trace(d);
}, "adjustClustersAndEdges"), T = /* @__PURE__ */ p((e, t) => {
  if (F.warn("extractor - ", t, h(e), e.children("D")), t > 10) {
    F.error("Bailing out");
    return;
  }
  let n = e.nodes(), a2 = false;
  for (const r of n) {
    const o = e.children(r);
    a2 = a2 || o.length > 0;
  }
  if (!a2) {
    F.debug("Done, no node has children", e.nodes());
    return;
  }
  F.debug("Nodes = ", n, t);
  for (const r of n)
    if (F.debug(
      "Extracting node",
      r,
      d,
      d.has(r) && !d.get(r).externalConnections,
      !e.parent(r),
      e.node(r),
      e.children("D"),
      " Depth ",
      t
    ), !d.has(r))
      F.debug("Not a cluster", r, t);
    else if (!d.get(r).externalConnections && e.children(r) && e.children(r).length > 0) {
      F.warn(
        "Cluster without external connections, without a parent and with children",
        r,
        t
      );
      let l = e.graph().rankdir === "TB" ? "LR" : "TB";
      d.get(r)?.clusterData?.dir && (l = d.get(r).clusterData.dir, F.warn("Fixing dir", d.get(r).clusterData.dir, l));
      const u = new X({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: l,
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      F.warn("Old graph before copy", h(e)), G(r, e, u, r), e.setNode(r, {
        clusterNode: true,
        id: r,
        clusterData: d.get(r).clusterData,
        label: d.get(r).label,
        graph: u
      }), F.warn("New graph after copy node: (", r, ")", h(u)), F.debug("Old graph after copy", h(e));
    } else
      F.warn(
        "Cluster ** ",
        r,
        " **not meeting the criteria !externalConnections:",
        !d.get(r).externalConnections,
        " no parent: ",
        !e.parent(r),
        " children ",
        e.children(r) && e.children(r).length > 0,
        e.children("D"),
        t
      ), F.debug(d);
  n = e.nodes(), F.warn("New list of nodes", n);
  for (const r of n) {
    const o = e.node(r);
    F.warn(" Now next level", r, o), o?.clusterNode && T(o.graph, t + 1);
  }
}, "extractor"), M = /* @__PURE__ */ p((e, t) => {
  if (t.length === 0)
    return [];
  let n = Object.assign([], t);
  return t.forEach((a2) => {
    const r = e.children(a2), o = M(e, r);
    n = [...n, ...o];
  }), n;
}, "sorter"), oe = /* @__PURE__ */ p((e) => M(e, e.children()), "sortNodesByHierarchy"), j = /* @__PURE__ */ p(async (e, t, n, a2, r, o) => {
  F.warn("Graph in recursive render:XAX", h(t), r);
  const l = t.graph().rankdir;
  F.trace("Dir in recursive render - dir:", l);
  const u = e.insert("g").attr("class", "root");
  t.nodes() ? F.info("Recursive render XXX", t.nodes()) : F.info("No nodes found for", t), t.edges().length > 0 && F.info("Recursive edges", t.edge(t.edges()[0]));
  const c = u.insert("g").attr("class", "clusters"), m = u.insert("g").attr("class", "edgePaths"), v = u.insert("g").attr("class", "edgeLabels"), X2 = u.insert("g").attr("class", "nodes");
  await Promise.all(
    t.nodes().map(async function(f) {
      const s = t.node(f);
      if (r !== void 0) {
        const g = JSON.parse(JSON.stringify(r.clusterData));
        F.trace(
          `Setting data for parent cluster XXX
 Node.id = `,
          f,
          `
 data=`,
          g.height,
          `
Parent cluster`,
          r.height
        ), t.setNode(r.id, g), t.parent(f) || (F.trace("Setting parent", f, r.id), t.setParent(f, r.id, g));
      }
      if (F.info("(Insert) Node XXX" + f + ": " + JSON.stringify(t.node(f))), s?.clusterNode) {
        F.info("Cluster identified XBX", f, s.width, t.node(f));
        const { ranksep: g, nodesep: E } = t.graph();
        s.graph.setGraph({
          ...s.graph.graph(),
          ranksep: g + 25,
          nodesep: E
        });
        const N = await j(
          X2,
          s.graph,
          n,
          a2,
          t.node(f),
          o
        ), x = N.elem;
        G$1(s, x), s.diff = N.diff || 0, F.info(
          "New compound node after recursive render XAX",
          f,
          "width",
          // node,
          s.width,
          "height",
          s.height
          // node.x,
          // node.y
        ), AL(x, s);
      } else
        t.children(f).length > 0 ? (F.trace(
          "Cluster - the non recursive path XBX",
          f,
          s.id,
          s,
          s.width,
          "Graph:",
          t
        ), F.trace(C(s.id, t)), d.set(s.id, { id: C(s.id, t), node: s })) : (F.trace("Node - the non recursive path XAX", f, X2, t.node(f), l), await Xg(X2, t.node(f), { config: o, dir: l }));
    })
  ), await (/* @__PURE__ */ p(async () => {
    const f = t.edges().map(async function(s) {
      const g = t.edge(s.v, s.w, s.name);
      F.info("Edge " + s.v + " -> " + s.w + ": " + JSON.stringify(s)), F.info("Edge " + s.v + " -> " + s.w + ": ", s, " ", JSON.stringify(t.edge(s))), F.info(
        "Fix",
        d,
        "ids:",
        s.v,
        s.w,
        "Translating: ",
        d.get(s.v),
        d.get(s.w)
      ), await xS(v, g);
    });
    await Promise.all(f);
  }, "processEdges"))(), F.info("Graph before layout:", JSON.stringify(h(t))), F.info("############################################# XXX"), F.info("###                Layout                 ### XXX"), F.info("############################################# XXX"), Bt(t), F.info("Graph after layout:", JSON.stringify(h(t)));
  let O = 0, { subGraphTitleTotalMargin: S } = Jo(o);
  return await Promise.all(
    oe(t).map(async function(f) {
      const s = t.node(f);
      if (F.info(
        "Position XBX => " + f + ": (" + s.x,
        "," + s.y,
        ") width: ",
        s.width,
        " height: ",
        s.height
      ), s?.clusterNode)
        s.y += S, F.info(
          "A tainted cluster node XBX1",
          f,
          s.id,
          s.width,
          s.height,
          s.x,
          s.y,
          t.parent(f)
        ), d.get(s.id).node = s, ML(s);
      else if (t.children(f).length > 0) {
        F.info(
          "A pure cluster node XBX1",
          f,
          s.id,
          s.x,
          s.y,
          s.width,
          s.height,
          t.parent(f)
        ), s.height += S, t.node(s.parentId);
        const g = s?.padding / 2 || 0, E = s?.labelBBox?.height || 0, N = E - g || 0;
        F.debug("OffsetY", N, "labelHeight", E, "halfPadding", g), await Kv(c, s), d.get(s.id).node = s;
      } else {
        const g = t.node(s.parentId);
        s.y += S / 2, F.info(
          "A regular node XBX1 - using the padding",
          s.id,
          "parent",
          s.parentId,
          s.width,
          s.height,
          s.x,
          s.y,
          "offsetY",
          s.offsetY,
          "parent",
          g,
          g?.offsetY,
          s
        ), ML(s);
      }
    })
  ), t.edges().forEach(function(f) {
    const s = t.edge(f);
    F.info("Edge " + f.v + " -> " + f.w + ": " + JSON.stringify(s), s), s.points.forEach((x) => x.y += S / 2);
    const g = t.node(f.v);
    var E = t.node(f.w);
    const N = vS(m, s, d, n, g, E, a2);
    bS(s, N);
  }), t.nodes().forEach(function(f) {
    const s = t.node(f);
    F.info(f, s.type, s.diff), s.isGroup && (O = s.diff);
  }), F.warn("Returning from recursive render XAX", u, O), { elem: u, diff: O };
}, "recursiveRender"), ue = /* @__PURE__ */ p(async (e, t) => {
  const n = new X({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: e.direction,
    nodesep: e.config?.nodeSpacing || e.config?.flowchart?.nodeSpacing || e.nodeSpacing,
    ranksep: e.config?.rankSpacing || e.config?.flowchart?.rankSpacing || e.rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), a2 = t.select("g");
  qS(a2, e.markers, e.type, e.diagramId), LL(), $L(), BL(), te(), e.nodes.forEach((o) => {
    n.setNode(o.id, { ...o }), o.parentId && n.setParent(o.id, o.parentId);
  }), F.debug("Edges:", e.edges), e.edges.forEach((o) => {
    if (o.start === o.end) {
      const l = o.start, u = l + "---" + l + "---1", c = l + "---" + l + "---2", m = n.node(l);
      n.setNode(u, {
        domId: u,
        id: u,
        parentId: m.parentId,
        labelStyle: "",
        label: "",
        padding: 0,
        shape: "labelRect",
        // shape: 'rect',
        style: "",
        width: 10,
        height: 10
      }), n.setParent(u, m.parentId), n.setNode(c, {
        domId: c,
        id: c,
        parentId: m.parentId,
        labelStyle: "",
        padding: 0,
        // shape: 'rect',
        shape: "labelRect",
        label: "",
        style: "",
        width: 10,
        height: 10
      }), n.setParent(c, m.parentId);
      const v = structuredClone(o), X2 = structuredClone(o), p2 = structuredClone(o);
      v.label = "", v.arrowTypeEnd = "none", v.id = l + "-cyclic-special-1", X2.arrowTypeStart = "none", X2.arrowTypeEnd = "none", X2.id = l + "-cyclic-special-mid", p2.label = "", m.isGroup && (v.fromCluster = l, p2.toCluster = l), p2.id = l + "-cyclic-special-2", p2.arrowTypeStart = "none", n.setEdge(l, u, v, l + "-cyclic-special-0"), n.setEdge(u, c, X2, l + "-cyclic-special-1"), n.setEdge(c, l, p2, l + "-cyc<lic-special-2");
    } else
      n.setEdge(o.start, o.end, { ...o }, o.id);
  }), F.warn("Graph at first:", JSON.stringify(h(n))), re(n), F.warn("Graph after XAX:", JSON.stringify(h(n)));
  const r = ft();
  await j(
    a2,
    n,
    e.type,
    e.diagramId,
    void 0,
    r
  );
}, "render");
export {
  ue as render
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFncmUtNlVMMlZSRlAtQllOR3F0VmctQzFTSUljRmcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbWVybWFpZC1zdHJpbmcvZGlzdC9kYWdyZS02VUwyVlJGUC1CWU5HcXRWZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIHcsIGFyIGFzIEYsIGFzIGFzIFksIGF0IGFzIF8sIGF1IGFzIEgsIGwgYXMgaSwgYyBhcyBWLCBhdiBhcyB6LCBhdyBhcyBVLCBhZyBhcyAkLCBhbCBhcyBxLCBhaCBhcyBQLCBhZiBhcyBLLCBheCBhcyBRLCBheSBhcyBXLCBheiBhcyBaIH0gZnJvbSBcIi4vZW50cnktQjJWWC1reGEuanNcIjtcbmltcG9ydCB7IGkgYXMgYiwgRyBhcyBCIH0gZnJvbSBcIi4vZ3JhcGgtQ1ZWTFRyaG4uanNcIjtcbmltcG9ydCB7IGwgYXMgSSB9IGZyb20gXCIuL2xheW91dC1CRkxCN0dSOS5qc1wiO1xuaW1wb3J0IHsgYyBhcyBMIH0gZnJvbSBcIi4vY2xvbmUtQ2JTQnBjZU8uanNcIjtcbmltcG9ydCB7IG0gYXMgQSB9IGZyb20gXCIuL21pbi14NUpqbkRhcS5qc1wiO1xuZnVuY3Rpb24gaChlKSB7XG4gIHZhciB0ID0ge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIGRpcmVjdGVkOiBlLmlzRGlyZWN0ZWQoKSxcbiAgICAgIG11bHRpZ3JhcGg6IGUuaXNNdWx0aWdyYXBoKCksXG4gICAgICBjb21wb3VuZDogZS5pc0NvbXBvdW5kKClcbiAgICB9LFxuICAgIG5vZGVzOiBlZShlKSxcbiAgICBlZGdlczogbmUoZSlcbiAgfTtcbiAgcmV0dXJuIGIoZS5ncmFwaCgpKSB8fCAodC52YWx1ZSA9IEwoZS5ncmFwaCgpKSksIHQ7XG59XG5mdW5jdGlvbiBlZShlKSB7XG4gIHJldHVybiBBKGUubm9kZXMoKSwgZnVuY3Rpb24odCkge1xuICAgIHZhciBuID0gZS5ub2RlKHQpLCBhID0gZS5wYXJlbnQodCksIHIgPSB7IHY6IHQgfTtcbiAgICByZXR1cm4gYihuKSB8fCAoci52YWx1ZSA9IG4pLCBiKGEpIHx8IChyLnBhcmVudCA9IGEpLCByO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5lKGUpIHtcbiAgcmV0dXJuIEEoZS5lZGdlcygpLCBmdW5jdGlvbih0KSB7XG4gICAgdmFyIG4gPSBlLmVkZ2UodCksIGEgPSB7IHY6IHQudiwgdzogdC53IH07XG4gICAgcmV0dXJuIGIodC5uYW1lKSB8fCAoYS5uYW1lID0gdC5uYW1lKSwgYihuKSB8fCAoYS52YWx1ZSA9IG4pLCBhO1xuICB9KTtcbn1cbnZhciBkID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgeSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIEogPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB0ZSA9IC8qIEBfX1BVUkVfXyAqLyB3KCgpID0+IHtcbiAgeS5jbGVhcigpLCBKLmNsZWFyKCksIGQuY2xlYXIoKTtcbn0sIFwiY2xlYXJcIiksIEQgPSAvKiBAX19QVVJFX18gKi8gdygoZSwgdCkgPT4ge1xuICBjb25zdCBuID0geS5nZXQodCkgfHwgW107XG4gIHJldHVybiBpLnRyYWNlKFwiSW4gaXNEZXNjZW5kYW50XCIsIHQsIFwiIFwiLCBlLCBcIiA9IFwiLCBuLmluY2x1ZGVzKGUpKSwgbi5pbmNsdWRlcyhlKTtcbn0sIFwiaXNEZXNjZW5kYW50XCIpLCBzZSA9IC8qIEBfX1BVUkVfXyAqLyB3KChlLCB0KSA9PiB7XG4gIGNvbnN0IG4gPSB5LmdldCh0KSB8fCBbXTtcbiAgcmV0dXJuIGkuaW5mbyhcIkRlc2NlbmRhbnRzIG9mIFwiLCB0LCBcIiBpcyBcIiwgbiksIGkuaW5mbyhcIkVkZ2UgaXMgXCIsIGUpLCBlLnYgPT09IHQgfHwgZS53ID09PSB0ID8gITEgOiBuID8gbi5pbmNsdWRlcyhlLnYpIHx8IEQoZS52LCB0KSB8fCBEKGUudywgdCkgfHwgbi5pbmNsdWRlcyhlLncpIDogKGkuZGVidWcoXCJUaWx0LCBcIiwgdCwgXCIsbm90IGluIGRlc2NlbmRhbnRzXCIpLCAhMSk7XG59LCBcImVkZ2VJbkNsdXN0ZXJcIiksIEcgPSAvKiBAX19QVVJFX18gKi8gdygoZSwgdCwgbiwgYSkgPT4ge1xuICBpLndhcm4oXG4gICAgXCJDb3B5aW5nIGNoaWxkcmVuIG9mIFwiLFxuICAgIGUsXG4gICAgXCJyb290XCIsXG4gICAgYSxcbiAgICBcImRhdGFcIixcbiAgICB0Lm5vZGUoZSksXG4gICAgYVxuICApO1xuICBjb25zdCByID0gdC5jaGlsZHJlbihlKSB8fCBbXTtcbiAgZSAhPT0gYSAmJiByLnB1c2goZSksIGkud2FybihcIkNvcHlpbmcgKG5vZGVzKSBjbHVzdGVySWRcIiwgZSwgXCJub2Rlc1wiLCByKSwgci5mb3JFYWNoKChvKSA9PiB7XG4gICAgaWYgKHQuY2hpbGRyZW4obykubGVuZ3RoID4gMClcbiAgICAgIEcobywgdCwgbiwgYSk7XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBsID0gdC5ub2RlKG8pO1xuICAgICAgaS5pbmZvKFwiY3AgXCIsIG8sIFwiIHRvIFwiLCBhLCBcIiB3aXRoIHBhcmVudCBcIiwgZSksIG4uc2V0Tm9kZShvLCBsKSwgYSAhPT0gdC5wYXJlbnQobykgJiYgKGkud2FybihcIlNldHRpbmcgcGFyZW50XCIsIG8sIHQucGFyZW50KG8pKSwgbi5zZXRQYXJlbnQobywgdC5wYXJlbnQobykpKSwgZSAhPT0gYSAmJiBvICE9PSBlID8gKGkuZGVidWcoXCJTZXR0aW5nIHBhcmVudFwiLCBvLCBlKSwgbi5zZXRQYXJlbnQobywgZSkpIDogKGkuaW5mbyhcIkluIGNvcHkgXCIsIGUsIFwicm9vdFwiLCBhLCBcImRhdGFcIiwgdC5ub2RlKGUpLCBhKSwgaS5kZWJ1ZyhcbiAgICAgICAgXCJOb3QgU2V0dGluZyBwYXJlbnQgZm9yIG5vZGU9XCIsXG4gICAgICAgIG8sXG4gICAgICAgIFwiY2x1c3RlciE9PXJvb3RJZFwiLFxuICAgICAgICBlICE9PSBhLFxuICAgICAgICBcIm5vZGUhPT1jbHVzdGVySWRcIixcbiAgICAgICAgbyAhPT0gZVxuICAgICAgKSk7XG4gICAgICBjb25zdCB1ID0gdC5lZGdlcyhvKTtcbiAgICAgIGkuZGVidWcoXCJDb3B5aW5nIEVkZ2VzXCIsIHUpLCB1LmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgaS5pbmZvKFwiRWRnZVwiLCBjKTtcbiAgICAgICAgY29uc3QgbSA9IHQuZWRnZShjLnYsIGMudywgYy5uYW1lKTtcbiAgICAgICAgaS5pbmZvKFwiRWRnZSBkYXRhXCIsIG0sIGEpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHNlKGMsIGEpID8gKGkuaW5mbyhcIkNvcHlpbmcgYXMgXCIsIGMudiwgYy53LCBtLCBjLm5hbWUpLCBuLnNldEVkZ2UoYy52LCBjLncsIG0sIGMubmFtZSksIGkuaW5mbyhcIm5ld0dyYXBoIGVkZ2VzIFwiLCBuLmVkZ2VzKCksIG4uZWRnZShuLmVkZ2VzKClbMF0pKSkgOiBpLmluZm8oXG4gICAgICAgICAgICBcIlNraXBwaW5nIGNvcHkgb2YgZWRnZSBcIixcbiAgICAgICAgICAgIGMudixcbiAgICAgICAgICAgIFwiLS0+XCIsXG4gICAgICAgICAgICBjLncsXG4gICAgICAgICAgICBcIiByb290SWQ6IFwiLFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIFwiIGNsdXN0ZXJJZDpcIixcbiAgICAgICAgICAgIGVcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoICh2KSB7XG4gICAgICAgICAgaS5lcnJvcih2KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGkuZGVidWcoXCJSZW1vdmluZyBub2RlXCIsIG8pLCB0LnJlbW92ZU5vZGUobyk7XG4gIH0pO1xufSwgXCJjb3B5XCIpLCBSID0gLyogQF9fUFVSRV9fICovIHcoKGUsIHQpID0+IHtcbiAgY29uc3QgbiA9IHQuY2hpbGRyZW4oZSk7XG4gIGxldCBhID0gWy4uLm5dO1xuICBmb3IgKGNvbnN0IHIgb2YgbilcbiAgICBKLnNldChyLCBlKSwgYSA9IFsuLi5hLCAuLi5SKHIsIHQpXTtcbiAgcmV0dXJuIGE7XG59LCBcImV4dHJhY3REZXNjZW5kYW50c1wiKSwgaWUgPSAvKiBAX19QVVJFX18gKi8gdygoZSwgdCwgbikgPT4ge1xuICBjb25zdCBhID0gZS5lZGdlcygpLmZpbHRlcigoYykgPT4gYy52ID09PSB0IHx8IGMudyA9PT0gdCksIHIgPSBlLmVkZ2VzKCkuZmlsdGVyKChjKSA9PiBjLnYgPT09IG4gfHwgYy53ID09PSBuKSwgbyA9IGEubWFwKChjKSA9PiAoeyB2OiBjLnYgPT09IHQgPyBuIDogYy52LCB3OiBjLncgPT09IHQgPyB0IDogYy53IH0pKSwgbCA9IHIubWFwKChjKSA9PiAoeyB2OiBjLnYsIHc6IGMudyB9KSk7XG4gIHJldHVybiBvLmZpbHRlcigoYykgPT4gbC5zb21lKChtKSA9PiBjLnYgPT09IG0udiAmJiBjLncgPT09IG0udykpO1xufSwgXCJmaW5kQ29tbW9uRWRnZXNcIiksIEMgPSAvKiBAX19QVVJFX18gKi8gdygoZSwgdCwgbikgPT4ge1xuICBjb25zdCBhID0gdC5jaGlsZHJlbihlKTtcbiAgaWYgKGkudHJhY2UoXCJTZWFyY2hpbmcgY2hpbGRyZW4gb2YgaWQgXCIsIGUsIGEpLCBhLmxlbmd0aCA8IDEpXG4gICAgcmV0dXJuIGU7XG4gIGxldCByO1xuICBmb3IgKGNvbnN0IG8gb2YgYSkge1xuICAgIGNvbnN0IGwgPSBDKG8sIHQsIG4pLCB1ID0gaWUodCwgbiwgbCk7XG4gICAgaWYgKGwpXG4gICAgICBpZiAodS5sZW5ndGggPiAwKVxuICAgICAgICByID0gbDtcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGw7XG4gIH1cbiAgcmV0dXJuIHI7XG59LCBcImZpbmROb25DbHVzdGVyQ2hpbGRcIiksIGsgPSAvKiBAX19QVVJFX18gKi8gdygoZSkgPT4gIWQuaGFzKGUpIHx8ICFkLmdldChlKS5leHRlcm5hbENvbm5lY3Rpb25zID8gZSA6IGQuaGFzKGUpID8gZC5nZXQoZSkuaWQgOiBlLCBcImdldEFuY2hvcklkXCIpLCByZSA9IC8qIEBfX1BVUkVfXyAqLyB3KChlLCB0KSA9PiB7XG4gIGlmICghZSB8fCB0ID4gMTApIHtcbiAgICBpLmRlYnVnKFwiT3B0aW5nIG91dCwgbm8gZ3JhcGggXCIpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlXG4gICAgaS5kZWJ1ZyhcIk9wdGluZyBpbiwgZ3JhcGggXCIpO1xuICBlLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihuKSB7XG4gICAgZS5jaGlsZHJlbihuKS5sZW5ndGggPiAwICYmIChpLndhcm4oXG4gICAgICBcIkNsdXN0ZXIgaWRlbnRpZmllZFwiLFxuICAgICAgbixcbiAgICAgIFwiIFJlcGxhY2VtZW50IGlkIGluIGVkZ2VzOiBcIixcbiAgICAgIEMobiwgZSwgbilcbiAgICApLCB5LnNldChuLCBSKG4sIGUpKSwgZC5zZXQobiwgeyBpZDogQyhuLCBlLCBuKSwgY2x1c3RlckRhdGE6IGUubm9kZShuKSB9KSk7XG4gIH0pLCBlLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihuKSB7XG4gICAgY29uc3QgYSA9IGUuY2hpbGRyZW4obiksIHIgPSBlLmVkZ2VzKCk7XG4gICAgYS5sZW5ndGggPiAwID8gKGkuZGVidWcoXCJDbHVzdGVyIGlkZW50aWZpZWRcIiwgbiwgeSksIHIuZm9yRWFjaCgobykgPT4ge1xuICAgICAgY29uc3QgbCA9IEQoby52LCBuKSwgdSA9IEQoby53LCBuKTtcbiAgICAgIGwgXiB1ICYmIChpLndhcm4oXCJFZGdlOiBcIiwgbywgXCIgbGVhdmVzIGNsdXN0ZXIgXCIsIG4pLCBpLndhcm4oXCJEZXNjZW5kYW50cyBvZiBYWFggXCIsIG4sIFwiOiBcIiwgeS5nZXQobikpLCBkLmdldChuKS5leHRlcm5hbENvbm5lY3Rpb25zID0gITApO1xuICAgIH0pKSA6IGkuZGVidWcoXCJOb3QgYSBjbHVzdGVyIFwiLCBuLCB5KTtcbiAgfSk7XG4gIGZvciAobGV0IG4gb2YgZC5rZXlzKCkpIHtcbiAgICBjb25zdCBhID0gZC5nZXQobikuaWQsIHIgPSBlLnBhcmVudChhKTtcbiAgICByICE9PSBuICYmIGQuaGFzKHIpICYmICFkLmdldChyKS5leHRlcm5hbENvbm5lY3Rpb25zICYmIChkLmdldChuKS5pZCA9IHIpO1xuICB9XG4gIGUuZWRnZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICBjb25zdCBhID0gZS5lZGdlKG4pO1xuICAgIGkud2FybihcIkVkZ2UgXCIgKyBuLnYgKyBcIiAtPiBcIiArIG4udyArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KG4pKSwgaS53YXJuKFwiRWRnZSBcIiArIG4udiArIFwiIC0+IFwiICsgbi53ICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZS5lZGdlKG4pKSk7XG4gICAgbGV0IHIgPSBuLnYsIG8gPSBuLnc7XG4gICAgaWYgKGkud2FybihcbiAgICAgIFwiRml4IFhYWFwiLFxuICAgICAgZCxcbiAgICAgIFwiaWRzOlwiLFxuICAgICAgbi52LFxuICAgICAgbi53LFxuICAgICAgXCJUcmFuc2xhdGluZzogXCIsXG4gICAgICBkLmdldChuLnYpLFxuICAgICAgXCIgLS0tIFwiLFxuICAgICAgZC5nZXQobi53KVxuICAgICksIGQuZ2V0KG4udikgfHwgZC5nZXQobi53KSkge1xuICAgICAgaWYgKGkud2FybihcIkZpeGluZyBhbmQgdHJ5aW5nIC0gcmVtb3ZpbmcgWFhYXCIsIG4udiwgbi53LCBuLm5hbWUpLCByID0gayhuLnYpLCBvID0gayhuLncpLCBlLnJlbW92ZUVkZ2Uobi52LCBuLncsIG4ubmFtZSksIHIgIT09IG4udikge1xuICAgICAgICBjb25zdCBsID0gZS5wYXJlbnQocik7XG4gICAgICAgIGQuZ2V0KGwpLmV4dGVybmFsQ29ubmVjdGlvbnMgPSAhMCwgYS5mcm9tQ2x1c3RlciA9IG4udjtcbiAgICAgIH1cbiAgICAgIGlmIChvICE9PSBuLncpIHtcbiAgICAgICAgY29uc3QgbCA9IGUucGFyZW50KG8pO1xuICAgICAgICBkLmdldChsKS5leHRlcm5hbENvbm5lY3Rpb25zID0gITAsIGEudG9DbHVzdGVyID0gbi53O1xuICAgICAgfVxuICAgICAgaS53YXJuKFwiRml4IFJlcGxhY2luZyB3aXRoIFhYWFwiLCByLCBvLCBuLm5hbWUpLCBlLnNldEVkZ2UociwgbywgYSwgbi5uYW1lKTtcbiAgICB9XG4gIH0pLCBpLndhcm4oXCJBZGp1c3RlZCBHcmFwaFwiLCBoKGUpKSwgVChlLCAwKSwgaS50cmFjZShkKTtcbn0sIFwiYWRqdXN0Q2x1c3RlcnNBbmRFZGdlc1wiKSwgVCA9IC8qIEBfX1BVUkVfXyAqLyB3KChlLCB0KSA9PiB7XG4gIGlmIChpLndhcm4oXCJleHRyYWN0b3IgLSBcIiwgdCwgaChlKSwgZS5jaGlsZHJlbihcIkRcIikpLCB0ID4gMTApIHtcbiAgICBpLmVycm9yKFwiQmFpbGluZyBvdXRcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBuID0gZS5ub2RlcygpLCBhID0gITE7XG4gIGZvciAoY29uc3QgciBvZiBuKSB7XG4gICAgY29uc3QgbyA9IGUuY2hpbGRyZW4ocik7XG4gICAgYSA9IGEgfHwgby5sZW5ndGggPiAwO1xuICB9XG4gIGlmICghYSkge1xuICAgIGkuZGVidWcoXCJEb25lLCBubyBub2RlIGhhcyBjaGlsZHJlblwiLCBlLm5vZGVzKCkpO1xuICAgIHJldHVybjtcbiAgfVxuICBpLmRlYnVnKFwiTm9kZXMgPSBcIiwgbiwgdCk7XG4gIGZvciAoY29uc3QgciBvZiBuKVxuICAgIGlmIChpLmRlYnVnKFxuICAgICAgXCJFeHRyYWN0aW5nIG5vZGVcIixcbiAgICAgIHIsXG4gICAgICBkLFxuICAgICAgZC5oYXMocikgJiYgIWQuZ2V0KHIpLmV4dGVybmFsQ29ubmVjdGlvbnMsXG4gICAgICAhZS5wYXJlbnQociksXG4gICAgICBlLm5vZGUociksXG4gICAgICBlLmNoaWxkcmVuKFwiRFwiKSxcbiAgICAgIFwiIERlcHRoIFwiLFxuICAgICAgdFxuICAgICksICFkLmhhcyhyKSlcbiAgICAgIGkuZGVidWcoXCJOb3QgYSBjbHVzdGVyXCIsIHIsIHQpO1xuICAgIGVsc2UgaWYgKCFkLmdldChyKS5leHRlcm5hbENvbm5lY3Rpb25zICYmIGUuY2hpbGRyZW4ocikgJiYgZS5jaGlsZHJlbihyKS5sZW5ndGggPiAwKSB7XG4gICAgICBpLndhcm4oXG4gICAgICAgIFwiQ2x1c3RlciB3aXRob3V0IGV4dGVybmFsIGNvbm5lY3Rpb25zLCB3aXRob3V0IGEgcGFyZW50IGFuZCB3aXRoIGNoaWxkcmVuXCIsXG4gICAgICAgIHIsXG4gICAgICAgIHRcbiAgICAgICk7XG4gICAgICBsZXQgbCA9IGUuZ3JhcGgoKS5yYW5rZGlyID09PSBcIlRCXCIgPyBcIkxSXCIgOiBcIlRCXCI7XG4gICAgICBkLmdldChyKT8uY2x1c3RlckRhdGE/LmRpciAmJiAobCA9IGQuZ2V0KHIpLmNsdXN0ZXJEYXRhLmRpciwgaS53YXJuKFwiRml4aW5nIGRpclwiLCBkLmdldChyKS5jbHVzdGVyRGF0YS5kaXIsIGwpKTtcbiAgICAgIGNvbnN0IHUgPSBuZXcgQih7XG4gICAgICAgIG11bHRpZ3JhcGg6ICEwLFxuICAgICAgICBjb21wb3VuZDogITBcbiAgICAgIH0pLnNldEdyYXBoKHtcbiAgICAgICAgcmFua2RpcjogbCxcbiAgICAgICAgbm9kZXNlcDogNTAsXG4gICAgICAgIHJhbmtzZXA6IDUwLFxuICAgICAgICBtYXJnaW54OiA4LFxuICAgICAgICBtYXJnaW55OiA4XG4gICAgICB9KS5zZXREZWZhdWx0RWRnZUxhYmVsKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9KTtcbiAgICAgIGkud2FybihcIk9sZCBncmFwaCBiZWZvcmUgY29weVwiLCBoKGUpKSwgRyhyLCBlLCB1LCByKSwgZS5zZXROb2RlKHIsIHtcbiAgICAgICAgY2x1c3Rlck5vZGU6ICEwLFxuICAgICAgICBpZDogcixcbiAgICAgICAgY2x1c3RlckRhdGE6IGQuZ2V0KHIpLmNsdXN0ZXJEYXRhLFxuICAgICAgICBsYWJlbDogZC5nZXQocikubGFiZWwsXG4gICAgICAgIGdyYXBoOiB1XG4gICAgICB9KSwgaS53YXJuKFwiTmV3IGdyYXBoIGFmdGVyIGNvcHkgbm9kZTogKFwiLCByLCBcIilcIiwgaCh1KSksIGkuZGVidWcoXCJPbGQgZ3JhcGggYWZ0ZXIgY29weVwiLCBoKGUpKTtcbiAgICB9IGVsc2VcbiAgICAgIGkud2FybihcbiAgICAgICAgXCJDbHVzdGVyICoqIFwiLFxuICAgICAgICByLFxuICAgICAgICBcIiAqKm5vdCBtZWV0aW5nIHRoZSBjcml0ZXJpYSAhZXh0ZXJuYWxDb25uZWN0aW9uczpcIixcbiAgICAgICAgIWQuZ2V0KHIpLmV4dGVybmFsQ29ubmVjdGlvbnMsXG4gICAgICAgIFwiIG5vIHBhcmVudDogXCIsXG4gICAgICAgICFlLnBhcmVudChyKSxcbiAgICAgICAgXCIgY2hpbGRyZW4gXCIsXG4gICAgICAgIGUuY2hpbGRyZW4ocikgJiYgZS5jaGlsZHJlbihyKS5sZW5ndGggPiAwLFxuICAgICAgICBlLmNoaWxkcmVuKFwiRFwiKSxcbiAgICAgICAgdFxuICAgICAgKSwgaS5kZWJ1ZyhkKTtcbiAgbiA9IGUubm9kZXMoKSwgaS53YXJuKFwiTmV3IGxpc3Qgb2Ygbm9kZXNcIiwgbik7XG4gIGZvciAoY29uc3QgciBvZiBuKSB7XG4gICAgY29uc3QgbyA9IGUubm9kZShyKTtcbiAgICBpLndhcm4oXCIgTm93IG5leHQgbGV2ZWxcIiwgciwgbyksIG8/LmNsdXN0ZXJOb2RlICYmIFQoby5ncmFwaCwgdCArIDEpO1xuICB9XG59LCBcImV4dHJhY3RvclwiKSwgTSA9IC8qIEBfX1BVUkVfXyAqLyB3KChlLCB0KSA9PiB7XG4gIGlmICh0Lmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gW107XG4gIGxldCBuID0gT2JqZWN0LmFzc2lnbihbXSwgdCk7XG4gIHJldHVybiB0LmZvckVhY2goKGEpID0+IHtcbiAgICBjb25zdCByID0gZS5jaGlsZHJlbihhKSwgbyA9IE0oZSwgcik7XG4gICAgbiA9IFsuLi5uLCAuLi5vXTtcbiAgfSksIG47XG59LCBcInNvcnRlclwiKSwgb2UgPSAvKiBAX19QVVJFX18gKi8gdygoZSkgPT4gTShlLCBlLmNoaWxkcmVuKCkpLCBcInNvcnROb2Rlc0J5SGllcmFyY2h5XCIpLCBqID0gLyogQF9fUFVSRV9fICovIHcoYXN5bmMgKGUsIHQsIG4sIGEsIHIsIG8pID0+IHtcbiAgaS53YXJuKFwiR3JhcGggaW4gcmVjdXJzaXZlIHJlbmRlcjpYQVhcIiwgaCh0KSwgcik7XG4gIGNvbnN0IGwgPSB0LmdyYXBoKCkucmFua2RpcjtcbiAgaS50cmFjZShcIkRpciBpbiByZWN1cnNpdmUgcmVuZGVyIC0gZGlyOlwiLCBsKTtcbiAgY29uc3QgdSA9IGUuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJyb290XCIpO1xuICB0Lm5vZGVzKCkgPyBpLmluZm8oXCJSZWN1cnNpdmUgcmVuZGVyIFhYWFwiLCB0Lm5vZGVzKCkpIDogaS5pbmZvKFwiTm8gbm9kZXMgZm91bmQgZm9yXCIsIHQpLCB0LmVkZ2VzKCkubGVuZ3RoID4gMCAmJiBpLmluZm8oXCJSZWN1cnNpdmUgZWRnZXNcIiwgdC5lZGdlKHQuZWRnZXMoKVswXSkpO1xuICBjb25zdCBjID0gdS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNsdXN0ZXJzXCIpLCBtID0gdS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImVkZ2VQYXRoc1wiKSwgdiA9IHUuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJlZGdlTGFiZWxzXCIpLCBYID0gdS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVzXCIpO1xuICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICB0Lm5vZGVzKCkubWFwKGFzeW5jIGZ1bmN0aW9uKGYpIHtcbiAgICAgIGNvbnN0IHMgPSB0Lm5vZGUoZik7XG4gICAgICBpZiAociAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IGcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHIuY2x1c3RlckRhdGEpKTtcbiAgICAgICAgaS50cmFjZShcbiAgICAgICAgICBgU2V0dGluZyBkYXRhIGZvciBwYXJlbnQgY2x1c3RlciBYWFhcbiBOb2RlLmlkID0gYCxcbiAgICAgICAgICBmLFxuICAgICAgICAgIGBcbiBkYXRhPWAsXG4gICAgICAgICAgZy5oZWlnaHQsXG4gICAgICAgICAgYFxuUGFyZW50IGNsdXN0ZXJgLFxuICAgICAgICAgIHIuaGVpZ2h0XG4gICAgICAgICksIHQuc2V0Tm9kZShyLmlkLCBnKSwgdC5wYXJlbnQoZikgfHwgKGkudHJhY2UoXCJTZXR0aW5nIHBhcmVudFwiLCBmLCByLmlkKSwgdC5zZXRQYXJlbnQoZiwgci5pZCwgZykpO1xuICAgICAgfVxuICAgICAgaWYgKGkuaW5mbyhcIihJbnNlcnQpIE5vZGUgWFhYXCIgKyBmICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkodC5ub2RlKGYpKSksIHM/LmNsdXN0ZXJOb2RlKSB7XG4gICAgICAgIGkuaW5mbyhcIkNsdXN0ZXIgaWRlbnRpZmllZCBYQlhcIiwgZiwgcy53aWR0aCwgdC5ub2RlKGYpKTtcbiAgICAgICAgY29uc3QgeyByYW5rc2VwOiBnLCBub2Rlc2VwOiBFIH0gPSB0LmdyYXBoKCk7XG4gICAgICAgIHMuZ3JhcGguc2V0R3JhcGgoe1xuICAgICAgICAgIC4uLnMuZ3JhcGguZ3JhcGgoKSxcbiAgICAgICAgICByYW5rc2VwOiBnICsgMjUsXG4gICAgICAgICAgbm9kZXNlcDogRVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgTiA9IGF3YWl0IGooXG4gICAgICAgICAgWCxcbiAgICAgICAgICBzLmdyYXBoLFxuICAgICAgICAgIG4sXG4gICAgICAgICAgYSxcbiAgICAgICAgICB0Lm5vZGUoZiksXG4gICAgICAgICAgb1xuICAgICAgICApLCB4ID0gTi5lbGVtO1xuICAgICAgICB6KHMsIHgpLCBzLmRpZmYgPSBOLmRpZmYgfHwgMCwgaS5pbmZvKFxuICAgICAgICAgIFwiTmV3IGNvbXBvdW5kIG5vZGUgYWZ0ZXIgcmVjdXJzaXZlIHJlbmRlciBYQVhcIixcbiAgICAgICAgICBmLFxuICAgICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgICAvLyBub2RlLFxuICAgICAgICAgIHMud2lkdGgsXG4gICAgICAgICAgXCJoZWlnaHRcIixcbiAgICAgICAgICBzLmhlaWdodFxuICAgICAgICAgIC8vIG5vZGUueCxcbiAgICAgICAgICAvLyBub2RlLnlcbiAgICAgICAgKSwgVSh4LCBzKTtcbiAgICAgIH0gZWxzZVxuICAgICAgICB0LmNoaWxkcmVuKGYpLmxlbmd0aCA+IDAgPyAoaS50cmFjZShcbiAgICAgICAgICBcIkNsdXN0ZXIgLSB0aGUgbm9uIHJlY3Vyc2l2ZSBwYXRoIFhCWFwiLFxuICAgICAgICAgIGYsXG4gICAgICAgICAgcy5pZCxcbiAgICAgICAgICBzLFxuICAgICAgICAgIHMud2lkdGgsXG4gICAgICAgICAgXCJHcmFwaDpcIixcbiAgICAgICAgICB0XG4gICAgICAgICksIGkudHJhY2UoQyhzLmlkLCB0KSksIGQuc2V0KHMuaWQsIHsgaWQ6IEMocy5pZCwgdCksIG5vZGU6IHMgfSkpIDogKGkudHJhY2UoXCJOb2RlIC0gdGhlIG5vbiByZWN1cnNpdmUgcGF0aCBYQVhcIiwgZiwgWCwgdC5ub2RlKGYpLCBsKSwgYXdhaXQgJChYLCB0Lm5vZGUoZiksIHsgY29uZmlnOiBvLCBkaXI6IGwgfSkpO1xuICAgIH0pXG4gICksIGF3YWl0ICgvKiBAX19QVVJFX18gKi8gdyhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZiA9IHQuZWRnZXMoKS5tYXAoYXN5bmMgZnVuY3Rpb24ocykge1xuICAgICAgY29uc3QgZyA9IHQuZWRnZShzLnYsIHMudywgcy5uYW1lKTtcbiAgICAgIGkuaW5mbyhcIkVkZ2UgXCIgKyBzLnYgKyBcIiAtPiBcIiArIHMudyArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KHMpKSwgaS5pbmZvKFwiRWRnZSBcIiArIHMudiArIFwiIC0+IFwiICsgcy53ICsgXCI6IFwiLCBzLCBcIiBcIiwgSlNPTi5zdHJpbmdpZnkodC5lZGdlKHMpKSksIGkuaW5mbyhcbiAgICAgICAgXCJGaXhcIixcbiAgICAgICAgZCxcbiAgICAgICAgXCJpZHM6XCIsXG4gICAgICAgIHMudixcbiAgICAgICAgcy53LFxuICAgICAgICBcIlRyYW5zbGF0aW5nOiBcIixcbiAgICAgICAgZC5nZXQocy52KSxcbiAgICAgICAgZC5nZXQocy53KVxuICAgICAgKSwgYXdhaXQgWih2LCBnKTtcbiAgICB9KTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChmKTtcbiAgfSwgXCJwcm9jZXNzRWRnZXNcIikpKCksIGkuaW5mbyhcIkdyYXBoIGJlZm9yZSBsYXlvdXQ6XCIsIEpTT04uc3RyaW5naWZ5KGgodCkpKSwgaS5pbmZvKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFhYWFwiKSwgaS5pbmZvKFwiIyMjICAgICAgICAgICAgICAgIExheW91dCAgICAgICAgICAgICAgICAgIyMjIFhYWFwiKSwgaS5pbmZvKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFhYWFwiKSwgSSh0KSwgaS5pbmZvKFwiR3JhcGggYWZ0ZXIgbGF5b3V0OlwiLCBKU09OLnN0cmluZ2lmeShoKHQpKSk7XG4gIGxldCBPID0gMCwgeyBzdWJHcmFwaFRpdGxlVG90YWxNYXJnaW46IFMgfSA9IHEobyk7XG4gIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBvZSh0KS5tYXAoYXN5bmMgZnVuY3Rpb24oZikge1xuICAgICAgY29uc3QgcyA9IHQubm9kZShmKTtcbiAgICAgIGlmIChpLmluZm8oXG4gICAgICAgIFwiUG9zaXRpb24gWEJYID0+IFwiICsgZiArIFwiOiAoXCIgKyBzLngsXG4gICAgICAgIFwiLFwiICsgcy55LFxuICAgICAgICBcIikgd2lkdGg6IFwiLFxuICAgICAgICBzLndpZHRoLFxuICAgICAgICBcIiBoZWlnaHQ6IFwiLFxuICAgICAgICBzLmhlaWdodFxuICAgICAgKSwgcz8uY2x1c3Rlck5vZGUpXG4gICAgICAgIHMueSArPSBTLCBpLmluZm8oXG4gICAgICAgICAgXCJBIHRhaW50ZWQgY2x1c3RlciBub2RlIFhCWDFcIixcbiAgICAgICAgICBmLFxuICAgICAgICAgIHMuaWQsXG4gICAgICAgICAgcy53aWR0aCxcbiAgICAgICAgICBzLmhlaWdodCxcbiAgICAgICAgICBzLngsXG4gICAgICAgICAgcy55LFxuICAgICAgICAgIHQucGFyZW50KGYpXG4gICAgICAgICksIGQuZ2V0KHMuaWQpLm5vZGUgPSBzLCBQKHMpO1xuICAgICAgZWxzZSBpZiAodC5jaGlsZHJlbihmKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGkuaW5mbyhcbiAgICAgICAgICBcIkEgcHVyZSBjbHVzdGVyIG5vZGUgWEJYMVwiLFxuICAgICAgICAgIGYsXG4gICAgICAgICAgcy5pZCxcbiAgICAgICAgICBzLngsXG4gICAgICAgICAgcy55LFxuICAgICAgICAgIHMud2lkdGgsXG4gICAgICAgICAgcy5oZWlnaHQsXG4gICAgICAgICAgdC5wYXJlbnQoZilcbiAgICAgICAgKSwgcy5oZWlnaHQgKz0gUywgdC5ub2RlKHMucGFyZW50SWQpO1xuICAgICAgICBjb25zdCBnID0gcz8ucGFkZGluZyAvIDIgfHwgMCwgRSA9IHM/LmxhYmVsQkJveD8uaGVpZ2h0IHx8IDAsIE4gPSBFIC0gZyB8fCAwO1xuICAgICAgICBpLmRlYnVnKFwiT2Zmc2V0WVwiLCBOLCBcImxhYmVsSGVpZ2h0XCIsIEUsIFwiaGFsZlBhZGRpbmdcIiwgZyksIGF3YWl0IEsoYywgcyksIGQuZ2V0KHMuaWQpLm5vZGUgPSBzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZyA9IHQubm9kZShzLnBhcmVudElkKTtcbiAgICAgICAgcy55ICs9IFMgLyAyLCBpLmluZm8oXG4gICAgICAgICAgXCJBIHJlZ3VsYXIgbm9kZSBYQlgxIC0gdXNpbmcgdGhlIHBhZGRpbmdcIixcbiAgICAgICAgICBzLmlkLFxuICAgICAgICAgIFwicGFyZW50XCIsXG4gICAgICAgICAgcy5wYXJlbnRJZCxcbiAgICAgICAgICBzLndpZHRoLFxuICAgICAgICAgIHMuaGVpZ2h0LFxuICAgICAgICAgIHMueCxcbiAgICAgICAgICBzLnksXG4gICAgICAgICAgXCJvZmZzZXRZXCIsXG4gICAgICAgICAgcy5vZmZzZXRZLFxuICAgICAgICAgIFwicGFyZW50XCIsXG4gICAgICAgICAgZyxcbiAgICAgICAgICBnPy5vZmZzZXRZLFxuICAgICAgICAgIHNcbiAgICAgICAgKSwgUChzKTtcbiAgICAgIH1cbiAgICB9KVxuICApLCB0LmVkZ2VzKCkuZm9yRWFjaChmdW5jdGlvbihmKSB7XG4gICAgY29uc3QgcyA9IHQuZWRnZShmKTtcbiAgICBpLmluZm8oXCJFZGdlIFwiICsgZi52ICsgXCIgLT4gXCIgKyBmLncgKyBcIjogXCIgKyBKU09OLnN0cmluZ2lmeShzKSwgcyksIHMucG9pbnRzLmZvckVhY2goKHgpID0+IHgueSArPSBTIC8gMik7XG4gICAgY29uc3QgZyA9IHQubm9kZShmLnYpO1xuICAgIHZhciBFID0gdC5ub2RlKGYudyk7XG4gICAgY29uc3QgTiA9IFEobSwgcywgZCwgbiwgZywgRSwgYSk7XG4gICAgVyhzLCBOKTtcbiAgfSksIHQubm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcbiAgICBjb25zdCBzID0gdC5ub2RlKGYpO1xuICAgIGkuaW5mbyhmLCBzLnR5cGUsIHMuZGlmZiksIHMuaXNHcm91cCAmJiAoTyA9IHMuZGlmZik7XG4gIH0pLCBpLndhcm4oXCJSZXR1cm5pbmcgZnJvbSByZWN1cnNpdmUgcmVuZGVyIFhBWFwiLCB1LCBPKSwgeyBlbGVtOiB1LCBkaWZmOiBPIH07XG59LCBcInJlY3Vyc2l2ZVJlbmRlclwiKSwgdWUgPSAvKiBAX19QVVJFX18gKi8gdyhhc3luYyAoZSwgdCkgPT4ge1xuICBjb25zdCBuID0gbmV3IEIoe1xuICAgIG11bHRpZ3JhcGg6ICEwLFxuICAgIGNvbXBvdW5kOiAhMFxuICB9KS5zZXRHcmFwaCh7XG4gICAgcmFua2RpcjogZS5kaXJlY3Rpb24sXG4gICAgbm9kZXNlcDogZS5jb25maWc/Lm5vZGVTcGFjaW5nIHx8IGUuY29uZmlnPy5mbG93Y2hhcnQ/Lm5vZGVTcGFjaW5nIHx8IGUubm9kZVNwYWNpbmcsXG4gICAgcmFua3NlcDogZS5jb25maWc/LnJhbmtTcGFjaW5nIHx8IGUuY29uZmlnPy5mbG93Y2hhcnQ/LnJhbmtTcGFjaW5nIHx8IGUucmFua1NwYWNpbmcsXG4gICAgbWFyZ2lueDogOCxcbiAgICBtYXJnaW55OiA4XG4gIH0pLnNldERlZmF1bHRFZGdlTGFiZWwoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9KSwgYSA9IHQuc2VsZWN0KFwiZ1wiKTtcbiAgRihhLCBlLm1hcmtlcnMsIGUudHlwZSwgZS5kaWFncmFtSWQpLCBZKCksIF8oKSwgSCgpLCB0ZSgpLCBlLm5vZGVzLmZvckVhY2goKG8pID0+IHtcbiAgICBuLnNldE5vZGUoby5pZCwgeyAuLi5vIH0pLCBvLnBhcmVudElkICYmIG4uc2V0UGFyZW50KG8uaWQsIG8ucGFyZW50SWQpO1xuICB9KSwgaS5kZWJ1ZyhcIkVkZ2VzOlwiLCBlLmVkZ2VzKSwgZS5lZGdlcy5mb3JFYWNoKChvKSA9PiB7XG4gICAgaWYgKG8uc3RhcnQgPT09IG8uZW5kKSB7XG4gICAgICBjb25zdCBsID0gby5zdGFydCwgdSA9IGwgKyBcIi0tLVwiICsgbCArIFwiLS0tMVwiLCBjID0gbCArIFwiLS0tXCIgKyBsICsgXCItLS0yXCIsIG0gPSBuLm5vZGUobCk7XG4gICAgICBuLnNldE5vZGUodSwge1xuICAgICAgICBkb21JZDogdSxcbiAgICAgICAgaWQ6IHUsXG4gICAgICAgIHBhcmVudElkOiBtLnBhcmVudElkLFxuICAgICAgICBsYWJlbFN0eWxlOiBcIlwiLFxuICAgICAgICBsYWJlbDogXCJcIixcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgc2hhcGU6IFwibGFiZWxSZWN0XCIsXG4gICAgICAgIC8vIHNoYXBlOiAncmVjdCcsXG4gICAgICAgIHN0eWxlOiBcIlwiLFxuICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgIGhlaWdodDogMTBcbiAgICAgIH0pLCBuLnNldFBhcmVudCh1LCBtLnBhcmVudElkKSwgbi5zZXROb2RlKGMsIHtcbiAgICAgICAgZG9tSWQ6IGMsXG4gICAgICAgIGlkOiBjLFxuICAgICAgICBwYXJlbnRJZDogbS5wYXJlbnRJZCxcbiAgICAgICAgbGFiZWxTdHlsZTogXCJcIixcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgLy8gc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgc2hhcGU6IFwibGFiZWxSZWN0XCIsXG4gICAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAgICBzdHlsZTogXCJcIixcbiAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICBoZWlnaHQ6IDEwXG4gICAgICB9KSwgbi5zZXRQYXJlbnQoYywgbS5wYXJlbnRJZCk7XG4gICAgICBjb25zdCB2ID0gc3RydWN0dXJlZENsb25lKG8pLCBYID0gc3RydWN0dXJlZENsb25lKG8pLCBwID0gc3RydWN0dXJlZENsb25lKG8pO1xuICAgICAgdi5sYWJlbCA9IFwiXCIsIHYuYXJyb3dUeXBlRW5kID0gXCJub25lXCIsIHYuaWQgPSBsICsgXCItY3ljbGljLXNwZWNpYWwtMVwiLCBYLmFycm93VHlwZVN0YXJ0ID0gXCJub25lXCIsIFguYXJyb3dUeXBlRW5kID0gXCJub25lXCIsIFguaWQgPSBsICsgXCItY3ljbGljLXNwZWNpYWwtbWlkXCIsIHAubGFiZWwgPSBcIlwiLCBtLmlzR3JvdXAgJiYgKHYuZnJvbUNsdXN0ZXIgPSBsLCBwLnRvQ2x1c3RlciA9IGwpLCBwLmlkID0gbCArIFwiLWN5Y2xpYy1zcGVjaWFsLTJcIiwgcC5hcnJvd1R5cGVTdGFydCA9IFwibm9uZVwiLCBuLnNldEVkZ2UobCwgdSwgdiwgbCArIFwiLWN5Y2xpYy1zcGVjaWFsLTBcIiksIG4uc2V0RWRnZSh1LCBjLCBYLCBsICsgXCItY3ljbGljLXNwZWNpYWwtMVwiKSwgbi5zZXRFZGdlKGMsIGwsIHAsIGwgKyBcIi1jeWM8bGljLXNwZWNpYWwtMlwiKTtcbiAgICB9IGVsc2VcbiAgICAgIG4uc2V0RWRnZShvLnN0YXJ0LCBvLmVuZCwgeyAuLi5vIH0sIG8uaWQpO1xuICB9KSwgaS53YXJuKFwiR3JhcGggYXQgZmlyc3Q6XCIsIEpTT04uc3RyaW5naWZ5KGgobikpKSwgcmUobiksIGkud2FybihcIkdyYXBoIGFmdGVyIFhBWDpcIiwgSlNPTi5zdHJpbmdpZnkoaChuKSkpO1xuICBjb25zdCByID0gVigpO1xuICBhd2FpdCBqKFxuICAgIGEsXG4gICAgbixcbiAgICBlLnR5cGUsXG4gICAgZS5kaWFncmFtSWQsXG4gICAgdm9pZCAwLFxuICAgIHJcbiAgKTtcbn0sIFwicmVuZGVyXCIpO1xuZXhwb3J0IHtcbiAgdWUgYXMgcmVuZGVyXG59O1xuIl0sIm5hbWVzIjpbImIiLCJMIiwiQSIsImEiLCJ3IiwiaSIsIkIiLCJYIiwieiIsIlUiLCIkIiwiWiIsIkkiLCJxIiwiUCIsIksiLCJRIiwiVyIsIkYiLCJZIiwiXyIsIkgiLCJwIiwiViJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsU0FBUyxFQUFFLEdBQUc7QUFDWixNQUFJLElBQUk7QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLFVBQVUsRUFBRSxXQUFVO0FBQUEsTUFDdEIsWUFBWSxFQUFFLGFBQVk7QUFBQSxNQUMxQixVQUFVLEVBQUUsV0FBVTtBQUFBLElBQzVCO0FBQUEsSUFDSSxPQUFPLEdBQUcsQ0FBQztBQUFBLElBQ1gsT0FBTyxHQUFHLENBQUM7QUFBQSxFQUNmO0FBQ0UsU0FBT0EsRUFBRSxFQUFFLE1BQUssQ0FBRSxNQUFNLEVBQUUsUUFBUUMsRUFBRSxFQUFFLE1BQUssQ0FBRSxJQUFJO0FBQ25EO0FBQ0EsU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFPQyxJQUFFLEVBQUUsTUFBSyxHQUFJLFNBQVMsR0FBRztBQUM5QixRQUFJLElBQUksRUFBRSxLQUFLLENBQUMsR0FBR0MsS0FBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUM7QUFDOUMsV0FBT0gsRUFB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Q1osWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBO0FBQUEsUUFFUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsTUFDaEIsQ0FBTyxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUUsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHO0FBQUEsUUFDM0MsT0FBTztBQUFBLFFBQ1AsSUFBSTtBQUFBLFFBQ0osVUFBVSxFQUFFO0FBQUEsUUFDWixZQUFZO0FBQUEsUUFDWixTQUFTO0FBQUE7QUFBQSxRQUVULE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxNQUNoQixDQUFPLEdBQUcsRUFBRSxVQUFVLEdBQUcsRUFBRSxRQUFRO0FBQzdCLFlBQU0sSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHRSxLQUFJLGdCQUFnQixDQUFDLEdBQUdlLEtBQUksZ0JBQWdCLENBQUM7QUFDM0UsUUFBRSxRQUFRLElBQUksRUFBRSxlQUFlLFFBQVEsRUFBRSxLQUFLLElBQUkscUJBQXFCZixHQUFFLGlCQUFpQixRQUFRQSxHQUFFLGVBQWUsUUFBUUEsR0FBRSxLQUFLLElBQUksdUJBQXVCZSxHQUFFLFFBQVEsSUFBSSxFQUFFLFlBQVksRUFBRSxjQUFjLEdBQUdBLEdBQUUsWUFBWSxJQUFJQSxHQUFFLEtBQUssSUFBSSxxQkFBcUJBLEdBQUUsaUJBQWlCLFFBQVEsRUFBRSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksbUJBQW1CLEdBQUcsRUFBRSxRQUFRLEdBQUcsR0FBR2YsSUFBRyxJQUFJLG1CQUFtQixHQUFHLEVBQUUsUUFBUSxHQUFHLEdBQUdlLElBQUcsSUFBSSxvQkFBb0I7QUFBQSxJQUNoYTtBQUNFLFFBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLEdBQUksRUFBRSxFQUFFO0FBQUEsRUFDNUMsQ0FBQyxHQUFHakIsRUFBRSxLQUFLLG1CQUFtQixLQUFLLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHQSxFQUFFLEtBQUssb0JBQW9CLEtBQUssVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNHLFFBQU0sSUFBSWtCLEdBQUM7QUFDWCxRQUFNO0FBQUEsSUFDSnBCO0FBQUEsSUFDQTtBQUFBLElBQ0EsRUFBRTtBQUFBLElBQ0YsRUFBRTtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUNBLEdBQUcsUUFBUTsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
