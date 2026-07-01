import { p, F, f as ft, a3 as p2, K as Kv, X as Xg, M as ML, bk as ky, R as Nh, t as te, _ as _C, C as CC, bl as Ui, bm as H, bn as et } from "./SynchronicGraphPage-BCUlTIfr.js";
import { l } from "./chunk-FMBD7UC4-BkffimdD-V5lQKG1j.js";
import "./QPage-Kpbzl6Fe.js";
import "./index-DfKBCAsA.js";
import "./QBtnToggle-CYZJXjN1.js";
import "./QBtnGroup-D--j0QkB.js";
import "./QToolbar-4-PFUiMq.js";
import "./export-file-lpTZqdHO.js";
var $ = (function() {
  var e = /* @__PURE__ */ p(function(O, i, n, r) {
    for (n = n || {}, r = O.length; r--; n[O[r]] = i) ;
    return n;
  }, "o"), u = [1, 4], p$1 = [1, 13], s = [1, 12], d = [1, 15], E = [1, 16], b = [1, 20], l2 = [1, 19], D = [6, 7, 8], I = [1, 26], g = [1, 24], w = [1, 25], _ = [6, 7, 11], G = [1, 31], N = [6, 7, 11, 24], V = [1, 6, 13, 16, 17, 20, 23], m = [1, 35], A = [1, 36], L = [1, 6, 7, 11, 13, 16, 17, 20, 23], H2 = [1, 38], T = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, KANBAN: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, shapeData: 15, ICON: 16, CLASS: 17, nodeWithId: 18, nodeWithoutId: 19, NODE_DSTART: 20, NODE_DESCR: 21, NODE_DEND: 22, NODE_ID: 23, SHAPE_DATA: 24, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "KANBAN", 11: "EOF", 13: "SPACELIST", 16: "ICON", 17: "CLASS", 20: "NODE_DSTART", 21: "NODE_DESCR", 22: "NODE_DEND", 23: "NODE_ID", 24: "SHAPE_DATA" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 3], [12, 2], [12, 2], [12, 2], [12, 1], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [19, 3], [18, 1], [18, 4], [15, 2], [15, 1]],
    performAction: /* @__PURE__ */ p(function(i, n, r, a, h, t, M) {
      var c = t.length - 1;
      switch (h) {
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
          a.getLogger().info("Node: ", t[c - 1].id), a.addNode(t[c - 2].length, t[c - 1].id, t[c - 1].descr, t[c - 1].type, t[c]);
          break;
        case 16:
          a.getLogger().info("Node: ", t[c].id), a.addNode(t[c - 1].length, t[c].id, t[c].descr, t[c].type);
          break;
        case 17:
          a.getLogger().trace("Icon: ", t[c]), a.decorateNode({ icon: t[c] });
          break;
        case 18:
        case 23:
          a.decorateNode({ class: t[c] });
          break;
        case 19:
          a.getLogger().trace("SPACELIST");
          break;
        case 20:
          a.getLogger().trace("Node: ", t[c - 1].id), a.addNode(0, t[c - 1].id, t[c - 1].descr, t[c - 1].type, t[c]);
          break;
        case 21:
          a.getLogger().trace("Node: ", t[c].id), a.addNode(0, t[c].id, t[c].descr, t[c].type);
          break;
        case 22:
          a.decorateNode({ icon: t[c] });
          break;
        case 27:
          a.getLogger().trace("node found ..", t[c - 2]), this.$ = { id: t[c - 1], descr: t[c - 1], type: a.getType(t[c - 2], t[c]) };
          break;
        case 28:
          this.$ = { id: t[c], descr: t[c], type: 0 };
          break;
        case 29:
          a.getLogger().trace("node found ..", t[c - 3]), this.$ = { id: t[c - 3], descr: t[c - 1], type: a.getType(t[c - 2], t[c]) };
          break;
        case 30:
          this.$ = t[c - 1] + t[c];
          break;
        case 31:
          this.$ = t[c];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: u }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: u }, { 6: p$1, 7: [1, 10], 9: 9, 12: 11, 13: s, 14: 14, 16: d, 17: E, 18: 17, 19: 18, 20: b, 23: l2 }, e(D, [2, 3]), { 1: [2, 2] }, e(D, [2, 4]), e(D, [2, 5]), { 1: [2, 6], 6: p$1, 12: 21, 13: s, 14: 14, 16: d, 17: E, 18: 17, 19: 18, 20: b, 23: l2 }, { 6: p$1, 9: 22, 12: 11, 13: s, 14: 14, 16: d, 17: E, 18: 17, 19: 18, 20: b, 23: l2 }, { 6: I, 7: g, 10: 23, 11: w }, e(_, [2, 24], { 18: 17, 19: 18, 14: 27, 16: [1, 28], 17: [1, 29], 20: b, 23: l2 }), e(_, [2, 19]), e(_, [2, 21], { 15: 30, 24: G }), e(_, [2, 22]), e(_, [2, 23]), e(N, [2, 25]), e(N, [2, 26]), e(N, [2, 28], { 20: [1, 32] }), { 21: [1, 33] }, { 6: I, 7: g, 10: 34, 11: w }, { 1: [2, 7], 6: p$1, 12: 21, 13: s, 14: 14, 16: d, 17: E, 18: 17, 19: 18, 20: b, 23: l2 }, e(V, [2, 14], { 7: m, 11: A }), e(L, [2, 8]), e(L, [2, 9]), e(L, [2, 10]), e(_, [2, 16], { 15: 37, 24: G }), e(_, [2, 17]), e(_, [2, 18]), e(_, [2, 20], { 24: H2 }), e(N, [2, 31]), { 21: [1, 39] }, { 22: [1, 40] }, e(V, [2, 13], { 7: m, 11: A }), e(L, [2, 11]), e(L, [2, 12]), e(_, [2, 15], { 24: H2 }), e(N, [2, 30]), { 22: [1, 41] }, e(N, [2, 27]), e(N, [2, 29])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: /* @__PURE__ */ p(function(i, n) {
      if (n.recoverable)
        this.trace(i);
      else {
        var r = new Error(i);
        throw r.hash = n, r;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(i) {
      var n = this, r = [0], a = [], h = [null], t = [], M = this.table, c = "", W = 0, se = 0, ue = 2, re = 1, ge = t.slice.call(arguments, 1), y = Object.create(this.lexer), R = { yy: {} };
      for (var J in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, J) && (R.yy[J] = this.yy[J]);
      y.setInput(i, R.yy), R.yy.lexer = y, R.yy.parser = this, typeof y.yylloc > "u" && (y.yylloc = {});
      var q = y.yylloc;
      t.push(q);
      var de = y.options && y.options.ranges;
      typeof R.yy.parseError == "function" ? this.parseError = R.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function pe(S) {
        r.length = r.length - 2 * S, h.length = h.length - S, t.length = t.length - S;
      }
      p(pe, "popStack");
      function ae() {
        var S;
        return S = a.pop() || y.lex() || re, typeof S != "number" && (S instanceof Array && (a = S, S = a.pop()), S = n.symbols_[S] || S), S;
      }
      p(ae, "lex");
      for (var k, P, x, Q, F2 = {}, z, C, oe, X; ; ) {
        if (P = r[r.length - 1], this.defaultActions[P] ? x = this.defaultActions[P] : ((k === null || typeof k > "u") && (k = ae()), x = M[P] && M[P][k]), typeof x > "u" || !x.length || !x[0]) {
          var Z = "";
          X = [];
          for (z in M[P])
            this.terminals_[z] && z > ue && X.push("'" + this.terminals_[z] + "'");
          y.showPosition ? Z = "Parse error on line " + (W + 1) + `:
` + y.showPosition() + `
Expecting ` + X.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : Z = "Parse error on line " + (W + 1) + ": Unexpected " + (k == re ? "end of input" : "'" + (this.terminals_[k] || k) + "'"), this.parseError(Z, {
            text: y.match,
            token: this.terminals_[k] || k,
            line: y.yylineno,
            loc: q,
            expected: X
          });
        }
        if (x[0] instanceof Array && x.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + P + ", token: " + k);
        switch (x[0]) {
          case 1:
            r.push(k), h.push(y.yytext), t.push(y.yylloc), r.push(x[1]), k = null, se = y.yyleng, c = y.yytext, W = y.yylineno, q = y.yylloc;
            break;
          case 2:
            if (C = this.productions_[x[1]][1], F2.$ = h[h.length - C], F2._$ = {
              first_line: t[t.length - (C || 1)].first_line,
              last_line: t[t.length - 1].last_line,
              first_column: t[t.length - (C || 1)].first_column,
              last_column: t[t.length - 1].last_column
            }, de && (F2._$.range = [
              t[t.length - (C || 1)].range[0],
              t[t.length - 1].range[1]
            ]), Q = this.performAction.apply(F2, [
              c,
              se,
              W,
              R.yy,
              x[1],
              h,
              t
            ].concat(ge)), typeof Q < "u")
              return Q;
            C && (r = r.slice(0, -1 * C * 2), h = h.slice(0, -1 * C), t = t.slice(0, -1 * C)), r.push(this.productions_[x[1]][0]), h.push(F2.$), t.push(F2._$), oe = M[r[r.length - 2]][r[r.length - 1]], r.push(oe);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, K = /* @__PURE__ */ (function() {
    var O = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(n, r) {
        if (this.yy.parser)
          this.yy.parser.parseError(n, r);
        else
          throw new Error(n);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(i, n) {
        return this.yy = n || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var i = this._input[0];
        this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
        var n = i.match(/(?:\r\n?|\n).*/g);
        return n ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(i) {
        var n = i.length, r = i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - n), this.offset -= n;
        var a = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), r.length - 1 && (this.yylineno -= r.length - 1);
        var h = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: r ? (r.length === a.length ? this.yylloc.first_column : 0) + a[a.length - r.length].length - r[0].length : this.yylloc.first_column - n
        }, this.options.ranges && (this.yylloc.range = [h[0], h[0] + this.yyleng - n]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(i) {
        this.unput(this.match.slice(i));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var i = this.matched.substr(0, this.matched.length - this.match.length);
        return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var i = this.match;
        return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var i = this.pastInput(), n = new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + n + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(i, n) {
        var r, a, h;
        if (this.options.backtrack_lexer && (h = {
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
        }, this.options.ranges && (h.yylloc.range = this.yylloc.range.slice(0))), a = i[0].match(/(?:\r\n?|\n).*/g), a && (this.yylineno += a.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(i[0].length), this.matched += i[0], r = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), r)
          return r;
        if (this._backtrack) {
          for (var t in h)
            this[t] = h[t];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var i, n, r, a;
        this._more || (this.yytext = "", this.match = "");
        for (var h = this._currentRules(), t = 0; t < h.length; t++)
          if (r = this._input.match(this.rules[h[t]]), r && (!n || r[0].length > n[0].length)) {
            if (n = r, a = t, this.options.backtrack_lexer) {
              if (i = this.test_match(r, h[t]), i !== false)
                return i;
              if (this._backtrack) {
                n = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return n ? (i = this.test_match(n, h[a]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var n = this.next();
        return n || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(n) {
        this.conditionStack.push(n);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var n = this.conditionStack.length - 1;
        return n > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(n) {
        return n = this.conditionStack.length - 1 - Math.abs(n || 0), n >= 0 ? this.conditionStack[n] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(n) {
        this.begin(n);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(n, r, a, h) {
        switch (a) {
          case 0:
            return this.pushState("shapeData"), r.yytext = "", 24;
          case 1:
            return this.pushState("shapeDataStr"), 24;
          case 2:
            return this.popState(), 24;
          case 3:
            const t = /\n\s*/g;
            return r.yytext = r.yytext.replace(t, "<br/>"), 24;
          case 4:
            return 24;
          case 5:
            this.popState();
            break;
          case 6:
            return n.getLogger().trace("Found comment", r.yytext), 6;
          case 7:
            return 8;
          case 8:
            this.begin("CLASS");
            break;
          case 9:
            return this.popState(), 17;
          case 10:
            this.popState();
            break;
          case 11:
            n.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 12:
            return n.getLogger().trace("SPACELINE"), 6;
          case 13:
            return 7;
          case 14:
            return 16;
          case 15:
            n.getLogger().trace("end icon"), this.popState();
            break;
          case 16:
            return n.getLogger().trace("Exploding node"), this.begin("NODE"), 20;
          case 17:
            return n.getLogger().trace("Cloud"), this.begin("NODE"), 20;
          case 18:
            return n.getLogger().trace("Explosion Bang"), this.begin("NODE"), 20;
          case 19:
            return n.getLogger().trace("Cloud Bang"), this.begin("NODE"), 20;
          case 20:
            return this.begin("NODE"), 20;
          case 21:
            return this.begin("NODE"), 20;
          case 22:
            return this.begin("NODE"), 20;
          case 23:
            return this.begin("NODE"), 20;
          case 24:
            return 13;
          case 25:
            return 23;
          case 26:
            return 11;
          case 27:
            this.begin("NSTR2");
            break;
          case 28:
            return "NODE_DESCR";
          case 29:
            this.popState();
            break;
          case 30:
            n.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 31:
            return n.getLogger().trace("description:", r.yytext), "NODE_DESCR";
          case 32:
            this.popState();
            break;
          case 33:
            return this.popState(), n.getLogger().trace("node end ))"), "NODE_DEND";
          case 34:
            return this.popState(), n.getLogger().trace("node end )"), "NODE_DEND";
          case 35:
            return this.popState(), n.getLogger().trace("node end ...", r.yytext), "NODE_DEND";
          case 36:
            return this.popState(), n.getLogger().trace("node end (("), "NODE_DEND";
          case 37:
            return this.popState(), n.getLogger().trace("node end (-"), "NODE_DEND";
          case 38:
            return this.popState(), n.getLogger().trace("node end (-"), "NODE_DEND";
          case 39:
            return this.popState(), n.getLogger().trace("node end (("), "NODE_DEND";
          case 40:
            return this.popState(), n.getLogger().trace("node end (("), "NODE_DEND";
          case 41:
            return n.getLogger().trace("Long description:", r.yytext), 21;
          case 42:
            return n.getLogger().trace("Long description:", r.yytext), 21;
        }
      }, "anonymous"),
      rules: [/^(?:@\{)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^\"]+)/i, /^(?:[^}^"]+)/i, /^(?:\})/i, /^(?:\s*%%.*)/i, /^(?:kanban\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}@]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { shapeDataEndBracket: { rules: [], inclusive: false }, shapeDataStr: { rules: [2, 3], inclusive: false }, shapeData: { rules: [1, 4, 5], inclusive: false }, CLASS: { rules: [9, 10], inclusive: false }, ICON: { rules: [14, 15], inclusive: false }, NSTR2: { rules: [28, 29], inclusive: false }, NSTR: { rules: [31, 32], inclusive: false }, NODE: { rules: [27, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42], inclusive: false }, INITIAL: { rules: [0, 6, 7, 8, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], inclusive: true } }
    };
    return O;
  })();
  T.lexer = K;
  function B() {
    this.yy = {};
  }
  return p(B, "Parser"), B.prototype = T, T.Parser = B, new B();
})();
$.parser = $;
var xe = $, v = [], ne = [], ee = 0, ie = {}, ve = /* @__PURE__ */ p(() => {
  v = [], ne = [], ee = 0, ie = {};
}, "clear"), De = /* @__PURE__ */ p((e) => {
  if (v.length === 0)
    return null;
  const u = v[0].level;
  let p3 = null;
  for (let s = v.length - 1; s >= 0; s--)
    if (v[s].level === u && !p3 && (p3 = v[s]), v[s].level < u)
      throw new Error('Items without section detected, found section ("' + v[s].label + '")');
  return e === p3?.level ? null : p3;
}, "getSection"), he = /* @__PURE__ */ p(function() {
  return ne;
}, "getSections"), Le = /* @__PURE__ */ p(function() {
  const e = [], u = [], p3 = he(), s = ft();
  for (const d of p3) {
    const E = {
      id: d.id,
      label: te(d.label ?? "", s),
      isGroup: true,
      ticket: d.ticket,
      shape: "kanbanSection",
      level: d.level,
      look: s.look
    };
    u.push(E);
    const b = v.filter((l2) => l2.parentId === d.id);
    for (const l2 of b) {
      const D = {
        id: l2.id,
        parentId: d.id,
        label: te(l2.label ?? "", s),
        isGroup: false,
        ticket: l2?.ticket,
        priority: l2?.priority,
        assigned: l2?.assigned,
        icon: l2?.icon,
        shape: "kanbanItem",
        level: l2.level,
        rx: 5,
        ry: 5,
        cssStyles: ["text-align: left"]
      };
      u.push(D);
    }
  }
  return { nodes: u, edges: e, other: {}, config: ft() };
}, "getData"), Oe = /* @__PURE__ */ p((e, u, p3, s, d) => {
  const E = ft();
  let b = E.mindmap?.padding ?? Nh.mindmap.padding;
  switch (s) {
    case f.ROUNDED_RECT:
    case f.RECT:
    case f.HEXAGON:
      b *= 2;
  }
  const l2 = {
    id: te(u, E) || "kbn" + ee++,
    level: e,
    label: te(p3, E),
    width: E.mindmap?.maxNodeWidth ?? Nh.mindmap.maxNodeWidth,
    padding: b,
    isGroup: false
  };
  if (d !== void 0) {
    let I;
    d.includes(`
`) ? I = d + `
` : I = `{
` + d + `
}`;
    const g = _C(I, { schema: CC });
    if (g.shape && (g.shape !== g.shape.toLowerCase() || g.shape.includes("_")))
      throw new Error(`No such shape: ${g.shape}. Shape names should be lowercase.`);
    g?.shape && g.shape === "kanbanItem" && (l2.shape = g?.shape), g?.label && (l2.label = g?.label), g?.icon && (l2.icon = g?.icon.toString()), g?.assigned && (l2.assigned = g?.assigned.toString()), g?.ticket && (l2.ticket = g?.ticket.toString()), g?.priority && (l2.priority = g?.priority);
  }
  const D = De(e);
  D ? l2.parentId = D.id || "kbn" + ee++ : ne.push(l2), v.push(l2);
}, "addNode"), f = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, Ie = /* @__PURE__ */ p((e, u) => {
  switch (F.debug("In get type", e, u), e) {
    case "[":
      return f.RECT;
    case "(":
      return u === ")" ? f.ROUNDED_RECT : f.CLOUD;
    case "((":
      return f.CIRCLE;
    case ")":
      return f.CLOUD;
    case "))":
      return f.BANG;
    case "{{":
      return f.HEXAGON;
    default:
      return f.DEFAULT;
  }
}, "getType"), Ce = /* @__PURE__ */ p((e, u) => {
  ie[e] = u;
}, "setElementForId"), we = /* @__PURE__ */ p((e) => {
  if (!e)
    return;
  const u = ft(), p3 = v[v.length - 1];
  e.icon && (p3.icon = te(e.icon, u)), e.class && (p3.cssClasses = te(e.class, u));
}, "decorateNode"), Ae = /* @__PURE__ */ p((e) => {
  switch (e) {
    case f.DEFAULT:
      return "no-border";
    case f.RECT:
      return "rect";
    case f.ROUNDED_RECT:
      return "rounded-rect";
    case f.CIRCLE:
      return "circle";
    case f.CLOUD:
      return "cloud";
    case f.BANG:
      return "bang";
    case f.HEXAGON:
      return "hexgon";
    // cspell: disable-line
    default:
      return "no-border";
  }
}, "type2Str"), Te = /* @__PURE__ */ p(() => F, "getLogger"), Re = /* @__PURE__ */ p((e) => ie[e], "getElementById"), Pe = {
  clear: ve,
  addNode: Oe,
  getSections: he,
  getData: Le,
  nodeType: f,
  getType: Ie,
  setElementForId: Ce,
  decorateNode: we,
  type2Str: Ae,
  getLogger: Te,
  getElementById: Re
}, Ve = Pe, Be = /* @__PURE__ */ p(async (e, u, p3, s) => {
  F.debug(`Rendering kanban diagram
` + e);
  const E = s.db.getData(), b = ft();
  b.htmlLabels = false;
  const l2 = p2(u), D = l2.append("g");
  D.attr("class", "sections");
  const I = l2.append("g");
  I.attr("class", "items");
  const g = E.nodes.filter(
    // TODO: TypeScript 5.5 will infer this predicate automatically
    (m) => m.isGroup
  );
  let w = 0;
  const _ = 10, G = [];
  let N = 25;
  for (const m of g) {
    const A = b?.kanban?.sectionWidth || 200;
    w = w + 1, m.x = A * w + (w - 1) * _ / 2, m.width = A, m.y = 0, m.height = A * 3, m.rx = 5, m.ry = 5, m.cssClasses = m.cssClasses + " section-" + w;
    const L = await Kv(D, m);
    N = Math.max(N, L?.labelBBox?.height), G.push(L);
  }
  let V = 0;
  for (const m of g) {
    const A = G[V];
    V = V + 1;
    const L = b?.kanban?.sectionWidth || 200, H2 = -L * 3 / 2 + N;
    let T = H2;
    const K = E.nodes.filter((i) => i.parentId === m.id);
    for (const i of K) {
      if (i.isGroup)
        throw new Error("Groups within groups are not allowed in Kanban diagrams");
      i.x = m.x, i.width = L - 1.5 * _;
      const r = (await Xg(I, i, { config: b })).node().getBBox();
      i.y = T + r.height / 2, await ML(i), T = i.y + r.height / 2 + _ / 2;
    }
    const B = A.cluster.select("rect"), O = Math.max(T - H2 + 3 * _, 50) + (N - 25);
    B.attr("height", O);
  }
  ky(
    void 0,
    l2,
    b.mindmap?.padding ?? Nh.kanban.padding,
    b.mindmap?.useMaxWidth ?? Nh.kanban.useMaxWidth
  );
}, "draw"), Fe = {
  draw: Be
}, je = /* @__PURE__ */ p((e) => {
  let u = "";
  for (let s = 0; s < e.THEME_COLOR_LIMIT; s++)
    e["lineColor" + s] = e["lineColor" + s] || e["cScaleInv" + s], Ui(e["lineColor" + s]) ? e["lineColor" + s] = H(e["lineColor" + s], 20) : e["lineColor" + s] = et(e["lineColor" + s], 20);
  const p$1 = /* @__PURE__ */ p((s, d) => e.darkMode ? et(s, d) : H(s, d), "adjuster");
  for (let s = 0; s < e.THEME_COLOR_LIMIT; s++) {
    const d = "" + (17 - 3 * s);
    u += `
    .section-${s - 1} rect, .section-${s - 1} path, .section-${s - 1} circle, .section-${s - 1} polygon, .section-${s - 1} path  {
      fill: ${p$1(e["cScale" + s], 10)};
      stroke: ${p$1(e["cScale" + s], 10)};

    }
    .section-${s - 1} text {
     fill: ${e["cScaleLabel" + s]};
    }
    .node-icon-${s - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + s]};
    }
    .section-edge-${s - 1}{
      stroke: ${e["cScale" + s]};
    }
    .edge-depth-${s - 1}{
      stroke-width: ${d};
    }
    .section-${s - 1} line {
      stroke: ${e["cScaleInv" + s]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    text-decoration: underline;
  }
    `;
  }
  return u;
}, "genSections"), Ge = /* @__PURE__ */ p((e) => `
  .edge {
    stroke-width: 3;
  }
  ${je(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
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
  .cluster-label, .label {
    color: ${e.textColor};
    fill: ${e.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${l()}
`, "getStyles"), He = Ge, We = {
  db: Ve,
  renderer: Fe,
  parser: xe,
  styles: He
};
export {
  We as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FuYmFuLWRlZmluaXRpb24tM1c0WklYQjctM3NVUHFLMkMtRGcxTTFqclAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbWVybWFpZC1zdHJpbmcvZGlzdC9rYW5iYW4tZGVmaW5pdGlvbi0zVzRaSVhCNy0zc1VQcUsyQy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIG8sIGwgYXMgdGUsIGMgYXMgVSwgSCBhcyBmZSwgYWYgYXMgeWUsIGFnIGFzIGJlLCBhaCBhcyBtZSwgViBhcyBfZSwgRiBhcyBZLCBpIGFzIGosIHQgYXMgRWUsIEogYXMga2UsIFcgYXMgU2UsIFggYXMgY2UsIFkgYXMgbGUgfSBmcm9tIFwiLi9lbnRyeS1CMlZYLWt4YS5qc1wiO1xuaW1wb3J0IHsgZyBhcyBOZSB9IGZyb20gXCIuL2NodW5rLUZNQkQ3VUM0LUJrZmZpbWRELmpzXCI7XG52YXIgJCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGUgPSAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbihPLCBpLCBuLCByKSB7XG4gICAgZm9yIChuID0gbiB8fCB7fSwgciA9IE8ubGVuZ3RoOyByLS07IG5bT1tyXV0gPSBpKSA7XG4gICAgcmV0dXJuIG47XG4gIH0sIFwib1wiKSwgdSA9IFsxLCA0XSwgcCA9IFsxLCAxM10sIHMgPSBbMSwgMTJdLCBkID0gWzEsIDE1XSwgRSA9IFsxLCAxNl0sIGIgPSBbMSwgMjBdLCBsID0gWzEsIDE5XSwgRCA9IFs2LCA3LCA4XSwgSSA9IFsxLCAyNl0sIGcgPSBbMSwgMjRdLCB3ID0gWzEsIDI1XSwgXyA9IFs2LCA3LCAxMV0sIEcgPSBbMSwgMzFdLCBOID0gWzYsIDcsIDExLCAyNF0sIFYgPSBbMSwgNiwgMTMsIDE2LCAxNywgMjAsIDIzXSwgbSA9IFsxLCAzNV0sIEEgPSBbMSwgMzZdLCBMID0gWzEsIDYsIDcsIDExLCAxMywgMTYsIDE3LCAyMCwgMjNdLCBIID0gWzEsIDM4XSwgVCA9IHtcbiAgICB0cmFjZTogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24oKSB7XG4gICAgfSwgXCJ0cmFjZVwiKSxcbiAgICB5eToge30sXG4gICAgc3ltYm9sc186IHsgZXJyb3I6IDIsIHN0YXJ0OiAzLCBtaW5kTWFwOiA0LCBzcGFjZUxpbmVzOiA1LCBTUEFDRUxJTkU6IDYsIE5MOiA3LCBLQU5CQU46IDgsIGRvY3VtZW50OiA5LCBzdG9wOiAxMCwgRU9GOiAxMSwgc3RhdGVtZW50OiAxMiwgU1BBQ0VMSVNUOiAxMywgbm9kZTogMTQsIHNoYXBlRGF0YTogMTUsIElDT046IDE2LCBDTEFTUzogMTcsIG5vZGVXaXRoSWQ6IDE4LCBub2RlV2l0aG91dElkOiAxOSwgTk9ERV9EU1RBUlQ6IDIwLCBOT0RFX0RFU0NSOiAyMSwgTk9ERV9ERU5EOiAyMiwgTk9ERV9JRDogMjMsIFNIQVBFX0RBVEE6IDI0LCAkYWNjZXB0OiAwLCAkZW5kOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDY6IFwiU1BBQ0VMSU5FXCIsIDc6IFwiTkxcIiwgODogXCJLQU5CQU5cIiwgMTE6IFwiRU9GXCIsIDEzOiBcIlNQQUNFTElTVFwiLCAxNjogXCJJQ09OXCIsIDE3OiBcIkNMQVNTXCIsIDIwOiBcIk5PREVfRFNUQVJUXCIsIDIxOiBcIk5PREVfREVTQ1JcIiwgMjI6IFwiTk9ERV9ERU5EXCIsIDIzOiBcIk5PREVfSURcIiwgMjQ6IFwiU0hBUEVfREFUQVwiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDFdLCBbMywgMl0sIFs1LCAxXSwgWzUsIDJdLCBbNSwgMl0sIFs0LCAyXSwgWzQsIDNdLCBbMTAsIDFdLCBbMTAsIDFdLCBbMTAsIDFdLCBbMTAsIDJdLCBbMTAsIDJdLCBbOSwgM10sIFs5LCAyXSwgWzEyLCAzXSwgWzEyLCAyXSwgWzEyLCAyXSwgWzEyLCAyXSwgWzEyLCAxXSwgWzEyLCAyXSwgWzEyLCAxXSwgWzEyLCAxXSwgWzEyLCAxXSwgWzEyLCAxXSwgWzE0LCAxXSwgWzE0LCAxXSwgWzE5LCAzXSwgWzE4LCAxXSwgWzE4LCA0XSwgWzE1LCAyXSwgWzE1LCAxXV0sXG4gICAgcGVyZm9ybUFjdGlvbjogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24oaSwgbiwgciwgYSwgaCwgdCwgTSkge1xuICAgICAgdmFyIGMgPSB0Lmxlbmd0aCAtIDE7XG4gICAgICBzd2l0Y2ggKGgpIHtcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBhLmdldExvZ2dlcigpLnRyYWNlKFwiU3RvcCBOTCBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBhLmdldExvZ2dlcigpLnRyYWNlKFwiU3RvcCBFT0YgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIGEuZ2V0TG9nZ2VyKCkudHJhY2UoXCJTdG9wIE5MMiBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS50cmFjZShcIlN0b3AgRU9GMiBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS5pbmZvKFwiTm9kZTogXCIsIHRbYyAtIDFdLmlkKSwgYS5hZGROb2RlKHRbYyAtIDJdLmxlbmd0aCwgdFtjIC0gMV0uaWQsIHRbYyAtIDFdLmRlc2NyLCB0W2MgLSAxXS50eXBlLCB0W2NdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICBhLmdldExvZ2dlcigpLmluZm8oXCJOb2RlOiBcIiwgdFtjXS5pZCksIGEuYWRkTm9kZSh0W2MgLSAxXS5sZW5ndGgsIHRbY10uaWQsIHRbY10uZGVzY3IsIHRbY10udHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS50cmFjZShcIkljb246IFwiLCB0W2NdKSwgYS5kZWNvcmF0ZU5vZGUoeyBpY29uOiB0W2NdIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIGEuZGVjb3JhdGVOb2RlKHsgY2xhc3M6IHRbY10gfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS50cmFjZShcIlNQQUNFTElTVFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICBhLmdldExvZ2dlcigpLnRyYWNlKFwiTm9kZTogXCIsIHRbYyAtIDFdLmlkKSwgYS5hZGROb2RlKDAsIHRbYyAtIDFdLmlkLCB0W2MgLSAxXS5kZXNjciwgdFtjIC0gMV0udHlwZSwgdFtjXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS50cmFjZShcIk5vZGU6IFwiLCB0W2NdLmlkKSwgYS5hZGROb2RlKDAsIHRbY10uaWQsIHRbY10uZGVzY3IsIHRbY10udHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgYS5kZWNvcmF0ZU5vZGUoeyBpY29uOiB0W2NdIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIGEuZ2V0TG9nZ2VyKCkudHJhY2UoXCJub2RlIGZvdW5kIC4uXCIsIHRbYyAtIDJdKSwgdGhpcy4kID0geyBpZDogdFtjIC0gMV0sIGRlc2NyOiB0W2MgLSAxXSwgdHlwZTogYS5nZXRUeXBlKHRbYyAtIDJdLCB0W2NdKSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIHRoaXMuJCA9IHsgaWQ6IHRbY10sIGRlc2NyOiB0W2NdLCB0eXBlOiAwIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgYS5nZXRMb2dnZXIoKS50cmFjZShcIm5vZGUgZm91bmQgLi5cIiwgdFtjIC0gM10pLCB0aGlzLiQgPSB7IGlkOiB0W2MgLSAzXSwgZGVzY3I6IHRbYyAtIDFdLCB0eXBlOiBhLmdldFR5cGUodFtjIC0gMl0sIHRbY10pIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgdGhpcy4kID0gdFtjIC0gMV0gKyB0W2NdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgIHRoaXMuJCA9IHRbY107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSwgXCJhbm9ueW1vdXNcIiksXG4gICAgdGFibGU6IFt7IDM6IDEsIDQ6IDIsIDU6IDMsIDY6IFsxLCA1XSwgODogdSB9LCB7IDE6IFszXSB9LCB7IDE6IFsyLCAxXSB9LCB7IDQ6IDYsIDY6IFsxLCA3XSwgNzogWzEsIDhdLCA4OiB1IH0sIHsgNjogcCwgNzogWzEsIDEwXSwgOTogOSwgMTI6IDExLCAxMzogcywgMTQ6IDE0LCAxNjogZCwgMTc6IEUsIDE4OiAxNywgMTk6IDE4LCAyMDogYiwgMjM6IGwgfSwgZShELCBbMiwgM10pLCB7IDE6IFsyLCAyXSB9LCBlKEQsIFsyLCA0XSksIGUoRCwgWzIsIDVdKSwgeyAxOiBbMiwgNl0sIDY6IHAsIDEyOiAyMSwgMTM6IHMsIDE0OiAxNCwgMTY6IGQsIDE3OiBFLCAxODogMTcsIDE5OiAxOCwgMjA6IGIsIDIzOiBsIH0sIHsgNjogcCwgOTogMjIsIDEyOiAxMSwgMTM6IHMsIDE0OiAxNCwgMTY6IGQsIDE3OiBFLCAxODogMTcsIDE5OiAxOCwgMjA6IGIsIDIzOiBsIH0sIHsgNjogSSwgNzogZywgMTA6IDIzLCAxMTogdyB9LCBlKF8sIFsyLCAyNF0sIHsgMTg6IDE3LCAxOTogMTgsIDE0OiAyNywgMTY6IFsxLCAyOF0sIDE3OiBbMSwgMjldLCAyMDogYiwgMjM6IGwgfSksIGUoXywgWzIsIDE5XSksIGUoXywgWzIsIDIxXSwgeyAxNTogMzAsIDI0OiBHIH0pLCBlKF8sIFsyLCAyMl0pLCBlKF8sIFsyLCAyM10pLCBlKE4sIFsyLCAyNV0pLCBlKE4sIFsyLCAyNl0pLCBlKE4sIFsyLCAyOF0sIHsgMjA6IFsxLCAzMl0gfSksIHsgMjE6IFsxLCAzM10gfSwgeyA2OiBJLCA3OiBnLCAxMDogMzQsIDExOiB3IH0sIHsgMTogWzIsIDddLCA2OiBwLCAxMjogMjEsIDEzOiBzLCAxNDogMTQsIDE2OiBkLCAxNzogRSwgMTg6IDE3LCAxOTogMTgsIDIwOiBiLCAyMzogbCB9LCBlKFYsIFsyLCAxNF0sIHsgNzogbSwgMTE6IEEgfSksIGUoTCwgWzIsIDhdKSwgZShMLCBbMiwgOV0pLCBlKEwsIFsyLCAxMF0pLCBlKF8sIFsyLCAxNl0sIHsgMTU6IDM3LCAyNDogRyB9KSwgZShfLCBbMiwgMTddKSwgZShfLCBbMiwgMThdKSwgZShfLCBbMiwgMjBdLCB7IDI0OiBIIH0pLCBlKE4sIFsyLCAzMV0pLCB7IDIxOiBbMSwgMzldIH0sIHsgMjI6IFsxLCA0MF0gfSwgZShWLCBbMiwgMTNdLCB7IDc6IG0sIDExOiBBIH0pLCBlKEwsIFsyLCAxMV0pLCBlKEwsIFsyLCAxMl0pLCBlKF8sIFsyLCAxNV0sIHsgMjQ6IEggfSksIGUoTiwgWzIsIDMwXSksIHsgMjI6IFsxLCA0MV0gfSwgZShOLCBbMiwgMjddKSwgZShOLCBbMiwgMjldKV0sXG4gICAgZGVmYXVsdEFjdGlvbnM6IHsgMjogWzIsIDFdLCA2OiBbMiwgMl0gfSxcbiAgICBwYXJzZUVycm9yOiAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbihpLCBuKSB7XG4gICAgICBpZiAobi5yZWNvdmVyYWJsZSlcbiAgICAgICAgdGhpcy50cmFjZShpKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgciA9IG5ldyBFcnJvcihpKTtcbiAgICAgICAgdGhyb3cgci5oYXNoID0gbiwgcjtcbiAgICAgIH1cbiAgICB9LCBcInBhcnNlRXJyb3JcIiksXG4gICAgcGFyc2U6IC8qIEBfX1BVUkVfXyAqLyBvKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHZhciBuID0gdGhpcywgciA9IFswXSwgYSA9IFtdLCBoID0gW251bGxdLCB0ID0gW10sIE0gPSB0aGlzLnRhYmxlLCBjID0gXCJcIiwgVyA9IDAsIHNlID0gMCwgdWUgPSAyLCByZSA9IDEsIGdlID0gdC5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIHkgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpLCBSID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIEogaW4gdGhpcy55eSlcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIEopICYmIChSLnl5W0pdID0gdGhpcy55eVtKXSk7XG4gICAgICB5LnNldElucHV0KGksIFIueXkpLCBSLnl5LmxleGVyID0geSwgUi55eS5wYXJzZXIgPSB0aGlzLCB0eXBlb2YgeS55eWxsb2MgPiBcInVcIiAmJiAoeS55eWxsb2MgPSB7fSk7XG4gICAgICB2YXIgcSA9IHkueXlsbG9jO1xuICAgICAgdC5wdXNoKHEpO1xuICAgICAgdmFyIGRlID0geS5vcHRpb25zICYmIHkub3B0aW9ucy5yYW5nZXM7XG4gICAgICB0eXBlb2YgUi55eS5wYXJzZUVycm9yID09IFwiZnVuY3Rpb25cIiA/IHRoaXMucGFyc2VFcnJvciA9IFIueXkucGFyc2VFcnJvciA6IHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgZnVuY3Rpb24gcGUoUykge1xuICAgICAgICByLmxlbmd0aCA9IHIubGVuZ3RoIC0gMiAqIFMsIGgubGVuZ3RoID0gaC5sZW5ndGggLSBTLCB0Lmxlbmd0aCA9IHQubGVuZ3RoIC0gUztcbiAgICAgIH1cbiAgICAgIG8ocGUsIFwicG9wU3RhY2tcIik7XG4gICAgICBmdW5jdGlvbiBhZSgpIHtcbiAgICAgICAgdmFyIFM7XG4gICAgICAgIHJldHVybiBTID0gYS5wb3AoKSB8fCB5LmxleCgpIHx8IHJlLCB0eXBlb2YgUyAhPSBcIm51bWJlclwiICYmIChTIGluc3RhbmNlb2YgQXJyYXkgJiYgKGEgPSBTLCBTID0gYS5wb3AoKSksIFMgPSBuLnN5bWJvbHNfW1NdIHx8IFMpLCBTO1xuICAgICAgfVxuICAgICAgbyhhZSwgXCJsZXhcIik7XG4gICAgICBmb3IgKHZhciBrLCBQLCB4LCBRLCBGID0ge30sIHosIEMsIG9lLCBYOyA7ICkge1xuICAgICAgICBpZiAoUCA9IHJbci5sZW5ndGggLSAxXSwgdGhpcy5kZWZhdWx0QWN0aW9uc1tQXSA/IHggPSB0aGlzLmRlZmF1bHRBY3Rpb25zW1BdIDogKChrID09PSBudWxsIHx8IHR5cGVvZiBrID4gXCJ1XCIpICYmIChrID0gYWUoKSksIHggPSBNW1BdICYmIE1bUF1ba10pLCB0eXBlb2YgeCA+IFwidVwiIHx8ICF4Lmxlbmd0aCB8fCAheFswXSkge1xuICAgICAgICAgIHZhciBaID0gXCJcIjtcbiAgICAgICAgICBYID0gW107XG4gICAgICAgICAgZm9yICh6IGluIE1bUF0pXG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsc19bel0gJiYgeiA+IHVlICYmIFgucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1t6XSArIFwiJ1wiKTtcbiAgICAgICAgICB5LnNob3dQb3NpdGlvbiA/IFogPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoVyArIDEpICsgYDpcbmAgKyB5LnNob3dQb3NpdGlvbigpICsgYFxuRXhwZWN0aW5nIGAgKyBYLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1trXSB8fCBrKSArIFwiJ1wiIDogWiA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChXICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChrID09IHJlID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1trXSB8fCBrKSArIFwiJ1wiKSwgdGhpcy5wYXJzZUVycm9yKFosIHtcbiAgICAgICAgICAgIHRleHQ6IHkubWF0Y2gsXG4gICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW2tdIHx8IGssXG4gICAgICAgICAgICBsaW5lOiB5Lnl5bGluZW5vLFxuICAgICAgICAgICAgbG9jOiBxLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeFswXSBpbnN0YW5jZW9mIEFycmF5ICYmIHgubGVuZ3RoID4gMSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBQICsgXCIsIHRva2VuOiBcIiArIGspO1xuICAgICAgICBzd2l0Y2ggKHhbMF0pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByLnB1c2goayksIGgucHVzaCh5Lnl5dGV4dCksIHQucHVzaCh5Lnl5bGxvYyksIHIucHVzaCh4WzFdKSwgayA9IG51bGwsIHNlID0geS55eWxlbmcsIGMgPSB5Lnl5dGV4dCwgVyA9IHkueXlsaW5lbm8sIHEgPSB5Lnl5bGxvYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGlmIChDID0gdGhpcy5wcm9kdWN0aW9uc19beFsxXV1bMV0sIEYuJCA9IGhbaC5sZW5ndGggLSBDXSwgRi5fJCA9IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogdFt0Lmxlbmd0aCAtIChDIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRbdC5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdFt0Lmxlbmd0aCAtIChDIHx8IDEpXS5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiB0W3QubGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH0sIGRlICYmIChGLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICB0W3QubGVuZ3RoIC0gKEMgfHwgMSldLnJhbmdlWzBdLFxuICAgICAgICAgICAgICB0W3QubGVuZ3RoIC0gMV0ucmFuZ2VbMV1cbiAgICAgICAgICAgIF0pLCBRID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KEYsIFtcbiAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgc2UsXG4gICAgICAgICAgICAgIFcsXG4gICAgICAgICAgICAgIFIueXksXG4gICAgICAgICAgICAgIHhbMV0sXG4gICAgICAgICAgICAgIGgsXG4gICAgICAgICAgICAgIHRcbiAgICAgICAgICAgIF0uY29uY2F0KGdlKSksIHR5cGVvZiBRIDwgXCJ1XCIpXG4gICAgICAgICAgICAgIHJldHVybiBRO1xuICAgICAgICAgICAgQyAmJiAociA9IHIuc2xpY2UoMCwgLTEgKiBDICogMiksIGggPSBoLnNsaWNlKDAsIC0xICogQyksIHQgPSB0LnNsaWNlKDAsIC0xICogQykpLCByLnB1c2godGhpcy5wcm9kdWN0aW9uc19beFsxXV1bMF0pLCBoLnB1c2goRi4kKSwgdC5wdXNoKEYuXyQpLCBvZSA9IE1bcltyLmxlbmd0aCAtIDJdXVtyW3IubGVuZ3RoIC0gMV1dLCByLnB1c2gob2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gITA7XG4gICAgfSwgXCJwYXJzZVwiKVxuICB9LCBLID0gLyogQF9fUFVSRV9fICovIChmdW5jdGlvbigpIHtcbiAgICB2YXIgTyA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IC8qIEBfX1BVUkVfXyAqLyBvKGZ1bmN0aW9uKG4sIHIpIHtcbiAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKVxuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Iobiwgcik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iobik7XG4gICAgICB9LCBcInBhcnNlRXJyb3JcIiksXG4gICAgICAvLyByZXNldHMgdGhlIGxleGVyLCBzZXRzIG5ldyBpbnB1dFxuICAgICAgc2V0SW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBvKGZ1bmN0aW9uKGksIG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueXkgPSBuIHx8IHRoaXMueXkgfHwge30sIHRoaXMuX2lucHV0ID0gaSwgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9ICExLCB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwLCB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiLCB0aGlzLmNvbmRpdGlvblN0YWNrID0gW1wiSU5JVElBTFwiXSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gWzAsIDBdKSwgdGhpcy5vZmZzZXQgPSAwLCB0aGlzO1xuICAgICAgfSwgXCJzZXRJbnB1dFwiKSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IGksIHRoaXMueXlsZW5nKyssIHRoaXMub2Zmc2V0KyssIHRoaXMubWF0Y2ggKz0gaSwgdGhpcy5tYXRjaGVkICs9IGk7XG4gICAgICAgIHZhciBuID0gaS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIHJldHVybiBuID8gKHRoaXMueXlsaW5lbm8rKywgdGhpcy55eWxsb2MubGFzdF9saW5lKyspIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKywgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpLCBpO1xuICAgICAgfSwgXCJpbnB1dFwiKSxcbiAgICAgIC8vIHVuc2hpZnRzIG9uZSBjaGFyIChvciBhIHN0cmluZykgaW50byB0aGUgaW5wdXRcbiAgICAgIHVucHV0OiAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbihpKSB7XG4gICAgICAgIHZhciBuID0gaS5sZW5ndGgsIHIgPSBpLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gaSArIHRoaXMuX2lucHV0LCB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBuKSwgdGhpcy5vZmZzZXQgLT0gbjtcbiAgICAgICAgdmFyIGEgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpLCB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKSwgci5sZW5ndGggLSAxICYmICh0aGlzLnl5bGluZW5vIC09IHIubGVuZ3RoIC0gMSk7XG4gICAgICAgIHZhciBoID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgIHJldHVybiB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IHIgPyAoci5sZW5ndGggPT09IGEubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBhW2EubGVuZ3RoIC0gci5sZW5ndGhdLmxlbmd0aCAtIHJbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gblxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFtoWzBdLCBoWzBdICsgdGhpcy55eWxlbmcgLSBuXSksIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzO1xuICAgICAgfSwgXCJ1bnB1dFwiKSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBjYWNoZXMgbWF0Y2hlZCB0ZXh0IGFuZCBhcHBlbmRzIGl0IG9uIG5leHQgYWN0aW9uXG4gICAgICBtb3JlOiAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vcmUgPSAhMCwgdGhpcztcbiAgICAgIH0sIFwibW9yZVwiKSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBzaWduYWxzIHRoZSBsZXhlciB0aGF0IHRoaXMgcnVsZSBmYWlscyB0byBtYXRjaCB0aGUgaW5wdXQsIHNvIHRoZSBuZXh0IG1hdGNoaW5nIHJ1bGUgKHJlZ2V4KSBzaG91bGQgYmUgdGVzdGVkIGluc3RlYWQuXG4gICAgICByZWplY3Q6IC8qIEBfX1BVUkVfXyAqLyBvKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcilcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSAhMDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgYC4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxuYCArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LCBcInJlamVjdFwiKSxcbiAgICAgIC8vIHJldGFpbiBmaXJzdCBuIGNoYXJhY3RlcnMgb2YgdGhlIG1hdGNoXG4gICAgICBsZXNzOiAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbihpKSB7XG4gICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShpKSk7XG4gICAgICB9LCBcImxlc3NcIiksXG4gICAgICAvLyBkaXNwbGF5cyBhbHJlYWR5IG1hdGNoZWQgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBwYXN0SW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBvKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIChpLmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgaS5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LCBcInBhc3RJbnB1dFwiKSxcbiAgICAgIC8vIGRpc3BsYXlzIHVwY29taW5nIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgdXBjb21pbmdJbnB1dDogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5tYXRjaDtcbiAgICAgICAgcmV0dXJuIGkubGVuZ3RoIDwgMjAgJiYgKGkgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gaS5sZW5ndGgpKSwgKGkuc3Vic3RyKDAsIDIwKSArIChpLmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LCBcInVwY29taW5nSW5wdXRcIiksXG4gICAgICAvLyBkaXNwbGF5cyB0aGUgY2hhcmFjdGVyIHBvc2l0aW9uIHdoZXJlIHRoZSBsZXhpbmcgZXJyb3Igb2NjdXJyZWQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBzaG93UG9zaXRpb246IC8qIEBfX1BVUkVfXyAqLyBvKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSA9IHRoaXMucGFzdElucHV0KCksIG4gPSBuZXcgQXJyYXkoaS5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIGkgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIGBcbmAgKyBuICsgXCJeXCI7XG4gICAgICB9LCBcInNob3dQb3NpdGlvblwiKSxcbiAgICAgIC8vIHRlc3QgdGhlIGxleGVkIHRva2VuOiByZXR1cm4gRkFMU0Ugd2hlbiBub3QgYSBtYXRjaCwgb3RoZXJ3aXNlIHJldHVybiB0b2tlblxuICAgICAgdGVzdF9tYXRjaDogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24oaSwgbikge1xuICAgICAgICB2YXIgciwgYSwgaDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgJiYgKGggPSB7XG4gICAgICAgICAgeXlsaW5lbm86IHRoaXMueXlsaW5lbm8sXG4gICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLmxhc3RfbGluZSxcbiAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgIG1hdGNoZXM6IHRoaXMubWF0Y2hlcyxcbiAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgeXk6IHRoaXMueXksXG4gICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKGgueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCkpKSwgYSA9IGlbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpLCBhICYmICh0aGlzLnl5bGluZW5vICs9IGEubGVuZ3RoKSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogYSA/IGFbYS5sZW5ndGggLSAxXS5sZW5ndGggLSBhW2EubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyBpWzBdLmxlbmd0aFxuICAgICAgICB9LCB0aGlzLnl5dGV4dCArPSBpWzBdLCB0aGlzLm1hdGNoICs9IGlbMF0sIHRoaXMubWF0Y2hlcyA9IGksIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFt0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmddKSwgdGhpcy5fbW9yZSA9ICExLCB0aGlzLl9iYWNrdHJhY2sgPSAhMSwgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShpWzBdLmxlbmd0aCksIHRoaXMubWF0Y2hlZCArPSBpWzBdLCByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgbiwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSwgdGhpcy5kb25lICYmIHRoaXMuX2lucHV0ICYmICh0aGlzLmRvbmUgPSAhMSksIHIpXG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICBmb3IgKHZhciB0IGluIGgpXG4gICAgICAgICAgICB0aGlzW3RdID0gaFt0XTtcbiAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgICAgfSwgXCJ0ZXN0X21hdGNoXCIpLFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggaW4gaW5wdXRcbiAgICAgIG5leHQ6IC8qIEBfX1BVUkVfXyAqLyBvKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKVxuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgdGhpcy5faW5wdXQgfHwgKHRoaXMuZG9uZSA9ICEwKTtcbiAgICAgICAgdmFyIGksIG4sIHIsIGE7XG4gICAgICAgIHRoaXMuX21vcmUgfHwgKHRoaXMueXl0ZXh0ID0gXCJcIiwgdGhpcy5tYXRjaCA9IFwiXCIpO1xuICAgICAgICBmb3IgKHZhciBoID0gdGhpcy5fY3VycmVudFJ1bGVzKCksIHQgPSAwOyB0IDwgaC5sZW5ndGg7IHQrKylcbiAgICAgICAgICBpZiAociA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbaFt0XV0pLCByICYmICghbiB8fCByWzBdLmxlbmd0aCA+IG5bMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgaWYgKG4gPSByLCBhID0gdCwgdGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgICAgICBpZiAoaSA9IHRoaXMudGVzdF9tYXRjaChyLCBoW3RdKSwgaSAhPT0gITEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICBuID0gITE7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBuID8gKGkgPSB0aGlzLnRlc3RfbWF0Y2gobiwgaFthXSksIGkgIT09ICExID8gaSA6ICExKSA6IHRoaXMuX2lucHV0ID09PSBcIlwiID8gdGhpcy5FT0YgOiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgYC4gVW5yZWNvZ25pemVkIHRleHQuXG5gICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICB9KTtcbiAgICAgIH0sIFwibmV4dFwiKSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIHRoYXQgaGFzIGEgdG9rZW5cbiAgICAgIGxleDogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIHJldHVybiBuIHx8IHRoaXMubGV4KCk7XG4gICAgICB9LCBcImxleFwiKSxcbiAgICAgIC8vIGFjdGl2YXRlcyBhIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgKHB1c2hlcyB0aGUgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvbnRvIHRoZSBjb25kaXRpb24gc3RhY2spXG4gICAgICBiZWdpbjogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24obikge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2gobik7XG4gICAgICB9LCBcImJlZ2luXCIpLFxuICAgICAgLy8gcG9wIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGUgb2ZmIHRoZSBjb25kaXRpb24gc3RhY2tcbiAgICAgIHBvcFN0YXRlOiAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiBuID4gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCkgOiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgfSwgXCJwb3BTdGF0ZVwiKSxcbiAgICAgIC8vIHByb2R1Y2UgdGhlIGxleGVyIHJ1bGUgc2V0IHdoaWNoIGlzIGFjdGl2ZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlXG4gICAgICBfY3VycmVudFJ1bGVzOiAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSA/IHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzIDogdGhpcy5jb25kaXRpb25zLklOSVRJQUwucnVsZXM7XG4gICAgICB9LCBcIl9jdXJyZW50UnVsZXNcIiksXG4gICAgICAvLyByZXR1cm4gdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlOyB3aGVuIGFuIGluZGV4IGFyZ3VtZW50IGlzIHByb3ZpZGVkIGl0IHByb2R1Y2VzIHRoZSBOLXRoIHByZXZpb3VzIGNvbmRpdGlvbiBzdGF0ZSwgaWYgYXZhaWxhYmxlXG4gICAgICB0b3BTdGF0ZTogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24obikge1xuICAgICAgICByZXR1cm4gbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMSAtIE1hdGguYWJzKG4gfHwgMCksIG4gPj0gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2tbbl0gOiBcIklOSVRJQUxcIjtcbiAgICAgIH0sIFwidG9wU3RhdGVcIiksXG4gICAgICAvLyBhbGlhcyBmb3IgYmVnaW4oY29uZGl0aW9uKVxuICAgICAgcHVzaFN0YXRlOiAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbihuKSB7XG4gICAgICAgIHRoaXMuYmVnaW4obik7XG4gICAgICB9LCBcInB1c2hTdGF0ZVwiKSxcbiAgICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIHN0YXRlcyBjdXJyZW50bHkgb24gdGhlIHN0YWNrXG4gICAgICBzdGF0ZVN0YWNrU2l6ZTogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aDtcbiAgICAgIH0sIFwic3RhdGVTdGFja1NpemVcIiksXG4gICAgICBvcHRpb25zOiB7IFwiY2FzZS1pbnNlbnNpdGl2ZVwiOiAhMCB9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogLyogQF9fUFVSRV9fICovIG8oZnVuY3Rpb24obiwgciwgYSwgaCkge1xuICAgICAgICBzd2l0Y2ggKGEpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJzaGFwZURhdGFcIiksIHIueXl0ZXh0ID0gXCJcIiwgMjQ7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwic2hhcGVEYXRhU3RyXCIpLCAyNDtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCAyNDtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjb25zdCB0ID0gL1xcblxccyovZztcbiAgICAgICAgICAgIHJldHVybiByLnl5dGV4dCA9IHIueXl0ZXh0LnJlcGxhY2UodCwgXCI8YnIvPlwiKSwgMjQ7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIDI0O1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiBuLmdldExvZ2dlcigpLnRyYWNlKFwiRm91bmQgY29tbWVudFwiLCByLnl5dGV4dCksIDY7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmV0dXJuIDg7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcIkNMQVNTXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgMTc7XG4gICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBuLmdldExvZ2dlcigpLnRyYWNlKFwiQmVnaW4gaWNvblwiKSwgdGhpcy5iZWdpbihcIklDT05cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgcmV0dXJuIG4uZ2V0TG9nZ2VyKCkudHJhY2UoXCJTUEFDRUxJTkVcIiksIDY7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHJldHVybiA3O1xuICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICByZXR1cm4gMTY7XG4gICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgIG4uZ2V0TG9nZ2VyKCkudHJhY2UoXCJlbmQgaWNvblwiKSwgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHJldHVybiBuLmdldExvZ2dlcigpLnRyYWNlKFwiRXhwbG9kaW5nIG5vZGVcIiksIHRoaXMuYmVnaW4oXCJOT0RFXCIpLCAyMDtcbiAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgcmV0dXJuIG4uZ2V0TG9nZ2VyKCkudHJhY2UoXCJDbG91ZFwiKSwgdGhpcy5iZWdpbihcIk5PREVcIiksIDIwO1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICByZXR1cm4gbi5nZXRMb2dnZXIoKS50cmFjZShcIkV4cGxvc2lvbiBCYW5nXCIpLCB0aGlzLmJlZ2luKFwiTk9ERVwiKSwgMjA7XG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIHJldHVybiBuLmdldExvZ2dlcigpLnRyYWNlKFwiQ2xvdWQgQmFuZ1wiKSwgdGhpcy5iZWdpbihcIk5PREVcIiksIDIwO1xuICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcIk5PREVcIiksIDIwO1xuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcIk5PREVcIiksIDIwO1xuICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcIk5PREVcIiksIDIwO1xuICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcIk5PREVcIiksIDIwO1xuICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICByZXR1cm4gMTM7XG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIHJldHVybiAyMztcbiAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgcmV0dXJuIDExO1xuICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiTlNUUjJcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERVNDUlwiO1xuICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgbi5nZXRMb2dnZXIoKS50cmFjZShcIlN0YXJ0aW5nIE5TVFJcIiksIHRoaXMuYmVnaW4oXCJOU1RSXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgIHJldHVybiBuLmdldExvZ2dlcigpLnRyYWNlKFwiZGVzY3JpcHRpb246XCIsIHIueXl0ZXh0KSwgXCJOT0RFX0RFU0NSXCI7XG4gICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBuLmdldExvZ2dlcigpLnRyYWNlKFwibm9kZSBlbmQgKSlcIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIG4uZ2V0TG9nZ2VyKCkudHJhY2UoXCJub2RlIGVuZCApXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBuLmdldExvZ2dlcigpLnRyYWNlKFwibm9kZSBlbmQgLi4uXCIsIHIueXl0ZXh0KSwgXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgbi5nZXRMb2dnZXIoKS50cmFjZShcIm5vZGUgZW5kICgoXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBuLmdldExvZ2dlcigpLnRyYWNlKFwibm9kZSBlbmQgKC1cIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIG4uZ2V0TG9nZ2VyKCkudHJhY2UoXCJub2RlIGVuZCAoLVwiKSwgXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgbi5nZXRMb2dnZXIoKS50cmFjZShcIm5vZGUgZW5kICgoXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBuLmdldExvZ2dlcigpLnRyYWNlKFwibm9kZSBlbmQgKChcIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgIHJldHVybiBuLmdldExvZ2dlcigpLnRyYWNlKFwiTG9uZyBkZXNjcmlwdGlvbjpcIiwgci55eXRleHQpLCAyMTtcbiAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgcmV0dXJuIG4uZ2V0TG9nZ2VyKCkudHJhY2UoXCJMb25nIGRlc2NyaXB0aW9uOlwiLCByLnl5dGV4dCksIDIxO1xuICAgICAgICB9XG4gICAgICB9LCBcImFub255bW91c1wiKSxcbiAgICAgIHJ1bGVzOiBbL14oPzpAXFx7KS9pLCAvXig/OltcIl0pL2ksIC9eKD86W1wiXSkvaSwgL14oPzpbXlxcXCJdKykvaSwgL14oPzpbXn1eXCJdKykvaSwgL14oPzpcXH0pL2ksIC9eKD86XFxzKiUlLiopL2ksIC9eKD86a2FuYmFuXFxiKS9pLCAvXig/Ojo6OikvaSwgL14oPzouKykvaSwgL14oPzpcXG4pL2ksIC9eKD86OjppY29uXFwoKS9pLCAvXig/OltcXHNdK1tcXG5dKS9pLCAvXig/OltcXG5dKykvaSwgL14oPzpbXlxcKV0rKS9pLCAvXig/OlxcKSkvaSwgL14oPzotXFwpKS9pLCAvXig/OlxcKC0pL2ksIC9eKD86XFwpXFwpKS9pLCAvXig/OlxcKSkvaSwgL14oPzpcXChcXCgpL2ksIC9eKD86XFx7XFx7KS9pLCAvXig/OlxcKCkvaSwgL14oPzpcXFspL2ksIC9eKD86W1xcc10rKS9pLCAvXig/OlteXFwoXFxbXFxuXFwpXFx7XFx9QF0rKS9pLCAvXig/OiQpL2ksIC9eKD86W1wiXVtgXSkvaSwgL14oPzpbXmBcIl0rKS9pLCAvXig/OltgXVtcIl0pL2ksIC9eKD86W1wiXSkvaSwgL14oPzpbXlwiXSspL2ksIC9eKD86W1wiXSkvaSwgL14oPzpbXFwpXVxcKSkvaSwgL14oPzpbXFwpXSkvaSwgL14oPzpbXFxdXSkvaSwgL14oPzpcXH1cXH0pL2ksIC9eKD86XFwoLSkvaSwgL14oPzotXFwpKS9pLCAvXig/OlxcKFxcKCkvaSwgL14oPzpcXCgpL2ksIC9eKD86W15cXClcXF1cXChcXH1dKykvaSwgL14oPzouKyg/IVxcKFxcKCkpL2ldLFxuICAgICAgY29uZGl0aW9uczogeyBzaGFwZURhdGFFbmRCcmFja2V0OiB7IHJ1bGVzOiBbXSwgaW5jbHVzaXZlOiAhMSB9LCBzaGFwZURhdGFTdHI6IHsgcnVsZXM6IFsyLCAzXSwgaW5jbHVzaXZlOiAhMSB9LCBzaGFwZURhdGE6IHsgcnVsZXM6IFsxLCA0LCA1XSwgaW5jbHVzaXZlOiAhMSB9LCBDTEFTUzogeyBydWxlczogWzksIDEwXSwgaW5jbHVzaXZlOiAhMSB9LCBJQ09OOiB7IHJ1bGVzOiBbMTQsIDE1XSwgaW5jbHVzaXZlOiAhMSB9LCBOU1RSMjogeyBydWxlczogWzI4LCAyOV0sIGluY2x1c2l2ZTogITEgfSwgTlNUUjogeyBydWxlczogWzMxLCAzMl0sIGluY2x1c2l2ZTogITEgfSwgTk9ERTogeyBydWxlczogWzI3LCAzMCwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDJdLCBpbmNsdXNpdmU6ICExIH0sIElOSVRJQUw6IHsgcnVsZXM6IFswLCA2LCA3LCA4LCAxMSwgMTIsIDEzLCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjZdLCBpbmNsdXNpdmU6ICEwIH0gfVxuICAgIH07XG4gICAgcmV0dXJuIE87XG4gIH0pKCk7XG4gIFQubGV4ZXIgPSBLO1xuICBmdW5jdGlvbiBCKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICByZXR1cm4gbyhCLCBcIlBhcnNlclwiKSwgQi5wcm90b3R5cGUgPSBULCBULlBhcnNlciA9IEIsIG5ldyBCKCk7XG59KSgpO1xuJC5wYXJzZXIgPSAkO1xudmFyIHhlID0gJCwgdiA9IFtdLCBuZSA9IFtdLCBlZSA9IDAsIGllID0ge30sIHZlID0gLyogQF9fUFVSRV9fICovIG8oKCkgPT4ge1xuICB2ID0gW10sIG5lID0gW10sIGVlID0gMCwgaWUgPSB7fTtcbn0sIFwiY2xlYXJcIiksIERlID0gLyogQF9fUFVSRV9fICovIG8oKGUpID0+IHtcbiAgaWYgKHYubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBudWxsO1xuICBjb25zdCB1ID0gdlswXS5sZXZlbDtcbiAgbGV0IHAgPSBudWxsO1xuICBmb3IgKGxldCBzID0gdi5sZW5ndGggLSAxOyBzID49IDA7IHMtLSlcbiAgICBpZiAodltzXS5sZXZlbCA9PT0gdSAmJiAhcCAmJiAocCA9IHZbc10pLCB2W3NdLmxldmVsIDwgdSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignSXRlbXMgd2l0aG91dCBzZWN0aW9uIGRldGVjdGVkLCBmb3VuZCBzZWN0aW9uIChcIicgKyB2W3NdLmxhYmVsICsgJ1wiKScpO1xuICByZXR1cm4gZSA9PT0gcD8ubGV2ZWwgPyBudWxsIDogcDtcbn0sIFwiZ2V0U2VjdGlvblwiKSwgaGUgPSAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5lO1xufSwgXCJnZXRTZWN0aW9uc1wiKSwgTGUgPSAvKiBAX19QVVJFX18gKi8gbyhmdW5jdGlvbigpIHtcbiAgY29uc3QgZSA9IFtdLCB1ID0gW10sIHAgPSBoZSgpLCBzID0gVSgpO1xuICBmb3IgKGNvbnN0IGQgb2YgcCkge1xuICAgIGNvbnN0IEUgPSB7XG4gICAgICBpZDogZC5pZCxcbiAgICAgIGxhYmVsOiBqKGQubGFiZWwgPz8gXCJcIiwgcyksXG4gICAgICBpc0dyb3VwOiAhMCxcbiAgICAgIHRpY2tldDogZC50aWNrZXQsXG4gICAgICBzaGFwZTogXCJrYW5iYW5TZWN0aW9uXCIsXG4gICAgICBsZXZlbDogZC5sZXZlbCxcbiAgICAgIGxvb2s6IHMubG9va1xuICAgIH07XG4gICAgdS5wdXNoKEUpO1xuICAgIGNvbnN0IGIgPSB2LmZpbHRlcigobCkgPT4gbC5wYXJlbnRJZCA9PT0gZC5pZCk7XG4gICAgZm9yIChjb25zdCBsIG9mIGIpIHtcbiAgICAgIGNvbnN0IEQgPSB7XG4gICAgICAgIGlkOiBsLmlkLFxuICAgICAgICBwYXJlbnRJZDogZC5pZCxcbiAgICAgICAgbGFiZWw6IGoobC5sYWJlbCA/PyBcIlwiLCBzKSxcbiAgICAgICAgaXNHcm91cDogITEsXG4gICAgICAgIHRpY2tldDogbD8udGlja2V0LFxuICAgICAgICBwcmlvcml0eTogbD8ucHJpb3JpdHksXG4gICAgICAgIGFzc2lnbmVkOiBsPy5hc3NpZ25lZCxcbiAgICAgICAgaWNvbjogbD8uaWNvbixcbiAgICAgICAgc2hhcGU6IFwia2FuYmFuSXRlbVwiLFxuICAgICAgICBsZXZlbDogbC5sZXZlbCxcbiAgICAgICAgcng6IDUsXG4gICAgICAgIHJ5OiA1LFxuICAgICAgICBjc3NTdHlsZXM6IFtcInRleHQtYWxpZ246IGxlZnRcIl1cbiAgICAgIH07XG4gICAgICB1LnB1c2goRCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IG5vZGVzOiB1LCBlZGdlczogZSwgb3RoZXI6IHt9LCBjb25maWc6IFUoKSB9O1xufSwgXCJnZXREYXRhXCIpLCBPZSA9IC8qIEBfX1BVUkVfXyAqLyBvKChlLCB1LCBwLCBzLCBkKSA9PiB7XG4gIGNvbnN0IEUgPSBVKCk7XG4gIGxldCBiID0gRS5taW5kbWFwPy5wYWRkaW5nID8/IFkubWluZG1hcC5wYWRkaW5nO1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIGYuUk9VTkRFRF9SRUNUOlxuICAgIGNhc2UgZi5SRUNUOlxuICAgIGNhc2UgZi5IRVhBR09OOlxuICAgICAgYiAqPSAyO1xuICB9XG4gIGNvbnN0IGwgPSB7XG4gICAgaWQ6IGoodSwgRSkgfHwgXCJrYm5cIiArIGVlKyssXG4gICAgbGV2ZWw6IGUsXG4gICAgbGFiZWw6IGoocCwgRSksXG4gICAgd2lkdGg6IEUubWluZG1hcD8ubWF4Tm9kZVdpZHRoID8/IFkubWluZG1hcC5tYXhOb2RlV2lkdGgsXG4gICAgcGFkZGluZzogYixcbiAgICBpc0dyb3VwOiAhMVxuICB9O1xuICBpZiAoZCAhPT0gdm9pZCAwKSB7XG4gICAgbGV0IEk7XG4gICAgZC5pbmNsdWRlcyhgXG5gKSA/IEkgPSBkICsgYFxuYCA6IEkgPSBge1xuYCArIGQgKyBgXG59YDtcbiAgICBjb25zdCBnID0gRWUoSSwgeyBzY2hlbWE6IGtlIH0pO1xuICAgIGlmIChnLnNoYXBlICYmIChnLnNoYXBlICE9PSBnLnNoYXBlLnRvTG93ZXJDYXNlKCkgfHwgZy5zaGFwZS5pbmNsdWRlcyhcIl9cIikpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBzdWNoIHNoYXBlOiAke2cuc2hhcGV9LiBTaGFwZSBuYW1lcyBzaG91bGQgYmUgbG93ZXJjYXNlLmApO1xuICAgIGc/LnNoYXBlICYmIGcuc2hhcGUgPT09IFwia2FuYmFuSXRlbVwiICYmIChsLnNoYXBlID0gZz8uc2hhcGUpLCBnPy5sYWJlbCAmJiAobC5sYWJlbCA9IGc/LmxhYmVsKSwgZz8uaWNvbiAmJiAobC5pY29uID0gZz8uaWNvbi50b1N0cmluZygpKSwgZz8uYXNzaWduZWQgJiYgKGwuYXNzaWduZWQgPSBnPy5hc3NpZ25lZC50b1N0cmluZygpKSwgZz8udGlja2V0ICYmIChsLnRpY2tldCA9IGc/LnRpY2tldC50b1N0cmluZygpKSwgZz8ucHJpb3JpdHkgJiYgKGwucHJpb3JpdHkgPSBnPy5wcmlvcml0eSk7XG4gIH1cbiAgY29uc3QgRCA9IERlKGUpO1xuICBEID8gbC5wYXJlbnRJZCA9IEQuaWQgfHwgXCJrYm5cIiArIGVlKysgOiBuZS5wdXNoKGwpLCB2LnB1c2gobCk7XG59LCBcImFkZE5vZGVcIiksIGYgPSB7XG4gIERFRkFVTFQ6IDAsXG4gIE5PX0JPUkRFUjogMCxcbiAgUk9VTkRFRF9SRUNUOiAxLFxuICBSRUNUOiAyLFxuICBDSVJDTEU6IDMsXG4gIENMT1VEOiA0LFxuICBCQU5HOiA1LFxuICBIRVhBR09OOiA2XG59LCBJZSA9IC8qIEBfX1BVUkVfXyAqLyBvKChlLCB1KSA9PiB7XG4gIHN3aXRjaCAodGUuZGVidWcoXCJJbiBnZXQgdHlwZVwiLCBlLCB1KSwgZSkge1xuICAgIGNhc2UgXCJbXCI6XG4gICAgICByZXR1cm4gZi5SRUNUO1xuICAgIGNhc2UgXCIoXCI6XG4gICAgICByZXR1cm4gdSA9PT0gXCIpXCIgPyBmLlJPVU5ERURfUkVDVCA6IGYuQ0xPVUQ7XG4gICAgY2FzZSBcIigoXCI6XG4gICAgICByZXR1cm4gZi5DSVJDTEU7XG4gICAgY2FzZSBcIilcIjpcbiAgICAgIHJldHVybiBmLkNMT1VEO1xuICAgIGNhc2UgXCIpKVwiOlxuICAgICAgcmV0dXJuIGYuQkFORztcbiAgICBjYXNlIFwie3tcIjpcbiAgICAgIHJldHVybiBmLkhFWEFHT047XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmLkRFRkFVTFQ7XG4gIH1cbn0sIFwiZ2V0VHlwZVwiKSwgQ2UgPSAvKiBAX19QVVJFX18gKi8gbygoZSwgdSkgPT4ge1xuICBpZVtlXSA9IHU7XG59LCBcInNldEVsZW1lbnRGb3JJZFwiKSwgd2UgPSAvKiBAX19QVVJFX18gKi8gbygoZSkgPT4ge1xuICBpZiAoIWUpXG4gICAgcmV0dXJuO1xuICBjb25zdCB1ID0gVSgpLCBwID0gdlt2Lmxlbmd0aCAtIDFdO1xuICBlLmljb24gJiYgKHAuaWNvbiA9IGooZS5pY29uLCB1KSksIGUuY2xhc3MgJiYgKHAuY3NzQ2xhc3NlcyA9IGooZS5jbGFzcywgdSkpO1xufSwgXCJkZWNvcmF0ZU5vZGVcIiksIEFlID0gLyogQF9fUFVSRV9fICovIG8oKGUpID0+IHtcbiAgc3dpdGNoIChlKSB7XG4gICAgY2FzZSBmLkRFRkFVTFQ6XG4gICAgICByZXR1cm4gXCJuby1ib3JkZXJcIjtcbiAgICBjYXNlIGYuUkVDVDpcbiAgICAgIHJldHVybiBcInJlY3RcIjtcbiAgICBjYXNlIGYuUk9VTkRFRF9SRUNUOlxuICAgICAgcmV0dXJuIFwicm91bmRlZC1yZWN0XCI7XG4gICAgY2FzZSBmLkNJUkNMRTpcbiAgICAgIHJldHVybiBcImNpcmNsZVwiO1xuICAgIGNhc2UgZi5DTE9VRDpcbiAgICAgIHJldHVybiBcImNsb3VkXCI7XG4gICAgY2FzZSBmLkJBTkc6XG4gICAgICByZXR1cm4gXCJiYW5nXCI7XG4gICAgY2FzZSBmLkhFWEFHT046XG4gICAgICByZXR1cm4gXCJoZXhnb25cIjtcbiAgICAvLyBjc3BlbGw6IGRpc2FibGUtbGluZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJuby1ib3JkZXJcIjtcbiAgfVxufSwgXCJ0eXBlMlN0clwiKSwgVGUgPSAvKiBAX19QVVJFX18gKi8gbygoKSA9PiB0ZSwgXCJnZXRMb2dnZXJcIiksIFJlID0gLyogQF9fUFVSRV9fICovIG8oKGUpID0+IGllW2VdLCBcImdldEVsZW1lbnRCeUlkXCIpLCBQZSA9IHtcbiAgY2xlYXI6IHZlLFxuICBhZGROb2RlOiBPZSxcbiAgZ2V0U2VjdGlvbnM6IGhlLFxuICBnZXREYXRhOiBMZSxcbiAgbm9kZVR5cGU6IGYsXG4gIGdldFR5cGU6IEllLFxuICBzZXRFbGVtZW50Rm9ySWQ6IENlLFxuICBkZWNvcmF0ZU5vZGU6IHdlLFxuICB0eXBlMlN0cjogQWUsXG4gIGdldExvZ2dlcjogVGUsXG4gIGdldEVsZW1lbnRCeUlkOiBSZVxufSwgVmUgPSBQZSwgQmUgPSAvKiBAX19QVVJFX18gKi8gbyhhc3luYyAoZSwgdSwgcCwgcykgPT4ge1xuICB0ZS5kZWJ1ZyhgUmVuZGVyaW5nIGthbmJhbiBkaWFncmFtXG5gICsgZSk7XG4gIGNvbnN0IEUgPSBzLmRiLmdldERhdGEoKSwgYiA9IFUoKTtcbiAgYi5odG1sTGFiZWxzID0gITE7XG4gIGNvbnN0IGwgPSBmZSh1KSwgRCA9IGwuYXBwZW5kKFwiZ1wiKTtcbiAgRC5hdHRyKFwiY2xhc3NcIiwgXCJzZWN0aW9uc1wiKTtcbiAgY29uc3QgSSA9IGwuYXBwZW5kKFwiZ1wiKTtcbiAgSS5hdHRyKFwiY2xhc3NcIiwgXCJpdGVtc1wiKTtcbiAgY29uc3QgZyA9IEUubm9kZXMuZmlsdGVyKFxuICAgIC8vIFRPRE86IFR5cGVTY3JpcHQgNS41IHdpbGwgaW5mZXIgdGhpcyBwcmVkaWNhdGUgYXV0b21hdGljYWxseVxuICAgIChtKSA9PiBtLmlzR3JvdXBcbiAgKTtcbiAgbGV0IHcgPSAwO1xuICBjb25zdCBfID0gMTAsIEcgPSBbXTtcbiAgbGV0IE4gPSAyNTtcbiAgZm9yIChjb25zdCBtIG9mIGcpIHtcbiAgICBjb25zdCBBID0gYj8ua2FuYmFuPy5zZWN0aW9uV2lkdGggfHwgMjAwO1xuICAgIHcgPSB3ICsgMSwgbS54ID0gQSAqIHcgKyAodyAtIDEpICogXyAvIDIsIG0ud2lkdGggPSBBLCBtLnkgPSAwLCBtLmhlaWdodCA9IEEgKiAzLCBtLnJ4ID0gNSwgbS5yeSA9IDUsIG0uY3NzQ2xhc3NlcyA9IG0uY3NzQ2xhc3NlcyArIFwiIHNlY3Rpb24tXCIgKyB3O1xuICAgIGNvbnN0IEwgPSBhd2FpdCB5ZShELCBtKTtcbiAgICBOID0gTWF0aC5tYXgoTiwgTD8ubGFiZWxCQm94Py5oZWlnaHQpLCBHLnB1c2goTCk7XG4gIH1cbiAgbGV0IFYgPSAwO1xuICBmb3IgKGNvbnN0IG0gb2YgZykge1xuICAgIGNvbnN0IEEgPSBHW1ZdO1xuICAgIFYgPSBWICsgMTtcbiAgICBjb25zdCBMID0gYj8ua2FuYmFuPy5zZWN0aW9uV2lkdGggfHwgMjAwLCBIID0gLUwgKiAzIC8gMiArIE47XG4gICAgbGV0IFQgPSBIO1xuICAgIGNvbnN0IEsgPSBFLm5vZGVzLmZpbHRlcigoaSkgPT4gaS5wYXJlbnRJZCA9PT0gbS5pZCk7XG4gICAgZm9yIChjb25zdCBpIG9mIEspIHtcbiAgICAgIGlmIChpLmlzR3JvdXApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyb3VwcyB3aXRoaW4gZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBpbiBLYW5iYW4gZGlhZ3JhbXNcIik7XG4gICAgICBpLnggPSBtLngsIGkud2lkdGggPSBMIC0gMS41ICogXztcbiAgICAgIGNvbnN0IHIgPSAoYXdhaXQgYmUoSSwgaSwgeyBjb25maWc6IGIgfSkpLm5vZGUoKS5nZXRCQm94KCk7XG4gICAgICBpLnkgPSBUICsgci5oZWlnaHQgLyAyLCBhd2FpdCBtZShpKSwgVCA9IGkueSArIHIuaGVpZ2h0IC8gMiArIF8gLyAyO1xuICAgIH1cbiAgICBjb25zdCBCID0gQS5jbHVzdGVyLnNlbGVjdChcInJlY3RcIiksIE8gPSBNYXRoLm1heChUIC0gSCArIDMgKiBfLCA1MCkgKyAoTiAtIDI1KTtcbiAgICBCLmF0dHIoXCJoZWlnaHRcIiwgTyk7XG4gIH1cbiAgX2UoXG4gICAgdm9pZCAwLFxuICAgIGwsXG4gICAgYi5taW5kbWFwPy5wYWRkaW5nID8/IFkua2FuYmFuLnBhZGRpbmcsXG4gICAgYi5taW5kbWFwPy51c2VNYXhXaWR0aCA/PyBZLmthbmJhbi51c2VNYXhXaWR0aFxuICApO1xufSwgXCJkcmF3XCIpLCBGZSA9IHtcbiAgZHJhdzogQmVcbn0sIGplID0gLyogQF9fUFVSRV9fICovIG8oKGUpID0+IHtcbiAgbGV0IHUgPSBcIlwiO1xuICBmb3IgKGxldCBzID0gMDsgcyA8IGUuVEhFTUVfQ09MT1JfTElNSVQ7IHMrKylcbiAgICBlW1wibGluZUNvbG9yXCIgKyBzXSA9IGVbXCJsaW5lQ29sb3JcIiArIHNdIHx8IGVbXCJjU2NhbGVJbnZcIiArIHNdLCBTZShlW1wibGluZUNvbG9yXCIgKyBzXSkgPyBlW1wibGluZUNvbG9yXCIgKyBzXSA9IGNlKGVbXCJsaW5lQ29sb3JcIiArIHNdLCAyMCkgOiBlW1wibGluZUNvbG9yXCIgKyBzXSA9IGxlKGVbXCJsaW5lQ29sb3JcIiArIHNdLCAyMCk7XG4gIGNvbnN0IHAgPSAvKiBAX19QVVJFX18gKi8gbygocywgZCkgPT4gZS5kYXJrTW9kZSA/IGxlKHMsIGQpIDogY2UocywgZCksIFwiYWRqdXN0ZXJcIik7XG4gIGZvciAobGV0IHMgPSAwOyBzIDwgZS5USEVNRV9DT0xPUl9MSU1JVDsgcysrKSB7XG4gICAgY29uc3QgZCA9IFwiXCIgKyAoMTcgLSAzICogcyk7XG4gICAgdSArPSBgXG4gICAgLnNlY3Rpb24tJHtzIC0gMX0gcmVjdCwgLnNlY3Rpb24tJHtzIC0gMX0gcGF0aCwgLnNlY3Rpb24tJHtzIC0gMX0gY2lyY2xlLCAuc2VjdGlvbi0ke3MgLSAxfSBwb2x5Z29uLCAuc2VjdGlvbi0ke3MgLSAxfSBwYXRoICB7XG4gICAgICBmaWxsOiAke3AoZVtcImNTY2FsZVwiICsgc10sIDEwKX07XG4gICAgICBzdHJva2U6ICR7cChlW1wiY1NjYWxlXCIgKyBzXSwgMTApfTtcblxuICAgIH1cbiAgICAuc2VjdGlvbi0ke3MgLSAxfSB0ZXh0IHtcbiAgICAgZmlsbDogJHtlW1wiY1NjYWxlTGFiZWxcIiArIHNdfTtcbiAgICB9XG4gICAgLm5vZGUtaWNvbi0ke3MgLSAxfSB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBjb2xvcjogJHtlW1wiY1NjYWxlTGFiZWxcIiArIHNdfTtcbiAgICB9XG4gICAgLnNlY3Rpb24tZWRnZS0ke3MgLSAxfXtcbiAgICAgIHN0cm9rZTogJHtlW1wiY1NjYWxlXCIgKyBzXX07XG4gICAgfVxuICAgIC5lZGdlLWRlcHRoLSR7cyAtIDF9e1xuICAgICAgc3Ryb2tlLXdpZHRoOiAke2R9O1xuICAgIH1cbiAgICAuc2VjdGlvbi0ke3MgLSAxfSBsaW5lIHtcbiAgICAgIHN0cm9rZTogJHtlW1wiY1NjYWxlSW52XCIgKyBzXX0gO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgIH1cblxuICAgIC5kaXNhYmxlZCwgLmRpc2FibGVkIGNpcmNsZSwgLmRpc2FibGVkIHRleHQge1xuICAgICAgZmlsbDogbGlnaHRncmF5O1xuICAgIH1cbiAgICAuZGlzYWJsZWQgdGV4dCB7XG4gICAgICBmaWxsOiAjZWZlZmVmO1xuICAgIH1cblxuICAubm9kZSByZWN0LFxuICAubm9kZSBjaXJjbGUsXG4gIC5ub2RlIGVsbGlwc2UsXG4gIC5ub2RlIHBvbHlnb24sXG4gIC5ub2RlIHBhdGgge1xuICAgIGZpbGw6ICR7ZS5iYWNrZ3JvdW5kfTtcbiAgICBzdHJva2U6ICR7ZS5ub2RlQm9yZGVyfTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgfVxuXG4gIC5rYW5iYW4tdGlja2V0LWxpbmsge1xuICAgIGZpbGw6ICR7ZS5iYWNrZ3JvdW5kfTtcbiAgICBzdHJva2U6ICR7ZS5ub2RlQm9yZGVyfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAgIGA7XG4gIH1cbiAgcmV0dXJuIHU7XG59LCBcImdlblNlY3Rpb25zXCIpLCBHZSA9IC8qIEBfX1BVUkVfXyAqLyBvKChlKSA9PiBgXG4gIC5lZGdlIHtcbiAgICBzdHJva2Utd2lkdGg6IDM7XG4gIH1cbiAgJHtqZShlKX1cbiAgLnNlY3Rpb24tcm9vdCByZWN0LCAuc2VjdGlvbi1yb290IHBhdGgsIC5zZWN0aW9uLXJvb3QgY2lyY2xlLCAuc2VjdGlvbi1yb290IHBvbHlnb24gIHtcbiAgICBmaWxsOiAke2UuZ2l0MH07XG4gIH1cbiAgLnNlY3Rpb24tcm9vdCB0ZXh0IHtcbiAgICBmaWxsOiAke2UuZ2l0QnJhbmNoTGFiZWwwfTtcbiAgfVxuICAuaWNvbi1jb250YWluZXIge1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZWRnZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuICAuY2x1c3Rlci1sYWJlbCwgLmxhYmVsIHtcbiAgICBjb2xvcjogJHtlLnRleHRDb2xvcn07XG4gICAgZmlsbDogJHtlLnRleHRDb2xvcn07XG4gICAgfVxuICAua2FuYmFuLWxhYmVsIHtcbiAgICBkeTogMWVtO1xuICAgIGFsaWdubWVudC1iYXNlbGluZTogbWlkZGxlO1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgZG9taW5hbnQtYmFzZWxpbmU6IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgICAke05lKCl9XG5gLCBcImdldFN0eWxlc1wiKSwgSGUgPSBHZSwgV2UgPSB7XG4gIGRiOiBWZSxcbiAgcmVuZGVyZXI6IEZlLFxuICBwYXJzZXI6IHhlLFxuICBzdHlsZXM6IEhlXG59O1xuZXhwb3J0IHtcbiAgV2UgYXMgZGlhZ3JhbVxufTtcbiJdLCJuYW1lcyI6WyJvIiwicCIsImwiLCJIIiwiRiIsIlUiLCJqIiwiWSIsIkVlIiwia2UiLCJ0ZSIsImZlIiwieWUiLCJiZSIsIm1lIiwiX2UiLCJTZSIsImNlIiwibGUiLCJOZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxJQUFJLEtBQUssV0FBVztBQUNsQixNQUFJLElBQW9CQSxrQkFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDN0MsU0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsUUFBUSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFHO0FBQ2xELFdBQU87QUFBQSxFQUNULEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR0MsTUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBR0MsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBR0MsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUk7QUFBQSxJQUMxVCxPQUF1Qkgsa0JBQUUsV0FBVztBQUFBLElBQ3BDLEdBQUcsT0FBTztBQUFBLElBQ1YsSUFBSSxDQUFBO0FBQUEsSUFDSixVQUFVLEVBQUUsT0FBTyxHQUFHLE9BQU8sR0FBRyxTQUFTLEdBQUcsWUFBWSxHQUFHLFdBQVcsR0FBRyxJQUFJLEdBQUcsUUFBUSxHQUFHLFVBQVUsR0FBRyxNQUFNLElBQUksS0FBSyxJQUFJLFdBQVcsSUFBSSxXQUFXLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLFlBQVksSUFBSSxlQUFlLElBQUksYUFBYSxJQUFJLFlBQVksSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLFlBQVksSUFBSSxTQUFTLEdBQUcsTUFBTSxFQUFDO0FBQUEsSUFDMVUsWUFBWSxFQUFFLEdBQUcsU0FBUyxHQUFHLGFBQWEsR0FBRyxNQUFNLEdBQUcsVUFBVSxJQUFJLE9BQU8sSUFBSSxhQUFhLElBQUksUUFBUSxJQUFJLFNBQVMsSUFBSSxlQUFlLElBQUksY0FBYyxJQUFJLGFBQWEsSUFBSSxXQUFXLElBQUksYUFBWTtBQUFBLElBQzFNLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7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RUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQztBQUN6SDtBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QjtBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssSUFBSSxFQUFFLENBQUM7QUFDWjtBQUFBLE1BQ1Y7QUFBQSxJQUNJLEdBQUcsV0FBVztBQUFBLElBQ2QsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxHQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBR0MsS0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSUMsR0FBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBR0QsS0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUlDLEdBQUMsR0FBSSxFQUFFLEdBQUdELEtBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSUMsTUFBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSUEsR0FBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUdELEtBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJQyxHQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUlDLEdBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUlBLEdBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBQSxJQUNycUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQztBQUFBLElBQ3RDLFlBQTRCSCxrQkFBRSxTQUFTLEdBQUcsR0FBRztBQUMzQyxVQUFJLEVBQUU7QUFDSixhQUFLLE1BQU0sQ0FBQztBQUFBLFdBQ1Q7QUFDSCxZQUFJLElBQUksSUFBSSxNQUFNLENBQUM7QUFDbkIsY0FBTSxFQUFFLE9BQU8sR0FBRztBQUFBLE1B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
