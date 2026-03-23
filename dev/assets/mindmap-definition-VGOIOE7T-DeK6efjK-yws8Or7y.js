import { d } from "./chunk-55IACEB6-9FdoBfgn-BHZffU_A.js";
import { d as d$1 } from "./chunk-QN33PNHL-Ct_6jMm2-Bh97x_AS.js";
import { p, F, n as FL, E as EL, R as Nh, f as ft, t as te, bp as sL, bl as Ui, bm as H, bn as et } from "./SynchronicGraphPage-D17073Na.js";
import "./QPage-CGO7mc_K.js";
import "./index-Dw3Gl-OX.js";
import "./QBtnToggle-3XAmjbLa.js";
import "./QBtnGroup-BoCG9kDT.js";
import "./QToolbar-CVQZGUTP.js";
import "./export-file-lpTZqdHO.js";
const E = [];
for (let t = 0; t < 256; ++t)
  E.push((t + 256).toString(16).slice(1));
function me(t, e = 0) {
  return (E[t[e + 0]] + E[t[e + 1]] + E[t[e + 2]] + E[t[e + 3]] + "-" + E[t[e + 4]] + E[t[e + 5]] + "-" + E[t[e + 6]] + E[t[e + 7]] + "-" + E[t[e + 8]] + E[t[e + 9]] + "-" + E[t[e + 10]] + E[t[e + 11]] + E[t[e + 12]] + E[t[e + 13]] + E[t[e + 14]] + E[t[e + 15]]).toLowerCase();
}
let z;
const Ee = new Uint8Array(16);
function _e() {
  if (!z) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    z = crypto.getRandomValues.bind(crypto);
  }
  return z(Ee);
}
const be = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ne = { randomUUID: be };
function Se(t, e, n) {
  if (ne.randomUUID && !t)
    return ne.randomUUID();
  t = t || {};
  const c = t.random ?? t.rng?.() ?? _e();
  if (c.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return c[6] = c[6] & 15 | 64, c[8] = c[8] & 63 | 128, me(c);
}
var X = (function() {
  var t = /* @__PURE__ */ p(function(x, s, i, o) {
    for (i = i || {}, o = x.length; o--; i[x[o]] = s) ;
    return i;
  }, "o"), e = [1, 4], n = [1, 13], c = [1, 12], f = [1, 15], h = [1, 16], p$1 = [1, 20], m = [1, 19], u = [6, 7, 8], N = [1, 26], Y = [1, 24], q = [1, 25], b = [6, 7, 11], J = [1, 6, 13, 15, 16, 19, 22], K = [1, 33], Q = [1, 34], R = [1, 6, 7, 11, 13, 15, 16, 19, 22], B = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: /* @__PURE__ */ p(function(s, i, o, a, g, r, w) {
      var d2 = r.length - 1;
      switch (g) {
        case 6:
        case 7:
          return a;
        case 8:
          a.getLogger().trace("Stop NL ");
          break;
        case 9:
          a.getLogger().trace("Stop EOF ");
          break;
        case 11:
          a.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          a.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          a.getLogger().info("Node: ", r[d2].id), a.addNode(r[d2 - 1].length, r[d2].id, r[d2].descr, r[d2].type);
          break;
        case 16:
          a.getLogger().trace("Icon: ", r[d2]), a.decorateNode({ icon: r[d2] });
          break;
        case 17:
        case 21:
          a.decorateNode({ class: r[d2] });
          break;
        case 18:
          a.getLogger().trace("SPACELIST");
          break;
        case 19:
          a.getLogger().trace("Node: ", r[d2].id), a.addNode(0, r[d2].id, r[d2].descr, r[d2].type);
          break;
        case 20:
          a.decorateNode({ icon: r[d2] });
          break;
        case 25:
          a.getLogger().trace("node found ..", r[d2 - 2]), this.$ = { id: r[d2 - 1], descr: r[d2 - 1], type: a.getType(r[d2 - 2], r[d2]) };
          break;
        case 26:
          this.$ = { id: r[d2], descr: r[d2], type: a.nodeType.DEFAULT };
          break;
        case 27:
          a.getLogger().trace("node found ..", r[d2 - 3]), this.$ = { id: r[d2 - 3], descr: r[d2 - 1], type: a.getType(r[d2 - 2], r[d2]) };
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: e }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: e }, { 6: n, 7: [1, 10], 9: 9, 12: 11, 13: c, 14: 14, 15: f, 16: h, 17: 17, 18: 18, 19: p$1, 22: m }, t(u, [2, 3]), { 1: [2, 2] }, t(u, [2, 4]), t(u, [2, 5]), { 1: [2, 6], 6: n, 12: 21, 13: c, 14: 14, 15: f, 16: h, 17: 17, 18: 18, 19: p$1, 22: m }, { 6: n, 9: 22, 12: 11, 13: c, 14: 14, 15: f, 16: h, 17: 17, 18: 18, 19: p$1, 22: m }, { 6: N, 7: Y, 10: 23, 11: q }, t(b, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: p$1, 22: m }), t(b, [2, 18]), t(b, [2, 19]), t(b, [2, 20]), t(b, [2, 21]), t(b, [2, 23]), t(b, [2, 24]), t(b, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: N, 7: Y, 10: 32, 11: q }, { 1: [2, 7], 6: n, 12: 21, 13: c, 14: 14, 15: f, 16: h, 17: 17, 18: 18, 19: p$1, 22: m }, t(J, [2, 14], { 7: K, 11: Q }), t(R, [2, 8]), t(R, [2, 9]), t(R, [2, 10]), t(b, [2, 15]), t(b, [2, 16]), t(b, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, t(J, [2, 13], { 7: K, 11: Q }), t(R, [2, 11]), t(R, [2, 12]), { 21: [1, 37] }, t(b, [2, 25]), t(b, [2, 27])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: /* @__PURE__ */ p(function(s, i) {
      if (i.recoverable)
        this.trace(s);
      else {
        var o = new Error(s);
        throw o.hash = i, o;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(s) {
      var i = this, o = [0], a = [], g = [null], r = [], w = this.table, d2 = "", U = 0, Z = 0, re = 2, ee = 1, oe = r.slice.call(arguments, 1), y = Object.create(this.lexer), v = { yy: {} };
      for (var j in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, j) && (v.yy[j] = this.yy[j]);
      y.setInput(s, v.yy), v.yy.lexer = y, v.yy.parser = this, typeof y.yylloc > "u" && (y.yylloc = {});
      var G = y.yylloc;
      r.push(G);
      var ae = y.options && y.options.ranges;
      typeof v.yy.parseError == "function" ? this.parseError = v.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ce(S) {
        o.length = o.length - 2 * S, g.length = g.length - S, r.length = r.length - S;
      }
      p(ce, "popStack");
      function te2() {
        var S;
        return S = a.pop() || y.lex() || ee, typeof S != "number" && (S instanceof Array && (a = S, S = a.pop()), S = i.symbols_[S] || S), S;
      }
      p(te2, "lex");
      for (var _, T, D, H2, O = {}, P, k, ie, M; ; ) {
        if (T = o[o.length - 1], this.defaultActions[T] ? D = this.defaultActions[T] : ((_ === null || typeof _ > "u") && (_ = te2()), D = w[T] && w[T][_]), typeof D > "u" || !D.length || !D[0]) {
          var $ = "";
          M = [];
          for (P in w[T])
            this.terminals_[P] && P > re && M.push("'" + this.terminals_[P] + "'");
          y.showPosition ? $ = "Parse error on line " + (U + 1) + `:
` + y.showPosition() + `
Expecting ` + M.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : $ = "Parse error on line " + (U + 1) + ": Unexpected " + (_ == ee ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError($, {
            text: y.match,
            token: this.terminals_[_] || _,
            line: y.yylineno,
            loc: G,
            expected: M
          });
        }
        if (D[0] instanceof Array && D.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + T + ", token: " + _);
        switch (D[0]) {
          case 1:
            o.push(_), g.push(y.yytext), r.push(y.yylloc), o.push(D[1]), _ = null, Z = y.yyleng, d2 = y.yytext, U = y.yylineno, G = y.yylloc;
            break;
          case 2:
            if (k = this.productions_[D[1]][1], O.$ = g[g.length - k], O._$ = {
              first_line: r[r.length - (k || 1)].first_line,
              last_line: r[r.length - 1].last_line,
              first_column: r[r.length - (k || 1)].first_column,
              last_column: r[r.length - 1].last_column
            }, ae && (O._$.range = [
              r[r.length - (k || 1)].range[0],
              r[r.length - 1].range[1]
            ]), H2 = this.performAction.apply(O, [
              d2,
              Z,
              U,
              v.yy,
              D[1],
              g,
              r
            ].concat(oe)), typeof H2 < "u")
              return H2;
            k && (o = o.slice(0, -1 * k * 2), g = g.slice(0, -1 * k), r = r.slice(0, -1 * k)), o.push(this.productions_[D[1]][0]), g.push(O.$), r.push(O._$), ie = w[o[o.length - 2]][o[o.length - 1]], o.push(ie);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, se = /* @__PURE__ */ (function() {
    var x = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(i, o) {
        if (this.yy.parser)
          this.yy.parser.parseError(i, o);
        else
          throw new Error(i);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(s, i) {
        return this.yy = i || this.yy || {}, this._input = s, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var s = this._input[0];
        this.yytext += s, this.yyleng++, this.offset++, this.match += s, this.matched += s;
        var i = s.match(/(?:\r\n?|\n).*/g);
        return i ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), s;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(s) {
        var i = s.length, o = s.split(/(?:\r\n?|\n)/g);
        this._input = s + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - i), this.offset -= i;
        var a = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), o.length - 1 && (this.yylineno -= o.length - 1);
        var g = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: o ? (o.length === a.length ? this.yylloc.first_column : 0) + a[a.length - o.length].length - o[0].length : this.yylloc.first_column - i
        }, this.options.ranges && (this.yylloc.range = [g[0], g[0] + this.yyleng - i]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(s) {
        this.unput(this.match.slice(s));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var s = this.matched.substr(0, this.matched.length - this.match.length);
        return (s.length > 20 ? "..." : "") + s.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var s = this.match;
        return s.length < 20 && (s += this._input.substr(0, 20 - s.length)), (s.substr(0, 20) + (s.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var s = this.pastInput(), i = new Array(s.length + 1).join("-");
        return s + this.upcomingInput() + `
` + i + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(s, i) {
        var o, a, g;
        if (this.options.backtrack_lexer && (g = {
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
        }, this.options.ranges && (g.yylloc.range = this.yylloc.range.slice(0))), a = s[0].match(/(?:\r\n?|\n).*/g), a && (this.yylineno += a.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + s[0].length
        }, this.yytext += s[0], this.match += s[0], this.matches = s, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(s[0].length), this.matched += s[0], o = this.performAction.call(this, this.yy, this, i, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), o)
          return o;
        if (this._backtrack) {
          for (var r in g)
            this[r] = g[r];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var s, i, o, a;
        this._more || (this.yytext = "", this.match = "");
        for (var g = this._currentRules(), r = 0; r < g.length; r++)
          if (o = this._input.match(this.rules[g[r]]), o && (!i || o[0].length > i[0].length)) {
            if (i = o, a = r, this.options.backtrack_lexer) {
              if (s = this.test_match(o, g[r]), s !== false)
                return s;
              if (this._backtrack) {
                i = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return i ? (s = this.test_match(i, g[a]), s !== false ? s : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var i = this.next();
        return i || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(i) {
        this.conditionStack.push(i);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var i = this.conditionStack.length - 1;
        return i > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(i) {
        return i = this.conditionStack.length - 1 - Math.abs(i || 0), i >= 0 ? this.conditionStack[i] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(i) {
        this.begin(i);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(i, o, a, g) {
        switch (a) {
          case 0:
            return i.getLogger().trace("Found comment", o.yytext), 6;
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return this.popState(), 16;
          case 4:
            this.popState();
            break;
          case 5:
            i.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 6:
            return i.getLogger().trace("SPACELINE"), 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            i.getLogger().trace("end icon"), this.popState();
            break;
          case 10:
            return i.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
          case 11:
            return i.getLogger().trace("Cloud"), this.begin("NODE"), 19;
          case 12:
            return i.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
          case 13:
            return i.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
          case 14:
            return this.begin("NODE"), 19;
          case 15:
            return this.begin("NODE"), 19;
          case 16:
            return this.begin("NODE"), 19;
          case 17:
            return this.begin("NODE"), 19;
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            i.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 25:
            return i.getLogger().trace("description:", o.yytext), "NODE_DESCR";
          case 26:
            this.popState();
            break;
          case 27:
            return this.popState(), i.getLogger().trace("node end ))"), "NODE_DEND";
          case 28:
            return this.popState(), i.getLogger().trace("node end )"), "NODE_DEND";
          case 29:
            return this.popState(), i.getLogger().trace("node end ...", o.yytext), "NODE_DEND";
          case 30:
            return this.popState(), i.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return this.popState(), i.getLogger().trace("node end (-"), "NODE_DEND";
          case 32:
            return this.popState(), i.getLogger().trace("node end (-"), "NODE_DEND";
          case 33:
            return this.popState(), i.getLogger().trace("node end (("), "NODE_DEND";
          case 34:
            return this.popState(), i.getLogger().trace("node end (("), "NODE_DEND";
          case 35:
            return i.getLogger().trace("Long description:", o.yytext), 20;
          case 36:
            return i.getLogger().trace("Long description:", o.yytext), 20;
        }
      }, "anonymous"),
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: false }, ICON: { rules: [8, 9], inclusive: false }, NSTR2: { rules: [22, 23], inclusive: false }, NSTR: { rules: [25, 26], inclusive: false }, NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: false }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: true } }
    };
    return x;
  })();
  B.lexer = se;
  function A() {
    this.yy = {};
  }
  return p(A, "Parser"), A.prototype = B, B.Parser = A, new A();
})();
X.parser = X;
var De = X, L = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, I, Ne = (I = class {
  constructor() {
    this.nodes = [], this.count = 0, this.elements = {}, this.getLogger = this.getLogger.bind(this), this.nodeType = L, this.clear(), this.getType = this.getType.bind(this), this.getElementById = this.getElementById.bind(this), this.getParent = this.getParent.bind(this), this.getMindmap = this.getMindmap.bind(this), this.addNode = this.addNode.bind(this), this.decorateNode = this.decorateNode.bind(this);
  }
  clear() {
    this.nodes = [], this.count = 0, this.elements = {}, this.baseLevel = void 0;
  }
  getParent(e) {
    for (let n = this.nodes.length - 1; n >= 0; n--)
      if (this.nodes[n].level < e)
        return this.nodes[n];
    return null;
  }
  getMindmap() {
    return this.nodes.length > 0 ? this.nodes[0] : null;
  }
  addNode(e, n, c, f) {
    F.info("addNode", e, n, c, f);
    let h = false;
    this.nodes.length === 0 ? (this.baseLevel = e, e = 0, h = true) : this.baseLevel !== void 0 && (e = e - this.baseLevel, h = false);
    const p2 = ft();
    let m = p2.mindmap?.padding ?? Nh.mindmap.padding;
    switch (f) {
      case this.nodeType.ROUNDED_RECT:
      case this.nodeType.RECT:
      case this.nodeType.HEXAGON:
        m *= 2;
        break;
    }
    const u = {
      id: this.count++,
      nodeId: te(n, p2),
      level: e,
      descr: te(c, p2),
      type: f,
      children: [],
      width: p2.mindmap?.maxNodeWidth ?? Nh.mindmap.maxNodeWidth,
      padding: m,
      isRoot: h
    }, N = this.getParent(e);
    if (N)
      N.children.push(u), this.nodes.push(u);
    else if (h)
      this.nodes.push(u);
    else
      throw new Error(
        `There can be only one root. No parent could be found for ("${u.descr}")`
      );
  }
  getType(e, n) {
    switch (F.debug("In get type", e, n), e) {
      case "[":
        return this.nodeType.RECT;
      case "(":
        return n === ")" ? this.nodeType.ROUNDED_RECT : this.nodeType.CLOUD;
      case "((":
        return this.nodeType.CIRCLE;
      case ")":
        return this.nodeType.CLOUD;
      case "))":
        return this.nodeType.BANG;
      case "{{":
        return this.nodeType.HEXAGON;
      default:
        return this.nodeType.DEFAULT;
    }
  }
  setElementForId(e, n) {
    this.elements[e] = n;
  }
  getElementById(e) {
    return this.elements[e];
  }
  decorateNode(e) {
    if (!e)
      return;
    const n = ft(), c = this.nodes[this.nodes.length - 1];
    e.icon && (c.icon = te(e.icon, n)), e.class && (c.class = te(e.class, n));
  }
  type2Str(e) {
    switch (e) {
      case this.nodeType.DEFAULT:
        return "no-border";
      case this.nodeType.RECT:
        return "rect";
      case this.nodeType.ROUNDED_RECT:
        return "rounded-rect";
      case this.nodeType.CIRCLE:
        return "circle";
      case this.nodeType.CLOUD:
        return "cloud";
      case this.nodeType.BANG:
        return "bang";
      case this.nodeType.HEXAGON:
        return "hexgon";
      // cspell: disable-line
      default:
        return "no-border";
    }
  }
  /**
   * Assign section numbers to nodes based on their position relative to root
   * @param node - The mindmap node to process
   * @param sectionNumber - The section number to assign (undefined for root)
   */
  assignSections(e, n) {
    if (e.level === 0 ? e.section = void 0 : e.section = n, e.children)
      for (const [c, f] of e.children.entries()) {
        const h = e.level === 0 ? c : n;
        this.assignSections(f, h);
      }
  }
  /**
   * Convert mindmap tree structure to flat array of nodes
   * @param node - The mindmap node to process
   * @param processedNodes - Array to collect processed nodes
   */
  flattenNodes(e, n) {
    const c = ["mindmap-node"];
    e.isRoot === true ? c.push("section-root", "section--1") : e.section !== void 0 && c.push(`section-${e.section}`), e.class && c.push(e.class);
    const f = c.join(" "), h = /* @__PURE__ */ p((m) => {
      switch (m) {
        case L.CIRCLE:
          return "mindmapCircle";
        case L.RECT:
          return "rect";
        case L.ROUNDED_RECT:
          return "rounded";
        case L.CLOUD:
          return "cloud";
        case L.BANG:
          return "bang";
        case L.HEXAGON:
          return "hexagon";
        case L.DEFAULT:
          return "defaultMindmapNode";
        case L.NO_BORDER:
        default:
          return "rect";
      }
    }, "getShapeFromType"), p$1 = {
      id: e.id.toString(),
      domId: "node_" + e.id.toString(),
      label: e.descr,
      isGroup: false,
      shape: h(e.type),
      width: e.width,
      height: e.height ?? 0,
      padding: e.padding,
      cssClasses: f,
      cssStyles: [],
      look: "default",
      icon: e.icon,
      x: e.x,
      y: e.y,
      // Mindmap-specific properties
      level: e.level,
      nodeId: e.nodeId,
      type: e.type,
      section: e.section
    };
    if (n.push(p$1), e.children)
      for (const m of e.children)
        this.flattenNodes(m, n);
  }
  /**
   * Generate edges from parent-child relationships in mindmap tree
   * @param node - The mindmap node to process
   * @param edges - Array to collect edges
   */
  generateEdges(e, n) {
    if (e.children)
      for (const c of e.children) {
        let f = "edge";
        c.section !== void 0 && (f += ` section-edge-${c.section}`);
        const h = e.level + 1;
        f += ` edge-depth-${h}`;
        const p2 = {
          id: `edge_${e.id}_${c.id}`,
          start: e.id.toString(),
          end: c.id.toString(),
          type: "normal",
          curve: "basis",
          thickness: "normal",
          look: "default",
          classes: f,
          // Store mindmap-specific data
          depth: e.level,
          section: c.section
        };
        n.push(p2), this.generateEdges(c, n);
      }
  }
  /**
   * Get structured data for layout algorithms
   * Following the pattern established by ER diagrams
   * @returns Structured data containing nodes, edges, and config
   */
  getData() {
    const e = this.getMindmap(), n = ft(), f = sL().layout !== void 0, h = n;
    if (f || (h.layout = "cose-bilkent"), !e)
      return {
        nodes: [],
        edges: [],
        config: h
      };
    F.debug("getData: mindmapRoot", e, n), this.assignSections(e);
    const p2 = [], m = [];
    this.flattenNodes(e, p2), this.generateEdges(e, m), F.debug(
      `getData: processed ${p2.length} nodes and ${m.length} edges`
    );
    const u = /* @__PURE__ */ new Map();
    for (const N of p2)
      u.set(N.id, {
        shape: N.shape,
        width: N.width,
        height: N.height,
        padding: N.padding
      });
    return {
      nodes: p2,
      edges: m,
      config: h,
      // Store the root node for mindmap-specific layout algorithms
      rootNode: e,
      // Properties required by dagre layout algorithm
      markers: ["point"],
      // Mindmaps don't use markers
      direction: "TB",
      // Top-to-bottom direction for mindmaps
      nodeSpacing: 50,
      // Default spacing between nodes
      rankSpacing: 50,
      // Default spacing between ranks
      // Add shapes for ELK compatibility
      shapes: Object.fromEntries(u),
      // Additional properties that layout algorithms might expect
      type: "mindmap",
      diagramId: "mindmap-" + Se()
    };
  }
  // Expose logger to grammar
  getLogger() {
    return F;
  }
}, p(I, "MindmapDB"), I), ke = /* @__PURE__ */ p(async (t, e, n, c) => {
  F.debug(`Rendering mindmap diagram
` + t);
  const f = c.db, h = f.getData(), p2 = d(e, h.config.securityLevel);
  h.type = c.type, h.layoutAlgorithm = FL(h.config.layout, {
    fallback: "cose-bilkent"
  }), h.diagramId = e, f.getMindmap() && (h.nodes.forEach((u) => {
    u.shape === "rounded" ? (u.radius = 15, u.taper = 15, u.stroke = "none", u.width = 0, u.padding = 15) : u.shape === "circle" ? u.padding = 10 : u.shape === "rect" && (u.width = 0, u.padding = 10);
  }), await EL(h, p2), d$1(
    p2,
    h.config.mindmap?.padding ?? Nh.mindmap.padding,
    "mindmapDiagram",
    h.config.mindmap?.useMaxWidth ?? Nh.mindmap.useMaxWidth
  ));
}, "draw"), Le = {
  draw: ke
}, xe = /* @__PURE__ */ p((t) => {
  let e = "";
  for (let n = 0; n < t.THEME_COLOR_LIMIT; n++)
    t["lineColor" + n] = t["lineColor" + n] || t["cScaleInv" + n], Ui(t["lineColor" + n]) ? t["lineColor" + n] = H(t["lineColor" + n], 20) : t["lineColor" + n] = et(t["lineColor" + n], 20);
  for (let n = 0; n < t.THEME_COLOR_LIMIT; n++) {
    const c = "" + (17 - 3 * n);
    e += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} polygon, .section-${n - 1} path  {
      fill: ${t["cScale" + n]};
    }
    .section-${n - 1} text {
     fill: ${t["cScaleLabel" + n]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${t["cScaleLabel" + n]};
    }
    .section-edge-${n - 1}{
      stroke: ${t["cScale" + n]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${c};
    }
    .section-${n - 1} line {
      stroke: ${t["cScaleInv" + n]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return e;
}, "genSections"), ve = /* @__PURE__ */ p((t) => `
  .edge {
    stroke-width: 3;
  }
  ${xe(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .section-root span {
    color: ${t.gitBranchLabel0};
  }
  .section-2 span {
    color: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, "getStyles"), Te = ve, Re = {
  get db() {
    return new Ne();
  },
  renderer: Le,
  parser: De,
  styles: Te
};
export {
  Re as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZG1hcC1kZWZpbml0aW9uLVZHT0lPRTdULURlSzZlZmpLLXl3czhPcjd5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLW1lcm1haWQtc3RyaW5nL2Rpc3QvbWluZG1hcC1kZWZpbml0aW9uLVZHT0lPRTdULURlSzZlZmpLLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGcgYXMgbGUgfSBmcm9tIFwiLi9jaHVuay01NUlBQ0VCNi05RmRvQmZnbi5qc1wiO1xuaW1wb3J0IHsgcyBhcyBoZSB9IGZyb20gXCIuL2NodW5rLVFOMzNQTkhMLUN0XzZqTW0yLmpzXCI7XG5pbXBvcnQgeyBfIGFzIGwsIGwgYXMgQywgbyBhcyBkZSwgciBhcyBnZSwgRiwgYyBhcyBXLCBpIGFzIFYsIGFDIGFzIHVlLCBXIGFzIHBlLCBYIGFzIGZlLCBZIGFzIHllIH0gZnJvbSBcIi4vZW50cnktQjJWWC1reGEuanNcIjtcbmNvbnN0IEUgPSBbXTtcbmZvciAobGV0IHQgPSAwOyB0IDwgMjU2OyArK3QpXG4gIEUucHVzaCgodCArIDI1NikudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbmZ1bmN0aW9uIG1lKHQsIGUgPSAwKSB7XG4gIHJldHVybiAoRVt0W2UgKyAwXV0gKyBFW3RbZSArIDFdXSArIEVbdFtlICsgMl1dICsgRVt0W2UgKyAzXV0gKyBcIi1cIiArIEVbdFtlICsgNF1dICsgRVt0W2UgKyA1XV0gKyBcIi1cIiArIEVbdFtlICsgNl1dICsgRVt0W2UgKyA3XV0gKyBcIi1cIiArIEVbdFtlICsgOF1dICsgRVt0W2UgKyA5XV0gKyBcIi1cIiArIEVbdFtlICsgMTBdXSArIEVbdFtlICsgMTFdXSArIEVbdFtlICsgMTJdXSArIEVbdFtlICsgMTNdXSArIEVbdFtlICsgMTRdXSArIEVbdFtlICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmxldCB6O1xuY29uc3QgRWUgPSBuZXcgVWludDhBcnJheSgxNik7XG5mdW5jdGlvbiBfZSgpIHtcbiAgaWYgKCF6KSB7XG4gICAgaWYgKHR5cGVvZiBjcnlwdG8gPiBcInVcIiB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcylcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkXCIpO1xuICAgIHogPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgfVxuICByZXR1cm4geihFZSk7XG59XG5jb25zdCBiZSA9IHR5cGVvZiBjcnlwdG8gPCBcInVcIiAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byksIG5lID0geyByYW5kb21VVUlEOiBiZSB9O1xuZnVuY3Rpb24gU2UodCwgZSwgbikge1xuICBpZiAobmUucmFuZG9tVVVJRCAmJiAhdClcbiAgICByZXR1cm4gbmUucmFuZG9tVVVJRCgpO1xuICB0ID0gdCB8fCB7fTtcbiAgY29uc3QgYyA9IHQucmFuZG9tID8/IHQucm5nPy4oKSA/PyBfZSgpO1xuICBpZiAoYy5sZW5ndGggPCAxNilcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTZcIik7XG4gIHJldHVybiBjWzZdID0gY1s2XSAmIDE1IHwgNjQsIGNbOF0gPSBjWzhdICYgNjMgfCAxMjgsIG1lKGMpO1xufVxudmFyIFggPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB0ID0gLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oeCwgcywgaSwgbykge1xuICAgIGZvciAoaSA9IGkgfHwge30sIG8gPSB4Lmxlbmd0aDsgby0tOyBpW3hbb11dID0gcykgO1xuICAgIHJldHVybiBpO1xuICB9LCBcIm9cIiksIGUgPSBbMSwgNF0sIG4gPSBbMSwgMTNdLCBjID0gWzEsIDEyXSwgZiA9IFsxLCAxNV0sIGggPSBbMSwgMTZdLCBwID0gWzEsIDIwXSwgbSA9IFsxLCAxOV0sIHUgPSBbNiwgNywgOF0sIE4gPSBbMSwgMjZdLCBZID0gWzEsIDI0XSwgcSA9IFsxLCAyNV0sIGIgPSBbNiwgNywgMTFdLCBKID0gWzEsIDYsIDEzLCAxNSwgMTYsIDE5LCAyMl0sIEsgPSBbMSwgMzNdLCBRID0gWzEsIDM0XSwgUiA9IFsxLCA2LCA3LCAxMSwgMTMsIDE1LCAxNiwgMTksIDIyXSwgQiA9IHtcbiAgICB0cmFjZTogLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oKSB7XG4gICAgfSwgXCJ0cmFjZVwiKSxcbiAgICB5eToge30sXG4gICAgc3ltYm9sc186IHsgZXJyb3I6IDIsIHN0YXJ0OiAzLCBtaW5kTWFwOiA0LCBzcGFjZUxpbmVzOiA1LCBTUEFDRUxJTkU6IDYsIE5MOiA3LCBNSU5ETUFQOiA4LCBkb2N1bWVudDogOSwgc3RvcDogMTAsIEVPRjogMTEsIHN0YXRlbWVudDogMTIsIFNQQUNFTElTVDogMTMsIG5vZGU6IDE0LCBJQ09OOiAxNSwgQ0xBU1M6IDE2LCBub2RlV2l0aElkOiAxNywgbm9kZVdpdGhvdXRJZDogMTgsIE5PREVfRFNUQVJUOiAxOSwgTk9ERV9ERVNDUjogMjAsIE5PREVfREVORDogMjEsIE5PREVfSUQ6IDIyLCAkYWNjZXB0OiAwLCAkZW5kOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDY6IFwiU1BBQ0VMSU5FXCIsIDc6IFwiTkxcIiwgODogXCJNSU5ETUFQXCIsIDExOiBcIkVPRlwiLCAxMzogXCJTUEFDRUxJU1RcIiwgMTU6IFwiSUNPTlwiLCAxNjogXCJDTEFTU1wiLCAxOTogXCJOT0RFX0RTVEFSVFwiLCAyMDogXCJOT0RFX0RFU0NSXCIsIDIxOiBcIk5PREVfREVORFwiLCAyMjogXCJOT0RFX0lEXCIgfSxcbiAgICBwcm9kdWN0aW9uc186IFswLCBbMywgMV0sIFszLCAyXSwgWzUsIDFdLCBbNSwgMl0sIFs1LCAyXSwgWzQsIDJdLCBbNCwgM10sIFsxMCwgMV0sIFsxMCwgMV0sIFsxMCwgMV0sIFsxMCwgMl0sIFsxMCwgMl0sIFs5LCAzXSwgWzksIDJdLCBbMTIsIDJdLCBbMTIsIDJdLCBbMTIsIDJdLCBbMTIsIDFdLCBbMTIsIDFdLCBbMTIsIDFdLCBbMTIsIDFdLCBbMTIsIDFdLCBbMTQsIDFdLCBbMTQsIDFdLCBbMTgsIDNdLCBbMTcsIDFdLCBbMTcsIDRdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbihzLCBpLCBvLCBhLCBnLCByLCB3KSB7XG4gICAgICB2YXIgZCA9IHIubGVuZ3RoIC0gMTtcbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIGEuZ2V0TG9nZ2VyKCkudHJhY2UoXCJTdG9wIE5MIFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIGEuZ2V0TG9nZ2VyKCkudHJhY2UoXCJTdG9wIEVPRiBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS50cmFjZShcIlN0b3AgTkwyIFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBhLmdldExvZ2dlcigpLnRyYWNlKFwiU3RvcCBFT0YyIFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICBhLmdldExvZ2dlcigpLmluZm8oXCJOb2RlOiBcIiwgcltkXS5pZCksIGEuYWRkTm9kZShyW2QgLSAxXS5sZW5ndGgsIHJbZF0uaWQsIHJbZF0uZGVzY3IsIHJbZF0udHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS50cmFjZShcIkljb246IFwiLCByW2RdKSwgYS5kZWNvcmF0ZU5vZGUoeyBpY29uOiByW2RdIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgIGEuZGVjb3JhdGVOb2RlKHsgY2xhc3M6IHJbZF0gfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS50cmFjZShcIlNQQUNFTElTVFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICBhLmdldExvZ2dlcigpLnRyYWNlKFwiTm9kZTogXCIsIHJbZF0uaWQpLCBhLmFkZE5vZGUoMCwgcltkXS5pZCwgcltkXS5kZXNjciwgcltkXS50eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICBhLmRlY29yYXRlTm9kZSh7IGljb246IHJbZF0gfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS50cmFjZShcIm5vZGUgZm91bmQgLi5cIiwgcltkIC0gMl0pLCB0aGlzLiQgPSB7IGlkOiByW2QgLSAxXSwgZGVzY3I6IHJbZCAtIDFdLCB0eXBlOiBhLmdldFR5cGUocltkIC0gMl0sIHJbZF0pIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgdGhpcy4kID0geyBpZDogcltkXSwgZGVzY3I6IHJbZF0sIHR5cGU6IGEubm9kZVR5cGUuREVGQVVMVCB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIGEuZ2V0TG9nZ2VyKCkudHJhY2UoXCJub2RlIGZvdW5kIC4uXCIsIHJbZCAtIDNdKSwgdGhpcy4kID0geyBpZDogcltkIC0gM10sIGRlc2NyOiByW2QgLSAxXSwgdHlwZTogYS5nZXRUeXBlKHJbZCAtIDJdLCByW2RdKSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIFwiYW5vbnltb3VzXCIpLFxuICAgIHRhYmxlOiBbeyAzOiAxLCA0OiAyLCA1OiAzLCA2OiBbMSwgNV0sIDg6IGUgfSwgeyAxOiBbM10gfSwgeyAxOiBbMiwgMV0gfSwgeyA0OiA2LCA2OiBbMSwgN10sIDc6IFsxLCA4XSwgODogZSB9LCB7IDY6IG4sIDc6IFsxLCAxMF0sIDk6IDksIDEyOiAxMSwgMTM6IGMsIDE0OiAxNCwgMTU6IGYsIDE2OiBoLCAxNzogMTcsIDE4OiAxOCwgMTk6IHAsIDIyOiBtIH0sIHQodSwgWzIsIDNdKSwgeyAxOiBbMiwgMl0gfSwgdCh1LCBbMiwgNF0pLCB0KHUsIFsyLCA1XSksIHsgMTogWzIsIDZdLCA2OiBuLCAxMjogMjEsIDEzOiBjLCAxNDogMTQsIDE1OiBmLCAxNjogaCwgMTc6IDE3LCAxODogMTgsIDE5OiBwLCAyMjogbSB9LCB7IDY6IG4sIDk6IDIyLCAxMjogMTEsIDEzOiBjLCAxNDogMTQsIDE1OiBmLCAxNjogaCwgMTc6IDE3LCAxODogMTgsIDE5OiBwLCAyMjogbSB9LCB7IDY6IE4sIDc6IFksIDEwOiAyMywgMTE6IHEgfSwgdChiLCBbMiwgMjJdLCB7IDE3OiAxNywgMTg6IDE4LCAxNDogMjcsIDE1OiBbMSwgMjhdLCAxNjogWzEsIDI5XSwgMTk6IHAsIDIyOiBtIH0pLCB0KGIsIFsyLCAxOF0pLCB0KGIsIFsyLCAxOV0pLCB0KGIsIFsyLCAyMF0pLCB0KGIsIFsyLCAyMV0pLCB0KGIsIFsyLCAyM10pLCB0KGIsIFsyLCAyNF0pLCB0KGIsIFsyLCAyNl0sIHsgMTk6IFsxLCAzMF0gfSksIHsgMjA6IFsxLCAzMV0gfSwgeyA2OiBOLCA3OiBZLCAxMDogMzIsIDExOiBxIH0sIHsgMTogWzIsIDddLCA2OiBuLCAxMjogMjEsIDEzOiBjLCAxNDogMTQsIDE1OiBmLCAxNjogaCwgMTc6IDE3LCAxODogMTgsIDE5OiBwLCAyMjogbSB9LCB0KEosIFsyLCAxNF0sIHsgNzogSywgMTE6IFEgfSksIHQoUiwgWzIsIDhdKSwgdChSLCBbMiwgOV0pLCB0KFIsIFsyLCAxMF0pLCB0KGIsIFsyLCAxNV0pLCB0KGIsIFsyLCAxNl0pLCB0KGIsIFsyLCAxN10pLCB7IDIwOiBbMSwgMzVdIH0sIHsgMjE6IFsxLCAzNl0gfSwgdChKLCBbMiwgMTNdLCB7IDc6IEssIDExOiBRIH0pLCB0KFIsIFsyLCAxMV0pLCB0KFIsIFsyLCAxMl0pLCB7IDIxOiBbMSwgMzddIH0sIHQoYiwgWzIsIDI1XSksIHQoYiwgWzIsIDI3XSldLFxuICAgIGRlZmF1bHRBY3Rpb25zOiB7IDI6IFsyLCAxXSwgNjogWzIsIDJdIH0sXG4gICAgcGFyc2VFcnJvcjogLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24ocywgaSkge1xuICAgICAgaWYgKGkucmVjb3ZlcmFibGUpXG4gICAgICAgIHRoaXMudHJhY2Uocyk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIG8gPSBuZXcgRXJyb3Iocyk7XG4gICAgICAgIHRocm93IG8uaGFzaCA9IGksIG87XG4gICAgICB9XG4gICAgfSwgXCJwYXJzZUVycm9yXCIpLFxuICAgIHBhcnNlOiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbihzKSB7XG4gICAgICB2YXIgaSA9IHRoaXMsIG8gPSBbMF0sIGEgPSBbXSwgZyA9IFtudWxsXSwgciA9IFtdLCB3ID0gdGhpcy50YWJsZSwgZCA9IFwiXCIsIFUgPSAwLCBaID0gMCwgcmUgPSAyLCBlZSA9IDEsIG9lID0gci5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIHkgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpLCB2ID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIGogaW4gdGhpcy55eSlcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIGopICYmICh2Lnl5W2pdID0gdGhpcy55eVtqXSk7XG4gICAgICB5LnNldElucHV0KHMsIHYueXkpLCB2Lnl5LmxleGVyID0geSwgdi55eS5wYXJzZXIgPSB0aGlzLCB0eXBlb2YgeS55eWxsb2MgPiBcInVcIiAmJiAoeS55eWxsb2MgPSB7fSk7XG4gICAgICB2YXIgRyA9IHkueXlsbG9jO1xuICAgICAgci5wdXNoKEcpO1xuICAgICAgdmFyIGFlID0geS5vcHRpb25zICYmIHkub3B0aW9ucy5yYW5nZXM7XG4gICAgICB0eXBlb2Ygdi55eS5wYXJzZUVycm9yID09IFwiZnVuY3Rpb25cIiA/IHRoaXMucGFyc2VFcnJvciA9IHYueXkucGFyc2VFcnJvciA6IHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgZnVuY3Rpb24gY2UoUykge1xuICAgICAgICBvLmxlbmd0aCA9IG8ubGVuZ3RoIC0gMiAqIFMsIGcubGVuZ3RoID0gZy5sZW5ndGggLSBTLCByLmxlbmd0aCA9IHIubGVuZ3RoIC0gUztcbiAgICAgIH1cbiAgICAgIGwoY2UsIFwicG9wU3RhY2tcIik7XG4gICAgICBmdW5jdGlvbiB0ZSgpIHtcbiAgICAgICAgdmFyIFM7XG4gICAgICAgIHJldHVybiBTID0gYS5wb3AoKSB8fCB5LmxleCgpIHx8IGVlLCB0eXBlb2YgUyAhPSBcIm51bWJlclwiICYmIChTIGluc3RhbmNlb2YgQXJyYXkgJiYgKGEgPSBTLCBTID0gYS5wb3AoKSksIFMgPSBpLnN5bWJvbHNfW1NdIHx8IFMpLCBTO1xuICAgICAgfVxuICAgICAgbCh0ZSwgXCJsZXhcIik7XG4gICAgICBmb3IgKHZhciBfLCBULCBELCBILCBPID0ge30sIFAsIGssIGllLCBNOyA7ICkge1xuICAgICAgICBpZiAoVCA9IG9bby5sZW5ndGggLSAxXSwgdGhpcy5kZWZhdWx0QWN0aW9uc1tUXSA/IEQgPSB0aGlzLmRlZmF1bHRBY3Rpb25zW1RdIDogKChfID09PSBudWxsIHx8IHR5cGVvZiBfID4gXCJ1XCIpICYmIChfID0gdGUoKSksIEQgPSB3W1RdICYmIHdbVF1bX10pLCB0eXBlb2YgRCA+IFwidVwiIHx8ICFELmxlbmd0aCB8fCAhRFswXSkge1xuICAgICAgICAgIHZhciAkID0gXCJcIjtcbiAgICAgICAgICBNID0gW107XG4gICAgICAgICAgZm9yIChQIGluIHdbVF0pXG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsc19bUF0gJiYgUCA+IHJlICYmIE0ucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1tQXSArIFwiJ1wiKTtcbiAgICAgICAgICB5LnNob3dQb3NpdGlvbiA/ICQgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoVSArIDEpICsgYDpcbmAgKyB5LnNob3dQb3NpdGlvbigpICsgYFxuRXhwZWN0aW5nIGAgKyBNLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tfXSB8fCBfKSArIFwiJ1wiIDogJCA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChVICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChfID09IGVlID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1tfXSB8fCBfKSArIFwiJ1wiKSwgdGhpcy5wYXJzZUVycm9yKCQsIHtcbiAgICAgICAgICAgIHRleHQ6IHkubWF0Y2gsXG4gICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW19dIHx8IF8sXG4gICAgICAgICAgICBsaW5lOiB5Lnl5bGluZW5vLFxuICAgICAgICAgICAgbG9jOiBHLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IE1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoRFswXSBpbnN0YW5jZW9mIEFycmF5ICYmIEQubGVuZ3RoID4gMSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBUICsgXCIsIHRva2VuOiBcIiArIF8pO1xuICAgICAgICBzd2l0Y2ggKERbMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBvLnB1c2goXyksIGcucHVzaCh5Lnl5dGV4dCksIHIucHVzaCh5Lnl5bGxvYyksIG8ucHVzaChEWzFdKSwgXyA9IG51bGwsIFogPSB5Lnl5bGVuZywgZCA9IHkueXl0ZXh0LCBVID0geS55eWxpbmVubywgRyA9IHkueXlsbG9jO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKGsgPSB0aGlzLnByb2R1Y3Rpb25zX1tEWzFdXVsxXSwgTy4kID0gZ1tnLmxlbmd0aCAtIGtdLCBPLl8kID0ge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiByW3IubGVuZ3RoIC0gKGsgfHwgMSldLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogcltyLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiByW3IubGVuZ3RoIC0gKGsgfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHJbci5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfSwgYWUgJiYgKE8uXyQucmFuZ2UgPSBbXG4gICAgICAgICAgICAgIHJbci5sZW5ndGggLSAoayB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgIHJbci5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgXSksIEggPSB0aGlzLnBlcmZvcm1BY3Rpb24uYXBwbHkoTywgW1xuICAgICAgICAgICAgICBkLFxuICAgICAgICAgICAgICBaLFxuICAgICAgICAgICAgICBVLFxuICAgICAgICAgICAgICB2Lnl5LFxuICAgICAgICAgICAgICBEWzFdLFxuICAgICAgICAgICAgICBnLFxuICAgICAgICAgICAgICByXG4gICAgICAgICAgICBdLmNvbmNhdChvZSkpLCB0eXBlb2YgSCA8IFwidVwiKVxuICAgICAgICAgICAgICByZXR1cm4gSDtcbiAgICAgICAgICAgIGsgJiYgKG8gPSBvLnNsaWNlKDAsIC0xICogayAqIDIpLCBnID0gZy5zbGljZSgwLCAtMSAqIGspLCByID0gci5zbGljZSgwLCAtMSAqIGspKSwgby5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW0RbMV1dWzBdKSwgZy5wdXNoKE8uJCksIHIucHVzaChPLl8kKSwgaWUgPSB3W29bby5sZW5ndGggLSAyXV1bb1tvLmxlbmd0aCAtIDFdXSwgby5wdXNoKGllKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICEwO1xuICAgIH0sIFwicGFyc2VcIilcbiAgfSwgc2UgPSAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0ge1xuICAgICAgRU9GOiAxLFxuICAgICAgcGFyc2VFcnJvcjogLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oaSwgbykge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpXG4gICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihpLCBvKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihpKTtcbiAgICAgIH0sIFwicGFyc2VFcnJvclwiKSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24ocywgaSkge1xuICAgICAgICByZXR1cm4gdGhpcy55eSA9IGkgfHwgdGhpcy55eSB8fCB7fSwgdGhpcy5faW5wdXQgPSBzLCB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gITEsIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDAsIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCIsIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAodGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF0pLCB0aGlzLm9mZnNldCA9IDAsIHRoaXM7XG4gICAgICB9LCBcInNldElucHV0XCIpLFxuICAgICAgLy8gY29uc3VtZXMgYW5kIHJldHVybnMgb25lIGNoYXIgZnJvbSB0aGUgaW5wdXRcbiAgICAgIGlucHV0OiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHMgPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gcywgdGhpcy55eWxlbmcrKywgdGhpcy5vZmZzZXQrKywgdGhpcy5tYXRjaCArPSBzLCB0aGlzLm1hdGNoZWQgKz0gcztcbiAgICAgICAgdmFyIGkgPSBzLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgcmV0dXJuIGkgPyAodGhpcy55eWxpbmVubysrLCB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKykgOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrLCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmIHRoaXMueXlsbG9jLnJhbmdlWzFdKyssIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSksIHM7XG4gICAgICB9LCBcImlucHV0XCIpLFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgdmFyIGkgPSBzLmxlbmd0aCwgbyA9IHMuc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBzICsgdGhpcy5faW5wdXQsIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGkpLCB0aGlzLm9mZnNldCAtPSBpO1xuICAgICAgICB2YXIgYSA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSksIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpLCBvLmxlbmd0aCAtIDEgJiYgKHRoaXMueXlsaW5lbm8gLT0gby5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIGcgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgcmV0dXJuIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbyA/IChvLmxlbmd0aCA9PT0gYS5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIGFbYS5sZW5ndGggLSBvLmxlbmd0aF0ubGVuZ3RoIC0gb1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBpXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW2dbMF0sIGdbMF0gKyB0aGlzLnl5bGVuZyAtIGldKSwgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXM7XG4gICAgICB9LCBcInVucHV0XCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbiAgICAgIG1vcmU6IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9yZSA9ICEwLCB0aGlzO1xuICAgICAgfSwgXCJtb3JlXCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgIHJlamVjdDogLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKVxuICAgICAgICAgIHRoaXMuX2JhY2t0cmFjayA9ICEwO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXG5gICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sIFwicmVqZWN0XCIpLFxuICAgICAgLy8gcmV0YWluIGZpcnN0IG4gY2hhcmFjdGVycyBvZiB0aGUgbWF0Y2hcbiAgICAgIGxlc3M6IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKHMpKTtcbiAgICAgIH0sIFwibGVzc1wiKSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKHMubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBzLnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwicGFzdElucHV0XCIpLFxuICAgICAgLy8gZGlzcGxheXMgdXBjb21pbmcgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICB1cGNvbWluZ0lucHV0OiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHMgPSB0aGlzLm1hdGNoO1xuICAgICAgICByZXR1cm4gcy5sZW5ndGggPCAyMCAmJiAocyArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBzLmxlbmd0aCkpLCAocy5zdWJzdHIoMCwgMjApICsgKHMubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwidXBjb21pbmdJbnB1dFwiKSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzID0gdGhpcy5wYXN0SW5wdXQoKSwgaSA9IG5ldyBBcnJheShzLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICByZXR1cm4gcyArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgYFxuYCArIGkgKyBcIl5cIjtcbiAgICAgIH0sIFwic2hvd1Bvc2l0aW9uXCIpLFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbihzLCBpKSB7XG4gICAgICAgIHZhciBvLCBhLCBnO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlciAmJiAoZyA9IHtcbiAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAoZy55eWxsb2MucmFuZ2UgPSB0aGlzLnl5bGxvYy5yYW5nZS5zbGljZSgwKSkpLCBhID0gc1swXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyksIGEgJiYgKHRoaXMueXlsaW5lbm8gKz0gYS5sZW5ndGgpLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBhID8gYVthLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGFbYS5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIHNbMF0ubGVuZ3RoXG4gICAgICAgIH0sIHRoaXMueXl0ZXh0ICs9IHNbMF0sIHRoaXMubWF0Y2ggKz0gc1swXSwgdGhpcy5tYXRjaGVzID0gcywgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ10pLCB0aGlzLl9tb3JlID0gITEsIHRoaXMuX2JhY2t0cmFjayA9ICExLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKHNbMF0ubGVuZ3RoKSwgdGhpcy5tYXRjaGVkICs9IHNbMF0sIG8gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBpLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pLCB0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQgJiYgKHRoaXMuZG9uZSA9ICExKSwgbylcbiAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIHIgaW4gZylcbiAgICAgICAgICAgIHRoaXNbcl0gPSBnW3JdO1xuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9LCBcInRlc3RfbWF0Y2hcIiksXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCBpbiBpbnB1dFxuICAgICAgbmV4dDogLyogQF9fUFVSRV9fICovIGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB0aGlzLl9pbnB1dCB8fCAodGhpcy5kb25lID0gITApO1xuICAgICAgICB2YXIgcywgaSwgbywgYTtcbiAgICAgICAgdGhpcy5fbW9yZSB8fCAodGhpcy55eXRleHQgPSBcIlwiLCB0aGlzLm1hdGNoID0gXCJcIik7XG4gICAgICAgIGZvciAodmFyIGcgPSB0aGlzLl9jdXJyZW50UnVsZXMoKSwgciA9IDA7IHIgPCBnLmxlbmd0aDsgcisrKVxuICAgICAgICAgIGlmIChvID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tnW3JdXSksIG8gJiYgKCFpIHx8IG9bMF0ubGVuZ3RoID4gaVswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBpZiAoaSA9IG8sIGEgPSByLCB0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIGlmIChzID0gdGhpcy50ZXN0X21hdGNoKG8sIGdbcl0pLCBzICE9PSAhMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIGkgPSAhMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmZsZXgpXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkgPyAocyA9IHRoaXMudGVzdF9tYXRjaChpLCBnW2FdKSwgcyAhPT0gITEgPyBzIDogITEpIDogdGhpcy5faW5wdXQgPT09IFwiXCIgPyB0aGlzLkVPRiA6IHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBVbnJlY29nbml6ZWQgdGV4dC5cbmAgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgIH0pO1xuICAgICAgfSwgXCJuZXh0XCIpLFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIGkgfHwgdGhpcy5sZXgoKTtcbiAgICAgIH0sIFwibGV4XCIpLFxuICAgICAgLy8gYWN0aXZhdGVzIGEgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSAocHVzaGVzIHRoZSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9udG8gdGhlIGNvbmRpdGlvbiBzdGFjaylcbiAgICAgIGJlZ2luOiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbihpKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChpKTtcbiAgICAgIH0sIFwiYmVnaW5cIiksXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIGkgPiAwID8gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKSA6IHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICB9LCBcInBvcFN0YXRlXCIpLFxuICAgICAgLy8gcHJvZHVjZSB0aGUgbGV4ZXIgcnVsZSBzZXQgd2hpY2ggaXMgYWN0aXZlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGVcbiAgICAgIF9jdXJyZW50UnVsZXM6IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdID8gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXMgOiB0aGlzLmNvbmRpdGlvbnMuSU5JVElBTC5ydWxlcztcbiAgICAgIH0sIFwiX2N1cnJlbnRSdWxlc1wiKSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBpID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnMoaSB8fCAwKSwgaSA+PSAwID8gdGhpcy5jb25kaXRpb25TdGFja1tpXSA6IFwiSU5JVElBTFwiO1xuICAgICAgfSwgXCJ0b3BTdGF0ZVwiKSxcbiAgICAgIC8vIGFsaWFzIGZvciBiZWdpbihjb25kaXRpb24pXG4gICAgICBwdXNoU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyBsKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdGhpcy5iZWdpbihpKTtcbiAgICAgIH0sIFwicHVzaFN0YXRlXCIpLFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSwgXCJzdGF0ZVN0YWNrU2l6ZVwiKSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6ICEwIH0sXG4gICAgICBwZXJmb3JtQWN0aW9uOiAvKiBAX19QVVJFX18gKi8gbChmdW5jdGlvbihpLCBvLCBhLCBnKSB7XG4gICAgICAgIHN3aXRjaCAoYSkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBpLmdldExvZ2dlcigpLnRyYWNlKFwiRm91bmQgY29tbWVudFwiLCBvLnl5dGV4dCksIDY7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIDg7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIkNMQVNTXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgMTY7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgaS5nZXRMb2dnZXIoKS50cmFjZShcIkJlZ2luIGljb25cIiksIHRoaXMuYmVnaW4oXCJJQ09OXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuIGkuZ2V0TG9nZ2VyKCkudHJhY2UoXCJTUEFDRUxJTkVcIiksIDY7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmV0dXJuIDc7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGkuZ2V0TG9nZ2VyKCkudHJhY2UoXCJlbmQgaWNvblwiKSwgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIHJldHVybiBpLmdldExvZ2dlcigpLnRyYWNlKFwiRXhwbG9kaW5nIG5vZGVcIiksIHRoaXMuYmVnaW4oXCJOT0RFXCIpLCAxOTtcbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgcmV0dXJuIGkuZ2V0TG9nZ2VyKCkudHJhY2UoXCJDbG91ZFwiKSwgdGhpcy5iZWdpbihcIk5PREVcIiksIDE5O1xuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICByZXR1cm4gaS5nZXRMb2dnZXIoKS50cmFjZShcIkV4cGxvc2lvbiBCYW5nXCIpLCB0aGlzLmJlZ2luKFwiTk9ERVwiKSwgMTk7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHJldHVybiBpLmdldExvZ2dlcigpLnRyYWNlKFwiQ2xvdWQgQmFuZ1wiKSwgdGhpcy5iZWdpbihcIk5PREVcIiksIDE5O1xuICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcIk5PREVcIiksIDE5O1xuICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcIk5PREVcIiksIDE5O1xuICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcIk5PREVcIiksIDE5O1xuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcIk5PREVcIiksIDE5O1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICByZXR1cm4gMTM7XG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIHJldHVybiAyMjtcbiAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgcmV0dXJuIDExO1xuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiTlNUUjJcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERVNDUlwiO1xuICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgaS5nZXRMb2dnZXIoKS50cmFjZShcIlN0YXJ0aW5nIE5TVFJcIiksIHRoaXMuYmVnaW4oXCJOU1RSXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIHJldHVybiBpLmdldExvZ2dlcigpLnRyYWNlKFwiZGVzY3JpcHRpb246XCIsIG8ueXl0ZXh0KSwgXCJOT0RFX0RFU0NSXCI7XG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBpLmdldExvZ2dlcigpLnRyYWNlKFwibm9kZSBlbmQgKSlcIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIGkuZ2V0TG9nZ2VyKCkudHJhY2UoXCJub2RlIGVuZCApXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBpLmdldExvZ2dlcigpLnRyYWNlKFwibm9kZSBlbmQgLi4uXCIsIG8ueXl0ZXh0KSwgXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgaS5nZXRMb2dnZXIoKS50cmFjZShcIm5vZGUgZW5kICgoXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBpLmdldExvZ2dlcigpLnRyYWNlKFwibm9kZSBlbmQgKC1cIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIGkuZ2V0TG9nZ2VyKCkudHJhY2UoXCJub2RlIGVuZCAoLVwiKSwgXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgaS5nZXRMb2dnZXIoKS50cmFjZShcIm5vZGUgZW5kICgoXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBpLmdldExvZ2dlcigpLnRyYWNlKFwibm9kZSBlbmQgKChcIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgIHJldHVybiBpLmdldExvZ2dlcigpLnRyYWNlKFwiTG9uZyBkZXNjcmlwdGlvbjpcIiwgby55eXRleHQpLCAyMDtcbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgcmV0dXJuIGkuZ2V0TG9nZ2VyKCkudHJhY2UoXCJMb25nIGRlc2NyaXB0aW9uOlwiLCBvLnl5dGV4dCksIDIwO1xuICAgICAgICB9XG4gICAgICB9LCBcImFub255bW91c1wiKSxcbiAgICAgIHJ1bGVzOiBbL14oPzpcXHMqJSUuKikvaSwgL14oPzptaW5kbWFwXFxiKS9pLCAvXig/Ojo6OikvaSwgL14oPzouKykvaSwgL14oPzpcXG4pL2ksIC9eKD86OjppY29uXFwoKS9pLCAvXig/OltcXHNdK1tcXG5dKS9pLCAvXig/OltcXG5dKykvaSwgL14oPzpbXlxcKV0rKS9pLCAvXig/OlxcKSkvaSwgL14oPzotXFwpKS9pLCAvXig/OlxcKC0pL2ksIC9eKD86XFwpXFwpKS9pLCAvXig/OlxcKSkvaSwgL14oPzpcXChcXCgpL2ksIC9eKD86XFx7XFx7KS9pLCAvXig/OlxcKCkvaSwgL14oPzpcXFspL2ksIC9eKD86W1xcc10rKS9pLCAvXig/OlteXFwoXFxbXFxuXFwpXFx7XFx9XSspL2ksIC9eKD86JCkvaSwgL14oPzpbXCJdW2BdKS9pLCAvXig/OlteYFwiXSspL2ksIC9eKD86W2BdW1wiXSkvaSwgL14oPzpbXCJdKS9pLCAvXig/OlteXCJdKykvaSwgL14oPzpbXCJdKS9pLCAvXig/OltcXCldXFwpKS9pLCAvXig/OltcXCldKS9pLCAvXig/OltcXF1dKS9pLCAvXig/OlxcfVxcfSkvaSwgL14oPzpcXCgtKS9pLCAvXig/Oi1cXCkpL2ksIC9eKD86XFwoXFwoKS9pLCAvXig/OlxcKCkvaSwgL14oPzpbXlxcKVxcXVxcKFxcfV0rKS9pLCAvXig/Oi4rKD8hXFwoXFwoKSkvaV0sXG4gICAgICBjb25kaXRpb25zOiB7IENMQVNTOiB7IHJ1bGVzOiBbMywgNF0sIGluY2x1c2l2ZTogITEgfSwgSUNPTjogeyBydWxlczogWzgsIDldLCBpbmNsdXNpdmU6ICExIH0sIE5TVFIyOiB7IHJ1bGVzOiBbMjIsIDIzXSwgaW5jbHVzaXZlOiAhMSB9LCBOU1RSOiB7IHJ1bGVzOiBbMjUsIDI2XSwgaW5jbHVzaXZlOiAhMSB9LCBOT0RFOiB7IHJ1bGVzOiBbMjEsIDI0LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNl0sIGluY2x1c2l2ZTogITEgfSwgSU5JVElBTDogeyBydWxlczogWzAsIDEsIDIsIDUsIDYsIDcsIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF0sIGluY2x1c2l2ZTogITAgfSB9XG4gICAgfTtcbiAgICByZXR1cm4geDtcbiAgfSkoKTtcbiAgQi5sZXhlciA9IHNlO1xuICBmdW5jdGlvbiBBKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICByZXR1cm4gbChBLCBcIlBhcnNlclwiKSwgQS5wcm90b3R5cGUgPSBCLCBCLlBhcnNlciA9IEEsIG5ldyBBKCk7XG59KSgpO1xuWC5wYXJzZXIgPSBYO1xudmFyIERlID0gWCwgTCA9IHtcbiAgREVGQVVMVDogMCxcbiAgTk9fQk9SREVSOiAwLFxuICBST1VOREVEX1JFQ1Q6IDEsXG4gIFJFQ1Q6IDIsXG4gIENJUkNMRTogMyxcbiAgQ0xPVUQ6IDQsXG4gIEJBTkc6IDUsXG4gIEhFWEFHT046IDZcbn0sIEksIE5lID0gKEkgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubm9kZXMgPSBbXSwgdGhpcy5jb3VudCA9IDAsIHRoaXMuZWxlbWVudHMgPSB7fSwgdGhpcy5nZXRMb2dnZXIgPSB0aGlzLmdldExvZ2dlci5iaW5kKHRoaXMpLCB0aGlzLm5vZGVUeXBlID0gTCwgdGhpcy5jbGVhcigpLCB0aGlzLmdldFR5cGUgPSB0aGlzLmdldFR5cGUuYmluZCh0aGlzKSwgdGhpcy5nZXRFbGVtZW50QnlJZCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQuYmluZCh0aGlzKSwgdGhpcy5nZXRQYXJlbnQgPSB0aGlzLmdldFBhcmVudC5iaW5kKHRoaXMpLCB0aGlzLmdldE1pbmRtYXAgPSB0aGlzLmdldE1pbmRtYXAuYmluZCh0aGlzKSwgdGhpcy5hZGROb2RlID0gdGhpcy5hZGROb2RlLmJpbmQodGhpcyksIHRoaXMuZGVjb3JhdGVOb2RlID0gdGhpcy5kZWNvcmF0ZU5vZGUuYmluZCh0aGlzKTtcbiAgfVxuICBjbGVhcigpIHtcbiAgICB0aGlzLm5vZGVzID0gW10sIHRoaXMuY291bnQgPSAwLCB0aGlzLmVsZW1lbnRzID0ge30sIHRoaXMuYmFzZUxldmVsID0gdm9pZCAwO1xuICB9XG4gIGdldFBhcmVudChlKSB7XG4gICAgZm9yIChsZXQgbiA9IHRoaXMubm9kZXMubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pXG4gICAgICBpZiAodGhpcy5ub2Rlc1tuXS5sZXZlbCA8IGUpXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzW25dO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGdldE1pbmRtYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMubGVuZ3RoID4gMCA/IHRoaXMubm9kZXNbMF0gOiBudWxsO1xuICB9XG4gIGFkZE5vZGUoZSwgbiwgYywgZikge1xuICAgIEMuaW5mbyhcImFkZE5vZGVcIiwgZSwgbiwgYywgZik7XG4gICAgbGV0IGggPSAhMTtcbiAgICB0aGlzLm5vZGVzLmxlbmd0aCA9PT0gMCA/ICh0aGlzLmJhc2VMZXZlbCA9IGUsIGUgPSAwLCBoID0gITApIDogdGhpcy5iYXNlTGV2ZWwgIT09IHZvaWQgMCAmJiAoZSA9IGUgLSB0aGlzLmJhc2VMZXZlbCwgaCA9ICExKTtcbiAgICBjb25zdCBwID0gVygpO1xuICAgIGxldCBtID0gcC5taW5kbWFwPy5wYWRkaW5nID8/IEYubWluZG1hcC5wYWRkaW5nO1xuICAgIHN3aXRjaCAoZikge1xuICAgICAgY2FzZSB0aGlzLm5vZGVUeXBlLlJPVU5ERURfUkVDVDpcbiAgICAgIGNhc2UgdGhpcy5ub2RlVHlwZS5SRUNUOlxuICAgICAgY2FzZSB0aGlzLm5vZGVUeXBlLkhFWEFHT046XG4gICAgICAgIG0gKj0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IHUgPSB7XG4gICAgICBpZDogdGhpcy5jb3VudCsrLFxuICAgICAgbm9kZUlkOiBWKG4sIHApLFxuICAgICAgbGV2ZWw6IGUsXG4gICAgICBkZXNjcjogVihjLCBwKSxcbiAgICAgIHR5cGU6IGYsXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICB3aWR0aDogcC5taW5kbWFwPy5tYXhOb2RlV2lkdGggPz8gRi5taW5kbWFwLm1heE5vZGVXaWR0aCxcbiAgICAgIHBhZGRpbmc6IG0sXG4gICAgICBpc1Jvb3Q6IGhcbiAgICB9LCBOID0gdGhpcy5nZXRQYXJlbnQoZSk7XG4gICAgaWYgKE4pXG4gICAgICBOLmNoaWxkcmVuLnB1c2godSksIHRoaXMubm9kZXMucHVzaCh1KTtcbiAgICBlbHNlIGlmIChoKVxuICAgICAgdGhpcy5ub2Rlcy5wdXNoKHUpO1xuICAgIGVsc2VcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRoZXJlIGNhbiBiZSBvbmx5IG9uZSByb290LiBObyBwYXJlbnQgY291bGQgYmUgZm91bmQgZm9yIChcIiR7dS5kZXNjcn1cIilgXG4gICAgICApO1xuICB9XG4gIGdldFR5cGUoZSwgbikge1xuICAgIHN3aXRjaCAoQy5kZWJ1ZyhcIkluIGdldCB0eXBlXCIsIGUsIG4pLCBlKSB7XG4gICAgICBjYXNlIFwiW1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVHlwZS5SRUNUO1xuICAgICAgY2FzZSBcIihcIjpcbiAgICAgICAgcmV0dXJuIG4gPT09IFwiKVwiID8gdGhpcy5ub2RlVHlwZS5ST1VOREVEX1JFQ1QgOiB0aGlzLm5vZGVUeXBlLkNMT1VEO1xuICAgICAgY2FzZSBcIigoXCI6XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlLkNJUkNMRTtcbiAgICAgIGNhc2UgXCIpXCI6XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlLkNMT1VEO1xuICAgICAgY2FzZSBcIikpXCI6XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlLkJBTkc7XG4gICAgICBjYXNlIFwie3tcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVR5cGUuSEVYQUdPTjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVUeXBlLkRFRkFVTFQ7XG4gICAgfVxuICB9XG4gIHNldEVsZW1lbnRGb3JJZChlLCBuKSB7XG4gICAgdGhpcy5lbGVtZW50c1tlXSA9IG47XG4gIH1cbiAgZ2V0RWxlbWVudEJ5SWQoZSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzW2VdO1xuICB9XG4gIGRlY29yYXRlTm9kZShlKSB7XG4gICAgaWYgKCFlKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBXKCksIGMgPSB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoIC0gMV07XG4gICAgZS5pY29uICYmIChjLmljb24gPSBWKGUuaWNvbiwgbikpLCBlLmNsYXNzICYmIChjLmNsYXNzID0gVihlLmNsYXNzLCBuKSk7XG4gIH1cbiAgdHlwZTJTdHIoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSB0aGlzLm5vZGVUeXBlLkRFRkFVTFQ6XG4gICAgICAgIHJldHVybiBcIm5vLWJvcmRlclwiO1xuICAgICAgY2FzZSB0aGlzLm5vZGVUeXBlLlJFQ1Q6XG4gICAgICAgIHJldHVybiBcInJlY3RcIjtcbiAgICAgIGNhc2UgdGhpcy5ub2RlVHlwZS5ST1VOREVEX1JFQ1Q6XG4gICAgICAgIHJldHVybiBcInJvdW5kZWQtcmVjdFwiO1xuICAgICAgY2FzZSB0aGlzLm5vZGVUeXBlLkNJUkNMRTpcbiAgICAgICAgcmV0dXJuIFwiY2lyY2xlXCI7XG4gICAgICBjYXNlIHRoaXMubm9kZVR5cGUuQ0xPVUQ6XG4gICAgICAgIHJldHVybiBcImNsb3VkXCI7XG4gICAgICBjYXNlIHRoaXMubm9kZVR5cGUuQkFORzpcbiAgICAgICAgcmV0dXJuIFwiYmFuZ1wiO1xuICAgICAgY2FzZSB0aGlzLm5vZGVUeXBlLkhFWEFHT046XG4gICAgICAgIHJldHVybiBcImhleGdvblwiO1xuICAgICAgLy8gY3NwZWxsOiBkaXNhYmxlLWxpbmVcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIm5vLWJvcmRlclwiO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQXNzaWduIHNlY3Rpb24gbnVtYmVycyB0byBub2RlcyBiYXNlZCBvbiB0aGVpciBwb3NpdGlvbiByZWxhdGl2ZSB0byByb290XG4gICAqIEBwYXJhbSBub2RlIC0gVGhlIG1pbmRtYXAgbm9kZSB0byBwcm9jZXNzXG4gICAqIEBwYXJhbSBzZWN0aW9uTnVtYmVyIC0gVGhlIHNlY3Rpb24gbnVtYmVyIHRvIGFzc2lnbiAodW5kZWZpbmVkIGZvciByb290KVxuICAgKi9cbiAgYXNzaWduU2VjdGlvbnMoZSwgbikge1xuICAgIGlmIChlLmxldmVsID09PSAwID8gZS5zZWN0aW9uID0gdm9pZCAwIDogZS5zZWN0aW9uID0gbiwgZS5jaGlsZHJlbilcbiAgICAgIGZvciAoY29uc3QgW2MsIGZdIG9mIGUuY2hpbGRyZW4uZW50cmllcygpKSB7XG4gICAgICAgIGNvbnN0IGggPSBlLmxldmVsID09PSAwID8gYyA6IG47XG4gICAgICAgIHRoaXMuYXNzaWduU2VjdGlvbnMoZiwgaCk7XG4gICAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgbWluZG1hcCB0cmVlIHN0cnVjdHVyZSB0byBmbGF0IGFycmF5IG9mIG5vZGVzXG4gICAqIEBwYXJhbSBub2RlIC0gVGhlIG1pbmRtYXAgbm9kZSB0byBwcm9jZXNzXG4gICAqIEBwYXJhbSBwcm9jZXNzZWROb2RlcyAtIEFycmF5IHRvIGNvbGxlY3QgcHJvY2Vzc2VkIG5vZGVzXG4gICAqL1xuICBmbGF0dGVuTm9kZXMoZSwgbikge1xuICAgIGNvbnN0IGMgPSBbXCJtaW5kbWFwLW5vZGVcIl07XG4gICAgZS5pc1Jvb3QgPT09ICEwID8gYy5wdXNoKFwic2VjdGlvbi1yb290XCIsIFwic2VjdGlvbi0tMVwiKSA6IGUuc2VjdGlvbiAhPT0gdm9pZCAwICYmIGMucHVzaChgc2VjdGlvbi0ke2Uuc2VjdGlvbn1gKSwgZS5jbGFzcyAmJiBjLnB1c2goZS5jbGFzcyk7XG4gICAgY29uc3QgZiA9IGMuam9pbihcIiBcIiksIGggPSAvKiBAX19QVVJFX18gKi8gbCgobSkgPT4ge1xuICAgICAgc3dpdGNoIChtKSB7XG4gICAgICAgIGNhc2UgTC5DSVJDTEU6XG4gICAgICAgICAgcmV0dXJuIFwibWluZG1hcENpcmNsZVwiO1xuICAgICAgICBjYXNlIEwuUkVDVDpcbiAgICAgICAgICByZXR1cm4gXCJyZWN0XCI7XG4gICAgICAgIGNhc2UgTC5ST1VOREVEX1JFQ1Q6XG4gICAgICAgICAgcmV0dXJuIFwicm91bmRlZFwiO1xuICAgICAgICBjYXNlIEwuQ0xPVUQ6XG4gICAgICAgICAgcmV0dXJuIFwiY2xvdWRcIjtcbiAgICAgICAgY2FzZSBMLkJBTkc6XG4gICAgICAgICAgcmV0dXJuIFwiYmFuZ1wiO1xuICAgICAgICBjYXNlIEwuSEVYQUdPTjpcbiAgICAgICAgICByZXR1cm4gXCJoZXhhZ29uXCI7XG4gICAgICAgIGNhc2UgTC5ERUZBVUxUOlxuICAgICAgICAgIHJldHVybiBcImRlZmF1bHRNaW5kbWFwTm9kZVwiO1xuICAgICAgICBjYXNlIEwuTk9fQk9SREVSOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcInJlY3RcIjtcbiAgICAgIH1cbiAgICB9LCBcImdldFNoYXBlRnJvbVR5cGVcIiksIHAgPSB7XG4gICAgICBpZDogZS5pZC50b1N0cmluZygpLFxuICAgICAgZG9tSWQ6IFwibm9kZV9cIiArIGUuaWQudG9TdHJpbmcoKSxcbiAgICAgIGxhYmVsOiBlLmRlc2NyLFxuICAgICAgaXNHcm91cDogITEsXG4gICAgICBzaGFwZTogaChlLnR5cGUpLFxuICAgICAgd2lkdGg6IGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IGUuaGVpZ2h0ID8/IDAsXG4gICAgICBwYWRkaW5nOiBlLnBhZGRpbmcsXG4gICAgICBjc3NDbGFzc2VzOiBmLFxuICAgICAgY3NzU3R5bGVzOiBbXSxcbiAgICAgIGxvb2s6IFwiZGVmYXVsdFwiLFxuICAgICAgaWNvbjogZS5pY29uLFxuICAgICAgeDogZS54LFxuICAgICAgeTogZS55LFxuICAgICAgLy8gTWluZG1hcC1zcGVjaWZpYyBwcm9wZXJ0aWVzXG4gICAgICBsZXZlbDogZS5sZXZlbCxcbiAgICAgIG5vZGVJZDogZS5ub2RlSWQsXG4gICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICBzZWN0aW9uOiBlLnNlY3Rpb25cbiAgICB9O1xuICAgIGlmIChuLnB1c2gocCksIGUuY2hpbGRyZW4pXG4gICAgICBmb3IgKGNvbnN0IG0gb2YgZS5jaGlsZHJlbilcbiAgICAgICAgdGhpcy5mbGF0dGVuTm9kZXMobSwgbik7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGVkZ2VzIGZyb20gcGFyZW50LWNoaWxkIHJlbGF0aW9uc2hpcHMgaW4gbWluZG1hcCB0cmVlXG4gICAqIEBwYXJhbSBub2RlIC0gVGhlIG1pbmRtYXAgbm9kZSB0byBwcm9jZXNzXG4gICAqIEBwYXJhbSBlZGdlcyAtIEFycmF5IHRvIGNvbGxlY3QgZWRnZXNcbiAgICovXG4gIGdlbmVyYXRlRWRnZXMoZSwgbikge1xuICAgIGlmIChlLmNoaWxkcmVuKVxuICAgICAgZm9yIChjb25zdCBjIG9mIGUuY2hpbGRyZW4pIHtcbiAgICAgICAgbGV0IGYgPSBcImVkZ2VcIjtcbiAgICAgICAgYy5zZWN0aW9uICE9PSB2b2lkIDAgJiYgKGYgKz0gYCBzZWN0aW9uLWVkZ2UtJHtjLnNlY3Rpb259YCk7XG4gICAgICAgIGNvbnN0IGggPSBlLmxldmVsICsgMTtcbiAgICAgICAgZiArPSBgIGVkZ2UtZGVwdGgtJHtofWA7XG4gICAgICAgIGNvbnN0IHAgPSB7XG4gICAgICAgICAgaWQ6IGBlZGdlXyR7ZS5pZH1fJHtjLmlkfWAsXG4gICAgICAgICAgc3RhcnQ6IGUuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICBlbmQ6IGMuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgIGN1cnZlOiBcImJhc2lzXCIsXG4gICAgICAgICAgdGhpY2tuZXNzOiBcIm5vcm1hbFwiLFxuICAgICAgICAgIGxvb2s6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgIGNsYXNzZXM6IGYsXG4gICAgICAgICAgLy8gU3RvcmUgbWluZG1hcC1zcGVjaWZpYyBkYXRhXG4gICAgICAgICAgZGVwdGg6IGUubGV2ZWwsXG4gICAgICAgICAgc2VjdGlvbjogYy5zZWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIG4ucHVzaChwKSwgdGhpcy5nZW5lcmF0ZUVkZ2VzKGMsIG4pO1xuICAgICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZXQgc3RydWN0dXJlZCBkYXRhIGZvciBsYXlvdXQgYWxnb3JpdGhtc1xuICAgKiBGb2xsb3dpbmcgdGhlIHBhdHRlcm4gZXN0YWJsaXNoZWQgYnkgRVIgZGlhZ3JhbXNcbiAgICogQHJldHVybnMgU3RydWN0dXJlZCBkYXRhIGNvbnRhaW5pbmcgbm9kZXMsIGVkZ2VzLCBhbmQgY29uZmlnXG4gICAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGUgPSB0aGlzLmdldE1pbmRtYXAoKSwgbiA9IFcoKSwgZiA9IHVlKCkubGF5b3V0ICE9PSB2b2lkIDAsIGggPSBuO1xuICAgIGlmIChmIHx8IChoLmxheW91dCA9IFwiY29zZS1iaWxrZW50XCIpLCAhZSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGVzOiBbXSxcbiAgICAgICAgZWRnZXM6IFtdLFxuICAgICAgICBjb25maWc6IGhcbiAgICAgIH07XG4gICAgQy5kZWJ1ZyhcImdldERhdGE6IG1pbmRtYXBSb290XCIsIGUsIG4pLCB0aGlzLmFzc2lnblNlY3Rpb25zKGUpO1xuICAgIGNvbnN0IHAgPSBbXSwgbSA9IFtdO1xuICAgIHRoaXMuZmxhdHRlbk5vZGVzKGUsIHApLCB0aGlzLmdlbmVyYXRlRWRnZXMoZSwgbSksIEMuZGVidWcoXG4gICAgICBgZ2V0RGF0YTogcHJvY2Vzc2VkICR7cC5sZW5ndGh9IG5vZGVzIGFuZCAke20ubGVuZ3RofSBlZGdlc2BcbiAgICApO1xuICAgIGNvbnN0IHUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgTiBvZiBwKVxuICAgICAgdS5zZXQoTi5pZCwge1xuICAgICAgICBzaGFwZTogTi5zaGFwZSxcbiAgICAgICAgd2lkdGg6IE4ud2lkdGgsXG4gICAgICAgIGhlaWdodDogTi5oZWlnaHQsXG4gICAgICAgIHBhZGRpbmc6IE4ucGFkZGluZ1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVzOiBwLFxuICAgICAgZWRnZXM6IG0sXG4gICAgICBjb25maWc6IGgsXG4gICAgICAvLyBTdG9yZSB0aGUgcm9vdCBub2RlIGZvciBtaW5kbWFwLXNwZWNpZmljIGxheW91dCBhbGdvcml0aG1zXG4gICAgICByb290Tm9kZTogZSxcbiAgICAgIC8vIFByb3BlcnRpZXMgcmVxdWlyZWQgYnkgZGFncmUgbGF5b3V0IGFsZ29yaXRobVxuICAgICAgbWFya2VyczogW1wicG9pbnRcIl0sXG4gICAgICAvLyBNaW5kbWFwcyBkb24ndCB1c2UgbWFya2Vyc1xuICAgICAgZGlyZWN0aW9uOiBcIlRCXCIsXG4gICAgICAvLyBUb3AtdG8tYm90dG9tIGRpcmVjdGlvbiBmb3IgbWluZG1hcHNcbiAgICAgIG5vZGVTcGFjaW5nOiA1MCxcbiAgICAgIC8vIERlZmF1bHQgc3BhY2luZyBiZXR3ZWVuIG5vZGVzXG4gICAgICByYW5rU3BhY2luZzogNTAsXG4gICAgICAvLyBEZWZhdWx0IHNwYWNpbmcgYmV0d2VlbiByYW5rc1xuICAgICAgLy8gQWRkIHNoYXBlcyBmb3IgRUxLIGNvbXBhdGliaWxpdHlcbiAgICAgIHNoYXBlczogT2JqZWN0LmZyb21FbnRyaWVzKHUpLFxuICAgICAgLy8gQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRoYXQgbGF5b3V0IGFsZ29yaXRobXMgbWlnaHQgZXhwZWN0XG4gICAgICB0eXBlOiBcIm1pbmRtYXBcIixcbiAgICAgIGRpYWdyYW1JZDogXCJtaW5kbWFwLVwiICsgU2UoKVxuICAgIH07XG4gIH1cbiAgLy8gRXhwb3NlIGxvZ2dlciB0byBncmFtbWFyXG4gIGdldExvZ2dlcigpIHtcbiAgICByZXR1cm4gQztcbiAgfVxufSwgbChJLCBcIk1pbmRtYXBEQlwiKSwgSSksIGtlID0gLyogQF9fUFVSRV9fICovIGwoYXN5bmMgKHQsIGUsIG4sIGMpID0+IHtcbiAgQy5kZWJ1ZyhgUmVuZGVyaW5nIG1pbmRtYXAgZGlhZ3JhbVxuYCArIHQpO1xuICBjb25zdCBmID0gYy5kYiwgaCA9IGYuZ2V0RGF0YSgpLCBwID0gbGUoZSwgaC5jb25maWcuc2VjdXJpdHlMZXZlbCk7XG4gIGgudHlwZSA9IGMudHlwZSwgaC5sYXlvdXRBbGdvcml0aG0gPSBkZShoLmNvbmZpZy5sYXlvdXQsIHtcbiAgICBmYWxsYmFjazogXCJjb3NlLWJpbGtlbnRcIlxuICB9KSwgaC5kaWFncmFtSWQgPSBlLCBmLmdldE1pbmRtYXAoKSAmJiAoaC5ub2Rlcy5mb3JFYWNoKCh1KSA9PiB7XG4gICAgdS5zaGFwZSA9PT0gXCJyb3VuZGVkXCIgPyAodS5yYWRpdXMgPSAxNSwgdS50YXBlciA9IDE1LCB1LnN0cm9rZSA9IFwibm9uZVwiLCB1LndpZHRoID0gMCwgdS5wYWRkaW5nID0gMTUpIDogdS5zaGFwZSA9PT0gXCJjaXJjbGVcIiA/IHUucGFkZGluZyA9IDEwIDogdS5zaGFwZSA9PT0gXCJyZWN0XCIgJiYgKHUud2lkdGggPSAwLCB1LnBhZGRpbmcgPSAxMCk7XG4gIH0pLCBhd2FpdCBnZShoLCBwKSwgaGUoXG4gICAgcCxcbiAgICBoLmNvbmZpZy5taW5kbWFwPy5wYWRkaW5nID8/IEYubWluZG1hcC5wYWRkaW5nLFxuICAgIFwibWluZG1hcERpYWdyYW1cIixcbiAgICBoLmNvbmZpZy5taW5kbWFwPy51c2VNYXhXaWR0aCA/PyBGLm1pbmRtYXAudXNlTWF4V2lkdGhcbiAgKSk7XG59LCBcImRyYXdcIiksIExlID0ge1xuICBkcmF3OiBrZVxufSwgeGUgPSAvKiBAX19QVVJFX18gKi8gbCgodCkgPT4ge1xuICBsZXQgZSA9IFwiXCI7XG4gIGZvciAobGV0IG4gPSAwOyBuIDwgdC5USEVNRV9DT0xPUl9MSU1JVDsgbisrKVxuICAgIHRbXCJsaW5lQ29sb3JcIiArIG5dID0gdFtcImxpbmVDb2xvclwiICsgbl0gfHwgdFtcImNTY2FsZUludlwiICsgbl0sIHBlKHRbXCJsaW5lQ29sb3JcIiArIG5dKSA/IHRbXCJsaW5lQ29sb3JcIiArIG5dID0gZmUodFtcImxpbmVDb2xvclwiICsgbl0sIDIwKSA6IHRbXCJsaW5lQ29sb3JcIiArIG5dID0geWUodFtcImxpbmVDb2xvclwiICsgbl0sIDIwKTtcbiAgZm9yIChsZXQgbiA9IDA7IG4gPCB0LlRIRU1FX0NPTE9SX0xJTUlUOyBuKyspIHtcbiAgICBjb25zdCBjID0gXCJcIiArICgxNyAtIDMgKiBuKTtcbiAgICBlICs9IGBcbiAgICAuc2VjdGlvbi0ke24gLSAxfSByZWN0LCAuc2VjdGlvbi0ke24gLSAxfSBwYXRoLCAuc2VjdGlvbi0ke24gLSAxfSBjaXJjbGUsIC5zZWN0aW9uLSR7biAtIDF9IHBvbHlnb24sIC5zZWN0aW9uLSR7biAtIDF9IHBhdGggIHtcbiAgICAgIGZpbGw6ICR7dFtcImNTY2FsZVwiICsgbl19O1xuICAgIH1cbiAgICAuc2VjdGlvbi0ke24gLSAxfSB0ZXh0IHtcbiAgICAgZmlsbDogJHt0W1wiY1NjYWxlTGFiZWxcIiArIG5dfTtcbiAgICB9XG4gICAgLm5vZGUtaWNvbi0ke24gLSAxfSB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBjb2xvcjogJHt0W1wiY1NjYWxlTGFiZWxcIiArIG5dfTtcbiAgICB9XG4gICAgLnNlY3Rpb24tZWRnZS0ke24gLSAxfXtcbiAgICAgIHN0cm9rZTogJHt0W1wiY1NjYWxlXCIgKyBuXX07XG4gICAgfVxuICAgIC5lZGdlLWRlcHRoLSR7biAtIDF9e1xuICAgICAgc3Ryb2tlLXdpZHRoOiAke2N9O1xuICAgIH1cbiAgICAuc2VjdGlvbi0ke24gLSAxfSBsaW5lIHtcbiAgICAgIHN0cm9rZTogJHt0W1wiY1NjYWxlSW52XCIgKyBuXX0gO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgIH1cblxuICAgIC5kaXNhYmxlZCwgLmRpc2FibGVkIGNpcmNsZSwgLmRpc2FibGVkIHRleHQge1xuICAgICAgZmlsbDogbGlnaHRncmF5O1xuICAgIH1cbiAgICAuZGlzYWJsZWQgdGV4dCB7XG4gICAgICBmaWxsOiAjZWZlZmVmO1xuICAgIH1cbiAgICBgO1xuICB9XG4gIHJldHVybiBlO1xufSwgXCJnZW5TZWN0aW9uc1wiKSwgdmUgPSAvKiBAX19QVVJFX18gKi8gbCgodCkgPT4gYFxuICAuZWRnZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAzO1xuICB9XG4gICR7eGUodCl9XG4gIC5zZWN0aW9uLXJvb3QgcmVjdCwgLnNlY3Rpb24tcm9vdCBwYXRoLCAuc2VjdGlvbi1yb290IGNpcmNsZSwgLnNlY3Rpb24tcm9vdCBwb2x5Z29uICB7XG4gICAgZmlsbDogJHt0LmdpdDB9O1xuICB9XG4gIC5zZWN0aW9uLXJvb3QgdGV4dCB7XG4gICAgZmlsbDogJHt0LmdpdEJyYW5jaExhYmVsMH07XG4gIH1cbiAgLnNlY3Rpb24tcm9vdCBzcGFuIHtcbiAgICBjb2xvcjogJHt0LmdpdEJyYW5jaExhYmVsMH07XG4gIH1cbiAgLnNlY3Rpb24tMiBzcGFuIHtcbiAgICBjb2xvcjogJHt0LmdpdEJyYW5jaExhYmVsMH07XG4gIH1cbiAgLmljb24tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmVkZ2Uge1xuICAgIGZpbGw6IG5vbmU7XG4gIH1cbiAgLm1pbmRtYXAtbm9kZS1sYWJlbCB7XG4gICAgZHk6IDFlbTtcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIGRvbWluYW50LWJhc2VsaW5lOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gLCBcImdldFN0eWxlc1wiKSwgVGUgPSB2ZSwgUmUgPSB7XG4gIGdldCBkYigpIHtcbiAgICByZXR1cm4gbmV3IE5lKCk7XG4gIH0sXG4gIHJlbmRlcmVyOiBMZSxcbiAgcGFyc2VyOiBEZSxcbiAgc3R5bGVzOiBUZVxufTtcbmV4cG9ydCB7XG4gIFJlIGFzIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsibCIsInAiLCJkIiwidGUiLCJIIiwiQyIsIlciLCJGIiwiViIsInVlIiwibGUiLCJkZSIsImdlIiwiaGUiLCJwZSIsImZlIiwieWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLE1BQU0sSUFBSSxDQUFBO0FBQ1YsU0FBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDekIsSUFBRSxNQUFNLElBQUksS0FBSyxTQUFTLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4QyxTQUFTLEdBQUcsR0FBRyxJQUFJLEdBQUc7QUFDcEIsVUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUs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QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLElBQzFQLGVBQStCQSxrQkFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDN0QsVUFBSUUsS0FBSSxFQUFFLFNBQVM7QUFDbkIsY0FBUSxHQUFDO0FBQUEsUUFDUCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQ0gsaUJBQU87QUFBQSxRQUNULEtBQUs7QUFDSCxZQUFFLFVBQVMsRUFBRyxNQUFNLFVBQVU7QUFDOUI7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLFVBQVMsRUFBRyxNQUFNLFdBQVc7QUFDL0I7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLFVBQVMsRUFBRyxNQUFNLFdBQVc7QUFDL0I7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLFVBQVMsRUFBRyxNQUFNLFlBQVk7QUFDaEM7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLFVBQVMsRUFBRyxLQUFLLFVBQVUsRUFBRUEsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRUEsS0FBSSxDQUFDLEVBQUUsUUFBUSxFQUFFQSxFQUFDLEVBQUUsSUFBSSxFQUFFQSxFQUFDLEVBQUUsT0FBTyxFQUFFQSxFQUFDLEVBQUUsSUFBSTtBQUNoRztBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsVUFBUyxFQUFHLE1BQU0sVUFBVSxFQUFFQSxFQUFDLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUVBLEVBQUMsRUFBQyxDQUFFO0FBQ2xFO0FBQUEsUUFDRixLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQ0gsWUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFQSxFQUFDLEVBQUMsQ0FBRTtBQUM5QjtBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsVUFBUyxFQUFHLE1BQU0sV0FBVztBQUMvQjtBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsWUFBWSxNQUFNLFVBQVUsRUFBRUEsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsR0FBRyxFQUFFQSxFQUFDLEVBQUUsSUFBSSxFQUFFQSxFQUFDLEVBQUUsT0FBTyxFQUFFQSxFQUFDLEVBQUUsSUFBSTtBQUNuRjtBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRUEsRUFBQyxFQUFDLENBQUU7QUFDN0I7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLFVBQVMsRUFBRyxNQUFNLGlCQUFpQixFQUFFQSxLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFLElBQUksRUFBRUEsS0FBSSxDQUFDLEdBQUcsT0FBTyxFQUFFQSxLQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsUUFBUSxFQUFFQSxLQUFJLENBQUMsR0FBRyxFQUFFQSxFQUFDLENBQUMsRUFBQztBQUN6SDtBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssSUFBSSxFQUFFLElBQUksRUFBRUEsRUFBQyxHQUFHLE9BQU8sRUFBRUEsRUFBQyxHQUFHLE1BQU0sRUFBRSxTQUFTLFFBQU87QUFDMUQ7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLFVBQVMsRUFBRyxNQUFNLGlCQUFpQixFQUFFQSxLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFLElBQUksRUFBRUEsS0FBSSxDQUFDLEdBQUcsT0FBTyxFQUFFQSxLQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsUUFBUSxFQUFFQSxLQUFJLENBQUMsR0FBRyxFQUFFQSxFQUFDLENBQUMsRUFBQztBQUN6SDtBQUFBLE1BQ1Y7QUFBQSxJQUNJLEdBQUcsV0FBVztBQUFBLElBQ2QsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEdBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUMsR0FBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJRCxLQUFHLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJQSxLQUFHLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSUEsS0FBRyxJQUFJLEVBQUMsR0FBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSUEsS0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSUEsS0FBRyxJQUFJLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FB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
