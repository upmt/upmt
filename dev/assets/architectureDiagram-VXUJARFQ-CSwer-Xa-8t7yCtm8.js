import { p, a3 as p2, bk as ky, F, g as Ay, e as Ly, r as Ey, s as Fy, d as $y, a as My, y as By, N as cl, P as Dt, R as Nh, f as ft, bs as Xe$1, bw as tn, t as te, h as ht, w as _L, bx as vv, by as kv, c as c0 } from "./SynchronicGraphPage-wl_V0g4E.js";
import { t } from "./chunk-4BX2VUAB-XzHDrrtP-D7ilohK9.js";
import { G as Gk } from "./treemap-KMMF4GRG-Cs6X1cMg-DVA75mz2.js";
import { e as ea } from "./cytoscape.esm-Cvf3sx9F-fzSRjbzr.js";
import "./QPage-D7v6KNKk.js";
import "./index-iDicJdS9.js";
import "./QBtnToggle-DEhSmupe.js";
import "./QBtnGroup-B0lVKlQv.js";
import "./QToolbar-CRpQoJXQ.js";
import "./export-file-lpTZqdHO.js";
import "./min-x5JjnDaq-C_RdZowk.js";
import "./_baseUniq-DbLykLaa-CGsfdskt.js";
var he = { exports: {} }, le = { exports: {} }, fe = { exports: {} }, gr = fe.exports, we;
function ur() {
  return we || (we = 1, (function(I, x) {
    (function(P, N) {
      I.exports = N();
    })(gr, function() {
      return (
        /******/
        (function(A) {
          var P = {};
          function N(u) {
            if (P[u])
              return P[u].exports;
            var h = P[u] = {
              /******/
              i: u,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return A[u].call(h.exports, h, h.exports, N), h.l = true, h.exports;
          }
          return N.m = A, N.c = P, N.i = function(u) {
            return u;
          }, N.d = function(u, h, a) {
            N.o(u, h) || Object.defineProperty(u, h, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: a
              /******/
            });
          }, N.n = function(u) {
            var h = u && u.__esModule ? (
              /******/
              (function() {
                return u.default;
              })
            ) : (
              /******/
              (function() {
                return u;
              })
            );
            return N.d(h, "a", h), h;
          }, N.o = function(u, h) {
            return Object.prototype.hasOwnProperty.call(u, h);
          }, N.p = "", N(N.s = 28);
        })([
          /* 0 */
          /***/
          (function(A, P, N) {
            function u() {
            }
            u.QUALITY = 1, u.DEFAULT_CREATE_BENDS_AS_NEEDED = false, u.DEFAULT_INCREMENTAL = false, u.DEFAULT_ANIMATION_ON_LAYOUT = true, u.DEFAULT_ANIMATION_DURING_LAYOUT = false, u.DEFAULT_ANIMATION_PERIOD = 50, u.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, u.DEFAULT_GRAPH_MARGIN = 15, u.NODE_DIMENSIONS_INCLUDE_LABELS = false, u.SIMPLE_NODE_SIZE = 40, u.SIMPLE_NODE_HALF_SIZE = u.SIMPLE_NODE_SIZE / 2, u.EMPTY_COMPOUND_NODE_SIZE = 40, u.MIN_EDGE_LENGTH = 1, u.WORLD_BOUNDARY = 1e6, u.INITIAL_WORLD_BOUNDARY = u.WORLD_BOUNDARY / 1e3, u.WORLD_CENTER_X = 1200, u.WORLD_CENTER_Y = 900, A.exports = u;
          }),
          /* 1 */
          /***/
          (function(A, P, N) {
            var u = N(2), h = N(8), a = N(9);
            function e(l, i, g) {
              u.call(this, g), this.isOverlapingSourceAndTarget = false, this.vGraphObject = g, this.bendpoints = [], this.source = l, this.target = i;
            }
            e.prototype = Object.create(u.prototype);
            for (var r in u)
              e[r] = u[r];
            e.prototype.getSource = function() {
              return this.source;
            }, e.prototype.getTarget = function() {
              return this.target;
            }, e.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, e.prototype.getLength = function() {
              return this.length;
            }, e.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, e.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, e.prototype.getLca = function() {
              return this.lca;
            }, e.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, e.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, e.prototype.getOtherEnd = function(l) {
              if (this.source === l)
                return this.target;
              if (this.target === l)
                return this.source;
              throw "Node is not incident with this edge";
            }, e.prototype.getOtherEndInGraph = function(l, i) {
              for (var g = this.getOtherEnd(l), t2 = i.getGraphManager().getRoot(); ; ) {
                if (g.getOwner() == i)
                  return g;
                if (g.getOwner() == t2)
                  break;
                g = g.getOwner().getParent();
              }
              return null;
            }, e.prototype.updateLength = function() {
              var l = new Array(4);
              this.isOverlapingSourceAndTarget = h.getIntersection(this.target.getRect(), this.source.getRect(), l), this.isOverlapingSourceAndTarget || (this.lengthX = l[0] - l[2], this.lengthY = l[1] - l[3], Math.abs(this.lengthX) < 1 && (this.lengthX = a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, e.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, A.exports = e;
          }),
          /* 2 */
          /***/
          (function(A, P, N) {
            function u(h) {
              this.vGraphObject = h;
            }
            A.exports = u;
          }),
          /* 3 */
          /***/
          (function(A, P, N) {
            var u = N(2), h = N(10), a = N(13), e = N(0), r = N(16), l = N(5);
            function i(t2, o, s, c) {
              s == null && c == null && (c = o), u.call(this, c), t2.graphManager != null && (t2 = t2.graphManager), this.estimatedSize = h.MIN_VALUE, this.inclusionTreeDepth = h.MAX_VALUE, this.vGraphObject = c, this.edges = [], this.graphManager = t2, s != null && o != null ? this.rect = new a(o.x, o.y, s.width, s.height) : this.rect = new a();
            }
            i.prototype = Object.create(u.prototype);
            for (var g in u)
              i[g] = u[g];
            i.prototype.getEdges = function() {
              return this.edges;
            }, i.prototype.getChild = function() {
              return this.child;
            }, i.prototype.getOwner = function() {
              return this.owner;
            }, i.prototype.getWidth = function() {
              return this.rect.width;
            }, i.prototype.setWidth = function(t2) {
              this.rect.width = t2;
            }, i.prototype.getHeight = function() {
              return this.rect.height;
            }, i.prototype.setHeight = function(t2) {
              this.rect.height = t2;
            }, i.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, i.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, i.prototype.getCenter = function() {
              return new l(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, i.prototype.getLocation = function() {
              return new l(this.rect.x, this.rect.y);
            }, i.prototype.getRect = function() {
              return this.rect;
            }, i.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, i.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, i.prototype.setRect = function(t2, o) {
              this.rect.x = t2.x, this.rect.y = t2.y, this.rect.width = o.width, this.rect.height = o.height;
            }, i.prototype.setCenter = function(t2, o) {
              this.rect.x = t2 - this.rect.width / 2, this.rect.y = o - this.rect.height / 2;
            }, i.prototype.setLocation = function(t2, o) {
              this.rect.x = t2, this.rect.y = o;
            }, i.prototype.moveBy = function(t2, o) {
              this.rect.x += t2, this.rect.y += o;
            }, i.prototype.getEdgeListToNode = function(t2) {
              var o = [], s = this;
              return s.edges.forEach(function(c) {
                if (c.target == t2) {
                  if (c.source != s) throw "Incorrect edge source!";
                  o.push(c);
                }
              }), o;
            }, i.prototype.getEdgesBetween = function(t2) {
              var o = [], s = this;
              return s.edges.forEach(function(c) {
                if (!(c.source == s || c.target == s)) throw "Incorrect edge source and/or target";
                (c.target == t2 || c.source == t2) && o.push(c);
              }), o;
            }, i.prototype.getNeighborsList = function() {
              var t2 = /* @__PURE__ */ new Set(), o = this;
              return o.edges.forEach(function(s) {
                if (s.source == o)
                  t2.add(s.target);
                else {
                  if (s.target != o)
                    throw "Incorrect incidency!";
                  t2.add(s.source);
                }
              }), t2;
            }, i.prototype.withChildren = function() {
              var t2 = /* @__PURE__ */ new Set(), o, s;
              if (t2.add(this), this.child != null)
                for (var c = this.child.getNodes(), f = 0; f < c.length; f++)
                  o = c[f], s = o.withChildren(), s.forEach(function(T) {
                    t2.add(T);
                  });
              return t2;
            }, i.prototype.getNoOfChildren = function() {
              var t2 = 0, o;
              if (this.child == null)
                t2 = 1;
              else
                for (var s = this.child.getNodes(), c = 0; c < s.length; c++)
                  o = s[c], t2 += o.getNoOfChildren();
              return t2 == 0 && (t2 = 1), t2;
            }, i.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == h.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, i.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, i.prototype.scatter = function() {
              var t2, o, s = -e.INITIAL_WORLD_BOUNDARY, c = e.INITIAL_WORLD_BOUNDARY;
              t2 = e.WORLD_CENTER_X + r.nextDouble() * (c - s) + s;
              var f = -e.INITIAL_WORLD_BOUNDARY, T = e.INITIAL_WORLD_BOUNDARY;
              o = e.WORLD_CENTER_Y + r.nextDouble() * (T - f) + f, this.rect.x = t2, this.rect.y = o;
            }, i.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var t2 = this.getChild();
                if (t2.updateBounds(true), this.rect.x = t2.getLeft(), this.rect.y = t2.getTop(), this.setWidth(t2.getRight() - t2.getLeft()), this.setHeight(t2.getBottom() - t2.getTop()), e.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var o = t2.getRight() - t2.getLeft(), s = t2.getBottom() - t2.getTop();
                  this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(o + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > o ? (this.rect.x -= (this.labelWidth - o) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(o + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(s + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > s ? (this.rect.y -= (this.labelHeight - s) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(s + this.labelHeight));
                }
              }
            }, i.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == h.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, i.prototype.transform = function(t2) {
              var o = this.rect.x;
              o > e.WORLD_BOUNDARY ? o = e.WORLD_BOUNDARY : o < -e.WORLD_BOUNDARY && (o = -e.WORLD_BOUNDARY);
              var s = this.rect.y;
              s > e.WORLD_BOUNDARY ? s = e.WORLD_BOUNDARY : s < -e.WORLD_BOUNDARY && (s = -e.WORLD_BOUNDARY);
              var c = new l(o, s), f = t2.inverseTransformPoint(c);
              this.setLocation(f.x, f.y);
            }, i.prototype.getLeft = function() {
              return this.rect.x;
            }, i.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, i.prototype.getTop = function() {
              return this.rect.y;
            }, i.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, i.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, A.exports = i;
          }),
          /* 4 */
          /***/
          (function(A, P, N) {
            var u = N(0);
            function h() {
            }
            for (var a in u)
              h[a] = u[a];
            h.MAX_ITERATIONS = 2500, h.DEFAULT_EDGE_LENGTH = 50, h.DEFAULT_SPRING_STRENGTH = 0.45, h.DEFAULT_REPULSION_STRENGTH = 4500, h.DEFAULT_GRAVITY_STRENGTH = 0.4, h.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, h.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, h.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, h.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, h.COOLING_ADAPTATION_FACTOR = 0.33, h.ADAPTATION_LOWER_NODE_LIMIT = 1e3, h.ADAPTATION_UPPER_NODE_LIMIT = 5e3, h.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, h.MAX_NODE_DISPLACEMENT = h.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, h.MIN_REPULSION_DIST = h.DEFAULT_EDGE_LENGTH / 10, h.CONVERGENCE_CHECK_PERIOD = 100, h.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, h.MIN_EDGE_LENGTH = 1, h.GRID_CALCULATION_CHECK_PERIOD = 10, A.exports = h;
          }),
          /* 5 */
          /***/
          (function(A, P, N) {
            function u(h, a) {
              h == null && a == null ? (this.x = 0, this.y = 0) : (this.x = h, this.y = a);
            }
            u.prototype.getX = function() {
              return this.x;
            }, u.prototype.getY = function() {
              return this.y;
            }, u.prototype.setX = function(h) {
              this.x = h;
            }, u.prototype.setY = function(h) {
              this.y = h;
            }, u.prototype.getDifference = function(h) {
              return new DimensionD(this.x - h.x, this.y - h.y);
            }, u.prototype.getCopy = function() {
              return new u(this.x, this.y);
            }, u.prototype.translate = function(h) {
              return this.x += h.width, this.y += h.height, this;
            }, A.exports = u;
          }),
          /* 6 */
          /***/
          (function(A, P, N) {
            var u = N(2), h = N(10), a = N(0), e = N(7), r = N(3), l = N(1), i = N(13), g = N(12), t2 = N(11);
            function o(c, f, T) {
              u.call(this, T), this.estimatedSize = h.MIN_VALUE, this.margin = a.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = c, f != null && f instanceof e ? this.graphManager = f : f != null && f instanceof Layout && (this.graphManager = f.graphManager);
            }
            o.prototype = Object.create(u.prototype);
            for (var s in u)
              o[s] = u[s];
            o.prototype.getNodes = function() {
              return this.nodes;
            }, o.prototype.getEdges = function() {
              return this.edges;
            }, o.prototype.getGraphManager = function() {
              return this.graphManager;
            }, o.prototype.getParent = function() {
              return this.parent;
            }, o.prototype.getLeft = function() {
              return this.left;
            }, o.prototype.getRight = function() {
              return this.right;
            }, o.prototype.getTop = function() {
              return this.top;
            }, o.prototype.getBottom = function() {
              return this.bottom;
            }, o.prototype.isConnected = function() {
              return this.isConnected;
            }, o.prototype.add = function(c, f, T) {
              if (f == null && T == null) {
                var d = c;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(d) > -1)
                  throw "Node already in graph!";
                return d.owner = this, this.getNodes().push(d), d;
              } else {
                var v = c;
                if (!(this.getNodes().indexOf(f) > -1 && this.getNodes().indexOf(T) > -1))
                  throw "Source or target not in graph!";
                if (!(f.owner == T.owner && f.owner == this))
                  throw "Both owners must be this graph!";
                return f.owner != T.owner ? null : (v.source = f, v.target = T, v.isInterGraph = false, this.getEdges().push(v), f.edges.push(v), T != f && T.edges.push(v), v);
              }
            }, o.prototype.remove = function(c) {
              var f = c;
              if (c instanceof r) {
                if (f == null)
                  throw "Node is null!";
                if (!(f.owner != null && f.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var T = f.edges.slice(), d, v = T.length, L = 0; L < v; L++)
                  d = T[L], d.isInterGraph ? this.graphManager.remove(d) : d.source.owner.remove(d);
                var b = this.nodes.indexOf(f);
                if (b == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(b, 1);
              } else if (c instanceof l) {
                var d = c;
                if (d == null)
                  throw "Edge is null!";
                if (!(d.source != null && d.target != null))
                  throw "Source and/or target is null!";
                if (!(d.source.owner != null && d.target.owner != null && d.source.owner == this && d.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var C = d.source.edges.indexOf(d), G = d.target.edges.indexOf(d);
                if (!(C > -1 && G > -1))
                  throw "Source and/or target doesn't know this edge!";
                d.source.edges.splice(C, 1), d.target != d.source && d.target.edges.splice(G, 1);
                var b = d.source.owner.getEdges().indexOf(d);
                if (b == -1)
                  throw "Not in owner's edge list!";
                d.source.owner.getEdges().splice(b, 1);
              }
            }, o.prototype.updateLeftTop = function() {
              for (var c = h.MAX_VALUE, f = h.MAX_VALUE, T, d, v, L = this.getNodes(), b = L.length, C = 0; C < b; C++) {
                var G = L[C];
                T = G.getTop(), d = G.getLeft(), c > T && (c = T), f > d && (f = d);
              }
              return c == h.MAX_VALUE ? null : (L[0].getParent().paddingLeft != null ? v = L[0].getParent().paddingLeft : v = this.margin, this.left = f - v, this.top = c - v, new g(this.left, this.top));
            }, o.prototype.updateBounds = function(c) {
              for (var f = h.MAX_VALUE, T = -h.MAX_VALUE, d = h.MAX_VALUE, v = -h.MAX_VALUE, L, b, C, G, Z, Y = this.nodes, K = Y.length, O = 0; O < K; O++) {
                var it = Y[O];
                c && it.child != null && it.updateBounds(), L = it.getLeft(), b = it.getRight(), C = it.getTop(), G = it.getBottom(), f > L && (f = L), T < b && (T = b), d > C && (d = C), v < G && (v = G);
              }
              var n = new i(f, d, T - f, v - d);
              f == h.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), Y[0].getParent().paddingLeft != null ? Z = Y[0].getParent().paddingLeft : Z = this.margin, this.left = n.x - Z, this.right = n.x + n.width + Z, this.top = n.y - Z, this.bottom = n.y + n.height + Z;
            }, o.calculateBounds = function(c) {
              for (var f = h.MAX_VALUE, T = -h.MAX_VALUE, d = h.MAX_VALUE, v = -h.MAX_VALUE, L, b, C, G, Z = c.length, Y = 0; Y < Z; Y++) {
                var K = c[Y];
                L = K.getLeft(), b = K.getRight(), C = K.getTop(), G = K.getBottom(), f > L && (f = L), T < b && (T = b), d > C && (d = C), v < G && (v = G);
              }
              var O = new i(f, d, T - f, v - d);
              return O;
            }, o.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, o.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == h.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, o.prototype.calcEstimatedSize = function() {
              for (var c = 0, f = this.nodes, T = f.length, d = 0; d < T; d++) {
                var v = f[d];
                c += v.calcEstimatedSize();
              }
              return c == 0 ? this.estimatedSize = a.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = c / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, o.prototype.updateConnected = function() {
              var c = this;
              if (this.nodes.length == 0) {
                this.isConnected = true;
                return;
              }
              var f = new t2(), T = /* @__PURE__ */ new Set(), d = this.nodes[0], v, L, b = d.withChildren();
              for (b.forEach(function(O) {
                f.push(O), T.add(O);
              }); f.length !== 0; ) {
                d = f.shift(), v = d.getEdges();
                for (var C = v.length, G = 0; G < C; G++) {
                  var Z = v[G];
                  if (L = Z.getOtherEndInGraph(d, this), L != null && !T.has(L)) {
                    var Y = L.withChildren();
                    Y.forEach(function(O) {
                      f.push(O), T.add(O);
                    });
                  }
                }
              }
              if (this.isConnected = false, T.size >= this.nodes.length) {
                var K = 0;
                T.forEach(function(O) {
                  O.owner == c && K++;
                }), K == this.nodes.length && (this.isConnected = true);
              }
            }, A.exports = o;
          }),
          /* 7 */
          /***/
          (function(A, P, N) {
            var u, h = N(1);
            function a(e) {
              u = N(6), this.layout = e, this.graphs = [], this.edges = [];
            }
            a.prototype.addRoot = function() {
              var e = this.layout.newGraph(), r = this.layout.newNode(null), l = this.add(e, r);
              return this.setRootGraph(l), this.rootGraph;
            }, a.prototype.add = function(e, r, l, i, g) {
              if (l == null && i == null && g == null) {
                if (e == null)
                  throw "Graph is null!";
                if (r == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(e) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(e), e.parent != null)
                  throw "Already has a parent!";
                if (r.child != null)
                  throw "Already has a child!";
                return e.parent = r, r.child = e, e;
              } else {
                g = l, i = r, l = e;
                var t2 = i.getOwner(), o = g.getOwner();
                if (!(t2 != null && t2.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(o != null && o.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (t2 == o)
                  return l.isInterGraph = false, t2.add(l, i, g);
                if (l.isInterGraph = true, l.source = i, l.target = g, this.edges.indexOf(l) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(l), !(l.source != null && l.target != null))
                  throw "Edge source and/or target is null!";
                if (!(l.source.edges.indexOf(l) == -1 && l.target.edges.indexOf(l) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return l.source.edges.push(l), l.target.edges.push(l), l;
              }
            }, a.prototype.remove = function(e) {
              if (e instanceof u) {
                var r = e;
                if (r.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(r == this.rootGraph || r.parent != null && r.parent.graphManager == this))
                  throw "Invalid parent node!";
                var l = [];
                l = l.concat(r.getEdges());
                for (var i, g = l.length, t2 = 0; t2 < g; t2++)
                  i = l[t2], r.remove(i);
                var o = [];
                o = o.concat(r.getNodes());
                var s;
                g = o.length;
                for (var t2 = 0; t2 < g; t2++)
                  s = o[t2], r.remove(s);
                r == this.rootGraph && this.setRootGraph(null);
                var c = this.graphs.indexOf(r);
                this.graphs.splice(c, 1), r.parent = null;
              } else if (e instanceof h) {
                if (i = e, i == null)
                  throw "Edge is null!";
                if (!i.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(i.source != null && i.target != null))
                  throw "Source and/or target is null!";
                if (!(i.source.edges.indexOf(i) != -1 && i.target.edges.indexOf(i) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var c = i.source.edges.indexOf(i);
                if (i.source.edges.splice(c, 1), c = i.target.edges.indexOf(i), i.target.edges.splice(c, 1), !(i.source.owner != null && i.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (i.source.owner.getGraphManager().edges.indexOf(i) == -1)
                  throw "Not in owner graph manager's edge list!";
                var c = i.source.owner.getGraphManager().edges.indexOf(i);
                i.source.owner.getGraphManager().edges.splice(c, 1);
              }
            }, a.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(true);
            }, a.prototype.getGraphs = function() {
              return this.graphs;
            }, a.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var e = [], r = this.getGraphs(), l = r.length, i = 0; i < l; i++)
                  e = e.concat(r[i].getNodes());
                this.allNodes = e;
              }
              return this.allNodes;
            }, a.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, a.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, a.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, a.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var e = [], r = this.getGraphs();
                r.length;
                for (var l = 0; l < r.length; l++)
                  e = e.concat(r[l].getEdges());
                e = e.concat(this.edges), this.allEdges = e;
              }
              return this.allEdges;
            }, a.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, a.prototype.setAllNodesToApplyGravitation = function(e) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = e;
            }, a.prototype.getRoot = function() {
              return this.rootGraph;
            }, a.prototype.setRootGraph = function(e) {
              if (e.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = e, e.parent == null && (e.parent = this.layout.newNode("Root node"));
            }, a.prototype.getLayout = function() {
              return this.layout;
            }, a.prototype.isOneAncestorOfOther = function(e, r) {
              if (!(e != null && r != null))
                throw "assert failed";
              if (e == r)
                return true;
              var l = e.getOwner(), i;
              do {
                if (i = l.getParent(), i == null)
                  break;
                if (i == r)
                  return true;
                if (l = i.getOwner(), l == null)
                  break;
              } while (true);
              l = r.getOwner();
              do {
                if (i = l.getParent(), i == null)
                  break;
                if (i == e)
                  return true;
                if (l = i.getOwner(), l == null)
                  break;
              } while (true);
              return false;
            }, a.prototype.calcLowestCommonAncestors = function() {
              for (var e, r, l, i, g, t2 = this.getAllEdges(), o = t2.length, s = 0; s < o; s++) {
                if (e = t2[s], r = e.source, l = e.target, e.lca = null, e.sourceInLca = r, e.targetInLca = l, r == l) {
                  e.lca = r.getOwner();
                  continue;
                }
                for (i = r.getOwner(); e.lca == null; ) {
                  for (e.targetInLca = l, g = l.getOwner(); e.lca == null; ) {
                    if (g == i) {
                      e.lca = g;
                      break;
                    }
                    if (g == this.rootGraph)
                      break;
                    if (e.lca != null)
                      throw "assert failed";
                    e.targetInLca = g.getParent(), g = e.targetInLca.getOwner();
                  }
                  if (i == this.rootGraph)
                    break;
                  e.lca == null && (e.sourceInLca = i.getParent(), i = e.sourceInLca.getOwner());
                }
                if (e.lca == null)
                  throw "assert failed";
              }
            }, a.prototype.calcLowestCommonAncestor = function(e, r) {
              if (e == r)
                return e.getOwner();
              var l = e.getOwner();
              do {
                if (l == null)
                  break;
                var i = r.getOwner();
                do {
                  if (i == null)
                    break;
                  if (i == l)
                    return i;
                  i = i.getParent().getOwner();
                } while (true);
                l = l.getParent().getOwner();
              } while (true);
              return l;
            }, a.prototype.calcInclusionTreeDepths = function(e, r) {
              e == null && r == null && (e = this.rootGraph, r = 1);
              for (var l, i = e.getNodes(), g = i.length, t2 = 0; t2 < g; t2++)
                l = i[t2], l.inclusionTreeDepth = r, l.child != null && this.calcInclusionTreeDepths(l.child, r + 1);
            }, a.prototype.includesInvalidEdge = function() {
              for (var e, r = [], l = this.edges.length, i = 0; i < l; i++)
                e = this.edges[i], this.isOneAncestorOfOther(e.source, e.target) && r.push(e);
              for (var i = 0; i < r.length; i++)
                this.remove(r[i]);
              return false;
            }, A.exports = a;
          }),
          /* 8 */
          /***/
          (function(A, P, N) {
            var u = N(12);
            function h() {
            }
            h.calcSeparationAmount = function(a, e, r, l) {
              if (!a.intersects(e))
                throw "assert failed";
              var i = new Array(2);
              this.decideDirectionsForOverlappingNodes(a, e, i), r[0] = Math.min(a.getRight(), e.getRight()) - Math.max(a.x, e.x), r[1] = Math.min(a.getBottom(), e.getBottom()) - Math.max(a.y, e.y), a.getX() <= e.getX() && a.getRight() >= e.getRight() ? r[0] += Math.min(e.getX() - a.getX(), a.getRight() - e.getRight()) : e.getX() <= a.getX() && e.getRight() >= a.getRight() && (r[0] += Math.min(a.getX() - e.getX(), e.getRight() - a.getRight())), a.getY() <= e.getY() && a.getBottom() >= e.getBottom() ? r[1] += Math.min(e.getY() - a.getY(), a.getBottom() - e.getBottom()) : e.getY() <= a.getY() && e.getBottom() >= a.getBottom() && (r[1] += Math.min(a.getY() - e.getY(), e.getBottom() - a.getBottom()));
              var g = Math.abs((e.getCenterY() - a.getCenterY()) / (e.getCenterX() - a.getCenterX()));
              e.getCenterY() === a.getCenterY() && e.getCenterX() === a.getCenterX() && (g = 1);
              var t2 = g * r[0], o = r[1] / g;
              r[0] < o ? o = r[0] : t2 = r[1], r[0] = -1 * i[0] * (o / 2 + l), r[1] = -1 * i[1] * (t2 / 2 + l);
            }, h.decideDirectionsForOverlappingNodes = function(a, e, r) {
              a.getCenterX() < e.getCenterX() ? r[0] = -1 : r[0] = 1, a.getCenterY() < e.getCenterY() ? r[1] = -1 : r[1] = 1;
            }, h.getIntersection2 = function(a, e, r) {
              var l = a.getCenterX(), i = a.getCenterY(), g = e.getCenterX(), t2 = e.getCenterY();
              if (a.intersects(e))
                return r[0] = l, r[1] = i, r[2] = g, r[3] = t2, true;
              var o = a.getX(), s = a.getY(), c = a.getRight(), f = a.getX(), T = a.getBottom(), d = a.getRight(), v = a.getWidthHalf(), L = a.getHeightHalf(), b = e.getX(), C = e.getY(), G = e.getRight(), Z = e.getX(), Y = e.getBottom(), K = e.getRight(), O = e.getWidthHalf(), it = e.getHeightHalf(), n = false, m = false;
              if (l === g) {
                if (i > t2)
                  return r[0] = l, r[1] = s, r[2] = g, r[3] = Y, false;
                if (i < t2)
                  return r[0] = l, r[1] = T, r[2] = g, r[3] = C, false;
              } else if (i === t2) {
                if (l > g)
                  return r[0] = o, r[1] = i, r[2] = G, r[3] = t2, false;
                if (l < g)
                  return r[0] = c, r[1] = i, r[2] = b, r[3] = t2, false;
              } else {
                var p3 = a.height / a.width, E = e.height / e.width, y = (t2 - i) / (g - l), R = void 0, M = void 0, S = void 0, W = void 0, D = void 0, q = void 0;
                if (-p3 === y ? l > g ? (r[0] = f, r[1] = T, n = true) : (r[0] = c, r[1] = s, n = true) : p3 === y && (l > g ? (r[0] = o, r[1] = s, n = true) : (r[0] = d, r[1] = T, n = true)), -E === y ? g > l ? (r[2] = Z, r[3] = Y, m = true) : (r[2] = G, r[3] = C, m = true) : E === y && (g > l ? (r[2] = b, r[3] = C, m = true) : (r[2] = K, r[3] = Y, m = true)), n && m)
                  return false;
                if (l > g ? i > t2 ? (R = this.getCardinalDirection(p3, y, 4), M = this.getCardinalDirection(E, y, 2)) : (R = this.getCardinalDirection(-p3, y, 3), M = this.getCardinalDirection(-E, y, 1)) : i > t2 ? (R = this.getCardinalDirection(-p3, y, 1), M = this.getCardinalDirection(-E, y, 3)) : (R = this.getCardinalDirection(p3, y, 2), M = this.getCardinalDirection(E, y, 4)), !n)
                  switch (R) {
                    case 1:
                      W = s, S = l + -L / y, r[0] = S, r[1] = W;
                      break;
                    case 2:
                      S = d, W = i + v * y, r[0] = S, r[1] = W;
                      break;
                    case 3:
                      W = T, S = l + L / y, r[0] = S, r[1] = W;
                      break;
                    case 4:
                      S = f, W = i + -v * y, r[0] = S, r[1] = W;
                      break;
                  }
                if (!m)
                  switch (M) {
                    case 1:
                      q = C, D = g + -it / y, r[2] = D, r[3] = q;
                      break;
                    case 2:
                      D = K, q = t2 + O * y, r[2] = D, r[3] = q;
                      break;
                    case 3:
                      q = Y, D = g + it / y, r[2] = D, r[3] = q;
                      break;
                    case 4:
                      D = Z, q = t2 + -O * y, r[2] = D, r[3] = q;
                      break;
                  }
              }
              return false;
            }, h.getCardinalDirection = function(a, e, r) {
              return a > e ? r : 1 + r % 4;
            }, h.getIntersection = function(a, e, r, l) {
              if (l == null)
                return this.getIntersection2(a, e, r);
              var i = a.x, g = a.y, t2 = e.x, o = e.y, s = r.x, c = r.y, f = l.x, T = l.y, d = void 0, v = void 0, L = void 0, b = void 0, C = void 0, G = void 0, Z = void 0, Y = void 0, K = void 0;
              return L = o - g, C = i - t2, Z = t2 * g - i * o, b = T - c, G = s - f, Y = f * c - s * T, K = L * G - b * C, K === 0 ? null : (d = (C * Y - G * Z) / K, v = (b * Z - L * Y) / K, new u(d, v));
            }, h.angleOfVector = function(a, e, r, l) {
              var i = void 0;
              return a !== r ? (i = Math.atan((l - e) / (r - a)), r < a ? i += Math.PI : l < e && (i += this.TWO_PI)) : l < e ? i = this.ONE_AND_HALF_PI : i = this.HALF_PI, i;
            }, h.doIntersect = function(a, e, r, l) {
              var i = a.x, g = a.y, t2 = e.x, o = e.y, s = r.x, c = r.y, f = l.x, T = l.y, d = (t2 - i) * (T - c) - (f - s) * (o - g);
              if (d === 0)
                return false;
              var v = ((T - c) * (f - i) + (s - f) * (T - g)) / d, L = ((g - o) * (f - i) + (t2 - i) * (T - g)) / d;
              return 0 < v && v < 1 && 0 < L && L < 1;
            }, h.findCircleLineIntersections = function(a, e, r, l, i, g, t2) {
              var o = (r - a) * (r - a) + (l - e) * (l - e), s = 2 * ((a - i) * (r - a) + (e - g) * (l - e)), c = (a - i) * (a - i) + (e - g) * (e - g) - t2 * t2, f = s * s - 4 * o * c;
              if (f >= 0) {
                var T = (-s + Math.sqrt(s * s - 4 * o * c)) / (2 * o), d = (-s - Math.sqrt(s * s - 4 * o * c)) / (2 * o), v = null;
                return T >= 0 && T <= 1 ? [T] : d >= 0 && d <= 1 ? [d] : v;
              } else return null;
            }, h.HALF_PI = 0.5 * Math.PI, h.ONE_AND_HALF_PI = 1.5 * Math.PI, h.TWO_PI = 2 * Math.PI, h.THREE_PI = 3 * Math.PI, A.exports = h;
          }),
          /* 9 */
          /***/
          (function(A, P, N) {
            function u() {
            }
            u.sign = function(h) {
              return h > 0 ? 1 : h < 0 ? -1 : 0;
            }, u.floor = function(h) {
              return h < 0 ? Math.ceil(h) : Math.floor(h);
            }, u.ceil = function(h) {
              return h < 0 ? Math.floor(h) : Math.ceil(h);
            }, A.exports = u;
          }),
          /* 10 */
          /***/
          (function(A, P, N) {
            function u() {
            }
            u.MAX_VALUE = 2147483647, u.MIN_VALUE = -2147483648, A.exports = u;
          }),
          /* 11 */
          /***/
          (function(A, P, N) {
            var u = /* @__PURE__ */ (function() {
              function i(g, t2) {
                for (var o = 0; o < t2.length; o++) {
                  var s = t2[o];
                  s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(g, s.key, s);
                }
              }
              return function(g, t2, o) {
                return t2 && i(g.prototype, t2), o && i(g, o), g;
              };
            })();
            function h(i, g) {
              if (!(i instanceof g))
                throw new TypeError("Cannot call a class as a function");
            }
            var a = function(g) {
              return { value: g, next: null, prev: null };
            }, e = function(g, t2, o, s) {
              return g !== null ? g.next = t2 : s.head = t2, o !== null ? o.prev = t2 : s.tail = t2, t2.prev = g, t2.next = o, s.length++, t2;
            }, r = function(g, t2) {
              var o = g.prev, s = g.next;
              return o !== null ? o.next = s : t2.head = s, s !== null ? s.prev = o : t2.tail = o, g.prev = g.next = null, t2.length--, g;
            }, l = (function() {
              function i(g) {
                var t2 = this;
                h(this, i), this.length = 0, this.head = null, this.tail = null, g?.forEach(function(o) {
                  return t2.push(o);
                });
              }
              return u(i, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(t2, o) {
                  return e(o.prev, a(t2), o, this);
                }
              }, {
                key: "insertAfter",
                value: function(t2, o) {
                  return e(o, a(t2), o.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(t2, o) {
                  return e(o.prev, t2, o, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(t2, o) {
                  return e(o, t2, o.next, this);
                }
              }, {
                key: "push",
                value: function(t2) {
                  return e(this.tail, a(t2), null, this);
                }
              }, {
                key: "unshift",
                value: function(t2) {
                  return e(null, a(t2), this.head, this);
                }
              }, {
                key: "remove",
                value: function(t2) {
                  return r(t2, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return r(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return r(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return r(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return r(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(t2) {
                  if (t2 <= this.length()) {
                    for (var o = 1, s = this.head; o < t2; )
                      s = s.next, o++;
                    return s.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(t2, o) {
                  if (t2 <= this.length()) {
                    for (var s = 1, c = this.head; s < t2; )
                      c = c.next, s++;
                    c.value = o;
                  }
                }
              }]), i;
            })();
            A.exports = l;
          }),
          /* 12 */
          /***/
          (function(A, P, N) {
            function u(h, a, e) {
              this.x = null, this.y = null, h == null && a == null && e == null ? (this.x = 0, this.y = 0) : typeof h == "number" && typeof a == "number" && e == null ? (this.x = h, this.y = a) : h.constructor.name == "Point" && a == null && e == null && (e = h, this.x = e.x, this.y = e.y);
            }
            u.prototype.getX = function() {
              return this.x;
            }, u.prototype.getY = function() {
              return this.y;
            }, u.prototype.getLocation = function() {
              return new u(this.x, this.y);
            }, u.prototype.setLocation = function(h, a, e) {
              h.constructor.name == "Point" && a == null && e == null ? (e = h, this.setLocation(e.x, e.y)) : typeof h == "number" && typeof a == "number" && e == null && (parseInt(h) == h && parseInt(a) == a ? this.move(h, a) : (this.x = Math.floor(h + 0.5), this.y = Math.floor(a + 0.5)));
            }, u.prototype.move = function(h, a) {
              this.x = h, this.y = a;
            }, u.prototype.translate = function(h, a) {
              this.x += h, this.y += a;
            }, u.prototype.equals = function(h) {
              if (h.constructor.name == "Point") {
                var a = h;
                return this.x == a.x && this.y == a.y;
              }
              return this == h;
            }, u.prototype.toString = function() {
              return new u().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, A.exports = u;
          }),
          /* 13 */
          /***/
          (function(A, P, N) {
            function u(h, a, e, r) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, h != null && a != null && e != null && r != null && (this.x = h, this.y = a, this.width = e, this.height = r);
            }
            u.prototype.getX = function() {
              return this.x;
            }, u.prototype.setX = function(h) {
              this.x = h;
            }, u.prototype.getY = function() {
              return this.y;
            }, u.prototype.setY = function(h) {
              this.y = h;
            }, u.prototype.getWidth = function() {
              return this.width;
            }, u.prototype.setWidth = function(h) {
              this.width = h;
            }, u.prototype.getHeight = function() {
              return this.height;
            }, u.prototype.setHeight = function(h) {
              this.height = h;
            }, u.prototype.getRight = function() {
              return this.x + this.width;
            }, u.prototype.getBottom = function() {
              return this.y + this.height;
            }, u.prototype.intersects = function(h) {
              return !(this.getRight() < h.x || this.getBottom() < h.y || h.getRight() < this.x || h.getBottom() < this.y);
            }, u.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, u.prototype.getMinX = function() {
              return this.getX();
            }, u.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, u.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, u.prototype.getMinY = function() {
              return this.getY();
            }, u.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, u.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, u.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, A.exports = u;
          }),
          /* 14 */
          /***/
          (function(A, P, N) {
            var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
              return typeof a;
            } : function(a) {
              return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
            };
            function h() {
            }
            h.lastID = 0, h.createID = function(a) {
              return h.isPrimitive(a) ? a : (a.uniqueID != null || (a.uniqueID = h.getString(), h.lastID++), a.uniqueID);
            }, h.getString = function(a) {
              return a == null && (a = h.lastID), "Object#" + a;
            }, h.isPrimitive = function(a) {
              var e = typeof a > "u" ? "undefined" : u(a);
              return a == null || e != "object" && e != "function";
            }, A.exports = h;
          }),
          /* 15 */
          /***/
          (function(A, P, N) {
            function u(s) {
              if (Array.isArray(s)) {
                for (var c = 0, f = Array(s.length); c < s.length; c++)
                  f[c] = s[c];
                return f;
              } else
                return Array.from(s);
            }
            var h = N(0), a = N(7), e = N(3), r = N(1), l = N(6), i = N(5), g = N(17), t2 = N(29);
            function o(s) {
              t2.call(this), this.layoutQuality = h.QUALITY, this.createBendsAsNeeded = h.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = h.DEFAULT_INCREMENTAL, this.animationOnLayout = h.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = h.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = h.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = h.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new a(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, s != null && (this.isRemoteUse = s);
            }
            o.RANDOM_SEED = 1, o.prototype = Object.create(t2.prototype), o.prototype.getGraphManager = function() {
              return this.graphManager;
            }, o.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, o.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, o.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, o.prototype.newGraphManager = function() {
              var s = new a(this);
              return this.graphManager = s, s;
            }, o.prototype.newGraph = function(s) {
              return new l(null, this.graphManager, s);
            }, o.prototype.newNode = function(s) {
              return new e(this.graphManager, s);
            }, o.prototype.newEdge = function(s) {
              return new r(null, null, s);
            }, o.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, o.prototype.runLayout = function() {
              this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var s;
              return this.checkLayoutSuccess() ? s = false : s = this.layout(), h.ANIMATE === "during" ? false : (s && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, s);
            }, o.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, o.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var s = this.graphManager.getAllEdges(), c = 0; c < s.length; c++)
                  s[c];
                for (var f = this.graphManager.getRoot().getNodes(), c = 0; c < f.length; c++)
                  f[c];
                this.update(this.graphManager.getRoot());
              }
            }, o.prototype.update = function(s) {
              if (s == null)
                this.update2();
              else if (s instanceof e) {
                var c = s;
                if (c.getChild() != null)
                  for (var f = c.getChild().getNodes(), T = 0; T < f.length; T++)
                    update(f[T]);
                if (c.vGraphObject != null) {
                  var d = c.vGraphObject;
                  d.update(c);
                }
              } else if (s instanceof r) {
                var v = s;
                if (v.vGraphObject != null) {
                  var L = v.vGraphObject;
                  L.update(v);
                }
              } else if (s instanceof l) {
                var b = s;
                if (b.vGraphObject != null) {
                  var C = b.vGraphObject;
                  C.update(b);
                }
              }
            }, o.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = h.QUALITY, this.animationDuringLayout = h.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = h.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = h.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = h.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = h.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = h.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
            }, o.prototype.transform = function(s) {
              if (s == null)
                this.transform(new i(0, 0));
              else {
                var c = new g(), f = this.graphManager.getRoot().updateLeftTop();
                if (f != null) {
                  c.setWorldOrgX(s.x), c.setWorldOrgY(s.y), c.setDeviceOrgX(f.x), c.setDeviceOrgY(f.y);
                  for (var T = this.getAllNodes(), d, v = 0; v < T.length; v++)
                    d = T[v], d.transform(c);
                }
              }
            }, o.prototype.positionNodesRandomly = function(s) {
              if (s == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
              else
                for (var c, f, T = s.getNodes(), d = 0; d < T.length; d++)
                  c = T[d], f = c.getChild(), f == null || f.getNodes().length == 0 ? c.scatter() : (this.positionNodesRandomly(f), c.updateBounds());
            }, o.prototype.getFlatForest = function() {
              for (var s = [], c = true, f = this.graphManager.getRoot().getNodes(), T = true, d = 0; d < f.length; d++)
                f[d].getChild() != null && (T = false);
              if (!T)
                return s;
              var v = /* @__PURE__ */ new Set(), L = [], b = /* @__PURE__ */ new Map(), C = [];
              for (C = C.concat(f); C.length > 0 && c; ) {
                for (L.push(C[0]); L.length > 0 && c; ) {
                  var G = L[0];
                  L.splice(0, 1), v.add(G);
                  for (var Z = G.getEdges(), d = 0; d < Z.length; d++) {
                    var Y = Z[d].getOtherEnd(G);
                    if (b.get(G) != Y)
                      if (!v.has(Y))
                        L.push(Y), b.set(Y, G);
                      else {
                        c = false;
                        break;
                      }
                  }
                }
                if (!c)
                  s = [];
                else {
                  var K = [].concat(u(v));
                  s.push(K);
                  for (var d = 0; d < K.length; d++) {
                    var O = K[d], it = C.indexOf(O);
                    it > -1 && C.splice(it, 1);
                  }
                  v = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map();
                }
              }
              return s;
            }, o.prototype.createDummyNodesForBendpoints = function(s) {
              for (var c = [], f = s.source, T = this.graphManager.calcLowestCommonAncestor(s.source, s.target), d = 0; d < s.bendpoints.length; d++) {
                var v = this.newNode(null);
                v.setRect(new Point(0, 0), new Dimension(1, 1)), T.add(v);
                var L = this.newEdge(null);
                this.graphManager.add(L, f, v), c.add(v), f = v;
              }
              var L = this.newEdge(null);
              return this.graphManager.add(L, f, s.target), this.edgeToDummyNodes.set(s, c), s.isInterGraph() ? this.graphManager.remove(s) : T.remove(s), c;
            }, o.prototype.createBendpointsFromDummyNodes = function() {
              var s = [];
              s = s.concat(this.graphManager.getAllEdges()), s = [].concat(u(this.edgeToDummyNodes.keys())).concat(s);
              for (var c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.bendpoints.length > 0) {
                  for (var T = this.edgeToDummyNodes.get(f), d = 0; d < T.length; d++) {
                    var v = T[d], L = new i(v.getCenterX(), v.getCenterY()), b = f.bendpoints.get(d);
                    b.x = L.x, b.y = L.y, v.getOwner().remove(v);
                  }
                  this.graphManager.add(f, f.source, f.target);
                }
              }
            }, o.transform = function(s, c, f, T) {
              if (f != null && T != null) {
                var d = c;
                if (s <= 50) {
                  var v = c / f;
                  d -= (c - v) / 50 * (50 - s);
                } else {
                  var L = c * T;
                  d += (L - c) / 50 * (s - 50);
                }
                return d;
              } else {
                var b, C;
                return s <= 50 ? (b = 9 * c / 500, C = c / 10) : (b = 9 * c / 50, C = -8 * c), b * s + C;
              }
            }, o.findCenterOfTree = function(s) {
              var c = [];
              c = c.concat(s);
              var f = [], T = /* @__PURE__ */ new Map(), d = false, v = null;
              (c.length == 1 || c.length == 2) && (d = true, v = c[0]);
              for (var L = 0; L < c.length; L++) {
                var b = c[L], C = b.getNeighborsList().size;
                T.set(b, b.getNeighborsList().size), C == 1 && f.push(b);
              }
              var G = [];
              for (G = G.concat(f); !d; ) {
                var Z = [];
                Z = Z.concat(G), G = [];
                for (var L = 0; L < c.length; L++) {
                  var b = c[L], Y = c.indexOf(b);
                  Y >= 0 && c.splice(Y, 1);
                  var K = b.getNeighborsList();
                  K.forEach(function(n) {
                    if (f.indexOf(n) < 0) {
                      var m = T.get(n), p3 = m - 1;
                      p3 == 1 && G.push(n), T.set(n, p3);
                    }
                  });
                }
                f = f.concat(G), (c.length == 1 || c.length == 2) && (d = true, v = c[0]);
              }
              return v;
            }, o.prototype.setGraphManager = function(s) {
              this.graphManager = s;
            }, A.exports = o;
          }),
          /* 16 */
          /***/
          (function(A, P, N) {
            function u() {
            }
            u.seed = 1, u.x = 0, u.nextDouble = function() {
              return u.x = Math.sin(u.seed++) * 1e4, u.x - Math.floor(u.x);
            }, A.exports = u;
          }),
          /* 17 */
          /***/
          (function(A, P, N) {
            var u = N(5);
            function h(a, e) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            h.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, h.prototype.setWorldOrgX = function(a) {
              this.lworldOrgX = a;
            }, h.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, h.prototype.setWorldOrgY = function(a) {
              this.lworldOrgY = a;
            }, h.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, h.prototype.setWorldExtX = function(a) {
              this.lworldExtX = a;
            }, h.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, h.prototype.setWorldExtY = function(a) {
              this.lworldExtY = a;
            }, h.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, h.prototype.setDeviceOrgX = function(a) {
              this.ldeviceOrgX = a;
            }, h.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, h.prototype.setDeviceOrgY = function(a) {
              this.ldeviceOrgY = a;
            }, h.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, h.prototype.setDeviceExtX = function(a) {
              this.ldeviceExtX = a;
            }, h.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, h.prototype.setDeviceExtY = function(a) {
              this.ldeviceExtY = a;
            }, h.prototype.transformX = function(a) {
              var e = 0, r = this.lworldExtX;
              return r != 0 && (e = this.ldeviceOrgX + (a - this.lworldOrgX) * this.ldeviceExtX / r), e;
            }, h.prototype.transformY = function(a) {
              var e = 0, r = this.lworldExtY;
              return r != 0 && (e = this.ldeviceOrgY + (a - this.lworldOrgY) * this.ldeviceExtY / r), e;
            }, h.prototype.inverseTransformX = function(a) {
              var e = 0, r = this.ldeviceExtX;
              return r != 0 && (e = this.lworldOrgX + (a - this.ldeviceOrgX) * this.lworldExtX / r), e;
            }, h.prototype.inverseTransformY = function(a) {
              var e = 0, r = this.ldeviceExtY;
              return r != 0 && (e = this.lworldOrgY + (a - this.ldeviceOrgY) * this.lworldExtY / r), e;
            }, h.prototype.inverseTransformPoint = function(a) {
              var e = new u(this.inverseTransformX(a.x), this.inverseTransformY(a.y));
              return e;
            }, A.exports = h;
          }),
          /* 18 */
          /***/
          (function(A, P, N) {
            function u(t2) {
              if (Array.isArray(t2)) {
                for (var o = 0, s = Array(t2.length); o < t2.length; o++)
                  s[o] = t2[o];
                return s;
              } else
                return Array.from(t2);
            }
            var h = N(15), a = N(4), e = N(0), r = N(8), l = N(9);
            function i() {
              h.call(this), this.useSmartIdealEdgeLengthCalculation = a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = a.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = a.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = a.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = a.MAX_ITERATIONS;
            }
            i.prototype = Object.create(h.prototype);
            for (var g in h)
              i[g] = h[g];
            i.prototype.initParameters = function() {
              h.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, i.prototype.calcIdealEdgeLengths = function() {
              for (var t2, o, s, c, f, T, d, v = this.getGraphManager().getAllEdges(), L = 0; L < v.length; L++)
                t2 = v[L], o = t2.idealLength, t2.isInterGraph && (c = t2.getSource(), f = t2.getTarget(), T = t2.getSourceInLca().getEstimatedSize(), d = t2.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t2.idealLength += T + d - 2 * e.SIMPLE_NODE_SIZE), s = t2.getLca().getInclusionTreeDepth(), t2.idealLength += o * a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (c.getInclusionTreeDepth() + f.getInclusionTreeDepth() - 2 * s));
            }, i.prototype.initSpringEmbedder = function() {
              var t2 = this.getAllNodes().length;
              this.incremental ? (t2 > a.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * a.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t2 - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - a.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (t2 > a.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(a.COOLING_ADAPTATION_FACTOR, 1 - (t2 - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * (1 - a.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, i.prototype.calcSpringForces = function() {
              for (var t2 = this.getAllEdges(), o, s = 0; s < t2.length; s++)
                o = t2[s], this.calcSpringForce(o, o.idealLength);
            }, i.prototype.calcRepulsionForces = function() {
              var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, s, c, f, T, d = this.getAllNodes(), v;
              if (this.useFRGridVariant)
                for (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && t2 && this.updateGrid(), v = /* @__PURE__ */ new Set(), s = 0; s < d.length; s++)
                  f = d[s], this.calculateRepulsionForceOfANode(f, v, t2, o), v.add(f);
              else
                for (s = 0; s < d.length; s++)
                  for (f = d[s], c = s + 1; c < d.length; c++)
                    T = d[c], f.getOwner() == T.getOwner() && this.calcRepulsionForce(f, T);
            }, i.prototype.calcGravitationalForces = function() {
              for (var t2, o = this.getAllNodesToApplyGravitation(), s = 0; s < o.length; s++)
                t2 = o[s], this.calcGravitationalForce(t2);
            }, i.prototype.moveNodes = function() {
              for (var t2 = this.getAllNodes(), o, s = 0; s < t2.length; s++)
                o = t2[s], o.move();
            }, i.prototype.calcSpringForce = function(t2, o) {
              var s = t2.getSource(), c = t2.getTarget(), f, T, d, v;
              if (this.uniformLeafNodeSizes && s.getChild() == null && c.getChild() == null)
                t2.updateLengthSimple();
              else if (t2.updateLength(), t2.isOverlapingSourceAndTarget)
                return;
              f = t2.getLength(), f != 0 && (T = t2.edgeElasticity * (f - o), d = T * (t2.lengthX / f), v = T * (t2.lengthY / f), s.springForceX += d, s.springForceY += v, c.springForceX -= d, c.springForceY -= v);
            }, i.prototype.calcRepulsionForce = function(t2, o) {
              var s = t2.getRect(), c = o.getRect(), f = new Array(2), T = new Array(4), d, v, L, b, C, G, Z;
              if (s.intersects(c)) {
                r.calcSeparationAmount(s, c, f, a.DEFAULT_EDGE_LENGTH / 2), G = 2 * f[0], Z = 2 * f[1];
                var Y = t2.noOfChildren * o.noOfChildren / (t2.noOfChildren + o.noOfChildren);
                t2.repulsionForceX -= Y * G, t2.repulsionForceY -= Y * Z, o.repulsionForceX += Y * G, o.repulsionForceY += Y * Z;
              } else
                this.uniformLeafNodeSizes && t2.getChild() == null && o.getChild() == null ? (d = c.getCenterX() - s.getCenterX(), v = c.getCenterY() - s.getCenterY()) : (r.getIntersection(s, c, T), d = T[2] - T[0], v = T[3] - T[1]), Math.abs(d) < a.MIN_REPULSION_DIST && (d = l.sign(d) * a.MIN_REPULSION_DIST), Math.abs(v) < a.MIN_REPULSION_DIST && (v = l.sign(v) * a.MIN_REPULSION_DIST), L = d * d + v * v, b = Math.sqrt(L), C = (t2.nodeRepulsion / 2 + o.nodeRepulsion / 2) * t2.noOfChildren * o.noOfChildren / L, G = C * d / b, Z = C * v / b, t2.repulsionForceX -= G, t2.repulsionForceY -= Z, o.repulsionForceX += G, o.repulsionForceY += Z;
            }, i.prototype.calcGravitationalForce = function(t2) {
              var o, s, c, f, T, d, v, L;
              o = t2.getOwner(), s = (o.getRight() + o.getLeft()) / 2, c = (o.getTop() + o.getBottom()) / 2, f = t2.getCenterX() - s, T = t2.getCenterY() - c, d = Math.abs(f) + t2.getWidth() / 2, v = Math.abs(T) + t2.getHeight() / 2, t2.getOwner() == this.graphManager.getRoot() ? (L = o.getEstimatedSize() * this.gravityRangeFactor, (d > L || v > L) && (t2.gravitationForceX = -this.gravityConstant * f, t2.gravitationForceY = -this.gravityConstant * T)) : (L = o.getEstimatedSize() * this.compoundGravityRangeFactor, (d > L || v > L) && (t2.gravitationForceX = -this.gravityConstant * f * this.compoundGravityConstant, t2.gravitationForceY = -this.gravityConstant * T * this.compoundGravityConstant));
            }, i.prototype.isConverged = function() {
              var t2, o = false;
              return this.totalIterations > this.maxIterations / 3 && (o = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), t2 = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t2 || o;
            }, i.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, i.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var t2, o = this.graphManager.getAllNodes(), s = 0; s < o.length; s++)
                t2 = o[s], t2.noOfChildren = t2.getNoOfChildren();
            }, i.prototype.calcGrid = function(t2) {
              var o = 0, s = 0;
              o = parseInt(Math.ceil((t2.getRight() - t2.getLeft()) / this.repulsionRange)), s = parseInt(Math.ceil((t2.getBottom() - t2.getTop()) / this.repulsionRange));
              for (var c = new Array(o), f = 0; f < o; f++)
                c[f] = new Array(s);
              for (var f = 0; f < o; f++)
                for (var T = 0; T < s; T++)
                  c[f][T] = new Array();
              return c;
            }, i.prototype.addNodeToGrid = function(t2, o, s) {
              var c = 0, f = 0, T = 0, d = 0;
              c = parseInt(Math.floor((t2.getRect().x - o) / this.repulsionRange)), f = parseInt(Math.floor((t2.getRect().width + t2.getRect().x - o) / this.repulsionRange)), T = parseInt(Math.floor((t2.getRect().y - s) / this.repulsionRange)), d = parseInt(Math.floor((t2.getRect().height + t2.getRect().y - s) / this.repulsionRange));
              for (var v = c; v <= f; v++)
                for (var L = T; L <= d; L++)
                  this.grid[v][L].push(t2), t2.setGridCoordinates(c, f, T, d);
            }, i.prototype.updateGrid = function() {
              var t2, o, s = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), t2 = 0; t2 < s.length; t2++)
                o = s[t2], this.addNodeToGrid(o, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, i.prototype.calculateRepulsionForceOfANode = function(t2, o, s, c) {
              if (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && s || c) {
                var f = /* @__PURE__ */ new Set();
                t2.surrounding = new Array();
                for (var T, d = this.grid, v = t2.startX - 1; v < t2.finishX + 2; v++)
                  for (var L = t2.startY - 1; L < t2.finishY + 2; L++)
                    if (!(v < 0 || L < 0 || v >= d.length || L >= d[0].length)) {
                      for (var b = 0; b < d[v][L].length; b++)
                        if (T = d[v][L][b], !(t2.getOwner() != T.getOwner() || t2 == T) && !o.has(T) && !f.has(T)) {
                          var C = Math.abs(t2.getCenterX() - T.getCenterX()) - (t2.getWidth() / 2 + T.getWidth() / 2), G = Math.abs(t2.getCenterY() - T.getCenterY()) - (t2.getHeight() / 2 + T.getHeight() / 2);
                          C <= this.repulsionRange && G <= this.repulsionRange && f.add(T);
                        }
                    }
                t2.surrounding = [].concat(u(f));
              }
              for (v = 0; v < t2.surrounding.length; v++)
                this.calcRepulsionForce(t2, t2.surrounding[v]);
            }, i.prototype.calcRepulsionRange = function() {
              return 0;
            }, A.exports = i;
          }),
          /* 19 */
          /***/
          (function(A, P, N) {
            var u = N(1), h = N(4);
            function a(r, l, i) {
              u.call(this, r, l, i), this.idealLength = h.DEFAULT_EDGE_LENGTH, this.edgeElasticity = h.DEFAULT_SPRING_STRENGTH;
            }
            a.prototype = Object.create(u.prototype);
            for (var e in u)
              a[e] = u[e];
            A.exports = a;
          }),
          /* 20 */
          /***/
          (function(A, P, N) {
            var u = N(3), h = N(4);
            function a(r, l, i, g) {
              u.call(this, r, l, i, g), this.nodeRepulsion = h.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            a.prototype = Object.create(u.prototype);
            for (var e in u)
              a[e] = u[e];
            a.prototype.setGridCoordinates = function(r, l, i, g) {
              this.startX = r, this.finishX = l, this.startY = i, this.finishY = g;
            }, A.exports = a;
          }),
          /* 21 */
          /***/
          (function(A, P, N) {
            function u(h, a) {
              this.width = 0, this.height = 0, h !== null && a !== null && (this.height = a, this.width = h);
            }
            u.prototype.getWidth = function() {
              return this.width;
            }, u.prototype.setWidth = function(h) {
              this.width = h;
            }, u.prototype.getHeight = function() {
              return this.height;
            }, u.prototype.setHeight = function(h) {
              this.height = h;
            }, A.exports = u;
          }),
          /* 22 */
          /***/
          (function(A, P, N) {
            var u = N(14);
            function h() {
              this.map = {}, this.keys = [];
            }
            h.prototype.put = function(a, e) {
              var r = u.createID(a);
              this.contains(r) || (this.map[r] = e, this.keys.push(a));
            }, h.prototype.contains = function(a) {
              return u.createID(a), this.map[a] != null;
            }, h.prototype.get = function(a) {
              var e = u.createID(a);
              return this.map[e];
            }, h.prototype.keySet = function() {
              return this.keys;
            }, A.exports = h;
          }),
          /* 23 */
          /***/
          (function(A, P, N) {
            var u = N(14);
            function h() {
              this.set = {};
            }
            h.prototype.add = function(a) {
              var e = u.createID(a);
              this.contains(e) || (this.set[e] = a);
            }, h.prototype.remove = function(a) {
              delete this.set[u.createID(a)];
            }, h.prototype.clear = function() {
              this.set = {};
            }, h.prototype.contains = function(a) {
              return this.set[u.createID(a)] == a;
            }, h.prototype.isEmpty = function() {
              return this.size() === 0;
            }, h.prototype.size = function() {
              return Object.keys(this.set).length;
            }, h.prototype.addAllTo = function(a) {
              for (var e = Object.keys(this.set), r = e.length, l = 0; l < r; l++)
                a.push(this.set[e[l]]);
            }, h.prototype.size = function() {
              return Object.keys(this.set).length;
            }, h.prototype.addAll = function(a) {
              for (var e = a.length, r = 0; r < e; r++) {
                var l = a[r];
                this.add(l);
              }
            }, A.exports = h;
          }),
          /* 24 */
          /***/
          (function(A, P, N) {
            function u() {
            }
            u.multMat = function(h, a) {
              for (var e = [], r = 0; r < h.length; r++) {
                e[r] = [];
                for (var l = 0; l < a[0].length; l++) {
                  e[r][l] = 0;
                  for (var i = 0; i < h[0].length; i++)
                    e[r][l] += h[r][i] * a[i][l];
                }
              }
              return e;
            }, u.transpose = function(h) {
              for (var a = [], e = 0; e < h[0].length; e++) {
                a[e] = [];
                for (var r = 0; r < h.length; r++)
                  a[e][r] = h[r][e];
              }
              return a;
            }, u.multCons = function(h, a) {
              for (var e = [], r = 0; r < h.length; r++)
                e[r] = h[r] * a;
              return e;
            }, u.minusOp = function(h, a) {
              for (var e = [], r = 0; r < h.length; r++)
                e[r] = h[r] - a[r];
              return e;
            }, u.dotProduct = function(h, a) {
              for (var e = 0, r = 0; r < h.length; r++)
                e += h[r] * a[r];
              return e;
            }, u.mag = function(h) {
              return Math.sqrt(this.dotProduct(h, h));
            }, u.normalize = function(h) {
              for (var a = [], e = this.mag(h), r = 0; r < h.length; r++)
                a[r] = h[r] / e;
              return a;
            }, u.multGamma = function(h) {
              for (var a = [], e = 0, r = 0; r < h.length; r++)
                e += h[r];
              e *= -1 / h.length;
              for (var l = 0; l < h.length; l++)
                a[l] = e + h[l];
              return a;
            }, u.multL = function(h, a, e) {
              for (var r = [], l = [], i = [], g = 0; g < a[0].length; g++) {
                for (var t2 = 0, o = 0; o < a.length; o++)
                  t2 += -0.5 * a[o][g] * h[o];
                l[g] = t2;
              }
              for (var s = 0; s < e.length; s++) {
                for (var c = 0, f = 0; f < e.length; f++)
                  c += e[s][f] * l[f];
                i[s] = c;
              }
              for (var T = 0; T < a.length; T++) {
                for (var d = 0, v = 0; v < a[0].length; v++)
                  d += a[T][v] * i[v];
                r[T] = d;
              }
              return r;
            }, A.exports = u;
          }),
          /* 25 */
          /***/
          (function(A, P, N) {
            var u = /* @__PURE__ */ (function() {
              function r(l, i) {
                for (var g = 0; g < i.length; g++) {
                  var t2 = i[g];
                  t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(l, t2.key, t2);
                }
              }
              return function(l, i, g) {
                return i && r(l.prototype, i), g && r(l, g), l;
              };
            })();
            function h(r, l) {
              if (!(r instanceof l))
                throw new TypeError("Cannot call a class as a function");
            }
            var a = N(11), e = (function() {
              function r(l, i) {
                h(this, r), (i !== null || i !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var g = void 0;
                l instanceof a ? g = l.size() : g = l.length, this._quicksort(l, 0, g - 1);
              }
              return u(r, [{
                key: "_quicksort",
                value: function(i, g, t2) {
                  if (g < t2) {
                    var o = this._partition(i, g, t2);
                    this._quicksort(i, g, o), this._quicksort(i, o + 1, t2);
                  }
                }
              }, {
                key: "_partition",
                value: function(i, g, t2) {
                  for (var o = this._get(i, g), s = g, c = t2; ; ) {
                    for (; this.compareFunction(o, this._get(i, c)); )
                      c--;
                    for (; this.compareFunction(this._get(i, s), o); )
                      s++;
                    if (s < c)
                      this._swap(i, s, c), s++, c--;
                    else return c;
                  }
                }
              }, {
                key: "_get",
                value: function(i, g) {
                  return i instanceof a ? i.get_object_at(g) : i[g];
                }
              }, {
                key: "_set",
                value: function(i, g, t2) {
                  i instanceof a ? i.set_object_at(g, t2) : i[g] = t2;
                }
              }, {
                key: "_swap",
                value: function(i, g, t2) {
                  var o = this._get(i, g);
                  this._set(i, g, this._get(i, t2)), this._set(i, t2, o);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(i, g) {
                  return g > i;
                }
              }]), r;
            })();
            A.exports = e;
          }),
          /* 26 */
          /***/
          (function(A, P, N) {
            function u() {
            }
            u.svd = function(h) {
              this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = h.length, this.n = h[0].length;
              var a = Math.min(this.m, this.n);
              this.s = (function(Tt) {
                for (var Ct = []; Tt-- > 0; )
                  Ct.push(0);
                return Ct;
              })(Math.min(this.m + 1, this.n)), this.U = (function(Tt) {
                var Ct = function $t(bt) {
                  if (bt.length == 0)
                    return 0;
                  for (var zt = [], St = 0; St < bt[0]; St++)
                    zt.push($t(bt.slice(1)));
                  return zt;
                };
                return Ct(Tt);
              })([this.m, a]), this.V = (function(Tt) {
                var Ct = function $t(bt) {
                  if (bt.length == 0)
                    return 0;
                  for (var zt = [], St = 0; St < bt[0]; St++)
                    zt.push($t(bt.slice(1)));
                  return zt;
                };
                return Ct(Tt);
              })([this.n, this.n]);
              for (var e = (function(Tt) {
                for (var Ct = []; Tt-- > 0; )
                  Ct.push(0);
                return Ct;
              })(this.n), r = (function(Tt) {
                for (var Ct = []; Tt-- > 0; )
                  Ct.push(0);
                return Ct;
              })(this.m), l = true, i = Math.min(this.m - 1, this.n), g = Math.max(0, Math.min(this.n - 2, this.m)), t2 = 0; t2 < Math.max(i, g); t2++) {
                if (t2 < i) {
                  this.s[t2] = 0;
                  for (var o = t2; o < this.m; o++)
                    this.s[t2] = u.hypot(this.s[t2], h[o][t2]);
                  if (this.s[t2] !== 0) {
                    h[t2][t2] < 0 && (this.s[t2] = -this.s[t2]);
                    for (var s = t2; s < this.m; s++)
                      h[s][t2] /= this.s[t2];
                    h[t2][t2] += 1;
                  }
                  this.s[t2] = -this.s[t2];
                }
                for (var c = t2 + 1; c < this.n; c++) {
                  if (/* @__PURE__ */ (function(Tt, Ct) {
                    return Tt && Ct;
                  })(t2 < i, this.s[t2] !== 0)) {
                    for (var f = 0, T = t2; T < this.m; T++)
                      f += h[T][t2] * h[T][c];
                    f = -f / h[t2][t2];
                    for (var d = t2; d < this.m; d++)
                      h[d][c] += f * h[d][t2];
                  }
                  e[c] = h[t2][c];
                }
                if (/* @__PURE__ */ (function(Tt, Ct) {
                  return Ct;
                })(l, t2 < i))
                  for (var v = t2; v < this.m; v++)
                    this.U[v][t2] = h[v][t2];
                if (t2 < g) {
                  e[t2] = 0;
                  for (var L = t2 + 1; L < this.n; L++)
                    e[t2] = u.hypot(e[t2], e[L]);
                  if (e[t2] !== 0) {
                    e[t2 + 1] < 0 && (e[t2] = -e[t2]);
                    for (var b = t2 + 1; b < this.n; b++)
                      e[b] /= e[t2];
                    e[t2 + 1] += 1;
                  }
                  if (e[t2] = -e[t2], /* @__PURE__ */ (function(Tt, Ct) {
                    return Tt && Ct;
                  })(t2 + 1 < this.m, e[t2] !== 0)) {
                    for (var C = t2 + 1; C < this.m; C++)
                      r[C] = 0;
                    for (var G = t2 + 1; G < this.n; G++)
                      for (var Z = t2 + 1; Z < this.m; Z++)
                        r[Z] += e[G] * h[Z][G];
                    for (var Y = t2 + 1; Y < this.n; Y++)
                      for (var K = -e[Y] / e[t2 + 1], O = t2 + 1; O < this.m; O++)
                        h[O][Y] += K * r[O];
                  }
                  for (var it = t2 + 1; it < this.n; it++)
                    this.V[it][t2] = e[it];
                }
              }
              var n = Math.min(this.n, this.m + 1);
              i < this.n && (this.s[i] = h[i][i]), this.m < n && (this.s[n - 1] = 0), g + 1 < n && (e[g] = h[g][n - 1]), e[n - 1] = 0;
              {
                for (var m = i; m < a; m++) {
                  for (var p3 = 0; p3 < this.m; p3++)
                    this.U[p3][m] = 0;
                  this.U[m][m] = 1;
                }
                for (var E = i - 1; E >= 0; E--)
                  if (this.s[E] !== 0) {
                    for (var y = E + 1; y < a; y++) {
                      for (var R = 0, M = E; M < this.m; M++)
                        R += this.U[M][E] * this.U[M][y];
                      R = -R / this.U[E][E];
                      for (var S = E; S < this.m; S++)
                        this.U[S][y] += R * this.U[S][E];
                    }
                    for (var W = E; W < this.m; W++)
                      this.U[W][E] = -this.U[W][E];
                    this.U[E][E] = 1 + this.U[E][E];
                    for (var D = 0; D < E - 1; D++)
                      this.U[D][E] = 0;
                  } else {
                    for (var q = 0; q < this.m; q++)
                      this.U[q][E] = 0;
                    this.U[E][E] = 1;
                  }
              }
              for (var V = this.n - 1; V >= 0; V--) {
                if (/* @__PURE__ */ (function(Tt, Ct) {
                  return Tt && Ct;
                })(V < g, e[V] !== 0))
                  for (var X = V + 1; X < a; X++) {
                    for (var et = 0, z = V + 1; z < this.n; z++)
                      et += this.V[z][V] * this.V[z][X];
                    et = -et / this.V[V + 1][V];
                    for (var w = V + 1; w < this.n; w++)
                      this.V[w][X] += et * this.V[w][V];
                  }
                for (var H = 0; H < this.n; H++)
                  this.V[H][V] = 0;
                this.V[V][V] = 1;
              }
              for (var $ = n - 1, _ = Math.pow(2, -52), ht2 = Math.pow(2, -966); n > 0; ) {
                var Q = void 0, It = void 0;
                for (Q = n - 2; Q >= -1 && Q !== -1; Q--)
                  if (Math.abs(e[Q]) <= ht2 + _ * (Math.abs(this.s[Q]) + Math.abs(this.s[Q + 1]))) {
                    e[Q] = 0;
                    break;
                  }
                if (Q === n - 2)
                  It = 4;
                else {
                  var Nt = void 0;
                  for (Nt = n - 1; Nt >= Q && Nt !== Q; Nt--) {
                    var vt = (Nt !== n ? Math.abs(e[Nt]) : 0) + (Nt !== Q + 1 ? Math.abs(e[Nt - 1]) : 0);
                    if (Math.abs(this.s[Nt]) <= ht2 + _ * vt) {
                      this.s[Nt] = 0;
                      break;
                    }
                  }
                  Nt === Q ? It = 3 : Nt === n - 1 ? It = 1 : (It = 2, Q = Nt);
                }
                switch (Q++, It) {
                  case 1:
                    {
                      var rt = e[n - 2];
                      e[n - 2] = 0;
                      for (var gt = n - 2; gt >= Q; gt--) {
                        var mt = u.hypot(this.s[gt], rt), At = this.s[gt] / mt, Ot = rt / mt;
                        this.s[gt] = mt, gt !== Q && (rt = -Ot * e[gt - 1], e[gt - 1] = At * e[gt - 1]);
                        for (var Et = 0; Et < this.n; Et++)
                          mt = At * this.V[Et][gt] + Ot * this.V[Et][n - 1], this.V[Et][n - 1] = -Ot * this.V[Et][gt] + At * this.V[Et][n - 1], this.V[Et][gt] = mt;
                      }
                    }
                    break;
                  case 2:
                    {
                      var Dt2 = e[Q - 1];
                      e[Q - 1] = 0;
                      for (var Rt = Q; Rt < n; Rt++) {
                        var Ht = u.hypot(this.s[Rt], Dt2), Ut = this.s[Rt] / Ht, Pt = Dt2 / Ht;
                        this.s[Rt] = Ht, Dt2 = -Pt * e[Rt], e[Rt] = Ut * e[Rt];
                        for (var Ft = 0; Ft < this.m; Ft++)
                          Ht = Ut * this.U[Ft][Rt] + Pt * this.U[Ft][Q - 1], this.U[Ft][Q - 1] = -Pt * this.U[Ft][Rt] + Ut * this.U[Ft][Q - 1], this.U[Ft][Rt] = Ht;
                      }
                    }
                    break;
                  case 3:
                    {
                      var Yt = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[n - 1]), Math.abs(this.s[n - 2])), Math.abs(e[n - 2])), Math.abs(this.s[Q])), Math.abs(e[Q])), Vt = this.s[n - 1] / Yt, F2 = this.s[n - 2] / Yt, U = e[n - 2] / Yt, B = this.s[Q] / Yt, J = e[Q] / Yt, k = ((F2 + Vt) * (F2 - Vt) + U * U) / 2, at = Vt * U * (Vt * U), ct = 0;
                      /* @__PURE__ */ (function(Tt, Ct) {
                        return Tt || Ct;
                      })(k !== 0, at !== 0) && (ct = Math.sqrt(k * k + at), k < 0 && (ct = -ct), ct = at / (k + ct));
                      for (var nt = (B + Vt) * (B - Vt) + ct, tt = B * J, j = Q; j < n - 1; j++) {
                        var ut = u.hypot(nt, tt), Mt = nt / ut, pt = tt / ut;
                        j !== Q && (e[j - 1] = ut), nt = Mt * this.s[j] + pt * e[j], e[j] = Mt * e[j] - pt * this.s[j], tt = pt * this.s[j + 1], this.s[j + 1] = Mt * this.s[j + 1];
                        for (var xt = 0; xt < this.n; xt++)
                          ut = Mt * this.V[xt][j] + pt * this.V[xt][j + 1], this.V[xt][j + 1] = -pt * this.V[xt][j] + Mt * this.V[xt][j + 1], this.V[xt][j] = ut;
                        if (ut = u.hypot(nt, tt), Mt = nt / ut, pt = tt / ut, this.s[j] = ut, nt = Mt * e[j] + pt * this.s[j + 1], this.s[j + 1] = -pt * e[j] + Mt * this.s[j + 1], tt = pt * e[j + 1], e[j + 1] = Mt * e[j + 1], j < this.m - 1)
                          for (var lt = 0; lt < this.m; lt++)
                            ut = Mt * this.U[lt][j] + pt * this.U[lt][j + 1], this.U[lt][j + 1] = -pt * this.U[lt][j] + Mt * this.U[lt][j + 1], this.U[lt][j] = ut;
                      }
                      e[n - 2] = nt;
                    }
                    break;
                  case 4:
                    {
                      if (this.s[Q] <= 0) {
                        this.s[Q] = this.s[Q] < 0 ? -this.s[Q] : 0;
                        for (var ot = 0; ot <= $; ot++)
                          this.V[ot][Q] = -this.V[ot][Q];
                      }
                      for (; Q < $ && !(this.s[Q] >= this.s[Q + 1]); ) {
                        var Lt = this.s[Q];
                        if (this.s[Q] = this.s[Q + 1], this.s[Q + 1] = Lt, Q < this.n - 1)
                          for (var ft2 = 0; ft2 < this.n; ft2++)
                            Lt = this.V[ft2][Q + 1], this.V[ft2][Q + 1] = this.V[ft2][Q], this.V[ft2][Q] = Lt;
                        if (Q < this.m - 1)
                          for (var st = 0; st < this.m; st++)
                            Lt = this.U[st][Q + 1], this.U[st][Q + 1] = this.U[st][Q], this.U[st][Q] = Lt;
                        Q++;
                      }
                      n--;
                    }
                    break;
                }
              }
              var Xt = { U: this.U, V: this.V, S: this.s };
              return Xt;
            }, u.hypot = function(h, a) {
              var e = void 0;
              return Math.abs(h) > Math.abs(a) ? (e = a / h, e = Math.abs(h) * Math.sqrt(1 + e * e)) : a != 0 ? (e = h / a, e = Math.abs(a) * Math.sqrt(1 + e * e)) : e = 0, e;
            }, A.exports = u;
          }),
          /* 27 */
          /***/
          (function(A, P, N) {
            var u = /* @__PURE__ */ (function() {
              function e(r, l) {
                for (var i = 0; i < l.length; i++) {
                  var g = l[i];
                  g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(r, g.key, g);
                }
              }
              return function(r, l, i) {
                return l && e(r.prototype, l), i && e(r, i), r;
              };
            })();
            function h(e, r) {
              if (!(e instanceof r))
                throw new TypeError("Cannot call a class as a function");
            }
            var a = (function() {
              function e(r, l) {
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, t2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                h(this, e), this.sequence1 = r, this.sequence2 = l, this.match_score = i, this.mismatch_penalty = g, this.gap_penalty = t2, this.iMax = r.length + 1, this.jMax = l.length + 1, this.grid = new Array(this.iMax);
                for (var o = 0; o < this.iMax; o++) {
                  this.grid[o] = new Array(this.jMax);
                  for (var s = 0; s < this.jMax; s++)
                    this.grid[o][s] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var c = 0; c < this.iMax; c++) {
                  this.tracebackGrid[c] = new Array(this.jMax);
                  for (var f = 0; f < this.jMax; f++)
                    this.tracebackGrid[c][f] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return u(e, [{
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
                  for (var l = 1; l < this.jMax; l++)
                    this.grid[0][l] = this.grid[0][l - 1] + this.gap_penalty, this.tracebackGrid[0][l] = [false, false, true];
                  for (var i = 1; i < this.iMax; i++)
                    this.grid[i][0] = this.grid[i - 1][0] + this.gap_penalty, this.tracebackGrid[i][0] = [false, true, false];
                  for (var g = 1; g < this.iMax; g++)
                    for (var t2 = 1; t2 < this.jMax; t2++) {
                      var o = void 0;
                      this.sequence1[g - 1] === this.sequence2[t2 - 1] ? o = this.grid[g - 1][t2 - 1] + this.match_score : o = this.grid[g - 1][t2 - 1] + this.mismatch_penalty;
                      var s = this.grid[g - 1][t2] + this.gap_penalty, c = this.grid[g][t2 - 1] + this.gap_penalty, f = [o, s, c], T = this.arrayAllMaxIndexes(f);
                      this.grid[g][t2] = f[T[0]], this.tracebackGrid[g][t2] = [T.includes(0), T.includes(1), T.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var l = [];
                  for (l.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); l[0]; ) {
                    var i = l[0], g = this.tracebackGrid[i.pos[0]][i.pos[1]];
                    g[0] && l.push({
                      pos: [i.pos[0] - 1, i.pos[1] - 1],
                      seq1: this.sequence1[i.pos[0] - 1] + i.seq1,
                      seq2: this.sequence2[i.pos[1] - 1] + i.seq2
                    }), g[1] && l.push({
                      pos: [i.pos[0] - 1, i.pos[1]],
                      seq1: this.sequence1[i.pos[0] - 1] + i.seq1,
                      seq2: "-" + i.seq2
                    }), g[2] && l.push({
                      pos: [i.pos[0], i.pos[1] - 1],
                      seq1: "-" + i.seq1,
                      seq2: this.sequence2[i.pos[1] - 1] + i.seq2
                    }), i.pos[0] === 0 && i.pos[1] === 0 && this.alignments.push({
                      sequence1: i.seq1,
                      sequence2: i.seq2
                    }), l.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(l, i) {
                  for (var g = [], t2 = -1; (t2 = l.indexOf(i, t2 + 1)) !== -1; )
                    g.push(t2);
                  return g;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(l) {
                  return this.getAllIndexes(l, Math.max.apply(null, l));
                }
              }]), e;
            })();
            A.exports = a;
          }),
          /* 28 */
          /***/
          (function(A, P, N) {
            var u = function() {
            };
            u.FDLayout = N(18), u.FDLayoutConstants = N(4), u.FDLayoutEdge = N(19), u.FDLayoutNode = N(20), u.DimensionD = N(21), u.HashMap = N(22), u.HashSet = N(23), u.IGeometry = N(8), u.IMath = N(9), u.Integer = N(10), u.Point = N(12), u.PointD = N(5), u.RandomSeed = N(16), u.RectangleD = N(13), u.Transform = N(17), u.UniqueIDGeneretor = N(14), u.Quicksort = N(25), u.LinkedList = N(11), u.LGraphObject = N(2), u.LGraph = N(6), u.LEdge = N(1), u.LGraphManager = N(7), u.LNode = N(3), u.Layout = N(15), u.LayoutConstants = N(0), u.NeedlemanWunsch = N(27), u.Matrix = N(24), u.SVD = N(26), A.exports = u;
          }),
          /* 29 */
          /***/
          (function(A, P, N) {
            function u() {
              this.listeners = [];
            }
            var h = u.prototype;
            h.addListener = function(a, e) {
              this.listeners.push({
                event: a,
                callback: e
              });
            }, h.removeListener = function(a, e) {
              for (var r = this.listeners.length; r >= 0; r--) {
                var l = this.listeners[r];
                l.event === a && l.callback === e && this.listeners.splice(r, 1);
              }
            }, h.emit = function(a, e) {
              for (var r = 0; r < this.listeners.length; r++) {
                var l = this.listeners[r];
                a === l.event && l.callback(e);
              }
            }, A.exports = u;
          })
          /******/
        ])
      );
    });
  })(fe)), fe.exports;
}
var dr = le.exports, Oe;
function vr() {
  return Oe || (Oe = 1, (function(I, x) {
    (function(P, N) {
      I.exports = N(ur());
    })(dr, function(A) {
      return (
        /******/
        (() => {
          var P = {
            /***/
            45: (
              /***/
              ((a, e, r) => {
                var l = {};
                l.layoutBase = r(551), l.CoSEConstants = r(806), l.CoSEEdge = r(767), l.CoSEGraph = r(880), l.CoSEGraphManager = r(578), l.CoSELayout = r(765), l.CoSENode = r(991), l.ConstraintHandler = r(902), a.exports = l;
              })
            ),
            /***/
            806: (
              /***/
              ((a, e, r) => {
                var l = r(551).FDLayoutConstants;
                function i() {
                }
                for (var g in l)
                  i[g] = l[g];
                i.DEFAULT_USE_MULTI_LEVEL_SCALING = false, i.DEFAULT_RADIAL_SEPARATION = l.DEFAULT_EDGE_LENGTH, i.DEFAULT_COMPONENT_SEPERATION = 60, i.TILE = true, i.TILING_PADDING_VERTICAL = 10, i.TILING_PADDING_HORIZONTAL = 10, i.TRANSFORM_ON_CONSTRAINT_HANDLING = true, i.ENFORCE_CONSTRAINTS = true, i.APPLY_LAYOUT = true, i.RELAX_MOVEMENT_ON_CONSTRAINTS = true, i.TREE_REDUCTION_ON_INCREMENTAL = true, i.PURE_INCREMENTAL = i.DEFAULT_INCREMENTAL, a.exports = i;
              })
            ),
            /***/
            767: (
              /***/
              ((a, e, r) => {
                var l = r(551).FDLayoutEdge;
                function i(t2, o, s) {
                  l.call(this, t2, o, s);
                }
                i.prototype = Object.create(l.prototype);
                for (var g in l)
                  i[g] = l[g];
                a.exports = i;
              })
            ),
            /***/
            880: (
              /***/
              ((a, e, r) => {
                var l = r(551).LGraph;
                function i(t2, o, s) {
                  l.call(this, t2, o, s);
                }
                i.prototype = Object.create(l.prototype);
                for (var g in l)
                  i[g] = l[g];
                a.exports = i;
              })
            ),
            /***/
            578: (
              /***/
              ((a, e, r) => {
                var l = r(551).LGraphManager;
                function i(t2) {
                  l.call(this, t2);
                }
                i.prototype = Object.create(l.prototype);
                for (var g in l)
                  i[g] = l[g];
                a.exports = i;
              })
            ),
            /***/
            765: (
              /***/
              ((a, e, r) => {
                var l = r(551).FDLayout, i = r(578), g = r(880), t2 = r(991), o = r(767), s = r(806), c = r(902), f = r(551).FDLayoutConstants, T = r(551).LayoutConstants, d = r(551).Point, v = r(551).PointD, L = r(551).DimensionD, b = r(551).Layout, C = r(551).Integer, G = r(551).IGeometry, Z = r(551).LGraph, Y = r(551).Transform, K = r(551).LinkedList;
                function O() {
                  l.call(this), this.toBeTiled = {}, this.constraints = {};
                }
                O.prototype = Object.create(l.prototype);
                for (var it in l)
                  O[it] = l[it];
                O.prototype.newGraphManager = function() {
                  var n = new i(this);
                  return this.graphManager = n, n;
                }, O.prototype.newGraph = function(n) {
                  return new g(null, this.graphManager, n);
                }, O.prototype.newNode = function(n) {
                  return new t2(this.graphManager, n);
                }, O.prototype.newEdge = function(n) {
                  return new o(null, null, n);
                }, O.prototype.initParameters = function() {
                  l.prototype.initParameters.call(this, arguments), this.isSubLayout || (s.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = s.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = f.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = f.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = f.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = f.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false);
                }, O.prototype.initSpringEmbedder = function() {
                  l.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / f.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = 0.04, this.coolingAdjuster = 1;
                }, O.prototype.layout = function() {
                  var n = T.DEFAULT_CREATE_BENDS_AS_NEEDED;
                  return n && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
                }, O.prototype.classicLayout = function() {
                  if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                    if (s.TREE_REDUCTION_ON_INCREMENTAL) {
                      this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                      var m = new Set(this.getAllNodes()), p3 = this.nodesWithGravity.filter(function(R) {
                        return m.has(R);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(p3);
                    }
                  } else {
                    var n = this.getFlatForest();
                    if (n.length > 0)
                      this.positionNodesRadially(n);
                    else {
                      this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                      var m = new Set(this.getAllNodes()), p3 = this.nodesWithGravity.filter(function(E) {
                        return m.has(E);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(p3), this.positionNodesRandomly();
                    }
                  }
                  return Object.keys(this.constraints).length > 0 && (c.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), s.APPLY_LAYOUT && this.runSpringEmbedder(), true;
                }, O.prototype.tick = function() {
                  if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                    if (this.prunedNodesAll.length > 0)
                      this.isTreeGrowing = true;
                    else
                      return true;
                  if (this.totalIterations % f.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
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
                        var n = new Set(this.getAllNodes()), m = this.nodesWithGravity.filter(function(y) {
                          return n.has(y);
                        });
                        this.graphManager.setAllNodesToApplyGravitation(m), this.graphManager.updateBounds(), this.updateGrid(), s.PURE_INCREMENTAL ? this.coolingFactor = f.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = f.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                      } else
                        this.isTreeGrowing = false, this.isGrowthFinished = true;
                    this.growTreeIterations++;
                  }
                  if (this.isGrowthFinished) {
                    if (this.isConverged())
                      return true;
                    this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), s.PURE_INCREMENTAL ? this.coolingFactor = f.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = f.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
                  }
                  var p3 = !this.isTreeGrowing && !this.isGrowthFinished, E = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                  return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(p3, E), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
                }, O.prototype.getPositionsData = function() {
                  for (var n = this.graphManager.getAllNodes(), m = {}, p3 = 0; p3 < n.length; p3++) {
                    var E = n[p3].rect, y = n[p3].id;
                    m[y] = {
                      id: y,
                      x: E.getCenterX(),
                      y: E.getCenterY(),
                      w: E.width,
                      h: E.height
                    };
                  }
                  return m;
                }, O.prototype.runSpringEmbedder = function() {
                  this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
                  var n = false;
                  if (f.ANIMATE === "during")
                    this.emit("layoutstarted");
                  else {
                    for (; !n; )
                      n = this.tick();
                    this.graphManager.updateBounds();
                  }
                }, O.prototype.moveNodes = function() {
                  for (var n = this.getAllNodes(), m, p3 = 0; p3 < n.length; p3++)
                    m = n[p3], m.calculateDisplacement();
                  Object.keys(this.constraints).length > 0 && this.updateDisplacements();
                  for (var p3 = 0; p3 < n.length; p3++)
                    m = n[p3], m.move();
                }, O.prototype.initConstraintVariables = function() {
                  var n = this;
                  this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
                  for (var m = this.graphManager.getAllNodes(), p3 = 0; p3 < m.length; p3++) {
                    var E = m[p3];
                    this.idToNodeMap.set(E.id, E);
                  }
                  var y = function w(H) {
                    for (var $ = H.getChild().getNodes(), _, ht2 = 0, Q = 0; Q < $.length; Q++)
                      _ = $[Q], _.getChild() == null ? n.fixedNodeSet.has(_.id) && (ht2 += 100) : ht2 += w(_);
                    return ht2;
                  };
                  if (this.constraints.fixedNodeConstraint) {
                    this.constraints.fixedNodeConstraint.forEach(function($) {
                      n.fixedNodeSet.add($.nodeId);
                    });
                    for (var m = this.graphManager.getAllNodes(), E, p3 = 0; p3 < m.length; p3++)
                      if (E = m[p3], E.getChild() != null) {
                        var R = y(E);
                        R > 0 && (E.fixedNodeWeight = R);
                      }
                  }
                  if (this.constraints.relativePlacementConstraint) {
                    var M = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
                    if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(w) {
                      n.fixedNodesOnHorizontal.add(w), n.fixedNodesOnVertical.add(w);
                    }), this.constraints.alignmentConstraint) {
                      if (this.constraints.alignmentConstraint.vertical)
                        for (var W = this.constraints.alignmentConstraint.vertical, p3 = 0; p3 < W.length; p3++)
                          this.dummyToNodeForVerticalAlignment.set("dummy" + p3, []), W[p3].forEach(function(H) {
                            M.set(H, "dummy" + p3), n.dummyToNodeForVerticalAlignment.get("dummy" + p3).push(H), n.fixedNodeSet.has(H) && n.fixedNodesOnHorizontal.add("dummy" + p3);
                          });
                      if (this.constraints.alignmentConstraint.horizontal)
                        for (var D = this.constraints.alignmentConstraint.horizontal, p3 = 0; p3 < D.length; p3++)
                          this.dummyToNodeForHorizontalAlignment.set("dummy" + p3, []), D[p3].forEach(function(H) {
                            S.set(H, "dummy" + p3), n.dummyToNodeForHorizontalAlignment.get("dummy" + p3).push(H), n.fixedNodeSet.has(H) && n.fixedNodesOnVertical.add("dummy" + p3);
                          });
                    }
                    if (s.RELAX_MOVEMENT_ON_CONSTRAINTS)
                      this.shuffle = function(w) {
                        var H, $, _;
                        for (_ = w.length - 1; _ >= 2 * w.length / 3; _--)
                          H = Math.floor(Math.random() * (_ + 1)), $ = w[_], w[_] = w[H], w[H] = $;
                        return w;
                      }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(w) {
                        if (w.left) {
                          var H = M.has(w.left) ? M.get(w.left) : w.left, $ = M.has(w.right) ? M.get(w.right) : w.right;
                          n.nodesInRelativeHorizontal.includes(H) || (n.nodesInRelativeHorizontal.push(H), n.nodeToRelativeConstraintMapHorizontal.set(H, []), n.dummyToNodeForVerticalAlignment.has(H) ? n.nodeToTempPositionMapHorizontal.set(H, n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(H)[0]).getCenterX()) : n.nodeToTempPositionMapHorizontal.set(H, n.idToNodeMap.get(H).getCenterX())), n.nodesInRelativeHorizontal.includes($) || (n.nodesInRelativeHorizontal.push($), n.nodeToRelativeConstraintMapHorizontal.set($, []), n.dummyToNodeForVerticalAlignment.has($) ? n.nodeToTempPositionMapHorizontal.set($, n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get($)[0]).getCenterX()) : n.nodeToTempPositionMapHorizontal.set($, n.idToNodeMap.get($).getCenterX())), n.nodeToRelativeConstraintMapHorizontal.get(H).push({ right: $, gap: w.gap }), n.nodeToRelativeConstraintMapHorizontal.get($).push({ left: H, gap: w.gap });
                        } else {
                          var _ = S.has(w.top) ? S.get(w.top) : w.top, ht2 = S.has(w.bottom) ? S.get(w.bottom) : w.bottom;
                          n.nodesInRelativeVertical.includes(_) || (n.nodesInRelativeVertical.push(_), n.nodeToRelativeConstraintMapVertical.set(_, []), n.dummyToNodeForHorizontalAlignment.has(_) ? n.nodeToTempPositionMapVertical.set(_, n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(_)[0]).getCenterY()) : n.nodeToTempPositionMapVertical.set(_, n.idToNodeMap.get(_).getCenterY())), n.nodesInRelativeVertical.includes(ht2) || (n.nodesInRelativeVertical.push(ht2), n.nodeToRelativeConstraintMapVertical.set(ht2, []), n.dummyToNodeForHorizontalAlignment.has(ht2) ? n.nodeToTempPositionMapVertical.set(ht2, n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(ht2)[0]).getCenterY()) : n.nodeToTempPositionMapVertical.set(ht2, n.idToNodeMap.get(ht2).getCenterY())), n.nodeToRelativeConstraintMapVertical.get(_).push({ bottom: ht2, gap: w.gap }), n.nodeToRelativeConstraintMapVertical.get(ht2).push({ top: _, gap: w.gap });
                        }
                      });
                    else {
                      var q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
                      this.constraints.relativePlacementConstraint.forEach(function(w) {
                        if (w.left) {
                          var H = M.has(w.left) ? M.get(w.left) : w.left, $ = M.has(w.right) ? M.get(w.right) : w.right;
                          q.has(H) ? q.get(H).push($) : q.set(H, [$]), q.has($) ? q.get($).push(H) : q.set($, [H]);
                        } else {
                          var _ = S.has(w.top) ? S.get(w.top) : w.top, ht2 = S.has(w.bottom) ? S.get(w.bottom) : w.bottom;
                          V.has(_) ? V.get(_).push(ht2) : V.set(_, [ht2]), V.has(ht2) ? V.get(ht2).push(_) : V.set(ht2, [_]);
                        }
                      });
                      var X = function(H, $) {
                        var _ = [], ht2 = [], Q = new K(), It = /* @__PURE__ */ new Set(), Nt = 0;
                        return H.forEach(function(vt, rt) {
                          if (!It.has(rt)) {
                            _[Nt] = [], ht2[Nt] = false;
                            var gt = rt;
                            for (Q.push(gt), It.add(gt), _[Nt].push(gt); Q.length != 0; ) {
                              gt = Q.shift(), $.has(gt) && (ht2[Nt] = true);
                              var mt = H.get(gt);
                              mt.forEach(function(At) {
                                It.has(At) || (Q.push(At), It.add(At), _[Nt].push(At));
                              });
                            }
                            Nt++;
                          }
                        }), { components: _, isFixed: ht2 };
                      }, et = X(q, n.fixedNodesOnHorizontal);
                      this.componentsOnHorizontal = et.components, this.fixedComponentsOnHorizontal = et.isFixed;
                      var z = X(V, n.fixedNodesOnVertical);
                      this.componentsOnVertical = z.components, this.fixedComponentsOnVertical = z.isFixed;
                    }
                  }
                }, O.prototype.updateDisplacements = function() {
                  var n = this;
                  if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(z) {
                    var w = n.idToNodeMap.get(z.nodeId);
                    w.displacementX = 0, w.displacementY = 0;
                  }), this.constraints.alignmentConstraint) {
                    if (this.constraints.alignmentConstraint.vertical)
                      for (var m = this.constraints.alignmentConstraint.vertical, p3 = 0; p3 < m.length; p3++) {
                        for (var E = 0, y = 0; y < m[p3].length; y++) {
                          if (this.fixedNodeSet.has(m[p3][y])) {
                            E = 0;
                            break;
                          }
                          E += this.idToNodeMap.get(m[p3][y]).displacementX;
                        }
                        for (var R = E / m[p3].length, y = 0; y < m[p3].length; y++)
                          this.idToNodeMap.get(m[p3][y]).displacementX = R;
                      }
                    if (this.constraints.alignmentConstraint.horizontal)
                      for (var M = this.constraints.alignmentConstraint.horizontal, p3 = 0; p3 < M.length; p3++) {
                        for (var S = 0, y = 0; y < M[p3].length; y++) {
                          if (this.fixedNodeSet.has(M[p3][y])) {
                            S = 0;
                            break;
                          }
                          S += this.idToNodeMap.get(M[p3][y]).displacementY;
                        }
                        for (var W = S / M[p3].length, y = 0; y < M[p3].length; y++)
                          this.idToNodeMap.get(M[p3][y]).displacementY = W;
                      }
                  }
                  if (this.constraints.relativePlacementConstraint)
                    if (s.RELAX_MOVEMENT_ON_CONSTRAINTS)
                      this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(z) {
                        if (!n.fixedNodesOnHorizontal.has(z)) {
                          var w = 0;
                          n.dummyToNodeForVerticalAlignment.has(z) ? w = n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(z)[0]).displacementX : w = n.idToNodeMap.get(z).displacementX, n.nodeToRelativeConstraintMapHorizontal.get(z).forEach(function(H) {
                            if (H.right) {
                              var $ = n.nodeToTempPositionMapHorizontal.get(H.right) - n.nodeToTempPositionMapHorizontal.get(z) - w;
                              $ < H.gap && (w -= H.gap - $);
                            } else {
                              var $ = n.nodeToTempPositionMapHorizontal.get(z) - n.nodeToTempPositionMapHorizontal.get(H.left) + w;
                              $ < H.gap && (w += H.gap - $);
                            }
                          }), n.nodeToTempPositionMapHorizontal.set(z, n.nodeToTempPositionMapHorizontal.get(z) + w), n.dummyToNodeForVerticalAlignment.has(z) ? n.dummyToNodeForVerticalAlignment.get(z).forEach(function(H) {
                            n.idToNodeMap.get(H).displacementX = w;
                          }) : n.idToNodeMap.get(z).displacementX = w;
                        }
                      }), this.nodesInRelativeVertical.forEach(function(z) {
                        if (!n.fixedNodesOnHorizontal.has(z)) {
                          var w = 0;
                          n.dummyToNodeForHorizontalAlignment.has(z) ? w = n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(z)[0]).displacementY : w = n.idToNodeMap.get(z).displacementY, n.nodeToRelativeConstraintMapVertical.get(z).forEach(function(H) {
                            if (H.bottom) {
                              var $ = n.nodeToTempPositionMapVertical.get(H.bottom) - n.nodeToTempPositionMapVertical.get(z) - w;
                              $ < H.gap && (w -= H.gap - $);
                            } else {
                              var $ = n.nodeToTempPositionMapVertical.get(z) - n.nodeToTempPositionMapVertical.get(H.top) + w;
                              $ < H.gap && (w += H.gap - $);
                            }
                          }), n.nodeToTempPositionMapVertical.set(z, n.nodeToTempPositionMapVertical.get(z) + w), n.dummyToNodeForHorizontalAlignment.has(z) ? n.dummyToNodeForHorizontalAlignment.get(z).forEach(function(H) {
                            n.idToNodeMap.get(H).displacementY = w;
                          }) : n.idToNodeMap.get(z).displacementY = w;
                        }
                      });
                    else {
                      for (var p3 = 0; p3 < this.componentsOnHorizontal.length; p3++) {
                        var D = this.componentsOnHorizontal[p3];
                        if (this.fixedComponentsOnHorizontal[p3])
                          for (var y = 0; y < D.length; y++)
                            this.dummyToNodeForVerticalAlignment.has(D[y]) ? this.dummyToNodeForVerticalAlignment.get(D[y]).forEach(function(H) {
                              n.idToNodeMap.get(H).displacementX = 0;
                            }) : this.idToNodeMap.get(D[y]).displacementX = 0;
                        else {
                          for (var q = 0, V = 0, y = 0; y < D.length; y++)
                            if (this.dummyToNodeForVerticalAlignment.has(D[y])) {
                              var X = this.dummyToNodeForVerticalAlignment.get(D[y]);
                              q += X.length * this.idToNodeMap.get(X[0]).displacementX, V += X.length;
                            } else
                              q += this.idToNodeMap.get(D[y]).displacementX, V++;
                          for (var et = q / V, y = 0; y < D.length; y++)
                            this.dummyToNodeForVerticalAlignment.has(D[y]) ? this.dummyToNodeForVerticalAlignment.get(D[y]).forEach(function(H) {
                              n.idToNodeMap.get(H).displacementX = et;
                            }) : this.idToNodeMap.get(D[y]).displacementX = et;
                        }
                      }
                      for (var p3 = 0; p3 < this.componentsOnVertical.length; p3++) {
                        var D = this.componentsOnVertical[p3];
                        if (this.fixedComponentsOnVertical[p3])
                          for (var y = 0; y < D.length; y++)
                            this.dummyToNodeForHorizontalAlignment.has(D[y]) ? this.dummyToNodeForHorizontalAlignment.get(D[y]).forEach(function($) {
                              n.idToNodeMap.get($).displacementY = 0;
                            }) : this.idToNodeMap.get(D[y]).displacementY = 0;
                        else {
                          for (var q = 0, V = 0, y = 0; y < D.length; y++)
                            if (this.dummyToNodeForHorizontalAlignment.has(D[y])) {
                              var X = this.dummyToNodeForHorizontalAlignment.get(D[y]);
                              q += X.length * this.idToNodeMap.get(X[0]).displacementY, V += X.length;
                            } else
                              q += this.idToNodeMap.get(D[y]).displacementY, V++;
                          for (var et = q / V, y = 0; y < D.length; y++)
                            this.dummyToNodeForHorizontalAlignment.has(D[y]) ? this.dummyToNodeForHorizontalAlignment.get(D[y]).forEach(function(Q) {
                              n.idToNodeMap.get(Q).displacementY = et;
                            }) : this.idToNodeMap.get(D[y]).displacementY = et;
                        }
                      }
                    }
                }, O.prototype.calculateNodesToApplyGravitationTo = function() {
                  var n = [], m, p3 = this.graphManager.getGraphs(), E = p3.length, y;
                  for (y = 0; y < E; y++)
                    m = p3[y], m.updateConnected(), m.isConnected || (n = n.concat(m.getNodes()));
                  return n;
                }, O.prototype.createBendpoints = function() {
                  var n = [];
                  n = n.concat(this.graphManager.getAllEdges());
                  var m = /* @__PURE__ */ new Set(), p3;
                  for (p3 = 0; p3 < n.length; p3++) {
                    var E = n[p3];
                    if (!m.has(E)) {
                      var y = E.getSource(), R = E.getTarget();
                      if (y == R)
                        E.getBendpoints().push(new v()), E.getBendpoints().push(new v()), this.createDummyNodesForBendpoints(E), m.add(E);
                      else {
                        var M = [];
                        if (M = M.concat(y.getEdgeListToNode(R)), M = M.concat(R.getEdgeListToNode(y)), !m.has(M[0])) {
                          if (M.length > 1) {
                            var S;
                            for (S = 0; S < M.length; S++) {
                              var W = M[S];
                              W.getBendpoints().push(new v()), this.createDummyNodesForBendpoints(W);
                            }
                          }
                          M.forEach(function(D) {
                            m.add(D);
                          });
                        }
                      }
                    }
                    if (m.size == n.length)
                      break;
                  }
                }, O.prototype.positionNodesRadially = function(n) {
                  for (var m = new d(0, 0), p3 = Math.ceil(Math.sqrt(n.length)), E = 0, y = 0, R = 0, M = new v(0, 0), S = 0; S < n.length; S++) {
                    S % p3 == 0 && (R = 0, y = E, S != 0 && (y += s.DEFAULT_COMPONENT_SEPERATION), E = 0);
                    var W = n[S], D = b.findCenterOfTree(W);
                    m.x = R, m.y = y, M = O.radialLayout(W, D, m), M.y > E && (E = Math.floor(M.y)), R = Math.floor(M.x + s.DEFAULT_COMPONENT_SEPERATION);
                  }
                  this.transform(new v(T.WORLD_CENTER_X - M.x / 2, T.WORLD_CENTER_Y - M.y / 2));
                }, O.radialLayout = function(n, m, p3) {
                  var E = Math.max(this.maxDiagonalInTree(n), s.DEFAULT_RADIAL_SEPARATION);
                  O.branchRadialLayout(m, null, 0, 359, 0, E);
                  var y = Z.calculateBounds(n), R = new Y();
                  R.setDeviceOrgX(y.getMinX()), R.setDeviceOrgY(y.getMinY()), R.setWorldOrgX(p3.x), R.setWorldOrgY(p3.y);
                  for (var M = 0; M < n.length; M++) {
                    var S = n[M];
                    S.transform(R);
                  }
                  var W = new v(y.getMaxX(), y.getMaxY());
                  return R.inverseTransformPoint(W);
                }, O.branchRadialLayout = function(n, m, p3, E, y, R) {
                  var M = (E - p3 + 1) / 2;
                  M < 0 && (M += 180);
                  var S = (M + p3) % 360, W = S * G.TWO_PI / 360, D = y * Math.cos(W), q = y * Math.sin(W);
                  n.setCenter(D, q);
                  var V = [];
                  V = V.concat(n.getEdges());
                  var X = V.length;
                  m != null && X--;
                  for (var et = 0, z = V.length, w, H = n.getEdgesBetween(m); H.length > 1; ) {
                    var $ = H[0];
                    H.splice(0, 1);
                    var _ = V.indexOf($);
                    _ >= 0 && V.splice(_, 1), z--, X--;
                  }
                  m != null ? w = (V.indexOf(H[0]) + 1) % z : w = 0;
                  for (var ht2 = Math.abs(E - p3) / X, Q = w; et != X; Q = ++Q % z) {
                    var It = V[Q].getOtherEnd(n);
                    if (It != m) {
                      var Nt = (p3 + et * ht2) % 360, vt = (Nt + ht2) % 360;
                      O.branchRadialLayout(It, n, Nt, vt, y + R, R), et++;
                    }
                  }
                }, O.maxDiagonalInTree = function(n) {
                  for (var m = C.MIN_VALUE, p3 = 0; p3 < n.length; p3++) {
                    var E = n[p3], y = E.getDiagonal();
                    y > m && (m = y);
                  }
                  return m;
                }, O.prototype.calcRepulsionRange = function() {
                  return 2 * (this.level + 1) * this.idealEdgeLength;
                }, O.prototype.groupZeroDegreeMembers = function() {
                  var n = this, m = {};
                  this.memberGroups = {}, this.idToDummyNode = {};
                  for (var p3 = [], E = this.graphManager.getAllNodes(), y = 0; y < E.length; y++) {
                    var R = E[y], M = R.getParent();
                    this.getNodeDegreeWithChildren(R) === 0 && (M.id == null || !this.getToBeTiled(M)) && p3.push(R);
                  }
                  for (var y = 0; y < p3.length; y++) {
                    var R = p3[y], S = R.getParent().id;
                    typeof m[S] > "u" && (m[S] = []), m[S] = m[S].concat(R);
                  }
                  Object.keys(m).forEach(function(W) {
                    if (m[W].length > 1) {
                      var D = "DummyCompound_" + W;
                      n.memberGroups[D] = m[W];
                      var q = m[W][0].getParent(), V = new t2(n.graphManager);
                      V.id = D, V.paddingLeft = q.paddingLeft || 0, V.paddingRight = q.paddingRight || 0, V.paddingBottom = q.paddingBottom || 0, V.paddingTop = q.paddingTop || 0, n.idToDummyNode[D] = V;
                      var X = n.getGraphManager().add(n.newGraph(), V), et = q.getChild();
                      et.add(V);
                      for (var z = 0; z < m[W].length; z++) {
                        var w = m[W][z];
                        et.remove(w), X.add(w);
                      }
                    }
                  });
                }, O.prototype.clearCompounds = function() {
                  var n = {}, m = {};
                  this.performDFSOnCompounds();
                  for (var p3 = 0; p3 < this.compoundOrder.length; p3++)
                    m[this.compoundOrder[p3].id] = this.compoundOrder[p3], n[this.compoundOrder[p3].id] = [].concat(this.compoundOrder[p3].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[p3].getChild()), this.compoundOrder[p3].child = null;
                  this.graphManager.resetAllNodes(), this.tileCompoundMembers(n, m);
                }, O.prototype.clearZeroDegreeMembers = function() {
                  var n = this, m = this.tiledZeroDegreePack = [];
                  Object.keys(this.memberGroups).forEach(function(p3) {
                    var E = n.idToDummyNode[p3];
                    if (m[p3] = n.tileNodes(n.memberGroups[p3], E.paddingLeft + E.paddingRight), E.rect.width = m[p3].width, E.rect.height = m[p3].height, E.setCenter(m[p3].centerX, m[p3].centerY), E.labelMarginLeft = 0, E.labelMarginTop = 0, s.NODE_DIMENSIONS_INCLUDE_LABELS) {
                      var y = E.rect.width, R = E.rect.height;
                      E.labelWidth && (E.labelPosHorizontal == "left" ? (E.rect.x -= E.labelWidth, E.setWidth(y + E.labelWidth), E.labelMarginLeft = E.labelWidth) : E.labelPosHorizontal == "center" && E.labelWidth > y ? (E.rect.x -= (E.labelWidth - y) / 2, E.setWidth(E.labelWidth), E.labelMarginLeft = (E.labelWidth - y) / 2) : E.labelPosHorizontal == "right" && E.setWidth(y + E.labelWidth)), E.labelHeight && (E.labelPosVertical == "top" ? (E.rect.y -= E.labelHeight, E.setHeight(R + E.labelHeight), E.labelMarginTop = E.labelHeight) : E.labelPosVertical == "center" && E.labelHeight > R ? (E.rect.y -= (E.labelHeight - R) / 2, E.setHeight(E.labelHeight), E.labelMarginTop = (E.labelHeight - R) / 2) : E.labelPosVertical == "bottom" && E.setHeight(R + E.labelHeight));
                    }
                  });
                }, O.prototype.repopulateCompounds = function() {
                  for (var n = this.compoundOrder.length - 1; n >= 0; n--) {
                    var m = this.compoundOrder[n], p3 = m.id, E = m.paddingLeft, y = m.paddingTop, R = m.labelMarginLeft, M = m.labelMarginTop;
                    this.adjustLocations(this.tiledMemberPack[p3], m.rect.x, m.rect.y, E, y, R, M);
                  }
                }, O.prototype.repopulateZeroDegreeMembers = function() {
                  var n = this, m = this.tiledZeroDegreePack;
                  Object.keys(m).forEach(function(p3) {
                    var E = n.idToDummyNode[p3], y = E.paddingLeft, R = E.paddingTop, M = E.labelMarginLeft, S = E.labelMarginTop;
                    n.adjustLocations(m[p3], E.rect.x, E.rect.y, y, R, M, S);
                  });
                }, O.prototype.getToBeTiled = function(n) {
                  var m = n.id;
                  if (this.toBeTiled[m] != null)
                    return this.toBeTiled[m];
                  var p3 = n.getChild();
                  if (p3 == null)
                    return this.toBeTiled[m] = false, false;
                  for (var E = p3.getNodes(), y = 0; y < E.length; y++) {
                    var R = E[y];
                    if (this.getNodeDegree(R) > 0)
                      return this.toBeTiled[m] = false, false;
                    if (R.getChild() == null) {
                      this.toBeTiled[R.id] = false;
                      continue;
                    }
                    if (!this.getToBeTiled(R))
                      return this.toBeTiled[m] = false, false;
                  }
                  return this.toBeTiled[m] = true, true;
                }, O.prototype.getNodeDegree = function(n) {
                  n.id;
                  for (var m = n.getEdges(), p3 = 0, E = 0; E < m.length; E++) {
                    var y = m[E];
                    y.getSource().id !== y.getTarget().id && (p3 = p3 + 1);
                  }
                  return p3;
                }, O.prototype.getNodeDegreeWithChildren = function(n) {
                  var m = this.getNodeDegree(n);
                  if (n.getChild() == null)
                    return m;
                  for (var p3 = n.getChild().getNodes(), E = 0; E < p3.length; E++) {
                    var y = p3[E];
                    m += this.getNodeDegreeWithChildren(y);
                  }
                  return m;
                }, O.prototype.performDFSOnCompounds = function() {
                  this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
                }, O.prototype.fillCompexOrderByDFS = function(n) {
                  for (var m = 0; m < n.length; m++) {
                    var p3 = n[m];
                    p3.getChild() != null && this.fillCompexOrderByDFS(p3.getChild().getNodes()), this.getToBeTiled(p3) && this.compoundOrder.push(p3);
                  }
                }, O.prototype.adjustLocations = function(n, m, p3, E, y, R, M) {
                  m += E + R, p3 += y + M;
                  for (var S = m, W = 0; W < n.rows.length; W++) {
                    var D = n.rows[W];
                    m = S;
                    for (var q = 0, V = 0; V < D.length; V++) {
                      var X = D[V];
                      X.rect.x = m, X.rect.y = p3, m += X.rect.width + n.horizontalPadding, X.rect.height > q && (q = X.rect.height);
                    }
                    p3 += q + n.verticalPadding;
                  }
                }, O.prototype.tileCompoundMembers = function(n, m) {
                  var p3 = this;
                  this.tiledMemberPack = [], Object.keys(n).forEach(function(E) {
                    var y = m[E];
                    if (p3.tiledMemberPack[E] = p3.tileNodes(n[E], y.paddingLeft + y.paddingRight), y.rect.width = p3.tiledMemberPack[E].width, y.rect.height = p3.tiledMemberPack[E].height, y.setCenter(p3.tiledMemberPack[E].centerX, p3.tiledMemberPack[E].centerY), y.labelMarginLeft = 0, y.labelMarginTop = 0, s.NODE_DIMENSIONS_INCLUDE_LABELS) {
                      var R = y.rect.width, M = y.rect.height;
                      y.labelWidth && (y.labelPosHorizontal == "left" ? (y.rect.x -= y.labelWidth, y.setWidth(R + y.labelWidth), y.labelMarginLeft = y.labelWidth) : y.labelPosHorizontal == "center" && y.labelWidth > R ? (y.rect.x -= (y.labelWidth - R) / 2, y.setWidth(y.labelWidth), y.labelMarginLeft = (y.labelWidth - R) / 2) : y.labelPosHorizontal == "right" && y.setWidth(R + y.labelWidth)), y.labelHeight && (y.labelPosVertical == "top" ? (y.rect.y -= y.labelHeight, y.setHeight(M + y.labelHeight), y.labelMarginTop = y.labelHeight) : y.labelPosVertical == "center" && y.labelHeight > M ? (y.rect.y -= (y.labelHeight - M) / 2, y.setHeight(y.labelHeight), y.labelMarginTop = (y.labelHeight - M) / 2) : y.labelPosVertical == "bottom" && y.setHeight(M + y.labelHeight));
                    }
                  });
                }, O.prototype.tileNodes = function(n, m) {
                  var p3 = this.tileNodesByFavoringDim(n, m, true), E = this.tileNodesByFavoringDim(n, m, false), y = this.getOrgRatio(p3), R = this.getOrgRatio(E), M;
                  return R < y ? M = E : M = p3, M;
                }, O.prototype.getOrgRatio = function(n) {
                  var m = n.width, p3 = n.height, E = m / p3;
                  return E < 1 && (E = 1 / E), E;
                }, O.prototype.calcIdealRowWidth = function(n, m) {
                  var p3 = s.TILING_PADDING_VERTICAL, E = s.TILING_PADDING_HORIZONTAL, y = n.length, R = 0, M = 0, S = 0;
                  n.forEach(function(z) {
                    R += z.getWidth(), M += z.getHeight(), z.getWidth() > S && (S = z.getWidth());
                  });
                  var W = R / y, D = M / y, q = Math.pow(p3 - E, 2) + 4 * (W + E) * (D + p3) * y, V = (E - p3 + Math.sqrt(q)) / (2 * (W + E)), X;
                  m ? (X = Math.ceil(V), X == V && X++) : X = Math.floor(V);
                  var et = X * (W + E) - E;
                  return S > et && (et = S), et += E * 2, et;
                }, O.prototype.tileNodesByFavoringDim = function(n, m, p3) {
                  var E = s.TILING_PADDING_VERTICAL, y = s.TILING_PADDING_HORIZONTAL, R = s.TILING_COMPARE_BY, M = {
                    rows: [],
                    rowWidth: [],
                    rowHeight: [],
                    width: 0,
                    height: m,
                    // assume minHeight equals to minWidth
                    verticalPadding: E,
                    horizontalPadding: y,
                    centerX: 0,
                    centerY: 0
                  };
                  R && (M.idealRowWidth = this.calcIdealRowWidth(n, p3));
                  var S = function(w) {
                    return w.rect.width * w.rect.height;
                  }, W = function(w, H) {
                    return S(H) - S(w);
                  };
                  n.sort(function(z, w) {
                    var H = W;
                    return M.idealRowWidth ? (H = R, H(z.id, w.id)) : H(z, w);
                  });
                  for (var D = 0, q = 0, V = 0; V < n.length; V++) {
                    var X = n[V];
                    D += X.getCenterX(), q += X.getCenterY();
                  }
                  M.centerX = D / n.length, M.centerY = q / n.length;
                  for (var V = 0; V < n.length; V++) {
                    var X = n[V];
                    if (M.rows.length == 0)
                      this.insertNodeToRow(M, X, 0, m);
                    else if (this.canAddHorizontal(M, X.rect.width, X.rect.height)) {
                      var et = M.rows.length - 1;
                      M.idealRowWidth || (et = this.getShortestRowIndex(M)), this.insertNodeToRow(M, X, et, m);
                    } else
                      this.insertNodeToRow(M, X, M.rows.length, m);
                    this.shiftToLastRow(M);
                  }
                  return M;
                }, O.prototype.insertNodeToRow = function(n, m, p3, E) {
                  var y = E;
                  if (p3 == n.rows.length) {
                    var R = [];
                    n.rows.push(R), n.rowWidth.push(y), n.rowHeight.push(0);
                  }
                  var M = n.rowWidth[p3] + m.rect.width;
                  n.rows[p3].length > 0 && (M += n.horizontalPadding), n.rowWidth[p3] = M, n.width < M && (n.width = M);
                  var S = m.rect.height;
                  p3 > 0 && (S += n.verticalPadding);
                  var W = 0;
                  S > n.rowHeight[p3] && (W = n.rowHeight[p3], n.rowHeight[p3] = S, W = n.rowHeight[p3] - W), n.height += W, n.rows[p3].push(m);
                }, O.prototype.getShortestRowIndex = function(n) {
                  for (var m = -1, p3 = Number.MAX_VALUE, E = 0; E < n.rows.length; E++)
                    n.rowWidth[E] < p3 && (m = E, p3 = n.rowWidth[E]);
                  return m;
                }, O.prototype.getLongestRowIndex = function(n) {
                  for (var m = -1, p3 = Number.MIN_VALUE, E = 0; E < n.rows.length; E++)
                    n.rowWidth[E] > p3 && (m = E, p3 = n.rowWidth[E]);
                  return m;
                }, O.prototype.canAddHorizontal = function(n, m, p3) {
                  if (n.idealRowWidth) {
                    var E = n.rows.length - 1, y = n.rowWidth[E];
                    return y + m + n.horizontalPadding <= n.idealRowWidth;
                  }
                  var R = this.getShortestRowIndex(n);
                  if (R < 0)
                    return true;
                  var M = n.rowWidth[R];
                  if (M + n.horizontalPadding + m <= n.width) return true;
                  var S = 0;
                  n.rowHeight[R] < p3 && R > 0 && (S = p3 + n.verticalPadding - n.rowHeight[R]);
                  var W;
                  n.width - M >= m + n.horizontalPadding ? W = (n.height + S) / (M + m + n.horizontalPadding) : W = (n.height + S) / n.width, S = p3 + n.verticalPadding;
                  var D;
                  return n.width < m ? D = (n.height + S) / m : D = (n.height + S) / n.width, D < 1 && (D = 1 / D), W < 1 && (W = 1 / W), W < D;
                }, O.prototype.shiftToLastRow = function(n) {
                  var m = this.getLongestRowIndex(n), p3 = n.rowWidth.length - 1, E = n.rows[m], y = E[E.length - 1], R = y.width + n.horizontalPadding;
                  if (n.width - n.rowWidth[p3] > R && m != p3) {
                    E.splice(-1, 1), n.rows[p3].push(y), n.rowWidth[m] = n.rowWidth[m] - R, n.rowWidth[p3] = n.rowWidth[p3] + R, n.width = n.rowWidth[instance.getLongestRowIndex(n)];
                    for (var M = Number.MIN_VALUE, S = 0; S < E.length; S++)
                      E[S].height > M && (M = E[S].height);
                    m > 0 && (M += n.verticalPadding);
                    var W = n.rowHeight[m] + n.rowHeight[p3];
                    n.rowHeight[m] = M, n.rowHeight[p3] < y.height + n.verticalPadding && (n.rowHeight[p3] = y.height + n.verticalPadding);
                    var D = n.rowHeight[m] + n.rowHeight[p3];
                    n.height += D - W, this.shiftToLastRow(n);
                  }
                }, O.prototype.tilingPreLayout = function() {
                  s.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
                }, O.prototype.tilingPostLayout = function() {
                  s.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
                }, O.prototype.reduceTrees = function() {
                  for (var n = [], m = true, p3; m; ) {
                    var E = this.graphManager.getAllNodes(), y = [];
                    m = false;
                    for (var R = 0; R < E.length; R++)
                      if (p3 = E[R], p3.getEdges().length == 1 && !p3.getEdges()[0].isInterGraph && p3.getChild() == null) {
                        if (s.PURE_INCREMENTAL) {
                          var M = p3.getEdges()[0].getOtherEnd(p3), S = new L(p3.getCenterX() - M.getCenterX(), p3.getCenterY() - M.getCenterY());
                          y.push([p3, p3.getEdges()[0], p3.getOwner(), S]);
                        } else
                          y.push([p3, p3.getEdges()[0], p3.getOwner()]);
                        m = true;
                      }
                    if (m == true) {
                      for (var W = [], D = 0; D < y.length; D++)
                        y[D][0].getEdges().length == 1 && (W.push(y[D]), y[D][0].getOwner().remove(y[D][0]));
                      n.push(W), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                    }
                  }
                  this.prunedNodesAll = n;
                }, O.prototype.growTree = function(n) {
                  for (var m = n.length, p3 = n[m - 1], E, y = 0; y < p3.length; y++)
                    E = p3[y], this.findPlaceforPrunedNode(E), E[2].add(E[0]), E[2].add(E[1], E[1].source, E[1].target);
                  n.splice(n.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }, O.prototype.findPlaceforPrunedNode = function(n) {
                  var m, p3, E = n[0];
                  if (E == n[1].source ? p3 = n[1].target : p3 = n[1].source, s.PURE_INCREMENTAL)
                    E.setCenter(p3.getCenterX() + n[3].getWidth(), p3.getCenterY() + n[3].getHeight());
                  else {
                    var y = p3.startX, R = p3.finishX, M = p3.startY, S = p3.finishY, W = 0, D = 0, q = 0, V = 0, X = [W, q, D, V];
                    if (M > 0)
                      for (var et = y; et <= R; et++)
                        X[0] += this.grid[et][M - 1].length + this.grid[et][M].length - 1;
                    if (R < this.grid.length - 1)
                      for (var et = M; et <= S; et++)
                        X[1] += this.grid[R + 1][et].length + this.grid[R][et].length - 1;
                    if (S < this.grid[0].length - 1)
                      for (var et = y; et <= R; et++)
                        X[2] += this.grid[et][S + 1].length + this.grid[et][S].length - 1;
                    if (y > 0)
                      for (var et = M; et <= S; et++)
                        X[3] += this.grid[y - 1][et].length + this.grid[y][et].length - 1;
                    for (var z = C.MAX_VALUE, w, H, $ = 0; $ < X.length; $++)
                      X[$] < z ? (z = X[$], w = 1, H = $) : X[$] == z && w++;
                    if (w == 3 && z == 0)
                      X[0] == 0 && X[1] == 0 && X[2] == 0 ? m = 1 : X[0] == 0 && X[1] == 0 && X[3] == 0 ? m = 0 : X[0] == 0 && X[2] == 0 && X[3] == 0 ? m = 3 : X[1] == 0 && X[2] == 0 && X[3] == 0 && (m = 2);
                    else if (w == 2 && z == 0) {
                      var _ = Math.floor(Math.random() * 2);
                      X[0] == 0 && X[1] == 0 ? _ == 0 ? m = 0 : m = 1 : X[0] == 0 && X[2] == 0 ? _ == 0 ? m = 0 : m = 2 : X[0] == 0 && X[3] == 0 ? _ == 0 ? m = 0 : m = 3 : X[1] == 0 && X[2] == 0 ? _ == 0 ? m = 1 : m = 2 : X[1] == 0 && X[3] == 0 ? _ == 0 ? m = 1 : m = 3 : _ == 0 ? m = 2 : m = 3;
                    } else if (w == 4 && z == 0) {
                      var _ = Math.floor(Math.random() * 4);
                      m = _;
                    } else
                      m = H;
                    m == 0 ? E.setCenter(p3.getCenterX(), p3.getCenterY() - p3.getHeight() / 2 - f.DEFAULT_EDGE_LENGTH - E.getHeight() / 2) : m == 1 ? E.setCenter(p3.getCenterX() + p3.getWidth() / 2 + f.DEFAULT_EDGE_LENGTH + E.getWidth() / 2, p3.getCenterY()) : m == 2 ? E.setCenter(p3.getCenterX(), p3.getCenterY() + p3.getHeight() / 2 + f.DEFAULT_EDGE_LENGTH + E.getHeight() / 2) : E.setCenter(p3.getCenterX() - p3.getWidth() / 2 - f.DEFAULT_EDGE_LENGTH - E.getWidth() / 2, p3.getCenterY());
                  }
                }, a.exports = O;
              })
            ),
            /***/
            991: (
              /***/
              ((a, e, r) => {
                var l = r(551).FDLayoutNode, i = r(551).IMath;
                function g(o, s, c, f) {
                  l.call(this, o, s, c, f);
                }
                g.prototype = Object.create(l.prototype);
                for (var t2 in l)
                  g[t2] = l[t2];
                g.prototype.calculateDisplacement = function() {
                  var o = this.graphManager.getLayout();
                  this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += o.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += o.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += o.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += o.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > o.coolingFactor * o.maxNodeDisplacement && (this.displacementX = o.coolingFactor * o.maxNodeDisplacement * i.sign(this.displacementX)), Math.abs(this.displacementY) > o.coolingFactor * o.maxNodeDisplacement && (this.displacementY = o.coolingFactor * o.maxNodeDisplacement * i.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
                }, g.prototype.propogateDisplacementToChildren = function(o, s) {
                  for (var c = this.getChild().getNodes(), f, T = 0; T < c.length; T++)
                    f = c[T], f.getChild() == null ? (f.displacementX += o, f.displacementY += s) : f.propogateDisplacementToChildren(o, s);
                }, g.prototype.move = function() {
                  var o = this.graphManager.getLayout();
                  (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), o.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
                }, g.prototype.setPred1 = function(o) {
                  this.pred1 = o;
                }, g.prototype.getPred1 = function() {
                  return pred1;
                }, g.prototype.getPred2 = function() {
                  return pred2;
                }, g.prototype.setNext = function(o) {
                  this.next = o;
                }, g.prototype.getNext = function() {
                  return next;
                }, g.prototype.setProcessed = function(o) {
                  this.processed = o;
                }, g.prototype.isProcessed = function() {
                  return processed;
                }, a.exports = g;
              })
            ),
            /***/
            902: (
              /***/
              ((a, e, r) => {
                function l(c) {
                  if (Array.isArray(c)) {
                    for (var f = 0, T = Array(c.length); f < c.length; f++)
                      T[f] = c[f];
                    return T;
                  } else
                    return Array.from(c);
                }
                var i = r(806), g = r(551).LinkedList, t2 = r(551).Matrix, o = r(551).SVD;
                function s() {
                }
                s.handleConstraints = function(c) {
                  var f = {};
                  f.fixedNodeConstraint = c.constraints.fixedNodeConstraint, f.alignmentConstraint = c.constraints.alignmentConstraint, f.relativePlacementConstraint = c.constraints.relativePlacementConstraint;
                  for (var T = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), v = [], L = [], b = c.getAllNodes(), C = 0, G = 0; G < b.length; G++) {
                    var Z = b[G];
                    Z.getChild() == null && (d.set(Z.id, C++), v.push(Z.getCenterX()), L.push(Z.getCenterY()), T.set(Z.id, Z));
                  }
                  f.relativePlacementConstraint && f.relativePlacementConstraint.forEach(function(F2) {
                    !F2.gap && F2.gap != 0 && (F2.left ? F2.gap = i.DEFAULT_EDGE_LENGTH + T.get(F2.left).getWidth() / 2 + T.get(F2.right).getWidth() / 2 : F2.gap = i.DEFAULT_EDGE_LENGTH + T.get(F2.top).getHeight() / 2 + T.get(F2.bottom).getHeight() / 2);
                  });
                  var Y = function(U, B) {
                    return { x: U.x - B.x, y: U.y - B.y };
                  }, K = function(U) {
                    var B = 0, J = 0;
                    return U.forEach(function(k) {
                      B += v[d.get(k)], J += L[d.get(k)];
                    }), { x: B / U.size, y: J / U.size };
                  }, O = function(U, B, J, k, at) {
                    function ct(lt, ot) {
                      var Lt = new Set(lt), ft2 = true, st = false, Xt = void 0;
                      try {
                        for (var Tt = ot[Symbol.iterator](), Ct; !(ft2 = (Ct = Tt.next()).done); ft2 = true) {
                          var $t = Ct.value;
                          Lt.add($t);
                        }
                      } catch (bt) {
                        st = true, Xt = bt;
                      } finally {
                        try {
                          !ft2 && Tt.return && Tt.return();
                        } finally {
                          if (st)
                            throw Xt;
                        }
                      }
                      return Lt;
                    }
                    var nt = /* @__PURE__ */ new Map();
                    U.forEach(function(lt, ot) {
                      nt.set(ot, 0);
                    }), U.forEach(function(lt, ot) {
                      lt.forEach(function(Lt) {
                        nt.set(Lt.id, nt.get(Lt.id) + 1);
                      });
                    });
                    var tt = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ut = new g();
                    nt.forEach(function(lt, ot) {
                      lt == 0 ? (ut.push(ot), J || (B == "horizontal" ? tt.set(ot, d.has(ot) ? v[d.get(ot)] : k.get(ot)) : tt.set(ot, d.has(ot) ? L[d.get(ot)] : k.get(ot)))) : tt.set(ot, Number.NEGATIVE_INFINITY), J && j.set(ot, /* @__PURE__ */ new Set([ot]));
                    }), J && at.forEach(function(lt) {
                      var ot = [];
                      if (lt.forEach(function(st) {
                        J.has(st) && ot.push(st);
                      }), ot.length > 0) {
                        var Lt = 0;
                        ot.forEach(function(st) {
                          B == "horizontal" ? (tt.set(st, d.has(st) ? v[d.get(st)] : k.get(st)), Lt += tt.get(st)) : (tt.set(st, d.has(st) ? L[d.get(st)] : k.get(st)), Lt += tt.get(st));
                        }), Lt = Lt / ot.length, lt.forEach(function(st) {
                          J.has(st) || tt.set(st, Lt);
                        });
                      } else {
                        var ft2 = 0;
                        lt.forEach(function(st) {
                          B == "horizontal" ? ft2 += d.has(st) ? v[d.get(st)] : k.get(st) : ft2 += d.has(st) ? L[d.get(st)] : k.get(st);
                        }), ft2 = ft2 / lt.length, lt.forEach(function(st) {
                          tt.set(st, ft2);
                        });
                      }
                    });
                    for (var Mt = function() {
                      var ot = ut.shift(), Lt = U.get(ot);
                      Lt.forEach(function(ft2) {
                        if (tt.get(ft2.id) < tt.get(ot) + ft2.gap)
                          if (J && J.has(ft2.id)) {
                            var st = void 0;
                            if (B == "horizontal" ? st = d.has(ft2.id) ? v[d.get(ft2.id)] : k.get(ft2.id) : st = d.has(ft2.id) ? L[d.get(ft2.id)] : k.get(ft2.id), tt.set(ft2.id, st), st < tt.get(ot) + ft2.gap) {
                              var Xt = tt.get(ot) + ft2.gap - st;
                              j.get(ot).forEach(function(Tt) {
                                tt.set(Tt, tt.get(Tt) - Xt);
                              });
                            }
                          } else
                            tt.set(ft2.id, tt.get(ot) + ft2.gap);
                        nt.set(ft2.id, nt.get(ft2.id) - 1), nt.get(ft2.id) == 0 && ut.push(ft2.id), J && j.set(ft2.id, ct(j.get(ot), j.get(ft2.id)));
                      });
                    }; ut.length != 0; )
                      Mt();
                    if (J) {
                      var pt = /* @__PURE__ */ new Set();
                      U.forEach(function(lt, ot) {
                        lt.length == 0 && pt.add(ot);
                      });
                      var xt = [];
                      j.forEach(function(lt, ot) {
                        if (pt.has(ot)) {
                          var Lt = false, ft2 = true, st = false, Xt = void 0;
                          try {
                            for (var Tt = lt[Symbol.iterator](), Ct; !(ft2 = (Ct = Tt.next()).done); ft2 = true) {
                              var $t = Ct.value;
                              J.has($t) && (Lt = true);
                            }
                          } catch (St) {
                            st = true, Xt = St;
                          } finally {
                            try {
                              !ft2 && Tt.return && Tt.return();
                            } finally {
                              if (st)
                                throw Xt;
                            }
                          }
                          if (!Lt) {
                            var bt = false, zt = void 0;
                            xt.forEach(function(St, kt) {
                              St.has([].concat(l(lt))[0]) && (bt = true, zt = kt);
                            }), bt ? lt.forEach(function(St) {
                              xt[zt].add(St);
                            }) : xt.push(new Set(lt));
                          }
                        }
                      }), xt.forEach(function(lt, ot) {
                        var Lt = Number.POSITIVE_INFINITY, ft2 = Number.POSITIVE_INFINITY, st = Number.NEGATIVE_INFINITY, Xt = Number.NEGATIVE_INFINITY, Tt = true, Ct = false, $t = void 0;
                        try {
                          for (var bt = lt[Symbol.iterator](), zt; !(Tt = (zt = bt.next()).done); Tt = true) {
                            var St = zt.value, kt = void 0;
                            B == "horizontal" ? kt = d.has(St) ? v[d.get(St)] : k.get(St) : kt = d.has(St) ? L[d.get(St)] : k.get(St);
                            var Kt = tt.get(St);
                            kt < Lt && (Lt = kt), kt > st && (st = kt), Kt < ft2 && (ft2 = Kt), Kt > Xt && (Xt = Kt);
                          }
                        } catch (ee) {
                          Ct = true, $t = ee;
                        } finally {
                          try {
                            !Tt && bt.return && bt.return();
                          } finally {
                            if (Ct)
                              throw $t;
                          }
                        }
                        var ce = (Lt + st) / 2 - (ft2 + Xt) / 2, Qt = true, jt = false, _t = void 0;
                        try {
                          for (var Jt = lt[Symbol.iterator](), oe; !(Qt = (oe = Jt.next()).done); Qt = true) {
                            var te2 = oe.value;
                            tt.set(te2, tt.get(te2) + ce);
                          }
                        } catch (ee) {
                          jt = true, _t = ee;
                        } finally {
                          try {
                            !Qt && Jt.return && Jt.return();
                          } finally {
                            if (jt)
                              throw _t;
                          }
                        }
                      });
                    }
                    return tt;
                  }, it = function(U) {
                    var B = 0, J = 0, k = 0, at = 0;
                    if (U.forEach(function(j) {
                      j.left ? v[d.get(j.left)] - v[d.get(j.right)] >= 0 ? B++ : J++ : L[d.get(j.top)] - L[d.get(j.bottom)] >= 0 ? k++ : at++;
                    }), B > J && k > at)
                      for (var ct = 0; ct < d.size; ct++)
                        v[ct] = -1 * v[ct], L[ct] = -1 * L[ct];
                    else if (B > J)
                      for (var nt = 0; nt < d.size; nt++)
                        v[nt] = -1 * v[nt];
                    else if (k > at)
                      for (var tt = 0; tt < d.size; tt++)
                        L[tt] = -1 * L[tt];
                  }, n = function(U) {
                    var B = [], J = new g(), k = /* @__PURE__ */ new Set(), at = 0;
                    return U.forEach(function(ct, nt) {
                      if (!k.has(nt)) {
                        B[at] = [];
                        var tt = nt;
                        for (J.push(tt), k.add(tt), B[at].push(tt); J.length != 0; ) {
                          tt = J.shift();
                          var j = U.get(tt);
                          j.forEach(function(ut) {
                            k.has(ut.id) || (J.push(ut.id), k.add(ut.id), B[at].push(ut.id));
                          });
                        }
                        at++;
                      }
                    }), B;
                  }, m = function(U) {
                    var B = /* @__PURE__ */ new Map();
                    return U.forEach(function(J, k) {
                      B.set(k, []);
                    }), U.forEach(function(J, k) {
                      J.forEach(function(at) {
                        B.get(k).push(at), B.get(at.id).push({ id: k, gap: at.gap, direction: at.direction });
                      });
                    }), B;
                  }, p3 = function(U) {
                    var B = /* @__PURE__ */ new Map();
                    return U.forEach(function(J, k) {
                      B.set(k, []);
                    }), U.forEach(function(J, k) {
                      J.forEach(function(at) {
                        B.get(at.id).push({ id: k, gap: at.gap, direction: at.direction });
                      });
                    }), B;
                  }, E = [], y = [], R = false, M = false, S = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), q = [];
                  if (f.fixedNodeConstraint && f.fixedNodeConstraint.forEach(function(F2) {
                    S.add(F2.nodeId);
                  }), f.relativePlacementConstraint && (f.relativePlacementConstraint.forEach(function(F2) {
                    F2.left ? (W.has(F2.left) ? W.get(F2.left).push({ id: F2.right, gap: F2.gap, direction: "horizontal" }) : W.set(F2.left, [{ id: F2.right, gap: F2.gap, direction: "horizontal" }]), W.has(F2.right) || W.set(F2.right, [])) : (W.has(F2.top) ? W.get(F2.top).push({ id: F2.bottom, gap: F2.gap, direction: "vertical" }) : W.set(F2.top, [{ id: F2.bottom, gap: F2.gap, direction: "vertical" }]), W.has(F2.bottom) || W.set(F2.bottom, []));
                  }), D = m(W), q = n(D)), i.TRANSFORM_ON_CONSTRAINT_HANDLING) {
                    if (f.fixedNodeConstraint && f.fixedNodeConstraint.length > 1)
                      f.fixedNodeConstraint.forEach(function(F2, U) {
                        E[U] = [F2.position.x, F2.position.y], y[U] = [v[d.get(F2.nodeId)], L[d.get(F2.nodeId)]];
                      }), R = true;
                    else if (f.alignmentConstraint)
                      (function() {
                        var F2 = 0;
                        if (f.alignmentConstraint.vertical) {
                          for (var U = f.alignmentConstraint.vertical, B = function(tt) {
                            var j = /* @__PURE__ */ new Set();
                            U[tt].forEach(function(pt) {
                              j.add(pt);
                            });
                            var ut = new Set([].concat(l(j)).filter(function(pt) {
                              return S.has(pt);
                            })), Mt = void 0;
                            ut.size > 0 ? Mt = v[d.get(ut.values().next().value)] : Mt = K(j).x, U[tt].forEach(function(pt) {
                              E[F2] = [Mt, L[d.get(pt)]], y[F2] = [v[d.get(pt)], L[d.get(pt)]], F2++;
                            });
                          }, J = 0; J < U.length; J++)
                            B(J);
                          R = true;
                        }
                        if (f.alignmentConstraint.horizontal) {
                          for (var k = f.alignmentConstraint.horizontal, at = function(tt) {
                            var j = /* @__PURE__ */ new Set();
                            k[tt].forEach(function(pt) {
                              j.add(pt);
                            });
                            var ut = new Set([].concat(l(j)).filter(function(pt) {
                              return S.has(pt);
                            })), Mt = void 0;
                            ut.size > 0 ? Mt = v[d.get(ut.values().next().value)] : Mt = K(j).y, k[tt].forEach(function(pt) {
                              E[F2] = [v[d.get(pt)], Mt], y[F2] = [v[d.get(pt)], L[d.get(pt)]], F2++;
                            });
                          }, ct = 0; ct < k.length; ct++)
                            at(ct);
                          R = true;
                        }
                        f.relativePlacementConstraint && (M = true);
                      })();
                    else if (f.relativePlacementConstraint) {
                      for (var V = 0, X = 0, et = 0; et < q.length; et++)
                        q[et].length > V && (V = q[et].length, X = et);
                      if (V < D.size / 2)
                        it(f.relativePlacementConstraint), R = false, M = false;
                      else {
                        var z = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), H = [];
                        q[X].forEach(function(F2) {
                          W.get(F2).forEach(function(U) {
                            U.direction == "horizontal" ? (z.has(F2) ? z.get(F2).push(U) : z.set(F2, [U]), z.has(U.id) || z.set(U.id, []), H.push({ left: F2, right: U.id })) : (w.has(F2) ? w.get(F2).push(U) : w.set(F2, [U]), w.has(U.id) || w.set(U.id, []), H.push({ top: F2, bottom: U.id }));
                          });
                        }), it(H), M = false;
                        var $ = O(z, "horizontal"), _ = O(w, "vertical");
                        q[X].forEach(function(F2, U) {
                          y[U] = [v[d.get(F2)], L[d.get(F2)]], E[U] = [], $.has(F2) ? E[U][0] = $.get(F2) : E[U][0] = v[d.get(F2)], _.has(F2) ? E[U][1] = _.get(F2) : E[U][1] = L[d.get(F2)];
                        }), R = true;
                      }
                    }
                    if (R) {
                      for (var ht2 = void 0, Q = t2.transpose(E), It = t2.transpose(y), Nt = 0; Nt < Q.length; Nt++)
                        Q[Nt] = t2.multGamma(Q[Nt]), It[Nt] = t2.multGamma(It[Nt]);
                      var vt = t2.multMat(Q, t2.transpose(It)), rt = o.svd(vt);
                      ht2 = t2.multMat(rt.V, t2.transpose(rt.U));
                      for (var gt = 0; gt < d.size; gt++) {
                        var mt = [v[gt], L[gt]], At = [ht2[0][0], ht2[1][0]], Ot = [ht2[0][1], ht2[1][1]];
                        v[gt] = t2.dotProduct(mt, At), L[gt] = t2.dotProduct(mt, Ot);
                      }
                      M && it(f.relativePlacementConstraint);
                    }
                  }
                  if (i.ENFORCE_CONSTRAINTS) {
                    if (f.fixedNodeConstraint && f.fixedNodeConstraint.length > 0) {
                      var Et = { x: 0, y: 0 };
                      f.fixedNodeConstraint.forEach(function(F2, U) {
                        var B = { x: v[d.get(F2.nodeId)], y: L[d.get(F2.nodeId)] }, J = F2.position, k = Y(J, B);
                        Et.x += k.x, Et.y += k.y;
                      }), Et.x /= f.fixedNodeConstraint.length, Et.y /= f.fixedNodeConstraint.length, v.forEach(function(F2, U) {
                        v[U] += Et.x;
                      }), L.forEach(function(F2, U) {
                        L[U] += Et.y;
                      }), f.fixedNodeConstraint.forEach(function(F2) {
                        v[d.get(F2.nodeId)] = F2.position.x, L[d.get(F2.nodeId)] = F2.position.y;
                      });
                    }
                    if (f.alignmentConstraint) {
                      if (f.alignmentConstraint.vertical)
                        for (var Dt2 = f.alignmentConstraint.vertical, Rt = function(U) {
                          var B = /* @__PURE__ */ new Set();
                          Dt2[U].forEach(function(at) {
                            B.add(at);
                          });
                          var J = new Set([].concat(l(B)).filter(function(at) {
                            return S.has(at);
                          })), k = void 0;
                          J.size > 0 ? k = v[d.get(J.values().next().value)] : k = K(B).x, B.forEach(function(at) {
                            S.has(at) || (v[d.get(at)] = k);
                          });
                        }, Ht = 0; Ht < Dt2.length; Ht++)
                          Rt(Ht);
                      if (f.alignmentConstraint.horizontal)
                        for (var Ut = f.alignmentConstraint.horizontal, Pt = function(U) {
                          var B = /* @__PURE__ */ new Set();
                          Ut[U].forEach(function(at) {
                            B.add(at);
                          });
                          var J = new Set([].concat(l(B)).filter(function(at) {
                            return S.has(at);
                          })), k = void 0;
                          J.size > 0 ? k = L[d.get(J.values().next().value)] : k = K(B).y, B.forEach(function(at) {
                            S.has(at) || (L[d.get(at)] = k);
                          });
                        }, Ft = 0; Ft < Ut.length; Ft++)
                          Pt(Ft);
                    }
                    f.relativePlacementConstraint && (function() {
                      var F2 = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Set(), nt = /* @__PURE__ */ new Set();
                      if (S.forEach(function(Gt) {
                        ct.add(Gt), nt.add(Gt);
                      }), f.alignmentConstraint) {
                        if (f.alignmentConstraint.vertical)
                          for (var tt = f.alignmentConstraint.vertical, j = function(yt) {
                            B.set("dummy" + yt, []), tt[yt].forEach(function(wt) {
                              F2.set(wt, "dummy" + yt), B.get("dummy" + yt).push(wt), S.has(wt) && ct.add("dummy" + yt);
                            }), k.set("dummy" + yt, v[d.get(tt[yt][0])]);
                          }, ut = 0; ut < tt.length; ut++)
                            j(ut);
                        if (f.alignmentConstraint.horizontal)
                          for (var Mt = f.alignmentConstraint.horizontal, pt = function(yt) {
                            J.set("dummy" + yt, []), Mt[yt].forEach(function(wt) {
                              U.set(wt, "dummy" + yt), J.get("dummy" + yt).push(wt), S.has(wt) && nt.add("dummy" + yt);
                            }), at.set("dummy" + yt, L[d.get(Mt[yt][0])]);
                          }, xt = 0; xt < Mt.length; xt++)
                            pt(xt);
                      }
                      var lt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), Lt = function(yt) {
                        W.get(yt).forEach(function(wt) {
                          var Zt = void 0, Bt = void 0;
                          wt.direction == "horizontal" ? (Zt = F2.get(yt) ? F2.get(yt) : yt, F2.get(wt.id) ? Bt = { id: F2.get(wt.id), gap: wt.gap, direction: wt.direction } : Bt = wt, lt.has(Zt) ? lt.get(Zt).push(Bt) : lt.set(Zt, [Bt]), lt.has(Bt.id) || lt.set(Bt.id, [])) : (Zt = U.get(yt) ? U.get(yt) : yt, U.get(wt.id) ? Bt = { id: U.get(wt.id), gap: wt.gap, direction: wt.direction } : Bt = wt, ot.has(Zt) ? ot.get(Zt).push(Bt) : ot.set(Zt, [Bt]), ot.has(Bt.id) || ot.set(Bt.id, []));
                        });
                      }, ft2 = true, st = false, Xt = void 0;
                      try {
                        for (var Tt = W.keys()[Symbol.iterator](), Ct; !(ft2 = (Ct = Tt.next()).done); ft2 = true) {
                          var $t = Ct.value;
                          Lt($t);
                        }
                      } catch (Gt) {
                        st = true, Xt = Gt;
                      } finally {
                        try {
                          !ft2 && Tt.return && Tt.return();
                        } finally {
                          if (st)
                            throw Xt;
                        }
                      }
                      var bt = m(lt), zt = m(ot), St = n(bt), kt = n(zt), Kt = p3(lt), ce = p3(ot), Qt = [], jt = [];
                      St.forEach(function(Gt, yt) {
                        Qt[yt] = [], Gt.forEach(function(wt) {
                          Kt.get(wt).length == 0 && Qt[yt].push(wt);
                        });
                      }), kt.forEach(function(Gt, yt) {
                        jt[yt] = [], Gt.forEach(function(wt) {
                          ce.get(wt).length == 0 && jt[yt].push(wt);
                        });
                      });
                      var _t = O(lt, "horizontal", ct, k, Qt), Jt = O(ot, "vertical", nt, at, jt), oe = function(yt) {
                        B.get(yt) ? B.get(yt).forEach(function(wt) {
                          v[d.get(wt)] = _t.get(yt);
                        }) : v[d.get(yt)] = _t.get(yt);
                      }, te2 = true, ee = false, Ne = void 0;
                      try {
                        for (var ge = _t.keys()[Symbol.iterator](), Le; !(te2 = (Le = ge.next()).done); te2 = true) {
                          var ue = Le.value;
                          oe(ue);
                        }
                      } catch (Gt) {
                        ee = true, Ne = Gt;
                      } finally {
                        try {
                          !te2 && ge.return && ge.return();
                        } finally {
                          if (ee)
                            throw Ne;
                        }
                      }
                      var Be = function(yt) {
                        J.get(yt) ? J.get(yt).forEach(function(wt) {
                          L[d.get(wt)] = Jt.get(yt);
                        }) : L[d.get(yt)] = Jt.get(yt);
                      }, de = true, Ce = false, Ae = void 0;
                      try {
                        for (var ve = Jt.keys()[Symbol.iterator](), Me; !(de = (Me = ve.next()).done); de = true) {
                          var ue = Me.value;
                          Be(ue);
                        }
                      } catch (Gt) {
                        Ce = true, Ae = Gt;
                      } finally {
                        try {
                          !de && ve.return && ve.return();
                        } finally {
                          if (Ce)
                            throw Ae;
                        }
                      }
                    })();
                  }
                  for (var Yt = 0; Yt < b.length; Yt++) {
                    var Vt = b[Yt];
                    Vt.getChild() == null && Vt.setCenter(v[d.get(Vt.id)], L[d.get(Vt.id)]);
                  }
                }, a.exports = s;
              })
            ),
            /***/
            551: (
              /***/
              ((a) => {
                a.exports = A;
              })
            )
            /******/
          }, N = {};
          function u(a) {
            var e = N[a];
            if (e !== void 0)
              return e.exports;
            var r = N[a] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return P[a](r, r.exports, u), r.exports;
          }
          var h = u(45);
          return h;
        })()
      );
    });
  })(le)), le.exports;
}
var pr = he.exports, De;
function yr() {
  return De || (De = 1, (function(I, x) {
    (function(P, N) {
      I.exports = N(vr());
    })(pr, function(A) {
      return (
        /******/
        (() => {
          var P = {
            /***/
            658: (
              /***/
              ((a) => {
                a.exports = Object.assign != null ? Object.assign.bind(Object) : function(e) {
                  for (var r = arguments.length, l = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                    l[i - 1] = arguments[i];
                  return l.forEach(function(g) {
                    Object.keys(g).forEach(function(t2) {
                      return e[t2] = g[t2];
                    });
                  }), e;
                };
              })
            ),
            /***/
            548: (
              /***/
              ((a, e, r) => {
                var l = /* @__PURE__ */ (function() {
                  function t2(o, s) {
                    var c = [], f = true, T = false, d = void 0;
                    try {
                      for (var v = o[Symbol.iterator](), L; !(f = (L = v.next()).done) && (c.push(L.value), !(s && c.length === s)); f = true)
                        ;
                    } catch (b) {
                      T = true, d = b;
                    } finally {
                      try {
                        !f && v.return && v.return();
                      } finally {
                        if (T) throw d;
                      }
                    }
                    return c;
                  }
                  return function(o, s) {
                    if (Array.isArray(o))
                      return o;
                    if (Symbol.iterator in Object(o))
                      return t2(o, s);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                  };
                })(), i = r(140).layoutBase.LinkedList, g = {};
                g.getTopMostNodes = function(t2) {
                  for (var o = {}, s = 0; s < t2.length; s++)
                    o[t2[s].id()] = true;
                  var c = t2.filter(function(f, T) {
                    typeof f == "number" && (f = T);
                    for (var d = f.parent()[0]; d != null; ) {
                      if (o[d.id()])
                        return false;
                      d = d.parent()[0];
                    }
                    return true;
                  });
                  return c;
                }, g.connectComponents = function(t2, o, s, c) {
                  var f = new i(), T = /* @__PURE__ */ new Set(), d = [], v = void 0, L = void 0, b = void 0, C = false, G = 1, Z = [], Y = [], K = function() {
                    var it = t2.collection();
                    Y.push(it);
                    var n = s[0], m = t2.collection();
                    m.merge(n).merge(n.descendants().intersection(o)), d.push(n), m.forEach(function(y) {
                      f.push(y), T.add(y), it.merge(y);
                    });
                    for (var p3 = function() {
                      n = f.shift();
                      var R = t2.collection();
                      n.neighborhood().nodes().forEach(function(D) {
                        o.intersection(n.edgesWith(D)).length > 0 && R.merge(D);
                      });
                      for (var M = 0; M < R.length; M++) {
                        var S = R[M];
                        if (v = s.intersection(S.union(S.ancestors())), v != null && !T.has(v[0])) {
                          var W = v.union(v.descendants());
                          W.forEach(function(D) {
                            f.push(D), T.add(D), it.merge(D), s.has(D) && d.push(D);
                          });
                        }
                      }
                    }; f.length != 0; )
                      p3();
                    if (it.forEach(function(y) {
                      o.intersection(y.connectedEdges()).forEach(function(R) {
                        it.has(R.source()) && it.has(R.target()) && it.merge(R);
                      });
                    }), d.length == s.length && (C = true), !C || C && G > 1) {
                      L = d[0], b = L.connectedEdges().length, d.forEach(function(y) {
                        y.connectedEdges().length < b && (b = y.connectedEdges().length, L = y);
                      }), Z.push(L.id());
                      var E = t2.collection();
                      E.merge(d[0]), d.forEach(function(y) {
                        E.merge(y);
                      }), d = [], s = s.difference(E), G++;
                    }
                  };
                  do
                    K();
                  while (!C);
                  return c && Z.length > 0 && c.set("dummy" + (c.size + 1), Z), Y;
                }, g.relocateComponent = function(t2, o, s) {
                  if (!s.fixedNodeConstraint) {
                    var c = Number.POSITIVE_INFINITY, f = Number.NEGATIVE_INFINITY, T = Number.POSITIVE_INFINITY, d = Number.NEGATIVE_INFINITY;
                    if (s.quality == "draft") {
                      var v = true, L = false, b = void 0;
                      try {
                        for (var C = o.nodeIndexes[Symbol.iterator](), G; !(v = (G = C.next()).done); v = true) {
                          var Z = G.value, Y = l(Z, 2), K = Y[0], O = Y[1], it = s.cy.getElementById(K);
                          if (it) {
                            var n = it.boundingBox(), m = o.xCoords[O] - n.w / 2, p3 = o.xCoords[O] + n.w / 2, E = o.yCoords[O] - n.h / 2, y = o.yCoords[O] + n.h / 2;
                            m < c && (c = m), p3 > f && (f = p3), E < T && (T = E), y > d && (d = y);
                          }
                        }
                      } catch (D) {
                        L = true, b = D;
                      } finally {
                        try {
                          !v && C.return && C.return();
                        } finally {
                          if (L)
                            throw b;
                        }
                      }
                      var R = t2.x - (f + c) / 2, M = t2.y - (d + T) / 2;
                      o.xCoords = o.xCoords.map(function(D) {
                        return D + R;
                      }), o.yCoords = o.yCoords.map(function(D) {
                        return D + M;
                      });
                    } else {
                      Object.keys(o).forEach(function(D) {
                        var q = o[D], V = q.getRect().x, X = q.getRect().x + q.getRect().width, et = q.getRect().y, z = q.getRect().y + q.getRect().height;
                        V < c && (c = V), X > f && (f = X), et < T && (T = et), z > d && (d = z);
                      });
                      var S = t2.x - (f + c) / 2, W = t2.y - (d + T) / 2;
                      Object.keys(o).forEach(function(D) {
                        var q = o[D];
                        q.setCenter(q.getCenterX() + S, q.getCenterY() + W);
                      });
                    }
                  }
                }, g.calcBoundingBox = function(t2, o, s, c) {
                  for (var f = Number.MAX_SAFE_INTEGER, T = Number.MIN_SAFE_INTEGER, d = Number.MAX_SAFE_INTEGER, v = Number.MIN_SAFE_INTEGER, L = void 0, b = void 0, C = void 0, G = void 0, Z = t2.descendants().not(":parent"), Y = Z.length, K = 0; K < Y; K++) {
                    var O = Z[K];
                    L = o[c.get(O.id())] - O.width() / 2, b = o[c.get(O.id())] + O.width() / 2, C = s[c.get(O.id())] - O.height() / 2, G = s[c.get(O.id())] + O.height() / 2, f > L && (f = L), T < b && (T = b), d > C && (d = C), v < G && (v = G);
                  }
                  var it = {};
                  return it.topLeftX = f, it.topLeftY = d, it.width = T - f, it.height = v - d, it;
                }, g.calcParentsWithoutChildren = function(t2, o) {
                  var s = t2.collection();
                  return o.nodes(":parent").forEach(function(c) {
                    var f = false;
                    c.children().forEach(function(T) {
                      T.css("display") != "none" && (f = true);
                    }), f || s.merge(c);
                  }), s;
                }, a.exports = g;
              })
            ),
            /***/
            816: (
              /***/
              ((a, e, r) => {
                var l = r(548), i = r(140).CoSELayout, g = r(140).CoSENode, t2 = r(140).layoutBase.PointD, o = r(140).layoutBase.DimensionD, s = r(140).layoutBase.LayoutConstants, c = r(140).layoutBase.FDLayoutConstants, f = r(140).CoSEConstants, T = function(v, L) {
                  var b = v.cy, C = v.eles, G = C.nodes(), Z = C.edges(), Y = void 0, K = void 0, O = void 0, it = {};
                  v.randomize && (Y = L.nodeIndexes, K = L.xCoords, O = L.yCoords);
                  var n = function(D) {
                    return typeof D == "function";
                  }, m = function(D, q) {
                    return n(D) ? D(q) : D;
                  }, p3 = l.calcParentsWithoutChildren(b, C), E = function W(D, q, V, X) {
                    for (var et = q.length, z = 0; z < et; z++) {
                      var w = q[z], H = null;
                      w.intersection(p3).length == 0 && (H = w.children());
                      var $ = void 0, _ = w.layoutDimensions({
                        nodeDimensionsIncludeLabels: X.nodeDimensionsIncludeLabels
                      });
                      if (w.outerWidth() != null && w.outerHeight() != null)
                        if (X.randomize)
                          if (!w.isParent())
                            $ = D.add(new g(V.graphManager, new t2(K[Y.get(w.id())] - _.w / 2, O[Y.get(w.id())] - _.h / 2), new o(parseFloat(_.w), parseFloat(_.h))));
                          else {
                            var ht2 = l.calcBoundingBox(w, K, O, Y);
                            w.intersection(p3).length == 0 ? $ = D.add(new g(V.graphManager, new t2(ht2.topLeftX, ht2.topLeftY), new o(ht2.width, ht2.height))) : $ = D.add(new g(V.graphManager, new t2(ht2.topLeftX, ht2.topLeftY), new o(parseFloat(_.w), parseFloat(_.h))));
                          }
                        else
                          $ = D.add(new g(V.graphManager, new t2(w.position("x") - _.w / 2, w.position("y") - _.h / 2), new o(parseFloat(_.w), parseFloat(_.h))));
                      else
                        $ = D.add(new g(this.graphManager));
                      if ($.id = w.data("id"), $.nodeRepulsion = m(X.nodeRepulsion, w), $.paddingLeft = parseInt(w.css("padding")), $.paddingTop = parseInt(w.css("padding")), $.paddingRight = parseInt(w.css("padding")), $.paddingBottom = parseInt(w.css("padding")), X.nodeDimensionsIncludeLabels && ($.labelWidth = w.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).w, $.labelHeight = w.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).h, $.labelPosVertical = w.css("text-valign"), $.labelPosHorizontal = w.css("text-halign")), it[w.data("id")] = $, isNaN($.rect.x) && ($.rect.x = 0), isNaN($.rect.y) && ($.rect.y = 0), H != null && H.length > 0) {
                        var Q = void 0;
                        Q = V.getGraphManager().add(V.newGraph(), $), W(Q, H, V, X);
                      }
                    }
                  }, y = function(D, q, V) {
                    for (var X = 0, et = 0, z = 0; z < V.length; z++) {
                      var w = V[z], H = it[w.data("source")], $ = it[w.data("target")];
                      if (H && $ && H !== $ && H.getEdgesBetween($).length == 0) {
                        var _ = q.add(D.newEdge(), H, $);
                        _.id = w.id(), _.idealLength = m(v.idealEdgeLength, w), _.edgeElasticity = m(v.edgeElasticity, w), X += _.idealLength, et++;
                      }
                    }
                    v.idealEdgeLength != null && (et > 0 ? f.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = X / et : n(v.idealEdgeLength) ? f.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = 50 : f.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = v.idealEdgeLength, f.MIN_REPULSION_DIST = c.MIN_REPULSION_DIST = c.DEFAULT_EDGE_LENGTH / 10, f.DEFAULT_RADIAL_SEPARATION = c.DEFAULT_EDGE_LENGTH);
                  }, R = function(D, q) {
                    q.fixedNodeConstraint && (D.constraints.fixedNodeConstraint = q.fixedNodeConstraint), q.alignmentConstraint && (D.constraints.alignmentConstraint = q.alignmentConstraint), q.relativePlacementConstraint && (D.constraints.relativePlacementConstraint = q.relativePlacementConstraint);
                  };
                  v.nestingFactor != null && (f.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = c.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = v.nestingFactor), v.gravity != null && (f.DEFAULT_GRAVITY_STRENGTH = c.DEFAULT_GRAVITY_STRENGTH = v.gravity), v.numIter != null && (f.MAX_ITERATIONS = c.MAX_ITERATIONS = v.numIter), v.gravityRange != null && (f.DEFAULT_GRAVITY_RANGE_FACTOR = c.DEFAULT_GRAVITY_RANGE_FACTOR = v.gravityRange), v.gravityCompound != null && (f.DEFAULT_COMPOUND_GRAVITY_STRENGTH = c.DEFAULT_COMPOUND_GRAVITY_STRENGTH = v.gravityCompound), v.gravityRangeCompound != null && (f.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = c.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = v.gravityRangeCompound), v.initialEnergyOnIncremental != null && (f.DEFAULT_COOLING_FACTOR_INCREMENTAL = c.DEFAULT_COOLING_FACTOR_INCREMENTAL = v.initialEnergyOnIncremental), v.tilingCompareBy != null && (f.TILING_COMPARE_BY = v.tilingCompareBy), v.quality == "proof" ? s.QUALITY = 2 : s.QUALITY = 0, f.NODE_DIMENSIONS_INCLUDE_LABELS = c.NODE_DIMENSIONS_INCLUDE_LABELS = s.NODE_DIMENSIONS_INCLUDE_LABELS = v.nodeDimensionsIncludeLabels, f.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = s.DEFAULT_INCREMENTAL = !v.randomize, f.ANIMATE = c.ANIMATE = s.ANIMATE = v.animate, f.TILE = v.tile, f.TILING_PADDING_VERTICAL = typeof v.tilingPaddingVertical == "function" ? v.tilingPaddingVertical.call() : v.tilingPaddingVertical, f.TILING_PADDING_HORIZONTAL = typeof v.tilingPaddingHorizontal == "function" ? v.tilingPaddingHorizontal.call() : v.tilingPaddingHorizontal, f.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = s.DEFAULT_INCREMENTAL = true, f.PURE_INCREMENTAL = !v.randomize, s.DEFAULT_UNIFORM_LEAF_NODE_SIZES = v.uniformNodeDimensions, v.step == "transformed" && (f.TRANSFORM_ON_CONSTRAINT_HANDLING = true, f.ENFORCE_CONSTRAINTS = false, f.APPLY_LAYOUT = false), v.step == "enforced" && (f.TRANSFORM_ON_CONSTRAINT_HANDLING = false, f.ENFORCE_CONSTRAINTS = true, f.APPLY_LAYOUT = false), v.step == "cose" && (f.TRANSFORM_ON_CONSTRAINT_HANDLING = false, f.ENFORCE_CONSTRAINTS = false, f.APPLY_LAYOUT = true), v.step == "all" && (v.randomize ? f.TRANSFORM_ON_CONSTRAINT_HANDLING = true : f.TRANSFORM_ON_CONSTRAINT_HANDLING = false, f.ENFORCE_CONSTRAINTS = true, f.APPLY_LAYOUT = true), v.fixedNodeConstraint || v.alignmentConstraint || v.relativePlacementConstraint ? f.TREE_REDUCTION_ON_INCREMENTAL = false : f.TREE_REDUCTION_ON_INCREMENTAL = true;
                  var M = new i(), S = M.newGraphManager();
                  return E(S.addRoot(), l.getTopMostNodes(G), M, v), y(M, S, Z), R(M, v), M.runLayout(), it;
                };
                a.exports = { coseLayout: T };
              })
            ),
            /***/
            212: (
              /***/
              ((a, e, r) => {
                var l = /* @__PURE__ */ (function() {
                  function v(L, b) {
                    for (var C = 0; C < b.length; C++) {
                      var G = b[C];
                      G.enumerable = G.enumerable || false, G.configurable = true, "value" in G && (G.writable = true), Object.defineProperty(L, G.key, G);
                    }
                  }
                  return function(L, b, C) {
                    return b && v(L.prototype, b), C && v(L, C), L;
                  };
                })();
                function i(v, L) {
                  if (!(v instanceof L))
                    throw new TypeError("Cannot call a class as a function");
                }
                var g = r(658), t2 = r(548), o = r(657), s = o.spectralLayout, c = r(816), f = c.coseLayout, T = Object.freeze({
                  // 'draft', 'default' or 'proof' 
                  // - 'draft' only applies spectral layout 
                  // - 'default' improves the quality with subsequent CoSE layout (fast cooling rate)
                  // - 'proof' improves the quality with subsequent CoSE layout (slow cooling rate) 
                  quality: "default",
                  // Use random node positions at beginning of layout
                  // if this is set to false, then quality option must be "proof"
                  randomize: true,
                  // Whether or not to animate the layout
                  animate: true,
                  // Duration of animation in ms, if enabled
                  animationDuration: 1e3,
                  // Easing of animation, if enabled
                  animationEasing: void 0,
                  // Fit the viewport to the repositioned nodes
                  fit: true,
                  // Padding around layout
                  padding: 30,
                  // Whether to include labels in node dimensions. Valid in "proof" quality
                  nodeDimensionsIncludeLabels: false,
                  // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
                  uniformNodeDimensions: false,
                  // Whether to pack disconnected components - valid only if randomize: true
                  packComponents: true,
                  // Layout step - all, transformed, enforced, cose - for debug purpose only
                  step: "all",
                  /* spectral layout options */
                  // False for random, true for greedy
                  samplingType: true,
                  // Sample size to construct distance matrix
                  sampleSize: 25,
                  // Separation amount between nodes
                  nodeSeparation: 75,
                  // Power iteration tolerance
                  piTol: 1e-7,
                  /* CoSE layout options */
                  // Node repulsion (non overlapping) multiplier
                  nodeRepulsion: function(L) {
                    return 4500;
                  },
                  // Ideal edge (non nested) length
                  idealEdgeLength: function(L) {
                    return 50;
                  },
                  // Divisor to compute edge forces
                  edgeElasticity: function(L) {
                    return 0.45;
                  },
                  // Nesting factor (multiplier) to compute ideal edge length for nested edges
                  nestingFactor: 0.1,
                  // Gravity force (constant)
                  gravity: 0.25,
                  // Maximum number of iterations to perform
                  numIter: 2500,
                  // For enabling tiling
                  tile: true,
                  // The function that specifies the criteria for comparing nodes while sorting them during tiling operation.
                  // Takes the node id as a parameter and the default tiling operation is perfomed when this option is not set.
                  tilingCompareBy: void 0,
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
                  initialEnergyOnIncremental: 0.3,
                  /* constraint options */
                  // Fix required nodes to predefined positions
                  // [{nodeId: 'n1', position: {x: 100, y: 200}, {...}]
                  fixedNodeConstraint: void 0,
                  // Align required nodes in vertical/horizontal direction
                  // {vertical: [['n1', 'n2')], ['n3', 'n4']], horizontal: ['n2', 'n4']}
                  alignmentConstraint: void 0,
                  // Place two nodes relatively in vertical/horizontal direction 
                  // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}]
                  relativePlacementConstraint: void 0,
                  /* layout event callbacks */
                  ready: function() {
                  },
                  // on layoutready
                  stop: function() {
                  }
                  // on layoutstop
                }), d = (function() {
                  function v(L) {
                    i(this, v), this.options = g({}, T, L);
                  }
                  return l(v, [{
                    key: "run",
                    value: function() {
                      var b = this, C = this.options, G = C.cy, Z = C.eles, Y = [], K = [], O = void 0, it = [];
                      C.fixedNodeConstraint && (!Array.isArray(C.fixedNodeConstraint) || C.fixedNodeConstraint.length == 0) && (C.fixedNodeConstraint = void 0), C.alignmentConstraint && (C.alignmentConstraint.vertical && (!Array.isArray(C.alignmentConstraint.vertical) || C.alignmentConstraint.vertical.length == 0) && (C.alignmentConstraint.vertical = void 0), C.alignmentConstraint.horizontal && (!Array.isArray(C.alignmentConstraint.horizontal) || C.alignmentConstraint.horizontal.length == 0) && (C.alignmentConstraint.horizontal = void 0)), C.relativePlacementConstraint && (!Array.isArray(C.relativePlacementConstraint) || C.relativePlacementConstraint.length == 0) && (C.relativePlacementConstraint = void 0);
                      var n = C.fixedNodeConstraint || C.alignmentConstraint || C.relativePlacementConstraint;
                      n && (C.tile = false, C.packComponents = false);
                      var m = void 0, p3 = false;
                      if (G.layoutUtilities && C.packComponents && (m = G.layoutUtilities("get"), m || (m = G.layoutUtilities()), p3 = true), Z.nodes().length > 0)
                        if (p3) {
                          var R = t2.getTopMostNodes(C.eles.nodes());
                          if (O = t2.connectComponents(G, C.eles, R), O.forEach(function(vt) {
                            var rt = vt.boundingBox();
                            it.push({ x: rt.x1 + rt.w / 2, y: rt.y1 + rt.h / 2 });
                          }), C.randomize && O.forEach(function(vt) {
                            C.eles = vt, Y.push(s(C));
                          }), C.quality == "default" || C.quality == "proof") {
                            var M = G.collection();
                            if (C.tile) {
                              var S = /* @__PURE__ */ new Map(), W = [], D = [], q = 0, V = { nodeIndexes: S, xCoords: W, yCoords: D }, X = [];
                              if (O.forEach(function(vt, rt) {
                                vt.edges().length == 0 && (vt.nodes().forEach(function(gt, mt) {
                                  M.merge(vt.nodes()[mt]), gt.isParent() || (V.nodeIndexes.set(vt.nodes()[mt].id(), q++), V.xCoords.push(vt.nodes()[0].position().x), V.yCoords.push(vt.nodes()[0].position().y));
                                }), X.push(rt));
                              }), M.length > 1) {
                                var et = M.boundingBox();
                                it.push({ x: et.x1 + et.w / 2, y: et.y1 + et.h / 2 }), O.push(M), Y.push(V);
                                for (var z = X.length - 1; z >= 0; z--)
                                  O.splice(X[z], 1), Y.splice(X[z], 1), it.splice(X[z], 1);
                              }
                            }
                            O.forEach(function(vt, rt) {
                              C.eles = vt, K.push(f(C, Y[rt])), t2.relocateComponent(it[rt], K[rt], C);
                            });
                          } else
                            O.forEach(function(vt, rt) {
                              t2.relocateComponent(it[rt], Y[rt], C);
                            });
                          var w = /* @__PURE__ */ new Set();
                          if (O.length > 1) {
                            var H = [], $ = Z.filter(function(vt) {
                              return vt.css("display") == "none";
                            });
                            O.forEach(function(vt, rt) {
                              var gt = void 0;
                              if (C.quality == "draft" && (gt = Y[rt].nodeIndexes), vt.nodes().not($).length > 0) {
                                var mt = {};
                                mt.edges = [], mt.nodes = [];
                                var At = void 0;
                                vt.nodes().not($).forEach(function(Ot) {
                                  if (C.quality == "draft")
                                    if (!Ot.isParent())
                                      At = gt.get(Ot.id()), mt.nodes.push({ x: Y[rt].xCoords[At] - Ot.boundingbox().w / 2, y: Y[rt].yCoords[At] - Ot.boundingbox().h / 2, width: Ot.boundingbox().w, height: Ot.boundingbox().h });
                                    else {
                                      var Et = t2.calcBoundingBox(Ot, Y[rt].xCoords, Y[rt].yCoords, gt);
                                      mt.nodes.push({ x: Et.topLeftX, y: Et.topLeftY, width: Et.width, height: Et.height });
                                    }
                                  else
                                    K[rt][Ot.id()] && mt.nodes.push({ x: K[rt][Ot.id()].getLeft(), y: K[rt][Ot.id()].getTop(), width: K[rt][Ot.id()].getWidth(), height: K[rt][Ot.id()].getHeight() });
                                }), vt.edges().forEach(function(Ot) {
                                  var Et = Ot.source(), Dt2 = Ot.target();
                                  if (Et.css("display") != "none" && Dt2.css("display") != "none")
                                    if (C.quality == "draft") {
                                      var Rt = gt.get(Et.id()), Ht = gt.get(Dt2.id()), Ut = [], Pt = [];
                                      if (Et.isParent()) {
                                        var Ft = t2.calcBoundingBox(Et, Y[rt].xCoords, Y[rt].yCoords, gt);
                                        Ut.push(Ft.topLeftX + Ft.width / 2), Ut.push(Ft.topLeftY + Ft.height / 2);
                                      } else
                                        Ut.push(Y[rt].xCoords[Rt]), Ut.push(Y[rt].yCoords[Rt]);
                                      if (Dt2.isParent()) {
                                        var Yt = t2.calcBoundingBox(Dt2, Y[rt].xCoords, Y[rt].yCoords, gt);
                                        Pt.push(Yt.topLeftX + Yt.width / 2), Pt.push(Yt.topLeftY + Yt.height / 2);
                                      } else
                                        Pt.push(Y[rt].xCoords[Ht]), Pt.push(Y[rt].yCoords[Ht]);
                                      mt.edges.push({ startX: Ut[0], startY: Ut[1], endX: Pt[0], endY: Pt[1] });
                                    } else
                                      K[rt][Et.id()] && K[rt][Dt2.id()] && mt.edges.push({ startX: K[rt][Et.id()].getCenterX(), startY: K[rt][Et.id()].getCenterY(), endX: K[rt][Dt2.id()].getCenterX(), endY: K[rt][Dt2.id()].getCenterY() });
                                }), mt.nodes.length > 0 && (H.push(mt), w.add(rt));
                              }
                            });
                            var _ = m.packComponents(H, C.randomize).shifts;
                            if (C.quality == "draft")
                              Y.forEach(function(vt, rt) {
                                var gt = vt.xCoords.map(function(At) {
                                  return At + _[rt].dx;
                                }), mt = vt.yCoords.map(function(At) {
                                  return At + _[rt].dy;
                                });
                                vt.xCoords = gt, vt.yCoords = mt;
                              });
                            else {
                              var ht2 = 0;
                              w.forEach(function(vt) {
                                Object.keys(K[vt]).forEach(function(rt) {
                                  var gt = K[vt][rt];
                                  gt.setCenter(gt.getCenterX() + _[ht2].dx, gt.getCenterY() + _[ht2].dy);
                                }), ht2++;
                              });
                            }
                          }
                        } else {
                          var E = C.eles.boundingBox();
                          if (it.push({ x: E.x1 + E.w / 2, y: E.y1 + E.h / 2 }), C.randomize) {
                            var y = s(C);
                            Y.push(y);
                          }
                          C.quality == "default" || C.quality == "proof" ? (K.push(f(C, Y[0])), t2.relocateComponent(it[0], K[0], C)) : t2.relocateComponent(it[0], Y[0], C);
                        }
                      var Q = function(rt, gt) {
                        if (C.quality == "default" || C.quality == "proof") {
                          typeof rt == "number" && (rt = gt);
                          var mt = void 0, At = void 0, Ot = rt.data("id");
                          return K.forEach(function(Dt2) {
                            Ot in Dt2 && (mt = { x: Dt2[Ot].getRect().getCenterX(), y: Dt2[Ot].getRect().getCenterY() }, At = Dt2[Ot]);
                          }), C.nodeDimensionsIncludeLabels && (At.labelWidth && (At.labelPosHorizontal == "left" ? mt.x += At.labelWidth / 2 : At.labelPosHorizontal == "right" && (mt.x -= At.labelWidth / 2)), At.labelHeight && (At.labelPosVertical == "top" ? mt.y += At.labelHeight / 2 : At.labelPosVertical == "bottom" && (mt.y -= At.labelHeight / 2))), mt == null && (mt = { x: rt.position("x"), y: rt.position("y") }), {
                            x: mt.x,
                            y: mt.y
                          };
                        } else {
                          var Et = void 0;
                          return Y.forEach(function(Dt2) {
                            var Rt = Dt2.nodeIndexes.get(rt.id());
                            Rt != null && (Et = { x: Dt2.xCoords[Rt], y: Dt2.yCoords[Rt] });
                          }), Et == null && (Et = { x: rt.position("x"), y: rt.position("y") }), {
                            x: Et.x,
                            y: Et.y
                          };
                        }
                      };
                      if (C.quality == "default" || C.quality == "proof" || C.randomize) {
                        var It = t2.calcParentsWithoutChildren(G, Z), Nt = Z.filter(function(vt) {
                          return vt.css("display") == "none";
                        });
                        C.eles = Z.not(Nt), Z.nodes().not(":parent").not(Nt).layoutPositions(b, C, Q), It.length > 0 && It.forEach(function(vt) {
                          vt.position(Q(vt));
                        });
                      } else
                        console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
                    }
                  }]), v;
                })();
                a.exports = d;
              })
            ),
            /***/
            657: (
              /***/
              ((a, e, r) => {
                var l = r(548), i = r(140).layoutBase.Matrix, g = r(140).layoutBase.SVD, t2 = function(s) {
                  var c = s.cy, f = s.eles, T = f.nodes(), d = f.nodes(":parent"), v = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), C = [], G = [], Z = [], Y = [], K = [], O = [], it = [], n = [], m = void 0, p3 = 1e8, E = 1e-9, y = s.piTol, R = s.samplingType, M = s.nodeSeparation, S = void 0, W = function() {
                    for (var U = 0, B = 0, J = false; B < S; ) {
                      U = Math.floor(Math.random() * m), J = false;
                      for (var k = 0; k < B; k++)
                        if (Y[k] == U) {
                          J = true;
                          break;
                        }
                      if (!J)
                        Y[B] = U, B++;
                      else
                        continue;
                    }
                  }, D = function(U, B, J) {
                    for (var k = [], at = 0, ct = 0, nt = 0, tt = void 0, j = [], ut = 0, Mt = 1, pt = 0; pt < m; pt++)
                      j[pt] = p3;
                    for (k[ct] = U, j[U] = 0; ct >= at; ) {
                      nt = k[at++];
                      for (var xt = C[nt], lt = 0; lt < xt.length; lt++)
                        tt = L.get(xt[lt]), j[tt] == p3 && (j[tt] = j[nt] + 1, k[++ct] = tt);
                      O[nt][B] = j[nt] * M;
                    }
                    if (J) {
                      for (var ot = 0; ot < m; ot++)
                        O[ot][B] < K[ot] && (K[ot] = O[ot][B]);
                      for (var Lt = 0; Lt < m; Lt++)
                        K[Lt] > ut && (ut = K[Lt], Mt = Lt);
                    }
                    return Mt;
                  }, q = function(U) {
                    var B = void 0;
                    if (U) {
                      B = Math.floor(Math.random() * m);
                      for (var k = 0; k < m; k++)
                        K[k] = p3;
                      for (var at = 0; at < S; at++)
                        Y[at] = B, B = D(B, at, U);
                    } else {
                      W();
                      for (var J = 0; J < S; J++)
                        D(Y[J], J, U);
                    }
                    for (var ct = 0; ct < m; ct++)
                      for (var nt = 0; nt < S; nt++)
                        O[ct][nt] *= O[ct][nt];
                    for (var tt = 0; tt < S; tt++)
                      it[tt] = [];
                    for (var j = 0; j < S; j++)
                      for (var ut = 0; ut < S; ut++)
                        it[j][ut] = O[Y[ut]][j];
                  }, V = function() {
                    for (var U = g.svd(it), B = U.S, J = U.U, k = U.V, at = B[0] * B[0] * B[0], ct = [], nt = 0; nt < S; nt++) {
                      ct[nt] = [];
                      for (var tt = 0; tt < S; tt++)
                        ct[nt][tt] = 0, nt == tt && (ct[nt][tt] = B[nt] / (B[nt] * B[nt] + at / (B[nt] * B[nt])));
                    }
                    n = i.multMat(i.multMat(k, ct), i.transpose(J));
                  }, X = function() {
                    for (var U = void 0, B = void 0, J = [], k = [], at = [], ct = [], nt = 0; nt < m; nt++)
                      J[nt] = Math.random(), k[nt] = Math.random();
                    J = i.normalize(J), k = i.normalize(k);
                    for (var tt = E, j = E, ut = void 0; ; ) {
                      for (var Mt = 0; Mt < m; Mt++)
                        at[Mt] = J[Mt];
                      if (J = i.multGamma(i.multL(i.multGamma(at), O, n)), U = i.dotProduct(at, J), J = i.normalize(J), tt = i.dotProduct(at, J), ut = Math.abs(tt / j), ut <= 1 + y && ut >= 1)
                        break;
                      j = tt;
                    }
                    for (var pt = 0; pt < m; pt++)
                      at[pt] = J[pt];
                    for (j = E; ; ) {
                      for (var xt = 0; xt < m; xt++)
                        ct[xt] = k[xt];
                      if (ct = i.minusOp(ct, i.multCons(at, i.dotProduct(at, ct))), k = i.multGamma(i.multL(i.multGamma(ct), O, n)), B = i.dotProduct(ct, k), k = i.normalize(k), tt = i.dotProduct(ct, k), ut = Math.abs(tt / j), ut <= 1 + y && ut >= 1)
                        break;
                      j = tt;
                    }
                    for (var lt = 0; lt < m; lt++)
                      ct[lt] = k[lt];
                    G = i.multCons(at, Math.sqrt(Math.abs(U))), Z = i.multCons(ct, Math.sqrt(Math.abs(B)));
                  };
                  l.connectComponents(c, f, l.getTopMostNodes(T), v), d.forEach(function(F2) {
                    l.connectComponents(c, f, l.getTopMostNodes(F2.descendants().intersection(f)), v);
                  });
                  for (var et = 0, z = 0; z < T.length; z++)
                    T[z].isParent() || L.set(T[z].id(), et++);
                  var w = true, H = false, $ = void 0;
                  try {
                    for (var _ = v.keys()[Symbol.iterator](), ht2; !(w = (ht2 = _.next()).done); w = true) {
                      var Q = ht2.value;
                      L.set(Q, et++);
                    }
                  } catch (F2) {
                    H = true, $ = F2;
                  } finally {
                    try {
                      !w && _.return && _.return();
                    } finally {
                      if (H)
                        throw $;
                    }
                  }
                  for (var It = 0; It < L.size; It++)
                    C[It] = [];
                  d.forEach(function(F2) {
                    for (var U = F2.children().intersection(f); U.nodes(":childless").length == 0; )
                      U = U.nodes()[0].children().intersection(f);
                    var B = 0, J = U.nodes(":childless")[0].connectedEdges().length;
                    U.nodes(":childless").forEach(function(k, at) {
                      k.connectedEdges().length < J && (J = k.connectedEdges().length, B = at);
                    }), b.set(F2.id(), U.nodes(":childless")[B].id());
                  }), T.forEach(function(F2) {
                    var U = void 0;
                    F2.isParent() ? U = L.get(b.get(F2.id())) : U = L.get(F2.id()), F2.neighborhood().nodes().forEach(function(B) {
                      f.intersection(F2.edgesWith(B)).length > 0 && (B.isParent() ? C[U].push(b.get(B.id())) : C[U].push(B.id()));
                    });
                  });
                  var Nt = function(U) {
                    var B = L.get(U), J = void 0;
                    v.get(U).forEach(function(k) {
                      c.getElementById(k).isParent() ? J = b.get(k) : J = k, C[B].push(J), C[L.get(J)].push(U);
                    });
                  }, vt = true, rt = false, gt = void 0;
                  try {
                    for (var mt = v.keys()[Symbol.iterator](), At; !(vt = (At = mt.next()).done); vt = true) {
                      var Ot = At.value;
                      Nt(Ot);
                    }
                  } catch (F2) {
                    rt = true, gt = F2;
                  } finally {
                    try {
                      !vt && mt.return && mt.return();
                    } finally {
                      if (rt)
                        throw gt;
                    }
                  }
                  m = L.size;
                  var Et = void 0;
                  if (m > 2) {
                    S = m < s.sampleSize ? m : s.sampleSize;
                    for (var Dt2 = 0; Dt2 < m; Dt2++)
                      O[Dt2] = [];
                    for (var Rt = 0; Rt < S; Rt++)
                      n[Rt] = [];
                    return s.quality == "draft" || s.step == "all" ? (q(R), V(), X(), Et = { nodeIndexes: L, xCoords: G, yCoords: Z }) : (L.forEach(function(F2, U) {
                      G.push(c.getElementById(U).position("x")), Z.push(c.getElementById(U).position("y"));
                    }), Et = { nodeIndexes: L, xCoords: G, yCoords: Z }), Et;
                  } else {
                    var Ht = L.keys(), Ut = c.getElementById(Ht.next().value), Pt = Ut.position(), Ft = Ut.outerWidth();
                    if (G.push(Pt.x), Z.push(Pt.y), m == 2) {
                      var Yt = c.getElementById(Ht.next().value), Vt = Yt.outerWidth();
                      G.push(Pt.x + Ft / 2 + Vt / 2 + s.idealEdgeLength), Z.push(Pt.y);
                    }
                    return Et = { nodeIndexes: L, xCoords: G, yCoords: Z }, Et;
                  }
                };
                a.exports = { spectralLayout: t2 };
              })
            ),
            /***/
            579: (
              /***/
              ((a, e, r) => {
                var l = r(212), i = function(t2) {
                  t2 && t2("layout", "fcose", l);
                };
                typeof cytoscape < "u" && i(cytoscape), a.exports = i;
              })
            ),
            /***/
            140: (
              /***/
              ((a) => {
                a.exports = A;
              })
            )
            /******/
          }, N = {};
          function u(a) {
            var e = N[a];
            if (e !== void 0)
              return e.exports;
            var r = N[a] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return P[a](r, r.exports, u), r.exports;
          }
          var h = u(579);
          return h;
        })()
      );
    });
  })(he)), he.exports;
}
var Er = yr();
const mr = /* @__PURE__ */ c0(Er);
var xe = {
  L: "left",
  R: "right",
  T: "top",
  B: "bottom"
}, Ie = {
  L: /* @__PURE__ */ p((I) => `${I},${I / 2} 0,${I} 0,0`, "L"),
  R: /* @__PURE__ */ p((I) => `0,${I / 2} ${I},0 ${I},${I}`, "R"),
  T: /* @__PURE__ */ p((I) => `0,0 ${I},0 ${I / 2},${I}`, "T"),
  B: /* @__PURE__ */ p((I) => `${I / 2},0 ${I},${I} 0,${I}`, "B")
}, se = {
  L: /* @__PURE__ */ p((I, x) => I - x + 2, "L"),
  R: /* @__PURE__ */ p((I, x) => I - 2, "R"),
  T: /* @__PURE__ */ p((I, x) => I - x + 2, "T"),
  B: /* @__PURE__ */ p((I, x) => I - 2, "B")
}, Tr = /* @__PURE__ */ p(function(I) {
  return Wt(I) ? I === "L" ? "R" : "L" : I === "T" ? "B" : "T";
}, "getOppositeArchitectureDirection"), Re = /* @__PURE__ */ p(function(I) {
  const x = I;
  return x === "L" || x === "R" || x === "T" || x === "B";
}, "isArchitectureDirection"), Wt = /* @__PURE__ */ p(function(I) {
  const x = I;
  return x === "L" || x === "R";
}, "isArchitectureDirectionX"), qt = /* @__PURE__ */ p(function(I) {
  const x = I;
  return x === "T" || x === "B";
}, "isArchitectureDirectionY"), Te = /* @__PURE__ */ p(function(I, x) {
  const A = Wt(I) && qt(x), P = qt(I) && Wt(x);
  return A || P;
}, "isArchitectureDirectionXY"), Nr = /* @__PURE__ */ p(function(I) {
  const x = I[0], A = I[1], P = Wt(x) && qt(A), N = qt(x) && Wt(A);
  return P || N;
}, "isArchitecturePairXY"), Lr = /* @__PURE__ */ p(function(I) {
  return I !== "LL" && I !== "RR" && I !== "TT" && I !== "BB";
}, "isValidArchitectureDirectionPair"), ye = /* @__PURE__ */ p(function(I, x) {
  const A = `${I}${x}`;
  return Lr(A) ? A : void 0;
}, "getArchitectureDirectionPair"), Cr = /* @__PURE__ */ p(function([I, x], A) {
  const P = A[0], N = A[1];
  return Wt(P) ? qt(N) ? [I + (P === "L" ? -1 : 1), x + (N === "T" ? 1 : -1)] : [I + (P === "L" ? -1 : 1), x] : Wt(N) ? [I + (N === "L" ? 1 : -1), x + (P === "T" ? 1 : -1)] : [I, x + (P === "T" ? 1 : -1)];
}, "shiftPositionByArchitectureDirectionPair"), Ar = /* @__PURE__ */ p(function(I) {
  return I === "LT" || I === "TL" ? [1, 1] : I === "BL" || I === "LB" ? [1, -1] : I === "BR" || I === "RB" ? [-1, -1] : [-1, 1];
}, "getArchitectureDirectionXYFactors"), Mr = /* @__PURE__ */ p(function(I, x) {
  return Te(I, x) ? "bend" : Wt(I) ? "horizontal" : "vertical";
}, "getArchitectureDirectionAlignment"), wr = /* @__PURE__ */ p(function(I) {
  return I.type === "service";
}, "isArchitectureService"), Or = /* @__PURE__ */ p(function(I) {
  return I.type === "junction";
}, "isArchitectureJunction"), be = /* @__PURE__ */ p((I) => I.data(), "edgeData"), ie = /* @__PURE__ */ p((I) => I.data(), "nodeData"), Dr = Nh.architecture, ae, Pe = (ae = class {
  constructor() {
    this.nodes = {}, this.groups = {}, this.edges = [], this.registeredIds = {}, this.elements = {}, this.setAccTitle = Ay, this.getAccTitle = Ly, this.setDiagramTitle = Ey, this.getDiagramTitle = Fy, this.getAccDescription = $y, this.setAccDescription = My, this.clear();
  }
  clear() {
    this.nodes = {}, this.groups = {}, this.edges = [], this.registeredIds = {}, this.dataStructures = void 0, this.elements = {}, By();
  }
  addService({
    id: x,
    icon: A,
    in: P,
    title: N,
    iconText: u
  }) {
    if (this.registeredIds[x] !== void 0)
      throw new Error(
        `The service id [${x}] is already in use by another ${this.registeredIds[x]}`
      );
    if (P !== void 0) {
      if (x === P)
        throw new Error(`The service [${x}] cannot be placed within itself`);
      if (this.registeredIds[P] === void 0)
        throw new Error(
          `The service [${x}]'s parent does not exist. Please make sure the parent is created before this service`
        );
      if (this.registeredIds[P] === "node")
        throw new Error(`The service [${x}]'s parent is not a group`);
    }
    this.registeredIds[x] = "node", this.nodes[x] = {
      id: x,
      type: "service",
      icon: A,
      iconText: u,
      title: N,
      edges: [],
      in: P
    };
  }
  getServices() {
    return Object.values(this.nodes).filter(wr);
  }
  addJunction({ id: x, in: A }) {
    this.registeredIds[x] = "node", this.nodes[x] = {
      id: x,
      type: "junction",
      edges: [],
      in: A
    };
  }
  getJunctions() {
    return Object.values(this.nodes).filter(Or);
  }
  getNodes() {
    return Object.values(this.nodes);
  }
  getNode(x) {
    return this.nodes[x] ?? null;
  }
  addGroup({ id: x, icon: A, in: P, title: N }) {
    if (this.registeredIds?.[x] !== void 0)
      throw new Error(
        `The group id [${x}] is already in use by another ${this.registeredIds[x]}`
      );
    if (P !== void 0) {
      if (x === P)
        throw new Error(`The group [${x}] cannot be placed within itself`);
      if (this.registeredIds?.[P] === void 0)
        throw new Error(
          `The group [${x}]'s parent does not exist. Please make sure the parent is created before this group`
        );
      if (this.registeredIds?.[P] === "node")
        throw new Error(`The group [${x}]'s parent is not a group`);
    }
    this.registeredIds[x] = "group", this.groups[x] = {
      id: x,
      icon: A,
      title: N,
      in: P
    };
  }
  getGroups() {
    return Object.values(this.groups);
  }
  addEdge({
    lhsId: x,
    rhsId: A,
    lhsDir: P,
    rhsDir: N,
    lhsInto: u,
    rhsInto: h,
    lhsGroup: a,
    rhsGroup: e,
    title: r
  }) {
    if (!Re(P))
      throw new Error(
        `Invalid direction given for left hand side of edge ${x}--${A}. Expected (L,R,T,B) got ${String(P)}`
      );
    if (!Re(N))
      throw new Error(
        `Invalid direction given for right hand side of edge ${x}--${A}. Expected (L,R,T,B) got ${String(N)}`
      );
    if (this.nodes[x] === void 0 && this.groups[x] === void 0)
      throw new Error(
        `The left-hand id [${x}] does not yet exist. Please create the service/group before declaring an edge to it.`
      );
    if (this.nodes[A] === void 0 && this.groups[A] === void 0)
      throw new Error(
        `The right-hand id [${A}] does not yet exist. Please create the service/group before declaring an edge to it.`
      );
    const l = this.nodes[x].in, i = this.nodes[A].in;
    if (a && l && i && l == i)
      throw new Error(
        `The left-hand id [${x}] is modified to traverse the group boundary, but the edge does not pass through two groups.`
      );
    if (e && l && i && l == i)
      throw new Error(
        `The right-hand id [${A}] is modified to traverse the group boundary, but the edge does not pass through two groups.`
      );
    const g = {
      lhsId: x,
      lhsDir: P,
      lhsInto: u,
      lhsGroup: a,
      rhsId: A,
      rhsDir: N,
      rhsInto: h,
      rhsGroup: e,
      title: r
    };
    this.edges.push(g), this.nodes[x] && this.nodes[A] && (this.nodes[x].edges.push(this.edges[this.edges.length - 1]), this.nodes[A].edges.push(this.edges[this.edges.length - 1]));
  }
  getEdges() {
    return this.edges;
  }
  /**
   * Returns the current diagram's adjacency list, spatial map, & group alignments.
   * If they have not been created, run the algorithms to generate them.
   * @returns
   */
  getDataStructures() {
    if (this.dataStructures === void 0) {
      const x = {}, A = Object.entries(this.nodes).reduce((e, [r, l]) => (e[r] = l.edges.reduce((i, g) => {
        const t2 = this.getNode(g.lhsId)?.in, o = this.getNode(g.rhsId)?.in;
        if (t2 && o && t2 !== o) {
          const s = Mr(g.lhsDir, g.rhsDir);
          s !== "bend" && (x[t2] ??= {}, x[t2][o] = s, x[o] ??= {}, x[o][t2] = s);
        }
        if (g.lhsId === r) {
          const s = ye(g.lhsDir, g.rhsDir);
          s && (i[s] = g.rhsId);
        } else {
          const s = ye(g.rhsDir, g.lhsDir);
          s && (i[s] = g.lhsId);
        }
        return i;
      }, {}), e), {}), P = Object.keys(A)[0], N = { [P]: 1 }, u = Object.keys(A).reduce(
        (e, r) => r === P ? e : { ...e, [r]: 1 },
        {}
      ), h = /* @__PURE__ */ p((e) => {
        const r = { [e]: [0, 0] }, l = [e];
        for (; l.length > 0; ) {
          const i = l.shift();
          if (i) {
            N[i] = 1, delete u[i];
            const g = A[i], [t2, o] = r[i];
            Object.entries(g).forEach(([s, c]) => {
              N[c] || (r[c] = Cr(
                [t2, o],
                s
              ), l.push(c));
            });
          }
        }
        return r;
      }, "BFS"), a = [h(P)];
      for (; Object.keys(u).length > 0; )
        a.push(h(Object.keys(u)[0]));
      this.dataStructures = {
        adjList: A,
        spatialMaps: a,
        groupAlignments: x
      };
    }
    return this.dataStructures;
  }
  setElementForId(x, A) {
    this.elements[x] = A;
  }
  getElementById(x) {
    return this.elements[x];
  }
  getConfig() {
    return cl({
      ...Dr,
      ...Dt().architecture
    });
  }
  getConfigField(x) {
    return this.getConfig()[x];
  }
}, p(ae, "ArchitectureDB"), ae), xr = /* @__PURE__ */ p((I, x) => {
  t(I, x), I.groups.map((A) => x.addGroup(A)), I.services.map((A) => x.addService({ ...A, type: "service" })), I.junctions.map((A) => x.addJunction({ ...A, type: "junction" })), I.edges.map((A) => x.addEdge(A));
}, "populateDb"), Ge = {
  parser: {
    // @ts-expect-error - ArchitectureDB is not assignable to DiagramDB
    yy: void 0
  },
  parse: /* @__PURE__ */ p(async (I) => {
    const x = await Gk("architecture", I);
    F.debug(x);
    const A = Ge.parser?.yy;
    if (!(A instanceof Pe))
      throw new Error(
        "parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues."
      );
    xr(x, A);
  }, "parse")
}, Ir = /* @__PURE__ */ p((I) => `
  .edge {
    stroke-width: ${I.archEdgeWidth};
    stroke: ${I.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${I.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${I.archGroupBorderColor};
    stroke-width: ${I.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, "getStyles"), Rr = Ir, re = /* @__PURE__ */ p((I) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${I}</g>`, "wrapIcon"), ne = {
  prefix: "mermaid-architecture",
  height: 80,
  width: 80,
  icons: {
    database: {
      body: re(
        '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    server: {
      body: re(
        '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>'
      )
    },
    disk: {
      body: re(
        '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>'
      )
    },
    internet: {
      body: re(
        '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    cloud: {
      body: re(
        '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    unknown: kv,
    blank: {
      body: re("")
    }
  }
}, Sr = /* @__PURE__ */ p(async function(I, x, A) {
  const P = A.getConfigField("padding"), N = A.getConfigField("iconSize"), u = N / 2, h = N / 6, a = h / 2;
  await Promise.all(
    x.edges().map(async (e) => {
      const {
        source: r,
        sourceDir: l,
        sourceArrow: i,
        sourceGroup: g,
        target: t2,
        targetDir: o,
        targetArrow: s,
        targetGroup: c,
        label: f
      } = be(e);
      let { x: T, y: d } = e[0].sourceEndpoint();
      const { x: v, y: L } = e[0].midpoint();
      let { x: b, y: C } = e[0].targetEndpoint();
      const G = P + 4;
      if (g && (Wt(l) ? T += l === "L" ? -G : G : d += l === "T" ? -G : G + 18), c && (Wt(o) ? b += o === "L" ? -G : G : C += o === "T" ? -G : G + 18), !g && A.getNode(r)?.type === "junction" && (Wt(l) ? T += l === "L" ? u : -u : d += l === "T" ? u : -u), !c && A.getNode(t2)?.type === "junction" && (Wt(o) ? b += o === "L" ? u : -u : C += o === "T" ? u : -u), e[0]._private.rscratch) {
        const Z = I.insert("g");
        if (Z.insert("path").attr("d", `M ${T},${d} L ${v},${L} L${b},${C} `).attr("class", "edge").attr("id", _L(r, t2, { prefix: "L" })), i) {
          const Y = Wt(l) ? se[l](T, h) : T - a, K = qt(l) ? se[l](d, h) : d - a;
          Z.insert("polygon").attr("points", Ie[l](h)).attr("transform", `translate(${Y},${K})`).attr("class", "arrow");
        }
        if (s) {
          const Y = Wt(o) ? se[o](b, h) : b - a, K = qt(o) ? se[o](C, h) : C - a;
          Z.insert("polygon").attr("points", Ie[o](h)).attr("transform", `translate(${Y},${K})`).attr("class", "arrow");
        }
        if (f) {
          const Y = Te(l, o) ? "XY" : Wt(l) ? "X" : "Y";
          let K = 0;
          Y === "X" ? K = Math.abs(T - b) : Y === "Y" ? K = Math.abs(d - C) / 1.5 : K = Math.abs(T - b) / 2;
          const O = Z.append("g");
          if (await Xe$1(
            O,
            f,
            {
              useHtmlLabels: false,
              width: K,
              classes: "architecture-service-label"
            },
            ft()
          ), O.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), Y === "X")
            O.attr("transform", "translate(" + v + ", " + L + ")");
          else if (Y === "Y")
            O.attr("transform", "translate(" + v + ", " + L + ") rotate(-90)");
          else if (Y === "XY") {
            const it = ye(l, o);
            if (it && Nr(it)) {
              const n = O.node().getBoundingClientRect(), [m, p3] = Ar(it);
              O.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * m * p3 * 45})`);
              const E = O.node().getBoundingClientRect();
              O.attr(
                "transform",
                `
                translate(${v}, ${L - n.height / 2})
                translate(${m * E.width / 2}, ${p3 * E.height / 2})
                rotate(${-1 * m * p3 * 45}, 0, ${n.height / 2})
              `
              );
            }
          }
        }
      }
    })
  );
}, "drawEdges"), Fr = /* @__PURE__ */ p(async function(I, x, A) {
  const N = A.getConfigField("padding") * 0.75, u = A.getConfigField("fontSize"), a = A.getConfigField("iconSize") / 2;
  await Promise.all(
    x.nodes().map(async (e) => {
      const r = ie(e);
      if (r.type === "group") {
        const { h: l, w: i, x1: g, y1: t2 } = e.boundingBox(), o = I.append("rect");
        o.attr("id", `group-${r.id}`).attr("x", g + a).attr("y", t2 + a).attr("width", i).attr("height", l).attr("class", "node-bkg");
        const s = I.append("g");
        let c = g, f = t2;
        if (r.icon) {
          const T = s.append("g");
          T.html(
            `<g>${await tn(r.icon, { height: N, width: N, fallbackPrefix: ne.prefix })}</g>`
          ), T.attr(
            "transform",
            "translate(" + (c + a + 1) + ", " + (f + a + 1) + ")"
          ), c += N, f += u / 2 - 1 - 2;
        }
        if (r.label) {
          const T = s.append("g");
          await Xe$1(
            T,
            r.label,
            {
              useHtmlLabels: false,
              width: i,
              classes: "architecture-service-label"
            },
            ft()
          ), T.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start"), T.attr(
            "transform",
            "translate(" + (c + a + 4) + ", " + (f + a + 2) + ")"
          );
        }
        A.setElementForId(r.id, o);
      }
    })
  );
}, "drawGroups"), br = /* @__PURE__ */ p(async function(I, x, A) {
  const P = ft();
  for (const N of A) {
    const u = x.append("g"), h = I.getConfigField("iconSize");
    if (N.title) {
      const l = u.append("g");
      await Xe$1(
        l,
        N.title,
        {
          useHtmlLabels: false,
          width: h * 1.5,
          classes: "architecture-service-label"
        },
        P
      ), l.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), l.attr("transform", "translate(" + h / 2 + ", " + h + ")");
    }
    const a = u.append("g");
    if (N.icon)
      a.html(
        `<g>${await tn(N.icon, { height: h, width: h, fallbackPrefix: ne.prefix })}</g>`
      );
    else if (N.iconText) {
      a.html(
        `<g>${await tn("blank", { height: h, width: h, fallbackPrefix: ne.prefix })}</g>`
      );
      const g = a.append("g").append("foreignObject").attr("width", h).attr("height", h).append("div").attr("class", "node-icon-text").attr("style", `height: ${h}px;`).append("div").html(te(N.iconText, P)), t2 = parseInt(
        window.getComputedStyle(g.node(), null).getPropertyValue("font-size").replace(/\D/g, "")
      ) ?? 16;
      g.attr("style", `-webkit-line-clamp: ${Math.floor((h - 2) / t2)};`);
    } else
      a.append("path").attr("class", "node-bkg").attr("id", "node-" + N.id).attr(
        "d",
        `M0 ${h} v${-h} q0,-5 5,-5 h${h} q5,0 5,5 v${h} H0 Z`
      );
    u.attr("id", `service-${N.id}`).attr("class", "architecture-service");
    const { width: e, height: r } = u.node().getBBox();
    N.width = e, N.height = r, I.setElementForId(N.id, u);
  }
  return 0;
}, "drawServices"), Pr = /* @__PURE__ */ p(function(I, x, A) {
  A.forEach((P) => {
    const N = x.append("g"), u = I.getConfigField("iconSize");
    N.append("g").append("rect").attr("id", "node-" + P.id).attr("fill-opacity", "0").attr("width", u).attr("height", u), N.attr("class", "architecture-junction");
    const { width: a, height: e } = N._groups[0][0].getBBox();
    N.width = a, N.height = e, I.setElementForId(P.id, N);
  });
}, "drawJunctions");
vv([
  {
    name: ne.prefix,
    icons: ne
  }
]);
ea.use(mr);
function Ue(I, x, A) {
  I.forEach((P) => {
    x.add({
      group: "nodes",
      data: {
        type: "service",
        id: P.id,
        icon: P.icon,
        label: P.title,
        parent: P.in,
        width: A.getConfigField("iconSize"),
        height: A.getConfigField("iconSize")
      },
      classes: "node-service"
    });
  });
}
p(Ue, "addServices");
function Ye(I, x, A) {
  I.forEach((P) => {
    x.add({
      group: "nodes",
      data: {
        type: "junction",
        id: P.id,
        parent: P.in,
        width: A.getConfigField("iconSize"),
        height: A.getConfigField("iconSize")
      },
      classes: "node-junction"
    });
  });
}
p(Ye, "addJunctions");
function Xe(I, x) {
  x.nodes().map((A) => {
    const P = ie(A);
    if (P.type === "group")
      return;
    P.x = A.position().x, P.y = A.position().y, I.getElementById(P.id).attr("transform", "translate(" + (P.x || 0) + "," + (P.y || 0) + ")");
  });
}
p(Xe, "positionNodes");
function He(I, x) {
  I.forEach((A) => {
    x.add({
      group: "nodes",
      data: {
        type: "group",
        id: A.id,
        icon: A.icon,
        label: A.title,
        parent: A.in
      },
      classes: "node-group"
    });
  });
}
p(He, "addGroups");
function We(I, x) {
  I.forEach((A) => {
    const { lhsId: P, rhsId: N, lhsInto: u, lhsGroup: h, rhsInto: a, lhsDir: e, rhsDir: r, rhsGroup: l, title: i } = A, g = Te(A.lhsDir, A.rhsDir) ? "segments" : "straight", t2 = {
      id: `${P}-${N}`,
      label: i,
      source: P,
      sourceDir: e,
      sourceArrow: u,
      sourceGroup: h,
      sourceEndpoint: e === "L" ? "0 50%" : e === "R" ? "100% 50%" : e === "T" ? "50% 0" : "50% 100%",
      target: N,
      targetDir: r,
      targetArrow: a,
      targetGroup: l,
      targetEndpoint: r === "L" ? "0 50%" : r === "R" ? "100% 50%" : r === "T" ? "50% 0" : "50% 100%"
    };
    x.add({
      group: "edges",
      data: t2,
      classes: g
    });
  });
}
p(We, "addEdges");
function Ve(I, x, A) {
  const P = /* @__PURE__ */ p((a, e) => Object.entries(a).reduce(
    (r, [l, i]) => {
      let g = 0;
      const t2 = Object.entries(i);
      if (t2.length === 1)
        return r[l] = t2[0][1], r;
      for (let o = 0; o < t2.length - 1; o++)
        for (let s = o + 1; s < t2.length; s++) {
          const [c, f] = t2[o], [T, d] = t2[s];
          if (A[c]?.[T] === e)
            r[l] ??= [], r[l] = [...r[l], ...f, ...d];
          else if (c === "default" || T === "default")
            r[l] ??= [], r[l] = [...r[l], ...f, ...d];
          else {
            const L = `${l}-${g++}`;
            r[L] = f;
            const b = `${l}-${g++}`;
            r[b] = d;
          }
        }
      return r;
    },
    {}
  ), "flattenAlignments"), N = x.map((a) => {
    const e = {}, r = {};
    return Object.entries(a).forEach(([l, [i, g]]) => {
      const t2 = I.getNode(l)?.in ?? "default";
      e[g] ??= {}, e[g][t2] ??= [], e[g][t2].push(l), r[i] ??= {}, r[i][t2] ??= [], r[i][t2].push(l);
    }), {
      horiz: Object.values(P(e, "horizontal")).filter(
        (l) => l.length > 1
      ),
      vert: Object.values(P(r, "vertical")).filter(
        (l) => l.length > 1
      )
    };
  }), [u, h] = N.reduce(
    ([a, e], { horiz: r, vert: l }) => [
      [...a, ...r],
      [...e, ...l]
    ],
    [[], []]
  );
  return {
    horizontal: u,
    vertical: h
  };
}
p(Ve, "getAlignments");
function ze(I, x) {
  const A = [], P = /* @__PURE__ */ p((u) => `${u[0]},${u[1]}`, "posToStr"), N = /* @__PURE__ */ p((u) => u.split(",").map((h) => parseInt(h)), "strToPos");
  return I.forEach((u) => {
    const h = Object.fromEntries(
      Object.entries(u).map(([l, i]) => [P(i), l])
    ), a = [P([0, 0])], e = {}, r = {
      L: [-1, 0],
      R: [1, 0],
      T: [0, 1],
      B: [0, -1]
    };
    for (; a.length > 0; ) {
      const l = a.shift();
      if (l) {
        e[l] = 1;
        const i = h[l];
        if (i) {
          const g = N(l);
          Object.entries(r).forEach(([t2, o]) => {
            const s = P([g[0] + o[0], g[1] + o[1]]), c = h[s];
            c && !e[s] && (a.push(s), A.push({
              [xe[t2]]: c,
              [xe[Tr(t2)]]: i,
              gap: 1.5 * x.getConfigField("iconSize")
            }));
          });
        }
      }
    }
  }), A;
}
p(ze, "getRelativeConstraints");
function $e(I, x, A, P, N, { spatialMaps: u, groupAlignments: h }) {
  return new Promise((a) => {
    const e = ht("body").append("div").attr("id", "cy").attr("style", "display:none"), r = ea({
      container: document.getElementById("cy"),
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "straight",
            label: "data(label)",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        },
        {
          selector: "edge.segments",
          style: {
            "curve-style": "segments",
            "segment-weights": "0",
            "segment-distances": [0.5],
            // @ts-ignore Incorrect library types
            "edge-distances": "endpoints",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        },
        {
          selector: "node",
          style: {
            // @ts-ignore Incorrect library types
            "compound-sizing-wrt-labels": "include"
          }
        },
        {
          selector: "node[label]",
          style: {
            "text-valign": "bottom",
            "text-halign": "center",
            "font-size": `${N.getConfigField("fontSize")}px`
          }
        },
        {
          selector: ".node-service",
          style: {
            label: "data(label)",
            width: "data(width)",
            height: "data(height)"
          }
        },
        {
          selector: ".node-junction",
          style: {
            width: "data(width)",
            height: "data(height)"
          }
        },
        {
          selector: ".node-group",
          style: {
            // @ts-ignore Incorrect library types
            padding: `${N.getConfigField("padding")}px`
          }
        }
      ],
      layout: {
        name: "grid",
        boundingBox: {
          x1: 0,
          x2: 100,
          y1: 0,
          y2: 100
        }
      }
    });
    e.remove(), He(A, r), Ue(I, r, N), Ye(x, r, N), We(P, r);
    const l = Ve(N, u, h), i = ze(u, N), g = r.layout({
      name: "fcose",
      quality: "proof",
      styleEnabled: false,
      animate: false,
      nodeDimensionsIncludeLabels: false,
      // Adjust the edge parameters if it passes through the border of a group
      // Hacky fix for: https://github.com/iVis-at-Bilkent/cytoscape.js-fcose/issues/67
      idealEdgeLength(t2) {
        const [o, s] = t2.connectedNodes(), { parent: c } = ie(o), { parent: f } = ie(s);
        return c === f ? 1.5 * N.getConfigField("iconSize") : 0.5 * N.getConfigField("iconSize");
      },
      edgeElasticity(t2) {
        const [o, s] = t2.connectedNodes(), { parent: c } = ie(o), { parent: f } = ie(s);
        return c === f ? 0.45 : 1e-3;
      },
      alignmentConstraint: l,
      relativePlacementConstraint: i
    });
    g.one("layoutstop", () => {
      function t2(o, s, c, f) {
        let T, d;
        const { x: v, y: L } = o, { x: b, y: C } = s;
        d = (f - L + (v - c) * (L - C) / (v - b)) / Math.sqrt(1 + Math.pow((L - C) / (v - b), 2)), T = Math.sqrt(Math.pow(f - L, 2) + Math.pow(c - v, 2) - Math.pow(d, 2));
        const G = Math.sqrt(Math.pow(b - v, 2) + Math.pow(C - L, 2));
        T = T / G;
        let Z = (b - v) * (f - L) - (C - L) * (c - v);
        switch (true) {
          case Z >= 0:
            Z = 1;
            break;
          case Z < 0:
            Z = -1;
            break;
        }
        let Y = (b - v) * (c - v) + (C - L) * (f - L);
        switch (true) {
          case Y >= 0:
            Y = 1;
            break;
          case Y < 0:
            Y = -1;
            break;
        }
        return d = Math.abs(d) * Z, T = T * Y, {
          distances: d,
          weights: T
        };
      }
      p(t2, "getSegmentWeights"), r.startBatch();
      for (const o of Object.values(r.edges()))
        if (o.data?.()) {
          const { x: s, y: c } = o.source().position(), { x: f, y: T } = o.target().position();
          if (s !== f && c !== T) {
            const d = o.sourceEndpoint(), v = o.targetEndpoint(), { sourceDir: L } = be(o), [b, C] = qt(L) ? [d.x, v.y] : [v.x, d.y], { weights: G, distances: Z } = t2(d, v, b, C);
            o.style("segment-distances", Z), o.style("segment-weights", G);
          }
        }
      r.endBatch(), g.run();
    }), g.run(), r.ready((t2) => {
      F.info("Ready", t2), a(r);
    });
  });
}
p($e, "layoutArchitecture");
var Gr = /* @__PURE__ */ p(async (I, x, A, P) => {
  const N = P.db, u = N.getServices(), h = N.getJunctions(), a = N.getGroups(), e = N.getEdges(), r = N.getDataStructures(), l = p2(x), i = l.append("g");
  i.attr("class", "architecture-edges");
  const g = l.append("g");
  g.attr("class", "architecture-services");
  const t2 = l.append("g");
  t2.attr("class", "architecture-groups"), await br(N, g, u), Pr(N, g, h);
  const o = await $e(u, h, a, e, N, r);
  await Sr(i, o, N), await Fr(t2, o, N), Xe(N, o), ky(void 0, l, N.getConfigField("padding"), N.getConfigField("useMaxWidth"));
}, "draw"), Ur = { draw: Gr }, Vr = {
  parser: Ge,
  get db() {
    return new Pe();
  },
  renderer: Ur,
  styles: Rr
};
export {
  Vr as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl0ZWN0dXJlRGlhZ3JhbS1WWFVKQVJGUS1DU3dlci1YYS04dDd5Q3RtOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1tZXJtYWlkLXN0cmluZy9kaXN0L2FyY2hpdGVjdHVyZURpYWdyYW0tVlhVSkFSRlEtQ1N3ZXItWGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYUcgYXMga2UsIF8gYXMgZHQsIEggYXMgWmUsIFYgYXMgcWUsIGwgYXMgU2UsIGIgYXMgUWUsIGEgYXMgSmUsIHAgYXMgS2UsIHEgYXMgamUsIGcgYXMgX2UsIHMgYXMgdHIsIHkgYXMgZXIsIEQgYXMgcnIsIEUgYXMgaXIsIEYgYXMgYXIsIGMgYXMgRWUsIGFrIGFzIG1lLCBhSCBhcyBwZSwgaSBhcyBuciwgZCBhcyBvciwgeCBhcyBzciwgYUkgYXMgaHIsIGFKIGFzIGxyIH0gZnJvbSBcIi4vZW50cnktQjJWWC1reGEuanNcIjtcbmltcG9ydCB7IHAgYXMgZnIgfSBmcm9tIFwiLi9jaHVuay00QlgyVlVBQi1YekhEcnJ0UC5qc1wiO1xuaW1wb3J0IHsgcCBhcyBjciB9IGZyb20gXCIuL21lcm1haWQtcGFyc2VyLmNvcmUtTkVtdXFQbzMuanNcIjtcbmltcG9ydCB7IGMgYXMgRmUgfSBmcm9tIFwiLi9jeXRvc2NhcGUuZXNtLUN2ZjNzeDlGLmpzXCI7XG52YXIgaGUgPSB7IGV4cG9ydHM6IHt9IH0sIGxlID0geyBleHBvcnRzOiB7fSB9LCBmZSA9IHsgZXhwb3J0czoge30gfSwgZ3IgPSBmZS5leHBvcnRzLCB3ZTtcbmZ1bmN0aW9uIHVyKCkge1xuICByZXR1cm4gd2UgfHwgKHdlID0gMSwgKGZ1bmN0aW9uKEksIHgpIHtcbiAgICAoZnVuY3Rpb24oUCwgTikge1xuICAgICAgSS5leHBvcnRzID0gTigpO1xuICAgIH0pKGdyLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIChmdW5jdGlvbihBKSB7XG4gICAgICAgICAgdmFyIFAgPSB7fTtcbiAgICAgICAgICBmdW5jdGlvbiBOKHUpIHtcbiAgICAgICAgICAgIGlmIChQW3VdKVxuICAgICAgICAgICAgICByZXR1cm4gUFt1XS5leHBvcnRzO1xuICAgICAgICAgICAgdmFyIGggPSBQW3VdID0ge1xuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBpOiB1LFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBsOiAhMSxcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gQVt1XS5jYWxsKGguZXhwb3J0cywgaCwgaC5leHBvcnRzLCBOKSwgaC5sID0gITAsIGguZXhwb3J0cztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE4ubSA9IEEsIE4uYyA9IFAsIE4uaSA9IGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgICAgIHJldHVybiB1O1xuICAgICAgICAgIH0sIE4uZCA9IGZ1bmN0aW9uKHUsIGgsIGEpIHtcbiAgICAgICAgICAgIE4ubyh1LCBoKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkodSwgaCwge1xuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgZ2V0OiBhXG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCBOLm4gPSBmdW5jdGlvbih1KSB7XG4gICAgICAgICAgICB2YXIgaCA9IHUgJiYgdS5fX2VzTW9kdWxlID8gKFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdS5kZWZhdWx0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBOLmQoaCwgXCJhXCIsIGgpLCBoO1xuICAgICAgICAgIH0sIE4ubyA9IGZ1bmN0aW9uKHUsIGgpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodSwgaCk7XG4gICAgICAgICAgfSwgTi5wID0gXCJcIiwgTihOLnMgPSAyOCk7XG4gICAgICAgIH0pKFtcbiAgICAgICAgICAvKiAwICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgZnVuY3Rpb24gdSgpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHUuUVVBTElUWSA9IDEsIHUuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEID0gITEsIHUuREVGQVVMVF9JTkNSRU1FTlRBTCA9ICExLCB1LkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCA9ICEwLCB1LkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQgPSAhMSwgdS5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QgPSA1MCwgdS5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTID0gITEsIHUuREVGQVVMVF9HUkFQSF9NQVJHSU4gPSAxNSwgdS5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSAhMSwgdS5TSU1QTEVfTk9ERV9TSVpFID0gNDAsIHUuU0lNUExFX05PREVfSEFMRl9TSVpFID0gdS5TSU1QTEVfTk9ERV9TSVpFIC8gMiwgdS5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkUgPSA0MCwgdS5NSU5fRURHRV9MRU5HVEggPSAxLCB1LldPUkxEX0JPVU5EQVJZID0gMWU2LCB1LklOSVRJQUxfV09STERfQk9VTkRBUlkgPSB1LldPUkxEX0JPVU5EQVJZIC8gMWUzLCB1LldPUkxEX0NFTlRFUl9YID0gMTIwMCwgdS5XT1JMRF9DRU5URVJfWSA9IDkwMCwgQS5leHBvcnRzID0gdTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAxICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgdmFyIHUgPSBOKDIpLCBoID0gTig4KSwgYSA9IE4oOSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGwsIGksIGcpIHtcbiAgICAgICAgICAgICAgdS5jYWxsKHRoaXMsIGcpLCB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9ICExLCB0aGlzLnZHcmFwaE9iamVjdCA9IGcsIHRoaXMuYmVuZHBvaW50cyA9IFtdLCB0aGlzLnNvdXJjZSA9IGwsIHRoaXMudGFyZ2V0ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh1LnByb3RvdHlwZSk7XG4gICAgICAgICAgICBmb3IgKHZhciByIGluIHUpXG4gICAgICAgICAgICAgIGVbcl0gPSB1W3JdO1xuICAgICAgICAgICAgZS5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5pc0ludGVyR3JhcGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNJbnRlckdyYXBoO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQ7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5nZXRCZW5kcG9pbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlbmRwb2ludHM7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5nZXRMY2EgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGNhO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuZ2V0U291cmNlSW5MY2EgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlSW5MY2E7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5nZXRUYXJnZXRJbkxjYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRJbkxjYTtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLmdldE90aGVyRW5kID0gZnVuY3Rpb24obCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zb3VyY2UgPT09IGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xuICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICAgICAgICAgICAgICB0aHJvdyBcIk5vZGUgaXMgbm90IGluY2lkZW50IHdpdGggdGhpcyBlZGdlXCI7XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbihsLCBpKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGcgPSB0aGlzLmdldE90aGVyRW5kKGwpLCB0ID0gaS5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCk7IDsgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGcuZ2V0T3duZXIoKSA9PSBpKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGc7XG4gICAgICAgICAgICAgICAgaWYgKGcuZ2V0T3duZXIoKSA9PSB0KVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZyA9IGcuZ2V0T3duZXIoKS5nZXRQYXJlbnQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLnVwZGF0ZUxlbmd0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgbCA9IG5ldyBBcnJheSg0KTtcbiAgICAgICAgICAgICAgdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBoLmdldEludGVyc2VjdGlvbih0aGlzLnRhcmdldC5nZXRSZWN0KCksIHRoaXMuc291cmNlLmdldFJlY3QoKSwgbCksIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0IHx8ICh0aGlzLmxlbmd0aFggPSBsWzBdIC0gbFsyXSwgdGhpcy5sZW5ndGhZID0gbFsxXSAtIGxbM10sIE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxICYmICh0aGlzLmxlbmd0aFggPSBhLnNpZ24odGhpcy5sZW5ndGhYKSksIE1hdGguYWJzKHRoaXMubGVuZ3RoWSkgPCAxICYmICh0aGlzLmxlbmd0aFkgPSBhLnNpZ24odGhpcy5sZW5ndGhZKSksIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSkpO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoU2ltcGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMubGVuZ3RoWCA9IHRoaXMudGFyZ2V0LmdldENlbnRlclgoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclgoKSwgdGhpcy5sZW5ndGhZID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWSgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWSgpLCBNYXRoLmFicyh0aGlzLmxlbmd0aFgpIDwgMSAmJiAodGhpcy5sZW5ndGhYID0gYS5zaWduKHRoaXMubGVuZ3RoWCkpLCBNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMSAmJiAodGhpcy5sZW5ndGhZID0gYS5zaWduKHRoaXMubGVuZ3RoWSkpLCB0aGlzLmxlbmd0aCA9IE1hdGguc3FydCh0aGlzLmxlbmd0aFggKiB0aGlzLmxlbmd0aFggKyB0aGlzLmxlbmd0aFkgKiB0aGlzLmxlbmd0aFkpO1xuICAgICAgICAgICAgfSwgQS5leHBvcnRzID0gZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAyICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgZnVuY3Rpb24gdShoKSB7XG4gICAgICAgICAgICAgIHRoaXMudkdyYXBoT2JqZWN0ID0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEEuZXhwb3J0cyA9IHU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMyAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKEEsIFAsIE4pIHtcbiAgICAgICAgICAgIHZhciB1ID0gTigyKSwgaCA9IE4oMTApLCBhID0gTigxMyksIGUgPSBOKDApLCByID0gTigxNiksIGwgPSBOKDUpO1xuICAgICAgICAgICAgZnVuY3Rpb24gaSh0LCBvLCBzLCBjKSB7XG4gICAgICAgICAgICAgIHMgPT0gbnVsbCAmJiBjID09IG51bGwgJiYgKGMgPSBvKSwgdS5jYWxsKHRoaXMsIGMpLCB0LmdyYXBoTWFuYWdlciAhPSBudWxsICYmICh0ID0gdC5ncmFwaE1hbmFnZXIpLCB0aGlzLmVzdGltYXRlZFNpemUgPSBoLk1JTl9WQUxVRSwgdGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPSBoLk1BWF9WQUxVRSwgdGhpcy52R3JhcGhPYmplY3QgPSBjLCB0aGlzLmVkZ2VzID0gW10sIHRoaXMuZ3JhcGhNYW5hZ2VyID0gdCwgcyAhPSBudWxsICYmIG8gIT0gbnVsbCA/IHRoaXMucmVjdCA9IG5ldyBhKG8ueCwgby55LCBzLndpZHRoLCBzLmhlaWdodCkgOiB0aGlzLnJlY3QgPSBuZXcgYSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHUucHJvdG90eXBlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGcgaW4gdSlcbiAgICAgICAgICAgICAgaVtnXSA9IHVbZ107XG4gICAgICAgICAgICBpLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0T3duZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3duZXI7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0LndpZHRoO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHRoaXMucmVjdC53aWR0aCA9IHQ7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHRoaXMucmVjdC5oZWlnaHQgPSB0O1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGwodGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyLCB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgbCh0aGlzLnJlY3QueCwgdGhpcy5yZWN0LnkpO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0UmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0O1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0RGlhZ29uYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnJlY3Qud2lkdGggKiB0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0ICogdGhpcy5yZWN0LmhlaWdodCk7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRIYWxmVGhlRGlhZ29uYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnJlY3QuaGVpZ2h0ICogdGhpcy5yZWN0LmhlaWdodCArIHRoaXMucmVjdC53aWR0aCAqIHRoaXMucmVjdC53aWR0aCkgLyAyO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuc2V0UmVjdCA9IGZ1bmN0aW9uKHQsIG8pIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWN0LnggPSB0LngsIHRoaXMucmVjdC55ID0gdC55LCB0aGlzLnJlY3Qud2lkdGggPSBvLndpZHRoLCB0aGlzLnJlY3QuaGVpZ2h0ID0gby5oZWlnaHQ7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbih0LCBvKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVjdC54ID0gdCAtIHRoaXMucmVjdC53aWR0aCAvIDIsIHRoaXMucmVjdC55ID0gbyAtIHRoaXMucmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbih0LCBvKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVjdC54ID0gdCwgdGhpcy5yZWN0LnkgPSBvO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUubW92ZUJ5ID0gZnVuY3Rpb24odCwgbykge1xuICAgICAgICAgICAgICB0aGlzLnJlY3QueCArPSB0LCB0aGlzLnJlY3QueSArPSBvO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0RWRnZUxpc3RUb05vZGUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHZhciBvID0gW10sIHMgPSB0aGlzO1xuICAgICAgICAgICAgICByZXR1cm4gcy5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYy50YXJnZXQgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGMuc291cmNlICE9IHMpIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xuICAgICAgICAgICAgICAgICAgby5wdXNoKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksIG87XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5nZXRFZGdlc0JldHdlZW4gPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHZhciBvID0gW10sIHMgPSB0aGlzO1xuICAgICAgICAgICAgICByZXR1cm4gcy5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShjLnNvdXJjZSA9PSBzIHx8IGMudGFyZ2V0ID09IHMpKSB0aHJvdyBcIkluY29ycmVjdCBlZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0XCI7XG4gICAgICAgICAgICAgICAgKGMudGFyZ2V0ID09IHQgfHwgYy5zb3VyY2UgPT0gdCkgJiYgby5wdXNoKGMpO1xuICAgICAgICAgICAgICB9KSwgbztcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldE5laWdoYm9yc0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLCBvID0gdGhpcztcbiAgICAgICAgICAgICAgcmV0dXJuIG8uZWRnZXMuZm9yRWFjaChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuc291cmNlID09IG8pXG4gICAgICAgICAgICAgICAgICB0LmFkZChzLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAocy50YXJnZXQgIT0gbylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgaW5jaWRlbmN5IVwiO1xuICAgICAgICAgICAgICAgICAgdC5hZGQocy5zb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksIHQ7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS53aXRoQ2hpbGRyZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLCBvLCBzO1xuICAgICAgICAgICAgICBpZiAodC5hZGQodGhpcyksIHRoaXMuY2hpbGQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gdGhpcy5jaGlsZC5nZXROb2RlcygpLCBmID0gMDsgZiA8IGMubGVuZ3RoOyBmKyspXG4gICAgICAgICAgICAgICAgICBvID0gY1tmXSwgcyA9IG8ud2l0aENoaWxkcmVuKCksIHMuZm9yRWFjaChmdW5jdGlvbihUKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuYWRkKFQpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0Tm9PZkNoaWxkcmVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gMCwgbztcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB0ID0gMTtcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCksIGMgPSAwOyBjIDwgcy5sZW5ndGg7IGMrKylcbiAgICAgICAgICAgICAgICAgIG8gPSBzW2NdLCB0ICs9IG8uZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgIHJldHVybiB0ID09IDAgJiYgKHQgPSAxKSwgdDtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBoLk1JTl9WQUxVRSlcbiAgICAgICAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkID09IG51bGwgPyB0aGlzLmVzdGltYXRlZFNpemUgPSAodGhpcy5yZWN0LndpZHRoICsgdGhpcy5yZWN0LmhlaWdodCkgLyAyIDogKHRoaXMuZXN0aW1hdGVkU2l6ZSA9IHRoaXMuY2hpbGQuY2FsY0VzdGltYXRlZFNpemUoKSwgdGhpcy5yZWN0LndpZHRoID0gdGhpcy5lc3RpbWF0ZWRTaXplLCB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZWRTaXplLCB0aGlzLmVzdGltYXRlZFNpemUpO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuc2NhdHRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgdCwgbywgcyA9IC1lLklOSVRJQUxfV09STERfQk9VTkRBUlksIGMgPSBlLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gICAgICAgICAgICAgIHQgPSBlLldPUkxEX0NFTlRFUl9YICsgci5uZXh0RG91YmxlKCkgKiAoYyAtIHMpICsgcztcbiAgICAgICAgICAgICAgdmFyIGYgPSAtZS5JTklUSUFMX1dPUkxEX0JPVU5EQVJZLCBUID0gZS5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICAgICAgICAgICAgICBvID0gZS5XT1JMRF9DRU5URVJfWSArIHIubmV4dERvdWJsZSgpICogKFQgLSBmKSArIGYsIHRoaXMucmVjdC54ID0gdCwgdGhpcy5yZWN0LnkgPSBvO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmdldENoaWxkKCkgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmdldENoaWxkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHQudXBkYXRlQm91bmRzKCEwKSwgdGhpcy5yZWN0LnggPSB0LmdldExlZnQoKSwgdGhpcy5yZWN0LnkgPSB0LmdldFRvcCgpLCB0aGlzLnNldFdpZHRoKHQuZ2V0UmlnaHQoKSAtIHQuZ2V0TGVmdCgpKSwgdGhpcy5zZXRIZWlnaHQodC5nZXRCb3R0b20oKSAtIHQuZ2V0VG9wKCkpLCBlLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUykge1xuICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0LmdldFJpZ2h0KCkgLSB0LmdldExlZnQoKSwgcyA9IHQuZ2V0Qm90dG9tKCkgLSB0LmdldFRvcCgpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbFdpZHRoICYmICh0aGlzLmxhYmVsUG9zSG9yaXpvbnRhbCA9PSBcImxlZnRcIiA/ICh0aGlzLnJlY3QueCAtPSB0aGlzLmxhYmVsV2lkdGgsIHRoaXMuc2V0V2lkdGgobyArIHRoaXMubGFiZWxXaWR0aCkpIDogdGhpcy5sYWJlbFBvc0hvcml6b250YWwgPT0gXCJjZW50ZXJcIiAmJiB0aGlzLmxhYmVsV2lkdGggPiBvID8gKHRoaXMucmVjdC54IC09ICh0aGlzLmxhYmVsV2lkdGggLSBvKSAvIDIsIHRoaXMuc2V0V2lkdGgodGhpcy5sYWJlbFdpZHRoKSkgOiB0aGlzLmxhYmVsUG9zSG9yaXpvbnRhbCA9PSBcInJpZ2h0XCIgJiYgdGhpcy5zZXRXaWR0aChvICsgdGhpcy5sYWJlbFdpZHRoKSksIHRoaXMubGFiZWxIZWlnaHQgJiYgKHRoaXMubGFiZWxQb3NWZXJ0aWNhbCA9PSBcInRvcFwiID8gKHRoaXMucmVjdC55IC09IHRoaXMubGFiZWxIZWlnaHQsIHRoaXMuc2V0SGVpZ2h0KHMgKyB0aGlzLmxhYmVsSGVpZ2h0KSkgOiB0aGlzLmxhYmVsUG9zVmVydGljYWwgPT0gXCJjZW50ZXJcIiAmJiB0aGlzLmxhYmVsSGVpZ2h0ID4gcyA/ICh0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIHMpIC8gMiwgdGhpcy5zZXRIZWlnaHQodGhpcy5sYWJlbEhlaWdodCkpIDogdGhpcy5sYWJlbFBvc1ZlcnRpY2FsID09IFwiYm90dG9tXCIgJiYgdGhpcy5zZXRIZWlnaHQocyArIHRoaXMubGFiZWxIZWlnaHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPT0gaC5NQVhfVkFMVUUpXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmluY2x1c2lvblRyZWVEZXB0aDtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnJlY3QueDtcbiAgICAgICAgICAgICAgbyA+IGUuV09STERfQk9VTkRBUlkgPyBvID0gZS5XT1JMRF9CT1VOREFSWSA6IG8gPCAtZS5XT1JMRF9CT1VOREFSWSAmJiAobyA9IC1lLldPUkxEX0JPVU5EQVJZKTtcbiAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnJlY3QueTtcbiAgICAgICAgICAgICAgcyA+IGUuV09STERfQk9VTkRBUlkgPyBzID0gZS5XT1JMRF9CT1VOREFSWSA6IHMgPCAtZS5XT1JMRF9CT1VOREFSWSAmJiAocyA9IC1lLldPUkxEX0JPVU5EQVJZKTtcbiAgICAgICAgICAgICAgdmFyIGMgPSBuZXcgbChvLCBzKSwgZiA9IHQuaW52ZXJzZVRyYW5zZm9ybVBvaW50KGMpO1xuICAgICAgICAgICAgICB0aGlzLnNldExvY2F0aW9uKGYueCwgZi55KTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdC54O1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY3QueTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLm93bmVyID09IG51bGwgPyBudWxsIDogdGhpcy5vd25lci5nZXRQYXJlbnQoKTtcbiAgICAgICAgICAgIH0sIEEuZXhwb3J0cyA9IGk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogNCAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKEEsIFAsIE4pIHtcbiAgICAgICAgICAgIHZhciB1ID0gTigwKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGgoKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBhIGluIHUpXG4gICAgICAgICAgICAgIGhbYV0gPSB1W2FdO1xuICAgICAgICAgICAgaC5NQVhfSVRFUkFUSU9OUyA9IDI1MDAsIGguREVGQVVMVF9FREdFX0xFTkdUSCA9IDUwLCBoLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gMC40NSwgaC5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSCA9IDQ1MDAsIGguREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gMC40LCBoLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCA9IDEsIGguREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDMuOCwgaC5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gMS41LCBoLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OID0gITAsIGguREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OID0gITAsIGguREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IDAuMywgaC5DT09MSU5HX0FEQVBUQVRJT05fRkFDVE9SID0gMC4zMywgaC5BREFQVEFUSU9OX0xPV0VSX05PREVfTElNSVQgPSAxZTMsIGguQURBUFRBVElPTl9VUFBFUl9OT0RFX0xJTUlUID0gNWUzLCBoLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCA9IDEwMCwgaC5NQVhfTk9ERV9ESVNQTEFDRU1FTlQgPSBoLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCAqIDMsIGguTUlOX1JFUFVMU0lPTl9ESVNUID0gaC5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMTAsIGguQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EID0gMTAwLCBoLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgPSAwLjEsIGguTUlOX0VER0VfTEVOR1RIID0gMSwgaC5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9IDEwLCBBLmV4cG9ydHMgPSBoO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDUgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1KGgsIGEpIHtcbiAgICAgICAgICAgICAgaCA9PSBudWxsICYmIGEgPT0gbnVsbCA/ICh0aGlzLnggPSAwLCB0aGlzLnkgPSAwKSA6ICh0aGlzLnggPSBoLCB0aGlzLnkgPSBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHUucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICAgIHRoaXMueCA9IGg7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICB0aGlzLnkgPSBoO1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb25EKHRoaXMueCAtIGgueCwgdGhpcy55IC0gaC55KTtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLmdldENvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1KHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueCArPSBoLndpZHRoLCB0aGlzLnkgKz0gaC5oZWlnaHQsIHRoaXM7XG4gICAgICAgICAgICB9LCBBLmV4cG9ydHMgPSB1O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDYgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICB2YXIgdSA9IE4oMiksIGggPSBOKDEwKSwgYSA9IE4oMCksIGUgPSBOKDcpLCByID0gTigzKSwgbCA9IE4oMSksIGkgPSBOKDEzKSwgZyA9IE4oMTIpLCB0ID0gTigxMSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBvKGMsIGYsIFQpIHtcbiAgICAgICAgICAgICAgdS5jYWxsKHRoaXMsIFQpLCB0aGlzLmVzdGltYXRlZFNpemUgPSBoLk1JTl9WQUxVRSwgdGhpcy5tYXJnaW4gPSBhLkRFRkFVTFRfR1JBUEhfTUFSR0lOLCB0aGlzLmVkZ2VzID0gW10sIHRoaXMubm9kZXMgPSBbXSwgdGhpcy5pc0Nvbm5lY3RlZCA9ICExLCB0aGlzLnBhcmVudCA9IGMsIGYgIT0gbnVsbCAmJiBmIGluc3RhbmNlb2YgZSA/IHRoaXMuZ3JhcGhNYW5hZ2VyID0gZiA6IGYgIT0gbnVsbCAmJiBmIGluc3RhbmNlb2YgTGF5b3V0ICYmICh0aGlzLmdyYXBoTWFuYWdlciA9IGYuZ3JhcGhNYW5hZ2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh1LnByb3RvdHlwZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBzIGluIHUpXG4gICAgICAgICAgICAgIG9bc10gPSB1W3NdO1xuICAgICAgICAgICAgby5wcm90b3R5cGUuZ2V0Tm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9wO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29ubmVjdGVkO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oYywgZiwgVCkge1xuICAgICAgICAgICAgICBpZiAoZiA9PSBudWxsICYmIFQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gYztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmFwaE1hbmFnZXIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiR3JhcGggaGFzIG5vIGdyYXBoIG1nciFcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXROb2RlcygpLmluZGV4T2YoZCkgPiAtMSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiTm9kZSBhbHJlYWR5IGluIGdyYXBoIVwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBkLm93bmVyID0gdGhpcywgdGhpcy5nZXROb2RlcygpLnB1c2goZCksIGQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBjO1xuICAgICAgICAgICAgICAgIGlmICghKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKGYpID4gLTEgJiYgdGhpcy5nZXROb2RlcygpLmluZGV4T2YoVCkgPiAtMSkpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIlNvdXJjZSBvciB0YXJnZXQgbm90IGluIGdyYXBoIVwiO1xuICAgICAgICAgICAgICAgIGlmICghKGYub3duZXIgPT0gVC5vd25lciAmJiBmLm93bmVyID09IHRoaXMpKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJCb3RoIG93bmVycyBtdXN0IGJlIHRoaXMgZ3JhcGghXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGYub3duZXIgIT0gVC5vd25lciA/IG51bGwgOiAodi5zb3VyY2UgPSBmLCB2LnRhcmdldCA9IFQsIHYuaXNJbnRlckdyYXBoID0gITEsIHRoaXMuZ2V0RWRnZXMoKS5wdXNoKHYpLCBmLmVkZ2VzLnB1c2godiksIFQgIT0gZiAmJiBULmVkZ2VzLnB1c2godiksIHYpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICAgIHZhciBmID0gYztcbiAgICAgICAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiByKSB7XG4gICAgICAgICAgICAgICAgaWYgKGYgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiTm9kZSBpcyBudWxsIVwiO1xuICAgICAgICAgICAgICAgIGlmICghKGYub3duZXIgIT0gbnVsbCAmJiBmLm93bmVyID09IHRoaXMpKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBpcyBpbnZhbGlkIVwiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBtYW5hZ2VyIGlzIGludmFsaWQhXCI7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgVCA9IGYuZWRnZXMuc2xpY2UoKSwgZCwgdiA9IFQubGVuZ3RoLCBMID0gMDsgTCA8IHY7IEwrKylcbiAgICAgICAgICAgICAgICAgIGQgPSBUW0xdLCBkLmlzSW50ZXJHcmFwaCA/IHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShkKSA6IGQuc291cmNlLm93bmVyLnJlbW92ZShkKTtcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHRoaXMubm9kZXMuaW5kZXhPZihmKTtcbiAgICAgICAgICAgICAgICBpZiAoYiA9PSAtMSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiTm9kZSBub3QgaW4gb3duZXIgbm9kZSBsaXN0IVwiO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMuc3BsaWNlKGIsIDEpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBjO1xuICAgICAgICAgICAgICAgIGlmIChkID09IG51bGwpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIkVkZ2UgaXMgbnVsbCFcIjtcbiAgICAgICAgICAgICAgICBpZiAoIShkLnNvdXJjZSAhPSBudWxsICYmIGQudGFyZ2V0ICE9IG51bGwpKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgICAgICAgICAgICAgIGlmICghKGQuc291cmNlLm93bmVyICE9IG51bGwgJiYgZC50YXJnZXQub3duZXIgIT0gbnVsbCAmJiBkLnNvdXJjZS5vd25lciA9PSB0aGlzICYmIGQudGFyZ2V0Lm93bmVyID09IHRoaXMpKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBvd25lciBpcyBpbnZhbGlkIVwiO1xuICAgICAgICAgICAgICAgIHZhciBDID0gZC5zb3VyY2UuZWRnZXMuaW5kZXhPZihkKSwgRyA9IGQudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZCk7XG4gICAgICAgICAgICAgICAgaWYgKCEoQyA+IC0xICYmIEcgPiAtMSkpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgICAgICAgICAgICAgZC5zb3VyY2UuZWRnZXMuc3BsaWNlKEMsIDEpLCBkLnRhcmdldCAhPSBkLnNvdXJjZSAmJiBkLnRhcmdldC5lZGdlcy5zcGxpY2UoRywgMSk7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSBkLnNvdXJjZS5vd25lci5nZXRFZGdlcygpLmluZGV4T2YoZCk7XG4gICAgICAgICAgICAgICAgaWYgKGIgPT0gLTEpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vdCBpbiBvd25lcidzIGVkZ2UgbGlzdCFcIjtcbiAgICAgICAgICAgICAgICBkLnNvdXJjZS5vd25lci5nZXRFZGdlcygpLnNwbGljZShiLCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUudXBkYXRlTGVmdFRvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBjID0gaC5NQVhfVkFMVUUsIGYgPSBoLk1BWF9WQUxVRSwgVCwgZCwgdiwgTCA9IHRoaXMuZ2V0Tm9kZXMoKSwgYiA9IEwubGVuZ3RoLCBDID0gMDsgQyA8IGI7IEMrKykge1xuICAgICAgICAgICAgICAgIHZhciBHID0gTFtDXTtcbiAgICAgICAgICAgICAgICBUID0gRy5nZXRUb3AoKSwgZCA9IEcuZ2V0TGVmdCgpLCBjID4gVCAmJiAoYyA9IFQpLCBmID4gZCAmJiAoZiA9IGQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjID09IGguTUFYX1ZBTFVFID8gbnVsbCA6IChMWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IG51bGwgPyB2ID0gTFswXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdCA6IHYgPSB0aGlzLm1hcmdpbiwgdGhpcy5sZWZ0ID0gZiAtIHYsIHRoaXMudG9wID0gYyAtIHYsIG5ldyBnKHRoaXMubGVmdCwgdGhpcy50b3ApKTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IGguTUFYX1ZBTFVFLCBUID0gLWguTUFYX1ZBTFVFLCBkID0gaC5NQVhfVkFMVUUsIHYgPSAtaC5NQVhfVkFMVUUsIEwsIGIsIEMsIEcsIFosIFkgPSB0aGlzLm5vZGVzLCBLID0gWS5sZW5ndGgsIE8gPSAwOyBPIDwgSzsgTysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ID0gWVtPXTtcbiAgICAgICAgICAgICAgICBjICYmIGl0LmNoaWxkICE9IG51bGwgJiYgaXQudXBkYXRlQm91bmRzKCksIEwgPSBpdC5nZXRMZWZ0KCksIGIgPSBpdC5nZXRSaWdodCgpLCBDID0gaXQuZ2V0VG9wKCksIEcgPSBpdC5nZXRCb3R0b20oKSwgZiA+IEwgJiYgKGYgPSBMKSwgVCA8IGIgJiYgKFQgPSBiKSwgZCA+IEMgJiYgKGQgPSBDKSwgdiA8IEcgJiYgKHYgPSBHKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBpKGYsIGQsIFQgLSBmLCB2IC0gZCk7XG4gICAgICAgICAgICAgIGYgPT0gaC5NQVhfVkFMVUUgJiYgKHRoaXMubGVmdCA9IHRoaXMucGFyZW50LmdldExlZnQoKSwgdGhpcy5yaWdodCA9IHRoaXMucGFyZW50LmdldFJpZ2h0KCksIHRoaXMudG9wID0gdGhpcy5wYXJlbnQuZ2V0VG9wKCksIHRoaXMuYm90dG9tID0gdGhpcy5wYXJlbnQuZ2V0Qm90dG9tKCkpLCBZWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IG51bGwgPyBaID0gWVswXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdCA6IFogPSB0aGlzLm1hcmdpbiwgdGhpcy5sZWZ0ID0gbi54IC0gWiwgdGhpcy5yaWdodCA9IG4ueCArIG4ud2lkdGggKyBaLCB0aGlzLnRvcCA9IG4ueSAtIFosIHRoaXMuYm90dG9tID0gbi55ICsgbi5oZWlnaHQgKyBaO1xuICAgICAgICAgICAgfSwgby5jYWxjdWxhdGVCb3VuZHMgPSBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGYgPSBoLk1BWF9WQUxVRSwgVCA9IC1oLk1BWF9WQUxVRSwgZCA9IGguTUFYX1ZBTFVFLCB2ID0gLWguTUFYX1ZBTFVFLCBMLCBiLCBDLCBHLCBaID0gYy5sZW5ndGgsIFkgPSAwOyBZIDwgWjsgWSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIEsgPSBjW1ldO1xuICAgICAgICAgICAgICAgIEwgPSBLLmdldExlZnQoKSwgYiA9IEsuZ2V0UmlnaHQoKSwgQyA9IEsuZ2V0VG9wKCksIEcgPSBLLmdldEJvdHRvbSgpLCBmID4gTCAmJiAoZiA9IEwpLCBUIDwgYiAmJiAoVCA9IGIpLCBkID4gQyAmJiAoZCA9IEMpLCB2IDwgRyAmJiAodiA9IEcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBPID0gbmV3IGkoZiwgZCwgVCAtIGYsIHYgLSBkKTtcbiAgICAgICAgICAgICAgcmV0dXJuIE87XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpID8gMSA6IHRoaXMucGFyZW50LmdldEluY2x1c2lvblRyZWVEZXB0aCgpO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IGguTUlOX1ZBTFVFKVxuICAgICAgICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDAsIGYgPSB0aGlzLm5vZGVzLCBUID0gZi5sZW5ndGgsIGQgPSAwOyBkIDwgVDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBmW2RdO1xuICAgICAgICAgICAgICAgIGMgKz0gdi5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjID09IDAgPyB0aGlzLmVzdGltYXRlZFNpemUgPSBhLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRSA6IHRoaXMuZXN0aW1hdGVkU2l6ZSA9IGMgLyBNYXRoLnNxcnQodGhpcy5ub2Rlcy5sZW5ndGgpLCB0aGlzLmVzdGltYXRlZFNpemU7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS51cGRhdGVDb25uZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzO1xuICAgICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSAhMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGYgPSBuZXcgdCgpLCBUID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSwgZCA9IHRoaXMubm9kZXNbMF0sIHYsIEwsIGIgPSBkLndpdGhDaGlsZHJlbigpO1xuICAgICAgICAgICAgICBmb3IgKGIuZm9yRWFjaChmdW5jdGlvbihPKSB7XG4gICAgICAgICAgICAgICAgZi5wdXNoKE8pLCBULmFkZChPKTtcbiAgICAgICAgICAgICAgfSk7IGYubGVuZ3RoICE9PSAwOyApIHtcbiAgICAgICAgICAgICAgICBkID0gZi5zaGlmdCgpLCB2ID0gZC5nZXRFZGdlcygpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIEMgPSB2Lmxlbmd0aCwgRyA9IDA7IEcgPCBDOyBHKyspIHtcbiAgICAgICAgICAgICAgICAgIHZhciBaID0gdltHXTtcbiAgICAgICAgICAgICAgICAgIGlmIChMID0gWi5nZXRPdGhlckVuZEluR3JhcGgoZCwgdGhpcyksIEwgIT0gbnVsbCAmJiAhVC5oYXMoTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFkgPSBMLndpdGhDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICBZLmZvckVhY2goZnVuY3Rpb24oTykge1xuICAgICAgICAgICAgICAgICAgICAgIGYucHVzaChPKSwgVC5hZGQoTyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nvbm5lY3RlZCA9ICExLCBULnNpemUgPj0gdGhpcy5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgSyA9IDA7XG4gICAgICAgICAgICAgICAgVC5mb3JFYWNoKGZ1bmN0aW9uKE8pIHtcbiAgICAgICAgICAgICAgICAgIE8ub3duZXIgPT0gYyAmJiBLKys7XG4gICAgICAgICAgICAgICAgfSksIEsgPT0gdGhpcy5ub2Rlcy5sZW5ndGggJiYgKHRoaXMuaXNDb25uZWN0ZWQgPSAhMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIEEuZXhwb3J0cyA9IG87XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogNyAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKEEsIFAsIE4pIHtcbiAgICAgICAgICAgIHZhciB1LCBoID0gTigxKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGEoZSkge1xuICAgICAgICAgICAgICB1ID0gTig2KSwgdGhpcy5sYXlvdXQgPSBlLCB0aGlzLmdyYXBocyA9IFtdLCB0aGlzLmVkZ2VzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhLnByb3RvdHlwZS5hZGRSb290ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBlID0gdGhpcy5sYXlvdXQubmV3R3JhcGgoKSwgciA9IHRoaXMubGF5b3V0Lm5ld05vZGUobnVsbCksIGwgPSB0aGlzLmFkZChlLCByKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0Um9vdEdyYXBoKGwpLCB0aGlzLnJvb3RHcmFwaDtcbiAgICAgICAgICAgIH0sIGEucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGUsIHIsIGwsIGksIGcpIHtcbiAgICAgICAgICAgICAgaWYgKGwgPT0gbnVsbCAmJiBpID09IG51bGwgJiYgZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiR3JhcGggaXMgbnVsbCFcIjtcbiAgICAgICAgICAgICAgICBpZiAociA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJQYXJlbnQgbm9kZSBpcyBudWxsIVwiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyYXBocy5pbmRleE9mKGUpID4gLTEpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIkdyYXBoIGFscmVhZHkgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JhcGhzLnB1c2goZSksIGUucGFyZW50ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgcGFyZW50IVwiO1xuICAgICAgICAgICAgICAgIGlmIChyLmNoaWxkICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgY2hpbGQhXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUucGFyZW50ID0gciwgci5jaGlsZCA9IGUsIGU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZyA9IGwsIGkgPSByLCBsID0gZTtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGkuZ2V0T3duZXIoKSwgbyA9IGcuZ2V0T3duZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoISh0ICE9IG51bGwgJiYgdC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiU291cmNlIG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICAgICAgICAgICAgICBpZiAoIShvICE9IG51bGwgJiYgby5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiVGFyZ2V0IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICAgICAgICAgICAgICBpZiAodCA9PSBvKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGwuaXNJbnRlckdyYXBoID0gITEsIHQuYWRkKGwsIGksIGcpO1xuICAgICAgICAgICAgICAgIGlmIChsLmlzSW50ZXJHcmFwaCA9ICEwLCBsLnNvdXJjZSA9IGksIGwudGFyZ2V0ID0gZywgdGhpcy5lZGdlcy5pbmRleE9mKGwpID4gLTEpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBpbnRlci1ncmFwaCBlZGdlIGxpc3QhXCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWRnZXMucHVzaChsKSwgIShsLnNvdXJjZSAhPSBudWxsICYmIGwudGFyZ2V0ICE9IG51bGwpKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJFZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgICAgICAgICAgICAgaWYgKCEobC5zb3VyY2UuZWRnZXMuaW5kZXhPZihsKSA9PSAtMSAmJiBsLnRhcmdldC5lZGdlcy5pbmRleE9mKGwpID09IC0xKSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGluY2lkZW5jeSBsaXN0IVwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBsLnNvdXJjZS5lZGdlcy5wdXNoKGwpLCBsLnRhcmdldC5lZGdlcy5wdXNoKGwpLCBsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBhLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgdSkge1xuICAgICAgICAgICAgICAgIHZhciByID0gZTtcbiAgICAgICAgICAgICAgICBpZiAoci5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJHcmFwaCBub3QgaW4gdGhpcyBncmFwaCBtZ3JcIjtcbiAgICAgICAgICAgICAgICBpZiAoIShyID09IHRoaXMucm9vdEdyYXBoIHx8IHIucGFyZW50ICE9IG51bGwgJiYgci5wYXJlbnQuZ3JhcGhNYW5hZ2VyID09IHRoaXMpKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIHBhcmVudCBub2RlIVwiO1xuICAgICAgICAgICAgICAgIHZhciBsID0gW107XG4gICAgICAgICAgICAgICAgbCA9IGwuY29uY2F0KHIuZ2V0RWRnZXMoKSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSwgZyA9IGwubGVuZ3RoLCB0ID0gMDsgdCA8IGc7IHQrKylcbiAgICAgICAgICAgICAgICAgIGkgPSBsW3RdLCByLnJlbW92ZShpKTtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICAgICAgICAgIG8gPSBvLmNvbmNhdChyLmdldE5vZGVzKCkpO1xuICAgICAgICAgICAgICAgIHZhciBzO1xuICAgICAgICAgICAgICAgIGcgPSBvLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGc7IHQrKylcbiAgICAgICAgICAgICAgICAgIHMgPSBvW3RdLCByLnJlbW92ZShzKTtcbiAgICAgICAgICAgICAgICByID09IHRoaXMucm9vdEdyYXBoICYmIHRoaXMuc2V0Um9vdEdyYXBoKG51bGwpO1xuICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5ncmFwaHMuaW5kZXhPZihyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBocy5zcGxpY2UoYywgMSksIHIucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlIGluc3RhbmNlb2YgaCkge1xuICAgICAgICAgICAgICAgIGlmIChpID0gZSwgaSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XG4gICAgICAgICAgICAgICAgaWYgKCFpLmlzSW50ZXJHcmFwaClcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiTm90IGFuIGludGVyLWdyYXBoIGVkZ2UhXCI7XG4gICAgICAgICAgICAgICAgaWYgKCEoaS5zb3VyY2UgIT0gbnVsbCAmJiBpLnRhcmdldCAhPSBudWxsKSlcbiAgICAgICAgICAgICAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICAgICAgICAgICAgICBpZiAoIShpLnNvdXJjZS5lZGdlcy5pbmRleE9mKGkpICE9IC0xICYmIGkudGFyZ2V0LmVkZ2VzLmluZGV4T2YoaSkgIT0gLTEpKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBkb2Vzbid0IGtub3cgdGhpcyBlZGdlIVwiO1xuICAgICAgICAgICAgICAgIHZhciBjID0gaS5zb3VyY2UuZWRnZXMuaW5kZXhPZihpKTtcbiAgICAgICAgICAgICAgICBpZiAoaS5zb3VyY2UuZWRnZXMuc3BsaWNlKGMsIDEpLCBjID0gaS50YXJnZXQuZWRnZXMuaW5kZXhPZihpKSwgaS50YXJnZXQuZWRnZXMuc3BsaWNlKGMsIDEpLCAhKGkuc291cmNlLm93bmVyICE9IG51bGwgJiYgaS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gbnVsbCkpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBcIkVkZ2Ugb3duZXIgZ3JhcGggb3Igb3duZXIgZ3JhcGggbWFuYWdlciBpcyBudWxsIVwiO1xuICAgICAgICAgICAgICAgIGlmIChpLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGkpID09IC0xKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIgZ3JhcGggbWFuYWdlcidzIGVkZ2UgbGlzdCFcIjtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGkuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLmluZGV4T2YoaSk7XG4gICAgICAgICAgICAgICAgaS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuc3BsaWNlKGMsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBhLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5yb290R3JhcGgudXBkYXRlQm91bmRzKCEwKTtcbiAgICAgICAgICAgIH0sIGEucHJvdG90eXBlLmdldEdyYXBocyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHM7XG4gICAgICAgICAgICB9LCBhLnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5hbGxOb2RlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCByID0gdGhpcy5nZXRHcmFwaHMoKSwgbCA9IHIubGVuZ3RoLCBpID0gMDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgICAgICAgIGUgPSBlLmNvbmNhdChyW2ldLmdldE5vZGVzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsTm9kZXMgPSBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbE5vZGVzO1xuICAgICAgICAgICAgfSwgYS5wcm90b3R5cGUucmVzZXRBbGxOb2RlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLmFsbE5vZGVzID0gbnVsbDtcbiAgICAgICAgICAgIH0sIGEucHJvdG90eXBlLnJlc2V0QWxsRWRnZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5hbGxFZGdlcyA9IG51bGw7XG4gICAgICAgICAgICB9LCBhLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBudWxsO1xuICAgICAgICAgICAgfSwgYS5wcm90b3R5cGUuZ2V0QWxsRWRnZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsRWRnZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gW10sIHIgPSB0aGlzLmdldEdyYXBocygpO1xuICAgICAgICAgICAgICAgIHIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgci5sZW5ndGg7IGwrKylcbiAgICAgICAgICAgICAgICAgIGUgPSBlLmNvbmNhdChyW2xdLmdldEVkZ2VzKCkpO1xuICAgICAgICAgICAgICAgIGUgPSBlLmNvbmNhdCh0aGlzLmVkZ2VzKSwgdGhpcy5hbGxFZGdlcyA9IGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsRWRnZXM7XG4gICAgICAgICAgICB9LCBhLnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbjtcbiAgICAgICAgICAgIH0sIGEucHJvdG90eXBlLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICAgICAgICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZTtcbiAgICAgICAgICAgIH0sIGEucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xuICAgICAgICAgICAgfSwgYS5wcm90b3R5cGUuc2V0Um9vdEdyYXBoID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICBpZiAoZS5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKVxuICAgICAgICAgICAgICAgIHRocm93IFwiUm9vdCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgICAgICAgICAgIHRoaXMucm9vdEdyYXBoID0gZSwgZS5wYXJlbnQgPT0gbnVsbCAmJiAoZS5wYXJlbnQgPSB0aGlzLmxheW91dC5uZXdOb2RlKFwiUm9vdCBub2RlXCIpKTtcbiAgICAgICAgICAgIH0sIGEucHJvdG90eXBlLmdldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQ7XG4gICAgICAgICAgICB9LCBhLnByb3RvdHlwZS5pc09uZUFuY2VzdG9yT2ZPdGhlciA9IGZ1bmN0aW9uKGUsIHIpIHtcbiAgICAgICAgICAgICAgaWYgKCEoZSAhPSBudWxsICYmIHIgIT0gbnVsbCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgICAgICAgICAgIGlmIChlID09IHIpXG4gICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICB2YXIgbCA9IGUuZ2V0T3duZXIoKSwgaTtcbiAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChpID0gbC5nZXRQYXJlbnQoKSwgaSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gcilcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICBpZiAobCA9IGkuZ2V0T3duZXIoKSwgbCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gd2hpbGUgKCEwKTtcbiAgICAgICAgICAgICAgbCA9IHIuZ2V0T3duZXIoKTtcbiAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChpID0gbC5nZXRQYXJlbnQoKSwgaSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gZSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICBpZiAobCA9IGkuZ2V0T3duZXIoKSwgbCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gd2hpbGUgKCEwKTtcbiAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSwgYS5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBlLCByLCBsLCBpLCBnLCB0ID0gdGhpcy5nZXRBbGxFZGdlcygpLCBvID0gdC5sZW5ndGgsIHMgPSAwOyBzIDwgbzsgcysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgPSB0W3NdLCByID0gZS5zb3VyY2UsIGwgPSBlLnRhcmdldCwgZS5sY2EgPSBudWxsLCBlLnNvdXJjZUluTGNhID0gciwgZS50YXJnZXRJbkxjYSA9IGwsIHIgPT0gbCkge1xuICAgICAgICAgICAgICAgICAgZS5sY2EgPSByLmdldE93bmVyKCk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gci5nZXRPd25lcigpOyBlLmxjYSA9PSBudWxsOyApIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoZS50YXJnZXRJbkxjYSA9IGwsIGcgPSBsLmdldE93bmVyKCk7IGUubGNhID09IG51bGw7ICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZyA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5sY2EgPSBnO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChnID09IHRoaXMucm9vdEdyYXBoKVxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5sY2EgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXRJbkxjYSA9IGcuZ2V0UGFyZW50KCksIGcgPSBlLnRhcmdldEluTGNhLmdldE93bmVyKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnJvb3RHcmFwaClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBlLmxjYSA9PSBudWxsICYmIChlLnNvdXJjZUluTGNhID0gaS5nZXRQYXJlbnQoKSwgaSA9IGUuc291cmNlSW5MY2EuZ2V0T3duZXIoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLmxjYSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGEucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvciA9IGZ1bmN0aW9uKGUsIHIpIHtcbiAgICAgICAgICAgICAgaWYgKGUgPT0gcilcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRPd25lcigpO1xuICAgICAgICAgICAgICB2YXIgbCA9IGUuZ2V0T3duZXIoKTtcbiAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChsID09IG51bGwpXG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHIuZ2V0T3duZXIoKTtcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICBpZiAoaSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGlmIChpID09IGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgaSA9IGkuZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlICghMCk7XG4gICAgICAgICAgICAgICAgbCA9IGwuZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgICAgICAgICAgICAgfSB3aGlsZSAoITApO1xuICAgICAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgICAgIH0sIGEucHJvdG90eXBlLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzID0gZnVuY3Rpb24oZSwgcikge1xuICAgICAgICAgICAgICBlID09IG51bGwgJiYgciA9PSBudWxsICYmIChlID0gdGhpcy5yb290R3JhcGgsIHIgPSAxKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbCwgaSA9IGUuZ2V0Tm9kZXMoKSwgZyA9IGkubGVuZ3RoLCB0ID0gMDsgdCA8IGc7IHQrKylcbiAgICAgICAgICAgICAgICBsID0gaVt0XSwgbC5pbmNsdXNpb25UcmVlRGVwdGggPSByLCBsLmNoaWxkICE9IG51bGwgJiYgdGhpcy5jYWxjSW5jbHVzaW9uVHJlZURlcHRocyhsLmNoaWxkLCByICsgMSk7XG4gICAgICAgICAgICB9LCBhLnByb3RvdHlwZS5pbmNsdWRlc0ludmFsaWRFZGdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGUsIHIgPSBbXSwgbCA9IHRoaXMuZWRnZXMubGVuZ3RoLCBpID0gMDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgICAgICBlID0gdGhpcy5lZGdlc1tpXSwgdGhpcy5pc09uZUFuY2VzdG9yT2ZPdGhlcihlLnNvdXJjZSwgZS50YXJnZXQpICYmIHIucHVzaChlKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHJbaV0pO1xuICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9LCBBLmV4cG9ydHMgPSBhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDggKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICB2YXIgdSA9IE4oMTIpO1xuICAgICAgICAgICAgZnVuY3Rpb24gaCgpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGguY2FsY1NlcGFyYXRpb25BbW91bnQgPSBmdW5jdGlvbihhLCBlLCByLCBsKSB7XG4gICAgICAgICAgICAgIGlmICghYS5pbnRlcnNlY3RzKGUpKVxuICAgICAgICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICAgICAgICB2YXIgaSA9IG5ldyBBcnJheSgyKTtcbiAgICAgICAgICAgICAgdGhpcy5kZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyhhLCBlLCBpKSwgclswXSA9IE1hdGgubWluKGEuZ2V0UmlnaHQoKSwgZS5nZXRSaWdodCgpKSAtIE1hdGgubWF4KGEueCwgZS54KSwgclsxXSA9IE1hdGgubWluKGEuZ2V0Qm90dG9tKCksIGUuZ2V0Qm90dG9tKCkpIC0gTWF0aC5tYXgoYS55LCBlLnkpLCBhLmdldFgoKSA8PSBlLmdldFgoKSAmJiBhLmdldFJpZ2h0KCkgPj0gZS5nZXRSaWdodCgpID8gclswXSArPSBNYXRoLm1pbihlLmdldFgoKSAtIGEuZ2V0WCgpLCBhLmdldFJpZ2h0KCkgLSBlLmdldFJpZ2h0KCkpIDogZS5nZXRYKCkgPD0gYS5nZXRYKCkgJiYgZS5nZXRSaWdodCgpID49IGEuZ2V0UmlnaHQoKSAmJiAoclswXSArPSBNYXRoLm1pbihhLmdldFgoKSAtIGUuZ2V0WCgpLCBlLmdldFJpZ2h0KCkgLSBhLmdldFJpZ2h0KCkpKSwgYS5nZXRZKCkgPD0gZS5nZXRZKCkgJiYgYS5nZXRCb3R0b20oKSA+PSBlLmdldEJvdHRvbSgpID8gclsxXSArPSBNYXRoLm1pbihlLmdldFkoKSAtIGEuZ2V0WSgpLCBhLmdldEJvdHRvbSgpIC0gZS5nZXRCb3R0b20oKSkgOiBlLmdldFkoKSA8PSBhLmdldFkoKSAmJiBlLmdldEJvdHRvbSgpID49IGEuZ2V0Qm90dG9tKCkgJiYgKHJbMV0gKz0gTWF0aC5taW4oYS5nZXRZKCkgLSBlLmdldFkoKSwgZS5nZXRCb3R0b20oKSAtIGEuZ2V0Qm90dG9tKCkpKTtcbiAgICAgICAgICAgICAgdmFyIGcgPSBNYXRoLmFicygoZS5nZXRDZW50ZXJZKCkgLSBhLmdldENlbnRlclkoKSkgLyAoZS5nZXRDZW50ZXJYKCkgLSBhLmdldENlbnRlclgoKSkpO1xuICAgICAgICAgICAgICBlLmdldENlbnRlclkoKSA9PT0gYS5nZXRDZW50ZXJZKCkgJiYgZS5nZXRDZW50ZXJYKCkgPT09IGEuZ2V0Q2VudGVyWCgpICYmIChnID0gMSk7XG4gICAgICAgICAgICAgIHZhciB0ID0gZyAqIHJbMF0sIG8gPSByWzFdIC8gZztcbiAgICAgICAgICAgICAgclswXSA8IG8gPyBvID0gclswXSA6IHQgPSByWzFdLCByWzBdID0gLTEgKiBpWzBdICogKG8gLyAyICsgbCksIHJbMV0gPSAtMSAqIGlbMV0gKiAodCAvIDIgKyBsKTtcbiAgICAgICAgICAgIH0sIGguZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMgPSBmdW5jdGlvbihhLCBlLCByKSB7XG4gICAgICAgICAgICAgIGEuZ2V0Q2VudGVyWCgpIDwgZS5nZXRDZW50ZXJYKCkgPyByWzBdID0gLTEgOiByWzBdID0gMSwgYS5nZXRDZW50ZXJZKCkgPCBlLmdldENlbnRlclkoKSA/IHJbMV0gPSAtMSA6IHJbMV0gPSAxO1xuICAgICAgICAgICAgfSwgaC5nZXRJbnRlcnNlY3Rpb24yID0gZnVuY3Rpb24oYSwgZSwgcikge1xuICAgICAgICAgICAgICB2YXIgbCA9IGEuZ2V0Q2VudGVyWCgpLCBpID0gYS5nZXRDZW50ZXJZKCksIGcgPSBlLmdldENlbnRlclgoKSwgdCA9IGUuZ2V0Q2VudGVyWSgpO1xuICAgICAgICAgICAgICBpZiAoYS5pbnRlcnNlY3RzKGUpKVxuICAgICAgICAgICAgICAgIHJldHVybiByWzBdID0gbCwgclsxXSA9IGksIHJbMl0gPSBnLCByWzNdID0gdCwgITA7XG4gICAgICAgICAgICAgIHZhciBvID0gYS5nZXRYKCksIHMgPSBhLmdldFkoKSwgYyA9IGEuZ2V0UmlnaHQoKSwgZiA9IGEuZ2V0WCgpLCBUID0gYS5nZXRCb3R0b20oKSwgZCA9IGEuZ2V0UmlnaHQoKSwgdiA9IGEuZ2V0V2lkdGhIYWxmKCksIEwgPSBhLmdldEhlaWdodEhhbGYoKSwgYiA9IGUuZ2V0WCgpLCBDID0gZS5nZXRZKCksIEcgPSBlLmdldFJpZ2h0KCksIFogPSBlLmdldFgoKSwgWSA9IGUuZ2V0Qm90dG9tKCksIEsgPSBlLmdldFJpZ2h0KCksIE8gPSBlLmdldFdpZHRoSGFsZigpLCBpdCA9IGUuZ2V0SGVpZ2h0SGFsZigpLCBuID0gITEsIG0gPSAhMTtcbiAgICAgICAgICAgICAgaWYgKGwgPT09IGcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IHQpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gclswXSA9IGwsIHJbMV0gPSBzLCByWzJdID0gZywgclszXSA9IFksICExO1xuICAgICAgICAgICAgICAgIGlmIChpIDwgdClcbiAgICAgICAgICAgICAgICAgIHJldHVybiByWzBdID0gbCwgclsxXSA9IFQsIHJbMl0gPSBnLCByWzNdID0gQywgITE7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gdCkge1xuICAgICAgICAgICAgICAgIGlmIChsID4gZylcbiAgICAgICAgICAgICAgICAgIHJldHVybiByWzBdID0gbywgclsxXSA9IGksIHJbMl0gPSBHLCByWzNdID0gdCwgITE7XG4gICAgICAgICAgICAgICAgaWYgKGwgPCBnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJbMF0gPSBjLCByWzFdID0gaSwgclsyXSA9IGIsIHJbM10gPSB0LCAhMTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGEuaGVpZ2h0IC8gYS53aWR0aCwgRSA9IGUuaGVpZ2h0IC8gZS53aWR0aCwgeSA9ICh0IC0gaSkgLyAoZyAtIGwpLCBSID0gdm9pZCAwLCBNID0gdm9pZCAwLCBTID0gdm9pZCAwLCBXID0gdm9pZCAwLCBEID0gdm9pZCAwLCBxID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmICgtcCA9PT0geSA/IGwgPiBnID8gKHJbMF0gPSBmLCByWzFdID0gVCwgbiA9ICEwKSA6IChyWzBdID0gYywgclsxXSA9IHMsIG4gPSAhMCkgOiBwID09PSB5ICYmIChsID4gZyA/IChyWzBdID0gbywgclsxXSA9IHMsIG4gPSAhMCkgOiAoclswXSA9IGQsIHJbMV0gPSBULCBuID0gITApKSwgLUUgPT09IHkgPyBnID4gbCA/IChyWzJdID0gWiwgclszXSA9IFksIG0gPSAhMCkgOiAoclsyXSA9IEcsIHJbM10gPSBDLCBtID0gITApIDogRSA9PT0geSAmJiAoZyA+IGwgPyAoclsyXSA9IGIsIHJbM10gPSBDLCBtID0gITApIDogKHJbMl0gPSBLLCByWzNdID0gWSwgbSA9ICEwKSksIG4gJiYgbSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICBpZiAobCA+IGcgPyBpID4gdCA/IChSID0gdGhpcy5nZXRDYXJkaW5hbERpcmVjdGlvbihwLCB5LCA0KSwgTSA9IHRoaXMuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oRSwgeSwgMikpIDogKFIgPSB0aGlzLmdldENhcmRpbmFsRGlyZWN0aW9uKC1wLCB5LCAzKSwgTSA9IHRoaXMuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLUUsIHksIDEpKSA6IGkgPiB0ID8gKFIgPSB0aGlzLmdldENhcmRpbmFsRGlyZWN0aW9uKC1wLCB5LCAxKSwgTSA9IHRoaXMuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLUUsIHksIDMpKSA6IChSID0gdGhpcy5nZXRDYXJkaW5hbERpcmVjdGlvbihwLCB5LCAyKSwgTSA9IHRoaXMuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oRSwgeSwgNCkpLCAhbilcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoUikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgVyA9IHMsIFMgPSBsICsgLUwgLyB5LCByWzBdID0gUywgclsxXSA9IFc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICBTID0gZCwgVyA9IGkgKyB2ICogeSwgclswXSA9IFMsIHJbMV0gPSBXO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgVyA9IFQsIFMgPSBsICsgTCAvIHksIHJbMF0gPSBTLCByWzFdID0gVztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgIFMgPSBmLCBXID0gaSArIC12ICogeSwgclswXSA9IFMsIHJbMV0gPSBXO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghbSlcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoTSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgcSA9IEMsIEQgPSBnICsgLWl0IC8geSwgclsyXSA9IEQsIHJbM10gPSBxO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgRCA9IEssIHEgPSB0ICsgTyAqIHksIHJbMl0gPSBELCByWzNdID0gcTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgIHEgPSBZLCBEID0gZyArIGl0IC8geSwgclsyXSA9IEQsIHJbM10gPSBxO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgRCA9IFosIHEgPSB0ICsgLU8gKiB5LCByWzJdID0gRCwgclszXSA9IHE7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSwgaC5nZXRDYXJkaW5hbERpcmVjdGlvbiA9IGZ1bmN0aW9uKGEsIGUsIHIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEgPiBlID8gciA6IDEgKyByICUgNDtcbiAgICAgICAgICAgIH0sIGguZ2V0SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYSwgZSwgciwgbCkge1xuICAgICAgICAgICAgICBpZiAobCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEludGVyc2VjdGlvbjIoYSwgZSwgcik7XG4gICAgICAgICAgICAgIHZhciBpID0gYS54LCBnID0gYS55LCB0ID0gZS54LCBvID0gZS55LCBzID0gci54LCBjID0gci55LCBmID0gbC54LCBUID0gbC55LCBkID0gdm9pZCAwLCB2ID0gdm9pZCAwLCBMID0gdm9pZCAwLCBiID0gdm9pZCAwLCBDID0gdm9pZCAwLCBHID0gdm9pZCAwLCBaID0gdm9pZCAwLCBZID0gdm9pZCAwLCBLID0gdm9pZCAwO1xuICAgICAgICAgICAgICByZXR1cm4gTCA9IG8gLSBnLCBDID0gaSAtIHQsIFogPSB0ICogZyAtIGkgKiBvLCBiID0gVCAtIGMsIEcgPSBzIC0gZiwgWSA9IGYgKiBjIC0gcyAqIFQsIEsgPSBMICogRyAtIGIgKiBDLCBLID09PSAwID8gbnVsbCA6IChkID0gKEMgKiBZIC0gRyAqIFopIC8gSywgdiA9IChiICogWiAtIEwgKiBZKSAvIEssIG5ldyB1KGQsIHYpKTtcbiAgICAgICAgICAgIH0sIGguYW5nbGVPZlZlY3RvciA9IGZ1bmN0aW9uKGEsIGUsIHIsIGwpIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSB2b2lkIDA7XG4gICAgICAgICAgICAgIHJldHVybiBhICE9PSByID8gKGkgPSBNYXRoLmF0YW4oKGwgLSBlKSAvIChyIC0gYSkpLCByIDwgYSA/IGkgKz0gTWF0aC5QSSA6IGwgPCBlICYmIChpICs9IHRoaXMuVFdPX1BJKSkgOiBsIDwgZSA/IGkgPSB0aGlzLk9ORV9BTkRfSEFMRl9QSSA6IGkgPSB0aGlzLkhBTEZfUEksIGk7XG4gICAgICAgICAgICB9LCBoLmRvSW50ZXJzZWN0ID0gZnVuY3Rpb24oYSwgZSwgciwgbCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IGEueCwgZyA9IGEueSwgdCA9IGUueCwgbyA9IGUueSwgcyA9IHIueCwgYyA9IHIueSwgZiA9IGwueCwgVCA9IGwueSwgZCA9ICh0IC0gaSkgKiAoVCAtIGMpIC0gKGYgLSBzKSAqIChvIC0gZyk7XG4gICAgICAgICAgICAgIGlmIChkID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgdmFyIHYgPSAoKFQgLSBjKSAqIChmIC0gaSkgKyAocyAtIGYpICogKFQgLSBnKSkgLyBkLCBMID0gKChnIC0gbykgKiAoZiAtIGkpICsgKHQgLSBpKSAqIChUIC0gZykpIC8gZDtcbiAgICAgICAgICAgICAgcmV0dXJuIDAgPCB2ICYmIHYgPCAxICYmIDAgPCBMICYmIEwgPCAxO1xuICAgICAgICAgICAgfSwgaC5maW5kQ2lyY2xlTGluZUludGVyc2VjdGlvbnMgPSBmdW5jdGlvbihhLCBlLCByLCBsLCBpLCBnLCB0KSB7XG4gICAgICAgICAgICAgIHZhciBvID0gKHIgLSBhKSAqIChyIC0gYSkgKyAobCAtIGUpICogKGwgLSBlKSwgcyA9IDIgKiAoKGEgLSBpKSAqIChyIC0gYSkgKyAoZSAtIGcpICogKGwgLSBlKSksIGMgPSAoYSAtIGkpICogKGEgLSBpKSArIChlIC0gZykgKiAoZSAtIGcpIC0gdCAqIHQsIGYgPSBzICogcyAtIDQgKiBvICogYztcbiAgICAgICAgICAgICAgaWYgKGYgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBUID0gKC1zICsgTWF0aC5zcXJ0KHMgKiBzIC0gNCAqIG8gKiBjKSkgLyAoMiAqIG8pLCBkID0gKC1zIC0gTWF0aC5zcXJ0KHMgKiBzIC0gNCAqIG8gKiBjKSkgLyAoMiAqIG8pLCB2ID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gVCA+PSAwICYmIFQgPD0gMSA/IFtUXSA6IGQgPj0gMCAmJiBkIDw9IDEgPyBbZF0gOiB2O1xuICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LCBoLkhBTEZfUEkgPSAwLjUgKiBNYXRoLlBJLCBoLk9ORV9BTkRfSEFMRl9QSSA9IDEuNSAqIE1hdGguUEksIGguVFdPX1BJID0gMiAqIE1hdGguUEksIGguVEhSRUVfUEkgPSAzICogTWF0aC5QSSwgQS5leHBvcnRzID0gaDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiA5ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgZnVuY3Rpb24gdSgpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHUuc2lnbiA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGggPiAwID8gMSA6IGggPCAwID8gLTEgOiAwO1xuICAgICAgICAgICAgfSwgdS5mbG9vciA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGggPCAwID8gTWF0aC5jZWlsKGgpIDogTWF0aC5mbG9vcihoKTtcbiAgICAgICAgICAgIH0sIHUuY2VpbCA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGggPCAwID8gTWF0aC5mbG9vcihoKSA6IE1hdGguY2VpbChoKTtcbiAgICAgICAgICAgIH0sIEEuZXhwb3J0cyA9IHU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMTAgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1KCkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdS5NQVhfVkFMVUUgPSAyMTQ3NDgzNjQ3LCB1Lk1JTl9WQUxVRSA9IC0yMTQ3NDgzNjQ4LCBBLmV4cG9ydHMgPSB1O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDExICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgdmFyIHUgPSAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBpKGcsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHQubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzID0gdFtvXTtcbiAgICAgICAgICAgICAgICAgIHMuZW51bWVyYWJsZSA9IHMuZW51bWVyYWJsZSB8fCAhMSwgcy5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIHMgJiYgKHMud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnLCBzLmtleSwgcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihnLCB0LCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgJiYgaShnLnByb3RvdHlwZSwgdCksIG8gJiYgaShnLCBvKSwgZztcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBoKGksIGcpIHtcbiAgICAgICAgICAgICAgaWYgKCEoaSBpbnN0YW5jZW9mIGcpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYSA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGcsIG5leHQ6IG51bGwsIHByZXY6IG51bGwgfTtcbiAgICAgICAgICAgIH0sIGUgPSBmdW5jdGlvbihnLCB0LCBvLCBzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBnICE9PSBudWxsID8gZy5uZXh0ID0gdCA6IHMuaGVhZCA9IHQsIG8gIT09IG51bGwgPyBvLnByZXYgPSB0IDogcy50YWlsID0gdCwgdC5wcmV2ID0gZywgdC5uZXh0ID0gbywgcy5sZW5ndGgrKywgdDtcbiAgICAgICAgICAgIH0sIHIgPSBmdW5jdGlvbihnLCB0KSB7XG4gICAgICAgICAgICAgIHZhciBvID0gZy5wcmV2LCBzID0gZy5uZXh0O1xuICAgICAgICAgICAgICByZXR1cm4gbyAhPT0gbnVsbCA/IG8ubmV4dCA9IHMgOiB0LmhlYWQgPSBzLCBzICE9PSBudWxsID8gcy5wcmV2ID0gbyA6IHQudGFpbCA9IG8sIGcucHJldiA9IGcubmV4dCA9IG51bGwsIHQubGVuZ3RoLS0sIGc7XG4gICAgICAgICAgICB9LCBsID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBpKGcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaCh0aGlzLCBpKSwgdGhpcy5sZW5ndGggPSAwLCB0aGlzLmhlYWQgPSBudWxsLCB0aGlzLnRhaWwgPSBudWxsLCBnPy5mb3JFYWNoKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0LnB1c2gobyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHUoaSwgW3tcbiAgICAgICAgICAgICAgICBrZXk6IFwic2l6ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaW5zZXJ0QmVmb3JlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHQsIG8pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlKG8ucHJldiwgYSh0KSwgbywgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImluc2VydEFmdGVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHQsIG8pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlKG8sIGEodCksIG8ubmV4dCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImluc2VydE5vZGVCZWZvcmVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24odCwgbykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGUoby5wcmV2LCB0LCBvLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaW5zZXJ0Tm9kZUFmdGVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHQsIG8pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlKG8sIHQsIG8ubmV4dCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInB1c2hcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGUodGhpcy50YWlsLCBhKHQpLCBudWxsLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwidW5zaGlmdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZShudWxsLCBhKHQpLCB0aGlzLmhlYWQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJyZW1vdmVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIodCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBvcFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByKHRoaXMudGFpbCwgdGhpcykudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBvcE5vZGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcih0aGlzLnRhaWwsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzaGlmdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByKHRoaXMuaGVhZCwgdGhpcykudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNoaWZ0Tm9kZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByKHRoaXMuaGVhZCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImdldF9vYmplY3RfYXRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHQgPD0gdGhpcy5sZW5ndGgoKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gMSwgcyA9IHRoaXMuaGVhZDsgbyA8IHQ7IClcbiAgICAgICAgICAgICAgICAgICAgICBzID0gcy5uZXh0LCBvKys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZXRfb2JqZWN0X2F0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHQsIG8pIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0IDw9IHRoaXMubGVuZ3RoKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IDEsIGMgPSB0aGlzLmhlYWQ7IHMgPCB0OyApXG4gICAgICAgICAgICAgICAgICAgICAgYyA9IGMubmV4dCwgcysrO1xuICAgICAgICAgICAgICAgICAgICBjLnZhbHVlID0gbztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1dKSwgaTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBBLmV4cG9ydHMgPSBsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDEyICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgZnVuY3Rpb24gdShoLCBhLCBlKSB7XG4gICAgICAgICAgICAgIHRoaXMueCA9IG51bGwsIHRoaXMueSA9IG51bGwsIGggPT0gbnVsbCAmJiBhID09IG51bGwgJiYgZSA9PSBudWxsID8gKHRoaXMueCA9IDAsIHRoaXMueSA9IDApIDogdHlwZW9mIGggPT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYSA9PSBcIm51bWJlclwiICYmIGUgPT0gbnVsbCA/ICh0aGlzLnggPSBoLCB0aGlzLnkgPSBhKSA6IGguY29uc3RydWN0b3IubmFtZSA9PSBcIlBvaW50XCIgJiYgYSA9PSBudWxsICYmIGUgPT0gbnVsbCAmJiAoZSA9IGgsIHRoaXMueCA9IGUueCwgdGhpcy55ID0gZS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHUucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgdSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKGgsIGEsIGUpIHtcbiAgICAgICAgICAgICAgaC5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIiAmJiBhID09IG51bGwgJiYgZSA9PSBudWxsID8gKGUgPSBoLCB0aGlzLnNldExvY2F0aW9uKGUueCwgZS55KSkgOiB0eXBlb2YgaCA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBhID09IFwibnVtYmVyXCIgJiYgZSA9PSBudWxsICYmIChwYXJzZUludChoKSA9PSBoICYmIHBhcnNlSW50KGEpID09IGEgPyB0aGlzLm1vdmUoaCwgYSkgOiAodGhpcy54ID0gTWF0aC5mbG9vcihoICsgMC41KSwgdGhpcy55ID0gTWF0aC5mbG9vcihhICsgMC41KSkpO1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGgsIGEpIHtcbiAgICAgICAgICAgICAgdGhpcy54ID0gaCwgdGhpcy55ID0gYTtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGgsIGEpIHtcbiAgICAgICAgICAgICAgdGhpcy54ICs9IGgsIHRoaXMueSArPSBhO1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICBpZiAoaC5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xuICAgICAgICAgICAgICAgIHZhciBhID0gaDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy54ID09IGEueCAmJiB0aGlzLnkgPT0gYS55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzID09IGg7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IHUoKS5jb25zdHJ1Y3Rvci5uYW1lICsgXCJbeD1cIiArIHRoaXMueCArIFwiLHk9XCIgKyB0aGlzLnkgKyBcIl1cIjtcbiAgICAgICAgICAgIH0sIEEuZXhwb3J0cyA9IHU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMTMgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1KGgsIGEsIGUsIHIpIHtcbiAgICAgICAgICAgICAgdGhpcy54ID0gMCwgdGhpcy55ID0gMCwgdGhpcy53aWR0aCA9IDAsIHRoaXMuaGVpZ2h0ID0gMCwgaCAhPSBudWxsICYmIGEgIT0gbnVsbCAmJiBlICE9IG51bGwgJiYgciAhPSBudWxsICYmICh0aGlzLnggPSBoLCB0aGlzLnkgPSBhLCB0aGlzLndpZHRoID0gZSwgdGhpcy5oZWlnaHQgPSByKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHUucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICAgIHRoaXMueCA9IGg7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnk7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICB0aGlzLnkgPSBoO1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IGg7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IGg7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5pbnRlcnNlY3RzID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICByZXR1cm4gISh0aGlzLmdldFJpZ2h0KCkgPCBoLnggfHwgdGhpcy5nZXRCb3R0b20oKSA8IGgueSB8fCBoLmdldFJpZ2h0KCkgPCB0aGlzLnggfHwgaC5nZXRCb3R0b20oKSA8IHRoaXMueSk7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLmdldE1pblggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WCgpO1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUuZ2V0TWF4WCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRYKCkgKyB0aGlzLndpZHRoO1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUuZ2V0TWluWSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRZKCk7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5nZXRNYXhZID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFkoKSArIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUuZ2V0V2lkdGhIYWxmID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIH0sIHUucHJvdG90eXBlLmdldEhlaWdodEhhbGYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIH0sIEEuZXhwb3J0cyA9IHU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMTQgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICB2YXIgdSA9IHR5cGVvZiBTeW1ib2wgPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhO1xuICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgdHlwZW9mIFN5bWJvbCA9PSBcImZ1bmN0aW9uXCIgJiYgYS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGEgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGE7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZnVuY3Rpb24gaCgpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgubGFzdElEID0gMCwgaC5jcmVhdGVJRCA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGguaXNQcmltaXRpdmUoYSkgPyBhIDogKGEudW5pcXVlSUQgIT0gbnVsbCB8fCAoYS51bmlxdWVJRCA9IGguZ2V0U3RyaW5nKCksIGgubGFzdElEKyspLCBhLnVuaXF1ZUlEKTtcbiAgICAgICAgICAgIH0sIGguZ2V0U3RyaW5nID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICByZXR1cm4gYSA9PSBudWxsICYmIChhID0gaC5sYXN0SUQpLCBcIk9iamVjdCNcIiArIGE7XG4gICAgICAgICAgICB9LCBoLmlzUHJpbWl0aXZlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB2YXIgZSA9IHR5cGVvZiBhID4gXCJ1XCIgPyBcInVuZGVmaW5lZFwiIDogdShhKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGEgPT0gbnVsbCB8fCBlICE9IFwib2JqZWN0XCIgJiYgZSAhPSBcImZ1bmN0aW9uXCI7XG4gICAgICAgICAgICB9LCBBLmV4cG9ydHMgPSBoO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDE1ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgZnVuY3Rpb24gdShzKSB7XG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDAsIGYgPSBBcnJheShzLmxlbmd0aCk7IGMgPCBzLmxlbmd0aDsgYysrKVxuICAgICAgICAgICAgICAgICAgZltjXSA9IHNbY107XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGggPSBOKDApLCBhID0gTig3KSwgZSA9IE4oMyksIHIgPSBOKDEpLCBsID0gTig2KSwgaSA9IE4oNSksIGcgPSBOKDE3KSwgdCA9IE4oMjkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gbyhzKSB7XG4gICAgICAgICAgICAgIHQuY2FsbCh0aGlzKSwgdGhpcy5sYXlvdXRRdWFsaXR5ID0gaC5RVUFMSVRZLCB0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgPSBoLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCwgdGhpcy5pbmNyZW1lbnRhbCA9IGguREVGQVVMVF9JTkNSRU1FTlRBTCwgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IGguREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VULCB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IGguREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCwgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBoLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCwgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9IGguREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUywgdGhpcy5lZGdlVG9EdW1teU5vZGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgdGhpcy5ncmFwaE1hbmFnZXIgPSBuZXcgYSh0aGlzKSwgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gITEsIHRoaXMuaXNTdWJMYXlvdXQgPSAhMSwgdGhpcy5pc1JlbW90ZVVzZSA9ICExLCBzICE9IG51bGwgJiYgKHRoaXMuaXNSZW1vdGVVc2UgPSBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8uUkFORE9NX1NFRUQgPSAxLCBvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUodC5wcm90b3R5cGUpLCBvLnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gbmV3IGEodGhpcyk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlciA9IHMsIHM7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBsKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCBzKTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgZSh0aGlzLmdyYXBoTWFuYWdlciwgcyk7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IHIobnVsbCwgbnVsbCwgcyk7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5jaGVja0xheW91dFN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSA9PSBudWxsIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpLmxlbmd0aCA9PSAwIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmluY2x1ZGVzSW52YWxpZEVkZ2UoKTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLnJ1bkxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSAhMSwgdGhpcy50aWxpbmdQcmVMYXlvdXQgJiYgdGhpcy50aWxpbmdQcmVMYXlvdXQoKSwgdGhpcy5pbml0UGFyYW1ldGVycygpO1xuICAgICAgICAgICAgICB2YXIgcztcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tMYXlvdXRTdWNjZXNzKCkgPyBzID0gITEgOiBzID0gdGhpcy5sYXlvdXQoKSwgaC5BTklNQVRFID09PSBcImR1cmluZ1wiID8gITEgOiAocyAmJiAodGhpcy5pc1N1YkxheW91dCB8fCB0aGlzLmRvUG9zdExheW91dCgpKSwgdGhpcy50aWxpbmdQb3N0TGF5b3V0ICYmIHRoaXMudGlsaW5nUG9zdExheW91dCgpLCB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSAhMCwgcyk7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5kb1Bvc3RMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRhbCB8fCB0aGlzLnRyYW5zZm9ybSgpLCB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUudXBkYXRlMiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkICYmICh0aGlzLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcygpLCB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCkpLCAhdGhpcy5pc1JlbW90ZVVzZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpLCBjID0gMDsgYyA8IHMubGVuZ3RoOyBjKyspXG4gICAgICAgICAgICAgICAgICBzW2NdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGYgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKSwgYyA9IDA7IGMgPCBmLmxlbmd0aDsgYysrKVxuICAgICAgICAgICAgICAgICAgZltjXTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIGlmIChzID09IG51bGwpXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUyKCk7XG4gICAgICAgICAgICAgIGVsc2UgaWYgKHMgaW5zdGFuY2VvZiBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBzO1xuICAgICAgICAgICAgICAgIGlmIChjLmdldENoaWxkKCkgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGYgPSBjLmdldENoaWxkKCkuZ2V0Tm9kZXMoKSwgVCA9IDA7IFQgPCBmLmxlbmd0aDsgVCsrKVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGUoZltUXSk7XG4gICAgICAgICAgICAgICAgaWYgKGMudkdyYXBoT2JqZWN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBkID0gYy52R3JhcGhPYmplY3Q7XG4gICAgICAgICAgICAgICAgICBkLnVwZGF0ZShjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocyBpbnN0YW5jZW9mIHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHM7XG4gICAgICAgICAgICAgICAgaWYgKHYudkdyYXBoT2JqZWN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBMID0gdi52R3JhcGhPYmplY3Q7XG4gICAgICAgICAgICAgICAgICBMLnVwZGF0ZSh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocyBpbnN0YW5jZW9mIGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHM7XG4gICAgICAgICAgICAgICAgaWYgKGIudkdyYXBoT2JqZWN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBDID0gYi52R3JhcGhPYmplY3Q7XG4gICAgICAgICAgICAgICAgICBDLnVwZGF0ZShiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNTdWJMYXlvdXQgfHwgKHRoaXMubGF5b3V0UXVhbGl0eSA9IGguUVVBTElUWSwgdGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgPSBoLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQsIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gaC5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QsIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBoLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCwgdGhpcy5pbmNyZW1lbnRhbCA9IGguREVGQVVMVF9JTkNSRU1FTlRBTCwgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID0gaC5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQsIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPSBoLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMpLCB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCAmJiAodGhpcy5hbmltYXRpb25PbkxheW91dCA9ICExKTtcbiAgICAgICAgICAgIH0sIG8ucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgaWYgKHMgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShuZXcgaSgwLCAwKSk7XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjID0gbmV3IGcoKSwgZiA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS51cGRhdGVMZWZ0VG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKGYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgYy5zZXRXb3JsZE9yZ1gocy54KSwgYy5zZXRXb3JsZE9yZ1kocy55KSwgYy5zZXREZXZpY2VPcmdYKGYueCksIGMuc2V0RGV2aWNlT3JnWShmLnkpO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgVCA9IHRoaXMuZ2V0QWxsTm9kZXMoKSwgZCwgdiA9IDA7IHYgPCBULmxlbmd0aDsgdisrKVxuICAgICAgICAgICAgICAgICAgICBkID0gVFt2XSwgZC50cmFuc2Zvcm0oYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFuZG9tbHkgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIGlmIChzID09IG51bGwpXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkodGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkpLCB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKS51cGRhdGVCb3VuZHMoITApO1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYywgZiwgVCA9IHMuZ2V0Tm9kZXMoKSwgZCA9IDA7IGQgPCBULmxlbmd0aDsgZCsrKVxuICAgICAgICAgICAgICAgICAgYyA9IFRbZF0sIGYgPSBjLmdldENoaWxkKCksIGYgPT0gbnVsbCB8fCBmLmdldE5vZGVzKCkubGVuZ3RoID09IDAgPyBjLnNjYXR0ZXIoKSA6ICh0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seShmKSwgYy51cGRhdGVCb3VuZHMoKSk7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5nZXRGbGF0Rm9yZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHMgPSBbXSwgYyA9ICEwLCBmID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCksIFQgPSAhMCwgZCA9IDA7IGQgPCBmLmxlbmd0aDsgZCsrKVxuICAgICAgICAgICAgICAgIGZbZF0uZ2V0Q2hpbGQoKSAhPSBudWxsICYmIChUID0gITEpO1xuICAgICAgICAgICAgICBpZiAoIVQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICAgIHZhciB2ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSwgTCA9IFtdLCBiID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgQyA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKEMgPSBDLmNvbmNhdChmKTsgQy5sZW5ndGggPiAwICYmIGM7ICkge1xuICAgICAgICAgICAgICAgIGZvciAoTC5wdXNoKENbMF0pOyBMLmxlbmd0aCA+IDAgJiYgYzsgKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgRyA9IExbMF07XG4gICAgICAgICAgICAgICAgICBMLnNwbGljZSgwLCAxKSwgdi5hZGQoRyk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBaID0gRy5nZXRFZGdlcygpLCBkID0gMDsgZCA8IFoubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFkgPSBaW2RdLmdldE90aGVyRW5kKEcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYi5nZXQoRykgIT0gWSlcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXYuaGFzKFkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgTC5wdXNoKFkpLCBiLnNldChZLCBHKTtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjKVxuICAgICAgICAgICAgICAgICAgcyA9IFtdO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFyIEsgPSBbXS5jb25jYXQodSh2KSk7XG4gICAgICAgICAgICAgICAgICBzLnB1c2goSyk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IEsubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSBLW2RdLCBpdCA9IEMuaW5kZXhPZihPKTtcbiAgICAgICAgICAgICAgICAgICAgaXQgPiAtMSAmJiBDLnNwbGljZShpdCwgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSwgYiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGMgPSBbXSwgZiA9IHMuc291cmNlLCBUID0gdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yKHMuc291cmNlLCBzLnRhcmdldCksIGQgPSAwOyBkIDwgcy5iZW5kcG9pbnRzLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzLm5ld05vZGUobnVsbCk7XG4gICAgICAgICAgICAgICAgdi5zZXRSZWN0KG5ldyBQb2ludCgwLCAwKSwgbmV3IERpbWVuc2lvbigxLCAxKSksIFQuYWRkKHYpO1xuICAgICAgICAgICAgICAgIHZhciBMID0gdGhpcy5uZXdFZGdlKG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChMLCBmLCB2KSwgYy5hZGQodiksIGYgPSB2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBMID0gdGhpcy5uZXdFZGdlKG51bGwpO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuYWRkKEwsIGYsIHMudGFyZ2V0KSwgdGhpcy5lZGdlVG9EdW1teU5vZGVzLnNldChzLCBjKSwgcy5pc0ludGVyR3JhcGgoKSA/IHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShzKSA6IFQucmVtb3ZlKHMpLCBjO1xuICAgICAgICAgICAgfSwgby5wcm90b3R5cGUuY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gW107XG4gICAgICAgICAgICAgIHMgPSBzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKSwgcyA9IFtdLmNvbmNhdCh1KHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5rZXlzKCkpKS5jb25jYXQocyk7XG4gICAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgcy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgIHZhciBmID0gc1tjXTtcbiAgICAgICAgICAgICAgICBpZiAoZi5iZW5kcG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIFQgPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMuZ2V0KGYpLCBkID0gMDsgZCA8IFQubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBUW2RdLCBMID0gbmV3IGkodi5nZXRDZW50ZXJYKCksIHYuZ2V0Q2VudGVyWSgpKSwgYiA9IGYuYmVuZHBvaW50cy5nZXQoZCk7XG4gICAgICAgICAgICAgICAgICAgIGIueCA9IEwueCwgYi55ID0gTC55LCB2LmdldE93bmVyKCkucmVtb3ZlKHYpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGYsIGYuc291cmNlLCBmLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvLnRyYW5zZm9ybSA9IGZ1bmN0aW9uKHMsIGMsIGYsIFQpIHtcbiAgICAgICAgICAgICAgaWYgKGYgIT0gbnVsbCAmJiBUICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGM7XG4gICAgICAgICAgICAgICAgaWYgKHMgPD0gNTApIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2ID0gYyAvIGY7XG4gICAgICAgICAgICAgICAgICBkIC09IChjIC0gdikgLyA1MCAqICg1MCAtIHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgTCA9IGMgKiBUO1xuICAgICAgICAgICAgICAgICAgZCArPSAoTCAtIGMpIC8gNTAgKiAocyAtIDUwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGIsIEM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgPD0gNTAgPyAoYiA9IDkgKiBjIC8gNTAwLCBDID0gYyAvIDEwKSA6IChiID0gOSAqIGMgLyA1MCwgQyA9IC04ICogYyksIGIgKiBzICsgQztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgby5maW5kQ2VudGVyT2ZUcmVlID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICB2YXIgYyA9IFtdO1xuICAgICAgICAgICAgICBjID0gYy5jb25jYXQocyk7XG4gICAgICAgICAgICAgIHZhciBmID0gW10sIFQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBkID0gITEsIHYgPSBudWxsO1xuICAgICAgICAgICAgICAoYy5sZW5ndGggPT0gMSB8fCBjLmxlbmd0aCA9PSAyKSAmJiAoZCA9ICEwLCB2ID0gY1swXSk7XG4gICAgICAgICAgICAgIGZvciAodmFyIEwgPSAwOyBMIDwgYy5sZW5ndGg7IEwrKykge1xuICAgICAgICAgICAgICAgIHZhciBiID0gY1tMXSwgQyA9IGIuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemU7XG4gICAgICAgICAgICAgICAgVC5zZXQoYiwgYi5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSksIEMgPT0gMSAmJiBmLnB1c2goYik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIEcgPSBbXTtcbiAgICAgICAgICAgICAgZm9yIChHID0gRy5jb25jYXQoZik7ICFkOyApIHtcbiAgICAgICAgICAgICAgICB2YXIgWiA9IFtdO1xuICAgICAgICAgICAgICAgIFogPSBaLmNvbmNhdChHKSwgRyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIEwgPSAwOyBMIDwgYy5sZW5ndGg7IEwrKykge1xuICAgICAgICAgICAgICAgICAgdmFyIGIgPSBjW0xdLCBZID0gYy5pbmRleE9mKGIpO1xuICAgICAgICAgICAgICAgICAgWSA+PSAwICYmIGMuc3BsaWNlKFksIDEpO1xuICAgICAgICAgICAgICAgICAgdmFyIEsgPSBiLmdldE5laWdoYm9yc0xpc3QoKTtcbiAgICAgICAgICAgICAgICAgIEsuZm9yRWFjaChmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmLmluZGV4T2YobikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBULmdldChuKSwgcCA9IG0gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgIHAgPT0gMSAmJiBHLnB1c2gobiksIFQuc2V0KG4sIHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZiA9IGYuY29uY2F0KEcpLCAoYy5sZW5ndGggPT0gMSB8fCBjLmxlbmd0aCA9PSAyKSAmJiAoZCA9ICEwLCB2ID0gY1swXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9LCBvLnByb3RvdHlwZS5zZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gcztcbiAgICAgICAgICAgIH0sIEEuZXhwb3J0cyA9IG87XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMTYgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1KCkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdS5zZWVkID0gMSwgdS54ID0gMCwgdS5uZXh0RG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1LnggPSBNYXRoLnNpbih1LnNlZWQrKykgKiAxZTQsIHUueCAtIE1hdGguZmxvb3IodS54KTtcbiAgICAgICAgICAgIH0sIEEuZXhwb3J0cyA9IHU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMTcgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICB2YXIgdSA9IE4oNSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBoKGEsIGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5sd29ybGRPcmdYID0gMCwgdGhpcy5sd29ybGRPcmdZID0gMCwgdGhpcy5sZGV2aWNlT3JnWCA9IDAsIHRoaXMubGRldmljZU9yZ1kgPSAwLCB0aGlzLmx3b3JsZEV4dFggPSAxLCB0aGlzLmx3b3JsZEV4dFkgPSAxLCB0aGlzLmxkZXZpY2VFeHRYID0gMSwgdGhpcy5sZGV2aWNlRXh0WSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWDtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLnNldFdvcmxkT3JnWCA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgdGhpcy5sd29ybGRPcmdYID0gYTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldFdvcmxkT3JnWSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sd29ybGRPcmdZO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuc2V0V29ybGRPcmdZID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB0aGlzLmx3b3JsZE9yZ1kgPSBhO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmx3b3JsZEV4dFg7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5zZXRXb3JsZEV4dFggPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIHRoaXMubHdvcmxkRXh0WCA9IGE7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5nZXRXb3JsZEV4dFkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLnNldFdvcmxkRXh0WSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgdGhpcy5sd29ybGRFeHRZID0gYTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldERldmljZU9yZ1ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1g7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5zZXREZXZpY2VPcmdYID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB0aGlzLmxkZXZpY2VPcmdYID0gYTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldERldmljZU9yZ1kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1k7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5zZXREZXZpY2VPcmdZID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB0aGlzLmxkZXZpY2VPcmdZID0gYTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldERldmljZUV4dFggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGRldmljZUV4dFg7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5zZXREZXZpY2VFeHRYID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB0aGlzLmxkZXZpY2VFeHRYID0gYTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmdldERldmljZUV4dFkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGRldmljZUV4dFk7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5zZXREZXZpY2VFeHRZID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB0aGlzLmxkZXZpY2VFeHRZID0gYTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLnRyYW5zZm9ybVggPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIHZhciBlID0gMCwgciA9IHRoaXMubHdvcmxkRXh0WDtcbiAgICAgICAgICAgICAgcmV0dXJuIHIgIT0gMCAmJiAoZSA9IHRoaXMubGRldmljZU9yZ1ggKyAoYSAtIHRoaXMubHdvcmxkT3JnWCkgKiB0aGlzLmxkZXZpY2VFeHRYIC8gciksIGU7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS50cmFuc2Zvcm1ZID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB2YXIgZSA9IDAsIHIgPSB0aGlzLmx3b3JsZEV4dFk7XG4gICAgICAgICAgICAgIHJldHVybiByICE9IDAgJiYgKGUgPSB0aGlzLmxkZXZpY2VPcmdZICsgKGEgLSB0aGlzLmx3b3JsZE9yZ1kpICogdGhpcy5sZGV2aWNlRXh0WSAvIHIpLCBlO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVggPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIHZhciBlID0gMCwgciA9IHRoaXMubGRldmljZUV4dFg7XG4gICAgICAgICAgICAgIHJldHVybiByICE9IDAgJiYgKGUgPSB0aGlzLmx3b3JsZE9yZ1ggKyAoYSAtIHRoaXMubGRldmljZU9yZ1gpICogdGhpcy5sd29ybGRFeHRYIC8gciksIGU7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgdmFyIGUgPSAwLCByID0gdGhpcy5sZGV2aWNlRXh0WTtcbiAgICAgICAgICAgICAgcmV0dXJuIHIgIT0gMCAmJiAoZSA9IHRoaXMubHdvcmxkT3JnWSArIChhIC0gdGhpcy5sZGV2aWNlT3JnWSkgKiB0aGlzLmx3b3JsZEV4dFkgLyByKSwgZTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1Qb2ludCA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgdSh0aGlzLmludmVyc2VUcmFuc2Zvcm1YKGEueCksIHRoaXMuaW52ZXJzZVRyYW5zZm9ybVkoYS55KSk7XG4gICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfSwgQS5leHBvcnRzID0gaDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAxOCAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKEEsIFAsIE4pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHUodCkge1xuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwLCBzID0gQXJyYXkodC5sZW5ndGgpOyBvIDwgdC5sZW5ndGg7IG8rKylcbiAgICAgICAgICAgICAgICAgIHNbb10gPSB0W29dO1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoID0gTigxNSksIGEgPSBOKDQpLCBlID0gTigwKSwgciA9IE4oOCksIGwgPSBOKDkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gaSgpIHtcbiAgICAgICAgICAgICAgaC5jYWxsKHRoaXMpLCB0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24gPSBhLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OLCB0aGlzLmdyYXZpdHlDb25zdGFudCA9IGEuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RILCB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50ID0gYS5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEgsIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yID0gYS5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SLCB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID0gYS5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SLCB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgPSAzICogYS5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMTAwLCB0aGlzLmNvb2xpbmdGYWN0b3IgPSBhLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwsIHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgPSBhLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwsIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwLCB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gMCwgdGhpcy5tYXhJdGVyYXRpb25zID0gYS5NQVhfSVRFUkFUSU9OUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBnIGluIGgpXG4gICAgICAgICAgICAgIGlbZ10gPSBoW2ddO1xuICAgICAgICAgICAgaS5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMuY2FsbCh0aGlzLCBhcmd1bWVudHMpLCB0aGlzLnRvdGFsSXRlcmF0aW9ucyA9IDAsIHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID0gMCwgdGhpcy51c2VGUkdyaWRWYXJpYW50ID0gYS5ERUZBVUxUX1VTRV9TTUFSVF9SRVBVTFNJT05fUkFOR0VfQ0FMQ1VMQVRJT04sIHRoaXMuZ3JpZCA9IFtdO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuY2FsY0lkZWFsRWRnZUxlbmd0aHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgdCwgbywgcywgYywgZiwgVCwgZCwgdiA9IHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0QWxsRWRnZXMoKSwgTCA9IDA7IEwgPCB2Lmxlbmd0aDsgTCsrKVxuICAgICAgICAgICAgICAgIHQgPSB2W0xdLCBvID0gdC5pZGVhbExlbmd0aCwgdC5pc0ludGVyR3JhcGggJiYgKGMgPSB0LmdldFNvdXJjZSgpLCBmID0gdC5nZXRUYXJnZXQoKSwgVCA9IHQuZ2V0U291cmNlSW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCksIGQgPSB0LmdldFRhcmdldEluTGNhKCkuZ2V0RXN0aW1hdGVkU2l6ZSgpLCB0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24gJiYgKHQuaWRlYWxMZW5ndGggKz0gVCArIGQgLSAyICogZS5TSU1QTEVfTk9ERV9TSVpFKSwgcyA9IHQuZ2V0TGNhKCkuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCksIHQuaWRlYWxMZW5ndGggKz0gbyAqIGEuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiAqIChjLmdldEluY2x1c2lvblRyZWVEZXB0aCgpICsgZi5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKSAtIDIgKiBzKSk7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5pbml0U3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmdldEFsbE5vZGVzKCkubGVuZ3RoO1xuICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudGFsID8gKHQgPiBhLkFEQVBUQVRJT05fTE9XRVJfTk9ERV9MSU1JVCAmJiAodGhpcy5jb29saW5nRmFjdG9yID0gTWF0aC5tYXgodGhpcy5jb29saW5nRmFjdG9yICogYS5DT09MSU5HX0FEQVBUQVRJT05fRkFDVE9SLCB0aGlzLmNvb2xpbmdGYWN0b3IgLSAodCAtIGEuQURBUFRBVElPTl9MT1dFUl9OT0RFX0xJTUlUKSAvIChhLkFEQVBUQVRJT05fVVBQRVJfTk9ERV9MSU1JVCAtIGEuQURBUFRBVElPTl9MT1dFUl9OT0RFX0xJTUlUKSAqIHRoaXMuY29vbGluZ0ZhY3RvciAqICgxIC0gYS5DT09MSU5HX0FEQVBUQVRJT05fRkFDVE9SKSkpLCB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPSBhLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCkgOiAodCA+IGEuQURBUFRBVElPTl9MT1dFUl9OT0RFX0xJTUlUID8gdGhpcy5jb29saW5nRmFjdG9yID0gTWF0aC5tYXgoYS5DT09MSU5HX0FEQVBUQVRJT05fRkFDVE9SLCAxIC0gKHQgLSBhLkFEQVBUQVRJT05fTE9XRVJfTk9ERV9MSU1JVCkgLyAoYS5BREFQVEFUSU9OX1VQUEVSX05PREVfTElNSVQgLSBhLkFEQVBUQVRJT05fTE9XRVJfTk9ERV9MSU1JVCkgKiAoMSAtIGEuQ09PTElOR19BREFQVEFUSU9OX0ZBQ1RPUikpIDogdGhpcy5jb29saW5nRmFjdG9yID0gMSwgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IHRoaXMuY29vbGluZ0ZhY3RvciwgdGhpcy5tYXhOb2RlRGlzcGxhY2VtZW50ID0gYS5NQVhfTk9ERV9ESVNQTEFDRU1FTlQpLCB0aGlzLm1heEl0ZXJhdGlvbnMgPSBNYXRoLm1heCh0aGlzLmdldEFsbE5vZGVzKCkubGVuZ3RoICogNSwgdGhpcy5tYXhJdGVyYXRpb25zKSwgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlID0gMyAqIGEuREVGQVVMVF9FREdFX0xFTkdUSCAvIDEwMCwgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCA9IHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAqIHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGgsIHRoaXMucmVwdWxzaW9uUmFuZ2UgPSB0aGlzLmNhbGNSZXB1bHNpb25SYW5nZSgpO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gdGhpcy5nZXRBbGxFZGdlcygpLCBvLCBzID0gMDsgcyA8IHQubGVuZ3RoOyBzKyspXG4gICAgICAgICAgICAgICAgbyA9IHRbc10sIHRoaXMuY2FsY1NwcmluZ0ZvcmNlKG8sIG8uaWRlYWxMZW5ndGgpO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzBdIDogITAsIG8gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1sxXSA6ICExLCBzLCBjLCBmLCBULCBkID0gdGhpcy5nZXRBbGxOb2RlcygpLCB2O1xuICAgICAgICAgICAgICBpZiAodGhpcy51c2VGUkdyaWRWYXJpYW50KVxuICAgICAgICAgICAgICAgIGZvciAodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBhLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID09IDEgJiYgdCAmJiB0aGlzLnVwZGF0ZUdyaWQoKSwgdiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksIHMgPSAwOyBzIDwgZC5sZW5ndGg7IHMrKylcbiAgICAgICAgICAgICAgICAgIGYgPSBkW3NdLCB0aGlzLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZShmLCB2LCB0LCBvKSwgdi5hZGQoZik7XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBmb3IgKHMgPSAwOyBzIDwgZC5sZW5ndGg7IHMrKylcbiAgICAgICAgICAgICAgICAgIGZvciAoZiA9IGRbc10sIGMgPSBzICsgMTsgYyA8IGQubGVuZ3RoOyBjKyspXG4gICAgICAgICAgICAgICAgICAgIFQgPSBkW2NdLCBmLmdldE93bmVyKCkgPT0gVC5nZXRPd25lcigpICYmIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKGYsIFQpO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgdCwgbyA9IHRoaXMuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKSwgcyA9IDA7IHMgPCBvLmxlbmd0aDsgcysrKVxuICAgICAgICAgICAgICAgIHQgPSBvW3NdLCB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2UodCk7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5tb3ZlTm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IHRoaXMuZ2V0QWxsTm9kZXMoKSwgbywgcyA9IDA7IHMgPCB0Lmxlbmd0aDsgcysrKVxuICAgICAgICAgICAgICAgIG8gPSB0W3NdLCBvLm1vdmUoKTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmNhbGNTcHJpbmdGb3JjZSA9IGZ1bmN0aW9uKHQsIG8pIHtcbiAgICAgICAgICAgICAgdmFyIHMgPSB0LmdldFNvdXJjZSgpLCBjID0gdC5nZXRUYXJnZXQoKSwgZiwgVCwgZCwgdjtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgJiYgcy5nZXRDaGlsZCgpID09IG51bGwgJiYgYy5nZXRDaGlsZCgpID09IG51bGwpXG4gICAgICAgICAgICAgICAgdC51cGRhdGVMZW5ndGhTaW1wbGUoKTtcbiAgICAgICAgICAgICAgZWxzZSBpZiAodC51cGRhdGVMZW5ndGgoKSwgdC5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICBmID0gdC5nZXRMZW5ndGgoKSwgZiAhPSAwICYmIChUID0gdC5lZGdlRWxhc3RpY2l0eSAqIChmIC0gbyksIGQgPSBUICogKHQubGVuZ3RoWCAvIGYpLCB2ID0gVCAqICh0Lmxlbmd0aFkgLyBmKSwgcy5zcHJpbmdGb3JjZVggKz0gZCwgcy5zcHJpbmdGb3JjZVkgKz0gdiwgYy5zcHJpbmdGb3JjZVggLT0gZCwgYy5zcHJpbmdGb3JjZVkgLT0gdik7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2UgPSBmdW5jdGlvbih0LCBvKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gdC5nZXRSZWN0KCksIGMgPSBvLmdldFJlY3QoKSwgZiA9IG5ldyBBcnJheSgyKSwgVCA9IG5ldyBBcnJheSg0KSwgZCwgdiwgTCwgYiwgQywgRywgWjtcbiAgICAgICAgICAgICAgaWYgKHMuaW50ZXJzZWN0cyhjKSkge1xuICAgICAgICAgICAgICAgIHIuY2FsY1NlcGFyYXRpb25BbW91bnQocywgYywgZiwgYS5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMiksIEcgPSAyICogZlswXSwgWiA9IDIgKiBmWzFdO1xuICAgICAgICAgICAgICAgIHZhciBZID0gdC5ub09mQ2hpbGRyZW4gKiBvLm5vT2ZDaGlsZHJlbiAvICh0Lm5vT2ZDaGlsZHJlbiArIG8ubm9PZkNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB0LnJlcHVsc2lvbkZvcmNlWCAtPSBZICogRywgdC5yZXB1bHNpb25Gb3JjZVkgLT0gWSAqIFosIG8ucmVwdWxzaW9uRm9yY2VYICs9IFkgKiBHLCBvLnJlcHVsc2lvbkZvcmNlWSArPSBZICogWjtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJiB0LmdldENoaWxkKCkgPT0gbnVsbCAmJiBvLmdldENoaWxkKCkgPT0gbnVsbCA/IChkID0gYy5nZXRDZW50ZXJYKCkgLSBzLmdldENlbnRlclgoKSwgdiA9IGMuZ2V0Q2VudGVyWSgpIC0gcy5nZXRDZW50ZXJZKCkpIDogKHIuZ2V0SW50ZXJzZWN0aW9uKHMsIGMsIFQpLCBkID0gVFsyXSAtIFRbMF0sIHYgPSBUWzNdIC0gVFsxXSksIE1hdGguYWJzKGQpIDwgYS5NSU5fUkVQVUxTSU9OX0RJU1QgJiYgKGQgPSBsLnNpZ24oZCkgKiBhLk1JTl9SRVBVTFNJT05fRElTVCksIE1hdGguYWJzKHYpIDwgYS5NSU5fUkVQVUxTSU9OX0RJU1QgJiYgKHYgPSBsLnNpZ24odikgKiBhLk1JTl9SRVBVTFNJT05fRElTVCksIEwgPSBkICogZCArIHYgKiB2LCBiID0gTWF0aC5zcXJ0KEwpLCBDID0gKHQubm9kZVJlcHVsc2lvbiAvIDIgKyBvLm5vZGVSZXB1bHNpb24gLyAyKSAqIHQubm9PZkNoaWxkcmVuICogby5ub09mQ2hpbGRyZW4gLyBMLCBHID0gQyAqIGQgLyBiLCBaID0gQyAqIHYgLyBiLCB0LnJlcHVsc2lvbkZvcmNlWCAtPSBHLCB0LnJlcHVsc2lvbkZvcmNlWSAtPSBaLCBvLnJlcHVsc2lvbkZvcmNlWCArPSBHLCBvLnJlcHVsc2lvbkZvcmNlWSArPSBaO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgdmFyIG8sIHMsIGMsIGYsIFQsIGQsIHYsIEw7XG4gICAgICAgICAgICAgIG8gPSB0LmdldE93bmVyKCksIHMgPSAoby5nZXRSaWdodCgpICsgby5nZXRMZWZ0KCkpIC8gMiwgYyA9IChvLmdldFRvcCgpICsgby5nZXRCb3R0b20oKSkgLyAyLCBmID0gdC5nZXRDZW50ZXJYKCkgLSBzLCBUID0gdC5nZXRDZW50ZXJZKCkgLSBjLCBkID0gTWF0aC5hYnMoZikgKyB0LmdldFdpZHRoKCkgLyAyLCB2ID0gTWF0aC5hYnMoVCkgKyB0LmdldEhlaWdodCgpIC8gMiwgdC5nZXRPd25lcigpID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSA/IChMID0gby5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvciwgKGQgPiBMIHx8IHYgPiBMKSAmJiAodC5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGYsIHQuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBUKSkgOiAoTCA9IG8uZ2V0RXN0aW1hdGVkU2l6ZSgpICogdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciwgKGQgPiBMIHx8IHYgPiBMKSAmJiAodC5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGYgKiB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50LCB0LmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogVCAqIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQpKTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmlzQ29udmVyZ2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciB0LCBvID0gITE7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsSXRlcmF0aW9ucyA+IHRoaXMubWF4SXRlcmF0aW9ucyAvIDMgJiYgKG8gPSBNYXRoLmFicyh0aGlzLnRvdGFsRGlzcGxhY2VtZW50IC0gdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCkgPCAyKSwgdCA9IHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPCB0aGlzLnRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkLCB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gdGhpcy50b3RhbERpc3BsYWNlbWVudCwgdCB8fCBvO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCAmJiAhdGhpcy5pc1N1YkxheW91dCAmJiAodGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPT0gdGhpcy5hbmltYXRpb25QZXJpb2QgPyAodGhpcy51cGRhdGUoKSwgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwKSA6IHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zKyspO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHQsIG8gPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpLCBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspXG4gICAgICAgICAgICAgICAgdCA9IG9bc10sIHQubm9PZkNoaWxkcmVuID0gdC5nZXROb09mQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmNhbGNHcmlkID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB2YXIgbyA9IDAsIHMgPSAwO1xuICAgICAgICAgICAgICBvID0gcGFyc2VJbnQoTWF0aC5jZWlsKCh0LmdldFJpZ2h0KCkgLSB0LmdldExlZnQoKSkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSksIHMgPSBwYXJzZUludChNYXRoLmNlaWwoKHQuZ2V0Qm90dG9tKCkgLSB0LmdldFRvcCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IG5ldyBBcnJheShvKSwgZiA9IDA7IGYgPCBvOyBmKyspXG4gICAgICAgICAgICAgICAgY1tmXSA9IG5ldyBBcnJheShzKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDA7IGYgPCBvOyBmKyspXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgVCA9IDA7IFQgPCBzOyBUKyspXG4gICAgICAgICAgICAgICAgICBjW2ZdW1RdID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfSwgaS5wcm90b3R5cGUuYWRkTm9kZVRvR3JpZCA9IGZ1bmN0aW9uKHQsIG8sIHMpIHtcbiAgICAgICAgICAgICAgdmFyIGMgPSAwLCBmID0gMCwgVCA9IDAsIGQgPSAwO1xuICAgICAgICAgICAgICBjID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodC5nZXRSZWN0KCkueCAtIG8pIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpLCBmID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodC5nZXRSZWN0KCkud2lkdGggKyB0LmdldFJlY3QoKS54IC0gbykgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSksIFQgPSBwYXJzZUludChNYXRoLmZsb29yKCh0LmdldFJlY3QoKS55IC0gcykgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSksIGQgPSBwYXJzZUludChNYXRoLmZsb29yKCh0LmdldFJlY3QoKS5oZWlnaHQgKyB0LmdldFJlY3QoKS55IC0gcykgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gICAgICAgICAgICAgIGZvciAodmFyIHYgPSBjOyB2IDw9IGY7IHYrKylcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBMID0gVDsgTCA8PSBkOyBMKyspXG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbdl1bTF0ucHVzaCh0KSwgdC5zZXRHcmlkQ29vcmRpbmF0ZXMoYywgZiwgVCwgZCk7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS51cGRhdGVHcmlkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciB0LCBvLCBzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICAgICAgICAgICAgICBmb3IgKHRoaXMuZ3JpZCA9IHRoaXMuY2FsY0dyaWQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKSwgdCA9IDA7IHQgPCBzLmxlbmd0aDsgdCsrKVxuICAgICAgICAgICAgICAgIG8gPSBzW3RdLCB0aGlzLmFkZE5vZGVUb0dyaWQobywgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldExlZnQoKSwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldFRvcCgpKTtcbiAgICAgICAgICAgIH0sIGkucHJvdG90eXBlLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZSA9IGZ1bmN0aW9uKHQsIG8sIHMsIGMpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgYS5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9PSAxICYmIHMgfHwgYykge1xuICAgICAgICAgICAgICAgIHZhciBmID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICB0LnN1cnJvdW5kaW5nID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgVCwgZCA9IHRoaXMuZ3JpZCwgdiA9IHQuc3RhcnRYIC0gMTsgdiA8IHQuZmluaXNoWCArIDI7IHYrKylcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIEwgPSB0LnN0YXJ0WSAtIDE7IEwgPCB0LmZpbmlzaFkgKyAyOyBMKyspXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHYgPCAwIHx8IEwgPCAwIHx8IHYgPj0gZC5sZW5ndGggfHwgTCA+PSBkWzBdLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiID0gMDsgYiA8IGRbdl1bTF0ubGVuZ3RoOyBiKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVCA9IGRbdl1bTF1bYl0sICEodC5nZXRPd25lcigpICE9IFQuZ2V0T3duZXIoKSB8fCB0ID09IFQpICYmICFvLmhhcyhUKSAmJiAhZi5oYXMoVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEMgPSBNYXRoLmFicyh0LmdldENlbnRlclgoKSAtIFQuZ2V0Q2VudGVyWCgpKSAtICh0LmdldFdpZHRoKCkgLyAyICsgVC5nZXRXaWR0aCgpIC8gMiksIEcgPSBNYXRoLmFicyh0LmdldENlbnRlclkoKSAtIFQuZ2V0Q2VudGVyWSgpKSAtICh0LmdldEhlaWdodCgpIC8gMiArIFQuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQyA8PSB0aGlzLnJlcHVsc2lvblJhbmdlICYmIEcgPD0gdGhpcy5yZXB1bHNpb25SYW5nZSAmJiBmLmFkZChUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuc3Vycm91bmRpbmcgPSBbXS5jb25jYXQodShmKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZm9yICh2ID0gMDsgdiA8IHQuc3Vycm91bmRpbmcubGVuZ3RoOyB2KyspXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2UodCwgdC5zdXJyb3VuZGluZ1t2XSk7XG4gICAgICAgICAgICB9LCBpLnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uUmFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9LCBBLmV4cG9ydHMgPSBpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDE5ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgdmFyIHUgPSBOKDEpLCBoID0gTig0KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGEociwgbCwgaSkge1xuICAgICAgICAgICAgICB1LmNhbGwodGhpcywgciwgbCwgaSksIHRoaXMuaWRlYWxMZW5ndGggPSBoLkRFRkFVTFRfRURHRV9MRU5HVEgsIHRoaXMuZWRnZUVsYXN0aWNpdHkgPSBoLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHUucHJvdG90eXBlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGUgaW4gdSlcbiAgICAgICAgICAgICAgYVtlXSA9IHVbZV07XG4gICAgICAgICAgICBBLmV4cG9ydHMgPSBhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDIwICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgdmFyIHUgPSBOKDMpLCBoID0gTig0KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGEociwgbCwgaSwgZykge1xuICAgICAgICAgICAgICB1LmNhbGwodGhpcywgciwgbCwgaSwgZyksIHRoaXMubm9kZVJlcHVsc2lvbiA9IGguREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEgsIHRoaXMuc3ByaW5nRm9yY2VYID0gMCwgdGhpcy5zcHJpbmdGb3JjZVkgPSAwLCB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDAsIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMCwgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDAsIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwLCB0aGlzLmRpc3BsYWNlbWVudFggPSAwLCB0aGlzLmRpc3BsYWNlbWVudFkgPSAwLCB0aGlzLnN0YXJ0WCA9IDAsIHRoaXMuZmluaXNoWCA9IDAsIHRoaXMuc3RhcnRZID0gMCwgdGhpcy5maW5pc2hZID0gMCwgdGhpcy5zdXJyb3VuZGluZyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHUucHJvdG90eXBlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGUgaW4gdSlcbiAgICAgICAgICAgICAgYVtlXSA9IHVbZV07XG4gICAgICAgICAgICBhLnByb3RvdHlwZS5zZXRHcmlkQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbihyLCBsLCBpLCBnKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhcnRYID0gciwgdGhpcy5maW5pc2hYID0gbCwgdGhpcy5zdGFydFkgPSBpLCB0aGlzLmZpbmlzaFkgPSBnO1xuICAgICAgICAgICAgfSwgQS5leHBvcnRzID0gYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAyMSAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKEEsIFAsIE4pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHUoaCwgYSkge1xuICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMCwgdGhpcy5oZWlnaHQgPSAwLCBoICE9PSBudWxsICYmIGEgIT09IG51bGwgJiYgKHRoaXMuaGVpZ2h0ID0gYSwgdGhpcy53aWR0aCA9IGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IGg7XG4gICAgICAgICAgICB9LCB1LnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgfSwgdS5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IGg7XG4gICAgICAgICAgICB9LCBBLmV4cG9ydHMgPSB1O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDIyICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgdmFyIHUgPSBOKDE0KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGgoKSB7XG4gICAgICAgICAgICAgIHRoaXMubWFwID0ge30sIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgICB2YXIgciA9IHUuY3JlYXRlSUQoYSk7XG4gICAgICAgICAgICAgIHRoaXMuY29udGFpbnMocikgfHwgKHRoaXMubWFwW3JdID0gZSwgdGhpcy5rZXlzLnB1c2goYSkpO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1LmNyZWF0ZUlEKGEpLCB0aGlzLm1hcFthXSAhPSBudWxsO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB2YXIgZSA9IHUuY3JlYXRlSUQoYSk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcFtlXTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmtleVNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5rZXlzO1xuICAgICAgICAgICAgfSwgQS5leHBvcnRzID0gaDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAyMyAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKEEsIFAsIE4pIHtcbiAgICAgICAgICAgIHZhciB1ID0gTigxNCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBoKCkge1xuICAgICAgICAgICAgICB0aGlzLnNldCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICB2YXIgZSA9IHUuY3JlYXRlSUQoYSk7XG4gICAgICAgICAgICAgIHRoaXMuY29udGFpbnMoZSkgfHwgKHRoaXMuc2V0W2VdID0gYSk7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNldFt1LmNyZWF0ZUlEKGEpXTtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0ID0ge307XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0W3UuY3JlYXRlSUQoYSldID09IGE7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0KS5sZW5ndGg7XG4gICAgICAgICAgICB9LCBoLnByb3RvdHlwZS5hZGRBbGxUbyA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IE9iamVjdC5rZXlzKHRoaXMuc2V0KSwgciA9IGUubGVuZ3RoLCBsID0gMDsgbCA8IHI7IGwrKylcbiAgICAgICAgICAgICAgICBhLnB1c2godGhpcy5zZXRbZVtsXV0pO1xuICAgICAgICAgICAgfSwgaC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbiAgICAgICAgICAgIH0sIGgucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IGEubGVuZ3RoLCByID0gMDsgciA8IGU7IHIrKykge1xuICAgICAgICAgICAgICAgIHZhciBsID0gYVtyXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgQS5leHBvcnRzID0gaDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvKiAyNCAqL1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgKGZ1bmN0aW9uKEEsIFAsIE4pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHUoKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1Lm11bHRNYXQgPSBmdW5jdGlvbihoLCBhKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGUgPSBbXSwgciA9IDA7IHIgPCBoLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgICAgZVtyXSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgYVswXS5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgICAgICAgZVtyXVtsXSA9IDA7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhbMF0ubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGVbcl1bbF0gKz0gaFtyXVtpXSAqIGFbaV1bbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfSwgdS50cmFuc3Bvc2UgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGEgPSBbXSwgZSA9IDA7IGUgPCBoWzBdLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgYVtlXSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgaC5sZW5ndGg7IHIrKylcbiAgICAgICAgICAgICAgICAgIGFbZV1bcl0gPSBoW3JdW2VdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgfSwgdS5tdWx0Q29ucyA9IGZ1bmN0aW9uKGgsIGEpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCByID0gMDsgciA8IGgubGVuZ3RoOyByKyspXG4gICAgICAgICAgICAgICAgZVtyXSA9IGhbcl0gKiBhO1xuICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH0sIHUubWludXNPcCA9IGZ1bmN0aW9uKGgsIGEpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCByID0gMDsgciA8IGgubGVuZ3RoOyByKyspXG4gICAgICAgICAgICAgICAgZVtyXSA9IGhbcl0gLSBhW3JdO1xuICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH0sIHUuZG90UHJvZHVjdCA9IGZ1bmN0aW9uKGgsIGEpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IDAsIHIgPSAwOyByIDwgaC5sZW5ndGg7IHIrKylcbiAgICAgICAgICAgICAgICBlICs9IGhbcl0gKiBhW3JdO1xuICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH0sIHUubWFnID0gZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZG90UHJvZHVjdChoLCBoKSk7XG4gICAgICAgICAgICB9LCB1Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBlID0gdGhpcy5tYWcoaCksIHIgPSAwOyByIDwgaC5sZW5ndGg7IHIrKylcbiAgICAgICAgICAgICAgICBhW3JdID0gaFtyXSAvIGU7XG4gICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgfSwgdS5tdWx0R2FtbWEgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGEgPSBbXSwgZSA9IDAsIHIgPSAwOyByIDwgaC5sZW5ndGg7IHIrKylcbiAgICAgICAgICAgICAgICBlICs9IGhbcl07XG4gICAgICAgICAgICAgIGUgKj0gLTEgLyBoLmxlbmd0aDtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBoLmxlbmd0aDsgbCsrKVxuICAgICAgICAgICAgICAgIGFbbF0gPSBlICsgaFtsXTtcbiAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICB9LCB1Lm11bHRMID0gZnVuY3Rpb24oaCwgYSwgZSkge1xuICAgICAgICAgICAgICBmb3IgKHZhciByID0gW10sIGwgPSBbXSwgaSA9IFtdLCBnID0gMDsgZyA8IGFbMF0ubGVuZ3RoOyBnKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMCwgbyA9IDA7IG8gPCBhLmxlbmd0aDsgbysrKVxuICAgICAgICAgICAgICAgICAgdCArPSAtMC41ICogYVtvXVtnXSAqIGhbb107XG4gICAgICAgICAgICAgICAgbFtnXSA9IHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBlLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDAsIGYgPSAwOyBmIDwgZS5sZW5ndGg7IGYrKylcbiAgICAgICAgICAgICAgICAgIGMgKz0gZVtzXVtmXSAqIGxbZl07XG4gICAgICAgICAgICAgICAgaVtzXSA9IGM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZm9yICh2YXIgVCA9IDA7IFQgPCBhLmxlbmd0aDsgVCsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZCA9IDAsIHYgPSAwOyB2IDwgYVswXS5sZW5ndGg7IHYrKylcbiAgICAgICAgICAgICAgICAgIGQgKz0gYVtUXVt2XSAqIGlbdl07XG4gICAgICAgICAgICAgICAgcltUXSA9IGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9LCBBLmV4cG9ydHMgPSB1O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8qIDI1ICovXG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAoZnVuY3Rpb24oQSwgUCwgTikge1xuICAgICAgICAgICAgdmFyIHUgPSAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmdW5jdGlvbiByKGwsIGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBnID0gMDsgZyA8IGkubGVuZ3RoOyBnKyspIHtcbiAgICAgICAgICAgICAgICAgIHZhciB0ID0gaVtnXTtcbiAgICAgICAgICAgICAgICAgIHQuZW51bWVyYWJsZSA9IHQuZW51bWVyYWJsZSB8fCAhMSwgdC5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIHQgJiYgKHQud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsLCB0LmtleSwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihsLCBpLCBnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgJiYgcihsLnByb3RvdHlwZSwgaSksIGcgJiYgcihsLCBnKSwgbDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBoKHIsIGwpIHtcbiAgICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mIGwpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYSA9IE4oMTEpLCBlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmdW5jdGlvbiByKGwsIGkpIHtcbiAgICAgICAgICAgICAgICBoKHRoaXMsIHIpLCAoaSAhPT0gbnVsbCB8fCBpICE9PSB2b2lkIDApICYmICh0aGlzLmNvbXBhcmVGdW5jdGlvbiA9IHRoaXMuX2RlZmF1bHRDb21wYXJlRnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgIHZhciBnID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGwgaW5zdGFuY2VvZiBhID8gZyA9IGwuc2l6ZSgpIDogZyA9IGwubGVuZ3RoLCB0aGlzLl9xdWlja3NvcnQobCwgMCwgZyAtIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB1KHIsIFt7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9xdWlja3NvcnRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oaSwgZywgdCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGcgPCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gdGhpcy5fcGFydGl0aW9uKGksIGcsIHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xdWlja3NvcnQoaSwgZywgbyksIHRoaXMuX3F1aWNrc29ydChpLCBvICsgMSwgdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9wYXJ0aXRpb25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oaSwgZywgdCkge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IHRoaXMuX2dldChpLCBnKSwgcyA9IGcsIGMgPSB0OyA7ICkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgdGhpcy5jb21wYXJlRnVuY3Rpb24obywgdGhpcy5fZ2V0KGksIGMpKTsgKVxuICAgICAgICAgICAgICAgICAgICAgIGMtLTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IHRoaXMuY29tcGFyZUZ1bmN0aW9uKHRoaXMuX2dldChpLCBzKSwgbyk7IClcbiAgICAgICAgICAgICAgICAgICAgICBzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzIDwgYylcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zd2FwKGksIHMsIGMpLCBzKyssIGMtLTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gYztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2dldFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihpLCBnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaSBpbnN0YW5jZW9mIGEgPyBpLmdldF9vYmplY3RfYXQoZykgOiBpW2ddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfc2V0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGksIGcsIHQpIHtcbiAgICAgICAgICAgICAgICAgIGkgaW5zdGFuY2VvZiBhID8gaS5zZXRfb2JqZWN0X2F0KGcsIHQpIDogaVtnXSA9IHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9zd2FwXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGksIGcsIHQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBvID0gdGhpcy5fZ2V0KGksIGcpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0KGksIGcsIHRoaXMuX2dldChpLCB0KSksIHRoaXMuX3NldChpLCB0LCBvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2RlZmF1bHRDb21wYXJlRnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oaSwgZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGcgPiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfV0pLCByO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIEEuZXhwb3J0cyA9IGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMjYgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1KCkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdS5zdmQgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICAgIHRoaXMuVSA9IG51bGwsIHRoaXMuViA9IG51bGwsIHRoaXMucyA9IG51bGwsIHRoaXMubSA9IDAsIHRoaXMubiA9IDAsIHRoaXMubSA9IGgubGVuZ3RoLCB0aGlzLm4gPSBoWzBdLmxlbmd0aDtcbiAgICAgICAgICAgICAgdmFyIGEgPSBNYXRoLm1pbih0aGlzLm0sIHRoaXMubik7XG4gICAgICAgICAgICAgIHRoaXMucyA9IChmdW5jdGlvbihUdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIEN0ID0gW107IFR0LS0gPiAwOyApXG4gICAgICAgICAgICAgICAgICBDdC5wdXNoKDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBDdDtcbiAgICAgICAgICAgICAgfSkoTWF0aC5taW4odGhpcy5tICsgMSwgdGhpcy5uKSksIHRoaXMuVSA9IChmdW5jdGlvbihUdCkge1xuICAgICAgICAgICAgICAgIHZhciBDdCA9IGZ1bmN0aW9uICR0KGJ0KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYnQubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgenQgPSBbXSwgU3QgPSAwOyBTdCA8IGJ0WzBdOyBTdCsrKVxuICAgICAgICAgICAgICAgICAgICB6dC5wdXNoKCR0KGJ0LnNsaWNlKDEpKSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4genQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ3QoVHQpO1xuICAgICAgICAgICAgICB9KShbdGhpcy5tLCBhXSksIHRoaXMuViA9IChmdW5jdGlvbihUdCkge1xuICAgICAgICAgICAgICAgIHZhciBDdCA9IGZ1bmN0aW9uICR0KGJ0KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYnQubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgenQgPSBbXSwgU3QgPSAwOyBTdCA8IGJ0WzBdOyBTdCsrKVxuICAgICAgICAgICAgICAgICAgICB6dC5wdXNoKCR0KGJ0LnNsaWNlKDEpKSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4genQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ3QoVHQpO1xuICAgICAgICAgICAgICB9KShbdGhpcy5uLCB0aGlzLm5dKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IChmdW5jdGlvbihUdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIEN0ID0gW107IFR0LS0gPiAwOyApXG4gICAgICAgICAgICAgICAgICBDdC5wdXNoKDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBDdDtcbiAgICAgICAgICAgICAgfSkodGhpcy5uKSwgciA9IChmdW5jdGlvbihUdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIEN0ID0gW107IFR0LS0gPiAwOyApXG4gICAgICAgICAgICAgICAgICBDdC5wdXNoKDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBDdDtcbiAgICAgICAgICAgICAgfSkodGhpcy5tKSwgbCA9ICEwLCBpID0gTWF0aC5taW4odGhpcy5tIC0gMSwgdGhpcy5uKSwgZyA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMubiAtIDIsIHRoaXMubSkpLCB0ID0gMDsgdCA8IE1hdGgubWF4KGksIGcpOyB0KyspIHtcbiAgICAgICAgICAgICAgICBpZiAodCA8IGkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc1t0XSA9IDA7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gdDsgbyA8IHRoaXMubTsgbysrKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNbdF0gPSB1Lmh5cG90KHRoaXMuc1t0XSwgaFtvXVt0XSk7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zW3RdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGhbdF1bdF0gPCAwICYmICh0aGlzLnNbdF0gPSAtdGhpcy5zW3RdKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IHQ7IHMgPCB0aGlzLm07IHMrKylcbiAgICAgICAgICAgICAgICAgICAgICBoW3NdW3RdIC89IHRoaXMuc1t0XTtcbiAgICAgICAgICAgICAgICAgICAgaFt0XVt0XSArPSAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhpcy5zW3RdID0gLXRoaXMuc1t0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IHQgKyAxOyBjIDwgdGhpcy5uOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmICgvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKFR0LCBDdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVHQgJiYgQ3Q7XG4gICAgICAgICAgICAgICAgICB9KSh0IDwgaSwgdGhpcy5zW3RdICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMCwgVCA9IHQ7IFQgPCB0aGlzLm07IFQrKylcbiAgICAgICAgICAgICAgICAgICAgICBmICs9IGhbVF1bdF0gKiBoW1RdW2NdO1xuICAgICAgICAgICAgICAgICAgICBmID0gLWYgLyBoW3RdW3RdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkID0gdDsgZCA8IHRoaXMubTsgZCsrKVxuICAgICAgICAgICAgICAgICAgICAgIGhbZF1bY10gKz0gZiAqIGhbZF1bdF07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlW2NdID0gaFt0XVtjXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKC8qIEBfX1BVUkVfXyAqLyAoZnVuY3Rpb24oVHQsIEN0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ3Q7XG4gICAgICAgICAgICAgICAgfSkobCwgdCA8IGkpKVxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdiA9IHQ7IHYgPCB0aGlzLm07IHYrKylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VW3ZdW3RdID0gaFt2XVt0XTtcbiAgICAgICAgICAgICAgICBpZiAodCA8IGcpIHtcbiAgICAgICAgICAgICAgICAgIGVbdF0gPSAwO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgTCA9IHQgKyAxOyBMIDwgdGhpcy5uOyBMKyspXG4gICAgICAgICAgICAgICAgICAgIGVbdF0gPSB1Lmh5cG90KGVbdF0sIGVbTF0pO1xuICAgICAgICAgICAgICAgICAgaWYgKGVbdF0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZVt0ICsgMV0gPCAwICYmIChlW3RdID0gLWVbdF0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiID0gdCArIDE7IGIgPCB0aGlzLm47IGIrKylcbiAgICAgICAgICAgICAgICAgICAgICBlW2JdIC89IGVbdF07XG4gICAgICAgICAgICAgICAgICAgIGVbdCArIDFdICs9IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoZVt0XSA9IC1lW3RdLCAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKFR0LCBDdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVHQgJiYgQ3Q7XG4gICAgICAgICAgICAgICAgICB9KSh0ICsgMSA8IHRoaXMubSwgZVt0XSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgQyA9IHQgKyAxOyBDIDwgdGhpcy5tOyBDKyspXG4gICAgICAgICAgICAgICAgICAgICAgcltDXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEcgPSB0ICsgMTsgRyA8IHRoaXMubjsgRysrKVxuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFogPSB0ICsgMTsgWiA8IHRoaXMubTsgWisrKVxuICAgICAgICAgICAgICAgICAgICAgICAgcltaXSArPSBlW0ddICogaFtaXVtHXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgWSA9IHQgKyAxOyBZIDwgdGhpcy5uOyBZKyspXG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgSyA9IC1lW1ldIC8gZVt0ICsgMV0sIE8gPSB0ICsgMTsgTyA8IHRoaXMubTsgTysrKVxuICAgICAgICAgICAgICAgICAgICAgICAgaFtPXVtZXSArPSBLICogcltPXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGl0ID0gdCArIDE7IGl0IDwgdGhpcy5uOyBpdCsrKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlZbaXRdW3RdID0gZVtpdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBuID0gTWF0aC5taW4odGhpcy5uLCB0aGlzLm0gKyAxKTtcbiAgICAgICAgICAgICAgaSA8IHRoaXMubiAmJiAodGhpcy5zW2ldID0gaFtpXVtpXSksIHRoaXMubSA8IG4gJiYgKHRoaXMuc1tuIC0gMV0gPSAwKSwgZyArIDEgPCBuICYmIChlW2ddID0gaFtnXVtuIC0gMV0pLCBlW24gLSAxXSA9IDA7XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtID0gaTsgbSA8IGE7IG0rKykge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCB0aGlzLm07IHArKylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VW3BdW21dID0gMDtcbiAgICAgICAgICAgICAgICAgIHRoaXMuVVttXVttXSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIEUgPSBpIC0gMTsgRSA+PSAwOyBFLS0pXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zW0VdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSBFICsgMTsgeSA8IGE7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFIgPSAwLCBNID0gRTsgTSA8IHRoaXMubTsgTSsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgUiArPSB0aGlzLlVbTV1bRV0gKiB0aGlzLlVbTV1beV07XG4gICAgICAgICAgICAgICAgICAgICAgUiA9IC1SIC8gdGhpcy5VW0VdW0VdO1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFMgPSBFOyBTIDwgdGhpcy5tOyBTKyspXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVbU11beV0gKz0gUiAqIHRoaXMuVVtTXVtFXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBXID0gRTsgVyA8IHRoaXMubTsgVysrKVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVVtXXVtFXSA9IC10aGlzLlVbV11bRV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVVtFXVtFXSA9IDEgKyB0aGlzLlVbRV1bRV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEQgPSAwOyBEIDwgRSAtIDE7IEQrKylcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVbRF1bRV0gPSAwO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDA7IHEgPCB0aGlzLm07IHErKylcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVbcV1bRV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlVbRV1bRV0gPSAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZvciAodmFyIFYgPSB0aGlzLm4gLSAxOyBWID49IDA7IFYtLSkge1xuICAgICAgICAgICAgICAgIGlmICgvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKFR0LCBDdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFR0ICYmIEN0O1xuICAgICAgICAgICAgICAgIH0pKFYgPCBnLCBlW1ZdICE9PSAwKSlcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIFggPSBWICsgMTsgWCA8IGE7IFgrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBldCA9IDAsIHogPSBWICsgMTsgeiA8IHRoaXMubjsgeisrKVxuICAgICAgICAgICAgICAgICAgICAgIGV0ICs9IHRoaXMuVlt6XVtWXSAqIHRoaXMuVlt6XVtYXTtcbiAgICAgICAgICAgICAgICAgICAgZXQgPSAtZXQgLyB0aGlzLlZbViArIDFdW1ZdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gViArIDE7IHcgPCB0aGlzLm47IHcrKylcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLlZbd11bWF0gKz0gZXQgKiB0aGlzLlZbd11bVl07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgSCA9IDA7IEggPCB0aGlzLm47IEgrKylcbiAgICAgICAgICAgICAgICAgIHRoaXMuVltIXVtWXSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5WW1ZdW1ZdID0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKHZhciAkID0gbiAtIDEsIF8gPSBNYXRoLnBvdygyLCAtNTIpLCBodCA9IE1hdGgucG93KDIsIC05NjYpOyBuID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgdmFyIFEgPSB2b2lkIDAsIEl0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGZvciAoUSA9IG4gLSAyOyBRID49IC0xICYmIFEgIT09IC0xOyBRLS0pXG4gICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZVtRXSkgPD0gaHQgKyBfICogKE1hdGguYWJzKHRoaXMuc1tRXSkgKyBNYXRoLmFicyh0aGlzLnNbUSArIDFdKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZVtRXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChRID09PSBuIC0gMilcbiAgICAgICAgICAgICAgICAgIEl0ID0gNDtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBOdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgIGZvciAoTnQgPSBuIC0gMTsgTnQgPj0gUSAmJiBOdCAhPT0gUTsgTnQtLSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdnQgPSAoTnQgIT09IG4gPyBNYXRoLmFicyhlW050XSkgOiAwKSArIChOdCAhPT0gUSArIDEgPyBNYXRoLmFicyhlW050IC0gMV0pIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNbTnRdKSA8PSBodCArIF8gKiB2dCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc1tOdF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBOdCA9PT0gUSA/IEl0ID0gMyA6IE50ID09PSBuIC0gMSA/IEl0ID0gMSA6IChJdCA9IDIsIFEgPSBOdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoUSsrLCBJdCkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHJ0ID0gZVtuIC0gMl07XG4gICAgICAgICAgICAgICAgICAgICAgZVtuIC0gMl0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGd0ID0gbiAtIDI7IGd0ID49IFE7IGd0LS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdCA9IHUuaHlwb3QodGhpcy5zW2d0XSwgcnQpLCBBdCA9IHRoaXMuc1tndF0gLyBtdCwgT3QgPSBydCAvIG10O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zW2d0XSA9IG10LCBndCAhPT0gUSAmJiAocnQgPSAtT3QgKiBlW2d0IC0gMV0sIGVbZ3QgLSAxXSA9IEF0ICogZVtndCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEV0ID0gMDsgRXQgPCB0aGlzLm47IEV0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG10ID0gQXQgKiB0aGlzLlZbRXRdW2d0XSArIE90ICogdGhpcy5WW0V0XVtuIC0gMV0sIHRoaXMuVltFdF1bbiAtIDFdID0gLU90ICogdGhpcy5WW0V0XVtndF0gKyBBdCAqIHRoaXMuVltFdF1bbiAtIDFdLCB0aGlzLlZbRXRdW2d0XSA9IG10O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBEdCA9IGVbUSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgIGVbUSAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBSdCA9IFE7IFJ0IDwgbjsgUnQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEh0ID0gdS5oeXBvdCh0aGlzLnNbUnRdLCBEdCksIFV0ID0gdGhpcy5zW1J0XSAvIEh0LCBQdCA9IER0IC8gSHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNbUnRdID0gSHQsIER0ID0gLVB0ICogZVtSdF0sIGVbUnRdID0gVXQgKiBlW1J0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEZ0ID0gMDsgRnQgPCB0aGlzLm07IEZ0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEh0ID0gVXQgKiB0aGlzLlVbRnRdW1J0XSArIFB0ICogdGhpcy5VW0Z0XVtRIC0gMV0sIHRoaXMuVVtGdF1bUSAtIDFdID0gLVB0ICogdGhpcy5VW0Z0XVtSdF0gKyBVdCAqIHRoaXMuVVtGdF1bUSAtIDFdLCB0aGlzLlVbRnRdW1J0XSA9IEh0O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBZdCA9IE1hdGgubWF4KE1hdGgubWF4KE1hdGgubWF4KE1hdGgubWF4KE1hdGguYWJzKHRoaXMuc1tuIC0gMV0pLCBNYXRoLmFicyh0aGlzLnNbbiAtIDJdKSksIE1hdGguYWJzKGVbbiAtIDJdKSksIE1hdGguYWJzKHRoaXMuc1tRXSkpLCBNYXRoLmFicyhlW1FdKSksIFZ0ID0gdGhpcy5zW24gLSAxXSAvIFl0LCBGID0gdGhpcy5zW24gLSAyXSAvIFl0LCBVID0gZVtuIC0gMl0gLyBZdCwgQiA9IHRoaXMuc1tRXSAvIFl0LCBKID0gZVtRXSAvIFl0LCBrID0gKChGICsgVnQpICogKEYgLSBWdCkgKyBVICogVSkgLyAyLCBhdCA9IFZ0ICogVSAqIChWdCAqIFUpLCBjdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIChmdW5jdGlvbihUdCwgQ3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBUdCB8fCBDdDtcbiAgICAgICAgICAgICAgICAgICAgICB9KShrICE9PSAwLCBhdCAhPT0gMCkgJiYgKGN0ID0gTWF0aC5zcXJ0KGsgKiBrICsgYXQpLCBrIDwgMCAmJiAoY3QgPSAtY3QpLCBjdCA9IGF0IC8gKGsgKyBjdCkpO1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG50ID0gKEIgKyBWdCkgKiAoQiAtIFZ0KSArIGN0LCB0dCA9IEIgKiBKLCBqID0gUTsgaiA8IG4gLSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1dCA9IHUuaHlwb3QobnQsIHR0KSwgTXQgPSBudCAvIHV0LCBwdCA9IHR0IC8gdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBqICE9PSBRICYmIChlW2ogLSAxXSA9IHV0KSwgbnQgPSBNdCAqIHRoaXMuc1tqXSArIHB0ICogZVtqXSwgZVtqXSA9IE10ICogZVtqXSAtIHB0ICogdGhpcy5zW2pdLCB0dCA9IHB0ICogdGhpcy5zW2ogKyAxXSwgdGhpcy5zW2ogKyAxXSA9IE10ICogdGhpcy5zW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHh0ID0gMDsgeHQgPCB0aGlzLm47IHh0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHV0ID0gTXQgKiB0aGlzLlZbeHRdW2pdICsgcHQgKiB0aGlzLlZbeHRdW2ogKyAxXSwgdGhpcy5WW3h0XVtqICsgMV0gPSAtcHQgKiB0aGlzLlZbeHRdW2pdICsgTXQgKiB0aGlzLlZbeHRdW2ogKyAxXSwgdGhpcy5WW3h0XVtqXSA9IHV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0ID0gdS5oeXBvdChudCwgdHQpLCBNdCA9IG50IC8gdXQsIHB0ID0gdHQgLyB1dCwgdGhpcy5zW2pdID0gdXQsIG50ID0gTXQgKiBlW2pdICsgcHQgKiB0aGlzLnNbaiArIDFdLCB0aGlzLnNbaiArIDFdID0gLXB0ICogZVtqXSArIE10ICogdGhpcy5zW2ogKyAxXSwgdHQgPSBwdCAqIGVbaiArIDFdLCBlW2ogKyAxXSA9IE10ICogZVtqICsgMV0sIGogPCB0aGlzLm0gLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBsdCA9IDA7IGx0IDwgdGhpcy5tOyBsdCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0ID0gTXQgKiB0aGlzLlVbbHRdW2pdICsgcHQgKiB0aGlzLlVbbHRdW2ogKyAxXSwgdGhpcy5VW2x0XVtqICsgMV0gPSAtcHQgKiB0aGlzLlVbbHRdW2pdICsgTXQgKiB0aGlzLlVbbHRdW2ogKyAxXSwgdGhpcy5VW2x0XVtqXSA9IHV0O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlW24gLSAyXSA9IG50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc1tRXSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNbUV0gPSB0aGlzLnNbUV0gPCAwID8gLXRoaXMuc1tRXSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBvdCA9IDA7IG90IDw9ICQ7IG90KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVltvdF1bUV0gPSAtdGhpcy5WW290XVtRXTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICg7IFEgPCAkICYmICEodGhpcy5zW1FdID49IHRoaXMuc1tRICsgMV0pOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBMdCA9IHRoaXMuc1tRXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNbUV0gPSB0aGlzLnNbUSArIDFdLCB0aGlzLnNbUSArIDFdID0gTHQsIFEgPCB0aGlzLm4gLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmdCA9IDA7IGZ0IDwgdGhpcy5uOyBmdCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx0ID0gdGhpcy5WW2Z0XVtRICsgMV0sIHRoaXMuVltmdF1bUSArIDFdID0gdGhpcy5WW2Z0XVtRXSwgdGhpcy5WW2Z0XVtRXSA9IEx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFEgPCB0aGlzLm0gLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzdCA9IDA7IHN0IDwgdGhpcy5tOyBzdCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx0ID0gdGhpcy5VW3N0XVtRICsgMV0sIHRoaXMuVVtzdF1bUSArIDFdID0gdGhpcy5VW3N0XVtRXSwgdGhpcy5VW3N0XVtRXSA9IEx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgUSsrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBuLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBYdCA9IHsgVTogdGhpcy5VLCBWOiB0aGlzLlYsIFM6IHRoaXMucyB9O1xuICAgICAgICAgICAgICByZXR1cm4gWHQ7XG4gICAgICAgICAgICB9LCB1Lmh5cG90ID0gZnVuY3Rpb24oaCwgYSkge1xuICAgICAgICAgICAgICB2YXIgZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKGgpID4gTWF0aC5hYnMoYSkgPyAoZSA9IGEgLyBoLCBlID0gTWF0aC5hYnMoaCkgKiBNYXRoLnNxcnQoMSArIGUgKiBlKSkgOiBhICE9IDAgPyAoZSA9IGggLyBhLCBlID0gTWF0aC5hYnMoYSkgKiBNYXRoLnNxcnQoMSArIGUgKiBlKSkgOiBlID0gMCwgZTtcbiAgICAgICAgICAgIH0sIEEuZXhwb3J0cyA9IHU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMjcgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICB2YXIgdSA9IC8qIEBfX1BVUkVfXyAqLyAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGUociwgbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgdmFyIGcgPSBsW2ldO1xuICAgICAgICAgICAgICAgICAgZy5lbnVtZXJhYmxlID0gZy5lbnVtZXJhYmxlIHx8ICExLCBnLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gZyAmJiAoZy53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsIGcua2V5LCBnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIsIGwsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbCAmJiBlKHIucHJvdG90eXBlLCBsKSwgaSAmJiBlKHIsIGkpLCByO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGgoZSwgcikge1xuICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgcikpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBlKHIsIGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzJdIDogMSwgZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzNdIDogLTEsIHQgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1s0XSA6IC0xO1xuICAgICAgICAgICAgICAgIGgodGhpcywgZSksIHRoaXMuc2VxdWVuY2UxID0gciwgdGhpcy5zZXF1ZW5jZTIgPSBsLCB0aGlzLm1hdGNoX3Njb3JlID0gaSwgdGhpcy5taXNtYXRjaF9wZW5hbHR5ID0gZywgdGhpcy5nYXBfcGVuYWx0eSA9IHQsIHRoaXMuaU1heCA9IHIubGVuZ3RoICsgMSwgdGhpcy5qTWF4ID0gbC5sZW5ndGggKyAxLCB0aGlzLmdyaWQgPSBuZXcgQXJyYXkodGhpcy5pTWF4KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHRoaXMuaU1heDsgbysrKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbb10gPSBuZXcgQXJyYXkodGhpcy5qTWF4KTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgdGhpcy5qTWF4OyBzKyspXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtvXVtzXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudHJhY2ViYWNrR3JpZCA9IG5ldyBBcnJheSh0aGlzLmlNYXgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgdGhpcy5pTWF4OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2ViYWNrR3JpZFtjXSA9IG5ldyBBcnJheSh0aGlzLmpNYXgpO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDA7IGYgPCB0aGlzLmpNYXg7IGYrKylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFjZWJhY2tHcmlkW2NdW2ZdID0gW251bGwsIG51bGwsIG51bGxdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFsaWdubWVudHMgPSBbXSwgdGhpcy5zY29yZSA9IC0xLCB0aGlzLmNvbXB1dGVHcmlkcygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB1KGUsIFt7XG4gICAgICAgICAgICAgICAga2V5OiBcImdldFNjb3JlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImdldEFsaWdubWVudHNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGlnbm1lbnRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYWluIGR5bmFtaWMgcHJvZ3JhbW1pbmcgcHJvY2VkdXJlXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29tcHV0ZUdyaWRzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IDE7IGwgPCB0aGlzLmpNYXg7IGwrKylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkWzBdW2xdID0gdGhpcy5ncmlkWzBdW2wgLSAxXSArIHRoaXMuZ2FwX3BlbmFsdHksIHRoaXMudHJhY2ViYWNrR3JpZFswXVtsXSA9IFshMSwgITEsICEwXTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5pTWF4OyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtpXVswXSA9IHRoaXMuZ3JpZFtpIC0gMV1bMF0gKyB0aGlzLmdhcF9wZW5hbHR5LCB0aGlzLnRyYWNlYmFja0dyaWRbaV1bMF0gPSBbITEsICEwLCAhMV07XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBnID0gMTsgZyA8IHRoaXMuaU1heDsgZysrKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMTsgdCA8IHRoaXMuak1heDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZTFbZyAtIDFdID09PSB0aGlzLnNlcXVlbmNlMlt0IC0gMV0gPyBvID0gdGhpcy5ncmlkW2cgLSAxXVt0IC0gMV0gKyB0aGlzLm1hdGNoX3Njb3JlIDogbyA9IHRoaXMuZ3JpZFtnIC0gMV1bdCAtIDFdICsgdGhpcy5taXNtYXRjaF9wZW5hbHR5O1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdGhpcy5ncmlkW2cgLSAxXVt0XSArIHRoaXMuZ2FwX3BlbmFsdHksIGMgPSB0aGlzLmdyaWRbZ11bdCAtIDFdICsgdGhpcy5nYXBfcGVuYWx0eSwgZiA9IFtvLCBzLCBjXSwgVCA9IHRoaXMuYXJyYXlBbGxNYXhJbmRleGVzKGYpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtnXVt0XSA9IGZbVFswXV0sIHRoaXMudHJhY2ViYWNrR3JpZFtnXVt0XSA9IFtULmluY2x1ZGVzKDApLCBULmluY2x1ZGVzKDEpLCBULmluY2x1ZGVzKDIpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMuZ3JpZFt0aGlzLmlNYXggLSAxXVt0aGlzLmpNYXggLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gR2V0cyBhbGwgcG9zc2libGUgdmFsaWQgc2VxdWVuY2UgY29tYmluYXRpb25zXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWxpZ25tZW50VHJhY2ViYWNrXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGwgPSBbXTtcbiAgICAgICAgICAgICAgICAgIGZvciAobC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zOiBbdGhpcy5zZXF1ZW5jZTEubGVuZ3RoLCB0aGlzLnNlcXVlbmNlMi5sZW5ndGhdLFxuICAgICAgICAgICAgICAgICAgICBzZXExOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBzZXEyOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9KTsgbFswXTsgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gbFswXSwgZyA9IHRoaXMudHJhY2ViYWNrR3JpZFtpLnBvc1swXV1baS5wb3NbMV1dO1xuICAgICAgICAgICAgICAgICAgICBnWzBdICYmIGwucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zOiBbaS5wb3NbMF0gLSAxLCBpLnBvc1sxXSAtIDFdLFxuICAgICAgICAgICAgICAgICAgICAgIHNlcTE6IHRoaXMuc2VxdWVuY2UxW2kucG9zWzBdIC0gMV0gKyBpLnNlcTEsXG4gICAgICAgICAgICAgICAgICAgICAgc2VxMjogdGhpcy5zZXF1ZW5jZTJbaS5wb3NbMV0gLSAxXSArIGkuc2VxMlxuICAgICAgICAgICAgICAgICAgICB9KSwgZ1sxXSAmJiBsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgIHBvczogW2kucG9zWzBdIC0gMSwgaS5wb3NbMV1dLFxuICAgICAgICAgICAgICAgICAgICAgIHNlcTE6IHRoaXMuc2VxdWVuY2UxW2kucG9zWzBdIC0gMV0gKyBpLnNlcTEsXG4gICAgICAgICAgICAgICAgICAgICAgc2VxMjogXCItXCIgKyBpLnNlcTJcbiAgICAgICAgICAgICAgICAgICAgfSksIGdbMl0gJiYgbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICBwb3M6IFtpLnBvc1swXSwgaS5wb3NbMV0gLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXExOiBcIi1cIiArIGkuc2VxMSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXEyOiB0aGlzLnNlcXVlbmNlMltpLnBvc1sxXSAtIDFdICsgaS5zZXEyXG4gICAgICAgICAgICAgICAgICAgIH0pLCBpLnBvc1swXSA9PT0gMCAmJiBpLnBvc1sxXSA9PT0gMCAmJiB0aGlzLmFsaWdubWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgc2VxdWVuY2UxOiBpLnNlcTEsXG4gICAgICAgICAgICAgICAgICAgICAgc2VxdWVuY2UyOiBpLnNlcTJcbiAgICAgICAgICAgICAgICAgICAgfSksIGwuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsaWdubWVudHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEhlbHBlciBGdW5jdGlvbnNcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJnZXRBbGxJbmRleGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGwsIGkpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGcgPSBbXSwgdCA9IC0xOyAodCA9IGwuaW5kZXhPZihpLCB0ICsgMSkpICE9PSAtMTsgKVxuICAgICAgICAgICAgICAgICAgICBnLnB1c2godCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYXJyYXlBbGxNYXhJbmRleGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFsbEluZGV4ZXMobCwgTWF0aC5tYXguYXBwbHkobnVsbCwgbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfV0pLCBlO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIEEuZXhwb3J0cyA9IGE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMjggKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICB2YXIgdSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHUuRkRMYXlvdXQgPSBOKDE4KSwgdS5GRExheW91dENvbnN0YW50cyA9IE4oNCksIHUuRkRMYXlvdXRFZGdlID0gTigxOSksIHUuRkRMYXlvdXROb2RlID0gTigyMCksIHUuRGltZW5zaW9uRCA9IE4oMjEpLCB1Lkhhc2hNYXAgPSBOKDIyKSwgdS5IYXNoU2V0ID0gTigyMyksIHUuSUdlb21ldHJ5ID0gTig4KSwgdS5JTWF0aCA9IE4oOSksIHUuSW50ZWdlciA9IE4oMTApLCB1LlBvaW50ID0gTigxMiksIHUuUG9pbnREID0gTig1KSwgdS5SYW5kb21TZWVkID0gTigxNiksIHUuUmVjdGFuZ2xlRCA9IE4oMTMpLCB1LlRyYW5zZm9ybSA9IE4oMTcpLCB1LlVuaXF1ZUlER2VuZXJldG9yID0gTigxNCksIHUuUXVpY2tzb3J0ID0gTigyNSksIHUuTGlua2VkTGlzdCA9IE4oMTEpLCB1LkxHcmFwaE9iamVjdCA9IE4oMiksIHUuTEdyYXBoID0gTig2KSwgdS5MRWRnZSA9IE4oMSksIHUuTEdyYXBoTWFuYWdlciA9IE4oNyksIHUuTE5vZGUgPSBOKDMpLCB1LkxheW91dCA9IE4oMTUpLCB1LkxheW91dENvbnN0YW50cyA9IE4oMCksIHUuTmVlZGxlbWFuV3Vuc2NoID0gTigyNyksIHUuTWF0cml4ID0gTigyNCksIHUuU1ZEID0gTigyNiksIEEuZXhwb3J0cyA9IHU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLyogMjkgKi9cbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIChmdW5jdGlvbihBLCBQLCBOKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1KCkge1xuICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGggPSB1LnByb3RvdHlwZTtcbiAgICAgICAgICAgIGguYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBhLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgaC5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgciA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgciA+PSAwOyByLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHRoaXMubGlzdGVuZXJzW3JdO1xuICAgICAgICAgICAgICAgIGwuZXZlbnQgPT09IGEgJiYgbC5jYWxsYmFjayA9PT0gZSAmJiB0aGlzLmxpc3RlbmVycy5zcGxpY2UociwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGguZW1pdCA9IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbcl07XG4gICAgICAgICAgICAgICAgYSA9PT0gbC5ldmVudCAmJiBsLmNhbGxiYWNrKGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBBLmV4cG9ydHMgPSB1O1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pKGZlKSksIGZlLmV4cG9ydHM7XG59XG52YXIgZHIgPSBsZS5leHBvcnRzLCBPZTtcbmZ1bmN0aW9uIHZyKCkge1xuICByZXR1cm4gT2UgfHwgKE9lID0gMSwgKGZ1bmN0aW9uKEksIHgpIHtcbiAgICAoZnVuY3Rpb24oUCwgTikge1xuICAgICAgSS5leHBvcnRzID0gTih1cigpKTtcbiAgICB9KShkciwgZnVuY3Rpb24oQSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICB2YXIgUCA9IHtcbiAgICAgICAgICAgIC8qKiovXG4gICAgICAgICAgICA0NTogKFxuICAgICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgICAoKGEsIGUsIHIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHt9O1xuICAgICAgICAgICAgICAgIGwubGF5b3V0QmFzZSA9IHIoNTUxKSwgbC5Db1NFQ29uc3RhbnRzID0gcig4MDYpLCBsLkNvU0VFZGdlID0gcig3NjcpLCBsLkNvU0VHcmFwaCA9IHIoODgwKSwgbC5Db1NFR3JhcGhNYW5hZ2VyID0gcig1NzgpLCBsLkNvU0VMYXlvdXQgPSByKDc2NSksIGwuQ29TRU5vZGUgPSByKDk5MSksIGwuQ29uc3RyYWludEhhbmRsZXIgPSByKDkwMiksIGEuZXhwb3J0cyA9IGw7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgIDgwNjogKFxuICAgICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgICAoKGEsIGUsIHIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHIoNTUxKS5GRExheW91dENvbnN0YW50cztcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpKCkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBnIGluIGwpXG4gICAgICAgICAgICAgICAgICBpW2ddID0gbFtnXTtcbiAgICAgICAgICAgICAgICBpLkRFRkFVTFRfVVNFX01VTFRJX0xFVkVMX1NDQUxJTkcgPSAhMSwgaS5ERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OID0gbC5ERUZBVUxUX0VER0VfTEVOR1RILCBpLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04gPSA2MCwgaS5USUxFID0gITAsIGkuVElMSU5HX1BBRERJTkdfVkVSVElDQUwgPSAxMCwgaS5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMID0gMTAsIGkuVFJBTlNGT1JNX09OX0NPTlNUUkFJTlRfSEFORExJTkcgPSAhMCwgaS5FTkZPUkNFX0NPTlNUUkFJTlRTID0gITAsIGkuQVBQTFlfTEFZT1VUID0gITAsIGkuUkVMQVhfTU9WRU1FTlRfT05fQ09OU1RSQUlOVFMgPSAhMCwgaS5UUkVFX1JFRFVDVElPTl9PTl9JTkNSRU1FTlRBTCA9ICEwLCBpLlBVUkVfSU5DUkVNRU5UQUwgPSBpLkRFRkFVTFRfSU5DUkVNRU5UQUwsIGEuZXhwb3J0cyA9IGk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgIDc2NzogKFxuICAgICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgICAoKGEsIGUsIHIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHIoNTUxKS5GRExheW91dEVkZ2U7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaSh0LCBvLCBzKSB7XG4gICAgICAgICAgICAgICAgICBsLmNhbGwodGhpcywgdCwgbywgcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShsLnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZyBpbiBsKVxuICAgICAgICAgICAgICAgICAgaVtnXSA9IGxbZ107XG4gICAgICAgICAgICAgICAgYS5leHBvcnRzID0gaTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgODgwOiAoXG4gICAgICAgICAgICAgIC8qKiovXG4gICAgICAgICAgICAgICgoYSwgZSwgcikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBsID0gcig1NTEpLkxHcmFwaDtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpKHQsIG8sIHMpIHtcbiAgICAgICAgICAgICAgICAgIGwuY2FsbCh0aGlzLCB0LCBvLCBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGwucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBnIGluIGwpXG4gICAgICAgICAgICAgICAgICBpW2ddID0gbFtnXTtcbiAgICAgICAgICAgICAgICBhLmV4cG9ydHMgPSBpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC8qKiovXG4gICAgICAgICAgICA1Nzg6IChcbiAgICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgICAgKChhLCBlLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSByKDU1MSkuTEdyYXBoTWFuYWdlcjtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpKHQpIHtcbiAgICAgICAgICAgICAgICAgIGwuY2FsbCh0aGlzLCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGwucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBnIGluIGwpXG4gICAgICAgICAgICAgICAgICBpW2ddID0gbFtnXTtcbiAgICAgICAgICAgICAgICBhLmV4cG9ydHMgPSBpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC8qKiovXG4gICAgICAgICAgICA3NjU6IChcbiAgICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgICAgKChhLCBlLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSByKDU1MSkuRkRMYXlvdXQsIGkgPSByKDU3OCksIGcgPSByKDg4MCksIHQgPSByKDk5MSksIG8gPSByKDc2NyksIHMgPSByKDgwNiksIGMgPSByKDkwMiksIGYgPSByKDU1MSkuRkRMYXlvdXRDb25zdGFudHMsIFQgPSByKDU1MSkuTGF5b3V0Q29uc3RhbnRzLCBkID0gcig1NTEpLlBvaW50LCB2ID0gcig1NTEpLlBvaW50RCwgTCA9IHIoNTUxKS5EaW1lbnNpb25ELCBiID0gcig1NTEpLkxheW91dCwgQyA9IHIoNTUxKS5JbnRlZ2VyLCBHID0gcig1NTEpLklHZW9tZXRyeSwgWiA9IHIoNTUxKS5MR3JhcGgsIFkgPSByKDU1MSkuVHJhbnNmb3JtLCBLID0gcig1NTEpLkxpbmtlZExpc3Q7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTygpIHtcbiAgICAgICAgICAgICAgICAgIGwuY2FsbCh0aGlzKSwgdGhpcy50b0JlVGlsZWQgPSB7fSwgdGhpcy5jb25zdHJhaW50cyA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGl0IGluIGwpXG4gICAgICAgICAgICAgICAgICBPW2l0XSA9IGxbaXRdO1xuICAgICAgICAgICAgICAgIE8ucHJvdG90eXBlLm5ld0dyYXBoTWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgaSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlciA9IG4sIG47XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGcobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIG4pO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHQodGhpcy5ncmFwaE1hbmFnZXIsIG4pO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IG8obnVsbCwgbnVsbCwgbik7XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGwucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzLmNhbGwodGhpcywgYXJndW1lbnRzKSwgdGhpcy5pc1N1YkxheW91dCB8fCAocy5ERUZBVUxUX0VER0VfTEVOR1RIIDwgMTAgPyB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IDEwIDogdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSBzLkRFRkFVTFRfRURHRV9MRU5HVEgsIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9IHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT04sIHRoaXMuZ3Jhdml0eUNvbnN0YW50ID0gZi5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEgsIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQgPSBmLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCwgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPSBmLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IsIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IgPSBmLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IsIHRoaXMucHJ1bmVkTm9kZXNBbGwgPSBbXSwgdGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgPSAwLCB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucyA9IDAsIHRoaXMuaXNUcmVlR3Jvd2luZyA9ICExLCB0aGlzLmlzR3Jvd3RoRmluaXNoZWQgPSAhMSk7XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuaW5pdFNwcmluZ0VtYmVkZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBsLnByb3RvdHlwZS5pbml0U3ByaW5nRW1iZWRkZXIuY2FsbCh0aGlzKSwgdGhpcy5jb29saW5nQ3ljbGUgPSAwLCB0aGlzLm1heENvb2xpbmdDeWNsZSA9IHRoaXMubWF4SXRlcmF0aW9ucyAvIGYuQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9ELCB0aGlzLmZpbmFsVGVtcGVyYXR1cmUgPSAwLjA0LCB0aGlzLmNvb2xpbmdBZGp1c3RlciA9IDE7XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbiA9IFQuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gJiYgKHRoaXMuY3JlYXRlQmVuZHBvaW50cygpLCB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCkpLCB0aGlzLmxldmVsID0gMCwgdGhpcy5jbGFzc2ljTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuY2xhc3NpY0xheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXNXaXRoR3Jhdml0eSA9IHRoaXMuY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbygpLCB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbih0aGlzLm5vZGVzV2l0aEdyYXZpdHkpLCB0aGlzLmNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcygpLCB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3JzKCksIHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKCksIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5jYWxjRXN0aW1hdGVkU2l6ZSgpLCB0aGlzLmNhbGNJZGVhbEVkZ2VMZW5ndGhzKCksIHRoaXMuaW5jcmVtZW50YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuVFJFRV9SRURVQ1RJT05fT05fSU5DUkVNRU5UQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVRyZWVzKCksIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IG5ldyBTZXQodGhpcy5nZXRBbGxOb2RlcygpKSwgcCA9IHRoaXMubm9kZXNXaXRoR3Jhdml0eS5maWx0ZXIoZnVuY3Rpb24oUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0uaGFzKFIpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuZ2V0RmxhdEZvcmVzdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhZGlhbGx5KG4pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVRyZWVzKCksIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IG5ldyBTZXQodGhpcy5nZXRBbGxOb2RlcygpKSwgcCA9IHRoaXMubm9kZXNXaXRoR3Jhdml0eS5maWx0ZXIoZnVuY3Rpb24oRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0uaGFzKEUpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKHApLCB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jb25zdHJhaW50cykubGVuZ3RoID4gMCAmJiAoYy5oYW5kbGVDb25zdHJhaW50cyh0aGlzKSwgdGhpcy5pbml0Q29uc3RyYWludFZhcmlhYmxlcygpKSwgdGhpcy5pbml0U3ByaW5nRW1iZWRkZXIoKSwgcy5BUFBMWV9MQVlPVVQgJiYgdGhpcy5ydW5TcHJpbmdFbWJlZGRlcigpLCAhMDtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMrKywgdGhpcy50b3RhbEl0ZXJhdGlvbnMgPT09IHRoaXMubWF4SXRlcmF0aW9ucyAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBmLkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCA9PSAwICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbnZlcmdlZCgpKVxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVHJlZUdyb3dpbmcgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29vbGluZ0N5Y2xlKyssIHRoaXMubGF5b3V0UXVhbGl0eSA9PSAwID8gdGhpcy5jb29saW5nQWRqdXN0ZXIgPSB0aGlzLmNvb2xpbmdDeWNsZSA6IHRoaXMubGF5b3V0UXVhbGl0eSA9PSAxICYmICh0aGlzLmNvb2xpbmdBZGp1c3RlciA9IHRoaXMuY29vbGluZ0N5Y2xlIC8gMyksIHRoaXMuY29vbGluZ0ZhY3RvciA9IE1hdGgubWF4KHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgLSBNYXRoLnBvdyh0aGlzLmNvb2xpbmdDeWNsZSwgTWF0aC5sb2coMTAwICogKHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgLSB0aGlzLmZpbmFsVGVtcGVyYXR1cmUpKSAvIE1hdGgubG9nKHRoaXMubWF4Q29vbGluZ0N5Y2xlKSkgLyAxMDAgKiB0aGlzLmNvb2xpbmdBZGp1c3RlciwgdGhpcy5maW5hbFRlbXBlcmF0dXJlKSwgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBNYXRoLmNlaWwodGhpcy5pbml0aWFsQW5pbWF0aW9uUGVyaW9kICogTWF0aC5zcXJ0KHRoaXMuY29vbGluZ0ZhY3RvcikpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmVlR3Jvd2luZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgJSAxMCA9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpLCB0aGlzLnVwZGF0ZUdyaWQoKSwgdGhpcy5ncm93VHJlZSh0aGlzLnBydW5lZE5vZGVzQWxsKSwgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgU2V0KHRoaXMuZ2V0QWxsTm9kZXMoKSksIG0gPSB0aGlzLm5vZGVzV2l0aEdyYXZpdHkuZmlsdGVyKGZ1bmN0aW9uKHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4uaGFzKHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbihtKSwgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCksIHRoaXMudXBkYXRlR3JpZCgpLCBzLlBVUkVfSU5DUkVNRU5UQUwgPyB0aGlzLmNvb2xpbmdGYWN0b3IgPSBmLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgLyAyIDogdGhpcy5jb29saW5nRmFjdG9yID0gZi5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gITEsIHRoaXMuaXNHcm93dGhGaW5pc2hlZCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucysrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNHcm93dGhGaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbnZlcmdlZCgpKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgJSAxMCA9PSAwICYmICh0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKSwgdGhpcy51cGRhdGVHcmlkKCkpLCBzLlBVUkVfSU5DUkVNRU5UQUwgPyB0aGlzLmNvb2xpbmdGYWN0b3IgPSBmLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgLyAyICogKCgxMDAgLSB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucykgLyAxMDApIDogdGhpcy5jb29saW5nRmFjdG9yID0gZi5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMICogKCgxMDAgLSB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucykgLyAxMDApLCB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucysrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIHAgPSAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQsIEUgPSB0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucyAlIDEwID09IDEgJiYgdGhpcy5pc1RyZWVHcm93aW5nIHx8IHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zICUgMTAgPT0gMSAmJiB0aGlzLmlzR3Jvd3RoRmluaXNoZWQ7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDAsIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpLCB0aGlzLmNhbGNTcHJpbmdGb3JjZXMoKSwgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2VzKHAsIEUpLCB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2VzKCksIHRoaXMubW92ZU5vZGVzKCksIHRoaXMuYW5pbWF0ZSgpLCAhMTtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5nZXRQb3NpdGlvbnNEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKSwgbSA9IHt9LCBwID0gMDsgcCA8IG4ubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEUgPSBuW3BdLnJlY3QsIHkgPSBuW3BdLmlkO1xuICAgICAgICAgICAgICAgICAgICBtW3ldID0ge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiB5LFxuICAgICAgICAgICAgICAgICAgICAgIHg6IEUuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgICAgICAgICAgICAgIHk6IEUuZ2V0Q2VudGVyWSgpLFxuICAgICAgICAgICAgICAgICAgICAgIHc6IEUud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgaDogRS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLnJ1blNwcmluZ0VtYmVkZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2QgPSAyNSwgdGhpcy5hbmltYXRpb25QZXJpb2QgPSB0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2Q7XG4gICAgICAgICAgICAgICAgICB2YXIgbiA9ICExO1xuICAgICAgICAgICAgICAgICAgaWYgKGYuQU5JTUFURSA9PT0gXCJkdXJpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwibGF5b3V0c3RhcnRlZFwiKTtcbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgIW47IClcbiAgICAgICAgICAgICAgICAgICAgICBuID0gdGhpcy50aWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLm1vdmVOb2RlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IHRoaXMuZ2V0QWxsTm9kZXMoKSwgbSwgcCA9IDA7IHAgPCBuLmxlbmd0aDsgcCsrKVxuICAgICAgICAgICAgICAgICAgICBtID0gbltwXSwgbS5jYWxjdWxhdGVEaXNwbGFjZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29uc3RyYWludHMpLmxlbmd0aCA+IDAgJiYgdGhpcy51cGRhdGVEaXNwbGFjZW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG4ubGVuZ3RoOyBwKyspXG4gICAgICAgICAgICAgICAgICAgIG0gPSBuW3BdLCBtLm1vdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5pbml0Q29uc3RyYWludFZhcmlhYmxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgdGhpcy5pZFRvTm9kZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIHRoaXMuZml4ZWROb2RlU2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpLCBwID0gMDsgcCA8IG0ubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEUgPSBtW3BdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkVG9Ob2RlTWFwLnNldChFLmlkLCBFKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciB5ID0gZnVuY3Rpb24gdyhIKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyICQgPSBILmdldENoaWxkKCkuZ2V0Tm9kZXMoKSwgXywgaHQgPSAwLCBRID0gMDsgUSA8ICQubGVuZ3RoOyBRKyspXG4gICAgICAgICAgICAgICAgICAgICAgXyA9ICRbUV0sIF8uZ2V0Q2hpbGQoKSA9PSBudWxsID8gbi5maXhlZE5vZGVTZXQuaGFzKF8uaWQpICYmIChodCArPSAxMDApIDogaHQgKz0gdyhfKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0O1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnN0cmFpbnRzLmZpeGVkTm9kZUNvbnN0cmFpbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cy5maXhlZE5vZGVDb25zdHJhaW50LmZvckVhY2goZnVuY3Rpb24oJCkge1xuICAgICAgICAgICAgICAgICAgICAgIG4uZml4ZWROb2RlU2V0LmFkZCgkLm5vZGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKSwgRSwgcCA9IDA7IHAgPCBtLmxlbmd0aDsgcCsrKVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChFID0gbVtwXSwgRS5nZXRDaGlsZCgpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBSID0geShFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFIgPiAwICYmIChFLmZpeGVkTm9kZVdlaWdodCA9IFIpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnN0cmFpbnRzLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIFMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kdW1teVRvTm9kZUZvclZlcnRpY2FsQWxpZ25tZW50ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgdGhpcy5kdW1teVRvTm9kZUZvckhvcml6b250YWxBbGlnbm1lbnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB0aGlzLmZpeGVkTm9kZXNPbkhvcml6b250YWwgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLCB0aGlzLmZpeGVkTm9kZXNPblZlcnRpY2FsID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSwgdGhpcy5maXhlZE5vZGVTZXQuZm9yRWFjaChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgbi5maXhlZE5vZGVzT25Ib3Jpem9udGFsLmFkZCh3KSwgbi5maXhlZE5vZGVzT25WZXJ0aWNhbC5hZGQodyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCB0aGlzLmNvbnN0cmFpbnRzLmFsaWdubWVudENvbnN0cmFpbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25zdHJhaW50cy5hbGlnbm1lbnRDb25zdHJhaW50LnZlcnRpY2FsKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgVyA9IHRoaXMuY29uc3RyYWludHMuYWxpZ25tZW50Q29uc3RyYWludC52ZXJ0aWNhbCwgcCA9IDA7IHAgPCBXLmxlbmd0aDsgcCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmR1bW15VG9Ob2RlRm9yVmVydGljYWxBbGlnbm1lbnQuc2V0KFwiZHVtbXlcIiArIHAsIFtdKSwgV1twXS5mb3JFYWNoKGZ1bmN0aW9uKEgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNLnNldChILCBcImR1bW15XCIgKyBwKSwgbi5kdW1teVRvTm9kZUZvclZlcnRpY2FsQWxpZ25tZW50LmdldChcImR1bW15XCIgKyBwKS5wdXNoKEgpLCBuLmZpeGVkTm9kZVNldC5oYXMoSCkgJiYgbi5maXhlZE5vZGVzT25Ib3Jpem9udGFsLmFkZChcImR1bW15XCIgKyBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uc3RyYWludHMuYWxpZ25tZW50Q29uc3RyYWludC5ob3Jpem9udGFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgRCA9IHRoaXMuY29uc3RyYWludHMuYWxpZ25tZW50Q29uc3RyYWludC5ob3Jpem9udGFsLCBwID0gMDsgcCA8IEQubGVuZ3RoOyBwKyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHVtbXlUb05vZGVGb3JIb3Jpem9udGFsQWxpZ25tZW50LnNldChcImR1bW15XCIgKyBwLCBbXSksIERbcF0uZm9yRWFjaChmdW5jdGlvbihIKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUy5zZXQoSCwgXCJkdW1teVwiICsgcCksIG4uZHVtbXlUb05vZGVGb3JIb3Jpem9udGFsQWxpZ25tZW50LmdldChcImR1bW15XCIgKyBwKS5wdXNoKEgpLCBuLmZpeGVkTm9kZVNldC5oYXMoSCkgJiYgbi5maXhlZE5vZGVzT25WZXJ0aWNhbC5hZGQoXCJkdW1teVwiICsgcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLlJFTEFYX01PVkVNRU5UX09OX0NPTlNUUkFJTlRTKVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2h1ZmZsZSA9IGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBILCAkLCBfO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfID0gdy5sZW5ndGggLSAxOyBfID49IDIgKiB3Lmxlbmd0aCAvIDM7IF8tLSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChfICsgMSkpLCAkID0gd1tfXSwgd1tfXSA9IHdbSF0sIHdbSF0gPSAkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5ub2Rlc0luUmVsYXRpdmVIb3Jpem9udGFsID0gW10sIHRoaXMubm9kZXNJblJlbGF0aXZlVmVydGljYWwgPSBbXSwgdGhpcy5ub2RlVG9SZWxhdGl2ZUNvbnN0cmFpbnRNYXBIb3Jpem9udGFsID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgdGhpcy5ub2RlVG9SZWxhdGl2ZUNvbnN0cmFpbnRNYXBWZXJ0aWNhbCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIHRoaXMubm9kZVRvVGVtcFBvc2l0aW9uTWFwSG9yaXpvbnRhbCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIHRoaXMubm9kZVRvVGVtcFBvc2l0aW9uTWFwVmVydGljYWwgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB0aGlzLmNvbnN0cmFpbnRzLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludC5mb3JFYWNoKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3LmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEggPSBNLmhhcyh3LmxlZnQpID8gTS5nZXQody5sZWZ0KSA6IHcubGVmdCwgJCA9IE0uaGFzKHcucmlnaHQpID8gTS5nZXQody5yaWdodCkgOiB3LnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuLm5vZGVzSW5SZWxhdGl2ZUhvcml6b250YWwuaW5jbHVkZXMoSCkgfHwgKG4ubm9kZXNJblJlbGF0aXZlSG9yaXpvbnRhbC5wdXNoKEgpLCBuLm5vZGVUb1JlbGF0aXZlQ29uc3RyYWludE1hcEhvcml6b250YWwuc2V0KEgsIFtdKSwgbi5kdW1teVRvTm9kZUZvclZlcnRpY2FsQWxpZ25tZW50LmhhcyhIKSA/IG4ubm9kZVRvVGVtcFBvc2l0aW9uTWFwSG9yaXpvbnRhbC5zZXQoSCwgbi5pZFRvTm9kZU1hcC5nZXQobi5kdW1teVRvTm9kZUZvclZlcnRpY2FsQWxpZ25tZW50LmdldChIKVswXSkuZ2V0Q2VudGVyWCgpKSA6IG4ubm9kZVRvVGVtcFBvc2l0aW9uTWFwSG9yaXpvbnRhbC5zZXQoSCwgbi5pZFRvTm9kZU1hcC5nZXQoSCkuZ2V0Q2VudGVyWCgpKSksIG4ubm9kZXNJblJlbGF0aXZlSG9yaXpvbnRhbC5pbmNsdWRlcygkKSB8fCAobi5ub2Rlc0luUmVsYXRpdmVIb3Jpem9udGFsLnB1c2goJCksIG4ubm9kZVRvUmVsYXRpdmVDb25zdHJhaW50TWFwSG9yaXpvbnRhbC5zZXQoJCwgW10pLCBuLmR1bW15VG9Ob2RlRm9yVmVydGljYWxBbGlnbm1lbnQuaGFzKCQpID8gbi5ub2RlVG9UZW1wUG9zaXRpb25NYXBIb3Jpem9udGFsLnNldCgkLCBuLmlkVG9Ob2RlTWFwLmdldChuLmR1bW15VG9Ob2RlRm9yVmVydGljYWxBbGlnbm1lbnQuZ2V0KCQpWzBdKS5nZXRDZW50ZXJYKCkpIDogbi5ub2RlVG9UZW1wUG9zaXRpb25NYXBIb3Jpem9udGFsLnNldCgkLCBuLmlkVG9Ob2RlTWFwLmdldCgkKS5nZXRDZW50ZXJYKCkpKSwgbi5ub2RlVG9SZWxhdGl2ZUNvbnN0cmFpbnRNYXBIb3Jpem9udGFsLmdldChIKS5wdXNoKHsgcmlnaHQ6ICQsIGdhcDogdy5nYXAgfSksIG4ubm9kZVRvUmVsYXRpdmVDb25zdHJhaW50TWFwSG9yaXpvbnRhbC5nZXQoJCkucHVzaCh7IGxlZnQ6IEgsIGdhcDogdy5nYXAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgXyA9IFMuaGFzKHcudG9wKSA/IFMuZ2V0KHcudG9wKSA6IHcudG9wLCBodCA9IFMuaGFzKHcuYm90dG9tKSA/IFMuZ2V0KHcuYm90dG9tKSA6IHcuYm90dG9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuLm5vZGVzSW5SZWxhdGl2ZVZlcnRpY2FsLmluY2x1ZGVzKF8pIHx8IChuLm5vZGVzSW5SZWxhdGl2ZVZlcnRpY2FsLnB1c2goXyksIG4ubm9kZVRvUmVsYXRpdmVDb25zdHJhaW50TWFwVmVydGljYWwuc2V0KF8sIFtdKSwgbi5kdW1teVRvTm9kZUZvckhvcml6b250YWxBbGlnbm1lbnQuaGFzKF8pID8gbi5ub2RlVG9UZW1wUG9zaXRpb25NYXBWZXJ0aWNhbC5zZXQoXywgbi5pZFRvTm9kZU1hcC5nZXQobi5kdW1teVRvTm9kZUZvckhvcml6b250YWxBbGlnbm1lbnQuZ2V0KF8pWzBdKS5nZXRDZW50ZXJZKCkpIDogbi5ub2RlVG9UZW1wUG9zaXRpb25NYXBWZXJ0aWNhbC5zZXQoXywgbi5pZFRvTm9kZU1hcC5nZXQoXykuZ2V0Q2VudGVyWSgpKSksIG4ubm9kZXNJblJlbGF0aXZlVmVydGljYWwuaW5jbHVkZXMoaHQpIHx8IChuLm5vZGVzSW5SZWxhdGl2ZVZlcnRpY2FsLnB1c2goaHQpLCBuLm5vZGVUb1JlbGF0aXZlQ29uc3RyYWludE1hcFZlcnRpY2FsLnNldChodCwgW10pLCBuLmR1bW15VG9Ob2RlRm9ySG9yaXpvbnRhbEFsaWdubWVudC5oYXMoaHQpID8gbi5ub2RlVG9UZW1wUG9zaXRpb25NYXBWZXJ0aWNhbC5zZXQoaHQsIG4uaWRUb05vZGVNYXAuZ2V0KG4uZHVtbXlUb05vZGVGb3JIb3Jpem9udGFsQWxpZ25tZW50LmdldChodClbMF0pLmdldENlbnRlclkoKSkgOiBuLm5vZGVUb1RlbXBQb3NpdGlvbk1hcFZlcnRpY2FsLnNldChodCwgbi5pZFRvTm9kZU1hcC5nZXQoaHQpLmdldENlbnRlclkoKSkpLCBuLm5vZGVUb1JlbGF0aXZlQ29uc3RyYWludE1hcFZlcnRpY2FsLmdldChfKS5wdXNoKHsgYm90dG9tOiBodCwgZ2FwOiB3LmdhcCB9KSwgbi5ub2RlVG9SZWxhdGl2ZUNvbnN0cmFpbnRNYXBWZXJ0aWNhbC5nZXQoaHQpLnB1c2goeyB0b3A6IF8sIGdhcDogdy5nYXAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBxID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgViA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cy5yZWxhdGl2ZVBsYWNlbWVudENvbnN0cmFpbnQuZm9yRWFjaChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAody5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBIID0gTS5oYXMody5sZWZ0KSA/IE0uZ2V0KHcubGVmdCkgOiB3LmxlZnQsICQgPSBNLmhhcyh3LnJpZ2h0KSA/IE0uZ2V0KHcucmlnaHQpIDogdy5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcS5oYXMoSCkgPyBxLmdldChIKS5wdXNoKCQpIDogcS5zZXQoSCwgWyRdKSwgcS5oYXMoJCkgPyBxLmdldCgkKS5wdXNoKEgpIDogcS5zZXQoJCwgW0hdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfID0gUy5oYXMody50b3ApID8gUy5nZXQody50b3ApIDogdy50b3AsIGh0ID0gUy5oYXMody5ib3R0b20pID8gUy5nZXQody5ib3R0b20pIDogdy5ib3R0b207XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFYuaGFzKF8pID8gVi5nZXQoXykucHVzaChodCkgOiBWLnNldChfLCBbaHRdKSwgVi5oYXMoaHQpID8gVi5nZXQoaHQpLnB1c2goXykgOiBWLnNldChodCwgW19dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgWCA9IGZ1bmN0aW9uKEgsICQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfID0gW10sIGh0ID0gW10sIFEgPSBuZXcgSygpLCBJdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksIE50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBILmZvckVhY2goZnVuY3Rpb24odnQsIHJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghSXQuaGFzKHJ0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9bTnRdID0gW10sIGh0W050XSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBndCA9IHJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoUS5wdXNoKGd0KSwgSXQuYWRkKGd0KSwgX1tOdF0ucHVzaChndCk7IFEubGVuZ3RoICE9IDA7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3QgPSBRLnNoaWZ0KCksICQuaGFzKGd0KSAmJiAoaHRbTnRdID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG10ID0gSC5nZXQoZ3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQuZm9yRWFjaChmdW5jdGlvbihBdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdC5oYXMoQXQpIHx8IChRLnB1c2goQXQpLCBJdC5hZGQoQXQpLCBfW050XS5wdXNoKEF0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIHsgY29tcG9uZW50czogXywgaXNGaXhlZDogaHQgfTtcbiAgICAgICAgICAgICAgICAgICAgICB9LCBldCA9IFgocSwgbi5maXhlZE5vZGVzT25Ib3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNPbkhvcml6b250YWwgPSBldC5jb21wb25lbnRzLCB0aGlzLmZpeGVkQ29tcG9uZW50c09uSG9yaXpvbnRhbCA9IGV0LmlzRml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHogPSBYKFYsIG4uZml4ZWROb2Rlc09uVmVydGljYWwpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c09uVmVydGljYWwgPSB6LmNvbXBvbmVudHMsIHRoaXMuZml4ZWRDb21wb25lbnRzT25WZXJ0aWNhbCA9IHouaXNGaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLnVwZGF0ZURpc3BsYWNlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnN0cmFpbnRzLmZpeGVkTm9kZUNvbnN0cmFpbnQgJiYgdGhpcy5jb25zdHJhaW50cy5maXhlZE5vZGVDb25zdHJhaW50LmZvckVhY2goZnVuY3Rpb24oeikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IG4uaWRUb05vZGVNYXAuZ2V0KHoubm9kZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgdy5kaXNwbGFjZW1lbnRYID0gMCwgdy5kaXNwbGFjZW1lbnRZID0gMDtcbiAgICAgICAgICAgICAgICAgIH0pLCB0aGlzLmNvbnN0cmFpbnRzLmFsaWdubWVudENvbnN0cmFpbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uc3RyYWludHMuYWxpZ25tZW50Q29uc3RyYWludC52ZXJ0aWNhbClcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtID0gdGhpcy5jb25zdHJhaW50cy5hbGlnbm1lbnRDb25zdHJhaW50LnZlcnRpY2FsLCBwID0gMDsgcCA8IG0ubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEUgPSAwLCB5ID0gMDsgeSA8IG1bcF0ubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZml4ZWROb2RlU2V0LmhhcyhtW3BdW3ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEUgKz0gdGhpcy5pZFRvTm9kZU1hcC5nZXQobVtwXVt5XSkuZGlzcGxhY2VtZW50WDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFIgPSBFIC8gbVtwXS5sZW5ndGgsIHkgPSAwOyB5IDwgbVtwXS5sZW5ndGg7IHkrKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZFRvTm9kZU1hcC5nZXQobVtwXVt5XSkuZGlzcGxhY2VtZW50WCA9IFI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25zdHJhaW50cy5hbGlnbm1lbnRDb25zdHJhaW50Lmhvcml6b250YWwpXG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgTSA9IHRoaXMuY29uc3RyYWludHMuYWxpZ25tZW50Q29uc3RyYWludC5ob3Jpem9udGFsLCBwID0gMDsgcCA8IE0ubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFMgPSAwLCB5ID0gMDsgeSA8IE1bcF0ubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZml4ZWROb2RlU2V0LmhhcyhNW3BdW3ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFMgKz0gdGhpcy5pZFRvTm9kZU1hcC5nZXQoTVtwXVt5XSkuZGlzcGxhY2VtZW50WTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFcgPSBTIC8gTVtwXS5sZW5ndGgsIHkgPSAwOyB5IDwgTVtwXS5sZW5ndGg7IHkrKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZFRvTm9kZU1hcC5nZXQoTVtwXVt5XSkuZGlzcGxhY2VtZW50WSA9IFc7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uc3RyYWludHMucmVsYXRpdmVQbGFjZW1lbnRDb25zdHJhaW50KVxuICAgICAgICAgICAgICAgICAgICBpZiAocy5SRUxBWF9NT1ZFTUVOVF9PTl9DT05TVFJBSU5UUylcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsSXRlcmF0aW9ucyAlIDEwID09IDAgJiYgKHRoaXMuc2h1ZmZsZSh0aGlzLm5vZGVzSW5SZWxhdGl2ZUhvcml6b250YWwpLCB0aGlzLnNodWZmbGUodGhpcy5ub2Rlc0luUmVsYXRpdmVWZXJ0aWNhbCkpLCB0aGlzLm5vZGVzSW5SZWxhdGl2ZUhvcml6b250YWwuZm9yRWFjaChmdW5jdGlvbih6KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW4uZml4ZWROb2Rlc09uSG9yaXpvbnRhbC5oYXMoeikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuLmR1bW15VG9Ob2RlRm9yVmVydGljYWxBbGlnbm1lbnQuaGFzKHopID8gdyA9IG4uaWRUb05vZGVNYXAuZ2V0KG4uZHVtbXlUb05vZGVGb3JWZXJ0aWNhbEFsaWdubWVudC5nZXQoeilbMF0pLmRpc3BsYWNlbWVudFggOiB3ID0gbi5pZFRvTm9kZU1hcC5nZXQoeikuZGlzcGxhY2VtZW50WCwgbi5ub2RlVG9SZWxhdGl2ZUNvbnN0cmFpbnRNYXBIb3Jpem9udGFsLmdldCh6KS5mb3JFYWNoKGZ1bmN0aW9uKEgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSC5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQgPSBuLm5vZGVUb1RlbXBQb3NpdGlvbk1hcEhvcml6b250YWwuZ2V0KEgucmlnaHQpIC0gbi5ub2RlVG9UZW1wUG9zaXRpb25NYXBIb3Jpem9udGFsLmdldCh6KSAtIHc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkIDwgSC5nYXAgJiYgKHcgLT0gSC5nYXAgLSAkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQgPSBuLm5vZGVUb1RlbXBQb3NpdGlvbk1hcEhvcml6b250YWwuZ2V0KHopIC0gbi5ub2RlVG9UZW1wUG9zaXRpb25NYXBIb3Jpem9udGFsLmdldChILmxlZnQpICsgdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQgPCBILmdhcCAmJiAodyArPSBILmdhcCAtICQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIG4ubm9kZVRvVGVtcFBvc2l0aW9uTWFwSG9yaXpvbnRhbC5zZXQoeiwgbi5ub2RlVG9UZW1wUG9zaXRpb25NYXBIb3Jpem9udGFsLmdldCh6KSArIHcpLCBuLmR1bW15VG9Ob2RlRm9yVmVydGljYWxBbGlnbm1lbnQuaGFzKHopID8gbi5kdW1teVRvTm9kZUZvclZlcnRpY2FsQWxpZ25tZW50LmdldCh6KS5mb3JFYWNoKGZ1bmN0aW9uKEgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmlkVG9Ob2RlTWFwLmdldChIKS5kaXNwbGFjZW1lbnRYID0gdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBuLmlkVG9Ob2RlTWFwLmdldCh6KS5kaXNwbGFjZW1lbnRYID0gdztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSwgdGhpcy5ub2Rlc0luUmVsYXRpdmVWZXJ0aWNhbC5mb3JFYWNoKGZ1bmN0aW9uKHopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbi5maXhlZE5vZGVzT25Ib3Jpem9udGFsLmhhcyh6KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG4uZHVtbXlUb05vZGVGb3JIb3Jpem9udGFsQWxpZ25tZW50Lmhhcyh6KSA/IHcgPSBuLmlkVG9Ob2RlTWFwLmdldChuLmR1bW15VG9Ob2RlRm9ySG9yaXpvbnRhbEFsaWdubWVudC5nZXQoeilbMF0pLmRpc3BsYWNlbWVudFkgOiB3ID0gbi5pZFRvTm9kZU1hcC5nZXQoeikuZGlzcGxhY2VtZW50WSwgbi5ub2RlVG9SZWxhdGl2ZUNvbnN0cmFpbnRNYXBWZXJ0aWNhbC5nZXQoeikuZm9yRWFjaChmdW5jdGlvbihIKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEguYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCA9IG4ubm9kZVRvVGVtcFBvc2l0aW9uTWFwVmVydGljYWwuZ2V0KEguYm90dG9tKSAtIG4ubm9kZVRvVGVtcFBvc2l0aW9uTWFwVmVydGljYWwuZ2V0KHopIC0gdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQgPCBILmdhcCAmJiAodyAtPSBILmdhcCAtICQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCA9IG4ubm9kZVRvVGVtcFBvc2l0aW9uTWFwVmVydGljYWwuZ2V0KHopIC0gbi5ub2RlVG9UZW1wUG9zaXRpb25NYXBWZXJ0aWNhbC5nZXQoSC50b3ApICsgdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQgPCBILmdhcCAmJiAodyArPSBILmdhcCAtICQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIG4ubm9kZVRvVGVtcFBvc2l0aW9uTWFwVmVydGljYWwuc2V0KHosIG4ubm9kZVRvVGVtcFBvc2l0aW9uTWFwVmVydGljYWwuZ2V0KHopICsgdyksIG4uZHVtbXlUb05vZGVGb3JIb3Jpem9udGFsQWxpZ25tZW50Lmhhcyh6KSA/IG4uZHVtbXlUb05vZGVGb3JIb3Jpem9udGFsQWxpZ25tZW50LmdldCh6KS5mb3JFYWNoKGZ1bmN0aW9uKEgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmlkVG9Ob2RlTWFwLmdldChIKS5kaXNwbGFjZW1lbnRZID0gdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBuLmlkVG9Ob2RlTWFwLmdldCh6KS5kaXNwbGFjZW1lbnRZID0gdztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCB0aGlzLmNvbXBvbmVudHNPbkhvcml6b250YWwubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBEID0gdGhpcy5jb21wb25lbnRzT25Ib3Jpem9udGFsW3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZml4ZWRDb21wb25lbnRzT25Ib3Jpem9udGFsW3BdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IEQubGVuZ3RoOyB5KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kdW1teVRvTm9kZUZvclZlcnRpY2FsQWxpZ25tZW50LmhhcyhEW3ldKSA/IHRoaXMuZHVtbXlUb05vZGVGb3JWZXJ0aWNhbEFsaWdubWVudC5nZXQoRFt5XSkuZm9yRWFjaChmdW5jdGlvbihIKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmlkVG9Ob2RlTWFwLmdldChIKS5kaXNwbGFjZW1lbnRYID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IHRoaXMuaWRUb05vZGVNYXAuZ2V0KERbeV0pLmRpc3BsYWNlbWVudFggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwLCBWID0gMCwgeSA9IDA7IHkgPCBELmxlbmd0aDsgeSsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmR1bW15VG9Ob2RlRm9yVmVydGljYWxBbGlnbm1lbnQuaGFzKERbeV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgWCA9IHRoaXMuZHVtbXlUb05vZGVGb3JWZXJ0aWNhbEFsaWdubWVudC5nZXQoRFt5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxICs9IFgubGVuZ3RoICogdGhpcy5pZFRvTm9kZU1hcC5nZXQoWFswXSkuZGlzcGxhY2VtZW50WCwgViArPSBYLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEgKz0gdGhpcy5pZFRvTm9kZU1hcC5nZXQoRFt5XSkuZGlzcGxhY2VtZW50WCwgVisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBldCA9IHEgLyBWLCB5ID0gMDsgeSA8IEQubGVuZ3RoOyB5KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kdW1teVRvTm9kZUZvclZlcnRpY2FsQWxpZ25tZW50LmhhcyhEW3ldKSA/IHRoaXMuZHVtbXlUb05vZGVGb3JWZXJ0aWNhbEFsaWdubWVudC5nZXQoRFt5XSkuZm9yRWFjaChmdW5jdGlvbihIKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmlkVG9Ob2RlTWFwLmdldChIKS5kaXNwbGFjZW1lbnRYID0gZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiB0aGlzLmlkVG9Ob2RlTWFwLmdldChEW3ldKS5kaXNwbGFjZW1lbnRYID0gZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgdGhpcy5jb21wb25lbnRzT25WZXJ0aWNhbC5sZW5ndGg7IHArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEQgPSB0aGlzLmNvbXBvbmVudHNPblZlcnRpY2FsW3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZml4ZWRDb21wb25lbnRzT25WZXJ0aWNhbFtwXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBELmxlbmd0aDsgeSsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHVtbXlUb05vZGVGb3JIb3Jpem9udGFsQWxpZ25tZW50LmhhcyhEW3ldKSA/IHRoaXMuZHVtbXlUb05vZGVGb3JIb3Jpem9udGFsQWxpZ25tZW50LmdldChEW3ldKS5mb3JFYWNoKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uaWRUb05vZGVNYXAuZ2V0KCQpLmRpc3BsYWNlbWVudFkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogdGhpcy5pZFRvTm9kZU1hcC5nZXQoRFt5XSkuZGlzcGxhY2VtZW50WSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDAsIFYgPSAwLCB5ID0gMDsgeSA8IEQubGVuZ3RoOyB5KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZHVtbXlUb05vZGVGb3JIb3Jpem9udGFsQWxpZ25tZW50LmhhcyhEW3ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFggPSB0aGlzLmR1bW15VG9Ob2RlRm9ySG9yaXpvbnRhbEFsaWdubWVudC5nZXQoRFt5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxICs9IFgubGVuZ3RoICogdGhpcy5pZFRvTm9kZU1hcC5nZXQoWFswXSkuZGlzcGxhY2VtZW50WSwgViArPSBYLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEgKz0gdGhpcy5pZFRvTm9kZU1hcC5nZXQoRFt5XSkuZGlzcGxhY2VtZW50WSwgVisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBldCA9IHEgLyBWLCB5ID0gMDsgeSA8IEQubGVuZ3RoOyB5KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kdW1teVRvTm9kZUZvckhvcml6b250YWxBbGlnbm1lbnQuaGFzKERbeV0pID8gdGhpcy5kdW1teVRvTm9kZUZvckhvcml6b250YWxBbGlnbm1lbnQuZ2V0KERbeV0pLmZvckVhY2goZnVuY3Rpb24oUSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5pZFRvTm9kZU1hcC5nZXQoUSkuZGlzcGxhY2VtZW50WSA9IGV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogdGhpcy5pZFRvTm9kZU1hcC5nZXQoRFt5XSkuZGlzcGxhY2VtZW50WSA9IGV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLmNhbGN1bGF0ZU5vZGVzVG9BcHBseUdyYXZpdGF0aW9uVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBuID0gW10sIG0sIHAgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRHcmFwaHMoKSwgRSA9IHAubGVuZ3RoLCB5O1xuICAgICAgICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IEU7IHkrKylcbiAgICAgICAgICAgICAgICAgICAgbSA9IHBbeV0sIG0udXBkYXRlQ29ubmVjdGVkKCksIG0uaXNDb25uZWN0ZWQgfHwgKG4gPSBuLmNvbmNhdChtLmdldE5vZGVzKCkpKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLmNyZWF0ZUJlbmRwb2ludHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBuID0gW107XG4gICAgICAgICAgICAgICAgICBuID0gbi5jb25jYXQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKSk7XG4gICAgICAgICAgICAgICAgICB2YXIgbSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksIHA7XG4gICAgICAgICAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgbi5sZW5ndGg7IHArKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgRSA9IG5bcF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghbS5oYXMoRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IEUuZ2V0U291cmNlKCksIFIgPSBFLmdldFRhcmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh5ID09IFIpXG4gICAgICAgICAgICAgICAgICAgICAgICBFLmdldEJlbmRwb2ludHMoKS5wdXNoKG5ldyB2KCkpLCBFLmdldEJlbmRwb2ludHMoKS5wdXNoKG5ldyB2KCkpLCB0aGlzLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzKEUpLCBtLmFkZChFKTtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBNID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTSA9IE0uY29uY2F0KHkuZ2V0RWRnZUxpc3RUb05vZGUoUikpLCBNID0gTS5jb25jYXQoUi5nZXRFZGdlTGlzdFRvTm9kZSh5KSksICFtLmhhcyhNWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChTID0gMDsgUyA8IE0ubGVuZ3RoOyBTKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBXID0gTVtTXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFcuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IHYoKSksIHRoaXMuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMoVyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE0uZm9yRWFjaChmdW5jdGlvbihEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5hZGQoRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobS5zaXplID09IG4ubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLnBvc2l0aW9uTm9kZXNSYWRpYWxseSA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gPSBuZXcgZCgwLCAwKSwgcCA9IE1hdGguY2VpbChNYXRoLnNxcnQobi5sZW5ndGgpKSwgRSA9IDAsIHkgPSAwLCBSID0gMCwgTSA9IG5ldyB2KDAsIDApLCBTID0gMDsgUyA8IG4ubGVuZ3RoOyBTKyspIHtcbiAgICAgICAgICAgICAgICAgICAgUyAlIHAgPT0gMCAmJiAoUiA9IDAsIHkgPSBFLCBTICE9IDAgJiYgKHkgKz0gcy5ERUZBVUxUX0NPTVBPTkVOVF9TRVBFUkFUSU9OKSwgRSA9IDApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgVyA9IG5bU10sIEQgPSBiLmZpbmRDZW50ZXJPZlRyZWUoVyk7XG4gICAgICAgICAgICAgICAgICAgIG0ueCA9IFIsIG0ueSA9IHksIE0gPSBPLnJhZGlhbExheW91dChXLCBELCBtKSwgTS55ID4gRSAmJiAoRSA9IE1hdGguZmxvb3IoTS55KSksIFIgPSBNYXRoLmZsb29yKE0ueCArIHMuREVGQVVMVF9DT01QT05FTlRfU0VQRVJBVElPTik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShuZXcgdihULldPUkxEX0NFTlRFUl9YIC0gTS54IC8gMiwgVC5XT1JMRF9DRU5URVJfWSAtIE0ueSAvIDIpKTtcbiAgICAgICAgICAgICAgICB9LCBPLnJhZGlhbExheW91dCA9IGZ1bmN0aW9uKG4sIG0sIHApIHtcbiAgICAgICAgICAgICAgICAgIHZhciBFID0gTWF0aC5tYXgodGhpcy5tYXhEaWFnb25hbEluVHJlZShuKSwgcy5ERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OKTtcbiAgICAgICAgICAgICAgICAgIE8uYnJhbmNoUmFkaWFsTGF5b3V0KG0sIG51bGwsIDAsIDM1OSwgMCwgRSk7XG4gICAgICAgICAgICAgICAgICB2YXIgeSA9IFouY2FsY3VsYXRlQm91bmRzKG4pLCBSID0gbmV3IFkoKTtcbiAgICAgICAgICAgICAgICAgIFIuc2V0RGV2aWNlT3JnWCh5LmdldE1pblgoKSksIFIuc2V0RGV2aWNlT3JnWSh5LmdldE1pblkoKSksIFIuc2V0V29ybGRPcmdYKHAueCksIFIuc2V0V29ybGRPcmdZKHAueSk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBNID0gMDsgTSA8IG4ubGVuZ3RoOyBNKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFMgPSBuW01dO1xuICAgICAgICAgICAgICAgICAgICBTLnRyYW5zZm9ybShSKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBXID0gbmV3IHYoeS5nZXRNYXhYKCksIHkuZ2V0TWF4WSgpKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBSLmludmVyc2VUcmFuc2Zvcm1Qb2ludChXKTtcbiAgICAgICAgICAgICAgICB9LCBPLmJyYW5jaFJhZGlhbExheW91dCA9IGZ1bmN0aW9uKG4sIG0sIHAsIEUsIHksIFIpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBNID0gKEUgLSBwICsgMSkgLyAyO1xuICAgICAgICAgICAgICAgICAgTSA8IDAgJiYgKE0gKz0gMTgwKTtcbiAgICAgICAgICAgICAgICAgIHZhciBTID0gKE0gKyBwKSAlIDM2MCwgVyA9IFMgKiBHLlRXT19QSSAvIDM2MCwgRCA9IHkgKiBNYXRoLmNvcyhXKSwgcSA9IHkgKiBNYXRoLnNpbihXKTtcbiAgICAgICAgICAgICAgICAgIG4uc2V0Q2VudGVyKEQsIHEpO1xuICAgICAgICAgICAgICAgICAgdmFyIFYgPSBbXTtcbiAgICAgICAgICAgICAgICAgIFYgPSBWLmNvbmNhdChuLmdldEVkZ2VzKCkpO1xuICAgICAgICAgICAgICAgICAgdmFyIFggPSBWLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIG0gIT0gbnVsbCAmJiBYLS07XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBldCA9IDAsIHogPSBWLmxlbmd0aCwgdywgSCA9IG4uZ2V0RWRnZXNCZXR3ZWVuKG0pOyBILmxlbmd0aCA+IDE7ICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJCA9IEhbMF07XG4gICAgICAgICAgICAgICAgICAgIEguc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgXyA9IFYuaW5kZXhPZigkKTtcbiAgICAgICAgICAgICAgICAgICAgXyA+PSAwICYmIFYuc3BsaWNlKF8sIDEpLCB6LS0sIFgtLTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG0gIT0gbnVsbCA/IHcgPSAoVi5pbmRleE9mKEhbMF0pICsgMSkgJSB6IDogdyA9IDA7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBodCA9IE1hdGguYWJzKEUgLSBwKSAvIFgsIFEgPSB3OyBldCAhPSBYOyBRID0gKytRICUgeikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgSXQgPSBWW1FdLmdldE90aGVyRW5kKG4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoSXQgIT0gbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBOdCA9IChwICsgZXQgKiBodCkgJSAzNjAsIHZ0ID0gKE50ICsgaHQpICUgMzYwO1xuICAgICAgICAgICAgICAgICAgICAgIE8uYnJhbmNoUmFkaWFsTGF5b3V0KEl0LCBuLCBOdCwgdnQsIHkgKyBSLCBSKSwgZXQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIE8ubWF4RGlhZ29uYWxJblRyZWUgPSBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBtID0gQy5NSU5fVkFMVUUsIHAgPSAwOyBwIDwgbi5sZW5ndGg7IHArKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgRSA9IG5bcF0sIHkgPSBFLmdldERpYWdvbmFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHkgPiBtICYmIChtID0geSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uUmFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAyICogKHRoaXMubGV2ZWwgKyAxKSAqIHRoaXMuaWRlYWxFZGdlTGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLmdyb3VwWmVyb0RlZ3JlZU1lbWJlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcywgbSA9IHt9O1xuICAgICAgICAgICAgICAgICAgdGhpcy5tZW1iZXJHcm91cHMgPSB7fSwgdGhpcy5pZFRvRHVtbXlOb2RlID0ge307XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gW10sIEUgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpLCB5ID0gMDsgeSA8IEUubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFIgPSBFW3ldLCBNID0gUi5nZXRQYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXROb2RlRGVncmVlV2l0aENoaWxkcmVuKFIpID09PSAwICYmIChNLmlkID09IG51bGwgfHwgIXRoaXMuZ2V0VG9CZVRpbGVkKE0pKSAmJiBwLnB1c2goUik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHAubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFIgPSBwW3ldLCBTID0gUi5nZXRQYXJlbnQoKS5pZDtcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIG1bU10gPiBcInVcIiAmJiAobVtTXSA9IFtdKSwgbVtTXSA9IG1bU10uY29uY2F0KFIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobSkuZm9yRWFjaChmdW5jdGlvbihXKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtW1ddLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgRCA9IFwiRHVtbXlDb21wb3VuZF9cIiArIFc7XG4gICAgICAgICAgICAgICAgICAgICAgbi5tZW1iZXJHcm91cHNbRF0gPSBtW1ddO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBxID0gbVtXXVswXS5nZXRQYXJlbnQoKSwgViA9IG5ldyB0KG4uZ3JhcGhNYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICBWLmlkID0gRCwgVi5wYWRkaW5nTGVmdCA9IHEucGFkZGluZ0xlZnQgfHwgMCwgVi5wYWRkaW5nUmlnaHQgPSBxLnBhZGRpbmdSaWdodCB8fCAwLCBWLnBhZGRpbmdCb3R0b20gPSBxLnBhZGRpbmdCb3R0b20gfHwgMCwgVi5wYWRkaW5nVG9wID0gcS5wYWRkaW5nVG9wIHx8IDAsIG4uaWRUb0R1bW15Tm9kZVtEXSA9IFY7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIFggPSBuLmdldEdyYXBoTWFuYWdlcigpLmFkZChuLm5ld0dyYXBoKCksIFYpLCBldCA9IHEuZ2V0Q2hpbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBldC5hZGQoVik7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBtW1ddLmxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IG1bV11bel07XG4gICAgICAgICAgICAgICAgICAgICAgICBldC5yZW1vdmUodyksIFguYWRkKHcpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuY2xlYXJDb21wb3VuZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBuID0ge30sIG0gPSB7fTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybURGU09uQ29tcG91bmRzKCk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHRoaXMuY29tcG91bmRPcmRlci5sZW5ndGg7IHArKylcbiAgICAgICAgICAgICAgICAgICAgbVt0aGlzLmNvbXBvdW5kT3JkZXJbcF0uaWRdID0gdGhpcy5jb21wb3VuZE9yZGVyW3BdLCBuW3RoaXMuY29tcG91bmRPcmRlcltwXS5pZF0gPSBbXS5jb25jYXQodGhpcy5jb21wb3VuZE9yZGVyW3BdLmdldENoaWxkKCkuZ2V0Tm9kZXMoKSksIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZSh0aGlzLmNvbXBvdW5kT3JkZXJbcF0uZ2V0Q2hpbGQoKSksIHRoaXMuY29tcG91bmRPcmRlcltwXS5jaGlsZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzKCksIHRoaXMudGlsZUNvbXBvdW5kTWVtYmVycyhuLCBtKTtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5jbGVhclplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMsIG0gPSB0aGlzLnRpbGVkWmVyb0RlZ3JlZVBhY2sgPSBbXTtcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVtYmVyR3JvdXBzKS5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEUgPSBuLmlkVG9EdW1teU5vZGVbcF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtW3BdID0gbi50aWxlTm9kZXMobi5tZW1iZXJHcm91cHNbcF0sIEUucGFkZGluZ0xlZnQgKyBFLnBhZGRpbmdSaWdodCksIEUucmVjdC53aWR0aCA9IG1bcF0ud2lkdGgsIEUucmVjdC5oZWlnaHQgPSBtW3BdLmhlaWdodCwgRS5zZXRDZW50ZXIobVtwXS5jZW50ZXJYLCBtW3BdLmNlbnRlclkpLCBFLmxhYmVsTWFyZ2luTGVmdCA9IDAsIEUubGFiZWxNYXJnaW5Ub3AgPSAwLCBzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gRS5yZWN0LndpZHRoLCBSID0gRS5yZWN0LmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICBFLmxhYmVsV2lkdGggJiYgKEUubGFiZWxQb3NIb3Jpem9udGFsID09IFwibGVmdFwiID8gKEUucmVjdC54IC09IEUubGFiZWxXaWR0aCwgRS5zZXRXaWR0aCh5ICsgRS5sYWJlbFdpZHRoKSwgRS5sYWJlbE1hcmdpbkxlZnQgPSBFLmxhYmVsV2lkdGgpIDogRS5sYWJlbFBvc0hvcml6b250YWwgPT0gXCJjZW50ZXJcIiAmJiBFLmxhYmVsV2lkdGggPiB5ID8gKEUucmVjdC54IC09IChFLmxhYmVsV2lkdGggLSB5KSAvIDIsIEUuc2V0V2lkdGgoRS5sYWJlbFdpZHRoKSwgRS5sYWJlbE1hcmdpbkxlZnQgPSAoRS5sYWJlbFdpZHRoIC0geSkgLyAyKSA6IEUubGFiZWxQb3NIb3Jpem9udGFsID09IFwicmlnaHRcIiAmJiBFLnNldFdpZHRoKHkgKyBFLmxhYmVsV2lkdGgpKSwgRS5sYWJlbEhlaWdodCAmJiAoRS5sYWJlbFBvc1ZlcnRpY2FsID09IFwidG9wXCIgPyAoRS5yZWN0LnkgLT0gRS5sYWJlbEhlaWdodCwgRS5zZXRIZWlnaHQoUiArIEUubGFiZWxIZWlnaHQpLCBFLmxhYmVsTWFyZ2luVG9wID0gRS5sYWJlbEhlaWdodCkgOiBFLmxhYmVsUG9zVmVydGljYWwgPT0gXCJjZW50ZXJcIiAmJiBFLmxhYmVsSGVpZ2h0ID4gUiA/IChFLnJlY3QueSAtPSAoRS5sYWJlbEhlaWdodCAtIFIpIC8gMiwgRS5zZXRIZWlnaHQoRS5sYWJlbEhlaWdodCksIEUubGFiZWxNYXJnaW5Ub3AgPSAoRS5sYWJlbEhlaWdodCAtIFIpIC8gMikgOiBFLmxhYmVsUG9zVmVydGljYWwgPT0gXCJib3R0b21cIiAmJiBFLnNldEhlaWdodChSICsgRS5sYWJlbEhlaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5yZXBvcHVsYXRlQ29tcG91bmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gdGhpcy5jb21wb3VuZE9yZGVyLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5jb21wb3VuZE9yZGVyW25dLCBwID0gbS5pZCwgRSA9IG0ucGFkZGluZ0xlZnQsIHkgPSBtLnBhZGRpbmdUb3AsIFIgPSBtLmxhYmVsTWFyZ2luTGVmdCwgTSA9IG0ubGFiZWxNYXJnaW5Ub3A7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRqdXN0TG9jYXRpb25zKHRoaXMudGlsZWRNZW1iZXJQYWNrW3BdLCBtLnJlY3QueCwgbS5yZWN0LnksIEUsIHksIFIsIE0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLnJlcG9wdWxhdGVaZXJvRGVncmVlTWVtYmVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLCBtID0gdGhpcy50aWxlZFplcm9EZWdyZWVQYWNrO1xuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobSkuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBFID0gbi5pZFRvRHVtbXlOb2RlW3BdLCB5ID0gRS5wYWRkaW5nTGVmdCwgUiA9IEUucGFkZGluZ1RvcCwgTSA9IEUubGFiZWxNYXJnaW5MZWZ0LCBTID0gRS5sYWJlbE1hcmdpblRvcDtcbiAgICAgICAgICAgICAgICAgICAgbi5hZGp1c3RMb2NhdGlvbnMobVtwXSwgRS5yZWN0LngsIEUucmVjdC55LCB5LCBSLCBNLCBTKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLmdldFRvQmVUaWxlZCA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgIHZhciBtID0gbi5pZDtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvQmVUaWxlZFttXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0JlVGlsZWRbbV07XG4gICAgICAgICAgICAgICAgICB2YXIgcCA9IG4uZ2V0Q2hpbGQoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChwID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmVUaWxlZFttXSA9ICExLCAhMTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIEUgPSBwLmdldE5vZGVzKCksIHkgPSAwOyB5IDwgRS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgUiA9IEVbeV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldE5vZGVEZWdyZWUoUikgPiAwKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmVUaWxlZFttXSA9ICExLCAhMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFIuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50b0JlVGlsZWRbUi5pZF0gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0VG9CZVRpbGVkKFIpKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmVUaWxlZFttXSA9ICExLCAhMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmVUaWxlZFttXSA9ICEwLCAhMDtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5nZXROb2RlRGVncmVlID0gZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgbi5pZDtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gPSBuLmdldEVkZ2VzKCksIHAgPSAwLCBFID0gMDsgRSA8IG0ubGVuZ3RoOyBFKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBtW0VdO1xuICAgICAgICAgICAgICAgICAgICB5LmdldFNvdXJjZSgpLmlkICE9PSB5LmdldFRhcmdldCgpLmlkICYmIChwID0gcCArIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbiA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5nZXROb2RlRGVncmVlKG4pO1xuICAgICAgICAgICAgICAgICAgaWYgKG4uZ2V0Q2hpbGQoKSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSBuLmdldENoaWxkKCkuZ2V0Tm9kZXMoKSwgRSA9IDA7IEUgPCBwLmxlbmd0aDsgRSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcFtFXTtcbiAgICAgICAgICAgICAgICAgICAgbSArPSB0aGlzLmdldE5vZGVEZWdyZWVXaXRoQ2hpbGRyZW4oeSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5wZXJmb3JtREZTT25Db21wb3VuZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG91bmRPcmRlciA9IFtdLCB0aGlzLmZpbGxDb21wZXhPcmRlckJ5REZTKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpKTtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5maWxsQ29tcGV4T3JkZXJCeURGUyA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgbi5sZW5ndGg7IG0rKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IG5bbV07XG4gICAgICAgICAgICAgICAgICAgIHAuZ2V0Q2hpbGQoKSAhPSBudWxsICYmIHRoaXMuZmlsbENvbXBleE9yZGVyQnlERlMocC5nZXRDaGlsZCgpLmdldE5vZGVzKCkpLCB0aGlzLmdldFRvQmVUaWxlZChwKSAmJiB0aGlzLmNvbXBvdW5kT3JkZXIucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5hZGp1c3RMb2NhdGlvbnMgPSBmdW5jdGlvbihuLCBtLCBwLCBFLCB5LCBSLCBNKSB7XG4gICAgICAgICAgICAgICAgICBtICs9IEUgKyBSLCBwICs9IHkgKyBNO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgUyA9IG0sIFcgPSAwOyBXIDwgbi5yb3dzLmxlbmd0aDsgVysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBEID0gbi5yb3dzW1ddO1xuICAgICAgICAgICAgICAgICAgICBtID0gUztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDAsIFYgPSAwOyBWIDwgRC5sZW5ndGg7IFYrKykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBYID0gRFtWXTtcbiAgICAgICAgICAgICAgICAgICAgICBYLnJlY3QueCA9IG0sIFgucmVjdC55ID0gcCwgbSArPSBYLnJlY3Qud2lkdGggKyBuLmhvcml6b250YWxQYWRkaW5nLCBYLnJlY3QuaGVpZ2h0ID4gcSAmJiAocSA9IFgucmVjdC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gcSArIG4udmVydGljYWxQYWRkaW5nO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLnRpbGVDb21wb3VuZE1lbWJlcnMgPSBmdW5jdGlvbihuLCBtKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRpbGVkTWVtYmVyUGFjayA9IFtdLCBPYmplY3Qua2V5cyhuKS5mb3JFYWNoKGZ1bmN0aW9uKEUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBtW0VdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocC50aWxlZE1lbWJlclBhY2tbRV0gPSBwLnRpbGVOb2RlcyhuW0VdLCB5LnBhZGRpbmdMZWZ0ICsgeS5wYWRkaW5nUmlnaHQpLCB5LnJlY3Qud2lkdGggPSBwLnRpbGVkTWVtYmVyUGFja1tFXS53aWR0aCwgeS5yZWN0LmhlaWdodCA9IHAudGlsZWRNZW1iZXJQYWNrW0VdLmhlaWdodCwgeS5zZXRDZW50ZXIocC50aWxlZE1lbWJlclBhY2tbRV0uY2VudGVyWCwgcC50aWxlZE1lbWJlclBhY2tbRV0uY2VudGVyWSksIHkubGFiZWxNYXJnaW5MZWZ0ID0gMCwgeS5sYWJlbE1hcmdpblRvcCA9IDAsIHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIFIgPSB5LnJlY3Qud2lkdGgsIE0gPSB5LnJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgIHkubGFiZWxXaWR0aCAmJiAoeS5sYWJlbFBvc0hvcml6b250YWwgPT0gXCJsZWZ0XCIgPyAoeS5yZWN0LnggLT0geS5sYWJlbFdpZHRoLCB5LnNldFdpZHRoKFIgKyB5LmxhYmVsV2lkdGgpLCB5LmxhYmVsTWFyZ2luTGVmdCA9IHkubGFiZWxXaWR0aCkgOiB5LmxhYmVsUG9zSG9yaXpvbnRhbCA9PSBcImNlbnRlclwiICYmIHkubGFiZWxXaWR0aCA+IFIgPyAoeS5yZWN0LnggLT0gKHkubGFiZWxXaWR0aCAtIFIpIC8gMiwgeS5zZXRXaWR0aCh5LmxhYmVsV2lkdGgpLCB5LmxhYmVsTWFyZ2luTGVmdCA9ICh5LmxhYmVsV2lkdGggLSBSKSAvIDIpIDogeS5sYWJlbFBvc0hvcml6b250YWwgPT0gXCJyaWdodFwiICYmIHkuc2V0V2lkdGgoUiArIHkubGFiZWxXaWR0aCkpLCB5LmxhYmVsSGVpZ2h0ICYmICh5LmxhYmVsUG9zVmVydGljYWwgPT0gXCJ0b3BcIiA/ICh5LnJlY3QueSAtPSB5LmxhYmVsSGVpZ2h0LCB5LnNldEhlaWdodChNICsgeS5sYWJlbEhlaWdodCksIHkubGFiZWxNYXJnaW5Ub3AgPSB5LmxhYmVsSGVpZ2h0KSA6IHkubGFiZWxQb3NWZXJ0aWNhbCA9PSBcImNlbnRlclwiICYmIHkubGFiZWxIZWlnaHQgPiBNID8gKHkucmVjdC55IC09ICh5LmxhYmVsSGVpZ2h0IC0gTSkgLyAyLCB5LnNldEhlaWdodCh5LmxhYmVsSGVpZ2h0KSwgeS5sYWJlbE1hcmdpblRvcCA9ICh5LmxhYmVsSGVpZ2h0IC0gTSkgLyAyKSA6IHkubGFiZWxQb3NWZXJ0aWNhbCA9PSBcImJvdHRvbVwiICYmIHkuc2V0SGVpZ2h0KE0gKyB5LmxhYmVsSGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLnRpbGVOb2RlcyA9IGZ1bmN0aW9uKG4sIG0pIHtcbiAgICAgICAgICAgICAgICAgIHZhciBwID0gdGhpcy50aWxlTm9kZXNCeUZhdm9yaW5nRGltKG4sIG0sICEwKSwgRSA9IHRoaXMudGlsZU5vZGVzQnlGYXZvcmluZ0RpbShuLCBtLCAhMSksIHkgPSB0aGlzLmdldE9yZ1JhdGlvKHApLCBSID0gdGhpcy5nZXRPcmdSYXRpbyhFKSwgTTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBSIDwgeSA/IE0gPSBFIDogTSA9IHAsIE07XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuZ2V0T3JnUmF0aW8gPSBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbSA9IG4ud2lkdGgsIHAgPSBuLmhlaWdodCwgRSA9IG0gLyBwO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEUgPCAxICYmIChFID0gMSAvIEUpLCBFO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLmNhbGNJZGVhbFJvd1dpZHRoID0gZnVuY3Rpb24obiwgbSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHAgPSBzLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMLCBFID0gcy5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMLCB5ID0gbi5sZW5ndGgsIFIgPSAwLCBNID0gMCwgUyA9IDA7XG4gICAgICAgICAgICAgICAgICBuLmZvckVhY2goZnVuY3Rpb24oeikge1xuICAgICAgICAgICAgICAgICAgICBSICs9IHouZ2V0V2lkdGgoKSwgTSArPSB6LmdldEhlaWdodCgpLCB6LmdldFdpZHRoKCkgPiBTICYmIChTID0gei5nZXRXaWR0aCgpKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdmFyIFcgPSBSIC8geSwgRCA9IE0gLyB5LCBxID0gTWF0aC5wb3cocCAtIEUsIDIpICsgNCAqIChXICsgRSkgKiAoRCArIHApICogeSwgViA9IChFIC0gcCArIE1hdGguc3FydChxKSkgLyAoMiAqIChXICsgRSkpLCBYO1xuICAgICAgICAgICAgICAgICAgbSA/IChYID0gTWF0aC5jZWlsKFYpLCBYID09IFYgJiYgWCsrKSA6IFggPSBNYXRoLmZsb29yKFYpO1xuICAgICAgICAgICAgICAgICAgdmFyIGV0ID0gWCAqIChXICsgRSkgLSBFO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFMgPiBldCAmJiAoZXQgPSBTKSwgZXQgKz0gRSAqIDIsIGV0O1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLnRpbGVOb2Rlc0J5RmF2b3JpbmdEaW0gPSBmdW5jdGlvbihuLCBtLCBwKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgRSA9IHMuVElMSU5HX1BBRERJTkdfVkVSVElDQUwsIHkgPSBzLlRJTElOR19QQURESU5HX0hPUklaT05UQUwsIFIgPSBzLlRJTElOR19DT01QQVJFX0JZLCBNID0ge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcm93V2lkdGg6IFtdLFxuICAgICAgICAgICAgICAgICAgICByb3dIZWlnaHQ6IFtdLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBtLFxuICAgICAgICAgICAgICAgICAgICAvLyBhc3N1bWUgbWluSGVpZ2h0IGVxdWFscyB0byBtaW5XaWR0aFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFBhZGRpbmc6IEUsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxQYWRkaW5nOiB5LFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJYOiAwLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJZOiAwXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgUiAmJiAoTS5pZGVhbFJvd1dpZHRoID0gdGhpcy5jYWxjSWRlYWxSb3dXaWR0aChuLCBwKSk7XG4gICAgICAgICAgICAgICAgICB2YXIgUyA9IGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcucmVjdC53aWR0aCAqIHcucmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICB9LCBXID0gZnVuY3Rpb24odywgSCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUyhIKSAtIFModyk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgbi5zb3J0KGZ1bmN0aW9uKHosIHcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEggPSBXO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTS5pZGVhbFJvd1dpZHRoID8gKEggPSBSLCBIKHouaWQsIHcuaWQpKSA6IEgoeiwgdyk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIEQgPSAwLCBxID0gMCwgViA9IDA7IFYgPCBuLmxlbmd0aDsgVisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBYID0gbltWXTtcbiAgICAgICAgICAgICAgICAgICAgRCArPSBYLmdldENlbnRlclgoKSwgcSArPSBYLmdldENlbnRlclkoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIE0uY2VudGVyWCA9IEQgLyBuLmxlbmd0aCwgTS5jZW50ZXJZID0gcSAvIG4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgViA9IDA7IFYgPCBuLmxlbmd0aDsgVisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBYID0gbltWXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE0ucm93cy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydE5vZGVUb1JvdyhNLCBYLCAwLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jYW5BZGRIb3Jpem9udGFsKE0sIFgucmVjdC53aWR0aCwgWC5yZWN0LmhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXQgPSBNLnJvd3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICBNLmlkZWFsUm93V2lkdGggfHwgKGV0ID0gdGhpcy5nZXRTaG9ydGVzdFJvd0luZGV4KE0pKSwgdGhpcy5pbnNlcnROb2RlVG9Sb3coTSwgWCwgZXQsIG0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydE5vZGVUb1JvdyhNLCBYLCBNLnJvd3MubGVuZ3RoLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlmdFRvTGFzdFJvdyhNKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBNO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLmluc2VydE5vZGVUb1JvdyA9IGZ1bmN0aW9uKG4sIG0sIHAsIEUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB5ID0gRTtcbiAgICAgICAgICAgICAgICAgIGlmIChwID09IG4ucm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbi5yb3dzLnB1c2goUiksIG4ucm93V2lkdGgucHVzaCh5KSwgbi5yb3dIZWlnaHQucHVzaCgwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBNID0gbi5yb3dXaWR0aFtwXSArIG0ucmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICAgIG4ucm93c1twXS5sZW5ndGggPiAwICYmIChNICs9IG4uaG9yaXpvbnRhbFBhZGRpbmcpLCBuLnJvd1dpZHRoW3BdID0gTSwgbi53aWR0aCA8IE0gJiYgKG4ud2lkdGggPSBNKTtcbiAgICAgICAgICAgICAgICAgIHZhciBTID0gbS5yZWN0LmhlaWdodDtcbiAgICAgICAgICAgICAgICAgIHAgPiAwICYmIChTICs9IG4udmVydGljYWxQYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgIHZhciBXID0gMDtcbiAgICAgICAgICAgICAgICAgIFMgPiBuLnJvd0hlaWdodFtwXSAmJiAoVyA9IG4ucm93SGVpZ2h0W3BdLCBuLnJvd0hlaWdodFtwXSA9IFMsIFcgPSBuLnJvd0hlaWdodFtwXSAtIFcpLCBuLmhlaWdodCArPSBXLCBuLnJvd3NbcF0ucHVzaChtKTtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5nZXRTaG9ydGVzdFJvd0luZGV4ID0gZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSA9IC0xLCBwID0gTnVtYmVyLk1BWF9WQUxVRSwgRSA9IDA7IEUgPCBuLnJvd3MubGVuZ3RoOyBFKyspXG4gICAgICAgICAgICAgICAgICAgIG4ucm93V2lkdGhbRV0gPCBwICYmIChtID0gRSwgcCA9IG4ucm93V2lkdGhbRV0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuZ2V0TG9uZ2VzdFJvd0luZGV4ID0gZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSA9IC0xLCBwID0gTnVtYmVyLk1JTl9WQUxVRSwgRSA9IDA7IEUgPCBuLnJvd3MubGVuZ3RoOyBFKyspXG4gICAgICAgICAgICAgICAgICAgIG4ucm93V2lkdGhbRV0gPiBwICYmIChtID0gRSwgcCA9IG4ucm93V2lkdGhbRV0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuY2FuQWRkSG9yaXpvbnRhbCA9IGZ1bmN0aW9uKG4sIG0sIHApIHtcbiAgICAgICAgICAgICAgICAgIGlmIChuLmlkZWFsUm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEUgPSBuLnJvd3MubGVuZ3RoIC0gMSwgeSA9IG4ucm93V2lkdGhbRV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5ICsgbSArIG4uaG9yaXpvbnRhbFBhZGRpbmcgPD0gbi5pZGVhbFJvd1dpZHRoO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIFIgPSB0aGlzLmdldFNob3J0ZXN0Um93SW5kZXgobik7XG4gICAgICAgICAgICAgICAgICBpZiAoUiA8IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgIHZhciBNID0gbi5yb3dXaWR0aFtSXTtcbiAgICAgICAgICAgICAgICAgIGlmIChNICsgbi5ob3Jpem9udGFsUGFkZGluZyArIG0gPD0gbi53aWR0aCkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgdmFyIFMgPSAwO1xuICAgICAgICAgICAgICAgICAgbi5yb3dIZWlnaHRbUl0gPCBwICYmIFIgPiAwICYmIChTID0gcCArIG4udmVydGljYWxQYWRkaW5nIC0gbi5yb3dIZWlnaHRbUl0pO1xuICAgICAgICAgICAgICAgICAgdmFyIFc7XG4gICAgICAgICAgICAgICAgICBuLndpZHRoIC0gTSA+PSBtICsgbi5ob3Jpem9udGFsUGFkZGluZyA/IFcgPSAobi5oZWlnaHQgKyBTKSAvIChNICsgbSArIG4uaG9yaXpvbnRhbFBhZGRpbmcpIDogVyA9IChuLmhlaWdodCArIFMpIC8gbi53aWR0aCwgUyA9IHAgKyBuLnZlcnRpY2FsUGFkZGluZztcbiAgICAgICAgICAgICAgICAgIHZhciBEO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ud2lkdGggPCBtID8gRCA9IChuLmhlaWdodCArIFMpIC8gbSA6IEQgPSAobi5oZWlnaHQgKyBTKSAvIG4ud2lkdGgsIEQgPCAxICYmIChEID0gMSAvIEQpLCBXIDwgMSAmJiAoVyA9IDEgLyBXKSwgVyA8IEQ7XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuc2hpZnRUb0xhc3RSb3cgPSBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMuZ2V0TG9uZ2VzdFJvd0luZGV4KG4pLCBwID0gbi5yb3dXaWR0aC5sZW5ndGggLSAxLCBFID0gbi5yb3dzW21dLCB5ID0gRVtFLmxlbmd0aCAtIDFdLCBSID0geS53aWR0aCArIG4uaG9yaXpvbnRhbFBhZGRpbmc7XG4gICAgICAgICAgICAgICAgICBpZiAobi53aWR0aCAtIG4ucm93V2lkdGhbcF0gPiBSICYmIG0gIT0gcCkge1xuICAgICAgICAgICAgICAgICAgICBFLnNwbGljZSgtMSwgMSksIG4ucm93c1twXS5wdXNoKHkpLCBuLnJvd1dpZHRoW21dID0gbi5yb3dXaWR0aFttXSAtIFIsIG4ucm93V2lkdGhbcF0gPSBuLnJvd1dpZHRoW3BdICsgUiwgbi53aWR0aCA9IG4ucm93V2lkdGhbaW5zdGFuY2UuZ2V0TG9uZ2VzdFJvd0luZGV4KG4pXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgTSA9IE51bWJlci5NSU5fVkFMVUUsIFMgPSAwOyBTIDwgRS5sZW5ndGg7IFMrKylcbiAgICAgICAgICAgICAgICAgICAgICBFW1NdLmhlaWdodCA+IE0gJiYgKE0gPSBFW1NdLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIG0gPiAwICYmIChNICs9IG4udmVydGljYWxQYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFcgPSBuLnJvd0hlaWdodFttXSArIG4ucm93SGVpZ2h0W3BdO1xuICAgICAgICAgICAgICAgICAgICBuLnJvd0hlaWdodFttXSA9IE0sIG4ucm93SGVpZ2h0W3BdIDwgeS5oZWlnaHQgKyBuLnZlcnRpY2FsUGFkZGluZyAmJiAobi5yb3dIZWlnaHRbcF0gPSB5LmhlaWdodCArIG4udmVydGljYWxQYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEQgPSBuLnJvd0hlaWdodFttXSArIG4ucm93SGVpZ2h0W3BdO1xuICAgICAgICAgICAgICAgICAgICBuLmhlaWdodCArPSBEIC0gVywgdGhpcy5zaGlmdFRvTGFzdFJvdyhuKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS50aWxpbmdQcmVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHMuVElMRSAmJiAodGhpcy5ncm91cFplcm9EZWdyZWVNZW1iZXJzKCksIHRoaXMuY2xlYXJDb21wb3VuZHMoKSwgdGhpcy5jbGVhclplcm9EZWdyZWVNZW1iZXJzKCkpO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLnRpbGluZ1Bvc3RMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHMuVElMRSAmJiAodGhpcy5yZXBvcHVsYXRlWmVyb0RlZ3JlZU1lbWJlcnMoKSwgdGhpcy5yZXBvcHVsYXRlQ29tcG91bmRzKCkpO1xuICAgICAgICAgICAgICAgIH0sIE8ucHJvdG90eXBlLnJlZHVjZVRyZWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gW10sIG0gPSAhMCwgcDsgbTsgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBFID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKSwgeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBtID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFIgPSAwOyBSIDwgRS5sZW5ndGg7IFIrKylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocCA9IEVbUl0sIHAuZ2V0RWRnZXMoKS5sZW5ndGggPT0gMSAmJiAhcC5nZXRFZGdlcygpWzBdLmlzSW50ZXJHcmFwaCAmJiBwLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuUFVSRV9JTkNSRU1FTlRBTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IHAuZ2V0RWRnZXMoKVswXS5nZXRPdGhlckVuZChwKSwgUyA9IG5ldyBMKHAuZ2V0Q2VudGVyWCgpIC0gTS5nZXRDZW50ZXJYKCksIHAuZ2V0Q2VudGVyWSgpIC0gTS5nZXRDZW50ZXJZKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB5LnB1c2goW3AsIHAuZ2V0RWRnZXMoKVswXSwgcC5nZXRPd25lcigpLCBTXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeS5wdXNoKFtwLCBwLmdldEVkZ2VzKClbMF0sIHAuZ2V0T3duZXIoKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG0gPT0gITApIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBXID0gW10sIEQgPSAwOyBEIDwgeS5sZW5ndGg7IEQrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIHlbRF1bMF0uZ2V0RWRnZXMoKS5sZW5ndGggPT0gMSAmJiAoVy5wdXNoKHlbRF0pLCB5W0RdWzBdLmdldE93bmVyKCkucmVtb3ZlKHlbRF1bMF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICBuLnB1c2goVyksIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKSwgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLnBydW5lZE5vZGVzQWxsID0gbjtcbiAgICAgICAgICAgICAgICB9LCBPLnByb3RvdHlwZS5ncm93VHJlZSA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gPSBuLmxlbmd0aCwgcCA9IG5bbSAtIDFdLCBFLCB5ID0gMDsgeSA8IHAubGVuZ3RoOyB5KyspXG4gICAgICAgICAgICAgICAgICAgIEUgPSBwW3ldLCB0aGlzLmZpbmRQbGFjZWZvclBydW5lZE5vZGUoRSksIEVbMl0uYWRkKEVbMF0pLCBFWzJdLmFkZChFWzFdLCBFWzFdLnNvdXJjZSwgRVsxXS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgbi5zcGxpY2Uobi5sZW5ndGggLSAxLCAxKSwgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpLCB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gICAgICAgICAgICAgICAgfSwgTy5wcm90b3R5cGUuZmluZFBsYWNlZm9yUHJ1bmVkTm9kZSA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgIHZhciBtLCBwLCBFID0gblswXTtcbiAgICAgICAgICAgICAgICAgIGlmIChFID09IG5bMV0uc291cmNlID8gcCA9IG5bMV0udGFyZ2V0IDogcCA9IG5bMV0uc291cmNlLCBzLlBVUkVfSU5DUkVNRU5UQUwpXG4gICAgICAgICAgICAgICAgICAgIEUuc2V0Q2VudGVyKHAuZ2V0Q2VudGVyWCgpICsgblszXS5nZXRXaWR0aCgpLCBwLmdldENlbnRlclkoKSArIG5bM10uZ2V0SGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcC5zdGFydFgsIFIgPSBwLmZpbmlzaFgsIE0gPSBwLnN0YXJ0WSwgUyA9IHAuZmluaXNoWSwgVyA9IDAsIEQgPSAwLCBxID0gMCwgViA9IDAsIFggPSBbVywgcSwgRCwgVl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChNID4gMClcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBldCA9IHk7IGV0IDw9IFI7IGV0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICBYWzBdICs9IHRoaXMuZ3JpZFtldF1bTSAtIDFdLmxlbmd0aCArIHRoaXMuZ3JpZFtldF1bTV0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFIgPCB0aGlzLmdyaWQubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBldCA9IE07IGV0IDw9IFM7IGV0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICBYWzFdICs9IHRoaXMuZ3JpZFtSICsgMV1bZXRdLmxlbmd0aCArIHRoaXMuZ3JpZFtSXVtldF0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFMgPCB0aGlzLmdyaWRbMF0ubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBldCA9IHk7IGV0IDw9IFI7IGV0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICBYWzJdICs9IHRoaXMuZ3JpZFtldF1bUyArIDFdLmxlbmd0aCArIHRoaXMuZ3JpZFtldF1bU10ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPiAwKVxuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGV0ID0gTTsgZXQgPD0gUzsgZXQrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIFhbM10gKz0gdGhpcy5ncmlkW3kgLSAxXVtldF0ubGVuZ3RoICsgdGhpcy5ncmlkW3ldW2V0XS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB6ID0gQy5NQVhfVkFMVUUsIHcsIEgsICQgPSAwOyAkIDwgWC5sZW5ndGg7ICQrKylcbiAgICAgICAgICAgICAgICAgICAgICBYWyRdIDwgeiA/ICh6ID0gWFskXSwgdyA9IDEsIEggPSAkKSA6IFhbJF0gPT0geiAmJiB3Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3ID09IDMgJiYgeiA9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgIFhbMF0gPT0gMCAmJiBYWzFdID09IDAgJiYgWFsyXSA9PSAwID8gbSA9IDEgOiBYWzBdID09IDAgJiYgWFsxXSA9PSAwICYmIFhbM10gPT0gMCA/IG0gPSAwIDogWFswXSA9PSAwICYmIFhbMl0gPT0gMCAmJiBYWzNdID09IDAgPyBtID0gMyA6IFhbMV0gPT0gMCAmJiBYWzJdID09IDAgJiYgWFszXSA9PSAwICYmIChtID0gMik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHcgPT0gMiAmJiB6ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgXyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICAgIFhbMF0gPT0gMCAmJiBYWzFdID09IDAgPyBfID09IDAgPyBtID0gMCA6IG0gPSAxIDogWFswXSA9PSAwICYmIFhbMl0gPT0gMCA/IF8gPT0gMCA/IG0gPSAwIDogbSA9IDIgOiBYWzBdID09IDAgJiYgWFszXSA9PSAwID8gXyA9PSAwID8gbSA9IDAgOiBtID0gMyA6IFhbMV0gPT0gMCAmJiBYWzJdID09IDAgPyBfID09IDAgPyBtID0gMSA6IG0gPSAyIDogWFsxXSA9PSAwICYmIFhbM10gPT0gMCA/IF8gPT0gMCA/IG0gPSAxIDogbSA9IDMgOiBfID09IDAgPyBtID0gMiA6IG0gPSAzO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHcgPT0gNCAmJiB6ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgXyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICAgICAgICAgICAgICAgIG0gPSBfO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICBtID0gSDtcbiAgICAgICAgICAgICAgICAgICAgbSA9PSAwID8gRS5zZXRDZW50ZXIocC5nZXRDZW50ZXJYKCksIHAuZ2V0Q2VudGVyWSgpIC0gcC5nZXRIZWlnaHQoKSAvIDIgLSBmLkRFRkFVTFRfRURHRV9MRU5HVEggLSBFLmdldEhlaWdodCgpIC8gMikgOiBtID09IDEgPyBFLnNldENlbnRlcihwLmdldENlbnRlclgoKSArIHAuZ2V0V2lkdGgoKSAvIDIgKyBmLkRFRkFVTFRfRURHRV9MRU5HVEggKyBFLmdldFdpZHRoKCkgLyAyLCBwLmdldENlbnRlclkoKSkgOiBtID09IDIgPyBFLnNldENlbnRlcihwLmdldENlbnRlclgoKSwgcC5nZXRDZW50ZXJZKCkgKyBwLmdldEhlaWdodCgpIC8gMiArIGYuREVGQVVMVF9FREdFX0xFTkdUSCArIEUuZ2V0SGVpZ2h0KCkgLyAyKSA6IEUuc2V0Q2VudGVyKHAuZ2V0Q2VudGVyWCgpIC0gcC5nZXRXaWR0aCgpIC8gMiAtIGYuREVGQVVMVF9FREdFX0xFTkdUSCAtIEUuZ2V0V2lkdGgoKSAvIDIsIHAuZ2V0Q2VudGVyWSgpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBhLmV4cG9ydHMgPSBPO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC8qKiovXG4gICAgICAgICAgICA5OTE6IChcbiAgICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgICAgKChhLCBlLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSByKDU1MSkuRkRMYXlvdXROb2RlLCBpID0gcig1NTEpLklNYXRoO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGcobywgcywgYywgZikge1xuICAgICAgICAgICAgICAgICAgbC5jYWxsKHRoaXMsIG8sIHMsIGMsIGYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgaW4gbClcbiAgICAgICAgICAgICAgICAgIGdbdF0gPSBsW3RdO1xuICAgICAgICAgICAgICAgIGcucHJvdG90eXBlLmNhbGN1bGF0ZURpc3BsYWNlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRMYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2hpbGQoKSAhPSBudWxsICYmIHRoaXMuZml4ZWROb2RlV2VpZ2h0ID8gKHRoaXMuZGlzcGxhY2VtZW50WCArPSBvLmNvb2xpbmdGYWN0b3IgKiAodGhpcy5zcHJpbmdGb3JjZVggKyB0aGlzLnJlcHVsc2lvbkZvcmNlWCArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVgpIC8gdGhpcy5maXhlZE5vZGVXZWlnaHQsIHRoaXMuZGlzcGxhY2VtZW50WSArPSBvLmNvb2xpbmdGYWN0b3IgKiAodGhpcy5zcHJpbmdGb3JjZVkgKyB0aGlzLnJlcHVsc2lvbkZvcmNlWSArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkpIC8gdGhpcy5maXhlZE5vZGVXZWlnaHQpIDogKHRoaXMuZGlzcGxhY2VtZW50WCArPSBvLmNvb2xpbmdGYWN0b3IgKiAodGhpcy5zcHJpbmdGb3JjZVggKyB0aGlzLnJlcHVsc2lvbkZvcmNlWCArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVgpIC8gdGhpcy5ub09mQ2hpbGRyZW4sIHRoaXMuZGlzcGxhY2VtZW50WSArPSBvLmNvb2xpbmdGYWN0b3IgKiAodGhpcy5zcHJpbmdGb3JjZVkgKyB0aGlzLnJlcHVsc2lvbkZvcmNlWSArIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkpIC8gdGhpcy5ub09mQ2hpbGRyZW4pLCBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFgpID4gby5jb29saW5nRmFjdG9yICogby5tYXhOb2RlRGlzcGxhY2VtZW50ICYmICh0aGlzLmRpc3BsYWNlbWVudFggPSBvLmNvb2xpbmdGYWN0b3IgKiBvLm1heE5vZGVEaXNwbGFjZW1lbnQgKiBpLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRYKSksIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WSkgPiBvLmNvb2xpbmdGYWN0b3IgKiBvLm1heE5vZGVEaXNwbGFjZW1lbnQgJiYgKHRoaXMuZGlzcGxhY2VtZW50WSA9IG8uY29vbGluZ0ZhY3RvciAqIG8ubWF4Tm9kZURpc3BsYWNlbWVudCAqIGkuc2lnbih0aGlzLmRpc3BsYWNlbWVudFkpKSwgdGhpcy5jaGlsZCAmJiB0aGlzLmNoaWxkLmdldE5vZGVzKCkubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4odGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICAgICAgICAgICAgICAgIH0sIGcucHJvdG90eXBlLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4gPSBmdW5jdGlvbihvLCBzKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gdGhpcy5nZXRDaGlsZCgpLmdldE5vZGVzKCksIGYsIFQgPSAwOyBUIDwgYy5sZW5ndGg7IFQrKylcbiAgICAgICAgICAgICAgICAgICAgZiA9IGNbVF0sIGYuZ2V0Q2hpbGQoKSA9PSBudWxsID8gKGYuZGlzcGxhY2VtZW50WCArPSBvLCBmLmRpc3BsYWNlbWVudFkgKz0gcykgOiBmLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4obywgcyk7XG4gICAgICAgICAgICAgICAgfSwgZy5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRMYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICh0aGlzLmNoaWxkID09IG51bGwgfHwgdGhpcy5jaGlsZC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKSAmJiAodGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpLCBvLnRvdGFsRGlzcGxhY2VtZW50ICs9IE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgKyBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFkpKSwgdGhpcy5zcHJpbmdGb3JjZVggPSAwLCB0aGlzLnNwcmluZ0ZvcmNlWSA9IDAsIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMCwgdGhpcy5yZXB1bHNpb25Gb3JjZVkgPSAwLCB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYID0gMCwgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDAsIHRoaXMuZGlzcGxhY2VtZW50WCA9IDAsIHRoaXMuZGlzcGxhY2VtZW50WSA9IDA7XG4gICAgICAgICAgICAgICAgfSwgZy5wcm90b3R5cGUuc2V0UHJlZDEgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnByZWQxID0gbztcbiAgICAgICAgICAgICAgICB9LCBnLnByb3RvdHlwZS5nZXRQcmVkMSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZWQxO1xuICAgICAgICAgICAgICAgIH0sIGcucHJvdG90eXBlLmdldFByZWQyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcHJlZDI7XG4gICAgICAgICAgICAgICAgfSwgZy5wcm90b3R5cGUuc2V0TmV4dCA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IG87XG4gICAgICAgICAgICAgICAgfSwgZy5wcm90b3R5cGUuZ2V0TmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICAgICAgfSwgZy5wcm90b3R5cGUuc2V0UHJvY2Vzc2VkID0gZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSBvO1xuICAgICAgICAgICAgICAgIH0sIGcucHJvdG90eXBlLmlzUHJvY2Vzc2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICAgICAgICAgICAgICAgIH0sIGEuZXhwb3J0cyA9IGc7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgIDkwMjogKFxuICAgICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgICAoKGEsIGUsIHIpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGMpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGYgPSAwLCBUID0gQXJyYXkoYy5sZW5ndGgpOyBmIDwgYy5sZW5ndGg7IGYrKylcbiAgICAgICAgICAgICAgICAgICAgICBUW2ZdID0gY1tmXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFQ7XG4gICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBpID0gcig4MDYpLCBnID0gcig1NTEpLkxpbmtlZExpc3QsIHQgPSByKDU1MSkuTWF0cml4LCBvID0gcig1NTEpLlNWRDtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKCkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLmhhbmRsZUNvbnN0cmFpbnRzID0gZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgICAgICAgdmFyIGYgPSB7fTtcbiAgICAgICAgICAgICAgICAgIGYuZml4ZWROb2RlQ29uc3RyYWludCA9IGMuY29uc3RyYWludHMuZml4ZWROb2RlQ29uc3RyYWludCwgZi5hbGlnbm1lbnRDb25zdHJhaW50ID0gYy5jb25zdHJhaW50cy5hbGlnbm1lbnRDb25zdHJhaW50LCBmLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCA9IGMuY29uc3RyYWludHMucmVsYXRpdmVQbGFjZW1lbnRDb25zdHJhaW50O1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgVCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIGQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB2ID0gW10sIEwgPSBbXSwgYiA9IGMuZ2V0QWxsTm9kZXMoKSwgQyA9IDAsIEcgPSAwOyBHIDwgYi5sZW5ndGg7IEcrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgWiA9IGJbR107XG4gICAgICAgICAgICAgICAgICAgIFouZ2V0Q2hpbGQoKSA9PSBudWxsICYmIChkLnNldChaLmlkLCBDKyspLCB2LnB1c2goWi5nZXRDZW50ZXJYKCkpLCBMLnB1c2goWi5nZXRDZW50ZXJZKCkpLCBULnNldChaLmlkLCBaKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCAmJiBmLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludC5mb3JFYWNoKGZ1bmN0aW9uKEYpIHtcbiAgICAgICAgICAgICAgICAgICAgIUYuZ2FwICYmIEYuZ2FwICE9IDAgJiYgKEYubGVmdCA/IEYuZ2FwID0gaS5ERUZBVUxUX0VER0VfTEVOR1RIICsgVC5nZXQoRi5sZWZ0KS5nZXRXaWR0aCgpIC8gMiArIFQuZ2V0KEYucmlnaHQpLmdldFdpZHRoKCkgLyAyIDogRi5nYXAgPSBpLkRFRkFVTFRfRURHRV9MRU5HVEggKyBULmdldChGLnRvcCkuZ2V0SGVpZ2h0KCkgLyAyICsgVC5nZXQoRi5ib3R0b20pLmdldEhlaWdodCgpIC8gMik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHZhciBZID0gZnVuY3Rpb24oVSwgQikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB4OiBVLnggLSBCLngsIHk6IFUueSAtIEIueSB9O1xuICAgICAgICAgICAgICAgICAgfSwgSyA9IGZ1bmN0aW9uKFUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEIgPSAwLCBKID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFUuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgQiArPSB2W2QuZ2V0KGspXSwgSiArPSBMW2QuZ2V0KGspXTtcbiAgICAgICAgICAgICAgICAgICAgfSksIHsgeDogQiAvIFUuc2l6ZSwgeTogSiAvIFUuc2l6ZSB9O1xuICAgICAgICAgICAgICAgICAgfSwgTyA9IGZ1bmN0aW9uKFUsIEIsIEosIGssIGF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGN0KGx0LCBvdCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBMdCA9IG5ldyBTZXQobHQpLCBmdCA9ICEwLCBzdCA9ICExLCBYdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgVHQgPSBvdFtTeW1ib2wuaXRlcmF0b3JdKCksIEN0OyAhKGZ0ID0gKEN0ID0gVHQubmV4dCgpKS5kb25lKTsgZnQgPSAhMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHQgPSBDdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTHQuYWRkKCR0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChidCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3QgPSAhMCwgWHQgPSBidDtcbiAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ0ICYmIFR0LnJldHVybiAmJiBUdC5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBYdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBudCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIFUuZm9yRWFjaChmdW5jdGlvbihsdCwgb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICBudC5zZXQob3QsIDApO1xuICAgICAgICAgICAgICAgICAgICB9KSwgVS5mb3JFYWNoKGZ1bmN0aW9uKGx0LCBvdCkge1xuICAgICAgICAgICAgICAgICAgICAgIGx0LmZvckVhY2goZnVuY3Rpb24oTHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50LnNldChMdC5pZCwgbnQuZ2V0KEx0LmlkKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgaiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIHV0ID0gbmV3IGcoKTtcbiAgICAgICAgICAgICAgICAgICAgbnQuZm9yRWFjaChmdW5jdGlvbihsdCwgb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICBsdCA9PSAwID8gKHV0LnB1c2gob3QpLCBKIHx8IChCID09IFwiaG9yaXpvbnRhbFwiID8gdHQuc2V0KG90LCBkLmhhcyhvdCkgPyB2W2QuZ2V0KG90KV0gOiBrLmdldChvdCkpIDogdHQuc2V0KG90LCBkLmhhcyhvdCkgPyBMW2QuZ2V0KG90KV0gOiBrLmdldChvdCkpKSkgOiB0dC5zZXQob3QsIE51bWJlci5ORUdBVElWRV9JTkZJTklUWSksIEogJiYgai5zZXQob3QsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtvdF0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIEogJiYgYXQuZm9yRWFjaChmdW5jdGlvbihsdCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBvdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChsdC5mb3JFYWNoKGZ1bmN0aW9uKHN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBKLmhhcyhzdCkgJiYgb3QucHVzaChzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSksIG90Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBMdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdC5mb3JFYWNoKGZ1bmN0aW9uKHN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEIgPT0gXCJob3Jpem9udGFsXCIgPyAodHQuc2V0KHN0LCBkLmhhcyhzdCkgPyB2W2QuZ2V0KHN0KV0gOiBrLmdldChzdCkpLCBMdCArPSB0dC5nZXQoc3QpKSA6ICh0dC5zZXQoc3QsIGQuaGFzKHN0KSA/IExbZC5nZXQoc3QpXSA6IGsuZ2V0KHN0KSksIEx0ICs9IHR0LmdldChzdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIEx0ID0gTHQgLyBvdC5sZW5ndGgsIGx0LmZvckVhY2goZnVuY3Rpb24oc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSi5oYXMoc3QpIHx8IHR0LnNldChzdCwgTHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsdC5mb3JFYWNoKGZ1bmN0aW9uKHN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEIgPT0gXCJob3Jpem9udGFsXCIgPyBmdCArPSBkLmhhcyhzdCkgPyB2W2QuZ2V0KHN0KV0gOiBrLmdldChzdCkgOiBmdCArPSBkLmhhcyhzdCkgPyBMW2QuZ2V0KHN0KV0gOiBrLmdldChzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgZnQgPSBmdCAvIGx0Lmxlbmd0aCwgbHQuZm9yRWFjaChmdW5jdGlvbihzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0dC5zZXQoc3QsIGZ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIE10ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG90ID0gdXQuc2hpZnQoKSwgTHQgPSBVLmdldChvdCk7XG4gICAgICAgICAgICAgICAgICAgICAgTHQuZm9yRWFjaChmdW5jdGlvbihmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR0LmdldChmdC5pZCkgPCB0dC5nZXQob3QpICsgZnQuZ2FwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSiAmJiBKLmhhcyhmdC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3QgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEIgPT0gXCJob3Jpem9udGFsXCIgPyBzdCA9IGQuaGFzKGZ0LmlkKSA/IHZbZC5nZXQoZnQuaWQpXSA6IGsuZ2V0KGZ0LmlkKSA6IHN0ID0gZC5oYXMoZnQuaWQpID8gTFtkLmdldChmdC5pZCldIDogay5nZXQoZnQuaWQpLCB0dC5zZXQoZnQuaWQsIHN0KSwgc3QgPCB0dC5nZXQob3QpICsgZnQuZ2FwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgWHQgPSB0dC5nZXQob3QpICsgZnQuZ2FwIC0gc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqLmdldChvdCkuZm9yRWFjaChmdW5jdGlvbihUdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dC5zZXQoVHQsIHR0LmdldChUdCkgLSBYdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR0LnNldChmdC5pZCwgdHQuZ2V0KG90KSArIGZ0LmdhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBudC5zZXQoZnQuaWQsIG50LmdldChmdC5pZCkgLSAxKSwgbnQuZ2V0KGZ0LmlkKSA9PSAwICYmIHV0LnB1c2goZnQuaWQpLCBKICYmIGouc2V0KGZ0LmlkLCBjdChqLmdldChvdCksIGouZ2V0KGZ0LmlkKSkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9OyB1dC5sZW5ndGggIT0gMDsgKVxuICAgICAgICAgICAgICAgICAgICAgIE10KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChKKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHB0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBVLmZvckVhY2goZnVuY3Rpb24obHQsIG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsdC5sZW5ndGggPT0gMCAmJiBwdC5hZGQob3QpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB4dCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIGouZm9yRWFjaChmdW5jdGlvbihsdCwgb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdC5oYXMob3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBMdCA9ICExLCBmdCA9ICEwLCBzdCA9ICExLCBYdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBUdCA9IGx0W1N5bWJvbC5pdGVyYXRvcl0oKSwgQ3Q7ICEoZnQgPSAoQ3QgPSBUdC5uZXh0KCkpLmRvbmUpOyBmdCA9ICEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHQgPSBDdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEouaGFzKCR0KSAmJiAoTHQgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChTdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ID0gITAsIFh0ID0gU3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFmdCAmJiBUdC5yZXR1cm4gJiYgVHQucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgWHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnQgPSAhMSwgenQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeHQuZm9yRWFjaChmdW5jdGlvbihTdCwga3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0LmhhcyhbXS5jb25jYXQobChsdCkpWzBdKSAmJiAoYnQgPSAhMCwgenQgPSBrdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGJ0ID8gbHQuZm9yRWFjaChmdW5jdGlvbihTdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeHRbenRdLmFkZChTdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiB4dC5wdXNoKG5ldyBTZXQobHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLCB4dC5mb3JFYWNoKGZ1bmN0aW9uKGx0LCBvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEx0ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBmdCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgc3QgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksIFh0ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCBUdCA9ICEwLCBDdCA9ICExLCAkdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGJ0ID0gbHRbU3ltYm9sLml0ZXJhdG9yXSgpLCB6dDsgIShUdCA9ICh6dCA9IGJ0Lm5leHQoKSkuZG9uZSk7IFR0ID0gITApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgU3QgPSB6dC52YWx1ZSwga3QgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQiA9PSBcImhvcml6b250YWxcIiA/IGt0ID0gZC5oYXMoU3QpID8gdltkLmdldChTdCldIDogay5nZXQoU3QpIDoga3QgPSBkLmhhcyhTdCkgPyBMW2QuZ2V0KFN0KV0gOiBrLmdldChTdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEt0ID0gdHQuZ2V0KFN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrdCA8IEx0ICYmIChMdCA9IGt0KSwga3QgPiBzdCAmJiAoc3QgPSBrdCksIEt0IDwgZnQgJiYgKGZ0ID0gS3QpLCBLdCA+IFh0ICYmIChYdCA9IEt0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ3QgPSAhMCwgJHQgPSBlZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIVR0ICYmIGJ0LnJldHVybiAmJiBidC5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNlID0gKEx0ICsgc3QpIC8gMiAtIChmdCArIFh0KSAvIDIsIFF0ID0gITAsIGp0ID0gITEsIF90ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgSnQgPSBsdFtTeW1ib2wuaXRlcmF0b3JdKCksIG9lOyAhKFF0ID0gKG9lID0gSnQubmV4dCgpKS5kb25lKTsgUXQgPSAhMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZSA9IG9lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR0LnNldCh0ZSwgdHQuZ2V0KHRlKSArIGNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAganQgPSAhMCwgX3QgPSBlZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIVF0ICYmIEp0LnJldHVybiAmJiBKdC5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoanQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0dDtcbiAgICAgICAgICAgICAgICAgIH0sIGl0ID0gZnVuY3Rpb24oVSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgQiA9IDAsIEogPSAwLCBrID0gMCwgYXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoVS5mb3JFYWNoKGZ1bmN0aW9uKGopIHtcbiAgICAgICAgICAgICAgICAgICAgICBqLmxlZnQgPyB2W2QuZ2V0KGoubGVmdCldIC0gdltkLmdldChqLnJpZ2h0KV0gPj0gMCA/IEIrKyA6IEorKyA6IExbZC5nZXQoai50b3ApXSAtIExbZC5nZXQoai5ib3R0b20pXSA+PSAwID8gaysrIDogYXQrKztcbiAgICAgICAgICAgICAgICAgICAgfSksIEIgPiBKICYmIGsgPiBhdClcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjdCA9IDA7IGN0IDwgZC5zaXplOyBjdCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgdltjdF0gPSAtMSAqIHZbY3RdLCBMW2N0XSA9IC0xICogTFtjdF07XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEIgPiBKKVxuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG50ID0gMDsgbnQgPCBkLnNpemU7IG50KyspXG4gICAgICAgICAgICAgICAgICAgICAgICB2W250XSA9IC0xICogdltudF07XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGsgPiBhdClcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0dCA9IDA7IHR0IDwgZC5zaXplOyB0dCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgTFt0dF0gPSAtMSAqIExbdHRdO1xuICAgICAgICAgICAgICAgICAgfSwgbiA9IGZ1bmN0aW9uKFUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEIgPSBbXSwgSiA9IG5ldyBnKCksIGsgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLCBhdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVLmZvckVhY2goZnVuY3Rpb24oY3QsIG50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFrLmhhcyhudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJbYXRdID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHQgPSBudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoSi5wdXNoKHR0KSwgay5hZGQodHQpLCBCW2F0XS5wdXNoKHR0KTsgSi5sZW5ndGggIT0gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR0ID0gSi5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaiA9IFUuZ2V0KHR0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgai5mb3JFYWNoKGZ1bmN0aW9uKHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgay5oYXModXQuaWQpIHx8IChKLnB1c2godXQuaWQpLCBrLmFkZCh1dC5pZCksIEJbYXRdLnB1c2godXQuaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdCsrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksIEI7XG4gICAgICAgICAgICAgICAgICB9LCBtID0gZnVuY3Rpb24oVSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgQiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVLmZvckVhY2goZnVuY3Rpb24oSiwgaykge1xuICAgICAgICAgICAgICAgICAgICAgIEIuc2V0KGssIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIFUuZm9yRWFjaChmdW5jdGlvbihKLCBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgSi5mb3JFYWNoKGZ1bmN0aW9uKGF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBCLmdldChrKS5wdXNoKGF0KSwgQi5nZXQoYXQuaWQpLnB1c2goeyBpZDogaywgZ2FwOiBhdC5nYXAsIGRpcmVjdGlvbjogYXQuZGlyZWN0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KSwgQjtcbiAgICAgICAgICAgICAgICAgIH0sIHAgPSBmdW5jdGlvbihVKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBCID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFUuZm9yRWFjaChmdW5jdGlvbihKLCBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgQi5zZXQoaywgW10pO1xuICAgICAgICAgICAgICAgICAgICB9KSwgVS5mb3JFYWNoKGZ1bmN0aW9uKEosIGspIHtcbiAgICAgICAgICAgICAgICAgICAgICBKLmZvckVhY2goZnVuY3Rpb24oYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEIuZ2V0KGF0LmlkKS5wdXNoKHsgaWQ6IGssIGdhcDogYXQuZ2FwLCBkaXJlY3Rpb246IGF0LmRpcmVjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSksIEI7XG4gICAgICAgICAgICAgICAgICB9LCBFID0gW10sIHkgPSBbXSwgUiA9ICExLCBNID0gITEsIFMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLCBXID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgRCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIHEgPSBbXTtcbiAgICAgICAgICAgICAgICAgIGlmIChmLmZpeGVkTm9kZUNvbnN0cmFpbnQgJiYgZi5maXhlZE5vZGVDb25zdHJhaW50LmZvckVhY2goZnVuY3Rpb24oRikge1xuICAgICAgICAgICAgICAgICAgICBTLmFkZChGLm5vZGVJZCk7XG4gICAgICAgICAgICAgICAgICB9KSwgZi5yZWxhdGl2ZVBsYWNlbWVudENvbnN0cmFpbnQgJiYgKGYucmVsYXRpdmVQbGFjZW1lbnRDb25zdHJhaW50LmZvckVhY2goZnVuY3Rpb24oRikge1xuICAgICAgICAgICAgICAgICAgICBGLmxlZnQgPyAoVy5oYXMoRi5sZWZ0KSA/IFcuZ2V0KEYubGVmdCkucHVzaCh7IGlkOiBGLnJpZ2h0LCBnYXA6IEYuZ2FwLCBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiIH0pIDogVy5zZXQoRi5sZWZ0LCBbeyBpZDogRi5yaWdodCwgZ2FwOiBGLmdhcCwgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIiB9XSksIFcuaGFzKEYucmlnaHQpIHx8IFcuc2V0KEYucmlnaHQsIFtdKSkgOiAoVy5oYXMoRi50b3ApID8gVy5nZXQoRi50b3ApLnB1c2goeyBpZDogRi5ib3R0b20sIGdhcDogRi5nYXAsIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiIH0pIDogVy5zZXQoRi50b3AsIFt7IGlkOiBGLmJvdHRvbSwgZ2FwOiBGLmdhcCwgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIgfV0pLCBXLmhhcyhGLmJvdHRvbSkgfHwgVy5zZXQoRi5ib3R0b20sIFtdKSk7XG4gICAgICAgICAgICAgICAgICB9KSwgRCA9IG0oVyksIHEgPSBuKEQpKSwgaS5UUkFOU0ZPUk1fT05fQ09OU1RSQUlOVF9IQU5ETElORykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZi5maXhlZE5vZGVDb25zdHJhaW50ICYmIGYuZml4ZWROb2RlQ29uc3RyYWludC5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICAgICAgICAgIGYuZml4ZWROb2RlQ29uc3RyYWludC5mb3JFYWNoKGZ1bmN0aW9uKEYsIFUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEVbVV0gPSBbRi5wb3NpdGlvbi54LCBGLnBvc2l0aW9uLnldLCB5W1VdID0gW3ZbZC5nZXQoRi5ub2RlSWQpXSwgTFtkLmdldChGLm5vZGVJZCldXTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgUiA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmLmFsaWdubWVudENvbnN0cmFpbnQpXG4gICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEYgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYuYWxpZ25tZW50Q29uc3RyYWludC52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBVID0gZi5hbGlnbm1lbnRDb25zdHJhaW50LnZlcnRpY2FsLCBCID0gZnVuY3Rpb24odHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVt0dF0uZm9yRWFjaChmdW5jdGlvbihwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgai5hZGQocHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1dCA9IG5ldyBTZXQoW10uY29uY2F0KGwoaikpLmZpbHRlcihmdW5jdGlvbihwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFMuaGFzKHB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIE10ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0LnNpemUgPiAwID8gTXQgPSB2W2QuZ2V0KHV0LnZhbHVlcygpLm5leHQoKS52YWx1ZSldIDogTXQgPSBLKGopLngsIFVbdHRdLmZvckVhY2goZnVuY3Rpb24ocHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVbRl0gPSBbTXQsIExbZC5nZXQocHQpXV0sIHlbRl0gPSBbdltkLmdldChwdCldLCBMW2QuZ2V0KHB0KV1dLCBGKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIEogPSAwOyBKIDwgVS5sZW5ndGg7IEorKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCKEopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBSID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZi5hbGlnbm1lbnRDb25zdHJhaW50Lmhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IGYuYWxpZ25tZW50Q29uc3RyYWludC5ob3Jpem9udGFsLCBhdCA9IGZ1bmN0aW9uKHR0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGogPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtbdHRdLmZvckVhY2goZnVuY3Rpb24ocHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGouYWRkKHB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXQgPSBuZXcgU2V0KFtdLmNvbmNhdChsKGopKS5maWx0ZXIoZnVuY3Rpb24ocHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTLmhhcyhwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBNdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dC5zaXplID4gMCA/IE10ID0gdltkLmdldCh1dC52YWx1ZXMoKS5uZXh0KCkudmFsdWUpXSA6IE10ID0gSyhqKS55LCBrW3R0XS5mb3JFYWNoKGZ1bmN0aW9uKHB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFW0ZdID0gW3ZbZC5nZXQocHQpXSwgTXRdLCB5W0ZdID0gW3ZbZC5nZXQocHQpXSwgTFtkLmdldChwdCldXSwgRisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBjdCA9IDA7IGN0IDwgay5sZW5ndGg7IGN0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQoY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBSID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCAmJiAoTSA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCkge1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFYgPSAwLCBYID0gMCwgZXQgPSAwOyBldCA8IHEubGVuZ3RoOyBldCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgcVtldF0ubGVuZ3RoID4gViAmJiAoViA9IHFbZXRdLmxlbmd0aCwgWCA9IGV0KTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoViA8IEQuc2l6ZSAvIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBpdChmLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCksIFIgPSAhMSwgTSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHogPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB3ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgSCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcVtYXS5mb3JFYWNoKGZ1bmN0aW9uKEYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVy5nZXQoRikuZm9yRWFjaChmdW5jdGlvbihVKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVS5kaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIgPyAoei5oYXMoRikgPyB6LmdldChGKS5wdXNoKFUpIDogei5zZXQoRiwgW1VdKSwgei5oYXMoVS5pZCkgfHwgei5zZXQoVS5pZCwgW10pLCBILnB1c2goeyBsZWZ0OiBGLCByaWdodDogVS5pZCB9KSkgOiAody5oYXMoRikgPyB3LmdldChGKS5wdXNoKFUpIDogdy5zZXQoRiwgW1VdKSwgdy5oYXMoVS5pZCkgfHwgdy5zZXQoVS5pZCwgW10pLCBILnB1c2goeyB0b3A6IEYsIGJvdHRvbTogVS5pZCB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGl0KEgpLCBNID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCA9IE8oeiwgXCJob3Jpem9udGFsXCIpLCBfID0gTyh3LCBcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcVtYXS5mb3JFYWNoKGZ1bmN0aW9uKEYsIFUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeVtVXSA9IFt2W2QuZ2V0KEYpXSwgTFtkLmdldChGKV1dLCBFW1VdID0gW10sICQuaGFzKEYpID8gRVtVXVswXSA9ICQuZ2V0KEYpIDogRVtVXVswXSA9IHZbZC5nZXQoRildLCBfLmhhcyhGKSA/IEVbVV1bMV0gPSBfLmdldChGKSA6IEVbVV1bMV0gPSBMW2QuZ2V0KEYpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaHQgPSB2b2lkIDAsIFEgPSB0LnRyYW5zcG9zZShFKSwgSXQgPSB0LnRyYW5zcG9zZSh5KSwgTnQgPSAwOyBOdCA8IFEubGVuZ3RoOyBOdCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgUVtOdF0gPSB0Lm11bHRHYW1tYShRW050XSksIEl0W050XSA9IHQubXVsdEdhbW1hKEl0W050XSk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZ0ID0gdC5tdWx0TWF0KFEsIHQudHJhbnNwb3NlKEl0KSksIHJ0ID0gby5zdmQodnQpO1xuICAgICAgICAgICAgICAgICAgICAgIGh0ID0gdC5tdWx0TWF0KHJ0LlYsIHQudHJhbnNwb3NlKHJ0LlUpKTtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBndCA9IDA7IGd0IDwgZC5zaXplOyBndCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXQgPSBbdltndF0sIExbZ3RdXSwgQXQgPSBbaHRbMF1bMF0sIGh0WzFdWzBdXSwgT3QgPSBbaHRbMF1bMV0sIGh0WzFdWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZbZ3RdID0gdC5kb3RQcm9kdWN0KG10LCBBdCksIExbZ3RdID0gdC5kb3RQcm9kdWN0KG10LCBPdCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIE0gJiYgaXQoZi5yZWxhdGl2ZVBsYWNlbWVudENvbnN0cmFpbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoaS5FTkZPUkNFX0NPTlNUUkFJTlRTKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmLmZpeGVkTm9kZUNvbnN0cmFpbnQgJiYgZi5maXhlZE5vZGVDb25zdHJhaW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgRXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgICAgICAgICAgICAgICBmLmZpeGVkTm9kZUNvbnN0cmFpbnQuZm9yRWFjaChmdW5jdGlvbihGLCBVKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQiA9IHsgeDogdltkLmdldChGLm5vZGVJZCldLCB5OiBMW2QuZ2V0KEYubm9kZUlkKV0gfSwgSiA9IEYucG9zaXRpb24sIGsgPSBZKEosIEIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgRXQueCArPSBrLngsIEV0LnkgKz0gay55O1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBFdC54IC89IGYuZml4ZWROb2RlQ29uc3RyYWludC5sZW5ndGgsIEV0LnkgLz0gZi5maXhlZE5vZGVDb25zdHJhaW50Lmxlbmd0aCwgdi5mb3JFYWNoKGZ1bmN0aW9uKEYsIFUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZbVV0gKz0gRXQueDtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgTC5mb3JFYWNoKGZ1bmN0aW9uKEYsIFUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExbVV0gKz0gRXQueTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgZi5maXhlZE5vZGVDb25zdHJhaW50LmZvckVhY2goZnVuY3Rpb24oRikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdltkLmdldChGLm5vZGVJZCldID0gRi5wb3NpdGlvbi54LCBMW2QuZ2V0KEYubm9kZUlkKV0gPSBGLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGYuYWxpZ25tZW50Q29uc3RyYWludCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmLmFsaWdubWVudENvbnN0cmFpbnQudmVydGljYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBEdCA9IGYuYWxpZ25tZW50Q29uc3RyYWludC52ZXJ0aWNhbCwgUnQgPSBmdW5jdGlvbihVKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBCID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRHRbVV0uZm9yRWFjaChmdW5jdGlvbihhdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEIuYWRkKGF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBKID0gbmV3IFNldChbXS5jb25jYXQobChCKSkuZmlsdGVyKGZ1bmN0aW9uKGF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFMuaGFzKGF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBKLnNpemUgPiAwID8gayA9IHZbZC5nZXQoSi52YWx1ZXMoKS5uZXh0KCkudmFsdWUpXSA6IGsgPSBLKEIpLngsIEIuZm9yRWFjaChmdW5jdGlvbihhdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMuaGFzKGF0KSB8fCAodltkLmdldChhdCldID0gayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgSHQgPSAwOyBIdCA8IER0Lmxlbmd0aDsgSHQrKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUnQoSHQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmLmFsaWdubWVudENvbnN0cmFpbnQuaG9yaXpvbnRhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFV0ID0gZi5hbGlnbm1lbnRDb25zdHJhaW50Lmhvcml6b250YWwsIFB0ID0gZnVuY3Rpb24oVSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgQiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFV0W1VdLmZvckVhY2goZnVuY3Rpb24oYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCLmFkZChhdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSiA9IG5ldyBTZXQoW10uY29uY2F0KGwoQikpLmZpbHRlcihmdW5jdGlvbihhdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTLmhhcyhhdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSi5zaXplID4gMCA/IGsgPSBMW2QuZ2V0KEoudmFsdWVzKCkubmV4dCgpLnZhbHVlKV0gOiBrID0gSyhCKS55LCBCLmZvckVhY2goZnVuY3Rpb24oYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTLmhhcyhhdCkgfHwgKExbZC5nZXQoYXQpXSA9IGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIEZ0ID0gMDsgRnQgPCBVdC5sZW5ndGg7IEZ0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFB0KEZ0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIEYgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBVID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgQiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIEogPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBrID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgYXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBjdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksIG50ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoUy5mb3JFYWNoKGZ1bmN0aW9uKEd0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdC5hZGQoR3QpLCBudC5hZGQoR3QpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBmLmFsaWdubWVudENvbnN0cmFpbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmLmFsaWdubWVudENvbnN0cmFpbnQudmVydGljYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHR0ID0gZi5hbGlnbm1lbnRDb25zdHJhaW50LnZlcnRpY2FsLCBqID0gZnVuY3Rpb24oeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCLnNldChcImR1bW15XCIgKyB5dCwgW10pLCB0dFt5dF0uZm9yRWFjaChmdW5jdGlvbih3dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRi5zZXQod3QsIFwiZHVtbXlcIiArIHl0KSwgQi5nZXQoXCJkdW1teVwiICsgeXQpLnB1c2god3QpLCBTLmhhcyh3dCkgJiYgY3QuYWRkKFwiZHVtbXlcIiArIHl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgay5zZXQoXCJkdW1teVwiICsgeXQsIHZbZC5nZXQodHRbeXRdWzBdKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB1dCA9IDA7IHV0IDwgdHQubGVuZ3RoOyB1dCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGoodXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYuYWxpZ25tZW50Q29uc3RyYWludC5ob3Jpem9udGFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBNdCA9IGYuYWxpZ25tZW50Q29uc3RyYWludC5ob3Jpem9udGFsLCBwdCA9IGZ1bmN0aW9uKHl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSi5zZXQoXCJkdW1teVwiICsgeXQsIFtdKSwgTXRbeXRdLmZvckVhY2goZnVuY3Rpb24od3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFUuc2V0KHd0LCBcImR1bW15XCIgKyB5dCksIEouZ2V0KFwiZHVtbXlcIiArIHl0KS5wdXNoKHd0KSwgUy5oYXMod3QpICYmIG50LmFkZChcImR1bW15XCIgKyB5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGF0LnNldChcImR1bW15XCIgKyB5dCwgTFtkLmdldChNdFt5dF1bMF0pXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHh0ID0gMDsgeHQgPCBNdC5sZW5ndGg7IHh0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHQoeHQpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBvdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIEx0ID0gZnVuY3Rpb24oeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFcuZ2V0KHl0KS5mb3JFYWNoKGZ1bmN0aW9uKHd0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBadCA9IHZvaWQgMCwgQnQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHd0LmRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIiA/IChadCA9IEYuZ2V0KHl0KSA/IEYuZ2V0KHl0KSA6IHl0LCBGLmdldCh3dC5pZCkgPyBCdCA9IHsgaWQ6IEYuZ2V0KHd0LmlkKSwgZ2FwOiB3dC5nYXAsIGRpcmVjdGlvbjogd3QuZGlyZWN0aW9uIH0gOiBCdCA9IHd0LCBsdC5oYXMoWnQpID8gbHQuZ2V0KFp0KS5wdXNoKEJ0KSA6IGx0LnNldChadCwgW0J0XSksIGx0LmhhcyhCdC5pZCkgfHwgbHQuc2V0KEJ0LmlkLCBbXSkpIDogKFp0ID0gVS5nZXQoeXQpID8gVS5nZXQoeXQpIDogeXQsIFUuZ2V0KHd0LmlkKSA/IEJ0ID0geyBpZDogVS5nZXQod3QuaWQpLCBnYXA6IHd0LmdhcCwgZGlyZWN0aW9uOiB3dC5kaXJlY3Rpb24gfSA6IEJ0ID0gd3QsIG90LmhhcyhadCkgPyBvdC5nZXQoWnQpLnB1c2goQnQpIDogb3Quc2V0KFp0LCBbQnRdKSwgb3QuaGFzKEJ0LmlkKSB8fCBvdC5zZXQoQnQuaWQsIFtdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9LCBmdCA9ICEwLCBzdCA9ICExLCBYdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgVHQgPSBXLmtleXMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIEN0OyAhKGZ0ID0gKEN0ID0gVHQubmV4dCgpKS5kb25lKTsgZnQgPSAhMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHQgPSBDdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTHQoJHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKEd0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdCA9ICEwLCBYdCA9IEd0O1xuICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAhZnQgJiYgVHQucmV0dXJuICYmIFR0LnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgYnQgPSBtKGx0KSwgenQgPSBtKG90KSwgU3QgPSBuKGJ0KSwga3QgPSBuKHp0KSwgS3QgPSBwKGx0KSwgY2UgPSBwKG90KSwgUXQgPSBbXSwganQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICBTdC5mb3JFYWNoKGZ1bmN0aW9uKEd0LCB5dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUXRbeXRdID0gW10sIEd0LmZvckVhY2goZnVuY3Rpb24od3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgS3QuZ2V0KHd0KS5sZW5ndGggPT0gMCAmJiBRdFt5dF0ucHVzaCh3dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwga3QuZm9yRWFjaChmdW5jdGlvbihHdCwgeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp0W3l0XSA9IFtdLCBHdC5mb3JFYWNoKGZ1bmN0aW9uKHd0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNlLmdldCh3dCkubGVuZ3RoID09IDAgJiYganRbeXRdLnB1c2god3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF90ID0gTyhsdCwgXCJob3Jpem9udGFsXCIsIGN0LCBrLCBRdCksIEp0ID0gTyhvdCwgXCJ2ZXJ0aWNhbFwiLCBudCwgYXQsIGp0KSwgb2UgPSBmdW5jdGlvbih5dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQi5nZXQoeXQpID8gQi5nZXQoeXQpLmZvckVhY2goZnVuY3Rpb24od3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdltkLmdldCh3dCldID0gX3QuZ2V0KHl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogdltkLmdldCh5dCldID0gX3QuZ2V0KHl0KTtcbiAgICAgICAgICAgICAgICAgICAgICB9LCB0ZSA9ICEwLCBlZSA9ICExLCBOZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZ2UgPSBfdC5rZXlzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBMZTsgISh0ZSA9IChMZSA9IGdlLm5leHQoKSkuZG9uZSk7IHRlID0gITApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVlID0gTGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9lKHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChHdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWUgPSAhMCwgTmUgPSBHdDtcbiAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXRlICYmIGdlLnJldHVybiAmJiBnZS5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBOZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIEJlID0gZnVuY3Rpb24oeXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEouZ2V0KHl0KSA/IEouZ2V0KHl0KS5mb3JFYWNoKGZ1bmN0aW9uKHd0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIExbZC5nZXQod3QpXSA9IEp0LmdldCh5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA6IExbZC5nZXQoeXQpXSA9IEp0LmdldCh5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSwgZGUgPSAhMCwgQ2UgPSAhMSwgQWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHZlID0gSnQua2V5cygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgTWU7ICEoZGUgPSAoTWUgPSB2ZS5uZXh0KCkpLmRvbmUpOyBkZSA9ICEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ZSA9IE1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBCZSh1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoR3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENlID0gITAsIEFlID0gR3Q7XG4gICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICFkZSAmJiB2ZS5yZXR1cm4gJiYgdmUucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgQWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgWXQgPSAwOyBZdCA8IGIubGVuZ3RoOyBZdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBWdCA9IGJbWXRdO1xuICAgICAgICAgICAgICAgICAgICBWdC5nZXRDaGlsZCgpID09IG51bGwgJiYgVnQuc2V0Q2VudGVyKHZbZC5nZXQoVnQuaWQpXSwgTFtkLmdldChWdC5pZCldKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBhLmV4cG9ydHMgPSBzO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC8qKiovXG4gICAgICAgICAgICA1NTE6IChcbiAgICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgICAgKChhKSA9PiB7XG4gICAgICAgICAgICAgICAgYS5leHBvcnRzID0gQTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgfSwgTiA9IHt9O1xuICAgICAgICAgIGZ1bmN0aW9uIHUoYSkge1xuICAgICAgICAgICAgdmFyIGUgPSBOW2FdO1xuICAgICAgICAgICAgaWYgKGUgIT09IHZvaWQgMClcbiAgICAgICAgICAgICAgcmV0dXJuIGUuZXhwb3J0cztcbiAgICAgICAgICAgIHZhciByID0gTlthXSA9IHtcbiAgICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgICAgLy8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICAvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBQW2FdKHIsIHIuZXhwb3J0cywgdSksIHIuZXhwb3J0cztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGggPSB1KDQ1KTtcbiAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgfSkoKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSkobGUpKSwgbGUuZXhwb3J0cztcbn1cbnZhciBwciA9IGhlLmV4cG9ydHMsIERlO1xuZnVuY3Rpb24geXIoKSB7XG4gIHJldHVybiBEZSB8fCAoRGUgPSAxLCAoZnVuY3Rpb24oSSwgeCkge1xuICAgIChmdW5jdGlvbihQLCBOKSB7XG4gICAgICBJLmV4cG9ydHMgPSBOKHZyKCkpO1xuICAgIH0pKHByLCBmdW5jdGlvbihBKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvKioqKioqL1xuICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgIHZhciBQID0ge1xuICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgIDY1ODogKFxuICAgICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgICAoKGEpID0+IHtcbiAgICAgICAgICAgICAgICBhLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduICE9IG51bGwgPyBPYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSBhcmd1bWVudHMubGVuZ3RoLCBsID0gQXJyYXkociA+IDEgPyByIC0gMSA6IDApLCBpID0gMTsgaSA8IHI7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgbFtpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbC5mb3JFYWNoKGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZykuZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVbdF0gPSBnW3RdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pLCBlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgIDU0ODogKFxuICAgICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgICAoKGEsIGUsIHIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IC8qIEBfX1BVUkVfXyAqLyAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0KG8sIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBbXSwgZiA9ICEwLCBUID0gITEsIGQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdiA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBMOyAhKGYgPSAoTCA9IHYubmV4dCgpKS5kb25lKSAmJiAoYy5wdXNoKEwudmFsdWUpLCAhKHMgJiYgYy5sZW5ndGggPT09IHMpKTsgZiA9ICEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgVCA9ICEwLCBkID0gYjtcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIWYgJiYgdi5yZXR1cm4gJiYgdi5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFQpIHRocm93IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG8sIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobykpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgICAgIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KG8pKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0KG8sIHMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSkoKSwgaSA9IHIoMTQwKS5sYXlvdXRCYXNlLkxpbmtlZExpc3QsIGcgPSB7fTtcbiAgICAgICAgICAgICAgICBnLmdldFRvcE1vc3ROb2RlcyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSB7fSwgcyA9IDA7IHMgPCB0Lmxlbmd0aDsgcysrKVxuICAgICAgICAgICAgICAgICAgICBvW3Rbc10uaWQoKV0gPSAhMDtcbiAgICAgICAgICAgICAgICAgIHZhciBjID0gdC5maWx0ZXIoZnVuY3Rpb24oZiwgVCkge1xuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZiA9PSBcIm51bWJlclwiICYmIChmID0gVCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQgPSBmLnBhcmVudCgpWzBdOyBkICE9IG51bGw7ICkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChvW2QuaWQoKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgZCA9IGQucGFyZW50KClbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgICAgICB9LCBnLmNvbm5lY3RDb21wb25lbnRzID0gZnVuY3Rpb24odCwgbywgcywgYykge1xuICAgICAgICAgICAgICAgICAgdmFyIGYgPSBuZXcgaSgpLCBUID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSwgZCA9IFtdLCB2ID0gdm9pZCAwLCBMID0gdm9pZCAwLCBiID0gdm9pZCAwLCBDID0gITEsIEcgPSAxLCBaID0gW10sIFkgPSBbXSwgSyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXQgPSB0LmNvbGxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgWS5wdXNoKGl0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBzWzBdLCBtID0gdC5jb2xsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIG0ubWVyZ2UobikubWVyZ2Uobi5kZXNjZW5kYW50cygpLmludGVyc2VjdGlvbihvKSksIGQucHVzaChuKSwgbS5mb3JFYWNoKGZ1bmN0aW9uKHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmLnB1c2goeSksIFQuYWRkKHkpLCBpdC5tZXJnZSh5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuID0gZi5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBSID0gdC5jb2xsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgbi5uZWlnaGJvcmhvb2QoKS5ub2RlcygpLmZvckVhY2goZnVuY3Rpb24oRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgby5pbnRlcnNlY3Rpb24obi5lZGdlc1dpdGgoRCkpLmxlbmd0aCA+IDAgJiYgUi5tZXJnZShEKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBNID0gMDsgTSA8IFIubGVuZ3RoOyBNKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBTID0gUltNXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ID0gcy5pbnRlcnNlY3Rpb24oUy51bmlvbihTLmFuY2VzdG9ycygpKSksIHYgIT0gbnVsbCAmJiAhVC5oYXModlswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFcgPSB2LnVuaW9uKHYuZGVzY2VuZGFudHMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFcuZm9yRWFjaChmdW5jdGlvbihEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5wdXNoKEQpLCBULmFkZChEKSwgaXQubWVyZ2UoRCksIHMuaGFzKEQpICYmIGQucHVzaChEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9OyBmLmxlbmd0aCAhPSAwOyApXG4gICAgICAgICAgICAgICAgICAgICAgcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXQuZm9yRWFjaChmdW5jdGlvbih5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgby5pbnRlcnNlY3Rpb24oeS5jb25uZWN0ZWRFZGdlcygpKS5mb3JFYWNoKGZ1bmN0aW9uKFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0LmhhcyhSLnNvdXJjZSgpKSAmJiBpdC5oYXMoUi50YXJnZXQoKSkgJiYgaXQubWVyZ2UoUik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBkLmxlbmd0aCA9PSBzLmxlbmd0aCAmJiAoQyA9ICEwKSwgIUMgfHwgQyAmJiBHID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIEwgPSBkWzBdLCBiID0gTC5jb25uZWN0ZWRFZGdlcygpLmxlbmd0aCwgZC5mb3JFYWNoKGZ1bmN0aW9uKHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkuY29ubmVjdGVkRWRnZXMoKS5sZW5ndGggPCBiICYmIChiID0geS5jb25uZWN0ZWRFZGdlcygpLmxlbmd0aCwgTCA9IHkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBaLnB1c2goTC5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgRSA9IHQuY29sbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgIEUubWVyZ2UoZFswXSksIGQuZm9yRWFjaChmdW5jdGlvbih5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBFLm1lcmdlKHkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBkID0gW10sIHMgPSBzLmRpZmZlcmVuY2UoRSksIEcrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGRvXG4gICAgICAgICAgICAgICAgICAgIEsoKTtcbiAgICAgICAgICAgICAgICAgIHdoaWxlICghQyk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYyAmJiBaLmxlbmd0aCA+IDAgJiYgYy5zZXQoXCJkdW1teVwiICsgKGMuc2l6ZSArIDEpLCBaKSwgWTtcbiAgICAgICAgICAgICAgICB9LCBnLnJlbG9jYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24odCwgbywgcykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFzLmZpeGVkTm9kZUNvbnN0cmFpbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIGYgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksIFQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIGQgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnF1YWxpdHkgPT0gXCJkcmFmdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSAhMCwgTCA9ICExLCBiID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBDID0gby5ub2RlSW5kZXhlc1tTeW1ib2wuaXRlcmF0b3JdKCksIEc7ICEodiA9IChHID0gQy5uZXh0KCkpLmRvbmUpOyB2ID0gITApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFogPSBHLnZhbHVlLCBZID0gbChaLCAyKSwgSyA9IFlbMF0sIE8gPSBZWzFdLCBpdCA9IHMuY3kuZ2V0RWxlbWVudEJ5SWQoSyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gaXQuYm91bmRpbmdCb3goKSwgbSA9IG8ueENvb3Jkc1tPXSAtIG4udyAvIDIsIHAgPSBvLnhDb29yZHNbT10gKyBuLncgLyAyLCBFID0gby55Q29vcmRzW09dIC0gbi5oIC8gMiwgeSA9IG8ueUNvb3Jkc1tPXSArIG4uaCAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA8IGMgJiYgKGMgPSBtKSwgcCA+IGYgJiYgKGYgPSBwKSwgRSA8IFQgJiYgKFQgPSBFKSwgeSA+IGQgJiYgKGQgPSB5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKEQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEwgPSAhMCwgYiA9IEQ7XG4gICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICF2ICYmIEMucmV0dXJuICYmIEMucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgUiA9IHQueCAtIChmICsgYykgLyAyLCBNID0gdC55IC0gKGQgKyBUKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgby54Q29vcmRzID0gby54Q29vcmRzLm1hcChmdW5jdGlvbihEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRCArIFI7XG4gICAgICAgICAgICAgICAgICAgICAgfSksIG8ueUNvb3JkcyA9IG8ueUNvb3Jkcy5tYXAoZnVuY3Rpb24oRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEQgKyBNO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG8pLmZvckVhY2goZnVuY3Rpb24oRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHEgPSBvW0RdLCBWID0gcS5nZXRSZWN0KCkueCwgWCA9IHEuZ2V0UmVjdCgpLnggKyBxLmdldFJlY3QoKS53aWR0aCwgZXQgPSBxLmdldFJlY3QoKS55LCB6ID0gcS5nZXRSZWN0KCkueSArIHEuZ2V0UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFYgPCBjICYmIChjID0gViksIFggPiBmICYmIChmID0gWCksIGV0IDwgVCAmJiAoVCA9IGV0KSwgeiA+IGQgJiYgKGQgPSB6KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgUyA9IHQueCAtIChmICsgYykgLyAyLCBXID0gdC55IC0gKGQgKyBUKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobykuZm9yRWFjaChmdW5jdGlvbihEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcSA9IG9bRF07XG4gICAgICAgICAgICAgICAgICAgICAgICBxLnNldENlbnRlcihxLmdldENlbnRlclgoKSArIFMsIHEuZ2V0Q2VudGVyWSgpICsgVyk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBnLmNhbGNCb3VuZGluZ0JveCA9IGZ1bmN0aW9uKHQsIG8sIHMsIGMpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGYgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgVCA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSLCBkID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIHYgPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUiwgTCA9IHZvaWQgMCwgYiA9IHZvaWQgMCwgQyA9IHZvaWQgMCwgRyA9IHZvaWQgMCwgWiA9IHQuZGVzY2VuZGFudHMoKS5ub3QoXCI6cGFyZW50XCIpLCBZID0gWi5sZW5ndGgsIEsgPSAwOyBLIDwgWTsgSysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gWltLXTtcbiAgICAgICAgICAgICAgICAgICAgTCA9IG9bYy5nZXQoTy5pZCgpKV0gLSBPLndpZHRoKCkgLyAyLCBiID0gb1tjLmdldChPLmlkKCkpXSArIE8ud2lkdGgoKSAvIDIsIEMgPSBzW2MuZ2V0KE8uaWQoKSldIC0gTy5oZWlnaHQoKSAvIDIsIEcgPSBzW2MuZ2V0KE8uaWQoKSldICsgTy5oZWlnaHQoKSAvIDIsIGYgPiBMICYmIChmID0gTCksIFQgPCBiICYmIChUID0gYiksIGQgPiBDICYmIChkID0gQyksIHYgPCBHICYmICh2ID0gRyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgaXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpdC50b3BMZWZ0WCA9IGYsIGl0LnRvcExlZnRZID0gZCwgaXQud2lkdGggPSBUIC0gZiwgaXQuaGVpZ2h0ID0gdiAtIGQsIGl0O1xuICAgICAgICAgICAgICAgIH0sIGcuY2FsY1BhcmVudHNXaXRob3V0Q2hpbGRyZW4gPSBmdW5jdGlvbih0LCBvKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcyA9IHQuY29sbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG8ubm9kZXMoXCI6cGFyZW50XCIpLmZvckVhY2goZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9ICExO1xuICAgICAgICAgICAgICAgICAgICBjLmNoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbihUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgVC5jc3MoXCJkaXNwbGF5XCIpICE9IFwibm9uZVwiICYmIChmID0gITApO1xuICAgICAgICAgICAgICAgICAgICB9KSwgZiB8fCBzLm1lcmdlKGMpO1xuICAgICAgICAgICAgICAgICAgfSksIHM7XG4gICAgICAgICAgICAgICAgfSwgYS5leHBvcnRzID0gZztcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgODE2OiAoXG4gICAgICAgICAgICAgIC8qKiovXG4gICAgICAgICAgICAgICgoYSwgZSwgcikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBsID0gcig1NDgpLCBpID0gcigxNDApLkNvU0VMYXlvdXQsIGcgPSByKDE0MCkuQ29TRU5vZGUsIHQgPSByKDE0MCkubGF5b3V0QmFzZS5Qb2ludEQsIG8gPSByKDE0MCkubGF5b3V0QmFzZS5EaW1lbnNpb25ELCBzID0gcigxNDApLmxheW91dEJhc2UuTGF5b3V0Q29uc3RhbnRzLCBjID0gcigxNDApLmxheW91dEJhc2UuRkRMYXlvdXRDb25zdGFudHMsIGYgPSByKDE0MCkuQ29TRUNvbnN0YW50cywgVCA9IGZ1bmN0aW9uKHYsIEwpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBiID0gdi5jeSwgQyA9IHYuZWxlcywgRyA9IEMubm9kZXMoKSwgWiA9IEMuZWRnZXMoKSwgWSA9IHZvaWQgMCwgSyA9IHZvaWQgMCwgTyA9IHZvaWQgMCwgaXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgIHYucmFuZG9taXplICYmIChZID0gTC5ub2RlSW5kZXhlcywgSyA9IEwueENvb3JkcywgTyA9IEwueUNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICB2YXIgbiA9IGZ1bmN0aW9uKEQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBEID09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgICAgICAgICAgIH0sIG0gPSBmdW5jdGlvbihELCBxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuKEQpID8gRChxKSA6IEQ7XG4gICAgICAgICAgICAgICAgICB9LCBwID0gbC5jYWxjUGFyZW50c1dpdGhvdXRDaGlsZHJlbihiLCBDKSwgRSA9IGZ1bmN0aW9uIFcoRCwgcSwgViwgWCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBldCA9IHEubGVuZ3RoLCB6ID0gMDsgeiA8IGV0OyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHFbel0sIEggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgIHcuaW50ZXJzZWN0aW9uKHApLmxlbmd0aCA9PSAwICYmIChIID0gdy5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCA9IHZvaWQgMCwgXyA9IHcubGF5b3V0RGltZW5zaW9ucyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHM6IFgubm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHcub3V0ZXJXaWR0aCgpICE9IG51bGwgJiYgdy5vdXRlckhlaWdodCgpICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoWC5yYW5kb21pemUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdy5pc1BhcmVudCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQgPSBELmFkZChuZXcgZyhWLmdyYXBoTWFuYWdlciwgbmV3IHQoS1tZLmdldCh3LmlkKCkpXSAtIF8udyAvIDIsIE9bWS5nZXQody5pZCgpKV0gLSBfLmggLyAyKSwgbmV3IG8ocGFyc2VGbG9hdChfLncpLCBwYXJzZUZsb2F0KF8uaCkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodCA9IGwuY2FsY0JvdW5kaW5nQm94KHcsIEssIE8sIFkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcuaW50ZXJzZWN0aW9uKHApLmxlbmd0aCA9PSAwID8gJCA9IEQuYWRkKG5ldyBnKFYuZ3JhcGhNYW5hZ2VyLCBuZXcgdChodC50b3BMZWZ0WCwgaHQudG9wTGVmdFkpLCBuZXcgbyhodC53aWR0aCwgaHQuaGVpZ2h0KSkpIDogJCA9IEQuYWRkKG5ldyBnKFYuZ3JhcGhNYW5hZ2VyLCBuZXcgdChodC50b3BMZWZ0WCwgaHQudG9wTGVmdFkpLCBuZXcgbyhwYXJzZUZsb2F0KF8udyksIHBhcnNlRmxvYXQoXy5oKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAkID0gRC5hZGQobmV3IGcoVi5ncmFwaE1hbmFnZXIsIG5ldyB0KHcucG9zaXRpb24oXCJ4XCIpIC0gXy53IC8gMiwgdy5wb3NpdGlvbihcInlcIikgLSBfLmggLyAyKSwgbmV3IG8ocGFyc2VGbG9hdChfLncpLCBwYXJzZUZsb2F0KF8uaCkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgJCA9IEQuYWRkKG5ldyBnKHRoaXMuZ3JhcGhNYW5hZ2VyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCQuaWQgPSB3LmRhdGEoXCJpZFwiKSwgJC5ub2RlUmVwdWxzaW9uID0gbShYLm5vZGVSZXB1bHNpb24sIHcpLCAkLnBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQody5jc3MoXCJwYWRkaW5nXCIpKSwgJC5wYWRkaW5nVG9wID0gcGFyc2VJbnQody5jc3MoXCJwYWRkaW5nXCIpKSwgJC5wYWRkaW5nUmlnaHQgPSBwYXJzZUludCh3LmNzcyhcInBhZGRpbmdcIikpLCAkLnBhZGRpbmdCb3R0b20gPSBwYXJzZUludCh3LmNzcyhcInBhZGRpbmdcIikpLCBYLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVscyAmJiAoJC5sYWJlbFdpZHRoID0gdy5ib3VuZGluZ0JveCh7IGluY2x1ZGVMYWJlbHM6ICEwLCBpbmNsdWRlTm9kZXM6ICExLCBpbmNsdWRlT3ZlcmxheXM6ICExIH0pLncsICQubGFiZWxIZWlnaHQgPSB3LmJvdW5kaW5nQm94KHsgaW5jbHVkZUxhYmVsczogITAsIGluY2x1ZGVOb2RlczogITEsIGluY2x1ZGVPdmVybGF5czogITEgfSkuaCwgJC5sYWJlbFBvc1ZlcnRpY2FsID0gdy5jc3MoXCJ0ZXh0LXZhbGlnblwiKSwgJC5sYWJlbFBvc0hvcml6b250YWwgPSB3LmNzcyhcInRleHQtaGFsaWduXCIpKSwgaXRbdy5kYXRhKFwiaWRcIildID0gJCwgaXNOYU4oJC5yZWN0LngpICYmICgkLnJlY3QueCA9IDApLCBpc05hTigkLnJlY3QueSkgJiYgKCQucmVjdC55ID0gMCksIEggIT0gbnVsbCAmJiBILmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBRID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgUSA9IFYuZ2V0R3JhcGhNYW5hZ2VyKCkuYWRkKFYubmV3R3JhcGgoKSwgJCksIFcoUSwgSCwgViwgWCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LCB5ID0gZnVuY3Rpb24oRCwgcSwgVikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBYID0gMCwgZXQgPSAwLCB6ID0gMDsgeiA8IFYubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IFZbel0sIEggPSBpdFt3LmRhdGEoXCJzb3VyY2VcIildLCAkID0gaXRbdy5kYXRhKFwidGFyZ2V0XCIpXTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoSCAmJiAkICYmIEggIT09ICQgJiYgSC5nZXRFZGdlc0JldHdlZW4oJCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfID0gcS5hZGQoRC5uZXdFZGdlKCksIEgsICQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5pZCA9IHcuaWQoKSwgXy5pZGVhbExlbmd0aCA9IG0odi5pZGVhbEVkZ2VMZW5ndGgsIHcpLCBfLmVkZ2VFbGFzdGljaXR5ID0gbSh2LmVkZ2VFbGFzdGljaXR5LCB3KSwgWCArPSBfLmlkZWFsTGVuZ3RoLCBldCsrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2LmlkZWFsRWRnZUxlbmd0aCAhPSBudWxsICYmIChldCA+IDAgPyBmLkRFRkFVTFRfRURHRV9MRU5HVEggPSBjLkRFRkFVTFRfRURHRV9MRU5HVEggPSBYIC8gZXQgOiBuKHYuaWRlYWxFZGdlTGVuZ3RoKSA/IGYuREVGQVVMVF9FREdFX0xFTkdUSCA9IGMuREVGQVVMVF9FREdFX0xFTkdUSCA9IDUwIDogZi5ERUZBVUxUX0VER0VfTEVOR1RIID0gYy5ERUZBVUxUX0VER0VfTEVOR1RIID0gdi5pZGVhbEVkZ2VMZW5ndGgsIGYuTUlOX1JFUFVMU0lPTl9ESVNUID0gYy5NSU5fUkVQVUxTSU9OX0RJU1QgPSBjLkRFRkFVTFRfRURHRV9MRU5HVEggLyAxMCwgZi5ERUZBVUxUX1JBRElBTF9TRVBBUkFUSU9OID0gYy5ERUZBVUxUX0VER0VfTEVOR1RIKTtcbiAgICAgICAgICAgICAgICAgIH0sIFIgPSBmdW5jdGlvbihELCBxKSB7XG4gICAgICAgICAgICAgICAgICAgIHEuZml4ZWROb2RlQ29uc3RyYWludCAmJiAoRC5jb25zdHJhaW50cy5maXhlZE5vZGVDb25zdHJhaW50ID0gcS5maXhlZE5vZGVDb25zdHJhaW50KSwgcS5hbGlnbm1lbnRDb25zdHJhaW50ICYmIChELmNvbnN0cmFpbnRzLmFsaWdubWVudENvbnN0cmFpbnQgPSBxLmFsaWdubWVudENvbnN0cmFpbnQpLCBxLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCAmJiAoRC5jb25zdHJhaW50cy5yZWxhdGl2ZVBsYWNlbWVudENvbnN0cmFpbnQgPSBxLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgdi5uZXN0aW5nRmFjdG9yICE9IG51bGwgJiYgKGYuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IGMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IHYubmVzdGluZ0ZhY3RvciksIHYuZ3Jhdml0eSAhPSBudWxsICYmIChmLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IGMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gdi5ncmF2aXR5KSwgdi5udW1JdGVyICE9IG51bGwgJiYgKGYuTUFYX0lURVJBVElPTlMgPSBjLk1BWF9JVEVSQVRJT05TID0gdi5udW1JdGVyKSwgdi5ncmF2aXR5UmFuZ2UgIT0gbnVsbCAmJiAoZi5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gYy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gdi5ncmF2aXR5UmFuZ2UpLCB2LmdyYXZpdHlDb21wb3VuZCAhPSBudWxsICYmIChmLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCA9IGMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gdi5ncmF2aXR5Q29tcG91bmQpLCB2LmdyYXZpdHlSYW5nZUNvbXBvdW5kICE9IG51bGwgJiYgKGYuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IGMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IHYuZ3Jhdml0eVJhbmdlQ29tcG91bmQpLCB2LmluaXRpYWxFbmVyZ3lPbkluY3JlbWVudGFsICE9IG51bGwgJiYgKGYuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IGMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IHYuaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwpLCB2LnRpbGluZ0NvbXBhcmVCeSAhPSBudWxsICYmIChmLlRJTElOR19DT01QQVJFX0JZID0gdi50aWxpbmdDb21wYXJlQnkpLCB2LnF1YWxpdHkgPT0gXCJwcm9vZlwiID8gcy5RVUFMSVRZID0gMiA6IHMuUVVBTElUWSA9IDAsIGYuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gYy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IHYubm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzLCBmLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBjLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSAhdi5yYW5kb21pemUsIGYuQU5JTUFURSA9IGMuQU5JTUFURSA9IHMuQU5JTUFURSA9IHYuYW5pbWF0ZSwgZi5USUxFID0gdi50aWxlLCBmLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMID0gdHlwZW9mIHYudGlsaW5nUGFkZGluZ1ZlcnRpY2FsID09IFwiZnVuY3Rpb25cIiA/IHYudGlsaW5nUGFkZGluZ1ZlcnRpY2FsLmNhbGwoKSA6IHYudGlsaW5nUGFkZGluZ1ZlcnRpY2FsLCBmLlRJTElOR19QQURESU5HX0hPUklaT05UQUwgPSB0eXBlb2Ygdi50aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCA9PSBcImZ1bmN0aW9uXCIgPyB2LnRpbGluZ1BhZGRpbmdIb3Jpem9udGFsLmNhbGwoKSA6IHYudGlsaW5nUGFkZGluZ0hvcml6b250YWwsIGYuREVGQVVMVF9JTkNSRU1FTlRBTCA9IGMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9ICEwLCBmLlBVUkVfSU5DUkVNRU5UQUwgPSAhdi5yYW5kb21pemUsIHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyA9IHYudW5pZm9ybU5vZGVEaW1lbnNpb25zLCB2LnN0ZXAgPT0gXCJ0cmFuc2Zvcm1lZFwiICYmIChmLlRSQU5TRk9STV9PTl9DT05TVFJBSU5UX0hBTkRMSU5HID0gITAsIGYuRU5GT1JDRV9DT05TVFJBSU5UUyA9ICExLCBmLkFQUExZX0xBWU9VVCA9ICExKSwgdi5zdGVwID09IFwiZW5mb3JjZWRcIiAmJiAoZi5UUkFOU0ZPUk1fT05fQ09OU1RSQUlOVF9IQU5ETElORyA9ICExLCBmLkVORk9SQ0VfQ09OU1RSQUlOVFMgPSAhMCwgZi5BUFBMWV9MQVlPVVQgPSAhMSksIHYuc3RlcCA9PSBcImNvc2VcIiAmJiAoZi5UUkFOU0ZPUk1fT05fQ09OU1RSQUlOVF9IQU5ETElORyA9ICExLCBmLkVORk9SQ0VfQ09OU1RSQUlOVFMgPSAhMSwgZi5BUFBMWV9MQVlPVVQgPSAhMCksIHYuc3RlcCA9PSBcImFsbFwiICYmICh2LnJhbmRvbWl6ZSA/IGYuVFJBTlNGT1JNX09OX0NPTlNUUkFJTlRfSEFORExJTkcgPSAhMCA6IGYuVFJBTlNGT1JNX09OX0NPTlNUUkFJTlRfSEFORExJTkcgPSAhMSwgZi5FTkZPUkNFX0NPTlNUUkFJTlRTID0gITAsIGYuQVBQTFlfTEFZT1VUID0gITApLCB2LmZpeGVkTm9kZUNvbnN0cmFpbnQgfHwgdi5hbGlnbm1lbnRDb25zdHJhaW50IHx8IHYucmVsYXRpdmVQbGFjZW1lbnRDb25zdHJhaW50ID8gZi5UUkVFX1JFRFVDVElPTl9PTl9JTkNSRU1FTlRBTCA9ICExIDogZi5UUkVFX1JFRFVDVElPTl9PTl9JTkNSRU1FTlRBTCA9ICEwO1xuICAgICAgICAgICAgICAgICAgdmFyIE0gPSBuZXcgaSgpLCBTID0gTS5uZXdHcmFwaE1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBFKFMuYWRkUm9vdCgpLCBsLmdldFRvcE1vc3ROb2RlcyhHKSwgTSwgdiksIHkoTSwgUywgWiksIFIoTSwgdiksIE0ucnVuTGF5b3V0KCksIGl0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYS5leHBvcnRzID0geyBjb3NlTGF5b3V0OiBUIH07XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgIDIxMjogKFxuICAgICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgICAoKGEsIGUsIHIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IC8qIEBfX1BVUkVfXyAqLyAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2KEwsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgQyA9IDA7IEMgPCBiLmxlbmd0aDsgQysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIEcgPSBiW0NdO1xuICAgICAgICAgICAgICAgICAgICAgIEcuZW51bWVyYWJsZSA9IEcuZW51bWVyYWJsZSB8fCAhMSwgRy5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIEcgJiYgKEcud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMLCBHLmtleSwgRyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihMLCBiLCBDKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiICYmIHYoTC5wcm90b3R5cGUsIGIpLCBDICYmIHYoTCwgQyksIEw7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaSh2LCBMKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISh2IGluc3RhbmNlb2YgTCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBnID0gcig2NTgpLCB0ID0gcig1NDgpLCBvID0gcig2NTcpLCBzID0gby5zcGVjdHJhbExheW91dCwgYyA9IHIoODE2KSwgZiA9IGMuY29zZUxheW91dCwgVCA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgICAgICAgLy8gJ2RyYWZ0JywgJ2RlZmF1bHQnIG9yICdwcm9vZicgXG4gICAgICAgICAgICAgICAgICAvLyAtICdkcmFmdCcgb25seSBhcHBsaWVzIHNwZWN0cmFsIGxheW91dCBcbiAgICAgICAgICAgICAgICAgIC8vIC0gJ2RlZmF1bHQnIGltcHJvdmVzIHRoZSBxdWFsaXR5IHdpdGggc3Vic2VxdWVudCBDb1NFIGxheW91dCAoZmFzdCBjb29saW5nIHJhdGUpXG4gICAgICAgICAgICAgICAgICAvLyAtICdwcm9vZicgaW1wcm92ZXMgdGhlIHF1YWxpdHkgd2l0aCBzdWJzZXF1ZW50IENvU0UgbGF5b3V0IChzbG93IGNvb2xpbmcgcmF0ZSkgXG4gICAgICAgICAgICAgICAgICBxdWFsaXR5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgIC8vIFVzZSByYW5kb20gbm9kZSBwb3NpdGlvbnMgYXQgYmVnaW5uaW5nIG9mIGxheW91dFxuICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBzZXQgdG8gZmFsc2UsIHRoZW4gcXVhbGl0eSBvcHRpb24gbXVzdCBiZSBcInByb29mXCJcbiAgICAgICAgICAgICAgICAgIHJhbmRvbWl6ZTogITAsXG4gICAgICAgICAgICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBhbmltYXRlIHRoZSBsYXlvdXRcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU6ICEwLFxuICAgICAgICAgICAgICAgICAgLy8gRHVyYXRpb24gb2YgYW5pbWF0aW9uIGluIG1zLCBpZiBlbmFibGVkXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMWUzLFxuICAgICAgICAgICAgICAgICAgLy8gRWFzaW5nIG9mIGFuaW1hdGlvbiwgaWYgZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRWFzaW5nOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAvLyBGaXQgdGhlIHZpZXdwb3J0IHRvIHRoZSByZXBvc2l0aW9uZWQgbm9kZXNcbiAgICAgICAgICAgICAgICAgIGZpdDogITAsXG4gICAgICAgICAgICAgICAgICAvLyBQYWRkaW5nIGFyb3VuZCBsYXlvdXRcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwLFxuICAgICAgICAgICAgICAgICAgLy8gV2hldGhlciB0byBpbmNsdWRlIGxhYmVscyBpbiBub2RlIGRpbWVuc2lvbnMuIFZhbGlkIGluIFwicHJvb2ZcIiBxdWFsaXR5XG4gICAgICAgICAgICAgICAgICBub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHM6ICExLFxuICAgICAgICAgICAgICAgICAgLy8gV2hldGhlciBvciBub3Qgc2ltcGxlIG5vZGVzIChub24tY29tcG91bmQgbm9kZXMpIGFyZSBvZiB1bmlmb3JtIGRpbWVuc2lvbnNcbiAgICAgICAgICAgICAgICAgIHVuaWZvcm1Ob2RlRGltZW5zaW9uczogITEsXG4gICAgICAgICAgICAgICAgICAvLyBXaGV0aGVyIHRvIHBhY2sgZGlzY29ubmVjdGVkIGNvbXBvbmVudHMgLSB2YWxpZCBvbmx5IGlmIHJhbmRvbWl6ZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgcGFja0NvbXBvbmVudHM6ICEwLFxuICAgICAgICAgICAgICAgICAgLy8gTGF5b3V0IHN0ZXAgLSBhbGwsIHRyYW5zZm9ybWVkLCBlbmZvcmNlZCwgY29zZSAtIGZvciBkZWJ1ZyBwdXJwb3NlIG9ubHlcbiAgICAgICAgICAgICAgICAgIHN0ZXA6IFwiYWxsXCIsXG4gICAgICAgICAgICAgICAgICAvKiBzcGVjdHJhbCBsYXlvdXQgb3B0aW9ucyAqL1xuICAgICAgICAgICAgICAgICAgLy8gRmFsc2UgZm9yIHJhbmRvbSwgdHJ1ZSBmb3IgZ3JlZWR5XG4gICAgICAgICAgICAgICAgICBzYW1wbGluZ1R5cGU6ICEwLFxuICAgICAgICAgICAgICAgICAgLy8gU2FtcGxlIHNpemUgdG8gY29uc3RydWN0IGRpc3RhbmNlIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgc2FtcGxlU2l6ZTogMjUsXG4gICAgICAgICAgICAgICAgICAvLyBTZXBhcmF0aW9uIGFtb3VudCBiZXR3ZWVuIG5vZGVzXG4gICAgICAgICAgICAgICAgICBub2RlU2VwYXJhdGlvbjogNzUsXG4gICAgICAgICAgICAgICAgICAvLyBQb3dlciBpdGVyYXRpb24gdG9sZXJhbmNlXG4gICAgICAgICAgICAgICAgICBwaVRvbDogMWUtNyxcbiAgICAgICAgICAgICAgICAgIC8qIENvU0UgbGF5b3V0IG9wdGlvbnMgKi9cbiAgICAgICAgICAgICAgICAgIC8vIE5vZGUgcmVwdWxzaW9uIChub24gb3ZlcmxhcHBpbmcpIG11bHRpcGxpZXJcbiAgICAgICAgICAgICAgICAgIG5vZGVSZXB1bHNpb246IGZ1bmN0aW9uKEwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ1MDA7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgLy8gSWRlYWwgZWRnZSAobm9uIG5lc3RlZCkgbGVuZ3RoXG4gICAgICAgICAgICAgICAgICBpZGVhbEVkZ2VMZW5ndGg6IGZ1bmN0aW9uKEwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDUwO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIC8vIERpdmlzb3IgdG8gY29tcHV0ZSBlZGdlIGZvcmNlc1xuICAgICAgICAgICAgICAgICAgZWRnZUVsYXN0aWNpdHk6IGZ1bmN0aW9uKEwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNDU7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgLy8gTmVzdGluZyBmYWN0b3IgKG11bHRpcGxpZXIpIHRvIGNvbXB1dGUgaWRlYWwgZWRnZSBsZW5ndGggZm9yIG5lc3RlZCBlZGdlc1xuICAgICAgICAgICAgICAgICAgbmVzdGluZ0ZhY3RvcjogMC4xLFxuICAgICAgICAgICAgICAgICAgLy8gR3Jhdml0eSBmb3JjZSAoY29uc3RhbnQpXG4gICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjI1LFxuICAgICAgICAgICAgICAgICAgLy8gTWF4aW11bSBudW1iZXIgb2YgaXRlcmF0aW9ucyB0byBwZXJmb3JtXG4gICAgICAgICAgICAgICAgICBudW1JdGVyOiAyNTAwLFxuICAgICAgICAgICAgICAgICAgLy8gRm9yIGVuYWJsaW5nIHRpbGluZ1xuICAgICAgICAgICAgICAgICAgdGlsZTogITAsXG4gICAgICAgICAgICAgICAgICAvLyBUaGUgZnVuY3Rpb24gdGhhdCBzcGVjaWZpZXMgdGhlIGNyaXRlcmlhIGZvciBjb21wYXJpbmcgbm9kZXMgd2hpbGUgc29ydGluZyB0aGVtIGR1cmluZyB0aWxpbmcgb3BlcmF0aW9uLlxuICAgICAgICAgICAgICAgICAgLy8gVGFrZXMgdGhlIG5vZGUgaWQgYXMgYSBwYXJhbWV0ZXIgYW5kIHRoZSBkZWZhdWx0IHRpbGluZyBvcGVyYXRpb24gaXMgcGVyZm9tZWQgd2hlbiB0aGlzIG9wdGlvbiBpcyBub3Qgc2V0LlxuICAgICAgICAgICAgICAgICAgdGlsaW5nQ29tcGFyZUJ5OiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAvLyBSZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgdGhlIHZlcnRpY2FsIHNwYWNlIHRvIHB1dCBiZXR3ZWVuIHRoZSB6ZXJvIGRlZ3JlZSBtZW1iZXJzIGR1cmluZyB0aGUgdGlsaW5nIG9wZXJhdGlvbihjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uKVxuICAgICAgICAgICAgICAgICAgdGlsaW5nUGFkZGluZ1ZlcnRpY2FsOiAxMCxcbiAgICAgICAgICAgICAgICAgIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgaG9yaXpvbnRhbCBzcGFjZSB0byBwdXQgYmV0d2VlbiB0aGUgemVybyBkZWdyZWUgbWVtYmVycyBkdXJpbmcgdGhlIHRpbGluZyBvcGVyYXRpb24oY2FuIGFsc28gYmUgYSBmdW5jdGlvbilcbiAgICAgICAgICAgICAgICAgIHRpbGluZ1BhZGRpbmdIb3Jpem9udGFsOiAxMCxcbiAgICAgICAgICAgICAgICAgIC8vIEdyYXZpdHkgcmFuZ2UgKGNvbnN0YW50KSBmb3IgY29tcG91bmRzXG4gICAgICAgICAgICAgICAgICBncmF2aXR5UmFuZ2VDb21wb3VuZDogMS41LFxuICAgICAgICAgICAgICAgICAgLy8gR3Jhdml0eSBmb3JjZSAoY29uc3RhbnQpIGZvciBjb21wb3VuZHNcbiAgICAgICAgICAgICAgICAgIGdyYXZpdHlDb21wb3VuZDogMSxcbiAgICAgICAgICAgICAgICAgIC8vIEdyYXZpdHkgcmFuZ2UgKGNvbnN0YW50KVxuICAgICAgICAgICAgICAgICAgZ3Jhdml0eVJhbmdlOiAzLjgsXG4gICAgICAgICAgICAgICAgICAvLyBJbml0aWFsIGNvb2xpbmcgZmFjdG9yIGZvciBpbmNyZW1lbnRhbCBsYXlvdXQgIFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWw6IDAuMyxcbiAgICAgICAgICAgICAgICAgIC8qIGNvbnN0cmFpbnQgb3B0aW9ucyAqL1xuICAgICAgICAgICAgICAgICAgLy8gRml4IHJlcXVpcmVkIG5vZGVzIHRvIHByZWRlZmluZWQgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgICAvLyBbe25vZGVJZDogJ24xJywgcG9zaXRpb246IHt4OiAxMDAsIHk6IDIwMH0sIHsuLi59XVxuICAgICAgICAgICAgICAgICAgZml4ZWROb2RlQ29uc3RyYWludDogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgLy8gQWxpZ24gcmVxdWlyZWQgbm9kZXMgaW4gdmVydGljYWwvaG9yaXpvbnRhbCBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICAgIC8vIHt2ZXJ0aWNhbDogW1snbjEnLCAnbjInKV0sIFsnbjMnLCAnbjQnXV0sIGhvcml6b250YWw6IFsnbjInLCAnbjQnXX1cbiAgICAgICAgICAgICAgICAgIGFsaWdubWVudENvbnN0cmFpbnQ6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgIC8vIFBsYWNlIHR3byBub2RlcyByZWxhdGl2ZWx5IGluIHZlcnRpY2FsL2hvcml6b250YWwgZGlyZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgLy8gW3t0b3A6ICduMScsIGJvdHRvbTogJ24yJywgZ2FwOiAxMDB9LCB7bGVmdDogJ24zJywgcmlnaHQ6ICduNCcsIGdhcDogNzV9XVxuICAgICAgICAgICAgICAgICAgcmVsYXRpdmVQbGFjZW1lbnRDb25zdHJhaW50OiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAvKiBsYXlvdXQgZXZlbnQgY2FsbGJhY2tzICovXG4gICAgICAgICAgICAgICAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgLy8gb24gbGF5b3V0cmVhZHlcbiAgICAgICAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gb24gbGF5b3V0c3RvcFxuICAgICAgICAgICAgICAgIH0pLCBkID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdihMKSB7XG4gICAgICAgICAgICAgICAgICAgIGkodGhpcywgdiksIHRoaXMub3B0aW9ucyA9IGcoe30sIFQsIEwpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGwodiwgW3tcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcInJ1blwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLCBDID0gdGhpcy5vcHRpb25zLCBHID0gQy5jeSwgWiA9IEMuZWxlcywgWSA9IFtdLCBLID0gW10sIE8gPSB2b2lkIDAsIGl0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgQy5maXhlZE5vZGVDb25zdHJhaW50ICYmICghQXJyYXkuaXNBcnJheShDLmZpeGVkTm9kZUNvbnN0cmFpbnQpIHx8IEMuZml4ZWROb2RlQ29uc3RyYWludC5sZW5ndGggPT0gMCkgJiYgKEMuZml4ZWROb2RlQ29uc3RyYWludCA9IHZvaWQgMCksIEMuYWxpZ25tZW50Q29uc3RyYWludCAmJiAoQy5hbGlnbm1lbnRDb25zdHJhaW50LnZlcnRpY2FsICYmICghQXJyYXkuaXNBcnJheShDLmFsaWdubWVudENvbnN0cmFpbnQudmVydGljYWwpIHx8IEMuYWxpZ25tZW50Q29uc3RyYWludC52ZXJ0aWNhbC5sZW5ndGggPT0gMCkgJiYgKEMuYWxpZ25tZW50Q29uc3RyYWludC52ZXJ0aWNhbCA9IHZvaWQgMCksIEMuYWxpZ25tZW50Q29uc3RyYWludC5ob3Jpem9udGFsICYmICghQXJyYXkuaXNBcnJheShDLmFsaWdubWVudENvbnN0cmFpbnQuaG9yaXpvbnRhbCkgfHwgQy5hbGlnbm1lbnRDb25zdHJhaW50Lmhvcml6b250YWwubGVuZ3RoID09IDApICYmIChDLmFsaWdubWVudENvbnN0cmFpbnQuaG9yaXpvbnRhbCA9IHZvaWQgMCkpLCBDLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludCAmJiAoIUFycmF5LmlzQXJyYXkoQy5yZWxhdGl2ZVBsYWNlbWVudENvbnN0cmFpbnQpIHx8IEMucmVsYXRpdmVQbGFjZW1lbnRDb25zdHJhaW50Lmxlbmd0aCA9PSAwKSAmJiAoQy5yZWxhdGl2ZVBsYWNlbWVudENvbnN0cmFpbnQgPSB2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gQy5maXhlZE5vZGVDb25zdHJhaW50IHx8IEMuYWxpZ25tZW50Q29uc3RyYWludCB8fCBDLnJlbGF0aXZlUGxhY2VtZW50Q29uc3RyYWludDtcbiAgICAgICAgICAgICAgICAgICAgICBuICYmIChDLnRpbGUgPSAhMSwgQy5wYWNrQ29tcG9uZW50cyA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHZvaWQgMCwgcCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChHLmxheW91dFV0aWxpdGllcyAmJiBDLnBhY2tDb21wb25lbnRzICYmIChtID0gRy5sYXlvdXRVdGlsaXRpZXMoXCJnZXRcIiksIG0gfHwgKG0gPSBHLmxheW91dFV0aWxpdGllcygpKSwgcCA9ICEwKSwgWi5ub2RlcygpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgUiA9IHQuZ2V0VG9wTW9zdE5vZGVzKEMuZWxlcy5ub2RlcygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE8gPSB0LmNvbm5lY3RDb21wb25lbnRzKEcsIEMuZWxlcywgUiksIE8uZm9yRWFjaChmdW5jdGlvbih2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBydCA9IHZ0LmJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQucHVzaCh7IHg6IHJ0LngxICsgcnQudyAvIDIsIHk6IHJ0LnkxICsgcnQuaCAvIDIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBDLnJhbmRvbWl6ZSAmJiBPLmZvckVhY2goZnVuY3Rpb24odnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDLmVsZXMgPSB2dCwgWS5wdXNoKHMoQykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgQy5xdWFsaXR5ID09IFwiZGVmYXVsdFwiIHx8IEMucXVhbGl0eSA9PSBcInByb29mXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IEcuY29sbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDLnRpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBTID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgVyA9IFtdLCBEID0gW10sIHEgPSAwLCBWID0geyBub2RlSW5kZXhlczogUywgeENvb3JkczogVywgeUNvb3JkczogRCB9LCBYID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTy5mb3JFYWNoKGZ1bmN0aW9uKHZ0LCBydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2dC5lZGdlcygpLmxlbmd0aCA9PSAwICYmICh2dC5ub2RlcygpLmZvckVhY2goZnVuY3Rpb24oZ3QsIG10KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTS5tZXJnZSh2dC5ub2RlcygpW210XSksIGd0LmlzUGFyZW50KCkgfHwgKFYubm9kZUluZGV4ZXMuc2V0KHZ0Lm5vZGVzKClbbXRdLmlkKCksIHErKyksIFYueENvb3Jkcy5wdXNoKHZ0Lm5vZGVzKClbMF0ucG9zaXRpb24oKS54KSwgVi55Q29vcmRzLnB1c2godnQubm9kZXMoKVswXS5wb3NpdGlvbigpLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFgucHVzaChydCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIE0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXQgPSBNLmJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0LnB1c2goeyB4OiBldC54MSArIGV0LncgLyAyLCB5OiBldC55MSArIGV0LmggLyAyIH0pLCBPLnB1c2goTSksIFkucHVzaChWKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeiA9IFgubGVuZ3RoIC0gMTsgeiA+PSAwOyB6LS0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTy5zcGxpY2UoWFt6XSwgMSksIFkuc3BsaWNlKFhbel0sIDEpLCBpdC5zcGxpY2UoWFt6XSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8uZm9yRWFjaChmdW5jdGlvbih2dCwgcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEMuZWxlcyA9IHZ0LCBLLnB1c2goZihDLCBZW3J0XSkpLCB0LnJlbG9jYXRlQ29tcG9uZW50KGl0W3J0XSwgS1tydF0sIEMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPLmZvckVhY2goZnVuY3Rpb24odnQsIHJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnJlbG9jYXRlQ29tcG9uZW50KGl0W3J0XSwgWVtydF0sIEMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSCA9IFtdLCAkID0gWi5maWx0ZXIoZnVuY3Rpb24odnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2dC5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8uZm9yRWFjaChmdW5jdGlvbih2dCwgcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBndCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDLnF1YWxpdHkgPT0gXCJkcmFmdFwiICYmIChndCA9IFlbcnRdLm5vZGVJbmRleGVzKSwgdnQubm9kZXMoKS5ub3QoJCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQuZWRnZXMgPSBbXSwgbXQubm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEF0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2dC5ub2RlcygpLm5vdCgkKS5mb3JFYWNoKGZ1bmN0aW9uKE90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEMucXVhbGl0eSA9PSBcImRyYWZ0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU90LmlzUGFyZW50KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0ID0gZ3QuZ2V0KE90LmlkKCkpLCBtdC5ub2Rlcy5wdXNoKHsgeDogWVtydF0ueENvb3Jkc1tBdF0gLSBPdC5ib3VuZGluZ2JveCgpLncgLyAyLCB5OiBZW3J0XS55Q29vcmRzW0F0XSAtIE90LmJvdW5kaW5nYm94KCkuaCAvIDIsIHdpZHRoOiBPdC5ib3VuZGluZ2JveCgpLncsIGhlaWdodDogT3QuYm91bmRpbmdib3goKS5oIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBFdCA9IHQuY2FsY0JvdW5kaW5nQm94KE90LCBZW3J0XS54Q29vcmRzLCBZW3J0XS55Q29vcmRzLCBndCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10Lm5vZGVzLnB1c2goeyB4OiBFdC50b3BMZWZ0WCwgeTogRXQudG9wTGVmdFksIHdpZHRoOiBFdC53aWR0aCwgaGVpZ2h0OiBFdC5oZWlnaHQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS1tydF1bT3QuaWQoKV0gJiYgbXQubm9kZXMucHVzaCh7IHg6IEtbcnRdW090LmlkKCldLmdldExlZnQoKSwgeTogS1tydF1bT3QuaWQoKV0uZ2V0VG9wKCksIHdpZHRoOiBLW3J0XVtPdC5pZCgpXS5nZXRXaWR0aCgpLCBoZWlnaHQ6IEtbcnRdW090LmlkKCldLmdldEhlaWdodCgpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgdnQuZWRnZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKE90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEV0ID0gT3Quc291cmNlKCksIER0ID0gT3QudGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEV0LmNzcyhcImRpc3BsYXlcIikgIT0gXCJub25lXCIgJiYgRHQuY3NzKFwiZGlzcGxheVwiKSAhPSBcIm5vbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDLnF1YWxpdHkgPT0gXCJkcmFmdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBSdCA9IGd0LmdldChFdC5pZCgpKSwgSHQgPSBndC5nZXQoRHQuaWQoKSksIFV0ID0gW10sIFB0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChFdC5pc1BhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEZ0ID0gdC5jYWxjQm91bmRpbmdCb3goRXQsIFlbcnRdLnhDb29yZHMsIFlbcnRdLnlDb29yZHMsIGd0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdC5wdXNoKEZ0LnRvcExlZnRYICsgRnQud2lkdGggLyAyKSwgVXQucHVzaChGdC50b3BMZWZ0WSArIEZ0LmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdC5wdXNoKFlbcnRdLnhDb29yZHNbUnRdKSwgVXQucHVzaChZW3J0XS55Q29vcmRzW1J0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEdC5pc1BhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFl0ID0gdC5jYWxjQm91bmRpbmdCb3goRHQsIFlbcnRdLnhDb29yZHMsIFlbcnRdLnlDb29yZHMsIGd0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdC5wdXNoKFl0LnRvcExlZnRYICsgWXQud2lkdGggLyAyKSwgUHQucHVzaChZdC50b3BMZWZ0WSArIFl0LmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdC5wdXNoKFlbcnRdLnhDb29yZHNbSHRdKSwgUHQucHVzaChZW3J0XS55Q29vcmRzW0h0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10LmVkZ2VzLnB1c2goeyBzdGFydFg6IFV0WzBdLCBzdGFydFk6IFV0WzFdLCBlbmRYOiBQdFswXSwgZW5kWTogUHRbMV0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS1tydF1bRXQuaWQoKV0gJiYgS1tydF1bRHQuaWQoKV0gJiYgbXQuZWRnZXMucHVzaCh7IHN0YXJ0WDogS1tydF1bRXQuaWQoKV0uZ2V0Q2VudGVyWCgpLCBzdGFydFk6IEtbcnRdW0V0LmlkKCldLmdldENlbnRlclkoKSwgZW5kWDogS1tydF1bRHQuaWQoKV0uZ2V0Q2VudGVyWCgpLCBlbmRZOiBLW3J0XVtEdC5pZCgpXS5nZXRDZW50ZXJZKCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBtdC5ub2Rlcy5sZW5ndGggPiAwICYmIChILnB1c2gobXQpLCB3LmFkZChydCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfID0gbS5wYWNrQ29tcG9uZW50cyhILCBDLnJhbmRvbWl6ZSkuc2hpZnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDLnF1YWxpdHkgPT0gXCJkcmFmdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWS5mb3JFYWNoKGZ1bmN0aW9uKHZ0LCBydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3QgPSB2dC54Q29vcmRzLm1hcChmdW5jdGlvbihBdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBdCArIF9bcnRdLmR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgbXQgPSB2dC55Q29vcmRzLm1hcChmdW5jdGlvbihBdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBdCArIF9bcnRdLmR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnQueENvb3JkcyA9IGd0LCB2dC55Q29vcmRzID0gbXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LmZvckVhY2goZnVuY3Rpb24odnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoS1t2dF0pLmZvckVhY2goZnVuY3Rpb24ocnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3QgPSBLW3Z0XVtydF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Quc2V0Q2VudGVyKGd0LmdldENlbnRlclgoKSArIF9baHRdLmR4LCBndC5nZXRDZW50ZXJZKCkgKyBfW2h0XS5keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBodCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgRSA9IEMuZWxlcy5ib3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXQucHVzaCh7IHg6IEUueDEgKyBFLncgLyAyLCB5OiBFLnkxICsgRS5oIC8gMiB9KSwgQy5yYW5kb21pemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IHMoQyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWS5wdXNoKHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEMucXVhbGl0eSA9PSBcImRlZmF1bHRcIiB8fCBDLnF1YWxpdHkgPT0gXCJwcm9vZlwiID8gKEsucHVzaChmKEMsIFlbMF0pKSwgdC5yZWxvY2F0ZUNvbXBvbmVudChpdFswXSwgS1swXSwgQykpIDogdC5yZWxvY2F0ZUNvbXBvbmVudChpdFswXSwgWVswXSwgQyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIFEgPSBmdW5jdGlvbihydCwgZ3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDLnF1YWxpdHkgPT0gXCJkZWZhdWx0XCIgfHwgQy5xdWFsaXR5ID09IFwicHJvb2ZcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcnQgPT0gXCJudW1iZXJcIiAmJiAocnQgPSBndCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdCA9IHZvaWQgMCwgQXQgPSB2b2lkIDAsIE90ID0gcnQuZGF0YShcImlkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSy5mb3JFYWNoKGZ1bmN0aW9uKER0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3QgaW4gRHQgJiYgKG10ID0geyB4OiBEdFtPdF0uZ2V0UmVjdCgpLmdldENlbnRlclgoKSwgeTogRHRbT3RdLmdldFJlY3QoKS5nZXRDZW50ZXJZKCkgfSwgQXQgPSBEdFtPdF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgQy5ub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHMgJiYgKEF0LmxhYmVsV2lkdGggJiYgKEF0LmxhYmVsUG9zSG9yaXpvbnRhbCA9PSBcImxlZnRcIiA/IG10LnggKz0gQXQubGFiZWxXaWR0aCAvIDIgOiBBdC5sYWJlbFBvc0hvcml6b250YWwgPT0gXCJyaWdodFwiICYmIChtdC54IC09IEF0LmxhYmVsV2lkdGggLyAyKSksIEF0LmxhYmVsSGVpZ2h0ICYmIChBdC5sYWJlbFBvc1ZlcnRpY2FsID09IFwidG9wXCIgPyBtdC55ICs9IEF0LmxhYmVsSGVpZ2h0IC8gMiA6IEF0LmxhYmVsUG9zVmVydGljYWwgPT0gXCJib3R0b21cIiAmJiAobXQueSAtPSBBdC5sYWJlbEhlaWdodCAvIDIpKSksIG10ID09IG51bGwgJiYgKG10ID0geyB4OiBydC5wb3NpdGlvbihcInhcIiksIHk6IHJ0LnBvc2l0aW9uKFwieVwiKSB9KSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IG10LngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbXQueVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEV0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWS5mb3JFYWNoKGZ1bmN0aW9uKER0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFJ0ID0gRHQubm9kZUluZGV4ZXMuZ2V0KHJ0LmlkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJ0ICE9IG51bGwgJiYgKEV0ID0geyB4OiBEdC54Q29vcmRzW1J0XSwgeTogRHQueUNvb3Jkc1tSdF0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBFdCA9PSBudWxsICYmIChFdCA9IHsgeDogcnQucG9zaXRpb24oXCJ4XCIpLCB5OiBydC5wb3NpdGlvbihcInlcIikgfSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBFdC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IEV0LnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChDLnF1YWxpdHkgPT0gXCJkZWZhdWx0XCIgfHwgQy5xdWFsaXR5ID09IFwicHJvb2ZcIiB8fCBDLnJhbmRvbWl6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEl0ID0gdC5jYWxjUGFyZW50c1dpdGhvdXRDaGlsZHJlbihHLCBaKSwgTnQgPSBaLmZpbHRlcihmdW5jdGlvbih2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdnQuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgQy5lbGVzID0gWi5ub3QoTnQpLCBaLm5vZGVzKCkubm90KFwiOnBhcmVudFwiKS5ub3QoTnQpLmxheW91dFBvc2l0aW9ucyhiLCBDLCBRKSwgSXQubGVuZ3RoID4gMCAmJiBJdC5mb3JFYWNoKGZ1bmN0aW9uKHZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZ0LnBvc2l0aW9uKFEodnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJZiByYW5kb21pemUgb3B0aW9uIGlzIHNldCB0byBmYWxzZSwgdGhlbiBxdWFsaXR5IG9wdGlvbiBtdXN0IGJlICdkZWZhdWx0JyBvciAncHJvb2YnLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfV0pLCB2O1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgYS5leHBvcnRzID0gZDtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgNjU3OiAoXG4gICAgICAgICAgICAgIC8qKiovXG4gICAgICAgICAgICAgICgoYSwgZSwgcikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBsID0gcig1NDgpLCBpID0gcigxNDApLmxheW91dEJhc2UuTWF0cml4LCBnID0gcigxNDApLmxheW91dEJhc2UuU1ZELCB0ID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgICAgdmFyIGMgPSBzLmN5LCBmID0gcy5lbGVzLCBUID0gZi5ub2RlcygpLCBkID0gZi5ub2RlcyhcIjpwYXJlbnRcIiksIHYgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBMID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgYiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIEMgPSBbXSwgRyA9IFtdLCBaID0gW10sIFkgPSBbXSwgSyA9IFtdLCBPID0gW10sIGl0ID0gW10sIG4gPSBbXSwgbSA9IHZvaWQgMCwgcCA9IDFlOCwgRSA9IDFlLTksIHkgPSBzLnBpVG9sLCBSID0gcy5zYW1wbGluZ1R5cGUsIE0gPSBzLm5vZGVTZXBhcmF0aW9uLCBTID0gdm9pZCAwLCBXID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFUgPSAwLCBCID0gMCwgSiA9ICExOyBCIDwgUzsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgVSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0pLCBKID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBCOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoWVtrXSA9PSBVKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEogPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFKKVxuICAgICAgICAgICAgICAgICAgICAgICAgWVtCXSA9IFUsIEIrKztcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgRCA9IGZ1bmN0aW9uKFUsIEIsIEopIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IFtdLCBhdCA9IDAsIGN0ID0gMCwgbnQgPSAwLCB0dCA9IHZvaWQgMCwgaiA9IFtdLCB1dCA9IDAsIE10ID0gMSwgcHQgPSAwOyBwdCA8IG07IHB0KyspXG4gICAgICAgICAgICAgICAgICAgICAgaltwdF0gPSBwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGtbY3RdID0gVSwgaltVXSA9IDA7IGN0ID49IGF0OyApIHtcbiAgICAgICAgICAgICAgICAgICAgICBudCA9IGtbYXQrK107XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeHQgPSBDW250XSwgbHQgPSAwOyBsdCA8IHh0Lmxlbmd0aDsgbHQrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIHR0ID0gTC5nZXQoeHRbbHRdKSwgalt0dF0gPT0gcCAmJiAoalt0dF0gPSBqW250XSArIDEsIGtbKytjdF0gPSB0dCk7XG4gICAgICAgICAgICAgICAgICAgICAgT1tudF1bQl0gPSBqW250XSAqIE07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKEopIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBvdCA9IDA7IG90IDwgbTsgb3QrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIE9bb3RdW0JdIDwgS1tvdF0gJiYgKEtbb3RdID0gT1tvdF1bQl0pO1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEx0ID0gMDsgTHQgPCBtOyBMdCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgS1tMdF0gPiB1dCAmJiAodXQgPSBLW0x0XSwgTXQgPSBMdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE10O1xuICAgICAgICAgICAgICAgICAgfSwgcSA9IGZ1bmN0aW9uKFUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgICAgICAgQiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0pO1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgbTsgaysrKVxuICAgICAgICAgICAgICAgICAgICAgICAgS1trXSA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYXQgPSAwOyBhdCA8IFM7IGF0KyspXG4gICAgICAgICAgICAgICAgICAgICAgICBZW2F0XSA9IEIsIEIgPSBEKEIsIGF0LCBVKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBXKCk7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgSiA9IDA7IEogPCBTOyBKKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBEKFlbSl0sIEosIFUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGN0ID0gMDsgY3QgPCBtOyBjdCsrKVxuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG50ID0gMDsgbnQgPCBTOyBudCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgT1tjdF1bbnRdICo9IE9bY3RdW250XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdHQgPSAwOyB0dCA8IFM7IHR0KyspXG4gICAgICAgICAgICAgICAgICAgICAgaXRbdHRdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgUzsgaisrKVxuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHV0ID0gMDsgdXQgPCBTOyB1dCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRbal1bdXRdID0gT1tZW3V0XV1bal07XG4gICAgICAgICAgICAgICAgICB9LCBWID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFUgPSBnLnN2ZChpdCksIEIgPSBVLlMsIEogPSBVLlUsIGsgPSBVLlYsIGF0ID0gQlswXSAqIEJbMF0gKiBCWzBdLCBjdCA9IFtdLCBudCA9IDA7IG50IDwgUzsgbnQrKykge1xuICAgICAgICAgICAgICAgICAgICAgIGN0W250XSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHR0ID0gMDsgdHQgPCBTOyB0dCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3RbbnRdW3R0XSA9IDAsIG50ID09IHR0ICYmIChjdFtudF1bdHRdID0gQltudF0gLyAoQltudF0gKiBCW250XSArIGF0IC8gKEJbbnRdICogQltudF0pKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbiA9IGkubXVsdE1hdChpLm11bHRNYXQoaywgY3QpLCBpLnRyYW5zcG9zZShKKSk7XG4gICAgICAgICAgICAgICAgICB9LCBYID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFUgPSB2b2lkIDAsIEIgPSB2b2lkIDAsIEogPSBbXSwgayA9IFtdLCBhdCA9IFtdLCBjdCA9IFtdLCBudCA9IDA7IG50IDwgbTsgbnQrKylcbiAgICAgICAgICAgICAgICAgICAgICBKW250XSA9IE1hdGgucmFuZG9tKCksIGtbbnRdID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgSiA9IGkubm9ybWFsaXplKEopLCBrID0gaS5ub3JtYWxpemUoayk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHR0ID0gRSwgaiA9IEUsIHV0ID0gdm9pZCAwOyA7ICkge1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIE10ID0gMDsgTXQgPCBtOyBNdCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXRbTXRdID0gSltNdF07XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKEogPSBpLm11bHRHYW1tYShpLm11bHRMKGkubXVsdEdhbW1hKGF0KSwgTywgbikpLCBVID0gaS5kb3RQcm9kdWN0KGF0LCBKKSwgSiA9IGkubm9ybWFsaXplKEopLCB0dCA9IGkuZG90UHJvZHVjdChhdCwgSiksIHV0ID0gTWF0aC5hYnModHQgLyBqKSwgdXQgPD0gMSArIHkgJiYgdXQgPj0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGogPSB0dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwdCA9IDA7IHB0IDwgbTsgcHQrKylcbiAgICAgICAgICAgICAgICAgICAgICBhdFtwdF0gPSBKW3B0XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gRTsgOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4dCA9IDA7IHh0IDwgbTsgeHQrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0W3h0XSA9IGtbeHRdO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChjdCA9IGkubWludXNPcChjdCwgaS5tdWx0Q29ucyhhdCwgaS5kb3RQcm9kdWN0KGF0LCBjdCkpKSwgayA9IGkubXVsdEdhbW1hKGkubXVsdEwoaS5tdWx0R2FtbWEoY3QpLCBPLCBuKSksIEIgPSBpLmRvdFByb2R1Y3QoY3QsIGspLCBrID0gaS5ub3JtYWxpemUoayksIHR0ID0gaS5kb3RQcm9kdWN0KGN0LCBrKSwgdXQgPSBNYXRoLmFicyh0dCAvIGopLCB1dCA8PSAxICsgeSAmJiB1dCA+PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgaiA9IHR0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGx0ID0gMDsgbHQgPCBtOyBsdCsrKVxuICAgICAgICAgICAgICAgICAgICAgIGN0W2x0XSA9IGtbbHRdO1xuICAgICAgICAgICAgICAgICAgICBHID0gaS5tdWx0Q29ucyhhdCwgTWF0aC5zcXJ0KE1hdGguYWJzKFUpKSksIFogPSBpLm11bHRDb25zKGN0LCBNYXRoLnNxcnQoTWF0aC5hYnMoQikpKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBsLmNvbm5lY3RDb21wb25lbnRzKGMsIGYsIGwuZ2V0VG9wTW9zdE5vZGVzKFQpLCB2KSwgZC5mb3JFYWNoKGZ1bmN0aW9uKEYpIHtcbiAgICAgICAgICAgICAgICAgICAgbC5jb25uZWN0Q29tcG9uZW50cyhjLCBmLCBsLmdldFRvcE1vc3ROb2RlcyhGLmRlc2NlbmRhbnRzKCkuaW50ZXJzZWN0aW9uKGYpKSwgdik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGV0ID0gMCwgeiA9IDA7IHogPCBULmxlbmd0aDsgeisrKVxuICAgICAgICAgICAgICAgICAgICBUW3pdLmlzUGFyZW50KCkgfHwgTC5zZXQoVFt6XS5pZCgpLCBldCsrKTtcbiAgICAgICAgICAgICAgICAgIHZhciB3ID0gITAsIEggPSAhMSwgJCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF8gPSB2LmtleXMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIGh0OyAhKHcgPSAoaHQgPSBfLm5leHQoKSkuZG9uZSk7IHcgPSAhMCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBRID0gaHQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgTC5zZXQoUSwgZXQrKyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKEYpIHtcbiAgICAgICAgICAgICAgICAgICAgSCA9ICEwLCAkID0gRjtcbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgIXcgJiYgXy5yZXR1cm4gJiYgXy5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoSClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93ICQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIEl0ID0gMDsgSXQgPCBMLnNpemU7IEl0KyspXG4gICAgICAgICAgICAgICAgICAgIENbSXRdID0gW107XG4gICAgICAgICAgICAgICAgICBkLmZvckVhY2goZnVuY3Rpb24oRikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBVID0gRi5jaGlsZHJlbigpLmludGVyc2VjdGlvbihmKTsgVS5ub2RlcyhcIjpjaGlsZGxlc3NcIikubGVuZ3RoID09IDA7IClcbiAgICAgICAgICAgICAgICAgICAgICBVID0gVS5ub2RlcygpWzBdLmNoaWxkcmVuKCkuaW50ZXJzZWN0aW9uKGYpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgQiA9IDAsIEogPSBVLm5vZGVzKFwiOmNoaWxkbGVzc1wiKVswXS5jb25uZWN0ZWRFZGdlcygpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgVS5ub2RlcyhcIjpjaGlsZGxlc3NcIikuZm9yRWFjaChmdW5jdGlvbihrLCBhdCkge1xuICAgICAgICAgICAgICAgICAgICAgIGsuY29ubmVjdGVkRWRnZXMoKS5sZW5ndGggPCBKICYmIChKID0gay5jb25uZWN0ZWRFZGdlcygpLmxlbmd0aCwgQiA9IGF0KTtcbiAgICAgICAgICAgICAgICAgICAgfSksIGIuc2V0KEYuaWQoKSwgVS5ub2RlcyhcIjpjaGlsZGxlc3NcIilbQl0uaWQoKSk7XG4gICAgICAgICAgICAgICAgICB9KSwgVC5mb3JFYWNoKGZ1bmN0aW9uKEYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIEYuaXNQYXJlbnQoKSA/IFUgPSBMLmdldChiLmdldChGLmlkKCkpKSA6IFUgPSBMLmdldChGLmlkKCkpLCBGLm5laWdoYm9yaG9vZCgpLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbihCKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZi5pbnRlcnNlY3Rpb24oRi5lZGdlc1dpdGgoQikpLmxlbmd0aCA+IDAgJiYgKEIuaXNQYXJlbnQoKSA/IENbVV0ucHVzaChiLmdldChCLmlkKCkpKSA6IENbVV0ucHVzaChCLmlkKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHZhciBOdCA9IGZ1bmN0aW9uKFUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEIgPSBMLmdldChVKSwgSiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdi5nZXQoVSkuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYy5nZXRFbGVtZW50QnlJZChrKS5pc1BhcmVudCgpID8gSiA9IGIuZ2V0KGspIDogSiA9IGssIENbQl0ucHVzaChKKSwgQ1tMLmdldChKKV0ucHVzaChVKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9LCB2dCA9ICEwLCBydCA9ICExLCBndCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG10ID0gdi5rZXlzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBBdDsgISh2dCA9IChBdCA9IG10Lm5leHQoKSkuZG9uZSk7IHZ0ID0gITApIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgT3QgPSBBdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICBOdChPdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKEYpIHtcbiAgICAgICAgICAgICAgICAgICAgcnQgPSAhMCwgZ3QgPSBGO1xuICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAhdnQgJiYgbXQucmV0dXJuICYmIG10LnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChydClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGd0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBtID0gTC5zaXplO1xuICAgICAgICAgICAgICAgICAgdmFyIEV0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgaWYgKG0gPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIFMgPSBtIDwgcy5zYW1wbGVTaXplID8gbSA6IHMuc2FtcGxlU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgRHQgPSAwOyBEdCA8IG07IER0KyspXG4gICAgICAgICAgICAgICAgICAgICAgT1tEdF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgUnQgPSAwOyBSdCA8IFM7IFJ0KyspXG4gICAgICAgICAgICAgICAgICAgICAgbltSdF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMucXVhbGl0eSA9PSBcImRyYWZ0XCIgfHwgcy5zdGVwID09IFwiYWxsXCIgPyAocShSKSwgVigpLCBYKCksIEV0ID0geyBub2RlSW5kZXhlczogTCwgeENvb3JkczogRywgeUNvb3JkczogWiB9KSA6IChMLmZvckVhY2goZnVuY3Rpb24oRiwgVSkge1xuICAgICAgICAgICAgICAgICAgICAgIEcucHVzaChjLmdldEVsZW1lbnRCeUlkKFUpLnBvc2l0aW9uKFwieFwiKSksIFoucHVzaChjLmdldEVsZW1lbnRCeUlkKFUpLnBvc2l0aW9uKFwieVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBFdCA9IHsgbm9kZUluZGV4ZXM6IEwsIHhDb29yZHM6IEcsIHlDb29yZHM6IFogfSksIEV0O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEh0ID0gTC5rZXlzKCksIFV0ID0gYy5nZXRFbGVtZW50QnlJZChIdC5uZXh0KCkudmFsdWUpLCBQdCA9IFV0LnBvc2l0aW9uKCksIEZ0ID0gVXQub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoRy5wdXNoKFB0LngpLCBaLnB1c2goUHQueSksIG0gPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBZdCA9IGMuZ2V0RWxlbWVudEJ5SWQoSHQubmV4dCgpLnZhbHVlKSwgVnQgPSBZdC5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgRy5wdXNoKFB0LnggKyBGdCAvIDIgKyBWdCAvIDIgKyBzLmlkZWFsRWRnZUxlbmd0aCksIFoucHVzaChQdC55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRXQgPSB7IG5vZGVJbmRleGVzOiBMLCB4Q29vcmRzOiBHLCB5Q29vcmRzOiBaIH0sIEV0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYS5leHBvcnRzID0geyBzcGVjdHJhbExheW91dDogdCB9O1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC8qKiovXG4gICAgICAgICAgICA1Nzk6IChcbiAgICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgICAgKChhLCBlLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSByKDIxMiksIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICB0ICYmIHQoXCJsYXlvdXRcIiwgXCJmY29zZVwiLCBsKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHR5cGVvZiBjeXRvc2NhcGUgPCBcInVcIiAmJiBpKGN5dG9zY2FwZSksIGEuZXhwb3J0cyA9IGk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLyoqKi9cbiAgICAgICAgICAgIDE0MDogKFxuICAgICAgICAgICAgICAvKioqL1xuICAgICAgICAgICAgICAoKGEpID0+IHtcbiAgICAgICAgICAgICAgICBhLmV4cG9ydHMgPSBBO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICB9LCBOID0ge307XG4gICAgICAgICAgZnVuY3Rpb24gdShhKSB7XG4gICAgICAgICAgICB2YXIgZSA9IE5bYV07XG4gICAgICAgICAgICBpZiAoZSAhPT0gdm9pZCAwKVxuICAgICAgICAgICAgICByZXR1cm4gZS5leHBvcnRzO1xuICAgICAgICAgICAgdmFyIHIgPSBOW2FdID0ge1xuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgICAvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICAgIC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFBbYV0ociwgci5leHBvcnRzLCB1KSwgci5leHBvcnRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgaCA9IHUoNTc5KTtcbiAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgfSkoKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSkoaGUpKSwgaGUuZXhwb3J0cztcbn1cbnZhciBFciA9IHlyKCk7XG5jb25zdCBtciA9IC8qIEBfX1BVUkVfXyAqLyBrZShFcik7XG52YXIgeGUgPSB7XG4gIEw6IFwibGVmdFwiLFxuICBSOiBcInJpZ2h0XCIsXG4gIFQ6IFwidG9wXCIsXG4gIEI6IFwiYm90dG9tXCJcbn0sIEllID0ge1xuICBMOiAvKiBAX19QVVJFX18gKi8gZHQoKEkpID0+IGAke0l9LCR7SSAvIDJ9IDAsJHtJfSAwLDBgLCBcIkxcIiksXG4gIFI6IC8qIEBfX1BVUkVfXyAqLyBkdCgoSSkgPT4gYDAsJHtJIC8gMn0gJHtJfSwwICR7SX0sJHtJfWAsIFwiUlwiKSxcbiAgVDogLyogQF9fUFVSRV9fICovIGR0KChJKSA9PiBgMCwwICR7SX0sMCAke0kgLyAyfSwke0l9YCwgXCJUXCIpLFxuICBCOiAvKiBAX19QVVJFX18gKi8gZHQoKEkpID0+IGAke0kgLyAyfSwwICR7SX0sJHtJfSAwLCR7SX1gLCBcIkJcIilcbn0sIHNlID0ge1xuICBMOiAvKiBAX19QVVJFX18gKi8gZHQoKEksIHgpID0+IEkgLSB4ICsgMiwgXCJMXCIpLFxuICBSOiAvKiBAX19QVVJFX18gKi8gZHQoKEksIHgpID0+IEkgLSAyLCBcIlJcIiksXG4gIFQ6IC8qIEBfX1BVUkVfXyAqLyBkdCgoSSwgeCkgPT4gSSAtIHggKyAyLCBcIlRcIiksXG4gIEI6IC8qIEBfX1BVUkVfXyAqLyBkdCgoSSwgeCkgPT4gSSAtIDIsIFwiQlwiKVxufSwgVHIgPSAvKiBAX19QVVJFX18gKi8gZHQoZnVuY3Rpb24oSSkge1xuICByZXR1cm4gV3QoSSkgPyBJID09PSBcIkxcIiA/IFwiUlwiIDogXCJMXCIgOiBJID09PSBcIlRcIiA/IFwiQlwiIDogXCJUXCI7XG59LCBcImdldE9wcG9zaXRlQXJjaGl0ZWN0dXJlRGlyZWN0aW9uXCIpLCBSZSA9IC8qIEBfX1BVUkVfXyAqLyBkdChmdW5jdGlvbihJKSB7XG4gIGNvbnN0IHggPSBJO1xuICByZXR1cm4geCA9PT0gXCJMXCIgfHwgeCA9PT0gXCJSXCIgfHwgeCA9PT0gXCJUXCIgfHwgeCA9PT0gXCJCXCI7XG59LCBcImlzQXJjaGl0ZWN0dXJlRGlyZWN0aW9uXCIpLCBXdCA9IC8qIEBfX1BVUkVfXyAqLyBkdChmdW5jdGlvbihJKSB7XG4gIGNvbnN0IHggPSBJO1xuICByZXR1cm4geCA9PT0gXCJMXCIgfHwgeCA9PT0gXCJSXCI7XG59LCBcImlzQXJjaGl0ZWN0dXJlRGlyZWN0aW9uWFwiKSwgcXQgPSAvKiBAX19QVVJFX18gKi8gZHQoZnVuY3Rpb24oSSkge1xuICBjb25zdCB4ID0gSTtcbiAgcmV0dXJuIHggPT09IFwiVFwiIHx8IHggPT09IFwiQlwiO1xufSwgXCJpc0FyY2hpdGVjdHVyZURpcmVjdGlvbllcIiksIFRlID0gLyogQF9fUFVSRV9fICovIGR0KGZ1bmN0aW9uKEksIHgpIHtcbiAgY29uc3QgQSA9IFd0KEkpICYmIHF0KHgpLCBQID0gcXQoSSkgJiYgV3QoeCk7XG4gIHJldHVybiBBIHx8IFA7XG59LCBcImlzQXJjaGl0ZWN0dXJlRGlyZWN0aW9uWFlcIiksIE5yID0gLyogQF9fUFVSRV9fICovIGR0KGZ1bmN0aW9uKEkpIHtcbiAgY29uc3QgeCA9IElbMF0sIEEgPSBJWzFdLCBQID0gV3QoeCkgJiYgcXQoQSksIE4gPSBxdCh4KSAmJiBXdChBKTtcbiAgcmV0dXJuIFAgfHwgTjtcbn0sIFwiaXNBcmNoaXRlY3R1cmVQYWlyWFlcIiksIExyID0gLyogQF9fUFVSRV9fICovIGR0KGZ1bmN0aW9uKEkpIHtcbiAgcmV0dXJuIEkgIT09IFwiTExcIiAmJiBJICE9PSBcIlJSXCIgJiYgSSAhPT0gXCJUVFwiICYmIEkgIT09IFwiQkJcIjtcbn0sIFwiaXNWYWxpZEFyY2hpdGVjdHVyZURpcmVjdGlvblBhaXJcIiksIHllID0gLyogQF9fUFVSRV9fICovIGR0KGZ1bmN0aW9uKEksIHgpIHtcbiAgY29uc3QgQSA9IGAke0l9JHt4fWA7XG4gIHJldHVybiBMcihBKSA/IEEgOiB2b2lkIDA7XG59LCBcImdldEFyY2hpdGVjdHVyZURpcmVjdGlvblBhaXJcIiksIENyID0gLyogQF9fUFVSRV9fICovIGR0KGZ1bmN0aW9uKFtJLCB4XSwgQSkge1xuICBjb25zdCBQID0gQVswXSwgTiA9IEFbMV07XG4gIHJldHVybiBXdChQKSA/IHF0KE4pID8gW0kgKyAoUCA9PT0gXCJMXCIgPyAtMSA6IDEpLCB4ICsgKE4gPT09IFwiVFwiID8gMSA6IC0xKV0gOiBbSSArIChQID09PSBcIkxcIiA/IC0xIDogMSksIHhdIDogV3QoTikgPyBbSSArIChOID09PSBcIkxcIiA/IDEgOiAtMSksIHggKyAoUCA9PT0gXCJUXCIgPyAxIDogLTEpXSA6IFtJLCB4ICsgKFAgPT09IFwiVFwiID8gMSA6IC0xKV07XG59LCBcInNoaWZ0UG9zaXRpb25CeUFyY2hpdGVjdHVyZURpcmVjdGlvblBhaXJcIiksIEFyID0gLyogQF9fUFVSRV9fICovIGR0KGZ1bmN0aW9uKEkpIHtcbiAgcmV0dXJuIEkgPT09IFwiTFRcIiB8fCBJID09PSBcIlRMXCIgPyBbMSwgMV0gOiBJID09PSBcIkJMXCIgfHwgSSA9PT0gXCJMQlwiID8gWzEsIC0xXSA6IEkgPT09IFwiQlJcIiB8fCBJID09PSBcIlJCXCIgPyBbLTEsIC0xXSA6IFstMSwgMV07XG59LCBcImdldEFyY2hpdGVjdHVyZURpcmVjdGlvblhZRmFjdG9yc1wiKSwgTXIgPSAvKiBAX19QVVJFX18gKi8gZHQoZnVuY3Rpb24oSSwgeCkge1xuICByZXR1cm4gVGUoSSwgeCkgPyBcImJlbmRcIiA6IFd0KEkpID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG59LCBcImdldEFyY2hpdGVjdHVyZURpcmVjdGlvbkFsaWdubWVudFwiKSwgd3IgPSAvKiBAX19QVVJFX18gKi8gZHQoZnVuY3Rpb24oSSkge1xuICByZXR1cm4gSS50eXBlID09PSBcInNlcnZpY2VcIjtcbn0sIFwiaXNBcmNoaXRlY3R1cmVTZXJ2aWNlXCIpLCBPciA9IC8qIEBfX1BVUkVfXyAqLyBkdChmdW5jdGlvbihJKSB7XG4gIHJldHVybiBJLnR5cGUgPT09IFwianVuY3Rpb25cIjtcbn0sIFwiaXNBcmNoaXRlY3R1cmVKdW5jdGlvblwiKSwgYmUgPSAvKiBAX19QVVJFX18gKi8gZHQoKEkpID0+IEkuZGF0YSgpLCBcImVkZ2VEYXRhXCIpLCBpZSA9IC8qIEBfX1BVUkVfXyAqLyBkdCgoSSkgPT4gSS5kYXRhKCksIFwibm9kZURhdGFcIiksIERyID0gYXIuYXJjaGl0ZWN0dXJlLCBhZSwgUGUgPSAoYWUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubm9kZXMgPSB7fSwgdGhpcy5ncm91cHMgPSB7fSwgdGhpcy5lZGdlcyA9IFtdLCB0aGlzLnJlZ2lzdGVyZWRJZHMgPSB7fSwgdGhpcy5lbGVtZW50cyA9IHt9LCB0aGlzLnNldEFjY1RpdGxlID0gUWUsIHRoaXMuZ2V0QWNjVGl0bGUgPSBKZSwgdGhpcy5zZXREaWFncmFtVGl0bGUgPSBLZSwgdGhpcy5nZXREaWFncmFtVGl0bGUgPSBqZSwgdGhpcy5nZXRBY2NEZXNjcmlwdGlvbiA9IF9lLCB0aGlzLnNldEFjY0Rlc2NyaXB0aW9uID0gdHIsIHRoaXMuY2xlYXIoKTtcbiAgfVxuICBjbGVhcigpIHtcbiAgICB0aGlzLm5vZGVzID0ge30sIHRoaXMuZ3JvdXBzID0ge30sIHRoaXMuZWRnZXMgPSBbXSwgdGhpcy5yZWdpc3RlcmVkSWRzID0ge30sIHRoaXMuZGF0YVN0cnVjdHVyZXMgPSB2b2lkIDAsIHRoaXMuZWxlbWVudHMgPSB7fSwgZXIoKTtcbiAgfVxuICBhZGRTZXJ2aWNlKHtcbiAgICBpZDogeCxcbiAgICBpY29uOiBBLFxuICAgIGluOiBQLFxuICAgIHRpdGxlOiBOLFxuICAgIGljb25UZXh0OiB1XG4gIH0pIHtcbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkSWRzW3hdICE9PSB2b2lkIDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgc2VydmljZSBpZCBbJHt4fV0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciAke3RoaXMucmVnaXN0ZXJlZElkc1t4XX1gXG4gICAgICApO1xuICAgIGlmIChQICE9PSB2b2lkIDApIHtcbiAgICAgIGlmICh4ID09PSBQKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBzZXJ2aWNlIFske3h9XSBjYW5ub3QgYmUgcGxhY2VkIHdpdGhpbiBpdHNlbGZgKTtcbiAgICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRJZHNbUF0gPT09IHZvaWQgMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBUaGUgc2VydmljZSBbJHt4fV0ncyBwYXJlbnQgZG9lcyBub3QgZXhpc3QuIFBsZWFzZSBtYWtlIHN1cmUgdGhlIHBhcmVudCBpcyBjcmVhdGVkIGJlZm9yZSB0aGlzIHNlcnZpY2VgXG4gICAgICAgICk7XG4gICAgICBpZiAodGhpcy5yZWdpc3RlcmVkSWRzW1BdID09PSBcIm5vZGVcIilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgc2VydmljZSBbJHt4fV0ncyBwYXJlbnQgaXMgbm90IGEgZ3JvdXBgKTtcbiAgICB9XG4gICAgdGhpcy5yZWdpc3RlcmVkSWRzW3hdID0gXCJub2RlXCIsIHRoaXMubm9kZXNbeF0gPSB7XG4gICAgICBpZDogeCxcbiAgICAgIHR5cGU6IFwic2VydmljZVwiLFxuICAgICAgaWNvbjogQSxcbiAgICAgIGljb25UZXh0OiB1LFxuICAgICAgdGl0bGU6IE4sXG4gICAgICBlZGdlczogW10sXG4gICAgICBpbjogUFxuICAgIH07XG4gIH1cbiAgZ2V0U2VydmljZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5ub2RlcykuZmlsdGVyKHdyKTtcbiAgfVxuICBhZGRKdW5jdGlvbih7IGlkOiB4LCBpbjogQSB9KSB7XG4gICAgdGhpcy5yZWdpc3RlcmVkSWRzW3hdID0gXCJub2RlXCIsIHRoaXMubm9kZXNbeF0gPSB7XG4gICAgICBpZDogeCxcbiAgICAgIHR5cGU6IFwianVuY3Rpb25cIixcbiAgICAgIGVkZ2VzOiBbXSxcbiAgICAgIGluOiBBXG4gICAgfTtcbiAgfVxuICBnZXRKdW5jdGlvbnMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5ub2RlcykuZmlsdGVyKE9yKTtcbiAgfVxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLm5vZGVzKTtcbiAgfVxuICBnZXROb2RlKHgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1t4XSA/PyBudWxsO1xuICB9XG4gIGFkZEdyb3VwKHsgaWQ6IHgsIGljb246IEEsIGluOiBQLCB0aXRsZTogTiB9KSB7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZElkcz8uW3hdICE9PSB2b2lkIDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgZ3JvdXAgaWQgWyR7eH1dIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgJHt0aGlzLnJlZ2lzdGVyZWRJZHNbeF19YFxuICAgICAgKTtcbiAgICBpZiAoUCAhPT0gdm9pZCAwKSB7XG4gICAgICBpZiAoeCA9PT0gUClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZ3JvdXAgWyR7eH1dIGNhbm5vdCBiZSBwbGFjZWQgd2l0aGluIGl0c2VsZmApO1xuICAgICAgaWYgKHRoaXMucmVnaXN0ZXJlZElkcz8uW1BdID09PSB2b2lkIDApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVGhlIGdyb3VwIFske3h9XSdzIHBhcmVudCBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgcGFyZW50IGlzIGNyZWF0ZWQgYmVmb3JlIHRoaXMgZ3JvdXBgXG4gICAgICAgICk7XG4gICAgICBpZiAodGhpcy5yZWdpc3RlcmVkSWRzPy5bUF0gPT09IFwibm9kZVwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBncm91cCBbJHt4fV0ncyBwYXJlbnQgaXMgbm90IGEgZ3JvdXBgKTtcbiAgICB9XG4gICAgdGhpcy5yZWdpc3RlcmVkSWRzW3hdID0gXCJncm91cFwiLCB0aGlzLmdyb3Vwc1t4XSA9IHtcbiAgICAgIGlkOiB4LFxuICAgICAgaWNvbjogQSxcbiAgICAgIHRpdGxlOiBOLFxuICAgICAgaW46IFBcbiAgICB9O1xuICB9XG4gIGdldEdyb3VwcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmdyb3Vwcyk7XG4gIH1cbiAgYWRkRWRnZSh7XG4gICAgbGhzSWQ6IHgsXG4gICAgcmhzSWQ6IEEsXG4gICAgbGhzRGlyOiBQLFxuICAgIHJoc0RpcjogTixcbiAgICBsaHNJbnRvOiB1LFxuICAgIHJoc0ludG86IGgsXG4gICAgbGhzR3JvdXA6IGEsXG4gICAgcmhzR3JvdXA6IGUsXG4gICAgdGl0bGU6IHJcbiAgfSkge1xuICAgIGlmICghUmUoUCkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIGRpcmVjdGlvbiBnaXZlbiBmb3IgbGVmdCBoYW5kIHNpZGUgb2YgZWRnZSAke3h9LS0ke0F9LiBFeHBlY3RlZCAoTCxSLFQsQikgZ290ICR7U3RyaW5nKFApfWBcbiAgICAgICk7XG4gICAgaWYgKCFSZShOKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgZGlyZWN0aW9uIGdpdmVuIGZvciByaWdodCBoYW5kIHNpZGUgb2YgZWRnZSAke3h9LS0ke0F9LiBFeHBlY3RlZCAoTCxSLFQsQikgZ290ICR7U3RyaW5nKE4pfWBcbiAgICAgICk7XG4gICAgaWYgKHRoaXMubm9kZXNbeF0gPT09IHZvaWQgMCAmJiB0aGlzLmdyb3Vwc1t4XSA9PT0gdm9pZCAwKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlIGxlZnQtaGFuZCBpZCBbJHt4fV0gZG9lcyBub3QgeWV0IGV4aXN0LiBQbGVhc2UgY3JlYXRlIHRoZSBzZXJ2aWNlL2dyb3VwIGJlZm9yZSBkZWNsYXJpbmcgYW4gZWRnZSB0byBpdC5gXG4gICAgICApO1xuICAgIGlmICh0aGlzLm5vZGVzW0FdID09PSB2b2lkIDAgJiYgdGhpcy5ncm91cHNbQV0gPT09IHZvaWQgMClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRoZSByaWdodC1oYW5kIGlkIFske0F9XSBkb2VzIG5vdCB5ZXQgZXhpc3QuIFBsZWFzZSBjcmVhdGUgdGhlIHNlcnZpY2UvZ3JvdXAgYmVmb3JlIGRlY2xhcmluZyBhbiBlZGdlIHRvIGl0LmBcbiAgICAgICk7XG4gICAgY29uc3QgbCA9IHRoaXMubm9kZXNbeF0uaW4sIGkgPSB0aGlzLm5vZGVzW0FdLmluO1xuICAgIGlmIChhICYmIGwgJiYgaSAmJiBsID09IGkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgbGVmdC1oYW5kIGlkIFske3h9XSBpcyBtb2RpZmllZCB0byB0cmF2ZXJzZSB0aGUgZ3JvdXAgYm91bmRhcnksIGJ1dCB0aGUgZWRnZSBkb2VzIG5vdCBwYXNzIHRocm91Z2ggdHdvIGdyb3Vwcy5gXG4gICAgICApO1xuICAgIGlmIChlICYmIGwgJiYgaSAmJiBsID09IGkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgcmlnaHQtaGFuZCBpZCBbJHtBfV0gaXMgbW9kaWZpZWQgdG8gdHJhdmVyc2UgdGhlIGdyb3VwIGJvdW5kYXJ5LCBidXQgdGhlIGVkZ2UgZG9lcyBub3QgcGFzcyB0aHJvdWdoIHR3byBncm91cHMuYFxuICAgICAgKTtcbiAgICBjb25zdCBnID0ge1xuICAgICAgbGhzSWQ6IHgsXG4gICAgICBsaHNEaXI6IFAsXG4gICAgICBsaHNJbnRvOiB1LFxuICAgICAgbGhzR3JvdXA6IGEsXG4gICAgICByaHNJZDogQSxcbiAgICAgIHJoc0RpcjogTixcbiAgICAgIHJoc0ludG86IGgsXG4gICAgICByaHNHcm91cDogZSxcbiAgICAgIHRpdGxlOiByXG4gICAgfTtcbiAgICB0aGlzLmVkZ2VzLnB1c2goZyksIHRoaXMubm9kZXNbeF0gJiYgdGhpcy5ub2Rlc1tBXSAmJiAodGhpcy5ub2Rlc1t4XS5lZGdlcy5wdXNoKHRoaXMuZWRnZXNbdGhpcy5lZGdlcy5sZW5ndGggLSAxXSksIHRoaXMubm9kZXNbQV0uZWRnZXMucHVzaCh0aGlzLmVkZ2VzW3RoaXMuZWRnZXMubGVuZ3RoIC0gMV0pKTtcbiAgfVxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBkaWFncmFtJ3MgYWRqYWNlbmN5IGxpc3QsIHNwYXRpYWwgbWFwLCAmIGdyb3VwIGFsaWdubWVudHMuXG4gICAqIElmIHRoZXkgaGF2ZSBub3QgYmVlbiBjcmVhdGVkLCBydW4gdGhlIGFsZ29yaXRobXMgdG8gZ2VuZXJhdGUgdGhlbS5cbiAgICogQHJldHVybnNcbiAgICovXG4gIGdldERhdGFTdHJ1Y3R1cmVzKCkge1xuICAgIGlmICh0aGlzLmRhdGFTdHJ1Y3R1cmVzID09PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IHggPSB7fSwgQSA9IE9iamVjdC5lbnRyaWVzKHRoaXMubm9kZXMpLnJlZHVjZSgoZSwgW3IsIGxdKSA9PiAoZVtyXSA9IGwuZWRnZXMucmVkdWNlKChpLCBnKSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLmdldE5vZGUoZy5saHNJZCk/LmluLCBvID0gdGhpcy5nZXROb2RlKGcucmhzSWQpPy5pbjtcbiAgICAgICAgaWYgKHQgJiYgbyAmJiB0ICE9PSBvKSB7XG4gICAgICAgICAgY29uc3QgcyA9IE1yKGcubGhzRGlyLCBnLnJoc0Rpcik7XG4gICAgICAgICAgcyAhPT0gXCJiZW5kXCIgJiYgKHhbdF0gPz89IHt9LCB4W3RdW29dID0gcywgeFtvXSA/Pz0ge30sIHhbb11bdF0gPSBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZy5saHNJZCA9PT0gcikge1xuICAgICAgICAgIGNvbnN0IHMgPSB5ZShnLmxoc0RpciwgZy5yaHNEaXIpO1xuICAgICAgICAgIHMgJiYgKGlbc10gPSBnLnJoc0lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzID0geWUoZy5yaHNEaXIsIGcubGhzRGlyKTtcbiAgICAgICAgICBzICYmIChpW3NdID0gZy5saHNJZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9LCB7fSksIGUpLCB7fSksIFAgPSBPYmplY3Qua2V5cyhBKVswXSwgTiA9IHsgW1BdOiAxIH0sIHUgPSBPYmplY3Qua2V5cyhBKS5yZWR1Y2UoXG4gICAgICAgIChlLCByKSA9PiByID09PSBQID8gZSA6IHsgLi4uZSwgW3JdOiAxIH0sXG4gICAgICAgIHt9XG4gICAgICApLCBoID0gLyogQF9fUFVSRV9fICovIGR0KChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHIgPSB7IFtlXTogWzAsIDBdIH0sIGwgPSBbZV07XG4gICAgICAgIGZvciAoOyBsLmxlbmd0aCA+IDA7ICkge1xuICAgICAgICAgIGNvbnN0IGkgPSBsLnNoaWZ0KCk7XG4gICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgIE5baV0gPSAxLCBkZWxldGUgdVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBBW2ldLCBbdCwgb10gPSByW2ldO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZykuZm9yRWFjaCgoW3MsIGNdKSA9PiB7XG4gICAgICAgICAgICAgIE5bY10gfHwgKHJbY10gPSBDcihcbiAgICAgICAgICAgICAgICBbdCwgb10sXG4gICAgICAgICAgICAgICAgc1xuICAgICAgICAgICAgICApLCBsLnB1c2goYykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgICAgfSwgXCJCRlNcIiksIGEgPSBbaChQKV07XG4gICAgICBmb3IgKDsgT2JqZWN0LmtleXModSkubGVuZ3RoID4gMDsgKVxuICAgICAgICBhLnB1c2goaChPYmplY3Qua2V5cyh1KVswXSkpO1xuICAgICAgdGhpcy5kYXRhU3RydWN0dXJlcyA9IHtcbiAgICAgICAgYWRqTGlzdDogQSxcbiAgICAgICAgc3BhdGlhbE1hcHM6IGEsXG4gICAgICAgIGdyb3VwQWxpZ25tZW50czogeFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0YVN0cnVjdHVyZXM7XG4gIH1cbiAgc2V0RWxlbWVudEZvcklkKHgsIEEpIHtcbiAgICB0aGlzLmVsZW1lbnRzW3hdID0gQTtcbiAgfVxuICBnZXRFbGVtZW50QnlJZCh4KSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbeF07XG4gIH1cbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiBycih7XG4gICAgICAuLi5EcixcbiAgICAgIC4uLmlyKCkuYXJjaGl0ZWN0dXJlXG4gICAgfSk7XG4gIH1cbiAgZ2V0Q29uZmlnRmllbGQoeCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpW3hdO1xuICB9XG59LCBkdChhZSwgXCJBcmNoaXRlY3R1cmVEQlwiKSwgYWUpLCB4ciA9IC8qIEBfX1BVUkVfXyAqLyBkdCgoSSwgeCkgPT4ge1xuICBmcihJLCB4KSwgSS5ncm91cHMubWFwKChBKSA9PiB4LmFkZEdyb3VwKEEpKSwgSS5zZXJ2aWNlcy5tYXAoKEEpID0+IHguYWRkU2VydmljZSh7IC4uLkEsIHR5cGU6IFwic2VydmljZVwiIH0pKSwgSS5qdW5jdGlvbnMubWFwKChBKSA9PiB4LmFkZEp1bmN0aW9uKHsgLi4uQSwgdHlwZTogXCJqdW5jdGlvblwiIH0pKSwgSS5lZGdlcy5tYXAoKEEpID0+IHguYWRkRWRnZShBKSk7XG59LCBcInBvcHVsYXRlRGJcIiksIEdlID0ge1xuICBwYXJzZXI6IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gQXJjaGl0ZWN0dXJlREIgaXMgbm90IGFzc2lnbmFibGUgdG8gRGlhZ3JhbURCXG4gICAgeXk6IHZvaWQgMFxuICB9LFxuICBwYXJzZTogLyogQF9fUFVSRV9fICovIGR0KGFzeW5jIChJKSA9PiB7XG4gICAgY29uc3QgeCA9IGF3YWl0IGNyKFwiYXJjaGl0ZWN0dXJlXCIsIEkpO1xuICAgIFNlLmRlYnVnKHgpO1xuICAgIGNvbnN0IEEgPSBHZS5wYXJzZXI/Lnl5O1xuICAgIGlmICghKEEgaW5zdGFuY2VvZiBQZSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwicGFyc2VyLnBhcnNlcj8ueXkgd2FzIG5vdCBhIEFyY2hpdGVjdHVyZURCLiBUaGlzIGlzIGR1ZSB0byBhIGJ1ZyB3aXRoaW4gTWVybWFpZCwgcGxlYXNlIHJlcG9ydCB0aGlzIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9tZXJtYWlkLWpzL21lcm1haWQvaXNzdWVzLlwiXG4gICAgICApO1xuICAgIHhyKHgsIEEpO1xuICB9LCBcInBhcnNlXCIpXG59LCBJciA9IC8qIEBfX1BVUkVfXyAqLyBkdCgoSSkgPT4gYFxuICAuZWRnZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAke0kuYXJjaEVkZ2VXaWR0aH07XG4gICAgc3Ryb2tlOiAke0kuYXJjaEVkZ2VDb2xvcn07XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuXG4gIC5hcnJvdyB7XG4gICAgZmlsbDogJHtJLmFyY2hFZGdlQXJyb3dDb2xvcn07XG4gIH1cblxuICAubm9kZS1ia2cge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAke0kuYXJjaEdyb3VwQm9yZGVyQ29sb3J9O1xuICAgIHN0cm9rZS13aWR0aDogJHtJLmFyY2hHcm91cEJvcmRlcldpZHRofTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4O1xuICB9XG4gIC5ub2RlLWljb24tdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLm5vZGUtaWNvbi10ZXh0ID4gZGl2IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDFweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIH1cbmAsIFwiZ2V0U3R5bGVzXCIpLCBSciA9IElyLCByZSA9IC8qIEBfX1BVUkVfXyAqLyBkdCgoSSkgPT4gYDxnPjxyZWN0IHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIHN0eWxlPVwiZmlsbDogIzA4N2ViZjsgc3Ryb2tlLXdpZHRoOiAwcHg7XCIvPiR7SX08L2c+YCwgXCJ3cmFwSWNvblwiKSwgbmUgPSB7XG4gIHByZWZpeDogXCJtZXJtYWlkLWFyY2hpdGVjdHVyZVwiLFxuICBoZWlnaHQ6IDgwLFxuICB3aWR0aDogODAsXG4gIGljb25zOiB7XG4gICAgZGF0YWJhc2U6IHtcbiAgICAgIGJvZHk6IHJlKFxuICAgICAgICAnPHBhdGggaWQ9XCJiXCIgZGF0YS1uYW1lPVwiNFwiIGQ9XCJtMjAsNTcuODZjMCwzLjk0LDguOTUsNy4xNCwyMCw3LjE0czIwLTMuMiwyMC03LjE0XCIgc3R5bGU9XCJmaWxsOiBub25lOyBzdHJva2U6ICNmZmY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgc3Ryb2tlLXdpZHRoOiAycHg7XCIvPjxwYXRoIGlkPVwiY1wiIGRhdGEtbmFtZT1cIjNcIiBkPVwibTIwLDQ1Ljk1YzAsMy45NCw4Ljk1LDcuMTQsMjAsNy4xNHMyMC0zLjIsMjAtNy4xNFwiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48cGF0aCBpZD1cImRcIiBkYXRhLW5hbWU9XCIyXCIgZD1cIm0yMCwzNC4wNWMwLDMuOTQsOC45NSw3LjE0LDIwLDcuMTRzMjAtMy4yLDIwLTcuMTRcIiBzdHlsZT1cImZpbGw6IG5vbmU7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBzdHJva2Utd2lkdGg6IDJweDtcIi8+PGVsbGlwc2UgaWQ9XCJlXCIgZGF0YS1uYW1lPVwiMVwiIGN4PVwiNDBcIiBjeT1cIjIyLjE0XCIgcng9XCIyMFwiIHJ5PVwiNy4xNFwiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48bGluZSB4MT1cIjIwXCIgeTE9XCI1Ny44NlwiIHgyPVwiMjBcIiB5Mj1cIjIyLjE0XCIgc3R5bGU9XCJmaWxsOiBub25lOyBzdHJva2U6ICNmZmY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgc3Ryb2tlLXdpZHRoOiAycHg7XCIvPjxsaW5lIHgxPVwiNjBcIiB5MT1cIjU3Ljg2XCIgeDI9XCI2MFwiIHkyPVwiMjIuMTRcIiBzdHlsZT1cImZpbGw6IG5vbmU7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBzdHJva2Utd2lkdGg6IDJweDtcIi8+J1xuICAgICAgKVxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBib2R5OiByZShcbiAgICAgICAgJzxyZWN0IHg9XCIxNy41XCIgeT1cIjE3LjVcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiByeD1cIjJcIiByeT1cIjJcIiBzdHlsZT1cImZpbGw6IG5vbmU7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBzdHJva2Utd2lkdGg6IDJweDtcIi8+PGxpbmUgeDE9XCIxNy41XCIgeTE9XCIzMi41XCIgeDI9XCI2Mi41XCIgeTI9XCIzMi41XCIgc3R5bGU9XCJmaWxsOiBub25lOyBzdHJva2U6ICNmZmY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgc3Ryb2tlLXdpZHRoOiAycHg7XCIvPjxsaW5lIHgxPVwiMTcuNVwiIHkxPVwiNDcuNVwiIHgyPVwiNjIuNVwiIHkyPVwiNDcuNVwiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48Zz48cGF0aCBkPVwibTU2LjI1LDI1YzAsLjI3LS40NS41LTEsLjVoLTEwLjVjLS41NSwwLTEtLjIzLTEtLjVzLjQ1LS41LDEtLjVoMTAuNWMuNTUsMCwxLC4yMywxLC41WlwiIHN0eWxlPVwiZmlsbDogI2ZmZjsgc3Ryb2tlLXdpZHRoOiAwcHg7XCIvPjxwYXRoIGQ9XCJtNTYuMjUsMjVjMCwuMjctLjQ1LjUtMSwuNWgtMTAuNWMtLjU1LDAtMS0uMjMtMS0uNXMuNDUtLjUsMS0uNWgxMC41Yy41NSwwLDEsLjIzLDEsLjVaXCIgc3R5bGU9XCJmaWxsOiBub25lOyBzdHJva2U6ICNmZmY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtNTYuMjUsNDBjMCwuMjctLjQ1LjUtMSwuNWgtMTAuNWMtLjU1LDAtMS0uMjMtMS0uNXMuNDUtLjUsMS0uNWgxMC41Yy41NSwwLDEsLjIzLDEsLjVaXCIgc3R5bGU9XCJmaWxsOiAjZmZmOyBzdHJva2Utd2lkdGg6IDBweDtcIi8+PHBhdGggZD1cIm01Ni4yNSw0MGMwLC4yNy0uNDUuNS0xLC41aC0xMC41Yy0uNTUsMC0xLS4yMy0xLS41cy40NS0uNSwxLS41aDEwLjVjLjU1LDAsMSwuMjMsMSwuNVpcIiBzdHlsZT1cImZpbGw6IG5vbmU7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1wiLz48L2c+PGc+PHBhdGggZD1cIm01Ni4yNSw1NWMwLC4yNy0uNDUuNS0xLC41aC0xMC41Yy0uNTUsMC0xLS4yMy0xLS41cy40NS0uNSwxLS41aDEwLjVjLjU1LDAsMSwuMjMsMSwuNVpcIiBzdHlsZT1cImZpbGw6ICNmZmY7IHN0cm9rZS13aWR0aDogMHB4O1wiLz48cGF0aCBkPVwibTU2LjI1LDU1YzAsLjI3LS40NS41LTEsLjVoLTEwLjVjLS41NSwwLTEtLjIzLTEtLjVzLjQ1LS41LDEtLjVoMTAuNWMuNTUsMCwxLC4yMywxLC41WlwiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XCIvPjwvZz48Zz48Y2lyY2xlIGN4PVwiMzIuNVwiIGN5PVwiMjVcIiByPVwiLjc1XCIgc3R5bGU9XCJmaWxsOiAjZmZmOyBzdHJva2U6ICNmZmY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcIi8+PGNpcmNsZSBjeD1cIjI3LjVcIiBjeT1cIjI1XCIgcj1cIi43NVwiIHN0eWxlPVwiZmlsbDogI2ZmZjsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XCIvPjxjaXJjbGUgY3g9XCIyMi41XCIgY3k9XCIyNVwiIHI9XCIuNzVcIiBzdHlsZT1cImZpbGw6ICNmZmY7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1wiLz48L2c+PGc+PGNpcmNsZSBjeD1cIjMyLjVcIiBjeT1cIjQwXCIgcj1cIi43NVwiIHN0eWxlPVwiZmlsbDogI2ZmZjsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XCIvPjxjaXJjbGUgY3g9XCIyNy41XCIgY3k9XCI0MFwiIHI9XCIuNzVcIiBzdHlsZT1cImZpbGw6ICNmZmY7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1wiLz48Y2lyY2xlIGN4PVwiMjIuNVwiIGN5PVwiNDBcIiByPVwiLjc1XCIgc3R5bGU9XCJmaWxsOiAjZmZmOyBzdHJva2U6ICNmZmY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcIi8+PC9nPjxnPjxjaXJjbGUgY3g9XCIzMi41XCIgY3k9XCI1NVwiIHI9XCIuNzVcIiBzdHlsZT1cImZpbGw6ICNmZmY7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1wiLz48Y2lyY2xlIGN4PVwiMjcuNVwiIGN5PVwiNTVcIiByPVwiLjc1XCIgc3R5bGU9XCJmaWxsOiAjZmZmOyBzdHJva2U6ICNmZmY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcIi8+PGNpcmNsZSBjeD1cIjIyLjVcIiBjeT1cIjU1XCIgcj1cIi43NVwiIHN0eWxlPVwiZmlsbDogI2ZmZjsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XCIvPjwvZz4nXG4gICAgICApXG4gICAgfSxcbiAgICBkaXNrOiB7XG4gICAgICBib2R5OiByZShcbiAgICAgICAgJzxyZWN0IHg9XCIyMFwiIHk9XCIxNVwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI1MFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48ZWxsaXBzZSBjeD1cIjI0XCIgY3k9XCIxOS4xN1wiIHJ4PVwiLjhcIiByeT1cIi44M1wiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48ZWxsaXBzZSBjeD1cIjU2XCIgY3k9XCIxOS4xN1wiIHJ4PVwiLjhcIiByeT1cIi44M1wiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48ZWxsaXBzZSBjeD1cIjI0XCIgY3k9XCI2MC44M1wiIHJ4PVwiLjhcIiByeT1cIi44M1wiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48ZWxsaXBzZSBjeD1cIjU2XCIgY3k9XCI2MC44M1wiIHJ4PVwiLjhcIiByeT1cIi44M1wiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48ZWxsaXBzZSBjeD1cIjQwXCIgY3k9XCIzMy43NVwiIHJ4PVwiMTRcIiByeT1cIjE0LjU4XCIgc3R5bGU9XCJmaWxsOiBub25lOyBzdHJva2U6ICNmZmY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgc3Ryb2tlLXdpZHRoOiAycHg7XCIvPjxlbGxpcHNlIGN4PVwiNDBcIiBjeT1cIjMzLjc1XCIgcng9XCI0XCIgcnk9XCI0LjE3XCIgc3R5bGU9XCJmaWxsOiAjZmZmOyBzdHJva2U6ICNmZmY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgc3Ryb2tlLXdpZHRoOiAycHg7XCIvPjxwYXRoIGQ9XCJtMzcuNTEsNDIuNTJsLTQuODMsMTMuMjJjLS4yNi43MS0xLjEsMS4wMi0xLjc2LjY0bC00LjE4LTIuNDJjLS42Ni0uMzgtLjgxLTEuMjYtLjMzLTEuODRsOS4wMS0xMC44Yy44OC0xLjA1LDIuNTYtLjA4LDIuMDksMS4yWlwiIHN0eWxlPVwiZmlsbDogI2ZmZjsgc3Ryb2tlLXdpZHRoOiAwcHg7XCIvPidcbiAgICAgIClcbiAgICB9LFxuICAgIGludGVybmV0OiB7XG4gICAgICBib2R5OiByZShcbiAgICAgICAgJzxjaXJjbGUgY3g9XCI0MFwiIGN5PVwiNDBcIiByPVwiMjIuNVwiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48bGluZSB4MT1cIjQwXCIgeTE9XCIxNy41XCIgeDI9XCI0MFwiIHkyPVwiNjIuNVwiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48bGluZSB4MT1cIjE3LjVcIiB5MT1cIjQwXCIgeDI9XCI2Mi41XCIgeTI9XCI0MFwiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz48cGF0aCBkPVwibTM5Ljk5LDE3LjUxYy0xNS4yOCwxMS4xLTE1LjI4LDMzLjg4LDAsNDQuOThcIiBzdHlsZT1cImZpbGw6IG5vbmU7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBzdHJva2Utd2lkdGg6IDJweDtcIi8+PHBhdGggZD1cIm00MC4wMSwxNy41MWMxNS4yOCwxMS4xLDE1LjI4LDMzLjg4LDAsNDQuOThcIiBzdHlsZT1cImZpbGw6IG5vbmU7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBzdHJva2Utd2lkdGg6IDJweDtcIi8+PGxpbmUgeDE9XCIxOS43NVwiIHkxPVwiMzAuMVwiIHgyPVwiNjAuMjVcIiB5Mj1cIjMwLjFcIiBzdHlsZT1cImZpbGw6IG5vbmU7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBzdHJva2Utd2lkdGg6IDJweDtcIi8+PGxpbmUgeDE9XCIxOS43NVwiIHkxPVwiNDkuOVwiIHgyPVwiNjAuMjVcIiB5Mj1cIjQ5LjlcIiBzdHlsZT1cImZpbGw6IG5vbmU7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBzdHJva2Utd2lkdGg6IDJweDtcIi8+J1xuICAgICAgKVxuICAgIH0sXG4gICAgY2xvdWQ6IHtcbiAgICAgIGJvZHk6IHJlKFxuICAgICAgICAnPHBhdGggZD1cIm02NSw0Ny41YzAsMi43Ni0yLjI0LDUtNSw1SDIwYy0yLjc2LDAtNS0yLjI0LTUtNSwwLTEuODcsMS4wMy0zLjUxLDIuNTYtNC4zNi0uMDQtLjIxLS4wNi0uNDItLjA2LS42NCwwLTIuNiwyLjQ4LTQuNzQsNS42NS00Ljk3LDEuNjUtNC41MSw2LjM0LTcuNzYsMTEuODUtNy43Ni44NiwwLDEuNjkuMDgsMi41LjIzLDIuMDktMS41Nyw0LjY5LTIuNSw3LjUtMi41LDYuMSwwLDExLjE5LDQuMzgsMTIuMjgsMTAuMTcsMi4xNC41NiwzLjcyLDIuNTEsMy43Miw0LjgzLDAsLjAzLDAsLjA3LS4wMS4xLDIuMjkuNDYsNC4wMSwyLjQ4LDQuMDEsNC45WlwiIHN0eWxlPVwiZmlsbDogbm9uZTsgc3Ryb2tlOiAjZmZmOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IHN0cm9rZS13aWR0aDogMnB4O1wiLz4nXG4gICAgICApXG4gICAgfSxcbiAgICB1bmtub3duOiBscixcbiAgICBibGFuazoge1xuICAgICAgYm9keTogcmUoXCJcIilcbiAgICB9XG4gIH1cbn0sIFNyID0gLyogQF9fUFVSRV9fICovIGR0KGFzeW5jIGZ1bmN0aW9uKEksIHgsIEEpIHtcbiAgY29uc3QgUCA9IEEuZ2V0Q29uZmlnRmllbGQoXCJwYWRkaW5nXCIpLCBOID0gQS5nZXRDb25maWdGaWVsZChcImljb25TaXplXCIpLCB1ID0gTiAvIDIsIGggPSBOIC8gNiwgYSA9IGggLyAyO1xuICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICB4LmVkZ2VzKCkubWFwKGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNvdXJjZTogcixcbiAgICAgICAgc291cmNlRGlyOiBsLFxuICAgICAgICBzb3VyY2VBcnJvdzogaSxcbiAgICAgICAgc291cmNlR3JvdXA6IGcsXG4gICAgICAgIHRhcmdldDogdCxcbiAgICAgICAgdGFyZ2V0RGlyOiBvLFxuICAgICAgICB0YXJnZXRBcnJvdzogcyxcbiAgICAgICAgdGFyZ2V0R3JvdXA6IGMsXG4gICAgICAgIGxhYmVsOiBmXG4gICAgICB9ID0gYmUoZSk7XG4gICAgICBsZXQgeyB4OiBULCB5OiBkIH0gPSBlWzBdLnNvdXJjZUVuZHBvaW50KCk7XG4gICAgICBjb25zdCB7IHg6IHYsIHk6IEwgfSA9IGVbMF0ubWlkcG9pbnQoKTtcbiAgICAgIGxldCB7IHg6IGIsIHk6IEMgfSA9IGVbMF0udGFyZ2V0RW5kcG9pbnQoKTtcbiAgICAgIGNvbnN0IEcgPSBQICsgNDtcbiAgICAgIGlmIChnICYmIChXdChsKSA/IFQgKz0gbCA9PT0gXCJMXCIgPyAtRyA6IEcgOiBkICs9IGwgPT09IFwiVFwiID8gLUcgOiBHICsgMTgpLCBjICYmIChXdChvKSA/IGIgKz0gbyA9PT0gXCJMXCIgPyAtRyA6IEcgOiBDICs9IG8gPT09IFwiVFwiID8gLUcgOiBHICsgMTgpLCAhZyAmJiBBLmdldE5vZGUocik/LnR5cGUgPT09IFwianVuY3Rpb25cIiAmJiAoV3QobCkgPyBUICs9IGwgPT09IFwiTFwiID8gdSA6IC11IDogZCArPSBsID09PSBcIlRcIiA/IHUgOiAtdSksICFjICYmIEEuZ2V0Tm9kZSh0KT8udHlwZSA9PT0gXCJqdW5jdGlvblwiICYmIChXdChvKSA/IGIgKz0gbyA9PT0gXCJMXCIgPyB1IDogLXUgOiBDICs9IG8gPT09IFwiVFwiID8gdSA6IC11KSwgZVswXS5fcHJpdmF0ZS5yc2NyYXRjaCkge1xuICAgICAgICBjb25zdCBaID0gSS5pbnNlcnQoXCJnXCIpO1xuICAgICAgICBpZiAoWi5pbnNlcnQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGBNICR7VH0sJHtkfSBMICR7dn0sJHtMfSBMJHtifSwke0N9IGApLmF0dHIoXCJjbGFzc1wiLCBcImVkZ2VcIikuYXR0cihcImlkXCIsIHNyKHIsIHQsIHsgcHJlZml4OiBcIkxcIiB9KSksIGkpIHtcbiAgICAgICAgICBjb25zdCBZID0gV3QobCkgPyBzZVtsXShULCBoKSA6IFQgLSBhLCBLID0gcXQobCkgPyBzZVtsXShkLCBoKSA6IGQgLSBhO1xuICAgICAgICAgIFouaW5zZXJ0KFwicG9seWdvblwiKS5hdHRyKFwicG9pbnRzXCIsIEllW2xdKGgpKS5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtZfSwke0t9KWApLmF0dHIoXCJjbGFzc1wiLCBcImFycm93XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgY29uc3QgWSA9IFd0KG8pID8gc2Vbb10oYiwgaCkgOiBiIC0gYSwgSyA9IHF0KG8pID8gc2Vbb10oQywgaCkgOiBDIC0gYTtcbiAgICAgICAgICBaLmluc2VydChcInBvbHlnb25cIikuYXR0cihcInBvaW50c1wiLCBJZVtvXShoKSkuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7WX0sJHtLfSlgKS5hdHRyKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZikge1xuICAgICAgICAgIGNvbnN0IFkgPSBUZShsLCBvKSA/IFwiWFlcIiA6IFd0KGwpID8gXCJYXCIgOiBcIllcIjtcbiAgICAgICAgICBsZXQgSyA9IDA7XG4gICAgICAgICAgWSA9PT0gXCJYXCIgPyBLID0gTWF0aC5hYnMoVCAtIGIpIDogWSA9PT0gXCJZXCIgPyBLID0gTWF0aC5hYnMoZCAtIEMpIC8gMS41IDogSyA9IE1hdGguYWJzKFQgLSBiKSAvIDI7XG4gICAgICAgICAgY29uc3QgTyA9IFouYXBwZW5kKFwiZ1wiKTtcbiAgICAgICAgICBpZiAoYXdhaXQgbWUoXG4gICAgICAgICAgICBPLFxuICAgICAgICAgICAgZixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXNlSHRtbExhYmVsczogITEsXG4gICAgICAgICAgICAgIHdpZHRoOiBLLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBcImFyY2hpdGVjdHVyZS1zZXJ2aWNlLWxhYmVsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFZSgpXG4gICAgICAgICAgKSwgTy5hdHRyKFwiZHlcIiwgXCIxZW1cIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIikuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLCBZID09PSBcIlhcIilcbiAgICAgICAgICAgIE8uYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHYgKyBcIiwgXCIgKyBMICsgXCIpXCIpO1xuICAgICAgICAgIGVsc2UgaWYgKFkgPT09IFwiWVwiKVxuICAgICAgICAgICAgTy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgdiArIFwiLCBcIiArIEwgKyBcIikgcm90YXRlKC05MClcIik7XG4gICAgICAgICAgZWxzZSBpZiAoWSA9PT0gXCJYWVwiKSB7XG4gICAgICAgICAgICBjb25zdCBpdCA9IHllKGwsIG8pO1xuICAgICAgICAgICAgaWYgKGl0ICYmIE5yKGl0KSkge1xuICAgICAgICAgICAgICBjb25zdCBuID0gTy5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIFttLCBwXSA9IEFyKGl0KTtcbiAgICAgICAgICAgICAgTy5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJhdXRvXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHJvdGF0ZSgkey0xICogbSAqIHAgKiA0NX0pYCk7XG4gICAgICAgICAgICAgIGNvbnN0IEUgPSBPLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgTy5hdHRyKFxuICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgke3Z9LCAke0wgLSBuLmhlaWdodCAvIDJ9KVxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgke20gKiBFLndpZHRoIC8gMn0sICR7cCAqIEUuaGVpZ2h0IC8gMn0pXG4gICAgICAgICAgICAgICAgcm90YXRlKCR7LTEgKiBtICogcCAqIDQ1fSwgMCwgJHtuLmhlaWdodCAvIDJ9KVxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn0sIFwiZHJhd0VkZ2VzXCIpLCBGciA9IC8qIEBfX1BVUkVfXyAqLyBkdChhc3luYyBmdW5jdGlvbihJLCB4LCBBKSB7XG4gIGNvbnN0IE4gPSBBLmdldENvbmZpZ0ZpZWxkKFwicGFkZGluZ1wiKSAqIDAuNzUsIHUgPSBBLmdldENvbmZpZ0ZpZWxkKFwiZm9udFNpemVcIiksIGEgPSBBLmdldENvbmZpZ0ZpZWxkKFwiaWNvblNpemVcIikgLyAyO1xuICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICB4Lm5vZGVzKCkubWFwKGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCByID0gaWUoZSk7XG4gICAgICBpZiAoci50eXBlID09PSBcImdyb3VwXCIpIHtcbiAgICAgICAgY29uc3QgeyBoOiBsLCB3OiBpLCB4MTogZywgeTE6IHQgfSA9IGUuYm91bmRpbmdCb3goKSwgbyA9IEkuYXBwZW5kKFwicmVjdFwiKTtcbiAgICAgICAgby5hdHRyKFwiaWRcIiwgYGdyb3VwLSR7ci5pZH1gKS5hdHRyKFwieFwiLCBnICsgYSkuYXR0cihcInlcIiwgdCArIGEpLmF0dHIoXCJ3aWR0aFwiLCBpKS5hdHRyKFwiaGVpZ2h0XCIsIGwpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUtYmtnXCIpO1xuICAgICAgICBjb25zdCBzID0gSS5hcHBlbmQoXCJnXCIpO1xuICAgICAgICBsZXQgYyA9IGcsIGYgPSB0O1xuICAgICAgICBpZiAoci5pY29uKSB7XG4gICAgICAgICAgY29uc3QgVCA9IHMuYXBwZW5kKFwiZ1wiKTtcbiAgICAgICAgICBULmh0bWwoXG4gICAgICAgICAgICBgPGc+JHthd2FpdCBwZShyLmljb24sIHsgaGVpZ2h0OiBOLCB3aWR0aDogTiwgZmFsbGJhY2tQcmVmaXg6IG5lLnByZWZpeCB9KX08L2c+YFxuICAgICAgICAgICksIFQuYXR0cihcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIChjICsgYSArIDEpICsgXCIsIFwiICsgKGYgKyBhICsgMSkgKyBcIilcIlxuICAgICAgICAgICksIGMgKz0gTiwgZiArPSB1IC8gMiAtIDEgLSAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyLmxhYmVsKSB7XG4gICAgICAgICAgY29uc3QgVCA9IHMuYXBwZW5kKFwiZ1wiKTtcbiAgICAgICAgICBhd2FpdCBtZShcbiAgICAgICAgICAgIFQsXG4gICAgICAgICAgICByLmxhYmVsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1c2VIdG1sTGFiZWxzOiAhMSxcbiAgICAgICAgICAgICAgd2lkdGg6IGksXG4gICAgICAgICAgICAgIGNsYXNzZXM6IFwiYXJjaGl0ZWN0dXJlLXNlcnZpY2UtbGFiZWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEVlKClcbiAgICAgICAgICApLCBULmF0dHIoXCJkeVwiLCBcIjFlbVwiKS5hdHRyKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpLmF0dHIoXCJkb21pbmFudC1iYXNlbGluZVwiLCBcInN0YXJ0XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpLCBULmF0dHIoXG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyAoYyArIGEgKyA0KSArIFwiLCBcIiArIChmICsgYSArIDIpICsgXCIpXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIEEuc2V0RWxlbWVudEZvcklkKHIuaWQsIG8pO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG59LCBcImRyYXdHcm91cHNcIiksIGJyID0gLyogQF9fUFVSRV9fICovIGR0KGFzeW5jIGZ1bmN0aW9uKEksIHgsIEEpIHtcbiAgY29uc3QgUCA9IEVlKCk7XG4gIGZvciAoY29uc3QgTiBvZiBBKSB7XG4gICAgY29uc3QgdSA9IHguYXBwZW5kKFwiZ1wiKSwgaCA9IEkuZ2V0Q29uZmlnRmllbGQoXCJpY29uU2l6ZVwiKTtcbiAgICBpZiAoTi50aXRsZSkge1xuICAgICAgY29uc3QgbCA9IHUuYXBwZW5kKFwiZ1wiKTtcbiAgICAgIGF3YWl0IG1lKFxuICAgICAgICBsLFxuICAgICAgICBOLnRpdGxlLFxuICAgICAgICB7XG4gICAgICAgICAgdXNlSHRtbExhYmVsczogITEsXG4gICAgICAgICAgd2lkdGg6IGggKiAxLjUsXG4gICAgICAgICAgY2xhc3NlczogXCJhcmNoaXRlY3R1cmUtc2VydmljZS1sYWJlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFBcbiAgICAgICksIGwuYXR0cihcImR5XCIsIFwiMWVtXCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIikuYXR0cihcImRvbWluYW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKSwgbC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgaCAvIDIgKyBcIiwgXCIgKyBoICsgXCIpXCIpO1xuICAgIH1cbiAgICBjb25zdCBhID0gdS5hcHBlbmQoXCJnXCIpO1xuICAgIGlmIChOLmljb24pXG4gICAgICBhLmh0bWwoXG4gICAgICAgIGA8Zz4ke2F3YWl0IHBlKE4uaWNvbiwgeyBoZWlnaHQ6IGgsIHdpZHRoOiBoLCBmYWxsYmFja1ByZWZpeDogbmUucHJlZml4IH0pfTwvZz5gXG4gICAgICApO1xuICAgIGVsc2UgaWYgKE4uaWNvblRleHQpIHtcbiAgICAgIGEuaHRtbChcbiAgICAgICAgYDxnPiR7YXdhaXQgcGUoXCJibGFua1wiLCB7IGhlaWdodDogaCwgd2lkdGg6IGgsIGZhbGxiYWNrUHJlZml4OiBuZS5wcmVmaXggfSl9PC9nPmBcbiAgICAgICk7XG4gICAgICBjb25zdCBnID0gYS5hcHBlbmQoXCJnXCIpLmFwcGVuZChcImZvcmVpZ25PYmplY3RcIikuYXR0cihcIndpZHRoXCIsIGgpLmF0dHIoXCJoZWlnaHRcIiwgaCkuYXBwZW5kKFwiZGl2XCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUtaWNvbi10ZXh0XCIpLmF0dHIoXCJzdHlsZVwiLCBgaGVpZ2h0OiAke2h9cHg7YCkuYXBwZW5kKFwiZGl2XCIpLmh0bWwobnIoTi5pY29uVGV4dCwgUCkpLCB0ID0gcGFyc2VJbnQoXG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGcubm9kZSgpLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpLnJlcGxhY2UoL1xcRC9nLCBcIlwiKVxuICAgICAgKSA/PyAxNjtcbiAgICAgIGcuYXR0cihcInN0eWxlXCIsIGAtd2Via2l0LWxpbmUtY2xhbXA6ICR7TWF0aC5mbG9vcigoaCAtIDIpIC8gdCl9O2ApO1xuICAgIH0gZWxzZVxuICAgICAgYS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUtYmtnXCIpLmF0dHIoXCJpZFwiLCBcIm5vZGUtXCIgKyBOLmlkKS5hdHRyKFxuICAgICAgICBcImRcIixcbiAgICAgICAgYE0wICR7aH0gdiR7LWh9IHEwLC01IDUsLTUgaCR7aH0gcTUsMCA1LDUgdiR7aH0gSDAgWmBcbiAgICAgICk7XG4gICAgdS5hdHRyKFwiaWRcIiwgYHNlcnZpY2UtJHtOLmlkfWApLmF0dHIoXCJjbGFzc1wiLCBcImFyY2hpdGVjdHVyZS1zZXJ2aWNlXCIpO1xuICAgIGNvbnN0IHsgd2lkdGg6IGUsIGhlaWdodDogciB9ID0gdS5ub2RlKCkuZ2V0QkJveCgpO1xuICAgIE4ud2lkdGggPSBlLCBOLmhlaWdodCA9IHIsIEkuc2V0RWxlbWVudEZvcklkKE4uaWQsIHUpO1xuICB9XG4gIHJldHVybiAwO1xufSwgXCJkcmF3U2VydmljZXNcIiksIFByID0gLyogQF9fUFVSRV9fICovIGR0KGZ1bmN0aW9uKEksIHgsIEEpIHtcbiAgQS5mb3JFYWNoKChQKSA9PiB7XG4gICAgY29uc3QgTiA9IHguYXBwZW5kKFwiZ1wiKSwgdSA9IEkuZ2V0Q29uZmlnRmllbGQoXCJpY29uU2l6ZVwiKTtcbiAgICBOLmFwcGVuZChcImdcIikuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwiaWRcIiwgXCJub2RlLVwiICsgUC5pZCkuYXR0cihcImZpbGwtb3BhY2l0eVwiLCBcIjBcIikuYXR0cihcIndpZHRoXCIsIHUpLmF0dHIoXCJoZWlnaHRcIiwgdSksIE4uYXR0cihcImNsYXNzXCIsIFwiYXJjaGl0ZWN0dXJlLWp1bmN0aW9uXCIpO1xuICAgIGNvbnN0IHsgd2lkdGg6IGEsIGhlaWdodDogZSB9ID0gTi5fZ3JvdXBzWzBdWzBdLmdldEJCb3goKTtcbiAgICBOLndpZHRoID0gYSwgTi5oZWlnaHQgPSBlLCBJLnNldEVsZW1lbnRGb3JJZChQLmlkLCBOKTtcbiAgfSk7XG59LCBcImRyYXdKdW5jdGlvbnNcIik7XG5ocihbXG4gIHtcbiAgICBuYW1lOiBuZS5wcmVmaXgsXG4gICAgaWNvbnM6IG5lXG4gIH1cbl0pO1xuRmUudXNlKG1yKTtcbmZ1bmN0aW9uIFVlKEksIHgsIEEpIHtcbiAgSS5mb3JFYWNoKChQKSA9PiB7XG4gICAgeC5hZGQoe1xuICAgICAgZ3JvdXA6IFwibm9kZXNcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogXCJzZXJ2aWNlXCIsXG4gICAgICAgIGlkOiBQLmlkLFxuICAgICAgICBpY29uOiBQLmljb24sXG4gICAgICAgIGxhYmVsOiBQLnRpdGxlLFxuICAgICAgICBwYXJlbnQ6IFAuaW4sXG4gICAgICAgIHdpZHRoOiBBLmdldENvbmZpZ0ZpZWxkKFwiaWNvblNpemVcIiksXG4gICAgICAgIGhlaWdodDogQS5nZXRDb25maWdGaWVsZChcImljb25TaXplXCIpXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogXCJub2RlLXNlcnZpY2VcIlxuICAgIH0pO1xuICB9KTtcbn1cbmR0KFVlLCBcImFkZFNlcnZpY2VzXCIpO1xuZnVuY3Rpb24gWWUoSSwgeCwgQSkge1xuICBJLmZvckVhY2goKFApID0+IHtcbiAgICB4LmFkZCh7XG4gICAgICBncm91cDogXCJub2Rlc1wiLFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBcImp1bmN0aW9uXCIsXG4gICAgICAgIGlkOiBQLmlkLFxuICAgICAgICBwYXJlbnQ6IFAuaW4sXG4gICAgICAgIHdpZHRoOiBBLmdldENvbmZpZ0ZpZWxkKFwiaWNvblNpemVcIiksXG4gICAgICAgIGhlaWdodDogQS5nZXRDb25maWdGaWVsZChcImljb25TaXplXCIpXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogXCJub2RlLWp1bmN0aW9uXCJcbiAgICB9KTtcbiAgfSk7XG59XG5kdChZZSwgXCJhZGRKdW5jdGlvbnNcIik7XG5mdW5jdGlvbiBYZShJLCB4KSB7XG4gIHgubm9kZXMoKS5tYXAoKEEpID0+IHtcbiAgICBjb25zdCBQID0gaWUoQSk7XG4gICAgaWYgKFAudHlwZSA9PT0gXCJncm91cFwiKVxuICAgICAgcmV0dXJuO1xuICAgIFAueCA9IEEucG9zaXRpb24oKS54LCBQLnkgPSBBLnBvc2l0aW9uKCkueSwgSS5nZXRFbGVtZW50QnlJZChQLmlkKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKFAueCB8fCAwKSArIFwiLFwiICsgKFAueSB8fCAwKSArIFwiKVwiKTtcbiAgfSk7XG59XG5kdChYZSwgXCJwb3NpdGlvbk5vZGVzXCIpO1xuZnVuY3Rpb24gSGUoSSwgeCkge1xuICBJLmZvckVhY2goKEEpID0+IHtcbiAgICB4LmFkZCh7XG4gICAgICBncm91cDogXCJub2Rlc1wiLFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBcImdyb3VwXCIsXG4gICAgICAgIGlkOiBBLmlkLFxuICAgICAgICBpY29uOiBBLmljb24sXG4gICAgICAgIGxhYmVsOiBBLnRpdGxlLFxuICAgICAgICBwYXJlbnQ6IEEuaW5cbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiBcIm5vZGUtZ3JvdXBcIlxuICAgIH0pO1xuICB9KTtcbn1cbmR0KEhlLCBcImFkZEdyb3Vwc1wiKTtcbmZ1bmN0aW9uIFdlKEksIHgpIHtcbiAgSS5mb3JFYWNoKChBKSA9PiB7XG4gICAgY29uc3QgeyBsaHNJZDogUCwgcmhzSWQ6IE4sIGxoc0ludG86IHUsIGxoc0dyb3VwOiBoLCByaHNJbnRvOiBhLCBsaHNEaXI6IGUsIHJoc0RpcjogciwgcmhzR3JvdXA6IGwsIHRpdGxlOiBpIH0gPSBBLCBnID0gVGUoQS5saHNEaXIsIEEucmhzRGlyKSA/IFwic2VnbWVudHNcIiA6IFwic3RyYWlnaHRcIiwgdCA9IHtcbiAgICAgIGlkOiBgJHtQfS0ke059YCxcbiAgICAgIGxhYmVsOiBpLFxuICAgICAgc291cmNlOiBQLFxuICAgICAgc291cmNlRGlyOiBlLFxuICAgICAgc291cmNlQXJyb3c6IHUsXG4gICAgICBzb3VyY2VHcm91cDogaCxcbiAgICAgIHNvdXJjZUVuZHBvaW50OiBlID09PSBcIkxcIiA/IFwiMCA1MCVcIiA6IGUgPT09IFwiUlwiID8gXCIxMDAlIDUwJVwiIDogZSA9PT0gXCJUXCIgPyBcIjUwJSAwXCIgOiBcIjUwJSAxMDAlXCIsXG4gICAgICB0YXJnZXQ6IE4sXG4gICAgICB0YXJnZXREaXI6IHIsXG4gICAgICB0YXJnZXRBcnJvdzogYSxcbiAgICAgIHRhcmdldEdyb3VwOiBsLFxuICAgICAgdGFyZ2V0RW5kcG9pbnQ6IHIgPT09IFwiTFwiID8gXCIwIDUwJVwiIDogciA9PT0gXCJSXCIgPyBcIjEwMCUgNTAlXCIgOiByID09PSBcIlRcIiA/IFwiNTAlIDBcIiA6IFwiNTAlIDEwMCVcIlxuICAgIH07XG4gICAgeC5hZGQoe1xuICAgICAgZ3JvdXA6IFwiZWRnZXNcIixcbiAgICAgIGRhdGE6IHQsXG4gICAgICBjbGFzc2VzOiBnXG4gICAgfSk7XG4gIH0pO1xufVxuZHQoV2UsIFwiYWRkRWRnZXNcIik7XG5mdW5jdGlvbiBWZShJLCB4LCBBKSB7XG4gIGNvbnN0IFAgPSAvKiBAX19QVVJFX18gKi8gZHQoKGEsIGUpID0+IE9iamVjdC5lbnRyaWVzKGEpLnJlZHVjZShcbiAgICAociwgW2wsIGldKSA9PiB7XG4gICAgICBsZXQgZyA9IDA7XG4gICAgICBjb25zdCB0ID0gT2JqZWN0LmVudHJpZXMoaSk7XG4gICAgICBpZiAodC5sZW5ndGggPT09IDEpXG4gICAgICAgIHJldHVybiByW2xdID0gdFswXVsxXSwgcjtcbiAgICAgIGZvciAobGV0IG8gPSAwOyBvIDwgdC5sZW5ndGggLSAxOyBvKyspXG4gICAgICAgIGZvciAobGV0IHMgPSBvICsgMTsgcyA8IHQubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICBjb25zdCBbYywgZl0gPSB0W29dLCBbVCwgZF0gPSB0W3NdO1xuICAgICAgICAgIGlmIChBW2NdPy5bVF0gPT09IGUpXG4gICAgICAgICAgICByW2xdID8/PSBbXSwgcltsXSA9IFsuLi5yW2xdLCAuLi5mLCAuLi5kXTtcbiAgICAgICAgICBlbHNlIGlmIChjID09PSBcImRlZmF1bHRcIiB8fCBUID09PSBcImRlZmF1bHRcIilcbiAgICAgICAgICAgIHJbbF0gPz89IFtdLCByW2xdID0gWy4uLnJbbF0sIC4uLmYsIC4uLmRdO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgTCA9IGAke2x9LSR7ZysrfWA7XG4gICAgICAgICAgICByW0xdID0gZjtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBgJHtsfS0ke2crK31gO1xuICAgICAgICAgICAgcltiXSA9IGQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9LFxuICAgIHt9XG4gICksIFwiZmxhdHRlbkFsaWdubWVudHNcIiksIE4gPSB4Lm1hcCgoYSkgPT4ge1xuICAgIGNvbnN0IGUgPSB7fSwgciA9IHt9O1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhhKS5mb3JFYWNoKChbbCwgW2ksIGddXSkgPT4ge1xuICAgICAgY29uc3QgdCA9IEkuZ2V0Tm9kZShsKT8uaW4gPz8gXCJkZWZhdWx0XCI7XG4gICAgICBlW2ddID8/PSB7fSwgZVtnXVt0XSA/Pz0gW10sIGVbZ11bdF0ucHVzaChsKSwgcltpXSA/Pz0ge30sIHJbaV1bdF0gPz89IFtdLCByW2ldW3RdLnB1c2gobCk7XG4gICAgfSksIHtcbiAgICAgIGhvcml6OiBPYmplY3QudmFsdWVzKFAoZSwgXCJob3Jpem9udGFsXCIpKS5maWx0ZXIoXG4gICAgICAgIChsKSA9PiBsLmxlbmd0aCA+IDFcbiAgICAgICksXG4gICAgICB2ZXJ0OiBPYmplY3QudmFsdWVzKFAociwgXCJ2ZXJ0aWNhbFwiKSkuZmlsdGVyKFxuICAgICAgICAobCkgPT4gbC5sZW5ndGggPiAxXG4gICAgICApXG4gICAgfTtcbiAgfSksIFt1LCBoXSA9IE4ucmVkdWNlKFxuICAgIChbYSwgZV0sIHsgaG9yaXo6IHIsIHZlcnQ6IGwgfSkgPT4gW1xuICAgICAgWy4uLmEsIC4uLnJdLFxuICAgICAgWy4uLmUsIC4uLmxdXG4gICAgXSxcbiAgICBbW10sIFtdXVxuICApO1xuICByZXR1cm4ge1xuICAgIGhvcml6b250YWw6IHUsXG4gICAgdmVydGljYWw6IGhcbiAgfTtcbn1cbmR0KFZlLCBcImdldEFsaWdubWVudHNcIik7XG5mdW5jdGlvbiB6ZShJLCB4KSB7XG4gIGNvbnN0IEEgPSBbXSwgUCA9IC8qIEBfX1BVUkVfXyAqLyBkdCgodSkgPT4gYCR7dVswXX0sJHt1WzFdfWAsIFwicG9zVG9TdHJcIiksIE4gPSAvKiBAX19QVVJFX18gKi8gZHQoKHUpID0+IHUuc3BsaXQoXCIsXCIpLm1hcCgoaCkgPT4gcGFyc2VJbnQoaCkpLCBcInN0clRvUG9zXCIpO1xuICByZXR1cm4gSS5mb3JFYWNoKCh1KSA9PiB7XG4gICAgY29uc3QgaCA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIE9iamVjdC5lbnRyaWVzKHUpLm1hcCgoW2wsIGldKSA9PiBbUChpKSwgbF0pXG4gICAgKSwgYSA9IFtQKFswLCAwXSldLCBlID0ge30sIHIgPSB7XG4gICAgICBMOiBbLTEsIDBdLFxuICAgICAgUjogWzEsIDBdLFxuICAgICAgVDogWzAsIDFdLFxuICAgICAgQjogWzAsIC0xXVxuICAgIH07XG4gICAgZm9yICg7IGEubGVuZ3RoID4gMDsgKSB7XG4gICAgICBjb25zdCBsID0gYS5zaGlmdCgpO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgZVtsXSA9IDE7XG4gICAgICAgIGNvbnN0IGkgPSBoW2xdO1xuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgIGNvbnN0IGcgPSBOKGwpO1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHIpLmZvckVhY2goKFt0LCBvXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcyA9IFAoW2dbMF0gKyBvWzBdLCBnWzFdICsgb1sxXV0pLCBjID0gaFtzXTtcbiAgICAgICAgICAgIGMgJiYgIWVbc10gJiYgKGEucHVzaChzKSwgQS5wdXNoKHtcbiAgICAgICAgICAgICAgW3hlW3RdXTogYyxcbiAgICAgICAgICAgICAgW3hlW1RyKHQpXV06IGksXG4gICAgICAgICAgICAgIGdhcDogMS41ICogeC5nZXRDb25maWdGaWVsZChcImljb25TaXplXCIpXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBBO1xufVxuZHQoemUsIFwiZ2V0UmVsYXRpdmVDb25zdHJhaW50c1wiKTtcbmZ1bmN0aW9uICRlKEksIHgsIEEsIFAsIE4sIHsgc3BhdGlhbE1hcHM6IHUsIGdyb3VwQWxpZ25tZW50czogaCB9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoYSkgPT4ge1xuICAgIGNvbnN0IGUgPSBvcihcImJvZHlcIikuYXBwZW5kKFwiZGl2XCIpLmF0dHIoXCJpZFwiLCBcImN5XCIpLmF0dHIoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKSwgciA9IEZlKHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjeVwiKSxcbiAgICAgIHN0eWxlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJlZGdlXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFwiY3VydmUtc3R5bGVcIjogXCJzdHJhaWdodFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiZGF0YShsYWJlbClcIixcbiAgICAgICAgICAgIFwic291cmNlLWVuZHBvaW50XCI6IFwiZGF0YShzb3VyY2VFbmRwb2ludClcIixcbiAgICAgICAgICAgIFwidGFyZ2V0LWVuZHBvaW50XCI6IFwiZGF0YSh0YXJnZXRFbmRwb2ludClcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImVkZ2Uuc2VnbWVudHNcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgXCJjdXJ2ZS1zdHlsZVwiOiBcInNlZ21lbnRzXCIsXG4gICAgICAgICAgICBcInNlZ21lbnQtd2VpZ2h0c1wiOiBcIjBcIixcbiAgICAgICAgICAgIFwic2VnbWVudC1kaXN0YW5jZXNcIjogWzAuNV0sXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIEluY29ycmVjdCBsaWJyYXJ5IHR5cGVzXG4gICAgICAgICAgICBcImVkZ2UtZGlzdGFuY2VzXCI6IFwiZW5kcG9pbnRzXCIsXG4gICAgICAgICAgICBcInNvdXJjZS1lbmRwb2ludFwiOiBcImRhdGEoc291cmNlRW5kcG9pbnQpXCIsXG4gICAgICAgICAgICBcInRhcmdldC1lbmRwb2ludFwiOiBcImRhdGEodGFyZ2V0RW5kcG9pbnQpXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJub2RlXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgSW5jb3JyZWN0IGxpYnJhcnkgdHlwZXNcbiAgICAgICAgICAgIFwiY29tcG91bmQtc2l6aW5nLXdydC1sYWJlbHNcIjogXCJpbmNsdWRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJub2RlW2xhYmVsXVwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBcInRleHQtdmFsaWduXCI6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICBcInRleHQtaGFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBgJHtOLmdldENvbmZpZ0ZpZWxkKFwiZm9udFNpemVcIil9cHhgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwiLm5vZGUtc2VydmljZVwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJkYXRhKGxhYmVsKVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiZGF0YSh3aWR0aClcIixcbiAgICAgICAgICAgIGhlaWdodDogXCJkYXRhKGhlaWdodClcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcIi5ub2RlLWp1bmN0aW9uXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcImRhdGEod2lkdGgpXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiZGF0YShoZWlnaHQpXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCIubm9kZS1ncm91cFwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIEluY29ycmVjdCBsaWJyYXJ5IHR5cGVzXG4gICAgICAgICAgICBwYWRkaW5nOiBgJHtOLmdldENvbmZpZ0ZpZWxkKFwicGFkZGluZ1wiKX1weGBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBsYXlvdXQ6IHtcbiAgICAgICAgbmFtZTogXCJncmlkXCIsXG4gICAgICAgIGJvdW5kaW5nQm94OiB7XG4gICAgICAgICAgeDE6IDAsXG4gICAgICAgICAgeDI6IDEwMCxcbiAgICAgICAgICB5MTogMCxcbiAgICAgICAgICB5MjogMTAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBlLnJlbW92ZSgpLCBIZShBLCByKSwgVWUoSSwgciwgTiksIFllKHgsIHIsIE4pLCBXZShQLCByKTtcbiAgICBjb25zdCBsID0gVmUoTiwgdSwgaCksIGkgPSB6ZSh1LCBOKSwgZyA9IHIubGF5b3V0KHtcbiAgICAgIG5hbWU6IFwiZmNvc2VcIixcbiAgICAgIHF1YWxpdHk6IFwicHJvb2ZcIixcbiAgICAgIHN0eWxlRW5hYmxlZDogITEsXG4gICAgICBhbmltYXRlOiAhMSxcbiAgICAgIG5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsczogITEsXG4gICAgICAvLyBBZGp1c3QgdGhlIGVkZ2UgcGFyYW1ldGVycyBpZiBpdCBwYXNzZXMgdGhyb3VnaCB0aGUgYm9yZGVyIG9mIGEgZ3JvdXBcbiAgICAgIC8vIEhhY2t5IGZpeCBmb3I6IGh0dHBzOi8vZ2l0aHViLmNvbS9pVmlzLWF0LUJpbGtlbnQvY3l0b3NjYXBlLmpzLWZjb3NlL2lzc3Vlcy82N1xuICAgICAgaWRlYWxFZGdlTGVuZ3RoKHQpIHtcbiAgICAgICAgY29uc3QgW28sIHNdID0gdC5jb25uZWN0ZWROb2RlcygpLCB7IHBhcmVudDogYyB9ID0gaWUobyksIHsgcGFyZW50OiBmIH0gPSBpZShzKTtcbiAgICAgICAgcmV0dXJuIGMgPT09IGYgPyAxLjUgKiBOLmdldENvbmZpZ0ZpZWxkKFwiaWNvblNpemVcIikgOiAwLjUgKiBOLmdldENvbmZpZ0ZpZWxkKFwiaWNvblNpemVcIik7XG4gICAgICB9LFxuICAgICAgZWRnZUVsYXN0aWNpdHkodCkge1xuICAgICAgICBjb25zdCBbbywgc10gPSB0LmNvbm5lY3RlZE5vZGVzKCksIHsgcGFyZW50OiBjIH0gPSBpZShvKSwgeyBwYXJlbnQ6IGYgfSA9IGllKHMpO1xuICAgICAgICByZXR1cm4gYyA9PT0gZiA/IDAuNDUgOiAxZS0zO1xuICAgICAgfSxcbiAgICAgIGFsaWdubWVudENvbnN0cmFpbnQ6IGwsXG4gICAgICByZWxhdGl2ZVBsYWNlbWVudENvbnN0cmFpbnQ6IGlcbiAgICB9KTtcbiAgICBnLm9uZShcImxheW91dHN0b3BcIiwgKCkgPT4ge1xuICAgICAgZnVuY3Rpb24gdChvLCBzLCBjLCBmKSB7XG4gICAgICAgIGxldCBULCBkO1xuICAgICAgICBjb25zdCB7IHg6IHYsIHk6IEwgfSA9IG8sIHsgeDogYiwgeTogQyB9ID0gcztcbiAgICAgICAgZCA9IChmIC0gTCArICh2IC0gYykgKiAoTCAtIEMpIC8gKHYgLSBiKSkgLyBNYXRoLnNxcnQoMSArIE1hdGgucG93KChMIC0gQykgLyAodiAtIGIpLCAyKSksIFQgPSBNYXRoLnNxcnQoTWF0aC5wb3coZiAtIEwsIDIpICsgTWF0aC5wb3coYyAtIHYsIDIpIC0gTWF0aC5wb3coZCwgMikpO1xuICAgICAgICBjb25zdCBHID0gTWF0aC5zcXJ0KE1hdGgucG93KGIgLSB2LCAyKSArIE1hdGgucG93KEMgLSBMLCAyKSk7XG4gICAgICAgIFQgPSBUIC8gRztcbiAgICAgICAgbGV0IFogPSAoYiAtIHYpICogKGYgLSBMKSAtIChDIC0gTCkgKiAoYyAtIHYpO1xuICAgICAgICBzd2l0Y2ggKCEwKSB7XG4gICAgICAgICAgY2FzZSBaID49IDA6XG4gICAgICAgICAgICBaID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWiA8IDA6XG4gICAgICAgICAgICBaID0gLTE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZXQgWSA9IChiIC0gdikgKiAoYyAtIHYpICsgKEMgLSBMKSAqIChmIC0gTCk7XG4gICAgICAgIHN3aXRjaCAoITApIHtcbiAgICAgICAgICBjYXNlIFkgPj0gMDpcbiAgICAgICAgICAgIFkgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBZIDwgMDpcbiAgICAgICAgICAgIFkgPSAtMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkID0gTWF0aC5hYnMoZCkgKiBaLCBUID0gVCAqIFksIHtcbiAgICAgICAgICBkaXN0YW5jZXM6IGQsXG4gICAgICAgICAgd2VpZ2h0czogVFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZHQodCwgXCJnZXRTZWdtZW50V2VpZ2h0c1wiKSwgci5zdGFydEJhdGNoKCk7XG4gICAgICBmb3IgKGNvbnN0IG8gb2YgT2JqZWN0LnZhbHVlcyhyLmVkZ2VzKCkpKVxuICAgICAgICBpZiAoby5kYXRhPy4oKSkge1xuICAgICAgICAgIGNvbnN0IHsgeDogcywgeTogYyB9ID0gby5zb3VyY2UoKS5wb3NpdGlvbigpLCB7IHg6IGYsIHk6IFQgfSA9IG8udGFyZ2V0KCkucG9zaXRpb24oKTtcbiAgICAgICAgICBpZiAocyAhPT0gZiAmJiBjICE9PSBUKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gby5zb3VyY2VFbmRwb2ludCgpLCB2ID0gby50YXJnZXRFbmRwb2ludCgpLCB7IHNvdXJjZURpcjogTCB9ID0gYmUobyksIFtiLCBDXSA9IHF0KEwpID8gW2QueCwgdi55XSA6IFt2LngsIGQueV0sIHsgd2VpZ2h0czogRywgZGlzdGFuY2VzOiBaIH0gPSB0KGQsIHYsIGIsIEMpO1xuICAgICAgICAgICAgby5zdHlsZShcInNlZ21lbnQtZGlzdGFuY2VzXCIsIFopLCBvLnN0eWxlKFwic2VnbWVudC13ZWlnaHRzXCIsIEcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgci5lbmRCYXRjaCgpLCBnLnJ1bigpO1xuICAgIH0pLCBnLnJ1bigpLCByLnJlYWR5KCh0KSA9PiB7XG4gICAgICBTZS5pbmZvKFwiUmVhZHlcIiwgdCksIGEocik7XG4gICAgfSk7XG4gIH0pO1xufVxuZHQoJGUsIFwibGF5b3V0QXJjaGl0ZWN0dXJlXCIpO1xudmFyIEdyID0gLyogQF9fUFVSRV9fICovIGR0KGFzeW5jIChJLCB4LCBBLCBQKSA9PiB7XG4gIGNvbnN0IE4gPSBQLmRiLCB1ID0gTi5nZXRTZXJ2aWNlcygpLCBoID0gTi5nZXRKdW5jdGlvbnMoKSwgYSA9IE4uZ2V0R3JvdXBzKCksIGUgPSBOLmdldEVkZ2VzKCksIHIgPSBOLmdldERhdGFTdHJ1Y3R1cmVzKCksIGwgPSBaZSh4KSwgaSA9IGwuYXBwZW5kKFwiZ1wiKTtcbiAgaS5hdHRyKFwiY2xhc3NcIiwgXCJhcmNoaXRlY3R1cmUtZWRnZXNcIik7XG4gIGNvbnN0IGcgPSBsLmFwcGVuZChcImdcIik7XG4gIGcuYXR0cihcImNsYXNzXCIsIFwiYXJjaGl0ZWN0dXJlLXNlcnZpY2VzXCIpO1xuICBjb25zdCB0ID0gbC5hcHBlbmQoXCJnXCIpO1xuICB0LmF0dHIoXCJjbGFzc1wiLCBcImFyY2hpdGVjdHVyZS1ncm91cHNcIiksIGF3YWl0IGJyKE4sIGcsIHUpLCBQcihOLCBnLCBoKTtcbiAgY29uc3QgbyA9IGF3YWl0ICRlKHUsIGgsIGEsIGUsIE4sIHIpO1xuICBhd2FpdCBTcihpLCBvLCBOKSwgYXdhaXQgRnIodCwgbywgTiksIFhlKE4sIG8pLCBxZSh2b2lkIDAsIGwsIE4uZ2V0Q29uZmlnRmllbGQoXCJwYWRkaW5nXCIpLCBOLmdldENvbmZpZ0ZpZWxkKFwidXNlTWF4V2lkdGhcIikpO1xufSwgXCJkcmF3XCIpLCBVciA9IHsgZHJhdzogR3IgfSwgVnIgPSB7XG4gIHBhcnNlcjogR2UsXG4gIGdldCBkYigpIHtcbiAgICByZXR1cm4gbmV3IFBlKCk7XG4gIH0sXG4gIHJlbmRlcmVyOiBVcixcbiAgc3R5bGVzOiBSclxufTtcbmV4cG9ydCB7XG4gIFZyIGFzIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsidCIsInAiLCJodCIsIkR0IiwiRiIsImZ0IiwidGUiLCJrZSIsImR0IiwiYXIiLCJRZSIsIkplIiwiS2UiLCJqZSIsIl9lIiwidHIiLCJlciIsInJyIiwiaXIiLCJmciIsImNyIiwiU2UiLCJsciIsInNyIiwibWUiLCJFZSIsInBlIiwibnIiLCJociIsIkZlIiwib3IiLCJaZSIsInFlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSxJQUFJLEtBQUssRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJLEtBQUssRUFBRSxTQUFTLENBQUEsRUFBRSxHQUFJ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RyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUksS0FBTSxFQUFFLEtBQUksS0FBTSxFQUFFLFNBQVEsS0FBTSxFQUFFLFNBQVEsSUFBSyxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRSxLQUFJLElBQUssRUFBRSxLQUFJLEdBQUksRUFBRSxTQUFRLElBQUssRUFBRSxTQUFRLENBQUUsSUFBSSxFQUFFLEtBQUksS0FBTSxFQUFFLFVBQVUsRUFBRSxTQUFRLEtBQU0sRUFBRSxTQUFRLE1BQU8sRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUUsS0FBSSxJQUFLLEVBQUUsS0FBSSxHQUFJLEVBQUUsU0FBUSxJQUFLLEVBQUUsU0FBUSxDQUFFLElBQUksRUFBRSxLQUFJLEtBQU0sRUFBRSxLQUFJLEtBQU0sRUFBRSxVQUFTLEtBQU0sRUFBRSxjQUFjLEVBQUUsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFLEtBQUksSUFBSyxFQUFFLEtBQUksR0FBSSxFQUFFLFVBQVMsSUFBSyxFQUFFLFVBQVMsQ0FBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUksS0FBTSxFQUFFLFVBQVMsS0FBTSxFQUFFLFVBQVMsTUFBTyxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRSxLQUFJLElBQUssRUFBRSxLQUFJLEdBQUksRUFBRSxVQUFTLElBQUssRUFBRSxVQUFTLENBQUU7QUFDanJCLGtCQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsV0FBVSxJQUFLLEVBQUUsV0FBVSxNQUFPLEVBQUUsV0FBVSxJQUFLLEVBQUUsV0FBVSxFQUFHO0FBQ3RGLGdCQUFFLFdBQVUsTUFBTyxFQUFFLFdBQVUsS0FBTSxFQUFFLFdBQVUsTUFBTyxFQUFFLGlCQUFpQixJQUFJO0FBQy9FLGtCQUFJQSxLQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSTtBQUM3QixnQkFBRSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJQSxLQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUss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R0FBRztBQUM1QiwrQkFBSyxLQUFLLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUk7QUFDdEksNEJBQUksS0FBSyxFQUFFLE1BQU0sSUFBSSxFQUFFLEdBQUcsS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxJQUFJO0FBQ3JOLG1DQUFTLEtBQUssR0FBRyxLQUFLLEtBQUssR0FBRztBQUM1QixpQ0FBSyxLQUFLLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUk7QUFBQSxzQkFDMUk7QUFDQSx3QkFBRSxJQUFJLENBQUMsSUFBSTtBQUFBLG9CQUNiO0FBQ0E7QUFBQSxrQkFDRixLQUFLO0FB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LEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLFNBQVMsS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUztBQUNwRSx3QkFBSSxJQUFJLEtBQUssS0FBSyxTQUFTO0FBQ3pCLCtCQUFTLEtBQUssR0FBRyxNQUFNLEdBQUc7QUFDeEIsMEJBQUUsQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTO0FBQ3BFLHdCQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxTQUFTO0FBQzVCLCtCQUFTLEtBQUssR0FBRyxNQUFNLEdBQUc7QUFDeEIsMEJBQUUsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsU0FBUyxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTO0FBQ3BFLHdCQUFJLElBQUk7QUFDTiwrQkFBUyxLQUFLLEdBQUcsTUFBTSxHQUFHO0FBQ3hCLDBCQUFFLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUztBQUNwRSw2QkFBUyxJQUFJLEVBQUUsV0FBVyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRO0FBQ25ELHdCQUFFLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsS0FBSyxLQUFLO0FBQ3JELHdCQUFJLEtBQUssS0FBSyxLQUFLO0FBQ2pCLHdCQUFFLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFD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LEdBQUcsRUFBRSxFQUFFLElBQUlBLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQSxHQUFJLEVBQUUsSUFBSUEsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUlBLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUlBLEVBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSUEsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUlBLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUlBLEVBQUMsQ0FBQztBQUFBLHdCQUMzSixDQUFDLEdBQUcsSUFBSTtBQUFBLHNCQUNWO0FBQUEsb0JBQ0Y7QUFDQSx3QkFBSSxHQUFHO0FBQ0wsK0JBQVNGLE1BQUssUUFBUSxJQUFJRixHQUFFLFVBQVUsQ0FBQyxHQUFHLEtBQUtBLEdBQUUsVUFBVSxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssRUFBRSxRQUFRO0FBQ3BGLDBCQUFFLEVBQUUsSUFBSUEsR0FBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUlBLEdBQUUsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN6RCwwQkFBSSxLQUFLQSxHQUFFLFFBQVEsR0FBR0EsR0FBRSxVQUFVLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDckQsc0JBQUFFLE1BQUtGLEdBQUUsUUFBUSxHQUFHLEdBQUdBLEdBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUN0QywrQkFBUyxLQUFLLEdBQUcsS0FBSyxFQUFFLE1BQU0sTUFBTTtBQUNsQyw0QkFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUNFLElBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR0EsSUFBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDQSxJQUFHLENBQUMsRUFB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
