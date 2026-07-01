import { t } from "./chunk-4BX2VUAB-XzHDrrtP-DjJOP13s.js";
import { e } from "./chunk-QZHKN3VN-225O_scH-BebpQ6p0.js";
import { p as p$1, s as Fy, r as Ey, a as My, d as $y, e as Ly, g as Ay, F as F$1, f as ft, h as ht, o as ce$1, I as Oy, y as By, Q as Qr$1, N as cl, P as Dt, R as Nh, T as fk } from "./SynchronicGraphPage-BCUlTIfr.js";
import { G as Gk } from "./treemap-KMMF4GRG-Cs6X1cMg-BnKAMrwN.js";
import "./QPage-Kpbzl6Fe.js";
import "./index-DfKBCAsA.js";
import "./QBtnToggle-CYZJXjN1.js";
import "./QBtnGroup-D--j0QkB.js";
import "./QToolbar-4-PFUiMq.js";
import "./export-file-lpTZqdHO.js";
import "./min-x5JjnDaq-BM0vDUCO.js";
import "./_baseUniq-DbLykLaa-C4mmozic.js";
var p = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
}, hr = Nh.gitGraph, I = /* @__PURE__ */ p$1(() => cl({
  ...hr,
  ...Dt().gitGraph
}), "getConfig"), c = new e(() => {
  const t2 = I(), r = t2.mainBranchName, s = t2.mainBranchOrder;
  return {
    mainBranchName: r,
    commits: /* @__PURE__ */ new Map(),
    head: null,
    branchConfig: /* @__PURE__ */ new Map([[r, { name: r, order: s }]]),
    branches: /* @__PURE__ */ new Map([[r, null]]),
    currBranch: r,
    direction: "LR",
    seq: 0,
    options: {}
  };
});
function A() {
  return fk({ length: 7 });
}
p$1(A, "getID");
function F(t2, r) {
  const s = /* @__PURE__ */ Object.create(null);
  return t2.reduce((n, e2) => {
    const a = r(e2);
    return s[a] || (s[a] = true, n.push(e2)), n;
  }, []);
}
p$1(F, "uniqBy");
var lr = /* @__PURE__ */ p$1(function(t2) {
  c.records.direction = t2;
}, "setDirection"), $r = /* @__PURE__ */ p$1(function(t2) {
  F$1.debug("options str", t2), t2 = t2?.trim(), t2 = t2 || "{}";
  try {
    c.records.options = JSON.parse(t2);
  } catch (r) {
    F$1.error("error while parsing gitGraph options", r.message);
  }
}, "setOptions"), fr = /* @__PURE__ */ p$1(function() {
  return c.records.options;
}, "getOptions"), gr = /* @__PURE__ */ p$1(function(t2) {
  let r = t2.msg, s = t2.id;
  const n = t2.type;
  let e2 = t2.tags;
  F$1.info("commit", r, s, n, e2), F$1.debug("Entering commit:", r, s, n, e2);
  const a = I();
  s = Qr$1.sanitizeText(s, a), r = Qr$1.sanitizeText(r, a), e2 = e2?.map((o) => Qr$1.sanitizeText(o, a));
  const d = {
    id: s || c.records.seq + "-" + A(),
    message: r,
    seq: c.records.seq++,
    type: n ?? p.NORMAL,
    tags: e2 ?? [],
    parents: c.records.head == null ? [] : [c.records.head.id],
    branch: c.records.currBranch
  };
  c.records.head = d, F$1.info("main branch", a.mainBranchName), c.records.commits.has(d.id) && F$1.warn(`Commit ID ${d.id} already exists`), c.records.commits.set(d.id, d), c.records.branches.set(c.records.currBranch, d.id), F$1.debug("in pushCommit " + d.id);
}, "commit"), yr = /* @__PURE__ */ p$1(function(t2) {
  let r = t2.name;
  const s = t2.order;
  if (r = Qr$1.sanitizeText(r, I()), c.records.branches.has(r))
    throw new Error(
      `Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`
    );
  c.records.branches.set(r, c.records.head != null ? c.records.head.id : null), c.records.branchConfig.set(r, { name: r, order: s }), z(r), F$1.debug("in createBranch");
}, "branch"), ur = /* @__PURE__ */ p$1((t2) => {
  let r = t2.branch, s = t2.id;
  const n = t2.type, e2 = t2.tags, a = I();
  r = Qr$1.sanitizeText(r, a), s && (s = Qr$1.sanitizeText(s, a));
  const d = c.records.branches.get(c.records.currBranch), o = c.records.branches.get(r), f = d ? c.records.commits.get(d) : void 0, h = o ? c.records.commits.get(o) : void 0;
  if (f && h && f.branch === r)
    throw new Error(`Cannot merge branch '${r}' into itself.`);
  if (c.records.currBranch === r) {
    const i = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ["branch abc"]
    }, i;
  }
  if (f === void 0 || !f) {
    const i = new Error(
      `Incorrect usage of "merge". Current branch (${c.records.currBranch})has no commits`
    );
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ["commit"]
    }, i;
  }
  if (!c.records.branches.has(r)) {
    const i = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r + ") does not exist"
    );
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: [`branch ${r}`]
    }, i;
  }
  if (h === void 0 || !h) {
    const i = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r + ") has no commits"
    );
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ['"commit"']
    }, i;
  }
  if (f === h) {
    const i = new Error('Incorrect usage of "merge". Both branches have same head');
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ["branch abc"]
    }, i;
  }
  if (s && c.records.commits.has(s)) {
    const i = new Error(
      'Incorrect usage of "merge". Commit with id:' + s + " already exists, use different custom id"
    );
    throw i.hash = {
      text: `merge ${r} ${s} ${n} ${e2?.join(" ")}`,
      token: `merge ${r} ${s} ${n} ${e2?.join(" ")}`,
      expected: [
        `merge ${r} ${s}_UNIQUE ${n} ${e2?.join(" ")}`
      ]
    }, i;
  }
  const $ = o || "", g = {
    id: s || `${c.records.seq}-${A()}`,
    message: `merged branch ${r} into ${c.records.currBranch}`,
    seq: c.records.seq++,
    parents: c.records.head == null ? [] : [c.records.head.id, $],
    branch: c.records.currBranch,
    type: p.MERGE,
    customType: n,
    customId: !!s,
    tags: e2 ?? []
  };
  c.records.head = g, c.records.commits.set(g.id, g), c.records.branches.set(c.records.currBranch, g.id), F$1.debug(c.records.branches), F$1.debug("in mergeBranch");
}, "merge"), xr = /* @__PURE__ */ p$1(function(t2) {
  let r = t2.id, s = t2.targetId, n = t2.tags, e2 = t2.parent;
  F$1.debug("Entering cherryPick:", r, s, n);
  const a = I();
  if (r = Qr$1.sanitizeText(r, a), s = Qr$1.sanitizeText(s, a), n = n?.map((f) => Qr$1.sanitizeText(f, a)), e2 = Qr$1.sanitizeText(e2, a), !r || !c.records.commits.has(r)) {
    const f = new Error(
      'Incorrect usage of "cherryPick". Source commit id should exist and provided'
    );
    throw f.hash = {
      text: `cherryPick ${r} ${s}`,
      token: `cherryPick ${r} ${s}`,
      expected: ["cherry-pick abc"]
    }, f;
  }
  const d = c.records.commits.get(r);
  if (d === void 0 || !d)
    throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
  if (e2 && !(Array.isArray(d.parents) && d.parents.includes(e2)))
    throw new Error(
      "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit."
    );
  const o = d.branch;
  if (d.type === p.MERGE && !e2)
    throw new Error(
      "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified."
    );
  if (!s || !c.records.commits.has(s)) {
    if (o === c.records.currBranch) {
      const g = new Error(
        'Incorrect usage of "cherryPick". Source commit is already on current branch'
      );
      throw g.hash = {
        text: `cherryPick ${r} ${s}`,
        token: `cherryPick ${r} ${s}`,
        expected: ["cherry-pick abc"]
      }, g;
    }
    const f = c.records.branches.get(c.records.currBranch);
    if (f === void 0 || !f) {
      const g = new Error(
        `Incorrect usage of "cherry-pick". Current branch (${c.records.currBranch})has no commits`
      );
      throw g.hash = {
        text: `cherryPick ${r} ${s}`,
        token: `cherryPick ${r} ${s}`,
        expected: ["cherry-pick abc"]
      }, g;
    }
    const h = c.records.commits.get(f);
    if (h === void 0 || !h) {
      const g = new Error(
        `Incorrect usage of "cherry-pick". Current branch (${c.records.currBranch})has no commits`
      );
      throw g.hash = {
        text: `cherryPick ${r} ${s}`,
        token: `cherryPick ${r} ${s}`,
        expected: ["cherry-pick abc"]
      }, g;
    }
    const $ = {
      id: c.records.seq + "-" + A(),
      message: `cherry-picked ${d?.message} into ${c.records.currBranch}`,
      seq: c.records.seq++,
      parents: c.records.head == null ? [] : [c.records.head.id, d.id],
      branch: c.records.currBranch,
      type: p.CHERRY_PICK,
      tags: n ? n.filter(Boolean) : [
        `cherry-pick:${d.id}${d.type === p.MERGE ? `|parent:${e2}` : ""}`
      ]
    };
    c.records.head = $, c.records.commits.set($.id, $), c.records.branches.set(c.records.currBranch, $.id), F$1.debug(c.records.branches), F$1.debug("in cherryPick");
  }
}, "cherryPick"), z = /* @__PURE__ */ p$1(function(t2) {
  if (t2 = Qr$1.sanitizeText(t2, I()), c.records.branches.has(t2)) {
    c.records.currBranch = t2;
    const r = c.records.branches.get(c.records.currBranch);
    r === void 0 || !r ? c.records.head = null : c.records.head = c.records.commits.get(r) ?? null;
  } else {
    const r = new Error(
      `Trying to checkout branch which is not yet created. (Help try using "branch ${t2}")`
    );
    throw r.hash = {
      text: `checkout ${t2}`,
      token: `checkout ${t2}`,
      expected: [`branch ${t2}`]
    }, r;
  }
}, "checkout");
function H(t2, r, s) {
  const n = t2.indexOf(r);
  n === -1 ? t2.push(s) : t2.splice(n, 1, s);
}
p$1(H, "upsert");
function P(t2) {
  const r = t2.reduce((e2, a) => e2.seq > a.seq ? e2 : a, t2[0]);
  let s = "";
  t2.forEach(function(e2) {
    e2 === r ? s += "	*" : s += "	|";
  });
  const n = [s, r.id, r.seq];
  for (const e2 in c.records.branches)
    c.records.branches.get(e2) === r.id && n.push(e2);
  if (F$1.debug(n.join(" ")), r.parents && r.parents.length == 2 && r.parents[0] && r.parents[1]) {
    const e2 = c.records.commits.get(r.parents[0]);
    H(t2, r, e2), r.parents[1] && t2.push(c.records.commits.get(r.parents[1]));
  } else {
    if (r.parents.length == 0)
      return;
    if (r.parents[0]) {
      const e2 = c.records.commits.get(r.parents[0]);
      H(t2, r, e2);
    }
  }
  t2 = F(t2, (e2) => e2.id), P(t2);
}
p$1(P, "prettyPrintCommitHistory");
var pr = /* @__PURE__ */ p$1(function() {
  F$1.debug(c.records.commits);
  const t2 = N()[0];
  P([t2]);
}, "prettyPrint"), mr = /* @__PURE__ */ p$1(function() {
  c.reset(), By();
}, "clear"), br = /* @__PURE__ */ p$1(function() {
  return [...c.records.branchConfig.values()].map((r, s) => r.order !== null && r.order !== void 0 ? r : {
    ...r,
    order: parseFloat(`0.${s}`)
  }).sort((r, s) => (r.order ?? 0) - (s.order ?? 0)).map(({ name: r }) => ({ name: r }));
}, "getBranchesAsObjArray"), wr = /* @__PURE__ */ p$1(function() {
  return c.records.branches;
}, "getBranches"), vr = /* @__PURE__ */ p$1(function() {
  return c.records.commits;
}, "getCommits"), N = /* @__PURE__ */ p$1(function() {
  const t2 = [...c.records.commits.values()];
  return t2.forEach(function(r) {
    F$1.debug(r.id);
  }), t2.sort((r, s) => r.seq - s.seq), t2;
}, "getCommitsArray"), Cr = /* @__PURE__ */ p$1(function() {
  return c.records.currBranch;
}, "getCurrentBranch"), Er = /* @__PURE__ */ p$1(function() {
  return c.records.direction;
}, "getDirection"), Tr = /* @__PURE__ */ p$1(function() {
  return c.records.head;
}, "getHead"), S = {
  commitType: p,
  getConfig: I,
  setDirection: lr,
  setOptions: $r,
  getOptions: fr,
  commit: gr,
  branch: yr,
  merge: ur,
  cherryPick: xr,
  checkout: z,
  //reset,
  prettyPrint: pr,
  clear: mr,
  getBranchesAsObjArray: br,
  getBranches: wr,
  getCommits: vr,
  getCommitsArray: N,
  getCurrentBranch: Cr,
  getDirection: Er,
  getHead: Tr,
  setAccTitle: Ay,
  getAccTitle: Ly,
  getAccDescription: $y,
  setAccDescription: My,
  setDiagramTitle: Ey,
  getDiagramTitle: Fy
}, Br = /* @__PURE__ */ p$1((t$1, r) => {
  t(t$1, r), t$1.dir && r.setDirection(t$1.dir);
  for (const s of t$1.statements)
    Lr(s, r);
}, "populate"), Lr = /* @__PURE__ */ p$1((t2, r) => {
  const n = {
    Commit: /* @__PURE__ */ p$1((e2) => r.commit(kr(e2)), "Commit"),
    Branch: /* @__PURE__ */ p$1((e2) => r.branch(Mr(e2)), "Branch"),
    Merge: /* @__PURE__ */ p$1((e2) => r.merge(Ir(e2)), "Merge"),
    Checkout: /* @__PURE__ */ p$1((e2) => r.checkout(Rr(e2)), "Checkout"),
    CherryPicking: /* @__PURE__ */ p$1((e2) => r.cherryPick(Gr(e2)), "CherryPicking")
  }[t2.$type];
  n ? n(t2) : F$1.error(`Unknown statement type: ${t2.$type}`);
}, "parseStatement"), kr = /* @__PURE__ */ p$1((t2) => ({
  id: t2.id,
  msg: t2.message ?? "",
  type: t2.type !== void 0 ? p[t2.type] : p.NORMAL,
  tags: t2.tags ?? void 0
}), "parseCommit"), Mr = /* @__PURE__ */ p$1((t2) => ({
  name: t2.name,
  order: t2.order ?? 0
}), "parseBranch"), Ir = /* @__PURE__ */ p$1((t2) => ({
  branch: t2.branch,
  id: t2.id ?? "",
  type: t2.type !== void 0 ? p[t2.type] : void 0,
  tags: t2.tags ?? void 0
}), "parseMerge"), Rr = /* @__PURE__ */ p$1((t2) => t2.branch, "parseCheckout"), Gr = /* @__PURE__ */ p$1((t2) => ({
  id: t2.id,
  targetId: "",
  tags: t2.tags?.length === 0 ? void 0 : t2.tags,
  parent: t2.parent
}), "parseCherryPicking"), Or = {
  parse: /* @__PURE__ */ p$1(async (t2) => {
    const r = await Gk("gitGraph", t2);
    F$1.debug(r), Br(r, S);
  }, "parse")
}, qr = ft(), v = qr?.gitGraph, L = 10, k = 40, E = 4, T = 2, M = 8, b = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), O = 30, R = /* @__PURE__ */ new Map(), q = [], B = 0, u = "LR", Ar = /* @__PURE__ */ p$1(() => {
  b.clear(), w.clear(), R.clear(), B = 0, q = [], u = "LR";
}, "clear"), W = /* @__PURE__ */ p$1((t2) => {
  const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
  return (typeof t2 == "string" ? t2.split(/\\n|\n|<br\s*\/?>/gi) : t2).forEach((n) => {
    const e2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    e2.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), e2.setAttribute("dy", "1em"), e2.setAttribute("x", "0"), e2.setAttribute("class", "row"), e2.textContent = n.trim(), r.appendChild(e2);
  }), r;
}, "drawText"), j = /* @__PURE__ */ p$1((t2) => {
  let r, s, n;
  return u === "BT" ? (s = /* @__PURE__ */ p$1((e2, a) => e2 <= a, "comparisonFunc"), n = 1 / 0) : (s = /* @__PURE__ */ p$1((e2, a) => e2 >= a, "comparisonFunc"), n = 0), t2.forEach((e2) => {
    const a = u === "TB" || u == "BT" ? w.get(e2)?.y : w.get(e2)?.x;
    a !== void 0 && s(a, n) && (r = e2, n = a);
  }), r;
}, "findClosestParent"), _r = /* @__PURE__ */ p$1((t2) => {
  let r = "", s = 1 / 0;
  return t2.forEach((n) => {
    const e2 = w.get(n).y;
    e2 <= s && (r = n, s = e2);
  }), r || void 0;
}, "findClosestParentBT"), Hr = /* @__PURE__ */ p$1((t2, r, s) => {
  let n = s, e2 = s;
  const a = [];
  t2.forEach((d) => {
    const o = r.get(d);
    if (!o)
      throw new Error(`Commit not found for key ${d}`);
    o.parents.length ? (n = Dr(o), e2 = Math.max(n, e2)) : a.push(o), Fr(o, n);
  }), n = e2, a.forEach((d) => {
    zr(d, n, s);
  }), t2.forEach((d) => {
    const o = r.get(d);
    if (o?.parents.length) {
      const f = _r(o.parents);
      n = w.get(f).y - k, n <= e2 && (e2 = n);
      const h = b.get(o.branch).pos, $ = n - L;
      w.set(o.id, { x: h, y: $ });
    }
  });
}, "setParallelBTPos"), Pr = /* @__PURE__ */ p$1((t2) => {
  const r = j(t2.parents.filter((n) => n !== null));
  if (!r)
    throw new Error(`Closest parent not found for commit ${t2.id}`);
  const s = w.get(r)?.y;
  if (s === void 0)
    throw new Error(`Closest parent position not found for commit ${t2.id}`);
  return s;
}, "findClosestParentPos"), Dr = /* @__PURE__ */ p$1((t2) => Pr(t2) + k, "calculateCommitPosition"), Fr = /* @__PURE__ */ p$1((t2, r) => {
  const s = b.get(t2.branch);
  if (!s)
    throw new Error(`Branch not found for commit ${t2.id}`);
  const n = s.pos, e2 = r + L;
  return w.set(t2.id, { x: n, y: e2 }), { x: n, y: e2 };
}, "setCommitPosition"), zr = /* @__PURE__ */ p$1((t2, r, s) => {
  const n = b.get(t2.branch);
  if (!n)
    throw new Error(`Branch not found for commit ${t2.id}`);
  const e2 = r + s, a = n.pos;
  w.set(t2.id, { x: a, y: e2 });
}, "setRootPosition"), Nr = /* @__PURE__ */ p$1((t2, r, s, n, e2, a) => {
  if (a === p.HIGHLIGHT)
    t2.append("rect").attr("x", s.x - 10).attr("y", s.y - 10).attr("width", 20).attr("height", 20).attr(
      "class",
      `commit ${r.id} commit-highlight${e2 % M} ${n}-outer`
    ), t2.append("rect").attr("x", s.x - 6).attr("y", s.y - 6).attr("width", 12).attr("height", 12).attr(
      "class",
      `commit ${r.id} commit${e2 % M} ${n}-inner`
    );
  else if (a === p.CHERRY_PICK)
    t2.append("circle").attr("cx", s.x).attr("cy", s.y).attr("r", 10).attr("class", `commit ${r.id} ${n}`), t2.append("circle").attr("cx", s.x - 3).attr("cy", s.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${n}`), t2.append("circle").attr("cx", s.x + 3).attr("cy", s.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${n}`), t2.append("line").attr("x1", s.x + 3).attr("y1", s.y + 1).attr("x2", s.x).attr("y2", s.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${n}`), t2.append("line").attr("x1", s.x - 3).attr("y1", s.y + 1).attr("x2", s.x).attr("y2", s.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${n}`);
  else {
    const d = t2.append("circle");
    if (d.attr("cx", s.x), d.attr("cy", s.y), d.attr("r", r.type === p.MERGE ? 9 : 10), d.attr("class", `commit ${r.id} commit${e2 % M}`), a === p.MERGE) {
      const o = t2.append("circle");
      o.attr("cx", s.x), o.attr("cy", s.y), o.attr("r", 6), o.attr(
        "class",
        `commit ${n} ${r.id} commit${e2 % M}`
      );
    }
    a === p.REVERSE && t2.append("path").attr(
      "d",
      `M ${s.x - 5},${s.y - 5}L${s.x + 5},${s.y + 5}M${s.x - 5},${s.y + 5}L${s.x + 5},${s.y - 5}`
    ).attr("class", `commit ${n} ${r.id} commit${e2 % M}`);
  }
}, "drawCommitBullet"), Sr = /* @__PURE__ */ p$1((t2, r, s, n) => {
  if (r.type !== p.CHERRY_PICK && (r.customId && r.type === p.MERGE || r.type !== p.MERGE) && v?.showCommitLabel) {
    const e2 = t2.append("g"), a = e2.insert("rect").attr("class", "commit-label-bkg"), d = e2.append("text").attr("x", n).attr("y", s.y + 25).attr("class", "commit-label").text(r.id), o = d.node()?.getBBox();
    if (o && (a.attr("x", s.posWithOffset - o.width / 2 - T).attr("y", s.y + 13.5).attr("width", o.width + 2 * T).attr("height", o.height + 2 * T), u === "TB" || u === "BT" ? (a.attr("x", s.x - (o.width + 4 * E + 5)).attr("y", s.y - 12), d.attr("x", s.x - (o.width + 4 * E)).attr("y", s.y + o.height - 12)) : d.attr("x", s.posWithOffset - o.width / 2), v.rotateCommitLabel))
      if (u === "TB" || u === "BT")
        d.attr(
          "transform",
          "rotate(-45, " + s.x + ", " + s.y + ")"
        ), a.attr(
          "transform",
          "rotate(-45, " + s.x + ", " + s.y + ")"
        );
      else {
        const f = -7.5 - (o.width + 10) / 25 * 9.5, h = 10 + o.width / 25 * 8.5;
        e2.attr(
          "transform",
          "translate(" + f + ", " + h + ") rotate(-45, " + n + ", " + s.y + ")"
        );
      }
  }
}, "drawCommitLabel"), Wr = /* @__PURE__ */ p$1((t2, r, s, n) => {
  if (r.tags.length > 0) {
    let e2 = 0, a = 0, d = 0;
    const o = [];
    for (const f of r.tags.reverse()) {
      const h = t2.insert("polygon"), $ = t2.append("circle"), g = t2.append("text").attr("y", s.y - 16 - e2).attr("class", "tag-label").text(f), i = g.node()?.getBBox();
      if (!i)
        throw new Error("Tag bbox not found");
      a = Math.max(a, i.width), d = Math.max(d, i.height), g.attr("x", s.posWithOffset - i.width / 2), o.push({
        tag: g,
        hole: $,
        rect: h,
        yOffset: e2
      }), e2 += 20;
    }
    for (const { tag: f, hole: h, rect: $, yOffset: g } of o) {
      const i = d / 2, y = s.y - 19.2 - g;
      if ($.attr("class", "tag-label-bkg").attr(
        "points",
        `
      ${n - a / 2 - E / 2},${y + T}  
      ${n - a / 2 - E / 2},${y - T}
      ${s.posWithOffset - a / 2 - E},${y - i - T}
      ${s.posWithOffset + a / 2 + E},${y - i - T}
      ${s.posWithOffset + a / 2 + E},${y + i + T}
      ${s.posWithOffset - a / 2 - E},${y + i + T}`
      ), h.attr("cy", y).attr("cx", n - a / 2 + E / 2).attr("r", 1.5).attr("class", "tag-hole"), u === "TB" || u === "BT") {
        const x = n + g;
        $.attr("class", "tag-label-bkg").attr(
          "points",
          `
        ${s.x},${x + 2}
        ${s.x},${x - 2}
        ${s.x + L},${x - i - 2}
        ${s.x + L + a + 4},${x - i - 2}
        ${s.x + L + a + 4},${x + i + 2}
        ${s.x + L},${x + i + 2}`
        ).attr("transform", "translate(12,12) rotate(45, " + s.x + "," + n + ")"), h.attr("cx", s.x + E / 2).attr("cy", x).attr("transform", "translate(12,12) rotate(45, " + s.x + "," + n + ")"), f.attr("x", s.x + 5).attr("y", x + 3).attr("transform", "translate(14,14) rotate(45, " + s.x + "," + n + ")");
      }
    }
  }
}, "drawCommitTags"), jr = /* @__PURE__ */ p$1((t2) => {
  switch (t2.customType ?? t2.type) {
    case p.NORMAL:
      return "commit-normal";
    case p.REVERSE:
      return "commit-reverse";
    case p.HIGHLIGHT:
      return "commit-highlight";
    case p.MERGE:
      return "commit-merge";
    case p.CHERRY_PICK:
      return "commit-cherry-pick";
    default:
      return "commit-normal";
  }
}, "getCommitClassType"), Yr = /* @__PURE__ */ p$1((t2, r, s, n) => {
  const e2 = { x: 0, y: 0 };
  if (t2.parents.length > 0) {
    const a = j(t2.parents);
    if (a) {
      const d = n.get(a) ?? e2;
      return r === "TB" ? d.y + k : r === "BT" ? (n.get(t2.id) ?? e2).y - k : d.x + k;
    }
  } else
    return r === "TB" ? O : r === "BT" ? (n.get(t2.id) ?? e2).y - k : 0;
  return 0;
}, "calculatePosition"), Kr = /* @__PURE__ */ p$1((t2, r, s) => {
  const n = u === "BT" && s ? r : r + L, e2 = u === "TB" || u === "BT" ? n : b.get(t2.branch)?.pos, a = u === "TB" || u === "BT" ? b.get(t2.branch)?.pos : n;
  if (a === void 0 || e2 === void 0)
    throw new Error(`Position were undefined for commit ${t2.id}`);
  return { x: a, y: e2, posWithOffset: n };
}, "getCommitPosition"), D = /* @__PURE__ */ p$1((t2, r, s) => {
  if (!v)
    throw new Error("GitGraph config not found");
  const n = t2.append("g").attr("class", "commit-bullets"), e2 = t2.append("g").attr("class", "commit-labels");
  let a = u === "TB" || u === "BT" ? O : 0;
  const d = [...r.keys()], o = v?.parallelCommits ?? false, f = /* @__PURE__ */ p$1(($, g) => {
    const i = r.get($)?.seq, y = r.get(g)?.seq;
    return i !== void 0 && y !== void 0 ? i - y : 0;
  }, "sortKeys");
  let h = d.sort(f);
  u === "BT" && (o && Hr(h, r, a), h = h.reverse()), h.forEach(($) => {
    const g = r.get($);
    if (!g)
      throw new Error(`Commit not found for key ${$}`);
    o && (a = Yr(g, u, a, w));
    const i = Kr(g, a, o);
    if (s) {
      const y = jr(g), x = g.customType ?? g.type, _ = b.get(g.branch)?.index ?? 0;
      Nr(n, g, i, y, _, x), Sr(e2, g, i, a), Wr(e2, g, i, a);
    }
    u === "TB" || u === "BT" ? w.set(g.id, { x: i.x, y: i.posWithOffset }) : w.set(g.id, { x: i.posWithOffset, y: i.y }), a = u === "BT" && o ? a + k : a + k + L, a > B && (B = a);
  });
}, "drawCommits"), Ur = /* @__PURE__ */ p$1((t2, r, s, n, e2) => {
  const d = (u === "TB" || u === "BT" ? s.x < n.x : s.y < n.y) ? r.branch : t2.branch, o = /* @__PURE__ */ p$1((h) => h.branch === d, "isOnBranchToGetCurve"), f = /* @__PURE__ */ p$1((h) => h.seq > t2.seq && h.seq < r.seq, "isBetweenCommits");
  return [...e2.values()].some((h) => f(h) && o(h));
}, "shouldRerouteArrow"), G = /* @__PURE__ */ p$1((t2, r, s = 0) => {
  const n = t2 + Math.abs(t2 - r) / 2;
  if (s > 5)
    return n;
  if (q.every((d) => Math.abs(d - n) >= 10))
    return q.push(n), n;
  const a = Math.abs(t2 - r);
  return G(t2, r - a / 5, s + 1);
}, "findLane"), Vr = /* @__PURE__ */ p$1((t2, r, s, n) => {
  const e2 = w.get(r.id), a = w.get(s.id);
  if (e2 === void 0 || a === void 0)
    throw new Error(`Commit positions not found for commits ${r.id} and ${s.id}`);
  const d = Ur(r, s, e2, a, n);
  let o = "", f = "", h = 0, $ = 0, g = b.get(s.branch)?.index;
  s.type === p.MERGE && r.id !== s.parents[0] && (g = b.get(r.branch)?.index);
  let i;
  if (d) {
    o = "A 10 10, 0, 0, 0,", f = "A 10 10, 0, 0, 1,", h = 10, $ = 10;
    const y = e2.y < a.y ? G(e2.y, a.y) : G(a.y, e2.y), x = e2.x < a.x ? G(e2.x, a.x) : G(a.x, e2.x);
    u === "TB" ? e2.x < a.x ? i = `M ${e2.x} ${e2.y} L ${x - h} ${e2.y} ${f} ${x} ${e2.y + $} L ${x} ${a.y - h} ${o} ${x + $} ${a.y} L ${a.x} ${a.y}` : (g = b.get(r.branch)?.index, i = `M ${e2.x} ${e2.y} L ${x + h} ${e2.y} ${o} ${x} ${e2.y + $} L ${x} ${a.y - h} ${f} ${x - $} ${a.y} L ${a.x} ${a.y}`) : u === "BT" ? e2.x < a.x ? i = `M ${e2.x} ${e2.y} L ${x - h} ${e2.y} ${o} ${x} ${e2.y - $} L ${x} ${a.y + h} ${f} ${x + $} ${a.y} L ${a.x} ${a.y}` : (g = b.get(r.branch)?.index, i = `M ${e2.x} ${e2.y} L ${x + h} ${e2.y} ${f} ${x} ${e2.y - $} L ${x} ${a.y + h} ${o} ${x - $} ${a.y} L ${a.x} ${a.y}`) : e2.y < a.y ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${y - h} ${o} ${e2.x + $} ${y} L ${a.x - h} ${y} ${f} ${a.x} ${y + $} L ${a.x} ${a.y}` : (g = b.get(r.branch)?.index, i = `M ${e2.x} ${e2.y} L ${e2.x} ${y + h} ${f} ${e2.x + $} ${y} L ${a.x - h} ${y} ${o} ${a.x} ${y - $} L ${a.x} ${a.y}`);
  } else
    o = "A 20 20, 0, 0, 0,", f = "A 20 20, 0, 0, 1,", h = 20, $ = 20, u === "TB" ? (e2.x < a.x && (s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y - h} ${o} ${e2.x + $} ${a.y} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${f} ${a.x} ${e2.y + $} L ${a.x} ${a.y}`), e2.x > a.x && (o = "A 20 20, 0, 0, 0,", f = "A 20 20, 0, 0, 1,", h = 20, $ = 20, s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y - h} ${f} ${e2.x - $} ${a.y} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${a.x + h} ${e2.y} ${o} ${a.x} ${e2.y + $} L ${a.x} ${a.y}`), e2.x === a.x && (i = `M ${e2.x} ${e2.y} L ${a.x} ${a.y}`)) : u === "BT" ? (e2.x < a.x && (s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y + h} ${f} ${e2.x + $} ${a.y} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${o} ${a.x} ${e2.y - $} L ${a.x} ${a.y}`), e2.x > a.x && (o = "A 20 20, 0, 0, 0,", f = "A 20 20, 0, 0, 1,", h = 20, $ = 20, s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y + h} ${o} ${e2.x - $} ${a.y} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${o} ${a.x} ${e2.y - $} L ${a.x} ${a.y}`), e2.x === a.x && (i = `M ${e2.x} ${e2.y} L ${a.x} ${a.y}`)) : (e2.y < a.y && (s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${f} ${a.x} ${e2.y + $} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y - h} ${o} ${e2.x + $} ${a.y} L ${a.x} ${a.y}`), e2.y > a.y && (s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${o} ${a.x} ${e2.y - $} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y + h} ${f} ${e2.x + $} ${a.y} L ${a.x} ${a.y}`), e2.y === a.y && (i = `M ${e2.x} ${e2.y} L ${a.x} ${a.y}`));
  if (i === void 0)
    throw new Error("Line definition not found");
  t2.append("path").attr("d", i).attr("class", "arrow arrow" + g % M);
}, "drawArrow"), Xr = /* @__PURE__ */ p$1((t2, r) => {
  const s = t2.append("g").attr("class", "commit-arrows");
  [...r.keys()].forEach((n) => {
    const e2 = r.get(n);
    e2.parents && e2.parents.length > 0 && e2.parents.forEach((a) => {
      Vr(s, r.get(a), e2, r);
    });
  });
}, "drawArrows"), Jr = /* @__PURE__ */ p$1((t2, r) => {
  const s = t2.append("g");
  r.forEach((n, e2) => {
    const a = e2 % M, d = b.get(n.name)?.pos;
    if (d === void 0)
      throw new Error(`Position not found for branch ${n.name}`);
    const o = s.append("line");
    o.attr("x1", 0), o.attr("y1", d), o.attr("x2", B), o.attr("y2", d), o.attr("class", "branch branch" + a), u === "TB" ? (o.attr("y1", O), o.attr("x1", d), o.attr("y2", B), o.attr("x2", d)) : u === "BT" && (o.attr("y1", B), o.attr("x1", d), o.attr("y2", O), o.attr("x2", d)), q.push(d);
    const f = n.name, h = W(f), $ = s.insert("rect"), i = s.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + a);
    i.node().appendChild(h);
    const y = h.getBBox();
    $.attr("class", "branchLabelBkg label" + a).attr("rx", 4).attr("ry", 4).attr("x", -y.width - 4 - (v?.rotateCommitLabel === true ? 30 : 0)).attr("y", -y.height / 2 + 8).attr("width", y.width + 18).attr("height", y.height + 4), i.attr(
      "transform",
      "translate(" + (-y.width - 14 - (v?.rotateCommitLabel === true ? 30 : 0)) + ", " + (d - y.height / 2 - 1) + ")"
    ), u === "TB" ? ($.attr("x", d - y.width / 2 - 10).attr("y", 0), i.attr("transform", "translate(" + (d - y.width / 2 - 5) + ", 0)")) : u === "BT" ? ($.attr("x", d - y.width / 2 - 10).attr("y", B), i.attr("transform", "translate(" + (d - y.width / 2 - 5) + ", " + B + ")")) : $.attr("transform", "translate(-19, " + (d - y.height / 2) + ")");
  });
}, "drawBranches"), Qr = /* @__PURE__ */ p$1(function(t2, r, s, n, e2) {
  return b.set(t2, { pos: r, index: s }), r += 50 + (e2 ? 40 : 0) + (u === "TB" || u === "BT" ? n.width / 2 : 0), r;
}, "setBranchPosition"), Zr = /* @__PURE__ */ p$1(function(t2, r, s, n) {
  if (Ar(), F$1.debug("in gitgraph renderer", t2 + `
