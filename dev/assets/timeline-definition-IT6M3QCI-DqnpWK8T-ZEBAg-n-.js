import { p, f as ft$1, F as F$1, h as ht$1, bk as ky, bl as Ui, bm as H, bn as et, H as p0, bo as Xh, y as By } from "./SynchronicGraphPage-Dz4ROPO2.js";
import { h as hn } from "./arc-C3YlCEKt-DJdLXykZ.js";
import "./QPage-CznTSEEa.js";
import "./index-CVgljMGX.js";
import "./QBtnToggle-DJTClXX6.js";
import "./QBtnGroup-C_C30M17.js";
import "./QToolbar-DecpH4d5.js";
import "./export-file-lpTZqdHO.js";
var Q = (function() {
  var n = /* @__PURE__ */ p(function(x, r, a, c) {
    for (a = a || {}, c = x.length; c--; a[x[c]] = r) ;
    return a;
  }, "o"), t = [6, 8, 10, 11, 12, 14, 16, 17, 20, 21], e = [1, 9], l = [1, 10], i = [1, 11], d = [1, 12], h = [1, 13], f = [1, 16], m = [1, 17], p$1 = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, timeline: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, title: 11, acc_title: 12, acc_title_value: 13, acc_descr: 14, acc_descr_value: 15, acc_descr_multiline_value: 16, section: 17, period_statement: 18, event_statement: 19, period: 20, event: 21, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "timeline", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 11: "title", 12: "acc_title", 13: "acc_title_value", 14: "acc_descr", 15: "acc_descr_value", 16: "acc_descr_multiline_value", 17: "section", 20: "period", 21: "event" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 1], [18, 1], [19, 1]],
    performAction: /* @__PURE__ */ p(function(r, a, c, u, y, o, w) {
      var v = o.length - 1;
      switch (y) {
        case 1:
          return o[v - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          o[v - 1].push(o[v]), this.$ = o[v - 1];
          break;
        case 4:
        case 5:
          this.$ = o[v];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          u.getCommonDb().setDiagramTitle(o[v].substr(6)), this.$ = o[v].substr(6);
          break;
        case 9:
          this.$ = o[v].trim(), u.getCommonDb().setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = o[v].trim(), u.getCommonDb().setAccDescription(this.$);
          break;
        case 12:
          u.addSection(o[v].substr(8)), this.$ = o[v].substr(8);
          break;
        case 15:
          u.addTask(o[v], 0, ""), this.$ = o[v];
          break;
        case 16:
          u.addEvent(o[v].substr(2)), this.$ = o[v];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, n(t, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: e, 12: l, 14: i, 16: d, 17: h, 18: 14, 19: 15, 20: f, 21: m }, n(t, [2, 7], { 1: [2, 1] }), n(t, [2, 3]), { 9: 18, 11: e, 12: l, 14: i, 16: d, 17: h, 18: 14, 19: 15, 20: f, 21: m }, n(t, [2, 5]), n(t, [2, 6]), n(t, [2, 8]), { 13: [1, 19] }, { 15: [1, 20] }, n(t, [2, 11]), n(t, [2, 12]), n(t, [2, 13]), n(t, [2, 14]), n(t, [2, 15]), n(t, [2, 16]), n(t, [2, 4]), n(t, [2, 9]), n(t, [2, 10])],
    defaultActions: {},
    parseError: /* @__PURE__ */ p(function(r, a) {
      if (a.recoverable)
        this.trace(r);
      else {
        var c = new Error(r);
        throw c.hash = a, c;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(r) {
      var a = this, c = [0], u = [], y = [null], o = [], w = this.table, v = "", N = 0, P = 0, W = 2, U = 1, H2 = o.slice.call(arguments, 1), g = Object.create(this.lexer), b = { yy: {} };
      for (var L in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, L) && (b.yy[L] = this.yy[L]);
      g.setInput(r, b.yy), b.yy.lexer = g, b.yy.parser = this, typeof g.yylloc > "u" && (g.yylloc = {});
      var $ = g.yylloc;
      o.push($);
      var z = g.options && g.options.ranges;
      typeof b.yy.parseError == "function" ? this.parseError = b.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Z(T) {
        c.length = c.length - 2 * T, y.length = y.length - T, o.length = o.length - T;
      }
      p(Z, "popStack");
      function tt() {
        var T;
        return T = u.pop() || g.lex() || U, typeof T != "number" && (T instanceof Array && (u = T, T = u.pop()), T = a.symbols_[T] || T), T;
      }
      p(tt, "lex");
      for (var S, A, I, J, R = {}, B, M, et2, O; ; ) {
        if (A = c[c.length - 1], this.defaultActions[A] ? I = this.defaultActions[A] : ((S === null || typeof S > "u") && (S = tt()), I = w[A] && w[A][S]), typeof I > "u" || !I.length || !I[0]) {
          var K = "";
          O = [];
          for (B in w[A])
            this.terminals_[B] && B > W && O.push("'" + this.terminals_[B] + "'");
          g.showPosition ? K = "Parse error on line " + (N + 1) + `:
` + g.showPosition() + `
Expecting ` + O.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : K = "Parse error on line " + (N + 1) + ": Unexpected " + (S == U ? "end of input" : "'" + (this.terminals_[S] || S) + "'"), this.parseError(K, {
            text: g.match,
            token: this.terminals_[S] || S,
            line: g.yylineno,
            loc: $,
            expected: O
          });
        }
        if (I[0] instanceof Array && I.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + A + ", token: " + S);
        switch (I[0]) {
          case 1:
            c.push(S), y.push(g.yytext), o.push(g.yylloc), c.push(I[1]), S = null, P = g.yyleng, v = g.yytext, N = g.yylineno, $ = g.yylloc;
            break;
          case 2:
            if (M = this.productions_[I[1]][1], R.$ = y[y.length - M], R._$ = {
              first_line: o[o.length - (M || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (M || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, z && (R._$.range = [
              o[o.length - (M || 1)].range[0],
              o[o.length - 1].range[1]
            ]), J = this.performAction.apply(R, [
              v,
              P,
              N,
              b.yy,
              I[1],
              y,
              o
            ].concat(H2)), typeof J < "u")
              return J;
            M && (c = c.slice(0, -1 * M * 2), y = y.slice(0, -1 * M), o = o.slice(0, -1 * M)), c.push(this.productions_[I[1]][0]), y.push(R.$), o.push(R._$), et2 = w[c[c.length - 2]][c[c.length - 1]], c.push(et2);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, k = /* @__PURE__ */ (function() {
    var x = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(a, c) {
        if (this.yy.parser)
          this.yy.parser.parseError(a, c);
        else
          throw new Error(a);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(r, a) {
        return this.yy = a || this.yy || {}, this._input = r, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var r = this._input[0];
        this.yytext += r, this.yyleng++, this.offset++, this.match += r, this.matched += r;
        var a = r.match(/(?:\r\n?|\n).*/g);
        return a ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), r;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(r) {
        var a = r.length, c = r.split(/(?:\r\n?|\n)/g);
        this._input = r + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
        var u = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
        var y = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: c ? (c.length === u.length ? this.yylloc.first_column : 0) + u[u.length - c.length].length - c[0].length : this.yylloc.first_column - a
        }, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - a]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(r) {
        this.unput(this.match.slice(r));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var r = this.matched.substr(0, this.matched.length - this.match.length);
        return (r.length > 20 ? "..." : "") + r.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var r = this.match;
        return r.length < 20 && (r += this._input.substr(0, 20 - r.length)), (r.substr(0, 20) + (r.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var r = this.pastInput(), a = new Array(r.length + 1).join("-");
        return r + this.upcomingInput() + `
` + a + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(r, a) {
        var c, u, y;
        if (this.options.backtrack_lexer && (y = {
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
        }, this.options.ranges && (y.yylloc.range = this.yylloc.range.slice(0))), u = r[0].match(/(?:\r\n?|\n).*/g), u && (this.yylineno += u.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: u ? u[u.length - 1].length - u[u.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + r[0].length
        }, this.yytext += r[0], this.match += r[0], this.matches = r, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(r[0].length), this.matched += r[0], c = this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), c)
          return c;
        if (this._backtrack) {
          for (var o in y)
            this[o] = y[o];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var r, a, c, u;
        this._more || (this.yytext = "", this.match = "");
        for (var y = this._currentRules(), o = 0; o < y.length; o++)
          if (c = this._input.match(this.rules[y[o]]), c && (!a || c[0].length > a[0].length)) {
            if (a = c, u = o, this.options.backtrack_lexer) {
              if (r = this.test_match(c, y[o]), r !== false)
                return r;
              if (this._backtrack) {
                a = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return a ? (r = this.test_match(a, y[u]), r !== false ? r : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var a = this.next();
        return a || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(a) {
        this.conditionStack.push(a);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var a = this.conditionStack.length - 1;
        return a > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(a) {
        return a = this.conditionStack.length - 1 - Math.abs(a || 0), a >= 0 ? this.conditionStack[a] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(a) {
        this.begin(a);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(a, c, u, y) {
        switch (u) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 10;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return 4;
          case 6:
            return 11;
          case 7:
            return this.begin("acc_title"), 12;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.begin("acc_descr"), 14;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 17;
          case 15:
            return 21;
          case 16:
            return 20;
          case 17:
            return 6;
          case 18:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:timeline\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^:\n]+)/i, /^(?::\s(?:[^:\n]|:(?!\s))+)/i, /^(?:[^#:\n]+)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18], inclusive: true } }
    };
    return x;
  })();
  p$1.lexer = k;
  function _() {
    this.yy = {};
  }
  return p(_, "Parser"), _.prototype = p$1, p$1.Parser = _, new _();
})();
Q.parser = Q;
var Tt = Q, at = {};
p0(at, {
  addEvent: () => yt,
  addSection: () => ht,
  addTask: () => pt,
  addTaskOrg: () => gt,
  clear: () => ct,
  default: () => It,
  getCommonDb: () => ot,
  getSections: () => dt,
  getTasks: () => ut
});
var F = "", lt = 0, X = [], G = [], V = [], ot = /* @__PURE__ */ p(() => Xh, "getCommonDb"), ct = /* @__PURE__ */ p(function() {
  X.length = 0, G.length = 0, F = "", V.length = 0, By();
}, "clear"), ht = /* @__PURE__ */ p(function(n) {
  F = n, X.push(n);
}, "addSection"), dt = /* @__PURE__ */ p(function() {
  return X;
}, "getSections"), ut = /* @__PURE__ */ p(function() {
  let n = it();
  const t = 100;
  let e = 0;
  for (; !n && e < t; )
    n = it(), e++;
  return G.push(...V), G;
}, "getTasks"), pt = /* @__PURE__ */ p(function(n, t, e) {
  const l = {
    id: lt++,
    section: F,
    type: F,
    task: n,
    score: t || 0,
    //if event is defined, then add it the events array
    events: e ? [e] : []
  };
  V.push(l);
}, "addTask"), yt = /* @__PURE__ */ p(function(n) {
  V.find((e) => e.id === lt - 1).events.push(n);
}, "addEvent"), gt = /* @__PURE__ */ p(function(n) {
  const t = {
    section: F,
    type: F,
    description: n,
    task: n,
    classes: []
  };
  G.push(t);
}, "addTaskOrg"), it = /* @__PURE__ */ p(function() {
  const n = /* @__PURE__ */ p(function(e) {
    return V[e].processed;
  }, "compileTask");
  let t = true;
  for (const [e, l] of V.entries())
    n(e), t = t && l.processed;
  return t;
}, "compileTasks"), It = {
  clear: ct,
  getCommonDb: ot,
  addSection: ht,
  getSections: dt,
  getTasks: ut,
  addTask: pt,
  addTaskOrg: gt,
  addEvent: yt
}, Nt = 12, q = /* @__PURE__ */ p(function(n, t) {
  const e = n.append("rect");
  return e.attr("x", t.x), e.attr("y", t.y), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("width", t.width), e.attr("height", t.height), e.attr("rx", t.rx), e.attr("ry", t.ry), t.class !== void 0 && e.attr("class", t.class), e;
}, "drawRect"), Lt = /* @__PURE__ */ p(function(n, t) {
  const l = n.append("circle").attr("cx", t.cx).attr("cy", t.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), i = n.append("g");
  i.append("circle").attr("cx", t.cx - 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), i.append("circle").attr("cx", t.cx + 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function d(m) {
    const p2 = hn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    m.append("path").attr("class", "mouth").attr("d", p2).attr("transform", "translate(" + t.cx + "," + (t.cy + 2) + ")");
  }
  p(d, "smile");
  function h(m) {
    const p2 = hn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    m.append("path").attr("class", "mouth").attr("d", p2).attr("transform", "translate(" + t.cx + "," + (t.cy + 7) + ")");
  }
  p(h, "sad");
  function f(m) {
    m.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", t.cx - 5).attr("y1", t.cy + 7).attr("x2", t.cx + 5).attr("y2", t.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return p(f, "ambivalent"), t.score > 3 ? d(i) : t.score < 3 ? h(i) : f(i), l;
}, "drawFace"), $t = /* @__PURE__ */ p(function(n, t) {
  const e = n.append("circle");
  return e.attr("cx", t.cx), e.attr("cy", t.cy), e.attr("class", "actor-" + t.pos), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("r", t.r), e.class !== void 0 && e.attr("class", e.class), t.title !== void 0 && e.append("title").text(t.title), e;
}, "drawCircle"), ft = /* @__PURE__ */ p(function(n, t) {
  const e = t.text.replace(/<br\s*\/?>/gi, " "), l = n.append("text");
  l.attr("x", t.x), l.attr("y", t.y), l.attr("class", "legend"), l.style("text-anchor", t.anchor), t.class !== void 0 && l.attr("class", t.class);
  const i = l.append("tspan");
  return i.attr("x", t.x + t.textMargin * 2), i.text(e), l;
}, "drawText"), Mt = /* @__PURE__ */ p(function(n, t) {
  function e(i, d, h, f, m) {
    return i + "," + d + " " + (i + h) + "," + d + " " + (i + h) + "," + (d + f - m) + " " + (i + h - m * 1.2) + "," + (d + f) + " " + i + "," + (d + f);
  }
  p(e, "genPoints");
  const l = n.append("polygon");
  l.attr("points", e(t.x, t.y, 50, 20, 7)), l.attr("class", "labelBox"), t.y = t.y + t.labelMargin, t.x = t.x + 0.5 * t.labelMargin, ft(n, t);
}, "drawLabel"), Ht = /* @__PURE__ */ p(function(n, t, e) {
  const l = n.append("g"), i = Y();
  i.x = t.x, i.y = t.y, i.fill = t.fill, i.width = e.width, i.height = e.height, i.class = "journey-section section-type-" + t.num, i.rx = 3, i.ry = 3, q(l, i), mt(e)(
    t.text,
    l,
    i.x,
    i.y,
    i.width,
    i.height,
    { class: "journey-section section-type-" + t.num },
    e,
    t.colour
  );
}, "drawSection"), rt = -1, Pt = /* @__PURE__ */ p(function(n, t, e) {
  const l = t.x + e.width / 2, i = n.append("g");
  rt++, i.append("line").attr("id", "task" + rt).attr("x1", l).attr("y1", t.y).attr("x2", l).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Lt(i, {
    cx: l,
    cy: 300 + (5 - t.score) * 30,
    score: t.score
  });
  const h = Y();
  h.x = t.x, h.y = t.y, h.fill = t.fill, h.width = e.width, h.height = e.height, h.class = "task task-type-" + t.num, h.rx = 3, h.ry = 3, q(i, h), mt(e)(
    t.task,
    i,
    h.x,
    h.y,
    h.width,
    h.height,
    { class: "task" },
    e,
    t.colour
  );
}, "drawTask"), At = /* @__PURE__ */ p(function(n, t) {
  q(n, {
    x: t.startx,
    y: t.starty,
    width: t.stopx - t.startx,
    height: t.stopy - t.starty,
    fill: t.fill,
    class: "rect"
  }).lower();
}, "drawBackgroundRect"), Ct = /* @__PURE__ */ p(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    "text-anchor": "start",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0
  };
}, "getTextObj"), Y = /* @__PURE__ */ p(function() {
  return {
    x: 0,
    y: 0,
    width: 100,
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0
  };
}, "getNoteRect"), mt = /* @__PURE__ */ (function() {
  function n(i, d, h, f, m, p2, k, _) {
    const x = d.append("text").attr("x", h + m / 2).attr("y", f + p2 / 2 + 5).style("font-color", _).style("text-anchor", "middle").text(i);
    l(x, k);
  }
  p(n, "byText");
  function t(i, d, h, f, m, p2, k, _, x) {
    const { taskFontSize: r, taskFontFamily: a } = _, c = i.split(/<br\s*\/?>/gi);
    for (let u = 0; u < c.length; u++) {
      const y = u * r - r * (c.length - 1) / 2, o = d.append("text").attr("x", h + m / 2).attr("y", f).attr("fill", x).style("text-anchor", "middle").style("font-size", r).style("font-family", a);
      o.append("tspan").attr("x", h + m / 2).attr("dy", y).text(c[u]), o.attr("y", f + p2 / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), l(o, k);
    }
  }
  p(t, "byTspan");
  function e(i, d, h, f, m, p2, k, _) {
    const x = d.append("switch"), a = x.append("foreignObject").attr("x", h).attr("y", f).attr("width", m).attr("height", p2).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    a.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(i), t(i, x, h, f, m, p2, k, _), l(a, k);
  }
  p(e, "byFo");
  function l(i, d) {
    for (const h in d)
      h in d && i.attr(h, d[h]);
  }
  return p(l, "_setTextAttrs"), function(i) {
    return i.textPlacement === "fo" ? e : i.textPlacement === "old" ? n : t;
  };
})(), Rt = /* @__PURE__ */ p(function(n) {
  n.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function D(n, t) {
  n.each(function() {
    var e = ht$1(this), l = e.text().split(/(\s+|<br>)/).reverse(), i, d = [], h = 1.1, f = e.attr("y"), m = parseFloat(e.attr("dy")), p2 = e.text(null).append("tspan").attr("x", 0).attr("y", f).attr("dy", m + "em");
    for (let k = 0; k < l.length; k++)
      i = l[l.length - 1 - k], d.push(i), p2.text(d.join(" ").trim()), (p2.node().getComputedTextLength() > t || i === "<br>") && (d.pop(), p2.text(d.join(" ").trim()), i === "<br>" ? d = [""] : d = [i], p2 = e.append("tspan").attr("x", 0).attr("y", f).attr("dy", h + "em").text(i));
  });
}
p(D, "wrap");
var Ft = /* @__PURE__ */ p(function(n, t, e, l) {
  const i = e % Nt - 1, d = n.append("g");
  t.section = i, d.attr(
    "class",
    (t.class ? t.class + " " : "") + "timeline-node " + ("section-" + i)
  );
  const h = d.append("g"), f = d.append("g"), p2 = f.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(D, t.width).node().getBBox(), k = l.fontSize?.replace ? l.fontSize.replace("px", "") : l.fontSize;
  return t.height = p2.height + k * 1.1 * 0.5 + t.padding, t.height = Math.max(t.height, t.maxHeight), t.width = t.width + 2 * t.padding, f.attr("transform", "translate(" + t.width / 2 + ", " + t.padding / 2 + ")"), Wt(h, t, i, l), t;
}, "drawNode"), Vt = /* @__PURE__ */ p(function(n, t, e) {
  const l = n.append("g"), d = l.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(D, t.width).node().getBBox(), h = e.fontSize?.replace ? e.fontSize.replace("px", "") : e.fontSize;
  return l.remove(), d.height + h * 1.1 * 0.5 + t.padding;
}, "getVirtualNodeHeight"), Wt = /* @__PURE__ */ p(function(n, t, e) {
  n.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr(
    "d",
    `M0 ${t.height - 5} v${-t.height + 10} q0,-5 5,-5 h${t.width - 10} q5,0 5,5 v${t.height - 5} H0 Z`
  ), n.append("line").attr("class", "node-line-" + e).attr("x1", 0).attr("y1", t.height).attr("x2", t.width).attr("y2", t.height);
}, "defaultBkg"), C = {
  drawRect: q,
  drawCircle: $t,
  drawSection: Ht,
  drawText: ft,
  drawLabel: Mt,
  drawTask: Pt,
  drawBackgroundRect: At,
  getTextObj: Ct,
  getNoteRect: Y,
  initGraphics: Rt,
  drawNode: Ft,
  getVirtualNodeHeight: Vt
}, zt = /* @__PURE__ */ p(function(n, t, e, l) {
  const i = ft$1(), d = i.timeline?.leftMargin ?? 50;
  F$1.debug("timeline", l.db);
  const h = i.securityLevel;
  let f;
  h === "sandbox" && (f = ht$1("#i" + t));
  const p2 = (h === "sandbox" ? ht$1(f.nodes()[0].contentDocument.body) : ht$1("body")).select("#" + t);
  p2.append("g");
  const k = l.db.getTasks(), _ = l.db.getCommonDb().getDiagramTitle();
  F$1.debug("task", k), C.initGraphics(p2);
  const x = l.db.getSections();
  F$1.debug("sections", x);
  let r = 0, a = 0, c = 0, u = 0, y = 50 + d, o = 50;
  u = 50;
  let w = 0, v = true;
  x.forEach(function(H2) {
    const g = {
      number: w,
      descr: H2,
      section: w,
      width: 150,
      padding: 20,
      maxHeight: r
    }, b = C.getVirtualNodeHeight(p2, g, i);
    F$1.debug("sectionHeight before draw", b), r = Math.max(r, b + 20);
  });
  let N = 0, P = 0;
  F$1.debug("tasks.length", k.length);
  for (const [H2, g] of k.entries()) {
    const b = {
      number: H2,
      descr: g,
      section: g.section,
      width: 150,
      padding: 20,
      maxHeight: a
    }, L = C.getVirtualNodeHeight(p2, b, i);
    F$1.debug("taskHeight before draw", L), a = Math.max(a, L + 20), N = Math.max(N, g.events.length);
    let $ = 0;
    for (const z of g.events) {
      const Z = {
        descr: z,
        section: g.section,
        number: g.section,
        width: 150,
        padding: 20,
        maxHeight: 50
      };
      $ += C.getVirtualNodeHeight(p2, Z, i);
    }
    g.events.length > 0 && ($ += (g.events.length - 1) * 10), P = Math.max(P, $);
  }
  F$1.debug("maxSectionHeight before draw", r), F$1.debug("maxTaskHeight before draw", a), x && x.length > 0 ? x.forEach((H2) => {
    const g = k.filter((z) => z.section === H2), b = {
      number: w,
      descr: H2,
      section: w,
      width: 200 * Math.max(g.length, 1) - 50,
      padding: 20,
      maxHeight: r
    };
    F$1.debug("sectionNode", b);
    const L = p2.append("g"), $ = C.drawNode(L, b, w, i);
    F$1.debug("sectionNode output", $), L.attr("transform", `translate(${y}, ${u})`), o += r + 50, g.length > 0 && st(
      p2,
      g,
      w,
      y,
      o,
      a,
      i,
      N,
      P,
      r,
      false
    ), y += 200 * Math.max(g.length, 1), o = u, w++;
  }) : (v = false, st(
    p2,
    k,
    w,
    y,
    o,
    a,
    i,
    N,
    P,
    r,
    true
  ));
  const W = p2.node().getBBox();
  F$1.debug("bounds", W), _ && p2.append("text").text(_).attr("x", W.width / 2 - d).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), c = v ? r + a + 150 : a + 100, p2.append("g").attr("class", "lineWrapper").append("line").attr("x1", d).attr("y1", c).attr("x2", W.width + 3 * d).attr("y2", c).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)"), ky(
    void 0,
    p2,
    i.timeline?.padding ?? 50,
    i.timeline?.useMaxWidth ?? false
  );
}, "draw"), st = /* @__PURE__ */ p(function(n, t, e, l, i, d, h, f, m, p2, k) {
  for (const _ of t) {
    const x = {
      descr: _.task,
      section: e,
      number: e,
      width: 150,
      padding: 20,
      maxHeight: d
    };
    F$1.debug("taskNode", x);
    const r = n.append("g").attr("class", "taskWrapper"), c = C.drawNode(r, x, e, h).height;
    if (F$1.debug("taskHeight after draw", c), r.attr("transform", `translate(${l}, ${i})`), d = Math.max(d, c), _.events) {
      const u = n.append("g").attr("class", "lineWrapper");
      let y = d;
      i += 100, y = y + Bt(n, _.events, e, l, i, h), i -= 100, u.append("line").attr("x1", l + 190 / 2).attr("y1", i + d).attr("x2", l + 190 / 2).attr("y2", i + d + 100 + m + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
    }
    l = l + 200, k && !h.timeline?.disableMulticolor && e++;
  }
  i = i - 10;
}, "drawTasks"), Bt = /* @__PURE__ */ p(function(n, t, e, l, i, d) {
  let h = 0;
  const f = i;
  i = i + 100;
  for (const m of t) {
    const p2 = {
      descr: m,
      section: e,
      number: e,
      width: 150,
      padding: 20,
      maxHeight: 50
    };
    F$1.debug("eventNode", p2);
    const k = n.append("g").attr("class", "eventWrapper"), x = C.drawNode(k, p2, e, d).height;
    h = h + x, k.attr("transform", `translate(${l}, ${i})`), i = i + 10 + x;
  }
  return i = f, h;
}, "drawEvents"), Ot = {
  setConf: /* @__PURE__ */ p(() => {
  }, "setConf"),
  draw: zt
}, jt = /* @__PURE__ */ p((n) => {
  let t = "";
  for (let e = 0; e < n.THEME_COLOR_LIMIT; e++)
    n["lineColor" + e] = n["lineColor" + e] || n["cScaleInv" + e], Ui(n["lineColor" + e]) ? n["lineColor" + e] = H(n["lineColor" + e], 20) : n["lineColor" + e] = et(n["lineColor" + e], 20);
  for (let e = 0; e < n.THEME_COLOR_LIMIT; e++) {
    const l = "" + (17 - 3 * e);
    t += `
    .section-${e - 1} rect, .section-${e - 1} path, .section-${e - 1} circle, .section-${e - 1} path  {
      fill: ${n["cScale" + e]};
    }
    .section-${e - 1} text {
     fill: ${n["cScaleLabel" + e]};
    }
    .node-icon-${e - 1} {
      font-size: 40px;
      color: ${n["cScaleLabel" + e]};
    }
    .section-edge-${e - 1}{
      stroke: ${n["cScale" + e]};
    }
    .edge-depth-${e - 1}{
      stroke-width: ${l};
    }
    .section-${e - 1} line {
      stroke: ${n["cScaleInv" + e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel" + e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return t;
}, "genSections"), Gt = /* @__PURE__ */ p((n) => `
  .edge {
    stroke-width: 3;
  }
  ${jt(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`, "getStyles"), qt = Gt, Jt = {
  db: at,
  renderer: Ot,
  parser: Tt,
  styles: qt
};
export {
  Jt as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtZGVmaW5pdGlvbi1JVDZNM1FDSS1EcW5wV0s4VC1aRUJBZy1uLS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1tZXJtYWlkLXN0cmluZy9kaXN0L3RpbWVsaW5lLWRlZmluaXRpb24tSVQ2TTNRQ0ktRHFucFdLOFQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyBzLCBjIGFzIHh0LCBsIGFzIEUsIGQgYXMgaiwgViBhcyBrdCwgVyBhcyB2dCwgWCBhcyBfdCwgWSBhcyBidCwgQiBhcyB3dCwgJCBhcyBTdCwgeSBhcyBFdCB9IGZyb20gXCIuL2VudHJ5LUIyVlgta3hhLmpzXCI7XG5pbXBvcnQgeyBkIGFzIG50IH0gZnJvbSBcIi4vYXJjLUMzWWxDRUt0LmpzXCI7XG52YXIgUSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIG4gPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbih4LCByLCBhLCBjKSB7XG4gICAgZm9yIChhID0gYSB8fCB7fSwgYyA9IHgubGVuZ3RoOyBjLS07IGFbeFtjXV0gPSByKSA7XG4gICAgcmV0dXJuIGE7XG4gIH0sIFwib1wiKSwgdCA9IFs2LCA4LCAxMCwgMTEsIDEyLCAxNCwgMTYsIDE3LCAyMCwgMjFdLCBlID0gWzEsIDldLCBsID0gWzEsIDEwXSwgaSA9IFsxLCAxMV0sIGQgPSBbMSwgMTJdLCBoID0gWzEsIDEzXSwgZiA9IFsxLCAxNl0sIG0gPSBbMSwgMTddLCBwID0ge1xuICAgIHRyYWNlOiAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbigpIHtcbiAgICB9LCBcInRyYWNlXCIpLFxuICAgIHl5OiB7fSxcbiAgICBzeW1ib2xzXzogeyBlcnJvcjogMiwgc3RhcnQ6IDMsIHRpbWVsaW5lOiA0LCBkb2N1bWVudDogNSwgRU9GOiA2LCBsaW5lOiA3LCBTUEFDRTogOCwgc3RhdGVtZW50OiA5LCBORVdMSU5FOiAxMCwgdGl0bGU6IDExLCBhY2NfdGl0bGU6IDEyLCBhY2NfdGl0bGVfdmFsdWU6IDEzLCBhY2NfZGVzY3I6IDE0LCBhY2NfZGVzY3JfdmFsdWU6IDE1LCBhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlOiAxNiwgc2VjdGlvbjogMTcsIHBlcmlvZF9zdGF0ZW1lbnQ6IDE4LCBldmVudF9zdGF0ZW1lbnQ6IDE5LCBwZXJpb2Q6IDIwLCBldmVudDogMjEsICRhY2NlcHQ6IDAsICRlbmQ6IDEgfSxcbiAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNDogXCJ0aW1lbGluZVwiLCA2OiBcIkVPRlwiLCA4OiBcIlNQQUNFXCIsIDEwOiBcIk5FV0xJTkVcIiwgMTE6IFwidGl0bGVcIiwgMTI6IFwiYWNjX3RpdGxlXCIsIDEzOiBcImFjY190aXRsZV92YWx1ZVwiLCAxNDogXCJhY2NfZGVzY3JcIiwgMTU6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDE2OiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMTc6IFwic2VjdGlvblwiLCAyMDogXCJwZXJpb2RcIiwgMjE6IFwiZXZlbnRcIiB9LFxuICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCAzXSwgWzUsIDBdLCBbNSwgMl0sIFs3LCAyXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzksIDFdLCBbOSwgMl0sIFs5LCAyXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbMTgsIDFdLCBbMTksIDFdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihyLCBhLCBjLCB1LCB5LCBvLCB3KSB7XG4gICAgICB2YXIgdiA9IG8ubGVuZ3RoIC0gMTtcbiAgICAgIHN3aXRjaCAoeSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIG9bdiAtIDFdO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy4kID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBvW3YgLSAxXS5wdXNoKG9bdl0pLCB0aGlzLiQgPSBvW3YgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdGhpcy4kID0gb1t2XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdGhpcy4kID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICB1LmdldENvbW1vbkRiKCkuc2V0RGlhZ3JhbVRpdGxlKG9bdl0uc3Vic3RyKDYpKSwgdGhpcy4kID0gb1t2XS5zdWJzdHIoNik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICB0aGlzLiQgPSBvW3ZdLnRyaW0oKSwgdS5nZXRDb21tb25EYigpLnNldEFjY1RpdGxlKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgdGhpcy4kID0gb1t2XS50cmltKCksIHUuZ2V0Q29tbW9uRGIoKS5zZXRBY2NEZXNjcmlwdGlvbih0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIHUuYWRkU2VjdGlvbihvW3ZdLnN1YnN0cig4KSksIHRoaXMuJCA9IG9bdl0uc3Vic3RyKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIHUuYWRkVGFzayhvW3ZdLCAwLCBcIlwiKSwgdGhpcy4kID0gb1t2XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICB1LmFkZEV2ZW50KG9bdl0uc3Vic3RyKDIpKSwgdGhpcy4kID0gb1t2XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCBcImFub255bW91c1wiKSxcbiAgICB0YWJsZTogW3sgMzogMSwgNDogWzEsIDJdIH0sIHsgMTogWzNdIH0sIG4odCwgWzIsIDJdLCB7IDU6IDMgfSksIHsgNjogWzEsIDRdLCA3OiA1LCA4OiBbMSwgNl0sIDk6IDcsIDEwOiBbMSwgOF0sIDExOiBlLCAxMjogbCwgMTQ6IGksIDE2OiBkLCAxNzogaCwgMTg6IDE0LCAxOTogMTUsIDIwOiBmLCAyMTogbSB9LCBuKHQsIFsyLCA3XSwgeyAxOiBbMiwgMV0gfSksIG4odCwgWzIsIDNdKSwgeyA5OiAxOCwgMTE6IGUsIDEyOiBsLCAxNDogaSwgMTY6IGQsIDE3OiBoLCAxODogMTQsIDE5OiAxNSwgMjA6IGYsIDIxOiBtIH0sIG4odCwgWzIsIDVdKSwgbih0LCBbMiwgNl0pLCBuKHQsIFsyLCA4XSksIHsgMTM6IFsxLCAxOV0gfSwgeyAxNTogWzEsIDIwXSB9LCBuKHQsIFsyLCAxMV0pLCBuKHQsIFsyLCAxMl0pLCBuKHQsIFsyLCAxM10pLCBuKHQsIFsyLCAxNF0pLCBuKHQsIFsyLCAxNV0pLCBuKHQsIFsyLCAxNl0pLCBuKHQsIFsyLCA0XSksIG4odCwgWzIsIDldKSwgbih0LCBbMiwgMTBdKV0sXG4gICAgZGVmYXVsdEFjdGlvbnM6IHt9LFxuICAgIHBhcnNlRXJyb3I6IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKHIsIGEpIHtcbiAgICAgIGlmIChhLnJlY292ZXJhYmxlKVxuICAgICAgICB0aGlzLnRyYWNlKHIpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBjID0gbmV3IEVycm9yKHIpO1xuICAgICAgICB0aHJvdyBjLmhhc2ggPSBhLCBjO1xuICAgICAgfVxuICAgIH0sIFwicGFyc2VFcnJvclwiKSxcbiAgICBwYXJzZTogLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24ocikge1xuICAgICAgdmFyIGEgPSB0aGlzLCBjID0gWzBdLCB1ID0gW10sIHkgPSBbbnVsbF0sIG8gPSBbXSwgdyA9IHRoaXMudGFibGUsIHYgPSBcIlwiLCBOID0gMCwgUCA9IDAsIFcgPSAyLCBVID0gMSwgSCA9IG8uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBnID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKSwgYiA9IHsgeXk6IHt9IH07XG4gICAgICBmb3IgKHZhciBMIGluIHRoaXMueXkpXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBMKSAmJiAoYi55eVtMXSA9IHRoaXMueXlbTF0pO1xuICAgICAgZy5zZXRJbnB1dChyLCBiLnl5KSwgYi55eS5sZXhlciA9IGcsIGIueXkucGFyc2VyID0gdGhpcywgdHlwZW9mIGcueXlsbG9jID4gXCJ1XCIgJiYgKGcueXlsbG9jID0ge30pO1xuICAgICAgdmFyICQgPSBnLnl5bGxvYztcbiAgICAgIG8ucHVzaCgkKTtcbiAgICAgIHZhciB6ID0gZy5vcHRpb25zICYmIGcub3B0aW9ucy5yYW5nZXM7XG4gICAgICB0eXBlb2YgYi55eS5wYXJzZUVycm9yID09IFwiZnVuY3Rpb25cIiA/IHRoaXMucGFyc2VFcnJvciA9IGIueXkucGFyc2VFcnJvciA6IHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgZnVuY3Rpb24gWihUKSB7XG4gICAgICAgIGMubGVuZ3RoID0gYy5sZW5ndGggLSAyICogVCwgeS5sZW5ndGggPSB5Lmxlbmd0aCAtIFQsIG8ubGVuZ3RoID0gby5sZW5ndGggLSBUO1xuICAgICAgfVxuICAgICAgcyhaLCBcInBvcFN0YWNrXCIpO1xuICAgICAgZnVuY3Rpb24gdHQoKSB7XG4gICAgICAgIHZhciBUO1xuICAgICAgICByZXR1cm4gVCA9IHUucG9wKCkgfHwgZy5sZXgoKSB8fCBVLCB0eXBlb2YgVCAhPSBcIm51bWJlclwiICYmIChUIGluc3RhbmNlb2YgQXJyYXkgJiYgKHUgPSBULCBUID0gdS5wb3AoKSksIFQgPSBhLnN5bWJvbHNfW1RdIHx8IFQpLCBUO1xuICAgICAgfVxuICAgICAgcyh0dCwgXCJsZXhcIik7XG4gICAgICBmb3IgKHZhciBTLCBBLCBJLCBKLCBSID0ge30sIEIsIE0sIGV0LCBPOyA7ICkge1xuICAgICAgICBpZiAoQSA9IGNbYy5sZW5ndGggLSAxXSwgdGhpcy5kZWZhdWx0QWN0aW9uc1tBXSA/IEkgPSB0aGlzLmRlZmF1bHRBY3Rpb25zW0FdIDogKChTID09PSBudWxsIHx8IHR5cGVvZiBTID4gXCJ1XCIpICYmIChTID0gdHQoKSksIEkgPSB3W0FdICYmIHdbQV1bU10pLCB0eXBlb2YgSSA+IFwidVwiIHx8ICFJLmxlbmd0aCB8fCAhSVswXSkge1xuICAgICAgICAgIHZhciBLID0gXCJcIjtcbiAgICAgICAgICBPID0gW107XG4gICAgICAgICAgZm9yIChCIGluIHdbQV0pXG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsc19bQl0gJiYgQiA+IFcgJiYgTy5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW0JdICsgXCInXCIpO1xuICAgICAgICAgIGcuc2hvd1Bvc2l0aW9uID8gSyA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChOICsgMSkgKyBgOlxuYCArIGcuc2hvd1Bvc2l0aW9uKCkgKyBgXG5FeHBlY3RpbmcgYCArIE8uam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW1NdIHx8IFMpICsgXCInXCIgOiBLID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKE4gKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKFMgPT0gVSA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bU10gfHwgUykgKyBcIidcIiksIHRoaXMucGFyc2VFcnJvcihLLCB7XG4gICAgICAgICAgICB0ZXh0OiBnLm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1tTXSB8fCBTLFxuICAgICAgICAgICAgbGluZTogZy55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogJCxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBPXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKElbMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBJLmxlbmd0aCA+IDEpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgQSArIFwiLCB0b2tlbjogXCIgKyBTKTtcbiAgICAgICAgc3dpdGNoIChJWzBdKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgYy5wdXNoKFMpLCB5LnB1c2goZy55eXRleHQpLCBvLnB1c2goZy55eWxsb2MpLCBjLnB1c2goSVsxXSksIFMgPSBudWxsLCBQID0gZy55eWxlbmcsIHYgPSBnLnl5dGV4dCwgTiA9IGcueXlsaW5lbm8sICQgPSBnLnl5bGxvYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGlmIChNID0gdGhpcy5wcm9kdWN0aW9uc19bSVsxXV1bMV0sIFIuJCA9IHlbeS5sZW5ndGggLSBNXSwgUi5fJCA9IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogb1tvLmxlbmd0aCAtIChNIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IG9bby5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogb1tvLmxlbmd0aCAtIChNIHx8IDEpXS5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBvW28ubGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH0sIHogJiYgKFIuXyQucmFuZ2UgPSBbXG4gICAgICAgICAgICAgIG9bby5sZW5ndGggLSAoTSB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgIG9bby5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgXSksIEogPSB0aGlzLnBlcmZvcm1BY3Rpb24uYXBwbHkoUiwgW1xuICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICBQLFxuICAgICAgICAgICAgICBOLFxuICAgICAgICAgICAgICBiLnl5LFxuICAgICAgICAgICAgICBJWzFdLFxuICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICBvXG4gICAgICAgICAgICBdLmNvbmNhdChIKSksIHR5cGVvZiBKIDwgXCJ1XCIpXG4gICAgICAgICAgICAgIHJldHVybiBKO1xuICAgICAgICAgICAgTSAmJiAoYyA9IGMuc2xpY2UoMCwgLTEgKiBNICogMiksIHkgPSB5LnNsaWNlKDAsIC0xICogTSksIG8gPSBvLnNsaWNlKDAsIC0xICogTSkpLCBjLnB1c2godGhpcy5wcm9kdWN0aW9uc19bSVsxXV1bMF0pLCB5LnB1c2goUi4kKSwgby5wdXNoKFIuXyQpLCBldCA9IHdbY1tjLmxlbmd0aCAtIDJdXVtjW2MubGVuZ3RoIC0gMV1dLCBjLnB1c2goZXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gITA7XG4gICAgfSwgXCJwYXJzZVwiKVxuICB9LCBrID0gLyogQF9fUFVSRV9fICovIChmdW5jdGlvbigpIHtcbiAgICB2YXIgeCA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKVxuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3IoYSwgYyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYSk7XG4gICAgICB9LCBcInBhcnNlRXJyb3JcIiksXG4gICAgICAvLyByZXNldHMgdGhlIGxleGVyLCBzZXRzIG5ldyBpbnB1dFxuICAgICAgc2V0SW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKHIsIGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueXkgPSBhIHx8IHRoaXMueXkgfHwge30sIHRoaXMuX2lucHV0ID0gciwgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9ICExLCB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwLCB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiLCB0aGlzLmNvbmRpdGlvblN0YWNrID0gW1wiSU5JVElBTFwiXSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gWzAsIDBdKSwgdGhpcy5vZmZzZXQgPSAwLCB0aGlzO1xuICAgICAgfSwgXCJzZXRJbnB1dFwiKSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IHIsIHRoaXMueXlsZW5nKyssIHRoaXMub2Zmc2V0KyssIHRoaXMubWF0Y2ggKz0gciwgdGhpcy5tYXRjaGVkICs9IHI7XG4gICAgICAgIHZhciBhID0gci5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIHJldHVybiBhID8gKHRoaXMueXlsaW5lbm8rKywgdGhpcy55eWxsb2MubGFzdF9saW5lKyspIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKywgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpLCByO1xuICAgICAgfSwgXCJpbnB1dFwiKSxcbiAgICAgIC8vIHVuc2hpZnRzIG9uZSBjaGFyIChvciBhIHN0cmluZykgaW50byB0aGUgaW5wdXRcbiAgICAgIHVucHV0OiAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihyKSB7XG4gICAgICAgIHZhciBhID0gci5sZW5ndGgsIGMgPSByLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gciArIHRoaXMuX2lucHV0LCB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBhKSwgdGhpcy5vZmZzZXQgLT0gYTtcbiAgICAgICAgdmFyIHUgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpLCB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKSwgYy5sZW5ndGggLSAxICYmICh0aGlzLnl5bGluZW5vIC09IGMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHZhciB5ID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgIHJldHVybiB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGMgPyAoYy5sZW5ndGggPT09IHUubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyB1W3UubGVuZ3RoIC0gYy5sZW5ndGhdLmxlbmd0aCAtIGNbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gYVxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFt5WzBdLCB5WzBdICsgdGhpcy55eWxlbmcgLSBhXSksIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzO1xuICAgICAgfSwgXCJ1bnB1dFwiKSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBjYWNoZXMgbWF0Y2hlZCB0ZXh0IGFuZCBhcHBlbmRzIGl0IG9uIG5leHQgYWN0aW9uXG4gICAgICBtb3JlOiAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vcmUgPSAhMCwgdGhpcztcbiAgICAgIH0sIFwibW9yZVwiKSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBzaWduYWxzIHRoZSBsZXhlciB0aGF0IHRoaXMgcnVsZSBmYWlscyB0byBtYXRjaCB0aGUgaW5wdXQsIHNvIHRoZSBuZXh0IG1hdGNoaW5nIHJ1bGUgKHJlZ2V4KSBzaG91bGQgYmUgdGVzdGVkIGluc3RlYWQuXG4gICAgICByZWplY3Q6IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcilcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSAhMDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgYC4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxuYCArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LCBcInJlamVjdFwiKSxcbiAgICAgIC8vIHJldGFpbiBmaXJzdCBuIGNoYXJhY3RlcnMgb2YgdGhlIG1hdGNoXG4gICAgICBsZXNzOiAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihyKSB7XG4gICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShyKSk7XG4gICAgICB9LCBcImxlc3NcIiksXG4gICAgICAvLyBkaXNwbGF5cyBhbHJlYWR5IG1hdGNoZWQgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBwYXN0SW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgciA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIChyLmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgci5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LCBcInBhc3RJbnB1dFwiKSxcbiAgICAgIC8vIGRpc3BsYXlzIHVwY29taW5nIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgdXBjb21pbmdJbnB1dDogLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5tYXRjaDtcbiAgICAgICAgcmV0dXJuIHIubGVuZ3RoIDwgMjAgJiYgKHIgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gci5sZW5ndGgpKSwgKHIuc3Vic3RyKDAsIDIwKSArIChyLmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LCBcInVwY29taW5nSW5wdXRcIiksXG4gICAgICAvLyBkaXNwbGF5cyB0aGUgY2hhcmFjdGVyIHBvc2l0aW9uIHdoZXJlIHRoZSBsZXhpbmcgZXJyb3Igb2NjdXJyZWQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBzaG93UG9zaXRpb246IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgciA9IHRoaXMucGFzdElucHV0KCksIGEgPSBuZXcgQXJyYXkoci5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIHIgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIGBcbmAgKyBhICsgXCJeXCI7XG4gICAgICB9LCBcInNob3dQb3NpdGlvblwiKSxcbiAgICAgIC8vIHRlc3QgdGhlIGxleGVkIHRva2VuOiByZXR1cm4gRkFMU0Ugd2hlbiBub3QgYSBtYXRjaCwgb3RoZXJ3aXNlIHJldHVybiB0b2tlblxuICAgICAgdGVzdF9tYXRjaDogLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24ociwgYSkge1xuICAgICAgICB2YXIgYywgdSwgeTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgJiYgKHkgPSB7XG4gICAgICAgICAgeXlsaW5lbm86IHRoaXMueXlsaW5lbm8sXG4gICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLmxhc3RfbGluZSxcbiAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgIG1hdGNoZXM6IHRoaXMubWF0Y2hlcyxcbiAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgeXk6IHRoaXMueXksXG4gICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHkueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCkpKSwgdSA9IHJbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpLCB1ICYmICh0aGlzLnl5bGluZW5vICs9IHUubGVuZ3RoKSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogdSA/IHVbdS5sZW5ndGggLSAxXS5sZW5ndGggLSB1W3UubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyByWzBdLmxlbmd0aFxuICAgICAgICB9LCB0aGlzLnl5dGV4dCArPSByWzBdLCB0aGlzLm1hdGNoICs9IHJbMF0sIHRoaXMubWF0Y2hlcyA9IHIsIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFt0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmddKSwgdGhpcy5fbW9yZSA9ICExLCB0aGlzLl9iYWNrdHJhY2sgPSAhMSwgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShyWzBdLmxlbmd0aCksIHRoaXMubWF0Y2hlZCArPSByWzBdLCBjID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgYSwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSwgdGhpcy5kb25lICYmIHRoaXMuX2lucHV0ICYmICh0aGlzLmRvbmUgPSAhMSksIGMpXG4gICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICBmb3IgKHZhciBvIGluIHkpXG4gICAgICAgICAgICB0aGlzW29dID0geVtvXTtcbiAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgICAgfSwgXCJ0ZXN0X21hdGNoXCIpLFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggaW4gaW5wdXRcbiAgICAgIG5leHQ6IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKVxuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgdGhpcy5faW5wdXQgfHwgKHRoaXMuZG9uZSA9ICEwKTtcbiAgICAgICAgdmFyIHIsIGEsIGMsIHU7XG4gICAgICAgIHRoaXMuX21vcmUgfHwgKHRoaXMueXl0ZXh0ID0gXCJcIiwgdGhpcy5tYXRjaCA9IFwiXCIpO1xuICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5fY3VycmVudFJ1bGVzKCksIG8gPSAwOyBvIDwgeS5sZW5ndGg7IG8rKylcbiAgICAgICAgICBpZiAoYyA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbeVtvXV0pLCBjICYmICghYSB8fCBjWzBdLmxlbmd0aCA+IGFbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgaWYgKGEgPSBjLCB1ID0gbywgdGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgICAgICBpZiAociA9IHRoaXMudGVzdF9tYXRjaChjLCB5W29dKSwgciAhPT0gITEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICBhID0gITE7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBhID8gKHIgPSB0aGlzLnRlc3RfbWF0Y2goYSwgeVt1XSksIHIgIT09ICExID8gciA6ICExKSA6IHRoaXMuX2lucHV0ID09PSBcIlwiID8gdGhpcy5FT0YgOiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgYC4gVW5yZWNvZ25pemVkIHRleHQuXG5gICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICB9KTtcbiAgICAgIH0sIFwibmV4dFwiKSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIHRoYXQgaGFzIGEgdG9rZW5cbiAgICAgIGxleDogLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIHJldHVybiBhIHx8IHRoaXMubGV4KCk7XG4gICAgICB9LCBcImxleFwiKSxcbiAgICAgIC8vIGFjdGl2YXRlcyBhIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgKHB1c2hlcyB0aGUgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvbnRvIHRoZSBjb25kaXRpb24gc3RhY2spXG4gICAgICBiZWdpbjogLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24oYSkge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goYSk7XG4gICAgICB9LCBcImJlZ2luXCIpLFxuICAgICAgLy8gcG9wIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGUgb2ZmIHRoZSBjb25kaXRpb24gc3RhY2tcbiAgICAgIHBvcFN0YXRlOiAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiBhID4gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCkgOiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgfSwgXCJwb3BTdGF0ZVwiKSxcbiAgICAgIC8vIHByb2R1Y2UgdGhlIGxleGVyIHJ1bGUgc2V0IHdoaWNoIGlzIGFjdGl2ZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlXG4gICAgICBfY3VycmVudFJ1bGVzOiAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSA/IHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzIDogdGhpcy5jb25kaXRpb25zLklOSVRJQUwucnVsZXM7XG4gICAgICB9LCBcIl9jdXJyZW50UnVsZXNcIiksXG4gICAgICAvLyByZXR1cm4gdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlOyB3aGVuIGFuIGluZGV4IGFyZ3VtZW50IGlzIHByb3ZpZGVkIGl0IHByb2R1Y2VzIHRoZSBOLXRoIHByZXZpb3VzIGNvbmRpdGlvbiBzdGF0ZSwgaWYgYXZhaWxhYmxlXG4gICAgICB0b3BTdGF0ZTogLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gYSA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMSAtIE1hdGguYWJzKGEgfHwgMCksIGEgPj0gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2tbYV0gOiBcIklOSVRJQUxcIjtcbiAgICAgIH0sIFwidG9wU3RhdGVcIiksXG4gICAgICAvLyBhbGlhcyBmb3IgYmVnaW4oY29uZGl0aW9uKVxuICAgICAgcHVzaFN0YXRlOiAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihhKSB7XG4gICAgICAgIHRoaXMuYmVnaW4oYSk7XG4gICAgICB9LCBcInB1c2hTdGF0ZVwiKSxcbiAgICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIHN0YXRlcyBjdXJyZW50bHkgb24gdGhlIHN0YWNrXG4gICAgICBzdGF0ZVN0YWNrU2l6ZTogLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aDtcbiAgICAgIH0sIFwic3RhdGVTdGFja1NpemVcIiksXG4gICAgICBvcHRpb25zOiB7IFwiY2FzZS1pbnNlbnNpdGl2ZVwiOiAhMCB9LFxuICAgICAgcGVyZm9ybUFjdGlvbjogLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24oYSwgYywgdSwgeSkge1xuICAgICAgICBzd2l0Y2ggKHUpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gMTA7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuIDExO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZ2luKFwiYWNjX3RpdGxlXCIpLCAxMjtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBcImFjY190aXRsZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyXCIpLCAxNDtcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgXCJhY2NfZGVzY3JfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjcl9tdWx0aWxpbmVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHJldHVybiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgcmV0dXJuIDE3O1xuICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICByZXR1cm4gMjE7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHJldHVybiAyMDtcbiAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHJldHVybiBcIklOVkFMSURcIjtcbiAgICAgICAgfVxuICAgICAgfSwgXCJhbm9ueW1vdXNcIiksXG4gICAgICBydWxlczogWy9eKD86JSg/IVxceylbXlxcbl0qKS9pLCAvXig/OlteXFx9XSUlW15cXG5dKikvaSwgL14oPzpbXFxuXSspL2ksIC9eKD86XFxzKykvaSwgL14oPzojW15cXG5dKikvaSwgL14oPzp0aW1lbGluZVxcYikvaSwgL14oPzp0aXRsZVxcc1teXFxuXSspL2ksIC9eKD86YWNjVGl0bGVcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqOlxccyopL2ksIC9eKD86KD8hXFxufHwpKlteXFxuXSopL2ksIC9eKD86YWNjRGVzY3JcXHMqXFx7XFxzKikvaSwgL14oPzpbXFx9XSkvaSwgL14oPzpbXlxcfV0qKS9pLCAvXig/OnNlY3Rpb25cXHNbXjpcXG5dKykvaSwgL14oPzo6XFxzKD86W146XFxuXXw6KD8hXFxzKSkrKS9pLCAvXig/OlteIzpcXG5dKykvaSwgL14oPzokKS9pLCAvXig/Oi4pL2ldLFxuICAgICAgY29uZGl0aW9uczogeyBhY2NfZGVzY3JfbXVsdGlsaW5lOiB7IHJ1bGVzOiBbMTIsIDEzXSwgaW5jbHVzaXZlOiAhMSB9LCBhY2NfZGVzY3I6IHsgcnVsZXM6IFsxMF0sIGluY2x1c2l2ZTogITEgfSwgYWNjX3RpdGxlOiB7IHJ1bGVzOiBbOF0sIGluY2x1c2l2ZTogITEgfSwgSU5JVElBTDogeyBydWxlczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDksIDExLCAxNCwgMTUsIDE2LCAxNywgMThdLCBpbmNsdXNpdmU6ICEwIH0gfVxuICAgIH07XG4gICAgcmV0dXJuIHg7XG4gIH0pKCk7XG4gIHAubGV4ZXIgPSBrO1xuICBmdW5jdGlvbiBfKCkge1xuICAgIHRoaXMueXkgPSB7fTtcbiAgfVxuICByZXR1cm4gcyhfLCBcIlBhcnNlclwiKSwgXy5wcm90b3R5cGUgPSBwLCBwLlBhcnNlciA9IF8sIG5ldyBfKCk7XG59KSgpO1xuUS5wYXJzZXIgPSBRO1xudmFyIFR0ID0gUSwgYXQgPSB7fTtcbnd0KGF0LCB7XG4gIGFkZEV2ZW50OiAoKSA9PiB5dCxcbiAgYWRkU2VjdGlvbjogKCkgPT4gaHQsXG4gIGFkZFRhc2s6ICgpID0+IHB0LFxuICBhZGRUYXNrT3JnOiAoKSA9PiBndCxcbiAgY2xlYXI6ICgpID0+IGN0LFxuICBkZWZhdWx0OiAoKSA9PiBJdCxcbiAgZ2V0Q29tbW9uRGI6ICgpID0+IG90LFxuICBnZXRTZWN0aW9uczogKCkgPT4gZHQsXG4gIGdldFRhc2tzOiAoKSA9PiB1dFxufSk7XG52YXIgRiA9IFwiXCIsIGx0ID0gMCwgWCA9IFtdLCBHID0gW10sIFYgPSBbXSwgb3QgPSAvKiBAX19QVVJFX18gKi8gcygoKSA9PiBTdCwgXCJnZXRDb21tb25EYlwiKSwgY3QgPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbigpIHtcbiAgWC5sZW5ndGggPSAwLCBHLmxlbmd0aCA9IDAsIEYgPSBcIlwiLCBWLmxlbmd0aCA9IDAsIEV0KCk7XG59LCBcImNsZWFyXCIpLCBodCA9IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKG4pIHtcbiAgRiA9IG4sIFgucHVzaChuKTtcbn0sIFwiYWRkU2VjdGlvblwiKSwgZHQgPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFg7XG59LCBcImdldFNlY3Rpb25zXCIpLCB1dCA9IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKCkge1xuICBsZXQgbiA9IGl0KCk7XG4gIGNvbnN0IHQgPSAxMDA7XG4gIGxldCBlID0gMDtcbiAgZm9yICg7ICFuICYmIGUgPCB0OyApXG4gICAgbiA9IGl0KCksIGUrKztcbiAgcmV0dXJuIEcucHVzaCguLi5WKSwgRztcbn0sIFwiZ2V0VGFza3NcIiksIHB0ID0gLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24obiwgdCwgZSkge1xuICBjb25zdCBsID0ge1xuICAgIGlkOiBsdCsrLFxuICAgIHNlY3Rpb246IEYsXG4gICAgdHlwZTogRixcbiAgICB0YXNrOiBuLFxuICAgIHNjb3JlOiB0IHx8IDAsXG4gICAgLy9pZiBldmVudCBpcyBkZWZpbmVkLCB0aGVuIGFkZCBpdCB0aGUgZXZlbnRzIGFycmF5XG4gICAgZXZlbnRzOiBlID8gW2VdIDogW11cbiAgfTtcbiAgVi5wdXNoKGwpO1xufSwgXCJhZGRUYXNrXCIpLCB5dCA9IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKG4pIHtcbiAgVi5maW5kKChlKSA9PiBlLmlkID09PSBsdCAtIDEpLmV2ZW50cy5wdXNoKG4pO1xufSwgXCJhZGRFdmVudFwiKSwgZ3QgPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihuKSB7XG4gIGNvbnN0IHQgPSB7XG4gICAgc2VjdGlvbjogRixcbiAgICB0eXBlOiBGLFxuICAgIGRlc2NyaXB0aW9uOiBuLFxuICAgIHRhc2s6IG4sXG4gICAgY2xhc3NlczogW11cbiAgfTtcbiAgRy5wdXNoKHQpO1xufSwgXCJhZGRUYXNrT3JnXCIpLCBpdCA9IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKCkge1xuICBjb25zdCBuID0gLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiBWW2VdLnByb2Nlc3NlZDtcbiAgfSwgXCJjb21waWxlVGFza1wiKTtcbiAgbGV0IHQgPSAhMDtcbiAgZm9yIChjb25zdCBbZSwgbF0gb2YgVi5lbnRyaWVzKCkpXG4gICAgbihlKSwgdCA9IHQgJiYgbC5wcm9jZXNzZWQ7XG4gIHJldHVybiB0O1xufSwgXCJjb21waWxlVGFza3NcIiksIEl0ID0ge1xuICBjbGVhcjogY3QsXG4gIGdldENvbW1vbkRiOiBvdCxcbiAgYWRkU2VjdGlvbjogaHQsXG4gIGdldFNlY3Rpb25zOiBkdCxcbiAgZ2V0VGFza3M6IHV0LFxuICBhZGRUYXNrOiBwdCxcbiAgYWRkVGFza09yZzogZ3QsXG4gIGFkZEV2ZW50OiB5dFxufSwgTnQgPSAxMiwgcSA9IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKG4sIHQpIHtcbiAgY29uc3QgZSA9IG4uYXBwZW5kKFwicmVjdFwiKTtcbiAgcmV0dXJuIGUuYXR0cihcInhcIiwgdC54KSwgZS5hdHRyKFwieVwiLCB0LnkpLCBlLmF0dHIoXCJmaWxsXCIsIHQuZmlsbCksIGUuYXR0cihcInN0cm9rZVwiLCB0LnN0cm9rZSksIGUuYXR0cihcIndpZHRoXCIsIHQud2lkdGgpLCBlLmF0dHIoXCJoZWlnaHRcIiwgdC5oZWlnaHQpLCBlLmF0dHIoXCJyeFwiLCB0LnJ4KSwgZS5hdHRyKFwicnlcIiwgdC5yeSksIHQuY2xhc3MgIT09IHZvaWQgMCAmJiBlLmF0dHIoXCJjbGFzc1wiLCB0LmNsYXNzKSwgZTtcbn0sIFwiZHJhd1JlY3RcIiksIEx0ID0gLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24obiwgdCkge1xuICBjb25zdCBsID0gbi5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIHQuY3gpLmF0dHIoXCJjeVwiLCB0LmN5KS5hdHRyKFwiY2xhc3NcIiwgXCJmYWNlXCIpLmF0dHIoXCJyXCIsIDE1KS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpLmF0dHIoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIiksIGkgPSBuLmFwcGVuZChcImdcIik7XG4gIGkuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCB0LmN4IC0gMTUgLyAzKS5hdHRyKFwiY3lcIiwgdC5jeSAtIDE1IC8gMykuYXR0cihcInJcIiwgMS41KS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpLmF0dHIoXCJmaWxsXCIsIFwiIzY2NlwiKS5hdHRyKFwic3Ryb2tlXCIsIFwiIzY2NlwiKSwgaS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIHQuY3ggKyAxNSAvIDMpLmF0dHIoXCJjeVwiLCB0LmN5IC0gMTUgLyAzKS5hdHRyKFwiclwiLCAxLjUpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMikuYXR0cihcImZpbGxcIiwgXCIjNjY2XCIpLmF0dHIoXCJzdHJva2VcIiwgXCIjNjY2XCIpO1xuICBmdW5jdGlvbiBkKG0pIHtcbiAgICBjb25zdCBwID0gbnQoKS5zdGFydEFuZ2xlKE1hdGguUEkgLyAyKS5lbmRBbmdsZSgzICogKE1hdGguUEkgLyAyKSkuaW5uZXJSYWRpdXMoNy41KS5vdXRlclJhZGl1cyg2LjgxODE4MTgxODE4MTgxNzUpO1xuICAgIG0uYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtb3V0aFwiKS5hdHRyKFwiZFwiLCBwKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgdC5jeCArIFwiLFwiICsgKHQuY3kgKyAyKSArIFwiKVwiKTtcbiAgfVxuICBzKGQsIFwic21pbGVcIik7XG4gIGZ1bmN0aW9uIGgobSkge1xuICAgIGNvbnN0IHAgPSBudCgpLnN0YXJ0QW5nbGUoMyAqIE1hdGguUEkgLyAyKS5lbmRBbmdsZSg1ICogKE1hdGguUEkgLyAyKSkuaW5uZXJSYWRpdXMoNy41KS5vdXRlclJhZGl1cyg2LjgxODE4MTgxODE4MTgxNzUpO1xuICAgIG0uYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtb3V0aFwiKS5hdHRyKFwiZFwiLCBwKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgdC5jeCArIFwiLFwiICsgKHQuY3kgKyA3KSArIFwiKVwiKTtcbiAgfVxuICBzKGgsIFwic2FkXCIpO1xuICBmdW5jdGlvbiBmKG0pIHtcbiAgICBtLmFwcGVuZChcImxpbmVcIikuYXR0cihcImNsYXNzXCIsIFwibW91dGhcIikuYXR0cihcInN0cm9rZVwiLCAyKS5hdHRyKFwieDFcIiwgdC5jeCAtIDUpLmF0dHIoXCJ5MVwiLCB0LmN5ICsgNykuYXR0cihcIngyXCIsIHQuY3ggKyA1KS5hdHRyKFwieTJcIiwgdC5jeSArIDcpLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXRoXCIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIikuYXR0cihcInN0cm9rZVwiLCBcIiM2NjZcIik7XG4gIH1cbiAgcmV0dXJuIHMoZiwgXCJhbWJpdmFsZW50XCIpLCB0LnNjb3JlID4gMyA/IGQoaSkgOiB0LnNjb3JlIDwgMyA/IGgoaSkgOiBmKGkpLCBsO1xufSwgXCJkcmF3RmFjZVwiKSwgJHQgPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihuLCB0KSB7XG4gIGNvbnN0IGUgPSBuLmFwcGVuZChcImNpcmNsZVwiKTtcbiAgcmV0dXJuIGUuYXR0cihcImN4XCIsIHQuY3gpLCBlLmF0dHIoXCJjeVwiLCB0LmN5KSwgZS5hdHRyKFwiY2xhc3NcIiwgXCJhY3Rvci1cIiArIHQucG9zKSwgZS5hdHRyKFwiZmlsbFwiLCB0LmZpbGwpLCBlLmF0dHIoXCJzdHJva2VcIiwgdC5zdHJva2UpLCBlLmF0dHIoXCJyXCIsIHQuciksIGUuY2xhc3MgIT09IHZvaWQgMCAmJiBlLmF0dHIoXCJjbGFzc1wiLCBlLmNsYXNzKSwgdC50aXRsZSAhPT0gdm9pZCAwICYmIGUuYXBwZW5kKFwidGl0bGVcIikudGV4dCh0LnRpdGxlKSwgZTtcbn0sIFwiZHJhd0NpcmNsZVwiKSwgZnQgPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihuLCB0KSB7XG4gIGNvbnN0IGUgPSB0LnRleHQucmVwbGFjZSgvPGJyXFxzKlxcLz8+L2dpLCBcIiBcIiksIGwgPSBuLmFwcGVuZChcInRleHRcIik7XG4gIGwuYXR0cihcInhcIiwgdC54KSwgbC5hdHRyKFwieVwiLCB0LnkpLCBsLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZFwiKSwgbC5zdHlsZShcInRleHQtYW5jaG9yXCIsIHQuYW5jaG9yKSwgdC5jbGFzcyAhPT0gdm9pZCAwICYmIGwuYXR0cihcImNsYXNzXCIsIHQuY2xhc3MpO1xuICBjb25zdCBpID0gbC5hcHBlbmQoXCJ0c3BhblwiKTtcbiAgcmV0dXJuIGkuYXR0cihcInhcIiwgdC54ICsgdC50ZXh0TWFyZ2luICogMiksIGkudGV4dChlKSwgbDtcbn0sIFwiZHJhd1RleHRcIiksIE10ID0gLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24obiwgdCkge1xuICBmdW5jdGlvbiBlKGksIGQsIGgsIGYsIG0pIHtcbiAgICByZXR1cm4gaSArIFwiLFwiICsgZCArIFwiIFwiICsgKGkgKyBoKSArIFwiLFwiICsgZCArIFwiIFwiICsgKGkgKyBoKSArIFwiLFwiICsgKGQgKyBmIC0gbSkgKyBcIiBcIiArIChpICsgaCAtIG0gKiAxLjIpICsgXCIsXCIgKyAoZCArIGYpICsgXCIgXCIgKyBpICsgXCIsXCIgKyAoZCArIGYpO1xuICB9XG4gIHMoZSwgXCJnZW5Qb2ludHNcIik7XG4gIGNvbnN0IGwgPSBuLmFwcGVuZChcInBvbHlnb25cIik7XG4gIGwuYXR0cihcInBvaW50c1wiLCBlKHQueCwgdC55LCA1MCwgMjAsIDcpKSwgbC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbEJveFwiKSwgdC55ID0gdC55ICsgdC5sYWJlbE1hcmdpbiwgdC54ID0gdC54ICsgMC41ICogdC5sYWJlbE1hcmdpbiwgZnQobiwgdCk7XG59LCBcImRyYXdMYWJlbFwiKSwgSHQgPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihuLCB0LCBlKSB7XG4gIGNvbnN0IGwgPSBuLmFwcGVuZChcImdcIiksIGkgPSBZKCk7XG4gIGkueCA9IHQueCwgaS55ID0gdC55LCBpLmZpbGwgPSB0LmZpbGwsIGkud2lkdGggPSBlLndpZHRoLCBpLmhlaWdodCA9IGUuaGVpZ2h0LCBpLmNsYXNzID0gXCJqb3VybmV5LXNlY3Rpb24gc2VjdGlvbi10eXBlLVwiICsgdC5udW0sIGkucnggPSAzLCBpLnJ5ID0gMywgcShsLCBpKSwgbXQoZSkoXG4gICAgdC50ZXh0LFxuICAgIGwsXG4gICAgaS54LFxuICAgIGkueSxcbiAgICBpLndpZHRoLFxuICAgIGkuaGVpZ2h0LFxuICAgIHsgY2xhc3M6IFwiam91cm5leS1zZWN0aW9uIHNlY3Rpb24tdHlwZS1cIiArIHQubnVtIH0sXG4gICAgZSxcbiAgICB0LmNvbG91clxuICApO1xufSwgXCJkcmF3U2VjdGlvblwiKSwgcnQgPSAtMSwgUHQgPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihuLCB0LCBlKSB7XG4gIGNvbnN0IGwgPSB0LnggKyBlLndpZHRoIC8gMiwgaSA9IG4uYXBwZW5kKFwiZ1wiKTtcbiAgcnQrKywgaS5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJpZFwiLCBcInRhc2tcIiArIHJ0KS5hdHRyKFwieDFcIiwgbCkuYXR0cihcInkxXCIsIHQueSkuYXR0cihcIngyXCIsIGwpLmF0dHIoXCJ5MlwiLCA0NTApLmF0dHIoXCJjbGFzc1wiLCBcInRhc2stbGluZVwiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNCAyXCIpLmF0dHIoXCJzdHJva2VcIiwgXCIjNjY2XCIpLCBMdChpLCB7XG4gICAgY3g6IGwsXG4gICAgY3k6IDMwMCArICg1IC0gdC5zY29yZSkgKiAzMCxcbiAgICBzY29yZTogdC5zY29yZVxuICB9KTtcbiAgY29uc3QgaCA9IFkoKTtcbiAgaC54ID0gdC54LCBoLnkgPSB0LnksIGguZmlsbCA9IHQuZmlsbCwgaC53aWR0aCA9IGUud2lkdGgsIGguaGVpZ2h0ID0gZS5oZWlnaHQsIGguY2xhc3MgPSBcInRhc2sgdGFzay10eXBlLVwiICsgdC5udW0sIGgucnggPSAzLCBoLnJ5ID0gMywgcShpLCBoKSwgbXQoZSkoXG4gICAgdC50YXNrLFxuICAgIGksXG4gICAgaC54LFxuICAgIGgueSxcbiAgICBoLndpZHRoLFxuICAgIGguaGVpZ2h0LFxuICAgIHsgY2xhc3M6IFwidGFza1wiIH0sXG4gICAgZSxcbiAgICB0LmNvbG91clxuICApO1xufSwgXCJkcmF3VGFza1wiKSwgQXQgPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihuLCB0KSB7XG4gIHEobiwge1xuICAgIHg6IHQuc3RhcnR4LFxuICAgIHk6IHQuc3RhcnR5LFxuICAgIHdpZHRoOiB0LnN0b3B4IC0gdC5zdGFydHgsXG4gICAgaGVpZ2h0OiB0LnN0b3B5IC0gdC5zdGFydHksXG4gICAgZmlsbDogdC5maWxsLFxuICAgIGNsYXNzOiBcInJlY3RcIlxuICB9KS5sb3dlcigpO1xufSwgXCJkcmF3QmFja2dyb3VuZFJlY3RcIiksIEN0ID0gLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGZpbGw6IHZvaWQgMCxcbiAgICBcInRleHQtYW5jaG9yXCI6IFwic3RhcnRcIixcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICAgIHRleHRNYXJnaW46IDAsXG4gICAgcng6IDAsXG4gICAgcnk6IDBcbiAgfTtcbn0sIFwiZ2V0VGV4dE9ialwiKSwgWSA9IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB3aWR0aDogMTAwLFxuICAgIGFuY2hvcjogXCJzdGFydFwiLFxuICAgIGhlaWdodDogMTAwLFxuICAgIHJ4OiAwLFxuICAgIHJ5OiAwXG4gIH07XG59LCBcImdldE5vdGVSZWN0XCIpLCBtdCA9IC8qIEBfX1BVUkVfXyAqLyAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG4oaSwgZCwgaCwgZiwgbSwgcCwgaywgXykge1xuICAgIGNvbnN0IHggPSBkLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgaCArIG0gLyAyKS5hdHRyKFwieVwiLCBmICsgcCAvIDIgKyA1KS5zdHlsZShcImZvbnQtY29sb3JcIiwgXykuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS50ZXh0KGkpO1xuICAgIGwoeCwgayk7XG4gIH1cbiAgcyhuLCBcImJ5VGV4dFwiKTtcbiAgZnVuY3Rpb24gdChpLCBkLCBoLCBmLCBtLCBwLCBrLCBfLCB4KSB7XG4gICAgY29uc3QgeyB0YXNrRm9udFNpemU6IHIsIHRhc2tGb250RmFtaWx5OiBhIH0gPSBfLCBjID0gaS5zcGxpdCgvPGJyXFxzKlxcLz8+L2dpKTtcbiAgICBmb3IgKGxldCB1ID0gMDsgdSA8IGMubGVuZ3RoOyB1KyspIHtcbiAgICAgIGNvbnN0IHkgPSB1ICogciAtIHIgKiAoYy5sZW5ndGggLSAxKSAvIDIsIG8gPSBkLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgaCArIG0gLyAyKS5hdHRyKFwieVwiLCBmKS5hdHRyKFwiZmlsbFwiLCB4KS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLnN0eWxlKFwiZm9udC1zaXplXCIsIHIpLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgYSk7XG4gICAgICBvLmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ4XCIsIGggKyBtIC8gMikuYXR0cihcImR5XCIsIHkpLnRleHQoY1t1XSksIG8uYXR0cihcInlcIiwgZiArIHAgLyAyKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJjZW50cmFsXCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJjZW50cmFsXCIpLCBsKG8sIGspO1xuICAgIH1cbiAgfVxuICBzKHQsIFwiYnlUc3BhblwiKTtcbiAgZnVuY3Rpb24gZShpLCBkLCBoLCBmLCBtLCBwLCBrLCBfKSB7XG4gICAgY29uc3QgeCA9IGQuYXBwZW5kKFwic3dpdGNoXCIpLCBhID0geC5hcHBlbmQoXCJmb3JlaWduT2JqZWN0XCIpLmF0dHIoXCJ4XCIsIGgpLmF0dHIoXCJ5XCIsIGYpLmF0dHIoXCJ3aWR0aFwiLCBtKS5hdHRyKFwiaGVpZ2h0XCIsIHApLmF0dHIoXCJwb3NpdGlvblwiLCBcImZpeGVkXCIpLmFwcGVuZChcInhodG1sOmRpdlwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJ0YWJsZVwiKS5zdHlsZShcImhlaWdodFwiLCBcIjEwMCVcIikuc3R5bGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XG4gICAgYS5hcHBlbmQoXCJkaXZcIikuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwidGFibGUtY2VsbFwiKS5zdHlsZShcInRleHQtYWxpZ25cIiwgXCJjZW50ZXJcIikuc3R5bGUoXCJ2ZXJ0aWNhbC1hbGlnblwiLCBcIm1pZGRsZVwiKS50ZXh0KGkpLCB0KGksIHgsIGgsIGYsIG0sIHAsIGssIF8pLCBsKGEsIGspO1xuICB9XG4gIHMoZSwgXCJieUZvXCIpO1xuICBmdW5jdGlvbiBsKGksIGQpIHtcbiAgICBmb3IgKGNvbnN0IGggaW4gZClcbiAgICAgIGggaW4gZCAmJiBpLmF0dHIoaCwgZFtoXSk7XG4gIH1cbiAgcmV0dXJuIHMobCwgXCJfc2V0VGV4dEF0dHJzXCIpLCBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIGkudGV4dFBsYWNlbWVudCA9PT0gXCJmb1wiID8gZSA6IGkudGV4dFBsYWNlbWVudCA9PT0gXCJvbGRcIiA/IG4gOiB0O1xuICB9O1xufSkoKSwgUnQgPSAvKiBAX19QVVJFX18gKi8gcyhmdW5jdGlvbihuKSB7XG4gIG4uYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIFwiYXJyb3doZWFkXCIpLmF0dHIoXCJyZWZYXCIsIDUpLmF0dHIoXCJyZWZZXCIsIDIpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCA2KS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDQpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDAsMCBWIDQgTDYsMiBaXCIpO1xufSwgXCJpbml0R3JhcGhpY3NcIik7XG5mdW5jdGlvbiBEKG4sIHQpIHtcbiAgbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlID0gaih0aGlzKSwgbCA9IGUudGV4dCgpLnNwbGl0KC8oXFxzK3w8YnI+KS8pLnJldmVyc2UoKSwgaSwgZCA9IFtdLCBoID0gMS4xLCBmID0gZS5hdHRyKFwieVwiKSwgbSA9IHBhcnNlRmxvYXQoZS5hdHRyKFwiZHlcIikpLCBwID0gZS50ZXh0KG51bGwpLmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIGYpLmF0dHIoXCJkeVwiLCBtICsgXCJlbVwiKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGwubGVuZ3RoOyBrKyspXG4gICAgICBpID0gbFtsLmxlbmd0aCAtIDEgLSBrXSwgZC5wdXNoKGkpLCBwLnRleHQoZC5qb2luKFwiIFwiKS50cmltKCkpLCAocC5ub2RlKCkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkgPiB0IHx8IGkgPT09IFwiPGJyPlwiKSAmJiAoZC5wb3AoKSwgcC50ZXh0KGQuam9pbihcIiBcIikudHJpbSgpKSwgaSA9PT0gXCI8YnI+XCIgPyBkID0gW1wiXCJdIDogZCA9IFtpXSwgcCA9IGUuYXBwZW5kKFwidHNwYW5cIikuYXR0cihcInhcIiwgMCkuYXR0cihcInlcIiwgZikuYXR0cihcImR5XCIsIGggKyBcImVtXCIpLnRleHQoaSkpO1xuICB9KTtcbn1cbnMoRCwgXCJ3cmFwXCIpO1xudmFyIEZ0ID0gLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24obiwgdCwgZSwgbCkge1xuICBjb25zdCBpID0gZSAlIE50IC0gMSwgZCA9IG4uYXBwZW5kKFwiZ1wiKTtcbiAgdC5zZWN0aW9uID0gaSwgZC5hdHRyKFxuICAgIFwiY2xhc3NcIixcbiAgICAodC5jbGFzcyA/IHQuY2xhc3MgKyBcIiBcIiA6IFwiXCIpICsgXCJ0aW1lbGluZS1ub2RlIFwiICsgKFwic2VjdGlvbi1cIiArIGkpXG4gICk7XG4gIGNvbnN0IGggPSBkLmFwcGVuZChcImdcIiksIGYgPSBkLmFwcGVuZChcImdcIiksIHAgPSBmLmFwcGVuZChcInRleHRcIikudGV4dCh0LmRlc2NyKS5hdHRyKFwiZHlcIiwgXCIxZW1cIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS5hdHRyKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIikuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpLmNhbGwoRCwgdC53aWR0aCkubm9kZSgpLmdldEJCb3goKSwgayA9IGwuZm9udFNpemU/LnJlcGxhY2UgPyBsLmZvbnRTaXplLnJlcGxhY2UoXCJweFwiLCBcIlwiKSA6IGwuZm9udFNpemU7XG4gIHJldHVybiB0LmhlaWdodCA9IHAuaGVpZ2h0ICsgayAqIDEuMSAqIDAuNSArIHQucGFkZGluZywgdC5oZWlnaHQgPSBNYXRoLm1heCh0LmhlaWdodCwgdC5tYXhIZWlnaHQpLCB0LndpZHRoID0gdC53aWR0aCArIDIgKiB0LnBhZGRpbmcsIGYuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHQud2lkdGggLyAyICsgXCIsIFwiICsgdC5wYWRkaW5nIC8gMiArIFwiKVwiKSwgV3QoaCwgdCwgaSwgbCksIHQ7XG59LCBcImRyYXdOb2RlXCIpLCBWdCA9IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKG4sIHQsIGUpIHtcbiAgY29uc3QgbCA9IG4uYXBwZW5kKFwiZ1wiKSwgZCA9IGwuYXBwZW5kKFwidGV4dFwiKS50ZXh0KHQuZGVzY3IpLmF0dHIoXCJkeVwiLCBcIjFlbVwiKS5hdHRyKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpLmF0dHIoXCJkb21pbmFudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKS5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikuY2FsbChELCB0LndpZHRoKS5ub2RlKCkuZ2V0QkJveCgpLCBoID0gZS5mb250U2l6ZT8ucmVwbGFjZSA/IGUuZm9udFNpemUucmVwbGFjZShcInB4XCIsIFwiXCIpIDogZS5mb250U2l6ZTtcbiAgcmV0dXJuIGwucmVtb3ZlKCksIGQuaGVpZ2h0ICsgaCAqIDEuMSAqIDAuNSArIHQucGFkZGluZztcbn0sIFwiZ2V0VmlydHVhbE5vZGVIZWlnaHRcIiksIFd0ID0gLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24obiwgdCwgZSkge1xuICBuLmFwcGVuZChcInBhdGhcIikuYXR0cihcImlkXCIsIFwibm9kZS1cIiArIHQuaWQpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUtYmtnIG5vZGUtXCIgKyB0LnR5cGUpLmF0dHIoXG4gICAgXCJkXCIsXG4gICAgYE0wICR7dC5oZWlnaHQgLSA1fSB2JHstdC5oZWlnaHQgKyAxMH0gcTAsLTUgNSwtNSBoJHt0LndpZHRoIC0gMTB9IHE1LDAgNSw1IHYke3QuaGVpZ2h0IC0gNX0gSDAgWmBcbiAgKSwgbi5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUtbGluZS1cIiArIGUpLmF0dHIoXCJ4MVwiLCAwKS5hdHRyKFwieTFcIiwgdC5oZWlnaHQpLmF0dHIoXCJ4MlwiLCB0LndpZHRoKS5hdHRyKFwieTJcIiwgdC5oZWlnaHQpO1xufSwgXCJkZWZhdWx0QmtnXCIpLCBDID0ge1xuICBkcmF3UmVjdDogcSxcbiAgZHJhd0NpcmNsZTogJHQsXG4gIGRyYXdTZWN0aW9uOiBIdCxcbiAgZHJhd1RleHQ6IGZ0LFxuICBkcmF3TGFiZWw6IE10LFxuICBkcmF3VGFzazogUHQsXG4gIGRyYXdCYWNrZ3JvdW5kUmVjdDogQXQsXG4gIGdldFRleHRPYmo6IEN0LFxuICBnZXROb3RlUmVjdDogWSxcbiAgaW5pdEdyYXBoaWNzOiBSdCxcbiAgZHJhd05vZGU6IEZ0LFxuICBnZXRWaXJ0dWFsTm9kZUhlaWdodDogVnRcbn0sIHp0ID0gLyogQF9fUFVSRV9fICovIHMoZnVuY3Rpb24obiwgdCwgZSwgbCkge1xuICBjb25zdCBpID0geHQoKSwgZCA9IGkudGltZWxpbmU/LmxlZnRNYXJnaW4gPz8gNTA7XG4gIEUuZGVidWcoXCJ0aW1lbGluZVwiLCBsLmRiKTtcbiAgY29uc3QgaCA9IGkuc2VjdXJpdHlMZXZlbDtcbiAgbGV0IGY7XG4gIGggPT09IFwic2FuZGJveFwiICYmIChmID0gaihcIiNpXCIgKyB0KSk7XG4gIGNvbnN0IHAgPSAoaCA9PT0gXCJzYW5kYm94XCIgPyBqKGYubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBqKFwiYm9keVwiKSkuc2VsZWN0KFwiI1wiICsgdCk7XG4gIHAuYXBwZW5kKFwiZ1wiKTtcbiAgY29uc3QgayA9IGwuZGIuZ2V0VGFza3MoKSwgXyA9IGwuZGIuZ2V0Q29tbW9uRGIoKS5nZXREaWFncmFtVGl0bGUoKTtcbiAgRS5kZWJ1ZyhcInRhc2tcIiwgayksIEMuaW5pdEdyYXBoaWNzKHApO1xuICBjb25zdCB4ID0gbC5kYi5nZXRTZWN0aW9ucygpO1xuICBFLmRlYnVnKFwic2VjdGlvbnNcIiwgeCk7XG4gIGxldCByID0gMCwgYSA9IDAsIGMgPSAwLCB1ID0gMCwgeSA9IDUwICsgZCwgbyA9IDUwO1xuICB1ID0gNTA7XG4gIGxldCB3ID0gMCwgdiA9ICEwO1xuICB4LmZvckVhY2goZnVuY3Rpb24oSCkge1xuICAgIGNvbnN0IGcgPSB7XG4gICAgICBudW1iZXI6IHcsXG4gICAgICBkZXNjcjogSCxcbiAgICAgIHNlY3Rpb246IHcsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgcGFkZGluZzogMjAsXG4gICAgICBtYXhIZWlnaHQ6IHJcbiAgICB9LCBiID0gQy5nZXRWaXJ0dWFsTm9kZUhlaWdodChwLCBnLCBpKTtcbiAgICBFLmRlYnVnKFwic2VjdGlvbkhlaWdodCBiZWZvcmUgZHJhd1wiLCBiKSwgciA9IE1hdGgubWF4KHIsIGIgKyAyMCk7XG4gIH0pO1xuICBsZXQgTiA9IDAsIFAgPSAwO1xuICBFLmRlYnVnKFwidGFza3MubGVuZ3RoXCIsIGsubGVuZ3RoKTtcbiAgZm9yIChjb25zdCBbSCwgZ10gb2Ygay5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCBiID0ge1xuICAgICAgbnVtYmVyOiBILFxuICAgICAgZGVzY3I6IGcsXG4gICAgICBzZWN0aW9uOiBnLnNlY3Rpb24sXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgcGFkZGluZzogMjAsXG4gICAgICBtYXhIZWlnaHQ6IGFcbiAgICB9LCBMID0gQy5nZXRWaXJ0dWFsTm9kZUhlaWdodChwLCBiLCBpKTtcbiAgICBFLmRlYnVnKFwidGFza0hlaWdodCBiZWZvcmUgZHJhd1wiLCBMKSwgYSA9IE1hdGgubWF4KGEsIEwgKyAyMCksIE4gPSBNYXRoLm1heChOLCBnLmV2ZW50cy5sZW5ndGgpO1xuICAgIGxldCAkID0gMDtcbiAgICBmb3IgKGNvbnN0IHogb2YgZy5ldmVudHMpIHtcbiAgICAgIGNvbnN0IFogPSB7XG4gICAgICAgIGRlc2NyOiB6LFxuICAgICAgICBzZWN0aW9uOiBnLnNlY3Rpb24sXG4gICAgICAgIG51bWJlcjogZy5zZWN0aW9uLFxuICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICBwYWRkaW5nOiAyMCxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MFxuICAgICAgfTtcbiAgICAgICQgKz0gQy5nZXRWaXJ0dWFsTm9kZUhlaWdodChwLCBaLCBpKTtcbiAgICB9XG4gICAgZy5ldmVudHMubGVuZ3RoID4gMCAmJiAoJCArPSAoZy5ldmVudHMubGVuZ3RoIC0gMSkgKiAxMCksIFAgPSBNYXRoLm1heChQLCAkKTtcbiAgfVxuICBFLmRlYnVnKFwibWF4U2VjdGlvbkhlaWdodCBiZWZvcmUgZHJhd1wiLCByKSwgRS5kZWJ1ZyhcIm1heFRhc2tIZWlnaHQgYmVmb3JlIGRyYXdcIiwgYSksIHggJiYgeC5sZW5ndGggPiAwID8geC5mb3JFYWNoKChIKSA9PiB7XG4gICAgY29uc3QgZyA9IGsuZmlsdGVyKCh6KSA9PiB6LnNlY3Rpb24gPT09IEgpLCBiID0ge1xuICAgICAgbnVtYmVyOiB3LFxuICAgICAgZGVzY3I6IEgsXG4gICAgICBzZWN0aW9uOiB3LFxuICAgICAgd2lkdGg6IDIwMCAqIE1hdGgubWF4KGcubGVuZ3RoLCAxKSAtIDUwLFxuICAgICAgcGFkZGluZzogMjAsXG4gICAgICBtYXhIZWlnaHQ6IHJcbiAgICB9O1xuICAgIEUuZGVidWcoXCJzZWN0aW9uTm9kZVwiLCBiKTtcbiAgICBjb25zdCBMID0gcC5hcHBlbmQoXCJnXCIpLCAkID0gQy5kcmF3Tm9kZShMLCBiLCB3LCBpKTtcbiAgICBFLmRlYnVnKFwic2VjdGlvbk5vZGUgb3V0cHV0XCIsICQpLCBMLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3l9LCAke3V9KWApLCBvICs9IHIgKyA1MCwgZy5sZW5ndGggPiAwICYmIHN0KFxuICAgICAgcCxcbiAgICAgIGcsXG4gICAgICB3LFxuICAgICAgeSxcbiAgICAgIG8sXG4gICAgICBhLFxuICAgICAgaSxcbiAgICAgIE4sXG4gICAgICBQLFxuICAgICAgcixcbiAgICAgICExXG4gICAgKSwgeSArPSAyMDAgKiBNYXRoLm1heChnLmxlbmd0aCwgMSksIG8gPSB1LCB3Kys7XG4gIH0pIDogKHYgPSAhMSwgc3QoXG4gICAgcCxcbiAgICBrLFxuICAgIHcsXG4gICAgeSxcbiAgICBvLFxuICAgIGEsXG4gICAgaSxcbiAgICBOLFxuICAgIFAsXG4gICAgcixcbiAgICAhMFxuICApKTtcbiAgY29uc3QgVyA9IHAubm9kZSgpLmdldEJCb3goKTtcbiAgRS5kZWJ1ZyhcImJvdW5kc1wiLCBXKSwgXyAmJiBwLmFwcGVuZChcInRleHRcIikudGV4dChfKS5hdHRyKFwieFwiLCBXLndpZHRoIC8gMiAtIGQpLmF0dHIoXCJmb250LXNpemVcIiwgXCI0ZXhcIikuYXR0cihcImZvbnQtd2VpZ2h0XCIsIFwiYm9sZFwiKS5hdHRyKFwieVwiLCAyMCksIGMgPSB2ID8gciArIGEgKyAxNTAgOiBhICsgMTAwLCBwLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibGluZVdyYXBwZXJcIikuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgZCkuYXR0cihcInkxXCIsIGMpLmF0dHIoXCJ4MlwiLCBXLndpZHRoICsgMyAqIGQpLmF0dHIoXCJ5MlwiLCBjKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDQpLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKS5hdHRyKFwibWFya2VyLWVuZFwiLCBcInVybCgjYXJyb3doZWFkKVwiKSwga3QoXG4gICAgdm9pZCAwLFxuICAgIHAsXG4gICAgaS50aW1lbGluZT8ucGFkZGluZyA/PyA1MCxcbiAgICBpLnRpbWVsaW5lPy51c2VNYXhXaWR0aCA/PyAhMVxuICApO1xufSwgXCJkcmF3XCIpLCBzdCA9IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKG4sIHQsIGUsIGwsIGksIGQsIGgsIGYsIG0sIHAsIGspIHtcbiAgZm9yIChjb25zdCBfIG9mIHQpIHtcbiAgICBjb25zdCB4ID0ge1xuICAgICAgZGVzY3I6IF8udGFzayxcbiAgICAgIHNlY3Rpb246IGUsXG4gICAgICBudW1iZXI6IGUsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgcGFkZGluZzogMjAsXG4gICAgICBtYXhIZWlnaHQ6IGRcbiAgICB9O1xuICAgIEUuZGVidWcoXCJ0YXNrTm9kZVwiLCB4KTtcbiAgICBjb25zdCByID0gbi5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRhc2tXcmFwcGVyXCIpLCBjID0gQy5kcmF3Tm9kZShyLCB4LCBlLCBoKS5oZWlnaHQ7XG4gICAgaWYgKEUuZGVidWcoXCJ0YXNrSGVpZ2h0IGFmdGVyIGRyYXdcIiwgYyksIHIuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bH0sICR7aX0pYCksIGQgPSBNYXRoLm1heChkLCBjKSwgXy5ldmVudHMpIHtcbiAgICAgIGNvbnN0IHUgPSBuLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibGluZVdyYXBwZXJcIik7XG4gICAgICBsZXQgeSA9IGQ7XG4gICAgICBpICs9IDEwMCwgeSA9IHkgKyBCdChuLCBfLmV2ZW50cywgZSwgbCwgaSwgaCksIGkgLT0gMTAwLCB1LmFwcGVuZChcImxpbmVcIikuYXR0cihcIngxXCIsIGwgKyAxOTAgLyAyKS5hdHRyKFwieTFcIiwgaSArIGQpLmF0dHIoXCJ4MlwiLCBsICsgMTkwIC8gMikuYXR0cihcInkyXCIsIGkgKyBkICsgMTAwICsgbSArIDEwMCkuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKS5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIikuYXR0cihcIm1hcmtlci1lbmRcIiwgXCJ1cmwoI2Fycm93aGVhZClcIikuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI1LDVcIik7XG4gICAgfVxuICAgIGwgPSBsICsgMjAwLCBrICYmICFoLnRpbWVsaW5lPy5kaXNhYmxlTXVsdGljb2xvciAmJiBlKys7XG4gIH1cbiAgaSA9IGkgLSAxMDtcbn0sIFwiZHJhd1Rhc2tzXCIpLCBCdCA9IC8qIEBfX1BVUkVfXyAqLyBzKGZ1bmN0aW9uKG4sIHQsIGUsIGwsIGksIGQpIHtcbiAgbGV0IGggPSAwO1xuICBjb25zdCBmID0gaTtcbiAgaSA9IGkgKyAxMDA7XG4gIGZvciAoY29uc3QgbSBvZiB0KSB7XG4gICAgY29uc3QgcCA9IHtcbiAgICAgIGRlc2NyOiBtLFxuICAgICAgc2VjdGlvbjogZSxcbiAgICAgIG51bWJlcjogZSxcbiAgICAgIHdpZHRoOiAxNTAsXG4gICAgICBwYWRkaW5nOiAyMCxcbiAgICAgIG1heEhlaWdodDogNTBcbiAgICB9O1xuICAgIEUuZGVidWcoXCJldmVudE5vZGVcIiwgcCk7XG4gICAgY29uc3QgayA9IG4uYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJldmVudFdyYXBwZXJcIiksIHggPSBDLmRyYXdOb2RlKGssIHAsIGUsIGQpLmhlaWdodDtcbiAgICBoID0gaCArIHgsIGsuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bH0sICR7aX0pYCksIGkgPSBpICsgMTAgKyB4O1xuICB9XG4gIHJldHVybiBpID0gZiwgaDtcbn0sIFwiZHJhd0V2ZW50c1wiKSwgT3QgPSB7XG4gIHNldENvbmY6IC8qIEBfX1BVUkVfXyAqLyBzKCgpID0+IHtcbiAgfSwgXCJzZXRDb25mXCIpLFxuICBkcmF3OiB6dFxufSwganQgPSAvKiBAX19QVVJFX18gKi8gcygobikgPT4ge1xuICBsZXQgdCA9IFwiXCI7XG4gIGZvciAobGV0IGUgPSAwOyBlIDwgbi5USEVNRV9DT0xPUl9MSU1JVDsgZSsrKVxuICAgIG5bXCJsaW5lQ29sb3JcIiArIGVdID0gbltcImxpbmVDb2xvclwiICsgZV0gfHwgbltcImNTY2FsZUludlwiICsgZV0sIHZ0KG5bXCJsaW5lQ29sb3JcIiArIGVdKSA/IG5bXCJsaW5lQ29sb3JcIiArIGVdID0gX3QobltcImxpbmVDb2xvclwiICsgZV0sIDIwKSA6IG5bXCJsaW5lQ29sb3JcIiArIGVdID0gYnQobltcImxpbmVDb2xvclwiICsgZV0sIDIwKTtcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBuLlRIRU1FX0NPTE9SX0xJTUlUOyBlKyspIHtcbiAgICBjb25zdCBsID0gXCJcIiArICgxNyAtIDMgKiBlKTtcbiAgICB0ICs9IGBcbiAgICAuc2VjdGlvbi0ke2UgLSAxfSByZWN0LCAuc2VjdGlvbi0ke2UgLSAxfSBwYXRoLCAuc2VjdGlvbi0ke2UgLSAxfSBjaXJjbGUsIC5zZWN0aW9uLSR7ZSAtIDF9IHBhdGggIHtcbiAgICAgIGZpbGw6ICR7bltcImNTY2FsZVwiICsgZV19O1xuICAgIH1cbiAgICAuc2VjdGlvbi0ke2UgLSAxfSB0ZXh0IHtcbiAgICAgZmlsbDogJHtuW1wiY1NjYWxlTGFiZWxcIiArIGVdfTtcbiAgICB9XG4gICAgLm5vZGUtaWNvbi0ke2UgLSAxfSB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBjb2xvcjogJHtuW1wiY1NjYWxlTGFiZWxcIiArIGVdfTtcbiAgICB9XG4gICAgLnNlY3Rpb24tZWRnZS0ke2UgLSAxfXtcbiAgICAgIHN0cm9rZTogJHtuW1wiY1NjYWxlXCIgKyBlXX07XG4gICAgfVxuICAgIC5lZGdlLWRlcHRoLSR7ZSAtIDF9e1xuICAgICAgc3Ryb2tlLXdpZHRoOiAke2x9O1xuICAgIH1cbiAgICAuc2VjdGlvbi0ke2UgLSAxfSBsaW5lIHtcbiAgICAgIHN0cm9rZTogJHtuW1wiY1NjYWxlSW52XCIgKyBlXX0gO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgIH1cblxuICAgIC5saW5lV3JhcHBlciBsaW5le1xuICAgICAgc3Ryb2tlOiAke25bXCJjU2NhbGVMYWJlbFwiICsgZV19IDtcbiAgICB9XG5cbiAgICAuZGlzYWJsZWQsIC5kaXNhYmxlZCBjaXJjbGUsIC5kaXNhYmxlZCB0ZXh0IHtcbiAgICAgIGZpbGw6IGxpZ2h0Z3JheTtcbiAgICB9XG4gICAgLmRpc2FibGVkIHRleHQge1xuICAgICAgZmlsbDogI2VmZWZlZjtcbiAgICB9XG4gICAgYDtcbiAgfVxuICByZXR1cm4gdDtcbn0sIFwiZ2VuU2VjdGlvbnNcIiksIEd0ID0gLyogQF9fUFVSRV9fICovIHMoKG4pID0+IGBcbiAgLmVkZ2Uge1xuICAgIHN0cm9rZS13aWR0aDogMztcbiAgfVxuICAke2p0KG4pfVxuICAuc2VjdGlvbi1yb290IHJlY3QsIC5zZWN0aW9uLXJvb3QgcGF0aCwgLnNlY3Rpb24tcm9vdCBjaXJjbGUgIHtcbiAgICBmaWxsOiAke24uZ2l0MH07XG4gIH1cbiAgLnNlY3Rpb24tcm9vdCB0ZXh0IHtcbiAgICBmaWxsOiAke24uZ2l0QnJhbmNoTGFiZWwwfTtcbiAgfVxuICAuaWNvbi1jb250YWluZXIge1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZWRnZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuICAuZXZlbnRXcmFwcGVyICB7XG4gICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG4gIH1cbmAsIFwiZ2V0U3R5bGVzXCIpLCBxdCA9IEd0LCBKdCA9IHtcbiAgZGI6IGF0LFxuICByZW5kZXJlcjogT3QsXG4gIHBhcnNlcjogVHQsXG4gIHN0eWxlczogcXRcbn07XG5leHBvcnQge1xuICBKdCBhcyBkaWFncmFtXG59O1xuIl0sIm5hbWVzIjpbInMiLCJwIiwiSCIsImV0Iiwid3QiLCJTdCIsIkV0IiwibnQiLCJqIiwieHQiLCJFIiwia3QiLCJ2dCIsIl90IiwiYnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsSUFBSSxLQUFLLFdBQVc7QUFDbEIsTUFBSSxJQUFvQkEsa0JBQUUsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzdDLFNBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLFFBQVEsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRztBQUNsRCxXQUFPO0FBQUEsRUFDVCxHQUFHLEdBQUcsR0FBRyxJQUFJLENB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QUs7QUFDSCxZQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDO0FBQ3BEO0FBQUEsUUFDRixLQUFLO0FBQ0gsWUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7QUFDcEM7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0FBQ3hDO0FBQUEsTUFDVjtBQUFBLElBQ0ksR0FBRyxXQUFXO0FBQUEsSUFDZCxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFF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SUFBSSxFQUFFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLEdBQUdZLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUlDLEVBQUcsRUFBRSxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsSUFBSUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxHQUFHLEVBQUU7QUFDMUwsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLG1CQUFtQixLQUFLO0FBQzVDLFVBQU0sSUFBSSxNQUFNLEtBQUssSUFBSTtBQUN6QixTQUFLO0FBQUEsZUFDTSxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLHFCQUFxQixJQUFJLENBQUM7QUFBQSxjQUNoRixFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQUE7QUFBQSxlQUVkLElBQUksQ0FBQztBQUFBLGFBQ1AsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQUE7QUFBQSxpQkFFaEIsSUFBSSxDQUFDO0FBQUE7QUFBQSxlQUVQLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUFBO0FBQUEsb0JBRWYsSUFBSSxDQUFDO0FBQUEsZ0JBQ1QsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUFBO0FBQUEsa0JBRWIsSUFBSSxDQUFDO0FBQUEsc0JBQ0QsQ0FBQztBQUFBO0FBQUEsZUFFUixJQUFJLENBQUM7QUFBQSxnQkFDSixFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFLbEIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVbEM7QUFDQSxTQUFPO0FBQ1QsR0FBRyxhQUFhLEdBQUcsS0FBcUJkLGtCQUFFLENBQUMsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSTdDLEdBQUcsQ0FBQyxDQUFDO0FBQUE7QUFBQSxZQUVHLEVBQUUsSUFBSTtBQUFBO0FBQUE7QUFBQSxZQUdOLEVBQUUsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FjMUIsV0FBVyxHQUFHLEtBQUssSUFBSSxLQUFLO0FBQUEsRUFDN0IsSUFBSTtBQUFBLEVBQ0osVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUNWOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
