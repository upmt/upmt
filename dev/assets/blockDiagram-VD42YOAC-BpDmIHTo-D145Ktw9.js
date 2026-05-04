import { l } from "./chunk-FMBD7UC4-BkffimdD-Dc7WXgB8.js";
import { p, P as Dt$1, h as ht$1, i as Gh, F, y as By, D as Ai, f as ft, bq as wC, ab as a2, an as Ln, ak as gy, br as Bt$1, bs as Xe$1, J as Jo, o as ce, Q as Qr, bt as Cp, bu as Cr$1, t as te$1, bv as Ud } from "./SynchronicGraphPage-Cfc4t7LF.js";
import { a } from "./clone-CbSBpceO-D-CCwAB2.js";
import { X as X$1 } from "./graph-CVVLTrhn-PI-07Rvs.js";
import { t } from "./channel-8aiTyHJV-BT405hSA.js";
import "./QPage-T9YNTdVD.js";
import "./index-DvOn-zPj.js";
import "./QBtnToggle-CVv2wrIS.js";
import "./QBtnGroup-Cmx88UKq.js";
import "./QToolbar-SnVKHSry.js";
import "./export-file-lpTZqdHO.js";
import "./_baseUniq-DbLykLaa-CpIAyELt.js";
var bt = (function() {
  var e = /* @__PURE__ */ p(function(D, y, g, f) {
    for (g = g || {}, f = D.length; f--; g[D[f]] = y) ;
    return g;
  }, "o"), t2 = [1, 15], a3 = [1, 7], i = [1, 13], l2 = [1, 14], s = [1, 19], r = [1, 16], n = [1, 17], c = [1, 18], u = [8, 30], o = [8, 10, 21, 28, 29, 30, 31, 39, 43, 46], x = [1, 23], w = [1, 24], b = [8, 10, 15, 16, 21, 28, 29, 30, 31, 39, 43, 46], S = [8, 10, 15, 16, 21, 27, 28, 29, 30, 31, 39, 43, 46], v = [1, 49], k = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, spaceLines: 3, SPACELINE: 4, NL: 5, separator: 6, SPACE: 7, EOF: 8, start: 9, BLOCK_DIAGRAM_KEY: 10, document: 11, stop: 12, statement: 13, link: 14, LINK: 15, START_LINK: 16, LINK_LABEL: 17, STR: 18, nodeStatement: 19, columnsStatement: 20, SPACE_BLOCK: 21, blockStatement: 22, classDefStatement: 23, cssClassStatement: 24, styleStatement: 25, node: 26, SIZE: 27, COLUMNS: 28, "id-block": 29, end: 30, NODE_ID: 31, nodeShapeNLabel: 32, dirList: 33, DIR: 34, NODE_DSTART: 35, NODE_DEND: 36, BLOCK_ARROW_START: 37, BLOCK_ARROW_END: 38, classDef: 39, CLASSDEF_ID: 40, CLASSDEF_STYLEOPTS: 41, DEFAULT: 42, class: 43, CLASSENTITY_IDS: 44, STYLECLASS: 45, style: 46, STYLE_ENTITY_IDS: 47, STYLE_DEFINITION_DATA: 48, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SPACELINE", 5: "NL", 7: "SPACE", 8: "EOF", 10: "BLOCK_DIAGRAM_KEY", 15: "LINK", 16: "START_LINK", 17: "LINK_LABEL", 18: "STR", 21: "SPACE_BLOCK", 27: "SIZE", 28: "COLUMNS", 29: "id-block", 30: "end", 31: "NODE_ID", 34: "DIR", 35: "NODE_DSTART", 36: "NODE_DEND", 37: "BLOCK_ARROW_START", 38: "BLOCK_ARROW_END", 39: "classDef", 40: "CLASSDEF_ID", 41: "CLASSDEF_STYLEOPTS", 42: "DEFAULT", 43: "class", 44: "CLASSENTITY_IDS", 45: "STYLECLASS", 46: "style", 47: "STYLE_ENTITY_IDS", 48: "STYLE_DEFINITION_DATA" },
    productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [33, 1], [33, 2], [32, 3], [32, 4], [23, 3], [23, 3], [24, 3], [25, 3]],
    performAction: /* @__PURE__ */ p(function(y, g, f, m, E, h, W) {
      var p2 = h.length - 1;
      switch (E) {
        case 4:
          m.getLogger().debug("Rule: separator (NL) ");
          break;
        case 5:
          m.getLogger().debug("Rule: separator (Space) ");
          break;
        case 6:
          m.getLogger().debug("Rule: separator (EOF) ");
          break;
        case 7:
          m.getLogger().debug("Rule: hierarchy: ", h[p2 - 1]), m.setHierarchy(h[p2 - 1]);
          break;
        case 8:
          m.getLogger().debug("Stop NL ");
          break;
        case 9:
          m.getLogger().debug("Stop EOF ");
          break;
        case 10:
          m.getLogger().debug("Stop NL2 ");
          break;
        case 11:
          m.getLogger().debug("Stop EOF2 ");
          break;
        case 12:
          m.getLogger().debug("Rule: statement: ", h[p2]), typeof h[p2].length == "number" ? this.$ = h[p2] : this.$ = [h[p2]];
          break;
        case 13:
          m.getLogger().debug("Rule: statement #2: ", h[p2 - 1]), this.$ = [h[p2 - 1]].concat(h[p2]);
          break;
        case 14:
          m.getLogger().debug("Rule: link: ", h[p2], y), this.$ = { edgeTypeStr: h[p2], label: "" };
          break;
        case 15:
          m.getLogger().debug("Rule: LABEL link: ", h[p2 - 3], h[p2 - 1], h[p2]), this.$ = { edgeTypeStr: h[p2], label: h[p2 - 1] };
          break;
        case 18:
          const I = parseInt(h[p2]), Z = m.generateId();
          this.$ = { id: Z, type: "space", label: "", width: I, children: [] };
          break;
        case 23:
          m.getLogger().debug("Rule: (nodeStatement link node) ", h[p2 - 2], h[p2 - 1], h[p2], " typestr: ", h[p2 - 1].edgeTypeStr);
          const V = m.edgeStrToEdgeData(h[p2 - 1].edgeTypeStr);
          this.$ = [
            { id: h[p2 - 2].id, label: h[p2 - 2].label, type: h[p2 - 2].type, directions: h[p2 - 2].directions },
            { id: h[p2 - 2].id + "-" + h[p2].id, start: h[p2 - 2].id, end: h[p2].id, label: h[p2 - 1].label, type: "edge", directions: h[p2].directions, arrowTypeEnd: V, arrowTypeStart: "arrow_open" },
            { id: h[p2].id, label: h[p2].label, type: m.typeStr2Type(h[p2].typeStr), directions: h[p2].directions }
          ];
          break;
        case 24:
          m.getLogger().debug("Rule: nodeStatement (abc88 node size) ", h[p2 - 1], h[p2]), this.$ = { id: h[p2 - 1].id, label: h[p2 - 1].label, type: m.typeStr2Type(h[p2 - 1].typeStr), directions: h[p2 - 1].directions, widthInColumns: parseInt(h[p2], 10) };
          break;
        case 25:
          m.getLogger().debug("Rule: nodeStatement (node) ", h[p2]), this.$ = { id: h[p2].id, label: h[p2].label, type: m.typeStr2Type(h[p2].typeStr), directions: h[p2].directions, widthInColumns: 1 };
          break;
        case 26:
          m.getLogger().debug("APA123", this ? this : "na"), m.getLogger().debug("COLUMNS: ", h[p2]), this.$ = { type: "column-setting", columns: h[p2] === "auto" ? -1 : parseInt(h[p2]) };
          break;
        case 27:
          m.getLogger().debug("Rule: id-block statement : ", h[p2 - 2], h[p2 - 1]), m.generateId(), this.$ = { ...h[p2 - 2], type: "composite", children: h[p2 - 1] };
          break;
        case 28:
          m.getLogger().debug("Rule: blockStatement : ", h[p2 - 2], h[p2 - 1], h[p2]);
          const at = m.generateId();
          this.$ = { id: at, type: "composite", label: "", children: h[p2 - 1] };
          break;
        case 29:
          m.getLogger().debug("Rule: node (NODE_ID separator): ", h[p2]), this.$ = { id: h[p2] };
          break;
        case 30:
          m.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", h[p2 - 1], h[p2]), this.$ = { id: h[p2 - 1], label: h[p2].label, typeStr: h[p2].typeStr, directions: h[p2].directions };
          break;
        case 31:
          m.getLogger().debug("Rule: dirList: ", h[p2]), this.$ = [h[p2]];
          break;
        case 32:
          m.getLogger().debug("Rule: dirList: ", h[p2 - 1], h[p2]), this.$ = [h[p2 - 1]].concat(h[p2]);
          break;
        case 33:
          m.getLogger().debug("Rule: nodeShapeNLabel: ", h[p2 - 2], h[p2 - 1], h[p2]), this.$ = { typeStr: h[p2 - 2] + h[p2], label: h[p2 - 1] };
          break;
        case 34:
          m.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", h[p2 - 3], h[p2 - 2], " #3:", h[p2 - 1], h[p2]), this.$ = { typeStr: h[p2 - 3] + h[p2], label: h[p2 - 2], directions: h[p2 - 1] };
          break;
        case 35:
        case 36:
          this.$ = { type: "classDef", id: h[p2 - 1].trim(), css: h[p2].trim() };
          break;
        case 37:
          this.$ = { type: "applyClass", id: h[p2 - 1].trim(), styleClass: h[p2].trim() };
          break;
        case 38:
          this.$ = { type: "applyStyles", id: h[p2 - 1].trim(), stylesStr: h[p2].trim() };
          break;
      }
    }, "anonymous"),
    table: [{ 9: 1, 10: [1, 2] }, { 1: [3] }, { 10: t2, 11: 3, 13: 4, 19: 5, 20: 6, 21: a3, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: i, 29: l2, 31: s, 39: r, 43: n, 46: c }, { 8: [1, 20] }, e(u, [2, 12], { 13: 4, 19: 5, 20: 6, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 11: 21, 10: t2, 21: a3, 28: i, 29: l2, 31: s, 39: r, 43: n, 46: c }), e(o, [2, 16], { 14: 22, 15: x, 16: w }), e(o, [2, 17]), e(o, [2, 18]), e(o, [2, 19]), e(o, [2, 20]), e(o, [2, 21]), e(o, [2, 22]), e(b, [2, 25], { 27: [1, 25] }), e(o, [2, 26]), { 19: 26, 26: 12, 31: s }, { 10: t2, 11: 27, 13: 4, 19: 5, 20: 6, 21: a3, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: i, 29: l2, 31: s, 39: r, 43: n, 46: c }, { 40: [1, 28], 42: [1, 29] }, { 44: [1, 30] }, { 47: [1, 31] }, e(S, [2, 29], { 32: 32, 35: [1, 33], 37: [1, 34] }), { 1: [2, 7] }, e(u, [2, 13]), { 26: 35, 31: s }, { 31: [2, 14] }, { 17: [1, 36] }, e(b, [2, 24]), { 10: t2, 11: 37, 13: 4, 14: 22, 15: x, 16: w, 19: 5, 20: 6, 21: a3, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: i, 29: l2, 31: s, 39: r, 43: n, 46: c }, { 30: [1, 38] }, { 41: [1, 39] }, { 41: [1, 40] }, { 45: [1, 41] }, { 48: [1, 42] }, e(S, [2, 30]), { 18: [1, 43] }, { 18: [1, 44] }, e(b, [2, 23]), { 18: [1, 45] }, { 30: [1, 46] }, e(o, [2, 28]), e(o, [2, 35]), e(o, [2, 36]), e(o, [2, 37]), e(o, [2, 38]), { 36: [1, 47] }, { 33: 48, 34: v }, { 15: [1, 50] }, e(o, [2, 27]), e(S, [2, 33]), { 38: [1, 51] }, { 33: 52, 34: v, 38: [2, 31] }, { 31: [2, 15] }, e(S, [2, 34]), { 38: [2, 32] }],
    defaultActions: { 20: [2, 7], 23: [2, 14], 50: [2, 15], 52: [2, 32] },
    parseError: /* @__PURE__ */ p(function(y, g) {
      if (g.recoverable)
        this.trace(y);
      else {
        var f = new Error(y);
        throw f.hash = g, f;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(y) {
      var g = this, f = [0], m = [], E = [null], h = [], W = this.table, p$1 = "", I = 0, Z = 0, V = 2, at = 1, ne = h.slice.call(arguments, 1), z = Object.create(this.lexer), q = { yy: {} };
      for (var gt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, gt) && (q.yy[gt] = this.yy[gt]);
      z.setInput(y, q.yy), q.yy.lexer = z, q.yy.parser = this, typeof z.yylloc > "u" && (z.yylloc = {});
      var ut = z.yylloc;
      h.push(ut);
      var le = z.options && z.options.ranges;
      typeof q.yy.parseError == "function" ? this.parseError = q.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ce2(P) {
        f.length = f.length - 2 * P, E.length = E.length - P, h.length = h.length - P;
      }
      p(ce2, "popStack");
      function Nt() {
        var P;
        return P = m.pop() || z.lex() || at, typeof P != "number" && (P instanceof Array && (m = P, P = m.pop()), P = g.symbols_[P] || P), P;
      }
      p(Nt, "lex");
      for (var F2, J, H, pt, Q = {}, st, G, Tt, it; ; ) {
        if (J = f[f.length - 1], this.defaultActions[J] ? H = this.defaultActions[J] : ((F2 === null || typeof F2 > "u") && (F2 = Nt()), H = W[J] && W[J][F2]), typeof H > "u" || !H.length || !H[0]) {
          var ft2 = "";
          it = [];
          for (st in W[J])
            this.terminals_[st] && st > V && it.push("'" + this.terminals_[st] + "'");
          z.showPosition ? ft2 = "Parse error on line " + (I + 1) + `:
` + z.showPosition() + `
Expecting ` + it.join(", ") + ", got '" + (this.terminals_[F2] || F2) + "'" : ft2 = "Parse error on line " + (I + 1) + ": Unexpected " + (F2 == at ? "end of input" : "'" + (this.terminals_[F2] || F2) + "'"), this.parseError(ft2, {
            text: z.match,
            token: this.terminals_[F2] || F2,
            line: z.yylineno,
            loc: ut,
            expected: it
          });
        }
        if (H[0] instanceof Array && H.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + J + ", token: " + F2);
        switch (H[0]) {
          case 1:
            f.push(F2), E.push(z.yytext), h.push(z.yylloc), f.push(H[1]), F2 = null, Z = z.yyleng, p$1 = z.yytext, I = z.yylineno, ut = z.yylloc;
            break;
          case 2:
            if (G = this.productions_[H[1]][1], Q.$ = E[E.length - G], Q._$ = {
              first_line: h[h.length - (G || 1)].first_line,
              last_line: h[h.length - 1].last_line,
              first_column: h[h.length - (G || 1)].first_column,
              last_column: h[h.length - 1].last_column
            }, le && (Q._$.range = [
              h[h.length - (G || 1)].range[0],
              h[h.length - 1].range[1]
            ]), pt = this.performAction.apply(Q, [
              p$1,
              Z,
              I,
              q.yy,
              H[1],
              E,
              h
            ].concat(ne)), typeof pt < "u")
              return pt;
            G && (f = f.slice(0, -1 * G * 2), E = E.slice(0, -1 * G), h = h.slice(0, -1 * G)), f.push(this.productions_[H[1]][0]), E.push(Q.$), h.push(Q._$), Tt = W[f[f.length - 2]][f[f.length - 1]], f.push(Tt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, B = /* @__PURE__ */ (function() {
    var D = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(g, f) {
        if (this.yy.parser)
          this.yy.parser.parseError(g, f);
        else
          throw new Error(g);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(y, g) {
        return this.yy = g || this.yy || {}, this._input = y, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var y = this._input[0];
        this.yytext += y, this.yyleng++, this.offset++, this.match += y, this.matched += y;
        var g = y.match(/(?:\r\n?|\n).*/g);
        return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), y;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(y) {
        var g = y.length, f = y.split(/(?:\r\n?|\n)/g);
        this._input = y + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g), this.offset -= g;
        var m = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), f.length - 1 && (this.yylineno -= f.length - 1);
        var E = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: f ? (f.length === m.length ? this.yylloc.first_column : 0) + m[m.length - f.length].length - f[0].length : this.yylloc.first_column - g
        }, this.options.ranges && (this.yylloc.range = [E[0], E[0] + this.yyleng - g]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(y) {
        this.unput(this.match.slice(y));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var y = this.matched.substr(0, this.matched.length - this.match.length);
        return (y.length > 20 ? "..." : "") + y.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var y = this.match;
        return y.length < 20 && (y += this._input.substr(0, 20 - y.length)), (y.substr(0, 20) + (y.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var y = this.pastInput(), g = new Array(y.length + 1).join("-");
        return y + this.upcomingInput() + `
` + g + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(y, g) {
        var f, m, E;
        if (this.options.backtrack_lexer && (E = {
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
        }, this.options.ranges && (E.yylloc.range = this.yylloc.range.slice(0))), m = y[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + y[0].length
        }, this.yytext += y[0], this.match += y[0], this.matches = y, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(y[0].length), this.matched += y[0], f = this.performAction.call(this, this.yy, this, g, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), f)
          return f;
        if (this._backtrack) {
          for (var h in E)
            this[h] = E[h];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var y, g, f, m;
        this._more || (this.yytext = "", this.match = "");
        for (var E = this._currentRules(), h = 0; h < E.length; h++)
          if (f = this._input.match(this.rules[E[h]]), f && (!g || f[0].length > g[0].length)) {
            if (g = f, m = h, this.options.backtrack_lexer) {
              if (y = this.test_match(f, E[h]), y !== false)
                return y;
              if (this._backtrack) {
                g = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return g ? (y = this.test_match(g, E[m]), y !== false ? y : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var g = this.next();
        return g || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(g) {
        this.conditionStack.push(g);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var g = this.conditionStack.length - 1;
        return g > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(g) {
        return g = this.conditionStack.length - 1 - Math.abs(g || 0), g >= 0 ? this.conditionStack[g] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(g) {
        this.begin(g);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: /* @__PURE__ */ p(function(g, f, m, E) {
        switch (m) {
          case 0:
            return g.getLogger().debug("Found block-beta"), 10;
          case 1:
            return g.getLogger().debug("Found id-block"), 29;
          case 2:
            return g.getLogger().debug("Found block"), 10;
          case 3:
            g.getLogger().debug(".", f.yytext);
            break;
          case 4:
            g.getLogger().debug("_", f.yytext);
            break;
          case 5:
            return 5;
          case 6:
            return f.yytext = -1, 28;
          case 7:
            return f.yytext = f.yytext.replace(/columns\s+/, ""), g.getLogger().debug("COLUMNS (LEX)", f.yytext), 28;
          case 8:
            this.pushState("md_string");
            break;
          case 9:
            return "MD_STR";
          case 10:
            this.popState();
            break;
          case 11:
            this.pushState("string");
            break;
          case 12:
            g.getLogger().debug("LEX: POPPING STR:", f.yytext), this.popState();
            break;
          case 13:
            return g.getLogger().debug("LEX: STR end:", f.yytext), "STR";
          case 14:
            return f.yytext = f.yytext.replace(/space\:/, ""), g.getLogger().debug("SPACE NUM (LEX)", f.yytext), 21;
          case 15:
            return f.yytext = "1", g.getLogger().debug("COLUMNS (LEX)", f.yytext), 21;
          case 16:
            return 42;
          case 17:
            return "LINKSTYLE";
          case 18:
            return "INTERPOLATE";
          case 19:
            return this.pushState("CLASSDEF"), 39;
          case 20:
            return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
          case 21:
            return this.popState(), this.pushState("CLASSDEFID"), 40;
          case 22:
            return this.popState(), 41;
          case 23:
            return this.pushState("CLASS"), 43;
          case 24:
            return this.popState(), this.pushState("CLASS_STYLE"), 44;
          case 25:
            return this.popState(), 45;
          case 26:
            return this.pushState("STYLE_STMNT"), 46;
          case 27:
            return this.popState(), this.pushState("STYLE_DEFINITION"), 47;
          case 28:
            return this.popState(), 48;
          case 29:
            return this.pushState("acc_title"), "acc_title";
          case 30:
            return this.popState(), "acc_title_value";
          case 31:
            return this.pushState("acc_descr"), "acc_descr";
          case 32:
            return this.popState(), "acc_descr_value";
          case 33:
            this.pushState("acc_descr_multiline");
            break;
          case 34:
            this.popState();
            break;
          case 35:
            return "acc_descr_multiline_value";
          case 36:
            return 30;
          case 37:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 38:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 39:
            return this.popState(), g.getLogger().debug("Lex: ))"), "NODE_DEND";
          case 40:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 41:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 42:
            return this.popState(), g.getLogger().debug("Lex: (-"), "NODE_DEND";
          case 43:
            return this.popState(), g.getLogger().debug("Lex: -)"), "NODE_DEND";
          case 44:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 45:
            return this.popState(), g.getLogger().debug("Lex: ]]"), "NODE_DEND";
          case 46:
            return this.popState(), g.getLogger().debug("Lex: ("), "NODE_DEND";
          case 47:
            return this.popState(), g.getLogger().debug("Lex: ])"), "NODE_DEND";
          case 48:
            return this.popState(), g.getLogger().debug("Lex: /]"), "NODE_DEND";
          case 49:
            return this.popState(), g.getLogger().debug("Lex: /]"), "NODE_DEND";
          case 50:
            return this.popState(), g.getLogger().debug("Lex: )]"), "NODE_DEND";
          case 51:
            return this.popState(), g.getLogger().debug("Lex: )"), "NODE_DEND";
          case 52:
            return this.popState(), g.getLogger().debug("Lex: ]>"), "NODE_DEND";
          case 53:
            return this.popState(), g.getLogger().debug("Lex: ]"), "NODE_DEND";
          case 54:
            return g.getLogger().debug("Lexa: -)"), this.pushState("NODE"), 35;
          case 55:
            return g.getLogger().debug("Lexa: (-"), this.pushState("NODE"), 35;
          case 56:
            return g.getLogger().debug("Lexa: ))"), this.pushState("NODE"), 35;
          case 57:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
          case 58:
            return g.getLogger().debug("Lex: ((("), this.pushState("NODE"), 35;
          case 59:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
          case 60:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
          case 61:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
          case 62:
            return g.getLogger().debug("Lexc: >"), this.pushState("NODE"), 35;
          case 63:
            return g.getLogger().debug("Lexa: (["), this.pushState("NODE"), 35;
          case 64:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
          case 65:
            return this.pushState("NODE"), 35;
          case 66:
            return this.pushState("NODE"), 35;
          case 67:
            return this.pushState("NODE"), 35;
          case 68:
            return this.pushState("NODE"), 35;
          case 69:
            return this.pushState("NODE"), 35;
          case 70:
            return this.pushState("NODE"), 35;
          case 71:
            return this.pushState("NODE"), 35;
          case 72:
            return g.getLogger().debug("Lexa: ["), this.pushState("NODE"), 35;
          case 73:
            return this.pushState("BLOCK_ARROW"), g.getLogger().debug("LEX ARR START"), 37;
          case 74:
            return g.getLogger().debug("Lex: NODE_ID", f.yytext), 31;
          case 75:
            return g.getLogger().debug("Lex: EOF", f.yytext), 8;
          case 76:
            this.pushState("md_string");
            break;
          case 77:
            this.pushState("md_string");
            break;
          case 78:
            return "NODE_DESCR";
          case 79:
            this.popState();
            break;
          case 80:
            g.getLogger().debug("Lex: Starting string"), this.pushState("string");
            break;
          case 81:
            g.getLogger().debug("LEX ARR: Starting string"), this.pushState("string");
            break;
          case 82:
            return g.getLogger().debug("LEX: NODE_DESCR:", f.yytext), "NODE_DESCR";
          case 83:
            g.getLogger().debug("LEX POPPING"), this.popState();
            break;
          case 84:
            g.getLogger().debug("Lex: =>BAE"), this.pushState("ARROW_DIR");
            break;
          case 85:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (right): dir:", f.yytext), "DIR";
          case 86:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (left):", f.yytext), "DIR";
          case 87:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (x):", f.yytext), "DIR";
          case 88:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (y):", f.yytext), "DIR";
          case 89:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (up):", f.yytext), "DIR";
          case 90:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (down):", f.yytext), "DIR";
          case 91:
            return f.yytext = "]>", g.getLogger().debug("Lex (ARROW_DIR end):", f.yytext), this.popState(), this.popState(), "BLOCK_ARROW_END";
          case 92:
            return g.getLogger().debug("Lex: LINK", "#" + f.yytext + "#"), 15;
          case 93:
            return g.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 94:
            return g.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 95:
            return g.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 96:
            return g.getLogger().debug("Lex: START_LINK", f.yytext), this.pushState("LLABEL"), 16;
          case 97:
            return g.getLogger().debug("Lex: START_LINK", f.yytext), this.pushState("LLABEL"), 16;
          case 98:
            return g.getLogger().debug("Lex: START_LINK", f.yytext), this.pushState("LLABEL"), 16;
          case 99:
            this.pushState("md_string");
            break;
          case 100:
            return g.getLogger().debug("Lex: Starting string"), this.pushState("string"), "LINK_LABEL";
          case 101:
            return this.popState(), g.getLogger().debug("Lex: LINK", "#" + f.yytext + "#"), 15;
          case 102:
            return this.popState(), g.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 103:
            return this.popState(), g.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 104:
            return g.getLogger().debug("Lex: COLON", f.yytext), f.yytext = f.yytext.slice(1), 27;
        }
      }, "anonymous"),
      rules: [/^(?:block-beta\b)/, /^(?:block:)/, /^(?:block\b)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/],
      conditions: { STYLE_DEFINITION: { rules: [28], inclusive: false }, STYLE_STMNT: { rules: [27], inclusive: false }, CLASSDEFID: { rules: [22], inclusive: false }, CLASSDEF: { rules: [20, 21], inclusive: false }, CLASS_STYLE: { rules: [25], inclusive: false }, CLASS: { rules: [24], inclusive: false }, LLABEL: { rules: [99, 100, 101, 102, 103], inclusive: false }, ARROW_DIR: { rules: [85, 86, 87, 88, 89, 90, 91], inclusive: false }, BLOCK_ARROW: { rules: [76, 81, 84], inclusive: false }, NODE: { rules: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 77, 80], inclusive: false }, md_string: { rules: [9, 10, 78, 79], inclusive: false }, space: { rules: [], inclusive: false }, string: { rules: [12, 13, 82, 83], inclusive: false }, acc_descr_multiline: { rules: [34, 35], inclusive: false }, acc_descr: { rules: [32], inclusive: false }, acc_title: { rules: [30], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 15, 16, 17, 18, 19, 23, 26, 29, 31, 33, 36, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 92, 93, 94, 95, 96, 97, 98, 104], inclusive: true } }
    };
    return D;
  })();
  k.lexer = B;
  function _() {
    this.yy = {};
  }
  return p(_, "Parser"), _.prototype = k, k.Parser = _, new _();
})();
bt.parser = bt;
var ve = bt, X = /* @__PURE__ */ new Map(), kt = [], wt = /* @__PURE__ */ new Map(), Bt = "color", Ct = "fill", Ee = "bgFill", Pt = ",", _e = ft(), ct = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ p((e) => Qr.sanitizeText(e, _e), "sanitizeText"), Ne = /* @__PURE__ */ p(function(e, t2 = "") {
  let a3 = ct.get(e);
  a3 || (a3 = { id: e, styles: [], textStyles: [] }, ct.set(e, a3)), t2?.split(Pt).forEach((i) => {
    const l2 = i.replace(/([^;]*);/, "$1").trim();
    if (RegExp(Bt).exec(i)) {
      const r = l2.replace(Ct, Ee).replace(Bt, Ct);
      a3.textStyles.push(r);
    }
    a3.styles.push(l2);
  });
}, "addStyleClass"), Te = /* @__PURE__ */ p(function(e, t2 = "") {
  const a3 = X.get(e);
  t2 != null && (a3.styles = t2.split(Pt));
}, "addStyle2Node"), Be = /* @__PURE__ */ p(function(e, t2) {
  e.split(",").forEach(function(a3) {
    let i = X.get(a3);
    if (i === void 0) {
      const l2 = a3.trim();
      i = { id: l2, type: "na", children: [] }, X.set(l2, i);
    }
    i.classes || (i.classes = []), i.classes.push(t2);
  });
}, "setCssClass"), Yt = /* @__PURE__ */ p((e, t2) => {
  const a$1 = e.flat(), i = [], s = a$1.find((r) => r?.type === "column-setting")?.columns ?? -1;
  for (const r of a$1) {
    if (typeof s == "number" && s > 0 && r.type !== "column-setting" && typeof r.widthInColumns == "number" && r.widthInColumns > s && F.warn(
      `Block ${r.id} width ${r.widthInColumns} exceeds configured column width ${s}`
    ), r.label && (r.label = De(r.label)), r.type === "classDef") {
      Ne(r.id, r.css);
      continue;
    }
    if (r.type === "applyClass") {
      Be(r.id, r?.styleClass ?? "");
      continue;
    }
    if (r.type === "applyStyles") {
      r?.stylesStr && Te(r.id, r?.stylesStr);
      continue;
    }
    if (r.type === "column-setting")
      t2.columns = r.columns ?? -1;
    else if (r.type === "edge") {
      const n = (wt.get(r.id) ?? 0) + 1;
      wt.set(r.id, n), r.id = n + "-" + r.id, kt.push(r);
    } else {
      r.label || (r.type === "composite" ? r.label = "" : r.label = r.id);
      const n = X.get(r.id);
      if (n === void 0 ? X.set(r.id, r) : (r.type !== "na" && (n.type = r.type), r.label !== r.id && (n.label = r.label)), r.children && Yt(r.children, r), r.type === "space") {
        const c = r.width ?? 1;
        for (let u = 0; u < c; u++) {
          const o = a(r);
          o.id = o.id + "-" + u, X.set(o.id, o), i.push(o);
        }
      } else n === void 0 && i.push(r);
    }
  }
  t2.children = i;
}, "populateBlockDatabase"), vt = [], et = { id: "root", type: "composite", children: [], columns: -1 }, Ce = /* @__PURE__ */ p(() => {
  F.debug("Clear called"), By(), et = { id: "root", type: "composite", children: [], columns: -1 }, X = /* @__PURE__ */ new Map([["root", et]]), vt = [], ct = /* @__PURE__ */ new Map(), kt = [], wt = /* @__PURE__ */ new Map();
}, "clear");
function Ht(e) {
  switch (F.debug("typeStr2Type", e), e) {
    case "[]":
      return "square";
    case "()":
      return F.debug("we have a round"), "round";
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
p(Ht, "typeStr2Type");
function Kt(e) {
  return F.debug("typeStr2Type", e), e === "==" ? "thick" : "normal";
}
p(Kt, "edgeTypeStr2Type");
function Xt(e) {
  switch (e.replace(/^[\s-]+|[\s-]+$/g, "")) {
    case "x":
      return "arrow_cross";
    case "o":
      return "arrow_circle";
    case ">":
      return "arrow_point";
    default:
      return "";
  }
}
p(Xt, "edgeStrToEdgeData");
var It = 0, Ie = /* @__PURE__ */ p(() => (It++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + It), "generateId"), Oe = /* @__PURE__ */ p((e) => {
  et.children = e, Yt(e, et), vt = et.children;
}, "setHierarchy"), Re = /* @__PURE__ */ p((e) => {
  const t2 = X.get(e);
  return t2 ? t2.columns ? t2.columns : t2.children ? t2.children.length : -1 : -1;
}, "getColumns"), ze = /* @__PURE__ */ p(() => [...X.values()], "getBlocksFlat"), Ae = /* @__PURE__ */ p(() => vt || [], "getBlocks"), Me = /* @__PURE__ */ p(() => kt, "getEdges"), Fe = /* @__PURE__ */ p((e) => X.get(e), "getBlock"), We = /* @__PURE__ */ p((e) => {
  X.set(e.id, e);
}, "setBlock"), Pe = /* @__PURE__ */ p(() => F, "getLogger"), Ye = /* @__PURE__ */ p(function() {
  return ct;
}, "getClasses"), He = {
  getConfig: /* @__PURE__ */ p(() => Dt$1().block, "getConfig"),
  typeStr2Type: Ht,
  edgeTypeStr2Type: Kt,
  edgeStrToEdgeData: Xt,
  getLogger: Pe,
  getBlocksFlat: ze,
  getBlocks: Ae,
  getEdges: Me,
  setHierarchy: Oe,
  getBlock: Fe,
  setBlock: We,
  getColumns: Re,
  getClasses: Ye,
  clear: Ce,
  generateId: Ie
}, Ke = He, nt = /* @__PURE__ */ p((e, t$1) => {
  const a3 = t, i = a3(e, "r"), l2 = a3(e, "g"), s = a3(e, "b");
  return Ai(i, l2, s, t$1);
}, "fade"), Xe = /* @__PURE__ */ p((e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${nt(e.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${nt(e.mainBkg, 0.5)};
    fill: ${nt(e.clusterBkg, 0.5)};
    stroke: ${nt(e.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  ${l()}
`, "getStyles"), Ue = Xe, je = /* @__PURE__ */ p((e, t2, a3, i) => {
  t2.forEach((l2) => {
    rr[l2](e, a3, i);
  });
}, "insertMarkers"), Ve = /* @__PURE__ */ p((e, t2, a3) => {
  F.trace("Making markers for ", a3), e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-extensionStart").attr("class", "marker extension " + t2).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-extensionEnd").attr("class", "marker extension " + t2).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), Ge = /* @__PURE__ */ p((e, t2, a3) => {
  e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-compositionStart").attr("class", "marker composition " + t2).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-compositionEnd").attr("class", "marker composition " + t2).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), Ze = /* @__PURE__ */ p((e, t2, a3) => {
  e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-aggregationStart").attr("class", "marker aggregation " + t2).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-aggregationEnd").attr("class", "marker aggregation " + t2).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), qe = /* @__PURE__ */ p((e, t2, a3) => {
  e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-dependencyStart").attr("class", "marker dependency " + t2).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-dependencyEnd").attr("class", "marker dependency " + t2).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), Je = /* @__PURE__ */ p((e, t2, a3) => {
  e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-lollipopStart").attr("class", "marker lollipop " + t2).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-lollipopEnd").attr("class", "marker lollipop " + t2).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), Qe = /* @__PURE__ */ p((e, t2, a3) => {
  e.append("marker").attr("id", a3 + "_" + t2 + "-pointEnd").attr("class", "marker " + t2).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", a3 + "_" + t2 + "-pointStart").attr("class", "marker " + t2).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), $e = /* @__PURE__ */ p((e, t2, a3) => {
  e.append("marker").attr("id", a3 + "_" + t2 + "-circleEnd").attr("class", "marker " + t2).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", a3 + "_" + t2 + "-circleStart").attr("class", "marker " + t2).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), tr = /* @__PURE__ */ p((e, t2, a3) => {
  e.append("marker").attr("id", a3 + "_" + t2 + "-crossEnd").attr("class", "marker cross " + t2).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", a3 + "_" + t2 + "-crossStart").attr("class", "marker cross " + t2).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), er = /* @__PURE__ */ p((e, t2, a3) => {
  e.append("defs").append("marker").attr("id", a3 + "_" + t2 + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), rr = {
  extension: Ve,
  composition: Ge,
  aggregation: Ze,
  dependency: qe,
  lollipop: Je,
  point: Qe,
  circle: $e,
  cross: tr,
  barb: er
}, ar = je, C = ft()?.block?.padding ?? 8;
function Ut(e, t2) {
  if (e === 0 || !Number.isInteger(e))
    throw new Error("Columns must be an integer !== 0.");
  if (t2 < 0 || !Number.isInteger(t2))
    throw new Error("Position must be a non-negative integer." + t2);
  if (e < 0)
    return { px: t2, py: 0 };
  if (e === 1)
    return { px: 0, py: t2 };
  const a3 = t2 % e, i = Math.floor(t2 / e);
  return { px: a3, py: i };
}
p(Ut, "calculateBlockPosition");
var sr = /* @__PURE__ */ p((e) => {
  let t2 = 0, a3 = 0;
  for (const i of e.children) {
    const { width: l2, height: s, x: r, y: n } = i.size ?? { width: 0, height: 0, x: 0, y: 0 };
    F.debug(
      "getMaxChildSize abc95 child:",
      i.id,
      "width:",
      l2,
      "height:",
      s,
      "x:",
      r,
      "y:",
      n,
      i.type
    ), i.type !== "space" && (l2 > t2 && (t2 = l2 / (e.widthInColumns ?? 1)), s > a3 && (a3 = s));
  }
  return { width: t2, height: a3 };
}, "getMaxChildSize");
function ot(e, t2, a3 = 0, i = 0) {
  F.debug(
    "setBlockSizes abc95 (start)",
    e.id,
    e?.size?.x,
    "block width =",
    e?.size,
    "siblingWidth",
    a3
  ), e?.size?.width || (e.size = {
    width: a3,
    height: i,
    x: 0,
    y: 0
  });
  let l2 = 0, s = 0;
  if (e.children?.length > 0) {
    for (const b of e.children)
      ot(b, t2);
    const r = sr(e);
    l2 = r.width, s = r.height, F.debug("setBlockSizes abc95 maxWidth of", e.id, ":s children is ", l2, s);
    for (const b of e.children)
      b.size && (F.debug(
        `abc95 Setting size of children of ${e.id} id=${b.id} ${l2} ${s} ${JSON.stringify(b.size)}`
      ), b.size.width = l2 * (b.widthInColumns ?? 1) + C * ((b.widthInColumns ?? 1) - 1), b.size.height = s, b.size.x = 0, b.size.y = 0, F.debug(
        `abc95 updating size of ${e.id} children child:${b.id} maxWidth:${l2} maxHeight:${s}`
      ));
    for (const b of e.children)
      ot(b, t2, l2, s);
    const n = e.columns ?? -1;
    let c = 0;
    for (const b of e.children)
      c += b.widthInColumns ?? 1;
    let u = e.children.length;
    n > 0 && n < c && (u = n);
    const o = Math.ceil(c / u);
    let x = u * (l2 + C) + C, w = o * (s + C) + C;
    if (x < a3) {
      F.debug(
        `Detected to small sibling: abc95 ${e.id} siblingWidth ${a3} siblingHeight ${i} width ${x}`
      ), x = a3, w = i;
      const b = (a3 - u * C - C) / u, S = (i - o * C - C) / o;
      F.debug("Size indata abc88", e.id, "childWidth", b, "maxWidth", l2), F.debug("Size indata abc88", e.id, "childHeight", S, "maxHeight", s), F.debug("Size indata abc88 xSize", u, "padding", C);
      for (const v of e.children)
        v.size && (v.size.width = b, v.size.height = S, v.size.x = 0, v.size.y = 0);
    }
    if (F.debug(
      `abc95 (finale calc) ${e.id} xSize ${u} ySize ${o} columns ${n}${e.children.length} width=${Math.max(x, e.size?.width || 0)}`
    ), x < (e?.size?.width || 0)) {
      x = e?.size?.width || 0;
      const b = n > 0 ? Math.min(e.children.length, n) : e.children.length;
      if (b > 0) {
        const S = (x - b * C - C) / b;
        F.debug("abc95 (growing to fit) width", e.id, x, e.size?.width, S);
        for (const v of e.children)
          v.size && (v.size.width = S);
      }
    }
    e.size = {
      width: x,
      height: w,
      x: 0,
      y: 0
    };
  }
  F.debug(
    "setBlockSizes abc94 (done)",
    e.id,
    e?.size?.x,
    e?.size?.width,
    e?.size?.y,
    e?.size?.height
  );
}
p(ot, "setBlockSizes");
function Et(e, t2) {
  F.debug(
    `abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`
  );
  const a3 = e.columns ?? -1;
  if (F.debug("layoutBlocks columns abc95", e.id, "=>", a3, e), e.children && // find max width of children
  e.children.length > 0) {
    const i = e?.children[0]?.size?.width ?? 0, l2 = e.children.length * i + (e.children.length - 1) * C;
    F.debug("widthOfChildren 88", l2, "posX");
    let s = 0;
    F.debug("abc91 block?.size?.x", e.id, e?.size?.x);
    let r = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -C, n = 0;
    for (const c of e.children) {
      const u = e;
      if (!c.size)
        continue;
      const { width: o, height: x } = c.size, { px: w, py: b } = Ut(a3, s);
      if (b != n && (n = b, r = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -C, F.debug("New row in layout for block", e.id, " and child ", c.id, n)), F.debug(
        `abc89 layout blocks (child) id: ${c.id} Pos: ${s} (px, py) ${w},${b} (${u?.size?.x},${u?.size?.y}) parent: ${u.id} width: ${o}${C}`
      ), u.size) {
        const v = o / 2;
        c.size.x = r + C + v, F.debug(
          `abc91 layout blocks (calc) px, pyid:${c.id} startingPos=X${r} new startingPosX${c.size.x} ${v} padding=${C} width=${o} halfWidth=${v} => x:${c.size.x} y:${c.size.y} ${c.widthInColumns} (width * (child?.w || 1)) / 2 ${o * (c?.widthInColumns ?? 1) / 2}`
        ), r = c.size.x + v, c.size.y = u.size.y - u.size.height / 2 + b * (x + C) + x / 2 + C, F.debug(
          `abc88 layout blocks (calc) px, pyid:${c.id}startingPosX${r}${C}${v}=>x:${c.size.x}y:${c.size.y}${c.widthInColumns}(width * (child?.w || 1)) / 2${o * (c?.widthInColumns ?? 1) / 2}`
        );
      }
      c.children && Et(c);
      let S = c?.widthInColumns ?? 1;
      a3 > 0 && (S = Math.min(S, a3 - s % a3)), s += S, F.debug("abc88 columnsPos", c, s);
    }
  }
  F.debug(
    `layout blocks (<==layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`
  );
}
p(Et, "layoutBlocks");
function _t(e, { minX: t2, minY: a3, maxX: i, maxY: l2 } = { minX: 0, minY: 0, maxX: 0, maxY: 0 }) {
  if (e.size && e.id !== "root") {
    const { x: s, y: r, width: n, height: c } = e.size;
    s - n / 2 < t2 && (t2 = s - n / 2), r - c / 2 < a3 && (a3 = r - c / 2), s + n / 2 > i && (i = s + n / 2), r + c / 2 > l2 && (l2 = r + c / 2);
  }
  if (e.children)
    for (const s of e.children)
      ({ minX: t2, minY: a3, maxX: i, maxY: l2 } = _t(s, { minX: t2, minY: a3, maxX: i, maxY: l2 }));
  return { minX: t2, minY: a3, maxX: i, maxY: l2 };
}
p(_t, "findBounds");
function jt(e) {
  const t2 = e.getBlock("root");
  if (!t2)
    return;
  ot(t2, e, 0, 0), Et(t2), F.debug("getBlocks", JSON.stringify(t2, null, 2));
  const { minX: a3, minY: i, maxX: l2, maxY: s } = _t(t2), r = s - i, n = l2 - a3;
  return { x: a3, y: i, width: n, height: r };
}
p(jt, "layout");
function mt(e, t2) {
  t2 && e.attr("style", t2);
}
p(mt, "applyStyle");
function Vt(e, t2) {
  const a3 = ht$1(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), i = a3.append("xhtml:div"), l2 = e.label, s = e.isNode ? "nodeLabel" : "edgeLabel", r = i.append("span");
  return r.html(te$1(l2, t2)), mt(r, e.labelStyle), r.attr("class", s), mt(i, e.labelStyle), i.style("display", "inline-block"), i.style("white-space", "nowrap"), i.attr("xmlns", "http://www.w3.org/1999/xhtml"), a3.node();
}
p(Vt, "addHtmlLabel");
var ir = /* @__PURE__ */ p(async (e, t2, a3, i) => {
  let l2 = e || "";
  typeof l2 == "object" && (l2 = l2[0]);
  const s = ft();
  if (Bt$1(s.flowchart.htmlLabels)) {
    l2 = l2.replace(/\\n|\n/g, "<br />"), F.debug("vertexText" + l2);
    const r = await Cp(Cr$1(l2)), n = {
      isNode: i,
      label: r,
      labelStyle: t2.replace("fill:", "color:")
    };
    return Vt(n, s);
  } else {
    const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
    r.setAttribute("style", t2.replace("color:", "fill:"));
    let n = [];
    typeof l2 == "string" ? n = l2.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(l2) ? n = l2 : n = [];
    for (const c of n) {
      const u = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      u.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), u.setAttribute("dy", "1em"), u.setAttribute("x", "0"), a3 ? u.setAttribute("class", "title-row") : u.setAttribute("class", "row"), u.textContent = c.trim(), r.appendChild(u);
    }
    return r;
  }
}, "createLabel"), K = ir, nr = /* @__PURE__ */ p((e, t2, a3, i, l2) => {
  t2.arrowTypeStart && Ot(e, "start", t2.arrowTypeStart, a3, i, l2), t2.arrowTypeEnd && Ot(e, "end", t2.arrowTypeEnd, a3, i, l2);
}, "addEdgeMarkers"), lr = {
  arrow_cross: "cross",
  arrow_point: "point",
  arrow_barb: "barb",
  arrow_circle: "circle",
  aggregation: "aggregation",
  extension: "extension",
  composition: "composition",
  dependency: "dependency",
  lollipop: "lollipop"
}, Ot = /* @__PURE__ */ p((e, t2, a3, i, l2, s) => {
  const r = lr[a3];
  if (!r) {
    F.warn(`Unknown arrow type: ${a3}`);
    return;
  }
  const n = t2 === "start" ? "Start" : "End";
  e.attr(`marker-${t2}`, `url(${i}#${l2}_${s}-${r}${n})`);
}, "addEdgeMarker"), Lt = {}, M = {}, cr = /* @__PURE__ */ p(async (e, t2) => {
  const a3 = ft(), i = Bt$1(a3.flowchart.htmlLabels), l2 = t2.labelType === "markdown" ? Xe$1(
    e,
    t2.label,
    {
      style: t2.labelStyle,
      useHtmlLabels: i,
      addSvgBackground: true
    },
    a3
  ) : await K(t2.label, t2.labelStyle), s = e.insert("g").attr("class", "edgeLabel"), r = s.insert("g").attr("class", "label");
  r.node().appendChild(l2);
  let n = l2.getBBox();
  if (i) {
    const u = l2.children[0], o = ht$1(l2);
    n = u.getBoundingClientRect(), o.attr("width", n.width), o.attr("height", n.height);
  }
  r.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")"), Lt[t2.id] = s, t2.width = n.width, t2.height = n.height;
  let c;
  if (t2.startLabelLeft) {
    const u = await K(t2.startLabelLeft, t2.labelStyle), o = e.insert("g").attr("class", "edgeTerminals"), x = o.insert("g").attr("class", "inner");
    c = x.node().appendChild(u);
    const w = u.getBBox();
    x.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), M[t2.id] || (M[t2.id] = {}), M[t2.id].startLeft = o, tt(c, t2.startLabelLeft);
  }
  if (t2.startLabelRight) {
    const u = await K(t2.startLabelRight, t2.labelStyle), o = e.insert("g").attr("class", "edgeTerminals"), x = o.insert("g").attr("class", "inner");
    c = o.node().appendChild(u), x.node().appendChild(u);
    const w = u.getBBox();
    x.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), M[t2.id] || (M[t2.id] = {}), M[t2.id].startRight = o, tt(c, t2.startLabelRight);
  }
  if (t2.endLabelLeft) {
    const u = await K(t2.endLabelLeft, t2.labelStyle), o = e.insert("g").attr("class", "edgeTerminals"), x = o.insert("g").attr("class", "inner");
    c = x.node().appendChild(u);
    const w = u.getBBox();
    x.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), o.node().appendChild(u), M[t2.id] || (M[t2.id] = {}), M[t2.id].endLeft = o, tt(c, t2.endLabelLeft);
  }
  if (t2.endLabelRight) {
    const u = await K(t2.endLabelRight, t2.labelStyle), o = e.insert("g").attr("class", "edgeTerminals"), x = o.insert("g").attr("class", "inner");
    c = x.node().appendChild(u);
    const w = u.getBBox();
    x.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), o.node().appendChild(u), M[t2.id] || (M[t2.id] = {}), M[t2.id].endRight = o, tt(c, t2.endLabelRight);
  }
  return l2;
}, "insertEdgeLabel");
function tt(e, t2) {
  ft().flowchart.htmlLabels && e && (e.style.width = t2.length * 9 + "px", e.style.height = "12px");
}
p(tt, "setTerminalWidth");
var or = /* @__PURE__ */ p((e, t2) => {
  F.debug("Moving label abc88 ", e.id, e.label, Lt[e.id], t2);
  let a3 = t2.updatedPath ? t2.updatedPath : t2.originalPath;
  const i = ft(), { subGraphTitleTotalMargin: l2 } = Jo(i);
  if (e.label) {
    const s = Lt[e.id];
    let r = e.x, n = e.y;
    if (a3) {
      const c = ce.calcLabelPosition(a3);
      F.debug(
        "Moving label " + e.label + " from (",
        r,
        ",",
        n,
        ") to (",
        c.x,
        ",",
        c.y,
        ") abc88"
      ), t2.updatedPath && (r = c.x, n = c.y);
    }
    s.attr("transform", `translate(${r}, ${n + l2 / 2})`);
  }
  if (e.startLabelLeft) {
    const s = M[e.id].startLeft;
    let r = e.x, n = e.y;
    if (a3) {
      const c = ce.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", a3);
      r = c.x, n = c.y;
    }
    s.attr("transform", `translate(${r}, ${n})`);
  }
  if (e.startLabelRight) {
    const s = M[e.id].startRight;
    let r = e.x, n = e.y;
    if (a3) {
      const c = ce.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        a3
      );
      r = c.x, n = c.y;
    }
    s.attr("transform", `translate(${r}, ${n})`);
  }
  if (e.endLabelLeft) {
    const s = M[e.id].endLeft;
    let r = e.x, n = e.y;
    if (a3) {
      const c = ce.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", a3);
      r = c.x, n = c.y;
    }
    s.attr("transform", `translate(${r}, ${n})`);
  }
  if (e.endLabelRight) {
    const s = M[e.id].endRight;
    let r = e.x, n = e.y;
    if (a3) {
      const c = ce.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", a3);
      r = c.x, n = c.y;
    }
    s.attr("transform", `translate(${r}, ${n})`);
  }
}, "positionEdgeLabel"), hr = /* @__PURE__ */ p((e, t2) => {
  const a3 = e.x, i = e.y, l2 = Math.abs(t2.x - a3), s = Math.abs(t2.y - i), r = e.width / 2, n = e.height / 2;
  return l2 >= r || s >= n;
}, "outsideNode"), dr = /* @__PURE__ */ p((e, t2, a3) => {
  F.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t2)}
  insidePoint : ${JSON.stringify(a3)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, l2 = e.y, s = Math.abs(i - a3.x), r = e.width / 2;
  let n = a3.x < t2.x ? r - s : r + s;
  const c = e.height / 2, u = Math.abs(t2.y - a3.y), o = Math.abs(t2.x - a3.x);
  if (Math.abs(l2 - t2.y) * r > Math.abs(i - t2.x) * c) {
    let x = a3.y < t2.y ? t2.y - c - l2 : l2 - c - t2.y;
    n = o * x / u;
    const w = {
      x: a3.x < t2.x ? a3.x + n : a3.x - o + n,
      y: a3.y < t2.y ? a3.y + u - x : a3.y - u + x
    };
    return n === 0 && (w.x = t2.x, w.y = t2.y), o === 0 && (w.x = t2.x), u === 0 && (w.y = t2.y), F.debug(`abc89 topp/bott calc, Q ${u}, q ${x}, R ${o}, r ${n}`, w), w;
  } else {
    a3.x < t2.x ? n = t2.x - r - i : n = i - r - t2.x;
    let x = u * n / o, w = a3.x < t2.x ? a3.x + o - n : a3.x - o + n, b = a3.y < t2.y ? a3.y + x : a3.y - x;
    return F.debug(`sides calc abc89, Q ${u}, q ${x}, R ${o}, r ${n}`, { _x: w, _y: b }), n === 0 && (w = t2.x, b = t2.y), o === 0 && (w = t2.x), u === 0 && (b = t2.y), { x: w, y: b };
  }
}, "intersection"), Rt = /* @__PURE__ */ p((e, t2) => {
  F.debug("abc88 cutPathAtIntersect", e, t2);
  let a3 = [], i = e[0], l2 = false;
  return e.forEach((s) => {
    if (!hr(t2, s) && !l2) {
      const r = dr(t2, i, s);
      let n = false;
      a3.forEach((c) => {
        n = n || c.x === r.x && c.y === r.y;
      }), a3.some((c) => c.x === r.x && c.y === r.y) || a3.push(r), l2 = true;
    } else
      i = s, l2 || a3.push(s);
  }), a3;
}, "cutPathAtIntersect"), gr = /* @__PURE__ */ p(function(e, t2, a3, i, l2, s, r) {
  let n = a3.points;
  F.debug("abc88 InsertEdge: edge=", a3, "e=", t2);
  let c = false;
  const u = s.node(t2.v);
  var o = s.node(t2.w);
  o?.intersect && u?.intersect && (n = n.slice(1, a3.points.length - 1), n.unshift(u.intersect(n[0])), n.push(o.intersect(n[n.length - 1]))), a3.toCluster && (F.debug("to cluster abc88", i[a3.toCluster]), n = Rt(a3.points, i[a3.toCluster].node), c = true), a3.fromCluster && (F.debug("from cluster abc88", i[a3.fromCluster]), n = Rt(n.reverse(), i[a3.fromCluster].node).reverse(), c = true);
  const x = n.filter((y) => !Number.isNaN(y.y));
  let w = Ln;
  a3.curve && (l2 === "graph" || l2 === "flowchart") && (w = a3.curve);
  const { x: b, y: S } = wC(a3), v = a2().x(b).y(S).curve(w);
  let k;
  switch (a3.thickness) {
    case "normal":
      k = "edge-thickness-normal";
      break;
    case "thick":
      k = "edge-thickness-thick";
      break;
    case "invisible":
      k = "edge-thickness-thick";
      break;
    default:
      k = "";
  }
  switch (a3.pattern) {
    case "solid":
      k += " edge-pattern-solid";
      break;
    case "dotted":
      k += " edge-pattern-dotted";
      break;
    case "dashed":
      k += " edge-pattern-dashed";
      break;
  }
  const B = e.append("path").attr("d", v(x)).attr("id", a3.id).attr("class", " " + k + (a3.classes ? " " + a3.classes : "")).attr("style", a3.style);
  let _ = "";
  (ft().flowchart.arrowMarkerAbsolute || ft().state.arrowMarkerAbsolute) && (_ = gy(true)), nr(B, a3, _, r, l2);
  let D = {};
  return c && (D.updatedPath = n), D.originalPath = a3.points, D;
}, "insertEdge"), ur = /* @__PURE__ */ p((e) => {
  const t2 = /* @__PURE__ */ new Set();
  for (const a3 of e)
    switch (a3) {
      case "x":
        t2.add("right"), t2.add("left");
        break;
      case "y":
        t2.add("up"), t2.add("down");
        break;
      default:
        t2.add(a3);
        break;
    }
  return t2;
}, "expandAndDeduplicateDirections"), pr = /* @__PURE__ */ p((e, t2, a3) => {
  const i = ur(e), l2 = 2, s = t2.height + 2 * a3.padding, r = s / l2, n = t2.width + 2 * r + a3.padding, c = a3.padding / 2;
  return i.has("right") && i.has("left") && i.has("up") && i.has("down") ? [
    // Bottom
    { x: 0, y: 0 },
    { x: r, y: 0 },
    { x: n / 2, y: 2 * c },
    { x: n - r, y: 0 },
    { x: n, y: 0 },
    // Right
    { x: n, y: -s / 3 },
    { x: n + 2 * c, y: -s / 2 },
    { x: n, y: -2 * s / 3 },
    { x: n, y: -s },
    // Top
    { x: n - r, y: -s },
    { x: n / 2, y: -s - 2 * c },
    { x: r, y: -s },
    // Left
    { x: 0, y: -s },
    { x: 0, y: -2 * s / 3 },
    { x: -2 * c, y: -s / 2 },
    { x: 0, y: -s / 3 }
  ] : i.has("right") && i.has("left") && i.has("up") ? [
    { x: r, y: 0 },
    { x: n - r, y: 0 },
    { x: n, y: -s / 2 },
    { x: n - r, y: -s },
    { x: r, y: -s },
    { x: 0, y: -s / 2 }
  ] : i.has("right") && i.has("left") && i.has("down") ? [
    { x: 0, y: 0 },
    { x: r, y: -s },
    { x: n - r, y: -s },
    { x: n, y: 0 }
  ] : i.has("right") && i.has("up") && i.has("down") ? [
    { x: 0, y: 0 },
    { x: n, y: -r },
    { x: n, y: -s + r },
    { x: 0, y: -s }
  ] : i.has("left") && i.has("up") && i.has("down") ? [
    { x: n, y: 0 },
    { x: 0, y: -r },
    { x: 0, y: -s + r },
    { x: n, y: -s }
  ] : i.has("right") && i.has("left") ? [
    { x: r, y: 0 },
    { x: r, y: -c },
    { x: n - r, y: -c },
    { x: n - r, y: 0 },
    { x: n, y: -s / 2 },
    { x: n - r, y: -s },
    { x: n - r, y: -s + c },
    { x: r, y: -s + c },
    { x: r, y: -s },
    { x: 0, y: -s / 2 }
  ] : i.has("up") && i.has("down") ? [
    // Bottom center
    { x: n / 2, y: 0 },
    // Left pont of bottom arrow
    { x: 0, y: -c },
    { x: r, y: -c },
    // Left top over vertical section
    { x: r, y: -s + c },
    { x: 0, y: -s + c },
    // Top of arrow
    { x: n / 2, y: -s },
    { x: n, y: -s + c },
    // Top of right vertical bar
    { x: n - r, y: -s + c },
    { x: n - r, y: -c },
    { x: n, y: -c }
  ] : i.has("right") && i.has("up") ? [
    { x: 0, y: 0 },
    { x: n, y: -r },
    { x: 0, y: -s }
  ] : i.has("right") && i.has("down") ? [
    { x: 0, y: 0 },
    { x: n, y: 0 },
    { x: 0, y: -s }
  ] : i.has("left") && i.has("up") ? [
    { x: n, y: 0 },
    { x: 0, y: -r },
    { x: n, y: -s }
  ] : i.has("left") && i.has("down") ? [
    { x: n, y: 0 },
    { x: 0, y: 0 },
    { x: n, y: -s }
  ] : i.has("right") ? [
    { x: r, y: -c },
    { x: r, y: -c },
    { x: n - r, y: -c },
    { x: n - r, y: 0 },
    { x: n, y: -s / 2 },
    { x: n - r, y: -s },
    { x: n - r, y: -s + c },
    // top left corner of arrow
    { x: r, y: -s + c },
    { x: r, y: -s + c }
  ] : i.has("left") ? [
    { x: r, y: 0 },
    { x: r, y: -c },
    // Two points, the right corners
    { x: n - r, y: -c },
    { x: n - r, y: -s + c },
    { x: r, y: -s + c },
    { x: r, y: -s },
    { x: 0, y: -s / 2 }
  ] : i.has("up") ? [
    // Bottom center
    { x: r, y: -c },
    // Left top over vertical section
    { x: r, y: -s + c },
    { x: 0, y: -s + c },
    // Top of arrow
    { x: n / 2, y: -s },
    { x: n, y: -s + c },
    // Top of right vertical bar
    { x: n - r, y: -s + c },
    { x: n - r, y: -c }
  ] : i.has("down") ? [
    // Bottom center
    { x: n / 2, y: 0 },
    // Left pont of bottom arrow
    { x: 0, y: -c },
    { x: r, y: -c },
    // Left top over vertical section
    { x: r, y: -s + c },
    { x: n - r, y: -s + c },
    { x: n - r, y: -c },
    { x: n, y: -c }
  ] : [{ x: 0, y: 0 }];
}, "getArrowPoints");
function Gt(e, t2) {
  return e.intersect(t2);
}
p(Gt, "intersectNode");
var fr = Gt;
function Zt(e, t2, a3, i) {
  var l2 = e.x, s = e.y, r = l2 - i.x, n = s - i.y, c = Math.sqrt(t2 * t2 * n * n + a3 * a3 * r * r), u = Math.abs(t2 * a3 * r / c);
  i.x < l2 && (u = -u);
  var o = Math.abs(t2 * a3 * n / c);
  return i.y < s && (o = -o), { x: l2 + u, y: s + o };
}
p(Zt, "intersectEllipse");
var qt = Zt;
function Jt(e, t2, a3) {
  return qt(e, t2, t2, a3);
}
p(Jt, "intersectCircle");
var xr = Jt;
function Qt(e, t2, a3, i) {
  var l2, s, r, n, c, u, o, x, w, b, S, v, k, B, _;
  if (l2 = t2.y - e.y, r = e.x - t2.x, c = t2.x * e.y - e.x * t2.y, w = l2 * a3.x + r * a3.y + c, b = l2 * i.x + r * i.y + c, !(w !== 0 && b !== 0 && St(w, b)) && (s = i.y - a3.y, n = a3.x - i.x, u = i.x * a3.y - a3.x * i.y, o = s * e.x + n * e.y + u, x = s * t2.x + n * t2.y + u, !(o !== 0 && x !== 0 && St(o, x)) && (S = l2 * n - s * r, S !== 0)))
    return v = Math.abs(S / 2), k = r * u - n * c, B = k < 0 ? (k - v) / S : (k + v) / S, k = s * c - l2 * u, _ = k < 0 ? (k - v) / S : (k + v) / S, { x: B, y: _ };
}
p(Qt, "intersectLine");
function St(e, t2) {
  return e * t2 > 0;
}
p(St, "sameSign");
var yr = Qt, br = $t;
function $t(e, t2, a3) {
  var i = e.x, l2 = e.y, s = [], r = Number.POSITIVE_INFINITY, n = Number.POSITIVE_INFINITY;
  typeof t2.forEach == "function" ? t2.forEach(function(S) {
    r = Math.min(r, S.x), n = Math.min(n, S.y);
  }) : (r = Math.min(r, t2.x), n = Math.min(n, t2.y));
  for (var c = i - e.width / 2 - r, u = l2 - e.height / 2 - n, o = 0; o < t2.length; o++) {
    var x = t2[o], w = t2[o < t2.length - 1 ? o + 1 : 0], b = yr(
      e,
      a3,
      { x: c + x.x, y: u + x.y },
      { x: c + w.x, y: u + w.y }
    );
    b && s.push(b);
  }
  return s.length ? (s.length > 1 && s.sort(function(S, v) {
    var k = S.x - a3.x, B = S.y - a3.y, _ = Math.sqrt(k * k + B * B), D = v.x - a3.x, y = v.y - a3.y, g = Math.sqrt(D * D + y * y);
    return _ < g ? -1 : _ === g ? 0 : 1;
  }), s[0]) : e;
}
p($t, "intersectPolygon");
var wr = /* @__PURE__ */ p((e, t2) => {
  var a3 = e.x, i = e.y, l2 = t2.x - a3, s = t2.y - i, r = e.width / 2, n = e.height / 2, c, u;
  return Math.abs(s) * r > Math.abs(l2) * n ? (s < 0 && (n = -n), c = s === 0 ? 0 : n * l2 / s, u = n) : (l2 < 0 && (r = -r), c = r, u = l2 === 0 ? 0 : r * s / l2), { x: a3 + c, y: i + u };
}, "intersectRect"), mr = wr, N = {
  node: fr,
  circle: xr,
  ellipse: qt,
  polygon: br,
  rect: mr
}, A = /* @__PURE__ */ p(async (e, t2, a3, i) => {
  const l2 = ft();
  let s;
  const r = t2.useHtmlLabels || Bt$1(l2.flowchart.htmlLabels);
  a3 ? s = a3 : s = "node default";
  const n = e.insert("g").attr("class", s).attr("id", t2.domId || t2.id), c = n.insert("g").attr("class", "label").attr("style", t2.labelStyle);
  let u;
  t2.labelText === void 0 ? u = "" : u = typeof t2.labelText == "string" ? t2.labelText : t2.labelText[0];
  const o = c.node();
  let x;
  t2.labelType === "markdown" ? x = Xe$1(
    c,
    te$1(Cr$1(u), l2),
    {
      useHtmlLabels: r,
      width: t2.width || l2.flowchart.wrappingWidth,
      classes: "markdown-node-label"
    },
    l2
  ) : x = o.appendChild(
    await K(
      te$1(Cr$1(u), l2),
      t2.labelStyle,
      false,
      i
    )
  );
  let w = x.getBBox();
  const b = t2.padding / 2;
  if (Bt$1(l2.flowchart.htmlLabels)) {
    const S = x.children[0], v = ht$1(x), k = S.getElementsByTagName("img");
    if (k) {
      const B = u.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...k].map(
          (_) => new Promise((D) => {
            function y() {
              if (_.style.display = "flex", _.style.flexDirection = "column", B) {
                const g = l2.fontSize ? l2.fontSize : window.getComputedStyle(document.body).fontSize, m = parseInt(g, 10) * 5 + "px";
                _.style.minWidth = m, _.style.maxWidth = m;
              } else
                _.style.width = "100%";
              D(_);
            }
            p(y, "setupImage"), setTimeout(() => {
              _.complete && y();
            }), _.addEventListener("error", y), _.addEventListener("load", y);
          })
        )
      );
    }
    w = S.getBoundingClientRect(), v.attr("width", w.width), v.attr("height", w.height);
  }
  return r ? c.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")") : c.attr("transform", "translate(0, " + -w.height / 2 + ")"), t2.centerLabel && c.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), c.insert("rect", ":first-child"), { shapeSvg: n, bbox: w, halfPadding: b, label: c };
}, "labelHelper"), T = /* @__PURE__ */ p((e, t2) => {
  const a3 = t2.node().getBBox();
  e.width = a3.width, e.height = a3.height;
}, "updateNodeBounds");
function U(e, t2, a3, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(l2) {
      return l2.x + "," + l2.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t2 / 2 + "," + a3 / 2 + ")");
}
p(U, "insertPolygonShape");
var Lr = /* @__PURE__ */ p(async (e, t2) => {
  t2.useHtmlLabels || ft().flowchart.htmlLabels || (t2.centerLabel = true);
  const { shapeSvg: i, bbox: l2, halfPadding: s } = await A(
    e,
    t2,
    "node " + t2.classes,
    true
  );
  F.info("Classes = ", t2.classes);
  const r = i.insert("rect", ":first-child");
  return r.attr("rx", t2.rx).attr("ry", t2.ry).attr("x", -l2.width / 2 - s).attr("y", -l2.height / 2 - s).attr("width", l2.width + t2.padding).attr("height", l2.height + t2.padding), T(t2, r), t2.intersect = function(n) {
    return N.rect(t2, n);
  }, i;
}, "note"), Sr = Lr, zt = /* @__PURE__ */ p((e) => e ? " " + e : "", "formatClass"), Y = /* @__PURE__ */ p((e, t2) => `${t2 || "node default"}${zt(e.classes)} ${zt(
  e.class
)}`, "getClassesFromNode"), At = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = i.width + t2.padding, s = i.height + t2.padding, r = l2 + s, n = [
    { x: r / 2, y: 0 },
    { x: r, y: -r / 2 },
    { x: r / 2, y: -r },
    { x: 0, y: -r / 2 }
  ];
  F.info("Question main (Circle)");
  const c = U(a3, r, r, n);
  return c.attr("style", t2.style), T(t2, c), t2.intersect = function(u) {
    return F.warn("Intersect called"), N.polygon(t2, n, u);
  }, a3;
}, "question"), kr = /* @__PURE__ */ p((e, t2) => {
  const a3 = e.insert("g").attr("class", "node default").attr("id", t2.domId || t2.id), i = 28, l2 = [
    { x: 0, y: i / 2 },
    { x: i / 2, y: 0 },
    { x: 0, y: -i / 2 },
    { x: -i / 2, y: 0 }
  ];
  return a3.insert("polygon", ":first-child").attr(
    "points",
    l2.map(function(r) {
      return r.x + "," + r.y;
    }).join(" ")
  ).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), t2.width = 28, t2.height = 28, t2.intersect = function(r) {
    return N.circle(t2, 14, r);
  }, a3;
}, "choice"), vr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = 4, s = i.height + t2.padding, r = s / l2, n = i.width + 2 * r + t2.padding, c = [
    { x: r, y: 0 },
    { x: n - r, y: 0 },
    { x: n, y: -s / 2 },
    { x: n - r, y: -s },
    { x: r, y: -s },
    { x: 0, y: -s / 2 }
  ], u = U(a3, n, s, c);
  return u.attr("style", t2.style), T(t2, u), t2.intersect = function(o) {
    return N.polygon(t2, c, o);
  }, a3;
}, "hexagon"), Er = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(e, t2, void 0, true), l2 = 2, s = i.height + 2 * t2.padding, r = s / l2, n = i.width + 2 * r + t2.padding, c = pr(t2.directions, i, t2), u = U(a3, n, s, c);
  return u.attr("style", t2.style), T(t2, u), t2.intersect = function(o) {
    return N.polygon(t2, c, o);
  }, a3;
}, "block_arrow"), _r = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = i.width + t2.padding, s = i.height + t2.padding, r = [
    { x: -s / 2, y: 0 },
    { x: l2, y: 0 },
    { x: l2, y: -s },
    { x: -s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  return U(a3, l2, s, r).attr("style", t2.style), t2.width = l2 + s, t2.height = s, t2.intersect = function(c) {
    return N.polygon(t2, r, c);
  }, a3;
}, "rect_left_inv_arrow"), Dr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(e, t2, Y(t2), true), l2 = i.width + t2.padding, s = i.height + t2.padding, r = [
    { x: -2 * s / 6, y: 0 },
    { x: l2 - s / 6, y: 0 },
    { x: l2 + 2 * s / 6, y: -s },
    { x: s / 6, y: -s }
  ], n = U(a3, l2, s, r);
  return n.attr("style", t2.style), T(t2, n), t2.intersect = function(c) {
    return N.polygon(t2, r, c);
  }, a3;
}, "lean_right"), Nr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = i.width + t2.padding, s = i.height + t2.padding, r = [
    { x: 2 * s / 6, y: 0 },
    { x: l2 + s / 6, y: 0 },
    { x: l2 - 2 * s / 6, y: -s },
    { x: -s / 6, y: -s }
  ], n = U(a3, l2, s, r);
  return n.attr("style", t2.style), T(t2, n), t2.intersect = function(c) {
    return N.polygon(t2, r, c);
  }, a3;
}, "lean_left"), Tr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = i.width + t2.padding, s = i.height + t2.padding, r = [
    { x: -2 * s / 6, y: 0 },
    { x: l2 + 2 * s / 6, y: 0 },
    { x: l2 - s / 6, y: -s },
    { x: s / 6, y: -s }
  ], n = U(a3, l2, s, r);
  return n.attr("style", t2.style), T(t2, n), t2.intersect = function(c) {
    return N.polygon(t2, r, c);
  }, a3;
}, "trapezoid"), Br = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = i.width + t2.padding, s = i.height + t2.padding, r = [
    { x: s / 6, y: 0 },
    { x: l2 - s / 6, y: 0 },
    { x: l2 + 2 * s / 6, y: -s },
    { x: -2 * s / 6, y: -s }
  ], n = U(a3, l2, s, r);
  return n.attr("style", t2.style), T(t2, n), t2.intersect = function(c) {
    return N.polygon(t2, r, c);
  }, a3;
}, "inv_trapezoid"), Cr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = i.width + t2.padding, s = i.height + t2.padding, r = [
    { x: 0, y: 0 },
    { x: l2 + s / 2, y: 0 },
    { x: l2, y: -s / 2 },
    { x: l2 + s / 2, y: -s },
    { x: 0, y: -s }
  ], n = U(a3, l2, s, r);
  return n.attr("style", t2.style), T(t2, n), t2.intersect = function(c) {
    return N.polygon(t2, r, c);
  }, a3;
}, "rect_right_inv_arrow"), Ir = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = i.width + t2.padding, s = l2 / 2, r = s / (2.5 + l2 / 50), n = i.height + r + t2.padding, c = "M 0," + r + " a " + s + "," + r + " 0,0,0 " + l2 + " 0 a " + s + "," + r + " 0,0,0 " + -l2 + " 0 l 0," + n + " a " + s + "," + r + " 0,0,0 " + l2 + " 0 l 0," + -n, u = a3.attr("label-offset-y", r).insert("path", ":first-child").attr("style", t2.style).attr("d", c).attr("transform", "translate(" + -l2 / 2 + "," + -(n / 2 + r) + ")");
  return T(t2, u), t2.intersect = function(o) {
    const x = N.rect(t2, o), w = x.x - t2.x;
    if (s != 0 && (Math.abs(w) < t2.width / 2 || Math.abs(w) == t2.width / 2 && Math.abs(x.y - t2.y) > t2.height / 2 - r)) {
      let b = r * r * (1 - w * w / (s * s));
      b != 0 && (b = Math.sqrt(b)), b = r - b, o.y - t2.y > 0 && (b = -b), x.y += b;
    }
    return x;
  }, a3;
}, "cylinder"), Or = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i, halfPadding: l2 } = await A(
    e,
    t2,
    "node " + t2.classes + " " + t2.class,
    true
  ), s = a3.insert("rect", ":first-child"), r = t2.positioned ? t2.width : i.width + t2.padding, n = t2.positioned ? t2.height : i.height + t2.padding, c = t2.positioned ? -r / 2 : -i.width / 2 - l2, u = t2.positioned ? -n / 2 : -i.height / 2 - l2;
  if (s.attr("class", "basic label-container").attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("x", c).attr("y", u).attr("width", r).attr("height", n), t2.props) {
    const o = new Set(Object.keys(t2.props));
    t2.props.borders && (ht(s, t2.props.borders, r, n), o.delete("borders")), o.forEach((x) => {
      F.warn(`Unknown node property ${x}`);
    });
  }
  return T(t2, s), t2.intersect = function(o) {
    return N.rect(t2, o);
  }, a3;
}, "rect"), Rr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i, halfPadding: l2 } = await A(
    e,
    t2,
    "node " + t2.classes,
    true
  ), s = a3.insert("rect", ":first-child"), r = t2.positioned ? t2.width : i.width + t2.padding, n = t2.positioned ? t2.height : i.height + t2.padding, c = t2.positioned ? -r / 2 : -i.width / 2 - l2, u = t2.positioned ? -n / 2 : -i.height / 2 - l2;
  if (s.attr("class", "basic cluster composite label-container").attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("x", c).attr("y", u).attr("width", r).attr("height", n), t2.props) {
    const o = new Set(Object.keys(t2.props));
    t2.props.borders && (ht(s, t2.props.borders, r, n), o.delete("borders")), o.forEach((x) => {
      F.warn(`Unknown node property ${x}`);
    });
  }
  return T(t2, s), t2.intersect = function(o) {
    return N.rect(t2, o);
  }, a3;
}, "composite"), zr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3 } = await A(e, t2, "label", true);
  F.trace("Classes = ", t2.class);
  const i = a3.insert("rect", ":first-child"), l2 = 0, s = 0;
  if (i.attr("width", l2).attr("height", s), a3.attr("class", "label edgeLabel"), t2.props) {
    const r = new Set(Object.keys(t2.props));
    t2.props.borders && (ht(i, t2.props.borders, l2, s), r.delete("borders")), r.forEach((n) => {
      F.warn(`Unknown node property ${n}`);
    });
  }
  return T(t2, i), t2.intersect = function(r) {
    return N.rect(t2, r);
  }, a3;
}, "labelRect");
function ht(e, t2, a3, i) {
  const l2 = [], s = /* @__PURE__ */ p((n) => {
    l2.push(n, 0);
  }, "addBorder"), r = /* @__PURE__ */ p((n) => {
    l2.push(0, n);
  }, "skipBorder");
  t2.includes("t") ? (F.debug("add top border"), s(a3)) : r(a3), t2.includes("r") ? (F.debug("add right border"), s(i)) : r(i), t2.includes("b") ? (F.debug("add bottom border"), s(a3)) : r(a3), t2.includes("l") ? (F.debug("add left border"), s(i)) : r(i), e.attr("stroke-dasharray", l2.join(" "));
}
p(ht, "applyNodePropertyBorders");
var Ar = /* @__PURE__ */ p(async (e, t2) => {
  let a3;
  t2.classes ? a3 = "node " + t2.classes : a3 = "node default";
  const i = e.insert("g").attr("class", a3).attr("id", t2.domId || t2.id), l2 = i.insert("rect", ":first-child"), s = i.insert("line"), r = i.insert("g").attr("class", "label"), n = t2.labelText.flat ? t2.labelText.flat() : t2.labelText;
  let c = "";
  typeof n == "object" ? c = n[0] : c = n, F.info("Label text abc79", c, n, typeof n == "object");
  const u = r.node().appendChild(await K(c, t2.labelStyle, true, true));
  let o = { width: 0, height: 0 };
  if (Bt$1(ft().flowchart.htmlLabels)) {
    const v = u.children[0], k = ht$1(u);
    o = v.getBoundingClientRect(), k.attr("width", o.width), k.attr("height", o.height);
  }
  F.info("Text 2", n);
  const x = n.slice(1, n.length);
  let w = u.getBBox();
  const b = r.node().appendChild(
    await K(
      x.join ? x.join("<br/>") : x,
      t2.labelStyle,
      true,
      true
    )
  );
  if (Bt$1(ft().flowchart.htmlLabels)) {
    const v = b.children[0], k = ht$1(b);
    o = v.getBoundingClientRect(), k.attr("width", o.width), k.attr("height", o.height);
  }
  const S = t2.padding / 2;
  return ht$1(b).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (o.width > w.width ? 0 : (w.width - o.width) / 2) + ", " + (w.height + S + 5) + ")"
  ), ht$1(u).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (o.width < w.width ? 0 : -(w.width - o.width) / 2) + ", 0)"
  ), o = r.node().getBBox(), r.attr(
    "transform",
    "translate(" + -o.width / 2 + ", " + (-o.height / 2 - S + 3) + ")"
  ), l2.attr("class", "outer title-state").attr("x", -o.width / 2 - S).attr("y", -o.height / 2 - S).attr("width", o.width + t2.padding).attr("height", o.height + t2.padding), s.attr("class", "divider").attr("x1", -o.width / 2 - S).attr("x2", o.width / 2 + S).attr("y1", -o.height / 2 - S + w.height + S).attr("y2", -o.height / 2 - S + w.height + S), T(t2, l2), t2.intersect = function(v) {
    return N.rect(t2, v);
  }, i;
}, "rectWithTitle"), Mr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = i.height + t2.padding, s = i.width + l2 / 4 + t2.padding, r = a3.insert("rect", ":first-child").attr("style", t2.style).attr("rx", l2 / 2).attr("ry", l2 / 2).attr("x", -s / 2).attr("y", -l2 / 2).attr("width", s).attr("height", l2);
  return T(t2, r), t2.intersect = function(n) {
    return N.rect(t2, n);
  }, a3;
}, "stadium"), Fr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i, halfPadding: l2 } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), s = a3.insert("circle", ":first-child");
  return s.attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("r", i.width / 2 + l2).attr("width", i.width + t2.padding).attr("height", i.height + t2.padding), F.info("Circle main"), T(t2, s), t2.intersect = function(r) {
    return F.info("Circle intersect", t2, i.width / 2 + l2, r), N.circle(t2, i.width / 2 + l2, r);
  }, a3;
}, "circle"), Wr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i, halfPadding: l2 } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), s = 5, r = a3.insert("g", ":first-child"), n = r.insert("circle"), c = r.insert("circle");
  return r.attr("class", t2.class), n.attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("r", i.width / 2 + l2 + s).attr("width", i.width + t2.padding + s * 2).attr("height", i.height + t2.padding + s * 2), c.attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("r", i.width / 2 + l2).attr("width", i.width + t2.padding).attr("height", i.height + t2.padding), F.info("DoubleCircle main"), T(t2, n), t2.intersect = function(u) {
    return F.info("DoubleCircle intersect", t2, i.width / 2 + l2 + s, u), N.circle(t2, i.width / 2 + l2 + s, u);
  }, a3;
}, "doublecircle"), Pr = /* @__PURE__ */ p(async (e, t2) => {
  const { shapeSvg: a3, bbox: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), l2 = i.width + t2.padding, s = i.height + t2.padding, r = [
    { x: 0, y: 0 },
    { x: l2, y: 0 },
    { x: l2, y: -s },
    { x: 0, y: -s },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: l2 + 8, y: 0 },
    { x: l2 + 8, y: -s },
    { x: -8, y: -s },
    { x: -8, y: 0 }
  ], n = U(a3, l2, s, r);
  return n.attr("style", t2.style), T(t2, n), t2.intersect = function(c) {
    return N.polygon(t2, r, c);
  }, a3;
}, "subroutine"), Yr = /* @__PURE__ */ p((e, t2) => {
  const a3 = e.insert("g").attr("class", "node default").attr("id", t2.domId || t2.id), i = a3.insert("circle", ":first-child");
  return i.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), T(t2, i), t2.intersect = function(l2) {
    return N.circle(t2, 7, l2);
  }, a3;
}, "start"), Mt = /* @__PURE__ */ p((e, t2, a3) => {
  const i = e.insert("g").attr("class", "node default").attr("id", t2.domId || t2.id);
  let l2 = 70, s = 10;
  a3 === "LR" && (l2 = 10, s = 70);
  const r = i.append("rect").attr("x", -1 * l2 / 2).attr("y", -1 * s / 2).attr("width", l2).attr("height", s).attr("class", "fork-join");
  return T(t2, r), t2.height = t2.height + t2.padding / 2, t2.width = t2.width + t2.padding / 2, t2.intersect = function(n) {
    return N.rect(t2, n);
  }, i;
}, "forkJoin"), Hr = /* @__PURE__ */ p((e, t2) => {
  const a3 = e.insert("g").attr("class", "node default").attr("id", t2.domId || t2.id), i = a3.insert("circle", ":first-child"), l2 = a3.insert("circle", ":first-child");
  return l2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), i.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), T(t2, l2), t2.intersect = function(s) {
    return N.circle(t2, 7, s);
  }, a3;
}, "end"), Kr = /* @__PURE__ */ p(async (e, t2) => {
  const a3 = t2.padding / 2, i = 4, l2 = 8;
  let s;
  t2.classes ? s = "node " + t2.classes : s = "node default";
  const r = e.insert("g").attr("class", s).attr("id", t2.domId || t2.id), n = r.insert("rect", ":first-child"), c = r.insert("line"), u = r.insert("line");
  let o = 0, x = i;
  const w = r.insert("g").attr("class", "label");
  let b = 0;
  const S = t2.classData.annotations?.[0], v = t2.classData.annotations[0] ? "«" + t2.classData.annotations[0] + "»" : "", k = w.node().appendChild(await K(v, t2.labelStyle, true, true));
  let B = k.getBBox();
  if (Bt$1(ft().flowchart.htmlLabels)) {
    const E = k.children[0], h = ht$1(k);
    B = E.getBoundingClientRect(), h.attr("width", B.width), h.attr("height", B.height);
  }
  t2.classData.annotations[0] && (x += B.height + i, o += B.width);
  let _ = t2.classData.label;
  t2.classData.type !== void 0 && t2.classData.type !== "" && (ft().flowchart.htmlLabels ? _ += "&lt;" + t2.classData.type + "&gt;" : _ += "<" + t2.classData.type + ">");
  const D = w.node().appendChild(await K(_, t2.labelStyle, true, true));
  ht$1(D).attr("class", "classTitle");
  let y = D.getBBox();
  if (Bt$1(ft().flowchart.htmlLabels)) {
    const E = D.children[0], h = ht$1(D);
    y = E.getBoundingClientRect(), h.attr("width", y.width), h.attr("height", y.height);
  }
  x += y.height + i, y.width > o && (o = y.width);
  const g = [];
  t2.classData.members.forEach(async (E) => {
    const h = E.getDisplayDetails();
    let W = h.displayText;
    ft().flowchart.htmlLabels && (W = W.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const p2 = w.node().appendChild(
      await K(
        W,
        h.cssStyle ? h.cssStyle : t2.labelStyle,
        true,
        true
      )
    );
    let I = p2.getBBox();
    if (Bt$1(ft().flowchart.htmlLabels)) {
      const Z = p2.children[0], V = ht$1(p2);
      I = Z.getBoundingClientRect(), V.attr("width", I.width), V.attr("height", I.height);
    }
    I.width > o && (o = I.width), x += I.height + i, g.push(p2);
  }), x += l2;
  const f = [];
  if (t2.classData.methods.forEach(async (E) => {
    const h = E.getDisplayDetails();
    let W = h.displayText;
    ft().flowchart.htmlLabels && (W = W.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const p2 = w.node().appendChild(
      await K(
        W,
        h.cssStyle ? h.cssStyle : t2.labelStyle,
        true,
        true
      )
    );
    let I = p2.getBBox();
    if (Bt$1(ft().flowchart.htmlLabels)) {
      const Z = p2.children[0], V = ht$1(p2);
      I = Z.getBoundingClientRect(), V.attr("width", I.width), V.attr("height", I.height);
    }
    I.width > o && (o = I.width), x += I.height + i, f.push(p2);
  }), x += l2, S) {
    let E = (o - B.width) / 2;
    ht$1(k).attr(
      "transform",
      "translate( " + (-1 * o / 2 + E) + ", " + -1 * x / 2 + ")"
    ), b = B.height + i;
  }
  let m = (o - y.width) / 2;
  return ht$1(D).attr(
    "transform",
    "translate( " + (-1 * o / 2 + m) + ", " + (-1 * x / 2 + b) + ")"
  ), b += y.height + i, c.attr("class", "divider").attr("x1", -o / 2 - a3).attr("x2", o / 2 + a3).attr("y1", -x / 2 - a3 + l2 + b).attr("y2", -x / 2 - a3 + l2 + b), b += l2, g.forEach((E) => {
    ht$1(E).attr(
      "transform",
      "translate( " + -o / 2 + ", " + (-1 * x / 2 + b + l2 / 2) + ")"
    );
    const h = E?.getBBox();
    b += (h?.height ?? 0) + i;
  }), b += l2, u.attr("class", "divider").attr("x1", -o / 2 - a3).attr("x2", o / 2 + a3).attr("y1", -x / 2 - a3 + l2 + b).attr("y2", -x / 2 - a3 + l2 + b), b += l2, f.forEach((E) => {
    ht$1(E).attr(
      "transform",
      "translate( " + -o / 2 + ", " + (-1 * x / 2 + b) + ")"
    );
    const h = E?.getBBox();
    b += (h?.height ?? 0) + i;
  }), n.attr("style", t2.style).attr("class", "outer title-state").attr("x", -o / 2 - a3).attr("y", -(x / 2) - a3).attr("width", o + t2.padding).attr("height", x + t2.padding), T(t2, n), t2.intersect = function(E) {
    return N.rect(t2, E);
  }, r;
}, "class_box"), Ft = {
  rhombus: At,
  composite: Rr,
  question: At,
  rect: Or,
  labelRect: zr,
  rectWithTitle: Ar,
  choice: kr,
  circle: Fr,
  doublecircle: Wr,
  stadium: Mr,
  hexagon: vr,
  block_arrow: Er,
  rect_left_inv_arrow: _r,
  lean_right: Dr,
  lean_left: Nr,
  trapezoid: Tr,
  inv_trapezoid: Br,
  rect_right_inv_arrow: Cr,
  cylinder: Ir,
  start: Yr,
  end: Hr,
  note: Sr,
  subroutine: Pr,
  fork: Mt,
  join: Mt,
  class_box: Kr
}, lt = {}, te = /* @__PURE__ */ p(async (e, t2, a3) => {
  let i, l2;
  if (t2.link) {
    let s;
    ft().securityLevel === "sandbox" ? s = "_top" : t2.linkTarget && (s = t2.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t2.link).attr("target", s), l2 = await Ft[t2.shape](i, t2, a3);
  } else
    l2 = await Ft[t2.shape](e, t2, a3), i = l2;
  return t2.tooltip && l2.attr("title", t2.tooltip), t2.class && l2.attr("class", "node default " + t2.class), lt[t2.id] = i, t2.haveCallback && lt[t2.id].attr("class", lt[t2.id].attr("class") + " clickable"), i;
}, "insertNode"), Xr = /* @__PURE__ */ p((e) => {
  const t2 = lt[e.id];
  F.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const a3 = 8, i = e.diff || 0;
  return e.clusterNode ? t2.attr(
    "transform",
    "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - a3) + ")"
  ) : t2.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode");
function Dt(e, t2, a3 = false) {
  const i = e;
  let l2 = "default";
  (i?.classes?.length || 0) > 0 && (l2 = (i?.classes ?? []).join(" ")), l2 = l2 + " flowchart-label";
  let s = 0, r = "", n;
  switch (i.type) {
    case "round":
      s = 5, r = "rect";
      break;
    case "composite":
      s = 0, r = "composite", n = 0;
      break;
    case "square":
      r = "rect";
      break;
    case "diamond":
      r = "question";
      break;
    case "hexagon":
      r = "hexagon";
      break;
    case "block_arrow":
      r = "block_arrow";
      break;
    case "odd":
      r = "rect_left_inv_arrow";
      break;
    case "lean_right":
      r = "lean_right";
      break;
    case "lean_left":
      r = "lean_left";
      break;
    case "trapezoid":
      r = "trapezoid";
      break;
    case "inv_trapezoid":
      r = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      r = "rect_left_inv_arrow";
      break;
    case "circle":
      r = "circle";
      break;
    case "ellipse":
      r = "ellipse";
      break;
    case "stadium":
      r = "stadium";
      break;
    case "subroutine":
      r = "subroutine";
      break;
    case "cylinder":
      r = "cylinder";
      break;
    case "group":
      r = "rect";
      break;
    case "doublecircle":
      r = "doublecircle";
      break;
    default:
      r = "rect";
  }
  const c = Ud(i?.styles ?? []), u = i.label, o = i.size ?? { width: 0, height: 0, x: 0, y: 0 };
  return {
    labelStyle: c.labelStyle,
    shape: r,
    labelText: u,
    rx: s,
    ry: s,
    class: l2,
    style: c.style,
    id: i.id,
    directions: i.directions,
    width: o.width,
    height: o.height,
    x: o.x,
    y: o.y,
    positioned: a3,
    intersect: void 0,
    type: i.type,
    padding: n ?? Dt$1()?.block?.padding ?? 0
  };
}
p(Dt, "getNodeFromBlock");
async function ee(e, t2, a3) {
  const i = Dt(t2, a3, false);
  if (i.type === "group")
    return;
  const l2 = Dt$1(), s = await te(e, i, { config: l2 }), r = s.node().getBBox(), n = a3.getBlock(i.id);
  n.size = { width: r.width, height: r.height, x: 0, y: 0, node: s }, a3.setBlock(n), s.remove();
}
p(ee, "calculateBlockSize");
async function re(e, t2, a3) {
  const i = Dt(t2, a3, true);
  if (a3.getBlock(i.id).type !== "space") {
    const s = Dt$1();
    await te(e, i, { config: s }), t2.intersect = i?.intersect, Xr(i);
  }
}
p(re, "insertBlockPositioned");
async function dt(e, t2, a3, i) {
  for (const l2 of t2)
    await i(e, l2, a3), l2.children && await dt(e, l2.children, a3, i);
}
p(dt, "performOperations");
async function ae(e, t2, a3) {
  await dt(e, t2, a3, ee);
}
p(ae, "calculateBlockSizes");
async function se(e, t2, a3) {
  await dt(e, t2, a3, re);
}
p(se, "insertBlocks");
async function ie(e, t2, a3, i, l2) {
  const s = new X$1({
    multigraph: true,
    compound: true
  });
  s.setGraph({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8
  });
  for (const r of a3)
    r.size && s.setNode(r.id, {
      width: r.size.width,
      height: r.size.height,
      intersect: r.intersect
    });
  for (const r of t2)
    if (r.start && r.end) {
      const n = i.getBlock(r.start), c = i.getBlock(r.end);
      if (n?.size && c?.size) {
        const u = n.size, o = c.size, x = [
          { x: u.x, y: u.y },
          { x: u.x + (o.x - u.x) / 2, y: u.y + (o.y - u.y) / 2 },
          { x: o.x, y: o.y }
        ];
        gr(
          e,
          { v: r.start, w: r.end, name: r.id },
          {
            ...r,
            arrowTypeEnd: r.arrowTypeEnd,
            arrowTypeStart: r.arrowTypeStart,
            points: x,
            classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
          },
          void 0,
          "block",
          s,
          l2
        ), r.label && (await cr(e, {
          ...r,
          label: r.label,
          labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
          arrowTypeEnd: r.arrowTypeEnd,
          arrowTypeStart: r.arrowTypeStart,
          points: x,
          classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
        }), or(
          { ...r, x: x[1].x, y: x[1].y },
          {
            originalPath: x
          }
        ));
      }
    }
}
p(ie, "insertEdges");
var Ur = /* @__PURE__ */ p(function(e, t2) {
  return t2.db.getClasses();
}, "getClasses"), jr = /* @__PURE__ */ p(async function(e, t2, a3, i) {
  const { securityLevel: l2, block: s } = Dt$1(), r = i.db;
  let n;
  l2 === "sandbox" && (n = ht$1("#i" + t2));
  const c = l2 === "sandbox" ? ht$1(n.nodes()[0].contentDocument.body) : ht$1("body"), u = l2 === "sandbox" ? c.select(`[id="${t2}"]`) : ht$1(`[id="${t2}"]`);
  ar(u, ["point", "circle", "cross"], i.type, t2);
  const x = r.getBlocks(), w = r.getBlocksFlat(), b = r.getEdges(), S = u.insert("g").attr("class", "block");
  await ae(S, x, r);
  const v = jt(r);
  if (await se(S, x, r), await ie(S, b, w, r, t2), v) {
    const k = v, B = Math.max(1, Math.round(0.125 * (k.width / k.height))), _ = k.height + B + 10, D = k.width + 10, { useMaxWidth: y } = s;
    Gh(u, _, D, !!y), F.debug("Here Bounds", v, k), u.attr(
      "viewBox",
      `${k.x - 5} ${k.y - 5} ${k.width + 10} ${k.height + 10}`
    );
  }
}, "draw"), Vr = {
  draw: jr,
  getClasses: Ur
}, $r = {
  parser: ve,
  db: Ke,
  renderer: Vr,
  styles: Ue
};
export {
  $r as diagram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tEaWFncmFtLVZENDJZT0FDLUJwRG1JSFRvLUQxNDVLdHc5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLW1lcm1haWQtc3RyaW5nL2Rpc3QvYmxvY2tEaWFncmFtLVZENDJZT0FDLUJwRG1JSFRvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGcgYXMgb2UgfSBmcm9tIFwiLi9jaHVuay1GTUJEN1VDNC1Ca2ZmaW1kRC5qc1wiO1xuaW1wb3J0IHsgXyBhcyBkLCBFIGFzIHJ0LCBkIGFzIE8sIGUgYXMgaGUsIGwgYXMgTCwgeSBhcyBkZSwgQSBhcyBnZSwgYyBhcyBSLCBhaSBhcyB1ZSwgUiBhcyBwZSwgUyBhcyBmZSwgTyBhcyB4ZSwgYWogYXMgaiwgYWsgYXMgV3QsIGFsIGFzIHllLCB1IGFzICQsIGsgYXMgYmUsIGFtIGFzIHdlLCBhbiBhcyB4dCwgaSBhcyB5dCwgYW8gYXMgbWUgfSBmcm9tIFwiLi9lbnRyeS1CMlZYLWt4YS5qc1wiO1xuaW1wb3J0IHsgYyBhcyBMZSB9IGZyb20gXCIuL2Nsb25lLUNiU0JwY2VPLmpzXCI7XG5pbXBvcnQgeyBHIGFzIFNlIH0gZnJvbSBcIi4vZ3JhcGgtQ1ZWTFRyaG4uanNcIjtcbmltcG9ydCB7IGMgYXMga2UgfSBmcm9tIFwiLi9jaGFubmVsLThhaVR5SEpWLmpzXCI7XG52YXIgYnQgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBlID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oRCwgeSwgZywgZikge1xuICAgIGZvciAoZyA9IGcgfHwge30sIGYgPSBELmxlbmd0aDsgZi0tOyBnW0RbZl1dID0geSkgO1xuICAgIHJldHVybiBnO1xuICB9LCBcIm9cIiksIHQgPSBbMSwgMTVdLCBhID0gWzEsIDddLCBpID0gWzEsIDEzXSwgbCA9IFsxLCAxNF0sIHMgPSBbMSwgMTldLCByID0gWzEsIDE2XSwgbiA9IFsxLCAxN10sIGMgPSBbMSwgMThdLCB1ID0gWzgsIDMwXSwgbyA9IFs4LCAxMCwgMjEsIDI4LCAyOSwgMzAsIDMxLCAzOSwgNDMsIDQ2XSwgeCA9IFsxLCAyM10sIHcgPSBbMSwgMjRdLCBiID0gWzgsIDEwLCAxNSwgMTYsIDIxLCAyOCwgMjksIDMwLCAzMSwgMzksIDQzLCA0Nl0sIFMgPSBbOCwgMTAsIDE1LCAxNiwgMjEsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzksIDQzLCA0Nl0sIHYgPSBbMSwgNDldLCBrID0ge1xuICAgIHRyYWNlOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgICB9LCBcInRyYWNlXCIpLFxuICAgIHl5OiB7fSxcbiAgICBzeW1ib2xzXzogeyBlcnJvcjogMiwgc3BhY2VMaW5lczogMywgU1BBQ0VMSU5FOiA0LCBOTDogNSwgc2VwYXJhdG9yOiA2LCBTUEFDRTogNywgRU9GOiA4LCBzdGFydDogOSwgQkxPQ0tfRElBR1JBTV9LRVk6IDEwLCBkb2N1bWVudDogMTEsIHN0b3A6IDEyLCBzdGF0ZW1lbnQ6IDEzLCBsaW5rOiAxNCwgTElOSzogMTUsIFNUQVJUX0xJTks6IDE2LCBMSU5LX0xBQkVMOiAxNywgU1RSOiAxOCwgbm9kZVN0YXRlbWVudDogMTksIGNvbHVtbnNTdGF0ZW1lbnQ6IDIwLCBTUEFDRV9CTE9DSzogMjEsIGJsb2NrU3RhdGVtZW50OiAyMiwgY2xhc3NEZWZTdGF0ZW1lbnQ6IDIzLCBjc3NDbGFzc1N0YXRlbWVudDogMjQsIHN0eWxlU3RhdGVtZW50OiAyNSwgbm9kZTogMjYsIFNJWkU6IDI3LCBDT0xVTU5TOiAyOCwgXCJpZC1ibG9ja1wiOiAyOSwgZW5kOiAzMCwgTk9ERV9JRDogMzEsIG5vZGVTaGFwZU5MYWJlbDogMzIsIGRpckxpc3Q6IDMzLCBESVI6IDM0LCBOT0RFX0RTVEFSVDogMzUsIE5PREVfREVORDogMzYsIEJMT0NLX0FSUk9XX1NUQVJUOiAzNywgQkxPQ0tfQVJST1dfRU5EOiAzOCwgY2xhc3NEZWY6IDM5LCBDTEFTU0RFRl9JRDogNDAsIENMQVNTREVGX1NUWUxFT1BUUzogNDEsIERFRkFVTFQ6IDQyLCBjbGFzczogNDMsIENMQVNTRU5USVRZX0lEUzogNDQsIFNUWUxFQ0xBU1M6IDQ1LCBzdHlsZTogNDYsIFNUWUxFX0VOVElUWV9JRFM6IDQ3LCBTVFlMRV9ERUZJTklUSU9OX0RBVEE6IDQ4LCAkYWNjZXB0OiAwLCAkZW5kOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDQ6IFwiU1BBQ0VMSU5FXCIsIDU6IFwiTkxcIiwgNzogXCJTUEFDRVwiLCA4OiBcIkVPRlwiLCAxMDogXCJCTE9DS19ESUFHUkFNX0tFWVwiLCAxNTogXCJMSU5LXCIsIDE2OiBcIlNUQVJUX0xJTktcIiwgMTc6IFwiTElOS19MQUJFTFwiLCAxODogXCJTVFJcIiwgMjE6IFwiU1BBQ0VfQkxPQ0tcIiwgMjc6IFwiU0laRVwiLCAyODogXCJDT0xVTU5TXCIsIDI5OiBcImlkLWJsb2NrXCIsIDMwOiBcImVuZFwiLCAzMTogXCJOT0RFX0lEXCIsIDM0OiBcIkRJUlwiLCAzNTogXCJOT0RFX0RTVEFSVFwiLCAzNjogXCJOT0RFX0RFTkRcIiwgMzc6IFwiQkxPQ0tfQVJST1dfU1RBUlRcIiwgMzg6IFwiQkxPQ0tfQVJST1dfRU5EXCIsIDM5OiBcImNsYXNzRGVmXCIsIDQwOiBcIkNMQVNTREVGX0lEXCIsIDQxOiBcIkNMQVNTREVGX1NUWUxFT1BUU1wiLCA0MjogXCJERUZBVUxUXCIsIDQzOiBcImNsYXNzXCIsIDQ0OiBcIkNMQVNTRU5USVRZX0lEU1wiLCA0NTogXCJTVFlMRUNMQVNTXCIsIDQ2OiBcInN0eWxlXCIsIDQ3OiBcIlNUWUxFX0VOVElUWV9JRFNcIiwgNDg6IFwiU1RZTEVfREVGSU5JVElPTl9EQVRBXCIgfSxcbiAgICBwcm9kdWN0aW9uc186IFswLCBbMywgMV0sIFszLCAyXSwgWzMsIDJdLCBbNiwgMV0sIFs2LCAxXSwgWzYsIDFdLCBbOSwgM10sIFsxMiwgMV0sIFsxMiwgMV0sIFsxMiwgMl0sIFsxMiwgMl0sIFsxMSwgMV0sIFsxMSwgMl0sIFsxNCwgMV0sIFsxNCwgNF0sIFsxMywgMV0sIFsxMywgMV0sIFsxMywgMV0sIFsxMywgMV0sIFsxMywgMV0sIFsxMywgMV0sIFsxMywgMV0sIFsxOSwgM10sIFsxOSwgMl0sIFsxOSwgMV0sIFsyMCwgMV0sIFsyMiwgNF0sIFsyMiwgM10sIFsyNiwgMV0sIFsyNiwgMl0sIFszMywgMV0sIFszMywgMl0sIFszMiwgM10sIFszMiwgNF0sIFsyMywgM10sIFsyMywgM10sIFsyNCwgM10sIFsyNSwgM11dLFxuICAgIHBlcmZvcm1BY3Rpb246IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHksIGcsIGYsIG0sIEUsIGgsIFcpIHtcbiAgICAgIHZhciBwID0gaC5sZW5ndGggLSAxO1xuICAgICAgc3dpdGNoIChFKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtLmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogc2VwYXJhdG9yIChOTCkgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IHNlcGFyYXRvciAoU3BhY2UpIFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIG0uZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBzZXBhcmF0b3IgKEVPRikgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgbS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IGhpZXJhcmNoeTogXCIsIGhbcCAtIDFdKSwgbS5zZXRIaWVyYXJjaHkoaFtwIC0gMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgbS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlN0b3AgTkwgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgbS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlN0b3AgRU9GIFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBtLmdldExvZ2dlcigpLmRlYnVnKFwiU3RvcCBOTDIgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIG0uZ2V0TG9nZ2VyKCkuZGVidWcoXCJTdG9wIEVPRjIgXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIG0uZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBzdGF0ZW1lbnQ6IFwiLCBoW3BdKSwgdHlwZW9mIGhbcF0ubGVuZ3RoID09IFwibnVtYmVyXCIgPyB0aGlzLiQgPSBoW3BdIDogdGhpcy4kID0gW2hbcF1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIG0uZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBzdGF0ZW1lbnQgIzI6IFwiLCBoW3AgLSAxXSksIHRoaXMuJCA9IFtoW3AgLSAxXV0uY29uY2F0KGhbcF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIG0uZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBsaW5rOiBcIiwgaFtwXSwgeSksIHRoaXMuJCA9IHsgZWRnZVR5cGVTdHI6IGhbcF0sIGxhYmVsOiBcIlwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgbS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IExBQkVMIGxpbms6IFwiLCBoW3AgLSAzXSwgaFtwIC0gMV0sIGhbcF0pLCB0aGlzLiQgPSB7IGVkZ2VUeXBlU3RyOiBoW3BdLCBsYWJlbDogaFtwIC0gMV0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICBjb25zdCBJID0gcGFyc2VJbnQoaFtwXSksIFogPSBtLmdlbmVyYXRlSWQoKTtcbiAgICAgICAgICB0aGlzLiQgPSB7IGlkOiBaLCB0eXBlOiBcInNwYWNlXCIsIGxhYmVsOiBcIlwiLCB3aWR0aDogSSwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgbS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IChub2RlU3RhdGVtZW50IGxpbmsgbm9kZSkgXCIsIGhbcCAtIDJdLCBoW3AgLSAxXSwgaFtwXSwgXCIgdHlwZXN0cjogXCIsIGhbcCAtIDFdLmVkZ2VUeXBlU3RyKTtcbiAgICAgICAgICBjb25zdCBWID0gbS5lZGdlU3RyVG9FZGdlRGF0YShoW3AgLSAxXS5lZGdlVHlwZVN0cik7XG4gICAgICAgICAgdGhpcy4kID0gW1xuICAgICAgICAgICAgeyBpZDogaFtwIC0gMl0uaWQsIGxhYmVsOiBoW3AgLSAyXS5sYWJlbCwgdHlwZTogaFtwIC0gMl0udHlwZSwgZGlyZWN0aW9uczogaFtwIC0gMl0uZGlyZWN0aW9ucyB9LFxuICAgICAgICAgICAgeyBpZDogaFtwIC0gMl0uaWQgKyBcIi1cIiArIGhbcF0uaWQsIHN0YXJ0OiBoW3AgLSAyXS5pZCwgZW5kOiBoW3BdLmlkLCBsYWJlbDogaFtwIC0gMV0ubGFiZWwsIHR5cGU6IFwiZWRnZVwiLCBkaXJlY3Rpb25zOiBoW3BdLmRpcmVjdGlvbnMsIGFycm93VHlwZUVuZDogViwgYXJyb3dUeXBlU3RhcnQ6IFwiYXJyb3dfb3BlblwiIH0sXG4gICAgICAgICAgICB7IGlkOiBoW3BdLmlkLCBsYWJlbDogaFtwXS5sYWJlbCwgdHlwZTogbS50eXBlU3RyMlR5cGUoaFtwXS50eXBlU3RyKSwgZGlyZWN0aW9uczogaFtwXS5kaXJlY3Rpb25zIH1cbiAgICAgICAgICBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgIG0uZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBub2RlU3RhdGVtZW50IChhYmM4OCBub2RlIHNpemUpIFwiLCBoW3AgLSAxXSwgaFtwXSksIHRoaXMuJCA9IHsgaWQ6IGhbcCAtIDFdLmlkLCBsYWJlbDogaFtwIC0gMV0ubGFiZWwsIHR5cGU6IG0udHlwZVN0cjJUeXBlKGhbcCAtIDFdLnR5cGVTdHIpLCBkaXJlY3Rpb25zOiBoW3AgLSAxXS5kaXJlY3Rpb25zLCB3aWR0aEluQ29sdW1uczogcGFyc2VJbnQoaFtwXSwgMTApIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgbS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IG5vZGVTdGF0ZW1lbnQgKG5vZGUpIFwiLCBoW3BdKSwgdGhpcy4kID0geyBpZDogaFtwXS5pZCwgbGFiZWw6IGhbcF0ubGFiZWwsIHR5cGU6IG0udHlwZVN0cjJUeXBlKGhbcF0udHlwZVN0ciksIGRpcmVjdGlvbnM6IGhbcF0uZGlyZWN0aW9ucywgd2lkdGhJbkNvbHVtbnM6IDEgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICBtLmdldExvZ2dlcigpLmRlYnVnKFwiQVBBMTIzXCIsIHRoaXMgPyB0aGlzIDogXCJuYVwiKSwgbS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkNPTFVNTlM6IFwiLCBoW3BdKSwgdGhpcy4kID0geyB0eXBlOiBcImNvbHVtbi1zZXR0aW5nXCIsIGNvbHVtbnM6IGhbcF0gPT09IFwiYXV0b1wiID8gLTEgOiBwYXJzZUludChoW3BdKSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIG0uZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBpZC1ibG9jayBzdGF0ZW1lbnQgOiBcIiwgaFtwIC0gMl0sIGhbcCAtIDFdKSwgbS5nZW5lcmF0ZUlkKCksIHRoaXMuJCA9IHsgLi4uaFtwIC0gMl0sIHR5cGU6IFwiY29tcG9zaXRlXCIsIGNoaWxkcmVuOiBoW3AgLSAxXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIG0uZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBibG9ja1N0YXRlbWVudCA6IFwiLCBoW3AgLSAyXSwgaFtwIC0gMV0sIGhbcF0pO1xuICAgICAgICAgIGNvbnN0IGF0ID0gbS5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgdGhpcy4kID0geyBpZDogYXQsIHR5cGU6IFwiY29tcG9zaXRlXCIsIGxhYmVsOiBcIlwiLCBjaGlsZHJlbjogaFtwIC0gMV0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICBtLmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogbm9kZSAoTk9ERV9JRCBzZXBhcmF0b3IpOiBcIiwgaFtwXSksIHRoaXMuJCA9IHsgaWQ6IGhbcF0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICBtLmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogbm9kZSAoTk9ERV9JRCBub2RlU2hhcGVOTGFiZWwgc2VwYXJhdG9yKTogXCIsIGhbcCAtIDFdLCBoW3BdKSwgdGhpcy4kID0geyBpZDogaFtwIC0gMV0sIGxhYmVsOiBoW3BdLmxhYmVsLCB0eXBlU3RyOiBoW3BdLnR5cGVTdHIsIGRpcmVjdGlvbnM6IGhbcF0uZGlyZWN0aW9ucyB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgIG0uZ2V0TG9nZ2VyKCkuZGVidWcoXCJSdWxlOiBkaXJMaXN0OiBcIiwgaFtwXSksIHRoaXMuJCA9IFtoW3BdXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICBtLmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogZGlyTGlzdDogXCIsIGhbcCAtIDFdLCBoW3BdKSwgdGhpcy4kID0gW2hbcCAtIDFdXS5jb25jYXQoaFtwXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgbS5nZXRMb2dnZXIoKS5kZWJ1ZyhcIlJ1bGU6IG5vZGVTaGFwZU5MYWJlbDogXCIsIGhbcCAtIDJdLCBoW3AgLSAxXSwgaFtwXSksIHRoaXMuJCA9IHsgdHlwZVN0cjogaFtwIC0gMl0gKyBoW3BdLCBsYWJlbDogaFtwIC0gMV0gfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICBtLmdldExvZ2dlcigpLmRlYnVnKFwiUnVsZTogQkxPQ0tfQVJST1cgbm9kZVNoYXBlTkxhYmVsOiBcIiwgaFtwIC0gM10sIGhbcCAtIDJdLCBcIiAjMzpcIiwgaFtwIC0gMV0sIGhbcF0pLCB0aGlzLiQgPSB7IHR5cGVTdHI6IGhbcCAtIDNdICsgaFtwXSwgbGFiZWw6IGhbcCAtIDJdLCBkaXJlY3Rpb25zOiBoW3AgLSAxXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM1OlxuICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogXCJjbGFzc0RlZlwiLCBpZDogaFtwIC0gMV0udHJpbSgpLCBjc3M6IGhbcF0udHJpbSgpIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgdGhpcy4kID0geyB0eXBlOiBcImFwcGx5Q2xhc3NcIiwgaWQ6IGhbcCAtIDFdLnRyaW0oKSwgc3R5bGVDbGFzczogaFtwXS50cmltKCkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6IFwiYXBwbHlTdHlsZXNcIiwgaWQ6IGhbcCAtIDFdLnRyaW0oKSwgc3R5bGVzU3RyOiBoW3BdLnRyaW0oKSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIFwiYW5vbnltb3VzXCIpLFxuICAgIHRhYmxlOiBbeyA5OiAxLCAxMDogWzEsIDJdIH0sIHsgMTogWzNdIH0sIHsgMTA6IHQsIDExOiAzLCAxMzogNCwgMTk6IDUsIDIwOiA2LCAyMTogYSwgMjI6IDgsIDIzOiA5LCAyNDogMTAsIDI1OiAxMSwgMjY6IDEyLCAyODogaSwgMjk6IGwsIDMxOiBzLCAzOTogciwgNDM6IG4sIDQ2OiBjIH0sIHsgODogWzEsIDIwXSB9LCBlKHUsIFsyLCAxMl0sIHsgMTM6IDQsIDE5OiA1LCAyMDogNiwgMjI6IDgsIDIzOiA5LCAyNDogMTAsIDI1OiAxMSwgMjY6IDEyLCAxMTogMjEsIDEwOiB0LCAyMTogYSwgMjg6IGksIDI5OiBsLCAzMTogcywgMzk6IHIsIDQzOiBuLCA0NjogYyB9KSwgZShvLCBbMiwgMTZdLCB7IDE0OiAyMiwgMTU6IHgsIDE2OiB3IH0pLCBlKG8sIFsyLCAxN10pLCBlKG8sIFsyLCAxOF0pLCBlKG8sIFsyLCAxOV0pLCBlKG8sIFsyLCAyMF0pLCBlKG8sIFsyLCAyMV0pLCBlKG8sIFsyLCAyMl0pLCBlKGIsIFsyLCAyNV0sIHsgMjc6IFsxLCAyNV0gfSksIGUobywgWzIsIDI2XSksIHsgMTk6IDI2LCAyNjogMTIsIDMxOiBzIH0sIHsgMTA6IHQsIDExOiAyNywgMTM6IDQsIDE5OiA1LCAyMDogNiwgMjE6IGEsIDIyOiA4LCAyMzogOSwgMjQ6IDEwLCAyNTogMTEsIDI2OiAxMiwgMjg6IGksIDI5OiBsLCAzMTogcywgMzk6IHIsIDQzOiBuLCA0NjogYyB9LCB7IDQwOiBbMSwgMjhdLCA0MjogWzEsIDI5XSB9LCB7IDQ0OiBbMSwgMzBdIH0sIHsgNDc6IFsxLCAzMV0gfSwgZShTLCBbMiwgMjldLCB7IDMyOiAzMiwgMzU6IFsxLCAzM10sIDM3OiBbMSwgMzRdIH0pLCB7IDE6IFsyLCA3XSB9LCBlKHUsIFsyLCAxM10pLCB7IDI2OiAzNSwgMzE6IHMgfSwgeyAzMTogWzIsIDE0XSB9LCB7IDE3OiBbMSwgMzZdIH0sIGUoYiwgWzIsIDI0XSksIHsgMTA6IHQsIDExOiAzNywgMTM6IDQsIDE0OiAyMiwgMTU6IHgsIDE2OiB3LCAxOTogNSwgMjA6IDYsIDIxOiBhLCAyMjogOCwgMjM6IDksIDI0OiAxMCwgMjU6IDExLCAyNjogMTIsIDI4OiBpLCAyOTogbCwgMzE6IHMsIDM5OiByLCA0MzogbiwgNDY6IGMgfSwgeyAzMDogWzEsIDM4XSB9LCB7IDQxOiBbMSwgMzldIH0sIHsgNDE6IFsxLCA0MF0gfSwgeyA0NTogWzEsIDQxXSB9LCB7IDQ4OiBbMSwgNDJdIH0sIGUoUywgWzIsIDMwXSksIHsgMTg6IFsxLCA0M10gfSwgeyAxODogWzEsIDQ0XSB9LCBlKGIsIFsyLCAyM10pLCB7IDE4OiBbMSwgNDVdIH0sIHsgMzA6IFsxLCA0Nl0gfSwgZShvLCBbMiwgMjhdKSwgZShvLCBbMiwgMzVdKSwgZShvLCBbMiwgMzZdKSwgZShvLCBbMiwgMzddKSwgZShvLCBbMiwgMzhdKSwgeyAzNjogWzEsIDQ3XSB9LCB7IDMzOiA0OCwgMzQ6IHYgfSwgeyAxNTogWzEsIDUwXSB9LCBlKG8sIFsyLCAyN10pLCBlKFMsIFsyLCAzM10pLCB7IDM4OiBbMSwgNTFdIH0sIHsgMzM6IDUyLCAzNDogdiwgMzg6IFsyLCAzMV0gfSwgeyAzMTogWzIsIDE1XSB9LCBlKFMsIFsyLCAzNF0pLCB7IDM4OiBbMiwgMzJdIH1dLFxuICAgIGRlZmF1bHRBY3Rpb25zOiB7IDIwOiBbMiwgN10sIDIzOiBbMiwgMTRdLCA1MDogWzIsIDE1XSwgNTI6IFsyLCAzMl0gfSxcbiAgICBwYXJzZUVycm9yOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih5LCBnKSB7XG4gICAgICBpZiAoZy5yZWNvdmVyYWJsZSlcbiAgICAgICAgdGhpcy50cmFjZSh5KTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZiA9IG5ldyBFcnJvcih5KTtcbiAgICAgICAgdGhyb3cgZi5oYXNoID0gZywgZjtcbiAgICAgIH1cbiAgICB9LCBcInBhcnNlRXJyb3JcIiksXG4gICAgcGFyc2U6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHkpIHtcbiAgICAgIHZhciBnID0gdGhpcywgZiA9IFswXSwgbSA9IFtdLCBFID0gW251bGxdLCBoID0gW10sIFcgPSB0aGlzLnRhYmxlLCBwID0gXCJcIiwgSSA9IDAsIFogPSAwLCBWID0gMiwgYXQgPSAxLCBuZSA9IGguc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCB6ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKSwgcSA9IHsgeXk6IHt9IH07XG4gICAgICBmb3IgKHZhciBndCBpbiB0aGlzLnl5KVxuICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy55eSwgZ3QpICYmIChxLnl5W2d0XSA9IHRoaXMueXlbZ3RdKTtcbiAgICAgIHouc2V0SW5wdXQoeSwgcS55eSksIHEueXkubGV4ZXIgPSB6LCBxLnl5LnBhcnNlciA9IHRoaXMsIHR5cGVvZiB6Lnl5bGxvYyA+IFwidVwiICYmICh6Lnl5bGxvYyA9IHt9KTtcbiAgICAgIHZhciB1dCA9IHoueXlsbG9jO1xuICAgICAgaC5wdXNoKHV0KTtcbiAgICAgIHZhciBsZSA9IHoub3B0aW9ucyAmJiB6Lm9wdGlvbnMucmFuZ2VzO1xuICAgICAgdHlwZW9mIHEueXkucGFyc2VFcnJvciA9PSBcImZ1bmN0aW9uXCIgPyB0aGlzLnBhcnNlRXJyb3IgPSBxLnl5LnBhcnNlRXJyb3IgOiB0aGlzLnBhcnNlRXJyb3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2VFcnJvcjtcbiAgICAgIGZ1bmN0aW9uIGNlKFApIHtcbiAgICAgICAgZi5sZW5ndGggPSBmLmxlbmd0aCAtIDIgKiBQLCBFLmxlbmd0aCA9IEUubGVuZ3RoIC0gUCwgaC5sZW5ndGggPSBoLmxlbmd0aCAtIFA7XG4gICAgICB9XG4gICAgICBkKGNlLCBcInBvcFN0YWNrXCIpO1xuICAgICAgZnVuY3Rpb24gTnQoKSB7XG4gICAgICAgIHZhciBQO1xuICAgICAgICByZXR1cm4gUCA9IG0ucG9wKCkgfHwgei5sZXgoKSB8fCBhdCwgdHlwZW9mIFAgIT0gXCJudW1iZXJcIiAmJiAoUCBpbnN0YW5jZW9mIEFycmF5ICYmIChtID0gUCwgUCA9IG0ucG9wKCkpLCBQID0gZy5zeW1ib2xzX1tQXSB8fCBQKSwgUDtcbiAgICAgIH1cbiAgICAgIGQoTnQsIFwibGV4XCIpO1xuICAgICAgZm9yICh2YXIgRiwgSiwgSCwgcHQsIFEgPSB7fSwgc3QsIEcsIFR0LCBpdDsgOyApIHtcbiAgICAgICAgaWYgKEogPSBmW2YubGVuZ3RoIC0gMV0sIHRoaXMuZGVmYXVsdEFjdGlvbnNbSl0gPyBIID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tKXSA6ICgoRiA9PT0gbnVsbCB8fCB0eXBlb2YgRiA+IFwidVwiKSAmJiAoRiA9IE50KCkpLCBIID0gV1tKXSAmJiBXW0pdW0ZdKSwgdHlwZW9mIEggPiBcInVcIiB8fCAhSC5sZW5ndGggfHwgIUhbMF0pIHtcbiAgICAgICAgICB2YXIgZnQgPSBcIlwiO1xuICAgICAgICAgIGl0ID0gW107XG4gICAgICAgICAgZm9yIChzdCBpbiBXW0pdKVxuICAgICAgICAgICAgdGhpcy50ZXJtaW5hbHNfW3N0XSAmJiBzdCA+IFYgJiYgaXQucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1tzdF0gKyBcIidcIik7XG4gICAgICAgICAgei5zaG93UG9zaXRpb24gPyBmdCA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChJICsgMSkgKyBgOlxuYCArIHouc2hvd1Bvc2l0aW9uKCkgKyBgXG5FeHBlY3RpbmcgYCArIGl0LmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tGXSB8fCBGKSArIFwiJ1wiIDogZnQgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoSSArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAoRiA9PSBhdCA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bRl0gfHwgRikgKyBcIidcIiksIHRoaXMucGFyc2VFcnJvcihmdCwge1xuICAgICAgICAgICAgdGV4dDogei5tYXRjaCxcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bRl0gfHwgRixcbiAgICAgICAgICAgIGxpbmU6IHoueXlsaW5lbm8sXG4gICAgICAgICAgICBsb2M6IHV0LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IGl0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEhbMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBILmxlbmd0aCA+IDEpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgSiArIFwiLCB0b2tlbjogXCIgKyBGKTtcbiAgICAgICAgc3dpdGNoIChIWzBdKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgZi5wdXNoKEYpLCBFLnB1c2goei55eXRleHQpLCBoLnB1c2goei55eWxsb2MpLCBmLnB1c2goSFsxXSksIEYgPSBudWxsLCBaID0gei55eWxlbmcsIHAgPSB6Lnl5dGV4dCwgSSA9IHoueXlsaW5lbm8sIHV0ID0gei55eWxsb2M7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpZiAoRyA9IHRoaXMucHJvZHVjdGlvbnNfW0hbMV1dWzFdLCBRLiQgPSBFW0UubGVuZ3RoIC0gR10sIFEuXyQgPSB7XG4gICAgICAgICAgICAgIGZpcnN0X2xpbmU6IGhbaC5sZW5ndGggLSAoRyB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgbGFzdF9saW5lOiBoW2gubGVuZ3RoIC0gMV0ubGFzdF9saW5lLFxuICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IGhbaC5sZW5ndGggLSAoRyB8fCAxKV0uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogaFtoLmxlbmd0aCAtIDFdLmxhc3RfY29sdW1uXG4gICAgICAgICAgICB9LCBsZSAmJiAoUS5fJC5yYW5nZSA9IFtcbiAgICAgICAgICAgICAgaFtoLmxlbmd0aCAtIChHIHx8IDEpXS5yYW5nZVswXSxcbiAgICAgICAgICAgICAgaFtoLmxlbmd0aCAtIDFdLnJhbmdlWzFdXG4gICAgICAgICAgICBdKSwgcHQgPSB0aGlzLnBlcmZvcm1BY3Rpb24uYXBwbHkoUSwgW1xuICAgICAgICAgICAgICBwLFxuICAgICAgICAgICAgICBaLFxuICAgICAgICAgICAgICBJLFxuICAgICAgICAgICAgICBxLnl5LFxuICAgICAgICAgICAgICBIWzFdLFxuICAgICAgICAgICAgICBFLFxuICAgICAgICAgICAgICBoXG4gICAgICAgICAgICBdLmNvbmNhdChuZSkpLCB0eXBlb2YgcHQgPCBcInVcIilcbiAgICAgICAgICAgICAgcmV0dXJuIHB0O1xuICAgICAgICAgICAgRyAmJiAoZiA9IGYuc2xpY2UoMCwgLTEgKiBHICogMiksIEUgPSBFLnNsaWNlKDAsIC0xICogRyksIGggPSBoLnNsaWNlKDAsIC0xICogRykpLCBmLnB1c2godGhpcy5wcm9kdWN0aW9uc19bSFsxXV1bMF0pLCBFLnB1c2goUS4kKSwgaC5wdXNoKFEuXyQpLCBUdCA9IFdbZltmLmxlbmd0aCAtIDJdXVtmW2YubGVuZ3RoIC0gMV1dLCBmLnB1c2goVHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gITA7XG4gICAgfSwgXCJwYXJzZVwiKVxuICB9LCBCID0gLyogQF9fUFVSRV9fICovIChmdW5jdGlvbigpIHtcbiAgICB2YXIgRCA9IHtcbiAgICAgIEVPRjogMSxcbiAgICAgIHBhcnNlRXJyb3I6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKGcsIGYpIHtcbiAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKVxuICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3IoZywgZik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZyk7XG4gICAgICB9LCBcInBhcnNlRXJyb3JcIiksXG4gICAgICAvLyByZXNldHMgdGhlIGxleGVyLCBzZXRzIG5ldyBpbnB1dFxuICAgICAgc2V0SW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKHksIGcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueXkgPSBnIHx8IHRoaXMueXkgfHwge30sIHRoaXMuX2lucHV0ID0geSwgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9ICExLCB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwLCB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiLCB0aGlzLmNvbmRpdGlvblN0YWNrID0gW1wiSU5JVElBTFwiXSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gWzAsIDBdKSwgdGhpcy5vZmZzZXQgPSAwLCB0aGlzO1xuICAgICAgfSwgXCJzZXRJbnB1dFwiKSxcbiAgICAgIC8vIGNvbnN1bWVzIGFuZCByZXR1cm5zIG9uZSBjaGFyIGZyb20gdGhlIGlucHV0XG4gICAgICBpbnB1dDogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB5ID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IHksIHRoaXMueXlsZW5nKyssIHRoaXMub2Zmc2V0KyssIHRoaXMubWF0Y2ggKz0geSwgdGhpcy5tYXRjaGVkICs9IHk7XG4gICAgICAgIHZhciBnID0geS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIHJldHVybiBnID8gKHRoaXMueXlsaW5lbm8rKywgdGhpcy55eWxsb2MubGFzdF9saW5lKyspIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKywgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpLCB5O1xuICAgICAgfSwgXCJpbnB1dFwiKSxcbiAgICAgIC8vIHVuc2hpZnRzIG9uZSBjaGFyIChvciBhIHN0cmluZykgaW50byB0aGUgaW5wdXRcbiAgICAgIHVucHV0OiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih5KSB7XG4gICAgICAgIHZhciBnID0geS5sZW5ndGgsIGYgPSB5LnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMuX2lucHV0ID0geSArIHRoaXMuX2lucHV0LCB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBnKSwgdGhpcy5vZmZzZXQgLT0gZztcbiAgICAgICAgdmFyIG0gPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpLCB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKSwgZi5sZW5ndGggLSAxICYmICh0aGlzLnl5bGluZW5vIC09IGYubGVuZ3RoIC0gMSk7XG4gICAgICAgIHZhciBFID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgIHJldHVybiB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGYgPyAoZi5sZW5ndGggPT09IG0ubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBtW20ubGVuZ3RoIC0gZi5sZW5ndGhdLmxlbmd0aCAtIGZbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gZ1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFtFWzBdLCBFWzBdICsgdGhpcy55eWxlbmcgLSBnXSksIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzO1xuICAgICAgfSwgXCJ1bnB1dFwiKSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBjYWNoZXMgbWF0Y2hlZCB0ZXh0IGFuZCBhcHBlbmRzIGl0IG9uIG5leHQgYWN0aW9uXG4gICAgICBtb3JlOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vcmUgPSAhMCwgdGhpcztcbiAgICAgIH0sIFwibW9yZVwiKSxcbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gYWN0aW9uLCBzaWduYWxzIHRoZSBsZXhlciB0aGF0IHRoaXMgcnVsZSBmYWlscyB0byBtYXRjaCB0aGUgaW5wdXQsIHNvIHRoZSBuZXh0IG1hdGNoaW5nIHJ1bGUgKHJlZ2V4KSBzaG91bGQgYmUgdGVzdGVkIGluc3RlYWQuXG4gICAgICByZWplY3Q6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcilcbiAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSAhMDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgYC4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxuYCArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LCBcInJlamVjdFwiKSxcbiAgICAgIC8vIHJldGFpbiBmaXJzdCBuIGNoYXJhY3RlcnMgb2YgdGhlIG1hdGNoXG4gICAgICBsZXNzOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbih5KSB7XG4gICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZSh5KSk7XG4gICAgICB9LCBcImxlc3NcIiksXG4gICAgICAvLyBkaXNwbGF5cyBhbHJlYWR5IG1hdGNoZWQgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBwYXN0SW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuICh5Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgeS5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LCBcInBhc3RJbnB1dFwiKSxcbiAgICAgIC8vIGRpc3BsYXlzIHVwY29taW5nIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgdXBjb21pbmdJbnB1dDogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB5ID0gdGhpcy5tYXRjaDtcbiAgICAgICAgcmV0dXJuIHkubGVuZ3RoIDwgMjAgJiYgKHkgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0geS5sZW5ndGgpKSwgKHkuc3Vic3RyKDAsIDIwKSArICh5Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICB9LCBcInVwY29taW5nSW5wdXRcIiksXG4gICAgICAvLyBkaXNwbGF5cyB0aGUgY2hhcmFjdGVyIHBvc2l0aW9uIHdoZXJlIHRoZSBsZXhpbmcgZXJyb3Igb2NjdXJyZWQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICBzaG93UG9zaXRpb246IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMucGFzdElucHV0KCksIGcgPSBuZXcgQXJyYXkoeS5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIHkgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIGBcbmAgKyBnICsgXCJeXCI7XG4gICAgICB9LCBcInNob3dQb3NpdGlvblwiKSxcbiAgICAgIC8vIHRlc3QgdGhlIGxleGVkIHRva2VuOiByZXR1cm4gRkFMU0Ugd2hlbiBub3QgYSBtYXRjaCwgb3RoZXJ3aXNlIHJldHVybiB0b2tlblxuICAgICAgdGVzdF9tYXRjaDogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oeSwgZykge1xuICAgICAgICB2YXIgZiwgbSwgRTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgJiYgKEUgPSB7XG4gICAgICAgICAgeXlsaW5lbm86IHRoaXMueXlsaW5lbm8sXG4gICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLmxhc3RfbGluZSxcbiAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgIG1hdGNoZXM6IHRoaXMubWF0Y2hlcyxcbiAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgeXk6IHRoaXMueXksXG4gICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKEUueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCkpKSwgbSA9IHlbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpLCBtICYmICh0aGlzLnl5bGluZW5vICs9IG0ubGVuZ3RoKSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbSA/IG1bbS5sZW5ndGggLSAxXS5sZW5ndGggLSBtW20ubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyB5WzBdLmxlbmd0aFxuICAgICAgICB9LCB0aGlzLnl5dGV4dCArPSB5WzBdLCB0aGlzLm1hdGNoICs9IHlbMF0sIHRoaXMubWF0Y2hlcyA9IHksIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFt0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmddKSwgdGhpcy5fbW9yZSA9ICExLCB0aGlzLl9iYWNrdHJhY2sgPSAhMSwgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSh5WzBdLmxlbmd0aCksIHRoaXMubWF0Y2hlZCArPSB5WzBdLCBmID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgZywgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSwgdGhpcy5kb25lICYmIHRoaXMuX2lucHV0ICYmICh0aGlzLmRvbmUgPSAhMSksIGYpXG4gICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICBmb3IgKHZhciBoIGluIEUpXG4gICAgICAgICAgICB0aGlzW2hdID0gRVtoXTtcbiAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgICAgfSwgXCJ0ZXN0X21hdGNoXCIpLFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggaW4gaW5wdXRcbiAgICAgIG5leHQ6IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKVxuICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgdGhpcy5faW5wdXQgfHwgKHRoaXMuZG9uZSA9ICEwKTtcbiAgICAgICAgdmFyIHksIGcsIGYsIG07XG4gICAgICAgIHRoaXMuX21vcmUgfHwgKHRoaXMueXl0ZXh0ID0gXCJcIiwgdGhpcy5tYXRjaCA9IFwiXCIpO1xuICAgICAgICBmb3IgKHZhciBFID0gdGhpcy5fY3VycmVudFJ1bGVzKCksIGggPSAwOyBoIDwgRS5sZW5ndGg7IGgrKylcbiAgICAgICAgICBpZiAoZiA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbRVtoXV0pLCBmICYmICghZyB8fCBmWzBdLmxlbmd0aCA+IGdbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgaWYgKGcgPSBmLCBtID0gaCwgdGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgICAgICBpZiAoeSA9IHRoaXMudGVzdF9tYXRjaChmLCBFW2hdKSwgeSAhPT0gITEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICBnID0gITE7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBnID8gKHkgPSB0aGlzLnRlc3RfbWF0Y2goZywgRVttXSksIHkgIT09ICExID8geSA6ICExKSA6IHRoaXMuX2lucHV0ID09PSBcIlwiID8gdGhpcy5FT0YgOiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgYC4gVW5yZWNvZ25pemVkIHRleHQuXG5gICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICB9KTtcbiAgICAgIH0sIFwibmV4dFwiKSxcbiAgICAgIC8vIHJldHVybiBuZXh0IG1hdGNoIHRoYXQgaGFzIGEgdG9rZW5cbiAgICAgIGxleDogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBnID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIHJldHVybiBnIHx8IHRoaXMubGV4KCk7XG4gICAgICB9LCBcImxleFwiKSxcbiAgICAgIC8vIGFjdGl2YXRlcyBhIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgKHB1c2hlcyB0aGUgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvbnRvIHRoZSBjb25kaXRpb24gc3RhY2spXG4gICAgICBiZWdpbjogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oZykge1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goZyk7XG4gICAgICB9LCBcImJlZ2luXCIpLFxuICAgICAgLy8gcG9wIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGUgb2ZmIHRoZSBjb25kaXRpb24gc3RhY2tcbiAgICAgIHBvcFN0YXRlOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGcgPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiBnID4gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCkgOiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgfSwgXCJwb3BTdGF0ZVwiKSxcbiAgICAgIC8vIHByb2R1Y2UgdGhlIGxleGVyIHJ1bGUgc2V0IHdoaWNoIGlzIGFjdGl2ZSBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlXG4gICAgICBfY3VycmVudFJ1bGVzOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSA/IHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzIDogdGhpcy5jb25kaXRpb25zLklOSVRJQUwucnVsZXM7XG4gICAgICB9LCBcIl9jdXJyZW50UnVsZXNcIiksXG4gICAgICAvLyByZXR1cm4gdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlOyB3aGVuIGFuIGluZGV4IGFyZ3VtZW50IGlzIHByb3ZpZGVkIGl0IHByb2R1Y2VzIHRoZSBOLXRoIHByZXZpb3VzIGNvbmRpdGlvbiBzdGF0ZSwgaWYgYXZhaWxhYmxlXG4gICAgICB0b3BTdGF0ZTogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oZykge1xuICAgICAgICByZXR1cm4gZyA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMSAtIE1hdGguYWJzKGcgfHwgMCksIGcgPj0gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2tbZ10gOiBcIklOSVRJQUxcIjtcbiAgICAgIH0sIFwidG9wU3RhdGVcIiksXG4gICAgICAvLyBhbGlhcyBmb3IgYmVnaW4oY29uZGl0aW9uKVxuICAgICAgcHVzaFN0YXRlOiAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbihnKSB7XG4gICAgICAgIHRoaXMuYmVnaW4oZyk7XG4gICAgICB9LCBcInB1c2hTdGF0ZVwiKSxcbiAgICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIHN0YXRlcyBjdXJyZW50bHkgb24gdGhlIHN0YWNrXG4gICAgICBzdGF0ZVN0YWNrU2l6ZTogLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aDtcbiAgICAgIH0sIFwic3RhdGVTdGFja1NpemVcIiksXG4gICAgICBvcHRpb25zOiB7fSxcbiAgICAgIHBlcmZvcm1BY3Rpb246IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKGcsIGYsIG0sIEUpIHtcbiAgICAgICAgc3dpdGNoIChtKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJGb3VuZCBibG9jay1iZXRhXCIpLCAxMDtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkZvdW5kIGlkLWJsb2NrXCIpLCAyOTtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkZvdW5kIGJsb2NrXCIpLCAxMDtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBnLmdldExvZ2dlcigpLmRlYnVnKFwiLlwiLCBmLnl5dGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBnLmdldExvZ2dlcigpLmRlYnVnKFwiX1wiLCBmLnl5dGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gZi55eXRleHQgPSAtMSwgMjg7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmV0dXJuIGYueXl0ZXh0ID0gZi55eXRleHQucmVwbGFjZSgvY29sdW1uc1xccysvLCBcIlwiKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkNPTFVNTlMgKExFWClcIiwgZi55eXRleHQpLCAyODtcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIm1kX3N0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIHJldHVybiBcIk1EX1NUUlwiO1xuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJzdHJpbmdcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxFWDogUE9QUElORyBTVFI6XCIsIGYueXl0ZXh0KSwgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHJldHVybiBnLmdldExvZ2dlcigpLmRlYnVnKFwiTEVYOiBTVFIgZW5kOlwiLCBmLnl5dGV4dCksIFwiU1RSXCI7XG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIHJldHVybiBmLnl5dGV4dCA9IGYueXl0ZXh0LnJlcGxhY2UoL3NwYWNlXFw6LywgXCJcIiksIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJTUEFDRSBOVU0gKExFWClcIiwgZi55eXRleHQpLCAyMTtcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgcmV0dXJuIGYueXl0ZXh0ID0gXCIxXCIsIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJDT0xVTU5TIChMRVgpXCIsIGYueXl0ZXh0KSwgMjE7XG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIHJldHVybiA0MjtcbiAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgcmV0dXJuIFwiTElOS1NUWUxFXCI7XG4gICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIHJldHVybiBcIklOVEVSUE9MQVRFXCI7XG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTREVGXCIpLCAzOTtcbiAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgdGhpcy5wdXNoU3RhdGUoXCJDTEFTU0RFRklEXCIpLCBcIkRFRkFVTFRfQ0xBU1NERUZfSURcIjtcbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgdGhpcy5wdXNoU3RhdGUoXCJDTEFTU0RFRklEXCIpLCA0MDtcbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgNDE7XG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTXCIpLCA0MztcbiAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgdGhpcy5wdXNoU3RhdGUoXCJDTEFTU19TVFlMRVwiKSwgNDQ7XG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIDQ1O1xuICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJTVFlMRV9TVE1OVFwiKSwgNDY7XG4gICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIHRoaXMucHVzaFN0YXRlKFwiU1RZTEVfREVGSU5JVElPTlwiKSwgNDc7XG4gICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIDQ4O1xuICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJhY2NfdGl0bGVcIiksIFwiYWNjX3RpdGxlXCI7XG4gICAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIFwiYWNjX3RpdGxlX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcImFjY19kZXNjclwiKSwgXCJhY2NfZGVzY3JcIjtcbiAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgXCJhY2NfZGVzY3JfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJhY2NfZGVzY3JfbXVsdGlsaW5lXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgICByZXR1cm4gXCJhY2NfZGVzY3JfbXVsdGlsaW5lX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKChcIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6ICgoXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiApKVwiKSwgXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKChcIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6ICgoXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAoLVwiKSwgXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogLSlcIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6ICgoXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBdXVwiKSwgXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKFwiKSwgXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogXSlcIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IC9dXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAvXVwiKSwgXCJOT0RFX0RFTkRcIjtcbiAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogKV1cIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA1MTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IClcIiksIFwiTk9ERV9ERU5EXCI7XG4gICAgICAgICAgY2FzZSA1MjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IF0+XCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNTM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBdXCIpLCBcIk5PREVfREVORFwiO1xuICAgICAgICAgIGNhc2UgNTQ6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGE6IC0pXCIpLCB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIiksIDM1O1xuICAgICAgICAgIGNhc2UgNTU6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGE6ICgtXCIpLCB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIiksIDM1O1xuICAgICAgICAgIGNhc2UgNTY6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGE6ICkpXCIpLCB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIiksIDM1O1xuICAgICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGE6IClcIiksIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKSwgMzU7XG4gICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgIHJldHVybiBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiAoKChcIiksIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKSwgMzU7XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIHJldHVybiBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4YTogKVwiKSwgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpLCAzNTtcbiAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgcmV0dXJuIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiApXCIpLCB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIiksIDM1O1xuICAgICAgICAgIGNhc2UgNjE6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleGE6IClcIiksIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKSwgMzU7XG4gICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgIHJldHVybiBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4YzogPlwiKSwgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpLCAzNTtcbiAgICAgICAgICBjYXNlIDYzOlxuICAgICAgICAgICAgcmV0dXJuIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiAoW1wiKSwgdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpLCAzNTtcbiAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgcmV0dXJuIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiApXCIpLCB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIiksIDM1O1xuICAgICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpLCAzNTtcbiAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKSwgMzU7XG4gICAgICAgICAgY2FzZSA2NzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIiksIDM1O1xuICAgICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpLCAzNTtcbiAgICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwiTk9ERVwiKSwgMzU7XG4gICAgICAgICAgY2FzZSA3MDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIiksIDM1O1xuICAgICAgICAgIGNhc2UgNzE6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJOT0RFXCIpLCAzNTtcbiAgICAgICAgICBjYXNlIDcyOlxuICAgICAgICAgICAgcmV0dXJuIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXhhOiBbXCIpLCB0aGlzLnB1c2hTdGF0ZShcIk5PREVcIiksIDM1O1xuICAgICAgICAgIGNhc2UgNzM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJCTE9DS19BUlJPV1wiKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxFWCBBUlIgU1RBUlRcIiksIDM3O1xuICAgICAgICAgIGNhc2UgNzQ6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogTk9ERV9JRFwiLCBmLnl5dGV4dCksIDMxO1xuICAgICAgICAgIGNhc2UgNzU6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogRU9GXCIsIGYueXl0ZXh0KSwgODtcbiAgICAgICAgICBjYXNlIDc2OlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJtZF9zdHJpbmdcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDc3OlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJtZF9zdHJpbmdcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDc4OlxuICAgICAgICAgICAgcmV0dXJuIFwiTk9ERV9ERVNDUlwiO1xuICAgICAgICAgIGNhc2UgNzk6XG4gICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogU3RhcnRpbmcgc3RyaW5nXCIpLCB0aGlzLnB1c2hTdGF0ZShcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODE6XG4gICAgICAgICAgICBnLmdldExvZ2dlcigpLmRlYnVnKFwiTEVYIEFSUjogU3RhcnRpbmcgc3RyaW5nXCIpLCB0aGlzLnB1c2hTdGF0ZShcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODI6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxFWDogTk9ERV9ERVNDUjpcIiwgZi55eXRleHQpLCBcIk5PREVfREVTQ1JcIjtcbiAgICAgICAgICBjYXNlIDgzOlxuICAgICAgICAgICAgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxFWCBQT1BQSU5HXCIpLCB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDg0OlxuICAgICAgICAgICAgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogPT5CQUVcIiksIHRoaXMucHVzaFN0YXRlKFwiQVJST1dfRElSXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA4NTpcbiAgICAgICAgICAgIHJldHVybiBmLnl5dGV4dCA9IGYueXl0ZXh0LnJlcGxhY2UoL14sXFxzKi8sIFwiXCIpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4IChyaWdodCk6IGRpcjpcIiwgZi55eXRleHQpLCBcIkRJUlwiO1xuICAgICAgICAgIGNhc2UgODY6XG4gICAgICAgICAgICByZXR1cm4gZi55eXRleHQgPSBmLnl5dGV4dC5yZXBsYWNlKC9eLFxccyovLCBcIlwiKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleCAobGVmdCk6XCIsIGYueXl0ZXh0KSwgXCJESVJcIjtcbiAgICAgICAgICBjYXNlIDg3OlxuICAgICAgICAgICAgcmV0dXJuIGYueXl0ZXh0ID0gZi55eXRleHQucmVwbGFjZSgvXixcXHMqLywgXCJcIiksIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXggKHgpOlwiLCBmLnl5dGV4dCksIFwiRElSXCI7XG4gICAgICAgICAgY2FzZSA4ODpcbiAgICAgICAgICAgIHJldHVybiBmLnl5dGV4dCA9IGYueXl0ZXh0LnJlcGxhY2UoL14sXFxzKi8sIFwiXCIpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4ICh5KTpcIiwgZi55eXRleHQpLCBcIkRJUlwiO1xuICAgICAgICAgIGNhc2UgODk6XG4gICAgICAgICAgICByZXR1cm4gZi55eXRleHQgPSBmLnl5dGV4dC5yZXBsYWNlKC9eLFxccyovLCBcIlwiKSwgZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleCAodXApOlwiLCBmLnl5dGV4dCksIFwiRElSXCI7XG4gICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgIHJldHVybiBmLnl5dGV4dCA9IGYueXl0ZXh0LnJlcGxhY2UoL14sXFxzKi8sIFwiXCIpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4IChkb3duKTpcIiwgZi55eXRleHQpLCBcIkRJUlwiO1xuICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICByZXR1cm4gZi55eXRleHQgPSBcIl0+XCIsIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXggKEFSUk9XX0RJUiBlbmQpOlwiLCBmLnl5dGV4dCksIHRoaXMucG9wU3RhdGUoKSwgdGhpcy5wb3BTdGF0ZSgpLCBcIkJMT0NLX0FSUk9XX0VORFwiO1xuICAgICAgICAgIGNhc2UgOTI6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogTElOS1wiLCBcIiNcIiArIGYueXl0ZXh0ICsgXCIjXCIpLCAxNTtcbiAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgcmV0dXJuIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgZi55eXRleHQpLCAxNTtcbiAgICAgICAgICBjYXNlIDk0OlxuICAgICAgICAgICAgcmV0dXJuIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgZi55eXRleHQpLCAxNTtcbiAgICAgICAgICBjYXNlIDk1OlxuICAgICAgICAgICAgcmV0dXJuIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgZi55eXRleHQpLCAxNTtcbiAgICAgICAgICBjYXNlIDk2OlxuICAgICAgICAgICAgcmV0dXJuIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IFNUQVJUX0xJTktcIiwgZi55eXRleHQpLCB0aGlzLnB1c2hTdGF0ZShcIkxMQUJFTFwiKSwgMTY7XG4gICAgICAgICAgY2FzZSA5NzpcbiAgICAgICAgICAgIHJldHVybiBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBTVEFSVF9MSU5LXCIsIGYueXl0ZXh0KSwgdGhpcy5wdXNoU3RhdGUoXCJMTEFCRUxcIiksIDE2O1xuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogU1RBUlRfTElOS1wiLCBmLnl5dGV4dCksIHRoaXMucHVzaFN0YXRlKFwiTExBQkVMXCIpLCAxNjtcbiAgICAgICAgICBjYXNlIDk5OlxuICAgICAgICAgICAgdGhpcy5wdXNoU3RhdGUoXCJtZF9zdHJpbmdcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgIHJldHVybiBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBTdGFydGluZyBzdHJpbmdcIiksIHRoaXMucHVzaFN0YXRlKFwic3RyaW5nXCIpLCBcIkxJTktfTEFCRUxcIjtcbiAgICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIGcuZ2V0TG9nZ2VyKCkuZGVidWcoXCJMZXg6IExJTktcIiwgXCIjXCIgKyBmLnl5dGV4dCArIFwiI1wiKSwgMTU7XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBMSU5LXCIsIGYueXl0ZXh0KSwgMTU7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBnLmdldExvZ2dlcigpLmRlYnVnKFwiTGV4OiBMSU5LXCIsIGYueXl0ZXh0KSwgMTU7XG4gICAgICAgICAgY2FzZSAxMDQ6XG4gICAgICAgICAgICByZXR1cm4gZy5nZXRMb2dnZXIoKS5kZWJ1ZyhcIkxleDogQ09MT05cIiwgZi55eXRleHQpLCBmLnl5dGV4dCA9IGYueXl0ZXh0LnNsaWNlKDEpLCAyNztcbiAgICAgICAgfVxuICAgICAgfSwgXCJhbm9ueW1vdXNcIiksXG4gICAgICBydWxlczogWy9eKD86YmxvY2stYmV0YVxcYikvLCAvXig/OmJsb2NrOikvLCAvXig/OmJsb2NrXFxiKS8sIC9eKD86W1xcc10rKS8sIC9eKD86W1xcbl0rKS8sIC9eKD86KChcXHUwMDBEXFx1MDAwQSl8KFxcdTAwMEEpKSkvLCAvXig/OmNvbHVtbnNcXHMrYXV0b1xcYikvLCAvXig/OmNvbHVtbnNcXHMrW1xcZF0rKS8sIC9eKD86W1wiXVtgXSkvLCAvXig/OlteYFwiXSspLywgL14oPzpbYF1bXCJdKS8sIC9eKD86W1wiXSkvLCAvXig/OltcIl0pLywgL14oPzpbXlwiXSopLywgL14oPzpzcGFjZVs6XVxcZCspLywgL14oPzpzcGFjZVxcYikvLCAvXig/OmRlZmF1bHRcXGIpLywgL14oPzpsaW5rU3R5bGVcXGIpLywgL14oPzppbnRlcnBvbGF0ZVxcYikvLCAvXig/OmNsYXNzRGVmXFxzKykvLCAvXig/OkRFRkFVTFRcXHMrKS8sIC9eKD86XFx3K1xccyspLywgL14oPzpbXlxcbl0qKS8sIC9eKD86Y2xhc3NcXHMrKS8sIC9eKD86KFxcdyspKygoLFxccypcXHcrKSopKS8sIC9eKD86W15cXG5dKikvLCAvXig/OnN0eWxlXFxzKykvLCAvXig/OihcXHcrKSsoKCxcXHMqXFx3KykqKSkvLCAvXig/OlteXFxuXSopLywgL14oPzphY2NUaXRsZVxccyo6XFxzKikvLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS8sIC9eKD86YWNjRGVzY3JcXHMqOlxccyopLywgL14oPzooPyFcXG58fCkqW15cXG5dKikvLCAvXig/OmFjY0Rlc2NyXFxzKlxce1xccyopLywgL14oPzpbXFx9XSkvLCAvXig/OlteXFx9XSopLywgL14oPzplbmRcXGJcXHMqKS8sIC9eKD86XFwoXFwoXFwoKS8sIC9eKD86XFwpXFwpXFwpKS8sIC9eKD86W1xcKV1cXCkpLywgL14oPzpcXH1cXH0pLywgL14oPzpcXH0pLywgL14oPzpcXCgtKS8sIC9eKD86LVxcKSkvLCAvXig/OlxcKFxcKCkvLCAvXig/OlxcXVxcXSkvLCAvXig/OlxcKCkvLCAvXig/OlxcXVxcKSkvLCAvXig/OlxcXFxcXF0pLywgL14oPzpcXC9cXF0pLywgL14oPzpcXClcXF0pLywgL14oPzpbXFwpXSkvLCAvXig/OlxcXT4pLywgL14oPzpbXFxdXSkvLCAvXig/Oi1cXCkpLywgL14oPzpcXCgtKS8sIC9eKD86XFwpXFwpKS8sIC9eKD86XFwpKS8sIC9eKD86XFwoXFwoXFwoKS8sIC9eKD86XFwoXFwoKS8sIC9eKD86XFx7XFx7KS8sIC9eKD86XFx7KS8sIC9eKD86PikvLCAvXig/OlxcKFxcWykvLCAvXig/OlxcKCkvLCAvXig/OlxcW1xcWykvLCAvXig/OlxcW1xcfCkvLCAvXig/OlxcW1xcKCkvLCAvXig/OlxcKVxcKVxcKSkvLCAvXig/OlxcW1xcXFwpLywgL14oPzpcXFtcXC8pLywgL14oPzpcXFtcXFxcKS8sIC9eKD86XFxbKS8sIC9eKD86PFxcWykvLCAvXig/OlteXFwoXFxbXFxuXFwtXFwpXFx7XFx9XFxzXFw8XFw+Ol0rKS8sIC9eKD86JCkvLCAvXig/OltcIl1bYF0pLywgL14oPzpbXCJdW2BdKS8sIC9eKD86W15gXCJdKykvLCAvXig/OltgXVtcIl0pLywgL14oPzpbXCJdKS8sIC9eKD86W1wiXSkvLCAvXig/OlteXCJdKykvLCAvXig/OltcIl0pLywgL14oPzpcXF0+XFxzKlxcKCkvLCAvXig/Oiw/XFxzKnJpZ2h0XFxzKikvLCAvXig/Oiw/XFxzKmxlZnRcXHMqKS8sIC9eKD86LD9cXHMqeFxccyopLywgL14oPzosP1xccyp5XFxzKikvLCAvXig/Oiw/XFxzKnVwXFxzKikvLCAvXig/Oiw/XFxzKmRvd25cXHMqKS8sIC9eKD86XFwpXFxzKikvLCAvXig/OlxccypbeG88XT8tLStbLXhvPl1cXHMqKS8sIC9eKD86XFxzKlt4bzxdPz09K1s9eG8+XVxccyopLywgL14oPzpcXHMqW3hvPF0/LT9cXC4rLVt4bz5dP1xccyopLywgL14oPzpcXHMqfn5bXFx+XStcXHMqKS8sIC9eKD86XFxzKlt4bzxdPy0tXFxzKikvLCAvXig/OlxccypbeG88XT89PVxccyopLywgL14oPzpcXHMqW3hvPF0/LVxcLlxccyopLywgL14oPzpbXCJdW2BdKS8sIC9eKD86W1wiXSkvLCAvXig/OlxccypbeG88XT8tLStbLXhvPl1cXHMqKS8sIC9eKD86XFxzKlt4bzxdPz09K1s9eG8+XVxccyopLywgL14oPzpcXHMqW3hvPF0/LT9cXC4rLVt4bz5dP1xccyopLywgL14oPzo6XFxkKykvXSxcbiAgICAgIGNvbmRpdGlvbnM6IHsgU1RZTEVfREVGSU5JVElPTjogeyBydWxlczogWzI4XSwgaW5jbHVzaXZlOiAhMSB9LCBTVFlMRV9TVE1OVDogeyBydWxlczogWzI3XSwgaW5jbHVzaXZlOiAhMSB9LCBDTEFTU0RFRklEOiB7IHJ1bGVzOiBbMjJdLCBpbmNsdXNpdmU6ICExIH0sIENMQVNTREVGOiB7IHJ1bGVzOiBbMjAsIDIxXSwgaW5jbHVzaXZlOiAhMSB9LCBDTEFTU19TVFlMRTogeyBydWxlczogWzI1XSwgaW5jbHVzaXZlOiAhMSB9LCBDTEFTUzogeyBydWxlczogWzI0XSwgaW5jbHVzaXZlOiAhMSB9LCBMTEFCRUw6IHsgcnVsZXM6IFs5OSwgMTAwLCAxMDEsIDEwMiwgMTAzXSwgaW5jbHVzaXZlOiAhMSB9LCBBUlJPV19ESVI6IHsgcnVsZXM6IFs4NSwgODYsIDg3LCA4OCwgODksIDkwLCA5MV0sIGluY2x1c2l2ZTogITEgfSwgQkxPQ0tfQVJST1c6IHsgcnVsZXM6IFs3NiwgODEsIDg0XSwgaW5jbHVzaXZlOiAhMSB9LCBOT0RFOiB7IHJ1bGVzOiBbMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA3NywgODBdLCBpbmNsdXNpdmU6ICExIH0sIG1kX3N0cmluZzogeyBydWxlczogWzksIDEwLCA3OCwgNzldLCBpbmNsdXNpdmU6ICExIH0sIHNwYWNlOiB7IHJ1bGVzOiBbXSwgaW5jbHVzaXZlOiAhMSB9LCBzdHJpbmc6IHsgcnVsZXM6IFsxMiwgMTMsIDgyLCA4M10sIGluY2x1c2l2ZTogITEgfSwgYWNjX2Rlc2NyX211bHRpbGluZTogeyBydWxlczogWzM0LCAzNV0sIGluY2x1c2l2ZTogITEgfSwgYWNjX2Rlc2NyOiB7IHJ1bGVzOiBbMzJdLCBpbmNsdXNpdmU6ICExIH0sIGFjY190aXRsZTogeyBydWxlczogWzMwXSwgaW5jbHVzaXZlOiAhMSB9LCBJTklUSUFMOiB7IHJ1bGVzOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgMTEsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIzLCAyNiwgMjksIDMxLCAzMywgMzYsIDU0LCA1NSwgNTYsIDU3LCA1OCwgNTksIDYwLCA2MSwgNjIsIDYzLCA2NCwgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA5MiwgOTMsIDk0LCA5NSwgOTYsIDk3LCA5OCwgMTA0XSwgaW5jbHVzaXZlOiAhMCB9IH1cbiAgICB9O1xuICAgIHJldHVybiBEO1xuICB9KSgpO1xuICBrLmxleGVyID0gQjtcbiAgZnVuY3Rpb24gXygpIHtcbiAgICB0aGlzLnl5ID0ge307XG4gIH1cbiAgcmV0dXJuIGQoXywgXCJQYXJzZXJcIiksIF8ucHJvdG90eXBlID0gaywgay5QYXJzZXIgPSBfLCBuZXcgXygpO1xufSkoKTtcbmJ0LnBhcnNlciA9IGJ0O1xudmFyIHZlID0gYnQsIFggPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBrdCA9IFtdLCB3dCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIEJ0ID0gXCJjb2xvclwiLCBDdCA9IFwiZmlsbFwiLCBFZSA9IFwiYmdGaWxsXCIsIFB0ID0gXCIsXCIsIF9lID0gUigpLCBjdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIERlID0gLyogQF9fUFVSRV9fICovIGQoKGUpID0+IGJlLnNhbml0aXplVGV4dChlLCBfZSksIFwic2FuaXRpemVUZXh0XCIpLCBOZSA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKGUsIHQgPSBcIlwiKSB7XG4gIGxldCBhID0gY3QuZ2V0KGUpO1xuICBhIHx8IChhID0geyBpZDogZSwgc3R5bGVzOiBbXSwgdGV4dFN0eWxlczogW10gfSwgY3Quc2V0KGUsIGEpKSwgdD8uc3BsaXQoUHQpLmZvckVhY2goKGkpID0+IHtcbiAgICBjb25zdCBsID0gaS5yZXBsYWNlKC8oW147XSopOy8sIFwiJDFcIikudHJpbSgpO1xuICAgIGlmIChSZWdFeHAoQnQpLmV4ZWMoaSkpIHtcbiAgICAgIGNvbnN0IHIgPSBsLnJlcGxhY2UoQ3QsIEVlKS5yZXBsYWNlKEJ0LCBDdCk7XG4gICAgICBhLnRleHRTdHlsZXMucHVzaChyKTtcbiAgICB9XG4gICAgYS5zdHlsZXMucHVzaChsKTtcbiAgfSk7XG59LCBcImFkZFN0eWxlQ2xhc3NcIiksIFRlID0gLyogQF9fUFVSRV9fICovIGQoZnVuY3Rpb24oZSwgdCA9IFwiXCIpIHtcbiAgY29uc3QgYSA9IFguZ2V0KGUpO1xuICB0ICE9IG51bGwgJiYgKGEuc3R5bGVzID0gdC5zcGxpdChQdCkpO1xufSwgXCJhZGRTdHlsZTJOb2RlXCIpLCBCZSA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKGUsIHQpIHtcbiAgZS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgbGV0IGkgPSBYLmdldChhKTtcbiAgICBpZiAoaSA9PT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCBsID0gYS50cmltKCk7XG4gICAgICBpID0geyBpZDogbCwgdHlwZTogXCJuYVwiLCBjaGlsZHJlbjogW10gfSwgWC5zZXQobCwgaSk7XG4gICAgfVxuICAgIGkuY2xhc3NlcyB8fCAoaS5jbGFzc2VzID0gW10pLCBpLmNsYXNzZXMucHVzaCh0KTtcbiAgfSk7XG59LCBcInNldENzc0NsYXNzXCIpLCBZdCA9IC8qIEBfX1BVUkVfXyAqLyBkKChlLCB0KSA9PiB7XG4gIGNvbnN0IGEgPSBlLmZsYXQoKSwgaSA9IFtdLCBzID0gYS5maW5kKChyKSA9PiByPy50eXBlID09PSBcImNvbHVtbi1zZXR0aW5nXCIpPy5jb2x1bW5zID8/IC0xO1xuICBmb3IgKGNvbnN0IHIgb2YgYSkge1xuICAgIGlmICh0eXBlb2YgcyA9PSBcIm51bWJlclwiICYmIHMgPiAwICYmIHIudHlwZSAhPT0gXCJjb2x1bW4tc2V0dGluZ1wiICYmIHR5cGVvZiByLndpZHRoSW5Db2x1bW5zID09IFwibnVtYmVyXCIgJiYgci53aWR0aEluQ29sdW1ucyA+IHMgJiYgTC53YXJuKFxuICAgICAgYEJsb2NrICR7ci5pZH0gd2lkdGggJHtyLndpZHRoSW5Db2x1bW5zfSBleGNlZWRzIGNvbmZpZ3VyZWQgY29sdW1uIHdpZHRoICR7c31gXG4gICAgKSwgci5sYWJlbCAmJiAoci5sYWJlbCA9IERlKHIubGFiZWwpKSwgci50eXBlID09PSBcImNsYXNzRGVmXCIpIHtcbiAgICAgIE5lKHIuaWQsIHIuY3NzKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoci50eXBlID09PSBcImFwcGx5Q2xhc3NcIikge1xuICAgICAgQmUoci5pZCwgcj8uc3R5bGVDbGFzcyA/PyBcIlwiKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoci50eXBlID09PSBcImFwcGx5U3R5bGVzXCIpIHtcbiAgICAgIHI/LnN0eWxlc1N0ciAmJiBUZShyLmlkLCByPy5zdHlsZXNTdHIpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChyLnR5cGUgPT09IFwiY29sdW1uLXNldHRpbmdcIilcbiAgICAgIHQuY29sdW1ucyA9IHIuY29sdW1ucyA/PyAtMTtcbiAgICBlbHNlIGlmIChyLnR5cGUgPT09IFwiZWRnZVwiKSB7XG4gICAgICBjb25zdCBuID0gKHd0LmdldChyLmlkKSA/PyAwKSArIDE7XG4gICAgICB3dC5zZXQoci5pZCwgbiksIHIuaWQgPSBuICsgXCItXCIgKyByLmlkLCBrdC5wdXNoKHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByLmxhYmVsIHx8IChyLnR5cGUgPT09IFwiY29tcG9zaXRlXCIgPyByLmxhYmVsID0gXCJcIiA6IHIubGFiZWwgPSByLmlkKTtcbiAgICAgIGNvbnN0IG4gPSBYLmdldChyLmlkKTtcbiAgICAgIGlmIChuID09PSB2b2lkIDAgPyBYLnNldChyLmlkLCByKSA6IChyLnR5cGUgIT09IFwibmFcIiAmJiAobi50eXBlID0gci50eXBlKSwgci5sYWJlbCAhPT0gci5pZCAmJiAobi5sYWJlbCA9IHIubGFiZWwpKSwgci5jaGlsZHJlbiAmJiBZdChyLmNoaWxkcmVuLCByKSwgci50eXBlID09PSBcInNwYWNlXCIpIHtcbiAgICAgICAgY29uc3QgYyA9IHIud2lkdGggPz8gMTtcbiAgICAgICAgZm9yIChsZXQgdSA9IDA7IHUgPCBjOyB1KyspIHtcbiAgICAgICAgICBjb25zdCBvID0gTGUocik7XG4gICAgICAgICAgby5pZCA9IG8uaWQgKyBcIi1cIiArIHUsIFguc2V0KG8uaWQsIG8pLCBpLnB1c2gobyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBuID09PSB2b2lkIDAgJiYgaS5wdXNoKHIpO1xuICAgIH1cbiAgfVxuICB0LmNoaWxkcmVuID0gaTtcbn0sIFwicG9wdWxhdGVCbG9ja0RhdGFiYXNlXCIpLCB2dCA9IFtdLCBldCA9IHsgaWQ6IFwicm9vdFwiLCB0eXBlOiBcImNvbXBvc2l0ZVwiLCBjaGlsZHJlbjogW10sIGNvbHVtbnM6IC0xIH0sIENlID0gLyogQF9fUFVSRV9fICovIGQoKCkgPT4ge1xuICBMLmRlYnVnKFwiQ2xlYXIgY2FsbGVkXCIpLCBkZSgpLCBldCA9IHsgaWQ6IFwicm9vdFwiLCB0eXBlOiBcImNvbXBvc2l0ZVwiLCBjaGlsZHJlbjogW10sIGNvbHVtbnM6IC0xIH0sIFggPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbW1wicm9vdFwiLCBldF1dKSwgdnQgPSBbXSwgY3QgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBrdCA9IFtdLCB3dCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG59LCBcImNsZWFyXCIpO1xuZnVuY3Rpb24gSHQoZSkge1xuICBzd2l0Y2ggKEwuZGVidWcoXCJ0eXBlU3RyMlR5cGVcIiwgZSksIGUpIHtcbiAgICBjYXNlIFwiW11cIjpcbiAgICAgIHJldHVybiBcInNxdWFyZVwiO1xuICAgIGNhc2UgXCIoKVwiOlxuICAgICAgcmV0dXJuIEwuZGVidWcoXCJ3ZSBoYXZlIGEgcm91bmRcIiksIFwicm91bmRcIjtcbiAgICBjYXNlIFwiKCgpKVwiOlxuICAgICAgcmV0dXJuIFwiY2lyY2xlXCI7XG4gICAgY2FzZSBcIj5dXCI6XG4gICAgICByZXR1cm4gXCJyZWN0X2xlZnRfaW52X2Fycm93XCI7XG4gICAgY2FzZSBcInt9XCI6XG4gICAgICByZXR1cm4gXCJkaWFtb25kXCI7XG4gICAgY2FzZSBcInt7fX1cIjpcbiAgICAgIHJldHVybiBcImhleGFnb25cIjtcbiAgICBjYXNlIFwiKFtdKVwiOlxuICAgICAgcmV0dXJuIFwic3RhZGl1bVwiO1xuICAgIGNhc2UgXCJbW11dXCI6XG4gICAgICByZXR1cm4gXCJzdWJyb3V0aW5lXCI7XG4gICAgY2FzZSBcIlsoKV1cIjpcbiAgICAgIHJldHVybiBcImN5bGluZGVyXCI7XG4gICAgY2FzZSBcIigoKCkpKVwiOlxuICAgICAgcmV0dXJuIFwiZG91YmxlY2lyY2xlXCI7XG4gICAgY2FzZSBcIlsvL11cIjpcbiAgICAgIHJldHVybiBcImxlYW5fcmlnaHRcIjtcbiAgICBjYXNlIFwiW1xcXFxcXFxcXVwiOlxuICAgICAgcmV0dXJuIFwibGVhbl9sZWZ0XCI7XG4gICAgY2FzZSBcIlsvXFxcXF1cIjpcbiAgICAgIHJldHVybiBcInRyYXBlem9pZFwiO1xuICAgIGNhc2UgXCJbXFxcXC9dXCI6XG4gICAgICByZXR1cm4gXCJpbnZfdHJhcGV6b2lkXCI7XG4gICAgY2FzZSBcIjxbXT5cIjpcbiAgICAgIHJldHVybiBcImJsb2NrX2Fycm93XCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIm5hXCI7XG4gIH1cbn1cbmQoSHQsIFwidHlwZVN0cjJUeXBlXCIpO1xuZnVuY3Rpb24gS3QoZSkge1xuICByZXR1cm4gTC5kZWJ1ZyhcInR5cGVTdHIyVHlwZVwiLCBlKSwgZSA9PT0gXCI9PVwiID8gXCJ0aGlja1wiIDogXCJub3JtYWxcIjtcbn1cbmQoS3QsIFwiZWRnZVR5cGVTdHIyVHlwZVwiKTtcbmZ1bmN0aW9uIFh0KGUpIHtcbiAgc3dpdGNoIChlLnJlcGxhY2UoL15bXFxzLV0rfFtcXHMtXSskL2csIFwiXCIpKSB7XG4gICAgY2FzZSBcInhcIjpcbiAgICAgIHJldHVybiBcImFycm93X2Nyb3NzXCI7XG4gICAgY2FzZSBcIm9cIjpcbiAgICAgIHJldHVybiBcImFycm93X2NpcmNsZVwiO1xuICAgIGNhc2UgXCI+XCI6XG4gICAgICByZXR1cm4gXCJhcnJvd19wb2ludFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuZChYdCwgXCJlZGdlU3RyVG9FZGdlRGF0YVwiKTtcbnZhciBJdCA9IDAsIEllID0gLyogQF9fUFVSRV9fICovIGQoKCkgPT4gKEl0KyssIFwiaWQtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTIpICsgXCItXCIgKyBJdCksIFwiZ2VuZXJhdGVJZFwiKSwgT2UgPSAvKiBAX19QVVJFX18gKi8gZCgoZSkgPT4ge1xuICBldC5jaGlsZHJlbiA9IGUsIFl0KGUsIGV0KSwgdnQgPSBldC5jaGlsZHJlbjtcbn0sIFwic2V0SGllcmFyY2h5XCIpLCBSZSA9IC8qIEBfX1BVUkVfXyAqLyBkKChlKSA9PiB7XG4gIGNvbnN0IHQgPSBYLmdldChlKTtcbiAgcmV0dXJuIHQgPyB0LmNvbHVtbnMgPyB0LmNvbHVtbnMgOiB0LmNoaWxkcmVuID8gdC5jaGlsZHJlbi5sZW5ndGggOiAtMSA6IC0xO1xufSwgXCJnZXRDb2x1bW5zXCIpLCB6ZSA9IC8qIEBfX1BVUkVfXyAqLyBkKCgpID0+IFsuLi5YLnZhbHVlcygpXSwgXCJnZXRCbG9ja3NGbGF0XCIpLCBBZSA9IC8qIEBfX1BVUkVfXyAqLyBkKCgpID0+IHZ0IHx8IFtdLCBcImdldEJsb2Nrc1wiKSwgTWUgPSAvKiBAX19QVVJFX18gKi8gZCgoKSA9PiBrdCwgXCJnZXRFZGdlc1wiKSwgRmUgPSAvKiBAX19QVVJFX18gKi8gZCgoZSkgPT4gWC5nZXQoZSksIFwiZ2V0QmxvY2tcIiksIFdlID0gLyogQF9fUFVSRV9fICovIGQoKGUpID0+IHtcbiAgWC5zZXQoZS5pZCwgZSk7XG59LCBcInNldEJsb2NrXCIpLCBQZSA9IC8qIEBfX1BVUkVfXyAqLyBkKCgpID0+IEwsIFwiZ2V0TG9nZ2VyXCIpLCBZZSA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gY3Q7XG59LCBcImdldENsYXNzZXNcIiksIEhlID0ge1xuICBnZXRDb25maWc6IC8qIEBfX1BVUkVfXyAqLyBkKCgpID0+IHJ0KCkuYmxvY2ssIFwiZ2V0Q29uZmlnXCIpLFxuICB0eXBlU3RyMlR5cGU6IEh0LFxuICBlZGdlVHlwZVN0cjJUeXBlOiBLdCxcbiAgZWRnZVN0clRvRWRnZURhdGE6IFh0LFxuICBnZXRMb2dnZXI6IFBlLFxuICBnZXRCbG9ja3NGbGF0OiB6ZSxcbiAgZ2V0QmxvY2tzOiBBZSxcbiAgZ2V0RWRnZXM6IE1lLFxuICBzZXRIaWVyYXJjaHk6IE9lLFxuICBnZXRCbG9jazogRmUsXG4gIHNldEJsb2NrOiBXZSxcbiAgZ2V0Q29sdW1uczogUmUsXG4gIGdldENsYXNzZXM6IFllLFxuICBjbGVhcjogQ2UsXG4gIGdlbmVyYXRlSWQ6IEllXG59LCBLZSA9IEhlLCBudCA9IC8qIEBfX1BVUkVfXyAqLyBkKChlLCB0KSA9PiB7XG4gIGNvbnN0IGEgPSBrZSwgaSA9IGEoZSwgXCJyXCIpLCBsID0gYShlLCBcImdcIiksIHMgPSBhKGUsIFwiYlwiKTtcbiAgcmV0dXJuIGdlKGksIGwsIHMsIHQpO1xufSwgXCJmYWRlXCIpLCBYZSA9IC8qIEBfX1BVUkVfXyAqLyBkKChlKSA9PiBgLmxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJHtlLmZvbnRGYW1pbHl9O1xuICAgIGNvbG9yOiAke2Uubm9kZVRleHRDb2xvciB8fCBlLnRleHRDb2xvcn07XG4gIH1cbiAgLmNsdXN0ZXItbGFiZWwgdGV4dCB7XG4gICAgZmlsbDogJHtlLnRpdGxlQ29sb3J9O1xuICB9XG4gIC5jbHVzdGVyLWxhYmVsIHNwYW4scCB7XG4gICAgY29sb3I6ICR7ZS50aXRsZUNvbG9yfTtcbiAgfVxuXG5cblxuICAubGFiZWwgdGV4dCxzcGFuLHAge1xuICAgIGZpbGw6ICR7ZS5ub2RlVGV4dENvbG9yIHx8IGUudGV4dENvbG9yfTtcbiAgICBjb2xvcjogJHtlLm5vZGVUZXh0Q29sb3IgfHwgZS50ZXh0Q29sb3J9O1xuICB9XG5cbiAgLm5vZGUgcmVjdCxcbiAgLm5vZGUgY2lyY2xlLFxuICAubm9kZSBlbGxpcHNlLFxuICAubm9kZSBwb2x5Z29uLFxuICAubm9kZSBwYXRoIHtcbiAgICBmaWxsOiAke2UubWFpbkJrZ307XG4gICAgc3Ryb2tlOiAke2Uubm9kZUJvcmRlcn07XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIH1cbiAgLmZsb3djaGFydC1sYWJlbCB0ZXh0IHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICB9XG4gIC8vIC5mbG93Y2hhcnQtbGFiZWwgLnRleHQtb3V0ZXItdHNwYW4ge1xuICAvLyAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIC8vIH1cbiAgLy8gLmZsb3djaGFydC1sYWJlbCAudGV4dC1pbm5lci10c3BhbiB7XG4gIC8vICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xuICAvLyB9XG5cbiAgLm5vZGUgLmxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm5vZGUuY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuYXJyb3doZWFkUGF0aCB7XG4gICAgZmlsbDogJHtlLmFycm93aGVhZENvbG9yfTtcbiAgfVxuXG4gIC5lZGdlUGF0aCAucGF0aCB7XG4gICAgc3Ryb2tlOiAke2UubGluZUNvbG9yfTtcbiAgICBzdHJva2Utd2lkdGg6IDIuMHB4O1xuICB9XG5cbiAgLmZsb3djaGFydC1saW5rIHtcbiAgICBzdHJva2U6ICR7ZS5saW5lQ29sb3J9O1xuICAgIGZpbGw6IG5vbmU7XG4gIH1cblxuICAuZWRnZUxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2UuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgcmVjdCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2UuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgICBmaWxsOiAke2UuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gICAgfVxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC8qIEZvciBodG1sIGxhYmVscyBvbmx5ICovXG4gIC5sYWJlbEJrZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtudChlLmVkZ2VMYWJlbEJhY2tncm91bmQsIDAuNSl9O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6XG4gIH1cblxuICAubm9kZSAuY2x1c3RlciB7XG4gICAgLy8gZmlsbDogJHtudChlLm1haW5Ca2csIDAuNSl9O1xuICAgIGZpbGw6ICR7bnQoZS5jbHVzdGVyQmtnLCAwLjUpfTtcbiAgICBzdHJva2U6ICR7bnQoZS5jbHVzdGVyQm9yZGVyLCAwLjIpfTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA4cHggMTZweCAtOHB4O1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICB9XG5cbiAgLmNsdXN0ZXIgdGV4dCB7XG4gICAgZmlsbDogJHtlLnRpdGxlQ29sb3J9O1xuICB9XG5cbiAgLmNsdXN0ZXIgc3BhbixwIHtcbiAgICBjb2xvcjogJHtlLnRpdGxlQ29sb3J9O1xuICB9XG4gIC8qIC5jbHVzdGVyIGRpdiB7XG4gICAgY29sb3I6ICR7ZS50aXRsZUNvbG9yfTtcbiAgfSAqL1xuXG4gIGRpdi5tZXJtYWlkVG9vbHRpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBmb250LWZhbWlseTogJHtlLmZvbnRGYW1pbHl9O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAke2UudGVydGlhcnlDb2xvcn07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtlLmJvcmRlcjJ9O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cblxuICAuZmxvd2NoYXJ0VGl0bGVUZXh0IHtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmaWxsOiAke2UudGV4dENvbG9yfTtcbiAgfVxuICAke29lKCl9XG5gLCBcImdldFN0eWxlc1wiKSwgVWUgPSBYZSwgamUgPSAvKiBAX19QVVJFX18gKi8gZCgoZSwgdCwgYSwgaSkgPT4ge1xuICB0LmZvckVhY2goKGwpID0+IHtcbiAgICBycltsXShlLCBhLCBpKTtcbiAgfSk7XG59LCBcImluc2VydE1hcmtlcnNcIiksIFZlID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQsIGEpID0+IHtcbiAgTC50cmFjZShcIk1ha2luZyBtYXJrZXJzIGZvciBcIiwgYSksIGUuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGEgKyBcIl9cIiArIHQgKyBcIi1leHRlbnNpb25TdGFydFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYXJrZXIgZXh0ZW5zaW9uIFwiICsgdCkuYXR0cihcInJlZlhcIiwgMTgpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOTApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAxLDcgTDE4LDEzIFYgMSBaXCIpLCBlLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBhICsgXCJfXCIgKyB0ICsgXCItZXh0ZW5zaW9uRW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBleHRlbnNpb24gXCIgKyB0KS5hdHRyKFwicmVmWFwiLCAxKS5hdHRyKFwicmVmWVwiLCA3KS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMjApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjgpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDEsMSBWIDEzIEwxOCw3IFpcIik7XG59LCBcImV4dGVuc2lvblwiKSwgR2UgPSAvKiBAX19QVVJFX18gKi8gZCgoZSwgdCwgYSkgPT4ge1xuICBlLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwibWFya2VyXCIpLmF0dHIoXCJpZFwiLCBhICsgXCJfXCIgKyB0ICsgXCItY29tcG9zaXRpb25TdGFydFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYXJrZXIgY29tcG9zaXRpb24gXCIgKyB0KS5hdHRyKFwicmVmWFwiLCAxOCkuYXR0cihcInJlZllcIiwgNykuYXR0cihcIm1hcmtlcldpZHRoXCIsIDE5MCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyNDApLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDE4LDcgTDksMTMgTDEsNyBMOSwxIFpcIiksIGUuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGEgKyBcIl9cIiArIHQgKyBcIi1jb21wb3NpdGlvbkVuZFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYXJrZXIgY29tcG9zaXRpb24gXCIgKyB0KS5hdHRyKFwicmVmWFwiLCAxKS5hdHRyKFwicmVmWVwiLCA3KS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMjApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjgpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDE4LDcgTDksMTMgTDEsNyBMOSwxIFpcIik7XG59LCBcImNvbXBvc2l0aW9uXCIpLCBaZSA9IC8qIEBfX1BVUkVfXyAqLyBkKChlLCB0LCBhKSA9PiB7XG4gIGUuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGEgKyBcIl9cIiArIHQgKyBcIi1hZ2dyZWdhdGlvblN0YXJ0XCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBhZ2dyZWdhdGlvbiBcIiArIHQpLmF0dHIoXCJyZWZYXCIsIDE4KS5hdHRyKFwicmVmWVwiLCA3KS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMTkwKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDI0MCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTgsNyBMOSwxMyBMMSw3IEw5LDEgWlwiKSwgZS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgYSArIFwiX1wiICsgdCArIFwiLWFnZ3JlZ2F0aW9uRW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBhZ2dyZWdhdGlvbiBcIiArIHQpLmF0dHIoXCJyZWZYXCIsIDEpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTgsNyBMOSwxMyBMMSw3IEw5LDEgWlwiKTtcbn0sIFwiYWdncmVnYXRpb25cIiksIHFlID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQsIGEpID0+IHtcbiAgZS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgYSArIFwiX1wiICsgdCArIFwiLWRlcGVuZGVuY3lTdGFydFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYXJrZXIgZGVwZW5kZW5jeSBcIiArIHQpLmF0dHIoXCJyZWZYXCIsIDYpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOTApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSA1LDcgTDksMTMgTDEsNyBMOSwxIFpcIiksIGUuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGEgKyBcIl9cIiArIHQgKyBcIi1kZXBlbmRlbmN5RW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBkZXBlbmRlbmN5IFwiICsgdCkuYXR0cihcInJlZlhcIiwgMTMpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAyOCkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTgsNyBMOSwxMyBMMTQsNyBMOSwxIFpcIik7XG59LCBcImRlcGVuZGVuY3lcIiksIEplID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQsIGEpID0+IHtcbiAgZS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgYSArIFwiX1wiICsgdCArIFwiLWxvbGxpcG9wU3RhcnRcIikuYXR0cihcImNsYXNzXCIsIFwibWFya2VyIGxvbGxpcG9wIFwiICsgdCkuYXR0cihcInJlZlhcIiwgMTMpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOTApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpLmF0dHIoXCJmaWxsXCIsIFwidHJhbnNwYXJlbnRcIikuYXR0cihcImN4XCIsIDcpLmF0dHIoXCJjeVwiLCA3KS5hdHRyKFwiclwiLCA2KSwgZS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgYSArIFwiX1wiICsgdCArIFwiLWxvbGxpcG9wRW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBsb2xsaXBvcCBcIiArIHQpLmF0dHIoXCJyZWZYXCIsIDEpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxOTApLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMjQwKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpLmF0dHIoXCJmaWxsXCIsIFwidHJhbnNwYXJlbnRcIikuYXR0cihcImN4XCIsIDcpLmF0dHIoXCJjeVwiLCA3KS5hdHRyKFwiclwiLCA2KTtcbn0sIFwibG9sbGlwb3BcIiksIFFlID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQsIGEpID0+IHtcbiAgZS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGEgKyBcIl9cIiArIHQgKyBcIi1wb2ludEVuZFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYXJrZXIgXCIgKyB0KS5hdHRyKFwidmlld0JveFwiLCBcIjAgMCAxMCAxMFwiKS5hdHRyKFwicmVmWFwiLCA2KS5hdHRyKFwicmVmWVwiLCA1KS5hdHRyKFwibWFya2VyVW5pdHNcIiwgXCJ1c2VyU3BhY2VPblVzZVwiKS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMTIpLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMTIpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgXCJNIDAgMCBMIDEwIDUgTCAwIDEwIHpcIikuYXR0cihcImNsYXNzXCIsIFwiYXJyb3dNYXJrZXJQYXRoXCIpLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDEpLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjEsMFwiKSwgZS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGEgKyBcIl9cIiArIHQgKyBcIi1wb2ludFN0YXJ0XCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBcIiArIHQpLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwIDEwXCIpLmF0dHIoXCJyZWZYXCIsIDQuNSkuYXR0cihcInJlZllcIiwgNSkuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwidXNlclNwYWNlT25Vc2VcIikuYXR0cihcIm1hcmtlcldpZHRoXCIsIDEyKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDEyKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIFwiTSAwIDUgTCAxMCAxMCBMIDEwIDAgelwiKS5hdHRyKFwiY2xhc3NcIiwgXCJhcnJvd01hcmtlclBhdGhcIikuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSkuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMSwwXCIpO1xufSwgXCJwb2ludFwiKSwgJGUgPSAvKiBAX19QVVJFX18gKi8gZCgoZSwgdCwgYSkgPT4ge1xuICBlLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgYSArIFwiX1wiICsgdCArIFwiLWNpcmNsZUVuZFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJtYXJrZXIgXCIgKyB0KS5hdHRyKFwidmlld0JveFwiLCBcIjAgMCAxMCAxMFwiKS5hdHRyKFwicmVmWFwiLCAxMSkuYXR0cihcInJlZllcIiwgNSkuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwidXNlclNwYWNlT25Vc2VcIikuYXR0cihcIm1hcmtlcldpZHRoXCIsIDExKS5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDExKS5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIFwiNVwiKS5hdHRyKFwiY3lcIiwgXCI1XCIpLmF0dHIoXCJyXCIsIFwiNVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJhcnJvd01hcmtlclBhdGhcIikuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSkuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMSwwXCIpLCBlLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgYSArIFwiX1wiICsgdCArIFwiLWNpcmNsZVN0YXJ0XCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBcIiArIHQpLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwIDEwXCIpLmF0dHIoXCJyZWZYXCIsIC0xKS5hdHRyKFwicmVmWVwiLCA1KS5hdHRyKFwibWFya2VyVW5pdHNcIiwgXCJ1c2VyU3BhY2VPblVzZVwiKS5hdHRyKFwibWFya2VyV2lkdGhcIiwgMTEpLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgMTEpLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgXCI1XCIpLmF0dHIoXCJjeVwiLCBcIjVcIikuYXR0cihcInJcIiwgXCI1XCIpLmF0dHIoXCJjbGFzc1wiLCBcImFycm93TWFya2VyUGF0aFwiKS5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAxKS5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIxLDBcIik7XG59LCBcImNpcmNsZVwiKSwgdHIgPSAvKiBAX19QVVJFX18gKi8gZCgoZSwgdCwgYSkgPT4ge1xuICBlLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgYSArIFwiX1wiICsgdCArIFwiLWNyb3NzRW5kXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBjcm9zcyBcIiArIHQpLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDExIDExXCIpLmF0dHIoXCJyZWZYXCIsIDEyKS5hdHRyKFwicmVmWVwiLCA1LjIpLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxMSkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxMSkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMSwxIGwgOSw5IE0gMTAsMSBsIC05LDlcIikuYXR0cihcImNsYXNzXCIsIFwiYXJyb3dNYXJrZXJQYXRoXCIpLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDIpLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjEsMFwiKSwgZS5hcHBlbmQoXCJtYXJrZXJcIikuYXR0cihcImlkXCIsIGEgKyBcIl9cIiArIHQgKyBcIi1jcm9zc1N0YXJ0XCIpLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtlciBjcm9zcyBcIiArIHQpLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDExIDExXCIpLmF0dHIoXCJyZWZYXCIsIC0xKS5hdHRyKFwicmVmWVwiLCA1LjIpLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAxMSkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxMSkuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMSwxIGwgOSw5IE0gMTAsMSBsIC05LDlcIikuYXR0cihcImNsYXNzXCIsIFwiYXJyb3dNYXJrZXJQYXRoXCIpLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDIpLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjEsMFwiKTtcbn0sIFwiY3Jvc3NcIiksIGVyID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQsIGEpID0+IHtcbiAgZS5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcIm1hcmtlclwiKS5hdHRyKFwiaWRcIiwgYSArIFwiX1wiICsgdCArIFwiLWJhcmJFbmRcIikuYXR0cihcInJlZlhcIiwgMTkpLmF0dHIoXCJyZWZZXCIsIDcpLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCAyMCkuYXR0cihcIm1hcmtlckhlaWdodFwiLCAxNCkuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIikuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIikuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBcIk0gMTksNyBMOSwxMyBMMTQsNyBMOSwxIFpcIik7XG59LCBcImJhcmJcIiksIHJyID0ge1xuICBleHRlbnNpb246IFZlLFxuICBjb21wb3NpdGlvbjogR2UsXG4gIGFnZ3JlZ2F0aW9uOiBaZSxcbiAgZGVwZW5kZW5jeTogcWUsXG4gIGxvbGxpcG9wOiBKZSxcbiAgcG9pbnQ6IFFlLFxuICBjaXJjbGU6ICRlLFxuICBjcm9zczogdHIsXG4gIGJhcmI6IGVyXG59LCBhciA9IGplLCBDID0gUigpPy5ibG9jaz8ucGFkZGluZyA/PyA4O1xuZnVuY3Rpb24gVXQoZSwgdCkge1xuICBpZiAoZSA9PT0gMCB8fCAhTnVtYmVyLmlzSW50ZWdlcihlKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb2x1bW5zIG11c3QgYmUgYW4gaW50ZWdlciAhPT0gMC5cIik7XG4gIGlmICh0IDwgMCB8fCAhTnVtYmVyLmlzSW50ZWdlcih0KSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQb3NpdGlvbiBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIuXCIgKyB0KTtcbiAgaWYgKGUgPCAwKVxuICAgIHJldHVybiB7IHB4OiB0LCBweTogMCB9O1xuICBpZiAoZSA9PT0gMSlcbiAgICByZXR1cm4geyBweDogMCwgcHk6IHQgfTtcbiAgY29uc3QgYSA9IHQgJSBlLCBpID0gTWF0aC5mbG9vcih0IC8gZSk7XG4gIHJldHVybiB7IHB4OiBhLCBweTogaSB9O1xufVxuZChVdCwgXCJjYWxjdWxhdGVCbG9ja1Bvc2l0aW9uXCIpO1xudmFyIHNyID0gLyogQF9fUFVSRV9fICovIGQoKGUpID0+IHtcbiAgbGV0IHQgPSAwLCBhID0gMDtcbiAgZm9yIChjb25zdCBpIG9mIGUuY2hpbGRyZW4pIHtcbiAgICBjb25zdCB7IHdpZHRoOiBsLCBoZWlnaHQ6IHMsIHg6IHIsIHk6IG4gfSA9IGkuc2l6ZSA/PyB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAsIHg6IDAsIHk6IDAgfTtcbiAgICBMLmRlYnVnKFxuICAgICAgXCJnZXRNYXhDaGlsZFNpemUgYWJjOTUgY2hpbGQ6XCIsXG4gICAgICBpLmlkLFxuICAgICAgXCJ3aWR0aDpcIixcbiAgICAgIGwsXG4gICAgICBcImhlaWdodDpcIixcbiAgICAgIHMsXG4gICAgICBcIng6XCIsXG4gICAgICByLFxuICAgICAgXCJ5OlwiLFxuICAgICAgbixcbiAgICAgIGkudHlwZVxuICAgICksIGkudHlwZSAhPT0gXCJzcGFjZVwiICYmIChsID4gdCAmJiAodCA9IGwgLyAoZS53aWR0aEluQ29sdW1ucyA/PyAxKSksIHMgPiBhICYmIChhID0gcykpO1xuICB9XG4gIHJldHVybiB7IHdpZHRoOiB0LCBoZWlnaHQ6IGEgfTtcbn0sIFwiZ2V0TWF4Q2hpbGRTaXplXCIpO1xuZnVuY3Rpb24gb3QoZSwgdCwgYSA9IDAsIGkgPSAwKSB7XG4gIEwuZGVidWcoXG4gICAgXCJzZXRCbG9ja1NpemVzIGFiYzk1IChzdGFydClcIixcbiAgICBlLmlkLFxuICAgIGU/LnNpemU/LngsXG4gICAgXCJibG9jayB3aWR0aCA9XCIsXG4gICAgZT8uc2l6ZSxcbiAgICBcInNpYmxpbmdXaWR0aFwiLFxuICAgIGFcbiAgKSwgZT8uc2l6ZT8ud2lkdGggfHwgKGUuc2l6ZSA9IHtcbiAgICB3aWR0aDogYSxcbiAgICBoZWlnaHQ6IGksXG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0pO1xuICBsZXQgbCA9IDAsIHMgPSAwO1xuICBpZiAoZS5jaGlsZHJlbj8ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgYiBvZiBlLmNoaWxkcmVuKVxuICAgICAgb3QoYiwgdCk7XG4gICAgY29uc3QgciA9IHNyKGUpO1xuICAgIGwgPSByLndpZHRoLCBzID0gci5oZWlnaHQsIEwuZGVidWcoXCJzZXRCbG9ja1NpemVzIGFiYzk1IG1heFdpZHRoIG9mXCIsIGUuaWQsIFwiOnMgY2hpbGRyZW4gaXMgXCIsIGwsIHMpO1xuICAgIGZvciAoY29uc3QgYiBvZiBlLmNoaWxkcmVuKVxuICAgICAgYi5zaXplICYmIChMLmRlYnVnKFxuICAgICAgICBgYWJjOTUgU2V0dGluZyBzaXplIG9mIGNoaWxkcmVuIG9mICR7ZS5pZH0gaWQ9JHtiLmlkfSAke2x9ICR7c30gJHtKU09OLnN0cmluZ2lmeShiLnNpemUpfWBcbiAgICAgICksIGIuc2l6ZS53aWR0aCA9IGwgKiAoYi53aWR0aEluQ29sdW1ucyA/PyAxKSArIEMgKiAoKGIud2lkdGhJbkNvbHVtbnMgPz8gMSkgLSAxKSwgYi5zaXplLmhlaWdodCA9IHMsIGIuc2l6ZS54ID0gMCwgYi5zaXplLnkgPSAwLCBMLmRlYnVnKFxuICAgICAgICBgYWJjOTUgdXBkYXRpbmcgc2l6ZSBvZiAke2UuaWR9IGNoaWxkcmVuIGNoaWxkOiR7Yi5pZH0gbWF4V2lkdGg6JHtsfSBtYXhIZWlnaHQ6JHtzfWBcbiAgICAgICkpO1xuICAgIGZvciAoY29uc3QgYiBvZiBlLmNoaWxkcmVuKVxuICAgICAgb3QoYiwgdCwgbCwgcyk7XG4gICAgY29uc3QgbiA9IGUuY29sdW1ucyA/PyAtMTtcbiAgICBsZXQgYyA9IDA7XG4gICAgZm9yIChjb25zdCBiIG9mIGUuY2hpbGRyZW4pXG4gICAgICBjICs9IGIud2lkdGhJbkNvbHVtbnMgPz8gMTtcbiAgICBsZXQgdSA9IGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIG4gPiAwICYmIG4gPCBjICYmICh1ID0gbik7XG4gICAgY29uc3QgbyA9IE1hdGguY2VpbChjIC8gdSk7XG4gICAgbGV0IHggPSB1ICogKGwgKyBDKSArIEMsIHcgPSBvICogKHMgKyBDKSArIEM7XG4gICAgaWYgKHggPCBhKSB7XG4gICAgICBMLmRlYnVnKFxuICAgICAgICBgRGV0ZWN0ZWQgdG8gc21hbGwgc2libGluZzogYWJjOTUgJHtlLmlkfSBzaWJsaW5nV2lkdGggJHthfSBzaWJsaW5nSGVpZ2h0ICR7aX0gd2lkdGggJHt4fWBcbiAgICAgICksIHggPSBhLCB3ID0gaTtcbiAgICAgIGNvbnN0IGIgPSAoYSAtIHUgKiBDIC0gQykgLyB1LCBTID0gKGkgLSBvICogQyAtIEMpIC8gbztcbiAgICAgIEwuZGVidWcoXCJTaXplIGluZGF0YSBhYmM4OFwiLCBlLmlkLCBcImNoaWxkV2lkdGhcIiwgYiwgXCJtYXhXaWR0aFwiLCBsKSwgTC5kZWJ1ZyhcIlNpemUgaW5kYXRhIGFiYzg4XCIsIGUuaWQsIFwiY2hpbGRIZWlnaHRcIiwgUywgXCJtYXhIZWlnaHRcIiwgcyksIEwuZGVidWcoXCJTaXplIGluZGF0YSBhYmM4OCB4U2l6ZVwiLCB1LCBcInBhZGRpbmdcIiwgQyk7XG4gICAgICBmb3IgKGNvbnN0IHYgb2YgZS5jaGlsZHJlbilcbiAgICAgICAgdi5zaXplICYmICh2LnNpemUud2lkdGggPSBiLCB2LnNpemUuaGVpZ2h0ID0gUywgdi5zaXplLnggPSAwLCB2LnNpemUueSA9IDApO1xuICAgIH1cbiAgICBpZiAoTC5kZWJ1ZyhcbiAgICAgIGBhYmM5NSAoZmluYWxlIGNhbGMpICR7ZS5pZH0geFNpemUgJHt1fSB5U2l6ZSAke299IGNvbHVtbnMgJHtufSR7ZS5jaGlsZHJlbi5sZW5ndGh9IHdpZHRoPSR7TWF0aC5tYXgoeCwgZS5zaXplPy53aWR0aCB8fCAwKX1gXG4gICAgKSwgeCA8IChlPy5zaXplPy53aWR0aCB8fCAwKSkge1xuICAgICAgeCA9IGU/LnNpemU/LndpZHRoIHx8IDA7XG4gICAgICBjb25zdCBiID0gbiA+IDAgPyBNYXRoLm1pbihlLmNoaWxkcmVuLmxlbmd0aCwgbikgOiBlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGlmIChiID4gMCkge1xuICAgICAgICBjb25zdCBTID0gKHggLSBiICogQyAtIEMpIC8gYjtcbiAgICAgICAgTC5kZWJ1ZyhcImFiYzk1IChncm93aW5nIHRvIGZpdCkgd2lkdGhcIiwgZS5pZCwgeCwgZS5zaXplPy53aWR0aCwgUyk7XG4gICAgICAgIGZvciAoY29uc3QgdiBvZiBlLmNoaWxkcmVuKVxuICAgICAgICAgIHYuc2l6ZSAmJiAodi5zaXplLndpZHRoID0gUyk7XG4gICAgICB9XG4gICAgfVxuICAgIGUuc2l6ZSA9IHtcbiAgICAgIHdpZHRoOiB4LFxuICAgICAgaGVpZ2h0OiB3LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG4gIEwuZGVidWcoXG4gICAgXCJzZXRCbG9ja1NpemVzIGFiYzk0IChkb25lKVwiLFxuICAgIGUuaWQsXG4gICAgZT8uc2l6ZT8ueCxcbiAgICBlPy5zaXplPy53aWR0aCxcbiAgICBlPy5zaXplPy55LFxuICAgIGU/LnNpemU/LmhlaWdodFxuICApO1xufVxuZChvdCwgXCJzZXRCbG9ja1NpemVzXCIpO1xuZnVuY3Rpb24gRXQoZSwgdCkge1xuICBMLmRlYnVnKFxuICAgIGBhYmM4NSBsYXlvdXQgYmxvY2tzICg9PmxheW91dEJsb2NrcykgJHtlLmlkfSB4OiAke2U/LnNpemU/Lnh9IHk6ICR7ZT8uc2l6ZT8ueX0gd2lkdGg6ICR7ZT8uc2l6ZT8ud2lkdGh9YFxuICApO1xuICBjb25zdCBhID0gZS5jb2x1bW5zID8/IC0xO1xuICBpZiAoTC5kZWJ1ZyhcImxheW91dEJsb2NrcyBjb2x1bW5zIGFiYzk1XCIsIGUuaWQsIFwiPT5cIiwgYSwgZSksIGUuY2hpbGRyZW4gJiYgLy8gZmluZCBtYXggd2lkdGggb2YgY2hpbGRyZW5cbiAgZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgaSA9IGU/LmNoaWxkcmVuWzBdPy5zaXplPy53aWR0aCA/PyAwLCBsID0gZS5jaGlsZHJlbi5sZW5ndGggKiBpICsgKGUuY2hpbGRyZW4ubGVuZ3RoIC0gMSkgKiBDO1xuICAgIEwuZGVidWcoXCJ3aWR0aE9mQ2hpbGRyZW4gODhcIiwgbCwgXCJwb3NYXCIpO1xuICAgIGxldCBzID0gMDtcbiAgICBMLmRlYnVnKFwiYWJjOTEgYmxvY2s/LnNpemU/LnhcIiwgZS5pZCwgZT8uc2l6ZT8ueCk7XG4gICAgbGV0IHIgPSBlPy5zaXplPy54ID8gZT8uc2l6ZT8ueCArICgtZT8uc2l6ZT8ud2lkdGggLyAyIHx8IDApIDogLUMsIG4gPSAwO1xuICAgIGZvciAoY29uc3QgYyBvZiBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCB1ID0gZTtcbiAgICAgIGlmICghYy5zaXplKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGNvbnN0IHsgd2lkdGg6IG8sIGhlaWdodDogeCB9ID0gYy5zaXplLCB7IHB4OiB3LCBweTogYiB9ID0gVXQoYSwgcyk7XG4gICAgICBpZiAoYiAhPSBuICYmIChuID0gYiwgciA9IGU/LnNpemU/LnggPyBlPy5zaXplPy54ICsgKC1lPy5zaXplPy53aWR0aCAvIDIgfHwgMCkgOiAtQywgTC5kZWJ1ZyhcIk5ldyByb3cgaW4gbGF5b3V0IGZvciBibG9ja1wiLCBlLmlkLCBcIiBhbmQgY2hpbGQgXCIsIGMuaWQsIG4pKSwgTC5kZWJ1ZyhcbiAgICAgICAgYGFiYzg5IGxheW91dCBibG9ja3MgKGNoaWxkKSBpZDogJHtjLmlkfSBQb3M6ICR7c30gKHB4LCBweSkgJHt3fSwke2J9ICgke3U/LnNpemU/Lnh9LCR7dT8uc2l6ZT8ueX0pIHBhcmVudDogJHt1LmlkfSB3aWR0aDogJHtvfSR7Q31gXG4gICAgICApLCB1LnNpemUpIHtcbiAgICAgICAgY29uc3QgdiA9IG8gLyAyO1xuICAgICAgICBjLnNpemUueCA9IHIgKyBDICsgdiwgTC5kZWJ1ZyhcbiAgICAgICAgICBgYWJjOTEgbGF5b3V0IGJsb2NrcyAoY2FsYykgcHgsIHB5aWQ6JHtjLmlkfSBzdGFydGluZ1Bvcz1YJHtyfSBuZXcgc3RhcnRpbmdQb3NYJHtjLnNpemUueH0gJHt2fSBwYWRkaW5nPSR7Q30gd2lkdGg9JHtvfSBoYWxmV2lkdGg9JHt2fSA9PiB4OiR7Yy5zaXplLnh9IHk6JHtjLnNpemUueX0gJHtjLndpZHRoSW5Db2x1bW5zfSAod2lkdGggKiAoY2hpbGQ/LncgfHwgMSkpIC8gMiAke28gKiAoYz8ud2lkdGhJbkNvbHVtbnMgPz8gMSkgLyAyfWBcbiAgICAgICAgKSwgciA9IGMuc2l6ZS54ICsgdiwgYy5zaXplLnkgPSB1LnNpemUueSAtIHUuc2l6ZS5oZWlnaHQgLyAyICsgYiAqICh4ICsgQykgKyB4IC8gMiArIEMsIEwuZGVidWcoXG4gICAgICAgICAgYGFiYzg4IGxheW91dCBibG9ja3MgKGNhbGMpIHB4LCBweWlkOiR7Yy5pZH1zdGFydGluZ1Bvc1gke3J9JHtDfSR7dn09Png6JHtjLnNpemUueH15OiR7Yy5zaXplLnl9JHtjLndpZHRoSW5Db2x1bW5zfSh3aWR0aCAqIChjaGlsZD8udyB8fCAxKSkgLyAyJHtvICogKGM/LndpZHRoSW5Db2x1bW5zID8/IDEpIC8gMn1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjLmNoaWxkcmVuICYmIEV0KGMpO1xuICAgICAgbGV0IFMgPSBjPy53aWR0aEluQ29sdW1ucyA/PyAxO1xuICAgICAgYSA+IDAgJiYgKFMgPSBNYXRoLm1pbihTLCBhIC0gcyAlIGEpKSwgcyArPSBTLCBMLmRlYnVnKFwiYWJjODggY29sdW1uc1Bvc1wiLCBjLCBzKTtcbiAgICB9XG4gIH1cbiAgTC5kZWJ1ZyhcbiAgICBgbGF5b3V0IGJsb2NrcyAoPD09bGF5b3V0QmxvY2tzKSAke2UuaWR9IHg6ICR7ZT8uc2l6ZT8ueH0geTogJHtlPy5zaXplPy55fSB3aWR0aDogJHtlPy5zaXplPy53aWR0aH1gXG4gICk7XG59XG5kKEV0LCBcImxheW91dEJsb2Nrc1wiKTtcbmZ1bmN0aW9uIF90KGUsIHsgbWluWDogdCwgbWluWTogYSwgbWF4WDogaSwgbWF4WTogbCB9ID0geyBtaW5YOiAwLCBtaW5ZOiAwLCBtYXhYOiAwLCBtYXhZOiAwIH0pIHtcbiAgaWYgKGUuc2l6ZSAmJiBlLmlkICE9PSBcInJvb3RcIikge1xuICAgIGNvbnN0IHsgeDogcywgeTogciwgd2lkdGg6IG4sIGhlaWdodDogYyB9ID0gZS5zaXplO1xuICAgIHMgLSBuIC8gMiA8IHQgJiYgKHQgPSBzIC0gbiAvIDIpLCByIC0gYyAvIDIgPCBhICYmIChhID0gciAtIGMgLyAyKSwgcyArIG4gLyAyID4gaSAmJiAoaSA9IHMgKyBuIC8gMiksIHIgKyBjIC8gMiA+IGwgJiYgKGwgPSByICsgYyAvIDIpO1xuICB9XG4gIGlmIChlLmNoaWxkcmVuKVxuICAgIGZvciAoY29uc3QgcyBvZiBlLmNoaWxkcmVuKVxuICAgICAgKHsgbWluWDogdCwgbWluWTogYSwgbWF4WDogaSwgbWF4WTogbCB9ID0gX3QocywgeyBtaW5YOiB0LCBtaW5ZOiBhLCBtYXhYOiBpLCBtYXhZOiBsIH0pKTtcbiAgcmV0dXJuIHsgbWluWDogdCwgbWluWTogYSwgbWF4WDogaSwgbWF4WTogbCB9O1xufVxuZChfdCwgXCJmaW5kQm91bmRzXCIpO1xuZnVuY3Rpb24ganQoZSkge1xuICBjb25zdCB0ID0gZS5nZXRCbG9jayhcInJvb3RcIik7XG4gIGlmICghdClcbiAgICByZXR1cm47XG4gIG90KHQsIGUsIDAsIDApLCBFdCh0KSwgTC5kZWJ1ZyhcImdldEJsb2Nrc1wiLCBKU09OLnN0cmluZ2lmeSh0LCBudWxsLCAyKSk7XG4gIGNvbnN0IHsgbWluWDogYSwgbWluWTogaSwgbWF4WDogbCwgbWF4WTogcyB9ID0gX3QodCksIHIgPSBzIC0gaSwgbiA9IGwgLSBhO1xuICByZXR1cm4geyB4OiBhLCB5OiBpLCB3aWR0aDogbiwgaGVpZ2h0OiByIH07XG59XG5kKGp0LCBcImxheW91dFwiKTtcbmZ1bmN0aW9uIG10KGUsIHQpIHtcbiAgdCAmJiBlLmF0dHIoXCJzdHlsZVwiLCB0KTtcbn1cbmQobXQsIFwiYXBwbHlTdHlsZVwiKTtcbmZ1bmN0aW9uIFZ0KGUsIHQpIHtcbiAgY29uc3QgYSA9IE8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJmb3JlaWduT2JqZWN0XCIpKSwgaSA9IGEuYXBwZW5kKFwieGh0bWw6ZGl2XCIpLCBsID0gZS5sYWJlbCwgcyA9IGUuaXNOb2RlID8gXCJub2RlTGFiZWxcIiA6IFwiZWRnZUxhYmVsXCIsIHIgPSBpLmFwcGVuZChcInNwYW5cIik7XG4gIHJldHVybiByLmh0bWwoeXQobCwgdCkpLCBtdChyLCBlLmxhYmVsU3R5bGUpLCByLmF0dHIoXCJjbGFzc1wiLCBzKSwgbXQoaSwgZS5sYWJlbFN0eWxlKSwgaS5zdHlsZShcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIiksIGkuc3R5bGUoXCJ3aGl0ZS1zcGFjZVwiLCBcIm5vd3JhcFwiKSwgaS5hdHRyKFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpLCBhLm5vZGUoKTtcbn1cbmQoVnQsIFwiYWRkSHRtbExhYmVsXCIpO1xudmFyIGlyID0gLyogQF9fUFVSRV9fICovIGQoYXN5bmMgKGUsIHQsIGEsIGkpID0+IHtcbiAgbGV0IGwgPSBlIHx8IFwiXCI7XG4gIHR5cGVvZiBsID09IFwib2JqZWN0XCIgJiYgKGwgPSBsWzBdKTtcbiAgY29uc3QgcyA9IFIoKTtcbiAgaWYgKGoocy5mbG93Y2hhcnQuaHRtbExhYmVscykpIHtcbiAgICBsID0gbC5yZXBsYWNlKC9cXFxcbnxcXG4vZywgXCI8YnIgLz5cIiksIEwuZGVidWcoXCJ2ZXJ0ZXhUZXh0XCIgKyBsKTtcbiAgICBjb25zdCByID0gYXdhaXQgd2UoeHQobCkpLCBuID0ge1xuICAgICAgaXNOb2RlOiBpLFxuICAgICAgbGFiZWw6IHIsXG4gICAgICBsYWJlbFN0eWxlOiB0LnJlcGxhY2UoXCJmaWxsOlwiLCBcImNvbG9yOlwiKVxuICAgIH07XG4gICAgcmV0dXJuIFZ0KG4sIHMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRleHRcIik7XG4gICAgci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB0LnJlcGxhY2UoXCJjb2xvcjpcIiwgXCJmaWxsOlwiKSk7XG4gICAgbGV0IG4gPSBbXTtcbiAgICB0eXBlb2YgbCA9PSBcInN0cmluZ1wiID8gbiA9IGwuc3BsaXQoL1xcXFxufFxcbnw8YnJcXHMqXFwvPz4vZ2kpIDogQXJyYXkuaXNBcnJheShsKSA/IG4gPSBsIDogbiA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBuKSB7XG4gICAgICBjb25zdCB1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0c3BhblwiKTtcbiAgICAgIHUuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwgXCJ4bWw6c3BhY2VcIiwgXCJwcmVzZXJ2ZVwiKSwgdS5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBcIjFlbVwiKSwgdS5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMFwiKSwgYSA/IHUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZS1yb3dcIikgOiB1LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicm93XCIpLCB1LnRleHRDb250ZW50ID0gYy50cmltKCksIHIuYXBwZW5kQ2hpbGQodSk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG59LCBcImNyZWF0ZUxhYmVsXCIpLCBLID0gaXIsIG5yID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQsIGEsIGksIGwpID0+IHtcbiAgdC5hcnJvd1R5cGVTdGFydCAmJiBPdChlLCBcInN0YXJ0XCIsIHQuYXJyb3dUeXBlU3RhcnQsIGEsIGksIGwpLCB0LmFycm93VHlwZUVuZCAmJiBPdChlLCBcImVuZFwiLCB0LmFycm93VHlwZUVuZCwgYSwgaSwgbCk7XG59LCBcImFkZEVkZ2VNYXJrZXJzXCIpLCBsciA9IHtcbiAgYXJyb3dfY3Jvc3M6IFwiY3Jvc3NcIixcbiAgYXJyb3dfcG9pbnQ6IFwicG9pbnRcIixcbiAgYXJyb3dfYmFyYjogXCJiYXJiXCIsXG4gIGFycm93X2NpcmNsZTogXCJjaXJjbGVcIixcbiAgYWdncmVnYXRpb246IFwiYWdncmVnYXRpb25cIixcbiAgZXh0ZW5zaW9uOiBcImV4dGVuc2lvblwiLFxuICBjb21wb3NpdGlvbjogXCJjb21wb3NpdGlvblwiLFxuICBkZXBlbmRlbmN5OiBcImRlcGVuZGVuY3lcIixcbiAgbG9sbGlwb3A6IFwibG9sbGlwb3BcIlxufSwgT3QgPSAvKiBAX19QVVJFX18gKi8gZCgoZSwgdCwgYSwgaSwgbCwgcykgPT4ge1xuICBjb25zdCByID0gbHJbYV07XG4gIGlmICghcikge1xuICAgIEwud2FybihgVW5rbm93biBhcnJvdyB0eXBlOiAke2F9YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG4gPSB0ID09PSBcInN0YXJ0XCIgPyBcIlN0YXJ0XCIgOiBcIkVuZFwiO1xuICBlLmF0dHIoYG1hcmtlci0ke3R9YCwgYHVybCgke2l9IyR7bH1fJHtzfS0ke3J9JHtufSlgKTtcbn0sIFwiYWRkRWRnZU1hcmtlclwiKSwgTHQgPSB7fSwgTSA9IHt9LCBjciA9IC8qIEBfX1BVUkVfXyAqLyBkKGFzeW5jIChlLCB0KSA9PiB7XG4gIGNvbnN0IGEgPSBSKCksIGkgPSBqKGEuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpLCBsID0gdC5sYWJlbFR5cGUgPT09IFwibWFya2Rvd25cIiA/IFd0KFxuICAgIGUsXG4gICAgdC5sYWJlbCxcbiAgICB7XG4gICAgICBzdHlsZTogdC5sYWJlbFN0eWxlLFxuICAgICAgdXNlSHRtbExhYmVsczogaSxcbiAgICAgIGFkZFN2Z0JhY2tncm91bmQ6ICEwXG4gICAgfSxcbiAgICBhXG4gICkgOiBhd2FpdCBLKHQubGFiZWwsIHQubGFiZWxTdHlsZSksIHMgPSBlLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZWRnZUxhYmVsXCIpLCByID0gcy5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xuICByLm5vZGUoKS5hcHBlbmRDaGlsZChsKTtcbiAgbGV0IG4gPSBsLmdldEJCb3goKTtcbiAgaWYgKGkpIHtcbiAgICBjb25zdCB1ID0gbC5jaGlsZHJlblswXSwgbyA9IE8obCk7XG4gICAgbiA9IHUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIG8uYXR0cihcIndpZHRoXCIsIG4ud2lkdGgpLCBvLmF0dHIoXCJoZWlnaHRcIiwgbi5oZWlnaHQpO1xuICB9XG4gIHIuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIC1uLndpZHRoIC8gMiArIFwiLCBcIiArIC1uLmhlaWdodCAvIDIgKyBcIilcIiksIEx0W3QuaWRdID0gcywgdC53aWR0aCA9IG4ud2lkdGgsIHQuaGVpZ2h0ID0gbi5oZWlnaHQ7XG4gIGxldCBjO1xuICBpZiAodC5zdGFydExhYmVsTGVmdCkge1xuICAgIGNvbnN0IHUgPSBhd2FpdCBLKHQuc3RhcnRMYWJlbExlZnQsIHQubGFiZWxTdHlsZSksIG8gPSBlLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZWRnZVRlcm1pbmFsc1wiKSwgeCA9IG8uaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJpbm5lclwiKTtcbiAgICBjID0geC5ub2RlKCkuYXBwZW5kQ2hpbGQodSk7XG4gICAgY29uc3QgdyA9IHUuZ2V0QkJveCgpO1xuICAgIHguYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIC13LndpZHRoIC8gMiArIFwiLCBcIiArIC13LmhlaWdodCAvIDIgKyBcIilcIiksIE1bdC5pZF0gfHwgKE1bdC5pZF0gPSB7fSksIE1bdC5pZF0uc3RhcnRMZWZ0ID0gbywgdHQoYywgdC5zdGFydExhYmVsTGVmdCk7XG4gIH1cbiAgaWYgKHQuc3RhcnRMYWJlbFJpZ2h0KSB7XG4gICAgY29uc3QgdSA9IGF3YWl0IEsodC5zdGFydExhYmVsUmlnaHQsIHQubGFiZWxTdHlsZSksIG8gPSBlLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZWRnZVRlcm1pbmFsc1wiKSwgeCA9IG8uaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJpbm5lclwiKTtcbiAgICBjID0gby5ub2RlKCkuYXBwZW5kQ2hpbGQodSksIHgubm9kZSgpLmFwcGVuZENoaWxkKHUpO1xuICAgIGNvbnN0IHcgPSB1LmdldEJCb3goKTtcbiAgICB4LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAtdy53aWR0aCAvIDIgKyBcIiwgXCIgKyAtdy5oZWlnaHQgLyAyICsgXCIpXCIpLCBNW3QuaWRdIHx8IChNW3QuaWRdID0ge30pLCBNW3QuaWRdLnN0YXJ0UmlnaHQgPSBvLCB0dChjLCB0LnN0YXJ0TGFiZWxSaWdodCk7XG4gIH1cbiAgaWYgKHQuZW5kTGFiZWxMZWZ0KSB7XG4gICAgY29uc3QgdSA9IGF3YWl0IEsodC5lbmRMYWJlbExlZnQsIHQubGFiZWxTdHlsZSksIG8gPSBlLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZWRnZVRlcm1pbmFsc1wiKSwgeCA9IG8uaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJpbm5lclwiKTtcbiAgICBjID0geC5ub2RlKCkuYXBwZW5kQ2hpbGQodSk7XG4gICAgY29uc3QgdyA9IHUuZ2V0QkJveCgpO1xuICAgIHguYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIC13LndpZHRoIC8gMiArIFwiLCBcIiArIC13LmhlaWdodCAvIDIgKyBcIilcIiksIG8ubm9kZSgpLmFwcGVuZENoaWxkKHUpLCBNW3QuaWRdIHx8IChNW3QuaWRdID0ge30pLCBNW3QuaWRdLmVuZExlZnQgPSBvLCB0dChjLCB0LmVuZExhYmVsTGVmdCk7XG4gIH1cbiAgaWYgKHQuZW5kTGFiZWxSaWdodCkge1xuICAgIGNvbnN0IHUgPSBhd2FpdCBLKHQuZW5kTGFiZWxSaWdodCwgdC5sYWJlbFN0eWxlKSwgbyA9IGUuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJlZGdlVGVybWluYWxzXCIpLCB4ID0gby5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImlubmVyXCIpO1xuICAgIGMgPSB4Lm5vZGUoKS5hcHBlbmRDaGlsZCh1KTtcbiAgICBjb25zdCB3ID0gdS5nZXRCQm94KCk7XG4gICAgeC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgLXcud2lkdGggLyAyICsgXCIsIFwiICsgLXcuaGVpZ2h0IC8gMiArIFwiKVwiKSwgby5ub2RlKCkuYXBwZW5kQ2hpbGQodSksIE1bdC5pZF0gfHwgKE1bdC5pZF0gPSB7fSksIE1bdC5pZF0uZW5kUmlnaHQgPSBvLCB0dChjLCB0LmVuZExhYmVsUmlnaHQpO1xuICB9XG4gIHJldHVybiBsO1xufSwgXCJpbnNlcnRFZGdlTGFiZWxcIik7XG5mdW5jdGlvbiB0dChlLCB0KSB7XG4gIFIoKS5mbG93Y2hhcnQuaHRtbExhYmVscyAmJiBlICYmIChlLnN0eWxlLndpZHRoID0gdC5sZW5ndGggKiA5ICsgXCJweFwiLCBlLnN0eWxlLmhlaWdodCA9IFwiMTJweFwiKTtcbn1cbmQodHQsIFwic2V0VGVybWluYWxXaWR0aFwiKTtcbnZhciBvciA9IC8qIEBfX1BVUkVfXyAqLyBkKChlLCB0KSA9PiB7XG4gIEwuZGVidWcoXCJNb3ZpbmcgbGFiZWwgYWJjODggXCIsIGUuaWQsIGUubGFiZWwsIEx0W2UuaWRdLCB0KTtcbiAgbGV0IGEgPSB0LnVwZGF0ZWRQYXRoID8gdC51cGRhdGVkUGF0aCA6IHQub3JpZ2luYWxQYXRoO1xuICBjb25zdCBpID0gUigpLCB7IHN1YkdyYXBoVGl0bGVUb3RhbE1hcmdpbjogbCB9ID0geWUoaSk7XG4gIGlmIChlLmxhYmVsKSB7XG4gICAgY29uc3QgcyA9IEx0W2UuaWRdO1xuICAgIGxldCByID0gZS54LCBuID0gZS55O1xuICAgIGlmIChhKSB7XG4gICAgICBjb25zdCBjID0gJC5jYWxjTGFiZWxQb3NpdGlvbihhKTtcbiAgICAgIEwuZGVidWcoXG4gICAgICAgIFwiTW92aW5nIGxhYmVsIFwiICsgZS5sYWJlbCArIFwiIGZyb20gKFwiLFxuICAgICAgICByLFxuICAgICAgICBcIixcIixcbiAgICAgICAgbixcbiAgICAgICAgXCIpIHRvIChcIixcbiAgICAgICAgYy54LFxuICAgICAgICBcIixcIixcbiAgICAgICAgYy55LFxuICAgICAgICBcIikgYWJjODhcIlxuICAgICAgKSwgdC51cGRhdGVkUGF0aCAmJiAociA9IGMueCwgbiA9IGMueSk7XG4gICAgfVxuICAgIHMuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cn0sICR7biArIGwgLyAyfSlgKTtcbiAgfVxuICBpZiAoZS5zdGFydExhYmVsTGVmdCkge1xuICAgIGNvbnN0IHMgPSBNW2UuaWRdLnN0YXJ0TGVmdDtcbiAgICBsZXQgciA9IGUueCwgbiA9IGUueTtcbiAgICBpZiAoYSkge1xuICAgICAgY29uc3QgYyA9ICQuY2FsY1Rlcm1pbmFsTGFiZWxQb3NpdGlvbihlLmFycm93VHlwZVN0YXJ0ID8gMTAgOiAwLCBcInN0YXJ0X2xlZnRcIiwgYSk7XG4gICAgICByID0gYy54LCBuID0gYy55O1xuICAgIH1cbiAgICBzLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3J9LCAke259KWApO1xuICB9XG4gIGlmIChlLnN0YXJ0TGFiZWxSaWdodCkge1xuICAgIGNvbnN0IHMgPSBNW2UuaWRdLnN0YXJ0UmlnaHQ7XG4gICAgbGV0IHIgPSBlLngsIG4gPSBlLnk7XG4gICAgaWYgKGEpIHtcbiAgICAgIGNvbnN0IGMgPSAkLmNhbGNUZXJtaW5hbExhYmVsUG9zaXRpb24oXG4gICAgICAgIGUuYXJyb3dUeXBlU3RhcnQgPyAxMCA6IDAsXG4gICAgICAgIFwic3RhcnRfcmlnaHRcIixcbiAgICAgICAgYVxuICAgICAgKTtcbiAgICAgIHIgPSBjLngsIG4gPSBjLnk7XG4gICAgfVxuICAgIHMuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cn0sICR7bn0pYCk7XG4gIH1cbiAgaWYgKGUuZW5kTGFiZWxMZWZ0KSB7XG4gICAgY29uc3QgcyA9IE1bZS5pZF0uZW5kTGVmdDtcbiAgICBsZXQgciA9IGUueCwgbiA9IGUueTtcbiAgICBpZiAoYSkge1xuICAgICAgY29uc3QgYyA9ICQuY2FsY1Rlcm1pbmFsTGFiZWxQb3NpdGlvbihlLmFycm93VHlwZUVuZCA/IDEwIDogMCwgXCJlbmRfbGVmdFwiLCBhKTtcbiAgICAgIHIgPSBjLngsIG4gPSBjLnk7XG4gICAgfVxuICAgIHMuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cn0sICR7bn0pYCk7XG4gIH1cbiAgaWYgKGUuZW5kTGFiZWxSaWdodCkge1xuICAgIGNvbnN0IHMgPSBNW2UuaWRdLmVuZFJpZ2h0O1xuICAgIGxldCByID0gZS54LCBuID0gZS55O1xuICAgIGlmIChhKSB7XG4gICAgICBjb25zdCBjID0gJC5jYWxjVGVybWluYWxMYWJlbFBvc2l0aW9uKGUuYXJyb3dUeXBlRW5kID8gMTAgOiAwLCBcImVuZF9yaWdodFwiLCBhKTtcbiAgICAgIHIgPSBjLngsIG4gPSBjLnk7XG4gICAgfVxuICAgIHMuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cn0sICR7bn0pYCk7XG4gIH1cbn0sIFwicG9zaXRpb25FZGdlTGFiZWxcIiksIGhyID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQpID0+IHtcbiAgY29uc3QgYSA9IGUueCwgaSA9IGUueSwgbCA9IE1hdGguYWJzKHQueCAtIGEpLCBzID0gTWF0aC5hYnModC55IC0gaSksIHIgPSBlLndpZHRoIC8gMiwgbiA9IGUuaGVpZ2h0IC8gMjtcbiAgcmV0dXJuIGwgPj0gciB8fCBzID49IG47XG59LCBcIm91dHNpZGVOb2RlXCIpLCBkciA9IC8qIEBfX1BVUkVfXyAqLyBkKChlLCB0LCBhKSA9PiB7XG4gIEwuZGVidWcoYGludGVyc2VjdGlvbiBjYWxjIGFiYzg5OlxuICBvdXRzaWRlUG9pbnQ6ICR7SlNPTi5zdHJpbmdpZnkodCl9XG4gIGluc2lkZVBvaW50IDogJHtKU09OLnN0cmluZ2lmeShhKX1cbiAgbm9kZSAgICAgICAgOiB4OiR7ZS54fSB5OiR7ZS55fSB3OiR7ZS53aWR0aH0gaDoke2UuaGVpZ2h0fWApO1xuICBjb25zdCBpID0gZS54LCBsID0gZS55LCBzID0gTWF0aC5hYnMoaSAtIGEueCksIHIgPSBlLndpZHRoIC8gMjtcbiAgbGV0IG4gPSBhLnggPCB0LnggPyByIC0gcyA6IHIgKyBzO1xuICBjb25zdCBjID0gZS5oZWlnaHQgLyAyLCB1ID0gTWF0aC5hYnModC55IC0gYS55KSwgbyA9IE1hdGguYWJzKHQueCAtIGEueCk7XG4gIGlmIChNYXRoLmFicyhsIC0gdC55KSAqIHIgPiBNYXRoLmFicyhpIC0gdC54KSAqIGMpIHtcbiAgICBsZXQgeCA9IGEueSA8IHQueSA/IHQueSAtIGMgLSBsIDogbCAtIGMgLSB0Lnk7XG4gICAgbiA9IG8gKiB4IC8gdTtcbiAgICBjb25zdCB3ID0ge1xuICAgICAgeDogYS54IDwgdC54ID8gYS54ICsgbiA6IGEueCAtIG8gKyBuLFxuICAgICAgeTogYS55IDwgdC55ID8gYS55ICsgdSAtIHggOiBhLnkgLSB1ICsgeFxuICAgIH07XG4gICAgcmV0dXJuIG4gPT09IDAgJiYgKHcueCA9IHQueCwgdy55ID0gdC55KSwgbyA9PT0gMCAmJiAody54ID0gdC54KSwgdSA9PT0gMCAmJiAody55ID0gdC55KSwgTC5kZWJ1ZyhgYWJjODkgdG9wcC9ib3R0IGNhbGMsIFEgJHt1fSwgcSAke3h9LCBSICR7b30sIHIgJHtufWAsIHcpLCB3O1xuICB9IGVsc2Uge1xuICAgIGEueCA8IHQueCA/IG4gPSB0LnggLSByIC0gaSA6IG4gPSBpIC0gciAtIHQueDtcbiAgICBsZXQgeCA9IHUgKiBuIC8gbywgdyA9IGEueCA8IHQueCA/IGEueCArIG8gLSBuIDogYS54IC0gbyArIG4sIGIgPSBhLnkgPCB0LnkgPyBhLnkgKyB4IDogYS55IC0geDtcbiAgICByZXR1cm4gTC5kZWJ1Zyhgc2lkZXMgY2FsYyBhYmM4OSwgUSAke3V9LCBxICR7eH0sIFIgJHtvfSwgciAke259YCwgeyBfeDogdywgX3k6IGIgfSksIG4gPT09IDAgJiYgKHcgPSB0LngsIGIgPSB0LnkpLCBvID09PSAwICYmICh3ID0gdC54KSwgdSA9PT0gMCAmJiAoYiA9IHQueSksIHsgeDogdywgeTogYiB9O1xuICB9XG59LCBcImludGVyc2VjdGlvblwiKSwgUnQgPSAvKiBAX19QVVJFX18gKi8gZCgoZSwgdCkgPT4ge1xuICBMLmRlYnVnKFwiYWJjODggY3V0UGF0aEF0SW50ZXJzZWN0XCIsIGUsIHQpO1xuICBsZXQgYSA9IFtdLCBpID0gZVswXSwgbCA9ICExO1xuICByZXR1cm4gZS5mb3JFYWNoKChzKSA9PiB7XG4gICAgaWYgKCFocih0LCBzKSAmJiAhbCkge1xuICAgICAgY29uc3QgciA9IGRyKHQsIGksIHMpO1xuICAgICAgbGV0IG4gPSAhMTtcbiAgICAgIGEuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBuID0gbiB8fCBjLnggPT09IHIueCAmJiBjLnkgPT09IHIueTtcbiAgICAgIH0pLCBhLnNvbWUoKGMpID0+IGMueCA9PT0gci54ICYmIGMueSA9PT0gci55KSB8fCBhLnB1c2gociksIGwgPSAhMDtcbiAgICB9IGVsc2VcbiAgICAgIGkgPSBzLCBsIHx8IGEucHVzaChzKTtcbiAgfSksIGE7XG59LCBcImN1dFBhdGhBdEludGVyc2VjdFwiKSwgZ3IgPSAvKiBAX19QVVJFX18gKi8gZChmdW5jdGlvbihlLCB0LCBhLCBpLCBsLCBzLCByKSB7XG4gIGxldCBuID0gYS5wb2ludHM7XG4gIEwuZGVidWcoXCJhYmM4OCBJbnNlcnRFZGdlOiBlZGdlPVwiLCBhLCBcImU9XCIsIHQpO1xuICBsZXQgYyA9ICExO1xuICBjb25zdCB1ID0gcy5ub2RlKHQudik7XG4gIHZhciBvID0gcy5ub2RlKHQudyk7XG4gIG8/LmludGVyc2VjdCAmJiB1Py5pbnRlcnNlY3QgJiYgKG4gPSBuLnNsaWNlKDEsIGEucG9pbnRzLmxlbmd0aCAtIDEpLCBuLnVuc2hpZnQodS5pbnRlcnNlY3QoblswXSkpLCBuLnB1c2goby5pbnRlcnNlY3QobltuLmxlbmd0aCAtIDFdKSkpLCBhLnRvQ2x1c3RlciAmJiAoTC5kZWJ1ZyhcInRvIGNsdXN0ZXIgYWJjODhcIiwgaVthLnRvQ2x1c3Rlcl0pLCBuID0gUnQoYS5wb2ludHMsIGlbYS50b0NsdXN0ZXJdLm5vZGUpLCBjID0gITApLCBhLmZyb21DbHVzdGVyICYmIChMLmRlYnVnKFwiZnJvbSBjbHVzdGVyIGFiYzg4XCIsIGlbYS5mcm9tQ2x1c3Rlcl0pLCBuID0gUnQobi5yZXZlcnNlKCksIGlbYS5mcm9tQ2x1c3Rlcl0ubm9kZSkucmV2ZXJzZSgpLCBjID0gITApO1xuICBjb25zdCB4ID0gbi5maWx0ZXIoKHkpID0+ICFOdW1iZXIuaXNOYU4oeS55KSk7XG4gIGxldCB3ID0gZmU7XG4gIGEuY3VydmUgJiYgKGwgPT09IFwiZ3JhcGhcIiB8fCBsID09PSBcImZsb3djaGFydFwiKSAmJiAodyA9IGEuY3VydmUpO1xuICBjb25zdCB7IHg6IGIsIHk6IFMgfSA9IHVlKGEpLCB2ID0gcGUoKS54KGIpLnkoUykuY3VydmUodyk7XG4gIGxldCBrO1xuICBzd2l0Y2ggKGEudGhpY2tuZXNzKSB7XG4gICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgayA9IFwiZWRnZS10aGlja25lc3Mtbm9ybWFsXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGhpY2tcIjpcbiAgICAgIGsgPSBcImVkZ2UtdGhpY2tuZXNzLXRoaWNrXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaW52aXNpYmxlXCI6XG4gICAgICBrID0gXCJlZGdlLXRoaWNrbmVzcy10aGlja1wiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGsgPSBcIlwiO1xuICB9XG4gIHN3aXRjaCAoYS5wYXR0ZXJuKSB7XG4gICAgY2FzZSBcInNvbGlkXCI6XG4gICAgICBrICs9IFwiIGVkZ2UtcGF0dGVybi1zb2xpZFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRvdHRlZFwiOlxuICAgICAgayArPSBcIiBlZGdlLXBhdHRlcm4tZG90dGVkXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGFzaGVkXCI6XG4gICAgICBrICs9IFwiIGVkZ2UtcGF0dGVybi1kYXNoZWRcIjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGNvbnN0IEIgPSBlLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgdih4KSkuYXR0cihcImlkXCIsIGEuaWQpLmF0dHIoXCJjbGFzc1wiLCBcIiBcIiArIGsgKyAoYS5jbGFzc2VzID8gXCIgXCIgKyBhLmNsYXNzZXMgOiBcIlwiKSkuYXR0cihcInN0eWxlXCIsIGEuc3R5bGUpO1xuICBsZXQgXyA9IFwiXCI7XG4gIChSKCkuZmxvd2NoYXJ0LmFycm93TWFya2VyQWJzb2x1dGUgfHwgUigpLnN0YXRlLmFycm93TWFya2VyQWJzb2x1dGUpICYmIChfID0geGUoITApKSwgbnIoQiwgYSwgXywgciwgbCk7XG4gIGxldCBEID0ge307XG4gIHJldHVybiBjICYmIChELnVwZGF0ZWRQYXRoID0gbiksIEQub3JpZ2luYWxQYXRoID0gYS5wb2ludHMsIEQ7XG59LCBcImluc2VydEVkZ2VcIiksIHVyID0gLyogQF9fUFVSRV9fICovIGQoKGUpID0+IHtcbiAgY29uc3QgdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGZvciAoY29uc3QgYSBvZiBlKVxuICAgIHN3aXRjaCAoYSkge1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgdC5hZGQoXCJyaWdodFwiKSwgdC5hZGQoXCJsZWZ0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgIHQuYWRkKFwidXBcIiksIHQuYWRkKFwiZG93blwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0LmFkZChhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICByZXR1cm4gdDtcbn0sIFwiZXhwYW5kQW5kRGVkdXBsaWNhdGVEaXJlY3Rpb25zXCIpLCBwciA9IC8qIEBfX1BVUkVfXyAqLyBkKChlLCB0LCBhKSA9PiB7XG4gIGNvbnN0IGkgPSB1cihlKSwgbCA9IDIsIHMgPSB0LmhlaWdodCArIDIgKiBhLnBhZGRpbmcsIHIgPSBzIC8gbCwgbiA9IHQud2lkdGggKyAyICogciArIGEucGFkZGluZywgYyA9IGEucGFkZGluZyAvIDI7XG4gIHJldHVybiBpLmhhcyhcInJpZ2h0XCIpICYmIGkuaGFzKFwibGVmdFwiKSAmJiBpLmhhcyhcInVwXCIpICYmIGkuaGFzKFwiZG93blwiKSA/IFtcbiAgICAvLyBCb3R0b21cbiAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICB7IHg6IHIsIHk6IDAgfSxcbiAgICB7IHg6IG4gLyAyLCB5OiAyICogYyB9LFxuICAgIHsgeDogbiAtIHIsIHk6IDAgfSxcbiAgICB7IHg6IG4sIHk6IDAgfSxcbiAgICAvLyBSaWdodFxuICAgIHsgeDogbiwgeTogLXMgLyAzIH0sXG4gICAgeyB4OiBuICsgMiAqIGMsIHk6IC1zIC8gMiB9LFxuICAgIHsgeDogbiwgeTogLTIgKiBzIC8gMyB9LFxuICAgIHsgeDogbiwgeTogLXMgfSxcbiAgICAvLyBUb3BcbiAgICB7IHg6IG4gLSByLCB5OiAtcyB9LFxuICAgIHsgeDogbiAvIDIsIHk6IC1zIC0gMiAqIGMgfSxcbiAgICB7IHg6IHIsIHk6IC1zIH0sXG4gICAgLy8gTGVmdFxuICAgIHsgeDogMCwgeTogLXMgfSxcbiAgICB7IHg6IDAsIHk6IC0yICogcyAvIDMgfSxcbiAgICB7IHg6IC0yICogYywgeTogLXMgLyAyIH0sXG4gICAgeyB4OiAwLCB5OiAtcyAvIDMgfVxuICBdIDogaS5oYXMoXCJyaWdodFwiKSAmJiBpLmhhcyhcImxlZnRcIikgJiYgaS5oYXMoXCJ1cFwiKSA/IFtcbiAgICB7IHg6IHIsIHk6IDAgfSxcbiAgICB7IHg6IG4gLSByLCB5OiAwIH0sXG4gICAgeyB4OiBuLCB5OiAtcyAvIDIgfSxcbiAgICB7IHg6IG4gLSByLCB5OiAtcyB9LFxuICAgIHsgeDogciwgeTogLXMgfSxcbiAgICB7IHg6IDAsIHk6IC1zIC8gMiB9XG4gIF0gOiBpLmhhcyhcInJpZ2h0XCIpICYmIGkuaGFzKFwibGVmdFwiKSAmJiBpLmhhcyhcImRvd25cIikgPyBbXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB4OiByLCB5OiAtcyB9LFxuICAgIHsgeDogbiAtIHIsIHk6IC1zIH0sXG4gICAgeyB4OiBuLCB5OiAwIH1cbiAgXSA6IGkuaGFzKFwicmlnaHRcIikgJiYgaS5oYXMoXCJ1cFwiKSAmJiBpLmhhcyhcImRvd25cIikgPyBbXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB4OiBuLCB5OiAtciB9LFxuICAgIHsgeDogbiwgeTogLXMgKyByIH0sXG4gICAgeyB4OiAwLCB5OiAtcyB9XG4gIF0gOiBpLmhhcyhcImxlZnRcIikgJiYgaS5oYXMoXCJ1cFwiKSAmJiBpLmhhcyhcImRvd25cIikgPyBbXG4gICAgeyB4OiBuLCB5OiAwIH0sXG4gICAgeyB4OiAwLCB5OiAtciB9LFxuICAgIHsgeDogMCwgeTogLXMgKyByIH0sXG4gICAgeyB4OiBuLCB5OiAtcyB9XG4gIF0gOiBpLmhhcyhcInJpZ2h0XCIpICYmIGkuaGFzKFwibGVmdFwiKSA/IFtcbiAgICB7IHg6IHIsIHk6IDAgfSxcbiAgICB7IHg6IHIsIHk6IC1jIH0sXG4gICAgeyB4OiBuIC0gciwgeTogLWMgfSxcbiAgICB7IHg6IG4gLSByLCB5OiAwIH0sXG4gICAgeyB4OiBuLCB5OiAtcyAvIDIgfSxcbiAgICB7IHg6IG4gLSByLCB5OiAtcyB9LFxuICAgIHsgeDogbiAtIHIsIHk6IC1zICsgYyB9LFxuICAgIHsgeDogciwgeTogLXMgKyBjIH0sXG4gICAgeyB4OiByLCB5OiAtcyB9LFxuICAgIHsgeDogMCwgeTogLXMgLyAyIH1cbiAgXSA6IGkuaGFzKFwidXBcIikgJiYgaS5oYXMoXCJkb3duXCIpID8gW1xuICAgIC8vIEJvdHRvbSBjZW50ZXJcbiAgICB7IHg6IG4gLyAyLCB5OiAwIH0sXG4gICAgLy8gTGVmdCBwb250IG9mIGJvdHRvbSBhcnJvd1xuICAgIHsgeDogMCwgeTogLWMgfSxcbiAgICB7IHg6IHIsIHk6IC1jIH0sXG4gICAgLy8gTGVmdCB0b3Agb3ZlciB2ZXJ0aWNhbCBzZWN0aW9uXG4gICAgeyB4OiByLCB5OiAtcyArIGMgfSxcbiAgICB7IHg6IDAsIHk6IC1zICsgYyB9LFxuICAgIC8vIFRvcCBvZiBhcnJvd1xuICAgIHsgeDogbiAvIDIsIHk6IC1zIH0sXG4gICAgeyB4OiBuLCB5OiAtcyArIGMgfSxcbiAgICAvLyBUb3Agb2YgcmlnaHQgdmVydGljYWwgYmFyXG4gICAgeyB4OiBuIC0gciwgeTogLXMgKyBjIH0sXG4gICAgeyB4OiBuIC0gciwgeTogLWMgfSxcbiAgICB7IHg6IG4sIHk6IC1jIH1cbiAgXSA6IGkuaGFzKFwicmlnaHRcIikgJiYgaS5oYXMoXCJ1cFwiKSA/IFtcbiAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICB7IHg6IG4sIHk6IC1yIH0sXG4gICAgeyB4OiAwLCB5OiAtcyB9XG4gIF0gOiBpLmhhcyhcInJpZ2h0XCIpICYmIGkuaGFzKFwiZG93blwiKSA/IFtcbiAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICB7IHg6IG4sIHk6IDAgfSxcbiAgICB7IHg6IDAsIHk6IC1zIH1cbiAgXSA6IGkuaGFzKFwibGVmdFwiKSAmJiBpLmhhcyhcInVwXCIpID8gW1xuICAgIHsgeDogbiwgeTogMCB9LFxuICAgIHsgeDogMCwgeTogLXIgfSxcbiAgICB7IHg6IG4sIHk6IC1zIH1cbiAgXSA6IGkuaGFzKFwibGVmdFwiKSAmJiBpLmhhcyhcImRvd25cIikgPyBbXG4gICAgeyB4OiBuLCB5OiAwIH0sXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB4OiBuLCB5OiAtcyB9XG4gIF0gOiBpLmhhcyhcInJpZ2h0XCIpID8gW1xuICAgIHsgeDogciwgeTogLWMgfSxcbiAgICB7IHg6IHIsIHk6IC1jIH0sXG4gICAgeyB4OiBuIC0gciwgeTogLWMgfSxcbiAgICB7IHg6IG4gLSByLCB5OiAwIH0sXG4gICAgeyB4OiBuLCB5OiAtcyAvIDIgfSxcbiAgICB7IHg6IG4gLSByLCB5OiAtcyB9LFxuICAgIHsgeDogbiAtIHIsIHk6IC1zICsgYyB9LFxuICAgIC8vIHRvcCBsZWZ0IGNvcm5lciBvZiBhcnJvd1xuICAgIHsgeDogciwgeTogLXMgKyBjIH0sXG4gICAgeyB4OiByLCB5OiAtcyArIGMgfVxuICBdIDogaS5oYXMoXCJsZWZ0XCIpID8gW1xuICAgIHsgeDogciwgeTogMCB9LFxuICAgIHsgeDogciwgeTogLWMgfSxcbiAgICAvLyBUd28gcG9pbnRzLCB0aGUgcmlnaHQgY29ybmVyc1xuICAgIHsgeDogbiAtIHIsIHk6IC1jIH0sXG4gICAgeyB4OiBuIC0gciwgeTogLXMgKyBjIH0sXG4gICAgeyB4OiByLCB5OiAtcyArIGMgfSxcbiAgICB7IHg6IHIsIHk6IC1zIH0sXG4gICAgeyB4OiAwLCB5OiAtcyAvIDIgfVxuICBdIDogaS5oYXMoXCJ1cFwiKSA/IFtcbiAgICAvLyBCb3R0b20gY2VudGVyXG4gICAgeyB4OiByLCB5OiAtYyB9LFxuICAgIC8vIExlZnQgdG9wIG92ZXIgdmVydGljYWwgc2VjdGlvblxuICAgIHsgeDogciwgeTogLXMgKyBjIH0sXG4gICAgeyB4OiAwLCB5OiAtcyArIGMgfSxcbiAgICAvLyBUb3Agb2YgYXJyb3dcbiAgICB7IHg6IG4gLyAyLCB5OiAtcyB9LFxuICAgIHsgeDogbiwgeTogLXMgKyBjIH0sXG4gICAgLy8gVG9wIG9mIHJpZ2h0IHZlcnRpY2FsIGJhclxuICAgIHsgeDogbiAtIHIsIHk6IC1zICsgYyB9LFxuICAgIHsgeDogbiAtIHIsIHk6IC1jIH1cbiAgXSA6IGkuaGFzKFwiZG93blwiKSA/IFtcbiAgICAvLyBCb3R0b20gY2VudGVyXG4gICAgeyB4OiBuIC8gMiwgeTogMCB9LFxuICAgIC8vIExlZnQgcG9udCBvZiBib3R0b20gYXJyb3dcbiAgICB7IHg6IDAsIHk6IC1jIH0sXG4gICAgeyB4OiByLCB5OiAtYyB9LFxuICAgIC8vIExlZnQgdG9wIG92ZXIgdmVydGljYWwgc2VjdGlvblxuICAgIHsgeDogciwgeTogLXMgKyBjIH0sXG4gICAgeyB4OiBuIC0gciwgeTogLXMgKyBjIH0sXG4gICAgeyB4OiBuIC0gciwgeTogLWMgfSxcbiAgICB7IHg6IG4sIHk6IC1jIH1cbiAgXSA6IFt7IHg6IDAsIHk6IDAgfV07XG59LCBcImdldEFycm93UG9pbnRzXCIpO1xuZnVuY3Rpb24gR3QoZSwgdCkge1xuICByZXR1cm4gZS5pbnRlcnNlY3QodCk7XG59XG5kKEd0LCBcImludGVyc2VjdE5vZGVcIik7XG52YXIgZnIgPSBHdDtcbmZ1bmN0aW9uIFp0KGUsIHQsIGEsIGkpIHtcbiAgdmFyIGwgPSBlLngsIHMgPSBlLnksIHIgPSBsIC0gaS54LCBuID0gcyAtIGkueSwgYyA9IE1hdGguc3FydCh0ICogdCAqIG4gKiBuICsgYSAqIGEgKiByICogciksIHUgPSBNYXRoLmFicyh0ICogYSAqIHIgLyBjKTtcbiAgaS54IDwgbCAmJiAodSA9IC11KTtcbiAgdmFyIG8gPSBNYXRoLmFicyh0ICogYSAqIG4gLyBjKTtcbiAgcmV0dXJuIGkueSA8IHMgJiYgKG8gPSAtbyksIHsgeDogbCArIHUsIHk6IHMgKyBvIH07XG59XG5kKFp0LCBcImludGVyc2VjdEVsbGlwc2VcIik7XG52YXIgcXQgPSBadDtcbmZ1bmN0aW9uIEp0KGUsIHQsIGEpIHtcbiAgcmV0dXJuIHF0KGUsIHQsIHQsIGEpO1xufVxuZChKdCwgXCJpbnRlcnNlY3RDaXJjbGVcIik7XG52YXIgeHIgPSBKdDtcbmZ1bmN0aW9uIFF0KGUsIHQsIGEsIGkpIHtcbiAgdmFyIGwsIHMsIHIsIG4sIGMsIHUsIG8sIHgsIHcsIGIsIFMsIHYsIGssIEIsIF87XG4gIGlmIChsID0gdC55IC0gZS55LCByID0gZS54IC0gdC54LCBjID0gdC54ICogZS55IC0gZS54ICogdC55LCB3ID0gbCAqIGEueCArIHIgKiBhLnkgKyBjLCBiID0gbCAqIGkueCArIHIgKiBpLnkgKyBjLCAhKHcgIT09IDAgJiYgYiAhPT0gMCAmJiBTdCh3LCBiKSkgJiYgKHMgPSBpLnkgLSBhLnksIG4gPSBhLnggLSBpLngsIHUgPSBpLnggKiBhLnkgLSBhLnggKiBpLnksIG8gPSBzICogZS54ICsgbiAqIGUueSArIHUsIHggPSBzICogdC54ICsgbiAqIHQueSArIHUsICEobyAhPT0gMCAmJiB4ICE9PSAwICYmIFN0KG8sIHgpKSAmJiAoUyA9IGwgKiBuIC0gcyAqIHIsIFMgIT09IDApKSlcbiAgICByZXR1cm4gdiA9IE1hdGguYWJzKFMgLyAyKSwgayA9IHIgKiB1IC0gbiAqIGMsIEIgPSBrIDwgMCA/IChrIC0gdikgLyBTIDogKGsgKyB2KSAvIFMsIGsgPSBzICogYyAtIGwgKiB1LCBfID0gayA8IDAgPyAoayAtIHYpIC8gUyA6IChrICsgdikgLyBTLCB7IHg6IEIsIHk6IF8gfTtcbn1cbmQoUXQsIFwiaW50ZXJzZWN0TGluZVwiKTtcbmZ1bmN0aW9uIFN0KGUsIHQpIHtcbiAgcmV0dXJuIGUgKiB0ID4gMDtcbn1cbmQoU3QsIFwic2FtZVNpZ25cIik7XG52YXIgeXIgPSBRdCwgYnIgPSAkdDtcbmZ1bmN0aW9uICR0KGUsIHQsIGEpIHtcbiAgdmFyIGkgPSBlLngsIGwgPSBlLnksIHMgPSBbXSwgciA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgdHlwZW9mIHQuZm9yRWFjaCA9PSBcImZ1bmN0aW9uXCIgPyB0LmZvckVhY2goZnVuY3Rpb24oUykge1xuICAgIHIgPSBNYXRoLm1pbihyLCBTLngpLCBuID0gTWF0aC5taW4obiwgUy55KTtcbiAgfSkgOiAociA9IE1hdGgubWluKHIsIHQueCksIG4gPSBNYXRoLm1pbihuLCB0LnkpKTtcbiAgZm9yICh2YXIgYyA9IGkgLSBlLndpZHRoIC8gMiAtIHIsIHUgPSBsIC0gZS5oZWlnaHQgLyAyIC0gbiwgbyA9IDA7IG8gPCB0Lmxlbmd0aDsgbysrKSB7XG4gICAgdmFyIHggPSB0W29dLCB3ID0gdFtvIDwgdC5sZW5ndGggLSAxID8gbyArIDEgOiAwXSwgYiA9IHlyKFxuICAgICAgZSxcbiAgICAgIGEsXG4gICAgICB7IHg6IGMgKyB4LngsIHk6IHUgKyB4LnkgfSxcbiAgICAgIHsgeDogYyArIHcueCwgeTogdSArIHcueSB9XG4gICAgKTtcbiAgICBiICYmIHMucHVzaChiKTtcbiAgfVxuICByZXR1cm4gcy5sZW5ndGggPyAocy5sZW5ndGggPiAxICYmIHMuc29ydChmdW5jdGlvbihTLCB2KSB7XG4gICAgdmFyIGsgPSBTLnggLSBhLngsIEIgPSBTLnkgLSBhLnksIF8gPSBNYXRoLnNxcnQoayAqIGsgKyBCICogQiksIEQgPSB2LnggLSBhLngsIHkgPSB2LnkgLSBhLnksIGcgPSBNYXRoLnNxcnQoRCAqIEQgKyB5ICogeSk7XG4gICAgcmV0dXJuIF8gPCBnID8gLTEgOiBfID09PSBnID8gMCA6IDE7XG4gIH0pLCBzWzBdKSA6IGU7XG59XG5kKCR0LCBcImludGVyc2VjdFBvbHlnb25cIik7XG52YXIgd3IgPSAvKiBAX19QVVJFX18gKi8gZCgoZSwgdCkgPT4ge1xuICB2YXIgYSA9IGUueCwgaSA9IGUueSwgbCA9IHQueCAtIGEsIHMgPSB0LnkgLSBpLCByID0gZS53aWR0aCAvIDIsIG4gPSBlLmhlaWdodCAvIDIsIGMsIHU7XG4gIHJldHVybiBNYXRoLmFicyhzKSAqIHIgPiBNYXRoLmFicyhsKSAqIG4gPyAocyA8IDAgJiYgKG4gPSAtbiksIGMgPSBzID09PSAwID8gMCA6IG4gKiBsIC8gcywgdSA9IG4pIDogKGwgPCAwICYmIChyID0gLXIpLCBjID0gciwgdSA9IGwgPT09IDAgPyAwIDogciAqIHMgLyBsKSwgeyB4OiBhICsgYywgeTogaSArIHUgfTtcbn0sIFwiaW50ZXJzZWN0UmVjdFwiKSwgbXIgPSB3ciwgTiA9IHtcbiAgbm9kZTogZnIsXG4gIGNpcmNsZTogeHIsXG4gIGVsbGlwc2U6IHF0LFxuICBwb2x5Z29uOiBicixcbiAgcmVjdDogbXJcbn0sIEEgPSAvKiBAX19QVVJFX18gKi8gZChhc3luYyAoZSwgdCwgYSwgaSkgPT4ge1xuICBjb25zdCBsID0gUigpO1xuICBsZXQgcztcbiAgY29uc3QgciA9IHQudXNlSHRtbExhYmVscyB8fCBqKGwuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpO1xuICBhID8gcyA9IGEgOiBzID0gXCJub2RlIGRlZmF1bHRcIjtcbiAgY29uc3QgbiA9IGUuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgcykuYXR0cihcImlkXCIsIHQuZG9tSWQgfHwgdC5pZCksIGMgPSBuLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIikuYXR0cihcInN0eWxlXCIsIHQubGFiZWxTdHlsZSk7XG4gIGxldCB1O1xuICB0LmxhYmVsVGV4dCA9PT0gdm9pZCAwID8gdSA9IFwiXCIgOiB1ID0gdHlwZW9mIHQubGFiZWxUZXh0ID09IFwic3RyaW5nXCIgPyB0LmxhYmVsVGV4dCA6IHQubGFiZWxUZXh0WzBdO1xuICBjb25zdCBvID0gYy5ub2RlKCk7XG4gIGxldCB4O1xuICB0LmxhYmVsVHlwZSA9PT0gXCJtYXJrZG93blwiID8geCA9IFd0KFxuICAgIGMsXG4gICAgeXQoeHQodSksIGwpLFxuICAgIHtcbiAgICAgIHVzZUh0bWxMYWJlbHM6IHIsXG4gICAgICB3aWR0aDogdC53aWR0aCB8fCBsLmZsb3djaGFydC53cmFwcGluZ1dpZHRoLFxuICAgICAgY2xhc3NlczogXCJtYXJrZG93bi1ub2RlLWxhYmVsXCJcbiAgICB9LFxuICAgIGxcbiAgKSA6IHggPSBvLmFwcGVuZENoaWxkKFxuICAgIGF3YWl0IEsoXG4gICAgICB5dCh4dCh1KSwgbCksXG4gICAgICB0LmxhYmVsU3R5bGUsXG4gICAgICAhMSxcbiAgICAgIGlcbiAgICApXG4gICk7XG4gIGxldCB3ID0geC5nZXRCQm94KCk7XG4gIGNvbnN0IGIgPSB0LnBhZGRpbmcgLyAyO1xuICBpZiAoaihsLmZsb3djaGFydC5odG1sTGFiZWxzKSkge1xuICAgIGNvbnN0IFMgPSB4LmNoaWxkcmVuWzBdLCB2ID0gTyh4KSwgayA9IFMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIik7XG4gICAgaWYgKGspIHtcbiAgICAgIGNvbnN0IEIgPSB1LnJlcGxhY2UoLzxpbWdbXj5dKj4vZywgXCJcIikudHJpbSgpID09PSBcIlwiO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIFsuLi5rXS5tYXAoXG4gICAgICAgICAgKF8pID0+IG5ldyBQcm9taXNlKChEKSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiB5KCkge1xuICAgICAgICAgICAgICBpZiAoXy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIsIF8uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCIsIEIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gbC5mb250U2l6ZSA/IGwuZm9udFNpemUgOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5mb250U2l6ZSwgbSA9IHBhcnNlSW50KGcsIDEwKSAqIDUgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgXy5zdHlsZS5taW5XaWR0aCA9IG0sIF8uc3R5bGUubWF4V2lkdGggPSBtO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBfLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgIEQoXyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkKHksIFwic2V0dXBJbWFnZVwiKSwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIF8uY29tcGxldGUgJiYgeSgpO1xuICAgICAgICAgICAgfSksIF8uYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIHkpLCBfLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHkpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIHcgPSBTLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB2LmF0dHIoXCJ3aWR0aFwiLCB3LndpZHRoKSwgdi5hdHRyKFwiaGVpZ2h0XCIsIHcuaGVpZ2h0KTtcbiAgfVxuICByZXR1cm4gciA/IGMuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIC13LndpZHRoIC8gMiArIFwiLCBcIiArIC13LmhlaWdodCAvIDIgKyBcIilcIikgOiBjLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwgXCIgKyAtdy5oZWlnaHQgLyAyICsgXCIpXCIpLCB0LmNlbnRlckxhYmVsICYmIGMuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIC13LndpZHRoIC8gMiArIFwiLCBcIiArIC13LmhlaWdodCAvIDIgKyBcIilcIiksIGMuaW5zZXJ0KFwicmVjdFwiLCBcIjpmaXJzdC1jaGlsZFwiKSwgeyBzaGFwZVN2ZzogbiwgYmJveDogdywgaGFsZlBhZGRpbmc6IGIsIGxhYmVsOiBjIH07XG59LCBcImxhYmVsSGVscGVyXCIpLCBUID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQpID0+IHtcbiAgY29uc3QgYSA9IHQubm9kZSgpLmdldEJCb3goKTtcbiAgZS53aWR0aCA9IGEud2lkdGgsIGUuaGVpZ2h0ID0gYS5oZWlnaHQ7XG59LCBcInVwZGF0ZU5vZGVCb3VuZHNcIik7XG5mdW5jdGlvbiBVKGUsIHQsIGEsIGkpIHtcbiAgcmV0dXJuIGUuaW5zZXJ0KFwicG9seWdvblwiLCBcIjpmaXJzdC1jaGlsZFwiKS5hdHRyKFxuICAgIFwicG9pbnRzXCIsXG4gICAgaS5tYXAoZnVuY3Rpb24obCkge1xuICAgICAgcmV0dXJuIGwueCArIFwiLFwiICsgbC55O1xuICAgIH0pLmpvaW4oXCIgXCIpXG4gICkuYXR0cihcImNsYXNzXCIsIFwibGFiZWwtY29udGFpbmVyXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAtdCAvIDIgKyBcIixcIiArIGEgLyAyICsgXCIpXCIpO1xufVxuZChVLCBcImluc2VydFBvbHlnb25TaGFwZVwiKTtcbnZhciBMciA9IC8qIEBfX1BVUkVfXyAqLyBkKGFzeW5jIChlLCB0KSA9PiB7XG4gIHQudXNlSHRtbExhYmVscyB8fCBSKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMgfHwgKHQuY2VudGVyTGFiZWwgPSAhMCk7XG4gIGNvbnN0IHsgc2hhcGVTdmc6IGksIGJib3g6IGwsIGhhbGZQYWRkaW5nOiBzIH0gPSBhd2FpdCBBKFxuICAgIGUsXG4gICAgdCxcbiAgICBcIm5vZGUgXCIgKyB0LmNsYXNzZXMsXG4gICAgITBcbiAgKTtcbiAgTC5pbmZvKFwiQ2xhc3NlcyA9IFwiLCB0LmNsYXNzZXMpO1xuICBjb25zdCByID0gaS5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpO1xuICByZXR1cm4gci5hdHRyKFwicnhcIiwgdC5yeCkuYXR0cihcInJ5XCIsIHQucnkpLmF0dHIoXCJ4XCIsIC1sLndpZHRoIC8gMiAtIHMpLmF0dHIoXCJ5XCIsIC1sLmhlaWdodCAvIDIgLSBzKS5hdHRyKFwid2lkdGhcIiwgbC53aWR0aCArIHQucGFkZGluZykuYXR0cihcImhlaWdodFwiLCBsLmhlaWdodCArIHQucGFkZGluZyksIFQodCwgciksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBOLnJlY3QodCwgbik7XG4gIH0sIGk7XG59LCBcIm5vdGVcIiksIFNyID0gTHIsIHp0ID0gLyogQF9fUFVSRV9fICovIGQoKGUpID0+IGUgPyBcIiBcIiArIGUgOiBcIlwiLCBcImZvcm1hdENsYXNzXCIpLCBZID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQpID0+IGAke3QgfHwgXCJub2RlIGRlZmF1bHRcIn0ke3p0KGUuY2xhc3Nlcyl9ICR7enQoXG4gIGUuY2xhc3Ncbil9YCwgXCJnZXRDbGFzc2VzRnJvbU5vZGVcIiksIEF0ID0gLyogQF9fUFVSRV9fICovIGQoYXN5bmMgKGUsIHQpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZzogYSwgYmJveDogaSB9ID0gYXdhaXQgQShcbiAgICBlLFxuICAgIHQsXG4gICAgWSh0LCB2b2lkIDApLFxuICAgICEwXG4gICksIGwgPSBpLndpZHRoICsgdC5wYWRkaW5nLCBzID0gaS5oZWlnaHQgKyB0LnBhZGRpbmcsIHIgPSBsICsgcywgbiA9IFtcbiAgICB7IHg6IHIgLyAyLCB5OiAwIH0sXG4gICAgeyB4OiByLCB5OiAtciAvIDIgfSxcbiAgICB7IHg6IHIgLyAyLCB5OiAtciB9LFxuICAgIHsgeDogMCwgeTogLXIgLyAyIH1cbiAgXTtcbiAgTC5pbmZvKFwiUXVlc3Rpb24gbWFpbiAoQ2lyY2xlKVwiKTtcbiAgY29uc3QgYyA9IFUoYSwgciwgciwgbik7XG4gIHJldHVybiBjLmF0dHIoXCJzdHlsZVwiLCB0LnN0eWxlKSwgVCh0LCBjKSwgdC5pbnRlcnNlY3QgPSBmdW5jdGlvbih1KSB7XG4gICAgcmV0dXJuIEwud2FybihcIkludGVyc2VjdCBjYWxsZWRcIiksIE4ucG9seWdvbih0LCBuLCB1KTtcbiAgfSwgYTtcbn0sIFwicXVlc3Rpb25cIiksIGtyID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQpID0+IHtcbiAgY29uc3QgYSA9IGUuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJub2RlIGRlZmF1bHRcIikuYXR0cihcImlkXCIsIHQuZG9tSWQgfHwgdC5pZCksIGkgPSAyOCwgbCA9IFtcbiAgICB7IHg6IDAsIHk6IGkgLyAyIH0sXG4gICAgeyB4OiBpIC8gMiwgeTogMCB9LFxuICAgIHsgeDogMCwgeTogLWkgLyAyIH0sXG4gICAgeyB4OiAtaSAvIDIsIHk6IDAgfVxuICBdO1xuICByZXR1cm4gYS5pbnNlcnQoXCJwb2x5Z29uXCIsIFwiOmZpcnN0LWNoaWxkXCIpLmF0dHIoXG4gICAgXCJwb2ludHNcIixcbiAgICBsLm1hcChmdW5jdGlvbihyKSB7XG4gICAgICByZXR1cm4gci54ICsgXCIsXCIgKyByLnk7XG4gICAgfSkuam9pbihcIiBcIilcbiAgKS5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZS1zdGFydFwiKS5hdHRyKFwiclwiLCA3KS5hdHRyKFwid2lkdGhcIiwgMjgpLmF0dHIoXCJoZWlnaHRcIiwgMjgpLCB0LndpZHRoID0gMjgsIHQuaGVpZ2h0ID0gMjgsIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocikge1xuICAgIHJldHVybiBOLmNpcmNsZSh0LCAxNCwgcik7XG4gIH0sIGE7XG59LCBcImNob2ljZVwiKSwgdnIgPSAvKiBAX19QVVJFX18gKi8gZChhc3luYyAoZSwgdCkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnOiBhLCBiYm94OiBpIH0gPSBhd2FpdCBBKFxuICAgIGUsXG4gICAgdCxcbiAgICBZKHQsIHZvaWQgMCksXG4gICAgITBcbiAgKSwgbCA9IDQsIHMgPSBpLmhlaWdodCArIHQucGFkZGluZywgciA9IHMgLyBsLCBuID0gaS53aWR0aCArIDIgKiByICsgdC5wYWRkaW5nLCBjID0gW1xuICAgIHsgeDogciwgeTogMCB9LFxuICAgIHsgeDogbiAtIHIsIHk6IDAgfSxcbiAgICB7IHg6IG4sIHk6IC1zIC8gMiB9LFxuICAgIHsgeDogbiAtIHIsIHk6IC1zIH0sXG4gICAgeyB4OiByLCB5OiAtcyB9LFxuICAgIHsgeDogMCwgeTogLXMgLyAyIH1cbiAgXSwgdSA9IFUoYSwgbiwgcywgYyk7XG4gIHJldHVybiB1LmF0dHIoXCJzdHlsZVwiLCB0LnN0eWxlKSwgVCh0LCB1KSwgdC5pbnRlcnNlY3QgPSBmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIE4ucG9seWdvbih0LCBjLCBvKTtcbiAgfSwgYTtcbn0sIFwiaGV4YWdvblwiKSwgRXIgPSAvKiBAX19QVVJFX18gKi8gZChhc3luYyAoZSwgdCkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnOiBhLCBiYm94OiBpIH0gPSBhd2FpdCBBKGUsIHQsIHZvaWQgMCwgITApLCBsID0gMiwgcyA9IGkuaGVpZ2h0ICsgMiAqIHQucGFkZGluZywgciA9IHMgLyBsLCBuID0gaS53aWR0aCArIDIgKiByICsgdC5wYWRkaW5nLCBjID0gcHIodC5kaXJlY3Rpb25zLCBpLCB0KSwgdSA9IFUoYSwgbiwgcywgYyk7XG4gIHJldHVybiB1LmF0dHIoXCJzdHlsZVwiLCB0LnN0eWxlKSwgVCh0LCB1KSwgdC5pbnRlcnNlY3QgPSBmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIE4ucG9seWdvbih0LCBjLCBvKTtcbiAgfSwgYTtcbn0sIFwiYmxvY2tfYXJyb3dcIiksIF9yID0gLyogQF9fUFVSRV9fICovIGQoYXN5bmMgKGUsIHQpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZzogYSwgYmJveDogaSB9ID0gYXdhaXQgQShcbiAgICBlLFxuICAgIHQsXG4gICAgWSh0LCB2b2lkIDApLFxuICAgICEwXG4gICksIGwgPSBpLndpZHRoICsgdC5wYWRkaW5nLCBzID0gaS5oZWlnaHQgKyB0LnBhZGRpbmcsIHIgPSBbXG4gICAgeyB4OiAtcyAvIDIsIHk6IDAgfSxcbiAgICB7IHg6IGwsIHk6IDAgfSxcbiAgICB7IHg6IGwsIHk6IC1zIH0sXG4gICAgeyB4OiAtcyAvIDIsIHk6IC1zIH0sXG4gICAgeyB4OiAwLCB5OiAtcyAvIDIgfVxuICBdO1xuICByZXR1cm4gVShhLCBsLCBzLCByKS5hdHRyKFwic3R5bGVcIiwgdC5zdHlsZSksIHQud2lkdGggPSBsICsgcywgdC5oZWlnaHQgPSBzLCB0LmludGVyc2VjdCA9IGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gTi5wb2x5Z29uKHQsIHIsIGMpO1xuICB9LCBhO1xufSwgXCJyZWN0X2xlZnRfaW52X2Fycm93XCIpLCBEciA9IC8qIEBfX1BVUkVfXyAqLyBkKGFzeW5jIChlLCB0KSA9PiB7XG4gIGNvbnN0IHsgc2hhcGVTdmc6IGEsIGJib3g6IGkgfSA9IGF3YWl0IEEoZSwgdCwgWSh0KSwgITApLCBsID0gaS53aWR0aCArIHQucGFkZGluZywgcyA9IGkuaGVpZ2h0ICsgdC5wYWRkaW5nLCByID0gW1xuICAgIHsgeDogLTIgKiBzIC8gNiwgeTogMCB9LFxuICAgIHsgeDogbCAtIHMgLyA2LCB5OiAwIH0sXG4gICAgeyB4OiBsICsgMiAqIHMgLyA2LCB5OiAtcyB9LFxuICAgIHsgeDogcyAvIDYsIHk6IC1zIH1cbiAgXSwgbiA9IFUoYSwgbCwgcywgcik7XG4gIHJldHVybiBuLmF0dHIoXCJzdHlsZVwiLCB0LnN0eWxlKSwgVCh0LCBuKSwgdC5pbnRlcnNlY3QgPSBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIE4ucG9seWdvbih0LCByLCBjKTtcbiAgfSwgYTtcbn0sIFwibGVhbl9yaWdodFwiKSwgTnIgPSAvKiBAX19QVVJFX18gKi8gZChhc3luYyAoZSwgdCkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnOiBhLCBiYm94OiBpIH0gPSBhd2FpdCBBKFxuICAgIGUsXG4gICAgdCxcbiAgICBZKHQsIHZvaWQgMCksXG4gICAgITBcbiAgKSwgbCA9IGkud2lkdGggKyB0LnBhZGRpbmcsIHMgPSBpLmhlaWdodCArIHQucGFkZGluZywgciA9IFtcbiAgICB7IHg6IDIgKiBzIC8gNiwgeTogMCB9LFxuICAgIHsgeDogbCArIHMgLyA2LCB5OiAwIH0sXG4gICAgeyB4OiBsIC0gMiAqIHMgLyA2LCB5OiAtcyB9LFxuICAgIHsgeDogLXMgLyA2LCB5OiAtcyB9XG4gIF0sIG4gPSBVKGEsIGwsIHMsIHIpO1xuICByZXR1cm4gbi5hdHRyKFwic3R5bGVcIiwgdC5zdHlsZSksIFQodCwgbiksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBOLnBvbHlnb24odCwgciwgYyk7XG4gIH0sIGE7XG59LCBcImxlYW5fbGVmdFwiKSwgVHIgPSAvKiBAX19QVVJFX18gKi8gZChhc3luYyAoZSwgdCkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnOiBhLCBiYm94OiBpIH0gPSBhd2FpdCBBKFxuICAgIGUsXG4gICAgdCxcbiAgICBZKHQsIHZvaWQgMCksXG4gICAgITBcbiAgKSwgbCA9IGkud2lkdGggKyB0LnBhZGRpbmcsIHMgPSBpLmhlaWdodCArIHQucGFkZGluZywgciA9IFtcbiAgICB7IHg6IC0yICogcyAvIDYsIHk6IDAgfSxcbiAgICB7IHg6IGwgKyAyICogcyAvIDYsIHk6IDAgfSxcbiAgICB7IHg6IGwgLSBzIC8gNiwgeTogLXMgfSxcbiAgICB7IHg6IHMgLyA2LCB5OiAtcyB9XG4gIF0sIG4gPSBVKGEsIGwsIHMsIHIpO1xuICByZXR1cm4gbi5hdHRyKFwic3R5bGVcIiwgdC5zdHlsZSksIFQodCwgbiksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBOLnBvbHlnb24odCwgciwgYyk7XG4gIH0sIGE7XG59LCBcInRyYXBlem9pZFwiKSwgQnIgPSAvKiBAX19QVVJFX18gKi8gZChhc3luYyAoZSwgdCkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnOiBhLCBiYm94OiBpIH0gPSBhd2FpdCBBKFxuICAgIGUsXG4gICAgdCxcbiAgICBZKHQsIHZvaWQgMCksXG4gICAgITBcbiAgKSwgbCA9IGkud2lkdGggKyB0LnBhZGRpbmcsIHMgPSBpLmhlaWdodCArIHQucGFkZGluZywgciA9IFtcbiAgICB7IHg6IHMgLyA2LCB5OiAwIH0sXG4gICAgeyB4OiBsIC0gcyAvIDYsIHk6IDAgfSxcbiAgICB7IHg6IGwgKyAyICogcyAvIDYsIHk6IC1zIH0sXG4gICAgeyB4OiAtMiAqIHMgLyA2LCB5OiAtcyB9XG4gIF0sIG4gPSBVKGEsIGwsIHMsIHIpO1xuICByZXR1cm4gbi5hdHRyKFwic3R5bGVcIiwgdC5zdHlsZSksIFQodCwgbiksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBOLnBvbHlnb24odCwgciwgYyk7XG4gIH0sIGE7XG59LCBcImludl90cmFwZXpvaWRcIiksIENyID0gLyogQF9fUFVSRV9fICovIGQoYXN5bmMgKGUsIHQpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZzogYSwgYmJveDogaSB9ID0gYXdhaXQgQShcbiAgICBlLFxuICAgIHQsXG4gICAgWSh0LCB2b2lkIDApLFxuICAgICEwXG4gICksIGwgPSBpLndpZHRoICsgdC5wYWRkaW5nLCBzID0gaS5oZWlnaHQgKyB0LnBhZGRpbmcsIHIgPSBbXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB4OiBsICsgcyAvIDIsIHk6IDAgfSxcbiAgICB7IHg6IGwsIHk6IC1zIC8gMiB9LFxuICAgIHsgeDogbCArIHMgLyAyLCB5OiAtcyB9LFxuICAgIHsgeDogMCwgeTogLXMgfVxuICBdLCBuID0gVShhLCBsLCBzLCByKTtcbiAgcmV0dXJuIG4uYXR0cihcInN0eWxlXCIsIHQuc3R5bGUpLCBUKHQsIG4pLCB0LmludGVyc2VjdCA9IGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gTi5wb2x5Z29uKHQsIHIsIGMpO1xuICB9LCBhO1xufSwgXCJyZWN0X3JpZ2h0X2ludl9hcnJvd1wiKSwgSXIgPSAvKiBAX19QVVJFX18gKi8gZChhc3luYyAoZSwgdCkgPT4ge1xuICBjb25zdCB7IHNoYXBlU3ZnOiBhLCBiYm94OiBpIH0gPSBhd2FpdCBBKFxuICAgIGUsXG4gICAgdCxcbiAgICBZKHQsIHZvaWQgMCksXG4gICAgITBcbiAgKSwgbCA9IGkud2lkdGggKyB0LnBhZGRpbmcsIHMgPSBsIC8gMiwgciA9IHMgLyAoMi41ICsgbCAvIDUwKSwgbiA9IGkuaGVpZ2h0ICsgciArIHQucGFkZGluZywgYyA9IFwiTSAwLFwiICsgciArIFwiIGEgXCIgKyBzICsgXCIsXCIgKyByICsgXCIgMCwwLDAgXCIgKyBsICsgXCIgMCBhIFwiICsgcyArIFwiLFwiICsgciArIFwiIDAsMCwwIFwiICsgLWwgKyBcIiAwIGwgMCxcIiArIG4gKyBcIiBhIFwiICsgcyArIFwiLFwiICsgciArIFwiIDAsMCwwIFwiICsgbCArIFwiIDAgbCAwLFwiICsgLW4sIHUgPSBhLmF0dHIoXCJsYWJlbC1vZmZzZXQteVwiLCByKS5pbnNlcnQoXCJwYXRoXCIsIFwiOmZpcnN0LWNoaWxkXCIpLmF0dHIoXCJzdHlsZVwiLCB0LnN0eWxlKS5hdHRyKFwiZFwiLCBjKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgLWwgLyAyICsgXCIsXCIgKyAtKG4gLyAyICsgcikgKyBcIilcIik7XG4gIHJldHVybiBUKHQsIHUpLCB0LmludGVyc2VjdCA9IGZ1bmN0aW9uKG8pIHtcbiAgICBjb25zdCB4ID0gTi5yZWN0KHQsIG8pLCB3ID0geC54IC0gdC54O1xuICAgIGlmIChzICE9IDAgJiYgKE1hdGguYWJzKHcpIDwgdC53aWR0aCAvIDIgfHwgTWF0aC5hYnModykgPT0gdC53aWR0aCAvIDIgJiYgTWF0aC5hYnMoeC55IC0gdC55KSA+IHQuaGVpZ2h0IC8gMiAtIHIpKSB7XG4gICAgICBsZXQgYiA9IHIgKiByICogKDEgLSB3ICogdyAvIChzICogcykpO1xuICAgICAgYiAhPSAwICYmIChiID0gTWF0aC5zcXJ0KGIpKSwgYiA9IHIgLSBiLCBvLnkgLSB0LnkgPiAwICYmIChiID0gLWIpLCB4LnkgKz0gYjtcbiAgICB9XG4gICAgcmV0dXJuIHg7XG4gIH0sIGE7XG59LCBcImN5bGluZGVyXCIpLCBPciA9IC8qIEBfX1BVUkVfXyAqLyBkKGFzeW5jIChlLCB0KSA9PiB7XG4gIGNvbnN0IHsgc2hhcGVTdmc6IGEsIGJib3g6IGksIGhhbGZQYWRkaW5nOiBsIH0gPSBhd2FpdCBBKFxuICAgIGUsXG4gICAgdCxcbiAgICBcIm5vZGUgXCIgKyB0LmNsYXNzZXMgKyBcIiBcIiArIHQuY2xhc3MsXG4gICAgITBcbiAgKSwgcyA9IGEuaW5zZXJ0KFwicmVjdFwiLCBcIjpmaXJzdC1jaGlsZFwiKSwgciA9IHQucG9zaXRpb25lZCA/IHQud2lkdGggOiBpLndpZHRoICsgdC5wYWRkaW5nLCBuID0gdC5wb3NpdGlvbmVkID8gdC5oZWlnaHQgOiBpLmhlaWdodCArIHQucGFkZGluZywgYyA9IHQucG9zaXRpb25lZCA/IC1yIC8gMiA6IC1pLndpZHRoIC8gMiAtIGwsIHUgPSB0LnBvc2l0aW9uZWQgPyAtbiAvIDIgOiAtaS5oZWlnaHQgLyAyIC0gbDtcbiAgaWYgKHMuYXR0cihcImNsYXNzXCIsIFwiYmFzaWMgbGFiZWwtY29udGFpbmVyXCIpLmF0dHIoXCJzdHlsZVwiLCB0LnN0eWxlKS5hdHRyKFwicnhcIiwgdC5yeCkuYXR0cihcInJ5XCIsIHQucnkpLmF0dHIoXCJ4XCIsIGMpLmF0dHIoXCJ5XCIsIHUpLmF0dHIoXCJ3aWR0aFwiLCByKS5hdHRyKFwiaGVpZ2h0XCIsIG4pLCB0LnByb3BzKSB7XG4gICAgY29uc3QgbyA9IG5ldyBTZXQoT2JqZWN0LmtleXModC5wcm9wcykpO1xuICAgIHQucHJvcHMuYm9yZGVycyAmJiAoaHQocywgdC5wcm9wcy5ib3JkZXJzLCByLCBuKSwgby5kZWxldGUoXCJib3JkZXJzXCIpKSwgby5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBMLndhcm4oYFVua25vd24gbm9kZSBwcm9wZXJ0eSAke3h9YCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIFQodCwgcyksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24obykge1xuICAgIHJldHVybiBOLnJlY3QodCwgbyk7XG4gIH0sIGE7XG59LCBcInJlY3RcIiksIFJyID0gLyogQF9fUFVSRV9fICovIGQoYXN5bmMgKGUsIHQpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZzogYSwgYmJveDogaSwgaGFsZlBhZGRpbmc6IGwgfSA9IGF3YWl0IEEoXG4gICAgZSxcbiAgICB0LFxuICAgIFwibm9kZSBcIiArIHQuY2xhc3NlcyxcbiAgICAhMFxuICApLCBzID0gYS5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLCByID0gdC5wb3NpdGlvbmVkID8gdC53aWR0aCA6IGkud2lkdGggKyB0LnBhZGRpbmcsIG4gPSB0LnBvc2l0aW9uZWQgPyB0LmhlaWdodCA6IGkuaGVpZ2h0ICsgdC5wYWRkaW5nLCBjID0gdC5wb3NpdGlvbmVkID8gLXIgLyAyIDogLWkud2lkdGggLyAyIC0gbCwgdSA9IHQucG9zaXRpb25lZCA/IC1uIC8gMiA6IC1pLmhlaWdodCAvIDIgLSBsO1xuICBpZiAocy5hdHRyKFwiY2xhc3NcIiwgXCJiYXNpYyBjbHVzdGVyIGNvbXBvc2l0ZSBsYWJlbC1jb250YWluZXJcIikuYXR0cihcInN0eWxlXCIsIHQuc3R5bGUpLmF0dHIoXCJyeFwiLCB0LnJ4KS5hdHRyKFwicnlcIiwgdC5yeSkuYXR0cihcInhcIiwgYykuYXR0cihcInlcIiwgdSkuYXR0cihcIndpZHRoXCIsIHIpLmF0dHIoXCJoZWlnaHRcIiwgbiksIHQucHJvcHMpIHtcbiAgICBjb25zdCBvID0gbmV3IFNldChPYmplY3Qua2V5cyh0LnByb3BzKSk7XG4gICAgdC5wcm9wcy5ib3JkZXJzICYmIChodChzLCB0LnByb3BzLmJvcmRlcnMsIHIsIG4pLCBvLmRlbGV0ZShcImJvcmRlcnNcIikpLCBvLmZvckVhY2goKHgpID0+IHtcbiAgICAgIEwud2FybihgVW5rbm93biBub2RlIHByb3BlcnR5ICR7eH1gKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gVCh0LCBzKSwgdC5pbnRlcnNlY3QgPSBmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIE4ucmVjdCh0LCBvKTtcbiAgfSwgYTtcbn0sIFwiY29tcG9zaXRlXCIpLCB6ciA9IC8qIEBfX1BVUkVfXyAqLyBkKGFzeW5jIChlLCB0KSA9PiB7XG4gIGNvbnN0IHsgc2hhcGVTdmc6IGEgfSA9IGF3YWl0IEEoZSwgdCwgXCJsYWJlbFwiLCAhMCk7XG4gIEwudHJhY2UoXCJDbGFzc2VzID0gXCIsIHQuY2xhc3MpO1xuICBjb25zdCBpID0gYS5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLCBsID0gMCwgcyA9IDA7XG4gIGlmIChpLmF0dHIoXCJ3aWR0aFwiLCBsKS5hdHRyKFwiaGVpZ2h0XCIsIHMpLCBhLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsIGVkZ2VMYWJlbFwiKSwgdC5wcm9wcykge1xuICAgIGNvbnN0IHIgPSBuZXcgU2V0KE9iamVjdC5rZXlzKHQucHJvcHMpKTtcbiAgICB0LnByb3BzLmJvcmRlcnMgJiYgKGh0KGksIHQucHJvcHMuYm9yZGVycywgbCwgcyksIHIuZGVsZXRlKFwiYm9yZGVyc1wiKSksIHIuZm9yRWFjaCgobikgPT4ge1xuICAgICAgTC53YXJuKGBVbmtub3duIG5vZGUgcHJvcGVydHkgJHtufWApO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBUKHQsIGkpLCB0LmludGVyc2VjdCA9IGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gTi5yZWN0KHQsIHIpO1xuICB9LCBhO1xufSwgXCJsYWJlbFJlY3RcIik7XG5mdW5jdGlvbiBodChlLCB0LCBhLCBpKSB7XG4gIGNvbnN0IGwgPSBbXSwgcyA9IC8qIEBfX1BVUkVfXyAqLyBkKChuKSA9PiB7XG4gICAgbC5wdXNoKG4sIDApO1xuICB9LCBcImFkZEJvcmRlclwiKSwgciA9IC8qIEBfX1BVUkVfXyAqLyBkKChuKSA9PiB7XG4gICAgbC5wdXNoKDAsIG4pO1xuICB9LCBcInNraXBCb3JkZXJcIik7XG4gIHQuaW5jbHVkZXMoXCJ0XCIpID8gKEwuZGVidWcoXCJhZGQgdG9wIGJvcmRlclwiKSwgcyhhKSkgOiByKGEpLCB0LmluY2x1ZGVzKFwiclwiKSA/IChMLmRlYnVnKFwiYWRkIHJpZ2h0IGJvcmRlclwiKSwgcyhpKSkgOiByKGkpLCB0LmluY2x1ZGVzKFwiYlwiKSA/IChMLmRlYnVnKFwiYWRkIGJvdHRvbSBib3JkZXJcIiksIHMoYSkpIDogcihhKSwgdC5pbmNsdWRlcyhcImxcIikgPyAoTC5kZWJ1ZyhcImFkZCBsZWZ0IGJvcmRlclwiKSwgcyhpKSkgOiByKGkpLCBlLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIGwuam9pbihcIiBcIikpO1xufVxuZChodCwgXCJhcHBseU5vZGVQcm9wZXJ0eUJvcmRlcnNcIik7XG52YXIgQXIgPSAvKiBAX19QVVJFX18gKi8gZChhc3luYyAoZSwgdCkgPT4ge1xuICBsZXQgYTtcbiAgdC5jbGFzc2VzID8gYSA9IFwibm9kZSBcIiArIHQuY2xhc3NlcyA6IGEgPSBcIm5vZGUgZGVmYXVsdFwiO1xuICBjb25zdCBpID0gZS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBhKS5hdHRyKFwiaWRcIiwgdC5kb21JZCB8fCB0LmlkKSwgbCA9IGkuaW5zZXJ0KFwicmVjdFwiLCBcIjpmaXJzdC1jaGlsZFwiKSwgcyA9IGkuaW5zZXJ0KFwibGluZVwiKSwgciA9IGkuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKSwgbiA9IHQubGFiZWxUZXh0LmZsYXQgPyB0LmxhYmVsVGV4dC5mbGF0KCkgOiB0LmxhYmVsVGV4dDtcbiAgbGV0IGMgPSBcIlwiO1xuICB0eXBlb2YgbiA9PSBcIm9iamVjdFwiID8gYyA9IG5bMF0gOiBjID0gbiwgTC5pbmZvKFwiTGFiZWwgdGV4dCBhYmM3OVwiLCBjLCBuLCB0eXBlb2YgbiA9PSBcIm9iamVjdFwiKTtcbiAgY29uc3QgdSA9IHIubm9kZSgpLmFwcGVuZENoaWxkKGF3YWl0IEsoYywgdC5sYWJlbFN0eWxlLCAhMCwgITApKTtcbiAgbGV0IG8gPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgaWYgKGooUigpLmZsb3djaGFydC5odG1sTGFiZWxzKSkge1xuICAgIGNvbnN0IHYgPSB1LmNoaWxkcmVuWzBdLCBrID0gTyh1KTtcbiAgICBvID0gdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgay5hdHRyKFwid2lkdGhcIiwgby53aWR0aCksIGsuYXR0cihcImhlaWdodFwiLCBvLmhlaWdodCk7XG4gIH1cbiAgTC5pbmZvKFwiVGV4dCAyXCIsIG4pO1xuICBjb25zdCB4ID0gbi5zbGljZSgxLCBuLmxlbmd0aCk7XG4gIGxldCB3ID0gdS5nZXRCQm94KCk7XG4gIGNvbnN0IGIgPSByLm5vZGUoKS5hcHBlbmRDaGlsZChcbiAgICBhd2FpdCBLKFxuICAgICAgeC5qb2luID8geC5qb2luKFwiPGJyLz5cIikgOiB4LFxuICAgICAgdC5sYWJlbFN0eWxlLFxuICAgICAgITAsXG4gICAgICAhMFxuICAgIClcbiAgKTtcbiAgaWYgKGooUigpLmZsb3djaGFydC5odG1sTGFiZWxzKSkge1xuICAgIGNvbnN0IHYgPSBiLmNoaWxkcmVuWzBdLCBrID0gTyhiKTtcbiAgICBvID0gdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgay5hdHRyKFwid2lkdGhcIiwgby53aWR0aCksIGsuYXR0cihcImhlaWdodFwiLCBvLmhlaWdodCk7XG4gIH1cbiAgY29uc3QgUyA9IHQucGFkZGluZyAvIDI7XG4gIHJldHVybiBPKGIpLmF0dHIoXG4gICAgXCJ0cmFuc2Zvcm1cIixcbiAgICBcInRyYW5zbGF0ZSggXCIgKyAvLyAodGl0bGVCb3gud2lkdGggLSBiYm94LndpZHRoKSAvIDIgK1xuICAgIChvLndpZHRoID4gdy53aWR0aCA/IDAgOiAody53aWR0aCAtIG8ud2lkdGgpIC8gMikgKyBcIiwgXCIgKyAody5oZWlnaHQgKyBTICsgNSkgKyBcIilcIlxuICApLCBPKHUpLmF0dHIoXG4gICAgXCJ0cmFuc2Zvcm1cIixcbiAgICBcInRyYW5zbGF0ZSggXCIgKyAvLyAodGl0bGVCb3gud2lkdGggLSBiYm94LndpZHRoKSAvIDIgK1xuICAgIChvLndpZHRoIDwgdy53aWR0aCA/IDAgOiAtKHcud2lkdGggLSBvLndpZHRoKSAvIDIpICsgXCIsIDApXCJcbiAgKSwgbyA9IHIubm9kZSgpLmdldEJCb3goKSwgci5hdHRyKFxuICAgIFwidHJhbnNmb3JtXCIsXG4gICAgXCJ0cmFuc2xhdGUoXCIgKyAtby53aWR0aCAvIDIgKyBcIiwgXCIgKyAoLW8uaGVpZ2h0IC8gMiAtIFMgKyAzKSArIFwiKVwiXG4gICksIGwuYXR0cihcImNsYXNzXCIsIFwib3V0ZXIgdGl0bGUtc3RhdGVcIikuYXR0cihcInhcIiwgLW8ud2lkdGggLyAyIC0gUykuYXR0cihcInlcIiwgLW8uaGVpZ2h0IC8gMiAtIFMpLmF0dHIoXCJ3aWR0aFwiLCBvLndpZHRoICsgdC5wYWRkaW5nKS5hdHRyKFwiaGVpZ2h0XCIsIG8uaGVpZ2h0ICsgdC5wYWRkaW5nKSwgcy5hdHRyKFwiY2xhc3NcIiwgXCJkaXZpZGVyXCIpLmF0dHIoXCJ4MVwiLCAtby53aWR0aCAvIDIgLSBTKS5hdHRyKFwieDJcIiwgby53aWR0aCAvIDIgKyBTKS5hdHRyKFwieTFcIiwgLW8uaGVpZ2h0IC8gMiAtIFMgKyB3LmhlaWdodCArIFMpLmF0dHIoXCJ5MlwiLCAtby5oZWlnaHQgLyAyIC0gUyArIHcuaGVpZ2h0ICsgUyksIFQodCwgbCksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24odikge1xuICAgIHJldHVybiBOLnJlY3QodCwgdik7XG4gIH0sIGk7XG59LCBcInJlY3RXaXRoVGl0bGVcIiksIE1yID0gLyogQF9fUFVSRV9fICovIGQoYXN5bmMgKGUsIHQpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZzogYSwgYmJveDogaSB9ID0gYXdhaXQgQShcbiAgICBlLFxuICAgIHQsXG4gICAgWSh0LCB2b2lkIDApLFxuICAgICEwXG4gICksIGwgPSBpLmhlaWdodCArIHQucGFkZGluZywgcyA9IGkud2lkdGggKyBsIC8gNCArIHQucGFkZGluZywgciA9IGEuaW5zZXJ0KFwicmVjdFwiLCBcIjpmaXJzdC1jaGlsZFwiKS5hdHRyKFwic3R5bGVcIiwgdC5zdHlsZSkuYXR0cihcInJ4XCIsIGwgLyAyKS5hdHRyKFwicnlcIiwgbCAvIDIpLmF0dHIoXCJ4XCIsIC1zIC8gMikuYXR0cihcInlcIiwgLWwgLyAyKS5hdHRyKFwid2lkdGhcIiwgcykuYXR0cihcImhlaWdodFwiLCBsKTtcbiAgcmV0dXJuIFQodCwgciksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBOLnJlY3QodCwgbik7XG4gIH0sIGE7XG59LCBcInN0YWRpdW1cIiksIEZyID0gLyogQF9fUFVSRV9fICovIGQoYXN5bmMgKGUsIHQpID0+IHtcbiAgY29uc3QgeyBzaGFwZVN2ZzogYSwgYmJveDogaSwgaGFsZlBhZGRpbmc6IGwgfSA9IGF3YWl0IEEoXG4gICAgZSxcbiAgICB0LFxuICAgIFkodCwgdm9pZCAwKSxcbiAgICAhMFxuICApLCBzID0gYS5pbnNlcnQoXCJjaXJjbGVcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIHJldHVybiBzLmF0dHIoXCJzdHlsZVwiLCB0LnN0eWxlKS5hdHRyKFwicnhcIiwgdC5yeCkuYXR0cihcInJ5XCIsIHQucnkpLmF0dHIoXCJyXCIsIGkud2lkdGggLyAyICsgbCkuYXR0cihcIndpZHRoXCIsIGkud2lkdGggKyB0LnBhZGRpbmcpLmF0dHIoXCJoZWlnaHRcIiwgaS5oZWlnaHQgKyB0LnBhZGRpbmcpLCBMLmluZm8oXCJDaXJjbGUgbWFpblwiKSwgVCh0LCBzKSwgdC5pbnRlcnNlY3QgPSBmdW5jdGlvbihyKSB7XG4gICAgcmV0dXJuIEwuaW5mbyhcIkNpcmNsZSBpbnRlcnNlY3RcIiwgdCwgaS53aWR0aCAvIDIgKyBsLCByKSwgTi5jaXJjbGUodCwgaS53aWR0aCAvIDIgKyBsLCByKTtcbiAgfSwgYTtcbn0sIFwiY2lyY2xlXCIpLCBXciA9IC8qIEBfX1BVUkVfXyAqLyBkKGFzeW5jIChlLCB0KSA9PiB7XG4gIGNvbnN0IHsgc2hhcGVTdmc6IGEsIGJib3g6IGksIGhhbGZQYWRkaW5nOiBsIH0gPSBhd2FpdCBBKFxuICAgIGUsXG4gICAgdCxcbiAgICBZKHQsIHZvaWQgMCksXG4gICAgITBcbiAgKSwgcyA9IDUsIHIgPSBhLmluc2VydChcImdcIiwgXCI6Zmlyc3QtY2hpbGRcIiksIG4gPSByLmluc2VydChcImNpcmNsZVwiKSwgYyA9IHIuaW5zZXJ0KFwiY2lyY2xlXCIpO1xuICByZXR1cm4gci5hdHRyKFwiY2xhc3NcIiwgdC5jbGFzcyksIG4uYXR0cihcInN0eWxlXCIsIHQuc3R5bGUpLmF0dHIoXCJyeFwiLCB0LnJ4KS5hdHRyKFwicnlcIiwgdC5yeSkuYXR0cihcInJcIiwgaS53aWR0aCAvIDIgKyBsICsgcykuYXR0cihcIndpZHRoXCIsIGkud2lkdGggKyB0LnBhZGRpbmcgKyBzICogMikuYXR0cihcImhlaWdodFwiLCBpLmhlaWdodCArIHQucGFkZGluZyArIHMgKiAyKSwgYy5hdHRyKFwic3R5bGVcIiwgdC5zdHlsZSkuYXR0cihcInJ4XCIsIHQucngpLmF0dHIoXCJyeVwiLCB0LnJ5KS5hdHRyKFwiclwiLCBpLndpZHRoIC8gMiArIGwpLmF0dHIoXCJ3aWR0aFwiLCBpLndpZHRoICsgdC5wYWRkaW5nKS5hdHRyKFwiaGVpZ2h0XCIsIGkuaGVpZ2h0ICsgdC5wYWRkaW5nKSwgTC5pbmZvKFwiRG91YmxlQ2lyY2xlIG1haW5cIiksIFQodCwgbiksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24odSkge1xuICAgIHJldHVybiBMLmluZm8oXCJEb3VibGVDaXJjbGUgaW50ZXJzZWN0XCIsIHQsIGkud2lkdGggLyAyICsgbCArIHMsIHUpLCBOLmNpcmNsZSh0LCBpLndpZHRoIC8gMiArIGwgKyBzLCB1KTtcbiAgfSwgYTtcbn0sIFwiZG91YmxlY2lyY2xlXCIpLCBQciA9IC8qIEBfX1BVUkVfXyAqLyBkKGFzeW5jIChlLCB0KSA9PiB7XG4gIGNvbnN0IHsgc2hhcGVTdmc6IGEsIGJib3g6IGkgfSA9IGF3YWl0IEEoXG4gICAgZSxcbiAgICB0LFxuICAgIFkodCwgdm9pZCAwKSxcbiAgICAhMFxuICApLCBsID0gaS53aWR0aCArIHQucGFkZGluZywgcyA9IGkuaGVpZ2h0ICsgdC5wYWRkaW5nLCByID0gW1xuICAgIHsgeDogMCwgeTogMCB9LFxuICAgIHsgeDogbCwgeTogMCB9LFxuICAgIHsgeDogbCwgeTogLXMgfSxcbiAgICB7IHg6IDAsIHk6IC1zIH0sXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB4OiAtOCwgeTogMCB9LFxuICAgIHsgeDogbCArIDgsIHk6IDAgfSxcbiAgICB7IHg6IGwgKyA4LCB5OiAtcyB9LFxuICAgIHsgeDogLTgsIHk6IC1zIH0sXG4gICAgeyB4OiAtOCwgeTogMCB9XG4gIF0sIG4gPSBVKGEsIGwsIHMsIHIpO1xuICByZXR1cm4gbi5hdHRyKFwic3R5bGVcIiwgdC5zdHlsZSksIFQodCwgbiksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBOLnBvbHlnb24odCwgciwgYyk7XG4gIH0sIGE7XG59LCBcInN1YnJvdXRpbmVcIiksIFlyID0gLyogQF9fUFVSRV9fICovIGQoKGUsIHQpID0+IHtcbiAgY29uc3QgYSA9IGUuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJub2RlIGRlZmF1bHRcIikuYXR0cihcImlkXCIsIHQuZG9tSWQgfHwgdC5pZCksIGkgPSBhLmluc2VydChcImNpcmNsZVwiLCBcIjpmaXJzdC1jaGlsZFwiKTtcbiAgcmV0dXJuIGkuYXR0cihcImNsYXNzXCIsIFwic3RhdGUtc3RhcnRcIikuYXR0cihcInJcIiwgNykuYXR0cihcIndpZHRoXCIsIDE0KS5hdHRyKFwiaGVpZ2h0XCIsIDE0KSwgVCh0LCBpKSwgdC5pbnRlcnNlY3QgPSBmdW5jdGlvbihsKSB7XG4gICAgcmV0dXJuIE4uY2lyY2xlKHQsIDcsIGwpO1xuICB9LCBhO1xufSwgXCJzdGFydFwiKSwgTXQgPSAvKiBAX19QVVJFX18gKi8gZCgoZSwgdCwgYSkgPT4ge1xuICBjb25zdCBpID0gZS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUgZGVmYXVsdFwiKS5hdHRyKFwiaWRcIiwgdC5kb21JZCB8fCB0LmlkKTtcbiAgbGV0IGwgPSA3MCwgcyA9IDEwO1xuICBhID09PSBcIkxSXCIgJiYgKGwgPSAxMCwgcyA9IDcwKTtcbiAgY29uc3QgciA9IGkuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLCAtMSAqIGwgLyAyKS5hdHRyKFwieVwiLCAtMSAqIHMgLyAyKS5hdHRyKFwid2lkdGhcIiwgbCkuYXR0cihcImhlaWdodFwiLCBzKS5hdHRyKFwiY2xhc3NcIiwgXCJmb3JrLWpvaW5cIik7XG4gIHJldHVybiBUKHQsIHIpLCB0LmhlaWdodCA9IHQuaGVpZ2h0ICsgdC5wYWRkaW5nIC8gMiwgdC53aWR0aCA9IHQud2lkdGggKyB0LnBhZGRpbmcgLyAyLCB0LmludGVyc2VjdCA9IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gTi5yZWN0KHQsIG4pO1xuICB9LCBpO1xufSwgXCJmb3JrSm9pblwiKSwgSHIgPSAvKiBAX19QVVJFX18gKi8gZCgoZSwgdCkgPT4ge1xuICBjb25zdCBhID0gZS5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUgZGVmYXVsdFwiKS5hdHRyKFwiaWRcIiwgdC5kb21JZCB8fCB0LmlkKSwgaSA9IGEuaW5zZXJ0KFwiY2lyY2xlXCIsIFwiOmZpcnN0LWNoaWxkXCIpLCBsID0gYS5pbnNlcnQoXCJjaXJjbGVcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIHJldHVybiBsLmF0dHIoXCJjbGFzc1wiLCBcInN0YXRlLXN0YXJ0XCIpLmF0dHIoXCJyXCIsIDcpLmF0dHIoXCJ3aWR0aFwiLCAxNCkuYXR0cihcImhlaWdodFwiLCAxNCksIGkuYXR0cihcImNsYXNzXCIsIFwic3RhdGUtZW5kXCIpLmF0dHIoXCJyXCIsIDUpLmF0dHIoXCJ3aWR0aFwiLCAxMCkuYXR0cihcImhlaWdodFwiLCAxMCksIFQodCwgbCksIHQuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBOLmNpcmNsZSh0LCA3LCBzKTtcbiAgfSwgYTtcbn0sIFwiZW5kXCIpLCBLciA9IC8qIEBfX1BVUkVfXyAqLyBkKGFzeW5jIChlLCB0KSA9PiB7XG4gIGNvbnN0IGEgPSB0LnBhZGRpbmcgLyAyLCBpID0gNCwgbCA9IDg7XG4gIGxldCBzO1xuICB0LmNsYXNzZXMgPyBzID0gXCJub2RlIFwiICsgdC5jbGFzc2VzIDogcyA9IFwibm9kZSBkZWZhdWx0XCI7XG4gIGNvbnN0IHIgPSBlLmluc2VydChcImdcIikuYXR0cihcImNsYXNzXCIsIHMpLmF0dHIoXCJpZFwiLCB0LmRvbUlkIHx8IHQuaWQpLCBuID0gci5pbnNlcnQoXCJyZWN0XCIsIFwiOmZpcnN0LWNoaWxkXCIpLCBjID0gci5pbnNlcnQoXCJsaW5lXCIpLCB1ID0gci5pbnNlcnQoXCJsaW5lXCIpO1xuICBsZXQgbyA9IDAsIHggPSBpO1xuICBjb25zdCB3ID0gci5pbnNlcnQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xuICBsZXQgYiA9IDA7XG4gIGNvbnN0IFMgPSB0LmNsYXNzRGF0YS5hbm5vdGF0aW9ucz8uWzBdLCB2ID0gdC5jbGFzc0RhdGEuYW5ub3RhdGlvbnNbMF0gPyBcIsKrXCIgKyB0LmNsYXNzRGF0YS5hbm5vdGF0aW9uc1swXSArIFwiwrtcIiA6IFwiXCIsIGsgPSB3Lm5vZGUoKS5hcHBlbmRDaGlsZChhd2FpdCBLKHYsIHQubGFiZWxTdHlsZSwgITAsICEwKSk7XG4gIGxldCBCID0gay5nZXRCQm94KCk7XG4gIGlmIChqKFIoKS5mbG93Y2hhcnQuaHRtbExhYmVscykpIHtcbiAgICBjb25zdCBFID0gay5jaGlsZHJlblswXSwgaCA9IE8oayk7XG4gICAgQiA9IEUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGguYXR0cihcIndpZHRoXCIsIEIud2lkdGgpLCBoLmF0dHIoXCJoZWlnaHRcIiwgQi5oZWlnaHQpO1xuICB9XG4gIHQuY2xhc3NEYXRhLmFubm90YXRpb25zWzBdICYmICh4ICs9IEIuaGVpZ2h0ICsgaSwgbyArPSBCLndpZHRoKTtcbiAgbGV0IF8gPSB0LmNsYXNzRGF0YS5sYWJlbDtcbiAgdC5jbGFzc0RhdGEudHlwZSAhPT0gdm9pZCAwICYmIHQuY2xhc3NEYXRhLnR5cGUgIT09IFwiXCIgJiYgKFIoKS5mbG93Y2hhcnQuaHRtbExhYmVscyA/IF8gKz0gXCImbHQ7XCIgKyB0LmNsYXNzRGF0YS50eXBlICsgXCImZ3Q7XCIgOiBfICs9IFwiPFwiICsgdC5jbGFzc0RhdGEudHlwZSArIFwiPlwiKTtcbiAgY29uc3QgRCA9IHcubm9kZSgpLmFwcGVuZENoaWxkKGF3YWl0IEsoXywgdC5sYWJlbFN0eWxlLCAhMCwgITApKTtcbiAgTyhEKS5hdHRyKFwiY2xhc3NcIiwgXCJjbGFzc1RpdGxlXCIpO1xuICBsZXQgeSA9IEQuZ2V0QkJveCgpO1xuICBpZiAoaihSKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpKSB7XG4gICAgY29uc3QgRSA9IEQuY2hpbGRyZW5bMF0sIGggPSBPKEQpO1xuICAgIHkgPSBFLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBoLmF0dHIoXCJ3aWR0aFwiLCB5LndpZHRoKSwgaC5hdHRyKFwiaGVpZ2h0XCIsIHkuaGVpZ2h0KTtcbiAgfVxuICB4ICs9IHkuaGVpZ2h0ICsgaSwgeS53aWR0aCA+IG8gJiYgKG8gPSB5LndpZHRoKTtcbiAgY29uc3QgZyA9IFtdO1xuICB0LmNsYXNzRGF0YS5tZW1iZXJzLmZvckVhY2goYXN5bmMgKEUpID0+IHtcbiAgICBjb25zdCBoID0gRS5nZXREaXNwbGF5RGV0YWlscygpO1xuICAgIGxldCBXID0gaC5kaXNwbGF5VGV4dDtcbiAgICBSKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMgJiYgKFcgPSBXLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpKTtcbiAgICBjb25zdCBwID0gdy5ub2RlKCkuYXBwZW5kQ2hpbGQoXG4gICAgICBhd2FpdCBLKFxuICAgICAgICBXLFxuICAgICAgICBoLmNzc1N0eWxlID8gaC5jc3NTdHlsZSA6IHQubGFiZWxTdHlsZSxcbiAgICAgICAgITAsXG4gICAgICAgICEwXG4gICAgICApXG4gICAgKTtcbiAgICBsZXQgSSA9IHAuZ2V0QkJveCgpO1xuICAgIGlmIChqKFIoKS5mbG93Y2hhcnQuaHRtbExhYmVscykpIHtcbiAgICAgIGNvbnN0IFogPSBwLmNoaWxkcmVuWzBdLCBWID0gTyhwKTtcbiAgICAgIEkgPSBaLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBWLmF0dHIoXCJ3aWR0aFwiLCBJLndpZHRoKSwgVi5hdHRyKFwiaGVpZ2h0XCIsIEkuaGVpZ2h0KTtcbiAgICB9XG4gICAgSS53aWR0aCA+IG8gJiYgKG8gPSBJLndpZHRoKSwgeCArPSBJLmhlaWdodCArIGksIGcucHVzaChwKTtcbiAgfSksIHggKz0gbDtcbiAgY29uc3QgZiA9IFtdO1xuICBpZiAodC5jbGFzc0RhdGEubWV0aG9kcy5mb3JFYWNoKGFzeW5jIChFKSA9PiB7XG4gICAgY29uc3QgaCA9IEUuZ2V0RGlzcGxheURldGFpbHMoKTtcbiAgICBsZXQgVyA9IGguZGlzcGxheVRleHQ7XG4gICAgUigpLmZsb3djaGFydC5odG1sTGFiZWxzICYmIChXID0gVy5yZXBsYWNlKC88L2csIFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKSk7XG4gICAgY29uc3QgcCA9IHcubm9kZSgpLmFwcGVuZENoaWxkKFxuICAgICAgYXdhaXQgSyhcbiAgICAgICAgVyxcbiAgICAgICAgaC5jc3NTdHlsZSA/IGguY3NzU3R5bGUgOiB0LmxhYmVsU3R5bGUsXG4gICAgICAgICEwLFxuICAgICAgICAhMFxuICAgICAgKVxuICAgICk7XG4gICAgbGV0IEkgPSBwLmdldEJCb3goKTtcbiAgICBpZiAoaihSKCkuZmxvd2NoYXJ0Lmh0bWxMYWJlbHMpKSB7XG4gICAgICBjb25zdCBaID0gcC5jaGlsZHJlblswXSwgViA9IE8ocCk7XG4gICAgICBJID0gWi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgVi5hdHRyKFwid2lkdGhcIiwgSS53aWR0aCksIFYuYXR0cihcImhlaWdodFwiLCBJLmhlaWdodCk7XG4gICAgfVxuICAgIEkud2lkdGggPiBvICYmIChvID0gSS53aWR0aCksIHggKz0gSS5oZWlnaHQgKyBpLCBmLnB1c2gocCk7XG4gIH0pLCB4ICs9IGwsIFMpIHtcbiAgICBsZXQgRSA9IChvIC0gQi53aWR0aCkgLyAyO1xuICAgIE8oaykuYXR0cihcbiAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZSggXCIgKyAoLTEgKiBvIC8gMiArIEUpICsgXCIsIFwiICsgLTEgKiB4IC8gMiArIFwiKVwiXG4gICAgKSwgYiA9IEIuaGVpZ2h0ICsgaTtcbiAgfVxuICBsZXQgbSA9IChvIC0geS53aWR0aCkgLyAyO1xuICByZXR1cm4gTyhEKS5hdHRyKFxuICAgIFwidHJhbnNmb3JtXCIsXG4gICAgXCJ0cmFuc2xhdGUoIFwiICsgKC0xICogbyAvIDIgKyBtKSArIFwiLCBcIiArICgtMSAqIHggLyAyICsgYikgKyBcIilcIlxuICApLCBiICs9IHkuaGVpZ2h0ICsgaSwgYy5hdHRyKFwiY2xhc3NcIiwgXCJkaXZpZGVyXCIpLmF0dHIoXCJ4MVwiLCAtbyAvIDIgLSBhKS5hdHRyKFwieDJcIiwgbyAvIDIgKyBhKS5hdHRyKFwieTFcIiwgLXggLyAyIC0gYSArIGwgKyBiKS5hdHRyKFwieTJcIiwgLXggLyAyIC0gYSArIGwgKyBiKSwgYiArPSBsLCBnLmZvckVhY2goKEUpID0+IHtcbiAgICBPKEUpLmF0dHIoXG4gICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoIFwiICsgLW8gLyAyICsgXCIsIFwiICsgKC0xICogeCAvIDIgKyBiICsgbCAvIDIpICsgXCIpXCJcbiAgICApO1xuICAgIGNvbnN0IGggPSBFPy5nZXRCQm94KCk7XG4gICAgYiArPSAoaD8uaGVpZ2h0ID8/IDApICsgaTtcbiAgfSksIGIgKz0gbCwgdS5hdHRyKFwiY2xhc3NcIiwgXCJkaXZpZGVyXCIpLmF0dHIoXCJ4MVwiLCAtbyAvIDIgLSBhKS5hdHRyKFwieDJcIiwgbyAvIDIgKyBhKS5hdHRyKFwieTFcIiwgLXggLyAyIC0gYSArIGwgKyBiKS5hdHRyKFwieTJcIiwgLXggLyAyIC0gYSArIGwgKyBiKSwgYiArPSBsLCBmLmZvckVhY2goKEUpID0+IHtcbiAgICBPKEUpLmF0dHIoXG4gICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoIFwiICsgLW8gLyAyICsgXCIsIFwiICsgKC0xICogeCAvIDIgKyBiKSArIFwiKVwiXG4gICAgKTtcbiAgICBjb25zdCBoID0gRT8uZ2V0QkJveCgpO1xuICAgIGIgKz0gKGg/LmhlaWdodCA/PyAwKSArIGk7XG4gIH0pLCBuLmF0dHIoXCJzdHlsZVwiLCB0LnN0eWxlKS5hdHRyKFwiY2xhc3NcIiwgXCJvdXRlciB0aXRsZS1zdGF0ZVwiKS5hdHRyKFwieFwiLCAtbyAvIDIgLSBhKS5hdHRyKFwieVwiLCAtKHggLyAyKSAtIGEpLmF0dHIoXCJ3aWR0aFwiLCBvICsgdC5wYWRkaW5nKS5hdHRyKFwiaGVpZ2h0XCIsIHggKyB0LnBhZGRpbmcpLCBUKHQsIG4pLCB0LmludGVyc2VjdCA9IGZ1bmN0aW9uKEUpIHtcbiAgICByZXR1cm4gTi5yZWN0KHQsIEUpO1xuICB9LCByO1xufSwgXCJjbGFzc19ib3hcIiksIEZ0ID0ge1xuICByaG9tYnVzOiBBdCxcbiAgY29tcG9zaXRlOiBScixcbiAgcXVlc3Rpb246IEF0LFxuICByZWN0OiBPcixcbiAgbGFiZWxSZWN0OiB6cixcbiAgcmVjdFdpdGhUaXRsZTogQXIsXG4gIGNob2ljZToga3IsXG4gIGNpcmNsZTogRnIsXG4gIGRvdWJsZWNpcmNsZTogV3IsXG4gIHN0YWRpdW06IE1yLFxuICBoZXhhZ29uOiB2cixcbiAgYmxvY2tfYXJyb3c6IEVyLFxuICByZWN0X2xlZnRfaW52X2Fycm93OiBfcixcbiAgbGVhbl9yaWdodDogRHIsXG4gIGxlYW5fbGVmdDogTnIsXG4gIHRyYXBlem9pZDogVHIsXG4gIGludl90cmFwZXpvaWQ6IEJyLFxuICByZWN0X3JpZ2h0X2ludl9hcnJvdzogQ3IsXG4gIGN5bGluZGVyOiBJcixcbiAgc3RhcnQ6IFlyLFxuICBlbmQ6IEhyLFxuICBub3RlOiBTcixcbiAgc3Vicm91dGluZTogUHIsXG4gIGZvcms6IE10LFxuICBqb2luOiBNdCxcbiAgY2xhc3NfYm94OiBLclxufSwgbHQgPSB7fSwgdGUgPSAvKiBAX19QVVJFX18gKi8gZChhc3luYyAoZSwgdCwgYSkgPT4ge1xuICBsZXQgaSwgbDtcbiAgaWYgKHQubGluaykge1xuICAgIGxldCBzO1xuICAgIFIoKS5zZWN1cml0eUxldmVsID09PSBcInNhbmRib3hcIiA/IHMgPSBcIl90b3BcIiA6IHQubGlua1RhcmdldCAmJiAocyA9IHQubGlua1RhcmdldCB8fCBcIl9ibGFua1wiKSwgaSA9IGUuaW5zZXJ0KFwic3ZnOmFcIikuYXR0cihcInhsaW5rOmhyZWZcIiwgdC5saW5rKS5hdHRyKFwidGFyZ2V0XCIsIHMpLCBsID0gYXdhaXQgRnRbdC5zaGFwZV0oaSwgdCwgYSk7XG4gIH0gZWxzZVxuICAgIGwgPSBhd2FpdCBGdFt0LnNoYXBlXShlLCB0LCBhKSwgaSA9IGw7XG4gIHJldHVybiB0LnRvb2x0aXAgJiYgbC5hdHRyKFwidGl0bGVcIiwgdC50b29sdGlwKSwgdC5jbGFzcyAmJiBsLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGUgZGVmYXVsdCBcIiArIHQuY2xhc3MpLCBsdFt0LmlkXSA9IGksIHQuaGF2ZUNhbGxiYWNrICYmIGx0W3QuaWRdLmF0dHIoXCJjbGFzc1wiLCBsdFt0LmlkXS5hdHRyKFwiY2xhc3NcIikgKyBcIiBjbGlja2FibGVcIiksIGk7XG59LCBcImluc2VydE5vZGVcIiksIFhyID0gLyogQF9fUFVSRV9fICovIGQoKGUpID0+IHtcbiAgY29uc3QgdCA9IGx0W2UuaWRdO1xuICBMLnRyYWNlKFxuICAgIFwiVHJhbnNmb3JtaW5nIG5vZGVcIixcbiAgICBlLmRpZmYsXG4gICAgZSxcbiAgICBcInRyYW5zbGF0ZShcIiArIChlLnggLSBlLndpZHRoIC8gMiAtIDUpICsgXCIsIFwiICsgZS53aWR0aCAvIDIgKyBcIilcIlxuICApO1xuICBjb25zdCBhID0gOCwgaSA9IGUuZGlmZiB8fCAwO1xuICByZXR1cm4gZS5jbHVzdGVyTm9kZSA/IHQuYXR0cihcbiAgICBcInRyYW5zZm9ybVwiLFxuICAgIFwidHJhbnNsYXRlKFwiICsgKGUueCArIGkgLSBlLndpZHRoIC8gMikgKyBcIiwgXCIgKyAoZS55IC0gZS5oZWlnaHQgLyAyIC0gYSkgKyBcIilcIlxuICApIDogdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgZS54ICsgXCIsIFwiICsgZS55ICsgXCIpXCIpLCBpO1xufSwgXCJwb3NpdGlvbk5vZGVcIik7XG5mdW5jdGlvbiBEdChlLCB0LCBhID0gITEpIHtcbiAgY29uc3QgaSA9IGU7XG4gIGxldCBsID0gXCJkZWZhdWx0XCI7XG4gIChpPy5jbGFzc2VzPy5sZW5ndGggfHwgMCkgPiAwICYmIChsID0gKGk/LmNsYXNzZXMgPz8gW10pLmpvaW4oXCIgXCIpKSwgbCA9IGwgKyBcIiBmbG93Y2hhcnQtbGFiZWxcIjtcbiAgbGV0IHMgPSAwLCByID0gXCJcIiwgbjtcbiAgc3dpdGNoIChpLnR5cGUpIHtcbiAgICBjYXNlIFwicm91bmRcIjpcbiAgICAgIHMgPSA1LCByID0gXCJyZWN0XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY29tcG9zaXRlXCI6XG4gICAgICBzID0gMCwgciA9IFwiY29tcG9zaXRlXCIsIG4gPSAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgciA9IFwicmVjdFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRpYW1vbmRcIjpcbiAgICAgIHIgPSBcInF1ZXN0aW9uXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaGV4YWdvblwiOlxuICAgICAgciA9IFwiaGV4YWdvblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJsb2NrX2Fycm93XCI6XG4gICAgICByID0gXCJibG9ja19hcnJvd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9kZFwiOlxuICAgICAgciA9IFwicmVjdF9sZWZ0X2ludl9hcnJvd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxlYW5fcmlnaHRcIjpcbiAgICAgIHIgPSBcImxlYW5fcmlnaHRcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsZWFuX2xlZnRcIjpcbiAgICAgIHIgPSBcImxlYW5fbGVmdFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRyYXBlem9pZFwiOlxuICAgICAgciA9IFwidHJhcGV6b2lkXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaW52X3RyYXBlem9pZFwiOlxuICAgICAgciA9IFwiaW52X3RyYXBlem9pZFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInJlY3RfbGVmdF9pbnZfYXJyb3dcIjpcbiAgICAgIHIgPSBcInJlY3RfbGVmdF9pbnZfYXJyb3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgIHIgPSBcImNpcmNsZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImVsbGlwc2VcIjpcbiAgICAgIHIgPSBcImVsbGlwc2VcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdGFkaXVtXCI6XG4gICAgICByID0gXCJzdGFkaXVtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3Vicm91dGluZVwiOlxuICAgICAgciA9IFwic3Vicm91dGluZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImN5bGluZGVyXCI6XG4gICAgICByID0gXCJjeWxpbmRlclwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImdyb3VwXCI6XG4gICAgICByID0gXCJyZWN0XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZG91YmxlY2lyY2xlXCI6XG4gICAgICByID0gXCJkb3VibGVjaXJjbGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByID0gXCJyZWN0XCI7XG4gIH1cbiAgY29uc3QgYyA9IG1lKGk/LnN0eWxlcyA/PyBbXSksIHUgPSBpLmxhYmVsLCBvID0gaS5zaXplID8/IHsgd2lkdGg6IDAsIGhlaWdodDogMCwgeDogMCwgeTogMCB9O1xuICByZXR1cm4ge1xuICAgIGxhYmVsU3R5bGU6IGMubGFiZWxTdHlsZSxcbiAgICBzaGFwZTogcixcbiAgICBsYWJlbFRleHQ6IHUsXG4gICAgcng6IHMsXG4gICAgcnk6IHMsXG4gICAgY2xhc3M6IGwsXG4gICAgc3R5bGU6IGMuc3R5bGUsXG4gICAgaWQ6IGkuaWQsXG4gICAgZGlyZWN0aW9uczogaS5kaXJlY3Rpb25zLFxuICAgIHdpZHRoOiBvLndpZHRoLFxuICAgIGhlaWdodDogby5oZWlnaHQsXG4gICAgeDogby54LFxuICAgIHk6IG8ueSxcbiAgICBwb3NpdGlvbmVkOiBhLFxuICAgIGludGVyc2VjdDogdm9pZCAwLFxuICAgIHR5cGU6IGkudHlwZSxcbiAgICBwYWRkaW5nOiBuID8/IHJ0KCk/LmJsb2NrPy5wYWRkaW5nID8/IDBcbiAgfTtcbn1cbmQoRHQsIFwiZ2V0Tm9kZUZyb21CbG9ja1wiKTtcbmFzeW5jIGZ1bmN0aW9uIGVlKGUsIHQsIGEpIHtcbiAgY29uc3QgaSA9IER0KHQsIGEsICExKTtcbiAgaWYgKGkudHlwZSA9PT0gXCJncm91cFwiKVxuICAgIHJldHVybjtcbiAgY29uc3QgbCA9IHJ0KCksIHMgPSBhd2FpdCB0ZShlLCBpLCB7IGNvbmZpZzogbCB9KSwgciA9IHMubm9kZSgpLmdldEJCb3goKSwgbiA9IGEuZ2V0QmxvY2soaS5pZCk7XG4gIG4uc2l6ZSA9IHsgd2lkdGg6IHIud2lkdGgsIGhlaWdodDogci5oZWlnaHQsIHg6IDAsIHk6IDAsIG5vZGU6IHMgfSwgYS5zZXRCbG9jayhuKSwgcy5yZW1vdmUoKTtcbn1cbmQoZWUsIFwiY2FsY3VsYXRlQmxvY2tTaXplXCIpO1xuYXN5bmMgZnVuY3Rpb24gcmUoZSwgdCwgYSkge1xuICBjb25zdCBpID0gRHQodCwgYSwgITApO1xuICBpZiAoYS5nZXRCbG9jayhpLmlkKS50eXBlICE9PSBcInNwYWNlXCIpIHtcbiAgICBjb25zdCBzID0gcnQoKTtcbiAgICBhd2FpdCB0ZShlLCBpLCB7IGNvbmZpZzogcyB9KSwgdC5pbnRlcnNlY3QgPSBpPy5pbnRlcnNlY3QsIFhyKGkpO1xuICB9XG59XG5kKHJlLCBcImluc2VydEJsb2NrUG9zaXRpb25lZFwiKTtcbmFzeW5jIGZ1bmN0aW9uIGR0KGUsIHQsIGEsIGkpIHtcbiAgZm9yIChjb25zdCBsIG9mIHQpXG4gICAgYXdhaXQgaShlLCBsLCBhKSwgbC5jaGlsZHJlbiAmJiBhd2FpdCBkdChlLCBsLmNoaWxkcmVuLCBhLCBpKTtcbn1cbmQoZHQsIFwicGVyZm9ybU9wZXJhdGlvbnNcIik7XG5hc3luYyBmdW5jdGlvbiBhZShlLCB0LCBhKSB7XG4gIGF3YWl0IGR0KGUsIHQsIGEsIGVlKTtcbn1cbmQoYWUsIFwiY2FsY3VsYXRlQmxvY2tTaXplc1wiKTtcbmFzeW5jIGZ1bmN0aW9uIHNlKGUsIHQsIGEpIHtcbiAgYXdhaXQgZHQoZSwgdCwgYSwgcmUpO1xufVxuZChzZSwgXCJpbnNlcnRCbG9ja3NcIik7XG5hc3luYyBmdW5jdGlvbiBpZShlLCB0LCBhLCBpLCBsKSB7XG4gIGNvbnN0IHMgPSBuZXcgU2Uoe1xuICAgIG11bHRpZ3JhcGg6ICEwLFxuICAgIGNvbXBvdW5kOiAhMFxuICB9KTtcbiAgcy5zZXRHcmFwaCh7XG4gICAgcmFua2RpcjogXCJUQlwiLFxuICAgIG5vZGVzZXA6IDEwLFxuICAgIHJhbmtzZXA6IDEwLFxuICAgIG1hcmdpbng6IDgsXG4gICAgbWFyZ2lueTogOFxuICB9KTtcbiAgZm9yIChjb25zdCByIG9mIGEpXG4gICAgci5zaXplICYmIHMuc2V0Tm9kZShyLmlkLCB7XG4gICAgICB3aWR0aDogci5zaXplLndpZHRoLFxuICAgICAgaGVpZ2h0OiByLnNpemUuaGVpZ2h0LFxuICAgICAgaW50ZXJzZWN0OiByLmludGVyc2VjdFxuICAgIH0pO1xuICBmb3IgKGNvbnN0IHIgb2YgdClcbiAgICBpZiAoci5zdGFydCAmJiByLmVuZCkge1xuICAgICAgY29uc3QgbiA9IGkuZ2V0QmxvY2soci5zdGFydCksIGMgPSBpLmdldEJsb2NrKHIuZW5kKTtcbiAgICAgIGlmIChuPy5zaXplICYmIGM/LnNpemUpIHtcbiAgICAgICAgY29uc3QgdSA9IG4uc2l6ZSwgbyA9IGMuc2l6ZSwgeCA9IFtcbiAgICAgICAgICB7IHg6IHUueCwgeTogdS55IH0sXG4gICAgICAgICAgeyB4OiB1LnggKyAoby54IC0gdS54KSAvIDIsIHk6IHUueSArIChvLnkgLSB1LnkpIC8gMiB9LFxuICAgICAgICAgIHsgeDogby54LCB5OiBvLnkgfVxuICAgICAgICBdO1xuICAgICAgICBncihcbiAgICAgICAgICBlLFxuICAgICAgICAgIHsgdjogci5zdGFydCwgdzogci5lbmQsIG5hbWU6IHIuaWQgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5yLFxuICAgICAgICAgICAgYXJyb3dUeXBlRW5kOiByLmFycm93VHlwZUVuZCxcbiAgICAgICAgICAgIGFycm93VHlwZVN0YXJ0OiByLmFycm93VHlwZVN0YXJ0LFxuICAgICAgICAgICAgcG9pbnRzOiB4LFxuICAgICAgICAgICAgY2xhc3NlczogXCJlZGdlLXRoaWNrbmVzcy1ub3JtYWwgZWRnZS1wYXR0ZXJuLXNvbGlkIGZsb3djaGFydC1saW5rIExTLWExIExFLWIxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICBcImJsb2NrXCIsXG4gICAgICAgICAgcyxcbiAgICAgICAgICBsXG4gICAgICAgICksIHIubGFiZWwgJiYgKGF3YWl0IGNyKGUsIHtcbiAgICAgICAgICAuLi5yLFxuICAgICAgICAgIGxhYmVsOiByLmxhYmVsLFxuICAgICAgICAgIGxhYmVsU3R5bGU6IFwic3Ryb2tlOiAjMzMzOyBzdHJva2Utd2lkdGg6IDEuNXB4O2ZpbGw6bm9uZTtcIixcbiAgICAgICAgICBhcnJvd1R5cGVFbmQ6IHIuYXJyb3dUeXBlRW5kLFxuICAgICAgICAgIGFycm93VHlwZVN0YXJ0OiByLmFycm93VHlwZVN0YXJ0LFxuICAgICAgICAgIHBvaW50czogeCxcbiAgICAgICAgICBjbGFzc2VzOiBcImVkZ2UtdGhpY2tuZXNzLW5vcm1hbCBlZGdlLXBhdHRlcm4tc29saWQgZmxvd2NoYXJ0LWxpbmsgTFMtYTEgTEUtYjFcIlxuICAgICAgICB9KSwgb3IoXG4gICAgICAgICAgeyAuLi5yLCB4OiB4WzFdLngsIHk6IHhbMV0ueSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9yaWdpbmFsUGF0aDogeFxuICAgICAgICAgIH1cbiAgICAgICAgKSk7XG4gICAgICB9XG4gICAgfVxufVxuZChpZSwgXCJpbnNlcnRFZGdlc1wiKTtcbnZhciBVciA9IC8qIEBfX1BVUkVfXyAqLyBkKGZ1bmN0aW9uKGUsIHQpIHtcbiAgcmV0dXJuIHQuZGIuZ2V0Q2xhc3NlcygpO1xufSwgXCJnZXRDbGFzc2VzXCIpLCBqciA9IC8qIEBfX1BVUkVfXyAqLyBkKGFzeW5jIGZ1bmN0aW9uKGUsIHQsIGEsIGkpIHtcbiAgY29uc3QgeyBzZWN1cml0eUxldmVsOiBsLCBibG9jazogcyB9ID0gcnQoKSwgciA9IGkuZGI7XG4gIGxldCBuO1xuICBsID09PSBcInNhbmRib3hcIiAmJiAobiA9IE8oXCIjaVwiICsgdCkpO1xuICBjb25zdCBjID0gbCA9PT0gXCJzYW5kYm94XCIgPyBPKG4ubm9kZXMoKVswXS5jb250ZW50RG9jdW1lbnQuYm9keSkgOiBPKFwiYm9keVwiKSwgdSA9IGwgPT09IFwic2FuZGJveFwiID8gYy5zZWxlY3QoYFtpZD1cIiR7dH1cIl1gKSA6IE8oYFtpZD1cIiR7dH1cIl1gKTtcbiAgYXIodSwgW1wicG9pbnRcIiwgXCJjaXJjbGVcIiwgXCJjcm9zc1wiXSwgaS50eXBlLCB0KTtcbiAgY29uc3QgeCA9IHIuZ2V0QmxvY2tzKCksIHcgPSByLmdldEJsb2Nrc0ZsYXQoKSwgYiA9IHIuZ2V0RWRnZXMoKSwgUyA9IHUuaW5zZXJ0KFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJibG9ja1wiKTtcbiAgYXdhaXQgYWUoUywgeCwgcik7XG4gIGNvbnN0IHYgPSBqdChyKTtcbiAgaWYgKGF3YWl0IHNlKFMsIHgsIHIpLCBhd2FpdCBpZShTLCBiLCB3LCByLCB0KSwgdikge1xuICAgIGNvbnN0IGsgPSB2LCBCID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCgwLjEyNSAqIChrLndpZHRoIC8gay5oZWlnaHQpKSksIF8gPSBrLmhlaWdodCArIEIgKyAxMCwgRCA9IGsud2lkdGggKyAxMCwgeyB1c2VNYXhXaWR0aDogeSB9ID0gcztcbiAgICBoZSh1LCBfLCBELCAhIXkpLCBMLmRlYnVnKFwiSGVyZSBCb3VuZHNcIiwgdiwgayksIHUuYXR0cihcbiAgICAgIFwidmlld0JveFwiLFxuICAgICAgYCR7ay54IC0gNX0gJHtrLnkgLSA1fSAke2sud2lkdGggKyAxMH0gJHtrLmhlaWdodCArIDEwfWBcbiAgICApO1xuICB9XG59LCBcImRyYXdcIiksIFZyID0ge1xuICBkcmF3OiBqcixcbiAgZ2V0Q2xhc3NlczogVXJcbn0sICRyID0ge1xuICBwYXJzZXI6IHZlLFxuICBkYjogS2UsXG4gIHJlbmRlcmVyOiBWcixcbiAgc3R5bGVzOiBVZVxufTtcbmV4cG9ydCB7XG4gICRyIGFzIGRpYWdyYW1cbn07XG4iXSwibmFtZXMiOlsiZCIsInQiLCJhIiwibCIsInAiLCJjZSIsIkYiLCJmdCIsIlIiLCJiZSIsIkwiLCJMZSIsImRlIiwicnQiLCJrZSIsImdlIiwib2UiLCJPIiwieXQiLCJqIiwid2UiLCJ4dCIsIld0IiwieWUiLCIkIiwiZmUiLCJ1ZSIsInBlIiwieGUiLCJtZSIsIlNlIiwiaGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUtBLElBQUksTUFBTSxXQUFXO0FBQ25CLE1BQUksSUFBb0JBLGtCQUFFLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUM3QyxTQUFLLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxRQUFRLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUc7QUFDbEQsV0FBTztBQUFBLEVBQ1QsR0FBRyxHQUFHLEdBQUdDLEtBQUksQ0FBQyxHQUFHLEVBQUUsR0FBR0MsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBR0MsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUk7QUFBQSxJQUNqVSxPQUF1Qkgsa0JBQUUsV0FBVztBQUFBLElBQ3BDLEdBQUcsT0FBTztBQUFBLElBQ1YsSUFBSSxDQUFBO0FBQUEsSUFDSixVQUFVLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxtQkFBbUIsSUFBSSxVQUFVLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLFlBQVksSUFBSSxZQUFZLElBQUksS0FBSyxJQUFJLGVBQWUsSUFBSSxrQkFBa0IsSUFBSSxhQUFhLElBQUksZ0JBQWdCLElBQUksbUJBQW1CLElBQUksbUJBQW1CLElBQUksZ0JBQWdCLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxTQUFTLElBQUksWUFBWSxJQUFJLEtBQUssSUFBSSxTQUFTLElBQUksaUJBQWlCLElBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxhQUFhLElBQUksV0FBVyxJQUFJLG1CQUFtQixJQUFJLGlCQUFpQixJQUFJLFVBQVUsSUFBSSxhQUFhLElBQUksb0JBQW9CLElBQUksU0FBUyxJQUFJLE9BQU8sSUFBSSxpQkFBaUIsSUFBSSxZQUFZLElBQUksT0FBTyxJQUFJLGtCQUFrQixJQUFJLHVCQUF1QixJQUFJLFNBQVMsR0FBRyxNQUFNLEVBQUM7QUFBQSxJQUNodkIsWUFBWSxFQUFFLEdBQUcsU0FBUyxHQUFHLGFBQWEsR0FBRyxNQUFNLEdBQUcsU0FBUyxHQUFHLE9BQU8sSUFBSSxxQkFBcUIsSUFBSSxRQUFRLElBQUksY0FBYyxJQUFJLGNBQWMsSUFBSSxPQUFPLElBQUksZUFBZSxJQUFJLFFBQVEsSUFBSSxXQUFXLElBQUksWUFBWSxJQUFJLE9BQU8sSUFBSSxXQUFXLElBQUksT0FBTyxJQUFJLGVBQWUsSUFBSSxhQUFhLElBQUkscUJBQXFCLElBQUksbUJBQW1CLElBQUksWUFBWSxJQUFJLGVBQWUsSUFBSSxzQkFBc0IsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLG1CQUFtQixJQUFJLGNBQWMsSUFBSSxTQUFTLElBQUksb0JBQW9CLElBQUksd0JBQXVCO0FBQUEsSUFDdGhCLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLElBQy9WLGVBQStCQSxrQkFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FB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QUFBLElBQ0ksR0FBRyxXQUFXO0FBQUEsSUFDZCxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUksRUFBRSxJQUFJSCxJQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJQyxJQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUlDLElBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUlGLElBQUcsSUFBSUMsSUFBRyxJQUFJLEdBQUcsSUFBSUMsSUFBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUMsR0FBSSxFQUFFLElBQUlGLElBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUlDLElBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSUMsSUFBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSUYsSUFBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSUMsSUFBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJQyxJQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJ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LEtBQUssVUFBVSxXQUFXLEdBQUc7QUFBQSxVQUN0QyxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUk7QUFBQSxVQUMxQixLQUFLO0FBQ0gsaUJBQUssVUFBVSxxQkFBcUI7QUFDcEM7QUFBQSxVQUNGLEtBQUs7QUFDSCxpQkFBSyxTQUFRO0FBQ2I7QUFBQSxVQUNGLEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxRQUFRLEdBQUc7QUFBQSxVQUN6RCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxRQUFRLEdBQUc7QUFBQSxVQUN6RCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxVQUMxRCxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxTQUFRLEdBQUksRUFBRSxVQUFTLEVBQUcsTUFBTSxRQUFRLEdBQUc7QUFBQSxVQUN6RCxLQUFLO0FBQ0gsbUJBQU8sRUFBRSxVQUFTLEVBQUcsTUFBTSxVQUFVLEdBQUcsS0FBSyxVQUFVLE1BQU0sR0FBRztBQUFBLFVBQ2xFLEtBQUs7QUFDSCxtQkFBTyxFQUFFLFVBQVMsRUFBRyxNQUFNLFVBQVUsR0FBRyxLQUFLLFVBQVUsTUFBTSxHQUFHO0FBQUEsVUFDbEUsS0FBSztBQUNILG1CQUFPLEVBQUUsVUFBUyxFQUFHLE1BQU0sVUFBVSxHQUFHLEtBQUssVUFBVSxNQUFNLEdBQUc7QUFBQSxVQUNsRSxLQUFLO0FBQ0gsbUJBQU8sRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUcsS0FBSyxVQUFVLE1BQU0sR0FBRztBQUFBLFVBQ2pFLEtBQUs7QUFDSCxtQkFBTyxFQUFFLFVBQVMsRUFBRyxNQUFNLFVBQVUsR0FBRyxLQUFLLFVBQVUsTUFBTSxHQUFHO0FBQUEsVUFDbEUsS0FBSztBQUNILG1CQUFPLEVBQUUsVUFBUyxFQUFHLE1BQU0sU0FBUyxHQUFHLEtBQUssVUFBVSxNQUFNLEdBQUc7QUFBQSxVQUNqRSxLQUFLO0FBQ0gsbUJBQU8sRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUcsS0FBSyxVQUFVLE1BQU0sR0FBRztBQUFBLFVBQ2pFLEtBQUs7QUFDSCxtQkFBTyxFQUFFLFVBQVMsRUFBRyxNQUFNLFNBQVMsR0FBRyxLQUFLLFVBQVUsTUFBTSxHQUFHO0FBQUEsVUFDakUsS0FBSztBQUNILG1CQUFPLEVBQUUsVUFBUyxFQUFHLE1BQU0sU0FBUyxHQUFHLEtBQUssVUFBVSxNQUFNLEdBQUc7QUFBQSxVQUNqRSxLQUFLO0FBQ0gsbUJBQU8sRUFBRSxVQUFTLEVBQUcsTUFBTSxVQUFVLEdBQUcsS0FBSyxVQUFVLE1BQU0sR0FBRztBQUFBLFVBQ2xFLEtBQUs7QUFDSCxtQkFBTyxFQUFFLFVBQVMsRUFBRyxNQUFNLFNBQVMsR0FBRyxLQUFLLFVBQVUsTUFBTSxHQUFHO0FBQUEsVUFDakUsS0FBSztBQUNILG1CQUFPLEtBQUssVUFBVSxNQUFNLEdBQUc7QUFBQSxVQUNqQyxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxVQUFVLE1BQU0sR0FBRztBQUFBLFVBQ2pDLEtBQUs7QUFDSCxtQkFBTyxLQUFLLFVBQVUsTUFBTSxHQUFHO0FBQUEsVUFDakMsS0FBSztBQUNILG1CQUFPLEtBQUssVUFBVSxNQUFNLEdBQUc7QUFBQSxVQUNqQyxLQUFLO0FBQ0gsbUJBQU8sS0FBSyxVQUFVLE1BQU0sR0FBRztBQUFBLFVBQ2pDLEtBQUs7QUFDSCxtQkFBTyxLQUFLLFVBQVUsTUFBTSxHQUFHO0FBQUEsVUFDakMsS0FBSztBQUNILG1CQUFPLEtBQUssVUFBVSxNQUFNLEdBQUc7QUFBQSxVQUNqQyxLQUFLO0FBQ0gsbUJBQU8sRUFBRSxVQUFTLEVBQUcsTUFBTSxTQUFTLEdBQUcsS0FBSyxVQUFVLE1BQU0sR0FBRztBQUFBLFVBQ2pFLEtBQUs7QUFDSCxtQkFBTyxL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LEVBQUM7QUFBQSxJQUNqQixFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQUEsRUFDckIsSUFBTSxFQUFFLElBQUksTUFBTSxJQUFJO0FBQUEsSUFDbEIsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFDO0FBQUEsSUFDWixFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztBQUFBO0FBQUEsSUFFYixFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFDO0FBQUEsSUFDakIsRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQUEsSUFDckIsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBQztBQUFBLElBQ2pCLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFDO0FBQUEsSUFDYixFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQUEsRUFDckIsSUFBTSxFQUFFLElBQUksSUFBSSxJQUFJO0FBQUE7QUFBQSxJQUVoQixFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztBQUFBO0FBQUEsSUFFYixFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQUEsSUFDakIsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBQztBQUFBO0FBQUEsSUFFakIsRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsRUFBQztBQUFBLElBQ2pCLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFBQTtBQUFBLElBRWpCLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBQztBQUFBLElBQ3JCLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUM7QUFBQSxFQUNyQixJQUFNLEVBQUUsSUFBSSxNQUFNLElBQUk7QUFBQTtBQUFBLElBRWxCLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFDO0FBQUE7QUFBQSxJQUVoQixFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztBQUFBLElBQ2IsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUM7QUFBQTtBQUFBLElBRWIsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBQztBQUFBLElBQ2pCLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBQztBQUFBLElBQ3JCLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUM7QUFBQSxJQUNqQixFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztBQUFBLEVBQ2pCLElBQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUMsQ0FBRTtBQUNyQixHQUFHLGdCQUFnQjtBQUNuQixTQUFTLEdBQUcsR0FBR0QsSUFBRztBQUNoQixTQUFPLEVBQUUsVUFBVUEsRUFBQztBQUN0QjtBQUNBRCxFQUFFLElBQUksZUFBZTtBQUNyQixJQUFJLEtBQUs7QUFDVCxTQUFTLEdBQUcsR0FBR0MsSUFBR0MsSUFBRyxHQUFHO0FBQ3RCLE1BQUlDLEtBQUksRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLElBQUlBLEtBQUksRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLEtBQUtGLEtBQUlBLEtBQUksSUFBSSxJQUFJQyxLQUFJQSxLQUFJLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxJQUFJRCxLQUFJQyxLQUFJLElBQUksQ0FBQztBQUN4SCxJQUFFLElBQUlDLE9BQU0sSUFBSSxDQUFDO0FBQ2pCLE1BQUksSUFBSSxLQUFLLElBQUlGLEtBQUlDLEtBQUksSUFBSSxDQUFDO0FBQzlCLFNBQU8sRUFBRSxJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHQyxLQUFJLEdBQUcsR0FBRyxJQUFJLEVBQUM7QUFDbEQ7QUFDQUgsRUFBRSxJQUFJLGtCQUFrQjtBQUN4QixJQUFJLEtBQUs7QUFDVCxTQUFTLEdBQUcsR0FBR0MsSUFBR0MsSUFBRztBQUNuQixTQUFPLEdBQUcsR0FBR0QsSUFBR0EsSUFBR0MsRUFBQztBQUN0QjtBQUNBRixFQUFFLElBQUksaUJBQWlCO0FBQ3ZCLElBQUksS0FBSztBQUNULFNBQVMsR0FBRyxHQUFHQyxJQUFHQyxJQUFHLEdBQUc7QUFDdEIsTUFBSUMsSUFBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzlDLE1BQUlBLEtBQUlGLEdBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUUsR0FBRyxJQUFJQSxHQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSUEsR0FBRSxHQUFHLElBQUlFLEtBQUlELEdBQUUsSUFBSSxJQUFJQSxHQUFFLElBQUksR0FBRyxJQUFJQyxLQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsTUFBTSxLQUFLLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJRCxHQUFFLEdBQUcsSUFBSUEsR0FBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSUEsR0FBRSxJQUFJQSxHQUFFLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLElBQUlELEdBQUUsSUFBSSxJQUFJQSxHQUFFLElBQUksR0FBRyxFQUFFLE1BQU0sS0FBSyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxJQUFJRSxLQUFJLElBQUksSUFBSSxHQUFHLE1BQU07QUFDclUsV0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLElBQUlBLEtBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUM7QUFDaEs7QUFDQUgsRUFBRSxJQUFJLGVBQWU7QUFDckIsU0FBUyxHQUFH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
