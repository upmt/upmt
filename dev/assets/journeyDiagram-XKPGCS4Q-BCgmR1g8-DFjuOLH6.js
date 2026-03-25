import { d, y, g, x } from "./chunk-TZMSLE5B-Bwm20wza-Cm5tKvA6.js";
import { l } from "./chunk-FMBD7UC4-BkffimdD-BUB3gJ0z.js";
import { p, d as $y, a as My, e as Ly, g as Ay, s as Fy, r as Ey, f as ft, h as ht$1, i as Gh, y as By } from "./SynchronicGraphPage-NnXn-TVN.js";
import { h as hn } from "./arc-C3YlCEKt-Dyaqd3mQ.js";
import "./QPage-CAeF_3Wn.js";
import "./index-DVZ4WvV-.js";
import "./QBtnToggle-DHBYQc1X.js";
import "./QBtnGroup-DAk8eclO.js";
import "./QToolbar-KcrVZvUz.js";
import "./export-file-lpTZqdHO.js";
var U = (function() {
  var t = /* @__PURE__ */ p(function(h, i, a, l2) {
    for (a = a || {}, l2 = h.length; l2--; a[h[l2]] = i) ;
    return a;
  }, "o"), e = [6, 8, 10, 11, 12, 14, 16, 17, 18], s = [1, 9], c = [1, 10], r = [1, 11], f = [1, 12], u = [1, 13], y2 = [1, 14], g2 = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, journey: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, title: 11, acc_title: 12, acc_title_value: 13, acc_descr: 14, acc_descr_value: 15, acc_descr_multiline_value: 16, section: 17, taskName: 18, taskData: 19, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "journey", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 11: "title", 12: "acc_title", 13: "acc_title_value", 14: "acc_descr", 15: "acc_descr_value", 16: "acc_descr_multiline_value", 17: "section", 18: "taskName", 19: "taskData" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]],
    performAction: /* @__PURE__ */ p(function(i, a, l2, d2, p2, o, b) {
      var k = o.length - 1;
      switch (p2) {
        case 1:
          return o[k - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          o[k - 1].push(o[k]), this.$ = o[k - 1];
          break;
        case 4:
        case 5:
          this.$ = o[k];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          d2.setDiagramTitle(o[k].substr(6)), this.$ = o[k].substr(6);
          break;
        case 9:
          this.$ = o[k].trim(), d2.setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = o[k].trim(), d2.setAccDescription(this.$);
          break;
        case 12:
          d2.addSection(o[k].substr(8)), this.$ = o[k].substr(8);
          break;
        case 13:
          d2.addTask(o[k - 1], o[k]), this.$ = "task";
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: s, 12: c, 14: r, 16: f, 17: u, 18: y2 }, t(e, [2, 7], { 1: [2, 1] }), t(e, [2, 3]), { 9: 15, 11: s, 12: c, 14: r, 16: f, 17: u, 18: y2 }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 8]), { 13: [1, 16] }, { 15: [1, 17] }, t(e, [2, 11]), t(e, [2, 12]), { 19: [1, 18] }, t(e, [2, 4]), t(e, [2, 9]), t(e, [2, 10]), t(e, [2, 13])],
    defaultActions: {},
    parseError: /* @__PURE__ */ p(function(i, a) {
      if (a.recoverable)
        this.trace(i);
      else {
        var l2 = new Error(i);
        throw l2.hash = a, l2;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(i) {
      var a = this, l2 = [0], d2 = [], p$1 = [null], o = [], b = this.table, k = "", C = 0, K = 0, dt = 2, Q = 1, yt = o.slice.call(arguments, 1), _ = Object.create(this.lexer), I = { yy: {} };
      for (var O in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, O) && (I.yy[O] = this.yy[O]);
      _.setInput(i, I.yy), I.yy.lexer = _, I.yy.parser = this, typeof _.yylloc > "u" && (_.yylloc = {});
      var Y = _.yylloc;
      o.push(Y);
      var ft2 = _.options && _.options.ranges;
      typeof I.yy.parseError == "function" ? this.parseError = I.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function pt(w) {
        l2.length = l2.length - 2 * w, p$1.length = p$1.length - w, o.length = o.length - w;
      }
      p(pt, "popStack");
      function D() {
        var w;
        return w = d2.pop() || _.lex() || Q, typeof w != "number" && (w instanceof Array && (d2 = w, w = d2.pop()), w = a.symbols_[w] || w), w;
      }
      p(D, "lex");
      for (var v, A, T, q, F = {}, N, M, tt, z; ; ) {
        if (A = l2[l2.length - 1], this.defaultActions[A] ? T = this.defaultActions[A] : ((v === null || typeof v > "u") && (v = D()), T = b[A] && b[A][v]), typeof T > "u" || !T.length || !T[0]) {
          var H = "";
          z = [];
          for (N in b[A])
            this.terminals_[N] && N > dt && z.push("'" + this.terminals_[N] + "'");
          _.showPosition ? H = "Parse error on line " + (C + 1) + `:
` + _.showPosition() + `
Expecting ` + z.join(", ") + ", got '" + (this.terminals_[v] || v) + "'" : H = "Parse error on line " + (C + 1) + ": Unexpected " + (v == Q ? "end of input" : "'" + (this.terminals_[v] || v) + "'"), this.parseError(H, {
            text: _.match,
            token: this.terminals_[v] || v,
            line: _.yylineno,
            loc: Y,
            expected: z
          });
        }
        if (T[0] instanceof Array && T.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + A + ", token: " + v);
        switch (T[0]) {
          case 1:
            l2.push(v), p$1.push(_.yytext), o.push(_.yylloc), l2.push(T[1]), v = null, K = _.yyleng, k = _.yytext, C = _.yylineno, Y = _.yylloc;
            break;
          case 2:
            if (M = this.productions_[T[1]][1], F.$ = p$1[p$1.length - M], F._$ = {
              first_line: o[o.length - (M || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (M || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, ft2 && (F._$.range = [
              o[o.length - (M || 1)].range[0],
              o[o.length - 1].range[1]
            ]), q = this.performAction.apply(F, [
              k,
              K,
              C,
              I.yy,
              T[1],
              p$1,
              o
            ].concat(yt)), typeof q < "u")
              return q;
            M && (l2 = l2.slice(0, -1 * M * 2), p$1 = p$1.slice(0, -1 * M), o = o.slice(0, -1 * M)), l2.push(this.productions_[T[1]][0]), p$1.push(F.$), o.push(F._$), tt = b[l2[l2.length - 2]][l2[l2.length - 1]], l2.push(tt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, m = /* @__PURE__ */ (function() {
    var h = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(a, l2) {
        if (this.yy.parser)
          this.yy.parser.parseError(a, l2);
        else
          throw new Error(a);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(i, a) {
        return this.yy = a || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
        var a = i.match(/(?:\r\n?|\n).*/g);
        return a ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(i) {
        var a = i.length, l2 = i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
        var d2 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), l2.length - 1 && (this.yylineno -= l2.length - 1);
        var p2 = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: l2 ? (l2.length === d2.length ? this.yylloc.first_column : 0) + d2[d2.length - l2.length].length - l2[0].length : this.yylloc.first_column - a
        }, this.options.ranges && (this.yylloc.range = [p2[0], p2[0] + this.yyleng - a]), this.yyleng = this.yytext.length, this;
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
        var i = this.pastInput(), a = new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + a + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(i, a) {
        var l2, d2, p2;
        if (this.options.backtrack_lexer && (p2 = {
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
        }, this.options.ranges && (p2.yylloc.range = this.yylloc.range.slice(0))), d2 = i[0].match(/(?:\r\n?|\n).*/g), d2 && (this.yylineno += d2.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: d2 ? d2[d2.length - 1].length - d2[d2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(i[0].length), this.matched += i[0], l2 = this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), l2)
          return l2;
        if (this._backtrack) {
          for (var o in p2)
            this[o] = p2[o];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var i, a, l2, d2;
        this._more || (this.yytext = "", this.match = "");
        for (var p2 = this._currentRules(), o = 0; o < p2.length; o++)
          if (l2 = this._input.match(this.rules[p2[o]]), l2 && (!a || l2[0].length > a[0].length)) {
            if (a = l2, d2 = o, this.options.backtrack_lexer) {
              if (i = this.test_match(l2, p2[o]), i !== false)
                return i;
              if (this._backtrack) {
                a = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return a ? (i = this.test_match(a, p2[d2]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
      performAction: /* @__PURE__ */ p(function(a, l2, d2, p2) {
        switch (d2) {
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
            return 18;
          case 16:
            return 19;
          case 17:
            return ":";
          case 18:
            return 6;
          case 19:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19], inclusive: true } }
    };
    return h;
  })();
  g2.lexer = m;
  function x2() {
    this.yy = {};
  }
  return p(x2, "Parser"), x2.prototype = g2, g2.Parser = x2, new x2();
})();
U.parser = U;
var Et = U, V = "", Z = [], L = [], B = [], Ct = /* @__PURE__ */ p(function() {
  Z.length = 0, L.length = 0, V = "", B.length = 0, By();
}, "clear"), Pt = /* @__PURE__ */ p(function(t) {
  V = t, Z.push(t);
}, "addSection"), It = /* @__PURE__ */ p(function() {
  return Z;
}, "getSections"), At = /* @__PURE__ */ p(function() {
  let t = it();
  const e = 100;
  let s = 0;
  for (; !t && s < e; )
    t = it(), s++;
  return L.push(...B), L;
}, "getTasks"), Ft = /* @__PURE__ */ p(function() {
  const t = [];
  return L.forEach((s) => {
    s.people && t.push(...s.people);
  }), [...new Set(t)].sort();
}, "updateActors"), Vt = /* @__PURE__ */ p(function(t, e) {
  const s = e.substr(1).split(":");
  let c = 0, r = [];
  s.length === 1 ? (c = Number(s[0]), r = []) : (c = Number(s[0]), r = s[1].split(","));
  const f = r.map((y2) => y2.trim()), u = {
    section: V,
    type: V,
    people: f,
    task: t,
    score: c
  };
  B.push(u);
}, "addTask"), Rt = /* @__PURE__ */ p(function(t) {
  const e = {
    section: V,
    type: V,
    description: t,
    task: t,
    classes: []
  };
  L.push(e);
}, "addTaskOrg"), it = /* @__PURE__ */ p(function() {
  const t = /* @__PURE__ */ p(function(s) {
    return B[s].processed;
  }, "compileTask");
  let e = true;
  for (const [s, c] of B.entries())
    t(s), e = e && c.processed;
  return e;
}, "compileTasks"), Lt = /* @__PURE__ */ p(function() {
  return Ft();
}, "getActors"), rt = {
  getConfig: /* @__PURE__ */ p(() => ft().journey, "getConfig"),
  clear: Ct,
  setDiagramTitle: Ey,
  getDiagramTitle: Fy,
  setAccTitle: Ay,
  getAccTitle: Ly,
  setAccDescription: My,
  getAccDescription: $y,
  addSection: Pt,
  getSections: It,
  getTasks: At,
  addTask: Vt,
  addTaskOrg: Rt,
  getActors: Lt
}, Bt = /* @__PURE__ */ p((t) => `.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};
  }

  .actor-0 {
    ${t.actor0 ? `fill: ${t.actor0}` : ""};
  }
  .actor-1 {
    ${t.actor1 ? `fill: ${t.actor1}` : ""};
  }
  .actor-2 {
    ${t.actor2 ? `fill: ${t.actor2}` : ""};
  }
  .actor-3 {
    ${t.actor3 ? `fill: ${t.actor3}` : ""};
  }
  .actor-4 {
    ${t.actor4 ? `fill: ${t.actor4}` : ""};
  }
  .actor-5 {
    ${t.actor5 ? `fill: ${t.actor5}` : ""};
  }
  ${l()}
`, "getStyles"), jt = Bt, J = /* @__PURE__ */ p(function(t, e) {
  return x(t, e);
}, "drawRect"), Nt = /* @__PURE__ */ p(function(t, e) {
  const c = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), r = t.append("g");
  r.append("circle").attr("cx", e.cx - 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), r.append("circle").attr("cx", e.cx + 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function f(g2) {
    const m = hn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    g2.append("path").attr("class", "mouth").attr("d", m).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
  }
  p(f, "smile");
  function u(g2) {
    const m = hn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    g2.append("path").attr("class", "mouth").attr("d", m).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
  }
  p(u, "sad");
  function y2(g2) {
    g2.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return p(y2, "ambivalent"), e.score > 3 ? f(r) : e.score < 3 ? u(r) : y2(r), c;
}, "drawFace"), ot = /* @__PURE__ */ p(function(t, e) {
  const s = t.append("circle");
  return s.attr("cx", e.cx), s.attr("cy", e.cy), s.attr("class", "actor-" + e.pos), s.attr("fill", e.fill), s.attr("stroke", e.stroke), s.attr("r", e.r), s.class !== void 0 && s.attr("class", s.class), e.title !== void 0 && s.append("title").text(e.title), s;
}, "drawCircle"), ct = /* @__PURE__ */ p(function(t, e) {
  return g(t, e);
}, "drawText"), zt = /* @__PURE__ */ p(function(t, e) {
  function s(r, f, u, y2, g2) {
    return r + "," + f + " " + (r + u) + "," + f + " " + (r + u) + "," + (f + y2 - g2) + " " + (r + u - g2 * 1.2) + "," + (f + y2) + " " + r + "," + (f + y2);
  }
  p(s, "genPoints");
  const c = t.append("polygon");
  c.attr("points", s(e.x, e.y, 50, 20, 7)), c.attr("class", "labelBox"), e.y = e.y + e.labelMargin, e.x = e.x + 0.5 * e.labelMargin, ct(t, e);
}, "drawLabel"), Wt = /* @__PURE__ */ p(function(t, e, s) {
  const c = t.append("g"), r = y();
  r.x = e.x, r.y = e.y, r.fill = e.fill, r.width = s.width * e.taskCount + // width of the tasks
  s.diagramMarginX * (e.taskCount - 1), r.height = s.height, r.class = "journey-section section-type-" + e.num, r.rx = 3, r.ry = 3, J(c, r), ht(s)(
    e.text,
    c,
    r.x,
    r.y,
    r.width,
    r.height,
    { class: "journey-section section-type-" + e.num },
    s,
    e.colour
  );
}, "drawSection"), nt = -1, Ot = /* @__PURE__ */ p(function(t, e, s) {
  const c = e.x + s.width / 2, r = t.append("g");
  nt++, r.append("line").attr("id", "task" + nt).attr("x1", c).attr("y1", e.y).attr("x2", c).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Nt(r, {
    cx: c,
    cy: 300 + (5 - e.score) * 30,
    score: e.score
  });
  const u = y();
  u.x = e.x, u.y = e.y, u.fill = e.fill, u.width = s.width, u.height = s.height, u.class = "task task-type-" + e.num, u.rx = 3, u.ry = 3, J(r, u);
  let y$1 = e.x + 14;
  e.people.forEach((g2) => {
    const m = e.actors[g2].color, x2 = {
      cx: y$1,
      cy: e.y,
      r: 7,
      fill: m,
      stroke: "#000",
      title: g2,
      pos: e.actors[g2].position
    };
    ot(r, x2), y$1 += 10;
  }), ht(s)(
    e.task,
    r,
    u.x,
    u.y,
    u.width,
    u.height,
    { class: "task" },
    s,
    e.colour
  );
}, "drawTask"), Yt = /* @__PURE__ */ p(function(t, e) {
  d(t, e);
}, "drawBackgroundRect"), ht = /* @__PURE__ */ (function() {
  function t(r, f, u, y2, g2, m, x2, h) {
    const i = f.append("text").attr("x", u + g2 / 2).attr("y", y2 + m / 2 + 5).style("font-color", h).style("text-anchor", "middle").text(r);
    c(i, x2);
  }
  p(t, "byText");
  function e(r, f, u, y2, g2, m, x2, h, i) {
    const { taskFontSize: a, taskFontFamily: l2 } = h, d2 = r.split(/<br\s*\/?>/gi);
    for (let p2 = 0; p2 < d2.length; p2++) {
      const o = p2 * a - a * (d2.length - 1) / 2, b = f.append("text").attr("x", u + g2 / 2).attr("y", y2).attr("fill", i).style("text-anchor", "middle").style("font-size", a).style("font-family", l2);
      b.append("tspan").attr("x", u + g2 / 2).attr("dy", o).text(d2[p2]), b.attr("y", y2 + m / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), c(b, x2);
    }
  }
  p(e, "byTspan");
  function s(r, f, u, y2, g2, m, x2, h) {
    const i = f.append("switch"), l2 = i.append("foreignObject").attr("x", u).attr("y", y2).attr("width", g2).attr("height", m).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    l2.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(r), e(r, i, u, y2, g2, m, x2, h), c(l2, x2);
  }
  p(s, "byFo");
  function c(r, f) {
    for (const u in f)
      u in f && r.attr(u, f[u]);
  }
  return p(c, "_setTextAttrs"), function(r) {
    return r.textPlacement === "fo" ? s : r.textPlacement === "old" ? t : e;
  };
})(), qt = /* @__PURE__ */ p(function(t) {
  t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics"), j = {
  drawRect: J,
  drawCircle: ot,
  drawSection: Wt,
  drawText: ct,
  drawLabel: zt,
  drawTask: Ot,
  drawBackgroundRect: Yt,
  initGraphics: qt
}, Ht = /* @__PURE__ */ p(function(t) {
  Object.keys(t).forEach(function(s) {
    $[s] = t[s];
  });
}, "setConf"), E = {}, W = 0;
function ut(t) {
  const e = ft().journey, s = e.maxLabelWidth;
  W = 0;
  let c = 60;
  Object.keys(E).forEach((r) => {
    const f = E[r].color, u = {
      cx: 20,
      cy: c,
      r: 7,
      fill: f,
      stroke: "#000",
      pos: E[r].position
    };
    j.drawCircle(t, u);
    let y2 = t.append("text").attr("visibility", "hidden").text(r);
    const g2 = y2.node().getBoundingClientRect().width;
    y2.remove();
    let m = [];
    if (g2 <= s)
      m = [r];
    else {
      const x2 = r.split(" ");
      let h = "";
      y2 = t.append("text").attr("visibility", "hidden"), x2.forEach((i) => {
        const a = h ? `${h} ${i}` : i;
        if (y2.text(a), y2.node().getBoundingClientRect().width > s) {
          if (h && m.push(h), h = i, y2.text(i), y2.node().getBoundingClientRect().width > s) {
            let d2 = "";
            for (const p2 of i)
              d2 += p2, y2.text(d2 + "-"), y2.node().getBoundingClientRect().width > s && (m.push(d2.slice(0, -1) + "-"), d2 = p2);
            h = d2;
          }
        } else
          h = a;
      }), h && m.push(h), y2.remove();
    }
    m.forEach((x2, h) => {
      const i = {
        x: 40,
        y: c + 7 + h * 20,
        fill: "#666",
        text: x2,
        textMargin: e.boxTextMargin ?? 5
      }, l2 = j.drawText(t, i).node().getBoundingClientRect().width;
      l2 > W && l2 > e.leftMargin - l2 && (W = l2);
    }), c += Math.max(20, m.length * 20);
  });
}
p(ut, "drawActorLegend");
var $ = ft().journey, P = 0, Xt = /* @__PURE__ */ p(function(t, e, s, c) {
  const r = ft(), f = r.journey.titleColor, u = r.journey.titleFontSize, y2 = r.journey.titleFontFamily, g2 = r.securityLevel;
  let m;
  g2 === "sandbox" && (m = ht$1("#i" + e));
  const x2 = g2 === "sandbox" ? ht$1(m.nodes()[0].contentDocument.body) : ht$1("body");
  S.init();
  const h = x2.select("#" + e);
  j.initGraphics(h);
  const i = c.db.getTasks(), a = c.db.getDiagramTitle(), l2 = c.db.getActors();
  for (const C in E)
    delete E[C];
  let d2 = 0;
  l2.forEach((C) => {
    E[C] = {
      color: $.actorColours[d2 % $.actorColours.length],
      position: d2
    }, d2++;
  }), ut(h), P = $.leftMargin + W, S.insert(0, 0, P, Object.keys(E).length * 50), Gt(h, i, 0);
  const p2 = S.getBounds();
  a && h.append("text").text(a).attr("x", P).attr("font-size", u).attr("font-weight", "bold").attr("y", 25).attr("fill", f).attr("font-family", y2);
  const o = p2.stopy - p2.starty + 2 * $.diagramMarginY, b = P + p2.stopx + 2 * $.diagramMarginX;
  Gh(h, o, b, $.useMaxWidth), h.append("line").attr("x1", P).attr("y1", $.height * 4).attr("x2", b - P - 4).attr("y2", $.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
  const k = a ? 70 : 0;
  h.attr("viewBox", `${p2.startx} -25 ${b} ${o + k}`), h.attr("preserveAspectRatio", "xMinYMin meet"), h.attr("height", o + k + 25);
}, "draw"), S = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  init: /* @__PURE__ */ p(function() {
    this.sequenceItems = [], this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    }, this.verticalPos = 0;
  }, "init"),
  updateVal: /* @__PURE__ */ p(function(t, e, s, c) {
    t[e] === void 0 ? t[e] = s : t[e] = c(s, t[e]);
  }, "updateVal"),
  updateBounds: /* @__PURE__ */ p(function(t, e, s, c) {
    const r = ft().journey, f = this;
    let u = 0;
    function y2(g2) {
      return /* @__PURE__ */ p(function(x2) {
        u++;
        const h = f.sequenceItems.length - u + 1;
        f.updateVal(x2, "starty", e - h * r.boxMargin, Math.min), f.updateVal(x2, "stopy", c + h * r.boxMargin, Math.max), f.updateVal(S.data, "startx", t - h * r.boxMargin, Math.min), f.updateVal(S.data, "stopx", s + h * r.boxMargin, Math.max), g2 !== "activation" && (f.updateVal(x2, "startx", t - h * r.boxMargin, Math.min), f.updateVal(x2, "stopx", s + h * r.boxMargin, Math.max), f.updateVal(S.data, "starty", e - h * r.boxMargin, Math.min), f.updateVal(S.data, "stopy", c + h * r.boxMargin, Math.max));
      }, "updateItemBounds");
    }
    p(y2, "updateFn"), this.sequenceItems.forEach(y2());
  }, "updateBounds"),
  insert: /* @__PURE__ */ p(function(t, e, s, c) {
    const r = Math.min(t, s), f = Math.max(t, s), u = Math.min(e, c), y2 = Math.max(e, c);
    this.updateVal(S.data, "startx", r, Math.min), this.updateVal(S.data, "starty", u, Math.min), this.updateVal(S.data, "stopx", f, Math.max), this.updateVal(S.data, "stopy", y2, Math.max), this.updateBounds(r, u, f, y2);
  }, "insert"),
  bumpVerticalPos: /* @__PURE__ */ p(function(t) {
    this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
  }, "bumpVerticalPos"),
  getVerticalPos: /* @__PURE__ */ p(function() {
    return this.verticalPos;
  }, "getVerticalPos"),
  getBounds: /* @__PURE__ */ p(function() {
    return this.data;
  }, "getBounds")
}, G = $.sectionFills, st = $.sectionColours, Gt = /* @__PURE__ */ p(function(t, e, s) {
  const c = ft().journey;
  let r = "";
  const f = c.height * 2 + c.diagramMarginY, u = s + f;
  let y2 = 0, g2 = "#CCC", m = "black", x2 = 0;
  for (const [h, i] of e.entries()) {
    if (r !== i.section) {
      g2 = G[y2 % G.length], x2 = y2 % G.length, m = st[y2 % st.length];
      let l2 = 0;
      const d2 = i.section;
      for (let o = h; o < e.length && e[o].section == d2; o++)
        l2 = l2 + 1;
      const p2 = {
        x: h * c.taskMargin + h * c.width + P,
        y: 50,
        text: i.section,
        fill: g2,
        num: x2,
        colour: m,
        taskCount: l2
      };
      j.drawSection(t, p2, c), r = i.section, y2++;
    }
    const a = i.people.reduce((l2, d2) => (E[d2] && (l2[d2] = E[d2]), l2), {});
    i.x = h * c.taskMargin + h * c.width + P, i.y = u, i.width = c.diagramMarginX, i.height = c.diagramMarginY, i.colour = m, i.fill = g2, i.num = x2, i.actors = a, j.drawTask(t, i, c), S.insert(i.x, i.y, i.x + i.width + c.taskMargin, 450);
  }
}, "drawTasks"), at = {
  setConf: Ht,
  draw: Xt
}, Qt = {
  parser: Et,
  db: rt,
  renderer: at,
  styles: jt,
  init: /* @__PURE__ */ p((t) => {
    at.setConf(t.journey), rt.clear();
  }, "init")
};
export {
  Qt as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam91cm5leURpYWdyYW0tWEtQR0NTNFEtQkNnbVIxZzgtREZqdU9MSDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbWVybWFpZC1zdHJpbmcvZGlzdC9qb3VybmV5RGlhZ3JhbS1YS1BHQ1M0US1CQ2dtUjFnOC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhIGFzIGd0LCBnIGFzIGx0LCBmIGFzIG10LCBkIGFzIHh0IH0gZnJvbSBcIi4vY2h1bmstVFpNU0xFNUItQndtMjB3emEuanNcIjtcbmltcG9ydCB7IGcgYXMga3QgfSBmcm9tIFwiLi9jaHVuay1GTUJEN1VDNC1Ca2ZmaW1kRC5qc1wiO1xuaW1wb3J0IHsgXyBhcyBuLCBnIGFzIF90LCBzIGFzIHZ0LCBhIGFzIGJ0LCBiIGFzIHd0LCBxIGFzIFR0LCBwIGFzIFN0LCBjIGFzIFIsIGQgYXMgWCwgZSBhcyAkdCwgeSBhcyBNdCB9IGZyb20gXCIuL2VudHJ5LUIyVlgta3hhLmpzXCI7XG5pbXBvcnQgeyBkIGFzIGV0IH0gZnJvbSBcIi4vYXJjLUMzWWxDRUt0LmpzXCI7XG52YXIgVSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHQgPSAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbihoLCBpLCBhLCBsKSB7XG4gICAgZm9yIChhID0gYSB8fCB7fSwgbCA9IGgubGVuZ3RoOyBsLS07IGFbaFtsXV0gPSBpKSA7XG4gICAgcmV0dXJuIGE7XG4gIH0sIFwib1wiKSwgZSA9IFs2LCA4LCAxMCwgMTEsIDEyLCAxNCwgMTYsIDE3LCAxOF0sIHMgPSBbMSwgOV0sIGMgPSBbMSwgMTBdLCByID0gWzEsIDExXSwgZiA9IFsxLCAxMl0sIHUgPSBbMSwgMTNdLCB5ID0gWzEsIDE0XSwgZyA9IHtcbiAgICB0cmFjZTogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oKSB7XG4gICAgfSwgXCJ0cmFjZVwiKSxcbiAgICB5eToge30sXG4gICAgc3ltYm9sc186IHsgZXJyb3I6IDIsIHN0YXJ0OiAzLCBqb3VybmV5OiA0LCBkb2N1bWVudDogNSwgRU9GOiA2LCBsaW5lOiA3LCBTUEFDRTogOCwgc3RhdGVtZW50OiA5LCBORVdMSU5FOiAxMCwgdGl0bGU6IDExLCBhY2NfdGl0bGU6IDEyLCBhY2NfdGl0bGVfdmFsdWU6IDEzLCBhY2NfZGVzY3I6IDE0LCBhY2NfZGVzY3JfdmFsdWU6IDE1LCBhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlOiAxNiwgc2VjdGlvbjogMTcsIHRhc2tOYW1lOiAxOCwgdGFza0RhdGE6IDE5LCAkYWNjZXB0OiAwLCAkZW5kOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDQ6IFwiam91cm5leVwiLCA2OiBcIkVPRlwiLCA4OiBcIlNQQUNFXCIsIDEwOiBcIk5FV0xJTkVcIiwgMTE6IFwidGl0bGVcIiwgMTI6IFwiYWNjX3RpdGxlXCIsIDEzOiBcImFjY190aXRsZV92YWx1ZVwiLCAxNDogXCJhY2NfZGVzY3JcIiwgMTU6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDE2OiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMTc6IFwic2VjdGlvblwiLCAxODogXCJ0YXNrTmFtZVwiLCAxOTogXCJ0YXNrRGF0YVwiIH0sXG4gICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDNdLCBbNSwgMF0sIFs1LCAyXSwgWzcsIDJdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbOSwgMV0sIFs5LCAyXSwgWzksIDJdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDJdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbihpLCBhLCBsLCBkLCBwLCBvLCBiKSB7XG4gICAgICB2YXIgayA9IG8ubGVuZ3RoIC0gMTtcbiAgICAgIHN3aXRjaCAocCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIG9bayAtIDFdO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy4kID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBvW2sgLSAxXS5wdXNoKG9ba10pLCB0aGlzLiQgPSBvW2sgLSAxXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdGhpcy4kID0gb1trXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdGhpcy4kID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBkLnNldERpYWdyYW1UaXRsZShvW2tdLnN1YnN0cig2KSksIHRoaXMuJCA9IG9ba10uc3Vic3RyKDYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgdGhpcy4kID0gb1trXS50cmltKCksIGQuc2V0QWNjVGl0bGUodGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICB0aGlzLiQgPSBvW2tdLnRyaW0oKSwgZC5zZXRBY2NEZXNjcmlwdGlvbih0aGlzLiQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIGQuYWRkU2VjdGlvbihvW2tdLnN1YnN0cig4KSksIHRoaXMuJCA9IG9ba10uc3Vic3RyKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIGQuYWRkVGFzayhvW2sgLSAxXSwgb1trXSksIHRoaXMuJCA9IFwidGFza1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIFwiYW5vbnltb3VzXCIpLFxuICAgIHRhYmxlOiBbeyAzOiAxLCA0OiBbMSwgMl0gfSwgeyAxOiBbM10gfSwgdChlLCBbMiwgMl0sIHsgNTogMyB9KSwgeyA2OiBbMSwgNF0sIDc6IDUsIDg6IFsxLCA2XSwgOTogNywgMTA6IFsxLCA4XSwgMTE6IHMsIDEyOiBjLCAxNDogciwgMTY6IGYsIDE3OiB1LCAxODogeSB9LCB0KGUsIFsyLCA3XSwgeyAxOiBbMiwgMV0gfSksIHQoZSwgWzIsIDNdKSwgeyA5OiAxNSwgMTE6IHMsIDEyOiBjLCAxNDogciwgMTY6IGYsIDE3OiB1LCAxODogeSB9LCB0KGUsIFsyLCA1XSksIHQoZSwgWzIsIDZdKSwgdChlLCBbMiwgOF0pLCB7IDEzOiBbMSwgMTZdIH0sIHsgMTU6IFsxLCAxN10gfSwgdChlLCBbMiwgMTFdKSwgdChlLCBbMiwgMTJdKSwgeyAxOTogWzEsIDE4XSB9LCB0KGUsIFsyLCA0XSksIHQoZSwgWzIsIDldKSwgdChlLCBbMiwgMTBdKSwgdChlLCBbMiwgMTNdKV0sXG4gICAgZGVmYXVsdEFjdGlvbnM6IHt9LFxuICAgIHBhcnNlRXJyb3I6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKGksIGEpIHtcbiAgICAgIGlmIChhLnJlY292ZXJhYmxlKVxuICAgICAgICB0aGlzLnRyYWNlKGkpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBsID0gbmV3IEVycm9yKGkpO1xuICAgICAgICB0aHJvdyBsLmhhc2ggPSBhLCBsO1xuICAgICAgfVxuICAgIH0sIFwicGFyc2VFcnJvclwiKSxcbiAgICBwYXJzZTogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oaSkge1xuICAgICAgdmFyIGEgPSB0aGlzLCBsID0gWzBdLCBkID0gW10sIHAgPSBbbnVsbF0sIG8gPSBbXSwgYiA9IHRoaXMudGFibGUsIGsgPSBcIlwiLCBDID0gMCwgSyA9IDAsIGR0ID0gMiwgUSA9IDEsIHl0ID0gby5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIF8gPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpLCBJID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIE8gaW4gdGhpcy55eSlcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIE8pICYmIChJLnl5W09dID0gdGhpcy55eVtPXSk7XG4gICAgICBfLnNldElucHV0KGksIEkueXkpLCBJLnl5LmxleGVyID0gXywgSS55eS5wYXJzZXIgPSB0aGlzLCB0eXBlb2YgXy55eWxsb2MgPiBcInVcIiAmJiAoXy55eWxsb2MgPSB7fSk7XG4gICAgICB2YXIgWSA9IF8ueXlsbG9jO1xuICAgICAgby5wdXNoKFkpO1xuICAgICAgdmFyIGZ0ID0gXy5vcHRpb25zICYmIF8ub3B0aW9ucy5yYW5nZXM7XG4gICAgICB0eXBlb2YgSS55eS5wYXJzZUVycm9yID09IFwiZnVuY3Rpb25cIiA/IHRoaXMucGFyc2VFcnJvciA9IEkueXkucGFyc2VFcnJvciA6IHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgZnVuY3Rpb24gcHQodykge1xuICAgICAgICBsLmxlbmd0aCA9IGwubGVuZ3RoIC0gMiAqIHcsIHAubGVuZ3RoID0gcC5sZW5ndGggLSB3LCBvLmxlbmd0aCA9IG8ubGVuZ3RoIC0gdztcbiAgICAgIH1cbiAgICAgIG4ocHQsIFwicG9wU3RhY2tcIik7XG4gICAgICBmdW5jdGlvbiBEKCkge1xuICAgICAgICB2YXIgdztcbiAgICAgICAgcmV0dXJuIHcgPSBkLnBvcCgpIHx8IF8ubGV4KCkgfHwgUSwgdHlwZW9mIHcgIT0gXCJudW1iZXJcIiAmJiAodyBpbnN0YW5jZW9mIEFycmF5ICYmIChkID0gdywgdyA9IGQucG9wKCkpLCB3ID0gYS5zeW1ib2xzX1t3XSB8fCB3KSwgdztcbiAgICAgIH1cbiAgICAgIG4oRCwgXCJsZXhcIik7XG4gICAgICBmb3IgKHZhciB2LCBBLCBULCBxLCBGID0ge30sIE4sIE0sIHR0LCB6OyA7ICkge1xuICAgICAgICBpZiAoQSA9IGxbbC5sZW5ndGggLSAxXSwgdGhpcy5kZWZhdWx0QWN0aW9uc1tBXSA/IFQgPSB0aGlzLmRlZmF1bHRBY3Rpb25zW0FdIDogKCh2ID09PSBudWxsIHx8IHR5cGVvZiB2ID4gXCJ1XCIpICYmICh2ID0gRCgpKSwgVCA9IGJbQV0gJiYgYltBXVt2XSksIHR5cGVvZiBUID4gXCJ1XCIgfHwgIVQubGVuZ3RoIHx8ICFUWzBdKSB7XG4gICAgICAgICAgdmFyIEggPSBcIlwiO1xuICAgICAgICAgIHogPSBbXTtcbiAgICAgICAgICBmb3IgKE4gaW4gYltBXSlcbiAgICAgICAgICAgIHRoaXMudGVybWluYWxzX1tOXSAmJiBOID4gZHQgJiYgei5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW05dICsgXCInXCIpO1xuICAgICAgICAgIF8uc2hvd1Bvc2l0aW9uID8gSCA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChDICsgMSkgKyBgOlxuYCArIF8uc2hvd1Bvc2l0aW9uKCkgKyBgXG5FeHBlY3RpbmcgYCArIHouam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3ZdIHx8IHYpICsgXCInXCIgOiBIID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKEMgKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHYgPT0gUSA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bdl0gfHwgdikgKyBcIidcIiksIHRoaXMucGFyc2VFcnJvcihILCB7XG4gICAgICAgICAgICB0ZXh0OiBfLm1hdGNoLFxuICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1t2XSB8fCB2LFxuICAgICAgICAgICAgbGluZTogXy55eWxpbmVubyxcbiAgICAgICAgICAgIGxvYzogWSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiB6XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFRbMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBULmxlbmd0aCA+IDEpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgQSArIFwiLCB0b2tlbjogXCIgKyB2KTtcbiAgICAgICAgc3dpdGNoIChUWzBdKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbC5wdXNoKHYpLCBwLnB1c2goXy55eXRleHQpLCBvLnB1c2goXy55eWxsb2MpLCBsLnB1c2goVFsxXSksIHYgPSBudWxsLCBLID0gXy55eWxlbmcsIGsgPSBfLnl5dGV4dCwgQyA9IF8ueXlsaW5lbm8sIFkgPSBfLnl5bGxvYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGlmIChNID0gdGhpcy5wcm9kdWN0aW9uc19bVFsxXV1bMV0sIEYuJCA9IHBbcC5sZW5ndGggLSBNXSwgRi5fJCA9IHtcbiAgICAgICAgICAgICAgZmlyc3RfbGluZTogb1tvLmxlbmd0aCAtIChNIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICBsYXN0X2xpbmU6IG9bby5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogb1tvLmxlbmd0aCAtIChNIHx8IDEpXS5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBvW28ubGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgIH0sIGZ0ICYmIChGLl8kLnJhbmdlID0gW1xuICAgICAgICAgICAgICBvW28ubGVuZ3RoIC0gKE0gfHwgMSldLnJhbmdlWzBdLFxuICAgICAgICAgICAgICBvW28ubGVuZ3RoIC0gMV0ucmFuZ2VbMV1cbiAgICAgICAgICAgIF0pLCBxID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KEYsIFtcbiAgICAgICAgICAgICAgayxcbiAgICAgICAgICAgICAgSyxcbiAgICAgICAgICAgICAgQyxcbiAgICAgICAgICAgICAgSS55eSxcbiAgICAgICAgICAgICAgVFsxXSxcbiAgICAgICAgICAgICAgcCxcbiAgICAgICAgICAgICAgb1xuICAgICAgICAgICAgXS5jb25jYXQoeXQpKSwgdHlwZW9mIHEgPCBcInVcIilcbiAgICAgICAgICAgICAgcmV0dXJuIHE7XG4gICAgICAgICAgICBNICYmIChsID0gbC5zbGljZSgwLCAtMSAqIE0gKiAyKSwgcCA9IHAuc2xpY2UoMCwgLTEgKiBNKSwgbyA9IG8uc2xpY2UoMCwgLTEgKiBNKSksIGwucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1tUWzFdXVswXSksIHAucHVzaChGLiQpLCBvLnB1c2goRi5fJCksIHR0ID0gYltsW2wubGVuZ3RoIC0gMl1dW2xbbC5sZW5ndGggLSAxXV0sIGwucHVzaCh0dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAhMDtcbiAgICB9LCBcInBhcnNlXCIpXG4gIH0sIG0gPSAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0ge1xuICAgICAgRU9GOiAxLFxuICAgICAgcGFyc2VFcnJvcjogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oYSwgbCkge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpXG4gICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihhLCBsKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihhKTtcbiAgICAgIH0sIFwicGFyc2VFcnJvclwiKSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oaSwgYSkge1xuICAgICAgICByZXR1cm4gdGhpcy55eSA9IGEgfHwgdGhpcy55eSB8fCB7fSwgdGhpcy5faW5wdXQgPSBpLCB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gITEsIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDAsIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCIsIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAodGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF0pLCB0aGlzLm9mZnNldCA9IDAsIHRoaXM7XG4gICAgICB9LCBcInNldElucHV0XCIpLFxuICAgICAgLy8gY29uc3VtZXMgYW5kIHJldHVybnMgb25lIGNoYXIgZnJvbSB0aGUgaW5wdXRcbiAgICAgIGlucHV0OiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gaSwgdGhpcy55eWxlbmcrKywgdGhpcy5vZmZzZXQrKywgdGhpcy5tYXRjaCArPSBpLCB0aGlzLm1hdGNoZWQgKz0gaTtcbiAgICAgICAgdmFyIGEgPSBpLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgcmV0dXJuIGEgPyAodGhpcy55eWxpbmVubysrLCB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKykgOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrLCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmIHRoaXMueXlsbG9jLnJhbmdlWzFdKyssIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSksIGk7XG4gICAgICB9LCBcImlucHV0XCIpLFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyIGEgPSBpLmxlbmd0aCwgbCA9IGkuc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBpICsgdGhpcy5faW5wdXQsIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGEpLCB0aGlzLm9mZnNldCAtPSBhO1xuICAgICAgICB2YXIgZCA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSksIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpLCBsLmxlbmd0aCAtIDEgJiYgKHRoaXMueXlsaW5lbm8gLT0gbC5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIHAgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgcmV0dXJuIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbCA/IChsLmxlbmd0aCA9PT0gZC5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIGRbZC5sZW5ndGggLSBsLmxlbmd0aF0ubGVuZ3RoIC0gbFswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBhXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW3BbMF0sIHBbMF0gKyB0aGlzLnl5bGVuZyAtIGFdKSwgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXM7XG4gICAgICB9LCBcInVucHV0XCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbiAgICAgIG1vcmU6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9yZSA9ICEwLCB0aGlzO1xuICAgICAgfSwgXCJtb3JlXCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgIHJlamVjdDogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKVxuICAgICAgICAgIHRoaXMuX2JhY2t0cmFjayA9ICEwO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXG5gICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sIFwicmVqZWN0XCIpLFxuICAgICAgLy8gcmV0YWluIGZpcnN0IG4gY2hhcmFjdGVycyBvZiB0aGUgbWF0Y2hcbiAgICAgIGxlc3M6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKGkpKTtcbiAgICAgIH0sIFwibGVzc1wiKSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKGkubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBpLnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwicGFzdElucHV0XCIpLFxuICAgICAgLy8gZGlzcGxheXMgdXBjb21pbmcgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICB1cGNvbWluZ0lucHV0OiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLm1hdGNoO1xuICAgICAgICByZXR1cm4gaS5sZW5ndGggPCAyMCAmJiAoaSArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBpLmxlbmd0aCkpLCAoaS5zdWJzdHIoMCwgMjApICsgKGkubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwidXBjb21pbmdJbnB1dFwiKSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wYXN0SW5wdXQoKSwgYSA9IG5ldyBBcnJheShpLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICByZXR1cm4gaSArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgYFxuYCArIGEgKyBcIl5cIjtcbiAgICAgIH0sIFwic2hvd1Bvc2l0aW9uXCIpLFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbihpLCBhKSB7XG4gICAgICAgIHZhciBsLCBkLCBwO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlciAmJiAocCA9IHtcbiAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAocC55eWxsb2MucmFuZ2UgPSB0aGlzLnl5bGxvYy5yYW5nZS5zbGljZSgwKSkpLCBkID0gaVswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyksIGQgJiYgKHRoaXMueXlsaW5lbm8gKz0gZC5sZW5ndGgpLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBkID8gZFtkLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGRbZC5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIGlbMF0ubGVuZ3RoXG4gICAgICAgIH0sIHRoaXMueXl0ZXh0ICs9IGlbMF0sIHRoaXMubWF0Y2ggKz0gaVswXSwgdGhpcy5tYXRjaGVzID0gaSwgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ10pLCB0aGlzLl9tb3JlID0gITEsIHRoaXMuX2JhY2t0cmFjayA9ICExLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKGlbMF0ubGVuZ3RoKSwgdGhpcy5tYXRjaGVkICs9IGlbMF0sIGwgPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBhLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pLCB0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQgJiYgKHRoaXMuZG9uZSA9ICExKSwgbClcbiAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIG8gaW4gcClcbiAgICAgICAgICAgIHRoaXNbb10gPSBwW29dO1xuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9LCBcInRlc3RfbWF0Y2hcIiksXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCBpbiBpbnB1dFxuICAgICAgbmV4dDogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB0aGlzLl9pbnB1dCB8fCAodGhpcy5kb25lID0gITApO1xuICAgICAgICB2YXIgaSwgYSwgbCwgZDtcbiAgICAgICAgdGhpcy5fbW9yZSB8fCAodGhpcy55eXRleHQgPSBcIlwiLCB0aGlzLm1hdGNoID0gXCJcIik7XG4gICAgICAgIGZvciAodmFyIHAgPSB0aGlzLl9jdXJyZW50UnVsZXMoKSwgbyA9IDA7IG8gPCBwLmxlbmd0aDsgbysrKVxuICAgICAgICAgIGlmIChsID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1twW29dXSksIGwgJiYgKCFhIHx8IGxbMF0ubGVuZ3RoID4gYVswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBpZiAoYSA9IGwsIGQgPSBvLCB0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIGlmIChpID0gdGhpcy50ZXN0X21hdGNoKGwsIHBbb10pLCBpICE9PSAhMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIGEgPSAhMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmZsZXgpXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGEgPyAoaSA9IHRoaXMudGVzdF9tYXRjaChhLCBwW2RdKSwgaSAhPT0gITEgPyBpIDogITEpIDogdGhpcy5faW5wdXQgPT09IFwiXCIgPyB0aGlzLkVPRiA6IHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBVbnJlY29nbml6ZWQgdGV4dC5cbmAgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgIH0pO1xuICAgICAgfSwgXCJuZXh0XCIpLFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIGEgfHwgdGhpcy5sZXgoKTtcbiAgICAgIH0sIFwibGV4XCIpLFxuICAgICAgLy8gYWN0aXZhdGVzIGEgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSAocHVzaGVzIHRoZSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9udG8gdGhlIGNvbmRpdGlvbiBzdGFjaylcbiAgICAgIGJlZ2luOiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbihhKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChhKTtcbiAgICAgIH0sIFwiYmVnaW5cIiksXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYSA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIGEgPiAwID8gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKSA6IHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICB9LCBcInBvcFN0YXRlXCIpLFxuICAgICAgLy8gcHJvZHVjZSB0aGUgbGV4ZXIgcnVsZSBzZXQgd2hpY2ggaXMgYWN0aXZlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGVcbiAgICAgIF9jdXJyZW50UnVsZXM6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdID8gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXMgOiB0aGlzLmNvbmRpdGlvbnMuSU5JVElBTC5ydWxlcztcbiAgICAgIH0sIFwiX2N1cnJlbnRSdWxlc1wiKSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiBhID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnMoYSB8fCAwKSwgYSA+PSAwID8gdGhpcy5jb25kaXRpb25TdGFja1thXSA6IFwiSU5JVElBTFwiO1xuICAgICAgfSwgXCJ0b3BTdGF0ZVwiKSxcbiAgICAgIC8vIGFsaWFzIGZvciBiZWdpbihjb25kaXRpb24pXG4gICAgICBwdXNoU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgdGhpcy5iZWdpbihhKTtcbiAgICAgIH0sIFwicHVzaFN0YXRlXCIpLFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSwgXCJzdGF0ZVN0YWNrU2l6ZVwiKSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6ICEwIH0sXG4gICAgICBwZXJmb3JtQWN0aW9uOiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbihhLCBsLCBkLCBwKSB7XG4gICAgICAgIHN3aXRjaCAoZCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4gNDtcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gMTE7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVnaW4oXCJhY2NfdGl0bGVcIiksIDEyO1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIFwiYWNjX3RpdGxlX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVnaW4oXCJhY2NfZGVzY3JcIiksIDE0O1xuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBcImFjY19kZXNjcl92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyX211bHRpbGluZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgcmV0dXJuIFwiYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZVwiO1xuICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICByZXR1cm4gMTc7XG4gICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgIHJldHVybiAxODtcbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgcmV0dXJuIDE5O1xuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICByZXR1cm4gXCI6XCI7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHJldHVybiA2O1xuICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICByZXR1cm4gXCJJTlZBTElEXCI7XG4gICAgICAgIH1cbiAgICAgIH0sIFwiYW5vbnltb3VzXCIpLFxuICAgICAgcnVsZXM6IFsvXig/OiUoPyFcXHspW15cXG5dKikvaSwgL14oPzpbXlxcfV0lJVteXFxuXSopL2ksIC9eKD86W1xcbl0rKS9pLCAvXig/OlxccyspL2ksIC9eKD86I1teXFxuXSopL2ksIC9eKD86am91cm5leVxcYikvaSwgL14oPzp0aXRsZVxcc1teI1xcbjtdKykvaSwgL14oPzphY2NUaXRsZVxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccyo6XFxzKikvaSwgL14oPzooPyFcXG58fCkqW15cXG5dKikvaSwgL14oPzphY2NEZXNjclxccypcXHtcXHMqKS9pLCAvXig/OltcXH1dKS9pLCAvXig/OlteXFx9XSopL2ksIC9eKD86c2VjdGlvblxcc1teIzpcXG47XSspL2ksIC9eKD86W14jOlxcbjtdKykvaSwgL14oPzo6W14jXFxuO10rKS9pLCAvXig/OjopL2ksIC9eKD86JCkvaSwgL14oPzouKS9pXSxcbiAgICAgIGNvbmRpdGlvbnM6IHsgYWNjX2Rlc2NyX211bHRpbGluZTogeyBydWxlczogWzEyLCAxM10sIGluY2x1c2l2ZTogITEgfSwgYWNjX2Rlc2NyOiB7IHJ1bGVzOiBbMTBdLCBpbmNsdXNpdmU6ICExIH0sIGFjY190aXRsZTogeyBydWxlczogWzhdLCBpbmNsdXNpdmU6ICExIH0sIElOSVRJQUw6IHsgcnVsZXM6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA5LCAxMSwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOV0sIGluY2x1c2l2ZTogITAgfSB9XG4gICAgfTtcbiAgICByZXR1cm4gaDtcbiAgfSkoKTtcbiAgZy5sZXhlciA9IG07XG4gIGZ1bmN0aW9uIHgoKSB7XG4gICAgdGhpcy55eSA9IHt9O1xuICB9XG4gIHJldHVybiBuKHgsIFwiUGFyc2VyXCIpLCB4LnByb3RvdHlwZSA9IGcsIGcuUGFyc2VyID0geCwgbmV3IHgoKTtcbn0pKCk7XG5VLnBhcnNlciA9IFU7XG52YXIgRXQgPSBVLCBWID0gXCJcIiwgWiA9IFtdLCBMID0gW10sIEIgPSBbXSwgQ3QgPSAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbigpIHtcbiAgWi5sZW5ndGggPSAwLCBMLmxlbmd0aCA9IDAsIFYgPSBcIlwiLCBCLmxlbmd0aCA9IDAsIE10KCk7XG59LCBcImNsZWFyXCIpLCBQdCA9IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKHQpIHtcbiAgViA9IHQsIFoucHVzaCh0KTtcbn0sIFwiYWRkU2VjdGlvblwiKSwgSXQgPSAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFo7XG59LCBcImdldFNlY3Rpb25zXCIpLCBBdCA9IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKCkge1xuICBsZXQgdCA9IGl0KCk7XG4gIGNvbnN0IGUgPSAxMDA7XG4gIGxldCBzID0gMDtcbiAgZm9yICg7ICF0ICYmIHMgPCBlOyApXG4gICAgdCA9IGl0KCksIHMrKztcbiAgcmV0dXJuIEwucHVzaCguLi5CKSwgTDtcbn0sIFwiZ2V0VGFza3NcIiksIEZ0ID0gLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHQgPSBbXTtcbiAgcmV0dXJuIEwuZm9yRWFjaCgocykgPT4ge1xuICAgIHMucGVvcGxlICYmIHQucHVzaCguLi5zLnBlb3BsZSk7XG4gIH0pLCBbLi4ubmV3IFNldCh0KV0uc29ydCgpO1xufSwgXCJ1cGRhdGVBY3RvcnNcIiksIFZ0ID0gLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24odCwgZSkge1xuICBjb25zdCBzID0gZS5zdWJzdHIoMSkuc3BsaXQoXCI6XCIpO1xuICBsZXQgYyA9IDAsIHIgPSBbXTtcbiAgcy5sZW5ndGggPT09IDEgPyAoYyA9IE51bWJlcihzWzBdKSwgciA9IFtdKSA6IChjID0gTnVtYmVyKHNbMF0pLCByID0gc1sxXS5zcGxpdChcIixcIikpO1xuICBjb25zdCBmID0gci5tYXAoKHkpID0+IHkudHJpbSgpKSwgdSA9IHtcbiAgICBzZWN0aW9uOiBWLFxuICAgIHR5cGU6IFYsXG4gICAgcGVvcGxlOiBmLFxuICAgIHRhc2s6IHQsXG4gICAgc2NvcmU6IGNcbiAgfTtcbiAgQi5wdXNoKHUpO1xufSwgXCJhZGRUYXNrXCIpLCBSdCA9IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKHQpIHtcbiAgY29uc3QgZSA9IHtcbiAgICBzZWN0aW9uOiBWLFxuICAgIHR5cGU6IFYsXG4gICAgZGVzY3JpcHRpb246IHQsXG4gICAgdGFzazogdCxcbiAgICBjbGFzc2VzOiBbXVxuICB9O1xuICBMLnB1c2goZSk7XG59LCBcImFkZFRhc2tPcmdcIiksIGl0ID0gLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHQgPSAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbihzKSB7XG4gICAgcmV0dXJuIEJbc10ucHJvY2Vzc2VkO1xuICB9LCBcImNvbXBpbGVUYXNrXCIpO1xuICBsZXQgZSA9ICEwO1xuICBmb3IgKGNvbnN0IFtzLCBjXSBvZiBCLmVudHJpZXMoKSlcbiAgICB0KHMpLCBlID0gZSAmJiBjLnByb2Nlc3NlZDtcbiAgcmV0dXJuIGU7XG59LCBcImNvbXBpbGVUYXNrc1wiKSwgTHQgPSAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEZ0KCk7XG59LCBcImdldEFjdG9yc1wiKSwgcnQgPSB7XG4gIGdldENvbmZpZzogLyogQF9fUFVSRV9fICovIG4oKCkgPT4gUigpLmpvdXJuZXksIFwiZ2V0Q29uZmlnXCIpLFxuICBjbGVhcjogQ3QsXG4gIHNldERpYWdyYW1UaXRsZTogU3QsXG4gIGdldERpYWdyYW1UaXRsZTogVHQsXG4gIHNldEFjY1RpdGxlOiB3dCxcbiAgZ2V0QWNjVGl0bGU6IGJ0LFxuICBzZXRBY2NEZXNjcmlwdGlvbjogdnQsXG4gIGdldEFjY0Rlc2NyaXB0aW9uOiBfdCxcbiAgYWRkU2VjdGlvbjogUHQsXG4gIGdldFNlY3Rpb25zOiBJdCxcbiAgZ2V0VGFza3M6IEF0LFxuICBhZGRUYXNrOiBWdCxcbiAgYWRkVGFza09yZzogUnQsXG4gIGdldEFjdG9yczogTHRcbn0sIEJ0ID0gLyogQF9fUFVSRV9fICovIG4oKHQpID0+IGAubGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiAke3QuZm9udEZhbWlseX07XG4gICAgY29sb3I6ICR7dC50ZXh0Q29sb3J9O1xuICB9XG4gIC5tb3V0aCB7XG4gICAgc3Ryb2tlOiAjNjY2O1xuICB9XG5cbiAgbGluZSB7XG4gICAgc3Ryb2tlOiAke3QudGV4dENvbG9yfVxuICB9XG5cbiAgLmxlZ2VuZCB7XG4gICAgZmlsbDogJHt0LnRleHRDb2xvcn07XG4gICAgZm9udC1mYW1pbHk6ICR7dC5mb250RmFtaWx5fTtcbiAgfVxuXG4gIC5sYWJlbCB0ZXh0IHtcbiAgICBmaWxsOiAjMzMzO1xuICB9XG4gIC5sYWJlbCB7XG4gICAgY29sb3I6ICR7dC50ZXh0Q29sb3J9XG4gIH1cblxuICAuZmFjZSB7XG4gICAgJHt0LmZhY2VDb2xvciA/IGBmaWxsOiAke3QuZmFjZUNvbG9yfWAgOiBcImZpbGw6ICNGRkY4RENcIn07XG4gICAgc3Ryb2tlOiAjOTk5O1xuICB9XG5cbiAgLm5vZGUgcmVjdCxcbiAgLm5vZGUgY2lyY2xlLFxuICAubm9kZSBlbGxpcHNlLFxuICAubm9kZSBwb2x5Z29uLFxuICAubm9kZSBwYXRoIHtcbiAgICBmaWxsOiAke3QubWFpbkJrZ307XG4gICAgc3Ryb2tlOiAke3Qubm9kZUJvcmRlcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cblxuICAubm9kZSAubGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubm9kZS5jbGlja2FibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5hcnJvd2hlYWRQYXRoIHtcbiAgICBmaWxsOiAke3QuYXJyb3doZWFkQ29sb3J9O1xuICB9XG5cbiAgLmVkZ2VQYXRoIC5wYXRoIHtcbiAgICBzdHJva2U6ICR7dC5saW5lQ29sb3J9O1xuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XG4gIH1cblxuICAuZmxvd2NoYXJ0LWxpbmsge1xuICAgIHN0cm9rZTogJHt0LmxpbmVDb2xvcn07XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuXG4gIC5lZGdlTGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dC5lZGdlTGFiZWxCYWNrZ3JvdW5kfTtcbiAgICByZWN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNsdXN0ZXIgcmVjdCB7XG4gIH1cblxuICAuY2x1c3RlciB0ZXh0IHtcbiAgICBmaWxsOiAke3QudGl0bGVDb2xvcn07XG4gIH1cblxuICBkaXYubWVybWFpZFRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgZm9udC1mYW1pbHk6ICR7dC5mb250RmFtaWx5fTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZDogJHt0LnRlcnRpYXJ5Q29sb3J9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dC5ib3JkZXIyfTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG5cbiAgLnRhc2stdHlwZS0wLCAuc2VjdGlvbi10eXBlLTAgIHtcbiAgICAke3QuZmlsbFR5cGUwID8gYGZpbGw6ICR7dC5maWxsVHlwZTB9YCA6IFwiXCJ9O1xuICB9XG4gIC50YXNrLXR5cGUtMSwgLnNlY3Rpb24tdHlwZS0xICB7XG4gICAgJHt0LmZpbGxUeXBlMCA/IGBmaWxsOiAke3QuZmlsbFR5cGUxfWAgOiBcIlwifTtcbiAgfVxuICAudGFzay10eXBlLTIsIC5zZWN0aW9uLXR5cGUtMiAge1xuICAgICR7dC5maWxsVHlwZTAgPyBgZmlsbDogJHt0LmZpbGxUeXBlMn1gIDogXCJcIn07XG4gIH1cbiAgLnRhc2stdHlwZS0zLCAuc2VjdGlvbi10eXBlLTMgIHtcbiAgICAke3QuZmlsbFR5cGUwID8gYGZpbGw6ICR7dC5maWxsVHlwZTN9YCA6IFwiXCJ9O1xuICB9XG4gIC50YXNrLXR5cGUtNCwgLnNlY3Rpb24tdHlwZS00ICB7XG4gICAgJHt0LmZpbGxUeXBlMCA/IGBmaWxsOiAke3QuZmlsbFR5cGU0fWAgOiBcIlwifTtcbiAgfVxuICAudGFzay10eXBlLTUsIC5zZWN0aW9uLXR5cGUtNSAge1xuICAgICR7dC5maWxsVHlwZTAgPyBgZmlsbDogJHt0LmZpbGxUeXBlNX1gIDogXCJcIn07XG4gIH1cbiAgLnRhc2stdHlwZS02LCAuc2VjdGlvbi10eXBlLTYgIHtcbiAgICAke3QuZmlsbFR5cGUwID8gYGZpbGw6ICR7dC5maWxsVHlwZTZ9YCA6IFwiXCJ9O1xuICB9XG4gIC50YXNrLXR5cGUtNywgLnNlY3Rpb24tdHlwZS03ICB7XG4gICAgJHt0LmZpbGxUeXBlMCA/IGBmaWxsOiAke3QuZmlsbFR5cGU3fWAgOiBcIlwifTtcbiAgfVxuXG4gIC5hY3Rvci0wIHtcbiAgICAke3QuYWN0b3IwID8gYGZpbGw6ICR7dC5hY3RvcjB9YCA6IFwiXCJ9O1xuICB9XG4gIC5hY3Rvci0xIHtcbiAgICAke3QuYWN0b3IxID8gYGZpbGw6ICR7dC5hY3RvcjF9YCA6IFwiXCJ9O1xuICB9XG4gIC5hY3Rvci0yIHtcbiAgICAke3QuYWN0b3IyID8gYGZpbGw6ICR7dC5hY3RvcjJ9YCA6IFwiXCJ9O1xuICB9XG4gIC5hY3Rvci0zIHtcbiAgICAke3QuYWN0b3IzID8gYGZpbGw6ICR7dC5hY3RvcjN9YCA6IFwiXCJ9O1xuICB9XG4gIC5hY3Rvci00IHtcbiAgICAke3QuYWN0b3I0ID8gYGZpbGw6ICR7dC5hY3RvcjR9YCA6IFwiXCJ9O1xuICB9XG4gIC5hY3Rvci01IHtcbiAgICAke3QuYWN0b3I1ID8gYGZpbGw6ICR7dC5hY3RvcjV9YCA6IFwiXCJ9O1xuICB9XG4gICR7a3QoKX1cbmAsIFwiZ2V0U3R5bGVzXCIpLCBqdCA9IEJ0LCBKID0gLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24odCwgZSkge1xuICByZXR1cm4geHQodCwgZSk7XG59LCBcImRyYXdSZWN0XCIpLCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKHQsIGUpIHtcbiAgY29uc3QgYyA9IHQuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCBlLmN4KS5hdHRyKFwiY3lcIiwgZS5jeSkuYXR0cihcImNsYXNzXCIsIFwiZmFjZVwiKS5hdHRyKFwiclwiLCAxNSkuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKS5hdHRyKFwib3ZlcmZsb3dcIiwgXCJ2aXNpYmxlXCIpLCByID0gdC5hcHBlbmQoXCJnXCIpO1xuICByLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgZS5jeCAtIDE1IC8gMykuYXR0cihcImN5XCIsIGUuY3kgLSAxNSAvIDMpLmF0dHIoXCJyXCIsIDEuNSkuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKS5hdHRyKFwiZmlsbFwiLCBcIiM2NjZcIikuYXR0cihcInN0cm9rZVwiLCBcIiM2NjZcIiksIHIuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCBlLmN4ICsgMTUgLyAzKS5hdHRyKFwiY3lcIiwgZS5jeSAtIDE1IC8gMykuYXR0cihcInJcIiwgMS41KS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpLmF0dHIoXCJmaWxsXCIsIFwiIzY2NlwiKS5hdHRyKFwic3Ryb2tlXCIsIFwiIzY2NlwiKTtcbiAgZnVuY3Rpb24gZihnKSB7XG4gICAgY29uc3QgbSA9IGV0KCkuc3RhcnRBbmdsZShNYXRoLlBJIC8gMikuZW5kQW5nbGUoMyAqIChNYXRoLlBJIC8gMikpLmlubmVyUmFkaXVzKDcuNSkub3V0ZXJSYWRpdXMoNi44MTgxODE4MTgxODE4MTc1KTtcbiAgICBnLmFwcGVuZChcInBhdGhcIikuYXR0cihcImNsYXNzXCIsIFwibW91dGhcIikuYXR0cihcImRcIiwgbSkuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGUuY3ggKyBcIixcIiArIChlLmN5ICsgMikgKyBcIilcIik7XG4gIH1cbiAgbihmLCBcInNtaWxlXCIpO1xuICBmdW5jdGlvbiB1KGcpIHtcbiAgICBjb25zdCBtID0gZXQoKS5zdGFydEFuZ2xlKDMgKiBNYXRoLlBJIC8gMikuZW5kQW5nbGUoNSAqIChNYXRoLlBJIC8gMikpLmlubmVyUmFkaXVzKDcuNSkub3V0ZXJSYWRpdXMoNi44MTgxODE4MTgxODE4MTc1KTtcbiAgICBnLmFwcGVuZChcInBhdGhcIikuYXR0cihcImNsYXNzXCIsIFwibW91dGhcIikuYXR0cihcImRcIiwgbSkuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGUuY3ggKyBcIixcIiArIChlLmN5ICsgNykgKyBcIilcIik7XG4gIH1cbiAgbih1LCBcInNhZFwiKTtcbiAgZnVuY3Rpb24geShnKSB7XG4gICAgZy5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1vdXRoXCIpLmF0dHIoXCJzdHJva2VcIiwgMikuYXR0cihcIngxXCIsIGUuY3ggLSA1KS5hdHRyKFwieTFcIiwgZS5jeSArIDcpLmF0dHIoXCJ4MlwiLCBlLmN4ICsgNSkuYXR0cihcInkyXCIsIGUuY3kgKyA3KS5hdHRyKFwiY2xhc3NcIiwgXCJtb3V0aFwiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpLmF0dHIoXCJzdHJva2VcIiwgXCIjNjY2XCIpO1xuICB9XG4gIHJldHVybiBuKHksIFwiYW1iaXZhbGVudFwiKSwgZS5zY29yZSA+IDMgPyBmKHIpIDogZS5zY29yZSA8IDMgPyB1KHIpIDogeShyKSwgYztcbn0sIFwiZHJhd0ZhY2VcIiksIG90ID0gLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24odCwgZSkge1xuICBjb25zdCBzID0gdC5hcHBlbmQoXCJjaXJjbGVcIik7XG4gIHJldHVybiBzLmF0dHIoXCJjeFwiLCBlLmN4KSwgcy5hdHRyKFwiY3lcIiwgZS5jeSksIHMuYXR0cihcImNsYXNzXCIsIFwiYWN0b3ItXCIgKyBlLnBvcyksIHMuYXR0cihcImZpbGxcIiwgZS5maWxsKSwgcy5hdHRyKFwic3Ryb2tlXCIsIGUuc3Ryb2tlKSwgcy5hdHRyKFwiclwiLCBlLnIpLCBzLmNsYXNzICE9PSB2b2lkIDAgJiYgcy5hdHRyKFwiY2xhc3NcIiwgcy5jbGFzcyksIGUudGl0bGUgIT09IHZvaWQgMCAmJiBzLmFwcGVuZChcInRpdGxlXCIpLnRleHQoZS50aXRsZSksIHM7XG59LCBcImRyYXdDaXJjbGVcIiksIGN0ID0gLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24odCwgZSkge1xuICByZXR1cm4gbXQodCwgZSk7XG59LCBcImRyYXdUZXh0XCIpLCB6dCA9IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKHQsIGUpIHtcbiAgZnVuY3Rpb24gcyhyLCBmLCB1LCB5LCBnKSB7XG4gICAgcmV0dXJuIHIgKyBcIixcIiArIGYgKyBcIiBcIiArIChyICsgdSkgKyBcIixcIiArIGYgKyBcIiBcIiArIChyICsgdSkgKyBcIixcIiArIChmICsgeSAtIGcpICsgXCIgXCIgKyAociArIHUgLSBnICogMS4yKSArIFwiLFwiICsgKGYgKyB5KSArIFwiIFwiICsgciArIFwiLFwiICsgKGYgKyB5KTtcbiAgfVxuICBuKHMsIFwiZ2VuUG9pbnRzXCIpO1xuICBjb25zdCBjID0gdC5hcHBlbmQoXCJwb2x5Z29uXCIpO1xuICBjLmF0dHIoXCJwb2ludHNcIiwgcyhlLngsIGUueSwgNTAsIDIwLCA3KSksIGMuYXR0cihcImNsYXNzXCIsIFwibGFiZWxCb3hcIiksIGUueSA9IGUueSArIGUubGFiZWxNYXJnaW4sIGUueCA9IGUueCArIDAuNSAqIGUubGFiZWxNYXJnaW4sIGN0KHQsIGUpO1xufSwgXCJkcmF3TGFiZWxcIiksIFd0ID0gLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24odCwgZSwgcykge1xuICBjb25zdCBjID0gdC5hcHBlbmQoXCJnXCIpLCByID0gbHQoKTtcbiAgci54ID0gZS54LCByLnkgPSBlLnksIHIuZmlsbCA9IGUuZmlsbCwgci53aWR0aCA9IHMud2lkdGggKiBlLnRhc2tDb3VudCArIC8vIHdpZHRoIG9mIHRoZSB0YXNrc1xuICBzLmRpYWdyYW1NYXJnaW5YICogKGUudGFza0NvdW50IC0gMSksIHIuaGVpZ2h0ID0gcy5oZWlnaHQsIHIuY2xhc3MgPSBcImpvdXJuZXktc2VjdGlvbiBzZWN0aW9uLXR5cGUtXCIgKyBlLm51bSwgci5yeCA9IDMsIHIucnkgPSAzLCBKKGMsIHIpLCBodChzKShcbiAgICBlLnRleHQsXG4gICAgYyxcbiAgICByLngsXG4gICAgci55LFxuICAgIHIud2lkdGgsXG4gICAgci5oZWlnaHQsXG4gICAgeyBjbGFzczogXCJqb3VybmV5LXNlY3Rpb24gc2VjdGlvbi10eXBlLVwiICsgZS5udW0gfSxcbiAgICBzLFxuICAgIGUuY29sb3VyXG4gICk7XG59LCBcImRyYXdTZWN0aW9uXCIpLCBudCA9IC0xLCBPdCA9IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKHQsIGUsIHMpIHtcbiAgY29uc3QgYyA9IGUueCArIHMud2lkdGggLyAyLCByID0gdC5hcHBlbmQoXCJnXCIpO1xuICBudCsrLCByLmFwcGVuZChcImxpbmVcIikuYXR0cihcImlkXCIsIFwidGFza1wiICsgbnQpLmF0dHIoXCJ4MVwiLCBjKS5hdHRyKFwieTFcIiwgZS55KS5hdHRyKFwieDJcIiwgYykuYXR0cihcInkyXCIsIDQ1MCkuYXR0cihcImNsYXNzXCIsIFwidGFzay1saW5lXCIpLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIikuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI0IDJcIikuYXR0cihcInN0cm9rZVwiLCBcIiM2NjZcIiksIE50KHIsIHtcbiAgICBjeDogYyxcbiAgICBjeTogMzAwICsgKDUgLSBlLnNjb3JlKSAqIDMwLFxuICAgIHNjb3JlOiBlLnNjb3JlXG4gIH0pO1xuICBjb25zdCB1ID0gbHQoKTtcbiAgdS54ID0gZS54LCB1LnkgPSBlLnksIHUuZmlsbCA9IGUuZmlsbCwgdS53aWR0aCA9IHMud2lkdGgsIHUuaGVpZ2h0ID0gcy5oZWlnaHQsIHUuY2xhc3MgPSBcInRhc2sgdGFzay10eXBlLVwiICsgZS5udW0sIHUucnggPSAzLCB1LnJ5ID0gMywgSihyLCB1KTtcbiAgbGV0IHkgPSBlLnggKyAxNDtcbiAgZS5wZW9wbGUuZm9yRWFjaCgoZykgPT4ge1xuICAgIGNvbnN0IG0gPSBlLmFjdG9yc1tnXS5jb2xvciwgeCA9IHtcbiAgICAgIGN4OiB5LFxuICAgICAgY3k6IGUueSxcbiAgICAgIHI6IDcsXG4gICAgICBmaWxsOiBtLFxuICAgICAgc3Ryb2tlOiBcIiMwMDBcIixcbiAgICAgIHRpdGxlOiBnLFxuICAgICAgcG9zOiBlLmFjdG9yc1tnXS5wb3NpdGlvblxuICAgIH07XG4gICAgb3QociwgeCksIHkgKz0gMTA7XG4gIH0pLCBodChzKShcbiAgICBlLnRhc2ssXG4gICAgcixcbiAgICB1LngsXG4gICAgdS55LFxuICAgIHUud2lkdGgsXG4gICAgdS5oZWlnaHQsXG4gICAgeyBjbGFzczogXCJ0YXNrXCIgfSxcbiAgICBzLFxuICAgIGUuY29sb3VyXG4gICk7XG59LCBcImRyYXdUYXNrXCIpLCBZdCA9IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKHQsIGUpIHtcbiAgZ3QodCwgZSk7XG59LCBcImRyYXdCYWNrZ3JvdW5kUmVjdFwiKSwgaHQgPSAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiB0KHIsIGYsIHUsIHksIGcsIG0sIHgsIGgpIHtcbiAgICBjb25zdCBpID0gZi5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIHUgKyBnIC8gMikuYXR0cihcInlcIiwgeSArIG0gLyAyICsgNSkuc3R5bGUoXCJmb250LWNvbG9yXCIsIGgpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikudGV4dChyKTtcbiAgICBjKGksIHgpO1xuICB9XG4gIG4odCwgXCJieVRleHRcIik7XG4gIGZ1bmN0aW9uIGUociwgZiwgdSwgeSwgZywgbSwgeCwgaCwgaSkge1xuICAgIGNvbnN0IHsgdGFza0ZvbnRTaXplOiBhLCB0YXNrRm9udEZhbWlseTogbCB9ID0gaCwgZCA9IHIuc3BsaXQoLzxiclxccypcXC8/Pi9naSk7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPCBkLmxlbmd0aDsgcCsrKSB7XG4gICAgICBjb25zdCBvID0gcCAqIGEgLSBhICogKGQubGVuZ3RoIC0gMSkgLyAyLCBiID0gZi5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIHUgKyBnIC8gMikuYXR0cihcInlcIiwgeSkuYXR0cihcImZpbGxcIiwgaSkuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKS5zdHlsZShcImZvbnQtc2l6ZVwiLCBhKS5zdHlsZShcImZvbnQtZmFtaWx5XCIsIGwpO1xuICAgICAgYi5hcHBlbmQoXCJ0c3BhblwiKS5hdHRyKFwieFwiLCB1ICsgZyAvIDIpLmF0dHIoXCJkeVwiLCBvKS50ZXh0KGRbcF0pLCBiLmF0dHIoXCJ5XCIsIHkgKyBtIC8gMikuYXR0cihcImRvbWluYW50LWJhc2VsaW5lXCIsIFwiY2VudHJhbFwiKS5hdHRyKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwiY2VudHJhbFwiKSwgYyhiLCB4KTtcbiAgICB9XG4gIH1cbiAgbihlLCBcImJ5VHNwYW5cIik7XG4gIGZ1bmN0aW9uIHMociwgZiwgdSwgeSwgZywgbSwgeCwgaCkge1xuICAgIGNvbnN0IGkgPSBmLmFwcGVuZChcInN3aXRjaFwiKSwgbCA9IGkuYXBwZW5kKFwiZm9yZWlnbk9iamVjdFwiKS5hdHRyKFwieFwiLCB1KS5hdHRyKFwieVwiLCB5KS5hdHRyKFwid2lkdGhcIiwgZykuYXR0cihcImhlaWdodFwiLCBtKS5hdHRyKFwicG9zaXRpb25cIiwgXCJmaXhlZFwiKS5hcHBlbmQoXCJ4aHRtbDpkaXZcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwidGFibGVcIikuc3R5bGUoXCJoZWlnaHRcIiwgXCIxMDAlXCIpLnN0eWxlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xuICAgIGwuYXBwZW5kKFwiZGl2XCIpLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcInRhYmxlLWNlbGxcIikuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpLnN0eWxlKFwidmVydGljYWwtYWxpZ25cIiwgXCJtaWRkbGVcIikudGV4dChyKSwgZShyLCBpLCB1LCB5LCBnLCBtLCB4LCBoKSwgYyhsLCB4KTtcbiAgfVxuICBuKHMsIFwiYnlGb1wiKTtcbiAgZnVuY3Rpb24gYyhyLCBmKSB7XG4gICAgZm9yIChjb25zdCB1IGluIGYpXG4gICAgICB1IGluIGYgJiYgci5hdHRyKHUsIGZbdV0pO1xuICB9XG4gIHJldHVybiBuKGMsIFwiX3NldFRleHRBdHRyc1wiKSwgZnVuY3Rpb24ocikge1xuICAgIHJldHVybiByLnRleHRQbGFjZW1lbnQgPT09IFwiZm9cIiA/IHMgOiByLnRleHRQbGFjZW1lbnQgPT09IFwib2xkXCIgPyB0IDogZTtcbiAgfTtcbn0pKCksIHF0ID0gLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24odCkge1xuICB0LmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBcImFycm93aGVhZFwiKS5hdHRyKFwicmVmWFwiLCA1KS5hdHRyKFwicmVmWVwiLCAyKS5hdHRyKFwibWFya2VyV2lkdGhcIiwgNikuYXR0cihcIm1hcmtlckhlaWdodFwiLCA0KS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAwLDAgViA0IEw2LDIgWlwiKTtcbn0sIFwiaW5pdEdyYXBoaWNzXCIpLCBqID0ge1xuICBkcmF3UmVjdDogSixcbiAgZHJhd0NpcmNsZTogb3QsXG4gIGRyYXdTZWN0aW9uOiBXdCxcbiAgZHJhd1RleHQ6IGN0LFxuICBkcmF3TGFiZWw6IHp0LFxuICBkcmF3VGFzazogT3QsXG4gIGRyYXdCYWNrZ3JvdW5kUmVjdDogWXQsXG4gIGluaXRHcmFwaGljczogcXRcbn0sIEh0ID0gLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24odCkge1xuICBPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKHMpIHtcbiAgICAkW3NdID0gdFtzXTtcbiAgfSk7XG59LCBcInNldENvbmZcIiksIEUgPSB7fSwgVyA9IDA7XG5mdW5jdGlvbiB1dCh0KSB7XG4gIGNvbnN0IGUgPSBSKCkuam91cm5leSwgcyA9IGUubWF4TGFiZWxXaWR0aDtcbiAgVyA9IDA7XG4gIGxldCBjID0gNjA7XG4gIE9iamVjdC5rZXlzKEUpLmZvckVhY2goKHIpID0+IHtcbiAgICBjb25zdCBmID0gRVtyXS5jb2xvciwgdSA9IHtcbiAgICAgIGN4OiAyMCxcbiAgICAgIGN5OiBjLFxuICAgICAgcjogNyxcbiAgICAgIGZpbGw6IGYsXG4gICAgICBzdHJva2U6IFwiIzAwMFwiLFxuICAgICAgcG9zOiBFW3JdLnBvc2l0aW9uXG4gICAgfTtcbiAgICBqLmRyYXdDaXJjbGUodCwgdSk7XG4gICAgbGV0IHkgPSB0LmFwcGVuZChcInRleHRcIikuYXR0cihcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIikudGV4dChyKTtcbiAgICBjb25zdCBnID0geS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgeS5yZW1vdmUoKTtcbiAgICBsZXQgbSA9IFtdO1xuICAgIGlmIChnIDw9IHMpXG4gICAgICBtID0gW3JdO1xuICAgIGVsc2Uge1xuICAgICAgY29uc3QgeCA9IHIuc3BsaXQoXCIgXCIpO1xuICAgICAgbGV0IGggPSBcIlwiO1xuICAgICAgeSA9IHQuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKSwgeC5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBoID8gYCR7aH0gJHtpfWAgOiBpO1xuICAgICAgICBpZiAoeS50ZXh0KGEpLCB5Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA+IHMpIHtcbiAgICAgICAgICBpZiAoaCAmJiBtLnB1c2goaCksIGggPSBpLCB5LnRleHQoaSksIHkubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoID4gcykge1xuICAgICAgICAgICAgbGV0IGQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mIGkpXG4gICAgICAgICAgICAgIGQgKz0gcCwgeS50ZXh0KGQgKyBcIi1cIiksIHkubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoID4gcyAmJiAobS5wdXNoKGQuc2xpY2UoMCwgLTEpICsgXCItXCIpLCBkID0gcCk7XG4gICAgICAgICAgICBoID0gZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIGggPSBhO1xuICAgICAgfSksIGggJiYgbS5wdXNoKGgpLCB5LnJlbW92ZSgpO1xuICAgIH1cbiAgICBtLmZvckVhY2goKHgsIGgpID0+IHtcbiAgICAgIGNvbnN0IGkgPSB7XG4gICAgICAgIHg6IDQwLFxuICAgICAgICB5OiBjICsgNyArIGggKiAyMCxcbiAgICAgICAgZmlsbDogXCIjNjY2XCIsXG4gICAgICAgIHRleHQ6IHgsXG4gICAgICAgIHRleHRNYXJnaW46IGUuYm94VGV4dE1hcmdpbiA/PyA1XG4gICAgICB9LCBsID0gai5kcmF3VGV4dCh0LCBpKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICBsID4gVyAmJiBsID4gZS5sZWZ0TWFyZ2luIC0gbCAmJiAoVyA9IGwpO1xuICAgIH0pLCBjICs9IE1hdGgubWF4KDIwLCBtLmxlbmd0aCAqIDIwKTtcbiAgfSk7XG59XG5uKHV0LCBcImRyYXdBY3RvckxlZ2VuZFwiKTtcbnZhciAkID0gUigpLmpvdXJuZXksIFAgPSAwLCBYdCA9IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKHQsIGUsIHMsIGMpIHtcbiAgY29uc3QgciA9IFIoKSwgZiA9IHIuam91cm5leS50aXRsZUNvbG9yLCB1ID0gci5qb3VybmV5LnRpdGxlRm9udFNpemUsIHkgPSByLmpvdXJuZXkudGl0bGVGb250RmFtaWx5LCBnID0gci5zZWN1cml0eUxldmVsO1xuICBsZXQgbTtcbiAgZyA9PT0gXCJzYW5kYm94XCIgJiYgKG0gPSBYKFwiI2lcIiArIGUpKTtcbiAgY29uc3QgeCA9IGcgPT09IFwic2FuZGJveFwiID8gWChtLm5vZGVzKClbMF0uY29udGVudERvY3VtZW50LmJvZHkpIDogWChcImJvZHlcIik7XG4gIFMuaW5pdCgpO1xuICBjb25zdCBoID0geC5zZWxlY3QoXCIjXCIgKyBlKTtcbiAgai5pbml0R3JhcGhpY3MoaCk7XG4gIGNvbnN0IGkgPSBjLmRiLmdldFRhc2tzKCksIGEgPSBjLmRiLmdldERpYWdyYW1UaXRsZSgpLCBsID0gYy5kYi5nZXRBY3RvcnMoKTtcbiAgZm9yIChjb25zdCBDIGluIEUpXG4gICAgZGVsZXRlIEVbQ107XG4gIGxldCBkID0gMDtcbiAgbC5mb3JFYWNoKChDKSA9PiB7XG4gICAgRVtDXSA9IHtcbiAgICAgIGNvbG9yOiAkLmFjdG9yQ29sb3Vyc1tkICUgJC5hY3RvckNvbG91cnMubGVuZ3RoXSxcbiAgICAgIHBvc2l0aW9uOiBkXG4gICAgfSwgZCsrO1xuICB9KSwgdXQoaCksIFAgPSAkLmxlZnRNYXJnaW4gKyBXLCBTLmluc2VydCgwLCAwLCBQLCBPYmplY3Qua2V5cyhFKS5sZW5ndGggKiA1MCksIEd0KGgsIGksIDApO1xuICBjb25zdCBwID0gUy5nZXRCb3VuZHMoKTtcbiAgYSAmJiBoLmFwcGVuZChcInRleHRcIikudGV4dChhKS5hdHRyKFwieFwiLCBQKS5hdHRyKFwiZm9udC1zaXplXCIsIHUpLmF0dHIoXCJmb250LXdlaWdodFwiLCBcImJvbGRcIikuYXR0cihcInlcIiwgMjUpLmF0dHIoXCJmaWxsXCIsIGYpLmF0dHIoXCJmb250LWZhbWlseVwiLCB5KTtcbiAgY29uc3QgbyA9IHAuc3RvcHkgLSBwLnN0YXJ0eSArIDIgKiAkLmRpYWdyYW1NYXJnaW5ZLCBiID0gUCArIHAuc3RvcHggKyAyICogJC5kaWFncmFtTWFyZ2luWDtcbiAgJHQoaCwgbywgYiwgJC51c2VNYXhXaWR0aCksIGguYXBwZW5kKFwibGluZVwiKS5hdHRyKFwieDFcIiwgUCkuYXR0cihcInkxXCIsICQuaGVpZ2h0ICogNCkuYXR0cihcIngyXCIsIGIgLSBQIC0gNCkuYXR0cihcInkyXCIsICQuaGVpZ2h0ICogNCkuYXR0cihcInN0cm9rZS13aWR0aFwiLCA0KS5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIikuYXR0cihcIm1hcmtlci1lbmRcIiwgXCJ1cmwoI2Fycm93aGVhZClcIik7XG4gIGNvbnN0IGsgPSBhID8gNzAgOiAwO1xuICBoLmF0dHIoXCJ2aWV3Qm94XCIsIGAke3Auc3RhcnR4fSAtMjUgJHtifSAke28gKyBrfWApLCBoLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKSwgaC5hdHRyKFwiaGVpZ2h0XCIsIG8gKyBrICsgMjUpO1xufSwgXCJkcmF3XCIpLCBTID0ge1xuICBkYXRhOiB7XG4gICAgc3RhcnR4OiB2b2lkIDAsXG4gICAgc3RvcHg6IHZvaWQgMCxcbiAgICBzdGFydHk6IHZvaWQgMCxcbiAgICBzdG9weTogdm9pZCAwXG4gIH0sXG4gIHZlcnRpY2FsUG9zOiAwLFxuICBzZXF1ZW5jZUl0ZW1zOiBbXSxcbiAgaW5pdDogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXF1ZW5jZUl0ZW1zID0gW10sIHRoaXMuZGF0YSA9IHtcbiAgICAgIHN0YXJ0eDogdm9pZCAwLFxuICAgICAgc3RvcHg6IHZvaWQgMCxcbiAgICAgIHN0YXJ0eTogdm9pZCAwLFxuICAgICAgc3RvcHk6IHZvaWQgMFxuICAgIH0sIHRoaXMudmVydGljYWxQb3MgPSAwO1xuICB9LCBcImluaXRcIiksXG4gIHVwZGF0ZVZhbDogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24odCwgZSwgcywgYykge1xuICAgIHRbZV0gPT09IHZvaWQgMCA/IHRbZV0gPSBzIDogdFtlXSA9IGMocywgdFtlXSk7XG4gIH0sIFwidXBkYXRlVmFsXCIpLFxuICB1cGRhdGVCb3VuZHM6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKHQsIGUsIHMsIGMpIHtcbiAgICBjb25zdCByID0gUigpLmpvdXJuZXksIGYgPSB0aGlzO1xuICAgIGxldCB1ID0gMDtcbiAgICBmdW5jdGlvbiB5KGcpIHtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbih4KSB7XG4gICAgICAgIHUrKztcbiAgICAgICAgY29uc3QgaCA9IGYuc2VxdWVuY2VJdGVtcy5sZW5ndGggLSB1ICsgMTtcbiAgICAgICAgZi51cGRhdGVWYWwoeCwgXCJzdGFydHlcIiwgZSAtIGggKiByLmJveE1hcmdpbiwgTWF0aC5taW4pLCBmLnVwZGF0ZVZhbCh4LCBcInN0b3B5XCIsIGMgKyBoICogci5ib3hNYXJnaW4sIE1hdGgubWF4KSwgZi51cGRhdGVWYWwoUy5kYXRhLCBcInN0YXJ0eFwiLCB0IC0gaCAqIHIuYm94TWFyZ2luLCBNYXRoLm1pbiksIGYudXBkYXRlVmFsKFMuZGF0YSwgXCJzdG9weFwiLCBzICsgaCAqIHIuYm94TWFyZ2luLCBNYXRoLm1heCksIGcgIT09IFwiYWN0aXZhdGlvblwiICYmIChmLnVwZGF0ZVZhbCh4LCBcInN0YXJ0eFwiLCB0IC0gaCAqIHIuYm94TWFyZ2luLCBNYXRoLm1pbiksIGYudXBkYXRlVmFsKHgsIFwic3RvcHhcIiwgcyArIGggKiByLmJveE1hcmdpbiwgTWF0aC5tYXgpLCBmLnVwZGF0ZVZhbChTLmRhdGEsIFwic3RhcnR5XCIsIGUgLSBoICogci5ib3hNYXJnaW4sIE1hdGgubWluKSwgZi51cGRhdGVWYWwoUy5kYXRhLCBcInN0b3B5XCIsIGMgKyBoICogci5ib3hNYXJnaW4sIE1hdGgubWF4KSk7XG4gICAgICB9LCBcInVwZGF0ZUl0ZW1Cb3VuZHNcIik7XG4gICAgfVxuICAgIG4oeSwgXCJ1cGRhdGVGblwiKSwgdGhpcy5zZXF1ZW5jZUl0ZW1zLmZvckVhY2goeSgpKTtcbiAgfSwgXCJ1cGRhdGVCb3VuZHNcIiksXG4gIGluc2VydDogLyogQF9fUFVSRV9fICovIG4oZnVuY3Rpb24odCwgZSwgcywgYykge1xuICAgIGNvbnN0IHIgPSBNYXRoLm1pbih0LCBzKSwgZiA9IE1hdGgubWF4KHQsIHMpLCB1ID0gTWF0aC5taW4oZSwgYyksIHkgPSBNYXRoLm1heChlLCBjKTtcbiAgICB0aGlzLnVwZGF0ZVZhbChTLmRhdGEsIFwic3RhcnR4XCIsIHIsIE1hdGgubWluKSwgdGhpcy51cGRhdGVWYWwoUy5kYXRhLCBcInN0YXJ0eVwiLCB1LCBNYXRoLm1pbiksIHRoaXMudXBkYXRlVmFsKFMuZGF0YSwgXCJzdG9weFwiLCBmLCBNYXRoLm1heCksIHRoaXMudXBkYXRlVmFsKFMuZGF0YSwgXCJzdG9weVwiLCB5LCBNYXRoLm1heCksIHRoaXMudXBkYXRlQm91bmRzKHIsIHUsIGYsIHkpO1xuICB9LCBcImluc2VydFwiKSxcbiAgYnVtcFZlcnRpY2FsUG9zOiAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbih0KSB7XG4gICAgdGhpcy52ZXJ0aWNhbFBvcyA9IHRoaXMudmVydGljYWxQb3MgKyB0LCB0aGlzLmRhdGEuc3RvcHkgPSB0aGlzLnZlcnRpY2FsUG9zO1xuICB9LCBcImJ1bXBWZXJ0aWNhbFBvc1wiKSxcbiAgZ2V0VmVydGljYWxQb3M6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsUG9zO1xuICB9LCBcImdldFZlcnRpY2FsUG9zXCIpLFxuICBnZXRCb3VuZHM6IC8qIEBfX1BVUkVfXyAqLyBuKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH0sIFwiZ2V0Qm91bmRzXCIpXG59LCBHID0gJC5zZWN0aW9uRmlsbHMsIHN0ID0gJC5zZWN0aW9uQ29sb3VycywgR3QgPSAvKiBAX19QVVJFX18gKi8gbihmdW5jdGlvbih0LCBlLCBzKSB7XG4gIGNvbnN0IGMgPSBSKCkuam91cm5leTtcbiAgbGV0IHIgPSBcIlwiO1xuICBjb25zdCBmID0gYy5oZWlnaHQgKiAyICsgYy5kaWFncmFtTWFyZ2luWSwgdSA9IHMgKyBmO1xuICBsZXQgeSA9IDAsIGcgPSBcIiNDQ0NcIiwgbSA9IFwiYmxhY2tcIiwgeCA9IDA7XG4gIGZvciAoY29uc3QgW2gsIGldIG9mIGUuZW50cmllcygpKSB7XG4gICAgaWYgKHIgIT09IGkuc2VjdGlvbikge1xuICAgICAgZyA9IEdbeSAlIEcubGVuZ3RoXSwgeCA9IHkgJSBHLmxlbmd0aCwgbSA9IHN0W3kgJSBzdC5sZW5ndGhdO1xuICAgICAgbGV0IGwgPSAwO1xuICAgICAgY29uc3QgZCA9IGkuc2VjdGlvbjtcbiAgICAgIGZvciAobGV0IG8gPSBoOyBvIDwgZS5sZW5ndGggJiYgZVtvXS5zZWN0aW9uID09IGQ7IG8rKylcbiAgICAgICAgbCA9IGwgKyAxO1xuICAgICAgY29uc3QgcCA9IHtcbiAgICAgICAgeDogaCAqIGMudGFza01hcmdpbiArIGggKiBjLndpZHRoICsgUCxcbiAgICAgICAgeTogNTAsXG4gICAgICAgIHRleHQ6IGkuc2VjdGlvbixcbiAgICAgICAgZmlsbDogZyxcbiAgICAgICAgbnVtOiB4LFxuICAgICAgICBjb2xvdXI6IG0sXG4gICAgICAgIHRhc2tDb3VudDogbFxuICAgICAgfTtcbiAgICAgIGouZHJhd1NlY3Rpb24odCwgcCwgYyksIHIgPSBpLnNlY3Rpb24sIHkrKztcbiAgICB9XG4gICAgY29uc3QgYSA9IGkucGVvcGxlLnJlZHVjZSgobCwgZCkgPT4gKEVbZF0gJiYgKGxbZF0gPSBFW2RdKSwgbCksIHt9KTtcbiAgICBpLnggPSBoICogYy50YXNrTWFyZ2luICsgaCAqIGMud2lkdGggKyBQLCBpLnkgPSB1LCBpLndpZHRoID0gYy5kaWFncmFtTWFyZ2luWCwgaS5oZWlnaHQgPSBjLmRpYWdyYW1NYXJnaW5ZLCBpLmNvbG91ciA9IG0sIGkuZmlsbCA9IGcsIGkubnVtID0geCwgaS5hY3RvcnMgPSBhLCBqLmRyYXdUYXNrKHQsIGksIGMpLCBTLmluc2VydChpLngsIGkueSwgaS54ICsgaS53aWR0aCArIGMudGFza01hcmdpbiwgNDUwKTtcbiAgfVxufSwgXCJkcmF3VGFza3NcIiksIGF0ID0ge1xuICBzZXRDb25mOiBIdCxcbiAgZHJhdzogWHRcbn0sIFF0ID0ge1xuICBwYXJzZXI6IEV0LFxuICBkYjogcnQsXG4gIHJlbmRlcmVyOiBhdCxcbiAgc3R5bGVzOiBqdCxcbiAgaW5pdDogLyogQF9fUFVSRV9fICovIG4oKHQpID0+IHtcbiAgICBhdC5zZXRDb25mKHQuam91cm5leSksIHJ0LmNsZWFyKCk7XG4gIH0sIFwiaW5pdFwiKVxufTtcbmV4cG9ydCB7XG4gIFF0IGFzIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsibiIsImwiLCJ5IiwiZyIsImQiLCJwIiwiZnQiLCJ4IiwiTXQiLCJSIiwiU3QiLCJUdCIsInd0IiwiYnQiLCJ2dCIsIl90Iiwia3QiLCJ4dCIsImV0IiwibXQiLCJsdCIsImd0IiwiWCIsIiR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsSUFBSSxLQUFLLFdBQVc7QUFDbEIsTUFBSSxJQUFvQkEsa0JBQUUsU0FBUyxHQUFHLEdBQUcsR0FBR0MsSUFBRztBQUM3QyxTQUFLLElBQUksS0FBSyxJQUFJQSxLQUFJLEVBQUUsUUFBUUEsTUFBSyxFQUFFLEVBQUVBLEVBQUMsQ0FBQyxJQUFJLEVBQUc7QUFDbEQsV0FBTztBQUFBLEVBQ1QsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBR0MsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHQyxLQUFJO0FBQUEsSUFDaEksT0FBdUJILGtCQUFFLFdBQVc7QUFBQSxJQUNwQyxHQUFHLE9BQU87QUFBQSxJQUNWLElBQUksQ0FBQTtBQUFBLElBQ0osVUFBVSxFQUFFLE9BQU8sR0FBRyxPQUFPLEdBQUcsU0FBUyxHQUFHLFVBQVUsR0FBRyxL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