`, "id:", r, s), !v)
    throw new Error("GitGraph config not found");
  const e2 = v.rotateCommitLabel ?? false, a = n.db;
  R = a.getCommits();
  const d = a.getBranchesAsObjArray();
  u = a.getDirection();
  const o = ht(`[id="${r}"]`);
  let f = 0;
  d.forEach((h, $) => {
    const g = W(h.name), i = o.append("g"), y = i.insert("g").attr("class", "branchLabel"), x = y.insert("g").attr("class", "label branch-label");
    x.node()?.appendChild(g);
    const _ = g.getBBox();
    f = Qr(h.name, f, $, _, e2), x.remove(), y.remove(), i.remove();
  }), D(o, R, false), v.showBranches && Jr(o, d), Xr(o, R), D(o, R, true), ce$1.insertTitle(
    o,
    "gitTitleText",
    v.titleTopMargin ?? 0,
    a.getDiagramTitle()
  ), Oy(
    void 0,
    o,
    v.diagramPadding,
    v.useMaxWidth
  );
}, "draw"), re = {
  draw: Zr
}, ee = /* @__PURE__ */ p$1((t2) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(
  (r) => `
        .branch-label${r} { fill: ${t2["gitBranchLabel" + r]}; }
        .commit${r} { stroke: ${t2["git" + r]}; fill: ${t2["git" + r]}; }
        .commit-highlight${r} { stroke: ${t2["gitInv" + r]}; fill: ${t2["gitInv" + r]}; }
        .label${r}  { fill: ${t2["git" + r]}; }
        .arrow${r} { stroke: ${t2["git" + r]}; }
        `
).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t2.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t2.commitLabelFontSize}; fill: ${t2.commitLabelColor};}
  .commit-label-bkg { font-size: ${t2.commitLabelFontSize}; fill: ${t2.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t2.tagLabelFontSize}; fill: ${t2.tagLabelColor};}
  .tag-label-bkg { fill: ${t2.tagLabelBackground}; stroke: ${t2.tagLabelBorder}; }
  .tag-hole { fill: ${t2.textColor}; }

  .commit-merge {
    stroke: ${t2.primaryColor};
    fill: ${t2.primaryColor};
  }
  .commit-reverse {
    stroke: ${t2.primaryColor};
    fill: ${t2.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t2.primaryColor};
    fill: ${t2.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.textColor};
  }
`, "getStyles"), te = ee, ce = {
  parser: Or,
  db: S,
  renderer: re,
  styles: te
};
export {
  ce as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0R3JhcGhEaWFncmFtLU5ZNjJLRUdYLVU5bW1xRklTLUNXQ1R5TTdfLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLW1lcm1haWQtc3RyaW5nL2Rpc3QvZ2l0R3JhcGhEaWFncmFtLU5ZNjJLRUdYLVU5bW1xRklTLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHAgYXMgWSB9IGZyb20gXCIuL2NodW5rLTRCWDJWVUFCLVh6SERycnRQLmpzXCI7XG5pbXBvcnQgeyBJIGFzIEsgfSBmcm9tIFwiLi9jaHVuay1RWkhLTjNWTi0yMjVPX3NjSC5qc1wiO1xuaW1wb3J0IHsgXyBhcyBsLCBxIGFzIFUsIHAgYXMgViwgcyBhcyBYLCBnIGFzIEosIGEgYXMgUSwgYiBhcyBaLCBsIGFzIG0sIGMgYXMgcnIsIGQgYXMgZXIsIHUgYXMgdHIsIEMgYXMgYXIsIHkgYXMgc3IsIGsgYXMgQywgRCBhcyBuciwgRSBhcyBvciwgRiBhcyBjciwgRyBhcyBpciB9IGZyb20gXCIuL2VudHJ5LUIyVlgta3hhLmpzXCI7XG5pbXBvcnQgeyBwIGFzIGRyIH0gZnJvbSBcIi4vbWVybWFpZC1wYXJzZXIuY29yZS1ORW11cVBvMy5qc1wiO1xudmFyIHAgPSB7XG4gIE5PUk1BTDogMCxcbiAgUkVWRVJTRTogMSxcbiAgSElHSExJR0hUOiAyLFxuICBNRVJHRTogMyxcbiAgQ0hFUlJZX1BJQ0s6IDRcbn0sIGhyID0gY3IuZ2l0R3JhcGgsIEkgPSAvKiBAX19QVVJFX18gKi8gbCgoKSA9PiBucih7XG4gIC4uLmhyLFxuICAuLi5vcigpLmdpdEdyYXBoXG59KSwgXCJnZXRDb25maWdcIiksIGMgPSBuZXcgSygoKSA9PiB7XG4gIGNvbnN0IHQgPSBJKCksIHIgPSB0Lm1haW5CcmFuY2hOYW1lLCBzID0gdC5tYWluQnJhbmNoT3JkZXI7XG4gIHJldHVybiB7XG4gICAgbWFpbkJyYW5jaE5hbWU6IHIsXG4gICAgY29tbWl0czogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcbiAgICBoZWFkOiBudWxsLFxuICAgIGJyYW5jaENvbmZpZzogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoW1tyLCB7IG5hbWU6IHIsIG9yZGVyOiBzIH1dXSksXG4gICAgYnJhbmNoZXM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKFtbciwgbnVsbF1dKSxcbiAgICBjdXJyQnJhbmNoOiByLFxuICAgIGRpcmVjdGlvbjogXCJMUlwiLFxuICAgIHNlcTogMCxcbiAgICBvcHRpb25zOiB7fVxuICB9O1xufSk7XG5mdW5jdGlvbiBBKCkge1xuICByZXR1cm4gaXIoeyBsZW5ndGg6IDcgfSk7XG59XG5sKEEsIFwiZ2V0SURcIik7XG5mdW5jdGlvbiBGKHQsIHIpIHtcbiAgY29uc3QgcyA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gdC5yZWR1Y2UoKG4sIGUpID0+IHtcbiAgICBjb25zdCBhID0gcihlKTtcbiAgICByZXR1cm4gc1thXSB8fCAoc1thXSA9ICEwLCBuLnB1c2goZSkpLCBuO1xuICB9LCBbXSk7XG59XG5sKEYsIFwidW5pcUJ5XCIpO1xudmFyIGxyID0gLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24odCkge1xuICBjLnJlY29yZHMuZGlyZWN0aW9uID0gdDtcbn0sIFwic2V0RGlyZWN0aW9uXCIpLCAkciA9IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKHQpIHtcbiAgbS5kZWJ1ZyhcIm9wdGlvbnMgc3RyXCIsIHQpLCB0ID0gdD8udHJpbSgpLCB0ID0gdCB8fCBcInt9XCI7XG4gIHRyeSB7XG4gICAgYy5yZWNvcmRzLm9wdGlvbnMgPSBKU09OLnBhcnNlKHQpO1xuICB9IGNhdGNoIChyKSB7XG4gICAgbS5lcnJvcihcImVycm9yIHdoaWxlIHBhcnNpbmcgZ2l0R3JhcGggb3B0aW9uc1wiLCByLm1lc3NhZ2UpO1xuICB9XG59LCBcInNldE9wdGlvbnNcIiksIGZyID0gLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjLnJlY29yZHMub3B0aW9ucztcbn0sIFwiZ2V0T3B0aW9uc1wiKSwgZ3IgPSAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbih0KSB7XG4gIGxldCByID0gdC5tc2csIHMgPSB0LmlkO1xuICBjb25zdCBuID0gdC50eXBlO1xuICBsZXQgZSA9IHQudGFncztcbiAgbS5pbmZvKFwiY29tbWl0XCIsIHIsIHMsIG4sIGUpLCBtLmRlYnVnKFwiRW50ZXJpbmcgY29tbWl0OlwiLCByLCBzLCBuLCBlKTtcbiAgY29uc3QgYSA9IEkoKTtcbiAgcyA9IEMuc2FuaXRpemVUZXh0KHMsIGEpLCByID0gQy5zYW5pdGl6ZVRleHQociwgYSksIGUgPSBlPy5tYXAoKG8pID0+IEMuc2FuaXRpemVUZXh0KG8sIGEpKTtcbiAgY29uc3QgZCA9IHtcbiAgICBpZDogcyB8fCBjLnJlY29yZHMuc2VxICsgXCItXCIgKyBBKCksXG4gICAgbWVzc2FnZTogcixcbiAgICBzZXE6IGMucmVjb3Jkcy5zZXErKyxcbiAgICB0eXBlOiBuID8/IHAuTk9STUFMLFxuICAgIHRhZ3M6IGUgPz8gW10sXG4gICAgcGFyZW50czogYy5yZWNvcmRzLmhlYWQgPT0gbnVsbCA/IFtdIDogW2MucmVjb3Jkcy5oZWFkLmlkXSxcbiAgICBicmFuY2g6IGMucmVjb3Jkcy5jdXJyQnJhbmNoXG4gIH07XG4gIGMucmVjb3Jkcy5oZWFkID0gZCwgbS5pbmZvKFwibWFpbiBicmFuY2hcIiwgYS5tYWluQnJhbmNoTmFtZSksIGMucmVjb3Jkcy5jb21taXRzLmhhcyhkLmlkKSAmJiBtLndhcm4oYENvbW1pdCBJRCAke2QuaWR9IGFscmVhZHkgZXhpc3RzYCksIGMucmVjb3Jkcy5jb21taXRzLnNldChkLmlkLCBkKSwgYy5yZWNvcmRzLmJyYW5jaGVzLnNldChjLnJlY29yZHMuY3VyckJyYW5jaCwgZC5pZCksIG0uZGVidWcoXCJpbiBwdXNoQ29tbWl0IFwiICsgZC5pZCk7XG59LCBcImNvbW1pdFwiKSwgeXIgPSAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbih0KSB7XG4gIGxldCByID0gdC5uYW1lO1xuICBjb25zdCBzID0gdC5vcmRlcjtcbiAgaWYgKHIgPSBDLnNhbml0aXplVGV4dChyLCBJKCkpLCBjLnJlY29yZHMuYnJhbmNoZXMuaGFzKHIpKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBUcnlpbmcgdG8gY3JlYXRlIGFuIGV4aXN0aW5nIGJyYW5jaC4gKEhlbHA6IEVpdGhlciB1c2UgYSBuZXcgbmFtZSBpZiB5b3Ugd2FudCBjcmVhdGUgYSBuZXcgYnJhbmNoIG9yIHRyeSB1c2luZyBcImNoZWNrb3V0ICR7cn1cIilgXG4gICAgKTtcbiAgYy5yZWNvcmRzLmJyYW5jaGVzLnNldChyLCBjLnJlY29yZHMuaGVhZCAhPSBudWxsID8gYy5yZWNvcmRzLmhlYWQuaWQgOiBudWxsKSwgYy5yZWNvcmRzLmJyYW5jaENvbmZpZy5zZXQociwgeyBuYW1lOiByLCBvcmRlcjogcyB9KSwgeihyKSwgbS5kZWJ1ZyhcImluIGNyZWF0ZUJyYW5jaFwiKTtcbn0sIFwiYnJhbmNoXCIpLCB1ciA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0KSA9PiB7XG4gIGxldCByID0gdC5icmFuY2gsIHMgPSB0LmlkO1xuICBjb25zdCBuID0gdC50eXBlLCBlID0gdC50YWdzLCBhID0gSSgpO1xuICByID0gQy5zYW5pdGl6ZVRleHQociwgYSksIHMgJiYgKHMgPSBDLnNhbml0aXplVGV4dChzLCBhKSk7XG4gIGNvbnN0IGQgPSBjLnJlY29yZHMuYnJhbmNoZXMuZ2V0KGMucmVjb3Jkcy5jdXJyQnJhbmNoKSwgbyA9IGMucmVjb3Jkcy5icmFuY2hlcy5nZXQociksIGYgPSBkID8gYy5yZWNvcmRzLmNvbW1pdHMuZ2V0KGQpIDogdm9pZCAwLCBoID0gbyA/IGMucmVjb3Jkcy5jb21taXRzLmdldChvKSA6IHZvaWQgMDtcbiAgaWYgKGYgJiYgaCAmJiBmLmJyYW5jaCA9PT0gcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBtZXJnZSBicmFuY2ggJyR7cn0nIGludG8gaXRzZWxmLmApO1xuICBpZiAoYy5yZWNvcmRzLmN1cnJCcmFuY2ggPT09IHIpIHtcbiAgICBjb25zdCBpID0gbmV3IEVycm9yKCdJbmNvcnJlY3QgdXNhZ2Ugb2YgXCJtZXJnZVwiLiBDYW5ub3QgbWVyZ2UgYSBicmFuY2ggdG8gaXRzZWxmJyk7XG4gICAgdGhyb3cgaS5oYXNoID0ge1xuICAgICAgdGV4dDogYG1lcmdlICR7cn1gLFxuICAgICAgdG9rZW46IGBtZXJnZSAke3J9YCxcbiAgICAgIGV4cGVjdGVkOiBbXCJicmFuY2ggYWJjXCJdXG4gICAgfSwgaTtcbiAgfVxuICBpZiAoZiA9PT0gdm9pZCAwIHx8ICFmKSB7XG4gICAgY29uc3QgaSA9IG5ldyBFcnJvcihcbiAgICAgIGBJbmNvcnJlY3QgdXNhZ2Ugb2YgXCJtZXJnZVwiLiBDdXJyZW50IGJyYW5jaCAoJHtjLnJlY29yZHMuY3VyckJyYW5jaH0paGFzIG5vIGNvbW1pdHNgXG4gICAgKTtcbiAgICB0aHJvdyBpLmhhc2ggPSB7XG4gICAgICB0ZXh0OiBgbWVyZ2UgJHtyfWAsXG4gICAgICB0b2tlbjogYG1lcmdlICR7cn1gLFxuICAgICAgZXhwZWN0ZWQ6IFtcImNvbW1pdFwiXVxuICAgIH0sIGk7XG4gIH1cbiAgaWYgKCFjLnJlY29yZHMuYnJhbmNoZXMuaGFzKHIpKSB7XG4gICAgY29uc3QgaSA9IG5ldyBFcnJvcihcbiAgICAgICdJbmNvcnJlY3QgdXNhZ2Ugb2YgXCJtZXJnZVwiLiBCcmFuY2ggdG8gYmUgbWVyZ2VkICgnICsgciArIFwiKSBkb2VzIG5vdCBleGlzdFwiXG4gICAgKTtcbiAgICB0aHJvdyBpLmhhc2ggPSB7XG4gICAgICB0ZXh0OiBgbWVyZ2UgJHtyfWAsXG4gICAgICB0b2tlbjogYG1lcmdlICR7cn1gLFxuICAgICAgZXhwZWN0ZWQ6IFtgYnJhbmNoICR7cn1gXVxuICAgIH0sIGk7XG4gIH1cbiAgaWYgKGggPT09IHZvaWQgMCB8fCAhaCkge1xuICAgIGNvbnN0IGkgPSBuZXcgRXJyb3IoXG4gICAgICAnSW5jb3JyZWN0IHVzYWdlIG9mIFwibWVyZ2VcIi4gQnJhbmNoIHRvIGJlIG1lcmdlZCAoJyArIHIgKyBcIikgaGFzIG5vIGNvbW1pdHNcIlxuICAgICk7XG4gICAgdGhyb3cgaS5oYXNoID0ge1xuICAgICAgdGV4dDogYG1lcmdlICR7cn1gLFxuICAgICAgdG9rZW46IGBtZXJnZSAke3J9YCxcbiAgICAgIGV4cGVjdGVkOiBbJ1wiY29tbWl0XCInXVxuICAgIH0sIGk7XG4gIH1cbiAgaWYgKGYgPT09IGgpIHtcbiAgICBjb25zdCBpID0gbmV3IEVycm9yKCdJbmNvcnJlY3QgdXNhZ2Ugb2YgXCJtZXJnZVwiLiBCb3RoIGJyYW5jaGVzIGhhdmUgc2FtZSBoZWFkJyk7XG4gICAgdGhyb3cgaS5oYXNoID0ge1xuICAgICAgdGV4dDogYG1lcmdlICR7cn1gLFxuICAgICAgdG9rZW46IGBtZXJnZSAke3J9YCxcbiAgICAgIGV4cGVjdGVkOiBbXCJicmFuY2ggYWJjXCJdXG4gICAgfSwgaTtcbiAgfVxuICBpZiAocyAmJiBjLnJlY29yZHMuY29tbWl0cy5oYXMocykpIHtcbiAgICBjb25zdCBpID0gbmV3IEVycm9yKFxuICAgICAgJ0luY29ycmVjdCB1c2FnZSBvZiBcIm1lcmdlXCIuIENvbW1pdCB3aXRoIGlkOicgKyBzICsgXCIgYWxyZWFkeSBleGlzdHMsIHVzZSBkaWZmZXJlbnQgY3VzdG9tIGlkXCJcbiAgICApO1xuICAgIHRocm93IGkuaGFzaCA9IHtcbiAgICAgIHRleHQ6IGBtZXJnZSAke3J9ICR7c30gJHtufSAke2U/LmpvaW4oXCIgXCIpfWAsXG4gICAgICB0b2tlbjogYG1lcmdlICR7cn0gJHtzfSAke259ICR7ZT8uam9pbihcIiBcIil9YCxcbiAgICAgIGV4cGVjdGVkOiBbXG4gICAgICAgIGBtZXJnZSAke3J9ICR7c31fVU5JUVVFICR7bn0gJHtlPy5qb2luKFwiIFwiKX1gXG4gICAgICBdXG4gICAgfSwgaTtcbiAgfVxuICBjb25zdCAkID0gbyB8fCBcIlwiLCBnID0ge1xuICAgIGlkOiBzIHx8IGAke2MucmVjb3Jkcy5zZXF9LSR7QSgpfWAsXG4gICAgbWVzc2FnZTogYG1lcmdlZCBicmFuY2ggJHtyfSBpbnRvICR7Yy5yZWNvcmRzLmN1cnJCcmFuY2h9YCxcbiAgICBzZXE6IGMucmVjb3Jkcy5zZXErKyxcbiAgICBwYXJlbnRzOiBjLnJlY29yZHMuaGVhZCA9PSBudWxsID8gW10gOiBbYy5yZWNvcmRzLmhlYWQuaWQsICRdLFxuICAgIGJyYW5jaDogYy5yZWNvcmRzLmN1cnJCcmFuY2gsXG4gICAgdHlwZTogcC5NRVJHRSxcbiAgICBjdXN0b21UeXBlOiBuLFxuICAgIGN1c3RvbUlkOiAhIXMsXG4gICAgdGFnczogZSA/PyBbXVxuICB9O1xuICBjLnJlY29yZHMuaGVhZCA9IGcsIGMucmVjb3Jkcy5jb21taXRzLnNldChnLmlkLCBnKSwgYy5yZWNvcmRzLmJyYW5jaGVzLnNldChjLnJlY29yZHMuY3VyckJyYW5jaCwgZy5pZCksIG0uZGVidWcoYy5yZWNvcmRzLmJyYW5jaGVzKSwgbS5kZWJ1ZyhcImluIG1lcmdlQnJhbmNoXCIpO1xufSwgXCJtZXJnZVwiKSwgeHIgPSAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbih0KSB7XG4gIGxldCByID0gdC5pZCwgcyA9IHQudGFyZ2V0SWQsIG4gPSB0LnRhZ3MsIGUgPSB0LnBhcmVudDtcbiAgbS5kZWJ1ZyhcIkVudGVyaW5nIGNoZXJyeVBpY2s6XCIsIHIsIHMsIG4pO1xuICBjb25zdCBhID0gSSgpO1xuICBpZiAociA9IEMuc2FuaXRpemVUZXh0KHIsIGEpLCBzID0gQy5zYW5pdGl6ZVRleHQocywgYSksIG4gPSBuPy5tYXAoKGYpID0+IEMuc2FuaXRpemVUZXh0KGYsIGEpKSwgZSA9IEMuc2FuaXRpemVUZXh0KGUsIGEpLCAhciB8fCAhYy5yZWNvcmRzLmNvbW1pdHMuaGFzKHIpKSB7XG4gICAgY29uc3QgZiA9IG5ldyBFcnJvcihcbiAgICAgICdJbmNvcnJlY3QgdXNhZ2Ugb2YgXCJjaGVycnlQaWNrXCIuIFNvdXJjZSBjb21taXQgaWQgc2hvdWxkIGV4aXN0IGFuZCBwcm92aWRlZCdcbiAgICApO1xuICAgIHRocm93IGYuaGFzaCA9IHtcbiAgICAgIHRleHQ6IGBjaGVycnlQaWNrICR7cn0gJHtzfWAsXG4gICAgICB0b2tlbjogYGNoZXJyeVBpY2sgJHtyfSAke3N9YCxcbiAgICAgIGV4cGVjdGVkOiBbXCJjaGVycnktcGljayBhYmNcIl1cbiAgICB9LCBmO1xuICB9XG4gIGNvbnN0IGQgPSBjLnJlY29yZHMuY29tbWl0cy5nZXQocik7XG4gIGlmIChkID09PSB2b2lkIDAgfHwgIWQpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgdXNhZ2Ugb2YgXCJjaGVycnlQaWNrXCIuIFNvdXJjZSBjb21taXQgaWQgc2hvdWxkIGV4aXN0IGFuZCBwcm92aWRlZCcpO1xuICBpZiAoZSAmJiAhKEFycmF5LmlzQXJyYXkoZC5wYXJlbnRzKSAmJiBkLnBhcmVudHMuaW5jbHVkZXMoZSkpKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiSW52YWxpZCBvcGVyYXRpb246IFRoZSBzcGVjaWZpZWQgcGFyZW50IGNvbW1pdCBpcyBub3QgYW4gaW1tZWRpYXRlIHBhcmVudCBvZiB0aGUgY2hlcnJ5LXBpY2tlZCBjb21taXQuXCJcbiAgICApO1xuICBjb25zdCBvID0gZC5icmFuY2g7XG4gIGlmIChkLnR5cGUgPT09IHAuTUVSR0UgJiYgIWUpXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJJbmNvcnJlY3QgdXNhZ2Ugb2YgY2hlcnJ5LXBpY2s6IElmIHRoZSBzb3VyY2UgY29tbWl0IGlzIGEgbWVyZ2UgY29tbWl0LCBhbiBpbW1lZGlhdGUgcGFyZW50IGNvbW1pdCBtdXN0IGJlIHNwZWNpZmllZC5cIlxuICAgICk7XG4gIGlmICghcyB8fCAhYy5yZWNvcmRzLmNvbW1pdHMuaGFzKHMpKSB7XG4gICAgaWYgKG8gPT09IGMucmVjb3Jkcy5jdXJyQnJhbmNoKSB7XG4gICAgICBjb25zdCBnID0gbmV3IEVycm9yKFxuICAgICAgICAnSW5jb3JyZWN0IHVzYWdlIG9mIFwiY2hlcnJ5UGlja1wiLiBTb3VyY2UgY29tbWl0IGlzIGFscmVhZHkgb24gY3VycmVudCBicmFuY2gnXG4gICAgICApO1xuICAgICAgdGhyb3cgZy5oYXNoID0ge1xuICAgICAgICB0ZXh0OiBgY2hlcnJ5UGljayAke3J9ICR7c31gLFxuICAgICAgICB0b2tlbjogYGNoZXJyeVBpY2sgJHtyfSAke3N9YCxcbiAgICAgICAgZXhwZWN0ZWQ6IFtcImNoZXJyeS1waWNrIGFiY1wiXVxuICAgICAgfSwgZztcbiAgICB9XG4gICAgY29uc3QgZiA9IGMucmVjb3Jkcy5icmFuY2hlcy5nZXQoYy5yZWNvcmRzLmN1cnJCcmFuY2gpO1xuICAgIGlmIChmID09PSB2b2lkIDAgfHwgIWYpIHtcbiAgICAgIGNvbnN0IGcgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBJbmNvcnJlY3QgdXNhZ2Ugb2YgXCJjaGVycnktcGlja1wiLiBDdXJyZW50IGJyYW5jaCAoJHtjLnJlY29yZHMuY3VyckJyYW5jaH0paGFzIG5vIGNvbW1pdHNgXG4gICAgICApO1xuICAgICAgdGhyb3cgZy5oYXNoID0ge1xuICAgICAgICB0ZXh0OiBgY2hlcnJ5UGljayAke3J9ICR7c31gLFxuICAgICAgICB0b2tlbjogYGNoZXJyeVBpY2sgJHtyfSAke3N9YCxcbiAgICAgICAgZXhwZWN0ZWQ6IFtcImNoZXJyeS1waWNrIGFiY1wiXVxuICAgICAgfSwgZztcbiAgICB9XG4gICAgY29uc3QgaCA9IGMucmVjb3Jkcy5jb21taXRzLmdldChmKTtcbiAgICBpZiAoaCA9PT0gdm9pZCAwIHx8ICFoKSB7XG4gICAgICBjb25zdCBnID0gbmV3IEVycm9yKFxuICAgICAgICBgSW5jb3JyZWN0IHVzYWdlIG9mIFwiY2hlcnJ5LXBpY2tcIi4gQ3VycmVudCBicmFuY2ggKCR7Yy5yZWNvcmRzLmN1cnJCcmFuY2h9KWhhcyBubyBjb21taXRzYFxuICAgICAgKTtcbiAgICAgIHRocm93IGcuaGFzaCA9IHtcbiAgICAgICAgdGV4dDogYGNoZXJyeVBpY2sgJHtyfSAke3N9YCxcbiAgICAgICAgdG9rZW46IGBjaGVycnlQaWNrICR7cn0gJHtzfWAsXG4gICAgICAgIGV4cGVjdGVkOiBbXCJjaGVycnktcGljayBhYmNcIl1cbiAgICAgIH0sIGc7XG4gICAgfVxuICAgIGNvbnN0ICQgPSB7XG4gICAgICBpZDogYy5yZWNvcmRzLnNlcSArIFwiLVwiICsgQSgpLFxuICAgICAgbWVzc2FnZTogYGNoZXJyeS1waWNrZWQgJHtkPy5tZXNzYWdlfSBpbnRvICR7Yy5yZWNvcmRzLmN1cnJCcmFuY2h9YCxcbiAgICAgIHNlcTogYy5yZWNvcmRzLnNlcSsrLFxuICAgICAgcGFyZW50czogYy5yZWNvcmRzLmhlYWQgPT0gbnVsbCA/IFtdIDogW2MucmVjb3Jkcy5oZWFkLmlkLCBkLmlkXSxcbiAgICAgIGJyYW5jaDogYy5yZWNvcmRzLmN1cnJCcmFuY2gsXG4gICAgICB0eXBlOiBwLkNIRVJSWV9QSUNLLFxuICAgICAgdGFnczogbiA/IG4uZmlsdGVyKEJvb2xlYW4pIDogW1xuICAgICAgICBgY2hlcnJ5LXBpY2s6JHtkLmlkfSR7ZC50eXBlID09PSBwLk1FUkdFID8gYHxwYXJlbnQ6JHtlfWAgOiBcIlwifWBcbiAgICAgIF1cbiAgICB9O1xuICAgIGMucmVjb3Jkcy5oZWFkID0gJCwgYy5yZWNvcmRzLmNvbW1pdHMuc2V0KCQuaWQsICQpLCBjLnJlY29yZHMuYnJhbmNoZXMuc2V0KGMucmVjb3Jkcy5jdXJyQnJhbmNoLCAkLmlkKSwgbS5kZWJ1ZyhjLnJlY29yZHMuYnJhbmNoZXMpLCBtLmRlYnVnKFwiaW4gY2hlcnJ5UGlja1wiKTtcbiAgfVxufSwgXCJjaGVycnlQaWNrXCIpLCB6ID0gLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24odCkge1xuICBpZiAodCA9IEMuc2FuaXRpemVUZXh0KHQsIEkoKSksIGMucmVjb3Jkcy5icmFuY2hlcy5oYXModCkpIHtcbiAgICBjLnJlY29yZHMuY3VyckJyYW5jaCA9IHQ7XG4gICAgY29uc3QgciA9IGMucmVjb3Jkcy5icmFuY2hlcy5nZXQoYy5yZWNvcmRzLmN1cnJCcmFuY2gpO1xuICAgIHIgPT09IHZvaWQgMCB8fCAhciA/IGMucmVjb3Jkcy5oZWFkID0gbnVsbCA6IGMucmVjb3Jkcy5oZWFkID0gYy5yZWNvcmRzLmNvbW1pdHMuZ2V0KHIpID8/IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgciA9IG5ldyBFcnJvcihcbiAgICAgIGBUcnlpbmcgdG8gY2hlY2tvdXQgYnJhbmNoIHdoaWNoIGlzIG5vdCB5ZXQgY3JlYXRlZC4gKEhlbHAgdHJ5IHVzaW5nIFwiYnJhbmNoICR7dH1cIilgXG4gICAgKTtcbiAgICB0aHJvdyByLmhhc2ggPSB7XG4gICAgICB0ZXh0OiBgY2hlY2tvdXQgJHt0fWAsXG4gICAgICB0b2tlbjogYGNoZWNrb3V0ICR7dH1gLFxuICAgICAgZXhwZWN0ZWQ6IFtgYnJhbmNoICR7dH1gXVxuICAgIH0sIHI7XG4gIH1cbn0sIFwiY2hlY2tvdXRcIik7XG5mdW5jdGlvbiBIKHQsIHIsIHMpIHtcbiAgY29uc3QgbiA9IHQuaW5kZXhPZihyKTtcbiAgbiA9PT0gLTEgPyB0LnB1c2gocykgOiB0LnNwbGljZShuLCAxLCBzKTtcbn1cbmwoSCwgXCJ1cHNlcnRcIik7XG5mdW5jdGlvbiBQKHQpIHtcbiAgY29uc3QgciA9IHQucmVkdWNlKChlLCBhKSA9PiBlLnNlcSA+IGEuc2VxID8gZSA6IGEsIHRbMF0pO1xuICBsZXQgcyA9IFwiXCI7XG4gIHQuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgZSA9PT0gciA/IHMgKz0gXCJcdCpcIiA6IHMgKz0gXCJcdHxcIjtcbiAgfSk7XG4gIGNvbnN0IG4gPSBbcywgci5pZCwgci5zZXFdO1xuICBmb3IgKGNvbnN0IGUgaW4gYy5yZWNvcmRzLmJyYW5jaGVzKVxuICAgIGMucmVjb3Jkcy5icmFuY2hlcy5nZXQoZSkgPT09IHIuaWQgJiYgbi5wdXNoKGUpO1xuICBpZiAobS5kZWJ1ZyhuLmpvaW4oXCIgXCIpKSwgci5wYXJlbnRzICYmIHIucGFyZW50cy5sZW5ndGggPT0gMiAmJiByLnBhcmVudHNbMF0gJiYgci5wYXJlbnRzWzFdKSB7XG4gICAgY29uc3QgZSA9IGMucmVjb3Jkcy5jb21taXRzLmdldChyLnBhcmVudHNbMF0pO1xuICAgIEgodCwgciwgZSksIHIucGFyZW50c1sxXSAmJiB0LnB1c2goYy5yZWNvcmRzLmNvbW1pdHMuZ2V0KHIucGFyZW50c1sxXSkpO1xuICB9IGVsc2Uge1xuICAgIGlmIChyLnBhcmVudHMubGVuZ3RoID09IDApXG4gICAgICByZXR1cm47XG4gICAgaWYgKHIucGFyZW50c1swXSkge1xuICAgICAgY29uc3QgZSA9IGMucmVjb3Jkcy5jb21taXRzLmdldChyLnBhcmVudHNbMF0pO1xuICAgICAgSCh0LCByLCBlKTtcbiAgICB9XG4gIH1cbiAgdCA9IEYodCwgKGUpID0+IGUuaWQpLCBQKHQpO1xufVxubChQLCBcInByZXR0eVByaW50Q29tbWl0SGlzdG9yeVwiKTtcbnZhciBwciA9IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKCkge1xuICBtLmRlYnVnKGMucmVjb3Jkcy5jb21taXRzKTtcbiAgY29uc3QgdCA9IE4oKVswXTtcbiAgUChbdF0pO1xufSwgXCJwcmV0dHlQcmludFwiKSwgbXIgPSAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbigpIHtcbiAgYy5yZXNldCgpLCBzcigpO1xufSwgXCJjbGVhclwiKSwgYnIgPSAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFsuLi5jLnJlY29yZHMuYnJhbmNoQ29uZmlnLnZhbHVlcygpXS5tYXAoKHIsIHMpID0+IHIub3JkZXIgIT09IG51bGwgJiYgci5vcmRlciAhPT0gdm9pZCAwID8gciA6IHtcbiAgICAuLi5yLFxuICAgIG9yZGVyOiBwYXJzZUZsb2F0KGAwLiR7c31gKVxuICB9KS5zb3J0KChyLCBzKSA9PiAoci5vcmRlciA/PyAwKSAtIChzLm9yZGVyID8/IDApKS5tYXAoKHsgbmFtZTogciB9KSA9PiAoeyBuYW1lOiByIH0pKTtcbn0sIFwiZ2V0QnJhbmNoZXNBc09iakFycmF5XCIpLCB3ciA9IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYy5yZWNvcmRzLmJyYW5jaGVzO1xufSwgXCJnZXRCcmFuY2hlc1wiKSwgdnIgPSAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGMucmVjb3Jkcy5jb21taXRzO1xufSwgXCJnZXRDb21taXRzXCIpLCBOID0gLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHQgPSBbLi4uYy5yZWNvcmRzLmNvbW1pdHMudmFsdWVzKCldO1xuICByZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICBtLmRlYnVnKHIuaWQpO1xuICB9KSwgdC5zb3J0KChyLCBzKSA9PiByLnNlcSAtIHMuc2VxKSwgdDtcbn0sIFwiZ2V0Q29tbWl0c0FycmF5XCIpLCBDciA9IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYy5yZWNvcmRzLmN1cnJCcmFuY2g7XG59LCBcImdldEN1cnJlbnRCcmFuY2hcIiksIEVyID0gLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjLnJlY29yZHMuZGlyZWN0aW9uO1xufSwgXCJnZXREaXJlY3Rpb25cIiksIFRyID0gLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjLnJlY29yZHMuaGVhZDtcbn0sIFwiZ2V0SGVhZFwiKSwgUyA9IHtcbiAgY29tbWl0VHlwZTogcCxcbiAgZ2V0Q29uZmlnOiBJLFxuICBzZXREaXJlY3Rpb246IGxyLFxuICBzZXRPcHRpb25zOiAkcixcbiAgZ2V0T3B0aW9uczogZnIsXG4gIGNvbW1pdDogZ3IsXG4gIGJyYW5jaDogeXIsXG4gIG1lcmdlOiB1cixcbiAgY2hlcnJ5UGljazogeHIsXG4gIGNoZWNrb3V0OiB6LFxuICAvL3Jlc2V0LFxuICBwcmV0dHlQcmludDogcHIsXG4gIGNsZWFyOiBtcixcbiAgZ2V0QnJhbmNoZXNBc09iakFycmF5OiBicixcbiAgZ2V0QnJhbmNoZXM6IHdyLFxuICBnZXRDb21taXRzOiB2cixcbiAgZ2V0Q29tbWl0c0FycmF5OiBOLFxuICBnZXRDdXJyZW50QnJhbmNoOiBDcixcbiAgZ2V0RGlyZWN0aW9uOiBFcixcbiAgZ2V0SGVhZDogVHIsXG4gIHNldEFjY1RpdGxlOiBaLFxuICBnZXRBY2NUaXRsZTogUSxcbiAgZ2V0QWNjRGVzY3JpcHRpb246IEosXG4gIHNldEFjY0Rlc2NyaXB0aW9uOiBYLFxuICBzZXREaWFncmFtVGl0bGU6IFYsXG4gIGdldERpYWdyYW1UaXRsZTogVVxufSwgQnIgPSAvKiBAX19QVVJFX18gKi8gbCgodCwgcikgPT4ge1xuICBZKHQsIHIpLCB0LmRpciAmJiByLnNldERpcmVjdGlvbih0LmRpcik7XG4gIGZvciAoY29uc3QgcyBvZiB0LnN0YXRlbWVudHMpXG4gICAgTHIocywgcik7XG59LCBcInBvcHVsYXRlXCIpLCBMciA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0LCByKSA9PiB7XG4gIGNvbnN0IG4gPSB7XG4gICAgQ29tbWl0OiAvKiBAX19QVVJFX18gKi8gbCgoZSkgPT4gci5jb21taXQoa3IoZSkpLCBcIkNvbW1pdFwiKSxcbiAgICBCcmFuY2g6IC8qIEBfX1BVUkVfXyAqLyBsKChlKSA9PiByLmJyYW5jaChNcihlKSksIFwiQnJhbmNoXCIpLFxuICAgIE1lcmdlOiAvKiBAX19QVVJFX18gKi8gbCgoZSkgPT4gci5tZXJnZShJcihlKSksIFwiTWVyZ2VcIiksXG4gICAgQ2hlY2tvdXQ6IC8qIEBfX1BVUkVfXyAqLyBsKChlKSA9PiByLmNoZWNrb3V0KFJyKGUpKSwgXCJDaGVja291dFwiKSxcbiAgICBDaGVycnlQaWNraW5nOiAvKiBAX19QVVJFX18gKi8gbCgoZSkgPT4gci5jaGVycnlQaWNrKEdyKGUpKSwgXCJDaGVycnlQaWNraW5nXCIpXG4gIH1bdC4kdHlwZV07XG4gIG4gPyBuKHQpIDogbS5lcnJvcihgVW5rbm93biBzdGF0ZW1lbnQgdHlwZTogJHt0LiR0eXBlfWApO1xufSwgXCJwYXJzZVN0YXRlbWVudFwiKSwga3IgPSAvKiBAX19QVVJFX18gKi8gbCgodCkgPT4gKHtcbiAgaWQ6IHQuaWQsXG4gIG1zZzogdC5tZXNzYWdlID8/IFwiXCIsXG4gIHR5cGU6IHQudHlwZSAhPT0gdm9pZCAwID8gcFt0LnR5cGVdIDogcC5OT1JNQUwsXG4gIHRhZ3M6IHQudGFncyA/PyB2b2lkIDBcbn0pLCBcInBhcnNlQ29tbWl0XCIpLCBNciA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0KSA9PiAoe1xuICBuYW1lOiB0Lm5hbWUsXG4gIG9yZGVyOiB0Lm9yZGVyID8/IDBcbn0pLCBcInBhcnNlQnJhbmNoXCIpLCBJciA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0KSA9PiAoe1xuICBicmFuY2g6IHQuYnJhbmNoLFxuICBpZDogdC5pZCA/PyBcIlwiLFxuICB0eXBlOiB0LnR5cGUgIT09IHZvaWQgMCA/IHBbdC50eXBlXSA6IHZvaWQgMCxcbiAgdGFnczogdC50YWdzID8/IHZvaWQgMFxufSksIFwicGFyc2VNZXJnZVwiKSwgUnIgPSAvKiBAX19QVVJFX18gKi8gbCgodCkgPT4gdC5icmFuY2gsIFwicGFyc2VDaGVja291dFwiKSwgR3IgPSAvKiBAX19QVVJFX18gKi8gbCgodCkgPT4gKHtcbiAgaWQ6IHQuaWQsXG4gIHRhcmdldElkOiBcIlwiLFxuICB0YWdzOiB0LnRhZ3M/Lmxlbmd0aCA9PT0gMCA/IHZvaWQgMCA6IHQudGFncyxcbiAgcGFyZW50OiB0LnBhcmVudFxufSksIFwicGFyc2VDaGVycnlQaWNraW5nXCIpLCBPciA9IHtcbiAgcGFyc2U6IC8qIEBfX1BVUkVfXyAqLyBsKGFzeW5jICh0KSA9PiB7XG4gICAgY29uc3QgciA9IGF3YWl0IGRyKFwiZ2l0R3JhcGhcIiwgdCk7XG4gICAgbS5kZWJ1ZyhyKSwgQnIociwgUyk7XG4gIH0sIFwicGFyc2VcIilcbn0sIHFyID0gcnIoKSwgdiA9IHFyPy5naXRHcmFwaCwgTCA9IDEwLCBrID0gNDAsIEUgPSA0LCBUID0gMiwgTSA9IDgsIGIgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB3ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgTyA9IDMwLCBSID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgcSA9IFtdLCBCID0gMCwgdSA9IFwiTFJcIiwgQXIgPSAvKiBAX19QVVJFX18gKi8gbCgoKSA9PiB7XG4gIGIuY2xlYXIoKSwgdy5jbGVhcigpLCBSLmNsZWFyKCksIEIgPSAwLCBxID0gW10sIHUgPSBcIkxSXCI7XG59LCBcImNsZWFyXCIpLCBXID0gLyogQF9fUFVSRV9fICovIGwoKHQpID0+IHtcbiAgY29uc3QgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidGV4dFwiKTtcbiAgcmV0dXJuICh0eXBlb2YgdCA9PSBcInN0cmluZ1wiID8gdC5zcGxpdCgvXFxcXG58XFxufDxiclxccypcXC8/Pi9naSkgOiB0KS5mb3JFYWNoKChuKSA9PiB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidHNwYW5cIik7XG4gICAgZS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLCBcInhtbDpzcGFjZVwiLCBcInByZXNlcnZlXCIpLCBlLnNldEF0dHJpYnV0ZShcImR5XCIsIFwiMWVtXCIpLCBlLnNldEF0dHJpYnV0ZShcInhcIiwgXCIwXCIpLCBlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicm93XCIpLCBlLnRleHRDb250ZW50ID0gbi50cmltKCksIHIuYXBwZW5kQ2hpbGQoZSk7XG4gIH0pLCByO1xufSwgXCJkcmF3VGV4dFwiKSwgaiA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0KSA9PiB7XG4gIGxldCByLCBzLCBuO1xuICByZXR1cm4gdSA9PT0gXCJCVFwiID8gKHMgPSAvKiBAX19QVVJFX18gKi8gbCgoZSwgYSkgPT4gZSA8PSBhLCBcImNvbXBhcmlzb25GdW5jXCIpLCBuID0gMSAvIDApIDogKHMgPSAvKiBAX19QVVJFX18gKi8gbCgoZSwgYSkgPT4gZSA+PSBhLCBcImNvbXBhcmlzb25GdW5jXCIpLCBuID0gMCksIHQuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IGEgPSB1ID09PSBcIlRCXCIgfHwgdSA9PSBcIkJUXCIgPyB3LmdldChlKT8ueSA6IHcuZ2V0KGUpPy54O1xuICAgIGEgIT09IHZvaWQgMCAmJiBzKGEsIG4pICYmIChyID0gZSwgbiA9IGEpO1xuICB9KSwgcjtcbn0sIFwiZmluZENsb3Nlc3RQYXJlbnRcIiksIF9yID0gLyogQF9fUFVSRV9fICovIGwoKHQpID0+IHtcbiAgbGV0IHIgPSBcIlwiLCBzID0gMSAvIDA7XG4gIHJldHVybiB0LmZvckVhY2goKG4pID0+IHtcbiAgICBjb25zdCBlID0gdy5nZXQobikueTtcbiAgICBlIDw9IHMgJiYgKHIgPSBuLCBzID0gZSk7XG4gIH0pLCByIHx8IHZvaWQgMDtcbn0sIFwiZmluZENsb3Nlc3RQYXJlbnRCVFwiKSwgSHIgPSAvKiBAX19QVVJFX18gKi8gbCgodCwgciwgcykgPT4ge1xuICBsZXQgbiA9IHMsIGUgPSBzO1xuICBjb25zdCBhID0gW107XG4gIHQuZm9yRWFjaCgoZCkgPT4ge1xuICAgIGNvbnN0IG8gPSByLmdldChkKTtcbiAgICBpZiAoIW8pXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbW1pdCBub3QgZm91bmQgZm9yIGtleSAke2R9YCk7XG4gICAgby5wYXJlbnRzLmxlbmd0aCA/IChuID0gRHIobyksIGUgPSBNYXRoLm1heChuLCBlKSkgOiBhLnB1c2gobyksIEZyKG8sIG4pO1xuICB9KSwgbiA9IGUsIGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgIHpyKGQsIG4sIHMpO1xuICB9KSwgdC5mb3JFYWNoKChkKSA9PiB7XG4gICAgY29uc3QgbyA9IHIuZ2V0KGQpO1xuICAgIGlmIChvPy5wYXJlbnRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZiA9IF9yKG8ucGFyZW50cyk7XG4gICAgICBuID0gdy5nZXQoZikueSAtIGssIG4gPD0gZSAmJiAoZSA9IG4pO1xuICAgICAgY29uc3QgaCA9IGIuZ2V0KG8uYnJhbmNoKS5wb3MsICQgPSBuIC0gTDtcbiAgICAgIHcuc2V0KG8uaWQsIHsgeDogaCwgeTogJCB9KTtcbiAgICB9XG4gIH0pO1xufSwgXCJzZXRQYXJhbGxlbEJUUG9zXCIpLCBQciA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0KSA9PiB7XG4gIGNvbnN0IHIgPSBqKHQucGFyZW50cy5maWx0ZXIoKG4pID0+IG4gIT09IG51bGwpKTtcbiAgaWYgKCFyKVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2xvc2VzdCBwYXJlbnQgbm90IGZvdW5kIGZvciBjb21taXQgJHt0LmlkfWApO1xuICBjb25zdCBzID0gdy5nZXQocik/Lnk7XG4gIGlmIChzID09PSB2b2lkIDApXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDbG9zZXN0IHBhcmVudCBwb3NpdGlvbiBub3QgZm91bmQgZm9yIGNvbW1pdCAke3QuaWR9YCk7XG4gIHJldHVybiBzO1xufSwgXCJmaW5kQ2xvc2VzdFBhcmVudFBvc1wiKSwgRHIgPSAvKiBAX19QVVJFX18gKi8gbCgodCkgPT4gUHIodCkgKyBrLCBcImNhbGN1bGF0ZUNvbW1pdFBvc2l0aW9uXCIpLCBGciA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0LCByKSA9PiB7XG4gIGNvbnN0IHMgPSBiLmdldCh0LmJyYW5jaCk7XG4gIGlmICghcylcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEJyYW5jaCBub3QgZm91bmQgZm9yIGNvbW1pdCAke3QuaWR9YCk7XG4gIGNvbnN0IG4gPSBzLnBvcywgZSA9IHIgKyBMO1xuICByZXR1cm4gdy5zZXQodC5pZCwgeyB4OiBuLCB5OiBlIH0pLCB7IHg6IG4sIHk6IGUgfTtcbn0sIFwic2V0Q29tbWl0UG9zaXRpb25cIiksIHpyID0gLyogQF9fUFVSRV9fICovIGwoKHQsIHIsIHMpID0+IHtcbiAgY29uc3QgbiA9IGIuZ2V0KHQuYnJhbmNoKTtcbiAgaWYgKCFuKVxuICAgIHRocm93IG5ldyBFcnJvcihgQnJhbmNoIG5vdCBmb3VuZCBmb3IgY29tbWl0ICR7dC5pZH1gKTtcbiAgY29uc3QgZSA9IHIgKyBzLCBhID0gbi5wb3M7XG4gIHcuc2V0KHQuaWQsIHsgeDogYSwgeTogZSB9KTtcbn0sIFwic2V0Um9vdFBvc2l0aW9uXCIpLCBOciA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0LCByLCBzLCBuLCBlLCBhKSA9PiB7XG4gIGlmIChhID09PSBwLkhJR0hMSUdIVClcbiAgICB0LmFwcGVuZChcInJlY3RcIikuYXR0cihcInhcIiwgcy54IC0gMTApLmF0dHIoXCJ5XCIsIHMueSAtIDEwKS5hdHRyKFwid2lkdGhcIiwgMjApLmF0dHIoXCJoZWlnaHRcIiwgMjApLmF0dHIoXG4gICAgICBcImNsYXNzXCIsXG4gICAgICBgY29tbWl0ICR7ci5pZH0gY29tbWl0LWhpZ2hsaWdodCR7ZSAlIE19ICR7bn0tb3V0ZXJgXG4gICAgKSwgdC5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ4XCIsIHMueCAtIDYpLmF0dHIoXCJ5XCIsIHMueSAtIDYpLmF0dHIoXCJ3aWR0aFwiLCAxMikuYXR0cihcImhlaWdodFwiLCAxMikuYXR0cihcbiAgICAgIFwiY2xhc3NcIixcbiAgICAgIGBjb21taXQgJHtyLmlkfSBjb21taXQke2UgJSBNfSAke259LWlubmVyYFxuICAgICk7XG4gIGVsc2UgaWYgKGEgPT09IHAuQ0hFUlJZX1BJQ0spXG4gICAgdC5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIHMueCkuYXR0cihcImN5XCIsIHMueSkuYXR0cihcInJcIiwgMTApLmF0dHIoXCJjbGFzc1wiLCBgY29tbWl0ICR7ci5pZH0gJHtufWApLCB0LmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgcy54IC0gMykuYXR0cihcImN5XCIsIHMueSArIDIpLmF0dHIoXCJyXCIsIDIuNzUpLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKS5hdHRyKFwiY2xhc3NcIiwgYGNvbW1pdCAke3IuaWR9ICR7bn1gKSwgdC5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIHMueCArIDMpLmF0dHIoXCJjeVwiLCBzLnkgKyAyKS5hdHRyKFwiclwiLCAyLjc1KS5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIikuYXR0cihcImNsYXNzXCIsIGBjb21taXQgJHtyLmlkfSAke259YCksIHQuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgcy54ICsgMykuYXR0cihcInkxXCIsIHMueSArIDEpLmF0dHIoXCJ4MlwiLCBzLngpLmF0dHIoXCJ5MlwiLCBzLnkgLSA1KS5hdHRyKFwic3Ryb2tlXCIsIFwiI2ZmZlwiKS5hdHRyKFwiY2xhc3NcIiwgYGNvbW1pdCAke3IuaWR9ICR7bn1gKSwgdC5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJ4MVwiLCBzLnggLSAzKS5hdHRyKFwieTFcIiwgcy55ICsgMSkuYXR0cihcIngyXCIsIHMueCkuYXR0cihcInkyXCIsIHMueSAtIDUpLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpLmF0dHIoXCJjbGFzc1wiLCBgY29tbWl0ICR7ci5pZH0gJHtufWApO1xuICBlbHNlIHtcbiAgICBjb25zdCBkID0gdC5hcHBlbmQoXCJjaXJjbGVcIik7XG4gICAgaWYgKGQuYXR0cihcImN4XCIsIHMueCksIGQuYXR0cihcImN5XCIsIHMueSksIGQuYXR0cihcInJcIiwgci50eXBlID09PSBwLk1FUkdFID8gOSA6IDEwKSwgZC5hdHRyKFwiY2xhc3NcIiwgYGNvbW1pdCAke3IuaWR9IGNvbW1pdCR7ZSAlIE19YCksIGEgPT09IHAuTUVSR0UpIHtcbiAgICAgIGNvbnN0IG8gPSB0LmFwcGVuZChcImNpcmNsZVwiKTtcbiAgICAgIG8uYXR0cihcImN4XCIsIHMueCksIG8uYXR0cihcImN5XCIsIHMueSksIG8uYXR0cihcInJcIiwgNiksIG8uYXR0cihcbiAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICBgY29tbWl0ICR7bn0gJHtyLmlkfSBjb21taXQke2UgJSBNfWBcbiAgICAgICk7XG4gICAgfVxuICAgIGEgPT09IHAuUkVWRVJTRSAmJiB0LmFwcGVuZChcInBhdGhcIikuYXR0cihcbiAgICAgIFwiZFwiLFxuICAgICAgYE0gJHtzLnggLSA1fSwke3MueSAtIDV9TCR7cy54ICsgNX0sJHtzLnkgKyA1fU0ke3MueCAtIDV9LCR7cy55ICsgNX1MJHtzLnggKyA1fSwke3MueSAtIDV9YFxuICAgICkuYXR0cihcImNsYXNzXCIsIGBjb21taXQgJHtufSAke3IuaWR9IGNvbW1pdCR7ZSAlIE19YCk7XG4gIH1cbn0sIFwiZHJhd0NvbW1pdEJ1bGxldFwiKSwgU3IgPSAvKiBAX19QVVJFX18gKi8gbCgodCwgciwgcywgbikgPT4ge1xuICBpZiAoci50eXBlICE9PSBwLkNIRVJSWV9QSUNLICYmIChyLmN1c3RvbUlkICYmIHIudHlwZSA9PT0gcC5NRVJHRSB8fCByLnR5cGUgIT09IHAuTUVSR0UpICYmIHY/LnNob3dDb21taXRMYWJlbCkge1xuICAgIGNvbnN0IGUgPSB0LmFwcGVuZChcImdcIiksIGEgPSBlLmluc2VydChcInJlY3RcIikuYXR0cihcImNsYXNzXCIsIFwiY29tbWl0LWxhYmVsLWJrZ1wiKSwgZCA9IGUuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCBuKS5hdHRyKFwieVwiLCBzLnkgKyAyNSkuYXR0cihcImNsYXNzXCIsIFwiY29tbWl0LWxhYmVsXCIpLnRleHQoci5pZCksIG8gPSBkLm5vZGUoKT8uZ2V0QkJveCgpO1xuICAgIGlmIChvICYmIChhLmF0dHIoXCJ4XCIsIHMucG9zV2l0aE9mZnNldCAtIG8ud2lkdGggLyAyIC0gVCkuYXR0cihcInlcIiwgcy55ICsgMTMuNSkuYXR0cihcIndpZHRoXCIsIG8ud2lkdGggKyAyICogVCkuYXR0cihcImhlaWdodFwiLCBvLmhlaWdodCArIDIgKiBUKSwgdSA9PT0gXCJUQlwiIHx8IHUgPT09IFwiQlRcIiA/IChhLmF0dHIoXCJ4XCIsIHMueCAtIChvLndpZHRoICsgNCAqIEUgKyA1KSkuYXR0cihcInlcIiwgcy55IC0gMTIpLCBkLmF0dHIoXCJ4XCIsIHMueCAtIChvLndpZHRoICsgNCAqIEUpKS5hdHRyKFwieVwiLCBzLnkgKyBvLmhlaWdodCAtIDEyKSkgOiBkLmF0dHIoXCJ4XCIsIHMucG9zV2l0aE9mZnNldCAtIG8ud2lkdGggLyAyKSwgdi5yb3RhdGVDb21taXRMYWJlbCkpXG4gICAgICBpZiAodSA9PT0gXCJUQlwiIHx8IHUgPT09IFwiQlRcIilcbiAgICAgICAgZC5hdHRyKFxuICAgICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgXCJyb3RhdGUoLTQ1LCBcIiArIHMueCArIFwiLCBcIiArIHMueSArIFwiKVwiXG4gICAgICAgICksIGEuYXR0cihcbiAgICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgIFwicm90YXRlKC00NSwgXCIgKyBzLnggKyBcIiwgXCIgKyBzLnkgKyBcIilcIlxuICAgICAgICApO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGYgPSAtNy41IC0gKG8ud2lkdGggKyAxMCkgLyAyNSAqIDkuNSwgaCA9IDEwICsgby53aWR0aCAvIDI1ICogOC41O1xuICAgICAgICBlLmF0dHIoXG4gICAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIGYgKyBcIiwgXCIgKyBoICsgXCIpIHJvdGF0ZSgtNDUsIFwiICsgbiArIFwiLCBcIiArIHMueSArIFwiKVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gIH1cbn0sIFwiZHJhd0NvbW1pdExhYmVsXCIpLCBXciA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0LCByLCBzLCBuKSA9PiB7XG4gIGlmIChyLnRhZ3MubGVuZ3RoID4gMCkge1xuICAgIGxldCBlID0gMCwgYSA9IDAsIGQgPSAwO1xuICAgIGNvbnN0IG8gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGYgb2Ygci50YWdzLnJldmVyc2UoKSkge1xuICAgICAgY29uc3QgaCA9IHQuaW5zZXJ0KFwicG9seWdvblwiKSwgJCA9IHQuYXBwZW5kKFwiY2lyY2xlXCIpLCBnID0gdC5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ5XCIsIHMueSAtIDE2IC0gZSkuYXR0cihcImNsYXNzXCIsIFwidGFnLWxhYmVsXCIpLnRleHQoZiksIGkgPSBnLm5vZGUoKT8uZ2V0QkJveCgpO1xuICAgICAgaWYgKCFpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUYWcgYmJveCBub3QgZm91bmRcIik7XG4gICAgICBhID0gTWF0aC5tYXgoYSwgaS53aWR0aCksIGQgPSBNYXRoLm1heChkLCBpLmhlaWdodCksIGcuYXR0cihcInhcIiwgcy5wb3NXaXRoT2Zmc2V0IC0gaS53aWR0aCAvIDIpLCBvLnB1c2goe1xuICAgICAgICB0YWc6IGcsXG4gICAgICAgIGhvbGU6ICQsXG4gICAgICAgIHJlY3Q6IGgsXG4gICAgICAgIHlPZmZzZXQ6IGVcbiAgICAgIH0pLCBlICs9IDIwO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHsgdGFnOiBmLCBob2xlOiBoLCByZWN0OiAkLCB5T2Zmc2V0OiBnIH0gb2Ygbykge1xuICAgICAgY29uc3QgaSA9IGQgLyAyLCB5ID0gcy55IC0gMTkuMiAtIGc7XG4gICAgICBpZiAoJC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWctbGFiZWwtYmtnXCIpLmF0dHIoXG4gICAgICAgIFwicG9pbnRzXCIsXG4gICAgICAgIGBcbiAgICAgICR7biAtIGEgLyAyIC0gRSAvIDJ9LCR7eSArIFR9ICBcbiAgICAgICR7biAtIGEgLyAyIC0gRSAvIDJ9LCR7eSAtIFR9XG4gICAgICAke3MucG9zV2l0aE9mZnNldCAtIGEgLyAyIC0gRX0sJHt5IC0gaSAtIFR9XG4gICAgICAke3MucG9zV2l0aE9mZnNldCArIGEgLyAyICsgRX0sJHt5IC0gaSAtIFR9XG4gICAgICAke3MucG9zV2l0aE9mZnNldCArIGEgLyAyICsgRX0sJHt5ICsgaSArIFR9XG4gICAgICAke3MucG9zV2l0aE9mZnNldCAtIGEgLyAyIC0gRX0sJHt5ICsgaSArIFR9YFxuICAgICAgKSwgaC5hdHRyKFwiY3lcIiwgeSkuYXR0cihcImN4XCIsIG4gLSBhIC8gMiArIEUgLyAyKS5hdHRyKFwiclwiLCAxLjUpLmF0dHIoXCJjbGFzc1wiLCBcInRhZy1ob2xlXCIpLCB1ID09PSBcIlRCXCIgfHwgdSA9PT0gXCJCVFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBuICsgZztcbiAgICAgICAgJC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWctbGFiZWwtYmtnXCIpLmF0dHIoXG4gICAgICAgICAgXCJwb2ludHNcIixcbiAgICAgICAgICBgXG4gICAgICAgICR7cy54fSwke3ggKyAyfVxuICAgICAgICAke3MueH0sJHt4IC0gMn1cbiAgICAgICAgJHtzLnggKyBMfSwke3ggLSBpIC0gMn1cbiAgICAgICAgJHtzLnggKyBMICsgYSArIDR9LCR7eCAtIGkgLSAyfVxuICAgICAgICAke3MueCArIEwgKyBhICsgNH0sJHt4ICsgaSArIDJ9XG4gICAgICAgICR7cy54ICsgTH0sJHt4ICsgaSArIDJ9YFxuICAgICAgICApLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTIsMTIpIHJvdGF0ZSg0NSwgXCIgKyBzLnggKyBcIixcIiArIG4gKyBcIilcIiksIGguYXR0cihcImN4XCIsIHMueCArIEUgLyAyKS5hdHRyKFwiY3lcIiwgeCkuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMiwxMikgcm90YXRlKDQ1LCBcIiArIHMueCArIFwiLFwiICsgbiArIFwiKVwiKSwgZi5hdHRyKFwieFwiLCBzLnggKyA1KS5hdHRyKFwieVwiLCB4ICsgMykuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxNCwxNCkgcm90YXRlKDQ1LCBcIiArIHMueCArIFwiLFwiICsgbiArIFwiKVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sIFwiZHJhd0NvbW1pdFRhZ3NcIiksIGpyID0gLyogQF9fUFVSRV9fICovIGwoKHQpID0+IHtcbiAgc3dpdGNoICh0LmN1c3RvbVR5cGUgPz8gdC50eXBlKSB7XG4gICAgY2FzZSBwLk5PUk1BTDpcbiAgICAgIHJldHVybiBcImNvbW1pdC1ub3JtYWxcIjtcbiAgICBjYXNlIHAuUkVWRVJTRTpcbiAgICAgIHJldHVybiBcImNvbW1pdC1yZXZlcnNlXCI7XG4gICAgY2FzZSBwLkhJR0hMSUdIVDpcbiAgICAgIHJldHVybiBcImNvbW1pdC1oaWdobGlnaHRcIjtcbiAgICBjYXNlIHAuTUVSR0U6XG4gICAgICByZXR1cm4gXCJjb21taXQtbWVyZ2VcIjtcbiAgICBjYXNlIHAuQ0hFUlJZX1BJQ0s6XG4gICAgICByZXR1cm4gXCJjb21taXQtY2hlcnJ5LXBpY2tcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiY29tbWl0LW5vcm1hbFwiO1xuICB9XG59LCBcImdldENvbW1pdENsYXNzVHlwZVwiKSwgWXIgPSAvKiBAX19QVVJFX18gKi8gbCgodCwgciwgcywgbikgPT4ge1xuICBjb25zdCBlID0geyB4OiAwLCB5OiAwIH07XG4gIGlmICh0LnBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGEgPSBqKHQucGFyZW50cyk7XG4gICAgaWYgKGEpIHtcbiAgICAgIGNvbnN0IGQgPSBuLmdldChhKSA/PyBlO1xuICAgICAgcmV0dXJuIHIgPT09IFwiVEJcIiA/IGQueSArIGsgOiByID09PSBcIkJUXCIgPyAobi5nZXQodC5pZCkgPz8gZSkueSAtIGsgOiBkLnggKyBrO1xuICAgIH1cbiAgfSBlbHNlXG4gICAgcmV0dXJuIHIgPT09IFwiVEJcIiA/IE8gOiByID09PSBcIkJUXCIgPyAobi5nZXQodC5pZCkgPz8gZSkueSAtIGsgOiAwO1xuICByZXR1cm4gMDtcbn0sIFwiY2FsY3VsYXRlUG9zaXRpb25cIiksIEtyID0gLyogQF9fUFVSRV9fICovIGwoKHQsIHIsIHMpID0+IHtcbiAgY29uc3QgbiA9IHUgPT09IFwiQlRcIiAmJiBzID8gciA6IHIgKyBMLCBlID0gdSA9PT0gXCJUQlwiIHx8IHUgPT09IFwiQlRcIiA/IG4gOiBiLmdldCh0LmJyYW5jaCk/LnBvcywgYSA9IHUgPT09IFwiVEJcIiB8fCB1ID09PSBcIkJUXCIgPyBiLmdldCh0LmJyYW5jaCk/LnBvcyA6IG47XG4gIGlmIChhID09PSB2b2lkIDAgfHwgZSA9PT0gdm9pZCAwKVxuICAgIHRocm93IG5ldyBFcnJvcihgUG9zaXRpb24gd2VyZSB1bmRlZmluZWQgZm9yIGNvbW1pdCAke3QuaWR9YCk7XG4gIHJldHVybiB7IHg6IGEsIHk6IGUsIHBvc1dpdGhPZmZzZXQ6IG4gfTtcbn0sIFwiZ2V0Q29tbWl0UG9zaXRpb25cIiksIEQgPSAvKiBAX19QVVJFX18gKi8gbCgodCwgciwgcykgPT4ge1xuICBpZiAoIXYpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2l0R3JhcGggY29uZmlnIG5vdCBmb3VuZFwiKTtcbiAgY29uc3QgbiA9IHQuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJjb21taXQtYnVsbGV0c1wiKSwgZSA9IHQuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJjb21taXQtbGFiZWxzXCIpO1xuICBsZXQgYSA9IHUgPT09IFwiVEJcIiB8fCB1ID09PSBcIkJUXCIgPyBPIDogMDtcbiAgY29uc3QgZCA9IFsuLi5yLmtleXMoKV0sIG8gPSB2Py5wYXJhbGxlbENvbW1pdHMgPz8gITEsIGYgPSAvKiBAX19QVVJFX18gKi8gbCgoJCwgZykgPT4ge1xuICAgIGNvbnN0IGkgPSByLmdldCgkKT8uc2VxLCB5ID0gci5nZXQoZyk/LnNlcTtcbiAgICByZXR1cm4gaSAhPT0gdm9pZCAwICYmIHkgIT09IHZvaWQgMCA/IGkgLSB5IDogMDtcbiAgfSwgXCJzb3J0S2V5c1wiKTtcbiAgbGV0IGggPSBkLnNvcnQoZik7XG4gIHUgPT09IFwiQlRcIiAmJiAobyAmJiBIcihoLCByLCBhKSwgaCA9IGgucmV2ZXJzZSgpKSwgaC5mb3JFYWNoKCgkKSA9PiB7XG4gICAgY29uc3QgZyA9IHIuZ2V0KCQpO1xuICAgIGlmICghZylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tbWl0IG5vdCBmb3VuZCBmb3Iga2V5ICR7JH1gKTtcbiAgICBvICYmIChhID0gWXIoZywgdSwgYSwgdykpO1xuICAgIGNvbnN0IGkgPSBLcihnLCBhLCBvKTtcbiAgICBpZiAocykge1xuICAgICAgY29uc3QgeSA9IGpyKGcpLCB4ID0gZy5jdXN0b21UeXBlID8/IGcudHlwZSwgXyA9IGIuZ2V0KGcuYnJhbmNoKT8uaW5kZXggPz8gMDtcbiAgICAgIE5yKG4sIGcsIGksIHksIF8sIHgpLCBTcihlLCBnLCBpLCBhKSwgV3IoZSwgZywgaSwgYSk7XG4gICAgfVxuICAgIHUgPT09IFwiVEJcIiB8fCB1ID09PSBcIkJUXCIgPyB3LnNldChnLmlkLCB7IHg6IGkueCwgeTogaS5wb3NXaXRoT2Zmc2V0IH0pIDogdy5zZXQoZy5pZCwgeyB4OiBpLnBvc1dpdGhPZmZzZXQsIHk6IGkueSB9KSwgYSA9IHUgPT09IFwiQlRcIiAmJiBvID8gYSArIGsgOiBhICsgayArIEwsIGEgPiBCICYmIChCID0gYSk7XG4gIH0pO1xufSwgXCJkcmF3Q29tbWl0c1wiKSwgVXIgPSAvKiBAX19QVVJFX18gKi8gbCgodCwgciwgcywgbiwgZSkgPT4ge1xuICBjb25zdCBkID0gKHUgPT09IFwiVEJcIiB8fCB1ID09PSBcIkJUXCIgPyBzLnggPCBuLnggOiBzLnkgPCBuLnkpID8gci5icmFuY2ggOiB0LmJyYW5jaCwgbyA9IC8qIEBfX1BVUkVfXyAqLyBsKChoKSA9PiBoLmJyYW5jaCA9PT0gZCwgXCJpc09uQnJhbmNoVG9HZXRDdXJ2ZVwiKSwgZiA9IC8qIEBfX1BVUkVfXyAqLyBsKChoKSA9PiBoLnNlcSA+IHQuc2VxICYmIGguc2VxIDwgci5zZXEsIFwiaXNCZXR3ZWVuQ29tbWl0c1wiKTtcbiAgcmV0dXJuIFsuLi5lLnZhbHVlcygpXS5zb21lKChoKSA9PiBmKGgpICYmIG8oaCkpO1xufSwgXCJzaG91bGRSZXJvdXRlQXJyb3dcIiksIEcgPSAvKiBAX19QVVJFX18gKi8gbCgodCwgciwgcyA9IDApID0+IHtcbiAgY29uc3QgbiA9IHQgKyBNYXRoLmFicyh0IC0gcikgLyAyO1xuICBpZiAocyA+IDUpXG4gICAgcmV0dXJuIG47XG4gIGlmIChxLmV2ZXJ5KChkKSA9PiBNYXRoLmFicyhkIC0gbikgPj0gMTApKVxuICAgIHJldHVybiBxLnB1c2gobiksIG47XG4gIGNvbnN0IGEgPSBNYXRoLmFicyh0IC0gcik7XG4gIHJldHVybiBHKHQsIHIgLSBhIC8gNSwgcyArIDEpO1xufSwgXCJmaW5kTGFuZVwiKSwgVnIgPSAvKiBAX19QVVJFX18gKi8gbCgodCwgciwgcywgbikgPT4ge1xuICBjb25zdCBlID0gdy5nZXQoci5pZCksIGEgPSB3LmdldChzLmlkKTtcbiAgaWYgKGUgPT09IHZvaWQgMCB8fCBhID09PSB2b2lkIDApXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDb21taXQgcG9zaXRpb25zIG5vdCBmb3VuZCBmb3IgY29tbWl0cyAke3IuaWR9IGFuZCAke3MuaWR9YCk7XG4gIGNvbnN0IGQgPSBVcihyLCBzLCBlLCBhLCBuKTtcbiAgbGV0IG8gPSBcIlwiLCBmID0gXCJcIiwgaCA9IDAsICQgPSAwLCBnID0gYi5nZXQocy5icmFuY2gpPy5pbmRleDtcbiAgcy50eXBlID09PSBwLk1FUkdFICYmIHIuaWQgIT09IHMucGFyZW50c1swXSAmJiAoZyA9IGIuZ2V0KHIuYnJhbmNoKT8uaW5kZXgpO1xuICBsZXQgaTtcbiAgaWYgKGQpIHtcbiAgICBvID0gXCJBIDEwIDEwLCAwLCAwLCAwLFwiLCBmID0gXCJBIDEwIDEwLCAwLCAwLCAxLFwiLCBoID0gMTAsICQgPSAxMDtcbiAgICBjb25zdCB5ID0gZS55IDwgYS55ID8gRyhlLnksIGEueSkgOiBHKGEueSwgZS55KSwgeCA9IGUueCA8IGEueCA/IEcoZS54LCBhLngpIDogRyhhLngsIGUueCk7XG4gICAgdSA9PT0gXCJUQlwiID8gZS54IDwgYS54ID8gaSA9IGBNICR7ZS54fSAke2UueX0gTCAke3ggLSBofSAke2UueX0gJHtmfSAke3h9ICR7ZS55ICsgJH0gTCAke3h9ICR7YS55IC0gaH0gJHtvfSAke3ggKyAkfSAke2EueX0gTCAke2EueH0gJHthLnl9YCA6IChnID0gYi5nZXQoci5icmFuY2gpPy5pbmRleCwgaSA9IGBNICR7ZS54fSAke2UueX0gTCAke3ggKyBofSAke2UueX0gJHtvfSAke3h9ICR7ZS55ICsgJH0gTCAke3h9ICR7YS55IC0gaH0gJHtmfSAke3ggLSAkfSAke2EueX0gTCAke2EueH0gJHthLnl9YCkgOiB1ID09PSBcIkJUXCIgPyBlLnggPCBhLnggPyBpID0gYE0gJHtlLnh9ICR7ZS55fSBMICR7eCAtIGh9ICR7ZS55fSAke299ICR7eH0gJHtlLnkgLSAkfSBMICR7eH0gJHthLnkgKyBofSAke2Z9ICR7eCArICR9ICR7YS55fSBMICR7YS54fSAke2EueX1gIDogKGcgPSBiLmdldChyLmJyYW5jaCk/LmluZGV4LCBpID0gYE0gJHtlLnh9ICR7ZS55fSBMICR7eCArIGh9ICR7ZS55fSAke2Z9ICR7eH0gJHtlLnkgLSAkfSBMICR7eH0gJHthLnkgKyBofSAke299ICR7eCAtICR9ICR7YS55fSBMICR7YS54fSAke2EueX1gKSA6IGUueSA8IGEueSA/IGkgPSBgTSAke2UueH0gJHtlLnl9IEwgJHtlLnh9ICR7eSAtIGh9ICR7b30gJHtlLnggKyAkfSAke3l9IEwgJHthLnggLSBofSAke3l9ICR7Zn0gJHthLnh9ICR7eSArICR9IEwgJHthLnh9ICR7YS55fWAgOiAoZyA9IGIuZ2V0KHIuYnJhbmNoKT8uaW5kZXgsIGkgPSBgTSAke2UueH0gJHtlLnl9IEwgJHtlLnh9ICR7eSArIGh9ICR7Zn0gJHtlLnggKyAkfSAke3l9IEwgJHthLnggLSBofSAke3l9ICR7b30gJHthLnh9ICR7eSAtICR9IEwgJHthLnh9ICR7YS55fWApO1xuICB9IGVsc2VcbiAgICBvID0gXCJBIDIwIDIwLCAwLCAwLCAwLFwiLCBmID0gXCJBIDIwIDIwLCAwLCAwLCAxLFwiLCBoID0gMjAsICQgPSAyMCwgdSA9PT0gXCJUQlwiID8gKGUueCA8IGEueCAmJiAocy50eXBlID09PSBwLk1FUkdFICYmIHIuaWQgIT09IHMucGFyZW50c1swXSA/IGkgPSBgTSAke2UueH0gJHtlLnl9IEwgJHtlLnh9ICR7YS55IC0gaH0gJHtvfSAke2UueCArICR9ICR7YS55fSBMICR7YS54fSAke2EueX1gIDogaSA9IGBNICR7ZS54fSAke2UueX0gTCAke2EueCAtIGh9ICR7ZS55fSAke2Z9ICR7YS54fSAke2UueSArICR9IEwgJHthLnh9ICR7YS55fWApLCBlLnggPiBhLnggJiYgKG8gPSBcIkEgMjAgMjAsIDAsIDAsIDAsXCIsIGYgPSBcIkEgMjAgMjAsIDAsIDAsIDEsXCIsIGggPSAyMCwgJCA9IDIwLCBzLnR5cGUgPT09IHAuTUVSR0UgJiYgci5pZCAhPT0gcy5wYXJlbnRzWzBdID8gaSA9IGBNICR7ZS54fSAke2UueX0gTCAke2UueH0gJHthLnkgLSBofSAke2Z9ICR7ZS54IC0gJH0gJHthLnl9IEwgJHthLnh9ICR7YS55fWAgOiBpID0gYE0gJHtlLnh9ICR7ZS55fSBMICR7YS54ICsgaH0gJHtlLnl9ICR7b30gJHthLnh9ICR7ZS55ICsgJH0gTCAke2EueH0gJHthLnl9YCksIGUueCA9PT0gYS54ICYmIChpID0gYE0gJHtlLnh9ICR7ZS55fSBMICR7YS54fSAke2EueX1gKSkgOiB1ID09PSBcIkJUXCIgPyAoZS54IDwgYS54ICYmIChzLnR5cGUgPT09IHAuTUVSR0UgJiYgci5pZCAhPT0gcy5wYXJlbnRzWzBdID8gaSA9IGBNICR7ZS54fSAke2UueX0gTCAke2UueH0gJHthLnkgKyBofSAke2Z9ICR7ZS54ICsgJH0gJHthLnl9IEwgJHthLnh9ICR7YS55fWAgOiBpID0gYE0gJHtlLnh9ICR7ZS55fSBMICR7YS54IC0gaH0gJHtlLnl9ICR7b30gJHthLnh9ICR7ZS55IC0gJH0gTCAke2EueH0gJHthLnl9YCksIGUueCA+IGEueCAmJiAobyA9IFwiQSAyMCAyMCwgMCwgMCwgMCxcIiwgZiA9IFwiQSAyMCAyMCwgMCwgMCwgMSxcIiwgaCA9IDIwLCAkID0gMjAsIHMudHlwZSA9PT0gcC5NRVJHRSAmJiByLmlkICE9PSBzLnBhcmVudHNbMF0gPyBpID0gYE0gJHtlLnh9ICR7ZS55fSBMICR7ZS54fSAke2EueSArIGh9ICR7b30gJHtlLnggLSAkfSAke2EueX0gTCAke2EueH0gJHthLnl9YCA6IGkgPSBgTSAke2UueH0gJHtlLnl9IEwgJHthLnggLSBofSAke2UueX0gJHtvfSAke2EueH0gJHtlLnkgLSAkfSBMICR7YS54fSAke2EueX1gKSwgZS54ID09PSBhLnggJiYgKGkgPSBgTSAke2UueH0gJHtlLnl9IEwgJHthLnh9ICR7YS55fWApKSA6IChlLnkgPCBhLnkgJiYgKHMudHlwZSA9PT0gcC5NRVJHRSAmJiByLmlkICE9PSBzLnBhcmVudHNbMF0gPyBpID0gYE0gJHtlLnh9ICR7ZS55fSBMICR7YS54IC0gaH0gJHtlLnl9ICR7Zn0gJHthLnh9ICR7ZS55ICsgJH0gTCAke2EueH0gJHthLnl9YCA6IGkgPSBgTSAke2UueH0gJHtlLnl9IEwgJHtlLnh9ICR7YS55IC0gaH0gJHtvfSAke2UueCArICR9ICR7YS55fSBMICR7YS54fSAke2EueX1gKSwgZS55ID4gYS55ICYmIChzLnR5cGUgPT09IHAuTUVSR0UgJiYgci5pZCAhPT0gcy5wYXJlbnRzWzBdID8gaSA9IGBNICR7ZS54fSAke2UueX0gTCAke2EueCAtIGh9ICR7ZS55fSAke299ICR7YS54fSAke2UueSAtICR9IEwgJHthLnh9ICR7YS55fWAgOiBpID0gYE0gJHtlLnh9ICR7ZS55fSBMICR7ZS54fSAke2EueSArIGh9ICR7Zn0gJHtlLnggKyAkfSAke2EueX0gTCAke2EueH0gJHthLnl9YCksIGUueSA9PT0gYS55ICYmIChpID0gYE0gJHtlLnh9ICR7ZS55fSBMICR7YS54fSAke2EueX1gKSk7XG4gIGlmIChpID09PSB2b2lkIDApXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTGluZSBkZWZpbml0aW9uIG5vdCBmb3VuZFwiKTtcbiAgdC5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGkpLmF0dHIoXCJjbGFzc1wiLCBcImFycm93IGFycm93XCIgKyBnICUgTSk7XG59LCBcImRyYXdBcnJvd1wiKSwgWHIgPSAvKiBAX19QVVJFX18gKi8gbCgodCwgcikgPT4ge1xuICBjb25zdCBzID0gdC5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNvbW1pdC1hcnJvd3NcIik7XG4gIFsuLi5yLmtleXMoKV0uZm9yRWFjaCgobikgPT4ge1xuICAgIGNvbnN0IGUgPSByLmdldChuKTtcbiAgICBlLnBhcmVudHMgJiYgZS5wYXJlbnRzLmxlbmd0aCA+IDAgJiYgZS5wYXJlbnRzLmZvckVhY2goKGEpID0+IHtcbiAgICAgIFZyKHMsIHIuZ2V0KGEpLCBlLCByKTtcbiAgICB9KTtcbiAgfSk7XG59LCBcImRyYXdBcnJvd3NcIiksIEpyID0gLyogQF9fUFVSRV9fICovIGwoKHQsIHIpID0+IHtcbiAgY29uc3QgcyA9IHQuYXBwZW5kKFwiZ1wiKTtcbiAgci5mb3JFYWNoKChuLCBlKSA9PiB7XG4gICAgY29uc3QgYSA9IGUgJSBNLCBkID0gYi5nZXQobi5uYW1lKT8ucG9zO1xuICAgIGlmIChkID09PSB2b2lkIDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBvc2l0aW9uIG5vdCBmb3VuZCBmb3IgYnJhbmNoICR7bi5uYW1lfWApO1xuICAgIGNvbnN0IG8gPSBzLmFwcGVuZChcImxpbmVcIik7XG4gICAgby5hdHRyKFwieDFcIiwgMCksIG8uYXR0cihcInkxXCIsIGQpLCBvLmF0dHIoXCJ4MlwiLCBCKSwgby5hdHRyKFwieTJcIiwgZCksIG8uYXR0cihcImNsYXNzXCIsIFwiYnJhbmNoIGJyYW5jaFwiICsgYSksIHUgPT09IFwiVEJcIiA/IChvLmF0dHIoXCJ5MVwiLCBPKSwgby5hdHRyKFwieDFcIiwgZCksIG8uYXR0cihcInkyXCIsIEIpLCBvLmF0dHIoXCJ4MlwiLCBkKSkgOiB1ID09PSBcIkJUXCIgJiYgKG8uYXR0cihcInkxXCIsIEIpLCBvLmF0dHIoXCJ4MVwiLCBkKSwgby5hdHRyKFwieTJcIiwgTyksIG8uYXR0cihcIngyXCIsIGQpKSwgcS5wdXNoKGQpO1xuICAgIGNvbnN0IGYgPSBuLm5hbWUsIGggPSBXKGYpLCAkID0gcy5pbnNlcnQoXCJyZWN0XCIpLCBpID0gcy5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImJyYW5jaExhYmVsXCIpLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibGFiZWwgYnJhbmNoLWxhYmVsXCIgKyBhKTtcbiAgICBpLm5vZGUoKS5hcHBlbmRDaGlsZChoKTtcbiAgICBjb25zdCB5ID0gaC5nZXRCQm94KCk7XG4gICAgJC5hdHRyKFwiY2xhc3NcIiwgXCJicmFuY2hMYWJlbEJrZyBsYWJlbFwiICsgYSkuYXR0cihcInJ4XCIsIDQpLmF0dHIoXCJyeVwiLCA0KS5hdHRyKFwieFwiLCAteS53aWR0aCAtIDQgLSAodj8ucm90YXRlQ29tbWl0TGFiZWwgPT09ICEwID8gMzAgOiAwKSkuYXR0cihcInlcIiwgLXkuaGVpZ2h0IC8gMiArIDgpLmF0dHIoXCJ3aWR0aFwiLCB5LndpZHRoICsgMTgpLmF0dHIoXCJoZWlnaHRcIiwgeS5oZWlnaHQgKyA0KSwgaS5hdHRyKFxuICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwidHJhbnNsYXRlKFwiICsgKC15LndpZHRoIC0gMTQgLSAodj8ucm90YXRlQ29tbWl0TGFiZWwgPT09ICEwID8gMzAgOiAwKSkgKyBcIiwgXCIgKyAoZCAtIHkuaGVpZ2h0IC8gMiAtIDEpICsgXCIpXCJcbiAgICApLCB1ID09PSBcIlRCXCIgPyAoJC5hdHRyKFwieFwiLCBkIC0geS53aWR0aCAvIDIgLSAxMCkuYXR0cihcInlcIiwgMCksIGkuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChkIC0geS53aWR0aCAvIDIgLSA1KSArIFwiLCAwKVwiKSkgOiB1ID09PSBcIkJUXCIgPyAoJC5hdHRyKFwieFwiLCBkIC0geS53aWR0aCAvIDIgLSAxMCkuYXR0cihcInlcIiwgQiksIGkuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChkIC0geS53aWR0aCAvIDIgLSA1KSArIFwiLCBcIiArIEIgKyBcIilcIikpIDogJC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xOSwgXCIgKyAoZCAtIHkuaGVpZ2h0IC8gMikgKyBcIilcIik7XG4gIH0pO1xufSwgXCJkcmF3QnJhbmNoZXNcIiksIFFyID0gLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24odCwgciwgcywgbiwgZSkge1xuICByZXR1cm4gYi5zZXQodCwgeyBwb3M6IHIsIGluZGV4OiBzIH0pLCByICs9IDUwICsgKGUgPyA0MCA6IDApICsgKHUgPT09IFwiVEJcIiB8fCB1ID09PSBcIkJUXCIgPyBuLndpZHRoIC8gMiA6IDApLCByO1xufSwgXCJzZXRCcmFuY2hQb3NpdGlvblwiKSwgWnIgPSAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbih0LCByLCBzLCBuKSB7XG4gIGlmIChBcigpLCBtLmRlYnVnKFwiaW4gZ2l0Z3JhcGggcmVuZGVyZXJcIiwgdCArIGBcbmAsIFwiaWQ6XCIsIHIsIHMpLCAhdilcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJHaXRHcmFwaCBjb25maWcgbm90IGZvdW5kXCIpO1xuICBjb25zdCBlID0gdi5yb3RhdGVDb21taXRMYWJlbCA/PyAhMSwgYSA9IG4uZGI7XG4gIFIgPSBhLmdldENvbW1pdHMoKTtcbiAgY29uc3QgZCA9IGEuZ2V0QnJhbmNoZXNBc09iakFycmF5KCk7XG4gIHUgPSBhLmdldERpcmVjdGlvbigpO1xuICBjb25zdCBvID0gZXIoYFtpZD1cIiR7cn1cIl1gKTtcbiAgbGV0IGYgPSAwO1xuICBkLmZvckVhY2goKGgsICQpID0+IHtcbiAgICBjb25zdCBnID0gVyhoLm5hbWUpLCBpID0gby5hcHBlbmQoXCJnXCIpLCB5ID0gaS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImJyYW5jaExhYmVsXCIpLCB4ID0geS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsIGJyYW5jaC1sYWJlbFwiKTtcbiAgICB4Lm5vZGUoKT8uYXBwZW5kQ2hpbGQoZyk7XG4gICAgY29uc3QgXyA9IGcuZ2V0QkJveCgpO1xuICAgIGYgPSBRcihoLm5hbWUsIGYsICQsIF8sIGUpLCB4LnJlbW92ZSgpLCB5LnJlbW92ZSgpLCBpLnJlbW92ZSgpO1xuICB9KSwgRChvLCBSLCAhMSksIHYuc2hvd0JyYW5jaGVzICYmIEpyKG8sIGQpLCBYcihvLCBSKSwgRChvLCBSLCAhMCksIHRyLmluc2VydFRpdGxlKFxuICAgIG8sXG4gICAgXCJnaXRUaXRsZVRleHRcIixcbiAgICB2LnRpdGxlVG9wTWFyZ2luID8/IDAsXG4gICAgYS5nZXREaWFncmFtVGl0bGUoKVxuICApLCBhcihcbiAgICB2b2lkIDAsXG4gICAgbyxcbiAgICB2LmRpYWdyYW1QYWRkaW5nLFxuICAgIHYudXNlTWF4V2lkdGhcbiAgKTtcbn0sIFwiZHJhd1wiKSwgcmUgPSB7XG4gIGRyYXc6IFpyXG59LCBlZSA9IC8qIEBfX1BVUkVfXyAqLyBsKCh0KSA9PiBgXG4gIC5jb21taXQtaWQsXG4gIC5jb21taXQtbXNnLFxuICAuYnJhbmNoLWxhYmVsIHtcbiAgICBmaWxsOiBsaWdodGdyZXk7XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBmb250LWZhbWlseTogJ3RyZWJ1Y2hldCBtcycsIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tZXJtYWlkLWZvbnQtZmFtaWx5KTtcbiAgfVxuICAke1swLCAxLCAyLCAzLCA0LCA1LCA2LCA3XS5tYXAoXG4gIChyKSA9PiBgXG4gICAgICAgIC5icmFuY2gtbGFiZWwke3J9IHsgZmlsbDogJHt0W1wiZ2l0QnJhbmNoTGFiZWxcIiArIHJdfTsgfVxuICAgICAgICAuY29tbWl0JHtyfSB7IHN0cm9rZTogJHt0W1wiZ2l0XCIgKyByXX07IGZpbGw6ICR7dFtcImdpdFwiICsgcl19OyB9XG4gICAgICAgIC5jb21taXQtaGlnaGxpZ2h0JHtyfSB7IHN0cm9rZTogJHt0W1wiZ2l0SW52XCIgKyByXX07IGZpbGw6ICR7dFtcImdpdEludlwiICsgcl19OyB9XG4gICAgICAgIC5sYWJlbCR7cn0gIHsgZmlsbDogJHt0W1wiZ2l0XCIgKyByXX07IH1cbiAgICAgICAgLmFycm93JHtyfSB7IHN0cm9rZTogJHt0W1wiZ2l0XCIgKyByXX07IH1cbiAgICAgICAgYFxuKS5qb2luKGBcbmApfVxuXG4gIC5icmFuY2gge1xuICAgIHN0cm9rZS13aWR0aDogMTtcbiAgICBzdHJva2U6ICR7dC5saW5lQ29sb3J9O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI7XG4gIH1cbiAgLmNvbW1pdC1sYWJlbCB7IGZvbnQtc2l6ZTogJHt0LmNvbW1pdExhYmVsRm9udFNpemV9OyBmaWxsOiAke3QuY29tbWl0TGFiZWxDb2xvcn07fVxuICAuY29tbWl0LWxhYmVsLWJrZyB7IGZvbnQtc2l6ZTogJHt0LmNvbW1pdExhYmVsRm9udFNpemV9OyBmaWxsOiAke3QuY29tbWl0TGFiZWxCYWNrZ3JvdW5kfTsgb3BhY2l0eTogMC41OyB9XG4gIC50YWctbGFiZWwgeyBmb250LXNpemU6ICR7dC50YWdMYWJlbEZvbnRTaXplfTsgZmlsbDogJHt0LnRhZ0xhYmVsQ29sb3J9O31cbiAgLnRhZy1sYWJlbC1ia2cgeyBmaWxsOiAke3QudGFnTGFiZWxCYWNrZ3JvdW5kfTsgc3Ryb2tlOiAke3QudGFnTGFiZWxCb3JkZXJ9OyB9XG4gIC50YWctaG9sZSB7IGZpbGw6ICR7dC50ZXh0Q29sb3J9OyB9XG5cbiAgLmNvbW1pdC1tZXJnZSB7XG4gICAgc3Ryb2tlOiAke3QucHJpbWFyeUNvbG9yfTtcbiAgICBmaWxsOiAke3QucHJpbWFyeUNvbG9yfTtcbiAgfVxuICAuY29tbWl0LXJldmVyc2Uge1xuICAgIHN0cm9rZTogJHt0LnByaW1hcnlDb2xvcn07XG4gICAgZmlsbDogJHt0LnByaW1hcnlDb2xvcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAzO1xuICB9XG4gIC5jb21taXQtaGlnaGxpZ2h0LW91dGVyIHtcbiAgfVxuICAuY29tbWl0LWhpZ2hsaWdodC1pbm5lciB7XG4gICAgc3Ryb2tlOiAke3QucHJpbWFyeUNvbG9yfTtcbiAgICBmaWxsOiAke3QucHJpbWFyeUNvbG9yfTtcbiAgfVxuXG4gIC5hcnJvdyB7IHN0cm9rZS13aWR0aDogODsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBmaWxsOiBub25lfVxuICAuZ2l0VGl0bGVUZXh0IHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmaWxsOiAke3QudGV4dENvbG9yfTtcbiAgfVxuYCwgXCJnZXRTdHlsZXNcIiksIHRlID0gZWUsIGNlID0ge1xuICBwYXJzZXI6IE9yLFxuICBkYjogUyxcbiAgcmVuZGVyZXI6IHJlLFxuICBzdHlsZXM6IHRlXG59O1xuZXhwb3J0IHtcbiAgY2UgYXMgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJjciIsImwiLCJuciIsIm9yIiwiSyIsInQiLCJpciIsImUiLCJtIiwiQyIsInNyIiwiWiIsIlEiLCJKIiwiWCIsIlYiLCJVIiwiWSIsImRyIiwicnIiLCJlciIsInRyIiwiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLElBQUksSUFBSTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUNmLEdBQUcsS0FBS0EsR0FBRyxVQUFVLElBQW9CQyxvQkFBRSxNQUFNQyxHQUFHO0FBQUEsRUFDbEQsR0FBRztBQUFBLEVBQ0gsR0FBR0MsR0FBRSxFQUFHO0FBQ1YsQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLElBQUlDLEVBQUUsTUFBTTtBQUNoQyxRQUFNQyxLQUFJLEVBQUMsR0FBSSxJQUFJQSxHQUFFLGdCQUFnQixJQUFJQSxHQUFFO0FBQzNDLFNBQU87QUFBQSxJQUNMLGdCQUFnQjtBQUFBLElBQ2hCLFNBQXlCLG9CQUFJLElBQUc7QUFBQSxJQUNoQyxNQUFNO0FBQUEsSUFDTixjQUE4QixvQkFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxHQUFHLE9BQU8sRUFBQyxDQUFFLENBQUMsQ0FBQztBQUFBLElBQ2xFLFVBQTBCLG9CQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFBQSxJQUM3QyxZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxLQUFLO0FBQUEsSUFDTCxTQUFTLENBQUE7QUFBQSxFQUNiO0FBQ0EsQ0FBQztBQUNELFNBQVMsSUFBSTtBQUNYLFNBQU9DLEdBQUcsRUFBRSxRQUFRLEdBQUc7QUFDekI7QUFDQUwsSUFBRSxHQUFHLE9BQU87QUFDWixTQUFTLEVBQUVJLElBQUcsR0FBRztBQUNmLFFBQU0sSUFBb0IsdUJBQU8sT0FBTyxJQUFJO0FBQzVDLFNBQU9BLEdBQUUsT0FBTyxDQUFDLEdBQUdFLE9BQU07QUFDeEIsVUFBTSxJQUFJLEVBQUVBLEVBQUM7QUFDYixXQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLE1BQUksRUFBRSxLQUFLQSxFQUFDLElBQUk7QUFBQSxFQUN6QyxHQUFHLENBQUEsQ0FBRTtBQUNQO0FBQ0FOLElBQUUsR0FBRyxRQUFRO0FBQ2IsSUFBSSxLQUFxQkEsb0JBQUUsU0FBU0ksSUFBRztBQUNyQyxJQUFFLFFBQVEsWUFBWUE7QUFDeEIsR0FBRyxjQUFjLEdBQUcsS0FBcUJKLG9CQUFFLFNBQVNJLElBQUc7QUFDckRHLE1BQUUsTUFBTSxlQUFlSCxFQUFDLEdBQUdBLEtBQUlBLElBQUcsS0FBSSxHQUFJQSxLQUFJQSxNQUFLO0FBQ25ELE1BQUk7QUFDRixNQUFFLFFBQVEsVUFBVSxLQUFLLE1BQU1BLEVBQUM7QUFBQSxFQUNsQyxTQUFTLEdBQUc7QUFDVkcsUUFBRSxNQUFNLHdDQUF3QyxFQUFFLE9BQU87QUFBQSxFQUMzRDtBQUNGLEdBQUcsWUFBWSxHQUFHLEtBQXFCUCxvQkFBRSxXQUFXO0FBQ2xELFNBQU8sRUFBRSxRQUFRO0FBQ25CLEdBQUcsWUFBWSxHQUFHLEtBQXFCQSxvQkFBRSxTQUFTSSxJQUFHO0FBQ25ELE1BQUksSUFBSUEsR0FBRSxLQUFLLElBQUlBLEdBQUU7QUFDckIsUUFBTSxJQUFJQSxHQUFFO0FBQ1osTUFBSUUsS0FBSUYsR0FBRTtBQUNWRyxNQUFFLEtBQUssVUFBVSxHQUFHLEdBQUcsR0FBR0QsRUFBQyxHQUFHQyxJQUFFLE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxHQUFHRCxFQUFDO0FBQ3BFLFFBQU0sSUFBSSxFQUFDO0FBQ1gsTUFBSUUsS0FBRSxhQUFhLEdBQUcsQ0FBQyxHQUFHLElBQUlBLEtBQUUsYUFBYSxHQUFHLENBQUMsR0FBR0YsS0FBSUEsSUFBRyxJQUFJLENBQUMsTUFBTUUsS0FBRSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQzFGLFFBQU0sSUFBSTtBQUFBLElBQ1IsSUFBSSxLQUFLLEVBQUUsUUFBUSxNQUFNLE1BQU0sRUFBQztBQUFBLElBQ2hDLFNBQVM7QUFBQSxJQUNULEtBQUssRUFBRSxRQUFRO0FBQUEsSUFDZixNQUFNLEtBQUssRUFBRTtBQUFBLElBQ2IsTUFBTUYsTUFBSyxDQUFBO0FBQUEsSUFDWCxTQUFTLEVBQUUsUUFBUSxRQUFRLE9BQU8sS0FBSyxDQUFDLEVBQUUsUUFBUSxLQUFLLEVBQUU7QUFBQSxJQUN6RCxRQUFRLEVBQUUsUUFBUTtBQUFBLEVBQ3RCO0FBQ0UsSUFBRSxRQUFRLE9BQU8sR0FBR0MsSUFBRSxLQUFLLGVBQWUsRUFBRSxjQUFjLEdBQUcsRUFBRSxRQUFRLFFBQVEsSUFBSSxFQUFFLEVBQUUsS0FBS0EsSUFBRSxLQUFLLGFBQWEsRUFBRSxFQUFFLGlCQUFpQixHQUFHLEVBQUUsUUFBUSxRQUFRLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsU0FBUyxJQUFJLEVBQUUsUUFBUSxZQUFZLEVBQUUsRUFBRSxHQUFHQSxJQUFFLE1BQU0sbUJBQW1CLEVBQUUsRUFBRTtBQUM3UCxHQUFHLFFBQVEsR0FBRyxLQUFxQlAsb0JBQUUsU0FBU0ksSUFBRztBQUMvQyxNQUFJLElBQUlBLEdBQUU7QUFDVixRQUFNLElBQUlBLEdBQUU7QUFDWixNQUFJLElBQUlJLEtBQUUsYUFBYSxHQUFHLEVBQUMsQ0FBRSxHQUFHLEVBQUUsUUFBUSxTQUFTLElBQUksQ0FBQztBQUN0RCxVQUFNLElBQUk7QUFBQSxNQUNSLDRIQUE0SCxDQUFDO0FBQUEsSUFDbkk7QUFDRSxJQUFFLFFBQVEsU0FBUyxJQUFJLEdBQUcsRUFBRSxRQUFRLFFBQVEsT0FBTyxFQUFFLFFBQVEsS0FBSyxLQUFLLElBQUksR0FBRyxFQUFFLFFBQVEsYUFBYSxJQUFJLEdBQUcsRUFBRSxNQUFNLEdBQUcsT0FBTyxFQUFDLENBQUUsR0FBRyxFQUFFLENBQUMsR0FBR0QsSUFBRSxNQUFNLGlCQUFpQjtBQUNySyxHQUFHLFFBQVEsR0FBRyxLQUFxQlAsb0JBQUUsQ0FBQ0ksT0FBTTtBQUMxQyxNQUFJLElBQUlBLEdBQUUsUUFBUSxJQUFJQSxHQUFFO0FBQ3hCLFFBQU0sSUFBSUEsR0FBRSxNQUFNRSxLQUFJRixHQUFFLE1BQU0sSUFBSSxFQUFDO0FBQ25DLE1BQUlJLEtBQUUsYUFBYSxHQUFHLENBQUMsR0FBRyxNQUFNLElBQUlBLEtBQUUsYUFBYSxHQUFHLENBQUM7QUFDdkQsUUFBTSxJQUFJLEVBQUUsUUFBUSxTQUFTLElBQUksRUFBRSxRQUFRLFVBQVUsR0FBRyxJQUFJLEVBQUUsUUFBUSxTQUFTLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLFFBQVEsUUFBUSxJQUFJLENBQUMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFLFFBQVEsUUFBUSxJQUFJLENBQUMsSUFBSTtBQUNySyxNQUFJLEtBQUssS0FBSyxFQUFFLFdBQVc7QUFDekIsVUFBTSxJQUFJLE1BQU0sd0JBQXdCLENBQUMsZ0JBQWdCO0FBQzNELE1BQUksRUFBRSxRQUFRLGVBQWUsR0FBRztBQUM5QixVQUFNLElBQUksSUFBSSxNQUFNLDZEQUE2RDtBQUNqRixVQUFNLEVBQUUsT0FBTztBQUFBLE1BQ2IsTUFBTSxTQUFTLENBQUM7QUFBQSxNQUNoQixPQUFPLFNBQVMsQ0FBQztBQUFBLE1BQ2pCLFVBQVUsQ0FBQyxZQUFZO0FBQUEsSUFDN0IsR0FBTztBQUFBLEVBQ0w7QUFDQSxNQUFJLE1BQU0sVUFBVSxDQUFDLEdBQUc7QUFDdEIsVUFBTSxJQUFJLElBQUk7QUFBQSxNQUNaLCtDQUErQyxFQUFFLFFBQVEsVUFBVTtBQUFBLElBQ3pFO0FBQ0ksVUFBTSxFQUFFLE9BQU87QUFBQSxNQUNiLE1BQU0sU0FBUyxDQUFDO0FBQUEsTUFDaEIsT0FBTyxTQUFTLENBQUM7QUFBQSxNQUNqQixVQUFVLENBQUMsUUFBUTtBQUFBLElBQ3pCLEdBQU87QUFBQSxFQUNMO0FBQ0EsTUFBSSxDQUFDLEVBQUUsUUFBUSxTQUFTLElBQUksQ0FBQyxHQUFHO0FBQzlCLFVBQU0sSUFBSSxJQUFJO0FBQUEsTUFDWixzREFBc0QsSUFBSTtBQUFBLElBQ2hFO0FBQ0ksVUFBTSxFQUFFLE9BQU87QUFBQSxNQUNiLE1BQU0sU0FBUyxDQUFDO0FBQUEsTUFDaEIsT0FBTyxTQUFTLENBQUM7QUFBQSxNQUNqQixVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFBQSxJQUM5QixHQUFPO0FBQUEsRUFDTDtBQUNBLE1BQUksTUFBTSxVQUFVLENBQUMsR0FBRztBQUN0QixVQUFNLElBQUksSUFBSTtBQUFBLE1BQ1osc0RBQXNELElBQUk7QUFBQSxJQUNoRTtBQUNJLFVBQU0sRUFBRSxPQUFPO0FBQUEsTUFDYixNQUFNLFNBQVMsQ0FBQztBQUFBLE1BQ2hCLE9BQU8sU0FBUyxDQUFDO0FBQUEsTUFDakIsVUFBVSxDQUFDLFVBQVU7QUFBQSxJQUMzQixHQUFPO0FBQUEsRUFDTDtBQUNBLE1BQUksTUFBTSxHQUFHO0FBQ1gsVUFBTSxJQUFJLElBQUksTUFBTSwwREFBMEQ7QUFDOUUsVUFBTSxFQUFFLE9BQU87QUFBQSxNQUNiLE1BQU0sU0FBUyxDQUFDO0FBQUEsTUFDaEIsT0FBTyxTQUFTLENBQUM7QUFBQSxNQUNqQixVQUFVLENBQUMsWUFBWTtBQUFBLElBQzdCLEdBQU87QUFBQSxFQUNMO0FBQ0EsTUFBSSxLQUFLLEVBQUUsUUFBUSxRQUFRLElBQUksQ0FBQyxHQUFHO0FBQ2pDLFVBQU0sSUFBSSxJQUFJO0FBQUEsTUFDWixnREFBZ0QsSUFBSTtBQUFBLElBQzFEO0FBQ0ksVUFBTSxFQUFFLE9BQU87QUFBQSxNQUNiLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSUYsSUFBRyxLQUFLLEdBQUcsQ0FBQztBQUFBLE1BQzFDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSUEsSUFBRyxLQUFLLEdBQUcsQ0FBQztBQUFBLE1BQzNDLFVBQVU7QUFBQSxRQUNSLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUlBLElBQUcsS0FBSyxHQUFHLENBQUM7QUFBQSxNQUNuRDtBQUFBLElBQ0EsR0FBTztBQUFBLEVBQ0w7QUFDQSxRQUFNLElBQUksS0FBSyxJQUFJLElBQUk7QUFBQSxJQUNyQixJQUFJLEtBQUssR0FBRyxFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUMsQ0FBRTtBQUFBLElBQ2hDLFNBQVMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsVUFBVTtBQUFBLElBQ3hELEtBQUssRUFBRSxRQUFRO0FBQUEsSUFDZixTQUFTLEVBQUUsUUFBUSxRQUFRLE9BQU8sQ0FBQSxJQUFLLENBQUMsRUFBRSxRQUFRLEtBQUssSUFBSSxDQUFDO0FBQUEsSUFDNUQsUUFBUSxFQUFFLFFBQVE7QUFBQSxJQUNsQixNQUFNLEVBQUU7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFVBQVUsQ0FBQyxDQUFDO0FBQUEsSUFDWixNQUFNQSxNQUFLLENBQUE7QUFBQSxFQUNmO0FBQ0UsSUFBRSxRQUFRLE9BQU8sR0FBRyxFQUFFLFFBQVEsUUFBUSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLFNBQVMsSUFBSSxFQUFFLFFBQVEsWUFBWSxFQUFFLEVBQUUsR0FBR0MsSUFBRSxNQUFNLEVBQUUsUUFBUSxRQUFRLEdBQUdBLElBQUUsTUFBTSxnQkFBZ0I7QUFDL0osR0FBRyxPQUFPLEdBQUcsS0FBcUJQLG9CQUFFLFNBQVNJLElBQUc7QUFDOUMsTUFBSSxJQUFJQSxHQUFFLElBQUksSUFBSUEsR0FBRSxVQUFVLElBQUlBLEdBQUUsTUFBTUUsS0FBSUYsR0FBRTtBQUNoREcsTUFBRSxNQUFNLHdCQUF3QixHQUFHLEdBQUcsQ0FBQztBQUN2QyxRQUFNLElBQUksRUFBQztBQUNYLE1BQUksSUFBSUMsS0FBRSxhQUFhLEdBQUcsQ0FBQyxHQUFHLElBQUlBLEtBQUUsYUFBYSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU1BLEtBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHRixLQUFJRSxLQUFFLGFBQWFGLElBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxRQUFRLElBQUksQ0FBQyxHQUFHO0FBQzFKLFVBQU0sSUFBSSxJQUFJO0FBQUEsTUFDWjtBQUFBLElBQ047QUFDSSxVQUFNLEVBQUUsT0FBTztBQUFBLE1BQ2IsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDO0FBQUEsTUFDMUIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDO0FBQUEsTUFDM0IsVUFBVSxDQUFDLGlCQUFpQjtBQUFBLElBQ2xDLEdBQU87QUFBQSxFQUNMO0FBQ0EsUUFBTSxJQUFJLEVBQUUsUUFBUSxRQUFRLElBQUksQ0FBQztBQUNqQyxNQUFJLE1BQU0sVUFBVSxDQUFDO0FBQ25CLFVBQU0sSUFBSSxNQUFNLDZFQUE2RTtBQUMvRixNQUFJQSxNQUFLLEVBQUUsTUFBTSxRQUFRLEVBQUUsT0FBTyxLQUFLLEVBQUUsUUFBUSxTQUFTQSxFQUFDO0FBQ3pELFVBQU0sSUFBSTtBQUFBLE1BQ1I7QUFBQSxJQUNOO0FBQ0UsUUFBTSxJQUFJLEVBQUU7QUFDWixNQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQ0E7QUFDekIsVUFBTSxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ047QUFDRSxNQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxRQUFRLElBQUksQ0FBQyxHQUFHO0FBQ25DLFFBQUksTUFBTSxFQUFFLFFBQVEsWUFBWTtBQUM5QixZQUFNLElBQUksSUFBSTtBQUFBLFFBQ1o7QUFBQSxNQUNSO0FBQ00sWUFBTSxFQUFFLE9BQU87QUFBQSxRQUNiLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQztBQUFBLFFBQzFCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztBQUFBLFFBQzNCLFVBQVUsQ0FBQyxpQkFBaUI7QUFBQSxNQUNwQyxHQUFTO0FBQUEsSUFDTDtBQUNBLFVBQU0sSUFBSSxFQUFFLFFBQVEsU0FBUyxJQUFJLEVBQUUsUUFBUSxVQUFVO0FBQ3JELFFBQUksTUFBTSxVQUFVLENBQUMsR0FBRztBQUN0QixZQUFNLElBQUksSUFBSTtBQUFBLFFBQ1oscURBQXFELEVBQUUsUUFBUSxVQUFVO0FBQUEsTUFDakY7QUFDTSxZQUFNLEVBQUUsT0FBTztBQUFBLFFBQ2IsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDO0FBQUEsUUFDMUIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDO0FBQUEsUUFDM0IsVUFBVSxDQUFDLGlCQUFpQjtBQUFBLE1BQ3BDLEdBQVM7QUFBQSxJQUNMO0FBQ0EsVUFBTSxJQUFJLEVBQUUsUUFBUSxRQUFRLElBQUksQ0FBQztBQUNqQyxRQUFJLE1BQU0sVUFBVSxDQUFDLEdBQUc7QUFDdEIsWUFBTSxJQUFJLElBQUk7QUFBQSxRQUNaLHFEQUFxRCxFQUFFLFFBQVEsVUFBVTtBQUFBLE1BQ2pGO0FBQ00sWUFBTSxFQUFFLE9BQU87QUFBQSxRQUNiLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQztBQUFBLFFBQzFCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztBQUFBLFFBQzNCLFVBQVUsQ0FBQyxpQkFBaUI7QUFBQSxNQUNwQyxHQUFTO0FBQUEsSUFDTDtBQUNBLFVBQU0sSUFBSTtBQUFBLE1BQ1IsSUFBSSxFQUFFLFFBQVEsTUFBTSxNQUFNLEVBQUM7QUFBQSxNQUMzQixTQUFTLGlCQUFpQixHQUFHLE9BQU8sU0FBUyxFQUFFLFFBQVEsVUFBVTtBQUFBLE1BQ2pFLEtBQUssRUFBRSxRQUFRO0FBQUEsTUFDZixTQUFTLEVBQUUsUUFBUSxRQUFRLE9BQU8sQ0FBQSxJQUFLLENBQUMsRUFBRSxRQUFRLEtBQUssSUFBSSxFQUFFLEVBQUU7QUFBQSxNQUMvRCxRQUFRLEVBQUUsUUFBUTtBQUFBLE1BQ2xCLE1BQU0sRUFBRTtBQUFBLE1BQ1IsTUFBTSxJQUFJLEVBQUUsT0FBTyxPQUFPLElBQUk7QUFBQSxRQUM1QixlQUFlLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsV0FBV0EsRUFBQyxLQUFLLEVBQUU7QUFBQSxNQUN0RTtBQUFBLElBQ0E7QUFDSSxNQUFFLFFBQVEsT0FBTyxHQUFHLEVBQUUsUUFBUSxRQUFRLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsU0FBUyxJQUFJLEVBQUUsUUFBUSxZQUFZLEVBQUUsRUFBRSxHQUFHQyxJQUFFLE1BQU0sRUFBRSxRQUFRLFFBQVEsR0FBR0EsSUFBRSxNQUFNLGVBQWU7QUFBQSxFQUM5SjtBQUNGLEdBQUcsWUFBWSxHQUFHLElBQW9CUCxvQkFBRSxTQUFTSSxJQUFHO0FBQ2xELE1BQUlBLEtBQUlJLEtBQUUsYUFBYUosSUFBRyxFQUFDLENBQUUsR0FBRyxFQUFFLFFBQVEsU0FBUyxJQUFJQSxFQUFDLEdBQUc7QUFDekQsTUFBRSxRQUFRLGFBQWFBO0FBQ3ZCLFVBQU0sSUFBSSxFQUFFLFFBQVEsU0FBUyxJQUFJLEVBQUUsUUFBUSxVQUFVO0FBQ3JELFVBQU0sVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLE9BQU8sT0FBTyxFQUFFLFFBQVEsT0FBTyxFQUFFLFFBQVEsUUFBUSxJQUFJLENBQUMsS0FBSztBQUFBLEVBQzVGLE9BQU87QUFDTCxVQUFNLElBQUksSUFBSTtBQUFBLE1BQ1osK0VBQStFQSxFQUFDO0FBQUEsSUFDdEY7QUFDSSxVQUFNLEVBQUUsT0FBTztBQUFBLE1BQ2IsTUFBTSxZQUFZQSxFQUFDO0FBQUEsTUFDbkIsT0FBTyxZQUFZQSxFQUFDO0FBQUEsTUFDcEIsVUFBVSxDQUFDLFVBQVVBLEVBQUMsRUFBRTtBQUFBLElBQzlCLEdBQU87QUFBQSxFQUNMO0FBQ0YsR0FBRyxVQUFVO0FBQ2IsU0FBUyxFQUFFQSxJQUFHLEdBQUcsR0FBRztBQUNsQixRQUFNLElBQUlBLEdBQUUsUUFBUSxDQUFDO0FBQ3JCLFFBQU0sS0FBS0EsR0FBRSxLQUFLLENBQUMsSUFBSUEsR0FBRSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQ3pDO0FBQ0FKLElBQUUsR0FBRyxRQUFRO0FBQ2IsU0FBUyxFQUFFSSxJQUFHO0FBQ1osUUFBTSxJQUFJQSxHQUFFLE9BQU8sQ0FBQ0UsSUFBRyxNQUFNQSxHQUFFLE1BQU0sRUFBRSxNQUFNQSxLQUFJLEdBQUdGLEdBQUUsQ0FBQyxDQUFDO0FBQ3hELE1BQUksSUFBSTtBQUNSLEVBQUFBLEdBQUUsUUFBUSxTQUFTRSxJQUFHO0FBQ3BCLElBQUFBLE9BQU0sSUFBSSxLQUFLLE9BQU8sS0FBSztBQUFBLEVBQzdCLENBQUM7QUFDRCxRQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUc7QUFDekIsYUFBV0EsTUFBSyxFQUFFLFFBQVE7QUFDeEIsTUFBRSxRQUFRLFNBQVMsSUFBSUEsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUtBLEVBQUM7QUFDaEQsTUFBSUMsSUFBRSxNQUFNLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxRQUFRLFVBQVUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUc7QUFDNUYsVUFBTUQsS0FBSSxFQUFFLFFBQVEsUUFBUSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDNUMsTUFBRUYsSUFBRyxHQUFHRSxFQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBS0YsR0FBRSxLQUFLLEVBQUUsUUFBUSxRQUFRLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDeEUsT0FBTztBQUNMLFFBQUksRUFBRSxRQUFRLFVBQVU7QUFDdEI7QUFDRixRQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUc7QUFDaEIsWUFBTUUsS0FBSSxFQUFFLFFBQVEsUUFBUSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDNUMsUUFBRUYsSUFBRyxHQUFHRSxFQUFDO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFDQSxFQUFBRixLQUFJLEVBQUVBLElBQUcsQ0FBQ0UsT0FBTUEsR0FBRSxFQUFFLEdBQUcsRUFBRUYsRUFBQztBQUM1QjtBQUNBSixJQUFFLEdBQUcsMEJBQTBCO0FBQzVCLElBQUMsS0FBcUJBLG9CQUFFLFdBQVc7QUFDcENPLE1BQUUsTUFBTSxFQUFFLFFBQVEsT0FBTztBQUN6QixRQUFNSCxLQUFJLEVBQUMsRUFBRyxDQUFDO0FBQ2YsSUFBRSxDQUFDQSxFQUFDLENBQUM7QUFDUCxHQUFHLGFBQWEsR0FBRyxLQUFxQkosb0JBQUUsV0FBVztBQUNuRCxJQUFFLE1BQUssR0FBSVMsR0FBRTtBQUNmLEdBQUcsT0FBTyxHQUFHLEtBQXFCVCxvQkFBRSxXQUFXO0FBQzdDLFNBQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxhQUFhLE9BQU0sQ0FBRSxFQUFFLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxVQUFVLFFBQVEsRUFBRSxVQUFVLFNBQVMsSUFBSTtBQUFBLElBQ3JHLEdBQUc7QUFBQSxJQUNILE9BQU8sV0FBVyxLQUFLLENBQUMsRUFBRTtBQUFBLEVBQzlCLENBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxPQUFPLEVBQUUsU0FBUyxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFDLE9BQVEsRUFBRSxNQUFNLEVBQUMsRUFBRztBQUN2RixHQUFHLHVCQUF1QixHQUFHLEtBQXFCQSxvQkFBRSxXQUFXO0FBQzdELFNBQU8sRUFBRSxRQUFRO0FBQ25CLEdBQUcsYUFBYSxHQUFHLEtBQXFCQSxvQkFBRSxXQUFXO0FBQ25ELFNBQU8sRUFBRSxRQUFRO0FBQ25CLEdBQUcsWUFBWSxHQUFHLElBQW9CQSxvQkFBRSxXQUFXO0FBQ2pELFFBQU1JLEtBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxRQUFRLFFBQVE7QUFDeEMsU0FBT0EsR0FBRSxRQUFRLFNBQVMsR0FBRztBQUMzQkcsUUFBRSxNQUFNLEVBQUUsRUFBRTtBQUFBLEVBQ2QsQ0FBQyxHQUFHSCxHQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHQTtBQUN2QyxHQUFHLGlCQUFpQixHQUFHLEtBQXFCSixvQkFBRSxXQUFXO0FBQ3ZELFNBQU8sRUFBRSxRQUFRO0FBQ25CLEdBQUcsa0JBQWtCLEdBQUcsS0FBcUJBLG9CQUFFLFdBQVc7QUFDeEQsU0FBTyxFQUFFLFFBQVE7QUFDbkIsR0FBRyxjQUFjLEdBQUcsS0FBcUJBLG9CQUFFLFdBQVc7QUFDcEQsU0FBTyxFQUFFLFFBQVE7QUFDbkIsR0FBRyxTQUFTLEdBQUcsSUFBSTtBQUFBLEVBQ2pCLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQTtBQUFBLEVBRVYsYUFBYTtBQUFBLEVBQ2IsT0FBTztBQUFBLEVBQ1AsdUJBQXVCO0FBQUEsRUFDdkIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsa0JBQWtCO0FBQUEsRUFDbEIsY0FBYztBQUFBLEVBQ2QsU0FBUztBQUFBLEVBQ1QsYUFBYVU7QUFBQUEsRUFDYixhQUFhQztBQUFBQSxFQUNiLG1CQUFtQkM7QUFBQUEsRUFDbkIsbUJBQW1CQztBQUFBQSxFQUNuQixpQkFBaUJDO0FBQUFBLEVBQ2pCLGlCQUFpQkM7QUFDbkIsR0FBRyxLQUFxQmYsb0JBQUUsQ0FBQ0ksS0FBRyxNQUFNO0FBQ2xDWSxJQUFFWixLQUFHLENBQUMsR0FBR0EsSUFBRSxPQUFPLEVBQUUsYUFBYUEsSUFBRSxHQUFHO0FBQ3RDLGFBQVcsS0FBS0EsSUFBRTtBQUNoQixPQUFHLEdBQUcsQ0FBQztBQUNYLEdBQUcsVUFBVSxHQUFHLEtBQXFCSixvQkFBRSxDQUFDSSxJQUFHLE1BQU07QUFDL0MsUUFBTSxJQUFJO0FBQUEsSUFDUixRQUF3Qkosb0JBQUUsQ0FBQ00sT0FBTSxFQUFFLE9BQU8sR0FBR0EsRUFBQyxDQUFDLEdBQUcsUUFBUTtBQUFBLElBQzFELFFBQXdCTixvQkFBRSxDQUFDTSxPQUFNLEVBQUUsT0FBTyxHQUFHQSxFQUFDLENBQUMsR0FBRyxRQUFRO0FBQUEsSUFDMUQsT0FBdUJOLG9CQUFFLENBQUNNLE9BQU0sRUFBRSxNQUFNLEdBQUdBLEVBQUMsQ0FBQyxHQUFHLE9BQU87QUFBQSxJQUN2RCxVQUEwQk4sb0JBQUUsQ0FBQ00sT0FBTSxFQUFFLFNBQVMsR0FBR0EsRUFBQyxDQUFDLEdBQUcsVUFBVTtBQUFBLElBQ2hFLGVBQStCTixvQkFBRSxDQUFDTSxPQUFNLEVBQUUsV0FBVyxHQUFHQSxFQUFDLENBQUMsR0FBRyxlQUFlO0FBQUEsRUFDaEYsRUFBSUYsR0FBRSxLQUFLO0FBQ1QsTUFBSSxFQUFFQSxFQUFDLElBQUlHLElBQUUsTUFBTSwyQkFBMkJILEdBQUUsS0FBSyxFQUFFO0FBQ3pELEdBQUcsZ0JBQWdCLEdBQUcsS0FBcUJKLG9CQUFFLENBQUNJLFFBQU87QUFBQSxFQUNuRCxJQUFJQSxHQUFFO0FBQUEsRUFDTixLQUFLQSxHQUFFLFdBQVc7QUFBQSxFQUNsQixNQUFNQSxHQUFFLFNBQVMsU0FBUyxFQUFFQSxHQUFFLElBQUksSUFBSSxFQUFFO0FBQUEsRUFDeEMsTUFBTUEsR0FBRSxRQUFRO0FBQ2xCLElBQUksYUFBYSxHQUFHLEtBQXFCSixvQkFBRSxDQUFDSSxRQUFPO0FBQUEsRUFDakQsTUFBTUEsR0FBRTtBQUFBLEVBQ1IsT0FBT0EsR0FBRSxTQUFTO0FBQ3BCLElBQUksYUFBYSxHQUFHLEtBQXFCSixvQkFBRSxDQUFDSSxRQUFPO0FBQUEsRUFDakQsUUFBUUEsR0FBRTtBQUFBLEVBQ1YsSUFBSUEsR0FBRSxNQUFNO0FBQUEsRUFDWixNQUFNQSxHQUFFLFNBQVMsU0FBUyxFQUFFQSxHQUFFLElBQUksSUFBSTtBQUFBLEVBQ3RDLE1BQU1BLEdBQUUsUUFBUTtBQUNsQixJQUFJLFlBQVksR0FBRyxLQUFxQkosb0JBQUUsQ0FBQ0ksT0FBTUEsR0FBRSxRQUFRLGVBQWUsR0FBRyxLQUFxQkosb0JBQUUsQ0FBQ0ksUUFBTztBQUFBLEVBQzFHLElBQUlBLEdBQUU7QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLE1BQU1BLEdBQUUsTUFBTSxXQUFXLElBQUksU0FBU0EsR0FBRTtBQUFBLEVBQ3hDLFFBQVFBLEdBQUU7QUFDWixJQUFJLG9CQUFvQixHQUFHLEtBQUs7QUFBQSxFQUM5QixPQUF1Qkosb0JBQUUsT0FBT0ksT0FBTTtBQUNwQyxVQUFNLElBQUksTUFBTWEsR0FBRyxZQUFZYixFQUFDO0FBQ2hDRyxRQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDckIsR0FBRyxPQUFPO0FBQ1osR0FBRyxLQUFLVyxHQUFFLEdBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFvQixvQkFBSSxPQUFPLElBQW9CLG9CQUFJLElBQUcsR0FBSSxJQUFJLElBQUksSUFBb0Isb0JBQUksSUFBRyxHQUFJLElBQUksQ0FBQSxHQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sS0FBcUJsQixvQkFBRSxNQUFNO0FBQzlOLElBQUUsTUFBSyxHQUFJLEVBQUUsTUFBSyxHQUFJLEVBQUUsTUFBSyxHQUFJLElBQUksR0FBRyxJQUFJLENBQUEsR0FBSSxJQUFJO0FBQ3RELEdBQUcsT0FBTyxHQUFHLElBQW9CQSxvQkFBRSxDQUFDSSxPQUFNO0FBQ3hDLFFBQU0sSUFBSSxTQUFTLGdCQUFnQiw4QkFBOEIsTUFBTTtBQUN2RSxVQUFRLE9BQU9BLE1BQUssV0FBV0EsR0FBRSxNQUFNLHFCQUFxQixJQUFJQSxJQUFHLFFBQVEsQ0FBQyxNQUFNO0FBQ2hGLFVBQU1FLEtBQUksU0FBUyxnQkFBZ0IsOEJBQThCLE9BQU87QUFDeEUsSUFBQUEsR0FBRSxlQUFlLHdDQUF3QyxhQUFhLFVBQVUsR0FBR0EsR0FBRSxhQUFhLE1BQU0sS0FBSyxHQUFHQSxHQUFFLGFBQWEsS0FBSyxHQUFHLEdBQUdBLEdBQUUsYUFBYSxTQUFTLEtBQUssR0FBR0EsR0FBRSxjQUFjLEVBQUUsS0FBSSxHQUFJLEVBQUUsWUFBWUEsRUFBQztBQUFBLEVBQ3JOLENBQUMsR0FBRztBQUNOLEdBQUcsVUFBVSxHQUFHLElBQW9CTixvQkFBRSxDQUFDSSxPQUFNO0FBQzNDLE1BQUksR0FBRyxHQUFHO0FBQ1YsU0FBTyxNQUFNLFFBQVEsSUFBb0JKLG9CQUFFLENBQUNNLElBQUcsTUFBTUEsTUFBSyxHQUFHLGdCQUFnQixHQUFHLElBQUksSUFBSSxNQUFNLElBQW9CTixvQkFBRSxDQUFDTSxJQUFHLE1BQU1BLE1BQUssR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLElBQUlGLEdBQUUsUUFBUSxDQUFDRSxPQUFNO0FBQ2hMLFVBQU0sSUFBSSxNQUFNLFFBQVEsS0FBSyxPQUFPLEVBQUUsSUFBSUEsRUFBQyxHQUFHLElBQUksRUFBRSxJQUFJQSxFQUFDLEdBQUc7QUFDNUQsVUFBTSxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sSUFBSUEsSUFBRyxJQUFJO0FBQUEsRUFDekMsQ0FBQyxHQUFHO0FBQ04sR0FBRyxtQkFBbUIsR0FBRyxLQUFxQk4sb0JBQUUsQ0FBQ0ksT0FBTTtBQUNyRCxNQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDcEIsU0FBT0EsR0FBRSxRQUFRLENBQUMsTUFBTTtBQUN0QixVQUFNRSxLQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDbkIsSUFBQUEsTUFBSyxNQUFNLElBQUksR0FBRyxJQUFJQTtBQUFBLEVBQ3hCLENBQUMsR0FBRyxLQUFLO0FBQ1gsR0FBRyxxQkFBcUIsR0FBRyxLQUFxQk4sb0JBQUUsQ0FBQ0ksSUFBRyxHQUFHLE1BQU07QUFDN0QsTUFBSSxJQUFJLEdBQUdFLEtBQUk7QUFDZixRQUFNLElBQUksQ0FBQTtBQUNWLEVBQUFGLEdBQUUsUUFBUSxDQUFDLE1BQU07QUFDZixVQUFNLElBQUksRUFBRSxJQUFJLENBQUM7QUFDakIsUUFBSSxDQUFDO0FBQ0gsWUFBTSxJQUFJLE1BQU0sNEJBQTRCLENBQUMsRUFBRTtBQUNqRCxNQUFFLFFBQVEsVUFBVSxJQUFJLEdBQUcsQ0FBQyxHQUFHRSxLQUFJLEtBQUssSUFBSSxHQUFHQSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQ3pFLENBQUMsR0FBRyxJQUFJQSxJQUFHLEVBQUUsUUFBUSxDQUFDLE1BQU07QUFDMUIsT0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQ1osQ0FBQyxHQUFHRixHQUFFLFFBQVEsQ0FBQyxNQUFNO0FBQ25CLFVBQU0sSUFBSSxFQUFFLElBQUksQ0FBQztBQUNqQixRQUFJLEdBQUcsUUFBUSxRQUFRO0FBQ3JCLFlBQU0sSUFBSSxHQUFHLEVBQUUsT0FBTztBQUN0QixVQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUtFLE9BQU1BLEtBQUk7QUFDbkMsWUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQUksSUFBSTtBQUN2QyxRQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUFBLElBQzVCO0FBQUEsRUFDRixDQUFDO0FBQ0gsR0FBRyxrQkFBa0IsR0FBRyxLQUFxQk4sb0JBQUUsQ0FBQ0ksT0FBTTtBQUNwRCxRQUFNLElBQUksRUFBRUEsR0FBRSxRQUFRLE9BQU8sQ0FBQyxNQUFNLE1BQU0sSUFBSSxDQUFDO0FBQy9DLE1BQUksQ0FBQztBQUNILFVBQU0sSUFBSSxNQUFNLHVDQUF1Q0EsR0FBRSxFQUFFLEVBQUU7QUFDL0QsUUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUc7QUFDcEIsTUFBSSxNQUFNO0FBQ1IsVUFBTSxJQUFJLE1BQU0sZ0RBQWdEQSxHQUFFLEVBQUUsRUFBRTtBQUN4RSxTQUFPO0FBQ1QsR0FBRyxzQkFBc0IsR0FBRyxLQUFxQkosb0JBQUUsQ0FBQ0ksT0FBTSxHQUFHQSxFQUFDLElBQUksR0FBRyx5QkFBeUIsR0FBRyxLQUFxQkosb0JBQUUsQ0FBQ0ksSUFBRyxNQUFNO0FBQ2hJLFFBQU0sSUFBSSxFQUFFLElBQUlBLEdBQUUsTUFBTTtBQUN4QixNQUFJLENBQUM7QUFDSCxVQUFNLElBQUksTUFBTSwrQkFBK0JBLEdBQUUsRUFBRSxFQUFFO0FBQ3ZELFFBQU0sSUFBSSxFQUFFLEtBQUtFLEtBQUksSUFBSTtBQUN6QixTQUFPLEVBQUUsSUFBSUYsR0FBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUdFLEdBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUdBLEdBQUM7QUFDbEQsR0FBRyxtQkFBbUIsR0FBRyxLQUFxQk4sb0JBQUUsQ0FBQ0ksSUFBRyxHQUFHLE1BQU07QUFDM0QsUUFBTSxJQUFJLEVBQUUsSUFBSUEsR0FBRSxNQUFNO0FBQ3hCLE1BQUksQ0FBQztBQUNILFVBQU0sSUFBSSxNQUFNLCtCQUErQkEsR0FBRSxFQUFFLEVBQUU7QUFDdkQsUUFBTUUsS0FBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQ3ZCLElBQUUsSUFBSUYsR0FBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUdFLElBQUc7QUFDNUIsR0FBRyxpQkFBaUIsR0FBRyxLQUFxQk4sb0JBQUUsQ0FBQ0ksSUFBRyxHQUFHLEdBQUcsR0FBR0UsSUFBRyxNQUFNO0FBQ2xFLE1BQUksTUFBTSxFQUFFO0FBQ1YsSUFBQUYsR0FBRSxPQUFPLE1BQU0sRUFBRSxLQUFLLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFLEtBQUssVUFBVSxFQUFFLEVBQUU7QUFBQSxNQUM1RjtBQUFBLE1BQ0EsVUFBVSxFQUFFLEVBQUUsb0JBQW9CRSxLQUFJLENBQUMsSUFBSSxDQUFDO0FBQUEsSUFDbEQsR0FBT0YsR0FBRSxPQUFPLE1BQU0sRUFBRSxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFLEtBQUssVUFBVSxFQUFFLEVBQUU7QUFBQSxNQUM3RjtBQUFBLE1BQ0EsVUFBVSxFQUFFLEVBQUUsVUFBVUUsS0FBSSxDQUFDLElBQUksQ0FBQztBQUFBLElBQ3hDO0FBQUEsV0FDVyxNQUFNLEVBQUU7QUFDZixJQUFBRixHQUFFLE9BQU8sUUFBUSxFQUFFLEtBQUssTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLFNBQVMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBR0EsR0FBRSxPQUFPLFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssSUFBSSxFQUFFLEtBQUssUUFBUSxNQUFNLEVBQUUsS0FBSyxTQUFTLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUdBLEdBQUUsT0FBTyxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLElBQUksRUFBRSxLQUFLLFFBQVEsTUFBTSxFQUFFLEtBQUssU0FBUyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHQSxHQUFFLE9BQU8sTUFBTSxFQUFFLEtBQUssTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLFVBQVUsTUFBTSxFQUFFLEtBQUssU0FBUyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHQSxHQUFFLE9BQU8sTUFBTSxFQUFFLEtBQUssTUFBTSxFQUFFLElBQUks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LElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FBRztBQUN2RCxJQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUFHO0FBQ3JFLE1BQUk7QUFDSixNQUFJLEdBQUc7QUFDTCxRQUFJLHFCQUFxQixJQUFJLHFCQUFxQixJQUFJLElBQUksSUFBSTtBQUM5RCxVQUFNLElBQUlBLEdBQUUsSUFBSSxFQUFFLElBQUksRUFBRUEsR0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHQSxHQUFFLENBQUMsR0FBRyxJQUFJQSxHQUFFLElBQUksRUFBRSxJQUFJLEVBQUVBLEdBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBR0EsR0FBRSxDQUFDO0FBQ3pGLFVBQU0sT0FBT0EsR0FBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSUEsR0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSUEsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsT0FBTyxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSUEsR0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSUEsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sTUFBTSxPQUFPQSxHQUFFLElBQUksRUFBRSxJQUFJLElBQUksS0FBS0EsR0FBRSxDQUFDLElBQUlBLEdBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJQSxHQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJQSxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FBRyxPQUFPLElBQUksS0FBS0EsR0FBRSxDQUFDLElBQUlBLEdBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJQSxHQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJQSxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTUEsR0FBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsTUFBTUEsR0FBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJQSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsT0FBTyxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsTUFBTUEsR0FBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJQSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQUEsRUFDeDFCO0FBQ0UsUUFBSSxxQkFBcUIsSUFBSSxxQkFBcUIsSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNLFFBQVFBLEdBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsTUFBTUEsR0FBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUlBLEdBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLQSxHQUFFLENBQUMsSUFBSUEsR0FBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSUEsR0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJQSxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLQSxHQUFFLElBQUksRUFBRSxNQUFNLElBQUkscUJBQXFCLElBQUkscUJBQXFCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsTUFBTUEsR0FBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUlBLEdBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLQSxHQUFFLENBQUMsSUFBSUEsR0FBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSUEsR0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJQSxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLQSxHQUFFLE1BQU0sRUFBRSxNQUFNLElBQUksS0FBS0EsR0FBRSxDQUFDLElBQUlBLEdBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLE1BQU0sUUFBUUEsR0FBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksS0FBS0EsR0FBRSxDQUFDLElBQUlBLEdBQUUsQ0FBQyxNQUFNQSxHQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSUEsR0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJQSxHQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUlBLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUtBLEdBQUUsSUFBSSxFQUFFLE1BQU0sSUFBSSxxQkFBcUIsSUFBSSxxQkFBcUIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksS0FBS0EsR0FBRSxDQUFDLElBQUlBLEdBQUUsQ0FBQyxNQUFNQSxHQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSUEsR0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJQSxHQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUlBLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUtBLEdBQUUsTUFBTSxFQUFFLE1BQU0sSUFBSSxLQUFLQSxHQUFFLENBQUMsSUFBSUEsR0FBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVFBLEdBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJQSxHQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUlBLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLQSxHQUFFLENBQUMsSUFBSUEsR0FBRSxDQUFDLE1BQU1BLEdBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJQSxHQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLQSxHQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksSUFBSSxLQUFLQSxHQUFFLENBQUMsSUFBSUEsR0FBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSUEsR0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJQSxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBS0EsR0FBRSxDQUFDLElBQUlBLEdBQUUsQ0FBQyxNQUFNQSxHQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSUEsR0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBS0EsR0FBRSxNQUFNLEVBQUUsTUFB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
