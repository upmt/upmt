import { p, a as My, d as $y, s as Fy, r as Ey, e as Ly, g as Ay, F, a3 as p2, i as Gh, y as By, P as Dt$1, N as cl, R as Nh, a9 as Z0, t as te, aa as Tv, ab as a2 } from "./SynchronicGraphPage-BCUlTIfr.js";
import { t } from "./init-DjUOC4st-BkHeCwco.js";
import { h } from "./ordinal-B6-f3MAq-CMRnLSJI.js";
import { f as fn } from "./linear-Zeq4wv93-BaLRw0nj.js";
import "./QPage-Kpbzl6Fe.js";
import "./index-DfKBCAsA.js";
import "./QBtnToggle-CYZJXjN1.js";
import "./QBtnGroup-D--j0QkB.js";
import "./QToolbar-4-PFUiMq.js";
import "./export-file-lpTZqdHO.js";
import "./defaultLocale-D7EN2tov-bX63LFCa.js";
function Ri(e, t2, i) {
  e = +e, t2 = +t2, i = (n = arguments.length) < 2 ? (t2 = e, e = 0, 1) : n < 3 ? 1 : +i;
  for (var s = -1, n = Math.max(0, Math.ceil((t2 - e) / i)) | 0, o = new Array(n); ++s < n; )
    o[s] = e + s * i;
  return o;
}
function yt() {
  var e = h().unknown(void 0), t$1 = e.domain, i = e.range, s = 0, n = 1, o, g, m = false, p3 = 0, k = 0, v = 0.5;
  delete e.unknown;
  function C() {
    var b = t$1().length, E = n < s, D = E ? n : s, P = E ? s : n;
    o = (P - D) / Math.max(1, b - p3 + k * 2), m && (o = Math.floor(o)), D += (P - D - o * (b - p3)) * v, g = o * (1 - p3), m && (D = Math.round(D), g = Math.round(g));
    var I = Ri(b).map(function(y) {
      return D + o * y;
    });
    return i(E ? I.reverse() : I);
  }
  return e.domain = function(b) {
    return arguments.length ? (t$1(b), C()) : t$1();
  }, e.range = function(b) {
    return arguments.length ? ([s, n] = b, s = +s, n = +n, C()) : [s, n];
  }, e.rangeRound = function(b) {
    return [s, n] = b, s = +s, n = +n, m = true, C();
  }, e.bandwidth = function() {
    return g;
  }, e.step = function() {
    return o;
  }, e.round = function(b) {
    return arguments.length ? (m = !!b, C()) : m;
  }, e.padding = function(b) {
    return arguments.length ? (p3 = Math.min(1, k = +b), C()) : p3;
  }, e.paddingInner = function(b) {
    return arguments.length ? (p3 = Math.min(1, b), C()) : p3;
  }, e.paddingOuter = function(b) {
    return arguments.length ? (k = +b, C()) : k;
  }, e.align = function(b) {
    return arguments.length ? (v = Math.max(0, Math.min(1, b)), C()) : v;
  }, e.copy = function() {
    return yt(t$1(), [s, n]).round(m).paddingInner(p3).paddingOuter(k).align(v);
  }, t.apply(C(), arguments);
}
var bt = (function() {
  var e = /* @__PURE__ */ p(function(F2, h2, u, x) {
    for (u = u || {}, x = F2.length; x--; u[F2[x]] = h2) ;
    return u;
  }, "o"), t2 = [1, 10, 12, 14, 16, 18, 19, 21, 23], i = [2, 6], s = [1, 3], n = [1, 5], o = [1, 6], g = [1, 7], m = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], p$1 = [1, 25], k = [1, 26], v = [1, 28], C = [1, 29], b = [1, 30], E = [1, 31], D = [1, 32], P = [1, 33], I = [1, 34], y = [1, 35], _ = [1, 36], c = [1, 37], W = [1, 43], z = [1, 42], U = [1, 47], X = [1, 50], l = [1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], L = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36], S = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], R = [1, 64], $ = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, XYCHART: 5, chartConfig: 6, document: 7, CHART_ORIENTATION: 8, statement: 9, title: 10, text: 11, X_AXIS: 12, parseXAxis: 13, Y_AXIS: 14, parseYAxis: 15, LINE: 16, plotData: 17, BAR: 18, acc_title: 19, acc_title_value: 20, acc_descr: 21, acc_descr_value: 22, acc_descr_multiline_value: 23, SQUARE_BRACES_START: 24, commaSeparatedNumbers: 25, SQUARE_BRACES_END: 26, NUMBER_WITH_DECIMAL: 27, COMMA: 28, xAxisData: 29, bandData: 30, ARROW_DELIMITER: 31, commaSeparatedTexts: 32, yAxisData: 33, NEWLINE: 34, SEMI: 35, EOF: 36, alphaNum: 37, STR: 38, MD_STR: 39, alphaNumToken: 40, AMP: 41, NUM: 42, ALPHA: 43, PLUS: 44, EQUALS: 45, MULT: 46, DOT: 47, BRKT: 48, MINUS: 49, UNDERSCORE: 50, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "XYCHART", 8: "CHART_ORIENTATION", 10: "title", 12: "X_AXIS", 14: "Y_AXIS", 16: "LINE", 18: "BAR", 19: "acc_title", 20: "acc_title_value", 21: "acc_descr", 22: "acc_descr_value", 23: "acc_descr_multiline_value", 24: "SQUARE_BRACES_START", 26: "SQUARE_BRACES_END", 27: "NUMBER_WITH_DECIMAL", 28: "COMMA", 31: "ARROW_DELIMITER", 34: "NEWLINE", 35: "SEMI", 36: "EOF", 38: "STR", 39: "MD_STR", 41: "AMP", 42: "NUM", 43: "ALPHA", 44: "PLUS", 45: "EQUALS", 46: "MULT", 47: "DOT", 48: "BRKT", 49: "MINUS", 50: "UNDERSCORE" },
    productions_: [0, [3, 2], [3, 3], [3, 2], [3, 1], [6, 1], [7, 0], [7, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 3], [9, 2], [9, 3], [9, 2], [9, 2], [9, 1], [17, 3], [25, 3], [25, 1], [13, 1], [13, 2], [13, 1], [29, 1], [29, 3], [30, 3], [32, 3], [32, 1], [15, 1], [15, 2], [15, 1], [33, 3], [4, 1], [4, 1], [4, 1], [11, 1], [11, 1], [11, 1], [37, 1], [37, 2], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1]],
    performAction: /* @__PURE__ */ p(function(h2, u, x, d, w, r, at) {
      var f = r.length - 1;
      switch (w) {
        case 5:
          d.setOrientation(r[f]);
          break;
        case 9:
          d.setDiagramTitle(r[f].text.trim());
          break;
        case 12:
          d.setLineData({ text: "", type: "text" }, r[f]);
          break;
        case 13:
          d.setLineData(r[f - 1], r[f]);
          break;
        case 14:
          d.setBarData({ text: "", type: "text" }, r[f]);
          break;
        case 15:
          d.setBarData(r[f - 1], r[f]);
          break;
        case 16:
          this.$ = r[f].trim(), d.setAccTitle(this.$);
          break;
        case 17:
        case 18:
          this.$ = r[f].trim(), d.setAccDescription(this.$);
          break;
        case 19:
          this.$ = r[f - 1];
          break;
        case 20:
          this.$ = [Number(r[f - 2]), ...r[f]];
          break;
        case 21:
          this.$ = [Number(r[f])];
          break;
        case 22:
          d.setXAxisTitle(r[f]);
          break;
        case 23:
          d.setXAxisTitle(r[f - 1]);
          break;
        case 24:
          d.setXAxisTitle({ type: "text", text: "" });
          break;
        case 25:
          d.setXAxisBand(r[f]);
          break;
        case 26:
          d.setXAxisRangeData(Number(r[f - 2]), Number(r[f]));
          break;
        case 27:
          this.$ = r[f - 1];
          break;
        case 28:
          this.$ = [r[f - 2], ...r[f]];
          break;
        case 29:
          this.$ = [r[f]];
          break;
        case 30:
          d.setYAxisTitle(r[f]);
          break;
        case 31:
          d.setYAxisTitle(r[f - 1]);
          break;
        case 32:
          d.setYAxisTitle({ type: "text", text: "" });
          break;
        case 33:
          d.setYAxisRangeData(Number(r[f - 2]), Number(r[f]));
          break;
        case 37:
          this.$ = { text: r[f], type: "text" };
          break;
        case 38:
          this.$ = { text: r[f], type: "text" };
          break;
        case 39:
          this.$ = { text: r[f], type: "markdown" };
          break;
        case 40:
          this.$ = r[f];
          break;
        case 41:
          this.$ = r[f - 1] + "" + r[f];
          break;
      }
    }, "anonymous"),
    table: [e(t2, i, { 3: 1, 4: 2, 7: 4, 5: s, 34: n, 35: o, 36: g }), { 1: [3] }, e(t2, i, { 4: 2, 7: 4, 3: 8, 5: s, 34: n, 35: o, 36: g }), e(t2, i, { 4: 2, 7: 4, 6: 9, 3: 10, 5: s, 8: [1, 11], 34: n, 35: o, 36: g }), { 1: [2, 4], 9: 12, 10: [1, 13], 12: [1, 14], 14: [1, 15], 16: [1, 16], 18: [1, 17], 19: [1, 18], 21: [1, 19], 23: [1, 20] }, e(m, [2, 34]), e(m, [2, 35]), e(m, [2, 36]), { 1: [2, 1] }, e(t2, i, { 4: 2, 7: 4, 3: 21, 5: s, 34: n, 35: o, 36: g }), { 1: [2, 3] }, e(m, [2, 5]), e(t2, [2, 7], { 4: 22, 34: n, 35: o, 36: g }), { 11: 23, 37: 24, 38: p$1, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 11: 39, 13: 38, 24: W, 27: z, 29: 40, 30: 41, 37: 24, 38: p$1, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 11: 45, 15: 44, 27: U, 33: 46, 37: 24, 38: p$1, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 11: 49, 17: 48, 24: X, 37: 24, 38: p$1, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 11: 52, 17: 51, 24: X, 37: 24, 38: p$1, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 20: [1, 53] }, { 22: [1, 54] }, e(l, [2, 18]), { 1: [2, 2] }, e(l, [2, 8]), e(l, [2, 9]), e(L, [2, 37], { 40: 55, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }), e(L, [2, 38]), e(L, [2, 39]), e(S, [2, 40]), e(S, [2, 42]), e(S, [2, 43]), e(S, [2, 44]), e(S, [2, 45]), e(S, [2, 46]), e(S, [2, 47]), e(S, [2, 48]), e(S, [2, 49]), e(S, [2, 50]), e(S, [2, 51]), e(l, [2, 10]), e(l, [2, 22], { 30: 41, 29: 56, 24: W, 27: z }), e(l, [2, 24]), e(l, [2, 25]), { 31: [1, 57] }, { 11: 59, 32: 58, 37: 24, 38: p$1, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, e(l, [2, 11]), e(l, [2, 30], { 33: 60, 27: U }), e(l, [2, 32]), { 31: [1, 61] }, e(l, [2, 12]), { 17: 62, 24: X }, { 25: 63, 27: R }, e(l, [2, 14]), { 17: 65, 24: X }, e(l, [2, 16]), e(l, [2, 17]), e(S, [2, 41]), e(l, [2, 23]), { 27: [1, 66] }, { 26: [1, 67] }, { 26: [2, 29], 28: [1, 68] }, e(l, [2, 31]), { 27: [1, 69] }, e(l, [2, 13]), { 26: [1, 70] }, { 26: [2, 21], 28: [1, 71] }, e(l, [2, 15]), e(l, [2, 26]), e(l, [2, 27]), { 11: 59, 32: 72, 37: 24, 38: p$1, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, e(l, [2, 33]), e(l, [2, 19]), { 25: 73, 27: R }, { 26: [2, 28] }, { 26: [2, 20] }],
    defaultActions: { 8: [2, 1], 10: [2, 3], 21: [2, 2], 72: [2, 28], 73: [2, 20] },
    parseError: /* @__PURE__ */ p(function(h2, u) {
      if (u.recoverable)
        this.trace(h2);
      else {
        var x = new Error(h2);
        throw x.hash = u, x;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(h2) {
      var u = this, x = [0], d = [], w = [null], r = [], at = this.table, f = "", lt = 0, It = 0, hi = 2, Mt = 1, li = r.slice.call(arguments, 1), T = Object.create(this.lexer), Y = { yy: {} };
      for (var dt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, dt) && (Y.yy[dt] = this.yy[dt]);
      T.setInput(h2, Y.yy), Y.yy.lexer = T, Y.yy.parser = this, typeof T.yylloc > "u" && (T.yylloc = {});
      var ft = T.yylloc;
      r.push(ft);
      var ci = T.options && T.options.ranges;
      typeof Y.yy.parseError == "function" ? this.parseError = Y.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ui(V) {
        x.length = x.length - 2 * V, w.length = w.length - V, r.length = r.length - V;
      }
      p(ui, "popStack");
      function Vt() {
        var V;
        return V = d.pop() || T.lex() || Mt, typeof V != "number" && (V instanceof Array && (d = V, V = d.pop()), V = u.symbols_[V] || V), V;
      }
      p(Vt, "lex");
      for (var M, H, B, pt, q = {}, ct, O, Bt, ut; ; ) {
        if (H = x[x.length - 1], this.defaultActions[H] ? B = this.defaultActions[H] : ((M === null || typeof M > "u") && (M = Vt()), B = at[H] && at[H][M]), typeof B > "u" || !B.length || !B[0]) {
          var mt = "";
          ut = [];
          for (ct in at[H])
            this.terminals_[ct] && ct > hi && ut.push("'" + this.terminals_[ct] + "'");
          T.showPosition ? mt = "Parse error on line " + (lt + 1) + `:
` + T.showPosition() + `
Expecting ` + ut.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : mt = "Parse error on line " + (lt + 1) + ": Unexpected " + (M == Mt ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError(mt, {
            text: T.match,
            token: this.terminals_[M] || M,
            line: T.yylineno,
            loc: ft,
            expected: ut
          });
        }
        if (B[0] instanceof Array && B.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + H + ", token: " + M);
        switch (B[0]) {
          case 1:
            x.push(M), w.push(T.yytext), r.push(T.yylloc), x.push(B[1]), M = null, It = T.yyleng, f = T.yytext, lt = T.yylineno, ft = T.yylloc;
            break;
          case 2:
            if (O = this.productions_[B[1]][1], q.$ = w[w.length - O], q._$ = {
              first_line: r[r.length - (O || 1)].first_line,
              last_line: r[r.length - 1].last_line,
              first_column: r[r.length - (O || 1)].first_column,
              last_column: r[r.length - 1].last_column
            }, ci && (q._$.range = [
              r[r.length - (O || 1)].range[0],
              r[r.length - 1].range[1]
            ]), pt = this.performAction.apply(q, [
              f,
              It,
              lt,
              Y.yy,
              B[1],
              w,
              r
            ].concat(li)), typeof pt < "u")
              return pt;
            O && (x = x.slice(0, -1 * O * 2), w = w.slice(0, -1 * O), r = r.slice(0, -1 * O)), x.push(this.productions_[B[1]][0]), w.push(q.$), r.push(q._$), Bt = at[x[x.length - 2]][x[x.length - 1]], x.push(Bt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, Et = /* @__PURE__ */ (function() {
    var F2 = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(u, x) {
        if (this.yy.parser)
          this.yy.parser.parseError(u, x);
        else
          throw new Error(u);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(h2, u) {
        return this.yy = u || this.yy || {}, this._input = h2, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var h2 = this._input[0];
        this.yytext += h2, this.yyleng++, this.offset++, this.match += h2, this.matched += h2;
        var u = h2.match(/(?:\r\n?|\n).*/g);
        return u ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h2;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(h2) {
        var u = h2.length, x = h2.split(/(?:\r\n?|\n)/g);
        this._input = h2 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - u), this.offset -= u;
        var d = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), x.length - 1 && (this.yylineno -= x.length - 1);
        var w = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: x ? (x.length === d.length ? this.yylloc.first_column : 0) + d[d.length - x.length].length - x[0].length : this.yylloc.first_column - u
        }, this.options.ranges && (this.yylloc.range = [w[0], w[0] + this.yyleng - u]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(h2) {
        this.unput(this.match.slice(h2));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var h2 = this.matched.substr(0, this.matched.length - this.match.length);
        return (h2.length > 20 ? "..." : "") + h2.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var h2 = this.match;
        return h2.length < 20 && (h2 += this._input.substr(0, 20 - h2.length)), (h2.substr(0, 20) + (h2.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var h2 = this.pastInput(), u = new Array(h2.length + 1).join("-");
        return h2 + this.upcomingInput() + `
` + u + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(h2, u) {
        var x, d, w;
        if (this.options.backtrack_lexer && (w = {
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
        }, this.options.ranges && (w.yylloc.range = this.yylloc.range.slice(0))), d = h2[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h2[0].length
        }, this.yytext += h2[0], this.match += h2[0], this.matches = h2, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(h2[0].length), this.matched += h2[0], x = this.performAction.call(this, this.yy, this, u, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), x)
          return x;
        if (this._backtrack) {
          for (var r in w)
            this[r] = w[r];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var h2, u, x, d;
        this._more || (this.yytext = "", this.match = "");
        for (var w = this._currentRules(), r = 0; r < w.length; r++)
          if (x = this._input.match(this.rules[w[r]]), x && (!u || x[0].length > u[0].length)) {
            if (u = x, d = r, this.options.backtrack_lexer) {
              if (h2 = this.test_match(x, w[r]), h2 !== false)
                return h2;
              if (this._backtrack) {
                u = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return u ? (h2 = this.test_match(u, w[d]), h2 !== false ? h2 : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var u = this.next();
        return u || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(u) {
        this.conditionStack.push(u);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var u = this.conditionStack.length - 1;
        return u > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(u) {
        return u = this.conditionStack.length - 1 - Math.abs(u || 0), u >= 0 ? this.conditionStack[u] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(u) {
        this.begin(u);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(u, x, d, w) {
        switch (d) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return this.popState(), 34;
          case 3:
            return this.popState(), 34;
          case 4:
            return 34;
          case 5:
            break;
          case 6:
            return 10;
          case 7:
            return this.pushState("acc_title"), 19;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.pushState("acc_descr"), 21;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.pushState("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 5;
          case 15:
            return 5;
          case 16:
            return 8;
          case 17:
            return this.pushState("axis_data"), "X_AXIS";
          case 18:
            return this.pushState("axis_data"), "Y_AXIS";
          case 19:
            return this.pushState("axis_band_data"), 24;
          case 20:
            return 31;
          case 21:
            return this.pushState("data"), 16;
          case 22:
            return this.pushState("data"), 18;
          case 23:
            return this.pushState("data_inner"), 24;
          case 24:
            return 27;
          case 25:
            return this.popState(), 26;
          case 26:
            this.popState();
            break;
          case 27:
            this.pushState("string");
            break;
          case 28:
            this.popState();
            break;
          case 29:
            return "STR";
          case 30:
            return 24;
          case 31:
            return 26;
          case 32:
            return 43;
          case 33:
            return "COLON";
          case 34:
            return 44;
          case 35:
            return 28;
          case 36:
            return 45;
          case 37:
            return 46;
          case 38:
            return 48;
          case 39:
            return 50;
          case 40:
            return 47;
          case 41:
            return 41;
          case 42:
            return 49;
          case 43:
            return 42;
          case 44:
            break;
          case 45:
            return 35;
          case 46:
            return 36;
        }
      }, "anonymous"),
      rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:(\r?\n))/i, /^(?:(\r?\n))/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:\{)/i, /^(?:[^\}]*)/i, /^(?:xychart-beta\b)/i, /^(?:xychart\b)/i, /^(?:(?:vertical|horizontal))/i, /^(?:x-axis\b)/i, /^(?:y-axis\b)/i, /^(?:\[)/i, /^(?:-->)/i, /^(?:line\b)/i, /^(?:bar\b)/i, /^(?:\[)/i, /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i, /^(?:\])/i, /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s+)/i, /^(?:;)/i, /^(?:$)/i],
      conditions: { data_inner: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, data: { rules: [0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 23, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, axis_band_data: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, axis_data: { rules: [0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, title: { rules: [], inclusive: false }, md_string: { rules: [], inclusive: false }, string: { rules: [28, 29], inclusive: false }, INITIAL: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true } }
    };
    return F2;
  })();
  $.lexer = Et;
  function N() {
    this.yy = {};
  }
  return p(N, "Parser"), N.prototype = $, $.Parser = N, new N();
})();
bt.parser = bt;
var Ti = bt;
function At(e) {
  return e.type === "bar";
}
p(At, "isBarPlot");
function _t(e) {
  return e.type === "band";
}
p(_t, "isBandAxisData");
function G(e) {
  return e.type === "linear";
}
p(G, "isLinearAxisData");
var j, Ht = (j = class {
  constructor(t2) {
    this.parentGroup = t2;
  }
  getMaxDimension(t2, i) {
    if (!this.parentGroup)
      return {
        width: t2.reduce((o, g) => Math.max(g.length, o), 0) * i,
        height: i
      };
    const s = {
      width: 0,
      height: 0
    }, n = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", i);
    for (const o of t2) {
      const g = Tv(n, 1, o), m = g ? g.width : o.length * i, p3 = g ? g.height : i;
      s.width = Math.max(s.width, m), s.height = Math.max(s.height, p3);
    }
    return n.remove(), s;
  }
}, p(j, "TextDimensionCalculatorWithFont"), j), Ft = 0.7, Ot = 0.2, Q, Ut = (Q = class {
  constructor(t2, i, s, n) {
    this.axisConfig = t2, this.title = i, this.textDimensionCalculator = s, this.axisThemeConfig = n, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = "left", this.showTitle = false, this.showLabel = false, this.showTick = false, this.showAxisLine = false, this.outerPadding = 0, this.titleTextHeight = 0, this.labelTextHeight = 0, this.range = [0, 10], this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = "left";
  }
  setRange(t2) {
    this.range = t2, this.axisPosition === "left" || this.axisPosition === "right" ? this.boundingRect.height = t2[1] - t2[0] : this.boundingRect.width = t2[1] - t2[0], this.recalculateScale();
  }
  getRange() {
    return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
  }
  setAxisPosition(t2) {
    this.axisPosition = t2, this.setRange(this.range);
  }
  getTickDistance() {
    const t2 = this.getRange();
    return Math.abs(t2[0] - t2[1]) / this.getTickValues().length;
  }
  getAxisOuterPadding() {
    return this.outerPadding;
  }
  getLabelDimension() {
    return this.textDimensionCalculator.getMaxDimension(
      this.getTickValues().map((t2) => t2.toString()),
      this.axisConfig.labelFontSize
    );
  }
  recalculateOuterPaddingToDrawBar() {
    Ft * this.getTickDistance() > this.outerPadding * 2 && (this.outerPadding = Math.floor(Ft * this.getTickDistance() / 2)), this.recalculateScale();
  }
  calculateSpaceIfDrawnHorizontally(t2) {
    let i = t2.height;
    if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      const s = this.getLabelDimension(), n = Ot * t2.width;
      this.outerPadding = Math.min(s.width / 2, n);
      const o = s.height + this.axisConfig.labelPadding * 2;
      this.labelTextHeight = s.height, o <= i && (i -= o, this.showLabel = true);
    }
    if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = true, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      const s = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      ), n = s.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = s.height, n <= i && (i -= n, this.showTitle = true);
    }
    this.boundingRect.width = t2.width, this.boundingRect.height = t2.height - i;
  }
  calculateSpaceIfDrawnVertical(t2) {
    let i = t2.width;
    if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      const s = this.getLabelDimension(), n = Ot * t2.height;
      this.outerPadding = Math.min(s.height / 2, n);
      const o = s.width + this.axisConfig.labelPadding * 2;
      o <= i && (i -= o, this.showLabel = true);
    }
    if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = true, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      const s = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      ), n = s.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = s.height, n <= i && (i -= n, this.showTitle = true);
    }
    this.boundingRect.width = t2.width - i, this.boundingRect.height = t2.height;
  }
  calculateSpace(t2) {
    return this.axisPosition === "left" || this.axisPosition === "right" ? this.calculateSpaceIfDrawnVertical(t2) : this.calculateSpaceIfDrawnHorizontally(t2), this.recalculateScale(), {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  setBoundingBoxXY(t2) {
    this.boundingRect.x = t2.x, this.boundingRect.y = t2.y;
  }
  getDrawableElementsForLeftAxis() {
    const t2 = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
      t2.push({
        type: "path",
        groupTexts: ["left-axis", "axisl-line"],
        data: [
          {
            path: `M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y + this.boundingRect.height} `,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t2.push({
      type: "text",
      groupTexts: ["left-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
        y: this.getScaleValue(i),
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "middle",
        horizontalPos: "right"
      }))
    }), this.showTick) {
      const i = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      t2.push({
        type: "path",
        groupTexts: ["left-axis", "ticks"],
        data: this.getTickValues().map((s) => ({
          path: `M ${i},${this.getScaleValue(s)} L ${i - this.axisConfig.tickLength},${this.getScaleValue(s)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t2.push({
      type: "text",
      groupTexts: ["left-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.boundingRect.x + this.axisConfig.titlePadding,
          y: this.boundingRect.y + this.boundingRect.height / 2,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 270,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t2;
  }
  getDrawableElementsForBottomAxis() {
    const t2 = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
      t2.push({
        type: "path",
        groupTexts: ["bottom-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t2.push({
      type: "text",
      groupTexts: ["bottom-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.getScaleValue(i),
        y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "top",
        horizontalPos: "center"
      }))
    }), this.showTick) {
      const i = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      t2.push({
        type: "path",
        groupTexts: ["bottom-axis", "ticks"],
        data: this.getTickValues().map((s) => ({
          path: `M ${this.getScaleValue(s)},${i} L ${this.getScaleValue(s)},${i + this.axisConfig.tickLength}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t2.push({
      type: "text",
      groupTexts: ["bottom-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.range[0] + (this.range[1] - this.range[0]) / 2,
          y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t2;
  }
  getDrawableElementsForTopAxis() {
    const t2 = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
      t2.push({
        type: "path",
        groupTexts: ["top-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t2.push({
      type: "text",
      groupTexts: ["top-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.getScaleValue(i),
        y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "top",
        horizontalPos: "center"
      }))
    }), this.showTick) {
      const i = this.boundingRect.y;
      t2.push({
        type: "path",
        groupTexts: ["top-axis", "ticks"],
        data: this.getTickValues().map((s) => ({
          path: `M ${this.getScaleValue(s)},${i + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(s)},${i + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t2.push({
      type: "text",
      groupTexts: ["top-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.boundingRect.x + this.boundingRect.width / 2,
          y: this.boundingRect.y + this.axisConfig.titlePadding,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t2;
  }
  getDrawableElements() {
    if (this.axisPosition === "left")
      return this.getDrawableElementsForLeftAxis();
    if (this.axisPosition === "right")
      throw Error("Drawing of right axis is not implemented");
    return this.axisPosition === "bottom" ? this.getDrawableElementsForBottomAxis() : this.axisPosition === "top" ? this.getDrawableElementsForTopAxis() : [];
  }
}, p(Q, "BaseAxis"), Q), K, Di = (K = class extends Ut {
  constructor(t2, i, s, n, o) {
    super(t2, n, o, i), this.categories = s, this.scale = yt().domain(this.categories).range(this.getRange());
  }
  setRange(t2) {
    super.setRange(t2);
  }
  recalculateScale() {
    this.scale = yt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5), F.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
  }
  getTickValues() {
    return this.categories;
  }
  getScaleValue(t2) {
    return this.scale(t2) ?? this.getRange()[0];
  }
}, p(K, "BandAxis"), K), Z, vi = (Z = class extends Ut {
  constructor(t2, i, s, n, o) {
    super(t2, n, o, i), this.domain = s, this.scale = fn().domain(this.domain).range(this.getRange());
  }
  getTickValues() {
    return this.scale.ticks();
  }
  recalculateScale() {
    const t2 = [...this.domain];
    this.axisPosition === "left" && t2.reverse(), this.scale = fn().domain(t2).range(this.getRange());
  }
  getScaleValue(t2) {
    return this.scale(t2);
  }
}, p(Z, "LinearAxis"), Z);
function wt(e, t2, i, s) {
  const n = new Ht(s);
  return _t(e) ? new Di(
    t2,
    i,
    e.categories,
    e.title,
    n
  ) : new vi(
    t2,
    i,
    [e.min, e.max],
    e.title,
    n
  );
}
p(wt, "getAxis");
var J, Pi = (J = class {
  constructor(t2, i, s, n) {
    this.textDimensionCalculator = t2, this.chartConfig = i, this.chartData = s, this.chartThemeConfig = n, this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, this.showChartTitle = false;
  }
  setBoundingBoxXY(t2) {
    this.boundingRect.x = t2.x, this.boundingRect.y = t2.y;
  }
  calculateSpace(t2) {
    const i = this.textDimensionCalculator.getMaxDimension(
      [this.chartData.title],
      this.chartConfig.titleFontSize
    ), s = Math.max(i.width, t2.width), n = i.height + 2 * this.chartConfig.titlePadding;
    return i.width <= s && i.height <= n && this.chartConfig.showTitle && this.chartData.title && (this.boundingRect.width = s, this.boundingRect.height = n, this.showChartTitle = true), {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    const t2 = [];
    return this.showChartTitle && t2.push({
      groupTexts: ["chart-title"],
      type: "text",
      data: [
        {
          fontSize: this.chartConfig.titleFontSize,
          text: this.chartData.title,
          verticalPos: "middle",
          horizontalPos: "center",
          x: this.boundingRect.x + this.boundingRect.width / 2,
          y: this.boundingRect.y + this.boundingRect.height / 2,
          fill: this.chartThemeConfig.titleColor,
          rotation: 0
        }
      ]
    }), t2;
  }
}, p(J, "ChartTitle"), J);
function $t(e, t2, i, s) {
  const n = new Ht(s);
  return new Pi(n, e, t2, i);
}
p($t, "getChartTitleComponent");
var tt, Li = (tt = class {
  constructor(t2, i, s, n, o) {
    this.plotData = t2, this.xAxis = i, this.yAxis = s, this.orientation = n, this.plotIndex = o;
  }
  getDrawableElement() {
    const t2 = this.plotData.data.map((s) => [
      this.xAxis.getScaleValue(s[0]),
      this.yAxis.getScaleValue(s[1])
    ]);
    let i;
    return this.orientation === "horizontal" ? i = a2().y((s) => s[0]).x((s) => s[1])(t2) : i = a2().x((s) => s[0]).y((s) => s[1])(t2), i ? [
      {
        groupTexts: ["plot", `line-plot-${this.plotIndex}`],
        type: "path",
        data: [
          {
            path: i,
            strokeFill: this.plotData.strokeFill,
            strokeWidth: this.plotData.strokeWidth
          }
        ]
      }
    ] : [];
  }
}, p(tt, "LinePlot"), tt), it, Ei = (it = class {
  constructor(t2, i, s, n, o, g) {
    this.barData = t2, this.boundingRect = i, this.xAxis = s, this.yAxis = n, this.orientation = o, this.plotIndex = g;
  }
  getDrawableElement() {
    const t2 = this.barData.data.map((o) => [
      this.xAxis.getScaleValue(o[0]),
      this.yAxis.getScaleValue(o[1])
    ]), s = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * (1 - 0.05), n = s / 2;
    return this.orientation === "horizontal" ? [
      {
        groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
        type: "rect",
        data: t2.map((o) => ({
          x: this.boundingRect.x,
          y: o[0] - n,
          height: s,
          width: o[1] - this.boundingRect.x,
          fill: this.barData.fill,
          strokeWidth: 0,
          strokeFill: this.barData.fill
        }))
      }
    ] : [
      {
        groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
        type: "rect",
        data: t2.map((o) => ({
          x: o[0] - n,
          y: o[1],
          width: s,
          height: this.boundingRect.y + this.boundingRect.height - o[1],
          fill: this.barData.fill,
          strokeWidth: 0,
          strokeFill: this.barData.fill
        }))
      }
    ];
  }
}, p(it, "BarPlot"), it), et, Ii = (et = class {
  constructor(t2, i, s) {
    this.chartConfig = t2, this.chartData = i, this.chartThemeConfig = s, this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  setAxes(t2, i) {
    this.xAxis = t2, this.yAxis = i;
  }
  setBoundingBoxXY(t2) {
    this.boundingRect.x = t2.x, this.boundingRect.y = t2.y;
  }
  calculateSpace(t2) {
    return this.boundingRect.width = t2.width, this.boundingRect.height = t2.height, {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    if (!(this.xAxis && this.yAxis))
      throw Error("Axes must be passed to render Plots");
    const t2 = [];
    for (const [i, s] of this.chartData.plots.entries())
      switch (s.type) {
        case "line":
          {
            const n = new Li(
              s,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            t2.push(...n.getDrawableElement());
          }
          break;
        case "bar":
          {
            const n = new Ei(
              s,
              this.boundingRect,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            t2.push(...n.getDrawableElement());
          }
          break;
      }
    return t2;
  }
}, p(et, "BasePlot"), et);
function qt(e, t2, i) {
  return new Ii(e, t2, i);
}
p(qt, "getPlotComponent");
var st, Mi = (st = class {
  constructor(t2, i, s, n) {
    this.chartConfig = t2, this.chartData = i, this.componentStore = {
      title: $t(t2, i, s, n),
      plot: qt(t2, i, s),
      xAxis: wt(
        i.xAxis,
        t2.xAxis,
        {
          titleColor: s.xAxisTitleColor,
          labelColor: s.xAxisLabelColor,
          tickColor: s.xAxisTickColor,
          axisLineColor: s.xAxisLineColor
        },
        n
      ),
      yAxis: wt(
        i.yAxis,
        t2.yAxis,
        {
          titleColor: s.yAxisTitleColor,
          labelColor: s.yAxisLabelColor,
          tickColor: s.yAxisTickColor,
          axisLineColor: s.yAxisLineColor
        },
        n
      )
    };
  }
  calculateVerticalSpace() {
    let t2 = this.chartConfig.width, i = this.chartConfig.height, s = 0, n = 0, o = Math.floor(t2 * this.chartConfig.plotReservedSpacePercent / 100), g = Math.floor(
      i * this.chartConfig.plotReservedSpacePercent / 100
    ), m = this.componentStore.plot.calculateSpace({
      width: o,
      height: g
    });
    t2 -= m.width, i -= m.height, m = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: i
    }), n = m.height, i -= m.height, this.componentStore.xAxis.setAxisPosition("bottom"), m = this.componentStore.xAxis.calculateSpace({
      width: t2,
      height: i
    }), i -= m.height, this.componentStore.yAxis.setAxisPosition("left"), m = this.componentStore.yAxis.calculateSpace({
      width: t2,
      height: i
    }), s = m.width, t2 -= m.width, t2 > 0 && (o += t2, t2 = 0), i > 0 && (g += i, i = 0), this.componentStore.plot.calculateSpace({
      width: o,
      height: g
    }), this.componentStore.plot.setBoundingBoxXY({ x: s, y: n }), this.componentStore.xAxis.setRange([s, s + o]), this.componentStore.xAxis.setBoundingBoxXY({ x: s, y: n + g }), this.componentStore.yAxis.setRange([n, n + g]), this.componentStore.yAxis.setBoundingBoxXY({ x: 0, y: n }), this.chartData.plots.some((p3) => At(p3)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateHorizontalSpace() {
    let t2 = this.chartConfig.width, i = this.chartConfig.height, s = 0, n = 0, o = 0, g = Math.floor(t2 * this.chartConfig.plotReservedSpacePercent / 100), m = Math.floor(
      i * this.chartConfig.plotReservedSpacePercent / 100
    ), p3 = this.componentStore.plot.calculateSpace({
      width: g,
      height: m
    });
    t2 -= p3.width, i -= p3.height, p3 = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: i
    }), s = p3.height, i -= p3.height, this.componentStore.xAxis.setAxisPosition("left"), p3 = this.componentStore.xAxis.calculateSpace({
      width: t2,
      height: i
    }), t2 -= p3.width, n = p3.width, this.componentStore.yAxis.setAxisPosition("top"), p3 = this.componentStore.yAxis.calculateSpace({
      width: t2,
      height: i
    }), i -= p3.height, o = s + p3.height, t2 > 0 && (g += t2, t2 = 0), i > 0 && (m += i, i = 0), this.componentStore.plot.calculateSpace({
      width: g,
      height: m
    }), this.componentStore.plot.setBoundingBoxXY({ x: n, y: o }), this.componentStore.yAxis.setRange([n, n + g]), this.componentStore.yAxis.setBoundingBoxXY({ x: n, y: s }), this.componentStore.xAxis.setRange([o, o + m]), this.componentStore.xAxis.setBoundingBoxXY({ x: 0, y: o }), this.chartData.plots.some((k) => At(k)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateSpace() {
    this.chartConfig.chartOrientation === "horizontal" ? this.calculateHorizontalSpace() : this.calculateVerticalSpace();
  }
  getDrawableElement() {
    this.calculateSpace();
    const t2 = [];
    this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
    for (const i of Object.values(this.componentStore))
      t2.push(...i.getDrawableElements());
    return t2;
  }
}, p(st, "Orchestrator"), st), nt, Vi = (nt = class {
  static build(t2, i, s, n) {
    return new Mi(t2, i, s, n).getDrawableElement();
  }
}, p(nt, "XYChartBuilder"), nt), rt = 0, Gt, ot = Tt(), ht = Rt(), A = Dt(), Ct = ht.plotColorPalette.split(",").map((e) => e.trim()), gt = false, kt = false;
function Rt() {
  const e = Z0(), t2 = Dt$1();
  return cl(e.xyChart, t2.themeVariables.xyChart);
}
p(Rt, "getChartDefaultThemeConfig");
function Tt() {
  const e = Dt$1();
  return cl(
    Nh.xyChart,
    e.xyChart
  );
}
p(Tt, "getChartDefaultConfig");
function Dt() {
  return {
    yAxis: {
      type: "linear",
      title: "",
      min: 1 / 0,
      max: -1 / 0
    },
    xAxis: {
      type: "band",
      title: "",
      categories: []
    },
    title: "",
    plots: []
  };
}
p(Dt, "getChartDefaultData");
function xt(e) {
  const t2 = Dt$1();
  return te(e.trim(), t2);
}
p(xt, "textSanitizer");
function jt(e) {
  Gt = e;
}
p(jt, "setTmpSVGG");
function Qt(e) {
  e === "horizontal" ? ot.chartOrientation = "horizontal" : ot.chartOrientation = "vertical";
}
p(Qt, "setOrientation");
function Kt(e) {
  A.xAxis.title = xt(e.text);
}
p(Kt, "setXAxisTitle");
function vt(e, t2) {
  A.xAxis = { type: "linear", title: A.xAxis.title, min: e, max: t2 }, gt = true;
}
p(vt, "setXAxisRangeData");
function Zt(e) {
  A.xAxis = {
    type: "band",
    title: A.xAxis.title,
    categories: e.map((t2) => xt(t2.text))
  }, gt = true;
}
p(Zt, "setXAxisBand");
function Jt(e) {
  A.yAxis.title = xt(e.text);
}
p(Jt, "setYAxisTitle");
function ti(e, t2) {
  A.yAxis = { type: "linear", title: A.yAxis.title, min: e, max: t2 }, kt = true;
}
p(ti, "setYAxisRangeData");
function ii(e) {
  const t2 = Math.min(...e), i = Math.max(...e), s = G(A.yAxis) ? A.yAxis.min : 1 / 0, n = G(A.yAxis) ? A.yAxis.max : -1 / 0;
  A.yAxis = {
    type: "linear",
    title: A.yAxis.title,
    min: Math.min(s, t2),
    max: Math.max(n, i)
  };
}
p(ii, "setYAxisRangeFromPlotData");
function Pt(e) {
  let t2 = [];
  if (e.length === 0)
    return t2;
  if (!gt) {
    const i = G(A.xAxis) ? A.xAxis.min : 1 / 0, s = G(A.xAxis) ? A.xAxis.max : -1 / 0;
    vt(Math.min(i, 1), Math.max(s, e.length));
  }
  if (kt || ii(e), _t(A.xAxis) && (t2 = A.xAxis.categories.map((i, s) => [i, e[s]])), G(A.xAxis)) {
    const i = A.xAxis.min, s = A.xAxis.max, n = (s - i) / (e.length - 1), o = [];
    for (let g = i; g <= s; g += n)
      o.push(`${g}`);
    t2 = o.map((g, m) => [g, e[m]]);
  }
  return t2;
}
p(Pt, "transformDataWithoutCategory");
function Lt(e) {
  return Ct[e === 0 ? 0 : e % Ct.length];
}
p(Lt, "getPlotColorFromPalette");
function ei(e, t2) {
  const i = Pt(t2);
  A.plots.push({
    type: "line",
    strokeFill: Lt(rt),
    strokeWidth: 2,
    data: i
  }), rt++;
}
p(ei, "setLineData");
function si(e, t2) {
  const i = Pt(t2);
  A.plots.push({
    type: "bar",
    fill: Lt(rt),
    data: i
  }), rt++;
}
p(si, "setBarData");
function ni() {
  if (A.plots.length === 0)
    throw Error("No Plot to render, please provide a plot with some data");
  return A.title = Fy(), Vi.build(ot, A, ht, Gt);
}
p(ni, "getDrawableElem");
function ai() {
  return ht;
}
p(ai, "getChartThemeConfig");
function ri() {
  return ot;
}
p(ri, "getChartConfig");
function oi() {
  return A;
}
p(oi, "getXYChartData");
var Bi = /* @__PURE__ */ p(function() {
  By(), rt = 0, ot = Tt(), A = Dt(), ht = Rt(), Ct = ht.plotColorPalette.split(",").map((e) => e.trim()), gt = false, kt = false;
}, "clear"), Wi = {
  getDrawableElem: ni,
  clear: Bi,
  setAccTitle: Ay,
  getAccTitle: Ly,
  setDiagramTitle: Ey,
  getDiagramTitle: Fy,
  getAccDescription: $y,
  setAccDescription: My,
  setOrientation: Qt,
  setXAxisTitle: Kt,
  setXAxisRangeData: vt,
  setXAxisBand: Zt,
  setYAxisTitle: Jt,
  setYAxisRangeData: ti,
  setLineData: ei,
  setBarData: si,
  setTmpSVGG: jt,
  getChartThemeConfig: ai,
  getChartConfig: ri,
  getXYChartData: oi
}, zi = /* @__PURE__ */ p((e, t2, i, s) => {
  const n = s.db, o = n.getChartThemeConfig(), g = n.getChartConfig(), m = n.getXYChartData().plots[0].data.map((y) => y[1]);
  function p$1(y) {
    return y === "top" ? "text-before-edge" : "middle";
  }
  p(p$1, "getDominantBaseLine");
  function k(y) {
    return y === "left" ? "start" : y === "right" ? "end" : "middle";
  }
  p(k, "getTextAnchor");
  function v(y) {
    return `translate(${y.x}, ${y.y}) rotate(${y.rotation || 0})`;
  }
  p(v, "getTextTransformation"), F.debug(`Rendering xychart chart
` + e);
  const C = p2(t2), b = C.append("g").attr("class", "main"), E = b.append("rect").attr("width", g.width).attr("height", g.height).attr("class", "background");
  Gh(C, g.height, g.width, true), C.attr("viewBox", `0 0 ${g.width} ${g.height}`), E.attr("fill", o.backgroundColor), n.setTmpSVGG(C.append("g").attr("class", "mermaid-tmp-group"));
  const D = n.getDrawableElem(), P = {};
  function I(y) {
    let _ = b, c = "";
    for (const [W] of y.entries()) {
      let z = b;
      W > 0 && P[c] && (z = P[c]), c += y[W], _ = P[c], _ || (_ = P[c] = z.append("g").attr("class", y[W]));
    }
    return _;
  }
  p(I, "getGroup");
  for (const y of D) {
    if (y.data.length === 0)
      continue;
    const _ = I(y.groupTexts);
    switch (y.type) {
      case "rect":
        if (_.selectAll("rect").data(y.data).enter().append("rect").attr("x", (c) => c.x).attr("y", (c) => c.y).attr("width", (c) => c.width).attr("height", (c) => c.height).attr("fill", (c) => c.fill).attr("stroke", (c) => c.strokeFill).attr("stroke-width", (c) => c.strokeWidth), g.showDataLabel)
          if (g.chartOrientation === "horizontal") {
            let c = function(l, L) {
              const { data: S, label: R } = l;
              return L * R.length * W <= S.width - 10;
            };
            p(c, "fitsHorizontally");
            const W = 0.7, z = y.data.map((l, L) => ({ data: l, label: m[L].toString() })).filter((l) => l.data.width > 0 && l.data.height > 0), U = z.map((l) => {
              const { data: L } = l;
              let S = L.height * 0.7;
              for (; !c(l, S) && S > 0; )
                S -= 1;
              return S;
            }), X = Math.floor(Math.min(...U));
            _.selectAll("text").data(z).enter().append("text").attr("x", (l) => l.data.x + l.data.width - 10).attr("y", (l) => l.data.y + l.data.height / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").attr("fill", "black").attr("font-size", `${X}px`).text((l) => l.label);
          } else {
            let c = function(l, L, S) {
              const { data: R, label: $ } = l, N = L * $.length * 0.7, F2 = R.x + R.width / 2, h2 = F2 - N / 2, u = F2 + N / 2, x = h2 >= R.x && u <= R.x + R.width, d = R.y + S + L <= R.y + R.height;
              return x && d;
            };
            p(c, "fitsInBar");
            const W = 10, z = y.data.map((l, L) => ({ data: l, label: m[L].toString() })).filter((l) => l.data.width > 0 && l.data.height > 0), U = z.map((l) => {
              const { data: L, label: S } = l;
              let R = L.width / (S.length * 0.7);
              for (; !c(l, R, W) && R > 0; )
                R -= 1;
              return R;
            }), X = Math.floor(Math.min(...U));
            _.selectAll("text").data(z).enter().append("text").attr("x", (l) => l.data.x + l.data.width / 2).attr("y", (l) => l.data.y + W).attr("text-anchor", "middle").attr("dominant-baseline", "hanging").attr("fill", "black").attr("font-size", `${X}px`).text((l) => l.label);
          }
        break;
      case "text":
        _.selectAll("text").data(y.data).enter().append("text").attr("x", 0).attr("y", 0).attr("fill", (c) => c.fill).attr("font-size", (c) => c.fontSize).attr("dominant-baseline", (c) => p$1(c.verticalPos)).attr("text-anchor", (c) => k(c.horizontalPos)).attr("transform", (c) => v(c)).text((c) => c.text);
        break;
      case "path":
        _.selectAll("path").data(y.data).enter().append("path").attr("d", (c) => c.path).attr("fill", (c) => c.fill ? c.fill : "none").attr("stroke", (c) => c.strokeFill).attr("stroke-width", (c) => c.strokeWidth);
        break;
    }
  }
}, "draw"), Fi = {
  draw: zi
}, Hi = {
  parser: Ti,
  db: Wi,
  renderer: Fi
};
export {
  Hi as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHljaGFydERpYWdyYW0tUFJJM0pDMlItQkM3M01nVGQtVEFtUEE1MzQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbWVybWFpZC1zdHJpbmcvZGlzdC94eWNoYXJ0RGlhZ3JhbS1QUkkzSkMyUi1CQzczTWdUZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIGEsIHMgYXMgZ2ksIGcgYXMgeGksIHEgYXMgWHQsIHAgYXMgZGksIGEgYXMgZmksIGIgYXMgcGksIGwgYXMgTnQsIEggYXMgbWksIGUgYXMgeWksIHkgYXMgYmksIEUgYXMgU3QsIEQgYXMgWXQsIEYgYXMgQWksIEsgYXMgd2ksIGkgYXMgQ2ksIGFBIGFzIFNpLCBSIGFzIFd0IH0gZnJvbSBcIi4vZW50cnktQjJWWC1reGEuanNcIjtcbmltcG9ydCB7IGkgYXMgX2kgfSBmcm9tIFwiLi9pbml0LURqVU9DNHN0LmpzXCI7XG5pbXBvcnQgeyBvIGFzIGtpIH0gZnJvbSBcIi4vb3JkaW5hbC1CNi1mM01BcS5qc1wiO1xuaW1wb3J0IHsgbCBhcyB6dCB9IGZyb20gXCIuL2xpbmVhci1aZXE0d3Y5My5qc1wiO1xuZnVuY3Rpb24gUmkoZSwgdCwgaSkge1xuICBlID0gK2UsIHQgPSArdCwgaSA9IChuID0gYXJndW1lbnRzLmxlbmd0aCkgPCAyID8gKHQgPSBlLCBlID0gMCwgMSkgOiBuIDwgMyA/IDEgOiAraTtcbiAgZm9yICh2YXIgcyA9IC0xLCBuID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKCh0IC0gZSkgLyBpKSkgfCAwLCBvID0gbmV3IEFycmF5KG4pOyArK3MgPCBuOyApXG4gICAgb1tzXSA9IGUgKyBzICogaTtcbiAgcmV0dXJuIG87XG59XG5mdW5jdGlvbiB5dCgpIHtcbiAgdmFyIGUgPSBraSgpLnVua25vd24odm9pZCAwKSwgdCA9IGUuZG9tYWluLCBpID0gZS5yYW5nZSwgcyA9IDAsIG4gPSAxLCBvLCBnLCBtID0gITEsIHAgPSAwLCBrID0gMCwgdiA9IDAuNTtcbiAgZGVsZXRlIGUudW5rbm93bjtcbiAgZnVuY3Rpb24gQygpIHtcbiAgICB2YXIgYiA9IHQoKS5sZW5ndGgsIEUgPSBuIDwgcywgRCA9IEUgPyBuIDogcywgUCA9IEUgPyBzIDogbjtcbiAgICBvID0gKFAgLSBEKSAvIE1hdGgubWF4KDEsIGIgLSBwICsgayAqIDIpLCBtICYmIChvID0gTWF0aC5mbG9vcihvKSksIEQgKz0gKFAgLSBEIC0gbyAqIChiIC0gcCkpICogdiwgZyA9IG8gKiAoMSAtIHApLCBtICYmIChEID0gTWF0aC5yb3VuZChEKSwgZyA9IE1hdGgucm91bmQoZykpO1xuICAgIHZhciBJID0gUmkoYikubWFwKGZ1bmN0aW9uKHkpIHtcbiAgICAgIHJldHVybiBEICsgbyAqIHk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGkoRSA/IEkucmV2ZXJzZSgpIDogSSk7XG4gIH1cbiAgcmV0dXJuIGUuZG9tYWluID0gZnVuY3Rpb24oYikge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHQoYiksIEMoKSkgOiB0KCk7XG4gIH0sIGUucmFuZ2UgPSBmdW5jdGlvbihiKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoW3MsIG5dID0gYiwgcyA9ICtzLCBuID0gK24sIEMoKSkgOiBbcywgbl07XG4gIH0sIGUucmFuZ2VSb3VuZCA9IGZ1bmN0aW9uKGIpIHtcbiAgICByZXR1cm4gW3MsIG5dID0gYiwgcyA9ICtzLCBuID0gK24sIG0gPSAhMCwgQygpO1xuICB9LCBlLmJhbmR3aWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnO1xuICB9LCBlLnN0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbztcbiAgfSwgZS5yb3VuZCA9IGZ1bmN0aW9uKGIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChtID0gISFiLCBDKCkpIDogbTtcbiAgfSwgZS5wYWRkaW5nID0gZnVuY3Rpb24oYikge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHAgPSBNYXRoLm1pbigxLCBrID0gK2IpLCBDKCkpIDogcDtcbiAgfSwgZS5wYWRkaW5nSW5uZXIgPSBmdW5jdGlvbihiKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocCA9IE1hdGgubWluKDEsIGIpLCBDKCkpIDogcDtcbiAgfSwgZS5wYWRkaW5nT3V0ZXIgPSBmdW5jdGlvbihiKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoayA9ICtiLCBDKCkpIDogaztcbiAgfSwgZS5hbGlnbiA9IGZ1bmN0aW9uKGIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh2ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgYikpLCBDKCkpIDogdjtcbiAgfSwgZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHl0KHQoKSwgW3MsIG5dKS5yb3VuZChtKS5wYWRkaW5nSW5uZXIocCkucGFkZGluZ091dGVyKGspLmFsaWduKHYpO1xuICB9LCBfaS5hcHBseShDKCksIGFyZ3VtZW50cyk7XG59XG52YXIgYnQgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBlID0gLyogQF9fUFVSRV9fICovIGEoZnVuY3Rpb24oRiwgaCwgdSwgeCkge1xuICAgIGZvciAodSA9IHUgfHwge30sIHggPSBGLmxlbmd0aDsgeC0tOyB1W0ZbeF1dID0gaCkgO1xuICAgIHJldHVybiB1O1xuICB9LCBcIm9cIiksIHQgPSBbMSwgMTAsIDEyLCAxNCwgMTYsIDE4LCAxOSwgMjEsIDIzXSwgaSA9IFsyLCA2XSwgcyA9IFsxLCAzXSwgbiA9IFsxLCA1XSwgbyA9IFsxLCA2XSwgZyA9IFsxLCA3XSwgbSA9IFsxLCA1LCAxMCwgMTIsIDE0LCAxNiwgMTgsIDE5LCAyMSwgMjMsIDM0LCAzNSwgMzZdLCBwID0gWzEsIDI1XSwgayA9IFsxLCAyNl0sIHYgPSBbMSwgMjhdLCBDID0gWzEsIDI5XSwgYiA9IFsxLCAzMF0sIEUgPSBbMSwgMzFdLCBEID0gWzEsIDMyXSwgUCA9IFsxLCAzM10sIEkgPSBbMSwgMzRdLCB5ID0gWzEsIDM1XSwgXyA9IFsxLCAzNl0sIGMgPSBbMSwgMzddLCBXID0gWzEsIDQzXSwgeiA9IFsxLCA0Ml0sIFUgPSBbMSwgNDddLCBYID0gWzEsIDUwXSwgbCA9IFsxLCAxMCwgMTIsIDE0LCAxNiwgMTgsIDE5LCAyMSwgMjMsIDM0LCAzNSwgMzZdLCBMID0gWzEsIDEwLCAxMiwgMTQsIDE2LCAxOCwgMTksIDIxLCAyMywgMjQsIDI2LCAyNywgMjgsIDM0LCAzNSwgMzZdLCBTID0gWzEsIDEwLCAxMiwgMTQsIDE2LCAxOCwgMTksIDIxLCAyMywgMjQsIDI2LCAyNywgMjgsIDM0LCAzNSwgMzYsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwXSwgUiA9IFsxLCA2NF0sICQgPSB7XG4gICAgdHJhY2U6IC8qIEBfX1BVUkVfXyAqLyBhKGZ1bmN0aW9uKCkge1xuICAgIH0sIFwidHJhY2VcIiksXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IGVycm9yOiAyLCBzdGFydDogMywgZW9sOiA0LCBYWUNIQVJUOiA1LCBjaGFydENvbmZpZzogNiwgZG9jdW1lbnQ6IDcsIENIQVJUX09SSUVOVEFUSU9OOiA4LCBzdGF0ZW1lbnQ6IDksIHRpdGxlOiAxMCwgdGV4dDogMTEsIFhfQVhJUzogMTIsIHBhcnNlWEF4aXM6IDEzLCBZX0FYSVM6IDE0LCBwYXJzZVlBeGlzOiAxNSwgTElORTogMTYsIHBsb3REYXRhOiAxNywgQkFSOiAxOCwgYWNjX3RpdGxlOiAxOSwgYWNjX3RpdGxlX3ZhbHVlOiAyMCwgYWNjX2Rlc2NyOiAyMSwgYWNjX2Rlc2NyX3ZhbHVlOiAyMiwgYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZTogMjMsIFNRVUFSRV9CUkFDRVNfU1RBUlQ6IDI0LCBjb21tYVNlcGFyYXRlZE51bWJlcnM6IDI1LCBTUVVBUkVfQlJBQ0VTX0VORDogMjYsIE5VTUJFUl9XSVRIX0RFQ0lNQUw6IDI3LCBDT01NQTogMjgsIHhBeGlzRGF0YTogMjksIGJhbmREYXRhOiAzMCwgQVJST1dfREVMSU1JVEVSOiAzMSwgY29tbWFTZXBhcmF0ZWRUZXh0czogMzIsIHlBeGlzRGF0YTogMzMsIE5FV0xJTkU6IDM0LCBTRU1JOiAzNSwgRU9GOiAzNiwgYWxwaGFOdW06IDM3LCBTVFI6IDM4LCBNRF9TVFI6IDM5LCBhbHBoYU51bVRva2VuOiA0MCwgQU1QOiA0MSwgTlVNOiA0MiwgQUxQSEE6IDQzLCBQTFVTOiA0NCwgRVFVQUxTOiA0NSwgTVVMVDogNDYsIERPVDogNDcsIEJSS1Q6IDQ4LCBNSU5VUzogNDksIFVOREVSU0NPUkU6IDUwLCAkYWNjZXB0OiAwLCAkZW5kOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDU6IFwiWFlDSEFSVFwiLCA4OiBcIkNIQVJUX09SSUVOVEFUSU9OXCIsIDEwOiBcInRpdGxlXCIsIDEyOiBcIlhfQVhJU1wiLCAxNDogXCJZX0FYSVNcIiwgMTY6IFwiTElORVwiLCAxODogXCJCQVJcIiwgMTk6IFwiYWNjX3RpdGxlXCIsIDIwOiBcImFjY190aXRsZV92YWx1ZVwiLCAyMTogXCJhY2NfZGVzY3JcIiwgMjI6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDIzOiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMjQ6IFwiU1FVQVJFX0JSQUNFU19TVEFSVFwiLCAyNjogXCJTUVVBUkVfQlJBQ0VTX0VORFwiLCAyNzogXCJOVU1CRVJfV0lUSF9ERUNJTUFMXCIsIDI4OiBcIkNPTU1BXCIsIDMxOiBcIkFSUk9XX0RFTElNSVRFUlwiLCAzNDogXCJORVdMSU5FXCIsIDM1OiBcIlNFTUlcIiwgMzY6IFwiRU9GXCIsIDM4OiBcIlNUUlwiLCAzOTogXCJNRF9TVFJcIiwgNDE6IFwiQU1QXCIsIDQyOiBcIk5VTVwiLCA0MzogXCJBTFBIQVwiLCA0NDogXCJQTFVTXCIsIDQ1OiBcIkVRVUFMU1wiLCA0NjogXCJNVUxUXCIsIDQ3OiBcIkRPVFwiLCA0ODogXCJCUktUXCIsIDQ5OiBcIk1JTlVTXCIsIDUwOiBcIlVOREVSU0NPUkVcIiB9LFxuICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCAyXSwgWzMsIDNdLCBbMywgMl0sIFszLCAxXSwgWzYsIDFdLCBbNywgMF0sIFs3LCAyXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAyXSwgWzksIDJdLCBbOSwgMl0sIFs5LCAzXSwgWzksIDJdLCBbOSwgM10sIFs5LCAyXSwgWzksIDJdLCBbOSwgMV0sIFsxNywgM10sIFsyNSwgM10sIFsyNSwgMV0sIFsxMywgMV0sIFsxMywgMl0sIFsxMywgMV0sIFsyOSwgMV0sIFsyOSwgM10sIFszMCwgM10sIFszMiwgM10sIFszMiwgMV0sIFsxNSwgMV0sIFsxNSwgMl0sIFsxNSwgMV0sIFszMywgM10sIFs0LCAxXSwgWzQsIDFdLCBbNCwgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFsxMSwgMV0sIFszNywgMV0sIFszNywgMl0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV0sIFs0MCwgMV1dLFxuICAgIHBlcmZvcm1BY3Rpb246IC8qIEBfX1BVUkVfXyAqLyBhKGZ1bmN0aW9uKGgsIHUsIHgsIGQsIHcsIHIsIGF0KSB7XG4gICAgICB2YXIgZiA9IHIubGVuZ3RoIC0gMTtcbiAgICAgIHN3aXRjaCAodykge1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgZC5zZXRPcmllbnRhdGlvbihyW2ZdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIGQuc2V0RGlhZ3JhbVRpdGxlKHJbZl0udGV4dC50cmltKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIGQuc2V0TGluZURhdGEoeyB0ZXh0OiBcIlwiLCB0eXBlOiBcInRleHRcIiB9LCByW2ZdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICBkLnNldExpbmVEYXRhKHJbZiAtIDFdLCByW2ZdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICBkLnNldEJhckRhdGEoeyB0ZXh0OiBcIlwiLCB0eXBlOiBcInRleHRcIiB9LCByW2ZdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICBkLnNldEJhckRhdGEocltmIC0gMV0sIHJbZl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIHRoaXMuJCA9IHJbZl0udHJpbSgpLCBkLnNldEFjY1RpdGxlKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTc6XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgdGhpcy4kID0gcltmXS50cmltKCksIGQuc2V0QWNjRGVzY3JpcHRpb24odGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICB0aGlzLiQgPSByW2YgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICB0aGlzLiQgPSBbTnVtYmVyKHJbZiAtIDJdKSwgLi4ucltmXV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgdGhpcy4kID0gW051bWJlcihyW2ZdKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgZC5zZXRYQXhpc1RpdGxlKHJbZl0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIGQuc2V0WEF4aXNUaXRsZShyW2YgLSAxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgZC5zZXRYQXhpc1RpdGxlKHsgdHlwZTogXCJ0ZXh0XCIsIHRleHQ6IFwiXCIgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgZC5zZXRYQXhpc0JhbmQocltmXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgZC5zZXRYQXhpc1JhbmdlRGF0YShOdW1iZXIocltmIC0gMl0pLCBOdW1iZXIocltmXSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIHRoaXMuJCA9IHJbZiAtIDFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIHRoaXMuJCA9IFtyW2YgLSAyXSwgLi4ucltmXV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgdGhpcy4kID0gW3JbZl1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgIGQuc2V0WUF4aXNUaXRsZShyW2ZdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICBkLnNldFlBeGlzVGl0bGUocltmIC0gMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIGQuc2V0WUF4aXNUaXRsZSh7IHR5cGU6IFwidGV4dFwiLCB0ZXh0OiBcIlwiIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIGQuc2V0WUF4aXNSYW5nZURhdGEoTnVtYmVyKHJbZiAtIDJdKSwgTnVtYmVyKHJbZl0pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICB0aGlzLiQgPSB7IHRleHQ6IHJbZl0sIHR5cGU6IFwidGV4dFwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgdGhpcy4kID0geyB0ZXh0OiByW2ZdLCB0eXBlOiBcInRleHRcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIHRoaXMuJCA9IHsgdGV4dDogcltmXSwgdHlwZTogXCJtYXJrZG93blwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgdGhpcy4kID0gcltmXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICB0aGlzLiQgPSByW2YgLSAxXSArIFwiXCIgKyByW2ZdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIFwiYW5vbnltb3VzXCIpLFxuICAgIHRhYmxlOiBbZSh0LCBpLCB7IDM6IDEsIDQ6IDIsIDc6IDQsIDU6IHMsIDM0OiBuLCAzNTogbywgMzY6IGcgfSksIHsgMTogWzNdIH0sIGUodCwgaSwgeyA0OiAyLCA3OiA0LCAzOiA4LCA1OiBzLCAzNDogbiwgMzU6IG8sIDM2OiBnIH0pLCBlKHQsIGksIHsgNDogMiwgNzogNCwgNjogOSwgMzogMTAsIDU6IHMsIDg6IFsxLCAxMV0sIDM0OiBuLCAzNTogbywgMzY6IGcgfSksIHsgMTogWzIsIDRdLCA5OiAxMiwgMTA6IFsxLCAxM10sIDEyOiBbMSwgMTRdLCAxNDogWzEsIDE1XSwgMTY6IFsxLCAxNl0sIDE4OiBbMSwgMTddLCAxOTogWzEsIDE4XSwgMjE6IFsxLCAxOV0sIDIzOiBbMSwgMjBdIH0sIGUobSwgWzIsIDM0XSksIGUobSwgWzIsIDM1XSksIGUobSwgWzIsIDM2XSksIHsgMTogWzIsIDFdIH0sIGUodCwgaSwgeyA0OiAyLCA3OiA0LCAzOiAyMSwgNTogcywgMzQ6IG4sIDM1OiBvLCAzNjogZyB9KSwgeyAxOiBbMiwgM10gfSwgZShtLCBbMiwgNV0pLCBlKHQsIFsyLCA3XSwgeyA0OiAyMiwgMzQ6IG4sIDM1OiBvLCAzNjogZyB9KSwgeyAxMTogMjMsIDM3OiAyNCwgMzg6IHAsIDM5OiBrLCA0MDogMjcsIDQxOiB2LCA0MjogQywgNDM6IGIsIDQ0OiBFLCA0NTogRCwgNDY6IFAsIDQ3OiBJLCA0ODogeSwgNDk6IF8sIDUwOiBjIH0sIHsgMTE6IDM5LCAxMzogMzgsIDI0OiBXLCAyNzogeiwgMjk6IDQwLCAzMDogNDEsIDM3OiAyNCwgMzg6IHAsIDM5OiBrLCA0MDogMjcsIDQxOiB2LCA0MjogQywgNDM6IGIsIDQ0OiBFLCA0NTogRCwgNDY6IFAsIDQ3OiBJLCA0ODogeSwgNDk6IF8sIDUwOiBjIH0sIHsgMTE6IDQ1LCAxNTogNDQsIDI3OiBVLCAzMzogNDYsIDM3OiAyNCwgMzg6IHAsIDM5OiBrLCA0MDogMjcsIDQxOiB2LCA0MjogQywgNDM6IGIsIDQ0OiBFLCA0NTogRCwgNDY6IFAsIDQ3OiBJLCA0ODogeSwgNDk6IF8sIDUwOiBjIH0sIHsgMTE6IDQ5LCAxNzogNDgsIDI0OiBYLCAzNzogMjQsIDM4OiBwLCAzOTogaywgNDA6IDI3LCA0MTogdiwgNDI6IEMsIDQzOiBiLCA0NDogRSwgNDU6IEQsIDQ2OiBQLCA0NzogSSwgNDg6IHksIDQ5OiBfLCA1MDogYyB9LCB7IDExOiA1MiwgMTc6IDUxLCAyNDogWCwgMzc6IDI0LCAzODogcCwgMzk6IGssIDQwOiAyNywgNDE6IHYsIDQyOiBDLCA0MzogYiwgNDQ6IEUsIDQ1OiBELCA0NjogUCwgNDc6IEksIDQ4OiB5LCA0OTogXywgNTA6IGMgfSwgeyAyMDogWzEsIDUzXSB9LCB7IDIyOiBbMSwgNTRdIH0sIGUobCwgWzIsIDE4XSksIHsgMTogWzIsIDJdIH0sIGUobCwgWzIsIDhdKSwgZShsLCBbMiwgOV0pLCBlKEwsIFsyLCAzN10sIHsgNDA6IDU1LCA0MTogdiwgNDI6IEMsIDQzOiBiLCA0NDogRSwgNDU6IEQsIDQ2OiBQLCA0NzogSSwgNDg6IHksIDQ5OiBfLCA1MDogYyB9KSwgZShMLCBbMiwgMzhdKSwgZShMLCBbMiwgMzldKSwgZShTLCBbMiwgNDBdKSwgZShTLCBbMiwgNDJdKSwgZShTLCBbMiwgNDNdKSwgZShTLCBbMiwgNDRdKSwgZShTLCBbMiwgNDVdKSwgZShTLCBbMiwgNDZdKSwgZShTLCBbMiwgNDddKSwgZShTLCBbMiwgNDhdKSwgZShTLCBbMiwgNDldKSwgZShTLCBbMiwgNTBdKSwgZShTLCBbMiwgNTFdKSwgZShsLCBbMiwgMTBdKSwgZShsLCBbMiwgMjJdLCB7IDMwOiA0MSwgMjk6IDU2LCAyNDogVywgMjc6IHogfSksIGUobCwgWzIsIDI0XSksIGUobCwgWzIsIDI1XSksIHsgMzE6IFsxLCA1N10gfSwgeyAxMTogNTksIDMyOiA1OCwgMzc6IDI0LCAzODogcCwgMzk6IGssIDQwOiAyNywgNDE6IHYsIDQyOiBDLCA0MzogYiwgNDQ6IEUsIDQ1OiBELCA0NjogUCwgNDc6IEksIDQ4OiB5LCA0OTogXywgNTA6IGMgfSwgZShsLCBbMiwgMTFdKSwgZShsLCBbMiwgMzBdLCB7IDMzOiA2MCwgMjc6IFUgfSksIGUobCwgWzIsIDMyXSksIHsgMzE6IFsxLCA2MV0gfSwgZShsLCBbMiwgMTJdKSwgeyAxNzogNjIsIDI0OiBYIH0sIHsgMjU6IDYzLCAyNzogUiB9LCBlKGwsIFsyLCAxNF0pLCB7IDE3OiA2NSwgMjQ6IFggfSwgZShsLCBbMiwgMTZdKSwgZShsLCBbMiwgMTddKSwgZShTLCBbMiwgNDFdKSwgZShsLCBbMiwgMjNdKSwgeyAyNzogWzEsIDY2XSB9LCB7IDI2OiBbMSwgNjddIH0sIHsgMjY6IFsyLCAyOV0sIDI4OiBbMSwgNjhdIH0sIGUobCwgWzIsIDMxXSksIHsgMjc6IFsxLCA2OV0gfSwgZShsLCBbMiwgMTNdKSwgeyAyNjogWzEsIDcwXSB9LCB7IDI2OiBbMiwgMjFdLCAyODogWzEsIDcxXSB9LCBlKGwsIFsyLCAxNV0pLCBlKGwsIFsyLCAyNl0pLCBlKGwsIFsyLCAyN10pLCB7IDExOiA1OSwgMzI6IDcyLCAzNzogMjQsIDM4OiBwLCAzOTogaywgNDA6IDI3LCA0MTogdiwgNDI6IEMsIDQzOiBiLCA0NDogRSwgNDU6IEQsIDQ2OiBQLCA0NzogSSwgNDg6IHksIDQ5OiBfLCA1MDogYyB9LCBlKGwsIFsyLCAzM10pLCBlKGwsIFsyLCAxOV0pLCB7IDI1OiA3MywgMjc6IFIgfSwgeyAyNjogWzIsIDI4XSB9LCB7IDI2OiBbMiwgMjBdIH1dLFxuICAgIGRlZmF1bHRBY3Rpb25zOiB7IDg6IFsyLCAxXSwgMTA6IFsyLCAzXSwgMjE6IFsyLCAyXSwgNzI6IFsyLCAyOF0sIDczOiBbMiwgMjBdIH0sXG4gICAgcGFyc2VFcnJvcjogLyogQF9fUFVSRV9fICovIGEoZnVuY3Rpb24oaCwgdSkge1xuICAgICAgaWYgKHUucmVjb3ZlcmFibGUpXG4gICAgICAgIHRoaXMudHJhY2UoaCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIHggPSBuZXcgRXJyb3IoaCk7XG4gICAgICAgIHRocm93IHguaGFzaCA9IHUsIHg7XG4gICAgICB9XG4gICAgfSwgXCJwYXJzZUVycm9yXCIpLFxuICAgIHBhcnNlOiAvKiBAX19QVVJFX18gKi8gYShmdW5jdGlvbihoKSB7XG4gICAgICB2YXIgdSA9IHRoaXMsIHggPSBbMF0sIGQgPSBbXSwgdyA9IFtudWxsXSwgciA9IFtdLCBhdCA9IHRoaXMudGFibGUsIGYgPSBcIlwiLCBsdCA9IDAsIEl0ID0gMCwgaGkgPSAyLCBNdCA9IDEsIGxpID0gci5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIFQgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpLCBZID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIGR0IGluIHRoaXMueXkpXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBkdCkgJiYgKFkueXlbZHRdID0gdGhpcy55eVtkdF0pO1xuICAgICAgVC5zZXRJbnB1dChoLCBZLnl5KSwgWS55eS5sZXhlciA9IFQsIFkueXkucGFyc2VyID0gdGhpcywgdHlwZW9mIFQueXlsbG9jID4gXCJ1XCIgJiYgKFQueXlsbG9jID0ge30pO1xuICAgICAgdmFyIGZ0ID0gVC55eWxsb2M7XG4gICAgICByLnB1c2goZnQpO1xuICAgICAgdmFyIGNpID0gVC5vcHRpb25zICYmIFQub3B0aW9ucy5yYW5nZXM7XG4gICAgICB0eXBlb2YgWS55eS5wYXJzZUVycm9yID09IFwiZnVuY3Rpb25cIiA/IHRoaXMucGFyc2VFcnJvciA9IFkueXkucGFyc2VFcnJvciA6IHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgZnVuY3Rpb24gdWkoVikge1xuICAgICAgICB4Lmxlbmd0aCA9IHgubGVuZ3RoIC0gMiAqIFYsIHcubGVuZ3RoID0gdy5sZW5ndGggLSBWLCByLmxlbmd0aCA9IHIubGVuZ3RoIC0gVjtcbiAgICAgIH1cbiAgICAgIGEodWksIFwicG9wU3RhY2tcIik7XG4gICAgICBmdW5jdGlvbiBWdCgpIHtcbiAgICAgICAgdmFyIFY7XG4gICAgICAgIHJldHVybiBWID0gZC5wb3AoKSB8fCBULmxleCgpIHx8IE10LCB0eXBlb2YgViAhPSBcIm51bWJlclwiICYmIChWIGluc3RhbmNlb2YgQXJyYXkgJiYgKGQgPSBWLCBWID0gZC5wb3AoKSksIFYgPSB1LnN5bWJvbHNfW1ZdIHx8IFYpLCBWO1xuICAgICAgfVxuICAgICAgYShWdCwgXCJsZXhcIik7XG4gICAgICBmb3IgKHZhciBNLCBILCBCLCBwdCwgcSA9IHt9LCBjdCwgTywgQnQsIHV0OyA7ICkge1xuICAgICAgICBpZiAoSCA9IHhbeC5sZW5ndGggLSAxXSwgdGhpcy5kZWZhdWx0QWN0aW9uc1tIXSA/IEIgPSB0aGlzLmRlZmF1bHRBY3Rpb25zW0hdIDogKChNID09PSBudWxsIHx8IHR5cGVvZiBNID4gXCJ1XCIpICYmIChNID0gVnQoKSksIEIgPSBhdFtIXSAmJiBhdFtIXVtNXSksIHR5cGVvZiBCID4gXCJ1XCIgfHwgIUIubGVuZ3RoIHx8ICFCWzBdKSB7XG4gICAgICAgICAgdmFyIG10ID0gXCJcIjtcbiAgICAgICAgICB1dCA9IFtdO1xuICAgICAgICAgIGZvciAoY3QgaW4gYXRbSF0pXG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsc19bY3RdICYmIGN0ID4gaGkgJiYgdXQucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1tjdF0gKyBcIidcIik7XG4gICAgICAgICAgVC5zaG93UG9zaXRpb24gPyBtdCA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChsdCArIDEpICsgYDpcbmAgKyBULnNob3dQb3NpdGlvbigpICsgYFxuRXhwZWN0aW5nIGAgKyB1dC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bTV0gfHwgTSkgKyBcIidcIiA6IG10ID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKGx0ICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChNID09IE10ID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1tNXSB8fCBNKSArIFwiJ1wiKSwgdGhpcy5wYXJzZUVycm9yKG10LCB7XG4gICAgICAgICAgICB0ZXh0OiBULm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1tNXSB8fCBNLFxuICAgICAgICAgICAgbGluZTogVC55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogZnQsXG4gICAgICAgICAgICBleHBlY3RlZDogdXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlswXSBpbnN0YW5jZW9mIEFycmF5ICYmIEIubGVuZ3RoID4gMSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBIICsgXCIsIHRva2VuOiBcIiArIE0pO1xuICAgICAgICBzd2l0Y2ggKEJbMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB4LnB1c2goTSksIHcucHVzaChULnl5dGV4dCksIHIucHVzaChULnl5bGxvYyksIHgucHVzaChCWzFdKSwgTSA9IG51bGwsIEl0ID0gVC55eWxlbmcsIGYgPSBULnl5dGV4dCwgbHQgPSBULnl5bGluZW5vLCBmdCA9IFQueXlsbG9jO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKE8gPSB0aGlzLnByb2R1Y3Rpb25zX1tCWzFdXVsxXSwgcS4kID0gd1t3Lmxlbmd0aCAtIE9dLCBxLl8kID0ge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiByW3IubGVuZ3RoIC0gKE8gfHwgMSldLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogcltyLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiByW3IubGVuZ3RoIC0gKE8gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHJbci5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfSwgY2kgJiYgKHEuXyQucmFuZ2UgPSBbXG4gICAgICAgICAgICAgIHJbci5sZW5ndGggLSAoTyB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgIHJbci5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgXSksIHB0ID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KHEsIFtcbiAgICAgICAgICAgICAgZixcbiAgICAgICAgICAgICAgSXQsXG4gICAgICAgICAgICAgIGx0LFxuICAgICAgICAgICAgICBZLnl5LFxuICAgICAgICAgICAgICBCWzFdLFxuICAgICAgICAgICAgICB3LFxuICAgICAgICAgICAgICByXG4gICAgICAgICAgICBdLmNvbmNhdChsaSkpLCB0eXBlb2YgcHQgPCBcInVcIilcbiAgICAgICAgICAgICAgcmV0dXJuIHB0O1xuICAgICAgICAgICAgTyAmJiAoeCA9IHguc2xpY2UoMCwgLTEgKiBPICogMiksIHcgPSB3LnNsaWNlKDAsIC0xICogTyksIHIgPSByLnNsaWNlKDAsIC0xICogTykpLCB4LnB1c2godGhpcy5wcm9kdWN0aW9uc19bQlsxXV1bMF0pLCB3LnB1c2gocS4kKSwgci5wdXNoKHEuXyQpLCBCdCA9IGF0W3hbeC5sZW5ndGggLSAyXV1beFt4Lmxlbmd0aCAtIDFdXSwgeC5wdXNoKEJ0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICEwO1xuICAgIH0sIFwicGFyc2VcIilcbiAgfSwgRXQgPSAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBGID0ge1xuICAgICAgRU9GOiAxLFxuICAgICAgcGFyc2VFcnJvcjogLyogQF9fUFVSRV9fICovIGEoZnVuY3Rpb24odSwgeCkge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpXG4gICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcih1LCB4KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1KTtcbiAgICAgIH0sIFwicGFyc2VFcnJvclwiKSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogLyogQF9fUFVSRV9fICovIGEoZnVuY3Rpb24oaCwgdSkge1xuICAgICAgICByZXR1cm4gdGhpcy55eSA9IHUgfHwgdGhpcy55eSB8fCB7fSwgdGhpcy5faW5wdXQgPSBoLCB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gITEsIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDAsIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCIsIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAodGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF0pLCB0aGlzLm9mZnNldCA9IDAsIHRoaXM7XG4gICAgICB9LCBcInNldElucHV0XCIpLFxuICAgICAgLy8gY29uc3VtZXMgYW5kIHJldHVybnMgb25lIGNoYXIgZnJvbSB0aGUgaW5wdXRcbiAgICAgIGlucHV0OiAvKiBAX19QVVJFX18gKi8gYShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGggPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gaCwgdGhpcy55eWxlbmcrKywgdGhpcy5vZmZzZXQrKywgdGhpcy5tYXRjaCArPSBoLCB0aGlzLm1hdGNoZWQgKz0gaDtcbiAgICAgICAgdmFyIHUgPSBoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgcmV0dXJuIHUgPyAodGhpcy55eWxpbmVubysrLCB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKykgOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrLCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmIHRoaXMueXlsbG9jLnJhbmdlWzFdKyssIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSksIGg7XG4gICAgICB9LCBcImlucHV0XCIpLFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBhKGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgdmFyIHUgPSBoLmxlbmd0aCwgeCA9IGguc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBoICsgdGhpcy5faW5wdXQsIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIHUpLCB0aGlzLm9mZnNldCAtPSB1O1xuICAgICAgICB2YXIgZCA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSksIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpLCB4Lmxlbmd0aCAtIDEgJiYgKHRoaXMueXlsaW5lbm8gLT0geC5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIHcgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgcmV0dXJuIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogeCA/ICh4Lmxlbmd0aCA9PT0gZC5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIGRbZC5sZW5ndGggLSB4Lmxlbmd0aF0ubGVuZ3RoIC0geFswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSB1XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW3dbMF0sIHdbMF0gKyB0aGlzLnl5bGVuZyAtIHVdKSwgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXM7XG4gICAgICB9LCBcInVucHV0XCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbiAgICAgIG1vcmU6IC8qIEBfX1BVUkVfXyAqLyBhKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9yZSA9ICEwLCB0aGlzO1xuICAgICAgfSwgXCJtb3JlXCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgIHJlamVjdDogLyogQF9fUFVSRV9fICovIGEoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKVxuICAgICAgICAgIHRoaXMuX2JhY2t0cmFjayA9ICEwO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXG5gICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sIFwicmVqZWN0XCIpLFxuICAgICAgLy8gcmV0YWluIGZpcnN0IG4gY2hhcmFjdGVycyBvZiB0aGUgbWF0Y2hcbiAgICAgIGxlc3M6IC8qIEBfX1BVUkVfXyAqLyBhKGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKGgpKTtcbiAgICAgIH0sIFwibGVzc1wiKSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogLyogQF9fUFVSRV9fICovIGEoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKGgubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBoLnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwicGFzdElucHV0XCIpLFxuICAgICAgLy8gZGlzcGxheXMgdXBjb21pbmcgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICB1cGNvbWluZ0lucHV0OiAvKiBAX19QVVJFX18gKi8gYShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGggPSB0aGlzLm1hdGNoO1xuICAgICAgICByZXR1cm4gaC5sZW5ndGggPCAyMCAmJiAoaCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBoLmxlbmd0aCkpLCAoaC5zdWJzdHIoMCwgMjApICsgKGgubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwidXBjb21pbmdJbnB1dFwiKSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogLyogQF9fUFVSRV9fICovIGEoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoID0gdGhpcy5wYXN0SW5wdXQoKSwgdSA9IG5ldyBBcnJheShoLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICByZXR1cm4gaCArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgYFxuYCArIHUgKyBcIl5cIjtcbiAgICAgIH0sIFwic2hvd1Bvc2l0aW9uXCIpLFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiAvKiBAX19QVVJFX18gKi8gYShmdW5jdGlvbihoLCB1KSB7XG4gICAgICAgIHZhciB4LCBkLCB3O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlciAmJiAodyA9IHtcbiAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAody55eWxsb2MucmFuZ2UgPSB0aGlzLnl5bGxvYy5yYW5nZS5zbGljZSgwKSkpLCBkID0gaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyksIGQgJiYgKHRoaXMueXlsaW5lbm8gKz0gZC5sZW5ndGgpLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBkID8gZFtkLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGRbZC5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIGhbMF0ubGVuZ3RoXG4gICAgICAgIH0sIHRoaXMueXl0ZXh0ICs9IGhbMF0sIHRoaXMubWF0Y2ggKz0gaFswXSwgdGhpcy5tYXRjaGVzID0gaCwgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ10pLCB0aGlzLl9tb3JlID0gITEsIHRoaXMuX2JhY2t0cmFjayA9ICExLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKGhbMF0ubGVuZ3RoKSwgdGhpcy5tYXRjaGVkICs9IGhbMF0sIHggPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCB1LCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pLCB0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQgJiYgKHRoaXMuZG9uZSA9ICExKSwgeClcbiAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIHIgaW4gdylcbiAgICAgICAgICAgIHRoaXNbcl0gPSB3W3JdO1xuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9LCBcInRlc3RfbWF0Y2hcIiksXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCBpbiBpbnB1dFxuICAgICAgbmV4dDogLyogQF9fUFVSRV9fICovIGEoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB0aGlzLl9pbnB1dCB8fCAodGhpcy5kb25lID0gITApO1xuICAgICAgICB2YXIgaCwgdSwgeCwgZDtcbiAgICAgICAgdGhpcy5fbW9yZSB8fCAodGhpcy55eXRleHQgPSBcIlwiLCB0aGlzLm1hdGNoID0gXCJcIik7XG4gICAgICAgIGZvciAodmFyIHcgPSB0aGlzLl9jdXJyZW50UnVsZXMoKSwgciA9IDA7IHIgPCB3Lmxlbmd0aDsgcisrKVxuICAgICAgICAgIGlmICh4ID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1t3W3JdXSksIHggJiYgKCF1IHx8IHhbMF0ubGVuZ3RoID4gdVswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBpZiAodSA9IHgsIGQgPSByLCB0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIGlmIChoID0gdGhpcy50ZXN0X21hdGNoKHgsIHdbcl0pLCBoICE9PSAhMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIHUgPSAhMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmZsZXgpXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHUgPyAoaCA9IHRoaXMudGVzdF9tYXRjaCh1LCB3W2RdKSwgaCAhPT0gITEgPyBoIDogITEpIDogdGhpcy5faW5wdXQgPT09IFwiXCIgPyB0aGlzLkVPRiA6IHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBVbnJlY29nbml6ZWQgdGV4dC5cbmAgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgIH0pO1xuICAgICAgfSwgXCJuZXh0XCIpLFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiAvKiBAX19QVVJFX18gKi8gYShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHUgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHUgfHwgdGhpcy5sZXgoKTtcbiAgICAgIH0sIFwibGV4XCIpLFxuICAgICAgLy8gYWN0aXZhdGVzIGEgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSAocHVzaGVzIHRoZSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9udG8gdGhlIGNvbmRpdGlvbiBzdGFjaylcbiAgICAgIGJlZ2luOiAvKiBAX19QVVJFX18gKi8gYShmdW5jdGlvbih1KSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaCh1KTtcbiAgICAgIH0sIFwiYmVnaW5cIiksXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyBhKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdSA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIHUgPiAwID8gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKSA6IHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICB9LCBcInBvcFN0YXRlXCIpLFxuICAgICAgLy8gcHJvZHVjZSB0aGUgbGV4ZXIgcnVsZSBzZXQgd2hpY2ggaXMgYWN0aXZlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGVcbiAgICAgIF9jdXJyZW50UnVsZXM6IC8qIEBfX1BVUkVfXyAqLyBhKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdID8gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXMgOiB0aGlzLmNvbmRpdGlvbnMuSU5JVElBTC5ydWxlcztcbiAgICAgIH0sIFwiX2N1cnJlbnRSdWxlc1wiKSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiAvKiBAX19QVVJFX18gKi8gYShmdW5jdGlvbih1KSB7XG4gICAgICAgIHJldHVybiB1ID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnModSB8fCAwKSwgdSA+PSAwID8gdGhpcy5jb25kaXRpb25TdGFja1t1XSA6IFwiSU5JVElBTFwiO1xuICAgICAgfSwgXCJ0b3BTdGF0ZVwiKSxcbiAgICAgIC8vIGFsaWFzIGZvciBiZWdpbihjb25kaXRpb24pXG4gICAgICBwdXNoU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyBhKGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgdGhpcy5iZWdpbih1KTtcbiAgICAgIH0sIFwicHVzaFN0YXRlXCIpLFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiAvKiBAX19QVVJFX18gKi8gYShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSwgXCJzdGF0ZVN0YWNrU2l6ZVwiKSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6ICEwIH0sXG4gICAgICBwZXJmb3JtQWN0aW9uOiAvKiBAX19QVVJFX18gKi8gYShmdW5jdGlvbih1LCB4LCBkLCB3KSB7XG4gICAgICAgIHN3aXRjaCAoZCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIDM0O1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIDM0O1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAzNDtcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gMTA7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwiYWNjX3RpdGxlXCIpLCAxOTtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBcImFjY190aXRsZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcImFjY19kZXNjclwiKSwgMjE7XG4gICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIFwiYWNjX2Rlc2NyX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKFwiYWNjX2Rlc2NyX211bHRpbGluZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJheGlzX2RhdGFcIiksIFwiWF9BWElTXCI7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcImF4aXNfZGF0YVwiKSwgXCJZX0FYSVNcIjtcbiAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwiYXhpc19iYW5kX2RhdGFcIiksIDI0O1xuICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICByZXR1cm4gMzE7XG4gICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcImRhdGFcIiksIDE2O1xuICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJkYXRhXCIpLCAxODtcbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwiZGF0YV9pbm5lclwiKSwgMjQ7XG4gICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgIHJldHVybiAyNztcbiAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgMjY7XG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgcmV0dXJuIFwiU1RSXCI7XG4gICAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICAgIHJldHVybiAyNDtcbiAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgcmV0dXJuIDI2O1xuICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICByZXR1cm4gNDM7XG4gICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIHJldHVybiBcIkNPTE9OXCI7XG4gICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIHJldHVybiA0NDtcbiAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgcmV0dXJuIDI4O1xuICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICByZXR1cm4gNDU7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIHJldHVybiA0NjtcbiAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgcmV0dXJuIDQ4O1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICByZXR1cm4gNTA7XG4gICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgIHJldHVybiA0NztcbiAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgcmV0dXJuIDQxO1xuICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICByZXR1cm4gNDk7XG4gICAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgIHJldHVybiAzNTtcbiAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgICB9XG4gICAgICB9LCBcImFub255bW91c1wiKSxcbiAgICAgIHJ1bGVzOiBbL14oPzolJSg/IVxceylbXlxcbl0qKS9pLCAvXig/OlteXFx9XSUlW15cXG5dKikvaSwgL14oPzooXFxyP1xcbikpL2ksIC9eKD86KFxccj9cXG4pKS9pLCAvXig/OltcXG5cXHJdKykvaSwgL14oPzolJVteXFxuXSopL2ksIC9eKD86dGl0bGVcXGIpL2ksIC9eKD86YWNjVGl0bGVcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqXFx7XFxzKikvaSwgL14oPzpcXHspL2ksIC9eKD86W15cXH1dKikvaSwgL14oPzp4eWNoYXJ0LWJldGFcXGIpL2ksIC9eKD86eHljaGFydFxcYikvaSwgL14oPzooPzp2ZXJ0aWNhbHxob3Jpem9udGFsKSkvaSwgL14oPzp4LWF4aXNcXGIpL2ksIC9eKD86eS1heGlzXFxiKS9pLCAvXig/OlxcWykvaSwgL14oPzotLT4pL2ksIC9eKD86bGluZVxcYikvaSwgL14oPzpiYXJcXGIpL2ksIC9eKD86XFxbKS9pLCAvXig/OlsrLV0/KD86XFxkKyg/OlxcLlxcZCspP3xcXC5cXGQrKSkvaSwgL14oPzpcXF0pL2ksIC9eKD86KD86YFxcKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxceyB0aGlzXFwucHVzaFN0YXRlXFwobWRfc3RyaW5nXFwpOyBcXH1cXG48bWRfc3RyaW5nPlxcKFxcPzpcXChcXD8hYFwiXFwpXFwuXFwpXFwrICAgICAgICAgICAgICAgICAgXFx7IHJldHVybiBNRF9TVFI7IFxcfVxcbjxtZF9zdHJpbmc+XFwoXFw/OmApKS9pLCAvXig/OltcIl0pL2ksIC9eKD86W1wiXSkvaSwgL14oPzpbXlwiXSopL2ksIC9eKD86XFxbKS9pLCAvXig/OlxcXSkvaSwgL14oPzpbQS1aYS16XSspL2ksIC9eKD86OikvaSwgL14oPzpcXCspL2ksIC9eKD86LCkvaSwgL14oPzo9KS9pLCAvXig/OlxcKikvaSwgL14oPzojKS9pLCAvXig/OltcXF9dKS9pLCAvXig/OlxcLikvaSwgL14oPzomKS9pLCAvXig/Oi0pL2ksIC9eKD86WzAtOV0rKS9pLCAvXig/OlxccyspL2ksIC9eKD86OykvaSwgL14oPzokKS9pXSxcbiAgICAgIGNvbmRpdGlvbnM6IHsgZGF0YV9pbm5lcjogeyBydWxlczogWzAsIDEsIDQsIDUsIDYsIDcsIDksIDExLCAxNCwgMTUsIDE2LCAxNywgMTgsIDIxLCAyMiwgMjQsIDI1LCAyNiwgMjcsIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA0Nl0sIGluY2x1c2l2ZTogITAgfSwgZGF0YTogeyBydWxlczogWzAsIDEsIDMsIDQsIDUsIDYsIDcsIDksIDExLCAxNCwgMTUsIDE2LCAxNywgMTgsIDIxLCAyMiwgMjMsIDI2LCAyNywgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2XSwgaW5jbHVzaXZlOiAhMCB9LCBheGlzX2JhbmRfZGF0YTogeyBydWxlczogWzAsIDEsIDQsIDUsIDYsIDcsIDksIDExLCAxNCwgMTUsIDE2LCAxNywgMTgsIDIxLCAyMiwgMjUsIDI2LCAyNywgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2XSwgaW5jbHVzaXZlOiAhMCB9LCBheGlzX2RhdGE6IHsgcnVsZXM6IFswLCAxLCAyLCA0LCA1LCA2LCA3LCA5LCAxMSwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjQsIDI2LCAyNywgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2XSwgaW5jbHVzaXZlOiAhMCB9LCBhY2NfZGVzY3JfbXVsdGlsaW5lOiB7IHJ1bGVzOiBbMTIsIDEzXSwgaW5jbHVzaXZlOiAhMSB9LCBhY2NfZGVzY3I6IHsgcnVsZXM6IFsxMF0sIGluY2x1c2l2ZTogITEgfSwgYWNjX3RpdGxlOiB7IHJ1bGVzOiBbOF0sIGluY2x1c2l2ZTogITEgfSwgdGl0bGU6IHsgcnVsZXM6IFtdLCBpbmNsdXNpdmU6ICExIH0sIG1kX3N0cmluZzogeyBydWxlczogW10sIGluY2x1c2l2ZTogITEgfSwgc3RyaW5nOiB7IHJ1bGVzOiBbMjgsIDI5XSwgaW5jbHVzaXZlOiAhMSB9LCBJTklUSUFMOiB7IHJ1bGVzOiBbMCwgMSwgNCwgNSwgNiwgNywgOSwgMTEsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMjEsIDIyLCAyNiwgMjcsIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA0Nl0sIGluY2x1c2l2ZTogITAgfSB9XG4gICAgfTtcbiAgICByZXR1cm4gRjtcbiAgfSkoKTtcbiAgJC5sZXhlciA9IEV0O1xuICBmdW5jdGlvbiBOKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICByZXR1cm4gYShOLCBcIlBhcnNlclwiKSwgTi5wcm90b3R5cGUgPSAkLCAkLlBhcnNlciA9IE4sIG5ldyBOKCk7XG59KSgpO1xuYnQucGFyc2VyID0gYnQ7XG52YXIgVGkgPSBidDtcbmZ1bmN0aW9uIEF0KGUpIHtcbiAgcmV0dXJuIGUudHlwZSA9PT0gXCJiYXJcIjtcbn1cbmEoQXQsIFwiaXNCYXJQbG90XCIpO1xuZnVuY3Rpb24gX3QoZSkge1xuICByZXR1cm4gZS50eXBlID09PSBcImJhbmRcIjtcbn1cbmEoX3QsIFwiaXNCYW5kQXhpc0RhdGFcIik7XG5mdW5jdGlvbiBHKGUpIHtcbiAgcmV0dXJuIGUudHlwZSA9PT0gXCJsaW5lYXJcIjtcbn1cbmEoRywgXCJpc0xpbmVhckF4aXNEYXRhXCIpO1xudmFyIGosIEh0ID0gKGogPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICB0aGlzLnBhcmVudEdyb3VwID0gdDtcbiAgfVxuICBnZXRNYXhEaW1lbnNpb24odCwgaSkge1xuICAgIGlmICghdGhpcy5wYXJlbnRHcm91cClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0LnJlZHVjZSgobywgZykgPT4gTWF0aC5tYXgoZy5sZW5ndGgsIG8pLCAwKSAqIGksXG4gICAgICAgIGhlaWdodDogaVxuICAgICAgfTtcbiAgICBjb25zdCBzID0ge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9LCBuID0gdGhpcy5wYXJlbnRHcm91cC5hcHBlbmQoXCJnXCIpLmF0dHIoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpLmF0dHIoXCJmb250LXNpemVcIiwgaSk7XG4gICAgZm9yIChjb25zdCBvIG9mIHQpIHtcbiAgICAgIGNvbnN0IGcgPSBTaShuLCAxLCBvKSwgbSA9IGcgPyBnLndpZHRoIDogby5sZW5ndGggKiBpLCBwID0gZyA/IGcuaGVpZ2h0IDogaTtcbiAgICAgIHMud2lkdGggPSBNYXRoLm1heChzLndpZHRoLCBtKSwgcy5oZWlnaHQgPSBNYXRoLm1heChzLmhlaWdodCwgcCk7XG4gICAgfVxuICAgIHJldHVybiBuLnJlbW92ZSgpLCBzO1xuICB9XG59LCBhKGosIFwiVGV4dERpbWVuc2lvbkNhbGN1bGF0b3JXaXRoRm9udFwiKSwgaiksIEZ0ID0gMC43LCBPdCA9IDAuMiwgUSwgVXQgPSAoUSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IodCwgaSwgcywgbikge1xuICAgIHRoaXMuYXhpc0NvbmZpZyA9IHQsIHRoaXMudGl0bGUgPSBpLCB0aGlzLnRleHREaW1lbnNpb25DYWxjdWxhdG9yID0gcywgdGhpcy5heGlzVGhlbWVDb25maWcgPSBuLCB0aGlzLmJvdW5kaW5nUmVjdCA9IHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9LCB0aGlzLmF4aXNQb3NpdGlvbiA9IFwibGVmdFwiLCB0aGlzLnNob3dUaXRsZSA9ICExLCB0aGlzLnNob3dMYWJlbCA9ICExLCB0aGlzLnNob3dUaWNrID0gITEsIHRoaXMuc2hvd0F4aXNMaW5lID0gITEsIHRoaXMub3V0ZXJQYWRkaW5nID0gMCwgdGhpcy50aXRsZVRleHRIZWlnaHQgPSAwLCB0aGlzLmxhYmVsVGV4dEhlaWdodCA9IDAsIHRoaXMucmFuZ2UgPSBbMCwgMTBdLCB0aGlzLmJvdW5kaW5nUmVjdCA9IHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9LCB0aGlzLmF4aXNQb3NpdGlvbiA9IFwibGVmdFwiO1xuICB9XG4gIHNldFJhbmdlKHQpIHtcbiAgICB0aGlzLnJhbmdlID0gdCwgdGhpcy5heGlzUG9zaXRpb24gPT09IFwibGVmdFwiIHx8IHRoaXMuYXhpc1Bvc2l0aW9uID09PSBcInJpZ2h0XCIgPyB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHQgPSB0WzFdIC0gdFswXSA6IHRoaXMuYm91bmRpbmdSZWN0LndpZHRoID0gdFsxXSAtIHRbMF0sIHRoaXMucmVjYWxjdWxhdGVTY2FsZSgpO1xuICB9XG4gIGdldFJhbmdlKCkge1xuICAgIHJldHVybiBbdGhpcy5yYW5nZVswXSArIHRoaXMub3V0ZXJQYWRkaW5nLCB0aGlzLnJhbmdlWzFdIC0gdGhpcy5vdXRlclBhZGRpbmddO1xuICB9XG4gIHNldEF4aXNQb3NpdGlvbih0KSB7XG4gICAgdGhpcy5heGlzUG9zaXRpb24gPSB0LCB0aGlzLnNldFJhbmdlKHRoaXMucmFuZ2UpO1xuICB9XG4gIGdldFRpY2tEaXN0YW5jZSgpIHtcbiAgICBjb25zdCB0ID0gdGhpcy5nZXRSYW5nZSgpO1xuICAgIHJldHVybiBNYXRoLmFicyh0WzBdIC0gdFsxXSkgLyB0aGlzLmdldFRpY2tWYWx1ZXMoKS5sZW5ndGg7XG4gIH1cbiAgZ2V0QXhpc091dGVyUGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRlclBhZGRpbmc7XG4gIH1cbiAgZ2V0TGFiZWxEaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dERpbWVuc2lvbkNhbGN1bGF0b3IuZ2V0TWF4RGltZW5zaW9uKFxuICAgICAgdGhpcy5nZXRUaWNrVmFsdWVzKCkubWFwKCh0KSA9PiB0LnRvU3RyaW5nKCkpLFxuICAgICAgdGhpcy5heGlzQ29uZmlnLmxhYmVsRm9udFNpemVcbiAgICApO1xuICB9XG4gIHJlY2FsY3VsYXRlT3V0ZXJQYWRkaW5nVG9EcmF3QmFyKCkge1xuICAgIEZ0ICogdGhpcy5nZXRUaWNrRGlzdGFuY2UoKSA+IHRoaXMub3V0ZXJQYWRkaW5nICogMiAmJiAodGhpcy5vdXRlclBhZGRpbmcgPSBNYXRoLmZsb29yKEZ0ICogdGhpcy5nZXRUaWNrRGlzdGFuY2UoKSAvIDIpKSwgdGhpcy5yZWNhbGN1bGF0ZVNjYWxlKCk7XG4gIH1cbiAgY2FsY3VsYXRlU3BhY2VJZkRyYXduSG9yaXpvbnRhbGx5KHQpIHtcbiAgICBsZXQgaSA9IHQuaGVpZ2h0O1xuICAgIGlmICh0aGlzLmF4aXNDb25maWcuc2hvd0F4aXNMaW5lICYmIGkgPiB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aCAmJiAoaSAtPSB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aCwgdGhpcy5zaG93QXhpc0xpbmUgPSAhMCksIHRoaXMuYXhpc0NvbmZpZy5zaG93TGFiZWwpIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzLmdldExhYmVsRGltZW5zaW9uKCksIG4gPSBPdCAqIHQud2lkdGg7XG4gICAgICB0aGlzLm91dGVyUGFkZGluZyA9IE1hdGgubWluKHMud2lkdGggLyAyLCBuKTtcbiAgICAgIGNvbnN0IG8gPSBzLmhlaWdodCArIHRoaXMuYXhpc0NvbmZpZy5sYWJlbFBhZGRpbmcgKiAyO1xuICAgICAgdGhpcy5sYWJlbFRleHRIZWlnaHQgPSBzLmhlaWdodCwgbyA8PSBpICYmIChpIC09IG8sIHRoaXMuc2hvd0xhYmVsID0gITApO1xuICAgIH1cbiAgICBpZiAodGhpcy5heGlzQ29uZmlnLnNob3dUaWNrICYmIGkgPj0gdGhpcy5heGlzQ29uZmlnLnRpY2tMZW5ndGggJiYgKHRoaXMuc2hvd1RpY2sgPSAhMCwgaSAtPSB0aGlzLmF4aXNDb25maWcudGlja0xlbmd0aCksIHRoaXMuYXhpc0NvbmZpZy5zaG93VGl0bGUgJiYgdGhpcy50aXRsZSkge1xuICAgICAgY29uc3QgcyA9IHRoaXMudGV4dERpbWVuc2lvbkNhbGN1bGF0b3IuZ2V0TWF4RGltZW5zaW9uKFxuICAgICAgICBbdGhpcy50aXRsZV0sXG4gICAgICAgIHRoaXMuYXhpc0NvbmZpZy50aXRsZUZvbnRTaXplXG4gICAgICApLCBuID0gcy5oZWlnaHQgKyB0aGlzLmF4aXNDb25maWcudGl0bGVQYWRkaW5nICogMjtcbiAgICAgIHRoaXMudGl0bGVUZXh0SGVpZ2h0ID0gcy5oZWlnaHQsIG4gPD0gaSAmJiAoaSAtPSBuLCB0aGlzLnNob3dUaXRsZSA9ICEwKTtcbiAgICB9XG4gICAgdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGggPSB0LndpZHRoLCB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHQgPSB0LmhlaWdodCAtIGk7XG4gIH1cbiAgY2FsY3VsYXRlU3BhY2VJZkRyYXduVmVydGljYWwodCkge1xuICAgIGxldCBpID0gdC53aWR0aDtcbiAgICBpZiAodGhpcy5heGlzQ29uZmlnLnNob3dBeGlzTGluZSAmJiBpID4gdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGggJiYgKGkgLT0gdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGgsIHRoaXMuc2hvd0F4aXNMaW5lID0gITApLCB0aGlzLmF4aXNDb25maWcuc2hvd0xhYmVsKSB7XG4gICAgICBjb25zdCBzID0gdGhpcy5nZXRMYWJlbERpbWVuc2lvbigpLCBuID0gT3QgKiB0LmhlaWdodDtcbiAgICAgIHRoaXMub3V0ZXJQYWRkaW5nID0gTWF0aC5taW4ocy5oZWlnaHQgLyAyLCBuKTtcbiAgICAgIGNvbnN0IG8gPSBzLndpZHRoICsgdGhpcy5heGlzQ29uZmlnLmxhYmVsUGFkZGluZyAqIDI7XG4gICAgICBvIDw9IGkgJiYgKGkgLT0gbywgdGhpcy5zaG93TGFiZWwgPSAhMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmF4aXNDb25maWcuc2hvd1RpY2sgJiYgaSA+PSB0aGlzLmF4aXNDb25maWcudGlja0xlbmd0aCAmJiAodGhpcy5zaG93VGljayA9ICEwLCBpIC09IHRoaXMuYXhpc0NvbmZpZy50aWNrTGVuZ3RoKSwgdGhpcy5heGlzQ29uZmlnLnNob3dUaXRsZSAmJiB0aGlzLnRpdGxlKSB7XG4gICAgICBjb25zdCBzID0gdGhpcy50ZXh0RGltZW5zaW9uQ2FsY3VsYXRvci5nZXRNYXhEaW1lbnNpb24oXG4gICAgICAgIFt0aGlzLnRpdGxlXSxcbiAgICAgICAgdGhpcy5heGlzQ29uZmlnLnRpdGxlRm9udFNpemVcbiAgICAgICksIG4gPSBzLmhlaWdodCArIHRoaXMuYXhpc0NvbmZpZy50aXRsZVBhZGRpbmcgKiAyO1xuICAgICAgdGhpcy50aXRsZVRleHRIZWlnaHQgPSBzLmhlaWdodCwgbiA8PSBpICYmIChpIC09IG4sIHRoaXMuc2hvd1RpdGxlID0gITApO1xuICAgIH1cbiAgICB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aCA9IHQud2lkdGggLSBpLCB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHQgPSB0LmhlaWdodDtcbiAgfVxuICBjYWxjdWxhdGVTcGFjZSh0KSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpc1Bvc2l0aW9uID09PSBcImxlZnRcIiB8fCB0aGlzLmF4aXNQb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gdGhpcy5jYWxjdWxhdGVTcGFjZUlmRHJhd25WZXJ0aWNhbCh0KSA6IHRoaXMuY2FsY3VsYXRlU3BhY2VJZkRyYXduSG9yaXpvbnRhbGx5KHQpLCB0aGlzLnJlY2FsY3VsYXRlU2NhbGUoKSwge1xuICAgICAgd2lkdGg6IHRoaXMuYm91bmRpbmdSZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG4gIHNldEJvdW5kaW5nQm94WFkodCkge1xuICAgIHRoaXMuYm91bmRpbmdSZWN0LnggPSB0LngsIHRoaXMuYm91bmRpbmdSZWN0LnkgPSB0Lnk7XG4gIH1cbiAgZ2V0RHJhd2FibGVFbGVtZW50c0ZvckxlZnRBeGlzKCkge1xuICAgIGNvbnN0IHQgPSBbXTtcbiAgICBpZiAodGhpcy5zaG93QXhpc0xpbmUpIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLmJvdW5kaW5nUmVjdC54ICsgdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGggLSB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aCAvIDI7XG4gICAgICB0LnB1c2goe1xuICAgICAgICB0eXBlOiBcInBhdGhcIixcbiAgICAgICAgZ3JvdXBUZXh0czogW1wibGVmdC1heGlzXCIsIFwiYXhpc2wtbGluZVwiXSxcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IGBNICR7aX0sJHt0aGlzLmJvdW5kaW5nUmVjdC55fSBMICR7aX0sJHt0aGlzLmJvdW5kaW5nUmVjdC55ICsgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0fSBgLFxuICAgICAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcuYXhpc0xpbmVDb2xvcixcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dMYWJlbCAmJiB0LnB1c2goe1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBncm91cFRleHRzOiBbXCJsZWZ0LWF4aXNcIiwgXCJsYWJlbFwiXSxcbiAgICAgIGRhdGE6IHRoaXMuZ2V0VGlja1ZhbHVlcygpLm1hcCgoaSkgPT4gKHtcbiAgICAgICAgdGV4dDogaS50b1N0cmluZygpLFxuICAgICAgICB4OiB0aGlzLmJvdW5kaW5nUmVjdC54ICsgdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGggLSAodGhpcy5zaG93TGFiZWwgPyB0aGlzLmF4aXNDb25maWcubGFiZWxQYWRkaW5nIDogMCkgLSAodGhpcy5zaG93VGljayA/IHRoaXMuYXhpc0NvbmZpZy50aWNrTGVuZ3RoIDogMCkgLSAodGhpcy5zaG93QXhpc0xpbmUgPyB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aCA6IDApLFxuICAgICAgICB5OiB0aGlzLmdldFNjYWxlVmFsdWUoaSksXG4gICAgICAgIGZpbGw6IHRoaXMuYXhpc1RoZW1lQ29uZmlnLmxhYmVsQ29sb3IsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmF4aXNDb25maWcubGFiZWxGb250U2l6ZSxcbiAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgIHZlcnRpY2FsUG9zOiBcIm1pZGRsZVwiLFxuICAgICAgICBob3Jpem9udGFsUG9zOiBcInJpZ2h0XCJcbiAgICAgIH0pKVxuICAgIH0pLCB0aGlzLnNob3dUaWNrKSB7XG4gICAgICBjb25zdCBpID0gdGhpcy5ib3VuZGluZ1JlY3QueCArIHRoaXMuYm91bmRpbmdSZWN0LndpZHRoIC0gKHRoaXMuc2hvd0F4aXNMaW5lID8gdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGggOiAwKTtcbiAgICAgIHQucHVzaCh7XG4gICAgICAgIHR5cGU6IFwicGF0aFwiLFxuICAgICAgICBncm91cFRleHRzOiBbXCJsZWZ0LWF4aXNcIiwgXCJ0aWNrc1wiXSxcbiAgICAgICAgZGF0YTogdGhpcy5nZXRUaWNrVmFsdWVzKCkubWFwKChzKSA9PiAoe1xuICAgICAgICAgIHBhdGg6IGBNICR7aX0sJHt0aGlzLmdldFNjYWxlVmFsdWUocyl9IEwgJHtpIC0gdGhpcy5heGlzQ29uZmlnLnRpY2tMZW5ndGh9LCR7dGhpcy5nZXRTY2FsZVZhbHVlKHMpfWAsXG4gICAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcudGlja0NvbG9yLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmF4aXNDb25maWcudGlja1dpZHRoXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNob3dUaXRsZSAmJiB0LnB1c2goe1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBncm91cFRleHRzOiBbXCJsZWZ0LWF4aXNcIiwgXCJ0aXRsZVwiXSxcbiAgICAgIGRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IHRoaXMudGl0bGUsXG4gICAgICAgICAgeDogdGhpcy5ib3VuZGluZ1JlY3QueCArIHRoaXMuYXhpc0NvbmZpZy50aXRsZVBhZGRpbmcsXG4gICAgICAgICAgeTogdGhpcy5ib3VuZGluZ1JlY3QueSArIHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodCAvIDIsXG4gICAgICAgICAgZmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcudGl0bGVDb2xvcixcbiAgICAgICAgICBmb250U2l6ZTogdGhpcy5heGlzQ29uZmlnLnRpdGxlRm9udFNpemUsXG4gICAgICAgICAgcm90YXRpb246IDI3MCxcbiAgICAgICAgICB2ZXJ0aWNhbFBvczogXCJ0b3BcIixcbiAgICAgICAgICBob3Jpem9udGFsUG9zOiBcImNlbnRlclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KSwgdDtcbiAgfVxuICBnZXREcmF3YWJsZUVsZW1lbnRzRm9yQm90dG9tQXhpcygpIHtcbiAgICBjb25zdCB0ID0gW107XG4gICAgaWYgKHRoaXMuc2hvd0F4aXNMaW5lKSB7XG4gICAgICBjb25zdCBpID0gdGhpcy5ib3VuZGluZ1JlY3QueSArIHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoIC8gMjtcbiAgICAgIHQucHVzaCh7XG4gICAgICAgIHR5cGU6IFwicGF0aFwiLFxuICAgICAgICBncm91cFRleHRzOiBbXCJib3R0b20tYXhpc1wiLCBcImF4aXMtbGluZVwiXSxcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IGBNICR7dGhpcy5ib3VuZGluZ1JlY3QueH0sJHtpfSBMICR7dGhpcy5ib3VuZGluZ1JlY3QueCArIHRoaXMuYm91bmRpbmdSZWN0LndpZHRofSwke2l9YCxcbiAgICAgICAgICAgIHN0cm9rZUZpbGw6IHRoaXMuYXhpc1RoZW1lQ29uZmlnLmF4aXNMaW5lQ29sb3IsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGhcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG93TGFiZWwgJiYgdC5wdXNoKHtcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZ3JvdXBUZXh0czogW1wiYm90dG9tLWF4aXNcIiwgXCJsYWJlbFwiXSxcbiAgICAgIGRhdGE6IHRoaXMuZ2V0VGlja1ZhbHVlcygpLm1hcCgoaSkgPT4gKHtcbiAgICAgICAgdGV4dDogaS50b1N0cmluZygpLFxuICAgICAgICB4OiB0aGlzLmdldFNjYWxlVmFsdWUoaSksXG4gICAgICAgIHk6IHRoaXMuYm91bmRpbmdSZWN0LnkgKyB0aGlzLmF4aXNDb25maWcubGFiZWxQYWRkaW5nICsgKHRoaXMuc2hvd1RpY2sgPyB0aGlzLmF4aXNDb25maWcudGlja0xlbmd0aCA6IDApICsgKHRoaXMuc2hvd0F4aXNMaW5lID8gdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGggOiAwKSxcbiAgICAgICAgZmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcubGFiZWxDb2xvcixcbiAgICAgICAgZm9udFNpemU6IHRoaXMuYXhpc0NvbmZpZy5sYWJlbEZvbnRTaXplLFxuICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgdmVydGljYWxQb3M6IFwidG9wXCIsXG4gICAgICAgIGhvcml6b250YWxQb3M6IFwiY2VudGVyXCJcbiAgICAgIH0pKVxuICAgIH0pLCB0aGlzLnNob3dUaWNrKSB7XG4gICAgICBjb25zdCBpID0gdGhpcy5ib3VuZGluZ1JlY3QueSArICh0aGlzLnNob3dBeGlzTGluZSA/IHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoIDogMCk7XG4gICAgICB0LnB1c2goe1xuICAgICAgICB0eXBlOiBcInBhdGhcIixcbiAgICAgICAgZ3JvdXBUZXh0czogW1wiYm90dG9tLWF4aXNcIiwgXCJ0aWNrc1wiXSxcbiAgICAgICAgZGF0YTogdGhpcy5nZXRUaWNrVmFsdWVzKCkubWFwKChzKSA9PiAoe1xuICAgICAgICAgIHBhdGg6IGBNICR7dGhpcy5nZXRTY2FsZVZhbHVlKHMpfSwke2l9IEwgJHt0aGlzLmdldFNjYWxlVmFsdWUocyl9LCR7aSArIHRoaXMuYXhpc0NvbmZpZy50aWNrTGVuZ3RofWAsXG4gICAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcudGlja0NvbG9yLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmF4aXNDb25maWcudGlja1dpZHRoXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNob3dUaXRsZSAmJiB0LnB1c2goe1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBncm91cFRleHRzOiBbXCJib3R0b20tYXhpc1wiLCBcInRpdGxlXCJdLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogdGhpcy50aXRsZSxcbiAgICAgICAgICB4OiB0aGlzLnJhbmdlWzBdICsgKHRoaXMucmFuZ2VbMV0gLSB0aGlzLnJhbmdlWzBdKSAvIDIsXG4gICAgICAgICAgeTogdGhpcy5ib3VuZGluZ1JlY3QueSArIHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodCAtIHRoaXMuYXhpc0NvbmZpZy50aXRsZVBhZGRpbmcgLSB0aGlzLnRpdGxlVGV4dEhlaWdodCxcbiAgICAgICAgICBmaWxsOiB0aGlzLmF4aXNUaGVtZUNvbmZpZy50aXRsZUNvbG9yLFxuICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmF4aXNDb25maWcudGl0bGVGb250U2l6ZSxcbiAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICB2ZXJ0aWNhbFBvczogXCJ0b3BcIixcbiAgICAgICAgICBob3Jpem9udGFsUG9zOiBcImNlbnRlclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KSwgdDtcbiAgfVxuICBnZXREcmF3YWJsZUVsZW1lbnRzRm9yVG9wQXhpcygpIHtcbiAgICBjb25zdCB0ID0gW107XG4gICAgaWYgKHRoaXMuc2hvd0F4aXNMaW5lKSB7XG4gICAgICBjb25zdCBpID0gdGhpcy5ib3VuZGluZ1JlY3QueSArIHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodCAtIHRoaXMuYXhpc0NvbmZpZy5heGlzTGluZVdpZHRoIC8gMjtcbiAgICAgIHQucHVzaCh7XG4gICAgICAgIHR5cGU6IFwicGF0aFwiLFxuICAgICAgICBncm91cFRleHRzOiBbXCJ0b3AtYXhpc1wiLCBcImF4aXMtbGluZVwiXSxcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IGBNICR7dGhpcy5ib3VuZGluZ1JlY3QueH0sJHtpfSBMICR7dGhpcy5ib3VuZGluZ1JlY3QueCArIHRoaXMuYm91bmRpbmdSZWN0LndpZHRofSwke2l9YCxcbiAgICAgICAgICAgIHN0cm9rZUZpbGw6IHRoaXMuYXhpc1RoZW1lQ29uZmlnLmF4aXNMaW5lQ29sb3IsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGhcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG93TGFiZWwgJiYgdC5wdXNoKHtcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZ3JvdXBUZXh0czogW1widG9wLWF4aXNcIiwgXCJsYWJlbFwiXSxcbiAgICAgIGRhdGE6IHRoaXMuZ2V0VGlja1ZhbHVlcygpLm1hcCgoaSkgPT4gKHtcbiAgICAgICAgdGV4dDogaS50b1N0cmluZygpLFxuICAgICAgICB4OiB0aGlzLmdldFNjYWxlVmFsdWUoaSksXG4gICAgICAgIHk6IHRoaXMuYm91bmRpbmdSZWN0LnkgKyAodGhpcy5zaG93VGl0bGUgPyB0aGlzLnRpdGxlVGV4dEhlaWdodCArIHRoaXMuYXhpc0NvbmZpZy50aXRsZVBhZGRpbmcgKiAyIDogMCkgKyB0aGlzLmF4aXNDb25maWcubGFiZWxQYWRkaW5nLFxuICAgICAgICBmaWxsOiB0aGlzLmF4aXNUaGVtZUNvbmZpZy5sYWJlbENvbG9yLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5heGlzQ29uZmlnLmxhYmVsRm9udFNpemUsXG4gICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICB2ZXJ0aWNhbFBvczogXCJ0b3BcIixcbiAgICAgICAgaG9yaXpvbnRhbFBvczogXCJjZW50ZXJcIlxuICAgICAgfSkpXG4gICAgfSksIHRoaXMuc2hvd1RpY2spIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLmJvdW5kaW5nUmVjdC55O1xuICAgICAgdC5wdXNoKHtcbiAgICAgICAgdHlwZTogXCJwYXRoXCIsXG4gICAgICAgIGdyb3VwVGV4dHM6IFtcInRvcC1heGlzXCIsIFwidGlja3NcIl0sXG4gICAgICAgIGRhdGE6IHRoaXMuZ2V0VGlja1ZhbHVlcygpLm1hcCgocykgPT4gKHtcbiAgICAgICAgICBwYXRoOiBgTSAke3RoaXMuZ2V0U2NhbGVWYWx1ZShzKX0sJHtpICsgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0IC0gKHRoaXMuc2hvd0F4aXNMaW5lID8gdGhpcy5heGlzQ29uZmlnLmF4aXNMaW5lV2lkdGggOiAwKX0gTCAke3RoaXMuZ2V0U2NhbGVWYWx1ZShzKX0sJHtpICsgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy5heGlzQ29uZmlnLnRpY2tMZW5ndGggLSAodGhpcy5zaG93QXhpc0xpbmUgPyB0aGlzLmF4aXNDb25maWcuYXhpc0xpbmVXaWR0aCA6IDApfWAsXG4gICAgICAgICAgc3Ryb2tlRmlsbDogdGhpcy5heGlzVGhlbWVDb25maWcudGlja0NvbG9yLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmF4aXNDb25maWcudGlja1dpZHRoXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNob3dUaXRsZSAmJiB0LnB1c2goe1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBncm91cFRleHRzOiBbXCJ0b3AtYXhpc1wiLCBcInRpdGxlXCJdLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogdGhpcy50aXRsZSxcbiAgICAgICAgICB4OiB0aGlzLmJvdW5kaW5nUmVjdC54ICsgdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGggLyAyLFxuICAgICAgICAgIHk6IHRoaXMuYm91bmRpbmdSZWN0LnkgKyB0aGlzLmF4aXNDb25maWcudGl0bGVQYWRkaW5nLFxuICAgICAgICAgIGZpbGw6IHRoaXMuYXhpc1RoZW1lQ29uZmlnLnRpdGxlQ29sb3IsXG4gICAgICAgICAgZm9udFNpemU6IHRoaXMuYXhpc0NvbmZpZy50aXRsZUZvbnRTaXplLFxuICAgICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICAgIHZlcnRpY2FsUG9zOiBcInRvcFwiLFxuICAgICAgICAgIGhvcml6b250YWxQb3M6IFwiY2VudGVyXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pLCB0O1xuICB9XG4gIGdldERyYXdhYmxlRWxlbWVudHMoKSB7XG4gICAgaWYgKHRoaXMuYXhpc1Bvc2l0aW9uID09PSBcImxlZnRcIilcbiAgICAgIHJldHVybiB0aGlzLmdldERyYXdhYmxlRWxlbWVudHNGb3JMZWZ0QXhpcygpO1xuICAgIGlmICh0aGlzLmF4aXNQb3NpdGlvbiA9PT0gXCJyaWdodFwiKVxuICAgICAgdGhyb3cgRXJyb3IoXCJEcmF3aW5nIG9mIHJpZ2h0IGF4aXMgaXMgbm90IGltcGxlbWVudGVkXCIpO1xuICAgIHJldHVybiB0aGlzLmF4aXNQb3NpdGlvbiA9PT0gXCJib3R0b21cIiA/IHRoaXMuZ2V0RHJhd2FibGVFbGVtZW50c0ZvckJvdHRvbUF4aXMoKSA6IHRoaXMuYXhpc1Bvc2l0aW9uID09PSBcInRvcFwiID8gdGhpcy5nZXREcmF3YWJsZUVsZW1lbnRzRm9yVG9wQXhpcygpIDogW107XG4gIH1cbn0sIGEoUSwgXCJCYXNlQXhpc1wiKSwgUSksIEssIERpID0gKEsgPSBjbGFzcyBleHRlbmRzIFV0IHtcbiAgY29uc3RydWN0b3IodCwgaSwgcywgbiwgbykge1xuICAgIHN1cGVyKHQsIG4sIG8sIGkpLCB0aGlzLmNhdGVnb3JpZXMgPSBzLCB0aGlzLnNjYWxlID0geXQoKS5kb21haW4odGhpcy5jYXRlZ29yaWVzKS5yYW5nZSh0aGlzLmdldFJhbmdlKCkpO1xuICB9XG4gIHNldFJhbmdlKHQpIHtcbiAgICBzdXBlci5zZXRSYW5nZSh0KTtcbiAgfVxuICByZWNhbGN1bGF0ZVNjYWxlKCkge1xuICAgIHRoaXMuc2NhbGUgPSB5dCgpLmRvbWFpbih0aGlzLmNhdGVnb3JpZXMpLnJhbmdlKHRoaXMuZ2V0UmFuZ2UoKSkucGFkZGluZ0lubmVyKDEpLnBhZGRpbmdPdXRlcigwKS5hbGlnbigwLjUpLCBOdC50cmFjZShcIkJhbmRBeGlzIGF4aXMgZmluYWwgY2F0ZWdvcmllcywgcmFuZ2U6IFwiLCB0aGlzLmNhdGVnb3JpZXMsIHRoaXMuZ2V0UmFuZ2UoKSk7XG4gIH1cbiAgZ2V0VGlja1ZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzO1xuICB9XG4gIGdldFNjYWxlVmFsdWUodCkge1xuICAgIHJldHVybiB0aGlzLnNjYWxlKHQpID8/IHRoaXMuZ2V0UmFuZ2UoKVswXTtcbiAgfVxufSwgYShLLCBcIkJhbmRBeGlzXCIpLCBLKSwgWiwgdmkgPSAoWiA9IGNsYXNzIGV4dGVuZHMgVXQge1xuICBjb25zdHJ1Y3Rvcih0LCBpLCBzLCBuLCBvKSB7XG4gICAgc3VwZXIodCwgbiwgbywgaSksIHRoaXMuZG9tYWluID0gcywgdGhpcy5zY2FsZSA9IHp0KCkuZG9tYWluKHRoaXMuZG9tYWluKS5yYW5nZSh0aGlzLmdldFJhbmdlKCkpO1xuICB9XG4gIGdldFRpY2tWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUudGlja3MoKTtcbiAgfVxuICByZWNhbGN1bGF0ZVNjYWxlKCkge1xuICAgIGNvbnN0IHQgPSBbLi4udGhpcy5kb21haW5dO1xuICAgIHRoaXMuYXhpc1Bvc2l0aW9uID09PSBcImxlZnRcIiAmJiB0LnJldmVyc2UoKSwgdGhpcy5zY2FsZSA9IHp0KCkuZG9tYWluKHQpLnJhbmdlKHRoaXMuZ2V0UmFuZ2UoKSk7XG4gIH1cbiAgZ2V0U2NhbGVWYWx1ZSh0KSB7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUodCk7XG4gIH1cbn0sIGEoWiwgXCJMaW5lYXJBeGlzXCIpLCBaKTtcbmZ1bmN0aW9uIHd0KGUsIHQsIGksIHMpIHtcbiAgY29uc3QgbiA9IG5ldyBIdChzKTtcbiAgcmV0dXJuIF90KGUpID8gbmV3IERpKFxuICAgIHQsXG4gICAgaSxcbiAgICBlLmNhdGVnb3JpZXMsXG4gICAgZS50aXRsZSxcbiAgICBuXG4gICkgOiBuZXcgdmkoXG4gICAgdCxcbiAgICBpLFxuICAgIFtlLm1pbiwgZS5tYXhdLFxuICAgIGUudGl0bGUsXG4gICAgblxuICApO1xufVxuYSh3dCwgXCJnZXRBeGlzXCIpO1xudmFyIEosIFBpID0gKEogPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHQsIGksIHMsIG4pIHtcbiAgICB0aGlzLnRleHREaW1lbnNpb25DYWxjdWxhdG9yID0gdCwgdGhpcy5jaGFydENvbmZpZyA9IGksIHRoaXMuY2hhcnREYXRhID0gcywgdGhpcy5jaGFydFRoZW1lQ29uZmlnID0gbiwgdGhpcy5ib3VuZGluZ1JlY3QgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfSwgdGhpcy5zaG93Q2hhcnRUaXRsZSA9ICExO1xuICB9XG4gIHNldEJvdW5kaW5nQm94WFkodCkge1xuICAgIHRoaXMuYm91bmRpbmdSZWN0LnggPSB0LngsIHRoaXMuYm91bmRpbmdSZWN0LnkgPSB0Lnk7XG4gIH1cbiAgY2FsY3VsYXRlU3BhY2UodCkge1xuICAgIGNvbnN0IGkgPSB0aGlzLnRleHREaW1lbnNpb25DYWxjdWxhdG9yLmdldE1heERpbWVuc2lvbihcbiAgICAgIFt0aGlzLmNoYXJ0RGF0YS50aXRsZV0sXG4gICAgICB0aGlzLmNoYXJ0Q29uZmlnLnRpdGxlRm9udFNpemVcbiAgICApLCBzID0gTWF0aC5tYXgoaS53aWR0aCwgdC53aWR0aCksIG4gPSBpLmhlaWdodCArIDIgKiB0aGlzLmNoYXJ0Q29uZmlnLnRpdGxlUGFkZGluZztcbiAgICByZXR1cm4gaS53aWR0aCA8PSBzICYmIGkuaGVpZ2h0IDw9IG4gJiYgdGhpcy5jaGFydENvbmZpZy5zaG93VGl0bGUgJiYgdGhpcy5jaGFydERhdGEudGl0bGUgJiYgKHRoaXMuYm91bmRpbmdSZWN0LndpZHRoID0gcywgdGhpcy5ib3VuZGluZ1JlY3QuaGVpZ2h0ID0gbiwgdGhpcy5zaG93Q2hhcnRUaXRsZSA9ICEwKSwge1xuICAgICAgd2lkdGg6IHRoaXMuYm91bmRpbmdSZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG4gIGdldERyYXdhYmxlRWxlbWVudHMoKSB7XG4gICAgY29uc3QgdCA9IFtdO1xuICAgIHJldHVybiB0aGlzLnNob3dDaGFydFRpdGxlICYmIHQucHVzaCh7XG4gICAgICBncm91cFRleHRzOiBbXCJjaGFydC10aXRsZVwiXSxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgZm9udFNpemU6IHRoaXMuY2hhcnRDb25maWcudGl0bGVGb250U2l6ZSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLmNoYXJ0RGF0YS50aXRsZSxcbiAgICAgICAgICB2ZXJ0aWNhbFBvczogXCJtaWRkbGVcIixcbiAgICAgICAgICBob3Jpem9udGFsUG9zOiBcImNlbnRlclwiLFxuICAgICAgICAgIHg6IHRoaXMuYm91bmRpbmdSZWN0LnggKyB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aCAvIDIsXG4gICAgICAgICAgeTogdGhpcy5ib3VuZGluZ1JlY3QueSArIHRoaXMuYm91bmRpbmdSZWN0LmhlaWdodCAvIDIsXG4gICAgICAgICAgZmlsbDogdGhpcy5jaGFydFRoZW1lQ29uZmlnLnRpdGxlQ29sb3IsXG4gICAgICAgICAgcm90YXRpb246IDBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pLCB0O1xuICB9XG59LCBhKEosIFwiQ2hhcnRUaXRsZVwiKSwgSik7XG5mdW5jdGlvbiAkdChlLCB0LCBpLCBzKSB7XG4gIGNvbnN0IG4gPSBuZXcgSHQocyk7XG4gIHJldHVybiBuZXcgUGkobiwgZSwgdCwgaSk7XG59XG5hKCR0LCBcImdldENoYXJ0VGl0bGVDb21wb25lbnRcIik7XG52YXIgdHQsIExpID0gKHR0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih0LCBpLCBzLCBuLCBvKSB7XG4gICAgdGhpcy5wbG90RGF0YSA9IHQsIHRoaXMueEF4aXMgPSBpLCB0aGlzLnlBeGlzID0gcywgdGhpcy5vcmllbnRhdGlvbiA9IG4sIHRoaXMucGxvdEluZGV4ID0gbztcbiAgfVxuICBnZXREcmF3YWJsZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgdCA9IHRoaXMucGxvdERhdGEuZGF0YS5tYXAoKHMpID0+IFtcbiAgICAgIHRoaXMueEF4aXMuZ2V0U2NhbGVWYWx1ZShzWzBdKSxcbiAgICAgIHRoaXMueUF4aXMuZ2V0U2NhbGVWYWx1ZShzWzFdKVxuICAgIF0pO1xuICAgIGxldCBpO1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGkgPSBXdCgpLnkoKHMpID0+IHNbMF0pLngoKHMpID0+IHNbMV0pKHQpIDogaSA9IFd0KCkueCgocykgPT4gc1swXSkueSgocykgPT4gc1sxXSkodCksIGkgPyBbXG4gICAgICB7XG4gICAgICAgIGdyb3VwVGV4dHM6IFtcInBsb3RcIiwgYGxpbmUtcGxvdC0ke3RoaXMucGxvdEluZGV4fWBdLFxuICAgICAgICB0eXBlOiBcInBhdGhcIixcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IGksXG4gICAgICAgICAgICBzdHJva2VGaWxsOiB0aGlzLnBsb3REYXRhLnN0cm9rZUZpbGwsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5wbG90RGF0YS5zdHJva2VXaWR0aFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0gOiBbXTtcbiAgfVxufSwgYSh0dCwgXCJMaW5lUGxvdFwiKSwgdHQpLCBpdCwgRWkgPSAoaXQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHQsIGksIHMsIG4sIG8sIGcpIHtcbiAgICB0aGlzLmJhckRhdGEgPSB0LCB0aGlzLmJvdW5kaW5nUmVjdCA9IGksIHRoaXMueEF4aXMgPSBzLCB0aGlzLnlBeGlzID0gbiwgdGhpcy5vcmllbnRhdGlvbiA9IG8sIHRoaXMucGxvdEluZGV4ID0gZztcbiAgfVxuICBnZXREcmF3YWJsZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgdCA9IHRoaXMuYmFyRGF0YS5kYXRhLm1hcCgobykgPT4gW1xuICAgICAgdGhpcy54QXhpcy5nZXRTY2FsZVZhbHVlKG9bMF0pLFxuICAgICAgdGhpcy55QXhpcy5nZXRTY2FsZVZhbHVlKG9bMV0pXG4gICAgXSksIHMgPSBNYXRoLm1pbih0aGlzLnhBeGlzLmdldEF4aXNPdXRlclBhZGRpbmcoKSAqIDIsIHRoaXMueEF4aXMuZ2V0VGlja0Rpc3RhbmNlKCkpICogKDEgLSAwLjA1KSwgbiA9IHMgLyAyO1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFtcbiAgICAgIHtcbiAgICAgICAgZ3JvdXBUZXh0czogW1wicGxvdFwiLCBgYmFyLXBsb3QtJHt0aGlzLnBsb3RJbmRleH1gXSxcbiAgICAgICAgdHlwZTogXCJyZWN0XCIsXG4gICAgICAgIGRhdGE6IHQubWFwKChvKSA9PiAoe1xuICAgICAgICAgIHg6IHRoaXMuYm91bmRpbmdSZWN0LngsXG4gICAgICAgICAgeTogb1swXSAtIG4sXG4gICAgICAgICAgaGVpZ2h0OiBzLFxuICAgICAgICAgIHdpZHRoOiBvWzFdIC0gdGhpcy5ib3VuZGluZ1JlY3QueCxcbiAgICAgICAgICBmaWxsOiB0aGlzLmJhckRhdGEuZmlsbCxcbiAgICAgICAgICBzdHJva2VXaWR0aDogMCxcbiAgICAgICAgICBzdHJva2VGaWxsOiB0aGlzLmJhckRhdGEuZmlsbFxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICBdIDogW1xuICAgICAge1xuICAgICAgICBncm91cFRleHRzOiBbXCJwbG90XCIsIGBiYXItcGxvdC0ke3RoaXMucGxvdEluZGV4fWBdLFxuICAgICAgICB0eXBlOiBcInJlY3RcIixcbiAgICAgICAgZGF0YTogdC5tYXAoKG8pID0+ICh7XG4gICAgICAgICAgeDogb1swXSAtIG4sXG4gICAgICAgICAgeTogb1sxXSxcbiAgICAgICAgICB3aWR0aDogcyxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuYm91bmRpbmdSZWN0LnkgKyB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHQgLSBvWzFdLFxuICAgICAgICAgIGZpbGw6IHRoaXMuYmFyRGF0YS5maWxsLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgICAgICAgIHN0cm9rZUZpbGw6IHRoaXMuYmFyRGF0YS5maWxsXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIF07XG4gIH1cbn0sIGEoaXQsIFwiQmFyUGxvdFwiKSwgaXQpLCBldCwgSWkgPSAoZXQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHQsIGksIHMpIHtcbiAgICB0aGlzLmNoYXJ0Q29uZmlnID0gdCwgdGhpcy5jaGFydERhdGEgPSBpLCB0aGlzLmNoYXJ0VGhlbWVDb25maWcgPSBzLCB0aGlzLmJvdW5kaW5nUmVjdCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICB9XG4gIHNldEF4ZXModCwgaSkge1xuICAgIHRoaXMueEF4aXMgPSB0LCB0aGlzLnlBeGlzID0gaTtcbiAgfVxuICBzZXRCb3VuZGluZ0JveFhZKHQpIHtcbiAgICB0aGlzLmJvdW5kaW5nUmVjdC54ID0gdC54LCB0aGlzLmJvdW5kaW5nUmVjdC55ID0gdC55O1xuICB9XG4gIGNhbGN1bGF0ZVNwYWNlKHQpIHtcbiAgICByZXR1cm4gdGhpcy5ib3VuZGluZ1JlY3Qud2lkdGggPSB0LndpZHRoLCB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHQgPSB0LmhlaWdodCwge1xuICAgICAgd2lkdGg6IHRoaXMuYm91bmRpbmdSZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG4gIGdldERyYXdhYmxlRWxlbWVudHMoKSB7XG4gICAgaWYgKCEodGhpcy54QXhpcyAmJiB0aGlzLnlBeGlzKSlcbiAgICAgIHRocm93IEVycm9yKFwiQXhlcyBtdXN0IGJlIHBhc3NlZCB0byByZW5kZXIgUGxvdHNcIik7XG4gICAgY29uc3QgdCA9IFtdO1xuICAgIGZvciAoY29uc3QgW2ksIHNdIG9mIHRoaXMuY2hhcnREYXRhLnBsb3RzLmVudHJpZXMoKSlcbiAgICAgIHN3aXRjaCAocy50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5ldyBMaShcbiAgICAgICAgICAgICAgcyxcbiAgICAgICAgICAgICAgdGhpcy54QXhpcyxcbiAgICAgICAgICAgICAgdGhpcy55QXhpcyxcbiAgICAgICAgICAgICAgdGhpcy5jaGFydENvbmZpZy5jaGFydE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgICBpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdC5wdXNoKC4uLm4uZ2V0RHJhd2FibGVFbGVtZW50KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJhclwiOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBuZXcgRWkoXG4gICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgIHRoaXMuYm91bmRpbmdSZWN0LFxuICAgICAgICAgICAgICB0aGlzLnhBeGlzLFxuICAgICAgICAgICAgICB0aGlzLnlBeGlzLFxuICAgICAgICAgICAgICB0aGlzLmNoYXJ0Q29uZmlnLmNoYXJ0T3JpZW50YXRpb24sXG4gICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0LnB1c2goLi4ubi5nZXREcmF3YWJsZUVsZW1lbnQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIHJldHVybiB0O1xuICB9XG59LCBhKGV0LCBcIkJhc2VQbG90XCIpLCBldCk7XG5mdW5jdGlvbiBxdChlLCB0LCBpKSB7XG4gIHJldHVybiBuZXcgSWkoZSwgdCwgaSk7XG59XG5hKHF0LCBcImdldFBsb3RDb21wb25lbnRcIik7XG52YXIgc3QsIE1pID0gKHN0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih0LCBpLCBzLCBuKSB7XG4gICAgdGhpcy5jaGFydENvbmZpZyA9IHQsIHRoaXMuY2hhcnREYXRhID0gaSwgdGhpcy5jb21wb25lbnRTdG9yZSA9IHtcbiAgICAgIHRpdGxlOiAkdCh0LCBpLCBzLCBuKSxcbiAgICAgIHBsb3Q6IHF0KHQsIGksIHMpLFxuICAgICAgeEF4aXM6IHd0KFxuICAgICAgICBpLnhBeGlzLFxuICAgICAgICB0LnhBeGlzLFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGVDb2xvcjogcy54QXhpc1RpdGxlQ29sb3IsXG4gICAgICAgICAgbGFiZWxDb2xvcjogcy54QXhpc0xhYmVsQ29sb3IsXG4gICAgICAgICAgdGlja0NvbG9yOiBzLnhBeGlzVGlja0NvbG9yLFxuICAgICAgICAgIGF4aXNMaW5lQ29sb3I6IHMueEF4aXNMaW5lQ29sb3JcbiAgICAgICAgfSxcbiAgICAgICAgblxuICAgICAgKSxcbiAgICAgIHlBeGlzOiB3dChcbiAgICAgICAgaS55QXhpcyxcbiAgICAgICAgdC55QXhpcyxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlQ29sb3I6IHMueUF4aXNUaXRsZUNvbG9yLFxuICAgICAgICAgIGxhYmVsQ29sb3I6IHMueUF4aXNMYWJlbENvbG9yLFxuICAgICAgICAgIHRpY2tDb2xvcjogcy55QXhpc1RpY2tDb2xvcixcbiAgICAgICAgICBheGlzTGluZUNvbG9yOiBzLnlBeGlzTGluZUNvbG9yXG4gICAgICAgIH0sXG4gICAgICAgIG5cbiAgICAgIClcbiAgICB9O1xuICB9XG4gIGNhbGN1bGF0ZVZlcnRpY2FsU3BhY2UoKSB7XG4gICAgbGV0IHQgPSB0aGlzLmNoYXJ0Q29uZmlnLndpZHRoLCBpID0gdGhpcy5jaGFydENvbmZpZy5oZWlnaHQsIHMgPSAwLCBuID0gMCwgbyA9IE1hdGguZmxvb3IodCAqIHRoaXMuY2hhcnRDb25maWcucGxvdFJlc2VydmVkU3BhY2VQZXJjZW50IC8gMTAwKSwgZyA9IE1hdGguZmxvb3IoXG4gICAgICBpICogdGhpcy5jaGFydENvbmZpZy5wbG90UmVzZXJ2ZWRTcGFjZVBlcmNlbnQgLyAxMDBcbiAgICApLCBtID0gdGhpcy5jb21wb25lbnRTdG9yZS5wbG90LmNhbGN1bGF0ZVNwYWNlKHtcbiAgICAgIHdpZHRoOiBvLFxuICAgICAgaGVpZ2h0OiBnXG4gICAgfSk7XG4gICAgdCAtPSBtLndpZHRoLCBpIC09IG0uaGVpZ2h0LCBtID0gdGhpcy5jb21wb25lbnRTdG9yZS50aXRsZS5jYWxjdWxhdGVTcGFjZSh7XG4gICAgICB3aWR0aDogdGhpcy5jaGFydENvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogaVxuICAgIH0pLCBuID0gbS5oZWlnaHQsIGkgLT0gbS5oZWlnaHQsIHRoaXMuY29tcG9uZW50U3RvcmUueEF4aXMuc2V0QXhpc1Bvc2l0aW9uKFwiYm90dG9tXCIpLCBtID0gdGhpcy5jb21wb25lbnRTdG9yZS54QXhpcy5jYWxjdWxhdGVTcGFjZSh7XG4gICAgICB3aWR0aDogdCxcbiAgICAgIGhlaWdodDogaVxuICAgIH0pLCBpIC09IG0uaGVpZ2h0LCB0aGlzLmNvbXBvbmVudFN0b3JlLnlBeGlzLnNldEF4aXNQb3NpdGlvbihcImxlZnRcIiksIG0gPSB0aGlzLmNvbXBvbmVudFN0b3JlLnlBeGlzLmNhbGN1bGF0ZVNwYWNlKHtcbiAgICAgIHdpZHRoOiB0LFxuICAgICAgaGVpZ2h0OiBpXG4gICAgfSksIHMgPSBtLndpZHRoLCB0IC09IG0ud2lkdGgsIHQgPiAwICYmIChvICs9IHQsIHQgPSAwKSwgaSA+IDAgJiYgKGcgKz0gaSwgaSA9IDApLCB0aGlzLmNvbXBvbmVudFN0b3JlLnBsb3QuY2FsY3VsYXRlU3BhY2Uoe1xuICAgICAgd2lkdGg6IG8sXG4gICAgICBoZWlnaHQ6IGdcbiAgICB9KSwgdGhpcy5jb21wb25lbnRTdG9yZS5wbG90LnNldEJvdW5kaW5nQm94WFkoeyB4OiBzLCB5OiBuIH0pLCB0aGlzLmNvbXBvbmVudFN0b3JlLnhBeGlzLnNldFJhbmdlKFtzLCBzICsgb10pLCB0aGlzLmNvbXBvbmVudFN0b3JlLnhBeGlzLnNldEJvdW5kaW5nQm94WFkoeyB4OiBzLCB5OiBuICsgZyB9KSwgdGhpcy5jb21wb25lbnRTdG9yZS55QXhpcy5zZXRSYW5nZShbbiwgbiArIGddKSwgdGhpcy5jb21wb25lbnRTdG9yZS55QXhpcy5zZXRCb3VuZGluZ0JveFhZKHsgeDogMCwgeTogbiB9KSwgdGhpcy5jaGFydERhdGEucGxvdHMuc29tZSgocCkgPT4gQXQocCkpICYmIHRoaXMuY29tcG9uZW50U3RvcmUueEF4aXMucmVjYWxjdWxhdGVPdXRlclBhZGRpbmdUb0RyYXdCYXIoKTtcbiAgfVxuICBjYWxjdWxhdGVIb3Jpem9udGFsU3BhY2UoKSB7XG4gICAgbGV0IHQgPSB0aGlzLmNoYXJ0Q29uZmlnLndpZHRoLCBpID0gdGhpcy5jaGFydENvbmZpZy5oZWlnaHQsIHMgPSAwLCBuID0gMCwgbyA9IDAsIGcgPSBNYXRoLmZsb29yKHQgKiB0aGlzLmNoYXJ0Q29uZmlnLnBsb3RSZXNlcnZlZFNwYWNlUGVyY2VudCAvIDEwMCksIG0gPSBNYXRoLmZsb29yKFxuICAgICAgaSAqIHRoaXMuY2hhcnRDb25maWcucGxvdFJlc2VydmVkU3BhY2VQZXJjZW50IC8gMTAwXG4gICAgKSwgcCA9IHRoaXMuY29tcG9uZW50U3RvcmUucGxvdC5jYWxjdWxhdGVTcGFjZSh7XG4gICAgICB3aWR0aDogZyxcbiAgICAgIGhlaWdodDogbVxuICAgIH0pO1xuICAgIHQgLT0gcC53aWR0aCwgaSAtPSBwLmhlaWdodCwgcCA9IHRoaXMuY29tcG9uZW50U3RvcmUudGl0bGUuY2FsY3VsYXRlU3BhY2Uoe1xuICAgICAgd2lkdGg6IHRoaXMuY2hhcnRDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGlcbiAgICB9KSwgcyA9IHAuaGVpZ2h0LCBpIC09IHAuaGVpZ2h0LCB0aGlzLmNvbXBvbmVudFN0b3JlLnhBeGlzLnNldEF4aXNQb3NpdGlvbihcImxlZnRcIiksIHAgPSB0aGlzLmNvbXBvbmVudFN0b3JlLnhBeGlzLmNhbGN1bGF0ZVNwYWNlKHtcbiAgICAgIHdpZHRoOiB0LFxuICAgICAgaGVpZ2h0OiBpXG4gICAgfSksIHQgLT0gcC53aWR0aCwgbiA9IHAud2lkdGgsIHRoaXMuY29tcG9uZW50U3RvcmUueUF4aXMuc2V0QXhpc1Bvc2l0aW9uKFwidG9wXCIpLCBwID0gdGhpcy5jb21wb25lbnRTdG9yZS55QXhpcy5jYWxjdWxhdGVTcGFjZSh7XG4gICAgICB3aWR0aDogdCxcbiAgICAgIGhlaWdodDogaVxuICAgIH0pLCBpIC09IHAuaGVpZ2h0LCBvID0gcyArIHAuaGVpZ2h0LCB0ID4gMCAmJiAoZyArPSB0LCB0ID0gMCksIGkgPiAwICYmIChtICs9IGksIGkgPSAwKSwgdGhpcy5jb21wb25lbnRTdG9yZS5wbG90LmNhbGN1bGF0ZVNwYWNlKHtcbiAgICAgIHdpZHRoOiBnLFxuICAgICAgaGVpZ2h0OiBtXG4gICAgfSksIHRoaXMuY29tcG9uZW50U3RvcmUucGxvdC5zZXRCb3VuZGluZ0JveFhZKHsgeDogbiwgeTogbyB9KSwgdGhpcy5jb21wb25lbnRTdG9yZS55QXhpcy5zZXRSYW5nZShbbiwgbiArIGddKSwgdGhpcy5jb21wb25lbnRTdG9yZS55QXhpcy5zZXRCb3VuZGluZ0JveFhZKHsgeDogbiwgeTogcyB9KSwgdGhpcy5jb21wb25lbnRTdG9yZS54QXhpcy5zZXRSYW5nZShbbywgbyArIG1dKSwgdGhpcy5jb21wb25lbnRTdG9yZS54QXhpcy5zZXRCb3VuZGluZ0JveFhZKHsgeDogMCwgeTogbyB9KSwgdGhpcy5jaGFydERhdGEucGxvdHMuc29tZSgoaykgPT4gQXQoaykpICYmIHRoaXMuY29tcG9uZW50U3RvcmUueEF4aXMucmVjYWxjdWxhdGVPdXRlclBhZGRpbmdUb0RyYXdCYXIoKTtcbiAgfVxuICBjYWxjdWxhdGVTcGFjZSgpIHtcbiAgICB0aGlzLmNoYXJ0Q29uZmlnLmNoYXJ0T3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gdGhpcy5jYWxjdWxhdGVIb3Jpem9udGFsU3BhY2UoKSA6IHRoaXMuY2FsY3VsYXRlVmVydGljYWxTcGFjZSgpO1xuICB9XG4gIGdldERyYXdhYmxlRWxlbWVudCgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZVNwYWNlKCk7XG4gICAgY29uc3QgdCA9IFtdO1xuICAgIHRoaXMuY29tcG9uZW50U3RvcmUucGxvdC5zZXRBeGVzKHRoaXMuY29tcG9uZW50U3RvcmUueEF4aXMsIHRoaXMuY29tcG9uZW50U3RvcmUueUF4aXMpO1xuICAgIGZvciAoY29uc3QgaSBvZiBPYmplY3QudmFsdWVzKHRoaXMuY29tcG9uZW50U3RvcmUpKVxuICAgICAgdC5wdXNoKC4uLmkuZ2V0RHJhd2FibGVFbGVtZW50cygpKTtcbiAgICByZXR1cm4gdDtcbiAgfVxufSwgYShzdCwgXCJPcmNoZXN0cmF0b3JcIiksIHN0KSwgbnQsIFZpID0gKG50ID0gY2xhc3Mge1xuICBzdGF0aWMgYnVpbGQodCwgaSwgcywgbikge1xuICAgIHJldHVybiBuZXcgTWkodCwgaSwgcywgbikuZ2V0RHJhd2FibGVFbGVtZW50KCk7XG4gIH1cbn0sIGEobnQsIFwiWFlDaGFydEJ1aWxkZXJcIiksIG50KSwgcnQgPSAwLCBHdCwgb3QgPSBUdCgpLCBodCA9IFJ0KCksIEEgPSBEdCgpLCBDdCA9IGh0LnBsb3RDb2xvclBhbGV0dGUuc3BsaXQoXCIsXCIpLm1hcCgoZSkgPT4gZS50cmltKCkpLCBndCA9ICExLCBrdCA9ICExO1xuZnVuY3Rpb24gUnQoKSB7XG4gIGNvbnN0IGUgPSB3aSgpLCB0ID0gU3QoKTtcbiAgcmV0dXJuIFl0KGUueHlDaGFydCwgdC50aGVtZVZhcmlhYmxlcy54eUNoYXJ0KTtcbn1cbmEoUnQsIFwiZ2V0Q2hhcnREZWZhdWx0VGhlbWVDb25maWdcIik7XG5mdW5jdGlvbiBUdCgpIHtcbiAgY29uc3QgZSA9IFN0KCk7XG4gIHJldHVybiBZdChcbiAgICBBaS54eUNoYXJ0LFxuICAgIGUueHlDaGFydFxuICApO1xufVxuYShUdCwgXCJnZXRDaGFydERlZmF1bHRDb25maWdcIik7XG5mdW5jdGlvbiBEdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB5QXhpczoge1xuICAgICAgdHlwZTogXCJsaW5lYXJcIixcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgbWluOiAxIC8gMCxcbiAgICAgIG1heDogLTEgLyAwXG4gICAgfSxcbiAgICB4QXhpczoge1xuICAgICAgdHlwZTogXCJiYW5kXCIsXG4gICAgICB0aXRsZTogXCJcIixcbiAgICAgIGNhdGVnb3JpZXM6IFtdXG4gICAgfSxcbiAgICB0aXRsZTogXCJcIixcbiAgICBwbG90czogW11cbiAgfTtcbn1cbmEoRHQsIFwiZ2V0Q2hhcnREZWZhdWx0RGF0YVwiKTtcbmZ1bmN0aW9uIHh0KGUpIHtcbiAgY29uc3QgdCA9IFN0KCk7XG4gIHJldHVybiBDaShlLnRyaW0oKSwgdCk7XG59XG5hKHh0LCBcInRleHRTYW5pdGl6ZXJcIik7XG5mdW5jdGlvbiBqdChlKSB7XG4gIEd0ID0gZTtcbn1cbmEoanQsIFwic2V0VG1wU1ZHR1wiKTtcbmZ1bmN0aW9uIFF0KGUpIHtcbiAgZSA9PT0gXCJob3Jpem9udGFsXCIgPyBvdC5jaGFydE9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIgOiBvdC5jaGFydE9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xufVxuYShRdCwgXCJzZXRPcmllbnRhdGlvblwiKTtcbmZ1bmN0aW9uIEt0KGUpIHtcbiAgQS54QXhpcy50aXRsZSA9IHh0KGUudGV4dCk7XG59XG5hKEt0LCBcInNldFhBeGlzVGl0bGVcIik7XG5mdW5jdGlvbiB2dChlLCB0KSB7XG4gIEEueEF4aXMgPSB7IHR5cGU6IFwibGluZWFyXCIsIHRpdGxlOiBBLnhBeGlzLnRpdGxlLCBtaW46IGUsIG1heDogdCB9LCBndCA9ICEwO1xufVxuYSh2dCwgXCJzZXRYQXhpc1JhbmdlRGF0YVwiKTtcbmZ1bmN0aW9uIFp0KGUpIHtcbiAgQS54QXhpcyA9IHtcbiAgICB0eXBlOiBcImJhbmRcIixcbiAgICB0aXRsZTogQS54QXhpcy50aXRsZSxcbiAgICBjYXRlZ29yaWVzOiBlLm1hcCgodCkgPT4geHQodC50ZXh0KSlcbiAgfSwgZ3QgPSAhMDtcbn1cbmEoWnQsIFwic2V0WEF4aXNCYW5kXCIpO1xuZnVuY3Rpb24gSnQoZSkge1xuICBBLnlBeGlzLnRpdGxlID0geHQoZS50ZXh0KTtcbn1cbmEoSnQsIFwic2V0WUF4aXNUaXRsZVwiKTtcbmZ1bmN0aW9uIHRpKGUsIHQpIHtcbiAgQS55QXhpcyA9IHsgdHlwZTogXCJsaW5lYXJcIiwgdGl0bGU6IEEueUF4aXMudGl0bGUsIG1pbjogZSwgbWF4OiB0IH0sIGt0ID0gITA7XG59XG5hKHRpLCBcInNldFlBeGlzUmFuZ2VEYXRhXCIpO1xuZnVuY3Rpb24gaWkoZSkge1xuICBjb25zdCB0ID0gTWF0aC5taW4oLi4uZSksIGkgPSBNYXRoLm1heCguLi5lKSwgcyA9IEcoQS55QXhpcykgPyBBLnlBeGlzLm1pbiA6IDEgLyAwLCBuID0gRyhBLnlBeGlzKSA/IEEueUF4aXMubWF4IDogLTEgLyAwO1xuICBBLnlBeGlzID0ge1xuICAgIHR5cGU6IFwibGluZWFyXCIsXG4gICAgdGl0bGU6IEEueUF4aXMudGl0bGUsXG4gICAgbWluOiBNYXRoLm1pbihzLCB0KSxcbiAgICBtYXg6IE1hdGgubWF4KG4sIGkpXG4gIH07XG59XG5hKGlpLCBcInNldFlBeGlzUmFuZ2VGcm9tUGxvdERhdGFcIik7XG5mdW5jdGlvbiBQdChlKSB7XG4gIGxldCB0ID0gW107XG4gIGlmIChlLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gdDtcbiAgaWYgKCFndCkge1xuICAgIGNvbnN0IGkgPSBHKEEueEF4aXMpID8gQS54QXhpcy5taW4gOiAxIC8gMCwgcyA9IEcoQS54QXhpcykgPyBBLnhBeGlzLm1heCA6IC0xIC8gMDtcbiAgICB2dChNYXRoLm1pbihpLCAxKSwgTWF0aC5tYXgocywgZS5sZW5ndGgpKTtcbiAgfVxuICBpZiAoa3QgfHwgaWkoZSksIF90KEEueEF4aXMpICYmICh0ID0gQS54QXhpcy5jYXRlZ29yaWVzLm1hcCgoaSwgcykgPT4gW2ksIGVbc11dKSksIEcoQS54QXhpcykpIHtcbiAgICBjb25zdCBpID0gQS54QXhpcy5taW4sIHMgPSBBLnhBeGlzLm1heCwgbiA9IChzIC0gaSkgLyAoZS5sZW5ndGggLSAxKSwgbyA9IFtdO1xuICAgIGZvciAobGV0IGcgPSBpOyBnIDw9IHM7IGcgKz0gbilcbiAgICAgIG8ucHVzaChgJHtnfWApO1xuICAgIHQgPSBvLm1hcCgoZywgbSkgPT4gW2csIGVbbV1dKTtcbiAgfVxuICByZXR1cm4gdDtcbn1cbmEoUHQsIFwidHJhbnNmb3JtRGF0YVdpdGhvdXRDYXRlZ29yeVwiKTtcbmZ1bmN0aW9uIEx0KGUpIHtcbiAgcmV0dXJuIEN0W2UgPT09IDAgPyAwIDogZSAlIEN0Lmxlbmd0aF07XG59XG5hKEx0LCBcImdldFBsb3RDb2xvckZyb21QYWxldHRlXCIpO1xuZnVuY3Rpb24gZWkoZSwgdCkge1xuICBjb25zdCBpID0gUHQodCk7XG4gIEEucGxvdHMucHVzaCh7XG4gICAgdHlwZTogXCJsaW5lXCIsXG4gICAgc3Ryb2tlRmlsbDogTHQocnQpLFxuICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgIGRhdGE6IGlcbiAgfSksIHJ0Kys7XG59XG5hKGVpLCBcInNldExpbmVEYXRhXCIpO1xuZnVuY3Rpb24gc2koZSwgdCkge1xuICBjb25zdCBpID0gUHQodCk7XG4gIEEucGxvdHMucHVzaCh7XG4gICAgdHlwZTogXCJiYXJcIixcbiAgICBmaWxsOiBMdChydCksXG4gICAgZGF0YTogaVxuICB9KSwgcnQrKztcbn1cbmEoc2ksIFwic2V0QmFyRGF0YVwiKTtcbmZ1bmN0aW9uIG5pKCkge1xuICBpZiAoQS5wbG90cy5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgRXJyb3IoXCJObyBQbG90IHRvIHJlbmRlciwgcGxlYXNlIHByb3ZpZGUgYSBwbG90IHdpdGggc29tZSBkYXRhXCIpO1xuICByZXR1cm4gQS50aXRsZSA9IFh0KCksIFZpLmJ1aWxkKG90LCBBLCBodCwgR3QpO1xufVxuYShuaSwgXCJnZXREcmF3YWJsZUVsZW1cIik7XG5mdW5jdGlvbiBhaSgpIHtcbiAgcmV0dXJuIGh0O1xufVxuYShhaSwgXCJnZXRDaGFydFRoZW1lQ29uZmlnXCIpO1xuZnVuY3Rpb24gcmkoKSB7XG4gIHJldHVybiBvdDtcbn1cbmEocmksIFwiZ2V0Q2hhcnRDb25maWdcIik7XG5mdW5jdGlvbiBvaSgpIHtcbiAgcmV0dXJuIEE7XG59XG5hKG9pLCBcImdldFhZQ2hhcnREYXRhXCIpO1xudmFyIEJpID0gLyogQF9fUFVSRV9fICovIGEoZnVuY3Rpb24oKSB7XG4gIGJpKCksIHJ0ID0gMCwgb3QgPSBUdCgpLCBBID0gRHQoKSwgaHQgPSBSdCgpLCBDdCA9IGh0LnBsb3RDb2xvclBhbGV0dGUuc3BsaXQoXCIsXCIpLm1hcCgoZSkgPT4gZS50cmltKCkpLCBndCA9ICExLCBrdCA9ICExO1xufSwgXCJjbGVhclwiKSwgV2kgPSB7XG4gIGdldERyYXdhYmxlRWxlbTogbmksXG4gIGNsZWFyOiBCaSxcbiAgc2V0QWNjVGl0bGU6IHBpLFxuICBnZXRBY2NUaXRsZTogZmksXG4gIHNldERpYWdyYW1UaXRsZTogZGksXG4gIGdldERpYWdyYW1UaXRsZTogWHQsXG4gIGdldEFjY0Rlc2NyaXB0aW9uOiB4aSxcbiAgc2V0QWNjRGVzY3JpcHRpb246IGdpLFxuICBzZXRPcmllbnRhdGlvbjogUXQsXG4gIHNldFhBeGlzVGl0bGU6IEt0LFxuICBzZXRYQXhpc1JhbmdlRGF0YTogdnQsXG4gIHNldFhBeGlzQmFuZDogWnQsXG4gIHNldFlBeGlzVGl0bGU6IEp0LFxuICBzZXRZQXhpc1JhbmdlRGF0YTogdGksXG4gIHNldExpbmVEYXRhOiBlaSxcbiAgc2V0QmFyRGF0YTogc2ksXG4gIHNldFRtcFNWR0c6IGp0LFxuICBnZXRDaGFydFRoZW1lQ29uZmlnOiBhaSxcbiAgZ2V0Q2hhcnRDb25maWc6IHJpLFxuICBnZXRYWUNoYXJ0RGF0YTogb2lcbn0sIHppID0gLyogQF9fUFVSRV9fICovIGEoKGUsIHQsIGksIHMpID0+IHtcbiAgY29uc3QgbiA9IHMuZGIsIG8gPSBuLmdldENoYXJ0VGhlbWVDb25maWcoKSwgZyA9IG4uZ2V0Q2hhcnRDb25maWcoKSwgbSA9IG4uZ2V0WFlDaGFydERhdGEoKS5wbG90c1swXS5kYXRhLm1hcCgoeSkgPT4geVsxXSk7XG4gIGZ1bmN0aW9uIHAoeSkge1xuICAgIHJldHVybiB5ID09PSBcInRvcFwiID8gXCJ0ZXh0LWJlZm9yZS1lZGdlXCIgOiBcIm1pZGRsZVwiO1xuICB9XG4gIGEocCwgXCJnZXREb21pbmFudEJhc2VMaW5lXCIpO1xuICBmdW5jdGlvbiBrKHkpIHtcbiAgICByZXR1cm4geSA9PT0gXCJsZWZ0XCIgPyBcInN0YXJ0XCIgOiB5ID09PSBcInJpZ2h0XCIgPyBcImVuZFwiIDogXCJtaWRkbGVcIjtcbiAgfVxuICBhKGssIFwiZ2V0VGV4dEFuY2hvclwiKTtcbiAgZnVuY3Rpb24gdih5KSB7XG4gICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt5Lnh9LCAke3kueX0pIHJvdGF0ZSgke3kucm90YXRpb24gfHwgMH0pYDtcbiAgfVxuICBhKHYsIFwiZ2V0VGV4dFRyYW5zZm9ybWF0aW9uXCIpLCBOdC5kZWJ1ZyhgUmVuZGVyaW5nIHh5Y2hhcnQgY2hhcnRcbmAgKyBlKTtcbiAgY29uc3QgQyA9IG1pKHQpLCBiID0gQy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1haW5cIiksIEUgPSBiLmFwcGVuZChcInJlY3RcIikuYXR0cihcIndpZHRoXCIsIGcud2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgZy5oZWlnaHQpLmF0dHIoXCJjbGFzc1wiLCBcImJhY2tncm91bmRcIik7XG4gIHlpKEMsIGcuaGVpZ2h0LCBnLndpZHRoLCAhMCksIEMuYXR0cihcInZpZXdCb3hcIiwgYDAgMCAke2cud2lkdGh9ICR7Zy5oZWlnaHR9YCksIEUuYXR0cihcImZpbGxcIiwgby5iYWNrZ3JvdW5kQ29sb3IpLCBuLnNldFRtcFNWR0coQy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1lcm1haWQtdG1wLWdyb3VwXCIpKTtcbiAgY29uc3QgRCA9IG4uZ2V0RHJhd2FibGVFbGVtKCksIFAgPSB7fTtcbiAgZnVuY3Rpb24gSSh5KSB7XG4gICAgbGV0IF8gPSBiLCBjID0gXCJcIjtcbiAgICBmb3IgKGNvbnN0IFtXXSBvZiB5LmVudHJpZXMoKSkge1xuICAgICAgbGV0IHogPSBiO1xuICAgICAgVyA+IDAgJiYgUFtjXSAmJiAoeiA9IFBbY10pLCBjICs9IHlbV10sIF8gPSBQW2NdLCBfIHx8IChfID0gUFtjXSA9IHouYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgeVtXXSkpO1xuICAgIH1cbiAgICByZXR1cm4gXztcbiAgfVxuICBhKEksIFwiZ2V0R3JvdXBcIik7XG4gIGZvciAoY29uc3QgeSBvZiBEKSB7XG4gICAgaWYgKHkuZGF0YS5sZW5ndGggPT09IDApXG4gICAgICBjb250aW51ZTtcbiAgICBjb25zdCBfID0gSSh5Lmdyb3VwVGV4dHMpO1xuICAgIHN3aXRjaCAoeS50eXBlKSB7XG4gICAgICBjYXNlIFwicmVjdFwiOlxuICAgICAgICBpZiAoXy5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEoeS5kYXRhKS5lbnRlcigpLmFwcGVuZChcInJlY3RcIikuYXR0cihcInhcIiwgKGMpID0+IGMueCkuYXR0cihcInlcIiwgKGMpID0+IGMueSkuYXR0cihcIndpZHRoXCIsIChjKSA9PiBjLndpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIChjKSA9PiBjLmhlaWdodCkuYXR0cihcImZpbGxcIiwgKGMpID0+IGMuZmlsbCkuYXR0cihcInN0cm9rZVwiLCAoYykgPT4gYy5zdHJva2VGaWxsKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIChjKSA9PiBjLnN0cm9rZVdpZHRoKSwgZy5zaG93RGF0YUxhYmVsKVxuICAgICAgICAgIGlmIChnLmNoYXJ0T3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBsZXQgYyA9IGZ1bmN0aW9uKGwsIEwpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBTLCBsYWJlbDogUiB9ID0gbDtcbiAgICAgICAgICAgICAgcmV0dXJuIEwgKiBSLmxlbmd0aCAqIFcgPD0gUy53aWR0aCAtIDEwO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGEoYywgXCJmaXRzSG9yaXpvbnRhbGx5XCIpO1xuICAgICAgICAgICAgY29uc3QgVyA9IDAuNywgeiA9IHkuZGF0YS5tYXAoKGwsIEwpID0+ICh7IGRhdGE6IGwsIGxhYmVsOiBtW0xdLnRvU3RyaW5nKCkgfSkpLmZpbHRlcigobCkgPT4gbC5kYXRhLndpZHRoID4gMCAmJiBsLmRhdGEuaGVpZ2h0ID4gMCksIFUgPSB6Lm1hcCgobCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IGRhdGE6IEwgfSA9IGw7XG4gICAgICAgICAgICAgIGxldCBTID0gTC5oZWlnaHQgKiAwLjc7XG4gICAgICAgICAgICAgIGZvciAoOyAhYyhsLCBTKSAmJiBTID4gMDsgKVxuICAgICAgICAgICAgICAgIFMgLT0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuIFM7XG4gICAgICAgICAgICB9KSwgWCA9IE1hdGguZmxvb3IoTWF0aC5taW4oLi4uVSkpO1xuICAgICAgICAgICAgXy5zZWxlY3RBbGwoXCJ0ZXh0XCIpLmRhdGEoeikuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIChsKSA9PiBsLmRhdGEueCArIGwuZGF0YS53aWR0aCAtIDEwKS5hdHRyKFwieVwiLCAobCkgPT4gbC5kYXRhLnkgKyBsLmRhdGEuaGVpZ2h0IC8gMikuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpLmF0dHIoXCJkb21pbmFudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS5hdHRyKFwiZmlsbFwiLCBcImJsYWNrXCIpLmF0dHIoXCJmb250LXNpemVcIiwgYCR7WH1weGApLnRleHQoKGwpID0+IGwubGFiZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYyA9IGZ1bmN0aW9uKGwsIEwsIFMpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBSLCBsYWJlbDogJCB9ID0gbCwgTiA9IEwgKiAkLmxlbmd0aCAqIDAuNywgRiA9IFIueCArIFIud2lkdGggLyAyLCBoID0gRiAtIE4gLyAyLCB1ID0gRiArIE4gLyAyLCB4ID0gaCA+PSBSLnggJiYgdSA8PSBSLnggKyBSLndpZHRoLCBkID0gUi55ICsgUyArIEwgPD0gUi55ICsgUi5oZWlnaHQ7XG4gICAgICAgICAgICAgIHJldHVybiB4ICYmIGQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYShjLCBcImZpdHNJbkJhclwiKTtcbiAgICAgICAgICAgIGNvbnN0IFcgPSAxMCwgeiA9IHkuZGF0YS5tYXAoKGwsIEwpID0+ICh7IGRhdGE6IGwsIGxhYmVsOiBtW0xdLnRvU3RyaW5nKCkgfSkpLmZpbHRlcigobCkgPT4gbC5kYXRhLndpZHRoID4gMCAmJiBsLmRhdGEuaGVpZ2h0ID4gMCksIFUgPSB6Lm1hcCgobCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IGRhdGE6IEwsIGxhYmVsOiBTIH0gPSBsO1xuICAgICAgICAgICAgICBsZXQgUiA9IEwud2lkdGggLyAoUy5sZW5ndGggKiAwLjcpO1xuICAgICAgICAgICAgICBmb3IgKDsgIWMobCwgUiwgVykgJiYgUiA+IDA7IClcbiAgICAgICAgICAgICAgICBSIC09IDE7XG4gICAgICAgICAgICAgIHJldHVybiBSO1xuICAgICAgICAgICAgfSksIFggPSBNYXRoLmZsb29yKE1hdGgubWluKC4uLlUpKTtcbiAgICAgICAgICAgIF8uc2VsZWN0QWxsKFwidGV4dFwiKS5kYXRhKHopLmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAobCkgPT4gbC5kYXRhLnggKyBsLmRhdGEud2lkdGggLyAyKS5hdHRyKFwieVwiLCAobCkgPT4gbC5kYXRhLnkgKyBXKS5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikuYXR0cihcImRvbWluYW50LWJhc2VsaW5lXCIsIFwiaGFuZ2luZ1wiKS5hdHRyKFwiZmlsbFwiLCBcImJsYWNrXCIpLmF0dHIoXCJmb250LXNpemVcIiwgYCR7WH1weGApLnRleHQoKGwpID0+IGwubGFiZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICBfLnNlbGVjdEFsbChcInRleHRcIikuZGF0YSh5LmRhdGEpLmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCAwKS5hdHRyKFwiZmlsbFwiLCAoYykgPT4gYy5maWxsKS5hdHRyKFwiZm9udC1zaXplXCIsIChjKSA9PiBjLmZvbnRTaXplKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgKGMpID0+IHAoYy52ZXJ0aWNhbFBvcykpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCAoYykgPT4gayhjLmhvcml6b250YWxQb3MpKS5hdHRyKFwidHJhbnNmb3JtXCIsIChjKSA9PiB2KGMpKS50ZXh0KChjKSA9PiBjLnRleHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJwYXRoXCI6XG4gICAgICAgIF8uc2VsZWN0QWxsKFwicGF0aFwiKS5kYXRhKHkuZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIChjKSA9PiBjLnBhdGgpLmF0dHIoXCJmaWxsXCIsIChjKSA9PiBjLmZpbGwgPyBjLmZpbGwgOiBcIm5vbmVcIikuYXR0cihcInN0cm9rZVwiLCAoYykgPT4gYy5zdHJva2VGaWxsKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIChjKSA9PiBjLnN0cm9rZVdpZHRoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59LCBcImRyYXdcIiksIEZpID0ge1xuICBkcmF3OiB6aVxufSwgSGkgPSB7XG4gIHBhcnNlcjogVGksXG4gIGRiOiBXaSxcbiAgcmVuZGVyZXI6IEZpXG59O1xuZXhwb3J0IHtcbiAgSGkgYXMgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJ0Iiwia2kiLCJwIiwiX2kiLCJhIiwiRiIsImgiLCJTaSIsIk50IiwienQiLCJXdCIsIndpIiwiU3QiLCJZdCIsIkFpIiwiQ2kiLCJYdCIsImJpIiwicGkiLCJmaSIsImRpIiwieGkiLCJnaSIsIm1pIiwieWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxHQUFHLEdBQUdBLElBQUcsR0FBRztBQUNuQixNQUFJLENBQUMsR0FBR0EsS0FBSSxDQUFDQSxJQUFHLEtBQUssSUFBSSxVQUFVLFVBQVUsS0FBS0EsS0FBSSxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUM7QUFDbEYsV0FBUyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU1BLEtBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUk7QUFDcEYsTUFBRSxDQUFDLElBQUksSUFBSSxJQUFJO0FBQ2pCLFNBQU87QUFDVDtBQUNBLFNBQVMsS0FBSztBQUNaLE1BQUksSUFBSUMsSUFBSyxRQUFRLE1BQU0sR0FBR0QsTUFBSSxFQUFFLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxPQUFJRSxLQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDdkcsU0FBTyxFQUFFO0FBQ1QsV0FBUyxJQUFJO0FBQ1gsUUFBSSxJQUFJRixJQUFDLEVBQUcsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO0FBQzFELFNBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUlFLEtBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJQSxPQUFNLEdBQUcsSUFBSSxLQUFLLElBQUlBLEtBQUksTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUM5SixRQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxTQUFTLEdBQUc7QUFDNUIsYUFBTyxJQUFJLElBQUk7QUFBQSxJQUNqQixDQUFDO0FBQ0QsV0FBTyxFQUFFLElBQUksRUFBRSxRQUFPLElBQUssQ0FBQztBQUFBLEVBQzlCO0FBQ0EsU0FBTyxFQUFFLFNBQVMsU0FBUyxHQUFHO0FBQzVCLFdBQU8sVUFBVSxVQUFVRixJQUFFLENBQUMsR0FBRyxFQUFDLEtBQU1BLElBQUM7QUFBQSxFQUMzQyxHQUFHLEVBQUUsUUFBUSxTQUFTLEdBQUc7QUFDdkIsV0FBTyxVQUFVLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUMsS0FBTSxDQUFDLEdBQUcsQ0FBQztBQUFBLEVBQ3JFLEdBQUcsRUFBRSxhQUFhLFNBQVMsR0FBRztBQUM1QixXQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQUksRUFBQztBQUFBLEVBQzlDLEdBQUcsRUFBRSxZQUFZLFdBQVc7QUFDMUIsV0FBTztBQUFBLEVBQ1QsR0FBRyxFQUFFLE9BQU8sV0FBVztBQUNyQixXQUFPO0FBQUEsRUFDVCxHQUFHLEVBQUUsUUFBUSxTQUFTLEdBQUc7QUFDdkIsV0FBTyxVQUFVLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQU07QUFBQSxFQUM3QyxHQUFHLEVBQUUsVUFBVSxTQUFTLEdBQUc7QUFDekIsV0FBTyxVQUFVLFVBQVVFLEtBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQU1BO0FBQUEsRUFDN0QsR0FBRyxFQUFFLGVBQWUsU0FBUyxHQUFHO0FBQzlCLFdBQU8sVUFBVSxVQUFVQSxLQUFJLEtBQUssSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFDLEtBQU1BO0FBQUEsRUFDeEQsR0FBRyxFQUFFLGVBQWUsU0FBUyxHQUFHO0FBQzlCLFdBQU8sVUFBVSxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUMsS0FBTTtBQUFBLEVBQzVDLEdBQUcsRUFBRSxRQUFRLFNBQVMsR0FBRztBQUN2QixXQUFPLFVBQVUsVUFBVSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBTTtBQUFBLEVBQ3JFLEdBQUcsRUFBRSxPQUFPLFdBQVc7QUFDckIsV0FBTyxHQUFHRixJQUFDLEdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLGFBQWFFLEVBQUMsRUFBRSxhQUFhLENBQUMsRUFBRSxNQUFNLENBQUM7QUFBQSxFQUN6RSxHQUFHQyxFQUFHLE1BQU0sRUFBQyxHQUFJLFNBQVM7QUFDNUI7QUFDQSxJQUFJLE1BQU0sV0FBVztBQUNuQixNQUFJLElBQW9CQyxrQkFBRSxTQUFTQyxJQUFHQyxJQUFHLEdBQUcsR0FBRztBQUM3QyxTQUFLLElBQUksS0FBSyxJQUFJLElBQUlELEdBQUUsUUFBUSxLQUFLLEVBQUVBLEdBQUUsQ0FBQyxDQUFDLElBQUlDLEdBQUc7QUFDbEQsV0FBTztBQUFBLEVBQ1QsR0FBRyxHQUFHLEdBQUdOLEtBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBR0UsTUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJO0FBQUEsSUFDNW1CLE9BQXVCRSxrQkFBRSxXQUFXO0FBQUEsSUFDcEMsR0FBRyxPQUFPO0FBQUEsSUFDVixJQUFJLENBQUE7QUFBQSxJQUNKLFVBQVUsRUFBRSxPQUFPLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxTQUFTLEdBQUcsYUFBYSxHQUFHLFVBQVUsR0FBRyxtQkFBbUIsR0FBRyxXQUFXLEdBQUcsT0FBTyxJQUFJLE1BQU0sSUFBSSxRQUFRLElBQUksWUFBWSxJQUFJLFFBQVEsSUFBSSxZQUFZLElBQUksTUFBTSxJQUFJLFVBQVUsSUFBSSxLQUFLLElBQUksV0FBVyxJQUFJLGlCQUFpQixJQUFJLFdBQVcsSUFBSSxpQkFBaUIsSUFBSSwyQkFBMkIsSUFBSSxxQkFBcUIsSUFBSSx1QkFBdUIsSUFBSSxtQkFBbUIsSUFBSSxxQkFBcUIsSUFBSSxPQUFPLElBQUksV0FBVyxJQUFJLFVBQVUsSUFBSSxpQkFBaUIsSUFBSSxxQkFBcUIsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxLQUFLLElBQUksVUFBVSxJQUFJLEtBQUssSUFBSSxRQUFRLElBQUksZUFBZSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxRQUFRLElBQUksTUFBTSxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLFlBQVksSUFBSSxTQUFTLEdBQUcsTUFBTSxFQUFDO0FBQUEsSUFDdnVCLFlBQVksRUFBRSxHQUFHLFNBQVMsR0FBRyxXQUFXLEdBQUcscUJBQXFCLElBQUksU0FBUyxJQUFJLFVBQVUsSUFBSSxVQUFVLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxhQUFhLElBQUksbUJBQW1CLElBQUksYUFBYSxJQUFJLG1CQUFtQixJQUFJLDZCQUE2QixJQUFJLHVCQUF1QixJQUFJLHFCQUFxQixJQUFJLHVCQUF1QixJQUFJLFNBQVMsSUFBSSxtQkFBbUIsSUFBSSxXQUFXLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksVUFBVSxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksU0FBUyxJQUFJLFFBQVEsSUFBSSxVQUFVLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxRQUFRLElBQUksU0FBUyxJQUFJLGFBQVk7QUFBQSxJQUNoaUIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFBQSxJQUN0YyxlQUErQkEsa0JBQUUsU0FBU0UsSUFBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSTtBQUM5RCxVQUFJLElBQUksRUFBRSxTQUFTO0FBQ25CLGNBQVEsR0FBQztBQUFBLFFBQ1AsS0FBSztBQUNILFlBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNyQjtBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUNsQztBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsWUFBWSxFQUFFLE1BQU0sSUFBSSxNQUFNLE9BQU0sR0FBSSxFQUFFLENBQUMsQ0FBQztBQUM5QztBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzVCO0FBQUEsUUFDRixLQUFLO0FBQ0gsWUFBRSxXQUFXLEVBQUUsTUFBTSxJQUFJLE1BQU0sT0FBTSxHQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdDO0FBQUEsUUFDRixLQUFLO0FBQ0gsWUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDM0I7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSSxHQUFJLEVBQUUsWUFBWSxLQUFLLENBQUM7QUFDMUM7QUFBQSxRQUNGLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFDSCxlQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSSxHQUFJLEVBQUUsa0JBQWtCLEtBQUssQ0FBQztBQUNoRDtBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssSUFBSSxFQUFFLElBQUksQ0FBQztBQUNoQjtBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDbkM7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEI7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDcEI7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4QjtBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFDMUM7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFDbkI7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLGtCQUFrQixPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEQ7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLLElBQUksRUFBRSxJQUFJLENBQUM7QUFDaEI7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDM0I7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNkO0FBQUEsUUFDRixLQUFLO0FBQ0gsWUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCO0FBQUEsUUFDRixLQUFLO0FBQ0gsWUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEI7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLGNBQWMsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQzFDO0FBQUEsUUFDRixLQUFLO0FBQ0gsWUFBRSxrQkFBa0IsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xEO0FBQUEsUUFDRixLQUFLO0FBQ0gsZUFBSyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLE9BQU07QUFDbkM7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sT0FBTTtBQUNuQztBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxXQUFVO0FBQ3ZDO0FBQUEsUUFDRixLQUFLO0FBQ0gsZUFBSyxJQUFJLEVBQUUsQ0FBQztBQUNaO0FBQUEsUUFDRixLQUFLO0FBQ0gsZUFBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7QUFDNUI7QUFBQSxNQUNWO0FBQUEsSUFDSSxHQUFHLFdBQVc7QUFBQSxJQUNkLE9BQU8sQ0FBQyxFQUFFTixJQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFQSxJQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFQSxJQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxHQUFJLEVBQUVBLElBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUVBLElBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBQyxDQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUlFLEtBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSUEsS0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSUEsS0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJQSxLQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUlBLEtBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSUEsS0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksSUFBSSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSUEsS0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHO0FBQUEsSUFDLzNFLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUM7QUFBQSxJQUM3RSxZQUE0QkUsa0JBQUUsU0FBU0UsSUFBRyxHQUFHO0FBQzNDLFVBQUksRUFBRTtBQUNKLGFBQUssTUFBTUEsRUFBQztBQUFBLFdBQ1Q7QUFDSCxZQUFJLElBQUksSUFBSSxNQUFNQSxFQUFDO0FBQ25CLGNBQU0sRUFBRSxPQUFPLEdBQUc7QUFBQSxNQUNwQjtBQUFBLElBQ0YsR0FBRyxZQUFZO0FBQUEsSUFDZixPQUF1QkYsa0JBQUUsU0FBU0UsSUFBRztBQUNuQyxVQUFJLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQSxHQUFJLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxFQUFFLE1BQU0sS0FBSyxXQUFXLENBQUMsR0FBRyxJQUFJLE9BQU8sT0FBTyxLQUFLLEtBQUssR0FBRyxJQUFJLEVBQUUsSUFBSSxHQUFFO0FBQ3hMLGVBQVMsTUFBTSxLQUFLO0FBQ2xCLGVBQU8sVUFBVSxlQUFlLEtBQUssS0FBSyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRyxFQUFFO0FBQzdFLFFBQUUsU0FBU0EsSUFBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsUUFBUSxHQUFHLEVBQUUsR0FBRyxTQUFTLE1BQU0sT0FBTyxFQUFFLFNBQVMsUUFBUSxFQUFFLFNBQVM7QUFDOUYsVUFBSSxLQUFLLEVBQUU7QUFDWCxRQUFFLEtBQUssRUFBRTtBQUNULFVBQUksS0FBSyxFQUFFLFdBQVcsRUFBRSxRQUFRO0FBQ2hDLGFBQU8sRUFBRSxHQUFHLGNBQWMsYUFBYSxLQUFLLGFBQWEsRUFBRSxHQUFHLGFBQWEsS0FBSyxhQUFhLE9BQU8sZUFBZSxJQUFJLEVBQUU7QUFDekgsZUFBUyxHQUFHLEdBQUc7QUFDYixVQUFFLFNBQVMsRUFBRSxTQUFTLElBQUksR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUztBQUFBLE1BQzlFO0FBQ0FGLFFBQUUsSUFBSSxVQUFVO0FBQ2hCLGVBQVMsS0FBSztBQUNaLFlBQUk7QUFDSixlQUFPLElBQUksRUFBRSxJQUFHLEtBQU0sRUFBRSxTQUFTLElBQUksT0FBTyxLQUFLLGFBQWEsYUFBYSxVQUFVLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBRyxJQUFLLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxJQUFJO0FBQUEsTUFDckk7QUFDQUEsUUFBRSxJQUFJLEtBQUs7QUFDWCxlQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFBLEdBQUksSUFBSSxHQUFHLElBQUksUUFBUTtBQUMvQyxZQUFJLElBQUksRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEtBQUssZUFBZSxDQUFDLElBQUksSUFBSSxLQUFLLGVBQWUsQ0FBQyxNQUFNLE1BQU0sUUFBUSxPQUFPLElBQUksU0FBUyxJQUFJLEdBQUUsSUFBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHO0FBQzFMLGNBQUksS0FBSztBQUNULGVBQUssQ0FBQTtBQUNMLGVBQUssTUFBTSxHQUFHLENBQUM7QUFDYixpQkFBSyxXQUFXLEVBQUUsS0FBSyxLQUFLLE1BQU0sR0FBRyxLQUFLLE1BQU0sS0FBSyxXQUFXLEVBQUUsSUFBSSxHQUFHO0FBQzNFLFlBQUUsZUFBZSxLQUFLLDBCQUEwQixLQUFLLEtBQUs7QUFBQSxJQUNoRSxFQUFFLGlCQUFpQjtBQUFBLGNBQ1QsR0FBRyxLQUFLLElBQUksSUFBSSxhQUFhLEtBQUssV0FBVyxDQUFDLEtBQUssS0FBSyxNQUFNLEtBQUssMEJBQTBCLEtBQUssS0FBSyxtQkFBbUIsS0FBSyxLQUFLLGlCQUFpQixPQUFPLEtBQUssV0FBVyxDQUFDLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxJQUFJO0FBQUEsWUFDbk4sTUFBTSxFQUFFO0FBQUEsWUFDUixPQUFPLEtBQUssV0FBVyxDQUFDLEtBQUs7QUFBQSxZQUM3QixNQUFNLEVBQUU7QUFBQSxZQUNSLEtBQUs7QUFBQSxZQUNMLFVBQVU7QUFBQSxVQUN0QixDQUFXO0FBQUEsUUFDSDtBQUNBLFlBQUksRUFBRSxDQUFDLGFBQWEsU0FBUyxFQUFFLFNBQVM7QUFDdEMsZ0JBQU0sSUFBSSxNQUFNLHNEQUFzRCxJQUFJLGNBQWMsQ0FBQztBQUMzRixnQkFBUSxFQUFFLENBQUMsR0FBQztBQUFBLFVBQ1YsS0FBSztBQUNILGNBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sS0FBSyxFQUFFLFFBQVEsSUFBSSxFQUFFLFFBQVEsS0FBSyxFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQzVIO0FBQUEsVUFDRixLQUFLO0FBQ0gsZ0JBQUksSUFBSSxLQUFLLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUs7QUFBQSxjQUNoRSxZQUFZLEVBQUUsRUFBRSxVQUFVLEtBQUssRUFBRSxFQUFFO0FBQUEsY0FDbkMsV0FBVyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUU7QUFBQSxjQUMzQixjQUFjLEVBQUUsRUFBRSxVQUFVLEtBQUssRUFBRSxFQUFFO0FBQUEsY0FDckMsYUFBYSxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUU7QUFBQSxZQUMzQyxHQUFlLE9BQU8sRUFBRSxHQUFHLFFBQVE7QUFBQSxjQUNyQixFQUFFLEVBQUUsVUFBVSxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUM7QUFBQSxjQUM5QixFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDO0FBQUEsWUFDckMsSUFBZ0IsS0FBSyxLQUFLLGNBQWMsTUFBTSxHQUFHO0FBQUEsY0FDbkM7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0EsRUFBRTtBQUFBLGNBQ0YsRUFBRSxDQUFDO0FBQUEsY0FDSDtBQUFBLGNBQ0E7QUFBQSxZQUNkLEVBQWMsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLEtBQUs7QUFDekIscUJBQU87QUFDVCxrQkFBTSxJQUFJLEVBQUUsTUFBTSxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUN0TTtBQUFBLFVBQ0YsS0FBSztBQUNILG1CQUFPO0FBQUEsUUFDbkI7QUFBQSxNQUNNO0FBQ0EsYUFBTztBQUFBLElBQ1QsR0FBRyxPQUFPO0FBQUEsRUFDZCxHQUFLLEtBQXNCLDRCQUFXO0FBQ2xDLFFBQUlDLEtBQUk7QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLFlBQTRCRCxrQkFBRSxTQUFTLEdBQUcsR0FBRztBQUMzQyxZQUFJLEtBQUssR0FBRztBQUNWLGVBQUssR0FBRyxPQUFPLFdBQVcsR0FBRyxDQUFDO0FBQUE7QUFFOUIsZ0JBQU0sSUFBSSxNQUFNLENBQUM7QUFBQSxNQUNyQixHQUFHLFlBQVk7QUFBQTtBQUFBLE1BRWYsVUFBMEJBLGtCQUFFLFNBQVNFLElBQUcsR0FBRztBQUN6QyxlQUFPLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxDQUFBLEdBQUksS0FBSyxTQUFTQSxJQUFHLEtBQUssUUFBUSxLQUFLLGFBQWEsS0FBSyxPQUFPLE9BQUksS0FBSyxXQUFXLEtBQUssU0FBUyxHQUFHLEtBQUssU0FBUyxLQUFLLFVBQVUsS0FBSyxRQUFRLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsS0FBSyxTQUFTO0FBQUEsVUFDbk8sWUFBWTtBQUFBLFVBQ1osY0FBYztBQUFBLFVBQ2QsV0FBVztBQUFBLFVBQ1gsYUFBYTtBQUFBLFFBQ3ZCLEdBQVcsS0FBSyxRQUFRLFdBQVcsS0FBSyxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsR0FBRztBQUFBLE1BQzNFLEdBQUcsVUFBVTtBQUFBO0FBQUEsTUFFYixPQUF1QkYsa0JBQUUsV0FBVztBQUNsQyxZQUFJRSxLQUFJLEtBQUssT0FBTyxDQUFDO0FBQ3JCLGFBQUssVUFBVUEsSUFBRyxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssU0FBU0EsSUFBRyxLQUFLLFdBQVdBO0FBQ2pGLFlBQUksSUFBSUEsR0FBRSxNQUFNLGlCQUFpQjtBQUNqQyxlQUFPLEtBQUssS0FBSyxZQUFZLEtBQUssT0FBTyxlQUFlLEtBQUssT0FBTyxlQUFlLEtBQUssUUFBUSxVQUFVLEtBQUssT0FBTyxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsS0FBSyxPQUFPLE1BQU0sQ0FBQyxHQUFHQTtBQUFBLE1BQ3hLLEdBQUcsT0FBTztBQUFBO0FBQUEsTUFFVixPQUF1QkYsa0JBQUUsU0FBU0UsSUFBRztBQUNuQyxZQUFJLElBQUlBLEdBQUUsUUFBUSxJQUFJQSxHQUFFLE1BQU0sZUFBZTtBQUM3QyxhQUFLLFNBQVNBLEtBQUksS0FBSyxRQUFRLEtBQUssU0FBUyxLQUFLLE9BQU8sT0FBTyxHQUFHLEtBQUssT0FBTyxTQUFTLENBQUMsR0FBRyxLQUFLLFVBQVU7QUFDM0csWUFBSSxJQUFJLEtBQUssTUFBTSxNQUFNLGVBQWU7QUFDeEMsYUFBSyxRQUFRLEtBQUssTUFBTSxPQUFPLEdBQUcsS0FBSyxNQUFNLFNBQVMsQ0FBQyxHQUFHLEtBQUssVUFBVSxLQUFLLFFBQVEsT0FBTyxHQUFHLEtBQUssUUFBUSxTQUFTLENBQUMsR0FBRyxFQUFFLFNBQVMsTUFBTSxLQUFLLFlBQVksRUFBRSxTQUFTO0FBQ3ZLLFlBQUksSUFBSSxLQUFLLE9BQU87QUFDcEIsZUFBTyxLQUFLLFNBQVM7QUFBQSxVQUNuQixZQUFZLEtBQUssT0FBTztBQUFBLFVBQ3hCLFdBQVcsS0FBSyxXQUFXO0FBQUEsVUFDM0IsY0FBYyxLQUFLLE9BQU87QUFBQSxVQUMxQixhQUFhLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxLQUFLLE9BQU8sZUFBZSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxLQUFLLE9BQU8sZUFBZTtBQUFBLFFBQzdKLEdBQVcsS0FBSyxRQUFRLFdBQVcsS0FBSyxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxLQUFLLE9BQU8sUUFBUTtBQUFBLE1BQ3BILEdBQUcsT0FBTztBQUFBO0FBQUEsTUFFVixNQUFzQkYsa0JBQUUsV0FBVztBQUNqQyxlQUFPLEtBQUssUUFBUSxNQUFJO0FBQUEsTUFDMUIsR0FBRyxNQUFNO0FBQUE7QUFBQSxNQUVULFFBQXdCQSxrQkFBRSxXQUFXO0FBQ25DLFlBQUksS0FBSyxRQUFRO0FBQ2YsZUFBSyxhQUFhO0FBQUE7QUFFbEIsaUJBQU8sS0FBSyxXQUFXLDRCQUE0QixLQUFLLFdBQVcsS0FBSztBQUFBLElBQzlFLEtBQUssZ0JBQWdCO0FBQUEsWUFDYixNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxNQUFNLEtBQUs7QUFBQSxVQUN2QixDQUFXO0FBQ0gsZUFBTztBQUFBLE1BQ1QsR0FBRyxRQUFRO0FBQUE7QUFBQSxNQUVYLE1BQXNCQSxrQkFBRSxTQUFTRSxJQUFHO0FBQ2xDLGFBQUssTUFBTSxLQUFLLE1BQU0sTUFBTUEsRUFBQyxDQUFDO0FBQUEsTUFDaEMsR0FBRyxNQUFNO0FBQUE7QUFBQSxNQUVULFdBQTJCRixrQkFBRSxXQUFXO0FBQ3RDLFlBQUlFLEtBQUksS0FBSyxRQUFRLE9BQU8sR0FBRyxLQUFLLFFBQVEsU0FBUyxLQUFLLE1BQU0sTUFBTTtBQUN0RSxnQkFBUUEsR0FBRSxTQUFTLEtBQUssUUFBUSxNQUFNQSxHQUFFLE9BQU8sR0FBRyxFQUFFLFFBQVEsT0FBTyxFQUFFO0FBQUEsTUFDdkUsR0FBRyxXQUFXO0FBQUE7QUFBQSxNQUVkLGVBQStCRixrQkFBRSxXQUFXO0FBQzFDLFlBQUlFLEtBQUksS0FBSztBQUNiLGVBQU9BLEdBQUUsU0FBUyxPQUFPQSxNQUFLLEtBQUssT0FBTyxPQUFPLEdBQUcsS0FBS0EsR0FBRSxNQUFNLEtBQUtBLEdBQUUsT0FBTyxHQUFHLEVBQUUsS0FBS0EsR0FBRSxTQUFTLEtBQUssUUFBUSxLQUFLLFFBQVEsT0FBTyxFQUFFO0FBQUEsTUFDekksR0FBRyxlQUFlO0FBQUE7QUFBQSxNQUVsQixjQUE4QkYsa0JBQUUsV0FBVztBQUN6QyxZQUFJRSxLQUFJLEtBQUssVUFBUyxHQUFJLElBQUksSUFBSSxNQUFNQSxHQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssR0FBRztBQUM5RCxlQUFPQSxLQUFJLEtBQUssa0JBQWtCO0FBQUEsSUFDdEMsSUFBSTtBQUFBLE1BQ0YsR0FBRyxjQUFjO0FBQUE7QUFBQSxNQUVqQixZQUE0QkYsa0JBQUUsU0FBU0UsSUFBRyxHQUFHO0FBQzNDLFlBQUksR0FBRyxHQUFHO0FBQ1YsWUFBSSxLQUFLLFFBQVEsb0JBQW9CLElBQUk7QUFBQSxVQUN2QyxVQUFVLEtBQUs7QUFBQSxVQUNmLFFBQVE7QUFBQSxZQUNOLFlBQVksS0FBSyxPQUFPO0FBQUEsWUFDeEIsV0FBVyxLQUFLO0FBQUEsWUFDaEIsY0FBYyxLQUFLLE9BQU87QUFBQSxZQUMxQixhQUFhLEtBQUssT0FBTztBQUFBLFVBQ3JDO0FBQUEsVUFDVSxRQUFRLEtBQUs7QUFBQSxVQUNiLE9BQU8sS0FBSztBQUFBLFVBQ1osU0FBUyxLQUFLO0FBQUEsVUFDZCxTQUFTLEtBQUs7QUFBQSxVQUNkLFFBQVEsS0FBSztBQUFBLFVBQ2IsUUFBUSxLQUFLO0FBQUEsVUFDYixPQUFPLEtBQUs7QUFBQSxVQUNaLFFBQVEsS0FBSztBQUFBLFVBQ2IsSUFBSSxLQUFLO0FBQUEsVUFDVCxnQkFBZ0IsS0FBSyxlQUFlLE1BQU0sQ0FBQztBQUFBLFVBQzNDLE1BQU0sS0FBSztBQUFBLFFBQ3JCLEdBQVcsS0FBSyxRQUFRLFdBQVcsRUFBRSxPQUFPLFFBQVEsS0FBSyxPQUFPLE1BQU0sTUFBTSxDQUFDLEtBQUssSUFBSUEsR0FBRSxDQUFDLEVBQUUsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLEtBQUssWUFBWSxFQUFFLFNBQVMsS0FBSyxTQUFTO0FBQUEsVUFDM0osWUFBWSxLQUFLLE9BQU87QUFBQSxVQUN4QixXQUFXLEtBQUssV0FBVztBQUFBLFVBQzNCLGNBQWMsS0FBSyxPQUFPO0FBQUEsVUFDMUIsYUFBYSxJQUFJLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxNQUFNLFFBQVEsRUFBRSxDQUFDLEVBQUUsU0FBUyxLQUFLLE9BQU8sY0FBY0EsR0FBRSxDQUFDLEVBQUU7QUFBQSxRQUMvSCxHQUFXLEtBQUssVUFBVUEsR0FBRSxDQUFDLEdBQUcsS0FBSyxTQUFTQSxHQUFFLENBQUMsR0FBRyxLQUFLLFVBQVVBLElBQUcsS0FBSyxTQUFTLEtBQUssT0FBTyxRQUFRLEtBQUssUUFBUSxXQUFXLEtBQUssT0FBTyxRQUFRLENBQUMsS0FBSyxRQUFRLEtBQUssVUFBVSxLQUFLLE1BQU0sSUFBSSxLQUFLLFFBQVEsT0FBSSxLQUFLLGFBQWEsT0FBSSxLQUFLLFNBQVMsS0FBSyxPQUFPLE1BQU1BLEdBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxLQUFLLFdBQVdBLEdBQUUsQ0FBQyxHQUFHLElBQUksS0FBSyxjQUFjLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxHQUFHLEtBQUssZUFBZSxLQUFLLGVBQWUsU0FBUyxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsS0FBSyxXQUFXLEtBQUssT0FBTyxRQUFLO0FBQ3piLGlCQUFPO0FBQ1QsWUFBSSxLQUFLLFlBQVk7QUFDbkIsbUJBQVMsS0FBSztBQUNaLGlCQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDZixpQkFBTztBQUFBLFFBQ1Q7QUFDQSxlQUFPO0FBQUEsTUFDVCxHQUFHLFlBQVk7QUFBQTtBQUFBLE1BRWYsTUFBc0JGLGtCQUFFLFdBQVc7QUFDakMsWUFBSSxLQUFLO0FBQ1AsaUJBQU8sS0FBSztBQUNkLGFBQUssV0FBVyxLQUFLLE9BQU87QUFDNUIsWUFBSUUsSUFBRyxHQUFHLEdBQUc7QUFDYixhQUFLLFVBQVUsS0FBSyxTQUFTLElBQUksS0FBSyxRQUFRO0FBQzlDLGlCQUFTLElBQUksS0FBSyxpQkFBaUIsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRO0FBQ3RELGNBQUksSUFBSSxLQUFLLE9BQU8sTUFBTSxLQUFLLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUztBQUNuRixnQkFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssUUFBUSxpQkFBaUI7QUFDOUMsa0JBQUlBLEtBQUksS0FBSyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0EsT0FBTTtBQUN0Qyx1QkFBT0E7QUFDVCxrQkFBSSxLQUFLLFlBQVk7QUFDbkIsb0JBQUk7QUFDSjtBQUFBLGNBQ0Y7QUFDRSx1QkFBTztBQUFBLFlBQ1gsV0FBVyxDQUFDLEtBQUssUUFBUTtBQUN2QjtBQUFBLFVBQ0o7QUFDRixlQUFPLEtBQUtBLEtBQUksS0FBSyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0EsT0FBTSxRQUFLQSxLQUFJLFNBQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyw0QkFBNEIsS0FBSyxXQUFXLEtBQUs7QUFBQSxJQUNwSyxLQUFLLGdCQUFnQjtBQUFBLFVBQ2YsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsTUFBTSxLQUFLO0FBQUEsUUFDckIsQ0FBUztBQUFBLE1BQ0gsR0FBRyxNQUFNO0FBQUE7QUFBQSxNQUVULEtBQXFCRixrQkFBRSxXQUFXO0FBQ2hDLFlBQUksSUFBSSxLQUFLLEtBQUk7QUFDakIsZUFBTyxLQUFLLEtBQUssSUFBRztBQUFBLE1BQ3RCLEdBQUcsS0FBSztBQUFBO0FBQUEsTUFFUixPQUF1QkEsa0JBQUUsU0FBUyxHQUFHO0FBQ25DLGFBQUssZUFBZSxLQUFLLENBQUM7QUFBQSxNQUM1QixHQUFHLE9BQU87QUFBQTtBQUFBLE1BRVYsVUFBMEJBLGtCQUFFLFdBQVc7QUFDckMsWUFBSSxJQUFJLEtBQUssZUFBZSxTQUFTO0FBQ3JDLGVBQU8sSUFBSSxJQUFJLEtBQUssZUFBZSxRQUFRLEtBQUssZUFBZSxDQUFDO0FBQUEsTUFDbEUsR0FBRyxVQUFVO0FBQUE7QUFBQSxNQUViLGVBQStCQSxrQkFBRSxXQUFXO0FBQzFDLGVBQU8sS0FBSyxlQUFlLFVBQVUsS0FBSyxlQUFlLEtBQUssZUFBZSxTQUFTLENBQUMsSUFBSSxLQUFLLFdBQVcsS0FBSyxlQUFlLEtBQUssZUFBZSxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsS0FBSyxXQUFXLFFBQVE7QUFBQSxNQUNsTSxHQUFHLGVBQWU7QUFBQTtBQUFBLE1BRWxCLFVBQTBCQSxrQkFBRSxTQUFTLEdBQUc7QUFDdEMsZUFBTyxJQUFJLEtBQUssZUFBZSxTQUFTLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxLQUFLLGVBQWUsQ0FBQyxJQUFJO0FBQUEsTUFDbEcsR0FBRyxVQUFVO0FBQUE7QUFBQSxNQUViLFdBQTJCQSxrQkFBRSxTQUFTLEdBQUc7QUFDdkMsYUFBSyxNQUFNLENBQUM7QUFBQSxNQUNkLEdBQUcsV0FBVztBQUFBO0FBQUEsTUFFZCxnQkFBZ0NBLGtCQUFFLFdBQVc7QUFDM0MsZUFBTyxLQUFLLGVBQWU7QUFBQSxNQUM3QixHQUFHLGdCQUFnQjtBQUFBLE1BQ25CLFNBQVMsRUFBRSxvQkFBb0IsS0FBRTtBQUFBLE1BQ2pDLGVBQStCQSxrQkFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDcEQsZ0JBQVEsR0FBQztBQUFBLFVBQ1AsS0FBSztBQUNIO0FBQUEsVUFDRixLQUFLO0FBQ0g7QUFBQSxVQUNGLEtBQUs7QUFDSCxtQkFBTyxLQUFLLFNBQVEsR0FBSTtBQUFBLFVBQzFCLEtBQUs7QUFDSCxtQkFBTyxLQUFLLFNBQVEsR0FBSTtBQUFBLFVBQzFCLEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNIO0FBQUEsVUFDRixLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTyxLQUFLLFVBQVUsV0FBVyxHQUFHO0FBQUEsVUFDdEMsS0FBSztBQUNILG1CQUFPLEtBQUssU0FBUSxHQUFJO0FBQUEsVUFDMUIsS0FBSztBQUNILG1CQUFPLEtBQUssVUFBVSxXQUFXLEdBQUc7QUFBQSxVQUN0QyxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUk7QUFBQSxVQUMxQixLQUFLO0FBQ0gsaUJBQUssVUFBVSxxQkFBcUI7QUFDcEM7QUFBQSxVQUNGLEtBQUs7QUFDSCxpQkFBSyxTQUFRO0FBQ2I7QUFBQSxVQUNGLEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPLEtBQUssVUFBVSxXQUFXLEdBQUc7QUFBQSxVQUN0QyxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxVQUFVLFdBQVcsR0FBRztBQUFBLFVBQ3RDLEtBQUs7QUFDSCxtQkFBTyxLQUFLLFVBQVUsZ0JBQWdCLEdBQUc7QUFBQSxVQUMzQyxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTyxLQUFLLFVBQVUsTUFBTSxHQUFHO0FBQUEsVUFDakMsS0FBSztBQUNILG1CQUFPLEtBQUssVUFBVSxNQUFNLEdBQUc7QUFBQSxVQUNqQyxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxVQUFVLFlBQVksR0FBRztBQUFBLFVBQ3ZDLEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPLEtBQUssU0FBUSxHQUFJO0FBQUEsVUFDMUIsS0FBSztBQUNILGlCQUFLLFNBQVE7QUFDYjtBQUFBLFVBQ0YsS0FBSztBQUNILGlCQUFLLFVBQVUsUUFBUTtBQUN2QjtBQUFBLFVBQ0YsS0FBSztBQUNILGlCQUFLLFNBQVE7QUFDYjtBQUFBLFVBQ0YsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNIO0FBQUEsVUFDRixLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFFBQ25CO0FBQUEsTUFDTSxHQUFHLFdBQVc7QUFBQSxNQUNkLE9BQU8sQ0FBQyx3QkFBd0IsdUJBQXVCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGtCQUFrQixpQkFBaUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDBCQUEwQixZQUFZLGdCQUFnQix3QkFBd0IsbUJBQW1CLGlDQUFpQyxrQkFBa0Isa0JBQWtCLFlBQVksYUFBYSxnQkFBZ0IsZUFBZSxZQUFZLHNDQUFzQyxZQUFZLGtMQUFrTCxhQUFhLGFBQWEsZUFBZSxZQUFZLFlBQVksbUJBQW1CLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLGNBQWMsWUFBWSxXQUFXLFdBQVcsZ0JBQWdCLGFBQWEsV0FBVyxTQUFTO0FBQUEsTUFDeDdCLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsV0FBVyxLQUFFLEdBQUksTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLFdBQVcsS0FBRSxHQUFJLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxXQUFXLFFBQU0sV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxXQUFXLEtBQUUsR0FBSSxxQkFBcUIsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsV0FBVyxNQUFFLEdBQUksV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsV0FBVyxNQUFFLEdBQUksV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsV0FBVyxNQUFFLEdBQUksT0FBTyxFQUFFLE9BQU8sQ0FBQSxHQUFJLFdBQVcsTUFBRSxHQUFJLFdBQVcsRUFBRSxPQUFPLENBQUEsR0FBSSxXQUFXLE1BQUUsR0FBSSxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLFdBQVcsTUFBRSxHQUFJLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLFdBQVcsS0FBRSxFQUFFO0FBQUEsSUFDbm9DO0FBQ0ksV0FBT0M7QUFBQSxFQUNULEdBQUM7QUFDRCxJQUFFLFFBQVE7QUFDVixXQUFTLElBQUk7QUFDWCxTQUFLLEtBQUssQ0FBQTtBQUFBLEVBQ1o7QUFDQSxTQUFPRCxFQUFFLEdBQUcsUUFBUSxHQUFHLEVBQUUsWUFBWSxHQUFHLEVBQUUsU0FBUyxHQUFHLElBQUksRUFBQztBQUM3RCxHQUFDO0FBQ0QsR0FBRyxTQUFTO0FBQ1osSUFBSSxLQUFLO0FBQ1QsU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFPLEVBQUUsU0FBUztBQUNwQjtBQUNBQSxFQUFFLElBQUksV0FBVztBQUNqQixTQUFTLEdBQUcsR0FBRztBQUNiLFNBQU8sRUFBRSxTQUFTO0FBQ3BCO0FBQ0FBLEVBQUUsSUFBSSxnQkFBZ0I7QUFDdEIsU0FBUyxFQUFFLEdBQUc7QUFDWixTQUFPLEVBQUUsU0FBUztBQUNwQjtBQUNBQSxFQUFFLEdBQUcsa0JBQWtCO0FBQ3ZCLElBQUksR0FBRyxNQUFNLElBQUksTUFBTTtBQUFBLEVBQ3JCLFlBQVlKLElBQUc7QUFDYixTQUFLLGNBQWNBO0FBQUEsRUFDckI7QUFBQSxFQUNBLGdCQUFnQkEsSUFBRyxHQUFHO0FBQ3BCLFFBQUksQ0FBQyxLQUFLO0FBQ1IsYUFBTztBQUFBLFFBQ0wsT0FBT0EsR0FBRSxPQUFPLENBQUMsR0FBRyxNQUFNLEtBQUssSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSTtBQUFBLFFBQ3RELFFBQVE7QUFBQSxNQUNoQjtBQUNJLFVBQU0sSUFBSTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ2QsR0FBTyxJQUFJLEtBQUssWUFBWSxPQUFPLEdBQUcsRUFBRSxLQUFLLGNBQWMsUUFBUSxFQUFFLEtBQUssYUFBYSxDQUFDO0FBQ3BGLGVBQVcsS0FBS0EsSUFBRztBQUNqQixZQUFNLElBQUlPLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxHQUFHTCxLQUFJLElBQUksRUFBRSxTQUFTO0FBQzFFLFFBQUUsUUFBUSxLQUFLLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsS0FBSyxJQUFJLEVBQUUsUUFBUUEsRUFBQztBQUFBLElBQ2pFO0FBQ0EsV0FBTyxFQUFFLE9BQU0sR0FBSTtBQUFBLEVBQ3JCO0FBQ0YsR0FBR0UsRUFBRSxHQUFHLGlDQUFpQyxHQUFHLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLE1BQU0sSUFBSSxNQUFNO0FBQUEsRUFDckYsWUFBWUosSUFBRyxHQUFHLEdBQUcsR0FBRztBQUN0QixTQUFLLGFBQWFBLElBQUcsS0FBSyxRQUFRLEdBQUcsS0FBSywwQkFBMEIsR0FBRyxLQUFLLGtCQUFrQixHQUFHLEtBQUssZUFBZSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLFFBQVEsRUFBQyxHQUFJLEtBQUssZUFBZSxRQUFRLEtBQUssWUFBWSxPQUFJLEtBQUssWUFBWSxPQUFJLEtBQUssV0FBVyxPQUFJLEtBQUssZUFBZSxPQUFJLEtBQUssZUFBZSxHQUFHLEtBQUssa0JBQWtCLEdBQUcsS0FBSyxrQkFBa0IsR0FBRyxLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLGVBQWUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLEVBQUMsR0FBSSxLQUFLLGVBQWU7QUFBQSxFQUM1YjtBQUFBLEVBQ0EsU0FBU0EsSUFBRztBQUNWLFNBQUssUUFBUUEsSUFBRyxLQUFLLGlCQUFpQixVQUFVLEtBQUssaUJBQWlCLFVBQVUsS0FBSyxhQUFhLFNBQVNBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsSUFBSSxLQUFLLGFBQWEsUUFBUUEsR0FBRSxDQUFDLElBQUlBLEdBQUUsQ0FBQyxHQUFHLEtBQUssaUJBQWdCO0FBQUEsRUFDdkw7QUFBQSxFQUNBLFdBQVc7QUFDVCxXQUFPLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLGNBQWMsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLFlBQVk7QUFBQSxFQUM5RTtBQUFBLEVBQ0EsZ0JBQWdCQSxJQUFHO0FBQ2pCLFNBQUssZUFBZUEsSUFBRyxLQUFLLFNBQVMsS0FBSyxLQUFLO0FBQUEsRUFDakQ7QUFBQSxFQUNBLGtCQUFrQjtBQUNoQixVQUFNQSxLQUFJLEtBQUssU0FBUTtBQUN2QixXQUFPLEtBQUssSUFBSUEsR0FBRSxDQUFDLElBQUlBLEdBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxjQUFhLEVBQUc7QUFBQSxFQUN0RDtBQUFBLEVBQ0Esc0JBQXNCO0FBQ3BCLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUNBLG9CQUFvQjtBQUNsQixXQUFPLEtBQUssd0JBQXdCO0FBQUEsTUFDbEMsS0FBSyxjQUFhLEVBQUcsSUFBSSxDQUFDQSxPQUFNQSxHQUFFLFVBQVU7QUFBQSxNQUM1QyxLQUFLLFdBQVc7QUFBQSxJQUN0QjtBQUFBLEVBQ0U7QUFBQSxFQUNBLG1DQUFtQztBQUNqQyxTQUFLLEtBQUssZ0JBQWUsSUFBSyxLQUFLLGVBQWUsTUFBTSxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssS0FBSyxnQkFBZSxJQUFLLENBQUMsSUFBSSxLQUFLLGlCQUFnQjtBQUFBLEVBQ2pKO0FBQUEsRUFDQSxrQ0FBa0NBLElBQUc7QUFDbkMsUUFBSSxJQUFJQSxHQUFFO0FBQ1YsUUFBSSxLQUFLLFdBQVcsZ0JBQWdCLElBQUksS0FBSyxXQUFXLGtCQUFrQixLQUFLLEtBQUssV0FBVyxlQUFlLEtBQUssZUFBZSxPQUFLLEtBQUssV0FBVyxXQUFXO0FBQ2hLLFlBQU0sSUFBSSxLQUFLLGtCQUFpQixHQUFJLElBQUksS0FBS0EsR0FBRTtBQUMvQyxXQUFLLGVBQWUsS0FBSyxJQUFJLEVBQUUsUUFBUSxHQUFHLENBQUM7QUFDM0MsWUFBTSxJQUFJLEVBQUUsU0FBUyxLQUFLLFdBQVcsZUFBZTtBQUNwRCxXQUFLLGtCQUFrQixFQUFFLFFBQVEsS0FBSyxNQUFNLEtBQUssR0FBRyxLQUFLLFlBQVk7QUFBQSxJQUN2RTtBQUNBLFFBQUksS0FBSyxXQUFXLFlBQVksS0FBSyxLQUFLLFdBQVcsZUFBZSxLQUFLLFdBQVcsTUFBSSxLQUFLLEtBQUssV0FBVyxhQUFhLEtBQUssV0FBVyxhQUFhLEtBQUssT0FBTztBQUNqSyxZQUFNLElBQUksS0FBSyx3QkFBd0I7QUFBQSxRQUNyQyxDQUFDLEtBQUssS0FBSztBQUFBLFFBQ1gsS0FBSyxXQUFXO0FBQUEsTUFDeEIsR0FBUyxJQUFJLEVBQUUsU0FBUyxLQUFLLFdBQVcsZUFBZTtBQUNqRCxXQUFLLGtCQUFrQixFQUFFLFFBQVEsS0FBSyxNQUFNLEtBQUssR0FBRyxLQUFLLFlBQVk7QUFBQSxJQUN2RTtBQUNBLFNBQUssYUFBYSxRQUFRQSxHQUFFLE9BQU8sS0FBSyxhQUFhLFNBQVNBLEdBQUUsU0FBUztBQUFBLEVBQzNFO0FBQUEsRUFDQSw4QkFBOEJBLElBQUc7QUFDL0IsUUFBSSxJQUFJQSxHQUFFO0FBQ1YsUUFBSSxLQUFLLFdBQVcsZ0JBQWdCLElBQUksS0FBSyxXQUFXLGtCQUFrQixLQUFLLEtBQUssV0FBVyxlQUFlLEtBQUssZUFBZSxPQUFLLEtBQUssV0FBVyxXQUFXO0FBQ2hLLFlBQU0sSUFBSSxLQUFLLGtCQUFpQixHQUFJLElBQUksS0FBS0EsR0FBRTtBQUMvQyxXQUFLLGVBQWUsS0FBSyxJQUFJLEVBQUUsU0FBUyxHQUFHLENBQUM7QUFDNUMsWUFBTSxJQUFJLEVBQUUsUUFBUSxLQUFLLFdBQVcsZUFBZTtBQUNuRCxXQUFLLE1BQU0sS0FBSyxHQUFHLEtBQUssWUFBWTtBQUFBLElBQ3RDO0FBQ0EsUUFBSSxLQUFLLFdBQVcsWUFBWSxLQUFLLEtBQUssV0FBVyxlQUFlLEtBQUssV0FBVyxNQUFJLEtBQUssS0FBSyxXQUFXLGFBQWEsS0FBSyxXQUFXLGFBQWEsS0FBSyxPQUFPO0FBQ2pLLFlBQU0sSUFBSSxLQUFLLHdCQUF3QjtBQUFBLFFBQ3JDLENBQUMsS0FBSyxLQUFLO0FBQUEsUUFDWCxLQUFLLFdBQVc7QUFBQSxNQUN4QixHQUFTLElBQUksRUFBRSxTQUFTLEtBQUssV0FBVyxlQUFlO0FBQ2pELFdBQUssa0JBQWtCLEVBQUUsUUFBUSxLQUFLLE1BQU0sS0FBSyxHQUFHLEtBQUssWUFBWTtBQUFBLElBQ3ZFO0FBQ0EsU0FBSyxhQUFhLFFBQVFBLEdBQUUsUUFBUSxHQUFHLEtBQUssYUFBYSxTQUFTQSxHQUFFO0FBQUEsRUFDdEU7QUFBQSxFQUNBLGVBQWVBLElBQUc7QUFDaEIsV0FBTyxLQUFLLGlCQUFpQixVQUFVLEtBQUssaUJBQWlCLFVBQVUsS0FBSyw4QkFBOEJBLEVBQUMsSUFBSSxLQUFLLGtDQUFrQ0EsRUFBQyxHQUFHLEtBQUssb0JBQW9CO0FBQUEsTUFDakwsT0FBTyxLQUFLLGFBQWE7QUFBQSxNQUN6QixRQUFRLEtBQUssYUFBYTtBQUFBLElBQ2hDO0FBQUEsRUFDRTtBQUFBLEVBQ0EsaUJBQWlCQSxJQUFHO0FBQ2xCLFNBQUssYUFBYSxJQUFJQSxHQUFFLEdBQUcsS0FBSyxhQUFhLElBQUlBLEdBQUU7QUFBQSxFQUNyRDtBQUFBLEVBQ0EsaUNBQWlDO0FBQy9CLFVBQU1BLEtBQUksQ0FBQTtBQUNWLFFBQUksS0FBSyxjQUFjO0FBQ3JCLFlBQU0sSUFBSSxLQUFLLGFBQWEsSUFBSSxLQUFLLGFBQWEsUUFBUSxLQUFLLFdBQVcsZ0JBQWdCO0FBQzFGLE1BQUFBLEdBQUUsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sWUFBWSxDQUFDLGFBQWEsWUFBWTtBQUFBLFFBQ3RDLE1BQU07QUFBQSxVQUNKO0FBQUEsWUFDRSxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssYUFBYSxJQUFJLEtBQUssYUFBYSxNQUFNO0FBQUEsWUFDNUYsWUFBWSxLQUFLLGdCQUFnQjtBQUFBLFlBQ2pDLGFBQWEsS0FBSyxXQUFXO0FBQUEsVUFDekM7QUFBQSxRQUNBO0FBQUEsTUFDQSxDQUFPO0FBQUEsSUFDSDtBQUNBLFFBQUksS0FBSyxhQUFhQSxHQUFFLEtBQUs7QUFBQSxNQUMzQixNQUFNO0FBQUEsTUFDTixZQUFZLENBQUMsYUFBYSxPQUFPO0FBQUEsTUFDakMsTUFBTSxLQUFLLGNBQWEsRUFBRyxJQUFJLENBQUMsT0FBTztBQUFBLFFBQ3JDLE1BQU0sRUFBRSxTQUFRO0FBQUEsUUFDaEIsR0FBRyxLQUFLLGFBQWEsSUFBSSxLQUFLLGFBQWEsU0FBUyxLQUFLLFlBQVksS0FBSyxXQUFXLGVBQWUsTUFBTSxLQUFLLFdBQVcsS0FBSyxXQUFXLGFBQWEsTUFBTSxLQUFLLGVBQWUsS0FBSyxXQUFXLGdCQUFnQjtBQUFBLFFBQ2pOLEdBQUcsS0FBSyxjQUFjLENBQUM7QUFBQSxRQUN2QixNQUFNLEtBQUssZ0JBQWdCO0FBQUEsUUFDM0IsVUFBVSxLQUFLLFdBQVc7QUFBQSxRQUMxQixVQUFVO0FBQUEsUUFDVixhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsTUFDdkIsRUFBUTtBQUFBLElBQ1IsQ0FBSyxHQUFHLEtBQUssVUFBVTtBQUNqQixZQUFNLElBQUksS0FBSyxhQUFhLElBQUksS0FBSyxhQUFhLFNBQVMsS0FBSyxlQUFlLEtBQUssV0FBVyxnQkFBZ0I7QUFDL0csTUFBQUEsR0FBRSxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixZQUFZLENBQUMsYUFBYSxPQUFPO0FBQUEsUUFDakMsTUFBTSxLQUFLLGNBQWEsRUFBRyxJQUFJLENBQUMsT0FBTztBQUFBLFVBQ3JDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxXQUFXLFVBQVUsSUFBSSxLQUFLLGNBQWMsQ0FBQyxDQUFDO0FBQUEsVUFDbEcsWUFBWSxLQUFLLGdCQUFnQjtBQUFBLFVBQ2pDLGFBQWEsS0FBSyxXQUFXO0FBQUEsUUFDdkMsRUFBVTtBQUFBLE1BQ1YsQ0FBTztBQUFBLElBQ0g7QUFDQSxXQUFPLEtBQUssYUFBYUEsR0FBRSxLQUFLO0FBQUEsTUFDOUIsTUFBTTtBQUFBLE1BQ04sWUFBWSxDQUFDLGFBQWEsT0FBTztBQUFBLE1BQ2pDLE1BQU07QUFBQSxRQUNKO0FBQUEsVUFDRSxNQUFNLEtBQUs7QUFBQSxVQUNYLEdBQUcsS0FBSyxhQUFhLElBQUksS0FBSyxXQUFXO0FBQUEsVUFDekMsR0FBRyxLQUFLLGFBQWEsSUFBSSxLQUFLLGFBQWEsU0FBUztBQUFBLFVBQ3BELE1BQU0sS0FBSyxnQkFBZ0I7QUFBQSxVQUMzQixVQUFVLEtBQUssV0FBVztBQUFBLFVBQzFCLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLGVBQWU7QUFBQSxRQUN6QjtBQUFBLE1BQ0E7QUFBQSxJQUNBLENBQUssR0FBR0E7QUFBQSxFQUNOO0FBQUEsRUFDQSxtQ0FBbUM7QUFDakMsVUFBTUEsS0FBSSxDQUFBO0FBQ1YsUUFBSSxLQUFLLGNBQWM7QUFDckIsWUFBTSxJQUFJLEtBQUssYUFBYSxJQUFJLEtBQUssV0FBVyxnQkFBZ0I7QUFDaEUsTUFBQUEsR0FBRSxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixZQUFZLENBQUMsZUFBZSxXQUFXO0FBQUEsUUFDdkMsTUFBTTtBQUFBLFVBQ0o7QUFBQSxZQUNFLE1BQU0sS0FBSyxLQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLGFBQWEsSUFBSSxLQUFLLGFBQWEsS0FBSyxJQUFJLENBQUM7QUFBQSxZQUMzRixZQUFZLEtBQUssZ0JBQWdCO0FBQUEsWUFDakMsYUFBYSxLQUFLLFdBQVc7QUFBQSxVQUN6QztBQUFBLFFBQ0E7QUFBQSxNQUNBLENBQU87QUFBQSxJQUNIO0FBQ0EsUUFBSSxLQUFLLGFBQWFBLEdBQUUsS0FBSztBQUFBLE1BQzNCLE1BQU07QUFBQSxNQUNOLFlBQVksQ0FBQyxlQUFlLE9BQU87QUFBQSxNQUNuQyxNQUFNLEtBQUssY0FBYSxFQUFHLElBQUksQ0FBQyxPQUFPO0FBQUEsUUFDckMsTUFBTSxFQUFFLFNBQVE7QUFBQSxRQUNoQixHQUFHLEtBQUssY0FBYyxDQUFDO0FBQUEsUUFDdkIsR0FBRyxLQUFLLGFBQWEsSUFBSSxLQUFLLFdBQVcsZ0JBQWdCLEtBQUssV0FBVyxLQUFLLFdBQVcsYUFBYSxNQUFNLEtBQUssZUFBZSxLQUFLLFdBQVcsZ0JBQWdCO0FBQUEsUUFDaEssTUFBTSxLQUFLLGdCQUFnQjtBQUFBLFFBQzNCLFVBQVUsS0FBSyxXQUFXO0FBQUEsUUFDMUIsVUFBVTtBQUFBLFFBQ1YsYUFBYTtBQUFBLFFBQ2IsZUFBZTtBQUFBLE1BQ3ZCLEVBQVE7QUFBQSxJQUNSLENBQUssR0FBRyxLQUFLLFVBQVU7QUFDakIsWUFBTSxJQUFJLEtBQUssYUFBYSxLQUFLLEtBQUssZUFBZSxLQUFLLFdBQVcsZ0JBQWdCO0FBQ3JGLE1BQUFBLEdBQUUsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sWUFBWSxDQUFDLGVBQWUsT0FBTztBQUFBLFFBQ25DLE1BQU0sS0FBSyxjQUFhLEVBQUcsSUFBSSxDQUFDLE9BQU87QUFBQSxVQUNyQyxNQUFNLEtBQUssS0FBSyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLFdBQVcsVUFBVTtBQUFBLFVBQ2xHLFlBQVksS0FBSyxnQkFBZ0I7QUFBQSxVQUNqQyxhQUFhLEtBQUssV0FBVztBQUFBLFFBQ3ZDLEVBQVU7QUFBQSxNQUNWLENBQU87QUFBQSxJQUNIO0FBQ0EsV0FBTyxLQUFLLGFBQWFBLEdBQUUsS0FBSztBQUFBLE1BQzlCLE1BQU07QUFBQSxNQUNOLFlBQVksQ0FBQyxlQUFlLE9BQU87QUFBQSxNQUNuQyxNQUFNO0FBQUEsUUFDSjtBQUFBLFVBQ0UsTUFBTSxLQUFLO0FBQUEsVUFDWCxHQUFHLEtBQUssTUFBTSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxLQUFLO0FBQUEsVUFDckQsR0FBRyxLQUFLLGFBQWEsSUFBSSxLQUFLLGFBQWEsU0FBUyxLQUFLLFdBQVcsZUFBZSxLQUFLO0FBQUEsVUFDeEYsTUFBTSxLQUFLLGdCQUFnQjtBQUFBLFVBQzNCLFVBQVUsS0FBSyxXQUFXO0FBQUEsVUFDMUIsVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsZUFBZTtBQUFBLFFBQ3pCO0FBQUEsTUFDQTtBQUFBLElBQ0EsQ0FBSyxHQUFHQTtBQUFBLEVBQ047QUFBQSxFQUNBLGdDQUFnQztBQUM5QixVQUFNQSxLQUFJLENBQUE7QUFDVixRQUFJLEtBQUssY0FBYztBQUNyQixZQUFNLElBQUksS0FBSyxhQUFhLElBQUksS0FBSyxhQUFhLFNBQVMsS0FBSyxXQUFXLGdCQUFnQjtBQUMzRixNQUFBQSxHQUFFLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFlBQVksQ0FBQyxZQUFZLFdBQVc7QUFBQSxRQUNwQyxNQUFNO0FBQUEsVUFDSjtBQUFBLFlBQ0UsTUFBTSxLQUFLLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssYUFBYSxJQUFJLEtBQUssYUFBYSxLQUFLLElBQUksQ0FBQztBQUFBLFlBQzNGLFlBQVksS0FBSyxnQkFBZ0I7QUFBQSxZQUNqQyxhQUFhLEtBQUssV0FBVztBQUFBLFVBQ3pDO0FBQUEsUUFDQTtBQUFBLE1BQ0EsQ0FBTztBQUFBLElBQ0g7QUFDQSxRQUFJLEtBQUssYUFBYUEsR0FBRSxLQUFLO0FBQUEsTUFDM0IsTUFBTTtBQUFBLE1BQ04sWUFBWSxDQUFDLFlBQVksT0FBTztBQUFBLE1BQ2hDLE1BQU0sS0FBSyxjQUFhLEVBQUcsSUFBSSxDQUFDLE9BQU87QUFBQSxRQUNyQyxNQUFNLEVBQUUsU0FBUTtBQUFBLFFBQ2hCLEdBQUcsS0FBSyxjQUFjLENBQUM7QUFBQSxRQUN2QixHQUFHLEtBQUssYUFBYSxLQUFLLEtBQUssWUFBWSxLQUFLLGtCQUFrQixLQUFLLFdBQVcsZUFBZSxJQUFJLEtBQUssS0FBSyxXQUFXO0FBQUEsUUFDMUgsTUFBTSxLQUFLLGdCQUFnQjtBQUFBLFFBQzNCLFVBQVUsS0FBSyxXQUFXO0FBQUEsUUFDMUIsVUFBVTtBQUFBLFFBQ1YsYUFBYTtBQUFBLFFBQ2IsZUFBZTtBQUFBLE1BQ3ZCLEVBQVE7QUFBQSxJQUNSLENBQUssR0FBRyxLQUFLLFVBQVU7QUFDakIsWUFBTSxJQUFJLEtBQUssYUFBYTtBQUM1QixNQUFBQSxHQUFFLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFlBQVksQ0FBQyxZQUFZLE9BQU87QUFBQSxRQUNoQyxNQUFNLEtBQUssY0FBYSxFQUFHLElBQUksQ0FBQyxPQUFPO0FBQUEsVUFDckMsTUFBTSxLQUFLLEtBQUssY0FBYyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssYUFBYSxVQUFVLEtBQUssZUFBZSxLQUFLLFdBQVcsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLGNBQWMsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLGFBQWEsU0FBUyxLQUFLLFdBQVcsY0FBYyxLQUFLLGVBQWUsS0FBSyxXQUFXLGdCQUFnQixFQUFFO0FBQUEsVUFDNVEsWUFBWSxLQUFLLGdCQUFnQjtBQUFBLFVBQ2pDLGFBQWEsS0FBSyxXQUFXO0FBQUEsUUFDdkMsRUFBVTtBQUFBLE1BQ1YsQ0FBTztBQUFBLElBQ0g7QUFDQSxXQUFPLEtBQUssYUFBYUEsR0FBRSxLQUFLO0FBQUEsTUFDOUIsTUFBTTtBQUFBLE1BQ04sWUFBWSxDQUFDLFlBQVksT0FBTztBQUFBLE1BQ2hDLE1BQU07QUFBQSxRQUNKO0FBQUEsVUFDRSxNQUFNLEtBQUs7QUFBQSxVQUNYLEdBQUcsS0FBSyxhQUFhLElBQUksS0FBSyxhQUFhLFFBQVE7QUFBQSxVQUNuRCxHQUFHLEtBQUssYUFBYSxJQUFJLEtBQUssV0FBVztBQUFBLFVBQ3pDLE1BQU0sS0FBSyxnQkFBZ0I7QUFBQSxVQUMzQixVQUFVLEtBQUssV0FBVztBQUFBLFVBQzFCLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLGVBQWU7QUFBQSxRQUN6QjtBQUFBLE1BQ0E7QUFBQSxJQUNBLENBQUssR0FBR0E7QUFBQSxFQUNOO0FBQUEsRUFDQSxzQkFBc0I7QUFDcEIsUUFBSSxLQUFLLGlCQUFpQjtBQUN4QixhQUFPLEtBQUssK0JBQThCO0FBQzVDLFFBQUksS0FBSyxpQkFBaUI7QUFDeEIsWUFBTSxNQUFNLDBDQUEwQztBQUN4RCxXQUFPLEtBQUssaUJBQWlCLFdBQVcsS0FBSyxpQ0FBZ0MsSUFBSyxLQUFLLGlCQUFpQixRQUFRLEtBQUssOEJBQTZCLElBQUssQ0FBQTtBQUFBLEVBQ3pKO0FBQ0YsR0FBR0ksRUFBRSxHQUFHLFVBQVUsR0FBRyxJQUFJLEdBQUcsTUFBTSxJQUFJLGNBQWMsR0FBRztBQUFBLEVBQ3JELFlBQVlKLElBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUN6QixVQUFNQSxJQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxhQUFhLEdBQUcsS0FBSyxRQUFRLEdBQUUsRUFBRyxPQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sS0FBSyxVQUFVO0FBQUEsRUFDekc7QUFBQSxFQUNBLFNBQVNBLElBQUc7QUFDVixVQUFNLFNBQVNBLEVBQUM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsbUJBQW1CO0FBQ2pCLFNBQUssUUFBUSxHQUFFLEVBQUcsT0FBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLEtBQUssU0FBUSxDQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUUsYUFBYSxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUdRLEVBQUcsTUFBTSwyQ0FBMkMsS0FBSyxZQUFZLEtBQUssU0FBUSxDQUFFO0FBQUEsRUFDbk07QUFBQSxFQUNBLGdCQUFnQjtBQUNkLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUNBLGNBQWNSLElBQUc7QUFDZixXQUFPLEtBQUssTUFBTUEsRUFBQyxLQUFLLEtBQUssU0FBUSxFQUFHLENBQUM7QUFBQSxFQUMzQztBQUNGLEdBQUdJLEVBQUUsR0FBRyxVQUFVLEdBQUcsSUFBSSxHQUFHLE1BQU0sSUFBSSxjQUFjLEdBQUc7QUFBQSxFQUNyRCxZQUFZSixJQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDekIsVUFBTUEsSUFBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssU0FBUyxHQUFHLEtBQUssUUFBUVMsR0FBRSxFQUFHLE9BQU8sS0FBSyxNQUFNLEVBQUUsTUFBTSxLQUFLLFVBQVU7QUFBQSxFQUNqRztBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2QsV0FBTyxLQUFLLE1BQU0sTUFBSztBQUFBLEVBQ3pCO0FBQUEsRUFDQSxtQkFBbUI7QUFDakIsVUFBTVQsS0FBSSxDQUFDLEdBQUcsS0FBSyxNQUFNO0FBQ3pCLFNBQUssaUJBQWlCLFVBQVVBLEdBQUUsUUFBTyxHQUFJLEtBQUssUUFBUVMsR0FBRSxFQUFHLE9BQU9ULEVBQUMsRUFBRSxNQUFNLEtBQUssVUFBVTtBQUFBLEVBQ2hHO0FBQUEsRUFDQSxjQUFjQSxJQUFHO0FBQ2YsV0FBTyxLQUFLLE1BQU1BLEVBQUM7QUFBQSxFQUNyQjtBQUNGLEdBQUdJLEVBQUUsR0FBRyxZQUFZLEdBQUc7QUFDdkIsU0FBUyxHQUFHLEdBQUdKLElBQUcsR0FBRyxHQUFHO0FBQ3RCLFFBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNsQixTQUFPLEdBQUcsQ0FBQyxJQUFJLElBQUk7QUFBQSxJQUNqQkE7QUFBQSxJQUNBO0FBQUEsSUFDQSxFQUFFO0FBQUEsSUFDRixFQUFFO0FBQUEsSUFDRjtBQUFBLEVBQ0osSUFBTSxJQUFJO0FBQUEsSUFDTkE7QUFBQSxJQUNBO0FBQUEsSUFDQSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUc7QUFBQSxJQUNiLEVBQUU7QUFBQSxJQUNGO0FBQUEsRUFDSjtBQUNBO0FBQ0FJLEVBQUUsSUFBSSxTQUFTO0FBQ2YsSUFBSSxHQUFHLE1BQU0sSUFBSSxNQUFNO0FBQUEsRUFDckIsWUFBWUosSUFBRyxHQUFHLEdBQUcsR0FBRztBQUN0QixTQUFLLDBCQUEwQkEsSUFBRyxLQUFLLGNBQWMsR0FBRyxLQUFLLFlBQVksR0FBRyxLQUFLLG1CQUFtQixHQUFHLEtBQUssZUFBZTtBQUFBLE1BQ3pILEdBQUc7QUFBQSxNQUNILEdBQUc7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNkLEdBQU8sS0FBSyxpQkFBaUI7QUFBQSxFQUMzQjtBQUFBLEVBQ0EsaUJBQWlCQSxJQUFHO0FBQ2xCLFNBQUssYUFBYSxJQUFJQSxHQUFFLEdBQUcsS0FBSyxhQUFhLElBQUlBLEdBQUU7QUFBQSxFQUNyRDtBQUFBLEVBQ0EsZUFBZUEsSUFBRztBQUNoQixVQUFNLElBQUksS0FBSyx3QkFBd0I7QUFBQSxNQUNyQyxDQUFDLEtBQUssVUFBVSxLQUFLO0FBQUEsTUFDckIsS0FBSyxZQUFZO0FBQUEsSUFDdkIsR0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFLE9BQU9BLEdBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxTQUFTLElBQUksS0FBSyxZQUFZO0FBQ3ZFLFdBQU8sRUFBRSxTQUFTLEtBQUssRUFBRSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsS0FBSyxVQUFVLFVBQVUsS0FBSyxhQUFhLFFBQVEsR0FBRyxLQUFLLGFBQWEsU0FBUyxHQUFHLEtBQUssaUJBQWlCLE9BQUs7QUFBQSxNQUNuTCxPQUFPLEtBQUssYUFBYTtBQUFBLE1BQ3pCLFFBQVEsS0FBSyxhQUFhO0FBQUEsSUFDaEM7QUFBQSxFQUNFO0FBQUEsRUFDQSxzQkFBc0I7QUFDcEIsVUFBTUEsS0FBSSxDQUFBO0FBQ1YsV0FBTyxLQUFLLGtCQUFrQkEsR0FBRSxLQUFLO0FBQUEsTUFDbkMsWUFBWSxDQUFDLGFBQWE7QUFBQSxNQUMxQixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSjtBQUFBLFVBQ0UsVUFBVSxLQUFLLFlBQVk7QUFBQSxVQUMzQixNQUFNLEtBQUssVUFBVTtBQUFBLFVBQ3JCLGFBQWE7QUFBQSxVQUNiLGVBQWU7QUFBQSxVQUNmLEdBQUcsS0FBSyxhQUFhLElBQUksS0FBSyxhQUFhLFFBQVE7QUFBQSxVQUNuRCxHQUFHLEtBQUssYUFBYSxJQUFJLEtBQUssYUFBYSxTQUFTO0FBQUEsVUFDcEQsTUFBTSxLQUFLLGlCQUFpQjtBQUFBLFVBQzVCLFVBQVU7QUFBQSxRQUNwQjtBQUFBLE1BQ0E7QUFBQSxJQUNBLENBQUssR0FBR0E7QUFBQSxFQUNOO0FBQ0YsR0FBR0ksRUFBRSxHQUFHLFlBQVksR0FBRztBQUN2QixTQUFTLEdBQUcsR0FBR0osSUFBRyxHQUFHLEdBQUc7QUFDdEIsUUFBTSxJQUFJLElBQUksR0FBRyxDQUFDO0FBQ2xCLFNBQU8sSUFBSSxHQUFHLEdBQUcsR0FBR0EsSUFBRyxDQUFDO0FBQzFCO0FBQ0FJLEVBQUUsSUFBSSx3QkFBd0I7QUFDOUIsSUFBSSxJQUFJLE1BQU0sS0FBSyxNQUFNO0FBQUEsRUFDdkIsWUFBWUosSUFBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3pCLFNBQUssV0FBV0EsSUFBRyxLQUFLLFFBQVEsR0FBRyxLQUFLLFFBQVEsR0FBRyxLQUFLLGNBQWMsR0FBRyxLQUFLLFlBQVk7QUFBQSxFQUM1RjtBQUFBLEVBQ0EscUJBQXFCO0FBQ25CLFVBQU1BLEtBQUksS0FBSyxTQUFTLEtBQUssSUFBSSxDQUFDLE1BQU07QUFBQSxNQUN0QyxLQUFLLE1BQU0sY0FBYyxFQUFFLENBQUMsQ0FBQztBQUFBLE1BQzdCLEtBQUssTUFBTSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFDbkMsQ0FBSztBQUNELFFBQUk7QUFDSixXQUFPLEtBQUssZ0JBQWdCLGVBQWUsSUFBSVUsR0FBRSxFQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRVYsRUFBQyxJQUFJLElBQUlVLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFVixFQUFDLEdBQUcsSUFBSTtBQUFBLE1BQ3BJO0FBQUEsUUFDRSxZQUFZLENBQUMsUUFBUSxhQUFhLEtBQUssU0FBUyxFQUFFO0FBQUEsUUFDbEQsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0o7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFlBQVksS0FBSyxTQUFTO0FBQUEsWUFDMUIsYUFBYSxLQUFLLFNBQVM7QUFBQSxVQUN2QztBQUFBLFFBQ0E7QUFBQSxNQUNBO0FBQUEsSUFDQSxJQUFRLENBQUE7QUFBQSxFQUNOO0FBQ0YsR0FBR0ksRUFBRSxJQUFJLFVBQVUsR0FBRyxLQUFLLElBQUksTUFBTSxLQUFLLE1BQU07QUFBQSxFQUM5QyxZQUFZSixJQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUM1QixTQUFLLFVBQVVBLElBQUcsS0FBSyxlQUFlLEdBQUcsS0FBSyxRQUFRLEdBQUcsS0FBSyxRQUFRLEdBQUcsS0FBSyxjQUFjLEdBQUcsS0FBSyxZQUFZO0FBQUEsRUFDbEg7QUFBQSxFQUNBLHFCQUFxQjtBQUNuQixVQUFNQSxLQUFJLEtBQUssUUFBUSxLQUFLLElBQUksQ0FBQyxNQUFNO0FBQUEsTUFDckMsS0FBSyxNQUFNLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFBQSxNQUM3QixLQUFLLE1BQU0sY0FBYyxFQUFFLENBQUMsQ0FBQztBQUFBLElBQ25DLENBQUssR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLE1BQU0sb0JBQW1CLElBQUssR0FBRyxLQUFLLE1BQU0sZ0JBQWUsQ0FBRSxLQUFLLElBQUksT0FBTyxJQUFJLElBQUk7QUFDM0csV0FBTyxLQUFLLGdCQUFnQixlQUFlO0FBQUEsTUFDekM7QUFBQSxRQUNFLFlBQVksQ0FBQyxRQUFRLFlBQVksS0FBSyxTQUFTLEVBQUU7QUFBQSxRQUNqRCxNQUFNO0FBQUEsUUFDTixNQUFNQSxHQUFFLElBQUksQ0FBQyxPQUFPO0FBQUEsVUFDbEIsR0FBRyxLQUFLLGFBQWE7QUFBQSxVQUNyQixHQUFHLEVBQUUsQ0FBQyxJQUFJO0FBQUEsVUFDVixRQUFRO0FBQUEsVUFDUixPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssYUFBYTtBQUFBLFVBQ2hDLE1BQU0sS0FBSyxRQUFRO0FBQUEsVUFDbkIsYUFBYTtBQUFBLFVBQ2IsWUFBWSxLQUFLLFFBQVE7QUFBQSxRQUNuQyxFQUFVO0FBQUEsTUFDVjtBQUFBLElBQ0EsSUFBUTtBQUFBLE1BQ0Y7QUFBQSxRQUNFLFlBQVksQ0FBQyxRQUFRLFlBQVksS0FBSyxTQUFTLEVBQUU7QUFBQSxRQUNqRCxNQUFNO0FBQUEsUUFDTixNQUFNQSxHQUFFLElBQUksQ0FBQyxPQUFPO0FBQUEsVUFDbEIsR0FBRyxFQUFFLENBQUMsSUFBSTtBQUFBLFVBQ1YsR0FBRyxFQUFFLENBQUM7QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFFBQVEsS0FBSyxhQUFhLElBQUksS0FBSyxhQUFhLFNBQVMsRUFBRSxDQUFDO0FBQUEsVUFDNUQsTUFBTSxLQUFLLFFBQVE7QUFBQSxVQUNuQixhQUFhO0FBQUEsVUFDYixZQUFZLEtBQUssUUFBUTtBQUFBLFFBQ25DLEVBQVU7QUFBQSxNQUNWO0FBQUEsSUFDQTtBQUFBLEVBQ0U7QUFDRixHQUFHSSxFQUFFLElBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLEtBQUssTUFBTTtBQUFBLEVBQzdDLFlBQVlKLElBQUcsR0FBRyxHQUFHO0FBQ25CLFNBQUssY0FBY0EsSUFBRyxLQUFLLFlBQVksR0FBRyxLQUFLLG1CQUFtQixHQUFHLEtBQUssZUFBZTtBQUFBLE1BQ3ZGLEdBQUc7QUFBQSxNQUNILEdBQUc7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNkO0FBQUEsRUFDRTtBQUFBLEVBQ0EsUUFBUUEsSUFBRyxHQUFHO0FBQ1osU0FBSyxRQUFRQSxJQUFHLEtBQUssUUFBUTtBQUFBLEVBQy9CO0FBQUEsRUFDQSxpQkFBaUJBLElBQUc7QUFDbEIsU0FBSyxhQUFhLElBQUlBLEdBQUUsR0FBRyxLQUFLLGFBQWEsSUFBSUEsR0FBRTtBQUFBLEVBQ3JEO0FBQUEsRUFDQSxlQUFlQSxJQUFHO0FBQ2hCLFdBQU8sS0FBSyxhQUFhLFFBQVFBLEdBQUUsT0FBTyxLQUFLLGFBQWEsU0FBU0EsR0FBRSxRQUFRO0FBQUEsTUFDN0UsT0FBTyxLQUFLLGFBQWE7QUFBQSxNQUN6QixRQUFRLEtBQUssYUFBYTtBQUFBLElBQ2hDO0FBQUEsRUFDRTtBQUFBLEVBQ0Esc0JBQXNCO0FBQ3BCLFFBQUksRUFBRSxLQUFLLFNBQVMsS0FBSztBQUN2QixZQUFNLE1BQU0scUNBQXFDO0FBQ25ELFVBQU1BLEtBQUksQ0FBQTtBQUNWLGVBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFPO0FBQy9DLGNBQVEsRUFBRSxNQUFJO0FBQUEsUUFDWixLQUFLO0FBQ0g7QUFDRSxrQkFBTSxJQUFJLElBQUk7QUFBQSxjQUNaO0FBQUEsY0FDQSxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLLFlBQVk7QUFBQSxjQUNqQjtBQUFBLFlBQ2Q7QUFDWSxZQUFBQSxHQUFFLEtBQUssR0FBRyxFQUFFLG1CQUFrQixDQUFFO0FBQUEsVUFDbEM7QUFDQTtBQUFBLFFBQ0YsS0FBSztBQUNIO0FBQ0Usa0JBQU0sSUFBSSxJQUFJO0FBQUEsY0FDWjtBQUFBLGNBQ0EsS0FBSztBQUFBLGNBQ0wsS0FBSztBQUFBLGNBQ0wsS0FBSztBQUFBLGNBQ0wsS0FBSyxZQUFZO0FBQUEsY0FDakI7QUFBQSxZQUNkO0FBQ1ksWUFBQUEsR0FBRSxLQUFLLEdBQUcsRUFBRSxtQkFBa0IsQ0FBRTtBQUFBLFVBQ2xDO0FBQ0E7QUFBQSxNQUNWO0FBQ0ksV0FBT0E7QUFBQSxFQUNUO0FBQ0YsR0FBR0ksRUFBRSxJQUFJLFVBQVUsR0FBRztBQUN0QixTQUFTLEdBQUcsR0FBR0osSUFBRyxHQUFHO0FBQ25CLFNBQU8sSUFBSSxHQUFHLEdBQUdBLElBQUcsQ0FBQztBQUN2QjtBQUNBSSxFQUFFLElBQUksa0JBQWtCO0FBQ3hCLElBQUksSUFBSSxNQUFNLEtBQUssTUFBTTtBQUFBLEVBQ3ZCLFlBQVlKLElBQUcsR0FBRyxHQUFHLEdBQUc7QUFDdEIsU0FBSyxjQUFjQSxJQUFHLEtBQUssWUFBWSxHQUFHLEtBQUssaUJBQWlCO0FBQUEsTUFDOUQsT0FBTyxHQUFHQSxJQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDcEIsTUFBTSxHQUFHQSxJQUFHLEdBQUcsQ0FBQztBQUFBLE1BQ2hCLE9BQU87QUFBQSxRQUNMLEVBQUU7QUFBQSxRQUNGQSxHQUFFO0FBQUEsUUFDRjtBQUFBLFVBQ0UsWUFBWSxFQUFFO0FBQUEsVUFDZCxZQUFZLEVBQUU7QUFBQSxVQUNkLFdBQVcsRUFBRTtBQUFBLFVBQ2IsZUFBZSxFQUFFO0FBQUEsUUFDM0I7QUFBQSxRQUNRO0FBQUEsTUFDUjtBQUFBLE1BQ00sT0FBTztBQUFBLFFBQ0wsRUFBRTtBQUFBLFFBQ0ZBLEdBQUU7QUFBQSxRQUNGO0FBQUEsVUFDRSxZQUFZLEVBQUU7QUFBQSxVQUNkLFlBQVksRUFBRTtBQUFBLFVBQ2QsV0FBVyxFQUFFO0FBQUEsVUFDYixlQUFlLEVBQUU7QUFBQSxRQUMzQjtBQUFBLFFBQ1E7QUFBQSxNQUNSO0FBQUEsSUFDQTtBQUFBLEVBQ0U7QUFBQSxFQUNBLHlCQUF5QjtBQUN2QixRQUFJQSxLQUFJLEtBQUssWUFBWSxPQUFPLElBQUksS0FBSyxZQUFZLFFBQVEsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEtBQUssTUFBTUEsS0FBSSxLQUFLLFlBQVksMkJBQTJCLEdBQUcsR0FBRyxJQUFJLEtBQUs7QUFBQSxNQUN2SixJQUFJLEtBQUssWUFBWSwyQkFBMkI7QUFBQSxJQUN0RCxHQUFPLElBQUksS0FBSyxlQUFlLEtBQUssZUFBZTtBQUFBLE1BQzdDLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNkLENBQUs7QUFDRCxJQUFBQSxNQUFLLEVBQUUsT0FBTyxLQUFLLEVBQUUsUUFBUSxJQUFJLEtBQUssZUFBZSxNQUFNLGVBQWU7QUFBQSxNQUN4RSxPQUFPLEtBQUssWUFBWTtBQUFBLE1BQ3hCLFFBQVE7QUFBQSxJQUNkLENBQUssR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxLQUFLLGVBQWUsTUFBTSxnQkFBZ0IsUUFBUSxHQUFHLElBQUksS0FBSyxlQUFlLE1BQU0sZUFBZTtBQUFBLE1BQ2pJLE9BQU9BO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDZCxDQUFLLEdBQUcsS0FBSyxFQUFFLFFBQVEsS0FBSyxlQUFlLE1BQU0sZ0JBQWdCLE1BQU0sR0FBRyxJQUFJLEtBQUssZUFBZSxNQUFNLGVBQWU7QUFBQSxNQUNqSCxPQUFPQTtBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ2QsQ0FBSyxHQUFHLElBQUksRUFBRSxPQUFPQSxNQUFLLEVBQUUsT0FBT0EsS0FBSSxNQUFNLEtBQUtBLElBQUdBLEtBQUksSUFBSSxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLGVBQWUsS0FBSyxlQUFlO0FBQUEsTUFDekgsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ2QsQ0FBSyxHQUFHLEtBQUssZUFBZSxLQUFLLGlCQUFpQixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUMsQ0FBRSxHQUFHLEtBQUssZUFBZSxNQUFNLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxlQUFlLE1BQU0saUJBQWlCLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFDLENBQUUsR0FBRyxLQUFLLGVBQWUsTUFBTSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssZUFBZSxNQUFNLGlCQUFpQixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUMsQ0FBRSxHQUFHLEtBQUssVUFBVSxNQUFNLEtBQUssQ0FBQ0UsT0FBTSxHQUFHQSxFQUFDLENBQUMsS0FBSyxLQUFLLGVBQWUsTUFBTSxpQ0FBZ0M7QUFBQSxFQUNsWTtBQUFBLEVBQ0EsMkJBQTJCO0FBQ3pCLFFBQUlGLEtBQUksS0FBSyxZQUFZLE9BQU8sSUFBSSxLQUFLLFlBQVksUUFBUSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEtBQUssTUFBTUEsS0FBSSxLQUFLLFlBQVksMkJBQTJCLEdBQUcsR0FBRyxJQUFJLEtBQUs7QUFBQSxNQUM5SixJQUFJLEtBQUssWUFBWSwyQkFBMkI7QUFBQSxJQUN0RCxHQUFPRSxLQUFJLEtBQUssZUFBZSxLQUFLLGVBQWU7QUFBQSxNQUM3QyxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDZCxDQUFLO0FBQ0QsSUFBQUYsTUFBS0UsR0FBRSxPQUFPLEtBQUtBLEdBQUUsUUFBUUEsS0FBSSxLQUFLLGVBQWUsTUFBTSxlQUFlO0FBQUEsTUFDeEUsT0FBTyxLQUFLLFlBQVk7QUFBQSxNQUN4QixRQUFRO0FBQUEsSUFDZCxDQUFLLEdBQUcsSUFBSUEsR0FBRSxRQUFRLEtBQUtBLEdBQUUsUUFBUSxLQUFLLGVBQWUsTUFBTSxnQkFBZ0IsTUFBTSxHQUFHQSxLQUFJLEtBQUssZUFBZSxNQUFNLGVBQWU7QUFBQSxNQUMvSCxPQUFPRjtBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ2QsQ0FBSyxHQUFHQSxNQUFLRSxHQUFFLE9BQU8sSUFBSUEsR0FBRSxPQUFPLEtBQUssZUFBZSxNQUFNLGdCQUFnQixLQUFLLEdBQUdBLEtBQUksS0FBSyxlQUFlLE1BQU0sZUFBZTtBQUFBLE1BQzVILE9BQU9GO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDZCxDQUFLLEdBQUcsS0FBS0UsR0FBRSxRQUFRLElBQUksSUFBSUEsR0FBRSxRQUFRRixLQUFJLE1BQU0sS0FBS0EsSUFBR0EsS0FBSSxJQUFJLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssZUFBZSxLQUFLLGVBQWU7QUFBQSxNQUMvSCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDZCxDQUFLLEdBQUcsS0FBSyxlQUFlLEtBQUssaUJBQWlCLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBQyxDQUFFLEdBQUcsS0FBSyxlQUFlLE1BQU0sU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLGVBQWUsTUFBTSxpQkFBaUIsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFDLENBQUUsR0FBRyxLQUFLLGVBQWUsTUFBTSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssZUFBZSxNQUFNLGlCQUFpQixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUMsQ0FBRSxHQUFHLEtBQUssVUFBVSxNQUFNLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssS0FBSyxlQUFlLE1BQU0saUNBQWdDO0FBQUEsRUFDOVg7QUFBQSxFQUNBLGlCQUFpQjtBQUNmLFNBQUssWUFBWSxxQkFBcUIsZUFBZSxLQUFLLHlCQUF3QixJQUFLLEtBQUssdUJBQXNCO0FBQUEsRUFDcEg7QUFBQSxFQUNBLHFCQUFxQjtBQUNuQixTQUFLLGVBQWM7QUFDbkIsVUFBTUEsS0FBSSxDQUFBO0FBQ1YsU0FBSyxlQUFlLEtBQUssUUFBUSxLQUFLLGVBQWUsT0FBTyxLQUFLLGVBQWUsS0FBSztBQUNyRixlQUFXLEtBQUssT0FBTyxPQUFPLEtBQUssY0FBYztBQUMvQyxNQUFBQSxHQUFFLEtBQUssR0FBRyxFQUFFLG9CQUFtQixDQUFFO0FBQ25DLFdBQU9BO0FBQUEsRUFDVDtBQUNGLEdBQUdJLEVBQUUsSUFBSSxjQUFjLEdBQUcsS0FBSyxJQUFJLE1BQU0sS0FBSyxNQUFNO0FBQUEsRUFDbEQsT0FBTyxNQUFNSixJQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3ZCLFdBQU8sSUFBSSxHQUFHQSxJQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsbUJBQWtCO0FBQUEsRUFDOUM7QUFDRixHQUFHSSxFQUFFLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEdBQUUsR0FBSSxLQUFLLEdBQUUsR0FBSSxJQUFJLEdBQUUsR0FBSSxLQUFLLEdBQUcsaUJBQWlCLE1BQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFFLEdBQUcsS0FBSyxPQUFJLEtBQUs7QUFDckosU0FBUyxLQUFLO0FBQ1osUUFBTSxJQUFJTyxNQUFNWCxLQUFJWSxLQUFFO0FBQ3RCLFNBQU9DLEdBQUcsRUFBRSxTQUFTYixHQUFFLGVBQWUsT0FBTztBQUMvQztBQUNBSSxFQUFFLElBQUksNEJBQTRCO0FBQ2xDLFNBQVMsS0FBSztBQUNaLFFBQU0sSUFBSVEsS0FBRTtBQUNaLFNBQU9DO0FBQUFBLElBQ0xDLEdBQUc7QUFBQSxJQUNILEVBQUU7QUFBQSxFQUNOO0FBQ0E7QUFDQVYsRUFBRSxJQUFJLHVCQUF1QjtBQUM3QixTQUFTLEtBQUs7QUFDWixTQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxLQUFLLElBQUk7QUFBQSxNQUNULEtBQUssS0FBSztBQUFBLElBQ2hCO0FBQUEsSUFDSSxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxZQUFZLENBQUE7QUFBQSxJQUNsQjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsT0FBTyxDQUFBO0FBQUEsRUFDWDtBQUNBO0FBQ0FBLEVBQUUsSUFBSSxxQkFBcUI7QUFDM0IsU0FBUyxHQUFHLEdBQUc7QUFDYixRQUFNSixLQUFJWSxLQUFFO0FBQ1osU0FBT0csR0FBRyxFQUFFLEtBQUksR0FBSWYsRUFBQztBQUN2QjtBQUNBSSxFQUFFLElBQUksZUFBZTtBQUNyQixTQUFTLEdBQUcsR0FBRztBQUNiLE9BQUs7QUFDUDtBQUNBQSxFQUFFLElBQUksWUFBWTtBQUNsQixTQUFTLEdBQUcsR0FBRztBQUNiLFFBQU0sZUFBZSxHQUFHLG1CQUFtQixlQUFlLEdBQUcsbUJBQW1CO0FBQ2xGO0FBQ0FBLEVBQUUsSUFBSSxnQkFBZ0I7QUFDdEIsU0FBUyxHQUFHLEdBQUc7QUFDYixJQUFFLE1BQU0sUUFBUSxHQUFHLEVBQUUsSUFBSTtBQUMzQjtBQUNBQSxFQUFFLElBQUksZUFBZTtBQUNyQixTQUFTLEdBQUcsR0FBR0osSUFBRztBQUNoQixJQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsT0FBTyxFQUFFLE1BQU0sT0FBTyxLQUFLLEdBQUcsS0FBS0EsR0FBQyxHQUFJLEtBQUs7QUFDM0U7QUFDQUksRUFBRSxJQUFJLG1CQUFtQjtBQUN6QixTQUFTLEdBQUcsR0FBRztBQUNiLElBQUUsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sT0FBTyxFQUFFLE1BQU07QUFBQSxJQUNmLFlBQVksRUFBRSxJQUFJLENBQUNKLE9BQU0sR0FBR0EsR0FBRSxJQUFJLENBQUM7QUFBQSxFQUN2QyxHQUFLLEtBQUs7QUFDVjtBQUNBSSxFQUFFLElBQUksY0FBYztBQUNwQixTQUFTLEdBQUcsR0FBRztBQUNiLElBQUUsTUFBTSxRQUFRLEdBQUcsRUFBRSxJQUFJO0FBQzNCO0FBQ0FBLEVBQUUsSUFBSSxlQUFlO0FBQ3JCLFNBQVMsR0FBRyxHQUFHSixJQUFHO0FBQ2hCLElBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxPQUFPLEVBQUUsTUFBTSxPQUFPLEtBQUssR0FBRyxLQUFLQSxHQUFDLEdBQUksS0FBSztBQUMzRTtBQUNBSSxFQUFFLElBQUksbUJBQW1CO0FBQ3pCLFNBQVMsR0FBRyxHQUFHO0FBQ2IsUUFBTUosS0FBSSxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUUsTUFBTSxNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRSxLQUFLLElBQUksRUFBRSxNQUFNLE1BQU0sS0FBSztBQUN4SCxJQUFFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE9BQU8sRUFBRSxNQUFNO0FBQUEsSUFDZixLQUFLLEtBQUssSUFBSSxHQUFHQSxFQUFDO0FBQUEsSUFDbEIsS0FBSyxLQUFLLElBQUksR0FBRyxDQUFDO0FBQUEsRUFDdEI7QUFDQTtBQUNBSSxFQUFFLElBQUksMkJBQTJCO0FBQ2pDLFNBQVMsR0FBRyxHQUFHO0FBQ2IsTUFBSUosS0FBSSxDQUFBO0FBQ1IsTUFBSSxFQUFFLFdBQVc7QUFDZixXQUFPQTtBQUNULE1BQUksQ0FBQyxJQUFJO0FBQ1AsVUFBTSxJQUFJLEVBQUUsRUFBRSxLQUFLLElBQUksRUFBRSxNQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFLE1BQU0sTUFBTSxLQUFLO0FBQ2hGLE9BQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssSUFBSSxHQUFHLEVBQUUsTUFBTSxDQUFDO0FBQUEsRUFDMUM7QUFDQSxNQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssTUFBTUEsS0FBSSxFQUFFLE1BQU0sV0FBVyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssR0FBRztBQUM3RixVQUFNLElBQUksRUFBRSxNQUFNLEtBQUssSUFBSSxFQUFFLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxFQUFFLFNBQVMsSUFBSSxJQUFJLENBQUE7QUFDMUUsYUFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFDM0IsUUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ2YsSUFBQUEsS0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMvQjtBQUNBLFNBQU9BO0FBQ1Q7QUFDQUksRUFBRSxJQUFJLDhCQUE4QjtBQUNwQyxTQUFTLEdBQUcsR0FBRztBQUNiLFNBQU8sR0FBRyxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTTtBQUN2QztBQUNBQSxFQUFFLElBQUkseUJBQXlCO0FBQy9CLFNBQVMsR0FBRyxHQUFHSixJQUFHO0FBQ2hCLFFBQU0sSUFBSSxHQUFHQSxFQUFDO0FBQ2QsSUFBRSxNQUFNLEtBQUs7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFlBQVksR0FBRyxFQUFFO0FBQUEsSUFDakIsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLEVBQ1YsQ0FBRyxHQUFHO0FBQ047QUFDQUksRUFBRSxJQUFJLGFBQWE7QUFDbkIsU0FBUyxHQUFHLEdBQUdKLElBQUc7QUFDaEIsUUFBTSxJQUFJLEdBQUdBLEVBQUM7QUFDZCxJQUFFLE1BQU0sS0FBSztBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sTUFBTSxHQUFHLEVBQUU7QUFBQSxJQUNYLE1BQU07QUFBQSxFQUNWLENBQUcsR0FBRztBQUNOO0FBQ0FJLEVBQUUsSUFBSSxZQUFZO0FBQ2xCLFNBQVMsS0FBSztBQUNaLE1BQUksRUFBRSxNQUFNLFdBQVc7QUFDckIsVUFBTSxNQUFNLHlEQUF5RDtBQUN2RSxTQUFPLEVBQUUsUUFBUVksTUFBTSxHQUFHLE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRTtBQUMvQztBQUNBWixFQUFFLElBQUksaUJBQWlCO0FBQ3ZCLFNBQVMsS0FBSztBQUNaLFNBQU87QUFDVDtBQUNBQSxFQUFFLElBQUkscUJBQXFCO0FBQzNCLFNBQVMsS0FBSztBQUNaLFNBQU87QUFDVDtBQUNBQSxFQUFFLElBQUksZ0JBQWdCO0FBQ3RCLFNBQVMsS0FBSztBQUNaLFNBQU87QUFDVDtBQUNBQSxFQUFFLElBQUksZ0JBQWdCO0FBQ25CLElBQUMsS0FBcUJBLGtCQUFFLFdBQVc7QUFDcENhLFFBQU0sS0FBSyxHQUFHLEtBQUssR0FBRSxHQUFJLElBQUksR0FBRSxHQUFJLEtBQUssR0FBRSxHQUFJLEtBQUssR0FBRyxpQkFBaUIsTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUUsR0FBRyxLQUFLLE9BQUksS0FBSztBQUN4SCxHQUFHLE9BQU8sR0FBRyxLQUFLO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsT0FBTztBQUFBLEVBQ1AsYUFBYUM7QUFBQUEsRUFDYixhQUFhQztBQUFBQSxFQUNiLGlCQUFpQkM7QUFBQUEsRUFDakIsaUJBQWlCSjtBQUFBQSxFQUNqQixtQkFBbUJLO0FBQUFBLEVBQ25CLG1CQUFtQkM7QUFBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1oscUJBQXFCO0FBQUEsRUFDckIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQ2xCLEdBQUcsS0FBcUJsQixrQkFBRSxDQUFDLEdBQUdKLElBQUcsR0FBRyxNQUFNO0FBQ3hDLFFBQU0sSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLG9CQUFtQixHQUFJLElBQUksRUFBRSxrQkFBa0IsSUFBSSxFQUFFLGVBQWMsRUFBRyxNQUFNLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3pILFdBQVNFLElBQUUsR0FBRztBQUNaLFdBQU8sTUFBTSxRQUFRLHFCQUFxQjtBQUFBLEVBQzVDO0FBQ0FFLElBQUVGLEtBQUcscUJBQXFCO0FBQzFCLFdBQVMsRUFBRSxHQUFHO0FBQ1osV0FBTyxNQUFNLFNBQVMsVUFBVSxNQUFNLFVBQVUsUUFBUTtBQUFBLEVBQzFEO0FBQ0FFLElBQUUsR0FBRyxlQUFlO0FBQ3BCLFdBQVMsRUFBRSxHQUFHO0FBQ1osV0FBTyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO0FBQUEsRUFDNUQ7QUFDQUEsSUFBRSxHQUFHLHVCQUF1QixHQUFHSSxFQUFHLE1BQU07QUFBQSxJQUN0QyxDQUFDO0FBQ0gsUUFBTSxJQUFJZSxHQUFHdkIsRUFBQyxHQUFHLElBQUksRUFBRSxPQUFPLEdBQUcsRUFBRSxLQUFLLFNBQVMsTUFBTSxHQUFHLElBQUksRUFBRSxPQUFPLE1BQU0sRUFBRSxLQUFLLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssU0FBUyxZQUFZO0FBQ3pKd0IsS0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sSUFBRSxHQUFHLEVBQUUsS0FBSyxXQUFXLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssUUFBUSxFQUFFLGVBQWUsR0FBRyxFQUFFLFdBQVcsRUFBRSxPQUFPLEdBQUcsRUFBRSxLQUFLLFNBQVMsbUJBQW1CLENBQUM7QUFDL0ssUUFBTSxJQUFJLEVBQUUsZ0JBQWUsR0FBSSxJQUFJLENBQUE7QUFDbkMsV0FBUyxFQUFFLEdBQUc7QUFDWixRQUFJLElBQUksR0FBRyxJQUFJO0FBQ2YsZUFBVyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQU8sR0FBSTtBQUM3QixVQUFJLElBQUk7QUFDUixVQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFDckc7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNBcEIsSUFBRSxHQUFHLFVBQVU7QUFDZixhQUFXLEtBQUssR0FBRztBQUNqQixRQUFJLEVBQUUsS0FBSyxXQUFXO0FBQ3BCO0FBQ0YsVUFBTSxJQUFJLEVBQUUsRUFBRSxVQUFVO0FBQ3hCLFlBQVEsRUFBRSxNQUFJO0FBQUEsTUFDWixLQUFLO0FBQ0gsWUFBSSxFQUFFLFVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBSyxFQUFHLE9BQU8sTUFBTSxFQUFFLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFdBQVcsR0FBRyxFQUFFO0FBQ2xSLGNBQUksRUFBRSxxQkFBcUIsY0FBYztBQUN2QyxnQkFBSSxJQUFJLFNBQVMsR0FBRyxHQUFHO0FBQ3JCLG9CQUFNLEVBQUUsTUFBTSxHQUFHLE9BQU8sRUFBQyxJQUFLO0FBQzlCLHFCQUFPLElBQUksRUFBRSxTQUFTLEtBQUssRUFBRSxRQUFRO0FBQUEsWUFDdkM7QUFDQUEsY0FBRSxHQUFHLGtCQUFrQjtBQUN2QixrQkFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUFFLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVEsRUFBRSxFQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLEtBQUssU0FBUyxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQ3BKLG9CQUFNLEVBQUUsTUFBTSxFQUFDLElBQUs7QUFDcEIsa0JBQUksSUFBSSxFQUFFLFNBQVM7QUFDbkIscUJBQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLElBQUk7QUFDckIscUJBQUs7QUFDUCxxQkFBTztBQUFBLFlBQ1QsQ0FBQyxHQUFHLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNqQyxjQUFFLFVBQVUsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQUssRUFBRyxPQUFPLE1BQU0sRUFBRSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUUsRUFBRSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUUsS0FBSyxTQUFTLENBQUMsRUFBRSxLQUFLLGVBQWUsS0FBSyxFQUFFLEtBQUsscUJBQXFCLFFBQVEsRUFBRSxLQUFLLFFBQVEsT0FBTyxFQUFFLEtBQUssYUFBYSxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSztBQUFBLFVBQ3ZSLE9BQU87QUFDTCxnQkFBSSxJQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUc7QUFDeEIsb0JBQU0sRUFBRSxNQUFNLEdBQUcsT0FBTyxFQUFDLElBQUssR0FBRyxJQUFJLElBQUksRUFBRSxTQUFTLEtBQUtDLEtBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxHQUFHQyxLQUFJRCxLQUFJLElBQUksR0FBRyxJQUFJQSxLQUFJLElBQUksR0FBRyxJQUFJQyxNQUFLLEVBQUUsS0FBSyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQzdLLHFCQUFPLEtBQUs7QUFBQSxZQUNkO0FBQ0FGLGNBQUUsR0FBRyxXQUFXO0FBQ2hCLGtCQUFNLElBQUksSUFBSSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLEVBQUUsTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUSxFQUFFLEVBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDbkosb0JBQU0sRUFBRSxNQUFNLEdBQUcsT0FBTyxFQUFDLElBQUs7QUFDOUIsa0JBQUksSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTO0FBQzlCLHFCQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUk7QUFDeEIscUJBQUs7QUFDUCxxQkFBTztBQUFBLFlBQ1QsQ0FBQyxHQUFHLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNqQyxjQUFFLFVBQVUsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLFFBQVEsT0FBTyxNQUFNLEVBQUUsS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsS0FBSyxlQUFlLFFBQVEsRUFBRSxLQUFLLHFCQUFxQixTQUFTLEVBQUUsS0FBSyxRQUFRLE9BQU8sRUFBRSxLQUFLLGFBQWEsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUs7QUFBQSxVQUMxUTtBQUNGO0FBQUEsTUFDRixLQUFLO0FBQ0gsVUFBRSxVQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQUssRUFBRyxPQUFPLE1BQU0sRUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUsscUJBQXFCLENBQUMsTUFBTUYsSUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEtBQUssZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEtBQUssYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUk7QUFDdFM7QUFBQSxNQUNGLEtBQUs7QUFDSCxVQUFFLFVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBSyxFQUFHLE9BQU8sTUFBTSxFQUFFLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLE1BQU0sRUFBRSxLQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFdBQVc7QUFDNU07QUFBQSxJQUNSO0FBQUEsRUFDRTtBQUNGLEdBQUcsTUFBTSxHQUFHLEtBQUs7QUFBQSxFQUNmLE1BQU07QUFDUixHQUFHLEtBQUs7QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLElBQUk7QUFBQSxFQUNKLFVBQVU7QUFDWjsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
