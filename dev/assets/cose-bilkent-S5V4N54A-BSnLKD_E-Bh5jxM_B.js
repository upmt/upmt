import { p, F, h as ht, c as c0 } from "./SynchronicGraphPage-Dz4ROPO2.js";
import { e as ea } from "./cytoscape.esm-Cvf3sx9F-fzSRjbzr.js";
import "./QPage-CznTSEEa.js";
import "./index-CVgljMGX.js";
import "./QBtnToggle-DJTClXX6.js";
import "./QBtnGroup-C_C30M17.js";
import "./QToolbar-DecpH4d5.js";
import "./export-file-lpTZqdHO.js";
var k = { exports: {} }, Z = { exports: {} }, Q = { exports: {} }, ut = Q.exports, j;
function ft() {
  return j || (j = 1, (function(G, b) {
    (function(I, L) {
      G.exports = L();
    })(ut, function() {
      return (
        /******/
        (function(N) {
          var I = {};
          function L(o) {
            if (I[o])
              return I[o].exports;
            var e = I[o] = {
              /******/
              i: o,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return N[o].call(e.exports, e, e.exports, L), e.l = true, e.exports;
          }
          return L.m = N, L.c = I, L.i = function(o) {
            return o;
          }, L.d = function(o, e, t) {
            L.o(o, e) || Object.defineProperty(o, e, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: t
              /******/
            });
          }, L.n = function(o) {
            var e = o && o.__esModule ? (
              /******/
              (function() {
                return o.default;
              })
            ) : (
              /******/
              (function() {
                return o;
              })
            );
            return L.d(e, "a", e), e;
          }, L.o = function(o, e) {
            return Object.prototype.hasOwnProperty.call(o, e);
          }, L.p = "", L(L.s = 26);
        })([
          /* 0 */
          /***/
          (function(N, I, L) {
            function o() {
            }
            o.QUALITY = 1, o.DEFAULT_CREATE_BENDS_AS_NEEDED = false, o.DEFAULT_INCREMENTAL = false, o.DEFAULT_ANIMATION_ON_LAYOUT = true, o.DEFAULT_ANIMATION_DURING_LAYOUT = false, o.DEFAULT_ANIMATION_PERIOD = 50, o.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, o.DEFAULT_GRAPH_MARGIN = 15, o.NODE_DIMENSIONS_INCLUDE_LABELS = false, o.SIMPLE_NODE_SIZE = 40, o.SIMPLE_NODE_HALF_SIZE = o.SIMPLE_NODE_SIZE / 2, o.EMPTY_COMPOUND_NODE_SIZE = 40, o.MIN_EDGE_LENGTH = 1, o.WORLD_BOUNDARY = 1e6, o.INITIAL_WORLD_BOUNDARY = o.WORLD_BOUNDARY / 1e3, o.WORLD_CENTER_X = 1200, o.WORLD_CENTER_Y = 900, N.exports = o;
          }),
          /* 1 */
          /***/
          (function(N, I, L) {
            var o = L(2), e = L(8), t = L(9);
            function i(g, n, d) {
              o.call(this, d), this.isOverlapingSourceAndTarget = false, this.vGraphObject = d, this.bendpoints = [], this.source = g, this.target = n;
            }
            i.prototype = Object.create(o.prototype);
            for (var l in o)
              i[l] = o[l];
            i.prototype.getSource = function() {
              return this.source;
            }, i.prototype.getTarget = function() {
              return this.target;
            }, i.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, i.prototype.getLength = function() {
              return this.length;
            }, i.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, i.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, i.prototype.getLca = function() {
              return this.lca;
            }, i.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, i.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, i.prototype.getOtherEnd = function(g) {
              if (this.source === g)
                return this.target;
              if (this.target === g)
                return this.source;
              throw "Node is not incident with this edge";
            }, i.prototype.getOtherEndInGraph = function(g, n) {
              for (var d = this.getOtherEnd(g), r = n.getGraphManager().getRoot(); ; ) {
                if (d.getOwner() == n)
                  return d;
                if (d.getOwner() == r)
                  break;
                d = d.getOwner().getParent();
              }
              return null;
            }, i.prototype.updateLength = function() {
              var g = new Array(4);
              this.isOverlapingSourceAndTarget = e.getIntersection(this.target.getRect(), this.source.getRect(), g), this.isOverlapingSourceAndTarget || (this.lengthX = g[0] - g[2], this.lengthY = g[1] - g[3], Math.abs(this.lengthX) < 1 && (this.lengthX = t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = t.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, i.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = t.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, N.exports = i;
          }),
          /* 2 */
          /***/
          (function(N, I, L) {
            function o(e) {
              this.vGraphObject = e;
            }
            N.exports = o;
          }),
          /* 3 */
          /***/
          (function(N, I, L) {
            var o = L(2), e = L(10), t = L(13), i = L(0), l = L(16), g = L(4);
            function n(r, h, a, p2) {
              a == null && p2 == null && (p2 = h), o.call(this, p2), r.graphManager != null && (r = r.graphManager), this.estimatedSize = e.MIN_VALUE, this.inclusionTreeDepth = e.MAX_VALUE, this.vGraphObject = p2, this.edges = [], this.graphManager = r, a != null && h != null ? this.rect = new t(h.x, h.y, a.width, a.height) : this.rect = new t();
            }
            n.prototype = Object.create(o.prototype);
            for (var d in o)
              n[d] = o[d];
            n.prototype.getEdges = function() {
              return this.edges;
            }, n.prototype.getChild = function() {
              return this.child;
            }, n.prototype.getOwner = function() {
              return this.owner;
            }, n.prototype.getWidth = function() {
              return this.rect.width;
            }, n.prototype.setWidth = function(r) {
              this.rect.width = r;
            }, n.prototype.getHeight = function() {
              return this.rect.height;
            }, n.prototype.setHeight = function(r) {
              this.rect.height = r;
            }, n.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, n.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, n.prototype.getCenter = function() {
              return new g(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, n.prototype.getLocation = function() {
              return new g(this.rect.x, this.rect.y);
            }, n.prototype.getRect = function() {
              return this.rect;
            }, n.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, n.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, n.prototype.setRect = function(r, h) {
              this.rect.x = r.x, this.rect.y = r.y, this.rect.width = h.width, this.rect.height = h.height;
            }, n.prototype.setCenter = function(r, h) {
              this.rect.x = r - this.rect.width / 2, this.rect.y = h - this.rect.height / 2;
            }, n.prototype.setLocation = function(r, h) {
              this.rect.x = r, this.rect.y = h;
            }, n.prototype.moveBy = function(r, h) {
              this.rect.x += r, this.rect.y += h;
            }, n.prototype.getEdgeListToNode = function(r) {
              var h = [], a = this;
              return a.edges.forEach(function(p2) {
                if (p2.target == r) {
                  if (p2.source != a) throw "Incorrect edge source!";
                  h.push(p2);
                }
              }), h;
            }, n.prototype.getEdgesBetween = function(r) {
              var h = [], a = this;
              return a.edges.forEach(function(p2) {
                if (!(p2.source == a || p2.target == a)) throw "Incorrect edge source and/or target";
                (p2.target == r || p2.source == r) && h.push(p2);
              }), h;
            }, n.prototype.getNeighborsList = function() {
              var r = /* @__PURE__ */ new Set(), h = this;
              return h.edges.forEach(function(a) {
                if (a.source == h)
                  r.add(a.target);
                else {
                  if (a.target != h)
                    throw "Incorrect incidency!";
                  r.add(a.source);
                }
              }), r;
            }, n.prototype.withChildren = function() {
              var r = /* @__PURE__ */ new Set(), h, a;
              if (r.add(this), this.child != null)
                for (var p2 = this.child.getNodes(), v = 0; v < p2.length; v++)
                  h = p2[v], a = h.withChildren(), a.forEach(function(D) {
                    r.add(D);
                  });
              return r;
            }, n.prototype.getNoOfChildren = function() {
              var r = 0, h;
              if (this.child == null)
                r = 1;
              else
                for (var a = this.child.getNodes(), p2 = 0; p2 < a.length; p2++)
                  h = a[p2], r += h.getNoOfChildren();
              return r == 0 && (r = 1), r;
            }, n.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == e.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, n.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, n.prototype.scatter = function() {
              var r, h, a = -i.INITIAL_WORLD_BOUNDARY, p2 = i.INITIAL_WORLD_BOUNDARY;
              r = i.WORLD_CENTER_X + l.nextDouble() * (p2 - a) + a;
              var v = -i.INITIAL_WORLD_BOUNDARY, D = i.INITIAL_WORLD_BOUNDARY;
              h = i.WORLD_CENTER_Y + l.nextDouble() * (D - v) + v, this.rect.x = r, this.rect.y = h;
            }, n.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var r = this.getChild();
                if (r.updateBounds(true), this.rect.x = r.getLeft(), this.rect.y = r.getTop(), this.setWidth(r.getRight() - r.getLeft()), this.setHeight(r.getBottom() - r.getTop()), i.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var h = r.getRight() - r.getLeft(), a = r.getBottom() - r.getTop();
                  this.labelWidth > h && (this.rect.x -= (this.labelWidth - h) / 2, this.setWidth(this.labelWidth)), this.labelHeight > a && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - a) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - a), this.setHeight(this.labelHeight));
                }
              }
            }, n.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == e.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, n.prototype.transform = function(r) {
              var h = this.rect.x;
              h > i.WORLD_BOUNDARY ? h = i.WORLD_BOUNDARY : h < -i.WORLD_BOUNDARY && (h = -i.WORLD_BOUNDARY);
              var a = this.rect.y;
              a > i.WORLD_BOUNDARY ? a = i.WORLD_BOUNDARY : a < -i.WORLD_BOUNDARY && (a = -i.WORLD_BOUNDARY);
              var p2 = new g(h, a), v = r.inverseTransformPoint(p2);
              this.setLocation(v.x, v.y);
            }, n.prototype.getLeft = function() {
              return this.rect.x;
            }, n.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, n.prototype.getTop = function() {
              return this.rect.y;
            }, n.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, n.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, N.exports = n;
          }),
          /* 4 */
          /***/
          (function(N, I, L) {
            function o(e, t) {
              e == null && t == null ? (this.x = 0, this.y = 0) : (this.x = e, this.y = t);
            }
            o.prototype.getX = function() {
              return this.x;
            }, o.prototype.getY = function() {
              return this.y;
            }, o.prototype.setX = function(e) {
              this.x = e;
            }, o.prototype.setY = function(e) {
              this.y = e;
            }, o.prototype.getDifference = function(e) {
              return new DimensionD(this.x - e.x, this.y - e.y);
            }, o.prototype.getCopy = function() {
              return new o(this.x, this.y);
            }, o.prototype.translate = function(e) {
              return this.x += e.width, this.y += e.height, this;
            }, N.exports = o;
          }),
          /* 5 */
          /***/
          (function(N, I, L) {
            var o = L(2), e = L(10), t = L(0), i = L(6), l = L(3), g = L(1), n = L(13), d = L(12), r = L(11);
            function h(p2, v, D) {
              o.call(this, D), this.estimatedSize = e.MIN_VALUE, this.margin = t.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = p2, v != null && v instanceof i ? this.graphManager = v : v != null && v instanceof Layout && (this.graphManager = v.graphManager);
            }
            h.prototype = Object.create(o.prototype);
            for (var a in o)
              h[a] = o[a];
            h.prototype.getNodes = function() {
              return this.nodes;
            }, h.prototype.getEdges = function() {
              return this.edges;
            }, h.prototype.getGraphManager = function() {
              return this.graphManager;
            }, h.prototype.getParent = function() {
              return this.parent;
            }, h.prototype.getLeft = function() {
              return this.left;
            }, h.prototype.getRight = function() {
              return this.right;
            }, h.prototype.getTop = function() {
              return this.top;
            }, h.prototype.getBottom = function() {
              return this.bottom;
            }, h.prototype.isConnected = function() {
              return this.isConnected;
            }, h.prototype.add = function(p2, v, D) {
              if (v == null && D == null) {
                var u = p2;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(u) > -1)
                  throw "Node already in graph!";
                return u.owner = this, this.getNodes().push(u), u;
              } else {
                var T = p2;
                if (!(this.getNodes().indexOf(v) > -1 && this.getNodes().indexOf(D) > -1))
                  throw "Source or target not in graph!";
                if (!(v.owner == D.owner && v.owner == this))
                  throw "Both owners must be this graph!";
                return v.owner != D.owner ? null : (T.source = v, T.target = D, T.isInterGraph = false, this.getEdges().push(T), v.edges.push(T), D != v && D.edges.push(T), T);
              }
            }, h.prototype.remove = function(p2) {
              var v = p2;
              if (p2 instanceof l) {
                if (v == null)
                  throw "Node is null!";
                if (!(v.owner != null && v.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var D = v.edges.slice(), u, T = D.length, y = 0; y < T; y++)
                  u = D[y], u.isInterGraph ? this.graphManager.remove(u) : u.source.owner.remove(u);
                var O = this.nodes.indexOf(v);
                if (O == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(O, 1);
              } else if (p2 instanceof g) {
                var u = p2;
                if (u == null)
                  throw "Edge is null!";
                if (!(u.source != null && u.target != null))
                  throw "Source and/or target is null!";
                if (!(u.source.owner != null && u.target.owner != null && u.source.owner == this && u.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var s = u.source.edges.indexOf(u), f = u.target.edges.indexOf(u);
                if (!(s > -1 && f > -1))
                  throw "Source and/or target doesn't know this edge!";
                u.source.edges.splice(s, 1), u.target != u.source && u.target.edges.splice(f, 1);
                var O = u.source.owner.getEdges().indexOf(u);
                if (O == -1)
                  throw "Not in owner's edge list!";
                u.source.owner.getEdges().splice(O, 1);
              }
            }, h.prototype.updateLeftTop = function() {
              for (var p2 = e.MAX_VALUE, v = e.MAX_VALUE, D, u, T, y = this.getNodes(), O = y.length, s = 0; s < O; s++) {
                var f = y[s];
                D = f.getTop(), u = f.getLeft(), p2 > D && (p2 = D), v > u && (v = u);
              }
              return p2 == e.MAX_VALUE ? null : (y[0].getParent().paddingLeft != null ? T = y[0].getParent().paddingLeft : T = this.margin, this.left = v - T, this.top = p2 - T, new d(this.left, this.top));
            }, h.prototype.updateBounds = function(p2) {
              for (var v = e.MAX_VALUE, D = -e.MAX_VALUE, u = e.MAX_VALUE, T = -e.MAX_VALUE, y, O, s, f, c, E = this.nodes, A = E.length, m = 0; m < A; m++) {
                var C = E[m];
                p2 && C.child != null && C.updateBounds(), y = C.getLeft(), O = C.getRight(), s = C.getTop(), f = C.getBottom(), v > y && (v = y), D < O && (D = O), u > s && (u = s), T < f && (T = f);
              }
              var R = new n(v, u, D - v, T - u);
              v == e.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), E[0].getParent().paddingLeft != null ? c = E[0].getParent().paddingLeft : c = this.margin, this.left = R.x - c, this.right = R.x + R.width + c, this.top = R.y - c, this.bottom = R.y + R.height + c;
            }, h.calculateBounds = function(p2) {
              for (var v = e.MAX_VALUE, D = -e.MAX_VALUE, u = e.MAX_VALUE, T = -e.MAX_VALUE, y, O, s, f, c = p2.length, E = 0; E < c; E++) {
                var A = p2[E];
                y = A.getLeft(), O = A.getRight(), s = A.getTop(), f = A.getBottom(), v > y && (v = y), D < O && (D = O), u > s && (u = s), T < f && (T = f);
              }
              var m = new n(v, u, D - v, T - u);
              return m;
            }, h.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, h.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == e.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, h.prototype.calcEstimatedSize = function() {
              for (var p2 = 0, v = this.nodes, D = v.length, u = 0; u < D; u++) {
                var T = v[u];
                p2 += T.calcEstimatedSize();
              }
              return p2 == 0 ? this.estimatedSize = t.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = p2 / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, h.prototype.updateConnected = function() {
              var p2 = this;
              if (this.nodes.length == 0) {
                this.isConnected = true;
                return;
              }
              var v = new r(), D = /* @__PURE__ */ new Set(), u = this.nodes[0], T, y, O = u.withChildren();
              for (O.forEach(function(m) {
                v.push(m), D.add(m);
              }); v.length !== 0; ) {
                u = v.shift(), T = u.getEdges();
                for (var s = T.length, f = 0; f < s; f++) {
                  var c = T[f];
                  if (y = c.getOtherEndInGraph(u, this), y != null && !D.has(y)) {
                    var E = y.withChildren();
                    E.forEach(function(m) {
                      v.push(m), D.add(m);
                    });
                  }
                }
              }
              if (this.isConnected = false, D.size >= this.nodes.length) {
                var A = 0;
                D.forEach(function(m) {
                  m.owner == p2 && A++;
                }), A == this.nodes.length && (this.isConnected = true);
              }
            }, N.exports = h;
          }),
          /* 6 */
          /***/
          (function(N, I, L) {
            var o, e = L(1);
            function t(i) {
              o = L(5), this.layout = i, this.graphs = [], this.edges = [];
            }
            t.prototype.addRoot = function() {
              var i = this.layout.newGraph(), l = this.layout.newNode(null), g = this.add(i, l);
              return this.setRootGraph(g), this.rootGraph;
            }, t.prototype.add = function(i, l, g, n, d) {
              if (g == null && n == null && d == null) {
                if (i == null)
                  throw "Graph is null!";
                if (l == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(i) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(i), i.parent != null)
                  throw "Already has a parent!";
                if (l.child != null)
                  throw "Already has a child!";
                return i.parent = l, l.child = i, i;
              } else {
                d = g, n = l, g = i;
                var r = n.getOwner(), h = d.getOwner();
                if (!(r != null && r.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(h != null && h.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (r == h)
                  return g.isInterGraph = false, r.add(g, n, d);
                if (g.isInterGraph = true, g.source = n, g.target = d, this.edges.indexOf(g) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(g), !(g.source != null && g.target != null))
                  throw "Edge source and/or target is null!";
                if (!(g.source.edges.indexOf(g) == -1 && g.target.edges.indexOf(g) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return g.source.edges.push(g), g.target.edges.push(g), g;
              }
            }, t.prototype.remove = function(i) {
              if (i instanceof o) {
                var l = i;
                if (l.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(l == this.rootGraph || l.parent != null && l.parent.graphManager == this))
                  throw "Invalid parent node!";
                var g = [];
                g = g.concat(l.getEdges());
                for (var n, d = g.length, r = 0; r < d; r++)
                  n = g[r], l.remove(n);
                var h = [];
                h = h.concat(l.getNodes());
                var a;
                d = h.length;
                for (var r = 0; r < d; r++)
                  a = h[r], l.remove(a);
                l == this.rootGraph && this.setRootGraph(null);
                var p2 = this.graphs.indexOf(l);
                this.graphs.splice(p2, 1), l.parent = null;
              } else if (i instanceof e) {
                if (n = i, n == null)
                  throw "Edge is null!";
                if (!n.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(n.source != null && n.target != null))
                  throw "Source and/or target is null!";
                if (!(n.source.edges.indexOf(n) != -1 && n.target.edges.indexOf(n) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var p2 = n.source.edges.indexOf(n);
                if (n.source.edges.splice(p2, 1), p2 = n.target.edges.indexOf(n), n.target.edges.splice(p2, 1), !(n.source.owner != null && n.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (n.source.owner.getGraphManager().edges.indexOf(n) == -1)
                  throw "Not in owner graph manager's edge list!";
                var p2 = n.source.owner.getGraphManager().edges.indexOf(n);
                n.source.owner.getGraphManager().edges.splice(p2, 1);
              }
            }, t.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(true);
            }, t.prototype.getGraphs = function() {
              return this.graphs;
            }, t.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var i = [], l = this.getGraphs(), g = l.length, n = 0; n < g; n++)
                  i = i.concat(l[n].getNodes());
                this.allNodes = i;
              }
              return this.allNodes;
            }, t.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, t.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, t.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, t.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var i = [], l = this.getGraphs();
                l.length;
                for (var g = 0; g < l.length; g++)
                  i = i.concat(l[g].getEdges());
                i = i.concat(this.edges), this.allEdges = i;
              }
              return this.allEdges;
            }, t.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, t.prototype.setAllNodesToApplyGravitation = function(i) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = i;
            }, t.prototype.getRoot = function() {
              return this.rootGraph;
            }, t.prototype.setRootGraph = function(i) {
              if (i.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = i, i.parent == null && (i.parent = this.layout.newNode("Root node"));
            }, t.prototype.getLayout = function() {
              return this.layout;
            }, t.prototype.isOneAncestorOfOther = function(i, l) {
              if (!(i != null && l != null))
                throw "assert failed";
              if (i == l)
                return true;
              var g = i.getOwner(), n;
              do {
                if (n = g.getParent(), n == null)
                  break;
                if (n == l)
                  return true;
                if (g = n.getOwner(), g == null)
                  break;
              } while (true);
              g = l.getOwner();
              do {
                if (n = g.getParent(), n == null)
                  break;
                if (n == i)
                  return true;
                if (g = n.getOwner(), g == null)
                  break;
              } while (true);
              return false;
            }, t.prototype.calcLowestCommonAncestors = function() {
              for (var i, l, g, n, d, r = this.getAllEdges(), h = r.length, a = 0; a < h; a++) {
                if (i = r[a], l = i.source, g = i.target, i.lca = null, i.sourceInLca = l, i.targetInLca = g, l == g) {
                  i.lca = l.getOwner();
                  continue;
                }
                for (n = l.getOwner(); i.lca == null; ) {
                  for (i.targetInLca = g, d = g.getOwner(); i.lca == null; ) {
                    if (d == n) {
                      i.lca = d;
                      break;
                    }
                    if (d == this.rootGraph)
                      break;
                    if (i.lca != null)
                      throw "assert failed";
                    i.targetInLca = d.getParent(), d = i.targetInLca.getOwner();
                  }
                  if (n == this.rootGraph)
                    break;
                  i.lca == null && (i.sourceInLca = n.getParent(), n = i.sourceInLca.getOwner());
                }
                if (i.lca == null)
                  throw "assert failed";
              }
            }, t.prototype.calcLowestCommonAncestor = function(i, l) {
              if (i == l)
                return i.getOwner();
              var g = i.getOwner();
              do {
                if (g == null)
                  break;
                var n = l.getOwner();
                do {
                  if (n == null)
                    break;
                  if (n == g)
                    return n;
                  n = n.getParent().getOwner();
                } while (true);
                g = g.getParent().getOwner();
              } while (true);
              return g;
            }, t.prototype.calcInclusionTreeDepths = function(i, l) {
              i == null && l == null && (i = this.rootGraph, l = 1);
              for (var g, n = i.getNodes(), d = n.length, r = 0; r < d; r++)
                g = n[r], g.inclusionTreeDepth = l, g.child != null && this.calcInclusionTreeDepths(g.child, l + 1);
            }, t.prototype.includesInvalidEdge = function() {
              for (var i, l = this.edges.length, g = 0; g < l; g++)
                if (i = this.edges[g], this.isOneAncestorOfOther(i.source, i.target))
                  return true;
              return false;
            }, N.exports = t;
          }),
          /* 7 */
          /***/
          (function(N, I, L) {
            var o = L(0);
            function e() {
            }
            for (var t in o)
              e[t] = o[t];
            e.MAX_ITERATIONS = 2500, e.DEFAULT_EDGE_LENGTH = 50, e.DEFAULT_SPRING_STRENGTH = 0.45, e.DEFAULT_REPULSION_STRENGTH = 4500, e.DEFAULT_GRAVITY_STRENGTH = 0.4, e.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, e.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, e.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, e.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, e.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, e.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, e.COOLING_ADAPTATION_FACTOR = 0.33, e.ADAPTATION_LOWER_NODE_LIMIT = 1e3, e.ADAPTATION_UPPER_NODE_LIMIT = 5e3, e.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, e.MAX_NODE_DISPLACEMENT = e.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, e.MIN_REPULSION_DIST = e.DEFAULT_EDGE_LENGTH / 10, e.CONVERGENCE_CHECK_PERIOD = 100, e.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, e.MIN_EDGE_LENGTH = 1, e.GRID_CALCULATION_CHECK_PERIOD = 10, N.exports = e;
          }),
          /* 8 */
          /***/
          (function(N, I, L) {
            var o = L(12);
            function e() {
            }
            e.calcSeparationAmount = function(t, i, l, g) {
              if (!t.intersects(i))
                throw "assert failed";
              var n = new Array(2);
              this.decideDirectionsForOverlappingNodes(t, i, n), l[0] = Math.min(t.getRight(), i.getRight()) - Math.max(t.x, i.x), l[1] = Math.min(t.getBottom(), i.getBottom()) - Math.max(t.y, i.y), t.getX() <= i.getX() && t.getRight() >= i.getRight() ? l[0] += Math.min(i.getX() - t.getX(), t.getRight() - i.getRight()) : i.getX() <= t.getX() && i.getRight() >= t.getRight() && (l[0] += Math.min(t.getX() - i.getX(), i.getRight() - t.getRight())), t.getY() <= i.getY() && t.getBottom() >= i.getBottom() ? l[1] += Math.min(i.getY() - t.getY(), t.getBottom() - i.getBottom()) : i.getY() <= t.getY() && i.getBottom() >= t.getBottom() && (l[1] += Math.min(t.getY() - i.getY(), i.getBottom() - t.getBottom()));
              var d = Math.abs((i.getCenterY() - t.getCenterY()) / (i.getCenterX() - t.getCenterX()));
              i.getCenterY() === t.getCenterY() && i.getCenterX() === t.getCenterX() && (d = 1);
              var r = d * l[0], h = l[1] / d;
              l[0] < h ? h = l[0] : r = l[1], l[0] = -1 * n[0] * (h / 2 + g), l[1] = -1 * n[1] * (r / 2 + g);
            }, e.decideDirectionsForOverlappingNodes = function(t, i, l) {
              t.getCenterX() < i.getCenterX() ? l[0] = -1 : l[0] = 1, t.getCenterY() < i.getCenterY() ? l[1] = -1 : l[1] = 1;
            }, e.getIntersection2 = function(t, i, l) {
              var g = t.getCenterX(), n = t.getCenterY(), d = i.getCenterX(), r = i.getCenterY();
              if (t.intersects(i))
                return l[0] = g, l[1] = n, l[2] = d, l[3] = r, true;
              var h = t.getX(), a = t.getY(), p2 = t.getRight(), v = t.getX(), D = t.getBottom(), u = t.getRight(), T = t.getWidthHalf(), y = t.getHeightHalf(), O = i.getX(), s = i.getY(), f = i.getRight(), c = i.getX(), E = i.getBottom(), A = i.getRight(), m = i.getWidthHalf(), C = i.getHeightHalf(), R = false, M = false;
              if (g === d) {
                if (n > r)
                  return l[0] = g, l[1] = a, l[2] = d, l[3] = E, false;
                if (n < r)
                  return l[0] = g, l[1] = D, l[2] = d, l[3] = s, false;
              } else if (n === r) {
                if (g > d)
                  return l[0] = h, l[1] = n, l[2] = f, l[3] = r, false;
                if (g < d)
                  return l[0] = p2, l[1] = n, l[2] = O, l[3] = r, false;
              } else {
                var S = t.height / t.width, Y = i.height / i.width, w = (r - n) / (d - g), x = void 0, F2 = void 0, U = void 0, P = void 0, _ = void 0, X = void 0;
                if (-S === w ? g > d ? (l[0] = v, l[1] = D, R = true) : (l[0] = p2, l[1] = a, R = true) : S === w && (g > d ? (l[0] = h, l[1] = a, R = true) : (l[0] = u, l[1] = D, R = true)), -Y === w ? d > g ? (l[2] = c, l[3] = E, M = true) : (l[2] = f, l[3] = s, M = true) : Y === w && (d > g ? (l[2] = O, l[3] = s, M = true) : (l[2] = A, l[3] = E, M = true)), R && M)
                  return false;
                if (g > d ? n > r ? (x = this.getCardinalDirection(S, w, 4), F2 = this.getCardinalDirection(Y, w, 2)) : (x = this.getCardinalDirection(-S, w, 3), F2 = this.getCardinalDirection(-Y, w, 1)) : n > r ? (x = this.getCardinalDirection(-S, w, 1), F2 = this.getCardinalDirection(-Y, w, 3)) : (x = this.getCardinalDirection(S, w, 2), F2 = this.getCardinalDirection(Y, w, 4)), !R)
                  switch (x) {
                    case 1:
                      P = a, U = g + -y / w, l[0] = U, l[1] = P;
                      break;
                    case 2:
                      U = u, P = n + T * w, l[0] = U, l[1] = P;
                      break;
                    case 3:
                      P = D, U = g + y / w, l[0] = U, l[1] = P;
                      break;
                    case 4:
                      U = v, P = n + -T * w, l[0] = U, l[1] = P;
                      break;
                  }
                if (!M)
                  switch (F2) {
                    case 1:
                      X = s, _ = d + -C / w, l[2] = _, l[3] = X;
                      break;
                    case 2:
                      _ = A, X = r + m * w, l[2] = _, l[3] = X;
                      break;
                    case 3:
                      X = E, _ = d + C / w, l[2] = _, l[3] = X;
                      break;
                    case 4:
                      _ = c, X = r + -m * w, l[2] = _, l[3] = X;
                      break;
                  }
              }
              return false;
            }, e.getCardinalDirection = function(t, i, l) {
              return t > i ? l : 1 + l % 4;
            }, e.getIntersection = function(t, i, l, g) {
              if (g == null)
                return this.getIntersection2(t, i, l);
              var n = t.x, d = t.y, r = i.x, h = i.y, a = l.x, p2 = l.y, v = g.x, D = g.y, u = void 0, T = void 0, y = void 0, O = void 0, s = void 0, f = void 0, c = void 0, E = void 0, A = void 0;
              return y = h - d, s = n - r, c = r * d - n * h, O = D - p2, f = a - v, E = v * p2 - a * D, A = y * f - O * s, A === 0 ? null : (u = (s * E - f * c) / A, T = (O * c - y * E) / A, new o(u, T));
            }, e.angleOfVector = function(t, i, l, g) {
              var n = void 0;
              return t !== l ? (n = Math.atan((g - i) / (l - t)), l < t ? n += Math.PI : g < i && (n += this.TWO_PI)) : g < i ? n = this.ONE_AND_HALF_PI : n = this.HALF_PI, n;
            }, e.doIntersect = function(t, i, l, g) {
              var n = t.x, d = t.y, r = i.x, h = i.y, a = l.x, p2 = l.y, v = g.x, D = g.y, u = (r - n) * (D - p2) - (v - a) * (h - d);
              if (u === 0)
                return false;
              var T = ((D - p2) * (v - n) + (a - v) * (D - d)) / u, y = ((d - h) * (v - n) + (r - n) * (D - d)) / u;
              return 0 < T && T < 1 && 0 < y && y < 1;
            }, e.HALF_PI = 0.5 * Math.PI, e.ONE_AND_HALF_PI = 1.5 * Math.PI, e.TWO_PI = 2 * Math.PI, e.THREE_PI = 3 * Math.PI, N.exports = e;
          }),
          /* 9 */
          /***/
          (function(N, I, L) {
            function o() {
            }
            o.sign = function(e) {
              return e > 0 ? 1 : e < 0 ? -1 : 0;
            }, o.floor = function(e) {
              return e < 0 ? Math.ceil(e) : Math.floor(e);
            }, o.ceil = function(e) {
              return e < 0 ? Math.floor(e) : Math.ceil(e);
            }, N.exports = o;
          }),
          /* 10 */
          /***/
          (function(N, I, L) {
            function o() {
            }
            o.MAX_VALUE = 2147483647, o.MIN_VALUE = -2147483648, N.exports = o;
          }),
          /* 11 */
          /***/
          (function(N, I, L) {
            var o = /* @__PURE__ */ (function() {
              function n(d, r) {
                for (var h = 0; h < r.length; h++) {
                  var a = r[h];
                  a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(d, a.key, a);
                }
              }
              return function(d, r, h) {
                return r && n(d.prototype, r), h && n(d, h), d;
              };
            })();
            function e(n, d) {
              if (!(n instanceof d))
                throw new TypeError("Cannot call a class as a function");
            }
            var t = function(d) {
              return { value: d, next: null, prev: null };
            }, i = function(d, r, h, a) {
              return d !== null ? d.next = r : a.head = r, h !== null ? h.prev = r : a.tail = r, r.prev = d, r.next = h, a.length++, r;
            }, l = function(d, r) {
              var h = d.prev, a = d.next;
              return h !== null ? h.next = a : r.head = a, a !== null ? a.prev = h : r.tail = h, d.prev = d.next = null, r.length--, d;
            }, g = (function() {
              function n(d) {
                var r = this;
                e(this, n), this.length = 0, this.head = null, this.tail = null, d?.forEach(function(h) {
                  return r.push(h);
                });
              }
              return o(n, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(r, h) {
                  return i(h.prev, t(r), h, this);
                }
              }, {
                key: "insertAfter",
                value: function(r, h) {
                  return i(h, t(r), h.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(r, h) {
                  return i(h.prev, r, h, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(r, h) {
                  return i(h, r, h.next, this);
                }
              }, {
                key: "push",
                value: function(r) {
                  return i(this.tail, t(r), null, this);
                }
              }, {
                key: "unshift",
                value: function(r) {
                  return i(null, t(r), this.head, this);
                }
              }, {
                key: "remove",
                value: function(r) {
                  return l(r, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return l(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return l(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return l(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return l(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(r) {
                  if (r <= this.length()) {
                    for (var h = 1, a = this.head; h < r; )
                      a = a.next, h++;
                    return a.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(r, h) {
                  if (r <= this.length()) {
                    for (var a = 1, p2 = this.head; a < r; )
                      p2 = p2.next, a++;
                    p2.value = h;
                  }
                }
              }]), n;
            })();
            N.exports = g;
          }),
          /* 12 */
          /***/
          (function(N, I, L) {
            function o(e, t, i) {
              this.x = null, this.y = null, e == null && t == null && i == null ? (this.x = 0, this.y = 0) : typeof e == "number" && typeof t == "number" && i == null ? (this.x = e, this.y = t) : e.constructor.name == "Point" && t == null && i == null && (i = e, this.x = i.x, this.y = i.y);
            }
            o.prototype.getX = function() {
              return this.x;
            }, o.prototype.getY = function() {
              return this.y;
            }, o.prototype.getLocation = function() {
              return new o(this.x, this.y);
            }, o.prototype.setLocation = function(e, t, i) {
              e.constructor.name == "Point" && t == null && i == null ? (i = e, this.setLocation(i.x, i.y)) : typeof e == "number" && typeof t == "number" && i == null && (parseInt(e) == e && parseInt(t) == t ? this.move(e, t) : (this.x = Math.floor(e + 0.5), this.y = Math.floor(t + 0.5)));
            }, o.prototype.move = function(e, t) {
              this.x = e, this.y = t;
            }, o.prototype.translate = function(e, t) {
              this.x += e, this.y += t;
            }, o.prototype.equals = function(e) {
              if (e.constructor.name == "Point") {
                var t = e;
                return this.x == t.x && this.y == t.y;
              }
              return this == e;
            }, o.prototype.toString = function() {
              return new o().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, N.exports = o;
          }),
          /* 13 */
          /***/
          (function(N, I, L) {
            function o(e, t, i, l) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, e != null && t != null && i != null && l != null && (this.x = e, this.y = t, this.width = i, this.height = l);
            }
            o.prototype.getX = function() {
              return this.x;
            }, o.prototype.setX = function(e) {
              this.x = e;
            }, o.prototype.getY = function() {
              return this.y;
            }, o.prototype.setY = function(e) {
              this.y = e;
            }, o.prototype.getWidth = function() {
              return this.width;
            }, o.prototype.setWidth = function(e) {
              this.width = e;
            }, o.prototype.getHeight = function() {
              return this.height;
            }, o.prototype.setHeight = function(e) {
              this.height = e;
            }, o.prototype.getRight = function() {
              return this.x + this.width;
            }, o.prototype.getBottom = function() {
              return this.y + this.height;
            }, o.prototype.intersects = function(e) {
              return !(this.getRight() < e.x || this.getBottom() < e.y || e.getRight() < this.x || e.getBottom() < this.y);
            }, o.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, o.prototype.getMinX = function() {
              return this.getX();
            }, o.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, o.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, o.prototype.getMinY = function() {
              return this.getY();
            }, o.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, o.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, o.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, N.exports = o;
          }),
          /* 14 */
          /***/
          (function(N, I, L) {
            var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
              return typeof t;
            } : function(t) {
              return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            };
            function e() {
            }
            e.lastID = 0, e.createID = function(t) {
              return e.isPrimitive(t) ? t : (t.uniqueID != null || (t.uniqueID = e.getString(), e.lastID++), t.uniqueID);
            }, e.getString = function(t) {
              return t == null && (t = e.lastID), "Object#" + t;
            }, e.isPrimitive = function(t) {
              var i = typeof t > "u" ? "undefined" : o(t);
              return t == null || i != "object" && i != "function";
            }, N.exports = e;
          }),
          /* 15 */
          /***/
          (function(N, I, L) {
            function o(a) {
              if (Array.isArray(a)) {
                for (var p2 = 0, v = Array(a.length); p2 < a.length; p2++)
                  v[p2] = a[p2];
                return v;
              } else
                return Array.from(a);
            }
            var e = L(0), t = L(6), i = L(3), l = L(1), g = L(5), n = L(4), d = L(17), r = L(27);
            function h(a) {
              r.call(this), this.layoutQuality = e.QUALITY, this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = e.DEFAULT_INCREMENTAL, this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new t(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, a != null && (this.isRemoteUse = a);
            }
            h.RANDOM_SEED = 1, h.prototype = Object.create(r.prototype), h.prototype.getGraphManager = function() {
              return this.graphManager;
            }, h.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, h.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, h.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, h.prototype.newGraphManager = function() {
              var a = new t(this);
              return this.graphManager = a, a;
            }, h.prototype.newGraph = function(a) {
              return new g(null, this.graphManager, a);
            }, h.prototype.newNode = function(a) {
              return new i(this.graphManager, a);
            }, h.prototype.newEdge = function(a) {
              return new l(null, null, a);
            }, h.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, h.prototype.runLayout = function() {
              this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var a;
              return this.checkLayoutSuccess() ? a = false : a = this.layout(), e.ANIMATE === "during" ? false : (a && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, a);
            }, h.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, h.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var a = this.graphManager.getAllEdges(), p2 = 0; p2 < a.length; p2++)
                  a[p2];
                for (var v = this.graphManager.getRoot().getNodes(), p2 = 0; p2 < v.length; p2++)
                  v[p2];
                this.update(this.graphManager.getRoot());
              }
            }, h.prototype.update = function(a) {
              if (a == null)
                this.update2();
              else if (a instanceof i) {
                var p2 = a;
                if (p2.getChild() != null)
                  for (var v = p2.getChild().getNodes(), D = 0; D < v.length; D++)
                    update(v[D]);
                if (p2.vGraphObject != null) {
                  var u = p2.vGraphObject;
                  u.update(p2);
                }
              } else if (a instanceof l) {
                var T = a;
                if (T.vGraphObject != null) {
                  var y = T.vGraphObject;
                  y.update(T);
                }
              } else if (a instanceof g) {
                var O = a;
                if (O.vGraphObject != null) {
                  var s = O.vGraphObject;
                  s.update(O);
                }
              }
            }, h.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = e.QUALITY, this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = e.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
            }, h.prototype.transform = function(a) {
              if (a == null)
                this.transform(new n(0, 0));
              else {
                var p2 = new d(), v = this.graphManager.getRoot().updateLeftTop();
                if (v != null) {
                  p2.setWorldOrgX(a.x), p2.setWorldOrgY(a.y), p2.setDeviceOrgX(v.x), p2.setDeviceOrgY(v.y);
                  for (var D = this.getAllNodes(), u, T = 0; T < D.length; T++)
                    u = D[T], u.transform(p2);
                }
              }
            }, h.prototype.positionNodesRandomly = function(a) {
              if (a == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
              else
                for (var p2, v, D = a.getNodes(), u = 0; u < D.length; u++)
                  p2 = D[u], v = p2.getChild(), v == null || v.getNodes().length == 0 ? p2.scatter() : (this.positionNodesRandomly(v), p2.updateBounds());
            }, h.prototype.getFlatForest = function() {
              for (var a = [], p2 = true, v = this.graphManager.getRoot().getNodes(), D = true, u = 0; u < v.length; u++)
                v[u].getChild() != null && (D = false);
              if (!D)
                return a;
              var T = /* @__PURE__ */ new Set(), y = [], O = /* @__PURE__ */ new Map(), s = [];
              for (s = s.concat(v); s.length > 0 && p2; ) {
                for (y.push(s[0]); y.length > 0 && p2; ) {
                  var f = y[0];
                  y.splice(0, 1), T.add(f);
                  for (var c = f.getEdges(), u = 0; u < c.length; u++) {
                    var E = c[u].getOtherEnd(f);
                    if (O.get(f) != E)
                      if (!T.has(E))
                        y.push(E), O.set(E, f);
                      else {
                        p2 = false;
                        break;
                      }
                  }
                }
                if (!p2)
                  a = [];
                else {
                  var A = [].concat(o(T));
                  a.push(A);
                  for (var u = 0; u < A.length; u++) {
                    var m = A[u], C = s.indexOf(m);
                    C > -1 && s.splice(C, 1);
                  }
                  T = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
                }
              }
              return a;
            }, h.prototype.createDummyNodesForBendpoints = function(a) {
              for (var p2 = [], v = a.source, D = this.graphManager.calcLowestCommonAncestor(a.source, a.target), u = 0; u < a.bendpoints.length; u++) {
                var T = this.newNode(null);
                T.setRect(new Point(0, 0), new Dimension(1, 1)), D.add(T);
                var y = this.newEdge(null);
                this.graphManager.add(y, v, T), p2.add(T), v = T;
              }
              var y = this.newEdge(null);
              return this.graphManager.add(y, v, a.target), this.edgeToDummyNodes.set(a, p2), a.isInterGraph() ? this.graphManager.remove(a) : D.remove(a), p2;
            }, h.prototype.createBendpointsFromDummyNodes = function() {
              var a = [];
              a = a.concat(this.graphManager.getAllEdges()), a = [].concat(o(this.edgeToDummyNodes.keys())).concat(a);
              for (var p2 = 0; p2 < a.length; p2++) {
                var v = a[p2];
                if (v.bendpoints.length > 0) {
                  for (var D = this.edgeToDummyNodes.get(v), u = 0; u < D.length; u++) {
                    var T = D[u], y = new n(T.getCenterX(), T.getCenterY()), O = v.bendpoints.get(u);
                    O.x = y.x, O.y = y.y, T.getOwner().remove(T);
                  }
                  this.graphManager.add(v, v.source, v.target);
                }
              }
            }, h.transform = function(a, p2, v, D) {
              if (v != null && D != null) {
                var u = p2;
                if (a <= 50) {
                  var T = p2 / v;
                  u -= (p2 - T) / 50 * (50 - a);
                } else {
                  var y = p2 * D;
                  u += (y - p2) / 50 * (a - 50);
                }
                return u;
              } else {
                var O, s;
                return a <= 50 ? (O = 9 * p2 / 500, s = p2 / 10) : (O = 9 * p2 / 50, s = -8 * p2), O * a + s;
              }
            }, h.findCenterOfTree = function(a) {
              var p2 = [];
              p2 = p2.concat(a);
              var v = [], D = /* @__PURE__ */ new Map(), u = false, T = null;
              (p2.length == 1 || p2.length == 2) && (u = true, T = p2[0]);
              for (var y = 0; y < p2.length; y++) {
                var O = p2[y], s = O.getNeighborsList().size;
                D.set(O, O.getNeighborsList().size), s == 1 && v.push(O);
              }
              var f = [];
              for (f = f.concat(v); !u; ) {
                var c = [];
                c = c.concat(f), f = [];
                for (var y = 0; y < p2.length; y++) {
                  var O = p2[y], E = p2.indexOf(O);
                  E >= 0 && p2.splice(E, 1);
                  var A = O.getNeighborsList();
                  A.forEach(function(R) {
                    if (v.indexOf(R) < 0) {
                      var M = D.get(R), S = M - 1;
                      S == 1 && f.push(R), D.set(R, S);
                    }
                  });
                }
                v = v.concat(f), (p2.length == 1 || p2.length == 2) && (u = true, T = p2[0]);
              }
              return T;
            }, h.prototype.setGraphManager = function(a) {
              this.graphManager = a;
            }, N.exports = h;
          }),
          /* 16 */
          /***/
          (function(N, I, L) {
            function o() {
            }
            o.seed = 1, o.x = 0, o.nextDouble = function() {
              return o.x = Math.sin(o.seed++) * 1e4, o.x - Math.floor(o.x);
            }, N.exports = o;
          }),
          /* 17 */
          /***/
          (function(N, I, L) {
            var o = L(4);
            function e(t, i) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            e.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, e.prototype.setWorldOrgX = function(t) {
              this.lworldOrgX = t;
            }, e.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, e.prototype.setWorldOrgY = function(t) {
              this.lworldOrgY = t;
            }, e.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, e.prototype.setWorldExtX = function(t) {
              this.lworldExtX = t;
            }, e.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, e.prototype.setWorldExtY = function(t) {
              this.lworldExtY = t;
            }, e.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, e.prototype.setDeviceOrgX = function(t) {
              this.ldeviceOrgX = t;
            }, e.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, e.prototype.setDeviceOrgY = function(t) {
              this.ldeviceOrgY = t;
            }, e.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, e.prototype.setDeviceExtX = function(t) {
              this.ldeviceExtX = t;
            }, e.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, e.prototype.setDeviceExtY = function(t) {
              this.ldeviceExtY = t;
            }, e.prototype.transformX = function(t) {
              var i = 0, l = this.lworldExtX;
              return l != 0 && (i = this.ldeviceOrgX + (t - this.lworldOrgX) * this.ldeviceExtX / l), i;
            }, e.prototype.transformY = function(t) {
              var i = 0, l = this.lworldExtY;
              return l != 0 && (i = this.ldeviceOrgY + (t - this.lworldOrgY) * this.ldeviceExtY / l), i;
            }, e.prototype.inverseTransformX = function(t) {
              var i = 0, l = this.ldeviceExtX;
              return l != 0 && (i = this.lworldOrgX + (t - this.ldeviceOrgX) * this.lworldExtX / l), i;
            }, e.prototype.inverseTransformY = function(t) {
              var i = 0, l = this.ldeviceExtY;
              return l != 0 && (i = this.lworldOrgY + (t - this.ldeviceOrgY) * this.lworldExtY / l), i;
            }, e.prototype.inverseTransformPoint = function(t) {
              var i = new o(this.inverseTransformX(t.x), this.inverseTransformY(t.y));
              return i;
            }, N.exports = e;
          }),
          /* 18 */
          /***/
          (function(N, I, L) {
            function o(r) {
              if (Array.isArray(r)) {
                for (var h = 0, a = Array(r.length); h < r.length; h++)
                  a[h] = r[h];
                return a;
              } else
                return Array.from(r);
            }
            var e = L(15), t = L(7), i = L(0), l = L(8), g = L(9);
            function n() {
              e.call(this), this.useSmartIdealEdgeLengthCalculation = t.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = t.DEFAULT_EDGE_LENGTH, this.springConstant = t.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = t.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = t.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = t.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * t.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = t.MAX_ITERATIONS;
            }
            n.prototype = Object.create(e.prototype);
            for (var d in e)
              n[d] = e[d];
            n.prototype.initParameters = function() {
              e.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = t.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, n.prototype.calcIdealEdgeLengths = function() {
              for (var r, h, a, p2, v, D, u = this.getGraphManager().getAllEdges(), T = 0; T < u.length; T++)
                r = u[T], r.idealLength = this.idealEdgeLength, r.isInterGraph && (a = r.getSource(), p2 = r.getTarget(), v = r.getSourceInLca().getEstimatedSize(), D = r.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (r.idealLength += v + D - 2 * i.SIMPLE_NODE_SIZE), h = r.getLca().getInclusionTreeDepth(), r.idealLength += t.DEFAULT_EDGE_LENGTH * t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (a.getInclusionTreeDepth() + p2.getInclusionTreeDepth() - 2 * h));
            }, n.prototype.initSpringEmbedder = function() {
              var r = this.getAllNodes().length;
              this.incremental ? (r > t.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * t.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (r - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - t.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (r > t.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(t.COOLING_ADAPTATION_FACTOR, 1 - (r - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * (1 - t.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, n.prototype.calcSpringForces = function() {
              for (var r = this.getAllEdges(), h, a = 0; a < r.length; a++)
                h = r[a], this.calcSpringForce(h, h.idealLength);
            }, n.prototype.calcRepulsionForces = function() {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, a, p2, v, D, u = this.getAllNodes(), T;
              if (this.useFRGridVariant)
                for (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && r && this.updateGrid(), T = /* @__PURE__ */ new Set(), a = 0; a < u.length; a++)
                  v = u[a], this.calculateRepulsionForceOfANode(v, T, r, h), T.add(v);
              else
                for (a = 0; a < u.length; a++)
                  for (v = u[a], p2 = a + 1; p2 < u.length; p2++)
                    D = u[p2], v.getOwner() == D.getOwner() && this.calcRepulsionForce(v, D);
            }, n.prototype.calcGravitationalForces = function() {
              for (var r, h = this.getAllNodesToApplyGravitation(), a = 0; a < h.length; a++)
                r = h[a], this.calcGravitationalForce(r);
            }, n.prototype.moveNodes = function() {
              for (var r = this.getAllNodes(), h, a = 0; a < r.length; a++)
                h = r[a], h.move();
            }, n.prototype.calcSpringForce = function(r, h) {
              var a = r.getSource(), p2 = r.getTarget(), v, D, u, T;
              if (this.uniformLeafNodeSizes && a.getChild() == null && p2.getChild() == null)
                r.updateLengthSimple();
              else if (r.updateLength(), r.isOverlapingSourceAndTarget)
                return;
              v = r.getLength(), v != 0 && (D = this.springConstant * (v - h), u = D * (r.lengthX / v), T = D * (r.lengthY / v), a.springForceX += u, a.springForceY += T, p2.springForceX -= u, p2.springForceY -= T);
            }, n.prototype.calcRepulsionForce = function(r, h) {
              var a = r.getRect(), p2 = h.getRect(), v = new Array(2), D = new Array(4), u, T, y, O, s, f, c;
              if (a.intersects(p2)) {
                l.calcSeparationAmount(a, p2, v, t.DEFAULT_EDGE_LENGTH / 2), f = 2 * v[0], c = 2 * v[1];
                var E = r.noOfChildren * h.noOfChildren / (r.noOfChildren + h.noOfChildren);
                r.repulsionForceX -= E * f, r.repulsionForceY -= E * c, h.repulsionForceX += E * f, h.repulsionForceY += E * c;
              } else
                this.uniformLeafNodeSizes && r.getChild() == null && h.getChild() == null ? (u = p2.getCenterX() - a.getCenterX(), T = p2.getCenterY() - a.getCenterY()) : (l.getIntersection(a, p2, D), u = D[2] - D[0], T = D[3] - D[1]), Math.abs(u) < t.MIN_REPULSION_DIST && (u = g.sign(u) * t.MIN_REPULSION_DIST), Math.abs(T) < t.MIN_REPULSION_DIST && (T = g.sign(T) * t.MIN_REPULSION_DIST), y = u * u + T * T, O = Math.sqrt(y), s = this.repulsionConstant * r.noOfChildren * h.noOfChildren / y, f = s * u / O, c = s * T / O, r.repulsionForceX -= f, r.repulsionForceY -= c, h.repulsionForceX += f, h.repulsionForceY += c;
            }, n.prototype.calcGravitationalForce = function(r) {
              var h, a, p2, v, D, u, T, y;
              h = r.getOwner(), a = (h.getRight() + h.getLeft()) / 2, p2 = (h.getTop() + h.getBottom()) / 2, v = r.getCenterX() - a, D = r.getCenterY() - p2, u = Math.abs(v) + r.getWidth() / 2, T = Math.abs(D) + r.getHeight() / 2, r.getOwner() == this.graphManager.getRoot() ? (y = h.getEstimatedSize() * this.gravityRangeFactor, (u > y || T > y) && (r.gravitationForceX = -this.gravityConstant * v, r.gravitationForceY = -this.gravityConstant * D)) : (y = h.getEstimatedSize() * this.compoundGravityRangeFactor, (u > y || T > y) && (r.gravitationForceX = -this.gravityConstant * v * this.compoundGravityConstant, r.gravitationForceY = -this.gravityConstant * D * this.compoundGravityConstant));
            }, n.prototype.isConverged = function() {
              var r, h = false;
              return this.totalIterations > this.maxIterations / 3 && (h = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), r = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, r || h;
            }, n.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, n.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var r, h = this.graphManager.getAllNodes(), a = 0; a < h.length; a++)
                r = h[a], r.noOfChildren = r.getNoOfChildren();
            }, n.prototype.calcGrid = function(r) {
              var h = 0, a = 0;
              h = parseInt(Math.ceil((r.getRight() - r.getLeft()) / this.repulsionRange)), a = parseInt(Math.ceil((r.getBottom() - r.getTop()) / this.repulsionRange));
              for (var p2 = new Array(h), v = 0; v < h; v++)
                p2[v] = new Array(a);
              for (var v = 0; v < h; v++)
                for (var D = 0; D < a; D++)
                  p2[v][D] = new Array();
              return p2;
            }, n.prototype.addNodeToGrid = function(r, h, a) {
              var p2 = 0, v = 0, D = 0, u = 0;
              p2 = parseInt(Math.floor((r.getRect().x - h) / this.repulsionRange)), v = parseInt(Math.floor((r.getRect().width + r.getRect().x - h) / this.repulsionRange)), D = parseInt(Math.floor((r.getRect().y - a) / this.repulsionRange)), u = parseInt(Math.floor((r.getRect().height + r.getRect().y - a) / this.repulsionRange));
              for (var T = p2; T <= v; T++)
                for (var y = D; y <= u; y++)
                  this.grid[T][y].push(r), r.setGridCoordinates(p2, v, D, u);
            }, n.prototype.updateGrid = function() {
              var r, h, a = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), r = 0; r < a.length; r++)
                h = a[r], this.addNodeToGrid(h, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, n.prototype.calculateRepulsionForceOfANode = function(r, h, a, p2) {
              if (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && a || p2) {
                var v = /* @__PURE__ */ new Set();
                r.surrounding = new Array();
                for (var D, u = this.grid, T = r.startX - 1; T < r.finishX + 2; T++)
                  for (var y = r.startY - 1; y < r.finishY + 2; y++)
                    if (!(T < 0 || y < 0 || T >= u.length || y >= u[0].length)) {
                      for (var O = 0; O < u[T][y].length; O++)
                        if (D = u[T][y][O], !(r.getOwner() != D.getOwner() || r == D) && !h.has(D) && !v.has(D)) {
                          var s = Math.abs(r.getCenterX() - D.getCenterX()) - (r.getWidth() / 2 + D.getWidth() / 2), f = Math.abs(r.getCenterY() - D.getCenterY()) - (r.getHeight() / 2 + D.getHeight() / 2);
                          s <= this.repulsionRange && f <= this.repulsionRange && v.add(D);
                        }
                    }
                r.surrounding = [].concat(o(v));
              }
              for (T = 0; T < r.surrounding.length; T++)
                this.calcRepulsionForce(r, r.surrounding[T]);
            }, n.prototype.calcRepulsionRange = function() {
              return 0;
            }, N.exports = n;
          }),
          /* 19 */
          /***/
          (function(N, I, L) {
            var o = L(1), e = L(7);
            function t(l, g, n) {
              o.call(this, l, g, n), this.idealLength = e.DEFAULT_EDGE_LENGTH;
            }
            t.prototype = Object.create(o.prototype);
            for (var i in o)
              t[i] = o[i];
            N.exports = t;
          }),
          /* 20 */
          /***/
          (function(N, I, L) {
            var o = L(3);
            function e(i, l, g, n) {
              o.call(this, i, l, g, n), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            e.prototype = Object.create(o.prototype);
            for (var t in o)
              e[t] = o[t];
            e.prototype.setGridCoordinates = function(i, l, g, n) {
              this.startX = i, this.finishX = l, this.startY = g, this.finishY = n;
            }, N.exports = e;
          }),
          /* 21 */
          /***/
          (function(N, I, L) {
            function o(e, t) {
              this.width = 0, this.height = 0, e !== null && t !== null && (this.height = t, this.width = e);
            }
            o.prototype.getWidth = function() {
              return this.width;
            }, o.prototype.setWidth = function(e) {
              this.width = e;
            }, o.prototype.getHeight = function() {
              return this.height;
            }, o.prototype.setHeight = function(e) {
              this.height = e;
            }, N.exports = o;
          }),
          /* 22 */
          /***/
          (function(N, I, L) {
            var o = L(14);
            function e() {
              this.map = {}, this.keys = [];
            }
            e.prototype.put = function(t, i) {
              var l = o.createID(t);
              this.contains(l) || (this.map[l] = i, this.keys.push(t));
            }, e.prototype.contains = function(t) {
              return o.createID(t), this.map[t] != null;
            }, e.prototype.get = function(t) {
              var i = o.createID(t);
              return this.map[i];
            }, e.prototype.keySet = function() {
              return this.keys;
            }, N.exports = e;
          }),
          /* 23 */
          /***/
          (function(N, I, L) {
            var o = L(14);
            function e() {
              this.set = {};
            }
            e.prototype.add = function(t) {
              var i = o.createID(t);
              this.contains(i) || (this.set[i] = t);
            }, e.prototype.remove = function(t) {
              delete this.set[o.createID(t)];
            }, e.prototype.clear = function() {
              this.set = {};
            }, e.prototype.contains = function(t) {
              return this.set[o.createID(t)] == t;
            }, e.prototype.isEmpty = function() {
              return this.size() === 0;
            }, e.prototype.size = function() {
              return Object.keys(this.set).length;
            }, e.prototype.addAllTo = function(t) {
              for (var i = Object.keys(this.set), l = i.length, g = 0; g < l; g++)
                t.push(this.set[i[g]]);
            }, e.prototype.size = function() {
              return Object.keys(this.set).length;
            }, e.prototype.addAll = function(t) {
              for (var i = t.length, l = 0; l < i; l++) {
                var g = t[l];
                this.add(g);
              }
            }, N.exports = e;
          }),
          /* 24 */
          /***/
          (function(N, I, L) {
            var o = /* @__PURE__ */ (function() {
              function l(g, n) {
                for (var d = 0; d < n.length; d++) {
                  var r = n[d];
                  r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(g, r.key, r);
                }
              }
              return function(g, n, d) {
                return n && l(g.prototype, n), d && l(g, d), g;
              };
            })();
            function e(l, g) {
              if (!(l instanceof g))
                throw new TypeError("Cannot call a class as a function");
            }
            var t = L(11), i = (function() {
              function l(g, n) {
                e(this, l), (n !== null || n !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var d = void 0;
                g instanceof t ? d = g.size() : d = g.length, this._quicksort(g, 0, d - 1);
              }
              return o(l, [{
                key: "_quicksort",
                value: function(n, d, r) {
                  if (d < r) {
                    var h = this._partition(n, d, r);
                    this._quicksort(n, d, h), this._quicksort(n, h + 1, r);
                  }
                }
              }, {
                key: "_partition",
                value: function(n, d, r) {
                  for (var h = this._get(n, d), a = d, p2 = r; ; ) {
                    for (; this.compareFunction(h, this._get(n, p2)); )
                      p2--;
                    for (; this.compareFunction(this._get(n, a), h); )
                      a++;
                    if (a < p2)
                      this._swap(n, a, p2), a++, p2--;
                    else return p2;
                  }
                }
              }, {
                key: "_get",
                value: function(n, d) {
                  return n instanceof t ? n.get_object_at(d) : n[d];
                }
              }, {
                key: "_set",
                value: function(n, d, r) {
                  n instanceof t ? n.set_object_at(d, r) : n[d] = r;
                }
              }, {
                key: "_swap",
                value: function(n, d, r) {
                  var h = this._get(n, d);
                  this._set(n, d, this._get(n, r)), this._set(n, r, h);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(n, d) {
                  return d > n;
                }
              }]), l;
            })();
            N.exports = i;
          }),
          /* 25 */
          /***/
          (function(N, I, L) {
            var o = /* @__PURE__ */ (function() {
              function i(l, g) {
                for (var n = 0; n < g.length; n++) {
                  var d = g[n];
                  d.enumerable = d.enumerable || false, d.configurable = true, "value" in d && (d.writable = true), Object.defineProperty(l, d.key, d);
                }
              }
              return function(l, g, n) {
                return g && i(l.prototype, g), n && i(l, n), l;
              };
            })();
            function e(i, l) {
              if (!(i instanceof l))
                throw new TypeError("Cannot call a class as a function");
            }
            var t = (function() {
              function i(l, g) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                e(this, i), this.sequence1 = l, this.sequence2 = g, this.match_score = n, this.mismatch_penalty = d, this.gap_penalty = r, this.iMax = l.length + 1, this.jMax = g.length + 1, this.grid = new Array(this.iMax);
                for (var h = 0; h < this.iMax; h++) {
                  this.grid[h] = new Array(this.jMax);
                  for (var a = 0; a < this.jMax; a++)
                    this.grid[h][a] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var p2 = 0; p2 < this.iMax; p2++) {
                  this.tracebackGrid[p2] = new Array(this.jMax);
                  for (var v = 0; v < this.jMax; v++)
                    this.tracebackGrid[p2][v] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return o(i, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var g = 1; g < this.jMax; g++)
                    this.grid[0][g] = this.grid[0][g - 1] + this.gap_penalty, this.tracebackGrid[0][g] = [false, false, true];
                  for (var n = 1; n < this.iMax; n++)
                    this.grid[n][0] = this.grid[n - 1][0] + this.gap_penalty, this.tracebackGrid[n][0] = [false, true, false];
                  for (var d = 1; d < this.iMax; d++)
                    for (var r = 1; r < this.jMax; r++) {
                      var h = void 0;
                      this.sequence1[d - 1] === this.sequence2[r - 1] ? h = this.grid[d - 1][r - 1] + this.match_score : h = this.grid[d - 1][r - 1] + this.mismatch_penalty;
                      var a = this.grid[d - 1][r] + this.gap_penalty, p2 = this.grid[d][r - 1] + this.gap_penalty, v = [h, a, p2], D = this.arrayAllMaxIndexes(v);
                      this.grid[d][r] = v[D[0]], this.tracebackGrid[d][r] = [D.includes(0), D.includes(1), D.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var g = [];
                  for (g.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); g[0]; ) {
                    var n = g[0], d = this.tracebackGrid[n.pos[0]][n.pos[1]];
                    d[0] && g.push({
                      pos: [n.pos[0] - 1, n.pos[1] - 1],
                      seq1: this.sequence1[n.pos[0] - 1] + n.seq1,
                      seq2: this.sequence2[n.pos[1] - 1] + n.seq2
                    }), d[1] && g.push({
                      pos: [n.pos[0] - 1, n.pos[1]],
                      seq1: this.sequence1[n.pos[0] - 1] + n.seq1,
                      seq2: "-" + n.seq2
                    }), d[2] && g.push({
                      pos: [n.pos[0], n.pos[1] - 1],
                      seq1: "-" + n.seq1,
                      seq2: this.sequence2[n.pos[1] - 1] + n.seq2
                    }), n.pos[0] === 0 && n.pos[1] === 0 && this.alignments.push({
                      sequence1: n.seq1,
                      sequence2: n.seq2
                    }), g.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(g, n) {
                  for (var d = [], r = -1; (r = g.indexOf(n, r + 1)) !== -1; )
                    d.push(r);
                  return d;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(g) {
                  return this.getAllIndexes(g, Math.max.apply(null, g));
                }
              }]), i;
            })();
            N.exports = t;
          }),
          /* 26 */
          /***/
          (function(N, I, L) {
            var o = function() {
            };
            o.FDLayout = L(18), o.FDLayoutConstants = L(7), o.FDLayoutEdge = L(19), o.FDLayoutNode = L(20), o.DimensionD = L(21), o.HashMap = L(22), o.HashSet = L(23), o.IGeometry = L(8), o.IMath = L(9), o.Integer = L(10), o.Point = L(12), o.PointD = L(4), o.RandomSeed = L(16), o.RectangleD = L(13), o.Transform = L(17), o.UniqueIDGeneretor = L(14), o.Quicksort = L(24), o.LinkedList = L(11), o.LGraphObject = L(2), o.LGraph = L(5), o.LEdge = L(1), o.LGraphManager = L(6), o.LNode = L(3), o.Layout = L(15), o.LayoutConstants = L(0), o.NeedlemanWunsch = L(25), N.exports = o;
          }),
          /* 27 */
          /***/
          (function(N, I, L) {
            function o() {
              this.listeners = [];
            }
            var e = o.prototype;
            e.addListener = function(t, i) {
              this.listeners.push({
                event: t,
                callback: i
              });
            }, e.removeListener = function(t, i) {
              for (var l = this.listeners.length; l >= 0; l--) {
                var g = this.listeners[l];
                g.event === t && g.callback === i && this.listeners.splice(l, 1);
              }
            }, e.emit = function(t, i) {
              for (var l = 0; l < this.listeners.length; l++) {
                var g = this.listeners[l];
                t === g.event && g.callback(i);
              }
            }, N.exports = o;
          })
          /******/
        ])
      );
    });
  })(Q)), Q.exports;
}
var ct = Z.exports, z;
function pt() {
  return z || (z = 1, (function(G, b) {
    (function(I, L) {
      G.exports = L(ft());
    })(ct, function(N) {
      return (
        /******/
        (function(I) {
          var L = {};
          function o(e) {
            if (L[e])
              return L[e].exports;
            var t = L[e] = {
              /******/
              i: e,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return I[e].call(t.exports, t, t.exports, o), t.l = true, t.exports;
          }
          return o.m = I, o.c = L, o.i = function(e) {
            return e;
          }, o.d = function(e, t, i) {
            o.o(e, t) || Object.defineProperty(e, t, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: i
              /******/
            });
          }, o.n = function(e) {
            var t = e && e.__esModule ? (
              /******/
              (function() {
                return e.default;
              })
            ) : (
              /******/
              (function() {
                return e;
              })
            );
            return o.d(t, "a", t), t;
          }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }, o.p = "", o(o.s = 7);
        })([
          /* 0 */
          /***/
          (function(I, L) {
            I.exports = N;
          }),
          /* 1 */
          /***/
          (function(I, L, o) {
            var e = o(0).FDLayoutConstants;
            function t() {
            }
            for (var i in e)
              t[i] = e[i];
            t.DEFAULT_USE_MULTI_LEVEL_SCALING = false, t.DEFAULT_RADIAL_SEPARATION = e.DEFAULT_EDGE_LENGTH, t.DEFAULT_COMPONENT_SEPERATION = 60, t.TILE = true, t.TILING_PADDING_VERTICAL = 10, t.TILING_PADDING_HORIZONTAL = 10, t.TREE_REDUCTION_ON_INCREMENTAL = false, I.exports = t;
          }),
          /* 2 */
          /***/
          (function(I, L, o) {
            var e = o(0).FDLayoutEdge;
            function t(l, g, n) {
              e.call(this, l, g, n);
            }
            t.prototype = Object.create(e.prototype);
            for (var i in e)
              t[i] = e[i];
            I.exports = t;
          }),
          /* 3 */
          /***/
          (function(I, L, o) {
            var e = o(0).LGraph;
            function t(l, g, n) {
              e.call(this, l, g, n);
            }
            t.prototype = Object.create(e.prototype);
            for (var i in e)
              t[i] = e[i];
            I.exports = t;
          }),
          /* 4 */
          /***/
          (function(I, L, o) {
            var e = o(0).LGraphManager;
            function t(l) {
              e.call(this, l);
            }
            t.prototype = Object.create(e.prototype);
            for (var i in e)
              t[i] = e[i];
            I.exports = t;
          }),
          /* 5 */
          /***/
          (function(I, L, o) {
            var e = o(0).FDLayoutNode, t = o(0).IMath;
            function i(g, n, d, r) {
              e.call(this, g, n, d, r);
            }
            i.prototype = Object.create(e.prototype);
            for (var l in e)
              i[l] = e[l];
            i.prototype.move = function() {
              var g = this.graphManager.getLayout();
              this.displacementX = g.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = g.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > g.coolingFactor * g.maxNodeDisplacement && (this.displacementX = g.coolingFactor * g.maxNodeDisplacement * t.sign(this.displacementX)), Math.abs(this.displacementY) > g.coolingFactor * g.maxNodeDisplacement && (this.displacementY = g.coolingFactor * g.maxNodeDisplacement * t.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), g.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
            }, i.prototype.propogateDisplacementToChildren = function(g, n) {
              for (var d = this.getChild().getNodes(), r, h = 0; h < d.length; h++)
                r = d[h], r.getChild() == null ? (r.moveBy(g, n), r.displacementX += g, r.displacementY += n) : r.propogateDisplacementToChildren(g, n);
            }, i.prototype.setPred1 = function(g) {
              this.pred1 = g;
            }, i.prototype.getPred1 = function() {
              return pred1;
            }, i.prototype.getPred2 = function() {
              return pred2;
            }, i.prototype.setNext = function(g) {
              this.next = g;
            }, i.prototype.getNext = function() {
              return next;
            }, i.prototype.setProcessed = function(g) {
              this.processed = g;
            }, i.prototype.isProcessed = function() {
              return processed;
            }, I.exports = i;
          }),
          /* 6 */
          /***/
          (function(I, L, o) {
            var e = o(0).FDLayout, t = o(4), i = o(3), l = o(5), g = o(2), n = o(1), d = o(0).FDLayoutConstants, r = o(0).LayoutConstants, h = o(0).Point, a = o(0).PointD, p2 = o(0).Layout, v = o(0).Integer, D = o(0).IGeometry, u = o(0).LGraph, T = o(0).Transform;
            function y() {
              e.call(this), this.toBeTiled = {};
            }
            y.prototype = Object.create(e.prototype);
            for (var O in e)
              y[O] = e[O];
            y.prototype.newGraphManager = function() {
              var s = new t(this);
              return this.graphManager = s, s;
            }, y.prototype.newGraph = function(s) {
              return new i(null, this.graphManager, s);
            }, y.prototype.newNode = function(s) {
              return new l(this.graphManager, s);
            }, y.prototype.newEdge = function(s) {
              return new g(null, null, s);
            }, y.prototype.initParameters = function() {
              e.prototype.initParameters.call(this, arguments), this.isSubLayout || (n.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = n.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = n.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = d.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = d.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = d.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = d.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = d.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / d.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = d.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
            }, y.prototype.layout = function() {
              var s = r.DEFAULT_CREATE_BENDS_AS_NEEDED;
              return s && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
            }, y.prototype.classicLayout = function() {
              if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                if (n.TREE_REDUCTION_ON_INCREMENTAL) {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var f = new Set(this.getAllNodes()), c = this.nodesWithGravity.filter(function(m) {
                    return f.has(m);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(c);
                }
              } else {
                var s = this.getFlatForest();
                if (s.length > 0)
                  this.positionNodesRadially(s);
                else {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var f = new Set(this.getAllNodes()), c = this.nodesWithGravity.filter(function(E) {
                    return f.has(E);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(c), this.positionNodesRandomly();
                }
              }
              return this.initSpringEmbedder(), this.runSpringEmbedder(), true;
            }, y.prototype.tick = function() {
              if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                if (this.prunedNodesAll.length > 0)
                  this.isTreeGrowing = true;
                else
                  return true;
              if (this.totalIterations % d.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                if (this.isConverged())
                  if (this.prunedNodesAll.length > 0)
                    this.isTreeGrowing = true;
                  else
                    return true;
                this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
              }
              if (this.isTreeGrowing) {
                if (this.growTreeIterations % 10 == 0)
                  if (this.prunedNodesAll.length > 0) {
                    this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                    var s = new Set(this.getAllNodes()), f = this.nodesWithGravity.filter(function(A) {
                      return s.has(A);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(f), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                  } else
                    this.isTreeGrowing = false, this.isGrowthFinished = true;
                this.growTreeIterations++;
              }
              if (this.isGrowthFinished) {
                if (this.isConverged())
                  return true;
                this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
              }
              var c = !this.isTreeGrowing && !this.isGrowthFinished, E = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
              return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(c, E), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
            }, y.prototype.getPositionsData = function() {
              for (var s = this.graphManager.getAllNodes(), f = {}, c = 0; c < s.length; c++) {
                var E = s[c].rect, A = s[c].id;
                f[A] = {
                  id: A,
                  x: E.getCenterX(),
                  y: E.getCenterY(),
                  w: E.width,
                  h: E.height
                };
              }
              return f;
            }, y.prototype.runSpringEmbedder = function() {
              this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
              var s = false;
              if (d.ANIMATE === "during")
                this.emit("layoutstarted");
              else {
                for (; !s; )
                  s = this.tick();
                this.graphManager.updateBounds();
              }
            }, y.prototype.calculateNodesToApplyGravitationTo = function() {
              var s = [], f, c = this.graphManager.getGraphs(), E = c.length, A;
              for (A = 0; A < E; A++)
                f = c[A], f.updateConnected(), f.isConnected || (s = s.concat(f.getNodes()));
              return s;
            }, y.prototype.createBendpoints = function() {
              var s = [];
              s = s.concat(this.graphManager.getAllEdges());
              var f = /* @__PURE__ */ new Set(), c;
              for (c = 0; c < s.length; c++) {
                var E = s[c];
                if (!f.has(E)) {
                  var A = E.getSource(), m = E.getTarget();
                  if (A == m)
                    E.getBendpoints().push(new a()), E.getBendpoints().push(new a()), this.createDummyNodesForBendpoints(E), f.add(E);
                  else {
                    var C = [];
                    if (C = C.concat(A.getEdgeListToNode(m)), C = C.concat(m.getEdgeListToNode(A)), !f.has(C[0])) {
                      if (C.length > 1) {
                        var R;
                        for (R = 0; R < C.length; R++) {
                          var M = C[R];
                          M.getBendpoints().push(new a()), this.createDummyNodesForBendpoints(M);
                        }
                      }
                      C.forEach(function(S) {
                        f.add(S);
                      });
                    }
                  }
                }
                if (f.size == s.length)
                  break;
              }
            }, y.prototype.positionNodesRadially = function(s) {
              for (var f = new h(0, 0), c = Math.ceil(Math.sqrt(s.length)), E = 0, A = 0, m = 0, C = new a(0, 0), R = 0; R < s.length; R++) {
                R % c == 0 && (m = 0, A = E, R != 0 && (A += n.DEFAULT_COMPONENT_SEPERATION), E = 0);
                var M = s[R], S = p2.findCenterOfTree(M);
                f.x = m, f.y = A, C = y.radialLayout(M, S, f), C.y > E && (E = Math.floor(C.y)), m = Math.floor(C.x + n.DEFAULT_COMPONENT_SEPERATION);
              }
              this.transform(new a(r.WORLD_CENTER_X - C.x / 2, r.WORLD_CENTER_Y - C.y / 2));
            }, y.radialLayout = function(s, f, c) {
              var E = Math.max(this.maxDiagonalInTree(s), n.DEFAULT_RADIAL_SEPARATION);
              y.branchRadialLayout(f, null, 0, 359, 0, E);
              var A = u.calculateBounds(s), m = new T();
              m.setDeviceOrgX(A.getMinX()), m.setDeviceOrgY(A.getMinY()), m.setWorldOrgX(c.x), m.setWorldOrgY(c.y);
              for (var C = 0; C < s.length; C++) {
                var R = s[C];
                R.transform(m);
              }
              var M = new a(A.getMaxX(), A.getMaxY());
              return m.inverseTransformPoint(M);
            }, y.branchRadialLayout = function(s, f, c, E, A, m) {
              var C = (E - c + 1) / 2;
              C < 0 && (C += 180);
              var R = (C + c) % 360, M = R * D.TWO_PI / 360, S = A * Math.cos(M), Y = A * Math.sin(M);
              s.setCenter(S, Y);
              var w = [];
              w = w.concat(s.getEdges());
              var x = w.length;
              f != null && x--;
              for (var F2 = 0, U = w.length, P, _ = s.getEdgesBetween(f); _.length > 1; ) {
                var X = _[0];
                _.splice(0, 1);
                var H = w.indexOf(X);
                H >= 0 && w.splice(H, 1), U--, x--;
              }
              f != null ? P = (w.indexOf(_[0]) + 1) % U : P = 0;
              for (var W = Math.abs(E - c) / x, B = P; F2 != x; B = ++B % U) {
                var K = w[B].getOtherEnd(s);
                if (K != f) {
                  var q = (c + F2 * W) % 360, ht2 = (q + W) % 360;
                  y.branchRadialLayout(K, s, q, ht2, A + m, m), F2++;
                }
              }
            }, y.maxDiagonalInTree = function(s) {
              for (var f = v.MIN_VALUE, c = 0; c < s.length; c++) {
                var E = s[c], A = E.getDiagonal();
                A > f && (f = A);
              }
              return f;
            }, y.prototype.calcRepulsionRange = function() {
              return 2 * (this.level + 1) * this.idealEdgeLength;
            }, y.prototype.groupZeroDegreeMembers = function() {
              var s = this, f = {};
              this.memberGroups = {}, this.idToDummyNode = {};
              for (var c = [], E = this.graphManager.getAllNodes(), A = 0; A < E.length; A++) {
                var m = E[A], C = m.getParent();
                this.getNodeDegreeWithChildren(m) === 0 && (C.id == null || !this.getToBeTiled(C)) && c.push(m);
              }
              for (var A = 0; A < c.length; A++) {
                var m = c[A], R = m.getParent().id;
                typeof f[R] > "u" && (f[R] = []), f[R] = f[R].concat(m);
              }
              Object.keys(f).forEach(function(M) {
                if (f[M].length > 1) {
                  var S = "DummyCompound_" + M;
                  s.memberGroups[S] = f[M];
                  var Y = f[M][0].getParent(), w = new l(s.graphManager);
                  w.id = S, w.paddingLeft = Y.paddingLeft || 0, w.paddingRight = Y.paddingRight || 0, w.paddingBottom = Y.paddingBottom || 0, w.paddingTop = Y.paddingTop || 0, s.idToDummyNode[S] = w;
                  var x = s.getGraphManager().add(s.newGraph(), w), F2 = Y.getChild();
                  F2.add(w);
                  for (var U = 0; U < f[M].length; U++) {
                    var P = f[M][U];
                    F2.remove(P), x.add(P);
                  }
                }
              });
            }, y.prototype.clearCompounds = function() {
              var s = {}, f = {};
              this.performDFSOnCompounds();
              for (var c = 0; c < this.compoundOrder.length; c++)
                f[this.compoundOrder[c].id] = this.compoundOrder[c], s[this.compoundOrder[c].id] = [].concat(this.compoundOrder[c].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[c].getChild()), this.compoundOrder[c].child = null;
              this.graphManager.resetAllNodes(), this.tileCompoundMembers(s, f);
            }, y.prototype.clearZeroDegreeMembers = function() {
              var s = this, f = this.tiledZeroDegreePack = [];
              Object.keys(this.memberGroups).forEach(function(c) {
                var E = s.idToDummyNode[c];
                f[c] = s.tileNodes(s.memberGroups[c], E.paddingLeft + E.paddingRight), E.rect.width = f[c].width, E.rect.height = f[c].height;
              });
            }, y.prototype.repopulateCompounds = function() {
              for (var s = this.compoundOrder.length - 1; s >= 0; s--) {
                var f = this.compoundOrder[s], c = f.id, E = f.paddingLeft, A = f.paddingTop;
                this.adjustLocations(this.tiledMemberPack[c], f.rect.x, f.rect.y, E, A);
              }
            }, y.prototype.repopulateZeroDegreeMembers = function() {
              var s = this, f = this.tiledZeroDegreePack;
              Object.keys(f).forEach(function(c) {
                var E = s.idToDummyNode[c], A = E.paddingLeft, m = E.paddingTop;
                s.adjustLocations(f[c], E.rect.x, E.rect.y, A, m);
              });
            }, y.prototype.getToBeTiled = function(s) {
              var f = s.id;
              if (this.toBeTiled[f] != null)
                return this.toBeTiled[f];
              var c = s.getChild();
              if (c == null)
                return this.toBeTiled[f] = false, false;
              for (var E = c.getNodes(), A = 0; A < E.length; A++) {
                var m = E[A];
                if (this.getNodeDegree(m) > 0)
                  return this.toBeTiled[f] = false, false;
                if (m.getChild() == null) {
                  this.toBeTiled[m.id] = false;
                  continue;
                }
                if (!this.getToBeTiled(m))
                  return this.toBeTiled[f] = false, false;
              }
              return this.toBeTiled[f] = true, true;
            }, y.prototype.getNodeDegree = function(s) {
              s.id;
              for (var f = s.getEdges(), c = 0, E = 0; E < f.length; E++) {
                var A = f[E];
                A.getSource().id !== A.getTarget().id && (c = c + 1);
              }
              return c;
            }, y.prototype.getNodeDegreeWithChildren = function(s) {
              var f = this.getNodeDegree(s);
              if (s.getChild() == null)
                return f;
              for (var c = s.getChild().getNodes(), E = 0; E < c.length; E++) {
                var A = c[E];
                f += this.getNodeDegreeWithChildren(A);
              }
              return f;
            }, y.prototype.performDFSOnCompounds = function() {
              this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
            }, y.prototype.fillCompexOrderByDFS = function(s) {
              for (var f = 0; f < s.length; f++) {
                var c = s[f];
                c.getChild() != null && this.fillCompexOrderByDFS(c.getChild().getNodes()), this.getToBeTiled(c) && this.compoundOrder.push(c);
              }
            }, y.prototype.adjustLocations = function(s, f, c, E, A) {
              f += E, c += A;
              for (var m = f, C = 0; C < s.rows.length; C++) {
                var R = s.rows[C];
                f = m;
                for (var M = 0, S = 0; S < R.length; S++) {
                  var Y = R[S];
                  Y.rect.x = f, Y.rect.y = c, f += Y.rect.width + s.horizontalPadding, Y.rect.height > M && (M = Y.rect.height);
                }
                c += M + s.verticalPadding;
              }
            }, y.prototype.tileCompoundMembers = function(s, f) {
              var c = this;
              this.tiledMemberPack = [], Object.keys(s).forEach(function(E) {
                var A = f[E];
                c.tiledMemberPack[E] = c.tileNodes(s[E], A.paddingLeft + A.paddingRight), A.rect.width = c.tiledMemberPack[E].width, A.rect.height = c.tiledMemberPack[E].height;
              });
            }, y.prototype.tileNodes = function(s, f) {
              var c = n.TILING_PADDING_VERTICAL, E = n.TILING_PADDING_HORIZONTAL, A = {
                rows: [],
                rowWidth: [],
                rowHeight: [],
                width: 0,
                height: f,
                // assume minHeight equals to minWidth
                verticalPadding: c,
                horizontalPadding: E
              };
              s.sort(function(R, M) {
                return R.rect.width * R.rect.height > M.rect.width * M.rect.height ? -1 : R.rect.width * R.rect.height < M.rect.width * M.rect.height ? 1 : 0;
              });
              for (var m = 0; m < s.length; m++) {
                var C = s[m];
                A.rows.length == 0 ? this.insertNodeToRow(A, C, 0, f) : this.canAddHorizontal(A, C.rect.width, C.rect.height) ? this.insertNodeToRow(A, C, this.getShortestRowIndex(A), f) : this.insertNodeToRow(A, C, A.rows.length, f), this.shiftToLastRow(A);
              }
              return A;
            }, y.prototype.insertNodeToRow = function(s, f, c, E) {
              var A = E;
              if (c == s.rows.length) {
                var m = [];
                s.rows.push(m), s.rowWidth.push(A), s.rowHeight.push(0);
              }
              var C = s.rowWidth[c] + f.rect.width;
              s.rows[c].length > 0 && (C += s.horizontalPadding), s.rowWidth[c] = C, s.width < C && (s.width = C);
              var R = f.rect.height;
              c > 0 && (R += s.verticalPadding);
              var M = 0;
              R > s.rowHeight[c] && (M = s.rowHeight[c], s.rowHeight[c] = R, M = s.rowHeight[c] - M), s.height += M, s.rows[c].push(f);
            }, y.prototype.getShortestRowIndex = function(s) {
              for (var f = -1, c = Number.MAX_VALUE, E = 0; E < s.rows.length; E++)
                s.rowWidth[E] < c && (f = E, c = s.rowWidth[E]);
              return f;
            }, y.prototype.getLongestRowIndex = function(s) {
              for (var f = -1, c = Number.MIN_VALUE, E = 0; E < s.rows.length; E++)
                s.rowWidth[E] > c && (f = E, c = s.rowWidth[E]);
              return f;
            }, y.prototype.canAddHorizontal = function(s, f, c) {
              var E = this.getShortestRowIndex(s);
              if (E < 0)
                return true;
              var A = s.rowWidth[E];
              if (A + s.horizontalPadding + f <= s.width) return true;
              var m = 0;
              s.rowHeight[E] < c && E > 0 && (m = c + s.verticalPadding - s.rowHeight[E]);
              var C;
              s.width - A >= f + s.horizontalPadding ? C = (s.height + m) / (A + f + s.horizontalPadding) : C = (s.height + m) / s.width, m = c + s.verticalPadding;
              var R;
              return s.width < f ? R = (s.height + m) / f : R = (s.height + m) / s.width, R < 1 && (R = 1 / R), C < 1 && (C = 1 / C), C < R;
            }, y.prototype.shiftToLastRow = function(s) {
              var f = this.getLongestRowIndex(s), c = s.rowWidth.length - 1, E = s.rows[f], A = E[E.length - 1], m = A.width + s.horizontalPadding;
              if (s.width - s.rowWidth[c] > m && f != c) {
                E.splice(-1, 1), s.rows[c].push(A), s.rowWidth[f] = s.rowWidth[f] - m, s.rowWidth[c] = s.rowWidth[c] + m, s.width = s.rowWidth[instance.getLongestRowIndex(s)];
                for (var C = Number.MIN_VALUE, R = 0; R < E.length; R++)
                  E[R].height > C && (C = E[R].height);
                f > 0 && (C += s.verticalPadding);
                var M = s.rowHeight[f] + s.rowHeight[c];
                s.rowHeight[f] = C, s.rowHeight[c] < A.height + s.verticalPadding && (s.rowHeight[c] = A.height + s.verticalPadding);
                var S = s.rowHeight[f] + s.rowHeight[c];
                s.height += S - M, this.shiftToLastRow(s);
              }
            }, y.prototype.tilingPreLayout = function() {
              n.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
            }, y.prototype.tilingPostLayout = function() {
              n.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
            }, y.prototype.reduceTrees = function() {
              for (var s = [], f = true, c; f; ) {
                var E = this.graphManager.getAllNodes(), A = [];
                f = false;
                for (var m = 0; m < E.length; m++)
                  c = E[m], c.getEdges().length == 1 && !c.getEdges()[0].isInterGraph && c.getChild() == null && (A.push([c, c.getEdges()[0], c.getOwner()]), f = true);
                if (f == true) {
                  for (var C = [], R = 0; R < A.length; R++)
                    A[R][0].getEdges().length == 1 && (C.push(A[R]), A[R][0].getOwner().remove(A[R][0]));
                  s.push(C), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }
              }
              this.prunedNodesAll = s;
            }, y.prototype.growTree = function(s) {
              for (var f = s.length, c = s[f - 1], E, A = 0; A < c.length; A++)
                E = c[A], this.findPlaceforPrunedNode(E), E[2].add(E[0]), E[2].add(E[1], E[1].source, E[1].target);
              s.splice(s.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
            }, y.prototype.findPlaceforPrunedNode = function(s) {
              var f, c, E = s[0];
              E == s[1].source ? c = s[1].target : c = s[1].source;
              var A = c.startX, m = c.finishX, C = c.startY, R = c.finishY, M = 0, S = 0, Y = 0, w = 0, x = [M, Y, S, w];
              if (C > 0)
                for (var F2 = A; F2 <= m; F2++)
                  x[0] += this.grid[F2][C - 1].length + this.grid[F2][C].length - 1;
              if (m < this.grid.length - 1)
                for (var F2 = C; F2 <= R; F2++)
                  x[1] += this.grid[m + 1][F2].length + this.grid[m][F2].length - 1;
              if (R < this.grid[0].length - 1)
                for (var F2 = A; F2 <= m; F2++)
                  x[2] += this.grid[F2][R + 1].length + this.grid[F2][R].length - 1;
              if (A > 0)
                for (var F2 = C; F2 <= R; F2++)
                  x[3] += this.grid[A - 1][F2].length + this.grid[A][F2].length - 1;
              for (var U = v.MAX_VALUE, P, _, X = 0; X < x.length; X++)
                x[X] < U ? (U = x[X], P = 1, _ = X) : x[X] == U && P++;
              if (P == 3 && U == 0)
                x[0] == 0 && x[1] == 0 && x[2] == 0 ? f = 1 : x[0] == 0 && x[1] == 0 && x[3] == 0 ? f = 0 : x[0] == 0 && x[2] == 0 && x[3] == 0 ? f = 3 : x[1] == 0 && x[2] == 0 && x[3] == 0 && (f = 2);
              else if (P == 2 && U == 0) {
                var H = Math.floor(Math.random() * 2);
                x[0] == 0 && x[1] == 0 ? H == 0 ? f = 0 : f = 1 : x[0] == 0 && x[2] == 0 ? H == 0 ? f = 0 : f = 2 : x[0] == 0 && x[3] == 0 ? H == 0 ? f = 0 : f = 3 : x[1] == 0 && x[2] == 0 ? H == 0 ? f = 1 : f = 2 : x[1] == 0 && x[3] == 0 ? H == 0 ? f = 1 : f = 3 : H == 0 ? f = 2 : f = 3;
              } else if (P == 4 && U == 0) {
                var H = Math.floor(Math.random() * 4);
                f = H;
              } else
                f = _;
              f == 0 ? E.setCenter(c.getCenterX(), c.getCenterY() - c.getHeight() / 2 - d.DEFAULT_EDGE_LENGTH - E.getHeight() / 2) : f == 1 ? E.setCenter(c.getCenterX() + c.getWidth() / 2 + d.DEFAULT_EDGE_LENGTH + E.getWidth() / 2, c.getCenterY()) : f == 2 ? E.setCenter(c.getCenterX(), c.getCenterY() + c.getHeight() / 2 + d.DEFAULT_EDGE_LENGTH + E.getHeight() / 2) : E.setCenter(c.getCenterX() - c.getWidth() / 2 - d.DEFAULT_EDGE_LENGTH - E.getWidth() / 2, c.getCenterY());
            }, I.exports = y;
          }),
          /* 7 */
          /***/
          (function(I, L, o) {
            var e = {};
            e.layoutBase = o(0), e.CoSEConstants = o(1), e.CoSEEdge = o(2), e.CoSEGraph = o(3), e.CoSEGraphManager = o(4), e.CoSELayout = o(6), e.CoSENode = o(5), I.exports = e;
          })
          /******/
        ])
      );
    });
  })(Z)), Z.exports;
}
var dt = k.exports, J;
function vt() {
  return J || (J = 1, (function(G, b) {
    (function(I, L) {
      G.exports = L(pt());
    })(dt, function(N) {
      return (
        /******/
        (function(I) {
          var L = {};
          function o(e) {
            if (L[e])
              return L[e].exports;
            var t = L[e] = {
              /******/
              i: e,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return I[e].call(t.exports, t, t.exports, o), t.l = true, t.exports;
          }
          return o.m = I, o.c = L, o.i = function(e) {
            return e;
          }, o.d = function(e, t, i) {
            o.o(e, t) || Object.defineProperty(e, t, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: i
              /******/
            });
          }, o.n = function(e) {
            var t = e && e.__esModule ? (
              /******/
              (function() {
                return e.default;
              })
            ) : (
              /******/
              (function() {
                return e;
              })
            );
            return o.d(t, "a", t), t;
          }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }, o.p = "", o(o.s = 1);
        })([
          /* 0 */
          /***/
          (function(I, L) {
            I.exports = N;
          }),
          /* 1 */
          /***/
          (function(I, L, o) {
            var e = o(0).layoutBase.LayoutConstants, t = o(0).layoutBase.FDLayoutConstants, i = o(0).CoSEConstants, l = o(0).CoSELayout, g = o(0).CoSENode, n = o(0).layoutBase.PointD, d = o(0).layoutBase.DimensionD, r = {
              // Called on `layoutready`
              ready: function() {
              },
              // Called on `layoutstop`
              stop: function() {
              },
              // 'draft', 'default' or 'proof" 
              // - 'draft' fast cooling rate 
              // - 'default' moderate cooling rate 
              // - "proof" slow cooling rate
              quality: "default",
              // include labels in node dimensions
              nodeDimensionsIncludeLabels: false,
              // number of ticks per frame; higher is faster but more jerky
              refresh: 30,
              // Whether to fit the network view after when done
              fit: true,
              // Padding on fit
              padding: 10,
              // Whether to enable incremental mode
              randomize: true,
              // Node repulsion (non overlapping) multiplier
              nodeRepulsion: 4500,
              // Ideal edge (non nested) length
              idealEdgeLength: 50,
              // Divisor to compute edge forces
              edgeElasticity: 0.45,
              // Nesting factor (multiplier) to compute ideal edge length for nested edges
              nestingFactor: 0.1,
              // Gravity force (constant)
              gravity: 0.25,
              // Maximum number of iterations to perform
              numIter: 2500,
              // For enabling tiling
              tile: true,
              // Type of layout animation. The option set is {'during', 'end', false}
              animate: "end",
              // Duration for animate:end
              animationDuration: 500,
              // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
              tilingPaddingVertical: 10,
              // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
              tilingPaddingHorizontal: 10,
              // Gravity range (constant) for compounds
              gravityRangeCompound: 1.5,
              // Gravity force (constant) for compounds
              gravityCompound: 1,
              // Gravity range (constant)
              gravityRange: 3.8,
              // Initial cooling factor for incremental layout
              initialEnergyOnIncremental: 0.5
            };
            function h(D, u) {
              var T = {};
              for (var y in D)
                T[y] = D[y];
              for (var y in u)
                T[y] = u[y];
              return T;
            }
            function a(D) {
              this.options = h(r, D), p2(this.options);
            }
            var p2 = function(u) {
              u.nodeRepulsion != null && (i.DEFAULT_REPULSION_STRENGTH = t.DEFAULT_REPULSION_STRENGTH = u.nodeRepulsion), u.idealEdgeLength != null && (i.DEFAULT_EDGE_LENGTH = t.DEFAULT_EDGE_LENGTH = u.idealEdgeLength), u.edgeElasticity != null && (i.DEFAULT_SPRING_STRENGTH = t.DEFAULT_SPRING_STRENGTH = u.edgeElasticity), u.nestingFactor != null && (i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = u.nestingFactor), u.gravity != null && (i.DEFAULT_GRAVITY_STRENGTH = t.DEFAULT_GRAVITY_STRENGTH = u.gravity), u.numIter != null && (i.MAX_ITERATIONS = t.MAX_ITERATIONS = u.numIter), u.gravityRange != null && (i.DEFAULT_GRAVITY_RANGE_FACTOR = t.DEFAULT_GRAVITY_RANGE_FACTOR = u.gravityRange), u.gravityCompound != null && (i.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH = u.gravityCompound), u.gravityRangeCompound != null && (i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = u.gravityRangeCompound), u.initialEnergyOnIncremental != null && (i.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.DEFAULT_COOLING_FACTOR_INCREMENTAL = u.initialEnergyOnIncremental), u.quality == "draft" ? e.QUALITY = 0 : u.quality == "proof" ? e.QUALITY = 2 : e.QUALITY = 1, i.NODE_DIMENSIONS_INCLUDE_LABELS = t.NODE_DIMENSIONS_INCLUDE_LABELS = e.NODE_DIMENSIONS_INCLUDE_LABELS = u.nodeDimensionsIncludeLabels, i.DEFAULT_INCREMENTAL = t.DEFAULT_INCREMENTAL = e.DEFAULT_INCREMENTAL = !u.randomize, i.ANIMATE = t.ANIMATE = e.ANIMATE = u.animate, i.TILE = u.tile, i.TILING_PADDING_VERTICAL = typeof u.tilingPaddingVertical == "function" ? u.tilingPaddingVertical.call() : u.tilingPaddingVertical, i.TILING_PADDING_HORIZONTAL = typeof u.tilingPaddingHorizontal == "function" ? u.tilingPaddingHorizontal.call() : u.tilingPaddingHorizontal;
            };
            a.prototype.run = function() {
              var D, u, T = this.options;
              this.idToLNode = {};
              var y = this.layout = new l(), O = this;
              O.stopped = false, this.cy = this.options.cy, this.cy.trigger({ type: "layoutstart", layout: this });
              var s = y.newGraphManager();
              this.gm = s;
              var f = this.options.eles.nodes(), c = this.options.eles.edges();
              this.root = s.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(f), y);
              for (var E = 0; E < c.length; E++) {
                var A = c[E], m = this.idToLNode[A.data("source")], C = this.idToLNode[A.data("target")];
                if (m !== C && m.getEdgesBetween(C).length == 0) {
                  var R = s.add(y.newEdge(), m, C);
                  R.id = A.id();
                }
              }
              var M = function(w, x) {
                typeof w == "number" && (w = x);
                var F2 = w.data("id"), U = O.idToLNode[F2];
                return {
                  x: U.getRect().getCenterX(),
                  y: U.getRect().getCenterY()
                };
              }, S = function Y() {
                for (var w = function() {
                  T.fit && T.cy.fit(T.eles, T.padding), D || (D = true, O.cy.one("layoutready", T.ready), O.cy.trigger({ type: "layoutready", layout: O }));
                }, x = O.options.refresh, F2, U = 0; U < x && !F2; U++)
                  F2 = O.stopped || O.layout.tick();
                if (F2) {
                  y.checkLayoutSuccess() && !y.isSubLayout && y.doPostLayout(), y.tilingPostLayout && y.tilingPostLayout(), y.isLayoutFinished = true, O.options.eles.nodes().positions(M), w(), O.cy.one("layoutstop", O.options.stop), O.cy.trigger({ type: "layoutstop", layout: O }), u && cancelAnimationFrame(u), D = false;
                  return;
                }
                var P = O.layout.getPositionsData();
                T.eles.nodes().positions(function(_, X) {
                  if (typeof _ == "number" && (_ = X), !_.isParent()) {
                    for (var H = _.id(), W = P[H], B = _; W == null && (W = P[B.data("parent")] || P["DummyCompound_" + B.data("parent")], P[H] = W, B = B.parent()[0], B != null); )
                      ;
                    return W != null ? {
                      x: W.x,
                      y: W.y
                    } : {
                      x: _.position("x"),
                      y: _.position("y")
                    };
                  }
                }), w(), u = requestAnimationFrame(Y);
              };
              return y.addListener("layoutstarted", function() {
                O.options.animate === "during" && (u = requestAnimationFrame(S));
              }), y.runLayout(), this.options.animate !== "during" && (O.options.eles.nodes().not(":parent").layoutPositions(O, O.options, M), D = false), this;
            }, a.prototype.getTopMostNodes = function(D) {
              for (var u = {}, T = 0; T < D.length; T++)
                u[D[T].id()] = true;
              var y = D.filter(function(O, s) {
                typeof O == "number" && (O = s);
                for (var f = O.parent()[0]; f != null; ) {
                  if (u[f.id()])
                    return false;
                  f = f.parent()[0];
                }
                return true;
              });
              return y;
            }, a.prototype.processChildrenList = function(D, u, T) {
              for (var y = u.length, O = 0; O < y; O++) {
                var s = u[O], f = s.children(), c, E = s.layoutDimensions({
                  nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
                });
                if (s.outerWidth() != null && s.outerHeight() != null ? c = D.add(new g(T.graphManager, new n(s.position("x") - E.w / 2, s.position("y") - E.h / 2), new d(parseFloat(E.w), parseFloat(E.h)))) : c = D.add(new g(this.graphManager)), c.id = s.data("id"), c.paddingLeft = parseInt(s.css("padding")), c.paddingTop = parseInt(s.css("padding")), c.paddingRight = parseInt(s.css("padding")), c.paddingBottom = parseInt(s.css("padding")), this.options.nodeDimensionsIncludeLabels && s.isParent()) {
                  var A = s.boundingBox({ includeLabels: true, includeNodes: false }).w, m = s.boundingBox({ includeLabels: true, includeNodes: false }).h, C = s.css("text-halign");
                  c.labelWidth = A, c.labelHeight = m, c.labelPos = C;
                }
                if (this.idToLNode[s.data("id")] = c, isNaN(c.rect.x) && (c.rect.x = 0), isNaN(c.rect.y) && (c.rect.y = 0), f != null && f.length > 0) {
                  var R;
                  R = T.getGraphManager().add(T.newGraph(), c), this.processChildrenList(R, f, T);
                }
              }
            }, a.prototype.stop = function() {
              return this.stopped = true, this;
            };
            var v = function(u) {
              u("layout", "cose-bilkent", a);
            };
            typeof cytoscape < "u" && v(cytoscape), I.exports = v;
          })
          /******/
        ])
      );
    });
  })(k)), k.exports;
}
var yt = vt();
const Et = /* @__PURE__ */ c0(yt);
ea.use(Et);
function et(G, b) {
  G.forEach((N) => {
    const I = {
      id: N.id,
      labelText: N.label,
      height: N.height,
      width: N.width,
      padding: N.padding ?? 0
    };
    Object.keys(N).forEach((L) => {
      ["id", "label", "height", "width", "padding", "x", "y"].includes(L) || (I[L] = N[L]);
    }), b.add({
      group: "nodes",
      data: I,
      position: {
        x: N.x ?? 0,
        y: N.y ?? 0
      }
    });
  });
}
p(et, "addNodes");
function rt(G, b) {
  G.forEach((N) => {
    const I = {
      id: N.id,
      source: N.start,
      target: N.end
    };
    Object.keys(N).forEach((L) => {
      ["id", "start", "end"].includes(L) || (I[L] = N[L]);
    }), b.add({
      group: "edges",
      data: I
    });
  });
}
p(rt, "addEdges");
function it(G) {
  return new Promise((b) => {
    const N = ht("body").append("div").attr("id", "cy").attr("style", "display:none"), I = ea({
      container: document.getElementById("cy"),
      // container to render in
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }
      ]
    });
    N.remove(), et(G.nodes, I), rt(G.edges, I), I.nodes().forEach(function(o) {
      o.layoutDimensions = () => {
        const e = o.data();
        return { w: e.width, h: e.height };
      };
    });
    const L = {
      name: "cose-bilkent",
      // @ts-ignore Types for cose-bilkent are not correct?
      quality: "proof",
      styleEnabled: false,
      animate: false
    };
    I.layout(L).run(), I.ready((o) => {
      F.info("Cytoscape ready", o), b(I);
    });
  });
}
p(it, "createCytoscapeInstance");
function nt(G) {
  return G.nodes().map((b) => {
    const N = b.data(), I = b.position(), L = {
      id: N.id,
      x: I.x,
      y: I.y
    };
    return Object.keys(N).forEach((o) => {
      o !== "id" && (L[o] = N[o]);
    }), L;
  });
}
p(nt, "extractPositionedNodes");
function ot(G) {
  return G.edges().map((b) => {
    const N = b.data(), I = b._private.rscratch, L = {
      id: N.id,
      source: N.source,
      target: N.target,
      startX: I.startX,
      startY: I.startY,
      midX: I.midX,
      midY: I.midY,
      endX: I.endX,
      endY: I.endY
    };
    return Object.keys(N).forEach((o) => {
      ["id", "source", "target"].includes(o) || (L[o] = N[o]);
    }), L;
  });
}
p(ot, "extractPositionedEdges");
async function st(G, b) {
  F.debug("Starting cose-bilkent layout algorithm");
  try {
    at(G);
    const N = await it(G), I = nt(N), L = ot(N);
    return F.debug(`Layout completed: ${I.length} nodes, ${L.length} edges`), {
      nodes: I,
      edges: L
    };
  } catch (N) {
    throw F.error("Error in cose-bilkent layout algorithm:", N), N;
  }
}
p(st, "executeCoseBilkentLayout");
function at(G) {
  if (!G)
    throw new Error("Layout data is required");
  if (!G.config)
    throw new Error("Configuration is required in layout data");
  if (!G.rootNode)
    throw new Error("Root node is required");
  if (!G.nodes || !Array.isArray(G.nodes))
    throw new Error("No nodes found in layout data");
  if (!Array.isArray(G.edges))
    throw new Error("Edges array is required in layout data");
  return true;
}
p(at, "validateLayoutData");
var Lt = /* @__PURE__ */ p(async (G, b, {
  insertCluster: N,
  insertEdge: I,
  insertEdgeLabel: L,
  insertMarkers: o,
  insertNode: e,
  log: t,
  positionEdgeLabel: i
}, { algorithm: l }) => {
  const g = {}, n = {}, d = b.select("g");
  o(d, G.markers, G.type, G.diagramId);
  const r = d.insert("g").attr("class", "subgraphs"), h = d.insert("g").attr("class", "edgePaths"), a = d.insert("g").attr("class", "edgeLabels"), p2 = d.insert("g").attr("class", "nodes");
  t.debug("Inserting nodes into DOM for dimension calculation"), await Promise.all(
    G.nodes.map(async (u) => {
      if (u.isGroup) {
        const T = { ...u };
        n[u.id] = T, g[u.id] = T, await N(r, u);
      } else {
        const T = { ...u };
        g[u.id] = T;
        const y = await e(p2, u, {
          config: G.config,
          dir: G.direction || "TB"
        }), O = y.node().getBBox();
        T.width = O.width, T.height = O.height, T.domId = y, t.debug(`Node ${u.id} dimensions: ${O.width}x${O.height}`);
      }
    })
  ), t.debug("Running cose-bilkent layout algorithm");
  const v = {
    ...G,
    nodes: G.nodes.map((u) => {
      const T = g[u.id];
      return {
        ...u,
        width: T.width,
        height: T.height
      };
    })
  }, D = await st(v, G.config);
  t.debug("Positioning nodes based on layout results"), D.nodes.forEach((u) => {
    const T = g[u.id];
    T?.domId && (T.domId.attr(
      "transform",
      `translate(${u.x}, ${u.y})`
    ), T.x = u.x, T.y = u.y, t.debug(`Positioned node ${T.id} at center (${u.x}, ${u.y})`));
  }), D.edges.forEach((u) => {
    const T = G.edges.find((y) => y.id === u.id);
    T && (T.points = [
      { x: u.startX, y: u.startY },
      { x: u.midX, y: u.midY },
      { x: u.endX, y: u.endY }
    ]);
  }), t.debug("Inserting and positioning edges"), await Promise.all(
    G.edges.map(async (u) => {
      await L(a, u);
      const T = g[u.start ?? ""], y = g[u.end ?? ""];
      if (T && y) {
        const O = D.edges.find((s) => s.id === u.id);
        if (O) {
          t.debug("APA01 positionedEdge", O);
          const s = { ...u }, f = I(
            h,
            s,
            n,
            G.type,
            T,
            y,
            G.diagramId
          );
          i(s, f);
        } else {
          const s = {
            ...u,
            points: [
              { x: T.x || 0, y: T.y || 0 },
              { x: y.x || 0, y: y.y || 0 }
            ]
          }, f = I(
            h,
            s,
            n,
            G.type,
            T,
            y,
            G.diagramId
          );
          i(s, f);
        }
      }
    })
  ), t.debug("Cose-bilkent rendering completed");
}, "render"), At = Lt;
export {
  At as render
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zZS1iaWxrZW50LVM1VjRONTRBLUJTbkxLRF9FLUJoNWp4TV9CLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLW1lcm1haWQtc3RyaW5nL2Rpc3QvY29zZS1iaWxrZW50LVM1VjRONTRBLUJTbkxLRF9FLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFHIGFzIGx0LCBfIGFzIFYsIGwgYXMgJCwgZCBhcyBndCB9IGZyb20gXCIuL2VudHJ5LUIyVlgta3hhLmpzXCI7XG5pbXBvcnQgeyBjIGFzIHR0IH0gZnJvbSBcIi4vY3l0b3NjYXBlLmVzbS1DdmYzc3g5Ri5qc1wiO1xudmFyIGsgPSB7IGV4cG9ydHM6IHt9IH0sIFogPSB7IGV4cG9ydHM6IHt9IH0sIFEgPSB7IGV4cG9ydHM6IHt9IH0sIHV0ID0gUS5leHBvcnRzLCBqO1xuZnVuY3Rpb24gZnQoKSB7XG4gIHJldHVybiBqIHx8IChqID0gMSwgKGZ1bmN0aW9uKEcsIGIpIHtcbiAgICAoZnVuY3Rpb24oSSwgTCkge1xuICAgICAgRy5leHBvcnRzID0gTCgpO1xuICAgIH0pKHV0LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIChmdW5jdGlvbihOKSB7XG4gICAgICAgICAgdmFyIEkgPSB7fTtcbiAgICAgICAgICBmdW5jdGlvbiBMKG8pIHtcbiAgICAgICAgICAgIGlmIChJW29dKVxuICAgICAgICAgICAgICByZXR1cm4gSVtvXS5leHBvcnRzO1xuICAgICAgICAgICAgdmFyIGUgPSBJW29dID0ge1xuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBpOiBvLFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBsOiAhMSxcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gTltvXS5jYWxsKGUuZXhwb3J0cywgZSwgZS5leHBvcnRzLCBMKSwgZS5sID0gITAsIGUuZXhwb3J0cztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEwubSA9IE4sIEwuYyA9IEksIEwuaSA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgIH0sIEwuZCA9IGZ1bmN0aW9uKG8sIGUsIHQpIHtcbiAgICAgICAgICAgIEwubyhvLCBlKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgZSwge1xuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgZ2V0OiB0XG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCBMLm4gPSBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICB2YXIgZSA9IG8gJiYgby5fX2VzTW9kdWxlID8gKFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gby5kZWZhdWx0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBMLmQoZSwgXCJhXCIsIGUpLCBlO1xuICAgICAgICAgIH0sIEwubyA9IGZ1bmN0aW9uKG8sIGUpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgZSk7XG4gICAgICAgICAgfSwgTC5wID0gXCJcIiwgTChMLnMgPSAyNik7XG4gICAgICAgIH0pKFtcbiAgICAgICAgICAvKiAwICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oTiwgSSwgTCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gbygpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8uUVVBTElUWSA9IDEsIG8uREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEID0gITEsIG8uREVGQVVMVF9JTkNSRU1FTlRBTCA9ICExLCBvLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCA9ICEwLCBvLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQgPSAhMSwgby5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QgPSA1MCwgby5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTID0gITEsIG8uREVGQVVMVF9HUkFQSF9NQVJHSU4gPSAxNSwgby5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSAhMSwgby5TSU1QTEVfTk9ERV9TSVpFID0gNDAsIG8uU0lNUExFX05PREVfSEFMRl9TSVpFID0gby5TSU1QTEVfTk9ERV9TSVpFIC8gMiwgby5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkUgPSA0MCwgby5NSU5fRURHRV9MRU5HVEggPSAxLCBvLldPUkxEX0JPVU5EQVJZID0gMWU2LCBvLklOSVRJQUxfV09STERfQk9VTkRBUlkgPSBvLldPUkxEX0JPVU5EQVJZIC8gMWUzLCBvLldPUkxEX0NFTlRFUl9YID0gMTIwMCwgby5XT1JMRF9DRU5URVJfWSA9IDkwMCwgTi5leHBvcnRzID0gbztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAxICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oTiwgSSwgTCkge1xuICAgICAgICAgICAgdmFyIG8gPSBMKDIpLCBlID0gTCg4KSwgdCA9IEwoOSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBpKGcsIG4sIGQpIHtcbiAgICAgICAgICAgICAgby5jYWxsKHRoaXMsIGQpLCB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9ICExLCB0aGlzLnZHcmFwaE9iamVjdCA9IGQsIHRoaXMuYmVuZHBvaW50cyA9IFtdLCB0aGlzLnNvdXJjZSA9IGcsIHRoaXMudGFyZ2V0ID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShvLnByb3RvdHlwZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBsIGluIG8pXG4gICAgICAgICAgICAgIGlbbF0gPSBvW2xdO1xuICAgICAgICAgICAgaS5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5pc0ludGVyR3JhcGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNJbnRlckdyYXBoO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQ7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRCZW5kcG9pbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlbmRwb2ludHM7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRMY2EgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGNhO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0U291cmNlSW5MY2EgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlSW5MY2E7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRUYXJnZXRJbkxjYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRJbkxjYTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldE90aGVyRW5kID0gZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zb3VyY2UgPT09IGcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xuICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IGcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICAgICAgICAgICAgICB0aHJvdyBcIk5vZGUgaXMgbm90IGluY2lkZW50IHdpdGggdGhpcyBlZGdlXCI7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbihnLCBuKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGQgPSB0aGlzLmdldE90aGVyRW5kKGcpLCByID0gbi5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCk7IDsgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQuZ2V0T3duZXIoKSA9PSBuKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgaWYgKGQuZ2V0T3duZXIoKSA9PSByKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZCA9IGQuZ2V0T3duZXIoKS5nZXRQYXJlbnQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLnVwZGF0ZUxlbmd0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgZyA9IG5ldyBBcnJheSg0KTtcbiAgICAgICAgICAgICAgdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBlLmdldEludGVyc2VjdGlvbih0aGlzLnRhcmdldC5nZXRSZWN0KCksIHRoaXMuc291cmNlLmdldFJlY3QoKSwgZyksIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0IHx8ICh0aGlzLmxlbmd0aFggPSBnWzBdIC0gZ1syXSwgdGhpcy5sZW5ndGhZID0gZ1sxXSAtIGdbM10sIE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxICYmICh0aGlzLmxlbmd0aFggPSB0LnNpZ24odGhpcy5sZW5ndGhYKSksIE1hdGguYWJzKHRoaXMubGVuZ3RoWSkgPCAxICYmICh0aGlzLmxlbmd0aFkgPSB0LnNpZ24odGhpcy5sZW5ndGhZKSksIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSkpO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoU2ltcGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMubGVuZ3RoWCA9IHRoaXMudGFyZ2V0LmdldENlbnRlclgoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclgoKSwgdGhpcy5sZW5ndGhZID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWSgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWSgpLCBNYXRoLmFicyh0aGlzLmxlbmd0aFgpIDwgMSAmJiAodGhpcy5sZW5ndGhYID0gdC5zaWduKHRoaXMubGVuZ3RoWCkpLCBNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMSAmJiAodGhpcy5sZW5ndGhZID0gdC5zaWduKHRoaXMubGVuZ3RoWSkpLCB0aGlzLmxlbmd0aCA9IE1hdGguc3FydCh0aGlzLmxlbmd0aFggKiB0aGlzLmxlbmd0aFggKyB0aGlzLmxlbmd0aFkgKiB0aGlzLmxlbmd0aFkpO1xuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gaTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAyICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oTiwgSSwgTCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gbyhlKSB7XG4gICAgICAgICAgICAgIHRoaXMudkdyYXBoT2JqZWN0ID0gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE4uZXhwb3J0cyA9IG87XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMyAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIHZhciBvID0gTCgyKSwgZSA9IEwoMTApLCB0ID0gTCgxMyksIGkgPSBMKDApLCBsID0gTCgxNiksIGcgPSBMKDQpO1xuICAgICAgICAgICAgZnVuY3Rpb24gbihyLCBoLCBhLCBwKSB7XG4gICAgICAgICAgICAgIGEgPT0gbnVsbCAmJiBwID09IG51bGwgJiYgKHAgPSBoKSwgby5jYWxsKHRoaXMsIHApLCByLmdyYXBoTWFuYWdlciAhPSBudWxsICYmIChyID0gci5ncmFwaE1hbmFnZXIpLCB0aGlzLmVzdGltYXRlZFNpemUgPSBlLk1JTl9WQUxVRSwgdGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPSBlLk1BWF9WQUxVRSwgdGhpcy52R3JhcGhPYmplY3QgPSBwLCB0aGlzLmVkZ2VzID0gW10sIHRoaXMuZ3JhcGhNYW5hZ2VyID0gciwgYSAhPSBudWxsICYmIGggIT0gbnVsbCA/IHRoaXMucmVjdCA9IG5ldyB0KGgueCwgaC55LCBhLndpZHRoLCBhLmhlaWdodCkgOiB0aGlzLnJlY3QgPSBuZXcgdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG8ucHJvdG90eXBlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGQgaW4gbylcbiAgICAgICAgICAgICAgbltkXSA9IG9bZF07XG4gICAgICAgICAgICBuLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0T3duZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3duZXI7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0LndpZHRoO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVjdC53aWR0aCA9IHI7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVjdC5oZWlnaHQgPSByO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGcodGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyLCB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgZyh0aGlzLnJlY3QueCwgdGhpcy5yZWN0LnkpO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0UmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0O1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0RGlhZ29uYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnJlY3Qud2lkdGggKiB0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0ICogdGhpcy5yZWN0LmhlaWdodCk7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5nZXRIYWxmVGhlRGlhZ29uYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnJlY3QuaGVpZ2h0ICogdGhpcy5yZWN0LmhlaWdodCArIHRoaXMucmVjdC53aWR0aCAqIHRoaXMucmVjdC53aWR0aCkgLyAyO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuc2V0UmVjdCA9IGZ1bmN0aW9uKHIsIGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWN0LnggPSByLngsIHRoaXMucmVjdC55ID0gci55LCB0aGlzLnJlY3Qud2lkdGggPSBoLndpZHRoLCB0aGlzLnJlY3QuaGVpZ2h0ID0gaC5oZWlnaHQ7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbihyLCBoKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVjdC54ID0gciAtIHRoaXMucmVjdC53aWR0aCAvIDIsIHRoaXMucmVjdC55ID0gaCAtIHRoaXMucmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbihyLCBoKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVjdC54ID0gciwgdGhpcy5yZWN0LnkgPSBoO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUubW92ZUJ5ID0gZnVuY3Rpb24ociwgaCkge1xuICAgICAgICAgICAgICB0aGlzLnJlY3QueCArPSByLCB0aGlzLnJlY3QueSArPSBoO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0RWRnZUxpc3RUb05vZGUgPSBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgIHZhciBoID0gW10sIGEgPSB0aGlzO1xuICAgICAgICAgICAgICByZXR1cm4gYS5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICBpZiAocC50YXJnZXQgPT0gcikge1xuICAgICAgICAgICAgICAgICAgaWYgKHAuc291cmNlICE9IGEpIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xuICAgICAgICAgICAgICAgICAgaC5wdXNoKHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksIGg7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5nZXRFZGdlc0JldHdlZW4gPSBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgIHZhciBoID0gW10sIGEgPSB0aGlzO1xuICAgICAgICAgICAgICByZXR1cm4gYS5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICBpZiAoIShwLnNvdXJjZSA9PSBhIHx8IHAudGFyZ2V0ID09IGEpKSB0aHJvdyBcIkluY29ycmVjdCBlZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0XCI7XG4gICAgICAgICAgICAgICAgKHAudGFyZ2V0ID09IHIgfHwgcC5zb3VyY2UgPT0gcikgJiYgaC5wdXNoKHApO1xuICAgICAgICAgICAgICB9KSwgaDtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmdldE5laWdoYm9yc0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHIgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLCBoID0gdGhpcztcbiAgICAgICAgICAgICAgcmV0dXJuIGguZWRnZXMuZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc291cmNlID09IGgpXG4gICAgICAgICAgICAgICAgICByLmFkZChhLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYS50YXJnZXQgIT0gaClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgaW5jaWRlbmN5IVwiO1xuICAgICAgICAgICAgICAgICAgci5hZGQoYS5zb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksIHI7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS53aXRoQ2hpbGRyZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHIgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLCBoLCBhO1xuICAgICAgICAgICAgICBpZiAoci5hZGQodGhpcyksIHRoaXMuY2hpbGQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gdGhpcy5jaGlsZC5nZXROb2RlcygpLCB2ID0gMDsgdiA8IHAubGVuZ3RoOyB2KyspXG4gICAgICAgICAgICAgICAgICBoID0gcFt2XSwgYSA9IGgud2l0aENoaWxkcmVuKCksIGEuZm9yRWFjaChmdW5jdGlvbihEKSB7XG4gICAgICAgICAgICAgICAgICAgIHIuYWRkKEQpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0Tm9PZkNoaWxkcmVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciByID0gMCwgaDtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByID0gMTtcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCksIHAgPSAwOyBwIDwgYS5sZW5ndGg7IHArKylcbiAgICAgICAgICAgICAgICAgIGggPSBhW3BdLCByICs9IGguZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgIHJldHVybiByID09IDAgJiYgKHIgPSAxKSwgcjtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBlLk1JTl9WQUxVRSlcbiAgICAgICAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkID09IG51bGwgPyB0aGlzLmVzdGltYXRlZFNpemUgPSAodGhpcy5yZWN0LndpZHRoICsgdGhpcy5yZWN0LmhlaWdodCkgLyAyIDogKHRoaXMuZXN0aW1hdGVkU2l6ZSA9IHRoaXMuY2hpbGQuY2FsY0VzdGltYXRlZFNpemUoKSwgdGhpcy5yZWN0LndpZHRoID0gdGhpcy5lc3RpbWF0ZWRTaXplLCB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZWRTaXplLCB0aGlzLmVzdGltYXRlZFNpemUpO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuc2NhdHRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgciwgaCwgYSA9IC1pLklOSVRJQUxfV09STERfQk9VTkRBUlksIHAgPSBpLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gICAgICAgICAgICAgIHIgPSBpLldPUkxEX0NFTlRFUl9YICsgbC5uZXh0RG91YmxlKCkgKiAocCAtIGEpICsgYTtcbiAgICAgICAgICAgICAgdmFyIHYgPSAtaS5JTklUSUFMX1dPUkxEX0JPVU5EQVJZLCBEID0gaS5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICAgICAgICAgICAgICBoID0gaS5XT1JMRF9DRU5URVJfWSArIGwubmV4dERvdWJsZSgpICogKEQgLSB2KSArIHYsIHRoaXMucmVjdC54ID0gciwgdGhpcy5yZWN0LnkgPSBoO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmdldENoaWxkKCkgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldENoaWxkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHIudXBkYXRlQm91bmRzKCEwKSwgdGhpcy5yZWN0LnggPSByLmdldExlZnQoKSwgdGhpcy5yZWN0LnkgPSByLmdldFRvcCgpLCB0aGlzLnNldFdpZHRoKHIuZ2V0UmlnaHQoKSAtIHIuZ2V0TGVmdCgpKSwgdGhpcy5zZXRIZWlnaHQoci5nZXRCb3R0b20oKSAtIHIuZ2V0VG9wKCkpLCBpLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUykge1xuICAgICAgICAgICAgICAgICAgdmFyIGggPSByLmdldFJpZ2h0KCkgLSByLmdldExlZnQoKSwgYSA9IHIuZ2V0Qm90dG9tKCkgLSByLmdldFRvcCgpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbFdpZHRoID4gaCAmJiAodGhpcy5yZWN0LnggLT0gKHRoaXMubGFiZWxXaWR0aCAtIGgpIC8gMiwgdGhpcy5zZXRXaWR0aCh0aGlzLmxhYmVsV2lkdGgpKSwgdGhpcy5sYWJlbEhlaWdodCA+IGEgJiYgKHRoaXMubGFiZWxQb3MgPT0gXCJjZW50ZXJcIiA/IHRoaXMucmVjdC55IC09ICh0aGlzLmxhYmVsSGVpZ2h0IC0gYSkgLyAyIDogdGhpcy5sYWJlbFBvcyA9PSBcInRvcFwiICYmICh0aGlzLnJlY3QueSAtPSB0aGlzLmxhYmVsSGVpZ2h0IC0gYSksIHRoaXMuc2V0SGVpZ2h0KHRoaXMubGFiZWxIZWlnaHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPT0gZS5NQVhfVkFMVUUpXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmluY2x1c2lvblRyZWVEZXB0aDtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLnJlY3QueDtcbiAgICAgICAgICAgICAgaCA+IGkuV09STERfQk9VTkRBUlkgPyBoID0gaS5XT1JMRF9CT1VOREFSWSA6IGggPCAtaS5XT1JMRF9CT1VOREFSWSAmJiAoaCA9IC1pLldPUkxEX0JPVU5EQVJZKTtcbiAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLnJlY3QueTtcbiAgICAgICAgICAgICAgYSA+IGkuV09STERfQk9VTkRBUlkgPyBhID0gaS5XT1JMRF9CT1VOREFSWSA6IGEgPCAtaS5XT1JMRF9CT1VOREFSWSAmJiAoYSA9IC1pLldPUkxEX0JPVU5EQVJZKTtcbiAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgZyhoLCBhKSwgdiA9IHIuaW52ZXJzZVRyYW5zZm9ybVBvaW50KHApO1xuICAgICAgICAgICAgICB0aGlzLnNldExvY2F0aW9uKHYueCwgdi55KTtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdC54O1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY3QueTtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLm93bmVyID09IG51bGwgPyBudWxsIDogdGhpcy5vd25lci5nZXRQYXJlbnQoKTtcbiAgICAgICAgICAgIH0sIE4uZXhwb3J0cyA9IG47XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogNCAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG8oZSwgdCkge1xuICAgICAgICAgICAgICBlID09IG51bGwgJiYgdCA9PSBudWxsID8gKHRoaXMueCA9IDAsIHRoaXMueSA9IDApIDogKHRoaXMueCA9IGUsIHRoaXMueSA9IHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy54O1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy54ID0gZTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHRoaXMueSA9IGU7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXREaWZmZXJlbmNlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbkQodGhpcy54IC0gZS54LCB0aGlzLnkgLSBlLnkpO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0Q29weSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy54ICs9IGUud2lkdGgsIHRoaXMueSArPSBlLmhlaWdodCwgdGhpcztcbiAgICAgICAgICAgIH0sIE4uZXhwb3J0cyA9IG87XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogNSAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIHZhciBvID0gTCgyKSwgZSA9IEwoMTApLCB0ID0gTCgwKSwgaSA9IEwoNiksIGwgPSBMKDMpLCBnID0gTCgxKSwgbiA9IEwoMTMpLCBkID0gTCgxMiksIHIgPSBMKDExKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGgocCwgdiwgRCkge1xuICAgICAgICAgICAgICBvLmNhbGwodGhpcywgRCksIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IGUuTUlOX1ZBTFVFLCB0aGlzLm1hcmdpbiA9IHQuREVGQVVMVF9HUkFQSF9NQVJHSU4sIHRoaXMuZWRnZXMgPSBbXSwgdGhpcy5ub2RlcyA9IFtdLCB0aGlzLmlzQ29ubmVjdGVkID0gITEsIHRoaXMucGFyZW50ID0gcCwgdiAhPSBudWxsICYmIHYgaW5zdGFuY2VvZiBpID8gdGhpcy5ncmFwaE1hbmFnZXIgPSB2IDogdiAhPSBudWxsICYmIHYgaW5zdGFuY2VvZiBMYXlvdXQgJiYgKHRoaXMuZ3JhcGhNYW5hZ2VyID0gdi5ncmFwaE1hbmFnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG8ucHJvdG90eXBlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgaW4gbylcbiAgICAgICAgICAgICAgaFthXSA9IG9bYV07XG4gICAgICAgICAgICBoLnByb3RvdHlwZS5nZXROb2RlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldEVkZ2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuZ2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3A7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuaXNDb25uZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb25uZWN0ZWQ7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwLCB2LCBEKSB7XG4gICAgICAgICAgICAgIGlmICh2ID09IG51bGwgJiYgRCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHUgPSBwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJHcmFwaCBoYXMgbm8gZ3JhcGggbWdyIVwiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZih1KSA+IC0xKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb2RlIGFscmVhZHkgaW4gZ3JhcGghXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHUub3duZXIgPSB0aGlzLCB0aGlzLmdldE5vZGVzKCkucHVzaCh1KSwgdTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgVCA9IHA7XG4gICAgICAgICAgICAgICAgaWYgKCEodGhpcy5nZXROb2RlcygpLmluZGV4T2YodikgPiAtMSAmJiB0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihEKSA+IC0xKSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiU291cmNlIG9yIHRhcmdldCBub3QgaW4gZ3JhcGghXCI7XG4gICAgICAgICAgICAgICAgaWYgKCEodi5vd25lciA9PSBELm93bmVyICYmIHYub3duZXIgPT0gdGhpcykpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIkJvdGggb3duZXJzIG11c3QgYmUgdGhpcyBncmFwaCFcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5vd25lciAhPSBELm93bmVyID8gbnVsbCA6IChULnNvdXJjZSA9IHYsIFQudGFyZ2V0ID0gRCwgVC5pc0ludGVyR3JhcGggPSAhMSwgdGhpcy5nZXRFZGdlcygpLnB1c2goVCksIHYuZWRnZXMucHVzaChUKSwgRCAhPSB2ICYmIEQuZWRnZXMucHVzaChUKSwgVCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgdmFyIHYgPSBwO1xuICAgICAgICAgICAgICBpZiAocCBpbnN0YW5jZW9mIGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb2RlIGlzIG51bGwhXCI7XG4gICAgICAgICAgICAgICAgaWYgKCEodi5vd25lciAhPSBudWxsICYmIHYub3duZXIgPT0gdGhpcykpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIGlzIGludmFsaWQhXCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JhcGhNYW5hZ2VyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIG1hbmFnZXIgaXMgaW52YWxpZCFcIjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBEID0gdi5lZGdlcy5zbGljZSgpLCB1LCBUID0gRC5sZW5ndGgsIHkgPSAwOyB5IDwgVDsgeSsrKVxuICAgICAgICAgICAgICAgICAgdSA9IERbeV0sIHUuaXNJbnRlckdyYXBoID8gdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKHUpIDogdS5zb3VyY2Uub3duZXIucmVtb3ZlKHUpO1xuICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcy5ub2Rlcy5pbmRleE9mKHYpO1xuICAgICAgICAgICAgICAgIGlmIChPID09IC0xKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb2RlIG5vdCBpbiBvd25lciBub2RlIGxpc3QhXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoTywgMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocCBpbnN0YW5jZW9mIGcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdSA9IHA7XG4gICAgICAgICAgICAgICAgaWYgKHUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgICAgICAgICAgICAgIGlmICghKHUuc291cmNlICE9IG51bGwgJiYgdS50YXJnZXQgIT0gbnVsbCkpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgICAgICAgICAgICAgaWYgKCEodS5zb3VyY2Uub3duZXIgIT0gbnVsbCAmJiB1LnRhcmdldC5vd25lciAhPSBudWxsICYmIHUuc291cmNlLm93bmVyID09IHRoaXMgJiYgdS50YXJnZXQub3duZXIgPT0gdGhpcykpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IG93bmVyIGlzIGludmFsaWQhXCI7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSB1LnNvdXJjZS5lZGdlcy5pbmRleE9mKHUpLCBmID0gdS50YXJnZXQuZWRnZXMuaW5kZXhPZih1KTtcbiAgICAgICAgICAgICAgICBpZiAoIShzID4gLTEgJiYgZiA+IC0xKSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICAgICAgICAgICAgICB1LnNvdXJjZS5lZGdlcy5zcGxpY2UocywgMSksIHUudGFyZ2V0ICE9IHUuc291cmNlICYmIHUudGFyZ2V0LmVkZ2VzLnNwbGljZShmLCAxKTtcbiAgICAgICAgICAgICAgICB2YXIgTyA9IHUuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuaW5kZXhPZih1KTtcbiAgICAgICAgICAgICAgICBpZiAoTyA9PSAtMSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IGluIG93bmVyJ3MgZWRnZSBsaXN0IVwiO1xuICAgICAgICAgICAgICAgIHUuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuc3BsaWNlKE8sIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS51cGRhdGVMZWZ0VG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHAgPSBlLk1BWF9WQUxVRSwgdiA9IGUuTUFYX1ZBTFVFLCBELCB1LCBULCB5ID0gdGhpcy5nZXROb2RlcygpLCBPID0geS5sZW5ndGgsIHMgPSAwOyBzIDwgTzsgcysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSB5W3NdO1xuICAgICAgICAgICAgICAgIEQgPSBmLmdldFRvcCgpLCB1ID0gZi5nZXRMZWZ0KCksIHAgPiBEICYmIChwID0gRCksIHYgPiB1ICYmICh2ID0gdSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHAgPT0gZS5NQVhfVkFMVUUgPyBudWxsIDogKHlbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gbnVsbCA/IFQgPSB5WzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0IDogVCA9IHRoaXMubWFyZ2luLCB0aGlzLmxlZnQgPSB2IC0gVCwgdGhpcy50b3AgPSBwIC0gVCwgbmV3IGQodGhpcy5sZWZ0LCB0aGlzLnRvcCkpO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciB2ID0gZS5NQVhfVkFMVUUsIEQgPSAtZS5NQVhfVkFMVUUsIHUgPSBlLk1BWF9WQUxVRSwgVCA9IC1lLk1BWF9WQUxVRSwgeSwgTywgcywgZiwgYywgRSA9IHRoaXMubm9kZXMsIEEgPSBFLmxlbmd0aCwgbSA9IDA7IG0gPCBBOyBtKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgQyA9IEVbbV07XG4gICAgICAgICAgICAgICAgcCAmJiBDLmNoaWxkICE9IG51bGwgJiYgQy51cGRhdGVCb3VuZHMoKSwgeSA9IEMuZ2V0TGVmdCgpLCBPID0gQy5nZXRSaWdodCgpLCBzID0gQy5nZXRUb3AoKSwgZiA9IEMuZ2V0Qm90dG9tKCksIHYgPiB5ICYmICh2ID0geSksIEQgPCBPICYmIChEID0gTyksIHUgPiBzICYmICh1ID0gcyksIFQgPCBmICYmIChUID0gZik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIFIgPSBuZXcgbih2LCB1LCBEIC0gdiwgVCAtIHUpO1xuICAgICAgICAgICAgICB2ID09IGUuTUFYX1ZBTFVFICYmICh0aGlzLmxlZnQgPSB0aGlzLnBhcmVudC5nZXRMZWZ0KCksIHRoaXMucmlnaHQgPSB0aGlzLnBhcmVudC5nZXRSaWdodCgpLCB0aGlzLnRvcCA9IHRoaXMucGFyZW50LmdldFRvcCgpLCB0aGlzLmJvdHRvbSA9IHRoaXMucGFyZW50LmdldEJvdHRvbSgpKSwgRVswXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdCAhPSBudWxsID8gYyA9IEVbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgOiBjID0gdGhpcy5tYXJnaW4sIHRoaXMubGVmdCA9IFIueCAtIGMsIHRoaXMucmlnaHQgPSBSLnggKyBSLndpZHRoICsgYywgdGhpcy50b3AgPSBSLnkgLSBjLCB0aGlzLmJvdHRvbSA9IFIueSArIFIuaGVpZ2h0ICsgYztcbiAgICAgICAgICAgIH0sIGguY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciB2ID0gZS5NQVhfVkFMVUUsIEQgPSAtZS5NQVhfVkFMVUUsIHUgPSBlLk1BWF9WQUxVRSwgVCA9IC1lLk1BWF9WQUxVRSwgeSwgTywgcywgZiwgYyA9IHAubGVuZ3RoLCBFID0gMDsgRSA8IGM7IEUrKykge1xuICAgICAgICAgICAgICAgIHZhciBBID0gcFtFXTtcbiAgICAgICAgICAgICAgICB5ID0gQS5nZXRMZWZ0KCksIE8gPSBBLmdldFJpZ2h0KCksIHMgPSBBLmdldFRvcCgpLCBmID0gQS5nZXRCb3R0b20oKSwgdiA+IHkgJiYgKHYgPSB5KSwgRCA8IE8gJiYgKEQgPSBPKSwgdSA+IHMgJiYgKHUgPSBzKSwgVCA8IGYgJiYgKFQgPSBmKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgbSA9IG5ldyBuKHYsIHUsIEQgLSB2LCBUIC0gdSk7XG4gICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSA/IDEgOiB0aGlzLnBhcmVudC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBlLk1JTl9WQUxVRSlcbiAgICAgICAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHAgPSAwLCB2ID0gdGhpcy5ub2RlcywgRCA9IHYubGVuZ3RoLCB1ID0gMDsgdSA8IEQ7IHUrKykge1xuICAgICAgICAgICAgICAgIHZhciBUID0gdlt1XTtcbiAgICAgICAgICAgICAgICBwICs9IFQuY2FsY0VzdGltYXRlZFNpemUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcCA9PSAwID8gdGhpcy5lc3RpbWF0ZWRTaXplID0gdC5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkUgOiB0aGlzLmVzdGltYXRlZFNpemUgPSBwIC8gTWF0aC5zcXJ0KHRoaXMubm9kZXMubGVuZ3RoKSwgdGhpcy5lc3RpbWF0ZWRTaXplO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUudXBkYXRlQ29ubmVjdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBwID0gdGhpcztcbiAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gITA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciB2ID0gbmV3IHIoKSwgRCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksIHUgPSB0aGlzLm5vZGVzWzBdLCBULCB5LCBPID0gdS53aXRoQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgZm9yIChPLmZvckVhY2goZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgICAgIHYucHVzaChtKSwgRC5hZGQobSk7XG4gICAgICAgICAgICAgIH0pOyB2Lmxlbmd0aCAhPT0gMDsgKSB7XG4gICAgICAgICAgICAgICAgdSA9IHYuc2hpZnQoKSwgVCA9IHUuZ2V0RWRnZXMoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gVC5sZW5ndGgsIGYgPSAwOyBmIDwgczsgZisrKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgYyA9IFRbZl07XG4gICAgICAgICAgICAgICAgICBpZiAoeSA9IGMuZ2V0T3RoZXJFbmRJbkdyYXBoKHUsIHRoaXMpLCB5ICE9IG51bGwgJiYgIUQuaGFzKHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBFID0geS53aXRoQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgRS5mb3JFYWNoKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICB2LnB1c2gobSksIEQuYWRkKG0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0ZWQgPSAhMSwgRC5zaXplID49IHRoaXMubm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIEEgPSAwO1xuICAgICAgICAgICAgICAgIEQuZm9yRWFjaChmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgICBtLm93bmVyID09IHAgJiYgQSsrO1xuICAgICAgICAgICAgICAgIH0pLCBBID09IHRoaXMubm9kZXMubGVuZ3RoICYmICh0aGlzLmlzQ29ubmVjdGVkID0gITApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBOLmV4cG9ydHMgPSBoO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDYgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihOLCBJLCBMKSB7XG4gICAgICAgICAgICB2YXIgbywgZSA9IEwoMSk7XG4gICAgICAgICAgICBmdW5jdGlvbiB0KGkpIHtcbiAgICAgICAgICAgICAgbyA9IEwoNSksIHRoaXMubGF5b3V0ID0gaSwgdGhpcy5ncmFwaHMgPSBbXSwgdGhpcy5lZGdlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdC5wcm90b3R5cGUuYWRkUm9vdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMubGF5b3V0Lm5ld0dyYXBoKCksIGwgPSB0aGlzLmxheW91dC5uZXdOb2RlKG51bGwpLCBnID0gdGhpcy5hZGQoaSwgbCk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFJvb3RHcmFwaChnKSwgdGhpcy5yb290R3JhcGg7XG4gICAgICAgICAgICB9LCB0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihpLCBsLCBnLCBuLCBkKSB7XG4gICAgICAgICAgICAgIGlmIChnID09IG51bGwgJiYgbiA9PSBudWxsICYmIGQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpID09IG51bGwpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIkdyYXBoIGlzIG51bGwhXCI7XG4gICAgICAgICAgICAgICAgaWYgKGwgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiUGFyZW50IG5vZGUgaXMgbnVsbCFcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmFwaHMuaW5kZXhPZihpKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJHcmFwaCBhbHJlYWR5IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyYXBocy5wdXNoKGkpLCBpLnBhcmVudCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJBbHJlYWR5IGhhcyBhIHBhcmVudCFcIjtcbiAgICAgICAgICAgICAgICBpZiAobC5jaGlsZCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJBbHJlYWR5IGhhcyBhIGNoaWxkIVwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBpLnBhcmVudCA9IGwsIGwuY2hpbGQgPSBpLCBpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGQgPSBnLCBuID0gbCwgZyA9IGk7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBuLmdldE93bmVyKCksIGggPSBkLmdldE93bmVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKCEociAhPSBudWxsICYmIHIuZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIlNvdXJjZSBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgICAgICAgICAgICAgaWYgKCEoaCAhPSBudWxsICYmIGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIlRhcmdldCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgICAgICAgICAgICAgaWYgKHIgPT0gaClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBnLmlzSW50ZXJHcmFwaCA9ICExLCByLmFkZChnLCBuLCBkKTtcbiAgICAgICAgICAgICAgICBpZiAoZy5pc0ludGVyR3JhcGggPSAhMCwgZy5zb3VyY2UgPSBuLCBnLnRhcmdldCA9IGQsIHRoaXMuZWRnZXMuaW5kZXhPZihnKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gaW50ZXItZ3JhcGggZWRnZSBsaXN0IVwiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVkZ2VzLnB1c2goZyksICEoZy5zb3VyY2UgIT0gbnVsbCAmJiBnLnRhcmdldCAhPSBudWxsKSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiRWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgICAgICAgICAgICAgIGlmICghKGcuc291cmNlLmVkZ2VzLmluZGV4T2YoZykgPT0gLTEgJiYgZy50YXJnZXQuZWRnZXMuaW5kZXhPZihnKSA9PSAtMSkpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBzb3VyY2UgYW5kL29yIHRhcmdldCBpbmNpZGVuY3kgbGlzdCFcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZy5zb3VyY2UuZWRnZXMucHVzaChnKSwgZy50YXJnZXQuZWRnZXMucHVzaChnKSwgZztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICBpZiAoaSBpbnN0YW5jZW9mIG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGk7XG4gICAgICAgICAgICAgICAgaWYgKGwuZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gdGhpcylcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiR3JhcGggbm90IGluIHRoaXMgZ3JhcGggbWdyXCI7XG4gICAgICAgICAgICAgICAgaWYgKCEobCA9PSB0aGlzLnJvb3RHcmFwaCB8fCBsLnBhcmVudCAhPSBudWxsICYmIGwucGFyZW50LmdyYXBoTWFuYWdlciA9PSB0aGlzKSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiSW52YWxpZCBwYXJlbnQgbm9kZSFcIjtcbiAgICAgICAgICAgICAgICB2YXIgZyA9IFtdO1xuICAgICAgICAgICAgICAgIGcgPSBnLmNvbmNhdChsLmdldEVkZ2VzKCkpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG4sIGQgPSBnLmxlbmd0aCwgciA9IDA7IHIgPCBkOyByKyspXG4gICAgICAgICAgICAgICAgICBuID0gZ1tyXSwgbC5yZW1vdmUobik7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBbXTtcbiAgICAgICAgICAgICAgICBoID0gaC5jb25jYXQobC5nZXROb2RlcygpKTtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICBkID0gaC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBkOyByKyspXG4gICAgICAgICAgICAgICAgICBhID0gaFtyXSwgbC5yZW1vdmUoYSk7XG4gICAgICAgICAgICAgICAgbCA9PSB0aGlzLnJvb3RHcmFwaCAmJiB0aGlzLnNldFJvb3RHcmFwaChudWxsKTtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ3JhcGhzLmluZGV4T2YobCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaHMuc3BsaWNlKHAsIDEpLCBsLnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSBpbnN0YW5jZW9mIGUpIHtcbiAgICAgICAgICAgICAgICBpZiAobiA9IGksIG4gPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgICAgICAgICAgICAgIGlmICghbi5pc0ludGVyR3JhcGgpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBhbiBpbnRlci1ncmFwaCBlZGdlIVwiO1xuICAgICAgICAgICAgICAgIGlmICghKG4uc291cmNlICE9IG51bGwgJiYgbi50YXJnZXQgIT0gbnVsbCkpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgICAgICAgICAgICAgaWYgKCEobi5zb3VyY2UuZWRnZXMuaW5kZXhPZihuKSAhPSAtMSAmJiBuLnRhcmdldC5lZGdlcy5pbmRleE9mKG4pICE9IC0xKSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IG4uc291cmNlLmVkZ2VzLmluZGV4T2Yobik7XG4gICAgICAgICAgICAgICAgaWYgKG4uc291cmNlLmVkZ2VzLnNwbGljZShwLCAxKSwgcCA9IG4udGFyZ2V0LmVkZ2VzLmluZGV4T2YobiksIG4udGFyZ2V0LmVkZ2VzLnNwbGljZShwLCAxKSwgIShuLnNvdXJjZS5vd25lciAhPSBudWxsICYmIG4uc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpICE9IG51bGwpKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJFZGdlIG93bmVyIGdyYXBoIG9yIG93bmVyIGdyYXBoIG1hbmFnZXIgaXMgbnVsbCFcIjtcbiAgICAgICAgICAgICAgICBpZiAobi5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihuKSA9PSAtMSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IGluIG93bmVyIGdyYXBoIG1hbmFnZXIncyBlZGdlIGxpc3QhXCI7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBuLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKG4pO1xuICAgICAgICAgICAgICAgIG4uc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLnNwbGljZShwLCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdC5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMucm9vdEdyYXBoLnVwZGF0ZUJvdW5kcyghMCk7XG4gICAgICAgICAgICB9LCB0LnByb3RvdHlwZS5nZXRHcmFwaHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhzO1xuICAgICAgICAgICAgfSwgdC5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsTm9kZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBbXSwgbCA9IHRoaXMuZ2V0R3JhcGhzKCksIGcgPSBsLmxlbmd0aCwgbiA9IDA7IG4gPCBnOyBuKyspXG4gICAgICAgICAgICAgICAgICBpID0gaS5jb25jYXQobFtuXS5nZXROb2RlcygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE5vZGVzID0gaTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxOb2RlcztcbiAgICAgICAgICAgIH0sIHQucHJvdG90eXBlLnJlc2V0QWxsTm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5hbGxOb2RlcyA9IG51bGw7XG4gICAgICAgICAgICB9LCB0LnByb3RvdHlwZS5yZXNldEFsbEVkZ2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWxsRWRnZXMgPSBudWxsO1xuICAgICAgICAgICAgfSwgdC5wcm90b3R5cGUucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH0sIHQucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmFsbEVkZ2VzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IFtdLCBsID0gdGhpcy5nZXRHcmFwaHMoKTtcbiAgICAgICAgICAgICAgICBsLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBnID0gMDsgZyA8IGwubGVuZ3RoOyBnKyspXG4gICAgICAgICAgICAgICAgICBpID0gaS5jb25jYXQobFtnXS5nZXRFZGdlcygpKTtcbiAgICAgICAgICAgICAgICBpID0gaS5jb25jYXQodGhpcy5lZGdlcyksIHRoaXMuYWxsRWRnZXMgPSBpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbEVkZ2VzO1xuICAgICAgICAgICAgfSwgdC5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb247XG4gICAgICAgICAgICB9LCB0LnByb3RvdHlwZS5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gIT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGk7XG4gICAgICAgICAgICB9LCB0LnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3RHcmFwaDtcbiAgICAgICAgICAgIH0sIHQucHJvdG90eXBlLnNldFJvb3RHcmFwaCA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgaWYgKGkuZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gdGhpcylcbiAgICAgICAgICAgICAgICB0aHJvdyBcIlJvb3Qgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgICAgICAgICAgICB0aGlzLnJvb3RHcmFwaCA9IGksIGkucGFyZW50ID09IG51bGwgJiYgKGkucGFyZW50ID0gdGhpcy5sYXlvdXQubmV3Tm9kZShcIlJvb3Qgbm9kZVwiKSk7XG4gICAgICAgICAgICB9LCB0LnByb3RvdHlwZS5nZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0O1xuICAgICAgICAgICAgfSwgdC5wcm90b3R5cGUuaXNPbmVBbmNlc3Rvck9mT3RoZXIgPSBmdW5jdGlvbihpLCBsKSB7XG4gICAgICAgICAgICAgIGlmICghKGkgIT0gbnVsbCAmJiBsICE9IG51bGwpKVxuICAgICAgICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICAgICAgICBpZiAoaSA9PSBsKVxuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgdmFyIGcgPSBpLmdldE93bmVyKCksIG47XG4gICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAobiA9IGcuZ2V0UGFyZW50KCksIG4gPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChuID09IGwpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgaWYgKGcgPSBuLmdldE93bmVyKCksIGcgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9IHdoaWxlICghMCk7XG4gICAgICAgICAgICAgIGcgPSBsLmdldE93bmVyKCk7XG4gICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAobiA9IGcuZ2V0UGFyZW50KCksIG4gPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChuID09IGkpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgaWYgKGcgPSBuLmdldE93bmVyKCksIGcgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9IHdoaWxlICghMCk7XG4gICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0sIHQucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSwgbCwgZywgbiwgZCwgciA9IHRoaXMuZ2V0QWxsRWRnZXMoKSwgaCA9IHIubGVuZ3RoLCBhID0gMDsgYSA8IGg7IGErKykge1xuICAgICAgICAgICAgICAgIGlmIChpID0gclthXSwgbCA9IGkuc291cmNlLCBnID0gaS50YXJnZXQsIGkubGNhID0gbnVsbCwgaS5zb3VyY2VJbkxjYSA9IGwsIGkudGFyZ2V0SW5MY2EgPSBnLCBsID09IGcpIHtcbiAgICAgICAgICAgICAgICAgIGkubGNhID0gbC5nZXRPd25lcigpO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobiA9IGwuZ2V0T3duZXIoKTsgaS5sY2EgPT0gbnVsbDsgKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGkudGFyZ2V0SW5MY2EgPSBnLCBkID0gZy5nZXRPd25lcigpOyBpLmxjYSA9PSBudWxsOyApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgPT0gbikge1xuICAgICAgICAgICAgICAgICAgICAgIGkubGNhID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZCA9PSB0aGlzLnJvb3RHcmFwaClcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkubGNhICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGkudGFyZ2V0SW5MY2EgPSBkLmdldFBhcmVudCgpLCBkID0gaS50YXJnZXRJbkxjYS5nZXRPd25lcigpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKG4gPT0gdGhpcy5yb290R3JhcGgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgaS5sY2EgPT0gbnVsbCAmJiAoaS5zb3VyY2VJbkxjYSA9IG4uZ2V0UGFyZW50KCksIG4gPSBpLnNvdXJjZUluTGNhLmdldE93bmVyKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaS5sY2EgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0LnByb3RvdHlwZS5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IgPSBmdW5jdGlvbihpLCBsKSB7XG4gICAgICAgICAgICAgIGlmIChpID09IGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGkuZ2V0T3duZXIoKTtcbiAgICAgICAgICAgICAgdmFyIGcgPSBpLmdldE93bmVyKCk7XG4gICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoZyA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBsLmdldE93bmVyKCk7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgaWYgKG4gPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBpZiAobiA9PSBnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICAgIG4gPSBuLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoITApO1xuICAgICAgICAgICAgICAgIGcgPSBnLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gICAgICAgICAgICAgIH0gd2hpbGUgKCEwKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGc7XG4gICAgICAgICAgICB9LCB0LnByb3RvdHlwZS5jYWxjSW5jbHVzaW9uVHJlZURlcHRocyA9IGZ1bmN0aW9uKGksIGwpIHtcbiAgICAgICAgICAgICAgaSA9PSBudWxsICYmIGwgPT0gbnVsbCAmJiAoaSA9IHRoaXMucm9vdEdyYXBoLCBsID0gMSk7XG4gICAgICAgICAgICAgIGZvciAodmFyIGcsIG4gPSBpLmdldE5vZGVzKCksIGQgPSBuLmxlbmd0aCwgciA9IDA7IHIgPCBkOyByKyspXG4gICAgICAgICAgICAgICAgZyA9IG5bcl0sIGcuaW5jbHVzaW9uVHJlZURlcHRoID0gbCwgZy5jaGlsZCAhPSBudWxsICYmIHRoaXMuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMoZy5jaGlsZCwgbCArIDEpO1xuICAgICAgICAgICAgfSwgdC5wcm90b3R5cGUuaW5jbHVkZXNJbnZhbGlkRWRnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBpLCBsID0gdGhpcy5lZGdlcy5sZW5ndGgsIGcgPSAwOyBnIDwgbDsgZysrKVxuICAgICAgICAgICAgICAgIGlmIChpID0gdGhpcy5lZGdlc1tnXSwgdGhpcy5pc09uZUFuY2VzdG9yT2ZPdGhlcihpLnNvdXJjZSwgaS50YXJnZXQpKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9LCBOLmV4cG9ydHMgPSB0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDcgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihOLCBJLCBMKSB7XG4gICAgICAgICAgICB2YXIgbyA9IEwoMCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgdCBpbiBvKVxuICAgICAgICAgICAgICBlW3RdID0gb1t0XTtcbiAgICAgICAgICAgIGUuTUFYX0lURVJBVElPTlMgPSAyNTAwLCBlLkRFRkFVTFRfRURHRV9MRU5HVEggPSA1MCwgZS5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCA9IDAuNDUsIGUuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSA0NTAwLCBlLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IDAuNCwgZS5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSAxLCBlLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSAzLjgsIGUuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDEuNSwgZS5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTiA9ICEwLCBlLkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTiA9ICEwLCBlLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSAwLjMsIGUuQ09PTElOR19BREFQVEFUSU9OX0ZBQ1RPUiA9IDAuMzMsIGUuQURBUFRBVElPTl9MT1dFUl9OT0RFX0xJTUlUID0gMWUzLCBlLkFEQVBUQVRJT05fVVBQRVJfTk9ERV9MSU1JVCA9IDVlMywgZS5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUwgPSAxMDAsIGUuTUFYX05PREVfRElTUExBQ0VNRU5UID0gZS5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUwgKiAzLCBlLk1JTl9SRVBVTFNJT05fRElTVCA9IGUuREVGQVVMVF9FREdFX0xFTkdUSCAvIDEwLCBlLkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCA9IDEwMCwgZS5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SID0gMC4xLCBlLk1JTl9FREdFX0xFTkdUSCA9IDEsIGUuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPSAxMCwgTi5leHBvcnRzID0gZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiA4ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oTiwgSSwgTCkge1xuICAgICAgICAgICAgdmFyIG8gPSBMKDEyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLmNhbGNTZXBhcmF0aW9uQW1vdW50ID0gZnVuY3Rpb24odCwgaSwgbCwgZykge1xuICAgICAgICAgICAgICBpZiAoIXQuaW50ZXJzZWN0cyhpKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgQXJyYXkoMik7XG4gICAgICAgICAgICAgIHRoaXMuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXModCwgaSwgbiksIGxbMF0gPSBNYXRoLm1pbih0LmdldFJpZ2h0KCksIGkuZ2V0UmlnaHQoKSkgLSBNYXRoLm1heCh0LngsIGkueCksIGxbMV0gPSBNYXRoLm1pbih0LmdldEJvdHRvbSgpLCBpLmdldEJvdHRvbSgpKSAtIE1hdGgubWF4KHQueSwgaS55KSwgdC5nZXRYKCkgPD0gaS5nZXRYKCkgJiYgdC5nZXRSaWdodCgpID49IGkuZ2V0UmlnaHQoKSA/IGxbMF0gKz0gTWF0aC5taW4oaS5nZXRYKCkgLSB0LmdldFgoKSwgdC5nZXRSaWdodCgpIC0gaS5nZXRSaWdodCgpKSA6IGkuZ2V0WCgpIDw9IHQuZ2V0WCgpICYmIGkuZ2V0UmlnaHQoKSA+PSB0LmdldFJpZ2h0KCkgJiYgKGxbMF0gKz0gTWF0aC5taW4odC5nZXRYKCkgLSBpLmdldFgoKSwgaS5nZXRSaWdodCgpIC0gdC5nZXRSaWdodCgpKSksIHQuZ2V0WSgpIDw9IGkuZ2V0WSgpICYmIHQuZ2V0Qm90dG9tKCkgPj0gaS5nZXRCb3R0b20oKSA/IGxbMV0gKz0gTWF0aC5taW4oaS5nZXRZKCkgLSB0LmdldFkoKSwgdC5nZXRCb3R0b20oKSAtIGkuZ2V0Qm90dG9tKCkpIDogaS5nZXRZKCkgPD0gdC5nZXRZKCkgJiYgaS5nZXRCb3R0b20oKSA+PSB0LmdldEJvdHRvbSgpICYmIChsWzFdICs9IE1hdGgubWluKHQuZ2V0WSgpIC0gaS5nZXRZKCksIGkuZ2V0Qm90dG9tKCkgLSB0LmdldEJvdHRvbSgpKSk7XG4gICAgICAgICAgICAgIHZhciBkID0gTWF0aC5hYnMoKGkuZ2V0Q2VudGVyWSgpIC0gdC5nZXRDZW50ZXJZKCkpIC8gKGkuZ2V0Q2VudGVyWCgpIC0gdC5nZXRDZW50ZXJYKCkpKTtcbiAgICAgICAgICAgICAgaS5nZXRDZW50ZXJZKCkgPT09IHQuZ2V0Q2VudGVyWSgpICYmIGkuZ2V0Q2VudGVyWCgpID09PSB0LmdldENlbnRlclgoKSAmJiAoZCA9IDEpO1xuICAgICAgICAgICAgICB2YXIgciA9IGQgKiBsWzBdLCBoID0gbFsxXSAvIGQ7XG4gICAgICAgICAgICAgIGxbMF0gPCBoID8gaCA9IGxbMF0gOiByID0gbFsxXSwgbFswXSA9IC0xICogblswXSAqIChoIC8gMiArIGcpLCBsWzFdID0gLTEgKiBuWzFdICogKHIgLyAyICsgZyk7XG4gICAgICAgICAgICB9LCBlLmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzID0gZnVuY3Rpb24odCwgaSwgbCkge1xuICAgICAgICAgICAgICB0LmdldENlbnRlclgoKSA8IGkuZ2V0Q2VudGVyWCgpID8gbFswXSA9IC0xIDogbFswXSA9IDEsIHQuZ2V0Q2VudGVyWSgpIDwgaS5nZXRDZW50ZXJZKCkgPyBsWzFdID0gLTEgOiBsWzFdID0gMTtcbiAgICAgICAgICAgIH0sIGUuZ2V0SW50ZXJzZWN0aW9uMiA9IGZ1bmN0aW9uKHQsIGksIGwpIHtcbiAgICAgICAgICAgICAgdmFyIGcgPSB0LmdldENlbnRlclgoKSwgbiA9IHQuZ2V0Q2VudGVyWSgpLCBkID0gaS5nZXRDZW50ZXJYKCksIHIgPSBpLmdldENlbnRlclkoKTtcbiAgICAgICAgICAgICAgaWYgKHQuaW50ZXJzZWN0cyhpKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbFswXSA9IGcsIGxbMV0gPSBuLCBsWzJdID0gZCwgbFszXSA9IHIsICEwO1xuICAgICAgICAgICAgICB2YXIgaCA9IHQuZ2V0WCgpLCBhID0gdC5nZXRZKCksIHAgPSB0LmdldFJpZ2h0KCksIHYgPSB0LmdldFgoKSwgRCA9IHQuZ2V0Qm90dG9tKCksIHUgPSB0LmdldFJpZ2h0KCksIFQgPSB0LmdldFdpZHRoSGFsZigpLCB5ID0gdC5nZXRIZWlnaHRIYWxmKCksIE8gPSBpLmdldFgoKSwgcyA9IGkuZ2V0WSgpLCBmID0gaS5nZXRSaWdodCgpLCBjID0gaS5nZXRYKCksIEUgPSBpLmdldEJvdHRvbSgpLCBBID0gaS5nZXRSaWdodCgpLCBtID0gaS5nZXRXaWR0aEhhbGYoKSwgQyA9IGkuZ2V0SGVpZ2h0SGFsZigpLCBSID0gITEsIE0gPSAhMTtcbiAgICAgICAgICAgICAgaWYgKGcgPT09IGQpIHtcbiAgICAgICAgICAgICAgICBpZiAobiA+IHIpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbFswXSA9IGcsIGxbMV0gPSBhLCBsWzJdID0gZCwgbFszXSA9IEUsICExO1xuICAgICAgICAgICAgICAgIGlmIChuIDwgcilcbiAgICAgICAgICAgICAgICAgIHJldHVybiBsWzBdID0gZywgbFsxXSA9IEQsIGxbMl0gPSBkLCBsWzNdID0gcywgITE7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobiA9PT0gcikge1xuICAgICAgICAgICAgICAgIGlmIChnID4gZClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBsWzBdID0gaCwgbFsxXSA9IG4sIGxbMl0gPSBmLCBsWzNdID0gciwgITE7XG4gICAgICAgICAgICAgICAgaWYgKGcgPCBkKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGxbMF0gPSBwLCBsWzFdID0gbiwgbFsyXSA9IE8sIGxbM10gPSByLCAhMTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgUyA9IHQuaGVpZ2h0IC8gdC53aWR0aCwgWSA9IGkuaGVpZ2h0IC8gaS53aWR0aCwgdyA9IChyIC0gbikgLyAoZCAtIGcpLCB4ID0gdm9pZCAwLCBGID0gdm9pZCAwLCBVID0gdm9pZCAwLCBQID0gdm9pZCAwLCBfID0gdm9pZCAwLCBYID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmICgtUyA9PT0gdyA/IGcgPiBkID8gKGxbMF0gPSB2LCBsWzFdID0gRCwgUiA9ICEwKSA6IChsWzBdID0gcCwgbFsxXSA9IGEsIFIgPSAhMCkgOiBTID09PSB3ICYmIChnID4gZCA/IChsWzBdID0gaCwgbFsxXSA9IGEsIFIgPSAhMCkgOiAobFswXSA9IHUsIGxbMV0gPSBELCBSID0gITApKSwgLVkgPT09IHcgPyBkID4gZyA/IChsWzJdID0gYywgbFszXSA9IEUsIE0gPSAhMCkgOiAobFsyXSA9IGYsIGxbM10gPSBzLCBNID0gITApIDogWSA9PT0gdyAmJiAoZCA+IGcgPyAobFsyXSA9IE8sIGxbM10gPSBzLCBNID0gITApIDogKGxbMl0gPSBBLCBsWzNdID0gRSwgTSA9ICEwKSksIFIgJiYgTSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICBpZiAoZyA+IGQgPyBuID4gciA/ICh4ID0gdGhpcy5nZXRDYXJkaW5hbERpcmVjdGlvbihTLCB3LCA0KSwgRiA9IHRoaXMuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oWSwgdywgMikpIDogKHggPSB0aGlzLmdldENhcmRpbmFsRGlyZWN0aW9uKC1TLCB3LCAzKSwgRiA9IHRoaXMuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLVksIHcsIDEpKSA6IG4gPiByID8gKHggPSB0aGlzLmdldENhcmRpbmFsRGlyZWN0aW9uKC1TLCB3LCAxKSwgRiA9IHRoaXMuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLVksIHcsIDMpKSA6ICh4ID0gdGhpcy5nZXRDYXJkaW5hbERpcmVjdGlvbihTLCB3LCAyKSwgRiA9IHRoaXMuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oWSwgdywgNCkpLCAhUilcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgUCA9IGEsIFUgPSBnICsgLXkgLyB3LCBsWzBdID0gVSwgbFsxXSA9IFA7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICBVID0gdSwgUCA9IG4gKyBUICogdywgbFswXSA9IFUsIGxbMV0gPSBQO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgUCA9IEQsIFUgPSBnICsgeSAvIHcsIGxbMF0gPSBVLCBsWzFdID0gUDtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgIFUgPSB2LCBQID0gbiArIC1UICogdywgbFswXSA9IFUsIGxbMV0gPSBQO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghTSlcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoRikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgWCA9IHMsIF8gPSBkICsgLUMgLyB3LCBsWzJdID0gXywgbFszXSA9IFg7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICBfID0gQSwgWCA9IHIgKyBtICogdywgbFsyXSA9IF8sIGxbM10gPSBYO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgWCA9IEUsIF8gPSBkICsgQyAvIHcsIGxbMl0gPSBfLCBsWzNdID0gWDtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgIF8gPSBjLCBYID0gciArIC1tICogdywgbFsyXSA9IF8sIGxbM10gPSBYO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0sIGUuZ2V0Q2FyZGluYWxEaXJlY3Rpb24gPSBmdW5jdGlvbih0LCBpLCBsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ID4gaSA/IGwgOiAxICsgbCAlIDQ7XG4gICAgICAgICAgICB9LCBlLmdldEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKHQsIGksIGwsIGcpIHtcbiAgICAgICAgICAgICAgaWYgKGcgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnRlcnNlY3Rpb24yKHQsIGksIGwpO1xuICAgICAgICAgICAgICB2YXIgbiA9IHQueCwgZCA9IHQueSwgciA9IGkueCwgaCA9IGkueSwgYSA9IGwueCwgcCA9IGwueSwgdiA9IGcueCwgRCA9IGcueSwgdSA9IHZvaWQgMCwgVCA9IHZvaWQgMCwgeSA9IHZvaWQgMCwgTyA9IHZvaWQgMCwgcyA9IHZvaWQgMCwgZiA9IHZvaWQgMCwgYyA9IHZvaWQgMCwgRSA9IHZvaWQgMCwgQSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgcmV0dXJuIHkgPSBoIC0gZCwgcyA9IG4gLSByLCBjID0gciAqIGQgLSBuICogaCwgTyA9IEQgLSBwLCBmID0gYSAtIHYsIEUgPSB2ICogcCAtIGEgKiBELCBBID0geSAqIGYgLSBPICogcywgQSA9PT0gMCA/IG51bGwgOiAodSA9IChzICogRSAtIGYgKiBjKSAvIEEsIFQgPSAoTyAqIGMgLSB5ICogRSkgLyBBLCBuZXcgbyh1LCBUKSk7XG4gICAgICAgICAgICB9LCBlLmFuZ2xlT2ZWZWN0b3IgPSBmdW5jdGlvbih0LCBpLCBsLCBnKSB7XG4gICAgICAgICAgICAgIHZhciBuID0gdm9pZCAwO1xuICAgICAgICAgICAgICByZXR1cm4gdCAhPT0gbCA/IChuID0gTWF0aC5hdGFuKChnIC0gaSkgLyAobCAtIHQpKSwgbCA8IHQgPyBuICs9IE1hdGguUEkgOiBnIDwgaSAmJiAobiArPSB0aGlzLlRXT19QSSkpIDogZyA8IGkgPyBuID0gdGhpcy5PTkVfQU5EX0hBTEZfUEkgOiBuID0gdGhpcy5IQUxGX1BJLCBuO1xuICAgICAgICAgICAgfSwgZS5kb0ludGVyc2VjdCA9IGZ1bmN0aW9uKHQsIGksIGwsIGcpIHtcbiAgICAgICAgICAgICAgdmFyIG4gPSB0LngsIGQgPSB0LnksIHIgPSBpLngsIGggPSBpLnksIGEgPSBsLngsIHAgPSBsLnksIHYgPSBnLngsIEQgPSBnLnksIHUgPSAociAtIG4pICogKEQgLSBwKSAtICh2IC0gYSkgKiAoaCAtIGQpO1xuICAgICAgICAgICAgICBpZiAodSA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgIHZhciBUID0gKChEIC0gcCkgKiAodiAtIG4pICsgKGEgLSB2KSAqIChEIC0gZCkpIC8gdSwgeSA9ICgoZCAtIGgpICogKHYgLSBuKSArIChyIC0gbikgKiAoRCAtIGQpKSAvIHU7XG4gICAgICAgICAgICAgIHJldHVybiAwIDwgVCAmJiBUIDwgMSAmJiAwIDwgeSAmJiB5IDwgMTtcbiAgICAgICAgICAgIH0sIGUuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEksIGUuT05FX0FORF9IQUxGX1BJID0gMS41ICogTWF0aC5QSSwgZS5UV09fUEkgPSAyICogTWF0aC5QSSwgZS5USFJFRV9QSSA9IDMgKiBNYXRoLlBJLCBOLmV4cG9ydHMgPSBlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDkgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihOLCBJLCBMKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5zaWduID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZSA+IDAgPyAxIDogZSA8IDAgPyAtMSA6IDA7XG4gICAgICAgICAgICB9LCBvLmZsb29yID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZSA8IDAgPyBNYXRoLmNlaWwoZSkgOiBNYXRoLmZsb29yKGUpO1xuICAgICAgICAgICAgfSwgby5jZWlsID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZSA8IDAgPyBNYXRoLmZsb29yKGUpIDogTWF0aC5jZWlsKGUpO1xuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gbztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAxMCAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG8oKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvLk1BWF9WQUxVRSA9IDIxNDc0ODM2NDcsIG8uTUlOX1ZBTFVFID0gLTIxNDc0ODM2NDgsIE4uZXhwb3J0cyA9IG87XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMTEgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihOLCBJLCBMKSB7XG4gICAgICAgICAgICB2YXIgbyA9IC8qIEBfX1BVUkVfXyAqLyAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIG4oZCwgcikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgci5sZW5ndGg7IGgrKykge1xuICAgICAgICAgICAgICAgICAgdmFyIGEgPSByW2hdO1xuICAgICAgICAgICAgICAgICAgYS5lbnVtZXJhYmxlID0gYS5lbnVtZXJhYmxlIHx8ICExLCBhLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gYSAmJiAoYS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGQsIGEua2V5LCBhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQsIHIsIGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gciAmJiBuKGQucHJvdG90eXBlLCByKSwgaCAmJiBuKGQsIGgpLCBkO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUobiwgZCkge1xuICAgICAgICAgICAgICBpZiAoIShuIGluc3RhbmNlb2YgZCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ID0gZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogZCwgbmV4dDogbnVsbCwgcHJldjogbnVsbCB9O1xuICAgICAgICAgICAgfSwgaSA9IGZ1bmN0aW9uKGQsIHIsIGgsIGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQgIT09IG51bGwgPyBkLm5leHQgPSByIDogYS5oZWFkID0gciwgaCAhPT0gbnVsbCA/IGgucHJldiA9IHIgOiBhLnRhaWwgPSByLCByLnByZXYgPSBkLCByLm5leHQgPSBoLCBhLmxlbmd0aCsrLCByO1xuICAgICAgICAgICAgfSwgbCA9IGZ1bmN0aW9uKGQsIHIpIHtcbiAgICAgICAgICAgICAgdmFyIGggPSBkLnByZXYsIGEgPSBkLm5leHQ7XG4gICAgICAgICAgICAgIHJldHVybiBoICE9PSBudWxsID8gaC5uZXh0ID0gYSA6IHIuaGVhZCA9IGEsIGEgIT09IG51bGwgPyBhLnByZXYgPSBoIDogci50YWlsID0gaCwgZC5wcmV2ID0gZC5uZXh0ID0gbnVsbCwgci5sZW5ndGgtLSwgZDtcbiAgICAgICAgICAgIH0sIGcgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIG4oZCkge1xuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcztcbiAgICAgICAgICAgICAgICBlKHRoaXMsIG4pLCB0aGlzLmxlbmd0aCA9IDAsIHRoaXMuaGVhZCA9IG51bGwsIHRoaXMudGFpbCA9IG51bGwsIGQ/LmZvckVhY2goZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIucHVzaChoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbyhuLCBbe1xuICAgICAgICAgICAgICAgIGtleTogXCJzaXplXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJpbnNlcnRCZWZvcmVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24ociwgaCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGkoaC5wcmV2LCB0KHIpLCBoLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaW5zZXJ0QWZ0ZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24ociwgaCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGkoaCwgdChyKSwgaC5uZXh0LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaW5zZXJ0Tm9kZUJlZm9yZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihyLCBoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaShoLnByZXYsIHIsIGgsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJpbnNlcnROb2RlQWZ0ZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24ociwgaCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGkoaCwgciwgaC5uZXh0LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicHVzaFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaSh0aGlzLnRhaWwsIHQociksIG51bGwsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJ1bnNoaWZ0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpKG51bGwsIHQociksIHRoaXMuaGVhZCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlbW92ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbChyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicG9wXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGwodGhpcy50YWlsLCB0aGlzKS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicG9wTm9kZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBsKHRoaXMudGFpbCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNoaWZ0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGwodGhpcy5oZWFkLCB0aGlzKS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2hpZnROb2RlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGwodGhpcy5oZWFkLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ2V0X29iamVjdF9hdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICBpZiAociA8PSB0aGlzLmxlbmd0aCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSAxLCBhID0gdGhpcy5oZWFkOyBoIDwgcjsgKVxuICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLm5leHQsIGgrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldF9vYmplY3RfYXRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24ociwgaCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHIgPD0gdGhpcy5sZW5ndGgoKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMSwgcCA9IHRoaXMuaGVhZDsgYSA8IHI7IClcbiAgICAgICAgICAgICAgICAgICAgICBwID0gcC5uZXh0LCBhKys7XG4gICAgICAgICAgICAgICAgICAgIHAudmFsdWUgPSBoO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfV0pLCBuO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIE4uZXhwb3J0cyA9IGc7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMTIgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihOLCBJLCBMKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBvKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgdGhpcy54ID0gbnVsbCwgdGhpcy55ID0gbnVsbCwgZSA9PSBudWxsICYmIHQgPT0gbnVsbCAmJiBpID09IG51bGwgPyAodGhpcy54ID0gMCwgdGhpcy55ID0gMCkgOiB0eXBlb2YgZSA9PSBcIm51bWJlclwiICYmIHR5cGVvZiB0ID09IFwibnVtYmVyXCIgJiYgaSA9PSBudWxsID8gKHRoaXMueCA9IGUsIHRoaXMueSA9IHQpIDogZS5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIiAmJiB0ID09IG51bGwgJiYgaSA9PSBudWxsICYmIChpID0gZSwgdGhpcy54ID0gaS54LCB0aGlzLnkgPSBpLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy54O1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICBlLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJQb2ludFwiICYmIHQgPT0gbnVsbCAmJiBpID09IG51bGwgPyAoaSA9IGUsIHRoaXMuc2V0TG9jYXRpb24oaS54LCBpLnkpKSA6IHR5cGVvZiBlID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHQgPT0gXCJudW1iZXJcIiAmJiBpID09IG51bGwgJiYgKHBhcnNlSW50KGUpID09IGUgJiYgcGFyc2VJbnQodCkgPT0gdCA/IHRoaXMubW92ZShlLCB0KSA6ICh0aGlzLnggPSBNYXRoLmZsb29yKGUgKyAwLjUpLCB0aGlzLnkgPSBNYXRoLmZsb29yKHQgKyAwLjUpKSk7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICB0aGlzLnggPSBlLCB0aGlzLnkgPSB0O1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICB0aGlzLnggKz0gZSwgdGhpcy55ICs9IHQ7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIGlmIChlLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJQb2ludFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnggPT0gdC54ICYmIHRoaXMueSA9PSB0Lnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMgPT0gZTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgbygpLmNvbnN0cnVjdG9yLm5hbWUgKyBcIlt4PVwiICsgdGhpcy54ICsgXCIseT1cIiArIHRoaXMueSArIFwiXVwiO1xuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gbztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAxMyAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG8oZSwgdCwgaSwgbCkge1xuICAgICAgICAgICAgICB0aGlzLnggPSAwLCB0aGlzLnkgPSAwLCB0aGlzLndpZHRoID0gMCwgdGhpcy5oZWlnaHQgPSAwLCBlICE9IG51bGwgJiYgdCAhPSBudWxsICYmIGkgIT0gbnVsbCAmJiBsICE9IG51bGwgJiYgKHRoaXMueCA9IGUsIHRoaXMueSA9IHQsIHRoaXMud2lkdGggPSBpLCB0aGlzLmhlaWdodCA9IGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy54O1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy54ID0gZTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHRoaXMueSA9IGU7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICB0aGlzLndpZHRoID0gZTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gZTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmludGVyc2VjdHMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAhKHRoaXMuZ2V0UmlnaHQoKSA8IGUueCB8fCB0aGlzLmdldEJvdHRvbSgpIDwgZS55IHx8IGUuZ2V0UmlnaHQoKSA8IHRoaXMueCB8fCBlLmdldEJvdHRvbSgpIDwgdGhpcy55KTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0TWluWCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRYKCk7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRNYXhYID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFgoKSArIHRoaXMud2lkdGg7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRNaW5ZID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFkoKTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmdldE1heFkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WSgpICsgdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRXaWR0aEhhbGYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0SGVpZ2h0SGFsZiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gbztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAxNCAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIHZhciBvID0gdHlwZW9mIFN5bWJvbCA9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSBcInN5bWJvbFwiID8gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHQ7XG4gICAgICAgICAgICB9IDogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICByZXR1cm4gdCAmJiB0eXBlb2YgU3ltYm9sID09IFwiZnVuY3Rpb25cIiAmJiB0LmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgdCAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5sYXN0SUQgPSAwLCBlLmNyZWF0ZUlEID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICByZXR1cm4gZS5pc1ByaW1pdGl2ZSh0KSA/IHQgOiAodC51bmlxdWVJRCAhPSBudWxsIHx8ICh0LnVuaXF1ZUlEID0gZS5nZXRTdHJpbmcoKSwgZS5sYXN0SUQrKyksIHQudW5pcXVlSUQpO1xuICAgICAgICAgICAgfSwgZS5nZXRTdHJpbmcgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ID09IG51bGwgJiYgKHQgPSBlLmxhc3RJRCksIFwiT2JqZWN0I1wiICsgdDtcbiAgICAgICAgICAgIH0sIGUuaXNQcmltaXRpdmUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHZhciBpID0gdHlwZW9mIHQgPiBcInVcIiA/IFwidW5kZWZpbmVkXCIgOiBvKHQpO1xuICAgICAgICAgICAgICByZXR1cm4gdCA9PSBudWxsIHx8IGkgIT0gXCJvYmplY3RcIiAmJiBpICE9IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgICAgIH0sIE4uZXhwb3J0cyA9IGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMTUgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihOLCBJLCBMKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBvKGEpIHtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gMCwgdiA9IEFycmF5KGEubGVuZ3RoKTsgcCA8IGEubGVuZ3RoOyBwKyspXG4gICAgICAgICAgICAgICAgICB2W3BdID0gYVtwXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZSA9IEwoMCksIHQgPSBMKDYpLCBpID0gTCgzKSwgbCA9IEwoMSksIGcgPSBMKDUpLCBuID0gTCg0KSwgZCA9IEwoMTcpLCByID0gTCgyNyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBoKGEpIHtcbiAgICAgICAgICAgICAgci5jYWxsKHRoaXMpLCB0aGlzLmxheW91dFF1YWxpdHkgPSBlLlFVQUxJVFksIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9IGUuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVELCB0aGlzLmluY3JlbWVudGFsID0gZS5ERUZBVUxUX0lOQ1JFTUVOVEFMLCB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gZS5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQsIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gZS5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VULCB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IGUuREVGQVVMVF9BTklNQVRJT05fUEVSSU9ELCB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID0gZS5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTLCB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB0aGlzLmdyYXBoTWFuYWdlciA9IG5ldyB0KHRoaXMpLCB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSAhMSwgdGhpcy5pc1N1YkxheW91dCA9ICExLCB0aGlzLmlzUmVtb3RlVXNlID0gITEsIGEgIT0gbnVsbCAmJiAodGhpcy5pc1JlbW90ZVVzZSA9IGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaC5SQU5ET01fU0VFRCA9IDEsIGgucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShyLnByb3RvdHlwZSksIGgucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5uZXdHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgdCh0aGlzKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyID0gYSwgYTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLm5ld0dyYXBoID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGcobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIGEpO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUubmV3Tm9kZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBpKHRoaXMuZ3JhcGhNYW5hZ2VyLCBhKTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgbChudWxsLCBudWxsLCBhKTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmNoZWNrTGF5b3V0U3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpID09IG51bGwgfHwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCkubGVuZ3RoID09IDAgfHwgdGhpcy5ncmFwaE1hbmFnZXIuaW5jbHVkZXNJbnZhbGlkRWRnZSgpO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUucnVuTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9ICExLCB0aGlzLnRpbGluZ1ByZUxheW91dCAmJiB0aGlzLnRpbGluZ1ByZUxheW91dCgpLCB0aGlzLmluaXRQYXJhbWV0ZXJzKCk7XG4gICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0xheW91dFN1Y2Nlc3MoKSA/IGEgPSAhMSA6IGEgPSB0aGlzLmxheW91dCgpLCBlLkFOSU1BVEUgPT09IFwiZHVyaW5nXCIgPyAhMSA6IChhICYmICh0aGlzLmlzU3ViTGF5b3V0IHx8IHRoaXMuZG9Qb3N0TGF5b3V0KCkpLCB0aGlzLnRpbGluZ1Bvc3RMYXlvdXQgJiYgdGhpcy50aWxpbmdQb3N0TGF5b3V0KCksIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9ICEwLCBhKTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmRvUG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudGFsIHx8IHRoaXMudHJhbnNmb3JtKCksIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS51cGRhdGUyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgJiYgKHRoaXMuY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzKCksIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKSksICF0aGlzLmlzUmVtb3RlVXNlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCksIHAgPSAwOyBwIDwgYS5sZW5ndGg7IHArKylcbiAgICAgICAgICAgICAgICAgIGFbcF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdiA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpLCBwID0gMDsgcCA8IHYubGVuZ3RoOyBwKyspXG4gICAgICAgICAgICAgICAgICB2W3BdO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKGEgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZTIoKTtcbiAgICAgICAgICAgICAgZWxzZSBpZiAoYSBpbnN0YW5jZW9mIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGE7XG4gICAgICAgICAgICAgICAgaWYgKHAuZ2V0Q2hpbGQoKSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdiA9IHAuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLCBEID0gMDsgRCA8IHYubGVuZ3RoOyBEKyspXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZSh2W0RdKTtcbiAgICAgICAgICAgICAgICBpZiAocC52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHUgPSBwLnZHcmFwaE9iamVjdDtcbiAgICAgICAgICAgICAgICAgIHUudXBkYXRlKHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhIGluc3RhbmNlb2YgbCkge1xuICAgICAgICAgICAgICAgIHZhciBUID0gYTtcbiAgICAgICAgICAgICAgICBpZiAoVC52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHkgPSBULnZHcmFwaE9iamVjdDtcbiAgICAgICAgICAgICAgICAgIHkudXBkYXRlKFQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhIGluc3RhbmNlb2YgZykge1xuICAgICAgICAgICAgICAgIHZhciBPID0gYTtcbiAgICAgICAgICAgICAgICBpZiAoTy52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHMgPSBPLnZHcmFwaE9iamVjdDtcbiAgICAgICAgICAgICAgICAgIHMudXBkYXRlKE8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N1YkxheW91dCB8fCAodGhpcy5sYXlvdXRRdWFsaXR5ID0gZS5RVUFMSVRZLCB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IGUuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCwgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBlLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCwgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IGUuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VULCB0aGlzLmluY3JlbWVudGFsID0gZS5ERUZBVUxUX0lOQ1JFTUVOVEFMLCB0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgPSBlLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCwgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9IGUuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyksIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ICYmICh0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gITEpO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICBpZiAoYSA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKG5ldyBuKDAsIDApKTtcbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgZCgpLCB2ID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLnVwZGF0ZUxlZnRUb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAodiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBwLnNldFdvcmxkT3JnWChhLngpLCBwLnNldFdvcmxkT3JnWShhLnkpLCBwLnNldERldmljZU9yZ1godi54KSwgcC5zZXREZXZpY2VPcmdZKHYueSk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBEID0gdGhpcy5nZXRBbGxOb2RlcygpLCB1LCBUID0gMDsgVCA8IEQubGVuZ3RoOyBUKyspXG4gICAgICAgICAgICAgICAgICAgIHUgPSBEW1RdLCB1LnRyYW5zZm9ybShwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLnBvc2l0aW9uTm9kZXNSYW5kb21seSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKGEgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSh0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKSksIHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpLnVwZGF0ZUJvdW5kcyghMCk7XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwLCB2LCBEID0gYS5nZXROb2RlcygpLCB1ID0gMDsgdSA8IEQubGVuZ3RoOyB1KyspXG4gICAgICAgICAgICAgICAgICBwID0gRFt1XSwgdiA9IHAuZ2V0Q2hpbGQoKSwgdiA9PSBudWxsIHx8IHYuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMCA/IHAuc2NhdHRlcigpIDogKHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KHYpLCBwLnVwZGF0ZUJvdW5kcygpKTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldEZsYXRGb3Jlc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBwID0gITAsIHYgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKSwgRCA9ICEwLCB1ID0gMDsgdSA8IHYubGVuZ3RoOyB1KyspXG4gICAgICAgICAgICAgICAgdlt1XS5nZXRDaGlsZCgpICE9IG51bGwgJiYgKEQgPSAhMSk7XG4gICAgICAgICAgICAgIGlmICghRClcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgICAgdmFyIFQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLCB5ID0gW10sIE8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBzID0gW107XG4gICAgICAgICAgICAgIGZvciAocyA9IHMuY29uY2F0KHYpOyBzLmxlbmd0aCA+IDAgJiYgcDsgKSB7XG4gICAgICAgICAgICAgICAgZm9yICh5LnB1c2goc1swXSk7IHkubGVuZ3RoID4gMCAmJiBwOyApIHtcbiAgICAgICAgICAgICAgICAgIHZhciBmID0geVswXTtcbiAgICAgICAgICAgICAgICAgIHkuc3BsaWNlKDAsIDEpLCBULmFkZChmKTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSBmLmdldEVkZ2VzKCksIHUgPSAwOyB1IDwgYy5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgRSA9IGNbdV0uZ2V0T3RoZXJFbmQoZik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPLmdldChmKSAhPSBFKVxuICAgICAgICAgICAgICAgICAgICAgIGlmICghVC5oYXMoRSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB5LnB1c2goRSksIE8uc2V0KEUsIGYpO1xuICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXApXG4gICAgICAgICAgICAgICAgICBhID0gW107XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgQSA9IFtdLmNvbmNhdChvKFQpKTtcbiAgICAgICAgICAgICAgICAgIGEucHVzaChBKTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgQS5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IEFbdV0sIEMgPSBzLmluZGV4T2YobSk7XG4gICAgICAgICAgICAgICAgICAgIEMgPiAtMSAmJiBzLnNwbGljZShDLCAxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLCBPID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IFtdLCB2ID0gYS5zb3VyY2UsIEQgPSB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IoYS5zb3VyY2UsIGEudGFyZ2V0KSwgdSA9IDA7IHUgPCBhLmJlbmRwb2ludHMubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgVCA9IHRoaXMubmV3Tm9kZShudWxsKTtcbiAgICAgICAgICAgICAgICBULnNldFJlY3QobmV3IFBvaW50KDAsIDApLCBuZXcgRGltZW5zaW9uKDEsIDEpKSwgRC5hZGQoVCk7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKHksIHYsIFQpLCBwLmFkZChUKSwgdiA9IFQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIHkgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5hZGQoeSwgdiwgYS50YXJnZXQpLCB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMuc2V0KGEsIHApLCBhLmlzSW50ZXJHcmFwaCgpID8gdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGEpIDogRC5yZW1vdmUoYSksIHA7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSBbXTtcbiAgICAgICAgICAgICAgYSA9IGEuY29uY2F0KHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCkpLCBhID0gW10uY29uY2F0KG8odGhpcy5lZGdlVG9EdW1teU5vZGVzLmtleXMoKSkpLmNvbmNhdChhKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBhLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBhW3BdO1xuICAgICAgICAgICAgICAgIGlmICh2LmJlbmRwb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgRCA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5nZXQodiksIHUgPSAwOyB1IDwgRC5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgVCA9IERbdV0sIHkgPSBuZXcgbihULmdldENlbnRlclgoKSwgVC5nZXRDZW50ZXJZKCkpLCBPID0gdi5iZW5kcG9pbnRzLmdldCh1KTtcbiAgICAgICAgICAgICAgICAgICAgTy54ID0geS54LCBPLnkgPSB5LnksIFQuZ2V0T3duZXIoKS5yZW1vdmUoVCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQodiwgdi5zb3VyY2UsIHYudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGgudHJhbnNmb3JtID0gZnVuY3Rpb24oYSwgcCwgdiwgRCkge1xuICAgICAgICAgICAgICBpZiAodiAhPSBudWxsICYmIEQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciB1ID0gcDtcbiAgICAgICAgICAgICAgICBpZiAoYSA8PSA1MCkge1xuICAgICAgICAgICAgICAgICAgdmFyIFQgPSBwIC8gdjtcbiAgICAgICAgICAgICAgICAgIHUgLT0gKHAgLSBUKSAvIDUwICogKDUwIC0gYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcCAqIEQ7XG4gICAgICAgICAgICAgICAgICB1ICs9ICh5IC0gcCkgLyA1MCAqIChhIC0gNTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgTywgcztcbiAgICAgICAgICAgICAgICByZXR1cm4gYSA8PSA1MCA/IChPID0gOSAqIHAgLyA1MDAsIHMgPSBwIC8gMTApIDogKE8gPSA5ICogcCAvIDUwLCBzID0gLTggKiBwKSwgTyAqIGEgKyBzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBoLmZpbmRDZW50ZXJPZlRyZWUgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIHZhciBwID0gW107XG4gICAgICAgICAgICAgIHAgPSBwLmNvbmNhdChhKTtcbiAgICAgICAgICAgICAgdmFyIHYgPSBbXSwgRCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIHUgPSAhMSwgVCA9IG51bGw7XG4gICAgICAgICAgICAgIChwLmxlbmd0aCA9PSAxIHx8IHAubGVuZ3RoID09IDIpICYmICh1ID0gITAsIFQgPSBwWzBdKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBwLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIE8gPSBwW3ldLCBzID0gTy5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZTtcbiAgICAgICAgICAgICAgICBELnNldChPLCBPLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKSwgcyA9PSAxICYmIHYucHVzaChPKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgZiA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKGYgPSBmLmNvbmNhdCh2KTsgIXU7ICkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gW107XG4gICAgICAgICAgICAgICAgYyA9IGMuY29uY2F0KGYpLCBmID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBwLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgTyA9IHBbeV0sIEUgPSBwLmluZGV4T2YoTyk7XG4gICAgICAgICAgICAgICAgICBFID49IDAgJiYgcC5zcGxpY2UoRSwgMSk7XG4gICAgICAgICAgICAgICAgICB2YXIgQSA9IE8uZ2V0TmVpZ2hib3JzTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgQS5mb3JFYWNoKGZ1bmN0aW9uKFIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuaW5kZXhPZihSKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IEQuZ2V0KFIpLCBTID0gTSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgUyA9PSAxICYmIGYucHVzaChSKSwgRC5zZXQoUiwgUyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ID0gdi5jb25jYXQoZiksIChwLmxlbmd0aCA9PSAxIHx8IHAubGVuZ3RoID09IDIpICYmICh1ID0gITAsIFQgPSBwWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gVDtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLnNldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIgPSBhO1xuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gaDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAxNiAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG8oKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvLnNlZWQgPSAxLCBvLnggPSAwLCBvLm5leHREb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8ueCA9IE1hdGguc2luKG8uc2VlZCsrKSAqIDFlNCwgby54IC0gTWF0aC5mbG9vcihvLngpO1xuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gbztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAxNyAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIHZhciBvID0gTCg0KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUodCwgaSkge1xuICAgICAgICAgICAgICB0aGlzLmx3b3JsZE9yZ1ggPSAwLCB0aGlzLmx3b3JsZE9yZ1kgPSAwLCB0aGlzLmxkZXZpY2VPcmdYID0gMCwgdGhpcy5sZGV2aWNlT3JnWSA9IDAsIHRoaXMubHdvcmxkRXh0WCA9IDEsIHRoaXMubHdvcmxkRXh0WSA9IDEsIHRoaXMubGRldmljZUV4dFggPSAxLCB0aGlzLmxkZXZpY2VFeHRZID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJvdG90eXBlLmdldFdvcmxkT3JnWCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sd29ybGRPcmdYO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuc2V0V29ybGRPcmdYID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB0aGlzLmx3b3JsZE9yZ1ggPSB0O1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuZ2V0V29ybGRPcmdZID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmx3b3JsZE9yZ1k7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHRoaXMubHdvcmxkT3JnWSA9IHQ7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5nZXRXb3JsZEV4dFggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WDtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLnNldFdvcmxkRXh0WCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgdGhpcy5sd29ybGRFeHRYID0gdDtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLmdldFdvcmxkRXh0WSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sd29ybGRFeHRZO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuc2V0V29ybGRFeHRZID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB0aGlzLmx3b3JsZEV4dFkgPSB0O1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZGV2aWNlT3JnWDtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHRoaXMubGRldmljZU9yZ1ggPSB0O1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZGV2aWNlT3JnWTtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLnNldERldmljZU9yZ1kgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHRoaXMubGRldmljZU9yZ1kgPSB0O1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WDtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLnNldERldmljZUV4dFggPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHRoaXMubGRldmljZUV4dFggPSB0O1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WTtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHRoaXMubGRldmljZUV4dFkgPSB0O1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUudHJhbnNmb3JtWCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSAwLCBsID0gdGhpcy5sd29ybGRFeHRYO1xuICAgICAgICAgICAgICByZXR1cm4gbCAhPSAwICYmIChpID0gdGhpcy5sZGV2aWNlT3JnWCArICh0IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyBsKSwgaTtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLnRyYW5zZm9ybVkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHZhciBpID0gMCwgbCA9IHRoaXMubHdvcmxkRXh0WTtcbiAgICAgICAgICAgICAgcmV0dXJuIGwgIT0gMCAmJiAoaSA9IHRoaXMubGRldmljZU9yZ1kgKyAodCAtIHRoaXMubHdvcmxkT3JnWSkgKiB0aGlzLmxkZXZpY2VFeHRZIC8gbCksIGk7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSAwLCBsID0gdGhpcy5sZGV2aWNlRXh0WDtcbiAgICAgICAgICAgICAgcmV0dXJuIGwgIT0gMCAmJiAoaSA9IHRoaXMubHdvcmxkT3JnWCArICh0IC0gdGhpcy5sZGV2aWNlT3JnWCkgKiB0aGlzLmx3b3JsZEV4dFggLyBsKSwgaTtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1ZID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IDAsIGwgPSB0aGlzLmxkZXZpY2VFeHRZO1xuICAgICAgICAgICAgICByZXR1cm4gbCAhPSAwICYmIChpID0gdGhpcy5sd29ybGRPcmdZICsgKHQgLSB0aGlzLmxkZXZpY2VPcmdZKSAqIHRoaXMubHdvcmxkRXh0WSAvIGwpLCBpO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVBvaW50ID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IG5ldyBvKHRoaXMuaW52ZXJzZVRyYW5zZm9ybVgodC54KSwgdGhpcy5pbnZlcnNlVHJhbnNmb3JtWSh0LnkpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9LCBOLmV4cG9ydHMgPSBlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDE4ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oTiwgSSwgTCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gbyhyKSB7XG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHIpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaCA9IDAsIGEgPSBBcnJheShyLmxlbmd0aCk7IGggPCByLmxlbmd0aDsgaCsrKVxuICAgICAgICAgICAgICAgICAgYVtoXSA9IHJbaF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGUgPSBMKDE1KSwgdCA9IEwoNyksIGkgPSBMKDApLCBsID0gTCg4KSwgZyA9IEwoOSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBuKCkge1xuICAgICAgICAgICAgICBlLmNhbGwodGhpcyksIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9IHQuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT04sIHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gdC5ERUZBVUxUX0VER0VfTEVOR1RILCB0aGlzLnNwcmluZ0NvbnN0YW50ID0gdC5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCwgdGhpcy5yZXB1bHNpb25Db25zdGFudCA9IHQuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEgsIHRoaXMuZ3Jhdml0eUNvbnN0YW50ID0gdC5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEgsIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQgPSB0LkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCwgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPSB0LkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IsIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IgPSB0LkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IsIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSA9IDMgKiB0LkRFRkFVTFRfRURHRV9MRU5HVEggLyAxMDAsIHRoaXMuY29vbGluZ0ZhY3RvciA9IHQuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCwgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IHQuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCwgdGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDAsIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSAwLCB0aGlzLm1heEl0ZXJhdGlvbnMgPSB0Lk1BWF9JVEVSQVRJT05TO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUucHJvdG90eXBlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGQgaW4gZSlcbiAgICAgICAgICAgICAgbltkXSA9IGVbZF07XG4gICAgICAgICAgICBuLnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBlLnByb3RvdHlwZS5pbml0UGFyYW1ldGVycy5jYWxsKHRoaXMsIGFyZ3VtZW50cyksIHRoaXMudG90YWxJdGVyYXRpb25zID0gMCwgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwLCB0aGlzLnVzZUZSR3JpZFZhcmlhbnQgPSB0LkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTiwgdGhpcy5ncmlkID0gW107XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5jYWxjSWRlYWxFZGdlTGVuZ3RocyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciByLCBoLCBhLCBwLCB2LCBELCB1ID0gdGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRBbGxFZGdlcygpLCBUID0gMDsgVCA8IHUubGVuZ3RoOyBUKyspXG4gICAgICAgICAgICAgICAgciA9IHVbVF0sIHIuaWRlYWxMZW5ndGggPSB0aGlzLmlkZWFsRWRnZUxlbmd0aCwgci5pc0ludGVyR3JhcGggJiYgKGEgPSByLmdldFNvdXJjZSgpLCBwID0gci5nZXRUYXJnZXQoKSwgdiA9IHIuZ2V0U291cmNlSW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCksIEQgPSByLmdldFRhcmdldEluTGNhKCkuZ2V0RXN0aW1hdGVkU2l6ZSgpLCB0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24gJiYgKHIuaWRlYWxMZW5ndGggKz0gdiArIEQgLSAyICogaS5TSU1QTEVfTk9ERV9TSVpFKSwgaCA9IHIuZ2V0TGNhKCkuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCksIHIuaWRlYWxMZW5ndGggKz0gdC5ERUZBVUxUX0VER0VfTEVOR1RIICogdC5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SICogKGEuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCkgKyBwLmdldEluY2x1c2lvblRyZWVEZXB0aCgpIC0gMiAqIGgpKTtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmluaXRTcHJpbmdFbWJlZGRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGg7XG4gICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50YWwgPyAociA+IHQuQURBUFRBVElPTl9MT1dFUl9OT0RFX0xJTUlUICYmICh0aGlzLmNvb2xpbmdGYWN0b3IgPSBNYXRoLm1heCh0aGlzLmNvb2xpbmdGYWN0b3IgKiB0LkNPT0xJTkdfQURBUFRBVElPTl9GQUNUT1IsIHRoaXMuY29vbGluZ0ZhY3RvciAtIChyIC0gdC5BREFQVEFUSU9OX0xPV0VSX05PREVfTElNSVQpIC8gKHQuQURBUFRBVElPTl9VUFBFUl9OT0RFX0xJTUlUIC0gdC5BREFQVEFUSU9OX0xPV0VSX05PREVfTElNSVQpICogdGhpcy5jb29saW5nRmFjdG9yICogKDEgLSB0LkNPT0xJTkdfQURBUFRBVElPTl9GQUNUT1IpKSksIHRoaXMubWF4Tm9kZURpc3BsYWNlbWVudCA9IHQuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMKSA6IChyID4gdC5BREFQVEFUSU9OX0xPV0VSX05PREVfTElNSVQgPyB0aGlzLmNvb2xpbmdGYWN0b3IgPSBNYXRoLm1heCh0LkNPT0xJTkdfQURBUFRBVElPTl9GQUNUT1IsIDEgLSAociAtIHQuQURBUFRBVElPTl9MT1dFUl9OT0RFX0xJTUlUKSAvICh0LkFEQVBUQVRJT05fVVBQRVJfTk9ERV9MSU1JVCAtIHQuQURBUFRBVElPTl9MT1dFUl9OT0RFX0xJTUlUKSAqICgxIC0gdC5DT09MSU5HX0FEQVBUQVRJT05fRkFDVE9SKSkgOiB0aGlzLmNvb2xpbmdGYWN0b3IgPSAxLCB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yID0gdGhpcy5jb29saW5nRmFjdG9yLCB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPSB0Lk1BWF9OT0RFX0RJU1BMQUNFTUVOVCksIHRoaXMubWF4SXRlcmF0aW9ucyA9IE1hdGgubWF4KHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGggKiA1LCB0aGlzLm1heEl0ZXJhdGlvbnMpLCB0aGlzLnRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkID0gdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICogdGhpcy5nZXRBbGxOb2RlcygpLmxlbmd0aCwgdGhpcy5yZXB1bHNpb25SYW5nZSA9IHRoaXMuY2FsY1JlcHVsc2lvblJhbmdlKCk7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5jYWxjU3ByaW5nRm9yY2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHIgPSB0aGlzLmdldEFsbEVkZ2VzKCksIGgsIGEgPSAwOyBhIDwgci5sZW5ndGg7IGErKylcbiAgICAgICAgICAgICAgICBoID0gclthXSwgdGhpcy5jYWxjU3ByaW5nRm9yY2UoaCwgaC5pZGVhbExlbmd0aCk7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciByID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbMF0gOiAhMCwgaCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzFdIDogITEsIGEsIHAsIHYsIEQsIHUgPSB0aGlzLmdldEFsbE5vZGVzKCksIFQ7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZUZSR3JpZFZhcmlhbnQpXG4gICAgICAgICAgICAgICAgZm9yICh0aGlzLnRvdGFsSXRlcmF0aW9ucyAlIHQuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiByICYmIHRoaXMudXBkYXRlR3JpZCgpLCBUID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSwgYSA9IDA7IGEgPCB1Lmxlbmd0aDsgYSsrKVxuICAgICAgICAgICAgICAgICAgdiA9IHVbYV0sIHRoaXMuY2FsY3VsYXRlUmVwdWxzaW9uRm9yY2VPZkFOb2RlKHYsIFQsIHIsIGgpLCBULmFkZCh2KTtcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB1Lmxlbmd0aDsgYSsrKVxuICAgICAgICAgICAgICAgICAgZm9yICh2ID0gdVthXSwgcCA9IGEgKyAxOyBwIDwgdS5sZW5ndGg7IHArKylcbiAgICAgICAgICAgICAgICAgICAgRCA9IHVbcF0sIHYuZ2V0T3duZXIoKSA9PSBELmdldE93bmVyKCkgJiYgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2UodiwgRCk7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciByLCBoID0gdGhpcy5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpLCBhID0gMDsgYSA8IGgubGVuZ3RoOyBhKyspXG4gICAgICAgICAgICAgICAgciA9IGhbYV0sIHRoaXMuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZShyKTtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLm1vdmVOb2RlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciByID0gdGhpcy5nZXRBbGxOb2RlcygpLCBoLCBhID0gMDsgYSA8IHIubGVuZ3RoOyBhKyspXG4gICAgICAgICAgICAgICAgaCA9IHJbYV0sIGgubW92ZSgpO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlID0gZnVuY3Rpb24ociwgaCkge1xuICAgICAgICAgICAgICB2YXIgYSA9IHIuZ2V0U291cmNlKCksIHAgPSByLmdldFRhcmdldCgpLCB2LCBELCB1LCBUO1xuICAgICAgICAgICAgICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJiBhLmdldENoaWxkKCkgPT0gbnVsbCAmJiBwLmdldENoaWxkKCkgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByLnVwZGF0ZUxlbmd0aFNpbXBsZSgpO1xuICAgICAgICAgICAgICBlbHNlIGlmIChyLnVwZGF0ZUxlbmd0aCgpLCByLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIHYgPSByLmdldExlbmd0aCgpLCB2ICE9IDAgJiYgKEQgPSB0aGlzLnNwcmluZ0NvbnN0YW50ICogKHYgLSBoKSwgdSA9IEQgKiAoci5sZW5ndGhYIC8gdiksIFQgPSBEICogKHIubGVuZ3RoWSAvIHYpLCBhLnNwcmluZ0ZvcmNlWCArPSB1LCBhLnNwcmluZ0ZvcmNlWSArPSBULCBwLnNwcmluZ0ZvcmNlWCAtPSB1LCBwLnNwcmluZ0ZvcmNlWSAtPSBUKTtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmNhbGNSZXB1bHNpb25Gb3JjZSA9IGZ1bmN0aW9uKHIsIGgpIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSByLmdldFJlY3QoKSwgcCA9IGguZ2V0UmVjdCgpLCB2ID0gbmV3IEFycmF5KDIpLCBEID0gbmV3IEFycmF5KDQpLCB1LCBULCB5LCBPLCBzLCBmLCBjO1xuICAgICAgICAgICAgICBpZiAoYS5pbnRlcnNlY3RzKHApKSB7XG4gICAgICAgICAgICAgICAgbC5jYWxjU2VwYXJhdGlvbkFtb3VudChhLCBwLCB2LCB0LkRFRkFVTFRfRURHRV9MRU5HVEggLyAyKSwgZiA9IDIgKiB2WzBdLCBjID0gMiAqIHZbMV07XG4gICAgICAgICAgICAgICAgdmFyIEUgPSByLm5vT2ZDaGlsZHJlbiAqIGgubm9PZkNoaWxkcmVuIC8gKHIubm9PZkNoaWxkcmVuICsgaC5ub09mQ2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIHIucmVwdWxzaW9uRm9yY2VYIC09IEUgKiBmLCByLnJlcHVsc2lvbkZvcmNlWSAtPSBFICogYywgaC5yZXB1bHNpb25Gb3JjZVggKz0gRSAqIGYsIGgucmVwdWxzaW9uRm9yY2VZICs9IEUgKiBjO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzICYmIHIuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIGguZ2V0Q2hpbGQoKSA9PSBudWxsID8gKHUgPSBwLmdldENlbnRlclgoKSAtIGEuZ2V0Q2VudGVyWCgpLCBUID0gcC5nZXRDZW50ZXJZKCkgLSBhLmdldENlbnRlclkoKSkgOiAobC5nZXRJbnRlcnNlY3Rpb24oYSwgcCwgRCksIHUgPSBEWzJdIC0gRFswXSwgVCA9IERbM10gLSBEWzFdKSwgTWF0aC5hYnModSkgPCB0Lk1JTl9SRVBVTFNJT05fRElTVCAmJiAodSA9IGcuc2lnbih1KSAqIHQuTUlOX1JFUFVMU0lPTl9ESVNUKSwgTWF0aC5hYnMoVCkgPCB0Lk1JTl9SRVBVTFNJT05fRElTVCAmJiAoVCA9IGcuc2lnbihUKSAqIHQuTUlOX1JFUFVMU0lPTl9ESVNUKSwgeSA9IHUgKiB1ICsgVCAqIFQsIE8gPSBNYXRoLnNxcnQoeSksIHMgPSB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ICogci5ub09mQ2hpbGRyZW4gKiBoLm5vT2ZDaGlsZHJlbiAvIHksIGYgPSBzICogdSAvIE8sIGMgPSBzICogVCAvIE8sIHIucmVwdWxzaW9uRm9yY2VYIC09IGYsIHIucmVwdWxzaW9uRm9yY2VZIC09IGMsIGgucmVwdWxzaW9uRm9yY2VYICs9IGYsIGgucmVwdWxzaW9uRm9yY2VZICs9IGM7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlID0gZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICB2YXIgaCwgYSwgcCwgdiwgRCwgdSwgVCwgeTtcbiAgICAgICAgICAgICAgaCA9IHIuZ2V0T3duZXIoKSwgYSA9IChoLmdldFJpZ2h0KCkgKyBoLmdldExlZnQoKSkgLyAyLCBwID0gKGguZ2V0VG9wKCkgKyBoLmdldEJvdHRvbSgpKSAvIDIsIHYgPSByLmdldENlbnRlclgoKSAtIGEsIEQgPSByLmdldENlbnRlclkoKSAtIHAsIHUgPSBNYXRoLmFicyh2KSArIHIuZ2V0V2lkdGgoKSAvIDIsIFQgPSBNYXRoLmFicyhEKSArIHIuZ2V0SGVpZ2h0KCkgLyAyLCByLmdldE93bmVyKCkgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpID8gKHkgPSBoLmdldEVzdGltYXRlZFNpemUoKSAqIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yLCAodSA+IHkgfHwgVCA+IHkpICYmIChyLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogdiwgci5ncmF2aXRhdGlvbkZvcmNlWSA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIEQpKSA6ICh5ID0gaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yLCAodSA+IHkgfHwgVCA+IHkpICYmIChyLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogdiAqIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQsIHIuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBEICogdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudCkpO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuaXNDb252ZXJnZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHIsIGggPSAhMTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxJdGVyYXRpb25zID4gdGhpcy5tYXhJdGVyYXRpb25zIC8gMyAmJiAoaCA9IE1hdGguYWJzKHRoaXMudG90YWxEaXNwbGFjZW1lbnQgLSB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50KSA8IDIpLCByID0gdGhpcy50b3RhbERpc3BsYWNlbWVudCA8IHRoaXMudG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQsIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50LCByIHx8IGg7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ICYmICF0aGlzLmlzU3ViTGF5b3V0ICYmICh0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9PSB0aGlzLmFuaW1hdGlvblBlcmlvZCA/ICh0aGlzLnVwZGF0ZSgpLCB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDApIDogdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMrKyk7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5jYWxjTm9PZkNoaWxkcmVuRm9yQWxsTm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgciwgaCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCksIGEgPSAwOyBhIDwgaC5sZW5ndGg7IGErKylcbiAgICAgICAgICAgICAgICByID0gaFthXSwgci5ub09mQ2hpbGRyZW4gPSByLmdldE5vT2ZDaGlsZHJlbigpO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuY2FsY0dyaWQgPSBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgIHZhciBoID0gMCwgYSA9IDA7XG4gICAgICAgICAgICAgIGggPSBwYXJzZUludChNYXRoLmNlaWwoKHIuZ2V0UmlnaHQoKSAtIHIuZ2V0TGVmdCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKSwgYSA9IHBhcnNlSW50KE1hdGguY2VpbCgoci5nZXRCb3R0b20oKSAtIHIuZ2V0VG9wKCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICAgICAgICAgICAgICBmb3IgKHZhciBwID0gbmV3IEFycmF5KGgpLCB2ID0gMDsgdiA8IGg7IHYrKylcbiAgICAgICAgICAgICAgICBwW3ZdID0gbmV3IEFycmF5KGEpO1xuICAgICAgICAgICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IGg7IHYrKylcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBEID0gMDsgRCA8IGE7IEQrKylcbiAgICAgICAgICAgICAgICAgIHBbdl1bRF0gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICB9LCBuLnByb3RvdHlwZS5hZGROb2RlVG9HcmlkID0gZnVuY3Rpb24ociwgaCwgYSkge1xuICAgICAgICAgICAgICB2YXIgcCA9IDAsIHYgPSAwLCBEID0gMCwgdSA9IDA7XG4gICAgICAgICAgICAgIHAgPSBwYXJzZUludChNYXRoLmZsb29yKChyLmdldFJlY3QoKS54IC0gaCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSksIHYgPSBwYXJzZUludChNYXRoLmZsb29yKChyLmdldFJlY3QoKS53aWR0aCArIHIuZ2V0UmVjdCgpLnggLSBoKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKSwgRCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHIuZ2V0UmVjdCgpLnkgLSBhKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKSwgdSA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHIuZ2V0UmVjdCgpLmhlaWdodCArIHIuZ2V0UmVjdCgpLnkgLSBhKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgVCA9IHA7IFQgPD0gdjsgVCsrKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSBEOyB5IDw9IHU7IHkrKylcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtUXVt5XS5wdXNoKHIpLCByLnNldEdyaWRDb29yZGluYXRlcyhwLCB2LCBELCB1KTtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLnVwZGF0ZUdyaWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHIsIGgsIGEgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gICAgICAgICAgICAgIGZvciAodGhpcy5ncmlkID0gdGhpcy5jYWxjR3JpZCh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpLCByID0gMDsgciA8IGEubGVuZ3RoOyByKyspXG4gICAgICAgICAgICAgICAgaCA9IGFbcl0sIHRoaXMuYWRkTm9kZVRvR3JpZChoLCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0TGVmdCgpLCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0VG9wKCkpO1xuICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUuY2FsY3VsYXRlUmVwdWxzaW9uRm9yY2VPZkFOb2RlID0gZnVuY3Rpb24ociwgaCwgYSwgcCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSB0LkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID09IDEgJiYgYSB8fCBwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIHIuc3Vycm91bmRpbmcgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBELCB1ID0gdGhpcy5ncmlkLCBUID0gci5zdGFydFggLSAxOyBUIDwgci5maW5pc2hYICsgMjsgVCsrKVxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IHIuc3RhcnRZIC0gMTsgeSA8IHIuZmluaXNoWSArIDI7IHkrKylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoVCA8IDAgfHwgeSA8IDAgfHwgVCA+PSB1Lmxlbmd0aCB8fCB5ID49IHVbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIE8gPSAwOyBPIDwgdVtUXVt5XS5sZW5ndGg7IE8rKylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEID0gdVtUXVt5XVtPXSwgIShyLmdldE93bmVyKCkgIT0gRC5nZXRPd25lcigpIHx8IHIgPT0gRCkgJiYgIWguaGFzKEQpICYmICF2LmhhcyhEKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IE1hdGguYWJzKHIuZ2V0Q2VudGVyWCgpIC0gRC5nZXRDZW50ZXJYKCkpIC0gKHIuZ2V0V2lkdGgoKSAvIDIgKyBELmdldFdpZHRoKCkgLyAyKSwgZiA9IE1hdGguYWJzKHIuZ2V0Q2VudGVyWSgpIC0gRC5nZXRDZW50ZXJZKCkpIC0gKHIuZ2V0SGVpZ2h0KCkgLyAyICsgRC5nZXRIZWlnaHQoKSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzIDw9IHRoaXMucmVwdWxzaW9uUmFuZ2UgJiYgZiA8PSB0aGlzLnJlcHVsc2lvblJhbmdlICYmIHYuYWRkKEQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgci5zdXJyb3VuZGluZyA9IFtdLmNvbmNhdChvKHYpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKFQgPSAwOyBUIDwgci5zdXJyb3VuZGluZy5sZW5ndGg7IFQrKylcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNSZXB1bHNpb25Gb3JjZShyLCByLnN1cnJvdW5kaW5nW1RdKTtcbiAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0sIE4uZXhwb3J0cyA9IG47XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMTkgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihOLCBJLCBMKSB7XG4gICAgICAgICAgICB2YXIgbyA9IEwoMSksIGUgPSBMKDcpO1xuICAgICAgICAgICAgZnVuY3Rpb24gdChsLCBnLCBuKSB7XG4gICAgICAgICAgICAgIG8uY2FsbCh0aGlzLCBsLCBnLCBuKSwgdGhpcy5pZGVhbExlbmd0aCA9IGUuREVGQVVMVF9FREdFX0xFTkdUSDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShvLnByb3RvdHlwZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG8pXG4gICAgICAgICAgICAgIHRbaV0gPSBvW2ldO1xuICAgICAgICAgICAgTi5leHBvcnRzID0gdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAyMCAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIHZhciBvID0gTCgzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoaSwgbCwgZywgbikge1xuICAgICAgICAgICAgICBvLmNhbGwodGhpcywgaSwgbCwgZywgbiksIHRoaXMuc3ByaW5nRm9yY2VYID0gMCwgdGhpcy5zcHJpbmdGb3JjZVkgPSAwLCB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDAsIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMCwgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDAsIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwLCB0aGlzLmRpc3BsYWNlbWVudFggPSAwLCB0aGlzLmRpc3BsYWNlbWVudFkgPSAwLCB0aGlzLnN0YXJ0WCA9IDAsIHRoaXMuZmluaXNoWCA9IDAsIHRoaXMuc3RhcnRZID0gMCwgdGhpcy5maW5pc2hZID0gMCwgdGhpcy5zdXJyb3VuZGluZyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG8ucHJvdG90eXBlKTtcbiAgICAgICAgICAgIGZvciAodmFyIHQgaW4gbylcbiAgICAgICAgICAgICAgZVt0XSA9IG9bdF07XG4gICAgICAgICAgICBlLnByb3RvdHlwZS5zZXRHcmlkQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbihpLCBsLCBnLCBuKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhcnRYID0gaSwgdGhpcy5maW5pc2hYID0gbCwgdGhpcy5zdGFydFkgPSBnLCB0aGlzLmZpbmlzaFkgPSBuO1xuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAyMSAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG8oZSwgdCkge1xuICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMCwgdGhpcy5oZWlnaHQgPSAwLCBlICE9PSBudWxsICYmIHQgIT09IG51bGwgJiYgKHRoaXMuaGVpZ2h0ID0gdCwgdGhpcy53aWR0aCA9IGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IGU7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IGU7XG4gICAgICAgICAgICB9LCBOLmV4cG9ydHMgPSBvO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDIyICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oTiwgSSwgTCkge1xuICAgICAgICAgICAgdmFyIG8gPSBMKDE0KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICAgIHRoaXMubWFwID0ge30sIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICB2YXIgbCA9IG8uY3JlYXRlSUQodCk7XG4gICAgICAgICAgICAgIHRoaXMuY29udGFpbnMobCkgfHwgKHRoaXMubWFwW2xdID0gaSwgdGhpcy5rZXlzLnB1c2godCkpO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBvLmNyZWF0ZUlEKHQpLCB0aGlzLm1hcFt0XSAhPSBudWxsO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IG8uY3JlYXRlSUQodCk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcFtpXTtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLmtleVNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5rZXlzO1xuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAyMyAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIHZhciBvID0gTCgxNCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgICB0aGlzLnNldCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IG8uY3JlYXRlSUQodCk7XG4gICAgICAgICAgICAgIHRoaXMuY29udGFpbnMoaSkgfHwgKHRoaXMuc2V0W2ldID0gdCk7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNldFtvLmNyZWF0ZUlEKHQpXTtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0ID0ge307XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0W28uY3JlYXRlSUQodCldID09IHQ7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0KS5sZW5ndGg7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5hZGRBbGxUbyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IE9iamVjdC5rZXlzKHRoaXMuc2V0KSwgbCA9IGkubGVuZ3RoLCBnID0gMDsgZyA8IGw7IGcrKylcbiAgICAgICAgICAgICAgICB0LnB1c2godGhpcy5zZXRbaVtnXV0pO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHQubGVuZ3RoLCBsID0gMDsgbCA8IGk7IGwrKykge1xuICAgICAgICAgICAgICAgIHZhciBnID0gdFtsXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAyNCAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKE4sIEksIEwpIHtcbiAgICAgICAgICAgIHZhciBvID0gLyogQF9fUFVSRV9fICovIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gbChnLCBuKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBuLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgciA9IG5bZF07XG4gICAgICAgICAgICAgICAgICByLmVudW1lcmFibGUgPSByLmVudW1lcmFibGUgfHwgITEsIHIuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiByICYmIChyLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZywgci5rZXksIHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZywgbiwgZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuICYmIGwoZy5wcm90b3R5cGUsIG4pLCBkICYmIGwoZywgZCksIGc7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZShsLCBnKSB7XG4gICAgICAgICAgICAgIGlmICghKGwgaW5zdGFuY2VvZiBnKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHQgPSBMKDExKSwgaSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gbChnLCBuKSB7XG4gICAgICAgICAgICAgICAgZSh0aGlzLCBsKSwgKG4gIT09IG51bGwgfHwgbiAhPT0gdm9pZCAwKSAmJiAodGhpcy5jb21wYXJlRnVuY3Rpb24gPSB0aGlzLl9kZWZhdWx0Q29tcGFyZUZ1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBnIGluc3RhbmNlb2YgdCA/IGQgPSBnLnNpemUoKSA6IGQgPSBnLmxlbmd0aCwgdGhpcy5fcXVpY2tzb3J0KGcsIDAsIGQgLSAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbyhsLCBbe1xuICAgICAgICAgICAgICAgIGtleTogXCJfcXVpY2tzb3J0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKG4sIGQsIHIpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChkIDwgcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHRoaXMuX3BhcnRpdGlvbihuLCBkLCByKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcXVpY2tzb3J0KG4sIGQsIGgpLCB0aGlzLl9xdWlja3NvcnQobiwgaCArIDEsIHIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfcGFydGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKG4sIGQsIHIpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSB0aGlzLl9nZXQobiwgZCksIGEgPSBkLCBwID0gcjsgOyApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IHRoaXMuY29tcGFyZUZ1bmN0aW9uKGgsIHRoaXMuX2dldChuLCBwKSk7IClcbiAgICAgICAgICAgICAgICAgICAgICBwLS07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyB0aGlzLmNvbXBhcmVGdW5jdGlvbih0aGlzLl9nZXQobiwgYSksIGgpOyApXG4gICAgICAgICAgICAgICAgICAgICAgYSsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSA8IHApXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3dhcChuLCBhLCBwKSwgYSsrLCBwLS07XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9nZXRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24obiwgZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gaW5zdGFuY2VvZiB0ID8gbi5nZXRfb2JqZWN0X2F0KGQpIDogbltkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3NldFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihuLCBkLCByKSB7XG4gICAgICAgICAgICAgICAgICBuIGluc3RhbmNlb2YgdCA/IG4uc2V0X29iamVjdF9hdChkLCByKSA6IG5bZF0gPSByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfc3dhcFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihuLCBkLCByKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgaCA9IHRoaXMuX2dldChuLCBkKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3NldChuLCBkLCB0aGlzLl9nZXQobiwgcikpLCB0aGlzLl9zZXQobiwgciwgaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9kZWZhdWx0Q29tcGFyZUZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKG4sIGQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkID4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1dKSwgbDtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBOLmV4cG9ydHMgPSBpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDI1ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oTiwgSSwgTCkge1xuICAgICAgICAgICAgdmFyIG8gPSAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBpKGwsIGcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGcubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgIHZhciBkID0gZ1tuXTtcbiAgICAgICAgICAgICAgICAgIGQuZW51bWVyYWJsZSA9IGQuZW51bWVyYWJsZSB8fCAhMSwgZC5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGQgJiYgKGQud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsLCBkLmtleSwgZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihsLCBnLCBuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGcgJiYgaShsLnByb3RvdHlwZSwgZyksIG4gJiYgaShsLCBuKSwgbDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGksIGwpIHtcbiAgICAgICAgICAgICAgaWYgKCEoaSBpbnN0YW5jZW9mIGwpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaShsLCBnKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1syXSA6IDEsIGQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1szXSA6IC0xLCByID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbNF0gOiAtMTtcbiAgICAgICAgICAgICAgICBlKHRoaXMsIGkpLCB0aGlzLnNlcXVlbmNlMSA9IGwsIHRoaXMuc2VxdWVuY2UyID0gZywgdGhpcy5tYXRjaF9zY29yZSA9IG4sIHRoaXMubWlzbWF0Y2hfcGVuYWx0eSA9IGQsIHRoaXMuZ2FwX3BlbmFsdHkgPSByLCB0aGlzLmlNYXggPSBsLmxlbmd0aCArIDEsIHRoaXMuak1heCA9IGcubGVuZ3RoICsgMSwgdGhpcy5ncmlkID0gbmV3IEFycmF5KHRoaXMuaU1heCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCB0aGlzLmlNYXg7IGgrKykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkW2hdID0gbmV3IEFycmF5KHRoaXMuak1heCk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuak1heDsgYSsrKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbaF1bYV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNlYmFja0dyaWQgPSBuZXcgQXJyYXkodGhpcy5pTWF4KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHRoaXMuaU1heDsgcCsrKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRyYWNlYmFja0dyaWRbcF0gPSBuZXcgQXJyYXkodGhpcy5qTWF4KTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIHYgPSAwOyB2IDwgdGhpcy5qTWF4OyB2KyspXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2ViYWNrR3JpZFtwXVt2XSA9IFtudWxsLCBudWxsLCBudWxsXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hbGlnbm1lbnRzID0gW10sIHRoaXMuc2NvcmUgPSAtMSwgdGhpcy5jb21wdXRlR3JpZHMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbyhpLCBbe1xuICAgICAgICAgICAgICAgIGtleTogXCJnZXRTY29yZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJnZXRBbGlnbm1lbnRzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxpZ25tZW50cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTWFpbiBkeW5hbWljIHByb2dyYW1taW5nIHByb2NlZHVyZVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNvbXB1dGVHcmlkc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGcgPSAxOyBnIDwgdGhpcy5qTWF4OyBnKyspXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFswXVtnXSA9IHRoaXMuZ3JpZFswXVtnIC0gMV0gKyB0aGlzLmdhcF9wZW5hbHR5LCB0aGlzLnRyYWNlYmFja0dyaWRbMF1bZ10gPSBbITEsICExLCAhMF07XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMTsgbiA8IHRoaXMuaU1heDsgbisrKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbbl1bMF0gPSB0aGlzLmdyaWRbbiAtIDFdWzBdICsgdGhpcy5nYXBfcGVuYWx0eSwgdGhpcy50cmFjZWJhY2tHcmlkW25dWzBdID0gWyExLCAhMCwgITFdO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCA9IDE7IGQgPCB0aGlzLmlNYXg7IGQrKylcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDE7IHIgPCB0aGlzLmpNYXg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2UxW2QgLSAxXSA9PT0gdGhpcy5zZXF1ZW5jZTJbciAtIDFdID8gaCA9IHRoaXMuZ3JpZFtkIC0gMV1bciAtIDFdICsgdGhpcy5tYXRjaF9zY29yZSA6IGggPSB0aGlzLmdyaWRbZCAtIDFdW3IgLSAxXSArIHRoaXMubWlzbWF0Y2hfcGVuYWx0eTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuZ3JpZFtkIC0gMV1bcl0gKyB0aGlzLmdhcF9wZW5hbHR5LCBwID0gdGhpcy5ncmlkW2RdW3IgLSAxXSArIHRoaXMuZ2FwX3BlbmFsdHksIHYgPSBbaCwgYSwgcF0sIEQgPSB0aGlzLmFycmF5QWxsTWF4SW5kZXhlcyh2KTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbZF1bcl0gPSB2W0RbMF1dLCB0aGlzLnRyYWNlYmFja0dyaWRbZF1bcl0gPSBbRC5pbmNsdWRlcygwKSwgRC5pbmNsdWRlcygxKSwgRC5pbmNsdWRlcygyKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLmdyaWRbdGhpcy5pTWF4IC0gMV1bdGhpcy5qTWF4IC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEdldHMgYWxsIHBvc3NpYmxlIHZhbGlkIHNlcXVlbmNlIGNvbWJpbmF0aW9uc1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImFsaWdubWVudFRyYWNlYmFja1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBnID0gW107XG4gICAgICAgICAgICAgICAgICBmb3IgKGcucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvczogW3RoaXMuc2VxdWVuY2UxLmxlbmd0aCwgdGhpcy5zZXF1ZW5jZTIubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICAgICAgc2VxMTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc2VxMjogXCJcIlxuICAgICAgICAgICAgICAgICAgfSk7IGdbMF07ICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGdbMF0sIGQgPSB0aGlzLnRyYWNlYmFja0dyaWRbbi5wb3NbMF1dW24ucG9zWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgZFswXSAmJiBnLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgIHBvczogW24ucG9zWzBdIC0gMSwgbi5wb3NbMV0gLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXExOiB0aGlzLnNlcXVlbmNlMVtuLnBvc1swXSAtIDFdICsgbi5zZXExLFxuICAgICAgICAgICAgICAgICAgICAgIHNlcTI6IHRoaXMuc2VxdWVuY2UyW24ucG9zWzFdIC0gMV0gKyBuLnNlcTJcbiAgICAgICAgICAgICAgICAgICAgfSksIGRbMV0gJiYgZy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICBwb3M6IFtuLnBvc1swXSAtIDEsIG4ucG9zWzFdXSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXExOiB0aGlzLnNlcXVlbmNlMVtuLnBvc1swXSAtIDFdICsgbi5zZXExLFxuICAgICAgICAgICAgICAgICAgICAgIHNlcTI6IFwiLVwiICsgbi5zZXEyXG4gICAgICAgICAgICAgICAgICAgIH0pLCBkWzJdICYmIGcucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zOiBbbi5wb3NbMF0sIG4ucG9zWzFdIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgICAgc2VxMTogXCItXCIgKyBuLnNlcTEsXG4gICAgICAgICAgICAgICAgICAgICAgc2VxMjogdGhpcy5zZXF1ZW5jZTJbbi5wb3NbMV0gLSAxXSArIG4uc2VxMlxuICAgICAgICAgICAgICAgICAgICB9KSwgbi5wb3NbMF0gPT09IDAgJiYgbi5wb3NbMV0gPT09IDAgJiYgdGhpcy5hbGlnbm1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgIHNlcXVlbmNlMTogbi5zZXExLFxuICAgICAgICAgICAgICAgICAgICAgIHNlcXVlbmNlMjogbi5zZXEyXG4gICAgICAgICAgICAgICAgICAgIH0pLCBnLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGlnbm1lbnRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBIZWxwZXIgRnVuY3Rpb25zXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ2V0QWxsSW5kZXhlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihnLCBuKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBkID0gW10sIHIgPSAtMTsgKHIgPSBnLmluZGV4T2YobiwgciArIDEpKSAhPT0gLTE7IClcbiAgICAgICAgICAgICAgICAgICAgZC5wdXNoKHIpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImFycmF5QWxsTWF4SW5kZXhlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGxJbmRleGVzKGcsIE1hdGgubWF4LmFwcGx5KG51bGwsIGcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1dKSwgaTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBOLmV4cG9ydHMgPSB0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDI2ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oTiwgSSwgTCkge1xuICAgICAgICAgICAgdmFyIG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvLkZETGF5b3V0ID0gTCgxOCksIG8uRkRMYXlvdXRDb25zdGFudHMgPSBMKDcpLCBvLkZETGF5b3V0RWRnZSA9IEwoMTkpLCBvLkZETGF5b3V0Tm9kZSA9IEwoMjApLCBvLkRpbWVuc2lvbkQgPSBMKDIxKSwgby5IYXNoTWFwID0gTCgyMiksIG8uSGFzaFNldCA9IEwoMjMpLCBvLklHZW9tZXRyeSA9IEwoOCksIG8uSU1hdGggPSBMKDkpLCBvLkludGVnZXIgPSBMKDEwKSwgby5Qb2ludCA9IEwoMTIpLCBvLlBvaW50RCA9IEwoNCksIG8uUmFuZG9tU2VlZCA9IEwoMTYpLCBvLlJlY3RhbmdsZUQgPSBMKDEzKSwgby5UcmFuc2Zvcm0gPSBMKDE3KSwgby5VbmlxdWVJREdlbmVyZXRvciA9IEwoMTQpLCBvLlF1aWNrc29ydCA9IEwoMjQpLCBvLkxpbmtlZExpc3QgPSBMKDExKSwgby5MR3JhcGhPYmplY3QgPSBMKDIpLCBvLkxHcmFwaCA9IEwoNSksIG8uTEVkZ2UgPSBMKDEpLCBvLkxHcmFwaE1hbmFnZXIgPSBMKDYpLCBvLkxOb2RlID0gTCgzKSwgby5MYXlvdXQgPSBMKDE1KSwgby5MYXlvdXRDb25zdGFudHMgPSBMKDApLCBvLk5lZWRsZW1hbld1bnNjaCA9IEwoMjUpLCBOLmV4cG9ydHMgPSBvO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDI3ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oTiwgSSwgTCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gbygpIHtcbiAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlID0gby5wcm90b3R5cGU7XG4gICAgICAgICAgICBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBldmVudDogdCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogaVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGwgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGwgPj0gMDsgbC0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGcgPSB0aGlzLmxpc3RlbmVyc1tsXTtcbiAgICAgICAgICAgICAgICBnLmV2ZW50ID09PSB0ICYmIGcuY2FsbGJhY2sgPT09IGkgJiYgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGwsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBlLmVtaXQgPSBmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZyA9IHRoaXMubGlzdGVuZXJzW2xdO1xuICAgICAgICAgICAgICAgIHQgPT09IGcuZXZlbnQgJiYgZy5jYWxsYmFjayhpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgTi5leHBvcnRzID0gbztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH0pO1xuICB9KShRKSksIFEuZXhwb3J0cztcbn1cbnZhciBjdCA9IFouZXhwb3J0cywgejtcbmZ1bmN0aW9uIHB0KCkge1xuICByZXR1cm4geiB8fCAoeiA9IDEsIChmdW5jdGlvbihHLCBiKSB7XG4gICAgKGZ1bmN0aW9uKEksIEwpIHtcbiAgICAgIEcuZXhwb3J0cyA9IEwoZnQoKSk7XG4gICAgfSkoY3QsIGZ1bmN0aW9uKE4pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIChmdW5jdGlvbihJKSB7XG4gICAgICAgICAgdmFyIEwgPSB7fTtcbiAgICAgICAgICBmdW5jdGlvbiBvKGUpIHtcbiAgICAgICAgICAgIGlmIChMW2VdKVxuICAgICAgICAgICAgICByZXR1cm4gTFtlXS5leHBvcnRzO1xuICAgICAgICAgICAgdmFyIHQgPSBMW2VdID0ge1xuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBpOiBlLFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBsOiAhMSxcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gSVtlXS5jYWxsKHQuZXhwb3J0cywgdCwgdC5leHBvcnRzLCBvKSwgdC5sID0gITAsIHQuZXhwb3J0cztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG8ubSA9IEksIG8uYyA9IEwsIG8uaSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgIH0sIG8uZCA9IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgIG8ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgZ2V0OiBpXG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCBvLm4gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUgJiYgZS5fX2VzTW9kdWxlID8gKFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5kZWZhdWx0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBvLmQodCwgXCJhXCIsIHQpLCB0O1xuICAgICAgICAgIH0sIG8ubyA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgdCk7XG4gICAgICAgICAgfSwgby5wID0gXCJcIiwgbyhvLnMgPSA3KTtcbiAgICAgICAgfSkoW1xuICAgICAgICAgIC8qIDAgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihJLCBMKSB7XG4gICAgICAgICAgICBJLmV4cG9ydHMgPSBOO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDEgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihJLCBMLCBvKSB7XG4gICAgICAgICAgICB2YXIgZSA9IG8oMCkuRkRMYXlvdXRDb25zdGFudHM7XG4gICAgICAgICAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBlKVxuICAgICAgICAgICAgICB0W2ldID0gZVtpXTtcbiAgICAgICAgICAgIHQuREVGQVVMVF9VU0VfTVVMVElfTEVWRUxfU0NBTElORyA9ICExLCB0LkRFRkFVTFRfUkFESUFMX1NFUEFSQVRJT04gPSBlLkRFRkFVTFRfRURHRV9MRU5HVEgsIHQuREVGQVVMVF9DT01QT05FTlRfU0VQRVJBVElPTiA9IDYwLCB0LlRJTEUgPSAhMCwgdC5USUxJTkdfUEFERElOR19WRVJUSUNBTCA9IDEwLCB0LlRJTElOR19QQURESU5HX0hPUklaT05UQUwgPSAxMCwgdC5UUkVFX1JFRFVDVElPTl9PTl9JTkNSRU1FTlRBTCA9ICExLCBJLmV4cG9ydHMgPSB0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDIgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihJLCBMLCBvKSB7XG4gICAgICAgICAgICB2YXIgZSA9IG8oMCkuRkRMYXlvdXRFZGdlO1xuICAgICAgICAgICAgZnVuY3Rpb24gdChsLCBnLCBuKSB7XG4gICAgICAgICAgICAgIGUuY2FsbCh0aGlzLCBsLCBnLCBuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGUpXG4gICAgICAgICAgICAgIHRbaV0gPSBlW2ldO1xuICAgICAgICAgICAgSS5leHBvcnRzID0gdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAzICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oSSwgTCwgbykge1xuICAgICAgICAgICAgdmFyIGUgPSBvKDApLkxHcmFwaDtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHQobCwgZywgbikge1xuICAgICAgICAgICAgICBlLmNhbGwodGhpcywgbCwgZywgbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBlKVxuICAgICAgICAgICAgICB0W2ldID0gZVtpXTtcbiAgICAgICAgICAgIEkuZXhwb3J0cyA9IHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogNCAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKEksIEwsIG8pIHtcbiAgICAgICAgICAgIHZhciBlID0gbygwKS5MR3JhcGhNYW5hZ2VyO1xuICAgICAgICAgICAgZnVuY3Rpb24gdChsKSB7XG4gICAgICAgICAgICAgIGUuY2FsbCh0aGlzLCBsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGUpXG4gICAgICAgICAgICAgIHRbaV0gPSBlW2ldO1xuICAgICAgICAgICAgSS5leHBvcnRzID0gdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiA1ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oSSwgTCwgbykge1xuICAgICAgICAgICAgdmFyIGUgPSBvKDApLkZETGF5b3V0Tm9kZSwgdCA9IG8oMCkuSU1hdGg7XG4gICAgICAgICAgICBmdW5jdGlvbiBpKGcsIG4sIGQsIHIpIHtcbiAgICAgICAgICAgICAgZS5jYWxsKHRoaXMsIGcsIG4sIGQsIHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUucHJvdG90eXBlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGwgaW4gZSlcbiAgICAgICAgICAgICAgaVtsXSA9IGVbbF07XG4gICAgICAgICAgICBpLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBnID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0TGF5b3V0KCk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxhY2VtZW50WCA9IGcuY29vbGluZ0ZhY3RvciAqICh0aGlzLnNwcmluZ0ZvcmNlWCArIHRoaXMucmVwdWxzaW9uRm9yY2VYICsgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCkgLyB0aGlzLm5vT2ZDaGlsZHJlbiwgdGhpcy5kaXNwbGFjZW1lbnRZID0gZy5jb29saW5nRmFjdG9yICogKHRoaXMuc3ByaW5nRm9yY2VZICsgdGhpcy5yZXB1bHNpb25Gb3JjZVkgKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZKSAvIHRoaXMubm9PZkNoaWxkcmVuLCBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFgpID4gZy5jb29saW5nRmFjdG9yICogZy5tYXhOb2RlRGlzcGxhY2VtZW50ICYmICh0aGlzLmRpc3BsYWNlbWVudFggPSBnLmNvb2xpbmdGYWN0b3IgKiBnLm1heE5vZGVEaXNwbGFjZW1lbnQgKiB0LnNpZ24odGhpcy5kaXNwbGFjZW1lbnRYKSksIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WSkgPiBnLmNvb2xpbmdGYWN0b3IgKiBnLm1heE5vZGVEaXNwbGFjZW1lbnQgJiYgKHRoaXMuZGlzcGxhY2VtZW50WSA9IGcuY29vbGluZ0ZhY3RvciAqIGcubWF4Tm9kZURpc3BsYWNlbWVudCAqIHQuc2lnbih0aGlzLmRpc3BsYWNlbWVudFkpKSwgdGhpcy5jaGlsZCA9PSBudWxsID8gdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpIDogdGhpcy5jaGlsZC5nZXROb2RlcygpLmxlbmd0aCA9PSAwID8gdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpIDogdGhpcy5wcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuKHRoaXMuZGlzcGxhY2VtZW50WCwgdGhpcy5kaXNwbGFjZW1lbnRZKSwgZy50b3RhbERpc3BsYWNlbWVudCArPSBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFgpICsgTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKSwgdGhpcy5zcHJpbmdGb3JjZVggPSAwLCB0aGlzLnNwcmluZ0ZvcmNlWSA9IDAsIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMCwgdGhpcy5yZXB1bHNpb25Gb3JjZVkgPSAwLCB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYID0gMCwgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDAsIHRoaXMuZGlzcGxhY2VtZW50WCA9IDAsIHRoaXMuZGlzcGxhY2VtZW50WSA9IDA7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5wcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuID0gZnVuY3Rpb24oZywgbikge1xuICAgICAgICAgICAgICBmb3IgKHZhciBkID0gdGhpcy5nZXRDaGlsZCgpLmdldE5vZGVzKCksIHIsIGggPSAwOyBoIDwgZC5sZW5ndGg7IGgrKylcbiAgICAgICAgICAgICAgICByID0gZFtoXSwgci5nZXRDaGlsZCgpID09IG51bGwgPyAoci5tb3ZlQnkoZywgbiksIHIuZGlzcGxhY2VtZW50WCArPSBnLCByLmRpc3BsYWNlbWVudFkgKz0gbikgOiByLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4oZywgbik7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5zZXRQcmVkMSA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVkMSA9IGc7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRQcmVkMSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJlZDE7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRQcmVkMiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJlZDI7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5zZXROZXh0ID0gZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgICB0aGlzLm5leHQgPSBnO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0TmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLnNldFByb2Nlc3NlZCA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSBnO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuaXNQcm9jZXNzZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgICAgICAgICAgIH0sIEkuZXhwb3J0cyA9IGk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogNiAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKEksIEwsIG8pIHtcbiAgICAgICAgICAgIHZhciBlID0gbygwKS5GRExheW91dCwgdCA9IG8oNCksIGkgPSBvKDMpLCBsID0gbyg1KSwgZyA9IG8oMiksIG4gPSBvKDEpLCBkID0gbygwKS5GRExheW91dENvbnN0YW50cywgciA9IG8oMCkuTGF5b3V0Q29uc3RhbnRzLCBoID0gbygwKS5Qb2ludCwgYSA9IG8oMCkuUG9pbnRELCBwID0gbygwKS5MYXlvdXQsIHYgPSBvKDApLkludGVnZXIsIEQgPSBvKDApLklHZW9tZXRyeSwgdSA9IG8oMCkuTEdyYXBoLCBUID0gbygwKS5UcmFuc2Zvcm07XG4gICAgICAgICAgICBmdW5jdGlvbiB5KCkge1xuICAgICAgICAgICAgICBlLmNhbGwodGhpcyksIHRoaXMudG9CZVRpbGVkID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgTyBpbiBlKVxuICAgICAgICAgICAgICB5W09dID0gZVtPXTtcbiAgICAgICAgICAgIHkucHJvdG90eXBlLm5ld0dyYXBoTWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgcyA9IG5ldyB0KHRoaXMpO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIgPSBzLCBzO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgaShudWxsLCB0aGlzLmdyYXBoTWFuYWdlciwgcyk7XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5uZXdOb2RlID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGwodGhpcy5ncmFwaE1hbmFnZXIsIHMpO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUubmV3RWRnZSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBnKG51bGwsIG51bGwsIHMpO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZS5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMuY2FsbCh0aGlzLCBhcmd1bWVudHMpLCB0aGlzLmlzU3ViTGF5b3V0IHx8IChuLkRFRkFVTFRfRURHRV9MRU5HVEggPCAxMCA/IHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gMTAgOiB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IG4uREVGQVVMVF9FREdFX0xFTkdUSCwgdGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uID0gbi5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTiwgdGhpcy5zcHJpbmdDb25zdGFudCA9IGQuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEgsIHRoaXMucmVwdWxzaW9uQ29uc3RhbnQgPSBkLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RILCB0aGlzLmdyYXZpdHlDb25zdGFudCA9IGQuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RILCB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50ID0gZC5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEgsIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yID0gZC5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SLCB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID0gZC5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SLCB0aGlzLnBydW5lZE5vZGVzQWxsID0gW10sIHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zID0gMCwgdGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgPSAwLCB0aGlzLmlzVHJlZUdyb3dpbmcgPSAhMSwgdGhpcy5pc0dyb3d0aEZpbmlzaGVkID0gITEsIHRoaXMuY29vbGluZ0N5Y2xlID0gMCwgdGhpcy5tYXhDb29saW5nQ3ljbGUgPSB0aGlzLm1heEl0ZXJhdGlvbnMgLyBkLkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCwgdGhpcy5maW5hbFRlbXBlcmF0dXJlID0gZC5DT05WRVJHRU5DRV9DSEVDS19QRVJJT0QgLyB0aGlzLm1heEl0ZXJhdGlvbnMsIHRoaXMuY29vbGluZ0FkanVzdGVyID0gMSk7XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHMgPSByLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgICAgICAgICAgICAgcmV0dXJuIHMgJiYgKHRoaXMuY3JlYXRlQmVuZHBvaW50cygpLCB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCkpLCB0aGlzLmxldmVsID0gMCwgdGhpcy5jbGFzc2ljTGF5b3V0KCk7XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5jbGFzc2ljTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzV2l0aEdyYXZpdHkgPSB0aGlzLmNhbGN1bGF0ZU5vZGVzVG9BcHBseUdyYXZpdGF0aW9uVG8oKSwgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24odGhpcy5ub2Rlc1dpdGhHcmF2aXR5KSwgdGhpcy5jYWxjTm9PZkNoaWxkcmVuRm9yQWxsTm9kZXMoKSwgdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycygpLCB0aGlzLmdyYXBoTWFuYWdlci5jYWxjSW5jbHVzaW9uVHJlZURlcHRocygpLCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuY2FsY0VzdGltYXRlZFNpemUoKSwgdGhpcy5jYWxjSWRlYWxFZGdlTGVuZ3RocygpLCB0aGlzLmluY3JlbWVudGFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4uVFJFRV9SRURVQ1RJT05fT05fSU5DUkVNRU5UQUwpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlVHJlZXMoKSwgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgdmFyIGYgPSBuZXcgU2V0KHRoaXMuZ2V0QWxsTm9kZXMoKSksIGMgPSB0aGlzLm5vZGVzV2l0aEdyYXZpdHkuZmlsdGVyKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGYuaGFzKG0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbihjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLmdldEZsYXRGb3Jlc3QoKTtcbiAgICAgICAgICAgICAgICBpZiAocy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFkaWFsbHkocyk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVRyZWVzKCksIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbiAgICAgICAgICAgICAgICAgIHZhciBmID0gbmV3IFNldCh0aGlzLmdldEFsbE5vZGVzKCkpLCBjID0gdGhpcy5ub2Rlc1dpdGhHcmF2aXR5LmZpbHRlcihmdW5jdGlvbihFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmLmhhcyhFKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oYyksIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXRTcHJpbmdFbWJlZGRlcigpLCB0aGlzLnJ1blNwcmluZ0VtYmVkZGVyKCksICEwO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMrKywgdGhpcy50b3RhbEl0ZXJhdGlvbnMgPT09IHRoaXMubWF4SXRlcmF0aW9ucyAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJ1bmVkTm9kZXNBbGwubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNUcmVlR3Jvd2luZyA9ICEwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgZC5DT05WRVJHRU5DRV9DSEVDS19QRVJJT0QgPT0gMCAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbnZlcmdlZCgpKVxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJ1bmVkTm9kZXNBbGwubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gITA7XG4gICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2xpbmdDeWNsZSsrLCB0aGlzLmxheW91dFF1YWxpdHkgPT0gMCA/IHRoaXMuY29vbGluZ0FkanVzdGVyID0gdGhpcy5jb29saW5nQ3ljbGUgOiB0aGlzLmxheW91dFF1YWxpdHkgPT0gMSAmJiAodGhpcy5jb29saW5nQWRqdXN0ZXIgPSB0aGlzLmNvb2xpbmdDeWNsZSAvIDMpLCB0aGlzLmNvb2xpbmdGYWN0b3IgPSBNYXRoLm1heCh0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yIC0gTWF0aC5wb3codGhpcy5jb29saW5nQ3ljbGUsIE1hdGgubG9nKDEwMCAqICh0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yIC0gdGhpcy5maW5hbFRlbXBlcmF0dXJlKSkgLyBNYXRoLmxvZyh0aGlzLm1heENvb2xpbmdDeWNsZSkpIC8gMTAwICogdGhpcy5jb29saW5nQWRqdXN0ZXIsIHRoaXMuZmluYWxUZW1wZXJhdHVyZSksIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTWF0aC5jZWlsKHRoaXMuaW5pdGlhbEFuaW1hdGlvblBlcmlvZCAqIE1hdGguc3FydCh0aGlzLmNvb2xpbmdGYWN0b3IpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5pc1RyZWVHcm93aW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zICUgMTAgPT0gMClcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCksIHRoaXMudXBkYXRlR3JpZCgpLCB0aGlzLmdyb3dUcmVlKHRoaXMucHJ1bmVkTm9kZXNBbGwpLCB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gbmV3IFNldCh0aGlzLmdldEFsbE5vZGVzKCkpLCBmID0gdGhpcy5ub2Rlc1dpdGhHcmF2aXR5LmZpbHRlcihmdW5jdGlvbihBKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMuaGFzKEEpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oZiksIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpLCB0aGlzLnVwZGF0ZUdyaWQoKSwgdGhpcy5jb29saW5nRmFjdG9yID0gZC5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUcmVlR3Jvd2luZyA9ICExLCB0aGlzLmlzR3Jvd3RoRmluaXNoZWQgPSAhMDtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucysrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmlzR3Jvd3RoRmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbnZlcmdlZCgpKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zICUgMTAgPT0gMCAmJiAodGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCksIHRoaXMudXBkYXRlR3JpZCgpKSwgdGhpcy5jb29saW5nRmFjdG9yID0gZC5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMICogKCgxMDAgLSB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucykgLyAxMDApLCB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucysrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBjID0gIXRoaXMuaXNUcmVlR3Jvd2luZyAmJiAhdGhpcy5pc0dyb3d0aEZpbmlzaGVkLCBFID0gdGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgJSAxMCA9PSAxICYmIHRoaXMuaXNUcmVlR3Jvd2luZyB8fCB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucyAlIDEwID09IDEgJiYgdGhpcy5pc0dyb3d0aEZpbmlzaGVkO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDAsIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpLCB0aGlzLmNhbGNTcHJpbmdGb3JjZXMoKSwgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2VzKGMsIEUpLCB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2VzKCksIHRoaXMubW92ZU5vZGVzKCksIHRoaXMuYW5pbWF0ZSgpLCAhMTtcbiAgICAgICAgICAgIH0sIHkucHJvdG90eXBlLmdldFBvc2l0aW9uc0RhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCksIGYgPSB7fSwgYyA9IDA7IGMgPCBzLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIEUgPSBzW2NdLnJlY3QsIEEgPSBzW2NdLmlkO1xuICAgICAgICAgICAgICAgIGZbQV0gPSB7XG4gICAgICAgICAgICAgICAgICBpZDogQSxcbiAgICAgICAgICAgICAgICAgIHg6IEUuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgICAgICAgICAgeTogRS5nZXRDZW50ZXJZKCksXG4gICAgICAgICAgICAgICAgICB3OiBFLndpZHRoLFxuICAgICAgICAgICAgICAgICAgaDogRS5oZWlnaHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUucnVuU3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbml0aWFsQW5pbWF0aW9uUGVyaW9kID0gMjUsIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gdGhpcy5pbml0aWFsQW5pbWF0aW9uUGVyaW9kO1xuICAgICAgICAgICAgICB2YXIgcyA9ICExO1xuICAgICAgICAgICAgICBpZiAoZC5BTklNQVRFID09PSBcImR1cmluZ1wiKVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImxheW91dHN0YXJ0ZWRcIik7XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoOyAhczsgKVxuICAgICAgICAgICAgICAgICAgcyA9IHRoaXMudGljaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5jYWxjdWxhdGVOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvblRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gW10sIGYsIGMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRHcmFwaHMoKSwgRSA9IGMubGVuZ3RoLCBBO1xuICAgICAgICAgICAgICBmb3IgKEEgPSAwOyBBIDwgRTsgQSsrKVxuICAgICAgICAgICAgICAgIGYgPSBjW0FdLCBmLnVwZGF0ZUNvbm5lY3RlZCgpLCBmLmlzQ29ubmVjdGVkIHx8IChzID0gcy5jb25jYXQoZi5nZXROb2RlcygpKSk7XG4gICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUuY3JlYXRlQmVuZHBvaW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgcyA9IFtdO1xuICAgICAgICAgICAgICBzID0gcy5jb25jYXQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKSk7XG4gICAgICAgICAgICAgIHZhciBmID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSwgYztcbiAgICAgICAgICAgICAgZm9yIChjID0gMDsgYyA8IHMubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgRSA9IHNbY107XG4gICAgICAgICAgICAgICAgaWYgKCFmLmhhcyhFKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIEEgPSBFLmdldFNvdXJjZSgpLCBtID0gRS5nZXRUYXJnZXQoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChBID09IG0pXG4gICAgICAgICAgICAgICAgICAgIEUuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IGEoKSksIEUuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IGEoKSksIHRoaXMuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMoRSksIGYuYWRkKEUpO1xuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBDID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChDID0gQy5jb25jYXQoQS5nZXRFZGdlTGlzdFRvTm9kZShtKSksIEMgPSBDLmNvbmNhdChtLmdldEVkZ2VMaXN0VG9Ob2RlKEEpKSwgIWYuaGFzKENbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKEMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFIgPSAwOyBSIDwgQy5sZW5ndGg7IFIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IENbUl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE0uZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IGEoKSksIHRoaXMuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMoTSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIEMuZm9yRWFjaChmdW5jdGlvbihTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmLmFkZChTKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZi5zaXplID09IHMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHkucHJvdG90eXBlLnBvc2l0aW9uTm9kZXNSYWRpYWxseSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IG5ldyBoKDAsIDApLCBjID0gTWF0aC5jZWlsKE1hdGguc3FydChzLmxlbmd0aCkpLCBFID0gMCwgQSA9IDAsIG0gPSAwLCBDID0gbmV3IGEoMCwgMCksIFIgPSAwOyBSIDwgcy5sZW5ndGg7IFIrKykge1xuICAgICAgICAgICAgICAgIFIgJSBjID09IDAgJiYgKG0gPSAwLCBBID0gRSwgUiAhPSAwICYmIChBICs9IG4uREVGQVVMVF9DT01QT05FTlRfU0VQRVJBVElPTiksIEUgPSAwKTtcbiAgICAgICAgICAgICAgICB2YXIgTSA9IHNbUl0sIFMgPSBwLmZpbmRDZW50ZXJPZlRyZWUoTSk7XG4gICAgICAgICAgICAgICAgZi54ID0gbSwgZi55ID0gQSwgQyA9IHkucmFkaWFsTGF5b3V0KE0sIFMsIGYpLCBDLnkgPiBFICYmIChFID0gTWF0aC5mbG9vcihDLnkpKSwgbSA9IE1hdGguZmxvb3IoQy54ICsgbi5ERUZBVUxUX0NPTVBPTkVOVF9TRVBFUkFUSU9OKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShuZXcgYShyLldPUkxEX0NFTlRFUl9YIC0gQy54IC8gMiwgci5XT1JMRF9DRU5URVJfWSAtIEMueSAvIDIpKTtcbiAgICAgICAgICAgIH0sIHkucmFkaWFsTGF5b3V0ID0gZnVuY3Rpb24ocywgZiwgYykge1xuICAgICAgICAgICAgICB2YXIgRSA9IE1hdGgubWF4KHRoaXMubWF4RGlhZ29uYWxJblRyZWUocyksIG4uREVGQVVMVF9SQURJQUxfU0VQQVJBVElPTik7XG4gICAgICAgICAgICAgIHkuYnJhbmNoUmFkaWFsTGF5b3V0KGYsIG51bGwsIDAsIDM1OSwgMCwgRSk7XG4gICAgICAgICAgICAgIHZhciBBID0gdS5jYWxjdWxhdGVCb3VuZHMocyksIG0gPSBuZXcgVCgpO1xuICAgICAgICAgICAgICBtLnNldERldmljZU9yZ1goQS5nZXRNaW5YKCkpLCBtLnNldERldmljZU9yZ1koQS5nZXRNaW5ZKCkpLCBtLnNldFdvcmxkT3JnWChjLngpLCBtLnNldFdvcmxkT3JnWShjLnkpO1xuICAgICAgICAgICAgICBmb3IgKHZhciBDID0gMDsgQyA8IHMubGVuZ3RoOyBDKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgUiA9IHNbQ107XG4gICAgICAgICAgICAgICAgUi50cmFuc2Zvcm0obSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIE0gPSBuZXcgYShBLmdldE1heFgoKSwgQS5nZXRNYXhZKCkpO1xuICAgICAgICAgICAgICByZXR1cm4gbS5pbnZlcnNlVHJhbnNmb3JtUG9pbnQoTSk7XG4gICAgICAgICAgICB9LCB5LmJyYW5jaFJhZGlhbExheW91dCA9IGZ1bmN0aW9uKHMsIGYsIGMsIEUsIEEsIG0pIHtcbiAgICAgICAgICAgICAgdmFyIEMgPSAoRSAtIGMgKyAxKSAvIDI7XG4gICAgICAgICAgICAgIEMgPCAwICYmIChDICs9IDE4MCk7XG4gICAgICAgICAgICAgIHZhciBSID0gKEMgKyBjKSAlIDM2MCwgTSA9IFIgKiBELlRXT19QSSAvIDM2MCwgUyA9IEEgKiBNYXRoLmNvcyhNKSwgWSA9IEEgKiBNYXRoLnNpbihNKTtcbiAgICAgICAgICAgICAgcy5zZXRDZW50ZXIoUywgWSk7XG4gICAgICAgICAgICAgIHZhciB3ID0gW107XG4gICAgICAgICAgICAgIHcgPSB3LmNvbmNhdChzLmdldEVkZ2VzKCkpO1xuICAgICAgICAgICAgICB2YXIgeCA9IHcubGVuZ3RoO1xuICAgICAgICAgICAgICBmICE9IG51bGwgJiYgeC0tO1xuICAgICAgICAgICAgICBmb3IgKHZhciBGID0gMCwgVSA9IHcubGVuZ3RoLCBQLCBfID0gcy5nZXRFZGdlc0JldHdlZW4oZik7IF8ubGVuZ3RoID4gMTsgKSB7XG4gICAgICAgICAgICAgICAgdmFyIFggPSBfWzBdO1xuICAgICAgICAgICAgICAgIF8uc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIHZhciBIID0gdy5pbmRleE9mKFgpO1xuICAgICAgICAgICAgICAgIEggPj0gMCAmJiB3LnNwbGljZShILCAxKSwgVS0tLCB4LS07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZiAhPSBudWxsID8gUCA9ICh3LmluZGV4T2YoX1swXSkgKyAxKSAlIFUgOiBQID0gMDtcbiAgICAgICAgICAgICAgZm9yICh2YXIgVyA9IE1hdGguYWJzKEUgLSBjKSAvIHgsIEIgPSBQOyBGICE9IHg7IEIgPSArK0IgJSBVKSB7XG4gICAgICAgICAgICAgICAgdmFyIEsgPSB3W0JdLmdldE90aGVyRW5kKHMpO1xuICAgICAgICAgICAgICAgIGlmIChLICE9IGYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBxID0gKGMgKyBGICogVykgJSAzNjAsIGh0ID0gKHEgKyBXKSAlIDM2MDtcbiAgICAgICAgICAgICAgICAgIHkuYnJhbmNoUmFkaWFsTGF5b3V0KEssIHMsIHEsIGh0LCBBICsgbSwgbSksIEYrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHkubWF4RGlhZ29uYWxJblRyZWUgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGYgPSB2Lk1JTl9WQUxVRSwgYyA9IDA7IGMgPCBzLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIEUgPSBzW2NdLCBBID0gRS5nZXREaWFnb25hbCgpO1xuICAgICAgICAgICAgICAgIEEgPiBmICYmIChmID0gQSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uUmFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDIgKiAodGhpcy5sZXZlbCArIDEpICogdGhpcy5pZGVhbEVkZ2VMZW5ndGg7XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5ncm91cFplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gdGhpcywgZiA9IHt9O1xuICAgICAgICAgICAgICB0aGlzLm1lbWJlckdyb3VwcyA9IHt9LCB0aGlzLmlkVG9EdW1teU5vZGUgPSB7fTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IFtdLCBFID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKSwgQSA9IDA7IEEgPCBFLmxlbmd0aDsgQSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG0gPSBFW0FdLCBDID0gbS5nZXRQYXJlbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vZGVEZWdyZWVXaXRoQ2hpbGRyZW4obSkgPT09IDAgJiYgKEMuaWQgPT0gbnVsbCB8fCAhdGhpcy5nZXRUb0JlVGlsZWQoQykpICYmIGMucHVzaChtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKHZhciBBID0gMDsgQSA8IGMubGVuZ3RoOyBBKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbSA9IGNbQV0sIFIgPSBtLmdldFBhcmVudCgpLmlkO1xuICAgICAgICAgICAgICAgIHR5cGVvZiBmW1JdID4gXCJ1XCIgJiYgKGZbUl0gPSBbXSksIGZbUl0gPSBmW1JdLmNvbmNhdChtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmKS5mb3JFYWNoKGZ1bmN0aW9uKE0pIHtcbiAgICAgICAgICAgICAgICBpZiAoZltNXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgUyA9IFwiRHVtbXlDb21wb3VuZF9cIiArIE07XG4gICAgICAgICAgICAgICAgICBzLm1lbWJlckdyb3Vwc1tTXSA9IGZbTV07XG4gICAgICAgICAgICAgICAgICB2YXIgWSA9IGZbTV1bMF0uZ2V0UGFyZW50KCksIHcgPSBuZXcgbChzLmdyYXBoTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgICB3LmlkID0gUywgdy5wYWRkaW5nTGVmdCA9IFkucGFkZGluZ0xlZnQgfHwgMCwgdy5wYWRkaW5nUmlnaHQgPSBZLnBhZGRpbmdSaWdodCB8fCAwLCB3LnBhZGRpbmdCb3R0b20gPSBZLnBhZGRpbmdCb3R0b20gfHwgMCwgdy5wYWRkaW5nVG9wID0gWS5wYWRkaW5nVG9wIHx8IDAsIHMuaWRUb0R1bW15Tm9kZVtTXSA9IHc7XG4gICAgICAgICAgICAgICAgICB2YXIgeCA9IHMuZ2V0R3JhcGhNYW5hZ2VyKCkuYWRkKHMubmV3R3JhcGgoKSwgdyksIEYgPSBZLmdldENoaWxkKCk7XG4gICAgICAgICAgICAgICAgICBGLmFkZCh3KTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIFUgPSAwOyBVIDwgZltNXS5sZW5ndGg7IFUrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgUCA9IGZbTV1bVV07XG4gICAgICAgICAgICAgICAgICAgIEYucmVtb3ZlKFApLCB4LmFkZChQKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUuY2xlYXJDb21wb3VuZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHMgPSB7fSwgZiA9IHt9O1xuICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1ERlNPbkNvbXBvdW5kcygpO1xuICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuY29tcG91bmRPcmRlci5sZW5ndGg7IGMrKylcbiAgICAgICAgICAgICAgICBmW3RoaXMuY29tcG91bmRPcmRlcltjXS5pZF0gPSB0aGlzLmNvbXBvdW5kT3JkZXJbY10sIHNbdGhpcy5jb21wb3VuZE9yZGVyW2NdLmlkXSA9IFtdLmNvbmNhdCh0aGlzLmNvbXBvdW5kT3JkZXJbY10uZ2V0Q2hpbGQoKS5nZXROb2RlcygpKSwgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKHRoaXMuY29tcG91bmRPcmRlcltjXS5nZXRDaGlsZCgpKSwgdGhpcy5jb21wb3VuZE9yZGVyW2NdLmNoaWxkID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpLCB0aGlzLnRpbGVDb21wb3VuZE1lbWJlcnMocywgZik7XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5jbGVhclplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gdGhpcywgZiA9IHRoaXMudGlsZWRaZXJvRGVncmVlUGFjayA9IFtdO1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1lbWJlckdyb3VwcykuZm9yRWFjaChmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICAgICAgdmFyIEUgPSBzLmlkVG9EdW1teU5vZGVbY107XG4gICAgICAgICAgICAgICAgZltjXSA9IHMudGlsZU5vZGVzKHMubWVtYmVyR3JvdXBzW2NdLCBFLnBhZGRpbmdMZWZ0ICsgRS5wYWRkaW5nUmlnaHQpLCBFLnJlY3Qud2lkdGggPSBmW2NdLndpZHRoLCBFLnJlY3QuaGVpZ2h0ID0gZltjXS5oZWlnaHQ7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUucmVwb3B1bGF0ZUNvbXBvdW5kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBzID0gdGhpcy5jb21wb3VuZE9yZGVyLmxlbmd0aCAtIDE7IHMgPj0gMDsgcy0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSB0aGlzLmNvbXBvdW5kT3JkZXJbc10sIGMgPSBmLmlkLCBFID0gZi5wYWRkaW5nTGVmdCwgQSA9IGYucGFkZGluZ1RvcDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkanVzdExvY2F0aW9ucyh0aGlzLnRpbGVkTWVtYmVyUGFja1tjXSwgZi5yZWN0LngsIGYucmVjdC55LCBFLCBBKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUucmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gdGhpcywgZiA9IHRoaXMudGlsZWRaZXJvRGVncmVlUGFjaztcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZikuZm9yRWFjaChmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICAgICAgdmFyIEUgPSBzLmlkVG9EdW1teU5vZGVbY10sIEEgPSBFLnBhZGRpbmdMZWZ0LCBtID0gRS5wYWRkaW5nVG9wO1xuICAgICAgICAgICAgICAgIHMuYWRqdXN0TG9jYXRpb25zKGZbY10sIEUucmVjdC54LCBFLnJlY3QueSwgQSwgbSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUuZ2V0VG9CZVRpbGVkID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICB2YXIgZiA9IHMuaWQ7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnRvQmVUaWxlZFtmXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmVUaWxlZFtmXTtcbiAgICAgICAgICAgICAgdmFyIGMgPSBzLmdldENoaWxkKCk7XG4gICAgICAgICAgICAgIGlmIChjID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CZVRpbGVkW2ZdID0gITEsICExO1xuICAgICAgICAgICAgICBmb3IgKHZhciBFID0gYy5nZXROb2RlcygpLCBBID0gMDsgQSA8IEUubGVuZ3RoOyBBKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbSA9IEVbQV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Tm9kZURlZ3JlZShtKSA+IDApXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0JlVGlsZWRbZl0gPSAhMSwgITE7XG4gICAgICAgICAgICAgICAgaWYgKG0uZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvQmVUaWxlZFttLmlkXSA9ICExO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRUb0JlVGlsZWQobSkpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0JlVGlsZWRbZl0gPSAhMSwgITE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CZVRpbGVkW2ZdID0gITAsICEwO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUuZ2V0Tm9kZURlZ3JlZSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgcy5pZDtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IHMuZ2V0RWRnZXMoKSwgYyA9IDAsIEUgPSAwOyBFIDwgZi5sZW5ndGg7IEUrKykge1xuICAgICAgICAgICAgICAgIHZhciBBID0gZltFXTtcbiAgICAgICAgICAgICAgICBBLmdldFNvdXJjZSgpLmlkICE9PSBBLmdldFRhcmdldCgpLmlkICYmIChjID0gYyArIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbiA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgdmFyIGYgPSB0aGlzLmdldE5vZGVEZWdyZWUocyk7XG4gICAgICAgICAgICAgIGlmIChzLmdldENoaWxkKCkgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IHMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLCBFID0gMDsgRSA8IGMubGVuZ3RoOyBFKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgQSA9IGNbRV07XG4gICAgICAgICAgICAgICAgZiArPSB0aGlzLmdldE5vZGVEZWdyZWVXaXRoQ2hpbGRyZW4oQSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5wZXJmb3JtREZTT25Db21wb3VuZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5jb21wb3VuZE9yZGVyID0gW10sIHRoaXMuZmlsbENvbXBleE9yZGVyQnlERlModGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCkpO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUuZmlsbENvbXBleE9yZGVyQnlERlMgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGYgPSAwOyBmIDwgcy5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgICAgIHZhciBjID0gc1tmXTtcbiAgICAgICAgICAgICAgICBjLmdldENoaWxkKCkgIT0gbnVsbCAmJiB0aGlzLmZpbGxDb21wZXhPcmRlckJ5REZTKGMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpKSwgdGhpcy5nZXRUb0JlVGlsZWQoYykgJiYgdGhpcy5jb21wb3VuZE9yZGVyLnB1c2goYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHkucHJvdG90eXBlLmFkanVzdExvY2F0aW9ucyA9IGZ1bmN0aW9uKHMsIGYsIGMsIEUsIEEpIHtcbiAgICAgICAgICAgICAgZiArPSBFLCBjICs9IEE7XG4gICAgICAgICAgICAgIGZvciAodmFyIG0gPSBmLCBDID0gMDsgQyA8IHMucm93cy5sZW5ndGg7IEMrKykge1xuICAgICAgICAgICAgICAgIHZhciBSID0gcy5yb3dzW0NdO1xuICAgICAgICAgICAgICAgIGYgPSBtO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIE0gPSAwLCBTID0gMDsgUyA8IFIubGVuZ3RoOyBTKyspIHtcbiAgICAgICAgICAgICAgICAgIHZhciBZID0gUltTXTtcbiAgICAgICAgICAgICAgICAgIFkucmVjdC54ID0gZiwgWS5yZWN0LnkgPSBjLCBmICs9IFkucmVjdC53aWR0aCArIHMuaG9yaXpvbnRhbFBhZGRpbmcsIFkucmVjdC5oZWlnaHQgPiBNICYmIChNID0gWS5yZWN0LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGMgKz0gTSArIHMudmVydGljYWxQYWRkaW5nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS50aWxlQ29tcG91bmRNZW1iZXJzID0gZnVuY3Rpb24ocywgZikge1xuICAgICAgICAgICAgICB2YXIgYyA9IHRoaXM7XG4gICAgICAgICAgICAgIHRoaXMudGlsZWRNZW1iZXJQYWNrID0gW10sIE9iamVjdC5rZXlzKHMpLmZvckVhY2goZnVuY3Rpb24oRSkge1xuICAgICAgICAgICAgICAgIHZhciBBID0gZltFXTtcbiAgICAgICAgICAgICAgICBjLnRpbGVkTWVtYmVyUGFja1tFXSA9IGMudGlsZU5vZGVzKHNbRV0sIEEucGFkZGluZ0xlZnQgKyBBLnBhZGRpbmdSaWdodCksIEEucmVjdC53aWR0aCA9IGMudGlsZWRNZW1iZXJQYWNrW0VdLndpZHRoLCBBLnJlY3QuaGVpZ2h0ID0gYy50aWxlZE1lbWJlclBhY2tbRV0uaGVpZ2h0O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHkucHJvdG90eXBlLnRpbGVOb2RlcyA9IGZ1bmN0aW9uKHMsIGYpIHtcbiAgICAgICAgICAgICAgdmFyIGMgPSBuLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMLCBFID0gbi5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMLCBBID0ge1xuICAgICAgICAgICAgICAgIHJvd3M6IFtdLFxuICAgICAgICAgICAgICAgIHJvd1dpZHRoOiBbXSxcbiAgICAgICAgICAgICAgICByb3dIZWlnaHQ6IFtdLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogZixcbiAgICAgICAgICAgICAgICAvLyBhc3N1bWUgbWluSGVpZ2h0IGVxdWFscyB0byBtaW5XaWR0aFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsUGFkZGluZzogYyxcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUGFkZGluZzogRVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBzLnNvcnQoZnVuY3Rpb24oUiwgTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSLnJlY3Qud2lkdGggKiBSLnJlY3QuaGVpZ2h0ID4gTS5yZWN0LndpZHRoICogTS5yZWN0LmhlaWdodCA/IC0xIDogUi5yZWN0LndpZHRoICogUi5yZWN0LmhlaWdodCA8IE0ucmVjdC53aWR0aCAqIE0ucmVjdC5oZWlnaHQgPyAxIDogMDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgcy5sZW5ndGg7IG0rKykge1xuICAgICAgICAgICAgICAgIHZhciBDID0gc1ttXTtcbiAgICAgICAgICAgICAgICBBLnJvd3MubGVuZ3RoID09IDAgPyB0aGlzLmluc2VydE5vZGVUb1JvdyhBLCBDLCAwLCBmKSA6IHRoaXMuY2FuQWRkSG9yaXpvbnRhbChBLCBDLnJlY3Qud2lkdGgsIEMucmVjdC5oZWlnaHQpID8gdGhpcy5pbnNlcnROb2RlVG9Sb3coQSwgQywgdGhpcy5nZXRTaG9ydGVzdFJvd0luZGV4KEEpLCBmKSA6IHRoaXMuaW5zZXJ0Tm9kZVRvUm93KEEsIEMsIEEucm93cy5sZW5ndGgsIGYpLCB0aGlzLnNoaWZ0VG9MYXN0Um93KEEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBBO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUuaW5zZXJ0Tm9kZVRvUm93ID0gZnVuY3Rpb24ocywgZiwgYywgRSkge1xuICAgICAgICAgICAgICB2YXIgQSA9IEU7XG4gICAgICAgICAgICAgIGlmIChjID09IHMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbSA9IFtdO1xuICAgICAgICAgICAgICAgIHMucm93cy5wdXNoKG0pLCBzLnJvd1dpZHRoLnB1c2goQSksIHMucm93SGVpZ2h0LnB1c2goMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIEMgPSBzLnJvd1dpZHRoW2NdICsgZi5yZWN0LndpZHRoO1xuICAgICAgICAgICAgICBzLnJvd3NbY10ubGVuZ3RoID4gMCAmJiAoQyArPSBzLmhvcml6b250YWxQYWRkaW5nKSwgcy5yb3dXaWR0aFtjXSA9IEMsIHMud2lkdGggPCBDICYmIChzLndpZHRoID0gQyk7XG4gICAgICAgICAgICAgIHZhciBSID0gZi5yZWN0LmhlaWdodDtcbiAgICAgICAgICAgICAgYyA+IDAgJiYgKFIgKz0gcy52ZXJ0aWNhbFBhZGRpbmcpO1xuICAgICAgICAgICAgICB2YXIgTSA9IDA7XG4gICAgICAgICAgICAgIFIgPiBzLnJvd0hlaWdodFtjXSAmJiAoTSA9IHMucm93SGVpZ2h0W2NdLCBzLnJvd0hlaWdodFtjXSA9IFIsIE0gPSBzLnJvd0hlaWdodFtjXSAtIE0pLCBzLmhlaWdodCArPSBNLCBzLnJvd3NbY10ucHVzaChmKTtcbiAgICAgICAgICAgIH0sIHkucHJvdG90eXBlLmdldFNob3J0ZXN0Um93SW5kZXggPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGYgPSAtMSwgYyA9IE51bWJlci5NQVhfVkFMVUUsIEUgPSAwOyBFIDwgcy5yb3dzLmxlbmd0aDsgRSsrKVxuICAgICAgICAgICAgICAgIHMucm93V2lkdGhbRV0gPCBjICYmIChmID0gRSwgYyA9IHMucm93V2lkdGhbRV0pO1xuICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0sIHkucHJvdG90eXBlLmdldExvbmdlc3RSb3dJbmRleCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IC0xLCBjID0gTnVtYmVyLk1JTl9WQUxVRSwgRSA9IDA7IEUgPCBzLnJvd3MubGVuZ3RoOyBFKyspXG4gICAgICAgICAgICAgICAgcy5yb3dXaWR0aFtFXSA+IGMgJiYgKGYgPSBFLCBjID0gcy5yb3dXaWR0aFtFXSk7XG4gICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUuY2FuQWRkSG9yaXpvbnRhbCA9IGZ1bmN0aW9uKHMsIGYsIGMpIHtcbiAgICAgICAgICAgICAgdmFyIEUgPSB0aGlzLmdldFNob3J0ZXN0Um93SW5kZXgocyk7XG4gICAgICAgICAgICAgIGlmIChFIDwgMClcbiAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgIHZhciBBID0gcy5yb3dXaWR0aFtFXTtcbiAgICAgICAgICAgICAgaWYgKEEgKyBzLmhvcml6b250YWxQYWRkaW5nICsgZiA8PSBzLndpZHRoKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgIHZhciBtID0gMDtcbiAgICAgICAgICAgICAgcy5yb3dIZWlnaHRbRV0gPCBjICYmIEUgPiAwICYmIChtID0gYyArIHMudmVydGljYWxQYWRkaW5nIC0gcy5yb3dIZWlnaHRbRV0pO1xuICAgICAgICAgICAgICB2YXIgQztcbiAgICAgICAgICAgICAgcy53aWR0aCAtIEEgPj0gZiArIHMuaG9yaXpvbnRhbFBhZGRpbmcgPyBDID0gKHMuaGVpZ2h0ICsgbSkgLyAoQSArIGYgKyBzLmhvcml6b250YWxQYWRkaW5nKSA6IEMgPSAocy5oZWlnaHQgKyBtKSAvIHMud2lkdGgsIG0gPSBjICsgcy52ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICAgICAgICAgIHZhciBSO1xuICAgICAgICAgICAgICByZXR1cm4gcy53aWR0aCA8IGYgPyBSID0gKHMuaGVpZ2h0ICsgbSkgLyBmIDogUiA9IChzLmhlaWdodCArIG0pIC8gcy53aWR0aCwgUiA8IDEgJiYgKFIgPSAxIC8gUiksIEMgPCAxICYmIChDID0gMSAvIEMpLCBDIDwgUjtcbiAgICAgICAgICAgIH0sIHkucHJvdG90eXBlLnNoaWZ0VG9MYXN0Um93ID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICB2YXIgZiA9IHRoaXMuZ2V0TG9uZ2VzdFJvd0luZGV4KHMpLCBjID0gcy5yb3dXaWR0aC5sZW5ndGggLSAxLCBFID0gcy5yb3dzW2ZdLCBBID0gRVtFLmxlbmd0aCAtIDFdLCBtID0gQS53aWR0aCArIHMuaG9yaXpvbnRhbFBhZGRpbmc7XG4gICAgICAgICAgICAgIGlmIChzLndpZHRoIC0gcy5yb3dXaWR0aFtjXSA+IG0gJiYgZiAhPSBjKSB7XG4gICAgICAgICAgICAgICAgRS5zcGxpY2UoLTEsIDEpLCBzLnJvd3NbY10ucHVzaChBKSwgcy5yb3dXaWR0aFtmXSA9IHMucm93V2lkdGhbZl0gLSBtLCBzLnJvd1dpZHRoW2NdID0gcy5yb3dXaWR0aFtjXSArIG0sIHMud2lkdGggPSBzLnJvd1dpZHRoW2luc3RhbmNlLmdldExvbmdlc3RSb3dJbmRleChzKV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgQyA9IE51bWJlci5NSU5fVkFMVUUsIFIgPSAwOyBSIDwgRS5sZW5ndGg7IFIrKylcbiAgICAgICAgICAgICAgICAgIEVbUl0uaGVpZ2h0ID4gQyAmJiAoQyA9IEVbUl0uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBmID4gMCAmJiAoQyArPSBzLnZlcnRpY2FsUGFkZGluZyk7XG4gICAgICAgICAgICAgICAgdmFyIE0gPSBzLnJvd0hlaWdodFtmXSArIHMucm93SGVpZ2h0W2NdO1xuICAgICAgICAgICAgICAgIHMucm93SGVpZ2h0W2ZdID0gQywgcy5yb3dIZWlnaHRbY10gPCBBLmhlaWdodCArIHMudmVydGljYWxQYWRkaW5nICYmIChzLnJvd0hlaWdodFtjXSA9IEEuaGVpZ2h0ICsgcy52ZXJ0aWNhbFBhZGRpbmcpO1xuICAgICAgICAgICAgICAgIHZhciBTID0gcy5yb3dIZWlnaHRbZl0gKyBzLnJvd0hlaWdodFtjXTtcbiAgICAgICAgICAgICAgICBzLmhlaWdodCArPSBTIC0gTSwgdGhpcy5zaGlmdFRvTGFzdFJvdyhzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUudGlsaW5nUHJlTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIG4uVElMRSAmJiAodGhpcy5ncm91cFplcm9EZWdyZWVNZW1iZXJzKCksIHRoaXMuY2xlYXJDb21wb3VuZHMoKSwgdGhpcy5jbGVhclplcm9EZWdyZWVNZW1iZXJzKCkpO1xuICAgICAgICAgICAgfSwgeS5wcm90b3R5cGUudGlsaW5nUG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBuLlRJTEUgJiYgKHRoaXMucmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzKCksIHRoaXMucmVwb3B1bGF0ZUNvbXBvdW5kcygpKTtcbiAgICAgICAgICAgIH0sIHkucHJvdG90eXBlLnJlZHVjZVRyZWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHMgPSBbXSwgZiA9ICEwLCBjOyBmOyApIHtcbiAgICAgICAgICAgICAgICB2YXIgRSA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCksIEEgPSBbXTtcbiAgICAgICAgICAgICAgICBmID0gITE7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbSA9IDA7IG0gPCBFLmxlbmd0aDsgbSsrKVxuICAgICAgICAgICAgICAgICAgYyA9IEVbbV0sIGMuZ2V0RWRnZXMoKS5sZW5ndGggPT0gMSAmJiAhYy5nZXRFZGdlcygpWzBdLmlzSW50ZXJHcmFwaCAmJiBjLmdldENoaWxkKCkgPT0gbnVsbCAmJiAoQS5wdXNoKFtjLCBjLmdldEVkZ2VzKClbMF0sIGMuZ2V0T3duZXIoKV0pLCBmID0gITApO1xuICAgICAgICAgICAgICAgIGlmIChmID09ICEwKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBDID0gW10sIFIgPSAwOyBSIDwgQS5sZW5ndGg7IFIrKylcbiAgICAgICAgICAgICAgICAgICAgQVtSXVswXS5nZXRFZGdlcygpLmxlbmd0aCA9PSAxICYmIChDLnB1c2goQVtSXSksIEFbUl1bMF0uZ2V0T3duZXIoKS5yZW1vdmUoQVtSXVswXSkpO1xuICAgICAgICAgICAgICAgICAgcy5wdXNoKEMpLCB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzKCksIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5wcnVuZWROb2Rlc0FsbCA9IHM7XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5ncm93VHJlZSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IHMubGVuZ3RoLCBjID0gc1tmIC0gMV0sIEUsIEEgPSAwOyBBIDwgYy5sZW5ndGg7IEErKylcbiAgICAgICAgICAgICAgICBFID0gY1tBXSwgdGhpcy5maW5kUGxhY2Vmb3JQcnVuZWROb2RlKEUpLCBFWzJdLmFkZChFWzBdKSwgRVsyXS5hZGQoRVsxXSwgRVsxXS5zb3VyY2UsIEVbMV0udGFyZ2V0KTtcbiAgICAgICAgICAgICAgcy5zcGxpY2Uocy5sZW5ndGggLSAxLCAxKSwgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpLCB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gICAgICAgICAgICB9LCB5LnByb3RvdHlwZS5maW5kUGxhY2Vmb3JQcnVuZWROb2RlID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICB2YXIgZiwgYywgRSA9IHNbMF07XG4gICAgICAgICAgICAgIEUgPT0gc1sxXS5zb3VyY2UgPyBjID0gc1sxXS50YXJnZXQgOiBjID0gc1sxXS5zb3VyY2U7XG4gICAgICAgICAgICAgIHZhciBBID0gYy5zdGFydFgsIG0gPSBjLmZpbmlzaFgsIEMgPSBjLnN0YXJ0WSwgUiA9IGMuZmluaXNoWSwgTSA9IDAsIFMgPSAwLCBZID0gMCwgdyA9IDAsIHggPSBbTSwgWSwgUywgd107XG4gICAgICAgICAgICAgIGlmIChDID4gMClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBGID0gQTsgRiA8PSBtOyBGKyspXG4gICAgICAgICAgICAgICAgICB4WzBdICs9IHRoaXMuZ3JpZFtGXVtDIC0gMV0ubGVuZ3RoICsgdGhpcy5ncmlkW0ZdW0NdLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIGlmIChtIDwgdGhpcy5ncmlkLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgRiA9IEM7IEYgPD0gUjsgRisrKVxuICAgICAgICAgICAgICAgICAgeFsxXSArPSB0aGlzLmdyaWRbbSArIDFdW0ZdLmxlbmd0aCArIHRoaXMuZ3JpZFttXVtGXS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICBpZiAoUiA8IHRoaXMuZ3JpZFswXS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIEYgPSBBOyBGIDw9IG07IEYrKylcbiAgICAgICAgICAgICAgICAgIHhbMl0gKz0gdGhpcy5ncmlkW0ZdW1IgKyAxXS5sZW5ndGggKyB0aGlzLmdyaWRbRl1bUl0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgaWYgKEEgPiAwKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIEYgPSBDOyBGIDw9IFI7IEYrKylcbiAgICAgICAgICAgICAgICAgIHhbM10gKz0gdGhpcy5ncmlkW0EgLSAxXVtGXS5sZW5ndGggKyB0aGlzLmdyaWRbQV1bRl0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgVSA9IHYuTUFYX1ZBTFVFLCBQLCBfLCBYID0gMDsgWCA8IHgubGVuZ3RoOyBYKyspXG4gICAgICAgICAgICAgICAgeFtYXSA8IFUgPyAoVSA9IHhbWF0sIFAgPSAxLCBfID0gWCkgOiB4W1hdID09IFUgJiYgUCsrO1xuICAgICAgICAgICAgICBpZiAoUCA9PSAzICYmIFUgPT0gMClcbiAgICAgICAgICAgICAgICB4WzBdID09IDAgJiYgeFsxXSA9PSAwICYmIHhbMl0gPT0gMCA/IGYgPSAxIDogeFswXSA9PSAwICYmIHhbMV0gPT0gMCAmJiB4WzNdID09IDAgPyBmID0gMCA6IHhbMF0gPT0gMCAmJiB4WzJdID09IDAgJiYgeFszXSA9PSAwID8gZiA9IDMgOiB4WzFdID09IDAgJiYgeFsyXSA9PSAwICYmIHhbM10gPT0gMCAmJiAoZiA9IDIpO1xuICAgICAgICAgICAgICBlbHNlIGlmIChQID09IDIgJiYgVSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIEggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgICAgICAgICB4WzBdID09IDAgJiYgeFsxXSA9PSAwID8gSCA9PSAwID8gZiA9IDAgOiBmID0gMSA6IHhbMF0gPT0gMCAmJiB4WzJdID09IDAgPyBIID09IDAgPyBmID0gMCA6IGYgPSAyIDogeFswXSA9PSAwICYmIHhbM10gPT0gMCA/IEggPT0gMCA/IGYgPSAwIDogZiA9IDMgOiB4WzFdID09IDAgJiYgeFsyXSA9PSAwID8gSCA9PSAwID8gZiA9IDEgOiBmID0gMiA6IHhbMV0gPT0gMCAmJiB4WzNdID09IDAgPyBIID09IDAgPyBmID0gMSA6IGYgPSAzIDogSCA9PSAwID8gZiA9IDIgOiBmID0gMztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChQID09IDQgJiYgVSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIEggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICAgICAgICAgICAgICBmID0gSDtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgZiA9IF87XG4gICAgICAgICAgICAgIGYgPT0gMCA/IEUuc2V0Q2VudGVyKGMuZ2V0Q2VudGVyWCgpLCBjLmdldENlbnRlclkoKSAtIGMuZ2V0SGVpZ2h0KCkgLyAyIC0gZC5ERUZBVUxUX0VER0VfTEVOR1RIIC0gRS5nZXRIZWlnaHQoKSAvIDIpIDogZiA9PSAxID8gRS5zZXRDZW50ZXIoYy5nZXRDZW50ZXJYKCkgKyBjLmdldFdpZHRoKCkgLyAyICsgZC5ERUZBVUxUX0VER0VfTEVOR1RIICsgRS5nZXRXaWR0aCgpIC8gMiwgYy5nZXRDZW50ZXJZKCkpIDogZiA9PSAyID8gRS5zZXRDZW50ZXIoYy5nZXRDZW50ZXJYKCksIGMuZ2V0Q2VudGVyWSgpICsgYy5nZXRIZWlnaHQoKSAvIDIgKyBkLkRFRkFVTFRfRURHRV9MRU5HVEggKyBFLmdldEhlaWdodCgpIC8gMikgOiBFLnNldENlbnRlcihjLmdldENlbnRlclgoKSAtIGMuZ2V0V2lkdGgoKSAvIDIgLSBkLkRFRkFVTFRfRURHRV9MRU5HVEggLSBFLmdldFdpZHRoKCkgLyAyLCBjLmdldENlbnRlclkoKSk7XG4gICAgICAgICAgICB9LCBJLmV4cG9ydHMgPSB5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDcgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihJLCBMLCBvKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHt9O1xuICAgICAgICAgICAgZS5sYXlvdXRCYXNlID0gbygwKSwgZS5Db1NFQ29uc3RhbnRzID0gbygxKSwgZS5Db1NFRWRnZSA9IG8oMiksIGUuQ29TRUdyYXBoID0gbygzKSwgZS5Db1NFR3JhcGhNYW5hZ2VyID0gbyg0KSwgZS5Db1NFTGF5b3V0ID0gbyg2KSwgZS5Db1NFTm9kZSA9IG8oNSksIEkuZXhwb3J0cyA9IGU7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSkoWikpLCBaLmV4cG9ydHM7XG59XG52YXIgZHQgPSBrLmV4cG9ydHMsIEo7XG5mdW5jdGlvbiB2dCgpIHtcbiAgcmV0dXJuIEogfHwgKEogPSAxLCAoZnVuY3Rpb24oRywgYikge1xuICAgIChmdW5jdGlvbihJLCBMKSB7XG4gICAgICBHLmV4cG9ydHMgPSBMKHB0KCkpO1xuICAgIH0pKGR0LCBmdW5jdGlvbihOKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvKioqKioqL1xuICAgICAgICAoZnVuY3Rpb24oSSkge1xuICAgICAgICAgIHZhciBMID0ge307XG4gICAgICAgICAgZnVuY3Rpb24gbyhlKSB7XG4gICAgICAgICAgICBpZiAoTFtlXSlcbiAgICAgICAgICAgICAgcmV0dXJuIExbZV0uZXhwb3J0cztcbiAgICAgICAgICAgIHZhciB0ID0gTFtlXSA9IHtcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgaTogZSxcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgbDogITEsXG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIElbZV0uY2FsbCh0LmV4cG9ydHMsIHQsIHQuZXhwb3J0cywgbyksIHQubCA9ICEwLCB0LmV4cG9ydHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvLm0gPSBJLCBvLmMgPSBMLCBvLmkgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICB9LCBvLmQgPSBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICBvLm8oZSwgdCkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHQsIHtcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICAgIGdldDogaVxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgby5uID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IChcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZGVmYXVsdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gby5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICAgICAgICB9LCBvLm8gPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpO1xuICAgICAgICAgIH0sIG8ucCA9IFwiXCIsIG8oby5zID0gMSk7XG4gICAgICAgIH0pKFtcbiAgICAgICAgICAvKiAwICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oSSwgTCkge1xuICAgICAgICAgICAgSS5leHBvcnRzID0gTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAxICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oSSwgTCwgbykge1xuICAgICAgICAgICAgdmFyIGUgPSBvKDApLmxheW91dEJhc2UuTGF5b3V0Q29uc3RhbnRzLCB0ID0gbygwKS5sYXlvdXRCYXNlLkZETGF5b3V0Q29uc3RhbnRzLCBpID0gbygwKS5Db1NFQ29uc3RhbnRzLCBsID0gbygwKS5Db1NFTGF5b3V0LCBnID0gbygwKS5Db1NFTm9kZSwgbiA9IG8oMCkubGF5b3V0QmFzZS5Qb2ludEQsIGQgPSBvKDApLmxheW91dEJhc2UuRGltZW5zaW9uRCwgciA9IHtcbiAgICAgICAgICAgICAgLy8gQ2FsbGVkIG9uIGBsYXlvdXRyZWFkeWBcbiAgICAgICAgICAgICAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyBDYWxsZWQgb24gYGxheW91dHN0b3BgXG4gICAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyAnZHJhZnQnLCAnZGVmYXVsdCcgb3IgJ3Byb29mXCIgXG4gICAgICAgICAgICAgIC8vIC0gJ2RyYWZ0JyBmYXN0IGNvb2xpbmcgcmF0ZSBcbiAgICAgICAgICAgICAgLy8gLSAnZGVmYXVsdCcgbW9kZXJhdGUgY29vbGluZyByYXRlIFxuICAgICAgICAgICAgICAvLyAtIFwicHJvb2ZcIiBzbG93IGNvb2xpbmcgcmF0ZVxuICAgICAgICAgICAgICBxdWFsaXR5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgLy8gaW5jbHVkZSBsYWJlbHMgaW4gbm9kZSBkaW1lbnNpb25zXG4gICAgICAgICAgICAgIG5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsczogITEsXG4gICAgICAgICAgICAgIC8vIG51bWJlciBvZiB0aWNrcyBwZXIgZnJhbWU7IGhpZ2hlciBpcyBmYXN0ZXIgYnV0IG1vcmUgamVya3lcbiAgICAgICAgICAgICAgcmVmcmVzaDogMzAsXG4gICAgICAgICAgICAgIC8vIFdoZXRoZXIgdG8gZml0IHRoZSBuZXR3b3JrIHZpZXcgYWZ0ZXIgd2hlbiBkb25lXG4gICAgICAgICAgICAgIGZpdDogITAsXG4gICAgICAgICAgICAgIC8vIFBhZGRpbmcgb24gZml0XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAvLyBXaGV0aGVyIHRvIGVuYWJsZSBpbmNyZW1lbnRhbCBtb2RlXG4gICAgICAgICAgICAgIHJhbmRvbWl6ZTogITAsXG4gICAgICAgICAgICAgIC8vIE5vZGUgcmVwdWxzaW9uIChub24gb3ZlcmxhcHBpbmcpIG11bHRpcGxpZXJcbiAgICAgICAgICAgICAgbm9kZVJlcHVsc2lvbjogNDUwMCxcbiAgICAgICAgICAgICAgLy8gSWRlYWwgZWRnZSAobm9uIG5lc3RlZCkgbGVuZ3RoXG4gICAgICAgICAgICAgIGlkZWFsRWRnZUxlbmd0aDogNTAsXG4gICAgICAgICAgICAgIC8vIERpdmlzb3IgdG8gY29tcHV0ZSBlZGdlIGZvcmNlc1xuICAgICAgICAgICAgICBlZGdlRWxhc3RpY2l0eTogMC40NSxcbiAgICAgICAgICAgICAgLy8gTmVzdGluZyBmYWN0b3IgKG11bHRpcGxpZXIpIHRvIGNvbXB1dGUgaWRlYWwgZWRnZSBsZW5ndGggZm9yIG5lc3RlZCBlZGdlc1xuICAgICAgICAgICAgICBuZXN0aW5nRmFjdG9yOiAwLjEsXG4gICAgICAgICAgICAgIC8vIEdyYXZpdHkgZm9yY2UgKGNvbnN0YW50KVxuICAgICAgICAgICAgICBncmF2aXR5OiAwLjI1LFxuICAgICAgICAgICAgICAvLyBNYXhpbXVtIG51bWJlciBvZiBpdGVyYXRpb25zIHRvIHBlcmZvcm1cbiAgICAgICAgICAgICAgbnVtSXRlcjogMjUwMCxcbiAgICAgICAgICAgICAgLy8gRm9yIGVuYWJsaW5nIHRpbGluZ1xuICAgICAgICAgICAgICB0aWxlOiAhMCxcbiAgICAgICAgICAgICAgLy8gVHlwZSBvZiBsYXlvdXQgYW5pbWF0aW9uLiBUaGUgb3B0aW9uIHNldCBpcyB7J2R1cmluZycsICdlbmQnLCBmYWxzZX1cbiAgICAgICAgICAgICAgYW5pbWF0ZTogXCJlbmRcIixcbiAgICAgICAgICAgICAgLy8gRHVyYXRpb24gZm9yIGFuaW1hdGU6ZW5kXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgdmVydGljYWwgc3BhY2UgdG8gcHV0IGJldHdlZW4gdGhlIHplcm8gZGVncmVlIG1lbWJlcnMgZHVyaW5nIHRoZSB0aWxpbmcgb3BlcmF0aW9uKGNhbiBhbHNvIGJlIGEgZnVuY3Rpb24pXG4gICAgICAgICAgICAgIHRpbGluZ1BhZGRpbmdWZXJ0aWNhbDogMTAsXG4gICAgICAgICAgICAgIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgaG9yaXpvbnRhbCBzcGFjZSB0byBwdXQgYmV0d2VlbiB0aGUgemVybyBkZWdyZWUgbWVtYmVycyBkdXJpbmcgdGhlIHRpbGluZyBvcGVyYXRpb24oY2FuIGFsc28gYmUgYSBmdW5jdGlvbilcbiAgICAgICAgICAgICAgdGlsaW5nUGFkZGluZ0hvcml6b250YWw6IDEwLFxuICAgICAgICAgICAgICAvLyBHcmF2aXR5IHJhbmdlIChjb25zdGFudCkgZm9yIGNvbXBvdW5kc1xuICAgICAgICAgICAgICBncmF2aXR5UmFuZ2VDb21wb3VuZDogMS41LFxuICAgICAgICAgICAgICAvLyBHcmF2aXR5IGZvcmNlIChjb25zdGFudCkgZm9yIGNvbXBvdW5kc1xuICAgICAgICAgICAgICBncmF2aXR5Q29tcG91bmQ6IDEsXG4gICAgICAgICAgICAgIC8vIEdyYXZpdHkgcmFuZ2UgKGNvbnN0YW50KVxuICAgICAgICAgICAgICBncmF2aXR5UmFuZ2U6IDMuOCxcbiAgICAgICAgICAgICAgLy8gSW5pdGlhbCBjb29saW5nIGZhY3RvciBmb3IgaW5jcmVtZW50YWwgbGF5b3V0XG4gICAgICAgICAgICAgIGluaXRpYWxFbmVyZ3lPbkluY3JlbWVudGFsOiAwLjVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmdW5jdGlvbiBoKEQsIHUpIHtcbiAgICAgICAgICAgICAgdmFyIFQgPSB7fTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgeSBpbiBEKVxuICAgICAgICAgICAgICAgIFRbeV0gPSBEW3ldO1xuICAgICAgICAgICAgICBmb3IgKHZhciB5IGluIHUpXG4gICAgICAgICAgICAgICAgVFt5XSA9IHVbeV07XG4gICAgICAgICAgICAgIHJldHVybiBUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYShEKSB7XG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGgociwgRCksIHAodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwID0gZnVuY3Rpb24odSkge1xuICAgICAgICAgICAgICB1Lm5vZGVSZXB1bHNpb24gIT0gbnVsbCAmJiAoaS5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSCA9IHQuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSB1Lm5vZGVSZXB1bHNpb24pLCB1LmlkZWFsRWRnZUxlbmd0aCAhPSBudWxsICYmIChpLkRFRkFVTFRfRURHRV9MRU5HVEggPSB0LkRFRkFVTFRfRURHRV9MRU5HVEggPSB1LmlkZWFsRWRnZUxlbmd0aCksIHUuZWRnZUVsYXN0aWNpdHkgIT0gbnVsbCAmJiAoaS5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCA9IHQuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEggPSB1LmVkZ2VFbGFzdGljaXR5KSwgdS5uZXN0aW5nRmFjdG9yICE9IG51bGwgJiYgKGkuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IHQuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IHUubmVzdGluZ0ZhY3RvciksIHUuZ3Jhdml0eSAhPSBudWxsICYmIChpLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IHQuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gdS5ncmF2aXR5KSwgdS5udW1JdGVyICE9IG51bGwgJiYgKGkuTUFYX0lURVJBVElPTlMgPSB0Lk1BWF9JVEVSQVRJT05TID0gdS5udW1JdGVyKSwgdS5ncmF2aXR5UmFuZ2UgIT0gbnVsbCAmJiAoaS5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gdC5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gdS5ncmF2aXR5UmFuZ2UpLCB1LmdyYXZpdHlDb21wb3VuZCAhPSBudWxsICYmIChpLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCA9IHQuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gdS5ncmF2aXR5Q29tcG91bmQpLCB1LmdyYXZpdHlSYW5nZUNvbXBvdW5kICE9IG51bGwgJiYgKGkuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IHQuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IHUuZ3Jhdml0eVJhbmdlQ29tcG91bmQpLCB1LmluaXRpYWxFbmVyZ3lPbkluY3JlbWVudGFsICE9IG51bGwgJiYgKGkuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IHQuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IHUuaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwpLCB1LnF1YWxpdHkgPT0gXCJkcmFmdFwiID8gZS5RVUFMSVRZID0gMCA6IHUucXVhbGl0eSA9PSBcInByb29mXCIgPyBlLlFVQUxJVFkgPSAyIDogZS5RVUFMSVRZID0gMSwgaS5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSB0Lk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IGUuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gdS5ub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHMsIGkuREVGQVVMVF9JTkNSRU1FTlRBTCA9IHQuREVGQVVMVF9JTkNSRU1FTlRBTCA9IGUuREVGQVVMVF9JTkNSRU1FTlRBTCA9ICF1LnJhbmRvbWl6ZSwgaS5BTklNQVRFID0gdC5BTklNQVRFID0gZS5BTklNQVRFID0gdS5hbmltYXRlLCBpLlRJTEUgPSB1LnRpbGUsIGkuVElMSU5HX1BBRERJTkdfVkVSVElDQUwgPSB0eXBlb2YgdS50aWxpbmdQYWRkaW5nVmVydGljYWwgPT0gXCJmdW5jdGlvblwiID8gdS50aWxpbmdQYWRkaW5nVmVydGljYWwuY2FsbCgpIDogdS50aWxpbmdQYWRkaW5nVmVydGljYWwsIGkuVElMSU5HX1BBRERJTkdfSE9SSVpPTlRBTCA9IHR5cGVvZiB1LnRpbGluZ1BhZGRpbmdIb3Jpem9udGFsID09IFwiZnVuY3Rpb25cIiA/IHUudGlsaW5nUGFkZGluZ0hvcml6b250YWwuY2FsbCgpIDogdS50aWxpbmdQYWRkaW5nSG9yaXpvbnRhbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIEQsIHUsIFQgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgICAgICAgIHRoaXMuaWRUb0xOb2RlID0ge307XG4gICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5sYXlvdXQgPSBuZXcgbCgpLCBPID0gdGhpcztcbiAgICAgICAgICAgICAgTy5zdG9wcGVkID0gITEsIHRoaXMuY3kgPSB0aGlzLm9wdGlvbnMuY3ksIHRoaXMuY3kudHJpZ2dlcih7IHR5cGU6IFwibGF5b3V0c3RhcnRcIiwgbGF5b3V0OiB0aGlzIH0pO1xuICAgICAgICAgICAgICB2YXIgcyA9IHkubmV3R3JhcGhNYW5hZ2VyKCk7XG4gICAgICAgICAgICAgIHRoaXMuZ20gPSBzO1xuICAgICAgICAgICAgICB2YXIgZiA9IHRoaXMub3B0aW9ucy5lbGVzLm5vZGVzKCksIGMgPSB0aGlzLm9wdGlvbnMuZWxlcy5lZGdlcygpO1xuICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBzLmFkZFJvb3QoKSwgdGhpcy5wcm9jZXNzQ2hpbGRyZW5MaXN0KHRoaXMucm9vdCwgdGhpcy5nZXRUb3BNb3N0Tm9kZXMoZiksIHkpO1xuICAgICAgICAgICAgICBmb3IgKHZhciBFID0gMDsgRSA8IGMubGVuZ3RoOyBFKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgQSA9IGNbRV0sIG0gPSB0aGlzLmlkVG9MTm9kZVtBLmRhdGEoXCJzb3VyY2VcIildLCBDID0gdGhpcy5pZFRvTE5vZGVbQS5kYXRhKFwidGFyZ2V0XCIpXTtcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gQyAmJiBtLmdldEVkZ2VzQmV0d2VlbihDKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgdmFyIFIgPSBzLmFkZCh5Lm5ld0VkZ2UoKSwgbSwgQyk7XG4gICAgICAgICAgICAgICAgICBSLmlkID0gQS5pZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgTSA9IGZ1bmN0aW9uKHcsIHgpIHtcbiAgICAgICAgICAgICAgICB0eXBlb2YgdyA9PSBcIm51bWJlclwiICYmICh3ID0geCk7XG4gICAgICAgICAgICAgICAgdmFyIEYgPSB3LmRhdGEoXCJpZFwiKSwgVSA9IE8uaWRUb0xOb2RlW0ZdO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICB4OiBVLmdldFJlY3QoKS5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICAgICAgICB5OiBVLmdldFJlY3QoKS5nZXRDZW50ZXJZKClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9LCBTID0gZnVuY3Rpb24gWSgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBULmZpdCAmJiBULmN5LmZpdChULmVsZXMsIFQucGFkZGluZyksIEQgfHwgKEQgPSAhMCwgTy5jeS5vbmUoXCJsYXlvdXRyZWFkeVwiLCBULnJlYWR5KSwgTy5jeS50cmlnZ2VyKHsgdHlwZTogXCJsYXlvdXRyZWFkeVwiLCBsYXlvdXQ6IE8gfSkpO1xuICAgICAgICAgICAgICAgIH0sIHggPSBPLm9wdGlvbnMucmVmcmVzaCwgRiwgVSA9IDA7IFUgPCB4ICYmICFGOyBVKyspXG4gICAgICAgICAgICAgICAgICBGID0gTy5zdG9wcGVkIHx8IE8ubGF5b3V0LnRpY2soKTtcbiAgICAgICAgICAgICAgICBpZiAoRikge1xuICAgICAgICAgICAgICAgICAgeS5jaGVja0xheW91dFN1Y2Nlc3MoKSAmJiAheS5pc1N1YkxheW91dCAmJiB5LmRvUG9zdExheW91dCgpLCB5LnRpbGluZ1Bvc3RMYXlvdXQgJiYgeS50aWxpbmdQb3N0TGF5b3V0KCksIHkuaXNMYXlvdXRGaW5pc2hlZCA9ICEwLCBPLm9wdGlvbnMuZWxlcy5ub2RlcygpLnBvc2l0aW9ucyhNKSwgdygpLCBPLmN5Lm9uZShcImxheW91dHN0b3BcIiwgTy5vcHRpb25zLnN0b3ApLCBPLmN5LnRyaWdnZXIoeyB0eXBlOiBcImxheW91dHN0b3BcIiwgbGF5b3V0OiBPIH0pLCB1ICYmIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUpLCBEID0gITE7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBQID0gTy5sYXlvdXQuZ2V0UG9zaXRpb25zRGF0YSgpO1xuICAgICAgICAgICAgICAgIFQuZWxlcy5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbihfLCBYKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF8gPT0gXCJudW1iZXJcIiAmJiAoXyA9IFgpLCAhXy5pc1BhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEggPSBfLmlkKCksIFcgPSBQW0hdLCBCID0gXzsgVyA9PSBudWxsICYmIChXID0gUFtCLmRhdGEoXCJwYXJlbnRcIildIHx8IFBbXCJEdW1teUNvbXBvdW5kX1wiICsgQi5kYXRhKFwicGFyZW50XCIpXSwgUFtIXSA9IFcsIEIgPSBCLnBhcmVudCgpWzBdLCBCICE9IG51bGwpOyApXG4gICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVyAhPSBudWxsID8ge1xuICAgICAgICAgICAgICAgICAgICAgIHg6IFcueCxcbiAgICAgICAgICAgICAgICAgICAgICB5OiBXLnlcbiAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICB4OiBfLnBvc2l0aW9uKFwieFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICB5OiBfLnBvc2l0aW9uKFwieVwiKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLCB3KCksIHUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoWSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybiB5LmFkZExpc3RlbmVyKFwibGF5b3V0c3RhcnRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBPLm9wdGlvbnMuYW5pbWF0ZSA9PT0gXCJkdXJpbmdcIiAmJiAodSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShTKSk7XG4gICAgICAgICAgICAgIH0pLCB5LnJ1bkxheW91dCgpLCB0aGlzLm9wdGlvbnMuYW5pbWF0ZSAhPT0gXCJkdXJpbmdcIiAmJiAoTy5vcHRpb25zLmVsZXMubm9kZXMoKS5ub3QoXCI6cGFyZW50XCIpLmxheW91dFBvc2l0aW9ucyhPLCBPLm9wdGlvbnMsIE0pLCBEID0gITEpLCB0aGlzO1xuICAgICAgICAgICAgfSwgYS5wcm90b3R5cGUuZ2V0VG9wTW9zdE5vZGVzID0gZnVuY3Rpb24oRCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciB1ID0ge30sIFQgPSAwOyBUIDwgRC5sZW5ndGg7IFQrKylcbiAgICAgICAgICAgICAgICB1W0RbVF0uaWQoKV0gPSAhMDtcbiAgICAgICAgICAgICAgdmFyIHkgPSBELmZpbHRlcihmdW5jdGlvbihPLCBzKSB7XG4gICAgICAgICAgICAgICAgdHlwZW9mIE8gPT0gXCJudW1iZXJcIiAmJiAoTyA9IHMpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGYgPSBPLnBhcmVudCgpWzBdOyBmICE9IG51bGw7ICkge1xuICAgICAgICAgICAgICAgICAgaWYgKHVbZi5pZCgpXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgZiA9IGYucGFyZW50KClbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB5O1xuICAgICAgICAgICAgfSwgYS5wcm90b3R5cGUucHJvY2Vzc0NoaWxkcmVuTGlzdCA9IGZ1bmN0aW9uKEQsIHUsIFQpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IHUubGVuZ3RoLCBPID0gMDsgTyA8IHk7IE8rKykge1xuICAgICAgICAgICAgICAgIHZhciBzID0gdVtPXSwgZiA9IHMuY2hpbGRyZW4oKSwgYywgRSA9IHMubGF5b3V0RGltZW5zaW9ucyh7XG4gICAgICAgICAgICAgICAgICBub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHM6IHRoaXMub3B0aW9ucy5ub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocy5vdXRlcldpZHRoKCkgIT0gbnVsbCAmJiBzLm91dGVySGVpZ2h0KCkgIT0gbnVsbCA/IGMgPSBELmFkZChuZXcgZyhULmdyYXBoTWFuYWdlciwgbmV3IG4ocy5wb3NpdGlvbihcInhcIikgLSBFLncgLyAyLCBzLnBvc2l0aW9uKFwieVwiKSAtIEUuaCAvIDIpLCBuZXcgZChwYXJzZUZsb2F0KEUudyksIHBhcnNlRmxvYXQoRS5oKSkpKSA6IGMgPSBELmFkZChuZXcgZyh0aGlzLmdyYXBoTWFuYWdlcikpLCBjLmlkID0gcy5kYXRhKFwiaWRcIiksIGMucGFkZGluZ0xlZnQgPSBwYXJzZUludChzLmNzcyhcInBhZGRpbmdcIikpLCBjLnBhZGRpbmdUb3AgPSBwYXJzZUludChzLmNzcyhcInBhZGRpbmdcIikpLCBjLnBhZGRpbmdSaWdodCA9IHBhcnNlSW50KHMuY3NzKFwicGFkZGluZ1wiKSksIGMucGFkZGluZ0JvdHRvbSA9IHBhcnNlSW50KHMuY3NzKFwicGFkZGluZ1wiKSksIHRoaXMub3B0aW9ucy5ub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHMgJiYgcy5pc1BhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgQSA9IHMuYm91bmRpbmdCb3goeyBpbmNsdWRlTGFiZWxzOiAhMCwgaW5jbHVkZU5vZGVzOiAhMSB9KS53LCBtID0gcy5ib3VuZGluZ0JveCh7IGluY2x1ZGVMYWJlbHM6ICEwLCBpbmNsdWRlTm9kZXM6ICExIH0pLmgsIEMgPSBzLmNzcyhcInRleHQtaGFsaWduXCIpO1xuICAgICAgICAgICAgICAgICAgYy5sYWJlbFdpZHRoID0gQSwgYy5sYWJlbEhlaWdodCA9IG0sIGMubGFiZWxQb3MgPSBDO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZFRvTE5vZGVbcy5kYXRhKFwiaWRcIildID0gYywgaXNOYU4oYy5yZWN0LngpICYmIChjLnJlY3QueCA9IDApLCBpc05hTihjLnJlY3QueSkgJiYgKGMucmVjdC55ID0gMCksIGYgIT0gbnVsbCAmJiBmLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIHZhciBSO1xuICAgICAgICAgICAgICAgICAgUiA9IFQuZ2V0R3JhcGhNYW5hZ2VyKCkuYWRkKFQubmV3R3JhcGgoKSwgYyksIHRoaXMucHJvY2Vzc0NoaWxkcmVuTGlzdChSLCBmLCBUKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGEucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcHBlZCA9ICEwLCB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB2ID0gZnVuY3Rpb24odSkge1xuICAgICAgICAgICAgICB1KFwibGF5b3V0XCIsIFwiY29zZS1iaWxrZW50XCIsIGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHR5cGVvZiBjeXRvc2NhcGUgPCBcInVcIiAmJiB2KGN5dG9zY2FwZSksIEkuZXhwb3J0cyA9IHY7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSkoaykpLCBrLmV4cG9ydHM7XG59XG52YXIgeXQgPSB2dCgpO1xuY29uc3QgRXQgPSAvKiBAX19QVVJFX18gKi8gbHQoeXQpO1xudHQudXNlKEV0KTtcbmZ1bmN0aW9uIGV0KEcsIGIpIHtcbiAgRy5mb3JFYWNoKChOKSA9PiB7XG4gICAgY29uc3QgSSA9IHtcbiAgICAgIGlkOiBOLmlkLFxuICAgICAgbGFiZWxUZXh0OiBOLmxhYmVsLFxuICAgICAgaGVpZ2h0OiBOLmhlaWdodCxcbiAgICAgIHdpZHRoOiBOLndpZHRoLFxuICAgICAgcGFkZGluZzogTi5wYWRkaW5nID8/IDBcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKE4pLmZvckVhY2goKEwpID0+IHtcbiAgICAgIFtcImlkXCIsIFwibGFiZWxcIiwgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiLCBcInBhZGRpbmdcIiwgXCJ4XCIsIFwieVwiXS5pbmNsdWRlcyhMKSB8fCAoSVtMXSA9IE5bTF0pO1xuICAgIH0pLCBiLmFkZCh7XG4gICAgICBncm91cDogXCJub2Rlc1wiLFxuICAgICAgZGF0YTogSSxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IE4ueCA/PyAwLFxuICAgICAgICB5OiBOLnkgPz8gMFxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblYoZXQsIFwiYWRkTm9kZXNcIik7XG5mdW5jdGlvbiBydChHLCBiKSB7XG4gIEcuZm9yRWFjaCgoTikgPT4ge1xuICAgIGNvbnN0IEkgPSB7XG4gICAgICBpZDogTi5pZCxcbiAgICAgIHNvdXJjZTogTi5zdGFydCxcbiAgICAgIHRhcmdldDogTi5lbmRcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKE4pLmZvckVhY2goKEwpID0+IHtcbiAgICAgIFtcImlkXCIsIFwic3RhcnRcIiwgXCJlbmRcIl0uaW5jbHVkZXMoTCkgfHwgKElbTF0gPSBOW0xdKTtcbiAgICB9KSwgYi5hZGQoe1xuICAgICAgZ3JvdXA6IFwiZWRnZXNcIixcbiAgICAgIGRhdGE6IElcbiAgICB9KTtcbiAgfSk7XG59XG5WKHJ0LCBcImFkZEVkZ2VzXCIpO1xuZnVuY3Rpb24gaXQoRykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKGIpID0+IHtcbiAgICBjb25zdCBOID0gZ3QoXCJib2R5XCIpLmFwcGVuZChcImRpdlwiKS5hdHRyKFwiaWRcIiwgXCJjeVwiKS5hdHRyKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmVcIiksIEkgPSB0dCh7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3lcIiksXG4gICAgICAvLyBjb250YWluZXIgdG8gcmVuZGVyIGluXG4gICAgICBzdHlsZTogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwiZWRnZVwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBcImN1cnZlLXN0eWxlXCI6IFwiYmV6aWVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICBOLnJlbW92ZSgpLCBldChHLm5vZGVzLCBJKSwgcnQoRy5lZGdlcywgSSksIEkubm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG8pIHtcbiAgICAgIG8ubGF5b3V0RGltZW5zaW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZSA9IG8uZGF0YSgpO1xuICAgICAgICByZXR1cm4geyB3OiBlLndpZHRoLCBoOiBlLmhlaWdodCB9O1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBMID0ge1xuICAgICAgbmFtZTogXCJjb3NlLWJpbGtlbnRcIixcbiAgICAgIC8vIEB0cy1pZ25vcmUgVHlwZXMgZm9yIGNvc2UtYmlsa2VudCBhcmUgbm90IGNvcnJlY3Q/XG4gICAgICBxdWFsaXR5OiBcInByb29mXCIsXG4gICAgICBzdHlsZUVuYWJsZWQ6ICExLFxuICAgICAgYW5pbWF0ZTogITFcbiAgICB9O1xuICAgIEkubGF5b3V0KEwpLnJ1bigpLCBJLnJlYWR5KChvKSA9PiB7XG4gICAgICAkLmluZm8oXCJDeXRvc2NhcGUgcmVhZHlcIiwgbyksIGIoSSk7XG4gICAgfSk7XG4gIH0pO1xufVxuVihpdCwgXCJjcmVhdGVDeXRvc2NhcGVJbnN0YW5jZVwiKTtcbmZ1bmN0aW9uIG50KEcpIHtcbiAgcmV0dXJuIEcubm9kZXMoKS5tYXAoKGIpID0+IHtcbiAgICBjb25zdCBOID0gYi5kYXRhKCksIEkgPSBiLnBvc2l0aW9uKCksIEwgPSB7XG4gICAgICBpZDogTi5pZCxcbiAgICAgIHg6IEkueCxcbiAgICAgIHk6IEkueVxuICAgIH07XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKE4pLmZvckVhY2goKG8pID0+IHtcbiAgICAgIG8gIT09IFwiaWRcIiAmJiAoTFtvXSA9IE5bb10pO1xuICAgIH0pLCBMO1xuICB9KTtcbn1cblYobnQsIFwiZXh0cmFjdFBvc2l0aW9uZWROb2Rlc1wiKTtcbmZ1bmN0aW9uIG90KEcpIHtcbiAgcmV0dXJuIEcuZWRnZXMoKS5tYXAoKGIpID0+IHtcbiAgICBjb25zdCBOID0gYi5kYXRhKCksIEkgPSBiLl9wcml2YXRlLnJzY3JhdGNoLCBMID0ge1xuICAgICAgaWQ6IE4uaWQsXG4gICAgICBzb3VyY2U6IE4uc291cmNlLFxuICAgICAgdGFyZ2V0OiBOLnRhcmdldCxcbiAgICAgIHN0YXJ0WDogSS5zdGFydFgsXG4gICAgICBzdGFydFk6IEkuc3RhcnRZLFxuICAgICAgbWlkWDogSS5taWRYLFxuICAgICAgbWlkWTogSS5taWRZLFxuICAgICAgZW5kWDogSS5lbmRYLFxuICAgICAgZW5kWTogSS5lbmRZXG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoTikuZm9yRWFjaCgobykgPT4ge1xuICAgICAgW1wiaWRcIiwgXCJzb3VyY2VcIiwgXCJ0YXJnZXRcIl0uaW5jbHVkZXMobykgfHwgKExbb10gPSBOW29dKTtcbiAgICB9KSwgTDtcbiAgfSk7XG59XG5WKG90LCBcImV4dHJhY3RQb3NpdGlvbmVkRWRnZXNcIik7XG5hc3luYyBmdW5jdGlvbiBzdChHLCBiKSB7XG4gICQuZGVidWcoXCJTdGFydGluZyBjb3NlLWJpbGtlbnQgbGF5b3V0IGFsZ29yaXRobVwiKTtcbiAgdHJ5IHtcbiAgICBhdChHKTtcbiAgICBjb25zdCBOID0gYXdhaXQgaXQoRyksIEkgPSBudChOKSwgTCA9IG90KE4pO1xuICAgIHJldHVybiAkLmRlYnVnKGBMYXlvdXQgY29tcGxldGVkOiAke0kubGVuZ3RofSBub2RlcywgJHtMLmxlbmd0aH0gZWRnZXNgKSwge1xuICAgICAgbm9kZXM6IEksXG4gICAgICBlZGdlczogTFxuICAgIH07XG4gIH0gY2F0Y2ggKE4pIHtcbiAgICB0aHJvdyAkLmVycm9yKFwiRXJyb3IgaW4gY29zZS1iaWxrZW50IGxheW91dCBhbGdvcml0aG06XCIsIE4pLCBOO1xuICB9XG59XG5WKHN0LCBcImV4ZWN1dGVDb3NlQmlsa2VudExheW91dFwiKTtcbmZ1bmN0aW9uIGF0KEcpIHtcbiAgaWYgKCFHKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkxheW91dCBkYXRhIGlzIHJlcXVpcmVkXCIpO1xuICBpZiAoIUcuY29uZmlnKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvbmZpZ3VyYXRpb24gaXMgcmVxdWlyZWQgaW4gbGF5b3V0IGRhdGFcIik7XG4gIGlmICghRy5yb290Tm9kZSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSb290IG5vZGUgaXMgcmVxdWlyZWRcIik7XG4gIGlmICghRy5ub2RlcyB8fCAhQXJyYXkuaXNBcnJheShHLm5vZGVzKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBub2RlcyBmb3VuZCBpbiBsYXlvdXQgZGF0YVwiKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KEcuZWRnZXMpKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkVkZ2VzIGFycmF5IGlzIHJlcXVpcmVkIGluIGxheW91dCBkYXRhXCIpO1xuICByZXR1cm4gITA7XG59XG5WKGF0LCBcInZhbGlkYXRlTGF5b3V0RGF0YVwiKTtcbnZhciBMdCA9IC8qIEBfX1BVUkVfXyAqLyBWKGFzeW5jIChHLCBiLCB7XG4gIGluc2VydENsdXN0ZXI6IE4sXG4gIGluc2VydEVkZ2U6IEksXG4gIGluc2VydEVkZ2VMYWJlbDogTCxcbiAgaW5zZXJ0TWFya2VyczogbyxcbiAgaW5zZXJ0Tm9kZTogZSxcbiAgbG9nOiB0LFxuICBwb3NpdGlvbkVkZ2VMYWJlbDogaVxufSwgeyBhbGdvcml0aG06IGwgfSkgPT4ge1xuICBjb25zdCBnID0ge30sIG4gPSB7fSwgZCA9IGIuc2VsZWN0KFwiZ1wiKTtcbiAgbyhkLCBHLm1hcmtlcnMsIEcudHlwZSwgRy5kaWFncmFtSWQpO1xuICBjb25zdCByID0gZC5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInN1YmdyYXBoc1wiKSwgaCA9IGQuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJlZGdlUGF0aHNcIiksIGEgPSBkLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZWRnZUxhYmVsc1wiKSwgcCA9IGQuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJub2Rlc1wiKTtcbiAgdC5kZWJ1ZyhcIkluc2VydGluZyBub2RlcyBpbnRvIERPTSBmb3IgZGltZW5zaW9uIGNhbGN1bGF0aW9uXCIpLCBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBHLm5vZGVzLm1hcChhc3luYyAodSkgPT4ge1xuICAgICAgaWYgKHUuaXNHcm91cCkge1xuICAgICAgICBjb25zdCBUID0geyAuLi51IH07XG4gICAgICAgIG5bdS5pZF0gPSBULCBnW3UuaWRdID0gVCwgYXdhaXQgTihyLCB1KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IFQgPSB7IC4uLnUgfTtcbiAgICAgICAgZ1t1LmlkXSA9IFQ7XG4gICAgICAgIGNvbnN0IHkgPSBhd2FpdCBlKHAsIHUsIHtcbiAgICAgICAgICBjb25maWc6IEcuY29uZmlnLFxuICAgICAgICAgIGRpcjogRy5kaXJlY3Rpb24gfHwgXCJUQlwiXG4gICAgICAgIH0pLCBPID0geS5ub2RlKCkuZ2V0QkJveCgpO1xuICAgICAgICBULndpZHRoID0gTy53aWR0aCwgVC5oZWlnaHQgPSBPLmhlaWdodCwgVC5kb21JZCA9IHksIHQuZGVidWcoYE5vZGUgJHt1LmlkfSBkaW1lbnNpb25zOiAke08ud2lkdGh9eCR7Ty5oZWlnaHR9YCk7XG4gICAgICB9XG4gICAgfSlcbiAgKSwgdC5kZWJ1ZyhcIlJ1bm5pbmcgY29zZS1iaWxrZW50IGxheW91dCBhbGdvcml0aG1cIik7XG4gIGNvbnN0IHYgPSB7XG4gICAgLi4uRyxcbiAgICBub2RlczogRy5ub2Rlcy5tYXAoKHUpID0+IHtcbiAgICAgIGNvbnN0IFQgPSBnW3UuaWRdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udSxcbiAgICAgICAgd2lkdGg6IFQud2lkdGgsXG4gICAgICAgIGhlaWdodDogVC5oZWlnaHRcbiAgICAgIH07XG4gICAgfSlcbiAgfSwgRCA9IGF3YWl0IHN0KHYsIEcuY29uZmlnKTtcbiAgdC5kZWJ1ZyhcIlBvc2l0aW9uaW5nIG5vZGVzIGJhc2VkIG9uIGxheW91dCByZXN1bHRzXCIpLCBELm5vZGVzLmZvckVhY2goKHUpID0+IHtcbiAgICBjb25zdCBUID0gZ1t1LmlkXTtcbiAgICBUPy5kb21JZCAmJiAoVC5kb21JZC5hdHRyKFxuICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgIGB0cmFuc2xhdGUoJHt1Lnh9LCAke3UueX0pYFxuICAgICksIFQueCA9IHUueCwgVC55ID0gdS55LCB0LmRlYnVnKGBQb3NpdGlvbmVkIG5vZGUgJHtULmlkfSBhdCBjZW50ZXIgKCR7dS54fSwgJHt1Lnl9KWApKTtcbiAgfSksIEQuZWRnZXMuZm9yRWFjaCgodSkgPT4ge1xuICAgIGNvbnN0IFQgPSBHLmVkZ2VzLmZpbmQoKHkpID0+IHkuaWQgPT09IHUuaWQpO1xuICAgIFQgJiYgKFQucG9pbnRzID0gW1xuICAgICAgeyB4OiB1LnN0YXJ0WCwgeTogdS5zdGFydFkgfSxcbiAgICAgIHsgeDogdS5taWRYLCB5OiB1Lm1pZFkgfSxcbiAgICAgIHsgeDogdS5lbmRYLCB5OiB1LmVuZFkgfVxuICAgIF0pO1xuICB9KSwgdC5kZWJ1ZyhcIkluc2VydGluZyBhbmQgcG9zaXRpb25pbmcgZWRnZXNcIiksIGF3YWl0IFByb21pc2UuYWxsKFxuICAgIEcuZWRnZXMubWFwKGFzeW5jICh1KSA9PiB7XG4gICAgICBhd2FpdCBMKGEsIHUpO1xuICAgICAgY29uc3QgVCA9IGdbdS5zdGFydCA/PyBcIlwiXSwgeSA9IGdbdS5lbmQgPz8gXCJcIl07XG4gICAgICBpZiAoVCAmJiB5KSB7XG4gICAgICAgIGNvbnN0IE8gPSBELmVkZ2VzLmZpbmQoKHMpID0+IHMuaWQgPT09IHUuaWQpO1xuICAgICAgICBpZiAoTykge1xuICAgICAgICAgIHQuZGVidWcoXCJBUEEwMSBwb3NpdGlvbmVkRWRnZVwiLCBPKTtcbiAgICAgICAgICBjb25zdCBzID0geyAuLi51IH0sIGYgPSBJKFxuICAgICAgICAgICAgaCxcbiAgICAgICAgICAgIHMsXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgRy50eXBlLFxuICAgICAgICAgICAgVCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICBHLmRpYWdyYW1JZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaShzLCBmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzID0ge1xuICAgICAgICAgICAgLi4udSxcbiAgICAgICAgICAgIHBvaW50czogW1xuICAgICAgICAgICAgICB7IHg6IFQueCB8fCAwLCB5OiBULnkgfHwgMCB9LFxuICAgICAgICAgICAgICB7IHg6IHkueCB8fCAwLCB5OiB5LnkgfHwgMCB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwgZiA9IEkoXG4gICAgICAgICAgICBoLFxuICAgICAgICAgICAgcyxcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBHLnR5cGUsXG4gICAgICAgICAgICBULFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIEcuZGlhZ3JhbUlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpKHMsIGYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgKSwgdC5kZWJ1ZyhcIkNvc2UtYmlsa2VudCByZW5kZXJpbmcgY29tcGxldGVkXCIpO1xufSwgXCJyZW5kZXJcIiksIEF0ID0gTHQ7XG5leHBvcnQge1xuICBBdCBhcyByZW5kZXJcbn07XG4iXSwibmFtZXMiOlsicCIsIkYiLCJodCIsImx0IiwidHQiLCJWIiwiZ3QiLCIkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQSxFQUFFLEdBQUksS0FBSyxFQUFFLFNBQVM7QUFDbkYsU0FBUyxLQUFLO0FBQ1osU0FBTyxNQUFNLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNsQyxLQUFDLFNBQVMsR0FBRyxHQUFHO0FBQ2QsUUFBRSxVQUFVLEVBQUM7QUFBQSxJQUNmLEdBQUcsSUFBSSxXQUFXO0FBQ2hCO0FBQUE7QUFBQSxTQUVHLFNBQVMsR0FBRztBQUNYLGNBQUksSUFBSSxDQUFBO0FBQ1IsbUJBQVMsRUFBRSxHQUFHO0FBQ1osZ0JBQUksRUFBRSxDQUFDO0FBQ0wscUJBQU8sRUFBRSxDQUFDLEVBQUU7QUFDZCxnQkFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJO0FBQUE7QUFBQSxjQUViLEdBQUc7QUFBQTtBQUFBLGNBRUgsR0FBRztBQUFBO0FBQUEsY0FFSCxTQUFTLENBQUE7QUFBQTtBQUFBLFlBRXZCO0FBQ1ksbUJBQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxNQUFJLEVBQUU7QUFBQSxVQUM1RDtBQUNBLGlCQUFPLEVBQUUsSUFBSSxHQUFHLEVB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
