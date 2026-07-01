import { d } from "./chunk-55IACEB6-9FdoBfgn-AEAnxEH6.js";
import { d as d$1 } from "./chunk-QN33PNHL-Ct_6jMm2-CVp3WIoH.js";
import { p, F, f as ft, E as EL, o as ce, e as Ly, g as Ay, d as $y, a as My, r as Ey, s as Fy, bj as uk, Q as Qr, y as By } from "./SynchronicGraphPage-BdvKzM3s.js";
var vt = (function() {
  var t = /* @__PURE__ */ p(function(Y, o, c, n) {
    for (c = c || {}, n = Y.length; n--; c[Y[n]] = o) ;
    return c;
  }, "o"), e = [1, 2], s = [1, 3], a = [1, 4], r = [2, 4], h = [1, 9], d2 = [1, 11], S = [1, 16], f = [1, 17], T = [1, 18], _ = [1, 19], m = [1, 33], A = [1, 20], v = [1, 21], p$1 = [1, 22], k = [1, 23], R = [1, 24], L = [1, 26], $ = [1, 27], I = [1, 28], P = [1, 29], st = [1, 30], it = [1, 31], rt = [1, 32], at = [1, 35], nt = [1, 36], ot = [1, 37], lt = [1, 38], H = [1, 34], y = [1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57], ct = [1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 39, 40, 41, 45, 48, 51, 52, 53, 54, 57], xt = [4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57], gt = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, SPACE: 4, NL: 5, SD: 6, document: 7, line: 8, statement: 9, classDefStatement: 10, styleStatement: 11, cssClassStatement: 12, idStatement: 13, DESCR: 14, "-->": 15, HIDE_EMPTY: 16, scale: 17, WIDTH: 18, COMPOSIT_STATE: 19, STRUCT_START: 20, STRUCT_STOP: 21, STATE_DESCR: 22, AS: 23, ID: 24, FORK: 25, JOIN: 26, CHOICE: 27, CONCURRENT: 28, note: 29, notePosition: 30, NOTE_TEXT: 31, direction: 32, acc_title: 33, acc_title_value: 34, acc_descr: 35, acc_descr_value: 36, acc_descr_multiline_value: 37, CLICK: 38, STRING: 39, HREF: 40, classDef: 41, CLASSDEF_ID: 42, CLASSDEF_STYLEOPTS: 43, DEFAULT: 44, style: 45, STYLE_IDS: 46, STYLEDEF_STYLEOPTS: 47, class: 48, CLASSENTITY_IDS: 49, STYLECLASS: 50, direction_tb: 51, direction_bt: 52, direction_rl: 53, direction_lr: 54, eol: 55, ";": 56, EDGE_STATE: 57, STYLE_SEPARATOR: 58, left_of: 59, right_of: 60, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NL", 6: "SD", 14: "DESCR", 15: "-->", 16: "HIDE_EMPTY", 17: "scale", 18: "WIDTH", 19: "COMPOSIT_STATE", 20: "STRUCT_START", 21: "STRUCT_STOP", 22: "STATE_DESCR", 23: "AS", 24: "ID", 25: "FORK", 26: "JOIN", 27: "CHOICE", 28: "CONCURRENT", 29: "note", 31: "NOTE_TEXT", 33: "acc_title", 34: "acc_title_value", 35: "acc_descr", 36: "acc_descr_value", 37: "acc_descr_multiline_value", 38: "CLICK", 39: "STRING", 40: "HREF", 41: "classDef", 42: "CLASSDEF_ID", 43: "CLASSDEF_STYLEOPTS", 44: "DEFAULT", 45: "style", 46: "STYLE_IDS", 47: "STYLEDEF_STYLEOPTS", 48: "class", 49: "CLASSENTITY_IDS", 50: "STYLECLASS", 51: "direction_tb", 52: "direction_bt", 53: "direction_rl", 54: "direction_lr", 56: ";", 57: "EDGE_STATE", 58: "STYLE_SEPARATOR", 59: "left_of", 60: "right_of" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 3], [9, 4], [9, 1], [9, 2], [9, 1], [9, 4], [9, 3], [9, 6], [9, 1], [9, 1], [9, 1], [9, 1], [9, 4], [9, 4], [9, 1], [9, 2], [9, 2], [9, 1], [9, 5], [9, 5], [10, 3], [10, 3], [11, 3], [12, 3], [32, 1], [32, 1], [32, 1], [32, 1], [55, 1], [55, 1], [13, 1], [13, 1], [13, 3], [13, 3], [30, 1], [30, 1]],
    performAction: /* @__PURE__ */ p(function(o, c, n, g, E, i, J) {
      var l = i.length - 1;
      switch (E) {
        case 3:
          return g.setRootDoc(i[l]), i[l];
        case 4:
          this.$ = [];
          break;
        case 5:
          i[l] != "nl" && (i[l - 1].push(i[l]), this.$ = i[l - 1]);
          break;
        case 6:
        case 7:
          this.$ = i[l];
          break;
        case 8:
          this.$ = "nl";
          break;
        case 12:
          this.$ = i[l];
          break;
        case 13:
          const q = i[l - 1];
          q.description = g.trimColon(i[l]), this.$ = q;
          break;
        case 14:
          this.$ = { stmt: "relation", state1: i[l - 2], state2: i[l] };
          break;
        case 15:
          const Tt = g.trimColon(i[l]);
          this.$ = { stmt: "relation", state1: i[l - 3], state2: i[l - 1], description: Tt };
          break;
        case 19:
          this.$ = { stmt: "state", id: i[l - 3], type: "default", description: "", doc: i[l - 1] };
          break;
        case 20:
          var B = i[l], W = i[l - 2].trim();
          if (i[l].match(":")) {
            var ut = i[l].split(":");
            B = ut[0], W = [W, ut[1]];
          }
          this.$ = { stmt: "state", id: B, type: "default", description: W };
          break;
        case 21:
          this.$ = { stmt: "state", id: i[l - 3], type: "default", description: i[l - 5], doc: i[l - 1] };
          break;
        case 22:
          this.$ = { stmt: "state", id: i[l], type: "fork" };
          break;
        case 23:
          this.$ = { stmt: "state", id: i[l], type: "join" };
          break;
        case 24:
          this.$ = { stmt: "state", id: i[l], type: "choice" };
          break;
        case 25:
          this.$ = { stmt: "state", id: g.getDividerId(), type: "divider" };
          break;
        case 26:
          this.$ = { stmt: "state", id: i[l - 1].trim(), note: { position: i[l - 2].trim(), text: i[l].trim() } };
          break;
        case 29:
          this.$ = i[l].trim(), g.setAccTitle(this.$);
          break;
        case 30:
        case 31:
          this.$ = i[l].trim(), g.setAccDescription(this.$);
          break;
        case 32:
          this.$ = {
            stmt: "click",
            id: i[l - 3],
            url: i[l - 2],
            tooltip: i[l - 1]
          };
          break;
        case 33:
          this.$ = {
            stmt: "click",
            id: i[l - 3],
            url: i[l - 1],
            tooltip: ""
          };
          break;
        case 34:
        case 35:
          this.$ = { stmt: "classDef", id: i[l - 1].trim(), classes: i[l].trim() };
          break;
        case 36:
          this.$ = { stmt: "style", id: i[l - 1].trim(), styleClass: i[l].trim() };
          break;
        case 37:
          this.$ = { stmt: "applyClass", id: i[l - 1].trim(), styleClass: i[l].trim() };
          break;
        case 38:
          g.setDirection("TB"), this.$ = { stmt: "dir", value: "TB" };
          break;
        case 39:
          g.setDirection("BT"), this.$ = { stmt: "dir", value: "BT" };
          break;
        case 40:
          g.setDirection("RL"), this.$ = { stmt: "dir", value: "RL" };
          break;
        case 41:
          g.setDirection("LR"), this.$ = { stmt: "dir", value: "LR" };
          break;
        case 44:
        case 45:
          this.$ = { stmt: "state", id: i[l].trim(), type: "default", description: "" };
          break;
        case 46:
          this.$ = { stmt: "state", id: i[l - 2].trim(), classes: [i[l].trim()], type: "default", description: "" };
          break;
        case 47:
          this.$ = { stmt: "state", id: i[l - 2].trim(), classes: [i[l].trim()], type: "default", description: "" };
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: e, 5: s, 6: a }, { 1: [3] }, { 3: 5, 4: e, 5: s, 6: a }, { 3: 6, 4: e, 5: s, 6: a }, t([1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57], r, { 7: 7 }), { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3], 4: h, 5: d2, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 13: 15, 16: S, 17: f, 19: T, 22: _, 24: m, 25: A, 26: v, 27: p$1, 28: k, 29: R, 32: 25, 33: L, 35: $, 37: I, 38: P, 41: st, 45: it, 48: rt, 51: at, 52: nt, 53: ot, 54: lt, 57: H }, t(y, [2, 5]), { 9: 39, 10: 12, 11: 13, 12: 14, 13: 15, 16: S, 17: f, 19: T, 22: _, 24: m, 25: A, 26: v, 27: p$1, 28: k, 29: R, 32: 25, 33: L, 35: $, 37: I, 38: P, 41: st, 45: it, 48: rt, 51: at, 52: nt, 53: ot, 54: lt, 57: H }, t(y, [2, 7]), t(y, [2, 8]), t(y, [2, 9]), t(y, [2, 10]), t(y, [2, 11]), t(y, [2, 12], { 14: [1, 40], 15: [1, 41] }), t(y, [2, 16]), { 18: [1, 42] }, t(y, [2, 18], { 20: [1, 43] }), { 23: [1, 44] }, t(y, [2, 22]), t(y, [2, 23]), t(y, [2, 24]), t(y, [2, 25]), { 30: 45, 31: [1, 46], 59: [1, 47], 60: [1, 48] }, t(y, [2, 28]), { 34: [1, 49] }, { 36: [1, 50] }, t(y, [2, 31]), { 13: 51, 24: m, 57: H }, { 42: [1, 52], 44: [1, 53] }, { 46: [1, 54] }, { 49: [1, 55] }, t(ct, [2, 44], { 58: [1, 56] }), t(ct, [2, 45], { 58: [1, 57] }), t(y, [2, 38]), t(y, [2, 39]), t(y, [2, 40]), t(y, [2, 41]), t(y, [2, 6]), t(y, [2, 13]), { 13: 58, 24: m, 57: H }, t(y, [2, 17]), t(xt, r, { 7: 59 }), { 24: [1, 60] }, { 24: [1, 61] }, { 23: [1, 62] }, { 24: [2, 48] }, { 24: [2, 49] }, t(y, [2, 29]), t(y, [2, 30]), { 39: [1, 63], 40: [1, 64] }, { 43: [1, 65] }, { 43: [1, 66] }, { 47: [1, 67] }, { 50: [1, 68] }, { 24: [1, 69] }, { 24: [1, 70] }, t(y, [2, 14], { 14: [1, 71] }), { 4: h, 5: d2, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 13: 15, 16: S, 17: f, 19: T, 21: [1, 72], 22: _, 24: m, 25: A, 26: v, 27: p$1, 28: k, 29: R, 32: 25, 33: L, 35: $, 37: I, 38: P, 41: st, 45: it, 48: rt, 51: at, 52: nt, 53: ot, 54: lt, 57: H }, t(y, [2, 20], { 20: [1, 73] }), { 31: [1, 74] }, { 24: [1, 75] }, { 39: [1, 76] }, { 39: [1, 77] }, t(y, [2, 34]), t(y, [2, 35]), t(y, [2, 36]), t(y, [2, 37]), t(ct, [2, 46]), t(ct, [2, 47]), t(y, [2, 15]), t(y, [2, 19]), t(xt, r, { 7: 78 }), t(y, [2, 26]), t(y, [2, 27]), { 5: [1, 79] }, { 5: [1, 80] }, { 4: h, 5: d2, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 13: 15, 16: S, 17: f, 19: T, 21: [1, 81], 22: _, 24: m, 25: A, 26: v, 27: p$1, 28: k, 29: R, 32: 25, 33: L, 35: $, 37: I, 38: P, 41: st, 45: it, 48: rt, 51: at, 52: nt, 53: ot, 54: lt, 57: H }, t(y, [2, 32]), t(y, [2, 33]), t(y, [2, 21])],
    defaultActions: { 5: [2, 1], 6: [2, 2], 47: [2, 48], 48: [2, 49] },
    parseError: /* @__PURE__ */ p(function(o, c) {
      if (c.recoverable)
        this.trace(o);
      else {
        var n = new Error(o);
        throw n.hash = c, n;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(o) {
      var c = this, n = [0], g = [], E = [null], i = [], J = this.table, l = "", B = 0, W = 0, ut = 2, q = 1, Tt = i.slice.call(arguments, 1), D = Object.create(this.lexer), V = { yy: {} };
      for (var Et in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Et) && (V.yy[Et] = this.yy[Et]);
      D.setInput(o, V.yy), V.yy.lexer = D, V.yy.parser = this, typeof D.yylloc > "u" && (D.yylloc = {});
      var _t = D.yylloc;
      i.push(_t);
      var Qt = D.options && D.options.ranges;
      typeof V.yy.parseError == "function" ? this.parseError = V.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Zt(O) {
        n.length = n.length - 2 * O, E.length = E.length - O, i.length = i.length - O;
      }
      p(Zt, "popStack");
      function Lt() {
        var O;
        return O = g.pop() || D.lex() || q, typeof O != "number" && (O instanceof Array && (g = O, O = g.pop()), O = c.symbols_[O] || O), O;
      }
      p(Lt, "lex");
      for (var x, M, N, mt, z = {}, dt, F2, It, ft2; ; ) {
        if (M = n[n.length - 1], this.defaultActions[M] ? N = this.defaultActions[M] : ((x === null || typeof x > "u") && (x = Lt()), N = J[M] && J[M][x]), typeof N > "u" || !N.length || !N[0]) {
          var bt = "";
          ft2 = [];
          for (dt in J[M])
            this.terminals_[dt] && dt > ut && ft2.push("'" + this.terminals_[dt] + "'");
          D.showPosition ? bt = "Parse error on line " + (B + 1) + `:
` + D.showPosition() + `
Expecting ` + ft2.join(", ") + ", got '" + (this.terminals_[x] || x) + "'" : bt = "Parse error on line " + (B + 1) + ": Unexpected " + (x == q ? "end of input" : "'" + (this.terminals_[x] || x) + "'"), this.parseError(bt, {
            text: D.match,
            token: this.terminals_[x] || x,
            line: D.yylineno,
            loc: _t,
            expected: ft2
          });
        }
        if (N[0] instanceof Array && N.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + M + ", token: " + x);
        switch (N[0]) {
          case 1:
            n.push(x), E.push(D.yytext), i.push(D.yylloc), n.push(N[1]), x = null, W = D.yyleng, l = D.yytext, B = D.yylineno, _t = D.yylloc;
            break;
          case 2:
            if (F2 = this.productions_[N[1]][1], z.$ = E[E.length - F2], z._$ = {
              first_line: i[i.length - (F2 || 1)].first_line,
              last_line: i[i.length - 1].last_line,
              first_column: i[i.length - (F2 || 1)].first_column,
              last_column: i[i.length - 1].last_column
            }, Qt && (z._$.range = [
              i[i.length - (F2 || 1)].range[0],
              i[i.length - 1].range[1]
            ]), mt = this.performAction.apply(z, [
              l,
              W,
              B,
              V.yy,
              N[1],
              E,
              i
            ].concat(Tt)), typeof mt < "u")
              return mt;
            F2 && (n = n.slice(0, -1 * F2 * 2), E = E.slice(0, -1 * F2), i = i.slice(0, -1 * F2)), n.push(this.productions_[N[1]][0]), E.push(z.$), i.push(z._$), It = J[n[n.length - 2]][n[n.length - 1]], n.push(It);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, qt = /* @__PURE__ */ (function() {
    var Y = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(c, n) {
        if (this.yy.parser)
          this.yy.parser.parseError(c, n);
        else
          throw new Error(c);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(o, c) {
        return this.yy = c || this.yy || {}, this._input = o, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var o = this._input[0];
        this.yytext += o, this.yyleng++, this.offset++, this.match += o, this.matched += o;
        var c = o.match(/(?:\r\n?|\n).*/g);
        return c ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), o;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(o) {
        var c = o.length, n = o.split(/(?:\r\n?|\n)/g);
        this._input = o + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - c), this.offset -= c;
        var g = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
        var E = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: n ? (n.length === g.length ? this.yylloc.first_column : 0) + g[g.length - n.length].length - n[0].length : this.yylloc.first_column - c
        }, this.options.ranges && (this.yylloc.range = [E[0], E[0] + this.yyleng - c]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(o) {
        this.unput(this.match.slice(o));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var o = this.matched.substr(0, this.matched.length - this.match.length);
        return (o.length > 20 ? "..." : "") + o.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var o = this.match;
        return o.length < 20 && (o += this._input.substr(0, 20 - o.length)), (o.substr(0, 20) + (o.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var o = this.pastInput(), c = new Array(o.length + 1).join("-");
        return o + this.upcomingInput() + `
` + c + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(o, c) {
        var n, g, E;
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
        }, this.options.ranges && (E.yylloc.range = this.yylloc.range.slice(0))), g = o[0].match(/(?:\r\n?|\n).*/g), g && (this.yylineno += g.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: g ? g[g.length - 1].length - g[g.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length
        }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(o[0].length), this.matched += o[0], n = this.performAction.call(this, this.yy, this, c, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n)
          return n;
        if (this._backtrack) {
          for (var i in E)
            this[i] = E[i];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var o, c, n, g;
        this._more || (this.yytext = "", this.match = "");
        for (var E = this._currentRules(), i = 0; i < E.length; i++)
          if (n = this._input.match(this.rules[E[i]]), n && (!c || n[0].length > c[0].length)) {
            if (c = n, g = i, this.options.backtrack_lexer) {
              if (o = this.test_match(n, E[i]), o !== false)
                return o;
              if (this._backtrack) {
                c = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return c ? (o = this.test_match(c, E[g]), o !== false ? o : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var c = this.next();
        return c || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(c) {
        this.conditionStack.push(c);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var c = this.conditionStack.length - 1;
        return c > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(c) {
        return c = this.conditionStack.length - 1 - Math.abs(c || 0), c >= 0 ? this.conditionStack[c] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(c) {
        this.begin(c);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(c, n, g, E) {
        switch (g) {
          case 0:
            return 38;
          case 1:
            return 40;
          case 2:
            return 39;
          case 3:
            return 44;
          case 4:
            return 51;
          case 5:
            return 52;
          case 6:
            return 53;
          case 7:
            return 54;
          case 8:
            break;
          case 9:
            break;
          case 10:
            return 5;
          case 11:
            break;
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            return this.pushState("SCALE"), 17;
          case 16:
            return 18;
          case 17:
            this.popState();
            break;
          case 18:
            return this.begin("acc_title"), 33;
          case 19:
            return this.popState(), "acc_title_value";
          case 20:
            return this.begin("acc_descr"), 35;
          case 21:
            return this.popState(), "acc_descr_value";
          case 22:
            this.begin("acc_descr_multiline");
            break;
          case 23:
            this.popState();
            break;
          case 24:
            return "acc_descr_multiline_value";
          case 25:
            return this.pushState("CLASSDEF"), 41;
          case 26:
            return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
          case 27:
            return this.popState(), this.pushState("CLASSDEFID"), 42;
          case 28:
            return this.popState(), 43;
          case 29:
            return this.pushState("CLASS"), 48;
          case 30:
            return this.popState(), this.pushState("CLASS_STYLE"), 49;
          case 31:
            return this.popState(), 50;
          case 32:
            return this.pushState("STYLE"), 45;
          case 33:
            return this.popState(), this.pushState("STYLEDEF_STYLES"), 46;
          case 34:
            return this.popState(), 47;
          case 35:
            return this.pushState("SCALE"), 17;
          case 36:
            return 18;
          case 37:
            this.popState();
            break;
          case 38:
            this.pushState("STATE");
            break;
          case 39:
            return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 25;
          case 40:
            return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 26;
          case 41:
            return this.popState(), n.yytext = n.yytext.slice(0, -10).trim(), 27;
          case 42:
            return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 25;
          case 43:
            return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 26;
          case 44:
            return this.popState(), n.yytext = n.yytext.slice(0, -10).trim(), 27;
          case 45:
            return 51;
          case 46:
            return 52;
          case 47:
            return 53;
          case 48:
            return 54;
          case 49:
            this.pushState("STATE_STRING");
            break;
          case 50:
            return this.pushState("STATE_ID"), "AS";
          case 51:
            return this.popState(), "ID";
          case 52:
            this.popState();
            break;
          case 53:
            return "STATE_DESCR";
          case 54:
            return 19;
          case 55:
            this.popState();
            break;
          case 56:
            return this.popState(), this.pushState("struct"), 20;
          case 57:
            break;
          case 58:
            return this.popState(), 21;
          case 59:
            break;
          case 60:
            return this.begin("NOTE"), 29;
          case 61:
            return this.popState(), this.pushState("NOTE_ID"), 59;
          case 62:
            return this.popState(), this.pushState("NOTE_ID"), 60;
          case 63:
            this.popState(), this.pushState("FLOATING_NOTE");
            break;
          case 64:
            return this.popState(), this.pushState("FLOATING_NOTE_ID"), "AS";
          case 65:
            break;
          case 66:
            return "NOTE_TEXT";
          case 67:
            return this.popState(), "ID";
          case 68:
            return this.popState(), this.pushState("NOTE_TEXT"), 24;
          case 69:
            return this.popState(), n.yytext = n.yytext.substr(2).trim(), 31;
          case 70:
            return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 31;
          case 71:
            return 6;
          case 72:
            return 6;
          case 73:
            return 16;
          case 74:
            return 57;
          case 75:
            return 24;
          case 76:
            return n.yytext = n.yytext.trim(), 14;
          case 77:
            return 15;
          case 78:
            return 28;
          case 79:
            return 58;
          case 80:
            return 5;
          case 81:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:click\b)/i, /^(?:href\b)/i, /^(?:"[^"]*")/i, /^(?:default\b)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:classDef\s+)/i, /^(?:DEFAULT\s+)/i, /^(?:\w+\s+)/i, /^(?:[^\n]*)/i, /^(?:class\s+)/i, /^(?:(\w+)+((,\s*\w+)*))/i, /^(?:[^\n]*)/i, /^(?:style\s+)/i, /^(?:[\w,]+\s+)/i, /^(?:[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:state\s+)/i, /^(?:.*<<fork>>)/i, /^(?:.*<<join>>)/i, /^(?:.*<<choice>>)/i, /^(?:.*\[\[fork\]\])/i, /^(?:.*\[\[join\]\])/i, /^(?:.*\[\[choice\]\])/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:["])/i, /^(?:\s*as\s+)/i, /^(?:[^\n\{]*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n\s\{]+)/i, /^(?:\n)/i, /^(?:\{)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:\})/i, /^(?:[\n])/i, /^(?:note\s+)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:")/i, /^(?:\s*as\s*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n]*)/i, /^(?:\s*[^:\n\s\-]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:[\s\S]*?end note\b)/i, /^(?:stateDiagram\s+)/i, /^(?:stateDiagram-v2\s+)/i, /^(?:hide empty description\b)/i, /^(?:\[\*\])/i, /^(?:[^:\n\s\-\{]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:-->)/i, /^(?:--)/i, /^(?::::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { LINE: { rules: [12, 13], inclusive: false }, struct: { rules: [12, 13, 25, 29, 32, 38, 45, 46, 47, 48, 57, 58, 59, 60, 74, 75, 76, 77, 78], inclusive: false }, FLOATING_NOTE_ID: { rules: [67], inclusive: false }, FLOATING_NOTE: { rules: [64, 65, 66], inclusive: false }, NOTE_TEXT: { rules: [69, 70], inclusive: false }, NOTE_ID: { rules: [68], inclusive: false }, NOTE: { rules: [61, 62, 63], inclusive: false }, STYLEDEF_STYLEOPTS: { rules: [], inclusive: false }, STYLEDEF_STYLES: { rules: [34], inclusive: false }, STYLE_IDS: { rules: [], inclusive: false }, STYLE: { rules: [33], inclusive: false }, CLASS_STYLE: { rules: [31], inclusive: false }, CLASS: { rules: [30], inclusive: false }, CLASSDEFID: { rules: [28], inclusive: false }, CLASSDEF: { rules: [26, 27], inclusive: false }, acc_descr_multiline: { rules: [23, 24], inclusive: false }, acc_descr: { rules: [21], inclusive: false }, acc_title: { rules: [19], inclusive: false }, SCALE: { rules: [16, 17, 36, 37], inclusive: false }, ALIAS: { rules: [], inclusive: false }, STATE_ID: { rules: [51], inclusive: false }, STATE_STRING: { rules: [52, 53], inclusive: false }, FORK_STATE: { rules: [], inclusive: false }, STATE: { rules: [12, 13, 39, 40, 41, 42, 43, 44, 49, 50, 54, 55, 56], inclusive: false }, ID: { rules: [12, 13], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 18, 20, 22, 25, 29, 32, 35, 38, 56, 60, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81], inclusive: true } }
    };
    return Y;
  })();
  gt.lexer = qt;
  function ht() {
    this.yy = {};
  }
  return p(ht, "Parser"), ht.prototype = gt, gt.Parser = ht, new ht();
})();
vt.parser = vt;
var Be = vt, de = "TB", Yt = "TB", Ot = "dir", X = "state", K = "root", Ct = "relation", fe = "classDef", pe = "style", Se = "applyClass", tt = "default", Gt = "divider", Bt = "fill:none", Vt = "fill: #333", Mt = "c", Ut = "text", jt = "normal", Dt = "rect", kt = "rectWithTitle", ye = "stateStart", ge = "stateEnd", Rt = "divider", Nt = "roundedWithTitle", Te = "note", Ee = "noteGroup", et = "statediagram", _e = "state", me = `${et}-${_e}`, Ht = "transition", be = "note", De = "note-edge", ke = `${Ht} ${De}`, ve = `${et}-${be}`, Ce = "cluster", Ae = `${et}-${Ce}`, xe = "cluster-alt", Le = `${et}-${xe}`, Wt = "parent", zt = "note", Ie = "state", At = "----", Oe = `${At}${zt}`, wt = `${At}${Wt}`, Kt = /* @__PURE__ */ p((t, e = Yt) => {
  if (!t.doc)
    return e;
  let s = e;
  for (const a of t.doc)
    a.stmt === "dir" && (s = a.value);
  return s;
}, "getDir"), Re = /* @__PURE__ */ p(function(t, e) {
  return e.db.getClasses();
}, "getClasses"), Ne = /* @__PURE__ */ p(async function(t, e, s, a) {
  F.info("REF0:"), F.info("Drawing state diagram (v2)", e);
  const { securityLevel: r, state: h, layout: d$2 } = ft();
  a.db.extract(a.db.getRootDocV2());
  const S = a.db.getData(), f = d(e, r);
  S.type = a.type, S.layoutAlgorithm = d$2, S.nodeSpacing = h?.nodeSpacing || 50, S.rankSpacing = h?.rankSpacing || 50, S.markers = ["barb"], S.diagramId = e, await EL(S, f);
  const T = 8;
  try {
    (typeof a.db.getLinks == "function" ? a.db.getLinks() : /* @__PURE__ */ new Map()).forEach((m, A) => {
      const v = typeof A == "string" ? A : typeof A?.id == "string" ? A.id : "";
      if (!v) {
        F.warn("⚠️ Invalid or missing stateId from key:", JSON.stringify(A));
        return;
      }
      const p2 = f.node()?.querySelectorAll("g");
      let k;
      if (p2?.forEach((I) => {
        I.textContent?.trim() === v && (k = I);
      }), !k) {
        F.warn("⚠️ Could not find node matching text:", v);
        return;
      }
      const R = k.parentNode;
      if (!R) {
        F.warn("⚠️ Node has no parent, cannot wrap:", v);
        return;
      }
      const L = document.createElementNS("http://www.w3.org/2000/svg", "a"), $ = m.url.replace(/^"+|"+$/g, "");
      if (L.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", $), L.setAttribute("target", "_blank"), m.tooltip) {
        const I = m.tooltip.replace(/^"+|"+$/g, "");
        L.setAttribute("title", I);
      }
      R.replaceChild(L, k), L.appendChild(k), F.info("🔗 Wrapped node in <a> tag for:", v, m.url);
    });
  } catch (_) {
    F.error("❌ Error injecting clickable links:", _);
  }
  ce.insertTitle(
    f,
    "statediagramTitleText",
    h?.titleTopMargin ?? 25,
    a.db.getDiagramTitle()
  ), d$1(f, T, et, h?.useMaxWidth ?? true);
}, "draw"), Ve = {
  getClasses: Re,
  draw: Ne,
  getDir: Kt
}, St = /* @__PURE__ */ new Map(), G = 0;
function yt(t = "", e = 0, s = "", a = At) {
  const r = s !== null && s.length > 0 ? `${a}${s}` : "";
  return `${Ie}-${t}${r}-${e}`;
}
p(yt, "stateDomId");
var we = /* @__PURE__ */ p((t, e, s, a, r, h, d2, S) => {
  F.trace("items", e), e.forEach((f) => {
    switch (f.stmt) {
      case X:
        Z(t, f, s, a, r, h, d2, S);
        break;
      case tt:
        Z(t, f, s, a, r, h, d2, S);
        break;
      case Ct:
        {
          Z(
            t,
            f.state1,
            s,
            a,
            r,
            h,
            d2,
            S
          ), Z(
            t,
            f.state2,
            s,
            a,
            r,
            h,
            d2,
            S
          );
          const T = {
            id: "edge" + G,
            start: f.state1.id,
            end: f.state2.id,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: Bt,
            labelStyle: "",
            label: Qr.sanitizeText(f.description ?? "", ft()),
            arrowheadStyle: Vt,
            labelpos: Mt,
            labelType: Ut,
            thickness: jt,
            classes: Ht,
            look: d2
          };
          r.push(T), G++;
        }
        break;
    }
  });
}, "setupDoc"), $t = /* @__PURE__ */ p((t, e = Yt) => {
  let s = e;
  if (t.doc)
    for (const a of t.doc)
      a.stmt === "dir" && (s = a.value);
  return s;
}, "getDir");
function Q(t, e, s) {
  if (!e.id || e.id === "</join></fork>" || e.id === "</choice>")
    return;
  e.cssClasses && (Array.isArray(e.cssCompiledStyles) || (e.cssCompiledStyles = []), e.cssClasses.split(" ").forEach((r) => {
    const h = s.get(r);
    h && (e.cssCompiledStyles = [...e.cssCompiledStyles ?? [], ...h.styles]);
  }));
  const a = t.find((r) => r.id === e.id);
  a ? Object.assign(a, e) : t.push(e);
}
p(Q, "insertOrUpdateNode");
function Xt(t) {
  return t?.classes?.join(" ") ?? "";
}
p(Xt, "getClassesFromDbInfo");
function Jt(t) {
  return t?.styles ?? [];
}
p(Jt, "getStylesFromDbInfo");
var Z = /* @__PURE__ */ p((t, e, s, a, r, h, d2, S) => {
  const f = e.id, T = s.get(f), _ = Xt(T), m = Jt(T), A = ft();
  if (F.info("dataFetcher parsedItem", e, T, m), f !== "root") {
    let v = Dt;
    e.start === true ? v = ye : e.start === false && (v = ge), e.type !== tt && (v = e.type), St.get(f) || St.set(f, {
      id: f,
      shape: v,
      description: Qr.sanitizeText(f, A),
      cssClasses: `${_} ${me}`,
      cssStyles: m
    });
    const p2 = St.get(f);
    e.description && (Array.isArray(p2.description) ? (p2.shape = kt, p2.description.push(e.description)) : p2.description?.length && p2.description.length > 0 ? (p2.shape = kt, p2.description === f ? p2.description = [e.description] : p2.description = [p2.description, e.description]) : (p2.shape = Dt, p2.description = e.description), p2.description = Qr.sanitizeTextOrArray(p2.description, A)), p2.description?.length === 1 && p2.shape === kt && (p2.type === "group" ? p2.shape = Nt : p2.shape = Dt), !p2.type && e.doc && (F.info("Setting cluster for XCX", f, $t(e)), p2.type = "group", p2.isGroup = true, p2.dir = $t(e), p2.shape = e.type === Gt ? Rt : Nt, p2.cssClasses = `${p2.cssClasses} ${Ae} ${h ? Le : ""}`);
    const k = {
      labelStyle: "",
      shape: p2.shape,
      label: p2.description,
      cssClasses: p2.cssClasses,
      cssCompiledStyles: [],
      cssStyles: p2.cssStyles,
      id: f,
      dir: p2.dir,
      domId: yt(f, G),
      type: p2.type,
      isGroup: p2.type === "group",
      padding: 8,
      rx: 10,
      ry: 10,
      look: d2
    };
    if (k.shape === Rt && (k.label = ""), t && t.id !== "root" && (F.trace("Setting node ", f, " to be child of its parent ", t.id), k.parentId = t.id), k.centerLabel = true, e.note) {
      const R = {
        labelStyle: "",
        shape: Te,
        label: e.note.text,
        cssClasses: ve,
        // useHtmlLabels: false,
        cssStyles: [],
        cssCompiledStyles: [],
        id: f + Oe + "-" + G,
        domId: yt(f, G, zt),
        type: p2.type,
        isGroup: p2.type === "group",
        padding: A.flowchart?.padding,
        look: d2,
        position: e.note.position
      }, L = f + wt, $ = {
        labelStyle: "",
        shape: Ee,
        label: e.note.text,
        cssClasses: p2.cssClasses,
        cssStyles: [],
        id: f + wt,
        domId: yt(f, G, Wt),
        type: "group",
        isGroup: true,
        padding: 16,
        //getConfig().flowchart.padding
        look: d2,
        position: e.note.position
      };
      G++, $.id = L, R.parentId = L, Q(a, $, S), Q(a, R, S), Q(a, k, S);
      let I = f, P = R.id;
      e.note.position === "left of" && (I = R.id, P = f), r.push({
        id: I + "-" + P,
        start: I,
        end: P,
        arrowhead: "none",
        arrowTypeEnd: "",
        style: Bt,
        labelStyle: "",
        classes: ke,
        arrowheadStyle: Vt,
        labelpos: Mt,
        labelType: Ut,
        thickness: jt,
        look: d2
      });
    } else
      Q(a, k, S);
  }
  e.doc && (F.trace("Adding nodes children "), we(e, e.doc, s, a, r, !h, d2, S));
}, "dataFetcher"), $e = /* @__PURE__ */ p(() => {
  St.clear(), G = 0;
}, "reset"), C = {
  START_NODE: "[*]",
  START_TYPE: "start",
  END_NODE: "[*]",
  END_TYPE: "end",
  COLOR_KEYWORD: "color",
  FILL_KEYWORD: "fill",
  BG_FILL: "bgFill",
  STYLECLASS_SEP: ","
}, Pt = /* @__PURE__ */ p(() => /* @__PURE__ */ new Map(), "newClassesList"), Ft = /* @__PURE__ */ p(() => ({
  relations: [],
  states: /* @__PURE__ */ new Map(),
  documents: {}
}), "newDoc"), pt = /* @__PURE__ */ p((t) => JSON.parse(JSON.stringify(t)), "clone"), j, Me = (j = class {
  constructor(e) {
    this.version = e, this.nodes = [], this.edges = [], this.rootDoc = [], this.classes = Pt(), this.documents = { root: Ft() }, this.currentDocument = this.documents.root, this.startEndCount = 0, this.dividerCnt = 0, this.links = /* @__PURE__ */ new Map(), this.getAccTitle = Ly, this.setAccTitle = Ay, this.getAccDescription = $y, this.setAccDescription = My, this.setDiagramTitle = Ey, this.getDiagramTitle = Fy, this.clear(), this.setRootDoc = this.setRootDoc.bind(this), this.getDividerId = this.getDividerId.bind(this), this.setDirection = this.setDirection.bind(this), this.trimColon = this.trimColon.bind(this);
  }
  /**
   * Convert all of the statements (stmts) that were parsed into states and relationships.
   * This is done because a state diagram may have nested sections,
   * where each section is a 'document' and has its own set of statements.
   * Ex: the section within a fork has its own statements, and incoming and outgoing statements
   * refer to the fork as a whole (document).
   * See the parser grammar:  the definition of a document is a document then a 'line', where a line can be a statement.
   * This will push the statement into the list of statements for the current document.
   */
  extract(e) {
    this.clear(true);
    for (const r of Array.isArray(e) ? e : e.doc)
      switch (r.stmt) {
        case X:
          this.addState(r.id.trim(), r.type, r.doc, r.description, r.note);
          break;
        case Ct:
          this.addRelation(r.state1, r.state2, r.description);
          break;
        case fe:
          this.addStyleClass(r.id.trim(), r.classes);
          break;
        case pe:
          this.handleStyleDef(r);
          break;
        case Se:
          this.setCssClass(r.id.trim(), r.styleClass);
          break;
        case "click":
          this.addLink(r.id, r.url, r.tooltip);
          break;
      }
    const s = this.getStates(), a = ft();
    $e(), Z(
      void 0,
      this.getRootDocV2(),
      s,
      this.nodes,
      this.edges,
      true,
      a.look,
      this.classes
    );
    for (const r of this.nodes)
      if (Array.isArray(r.label)) {
        if (r.description = r.label.slice(1), r.isGroup && r.description.length > 0)
          throw new Error(
            `Group nodes can only have label. Remove the additional description for node [${r.id}]`
          );
        r.label = r.label[0];
      }
  }
  handleStyleDef(e) {
    const s = e.id.trim().split(","), a = e.styleClass.split(",");
    for (const r of s) {
      let h = this.getState(r);
      if (!h) {
        const d2 = r.trim();
        this.addState(d2), h = this.getState(d2);
      }
      h && (h.styles = a.map((d2) => d2.replace(/;/g, "")?.trim()));
    }
  }
  setRootDoc(e) {
    F.info("Setting root doc", e), this.rootDoc = e, this.version === 1 ? this.extract(e) : this.extract(this.getRootDocV2());
  }
  docTranslator(e, s, a) {
    if (s.stmt === Ct) {
      this.docTranslator(e, s.state1, true), this.docTranslator(e, s.state2, false);
      return;
    }
    if (s.stmt === X && (s.id === C.START_NODE ? (s.id = e.id + (a ? "_start" : "_end"), s.start = a) : s.id = s.id.trim()), s.stmt !== K && s.stmt !== X || !s.doc)
      return;
    const r = [];
    let h = [];
    for (const d2 of s.doc)
      if (d2.type === Gt) {
        const S = pt(d2);
        S.doc = pt(h), r.push(S), h = [];
      } else
        h.push(d2);
    if (r.length > 0 && h.length > 0) {
      const d2 = {
        stmt: X,
        id: uk(),
        type: "divider",
        doc: pt(h)
      };
      r.push(pt(d2)), s.doc = r;
    }
    s.doc.forEach((d2) => this.docTranslator(s, d2, true));
  }
  getRootDocV2() {
    return this.docTranslator(
      { id: K, stmt: K },
      { id: K, stmt: K, doc: this.rootDoc },
      true
    ), { id: K, doc: this.rootDoc };
  }
  /**
   * Function called by parser when a node definition has been found.
   *
   * @param descr - description for the state. Can be a string or a list or strings
   * @param classes - class styles to apply to this state. Can be a string (1 style) or an array of styles. If it's just 1 class, convert it to an array of that 1 class.
   * @param styles - styles to apply to this state. Can be a string (1 style) or an array of styles. If it's just 1 style, convert it to an array of that 1 style.
   * @param textStyles - text styles to apply to this state. Can be a string (1 text test) or an array of text styles. If it's just 1 text style, convert it to an array of that 1 text style.
   */
  addState(e, s = tt, a = void 0, r = void 0, h = void 0, d2 = void 0, S = void 0, f = void 0) {
    const T = e?.trim();
    if (!this.currentDocument.states.has(T))
      F.info("Adding state ", T, r), this.currentDocument.states.set(T, {
        stmt: X,
        id: T,
        descriptions: [],
        type: s,
        doc: a,
        note: h,
        classes: [],
        styles: [],
        textStyles: []
      });
    else {
      const _ = this.currentDocument.states.get(T);
      if (!_)
        throw new Error(`State not found: ${T}`);
      _.doc || (_.doc = a), _.type || (_.type = s);
    }
    if (r && (F.info("Setting state description", T, r), (Array.isArray(r) ? r : [r]).forEach((m) => this.addDescription(T, m.trim()))), h) {
      const _ = this.currentDocument.states.get(T);
      if (!_)
        throw new Error(`State not found: ${T}`);
      _.note = h, _.note.text = Qr.sanitizeText(_.note.text, ft());
    }
    d2 && (F.info("Setting state classes", T, d2), (Array.isArray(d2) ? d2 : [d2]).forEach((m) => this.setCssClass(T, m.trim()))), S && (F.info("Setting state styles", T, S), (Array.isArray(S) ? S : [S]).forEach((m) => this.setStyle(T, m.trim()))), f && (F.info("Setting state styles", T, S), (Array.isArray(f) ? f : [f]).forEach((m) => this.setTextStyle(T, m.trim())));
  }
  clear(e) {
    this.nodes = [], this.edges = [], this.documents = { root: Ft() }, this.currentDocument = this.documents.root, this.startEndCount = 0, this.classes = Pt(), e || (this.links = /* @__PURE__ */ new Map(), By());
  }
  getState(e) {
    return this.currentDocument.states.get(e);
  }
  getStates() {
    return this.currentDocument.states;
  }
  logDocuments() {
    F.info("Documents = ", this.documents);
  }
  getRelations() {
    return this.currentDocument.relations;
  }
  /**
   * Adds a clickable link to a state.
   */
  addLink(e, s, a) {
    this.links.set(e, { url: s, tooltip: a }), F.warn("Adding link", e, s, a);
  }
  /**
   * Get all registered links.
   */
  getLinks() {
    return this.links;
  }
  /**
   * If the id is a start node ( [*] ), then return a new id constructed from
   * the start node name and the current start node count.
   * else return the given id
   */
  startIdIfNeeded(e = "") {
    return e === C.START_NODE ? (this.startEndCount++, `${C.START_TYPE}${this.startEndCount}`) : e;
  }
  /**
   * If the id is a start node ( [*] ), then return the start type ('start')
   * else return the given type
   */
  startTypeIfNeeded(e = "", s = tt) {
    return e === C.START_NODE ? C.START_TYPE : s;
  }
  /**
   * If the id is an end node ( [*] ), then return a new id constructed from
   * the end node name and the current start_end node count.
   * else return the given id
   */
  endIdIfNeeded(e = "") {
    return e === C.END_NODE ? (this.startEndCount++, `${C.END_TYPE}${this.startEndCount}`) : e;
  }
  /**
   * If the id is an end node ( [*] ), then return the end type
   * else return the given type
   *
   */
  endTypeIfNeeded(e = "", s = tt) {
    return e === C.END_NODE ? C.END_TYPE : s;
  }
  addRelationObjs(e, s, a = "") {
    const r = this.startIdIfNeeded(e.id.trim()), h = this.startTypeIfNeeded(e.id.trim(), e.type), d2 = this.startIdIfNeeded(s.id.trim()), S = this.startTypeIfNeeded(s.id.trim(), s.type);
    this.addState(
      r,
      h,
      e.doc,
      e.description,
      e.note,
      e.classes,
      e.styles,
      e.textStyles
    ), this.addState(
      d2,
      S,
      s.doc,
      s.description,
      s.note,
      s.classes,
      s.styles,
      s.textStyles
    ), this.currentDocument.relations.push({
      id1: r,
      id2: d2,
      relationTitle: Qr.sanitizeText(a, ft())
    });
  }
  /**
   * Add a relation between two items.  The items may be full objects or just the string id of a state.
   */
  addRelation(e, s, a) {
    if (typeof e == "object" && typeof s == "object")
      this.addRelationObjs(e, s, a);
    else if (typeof e == "string" && typeof s == "string") {
      const r = this.startIdIfNeeded(e.trim()), h = this.startTypeIfNeeded(e), d2 = this.endIdIfNeeded(s.trim()), S = this.endTypeIfNeeded(s);
      this.addState(r, h), this.addState(d2, S), this.currentDocument.relations.push({
        id1: r,
        id2: d2,
        relationTitle: a ? Qr.sanitizeText(a, ft()) : void 0
      });
    }
  }
  addDescription(e, s) {
    const a = this.currentDocument.states.get(e), r = s.startsWith(":") ? s.replace(":", "").trim() : s;
    a?.descriptions?.push(Qr.sanitizeText(r, ft()));
  }
  cleanupLabel(e) {
    return e.startsWith(":") ? e.slice(2).trim() : e.trim();
  }
  getDividerId() {
    return this.dividerCnt++, `divider-id-${this.dividerCnt}`;
  }
  /**
   * Called when the parser comes across a (style) class definition
   * @example classDef my-style fill:#f96;
   *
   * @param id - the id of this (style) class
   * @param styleAttributes - the string with 1 or more style attributes (each separated by a comma)
   */
  addStyleClass(e, s = "") {
    this.classes.has(e) || this.classes.set(e, { id: e, styles: [], textStyles: [] });
    const a = this.classes.get(e);
    s && a && s.split(C.STYLECLASS_SEP).forEach((r) => {
      const h = r.replace(/([^;]*);/, "$1").trim();
      if (RegExp(C.COLOR_KEYWORD).exec(r)) {
        const S = h.replace(C.FILL_KEYWORD, C.BG_FILL).replace(C.COLOR_KEYWORD, C.FILL_KEYWORD);
        a.textStyles.push(S);
      }
      a.styles.push(h);
    });
  }
  getClasses() {
    return this.classes;
  }
  /**
   * Add a (style) class or css class to a state with the given id.
   * If the state isn't already in the list of known states, add it.
   * Might be called by parser when a style class or CSS class should be applied to a state
   *
   * @param itemIds - The id or a list of ids of the item(s) to apply the css class to
   * @param cssClassName - CSS class name
   */
  setCssClass(e, s) {
    e.split(",").forEach((a) => {
      let r = this.getState(a);
      if (!r) {
        const h = a.trim();
        this.addState(h), r = this.getState(h);
      }
      r?.classes?.push(s);
    });
  }
  /**
   * Add a style to a state with the given id.
   * @example style stateId fill:#f9f,stroke:#333,stroke-width:4px
   *   where 'style' is the keyword
   *   stateId is the id of a state
   *   the rest of the string is the styleText (all of the attributes to be applied to the state)
   *
   * @param itemId - The id of item to apply the style to
   * @param styleText - the text of the attributes for the style
   */
  setStyle(e, s) {
    this.getState(e)?.styles?.push(s);
  }
  /**
   * Add a text style to a state with the given id
   *
   * @param itemId - The id of item to apply the css class to
   * @param cssClassName - CSS class name
   */
  setTextStyle(e, s) {
    this.getState(e)?.textStyles?.push(s);
  }
  /**
   * Finds the direction statement in the root document.
   * @returns the direction statement if present
   */
  getDirectionStatement() {
    return this.rootDoc.find((e) => e.stmt === Ot);
  }
  getDirection() {
    return this.getDirectionStatement()?.value ?? de;
  }
  setDirection(e) {
    const s = this.getDirectionStatement();
    s ? s.value = e : this.rootDoc.unshift({ stmt: Ot, value: e });
  }
  trimColon(e) {
    return e.startsWith(":") ? e.slice(1).trim() : e.trim();
  }
  getData() {
    const e = ft();
    return {
      nodes: this.nodes,
      edges: this.edges,
      other: {},
      config: e,
      direction: Kt(this.getRootDocV2())
    };
  }
  getConfig() {
    return ft().state;
  }
}, p(j, "StateDB"), j.relationType = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
}, j), Pe = /* @__PURE__ */ p((t) => `
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor || t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor || t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground || t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg || t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder || t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground || t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`, "getStyles"), Ue = Pe;
export {
  Be as B,
  Me as M,
  Ue as U,
  Ve as V
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstREk1NU1CWjUtQjFKdXluVHUtRHY2ZVlNN0suanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbWVybWFpZC1zdHJpbmcvZGlzdC9jaHVuay1ESTU1TUJaNS1CMUp1eW5UdS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnIGFzIHRlIH0gZnJvbSBcIi4vY2h1bmstNTVJQUNFQjYtOUZkb0JmZ24uanNcIjtcbmltcG9ydCB7IHMgYXMgZWUgfSBmcm9tIFwiLi9jaHVuay1RTjMzUE5ITC1DdF82ak1tMi5qc1wiO1xuaW1wb3J0IHsgXyBhcyB1LCBsIGFzIGIsIGMgYXMgdywgciBhcyBzZSwgdSBhcyBpZSwgYSBhcyByZSwgYiBhcyBhZSwgZyBhcyBuZSwgcyBhcyBvZSwgcCBhcyBsZSwgcSBhcyBjZSwgVCBhcyBoZSwgayBhcyBVLCB5IGFzIHVlIH0gZnJvbSBcIi4vZW50cnktQjJWWC1reGEuanNcIjtcbnZhciB2dCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHQgPSAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbihZLCBvLCBjLCBuKSB7XG4gICAgZm9yIChjID0gYyB8fCB7fSwgbiA9IFkubGVuZ3RoOyBuLS07IGNbWVtuXV0gPSBvKSA7XG4gICAgcmV0dXJuIGM7XG4gIH0sIFwib1wiKSwgZSA9IFsxLCAyXSwgcyA9IFsxLCAzXSwgYSA9IFsxLCA0XSwgciA9IFsyLCA0XSwgaCA9IFsxLCA5XSwgZCA9IFsxLCAxMV0sIFMgPSBbMSwgMTZdLCBmID0gWzEsIDE3XSwgVCA9IFsxLCAxOF0sIF8gPSBbMSwgMTldLCBtID0gWzEsIDMzXSwgQSA9IFsxLCAyMF0sIHYgPSBbMSwgMjFdLCBwID0gWzEsIDIyXSwgayA9IFsxLCAyM10sIFIgPSBbMSwgMjRdLCBMID0gWzEsIDI2XSwgJCA9IFsxLCAyN10sIEkgPSBbMSwgMjhdLCBQID0gWzEsIDI5XSwgc3QgPSBbMSwgMzBdLCBpdCA9IFsxLCAzMV0sIHJ0ID0gWzEsIDMyXSwgYXQgPSBbMSwgMzVdLCBudCA9IFsxLCAzNl0sIG90ID0gWzEsIDM3XSwgbHQgPSBbMSwgMzhdLCBIID0gWzEsIDM0XSwgeSA9IFsxLCA0LCA1LCAxNiwgMTcsIDE5LCAyMSwgMjIsIDI0LCAyNSwgMjYsIDI3LCAyOCwgMjksIDMzLCAzNSwgMzcsIDM4LCA0MSwgNDUsIDQ4LCA1MSwgNTIsIDUzLCA1NCwgNTddLCBjdCA9IFsxLCA0LCA1LCAxNCwgMTUsIDE2LCAxNywgMTksIDIxLCAyMiwgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzMsIDM1LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQ1LCA0OCwgNTEsIDUyLCA1MywgNTQsIDU3XSwgeHQgPSBbNCwgNSwgMTYsIDE3LCAxOSwgMjEsIDIyLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMywgMzUsIDM3LCAzOCwgNDEsIDQ1LCA0OCwgNTEsIDUyLCA1MywgNTQsIDU3XSwgZ3QgPSB7XG4gICAgdHJhY2U6IC8qIEBfX1BVUkVfXyAqLyB1KGZ1bmN0aW9uKCkge1xuICAgIH0sIFwidHJhY2VcIiksXG4gICAgeXk6IHt9LFxuICAgIHN5bWJvbHNfOiB7IGVycm9yOiAyLCBzdGFydDogMywgU1BBQ0U6IDQsIE5MOiA1LCBTRDogNiwgZG9jdW1lbnQ6IDcsIGxpbmU6IDgsIHN0YXRlbWVudDogOSwgY2xhc3NEZWZTdGF0ZW1lbnQ6IDEwLCBzdHlsZVN0YXRlbWVudDogMTEsIGNzc0NsYXNzU3RhdGVtZW50OiAxMiwgaWRTdGF0ZW1lbnQ6IDEzLCBERVNDUjogMTQsIFwiLS0+XCI6IDE1LCBISURFX0VNUFRZOiAxNiwgc2NhbGU6IDE3LCBXSURUSDogMTgsIENPTVBPU0lUX1NUQVRFOiAxOSwgU1RSVUNUX1NUQVJUOiAyMCwgU1RSVUNUX1NUT1A6IDIxLCBTVEFURV9ERVNDUjogMjIsIEFTOiAyMywgSUQ6IDI0LCBGT1JLOiAyNSwgSk9JTjogMjYsIENIT0lDRTogMjcsIENPTkNVUlJFTlQ6IDI4LCBub3RlOiAyOSwgbm90ZVBvc2l0aW9uOiAzMCwgTk9URV9URVhUOiAzMSwgZGlyZWN0aW9uOiAzMiwgYWNjX3RpdGxlOiAzMywgYWNjX3RpdGxlX3ZhbHVlOiAzNCwgYWNjX2Rlc2NyOiAzNSwgYWNjX2Rlc2NyX3ZhbHVlOiAzNiwgYWNjX2Rlc2NyX211bHRpbGluZV92YWx1ZTogMzcsIENMSUNLOiAzOCwgU1RSSU5HOiAzOSwgSFJFRjogNDAsIGNsYXNzRGVmOiA0MSwgQ0xBU1NERUZfSUQ6IDQyLCBDTEFTU0RFRl9TVFlMRU9QVFM6IDQzLCBERUZBVUxUOiA0NCwgc3R5bGU6IDQ1LCBTVFlMRV9JRFM6IDQ2LCBTVFlMRURFRl9TVFlMRU9QVFM6IDQ3LCBjbGFzczogNDgsIENMQVNTRU5USVRZX0lEUzogNDksIFNUWUxFQ0xBU1M6IDUwLCBkaXJlY3Rpb25fdGI6IDUxLCBkaXJlY3Rpb25fYnQ6IDUyLCBkaXJlY3Rpb25fcmw6IDUzLCBkaXJlY3Rpb25fbHI6IDU0LCBlb2w6IDU1LCBcIjtcIjogNTYsIEVER0VfU1RBVEU6IDU3LCBTVFlMRV9TRVBBUkFUT1I6IDU4LCBsZWZ0X29mOiA1OSwgcmlnaHRfb2Y6IDYwLCAkYWNjZXB0OiAwLCAkZW5kOiAxIH0sXG4gICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDQ6IFwiU1BBQ0VcIiwgNTogXCJOTFwiLCA2OiBcIlNEXCIsIDE0OiBcIkRFU0NSXCIsIDE1OiBcIi0tPlwiLCAxNjogXCJISURFX0VNUFRZXCIsIDE3OiBcInNjYWxlXCIsIDE4OiBcIldJRFRIXCIsIDE5OiBcIkNPTVBPU0lUX1NUQVRFXCIsIDIwOiBcIlNUUlVDVF9TVEFSVFwiLCAyMTogXCJTVFJVQ1RfU1RPUFwiLCAyMjogXCJTVEFURV9ERVNDUlwiLCAyMzogXCJBU1wiLCAyNDogXCJJRFwiLCAyNTogXCJGT1JLXCIsIDI2OiBcIkpPSU5cIiwgMjc6IFwiQ0hPSUNFXCIsIDI4OiBcIkNPTkNVUlJFTlRcIiwgMjk6IFwibm90ZVwiLCAzMTogXCJOT1RFX1RFWFRcIiwgMzM6IFwiYWNjX3RpdGxlXCIsIDM0OiBcImFjY190aXRsZV92YWx1ZVwiLCAzNTogXCJhY2NfZGVzY3JcIiwgMzY6IFwiYWNjX2Rlc2NyX3ZhbHVlXCIsIDM3OiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIiwgMzg6IFwiQ0xJQ0tcIiwgMzk6IFwiU1RSSU5HXCIsIDQwOiBcIkhSRUZcIiwgNDE6IFwiY2xhc3NEZWZcIiwgNDI6IFwiQ0xBU1NERUZfSURcIiwgNDM6IFwiQ0xBU1NERUZfU1RZTEVPUFRTXCIsIDQ0OiBcIkRFRkFVTFRcIiwgNDU6IFwic3R5bGVcIiwgNDY6IFwiU1RZTEVfSURTXCIsIDQ3OiBcIlNUWUxFREVGX1NUWUxFT1BUU1wiLCA0ODogXCJjbGFzc1wiLCA0OTogXCJDTEFTU0VOVElUWV9JRFNcIiwgNTA6IFwiU1RZTEVDTEFTU1wiLCA1MTogXCJkaXJlY3Rpb25fdGJcIiwgNTI6IFwiZGlyZWN0aW9uX2J0XCIsIDUzOiBcImRpcmVjdGlvbl9ybFwiLCA1NDogXCJkaXJlY3Rpb25fbHJcIiwgNTY6IFwiO1wiLCA1NzogXCJFREdFX1NUQVRFXCIsIDU4OiBcIlNUWUxFX1NFUEFSQVRPUlwiLCA1OTogXCJsZWZ0X29mXCIsIDYwOiBcInJpZ2h0X29mXCIgfSxcbiAgICBwcm9kdWN0aW9uc186IFswLCBbMywgMl0sIFszLCAyXSwgWzMsIDJdLCBbNywgMF0sIFs3LCAyXSwgWzgsIDJdLCBbOCwgMV0sIFs4LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMl0sIFs5LCAzXSwgWzksIDRdLCBbOSwgMV0sIFs5LCAyXSwgWzksIDFdLCBbOSwgNF0sIFs5LCAzXSwgWzksIDZdLCBbOSwgMV0sIFs5LCAxXSwgWzksIDFdLCBbOSwgMV0sIFs5LCA0XSwgWzksIDRdLCBbOSwgMV0sIFs5LCAyXSwgWzksIDJdLCBbOSwgMV0sIFs5LCA1XSwgWzksIDVdLCBbMTAsIDNdLCBbMTAsIDNdLCBbMTEsIDNdLCBbMTIsIDNdLCBbMzIsIDFdLCBbMzIsIDFdLCBbMzIsIDFdLCBbMzIsIDFdLCBbNTUsIDFdLCBbNTUsIDFdLCBbMTMsIDFdLCBbMTMsIDFdLCBbMTMsIDNdLCBbMTMsIDNdLCBbMzAsIDFdLCBbMzAsIDFdXSxcbiAgICBwZXJmb3JtQWN0aW9uOiAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbihvLCBjLCBuLCBnLCBFLCBpLCBKKSB7XG4gICAgICB2YXIgbCA9IGkubGVuZ3RoIC0gMTtcbiAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIGcuc2V0Um9vdERvYyhpW2xdKSwgaVtsXTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuJCA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaVtsXSAhPSBcIm5sXCIgJiYgKGlbbCAtIDFdLnB1c2goaVtsXSksIHRoaXMuJCA9IGlbbCAtIDFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdGhpcy4kID0gaVtsXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIHRoaXMuJCA9IFwibmxcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICB0aGlzLiQgPSBpW2xdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIGNvbnN0IHEgPSBpW2wgLSAxXTtcbiAgICAgICAgICBxLmRlc2NyaXB0aW9uID0gZy50cmltQ29sb24oaVtsXSksIHRoaXMuJCA9IHE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInJlbGF0aW9uXCIsIHN0YXRlMTogaVtsIC0gMl0sIHN0YXRlMjogaVtsXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIGNvbnN0IFR0ID0gZy50cmltQ29sb24oaVtsXSk7XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInJlbGF0aW9uXCIsIHN0YXRlMTogaVtsIC0gM10sIHN0YXRlMjogaVtsIC0gMV0sIGRlc2NyaXB0aW9uOiBUdCB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgIHRoaXMuJCA9IHsgc3RtdDogXCJzdGF0ZVwiLCBpZDogaVtsIC0gM10sIHR5cGU6IFwiZGVmYXVsdFwiLCBkZXNjcmlwdGlvbjogXCJcIiwgZG9jOiBpW2wgLSAxXSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgIHZhciBCID0gaVtsXSwgVyA9IGlbbCAtIDJdLnRyaW0oKTtcbiAgICAgICAgICBpZiAoaVtsXS5tYXRjaChcIjpcIikpIHtcbiAgICAgICAgICAgIHZhciB1dCA9IGlbbF0uc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgQiA9IHV0WzBdLCBXID0gW1csIHV0WzFdXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInN0YXRlXCIsIGlkOiBCLCB0eXBlOiBcImRlZmF1bHRcIiwgZGVzY3JpcHRpb246IFcgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwic3RhdGVcIiwgaWQ6IGlbbCAtIDNdLCB0eXBlOiBcImRlZmF1bHRcIiwgZGVzY3JpcHRpb246IGlbbCAtIDVdLCBkb2M6IGlbbCAtIDFdIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInN0YXRlXCIsIGlkOiBpW2xdLCB0eXBlOiBcImZvcmtcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIHRoaXMuJCA9IHsgc3RtdDogXCJzdGF0ZVwiLCBpZDogaVtsXSwgdHlwZTogXCJqb2luXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwic3RhdGVcIiwgaWQ6IGlbbF0sIHR5cGU6IFwiY2hvaWNlXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwic3RhdGVcIiwgaWQ6IGcuZ2V0RGl2aWRlcklkKCksIHR5cGU6IFwiZGl2aWRlclwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgdGhpcy4kID0geyBzdG10OiBcInN0YXRlXCIsIGlkOiBpW2wgLSAxXS50cmltKCksIG5vdGU6IHsgcG9zaXRpb246IGlbbCAtIDJdLnRyaW0oKSwgdGV4dDogaVtsXS50cmltKCkgfSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgIHRoaXMuJCA9IGlbbF0udHJpbSgpLCBnLnNldEFjY1RpdGxlKHRoaXMuJCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzA6XG4gICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgdGhpcy4kID0gaVtsXS50cmltKCksIGcuc2V0QWNjRGVzY3JpcHRpb24odGhpcy4kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICB0aGlzLiQgPSB7XG4gICAgICAgICAgICBzdG10OiBcImNsaWNrXCIsXG4gICAgICAgICAgICBpZDogaVtsIC0gM10sXG4gICAgICAgICAgICB1cmw6IGlbbCAtIDJdLFxuICAgICAgICAgICAgdG9vbHRpcDogaVtsIC0gMV1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIHRoaXMuJCA9IHtcbiAgICAgICAgICAgIHN0bXQ6IFwiY2xpY2tcIixcbiAgICAgICAgICAgIGlkOiBpW2wgLSAzXSxcbiAgICAgICAgICAgIHVybDogaVtsIC0gMV0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIlwiXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwiY2xhc3NEZWZcIiwgaWQ6IGlbbCAtIDFdLnRyaW0oKSwgY2xhc3NlczogaVtsXS50cmltKCkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwic3R5bGVcIiwgaWQ6IGlbbCAtIDFdLnRyaW0oKSwgc3R5bGVDbGFzczogaVtsXS50cmltKCkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwiYXBwbHlDbGFzc1wiLCBpZDogaVtsIC0gMV0udHJpbSgpLCBzdHlsZUNsYXNzOiBpW2xdLnRyaW0oKSB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgIGcuc2V0RGlyZWN0aW9uKFwiVEJcIiksIHRoaXMuJCA9IHsgc3RtdDogXCJkaXJcIiwgdmFsdWU6IFwiVEJcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIGcuc2V0RGlyZWN0aW9uKFwiQlRcIiksIHRoaXMuJCA9IHsgc3RtdDogXCJkaXJcIiwgdmFsdWU6IFwiQlRcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIGcuc2V0RGlyZWN0aW9uKFwiUkxcIiksIHRoaXMuJCA9IHsgc3RtdDogXCJkaXJcIiwgdmFsdWU6IFwiUkxcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgIGcuc2V0RGlyZWN0aW9uKFwiTFJcIiksIHRoaXMuJCA9IHsgc3RtdDogXCJkaXJcIiwgdmFsdWU6IFwiTFJcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ0OlxuICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgIHRoaXMuJCA9IHsgc3RtdDogXCJzdGF0ZVwiLCBpZDogaVtsXS50cmltKCksIHR5cGU6IFwiZGVmYXVsdFwiLCBkZXNjcmlwdGlvbjogXCJcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgIHRoaXMuJCA9IHsgc3RtdDogXCJzdGF0ZVwiLCBpZDogaVtsIC0gMl0udHJpbSgpLCBjbGFzc2VzOiBbaVtsXS50cmltKCldLCB0eXBlOiBcImRlZmF1bHRcIiwgZGVzY3JpcHRpb246IFwiXCIgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICB0aGlzLiQgPSB7IHN0bXQ6IFwic3RhdGVcIiwgaWQ6IGlbbCAtIDJdLnRyaW0oKSwgY2xhc3NlczogW2lbbF0udHJpbSgpXSwgdHlwZTogXCJkZWZhdWx0XCIsIGRlc2NyaXB0aW9uOiBcIlwiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSwgXCJhbm9ueW1vdXNcIiksXG4gICAgdGFibGU6IFt7IDM6IDEsIDQ6IGUsIDU6IHMsIDY6IGEgfSwgeyAxOiBbM10gfSwgeyAzOiA1LCA0OiBlLCA1OiBzLCA2OiBhIH0sIHsgMzogNiwgNDogZSwgNTogcywgNjogYSB9LCB0KFsxLCA0LCA1LCAxNiwgMTcsIDE5LCAyMiwgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzMsIDM1LCAzNywgMzgsIDQxLCA0NSwgNDgsIDUxLCA1MiwgNTMsIDU0LCA1N10sIHIsIHsgNzogNyB9KSwgeyAxOiBbMiwgMV0gfSwgeyAxOiBbMiwgMl0gfSwgeyAxOiBbMiwgM10sIDQ6IGgsIDU6IGQsIDg6IDgsIDk6IDEwLCAxMDogMTIsIDExOiAxMywgMTI6IDE0LCAxMzogMTUsIDE2OiBTLCAxNzogZiwgMTk6IFQsIDIyOiBfLCAyNDogbSwgMjU6IEEsIDI2OiB2LCAyNzogcCwgMjg6IGssIDI5OiBSLCAzMjogMjUsIDMzOiBMLCAzNTogJCwgMzc6IEksIDM4OiBQLCA0MTogc3QsIDQ1OiBpdCwgNDg6IHJ0LCA1MTogYXQsIDUyOiBudCwgNTM6IG90LCA1NDogbHQsIDU3OiBIIH0sIHQoeSwgWzIsIDVdKSwgeyA5OiAzOSwgMTA6IDEyLCAxMTogMTMsIDEyOiAxNCwgMTM6IDE1LCAxNjogUywgMTc6IGYsIDE5OiBULCAyMjogXywgMjQ6IG0sIDI1OiBBLCAyNjogdiwgMjc6IHAsIDI4OiBrLCAyOTogUiwgMzI6IDI1LCAzMzogTCwgMzU6ICQsIDM3OiBJLCAzODogUCwgNDE6IHN0LCA0NTogaXQsIDQ4OiBydCwgNTE6IGF0LCA1MjogbnQsIDUzOiBvdCwgNTQ6IGx0LCA1NzogSCB9LCB0KHksIFsyLCA3XSksIHQoeSwgWzIsIDhdKSwgdCh5LCBbMiwgOV0pLCB0KHksIFsyLCAxMF0pLCB0KHksIFsyLCAxMV0pLCB0KHksIFsyLCAxMl0sIHsgMTQ6IFsxLCA0MF0sIDE1OiBbMSwgNDFdIH0pLCB0KHksIFsyLCAxNl0pLCB7IDE4OiBbMSwgNDJdIH0sIHQoeSwgWzIsIDE4XSwgeyAyMDogWzEsIDQzXSB9KSwgeyAyMzogWzEsIDQ0XSB9LCB0KHksIFsyLCAyMl0pLCB0KHksIFsyLCAyM10pLCB0KHksIFsyLCAyNF0pLCB0KHksIFsyLCAyNV0pLCB7IDMwOiA0NSwgMzE6IFsxLCA0Nl0sIDU5OiBbMSwgNDddLCA2MDogWzEsIDQ4XSB9LCB0KHksIFsyLCAyOF0pLCB7IDM0OiBbMSwgNDldIH0sIHsgMzY6IFsxLCA1MF0gfSwgdCh5LCBbMiwgMzFdKSwgeyAxMzogNTEsIDI0OiBtLCA1NzogSCB9LCB7IDQyOiBbMSwgNTJdLCA0NDogWzEsIDUzXSB9LCB7IDQ2OiBbMSwgNTRdIH0sIHsgNDk6IFsxLCA1NV0gfSwgdChjdCwgWzIsIDQ0XSwgeyA1ODogWzEsIDU2XSB9KSwgdChjdCwgWzIsIDQ1XSwgeyA1ODogWzEsIDU3XSB9KSwgdCh5LCBbMiwgMzhdKSwgdCh5LCBbMiwgMzldKSwgdCh5LCBbMiwgNDBdKSwgdCh5LCBbMiwgNDFdKSwgdCh5LCBbMiwgNl0pLCB0KHksIFsyLCAxM10pLCB7IDEzOiA1OCwgMjQ6IG0sIDU3OiBIIH0sIHQoeSwgWzIsIDE3XSksIHQoeHQsIHIsIHsgNzogNTkgfSksIHsgMjQ6IFsxLCA2MF0gfSwgeyAyNDogWzEsIDYxXSB9LCB7IDIzOiBbMSwgNjJdIH0sIHsgMjQ6IFsyLCA0OF0gfSwgeyAyNDogWzIsIDQ5XSB9LCB0KHksIFsyLCAyOV0pLCB0KHksIFsyLCAzMF0pLCB7IDM5OiBbMSwgNjNdLCA0MDogWzEsIDY0XSB9LCB7IDQzOiBbMSwgNjVdIH0sIHsgNDM6IFsxLCA2Nl0gfSwgeyA0NzogWzEsIDY3XSB9LCB7IDUwOiBbMSwgNjhdIH0sIHsgMjQ6IFsxLCA2OV0gfSwgeyAyNDogWzEsIDcwXSB9LCB0KHksIFsyLCAxNF0sIHsgMTQ6IFsxLCA3MV0gfSksIHsgNDogaCwgNTogZCwgODogOCwgOTogMTAsIDEwOiAxMiwgMTE6IDEzLCAxMjogMTQsIDEzOiAxNSwgMTY6IFMsIDE3OiBmLCAxOTogVCwgMjE6IFsxLCA3Ml0sIDIyOiBfLCAyNDogbSwgMjU6IEEsIDI2OiB2LCAyNzogcCwgMjg6IGssIDI5OiBSLCAzMjogMjUsIDMzOiBMLCAzNTogJCwgMzc6IEksIDM4OiBQLCA0MTogc3QsIDQ1OiBpdCwgNDg6IHJ0LCA1MTogYXQsIDUyOiBudCwgNTM6IG90LCA1NDogbHQsIDU3OiBIIH0sIHQoeSwgWzIsIDIwXSwgeyAyMDogWzEsIDczXSB9KSwgeyAzMTogWzEsIDc0XSB9LCB7IDI0OiBbMSwgNzVdIH0sIHsgMzk6IFsxLCA3Nl0gfSwgeyAzOTogWzEsIDc3XSB9LCB0KHksIFsyLCAzNF0pLCB0KHksIFsyLCAzNV0pLCB0KHksIFsyLCAzNl0pLCB0KHksIFsyLCAzN10pLCB0KGN0LCBbMiwgNDZdKSwgdChjdCwgWzIsIDQ3XSksIHQoeSwgWzIsIDE1XSksIHQoeSwgWzIsIDE5XSksIHQoeHQsIHIsIHsgNzogNzggfSksIHQoeSwgWzIsIDI2XSksIHQoeSwgWzIsIDI3XSksIHsgNTogWzEsIDc5XSB9LCB7IDU6IFsxLCA4MF0gfSwgeyA0OiBoLCA1OiBkLCA4OiA4LCA5OiAxMCwgMTA6IDEyLCAxMTogMTMsIDEyOiAxNCwgMTM6IDE1LCAxNjogUywgMTc6IGYsIDE5OiBULCAyMTogWzEsIDgxXSwgMjI6IF8sIDI0OiBtLCAyNTogQSwgMjY6IHYsIDI3OiBwLCAyODogaywgMjk6IFIsIDMyOiAyNSwgMzM6IEwsIDM1OiAkLCAzNzogSSwgMzg6IFAsIDQxOiBzdCwgNDU6IGl0LCA0ODogcnQsIDUxOiBhdCwgNTI6IG50LCA1Mzogb3QsIDU0OiBsdCwgNTc6IEggfSwgdCh5LCBbMiwgMzJdKSwgdCh5LCBbMiwgMzNdKSwgdCh5LCBbMiwgMjFdKV0sXG4gICAgZGVmYXVsdEFjdGlvbnM6IHsgNTogWzIsIDFdLCA2OiBbMiwgMl0sIDQ3OiBbMiwgNDhdLCA0ODogWzIsIDQ5XSB9LFxuICAgIHBhcnNlRXJyb3I6IC8qIEBfX1BVUkVfXyAqLyB1KGZ1bmN0aW9uKG8sIGMpIHtcbiAgICAgIGlmIChjLnJlY292ZXJhYmxlKVxuICAgICAgICB0aGlzLnRyYWNlKG8pO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBuID0gbmV3IEVycm9yKG8pO1xuICAgICAgICB0aHJvdyBuLmhhc2ggPSBjLCBuO1xuICAgICAgfVxuICAgIH0sIFwicGFyc2VFcnJvclwiKSxcbiAgICBwYXJzZTogLyogQF9fUFVSRV9fICovIHUoZnVuY3Rpb24obykge1xuICAgICAgdmFyIGMgPSB0aGlzLCBuID0gWzBdLCBnID0gW10sIEUgPSBbbnVsbF0sIGkgPSBbXSwgSiA9IHRoaXMudGFibGUsIGwgPSBcIlwiLCBCID0gMCwgVyA9IDAsIHV0ID0gMiwgcSA9IDEsIFR0ID0gaS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIEQgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpLCBWID0geyB5eToge30gfTtcbiAgICAgIGZvciAodmFyIEV0IGluIHRoaXMueXkpXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBFdCkgJiYgKFYueXlbRXRdID0gdGhpcy55eVtFdF0pO1xuICAgICAgRC5zZXRJbnB1dChvLCBWLnl5KSwgVi55eS5sZXhlciA9IEQsIFYueXkucGFyc2VyID0gdGhpcywgdHlwZW9mIEQueXlsbG9jID4gXCJ1XCIgJiYgKEQueXlsbG9jID0ge30pO1xuICAgICAgdmFyIF90ID0gRC55eWxsb2M7XG4gICAgICBpLnB1c2goX3QpO1xuICAgICAgdmFyIFF0ID0gRC5vcHRpb25zICYmIEQub3B0aW9ucy5yYW5nZXM7XG4gICAgICB0eXBlb2YgVi55eS5wYXJzZUVycm9yID09IFwiZnVuY3Rpb25cIiA/IHRoaXMucGFyc2VFcnJvciA9IFYueXkucGFyc2VFcnJvciA6IHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgZnVuY3Rpb24gWnQoTykge1xuICAgICAgICBuLmxlbmd0aCA9IG4ubGVuZ3RoIC0gMiAqIE8sIEUubGVuZ3RoID0gRS5sZW5ndGggLSBPLCBpLmxlbmd0aCA9IGkubGVuZ3RoIC0gTztcbiAgICAgIH1cbiAgICAgIHUoWnQsIFwicG9wU3RhY2tcIik7XG4gICAgICBmdW5jdGlvbiBMdCgpIHtcbiAgICAgICAgdmFyIE87XG4gICAgICAgIHJldHVybiBPID0gZy5wb3AoKSB8fCBELmxleCgpIHx8IHEsIHR5cGVvZiBPICE9IFwibnVtYmVyXCIgJiYgKE8gaW5zdGFuY2VvZiBBcnJheSAmJiAoZyA9IE8sIE8gPSBnLnBvcCgpKSwgTyA9IGMuc3ltYm9sc19bT10gfHwgTyksIE87XG4gICAgICB9XG4gICAgICB1KEx0LCBcImxleFwiKTtcbiAgICAgIGZvciAodmFyIHgsIE0sIE4sIG10LCB6ID0ge30sIGR0LCBGLCBJdCwgZnQ7IDsgKSB7XG4gICAgICAgIGlmIChNID0gbltuLmxlbmd0aCAtIDFdLCB0aGlzLmRlZmF1bHRBY3Rpb25zW01dID8gTiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbTV0gOiAoKHggPT09IG51bGwgfHwgdHlwZW9mIHggPiBcInVcIikgJiYgKHggPSBMdCgpKSwgTiA9IEpbTV0gJiYgSltNXVt4XSksIHR5cGVvZiBOID4gXCJ1XCIgfHwgIU4ubGVuZ3RoIHx8ICFOWzBdKSB7XG4gICAgICAgICAgdmFyIGJ0ID0gXCJcIjtcbiAgICAgICAgICBmdCA9IFtdO1xuICAgICAgICAgIGZvciAoZHQgaW4gSltNXSlcbiAgICAgICAgICAgIHRoaXMudGVybWluYWxzX1tkdF0gJiYgZHQgPiB1dCAmJiBmdC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW2R0XSArIFwiJ1wiKTtcbiAgICAgICAgICBELnNob3dQb3NpdGlvbiA/IGJ0ID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKEIgKyAxKSArIGA6XG5gICsgRC5zaG93UG9zaXRpb24oKSArIGBcbkV4cGVjdGluZyBgICsgZnQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3hdIHx8IHgpICsgXCInXCIgOiBidCA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChCICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArICh4ID09IHEgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3hdIHx8IHgpICsgXCInXCIpLCB0aGlzLnBhcnNlRXJyb3IoYnQsIHtcbiAgICAgICAgICAgIHRleHQ6IEQubWF0Y2gsXG4gICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3hdIHx8IHgsXG4gICAgICAgICAgICBsaW5lOiBELnl5bGluZW5vLFxuICAgICAgICAgICAgbG9jOiBfdCxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBmdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgTi5sZW5ndGggPiAxKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIE0gKyBcIiwgdG9rZW46IFwiICsgeCk7XG4gICAgICAgIHN3aXRjaCAoTlswXSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIG4ucHVzaCh4KSwgRS5wdXNoKEQueXl0ZXh0KSwgaS5wdXNoKEQueXlsbG9jKSwgbi5wdXNoKE5bMV0pLCB4ID0gbnVsbCwgVyA9IEQueXlsZW5nLCBsID0gRC55eXRleHQsIEIgPSBELnl5bGluZW5vLCBfdCA9IEQueXlsbG9jO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKEYgPSB0aGlzLnByb2R1Y3Rpb25zX1tOWzFdXVsxXSwgei4kID0gRVtFLmxlbmd0aCAtIEZdLCB6Ll8kID0ge1xuICAgICAgICAgICAgICBmaXJzdF9saW5lOiBpW2kubGVuZ3RoIC0gKEYgfHwgMSldLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgIGxhc3RfbGluZTogaVtpLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBpW2kubGVuZ3RoIC0gKEYgfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGlbaS5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfSwgUXQgJiYgKHouXyQucmFuZ2UgPSBbXG4gICAgICAgICAgICAgIGlbaS5sZW5ndGggLSAoRiB8fCAxKV0ucmFuZ2VbMF0sXG4gICAgICAgICAgICAgIGlbaS5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgXSksIG10ID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KHosIFtcbiAgICAgICAgICAgICAgbCxcbiAgICAgICAgICAgICAgVyxcbiAgICAgICAgICAgICAgQixcbiAgICAgICAgICAgICAgVi55eSxcbiAgICAgICAgICAgICAgTlsxXSxcbiAgICAgICAgICAgICAgRSxcbiAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgXS5jb25jYXQoVHQpKSwgdHlwZW9mIG10IDwgXCJ1XCIpXG4gICAgICAgICAgICAgIHJldHVybiBtdDtcbiAgICAgICAgICAgIEYgJiYgKG4gPSBuLnNsaWNlKDAsIC0xICogRiAqIDIpLCBFID0gRS5zbGljZSgwLCAtMSAqIEYpLCBpID0gaS5zbGljZSgwLCAtMSAqIEYpKSwgbi5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW05bMV1dWzBdKSwgRS5wdXNoKHouJCksIGkucHVzaCh6Ll8kKSwgSXQgPSBKW25bbi5sZW5ndGggLSAyXV1bbltuLmxlbmd0aCAtIDFdXSwgbi5wdXNoKEl0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICEwO1xuICAgIH0sIFwicGFyc2VcIilcbiAgfSwgcXQgPSAvKiBAX19QVVJFX18gKi8gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBZID0ge1xuICAgICAgRU9GOiAxLFxuICAgICAgcGFyc2VFcnJvcjogLyogQF9fUFVSRV9fICovIHUoZnVuY3Rpb24oYywgbikge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpXG4gICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihjLCBuKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjKTtcbiAgICAgIH0sIFwicGFyc2VFcnJvclwiKSxcbiAgICAgIC8vIHJlc2V0cyB0aGUgbGV4ZXIsIHNldHMgbmV3IGlucHV0XG4gICAgICBzZXRJbnB1dDogLyogQF9fUFVSRV9fICovIHUoZnVuY3Rpb24obywgYykge1xuICAgICAgICByZXR1cm4gdGhpcy55eSA9IGMgfHwgdGhpcy55eSB8fCB7fSwgdGhpcy5faW5wdXQgPSBvLCB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gITEsIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDAsIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCIsIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbXCJJTklUSUFMXCJdLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAodGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF0pLCB0aGlzLm9mZnNldCA9IDAsIHRoaXM7XG4gICAgICB9LCBcInNldElucHV0XCIpLFxuICAgICAgLy8gY29uc3VtZXMgYW5kIHJldHVybnMgb25lIGNoYXIgZnJvbSB0aGUgaW5wdXRcbiAgICAgIGlucHV0OiAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gbywgdGhpcy55eWxlbmcrKywgdGhpcy5vZmZzZXQrKywgdGhpcy5tYXRjaCArPSBvLCB0aGlzLm1hdGNoZWQgKz0gbztcbiAgICAgICAgdmFyIGMgPSBvLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgcmV0dXJuIGMgPyAodGhpcy55eWxpbmVubysrLCB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKykgOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrLCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmIHRoaXMueXlsbG9jLnJhbmdlWzFdKyssIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSksIG87XG4gICAgICB9LCBcImlucHV0XCIpLFxuICAgICAgLy8gdW5zaGlmdHMgb25lIGNoYXIgKG9yIGEgc3RyaW5nKSBpbnRvIHRoZSBpbnB1dFxuICAgICAgdW5wdXQ6IC8qIEBfX1BVUkVfXyAqLyB1KGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgdmFyIGMgPSBvLmxlbmd0aCwgbiA9IG8uc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBvICsgdGhpcy5faW5wdXQsIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGMpLCB0aGlzLm9mZnNldCAtPSBjO1xuICAgICAgICB2YXIgZyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSksIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpLCBuLmxlbmd0aCAtIDEgJiYgKHRoaXMueXlsaW5lbm8gLT0gbi5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIEUgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgcmV0dXJuIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICBsYXN0X2NvbHVtbjogbiA/IChuLmxlbmd0aCA9PT0gZy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIGdbZy5sZW5ndGggLSBuLmxlbmd0aF0ubGVuZ3RoIC0gblswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBjXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW0VbMF0sIEVbMF0gKyB0aGlzLnl5bGVuZyAtIGNdKSwgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXM7XG4gICAgICB9LCBcInVucHV0XCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbiAgICAgIG1vcmU6IC8qIEBfX1BVUkVfXyAqLyB1KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9yZSA9ICEwLCB0aGlzO1xuICAgICAgfSwgXCJtb3JlXCIpLFxuICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgIHJlamVjdDogLyogQF9fUFVSRV9fICovIHUoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKVxuICAgICAgICAgIHRoaXMuX2JhY2t0cmFjayA9ICEwO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXG5gICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sIFwicmVqZWN0XCIpLFxuICAgICAgLy8gcmV0YWluIGZpcnN0IG4gY2hhcmFjdGVycyBvZiB0aGUgbWF0Y2hcbiAgICAgIGxlc3M6IC8qIEBfX1BVUkVfXyAqLyB1KGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG8pKTtcbiAgICAgIH0sIFwibGVzc1wiKSxcbiAgICAgIC8vIGRpc3BsYXlzIGFscmVhZHkgbWF0Y2hlZCBpbnB1dCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHBhc3RJbnB1dDogLyogQF9fUFVSRV9fICovIHUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKG8ubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyBvLnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwicGFzdElucHV0XCIpLFxuICAgICAgLy8gZGlzcGxheXMgdXBjb21pbmcgaW5wdXQsIGkuZS4gZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICB1cGNvbWluZ0lucHV0OiAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLm1hdGNoO1xuICAgICAgICByZXR1cm4gby5sZW5ndGggPCAyMCAmJiAobyArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBvLmxlbmd0aCkpLCAoby5zdWJzdHIoMCwgMjApICsgKG8ubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgIH0sIFwidXBjb21pbmdJbnB1dFwiKSxcbiAgICAgIC8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgIHNob3dQb3NpdGlvbjogLyogQF9fUFVSRV9fICovIHUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5wYXN0SW5wdXQoKSwgYyA9IG5ldyBBcnJheShvLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICByZXR1cm4gbyArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgYFxuYCArIGMgKyBcIl5cIjtcbiAgICAgIH0sIFwic2hvd1Bvc2l0aW9uXCIpLFxuICAgICAgLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG4gICAgICB0ZXN0X21hdGNoOiAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbihvLCBjKSB7XG4gICAgICAgIHZhciBuLCBnLCBFO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlciAmJiAoRSA9IHtcbiAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAoRS55eWxsb2MucmFuZ2UgPSB0aGlzLnl5bGxvYy5yYW5nZS5zbGljZSgwKSkpLCBnID0gb1swXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyksIGcgJiYgKHRoaXMueXlsaW5lbm8gKz0gZy5sZW5ndGgpLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgIGxhc3RfY29sdW1uOiBnID8gZ1tnLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGdbZy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG9bMF0ubGVuZ3RoXG4gICAgICAgIH0sIHRoaXMueXl0ZXh0ICs9IG9bMF0sIHRoaXMubWF0Y2ggKz0gb1swXSwgdGhpcy5tYXRjaGVzID0gbywgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ10pLCB0aGlzLl9tb3JlID0gITEsIHRoaXMuX2JhY2t0cmFjayA9ICExLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG9bMF0ubGVuZ3RoKSwgdGhpcy5tYXRjaGVkICs9IG9bMF0sIG4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBjLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pLCB0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQgJiYgKHRoaXMuZG9uZSA9ICExKSwgbilcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gRSlcbiAgICAgICAgICAgIHRoaXNbaV0gPSBFW2ldO1xuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9LCBcInRlc3RfbWF0Y2hcIiksXG4gICAgICAvLyByZXR1cm4gbmV4dCBtYXRjaCBpbiBpbnB1dFxuICAgICAgbmV4dDogLyogQF9fUFVSRV9fICovIHUoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICB0aGlzLl9pbnB1dCB8fCAodGhpcy5kb25lID0gITApO1xuICAgICAgICB2YXIgbywgYywgbiwgZztcbiAgICAgICAgdGhpcy5fbW9yZSB8fCAodGhpcy55eXRleHQgPSBcIlwiLCB0aGlzLm1hdGNoID0gXCJcIik7XG4gICAgICAgIGZvciAodmFyIEUgPSB0aGlzLl9jdXJyZW50UnVsZXMoKSwgaSA9IDA7IGkgPCBFLmxlbmd0aDsgaSsrKVxuICAgICAgICAgIGlmIChuID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tFW2ldXSksIG4gJiYgKCFjIHx8IG5bMF0ubGVuZ3RoID4gY1swXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBpZiAoYyA9IG4sIGcgPSBpLCB0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgIGlmIChvID0gdGhpcy50ZXN0X21hdGNoKG4sIEVbaV0pLCBvICE9PSAhMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgIGMgPSAhMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmZsZXgpXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGMgPyAobyA9IHRoaXMudGVzdF9tYXRjaChjLCBFW2ddKSwgbyAhPT0gITEgPyBvIDogITEpIDogdGhpcy5faW5wdXQgPT09IFwiXCIgPyB0aGlzLkVPRiA6IHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBgLiBVbnJlY29nbml6ZWQgdGV4dC5cbmAgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgIH0pO1xuICAgICAgfSwgXCJuZXh0XCIpLFxuICAgICAgLy8gcmV0dXJuIG5leHQgbWF0Y2ggdGhhdCBoYXMgYSB0b2tlblxuICAgICAgbGV4OiAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIGMgfHwgdGhpcy5sZXgoKTtcbiAgICAgIH0sIFwibGV4XCIpLFxuICAgICAgLy8gYWN0aXZhdGVzIGEgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSAocHVzaGVzIHRoZSBuZXcgbGV4ZXIgY29uZGl0aW9uIHN0YXRlIG9udG8gdGhlIGNvbmRpdGlvbiBzdGFjaylcbiAgICAgIGJlZ2luOiAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbihjKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChjKTtcbiAgICAgIH0sIFwiYmVnaW5cIiksXG4gICAgICAvLyBwb3AgdGhlIHByZXZpb3VzbHkgYWN0aXZlIGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvZmYgdGhlIGNvbmRpdGlvbiBzdGFja1xuICAgICAgcG9wU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyB1KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYyA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIGMgPiAwID8gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKSA6IHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICB9LCBcInBvcFN0YXRlXCIpLFxuICAgICAgLy8gcHJvZHVjZSB0aGUgbGV4ZXIgcnVsZSBzZXQgd2hpY2ggaXMgYWN0aXZlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGVcbiAgICAgIF9jdXJyZW50UnVsZXM6IC8qIEBfX1BVUkVfXyAqLyB1KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdID8gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXMgOiB0aGlzLmNvbmRpdGlvbnMuSU5JVElBTC5ydWxlcztcbiAgICAgIH0sIFwiX2N1cnJlbnRSdWxlc1wiKSxcbiAgICAgIC8vIHJldHVybiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGU7IHdoZW4gYW4gaW5kZXggYXJndW1lbnQgaXMgcHJvdmlkZWQgaXQgcHJvZHVjZXMgdGhlIE4tdGggcHJldmlvdXMgY29uZGl0aW9uIHN0YXRlLCBpZiBhdmFpbGFibGVcbiAgICAgIHRvcFN0YXRlOiAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBjID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnMoYyB8fCAwKSwgYyA+PSAwID8gdGhpcy5jb25kaXRpb25TdGFja1tjXSA6IFwiSU5JVElBTFwiO1xuICAgICAgfSwgXCJ0b3BTdGF0ZVwiKSxcbiAgICAgIC8vIGFsaWFzIGZvciBiZWdpbihjb25kaXRpb24pXG4gICAgICBwdXNoU3RhdGU6IC8qIEBfX1BVUkVfXyAqLyB1KGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgdGhpcy5iZWdpbihjKTtcbiAgICAgIH0sIFwicHVzaFN0YXRlXCIpLFxuICAgICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbiAgICAgIHN0YXRlU3RhY2tTaXplOiAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgfSwgXCJzdGF0ZVN0YWNrU2l6ZVwiKSxcbiAgICAgIG9wdGlvbnM6IHsgXCJjYXNlLWluc2Vuc2l0aXZlXCI6ICEwIH0sXG4gICAgICBwZXJmb3JtQWN0aW9uOiAvKiBAX19QVVJFX18gKi8gdShmdW5jdGlvbihjLCBuLCBnLCBFKSB7XG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAzODtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gNDA7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIDM5O1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiA0NDtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gNTE7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmV0dXJuIDUyO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiA1MztcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICByZXR1cm4gNTQ7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIHJldHVybiA1O1xuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwiU0NBTEVcIiksIDE3O1xuICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICByZXR1cm4gMTg7XG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbihcImFjY190aXRsZVwiKSwgMzM7XG4gICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIFwiYWNjX3RpdGxlX3ZhbHVlXCI7XG4gICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZ2luKFwiYWNjX2Rlc2NyXCIpLCAzNTtcbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgXCJhY2NfZGVzY3JfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgdGhpcy5iZWdpbihcImFjY19kZXNjcl9tdWx0aWxpbmVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgIHJldHVybiBcImFjY19kZXNjcl9tdWx0aWxpbmVfdmFsdWVcIjtcbiAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwiQ0xBU1NERUZcIiksIDQxO1xuICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTREVGSURcIiksIFwiREVGQVVMVF9DTEFTU0RFRl9JRFwiO1xuICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTREVGSURcIiksIDQyO1xuICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCA0MztcbiAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwiQ0xBU1NcIiksIDQ4O1xuICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCB0aGlzLnB1c2hTdGF0ZShcIkNMQVNTX1NUWUxFXCIpLCA0OTtcbiAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgNTA7XG4gICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGF0ZShcIlNUWUxFXCIpLCA0NTtcbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgdGhpcy5wdXNoU3RhdGUoXCJTVFlMRURFRl9TVFlMRVNcIiksIDQ2O1xuICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCA0NztcbiAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YXRlKFwiU0NBTEVcIiksIDE3O1xuICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICByZXR1cm4gMTg7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIlNUQVRFXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIG4ueXl0ZXh0ID0gbi55eXRleHQuc2xpY2UoMCwgLTgpLnRyaW0oKSwgMjU7XG4gICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIG4ueXl0ZXh0ID0gbi55eXRleHQuc2xpY2UoMCwgLTgpLnRyaW0oKSwgMjY7XG4gICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIG4ueXl0ZXh0ID0gbi55eXRleHQuc2xpY2UoMCwgLTEwKS50cmltKCksIDI3O1xuICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBuLnl5dGV4dCA9IG4ueXl0ZXh0LnNsaWNlKDAsIC04KS50cmltKCksIDI1O1xuICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBuLnl5dGV4dCA9IG4ueXl0ZXh0LnNsaWNlKDAsIC04KS50cmltKCksIDI2O1xuICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBuLnl5dGV4dCA9IG4ueXl0ZXh0LnNsaWNlKDAsIC0xMCkudHJpbSgpLCAyNztcbiAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgcmV0dXJuIDUxO1xuICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICByZXR1cm4gNTI7XG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgIHJldHVybiA1MztcbiAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgcmV0dXJuIDU0O1xuICAgICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZShcIlNUQVRFX1NUUklOR1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhdGUoXCJTVEFURV9JRFwiKSwgXCJBU1wiO1xuICAgICAgICAgIGNhc2UgNTE6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBcIklEXCI7XG4gICAgICAgICAgY2FzZSA1MjpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTM6XG4gICAgICAgICAgICByZXR1cm4gXCJTVEFURV9ERVNDUlwiO1xuICAgICAgICAgIGNhc2UgNTQ6XG4gICAgICAgICAgICByZXR1cm4gMTk7XG4gICAgICAgICAgY2FzZSA1NTpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTY6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCB0aGlzLnB1c2hTdGF0ZShcInN0cnVjdFwiKSwgMjA7XG4gICAgICAgICAgY2FzZSA1NzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCAyMTtcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2MDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZ2luKFwiTk9URVwiKSwgMjk7XG4gICAgICAgICAgY2FzZSA2MTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIHRoaXMucHVzaFN0YXRlKFwiTk9URV9JRFwiKSwgNTk7XG4gICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIHRoaXMucHVzaFN0YXRlKFwiTk9URV9JRFwiKSwgNjA7XG4gICAgICAgICAgY2FzZSA2MzpcbiAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKSwgdGhpcy5wdXNoU3RhdGUoXCJGTE9BVElOR19OT1RFXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIHRoaXMucHVzaFN0YXRlKFwiRkxPQVRJTkdfTk9URV9JRFwiKSwgXCJBU1wiO1xuICAgICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgcmV0dXJuIFwiTk9URV9URVhUXCI7XG4gICAgICAgICAgY2FzZSA2NzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcFN0YXRlKCksIFwiSURcIjtcbiAgICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wU3RhdGUoKSwgdGhpcy5wdXNoU3RhdGUoXCJOT1RFX1RFWFRcIiksIDI0O1xuICAgICAgICAgIGNhc2UgNjk6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBuLnl5dGV4dCA9IG4ueXl0ZXh0LnN1YnN0cigyKS50cmltKCksIDMxO1xuICAgICAgICAgIGNhc2UgNzA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLCBuLnl5dGV4dCA9IG4ueXl0ZXh0LnNsaWNlKDAsIC04KS50cmltKCksIDMxO1xuICAgICAgICAgIGNhc2UgNzE6XG4gICAgICAgICAgICByZXR1cm4gNjtcbiAgICAgICAgICBjYXNlIDcyOlxuICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgY2FzZSA3MzpcbiAgICAgICAgICAgIHJldHVybiAxNjtcbiAgICAgICAgICBjYXNlIDc0OlxuICAgICAgICAgICAgcmV0dXJuIDU3O1xuICAgICAgICAgIGNhc2UgNzU6XG4gICAgICAgICAgICByZXR1cm4gMjQ7XG4gICAgICAgICAgY2FzZSA3NjpcbiAgICAgICAgICAgIHJldHVybiBuLnl5dGV4dCA9IG4ueXl0ZXh0LnRyaW0oKSwgMTQ7XG4gICAgICAgICAgY2FzZSA3NzpcbiAgICAgICAgICAgIHJldHVybiAxNTtcbiAgICAgICAgICBjYXNlIDc4OlxuICAgICAgICAgICAgcmV0dXJuIDI4O1xuICAgICAgICAgIGNhc2UgNzk6XG4gICAgICAgICAgICByZXR1cm4gNTg7XG4gICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgIHJldHVybiA1O1xuICAgICAgICAgIGNhc2UgODE6XG4gICAgICAgICAgICByZXR1cm4gXCJJTlZBTElEXCI7XG4gICAgICAgIH1cbiAgICAgIH0sIFwiYW5vbnltb3VzXCIpLFxuICAgICAgcnVsZXM6IFsvXig/OmNsaWNrXFxiKS9pLCAvXig/OmhyZWZcXGIpL2ksIC9eKD86XCJbXlwiXSpcIikvaSwgL14oPzpkZWZhdWx0XFxiKS9pLCAvXig/Oi4qZGlyZWN0aW9uXFxzK1RCW15cXG5dKikvaSwgL14oPzouKmRpcmVjdGlvblxccytCVFteXFxuXSopL2ksIC9eKD86LipkaXJlY3Rpb25cXHMrUkxbXlxcbl0qKS9pLCAvXig/Oi4qZGlyZWN0aW9uXFxzK0xSW15cXG5dKikvaSwgL14oPzolJSg/IVxceylbXlxcbl0qKS9pLCAvXig/OlteXFx9XSUlW15cXG5dKikvaSwgL14oPzpbXFxuXSspL2ksIC9eKD86W1xcc10rKS9pLCAvXig/OigoPyFcXG4pXFxzKSspL2ksIC9eKD86I1teXFxuXSopL2ksIC9eKD86JVteXFxuXSopL2ksIC9eKD86c2NhbGVcXHMrKS9pLCAvXig/OlxcZCspL2ksIC9eKD86XFxzK3dpZHRoXFxiKS9pLCAvXig/OmFjY1RpdGxlXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKjpcXHMqKS9pLCAvXig/Oig/IVxcbnx8KSpbXlxcbl0qKS9pLCAvXig/OmFjY0Rlc2NyXFxzKlxce1xccyopL2ksIC9eKD86W1xcfV0pL2ksIC9eKD86W15cXH1dKikvaSwgL14oPzpjbGFzc0RlZlxccyspL2ksIC9eKD86REVGQVVMVFxccyspL2ksIC9eKD86XFx3K1xccyspL2ksIC9eKD86W15cXG5dKikvaSwgL14oPzpjbGFzc1xccyspL2ksIC9eKD86KFxcdyspKygoLFxccypcXHcrKSopKS9pLCAvXig/OlteXFxuXSopL2ksIC9eKD86c3R5bGVcXHMrKS9pLCAvXig/OltcXHcsXStcXHMrKS9pLCAvXig/OlteXFxuXSopL2ksIC9eKD86c2NhbGVcXHMrKS9pLCAvXig/OlxcZCspL2ksIC9eKD86XFxzK3dpZHRoXFxiKS9pLCAvXig/OnN0YXRlXFxzKykvaSwgL14oPzouKjw8Zm9yaz4+KS9pLCAvXig/Oi4qPDxqb2luPj4pL2ksIC9eKD86Lio8PGNob2ljZT4+KS9pLCAvXig/Oi4qXFxbXFxbZm9ya1xcXVxcXSkvaSwgL14oPzouKlxcW1xcW2pvaW5cXF1cXF0pL2ksIC9eKD86LipcXFtcXFtjaG9pY2VcXF1cXF0pL2ksIC9eKD86LipkaXJlY3Rpb25cXHMrVEJbXlxcbl0qKS9pLCAvXig/Oi4qZGlyZWN0aW9uXFxzK0JUW15cXG5dKikvaSwgL14oPzouKmRpcmVjdGlvblxccytSTFteXFxuXSopL2ksIC9eKD86LipkaXJlY3Rpb25cXHMrTFJbXlxcbl0qKS9pLCAvXig/OltcIl0pL2ksIC9eKD86XFxzKmFzXFxzKykvaSwgL14oPzpbXlxcblxce10qKS9pLCAvXig/OltcIl0pL2ksIC9eKD86W15cIl0qKS9pLCAvXig/OlteXFxuXFxzXFx7XSspL2ksIC9eKD86XFxuKS9pLCAvXig/OlxceykvaSwgL14oPzolJSg/IVxceylbXlxcbl0qKS9pLCAvXig/OlxcfSkvaSwgL14oPzpbXFxuXSkvaSwgL14oPzpub3RlXFxzKykvaSwgL14oPzpsZWZ0IG9mXFxiKS9pLCAvXig/OnJpZ2h0IG9mXFxiKS9pLCAvXig/OlwiKS9pLCAvXig/Olxccyphc1xccyopL2ksIC9eKD86W1wiXSkvaSwgL14oPzpbXlwiXSopL2ksIC9eKD86W15cXG5dKikvaSwgL14oPzpcXHMqW146XFxuXFxzXFwtXSspL2ksIC9eKD86XFxzKjpbXjpcXG47XSspL2ksIC9eKD86W1xcc1xcU10qP2VuZCBub3RlXFxiKS9pLCAvXig/OnN0YXRlRGlhZ3JhbVxccyspL2ksIC9eKD86c3RhdGVEaWFncmFtLXYyXFxzKykvaSwgL14oPzpoaWRlIGVtcHR5IGRlc2NyaXB0aW9uXFxiKS9pLCAvXig/OlxcW1xcKlxcXSkvaSwgL14oPzpbXjpcXG5cXHNcXC1cXHtdKykvaSwgL14oPzpcXHMqOlteOlxcbjtdKykvaSwgL14oPzotLT4pL2ksIC9eKD86LS0pL2ksIC9eKD86Ojo6KS9pLCAvXig/OiQpL2ksIC9eKD86LikvaV0sXG4gICAgICBjb25kaXRpb25zOiB7IExJTkU6IHsgcnVsZXM6IFsxMiwgMTNdLCBpbmNsdXNpdmU6ICExIH0sIHN0cnVjdDogeyBydWxlczogWzEyLCAxMywgMjUsIDI5LCAzMiwgMzgsIDQ1LCA0NiwgNDcsIDQ4LCA1NywgNTgsIDU5LCA2MCwgNzQsIDc1LCA3NiwgNzcsIDc4XSwgaW5jbHVzaXZlOiAhMSB9LCBGTE9BVElOR19OT1RFX0lEOiB7IHJ1bGVzOiBbNjddLCBpbmNsdXNpdmU6ICExIH0sIEZMT0FUSU5HX05PVEU6IHsgcnVsZXM6IFs2NCwgNjUsIDY2XSwgaW5jbHVzaXZlOiAhMSB9LCBOT1RFX1RFWFQ6IHsgcnVsZXM6IFs2OSwgNzBdLCBpbmNsdXNpdmU6ICExIH0sIE5PVEVfSUQ6IHsgcnVsZXM6IFs2OF0sIGluY2x1c2l2ZTogITEgfSwgTk9URTogeyBydWxlczogWzYxLCA2MiwgNjNdLCBpbmNsdXNpdmU6ICExIH0sIFNUWUxFREVGX1NUWUxFT1BUUzogeyBydWxlczogW10sIGluY2x1c2l2ZTogITEgfSwgU1RZTEVERUZfU1RZTEVTOiB7IHJ1bGVzOiBbMzRdLCBpbmNsdXNpdmU6ICExIH0sIFNUWUxFX0lEUzogeyBydWxlczogW10sIGluY2x1c2l2ZTogITEgfSwgU1RZTEU6IHsgcnVsZXM6IFszM10sIGluY2x1c2l2ZTogITEgfSwgQ0xBU1NfU1RZTEU6IHsgcnVsZXM6IFszMV0sIGluY2x1c2l2ZTogITEgfSwgQ0xBU1M6IHsgcnVsZXM6IFszMF0sIGluY2x1c2l2ZTogITEgfSwgQ0xBU1NERUZJRDogeyBydWxlczogWzI4XSwgaW5jbHVzaXZlOiAhMSB9LCBDTEFTU0RFRjogeyBydWxlczogWzI2LCAyN10sIGluY2x1c2l2ZTogITEgfSwgYWNjX2Rlc2NyX211bHRpbGluZTogeyBydWxlczogWzIzLCAyNF0sIGluY2x1c2l2ZTogITEgfSwgYWNjX2Rlc2NyOiB7IHJ1bGVzOiBbMjFdLCBpbmNsdXNpdmU6ICExIH0sIGFjY190aXRsZTogeyBydWxlczogWzE5XSwgaW5jbHVzaXZlOiAhMSB9LCBTQ0FMRTogeyBydWxlczogWzE2LCAxNywgMzYsIDM3XSwgaW5jbHVzaXZlOiAhMSB9LCBBTElBUzogeyBydWxlczogW10sIGluY2x1c2l2ZTogITEgfSwgU1RBVEVfSUQ6IHsgcnVsZXM6IFs1MV0sIGluY2x1c2l2ZTogITEgfSwgU1RBVEVfU1RSSU5HOiB7IHJ1bGVzOiBbNTIsIDUzXSwgaW5jbHVzaXZlOiAhMSB9LCBGT1JLX1NUQVRFOiB7IHJ1bGVzOiBbXSwgaW5jbHVzaXZlOiAhMSB9LCBTVEFURTogeyBydWxlczogWzEyLCAxMywgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDksIDUwLCA1NCwgNTUsIDU2XSwgaW5jbHVzaXZlOiAhMSB9LCBJRDogeyBydWxlczogWzEyLCAxM10sIGluY2x1c2l2ZTogITEgfSwgSU5JVElBTDogeyBydWxlczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTMsIDE0LCAxNSwgMTgsIDIwLCAyMiwgMjUsIDI5LCAzMiwgMzUsIDM4LCA1NiwgNjAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OSwgODAsIDgxXSwgaW5jbHVzaXZlOiAhMCB9IH1cbiAgICB9O1xuICAgIHJldHVybiBZO1xuICB9KSgpO1xuICBndC5sZXhlciA9IHF0O1xuICBmdW5jdGlvbiBodCgpIHtcbiAgICB0aGlzLnl5ID0ge307XG4gIH1cbiAgcmV0dXJuIHUoaHQsIFwiUGFyc2VyXCIpLCBodC5wcm90b3R5cGUgPSBndCwgZ3QuUGFyc2VyID0gaHQsIG5ldyBodCgpO1xufSkoKTtcbnZ0LnBhcnNlciA9IHZ0O1xudmFyIEJlID0gdnQsIGRlID0gXCJUQlwiLCBZdCA9IFwiVEJcIiwgT3QgPSBcImRpclwiLCBYID0gXCJzdGF0ZVwiLCBLID0gXCJyb290XCIsIEN0ID0gXCJyZWxhdGlvblwiLCBmZSA9IFwiY2xhc3NEZWZcIiwgcGUgPSBcInN0eWxlXCIsIFNlID0gXCJhcHBseUNsYXNzXCIsIHR0ID0gXCJkZWZhdWx0XCIsIEd0ID0gXCJkaXZpZGVyXCIsIEJ0ID0gXCJmaWxsOm5vbmVcIiwgVnQgPSBcImZpbGw6ICMzMzNcIiwgTXQgPSBcImNcIiwgVXQgPSBcInRleHRcIiwganQgPSBcIm5vcm1hbFwiLCBEdCA9IFwicmVjdFwiLCBrdCA9IFwicmVjdFdpdGhUaXRsZVwiLCB5ZSA9IFwic3RhdGVTdGFydFwiLCBnZSA9IFwic3RhdGVFbmRcIiwgUnQgPSBcImRpdmlkZXJcIiwgTnQgPSBcInJvdW5kZWRXaXRoVGl0bGVcIiwgVGUgPSBcIm5vdGVcIiwgRWUgPSBcIm5vdGVHcm91cFwiLCBldCA9IFwic3RhdGVkaWFncmFtXCIsIF9lID0gXCJzdGF0ZVwiLCBtZSA9IGAke2V0fS0ke19lfWAsIEh0ID0gXCJ0cmFuc2l0aW9uXCIsIGJlID0gXCJub3RlXCIsIERlID0gXCJub3RlLWVkZ2VcIiwga2UgPSBgJHtIdH0gJHtEZX1gLCB2ZSA9IGAke2V0fS0ke2JlfWAsIENlID0gXCJjbHVzdGVyXCIsIEFlID0gYCR7ZXR9LSR7Q2V9YCwgeGUgPSBcImNsdXN0ZXItYWx0XCIsIExlID0gYCR7ZXR9LSR7eGV9YCwgV3QgPSBcInBhcmVudFwiLCB6dCA9IFwibm90ZVwiLCBJZSA9IFwic3RhdGVcIiwgQXQgPSBcIi0tLS1cIiwgT2UgPSBgJHtBdH0ke3p0fWAsIHd0ID0gYCR7QXR9JHtXdH1gLCBLdCA9IC8qIEBfX1BVUkVfXyAqLyB1KCh0LCBlID0gWXQpID0+IHtcbiAgaWYgKCF0LmRvYylcbiAgICByZXR1cm4gZTtcbiAgbGV0IHMgPSBlO1xuICBmb3IgKGNvbnN0IGEgb2YgdC5kb2MpXG4gICAgYS5zdG10ID09PSBcImRpclwiICYmIChzID0gYS52YWx1ZSk7XG4gIHJldHVybiBzO1xufSwgXCJnZXREaXJcIiksIFJlID0gLyogQF9fUFVSRV9fICovIHUoZnVuY3Rpb24odCwgZSkge1xuICByZXR1cm4gZS5kYi5nZXRDbGFzc2VzKCk7XG59LCBcImdldENsYXNzZXNcIiksIE5lID0gLyogQF9fUFVSRV9fICovIHUoYXN5bmMgZnVuY3Rpb24odCwgZSwgcywgYSkge1xuICBiLmluZm8oXCJSRUYwOlwiKSwgYi5pbmZvKFwiRHJhd2luZyBzdGF0ZSBkaWFncmFtICh2MilcIiwgZSk7XG4gIGNvbnN0IHsgc2VjdXJpdHlMZXZlbDogciwgc3RhdGU6IGgsIGxheW91dDogZCB9ID0gdygpO1xuICBhLmRiLmV4dHJhY3QoYS5kYi5nZXRSb290RG9jVjIoKSk7XG4gIGNvbnN0IFMgPSBhLmRiLmdldERhdGEoKSwgZiA9IHRlKGUsIHIpO1xuICBTLnR5cGUgPSBhLnR5cGUsIFMubGF5b3V0QWxnb3JpdGhtID0gZCwgUy5ub2RlU3BhY2luZyA9IGg/Lm5vZGVTcGFjaW5nIHx8IDUwLCBTLnJhbmtTcGFjaW5nID0gaD8ucmFua1NwYWNpbmcgfHwgNTAsIFMubWFya2VycyA9IFtcImJhcmJcIl0sIFMuZGlhZ3JhbUlkID0gZSwgYXdhaXQgc2UoUywgZik7XG4gIGNvbnN0IFQgPSA4O1xuICB0cnkge1xuICAgICh0eXBlb2YgYS5kYi5nZXRMaW5rcyA9PSBcImZ1bmN0aW9uXCIgPyBhLmRiLmdldExpbmtzKCkgOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKS5mb3JFYWNoKChtLCBBKSA9PiB7XG4gICAgICBjb25zdCB2ID0gdHlwZW9mIEEgPT0gXCJzdHJpbmdcIiA/IEEgOiB0eXBlb2YgQT8uaWQgPT0gXCJzdHJpbmdcIiA/IEEuaWQgOiBcIlwiO1xuICAgICAgaWYgKCF2KSB7XG4gICAgICAgIGIud2FybihcIuKaoO+4jyBJbnZhbGlkIG9yIG1pc3Npbmcgc3RhdGVJZCBmcm9tIGtleTpcIiwgSlNPTi5zdHJpbmdpZnkoQSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwID0gZi5ub2RlKCk/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJnXCIpO1xuICAgICAgbGV0IGs7XG4gICAgICBpZiAocD8uZm9yRWFjaCgoSSkgPT4ge1xuICAgICAgICBJLnRleHRDb250ZW50Py50cmltKCkgPT09IHYgJiYgKGsgPSBJKTtcbiAgICAgIH0pLCAhaykge1xuICAgICAgICBiLndhcm4oXCLimqDvuI8gQ291bGQgbm90IGZpbmQgbm9kZSBtYXRjaGluZyB0ZXh0OlwiLCB2KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgUiA9IGsucGFyZW50Tm9kZTtcbiAgICAgIGlmICghUikge1xuICAgICAgICBiLndhcm4oXCLimqDvuI8gTm9kZSBoYXMgbm8gcGFyZW50LCBjYW5ub3Qgd3JhcDpcIiwgdik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImFcIiksICQgPSBtLnVybC5yZXBsYWNlKC9eXCIrfFwiKyQvZywgXCJcIik7XG4gICAgICBpZiAoTC5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJ4bGluazpocmVmXCIsICQpLCBMLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKSwgbS50b29sdGlwKSB7XG4gICAgICAgIGNvbnN0IEkgPSBtLnRvb2x0aXAucmVwbGFjZSgvXlwiK3xcIiskL2csIFwiXCIpO1xuICAgICAgICBMLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIEkpO1xuICAgICAgfVxuICAgICAgUi5yZXBsYWNlQ2hpbGQoTCwgayksIEwuYXBwZW5kQ2hpbGQoayksIGIuaW5mbyhcIvCflJcgV3JhcHBlZCBub2RlIGluIDxhPiB0YWcgZm9yOlwiLCB2LCBtLnVybCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBiLmVycm9yKFwi4p2MIEVycm9yIGluamVjdGluZyBjbGlja2FibGUgbGlua3M6XCIsIF8pO1xuICB9XG4gIGllLmluc2VydFRpdGxlKFxuICAgIGYsXG4gICAgXCJzdGF0ZWRpYWdyYW1UaXRsZVRleHRcIixcbiAgICBoPy50aXRsZVRvcE1hcmdpbiA/PyAyNSxcbiAgICBhLmRiLmdldERpYWdyYW1UaXRsZSgpXG4gICksIGVlKGYsIFQsIGV0LCBoPy51c2VNYXhXaWR0aCA/PyAhMCk7XG59LCBcImRyYXdcIiksIFZlID0ge1xuICBnZXRDbGFzc2VzOiBSZSxcbiAgZHJhdzogTmUsXG4gIGdldERpcjogS3Rcbn0sIFN0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgRyA9IDA7XG5mdW5jdGlvbiB5dCh0ID0gXCJcIiwgZSA9IDAsIHMgPSBcIlwiLCBhID0gQXQpIHtcbiAgY29uc3QgciA9IHMgIT09IG51bGwgJiYgcy5sZW5ndGggPiAwID8gYCR7YX0ke3N9YCA6IFwiXCI7XG4gIHJldHVybiBgJHtJZX0tJHt0fSR7cn0tJHtlfWA7XG59XG51KHl0LCBcInN0YXRlRG9tSWRcIik7XG52YXIgd2UgPSAvKiBAX19QVVJFX18gKi8gdSgodCwgZSwgcywgYSwgciwgaCwgZCwgUykgPT4ge1xuICBiLnRyYWNlKFwiaXRlbXNcIiwgZSksIGUuZm9yRWFjaCgoZikgPT4ge1xuICAgIHN3aXRjaCAoZi5zdG10KSB7XG4gICAgICBjYXNlIFg6XG4gICAgICAgIFoodCwgZiwgcywgYSwgciwgaCwgZCwgUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0dDpcbiAgICAgICAgWih0LCBmLCBzLCBhLCByLCBoLCBkLCBTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEN0OlxuICAgICAgICB7XG4gICAgICAgICAgWihcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBmLnN0YXRlMSxcbiAgICAgICAgICAgIHMsXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAgcixcbiAgICAgICAgICAgIGgsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgU1xuICAgICAgICAgICksIFooXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgZi5zdGF0ZTIsXG4gICAgICAgICAgICBzLFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBoLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIFNcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IFQgPSB7XG4gICAgICAgICAgICBpZDogXCJlZGdlXCIgKyBHLFxuICAgICAgICAgICAgc3RhcnQ6IGYuc3RhdGUxLmlkLFxuICAgICAgICAgICAgZW5kOiBmLnN0YXRlMi5pZCxcbiAgICAgICAgICAgIGFycm93aGVhZDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGFycm93VHlwZUVuZDogXCJhcnJvd19iYXJiXCIsXG4gICAgICAgICAgICBzdHlsZTogQnQsXG4gICAgICAgICAgICBsYWJlbFN0eWxlOiBcIlwiLFxuICAgICAgICAgICAgbGFiZWw6IFUuc2FuaXRpemVUZXh0KGYuZGVzY3JpcHRpb24gPz8gXCJcIiwgdygpKSxcbiAgICAgICAgICAgIGFycm93aGVhZFN0eWxlOiBWdCxcbiAgICAgICAgICAgIGxhYmVscG9zOiBNdCxcbiAgICAgICAgICAgIGxhYmVsVHlwZTogVXQsXG4gICAgICAgICAgICB0aGlja25lc3M6IGp0LFxuICAgICAgICAgICAgY2xhc3NlczogSHQsXG4gICAgICAgICAgICBsb29rOiBkXG4gICAgICAgICAgfTtcbiAgICAgICAgICByLnB1c2goVCksIEcrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufSwgXCJzZXR1cERvY1wiKSwgJHQgPSAvKiBAX19QVVJFX18gKi8gdSgodCwgZSA9IFl0KSA9PiB7XG4gIGxldCBzID0gZTtcbiAgaWYgKHQuZG9jKVxuICAgIGZvciAoY29uc3QgYSBvZiB0LmRvYylcbiAgICAgIGEuc3RtdCA9PT0gXCJkaXJcIiAmJiAocyA9IGEudmFsdWUpO1xuICByZXR1cm4gcztcbn0sIFwiZ2V0RGlyXCIpO1xuZnVuY3Rpb24gUSh0LCBlLCBzKSB7XG4gIGlmICghZS5pZCB8fCBlLmlkID09PSBcIjwvam9pbj48L2Zvcms+XCIgfHwgZS5pZCA9PT0gXCI8L2Nob2ljZT5cIilcbiAgICByZXR1cm47XG4gIGUuY3NzQ2xhc3NlcyAmJiAoQXJyYXkuaXNBcnJheShlLmNzc0NvbXBpbGVkU3R5bGVzKSB8fCAoZS5jc3NDb21waWxlZFN0eWxlcyA9IFtdKSwgZS5jc3NDbGFzc2VzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChyKSA9PiB7XG4gICAgY29uc3QgaCA9IHMuZ2V0KHIpO1xuICAgIGggJiYgKGUuY3NzQ29tcGlsZWRTdHlsZXMgPSBbLi4uZS5jc3NDb21waWxlZFN0eWxlcyA/PyBbXSwgLi4uaC5zdHlsZXNdKTtcbiAgfSkpO1xuICBjb25zdCBhID0gdC5maW5kKChyKSA9PiByLmlkID09PSBlLmlkKTtcbiAgYSA/IE9iamVjdC5hc3NpZ24oYSwgZSkgOiB0LnB1c2goZSk7XG59XG51KFEsIFwiaW5zZXJ0T3JVcGRhdGVOb2RlXCIpO1xuZnVuY3Rpb24gWHQodCkge1xuICByZXR1cm4gdD8uY2xhc3Nlcz8uam9pbihcIiBcIikgPz8gXCJcIjtcbn1cbnUoWHQsIFwiZ2V0Q2xhc3Nlc0Zyb21EYkluZm9cIik7XG5mdW5jdGlvbiBKdCh0KSB7XG4gIHJldHVybiB0Py5zdHlsZXMgPz8gW107XG59XG51KEp0LCBcImdldFN0eWxlc0Zyb21EYkluZm9cIik7XG52YXIgWiA9IC8qIEBfX1BVUkVfXyAqLyB1KCh0LCBlLCBzLCBhLCByLCBoLCBkLCBTKSA9PiB7XG4gIGNvbnN0IGYgPSBlLmlkLCBUID0gcy5nZXQoZiksIF8gPSBYdChUKSwgbSA9IEp0KFQpLCBBID0gdygpO1xuICBpZiAoYi5pbmZvKFwiZGF0YUZldGNoZXIgcGFyc2VkSXRlbVwiLCBlLCBULCBtKSwgZiAhPT0gXCJyb290XCIpIHtcbiAgICBsZXQgdiA9IER0O1xuICAgIGUuc3RhcnQgPT09ICEwID8gdiA9IHllIDogZS5zdGFydCA9PT0gITEgJiYgKHYgPSBnZSksIGUudHlwZSAhPT0gdHQgJiYgKHYgPSBlLnR5cGUpLCBTdC5nZXQoZikgfHwgU3Quc2V0KGYsIHtcbiAgICAgIGlkOiBmLFxuICAgICAgc2hhcGU6IHYsXG4gICAgICBkZXNjcmlwdGlvbjogVS5zYW5pdGl6ZVRleHQoZiwgQSksXG4gICAgICBjc3NDbGFzc2VzOiBgJHtffSAke21lfWAsXG4gICAgICBjc3NTdHlsZXM6IG1cbiAgICB9KTtcbiAgICBjb25zdCBwID0gU3QuZ2V0KGYpO1xuICAgIGUuZGVzY3JpcHRpb24gJiYgKEFycmF5LmlzQXJyYXkocC5kZXNjcmlwdGlvbikgPyAocC5zaGFwZSA9IGt0LCBwLmRlc2NyaXB0aW9uLnB1c2goZS5kZXNjcmlwdGlvbikpIDogcC5kZXNjcmlwdGlvbj8ubGVuZ3RoICYmIHAuZGVzY3JpcHRpb24ubGVuZ3RoID4gMCA/IChwLnNoYXBlID0ga3QsIHAuZGVzY3JpcHRpb24gPT09IGYgPyBwLmRlc2NyaXB0aW9uID0gW2UuZGVzY3JpcHRpb25dIDogcC5kZXNjcmlwdGlvbiA9IFtwLmRlc2NyaXB0aW9uLCBlLmRlc2NyaXB0aW9uXSkgOiAocC5zaGFwZSA9IER0LCBwLmRlc2NyaXB0aW9uID0gZS5kZXNjcmlwdGlvbiksIHAuZGVzY3JpcHRpb24gPSBVLnNhbml0aXplVGV4dE9yQXJyYXkocC5kZXNjcmlwdGlvbiwgQSkpLCBwLmRlc2NyaXB0aW9uPy5sZW5ndGggPT09IDEgJiYgcC5zaGFwZSA9PT0ga3QgJiYgKHAudHlwZSA9PT0gXCJncm91cFwiID8gcC5zaGFwZSA9IE50IDogcC5zaGFwZSA9IER0KSwgIXAudHlwZSAmJiBlLmRvYyAmJiAoYi5pbmZvKFwiU2V0dGluZyBjbHVzdGVyIGZvciBYQ1hcIiwgZiwgJHQoZSkpLCBwLnR5cGUgPSBcImdyb3VwXCIsIHAuaXNHcm91cCA9ICEwLCBwLmRpciA9ICR0KGUpLCBwLnNoYXBlID0gZS50eXBlID09PSBHdCA/IFJ0IDogTnQsIHAuY3NzQ2xhc3NlcyA9IGAke3AuY3NzQ2xhc3Nlc30gJHtBZX0gJHtoID8gTGUgOiBcIlwifWApO1xuICAgIGNvbnN0IGsgPSB7XG4gICAgICBsYWJlbFN0eWxlOiBcIlwiLFxuICAgICAgc2hhcGU6IHAuc2hhcGUsXG4gICAgICBsYWJlbDogcC5kZXNjcmlwdGlvbixcbiAgICAgIGNzc0NsYXNzZXM6IHAuY3NzQ2xhc3NlcyxcbiAgICAgIGNzc0NvbXBpbGVkU3R5bGVzOiBbXSxcbiAgICAgIGNzc1N0eWxlczogcC5jc3NTdHlsZXMsXG4gICAgICBpZDogZixcbiAgICAgIGRpcjogcC5kaXIsXG4gICAgICBkb21JZDogeXQoZiwgRyksXG4gICAgICB0eXBlOiBwLnR5cGUsXG4gICAgICBpc0dyb3VwOiBwLnR5cGUgPT09IFwiZ3JvdXBcIixcbiAgICAgIHBhZGRpbmc6IDgsXG4gICAgICByeDogMTAsXG4gICAgICByeTogMTAsXG4gICAgICBsb29rOiBkXG4gICAgfTtcbiAgICBpZiAoay5zaGFwZSA9PT0gUnQgJiYgKGsubGFiZWwgPSBcIlwiKSwgdCAmJiB0LmlkICE9PSBcInJvb3RcIiAmJiAoYi50cmFjZShcIlNldHRpbmcgbm9kZSBcIiwgZiwgXCIgdG8gYmUgY2hpbGQgb2YgaXRzIHBhcmVudCBcIiwgdC5pZCksIGsucGFyZW50SWQgPSB0LmlkKSwgay5jZW50ZXJMYWJlbCA9ICEwLCBlLm5vdGUpIHtcbiAgICAgIGNvbnN0IFIgPSB7XG4gICAgICAgIGxhYmVsU3R5bGU6IFwiXCIsXG4gICAgICAgIHNoYXBlOiBUZSxcbiAgICAgICAgbGFiZWw6IGUubm90ZS50ZXh0LFxuICAgICAgICBjc3NDbGFzc2VzOiB2ZSxcbiAgICAgICAgLy8gdXNlSHRtbExhYmVsczogZmFsc2UsXG4gICAgICAgIGNzc1N0eWxlczogW10sXG4gICAgICAgIGNzc0NvbXBpbGVkU3R5bGVzOiBbXSxcbiAgICAgICAgaWQ6IGYgKyBPZSArIFwiLVwiICsgRyxcbiAgICAgICAgZG9tSWQ6IHl0KGYsIEcsIHp0KSxcbiAgICAgICAgdHlwZTogcC50eXBlLFxuICAgICAgICBpc0dyb3VwOiBwLnR5cGUgPT09IFwiZ3JvdXBcIixcbiAgICAgICAgcGFkZGluZzogQS5mbG93Y2hhcnQ/LnBhZGRpbmcsXG4gICAgICAgIGxvb2s6IGQsXG4gICAgICAgIHBvc2l0aW9uOiBlLm5vdGUucG9zaXRpb25cbiAgICAgIH0sIEwgPSBmICsgd3QsICQgPSB7XG4gICAgICAgIGxhYmVsU3R5bGU6IFwiXCIsXG4gICAgICAgIHNoYXBlOiBFZSxcbiAgICAgICAgbGFiZWw6IGUubm90ZS50ZXh0LFxuICAgICAgICBjc3NDbGFzc2VzOiBwLmNzc0NsYXNzZXMsXG4gICAgICAgIGNzc1N0eWxlczogW10sXG4gICAgICAgIGlkOiBmICsgd3QsXG4gICAgICAgIGRvbUlkOiB5dChmLCBHLCBXdCksXG4gICAgICAgIHR5cGU6IFwiZ3JvdXBcIixcbiAgICAgICAgaXNHcm91cDogITAsXG4gICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICAvL2dldENvbmZpZygpLmZsb3djaGFydC5wYWRkaW5nXG4gICAgICAgIGxvb2s6IGQsXG4gICAgICAgIHBvc2l0aW9uOiBlLm5vdGUucG9zaXRpb25cbiAgICAgIH07XG4gICAgICBHKyssICQuaWQgPSBMLCBSLnBhcmVudElkID0gTCwgUShhLCAkLCBTKSwgUShhLCBSLCBTKSwgUShhLCBrLCBTKTtcbiAgICAgIGxldCBJID0gZiwgUCA9IFIuaWQ7XG4gICAgICBlLm5vdGUucG9zaXRpb24gPT09IFwibGVmdCBvZlwiICYmIChJID0gUi5pZCwgUCA9IGYpLCByLnB1c2goe1xuICAgICAgICBpZDogSSArIFwiLVwiICsgUCxcbiAgICAgICAgc3RhcnQ6IEksXG4gICAgICAgIGVuZDogUCxcbiAgICAgICAgYXJyb3doZWFkOiBcIm5vbmVcIixcbiAgICAgICAgYXJyb3dUeXBlRW5kOiBcIlwiLFxuICAgICAgICBzdHlsZTogQnQsXG4gICAgICAgIGxhYmVsU3R5bGU6IFwiXCIsXG4gICAgICAgIGNsYXNzZXM6IGtlLFxuICAgICAgICBhcnJvd2hlYWRTdHlsZTogVnQsXG4gICAgICAgIGxhYmVscG9zOiBNdCxcbiAgICAgICAgbGFiZWxUeXBlOiBVdCxcbiAgICAgICAgdGhpY2tuZXNzOiBqdCxcbiAgICAgICAgbG9vazogZFxuICAgICAgfSk7XG4gICAgfSBlbHNlXG4gICAgICBRKGEsIGssIFMpO1xuICB9XG4gIGUuZG9jICYmIChiLnRyYWNlKFwiQWRkaW5nIG5vZGVzIGNoaWxkcmVuIFwiKSwgd2UoZSwgZS5kb2MsIHMsIGEsIHIsICFoLCBkLCBTKSk7XG59LCBcImRhdGFGZXRjaGVyXCIpLCAkZSA9IC8qIEBfX1BVUkVfXyAqLyB1KCgpID0+IHtcbiAgU3QuY2xlYXIoKSwgRyA9IDA7XG59LCBcInJlc2V0XCIpLCBDID0ge1xuICBTVEFSVF9OT0RFOiBcIlsqXVwiLFxuICBTVEFSVF9UWVBFOiBcInN0YXJ0XCIsXG4gIEVORF9OT0RFOiBcIlsqXVwiLFxuICBFTkRfVFlQRTogXCJlbmRcIixcbiAgQ09MT1JfS0VZV09SRDogXCJjb2xvclwiLFxuICBGSUxMX0tFWVdPUkQ6IFwiZmlsbFwiLFxuICBCR19GSUxMOiBcImJnRmlsbFwiLFxuICBTVFlMRUNMQVNTX1NFUDogXCIsXCJcbn0sIFB0ID0gLyogQF9fUFVSRV9fICovIHUoKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgXCJuZXdDbGFzc2VzTGlzdFwiKSwgRnQgPSAvKiBAX19QVVJFX18gKi8gdSgoKSA9PiAoe1xuICByZWxhdGlvbnM6IFtdLFxuICBzdGF0ZXM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksXG4gIGRvY3VtZW50czoge31cbn0pLCBcIm5ld0RvY1wiKSwgcHQgPSAvKiBAX19QVVJFX18gKi8gdSgodCkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0KSksIFwiY2xvbmVcIiksIGosIE1lID0gKGogPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGUpIHtcbiAgICB0aGlzLnZlcnNpb24gPSBlLCB0aGlzLm5vZGVzID0gW10sIHRoaXMuZWRnZXMgPSBbXSwgdGhpcy5yb290RG9jID0gW10sIHRoaXMuY2xhc3NlcyA9IFB0KCksIHRoaXMuZG9jdW1lbnRzID0geyByb290OiBGdCgpIH0sIHRoaXMuY3VycmVudERvY3VtZW50ID0gdGhpcy5kb2N1bWVudHMucm9vdCwgdGhpcy5zdGFydEVuZENvdW50ID0gMCwgdGhpcy5kaXZpZGVyQ250ID0gMCwgdGhpcy5saW5rcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksIHRoaXMuZ2V0QWNjVGl0bGUgPSByZSwgdGhpcy5zZXRBY2NUaXRsZSA9IGFlLCB0aGlzLmdldEFjY0Rlc2NyaXB0aW9uID0gbmUsIHRoaXMuc2V0QWNjRGVzY3JpcHRpb24gPSBvZSwgdGhpcy5zZXREaWFncmFtVGl0bGUgPSBsZSwgdGhpcy5nZXREaWFncmFtVGl0bGUgPSBjZSwgdGhpcy5jbGVhcigpLCB0aGlzLnNldFJvb3REb2MgPSB0aGlzLnNldFJvb3REb2MuYmluZCh0aGlzKSwgdGhpcy5nZXREaXZpZGVySWQgPSB0aGlzLmdldERpdmlkZXJJZC5iaW5kKHRoaXMpLCB0aGlzLnNldERpcmVjdGlvbiA9IHRoaXMuc2V0RGlyZWN0aW9uLmJpbmQodGhpcyksIHRoaXMudHJpbUNvbG9uID0gdGhpcy50cmltQ29sb24uYmluZCh0aGlzKTtcbiAgfVxuICAvKipcbiAgICogQ29udmVydCBhbGwgb2YgdGhlIHN0YXRlbWVudHMgKHN0bXRzKSB0aGF0IHdlcmUgcGFyc2VkIGludG8gc3RhdGVzIGFuZCByZWxhdGlvbnNoaXBzLlxuICAgKiBUaGlzIGlzIGRvbmUgYmVjYXVzZSBhIHN0YXRlIGRpYWdyYW0gbWF5IGhhdmUgbmVzdGVkIHNlY3Rpb25zLFxuICAgKiB3aGVyZSBlYWNoIHNlY3Rpb24gaXMgYSAnZG9jdW1lbnQnIGFuZCBoYXMgaXRzIG93biBzZXQgb2Ygc3RhdGVtZW50cy5cbiAgICogRXg6IHRoZSBzZWN0aW9uIHdpdGhpbiBhIGZvcmsgaGFzIGl0cyBvd24gc3RhdGVtZW50cywgYW5kIGluY29taW5nIGFuZCBvdXRnb2luZyBzdGF0ZW1lbnRzXG4gICAqIHJlZmVyIHRvIHRoZSBmb3JrIGFzIGEgd2hvbGUgKGRvY3VtZW50KS5cbiAgICogU2VlIHRoZSBwYXJzZXIgZ3JhbW1hcjogIHRoZSBkZWZpbml0aW9uIG9mIGEgZG9jdW1lbnQgaXMgYSBkb2N1bWVudCB0aGVuIGEgJ2xpbmUnLCB3aGVyZSBhIGxpbmUgY2FuIGJlIGEgc3RhdGVtZW50LlxuICAgKiBUaGlzIHdpbGwgcHVzaCB0aGUgc3RhdGVtZW50IGludG8gdGhlIGxpc3Qgb2Ygc3RhdGVtZW50cyBmb3IgdGhlIGN1cnJlbnQgZG9jdW1lbnQuXG4gICAqL1xuICBleHRyYWN0KGUpIHtcbiAgICB0aGlzLmNsZWFyKCEwKTtcbiAgICBmb3IgKGNvbnN0IHIgb2YgQXJyYXkuaXNBcnJheShlKSA/IGUgOiBlLmRvYylcbiAgICAgIHN3aXRjaCAoci5zdG10KSB7XG4gICAgICAgIGNhc2UgWDpcbiAgICAgICAgICB0aGlzLmFkZFN0YXRlKHIuaWQudHJpbSgpLCByLnR5cGUsIHIuZG9jLCByLmRlc2NyaXB0aW9uLCByLm5vdGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEN0OlxuICAgICAgICAgIHRoaXMuYWRkUmVsYXRpb24oci5zdGF0ZTEsIHIuc3RhdGUyLCByLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmZTpcbiAgICAgICAgICB0aGlzLmFkZFN0eWxlQ2xhc3Moci5pZC50cmltKCksIHIuY2xhc3Nlcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGU6XG4gICAgICAgICAgdGhpcy5oYW5kbGVTdHlsZURlZihyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTZTpcbiAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKHIuaWQudHJpbSgpLCByLnN0eWxlQ2xhc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY2xpY2tcIjpcbiAgICAgICAgICB0aGlzLmFkZExpbmsoci5pZCwgci51cmwsIHIudG9vbHRpcCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY29uc3QgcyA9IHRoaXMuZ2V0U3RhdGVzKCksIGEgPSB3KCk7XG4gICAgJGUoKSwgWihcbiAgICAgIHZvaWQgMCxcbiAgICAgIHRoaXMuZ2V0Um9vdERvY1YyKCksXG4gICAgICBzLFxuICAgICAgdGhpcy5ub2RlcyxcbiAgICAgIHRoaXMuZWRnZXMsXG4gICAgICAhMCxcbiAgICAgIGEubG9vayxcbiAgICAgIHRoaXMuY2xhc3Nlc1xuICAgICk7XG4gICAgZm9yIChjb25zdCByIG9mIHRoaXMubm9kZXMpXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyLmxhYmVsKSkge1xuICAgICAgICBpZiAoci5kZXNjcmlwdGlvbiA9IHIubGFiZWwuc2xpY2UoMSksIHIuaXNHcm91cCAmJiByLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDApXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEdyb3VwIG5vZGVzIGNhbiBvbmx5IGhhdmUgbGFiZWwuIFJlbW92ZSB0aGUgYWRkaXRpb25hbCBkZXNjcmlwdGlvbiBmb3Igbm9kZSBbJHtyLmlkfV1gXG4gICAgICAgICAgKTtcbiAgICAgICAgci5sYWJlbCA9IHIubGFiZWxbMF07XG4gICAgICB9XG4gIH1cbiAgaGFuZGxlU3R5bGVEZWYoZSkge1xuICAgIGNvbnN0IHMgPSBlLmlkLnRyaW0oKS5zcGxpdChcIixcIiksIGEgPSBlLnN0eWxlQ2xhc3Muc3BsaXQoXCIsXCIpO1xuICAgIGZvciAoY29uc3QgciBvZiBzKSB7XG4gICAgICBsZXQgaCA9IHRoaXMuZ2V0U3RhdGUocik7XG4gICAgICBpZiAoIWgpIHtcbiAgICAgICAgY29uc3QgZCA9IHIudHJpbSgpO1xuICAgICAgICB0aGlzLmFkZFN0YXRlKGQpLCBoID0gdGhpcy5nZXRTdGF0ZShkKTtcbiAgICAgIH1cbiAgICAgIGggJiYgKGguc3R5bGVzID0gYS5tYXAoKGQpID0+IGQucmVwbGFjZSgvOy9nLCBcIlwiKT8udHJpbSgpKSk7XG4gICAgfVxuICB9XG4gIHNldFJvb3REb2MoZSkge1xuICAgIGIuaW5mbyhcIlNldHRpbmcgcm9vdCBkb2NcIiwgZSksIHRoaXMucm9vdERvYyA9IGUsIHRoaXMudmVyc2lvbiA9PT0gMSA/IHRoaXMuZXh0cmFjdChlKSA6IHRoaXMuZXh0cmFjdCh0aGlzLmdldFJvb3REb2NWMigpKTtcbiAgfVxuICBkb2NUcmFuc2xhdG9yKGUsIHMsIGEpIHtcbiAgICBpZiAocy5zdG10ID09PSBDdCkge1xuICAgICAgdGhpcy5kb2NUcmFuc2xhdG9yKGUsIHMuc3RhdGUxLCAhMCksIHRoaXMuZG9jVHJhbnNsYXRvcihlLCBzLnN0YXRlMiwgITEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocy5zdG10ID09PSBYICYmIChzLmlkID09PSBDLlNUQVJUX05PREUgPyAocy5pZCA9IGUuaWQgKyAoYSA/IFwiX3N0YXJ0XCIgOiBcIl9lbmRcIiksIHMuc3RhcnQgPSBhKSA6IHMuaWQgPSBzLmlkLnRyaW0oKSksIHMuc3RtdCAhPT0gSyAmJiBzLnN0bXQgIT09IFggfHwgIXMuZG9jKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHIgPSBbXTtcbiAgICBsZXQgaCA9IFtdO1xuICAgIGZvciAoY29uc3QgZCBvZiBzLmRvYylcbiAgICAgIGlmIChkLnR5cGUgPT09IEd0KSB7XG4gICAgICAgIGNvbnN0IFMgPSBwdChkKTtcbiAgICAgICAgUy5kb2MgPSBwdChoKSwgci5wdXNoKFMpLCBoID0gW107XG4gICAgICB9IGVsc2VcbiAgICAgICAgaC5wdXNoKGQpO1xuICAgIGlmIChyLmxlbmd0aCA+IDAgJiYgaC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBkID0ge1xuICAgICAgICBzdG10OiBYLFxuICAgICAgICBpZDogaGUoKSxcbiAgICAgICAgdHlwZTogXCJkaXZpZGVyXCIsXG4gICAgICAgIGRvYzogcHQoaClcbiAgICAgIH07XG4gICAgICByLnB1c2gocHQoZCkpLCBzLmRvYyA9IHI7XG4gICAgfVxuICAgIHMuZG9jLmZvckVhY2goKGQpID0+IHRoaXMuZG9jVHJhbnNsYXRvcihzLCBkLCAhMCkpO1xuICB9XG4gIGdldFJvb3REb2NWMigpIHtcbiAgICByZXR1cm4gdGhpcy5kb2NUcmFuc2xhdG9yKFxuICAgICAgeyBpZDogSywgc3RtdDogSyB9LFxuICAgICAgeyBpZDogSywgc3RtdDogSywgZG9jOiB0aGlzLnJvb3REb2MgfSxcbiAgICAgICEwXG4gICAgKSwgeyBpZDogSywgZG9jOiB0aGlzLnJvb3REb2MgfTtcbiAgfVxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIGJ5IHBhcnNlciB3aGVuIGEgbm9kZSBkZWZpbml0aW9uIGhhcyBiZWVuIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gZGVzY3IgLSBkZXNjcmlwdGlvbiBmb3IgdGhlIHN0YXRlLiBDYW4gYmUgYSBzdHJpbmcgb3IgYSBsaXN0IG9yIHN0cmluZ3NcbiAgICogQHBhcmFtIGNsYXNzZXMgLSBjbGFzcyBzdHlsZXMgdG8gYXBwbHkgdG8gdGhpcyBzdGF0ZS4gQ2FuIGJlIGEgc3RyaW5nICgxIHN0eWxlKSBvciBhbiBhcnJheSBvZiBzdHlsZXMuIElmIGl0J3MganVzdCAxIGNsYXNzLCBjb252ZXJ0IGl0IHRvIGFuIGFycmF5IG9mIHRoYXQgMSBjbGFzcy5cbiAgICogQHBhcmFtIHN0eWxlcyAtIHN0eWxlcyB0byBhcHBseSB0byB0aGlzIHN0YXRlLiBDYW4gYmUgYSBzdHJpbmcgKDEgc3R5bGUpIG9yIGFuIGFycmF5IG9mIHN0eWxlcy4gSWYgaXQncyBqdXN0IDEgc3R5bGUsIGNvbnZlcnQgaXQgdG8gYW4gYXJyYXkgb2YgdGhhdCAxIHN0eWxlLlxuICAgKiBAcGFyYW0gdGV4dFN0eWxlcyAtIHRleHQgc3R5bGVzIHRvIGFwcGx5IHRvIHRoaXMgc3RhdGUuIENhbiBiZSBhIHN0cmluZyAoMSB0ZXh0IHRlc3QpIG9yIGFuIGFycmF5IG9mIHRleHQgc3R5bGVzLiBJZiBpdCdzIGp1c3QgMSB0ZXh0IHN0eWxlLCBjb252ZXJ0IGl0IHRvIGFuIGFycmF5IG9mIHRoYXQgMSB0ZXh0IHN0eWxlLlxuICAgKi9cbiAgYWRkU3RhdGUoZSwgcyA9IHR0LCBhID0gdm9pZCAwLCByID0gdm9pZCAwLCBoID0gdm9pZCAwLCBkID0gdm9pZCAwLCBTID0gdm9pZCAwLCBmID0gdm9pZCAwKSB7XG4gICAgY29uc3QgVCA9IGU/LnRyaW0oKTtcbiAgICBpZiAoIXRoaXMuY3VycmVudERvY3VtZW50LnN0YXRlcy5oYXMoVCkpXG4gICAgICBiLmluZm8oXCJBZGRpbmcgc3RhdGUgXCIsIFQsIHIpLCB0aGlzLmN1cnJlbnREb2N1bWVudC5zdGF0ZXMuc2V0KFQsIHtcbiAgICAgICAgc3RtdDogWCxcbiAgICAgICAgaWQ6IFQsXG4gICAgICAgIGRlc2NyaXB0aW9uczogW10sXG4gICAgICAgIHR5cGU6IHMsXG4gICAgICAgIGRvYzogYSxcbiAgICAgICAgbm90ZTogaCxcbiAgICAgICAgY2xhc3NlczogW10sXG4gICAgICAgIHN0eWxlczogW10sXG4gICAgICAgIHRleHRTdHlsZXM6IFtdXG4gICAgICB9KTtcbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IF8gPSB0aGlzLmN1cnJlbnREb2N1bWVudC5zdGF0ZXMuZ2V0KFQpO1xuICAgICAgaWYgKCFfKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0YXRlIG5vdCBmb3VuZDogJHtUfWApO1xuICAgICAgXy5kb2MgfHwgKF8uZG9jID0gYSksIF8udHlwZSB8fCAoXy50eXBlID0gcyk7XG4gICAgfVxuICAgIGlmIChyICYmIChiLmluZm8oXCJTZXR0aW5nIHN0YXRlIGRlc2NyaXB0aW9uXCIsIFQsIHIpLCAoQXJyYXkuaXNBcnJheShyKSA/IHIgOiBbcl0pLmZvckVhY2goKG0pID0+IHRoaXMuYWRkRGVzY3JpcHRpb24oVCwgbS50cmltKCkpKSksIGgpIHtcbiAgICAgIGNvbnN0IF8gPSB0aGlzLmN1cnJlbnREb2N1bWVudC5zdGF0ZXMuZ2V0KFQpO1xuICAgICAgaWYgKCFfKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0YXRlIG5vdCBmb3VuZDogJHtUfWApO1xuICAgICAgXy5ub3RlID0gaCwgXy5ub3RlLnRleHQgPSBVLnNhbml0aXplVGV4dChfLm5vdGUudGV4dCwgdygpKTtcbiAgICB9XG4gICAgZCAmJiAoYi5pbmZvKFwiU2V0dGluZyBzdGF0ZSBjbGFzc2VzXCIsIFQsIGQpLCAoQXJyYXkuaXNBcnJheShkKSA/IGQgOiBbZF0pLmZvckVhY2goKG0pID0+IHRoaXMuc2V0Q3NzQ2xhc3MoVCwgbS50cmltKCkpKSksIFMgJiYgKGIuaW5mbyhcIlNldHRpbmcgc3RhdGUgc3R5bGVzXCIsIFQsIFMpLCAoQXJyYXkuaXNBcnJheShTKSA/IFMgOiBbU10pLmZvckVhY2goKG0pID0+IHRoaXMuc2V0U3R5bGUoVCwgbS50cmltKCkpKSksIGYgJiYgKGIuaW5mbyhcIlNldHRpbmcgc3RhdGUgc3R5bGVzXCIsIFQsIFMpLCAoQXJyYXkuaXNBcnJheShmKSA/IGYgOiBbZl0pLmZvckVhY2goKG0pID0+IHRoaXMuc2V0VGV4dFN0eWxlKFQsIG0udHJpbSgpKSkpO1xuICB9XG4gIGNsZWFyKGUpIHtcbiAgICB0aGlzLm5vZGVzID0gW10sIHRoaXMuZWRnZXMgPSBbXSwgdGhpcy5kb2N1bWVudHMgPSB7IHJvb3Q6IEZ0KCkgfSwgdGhpcy5jdXJyZW50RG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50cy5yb290LCB0aGlzLnN0YXJ0RW5kQ291bnQgPSAwLCB0aGlzLmNsYXNzZXMgPSBQdCgpLCBlIHx8ICh0aGlzLmxpbmtzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgdWUoKSk7XG4gIH1cbiAgZ2V0U3RhdGUoZSkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnREb2N1bWVudC5zdGF0ZXMuZ2V0KGUpO1xuICB9XG4gIGdldFN0YXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RG9jdW1lbnQuc3RhdGVzO1xuICB9XG4gIGxvZ0RvY3VtZW50cygpIHtcbiAgICBiLmluZm8oXCJEb2N1bWVudHMgPSBcIiwgdGhpcy5kb2N1bWVudHMpO1xuICB9XG4gIGdldFJlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RG9jdW1lbnQucmVsYXRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xpY2thYmxlIGxpbmsgdG8gYSBzdGF0ZS5cbiAgICovXG4gIGFkZExpbmsoZSwgcywgYSkge1xuICAgIHRoaXMubGlua3Muc2V0KGUsIHsgdXJsOiBzLCB0b29sdGlwOiBhIH0pLCBiLndhcm4oXCJBZGRpbmcgbGlua1wiLCBlLCBzLCBhKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGFsbCByZWdpc3RlcmVkIGxpbmtzLlxuICAgKi9cbiAgZ2V0TGlua3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlua3M7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBpZCBpcyBhIHN0YXJ0IG5vZGUgKCBbKl0gKSwgdGhlbiByZXR1cm4gYSBuZXcgaWQgY29uc3RydWN0ZWQgZnJvbVxuICAgKiB0aGUgc3RhcnQgbm9kZSBuYW1lIGFuZCB0aGUgY3VycmVudCBzdGFydCBub2RlIGNvdW50LlxuICAgKiBlbHNlIHJldHVybiB0aGUgZ2l2ZW4gaWRcbiAgICovXG4gIHN0YXJ0SWRJZk5lZWRlZChlID0gXCJcIikge1xuICAgIHJldHVybiBlID09PSBDLlNUQVJUX05PREUgPyAodGhpcy5zdGFydEVuZENvdW50KyssIGAke0MuU1RBUlRfVFlQRX0ke3RoaXMuc3RhcnRFbmRDb3VudH1gKSA6IGU7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBpZCBpcyBhIHN0YXJ0IG5vZGUgKCBbKl0gKSwgdGhlbiByZXR1cm4gdGhlIHN0YXJ0IHR5cGUgKCdzdGFydCcpXG4gICAqIGVsc2UgcmV0dXJuIHRoZSBnaXZlbiB0eXBlXG4gICAqL1xuICBzdGFydFR5cGVJZk5lZWRlZChlID0gXCJcIiwgcyA9IHR0KSB7XG4gICAgcmV0dXJuIGUgPT09IEMuU1RBUlRfTk9ERSA/IEMuU1RBUlRfVFlQRSA6IHM7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBpZCBpcyBhbiBlbmQgbm9kZSAoIFsqXSApLCB0aGVuIHJldHVybiBhIG5ldyBpZCBjb25zdHJ1Y3RlZCBmcm9tXG4gICAqIHRoZSBlbmQgbm9kZSBuYW1lIGFuZCB0aGUgY3VycmVudCBzdGFydF9lbmQgbm9kZSBjb3VudC5cbiAgICogZWxzZSByZXR1cm4gdGhlIGdpdmVuIGlkXG4gICAqL1xuICBlbmRJZElmTmVlZGVkKGUgPSBcIlwiKSB7XG4gICAgcmV0dXJuIGUgPT09IEMuRU5EX05PREUgPyAodGhpcy5zdGFydEVuZENvdW50KyssIGAke0MuRU5EX1RZUEV9JHt0aGlzLnN0YXJ0RW5kQ291bnR9YCkgOiBlO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgaWQgaXMgYW4gZW5kIG5vZGUgKCBbKl0gKSwgdGhlbiByZXR1cm4gdGhlIGVuZCB0eXBlXG4gICAqIGVsc2UgcmV0dXJuIHRoZSBnaXZlbiB0eXBlXG4gICAqXG4gICAqL1xuICBlbmRUeXBlSWZOZWVkZWQoZSA9IFwiXCIsIHMgPSB0dCkge1xuICAgIHJldHVybiBlID09PSBDLkVORF9OT0RFID8gQy5FTkRfVFlQRSA6IHM7XG4gIH1cbiAgYWRkUmVsYXRpb25PYmpzKGUsIHMsIGEgPSBcIlwiKSB7XG4gICAgY29uc3QgciA9IHRoaXMuc3RhcnRJZElmTmVlZGVkKGUuaWQudHJpbSgpKSwgaCA9IHRoaXMuc3RhcnRUeXBlSWZOZWVkZWQoZS5pZC50cmltKCksIGUudHlwZSksIGQgPSB0aGlzLnN0YXJ0SWRJZk5lZWRlZChzLmlkLnRyaW0oKSksIFMgPSB0aGlzLnN0YXJ0VHlwZUlmTmVlZGVkKHMuaWQudHJpbSgpLCBzLnR5cGUpO1xuICAgIHRoaXMuYWRkU3RhdGUoXG4gICAgICByLFxuICAgICAgaCxcbiAgICAgIGUuZG9jLFxuICAgICAgZS5kZXNjcmlwdGlvbixcbiAgICAgIGUubm90ZSxcbiAgICAgIGUuY2xhc3NlcyxcbiAgICAgIGUuc3R5bGVzLFxuICAgICAgZS50ZXh0U3R5bGVzXG4gICAgKSwgdGhpcy5hZGRTdGF0ZShcbiAgICAgIGQsXG4gICAgICBTLFxuICAgICAgcy5kb2MsXG4gICAgICBzLmRlc2NyaXB0aW9uLFxuICAgICAgcy5ub3RlLFxuICAgICAgcy5jbGFzc2VzLFxuICAgICAgcy5zdHlsZXMsXG4gICAgICBzLnRleHRTdHlsZXNcbiAgICApLCB0aGlzLmN1cnJlbnREb2N1bWVudC5yZWxhdGlvbnMucHVzaCh7XG4gICAgICBpZDE6IHIsXG4gICAgICBpZDI6IGQsXG4gICAgICByZWxhdGlvblRpdGxlOiBVLnNhbml0aXplVGV4dChhLCB3KCkpXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIHJlbGF0aW9uIGJldHdlZW4gdHdvIGl0ZW1zLiAgVGhlIGl0ZW1zIG1heSBiZSBmdWxsIG9iamVjdHMgb3IganVzdCB0aGUgc3RyaW5nIGlkIG9mIGEgc3RhdGUuXG4gICAqL1xuICBhZGRSZWxhdGlvbihlLCBzLCBhKSB7XG4gICAgaWYgKHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHMgPT0gXCJvYmplY3RcIilcbiAgICAgIHRoaXMuYWRkUmVsYXRpb25PYmpzKGUsIHMsIGEpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBlID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHMgPT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgciA9IHRoaXMuc3RhcnRJZElmTmVlZGVkKGUudHJpbSgpKSwgaCA9IHRoaXMuc3RhcnRUeXBlSWZOZWVkZWQoZSksIGQgPSB0aGlzLmVuZElkSWZOZWVkZWQocy50cmltKCkpLCBTID0gdGhpcy5lbmRUeXBlSWZOZWVkZWQocyk7XG4gICAgICB0aGlzLmFkZFN0YXRlKHIsIGgpLCB0aGlzLmFkZFN0YXRlKGQsIFMpLCB0aGlzLmN1cnJlbnREb2N1bWVudC5yZWxhdGlvbnMucHVzaCh7XG4gICAgICAgIGlkMTogcixcbiAgICAgICAgaWQyOiBkLFxuICAgICAgICByZWxhdGlvblRpdGxlOiBhID8gVS5zYW5pdGl6ZVRleHQoYSwgdygpKSA6IHZvaWQgMFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFkZERlc2NyaXB0aW9uKGUsIHMpIHtcbiAgICBjb25zdCBhID0gdGhpcy5jdXJyZW50RG9jdW1lbnQuc3RhdGVzLmdldChlKSwgciA9IHMuc3RhcnRzV2l0aChcIjpcIikgPyBzLnJlcGxhY2UoXCI6XCIsIFwiXCIpLnRyaW0oKSA6IHM7XG4gICAgYT8uZGVzY3JpcHRpb25zPy5wdXNoKFUuc2FuaXRpemVUZXh0KHIsIHcoKSkpO1xuICB9XG4gIGNsZWFudXBMYWJlbChlKSB7XG4gICAgcmV0dXJuIGUuc3RhcnRzV2l0aChcIjpcIikgPyBlLnNsaWNlKDIpLnRyaW0oKSA6IGUudHJpbSgpO1xuICB9XG4gIGdldERpdmlkZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpZGVyQ250KyssIGBkaXZpZGVyLWlkLSR7dGhpcy5kaXZpZGVyQ250fWA7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBwYXJzZXIgY29tZXMgYWNyb3NzIGEgKHN0eWxlKSBjbGFzcyBkZWZpbml0aW9uXG4gICAqIEBleGFtcGxlIGNsYXNzRGVmIG15LXN0eWxlIGZpbGw6I2Y5NjtcbiAgICpcbiAgICogQHBhcmFtIGlkIC0gdGhlIGlkIG9mIHRoaXMgKHN0eWxlKSBjbGFzc1xuICAgKiBAcGFyYW0gc3R5bGVBdHRyaWJ1dGVzIC0gdGhlIHN0cmluZyB3aXRoIDEgb3IgbW9yZSBzdHlsZSBhdHRyaWJ1dGVzIChlYWNoIHNlcGFyYXRlZCBieSBhIGNvbW1hKVxuICAgKi9cbiAgYWRkU3R5bGVDbGFzcyhlLCBzID0gXCJcIikge1xuICAgIHRoaXMuY2xhc3Nlcy5oYXMoZSkgfHwgdGhpcy5jbGFzc2VzLnNldChlLCB7IGlkOiBlLCBzdHlsZXM6IFtdLCB0ZXh0U3R5bGVzOiBbXSB9KTtcbiAgICBjb25zdCBhID0gdGhpcy5jbGFzc2VzLmdldChlKTtcbiAgICBzICYmIGEgJiYgcy5zcGxpdChDLlNUWUxFQ0xBU1NfU0VQKS5mb3JFYWNoKChyKSA9PiB7XG4gICAgICBjb25zdCBoID0gci5yZXBsYWNlKC8oW147XSopOy8sIFwiJDFcIikudHJpbSgpO1xuICAgICAgaWYgKFJlZ0V4cChDLkNPTE9SX0tFWVdPUkQpLmV4ZWMocikpIHtcbiAgICAgICAgY29uc3QgUyA9IGgucmVwbGFjZShDLkZJTExfS0VZV09SRCwgQy5CR19GSUxMKS5yZXBsYWNlKEMuQ09MT1JfS0VZV09SRCwgQy5GSUxMX0tFWVdPUkQpO1xuICAgICAgICBhLnRleHRTdHlsZXMucHVzaChTKTtcbiAgICAgIH1cbiAgICAgIGEuc3R5bGVzLnB1c2goaCk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0Q2xhc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2VzO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgYSAoc3R5bGUpIGNsYXNzIG9yIGNzcyBjbGFzcyB0byBhIHN0YXRlIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgKiBJZiB0aGUgc3RhdGUgaXNuJ3QgYWxyZWFkeSBpbiB0aGUgbGlzdCBvZiBrbm93biBzdGF0ZXMsIGFkZCBpdC5cbiAgICogTWlnaHQgYmUgY2FsbGVkIGJ5IHBhcnNlciB3aGVuIGEgc3R5bGUgY2xhc3Mgb3IgQ1NTIGNsYXNzIHNob3VsZCBiZSBhcHBsaWVkIHRvIGEgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIGl0ZW1JZHMgLSBUaGUgaWQgb3IgYSBsaXN0IG9mIGlkcyBvZiB0aGUgaXRlbShzKSB0byBhcHBseSB0aGUgY3NzIGNsYXNzIHRvXG4gICAqIEBwYXJhbSBjc3NDbGFzc05hbWUgLSBDU1MgY2xhc3MgbmFtZVxuICAgKi9cbiAgc2V0Q3NzQ2xhc3MoZSwgcykge1xuICAgIGUuc3BsaXQoXCIsXCIpLmZvckVhY2goKGEpID0+IHtcbiAgICAgIGxldCByID0gdGhpcy5nZXRTdGF0ZShhKTtcbiAgICAgIGlmICghcikge1xuICAgICAgICBjb25zdCBoID0gYS50cmltKCk7XG4gICAgICAgIHRoaXMuYWRkU3RhdGUoaCksIHIgPSB0aGlzLmdldFN0YXRlKGgpO1xuICAgICAgfVxuICAgICAgcj8uY2xhc3Nlcz8ucHVzaChzKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQWRkIGEgc3R5bGUgdG8gYSBzdGF0ZSB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICogQGV4YW1wbGUgc3R5bGUgc3RhdGVJZCBmaWxsOiNmOWYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjRweFxuICAgKiAgIHdoZXJlICdzdHlsZScgaXMgdGhlIGtleXdvcmRcbiAgICogICBzdGF0ZUlkIGlzIHRoZSBpZCBvZiBhIHN0YXRlXG4gICAqICAgdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyBpcyB0aGUgc3R5bGVUZXh0IChhbGwgb2YgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgc3RhdGUpXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtSWQgLSBUaGUgaWQgb2YgaXRlbSB0byBhcHBseSB0aGUgc3R5bGUgdG9cbiAgICogQHBhcmFtIHN0eWxlVGV4dCAtIHRoZSB0ZXh0IG9mIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgc3R5bGVcbiAgICovXG4gIHNldFN0eWxlKGUsIHMpIHtcbiAgICB0aGlzLmdldFN0YXRlKGUpPy5zdHlsZXM/LnB1c2gocyk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIHRleHQgc3R5bGUgdG8gYSBzdGF0ZSB3aXRoIHRoZSBnaXZlbiBpZFxuICAgKlxuICAgKiBAcGFyYW0gaXRlbUlkIC0gVGhlIGlkIG9mIGl0ZW0gdG8gYXBwbHkgdGhlIGNzcyBjbGFzcyB0b1xuICAgKiBAcGFyYW0gY3NzQ2xhc3NOYW1lIC0gQ1NTIGNsYXNzIG5hbWVcbiAgICovXG4gIHNldFRleHRTdHlsZShlLCBzKSB7XG4gICAgdGhpcy5nZXRTdGF0ZShlKT8udGV4dFN0eWxlcz8ucHVzaChzKTtcbiAgfVxuICAvKipcbiAgICogRmluZHMgdGhlIGRpcmVjdGlvbiBzdGF0ZW1lbnQgaW4gdGhlIHJvb3QgZG9jdW1lbnQuXG4gICAqIEByZXR1cm5zIHRoZSBkaXJlY3Rpb24gc3RhdGVtZW50IGlmIHByZXNlbnRcbiAgICovXG4gIGdldERpcmVjdGlvblN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290RG9jLmZpbmQoKGUpID0+IGUuc3RtdCA9PT0gT3QpO1xuICB9XG4gIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREaXJlY3Rpb25TdGF0ZW1lbnQoKT8udmFsdWUgPz8gZGU7XG4gIH1cbiAgc2V0RGlyZWN0aW9uKGUpIHtcbiAgICBjb25zdCBzID0gdGhpcy5nZXREaXJlY3Rpb25TdGF0ZW1lbnQoKTtcbiAgICBzID8gcy52YWx1ZSA9IGUgOiB0aGlzLnJvb3REb2MudW5zaGlmdCh7IHN0bXQ6IE90LCB2YWx1ZTogZSB9KTtcbiAgfVxuICB0cmltQ29sb24oZSkge1xuICAgIHJldHVybiBlLnN0YXJ0c1dpdGgoXCI6XCIpID8gZS5zbGljZSgxKS50cmltKCkgOiBlLnRyaW0oKTtcbiAgfVxuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGUgPSB3KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVzOiB0aGlzLm5vZGVzLFxuICAgICAgZWRnZXM6IHRoaXMuZWRnZXMsXG4gICAgICBvdGhlcjoge30sXG4gICAgICBjb25maWc6IGUsXG4gICAgICBkaXJlY3Rpb246IEt0KHRoaXMuZ2V0Um9vdERvY1YyKCkpXG4gICAgfTtcbiAgfVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHcoKS5zdGF0ZTtcbiAgfVxufSwgdShqLCBcIlN0YXRlREJcIiksIGoucmVsYXRpb25UeXBlID0ge1xuICBBR0dSRUdBVElPTjogMCxcbiAgRVhURU5TSU9OOiAxLFxuICBDT01QT1NJVElPTjogMixcbiAgREVQRU5ERU5DWTogM1xufSwgaiksIFBlID0gLyogQF9fUFVSRV9fICovIHUoKHQpID0+IGBcbmRlZnMgI3N0YXRlZGlhZ3JhbS1iYXJiRW5kIHtcbiAgICBmaWxsOiAke3QudHJhbnNpdGlvbkNvbG9yfTtcbiAgICBzdHJva2U6ICR7dC50cmFuc2l0aW9uQ29sb3J9O1xuICB9XG5nLnN0YXRlR3JvdXAgdGV4dCB7XG4gIGZpbGw6ICR7dC5ub2RlQm9yZGVyfTtcbiAgc3Ryb2tlOiBub25lO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5nLnN0YXRlR3JvdXAgdGV4dCB7XG4gIGZpbGw6ICR7dC50ZXh0Q29sb3J9O1xuICBzdHJva2U6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcblxufVxuZy5zdGF0ZUdyb3VwIC5zdGF0ZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZpbGw6ICR7dC5zdGF0ZUxhYmVsQ29sb3J9O1xufVxuXG5nLnN0YXRlR3JvdXAgcmVjdCB7XG4gIGZpbGw6ICR7dC5tYWluQmtnfTtcbiAgc3Ryb2tlOiAke3Qubm9kZUJvcmRlcn07XG59XG5cbmcuc3RhdGVHcm91cCBsaW5lIHtcbiAgc3Ryb2tlOiAke3QubGluZUNvbG9yfTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4udHJhbnNpdGlvbiB7XG4gIHN0cm9rZTogJHt0LnRyYW5zaXRpb25Db2xvcn07XG4gIHN0cm9rZS13aWR0aDogMTtcbiAgZmlsbDogbm9uZTtcbn1cblxuLnN0YXRlR3JvdXAgLmNvbXBvc2l0IHtcbiAgZmlsbDogJHt0LmJhY2tncm91bmR9O1xuICBib3JkZXItYm90dG9tOiAxcHhcbn1cblxuLnN0YXRlR3JvdXAgLmFsdC1jb21wb3NpdCB7XG4gIGZpbGw6ICNlMGUwZTA7XG4gIGJvcmRlci1ib3R0b206IDFweFxufVxuXG4uc3RhdGUtbm90ZSB7XG4gIHN0cm9rZTogJHt0Lm5vdGVCb3JkZXJDb2xvcn07XG4gIGZpbGw6ICR7dC5ub3RlQmtnQ29sb3J9O1xuXG4gIHRleHQge1xuICAgIGZpbGw6ICR7dC5ub3RlVGV4dENvbG9yfTtcbiAgICBzdHJva2U6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5cbi5zdGF0ZUxhYmVsIC5ib3gge1xuICBzdHJva2U6IG5vbmU7XG4gIHN0cm9rZS13aWR0aDogMDtcbiAgZmlsbDogJHt0Lm1haW5Ca2d9O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5lZGdlTGFiZWwgLmxhYmVsIHJlY3Qge1xuICBmaWxsOiAke3QubGFiZWxCYWNrZ3JvdW5kQ29sb3J9O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZWRnZUxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0LmVkZ2VMYWJlbEJhY2tncm91bmR9O1xuICBwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3QuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gIH1cbiAgcmVjdCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dC5lZGdlTGFiZWxCYWNrZ3JvdW5kfTtcbiAgICBmaWxsOiAke3QuZWRnZUxhYmVsQmFja2dyb3VuZH07XG4gIH1cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVkZ2VMYWJlbCAubGFiZWwgdGV4dCB7XG4gIGZpbGw6ICR7dC50cmFuc2l0aW9uTGFiZWxDb2xvciB8fCB0LnRlcnRpYXJ5VGV4dENvbG9yfTtcbn1cbi5sYWJlbCBkaXYgLmVkZ2VMYWJlbCB7XG4gIGNvbG9yOiAke3QudHJhbnNpdGlvbkxhYmVsQ29sb3IgfHwgdC50ZXJ0aWFyeVRleHRDb2xvcn07XG59XG5cbi5zdGF0ZUxhYmVsIHRleHQge1xuICBmaWxsOiAke3Quc3RhdGVMYWJlbENvbG9yfTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5vZGUgY2lyY2xlLnN0YXRlLXN0YXJ0IHtcbiAgZmlsbDogJHt0LnNwZWNpYWxTdGF0ZUNvbG9yfTtcbiAgc3Ryb2tlOiAke3Quc3BlY2lhbFN0YXRlQ29sb3J9O1xufVxuXG4ubm9kZSAuZm9yay1qb2luIHtcbiAgZmlsbDogJHt0LnNwZWNpYWxTdGF0ZUNvbG9yfTtcbiAgc3Ryb2tlOiAke3Quc3BlY2lhbFN0YXRlQ29sb3J9O1xufVxuXG4ubm9kZSBjaXJjbGUuc3RhdGUtZW5kIHtcbiAgZmlsbDogJHt0LmlubmVyRW5kQmFja2dyb3VuZH07XG4gIHN0cm9rZTogJHt0LmJhY2tncm91bmR9O1xuICBzdHJva2Utd2lkdGg6IDEuNVxufVxuLmVuZC1zdGF0ZS1pbm5lciB7XG4gIGZpbGw6ICR7dC5jb21wb3NpdGVCYWNrZ3JvdW5kIHx8IHQuYmFja2dyb3VuZH07XG4gIC8vIHN0cm9rZTogJHt0LmJhY2tncm91bmR9O1xuICBzdHJva2Utd2lkdGg6IDEuNVxufVxuXG4ubm9kZSByZWN0IHtcbiAgZmlsbDogJHt0LnN0YXRlQmtnIHx8IHQubWFpbkJrZ307XG4gIHN0cm9rZTogJHt0LnN0YXRlQm9yZGVyIHx8IHQubm9kZUJvcmRlcn07XG4gIHN0cm9rZS13aWR0aDogMXB4O1xufVxuLm5vZGUgcG9seWdvbiB7XG4gIGZpbGw6ICR7dC5tYWluQmtnfTtcbiAgc3Ryb2tlOiAke3Quc3RhdGVCb3JkZXIgfHwgdC5ub2RlQm9yZGVyfTs7XG4gIHN0cm9rZS13aWR0aDogMXB4O1xufVxuI3N0YXRlZGlhZ3JhbS1iYXJiRW5kIHtcbiAgZmlsbDogJHt0LmxpbmVDb2xvcn07XG59XG5cbi5zdGF0ZWRpYWdyYW0tY2x1c3RlciByZWN0IHtcbiAgZmlsbDogJHt0LmNvbXBvc2l0ZVRpdGxlQmFja2dyb3VuZH07XG4gIHN0cm9rZTogJHt0LnN0YXRlQm9yZGVyIHx8IHQubm9kZUJvcmRlcn07XG4gIHN0cm9rZS13aWR0aDogMXB4O1xufVxuXG4uY2x1c3Rlci1sYWJlbCwgLm5vZGVMYWJlbCB7XG4gIGNvbG9yOiAke3Quc3RhdGVMYWJlbENvbG9yfTtcbiAgLy8gbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zdGF0ZWRpYWdyYW0tY2x1c3RlciByZWN0Lm91dGVyIHtcbiAgcng6IDVweDtcbiAgcnk6IDVweDtcbn1cbi5zdGF0ZWRpYWdyYW0tc3RhdGUgLmRpdmlkZXIge1xuICBzdHJva2U6ICR7dC5zdGF0ZUJvcmRlciB8fCB0Lm5vZGVCb3JkZXJ9O1xufVxuXG4uc3RhdGVkaWFncmFtLXN0YXRlIC50aXRsZS1zdGF0ZSB7XG4gIHJ4OiA1cHg7XG4gIHJ5OiA1cHg7XG59XG4uc3RhdGVkaWFncmFtLWNsdXN0ZXIuc3RhdGVkaWFncmFtLWNsdXN0ZXIgLmlubmVyIHtcbiAgZmlsbDogJHt0LmNvbXBvc2l0ZUJhY2tncm91bmQgfHwgdC5iYWNrZ3JvdW5kfTtcbn1cbi5zdGF0ZWRpYWdyYW0tY2x1c3Rlci5zdGF0ZWRpYWdyYW0tY2x1c3Rlci1hbHQgLmlubmVyIHtcbiAgZmlsbDogJHt0LmFsdEJhY2tncm91bmQgPyB0LmFsdEJhY2tncm91bmQgOiBcIiNlZmVmZWZcIn07XG59XG5cbi5zdGF0ZWRpYWdyYW0tY2x1c3RlciAuaW5uZXIge1xuICByeDowO1xuICByeTowO1xufVxuXG4uc3RhdGVkaWFncmFtLXN0YXRlIHJlY3QuYmFzaWMge1xuICByeDogNXB4O1xuICByeTogNXB4O1xufVxuLnN0YXRlZGlhZ3JhbS1zdGF0ZSByZWN0LmRpdmlkZXIge1xuICBzdHJva2UtZGFzaGFycmF5OiAxMCwxMDtcbiAgZmlsbDogJHt0LmFsdEJhY2tncm91bmQgPyB0LmFsdEJhY2tncm91bmQgOiBcIiNlZmVmZWZcIn07XG59XG5cbi5ub3RlLWVkZ2Uge1xuICBzdHJva2UtZGFzaGFycmF5OiA1O1xufVxuXG4uc3RhdGVkaWFncmFtLW5vdGUgcmVjdCB7XG4gIGZpbGw6ICR7dC5ub3RlQmtnQ29sb3J9O1xuICBzdHJva2U6ICR7dC5ub3RlQm9yZGVyQ29sb3J9O1xuICBzdHJva2Utd2lkdGg6IDFweDtcbiAgcng6IDA7XG4gIHJ5OiAwO1xufVxuLnN0YXRlZGlhZ3JhbS1ub3RlIHJlY3Qge1xuICBmaWxsOiAke3Qubm90ZUJrZ0NvbG9yfTtcbiAgc3Ryb2tlOiAke3Qubm90ZUJvcmRlckNvbG9yfTtcbiAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIHJ4OiAwO1xuICByeTogMDtcbn1cblxuLnN0YXRlZGlhZ3JhbS1ub3RlIHRleHQge1xuICBmaWxsOiAke3Qubm90ZVRleHRDb2xvcn07XG59XG5cbi5zdGF0ZWRpYWdyYW0tbm90ZSAubm9kZUxhYmVsIHtcbiAgY29sb3I6ICR7dC5ub3RlVGV4dENvbG9yfTtcbn1cbi5zdGF0ZWRpYWdyYW0gLmVkZ2VMYWJlbCB7XG4gIGNvbG9yOiByZWQ7IC8vICR7dC5ub3RlVGV4dENvbG9yfTtcbn1cblxuI2RlcGVuZGVuY3lTdGFydCwgI2RlcGVuZGVuY3lFbmQge1xuICBmaWxsOiAke3QubGluZUNvbG9yfTtcbiAgc3Ryb2tlOiAke3QubGluZUNvbG9yfTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4uc3RhdGVkaWFncmFtVGl0bGVUZXh0IHtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmaWxsOiAke3QudGV4dENvbG9yfTtcbn1cbmAsIFwiZ2V0U3R5bGVzXCIpLCBVZSA9IFBlO1xuZXhwb3J0IHtcbiAgTWUgYXMgUyxcbiAgQmUgYXMgYSxcbiAgVmUgYXMgYixcbiAgVWUgYXMgc1xufTtcbiJdLCJuYW1lcyI6WyJ1IiwiZCIsInAiLCJGIiwiZnQiLCJiIiwidyIsInRlIiwic2UiLCJpZSIsImVlIiwiVSIsInJlIiwiYWUiLCJuZSIsIm9lIiwibGUiLCJjZSIsImhlIiwidWUiXSwibWFwcGluZ3MiOiI7OztBQUdBLElBQUksTUFBTSxXQUFXO0FBQ25CLE1BQUksSUFBb0JBLGtCQUFFLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUM3QyxTQUFLLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxRQUFRLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUc7QUFDbEQsV0FBTztBQUFBLEVBQ1QsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR0MsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBR0MsTUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFB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LGNBQWMsSUFBSSxtQkFBbUIsSUFBSSxXQUFXLElBQUksV0FBVTtBQUFBLElBQ3R5QixjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMs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LENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUMsR0FBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBQyxHQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBR0MsSUFBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSUMsS0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSUEsS0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUUsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHRCxJQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSUMsS0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBQyxHQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUksRUFBRSxHQUFHLEdBQUcsR0FBR0QsSUFBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUlDLEtBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVB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RSxHQUFJLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxHQUFHLFdBQVcsTUFBRSxHQUFJLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxvQkFBb0IsRUFBRSxPQUFPLENBQUEsR0FBSSxXQUFXLE1BQUUsR0FBSSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsRUFBRSxHQUFHLFdBQVcsTUFBRSxHQUFJLFdBQVcsRUFBRSxPQUFPLENBQUEsR0FBSSxXQUFXLE1BQUUsR0FBSSxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxhQUFhLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxVQUFVLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLFdBQVcsTUFBRSxHQUFJLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxPQUFPLEVBQUUsT0FBTyxDQUFBLEdBQUksV0FBVyxNQUFFLEdBQUksVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsV0FBVyxNQUFFLEdBQUksY0FBYyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxZQUFZLEVBQUUsT0FBTyxDQUFBLEdBQUksV0FBVyxNQUFFLEdBQUksT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsV0FBVyxNQUFFLEdBQUksSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxXQUFXLE1BQUUsR0FBSSxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLFdBQVcsS0FBRSxFQUFFO0FBQUEsSUFDLzRDO0FBQ0ksV0FBTztBQUFBLEVBQ1QsR0FBQztBQUNELEtBQUcsUUFBUTtBQUNYLFdBQVMsS0FBSztBQUNaLFNBQUssS0FBSyxDQUFBO0FBQUEsRUFDWjtBQUNBLFNBQU9BLEVBQUUsSUFBSSxRQUFRLEdBQUcsR0FBRyxZQUFZLElBQUksR0FBRyxTQUFTLElBQUksSUFBSSxHQUFFO0FBQ25FLEdBQUM7QUFDRCxHQUFHLFNBQVM7QUFDVCxJQUFDLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssT0FBTyxJQUFJLFNBQVMsSUFBSSxRQUFRLEtBQUssWUFBWSxLQUFLLFlBQVksS0FBSyxTQUFTLEtBQUssY0FBYyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssYUFBYSxLQUFLLGNBQWMsS0FBSyxLQUFLLEtBQUssUUFBUSxLQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssaUJBQWlCLEtBQUssY0FBYyxLQUFLLFlBQVksS0FBSyxXQUFXLEtBQUssb0JBQW9CLEtBQUssUUFBUSxLQUFLLGFBQWEsS0FBSyxnQkFBZ0IsS0FBSyxTQUFTLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEtBQUssY0FBYyxLQUFLLFFBQVEsS0FBSyxhQUFhLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEtBQUssV0FBVyxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxLQUFLLGVBQWUsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksS0FBSyxVQUFVLEtBQUssUUFBUSxLQUFLLFNBQVMsS0FBSyxRQUFRLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEtBQXFCQSxrQkFBRSxDQUFDLEdBQUcsSUFBSSxPQUFPO0FBQ251QixNQUFJLENBQUMsRUFBRTtBQUNMLFdBQU87QUFDVCxNQUFJLElBQUk7QUFDUixhQUFXLEtBQUssRUFBRTtBQUNoQixNQUFFLFNBQVMsVUFBVSxJQUFJLEVBQUU7QUFDN0IsU0FBTztBQUNULEdBQUcsUUFBUSxHQUFHLEtBQXFCQSxrQkFBRSxTQUFTLEdBQUcsR0FBRztBQUNsRCxTQUFPLEVBQUUsR0FBRyxXQUFVO0FBQ3hCLEdBQUcsWUFBWSxHQUFHLEtBQXFCQSxrQkFBRSxlQUFlLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDbEVLLElBQUUsS0FBSyxPQUFPLEdBQUdBLEVBQUUsS0FBSyw4QkFBOEIsQ0FBQztBQUN2RCxRQUFNLEVBQUUsZUFBZSxHQUFHLE9BQU8sR0FBRyxRQUFRSixJQUFDLElBQUtLLEdBQUM7QUFDbkQsSUFBRSxHQUFHLFFBQVEsRUFBRSxHQUFHLGFBQVksQ0FBRTtBQUNoQyxRQUFNLElBQUksRUFBRSxHQUFHLFFBQU8sR0FBSSxJQUFJQyxFQUFHLEdBQUcsQ0FBQztBQUNyQyxJQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsa0JBQWtCTixLQUFHLEVBQUUsY0FBYyxHQUFHLGVBQWUsSUFBSSxFQUFFLGNBQWMsR0FBRyxlQUFlLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsWUFBWSxHQUFHLE1BQU1PLEdBQUcsR0FBRyxDQUFDO0FBQ3hLLFFBQU0sSUFBSTtBQUNWLE1BQUk7QUFDRixLQUFDLE9BQU8sRUFBRSxHQUFHLFlBQVksYUFBYSxFQUFFLEdBQUcsU0FBUSxJQUFxQixvQkFBSSxJQUFHLEdBQUksUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUNuRyxZQUFNLElBQUksT0FBTyxLQUFLLFdBQVcsSUFBSSxPQUFPLEdBQUcsTUFBTSxXQUFXLEVBQUUsS0FBSztBQUN2RSxVQUFJLENBQUMsR0FBRztBQUNOSCxVQUFFLEtBQUssMkNBQTJDLEtBQUssVUFBVSxDQUFDLENBQUM7QUFDbkU7QUFBQSxNQUNGO0FBQ0EsWUFBTUgsS0FBSSxFQUFFLEtBQUksR0FBSSxpQkFBaUIsR0FBRztBQUN4QyxVQUFJO0FBQ0osVUFBSUEsSUFBRyxRQUFRLENBQUMsTUFBTTtBQUNwQixVQUFFLGFBQWEsS0FBSSxNQUFPLE1BQU0sSUFBSTtBQUFBLE1BQ3RDLENBQUMsR0FBRyxDQUFDLEdBQUc7QUFDTkcsVUFBRSxLQUFLLHlDQUF5QyxDQUFDO0FBQ2pEO0FBQUEsTUFDRjtBQUNBLFlBQU0sSUFBSSxFQUFFO0FBQ1osVUFBSSxDQUFDLEdBQUc7QUFDTkEsVUFBRSxLQUFLLHVDQUF1QyxDQUFDO0FBQy9DO0FBQUEsTUFDRjtBQUNBLFlBQU0sSUFBSSxTQUFTLGdCQUFnQiw4QkFBOEIsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLFFBQVEsWUFBWSxFQUFFO0FBQ3ZHLFVBQUksRUFBRSxlQUFlLGdDQUFnQyxjQUFjLENBQUMsR0FBRyxFQUFFLGFBQWEsVUFBVSxRQUFRLEdBQUcsRUFBRSxTQUFTO0FBQ3BILGNBQU0sSUFBSSxFQUFFLFFBQVEsUUFBUSxZQUFZLEVBQUU7QUFDMUMsVUFBRSxhQUFhLFNBQVMsQ0FBQztBQUFBLE1BQzNCO0FBQ0EsUUFBRSxhQUFhLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUdBLEVBQUUsS0FBSyxtQ0FBbUMsR0FBRyxFQUFFLEdBQUc7QUFBQSxJQUM1RixDQUFDO0FBQUEsRUFDSCxTQUFTLEdBQUc7QUFDVkEsTUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQUEsRUFDakQ7QUFDQUksS0FBRztBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsSUFDQSxHQUFHLGtCQUFrQjtBQUFBLElBQ3JCLEVBQUUsR0FBRyxnQkFBZTtBQUFBLEVBQ3hCLEdBQUtDLElBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxlQUFlLElBQUU7QUFDdEMsR0FBRyxNQUFNLEdBQUcsS0FBSztBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUNWLEdBQUcsS0FBcUIsb0JBQUksSUFBRyxHQUFJLElBQUk7QUFDdkMsU0FBUyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSTtBQUN6QyxRQUFNLElBQUksTUFBTSxRQUFRLEVBQUUsU0FBUyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSztBQUNwRCxTQUFPLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUM1QjtBQUNBVixFQUFFLElBQUksWUFBWTtBQUNsQixJQUFJLEtBQXFCQSxrQkFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHQyxJQUFHLE1BQU07QUFDckRJLElBQUUsTUFBTSxTQUFTLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNO0FBQ3BDLFlBQVEsRUFBRSxNQUFJO0FBQUEsTUFDWixLQUFLO0FBQ0gsVUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBR0osSUFBRyxDQUFDO0FBQ3hCO0FBQUEsTUFDRixLQUFLO0FBQ0gsVUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBR0EsSUFBRyxDQUFDO0FBQ3hCO0FBQUEsTUFDRixLQUFLO0FBQ0g7QUFDRTtBQUFBLFlBQ0U7QUFBQSxZQUNBLEVBQUU7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQUE7QUFBQSxZQUNBO0FBQUEsVUFDWixHQUFhO0FBQUEsWUFDRDtBQUFBLFlBQ0EsRUFBRTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBQTtBQUFBLFlBQ0E7QUFBQSxVQUNaO0FBQ1UsZ0JBQU0sSUFBSTtBQUFBLFlBQ1IsSUFBSSxTQUFTO0FBQUEsWUFDYixPQUFPLEVBQUUsT0FBTztBQUFBLFlBQ2hCLEtBQUssRUFBRSxPQUFPO0FBQUEsWUFDZCxXQUFXO0FBQUEsWUFDWCxjQUFjO0FBQUEsWUFDZCxPQUFPO0FBQUEsWUFDUCxZQUFZO0FBQUEsWUFDWixPQUFPVSxHQUFFLGFBQWEsRUFBRSxlQUFlLElBQUlMLElBQUc7QUFBQSxZQUM5QyxnQkFBZ0I7QUFBQSxZQUNoQixVQUFVO0FBQUEsWUFDVixXQUFXO0FBQUEsWUFDWCxXQUFXO0FBQUEsWUFDWCxTQUFTO0FBQUEsWUFDVCxNQUFNTDtBQUFBLFVBQ2xCO0FBQ1UsWUFBRSxLQUFLLENBQUMsR0FBRztBQUFBLFFBQ2I7QUFDQTtBQUFBLElBQ1I7QUFBQSxFQUNFLENBQUM7QUFDSCxHQUFHLFVBQVUsR0FBRyxLQUFxQkQsa0JBQUUsQ0FBQyxHQUFHLElBQUksT0FBTztBQUNwRCxNQUFJLElBQUk7QUFDUixNQUFJLEVBQUU7QUFDSixlQUFXLEtBQUssRUFBRTtBQUNoQixRQUFFLFNBQVMsVUFBVSxJQUFJLEVBQUU7QUFDL0IsU0FBTztBQUNULEdBQUcsUUFBUTtBQUNYLFNBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUNsQixNQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxvQkFBb0IsRUFBRSxPQUFPO0FBQ2pEO0FBQ0YsSUFBRSxlQUFlLE1BQU0sUUFBUSxFQUFFLGlCQUFpQixNQUFNLEVBQUUsb0JBQW9CLENBQUEsSUFBSyxFQUFFLFdBQVcsTUFBTSxHQUFHLEVBQUUsUUFBUSxDQUFDLE1BQU07QUFDeEgsVUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQ2pCLFVBQU0sRUFBRSxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLElBQUksR0FBRyxFQUFFLE1BQU07QUFBQSxFQUN4RSxDQUFDO0FBQ0QsUUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtBQUNyQyxNQUFJLE9BQU8sT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUNwQztBQUNBQSxFQUFFLEdBQUcsb0JBQW9CO0FBQ3pCLFNBQVMsR0FBRyxHQUFHO0FBQ2IsU0FBTyxHQUFHLFNBQVMsS0FBSyxHQUFHLEtBQUs7QUFDbEM7QUFDQUEsRUFBRSxJQUFJLHNCQUFzQjtBQUM1QixTQUFTLEdBQUcsR0FBRztBQUNiLFNBQU8sR0FBRyxVQUFVLENBQUE7QUFDdEI7QUFDQUEsRUFBRSxJQUFJLHFCQUFxQjtBQUN4QixJQUFDLElBQW9CQSxrQkFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHQyxJQUFHLE1BQU07QUFDcEQsUUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUlLLEdBQUM7QUFDekQsTUFBSUQsRUFBRSxLQUFLLDBCQUEwQixHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sUUFBUTtBQUMzRCxRQUFJLElBQUk7QUFDUixNQUFFLFVBQVUsT0FBSyxJQUFJLEtBQUssRUFBRSxVQUFVLFVBQU8sSUFBSSxLQUFLLEVBQUUsU0FBUyxPQUFPLElBQUksRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUc7QUFBQSxNQUMxRyxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxhQUFhTSxHQUFFLGFBQWEsR0FBRyxDQUFDO0FBQUEsTUFDaEMsWUFBWSxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQUEsTUFDdEIsV0FBVztBQUFBLElBQ2pCLENBQUs7QUFDRCxVQUFNVCxLQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLE1BQUUsZ0JBQWdCLE1BQU0sUUFBUUEsR0FBRSxXQUFXLEtBQUtBLEdBQUUsUUFBUSxJQUFJQSxHQUFFLFlBQVksS0FBSyxFQUFFLFdBQVcsS0FBS0EsR0FBRSxhQUFhLFVBQVVBLEdBQUUsWUFBWSxTQUFTLEtBQUtBLEdBQUUsUUFBUSxJQUFJQSxHQUFFLGdCQUFnQixJQUFJQSxHQUFFLGNBQWMsQ0FBQyxFQUFFLFdBQVcsSUFBSUEsR0FBRSxjQUFjLENBQUNBLEdBQUUsYUFBYSxFQUFFLFdBQVcsTUFBTUEsR0FBRSxRQUFRLElBQUlBLEdBQUUsY0FBYyxFQUFFLGNBQWNBLEdBQUUsY0FBY1MsR0FBRSxvQkFBb0JULEdBQUUsYUFBYSxDQUFDLElBQUlBLEdBQUUsYUFBYSxXQUFXLEtBQUtBLEdBQUUsVUFBVSxPQUFPQSxHQUFFLFNBQVMsVUFBVUEsR0FBRSxRQUFRLEtBQUtBLEdBQUUsUUFBUSxLQUFLLENBQUNBLEdBQUUsUUFBUSxFQUFFLFFBQVFHLEVBQUUsS0FBSywyQkFBMkIsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHSCxHQUFFLE9BQU8sU0FBU0EsR0FBRSxVQUFVLE1BQUlBLEdBQUUsTUFBTSxHQUFHLENBQUMsR0FBR0EsR0FBRSxRQUFRLEVBQUUsU0FBUyxLQUFLLEtBQUssSUFBSUEsR0FBRSxhQUFhLEdBQUdBLEdBQUUsVUFBVSxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRTtBQUN6cUIsVUFBTSxJQUFJO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixPQUFPQSxHQUFFO0FBQUEsTUFDVCxPQUFPQSxHQUFFO0FBQUEsTUFDVCxZQUFZQSxHQUFFO0FBQUEsTUFDZCxtQkFBbUIsQ0FBQTtBQUFBLE1BQ25CLFdBQVdBLEdBQUU7QUFBQSxNQUNiLElBQUk7QUFBQSxNQUNKLEtBQUtBLEdBQUU7QUFBQSxNQUNQLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFBQSxNQUNkLE1BQU1BLEdBQUU7QUFBQSxNQUNSLFNBQVNBLEdBQUUsU0FBUztBQUFBLE1BQ3BCLFNBQVM7QUFBQSxNQUNULElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLE1BQU1EO0FBQUEsSUFDWjtBQUNJLFFBQUksRUFBRSxVQUFVLE9BQU8sRUFBRSxRQUFRLEtBQUssS0FBSyxFQUFFLE9BQU8sV0FBV0ksRUFBRSxNQUFNLGlCQUFpQixHQUFHLCtCQUErQixFQUFFLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsY0FBYyxNQUFJLEVBQUUsTUFBTTtBQUMvSyxZQUFNLElBQUk7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLE9BQU8sRUFBRSxLQUFLO0FBQUEsUUFDZCxZQUFZO0FBQUE7QUFBQSxRQUVaLFdBQVcsQ0FBQTtBQUFBLFFBQ1gsbUJBQW1CLENBQUE7QUFBQSxRQUNuQixJQUFJLElBQUksS0FBSyxNQUFNO0FBQUEsUUFDbkIsT0FBTyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQUEsUUFDbEIsTUFBTUgsR0FBRTtBQUFBLFFBQ1IsU0FBU0EsR0FBRSxTQUFTO0FBQUEsUUFDcEIsU0FBUyxFQUFFLFdBQVc7QUFBQSxRQUN0QixNQUFNRDtBQUFBLFFBQ04sVUFBVSxFQUFFLEtBQUs7QUFBQSxNQUN6QixHQUFTLElBQUksSUFBSSxJQUFJLElBQUk7QUFBQSxRQUNqQixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxPQUFPLEVBQUUsS0FBSztBQUFBLFFBQ2QsWUFBWUMsR0FBRTtBQUFBLFFBQ2QsV0FBVyxDQUFBO0FBQUEsUUFDWCxJQUFJLElBQUk7QUFBQSxRQUNSLE9BQU8sR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQTtBQUFBLFFBRVQsTUFBTUQ7QUFBQSxRQUNOLFVBQVUsRUFBRSxLQUFLO0FBQUEsTUFDekI7QUFDTSxXQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUNoRSxVQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7QUFDakIsUUFBRSxLQUFLLGFBQWEsY0FBYyxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxLQUFLO0FBQUEsUUFDekQsSUFBSSxJQUFJLE1BQU07QUFBQSxRQUNkLE9BQU87QUFBQSxRQUNQLEtBQUs7QUFBQSxRQUNMLFdBQVc7QUFBQSxRQUNYLGNBQWM7QUFBQSxRQUNkLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxRQUNaLFNBQVM7QUFBQSxRQUNULGdCQUFnQjtBQUFBLFFBQ2hCLFVBQVU7QUFBQSxRQUNWLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLE1BQU1BO0FBQUEsTUFDZCxDQUFPO0FBQUEsSUFDSDtBQUNFLFFBQUUsR0FBRyxHQUFHLENBQUM7QUFBQSxFQUNiO0FBQ0EsSUFBRSxRQUFRSSxFQUFFLE1BQU0sd0JBQXdCLEdBQUcsR0FBRyxHQUFHLEVBQUUsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUdKLElBQUcsQ0FBQztBQUM3RSxHQUFHLGFBQWEsR0FBRyxLQUFxQkQsa0JBQUUsTUFBTTtBQUM5QyxLQUFHLFNBQVMsSUFBSTtBQUNsQixHQUFHLE9BQU8sR0FBRyxJQUFJO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxTQUFTO0FBQUEsRUFDVCxnQkFBZ0I7QUFDbEIsR0FBRyxLQUFxQkEsa0JBQUUsTUFBc0Isb0JBQUksT0FBTyxnQkFBZ0IsR0FBRyxLQUFxQkEsa0JBQUUsT0FBTztBQUFBLEVBQzFHLFdBQVcsQ0FBQTtBQUFBLEVBQ1gsUUFBd0Isb0JBQUksSUFBRztBQUFBLEVBQy9CLFdBQVcsQ0FBQTtBQUNiLElBQUksUUFBUSxHQUFHLEtBQXFCQSxrQkFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxNQUFNLElBQUksTUFBTTtBQUFBLEVBQ3ZHLFlBQVksR0FBRztBQUNiLFNBQUssVUFBVSxHQUFHLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxDQUFBLEdBQUksS0FBSyxVQUFVLENBQUEsR0FBSSxLQUFLLFVBQVUsR0FBRSxHQUFJLEtBQUssWUFBWSxFQUFFLE1BQU0sR0FBRSxFQUFFLEdBQUksS0FBSyxrQkFBa0IsS0FBSyxVQUFVLE1BQU0sS0FBSyxnQkFBZ0IsR0FBRyxLQUFLLGFBQWEsR0FBRyxLQUFLLFFBQXdCLG9CQUFJLElBQUcsR0FBSSxLQUFLLGNBQWNZLElBQUksS0FBSyxjQUFjQyxJQUFJLEtBQUssb0JBQW9CQyxJQUFJLEtBQUssb0JBQW9CQyxJQUFJLEtBQUssa0JBQWtCQyxJQUFJLEtBQUssa0JBQWtCQyxJQUFJLEtBQUssTUFBSyxHQUFJLEtBQUssYUFBYSxLQUFLLFdBQVcsS0FBSyxJQUFJLEdBQUcsS0FBSyxlQUFlLEtBQUssYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLGVBQWUsS0FBSyxhQUFhLEtBQUssSUFBSSxHQUFHLEtBQUssWUFBWSxLQUFLLFVBQVUsS0FBSyxJQUFJO0FBQUEsRUFDdm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVQSxRQUFRLEdBQUc7QUFDVCxTQUFLLE1BQU0sSUFBRTtBQUNiLGVBQVcsS0FBSyxNQUFNLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRTtBQUN2QyxjQUFRLEVBQUUsTUFBSTtBQUFBLFFBQ1osS0FBSztBQUNILGVBQUssU0FBUyxFQUFFLEdBQUcsS0FBSSxHQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSTtBQUMvRDtBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVztBQUNsRDtBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssY0FBYyxFQUFFLEdBQUcsS0FBSSxHQUFJLEVBQUUsT0FBTztBQUN6QztBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssZUFBZSxDQUFDO0FBQ3JCO0FBQUEsUUFDRixLQUFLO0FBQ0gsZUFBSyxZQUFZLEVBQUUsR0FBRyxLQUFJLEdBQUksRUFBRSxVQUFVO0FBQzFDO0FBQUEsUUFDRixLQUFLO0FBQ0gsZUFBSyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPO0FBQ25DO0FBQUEsTUFDVjtBQUNJLFVBQU0sSUFBSSxLQUFLLFVBQVMsR0FBSSxJQUFJWCxHQUFDO0FBQ2pDLE9BQUUsR0FBSTtBQUFBLE1BQ0o7QUFBQSxNQUNBLEtBQUssYUFBWTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTDtBQUFBLE1BQ0EsRUFBRTtBQUFBLE1BQ0YsS0FBSztBQUFBLElBQ1g7QUFDSSxlQUFXLEtBQUssS0FBSztBQUNuQixVQUFJLE1BQU0sUUFBUSxFQUFFLEtBQUssR0FBRztBQUMxQixZQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sTUFBTSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsWUFBWSxTQUFTO0FBQ3hFLGdCQUFNLElBQUk7QUFBQSxZQUNSLGdGQUFnRixFQUFFLEVBQUU7QUFBQSxVQUNoRztBQUNRLFVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztBQUFBLE1BQ3JCO0FBQUEsRUFDSjtBQUFBLEVBQ0EsZUFBZSxHQUFHO0FBQ2hCLFVBQU0sSUFBSSxFQUFFLEdBQUcsS0FBSSxFQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBRSxXQUFXLE1BQU0sR0FBRztBQUM1RCxlQUFXLEtBQUssR0FBRztBQUNqQixVQUFJLElBQUksS0FBSyxTQUFTLENBQUM7QUFDdkIsVUFBSSxDQUFDLEdBQUc7QUFDTixjQUFNTCxLQUFJLEVBQUUsS0FBSTtBQUNoQixhQUFLLFNBQVNBLEVBQUMsR0FBRyxJQUFJLEtBQUssU0FBU0EsRUFBQztBQUFBLE1BQ3ZDO0FBQ0EsWUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUNBLE9BQU1BLEdBQUUsUUFBUSxNQUFNLEVBQUUsR0FBRyxLQUFJLENBQUU7QUFBQSxJQUMzRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQVcsR0FBRztBQUNaSSxNQUFFLEtBQUssb0JBQW9CLENBQUMsR0FBRyxLQUFLLFVBQVUsR0FBRyxLQUFLLFlBQVksSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxLQUFLLGNBQWM7QUFBQSxFQUMxSDtBQUFBLEVBQ0EsY0FBYyxHQUFHLEdBQUcsR0FBRztBQUNyQixRQUFJLEVBQUUsU0FBUyxJQUFJO0FBQ2pCLFdBQUssY0FBYyxHQUFHLEVBQUUsUUFBUSxJQUFFLEdBQUcsS0FBSyxjQUFjLEdBQUcsRUFBRSxRQUFRLEtBQUU7QUFDdkU7QUFBQSxJQUNGO0FBQ0EsUUFBSSxFQUFFLFNBQVMsTUFBTSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sSUFBSSxXQUFXLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxTQUFTLEVBQUUsU0FBUyxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUMsRUFBRTtBQUMxSjtBQUNGLFVBQU0sSUFBSSxDQUFBO0FBQ1YsUUFBSSxJQUFJLENBQUE7QUFDUixlQUFXSixNQUFLLEVBQUU7QUFDaEIsVUFBSUEsR0FBRSxTQUFTLElBQUk7QUFDakIsY0FBTSxJQUFJLEdBQUdBLEVBQUM7QUFDZCxVQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUE7QUFBQSxNQUNoQztBQUNFLFVBQUUsS0FBS0EsRUFBQztBQUNaLFFBQUksRUFBRSxTQUFTLEtBQUssRUFBRSxTQUFTLEdBQUc7QUFDaEMsWUFBTUEsS0FBSTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sSUFBSWlCLEdBQUU7QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLEtBQUssR0FBRyxDQUFDO0FBQUEsTUFDakI7QUFDTSxRQUFFLEtBQUssR0FBR2pCLEVBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTTtBQUFBLElBQ3pCO0FBQ0EsTUFBRSxJQUFJLFFBQVEsQ0FBQ0EsT0FBTSxLQUFLLGNBQWMsR0FBR0EsSUFBRyxJQUFFLENBQUM7QUFBQSxFQUNuRDtBQUFBLEVBQ0EsZUFBZTtBQUNiLFdBQU8sS0FBSztBQUFBLE1BQ1YsRUFBRSxJQUFJLEdBQUcsTUFBTSxFQUFDO0FBQUEsTUFDaEIsRUFBRSxJQUFJLEdBQUcsTUFBTSxHQUFHLEtBQUssS0FBSyxRQUFPO0FBQUEsTUFDbkM7QUFBQSxJQUNOLEdBQU8sRUFBRSxJQUFJLEdBQUcsS0FBSyxLQUFLLFFBQU87QUFBQSxFQUMvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNBLFNBQVMsR0FBRyxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVFBLEtBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRO0FBQzFGLFVBQU0sSUFBSSxHQUFHLEtBQUk7QUFDakIsUUFBSSxDQUFDLEtBQUssZ0JBQWdCLE9BQU8sSUFBSSxDQUFDO0FBQ3BDSSxRQUFFLEtBQUssaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLEtBQUssZ0JBQWdCLE9BQU8sSUFBSSxHQUFHO0FBQUEsUUFDaEUsTUFBTTtBQUFBLFFBQ04sSUFBSTtBQUFBLFFBQ0osY0FBYyxDQUFBO0FBQUEsUUFDZCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixTQUFTLENBQUE7QUFBQSxRQUNULFFBQVEsQ0FBQTtBQUFBLFFBQ1IsWUFBWSxDQUFBO0FBQUEsTUFDcEIsQ0FBTztBQUFBLFNBQ0U7QUFDSCxZQUFNLElBQUksS0FBSyxnQkFBZ0IsT0FBTyxJQUFJLENBQUM7QUFDM0MsVUFBSSxDQUFDO0FBQ0gsY0FBTSxJQUFJLE1BQU0sb0JBQW9CLENBQUMsRUFBRTtBQUN6QyxRQUFFLFFBQVEsRUFBRSxNQUFNLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTztBQUFBLElBQzVDO0FBQ0EsUUFBSSxNQUFNQSxFQUFFLEtBQUssNkJBQTZCLEdBQUcsQ0FBQyxJQUFJLE1BQU0sUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxLQUFLLGVBQWUsR0FBRyxFQUFFLEtBQUksQ0FBRSxDQUFDLElBQUksR0FBRztBQUN0SSxZQUFNLElBQUksS0FBSyxnQkFBZ0IsT0FBTyxJQUFJLENBQUM7QUFDM0MsVUFBSSxDQUFDO0FBQ0gsY0FBTSxJQUFJLE1BQU0sb0JBQW9CLENBQUMsRUFBRTtBQUN6QyxRQUFFLE9BQU8sR0FBRyxFQUFFLEtBQUssT0FBT00sR0FBRSxhQUFhLEVBQUUsS0FBSyxNQUFNTCxHQUFDLENBQUU7QUFBQSxJQUMzRDtBQUNBLElBQUFMLE9BQU1JLEVBQUUsS0FBSyx5QkFBeUIsR0FBR0osRUFBQyxJQUFJLE1BQU0sUUFBUUEsRUFBQyxJQUFJQSxLQUFJLENBQUNBLEVBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxLQUFLLFlBQVksR0FBRyxFQUFFLEtBQUksQ0FBRSxDQUFDLElBQUksTUFBTUksRUFBRSxLQUFLLHdCQUF3QixHQUFHLENBQUMsSUFBSSxNQUFNLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sS0FBSyxTQUFTLEdBQUcsRUFBRSxLQUFJLENBQUUsQ0FBQyxJQUFJLE1BQU1BLEVBQUUsS0FBSyx3QkFBd0IsR0FBRyxDQUFDLElBQUksTUFBTSxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEtBQUssYUFBYSxHQUFHLEVBQUUsS0FBSSxDQUFFLENBQUM7QUFBQSxFQUN4VztBQUFBLEVBQ0EsTUFBTSxHQUFHO0FBQ1AsU0FBSyxRQUFRLENBQUEsR0FBSSxLQUFLLFFBQVEsQ0FBQSxHQUFJLEtBQUssWUFBWSxFQUFFLE1BQU0sR0FBRSxFQUFFLEdBQUksS0FBSyxrQkFBa0IsS0FBSyxVQUFVLE1BQU0sS0FBSyxnQkFBZ0IsR0FBRyxLQUFLLFVBQVUsR0FBRSxHQUFJLE1BQU0sS0FBSyxRQUF3QixvQkFBSSxJQUFHLEdBQUljLEdBQUU7QUFBQSxFQUM5TTtBQUFBLEVBQ0EsU0FBUyxHQUFHO0FBQ1YsV0FBTyxLQUFLLGdCQUFnQixPQUFPLElBQUksQ0FBQztBQUFBLEVBQzFDO0FBQUEsRUFDQSxZQUFZO0FBQ1YsV0FBTyxLQUFLLGdCQUFnQjtBQUFBLEVBQzlCO0FBQUEsRUFDQSxlQUFlO0FBQ2JkLE1BQUUsS0FBSyxnQkFBZ0IsS0FBSyxTQUFTO0FBQUEsRUFDdkM7QUFBQSxFQUNBLGVBQWU7QUFDYixXQUFPLEtBQUssZ0JBQWdCO0FBQUEsRUFDOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLFFBQVEsR0FBRyxHQUFHLEdBQUc7QUFDZixTQUFLLE1BQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxHQUFHLFNBQVMsRUFBQyxDQUFFLEdBQUdBLEVBQUUsS0FBSyxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLFdBQVc7QUFDVCxXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsZ0JBQWdCLElBQUksSUFBSTtBQUN0QixXQUFPLE1BQU0sRUFBRSxjQUFjLEtBQUssaUJBQWlCLEdBQUcsRUFBRSxVQUFVLEdBQUcsS0FBSyxhQUFhLE1BQU07QUFBQSxFQUMvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxrQkFBa0IsSUFBSSxJQUFJLElBQUksSUFBSTtBQUNoQyxXQUFPLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYTtBQUFBLEVBQzdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsY0FBYyxJQUFJLElBQUk7QUFDcEIsV0FBTyxNQUFNLEVBQUUsWUFBWSxLQUFLLGlCQUFpQixHQUFHLEVBQUUsUUFBUSxHQUFHLEtBQUssYUFBYSxNQUFNO0FBQUEsRUFDM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxnQkFBZ0IsSUFBSSxJQUFJLElBQUksSUFBSTtBQUM5QixXQUFPLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVztBQUFBLEVBQ3pDO0FBQUEsRUFDQSxnQkFBZ0IsR0FBRyxHQUFHLElBQUksSUFBSTtBQUM1QixVQUFNLElBQUksS0FBSyxnQkFBZ0IsRUFBRSxHQUFHLEtBQUksQ0FBRSxHQUFHLElBQUksS0FBSyxrQkFBa0IsRUFBRSxHQUFHLEtBQUksR0FBSSxFQUFFLElBQUksR0FBR0osS0FBSSxLQUFLLGdCQUFnQixFQUFFLEdBQUcsS0FBSSxDQUFFLEdBQUcsSUFBSSxLQUFLLGtCQUFrQixFQUFFLEdBQUcsS0FBSSxHQUFJLEVBQUUsSUFBSTtBQUNuTCxTQUFLO0FBQUEsTUFDSDtBQUFBLE1BQ0E7QUFBQSxNQUNBLEVBQUU7QUFBQSxNQUNGLEVBQUU7QUFBQSxNQUNGLEVBQUU7QUFBQSxNQUNGLEVBQUU7QUFBQSxNQUNGLEVBQUU7QUFBQSxNQUNGLEVBQUU7QUFBQSxJQUNSLEdBQU8sS0FBSztBQUFBLE1BQ05BO0FBQUEsTUFDQTtBQUFBLE1BQ0EsRUFBRTtBQUFBLE1BQ0YsRUFBRTtBQUFBLE1BQ0YsRUFBRTtBQUFBLE1BQ0YsRUFBRTtBQUFBLE1BQ0YsRUFBRTtBQUFBLE1BQ0YsRUFBRTtBQUFBLElBQ1IsR0FBTyxLQUFLLGdCQUFnQixVQUFVLEtBQUs7QUFBQSxNQUNyQyxLQUFLO0FBQUEsTUFDTCxLQUFLQTtBQUFBLE1BQ0wsZUFBZVUsR0FBRSxhQUFhLEdBQUdMLEdBQUMsQ0FBRTtBQUFBLElBQzFDLENBQUs7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxZQUFZLEdBQUcsR0FBRyxHQUFHO0FBQ25CLFFBQUksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLO0FBQ3RDLFdBQUssZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0FBQUEsYUFDckIsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVU7QUFDckQsWUFBTSxJQUFJLEtBQUssZ0JBQWdCLEVBQUUsS0FBSSxDQUFFLEdBQUcsSUFBSSxLQUFLLGtCQUFrQixDQUFDLEdBQUdMLEtBQUksS0FBSyxjQUFjLEVBQUUsTUFBTSxHQUFHLElBQUksS0FBSyxnQkFBZ0IsQ0FBQztBQUNySSxXQUFLLFNBQVMsR0FBRyxDQUFDLEdBQUcsS0FBSyxTQUFTQSxJQUFHLENBQUMsR0FBRyxLQUFLLGdCQUFnQixVQUFVLEtBQUs7QUFBQSxRQUM1RSxLQUFLO0FBQUEsUUFDTCxLQUFLQTtBQUFBLFFBQ0wsZUFBZSxJQUFJVSxHQUFFLGFBQWEsR0FBR0wsR0FBQyxDQUFFLElBQUk7QUFBQSxNQUNwRCxDQUFPO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGVBQWUsR0FBRyxHQUFHO0FBQ25CLFVBQU0sSUFBSSxLQUFLLGdCQUFnQixPQUFPLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSyxFQUFFLEVBQUUsS0FBSSxJQUFLO0FBQ2xHLE9BQUcsY0FBYyxLQUFLSyxHQUFFLGFBQWEsR0FBR0wsR0FBQyxDQUFFLENBQUM7QUFBQSxFQUM5QztBQUFBLEVBQ0EsYUFBYSxHQUFHO0FBQ2QsV0FBTyxFQUFFLFdBQVcsR0FBRyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUk7QUFBQSxFQUN2RDtBQUFBLEVBQ0EsZUFBZTtBQUNiLFdBQU8sS0FBSyxjQUFjLGNBQWMsS0FBSyxVQUFVO0FBQUEsRUFDekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsY0FBYyxHQUFHLElBQUksSUFBSTtBQUN2QixTQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksR0FBRyxFQUFFLElBQUksR0FBRyxRQUFRLENBQUEsR0FBSSxZQUFZLENBQUEsR0FBSTtBQUNoRixVQUFNLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQztBQUM1QixTQUFLLEtBQUssRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxNQUFNO0FBQ2pELFlBQU0sSUFBSSxFQUFFLFFBQVEsWUFBWSxJQUFJLEVBQUUsS0FBSTtBQUMxQyxVQUFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLEdBQUc7QUFDbkMsY0FBTSxJQUFJLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxZQUFZO0FBQ3RGLFVBQUUsV0FBVyxLQUFLLENBQUM7QUFBQSxNQUNyQjtBQUNBLFFBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxJQUNqQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsYUFBYTtBQUNYLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTQSxZQUFZLEdBQUcsR0FBRztBQUNoQixNQUFFLE1BQU0sR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNO0FBQzFCLFVBQUksSUFBSSxLQUFLLFNBQVMsQ0FBQztBQUN2QixVQUFJLENBQUMsR0FBRztBQUNOLGNBQU0sSUFBSSxFQUFFLEtBQUk7QUFDaEIsYUFBSyxTQUFTLENBQUMsR0FBRyxJQUFJLEtBQUssU0FBUyxDQUFDO0FBQUEsTUFDdkM7QUFDQSxTQUFHLFNBQVMsS0FBSyxDQUFDO0FBQUEsSUFDcEIsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV0EsU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFLLFNBQVMsQ0FBQyxHQUFHLFFBQVEsS0FBSyxDQUFDO0FBQUEsRUFDbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLGFBQWEsR0FBRyxHQUFHO0FBQ2pCLFNBQUssU0FBUyxDQUFDLEdBQUcsWUFBWSxLQUFLLENBQUM7QUFBQSxFQUN0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSx3QkFBd0I7QUFDdEIsV0FBTyxLQUFLLFFBQVEsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFBQSxFQUMvQztBQUFBLEVBQ0EsZUFBZTtBQUNiLFdBQU8sS0FBSyx5QkFBeUIsU0FBUztBQUFBLEVBQ2hEO0FBQUEsRUFDQSxhQUFhLEdBQUc7QUFDZCxVQUFNLElBQUksS0FBSyxzQkFBcUI7QUFDcEMsUUFBSSxFQUFFLFFBQVEsSUFBSSxLQUFLLFFBQVEsUUFBUSxFQUFFLE1BQU0sSUFBSSxPQUFPLEVBQUMsQ0FBRTtBQUFBLEVBQy9EO0FBQUEsRUFDQSxVQUFVLEdBQUc7QUFDWCxXQUFPLEVBQUUsV0FBVyxHQUFHLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSTtBQUFBLEVBQ3ZEO0FBQUEsRUFDQSxVQUFVO0FBQ1IsVUFBTSxJQUFJQSxHQUFDO0FBQ1gsV0FBTztBQUFBLE1BQ0wsT0FBTyxLQUFLO0FBQUEsTUFDWixPQUFPLEtBQUs7QUFBQSxNQUNaLE9BQU8sQ0FBQTtBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsV0FBVyxHQUFHLEtBQUssYUFBWSxDQUFFO0FBQUEsSUFDdkM7QUFBQSxFQUNFO0FBQUEsRUFDQSxZQUFZO0FBQ1YsV0FBT0EsR0FBQyxFQUFHO0FBQUEsRUFDYjtBQUNGLEdBQUdOLEVBQUUsR0FBRyxTQUFTLEdBQUcsRUFBRSxlQUFlO0FBQUEsRUFDbkMsYUFBYTtBQUFBLEVBQ2IsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUNkLEdBQUcsSUFBSSxLQUFxQkEsa0JBQUUsQ0FBQyxNQUFNO0FBQUE7QUFBQSxZQUV6QixFQUFFLGVBQWU7QUFBQSxjQUNmLEVBQUUsZUFBZTtBQUFBO0FBQUE7QUFBQSxVQUdyQixFQUFFLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBS1osRUFBRSxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFPWCxFQUFFLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlqQixFQUFFLE9BQU87QUFBQSxZQUNQLEVBQUUsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSVosRUFBRSxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUtYLEVBQUUsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1uQixFQUFFLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVVWLEVBQUUsZUFBZTtBQUFBLFVBQ25CLEVBQUUsWUFBWTtBQUFBO0FBQUE7QUFBQSxZQUdaLEVBQUUsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVNqQixFQUFFLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBS1QsRUFBRSxvQkFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFJVixFQUFFLG1CQUFtQjtBQUFBO0FBQUEsd0JBRW5CLEVBQUUsbUJBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSXJCLEVBQUUsbUJBQW1CO0FBQUEsWUFDakMsRUFBRSxtQkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBS3ZCLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLFdBRzVDLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFJOUMsRUFBRSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTWpCLEVBQUUsaUJBQWlCO0FBQUEsWUFDakIsRUFBRSxpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlyQixFQUFFLGlCQUFpQjtBQUFBLFlBQ2pCLEVBQUUsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFJckIsRUFBRSxrQkFBa0I7QUFBQSxZQUNsQixFQUFFLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlkLEVBQUUsdUJBQXVCLEVBQUUsVUFBVTtBQUFBLGVBQ2hDLEVBQUUsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFLakIsRUFBRSxZQUFZLEVBQUUsT0FBTztBQUFBLFlBQ3JCLEVBQUUsZUFBZSxFQUFFLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUkvQixFQUFFLE9BQU87QUFBQSxZQUNQLEVBQUUsZUFBZSxFQUFFLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUkvQixFQUFFLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlYLEVBQUUsd0JBQXdCO0FBQUEsWUFDeEIsRUFBRSxlQUFlLEVBQUUsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FLOUIsRUFBRSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBU2hCLEVBQUUsZUFBZSxFQUFFLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUS9CLEVBQUUsdUJBQXVCLEVBQUUsVUFBVTtBQUFBO0FBQUE7QUFBQSxVQUdyQyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWM3QyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVE3QyxFQUFFLFlBQVk7QUFBQSxZQUNaLEVBQUUsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1uQixFQUFFLFlBQVk7QUFBQSxZQUNaLEVBQUUsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBT25CLEVBQUUsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSWQsRUFBRSxhQUFhO0FBQUE7QUFBQTtBQUFBLG1CQUdQLEVBQUUsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSXhCLEVBQUUsU0FBUztBQUFBLFlBQ1QsRUFBRSxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFPYixFQUFFLFNBQVM7QUFBQTtBQUFBLEdBRWxCLFdBQVcsR0FBRyxLQUFLOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
